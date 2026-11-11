// DSH host 半片：
//   1. 给浏览器半片下发社区地址（/community/config）
//   2. 右侧抽屉的对话通道（/community/ai/chat，SSE 流式）
//   3. agent 工具 community：读板块/帖子/评论，写帖子/评论
//   4. 系统提示里加一段，说明社区的存在
//
// 环境变量：
//   ACV_BASE_URL      社区地址，默认 https://community.achoverse.com
//   ACV_SERVICE_TOKEN 社区服务令牌（写操作、绑定会话都要用）
//   也可以写在 $DSH_HOME/achoverse-community.json：{ baseUrl, serviceToken }
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { randomUUID } from 'node:crypto'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'
import { recordsToMessages, runChatTurn } from './chat.js'
import { fileURLToPath } from 'node:url'

const PREFIX = '/community'

function env(name, fallback = '') {
  return process.env[name] || fallback
}

/**
 * 配置来源（优先级从高到低）：
 *   1. 环境变量 ACV_BASE_URL / ACV_SERVICE_TOKEN
 *   2. 包目录下的 config.local.json，或 $DSH_HOME/achoverse-community.json
 *      → { "baseUrl": "...", "serviceToken": "..." }（后者优先）
 *   3. 包目录下的公开 config.json（只提供默认地址，不含令牌）
 *   4. 正式社区内置默认值
 * 桌面版从 GUI 启动时没有自定义环境变量，所以第 2 条是主要通道。
 */
function readJsonFile(file) {
  try {
    const value = JSON.parse(readFileSync(file, 'utf8'))
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {}
  } catch {
    return {}
  }
}

function pluginConfig() {
  const home = process.env.DSH_HOME || join(homedir(), '.dsh')
  const packageRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
  const packageConfig = join(packageRoot, 'config.local.json')
  const defaults = readJsonFile(join(packageRoot, 'config.json'))
  const file = { ...readJsonFile(packageConfig), ...readJsonFile(join(home, 'achoverse-community.json')) }
  return {
    baseUrl: String(env('ACV_BASE_URL', file.baseUrl || defaults.baseUrl || 'https://community.achoverse.com')).replace(/\/$/, ''),
    serviceToken: String(env('ACV_SERVICE_TOKEN', file.serviceToken || '')),
    agentPreset: String(file.agentPreset || '').trim(),
  }
}

function baseUrl() {
  return pluginConfig().baseUrl
}

function json(res, status, body) {
  res.statusCode = status
  res.setHeader('content-type', 'application/json; charset=utf-8')
  res.setHeader('cache-control', 'no-store')
  res.end(JSON.stringify(body))
}

/** 最近一次在抽屉登录的账号令牌；CLI 与任意 DSH 会话的写操作共用。 */
function readAgentToken() {
  if (process.env.ACV_TOKEN) return process.env.ACV_TOKEN.trim() || null
  try {
    return readFileSync(cliTokenFile(), 'utf8').trim() || null
  } catch {
    return null
  }
}

/** 把当前登录令牌写到插件目录，供 acv CLI 使用（0600，不进仓库）。 */
function cliTokenFile() {
  return join(dirname(fileURLToPath(import.meta.url)), '..', '.acv-cli-token')
}

function writeCliToken(token) {
  try {
    writeFileSync(cliTokenFile(), String(token), { mode: 0o600 })
  } catch {
    // 写不进去时 CLI 仍可用 ACV_TOKEN
  }
}

/** 按社区账户保存抽屉的 DSH 会话；旧的共享会话不自动归属给任何账户。 */

function chatSessionsFile() {
  return join(dirname(fileURLToPath(import.meta.url)), '..', '.chat-sessions.json')
}

