window.__ModuleLoader__.load({id:"dsh-achoverse-community",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ja=Object.create;var la=Object.defineProperty;var Za=Object.getOwnPropertyDescriptor;var Qa=Object.getOwnPropertyNames;var Ra=Object.getPrototypeOf,ae=Object.prototype.hasOwnProperty;var xa=(e,a)=>()=>{try{return a||e((a={exports:{}}).exports,a),a.exports}catch(t){throw a=0,t}},ee=(e,a)=>{for(var t in a)la(e,t,{get:a[t],enumerable:!0})},ya=(e,a,t,f)=>{if(a&&typeof a=="object"||typeof a=="function")for(let s of Qa(a))!ae.call(e,s)&&s!==t&&la(e,s,{get:()=>a[s],enumerable:!(f=Za(a,s))||f.enumerable});return e};var Y=(e,a,t)=>(t=e!=null?Ja(Ra(e)):{},ya(a||!e||!e.__esModule?la(t,"default",{value:e,enumerable:!0}):t,e)),te=e=>ya(la({},"__esModule",{value:!0}),e);var Ca=xa(Z=>{"use strict";var ie=require("react");function Sa(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ta(){}var Q={d:{f:ta,r:function(){throw Error(Sa(522))},D:ta,C:ta,L:ta,m:ta,X:ta,S:ta,M:ta},p:0,findDOMNode:null},oe=Symbol.for("react.portal"),re=Symbol.for("react.recoverable"),ka=Symbol.for("react.optimistic_key");function ce(e,a,t){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:oe,key:f==null?null:f===ka?ka:""+f,children:e,containerInfo:a,implementation:t}}var na=ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function pa(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}Z.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q;Z.browser=function(e){return{$$typeof:re,_reason:e}};Z.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(Sa(299));return ce(e,a,null,t)};Z.flushSync=function(e){var a=na.T,t=Q.p;try{if(na.T=null,Q.p=2,e)return e()}finally{na.T=a,Q.p=t,Q.d.f()}};Z.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,Q.d.C(e,a))};Z.prefetchDNS=function(e){typeof e=="string"&&Q.d.D(e)};Z.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var t=a.as,f=pa(t,a.crossOrigin),s=typeof a.integrity=="string"?a.integrity:void 0,i=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;t==="style"?Q.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:f,integrity:s,fetchPriority:i}):t==="script"&&Q.d.X(e,{crossOrigin:f,integrity:s,fetchPriority:i,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};Z.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var t=pa(a.as,a.crossOrigin);Q.d.M(e,{crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0})}}else a==null&&Q.d.M(e)};Z.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var t=a.as,f=pa(t,a.crossOrigin);Q.d.L(e,t,{crossOrigin:f,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};Z.preloadModule=function(e,a){if(typeof e=="string")if(a){var t=pa(a.as,a.crossOrigin);Q.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0})}else Q.d.m(e)};Z.requestFormReset=function(e){Q.d.r(e)};Z.unstable_batchedUpdates=function(e,a){return e(a)};Z.useFormState=function(e,a,t){return na.H.useFormState(e,a,t)};Z.useFormStatus=function(){return na.H.useHostTransitionStatus()};Z.version="19.3.1"});var Ta=xa((_e,za)=>{"use strict";function Ea(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ea)}catch(e){console.error(e)}}Ea(),za.exports=Ca()});var ze={};ee(ze,{apply:()=>Ee,inject:()=>we});module.exports=te(ze);var R=Y(require("react"),1);var ua=`/* Achoverse \u793E\u533A\uFF1A\u6D45\u7070\u753B\u5E03 + \u767D\u8272\u5927\u5706\u89D2\u5361\u7247 + \u7C89\u7D2B\u6E10\u53D8\u4E3B\u89C6\u89C9\u3002 */

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
`;var x=Y(require("react"),1);function Na({base:e="",token:a=null,credentials:t="same-origin",onToken:f}={}){let s=a;function i(n){s=n||null,f?.(s)}async function o(n,{method:l="GET",body:b,signal:d}={}){let c={};b!==void 0&&(c["content-type"]="application/json"),s&&(c.authorization=`Bearer ${s}`);let p=await fetch(e+n,{method:l,headers:c,body:b===void 0?void 0:JSON.stringify(b),credentials:s?"omit":t,cache:"no-store",signal:d}),v=await p.text(),y={};try{y=v?JSON.parse(v):{}}catch{y={error:v.slice(0,200)}}if(!p.ok){let m=new Error(y?.error||`HTTP ${p.status}`);throw m.code=y?.code,m.status=p.status,m}return y}return{raw:o,setToken:i,getToken:()=>s,me:()=>o("/api/auth/me"),home:()=>o("/api/home"),bootstrap:()=>o("/api/bootstrap"),spaces:()=>o("/api/spaces"),zoneSpaces:n=>o(`/api/zones/${encodeURIComponent(n)}`),space:n=>o(`/api/spaces/${encodeURIComponent(n)}`),post:n=>o(`/api/posts/${encodeURIComponent(n)}`),captcha:()=>o("/api/captcha"),register:n=>o("/api/auth/register",{method:"POST",body:n}),login:n=>o("/api/auth/login",{method:"POST",body:n}),logout:()=>o("/api/auth/logout",{method:"POST",body:{}}),resend:()=>o("/api/auth/resend",{method:"POST",body:{}}),verify:n=>o("/api/auth/verify",{method:"POST",body:{token:n}}),createPost:n=>o("/api/posts",{method:"POST",body:n}),createComment:(n,l)=>o(`/api/posts/${encodeURIComponent(n)}/comments`,{method:"POST",body:l}),updateProfile:n=>o("/api/account/profile",{method:"POST",body:n}),requestEmailChange:n=>o("/api/account/email",{method:"POST",body:{email:n}}),confirmEmailChange:n=>o("/api/account/email/confirm",{method:"POST",body:{token:n}}),changePassword:n=>o("/api/account/password",{method:"POST",body:n}),forgotPassword:n=>o("/api/account/password/forgot",{method:"POST",body:{email:n}}),resetPassword:n=>o("/api/account/password/reset",{method:"POST",body:n}),dmThreads:()=>o("/api/dm/threads"),dmUnread:()=>o("/api/dm/unread"),dmThread:(n,l)=>o(`/api/dm/thread/${encodeURIComponent(n)}${l?`?before=${encodeURIComponent(l)}`:""}`),dmOpenWith:n=>o("/api/dm/thread",{method:"POST",body:n}),dmSend:(n,l)=>o(`/api/dm/thread/${encodeURIComponent(n)}`,{method:"POST",body:{body:l}}),user:n=>o(`/api/users/${encodeURIComponent(n)}`),adminUsers:n=>o(`/api/admin/users${n?`?q=${encodeURIComponent(n)}`:""}`),pendingAccounts:()=>o("/api/admin/pending"),adminSpaces:()=>o("/api/admin/spaces"),createSpace:n=>o("/api/admin/spaces",{method:"POST",body:n}),updateSpace:(n,l)=>o(`/api/admin/spaces/${encodeURIComponent(n)}/update`,{method:"POST",body:l}),archiveSpace:(n,l=!0)=>o(`/api/admin/spaces/${encodeURIComponent(n)}/archive`,{method:"POST",body:{archived:l}}),verifyAccount:n=>o("/api/admin/verify",{method:"POST",body:{accountId:n}}),setPostStatus:(n,l)=>o(`/api/posts/${encodeURIComponent(n)}/status`,{method:"POST",body:{status:l}}),notifications:()=>o("/api/notifications"),markRead:n=>o("/api/notifications/read",{method:"POST",body:{ids:n}}),search:n=>o(`/api/search?q=${encodeURIComponent(n)}`)}}function G(e){let a=Number(e)||0;if(!a)return"";let t=Date.now()-a;if(t<6e4)return"\u521A\u521A";if(t<36e5)return`${Math.floor(t/6e4)} \u5206\u949F\u524D`;if(t<864e5)return`${Math.floor(t/36e5)} \u5C0F\u65F6\u524D`;if(t<7*864e5)return`${Math.floor(t/864e5)} \u5929\u524D`;let f=new Date(a);return`${String(f.getMonth()+1).padStart(2,"0")}-${String(f.getDate()).padStart(2,"0")}`}function J(e){let a=String(e||"?").trim();if(!a)return"?";let t=[...a];return t.length>1&&/[\u4e00-\u9fa5]/.test(t[0])?t.slice(-2).join(""):t[0].toUpperCase()}var h=Y(require("react"),1);var X=Y(require("react"),1),wa=[{key:"diffusion",label:"\u6269\u6563",edition:"DIFFUSION"},{key:"connection",label:"\u8FDE\u63A5",edition:"CONNECTION"},{key:"resonance",label:"\u5171\u632F",edition:"RESONANCE"}];function ne({motif:e}){return e==="connection"?X.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},X.default.createElement("rect",{x:"652",y:"-130",width:"390",height:"390",rx:"58",transform:"rotate(-24 847 65)",fill:"#E2F5FF",fillOpacity:".16"}),X.default.createElement("rect",{x:"790",y:"120",width:"326",height:"326",rx:"52",transform:"rotate(19 953 283)",fill:"#E2F5FF",fillOpacity:".13"}),X.default.createElement("rect",{x:"570",y:"170",width:"230",height:"230",rx:"38",transform:"rotate(19 685 285)",fill:"#34298A",fillOpacity:".08"})):e==="resonance"?X.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},X.default.createElement("rect",{x:"500",y:"-40",width:"720",height:"230",rx:"115",transform:"rotate(-28 860 75)",fill:"#FFF4D9",fillOpacity:".16"}),X.default.createElement("rect",{x:"650",y:"165",width:"690",height:"190",rx:"95",transform:"rotate(-28 995 260)",fill:"#FFF4D9",fillOpacity:".14"}),X.default.createElement("circle",{cx:"1130",cy:"105",r:"220",fill:"#AC5B25",fillOpacity:".06"})):e==="diffusion"?X.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},X.default.createElement("circle",{cx:"948",cy:"85",r:"270",fill:"#FFF0F5",fillOpacity:".14"}),X.default.createElement("circle",{cx:"732",cy:"244",r:"190",fill:"#FFF0F5",fillOpacity:".12"}),X.default.createElement("circle",{cx:"1060",cy:"320",r:"240",fill:"#9E2367",fillOpacity:".08"})):null}function da({space:e,showBadge:a=!0,className:t=""}){return X.default.createElement("span",{className:`acv-space-cover ${t}`.trim(),style:{"--accent":e.accent,"--accent-to":e.accentTo}},X.default.createElement(ne,{motif:e.motif}),a&&X.default.createElement("span",{className:"acv-space-badge"},`${e.postCount??0} \u4E2A\u5E16\u5B50`),X.default.createElement("span",{className:"acv-space-enter"},"\u8FDB\u5165\u8BA8\u8BBA \u2192"))}var M=Y(require("react"),1),Aa=Y(Ta(),1);var le=236,Oa=190;function de(e){let a=(window.innerWidth||1024)-le-10;return Math.max(10,Math.min(e,a))}function F({api:e,me:a,handle:t,children:f,onDm:s,disabled:i=!1,className:o=""}){let[n,l]=M.default.useState(!1),[b,d]=M.default.useState(null),[c,p]=M.default.useState(null),[v,y]=M.default.useState(!1),m=M.default.useRef(null),$=M.default.useRef(null),P=M.default.useRef(null),g=M.default.useRef(0),T=M.default.useCallback(()=>{t&&(y(!1),e.user(t).then(u=>{p(u.user),g.current=Date.now()}).catch(()=>{p(null),y(!0)}))},[e,t]),C=()=>{let u=m.current?.getBoundingClientRect();if(!u)return;let B=u.bottom+8+Oa>(window.innerHeight||768)?Math.max(10,u.top-8-Oa):u.bottom+8;d({left:de(u.left),top:B})},A=()=>{i||(clearTimeout($.current),P.current=setTimeout(()=>{C(),l(!0),(!c||Date.now()-g.current>3e4)&&T()},140))},I=()=>{clearTimeout(P.current),$.current=setTimeout(()=>l(!1),160)};M.default.useEffect(()=>{if(!n)return;let u=()=>l(!1);return window.addEventListener("scroll",u,!0),window.addEventListener("resize",u),()=>{window.removeEventListener("scroll",u,!0),window.removeEventListener("resize",u)}},[n]),M.default.useEffect(()=>{i&&l(!1)},[i]),M.default.useEffect(()=>()=>{clearTimeout($.current),clearTimeout(P.current)},[]);let _=!!(a&&t&&a.handle?.toLowerCase()===String(t).toLowerCase()),z=!!c?.allowDm&&!_,W=n&&b&&typeof document<"u"?(0,Aa.createPortal)(M.default.createElement("span",{className:"acv-usercard acv-usercard--fixed",style:{left:b.left,top:b.top},role:"dialog","aria-label":`${c?.displayName||t} \u7684\u8D44\u6599\u5361`,onClick:u=>u.stopPropagation(),onMouseEnter:()=>clearTimeout($.current),onMouseLeave:I},M.default.createElement("span",{className:"acv-usercard-head"},M.default.createElement("span",{className:"acv-avatar"},J(c?.displayName||t)),M.default.createElement("span",{className:"acv-usercard-id"},M.default.createElement("span",{className:"acv-usercard-name"},c?.displayName||t),M.default.createElement("span",{className:"acv-usercard-handle"},"@",c?.handle||t)),c?.role==="admin"&&M.default.createElement("span",{className:"acv-chip"},"\u7BA1\u7406\u5458")),c?.bio&&M.default.createElement("span",{className:"acv-usercard-bio"},c.bio),M.default.createElement("span",{className:"acv-usercard-foot"},!c&&!v&&M.default.createElement("span",{className:"acv-usercard-bio"},"\u52A0\u8F7D\u4E2D\u2026"),!c&&v&&M.default.createElement("span",{className:"acv-usercard-bio"},"\u8D44\u6599\u52A0\u8F7D\u5931\u8D25"),c&&z&&!a&&M.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:u=>{u.stopPropagation(),l(!1),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55\u540E\u53D1\u79C1\u4FE1"),c&&z&&a&&M.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:u=>{u.stopPropagation(),l(!1),s?.(c)}},"\u53D1\u79C1\u4FE1"),c&&!z&&!_&&M.default.createElement("span",{className:"acv-usercard-bio"},"\u5BF9\u65B9\u672A\u5F00\u653E\u79C1\u4FE1"),_&&M.default.createElement("span",{className:"acv-usercard-bio"},"\u8FD9\u662F\u4F60\u81EA\u5DF1"))),document.body):null;return M.default.createElement("span",{ref:m,className:`acv-userchip ${o}`.trim(),onMouseEnter:A,onMouseLeave:I},f,W)}function fa({space:e,onOpen:a}){return h.default.createElement("button",{type:"button",className:"acv-space-card",onClick:()=>a(e.slug),style:{"--accent":e.accent,"--accent-to":e.accentTo}},h.default.createElement(da,{space:e}),h.default.createElement("span",{className:"acv-space-body"},h.default.createElement("span",{className:"acv-space-title"},e.title),h.default.createElement("span",{className:"acv-space-sub"},e.subtitle),h.default.createElement("span",{className:"acv-space-meta"},h.default.createElement("span",null,e.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${G(e.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u5E16"),h.default.createElement("span",{className:"acv-dot"}),h.default.createElement("span",{className:"acv-space-desc"},e.description||""))))}function Pa({api:e,me:a,initialData:t=null,onOpenSpace:f,onOpenPost:s,onAuth:i,onDm:o,notify:n}){let[l,b]=h.default.useState(t),[d,c]=h.default.useState(""),p=h.default.useCallback(()=>{e.home().then(b).catch(m=>c(m.message))},[e]);h.default.useEffect(()=>{t||p()},[p,a]);let v=l?.notifications?.filter(m=>!m.readAt).length||0;async function y(){try{await e.markRead(),p(),n("\u6D88\u606F\u90FD\u6807\u6210\u5DF2\u8BFB\u4E86")}catch(m){n(m.message,{error:!0})}}return d?h.default.createElement("div",{className:"acv-loading"},d):l?h.default.createElement("div",{className:"acv-main"},h.default.createElement("div",{className:"acv-col"},h.default.createElement("div",{className:"acv-section-head"},h.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u677F\u5757"),h.default.createElement("span",{className:"acv-section-note"},"\u70B9\u5F00\u4E00\u4E2A\u677F\u5757\u8FDB\u5165\u8BA8\u8BBA\u533A")),l.spaces.map(m=>h.default.createElement(fa,{key:m.id,space:m,onOpen:f})),h.default.createElement("div",{className:"acv-section-head",style:{marginTop:6}},h.default.createElement("h2",{className:"acv-section-title"},"\u6700\u8FD1\u66F4\u65B0"),h.default.createElement("button",{type:"button",className:"acv-link",onClick:p},"\u5237\u65B0")),h.default.createElement("div",{className:"acv-panel"},l.recent.length===0&&h.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u5E16\u5B50"),l.recent.map(m=>h.default.createElement("button",{key:m.id,type:"button",className:"acv-recent-item",onClick:()=>s(m.id)},h.default.createElement(F,{api:e,me:a,handle:m.author.handle,onDm:o},h.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},J(m.author.displayName))),h.default.createElement("span",{className:"acv-recent-main"},h.default.createElement("span",{className:"acv-recent-title"},m.title),h.default.createElement("span",{className:"acv-recent-meta"},m.spaceTitle," \xB7"," ",h.default.createElement(F,{api:e,me:a,handle:m.author.handle,onDm:o},h.default.createElement("span",null,m.author.displayName))," ","\xB7 ",G(m.lastActivityAt)," \xB7 ",m.commentCount," \u6761\u8BC4\u8BBA")),h.default.createElement("span",{className:"acv-chip"},"\u8FDB\u5165"))))),h.default.createElement("div",{className:"acv-col"},h.default.createElement("div",{className:"acv-panel"},h.default.createElement("div",{className:"acv-section-head"},h.default.createElement("h2",{className:"acv-section-title"},"\u6D88\u606F"),a&&v>0&&h.default.createElement("button",{type:"button",className:"acv-link",onClick:y},"\u5168\u90E8\u5DF2\u8BFB")),!a&&h.default.createElement("div",{className:"acv-empty"},"\u767B\u5F55\u540E\u8FD9\u91CC\u4F1A\u663E\u793A\u56DE\u590D\u3001@ \u548C\u7CFB\u7EDF\u6D88\u606F",h.default.createElement("div",{style:{marginTop:12}},h.default.createElement("button",{type:"button",className:"acv-btn primary",onClick:i},"\u767B\u5F55"))),a&&l.notifications.length===0&&h.default.createElement("div",{className:"acv-empty"},"\u6682\u65F6\u6CA1\u6709\u65B0\u6D88\u606F"),a&&l.notifications.map(m=>h.default.createElement("button",{key:m.id,type:"button",className:"acv-msg",onClick:()=>m.postId?s(m.postId):void 0},h.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},m.actor?J(m.actor.displayName):"\u7CFB"),h.default.createElement("span",{className:"acv-msg-main"},h.default.createElement("span",{className:"acv-msg-title"},m.title),h.default.createElement("span",{className:"acv-msg-body"},m.body),h.default.createElement("span",{className:"acv-msg-time"},G(m.createdAt))),!m.readAt&&h.default.createElement("span",{className:"acv-unread"})))),h.default.createElement("div",{className:"acv-panel"},h.default.createElement("div",{className:"acv-section-head"},h.default.createElement("h2",{className:"acv-section-title"},"\u6D3B\u8DC3\u6210\u5458")),(l.members||[]).length===0&&h.default.createElement("div",{className:"acv-empty",style:{padding:"10px 0"}},"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8FC7\u5E16"),(l.members||[]).map(m=>h.default.createElement("div",{key:m.id,className:"acv-member"},h.default.createElement(F,{api:e,me:a,handle:m.handle,onDm:o},h.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},J(m.displayName))),h.default.createElement("span",{className:"acv-member-main"},h.default.createElement(F,{api:e,me:a,handle:m.handle,onDm:o},h.default.createElement("span",{className:"acv-member-name"},m.displayName)),h.default.createElement(F,{api:e,me:a,handle:m.handle,onDm:o},h.default.createElement("span",{className:"acv-member-meta"},"@",m.handle))),h.default.createElement("span",{className:"acv-chip"},m.postCount," \u5E16")))),h.default.createElement("div",{className:"acv-panel"},h.default.createElement("div",{className:"acv-section-head"},h.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u6570\u636E")),h.default.createElement("div",{className:"acv-stats"},h.default.createElement("div",{className:"acv-stat"},h.default.createElement("div",{className:"acv-stat-value"},l.spaces.length),h.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u677F\u5757")),h.default.createElement("div",{className:"acv-stat"},h.default.createElement("div",{className:"acv-stat-value"},l.spaces.reduce((m,$)=>m+$.postCount,0)),h.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),h.default.createElement("div",{className:"acv-stat"},h.default.createElement("div",{className:"acv-stat-value"},l.recent.length),h.default.createElement("div",{className:"acv-stat-label"},"\u6761\u6700\u8FD1\u66F4\u65B0"))),h.default.createElement("p",{className:"acv-space-sub",style:{marginTop:12}},a?a.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u8FDB\u4EFB\u610F\u677F\u5757\uFF0C\u53F3\u4E0A\u89D2\u6709\u53D1\u5E16\u5165\u53E3\u3002":"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF1B\u53D1\u5E16\u3001\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002")))):h.default.createElement("div",{className:"acv-main"},h.default.createElement("div",{className:"acv-col"},h.default.createElement("div",{className:"acv-skeleton"}),h.default.createElement("div",{className:"acv-skeleton"}),h.default.createElement("div",{className:"acv-skeleton"})),h.default.createElement("div",{className:"acv-col"},h.default.createElement("div",{className:"acv-skeleton",style:{height:260}})))}var E=Y(require("react"),1);var H=Y(require("react"),1);function Da({space:e,api:a,onClose:t,onCreated:f,notify:s}){let[i,o]=H.default.useState(""),[n,l]=H.default.useState(""),[b,d]=H.default.useState(!1),[c,p]=H.default.useState("");H.default.useEffect(()=>{let y=m=>{m.key==="Escape"&&t()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[t]);async function v(){d(!0),p("");try{let y=await a.createPost({spaceId:e.id,title:i,body:n});s("\u5E16\u5B50\u53D1\u51FA\u53BB\u4E86"),f(y.post)}catch(y){p(y.message)}finally{d(!1)}}return H.default.createElement("div",{className:"acv-overlay",onClick:t},H.default.createElement("div",{className:"acv-modal acv-modal--wide",onClick:y=>y.stopPropagation()},H.default.createElement("h3",{className:"acv-modal-title"},"\u5728\u300C",e.title,"\u300D\u53D1\u5E16"),H.default.createElement("p",{className:"acv-modal-sub"},"\u6807\u9898\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u6B63\u6587\u5C55\u5F00\u8BB2\u3002\u53D1\u5B8C\u4F1A\u76F4\u63A5\u8FDB\u8BE6\u60C5\u9875\u3002"),c&&H.default.createElement("div",{className:"acv-error"},c),H.default.createElement("div",{className:"acv-field"},H.default.createElement("label",null,"\u6807\u9898"),H.default.createElement("input",{className:"acv-input",autoFocus:!0,value:i,maxLength:160,placeholder:"\u60F3\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",onChange:y=>o(y.target.value)})),H.default.createElement("div",{className:"acv-field"},H.default.createElement("label",null,"\u6B63\u6587"),H.default.createElement("textarea",{className:"acv-textarea acv-textarea--tall",value:n,maxLength:2e4,placeholder:"\u5C55\u5F00\u8BF4\u8BF4\uFF0C\u652F\u6301\u6362\u884C",onChange:y=>l(y.target.value)})),H.default.createElement("div",{className:"acv-row"},H.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),H.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:b||!i.trim()||!n.trim(),onClick:v},b?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u5E03"))))}function _a({api:e,slug:a,me:t,onBack:f,onOpenPost:s,onAuth:i,onDm:o,notify:n}){let[l,b]=E.default.useState(null),[d,c]=E.default.useState(""),[p,v]=E.default.useState(!1),y=E.default.useCallback(()=>{e.space(a).then(g=>{b(g),c("")}).catch(g=>c(g.message))},[e,a]);if(E.default.useEffect(()=>{y()},[y]),d)return E.default.createElement("div",{style:{paddingTop:22}},E.default.createElement("button",{type:"button",className:"acv-back",onClick:f},"\u2190 \u8FD4\u56DE\u9996\u9875"),E.default.createElement("div",{className:"acv-loading"},d));if(!l)return E.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u677F\u5757\u2026");let{space:m,posts:$}=l,P=!!t?.emailVerified;return E.default.createElement("div",{style:{paddingTop:20,display:"flex",flexDirection:"column",gap:16}},E.default.createElement("div",null,E.default.createElement("button",{type:"button",className:"acv-back",onClick:f},"\u2190 \u8FD4\u56DE\u9996\u9875")),E.default.createElement("div",{className:"acv-board-head",style:{"--accent":m.accent,"--accent-to":m.accentTo}},E.default.createElement("h2",{className:"acv-board-title"},m.title),E.default.createElement("p",{className:"acv-board-sub"},m.description||m.subtitle),E.default.createElement("div",{className:"acv-board-actions"},E.default.createElement("button",{type:"button",className:"acv-btn",style:{background:"#fff",color:"#16161d"},onClick:()=>{if(!t)return i();if(!P)return n("\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16");v(!0)}},"\u53D1\u5E16"),E.default.createElement("span",{className:"acv-chip",style:{background:"rgba(255,255,255,.22)",color:"#fff"}},m.postCount," \u4E2A\u5E16\u5B50"))),!t&&E.default.createElement("div",{className:"acv-notice"},"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u9700\u8981\u3002",E.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),t&&!t.emailVerified&&E.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002\u9A8C\u8BC1\u90AE\u4EF6\u5728\u6536\u4EF6\u7BB1\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u5934\u50CF\u83DC\u5355\u91CC\u91CD\u53D1\u3002"),E.default.createElement("div",{className:"acv-board-grid"},E.default.createElement("div",{className:"acv-col"},E.default.createElement("div",{className:"acv-panel",style:{padding:"8px 18px"}},$.length===0&&E.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5E16\u5B50\uFF0C\u6765\u53D1\u7B2C\u4E00\u6761\u3002"),$.map(g=>E.default.createElement("button",{key:g.id,type:"button",className:"acv-post-row",onClick:()=>s(g.id)},E.default.createElement("span",{className:"acv-post-title"},g.title),E.default.createElement("span",{className:"acv-post-excerpt"},g.excerpt),E.default.createElement("span",{className:"acv-post-meta"},E.default.createElement(F,{api:e,me:t,handle:g.author.handle,onDm:o},E.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},J(g.author.displayName)),g.author.displayName),E.default.createElement("span",{className:"acv-dot"}),G(g.lastActivityAt),E.default.createElement("span",{className:"acv-dot"}),g.commentCount," \u6761\u8BC4\u8BBA"))))),E.default.createElement("aside",{className:"acv-col"},E.default.createElement("div",{className:"acv-panel"},E.default.createElement("div",{className:"acv-section-head"},E.default.createElement("h2",{className:"acv-section-title"},"\u677F\u5757\u8BF4\u660E")),E.default.createElement("p",{className:"acv-space-sub"},m.description||m.subtitle||"\u8FD8\u6CA1\u6709\u5199\u4ECB\u7ECD\u3002"),E.default.createElement("div",{className:"acv-stats",style:{marginTop:14}},E.default.createElement("div",{className:"acv-stat"},E.default.createElement("div",{className:"acv-stat-value"},m.postCount),E.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),E.default.createElement("div",{className:"acv-stat"},E.default.createElement("div",{className:"acv-stat-value"},$.length),E.default.createElement("div",{className:"acv-stat-label"},"\u6761\u5728\u672C\u9875"))),E.default.createElement("p",{className:"acv-space-sub",style:{marginTop:14}},t?.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u4E0A\u9762\u7684\u300C\u53D1\u5E16\u300D\u3002":t?"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u3001\u8BC4\u8BBA\u624D\u9700\u8981\u3002")))),p&&E.default.createElement(Da,{api:e,space:m,notify:n,onClose:()=>v(!1),onCreated:g=>{v(!1),y(),s(g.id)}}))}var w=Y(require("react"),1);var U=Y(require("react"),1),La=/(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(~~[^~\n]+~~)|(\[[^\]\n]+\]\([^)\s]+\))/g,ia=/^\s*([-*+]|\d+[.)])\s+/,$a=/^(#{1,6})\s+(.*)$/,pe=/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/;function oa(e,a){let t=[],f=0,s;for(La.lastIndex=0;(s=La.exec(e))!==null;){s.index>f&&t.push(e.slice(f,s.index));let i=s[0],o=`${a}-${s.index}`;if(i.startsWith("`"))t.push(U.default.createElement("code",{key:o,className:"acv-md-code"},i.slice(1,-1)));else if(i.startsWith("**"))t.push(U.default.createElement("strong",{key:o},i.slice(2,-2)));else if(i.startsWith("~~"))t.push(U.default.createElement("del",{key:o},i.slice(2,-2)));else if(i.startsWith("[")){let n=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(i),l=n?.[2]||"#",b=/^(https?:\/\/|mailto:|\/)/i.test(l);t.push(b?U.default.createElement("a",{key:o,href:l,target:"_blank",rel:"noreferrer noopener"},n[1]):U.default.createElement("span",{key:o},n?.[1]||i))}else t.push(U.default.createElement("em",{key:o},i.slice(1,-1)));f=s.index+i.length}return f<e.length&&t.push(e.slice(f)),t}function Ma(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(a=>a.trim())}function ra({text:e}){let t=String(e||"").replace(/\r\n?/g,`
`).split(`
`),f=[],s=0,i=0;for(;s<t.length;){let o=t[s];if(/^\s*```/.test(o)){let d=o.trim().slice(3).trim(),c=[];for(s+=1;s<t.length&&!/^\s*```/.test(t[s]);)c.push(t[s]),s+=1;s+=1,f.push(U.default.createElement("pre",{key:`b${i++}`,className:"acv-md-pre"},U.default.createElement("code",null,c.join(`
`)),d&&U.default.createElement("span",{className:"acv-md-lang"},d)));continue}if(!o.trim()){s+=1;continue}let n=$a.exec(o);if(n){let d=Math.min(n[1].length,4),c=`h${d}`;f.push(U.default.createElement(c,{key:`b${i++}`,className:`acv-md-h${d}`},oa(n[2],`h${i}`))),s+=1;continue}if(/^\s*(-{3,}|\*{3,})\s*$/.test(o)){f.push(U.default.createElement("hr",{key:`b${i++}`,className:"acv-md-hr"})),s+=1;continue}if(o.includes("|")&&pe.test(t[s+1]||"")){let d=Ma(o);s+=2;let c=[];for(;s<t.length&&t[s].includes("|")&&t[s].trim();)c.push(Ma(t[s])),s+=1;f.push(U.default.createElement("div",{key:`b${i++}`,className:"acv-md-table-wrap"},U.default.createElement("table",{className:"acv-md-table"},U.default.createElement("thead",null,U.default.createElement("tr",null,d.map((p,v)=>U.default.createElement("th",{key:v},oa(p,`th${v}`))))),U.default.createElement("tbody",null,c.map((p,v)=>U.default.createElement("tr",{key:v},d.map((y,m)=>U.default.createElement("td",{key:m},oa(p[m]||"",`td${v}-${m}`)))))))));continue}if(/^\s*>\s?/.test(o)){let d=[];for(;s<t.length&&/^\s*>\s?/.test(t[s]);)d.push(t[s].replace(/^\s*>\s?/,"")),s+=1;f.push(U.default.createElement("blockquote",{key:`b${i++}`,className:"acv-md-quote"},U.default.createElement(ra,{text:d.join(`
`)})));continue}if(ia.test(o)){let d=/^\s*\d+[.)]\s+/.test(o),c=[];for(;s<t.length&&ia.test(t[s]);)for(c.push(t[s].replace(ia,"")),s+=1;s<t.length&&t[s].trim()&&/^\s{2,}/.test(t[s])&&!ia.test(t[s]);)c[c.length-1]+=` ${t[s].trim()}`,s+=1;let p=d?"ol":"ul";f.push(U.default.createElement(p,{key:`b${i++}`,className:"acv-md-list"},c.map((v,y)=>U.default.createElement("li",{key:y},oa(v,`li${y}`)))));continue}let l=[];for(;s<t.length&&t[s].trim()&&!$a.test(t[s])&&!ia.test(t[s])&&!/^\s*>/.test(t[s])&&!/^\s*```/.test(t[s])&&!/^\s*(-{3,}|\*{3,})\s*$/.test(t[s]);)l.push(t[s]),s+=1;let b=[];l.forEach((d,c)=>{c>0&&b.push(U.default.createElement("br",{key:`br${c}`})),b.push(...oa(d,`p${c}`))}),f.push(U.default.createElement("p",{key:`b${i++}`,className:"acv-md-p"},b))}return U.default.createElement("div",{className:"acv-md"},f)}function Ia({api:e,id:a,me:t,onBack:f,backTo:s="home",onAuth:i,onDm:o,notify:n}){let[l,b]=w.default.useState(null),[d,c]=w.default.useState(""),[p,v]=w.default.useState(""),[y,m]=w.default.useState(!1),[$,P]=w.default.useState(""),[g,T]=w.default.useState(!1),C=w.default.useCallback(()=>{e.post(a).then(u=>{b(u),c("")}).catch(u=>c(u.message))},[e,a]);w.default.useEffect(()=>{C()},[C]);async function A(){m(!0),P("");try{await e.createComment(a,{body:p}),v(""),C(),n("\u8BC4\u8BBA\u5DF2\u53D1\u5E03")}catch(u){P(u.message)}finally{m(!1)}}async function I(u){T(!0);try{await e.setPostStatus(a,u),n(u==="hidden"?"\u5E16\u5B50\u5DF2\u9690\u85CF":u==="deleted"?"\u5E16\u5B50\u5DF2\u5220\u9664":"\u5E16\u5B50\u5DF2\u6062\u590D"),u==="deleted"?f():C()}catch(B){n(B.message,{error:!0})}finally{T(!1)}}let _=s==="space"?"\u2190 \u8FD4\u56DE\u677F\u5757":"\u2190 \u8FD4\u56DE\u9996\u9875";if(d)return w.default.createElement("div",{style:{paddingTop:22}},w.default.createElement("button",{type:"button",className:"acv-back",onClick:f},_),w.default.createElement("div",{className:"acv-loading"},d));if(!l)return w.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u5E16\u5B50\u2026");let{post:z,comments:W}=l;return w.default.createElement("div",{className:"acv-post-wrap"},w.default.createElement("div",null,w.default.createElement("button",{type:"button",className:"acv-back",onClick:f},_)),w.default.createElement("div",{className:"acv-panel",style:{padding:"22px 24px"}},w.default.createElement("div",{className:"acv-post-meta"},w.default.createElement("span",{className:"acv-chip"},z.spaceTitle),w.default.createElement("span",{className:"acv-dot"}),G(z.createdAt),w.default.createElement("span",{className:"acv-dot"}),z.viewCount," \u6B21\u6D4F\u89C8"),w.default.createElement("h1",{className:"acv-article-title"},z.title),w.default.createElement("div",{className:"acv-article-meta"},w.default.createElement(F,{api:e,me:t,handle:z.author.handle,onDm:o},w.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},J(z.author.displayName)),w.default.createElement("span",null,z.author.displayName)),w.default.createElement("span",{className:"acv-dot"}),w.default.createElement(F,{api:e,me:t,handle:z.author.handle,onDm:o},w.default.createElement("span",null,"@",z.author.handle)),t?.role==="admin"&&w.default.createElement("span",{className:"acv-mod-actions"},w.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:g,onClick:()=>I("hidden")},"\u9690\u85CF"),w.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:g,onClick:()=>I("deleted")},"\u5220\u9664"))),w.default.createElement("div",{className:"acv-prose acv-prose--md"},w.default.createElement(ra,{text:z.body}))),w.default.createElement("div",{className:"acv-panel",style:{padding:"18px 24px"}},w.default.createElement("div",{className:"acv-section-head"},w.default.createElement("h2",{className:"acv-section-title"},"\u8BC4\u8BBA"),w.default.createElement("span",{className:"acv-section-note"},W.length," \u6761")),W.length===0&&w.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u8BF4\u70B9\u4EC0\u4E48\u3002"),W.map(u=>w.default.createElement("div",{key:u.id,className:"acv-comment"},w.default.createElement(F,{api:e,me:t,handle:u.author.handle,onDm:o},w.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},J(u.author.displayName))),w.default.createElement("div",{className:"acv-comment-main"},w.default.createElement("div",{className:"acv-comment-head"},w.default.createElement(F,{api:e,me:t,handle:u.author.handle,onDm:o},w.default.createElement("span",{className:"acv-comment-author"},u.author.displayName)),w.default.createElement("span",{className:"acv-comment-time"},G(u.createdAt))),w.default.createElement("p",{className:"acv-comment-body"},u.body)))),w.default.createElement("div",{style:{marginTop:14}},!t&&w.default.createElement("div",{className:"acv-notice"},"\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\u3002",w.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),t&&!t.emailVerified&&w.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u8BC4\u8BBA\u3002"),t?.emailVerified&&w.default.createElement(w.default.Fragment,null,$&&w.default.createElement("div",{className:"acv-error"},$),w.default.createElement("textarea",{className:"acv-textarea",value:p,placeholder:"\u5199\u4E00\u6761\u8BC4\u8BBA\u2026",onChange:u=>v(u.target.value)}),w.default.createElement("div",{className:"acv-row"},w.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:y||!p.trim(),onClick:A},y?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u8868\u8BC4\u8BBA"))))))}var k=Y(require("react"),1),ve=["login","register","forgot"];function Ua({api:e,initialMode:a="login",onClose:t,onDone:f,notify:s}){let[i,o]=k.default.useState(ve.includes(a)?a:"login"),[n,l]=k.default.useState(""),[b,d]=k.default.useState(""),[c,p]=k.default.useState(""),[v,y]=k.default.useState(""),[m,$]=k.default.useState(null),[P,g]=k.default.useState(!1),[T,C]=k.default.useState(""),[A,I]=k.default.useState(""),_=k.default.useCallback(()=>{e.captcha().then($).catch(()=>$(null))},[e]);k.default.useEffect(()=>{i==="register"&&_()},[i,_]);function z(L){o(L),C(""),I(""),y("")}async function W(L){L.preventDefault(),g(!0),C("");try{let q=await e.login({handle:n,password:c});e.setToken(q.token),f(q.account)}catch(q){C(q.message)}finally{g(!1)}}async function u(L){L.preventDefault(),g(!0),C("");try{let q=await e.register({handle:n,email:b,password:c,captchaId:m?.id,captchaAnswer:v}),sa=await e.login({handle:n,password:c});e.setToken(sa.token),I(q.mail?.delivered?"\u6CE8\u518C\u6210\u529F\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\u3002\u70B9\u90AE\u4EF6\u91CC\u7684\u94FE\u63A5\u5C31\u80FD\u53D1\u5E16\u3002":"\u6CE8\u518C\u6210\u529F\u3002\u672C\u5730\u6CA1\u914D SMTP\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u7ECF\u6253\u5230\u670D\u52A1\u7AEF\u65E5\u5FD7\u91CC\u4E86\u3002"),f(sa.account)}catch(q){C(q.message),_(),y("")}finally{g(!1)}}async function B(L){L.preventDefault(),g(!0),C("");try{let q=await e.forgotPassword(b.trim());I(q?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u670D\u52A1\u5668\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${q.verifyLink}`:"\u5982\u679C\u8FD9\u4E2A\u90AE\u7BB1\u6CE8\u518C\u8FC7\uFF0C\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u5C31\u80FD\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(q){C(q.message)}finally{g(!1)}}return k.default.createElement("div",{className:"acv-overlay",onClick:t},k.default.createElement("div",{className:"acv-modal",onClick:L=>L.stopPropagation()},k.default.createElement("h3",{className:"acv-modal-title"},i==="login"?"\u767B\u5F55 Achoverse":i==="register"?"\u6CE8\u518C Achoverse":"\u5FD8\u8BB0\u5BC6\u7801"),k.default.createElement("p",{className:"acv-modal-sub"},i==="login"?"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002":i==="register"?"\u6CE8\u518C\u540E\u8981\u9A8C\u8BC1\u90AE\u7BB1\u624D\u80FD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002":"\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1\uFF0C\u6211\u4EEC\u53D1\u4E00\u5C01\u5E26\u91CD\u7F6E\u94FE\u63A5\u7684\u90AE\u4EF6\u3002"),i!=="forgot"&&k.default.createElement("div",{className:"acv-switch"},k.default.createElement("button",{type:"button",className:i==="login"?"is-active":"",onClick:()=>z("login")},"\u767B\u5F55"),k.default.createElement("button",{type:"button",className:i==="register"?"is-active":"",onClick:()=>z("register")},"\u6CE8\u518C")),T&&k.default.createElement("div",{className:"acv-error"},T),A&&k.default.createElement("div",{className:"acv-notice"},A),i==="forgot"&&k.default.createElement("form",{onSubmit:B},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u90AE\u7BB1"),k.default.createElement("input",{className:"acv-input",type:"email",value:b,onChange:L=>d(L.target.value),placeholder:"\u6CE8\u518C\u65F6\u7528\u7684\u90AE\u7BB1"})),k.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},k.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>z("login")},"\u8FD4\u56DE\u767B\u5F55"),k.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!b.trim()},P?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u91CD\u7F6E\u90AE\u4EF6"))),i==="login"&&k.default.createElement("form",{onSubmit:W},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u7528\u6237\u540D"),k.default.createElement("input",{className:"acv-input",value:n,autoComplete:"username",placeholder:"\u4F60\u7684\u7528\u6237\u540D",onChange:L=>l(L.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u5BC6\u7801"),k.default.createElement("input",{className:"acv-input",type:"password",value:c,autoComplete:"current-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:L=>p(L.target.value)})),k.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},k.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>z("forgot")},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),k.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!n||!c},P?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))),i==="register"&&k.default.createElement("form",{onSubmit:u},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u7528\u6237\u540D"),k.default.createElement("input",{className:"acv-input",value:n,autoComplete:"username",placeholder:"3-24 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF",onChange:L=>l(L.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u90AE\u7BB1"),k.default.createElement("input",{className:"acv-input",type:"email",value:b,autoComplete:"email",placeholder:"\u7528\u6765\u6536\u9A8C\u8BC1\u94FE\u63A5",onChange:L=>d(L.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u5BC6\u7801"),k.default.createElement("input",{className:"acv-input",type:"password",value:c,autoComplete:"new-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:L=>p(L.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u9A8C\u8BC1\u7801"),k.default.createElement("div",{className:"acv-captcha-row"},k.default.createElement("input",{className:"acv-input",value:v,maxLength:8,placeholder:"\u770B\u53F3\u8FB9",onChange:L=>y(L.target.value)}),k.default.createElement("button",{type:"button",className:"acv-captcha-img",onClick:_,title:"\u6362\u4E00\u5F20"},m?k.default.createElement("span",{dangerouslySetInnerHTML:{__html:m.svg}}):k.default.createElement("span",{className:"acv-chip"},"\u52A0\u8F7D\u4E2D")))),k.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},k.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),k.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:P||!n||!c||!b},P?"\u6CE8\u518C\u4E2D\u2026":"\u6CE8\u518C")))))}var r=Y(require("react"),1);var me={title:"",slug:"",subtitle:"",description:"",accent:"#F53FA6",accentTo:"#FF7A45",zones:["home"],motif:"diffusion"},ue=[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR \u4E13\u533A"}];function fe({api:e,me:a,onDm:t,notify:f}){let[s,i]=r.default.useState(null),[o,n]=r.default.useState(""),[l,b]=r.default.useState(""),d=r.default.useCallback(()=>{e.pendingAccounts().then(p=>{i(p.accounts),n("")}).catch(p=>n(p.message))},[e]);r.default.useEffect(()=>{d()},[d]);async function c(p){b(p.id);try{await e.verifyAccount(p.id),f(`\u5DF2\u653E\u884C @${p.handle}`),d()}catch(v){f(v.message,{error:!0})}finally{b("")}}return o?r.default.createElement("div",{className:"acv-error"},o):s?s.length===0?r.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5F85\u9A8C\u8BC1\u7684\u8D26\u53F7"):s.map(p=>r.default.createElement("div",{key:p.id,className:"acv-member",style:{padding:"12px 2px"}},r.default.createElement("span",{className:"acv-member-main"},r.default.createElement("span",{className:"acv-member-name"},r.default.createElement(F,{api:e,me:a,handle:p.handle,onDm:t},r.default.createElement("span",null,p.displayName)," ",r.default.createElement("span",{className:"acv-member-meta"},"@",p.handle))),r.default.createElement("span",{className:"acv-member-meta"},p.email," \xB7 \u6CE8\u518C\u4E8E ",G(p.createdAt))),r.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"6px 14px",fontSize:13},disabled:l===p.id,onClick:()=>c(p)},l===p.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C"))):r.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function he({api:e,space:a,onDone:t,onCancel:f,notify:s}){let[i,o]=r.default.useState(a?{title:a.title,slug:a.slug,subtitle:a.subtitle,description:a.description,accent:a.accent,accentTo:a.accentTo,zones:a.zones?.length?a.zones:["home"],motif:a.motif||"diffusion"}:me),[n,l]=r.default.useState(!1),[b,d]=r.default.useState(""),c=(v,y)=>o(m=>({...m,[v]:y}));async function p(){l(!0),d("");try{a?await e.updateSpace(a.id,i):await e.createSpace(i),s(a?"\u677F\u5757\u5DF2\u66F4\u65B0":`\u677F\u5757\u300C${i.title}\u300D\u5DF2\u521B\u5EFA`),t()}catch(v){d(v.message)}finally{l(!1)}}return r.default.createElement("div",{className:"acv-editor"},b&&r.default.createElement("div",{className:"acv-error"},b),r.default.createElement("div",{className:"acv-field"},r.default.createElement("label",null,"\u677F\u5757\u540D\u79F0"),r.default.createElement("input",{className:"acv-input",value:i.title,maxLength:24,onChange:v=>c("title",v.target.value),placeholder:"\u6BD4\u5982\uFF1A\u4F5C\u54C1\u5C55\u793A"})),r.default.createElement("div",{className:"acv-field"},r.default.createElement("label",null,"\u677F\u5757\u6807\u8BC6\uFF08\u7528\u4E8E\u94FE\u63A5\uFF0C\u7559\u7A7A\u81EA\u52A8\u751F\u6210\uFF09"),r.default.createElement("input",{className:"acv-input",value:i.slug,maxLength:32,disabled:!!a,onChange:v=>c("slug",v.target.value.toLowerCase()),placeholder:"works"})),r.default.createElement("div",{className:"acv-field"},r.default.createElement("label",null,"\u4E00\u53E5\u8BDD\u4ECB\u7ECD"),r.default.createElement("input",{className:"acv-input",value:i.subtitle,maxLength:60,onChange:v=>c("subtitle",v.target.value)})),r.default.createElement("div",{className:"acv-field"},r.default.createElement("label",null,"\u677F\u5757\u8BF4\u660E"),r.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:i.description,maxLength:300,onChange:v=>c("description",v.target.value)})),r.default.createElement("div",{className:"acv-field"},r.default.createElement("label",null,"\u663E\u793A\u5728"),r.default.createElement("div",{className:"acv-zone-picker"},ue.map(v=>{let y=i.zones.includes(v.key);return r.default.createElement("button",{key:v.key,type:"button",className:y?"acv-zone-option is-active":"acv-zone-option",onClick:()=>o(m=>{let $=y?m.zones.filter(P=>P!==v.key):[...m.zones,v.key];return{...m,zones:$.length?$:["home"]}})},r.default.createElement("span",{className:"acv-zone-tick"},y?"\u2713":""),v.label)})),r.default.createElement("span",{className:"acv-field-hint"},"\u53EF\u4EE5\u591A\u9009\uFF1A\u540C\u65F6\u52FE\u9009\u5C31\u4E24\u4E2A\u5730\u65B9\u90FD\u663E\u793A")),r.default.createElement("div",{className:"acv-field"},r.default.createElement("label",null,"\u5C01\u9762\u6784\u56FE"),r.default.createElement("div",{className:"acv-zone-picker"},wa.map(v=>r.default.createElement("button",{key:v.key,type:"button",className:i.motif===v.key?"acv-zone-option is-active":"acv-zone-option",onClick:()=>c("motif",v.key)},v.label))),r.default.createElement("span",{className:"acv-field-hint"},"\u534A\u900F\u660E\u51E0\u4F55\u56FE\u5F62\uFF0C\u753B\u5728\u6E10\u53D8\u4E0A\u9762")),r.default.createElement("div",{className:"acv-field"},r.default.createElement("label",null,"\u5361\u7247\u6E10\u53D8"),r.default.createElement("div",{className:"acv-color-row"},r.default.createElement("input",{type:"color",className:"acv-color",value:i.accent,onChange:v=>c("accent",v.target.value)}),r.default.createElement("input",{type:"color",className:"acv-color",value:i.accentTo,onChange:v=>c("accentTo",v.target.value)}),r.default.createElement("span",{className:"acv-space-cover acv-color-preview",style:{background:`linear-gradient(120deg, ${i.accent}, ${i.accentTo})`}}))),r.default.createElement("div",{className:"acv-row"},r.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:f},"\u53D6\u6D88"),r.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:n||!i.title.trim(),onClick:p},n?"\u4FDD\u5B58\u4E2D\u2026":a?"\u4FDD\u5B58":"\u521B\u5EFA\u677F\u5757")))}function ge({api:e,me:a,onDm:t,notify:f}){let[s,i]=r.default.useState(null),[o,n]=r.default.useState(""),[l,b]=r.default.useState(""),d=r.default.useCallback(()=>{e.adminUsers(o.trim()).then(p=>i(p.users)).catch(p=>f(p.message,{error:!0}))},[e,o,f]);r.default.useEffect(()=>{d()},[d]);async function c(p){b(p.id);try{await e.verifyAccount(p.id),f(`\u5DF2\u653E\u884C @${p.handle}`),d()}catch(v){f(v.message,{error:!0})}finally{b("")}}return s?r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{className:"acv-inline",style:{marginBottom:12}},r.default.createElement("input",{className:"acv-input",placeholder:"\u641C\u7D22\u7528\u6237\u540D\u6216\u6635\u79F0",value:o,onChange:p=>n(p.target.value)}),r.default.createElement("button",{type:"button",className:"acv-btn",onClick:d},"\u641C\u7D22")),s.length===0&&r.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5339\u914D\u7684\u7528\u6237"),s.map(p=>r.default.createElement("div",{key:p.id,className:"acv-admin-row"},r.default.createElement("span",{className:"acv-member-main"},r.default.createElement("span",{className:"acv-member-name"},r.default.createElement(F,{api:e,me:a,handle:p.handle,onDm:t},r.default.createElement("span",null,p.displayName),r.default.createElement("span",{className:"acv-member-meta"}," @",p.handle)),p.role==="admin"&&r.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u7BA1\u7406\u5458"),!p.emailVerified&&r.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u672A\u9A8C\u8BC1"),!p.allowDm&&r.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u5173\u79C1\u4FE1")),r.default.createElement("span",{className:"acv-member-meta"},p.email||"\uFF08\u65E0\u90AE\u7BB1\uFF09"," \xB7 ",p.postCount," \u4E2A\u5E16\u5B50 \xB7 \u6CE8\u518C\u4E8E ",G(p.createdAt))),!p.emailVerified&&r.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},disabled:l===p.id,onClick:()=>c(p)},l===p.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C")))):r.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function be({api:e,notify:a}){let[t,f]=r.default.useState(null),[s,i]=r.default.useState(null),[o,n]=r.default.useState(""),l=r.default.useCallback(()=>{e.adminSpaces().then(d=>f(d.spaces)).catch(d=>a(d.message,{error:!0}))},[e,a]);r.default.useEffect(()=>{l()},[l]);async function b(d){let c=!d.archivedAt;if(!(c&&!window.confirm(`\u5220\u9664\u677F\u5757\u300C${d.title}\u300D\uFF1F\u677F\u5757\u4F1A\u4ECE\u9996\u9875\u6D88\u5931\uFF0C\u5E16\u5B50\u4ECD\u4FDD\u7559\u5728\u5E93\u91CC\u3002`))){n(d.id);try{await e.archiveSpace(d.id,c),a(c?"\u677F\u5757\u5DF2\u5220\u9664":"\u677F\u5757\u5DF2\u6062\u590D"),l()}catch(p){a(p.message,{error:!0})}finally{n("")}}}return t?r.default.createElement(r.default.Fragment,null,s?r.default.createElement(he,{api:e,space:s==="new"?null:s,notify:a,onCancel:()=>i(null),onDone:()=>{i(null),l()}}):r.default.createElement("div",{className:"acv-row",style:{justifyContent:"flex-start",marginBottom:6}},r.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("new")},"\u65B0\u5EFA\u677F\u5757")),t.map(d=>r.default.createElement("div",{key:d.id,className:d.archivedAt?"acv-admin-row is-archived":"acv-admin-row"},r.default.createElement(da,{space:d,showBadge:!1,showEdition:!1,className:"acv-admin-swatch"}),r.default.createElement("span",{className:"acv-member-main"},r.default.createElement("span",{className:"acv-member-name"},d.title,r.default.createElement("span",{className:"acv-member-meta"}," /",d.slug),d.archivedAt&&r.default.createElement("span",{className:"acv-chip",style:{marginLeft:8}},"\u5DF2\u5220\u9664")),r.default.createElement("span",{className:"acv-member-meta"},d.postCount," \u4E2A\u5E16\u5B50 \xB7 ",d.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${G(d.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u5E16\u5B50",d.zones?.map(c=>r.default.createElement("span",{key:c,className:"acv-chip",style:{marginLeft:6}},c==="arvr"?"AR/VR":"\u9996\u9875")))),r.default.createElement("span",{style:{display:"flex",gap:6}},r.default.createElement("button",{type:"button",className:"acv-btn",style:{padding:"5px 12px",fontSize:12},onClick:()=>i(d)},"\u7F16\u8F91"),r.default.createElement("button",{type:"button",className:"acv-btn ghost",style:{padding:"5px 12px",fontSize:12},disabled:o===d.id,onClick:()=>b(d)},d.archivedAt?"\u6062\u590D":"\u5220\u9664"))))):r.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Ba({api:e,me:a,onDm:t,onBack:f,notify:s}){let[i,o]=r.default.useState("spaces"),[n,l]=r.default.useState(null);return r.default.useEffect(()=>{e.pendingAccounts().then(b=>l(b.accounts.length)).catch(()=>l(null))},[e,i]),r.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},r.default.createElement("div",null,r.default.createElement("button",{type:"button",className:"acv-back",onClick:f},"\u2190 \u8FD4\u56DE\u9996\u9875")),r.default.createElement("div",{className:"acv-admin-layout"},r.default.createElement("nav",{className:"acv-admin-nav","aria-label":"\u7BA1\u7406"},r.default.createElement("button",{type:"button",className:i==="spaces"?"is-active":"",onClick:()=>o("spaces")},"\u677F\u5757"),r.default.createElement("button",{type:"button",className:i==="users"?"is-active":"",onClick:()=>o("users")},"\u7528\u6237"),r.default.createElement("button",{type:"button",className:i==="accounts"?"is-active":"",onClick:()=>o("accounts")},r.default.createElement("span",null,"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),n>0&&r.default.createElement("span",{className:"acv-badge"},n))),r.default.createElement("section",{className:"acv-panel acv-admin-content",style:{padding:"20px 22px"}},r.default.createElement("div",{className:"acv-section-head"},r.default.createElement("h2",{className:"acv-section-title"},i==="spaces"?"\u677F\u5757":i==="users"?"\u7528\u6237":"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),r.default.createElement("span",{className:"acv-section-note"},i==="spaces"?"\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u677F\u5757\uFF1B\u5220\u9664\u540E\u53EF\u4ECE\u7BA1\u7406\u91CC\u6062\u590D":i==="users"?"\u5168\u90E8\u8D26\u53F7\uFF1B\u672A\u9A8C\u8BC1\u7684\u53EF\u4EE5\u76F4\u63A5\u653E\u884C":"\u6CA1\u914D SMTP \u65F6\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u4E0D\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u4EBA\u5DE5\u653E\u884C")),i==="spaces"&&r.default.createElement(be,{api:e,notify:s}),i==="users"&&r.default.createElement(ge,{api:e,me:a,onDm:t,notify:s}),i==="accounts"&&r.default.createElement(fe,{api:e,me:a,onDm:t,notify:s}))))}var aa=Y(require("react"),1);function Fa({api:e,zone:a,title:t,note:f,onOpenSpace:s}){let[i,o]=aa.default.useState(null),[n,l]=aa.default.useState("");return aa.default.useEffect(()=>{let b=!1;return e.zoneSpaces(a).then(d=>{b||(o(d.spaces),l(""))}).catch(d=>{b||l(d.message)}),()=>{b=!0}},[e,a]),aa.default.createElement("div",{className:"acv-zone"},aa.default.createElement("div",{className:"acv-section-head"},aa.default.createElement("h2",{className:"acv-section-title"},t),aa.default.createElement("span",{className:"acv-section-note"},f)),n&&aa.default.createElement("div",{className:"acv-empty"},n),!i&&!n&&aa.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),i&&i.length===0&&aa.default.createElement("div",{className:"acv-panel"},aa.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u4E13\u533A\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u300C\u7BA1\u7406 \u2192 \u677F\u5757\u300D\u91CC\u628A\u677F\u5757\u653E\u8FDB\u300C",t,"\u300D\u3002")),aa.default.createElement("div",{className:"acv-zone-grid"},i?.map(b=>aa.default.createElement(fa,{key:b.id,space:b,onOpen:s}))))}var V=Y(require("react"),1);function Va({api:e,me:a,onDm:t,onOpenPost:f}){let[s,i]=V.default.useState(""),[o,n]=V.default.useState(null),[l,b]=V.default.useState(!1),[d,c]=V.default.useState(!1),p=V.default.useRef(null);return V.default.useEffect(()=>{if(!l)return;let v=y=>{p.current&&!p.current.contains(y.target)&&b(!1)};return document.addEventListener("click",v),()=>document.removeEventListener("click",v)},[l]),V.default.useEffect(()=>{let v=s.trim();if(v.length===0){n(null);return}let y=setTimeout(async()=>{c(!0);try{let m=await e.search(v);n(m.posts||[]),b(!0)}catch{n([])}finally{c(!1)}},280);return()=>clearTimeout(y)},[e,s]),V.default.createElement("div",{className:"acv-search",ref:p},V.default.createElement("span",{className:"acv-search-icon","aria-hidden":"true"},V.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",focusable:"false"},V.default.createElement("circle",{cx:"7",cy:"7",r:"4.6",stroke:"currentColor",strokeWidth:"1.6"}),V.default.createElement("path",{d:"M10.5 10.5 14 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))),V.default.createElement("input",{className:"acv-search-input",type:"text",value:s,placeholder:"\u641C\u7D22\u5E16\u5B50","aria-label":"\u641C\u7D22\u5E16\u5B50",autoComplete:"off",spellCheck:!1,onChange:v=>i(v.target.value),onFocus:()=>s.trim()&&b(!0)}),l&&V.default.createElement("div",{className:"acv-search-panel"},d&&V.default.createElement("div",{className:"acv-search-empty"},"\u641C\u7D22\u4E2D\u2026"),!d&&o?.length===0&&V.default.createElement("div",{className:"acv-search-empty"},"\u6CA1\u6709\u627E\u5230\u300C",s.trim(),"\u300D"),o?.map(v=>V.default.createElement("button",{key:v.id,type:"button",className:"acv-search-item",onClick:()=>{b(!1),i(""),f(v.id)}},V.default.createElement("span",{className:"acv-search-title"},v.title),V.default.createElement("span",{className:"acv-search-meta"},v.spaceSlug," \xB7"," ",V.default.createElement(F,{api:e,me:a,handle:v.author?.handle,onDm:t},V.default.createElement("span",null,v.author?.displayName||v.author?.handle))," ","\xB7 ",G(v.createdAt))))))}var N=Y(require("react"),1);function ha({title:e,note:a,children:t}){return N.default.createElement("div",{className:"acv-settings-section"},N.default.createElement("div",{className:"acv-section-head"},N.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},e),a&&N.default.createElement("span",{className:"acv-section-note"},a)),t)}function Ha({api:e,me:a,onBack:t,onRefreshMe:f,notify:s}){let[i,o]=N.default.useState(a?.displayName||""),[n,l]=N.default.useState(a?.bio||""),[b,d]=N.default.useState(a?.allowDm!==!1),[c,p]=N.default.useState(""),[v,y]=N.default.useState(""),[m,$]=N.default.useState(""),[P,g]=N.default.useState(""),[T,C]=N.default.useState(""),[A,I]=N.default.useState("");if(N.default.useEffect(()=>{o(a?.displayName||""),l(a?.bio||""),d(a?.allowDm!==!1)},[a]),!a)return N.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");async function _(z,W,u){g(z),C("");try{await W(),s(u),await f?.()}catch(B){C(B.message)}finally{g("")}}return N.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:820}},N.default.createElement("div",null,N.default.createElement("button",{type:"button",className:"acv-back",onClick:t},"\u2190 \u8FD4\u56DE\u9996\u9875")),T&&N.default.createElement("div",{className:"acv-error"},T),N.default.createElement("div",{className:"acv-panel",style:{padding:"20px 22px"}},N.default.createElement("div",{className:"acv-section-head"},N.default.createElement("h2",{className:"acv-section-title"},"\u8D26\u53F7\u8BBE\u7F6E"),N.default.createElement("span",{className:"acv-section-note"},"@",a.handle)),N.default.createElement(ha,{title:"\u8D44\u6599",note:"\u6635\u79F0\u548C\u7B80\u4ECB\u4F1A\u663E\u793A\u5728\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u4E0A"},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u6635\u79F0"),N.default.createElement("input",{className:"acv-input",value:i,maxLength:24,onChange:z=>o(z.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u7B80\u4ECB"),N.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:n,maxLength:200,onChange:z=>l(z.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u63A5\u6536\u79C1\u4FE1"),N.default.createElement("div",{className:"acv-zone-picker"},N.default.createElement("button",{type:"button",className:b?"acv-zone-option is-active":"acv-zone-option",onClick:()=>d(!0)},"\u5141\u8BB8\u522B\u4EBA\u7ED9\u6211\u53D1\u79C1\u4FE1"),N.default.createElement("button",{type:"button",className:b?"acv-zone-option":"acv-zone-option is-active",onClick:()=>d(!1)},"\u5173\u95ED\u79C1\u4FE1"))),N.default.createElement("div",{className:"acv-row"},N.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:P==="profile",onClick:()=>_("profile",()=>e.updateProfile({displayName:i,bio:n,allowDm:b}),"\u8D44\u6599\u5DF2\u4FDD\u5B58")},P==="profile"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8D44\u6599"))),N.default.createElement(ha,{title:"\u90AE\u7BB1",note:a.emailVerified?"\u5DF2\u9A8C\u8BC1":"\u672A\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u540E\u624D\u80FD\u53D1\u5E16\u8BC4\u8BBA"},N.default.createElement("p",{className:"acv-space-sub",style:{marginBottom:10}},"\u5F53\u524D\u90AE\u7BB1\uFF1A",N.default.createElement("strong",null,a.email||"\uFF08\u6CA1\u6709\uFF09")),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u6362\u6210\u65B0\u90AE\u7BB1"),N.default.createElement("div",{className:"acv-inline"},N.default.createElement("input",{className:"acv-input",type:"email",placeholder:"new@example.com",value:c,onChange:z=>p(z.target.value)}),N.default.createElement("button",{type:"button",className:"acv-btn",disabled:P==="email"||!c.trim(),onClick:()=>_("email",async()=>{(await e.requestEmailChange(c.trim()))?.verifyLink&&s("\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7"),p("")},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u5230\u65B0\u90AE\u7BB1\uFF0C\u70B9\u5F00\u94FE\u63A5\u624D\u751F\u6548")},"\u53D1\u9001\u9A8C\u8BC1"))),!a.emailVerified&&N.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:P==="resend",onClick:()=>_("resend",async()=>{let z=await e.resend();if(z?.verifyLink)throw new Error(`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\uFF1A${z.verifyLink}`)},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u91CD\u53D1")},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6")),N.default.createElement(ha,{title:"\u5BC6\u7801",note:"\u81F3\u5C11 8 \u4F4D"},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u5F53\u524D\u5BC6\u7801"),N.default.createElement("input",{className:"acv-input",type:"password",value:v,onChange:z=>y(z.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u65B0\u5BC6\u7801"),N.default.createElement("input",{className:"acv-input",type:"password",value:m,onChange:z=>$(z.target.value)})),N.default.createElement("div",{className:"acv-row"},N.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:P==="password"||!v||!m,onClick:()=>_("password",async()=>{await e.changePassword({currentPassword:v,newPassword:m}),y(""),$("")},"\u5BC6\u7801\u5DF2\u66F4\u65B0")},P==="password"?"\u66F4\u65B0\u4E2D\u2026":"\u66F4\u65B0\u5BC6\u7801")),N.default.createElement("p",{className:"acv-field-hint"},"\u5FD8\u4E86\u5F53\u524D\u5BC6\u7801\uFF1F\u53EF\u4EE5\u7ED9 ",a.email||"\uFF08\u6CA1\u6709\u90AE\u7BB1\uFF09"," \u53D1\u4E00\u5C01\u91CD\u7F6E\u90AE\u4EF6\uFF0C\u70B9\u94FE\u63A5\u8BBE\u65B0\u5BC6\u7801\u3002"),A&&N.default.createElement("div",{className:"acv-notice"},A),N.default.createElement("div",{className:"acv-row"},N.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:P==="reset-mail"||!a.email,onClick:async()=>{g("reset-mail"),C(""),I("");try{let z=await e.forgotPassword(a.email);I(z?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${z.verifyLink}`:"\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(z){C(z.message)}finally{g("")}}},P==="reset-mail"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u90AE\u4EF6\u91CD\u7F6E\u5BC6\u7801")))))}var S=Y(require("react"),1);function xe(e,a){if(!e||e.thread?.id!==a.thread?.id)return a;let t=new Map(e.messages.map(s=>[s.id,s]));for(let s of a.messages)t.set(s.id,s);let f=[...t.values()].sort((s,i)=>s.createdAt-i.createdAt||(s.id<i.id?-1:1));return{...a,messages:f}}function ja({api:e,me:a,initialThreadId:t,onBack:f,onDm:s,notify:i}){let[o,n]=S.default.useState(null),[l,b]=S.default.useState(t||null),[d,c]=S.default.useState(null),[p,v]=S.default.useState(""),[y,m]=S.default.useState(!1),[$,P]=S.default.useState(!1),[g,T]=S.default.useState(""),C=S.default.useRef(null),A=S.default.useCallback(()=>{a&&e.dmThreads().then(u=>{n(u.threads),!l&&u.threads.length&&b(u.threads[0].id)}).catch(u=>T(u.message))},[e,a,l]),I=S.default.useCallback(u=>{c(B=>xe(B,u))},[]);S.default.useEffect(()=>{A()},[A]),S.default.useEffect(()=>{l&&e.dmThread(l).then(u=>{I(u),T(""),A()}).catch(u=>T(u.message))},[e,l,I,A]),S.default.useEffect(()=>{if(!a||!l)return;let u=setInterval(()=>{document.hidden||e.dmThread(l).then(B=>{I(B),A()}).catch(()=>{})},8e3);return()=>clearInterval(u)},[e,a,l,I,A]),S.default.useEffect(()=>{let u=C.current;u&&(u.scrollTop=u.scrollHeight)},[d]);async function _(){let u=p.trim();if(!(!u||!l)){m(!0);try{await e.dmSend(l,u),v("");let B=await e.dmThread(l);I(B),A()}catch(B){i(B.message,{error:!0})}finally{m(!1)}}}async function z(){let u=d?.messages?.[0];if(!(!u||!l||$)){P(!0);try{let B=await e.dmThread(l,u.createdAt);c(L=>{if(!L)return B;let q=new Map(B.messages.map(ea=>[ea.id,ea]));for(let ea of L.messages)q.set(ea.id,ea);let sa=[...q.values()].sort((ea,O)=>ea.createdAt-O.createdAt||(ea.id<O.id?-1:1));return{...L,messages:sa,total:B.total}})}catch(B){i(B.message,{error:!0})}finally{P(!1)}}}if(!a)return S.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");let W=!!(d&&d.messages.length<d.total);return S.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},S.default.createElement("div",null,S.default.createElement("button",{type:"button",className:"acv-back",onClick:f},"\u2190 \u8FD4\u56DE\u9996\u9875")),g&&S.default.createElement("div",{className:"acv-error"},g),S.default.createElement("div",{className:"acv-dm-layout"},S.default.createElement("aside",{className:"acv-panel acv-dm-list"},S.default.createElement("div",{className:"acv-section-head"},S.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},"\u79C1\u4FE1"),S.default.createElement("span",{className:"acv-section-note"},o?.length||0)),o?.length===0&&S.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u79C1\u4FE1"),o?.map(u=>S.default.createElement("button",{key:u.id,type:"button",className:u.id===l?"acv-dm-item is-active":"acv-dm-item",onClick:()=>b(u.id)},S.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},J(u.other?.displayName||u.other?.handle)),S.default.createElement("span",{className:"acv-dm-main"},S.default.createElement("span",{className:"acv-dm-name"},S.default.createElement(F,{api:e,me:a,handle:u.other?.handle,onDm:s},S.default.createElement("span",null,u.other?.displayName||u.other?.handle)),u.unread>0&&S.default.createElement("span",{className:"acv-badge"},u.unread)),S.default.createElement("span",{className:"acv-dm-preview"},u.lastMessage?.body||"\u8FD8\u6CA1\u6709\u6D88\u606F"))))),S.default.createElement("section",{className:"acv-panel acv-dm-pane"},!d&&S.default.createElement("div",{className:"acv-empty"},"\u9009\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB"),d&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"acv-dm-head"},S.default.createElement("span",{className:"acv-avatar acv-avatar--sm"},J(d.thread.other?.displayName)),S.default.createElement(F,{api:e,me:a,handle:d.thread.other?.handle,onDm:s},S.default.createElement("span",{style:{fontWeight:600}},d.thread.other?.displayName),S.default.createElement("span",{className:"acv-member-meta"},"@",d.thread.other?.handle))),S.default.createElement("div",{className:"acv-dm-messages",ref:C},W&&S.default.createElement("button",{type:"button",className:"acv-dm-more",disabled:$,onClick:z},$?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u65E9\u7684\u6D88\u606F"),d.messages.length===0&&S.default.createElement("div",{className:"acv-empty"},"\u6253\u4E2A\u62DB\u547C\u5427"),d.messages.map(u=>S.default.createElement("div",{key:u.id,className:u.mine?"acv-dm-msg is-mine":"acv-dm-msg"},S.default.createElement("div",{className:"acv-dm-bubble"},u.body),S.default.createElement("div",{className:"acv-dm-time"},G(u.createdAt))))),S.default.createElement("div",{className:"acv-dm-composer"},S.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:p,placeholder:"\u5199\u70B9\u4EC0\u4E48\u2026\uFF08Enter \u53D1\u9001\uFF09",onChange:u=>v(u.target.value),onKeyDown:u=>{u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),_())}}),S.default.createElement("button",{type:"button",className:"acv-chat-send",disabled:y||!p.trim(),onClick:_,"aria-label":"\u53D1\u9001"},S.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},S.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}))))))))}var j=Y(require("react"),1);function Wa({api:e,token:a,onDone:t,notify:f}){let[s,i]=j.default.useState(""),[o,n]=j.default.useState(""),[l,b]=j.default.useState(!1),[d,c]=j.default.useState("");async function p(v){if(v.preventDefault(),s!==o)return c("\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4");b(!0),c("");try{await e.resetPassword({token:a,password:s}),f("\u5BC6\u7801\u5DF2\u91CD\u7F6E\uFF0C\u8BF7\u7528\u65B0\u5BC6\u7801\u767B\u5F55"),t()}catch(y){c(y.message)}finally{b(!1)}}return j.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:460,paddingTop:40}},j.default.createElement("div",{className:"acv-panel",style:{padding:"24px"}},j.default.createElement("h2",{className:"acv-section-title"},"\u8BBE\u7F6E\u65B0\u5BC6\u7801"),j.default.createElement("p",{className:"acv-modal-sub"},"\u91CD\u7F6E\u540E\u6240\u6709\u5DF2\u767B\u5F55\u8BBE\u5907\u90FD\u4F1A\u9000\u51FA\u3002"),d&&j.default.createElement("div",{className:"acv-error"},d),j.default.createElement("form",{onSubmit:p},j.default.createElement("div",{className:"acv-field"},j.default.createElement("label",null,"\u65B0\u5BC6\u7801"),j.default.createElement("input",{className:"acv-input",type:"password",value:s,onChange:v=>i(v.target.value)})),j.default.createElement("div",{className:"acv-field"},j.default.createElement("label",null,"\u518D\u8F93\u4E00\u6B21"),j.default.createElement("input",{className:"acv-input",type:"password",value:o,onChange:v=>n(v.target.value)})),j.default.createElement("div",{className:"acv-row"},j.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:l||s.length<8},l?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u65B0\u5BC6\u7801")))))}function ye({me:e,mode:a,api:t,emailNotice:f,onDsh:s,onAuth:i,onLogout:o,onHome:n,onResend:l,onAdmin:b,onAccount:d,onDm:c,onDmUser:p,dmUnread:v=0,onOpenPost:y,tabs:m,activeTab:$,onSelectTab:P}){let[g,T]=x.default.useState(!1);return x.default.useEffect(()=>{if(!g)return;let C=()=>T(!1);return window.addEventListener("click",C),()=>window.removeEventListener("click",C)},[g]),x.default.createElement("div",{className:"acv-topbar"},x.default.createElement("div",{className:"acv-tabs"},m.map(C=>x.default.createElement("button",{key:C.key,type:"button",className:$===C.key?"acv-tab is-active":"acv-tab",onClick:()=>P(C.key)},C.label))),x.default.createElement(Va,{api:t,me:e,onDm:p,onOpenPost:y}),x.default.createElement("div",{className:"acv-topbar-grow"}),x.default.createElement("div",{className:"acv-topbar-right"},a==="plugin"&&x.default.createElement("button",{type:"button",className:"acv-dsh",onClick:s,title:"\u548C DSH \u804A\u804A\u8FD9\u4E2A\u793E\u533A"},x.default.createElement("span",{className:"acv-dsh-dot"}),"DSH\u52A9\u624B"),a==="plugin"&&x.default.createElement("span",{className:"acv-divider"}),e?x.default.createElement("div",{className:"acv-relative"},x.default.createElement("button",{type:"button",className:"acv-user",onClick:C=>{C.stopPropagation(),T(A=>!A)}},x.default.createElement(F,{api:t,me:e,handle:e.handle,disabled:g},x.default.createElement("span",{className:"acv-avatar"},J(e.displayName||e.handle)),x.default.createElement("span",{className:"acv-user-name"},e.displayName||e.handle)),x.default.createElement("span",{className:"acv-caret"},"\u25BE")),g&&x.default.createElement("div",{className:"acv-menu",onClick:C=>C.stopPropagation()},x.default.createElement("div",{className:"acv-menu-note"},"@",e.handle," \xB7 ",e.role==="admin"?"\u7BA1\u7406\u5458":"\u6210\u5458"),x.default.createElement("div",{className:"acv-menu-group"},"\u4E2A\u4EBA\u7BA1\u7406"),x.default.createElement("button",{type:"button",onClick:()=>{T(!1),d()}},"\u8D26\u53F7\u8BBE\u7F6E"),x.default.createElement("button",{type:"button",onClick:()=>{T(!1),c()}},"\u79C1\u4FE1",v>0?` \xB7 ${v}`:""),!e.emailVerified&&x.default.createElement("button",{type:"button",onClick:()=>{T(!1),l()}},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6"),e.role==="admin"&&x.default.createElement(x.default.Fragment,null,x.default.createElement("div",{className:"acv-menu-group"},"\u7BA1\u7406\u5458"),x.default.createElement("button",{type:"button",onClick:()=>{T(!1),b()}},"\u793E\u533A\u7BA1\u7406")),x.default.createElement("div",{className:"acv-menu-group"}),x.default.createElement("button",{type:"button",onClick:()=>{T(!1),o()}},"\u9000\u51FA\u767B\u5F55"))):x.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("login")},"\u767B\u5F55")),f&&x.default.createElement("div",{style:{display:"none"}},f))}function Ya({mode:e="site",base:a="",tokenStore:t,onDsh:f}){let s=x.default.useMemo(()=>Na({base:a,credentials:e==="site"?"same-origin":"omit",token:t?.get()||null,onToken:O=>t?.set(O)}),[a,e,t]),[i,o]=x.default.useState(null),[n,l]=x.default.useState(null),[b,d]=x.default.useState("loading"),[c,p]=x.default.useState({name:"home"}),[v,y]=x.default.useState("home"),[m,$]=x.default.useState(0),[P,g]=x.default.useState(null),[T,C]=x.default.useState(null),[A,I]=x.default.useState(0),_=x.default.useCallback((O,{error:K=!1}={})=>{C({text:O,error:K,key:Date.now()})},[]);x.default.useEffect(()=>{if(!T)return;let O=setTimeout(()=>C(null),3200);return()=>clearTimeout(O)},[T]);let z=x.default.useCallback(async()=>{try{let O=await s.bootstrap();o(O.account||null),l(O.home||null)}catch{o(null)}finally{d("ready")}},[s]);x.default.useEffect(()=>{z()},[z]),x.default.useEffect(()=>{if(e!=="site")return;let K=new URLSearchParams(window.location.search).get("token");K&&window.location.pathname.startsWith("/reset")&&p({name:"reset",token:K})},[e]),x.default.useEffect(()=>{let O=()=>g("login");return window.addEventListener("achoverse:auth",O),()=>window.removeEventListener("achoverse:auth",O)},[]),x.default.useEffect(()=>{if(e!=="site")return;let O=new URLSearchParams(window.location.search),K=O.get("token");if(!K||!window.location.pathname.startsWith("/verify"))return;let ca=O.get("kind");(ca==="email"?s.confirmEmailChange(K):s.verify(K)).then(ma=>{o(ma.account||null),_(ca==="email"?"\u65B0\u90AE\u7BB1\u5DF2\u751F\u6548\uFF0C\u9A8C\u8BC1\u4E5F\u5B8C\u6210\u4E86":"\u90AE\u7BB1\u9A8C\u8BC1\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u53D1\u5E16\u4E86"),window.history.replaceState({},"","/")}).catch(ma=>_(ma.message,{error:!0}))},[s,e,_]),x.default.useEffect(()=>{if(!i){$(0);return}let O=!1,K=()=>s.dmUnread().then(ba=>{O||$(ba.unread||0)}).catch(()=>{});K();let ca=setInterval(K,3e4);return()=>{O=!0,clearInterval(ca)}},[s,i]);let W=async O=>{try{let K=await s.dmOpenWith({targetId:O.id});p({name:"dm",threadId:K.thread.id})}catch(K){_(K.message,{error:!0})}},u=O=>p({name:"space",slug:O}),B=(O,K)=>p({name:"post",id:O,from:K||{name:"home"}}),L=()=>{p({name:"home"}),I(O=>O+1),l(null)};return x.default.createElement("div",{className:e==="plugin"?"acv-root acv-root--panel":"acv-root"},x.default.createElement("div",{className:"acv-frame"},x.default.createElement(ye,{me:i,mode:e,api:s,onOpenPost:B,onDsh:()=>{if(f)return f();window.dispatchEvent(new CustomEvent("achoverse:open-dsh"))},onAuth:g,onLogout:async()=>{try{await s.logout()}catch{}s.setToken(null),o(null),_("\u5DF2\u7ECF\u9000\u51FA\u767B\u5F55"),L()},onHome:L,tabs:[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR"}],activeTab:v,onSelectTab:O=>{y(O),p({name:"home"})},onAdmin:()=>p({name:"admin"}),onAccount:()=>p({name:"account"}),onDm:()=>p({name:"dm"}),onDmUser:W,dmUnread:m,onResend:async()=>{try{let O=await s.resend();_(O?.verifyLink?"\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7":"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001")}catch(O){_(O.message,{error:!0})}}}),c.name==="home"&&v==="arvr"&&x.default.createElement(Fa,{api:s,zone:"arvr",title:"AR/VR \u4E13\u533A",note:"\u4E3B\u9898\u4E13\u533A\uFF1A\u53EA\u6536\u5F55 AR/VR \u76F8\u5173\u7684\u677F\u5757",onOpenSpace:u}),c.name==="home"&&v==="home"&&b!=="ready"&&x.default.createElement("div",{className:"acv-main"},x.default.createElement("div",{className:"acv-col"},x.default.createElement("div",{className:"acv-skeleton"}),x.default.createElement("div",{className:"acv-skeleton"}),x.default.createElement("div",{className:"acv-skeleton"})),x.default.createElement("div",{className:"acv-col"},x.default.createElement("div",{className:"acv-skeleton",style:{height:260}}))),c.name==="home"&&v==="home"&&b==="ready"&&x.default.createElement(Pa,{initialData:n,key:A,api:s,me:i,onOpenSpace:u,onOpenPost:O=>B(O,{name:"home"}),onAuth:()=>g("login"),onDm:W,notify:_}),c.name==="space"&&x.default.createElement(_a,{api:s,slug:c.slug,me:i,onBack:L,onOpenPost:O=>B(O,{name:"space",slug:c.slug}),onAuth:()=>g("login"),onDm:W,notify:_}),c.name==="reset"&&x.default.createElement(Wa,{api:s,token:c.token,notify:_,onDone:()=>{window.history.replaceState({},"","/"),p({name:"home"}),g("login")}}),c.name==="account"&&x.default.createElement(Ha,{api:s,me:i,onBack:L,onRefreshMe:z,notify:_}),c.name==="dm"&&x.default.createElement(ja,{api:s,me:i,initialThreadId:c.threadId,onBack:L,onDm:W,notify:_}),c.name==="admin"&&x.default.createElement(Ba,{api:s,me:i,onDm:W,onBack:L,notify:_}),c.name==="post"&&x.default.createElement(Ia,{api:s,id:c.id,me:i,backTo:c.from?.name==="space"?"space":"home",onDm:W,onBack:()=>c.from?.name==="space"?p({name:"space",slug:c.from.slug}):L(),onAuth:()=>g("login"),notify:_})),P&&x.default.createElement(Ua,{api:s,initialMode:P,onClose:()=>g(null),onDone:O=>{o(O),g(null),l(null),L(),_("\u767B\u5F55\u6210\u529F")},notify:_}),T&&x.default.createElement("div",{className:T.error?"acv-toast is-error":"acv-toast"},T.text))}var D=Y(require("react"),1);function va(e,a=""){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,role:e,text:a,tools:[]}}async function Ne({token:e,message:a,signal:t,onEvent:f}){let s=await fetch("/community/ai/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e,message:a}),signal:t});if(!s.ok||!s.body){let l=`HTTP ${s.status}`;try{l=(await s.json())?.error||l}catch{}throw new Error(l)}let i=s.body.getReader(),o=new TextDecoder,n="";for(;;){let{value:l,done:b}=await i.read();if(b)break;n+=o.decode(l,{stream:!0});let d;for(;(d=n.indexOf(`

`))>=0;){let c=n.slice(0,d);n=n.slice(d+2);for(let p of c.split(`
`)){if(!p.startsWith("data:"))continue;let v=p.slice(5).trim();if(v)try{f(JSON.parse(v))}catch{}}}}}function qa({tokenStore:e,onClose:a,onLogin:t}){let[f,s]=D.default.useState(()=>[va("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),[i,o]=D.default.useState(""),[n,l]=D.default.useState(!1),[b,d]=D.default.useState(""),[c,p]=D.default.useState(!!e?.get()),[v,y]=D.default.useState(!1),m=D.default.useRef(null);D.default.useEffect(()=>{let g=m.current;g&&(g.scrollTop=g.scrollHeight)},[f]),D.default.useEffect(()=>{let g=!1;return fetch("/community/ai/history",{cache:"no-store"}).then(T=>T.ok?T.json():{messages:[]}).then(T=>{if(g)return;let C=(T?.messages||[]).map(A=>({...va(A.role,A.text),id:`h-${Math.random().toString(36).slice(2,8)}`}));C.length&&s(C)}).catch(()=>{}).finally(()=>{g||y(!0)}),()=>{g=!0}},[]),D.default.useEffect(()=>{let g=setInterval(()=>p(!!e?.get()),1500);return()=>clearInterval(g)},[e]);let $=g=>s(T=>{let C=[...T],A={...C[C.length-1]};return C[C.length-1]=g(A),C});async function P(g){let T=String(g??i).trim();if(!T||n)return;let C=e?.get();if(!C){d("\u5148\u767B\u5F55\u793E\u533A\uFF0C\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u8BF4\u8BDD");return}d(""),l(!0),o(""),s(A=>[...A,va("user",T),va("assistant","")]);try{await Ne({token:C,message:T,onEvent:A=>{A.type==="text"?$(I=>({...I,text:I.text?`${I.text}
${A.text}`:A.text})):A.type==="tool"?$(I=>({...I,tools:A.phase==="call"?[...I.tools,A.name]:I.tools})):A.type==="error"&&d(A.error||"\u5BF9\u8BDD\u5931\u8D25")}})}catch(A){d(A.message),/登录|401/.test(A.message)&&p(!1)}finally{l(!1)}}return D.default.createElement("div",{className:"acv-drawer",role:"dialog","aria-label":"DSH \u5BF9\u8BDD"},D.default.createElement("div",{className:"acv-drawer-head"},D.default.createElement("span",{className:"acv-dsh",style:{padding:"6px 14px"}},D.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),D.default.createElement("span",{style:{fontWeight:700}},"\u793E\u533A\u52A9\u624B"),D.default.createElement("span",{style:{flex:1}}),D.default.createElement("button",{type:"button",className:"acv-back",onClick:a,"aria-label":"\u5173\u95ED"},"\u2715")),D.default.createElement("div",{className:"acv-drawer-body",ref:m},f.map(g=>D.default.createElement("div",{key:g.id,className:`acv-chat ${g.role==="user"?"is-user":"is-agent"}`},g.tools?.length>0&&D.default.createElement("div",{className:"acv-chat-tools"},g.tools.map((T,C)=>D.default.createElement("span",{key:`${T}-${C}`,className:"acv-chip"},"\u8C03\u7528 ",T))),g.text&&(g.role==="assistant"?D.default.createElement("div",{className:"acv-chat-text acv-chat-text--md"},D.default.createElement(ra,{text:g.text})):D.default.createElement("div",{className:"acv-chat-text"},g.text)),!g.text&&g.role==="assistant"&&n&&D.default.createElement("div",{className:"acv-chat-typing"},"\u2026"))),b&&D.default.createElement("div",{className:"acv-error"},b),!c&&D.default.createElement("div",{className:"acv-notice",style:{marginTop:12}},"\u8FD8\u6CA1\u767B\u5F55\u793E\u533A\uFF0C\u767B\u5F55\u4E4B\u540E\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002",D.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>{t?.(),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55"))),D.default.createElement("div",{className:"acv-drawer-foot"},D.default.createElement("div",{className:"acv-chat-composer"},D.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:i,placeholder:n?"\u6B63\u5728\u56DE\u590D\u2026":"\u548C DSH \u804A\u804A\u793E\u533A\uFF0C\u6216\u8BA9\u5B83\u53D1\u4E00\u6761\u5E16",onChange:g=>o(g.target.value),onKeyDown:g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),P())}}),D.default.createElement("button",{type:"button",className:"acv-chat-send",onClick:()=>P(),disabled:n||!i.trim(),"aria-label":"\u53D1\u9001"},n?D.default.createElement("span",{className:"acv-chat-send-dot"}):D.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},D.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})))),D.default.createElement("div",{className:"acv-chat-hint"},"Enter \u53D1\u9001 \xB7 Shift + Enter \u6362\u884C")))}var Ka="achoverse-community",ga="achoverse.community.token",Ga="https://community.achoverse.com",we=["slots"];function Xa(){if(typeof document>"u")return;let e=document.querySelector("style[data-acv-community]");e||(e=document.createElement("style"),e.setAttribute("data-acv-community","styles"),document.head.appendChild(e)),e.textContent!==ua&&(e.textContent=ua)}function ke({size:e=22,active:a=!1}){return R.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},R.default.createElement("circle",{cx:12,cy:8.5,r:3.4,stroke:"currentColor",strokeWidth:a?2:1.7}),R.default.createElement("path",{d:"M4.6 19.4c.8-3.9 3.8-6.1 7.4-6.1s6.6 2.2 7.4 6.1",stroke:"currentColor",strokeWidth:a?2:1.7,strokeLinecap:"round"}))}function Se(){return{get(){try{return window.localStorage.getItem(ga)}catch{return null}},set(e){try{e?window.localStorage.setItem(ga,e):window.localStorage.removeItem(ga)}catch{}}}}function Ce(){let[e,a]=R.default.useState(null),[t,f]=R.default.useState(!1),s=R.default.useMemo(()=>Se(),[]);return R.default.useEffect(()=>{Xa();let i=!1;return fetch("/community/config",{cache:"no-store"}).then(o=>o.ok?o.json():Promise.reject(new Error(String(o.status)))).then(o=>{i||a(o?.baseUrl||Ga)}).catch(()=>{i||a(Ga)}),()=>{i=!0}},[]),e?R.default.createElement(R.default.Fragment,null,R.default.createElement(Ya,{mode:"plugin",base:e,tokenStore:s,onDsh:()=>f(!0)}),t?R.default.createElement(qa,{tokenStore:s,onClose:()=>f(!1)}):null):R.default.createElement("div",{className:"acv-root acv-root--panel"},R.default.createElement("div",{className:"acv-frame"},R.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u8FDE\u63A5\u793E\u533A\u2026")))}function Ee(e){Xa(),e.slots.inject("main",()=>e.slots.register({name:"main",key:Ka},Ce)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Ka,order:30,label:()=>"Achoverse\u793E\u533A"},ke))}
return module.exports}})
