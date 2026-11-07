// 抽屉对话的一次「轮」：把 session/event 映射成 SSE 帧，并在 turn/end 时收尾。
//
// 抽成独立模块是为了能脱离 DSH 运行时测：传入 prompt / subscribe 两个函数即可。

function textOfMessage(message) {
  const content = message?.content
  if (!Array.isArray(content)) return ''
  return content
    .filter(block => block?.type === 'text' && typeof block.text === 'string')
    .map(block => block.text)
    .join('\n')
    .trim()
}

/** 会话日志里的 user/message + assistant/message → 抽屉气泡。 */
export function recordsToMessages(records) {
  const messages = []
  for (const record of records || []) {
    const event = record?.event || record
    if (!event) continue
    if (event.type === 'user/message') {
      const text = textOfMessage({ content: event.data?.content })
      if (text) messages.push({ role: 'user', text })
    } else if (event.type === 'assistant/message') {
      const text = textOfMessage(event.data?.message)
      if (text) messages.push({ role: 'assistant', text })
    }
  }
  return messages
}

/** 一个 session 事件 → 若干 SSE 帧（可能为空）。 */
export function sessionEventToFrames(event) {
  if (!event || typeof event !== 'object') return []
  if (event.type === 'assistant/message') {
    const text = textOfMessage(event.data?.message)
    return text ? [{ type: 'text', text }] : []
  }
  if (event.type === 'tool/call') {
    return [{ type: 'tool', phase: 'call', name: String(event.data?.name || 'tool') }]
  }
  if (event.type === 'tool/result') {
    return [{ type: 'tool', phase: 'result', error: Boolean(event.data?.error) }]
  }
  if (event.type === 'turn/end') {
    const reason = event.data?.reason?.kind || 'completed'
    return [reason === 'completed' ? { type: 'done' } : { type: 'done', reason }]
  }
  return []
}

/**
 * 开始一轮对话，返回一个句柄：`await handle.done` 等这轮结束，`handle.abort()` 提前收尾。
 * 注意不是 async 函数：调用方要在拿到句柄后自己决定等多久（SSE 不能阻塞在 prompt 上）。
 *
 * @param {object} options
 * @param {string} options.sessionId 只处理这个会话的事件
 * @param {(payload: {sessionId: string, event: object}) => (() => void)} options.subscribe
 * @param {() => Promise<void>} options.prompt 把用户消息送进 agent
 * @param {(frame: object) => void} options.send 往前端写一帧
 * @param {number} [options.timeoutMs]
 */
export function runChatTurn({ sessionId, subscribe, prompt, send, timeoutMs = 180_000 }) {
  let finished = false
  let timer = null
  let off = () => {}
  let resolveDone
  const done = new Promise(resolve => {
    resolveDone = resolve
  })

  const finish = frame => {
    if (finished) return
    finished = true
    if (timer) clearTimeout(timer)
    off()
    send(frame)
    resolveDone()
  }

  off = subscribe(({ sessionId: eventSessionId, event }) => {
    if (String(eventSessionId) !== String(sessionId)) return
    for (const frame of sessionEventToFrames(event)) {
      if (frame.type === 'done') {
        finish(frame)
        return
      }
      if (!finished) send(frame)
    }
  })

  timer = setTimeout(() => finish({ type: 'error', error: '这轮太久了，先停一下' }), timeoutMs)
  timer.unref?.()

  Promise.resolve()
    .then(() => prompt())
    .catch(error => finish({ type: 'error', error: error?.message || '对话失败' }))

  return {
    done,
    get finished() {
      return finished
    },
    abort() {
      if (finished) return
      finished = true
      if (timer) clearTimeout(timer)
      off()
      resolveDone()
    },
  }
}
