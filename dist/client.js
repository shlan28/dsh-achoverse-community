window.__ModuleLoader__.load({id:"dsh-achoverse-community",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var te=Object.create;var ma=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var ne=Object.getOwnPropertyNames;var oe=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty;var Na=(a,e)=>()=>{try{return e||a((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}},re=(a,e)=>{for(var t in e)ma(a,t,{get:e[t],enumerable:!0})},ka=(a,e,t,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ne(e))!ie.call(a,s)&&s!==t&&ma(a,s,{get:()=>e[s],enumerable:!(u=se(e,s))||u.enumerable});return a};var G=(a,e,t)=>(t=a!=null?te(oe(a)):{},ka(e||!a||!a.__esModule?ma(t,"default",{value:a,enumerable:!0}):t,a)),ce=a=>ka(ma({},"__esModule",{value:!0}),a);var Ta=Na(aa=>{"use strict";var ve=require("react");function za(a){var e="https://react.dev/errors/"+a;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+a+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function oa(){}var ea={d:{f:oa,r:function(){throw Error(za(522))},D:oa,C:oa,L:oa,m:oa,X:oa,S:oa,M:oa},p:0,findDOMNode:null},me=Symbol.for("react.portal"),ue=Symbol.for("react.recoverable"),Ea=Symbol.for("react.optimistic_key");function fe(a,e,t){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:u==null?null:u===Ea?Ea:""+u,children:a,containerInfo:e,implementation:t}}var ra=ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function fa(a,e){if(a==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}aa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ea;aa.browser=function(a){return{$$typeof:ue,_reason:a}};aa.createPortal=function(a,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(za(299));return fe(a,e,null,t)};aa.flushSync=function(a){var e=ra.T,t=ea.p;try{if(ra.T=null,ea.p=2,a)return a()}finally{ra.T=e,ea.p=t,ea.d.f()}};aa.preconnect=function(a,e){typeof a=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,ea.d.C(a,e))};aa.prefetchDNS=function(a){typeof a=="string"&&ea.d.D(a)};aa.preinit=function(a,e){if(typeof a=="string"&&e&&typeof e.as=="string"){var t=e.as,u=fa(t,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,i=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;t==="style"?ea.d.S(a,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:u,integrity:s,fetchPriority:i}):t==="script"&&ea.d.X(a,{crossOrigin:u,integrity:s,fetchPriority:i,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};aa.preinitModule=function(a,e){if(typeof a=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var t=fa(e.as,e.crossOrigin);ea.d.M(a,{crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}}else e==null&&ea.d.M(a)};aa.preload=function(a,e){if(typeof a=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var t=e.as,u=fa(t,e.crossOrigin);ea.d.L(a,t,{crossOrigin:u,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};aa.preloadModule=function(a,e){if(typeof a=="string")if(e){var t=fa(e.as,e.crossOrigin);ea.d.m(a,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:t,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0})}else ea.d.m(a)};aa.requestFormReset=function(a){ea.d.r(a)};aa.unstable_batchedUpdates=function(a,e){return a(e)};aa.useFormState=function(a,e,t){return ra.H.useFormState(a,e,t)};aa.useFormStatus=function(){return ra.H.useHostTransitionStatus()};aa.version="19.3.1"});var Oa=Na((qe,Pa)=>{"use strict";function Da(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Da)}catch(a){console.error(a)}}Da(),Pa.exports=Ta()});var Ie={};re(Ie,{apply:()=>_e,inject:()=>Oe});module.exports=ce(Ie);var ta=G(require("react"),1);var ba=`/* Achoverse \u793E\u533A\uFF1A\u6D45\u7070\u753B\u5E03 + \u767D\u8272\u5927\u5706\u89D2\u5361\u7247 + \u7C89\u7D2B\u6E10\u53D8\u4E3B\u89C6\u89C9\u3002 */

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

/* ------------------------------------------------------------- \u54C1\u724C\u56FE */

/* \u9996\u9875\u300C\u793E\u533A\u677F\u5757\u300D\u6807\u9898\u5DE6\u8FB9\u7684\u4E3B\u89C6\u89C9\uFF08full \u7248\uFF09\u3002 */
.acv-section-head--brand {
  align-items: center;
  gap: 9px;
}

.acv-home-mascot {
  display: block;
  flex: none;
  user-select: none;
}

/* \u8F93\u5165\u6846\u4E0A\u65B9 / \u6807\u9898\u65C1\u7684\u5C0F\u5FBD\u6807\uFF08\u63CF\u8FB9\u7248\uFF0C\u5C0F\u5C3A\u5BF8\u66F4\u6E05\u695A\uFF09\u3002 */
.acv-brand-mark {
  display: block;
  flex: none;
  user-select: none;
}

/* \u5C0F\u5FBD\u6807\u538B\u5728\u8F93\u5165\u6846\u9876\u8FB9\u4E0A\u300C\u63A2\u51FA\u5934\u300D\uFF1A\u5BB9\u5668\u7559 26px\u3001\u4E0B\u6CBF\u8D1F margin \u8BA9\u8F93\u5165\u6846\u5403\u6389 9px\uFF0C
   \u518D\u7528 z-index \u628A\u56FE\u62AC\u5230\u8F93\u5165\u6846\u4E0A\u9762\u3002 */
.acv-input-brand {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-end;
  height: 26px;
  padding-left: 14px;
  margin-bottom: -9px;
  line-height: 0;
  pointer-events: none;
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
  display: flex;
  align-items: center;
  gap: 9px;
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

/* ------------------------------------------------------------- \u5934\u50CF\u8BBE\u7F6E */

.acv-avatar--lg {
  width: 64px;
  height: 64px;
  font-size: 20px;
}

.acv-avatar-editor {
  display: flex;
  align-items: flex-start;
  gap: 18px;
}

.acv-avatar-fields {
  flex: 1;
  min-width: 0;
  display: grid;
  gap: 10px;
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
`;var x=G(require("react"),1);function Ca({base:a="",token:e=null,credentials:t="same-origin",onToken:u}={}){let s=e;function i(o){s=o||null,u?.(s)}async function r(o,{method:v="GET",body:g,signal:l}={}){let n={};g!==void 0&&(n["content-type"]="application/json"),s&&(n.authorization=`Bearer ${s}`);let d=await fetch(a+o,{method:v,headers:n,body:g===void 0?void 0:JSON.stringify(g),credentials:s?"omit":t,cache:"no-store",signal:l}),p=await d.text(),w={};try{w=p?JSON.parse(p):{}}catch{w={error:p.slice(0,200)}}if(!d.ok){let T=new Error(w?.error||`HTTP ${d.status}`);throw T.code=w?.code,T.status=d.status,T}return w}return{raw:r,setToken:i,getToken:()=>s,me:()=>r("/api/auth/me"),home:()=>r("/api/home"),bootstrap:()=>r("/api/bootstrap"),spaces:()=>r("/api/spaces"),zoneSpaces:o=>r(`/api/zones/${encodeURIComponent(o)}`),space:o=>r(`/api/spaces/${encodeURIComponent(o)}`),post:o=>r(`/api/posts/${encodeURIComponent(o)}`),captcha:()=>r("/api/captcha"),register:o=>r("/api/auth/register",{method:"POST",body:o}),login:o=>r("/api/auth/login",{method:"POST",body:o}),logout:()=>r("/api/auth/logout",{method:"POST",body:{}}),resend:()=>r("/api/auth/resend",{method:"POST",body:{}}),verify:o=>r("/api/auth/verify",{method:"POST",body:{token:o}}),createPost:o=>r("/api/posts",{method:"POST",body:o}),createComment:(o,v)=>r(`/api/posts/${encodeURIComponent(o)}/comments`,{method:"POST",body:v}),updateProfile:o=>r("/api/account/profile",{method:"POST",body:o}),requestEmailChange:o=>r("/api/account/email",{method:"POST",body:{email:o}}),confirmEmailChange:o=>r("/api/account/email/confirm",{method:"POST",body:{token:o}}),changePassword:o=>r("/api/account/password",{method:"POST",body:o}),forgotPassword:o=>r("/api/account/password/forgot",{method:"POST",body:{email:o}}),resetPassword:o=>r("/api/account/password/reset",{method:"POST",body:o}),dmThreads:()=>r("/api/dm/threads"),dmUnread:()=>r("/api/dm/unread"),dmThread:(o,v)=>r(`/api/dm/thread/${encodeURIComponent(o)}${v?`?before=${encodeURIComponent(v)}`:""}`),dmOpenWith:o=>r("/api/dm/thread",{method:"POST",body:o}),dmSend:(o,v)=>r(`/api/dm/thread/${encodeURIComponent(o)}`,{method:"POST",body:{body:v}}),user:o=>r(`/api/users/${encodeURIComponent(o)}`),adminUsers:o=>r(`/api/admin/users${o?`?q=${encodeURIComponent(o)}`:""}`),pendingAccounts:()=>r("/api/admin/pending"),adminSpaces:()=>r("/api/admin/spaces"),createSpace:o=>r("/api/admin/spaces",{method:"POST",body:o}),updateSpace:(o,v)=>r(`/api/admin/spaces/${encodeURIComponent(o)}/update`,{method:"POST",body:v}),archiveSpace:(o,v=!0)=>r(`/api/admin/spaces/${encodeURIComponent(o)}/archive`,{method:"POST",body:{archived:v}}),verifyAccount:o=>r("/api/admin/verify",{method:"POST",body:{accountId:o}}),setPostStatus:(o,v)=>r(`/api/posts/${encodeURIComponent(o)}/status`,{method:"POST",body:{status:v}}),notifications:()=>r("/api/notifications"),markRead:o=>r("/api/notifications/read",{method:"POST",body:{ids:o}}),search:o=>r(`/api/search?q=${encodeURIComponent(o)}`)}}function R(a){let e=Number(a)||0;if(!e)return"";let t=Date.now()-e;if(t<6e4)return"\u521A\u521A";if(t<36e5)return`${Math.floor(t/6e4)} \u5206\u949F\u524D`;if(t<864e5)return`${Math.floor(t/36e5)} \u5C0F\u65F6\u524D`;if(t<7*864e5)return`${Math.floor(t/864e5)} \u5929\u524D`;let u=new Date(e);return`${String(u.getMonth()+1).padStart(2,"0")}-${String(u.getDate()).padStart(2,"0")}`}function J(a){let e=a?.avatarColor;if(e)return{background:`linear-gradient(135deg, ${e}, ${a?.avatarColorTo||e})`}}function X(a){return(typeof a?.avatarText=="string"?a.avatarText.trim():"")||de(a?.displayName||a?.handle)}function de(a){let e=String(a||"?").trim();if(!e)return"?";let t=[...e];return t.length>1&&/[\u4e00-\u9fa5]/.test(t[0])?t.slice(-2).join(""):t[0].toUpperCase()}var b=G(require("react"),1);var Q=G(require("react"),1),Sa=[{key:"diffusion",label:"\u6269\u6563",edition:"DIFFUSION"},{key:"connection",label:"\u8FDE\u63A5",edition:"CONNECTION"},{key:"resonance",label:"\u5171\u632F",edition:"RESONANCE"}];function pe({motif:a}){return a==="connection"?Q.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},Q.default.createElement("rect",{x:"652",y:"-130",width:"390",height:"390",rx:"58",transform:"rotate(-24 847 65)",fill:"#E2F5FF",fillOpacity:".16"}),Q.default.createElement("rect",{x:"790",y:"120",width:"326",height:"326",rx:"52",transform:"rotate(19 953 283)",fill:"#E2F5FF",fillOpacity:".13"}),Q.default.createElement("rect",{x:"570",y:"170",width:"230",height:"230",rx:"38",transform:"rotate(19 685 285)",fill:"#34298A",fillOpacity:".08"})):a==="resonance"?Q.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},Q.default.createElement("rect",{x:"500",y:"-40",width:"720",height:"230",rx:"115",transform:"rotate(-28 860 75)",fill:"#FFF4D9",fillOpacity:".16"}),Q.default.createElement("rect",{x:"650",y:"165",width:"690",height:"190",rx:"95",transform:"rotate(-28 995 260)",fill:"#FFF4D9",fillOpacity:".14"}),Q.default.createElement("circle",{cx:"1130",cy:"105",r:"220",fill:"#AC5B25",fillOpacity:".06"})):a==="diffusion"?Q.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},Q.default.createElement("circle",{cx:"948",cy:"85",r:"270",fill:"#FFF0F5",fillOpacity:".14"}),Q.default.createElement("circle",{cx:"732",cy:"244",r:"190",fill:"#FFF0F5",fillOpacity:".12"}),Q.default.createElement("circle",{cx:"1060",cy:"320",r:"240",fill:"#9E2367",fillOpacity:".08"})):null}function ua({space:a,showBadge:e=!0,className:t=""}){return Q.default.createElement("span",{className:`acv-space-cover ${t}`.trim(),style:{"--accent":a.accent,"--accent-to":a.accentTo}},Q.default.createElement(pe,{motif:a.motif}),e&&Q.default.createElement("span",{className:"acv-space-badge"},`${a.postCount??0} \u4E2A\u5E16\u5B50`),Q.default.createElement("span",{className:"acv-space-enter"},"\u8FDB\u5165\u8BA8\u8BBA \u2192"))}var F=G(require("react"),1),La=G(Oa(),1);var he=236,Aa=190;function ge(a){let e=(window.innerWidth||1024)-he-10;return Math.max(10,Math.min(a,e))}function B({api:a,me:e,handle:t,children:u,onDm:s,disabled:i=!1,className:r=""}){let[o,v]=F.default.useState(!1),[g,l]=F.default.useState(null),[n,d]=F.default.useState(null),[p,w]=F.default.useState(!1),T=F.default.useRef(null),M=F.default.useRef(null),I=F.default.useRef(null),z=F.default.useRef(0),U=F.default.useCallback(()=>{t&&(w(!1),a.user(t).then(m=>{d(m.user),z.current=Date.now()}).catch(()=>{d(null),w(!0)}))},[a,t]),$=()=>{let m=T.current?.getBoundingClientRect();if(!m)return;let H=m.bottom+8+Aa>(window.innerHeight||768)?Math.max(10,m.top-8-Aa):m.bottom+8;l({left:ge(m.left),top:H})},q=()=>{i||(clearTimeout(M.current),I.current=setTimeout(()=>{$(),v(!0),(!n||Date.now()-z.current>3e4)&&U()},140))},V=()=>{clearTimeout(I.current),M.current=setTimeout(()=>v(!1),160)};F.default.useEffect(()=>{if(!o)return;let m=()=>v(!1);return window.addEventListener("scroll",m,!0),window.addEventListener("resize",m),()=>{window.removeEventListener("scroll",m,!0),window.removeEventListener("resize",m)}},[o]),F.default.useEffect(()=>{i&&v(!1)},[i]),F.default.useEffect(()=>()=>{clearTimeout(M.current),clearTimeout(I.current)},[]);let O=!!(e&&t&&e.handle?.toLowerCase()===String(t).toLowerCase()),_=!!n?.allowDm&&!O,K=o&&g&&typeof document<"u"?(0,La.createPortal)(F.default.createElement("span",{className:"acv-usercard acv-usercard--fixed",style:{left:g.left,top:g.top},role:"dialog","aria-label":`${n?.displayName||t} \u7684\u8D44\u6599\u5361`,onClick:m=>m.stopPropagation(),onMouseEnter:()=>clearTimeout(M.current),onMouseLeave:V},F.default.createElement("span",{className:"acv-usercard-head"},F.default.createElement("span",{className:"acv-avatar",style:J(n)},X(n||{handle:t})),F.default.createElement("span",{className:"acv-usercard-id"},F.default.createElement("span",{className:"acv-usercard-name"},n?.displayName||t),F.default.createElement("span",{className:"acv-usercard-handle"},"@",n?.handle||t)),n?.role==="admin"&&F.default.createElement("span",{className:"acv-chip"},"\u7BA1\u7406\u5458")),n?.bio&&F.default.createElement("span",{className:"acv-usercard-bio"},n.bio),F.default.createElement("span",{className:"acv-usercard-foot"},!n&&!p&&F.default.createElement("span",{className:"acv-usercard-bio"},"\u52A0\u8F7D\u4E2D\u2026"),!n&&p&&F.default.createElement("span",{className:"acv-usercard-bio"},"\u8D44\u6599\u52A0\u8F7D\u5931\u8D25"),n&&_&&!e&&F.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:m=>{m.stopPropagation(),v(!1),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55\u540E\u53D1\u79C1\u4FE1"),n&&_&&e&&F.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:m=>{m.stopPropagation(),v(!1),s?.(n)}},"\u53D1\u79C1\u4FE1"),n&&!_&&!O&&F.default.createElement("span",{className:"acv-usercard-bio"},"\u5BF9\u65B9\u672A\u5F00\u653E\u79C1\u4FE1"),O&&F.default.createElement("span",{className:"acv-usercard-bio"},"\u8FD9\u662F\u4F60\u81EA\u5DF1"))),document.body):null;return F.default.createElement("span",{ref:T,className:`acv-userchip ${r}`.trim(),onMouseEnter:q,onMouseLeave:V},u,K)}var xa=G(require("react"),1);var $a="data:image/webp;base64,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";var _a="data:image/webp;base64,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";function Ia({size:a=48}){return xa.default.createElement("img",{className:"acv-home-mascot",src:$a,alt:"","aria-hidden":"true",decoding:"async",draggable:"false",width:a,height:a,style:{width:a,height:a}})}function ia({size:a=20,className:e=""}){return xa.default.createElement("img",{className:`acv-brand-mark ${e}`.trim(),src:_a,alt:"","aria-hidden":"true",decoding:"async",draggable:"false",width:a,height:a,style:{width:a,height:a}})}function ya({space:a,onOpen:e}){return b.default.createElement("button",{type:"button",className:"acv-space-card",onClick:()=>e(a.slug),style:{"--accent":a.accent,"--accent-to":a.accentTo}},b.default.createElement(ua,{space:a}),b.default.createElement("span",{className:"acv-space-body"},b.default.createElement("span",{className:"acv-space-title"},a.title),b.default.createElement("span",{className:"acv-space-sub"},a.subtitle),b.default.createElement("span",{className:"acv-space-meta"},b.default.createElement("span",null,a.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${R(a.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u5E16"),b.default.createElement("span",{className:"acv-dot"}),b.default.createElement("span",{className:"acv-space-desc"},a.description||""))))}function Ua({api:a,me:e,initialData:t=null,onOpenSpace:u,onOpenPost:s,onDm:i}){let[r,o]=b.default.useState(t),[v,g]=b.default.useState(""),l=b.default.useCallback(()=>{a.home().then(o).catch(n=>g(n.message))},[a]);return b.default.useEffect(()=>{t||l()},[l,e]),v?b.default.createElement("div",{className:"acv-loading"},v):r?b.default.createElement("div",{className:"acv-main"},b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-section-head acv-section-head--brand"},b.default.createElement(Ia,{size:64}),b.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u677F\u5757"),b.default.createElement("span",{className:"acv-section-note"},"\u70B9\u5F00\u4E00\u4E2A\u677F\u5757\u8FDB\u5165\u8BA8\u8BBA\u533A")),r.spaces.map(n=>b.default.createElement(ya,{key:n.id,space:n,onOpen:u}))),b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u6700\u8FD1\u66F4\u65B0"),b.default.createElement("button",{type:"button",className:"acv-link",onClick:l},"\u5237\u65B0")),r.recent.length===0&&b.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u5E16\u5B50"),r.recent.map(n=>b.default.createElement("button",{key:n.id,type:"button",className:"acv-recent-item",onClick:()=>s(n.id)},b.default.createElement(B,{api:a,me:e,handle:n.author.handle,onDm:i},b.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:J(n.author)},X(n.author))),b.default.createElement("span",{className:"acv-recent-main"},b.default.createElement("span",{className:"acv-recent-title"},n.title),b.default.createElement("span",{className:"acv-recent-meta"},n.spaceTitle," \xB7"," ",b.default.createElement(B,{api:a,me:e,handle:n.author.handle,onDm:i},b.default.createElement("span",null,n.author.displayName))," ","\xB7 ",R(n.lastActivityAt)," \xB7 ",n.commentCount," \u6761\u8BC4\u8BBA"))))),b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u6D3B\u8DC3\u6210\u5458")),(r.members||[]).length===0&&b.default.createElement("div",{className:"acv-empty",style:{padding:"10px 0"}},"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8FC7\u5E16"),(r.members||[]).map(n=>b.default.createElement("div",{key:n.id,className:"acv-member"},b.default.createElement(B,{api:a,me:e,handle:n.handle,onDm:i},b.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:J(n)},X(n))),b.default.createElement("span",{className:"acv-member-main"},b.default.createElement(B,{api:a,me:e,handle:n.handle,onDm:i},b.default.createElement("span",{className:"acv-member-name"},n.displayName)),b.default.createElement(B,{api:a,me:e,handle:n.handle,onDm:i},b.default.createElement("span",{className:"acv-member-meta"},"@",n.handle))),b.default.createElement("span",{className:"acv-chip"},n.postCount," \u5E16")))),b.default.createElement("div",{className:"acv-panel"},b.default.createElement("div",{className:"acv-section-head"},b.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u6570\u636E")),b.default.createElement("div",{className:"acv-stats"},b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.spaces.length),b.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u677F\u5757")),b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.spaces.reduce((n,d)=>n+d.postCount,0)),b.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),b.default.createElement("div",{className:"acv-stat"},b.default.createElement("div",{className:"acv-stat-value"},r.recent.length),b.default.createElement("div",{className:"acv-stat-label"},"\u6761\u6700\u8FD1\u66F4\u65B0"))),b.default.createElement("p",{className:"acv-space-sub",style:{marginTop:12}},e?e.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u8FDB\u4EFB\u610F\u677F\u5757\uFF0C\u53F3\u4E0A\u89D2\u6709\u53D1\u5E16\u5165\u53E3\u3002":"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF1B\u53D1\u5E16\u3001\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002")))):b.default.createElement("div",{className:"acv-main"},b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-skeleton"}),b.default.createElement("div",{className:"acv-skeleton"}),b.default.createElement("div",{className:"acv-skeleton"})),b.default.createElement("div",{className:"acv-col"},b.default.createElement("div",{className:"acv-skeleton",style:{height:260}})))}var D=G(require("react"),1);var Z=G(require("react"),1);function Ma({space:a,api:e,onClose:t,onCreated:u,notify:s}){let[i,r]=Z.default.useState(""),[o,v]=Z.default.useState(""),[g,l]=Z.default.useState(!1),[n,d]=Z.default.useState("");Z.default.useEffect(()=>{let w=T=>{T.key==="Escape"&&t()};return window.addEventListener("keydown",w),()=>window.removeEventListener("keydown",w)},[t]);async function p(){l(!0),d("");try{let w=await e.createPost({spaceId:a.id,title:i,body:o});s("\u5E16\u5B50\u53D1\u51FA\u53BB\u4E86"),u(w.post)}catch(w){d(w.message)}finally{l(!1)}}return Z.default.createElement("div",{className:"acv-overlay",onClick:t},Z.default.createElement("div",{className:"acv-modal acv-modal--wide",onClick:w=>w.stopPropagation()},Z.default.createElement("h3",{className:"acv-modal-title"},Z.default.createElement(ia,{size:24}),Z.default.createElement("span",null,"\u5728\u300C",a.title,"\u300D\u53D1\u5E16")),Z.default.createElement("p",{className:"acv-modal-sub"},"\u6807\u9898\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u6B63\u6587\u5C55\u5F00\u8BB2\u3002\u53D1\u5B8C\u4F1A\u76F4\u63A5\u8FDB\u8BE6\u60C5\u9875\u3002"),n&&Z.default.createElement("div",{className:"acv-error"},n),Z.default.createElement("div",{className:"acv-field"},Z.default.createElement("label",null,"\u6807\u9898"),Z.default.createElement("input",{className:"acv-input",autoFocus:!0,value:i,maxLength:160,placeholder:"\u60F3\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",onChange:w=>r(w.target.value)})),Z.default.createElement("div",{className:"acv-field"},Z.default.createElement("label",null,"\u6B63\u6587"),Z.default.createElement("textarea",{className:"acv-textarea acv-textarea--tall",value:o,maxLength:2e4,placeholder:"\u5C55\u5F00\u8BF4\u8BF4\uFF0C\u652F\u6301\u6362\u884C",onChange:w=>v(w.target.value)})),Z.default.createElement("div",{className:"acv-row"},Z.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),Z.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:g||!i.trim()||!o.trim(),onClick:p},g?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u5E03"))))}function Fa({api:a,slug:e,me:t,onBack:u,onOpenPost:s,onAuth:i,onDm:r,notify:o}){let[v,g]=D.default.useState(null),[l,n]=D.default.useState(""),[d,p]=D.default.useState(!1),w=D.default.useCallback(()=>{a.space(e).then(z=>{g(z),n("")}).catch(z=>n(z.message))},[a,e]);if(D.default.useEffect(()=>{w()},[w]),l)return D.default.createElement("div",{style:{paddingTop:22}},D.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875"),D.default.createElement("div",{className:"acv-loading"},l));if(!v)return D.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u677F\u5757\u2026");let{space:T,posts:M}=v,I=!!t?.emailVerified;return D.default.createElement("div",{style:{paddingTop:20,display:"flex",flexDirection:"column",gap:16}},D.default.createElement("div",null,D.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),D.default.createElement("div",{className:"acv-board-head",style:{"--accent":T.accent,"--accent-to":T.accentTo}},D.default.createElement("h2",{className:"acv-board-title"},T.title),D.default.createElement("p",{className:"acv-board-sub"},T.description||T.subtitle),D.default.createElement("div",{className:"acv-board-actions"},D.default.createElement("button",{type:"button",className:"acv-btn",style:{background:"#fff",color:"#16161d"},onClick:()=>{if(!t)return i();if(!I)return o("\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16");p(!0)}},"\u53D1\u5E16"),D.default.createElement("span",{className:"acv-chip",style:{background:"rgba(255,255,255,.22)",color:"#fff"}},T.postCount," \u4E2A\u5E16\u5B50"))),!t&&D.default.createElement("div",{className:"acv-notice"},"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u9700\u8981\u3002",D.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),t&&!t.emailVerified&&D.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002\u9A8C\u8BC1\u90AE\u4EF6\u5728\u6536\u4EF6\u7BB1\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u5934\u50CF\u83DC\u5355\u91CC\u91CD\u53D1\u3002"),D.default.createElement("div",{className:"acv-board-grid"},D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-panel",style:{padding:"8px 18px"}},M.length===0&&D.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5E16\u5B50\uFF0C\u6765\u53D1\u7B2C\u4E00\u6761\u3002"),M.map(z=>D.default.createElement("button",{key:z.id,type:"button",className:"acv-post-row",onClick:()=>s(z.id)},D.default.createElement("span",{className:"acv-post-title"},z.title),D.default.createElement("span",{className:"acv-post-excerpt"},z.excerpt),D.default.createElement("span",{className:"acv-post-meta"},D.default.createElement(B,{api:a,me:t,handle:z.author.handle,onDm:r},D.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:J(z.author)},X(z.author)),z.author.displayName),D.default.createElement("span",{className:"acv-dot"}),R(z.lastActivityAt),D.default.createElement("span",{className:"acv-dot"}),z.commentCount," \u6761\u8BC4\u8BBA"))))),D.default.createElement("aside",{className:"acv-col"},D.default.createElement("div",{className:"acv-panel"},D.default.createElement("div",{className:"acv-section-head"},D.default.createElement("h2",{className:"acv-section-title"},"\u677F\u5757\u8BF4\u660E")),D.default.createElement("p",{className:"acv-space-sub"},T.description||T.subtitle||"\u8FD8\u6CA1\u6709\u5199\u4ECB\u7ECD\u3002"),D.default.createElement("div",{className:"acv-stats",style:{marginTop:14}},D.default.createElement("div",{className:"acv-stat"},D.default.createElement("div",{className:"acv-stat-value"},T.postCount),D.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),D.default.createElement("div",{className:"acv-stat"},D.default.createElement("div",{className:"acv-stat-value"},M.length),D.default.createElement("div",{className:"acv-stat-label"},"\u6761\u5728\u672C\u9875"))),D.default.createElement("p",{className:"acv-space-sub",style:{marginTop:14}},t?.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u4E0A\u9762\u7684\u300C\u53D1\u5E16\u300D\u3002":t?"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u3001\u8BC4\u8BBA\u624D\u9700\u8981\u3002")))),d&&D.default.createElement(Ma,{api:a,space:T,notify:o,onClose:()=>p(!1),onCreated:z=>{p(!1),w(),s(z.id)}}))}var N=G(require("react"),1);var Y=G(require("react"),1),Ha=/(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(~~[^~\n]+~~)|(\[[^\]\n]+\]\([^)\s]+\))/g,ca=/^\s*([-*+]|\d+[.)])\s+/,Ya=/^(#{1,6})\s+(.*)$/,ye=/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/;function la(a,e){let t=[],u=0,s;for(Ha.lastIndex=0;(s=Ha.exec(a))!==null;){s.index>u&&t.push(a.slice(u,s.index));let i=s[0],r=`${e}-${s.index}`;if(i.startsWith("`"))t.push(Y.default.createElement("code",{key:r,className:"acv-md-code"},i.slice(1,-1)));else if(i.startsWith("**"))t.push(Y.default.createElement("strong",{key:r},i.slice(2,-2)));else if(i.startsWith("~~"))t.push(Y.default.createElement("del",{key:r},i.slice(2,-2)));else if(i.startsWith("[")){let o=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(i),v=o?.[2]||"#",g=/^(https?:\/\/|mailto:|\/)/i.test(v);t.push(g?Y.default.createElement("a",{key:r,href:v,target:"_blank",rel:"noreferrer noopener"},o[1]):Y.default.createElement("span",{key:r},o?.[1]||i))}else t.push(Y.default.createElement("em",{key:r},i.slice(1,-1)));u=s.index+i.length}return u<a.length&&t.push(a.slice(u)),t}function qa(a){return a.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(e=>e.trim())}function da({text:a}){let t=String(a||"").replace(/\r\n?/g,`
`).split(`
`),u=[],s=0,i=0;for(;s<t.length;){let r=t[s];if(/^\s*```/.test(r)){let l=r.trim().slice(3).trim(),n=[];for(s+=1;s<t.length&&!/^\s*```/.test(t[s]);)n.push(t[s]),s+=1;s+=1,u.push(Y.default.createElement("pre",{key:`b${i++}`,className:"acv-md-pre"},Y.default.createElement("code",null,n.join(`
`)),l&&Y.default.createElement("span",{className:"acv-md-lang"},l)));continue}if(!r.trim()){s+=1;continue}let o=Ya.exec(r);if(o){let l=Math.min(o[1].length,4),n=`h${l}`;u.push(Y.default.createElement(n,{key:`b${i++}`,className:`acv-md-h${l}`},la(o[2],`h${i}`))),s+=1;continue}if(/^\s*(-{3,}|\*{3,})\s*$/.test(r)){u.push(Y.default.createElement("hr",{key:`b${i++}`,className:"acv-md-hr"})),s+=1;continue}if(r.includes("|")&&ye.test(t[s+1]||"")){let l=qa(r);s+=2;let n=[];for(;s<t.length&&t[s].includes("|")&&t[s].trim();)n.push(qa(t[s])),s+=1;u.push(Y.default.createElement("div",{key:`b${i++}`,className:"acv-md-table-wrap"},Y.default.createElement("table",{className:"acv-md-table"},Y.default.createElement("thead",null,Y.default.createElement("tr",null,l.map((d,p)=>Y.default.createElement("th",{key:p},la(d,`th${p}`))))),Y.default.createElement("tbody",null,n.map((d,p)=>Y.default.createElement("tr",{key:p},l.map((w,T)=>Y.default.createElement("td",{key:T},la(d[T]||"",`td${p}-${T}`)))))))));continue}if(/^\s*>\s?/.test(r)){let l=[];for(;s<t.length&&/^\s*>\s?/.test(t[s]);)l.push(t[s].replace(/^\s*>\s?/,"")),s+=1;u.push(Y.default.createElement("blockquote",{key:`b${i++}`,className:"acv-md-quote"},Y.default.createElement(da,{text:l.join(`
`)})));continue}if(ca.test(r)){let l=/^\s*\d+[.)]\s+/.test(r),n=[];for(;s<t.length&&ca.test(t[s]);)for(n.push(t[s].replace(ca,"")),s+=1;s<t.length&&t[s].trim()&&/^\s{2,}/.test(t[s])&&!ca.test(t[s]);)n[n.length-1]+=` ${t[s].trim()}`,s+=1;let d=l?"ol":"ul";u.push(Y.default.createElement(d,{key:`b${i++}`,className:"acv-md-list"},n.map((p,w)=>Y.default.createElement("li",{key:w},la(p,`li${w}`)))));continue}let v=[];for(;s<t.length&&t[s].trim()&&!Ya.test(t[s])&&!ca.test(t[s])&&!/^\s*>/.test(t[s])&&!/^\s*```/.test(t[s])&&!/^\s*(-{3,}|\*{3,})\s*$/.test(t[s]);)v.push(t[s]),s+=1;let g=[];v.forEach((l,n)=>{n>0&&g.push(Y.default.createElement("br",{key:`br${n}`})),g.push(...la(l,`p${n}`))}),u.push(Y.default.createElement("p",{key:`b${i++}`,className:"acv-md-p"},g))}return Y.default.createElement("div",{className:"acv-md"},u)}function Va({api:a,id:e,me:t,onBack:u,backTo:s="home",onAuth:i,onDm:r,notify:o}){let[v,g]=N.default.useState(null),[l,n]=N.default.useState(""),[d,p]=N.default.useState(""),[w,T]=N.default.useState(!1),[M,I]=N.default.useState(""),[z,U]=N.default.useState(!1),$=N.default.useCallback(()=>{a.post(e).then(m=>{g(m),n("")}).catch(m=>n(m.message))},[a,e]);N.default.useEffect(()=>{$()},[$]);async function q(){T(!0),I("");try{await a.createComment(e,{body:d}),p(""),$(),o("\u8BC4\u8BBA\u5DF2\u53D1\u5E03")}catch(m){I(m.message)}finally{T(!1)}}async function V(m){U(!0);try{await a.setPostStatus(e,m),o(m==="hidden"?"\u5E16\u5B50\u5DF2\u9690\u85CF":m==="deleted"?"\u5E16\u5B50\u5DF2\u5220\u9664":"\u5E16\u5B50\u5DF2\u6062\u590D"),m==="deleted"?u():$()}catch(H){o(H.message,{error:!0})}finally{U(!1)}}let O=s==="space"?"\u2190 \u8FD4\u56DE\u677F\u5757":"\u2190 \u8FD4\u56DE\u9996\u9875";if(l)return N.default.createElement("div",{style:{paddingTop:22}},N.default.createElement("button",{type:"button",className:"acv-back",onClick:u},O),N.default.createElement("div",{className:"acv-loading"},l));if(!v)return N.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u5E16\u5B50\u2026");let{post:_,comments:K}=v;return N.default.createElement("div",{className:"acv-post-wrap"},N.default.createElement("div",null,N.default.createElement("button",{type:"button",className:"acv-back",onClick:u},O)),N.default.createElement("div",{className:"acv-panel",style:{padding:"22px 24px"}},N.default.createElement("div",{className:"acv-post-meta"},N.default.createElement("span",{className:"acv-chip"},_.spaceTitle),N.default.createElement("span",{className:"acv-dot"}),R(_.createdAt),N.default.createElement("span",{className:"acv-dot"}),_.viewCount," \u6B21\u6D4F\u89C8"),N.default.createElement("h1",{className:"acv-article-title"},_.title),N.default.createElement("div",{className:"acv-article-meta"},N.default.createElement(B,{api:a,me:t,handle:_.author.handle,onDm:r},N.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:J(_.author)},X(_.author)),N.default.createElement("span",null,_.author.displayName)),N.default.createElement("span",{className:"acv-dot"}),N.default.createElement(B,{api:a,me:t,handle:_.author.handle,onDm:r},N.default.createElement("span",null,"@",_.author.handle)),t?.role==="admin"&&N.default.createElement("span",{className:"acv-mod-actions"},N.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:z,onClick:()=>V("hidden")},"\u9690\u85CF"),N.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:z,onClick:()=>V("deleted")},"\u5220\u9664"))),N.default.createElement("div",{className:"acv-prose acv-prose--md"},N.default.createElement(da,{text:_.body}))),N.default.createElement("div",{className:"acv-panel",style:{padding:"18px 24px"}},N.default.createElement("div",{className:"acv-section-head"},N.default.createElement("h2",{className:"acv-section-title"},"\u8BC4\u8BBA"),N.default.createElement("span",{className:"acv-section-note"},K.length," \u6761")),K.length===0&&N.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u8BF4\u70B9\u4EC0\u4E48\u3002"),K.map(m=>N.default.createElement("div",{key:m.id,className:"acv-comment"},N.default.createElement(B,{api:a,me:t,handle:m.author.handle,onDm:r},N.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:J(m.author)},X(m.author))),N.default.createElement("div",{className:"acv-comment-main"},N.default.createElement("div",{className:"acv-comment-head"},N.default.createElement(B,{api:a,me:t,handle:m.author.handle,onDm:r},N.default.createElement("span",{className:"acv-comment-author"},m.author.displayName)),N.default.createElement("span",{className:"acv-comment-time"},R(m.createdAt))),N.default.createElement("p",{className:"acv-comment-body"},m.body)))),N.default.createElement("div",{style:{marginTop:14}},!t&&N.default.createElement("div",{className:"acv-notice"},"\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\u3002",N.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),t&&!t.emailVerified&&N.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u8BC4\u8BBA\u3002"),t?.emailVerified&&N.default.createElement(N.default.Fragment,null,M&&N.default.createElement("div",{className:"acv-error"},M),N.default.createElement("div",{className:"acv-input-brand"},N.default.createElement(ia,{size:24})),N.default.createElement("textarea",{className:"acv-textarea",value:d,placeholder:"\u5199\u4E00\u6761\u8BC4\u8BBA\u2026",onChange:m=>p(m.target.value)}),N.default.createElement("div",{className:"acv-row"},N.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:w||!d.trim(),onClick:q},w?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u8868\u8BC4\u8BBA"))))))}var k=G(require("react"),1),we=["login","register","forgot"];function Ba({api:a,initialMode:e="login",onClose:t,onDone:u,notify:s}){let[i,r]=k.default.useState(we.includes(e)?e:"login"),[o,v]=k.default.useState(""),[g,l]=k.default.useState(""),[n,d]=k.default.useState(""),[p,w]=k.default.useState(""),[T,M]=k.default.useState(null),[I,z]=k.default.useState(!1),[U,$]=k.default.useState(""),[q,V]=k.default.useState(""),O=k.default.useCallback(()=>{a.captcha().then(M).catch(()=>M(null))},[a]);k.default.useEffect(()=>{i==="register"&&O()},[i,O]);function _(L){r(L),$(""),V(""),w("")}async function K(L){L.preventDefault(),z(!0),$("");try{let h=await a.login({handle:o,password:n});a.setToken(h.token),u(h.account)}catch(h){$(h.message)}finally{z(!1)}}async function m(L){L.preventDefault(),z(!0),$("");try{let h=await a.register({handle:o,email:g,password:n,captchaId:T?.id,captchaAnswer:p}),y=await a.login({handle:o,password:n});a.setToken(y.token),V(h.mail?.delivered?"\u6CE8\u518C\u6210\u529F\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\u3002\u70B9\u90AE\u4EF6\u91CC\u7684\u94FE\u63A5\u5C31\u80FD\u53D1\u5E16\u3002":"\u6CE8\u518C\u6210\u529F\u3002\u672C\u5730\u6CA1\u914D SMTP\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u7ECF\u6253\u5230\u670D\u52A1\u7AEF\u65E5\u5FD7\u91CC\u4E86\u3002"),u(y.account)}catch(h){$(h.message),O(),w("")}finally{z(!1)}}async function H(L){L.preventDefault(),z(!0),$("");try{let h=await a.forgotPassword(g.trim());V(h?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u670D\u52A1\u5668\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${h.verifyLink}`:"\u5982\u679C\u8FD9\u4E2A\u90AE\u7BB1\u6CE8\u518C\u8FC7\uFF0C\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u5C31\u80FD\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(h){$(h.message)}finally{z(!1)}}return k.default.createElement("div",{className:"acv-overlay",onClick:t},k.default.createElement("div",{className:"acv-modal",onClick:L=>L.stopPropagation()},k.default.createElement("h3",{className:"acv-modal-title"},i==="login"?"\u767B\u5F55 Achoverse":i==="register"?"\u6CE8\u518C Achoverse":"\u5FD8\u8BB0\u5BC6\u7801"),k.default.createElement("p",{className:"acv-modal-sub"},i==="login"?"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002":i==="register"?"\u6CE8\u518C\u540E\u8981\u9A8C\u8BC1\u90AE\u7BB1\u624D\u80FD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002":"\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1\uFF0C\u6211\u4EEC\u53D1\u4E00\u5C01\u5E26\u91CD\u7F6E\u94FE\u63A5\u7684\u90AE\u4EF6\u3002"),i!=="forgot"&&k.default.createElement("div",{className:"acv-switch"},k.default.createElement("button",{type:"button",className:i==="login"?"is-active":"",onClick:()=>_("login")},"\u767B\u5F55"),k.default.createElement("button",{type:"button",className:i==="register"?"is-active":"",onClick:()=>_("register")},"\u6CE8\u518C")),U&&k.default.createElement("div",{className:"acv-error"},U),q&&k.default.createElement("div",{className:"acv-notice"},q),i==="forgot"&&k.default.createElement("form",{onSubmit:H},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u90AE\u7BB1"),k.default.createElement("input",{className:"acv-input",type:"email",value:g,onChange:L=>l(L.target.value),placeholder:"\u6CE8\u518C\u65F6\u7528\u7684\u90AE\u7BB1"})),k.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},k.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>_("login")},"\u8FD4\u56DE\u767B\u5F55"),k.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:I||!g.trim()},I?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u91CD\u7F6E\u90AE\u4EF6"))),i==="login"&&k.default.createElement("form",{onSubmit:K},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u7528\u6237\u540D"),k.default.createElement("input",{className:"acv-input",value:o,autoComplete:"username",placeholder:"\u4F60\u7684\u7528\u6237\u540D",onChange:L=>v(L.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u5BC6\u7801"),k.default.createElement("input",{className:"acv-input",type:"password",value:n,autoComplete:"current-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:L=>d(L.target.value)})),k.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},k.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>_("forgot")},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),k.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:I||!o||!n},I?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))),i==="register"&&k.default.createElement("form",{onSubmit:m},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u7528\u6237\u540D"),k.default.createElement("input",{className:"acv-input",value:o,autoComplete:"username",placeholder:"3-24 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF",onChange:L=>v(L.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u90AE\u7BB1"),k.default.createElement("input",{className:"acv-input",type:"email",value:g,autoComplete:"email",placeholder:"\u7528\u6765\u6536\u9A8C\u8BC1\u94FE\u63A5",onChange:L=>l(L.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u5BC6\u7801"),k.default.createElement("input",{className:"acv-input",type:"password",value:n,autoComplete:"new-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:L=>d(L.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u9A8C\u8BC1\u7801"),k.default.createElement("div",{className:"acv-captcha-row"},k.default.createElement("input",{className:"acv-input",value:p,maxLength:8,placeholder:"\u770B\u53F3\u8FB9",onChange:L=>w(L.target.value)}),k.default.createElement("button",{type:"button",className:"acv-captcha-img",onClick:O,title:"\u6362\u4E00\u5F20"},T?k.default.createElement("span",{dangerouslySetInnerHTML:{__html:T.svg}}):k.default.createElement("span",{className:"acv-chip"},"\u52A0\u8F7D\u4E2D")))),k.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},k.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),k.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:I||!o||!n||!g},I?"\u6CE8\u518C\u4E2D\u2026":"\u6CE8\u518C")))))}var c=G(require("react"),1);var Ne={title:"",slug:"",subtitle:"",description:"",accent:"#F53FA6",accentTo:"#FF7A45",zones:["home"],motif:"diffusion"},ke=[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR \u4E13\u533A"}];function Ce({api:a,me:e,onDm:t,notify:u}){let[s,i]=c.default.useState(null),[r,o]=c.default.useState(""),[v,g]=c.default.useState(""),l=c.default.useCallback(()=>{a.pendingAccounts().then(d=>{i(d.accounts),o("")}).catch(d=>o(d.message))},[a]);c.default.useEffect(()=>{l()},[l]);async function n(d){g(d.id);try{await a.verifyAccount(d.id),u(`\u5DF2\u653E\u884C @${d.handle}`),l()}catch(p){u(p.message,{error:!0})}finally{g("")}}return r?c.default.createElement("div",{className:"acv-error"},r):s?s.length===0?c.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5F85\u9A8C\u8BC1\u7684\u8D26\u53F7"):s.map(d=>c.default.createElement("div",{key:d.id,className:"acv-member",style:{padding:"12px 2px"}},c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},c.default.createElement(B,{api:a,me:e,handle:d.handle,onDm:t},c.default.createElement("span",null,d.displayName)," ",c.default.createElement("span",{className:"acv-member-meta"},"@",d.handle))),c.default.createElement("span",{className:"acv-member-meta"},d.email," \xB7 \u6CE8\u518C\u4E8E ",R(d.createdAt))),c.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"6px 14px",fontSize:13},disabled:v===d.id,onClick:()=>n(d)},v===d.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C"))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Se({api:a,space:e,onDone:t,onCancel:u,notify:s}){let[i,r]=c.default.useState(e?{title:e.title,slug:e.slug,subtitle:e.subtitle,description:e.description,accent:e.accent,accentTo:e.accentTo,zones:e.zones?.length?e.zones:["home"],motif:e.motif||"diffusion"}:Ne),[o,v]=c.default.useState(!1),[g,l]=c.default.useState(""),n=(p,w)=>r(T=>({...T,[p]:w}));async function d(){v(!0),l("");try{e?await a.updateSpace(e.id,i):await a.createSpace(i),s(e?"\u677F\u5757\u5DF2\u66F4\u65B0":`\u677F\u5757\u300C${i.title}\u300D\u5DF2\u521B\u5EFA`),t()}catch(p){l(p.message)}finally{v(!1)}}return c.default.createElement("div",{className:"acv-editor"},g&&c.default.createElement("div",{className:"acv-error"},g),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u540D\u79F0"),c.default.createElement("input",{className:"acv-input",value:i.title,maxLength:24,onChange:p=>n("title",p.target.value),placeholder:"\u6BD4\u5982\uFF1A\u4F5C\u54C1\u5C55\u793A"})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u6807\u8BC6\uFF08\u7528\u4E8E\u94FE\u63A5\uFF0C\u7559\u7A7A\u81EA\u52A8\u751F\u6210\uFF09"),c.default.createElement("input",{className:"acv-input",value:i.slug,maxLength:32,disabled:!!e,onChange:p=>n("slug",p.target.value.toLowerCase()),placeholder:"works"})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u4E00\u53E5\u8BDD\u4ECB\u7ECD"),c.default.createElement("input",{className:"acv-input",value:i.subtitle,maxLength:60,onChange:p=>n("subtitle",p.target.value)})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u677F\u5757\u8BF4\u660E"),c.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:i.description,maxLength:300,onChange:p=>n("description",p.target.value)})),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u663E\u793A\u5728"),c.default.createElement("div",{className:"acv-zone-picker"},ke.map(p=>{let w=i.zones.includes(p.key);return c.default.createElement("button",{key:p.key,type:"button",className:w?"acv-zone-option is-active":"acv-zone-option",onClick:()=>r(T=>{let M=w?T.zones.filter(I=>I!==p.key):[...T.zones,p.key];return{...T,zones:M.length?M:["home"]}})},c.default.createElement("span",{className:"acv-zone-tick"},w?"\u2713":""),p.label)})),c.default.createElement("span",{className:"acv-field-hint"},"\u53EF\u4EE5\u591A\u9009\uFF1A\u540C\u65F6\u52FE\u9009\u5C31\u4E24\u4E2A\u5730\u65B9\u90FD\u663E\u793A")),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u5C01\u9762\u6784\u56FE"),c.default.createElement("div",{className:"acv-zone-picker"},Sa.map(p=>c.default.createElement("button",{key:p.key,type:"button",className:i.motif===p.key?"acv-zone-option is-active":"acv-zone-option",onClick:()=>n("motif",p.key)},p.label))),c.default.createElement("span",{className:"acv-field-hint"},"\u534A\u900F\u660E\u51E0\u4F55\u56FE\u5F62\uFF0C\u753B\u5728\u6E10\u53D8\u4E0A\u9762")),c.default.createElement("div",{className:"acv-field"},c.default.createElement("label",null,"\u5361\u7247\u6E10\u53D8"),c.default.createElement("div",{className:"acv-color-row"},c.default.createElement("input",{type:"color",className:"acv-color",value:i.accent,onChange:p=>n("accent",p.target.value)}),c.default.createElement("input",{type:"color",className:"acv-color",value:i.accentTo,onChange:p=>n("accentTo",p.target.value)}),c.default.createElement("span",{className:"acv-space-cover acv-color-preview",style:{background:`linear-gradient(120deg, ${i.accent}, ${i.accentTo})`}}))),c.default.createElement("div",{className:"acv-row"},c.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:u},"\u53D6\u6D88"),c.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:o||!i.title.trim(),onClick:d},o?"\u4FDD\u5B58\u4E2D\u2026":e?"\u4FDD\u5B58":"\u521B\u5EFA\u677F\u5757")))}function Ee({api:a,me:e,onDm:t,notify:u}){let[s,i]=c.default.useState(null),[r,o]=c.default.useState(""),[v,g]=c.default.useState(""),l=c.default.useCallback(()=>{a.adminUsers(r.trim()).then(d=>i(d.users)).catch(d=>u(d.message,{error:!0}))},[a,r,u]);c.default.useEffect(()=>{l()},[l]);async function n(d){g(d.id);try{await a.verifyAccount(d.id),u(`\u5DF2\u653E\u884C @${d.handle}`),l()}catch(p){u(p.message,{error:!0})}finally{g("")}}return s?c.default.createElement(c.default.Fragment,null,c.default.createElement("div",{className:"acv-inline",style:{marginBottom:12}},c.default.createElement("input",{className:"acv-input",placeholder:"\u641C\u7D22\u7528\u6237\u540D\u6216\u6635\u79F0",value:r,onChange:d=>o(d.target.value)}),c.default.createElement("button",{type:"button",className:"acv-btn",onClick:l},"\u641C\u7D22")),s.length===0&&c.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5339\u914D\u7684\u7528\u6237"),s.map(d=>c.default.createElement("div",{key:d.id,className:"acv-admin-row"},c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},c.default.createElement(B,{api:a,me:e,handle:d.handle,onDm:t},c.default.createElement("span",null,d.displayName),c.default.createElement("span",{className:"acv-member-meta"}," @",d.handle)),d.role==="admin"&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u7BA1\u7406\u5458"),!d.emailVerified&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u672A\u9A8C\u8BC1"),!d.allowDm&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u5173\u79C1\u4FE1")),c.default.createElement("span",{className:"acv-member-meta"},d.email||"\uFF08\u65E0\u90AE\u7BB1\uFF09"," \xB7 ",d.postCount," \u4E2A\u5E16\u5B50 \xB7 \u6CE8\u518C\u4E8E ",R(d.createdAt))),!d.emailVerified&&c.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},disabled:v===d.id,onClick:()=>n(d)},v===d.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C")))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function ze({api:a,notify:e}){let[t,u]=c.default.useState(null),[s,i]=c.default.useState(null),[r,o]=c.default.useState(""),v=c.default.useCallback(()=>{a.adminSpaces().then(l=>u(l.spaces)).catch(l=>e(l.message,{error:!0}))},[a,e]);c.default.useEffect(()=>{v()},[v]);async function g(l){let n=!l.archivedAt;if(!(n&&!window.confirm(`\u5220\u9664\u677F\u5757\u300C${l.title}\u300D\uFF1F\u677F\u5757\u4F1A\u4ECE\u9996\u9875\u6D88\u5931\uFF0C\u5E16\u5B50\u4ECD\u4FDD\u7559\u5728\u5E93\u91CC\u3002`))){o(l.id);try{await a.archiveSpace(l.id,n),e(n?"\u677F\u5757\u5DF2\u5220\u9664":"\u677F\u5757\u5DF2\u6062\u590D"),v()}catch(d){e(d.message,{error:!0})}finally{o("")}}}return t?c.default.createElement(c.default.Fragment,null,s?c.default.createElement(Se,{api:a,space:s==="new"?null:s,notify:e,onCancel:()=>i(null),onDone:()=>{i(null),v()}}):c.default.createElement("div",{className:"acv-row",style:{justifyContent:"flex-start",marginBottom:6}},c.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("new")},"\u65B0\u5EFA\u677F\u5757")),t.map(l=>c.default.createElement("div",{key:l.id,className:l.archivedAt?"acv-admin-row is-archived":"acv-admin-row"},c.default.createElement(ua,{space:l,showBadge:!1,showEdition:!1,className:"acv-admin-swatch"}),c.default.createElement("span",{className:"acv-member-main"},c.default.createElement("span",{className:"acv-member-name"},l.title,c.default.createElement("span",{className:"acv-member-meta"}," /",l.slug),l.archivedAt&&c.default.createElement("span",{className:"acv-chip",style:{marginLeft:8}},"\u5DF2\u5220\u9664")),c.default.createElement("span",{className:"acv-member-meta"},l.postCount," \u4E2A\u5E16\u5B50 \xB7 ",l.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${R(l.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u5E16\u5B50",l.zones?.map(n=>c.default.createElement("span",{key:n,className:"acv-chip",style:{marginLeft:6}},n==="arvr"?"AR/VR":"\u9996\u9875")))),c.default.createElement("span",{style:{display:"flex",gap:6}},c.default.createElement("button",{type:"button",className:"acv-btn",style:{padding:"5px 12px",fontSize:12},onClick:()=>i(l)},"\u7F16\u8F91"),c.default.createElement("button",{type:"button",className:"acv-btn ghost",style:{padding:"5px 12px",fontSize:12},disabled:r===l.id,onClick:()=>g(l)},l.archivedAt?"\u6062\u590D":"\u5220\u9664"))))):c.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Ka({api:a,me:e,onDm:t,onBack:u,notify:s}){let[i,r]=c.default.useState("spaces"),[o,v]=c.default.useState(null);return c.default.useEffect(()=>{a.pendingAccounts().then(g=>v(g.accounts.length)).catch(()=>v(null))},[a,i]),c.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},c.default.createElement("div",null,c.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),c.default.createElement("div",{className:"acv-admin-layout"},c.default.createElement("nav",{className:"acv-admin-nav","aria-label":"\u7BA1\u7406"},c.default.createElement("button",{type:"button",className:i==="spaces"?"is-active":"",onClick:()=>r("spaces")},"\u677F\u5757"),c.default.createElement("button",{type:"button",className:i==="users"?"is-active":"",onClick:()=>r("users")},"\u7528\u6237"),c.default.createElement("button",{type:"button",className:i==="accounts"?"is-active":"",onClick:()=>r("accounts")},c.default.createElement("span",null,"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),o>0&&c.default.createElement("span",{className:"acv-badge"},o))),c.default.createElement("section",{className:"acv-panel acv-admin-content",style:{padding:"20px 22px"}},c.default.createElement("div",{className:"acv-section-head"},c.default.createElement("h2",{className:"acv-section-title"},i==="spaces"?"\u677F\u5757":i==="users"?"\u7528\u6237":"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),c.default.createElement("span",{className:"acv-section-note"},i==="spaces"?"\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u677F\u5757\uFF1B\u5220\u9664\u540E\u53EF\u4ECE\u7BA1\u7406\u91CC\u6062\u590D":i==="users"?"\u5168\u90E8\u8D26\u53F7\uFF1B\u672A\u9A8C\u8BC1\u7684\u53EF\u4EE5\u76F4\u63A5\u653E\u884C":"\u6CA1\u914D SMTP \u65F6\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u4E0D\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u4EBA\u5DE5\u653E\u884C")),i==="spaces"&&c.default.createElement(ze,{api:a,notify:s}),i==="users"&&c.default.createElement(Ee,{api:a,me:e,onDm:t,notify:s}),i==="accounts"&&c.default.createElement(Ce,{api:a,me:e,onDm:t,notify:s}))))}var na=G(require("react"),1);function Za({api:a,zone:e,title:t,note:u,onOpenSpace:s}){let[i,r]=na.default.useState(null),[o,v]=na.default.useState("");return na.default.useEffect(()=>{let g=!1;return a.zoneSpaces(e).then(l=>{g||(r(l.spaces),v(""))}).catch(l=>{g||v(l.message)}),()=>{g=!0}},[a,e]),na.default.createElement("div",{className:"acv-zone"},na.default.createElement("div",{className:"acv-section-head"},na.default.createElement("h2",{className:"acv-section-title"},t),na.default.createElement("span",{className:"acv-section-note"},u)),o&&na.default.createElement("div",{className:"acv-empty"},o),!i&&!o&&na.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),i&&i.length===0&&na.default.createElement("div",{className:"acv-panel"},na.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u4E13\u533A\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u300C\u7BA1\u7406 \u2192 \u677F\u5757\u300D\u91CC\u628A\u677F\u5757\u653E\u8FDB\u300C",t,"\u300D\u3002")),na.default.createElement("div",{className:"acv-zone-grid"},i?.map(g=>na.default.createElement(ya,{key:g.id,space:g,onOpen:s}))))}var j=G(require("react"),1);function ja({api:a,me:e,onDm:t,onOpenPost:u}){let[s,i]=j.default.useState(""),[r,o]=j.default.useState(null),[v,g]=j.default.useState(!1),[l,n]=j.default.useState(!1),d=j.default.useRef(null);return j.default.useEffect(()=>{if(!v)return;let p=w=>{d.current&&!d.current.contains(w.target)&&g(!1)};return document.addEventListener("click",p),()=>document.removeEventListener("click",p)},[v]),j.default.useEffect(()=>{let p=s.trim();if(p.length===0){o(null);return}let w=setTimeout(async()=>{n(!0);try{let T=await a.search(p);o(T.posts||[]),g(!0)}catch{o([])}finally{n(!1)}},280);return()=>clearTimeout(w)},[a,s]),j.default.createElement("div",{className:"acv-search",ref:d},j.default.createElement("span",{className:"acv-search-icon","aria-hidden":"true"},j.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",focusable:"false"},j.default.createElement("circle",{cx:"7",cy:"7",r:"4.6",stroke:"currentColor",strokeWidth:"1.6"}),j.default.createElement("path",{d:"M10.5 10.5 14 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))),j.default.createElement("input",{className:"acv-search-input",type:"text",value:s,placeholder:"\u641C\u7D22\u5E16\u5B50","aria-label":"\u641C\u7D22\u5E16\u5B50",autoComplete:"off",spellCheck:!1,onChange:p=>i(p.target.value),onFocus:()=>s.trim()&&g(!0)}),v&&j.default.createElement("div",{className:"acv-search-panel"},l&&j.default.createElement("div",{className:"acv-search-empty"},"\u641C\u7D22\u4E2D\u2026"),!l&&r?.length===0&&j.default.createElement("div",{className:"acv-search-empty"},"\u6CA1\u6709\u627E\u5230\u300C",s.trim(),"\u300D"),r?.map(p=>j.default.createElement("button",{key:p.id,type:"button",className:"acv-search-item",onClick:()=>{g(!1),i(""),u(p.id)}},j.default.createElement("span",{className:"acv-search-title"},p.title),j.default.createElement("span",{className:"acv-search-meta"},p.spaceSlug," \xB7"," ",j.default.createElement(B,{api:a,me:e,handle:p.author?.handle,onDm:t},j.default.createElement("span",null,p.author?.displayName||p.author?.handle))," ","\xB7 ",R(p.createdAt))))))}var f=G(require("react"),1);function ha({title:a,note:e,children:t}){return f.default.createElement("div",{className:"acv-settings-section"},f.default.createElement("div",{className:"acv-section-head"},f.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},a),e&&f.default.createElement("span",{className:"acv-section-note"},e)),t)}function Ga({api:a,me:e,onBack:t,onRefreshMe:u,notify:s}){let[i,r]=f.default.useState(e?.displayName||""),[o,v]=f.default.useState(e?.bio||""),[g,l]=f.default.useState(e?.allowDm!==!1),[n,d]=f.default.useState(e?.avatarText||""),[p,w]=f.default.useState(e?.avatarColor||"#F53FA6"),[T,M]=f.default.useState(e?.avatarColorTo||"#FF7A45"),[I,z]=f.default.useState(""),[U,$]=f.default.useState(""),[q,V]=f.default.useState(""),[O,_]=f.default.useState(""),[K,m]=f.default.useState(""),[H,L]=f.default.useState("");if(f.default.useEffect(()=>{r(e?.displayName||""),v(e?.bio||""),l(e?.allowDm!==!1),d(e?.avatarText||""),w(e?.avatarColor||"#F53FA6"),M(e?.avatarColorTo||"#FF7A45")},[e]),!e)return f.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");async function h(y,P,C){_(y),m("");try{await P(),s(C),await u?.()}catch(A){m(A.message)}finally{_("")}}return f.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:820}},f.default.createElement("div",null,f.default.createElement("button",{type:"button",className:"acv-back",onClick:t},"\u2190 \u8FD4\u56DE\u9996\u9875")),K&&f.default.createElement("div",{className:"acv-error"},K),f.default.createElement("div",{className:"acv-panel",style:{padding:"20px 22px"}},f.default.createElement("div",{className:"acv-section-head"},f.default.createElement("h2",{className:"acv-section-title"},"\u8D26\u53F7\u8BBE\u7F6E"),f.default.createElement("span",{className:"acv-section-note"},"@",e.handle)),f.default.createElement(ha,{title:"\u8D44\u6599",note:"\u6635\u79F0\u548C\u7B80\u4ECB\u4F1A\u663E\u793A\u5728\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u4E0A"},f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u6635\u79F0"),f.default.createElement("input",{className:"acv-input",value:i,maxLength:24,onChange:y=>r(y.target.value)})),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u7B80\u4ECB"),f.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:o,maxLength:200,onChange:y=>v(y.target.value)})),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u63A5\u6536\u79C1\u4FE1"),f.default.createElement("div",{className:"acv-zone-picker"},f.default.createElement("button",{type:"button",className:g?"acv-zone-option is-active":"acv-zone-option",onClick:()=>l(!0)},"\u5141\u8BB8\u522B\u4EBA\u7ED9\u6211\u53D1\u79C1\u4FE1"),f.default.createElement("button",{type:"button",className:g?"acv-zone-option":"acv-zone-option is-active",onClick:()=>l(!1)},"\u5173\u95ED\u79C1\u4FE1"))),f.default.createElement("div",{className:"acv-row"},f.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:O==="profile",onClick:()=>h("profile",()=>a.updateProfile({displayName:i,bio:o,allowDm:g}),"\u8D44\u6599\u5DF2\u4FDD\u5B58")},O==="profile"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8D44\u6599"))),f.default.createElement(ha,{title:"\u5934\u50CF",note:"\u4E24\u4E2A\u6E10\u53D8\u8272 + \u6700\u591A 4 \u4E2A\u5B57\uFF0C\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u90FD\u4F1A\u7528"},f.default.createElement("div",{className:"acv-avatar-editor"},f.default.createElement("span",{className:"acv-avatar acv-avatar--lg",style:J({avatarColor:p,avatarColorTo:T,avatarText:n})},X({displayName:i,handle:e.handle,avatarText:n})),f.default.createElement("div",{className:"acv-avatar-fields"},f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u5934\u50CF\u6587\u5B57\uFF08\u7559\u7A7A\u7528\u6635\u79F0\u9996\u5B57\uFF0C\u6700\u591A 4 \u4E2A\u5B57\uFF09"),f.default.createElement("input",{className:"acv-input",value:n,maxLength:4,placeholder:X({displayName:i,handle:e.handle}),onChange:y=>d(y.target.value)}),f.default.createElement("span",{className:"acv-field-hint"},[...n].length,"/4")),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u6E10\u53D8\u8272"),f.default.createElement("div",{className:"acv-color-row"},f.default.createElement("input",{type:"color",className:"acv-color",value:p,onChange:y=>w(y.target.value)}),f.default.createElement("input",{type:"color",className:"acv-color",value:T,onChange:y=>M(y.target.value)}),f.default.createElement("button",{type:"button",className:"acv-btn",onClick:()=>{w("#F53FA6"),M("#FF7A45")}},"\u6062\u590D\u9ED8\u8BA4\u914D\u8272"))))),f.default.createElement("div",{className:"acv-row"},f.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:O==="avatar",onClick:()=>h("avatar",()=>a.updateProfile({avatarText:n,avatarColor:p,avatarColorTo:T}),"\u5934\u50CF\u5DF2\u4FDD\u5B58")},O==="avatar"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u5934\u50CF"))),f.default.createElement(ha,{title:"\u90AE\u7BB1",note:e.emailVerified?"\u5DF2\u9A8C\u8BC1":"\u672A\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u540E\u624D\u80FD\u53D1\u5E16\u8BC4\u8BBA"},f.default.createElement("p",{className:"acv-space-sub",style:{marginBottom:10}},"\u5F53\u524D\u90AE\u7BB1\uFF1A",f.default.createElement("strong",null,e.email||"\uFF08\u6CA1\u6709\uFF09")),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u6362\u6210\u65B0\u90AE\u7BB1"),f.default.createElement("div",{className:"acv-inline"},f.default.createElement("input",{className:"acv-input",type:"email",placeholder:"new@example.com",value:I,onChange:y=>z(y.target.value)}),f.default.createElement("button",{type:"button",className:"acv-btn",disabled:O==="email"||!I.trim(),onClick:()=>h("email",async()=>{(await a.requestEmailChange(I.trim()))?.verifyLink&&s("\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7"),z("")},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u5230\u65B0\u90AE\u7BB1\uFF0C\u70B9\u5F00\u94FE\u63A5\u624D\u751F\u6548")},"\u53D1\u9001\u9A8C\u8BC1"))),!e.emailVerified&&f.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:O==="resend",onClick:()=>h("resend",async()=>{let y=await a.resend();if(y?.verifyLink)throw new Error(`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\uFF1A${y.verifyLink}`)},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u91CD\u53D1")},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6")),f.default.createElement(ha,{title:"\u5BC6\u7801",note:"\u81F3\u5C11 8 \u4F4D"},f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u5F53\u524D\u5BC6\u7801"),f.default.createElement("input",{className:"acv-input",type:"password",value:U,onChange:y=>$(y.target.value)})),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u65B0\u5BC6\u7801"),f.default.createElement("input",{className:"acv-input",type:"password",value:q,onChange:y=>V(y.target.value)})),f.default.createElement("div",{className:"acv-row"},f.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:O==="password"||!U||!q,onClick:()=>h("password",async()=>{await a.changePassword({currentPassword:U,newPassword:q}),$(""),V("")},"\u5BC6\u7801\u5DF2\u66F4\u65B0")},O==="password"?"\u66F4\u65B0\u4E2D\u2026":"\u66F4\u65B0\u5BC6\u7801")),f.default.createElement("p",{className:"acv-field-hint"},"\u5FD8\u4E86\u5F53\u524D\u5BC6\u7801\uFF1F\u53EF\u4EE5\u7ED9 ",e.email||"\uFF08\u6CA1\u6709\u90AE\u7BB1\uFF09"," \u53D1\u4E00\u5C01\u91CD\u7F6E\u90AE\u4EF6\uFF0C\u70B9\u94FE\u63A5\u8BBE\u65B0\u5BC6\u7801\u3002"),H&&f.default.createElement("div",{className:"acv-notice"},H),f.default.createElement("div",{className:"acv-row"},f.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:O==="reset-mail"||!e.email,onClick:async()=>{_("reset-mail"),m(""),L("");try{let y=await a.forgotPassword(e.email);L(y?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${y.verifyLink}`:"\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(y){m(y.message)}finally{_("")}}},O==="reset-mail"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u90AE\u4EF6\u91CD\u7F6E\u5BC6\u7801")))))}var S=G(require("react"),1);function Te(a,e){if(!a||a.thread?.id!==e.thread?.id)return e;let t=new Map(a.messages.map(s=>[s.id,s]));for(let s of e.messages)t.set(s.id,s);let u=[...t.values()].sort((s,i)=>s.createdAt-i.createdAt||(s.id<i.id?-1:1));return{...e,messages:u}}function Wa({api:a,me:e,initialThreadId:t,onBack:u,onDm:s,notify:i}){let[r,o]=S.default.useState(null),[v,g]=S.default.useState(t||null),[l,n]=S.default.useState(null),[d,p]=S.default.useState(""),[w,T]=S.default.useState(!1),[M,I]=S.default.useState(!1),[z,U]=S.default.useState(""),$=S.default.useRef(null),q=S.default.useCallback(()=>{e&&a.dmThreads().then(m=>{o(m.threads),!v&&m.threads.length&&g(m.threads[0].id)}).catch(m=>U(m.message))},[a,e,v]),V=S.default.useCallback(m=>{n(H=>Te(H,m))},[]);S.default.useEffect(()=>{q()},[q]),S.default.useEffect(()=>{v&&a.dmThread(v).then(m=>{V(m),U(""),q()}).catch(m=>U(m.message))},[a,v,V,q]),S.default.useEffect(()=>{if(!e||!v)return;let m=setInterval(()=>{document.hidden||a.dmThread(v).then(H=>{V(H),q()}).catch(()=>{})},8e3);return()=>clearInterval(m)},[a,e,v,V,q]),S.default.useEffect(()=>{let m=$.current;m&&(m.scrollTop=m.scrollHeight)},[l]);async function O(){let m=d.trim();if(!(!m||!v)){T(!0);try{await a.dmSend(v,m),p("");let H=await a.dmThread(v);V(H),q()}catch(H){i(H.message,{error:!0})}finally{T(!1)}}}async function _(){let m=l?.messages?.[0];if(!(!m||!v||M)){I(!0);try{let H=await a.dmThread(v,m.createdAt);n(L=>{if(!L)return H;let h=new Map(H.messages.map(P=>[P.id,P]));for(let P of L.messages)h.set(P.id,P);let y=[...h.values()].sort((P,C)=>P.createdAt-C.createdAt||(P.id<C.id?-1:1));return{...L,messages:y,total:H.total}})}catch(H){i(H.message,{error:!0})}finally{I(!1)}}}if(!e)return S.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");let K=!!(l&&l.messages.length<l.total);return S.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},S.default.createElement("div",null,S.default.createElement("button",{type:"button",className:"acv-back",onClick:u},"\u2190 \u8FD4\u56DE\u9996\u9875")),z&&S.default.createElement("div",{className:"acv-error"},z),S.default.createElement("div",{className:"acv-dm-layout"},S.default.createElement("aside",{className:"acv-panel acv-dm-list"},S.default.createElement("div",{className:"acv-section-head"},S.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},"\u79C1\u4FE1"),S.default.createElement("span",{className:"acv-section-note"},r?.length||0)),r?.length===0&&S.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u79C1\u4FE1"),r?.map(m=>S.default.createElement("button",{key:m.id,type:"button",className:m.id===v?"acv-dm-item is-active":"acv-dm-item",onClick:()=>g(m.id)},S.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:J(m.other)},X(m.other||{})),S.default.createElement("span",{className:"acv-dm-main"},S.default.createElement("span",{className:"acv-dm-name"},S.default.createElement(B,{api:a,me:e,handle:m.other?.handle,onDm:s},S.default.createElement("span",null,m.other?.displayName||m.other?.handle)),m.unread>0&&S.default.createElement("span",{className:"acv-badge"},m.unread)),S.default.createElement("span",{className:"acv-dm-preview"},m.lastMessage?.body||"\u8FD8\u6CA1\u6709\u6D88\u606F"))))),S.default.createElement("section",{className:"acv-panel acv-dm-pane"},!l&&S.default.createElement("div",{className:"acv-empty"},"\u9009\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB"),l&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"acv-dm-head"},S.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:J(l.thread.other)},X(l.thread.other||{})),S.default.createElement(B,{api:a,me:e,handle:l.thread.other?.handle,onDm:s},S.default.createElement("span",{style:{fontWeight:600}},l.thread.other?.displayName),S.default.createElement("span",{className:"acv-member-meta"},"@",l.thread.other?.handle))),S.default.createElement("div",{className:"acv-dm-messages",ref:$},K&&S.default.createElement("button",{type:"button",className:"acv-dm-more",disabled:M,onClick:_},M?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u65E9\u7684\u6D88\u606F"),l.messages.length===0&&S.default.createElement("div",{className:"acv-empty"},"\u6253\u4E2A\u62DB\u547C\u5427"),l.messages.map(m=>S.default.createElement("div",{key:m.id,className:m.mine?"acv-dm-msg is-mine":"acv-dm-msg"},S.default.createElement("div",{className:"acv-dm-bubble"},m.body),S.default.createElement("div",{className:"acv-dm-time"},R(m.createdAt))))),S.default.createElement("div",{className:"acv-dm-composer"},S.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:d,placeholder:"\u5199\u70B9\u4EC0\u4E48\u2026\uFF08Enter \u53D1\u9001\uFF09",onChange:m=>p(m.target.value),onKeyDown:m=>{m.key==="Enter"&&!m.shiftKey&&(m.preventDefault(),O())}}),S.default.createElement("button",{type:"button",className:"acv-chat-send",disabled:w||!d.trim(),onClick:O,"aria-label":"\u53D1\u9001"},S.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},S.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}))))))))}var W=G(require("react"),1);function Xa({api:a,token:e,onDone:t,notify:u}){let[s,i]=W.default.useState(""),[r,o]=W.default.useState(""),[v,g]=W.default.useState(!1),[l,n]=W.default.useState("");async function d(p){if(p.preventDefault(),s!==r)return n("\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4");g(!0),n("");try{await a.resetPassword({token:e,password:s}),u("\u5BC6\u7801\u5DF2\u91CD\u7F6E\uFF0C\u8BF7\u7528\u65B0\u5BC6\u7801\u767B\u5F55"),t()}catch(w){n(w.message)}finally{g(!1)}}return W.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:460,paddingTop:40}},W.default.createElement("div",{className:"acv-panel",style:{padding:"24px"}},W.default.createElement("h2",{className:"acv-section-title"},"\u8BBE\u7F6E\u65B0\u5BC6\u7801"),W.default.createElement("p",{className:"acv-modal-sub"},"\u91CD\u7F6E\u540E\u6240\u6709\u5DF2\u767B\u5F55\u8BBE\u5907\u90FD\u4F1A\u9000\u51FA\u3002"),l&&W.default.createElement("div",{className:"acv-error"},l),W.default.createElement("form",{onSubmit:d},W.default.createElement("div",{className:"acv-field"},W.default.createElement("label",null,"\u65B0\u5BC6\u7801"),W.default.createElement("input",{className:"acv-input",type:"password",value:s,onChange:p=>i(p.target.value)})),W.default.createElement("div",{className:"acv-field"},W.default.createElement("label",null,"\u518D\u8F93\u4E00\u6B21"),W.default.createElement("input",{className:"acv-input",type:"password",value:r,onChange:p=>o(p.target.value)})),W.default.createElement("div",{className:"acv-row"},W.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:v||s.length<8},v?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u65B0\u5BC6\u7801")))))}function De({me:a,mode:e,api:t,emailNotice:u,onDsh:s,onAuth:i,onLogout:r,onHome:o,onResend:v,onAdmin:g,onAccount:l,onDm:n,onDmUser:d,dmUnread:p=0,onOpenPost:w,tabs:T,activeTab:M,onSelectTab:I}){let[z,U]=x.default.useState(!1);return x.default.useEffect(()=>{if(!z)return;let $=()=>U(!1);return window.addEventListener("click",$),()=>window.removeEventListener("click",$)},[z]),x.default.createElement("div",{className:"acv-topbar"},x.default.createElement("div",{className:"acv-tabs"},T.map($=>x.default.createElement("button",{key:$.key,type:"button",className:M===$.key?"acv-tab is-active":"acv-tab",onClick:()=>I($.key)},$.label))),x.default.createElement(ja,{api:t,me:a,onDm:d,onOpenPost:w}),x.default.createElement("div",{className:"acv-topbar-grow"}),x.default.createElement("div",{className:"acv-topbar-right"},e==="plugin"&&x.default.createElement("button",{type:"button",className:"acv-dsh",onClick:s,title:"\u548C DSH \u804A\u804A\u8FD9\u4E2A\u793E\u533A"},x.default.createElement("span",{className:"acv-dsh-dot"}),"DSH\u52A9\u624B"),e==="plugin"&&x.default.createElement("span",{className:"acv-divider"}),a?x.default.createElement("div",{className:"acv-relative"},x.default.createElement("button",{type:"button",className:"acv-user",onClick:$=>{$.stopPropagation(),U(q=>!q)}},x.default.createElement(B,{api:t,me:a,handle:a.handle,disabled:z},x.default.createElement("span",{className:"acv-avatar",style:J(a)},X(a)),x.default.createElement("span",{className:"acv-user-name"},a.displayName||a.handle)),x.default.createElement("span",{className:"acv-caret"},"\u25BE")),z&&x.default.createElement("div",{className:"acv-menu",onClick:$=>$.stopPropagation()},x.default.createElement("div",{className:"acv-menu-note"},"@",a.handle," \xB7 ",a.role==="admin"?"\u7BA1\u7406\u5458":"\u6210\u5458"),x.default.createElement("div",{className:"acv-menu-group"},"\u4E2A\u4EBA\u7BA1\u7406"),x.default.createElement("button",{type:"button",onClick:()=>{U(!1),l()}},"\u8D26\u53F7\u8BBE\u7F6E"),x.default.createElement("button",{type:"button",onClick:()=>{U(!1),n()}},"\u79C1\u4FE1",p>0?` \xB7 ${p}`:""),!a.emailVerified&&x.default.createElement("button",{type:"button",onClick:()=>{U(!1),v()}},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6"),a.role==="admin"&&x.default.createElement(x.default.Fragment,null,x.default.createElement("div",{className:"acv-menu-group"},"\u7BA1\u7406\u5458"),x.default.createElement("button",{type:"button",onClick:()=>{U(!1),g()}},"\u793E\u533A\u7BA1\u7406")),x.default.createElement("div",{className:"acv-menu-group"}),x.default.createElement("button",{type:"button",onClick:()=>{U(!1),r()}},"\u9000\u51FA\u767B\u5F55"))):x.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("login")},"\u767B\u5F55")),u&&x.default.createElement("div",{style:{display:"none"}},u))}function Ja({mode:a="site",base:e="",tokenStore:t,onDsh:u}){let s=x.default.useMemo(()=>Ca({base:e,credentials:a==="site"?"same-origin":"omit",token:t?.get()||null,onToken:C=>t?.set(C)}),[e,a,t]),[i,r]=x.default.useState(null),[o,v]=x.default.useState(null),[g,l]=x.default.useState("loading"),[n,d]=x.default.useState({name:"home"}),[p,w]=x.default.useState("home"),[T,M]=x.default.useState(0),[I,z]=x.default.useState(null),[U,$]=x.default.useState(null),[q,V]=x.default.useState(0),O=x.default.useCallback((C,{error:A=!1}={})=>{$({text:C,error:A,key:Date.now()})},[]);x.default.useEffect(()=>{if(!U)return;let C=setTimeout(()=>$(null),3200);return()=>clearTimeout(C)},[U]);let _=x.default.useCallback(async()=>{try{let C=await s.bootstrap();r(C.account||null),v(C.home||null)}catch{r(null)}finally{l("ready")}},[s]);x.default.useEffect(()=>{_()},[_]),x.default.useEffect(()=>{if(a!=="site")return;let A=new URLSearchParams(window.location.search).get("token");A&&window.location.pathname.startsWith("/reset")&&d({name:"reset",token:A})},[a]),x.default.useEffect(()=>{let C=()=>z("login");return window.addEventListener("achoverse:auth",C),()=>window.removeEventListener("achoverse:auth",C)},[]),x.default.useEffect(()=>{if(a!=="site")return;let C=new URLSearchParams(window.location.search),A=C.get("token");if(!A||!window.location.pathname.startsWith("/verify"))return;let sa=C.get("kind");(sa==="email"?s.confirmEmailChange(A):s.verify(A)).then(ga=>{r(ga.account||null),O(sa==="email"?"\u65B0\u90AE\u7BB1\u5DF2\u751F\u6548\uFF0C\u9A8C\u8BC1\u4E5F\u5B8C\u6210\u4E86":"\u90AE\u7BB1\u9A8C\u8BC1\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u53D1\u5E16\u4E86"),window.history.replaceState({},"","/")}).catch(ga=>O(ga.message,{error:!0}))},[s,a,O]),x.default.useEffect(()=>{if(!i){M(0);return}let C=!1,A=()=>s.dmUnread().then(va=>{C||M(va.unread||0)}).catch(()=>{});A();let sa=setInterval(A,3e4);return()=>{C=!0,clearInterval(sa)}},[s,i]);let K=async C=>{try{let A=await s.dmOpenWith({targetId:C.id});d({name:"dm",threadId:A.thread.id})}catch(A){O(A.message,{error:!0})}},m=C=>d({name:"space",slug:C}),H=(C,A)=>d({name:"post",id:C,from:A||{name:"home"}}),L=()=>{d({name:"home"}),V(C=>C+1),v(null)};return x.default.createElement("div",{className:a==="plugin"?"acv-root acv-root--panel":"acv-root"},x.default.createElement("div",{className:"acv-frame"},x.default.createElement(De,{me:i,mode:a,api:s,onOpenPost:H,onDsh:()=>{if(u)return u();window.dispatchEvent(new CustomEvent("achoverse:open-dsh"))},onAuth:z,onLogout:async()=>{try{await s.logout()}catch{}s.setToken(null),r(null),O("\u5DF2\u7ECF\u9000\u51FA\u767B\u5F55"),L()},onHome:L,tabs:[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR"}],activeTab:p,onSelectTab:C=>{w(C),d({name:"home"})},onAdmin:()=>d({name:"admin"}),onAccount:()=>d({name:"account"}),onDm:()=>d({name:"dm"}),onDmUser:K,dmUnread:T,onResend:async()=>{try{let C=await s.resend();O(C?.verifyLink?"\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7":"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001")}catch(C){O(C.message,{error:!0})}}}),n.name==="home"&&p==="arvr"&&x.default.createElement(Za,{api:s,zone:"arvr",title:"AR/VR \u4E13\u533A",note:"\u4E3B\u9898\u4E13\u533A\uFF1A\u53EA\u6536\u5F55 AR/VR \u76F8\u5173\u7684\u677F\u5757",onOpenSpace:m}),n.name==="home"&&p==="home"&&g!=="ready"&&x.default.createElement("div",{className:"acv-main"},x.default.createElement("div",{className:"acv-col"},x.default.createElement("div",{className:"acv-skeleton"}),x.default.createElement("div",{className:"acv-skeleton"}),x.default.createElement("div",{className:"acv-skeleton"})),x.default.createElement("div",{className:"acv-col"},x.default.createElement("div",{className:"acv-skeleton",style:{height:260}}))),n.name==="home"&&p==="home"&&g==="ready"&&x.default.createElement(Ua,{initialData:o,key:q,api:s,me:i,onOpenSpace:m,onOpenPost:C=>H(C,{name:"home"}),onDm:K}),n.name==="space"&&x.default.createElement(Fa,{api:s,slug:n.slug,me:i,onBack:L,onOpenPost:C=>H(C,{name:"space",slug:n.slug}),onAuth:()=>z("login"),onDm:K,notify:O}),n.name==="reset"&&x.default.createElement(Xa,{api:s,token:n.token,notify:O,onDone:()=>{window.history.replaceState({},"","/"),d({name:"home"}),z("login")}}),n.name==="account"&&x.default.createElement(Ga,{api:s,me:i,onBack:L,onRefreshMe:_,notify:O}),n.name==="dm"&&x.default.createElement(Wa,{api:s,me:i,initialThreadId:n.threadId,onBack:L,onDm:K,notify:O}),n.name==="admin"&&x.default.createElement(Ka,{api:s,me:i,onDm:K,onBack:L,notify:O}),n.name==="post"&&x.default.createElement(Va,{api:s,id:n.id,me:i,backTo:n.from?.name==="space"?"space":"home",onDm:K,onBack:()=>n.from?.name==="space"?d({name:"space",slug:n.from.slug}):L(),onAuth:()=>z("login"),notify:O})),I&&x.default.createElement(Ba,{api:s,initialMode:I,onClose:()=>z(null),onDone:C=>{r(C),z(null),v(null),L(),O("\u767B\u5F55\u6210\u529F")},notify:O}),U&&x.default.createElement("div",{className:U.error?"acv-toast is-error":"acv-toast"},U.text))}var E=G(require("react"),1);function pa(a,e=""){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,role:a,text:e,tools:[]}}async function Pe({token:a,message:e,signal:t,onEvent:u}){let s=await fetch("/community/ai/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:a,message:e}),signal:t});if(!s.ok||!s.body){let v=`HTTP ${s.status}`;try{v=(await s.json())?.error||v}catch{}throw new Error(v)}let i=s.body.getReader(),r=new TextDecoder,o="";for(;;){let{value:v,done:g}=await i.read();if(g)break;o+=r.decode(v,{stream:!0});let l;for(;(l=o.indexOf(`

`))>=0;){let n=o.slice(0,l);o=o.slice(l+2);for(let d of n.split(`
`)){if(!d.startsWith("data:"))continue;let p=d.slice(5).trim();if(p)try{u(JSON.parse(p))}catch{}}}}}function Qa({tokenStore:a,onClose:e,onLogin:t}){let[u,s]=E.default.useState(()=>[pa("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),[i,r]=E.default.useState(""),[o,v]=E.default.useState(!1),[g,l]=E.default.useState(""),[n,d]=E.default.useState(()=>a?.get()||null),[p,w]=E.default.useState(""),[T,M]=E.default.useState(!1),[I,z]=E.default.useState(null),[U,$]=E.default.useState({}),[q,V]=E.default.useState(!1),O=E.default.useRef(null),_=E.default.useRef(null);E.default.useEffect(()=>()=>_.current?.abort(),[]),E.default.useEffect(()=>{let h=O.current;h&&(h.scrollTop=h.scrollHeight)},[u]),E.default.useEffect(()=>{let h=()=>{let P=a?.get()||null;P!==n&&(_.current?.abort(),s([pa("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),z(null),w(""),l(""),d(P))},y=setInterval(h,1500);return window.addEventListener("achoverse:token-changed",h),window.addEventListener("storage",h),()=>{clearInterval(y),window.removeEventListener("achoverse:token-changed",h),window.removeEventListener("storage",h)}},[n,a]),E.default.useEffect(()=>{if(!n)return;let h=!1;return fetch("/community/ai/history",{headers:{authorization:`Bearer ${n}`},cache:"no-store"}).then(y=>{if(!y.ok)throw new Error("\u5386\u53F2\u8BFB\u53D6\u5931\u8D25");return y.json()}).then(y=>{if(h)return;let P=(y?.messages||[]).map(C=>({...pa(C.role,C.text),id:`h-${Math.random().toString(36).slice(2,8)}`}));P.length&&s(P)}).catch(()=>{}),()=>{h=!0}},[n]);let K=h=>s(y=>{let P=[...y],C={...P[P.length-1]};return P[P.length-1]=h(C),P});async function m(h){let y=String(h??i).trim();if(!y||o)return;let P=a?.get();if(!P){l("\u5148\u767B\u5F55\u793E\u533A\uFF0C\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u8BF4\u8BDD");return}l(""),v(!0),r(""),w("");let C=new AbortController;_.current=C,s(A=>[...A,pa("user",y),pa("assistant","")]);try{await Pe({token:P,message:y,signal:C.signal,onEvent:A=>{a?.get()===P&&(A.type==="session"?w(A.sessionId):A.type==="question"?(z({callId:A.callId,questions:A.questions,sessionId:A.sessionId}),$({})):A.type==="text"?K(sa=>({...sa,text:sa.text?`${sa.text}
${A.text}`:A.text})):A.type==="tool"?K(sa=>({...sa,tools:A.phase==="call"?[...sa.tools,A.name]:sa.tools})):A.type==="error"&&l(A.error||"\u5BF9\u8BDD\u5931\u8D25"))}})}catch(A){A.name!=="AbortError"&&a?.get()===P&&l(A.message),/登录|401/.test(A.message)&&a?.get()===P&&(a?.set(null),d(null))}finally{_.current===C&&(_.current=null),v(!1),M(!1),z(null)}}async function H(){if(!(!I||q)){V(!0),l("");try{let h=await fetch("/community/ai/answer",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:a?.get(),sessionId:I.sessionId,callId:I.callId,answers:I.questions.map(P=>({id:P.id,selected:U[P.id]?.selected||[],...U[P.id]?.custom?.trim()?{custom:U[P.id].custom.trim()}:{}}))})}),y=await h.json();if(!h.ok)throw new Error(y.error||"\u56DE\u7B54\u5931\u8D25");z(null)}catch(h){l(h.message)}finally{V(!1)}}}async function L(){if(!(!p||T)){M(!0);try{let h=await fetch("/community/ai/stop",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:a?.get(),sessionId:p})}),y=await h.json();if(!h.ok)throw new Error(y.error||"\u505C\u6B62\u5931\u8D25");_.current?.abort()}catch(h){l(h.message)}finally{M(!1)}}}return E.default.createElement("div",{className:"acv-drawer",role:"dialog","aria-label":"DSH \u5BF9\u8BDD"},E.default.createElement("div",{className:"acv-drawer-head"},E.default.createElement("span",{className:"acv-dsh",style:{padding:"6px 14px"}},E.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),E.default.createElement("span",{style:{fontWeight:700}},"\u793E\u533A\u52A9\u624B"),E.default.createElement("span",{style:{flex:1}}),E.default.createElement("button",{type:"button",className:"acv-back",onClick:e,"aria-label":"\u5173\u95ED"},"\u2715")),E.default.createElement("div",{className:"acv-drawer-body",ref:O},u.map(h=>E.default.createElement("div",{key:h.id,className:`acv-chat ${h.role==="user"?"is-user":"is-agent"}`},h.tools?.length>0&&E.default.createElement("div",{className:"acv-chat-tools"},h.tools.map((y,P)=>E.default.createElement("span",{key:`${y}-${P}`,className:"acv-chip"},"\u8C03\u7528 ",y))),h.text&&(h.role==="assistant"?E.default.createElement("div",{className:"acv-chat-text acv-chat-text--md"},E.default.createElement(da,{text:h.text})):E.default.createElement("div",{className:"acv-chat-text"},h.text)),!h.text&&h.role==="assistant"&&o&&E.default.createElement("div",{className:"acv-chat-typing"},"\u2026"))),I&&E.default.createElement("div",{className:"acv-question-card",role:"group","aria-label":"DSH \u63D0\u95EE"},I.questions.map(h=>E.default.createElement("div",{key:h.id,className:"acv-question-item"},E.default.createElement("strong",null,h.header||"\u9700\u8981\u4F60\u7684\u9009\u62E9"),E.default.createElement("p",null,h.question),h.options?.map(y=>{let P=U[h.id]?.selected||[];return E.default.createElement("button",{key:y.label,type:"button",className:`acv-question-option${P.includes(y.label)?" is-selected":""}`,"aria-pressed":P.includes(y.label),onClick:()=>$(C=>{let A=C[h.id]||{selected:[],custom:""},sa=h.multiSelect?P.includes(y.label)?P.filter(va=>va!==y.label):[...P,y.label]:[y.label];return{...C,[h.id]:{...A,selected:sa}}})},y.label,y.description&&E.default.createElement("small",null,y.description))}),E.default.createElement("input",{className:"acv-question-custom",value:U[h.id]?.custom||"",placeholder:"\u5176\u4ED6\u56DE\u7B54\uFF08\u53EF\u9009\uFF09","aria-label":`${h.question}\u7684\u81EA\u5B9A\u4E49\u56DE\u7B54`,onChange:y=>$(P=>({...P,[h.id]:{selected:P[h.id]?.selected||[],custom:y.target.value}}))}))),E.default.createElement("button",{type:"button",className:"acv-btn brand",disabled:q,onClick:H},q?"\u63D0\u4EA4\u4E2D\u2026":"\u63D0\u4EA4\u56DE\u7B54"),E.default.createElement("span",{className:"acv-field-hint"},"\u4E0D\u9009\u4EFB\u4F55\u9009\u9879\u5373\u8DF3\u8FC7\uFF0C\u4E0D\u4EE3\u8868\u540C\u610F\u3002")),g&&E.default.createElement("div",{className:"acv-error"},g),!n&&E.default.createElement("div",{className:"acv-notice",style:{marginTop:12}},"\u8FD8\u6CA1\u767B\u5F55\u793E\u533A\uFF0C\u767B\u5F55\u4E4B\u540E\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002",E.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>{t?.(),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55"))),E.default.createElement("div",{className:"acv-drawer-foot"},E.default.createElement("div",{className:"acv-input-brand"},E.default.createElement(ia,{size:24})),E.default.createElement("div",{className:"acv-chat-composer"},E.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:i,placeholder:o?"\u6B63\u5728\u56DE\u590D\u2026":"\u548C DSH \u804A\u804A\u793E\u533A\uFF0C\u6216\u8BA9\u5B83\u53D1\u4E00\u6761\u5E16",onChange:h=>r(h.target.value)}),E.default.createElement("button",{type:"button",className:`acv-chat-send${o?" is-stop":""}`,onClick:o?L:()=>m(),disabled:o?!p||T:!i.trim(),"aria-label":o?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001",title:o?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001"},o?E.default.createElement("span",{className:"acv-chat-stop-icon"}):E.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},E.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})))),E.default.createElement("div",{className:"acv-chat-hint"},"Enter \u6362\u884C \xB7 \u70B9\u51FB\u6309\u94AE\u53D1\u9001")))}var Ra="achoverse-community",wa="achoverse.community.token",ae="https://community.achoverse.com",Oe=["slots"];function ee(){if(typeof document>"u")return;let a=document.querySelector("style[data-acv-community]");a||(a=document.createElement("style"),a.setAttribute("data-acv-community","styles"),document.head.appendChild(a)),a.textContent!==ba&&(a.textContent=ba)}function Ae({size:a=22,active:e=!1}){return ta.default.createElement("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},ta.default.createElement("circle",{cx:12,cy:8.5,r:3.4,stroke:"currentColor",strokeWidth:e?2:1.7}),ta.default.createElement("path",{d:"M4.6 19.4c.8-3.9 3.8-6.1 7.4-6.1s6.6 2.2 7.4 6.1",stroke:"currentColor",strokeWidth:e?2:1.7,strokeLinecap:"round"}))}function Le(){return{get(){try{return window.localStorage.getItem(wa)}catch{return null}},set(a){try{a?window.localStorage.setItem(wa,a):window.localStorage.removeItem(wa),window.dispatchEvent(new Event("achoverse:token-changed"))}catch{}}}}function $e(){let[a,e]=ta.default.useState(null),[t,u]=ta.default.useState(!1),s=ta.default.useMemo(()=>Le(),[]);return ta.default.useEffect(()=>{ee();let i=!1;return fetch("/community/config",{cache:"no-store"}).then(r=>r.ok?r.json():Promise.reject(new Error(String(r.status)))).then(r=>{i||e(r?.baseUrl||ae)}).catch(()=>{i||e(ae)}),()=>{i=!0}},[]),a?ta.default.createElement(ta.default.Fragment,null,ta.default.createElement(Ja,{mode:"plugin",base:a,tokenStore:s,onDsh:()=>u(!0)}),t?ta.default.createElement(Qa,{tokenStore:s,onClose:()=>u(!1)}):null):ta.default.createElement("div",{className:"acv-root acv-root--panel"},ta.default.createElement("div",{className:"acv-frame"},ta.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u8FDE\u63A5\u793E\u533A\u2026")))}function _e(a){ee(),a.slots.inject("main",()=>a.slots.register({name:"main",key:Ra},$e)),a.slots.inject("sidebar.panellist",()=>a.slots.register({name:"sidebar.panellist",id:Ra,order:30,label:()=>"Achoverse\u793E\u533A"},Ae))}
return module.exports}})