function readChatSessions() {
  try {
    const data = JSON.parse(readFileSync(chatSessionsFile(), 'utf8'))
    if (!data || typeof data !== 'object' || Array.isArray(data)) return {}
    const out = {}
    for (const [accountId, value] of Object.entries(data)) {
      if (!accountId) continue
      // 兼容旧格式（accountId → sessionId 字符串）
      if (typeof value === 'string' && value) out[accountId] = { sessionId: value, preset: null }
      else if (value && typeof value.sessionId === 'string' && value.sessionId) {
        out[accountId] = { sessionId: value.sessionId, preset: value.preset ?? null }
      }
    }
    return out
  } catch {
    return {}
  }
}

function writeChatSessions(sessions) {
  try {
    writeFileSync(chatSessionsFile(), JSON.stringify(sessions))
  } catch {
    // 无法落盘时仍按当前进程内的账户映射隔离
  }
}

function rejectionOf(ctx, req) {
  const connection = ctx.get('connection')
  if (typeof connection?.requestRejection !== 'function') return 0
  return connection.requestRejection({ headers: req.headers })
}

async function readJson(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  const text = Buffer.concat(chunks).toString('utf8')
  if (!text) return {}
  try {
    return JSON.parse(text)
  } catch {
    throw Object.assign(new Error('请求不是有效的 JSON'), { status: 400 })
  }
}

async function callCommunity(path, init = {}) {
  const token = pluginConfig().serviceToken
  const headers = { ...(init.headers || {}) }
  if (token && !headers.authorization) headers.authorization = `Bearer ${token}`
  const response = await fetch(baseUrl() + path, { ...init, headers, signal: AbortSignal.timeout(12_000) })
  const text = await response.text()
  let data
  try {
    data = text ? JSON.parse(text) : {}
  } catch {
    data = { error: text.slice(0, 300) }
  }
  if (!response.ok) {
    const error = new Error(data?.error || `社区接口返回 ${response.status}`)
    error.code = data?.code
    throw error
  }
  return data
}

async function authenticatedAccount(token) {
  if (!token) throw Object.assign(new Error('请先在社区面板里登录'), { status: 401 })
  let me
  try {
    me = await callCommunity('/api/auth/me', { headers: { authorization: `Bearer ${token}` } })
  } catch {
    throw Object.assign(new Error('登录已过期，重新登录一下'), { status: 401 })
  }
  if (!me?.account?.id) throw Object.assign(new Error('请先在社区面板里登录'), { status: 401 })
  return me.account.id
}

export const inject = ['webServer']

