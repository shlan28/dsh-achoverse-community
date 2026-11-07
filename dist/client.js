window.__ModuleLoader__.load({id:"dsh-achoverse-community",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Xe=Object.create;var pe=Object.defineProperty;var Qe=Object.getOwnPropertyDescriptor;var Ze=Object.getOwnPropertyNames;var Re=Object.getPrototypeOf,ea=Object.prototype.hasOwnProperty;var xe=(e,a)=>()=>{try{return a||e((a={exports:{}}).exports,a),a.exports}catch(t){throw a=0,t}},aa=(e,a)=>{for(var t in a)pe(e,t,{get:a[t],enumerable:!0})},ye=(e,a,t,u)=>{if(a&&typeof a=="object"||typeof a=="function")for(let s of Ze(a))!ea.call(e,s)&&s!==t&&pe(e,s,{get:()=>a[s],enumerable:!(u=Qe(a,s))||u.enumerable});return e};var J=(e,a,t)=>(t=e!=null?Xe(Re(e)):{},ye(a||!e||!e.__esModule?pe(t,"default",{value:e,enumerable:!0}):t,e)),ta=e=>ye(pe({},"__esModule",{value:!0}),e);var Ce=xe(Z=>{"use strict";var ia=require("react");function Se(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ne(){}var ee={d:{f:ne,r:function(){throw Error(Se(522))},D:ne,C:ne,L:ne,m:ne,X:ne,S:ne,M:ne},p:0,findDOMNode:null},oa=Symbol.for("react.portal"),ra=Symbol.for("react.recoverable"),ke=Symbol.for("react.optimistic_key");function ca(e,a,t){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oa,key:u==null?null:u===ke?ke:""+u,children:e,containerInfo:a,implementation:t}}var ie=ia.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function me(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee;Z.browser=function(e){return{$$typeof:ra,_reason:e}};Z.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Se(299));return ca(e,a,null,t)};Z.flushSync=function(e){var a=ie.T,t=ee.p;try{if(ie.T=null,ee.p=2,e)return e()}finally{ie.T=a,ee.p=t,ee.d.f()}};Z.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,ee.d.C(e,a))};Z.prefetchDNS=function(e){typeof e=="string"&&ee.d.D(e)};Z.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var t=a.as,u=me(t,a.crossOrigin),s=typeof a.integrity=="string"?a.integrity:void 0,o=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;t==="style"?ee.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:u,integrity:s,fetchPriority:o}):t==="script"&&ee.d.X(e,{crossOrigin:u,integrity:s,fetchPriority:o,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Z.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var t=me(a.as,a.crossOrigin);ee.d.M(e,{crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0})}}else a==null&&ee.d.M(e)};Z.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var t=a.as,u=me(t,a.crossOrigin);ee.d.L(e,t,{crossOrigin:u,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Z.preloadModule=function(e,a){if(typeof e=="string")if(a){var t=me(a.as,a.crossOrigin);ee.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0})}else ee.d.m(e)};Z.requestFormReset=function(e){ee.d.r(e)};Z.unstable_batchedUpdates=function(e,a){return e(a)};Z.useFormState=function(e,a,t){return ie.H.useFormState(e,a,t)};Z.useFormStatus=function(){return ie.H.useHostTransitionStatus()};Z.version="19.3.1"});var Te=xe((_a,ze)=>{"use strict";function Ee(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ee)}catch(e){console.error(e)}}Ee(),ze.exports=Ce()});var za={};aa(za,{apply:()=>Ea,inject:()=>Na});module.exports=ta(za);var ae=J(require("react"),1);var fe=`/* Achoverse \u793E\u533A\uFF1A\u6D45\u7070\u753B\u5E03 + \u767D\u8272\u5927\u5706\u89D2\u5361\u7247 + \u7C89\u7D2B\u6E10\u53D8\u4E3B\u89C6\u89C9\u3002 */

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

.acv-question-card {
  margin: 14px 0;
  padding: 14px;
  border: 1px solid #efd4e4;
  border-radius: 14px;
  background: #fff8fc;
  display: grid;
  gap: 12px;
}

.acv-question-item { display: grid; gap: 8px; }
.acv-question-item p { margin: 0; white-space: pre-wrap; }
.acv-question-option {
  padding: 10px 12px;
  text-align: left;
  border: 1px solid #e6dbe4;
  border-radius: 10px;
  background: #fff;
  color: var(--acv-ink);
  cursor: pointer;
}
.acv-question-option.is-selected { border-color: var(--acv-brand); background: #fff0f8; }
.acv-question-option small { display: block; margin-top: 3px; color: #777; }
.acv-question-custom { width: 100%; box-sizing: border-box; padding: 9px; border: 1px solid #e6dbe4; border-radius: 9px; }

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

.acv-chat-send.is-stop {
  background: #e05272;
}

.acv-chat-stop-icon {
  width: 11px;
  height: 11px;
  border-radius: 2px;
  background: #fff;
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
`;var g=J(require("react"),1);function we({base:e="",token:a=null,credentials:t="same-origin",onToken:u}={}){let s=a;function o(i){s=i||null,u?.(s)}async function r(i,{method:v="GET",body:f,signal:l}={}){let n={};f!==void 0&&(n["content-type"]="application/json"),s&&(n.authorization=`Bearer ${s}`);let d=await fetch(e+i,{method:v,headers:n,body:f===void 0?void 0:JSON.stringify(f),credentials:s?"omit":t,cache:"no-store",signal:l}),p=await d.text(),x={};try{x=p?JSON.parse(p):{}}catch{x={error:p.slice(0,200)}}if(!d.ok){let z=new Error(x?.error||`HTTP ${d.status}`);throw z.code=x?.code,z.status=d.status,z}return x}return{raw:r,setToken:o,getToken:()=>s,me:()=>r("/api/auth/me"),home:()=>r("/api/home"),bootstrap:()=>r("/api/bootstrap"),spaces:()=>r("/api/spaces"),zoneSpaces:i=>r(`/api/zones/${encodeURIComponent(i)}`),space:i=>r(`/api/spaces/${encodeURIComponent(i)}`),post:i=>r(`/api/posts/${encodeURIComponent(i)}`),captcha:()=>r("/api/captcha"),register:i=>r("/api/auth/register",{method:"POST",body:i}),login:i=>r("/api/auth/login",{method:"POST",body:i}),logout:()=>r("/api/auth/logout",{method:"POST",body:{}}),resend:()=>r("/api/auth/resend",{method:"POST",body:{}}),verify:i=>r("/api/auth/verify",{method:"POST",body:{token:i}}),createPost:i=>r("/api/posts",{method:"POST",body:i}),createComment:(i,v)=>r(`/api/posts/${encodeURIComponent(i)}/comments`,{method:"POST",body:v}),updateProfile:i=>r("/api/account/profile",{method:"POST",body:i}),requestEmailChange:i=>r("/api/account/email",{method:"POST",body:{email:i}}),confirmEmailChange:i=>r("/api/account/email/confirm",{method:"POST",body:{token:i}}),changePassword:i=>r("/api/account/password",{method:"POST",body:i}),forgotPassword:i=>r("/api/account/password/forgot",{method:"POST",body:{email:i}}),resetPassword:i=>r("/api/account/password/reset",{method:"POST",body:i}),dmThreads:()=>r("/api/dm/threads"),dmUnread:()=>r("/api/dm/unread"),dmThread:(i,v)=>r(`/api/dm/thread/${encodeURIComponent(i)}${v?`?before=${encodeURIComponent(v)}`:""}`),dmOpenWith:i=>r("/api/dm/thread",{method:"POST",body:i}),dmSend:(i,v)=>r(`/api/dm/thread/${encodeURIComponent(i)}`,{method:"POST",body:{body:v}}),user:i=>r(`/api/users/${encodeURIComponent(i)}`),adminUsers:i=>r(`/api/admin/users${i?`?q=${encodeURIComponent(i)}`:""}`),pendingAccounts:()=>r("/api/admin/pending"),adminSpaces:()=>r("/api/admin/spaces"),createSpace:i=>r("/api/admin/spaces",{method:"POST",body:i}),updateSpace:(i,v)=>r(`/api/admin/spaces/${encodeURIComponent(i)}/update`,{method:"POST",body:v}),archiveSpace:(i,v=!0)=>r(`/api/admin/spaces/${encodeURIComponent(i)}/archive`,{method:"POST",body:{archived:v}}),verifyAccount:i=>r("/api/admin/verify",{method:"POST",body:{accountId:i}}),setPostStatus:(i,v)=>r(`/api/posts/${encodeURIComponent(i)}/status`,{method:"POST",body:{status:v}}),notifications:()=>r("/api/notifications"),markRead:i=>r("/api/notifications/read",{method:"POST",body:{ids:i}}),search:i=>r(`/api/search?q=${encodeURIComponent(i)}`)}}function Q(e){let a=Number(e)||0;if(!a)return"";let t=Date.now()-a;if(t<6e4)return"\u521A\u521A";if(t<36e5)return`${Math.floor(t/6e4)} \u5206\u949F\u524D`;if(t<864e5)return`${Math.floor(t/36e5)} \u5C0F\u65F6\u524D`;if(t<7*864e5)return`${Math.floor(t/864e5)} \u5929\u524D`;let u=new Date(a);return`${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`}function R(e){let a=String(e||"?").trim();if(!a)return"?";let t=[...a];return t.length>1&&/[\u4e00-\u9fa5]/.test(t[0])?t.slice(-2).join(""):t[0].toUpperCase()}var b=J(require("react"),1);var X=J(require("react"),1),Ne=[{key:"diffusion",label:"\u6269\u6563",edition:"DIFFUSION"},{key:"connection",label:"\u8FDE\u63A5",edition:"CONNECTION"},{key:"resonance",label:"\u5171\u632F",edition:"RESONANCE"}];function na({motif:e}){return e==="connection"?X.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},X.default.createElement("rect",{x:"652",y:"-130",width:"390",height:"390",rx:"58",transform:"rotate(-24 847 65)",fill:"#E2F5FF",fillOpacity:".16"}),X.default.createElement("rect",{x:"790",y:"120",width:"326",height:"326",rx:"52",transform:"rotate(19 953 283)",fill:"#E2F5FF",fillOpacity:".13"}),X.default.createElement("rect",{x:"570",y:"170",width:"230",height:"230",rx:"38",transform:"rotate(19 685 285)",fill:"#34298A",fillOpacity:".08"})):e==="resonance"?X.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},X.default.createElement("rect",{x:"500",y:"-40",width:"720",height:"230",rx:"115",transform:"rotate(-28 860 75)",fill:"#FFF4D9",fillOpacity:".16"}),X.default.createElement("rect",{x:"650",y:"165",width:"690",height:"190",rx:"95",transform:"rotate(-28 995 260)",fill:"#FFF4D9",fillOpacity:".14"}),X.default.createElement("circle",{cx:"1130",cy:"105",r:"220",fill:"#AC5B25",fillOpacity:".06"})):e==="diffusion"?X.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},X.default.createElement("circle",{cx:"948",cy:"85",r:"270",fill:"#FFF0F5",fillOpacity:".14"}),X.default.createElement("circle",{cx:"732",cy:"244",r:"190",fill:"#FFF0F5",fillOpacity:".12"}),X.default.createElement("circle",{cx:"1060",cy:"320",r:"240",fill:"#9E2367",fillOpacity:".08"})):null}function ve({space:e,showBadge:a=!0,className:t=""}){return X.default.createElement("span",{className:`acv-space-cover ${t}`.trim(),style:{"--accent":e.accent,"--accent-to":e.accentTo}},X.default.createElement(na,{motif:e.motif}),a&&X.default.createElement("span",{className:"acv-space-badge"},`${e.postCount??0} \u4E2A\u5E16\u5B50`),X.default.createElement("span",{className:"acv-space-enter"},"\u8FDB\u5165\u8BA8\u8BBA \u2192"))}var B=J(require("react"),1),Ae=J(Te(),1);var la=236,Oe=190;function da(e){let a=(window.innerWidth||1024)-la-10;return Math.max(10,Math.min(e,a))}function W({api:e,me:a,handle:t,children:u,onDm:s,disabled:o=!1,className:r=""}){let[i,v]=B.default.useState(!1),[f,l]=B.default.useState(null),[n,d]=B.default.useState(null),[p,x]=B.default.useState(!1),z=B.default.useRef(null),U=B.default.useRef(null),P=B.default.useRef(null),k=B.default.useRef(0),I=B.default.useCallback(()=>{t&&(x(!1),e.user(t).then(m=>{d(m.user),k.current=Date.now()}).catch(()=>{d(null),x(!0)}))},[e,t]),D=()=>{let m=z.current?.getBoundingClientRect();if(!m)return;let F=m.bottom+8+Oe>(window.innerHeight||768)?Math.max(10,m.top-8-Oe):m.bottom+8;l({left:da(m.left),top:F})},H=()=>{o||(clearTimeout(U.current),P.current=setTimeout(()=>{D(),v(!0),(!n||Date.now()-k.current>3e4)&&I()},140))},j=()=>{clearTimeout(P.current),U.current=setTimeout(()=>v(!1),160)};B.default.useEffect(()=>{if(!i)return;let m=()=>v(!1);return window.addEventListener("scroll",m,!0),window.addEventListener("resize",m),()=>{window.removeEventListener("scroll",m,!0),window.removeEventListener("resize",m)}},[i]),B.default.useEffect(()=>{o&&v(!1)},[o]),B.default.useEffect(()=>()=>{clearTimeout(U.current),clearTimeout(P.current)},[]);let L=!!(a&&t&&a.handle?.toLowerCase()===String(t).toLowerCase()),C=!!n?.allowDm&&!L,Y=i&&f&&typeof document<"u"?(0,Ae.createPortal)(B.default.createElement("span",{className:"acv-usercard acv-usercard--fixed",style:{left:f.left,top:f.top},role:"dialog","aria-label":`${n?.displayName||t} \u7684\u8D44\u6599\u5361`,onClick:m=>m.stopPropagation(),onMouseEnter:()=>clearTimeout(U.current),onMouseLeave:j},B.default.createElement("span",{className:"acv-usercard-head"},B.default.createElement("span",{className:"acv-avatar"},R(n?.displayName||t)),B.default.createElement("span",{className:"acv-usercard-id"},B.default.createElement("span",{className:"acv-usercard-name"},n?.displayName||t),B.default.createElement("span",{className:"acv-usercard-handle"},"@",n?.handle||t)),n?.role==="admin"&&B.default.createElement("span",{className:"acv-chip"},"\u7BA1\u7406\u5458")),n?.bio&&B.default.createElement("span",{className:"acv-usercard-bio"},n.bio),B.default.createElement("span",{className:"acv-usercard-foot"},!n&&!p&&B.default.createElement("span",{className:"acv-usercard-bio"},"\u52A0\u8F7D\u4E2D\u2026"),!n&&p&&B.default.createElement("span",{className:"acv-usercard-bio"},"\u8D44\u6599\u52A0\u8F7D\u5931\u8D25"),n&&C&&!a&&B.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:m=>{m.stopPropagation(),v(!1),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55\u540E\u53D1\u79C1\u4FE1"),n&&C&&a&&B.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:m=>{m.stopPropagation(),v(!1),s?.(n)}},"\u53D1\u79C1\u4FE1"),n&&!C&&!L&&B.default.createElement("span",{className:"acv-usercard-bio"},"\u5BF9\u65B9\u672A\u5F00\u653E\u79C1\u4FE1"),L&&B.default.createElement("span",{className:"acv-usercard-bio"},"\u8FD9\u662F\u4F60\u81EA\u5DF1"))),document.body):null;return B.default.createElement("span",{ref:z,className:`acv-userchip ${r}`.trim(),onMouseEnter:H,onMouseLeave:j},u,Y)}function he({space:e,onOpen:a}){return b.default.createElement("button",{type:"button",className:"acv-space-card",onClick:()=>a(e.slug),style:{"--accent":e.accent,"--accent-to":e.accentTo}},b.default.createElement(ve,{space:e}),b.default.createElement("span",{className:"acv-space-body"},b.default.createElement("span",{className:"acv-space-title"},e.title),b.default.createElement("span",{className:"acv-space-sub"},e.subtitle),b.default.createElement("span",{className:"acv-space-meta"},b.default.createElement("span",null,e.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${Q(e.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u5E16"),b.default.createElement("span",{className:"acv-dot"}),b.default.createElement("span",{className:"acv-space-desc"},e.description||""))))}function Pe({api:e,me:a,initialData:t=null,onOpenSpace:u,onOpenPost:s,onDm:o}){let[r,i]=b.default.useState(t),[v,f]=b.default.useState(""),l=b.default.useCallback(()=>{e.home().then(i).catch(n=>f(n.message))},[e]);return b.default.useEffect(()=>{t||l()},[l,a]),v?b.default.createElement("div",{className:"acv-loading"},v):r?b.default.createElement("div",{className:"acv-main"},b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u677F\u5757"),b.default.createElement("span",{className:"acv-section-note"},"\u70B9\u5F00\u4E00\u4E2A\u677F\u5757\u8FDB\u5165\u8BA8\u8BBA\u533A")),r.spaces.map(n=>b.default.createElement(he,{key:n.id,space:n,onOpen:u}))),b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u6700\u8FD1\u66F4\u65B0"),b.default.createElement("button",{type:"button",className:"acv-link",onClick:l},"\u5237\u65B0")),r.recent.length===0&&b.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u5E16\u5B50"),r.recent.map(n=>b.default.createElement("button",{key:n.id,type:"button",className:"acv-recent-item",onClick:()=>s(n.id)},b.default.createElement(W,{api:e,me:a,handle:n.author.handle,onDm:o},b.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},R(n.author.displayName))),b.default.createElement("span",{className:"acv-recent-main"},b.default.createElement("span",{className:"acv-recent-title"},n.title),b.default.createElement("span",{className:"acv-recent-meta"},n.spaceTitle," \xB7"," ",b.default.createElement(W,{api:e,me:a,handle:n.author.handle,onDm:o},b.default.createElement("span",null,n.author.displayName))," ","\xB7 ",Q(n.lastActivityAt)," \xB7 ",n.commentCount," \u6761\u8BC4\u8BBA"))))),b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u6D3B\u8DC3\u6210\u5458")),(r.members||[]).length===0&&b.default.createElement("div",{className:"acv-empty",style:{padding:"10px 0"}},"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8FC7\u5E16"),(r.members||[]).map(n=>b.default.createElement("div",{key:n.id,className:"acv-member"},b.default.createElement(W,{api:e,me:a,handle:n.handle,onDm:o},b.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},R(n.displayName))),b.default.createElement("span",{className:"acv-member-main"},b.default.createElement(W,{api:e,me:a,handle:n.handle,onDm:o},b.default.createElement("span",{className:"acv-member-name"},n.displayName)),b.default.createElement(W,{api:e,me:a,handle:n.handle,onDm:o},b.default.createElement("span",{className:"acv-member-meta"},"@",n.handle))),b.default.createElement("span",{className:"acv-chip"},n.postCount," \u5E16")))),b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u6570\u636E")),b.default.createElement("div",{className:"acv-stats"},b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.spaces.length),b.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u677F\u5757")),b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.spaces.reduce((n,d)=>n+d.postCount,0)),b.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.recent.length),b.default.createElement("div",{className:"acv-stat-label"},"\u6761\u6700\u8FD1\u66F4\u65B0"))),b.default.createElement("p",{className:"acv-space-sub",style:{marginTop:12}},a?a.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u8FDB\u4EFB\u610F\u677F\u5757\uFF0C\u53F3\u4E0A\u89D2\u6709\u53D1\u5E16\u5165\u53E3\u3002":"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF1B\u53D1\u5E16\u3001\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002")))):b.default.createElement("div",{className:"acv-main"},b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-skeleton"}),b.default.createElement("div",{className:"acv-skeleton"}),b.default.createElement("div",{className:"acv-skeleton"})),b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-skeleton",style:{height:260}})))}var O=J(require("react"),1);var K=J(require("react"),1);function De({space:e,api:a,onClose:t,onCreated:u,notify:s}){let[o,r]=K.default.useState(""),[i,v]=K.default.useState(""),[f,l]=K.default.useState(!1),[n,d]=K.default.useState("");K.default.useEffect(()=>{let x=z=>{z.key==="Escape"&&t()};return window.addEventListener("keydown",x),()=>window.removeEventListener("keydown",x)},[t]);async function p(){l(!0),d("");try{let x=await a.createPost({spaceId:e.id,title:o,body:i});s("\u5E16\u5B50\u53D1\u51FA\u53BB\u4E86"),u(x.post)}catch(x){d(x.message)}finally{l(!1)}}return K.default.createElement("div",{className:"acv-overlay",onClick:t},K.default.createElement("div",{className:"acv-modal acv-modal--wide",onClick:x=>x.stopPropagation()},K.default.createElement("h3",{className:"acv-modal-title"},"\u5728\u300C",e.title,"\u300D\u53D1\u5E16"),K.default.createElement("p",{className:"acv-modal-sub"},"\u6807\u9898\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u6B63\u6587\u5C55\u5F00\u8BB2\u3002\u53D1\u5B8C\u4F1A\u76F4\u63A5\u8FDB\u8BE6\u60C5\u9875\u3002"),n&&K.default.createElement("div",{className:"acv-error"},n),K.default.createElement("div",{className:"acv-field"},K.default.createElement("label",null,"\u6807\u9898"),K.default.createElement("input",{className:"acv-input",autoFocus:!0,value:o,maxLength:160,placeholder:"\u60F3\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",onChange:x=>r(x.target.value)})),K.default.createElement("div",{className:"acv-field"},K.default.createElement("label",null,"\u6B63\u6587"),K.default.createElement("textarea",{className:"acv-textarea acv-textarea--tall",value:i,maxLength:2e4,placeholder:"\u5C55\u5F00\u8BF4\u8BF4\uFF0C\u652F\u6301\u6362\u884C",onChange:x=>v(x.target.value)})),K.default.createElement("div",{className:"acv-row"},K.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),K.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:f||!o.trim()||!i.trim(),onClick:p},f?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u5E03"))))}function _e({api:e,slug:a,me:t,onBack:u,onOpenPost:s,onAuth:o,onDm:r,notify:i}){let[v,f]=O.default.useState(null),[l,n]=O.default.useState(""),[d,p]=O.default.useState(!1),x=O.default.useCallback(()=>{e.space(a).then(k=>{f(k),n("")}).catch(k=>n(k.message))},[e,a]);if(O.default.useEffect(()=>{x()},[x]),l)return O.default.createElement("div",{style:{paddingTop:22}},O.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875"),O.default.createElement("div",{className:"acv-loading"},l));if(!v)return O.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u677F\u5757\u2026");let{space:z,posts:U}=v,P=!!t?.emailVerified;return O.default.createElement("div",{style:{paddingTop:20,display:"flex",flexDirection:"column",gap:16}},O.default.createElement("div",null,O.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),O.default.createElement("div",{className:"acv-board-head",style:{"--accent":z.accent,"--accent-to":z.accentTo}},O.default.createElement("h2",{className:"acv-board-title"},z.title),O.default.createElement("p",{className:"acv-board-sub"},z.description||z.subtitle),O.default.createElement("div",{className:"acv-board-actions"},O.default.createElement("button",{type:"button",className:"acv-btn",style:{background:"#fff",color:"#16161d"},onClick:()=>{if(!t)return o();if(!P)return i("\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16");p(!0)}},"\u53D1\u5E16"),O.default.createElement("span",{className:"acv-chip",style:{background:"rgba(255,255,255,.22)",color:"#fff"}},z.postCount," \u4E2A\u5E16\u5B50"))),!t&&O.default.createElement("div",{className:"acv-notice"},"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u9700\u8981\u3002",O.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:o},"\u767B\u5F55")),t&&!t.emailVerified&&O.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002\u9A8C\u8BC1\u90AE\u4EF6\u5728\u6536\u4EF6\u7BB1\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u5934\u50CF\u83DC\u5355\u91CC\u91CD\u53D1\u3002"),O.default.createElement("div",{className:"acv-board-grid"},O.default.createElement("div",{className:"acv-col"},O.default.createElement("div",{className:"acv-panel",style:{padding:"8px 18px"}},U.length===0&&O.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5E16\u5B50\uFF0C\u6765\u53D1\u7B2C\u4E00\u6761\u3002"),U.map(k=>O.default.createElement("button",{key:k.id,type:"button",className:"acv-post-row",onClick:()=>s(k.id)},O.default.createElement("span",{className:"acv-post-title"},k.title),O.default.createElement("span",{className:"acv-post-excerpt"},k.excerpt),O.default.createElement("span",{className:"acv-post-meta"},O.default.createElement(W,{api:e,me:t,handle:k.author.handle,onDm:r},O.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},R(k.author.displayName)),k.author.displayName),O.default.createElement("span",{className:"acv-dot"}),Q(k.lastActivityAt),O.default.createElement("span",{className:"acv-dot"}),k.commentCount," \u6761\u8BC4\u8BBA"))))),O.default.createElement("aside",{className:"acv-col"},O.default.createElement("div",{className:"acv-panel"},O.default.createElement("div",{className:"acv-section-head"},O.default.createElement("h2",{className:"acv-section-title"},"\u677F\u5757\u8BF4\u660E")),O.default.createElement("p",{className:"acv-space-sub"},z.description||z.subtitle||"\u8FD8\u6CA1\u6709\u5199\u4ECB\u7ECD\u3002"),O.default.createElement("div",{className:"acv-stats",style:{marginTop:14}},O.default.createElement("div",{className:"acv-stat"},O.default.createElement("div",{className:"acv-stat-value"},z.postCount),O.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),O.default.createElement("div",{className:"acv-stat"},O.default.createElement("div",{className:"acv-stat-value"},U.length),O.default.createElement("div",{className:"acv-stat-label"},"\u6761\u5728\u672C\u9875"))),O.default.createElement("p",{className:"acv-space-sub",style:{marginTop:14}},t?.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u4E0A\u9762\u7684\u300C\u53D1\u5E16\u300D\u3002":t?"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u3001\u8BC4\u8BBA\u624D\u9700\u8981\u3002")))),d&&O.default.createElement(De,{api:e,space:z,notify:i,onClose:()=>p(!1),onCreated:k=>{p(!1),x(),s(k.id)}}))}var w=J(require("react"),1);var V=J(require("react"),1),Le=/(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(~~[^~\n]+~~)|(\[[^\]\n]+\]\([^)\s]+\))/g,oe=/^\s*([-*+]|\d+[.)])\s+/,$e=/^(#{1,6})\s+(.*)$/,pa=/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/;function re(e,a){let t=[],u=0,s;for(Le.lastIndex=0;(s=Le.exec(e))!==null;){s.index>u&&t.push(e.slice(u,s.index));let o=s[0],r=`${a}-${s.index}`;if(o.startsWith("`"))t.push(V.default.createElement("code",{key:r,className:"acv-md-code"},o.slice(1,-1)));else if(o.startsWith("**"))t.push(V.default.createElement("strong",{key:r},o.slice(2,-2)));else if(o.startsWith("~~"))t.push(V.default.createElement("del",{key:r},o.slice(2,-2)));else if(o.startsWith("[")){let i=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(o),v=i?.[2]||"#",f=/^(https?:\/\/|mailto:|\/)/i.test(v);t.push(f?V.default.createElement("a",{key:r,href:v,target:"_blank",rel:"noreferrer noopener"},i[1]):V.default.createElement("span",{key:r},i?.[1]||o))}else t.push(V.default.createElement("em",{key:r},o.slice(1,-1)));u=s.index+o.length}return u<e.length&&t.push(e.slice(u)),t}function Me(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(a=>a.trim())}function ce({text:e}){let t=String(e||"").replace(/\r\n?/g,`
`).split(`
`),u=[],s=0,o=0;for(;s<t.length;){let r=t[s];if(/^\s*```/.test(r)){let l=r.trim().slice(3).trim(),n=[];for(s+=1;s<t.length&&!/^\s*```/.test(t[s]);)n.push(t[s]),s+=1;s+=1,u.push(V.default.createElement("pre",{key:`b${o++}`,className:"acv-md-pre"},V.default.createElement("code",null,n.join(`
`)),l&&V.default.createElement("span",{className:"acv-md-lang"},l)));continue}if(!r.trim()){s+=1;continue}let i=$e.exec(r);if(i){let l=Math.min(i[1].length,4),n=`h${l}`;u.push(V.default.createElement(n,{key:`b${o++}`,className:`acv-md-h${l}`},re(i[2],`h${o}`))),s+=1;continue}if(/^\s*(-{3,}|\*{3,})\s*$/.test(r)){u.push(V.default.createElement("hr",{key:`b${o++}`,className:"acv-md-hr"})),s+=1;continue}if(r.includes("|")&&pa.test(t[s+1]||"")){let l=Me(r);s+=2;let n=[];for(;s<t.length&&t[s].includes("|")&&t[s].trim();)n.push(Me(t[s])),s+=1;u.push(V.default.createElement("div",{key:`b${o++}`,className:"acv-md-table-wrap"},V.default.createElement("table",{className:"acv-md-table"},V.default.createElement("thead",null,V.default.createElement("tr",null,l.map((d,p)=>V.default.createElement("th",{key:p},re(d,`th${p}`))))),V.default.createElement("tbody",null,n.map((d,p)=>V.default.createElement("tr",{key:p},l.map((x,z)=>V.default.createElement("td",{key:z},re(d[z]||"",`td${p}-${z}`)))))))));continue}if(/^\s*>\s?/.test(r)){let l=[];for(;s<t.length&&/^\s*>\s?/.test(t[s]);)l.push(t[s].replace(/^\s*>\s?/,"")),s+=1;u.push(V.default.createElement("blockquote",{key:`b${o++}`,className:"acv-md-quote"},V.default.createElement(ce,{text:l.join(`
`)})));continue}if(oe.test(r)){let l=/^\s*\d+[.)]\s+/.test(r),n=[];for(;s<t.length&&oe.test(t[s]);)for(n.push(t[s].replace(oe,"")),s+=1;s<t.length&&t[s].trim()&&/^\s{2,}/.test(t[s])&&!oe.test(t[s]);)n[n.length-1]+=` ${t[s].trim()}`,s+=1;let d=l?"ol":"ul";u.push(V.default.createElement(d,{key:`b${o++}`,className:"acv-md-list"},n.map((p,x)=>V.default.createElement("li",{key:x},re(p,`li${x}`)))));continue}let v=[];for(;s<t.length&&t[s].trim()&&!$e.test(t[s])&&!oe.test(t[s])&&!/^\s*>/.test(t[s])&&!/^\s*```/.test(t[s])&&!/^\s*(-{3,}|\*{3,})\s*$/.test(t[s]);)v.push(t[s]),s+=1;let f=[];v.forEach((l,n)=>{n>0&&f.push(V.default.createElement("br",{key:`br${n}`})),f.push(...re(l,`p${n}`))}),u.push(V.default.createElement("p",{key:`b${o++}`,className:"acv-md-p"},f))}return V.default.createElement("div",{className:"acv-md"},u)}function Ie({api:e,id:a,me:t,onBack:u,backTo:s="home",onAuth:o,onDm:r,notify:i}){let[v,f]=w.default.useState(null),[l,n]=w.default.useState(""),[d,p]=w.default.useState(""),[x,z]=w.default.useState(!1),[U,P]=w.default.useState(""),[k,I]=w.default.useState(!1),D=w.default.useCallback(()=>{e.post(a).then(m=>{f(m),n("")}).catch(m=>n(m.message))},[e,a]);w.default.useEffect(()=>{D()},[D]);async function H(){z(!0),P("");try{await e.createComment(a,{body:d}),p(""),D(),i("\u8BC4\u8BBA\u5DF2\u53D1\u5E03")}catch(m){P(m.message)}finally{z(!1)}}async function j(m){I(!0);try{await e.setPostStatus(a,m),i(m==="hidden"?"\u5E16\u5B50\u5DF2\u9690\u85CF":m==="deleted"?"\u5E16\u5B50\u5DF2\u5220\u9664":"\u5E16\u5B50\u5DF2\u6062\u590D"),m==="deleted"?u():D()}catch(F){i(F.message,{error:!0})}finally{I(!1)}}let L=s==="space"?"\u2190 \u8FD4\u56DE\u677F\u5757":"\u2190 \u8FD4\u56DE\u9996\u9875";if(l)return w.default.createElement("div",{style:{paddingTop:22}},w.default.createElement("button",{type:"button",className:"acv-back",onClick:u},L),w.default.createElement("div",{className:"acv-loading"},l));if(!v)return w.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u5E16\u5B50\u2026");let{post:C,comments:Y}=v;return w.default.createElement("div",{className:"acv-post-wrap"},w.default.createElement("div",null,w.default.createElement("button",{type:"button",className:"acv-back",onClick:u},L)),w.default.createElement("div",{className:"acv-panel",style:{padding:"22px 24px"}},w.default.createElement("div",{className:"acv-post-meta"},w.default.createElement("span",{className:"acv-chip"},C.spaceTitle),w.default.createElement("span",{className:"acv-dot"}),Q(C.createdAt),w.default.createElement("span",{className:"acv-dot"}),C.viewCount," \u6B21\u6D4F\u89C8"),w.default.createElement("h1",{className:"acv-article-title"},C.title),w.default.createElement("div",{className:"acv-article-meta"},w.default.createElement(W,{api:e,me:t,handle:C.author.handle,onDm:r},w.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},R(C.author.displayName)),w.default.createElement("span",null,C.author.displayName)),w.default.createElement("span",{className:"acv-dot"}),w.default.createElement(W,{api:e,me:t,handle:C.author.handle,onDm:r},w.default.createElement("span",null,"@",C.author.handle)),t?.role==="admin"&&w.default.createElement("span",{className:"acv-mod-actions"},w.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:k,onClick:()=>j("hidden")},"\u9690\u85CF"),w.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:k,onClick:()=>j("deleted")},"\u5220\u9664"))),w.default.createElement("div",{className:"acv-prose acv-prose--md"},w.default.createElement(ce,{text:C.body}))),w.default.createElement("div",{className:"acv-panel",style:{padding:"18px 24px"}},w.default.createElement("div",{className:"acv-section-head"},w.default.createElement("h2",{className:"acv-section-title"},"\u8BC4\u8BBA"),w.default.createElement("span",{className:"acv-section-note"},Y.length," \u6761")),Y.length===0&&w.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u8BF4\u70B9\u4EC0\u4E48\u3002"),Y.map(m=>w.default.createElement("div",{key:m.id,className:"acv-comment"},w.default.createElement(W,{api:e,me:t,handle:m.author.handle,onDm:r},w.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},R(m.author.displayName))),w.default.createElement("div",{className:"acv-comment-main"},w.default.createElement("div",{className:"acv-comment-head"},w.default.createElement(W,{api:e,me:t,handle:m.author.handle,onDm:r},w.default.createElement("span",{className:"acv-comment-author"},m.author.displayName)),w.default.createElement("span",{className:"acv-comment-time"},Q(m.createdAt))),w.default.createElement("p",{className:"acv-comment-body"},m.body)))),w.default.createElement("div",{style:{marginTop:14}},!t&&w.default.createElement("div",{className:"acv-notice"},"\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\u3002",w.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:o},"\u767B\u5F55")),t&&!t.emailVerified&&w.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u8BC4\u8BBA\u3002"),t?.emailVerified&&w.default.createElement(w.default.Fragment,null,U&&w.default.createElement("div",{className:"acv-error"},U),w.default.createElement("textarea",{className:"acv-textarea",value:d,placeholder:"\u5199\u4E00\u6761\u8BC4\u8BBA\u2026",onChange:m=>p(m.target.value)}),w.default.createElement("div",{className:"acv-row"},w.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:x||!d.trim(),onClick:H},x?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u8868\u8BC4\u8BBA"))))))}var N=J(require("react"),1),va=["login","register","forgot"];function Ue({api:e,initialMode:a="login",onClose:t,onDone:u,notify:s}){let[o,r]=N.default.useState(va.includes(a)?a:"login"),[i,v]=N.default.useState(""),[f,l]=N.default.useState(""),[n,d]=N.default.useState(""),[p,x]=N.default.useState(""),[z,U]=N.default.useState(null),[P,k]=N.default.useState(!1),[I,D]=N.default.useState(""),[H,j]=N.default.useState(""),L=N.default.useCallback(()=>{e.captcha().then(U).catch(()=>U(null))},[e]);N.default.useEffect(()=>{o==="register"&&L()},[o,L]);function C($){r($),D(""),j(""),x("")}async function Y($){$.preventDefault(),k(!0),D("");try{let h=await e.login({handle:i,password:n});e.setToken(h.token),u(h.account)}catch(h){D(h.message)}finally{k(!1)}}async function m($){$.preventDefault(),k(!0),D("");try{let h=await e.register({handle:i,email:f,password:n,captchaId:z?.id,captchaAnswer:p}),M=await e.login({handle:i,password:n});e.setToken(M.token),j(h.mail?.delivered?"\u6CE8\u518C\u6210\u529F\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\u3002\u70B9\u90AE\u4EF6\u91CC\u7684\u94FE\u63A5\u5C31\u80FD\u53D1\u5E16\u3002":"\u6CE8\u518C\u6210\u529F\u3002\u672C\u5730\u6CA1\u914D SMTP\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u7ECF\u6253\u5230\u670D\u52A1\u7AEF\u65E5\u5FD7\u91CC\u4E86\u3002"),u(M.account)}catch(h){D(h.message),L(),x("")}finally{k(!1)}}async function F($){$.preventDefault(),k(!0),D("");try{let h=await e.forgotPassword(f.trim());j(h?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u670D\u52A1\u5668\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${h.verifyLink}`:"\u5982\u679C\u8FD9\u4E2A\u90AE\u7BB1\u6CE8\u518C\u8FC7\uFF0C\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u5C31\u80FD\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(h){D(h.message)}finally{k(!1)}}return N.default.createElement("div",{className:"acv-overlay",onClick:t},N.default.createElement("div",{className:"acv-modal",onClick:$=>$.stopPropagation()},N.default.createElement("h3",{className:"acv-modal-title"},o==="login"?"\u767B\u5F55 Achoverse":o==="register"?"\u6CE8\u518C Achoverse":"\u5FD8\u8BB0\u5BC6\u7801"),N.default.createElement("p",{className:"acv-modal-sub"},o==="login"?"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002":o==="register"?"\u6CE8\u518C\u540E\u8981\u9A8C\u8BC1\u90AE\u7BB1\u624D\u80FD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002":"\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1\uFF0C\u6211\u4EEC\u53D1\u4E00\u5C01\u5E26\u91CD\u7F6E\u94FE\u63A5\u7684\u90AE\u4EF6\u3002"),o!=="forgot"&&N.default.createElement("div",{className:"acv-switch"},N.default.createElement("button",{type:"button",className:o==="login"?"is-active":"",onClick:()=>C("login")},"\u767B\u5F55"),N.default.createElement("button",{type:"button",className:o==="register"?"is-active":"",onClick:()=>C("register")},"\u6CE8\u518C")),I&&N.default.createElement("div",{className:"acv-error"},I),H&&N.default.createElement("div",{className:"acv-notice"},H),o==="forgot"&&N.default.createElement("form",{onSubmit:F},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u90AE\u7BB1"),N.default.createElement("input",{className:"acv-input",type:"email",value:f,onChange:$=>l($.target.value),placeholder:"\u6CE8\u518C\u65F6\u7528\u7684\u90AE\u7BB1"})),N.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},N.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>C("login")},"\u8FD4\u56DE\u767B\u5F55"),N.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!f.trim()},P?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u91CD\u7F6E\u90AE\u4EF6"))),o==="login"&&N.default.createElement("form",{onSubmit:Y},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u7528\u6237\u540D"),N.default.createElement("input",{className:"acv-input",value:i,autoComplete:"username",placeholder:"\u4F60\u7684\u7528\u6237\u540D",onChange:$=>v($.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u5BC6\u7801"),N.default.createElement("input",{className:"acv-input",type:"password",value:n,autoComplete:"current-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:$=>d($.target.value)})),N.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},N.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>C("forgot")},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),N.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!i||!n},P?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))),o==="register"&&N.default.createElement("form",{onSubmit:m},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u7528\u6237\u540D"),N.default.createElement("input",{className:"acv-input",value:i,autoComplete:"username",placeholder:"3-24 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF",onChange:$=>v($.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u90AE\u7BB1"),N.default.createElement("input",{className:"acv-input",type:"email",value:f,autoComplete:"email",placeholder:"\u7528\u6765\u6536\u9A8C\u8BC1\u94FE\u63A5",onChange:$=>l($.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u5BC6\u7801"),N.default.createElement("input",{className:"acv-input",type:"password",value:n,autoComplete:"new-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:$=>d($.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u9A8C\u8BC1\u7801"),N.default.createElement("div",{className:"acv-captcha-row"},N.default.createElement("input",{className:"acv-input",value:p,maxLength:8,placeholder:"\u770B\u53F3\u8FB9",onChange:$=>x($.target.value)}),N.default.createElement("button",{type:"button",className:"acv-captcha-img",onClick:L,title:"\u6362\u4E00\u5F20"},z?N.default.createElement("span",{dangerouslySetInnerHTML:{__html:z.svg}}):N.default.createElement("span",{className:"acv-chip"},"\u52A0\u8F7D\u4E2D")))),N.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},N.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),N.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!i||!n||!f},P?"\u6CE8\u518C\u4E2D\u2026":"\u6CE8\u518C")))))}var c=J(require("react"),1);var ma={title:"",slug:"",subtitle:"",description:"",accent:"#F53FA6",accentTo:"#FF7A45",zones:["home"],motif:"diffusion"},ua=[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR \u4E13\u533A"}];function fa({api:e,me:a,onDm:t,notify:u}){let[s,o]=c.default.useState(null),[r,i]=c.default.useState(""),[v,f]=c.default.useState(""),l=c.default.useCallback(()=>{e.pendingAccounts().then(d=>{o(d.accounts),i("")}).catch(d=>i(d.message))},[e]);c.default.useEffect(()=>{l()},[l]);async function n(d){f(d.id);try{await e.verifyAccount(d.id),u(`\u5DF2\u653E\u884C @${d.handle}`),l()}catch(p){u(p.message,{error:!0})}finally{f("")}}return r?c.default.createElement("div",{className:"acv-error"},r):s?s.length===0?c.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5F85\u9A8C\u8BC1\u7684\u8D26\u53F7"):s.map(d=>c.default.createElement("div",{key:d.id,className:"acv-member",style:{padding:"12px 2px"}},c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},c.default.createElement(W,{api:e,me:a,handle:d.handle,onDm:t},c.default.createElement("span",null,d.displayName)," ",c.default.createElement("span",{className:"acv-member-meta"},"@",d.handle))),c.default.createElement("span",{className:"acv-member-meta"},d.email," \xB7 \u6CE8\u518C\u4E8E ",Q(d.createdAt))),c.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"6px 14px",fontSize:13},disabled:v===d.id,onClick:()=>n(d)},v===d.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C"))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function ha({api:e,space:a,onDone:t,onCancel:u,notify:s}){let[o,r]=c.default.useState(a?{title:a.title,slug:a.slug,subtitle:a.subtitle,description:a.description,accent:a.accent,accentTo:a.accentTo,zones:a.zones?.length?a.zones:["home"],motif:a.motif||"diffusion"}:ma),[i,v]=c.default.useState(!1),[f,l]=c.default.useState(""),n=(p,x)=>r(z=>({...z,[p]:x}));async function d(){v(!0),l("");try{a?await e.updateSpace(a.id,o):await e.createSpace(o),s(a?"\u677F\u5757\u5DF2\u66F4\u65B0":`\u677F\u5757\u300C${o.title}\u300D\u5DF2\u521B\u5EFA`),t()}catch(p){l(p.message)}finally{v(!1)}}return c.default.createElement("div",{className:"acv-editor"},f&&c.default.createElement("div",{className:"acv-error"},f),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u540D\u79F0"),c.default.createElement("input",{className:"acv-input",value:o.title,maxLength:24,onChange:p=>n("title",p.target.value),placeholder:"\u6BD4\u5982\uFF1A\u4F5C\u54C1\u5C55\u793A"})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u6807\u8BC6\uFF08\u7528\u4E8E\u94FE\u63A5\uFF0C\u7559\u7A7A\u81EA\u52A8\u751F\u6210\uFF09"),c.default.createElement("input",{className:"acv-input",value:o.slug,maxLength:32,disabled:!!a,onChange:p=>n("slug",p.target.value.toLowerCase()),placeholder:"works"})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u4E00\u53E5\u8BDD\u4ECB\u7ECD"),c.default.createElement("input",{className:"acv-input",value:o.subtitle,maxLength:60,onChange:p=>n("subtitle",p.target.value)})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u8BF4\u660E"),c.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:o.description,maxLength:300,onChange:p=>n("description",p.target.value)})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u663E\u793A\u5728"),c.default.createElement("div",{className:"acv-zone-picker"},ua.map(p=>{let x=o.zones.includes(p.key);return c.default.createElement("button",{key:p.key,type:"button",className:x?"acv-zone-option is-active":"acv-zone-option",onClick:()=>r(z=>{let U=x?z.zones.filter(P=>P!==p.key):[...z.zones,p.key];return{...z,zones:U.length?U:["home"]}})},c.default.createElement("span",{className:"acv-zone-tick"},x?"\u2713":""),p.label)})),c.default.createElement("span",{className:"acv-field-hint"},"\u53EF\u4EE5\u591A\u9009\uFF1A\u540C\u65F6\u52FE\u9009\u5C31\u4E24\u4E2A\u5730\u65B9\u90FD\u663E\u793A")),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u5C01\u9762\u6784\u56FE"),c.default.createElement("div",{className:"acv-zone-picker"},Ne.map(p=>c.default.createElement("button",{key:p.key,type:"button",className:o.motif===p.key?"acv-zone-option is-active":"acv-zone-option",onClick:()=>n("motif",p.key)},p.label))),c.default.createElement("span",{className:"acv-field-hint"},"\u534A\u900F\u660E\u51E0\u4F55\u56FE\u5F62\uFF0C\u753B\u5728\u6E10\u53D8\u4E0A\u9762")),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u5361\u7247\u6E10\u53D8"),c.default.createElement("div",{className:"acv-color-row"},c.default.createElement("input",{type:"color",className:"acv-color",value:o.accent,onChange:p=>n("accent",p.target.value)}),c.default.createElement("input",{type:"color",className:"acv-color",value:o.accentTo,onChange:p=>n("accentTo",p.target.value)}),c.default.createElement("span",{className:"acv-space-cover acv-color-preview",style:{background:`linear-gradient(120deg, ${o.accent}, ${o.accentTo})`}}))),c.default.createElement("div",{className:"acv-row"},c.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:u},"\u53D6\u6D88"),c.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:i||!o.title.trim(),onClick:d},i?"\u4FDD\u5B58\u4E2D\u2026":a?"\u4FDD\u5B58":"\u521B\u5EFA\u677F\u5757")))}function ga({api:e,me:a,onDm:t,notify:u}){let[s,o]=c.default.useState(null),[r,i]=c.default.useState(""),[v,f]=c.default.useState(""),l=c.default.useCallback(()=>{e.adminUsers(r.trim()).then(d=>o(d.users)).catch(d=>u(d.message,{error:!0}))},[e,r,u]);c.default.useEffect(()=>{l()},[l]);async function n(d){f(d.id);try{await e.verifyAccount(d.id),u(`\u5DF2\u653E\u884C @${d.handle}`),l()}catch(p){u(p.message,{error:!0})}finally{f("")}}return s?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"acv-inline",style:{marginBottom:12}},c.default.createElement("input",{className:"acv-input",placeholder:"\u641C\u7D22\u7528\u6237\u540D\u6216\u6635\u79F0",value:r,onChange:d=>i(d.target.value)}),c.default.createElement("button",{type:"button",className:"acv-btn",onClick:l},"\u641C\u7D22")),s.length===0&&c.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5339\u914D\u7684\u7528\u6237"),s.map(d=>c.default.createElement("div",{key:d.id,className:"acv-admin-row"},c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},c.default.createElement(W,{api:e,me:a,handle:d.handle,onDm:t},c.default.createElement("span",null,d.displayName),c.default.createElement("span",{className:"acv-member-meta"}," @",d.handle)),d.role==="admin"&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u7BA1\u7406\u5458"),!d.emailVerified&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u672A\u9A8C\u8BC1"),!d.allowDm&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u5173\u79C1\u4FE1")),c.default.createElement("span",{className:"acv-member-meta"},d.email||"\uFF08\u65E0\u90AE\u7BB1\uFF09"," \xB7 ",d.postCount," \u4E2A\u5E16\u5B50 \xB7 \u6CE8\u518C\u4E8E ",Q(d.createdAt))),!d.emailVerified&&c.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},disabled:v===d.id,onClick:()=>n(d)},v===d.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C")))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function ba({api:e,notify:a}){let[t,u]=c.default.useState(null),[s,o]=c.default.useState(null),[r,i]=c.default.useState(""),v=c.default.useCallback(()=>{e.adminSpaces().then(l=>u(l.spaces)).catch(l=>a(l.message,{error:!0}))},[e,a]);c.default.useEffect(()=>{v()},[v]);async function f(l){let n=!l.archivedAt;if(!(n&&!window.confirm(`\u5220\u9664\u677F\u5757\u300C${l.title}\u300D\uFF1F\u677F\u5757\u4F1A\u4ECE\u9996\u9875\u6D88\u5931\uFF0C\u5E16\u5B50\u4ECD\u4FDD\u7559\u5728\u5E93\u91CC\u3002`))){i(l.id);try{await e.archiveSpace(l.id,n),a(n?"\u677F\u5757\u5DF2\u5220\u9664":"\u677F\u5757\u5DF2\u6062\u590D"),v()}catch(d){a(d.message,{error:!0})}finally{i("")}}}return t?c.default.createElement(c.default.Fragment,null,s?c.default.createElement(ha,{api:e,space:s==="new"?null:s,notify:a,onCancel:()=>o(null),onDone:()=>{o(null),v()}}):c.default.createElement("div",{className:"acv-row",style:{justifyContent:"flex-start",marginBottom:6}},c.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>o("new")},"\u65B0\u5EFA\u677F\u5757")),t.map(l=>c.default.createElement("div",{key:l.id,className:l.archivedAt?"acv-admin-row is-archived":"acv-admin-row"},c.default.createElement(ve,{space:l,showBadge:!1,showEdition:!1,className:"acv-admin-swatch"}),c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},l.title,c.default.createElement("span",{className:"acv-member-meta"}," /",l.slug),l.archivedAt&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:8}},"\u5DF2\u5220\u9664")),c.default.createElement("span",{className:"acv-member-meta"},l.postCount," \u4E2A\u5E16\u5B50 \xB7 ",l.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${Q(l.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u5E16\u5B50",l.zones?.map(n=>c.default.createElement("span",{key:n,className:"acv-chip",style:{marginLeft:6}},n==="arvr"?"AR/VR":"\u9996\u9875")))),c.default.createElement("span",{style:{display:"flex",gap:6}},c.default.createElement("button",{type:"button",className:"acv-btn",style:{padding:"5px 12px",fontSize:12},onClick:()=>o(l)},"\u7F16\u8F91"),c.default.createElement("button",{type:"button",className:"acv-btn ghost",style:{padding:"5px 12px",fontSize:12},disabled:r===l.id,onClick:()=>f(l)},l.archivedAt?"\u6062\u590D":"\u5220\u9664"))))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Be({api:e,me:a,onDm:t,onBack:u,notify:s}){let[o,r]=c.default.useState("spaces"),[i,v]=c.default.useState(null);return c.default.useEffect(()=>{e.pendingAccounts().then(f=>v(f.accounts.length)).catch(()=>v(null))},[e,o]),c.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},c.default.createElement("div",null,c.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),c.default.createElement("div",{className:"acv-admin-layout"},c.default.createElement("nav",{className:"acv-admin-nav","aria-label":"\u7BA1\u7406"},c.default.createElement("button",{type:"button",className:o==="spaces"?"is-active":"",onClick:()=>r("spaces")},"\u677F\u5757"),c.default.createElement("button",{type:"button",className:o==="users"?"is-active":"",onClick:()=>r("users")},"\u7528\u6237"),c.default.createElement("button",{type:"button",className:o==="accounts"?"is-active":"",onClick:()=>r("accounts")},c.default.createElement("span",null,"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),i>0&&c.default.createElement("span",{className:"acv-badge"},i))),c.default.createElement("section",{className:"acv-panel acv-admin-content",style:{padding:"20px 22px"}},c.default.createElement("div",{className:"acv-section-head"},c.default.createElement("h2",{className:"acv-section-title"},o==="spaces"?"\u677F\u5757":o==="users"?"\u7528\u6237":"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),c.default.createElement("span",{className:"acv-section-note"},o==="spaces"?"\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u677F\u5757\uFF1B\u5220\u9664\u540E\u53EF\u4ECE\u7BA1\u7406\u91CC\u6062\u590D":o==="users"?"\u5168\u90E8\u8D26\u53F7\uFF1B\u672A\u9A8C\u8BC1\u7684\u53EF\u4EE5\u76F4\u63A5\u653E\u884C":"\u6CA1\u914D SMTP \u65F6\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u4E0D\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u4EBA\u5DE5\u653E\u884C")),o==="spaces"&&c.default.createElement(ba,{api:e,notify:s}),o==="users"&&c.default.createElement(ga,{api:e,me:a,onDm:t,notify:s}),o==="accounts"&&c.default.createElement(fa,{api:e,me:a,onDm:t,notify:s}))))}var se=J(require("react"),1);function Fe({api:e,zone:a,title:t,note:u,onOpenSpace:s}){let[o,r]=se.default.useState(null),[i,v]=se.default.useState("");return se.default.useEffect(()=>{let f=!1;return e.zoneSpaces(a).then(l=>{f||(r(l.spaces),v(""))}).catch(l=>{f||v(l.message)}),()=>{f=!0}},[e,a]),se.default.createElement("div",{className:"acv-zone"},se.default.createElement("div",{className:"acv-section-head"},se.default.createElement("h2",{className:"acv-section-title"},t),se.default.createElement("span",{className:"acv-section-note"},u)),i&&se.default.createElement("div",{className:"acv-empty"},i),!o&&!i&&se.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),o&&o.length===0&&se.default.createElement("div",{className:"acv-panel"},se.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u4E13\u533A\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u300C\u7BA1\u7406 \u2192 \u677F\u5757\u300D\u91CC\u628A\u677F\u5757\u653E\u8FDB\u300C",t,"\u300D\u3002")),se.default.createElement("div",{className:"acv-zone-grid"},o?.map(f=>se.default.createElement(he,{key:f.id,space:f,onOpen:s}))))}var q=J(require("react"),1);function Ve({api:e,me:a,onDm:t,onOpenPost:u}){let[s,o]=q.default.useState(""),[r,i]=q.default.useState(null),[v,f]=q.default.useState(!1),[l,n]=q.default.useState(!1),d=q.default.useRef(null);return q.default.useEffect(()=>{if(!v)return;let p=x=>{d.current&&!d.current.contains(x.target)&&f(!1)};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[v]),q.default.useEffect(()=>{let p=s.trim();if(p.length===0){i(null);return}let x=setTimeout(async()=>{n(!0);try{let z=await e.search(p);i(z.posts||[]),f(!0)}catch{i([])}finally{n(!1)}},280);return()=>clearTimeout(x)},[e,s]),q.default.createElement("div",{className:"acv-search",ref:d},q.default.createElement("span",{className:"acv-search-icon","aria-hidden":"true"},q.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",focusable:"false"},q.default.createElement("circle",{cx:"7",cy:"7",r:"4.6",stroke:"currentColor",strokeWidth:"1.6"}),q.default.createElement("path",{d:"M10.5 10.5 14 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))),q.default.createElement("input",{className:"acv-search-input",type:"text",value:s,placeholder:"\u641C\u7D22\u5E16\u5B50","aria-label":"\u641C\u7D22\u5E16\u5B50",autoComplete:"off",spellCheck:!1,onChange:p=>o(p.target.value),onFocus:()=>s.trim()&&f(!0)}),v&&q.default.createElement("div",{className:"acv-search-panel"},l&&q.default.createElement("div",{className:"acv-search-empty"},"\u641C\u7D22\u4E2D\u2026"),!l&&r?.length===0&&q.default.createElement("div",{className:"acv-search-empty"},"\u6CA1\u6709\u627E\u5230\u300C",s.trim(),"\u300D"),r?.map(p=>q.default.createElement("button",{key:p.id,type:"button",className:"acv-search-item",onClick:()=>{f(!1),o(""),u(p.id)}},q.default.createElement("span",{className:"acv-search-title"},p.title),q.default.createElement("span",{className:"acv-search-meta"},p.spaceSlug," \xB7"," ",q.default.createElement(W,{api:e,me:a,handle:p.author?.handle,onDm:t},q.default.createElement("span",null,p.author?.displayName||p.author?.handle))," ","\xB7 ",Q(p.createdAt))))))}var y=J(require("react"),1);function ge({title:e,note:a,children:t}){return y.default.createElement("div",{className:"acv-settings-section"},y.default.createElement("div",{className:"acv-section-head"},y.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},e),a&&y.default.createElement("span",{className:"acv-section-note"},a)),t)}function He({api:e,me:a,onBack:t,onRefreshMe:u,notify:s}){let[o,r]=y.default.useState(a?.displayName||""),[i,v]=y.default.useState(a?.bio||""),[f,l]=y.default.useState(a?.allowDm!==!1),[n,d]=y.default.useState(""),[p,x]=y.default.useState(""),[z,U]=y.default.useState(""),[P,k]=y.default.useState(""),[I,D]=y.default.useState(""),[H,j]=y.default.useState("");if(y.default.useEffect(()=>{r(a?.displayName||""),v(a?.bio||""),l(a?.allowDm!==!1)},[a]),!a)return y.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");async function L(C,Y,m){k(C),D("");try{await Y(),s(m),await u?.()}catch(F){D(F.message)}finally{k("")}}return y.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:820}},y.default.createElement("div",null,y.default.createElement("button",{type:"button",className:"acv-back",onClick:t},"\u2190 \u8FD4\u56DE\u9996\u9875")),I&&y.default.createElement("div",{className:"acv-error"},I),y.default.createElement("div",{className:"acv-panel",style:{padding:"20px 22px"}},y.default.createElement("div",{className:"acv-section-head"},y.default.createElement("h2",{className:"acv-section-title"},"\u8D26\u53F7\u8BBE\u7F6E"),y.default.createElement("span",{className:"acv-section-note"},"@",a.handle)),y.default.createElement(ge,{title:"\u8D44\u6599",note:"\u6635\u79F0\u548C\u7B80\u4ECB\u4F1A\u663E\u793A\u5728\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u4E0A"},y.default.createElement("div",{className:"acv-field"},y.default.createElement("label",null,"\u6635\u79F0"),y.default.createElement("input",{className:"acv-input",value:o,maxLength:24,onChange:C=>r(C.target.value)})),y.default.createElement("div",{className:"acv-field"},y.default.createElement("label",null,"\u7B80\u4ECB"),y.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:i,maxLength:200,onChange:C=>v(C.target.value)})),y.default.createElement("div",{className:"acv-field"},y.default.createElement("label",null,"\u63A5\u6536\u79C1\u4FE1"),y.default.createElement("div",{className:"acv-zone-picker"},y.default.createElement("button",{type:"button",className:f?"acv-zone-option is-active":"acv-zone-option",onClick:()=>l(!0)},"\u5141\u8BB8\u522B\u4EBA\u7ED9\u6211\u53D1\u79C1\u4FE1"),y.default.createElement("button",{type:"button",className:f?"acv-zone-option":"acv-zone-option is-active",onClick:()=>l(!1)},"\u5173\u95ED\u79C1\u4FE1"))),y.default.createElement("div",{className:"acv-row"},y.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:P==="profile",onClick:()=>L("profile",()=>e.updateProfile({displayName:o,bio:i,allowDm:f}),"\u8D44\u6599\u5DF2\u4FDD\u5B58")},P==="profile"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8D44\u6599"))),y.default.createElement(ge,{title:"\u90AE\u7BB1",note:a.emailVerified?"\u5DF2\u9A8C\u8BC1":"\u672A\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u540E\u624D\u80FD\u53D1\u5E16\u8BC4\u8BBA"},y.default.createElement("p",{className:"acv-space-sub",style:{marginBottom:10}},"\u5F53\u524D\u90AE\u7BB1\uFF1A",y.default.createElement("strong",null,a.email||"\uFF08\u6CA1\u6709\uFF09")),y.default.createElement("div",{className:"acv-field"},y.default.createElement("label",null,"\u6362\u6210\u65B0\u90AE\u7BB1"),y.default.createElement("div",{className:"acv-inline"},y.default.createElement("input",{className:"acv-input",type:"email",placeholder:"new@example.com",value:n,onChange:C=>d(C.target.value)}),y.default.createElement("button",{type:"button",className:"acv-btn",disabled:P==="email"||!n.trim(),onClick:()=>L("email",async()=>{(await e.requestEmailChange(n.trim()))?.verifyLink&&s("\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7"),d("")},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u5230\u65B0\u90AE\u7BB1\uFF0C\u70B9\u5F00\u94FE\u63A5\u624D\u751F\u6548")},"\u53D1\u9001\u9A8C\u8BC1"))),!a.emailVerified&&y.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:P==="resend",onClick:()=>L("resend",async()=>{let C=await e.resend();if(C?.verifyLink)throw new Error(`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\uFF1A${C.verifyLink}`)},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u91CD\u53D1")},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6")),y.default.createElement(ge,{title:"\u5BC6\u7801",note:"\u81F3\u5C11 8 \u4F4D"},y.default.createElement("div",{className:"acv-field"},y.default.createElement("label",null,"\u5F53\u524D\u5BC6\u7801"),y.default.createElement("input",{className:"acv-input",type:"password",value:p,onChange:C=>x(C.target.value)})),y.default.createElement("div",{className:"acv-field"},y.default.createElement("label",null,"\u65B0\u5BC6\u7801"),y.default.createElement("input",{className:"acv-input",type:"password",value:z,onChange:C=>U(C.target.value)})),y.default.createElement("div",{className:"acv-row"},y.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:P==="password"||!p||!z,onClick:()=>L("password",async()=>{await e.changePassword({currentPassword:p,newPassword:z}),x(""),U("")},"\u5BC6\u7801\u5DF2\u66F4\u65B0")},P==="password"?"\u66F4\u65B0\u4E2D\u2026":"\u66F4\u65B0\u5BC6\u7801")),y.default.createElement("p",{className:"acv-field-hint"},"\u5FD8\u4E86\u5F53\u524D\u5BC6\u7801\uFF1F\u53EF\u4EE5\u7ED9 ",a.email||"\uFF08\u6CA1\u6709\u90AE\u7BB1\uFF09"," \u53D1\u4E00\u5C01\u91CD\u7F6E\u90AE\u4EF6\uFF0C\u70B9\u94FE\u63A5\u8BBE\u65B0\u5BC6\u7801\u3002"),H&&y.default.createElement("div",{className:"acv-notice"},H),y.default.createElement("div",{className:"acv-row"},y.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:P==="reset-mail"||!a.email,onClick:async()=>{k("reset-mail"),D(""),j("");try{let C=await e.forgotPassword(a.email);j(C?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${C.verifyLink}`:"\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(C){D(C.message)}finally{k("")}}},P==="reset-mail"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u90AE\u4EF6\u91CD\u7F6E\u5BC6\u7801")))))}var S=J(require("react"),1);function xa(e,a){if(!e||e.thread?.id!==a.thread?.id)return a;let t=new Map(e.messages.map(s=>[s.id,s]));for(let s of a.messages)t.set(s.id,s);let u=[...t.values()].sort((s,o)=>s.createdAt-o.createdAt||(s.id<o.id?-1:1));return{...a,messages:u}}function je({api:e,me:a,initialThreadId:t,onBack:u,onDm:s,notify:o}){let[r,i]=S.default.useState(null),[v,f]=S.default.useState(t||null),[l,n]=S.default.useState(null),[d,p]=S.default.useState(""),[x,z]=S.default.useState(!1),[U,P]=S.default.useState(!1),[k,I]=S.default.useState(""),D=S.default.useRef(null),H=S.default.useCallback(()=>{a&&e.dmThreads().then(m=>{i(m.threads),!v&&m.threads.length&&f(m.threads[0].id)}).catch(m=>I(m.message))},[e,a,v]),j=S.default.useCallback(m=>{n(F=>xa(F,m))},[]);S.default.useEffect(()=>{H()},[H]),S.default.useEffect(()=>{v&&e.dmThread(v).then(m=>{j(m),I(""),H()}).catch(m=>I(m.message))},[e,v,j,H]),S.default.useEffect(()=>{if(!a||!v)return;let m=setInterval(()=>{document.hidden||e.dmThread(v).then(F=>{j(F),H()}).catch(()=>{})},8e3);return()=>clearInterval(m)},[e,a,v,j,H]),S.default.useEffect(()=>{let m=D.current;m&&(m.scrollTop=m.scrollHeight)},[l]);async function L(){let m=d.trim();if(!(!m||!v)){z(!0);try{await e.dmSend(v,m),p("");let F=await e.dmThread(v);j(F),H()}catch(F){o(F.message,{error:!0})}finally{z(!1)}}}async function C(){let m=l?.messages?.[0];if(!(!m||!v||U)){P(!0);try{let F=await e.dmThread(v,m.createdAt);n($=>{if(!$)return F;let h=new Map(F.messages.map(A=>[A.id,A]));for(let A of $.messages)h.set(A.id,A);let M=[...h.values()].sort((A,E)=>A.createdAt-E.createdAt||(A.id<E.id?-1:1));return{...$,messages:M,total:F.total}})}catch(F){o(F.message,{error:!0})}finally{P(!1)}}}if(!a)return S.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");let Y=!!(l&&l.messages.length<l.total);return S.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},S.default.createElement("div",null,S.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),k&&S.default.createElement("div",{className:"acv-error"},k),S.default.createElement("div",{className:"acv-dm-layout"},S.default.createElement("aside",{className:"acv-panel acv-dm-list"},S.default.createElement("div",{className:"acv-section-head"},S.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},"\u79C1\u4FE1"),S.default.createElement("span",{className:"acv-section-note"},r?.length||0)),r?.length===0&&S.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u79C1\u4FE1"),r?.map(m=>S.default.createElement("button",{key:m.id,type:"button",className:m.id===v?"acv-dm-item is-active":"acv-dm-item",onClick:()=>f(m.id)},S.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},R(m.other?.displayName||m.other?.handle)),S.default.createElement("span",{className:"acv-dm-main"},S.default.createElement("span",{className:"acv-dm-name"},S.default.createElement(W,{api:e,me:a,handle:m.other?.handle,onDm:s},S.default.createElement("span",null,m.other?.displayName||m.other?.handle)),m.unread>0&&S.default.createElement("span",{className:"acv-badge"},m.unread)),S.default.createElement("span",{className:"acv-dm-preview"},m.lastMessage?.body||"\u8FD8\u6CA1\u6709\u6D88\u606F"))))),S.default.createElement("section",{className:"acv-panel acv-dm-pane"},!l&&S.default.createElement("div",{className:"acv-empty"},"\u9009\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB"),l&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"acv-dm-head"},S.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},R(l.thread.other?.displayName)),S.default.createElement(W,{api:e,me:a,handle:l.thread.other?.handle,onDm:s},S.default.createElement("span",{style:{fontWeight:600}},l.thread.other?.displayName),S.default.createElement("span",{className:"acv-member-meta"},"@",l.thread.other?.handle))),S.default.createElement("div",{className:"acv-dm-messages",ref:D},Y&&S.default.createElement("button",{type:"button",className:"acv-dm-more",disabled:U,onClick:C},U?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u65E9\u7684\u6D88\u606F"),l.messages.length===0&&S.default.createElement("div",{className:"acv-empty"},"\u6253\u4E2A\u62DB\u547C\u5427"),l.messages.map(m=>S.default.createElement("div",{key:m.id,className:m.mine?"acv-dm-msg is-mine":"acv-dm-msg"},S.default.createElement("div",{className:"acv-dm-bubble"},m.body),S.default.createElement("div",{className:"acv-dm-time"},Q(m.createdAt))))),S.default.createElement("div",{className:"acv-dm-composer"},S.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:d,placeholder:"\u5199\u70B9\u4EC0\u4E48\u2026\uFF08Enter \u53D1\u9001\uFF09",onChange:m=>p(m.target.value),onKeyDown:m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),L())}}),S.default.createElement("button",{type:"button",className:"acv-chat-send",disabled:x||!d.trim(),onClick:L,"aria-label":"\u53D1\u9001"},S.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},S.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}))))))))}var G=J(require("react"),1);function We({api:e,token:a,onDone:t,notify:u}){let[s,o]=G.default.useState(""),[r,i]=G.default.useState(""),[v,f]=G.default.useState(!1),[l,n]=G.default.useState("");async function d(p){if(p.preventDefault(),s!==r)return n("\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4");f(!0),n("");try{await e.resetPassword({token:a,password:s}),u("\u5BC6\u7801\u5DF2\u91CD\u7F6E\uFF0C\u8BF7\u7528\u65B0\u5BC6\u7801\u767B\u5F55"),t()}catch(x){n(x.message)}finally{f(!1)}}return G.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:460,paddingTop:40}},G.default.createElement("div",{className:"acv-panel",style:{padding:"24px"}},G.default.createElement("h2",{className:"acv-section-title"},"\u8BBE\u7F6E\u65B0\u5BC6\u7801"),G.default.createElement("p",{className:"acv-modal-sub"},"\u91CD\u7F6E\u540E\u6240\u6709\u5DF2\u767B\u5F55\u8BBE\u5907\u90FD\u4F1A\u9000\u51FA\u3002"),l&&G.default.createElement("div",{className:"acv-error"},l),G.default.createElement("form",{onSubmit:d},G.default.createElement("div",{className:"acv-field"},G.default.createElement("label",null,"\u65B0\u5BC6\u7801"),G.default.createElement("input",{className:"acv-input",type:"password",value:s,onChange:p=>o(p.target.value)})),G.default.createElement("div",{className:"acv-field"},G.default.createElement("label",null,"\u518D\u8F93\u4E00\u6B21"),G.default.createElement("input",{className:"acv-input",type:"password",value:r,onChange:p=>i(p.target.value)})),G.default.createElement("div",{className:"acv-row"},G.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:v||s.length<8},v?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u65B0\u5BC6\u7801")))))}function ya({me:e,mode:a,api:t,emailNotice:u,onDsh:s,onAuth:o,onLogout:r,onHome:i,onResend:v,onAdmin:f,onAccount:l,onDm:n,onDmUser:d,dmUnread:p=0,onOpenPost:x,tabs:z,activeTab:U,onSelectTab:P}){let[k,I]=g.default.useState(!1);return g.default.useEffect(()=>{if(!k)return;let D=()=>I(!1);return window.addEventListener("click",D),()=>window.removeEventListener("click",D)},[k]),g.default.createElement("div",{className:"acv-topbar"},g.default.createElement("div",{className:"acv-tabs"},z.map(D=>g.default.createElement("button",{key:D.key,type:"button",className:U===D.key?"acv-tab is-active":"acv-tab",onClick:()=>P(D.key)},D.label))),g.default.createElement(Ve,{api:t,me:e,onDm:d,onOpenPost:x}),g.default.createElement("div",{className:"acv-topbar-grow"}),g.default.createElement("div",{className:"acv-topbar-right"},a==="plugin"&&g.default.createElement("button",{type:"button",className:"acv-dsh",onClick:s,title:"\u548C DSH \u804A\u804A\u8FD9\u4E2A\u793E\u533A"},g.default.createElement("span",{className:"acv-dsh-dot"}),"DSH\u52A9\u624B"),a==="plugin"&&g.default.createElement("span",{className:"acv-divider"}),e?g.default.createElement("div",{className:"acv-relative"},g.default.createElement("button",{type:"button",className:"acv-user",onClick:D=>{D.stopPropagation(),I(H=>!H)}},g.default.createElement(W,{api:t,me:e,handle:e.handle,disabled:k},g.default.createElement("span",{className:"acv-avatar"},R(e.displayName||e.handle)),g.default.createElement("span",{className:"acv-user-name"},e.displayName||e.handle)),g.default.createElement("span",{className:"acv-caret"},"\u25BE")),k&&g.default.createElement("div",{className:"acv-menu",onClick:D=>D.stopPropagation()},g.default.createElement("div",{className:"acv-menu-note"},"@",e.handle," \xB7 ",e.role==="admin"?"\u7BA1\u7406\u5458":"\u6210\u5458"),g.default.createElement("div",{className:"acv-menu-group"},"\u4E2A\u4EBA\u7BA1\u7406"),g.default.createElement("button",{type:"button",onClick:()=>{I(!1),l()}},"\u8D26\u53F7\u8BBE\u7F6E"),g.default.createElement("button",{type:"button",onClick:()=>{I(!1),n()}},"\u79C1\u4FE1",p>0?` \xB7 ${p}`:""),!e.emailVerified&&g.default.createElement("button",{type:"button",onClick:()=>{I(!1),v()}},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6"),e.role==="admin"&&g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"acv-menu-group"},"\u7BA1\u7406\u5458"),g.default.createElement("button",{type:"button",onClick:()=>{I(!1),f()}},"\u793E\u533A\u7BA1\u7406")),g.default.createElement("div",{className:"acv-menu-group"}),g.default.createElement("button",{type:"button",onClick:()=>{I(!1),r()}},"\u9000\u51FA\u767B\u5F55"))):g.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>o("login")},"\u767B\u5F55")),u&&g.default.createElement("div",{style:{display:"none"}},u))}function qe({mode:e="site",base:a="",tokenStore:t,onDsh:u}){let s=g.default.useMemo(()=>we({base:a,credentials:e==="site"?"same-origin":"omit",token:t?.get()||null,onToken:E=>t?.set(E)}),[a,e,t]),[o,r]=g.default.useState(null),[i,v]=g.default.useState(null),[f,l]=g.default.useState("loading"),[n,d]=g.default.useState({name:"home"}),[p,x]=g.default.useState("home"),[z,U]=g.default.useState(0),[P,k]=g.default.useState(null),[I,D]=g.default.useState(null),[H,j]=g.default.useState(0),L=g.default.useCallback((E,{error:_=!1}={})=>{D({text:E,error:_,key:Date.now()})},[]);g.default.useEffect(()=>{if(!I)return;let E=setTimeout(()=>D(null),3200);return()=>clearTimeout(E)},[I]);let C=g.default.useCallback(async()=>{try{let E=await s.bootstrap();r(E.account||null),v(E.home||null)}catch{r(null)}finally{l("ready")}},[s]);g.default.useEffect(()=>{C()},[C]),g.default.useEffect(()=>{if(e!=="site")return;let _=new URLSearchParams(window.location.search).get("token");_&&window.location.pathname.startsWith("/reset")&&d({name:"reset",token:_})},[e]),g.default.useEffect(()=>{let E=()=>k("login");return window.addEventListener("achoverse:auth",E),()=>window.removeEventListener("achoverse:auth",E)},[]),g.default.useEffect(()=>{if(e!=="site")return;let E=new URLSearchParams(window.location.search),_=E.get("token");if(!_||!window.location.pathname.startsWith("/verify"))return;let te=E.get("kind");(te==="email"?s.confirmEmailChange(_):s.verify(_)).then(ue=>{r(ue.account||null),L(te==="email"?"\u65B0\u90AE\u7BB1\u5DF2\u751F\u6548\uFF0C\u9A8C\u8BC1\u4E5F\u5B8C\u6210\u4E86":"\u90AE\u7BB1\u9A8C\u8BC1\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u53D1\u5E16\u4E86"),window.history.replaceState({},"","/")}).catch(ue=>L(ue.message,{error:!0}))},[s,e,L]),g.default.useEffect(()=>{if(!o){U(0);return}let E=!1,_=()=>s.dmUnread().then(de=>{E||U(de.unread||0)}).catch(()=>{});_();let te=setInterval(_,3e4);return()=>{E=!0,clearInterval(te)}},[s,o]);let Y=async E=>{try{let _=await s.dmOpenWith({targetId:E.id});d({name:"dm",threadId:_.thread.id})}catch(_){L(_.message,{error:!0})}},m=E=>d({name:"space",slug:E}),F=(E,_)=>d({name:"post",id:E,from:_||{name:"home"}}),$=()=>{d({name:"home"}),j(E=>E+1),v(null)};return g.default.createElement("div",{className:e==="plugin"?"acv-root acv-root--panel":"acv-root"},g.default.createElement("div",{className:"acv-frame"},g.default.createElement(ya,{me:o,mode:e,api:s,onOpenPost:F,onDsh:()=>{if(u)return u();window.dispatchEvent(new CustomEvent("achoverse:open-dsh"))},onAuth:k,onLogout:async()=>{try{await s.logout()}catch{}s.setToken(null),r(null),L("\u5DF2\u7ECF\u9000\u51FA\u767B\u5F55"),$()},onHome:$,tabs:[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR"}],activeTab:p,onSelectTab:E=>{x(E),d({name:"home"})},onAdmin:()=>d({name:"admin"}),onAccount:()=>d({name:"account"}),onDm:()=>d({name:"dm"}),onDmUser:Y,dmUnread:z,onResend:async()=>{try{let E=await s.resend();L(E?.verifyLink?"\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7":"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001")}catch(E){L(E.message,{error:!0})}}}),n.name==="home"&&p==="arvr"&&g.default.createElement(Fe,{api:s,zone:"arvr",title:"AR/VR \u4E13\u533A",note:"\u4E3B\u9898\u4E13\u533A\uFF1A\u53EA\u6536\u5F55 AR/VR \u76F8\u5173\u7684\u677F\u5757",onOpenSpace:m}),n.name==="home"&&p==="home"&&f!=="ready"&&g.default.createElement("div",{className:"acv-main"},g.default.createElement("div",{className:"acv-col"},g.default.createElement("div",{className:"acv-skeleton"}),g.default.createElement("div",{className:"acv-skeleton"}),g.default.createElement("div",{className:"acv-skeleton"})),g.default.createElement("div",{className:"acv-col"},g.default.createElement("div",{className:"acv-skeleton",style:{height:260}}))),n.name==="home"&&p==="home"&&f==="ready"&&g.default.createElement(Pe,{initialData:i,key:H,api:s,me:o,onOpenSpace:m,onOpenPost:E=>F(E,{name:"home"}),onDm:Y}),n.name==="space"&&g.default.createElement(_e,{api:s,slug:n.slug,me:o,onBack:$,onOpenPost:E=>F(E,{name:"space",slug:n.slug}),onAuth:()=>k("login"),onDm:Y,notify:L}),n.name==="reset"&&g.default.createElement(We,{api:s,token:n.token,notify:L,onDone:()=>{window.history.replaceState({},"","/"),d({name:"home"}),k("login")}}),n.name==="account"&&g.default.createElement(He,{api:s,me:o,onBack:$,onRefreshMe:C,notify:L}),n.name==="dm"&&g.default.createElement(je,{api:s,me:o,initialThreadId:n.threadId,onBack:$,onDm:Y,notify:L}),n.name==="admin"&&g.default.createElement(Be,{api:s,me:o,onDm:Y,onBack:$,notify:L}),n.name==="post"&&g.default.createElement(Ie,{api:s,id:n.id,me:o,backTo:n.from?.name==="space"?"space":"home",onDm:Y,onBack:()=>n.from?.name==="space"?d({name:"space",slug:n.from.slug}):$(),onAuth:()=>k("login"),notify:L})),P&&g.default.createElement(Ue,{api:s,initialMode:P,onClose:()=>k(null),onDone:E=>{r(E),k(null),v(null),$(),L("\u767B\u5F55\u6210\u529F")},notify:L}),I&&g.default.createElement("div",{className:I.error?"acv-toast is-error":"acv-toast"},I.text))}var T=J(require("react"),1);function le(e,a=""){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,role:e,text:a,tools:[]}}async function wa({token:e,message:a,signal:t,onEvent:u}){let s=await fetch("/community/ai/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e,message:a}),signal:t});if(!s.ok||!s.body){let v=`HTTP ${s.status}`;try{v=(await s.json())?.error||v}catch{}throw new Error(v)}let o=s.body.getReader(),r=new TextDecoder,i="";for(;;){let{value:v,done:f}=await o.read();if(f)break;i+=r.decode(v,{stream:!0});let l;for(;(l=i.indexOf(`

`))>=0;){let n=i.slice(0,l);i=i.slice(l+2);for(let d of n.split(`
`)){if(!d.startsWith("data:"))continue;let p=d.slice(5).trim();if(p)try{u(JSON.parse(p))}catch{}}}}}function Ye({tokenStore:e,onClose:a,onLogin:t}){let[u,s]=T.default.useState(()=>[le("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),[o,r]=T.default.useState(""),[i,v]=T.default.useState(!1),[f,l]=T.default.useState(""),[n,d]=T.default.useState(()=>e?.get()||null),[p,x]=T.default.useState(""),[z,U]=T.default.useState(!1),[P,k]=T.default.useState(null),[I,D]=T.default.useState({}),[H,j]=T.default.useState(!1),L=T.default.useRef(null),C=T.default.useRef(null);T.default.useEffect(()=>()=>C.current?.abort(),[]),T.default.useEffect(()=>{let h=L.current;h&&(h.scrollTop=h.scrollHeight)},[u]),T.default.useEffect(()=>{let h=()=>{let A=e?.get()||null;A!==n&&(C.current?.abort(),s([le("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),k(null),x(""),l(""),d(A))},M=setInterval(h,1500);return window.addEventListener("achoverse:token-changed",h),window.addEventListener("storage",h),()=>{clearInterval(M),window.removeEventListener("achoverse:token-changed",h),window.removeEventListener("storage",h)}},[n,e]),T.default.useEffect(()=>{if(!n)return;let h=!1;return fetch("/community/ai/history",{headers:{authorization:`Bearer ${n}`},cache:"no-store"}).then(M=>{if(!M.ok)throw new Error("\u5386\u53F2\u8BFB\u53D6\u5931\u8D25");return M.json()}).then(M=>{if(h)return;let A=(M?.messages||[]).map(E=>({...le(E.role,E.text),id:`h-${Math.random().toString(36).slice(2,8)}`}));A.length&&s(A)}).catch(()=>{}),()=>{h=!0}},[n]);let Y=h=>s(M=>{let A=[...M],E={...A[A.length-1]};return A[A.length-1]=h(E),A});async function m(h){let M=String(h??o).trim();if(!M||i)return;let A=e?.get();if(!A){l("\u5148\u767B\u5F55\u793E\u533A\uFF0C\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u8BF4\u8BDD");return}l(""),v(!0),r(""),x("");let E=new AbortController;C.current=E,s(_=>[..._,le("user",M),le("assistant","")]);try{await wa({token:A,message:M,signal:E.signal,onEvent:_=>{e?.get()===A&&(_.type==="session"?x(_.sessionId):_.type==="question"?(k({callId:_.callId,questions:_.questions,sessionId:_.sessionId}),D({})):_.type==="text"?Y(te=>({...te,text:te.text?`${te.text}
${_.text}`:_.text})):_.type==="tool"?Y(te=>({...te,tools:_.phase==="call"?[...te.tools,_.name]:te.tools})):_.type==="error"&&l(_.error||"\u5BF9\u8BDD\u5931\u8D25"))}})}catch(_){_.name!=="AbortError"&&e?.get()===A&&l(_.message),/登录|401/.test(_.message)&&e?.get()===A&&(e?.set(null),d(null))}finally{C.current===E&&(C.current=null),v(!1),U(!1),k(null)}}async function F(){if(!(!P||H)){j(!0),l("");try{let h=await fetch("/community/ai/answer",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e?.get(),sessionId:P.sessionId,callId:P.callId,answers:P.questions.map(A=>({id:A.id,selected:I[A.id]?.selected||[],...I[A.id]?.custom?.trim()?{custom:I[A.id].custom.trim()}:{}}))})}),M=await h.json();if(!h.ok)throw new Error(M.error||"\u56DE\u7B54\u5931\u8D25");k(null)}catch(h){l(h.message)}finally{j(!1)}}}async function $(){if(!(!p||z)){U(!0);try{let h=await fetch("/community/ai/stop",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e?.get(),sessionId:p})}),M=await h.json();if(!h.ok)throw new Error(M.error||"\u505C\u6B62\u5931\u8D25");C.current?.abort()}catch(h){l(h.message)}finally{U(!1)}}}return T.default.createElement("div",{className:"acv-drawer",role:"dialog","aria-label":"DSH \u5BF9\u8BDD"},T.default.createElement("div",{className:"acv-drawer-head"},T.default.createElement("span",{className:"acv-dsh",style:{padding:"6px 14px"}},T.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),T.default.createElement("span",{style:{fontWeight:700}},"\u793E\u533A\u52A9\u624B"),T.default.createElement("span",{style:{flex:1}}),T.default.createElement("button",{type:"button",className:"acv-back",onClick:a,"aria-label":"\u5173\u95ED"},"\u2715")),T.default.createElement("div",{className:"acv-drawer-body",ref:L},u.map(h=>T.default.createElement("div",{key:h.id,className:`acv-chat ${h.role==="user"?"is-user":"is-agent"}`},h.tools?.length>0&&T.default.createElement("div",{className:"acv-chat-tools"},h.tools.map((M,A)=>T.default.createElement("span",{key:`${M}-${A}`,className:"acv-chip"},"\u8C03\u7528 ",M))),h.text&&(h.role==="assistant"?T.default.createElement("div",{className:"acv-chat-text acv-chat-text--md"},T.default.createElement(ce,{text:h.text})):T.default.createElement("div",{className:"acv-chat-text"},h.text)),!h.text&&h.role==="assistant"&&i&&T.default.createElement("div",{className:"acv-chat-typing"},"\u2026"))),P&&T.default.createElement("div",{className:"acv-question-card",role:"group","aria-label":"DSH \u63D0\u95EE"},P.questions.map(h=>T.default.createElement("div",{key:h.id,className:"acv-question-item"},T.default.createElement("strong",null,h.header||"\u9700\u8981\u4F60\u7684\u9009\u62E9"),T.default.createElement("p",null,h.question),h.options?.map(M=>{let A=I[h.id]?.selected||[];return T.default.createElement("button",{key:M.label,type:"button",className:`acv-question-option${A.includes(M.label)?" is-selected":""}`,"aria-pressed":A.includes(M.label),onClick:()=>D(E=>{let _=E[h.id]||{selected:[],custom:""},te=h.multiSelect?A.includes(M.label)?A.filter(de=>de!==M.label):[...A,M.label]:[M.label];return{...E,[h.id]:{..._,selected:te}}})},M.label,M.description&&T.default.createElement("small",null,M.description))}),T.default.createElement("input",{className:"acv-question-custom",value:I[h.id]?.custom||"",placeholder:"\u5176\u4ED6\u56DE\u7B54\uFF08\u53EF\u9009\uFF09","aria-label":`${h.question}\u7684\u81EA\u5B9A\u4E49\u56DE\u7B54`,onChange:M=>D(A=>({...A,[h.id]:{selected:A[h.id]?.selected||[],custom:M.target.value}}))}))),T.default.createElement("button",{type:"button",className:"acv-btn brand",disabled:H,onClick:F},H?"\u63D0\u4EA4\u4E2D\u2026":"\u63D0\u4EA4\u56DE\u7B54"),T.default.createElement("span",{className:"acv-field-hint"},"\u4E0D\u9009\u4EFB\u4F55\u9009\u9879\u5373\u8DF3\u8FC7\uFF0C\u4E0D\u4EE3\u8868\u540C\u610F\u3002")),f&&T.default.createElement("div",{className:"acv-error"},f),!n&&T.default.createElement("div",{className:"acv-notice",style:{marginTop:12}},"\u8FD8\u6CA1\u767B\u5F55\u793E\u533A\uFF0C\u767B\u5F55\u4E4B\u540E\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002",T.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>{t?.(),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55"))),T.default.createElement("div",{className:"acv-drawer-foot"},T.default.createElement("div",{className:"acv-chat-composer"},T.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:o,placeholder:i?"\u6B63\u5728\u56DE\u590D\u2026":"\u548C DSH \u804A\u804A\u793E\u533A\uFF0C\u6216\u8BA9\u5B83\u53D1\u4E00\u6761\u5E16",onChange:h=>r(h.target.value)}),T.default.createElement("button",{type:"button",className:`acv-chat-send${i?" is-stop":""}`,onClick:i?$:()=>m(),disabled:i?!p||z:!o.trim(),"aria-label":i?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001",title:i?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001"},i?T.default.createElement("span",{className:"acv-chat-stop-icon"}):T.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},T.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})))),T.default.createElement("div",{className:"acv-chat-hint"},"Enter \u6362\u884C \xB7 \u70B9\u51FB\u6309\u94AE\u53D1\u9001")))}var Ke="achoverse-community",be="achoverse.community.token",Ge="https://community.achoverse.com",Na=["slots"];function Je(){if(typeof document>"u")return;let e=document.querySelector("style[data-acv-community]");e||(e=document.createElement("style"),e.setAttribute("data-acv-community","styles"),document.head.appendChild(e)),e.textContent!==fe&&(e.textContent=fe)}function ka({size:e=22,active:a=!1}){return ae.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},ae.default.createElement("circle",{cx:12,cy:8.5,r:3.4,stroke:"currentColor",strokeWidth:a?2:1.7}),ae.default.createElement("path",{d:"M4.6 19.4c.8-3.9 3.8-6.1 7.4-6.1s6.6 2.2 7.4 6.1",stroke:"currentColor",strokeWidth:a?2:1.7,strokeLinecap:"round"}))}function Sa(){return{get(){try{return window.localStorage.getItem(be)}catch{return null}},set(e){try{e?window.localStorage.setItem(be,e):window.localStorage.removeItem(be),window.dispatchEvent(new Event("achoverse:token-changed"))}catch{}}}}function Ca(){let[e,a]=ae.default.useState(null),[t,u]=ae.default.useState(!1),s=ae.default.useMemo(()=>Sa(),[]);return ae.default.useEffect(()=>{Je();let o=!1;return fetch("/community/config",{cache:"no-store"}).then(r=>r.ok?r.json():Promise.reject(new Error(String(r.status)))).then(r=>{o||a(r?.baseUrl||Ge)}).catch(()=>{o||a(Ge)}),()=>{o=!0}},[]),e?ae.default.createElement(ae.default.Fragment,null,ae.default.createElement(qe,{mode:"plugin",base:e,tokenStore:s,onDsh:()=>u(!0)}),t?ae.default.createElement(Ye,{tokenStore:s,onClose:()=>u(!1)}):null):ae.default.createElement("div",{className:"acv-root acv-root--panel"},ae.default.createElement("div",{className:"acv-frame"},ae.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u8FDE\u63A5\u793E\u533A\u2026")))}function Ea(e){Je(),e.slots.inject("main",()=>e.slots.register({name:"main",key:Ke},Ca)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Ke,order:30,label:()=>"Achoverse\u793E\u533A"},ka))}
return module.exports}})
