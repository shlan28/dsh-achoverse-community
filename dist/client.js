window.__ModuleLoader__.load({id:"dsh-achoverse-community",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Je=Object.create;var le=Object.defineProperty;var Ze=Object.getOwnPropertyDescriptor;var Qe=Object.getOwnPropertyNames;var Re=Object.getPrototypeOf,ea=Object.prototype.hasOwnProperty;var xe=(a,e)=>()=>{try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},aa=(a,e)=>{for(var t in e)le(a,t,{get:e[t],enumerable:!0})},ye=(a,e,t,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Qe(e))!ea.call(a,s)&&s!==t&&le(a,s,{get:()=>e[s],enumerable:!(u=Ze(e,s))||u.enumerable});return a};var Y=(a,e,t)=>(t=a!=null?Je(Re(a)):{},ye(e||!a||!a.__esModule?le(t,"default",{value:a,enumerable:!0}):t,a)),ta=a=>ye(le({},"__esModule",{value:!0}),a);var Ce=xe(J=>{"use strict";var ia=require("react");function Se(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function te(){}var Q={d:{f:te,r:function(){throw Error(Se(522))},D:te,C:te,L:te,m:te,X:te,S:te,M:te},p:0,findDOMNode:null},oa=Symbol.for("react.portal"),ra=Symbol.for("react.recoverable"),ke=Symbol.for("react.optimistic_key");function ca(a,e,t){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oa,key:u==null?null:u===ke?ke:""+u,children:a,containerInfo:e,implementation:t}}var ne=ia.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function pe(a,e){if(a==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}J.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q;J.browser=function(a){return{$$typeof:ra,_reason:a}};J.createPortal=function(a,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(Se(299));return ca(a,e,null,t)};J.flushSync=function(a){var e=ne.T,t=Q.p;try{if(ne.T=null,Q.p=2,a)return a()}finally{ne.T=e,Q.p=t,Q.d.f()}};J.preconnect=function(a,e){typeof a=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Q.d.C(a,e))};J.prefetchDNS=function(a){typeof a=="string"&&Q.d.D(a)};J.preinit=function(a,e){if(typeof a=="string"&&e&&typeof e.as=="string"){var t=e.as,u=pe(t,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;t==="style"?Q.d.S(a,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:u,integrity:s,fetchPriority:i}):t==="script"&&Q.d.X(a,{crossOrigin:u,integrity:s,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};J.preinitModule=function(a,e){if(typeof a=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var t=pe(e.as,e.crossOrigin);Q.d.M(a,{crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&Q.d.M(a)};J.preload=function(a,e){if(typeof a=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var t=e.as,u=pe(t,e.crossOrigin);Q.d.L(a,t,{crossOrigin:u,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};J.preloadModule=function(a,e){if(typeof a=="string")if(e){var t=pe(e.as,e.crossOrigin);Q.d.m(a,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else Q.d.m(a)};J.requestFormReset=function(a){Q.d.r(a)};J.unstable_batchedUpdates=function(a,e){return a(e)};J.useFormState=function(a,e,t){return ne.H.useFormState(a,e,t)};J.useFormStatus=function(){return ne.H.useHostTransitionStatus()};J.version="19.3.1"});var Te=xe((_a,ze)=>{"use strict";function Ee(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ee)}catch(a){console.error(a)}}Ee(),ze.exports=Ce()});var za={};aa(za,{apply:()=>Ea,inject:()=>Na});module.exports=ta(za);var R=Y(require("react"),1);var ue=`/* Achoverse \u793E\u533A\uFF1A\u6D45\u7070\u753B\u5E03 + \u767D\u8272\u5927\u5706\u89D2\u5361\u7247 + \u7C89\u7D2B\u6E10\u53D8\u4E3B\u89C6\u89C9\u3002 */

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

/* \u63D2\u4EF6\u9762\u677F\uFF1A\u5BBF\u4E3B\u7ED9\u7684\u662F\u4E00\u4E2A\u56FA\u5B9A\u9AD8\u5EA6\u7684\u69FD\u4F4D\uFF0C\u6EDA\u52A8\u8981\u7531\u6211\u4EEC\u81EA\u5DF1\u63A5\u7BA1\uFF0C
   \u5426\u5219\u5185\u5BB9\u8D85\u51FA\u540E\u65E2\u4E0D\u80FD\u6EDA\u4E5F\u6CA1\u6709\u6EDA\u52A8\u6761\uFF08\u8868\u73B0\u4E3A\u300C\u4E0A\u6ED1\u6CA1\u53CD\u5E94\u300D\uFF09\u3002 */
.acv-root--panel {
  padding: 16px;
  background: transparent;
  height: 100%;
  max-height: 100vh;
  overflow-y: auto;
  overscroll-behavior: contain;
  box-sizing: border-box;
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
  display: block;
  aspect-ratio: 4 / 1;
  width: 100%;
  min-height: 96px;
  overflow: hidden;
  isolation: isolate;
  background: linear-gradient(125deg, var(--accent, #f53fa6), var(--accent-to, #ff7a45));
}

/* \u5DE6\u4FA7\u7684\u5927\u5706\u73AF\uFF1A\u63CF\u8FB9 + \u4E24\u5708\u6781\u6DE1\u7684\u6295\u5F71 */
.acv-space-cover::before {
  content: '';
  position: absolute;
  width: 520px;
  height: 520px;
  border: 1px solid #ffffff20;
  border-radius: 50%;
  left: -160px;
  top: -120px;
  box-shadow:
    0 0 0 55px #ffffff0a,
    0 0 0 112px #ffffff08;
  z-index: -1;
  pointer-events: none;
}

/* \u53F3\u4E0A\u7684\u67D4\u5149\u5706 */
.acv-space-cover::after {
  content: '';
  position: absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  background: #ffffff14;
  right: -50px;
  top: -95px;
  z-index: -1;
  pointer-events: none;
}

.acv-cover-art {
  position: absolute;
  width: 76%;
  max-width: 600px;
  height: 100%;
  right: 3%;
  bottom: 0;
  overflow: visible;
  z-index: 1;
  transition: transform 0.22s ease;
}

.acv-space-card:hover .acv-cover-art {
  transform: translateY(-3px) rotate(-0.5deg);
}

.acv-space-badge {
  position: absolute;
  z-index: 2;
  left: 16px;
  top: 14px;
  background: #fff;
  border: 1px solid #fff;
  color: var(--accent, #f53fa6);
  font-size: 11px;
  font-weight: 650;
  padding: 5px 10px 5px 9px;
  border-radius: 7px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  backdrop-filter: none;
}

.acv-space-badge::before {
  content: '';
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: currentColor;
  opacity: 0.7;
}


.acv-space-enter {
  position: absolute;
  right: 16px;
  bottom: 14px;
  z-index: 2;
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
  width: 72px;
  min-height: 36px;
  aspect-ratio: 4 / 1;
  border-radius: 10px;
  flex: none;
}

.acv-admin-swatch::before,
.acv-admin-swatch::after,
.acv-admin-swatch .acv-cover-art,
.acv-admin-swatch .acv-space-enter {
  display: none;
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

/* ------------------------------------------------------------- \u62BD\u5C49\u8F93\u5165\u533A */

.acv-chat-composer {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  background: #fff;
  border: 1px solid #e6e6ee;
  border-radius: 18px;
  padding: 8px 8px 8px 14px;
  transition: border-color 0.16s ease, box-shadow 0.16s ease;
}

.acv-chat-composer:focus-within {
  border-color: #f5a6d3;
  box-shadow: 0 0 0 4px rgba(245, 63, 166, 0.1);
}

.acv-chat-input {
  flex: 1;
  min-width: 0;
  border: 0;
  outline: none;
  background: transparent;
  resize: none;
  font: inherit;
  font-size: 14px;
  line-height: 1.55;
  color: var(--acv-ink);
  padding: 6px 0;
  max-height: 120px;
  overflow-y: auto;
}

.acv-chat-input::placeholder {
  color: #a9a9b8;
}

.acv-chat-send {
  width: 34px;
  height: 34px;
  flex: none;
  border: 0;
  border-radius: 50%;
  background: var(--acv-brand);
  color: #fff;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: transform 0.16s ease, opacity 0.16s ease;
}

.acv-chat-send:hover:not(:disabled) {
  transform: translateY(-1px);
}

.acv-chat-send:disabled {
  opacity: 0.45;
  cursor: default;
}

.acv-chat-send-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #fff;
  animation: acv-pulse 1s ease-in-out infinite;
}

@keyframes acv-pulse {
  0%,
  100% {
    opacity: 0.35;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.15);
  }
}

.acv-chat-hint {
  margin-top: 8px;
  text-align: center;
  font-size: 11px;
  color: #b3b3c0;
}

/* ------------------------------------------------------------- \u7528\u6237\u60AC\u6D6E\u5361 */

.acv-userchip {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.acv-usercard {
  position: absolute;
  left: 0;
  top: calc(100% + 8px);
  z-index: 60;
  width: 236px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 20px 46px rgba(23, 23, 38, 0.18);
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  cursor: default;
}

.acv-usercard--fixed {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 300;
}

.acv-usercard-head {
  display: flex;
  align-items: center;
  gap: 10px;
}

.acv-usercard-id {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.acv-usercard-name {
  font-size: 13px;
  font-weight: 650;
  color: var(--acv-ink);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.acv-usercard-handle {
  font-size: 11px;
  color: var(--acv-muted);
}

.acv-usercard-bio {
  font-size: 12px;
  color: var(--acv-muted);
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.acv-usercard-foot {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
}

/* ------------------------------------------------------------- \u83DC\u5355\u5206\u7EC4 / \u8D26\u53F7\u9875 / \u79C1\u4FE1 */

.acv-menu-group {
  font-size: 10px;
  letter-spacing: 0.08em;
  color: #b3b3c0;
  padding: 8px 12px 4px;
  text-transform: uppercase;
}

.acv-menu-group:empty {
  padding: 0;
  margin: 6px 10px;
  border-top: 1px solid var(--acv-line);
}

.acv-settings-section {
  padding: 16px 0;
  border-top: 1px solid var(--acv-line);
}

.acv-settings-section:first-of-type {
  border-top: 0;
  padding-top: 4px;
}

.acv-inline {
  display: flex;
  gap: 8px;
  align-items: center;
}

.acv-inline .acv-input {
  flex: 1;
}

/* \u79C1\u4FE1 */
.acv-dm-layout {
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 16px;
  align-items: stretch;
  min-height: 460px;
}

@media (max-width: 720px) {
  .acv-dm-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}

.acv-dm-list {
  padding: 14px !important;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 520px;
  overflow-y: auto;
}

.acv-dm-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border: 0;
  background: transparent;
  font: inherit;
  text-align: left;
  padding: 9px 10px;
  border-radius: 12px;
  cursor: pointer;
  color: inherit;
}

.acv-dm-item:hover {
  background: #f7f7fb;
}

.acv-dm-item.is-active {
  background: #fff0f8;
}

.acv-dm-main {
  min-width: 0;
  flex: 1;
  display: block;
}

.acv-dm-name {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 620;
}

.acv-dm-preview {
  display: block;
  color: var(--acv-muted);
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.acv-dm-pane {
  display: flex;
  flex-direction: column;
  padding: 0 !important;
  max-height: 520px;
}

.acv-dm-head {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--acv-line);
}

.acv-dm-more {
  align-self: center;
  border: 0;
  background: #f3f3f8;
  color: var(--acv-muted);
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 999px;
  cursor: pointer;
  margin-bottom: 4px;
}

.acv-dm-more:hover {
  background: #ececf4;
}

.acv-dm-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.acv-dm-msg {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  max-width: 76%;
}

.acv-dm-msg.is-mine {
  align-self: flex-end;
  align-items: flex-end;
}

.acv-dm-bubble {
  padding: 9px 13px;
  border-radius: 14px;
  background: #f5f5fa;
  font-size: 14px;
  line-height: 1.6;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
}

.acv-dm-msg.is-mine .acv-dm-bubble {
  background: var(--acv-brand);
  color: #fff;
}

.acv-dm-time {
  font-size: 10px;
  color: #b3b3c0;
}

.acv-dm-composer {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid var(--acv-line);
  background: #fbfbfe;
}
`;var g=Y(require("react"),1);function we({base:a="",token:e=null,credentials:t="same-origin",onToken:u}={}){let s=e;function i(o){s=o||null,u?.(s)}async function r(o,{method:p="GET",body:h,signal:l}={}){let n={};h!==void 0&&(n["content-type"]="application/json"),s&&(n.authorization=`Bearer ${s}`);let d=await fetch(a+o,{method:p,headers:n,body:h===void 0?void 0:JSON.stringify(h),credentials:s?"omit":t,cache:"no-store",signal:l}),v=await d.text(),y={};try{y=v?JSON.parse(v):{}}catch{y={error:v.slice(0,200)}}if(!d.ok){let S=new Error(y?.error||`HTTP ${d.status}`);throw S.code=y?.code,S.status=d.status,S}return y}return{raw:r,setToken:i,getToken:()=>s,me:()=>r("/api/auth/me"),home:()=>r("/api/home"),bootstrap:()=>r("/api/bootstrap"),spaces:()=>r("/api/spaces"),zoneSpaces:o=>r(`/api/zones/${encodeURIComponent(o)}`),space:o=>r(`/api/spaces/${encodeURIComponent(o)}`),post:o=>r(`/api/posts/${encodeURIComponent(o)}`),captcha:()=>r("/api/captcha"),register:o=>r("/api/auth/register",{method:"POST",body:o}),login:o=>r("/api/auth/login",{method:"POST",body:o}),logout:()=>r("/api/auth/logout",{method:"POST",body:{}}),resend:()=>r("/api/auth/resend",{method:"POST",body:{}}),verify:o=>r("/api/auth/verify",{method:"POST",body:{token:o}}),createPost:o=>r("/api/posts",{method:"POST",body:o}),createComment:(o,p)=>r(`/api/posts/${encodeURIComponent(o)}/comments`,{method:"POST",body:p}),updateProfile:o=>r("/api/account/profile",{method:"POST",body:o}),requestEmailChange:o=>r("/api/account/email",{method:"POST",body:{email:o}}),confirmEmailChange:o=>r("/api/account/email/confirm",{method:"POST",body:{token:o}}),changePassword:o=>r("/api/account/password",{method:"POST",body:o}),forgotPassword:o=>r("/api/account/password/forgot",{method:"POST",body:{email:o}}),resetPassword:o=>r("/api/account/password/reset",{method:"POST",body:o}),dmThreads:()=>r("/api/dm/threads"),dmUnread:()=>r("/api/dm/unread"),dmThread:(o,p)=>r(`/api/dm/thread/${encodeURIComponent(o)}${p?`?before=${encodeURIComponent(p)}`:""}`),dmOpenWith:o=>r("/api/dm/thread",{method:"POST",body:o}),dmSend:(o,p)=>r(`/api/dm/thread/${encodeURIComponent(o)}`,{method:"POST",body:{body:p}}),user:o=>r(`/api/users/${encodeURIComponent(o)}`),adminUsers:o=>r(`/api/admin/users${o?`?q=${encodeURIComponent(o)}`:""}`),pendingAccounts:()=>r("/api/admin/pending"),adminSpaces:()=>r("/api/admin/spaces"),createSpace:o=>r("/api/admin/spaces",{method:"POST",body:o}),updateSpace:(o,p)=>r(`/api/admin/spaces/${encodeURIComponent(o)}/update`,{method:"POST",body:p}),archiveSpace:(o,p=!0)=>r(`/api/admin/spaces/${encodeURIComponent(o)}/archive`,{method:"POST",body:{archived:p}}),verifyAccount:o=>r("/api/admin/verify",{method:"POST",body:{accountId:o}}),setPostStatus:(o,p)=>r(`/api/posts/${encodeURIComponent(o)}/status`,{method:"POST",body:{status:p}}),notifications:()=>r("/api/notifications"),markRead:o=>r("/api/notifications/read",{method:"POST",body:{ids:o}}),search:o=>r(`/api/search?q=${encodeURIComponent(o)}`)}}function X(a){let e=Number(a)||0;if(!e)return"";let t=Date.now()-e;if(t<6e4)return"\u521A\u521A";if(t<36e5)return`${Math.floor(t/6e4)} \u5206\u949F\u524D`;if(t<864e5)return`${Math.floor(t/36e5)} \u5C0F\u65F6\u524D`;if(t<7*864e5)return`${Math.floor(t/864e5)} \u5929\u524D`;let u=new Date(e);return`${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`}function Z(a){let e=String(a||"?").trim();if(!e)return"?";let t=[...e];return t.length>1&&/[\u4e00-\u9fa5]/.test(t[0])?t.slice(-2).join(""):t[0].toUpperCase()}var b=Y(require("react"),1);var G=Y(require("react"),1),Ne=[{key:"diffusion",label:"\u6269\u6563",edition:"DIFFUSION"},{key:"connection",label:"\u8FDE\u63A5",edition:"CONNECTION"},{key:"resonance",label:"\u5171\u632F",edition:"RESONANCE"}];function na({motif:a}){return a==="connection"?G.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},G.default.createElement("rect",{x:"652",y:"-130",width:"390",height:"390",rx:"58",transform:"rotate(-24 847 65)",fill:"#E2F5FF",fillOpacity:".16"}),G.default.createElement("rect",{x:"790",y:"120",width:"326",height:"326",rx:"52",transform:"rotate(19 953 283)",fill:"#E2F5FF",fillOpacity:".13"}),G.default.createElement("rect",{x:"570",y:"170",width:"230",height:"230",rx:"38",transform:"rotate(19 685 285)",fill:"#34298A",fillOpacity:".08"})):a==="resonance"?G.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},G.default.createElement("rect",{x:"500",y:"-40",width:"720",height:"230",rx:"115",transform:"rotate(-28 860 75)",fill:"#FFF4D9",fillOpacity:".16"}),G.default.createElement("rect",{x:"650",y:"165",width:"690",height:"190",rx:"95",transform:"rotate(-28 995 260)",fill:"#FFF4D9",fillOpacity:".14"}),G.default.createElement("circle",{cx:"1130",cy:"105",r:"220",fill:"#AC5B25",fillOpacity:".06"})):a==="diffusion"?G.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},G.default.createElement("circle",{cx:"948",cy:"85",r:"270",fill:"#FFF0F5",fillOpacity:".14"}),G.default.createElement("circle",{cx:"732",cy:"244",r:"190",fill:"#FFF0F5",fillOpacity:".12"}),G.default.createElement("circle",{cx:"1060",cy:"320",r:"240",fill:"#9E2367",fillOpacity:".08"})):null}function de({space:a,showBadge:e=!0,className:t=""}){return G.default.createElement("span",{className:`acv-space-cover ${t}`.trim(),style:{"--accent":a.accent,"--accent-to":a.accentTo}},G.default.createElement(na,{motif:a.motif}),e&&G.default.createElement("span",{className:"acv-space-badge"},`${a.postCount??0} \u4E2A\u5E16\u5B50`),G.default.createElement("span",{className:"acv-space-enter"},"\u8FDB\u5165\u8BA8\u8BBA \u2192"))}var M=Y(require("react"),1),Ae=Y(Te(),1);var la=236,Oe=190;function da(a){let e=(window.innerWidth||1024)-la-10;return Math.max(10,Math.min(a,e))}function F({api:a,me:e,handle:t,children:u,onDm:s,disabled:i=!1,className:r=""}){let[o,p]=M.default.useState(!1),[h,l]=M.default.useState(null),[n,d]=M.default.useState(null),[v,y]=M.default.useState(!1),S=M.default.useRef(null),$=M.default.useRef(null),P=M.default.useRef(null),f=M.default.useRef(0),T=M.default.useCallback(()=>{t&&(y(!1),a.user(t).then(m=>{d(m.user),f.current=Date.now()}).catch(()=>{d(null),y(!0)}))},[a,t]),C=()=>{let m=S.current?.getBoundingClientRect();if(!m)return;let B=m.bottom+8+Oe>(window.innerHeight||768)?Math.max(10,m.top-8-Oe):m.bottom+8;l({left:da(m.left),top:B})},A=()=>{i||(clearTimeout($.current),P.current=setTimeout(()=>{C(),p(!0),(!n||Date.now()-f.current>3e4)&&T()},140))},I=()=>{clearTimeout(P.current),$.current=setTimeout(()=>p(!1),160)};M.default.useEffect(()=>{if(!o)return;let m=()=>p(!1);return window.addEventListener("scroll",m,!0),window.addEventListener("resize",m),()=>{window.removeEventListener("scroll",m,!0),window.removeEventListener("resize",m)}},[o]),M.default.useEffect(()=>{i&&p(!1)},[i]),M.default.useEffect(()=>()=>{clearTimeout($.current),clearTimeout(P.current)},[]);let L=!!(e&&t&&e.handle?.toLowerCase()===String(t).toLowerCase()),z=!!n?.allowDm&&!L,W=o&&h&&typeof document<"u"?(0,Ae.createPortal)(M.default.createElement("span",{className:"acv-usercard acv-usercard--fixed",style:{left:h.left,top:h.top},role:"dialog","aria-label":`${n?.displayName||t} \u7684\u8D44\u6599\u5361`,onClick:m=>m.stopPropagation(),onMouseEnter:()=>clearTimeout($.current),onMouseLeave:I},M.default.createElement("span",{className:"acv-usercard-head"},M.default.createElement("span",{className:"acv-avatar"},Z(n?.displayName||t)),M.default.createElement("span",{className:"acv-usercard-id"},M.default.createElement("span",{className:"acv-usercard-name"},n?.displayName||t),M.default.createElement("span",{className:"acv-usercard-handle"},"@",n?.handle||t)),n?.role==="admin"&&M.default.createElement("span",{className:"acv-chip"},"\u7BA1\u7406\u5458")),n?.bio&&M.default.createElement("span",{className:"acv-usercard-bio"},n.bio),M.default.createElement("span",{className:"acv-usercard-foot"},!n&&!v&&M.default.createElement("span",{className:"acv-usercard-bio"},"\u52A0\u8F7D\u4E2D\u2026"),!n&&v&&M.default.createElement("span",{className:"acv-usercard-bio"},"\u8D44\u6599\u52A0\u8F7D\u5931\u8D25"),n&&z&&!e&&M.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:m=>{m.stopPropagation(),p(!1),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55\u540E\u53D1\u79C1\u4FE1"),n&&z&&e&&M.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:m=>{m.stopPropagation(),p(!1),s?.(n)}},"\u53D1\u79C1\u4FE1"),n&&!z&&!L&&M.default.createElement("span",{className:"acv-usercard-bio"},"\u5BF9\u65B9\u672A\u5F00\u653E\u79C1\u4FE1"),L&&M.default.createElement("span",{className:"acv-usercard-bio"},"\u8FD9\u662F\u4F60\u81EA\u5DF1"))),document.body):null;return M.default.createElement("span",{ref:S,className:`acv-userchip ${r}`.trim(),onMouseEnter:A,onMouseLeave:I},u,W)}function fe({space:a,onOpen:e}){return b.default.createElement("button",{type:"button",className:"acv-space-card",onClick:()=>e(a.slug),style:{"--accent":a.accent,"--accent-to":a.accentTo}},b.default.createElement(de,{space:a}),b.default.createElement("span",{className:"acv-space-body"},b.default.createElement("span",{className:"acv-space-title"},a.title),b.default.createElement("span",{className:"acv-space-sub"},a.subtitle),b.default.createElement("span",{className:"acv-space-meta"},b.default.createElement("span",null,a.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${X(a.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u5E16"),b.default.createElement("span",{className:"acv-dot"}),b.default.createElement("span",{className:"acv-space-desc"},a.description||""))))}function Pe({api:a,me:e,initialData:t=null,onOpenSpace:u,onOpenPost:s,onDm:i}){let[r,o]=b.default.useState(t),[p,h]=b.default.useState(""),l=b.default.useCallback(()=>{a.home().then(o).catch(n=>h(n.message))},[a]);return b.default.useEffect(()=>{t||l()},[l,e]),p?b.default.createElement("div",{className:"acv-loading"},p):r?b.default.createElement("div",{className:"acv-main"},b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u677F\u5757"),b.default.createElement("span",{className:"acv-section-note"},"\u70B9\u5F00\u4E00\u4E2A\u677F\u5757\u8FDB\u5165\u8BA8\u8BBA\u533A")),r.spaces.map(n=>b.default.createElement(fe,{key:n.id,space:n,onOpen:u}))),b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u6700\u8FD1\u66F4\u65B0"),b.default.createElement("button",{type:"button",className:"acv-link",onClick:l},"\u5237\u65B0")),r.recent.length===0&&b.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u5E16\u5B50"),r.recent.map(n=>b.default.createElement("button",{key:n.id,type:"button",className:"acv-recent-item",onClick:()=>s(n.id)},b.default.createElement(F,{api:a,me:e,handle:n.author.handle,onDm:i},b.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},Z(n.author.displayName))),b.default.createElement("span",{className:"acv-recent-main"},b.default.createElement("span",{className:"acv-recent-title"},n.title),b.default.createElement("span",{className:"acv-recent-meta"},n.spaceTitle," \xB7"," ",b.default.createElement(F,{api:a,me:e,handle:n.author.handle,onDm:i},b.default.createElement("span",null,n.author.displayName))," ","\xB7 ",X(n.lastActivityAt)," \xB7 ",n.commentCount," \u6761\u8BC4\u8BBA"))))),b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u6D3B\u8DC3\u6210\u5458")),(r.members||[]).length===0&&b.default.createElement("div",{className:"acv-empty",style:{padding:"10px 0"}},"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8FC7\u5E16"),(r.members||[]).map(n=>b.default.createElement("div",{key:n.id,className:"acv-member"},b.default.createElement(F,{api:a,me:e,handle:n.handle,onDm:i},b.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},Z(n.displayName))),b.default.createElement("span",{className:"acv-member-main"},b.default.createElement(F,{api:a,me:e,handle:n.handle,onDm:i},b.default.createElement("span",{className:"acv-member-name"},n.displayName)),b.default.createElement(F,{api:a,me:e,handle:n.handle,onDm:i},b.default.createElement("span",{className:"acv-member-meta"},"@",n.handle))),b.default.createElement("span",{className:"acv-chip"},n.postCount," \u5E16")))),b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u6570\u636E")),b.default.createElement("div",{className:"acv-stats"},b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.spaces.length),b.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u677F\u5757")),b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.spaces.reduce((n,d)=>n+d.postCount,0)),b.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.recent.length),b.default.createElement("div",{className:"acv-stat-label"},"\u6761\u6700\u8FD1\u66F4\u65B0"))),b.default.createElement("p",{className:"acv-space-sub",style:{marginTop:12}},e?e.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u8FDB\u4EFB\u610F\u677F\u5757\uFF0C\u53F3\u4E0A\u89D2\u6709\u53D1\u5E16\u5165\u53E3\u3002":"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF1B\u53D1\u5E16\u3001\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002")))):b.default.createElement("div",{className:"acv-main"},b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-skeleton"}),b.default.createElement("div",{className:"acv-skeleton"}),b.default.createElement("div",{className:"acv-skeleton"})),b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-skeleton",style:{height:260}})))}var E=Y(require("react"),1);var H=Y(require("react"),1);function De({space:a,api:e,onClose:t,onCreated:u,notify:s}){let[i,r]=H.default.useState(""),[o,p]=H.default.useState(""),[h,l]=H.default.useState(!1),[n,d]=H.default.useState("");H.default.useEffect(()=>{let y=S=>{S.key==="Escape"&&t()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[t]);async function v(){l(!0),d("");try{let y=await e.createPost({spaceId:a.id,title:i,body:o});s("\u5E16\u5B50\u53D1\u51FA\u53BB\u4E86"),u(y.post)}catch(y){d(y.message)}finally{l(!1)}}return H.default.createElement("div",{className:"acv-overlay",onClick:t},H.default.createElement("div",{className:"acv-modal acv-modal--wide",onClick:y=>y.stopPropagation()},H.default.createElement("h3",{className:"acv-modal-title"},"\u5728\u300C",a.title,"\u300D\u53D1\u5E16"),H.default.createElement("p",{className:"acv-modal-sub"},"\u6807\u9898\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u6B63\u6587\u5C55\u5F00\u8BB2\u3002\u53D1\u5B8C\u4F1A\u76F4\u63A5\u8FDB\u8BE6\u60C5\u9875\u3002"),n&&H.default.createElement("div",{className:"acv-error"},n),H.default.createElement("div",{className:"acv-field"},H.default.createElement("label",null,"\u6807\u9898"),H.default.createElement("input",{className:"acv-input",autoFocus:!0,value:i,maxLength:160,placeholder:"\u60F3\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",onChange:y=>r(y.target.value)})),H.default.createElement("div",{className:"acv-field"},H.default.createElement("label",null,"\u6B63\u6587"),H.default.createElement("textarea",{className:"acv-textarea acv-textarea--tall",value:o,maxLength:2e4,placeholder:"\u5C55\u5F00\u8BF4\u8BF4\uFF0C\u652F\u6301\u6362\u884C",onChange:y=>p(y.target.value)})),H.default.createElement("div",{className:"acv-row"},H.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),H.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:h||!i.trim()||!o.trim(),onClick:v},h?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u5E03"))))}function _e({api:a,slug:e,me:t,onBack:u,onOpenPost:s,onAuth:i,onDm:r,notify:o}){let[p,h]=E.default.useState(null),[l,n]=E.default.useState(""),[d,v]=E.default.useState(!1),y=E.default.useCallback(()=>{a.space(e).then(f=>{h(f),n("")}).catch(f=>n(f.message))},[a,e]);if(E.default.useEffect(()=>{y()},[y]),l)return E.default.createElement("div",{style:{paddingTop:22}},E.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875"),E.default.createElement("div",{className:"acv-loading"},l));if(!p)return E.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u677F\u5757\u2026");let{space:S,posts:$}=p,P=!!t?.emailVerified;return E.default.createElement("div",{style:{paddingTop:20,display:"flex",flexDirection:"column",gap:16}},E.default.createElement("div",null,E.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),E.default.createElement("div",{className:"acv-board-head",style:{"--accent":S.accent,"--accent-to":S.accentTo}},E.default.createElement("h2",{className:"acv-board-title"},S.title),E.default.createElement("p",{className:"acv-board-sub"},S.description||S.subtitle),E.default.createElement("div",{className:"acv-board-actions"},E.default.createElement("button",{type:"button",className:"acv-btn",style:{background:"#fff",color:"#16161d"},onClick:()=>{if(!t)return i();if(!P)return o("\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16");v(!0)}},"\u53D1\u5E16"),E.default.createElement("span",{className:"acv-chip",style:{background:"rgba(255,255,255,.22)",color:"#fff"}},S.postCount," \u4E2A\u5E16\u5B50"))),!t&&E.default.createElement("div",{className:"acv-notice"},"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u9700\u8981\u3002",E.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),t&&!t.emailVerified&&E.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002\u9A8C\u8BC1\u90AE\u4EF6\u5728\u6536\u4EF6\u7BB1\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u5934\u50CF\u83DC\u5355\u91CC\u91CD\u53D1\u3002"),E.default.createElement("div",{className:"acv-board-grid"},E.default.createElement("div",{className:"acv-col"},E.default.createElement("div",{className:"acv-panel",style:{padding:"8px 18px"}},$.length===0&&E.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5E16\u5B50\uFF0C\u6765\u53D1\u7B2C\u4E00\u6761\u3002"),$.map(f=>E.default.createElement("button",{key:f.id,type:"button",className:"acv-post-row",onClick:()=>s(f.id)},E.default.createElement("span",{className:"acv-post-title"},f.title),E.default.createElement("span",{className:"acv-post-excerpt"},f.excerpt),E.default.createElement("span",{className:"acv-post-meta"},E.default.createElement(F,{api:a,me:t,handle:f.author.handle,onDm:r},E.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},Z(f.author.displayName)),f.author.displayName),E.default.createElement("span",{className:"acv-dot"}),X(f.lastActivityAt),E.default.createElement("span",{className:"acv-dot"}),f.commentCount," \u6761\u8BC4\u8BBA"))))),E.default.createElement("aside",{className:"acv-col"},E.default.createElement("div",{className:"acv-panel"},E.default.createElement("div",{className:"acv-section-head"},E.default.createElement("h2",{className:"acv-section-title"},"\u677F\u5757\u8BF4\u660E")),E.default.createElement("p",{className:"acv-space-sub"},S.description||S.subtitle||"\u8FD8\u6CA1\u6709\u5199\u4ECB\u7ECD\u3002"),E.default.createElement("div",{className:"acv-stats",style:{marginTop:14}},E.default.createElement("div",{className:"acv-stat"},E.default.createElement("div",{className:"acv-stat-value"},S.postCount),E.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),E.default.createElement("div",{className:"acv-stat"},E.default.createElement("div",{className:"acv-stat-value"},$.length),E.default.createElement("div",{className:"acv-stat-label"},"\u6761\u5728\u672C\u9875"))),E.default.createElement("p",{className:"acv-space-sub",style:{marginTop:14}},t?.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u4E0A\u9762\u7684\u300C\u53D1\u5E16\u300D\u3002":t?"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u3001\u8BC4\u8BBA\u624D\u9700\u8981\u3002")))),d&&E.default.createElement(De,{api:a,space:S,notify:o,onClose:()=>v(!1),onCreated:f=>{v(!1),y(),s(f.id)}}))}var w=Y(require("react"),1);var U=Y(require("react"),1),Le=/(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(~~[^~\n]+~~)|(\[[^\]\n]+\]\([^)\s]+\))/g,ie=/^\s*([-*+]|\d+[.)])\s+/,$e=/^(#{1,6})\s+(.*)$/,pa=/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/;function oe(a,e){let t=[],u=0,s;for(Le.lastIndex=0;(s=Le.exec(a))!==null;){s.index>u&&t.push(a.slice(u,s.index));let i=s[0],r=`${e}-${s.index}`;if(i.startsWith("`"))t.push(U.default.createElement("code",{key:r,className:"acv-md-code"},i.slice(1,-1)));else if(i.startsWith("**"))t.push(U.default.createElement("strong",{key:r},i.slice(2,-2)));else if(i.startsWith("~~"))t.push(U.default.createElement("del",{key:r},i.slice(2,-2)));else if(i.startsWith("[")){let o=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(i),p=o?.[2]||"#",h=/^(https?:\/\/|mailto:|\/)/i.test(p);t.push(h?U.default.createElement("a",{key:r,href:p,target:"_blank",rel:"noreferrer noopener"},o[1]):U.default.createElement("span",{key:r},o?.[1]||i))}else t.push(U.default.createElement("em",{key:r},i.slice(1,-1)));u=s.index+i.length}return u<a.length&&t.push(a.slice(u)),t}function Me(a){return a.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function re({text:a}){let t=String(a||"").replace(/\r\n?/g,`
`).split(`
`),u=[],s=0,i=0;for(;s<t.length;){let r=t[s];if(/^\s*```/.test(r)){let l=r.trim().slice(3).trim(),n=[];for(s+=1;s<t.length&&!/^\s*```/.test(t[s]);)n.push(t[s]),s+=1;s+=1,u.push(U.default.createElement("pre",{key:`b${i++}`,className:"acv-md-pre"},U.default.createElement("code",null,n.join(`
`)),l&&U.default.createElement("span",{className:"acv-md-lang"},l)));continue}if(!r.trim()){s+=1;continue}let o=$e.exec(r);if(o){let l=Math.min(o[1].length,4),n=`h${l}`;u.push(U.default.createElement(n,{key:`b${i++}`,className:`acv-md-h${l}`},oe(o[2],`h${i}`))),s+=1;continue}if(/^\s*(-{3,}|\*{3,})\s*$/.test(r)){u.push(U.default.createElement("hr",{key:`b${i++}`,className:"acv-md-hr"})),s+=1;continue}if(r.includes("|")&&pa.test(t[s+1]||"")){let l=Me(r);s+=2;let n=[];for(;s<t.length&&t[s].includes("|")&&t[s].trim();)n.push(Me(t[s])),s+=1;u.push(U.default.createElement("div",{key:`b${i++}`,className:"acv-md-table-wrap"},U.default.createElement("table",{className:"acv-md-table"},U.default.createElement("thead",null,U.default.createElement("tr",null,l.map((d,v)=>U.default.createElement("th",{key:v},oe(d,`th${v}`))))),U.default.createElement("tbody",null,n.map((d,v)=>U.default.createElement("tr",{key:v},l.map((y,S)=>U.default.createElement("td",{key:S},oe(d[S]||"",`td${v}-${S}`)))))))));continue}if(/^\s*>\s?/.test(r)){let l=[];for(;s<t.length&&/^\s*>\s?/.test(t[s]);)l.push(t[s].replace(/^\s*>\s?/,"")),s+=1;u.push(U.default.createElement("blockquote",{key:`b${i++}`,className:"acv-md-quote"},U.default.createElement(re,{text:l.join(`
`)})));continue}if(ie.test(r)){let l=/^\s*\d+[.)]\s+/.test(r),n=[];for(;s<t.length&&ie.test(t[s]);)for(n.push(t[s].replace(ie,"")),s+=1;s<t.length&&t[s].trim()&&/^\s{2,}/.test(t[s])&&!ie.test(t[s]);)n[n.length-1]+=` ${t[s].trim()}`,s+=1;let d=l?"ol":"ul";u.push(U.default.createElement(d,{key:`b${i++}`,className:"acv-md-list"},n.map((v,y)=>U.default.createElement("li",{key:y},oe(v,`li${y}`)))));continue}let p=[];for(;s<t.length&&t[s].trim()&&!$e.test(t[s])&&!ie.test(t[s])&&!/^\s*>/.test(t[s])&&!/^\s*```/.test(t[s])&&!/^\s*(-{3,}|\*{3,})\s*$/.test(t[s]);)p.push(t[s]),s+=1;let h=[];p.forEach((l,n)=>{n>0&&h.push(U.default.createElement("br",{key:`br${n}`})),h.push(...oe(l,`p${n}`))}),u.push(U.default.createElement("p",{key:`b${i++}`,className:"acv-md-p"},h))}return U.default.createElement("div",{className:"acv-md"},u)}function Ie({api:a,id:e,me:t,onBack:u,backTo:s="home",onAuth:i,onDm:r,notify:o}){let[p,h]=w.default.useState(null),[l,n]=w.default.useState(""),[d,v]=w.default.useState(""),[y,S]=w.default.useState(!1),[$,P]=w.default.useState(""),[f,T]=w.default.useState(!1),C=w.default.useCallback(()=>{a.post(e).then(m=>{h(m),n("")}).catch(m=>n(m.message))},[a,e]);w.default.useEffect(()=>{C()},[C]);async function A(){S(!0),P("");try{await a.createComment(e,{body:d}),v(""),C(),o("\u8BC4\u8BBA\u5DF2\u53D1\u5E03")}catch(m){P(m.message)}finally{S(!1)}}async function I(m){T(!0);try{await a.setPostStatus(e,m),o(m==="hidden"?"\u5E16\u5B50\u5DF2\u9690\u85CF":m==="deleted"?"\u5E16\u5B50\u5DF2\u5220\u9664":"\u5E16\u5B50\u5DF2\u6062\u590D"),m==="deleted"?u():C()}catch(B){o(B.message,{error:!0})}finally{T(!1)}}let L=s==="space"?"\u2190 \u8FD4\u56DE\u677F\u5757":"\u2190 \u8FD4\u56DE\u9996\u9875";if(l)return w.default.createElement("div",{style:{paddingTop:22}},w.default.createElement("button",{type:"button",className:"acv-back",onClick:u},L),w.default.createElement("div",{className:"acv-loading"},l));if(!p)return w.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u5E16\u5B50\u2026");let{post:z,comments:W}=p;return w.default.createElement("div",{className:"acv-post-wrap"},w.default.createElement("div",null,w.default.createElement("button",{type:"button",className:"acv-back",onClick:u},L)),w.default.createElement("div",{className:"acv-panel",style:{padding:"22px 24px"}},w.default.createElement("div",{className:"acv-post-meta"},w.default.createElement("span",{className:"acv-chip"},z.spaceTitle),w.default.createElement("span",{className:"acv-dot"}),X(z.createdAt),w.default.createElement("span",{className:"acv-dot"}),z.viewCount," \u6B21\u6D4F\u89C8"),w.default.createElement("h1",{className:"acv-article-title"},z.title),w.default.createElement("div",{className:"acv-article-meta"},w.default.createElement(F,{api:a,me:t,handle:z.author.handle,onDm:r},w.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},Z(z.author.displayName)),w.default.createElement("span",null,z.author.displayName)),w.default.createElement("span",{className:"acv-dot"}),w.default.createElement(F,{api:a,me:t,handle:z.author.handle,onDm:r},w.default.createElement("span",null,"@",z.author.handle)),t?.role==="admin"&&w.default.createElement("span",{className:"acv-mod-actions"},w.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:f,onClick:()=>I("hidden")},"\u9690\u85CF"),w.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:f,onClick:()=>I("deleted")},"\u5220\u9664"))),w.default.createElement("div",{className:"acv-prose acv-prose--md"},w.default.createElement(re,{text:z.body}))),w.default.createElement("div",{className:"acv-panel",style:{padding:"18px 24px"}},w.default.createElement("div",{className:"acv-section-head"},w.default.createElement("h2",{className:"acv-section-title"},"\u8BC4\u8BBA"),w.default.createElement("span",{className:"acv-section-note"},W.length," \u6761")),W.length===0&&w.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u8BF4\u70B9\u4EC0\u4E48\u3002"),W.map(m=>w.default.createElement("div",{key:m.id,className:"acv-comment"},w.default.createElement(F,{api:a,me:t,handle:m.author.handle,onDm:r},w.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},Z(m.author.displayName))),w.default.createElement("div",{className:"acv-comment-main"},w.default.createElement("div",{className:"acv-comment-head"},w.default.createElement(F,{api:a,me:t,handle:m.author.handle,onDm:r},w.default.createElement("span",{className:"acv-comment-author"},m.author.displayName)),w.default.createElement("span",{className:"acv-comment-time"},X(m.createdAt))),w.default.createElement("p",{className:"acv-comment-body"},m.body)))),w.default.createElement("div",{style:{marginTop:14}},!t&&w.default.createElement("div",{className:"acv-notice"},"\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\u3002",w.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),t&&!t.emailVerified&&w.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u8BC4\u8BBA\u3002"),t?.emailVerified&&w.default.createElement(w.default.Fragment,null,$&&w.default.createElement("div",{className:"acv-error"},$),w.default.createElement("textarea",{className:"acv-textarea",value:d,placeholder:"\u5199\u4E00\u6761\u8BC4\u8BBA\u2026",onChange:m=>v(m.target.value)}),w.default.createElement("div",{className:"acv-row"},w.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:y||!d.trim(),onClick:A},y?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u8868\u8BC4\u8BBA"))))))}var N=Y(require("react"),1),va=["login","register","forgot"];function Ue({api:a,initialMode:e="login",onClose:t,onDone:u,notify:s}){let[i,r]=N.default.useState(va.includes(e)?e:"login"),[o,p]=N.default.useState(""),[h,l]=N.default.useState(""),[n,d]=N.default.useState(""),[v,y]=N.default.useState(""),[S,$]=N.default.useState(null),[P,f]=N.default.useState(!1),[T,C]=N.default.useState(""),[A,I]=N.default.useState(""),L=N.default.useCallback(()=>{a.captcha().then($).catch(()=>$(null))},[a]);N.default.useEffect(()=>{i==="register"&&L()},[i,L]);function z(_){r(_),C(""),I(""),y("")}async function W(_){_.preventDefault(),f(!0),C("");try{let q=await a.login({handle:o,password:n});a.setToken(q.token),u(q.account)}catch(q){C(q.message)}finally{f(!1)}}async function m(_){_.preventDefault(),f(!0),C("");try{let q=await a.register({handle:o,email:h,password:n,captchaId:S?.id,captchaAnswer:v}),se=await a.login({handle:o,password:n});a.setToken(se.token),I(q.mail?.delivered?"\u6CE8\u518C\u6210\u529F\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\u3002\u70B9\u90AE\u4EF6\u91CC\u7684\u94FE\u63A5\u5C31\u80FD\u53D1\u5E16\u3002":"\u6CE8\u518C\u6210\u529F\u3002\u672C\u5730\u6CA1\u914D SMTP\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u7ECF\u6253\u5230\u670D\u52A1\u7AEF\u65E5\u5FD7\u91CC\u4E86\u3002"),u(se.account)}catch(q){C(q.message),L(),y("")}finally{f(!1)}}async function B(_){_.preventDefault(),f(!0),C("");try{let q=await a.forgotPassword(h.trim());I(q?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u670D\u52A1\u5668\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${q.verifyLink}`:"\u5982\u679C\u8FD9\u4E2A\u90AE\u7BB1\u6CE8\u518C\u8FC7\uFF0C\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u5C31\u80FD\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(q){C(q.message)}finally{f(!1)}}return N.default.createElement("div",{className:"acv-overlay",onClick:t},N.default.createElement("div",{className:"acv-modal",onClick:_=>_.stopPropagation()},N.default.createElement("h3",{className:"acv-modal-title"},i==="login"?"\u767B\u5F55 Achoverse":i==="register"?"\u6CE8\u518C Achoverse":"\u5FD8\u8BB0\u5BC6\u7801"),N.default.createElement("p",{className:"acv-modal-sub"},i==="login"?"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002":i==="register"?"\u6CE8\u518C\u540E\u8981\u9A8C\u8BC1\u90AE\u7BB1\u624D\u80FD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002":"\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1\uFF0C\u6211\u4EEC\u53D1\u4E00\u5C01\u5E26\u91CD\u7F6E\u94FE\u63A5\u7684\u90AE\u4EF6\u3002"),i!=="forgot"&&N.default.createElement("div",{className:"acv-switch"},N.default.createElement("button",{type:"button",className:i==="login"?"is-active":"",onClick:()=>z("login")},"\u767B\u5F55"),N.default.createElement("button",{type:"button",className:i==="register"?"is-active":"",onClick:()=>z("register")},"\u6CE8\u518C")),T&&N.default.createElement("div",{className:"acv-error"},T),A&&N.default.createElement("div",{className:"acv-notice"},A),i==="forgot"&&N.default.createElement("form",{onSubmit:B},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u90AE\u7BB1"),N.default.createElement("input",{className:"acv-input",type:"email",value:h,onChange:_=>l(_.target.value),placeholder:"\u6CE8\u518C\u65F6\u7528\u7684\u90AE\u7BB1"})),N.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},N.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>z("login")},"\u8FD4\u56DE\u767B\u5F55"),N.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!h.trim()},P?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u91CD\u7F6E\u90AE\u4EF6"))),i==="login"&&N.default.createElement("form",{onSubmit:W},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u7528\u6237\u540D"),N.default.createElement("input",{className:"acv-input",value:o,autoComplete:"username",placeholder:"\u4F60\u7684\u7528\u6237\u540D",onChange:_=>p(_.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u5BC6\u7801"),N.default.createElement("input",{className:"acv-input",type:"password",value:n,autoComplete:"current-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:_=>d(_.target.value)})),N.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},N.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>z("forgot")},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),N.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!o||!n},P?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))),i==="register"&&N.default.createElement("form",{onSubmit:m},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u7528\u6237\u540D"),N.default.createElement("input",{className:"acv-input",value:o,autoComplete:"username",placeholder:"3-24 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF",onChange:_=>p(_.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u90AE\u7BB1"),N.default.createElement("input",{className:"acv-input",type:"email",value:h,autoComplete:"email",placeholder:"\u7528\u6765\u6536\u9A8C\u8BC1\u94FE\u63A5",onChange:_=>l(_.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u5BC6\u7801"),N.default.createElement("input",{className:"acv-input",type:"password",value:n,autoComplete:"new-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:_=>d(_.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u9A8C\u8BC1\u7801"),N.default.createElement("div",{className:"acv-captcha-row"},N.default.createElement("input",{className:"acv-input",value:v,maxLength:8,placeholder:"\u770B\u53F3\u8FB9",onChange:_=>y(_.target.value)}),N.default.createElement("button",{type:"button",className:"acv-captcha-img",onClick:L,title:"\u6362\u4E00\u5F20"},S?N.default.createElement("span",{dangerouslySetInnerHTML:{__html:S.svg}}):N.default.createElement("span",{className:"acv-chip"},"\u52A0\u8F7D\u4E2D")))),N.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},N.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),N.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!o||!n||!h},P?"\u6CE8\u518C\u4E2D\u2026":"\u6CE8\u518C")))))}var c=Y(require("react"),1);var ma={title:"",slug:"",subtitle:"",description:"",accent:"#F53FA6",accentTo:"#FF7A45",zones:["home"],motif:"diffusion"},ua=[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR \u4E13\u533A"}];function fa({api:a,me:e,onDm:t,notify:u}){let[s,i]=c.default.useState(null),[r,o]=c.default.useState(""),[p,h]=c.default.useState(""),l=c.default.useCallback(()=>{a.pendingAccounts().then(d=>{i(d.accounts),o("")}).catch(d=>o(d.message))},[a]);c.default.useEffect(()=>{l()},[l]);async function n(d){h(d.id);try{await a.verifyAccount(d.id),u(`\u5DF2\u653E\u884C @${d.handle}`),l()}catch(v){u(v.message,{error:!0})}finally{h("")}}return r?c.default.createElement("div",{className:"acv-error"},r):s?s.length===0?c.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5F85\u9A8C\u8BC1\u7684\u8D26\u53F7"):s.map(d=>c.default.createElement("div",{key:d.id,className:"acv-member",style:{padding:"12px 2px"}},c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},c.default.createElement(F,{api:a,me:e,handle:d.handle,onDm:t},c.default.createElement("span",null,d.displayName)," ",c.default.createElement("span",{className:"acv-member-meta"},"@",d.handle))),c.default.createElement("span",{className:"acv-member-meta"},d.email," \xB7 \u6CE8\u518C\u4E8E ",X(d.createdAt))),c.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"6px 14px",fontSize:13},disabled:p===d.id,onClick:()=>n(d)},p===d.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C"))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function ha({api:a,space:e,onDone:t,onCancel:u,notify:s}){let[i,r]=c.default.useState(e?{title:e.title,slug:e.slug,subtitle:e.subtitle,description:e.description,accent:e.accent,accentTo:e.accentTo,zones:e.zones?.length?e.zones:["home"],motif:e.motif||"diffusion"}:ma),[o,p]=c.default.useState(!1),[h,l]=c.default.useState(""),n=(v,y)=>r(S=>({...S,[v]:y}));async function d(){p(!0),l("");try{e?await a.updateSpace(e.id,i):await a.createSpace(i),s(e?"\u677F\u5757\u5DF2\u66F4\u65B0":`\u677F\u5757\u300C${i.title}\u300D\u5DF2\u521B\u5EFA`),t()}catch(v){l(v.message)}finally{p(!1)}}return c.default.createElement("div",{className:"acv-editor"},h&&c.default.createElement("div",{className:"acv-error"},h),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u540D\u79F0"),c.default.createElement("input",{className:"acv-input",value:i.title,maxLength:24,onChange:v=>n("title",v.target.value),placeholder:"\u6BD4\u5982\uFF1A\u4F5C\u54C1\u5C55\u793A"})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u6807\u8BC6\uFF08\u7528\u4E8E\u94FE\u63A5\uFF0C\u7559\u7A7A\u81EA\u52A8\u751F\u6210\uFF09"),c.default.createElement("input",{className:"acv-input",value:i.slug,maxLength:32,disabled:!!e,onChange:v=>n("slug",v.target.value.toLowerCase()),placeholder:"works"})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u4E00\u53E5\u8BDD\u4ECB\u7ECD"),c.default.createElement("input",{className:"acv-input",value:i.subtitle,maxLength:60,onChange:v=>n("subtitle",v.target.value)})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u8BF4\u660E"),c.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:i.description,maxLength:300,onChange:v=>n("description",v.target.value)})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u663E\u793A\u5728"),c.default.createElement("div",{className:"acv-zone-picker"},ua.map(v=>{let y=i.zones.includes(v.key);return c.default.createElement("button",{key:v.key,type:"button",className:y?"acv-zone-option is-active":"acv-zone-option",onClick:()=>r(S=>{let $=y?S.zones.filter(P=>P!==v.key):[...S.zones,v.key];return{...S,zones:$.length?$:["home"]}})},c.default.createElement("span",{className:"acv-zone-tick"},y?"\u2713":""),v.label)})),c.default.createElement("span",{className:"acv-field-hint"},"\u53EF\u4EE5\u591A\u9009\uFF1A\u540C\u65F6\u52FE\u9009\u5C31\u4E24\u4E2A\u5730\u65B9\u90FD\u663E\u793A")),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u5C01\u9762\u6784\u56FE"),c.default.createElement("div",{className:"acv-zone-picker"},Ne.map(v=>c.default.createElement("button",{key:v.key,type:"button",className:i.motif===v.key?"acv-zone-option is-active":"acv-zone-option",onClick:()=>n("motif",v.key)},v.label))),c.default.createElement("span",{className:"acv-field-hint"},"\u534A\u900F\u660E\u51E0\u4F55\u56FE\u5F62\uFF0C\u753B\u5728\u6E10\u53D8\u4E0A\u9762")),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u5361\u7247\u6E10\u53D8"),c.default.createElement("div",{className:"acv-color-row"},c.default.createElement("input",{type:"color",className:"acv-color",value:i.accent,onChange:v=>n("accent",v.target.value)}),c.default.createElement("input",{type:"color",className:"acv-color",value:i.accentTo,onChange:v=>n("accentTo",v.target.value)}),c.default.createElement("span",{className:"acv-space-cover acv-color-preview",style:{background:`linear-gradient(120deg, ${i.accent}, ${i.accentTo})`}}))),c.default.createElement("div",{className:"acv-row"},c.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:u},"\u53D6\u6D88"),c.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:o||!i.title.trim(),onClick:d},o?"\u4FDD\u5B58\u4E2D\u2026":e?"\u4FDD\u5B58":"\u521B\u5EFA\u677F\u5757")))}function ga({api:a,me:e,onDm:t,notify:u}){let[s,i]=c.default.useState(null),[r,o]=c.default.useState(""),[p,h]=c.default.useState(""),l=c.default.useCallback(()=>{a.adminUsers(r.trim()).then(d=>i(d.users)).catch(d=>u(d.message,{error:!0}))},[a,r,u]);c.default.useEffect(()=>{l()},[l]);async function n(d){h(d.id);try{await a.verifyAccount(d.id),u(`\u5DF2\u653E\u884C @${d.handle}`),l()}catch(v){u(v.message,{error:!0})}finally{h("")}}return s?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"acv-inline",style:{marginBottom:12}},c.default.createElement("input",{className:"acv-input",placeholder:"\u641C\u7D22\u7528\u6237\u540D\u6216\u6635\u79F0",value:r,onChange:d=>o(d.target.value)}),c.default.createElement("button",{type:"button",className:"acv-btn",onClick:l},"\u641C\u7D22")),s.length===0&&c.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5339\u914D\u7684\u7528\u6237"),s.map(d=>c.default.createElement("div",{key:d.id,className:"acv-admin-row"},c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},c.default.createElement(F,{api:a,me:e,handle:d.handle,onDm:t},c.default.createElement("span",null,d.displayName),c.default.createElement("span",{className:"acv-member-meta"}," @",d.handle)),d.role==="admin"&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u7BA1\u7406\u5458"),!d.emailVerified&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u672A\u9A8C\u8BC1"),!d.allowDm&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u5173\u79C1\u4FE1")),c.default.createElement("span",{className:"acv-member-meta"},d.email||"\uFF08\u65E0\u90AE\u7BB1\uFF09"," \xB7 ",d.postCount," \u4E2A\u5E16\u5B50 \xB7 \u6CE8\u518C\u4E8E ",X(d.createdAt))),!d.emailVerified&&c.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},disabled:p===d.id,onClick:()=>n(d)},p===d.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C")))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function ba({api:a,notify:e}){let[t,u]=c.default.useState(null),[s,i]=c.default.useState(null),[r,o]=c.default.useState(""),p=c.default.useCallback(()=>{a.adminSpaces().then(l=>u(l.spaces)).catch(l=>e(l.message,{error:!0}))},[a,e]);c.default.useEffect(()=>{p()},[p]);async function h(l){let n=!l.archivedAt;if(!(n&&!window.confirm(`\u5220\u9664\u677F\u5757\u300C${l.title}\u300D\uFF1F\u677F\u5757\u4F1A\u4ECE\u9996\u9875\u6D88\u5931\uFF0C\u5E16\u5B50\u4ECD\u4FDD\u7559\u5728\u5E93\u91CC\u3002`))){o(l.id);try{await a.archiveSpace(l.id,n),e(n?"\u677F\u5757\u5DF2\u5220\u9664":"\u677F\u5757\u5DF2\u6062\u590D"),p()}catch(d){e(d.message,{error:!0})}finally{o("")}}}return t?c.default.createElement(c.default.Fragment,null,s?c.default.createElement(ha,{api:a,space:s==="new"?null:s,notify:e,onCancel:()=>i(null),onDone:()=>{i(null),p()}}):c.default.createElement("div",{className:"acv-row",style:{justifyContent:"flex-start",marginBottom:6}},c.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("new")},"\u65B0\u5EFA\u677F\u5757")),t.map(l=>c.default.createElement("div",{key:l.id,className:l.archivedAt?"acv-admin-row is-archived":"acv-admin-row"},c.default.createElement(de,{space:l,showBadge:!1,showEdition:!1,className:"acv-admin-swatch"}),c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},l.title,c.default.createElement("span",{className:"acv-member-meta"}," /",l.slug),l.archivedAt&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:8}},"\u5DF2\u5220\u9664")),c.default.createElement("span",{className:"acv-member-meta"},l.postCount," \u4E2A\u5E16\u5B50 \xB7 ",l.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${X(l.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u5E16\u5B50",l.zones?.map(n=>c.default.createElement("span",{key:n,className:"acv-chip",style:{marginLeft:6}},n==="arvr"?"AR/VR":"\u9996\u9875")))),c.default.createElement("span",{style:{display:"flex",gap:6}},c.default.createElement("button",{type:"button",className:"acv-btn",style:{padding:"5px 12px",fontSize:12},onClick:()=>i(l)},"\u7F16\u8F91"),c.default.createElement("button",{type:"button",className:"acv-btn ghost",style:{padding:"5px 12px",fontSize:12},disabled:r===l.id,onClick:()=>h(l)},l.archivedAt?"\u6062\u590D":"\u5220\u9664"))))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Be({api:a,me:e,onDm:t,onBack:u,notify:s}){let[i,r]=c.default.useState("spaces"),[o,p]=c.default.useState(null);return c.default.useEffect(()=>{a.pendingAccounts().then(h=>p(h.accounts.length)).catch(()=>p(null))},[a,i]),c.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},c.default.createElement("div",null,c.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),c.default.createElement("div",{className:"acv-admin-layout"},c.default.createElement("nav",{className:"acv-admin-nav","aria-label":"\u7BA1\u7406"},c.default.createElement("button",{type:"button",className:i==="spaces"?"is-active":"",onClick:()=>r("spaces")},"\u677F\u5757"),c.default.createElement("button",{type:"button",className:i==="users"?"is-active":"",onClick:()=>r("users")},"\u7528\u6237"),c.default.createElement("button",{type:"button",className:i==="accounts"?"is-active":"",onClick:()=>r("accounts")},c.default.createElement("span",null,"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),o>0&&c.default.createElement("span",{className:"acv-badge"},o))),c.default.createElement("section",{className:"acv-panel acv-admin-content",style:{padding:"20px 22px"}},c.default.createElement("div",{className:"acv-section-head"},c.default.createElement("h2",{className:"acv-section-title"},i==="spaces"?"\u677F\u5757":i==="users"?"\u7528\u6237":"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),c.default.createElement("span",{className:"acv-section-note"},i==="spaces"?"\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u677F\u5757\uFF1B\u5220\u9664\u540E\u53EF\u4ECE\u7BA1\u7406\u91CC\u6062\u590D":i==="users"?"\u5168\u90E8\u8D26\u53F7\uFF1B\u672A\u9A8C\u8BC1\u7684\u53EF\u4EE5\u76F4\u63A5\u653E\u884C":"\u6CA1\u914D SMTP \u65F6\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u4E0D\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u4EBA\u5DE5\u653E\u884C")),i==="spaces"&&c.default.createElement(ba,{api:a,notify:s}),i==="users"&&c.default.createElement(ga,{api:a,me:e,onDm:t,notify:s}),i==="accounts"&&c.default.createElement(fa,{api:a,me:e,onDm:t,notify:s}))))}var ee=Y(require("react"),1);function Fe({api:a,zone:e,title:t,note:u,onOpenSpace:s}){let[i,r]=ee.default.useState(null),[o,p]=ee.default.useState("");return ee.default.useEffect(()=>{let h=!1;return a.zoneSpaces(e).then(l=>{h||(r(l.spaces),p(""))}).catch(l=>{h||p(l.message)}),()=>{h=!0}},[a,e]),ee.default.createElement("div",{className:"acv-zone"},ee.default.createElement("div",{className:"acv-section-head"},ee.default.createElement("h2",{className:"acv-section-title"},t),ee.default.createElement("span",{className:"acv-section-note"},u)),o&&ee.default.createElement("div",{className:"acv-empty"},o),!i&&!o&&ee.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),i&&i.length===0&&ee.default.createElement("div",{className:"acv-panel"},ee.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u4E13\u533A\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u300C\u7BA1\u7406 \u2192 \u677F\u5757\u300D\u91CC\u628A\u677F\u5757\u653E\u8FDB\u300C",t,"\u300D\u3002")),ee.default.createElement("div",{className:"acv-zone-grid"},i?.map(h=>ee.default.createElement(fe,{key:h.id,space:h,onOpen:s}))))}var V=Y(require("react"),1);function Ve({api:a,me:e,onDm:t,onOpenPost:u}){let[s,i]=V.default.useState(""),[r,o]=V.default.useState(null),[p,h]=V.default.useState(!1),[l,n]=V.default.useState(!1),d=V.default.useRef(null);return V.default.useEffect(()=>{if(!p)return;let v=y=>{d.current&&!d.current.contains(y.target)&&h(!1)};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[p]),V.default.useEffect(()=>{let v=s.trim();if(v.length===0){o(null);return}let y=setTimeout(async()=>{n(!0);try{let S=await a.search(v);o(S.posts||[]),h(!0)}catch{o([])}finally{n(!1)}},280);return()=>clearTimeout(y)},[a,s]),V.default.createElement("div",{className:"acv-search",ref:d},V.default.createElement("span",{className:"acv-search-icon","aria-hidden":"true"},V.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",focusable:"false"},V.default.createElement("circle",{cx:"7",cy:"7",r:"4.6",stroke:"currentColor",strokeWidth:"1.6"}),V.default.createElement("path",{d:"M10.5 10.5 14 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))),V.default.createElement("input",{className:"acv-search-input",type:"text",value:s,placeholder:"\u641C\u7D22\u5E16\u5B50","aria-label":"\u641C\u7D22\u5E16\u5B50",autoComplete:"off",spellCheck:!1,onChange:v=>i(v.target.value),onFocus:()=>s.trim()&&h(!0)}),p&&V.default.createElement("div",{className:"acv-search-panel"},l&&V.default.createElement("div",{className:"acv-search-empty"},"\u641C\u7D22\u4E2D\u2026"),!l&&r?.length===0&&V.default.createElement("div",{className:"acv-search-empty"},"\u6CA1\u6709\u627E\u5230\u300C",s.trim(),"\u300D"),r?.map(v=>V.default.createElement("button",{key:v.id,type:"button",className:"acv-search-item",onClick:()=>{h(!1),i(""),u(v.id)}},V.default.createElement("span",{className:"acv-search-title"},v.title),V.default.createElement("span",{className:"acv-search-meta"},v.spaceSlug," \xB7"," ",V.default.createElement(F,{api:a,me:e,handle:v.author?.handle,onDm:t},V.default.createElement("span",null,v.author?.displayName||v.author?.handle))," ","\xB7 ",X(v.createdAt))))))}var x=Y(require("react"),1);function he({title:a,note:e,children:t}){return x.default.createElement("div",{className:"acv-settings-section"},x.default.createElement("div",{className:"acv-section-head"},x.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},a),e&&x.default.createElement("span",{className:"acv-section-note"},e)),t)}function He({api:a,me:e,onBack:t,onRefreshMe:u,notify:s}){let[i,r]=x.default.useState(e?.displayName||""),[o,p]=x.default.useState(e?.bio||""),[h,l]=x.default.useState(e?.allowDm!==!1),[n,d]=x.default.useState(""),[v,y]=x.default.useState(""),[S,$]=x.default.useState(""),[P,f]=x.default.useState(""),[T,C]=x.default.useState(""),[A,I]=x.default.useState("");if(x.default.useEffect(()=>{r(e?.displayName||""),p(e?.bio||""),l(e?.allowDm!==!1)},[e]),!e)return x.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");async function L(z,W,m){f(z),C("");try{await W(),s(m),await u?.()}catch(B){C(B.message)}finally{f("")}}return x.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:820}},x.default.createElement("div",null,x.default.createElement("button",{type:"button",className:"acv-back",onClick:t},"\u2190 \u8FD4\u56DE\u9996\u9875")),T&&x.default.createElement("div",{className:"acv-error"},T),x.default.createElement("div",{className:"acv-panel",style:{padding:"20px 22px"}},x.default.createElement("div",{className:"acv-section-head"},x.default.createElement("h2",{className:"acv-section-title"},"\u8D26\u53F7\u8BBE\u7F6E"),x.default.createElement("span",{className:"acv-section-note"},"@",e.handle)),x.default.createElement(he,{title:"\u8D44\u6599",note:"\u6635\u79F0\u548C\u7B80\u4ECB\u4F1A\u663E\u793A\u5728\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u4E0A"},x.default.createElement("div",{className:"acv-field"},x.default.createElement("label",null,"\u6635\u79F0"),x.default.createElement("input",{className:"acv-input",value:i,maxLength:24,onChange:z=>r(z.target.value)})),x.default.createElement("div",{className:"acv-field"},x.default.createElement("label",null,"\u7B80\u4ECB"),x.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:o,maxLength:200,onChange:z=>p(z.target.value)})),x.default.createElement("div",{className:"acv-field"},x.default.createElement("label",null,"\u63A5\u6536\u79C1\u4FE1"),x.default.createElement("div",{className:"acv-zone-picker"},x.default.createElement("button",{type:"button",className:h?"acv-zone-option is-active":"acv-zone-option",onClick:()=>l(!0)},"\u5141\u8BB8\u522B\u4EBA\u7ED9\u6211\u53D1\u79C1\u4FE1"),x.default.createElement("button",{type:"button",className:h?"acv-zone-option":"acv-zone-option is-active",onClick:()=>l(!1)},"\u5173\u95ED\u79C1\u4FE1"))),x.default.createElement("div",{className:"acv-row"},x.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:P==="profile",onClick:()=>L("profile",()=>a.updateProfile({displayName:i,bio:o,allowDm:h}),"\u8D44\u6599\u5DF2\u4FDD\u5B58")},P==="profile"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8D44\u6599"))),x.default.createElement(he,{title:"\u90AE\u7BB1",note:e.emailVerified?"\u5DF2\u9A8C\u8BC1":"\u672A\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u540E\u624D\u80FD\u53D1\u5E16\u8BC4\u8BBA"},x.default.createElement("p",{className:"acv-space-sub",style:{marginBottom:10}},"\u5F53\u524D\u90AE\u7BB1\uFF1A",x.default.createElement("strong",null,e.email||"\uFF08\u6CA1\u6709\uFF09")),x.default.createElement("div",{className:"acv-field"},x.default.createElement("label",null,"\u6362\u6210\u65B0\u90AE\u7BB1"),x.default.createElement("div",{className:"acv-inline"},x.default.createElement("input",{className:"acv-input",type:"email",placeholder:"new@example.com",value:n,onChange:z=>d(z.target.value)}),x.default.createElement("button",{type:"button",className:"acv-btn",disabled:P==="email"||!n.trim(),onClick:()=>L("email",async()=>{(await a.requestEmailChange(n.trim()))?.verifyLink&&s("\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7"),d("")},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u5230\u65B0\u90AE\u7BB1\uFF0C\u70B9\u5F00\u94FE\u63A5\u624D\u751F\u6548")},"\u53D1\u9001\u9A8C\u8BC1"))),!e.emailVerified&&x.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:P==="resend",onClick:()=>L("resend",async()=>{let z=await a.resend();if(z?.verifyLink)throw new Error(`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\uFF1A${z.verifyLink}`)},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u91CD\u53D1")},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6")),x.default.createElement(he,{title:"\u5BC6\u7801",note:"\u81F3\u5C11 8 \u4F4D"},x.default.createElement("div",{className:"acv-field"},x.default.createElement("label",null,"\u5F53\u524D\u5BC6\u7801"),x.default.createElement("input",{className:"acv-input",type:"password",value:v,onChange:z=>y(z.target.value)})),x.default.createElement("div",{className:"acv-field"},x.default.createElement("label",null,"\u65B0\u5BC6\u7801"),x.default.createElement("input",{className:"acv-input",type:"password",value:S,onChange:z=>$(z.target.value)})),x.default.createElement("div",{className:"acv-row"},x.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:P==="password"||!v||!S,onClick:()=>L("password",async()=>{await a.changePassword({currentPassword:v,newPassword:S}),y(""),$("")},"\u5BC6\u7801\u5DF2\u66F4\u65B0")},P==="password"?"\u66F4\u65B0\u4E2D\u2026":"\u66F4\u65B0\u5BC6\u7801")),x.default.createElement("p",{className:"acv-field-hint"},"\u5FD8\u4E86\u5F53\u524D\u5BC6\u7801\uFF1F\u53EF\u4EE5\u7ED9 ",e.email||"\uFF08\u6CA1\u6709\u90AE\u7BB1\uFF09"," \u53D1\u4E00\u5C01\u91CD\u7F6E\u90AE\u4EF6\uFF0C\u70B9\u94FE\u63A5\u8BBE\u65B0\u5BC6\u7801\u3002"),A&&x.default.createElement("div",{className:"acv-notice"},A),x.default.createElement("div",{className:"acv-row"},x.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:P==="reset-mail"||!e.email,onClick:async()=>{f("reset-mail"),C(""),I("");try{let z=await a.forgotPassword(e.email);I(z?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${z.verifyLink}`:"\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(z){C(z.message)}finally{f("")}}},P==="reset-mail"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u90AE\u4EF6\u91CD\u7F6E\u5BC6\u7801")))))}var k=Y(require("react"),1);function xa(a,e){if(!a||a.thread?.id!==e.thread?.id)return e;let t=new Map(a.messages.map(s=>[s.id,s]));for(let s of e.messages)t.set(s.id,s);let u=[...t.values()].sort((s,i)=>s.createdAt-i.createdAt||(s.id<i.id?-1:1));return{...e,messages:u}}function je({api:a,me:e,initialThreadId:t,onBack:u,onDm:s,notify:i}){let[r,o]=k.default.useState(null),[p,h]=k.default.useState(t||null),[l,n]=k.default.useState(null),[d,v]=k.default.useState(""),[y,S]=k.default.useState(!1),[$,P]=k.default.useState(!1),[f,T]=k.default.useState(""),C=k.default.useRef(null),A=k.default.useCallback(()=>{e&&a.dmThreads().then(m=>{o(m.threads),!p&&m.threads.length&&h(m.threads[0].id)}).catch(m=>T(m.message))},[a,e,p]),I=k.default.useCallback(m=>{n(B=>xa(B,m))},[]);k.default.useEffect(()=>{A()},[A]),k.default.useEffect(()=>{p&&a.dmThread(p).then(m=>{I(m),T(""),A()}).catch(m=>T(m.message))},[a,p,I,A]),k.default.useEffect(()=>{if(!e||!p)return;let m=setInterval(()=>{document.hidden||a.dmThread(p).then(B=>{I(B),A()}).catch(()=>{})},8e3);return()=>clearInterval(m)},[a,e,p,I,A]),k.default.useEffect(()=>{let m=C.current;m&&(m.scrollTop=m.scrollHeight)},[l]);async function L(){let m=d.trim();if(!(!m||!p)){S(!0);try{await a.dmSend(p,m),v("");let B=await a.dmThread(p);I(B),A()}catch(B){i(B.message,{error:!0})}finally{S(!1)}}}async function z(){let m=l?.messages?.[0];if(!(!m||!p||$)){P(!0);try{let B=await a.dmThread(p,m.createdAt);n(_=>{if(!_)return B;let q=new Map(B.messages.map(ae=>[ae.id,ae]));for(let ae of _.messages)q.set(ae.id,ae);let se=[...q.values()].sort((ae,O)=>ae.createdAt-O.createdAt||(ae.id<O.id?-1:1));return{..._,messages:se,total:B.total}})}catch(B){i(B.message,{error:!0})}finally{P(!1)}}}if(!e)return k.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");let W=!!(l&&l.messages.length<l.total);return k.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},k.default.createElement("div",null,k.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),f&&k.default.createElement("div",{className:"acv-error"},f),k.default.createElement("div",{className:"acv-dm-layout"},k.default.createElement("aside",{className:"acv-panel acv-dm-list"},k.default.createElement("div",{className:"acv-section-head"},k.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},"\u79C1\u4FE1"),k.default.createElement("span",{className:"acv-section-note"},r?.length||0)),r?.length===0&&k.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u79C1\u4FE1"),r?.map(m=>k.default.createElement("button",{key:m.id,type:"button",className:m.id===p?"acv-dm-item is-active":"acv-dm-item",onClick:()=>h(m.id)},k.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},Z(m.other?.displayName||m.other?.handle)),k.default.createElement("span",{className:"acv-dm-main"},k.default.createElement("span",{className:"acv-dm-name"},k.default.createElement(F,{api:a,me:e,handle:m.other?.handle,onDm:s},k.default.createElement("span",null,m.other?.displayName||m.other?.handle)),m.unread>0&&k.default.createElement("span",{className:"acv-badge"},m.unread)),k.default.createElement("span",{className:"acv-dm-preview"},m.lastMessage?.body||"\u8FD8\u6CA1\u6709\u6D88\u606F"))))),k.default.createElement("section",{className:"acv-panel acv-dm-pane"},!l&&k.default.createElement("div",{className:"acv-empty"},"\u9009\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB"),l&&k.default.createElement(k.default.Fragment,null,k.default.createElement("div",{className:"acv-dm-head"},k.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},Z(l.thread.other?.displayName)),k.default.createElement(F,{api:a,me:e,handle:l.thread.other?.handle,onDm:s},k.default.createElement("span",{style:{fontWeight:600}},l.thread.other?.displayName),k.default.createElement("span",{className:"acv-member-meta"},"@",l.thread.other?.handle))),k.default.createElement("div",{className:"acv-dm-messages",ref:C},W&&k.default.createElement("button",{type:"button",className:"acv-dm-more",disabled:$,onClick:z},$?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u65E9\u7684\u6D88\u606F"),l.messages.length===0&&k.default.createElement("div",{className:"acv-empty"},"\u6253\u4E2A\u62DB\u547C\u5427"),l.messages.map(m=>k.default.createElement("div",{key:m.id,className:m.mine?"acv-dm-msg is-mine":"acv-dm-msg"},k.default.createElement("div",{className:"acv-dm-bubble"},m.body),k.default.createElement("div",{className:"acv-dm-time"},X(m.createdAt))))),k.default.createElement("div",{className:"acv-dm-composer"},k.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:d,placeholder:"\u5199\u70B9\u4EC0\u4E48\u2026\uFF08Enter \u53D1\u9001\uFF09",onChange:m=>v(m.target.value),onKeyDown:m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),L())}}),k.default.createElement("button",{type:"button",className:"acv-chat-send",disabled:y||!d.trim(),onClick:L,"aria-label":"\u53D1\u9001"},k.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},k.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}))))))))}var j=Y(require("react"),1);function We({api:a,token:e,onDone:t,notify:u}){let[s,i]=j.default.useState(""),[r,o]=j.default.useState(""),[p,h]=j.default.useState(!1),[l,n]=j.default.useState("");async function d(v){if(v.preventDefault(),s!==r)return n("\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4");h(!0),n("");try{await a.resetPassword({token:e,password:s}),u("\u5BC6\u7801\u5DF2\u91CD\u7F6E\uFF0C\u8BF7\u7528\u65B0\u5BC6\u7801\u767B\u5F55"),t()}catch(y){n(y.message)}finally{h(!1)}}return j.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:460,paddingTop:40}},j.default.createElement("div",{className:"acv-panel",style:{padding:"24px"}},j.default.createElement("h2",{className:"acv-section-title"},"\u8BBE\u7F6E\u65B0\u5BC6\u7801"),j.default.createElement("p",{className:"acv-modal-sub"},"\u91CD\u7F6E\u540E\u6240\u6709\u5DF2\u767B\u5F55\u8BBE\u5907\u90FD\u4F1A\u9000\u51FA\u3002"),l&&j.default.createElement("div",{className:"acv-error"},l),j.default.createElement("form",{onSubmit:d},j.default.createElement("div",{className:"acv-field"},j.default.createElement("label",null,"\u65B0\u5BC6\u7801"),j.default.createElement("input",{className:"acv-input",type:"password",value:s,onChange:v=>i(v.target.value)})),j.default.createElement("div",{className:"acv-field"},j.default.createElement("label",null,"\u518D\u8F93\u4E00\u6B21"),j.default.createElement("input",{className:"acv-input",type:"password",value:r,onChange:v=>o(v.target.value)})),j.default.createElement("div",{className:"acv-row"},j.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:p||s.length<8},p?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u65B0\u5BC6\u7801")))))}function ya({me:a,mode:e,api:t,emailNotice:u,onDsh:s,onAuth:i,onLogout:r,onHome:o,onResend:p,onAdmin:h,onAccount:l,onDm:n,onDmUser:d,dmUnread:v=0,onOpenPost:y,tabs:S,activeTab:$,onSelectTab:P}){let[f,T]=g.default.useState(!1);return g.default.useEffect(()=>{if(!f)return;let C=()=>T(!1);return window.addEventListener("click",C),()=>window.removeEventListener("click",C)},[f]),g.default.createElement("div",{className:"acv-topbar"},g.default.createElement("div",{className:"acv-tabs"},S.map(C=>g.default.createElement("button",{key:C.key,type:"button",className:$===C.key?"acv-tab is-active":"acv-tab",onClick:()=>P(C.key)},C.label))),g.default.createElement(Ve,{api:t,me:a,onDm:d,onOpenPost:y}),g.default.createElement("div",{className:"acv-topbar-grow"}),g.default.createElement("div",{className:"acv-topbar-right"},e==="plugin"&&g.default.createElement("button",{type:"button",className:"acv-dsh",onClick:s,title:"\u548C DSH \u804A\u804A\u8FD9\u4E2A\u793E\u533A"},g.default.createElement("span",{className:"acv-dsh-dot"}),"DSH\u52A9\u624B"),e==="plugin"&&g.default.createElement("span",{className:"acv-divider"}),a?g.default.createElement("div",{className:"acv-relative"},g.default.createElement("button",{type:"button",className:"acv-user",onClick:C=>{C.stopPropagation(),T(A=>!A)}},g.default.createElement(F,{api:t,me:a,handle:a.handle,disabled:f},g.default.createElement("span",{className:"acv-avatar"},Z(a.displayName||a.handle)),g.default.createElement("span",{className:"acv-user-name"},a.displayName||a.handle)),g.default.createElement("span",{className:"acv-caret"},"\u25BE")),f&&g.default.createElement("div",{className:"acv-menu",onClick:C=>C.stopPropagation()},g.default.createElement("div",{className:"acv-menu-note"},"@",a.handle," \xB7 ",a.role==="admin"?"\u7BA1\u7406\u5458":"\u6210\u5458"),g.default.createElement("div",{className:"acv-menu-group"},"\u4E2A\u4EBA\u7BA1\u7406"),g.default.createElement("button",{type:"button",onClick:()=>{T(!1),l()}},"\u8D26\u53F7\u8BBE\u7F6E"),g.default.createElement("button",{type:"button",onClick:()=>{T(!1),n()}},"\u79C1\u4FE1",v>0?` \xB7 ${v}`:""),!a.emailVerified&&g.default.createElement("button",{type:"button",onClick:()=>{T(!1),p()}},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6"),a.role==="admin"&&g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"acv-menu-group"},"\u7BA1\u7406\u5458"),g.default.createElement("button",{type:"button",onClick:()=>{T(!1),h()}},"\u793E\u533A\u7BA1\u7406")),g.default.createElement("div",{className:"acv-menu-group"}),g.default.createElement("button",{type:"button",onClick:()=>{T(!1),r()}},"\u9000\u51FA\u767B\u5F55"))):g.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("login")},"\u767B\u5F55")),u&&g.default.createElement("div",{style:{display:"none"}},u))}function Ye({mode:a="site",base:e="",tokenStore:t,onDsh:u}){let s=g.default.useMemo(()=>we({base:e,credentials:a==="site"?"same-origin":"omit",token:t?.get()||null,onToken:O=>t?.set(O)}),[e,a,t]),[i,r]=g.default.useState(null),[o,p]=g.default.useState(null),[h,l]=g.default.useState("loading"),[n,d]=g.default.useState({name:"home"}),[v,y]=g.default.useState("home"),[S,$]=g.default.useState(0),[P,f]=g.default.useState(null),[T,C]=g.default.useState(null),[A,I]=g.default.useState(0),L=g.default.useCallback((O,{error:K=!1}={})=>{C({text:O,error:K,key:Date.now()})},[]);g.default.useEffect(()=>{if(!T)return;let O=setTimeout(()=>C(null),3200);return()=>clearTimeout(O)},[T]);let z=g.default.useCallback(async()=>{try{let O=await s.bootstrap();r(O.account||null),p(O.home||null)}catch{r(null)}finally{l("ready")}},[s]);g.default.useEffect(()=>{z()},[z]),g.default.useEffect(()=>{if(a!=="site")return;let K=new URLSearchParams(window.location.search).get("token");K&&window.location.pathname.startsWith("/reset")&&d({name:"reset",token:K})},[a]),g.default.useEffect(()=>{let O=()=>f("login");return window.addEventListener("achoverse:auth",O),()=>window.removeEventListener("achoverse:auth",O)},[]),g.default.useEffect(()=>{if(a!=="site")return;let O=new URLSearchParams(window.location.search),K=O.get("token");if(!K||!window.location.pathname.startsWith("/verify"))return;let ce=O.get("kind");(ce==="email"?s.confirmEmailChange(K):s.verify(K)).then(me=>{r(me.account||null),L(ce==="email"?"\u65B0\u90AE\u7BB1\u5DF2\u751F\u6548\uFF0C\u9A8C\u8BC1\u4E5F\u5B8C\u6210\u4E86":"\u90AE\u7BB1\u9A8C\u8BC1\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u53D1\u5E16\u4E86"),window.history.replaceState({},"","/")}).catch(me=>L(me.message,{error:!0}))},[s,a,L]),g.default.useEffect(()=>{if(!i){$(0);return}let O=!1,K=()=>s.dmUnread().then(be=>{O||$(be.unread||0)}).catch(()=>{});K();let ce=setInterval(K,3e4);return()=>{O=!0,clearInterval(ce)}},[s,i]);let W=async O=>{try{let K=await s.dmOpenWith({targetId:O.id});d({name:"dm",threadId:K.thread.id})}catch(K){L(K.message,{error:!0})}},m=O=>d({name:"space",slug:O}),B=(O,K)=>d({name:"post",id:O,from:K||{name:"home"}}),_=()=>{d({name:"home"}),I(O=>O+1),p(null)};return g.default.createElement("div",{className:a==="plugin"?"acv-root acv-root--panel":"acv-root"},g.default.createElement("div",{className:"acv-frame"},g.default.createElement(ya,{me:i,mode:a,api:s,onOpenPost:B,onDsh:()=>{if(u)return u();window.dispatchEvent(new CustomEvent("achoverse:open-dsh"))},onAuth:f,onLogout:async()=>{try{await s.logout()}catch{}s.setToken(null),r(null),L("\u5DF2\u7ECF\u9000\u51FA\u767B\u5F55"),_()},onHome:_,tabs:[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR"}],activeTab:v,onSelectTab:O=>{y(O),d({name:"home"})},onAdmin:()=>d({name:"admin"}),onAccount:()=>d({name:"account"}),onDm:()=>d({name:"dm"}),onDmUser:W,dmUnread:S,onResend:async()=>{try{let O=await s.resend();L(O?.verifyLink?"\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7":"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001")}catch(O){L(O.message,{error:!0})}}}),n.name==="home"&&v==="arvr"&&g.default.createElement(Fe,{api:s,zone:"arvr",title:"AR/VR \u4E13\u533A",note:"\u4E3B\u9898\u4E13\u533A\uFF1A\u53EA\u6536\u5F55 AR/VR \u76F8\u5173\u7684\u677F\u5757",onOpenSpace:m}),n.name==="home"&&v==="home"&&h!=="ready"&&g.default.createElement("div",{className:"acv-main"},g.default.createElement("div",{className:"acv-col"},g.default.createElement("div",{className:"acv-skeleton"}),g.default.createElement("div",{className:"acv-skeleton"}),g.default.createElement("div",{className:"acv-skeleton"})),g.default.createElement("div",{className:"acv-col"},g.default.createElement("div",{className:"acv-skeleton",style:{height:260}}))),n.name==="home"&&v==="home"&&h==="ready"&&g.default.createElement(Pe,{initialData:o,key:A,api:s,me:i,onOpenSpace:m,onOpenPost:O=>B(O,{name:"home"}),onDm:W}),n.name==="space"&&g.default.createElement(_e,{api:s,slug:n.slug,me:i,onBack:_,onOpenPost:O=>B(O,{name:"space",slug:n.slug}),onAuth:()=>f("login"),onDm:W,notify:L}),n.name==="reset"&&g.default.createElement(We,{api:s,token:n.token,notify:L,onDone:()=>{window.history.replaceState({},"","/"),d({name:"home"}),f("login")}}),n.name==="account"&&g.default.createElement(He,{api:s,me:i,onBack:_,onRefreshMe:z,notify:L}),n.name==="dm"&&g.default.createElement(je,{api:s,me:i,initialThreadId:n.threadId,onBack:_,onDm:W,notify:L}),n.name==="admin"&&g.default.createElement(Be,{api:s,me:i,onDm:W,onBack:_,notify:L}),n.name==="post"&&g.default.createElement(Ie,{api:s,id:n.id,me:i,backTo:n.from?.name==="space"?"space":"home",onDm:W,onBack:()=>n.from?.name==="space"?d({name:"space",slug:n.from.slug}):_(),onAuth:()=>f("login"),notify:L})),P&&g.default.createElement(Ue,{api:s,initialMode:P,onClose:()=>f(null),onDone:O=>{r(O),f(null),p(null),_(),L("\u767B\u5F55\u6210\u529F")},notify:L}),T&&g.default.createElement("div",{className:T.error?"acv-toast is-error":"acv-toast"},T.text))}var D=Y(require("react"),1);function ve(a,e=""){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,role:a,text:e,tools:[]}}async function wa({token:a,message:e,signal:t,onEvent:u}){let s=await fetch("/community/ai/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:a,message:e}),signal:t});if(!s.ok||!s.body){let p=`HTTP ${s.status}`;try{p=(await s.json())?.error||p}catch{}throw new Error(p)}let i=s.body.getReader(),r=new TextDecoder,o="";for(;;){let{value:p,done:h}=await i.read();if(h)break;o+=r.decode(p,{stream:!0});let l;for(;(l=o.indexOf(`

`))>=0;){let n=o.slice(0,l);o=o.slice(l+2);for(let d of n.split(`
`)){if(!d.startsWith("data:"))continue;let v=d.slice(5).trim();if(v)try{u(JSON.parse(v))}catch{}}}}}function qe({tokenStore:a,onClose:e,onLogin:t}){let[u,s]=D.default.useState(()=>[ve("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),[i,r]=D.default.useState(""),[o,p]=D.default.useState(!1),[h,l]=D.default.useState(""),[n,d]=D.default.useState(!!a?.get()),[v,y]=D.default.useState(!1),S=D.default.useRef(null);D.default.useEffect(()=>{let f=S.current;f&&(f.scrollTop=f.scrollHeight)},[u]),D.default.useEffect(()=>{let f=!1;return fetch("/community/ai/history",{cache:"no-store"}).then(T=>T.ok?T.json():{messages:[]}).then(T=>{if(f)return;let C=(T?.messages||[]).map(A=>({...ve(A.role,A.text),id:`h-${Math.random().toString(36).slice(2,8)}`}));C.length&&s(C)}).catch(()=>{}).finally(()=>{f||y(!0)}),()=>{f=!0}},[]),D.default.useEffect(()=>{let f=setInterval(()=>d(!!a?.get()),1500);return()=>clearInterval(f)},[a]);let $=f=>s(T=>{let C=[...T],A={...C[C.length-1]};return C[C.length-1]=f(A),C});async function P(f){let T=String(f??i).trim();if(!T||o)return;let C=a?.get();if(!C){l("\u5148\u767B\u5F55\u793E\u533A\uFF0C\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u8BF4\u8BDD");return}l(""),p(!0),r(""),s(A=>[...A,ve("user",T),ve("assistant","")]);try{await wa({token:C,message:T,onEvent:A=>{A.type==="text"?$(I=>({...I,text:I.text?`${I.text}
${A.text}`:A.text})):A.type==="tool"?$(I=>({...I,tools:A.phase==="call"?[...I.tools,A.name]:I.tools})):A.type==="error"&&l(A.error||"\u5BF9\u8BDD\u5931\u8D25")}})}catch(A){l(A.message),/登录|401/.test(A.message)&&d(!1)}finally{p(!1)}}return D.default.createElement("div",{className:"acv-drawer",role:"dialog","aria-label":"DSH \u5BF9\u8BDD"},D.default.createElement("div",{className:"acv-drawer-head"},D.default.createElement("span",{className:"acv-dsh",style:{padding:"6px 14px"}},D.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),D.default.createElement("span",{style:{fontWeight:700}},"\u793E\u533A\u52A9\u624B"),D.default.createElement("span",{style:{flex:1}}),D.default.createElement("button",{type:"button",className:"acv-back",onClick:e,"aria-label":"\u5173\u95ED"},"\u2715")),D.default.createElement("div",{className:"acv-drawer-body",ref:S},u.map(f=>D.default.createElement("div",{key:f.id,className:`acv-chat ${f.role==="user"?"is-user":"is-agent"}`},f.tools?.length>0&&D.default.createElement("div",{className:"acv-chat-tools"},f.tools.map((T,C)=>D.default.createElement("span",{key:`${T}-${C}`,className:"acv-chip"},"\u8C03\u7528 ",T))),f.text&&(f.role==="assistant"?D.default.createElement("div",{className:"acv-chat-text acv-chat-text--md"},D.default.createElement(re,{text:f.text})):D.default.createElement("div",{className:"acv-chat-text"},f.text)),!f.text&&f.role==="assistant"&&o&&D.default.createElement("div",{className:"acv-chat-typing"},"\u2026"))),h&&D.default.createElement("div",{className:"acv-error"},h),!n&&D.default.createElement("div",{className:"acv-notice",style:{marginTop:12}},"\u8FD8\u6CA1\u767B\u5F55\u793E\u533A\uFF0C\u767B\u5F55\u4E4B\u540E\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002",D.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>{t?.(),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55"))),D.default.createElement("div",{className:"acv-drawer-foot"},D.default.createElement("div",{className:"acv-chat-composer"},D.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:i,placeholder:o?"\u6B63\u5728\u56DE\u590D\u2026":"\u548C DSH \u804A\u804A\u793E\u533A\uFF0C\u6216\u8BA9\u5B83\u53D1\u4E00\u6761\u5E16",onChange:f=>r(f.target.value),onKeyDown:f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),P())}}),D.default.createElement("button",{type:"button",className:"acv-chat-send",onClick:()=>P(),disabled:o||!i.trim(),"aria-label":"\u53D1\u9001"},o?D.default.createElement("span",{className:"acv-chat-send-dot"}):D.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},D.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})))),D.default.createElement("div",{className:"acv-chat-hint"},"Enter \u53D1\u9001 \xB7 Shift + Enter \u6362\u884C")))}var Ke="achoverse-community",ge="achoverse.community.token",Ge="https://community.achoverse.com",Na=["slots"];function Xe(){if(typeof document>"u")return;let a=document.querySelector("style[data-acv-community]");a||(a=document.createElement("style"),a.setAttribute("data-acv-community","styles"),document.head.appendChild(a)),a.textContent!==ue&&(a.textContent=ue)}function ka({size:a=22,active:e=!1}){return R.default.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},R.default.createElement("circle",{cx:12,cy:8.5,r:3.4,stroke:"currentColor",strokeWidth:e?2:1.7}),R.default.createElement("path",{d:"M4.6 19.4c.8-3.9 3.8-6.1 7.4-6.1s6.6 2.2 7.4 6.1",stroke:"currentColor",strokeWidth:e?2:1.7,strokeLinecap:"round"}))}function Sa(){return{get(){try{return window.localStorage.getItem(ge)}catch{return null}},set(a){try{a?window.localStorage.setItem(ge,a):window.localStorage.removeItem(ge)}catch{}}}}function Ca(){let[a,e]=R.default.useState(null),[t,u]=R.default.useState(!1),s=R.default.useMemo(()=>Sa(),[]);return R.default.useEffect(()=>{Xe();let i=!1;return fetch("/community/config",{cache:"no-store"}).then(r=>r.ok?r.json():Promise.reject(new Error(String(r.status)))).then(r=>{i||e(r?.baseUrl||Ge)}).catch(()=>{i||e(Ge)}),()=>{i=!0}},[]),a?R.default.createElement(R.default.Fragment,null,R.default.createElement(Ye,{mode:"plugin",base:a,tokenStore:s,onDsh:()=>u(!0)}),t?R.default.createElement(qe,{tokenStore:s,onClose:()=>u(!1)}):null):R.default.createElement("div",{className:"acv-root acv-root--panel"},R.default.createElement("div",{className:"acv-frame"},R.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u8FDE\u63A5\u793E\u533A\u2026")))}function Ea(a){Xe(),a.slots.inject("main",()=>a.slots.register({name:"main",key:Ke},Ca)),a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:Ke,order:30,label:()=>"Achoverse\u793E\u533A"},ka))}
return module.exports}})