export function apply(ctx, options = {}) {
  /** 每个社区账号单独复用自己的 DSH 会话；运行中的轮次仍全局互斥。 */
  const chat = {
    sessions: options.sessionStore?.read?.() ?? readChatSessions(),
    creating: null,
    active: null,
    busy: false,
    // 测试可关掉令牌落盘，避免把假令牌写进插件目录
    saveToken: options.saveCliToken ?? writeCliToken,
  }

  function sessionController() {
    return ctx.get('sessionController')
  }

  async function ensureChatSession(accountId) {
    const ctrl = sessionController()
    if (!ctrl) throw new Error('当前环境没有会话服务，无法对话')
    const preset = pluginConfig().agentPreset
    const existing = chat.sessions[accountId]
    // 预设变了就重开一条，避免沿用旧（完整能力）会话。
    if (existing?.sessionId && (existing.preset || '') === preset) return existing.sessionId
    if (!chat.creating) {
      chat.creating = (async () => {
        const cwd = ctx.get('workingDirectory')?.defaultDirectory
        let value
        try {
          value = await ctrl.create({ ...(cwd ? { cwd } : {}), ...(preset ? { agentPreset: preset } : {}) })
        } catch (error) {
          // 配了受限预设就不能静默退回完整 Agent
          throw new Error(
            preset
              ? `社区助手预设「${preset}」加载失败，请重载插件或检查 cordis.patch.yml：${error?.message || error}`
              : error?.message || '创建会话失败',
          )
        }
        chat.sessions[accountId] = { sessionId: String(value.sessionId), preset: preset || null }
        if (options.sessionStore) options.sessionStore.write(chat.sessions)
        else writeChatSessions(chat.sessions)
        ctx.logger?.info?.(`[achoverse-community] 抽屉会话：${chat.sessions[accountId].sessionId}`)
        return chat.sessions[accountId].sessionId
      })().finally(() => {
        chat.creating = null
      })
    }
    return chat.creating
  }

  /** 仅按已经验证的社区账号恢复其 DSH 会话历史。 */
  async function chatHistory(accountId, limit = 60) {
    const ctrl = sessionController()
    const sessionId = chat.sessions[accountId]?.sessionId
    if (!ctrl || !sessionId) return { messages: [] }
    try {
      const page = await ctrl.events(
        { address: { kind: 'session', sessionId }, maxMessages: limit },
        new AbortController().signal,
      )
      return { messages: recordsToMessages(page?.records) }
    } catch (error) {
      return { messages: [], error: error?.message || '读取历史失败' }
    }
  }

  async function userTokenFor(sessionId) {
    const active = chat.active
    if (!active || active.sessionId !== sessionId) return null
    const data = await callCommunity(`/api/ai/actor?sessionId=${encodeURIComponent(sessionId)}`)
    return data.accountId === active.accountId ? active.token : null
  }

  /** 当前轮次的令牌 → 本机缓存令牌；后者让任意 DSH 会话也能以用户身份写。 */
  async function writeTokenFor(sessionId) {
    const scoped = sessionId ? await userTokenFor(sessionId) : null
    if (scoped) return scoped
    const cached = readAgentToken()
    if (!cached) return null
    try {
      const me = await callCommunity('/api/auth/me', { headers: { authorization: `Bearer ${cached}` } })
      return me?.account?.id ? cached : null
    } catch {
      return null
    }
  }

  // 只接管抽屉当前轮次的交互问题；其他会话仍交给 DSH 原生界面。
  ctx.on('user-questions/request', (request, next) => {
    const active = chat.active
    if (!active || String(request?.agent?.id) !== active.sessionId || !active.send) return next()
    const callId = String(request.wait?.callId || active.questionCallId || randomUUID())
    const questions = request.questions?.map(question => ({
      id: question.id,
      question: question.question,
      header: question.header,
      options: question.options,
      multiSelect: Boolean(question.multiSelect),
    })) || []
    if (!questions.length) return next()
    return new Promise((resolve, reject) => {
      const onAbort = () => {
        active.questions.delete(callId)
        reject(request.signal.reason || new Error('问题已取消'))
      }
      if (request.signal?.aborted) return onAbort()
      request.signal?.addEventListener('abort', onAbort, { once: true })
      active.questions.set(callId, {
        questions,
        answer(answers) {
          request.signal?.removeEventListener('abort', onAbort)
          active.questions.delete(callId)
          resolve({ answers })
        },
      })
      active.send({ type: 'question', sessionId: active.sessionId, callId, questions })
    })
  }, { prepend: true })

  /* ---------------------------------------------------------------- HTTP */

  ctx.effect(
    () =>
      ctx.webServer.register({
        kind: 'prefix',
        path: PREFIX,
        handler: async (req, res) => {
          const url = new URL(req.url, 'http://community.local')
          const route = url.pathname.slice(PREFIX.length) || '/'
          try {
            const rejection = rejectionOf(ctx, req)
            if (rejection) return json(res, rejection, { error: '未授权' })

            if (route === '/config' && req.method === 'GET') {
              return json(res, 200, { baseUrl: baseUrl() })
            }
            if (route === '/ai/history' && req.method === 'GET') {
              const header = String(req.headers.authorization || '')
              const token = header.toLowerCase().startsWith('bearer ') ? header.slice(7).trim() : ''
              const accountId = await authenticatedAccount(token)
              const history = await chatHistory(accountId)
              return json(res, 200, history)
            }
            if (route === '/ai/chat' && req.method === 'POST') {
              return await handleChat(ctx, req, res, { ensureChatSession, chat })
            }
            if (route === '/ai/answer' && req.method === 'POST') {
              const body = await readJson(req)
              const accountId = await authenticatedAccount(body?.token)
              const active = chat.active
              if (!active || active.accountId !== accountId || body?.sessionId !== active.sessionId) {
                return json(res, 409, { error: '问题所属会话已结束' })
              }
              const pending = active.questions.get(String(body?.callId || ''))
              if (!pending) return json(res, 409, { error: '问题已结束，请刷新会话' })
              const answers = body?.answers
              if (!Array.isArray(answers) || answers.length !== pending.questions.length ||
                  new Set(answers.map(answer => answer?.id)).size !== pending.questions.length ||
                  pending.questions.some(question => !answers.some(answer => answer?.id === question.id)) ||
                  answers.some(answer => !Array.isArray(answer.selected) ||
                    answer.selected.some(label => !pending.questions.find(question => question.id === answer.id)?.options?.some(option => option.label === label)) ||
                    (!pending.questions.find(question => question.id === answer.id)?.multiSelect && answer.selected.length > 1) ||
                    (answer.custom !== undefined && typeof answer.custom !== 'string'))) {
                return json(res, 400, { error: '回答格式不正确' })
              }
              pending.answer(answers.map(answer => ({ id: answer.id, selected: answer.selected, ...answer.custom?.trim() ? { custom: answer.custom.trim() } : {} })))
              return json(res, 200, { answered: true })
            }
            if (route === '/ai/stop' && req.method === 'POST') {
              const body = await readJson(req)
              const accountId = await authenticatedAccount(body?.token)
              const active = chat.active
              if (!active || active.accountId !== accountId) return json(res, 409, { error: '没有正在运行的对话' })
              if (body?.sessionId !== active.sessionId) return json(res, 409, { error: '会话已变更，请重试' })
              await sessionController().cancel({ sessionId: active.sessionId })
              return json(res, 200, { stopped: true })
            }
            return json(res, 404, { error: '未知接口' })
          } catch (error) {
            if (res.headersSent) return res.end()
            json(res, Number(error?.status) || 500, { error: error?.message || '请求失败' })
          }
        },
      }),
    'achoverse-community: routes',
  )

  /* ---------------------------------------------------------------- 工具限制 */

  // 其他插件（任务板、媒体等）注册的是全局工具，预设挡不住；这里按会话兜底拒绝。
  const CHAT_TOOLS = new Set(['community', 'ask_user_question', 'todo_write'])
  const toolRegistry = ctx.get('tools')
  if (toolRegistry?.guard) {
    ctx.effect(
      () =>
        toolRegistry.guard(exec => {
          const active = chat.active
          if (!active || !exec?.agent) return undefined
          const agentSession = String(exec.agent.session?.id ?? exec.agent.id ?? '')
          if (agentSession !== active.sessionId) return undefined
          if (CHAT_TOOLS.has(String(exec.name))) return undefined
          return `社区助手只开放 ${[...CHAT_TOOLS].join(' / ')}，不提供 ${exec.name}`
        }),
      'achoverse-community: tool guard',
    )
  }

  /* ---------------------------------------------------------------- 工具 */

  const tools = ctx.get('tools')
  if (!tools) return

  ctx.effect(
    () =>
      tools.register({
        name: 'community',
        description:
          'Read and write the user\'s Achoverse community. Actions: "spaces" list boards; "posts" list recent posts (optionally one board via `space`); "read_post" read a post with comments; "search" find posts by keyword; "post" publish a post (needs `space`, `title`, `body`); "comment" reply to a post (needs `id`, `body`); "space_update" edit a board\'s title/subtitle/description/colors/zones (needs `space` plus the fields); "space_create" add a board (needs `title`); "space_archive" archive or restore a board (needs `space`, `archived`). Board actions run with the signed-in user\'s permissions, so a non-admin gets a refusal.',
        parameters: {
          type: 'object',
          additionalProperties: false,
          properties: {
            action: {
              type: 'string',
              enum: [
                'spaces', 'posts', 'read_post', 'search', 'post', 'comment',
                'space_update', 'space_create', 'space_archive',
              ],
              description: 'Operation to perform.',
            },
            space: {
              type: 'string',
              description: 'Board slug or id, for "posts"/"post"/"space_update"/"space_archive".',
            },
            id: { type: 'string', description: 'Post id for "read_post"/"comment".' },
            q: { type: 'string', description: 'Keyword for "search".' },
            title: { type: 'string', description: 'Post title for "post".' },
            body: { type: 'string', description: 'Markdown/plain text body for "post"/"comment".' },
            limit: { type: 'number', description: 'Max items, default 10.' },
            subtitle: { type: 'string', description: 'One-line intro (<=60 chars) for "space_create"/"space_update".' },
            description: { type: 'string', description: 'Longer board description (<=300 chars) for "space_create"/"space_update".' },
            accent: { type: 'string', description: '#RRGGBB card gradient start for "space_create"/"space_update".' },
            accentTo: { type: 'string', description: '#RRGGBB card gradient end for "space_create"/"space_update".' },
            motif: { type: 'string', description: 'Cover motif for "space_create"/"space_update".' },
            zones: {
              type: 'array',
              items: { type: 'string' },
              description: 'Where the board shows: home and/or arvr, for "space_create"/"space_update".',
            },
            archived: { type: 'boolean', description: 'true archives, false restores; for "space_archive".' },
          },
          required: ['action'],
        },
        output: {
          schema: { type: 'object', additionalProperties: true },
          render: (_args, value) => [{ type: 'text', text: JSON.stringify(value, null, 2) }],
        },
        async execute(args, exec) {
          const limit = Math.min(Math.max(Number(args?.limit) || 10, 1), 30)
          const sessionId = exec?.agent?.id ? String(exec.agent.id) : ''
          switch (args?.action) {
            case 'spaces': {
              const data = await callCommunity('/api/spaces')
              return {
                spaces: data.spaces.map(space => ({
                  slug: space.slug,
                  title: space.title,
                  subtitle: space.subtitle,
                  postCount: space.postCount,
                })),
              }
            }
            case 'posts': {
              const slug = typeof args?.space === 'string' ? args.space.trim() : ''
              if (slug) {
                const data = await callCommunity(`/api/spaces/${encodeURIComponent(slug)}?limit=${limit}`)
                return { space: { slug: data.space.slug, title: data.space.title }, posts: data.posts.map(compactPost) }
              }
              const data = await callCommunity(`/api/posts?limit=${limit}`)
              return { posts: data.posts.map(compactPost) }
            }
            case 'read_post': {
              if (!args?.id) return { ok: false, error: '缺少 id' }
              const data = await callCommunity(`/api/posts/${encodeURIComponent(args.id)}`)
              return {
                post: {
                  id: data.post.id,
                  title: data.post.title,
                  body: data.post.body,
                  space: data.post.spaceTitle,
                  author: data.post.author.displayName,
                  commentCount: data.comments.length,
                  createdAt: data.post.createdAt,
                },
                comments: data.comments.map(comment => ({
                  id: comment.id,
                  author: comment.author.displayName,
                  body: comment.body,
                  createdAt: comment.createdAt,
                })),
              }
            }
            case 'search': {
              const data = await callCommunity(`/api/search?q=${encodeURIComponent(args?.q || '')}`)
              return { posts: data.posts.map(compactPost) }
            }
            case 'post': {
              const userToken = await writeTokenFor(sessionId)
              if (!userToken) return { ok: false, error: '本机还没有登录令牌：先在社区面板登录一次，或设置 ACV_TOKEN' }
              const spaces = await callCommunity('/api/spaces')
              const space = spaces.spaces.find(item => item.slug === args?.space || item.id === args?.space)
              if (!space) return { ok: false, error: `没有这个板块：${args?.space || '（空）'}` }
              const data = await callCommunity('/api/posts', {
                method: 'POST',
                headers: { 'content-type': 'application/json', authorization: `Bearer ${userToken}` },
                body: JSON.stringify({ spaceId: space.id, title: args?.title, body: args?.body }),
              })
              return { ok: true, post: { id: data.post.id, title: data.post.title, space: space.title } }
            }
            case 'comment': {
              const userToken = await writeTokenFor(sessionId)
              if (!userToken) return { ok: false, error: '本机还没有登录令牌：先在社区面板登录一次，或设置 ACV_TOKEN' }
              if (!args?.id) return { ok: false, error: '缺少帖子 id' }
              const data = await callCommunity(`/api/posts/${encodeURIComponent(args.id)}/comments`, {
                method: 'POST',
                headers: { 'content-type': 'application/json', authorization: `Bearer ${userToken}` },
                body: JSON.stringify({ body: args?.body }),
              })
              return { ok: true, comment: { id: data.comment?.id, postId: args.id } }
            }
            case 'space_update':
            case 'space_create':
            case 'space_archive': {
              const userToken = await writeTokenFor(sessionId)
              if (!userToken) return { ok: false, error: '本机还没有登录令牌：先在社区面板登录一次，或设置 ACV_TOKEN' }
              const userHeaders = { 'content-type': 'application/json', authorization: `Bearer ${userToken}` }
              // 管理员接口按用户角色鉴权；普通成员会收到 403 原文。
              async function findSpace(reference) {
                const [publicList, adminList] = await Promise.all([
                  callCommunity('/api/spaces').catch(() => ({ spaces: [] })),
                  callCommunity('/api/admin/spaces', { headers: userHeaders }).catch(() => ({ spaces: [] })),
                ])
                return [...(adminList.spaces || []), ...(publicList.spaces || [])]
                  .find(item => item.slug === reference || item.id === reference) || null
              }
              if (args.action === 'space_create') {
                if (!args?.title) return { ok: false, error: '缺少板块名称 title' }
                const data = await callCommunity('/api/admin/spaces', {
                  method: 'POST',
                  headers: userHeaders,
                  body: JSON.stringify({
                    title: args.title,
                    slug: args.slug,
                    subtitle: args.subtitle,
                    description: args.description,
                    accent: args.accent,
                    accentTo: args.accentTo,
                    motif: args.motif,
                    zones: args.zones,
                  }),
                })
                return { ok: true, space: { id: data.space.id, slug: data.space.slug, title: data.space.title } }
              }
              if (!args?.space) return { ok: false, error: '缺少板块 slug 或 id（参数 space）' }
              const target = await findSpace(String(args.space))
              if (!target) return { ok: false, error: `没有这个板块：${args.space}` }
              if (args.action === 'space_archive') {
                const data = await callCommunity(`/api/admin/spaces/${encodeURIComponent(target.id)}/archive`, {
                  method: 'POST',
                  headers: userHeaders,
                  body: JSON.stringify({ archived: args.archived !== false }),
                })
                return { ok: true, space: { id: data.space.id, slug: data.space.slug, archivedAt: data.space.archivedAt } }
              }
              const patch = {}
              for (const key of ['title', 'subtitle', 'description', 'accent', 'accentTo', 'motif', 'zones']) {
                if (args[key] !== undefined) patch[key] = args[key]
              }
              if (!Object.keys(patch).length) return { ok: false, error: '没有要更新的字段' }
              const data = await callCommunity(`/api/admin/spaces/${encodeURIComponent(target.id)}/update`, {
                method: 'POST',
                headers: userHeaders,
                body: JSON.stringify(patch),
              })
              return {
                ok: true,
                space: { id: data.space.id, slug: data.space.slug, title: data.space.title, subtitle: data.space.subtitle, description: data.space.description },
              }
            }
            default:
              return { ok: false, error: `未知操作：${args?.action || '（空）'}` }
          }
        },
      }),
    'achoverse-community: community tool',
  )

  ctx.effect(
    () => {
      const cli = join(dirname(fileURLToPath(import.meta.url)), '..', 'scripts', 'acv.mjs')
      // 公开插件包不带 scripts/，没有 CLI 时不要在提示词里提它
      const cliHint = existsSync(cli) ? ` (me / spaces / posts / read / search / post / comment / space-*)` : ''
      return ctx.get('systemPrompt')?.section({
        name: 'achoverse-community',
        order: 62,
        text: [
          'The user keeps an Achoverse community (boards, posts, comments).',
          'Use the `community` tool for reads (spaces, posts, read_post, search) and writes (post, comment).',
          `Operate the community ONLY through the community tool${existsSync(cli) ? ` or the CLI: \`node ${cli} <command>\`` : ''}${cliHint}. Never edit this repository's code, the SQLite database, or server files to answer a community request, and never bypass the API.`,
          'Publish directly when the user asks; do not print a draft unless they asked for one.',
          'Writing goes through the user\'s community account; if the tool reports they are not signed in, ask them to sign in inside the community panel.',
        ].join(' '),
      })
    },
    'achoverse-community: prompt section',
  )
}

