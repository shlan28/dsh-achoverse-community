// DSH host 半片：
//   1. 给浏览器半片下发社区地址（/community/config）
//   2. 右侧抽屉的对话通道（/community/ai/chat，SSE 流式）
//   3. agent 工具 community：读板块/帖子/评论，写帖子/评论
//   4. 系统提示里加一段，说明社区的存在
//
// 环境变量：
//   ACV_BASE_URL      社区地址，默认 http://127.0.0.1:8088
//   ACV_SERVICE_TOKEN 社区服务令牌（写操作、绑定会话都要用）
//   也可以写在 $DSH_HOME/achoverse-community.json：{ baseUrl, serviceToken }
import { readFileSync, writeFileSync } from 'node:fs'
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
 *   3. 内置默认值
 * 桌面版从 GUI 启动时没有自定义环境变量，所以第 2 条是主要通道。
 */
function readJsonFile(file) {
  try {
    return JSON.parse(readFileSync(file, 'utf8'))
  } catch {
    return {}
  }
}

function pluginConfig() {
  const home = process.env.DSH_HOME || join(homedir(), '.dsh')
  const packageConfig = join(dirname(fileURLToPath(import.meta.url)), '..', 'config.local.json')
  const file = { ...readJsonFile(packageConfig), ...readJsonFile(join(home, 'achoverse-community.json')) }
  return {
    baseUrl: String(env('ACV_BASE_URL', file.baseUrl || 'http://127.0.0.1:8088')).replace(/\/$/, ''),
    serviceToken: String(env('ACV_SERVICE_TOKEN', file.serviceToken || '')),
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

/** 按社区账户保存抽屉的 DSH 会话；旧的共享会话不自动归属给任何账户。 */
function chatSessionsFile() {
  return join(dirname(fileURLToPath(import.meta.url)), '..', '.chat-sessions.json')
}

function readChatSessions() {
  try {
    const data = JSON.parse(readFileSync(chatSessionsFile(), 'utf8'))
    if (!data || typeof data !== 'object' || Array.isArray(data)) return {}
    return Object.fromEntries(Object.entries(data).filter(([accountId, sessionId]) => accountId && typeof sessionId === 'string' && sessionId))
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
  const chat = { sessions: options.sessionStore?.read?.() ?? readChatSessions(), creating: null, active: null, busy: false }

  function sessionController() {
    return ctx.get('sessionController')
  }

  async function ensureChatSession(accountId) {
    const ctrl = sessionController()
    if (!ctrl) throw new Error('当前环境没有会话服务，无法对话')
    if (chat.sessions[accountId]) return chat.sessions[accountId]
    if (!chat.creating) {
      chat.creating = (async () => {
        const cwd = ctx.get('workingDirectory')?.defaultDirectory
        const value = await ctrl.create(cwd ? { cwd } : {})
        chat.sessions[accountId] = String(value.sessionId)
        if (options.sessionStore) options.sessionStore.write(chat.sessions)
        else writeChatSessions(chat.sessions)
        ctx.logger?.info?.(`[achoverse-community] 抽屉会话：${chat.sessions[accountId]}`)
        return chat.sessions[accountId]
      })().finally(() => {
        chat.creating = null
      })
    }
    return chat.creating
  }

  /** 仅按已经验证的社区账号恢复其 DSH 会话历史。 */
  async function chatHistory(accountId, limit = 60) {
    const ctrl = sessionController()
    const sessionId = chat.sessions[accountId]
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

  /* ---------------------------------------------------------------- 工具 */

  const tools = ctx.get('tools')
  if (!tools) return

  ctx.effect(
    () =>
      tools.register({
        name: 'community',
        description:
          'Read and write the user\'s Achoverse community. Actions: "spaces" list boards; "posts" list recent posts (optionally one board via `space`); "read_post" read a post with comments; "search" find posts by keyword; "post" publish a post (needs `space`, `title`, `body`); "comment" reply to a post (needs `id`, `body`). Writing requires the user to be signed in inside the community panel.',
        parameters: {
          type: 'object',
          additionalProperties: false,
          properties: {
            action: {
              type: 'string',
              enum: ['spaces', 'posts', 'read_post', 'search', 'post', 'comment'],
              description: 'Operation to perform.',
            },
            space: { type: 'string', description: 'Board slug for "posts"/"post", such as notice, tech, lounge.' },
            id: { type: 'string', description: 'Post id for "read_post"/"comment".' },
            q: { type: 'string', description: 'Keyword for "search".' },
            title: { type: 'string', description: 'Post title for "post".' },
            body: { type: 'string', description: 'Markdown/plain text body for "post"/"comment".' },
            limit: { type: 'number', description: 'Max items, default 10.' },
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
              const userToken = sessionId ? await userTokenFor(sessionId) : null
              if (!userToken) return { ok: false, error: '当前会话未绑定已登录的社区用户，请在社区面板登录并使用助手抽屉' }
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
              const userToken = sessionId ? await userTokenFor(sessionId) : null
              if (!userToken) return { ok: false, error: '当前会话未绑定已登录的社区用户，请在社区面板登录并使用助手抽屉' }
              if (!args?.id) return { ok: false, error: '缺少帖子 id' }
              const data = await callCommunity(`/api/posts/${encodeURIComponent(args.id)}/comments`, {
                method: 'POST',
                headers: { 'content-type': 'application/json', authorization: `Bearer ${userToken}` },
                body: JSON.stringify({ body: args?.body }),
              })
              return { ok: true, comment: { id: data.comment?.id, postId: args.id } }
            }
            default:
              return { ok: false, error: `未知操作：${args?.action || '（空）'}` }
          }
        },
      }),
    'achoverse-community: community tool',
  )

  ctx.effect(
    () =>
      ctx.get('systemPrompt')?.section({
        name: 'achoverse-community',
        order: 62,
        text: 'The user keeps an Achoverse community (boards, posts, comments). Use the community tool to read boards, posts and comments before answering, and to publish a post or a comment when the user asks for it — do not just print a draft unless they asked for one. Writing goes through the user\'s community account; if the tool reports that they are not signed in, ask them to sign in inside the community panel.',
      }),
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
      if (!turn.finished) {
        turn.abort()
        ctrl.cancel({ sessionId }).catch(error => ctx.logger?.warn?.(`[achoverse-community] 断开后取消失败：${error?.message}`))
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
