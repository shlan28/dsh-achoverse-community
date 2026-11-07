window.__ModuleLoader__.load({id:"dsh-achoverse-community",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var ba=Object.create;var K=Object.defineProperty;var ga=Object.getOwnPropertyDescriptor;var xa=Object.getOwnPropertyNames;var ha=Object.getPrototypeOf,ya=Object.prototype.hasOwnProperty;var ka=(a,c)=>{for(var e in c)K(a,e,{get:c[e],enumerable:!0})},Q=(a,c,e,v)=>{if(c&&typeof c=="object"||typeof c=="function")for(let t of xa(c))!ya.call(a,t)&&t!==e&&K(a,t,{get:()=>c[t],enumerable:!(v=ga(c,t))||v.enumerable});return a};var _=(a,c,e)=>(e=a!=null?ba(ha(a)):{},Q(c||!a||!a.__esModule?K(e,"default",{value:a,enumerable:!0}):e,a)),wa=a=>Q(K({},"__esModule",{value:!0}),a);var Ba={};ka(Ba,{apply:()=>Ia,inject:()=>Ma});module.exports=wa(Ba);var M=_(require("react"),1);var q=`/* Achoverse \u793E\u533A\uFF1A\u6D45\u7070\u753B\u5E03 + \u767D\u8272\u5927\u5706\u89D2\u5361\u7247 + \u7C89\u7D2B\u6E10\u53D8\u4E3B\u89C6\u89C9\u3002 */

:root {
  --acv-canvas: #ededf2;
  --acv-surface: #ffffff;
  --acv-ink: #16161d;
  --acv-ink-soft: #3c3c48;
  --acv-muted: #8a8a99;
  --acv-line: #eeeff3;
  --acv-pink: #f53fa6;
  --acv-orange: #ff7a45;
  --acv-brand: linear-gradient(120deg, #f53fa6, #ff7a45);
  --acv-radius-lg: 28px;
  --acv-radius: 20px;
  --acv-radius-sm: 14px;
  --acv-shadow: 0 22px 56px rgba(23, 23, 38, 0.08);
  --acv-shadow-soft: 0 10px 26px rgba(23, 23, 38, 0.06);
}

* {
  box-sizing: border-box;
}

.acv-root {
  min-height: 100%;
  padding: 28px;
  background: var(--acv-canvas);
  color: var(--acv-ink);
  font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Segoe UI', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.acv-root--panel {
  padding: 16px;
  background: transparent;
}

.acv-frame {
  max-width: 1400px;
  margin: 0 auto;
  background: var(--acv-surface);
  border-radius: var(--acv-radius-lg);
  box-shadow: var(--acv-shadow);
  padding: 22px 28px 30px;
}

.acv-root--panel .acv-frame {
  border-radius: var(--acv-radius);
  box-shadow: var(--acv-shadow-soft);
  padding: 18px 20px 24px;
}

/* ------------------------------------------------------------- \u9876\u680F */

.acv-topbar {
  display: flex;
  align-items: center;
  gap: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid var(--acv-line);
}

.acv-tabs {
  display: flex;
  align-items: center;
  gap: 8px;
}

.acv-tab {
  border: 0;
  background: transparent;
  color: var(--acv-muted);
  font: inherit;
  font-weight: 600;
  padding: 9px 18px;
  border-radius: 999px;
  cursor: pointer;
  transition: color 0.16s ease, background 0.16s ease;
}

.acv-tab:hover {
  color: var(--acv-ink);
  background: #f5f5f9;
}

.acv-tab.is-active {
  color: var(--acv-ink);
  background: #f2f2f7;
}

.acv-topbar-grow {
  flex: 1;
}

.acv-topbar-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.acv-dsh {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.02em;
  color: #fff;
  padding: 9px 18px;
  border-radius: 999px;
  background: var(--acv-brand);
  box-shadow: 0 10px 22px rgba(245, 63, 166, 0.28);
  transition: transform 0.16s ease, box-shadow 0.16s ease;
}

.acv-dsh:hover {
  transform: translateY(-1px);
  box-shadow: 0 14px 26px rgba(245, 63, 166, 0.34);
}

.acv-dsh-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #fff;
  opacity: 0.85;
}

.acv-divider {
  width: 1px;
  height: 24px;
  background: var(--acv-line);
}

.acv-user {
  display: flex;
  align-items: center;
  gap: 9px;
  border: 0;
  background: transparent;
  font: inherit;
  color: var(--acv-ink);
  cursor: pointer;
  padding: 4px 8px 4px 4px;
  border-radius: 999px;
  transition: background 0.16s ease;
}

.acv-user:hover {
  background: #f5f5f9;
}

.acv-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background: var(--acv-brand);
  overflow: hidden;
  flex: none;
}

.acv-avatar--sm {
  width: 28px;
  height: 28px;
  font-size: 11px;
}

.acv-user-name {
  font-weight: 600;
  max-width: 120px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.acv-caret {
  color: var(--acv-muted);
  font-size: 11px;
}

/* ------------------------------------------------------------- \u5E03\u5C40 */

.acv-main {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);
  gap: 26px;
  padding-top: 22px;
  align-items: start;
}

@media (max-width: 1040px) {
  .acv-main {
    grid-template-columns: minmax(0, 1fr);
  }
}

.acv-col {
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 0;
}

.acv-section-head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin: 0 0 2px;
}

.acv-section-title {
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 0;
}

.acv-section-note {
  color: var(--acv-muted);
  font-size: 12px;
}

.acv-link {
  margin-left: auto;
  border: 0;
  background: transparent;
  color: var(--acv-muted);
  font: inherit;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: 8px;
}

.acv-link:hover {
  color: var(--acv-pink);
  background: #fff0f8;
}

/* ------------------------------------------------------------- \u677F\u5757\u5927\u5361\u7247 */

.acv-space-card {
  position: relative;
  display: flex;
  flex-direction: column;
  border: 0;
  text-align: left;
  padding: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  background: var(--acv-surface);
  border-radius: var(--acv-radius);
  box-shadow: var(--acv-shadow-soft);
  overflow: hidden;
  transition: transform 0.18s ease, box-shadow 0.18s ease;
}

.acv-space-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 40px rgba(23, 23, 38, 0.12);
}

.acv-space-cover {
  position: relative;
  aspect-ratio: 4 / 1;
  width: 100%;
  min-height: 96px;
  background: linear-gradient(125deg, var(--accent, #f53fa6), var(--accent-to, #ff7a45));
  overflow: hidden;
}

.acv-space-cover::after {
  content: '';
  position: absolute;
  right: -40px;
  top: -60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
}

.acv-space-cover::before {
  content: '';
  position: absolute;
  right: 60px;
  bottom: -80px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
}

.acv-space-badge {
  position: absolute;
  top: 14px;
  left: 16px;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: rgba(255, 255, 255, 0.22);
  padding: 5px 12px;
  border-radius: 999px;
  backdrop-filter: blur(6px);
}

.acv-space-enter {
  position: absolute;
  right: 16px;
  bottom: 14px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.16s ease, transform 0.16s ease;
}

.acv-space-card:hover .acv-space-enter {
  opacity: 1;
  transform: translateY(0);
}

.acv-space-body {
  display: block;
  padding: 16px 18px 18px;
}

.acv-space-glyph {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 78px;
  line-height: 1;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.26);
  letter-spacing: -0.03em;
  pointer-events: none;
}

.acv-space-title {
  display: block;
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 4px;
}

.acv-space-sub {
  display: block;
  color: var(--acv-muted);
  font-size: 13px;
  margin: 0;
}

.acv-space-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  margin-top: 12px;
  color: var(--acv-muted);
  font-size: 12px;
}

.acv-space-meta strong {
  color: var(--acv-ink);
  font-weight: 700;
}

.acv-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #d6d6de;
}

/* ------------------------------------------------------------- \u6210\u5458 */

.acv-member {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 2px;
}

.acv-member-main {
  flex: 1;
  min-width: 0;
  display: block;
}

.acv-member-name {
  display: block;
  font-size: 13px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.acv-member-meta {
  display: block;
  color: var(--acv-muted);
  font-size: 11px;
}

/* ------------------------------------------------------------- \u793E\u533A\u6570\u636E */

.acv-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
  margin-top: 12px;
}

.acv-stat {
  background: #f8f8fc;
  border-radius: 14px;
  padding: 12px 10px;
}

.acv-stat-value {
  font-size: 22px;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.acv-stat-label {
  color: var(--acv-muted);
  font-size: 11px;
  margin-top: 2px;
}

/* ------------------------------------------------------------- \u6D88\u606F\u5361\u7247 */

.acv-panel {
  background: var(--acv-surface);
  border-radius: var(--acv-radius);
  box-shadow: var(--acv-shadow-soft);
  padding: 18px;
}

.acv-msg {
  display: flex;
  gap: 12px;
  padding: 12px 4px;
  border-radius: 14px;
  border: 0;
  background: transparent;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  width: 100%;
  transition: background 0.16s ease;
}

.acv-msg:hover {
  background: #f7f7fb;
}

.acv-msg + .acv-msg {
  border-top: 1px solid var(--acv-line);
}

.acv-msg-main {
  min-width: 0;
  flex: 1;
}

.acv-msg-title {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.acv-msg-body {
  color: var(--acv-muted);
  font-size: 12px;
  margin: 3px 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.acv-msg-time {
  display: block;
  color: #b3b3c0;
  font-size: 11px;
  margin-top: 6px;
}

.acv-unread {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--acv-pink);
  margin-top: 7px;
  flex: none;
}

.acv-empty {
  color: var(--acv-muted);
  font-size: 13px;
  padding: 18px 6px;
  text-align: center;
}

/* ------------------------------------------------------------- \u6700\u8FD1\u66F4\u65B0 */

.acv-recent-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  border: 0;
  background: transparent;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  padding: 12px 6px;
  border-radius: 14px;
  transition: background 0.16s ease;
}

.acv-recent-item + .acv-recent-item {
  border-top: 1px solid var(--acv-line);
}

.acv-recent-item:hover {
  background: #f7f7fb;
}

.acv-recent-main {
  flex: 1;
  min-width: 0;
}

.acv-recent-title {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.acv-recent-meta {
  display: block;
  color: var(--acv-muted);
  font-size: 12px;
  margin-top: 3px;
}

/* ------------------------------------------------------------- \u901A\u7528\u63A7\u4EF6 */

.acv-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 0;
  cursor: pointer;
  font: inherit;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 999px;
  background: #f2f2f7;
  color: var(--acv-ink);
  transition: background 0.16s ease, transform 0.16s ease;
}

.acv-btn:hover {
  background: #e9e9f1;
}

.acv-btn.primary {
  background: var(--acv-ink);
  color: #fff;
}

.acv-btn.primary:hover {
  background: #26262f;
}

.acv-btn.brand {
  background: var(--acv-brand);
  color: #fff;
  box-shadow: 0 10px 22px rgba(245, 63, 166, 0.24);
}

.acv-btn.brand:hover {
  transform: translateY(-1px);
}

.acv-btn.ghost {
  background: transparent;
  color: var(--acv-muted);
}

.acv-btn.ghost:hover {
  color: var(--acv-pink);
  background: #fff0f8;
}

.acv-btn:disabled {
  opacity: 0.55;
  cursor: default;
  transform: none;
}

.acv-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: 0;
  background: transparent;
  color: var(--acv-muted);
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  padding: 6px 8px;
  border-radius: 10px;
}

.acv-back:hover {
  color: var(--acv-ink);
  background: #f5f5f9;
}

/* ------------------------------------------------------------- \u677F\u5757\u9875 */

.acv-board-head {
  position: relative;
  border-radius: var(--acv-radius);
  padding: 22px 24px;
  color: #fff;
  background: linear-gradient(120deg, var(--accent, #f53fa6), var(--accent-to, #ff7a45));
  overflow: hidden;
  box-shadow: 0 16px 34px rgba(245, 63, 166, 0.22);
}

.acv-board-head::after {
  content: '';
  position: absolute;
  right: -50px;
  top: -70px;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.16);
}

.acv-board-title {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
}

.acv-board-sub {
  margin: 6px 0 0;
  font-size: 13px;
  opacity: 0.92;
  max-width: 520px;
}

.acv-board-actions {
  display: flex;
  gap: 10px;
  margin-top: 16px;
  position: relative;
  z-index: 1;
}

.acv-post-row {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  border: 0;
  background: transparent;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
  padding: 16px 10px;
  border-radius: 16px;
  transition: background 0.16s ease;
}

.acv-post-row + .acv-post-row {
  border-top: 1px solid var(--acv-line);
}

.acv-post-row:hover {
  background: #f7f7fb;
}

.acv-post-title {
  font-size: 15px;
  font-weight: 650;
  margin: 0;
}

.acv-post-excerpt {
  color: var(--acv-muted);
  font-size: 13px;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.acv-post-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--acv-muted);
  font-size: 12px;
}

.acv-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f4f4f9;
  color: var(--acv-ink-soft);
  border-radius: 999px;
  padding: 3px 10px;
  font-size: 12px;
}

/* ------------------------------------------------------------- \u5E16\u5B50\u8BE6\u60C5 */

.acv-article {
  padding: 4px 2px 18px;
  border-bottom: 1px solid var(--acv-line);
}

.acv-article-title {
  font-size: 26px;
  line-height: 1.35;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin: 6px 0 12px;
}

.acv-article-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--acv-muted);
  font-size: 13px;
}

.acv-prose {
  margin-top: 18px;
  font-size: 15px;
  line-height: 1.8;
  color: var(--acv-ink-soft);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.acv-comment {
  display: flex;
  gap: 12px;
  padding: 14px 2px;
}

.acv-comment + .acv-comment {
  border-top: 1px solid var(--acv-line);
}

.acv-comment-main {
  flex: 1;
  min-width: 0;
}

.acv-comment-head {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 13px;
}

.acv-comment-author {
  font-weight: 650;
}

.acv-comment-time {
  color: var(--acv-muted);
  font-size: 12px;
}

.acv-comment-body {
  margin: 6px 0 0;
  font-size: 14px;
  color: var(--acv-ink-soft);
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

/* ------------------------------------------------------------- \u8868\u5355 */

.acv-field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
}

.acv-field label {
  font-size: 12px;
  font-weight: 600;
  color: var(--acv-muted);
}

.acv-input,
.acv-textarea {
  width: 100%;
  border: 1px solid #e6e6ee;
  background: #fafafd;
  border-radius: 12px;
  padding: 11px 13px;
  font: inherit;
  color: var(--acv-ink);
  outline: none;
  transition: border-color 0.16s ease, box-shadow 0.16s ease, background 0.16s ease;
}

.acv-input:focus,
.acv-textarea:focus {
  border-color: #f5a6d3;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(245, 63, 166, 0.1);
}

.acv-textarea {
  min-height: 120px;
  resize: vertical;
  line-height: 1.7;
}

.acv-composer {
  background: #fbfbfe;
  border: 1px solid var(--acv-line);
  border-radius: var(--acv-radius);
  padding: 18px;
}

.acv-row {
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: flex-end;
  margin-top: 12px;
}

.acv-error {
  background: #fff1f1;
  color: #c0392b;
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 13px;
  margin-bottom: 12px;
}

.acv-notice {
  background: #fff7e8;
  color: #8a6d1f;
  border-radius: 12px;
  padding: 10px 14px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.acv-notice .acv-btn {
  padding: 6px 14px;
  font-size: 13px;
}

.acv-captcha-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.acv-captcha-row .acv-input {
  flex: 1;
}

.acv-captcha-img {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  line-height: 0;
  flex: none;
}

/* ------------------------------------------------------------- \u5F39\u7A97 */

.acv-overlay {
  position: fixed;
  inset: 0;
  background: rgba(18, 18, 28, 0.42);
  backdrop-filter: blur(3px);
  display: grid;
  place-items: center;
  z-index: 60;
  padding: 20px;
}

.acv-modal {
  width: min(420px, 100%);
  background: #fff;
  border-radius: 24px;
  padding: 26px;
  box-shadow: 0 30px 70px rgba(17, 17, 26, 0.28);
}

.acv-modal-title {
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 4px;
}

.acv-modal-sub {
  color: var(--acv-muted);
  font-size: 13px;
  margin: 0 0 20px;
}

.acv-switch {
  display: flex;
  gap: 6px;
  background: #f4f4f9;
  padding: 4px;
  border-radius: 999px;
  margin-bottom: 20px;
}

.acv-switch button {
  flex: 1;
  border: 0;
  background: transparent;
  font: inherit;
  font-weight: 600;
  color: var(--acv-muted);
  padding: 8px 0;
  border-radius: 999px;
  cursor: pointer;
}

.acv-switch button.is-active {
  background: #fff;
  color: var(--acv-ink);
  box-shadow: 0 4px 12px rgba(23, 23, 38, 0.08);
}

/* ------------------------------------------------------------- \u63D0\u793A */

.acv-toast {
  position: fixed;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  background: #16161d;
  color: #fff;
  padding: 11px 20px;
  border-radius: 999px;
  font-size: 13px;
  box-shadow: 0 16px 34px rgba(23, 23, 38, 0.24);
  z-index: 70;
  max-width: min(560px, 90vw);
}

.acv-toast.is-error {
  background: #c0392b;
}

/* ------------------------------------------------------------- \u9AA8\u67B6/\u52A0\u8F7D */

.acv-loading {
  color: var(--acv-muted);
  font-size: 13px;
  padding: 40px 0;
  text-align: center;
}

.acv-skeleton {
  border-radius: var(--acv-radius);
  background: linear-gradient(90deg, #f4f4f9 25%, #fafafd 37%, #f4f4f9 63%);
  background-size: 400% 100%;
  animation: acv-shimmer 1.4s ease infinite;
  height: 196px;
}

@keyframes acv-shimmer {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.acv-menu {
  position: absolute;
  right: 0;
  top: calc(100% + 8px);
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 18px 44px rgba(23, 23, 38, 0.16);
  padding: 8px;
  min-width: 180px;
  z-index: 30;
}

.acv-menu button {
  display: block;
  width: 100%;
  text-align: left;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 13px;
  padding: 9px 12px;
  border-radius: 10px;
  cursor: pointer;
  color: var(--acv-ink);
}

.acv-menu button:hover {
  background: #f5f5f9;
}

.acv-menu .acv-menu-note {
  padding: 6px 12px 8px;
  font-size: 11px;
  color: var(--acv-muted);
  border-bottom: 1px solid var(--acv-line);
  margin-bottom: 6px;
}

.acv-relative {
  position: relative;
}

/* ------------------------------------------------------------- \u53F3\u4FA7\u62BD\u5C49 */

.acv-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(430px, 94vw);
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: -24px 0 64px rgba(17, 17, 26, 0.18);
  z-index: 80;
  animation: acv-slide-in 0.22s ease;
}

@keyframes acv-slide-in {
  from {
    transform: translateX(24px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.acv-drawer-head {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 18px;
  border-bottom: 1px solid var(--acv-line);
}

.acv-drawer-body {
  flex: 1;
  overflow-y: auto;
  padding: 16px 18px;
}

.acv-drawer-foot {
  padding: 14px 18px 18px;
  border-top: 1px solid var(--acv-line);
  background: #fbfbfe;
}

.acv-drawer-input {
  width: 100%;
  border: 1px solid #e6e6ee;
  border-radius: 14px;
  padding: 11px 13px;
  font: inherit;
  background: #fff;
  color: var(--acv-ink);
  resize: none;
  outline: none;
}

.acv-drawer-input:disabled {
  background: #f4f4f9;
  color: #a7a7b4;
}

/* ------------------------------------------------------------- \u4E8C\u7EA7\u9875\u9762\u5E03\u5C40 */

.acv-board-grid {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 3fr);
  gap: 26px;
  align-items: start;
}

@media (max-width: 1040px) {
  .acv-board-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

.acv-post-wrap {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 20px;
  max-width: 900px;
  margin: 0 auto;
}

/* ------------------------------------------------------------- \u62BD\u5C49\u5BF9\u8BDD */

.acv-chat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 14px;
  max-width: 92%;
}

.acv-chat.is-user {
  align-self: flex-end;
  margin-left: auto;
  align-items: flex-end;
}

.acv-chat-text {
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.65;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  background: #f5f5fa;
  color: var(--acv-ink-soft);
}

.acv-chat.is-user .acv-chat-text {
  background: var(--acv-brand);
  color: #fff;
}

.acv-chat-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 4px;
}

.acv-chat-typing {
  color: var(--acv-muted);
  font-size: 13px;
  padding: 6px 10px;
}

/* ------------------------------------------------------------- \u79FB\u52A8\u7AEF */

@media (max-width: 720px) {
  .acv-root {
    padding: 10px;
  }

  .acv-frame,
  .acv-root--panel .acv-frame {
    padding: 14px 14px 20px;
    border-radius: 20px;
  }

  .acv-topbar {
    gap: 8px;
    padding-bottom: 12px;
  }

  .acv-tab {
    padding: 8px 14px;
  }

  .acv-user-name {
    display: none;
  }

  .acv-dsh {
    padding: 8px 14px;
    font-size: 13px;
  }

  .acv-main {
    gap: 14px;
    padding-top: 14px;
  }

  .acv-section-title {
    font-size: 16px;
  }

  .acv-space-cover {
    min-height: 88px;
  }

  .acv-space-glyph {
    font-size: 52px;
  }

  .acv-space-body {
    padding: 13px 14px 15px;
  }

  .acv-space-meta .acv-dot {
    display: none;
  }

  .acv-space-desc {
    display: block;
    flex-basis: 100%;
    margin-top: 4px;
  }

  .acv-panel {
    padding: 14px;
  }

  .acv-board-head {
    padding: 18px;
    border-radius: 18px;
  }

  .acv-board-title {
    font-size: 19px;
  }

  .acv-board-grid {
    gap: 14px;
  }

  .acv-post-wrap {
    padding-top: 14px;
    gap: 12px;
  }

  .acv-article-title {
    font-size: 21px;
  }

  .acv-prose {
    font-size: 14px;
  }

  .acv-modal {
    padding: 20px;
    border-radius: 20px;
  }

  .acv-drawer {
    width: 100%;
  }

  .acv-toast {
    bottom: 16px;
    font-size: 12px;
  }
}

.acv-mod-actions {
  margin-left: auto;
  display: flex;
  gap: 4px;
}

.acv-mod-actions .acv-btn {
  padding: 5px 12px;
  font-size: 12px;
}

/* ------------------------------------------------------------- \u9876\u680F\u641C\u7D22 */

.acv-search {
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 6px;
  background: #f6f6fa;
  border-radius: 999px;
  padding: 0 14px;
  height: 38px;
  min-width: 180px;
  max-width: 320px;
  flex: 1 1 220px;
  box-sizing: border-box;
}

/* \u5BBF\u4E3B\uFF08DSH \u684C\u9762\u7AEF\uFF09\u6709\u81EA\u5DF1\u7684\u5168\u5C40\u6837\u5F0F\uFF0C\u4E0B\u9762\u8FD9\u4E00\u7EC4\u628A\u641C\u7D22\u6846\u7684\u76D2\u5B50\u6A21\u578B\u9489\u6B7B\u3002 */
.acv-root .acv-search-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex: none;
  color: var(--acv-muted);
  font-size: 0;
  line-height: 0;
}

.acv-root .acv-search-icon svg {
  display: block;
}

.acv-root .acv-search-input {
  flex: 1 1 auto;
  min-width: 0;
  height: 22px;
  margin: 0;
  padding: 0;
  border: 0;
  outline: none;
  box-shadow: none;
  background: transparent;
  font-family: inherit;
  font-size: 13px;
  line-height: 22px;
  color: var(--acv-ink);
  appearance: none;
  -webkit-appearance: none;
}

.acv-root .acv-search-input:focus,
.acv-root .acv-search-input:focus-visible {
  outline: none;
  box-shadow: none;
  border: 0;
}

.acv-root .acv-search-input::placeholder {
  color: #a9a9b8;
  opacity: 1;
}

.acv-search-panel {
  position: absolute;
  left: 0;
  right: 0;
  top: calc(100% + 8px);
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 44px rgba(23, 23, 38, 0.16);
  padding: 8px;
  z-index: 40;
  max-height: 340px;
  overflow-y: auto;
}

.acv-search-item {
  display: block;
  width: 100%;
  text-align: left;
  border: 0;
  background: transparent;
  font: inherit;
  padding: 9px 10px;
  border-radius: 10px;
  cursor: pointer;
}

.acv-search-item:hover {
  background: #f6f6fa;
}

.acv-search-title {
  display: block;
  font-size: 13px;
  font-weight: 600;
}

.acv-search-meta {
  display: block;
  font-size: 11px;
  color: var(--acv-muted);
  margin-top: 2px;
}

.acv-search-empty {
  padding: 10px;
  font-size: 12px;
  color: var(--acv-muted);
}

@media (max-width: 720px) {
  .acv-search {
    display: none;
  }
}

/* ------------------------------------------------------------- \u53D1\u5E16\u5F39\u7A97 / \u7BA1\u7406 */

.acv-modal--wide {
  width: min(760px, 94vw);
  max-height: 88vh;
  overflow-y: auto;
}

.acv-textarea--tall {
  min-height: 220px;
}

.acv-admin-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 2px;
  border-top: 1px solid var(--acv-line);
}

.acv-admin-row.is-archived {
  opacity: 0.55;
}

.acv-admin-swatch {
  width: 64px;
  min-height: 34px;
  aspect-ratio: 4 / 1;
  border-radius: 10px;
  flex: none;
}

.acv-editor {
  border: 1px solid var(--acv-line);
  background: #fbfbfe;
  border-radius: var(--acv-radius);
  padding: 16px;
  margin: 10px 0 6px;
}

.acv-color-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.acv-color {
  width: 40px;
  height: 32px;
  padding: 2px;
  border: 1px solid #e6e6ee;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
}

.acv-color-preview {
  flex: 1;
  min-height: 32px;
  border-radius: 8px;
  max-width: 220px;
}

/* ------------------------------------------------------------- \u7BA1\u7406\u9875\uFF1A\u5DE6\u53F3\u7ED3\u6784 */

.acv-admin-layout {
  display: grid;
  grid-template-columns: 184px minmax(0, 1fr);
  gap: 16px;
  align-items: start;
}

.acv-admin-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: #f7f7fb;
  border-radius: 16px;
  padding: 8px;
  position: sticky;
  top: 12px;
}

.acv-admin-nav button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 0;
  background: transparent;
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  color: #6f6f80;
  text-align: left;
  padding: 10px 12px;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.16s ease, color 0.16s ease;
}

.acv-admin-nav button:hover {
  background: #fff;
  color: var(--acv-ink);
}

.acv-admin-nav button.is-active {
  background: #fff;
  color: var(--acv-ink);
  box-shadow: 0 6px 16px rgba(23, 23, 38, 0.08);
}

.acv-badge {
  background: var(--acv-pink);
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  padding: 3px 7px;
  border-radius: 999px;
}

.acv-admin-content {
  min-width: 0;
  box-shadow: var(--acv-shadow-soft);
}

@media (max-width: 720px) {
  .acv-admin-layout {
    grid-template-columns: minmax(0, 1fr);
  }

  .acv-admin-nav {
    position: static;
    flex-direction: row;
  }

  .acv-admin-nav button {
    flex: 1;
    justify-content: center;
  }
}

/* ------------------------------------------------------------- Markdown */

.acv-md {
  font-size: 14px;
  line-height: 1.7;
  color: var(--acv-ink-soft);
  overflow-wrap: anywhere;
}

.acv-md > *:first-child {
  margin-top: 0;
}

.acv-md > *:last-child {
  margin-bottom: 0;
}

.acv-md-p {
  margin: 0 0 8px;
}

.acv-md-h1,
.acv-md-h2,
.acv-md-h3,
.acv-md-h4 {
  margin: 14px 0 8px;
  line-height: 1.35;
  color: var(--acv-ink);
  font-weight: 700;
}

.acv-md-h1 {
  font-size: 20px;
}
.acv-md-h2 {
  font-size: 17px;
}
.acv-md-h3 {
  font-size: 15px;
}
.acv-md-h4 {
  font-size: 14px;
}

.acv-md-list {
  margin: 0 0 8px;
  padding-left: 20px;
}

.acv-md-list li {
  margin: 3px 0;
}

.acv-md-code {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12.5px;
  background: #f1f1f7;
  padding: 1px 5px;
  border-radius: 5px;
  color: #a12a72;
}

.acv-md-pre {
  position: relative;
  margin: 8px 0 10px;
  padding: 12px 14px;
  background: #15151d;
  color: #e9e9f2;
  border-radius: 12px;
  overflow-x: auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 12.5px;
  line-height: 1.6;
}

.acv-md-pre code {
  background: transparent;
  color: inherit;
}

.acv-md-lang {
  position: absolute;
  top: 6px;
  right: 10px;
  font-size: 10px;
  color: #7b7b8c;
  text-transform: lowercase;
}

.acv-md-quote {
  margin: 8px 0;
  padding: 6px 12px;
  border-left: 3px solid #e8cde0;
  background: #fbf7fa;
  border-radius: 0 10px 10px 0;
  color: #6b6b7a;
}

.acv-md-hr {
  border: 0;
  border-top: 1px solid var(--acv-line);
  margin: 14px 0;
}

.acv-md a {
  color: var(--acv-pink);
  text-decoration: none;
}

.acv-md a:hover {
  text-decoration: underline;
}

.acv-md-table-wrap {
  margin: 8px 0;
  overflow-x: auto;
}

.acv-md-table {
  border-collapse: collapse;
  font-size: 13px;
  min-width: 100%;
}

.acv-md-table th,
.acv-md-table td {
  border: 1px solid var(--acv-line);
  padding: 6px 10px;
  text-align: left;
}

.acv-md-table th {
  background: #f8f8fc;
  font-weight: 600;
  color: var(--acv-ink);
}

/* \u5E16\u5B50\u6B63\u6587\u91CC\u7684 markdown \u7A0D\u5FAE\u5927\u4E00\u70B9 */
.acv-prose--md .acv-md {
  font-size: 15px;
  line-height: 1.8;
  color: var(--acv-ink-soft);
}

.acv-prose--md .acv-md-h2 {
  font-size: 19px;
}

.acv-prose--md .acv-md-h3 {
  font-size: 16px;
}

/* \u62BD\u5C49\u91CC\u52A9\u624B\u6C14\u6CE1\u653E\u5BBD\uFF0C\u4EE3\u7801\u5757\u4E0D\u6324 */
.acv-chat-text--md {
  padding: 12px 14px;
  width: 100%;
  white-space: normal;
}

/* ------------------------------------------------------------- \u4E3B\u9898\u4E13\u533A */

.acv-zone {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-top: 22px;
}

.acv-zone-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 20px;
}

@media (max-width: 720px) {
  .acv-zone-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
  }
}

/* \u7BA1\u7406\uFF1A\u4E13\u533A\u591A\u9009 */
.acv-zone-picker {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.acv-zone-option {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid #e6e6ee;
  background: #fafafd;
  color: var(--acv-muted);
  font: inherit;
  font-size: 13px;
  font-weight: 600;
  padding: 8px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: border-color 0.16s ease, background 0.16s ease, color 0.16s ease;
}

.acv-zone-option:hover {
  background: #fff;
  color: var(--acv-ink);
}

.acv-zone-option.is-active {
  border-color: #f7b3d6;
  background: #fff0f8;
  color: var(--acv-pink);
}

.acv-zone-tick {
  display: inline-block;
  width: 14px;
  height: 14px;
  line-height: 14px;
  text-align: center;
  border-radius: 4px;
  background: #ececf3;
  color: #fff;
  font-size: 10px;
}

.acv-zone-option.is-active .acv-zone-tick {
  background: var(--acv-pink);
}

.acv-field-hint {
  font-size: 11px;
  color: #a9a9b8;
}
`;var k=_(require("react"),1);function R({base:a="",token:c=null,credentials:e="same-origin",onToken:v}={}){let t=c;function i(n){t=n||null,v?.(t)}async function s(n,{method:m="GET",body:g,signal:o}={}){let p={};g!==void 0&&(p["content-type"]="application/json"),t&&(p.authorization=`Bearer ${t}`);let h=await fetch(a+n,{method:m,headers:p,body:g===void 0?void 0:JSON.stringify(g),credentials:t?"omit":e,cache:"no-store",signal:o}),r=await h.text(),f={};try{f=r?JSON.parse(r):{}}catch{f={error:r.slice(0,200)}}if(!h.ok){let S=new Error(f?.error||`HTTP ${h.status}`);throw S.code=f?.code,S.status=h.status,S}return f}return{raw:s,setToken:i,getToken:()=>t,me:()=>s("/api/auth/me"),home:()=>s("/api/home"),spaces:()=>s("/api/spaces"),zoneSpaces:n=>s(`/api/zones/${encodeURIComponent(n)}`),space:n=>s(`/api/spaces/${encodeURIComponent(n)}`),post:n=>s(`/api/posts/${encodeURIComponent(n)}`),captcha:()=>s("/api/captcha"),register:n=>s("/api/auth/register",{method:"POST",body:n}),login:n=>s("/api/auth/login",{method:"POST",body:n}),logout:()=>s("/api/auth/logout",{method:"POST",body:{}}),resend:()=>s("/api/auth/resend",{method:"POST",body:{}}),verify:n=>s("/api/auth/verify",{method:"POST",body:{token:n}}),createPost:n=>s("/api/posts",{method:"POST",body:n}),createComment:(n,m)=>s(`/api/posts/${encodeURIComponent(n)}/comments`,{method:"POST",body:m}),pendingAccounts:()=>s("/api/admin/pending"),adminSpaces:()=>s("/api/admin/spaces"),createSpace:n=>s("/api/admin/spaces",{method:"POST",body:n}),updateSpace:(n,m)=>s(`/api/admin/spaces/${encodeURIComponent(n)}/update`,{method:"POST",body:m}),archiveSpace:(n,m=!0)=>s(`/api/admin/spaces/${encodeURIComponent(n)}/archive`,{method:"POST",body:{archived:m}}),verifyAccount:n=>s("/api/admin/verify",{method:"POST",body:{accountId:n}}),setPostStatus:(n,m)=>s(`/api/posts/${encodeURIComponent(n)}/status`,{method:"POST",body:{status:m}}),notifications:()=>s("/api/notifications"),markRead:n=>s("/api/notifications/read",{method:"POST",body:{ids:n}}),search:n=>s(`/api/search?q=${encodeURIComponent(n)}`)}}function L(a){let c=Number(a)||0;if(!c)return"";let e=Date.now()-c;if(e<6e4)return"\u521A\u521A";if(e<36e5)return`${Math.floor(e/6e4)} \u5206\u949F\u524D`;if(e<864e5)return`${Math.floor(e/36e5)} \u5C0F\u65F6\u524D`;if(e<7*864e5)return`${Math.floor(e/864e5)} \u5929\u524D`;let v=new Date(c);return`${String(v.getMonth()+1).padStart(2,"0")}-${String(v.getDate()).padStart(2,"0")}`}function H(a){let c=String(a||"?").trim();if(!c)return"?";let e=[...c];return e.length>1&&/[\u4e00-\u9fa5]/.test(e[0])?e.slice(-2).join(""):e[0].toUpperCase()}var d=_(require("react"),1);function J({space:a,onOpen:c}){return d.default.createElement("button",{type:"button",className:"acv-space-card",onClick:()=>c(a.slug),style:{"--accent":a.accent,"--accent-to":a.accentTo}},d.default.createElement("span",{className:"acv-space-cover"},d.default.createElement("span",{className:"acv-space-glyph"},a.title.slice(0,1)),d.default.createElement("span",{className:"acv-space-badge"},`${a.postCount} \u4E2A\u5E16\u5B50`),d.default.createElement("span",{className:"acv-space-enter"},"\u8FDB\u5165\u8BA8\u8BBA \u2192")),d.default.createElement("span",{className:"acv-space-body"},d.default.createElement("span",{className:"acv-space-title"},a.title),d.default.createElement("span",{className:"acv-space-sub"},a.subtitle),d.default.createElement("span",{className:"acv-space-meta"},d.default.createElement("span",null,a.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${L(a.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u5E16"),d.default.createElement("span",{className:"acv-dot"}),d.default.createElement("span",{className:"acv-space-desc"},a.description||""))))}function aa({api:a,me:c,onOpenSpace:e,onOpenPost:v,onAuth:t,notify:i}){let[s,n]=d.default.useState(null),[m,g]=d.default.useState(""),o=d.default.useCallback(()=>{a.home().then(n).catch(r=>g(r.message))},[a]);d.default.useEffect(()=>{o()},[o,c]);let p=s?.notifications?.filter(r=>!r.readAt).length||0;async function h(){try{await a.markRead(),o(),i("\u6D88\u606F\u90FD\u6807\u6210\u5DF2\u8BFB\u4E86")}catch(r){i(r.message,{error:!0})}}return m?d.default.createElement("div",{className:"acv-loading"},m):s?d.default.createElement("div",{className:"acv-main"},d.default.createElement("div",{className:"acv-col"},d.default.createElement("div",{className:"acv-section-head"},d.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u677F\u5757"),d.default.createElement("span",{className:"acv-section-note"},"\u70B9\u5F00\u4E00\u4E2A\u677F\u5757\u8FDB\u5165\u8BA8\u8BBA\u533A")),s.spaces.map(r=>d.default.createElement(J,{key:r.id,space:r,onOpen:e})),d.default.createElement("div",{className:"acv-section-head",style:{marginTop:6}},d.default.createElement("h2",{className:"acv-section-title"},"\u6700\u8FD1\u66F4\u65B0"),d.default.createElement("button",{type:"button",className:"acv-link",onClick:o},"\u5237\u65B0")),d.default.createElement("div",{className:"acv-panel"},s.recent.length===0&&d.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u5E16\u5B50"),s.recent.map(r=>d.default.createElement("button",{key:r.id,type:"button",className:"acv-recent-item",onClick:()=>v(r.id)},d.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},H(r.author.displayName)),d.default.createElement("span",{className:"acv-recent-main"},d.default.createElement("span",{className:"acv-recent-title"},r.title),d.default.createElement("span",{className:"acv-recent-meta"},r.spaceTitle," \xB7 ",r.author.displayName," \xB7 ",L(r.lastActivityAt)," \xB7 ",r.commentCount," \u6761\u8BC4\u8BBA")),d.default.createElement("span",{className:"acv-chip"},"\u8FDB\u5165"))))),d.default.createElement("div",{className:"acv-col"},d.default.createElement("div",{className:"acv-panel"},d.default.createElement("div",{className:"acv-section-head"},d.default.createElement("h2",{className:"acv-section-title"},"\u6D88\u606F"),c&&p>0&&d.default.createElement("button",{type:"button",className:"acv-link",onClick:h},"\u5168\u90E8\u5DF2\u8BFB")),!c&&d.default.createElement("div",{className:"acv-empty"},"\u767B\u5F55\u540E\u8FD9\u91CC\u4F1A\u663E\u793A\u56DE\u590D\u3001@ \u548C\u7CFB\u7EDF\u6D88\u606F",d.default.createElement("div",{style:{marginTop:12}},d.default.createElement("button",{type:"button",className:"acv-btn primary",onClick:t},"\u767B\u5F55"))),c&&s.notifications.length===0&&d.default.createElement("div",{className:"acv-empty"},"\u6682\u65F6\u6CA1\u6709\u65B0\u6D88\u606F"),c&&s.notifications.map(r=>d.default.createElement("button",{key:r.id,type:"button",className:"acv-msg",onClick:()=>r.postId?v(r.postId):void 0},d.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},r.actor?H(r.actor.displayName):"\u7CFB"),d.default.createElement("span",{className:"acv-msg-main"},d.default.createElement("span",{className:"acv-msg-title"},r.title),d.default.createElement("span",{className:"acv-msg-body"},r.body),d.default.createElement("span",{className:"acv-msg-time"},L(r.createdAt))),!r.readAt&&d.default.createElement("span",{className:"acv-unread"})))),d.default.createElement("div",{className:"acv-panel"},d.default.createElement("div",{className:"acv-section-head"},d.default.createElement("h2",{className:"acv-section-title"},"\u6D3B\u8DC3\u6210\u5458")),(s.members||[]).length===0&&d.default.createElement("div",{className:"acv-empty",style:{padding:"10px 0"}},"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8FC7\u5E16"),(s.members||[]).map(r=>d.default.createElement("div",{key:r.id,className:"acv-member"},d.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},H(r.displayName)),d.default.createElement("span",{className:"acv-member-main"},d.default.createElement("span",{className:"acv-member-name"},r.displayName),d.default.createElement("span",{className:"acv-member-meta"},"@",r.handle)),d.default.createElement("span",{className:"acv-chip"},r.postCount," \u5E16")))),d.default.createElement("div",{className:"acv-panel"},d.default.createElement("div",{className:"acv-section-head"},d.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u6570\u636E")),d.default.createElement("div",{className:"acv-stats"},d.default.createElement("div",{className:"acv-stat"},d.default.createElement("div",{className:"acv-stat-value"},s.spaces.length),d.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u677F\u5757")),d.default.createElement("div",{className:"acv-stat"},d.default.createElement("div",{className:"acv-stat-value"},s.spaces.reduce((r,f)=>r+f.postCount,0)),d.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),d.default.createElement("div",{className:"acv-stat"},d.default.createElement("div",{className:"acv-stat-value"},s.recent.length),d.default.createElement("div",{className:"acv-stat-label"},"\u6761\u6700\u8FD1\u66F4\u65B0"))),d.default.createElement("p",{className:"acv-space-sub",style:{marginTop:12}},c?c.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u8FDB\u4EFB\u610F\u677F\u5757\uFF0C\u53F3\u4E0A\u89D2\u6709\u53D1\u5E16\u5165\u53E3\u3002":"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF1B\u53D1\u5E16\u3001\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002")))):d.default.createElement("div",{className:"acv-main"},d.default.createElement("div",{className:"acv-col"},d.default.createElement("div",{className:"acv-skeleton"}),d.default.createElement("div",{className:"acv-skeleton"}),d.default.createElement("div",{className:"acv-skeleton"})),d.default.createElement("div",{className:"acv-col"},d.default.createElement("div",{className:"acv-skeleton",style:{height:260}})))}var y=_(require("react"),1);var E=_(require("react"),1);function ea({space:a,api:c,onClose:e,onCreated:v,notify:t}){let[i,s]=E.default.useState(""),[n,m]=E.default.useState(""),[g,o]=E.default.useState(!1),[p,h]=E.default.useState("");E.default.useEffect(()=>{let f=S=>{S.key==="Escape"&&e()};return window.addEventListener("keydown",f),()=>window.removeEventListener("keydown",f)},[e]);async function r(){o(!0),h("");try{let f=await c.createPost({spaceId:a.id,title:i,body:n});t("\u5E16\u5B50\u53D1\u51FA\u53BB\u4E86"),v(f.post)}catch(f){h(f.message)}finally{o(!1)}}return E.default.createElement("div",{className:"acv-overlay",onClick:e},E.default.createElement("div",{className:"acv-modal acv-modal--wide",onClick:f=>f.stopPropagation()},E.default.createElement("h3",{className:"acv-modal-title"},"\u5728\u300C",a.title,"\u300D\u53D1\u5E16"),E.default.createElement("p",{className:"acv-modal-sub"},"\u6807\u9898\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u6B63\u6587\u5C55\u5F00\u8BB2\u3002\u53D1\u5B8C\u4F1A\u76F4\u63A5\u8FDB\u8BE6\u60C5\u9875\u3002"),p&&E.default.createElement("div",{className:"acv-error"},p),E.default.createElement("div",{className:"acv-field"},E.default.createElement("label",null,"\u6807\u9898"),E.default.createElement("input",{className:"acv-input",autoFocus:!0,value:i,maxLength:160,placeholder:"\u60F3\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",onChange:f=>s(f.target.value)})),E.default.createElement("div",{className:"acv-field"},E.default.createElement("label",null,"\u6B63\u6587"),E.default.createElement("textarea",{className:"acv-textarea acv-textarea--tall",value:n,maxLength:2e4,placeholder:"\u5C55\u5F00\u8BF4\u8BF4\uFF0C\u652F\u6301\u6362\u884C",onChange:f=>m(f.target.value)})),E.default.createElement("div",{className:"acv-row"},E.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:e},"\u53D6\u6D88"),E.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:g||!i.trim()||!n.trim(),onClick:r},g?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u5E03"))))}function ta({api:a,slug:c,me:e,onBack:v,onOpenPost:t,onAuth:i,notify:s}){let[n,m]=y.default.useState(null),[g,o]=y.default.useState(""),[p,h]=y.default.useState(!1),r=y.default.useCallback(()=>{a.space(c).then(w=>{m(w),o("")}).catch(w=>o(w.message))},[a,c]);if(y.default.useEffect(()=>{r()},[r]),g)return y.default.createElement("div",{style:{paddingTop:22}},y.default.createElement("button",{type:"button",className:"acv-back",onClick:v},"\u2190 \u8FD4\u56DE\u9996\u9875"),y.default.createElement("div",{className:"acv-loading"},g));if(!n)return y.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u677F\u5757\u2026");let{space:f,posts:S}=n,x=!!e?.emailVerified;return y.default.createElement("div",{style:{paddingTop:20,display:"flex",flexDirection:"column",gap:16}},y.default.createElement("div",null,y.default.createElement("button",{type:"button",className:"acv-back",onClick:v},"\u2190 \u8FD4\u56DE\u9996\u9875")),y.default.createElement("div",{className:"acv-board-head",style:{"--accent":f.accent,"--accent-to":f.accentTo}},y.default.createElement("h2",{className:"acv-board-title"},f.title),y.default.createElement("p",{className:"acv-board-sub"},f.description||f.subtitle),y.default.createElement("div",{className:"acv-board-actions"},y.default.createElement("button",{type:"button",className:"acv-btn",style:{background:"#fff",color:"#16161d"},onClick:()=>{if(!e)return i();if(!x)return s("\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16");h(!0)}},"\u53D1\u5E16"),y.default.createElement("span",{className:"acv-chip",style:{background:"rgba(255,255,255,.22)",color:"#fff"}},f.postCount," \u4E2A\u5E16\u5B50"))),!e&&y.default.createElement("div",{className:"acv-notice"},"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u9700\u8981\u3002",y.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),e&&!e.emailVerified&&y.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002\u9A8C\u8BC1\u90AE\u4EF6\u5728\u6536\u4EF6\u7BB1\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u5934\u50CF\u83DC\u5355\u91CC\u91CD\u53D1\u3002"),y.default.createElement("div",{className:"acv-board-grid"},y.default.createElement("div",{className:"acv-col"},y.default.createElement("div",{className:"acv-panel",style:{padding:"8px 18px"}},S.length===0&&y.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5E16\u5B50\uFF0C\u6765\u53D1\u7B2C\u4E00\u6761\u3002"),S.map(w=>y.default.createElement("button",{key:w.id,type:"button",className:"acv-post-row",onClick:()=>t(w.id)},y.default.createElement("span",{className:"acv-post-title"},w.title),y.default.createElement("span",{className:"acv-post-excerpt"},w.excerpt),y.default.createElement("span",{className:"acv-post-meta"},y.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},H(w.author.displayName)),w.author.displayName,y.default.createElement("span",{className:"acv-dot"}),L(w.lastActivityAt),y.default.createElement("span",{className:"acv-dot"}),w.commentCount," \u6761\u8BC4\u8BBA"))))),y.default.createElement("aside",{className:"acv-col"},y.default.createElement("div",{className:"acv-panel"},y.default.createElement("div",{className:"acv-section-head"},y.default.createElement("h2",{className:"acv-section-title"},"\u677F\u5757\u8BF4\u660E")),y.default.createElement("p",{className:"acv-space-sub"},f.description||f.subtitle||"\u8FD8\u6CA1\u6709\u5199\u4ECB\u7ECD\u3002"),y.default.createElement("div",{className:"acv-stats",style:{marginTop:14}},y.default.createElement("div",{className:"acv-stat"},y.default.createElement("div",{className:"acv-stat-value"},f.postCount),y.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),y.default.createElement("div",{className:"acv-stat"},y.default.createElement("div",{className:"acv-stat-value"},S.length),y.default.createElement("div",{className:"acv-stat-label"},"\u6761\u5728\u672C\u9875"))),y.default.createElement("p",{className:"acv-space-sub",style:{marginTop:14}},e?.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u4E0A\u9762\u7684\u300C\u53D1\u5E16\u300D\u3002":e?"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u3001\u8BC4\u8BBA\u624D\u9700\u8981\u3002")))),p&&y.default.createElement(ea,{api:a,space:f,notify:s,onClose:()=>h(!1),onCreated:w=>{h(!1),r(),t(w.id)}}))}var b=_(require("react"),1);var z=_(require("react"),1),na=/(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(~~[^~\n]+~~)|(\[[^\]\n]+\]\([^)\s]+\))/g,U=/^\s*([-*+]|\d+[.)])\s+/,sa=/^(#{1,6})\s+(.*)$/,Sa=/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/;function W(a,c){let e=[],v=0,t;for(na.lastIndex=0;(t=na.exec(a))!==null;){t.index>v&&e.push(a.slice(v,t.index));let i=t[0],s=`${c}-${t.index}`;if(i.startsWith("`"))e.push(z.default.createElement("code",{key:s,className:"acv-md-code"},i.slice(1,-1)));else if(i.startsWith("**"))e.push(z.default.createElement("strong",{key:s},i.slice(2,-2)));else if(i.startsWith("~~"))e.push(z.default.createElement("del",{key:s},i.slice(2,-2)));else if(i.startsWith("[")){let n=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(i),m=n?.[2]||"#",g=/^(https?:\/\/|mailto:|\/)/i.test(m);e.push(g?z.default.createElement("a",{key:s,href:m,target:"_blank",rel:"noreferrer noopener"},n[1]):z.default.createElement("span",{key:s},n?.[1]||i))}else e.push(z.default.createElement("em",{key:s},i.slice(1,-1)));v=t.index+i.length}return v<a.length&&e.push(a.slice(v)),e}function oa(a){return a.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(c=>c.trim())}function Y({text:a}){let e=String(a||"").replace(/\r\n?/g,`
`).split(`
`),v=[],t=0,i=0;for(;t<e.length;){let s=e[t];if(/^\s*```/.test(s)){let o=s.trim().slice(3).trim(),p=[];for(t+=1;t<e.length&&!/^\s*```/.test(e[t]);)p.push(e[t]),t+=1;t+=1,v.push(z.default.createElement("pre",{key:`b${i++}`,className:"acv-md-pre"},z.default.createElement("code",null,p.join(`
`)),o&&z.default.createElement("span",{className:"acv-md-lang"},o)));continue}if(!s.trim()){t+=1;continue}let n=sa.exec(s);if(n){let o=Math.min(n[1].length,4),p=`h${o}`;v.push(z.default.createElement(p,{key:`b${i++}`,className:`acv-md-h${o}`},W(n[2],`h${i}`))),t+=1;continue}if(/^\s*(-{3,}|\*{3,})\s*$/.test(s)){v.push(z.default.createElement("hr",{key:`b${i++}`,className:"acv-md-hr"})),t+=1;continue}if(s.includes("|")&&Sa.test(e[t+1]||"")){let o=oa(s);t+=2;let p=[];for(;t<e.length&&e[t].includes("|")&&e[t].trim();)p.push(oa(e[t])),t+=1;v.push(z.default.createElement("div",{key:`b${i++}`,className:"acv-md-table-wrap"},z.default.createElement("table",{className:"acv-md-table"},z.default.createElement("thead",null,z.default.createElement("tr",null,o.map((h,r)=>z.default.createElement("th",{key:r},W(h,`th${r}`))))),z.default.createElement("tbody",null,p.map((h,r)=>z.default.createElement("tr",{key:r},o.map((f,S)=>z.default.createElement("td",{key:S},W(h[S]||"",`td${r}-${S}`)))))))));continue}if(/^\s*>\s?/.test(s)){let o=[];for(;t<e.length&&/^\s*>\s?/.test(e[t]);)o.push(e[t].replace(/^\s*>\s?/,"")),t+=1;v.push(z.default.createElement("blockquote",{key:`b${i++}`,className:"acv-md-quote"},z.default.createElement(Y,{text:o.join(`
`)})));continue}if(U.test(s)){let o=/^\s*\d+[.)]\s+/.test(s),p=[];for(;t<e.length&&U.test(e[t]);)for(p.push(e[t].replace(U,"")),t+=1;t<e.length&&e[t].trim()&&/^\s{2,}/.test(e[t])&&!U.test(e[t]);)p[p.length-1]+=` ${e[t].trim()}`,t+=1;let h=o?"ol":"ul";v.push(z.default.createElement(h,{key:`b${i++}`,className:"acv-md-list"},p.map((r,f)=>z.default.createElement("li",{key:f},W(r,`li${f}`)))));continue}let m=[];for(;t<e.length&&e[t].trim()&&!sa.test(e[t])&&!U.test(e[t])&&!/^\s*>/.test(e[t])&&!/^\s*```/.test(e[t])&&!/^\s*(-{3,}|\*{3,})\s*$/.test(e[t]);)m.push(e[t]),t+=1;let g=[];m.forEach((o,p)=>{p>0&&g.push(z.default.createElement("br",{key:`br${p}`})),g.push(...W(o,`p${p}`))}),v.push(z.default.createElement("p",{key:`b${i++}`,className:"acv-md-p"},g))}return z.default.createElement("div",{className:"acv-md"},v)}function ia({api:a,id:c,me:e,onBack:v,backTo:t="home",onAuth:i,notify:s}){let[n,m]=b.default.useState(null),[g,o]=b.default.useState(""),[p,h]=b.default.useState(""),[r,f]=b.default.useState(!1),[S,x]=b.default.useState(""),[w,$]=b.default.useState(!1),T=b.default.useCallback(()=>{a.post(c).then(u=>{m(u),o("")}).catch(u=>o(u.message))},[a,c]);b.default.useEffect(()=>{T()},[T]);async function P(){f(!0),x("");try{await a.createComment(c,{body:p}),h(""),T(),s("\u8BC4\u8BBA\u5DF2\u53D1\u5E03")}catch(u){x(u.message)}finally{f(!1)}}async function I(u){$(!0);try{await a.setPostStatus(c,u),s(u==="hidden"?"\u5E16\u5B50\u5DF2\u9690\u85CF":u==="deleted"?"\u5E16\u5B50\u5DF2\u5220\u9664":"\u5E16\u5B50\u5DF2\u6062\u590D"),u==="deleted"?v():T()}catch(B){s(B.message,{error:!0})}finally{$(!1)}}let F=t==="space"?"\u2190 \u8FD4\u56DE\u677F\u5757":"\u2190 \u8FD4\u56DE\u9996\u9875";if(g)return b.default.createElement("div",{style:{paddingTop:22}},b.default.createElement("button",{type:"button",className:"acv-back",onClick:v},F),b.default.createElement("div",{className:"acv-loading"},g));if(!n)return b.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u5E16\u5B50\u2026");let{post:O,comments:V}=n;return b.default.createElement("div",{className:"acv-post-wrap"},b.default.createElement("div",null,b.default.createElement("button",{type:"button",className:"acv-back",onClick:v},F)),b.default.createElement("div",{className:"acv-panel",style:{padding:"22px 24px"}},b.default.createElement("div",{className:"acv-post-meta"},b.default.createElement("span",{className:"acv-chip"},O.spaceTitle),b.default.createElement("span",{className:"acv-dot"}),L(O.createdAt),b.default.createElement("span",{className:"acv-dot"}),O.viewCount," \u6B21\u6D4F\u89C8"),b.default.createElement("h1",{className:"acv-article-title"},O.title),b.default.createElement("div",{className:"acv-article-meta"},b.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},H(O.author.displayName)),b.default.createElement("span",null,O.author.displayName),b.default.createElement("span",{className:"acv-dot"}),b.default.createElement("span",null,"@",O.author.handle),e?.role==="admin"&&b.default.createElement("span",{className:"acv-mod-actions"},b.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:w,onClick:()=>I("hidden")},"\u9690\u85CF"),b.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:w,onClick:()=>I("deleted")},"\u5220\u9664"))),b.default.createElement("div",{className:"acv-prose acv-prose--md"},b.default.createElement(Y,{text:O.body}))),b.default.createElement("div",{className:"acv-panel",style:{padding:"18px 24px"}},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u8BC4\u8BBA"),b.default.createElement("span",{className:"acv-section-note"},V.length," \u6761")),V.length===0&&b.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u8BF4\u70B9\u4EC0\u4E48\u3002"),V.map(u=>b.default.createElement("div",{key:u.id,className:"acv-comment"},b.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},H(u.author.displayName)),b.default.createElement("div",{className:"acv-comment-main"},b.default.createElement("div",{className:"acv-comment-head"},b.default.createElement("span",{className:"acv-comment-author"},u.author.displayName),b.default.createElement("span",{className:"acv-comment-time"},L(u.createdAt))),b.default.createElement("p",{className:"acv-comment-body"},u.body)))),b.default.createElement("div",{style:{marginTop:14}},!e&&b.default.createElement("div",{className:"acv-notice"},"\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\u3002",b.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),e&&!e.emailVerified&&b.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u8BC4\u8BBA\u3002"),e?.emailVerified&&b.default.createElement(b.default.Fragment,null,S&&b.default.createElement("div",{className:"acv-error"},S),b.default.createElement("textarea",{className:"acv-textarea",value:p,placeholder:"\u5199\u4E00\u6761\u8BC4\u8BBA\u2026",onChange:u=>h(u.target.value)}),b.default.createElement("div",{className:"acv-row"},b.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:r||!p.trim(),onClick:P},r?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u8868\u8BC4\u8BBA"))))))}var N=_(require("react"),1);function ra({api:a,initialMode:c="login",onClose:e,onDone:v,notify:t}){let[i,s]=N.default.useState(c),[n,m]=N.default.useState(""),[g,o]=N.default.useState(""),[p,h]=N.default.useState(""),[r,f]=N.default.useState(""),[S,x]=N.default.useState(null),[w,$]=N.default.useState(!1),[T,P]=N.default.useState(""),[I,F]=N.default.useState(""),O=N.default.useCallback(()=>{a.captcha().then(x).catch(()=>x(null))},[a]);N.default.useEffect(()=>{i==="register"&&O()},[i,O]);async function V(u){u.preventDefault(),$(!0),P("");try{if(i==="login"){let Z=await a.login({handle:n,password:p});a.setToken(Z.token),v(Z.account);return}let B=await a.register({handle:n,email:g,password:p,captchaId:S?.id,captchaAnswer:r}),j=await a.login({handle:n,password:p});a.setToken(j.token),F(B.mail?.delivered?"\u6CE8\u518C\u6210\u529F\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\u3002\u70B9\u90AE\u4EF6\u91CC\u7684\u94FE\u63A5\u5C31\u80FD\u53D1\u5E16\u3002":"\u6CE8\u518C\u6210\u529F\u3002\u672C\u5730\u6CA1\u914D SMTP\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u7ECF\u6253\u5230\u670D\u52A1\u7AEF\u65E5\u5FD7\u91CC\u4E86\u3002"),v(j.account)}catch(B){P(B.message),i==="register"&&O(),f("")}finally{$(!1)}}return N.default.createElement("div",{className:"acv-overlay",onClick:e},N.default.createElement("div",{className:"acv-modal",onClick:u=>u.stopPropagation()},N.default.createElement("h3",{className:"acv-modal-title"},i==="login"?"\u767B\u5F55 Achoverse":"\u6CE8\u518C Achoverse"),N.default.createElement("p",{className:"acv-modal-sub"},i==="login"?"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002":"\u6CE8\u518C\u540E\u8981\u9A8C\u8BC1\u90AE\u7BB1\u624D\u80FD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002"),N.default.createElement("div",{className:"acv-switch"},N.default.createElement("button",{type:"button",className:i==="login"?"is-active":"",onClick:()=>{s("login"),P("")}},"\u767B\u5F55"),N.default.createElement("button",{type:"button",className:i==="register"?"is-active":"",onClick:()=>{s("register"),P("")}},"\u6CE8\u518C")),T&&N.default.createElement("div",{className:"acv-error"},T),I&&N.default.createElement("div",{className:"acv-notice"},I),N.default.createElement("form",{onSubmit:V},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u7528\u6237\u540D"),N.default.createElement("input",{className:"acv-input",value:n,autoComplete:"username",placeholder:"3-24 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF",onChange:u=>m(u.target.value)})),i==="register"&&N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u90AE\u7BB1"),N.default.createElement("input",{className:"acv-input",type:"email",value:g,autoComplete:"email",placeholder:"\u7528\u6765\u6536\u9A8C\u8BC1\u94FE\u63A5",onChange:u=>o(u.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u5BC6\u7801"),N.default.createElement("input",{className:"acv-input",type:"password",value:p,autoComplete:i==="login"?"current-password":"new-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:u=>h(u.target.value)})),i==="register"&&N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u9A8C\u8BC1\u7801"),N.default.createElement("div",{className:"acv-captcha-row"},N.default.createElement("input",{className:"acv-input",value:r,maxLength:8,placeholder:"\u770B\u53F3\u8FB9",onChange:u=>f(u.target.value)}),N.default.createElement("button",{type:"button",className:"acv-captcha-img",onClick:O,title:"\u6362\u4E00\u5F20"},S?N.default.createElement("span",{dangerouslySetInnerHTML:{__html:S.svg}}):N.default.createElement("span",{className:"acv-chip"},"\u52A0\u8F7D\u4E2D")))),N.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},N.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:e},"\u53D6\u6D88"),N.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:w||!n||!p},w?"\u5904\u7406\u4E2D\u2026":i==="login"?"\u767B\u5F55":"\u6CE8\u518C")))))}var l=_(require("react"),1);var Ca={title:"",slug:"",subtitle:"",description:"",accent:"#F53FA6",accentTo:"#FF7A45",zones:["home"]},za=[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR \u4E13\u533A"}];function Ta({api:a,notify:c}){let[e,v]=l.default.useState(null),[t,i]=l.default.useState(""),[s,n]=l.default.useState(""),m=l.default.useCallback(()=>{a.pendingAccounts().then(o=>{v(o.accounts),i("")}).catch(o=>i(o.message))},[a]);l.default.useEffect(()=>{m()},[m]);async function g(o){n(o.id);try{await a.verifyAccount(o.id),c(`\u5DF2\u653E\u884C @${o.handle}`),m()}catch(p){c(p.message,{error:!0})}finally{n("")}}return t?l.default.createElement("div",{className:"acv-error"},t):e?e.length===0?l.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5F85\u9A8C\u8BC1\u7684\u8D26\u53F7"):e.map(o=>l.default.createElement("div",{key:o.id,className:"acv-member",style:{padding:"12px 2px"}},l.default.createElement("span",{className:"acv-member-main"},l.default.createElement("span",{className:"acv-member-name"},o.displayName," ",l.default.createElement("span",{className:"acv-member-meta"},"@",o.handle)),l.default.createElement("span",{className:"acv-member-meta"},o.email," \xB7 \u6CE8\u518C\u4E8E ",L(o.createdAt))),l.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"6px 14px",fontSize:13},disabled:s===o.id,onClick:()=>g(o)},s===o.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C"))):l.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Ea({api:a,space:c,onDone:e,onCancel:v,notify:t}){let[i,s]=l.default.useState(c?{title:c.title,slug:c.slug,subtitle:c.subtitle,description:c.description,accent:c.accent,accentTo:c.accentTo,zones:c.zones?.length?c.zones:["home"]}:Ca),[n,m]=l.default.useState(!1),[g,o]=l.default.useState(""),p=(r,f)=>s(S=>({...S,[r]:f}));async function h(){m(!0),o("");try{c?await a.updateSpace(c.id,i):await a.createSpace(i),t(c?"\u677F\u5757\u5DF2\u66F4\u65B0":`\u677F\u5757\u300C${i.title}\u300D\u5DF2\u521B\u5EFA`),e()}catch(r){o(r.message)}finally{m(!1)}}return l.default.createElement("div",{className:"acv-editor"},g&&l.default.createElement("div",{className:"acv-error"},g),l.default.createElement("div",{className:"acv-field"},l.default.createElement("label",null,"\u677F\u5757\u540D\u79F0"),l.default.createElement("input",{className:"acv-input",value:i.title,maxLength:24,onChange:r=>p("title",r.target.value),placeholder:"\u6BD4\u5982\uFF1A\u4F5C\u54C1\u5C55\u793A"})),l.default.createElement("div",{className:"acv-field"},l.default.createElement("label",null,"\u677F\u5757\u6807\u8BC6\uFF08\u7528\u4E8E\u94FE\u63A5\uFF0C\u7559\u7A7A\u81EA\u52A8\u751F\u6210\uFF09"),l.default.createElement("input",{className:"acv-input",value:i.slug,maxLength:32,disabled:!!c,onChange:r=>p("slug",r.target.value.toLowerCase()),placeholder:"works"})),l.default.createElement("div",{className:"acv-field"},l.default.createElement("label",null,"\u4E00\u53E5\u8BDD\u4ECB\u7ECD"),l.default.createElement("input",{className:"acv-input",value:i.subtitle,maxLength:60,onChange:r=>p("subtitle",r.target.value)})),l.default.createElement("div",{className:"acv-field"},l.default.createElement("label",null,"\u677F\u5757\u8BF4\u660E"),l.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:i.description,maxLength:300,onChange:r=>p("description",r.target.value)})),l.default.createElement("div",{className:"acv-field"},l.default.createElement("label",null,"\u663E\u793A\u5728"),l.default.createElement("div",{className:"acv-zone-picker"},za.map(r=>{let f=i.zones.includes(r.key);return l.default.createElement("button",{key:r.key,type:"button",className:f?"acv-zone-option is-active":"acv-zone-option",onClick:()=>s(S=>{let x=f?S.zones.filter(w=>w!==r.key):[...S.zones,r.key];return{...S,zones:x.length?x:["home"]}})},l.default.createElement("span",{className:"acv-zone-tick"},f?"\u2713":""),r.label)})),l.default.createElement("span",{className:"acv-field-hint"},"\u53EF\u4EE5\u591A\u9009\uFF1A\u540C\u65F6\u52FE\u9009\u5C31\u4E24\u4E2A\u5730\u65B9\u90FD\u663E\u793A")),l.default.createElement("div",{className:"acv-field"},l.default.createElement("label",null,"\u5361\u7247\u6E10\u53D8"),l.default.createElement("div",{className:"acv-color-row"},l.default.createElement("input",{type:"color",className:"acv-color",value:i.accent,onChange:r=>p("accent",r.target.value)}),l.default.createElement("input",{type:"color",className:"acv-color",value:i.accentTo,onChange:r=>p("accentTo",r.target.value)}),l.default.createElement("span",{className:"acv-space-cover acv-color-preview",style:{background:`linear-gradient(120deg, ${i.accent}, ${i.accentTo})`}}))),l.default.createElement("div",{className:"acv-row"},l.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:v},"\u53D6\u6D88"),l.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:n||!i.title.trim(),onClick:h},n?"\u4FDD\u5B58\u4E2D\u2026":c?"\u4FDD\u5B58":"\u521B\u5EFA\u677F\u5757")))}function Aa({api:a,notify:c}){let[e,v]=l.default.useState(null),[t,i]=l.default.useState(null),[s,n]=l.default.useState(""),m=l.default.useCallback(()=>{a.adminSpaces().then(o=>v(o.spaces)).catch(o=>c(o.message,{error:!0}))},[a,c]);l.default.useEffect(()=>{m()},[m]);async function g(o){let p=!o.archivedAt;if(!(p&&!window.confirm(`\u5220\u9664\u677F\u5757\u300C${o.title}\u300D\uFF1F\u677F\u5757\u4F1A\u4ECE\u9996\u9875\u6D88\u5931\uFF0C\u5E16\u5B50\u4ECD\u4FDD\u7559\u5728\u5E93\u91CC\u3002`))){n(o.id);try{await a.archiveSpace(o.id,p),c(p?"\u677F\u5757\u5DF2\u5220\u9664":"\u677F\u5757\u5DF2\u6062\u590D"),m()}catch(h){c(h.message,{error:!0})}finally{n("")}}}return e?l.default.createElement(l.default.Fragment,null,t?l.default.createElement(Ea,{api:a,space:t==="new"?null:t,notify:c,onCancel:()=>i(null),onDone:()=>{i(null),m()}}):l.default.createElement("div",{className:"acv-row",style:{justifyContent:"flex-start",marginBottom:6}},l.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("new")},"\u65B0\u5EFA\u677F\u5757")),e.map(o=>l.default.createElement("div",{key:o.id,className:o.archivedAt?"acv-admin-row is-archived":"acv-admin-row"},l.default.createElement("span",{className:"acv-space-cover acv-admin-swatch",style:{background:`linear-gradient(120deg, ${o.accent}, ${o.accentTo})`}}),l.default.createElement("span",{className:"acv-member-main"},l.default.createElement("span",{className:"acv-member-name"},o.title,l.default.createElement("span",{className:"acv-member-meta"}," /",o.slug),o.archivedAt&&l.default.createElement("span",{className:"acv-chip",style:{marginLeft:8}},"\u5DF2\u5220\u9664")),l.default.createElement("span",{className:"acv-member-meta"},o.postCount," \u4E2A\u5E16\u5B50 \xB7 ",o.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${L(o.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u5E16\u5B50",o.zones?.map(p=>l.default.createElement("span",{key:p,className:"acv-chip",style:{marginLeft:6}},p==="arvr"?"AR/VR":"\u9996\u9875")))),l.default.createElement("span",{style:{display:"flex",gap:6}},l.default.createElement("button",{type:"button",className:"acv-btn",style:{padding:"5px 12px",fontSize:12},onClick:()=>i(o)},"\u7F16\u8F91"),l.default.createElement("button",{type:"button",className:"acv-btn ghost",style:{padding:"5px 12px",fontSize:12},disabled:s===o.id,onClick:()=>g(o)},o.archivedAt?"\u6062\u590D":"\u5220\u9664"))))):l.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function ca({api:a,onBack:c,notify:e}){let[v,t]=l.default.useState("spaces"),[i,s]=l.default.useState(null);return l.default.useEffect(()=>{a.pendingAccounts().then(n=>s(n.accounts.length)).catch(()=>s(null))},[a,v]),l.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},l.default.createElement("div",null,l.default.createElement("button",{type:"button",className:"acv-back",onClick:c},"\u2190 \u8FD4\u56DE\u9996\u9875")),l.default.createElement("div",{className:"acv-admin-layout"},l.default.createElement("nav",{className:"acv-admin-nav","aria-label":"\u7BA1\u7406"},l.default.createElement("button",{type:"button",className:v==="spaces"?"is-active":"",onClick:()=>t("spaces")},"\u677F\u5757"),l.default.createElement("button",{type:"button",className:v==="accounts"?"is-active":"",onClick:()=>t("accounts")},l.default.createElement("span",null,"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),i>0&&l.default.createElement("span",{className:"acv-badge"},i))),l.default.createElement("section",{className:"acv-panel acv-admin-content",style:{padding:"20px 22px"}},l.default.createElement("div",{className:"acv-section-head"},l.default.createElement("h2",{className:"acv-section-title"},v==="spaces"?"\u677F\u5757":"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),l.default.createElement("span",{className:"acv-section-note"},v==="spaces"?"\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u677F\u5757\uFF1B\u5220\u9664\u540E\u53EF\u4ECE\u7BA1\u7406\u91CC\u6062\u590D":"\u6CA1\u914D SMTP \u65F6\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u4E0D\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u4EBA\u5DE5\u653E\u884C")),v==="spaces"?l.default.createElement(Aa,{api:a,notify:e}):l.default.createElement(Ta,{api:a,notify:e}))))}var D=_(require("react"),1);function la({api:a,zone:c,title:e,note:v,onOpenSpace:t}){let[i,s]=D.default.useState(null),[n,m]=D.default.useState("");return D.default.useEffect(()=>{let g=!1;return a.zoneSpaces(c).then(o=>{g||(s(o.spaces),m(""))}).catch(o=>{g||m(o.message)}),()=>{g=!0}},[a,c]),D.default.createElement("div",{className:"acv-zone"},D.default.createElement("div",{className:"acv-section-head"},D.default.createElement("h2",{className:"acv-section-title"},e),D.default.createElement("span",{className:"acv-section-note"},v)),n&&D.default.createElement("div",{className:"acv-empty"},n),!i&&!n&&D.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),i&&i.length===0&&D.default.createElement("div",{className:"acv-panel"},D.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u4E13\u533A\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u300C\u7BA1\u7406 \u2192 \u677F\u5757\u300D\u91CC\u628A\u677F\u5757\u653E\u8FDB\u300C",e,"\u300D\u3002")),D.default.createElement("div",{className:"acv-zone-grid"},i?.map(g=>D.default.createElement(J,{key:g.id,space:g,onOpen:t}))))}var A=_(require("react"),1);function da({api:a,onOpenPost:c}){let[e,v]=A.default.useState(""),[t,i]=A.default.useState(null),[s,n]=A.default.useState(!1),[m,g]=A.default.useState(!1),o=A.default.useRef(null);return A.default.useEffect(()=>{if(!s)return;let p=h=>{o.current&&!o.current.contains(h.target)&&n(!1)};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[s]),A.default.useEffect(()=>{let p=e.trim();if(p.length===0){i(null);return}let h=setTimeout(async()=>{g(!0);try{let r=await a.search(p);i(r.posts||[]),n(!0)}catch{i([])}finally{g(!1)}},280);return()=>clearTimeout(h)},[a,e]),A.default.createElement("div",{className:"acv-search",ref:o},A.default.createElement("span",{className:"acv-search-icon","aria-hidden":"true"},A.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",focusable:"false"},A.default.createElement("circle",{cx:"7",cy:"7",r:"4.6",stroke:"currentColor",strokeWidth:"1.6"}),A.default.createElement("path",{d:"M10.5 10.5 14 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))),A.default.createElement("input",{className:"acv-search-input",type:"text",value:e,placeholder:"\u641C\u7D22\u5E16\u5B50","aria-label":"\u641C\u7D22\u5E16\u5B50",autoComplete:"off",spellCheck:!1,onChange:p=>v(p.target.value),onFocus:()=>e.trim()&&n(!0)}),s&&A.default.createElement("div",{className:"acv-search-panel"},m&&A.default.createElement("div",{className:"acv-search-empty"},"\u641C\u7D22\u4E2D\u2026"),!m&&t?.length===0&&A.default.createElement("div",{className:"acv-search-empty"},"\u6CA1\u6709\u627E\u5230\u300C",e.trim(),"\u300D"),t?.map(p=>A.default.createElement("button",{key:p.id,type:"button",className:"acv-search-item",onClick:()=>{n(!1),v(""),c(p.id)}},A.default.createElement("span",{className:"acv-search-title"},p.title),A.default.createElement("span",{className:"acv-search-meta"},p.spaceSlug," \xB7 ",p.author," \xB7 ",L(p.createdAt))))))}function $a({me:a,mode:c,api:e,emailNotice:v,onDsh:t,onAuth:i,onLogout:s,onHome:n,onResend:m,onAdmin:g,onOpenPost:o,tabs:p,activeTab:h,onSelectTab:r}){let[f,S]=k.default.useState(!1);return k.default.useEffect(()=>{if(!f)return;let x=()=>S(!1);return window.addEventListener("click",x),()=>window.removeEventListener("click",x)},[f]),k.default.createElement("div",{className:"acv-topbar"},k.default.createElement("div",{className:"acv-tabs"},p.map(x=>k.default.createElement("button",{key:x.key,type:"button",className:h===x.key?"acv-tab is-active":"acv-tab",onClick:()=>r(x.key)},x.label))),k.default.createElement(da,{api:e,onOpenPost:o}),k.default.createElement("div",{className:"acv-topbar-grow"}),k.default.createElement("div",{className:"acv-topbar-right"},c==="plugin"&&k.default.createElement("button",{type:"button",className:"acv-dsh",onClick:t,title:"\u548C DSH \u804A\u804A\u8FD9\u4E2A\u793E\u533A"},k.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),c==="plugin"&&k.default.createElement("span",{className:"acv-divider"}),a?k.default.createElement("div",{className:"acv-relative"},k.default.createElement("button",{type:"button",className:"acv-user",onClick:x=>{x.stopPropagation(),S(w=>!w)}},k.default.createElement("span",{className:"acv-avatar"},H(a.displayName||a.handle)),k.default.createElement("span",{className:"acv-user-name"},a.displayName||a.handle),k.default.createElement("span",{className:"acv-caret"},"\u25BE")),f&&k.default.createElement("div",{className:"acv-menu",onClick:x=>x.stopPropagation()},k.default.createElement("div",{className:"acv-menu-note"},"@",a.handle," \xB7 ",a.role==="admin"?"\u7BA1\u7406\u5458":"\u6210\u5458"),a.role==="admin"&&k.default.createElement("button",{type:"button",onClick:()=>{S(!1),g()}},"\u7BA1\u7406"),!a.emailVerified&&k.default.createElement("button",{type:"button",onClick:()=>{S(!1),m()}},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6"),k.default.createElement("button",{type:"button",onClick:()=>{S(!1),s()}},"\u9000\u51FA\u767B\u5F55"))):k.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("login")},"\u767B\u5F55")),v&&k.default.createElement("div",{style:{display:"none"}},v))}function pa({mode:a="site",base:c="",tokenStore:e,onDsh:v}){let t=k.default.useMemo(()=>R({base:c,credentials:a==="site"?"same-origin":"omit",token:e?.get()||null,onToken:u=>e?.set(u)}),[c,a,e]),[i,s]=k.default.useState(null),[n,m]=k.default.useState({name:"home"}),[g,o]=k.default.useState("home"),[p,h]=k.default.useState(null),[r,f]=k.default.useState(null),[S,x]=k.default.useState(0),w=k.default.useCallback((u,{error:B=!1}={})=>{f({text:u,error:B,key:Date.now()})},[]);k.default.useEffect(()=>{if(!r)return;let u=setTimeout(()=>f(null),3200);return()=>clearTimeout(u)},[r]);let $=k.default.useCallback(async()=>{try{let u=await t.me();s(u.account||null)}catch{s(null)}},[t]);k.default.useEffect(()=>{$()},[$]),k.default.useEffect(()=>{let u=()=>h("login");return window.addEventListener("achoverse:auth",u),()=>window.removeEventListener("achoverse:auth",u)},[]),k.default.useEffect(()=>{if(a!=="site")return;let B=new URLSearchParams(window.location.search).get("token");!B||!window.location.pathname.startsWith("/verify")||t.verify(B).then(j=>{s(j.account||null),w("\u90AE\u7BB1\u9A8C\u8BC1\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u53D1\u5E16\u4E86"),window.history.replaceState({},"","/")}).catch(j=>w(j.message,{error:!0}))},[t,a,w]);let T=u=>m({name:"space",slug:u}),P=(u,B)=>m({name:"post",id:u,from:B||{name:"home"}}),I=()=>{m({name:"home"}),x(u=>u+1)};return k.default.createElement("div",{className:a==="plugin"?"acv-root acv-root--panel":"acv-root"},k.default.createElement("div",{className:"acv-frame"},k.default.createElement($a,{me:i,mode:a,api:t,onOpenPost:P,onDsh:()=>{if(v)return v();window.dispatchEvent(new CustomEvent("achoverse:open-dsh"))},onAuth:h,onLogout:async()=>{try{await t.logout()}catch{}t.setToken(null),s(null),w("\u5DF2\u7ECF\u9000\u51FA\u767B\u5F55"),I()},onHome:I,tabs:[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR"}],activeTab:g,onSelectTab:u=>{o(u),m({name:"home"})},onAdmin:()=>m({name:"admin"}),onResend:async()=>{try{let u=await t.resend();w(u?.verifyLink?"\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7":"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001")}catch(u){w(u.message,{error:!0})}}}),n.name==="home"&&g==="arvr"&&k.default.createElement(la,{api:t,zone:"arvr",title:"AR/VR \u4E13\u533A",note:"\u4E3B\u9898\u4E13\u533A\uFF1A\u53EA\u6536\u5F55 AR/VR \u76F8\u5173\u7684\u677F\u5757",onOpenSpace:T}),n.name==="home"&&g==="home"&&k.default.createElement(aa,{key:S,api:t,me:i,onOpenSpace:T,onOpenPost:u=>P(u,{name:"home"}),onAuth:()=>h("login"),notify:w}),n.name==="space"&&k.default.createElement(ta,{api:t,slug:n.slug,me:i,onBack:I,onOpenPost:u=>P(u,{name:"space",slug:n.slug}),onAuth:()=>h("login"),notify:w}),n.name==="admin"&&k.default.createElement(ca,{api:t,onBack:I,notify:w}),n.name==="post"&&k.default.createElement(ia,{api:t,id:n.id,me:i,backTo:n.from?.name==="space"?"space":"home",onBack:()=>n.from?.name==="space"?m({name:"space",slug:n.from.slug}):I(),onAuth:()=>h("login"),notify:w})),p&&k.default.createElement(ra,{api:t,initialMode:p,onClose:()=>h(null),onDone:u=>{s(u),h(null),I(),w("\u767B\u5F55\u6210\u529F")},notify:w}),r&&k.default.createElement("div",{className:r.error?"acv-toast is-error":"acv-toast"},r.text))}var C=_(require("react"),1);function G(a,c=""){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,role:a,text:c,tools:[]}}async function Pa({token:a,message:c,signal:e,onEvent:v}){let t=await fetch("/community/ai/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:a,message:c}),signal:e});if(!t.ok||!t.body){let m=`HTTP ${t.status}`;try{m=(await t.json())?.error||m}catch{}throw new Error(m)}let i=t.body.getReader(),s=new TextDecoder,n="";for(;;){let{value:m,done:g}=await i.read();if(g)break;n+=s.decode(m,{stream:!0});let o;for(;(o=n.indexOf(`

`))>=0;){let p=n.slice(0,o);n=n.slice(o+2);for(let h of p.split(`
`)){if(!h.startsWith("data:"))continue;let r=h.slice(5).trim();if(r)try{v(JSON.parse(r))}catch{}}}}}function va({tokenStore:a,onClose:c,onLogin:e}){let[v,t]=C.default.useState(()=>[G("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),[i,s]=C.default.useState(""),[n,m]=C.default.useState(!1),[g,o]=C.default.useState(""),[p,h]=C.default.useState(!!a?.get()),r=C.default.useRef(null);C.default.useEffect(()=>{let x=r.current;x&&(x.scrollTop=x.scrollHeight)},[v]),C.default.useEffect(()=>{let x=setInterval(()=>h(!!a?.get()),1500);return()=>clearInterval(x)},[a]);let f=x=>t(w=>{let $=[...w],T={...$[$.length-1]};return $[$.length-1]=x(T),$});async function S(x){let w=String(x??i).trim();if(!w||n)return;let $=a?.get();if(!$){o("\u5148\u767B\u5F55\u793E\u533A\uFF0C\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u8BF4\u8BDD");return}o(""),m(!0),s(""),t(T=>[...T,G("user",w),G("assistant","")]);try{await Pa({token:$,message:w,onEvent:T=>{T.type==="text"?f(P=>({...P,text:P.text?`${P.text}
${T.text}`:T.text})):T.type==="tool"?f(P=>({...P,tools:T.phase==="call"?[...P.tools,T.name]:P.tools})):T.type==="error"&&o(T.error||"\u5BF9\u8BDD\u5931\u8D25")}})}catch(T){o(T.message),/登录|401/.test(T.message)&&h(!1)}finally{m(!1)}}return C.default.createElement("div",{className:"acv-drawer",role:"dialog","aria-label":"DSH \u5BF9\u8BDD"},C.default.createElement("div",{className:"acv-drawer-head"},C.default.createElement("span",{className:"acv-dsh",style:{padding:"6px 14px"}},C.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),C.default.createElement("span",{style:{fontWeight:700}},"\u793E\u533A\u52A9\u624B"),C.default.createElement("span",{style:{flex:1}}),C.default.createElement("button",{type:"button",className:"acv-back",onClick:c,"aria-label":"\u5173\u95ED"},"\u2715")),C.default.createElement("div",{className:"acv-drawer-body",ref:r},v.map(x=>C.default.createElement("div",{key:x.id,className:`acv-chat ${x.role==="user"?"is-user":"is-agent"}`},x.tools?.length>0&&C.default.createElement("div",{className:"acv-chat-tools"},x.tools.map((w,$)=>C.default.createElement("span",{key:`${w}-${$}`,className:"acv-chip"},"\u8C03\u7528 ",w))),x.text&&(x.role==="assistant"?C.default.createElement("div",{className:"acv-chat-text acv-chat-text--md"},C.default.createElement(Y,{text:x.text})):C.default.createElement("div",{className:"acv-chat-text"},x.text)),!x.text&&x.role==="assistant"&&n&&C.default.createElement("div",{className:"acv-chat-typing"},"\u2026"))),g&&C.default.createElement("div",{className:"acv-error"},g),!p&&C.default.createElement("div",{className:"acv-notice",style:{marginTop:12}},"\u8FD8\u6CA1\u767B\u5F55\u793E\u533A\uFF0C\u767B\u5F55\u4E4B\u540E\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002",C.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>{e?.(),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55"))),C.default.createElement("div",{className:"acv-drawer-foot"},C.default.createElement("textarea",{className:"acv-drawer-input",rows:2,value:i,placeholder:n?"\u6B63\u5728\u56DE\u590D\u2026":"\u95EE\u70B9\u4EC0\u4E48\uFF0C\u6216\u8BA9\u6211\u53D1\u4E00\u6761\u5E16",onChange:x=>s(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),S())}}),C.default.createElement("div",{className:"acv-row",style:{marginTop:10,justifyContent:"space-between"}},C.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>S("\u6700\u8FD1\u793E\u533A\u91CC\u6709\u4EC0\u4E48\u65B0\u5E16\u5B50\uFF1F"),disabled:n},"\u6700\u8FD1\u6709\u4EC0\u4E48"),C.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>S(),disabled:n||!i.trim()},n?"\u56DE\u590D\u4E2D\u2026":"\u53D1\u9001"))))}var ma="achoverse-community",X="achoverse.community.token",ua="https://community.achoverse.com",Ma=["slots"];function fa(){if(typeof document>"u")return;let a=document.querySelector("style[data-acv-community]");a||(a=document.createElement("style"),a.setAttribute("data-acv-community","styles"),document.head.appendChild(a)),a.textContent!==q&&(a.textContent=q)}function Oa({size:a=22,active:c=!1}){return M.default.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},M.default.createElement("circle",{cx:12,cy:8.5,r:3.4,stroke:"currentColor",strokeWidth:c?2:1.7}),M.default.createElement("path",{d:"M4.6 19.4c.8-3.9 3.8-6.1 7.4-6.1s6.6 2.2 7.4 6.1",stroke:"currentColor",strokeWidth:c?2:1.7,strokeLinecap:"round"}))}function La(){return{get(){try{return window.localStorage.getItem(X)}catch{return null}},set(a){try{a?window.localStorage.setItem(X,a):window.localStorage.removeItem(X)}catch{}}}}function Da(){let[a,c]=M.default.useState(null),[e,v]=M.default.useState(!1),t=M.default.useMemo(()=>La(),[]);return M.default.useEffect(()=>{fa();let i=!1;return fetch("/community/config",{cache:"no-store"}).then(s=>s.ok?s.json():Promise.reject(new Error(String(s.status)))).then(s=>{i||c(s?.baseUrl||ua)}).catch(()=>{i||c(ua)}),()=>{i=!0}},[]),a?M.default.createElement(M.default.Fragment,null,M.default.createElement(pa,{mode:"plugin",base:a,tokenStore:t,onDsh:()=>v(!0)}),e?M.default.createElement(va,{tokenStore:t,onClose:()=>v(!1)}):null):M.default.createElement("div",{className:"acv-root acv-root--panel"},M.default.createElement("div",{className:"acv-frame"},M.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u8FDE\u63A5\u793E\u533A\u2026")))}function Ia(a){fa(),a.slots.inject("main",()=>a.slots.register({name:"main",key:ma},Da)),a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:ma,order:30,label:()=>"Achoverse\u793E\u533A"},Oa))}
return module.exports}})