/** 一次对话：校验令牌 → 绑定会话 → 送进 agent → 把 session/event 转成 SSE。 */
async function handleChat(ctx, req, res, { ensureChatSession, chat }) {
  const body = await readJson(req)
  const message = String(body?.message || '').trim()
  if (!message) return json(res, 400, { error: '消息不能为空' })
  if (chat.busy) return json(res, 409, { error: '上一轮对话尚未结束' })
  chat.busy = true
  try {
    const accountId = await authenticatedAccount(body?.token)
    chat.saveToken?.(body.token)

    const ctrl = ctx.get('sessionController')
    if (!ctrl) return json(res, 503, { error: '当前环境没有会话服务' })

    const sessionId = await ensureChatSession(accountId)
    await callCommunity('/api/ai/bind', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ sessionId, userToken: body.token }),
    })

    res.writeHead(200, {
      'content-type': 'text/event-stream; charset=utf-8',
      'cache-control': 'no-store, no-transform',
      connection: 'keep-alive',
      'x-accel-buffering': 'no',
    })
    const send = frame => {
      if (!res.writableEnded) res.write(`data: ${JSON.stringify(frame)}\n\n`)
    }
    send({ type: 'session', sessionId })
    const active = { sessionId, accountId, token: body.token, send, questions: new Map(), questionCallId: null }
    chat.active = active

    const turn = runChatTurn({
      sessionId,
      send,
      subscribe: listener => ctx.on('session/event', (session, event) => {
        if (String(session?.id) === sessionId && event?.type === 'tool/call' && event.data?.name === 'ask_user_question') {
          active.questionCallId = event.data.callId
        }
        listener({ sessionId: String(session?.id), event })
      }),
      prompt: () =>
        ctrl.prompt(
          {
            sessionId,
            requestId: `acv-${Date.now().toString(36)}`,
            mode: 'queue',
            content: [{ type: 'text', text: message }],
          },
          new AbortController().signal,
        ),
    })

    res.on('close', () => {
      if (turn.finished) return
      turn.abort()
      // cancel 是同步返回 { accepted: true } 的 Remote 方法；不能直接 .catch，
      // 否则 close 事件里抛出的 TypeError 会变成未捕获异常，直接带走 host 进程。
      try {
        Promise.resolve(ctrl.cancel({ sessionId })).catch(error =>
          ctx.logger?.warn?.(`[achoverse-community] 断开后取消失败：${error?.message}`),
        )
      } catch (error) {
        ctx.logger?.warn?.(`[achoverse-community] 断开后取消失败：${error?.message}`)
      }
    })
    try {
      await turn.done
    } finally {
      if (chat.active === active) chat.active = null
      if (!res.writableEnded) res.end()
    }
  } finally {
    chat.busy = false
  }
}

function compactPost(post) {
  return {
    id: post.id,
    title: post.title,
    space: post.spaceTitle || null,
    author: typeof post.author === 'string' ? post.author : post.author?.displayName,
    excerpt: (post.excerpt || '').slice(0, 140),
    comments: post.commentCount ?? post.comments ?? 0,
    lastActivityAt: post.lastActivityAt || post.createdAt,
  }
}
