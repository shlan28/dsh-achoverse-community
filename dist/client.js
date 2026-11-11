window.__ModuleLoader__.load({id:"dsh-achoverse-community",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var Ka=Object.create;var _e=Object.defineProperty;var Wa=Object.getOwnPropertyDescriptor;var Ga=Object.getOwnPropertyNames;var Za=Object.getPrototypeOf,Xa=Object.prototype.hasOwnProperty;var Xe=(e,a)=>()=>{try{return a||e((a={exports:{}}).exports,a),a.exports}catch(n){throw a=0,n}},Ja=(e,a)=>{for(var n in a)_e(e,n,{get:a[n],enumerable:!0})},Je=(e,a,n,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let r of Ga(a))!Xa.call(e,r)&&r!==n&&_e(e,r,{get:()=>a[r],enumerable:!(o=Wa(a,r))||o.enumerable});return e};var X=(e,a,n)=>(n=e!=null?Ka(Za(e)):{},Je(a||!e||!e.__esModule?_e(n,"default",{value:e,enumerable:!0}):n,e)),Qa=e=>Je(_e({},"__esModule",{value:!0}),e);var ta=Xe(ie=>{"use strict";var tt=require("react");function aa(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ge(){}var le={d:{f:ge,r:function(){throw Error(aa(522))},D:ge,C:ge,L:ge,m:ge,X:ge,S:ge,M:ge},p:0,findDOMNode:null},nt=Symbol.for("react.portal"),ot=Symbol.for("react.recoverable"),ea=Symbol.for("react.optimistic_key");function st(e,a,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:nt,key:o==null?null:o===ea?ea:""+o,children:e,containerInfo:a,implementation:n}}var Ee=tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ie(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=le;ie.browser=function(e){return{$$typeof:ot,_reason:e}};ie.createPortal=function(e,a){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(aa(299));return st(e,a,null,n)};ie.flushSync=function(e){var a=Ee.T,n=le.p;try{if(Ee.T=null,le.p=2,e)return e()}finally{Ee.T=a,le.p=n,le.d.f()}};ie.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,le.d.C(e,a))};ie.prefetchDNS=function(e){typeof e=="string"&&le.d.D(e)};ie.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var n=a.as,o=Ie(n,a.crossOrigin),r=typeof a.integrity=="string"?a.integrity:void 0,t=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;n==="style"?le.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:o,integrity:r,fetchPriority:t}):n==="script"&&le.d.X(e,{crossOrigin:o,integrity:r,fetchPriority:t,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};ie.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var n=Ie(a.as,a.crossOrigin);le.d.M(e,{crossOrigin:n,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0})}}else a==null&&le.d.M(e)};ie.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var n=a.as,o=Ie(n,a.crossOrigin);le.d.L(e,n,{crossOrigin:o,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};ie.preloadModule=function(e,a){if(typeof e=="string")if(a){var n=Ie(a.as,a.crossOrigin);le.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:n,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0})}else le.d.m(e)};ie.requestFormReset=function(e){le.d.r(e)};ie.unstable_batchedUpdates=function(e,a){return e(a)};ie.useFormState=function(e,a,n){return Ee.H.useFormState(e,a,n)};ie.useFormStatus=function(){return Ee.H.useHostTransitionStatus()};ie.version="19.3.1"});var Ve=Xe((Ft,oa)=>{"use strict";function na(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(na)}catch(e){console.error(e)}}na(),oa.exports=ta()});var Lt={};Ja(Lt,{apply:()=>Ot,inject:()=>Tt});module.exports=Qa(Lt);var ce=X(require("react"),1);var Ye=`/* Achoverse \u793E\u533A\uFF1A\u6D45\u7070\u753B\u5E03 + \u767D\u8272\u5927\u5706\u89D2\u5361\u7247 + \u7C89\u7D2B\u6E10\u53D8\u4E3B\u89C6\u89C9\u3002 */

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

/* 3D\u7A7A\u95F4\uFF1A\u5361\u7247\u5C01\u9762\u56FE\u76D6\u5728\u6E10\u53D8\u5E95\u4E0A\uFF1B\u5360\u4F4D\u573A\u666F\u9875 */
.acv-world-cover {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.acv-world-stage {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
}

.acv-world-stage-cover {
  width: 100%;
  aspect-ratio: 4 / 1;
  object-fit: cover;
  border-radius: 12px;
  display: block;
}

/* 3D\u7A7A\u95F4\uFF1A\u5B9E\u65F6\u573A\u666F\u821E\u53F0 */
.acv-world-live {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.acv-world-canvas {
  position: relative;
  width: 100%;
  height: min(72vh, 720px);
  border-radius: 16px;
  overflow: hidden;
  background: #0c1e33;
  box-shadow: 0 18px 50px rgba(12, 30, 51, 0.35);
}

.acv-world-gl {
  display: block;
  width: 100%;
  height: 100%;
  touch-action: none;
}

.acv-world-loading {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b9cfe6;
  font-size: 14px;
  letter-spacing: 0.02em;
}

.acv-world-hint {
  text-align: center;
  color: var(--acv-muted);
  font-size: 12.5px;
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

/* \u66F4\u65B0\u65F6\u95F4\u8D34\u5728\u5C01\u9762\u53F3\u4E0A\u65B9\uFF0C\u7528\u6D45\u8272\u5E95\u4FDD\u8BC1\u5404\u79CD\u6E10\u53D8\u5C01\u9762\u4E0A\u90FD\u80FD\u8BFB\u6E05\u3002 */
.acv-space-updated--cover {
  position: absolute;
  top: 14px;
  right: 16px;
  z-index: 2;
  max-width: calc(100% - 142px);
  padding: 5px 10px;
  border-radius: 7px;
  background: rgba(255, 255, 255, 0.94);
  color: var(--acv-ink-soft);
  font-size: 11px;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  gap: 12px;
  min-height: 72px;
  padding: 12px 8px;
}

.acv-member-main {
  flex: 1;
  min-width: 0;
  display: block;
}

.acv-member-name {
  display: block;
  font-size: 14px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.acv-member-meta {
  display: block;
  color: var(--acv-muted);
  font-size: 12px;
}

/* ------------------------------------------------------------- \u7EDF\u8BA1\u6570\u5B57\uFF08\u677F\u5757\u9875\uFF09 */

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

/* ------------------------------------------------------------- \u9996\u9875\u52A8\u6001\uFF08\u6700\u8FD1\u66F4\u65B0 / \u6D3B\u8DC3\u6210\u5458\u6807\u7B7E\u9875\uFF09 */

/* \u9875\u7B7E\u4E0E\u5185\u5BB9\u5171\u7528\u767D\u8272\u8868\u9762\uFF0C\u5E95\u90E8\u5185\u51F9\u5706\u5F27\u8BA9\u9009\u4E2D\u9879\u81EA\u7136\u63A5\u5165\u5217\u8868\u3002 */
.acv-panel.acv-feed {
  padding: 0;
  overflow: hidden;
}

.acv-feed-head {
  display: flex;
  align-items: flex-end;
  min-height: 52px;
  padding: 0 12px 0 0;
  background: #fafafb;
  border-radius: var(--acv-radius) var(--acv-radius) 0 0;
}

.acv-feed-tabs {
  display: flex;
  align-items: flex-end;
  isolation: isolate;
  min-width: 0;
}

.acv-feed-tab {
  position: relative;
  border: 0;
  background: transparent;
  min-height: 52px;
  padding: 8px 24px 18px;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: -0.01em;
  color: var(--acv-muted);
  cursor: pointer;
  white-space: nowrap;
  border-radius: 24px 24px 0 0;
  transition: color 0.3s ease-in-out;
}

.acv-feed-tab:hover {
  color: var(--acv-ink-soft);
}

.acv-feed-tab.is-active {
  z-index: 1;
  background: var(--acv-surface);
  color: var(--acv-ink);
}

/* \u4E24\u7AEF\u53EA\u7ED8\u5236\u5706\u5F27\u5916\u7684\u767D\u8272\u533A\u57DF\uFF1B\u88C5\u9970\u4E0D\u5360\u5E03\u5C40\uFF0C\u4E5F\u4E0D\u906E\u6321\u76F8\u90BB\u6309\u94AE\u7684\u70B9\u51FB\u3002 */
.acv-feed-tab.is-active::before {
  content: '';
  position: absolute;
  inset: auto -18px 0;
  height: 18px;
  pointer-events: none;
  background:
    radial-gradient(circle at 0 0, transparent 17.5px, var(--acv-surface) 18px) left bottom / 18px 18px no-repeat,
    radial-gradient(circle at 100% 0, transparent 17.5px, var(--acv-surface) 18px) right bottom / 18px 18px no-repeat;
}

.acv-feed-tab:focus-visible {
  outline: 2px solid var(--acv-ink-soft);
  outline-offset: -5px;
}

/* \u9009\u4E2D\u6807\u7B7E\u6587\u5B57\u4E0B\u7684\u77ED\u4E0B\u5212\u7EBF\uFF1B\u4F4D\u7F6E\u538B\u5728\u6807\u7B7E\u4E0B\u6CBF\u4E4B\u4E0A\uFF0C\u548C\u53C2\u8003\u56FE\u4E00\u81F4 */
.acv-feed-tab.is-active::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 7px;
  transform: translateX(-50%);
  width: 40px;
  height: 4px;
  border-radius: 999px;
  background: var(--acv-ink);
  pointer-events: none;
}

.acv-feed-head .acv-feed-refresh {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  margin: 0 0 15px auto;
  flex: none;
}

.acv-feed-refresh:focus-visible {
  outline: 2px solid var(--acv-ink-soft);
  outline-offset: -2px;
}

/* \u9762\u677F\u9AD8\u5EA6\u6309 10 \u6761\u7B97\uFF0810 \xD7 72px \u884C\u9AD8 + 9 \u6761\u5206\u9694\u7EBF\uFF09\uFF0C\u53EA\u6709\u51E0\u6761\u65F6\u4E5F\u4E0D\u7F29\uFF0C
   \u5207\u6807\u7B7E\u3001\u70B9\u5237\u65B0\u65F6\u53F3\u680F\u9AD8\u5EA6\u4E0D\u6296\uFF1B\u4E24\u79CD\u5217\u8868\u884C\u9AD8\u7EDF\u4E00 72px\u3002 */
.acv-feed-body {
  display: flex;
  flex-direction: column;
  padding: 6px 16px 18px;
  min-height: 753px;
}

.acv-feed-body > .acv-empty {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* \u52A8\u6001\u5217\u8868\u91CC\u7684\u5934\u50CF\u6BD4\u9ED8\u8BA4\u5C0F\u5934\u50CF\u5927\u4E00\u53F7\uFF0C\u914D\u5408\u66F4\u9AD8\u7684\u884C */
.acv-feed-body .acv-avatar--sm {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

/* ------------------------------------------------------------- \u6700\u8FD1\u66F4\u65B0 */

.acv-recent-item {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 72px;
  border: 0;
  background: transparent;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
  padding: 12px 8px;
  border-radius: 14px;
  transition: background 0.16s ease;
}

/* \u4E24\u79CD\u5217\u8868\u7528\u540C\u4E00\u6761\u7EC6\u5206\u9694\u7EBF\uFF0C\u884C\u66F4\u9AD8\u4E5F\u8FD8\u80FD\u4E00\u773C\u6570\u6E05 */
.acv-recent-item + .acv-recent-item,
.acv-member + .acv-member {
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
  /* \u5355\u884C\u7701\u7565\uFF1A\u884C\u9AD8\u56FA\u5B9A\uFF0C10 \u6761\u9AD8\u5EA6\u53EF\u9884\u671F */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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

.acv-password-input {
  position: relative;
  min-width: 0;
}

.acv-password-input .acv-input {
  padding-right: 48px;
}

.acv-password-toggle {
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 40px;
  height: 38px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: var(--acv-muted);
  cursor: pointer;
  transition: color 0.3s ease-in-out, background 0.3s ease-in-out;
}

.acv-password-toggle:hover {
  color: var(--acv-ink);
  background: rgba(245, 63, 166, 0.08);
}

.acv-password-toggle:focus-visible {
  outline: 2px solid #f5a6d3;
  outline-offset: -2px;
}

.acv-password-toggle:disabled {
  opacity: 0.45;
  cursor: default;
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

  .acv-feed-tab {
    min-height: 48px;
    padding: 7px 18px 15px;
    font-size: 14px;
  }

  .acv-feed-head {
    min-height: 48px;
    padding: 0 8px 0 0;
  }

  .acv-feed-head .acv-feed-refresh {
    margin-bottom: 12px;
  }

  .acv-feed-body {
    padding: 4px 10px 14px;
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

/* \u6D77\u8C5A\u8868\u60C5\uFF1A\u8D44\u6E90\u6309\u9700\u52A0\u8F7D\uFF0C\u9009\u62E9\u9762\u677F\u4E0E\u7F16\u8F91\u5668\u5171\u7528\u3002 */
.acv-emoji { display: inline-block; width: 64px; height: 64px; object-fit: contain; vertical-align: middle; }
.acv-emoji-editor { position: relative; min-width: 0; }
.acv-emoji-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin: 6px 0; }
.acv-emoji-toolbar > span { color: var(--acv-muted, #788395); font-size: 12px; }
.acv-emoji-picker { position: relative; margin: 8px 0; z-index: 20; width: min(390px, 100%); box-sizing: border-box; padding: 16px; border: 1px solid #e1e5ed; border-radius: 16px; background: #fff; box-shadow: 0 12px 36px #23304726; }
.acv-emoji-picker-head { display: flex; gap: 8px; align-items: center; }
.acv-emoji-picker-head input { min-width: 0; }
.acv-emoji-picker-body { max-height: min(320px, 45vh); overflow-y: auto; overscroll-behavior: contain; }
.acv-emoji-picker h4 { font-size: 12px; font-weight: 500; color: #64748b; margin: 16px 0 8px; }
.acv-emoji-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 4px; }
.acv-emoji-choice { display: flex; justify-content: center; align-items: center; min-width: 0; border: 0; border-radius: 10px; background: transparent; padding: 2px; cursor: pointer; transition: background 0.2s; }
.acv-emoji-choice .acv-emoji { width: 100%; height: auto; aspect-ratio: 1; max-width: 56px; }
.acv-emoji-choice:hover { background: #f0f5ff; }
.acv-emoji-choice:focus-visible { outline: 2px solid #427ce4; outline-offset: 1px; }
.acv-emoji-choice:disabled { opacity: 0.5; cursor: default; }
@media (max-width: 420px) { .acv-emoji-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } }

/* \u8868\u60C5\u4EE5\u539F\u5B50\u8282\u70B9\u7559\u5728\u7F16\u8F91\u533A\u5185\uFF0C\u4E0D\u518D\u63D0\u4F9B\u72EC\u7ACB\u9884\u89C8\u3002 */
.acv-visual-editor { display: block; box-sizing: border-box; white-space: pre-wrap; overflow-wrap: anywhere; overflow-y: auto; max-height: 45vh; cursor: text; }
.acv-visual-editor:empty::before { content: attr(data-placeholder); color: #94a3b8; pointer-events: none; }
.acv-visual-editor[aria-disabled="true"] { opacity: .6; cursor: default; }
.acv-editor-emoji { display: inline-block; vertical-align: middle; user-select: all; line-height: 1; border-radius: 6px; }
.acv-editor-emoji img { display: block; width: 48px; height: 48px; object-fit: contain; pointer-events: none; }

/* 3D \u7A7A\u95F4\u72EC\u7ACB\u5361\u7247\uFF1A\u4E0D\u6539\u53D8\u9996\u9875\u5171\u4EAB\u677F\u5757\u5361\u7247\u3002 */
.acv-world-grid { grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 380px)); }
.acv-world-card { width: 100%; aspect-ratio: 4 / 3; background: #203b53; }
.acv-world-card::after { content: ''; position: absolute; inset: 40% 0 0; z-index: 2; background: linear-gradient(transparent, #102033b3); pointer-events: none; }
.acv-world-card-title { position: absolute; bottom: 22px; left: 24px; right: 24px; z-index: 3; color: #fff; font-size: 20px; font-weight: 600; text-shadow: 0 1px 8px #10203380; }
.acv-world-card:focus-visible { outline: 3px solid #f53fa6; outline-offset: 4px; }

/* Portal \u76F4\u63A5\u8986\u76D6\u5F53\u524D\u6587\u6863\u89C6\u53E3\uFF0C\u821E\u53F0\u548C\u63D0\u793A\u4E0D\u53C2\u4E0E\u793E\u533A\u9875\u9762\u6392\u7248\u3002 */
.acv-world-fullscreen { position: fixed; inset: 0; height: 100vh; height: 100dvh; z-index: 90; background: #0c1e33; color: #e4ecf3; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif; }
.acv-world-fullscreen .acv-world-live { position: absolute; inset: 0; display: block; }
.acv-world-fullscreen .acv-world-canvas { width: 100%; height: 100%; border-radius: 0; box-shadow: none; }
.acv-world-back { position: absolute; z-index: 2; top: max(16px, env(safe-area-inset-top)); left: max(16px, env(safe-area-inset-left)); padding: 10px 16px; border: 1px solid #ffffff50; border-radius: 12px; background: #102033b3; color: #fff; font: inherit; cursor: pointer; backdrop-filter: blur(12px); }
.acv-world-back:hover { background: #203b53e6; }
.acv-world-back:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
.acv-world-fullscreen .acv-world-hint { position: absolute; bottom: max(16px, env(safe-area-inset-bottom)); left: 16px; right: 16px; color: #fff; text-shadow: 0 1px 6px #102033; pointer-events: none; font-size: 12px; }
@media (max-width: 720px) { .acv-world-grid { grid-template-columns: minmax(0, 1fr); } }

/* \u4E91\u6735\u53EA\u6709\u573A\u666F\u5185\u7684\u53EF\u89C1\u5165\u53E3\uFF1B\u6B64\u63A7\u4EF6\u4FDD\u7559\u952E\u76D8\u8BED\u4E49\uFF0C\u7126\u70B9\u53CD\u9988\u7531\u4E91\u6735\u7ED8\u5236\u3002 */
.acv-cloud-keyboard-entry { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; border: 0; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
/* \u7559\u8A00\u6CBF\u7528\u9879\u76EE acv-modal/acv-btn/acv-input\uFF0C\u4EC5\u8865\u539F\u751F dialog \u7684\u5C3A\u5BF8\u4E0E\u5E03\u5C40\u3002 */
.acv-world-message-dialog { box-sizing: border-box; width: min(480px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); overflow: auto; border: 0; color: var(--acv-ink); font: 14px/1.5 -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif; }
.acv-world-message-dialog::backdrop { background: rgba(18, 18, 28, 0.42); backdrop-filter: blur(3px); }
.acv-message-heading { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
.acv-message-heading .acv-modal-title { margin: 0; }
.acv-message-tabs, .acv-message-actions { display: flex; flex-wrap: wrap; gap: 10px; margin: 16px 0; }
.acv-world-message-dialog fieldset { border: 0; padding: 0; margin: 16px 0; min-width: 0; }
.acv-world-message-dialog legend { color: var(--acv-muted); font-size: 12px; font-weight: 600; }
.acv-message-styles { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; margin-top: 10px; }
.acv-message-styles label { min-width: 0; border: 1px solid var(--acv-line); border-radius: 16px; padding: 10px; text-align: center; cursor: pointer; transition: border-color .2s, background .2s; }
.acv-message-styles label.is-selected { border-color: var(--acv-pink); background: #fff5fa; }
.acv-message-styles input { accent-color: var(--acv-pink); }
.acv-message-preview { display: flex; align-items: center; justify-content: center; aspect-ratio: 4 / 3; margin: 8px 0; overflow: hidden; border-radius: 10px; background: #f5f5f9; }
.acv-message-preview img { display: block; width: 100%; height: 100%; object-fit: contain; }
.acv-message-preview-loading { color: var(--acv-muted); font-size: 12px; }
.acv-message-field textarea { resize: vertical; }
.acv-message-submit { width: 100%; }
.acv-message-history-item { display: block; width: 100%; text-align: left; margin: 10px 0; border: 1px solid var(--acv-line); border-radius: 12px; padding: 12px; background: var(--acv-surface); color: var(--acv-ink-soft); font: inherit; cursor: pointer; }
.acv-message-history-item span { display: block; white-space: pre-wrap; overflow-wrap: anywhere; }
.acv-message-detail-preview { display: block; width: 100%; max-height: 220px; object-fit: contain; border-radius: 12px; background: #f5f5f9; }
.acv-message-fulltext { font-size: 18px; line-height: 1.9; white-space: pre-wrap; overflow-wrap: anywhere; color: var(--acv-ink-soft); }
.acv-world-message-dialog .acv-overlay { z-index: 5; }
@media(max-width: 480px) { .acv-world-message-dialog { padding: 20px; } .acv-world-message-dialog .acv-modal { max-height: 85dvh; overflow: auto; } }
`;var N=X(require("react"),1);function Qe({base:e="",token:a=null,credentials:n="same-origin",onToken:o}={}){let r=a;function t(s){r=s||null,o?.(r)}async function i(s,{method:c="GET",body:m,signal:u}={}){let p={};m!==void 0&&(p["content-type"]="application/json"),r&&(p.authorization=`Bearer ${r}`);let d=await fetch(e+s,{method:c,headers:p,body:m===void 0?void 0:JSON.stringify(m),credentials:r?"omit":n,cache:"no-store",signal:u}),l=await d.text(),b={};try{b=l?JSON.parse(l):{}}catch{b={error:l.slice(0,200)}}if(!d.ok){let h=new Error(b?.error||`HTTP ${d.status}`);throw h.code=b?.code,h.status=d.status,h}return b}return{assetUrl:s=>e.replace(/\/$/,"")+s,raw:i,setToken:t,getToken:()=>r,me:()=>i("/api/auth/me"),home:()=>i("/api/home"),bootstrap:()=>i("/api/bootstrap"),spaces:()=>i("/api/spaces"),zoneSpaces:s=>i(`/api/zones/${encodeURIComponent(s)}`),space:s=>i(`/api/spaces/${encodeURIComponent(s)}`),post:s=>i(`/api/posts/${encodeURIComponent(s)}`),captcha:()=>i("/api/captcha"),register:s=>i("/api/auth/register",{method:"POST",body:s}),login:s=>i("/api/auth/login",{method:"POST",body:s}),logout:()=>i("/api/auth/logout",{method:"POST",body:{}}),resend:()=>i("/api/auth/resend",{method:"POST",body:{}}),verify:s=>i("/api/auth/verify",{method:"POST",body:{token:s}}),createPost:s=>i("/api/posts",{method:"POST",body:s}),createComment:(s,c)=>i(`/api/posts/${encodeURIComponent(s)}/comments`,{method:"POST",body:c}),updateProfile:s=>i("/api/account/profile",{method:"POST",body:s}),requestEmailChange:s=>i("/api/account/email",{method:"POST",body:{email:s}}),confirmEmailChange:s=>i("/api/account/email/confirm",{method:"POST",body:{token:s}}),changePassword:s=>i("/api/account/password",{method:"POST",body:s}),forgotPassword:s=>i("/api/account/password/forgot",{method:"POST",body:{email:s}}),resetPassword:s=>i("/api/account/password/reset",{method:"POST",body:s}),dmThreads:()=>i("/api/dm/threads"),dmUnread:()=>i("/api/dm/unread"),dmThread:(s,c)=>i(`/api/dm/thread/${encodeURIComponent(s)}${c?`?before=${encodeURIComponent(c)}`:""}`),dmOpenWith:s=>i("/api/dm/thread",{method:"POST",body:s}),dmSend:(s,c)=>i(`/api/dm/thread/${encodeURIComponent(s)}`,{method:"POST",body:{body:c}}),user:s=>i(`/api/users/${encodeURIComponent(s)}`),submitFeedback:s=>i("/api/feedback",{method:"POST",body:s}),adminFeedback:(s=0)=>i(`/api/admin/feedback?offset=${encodeURIComponent(s)}`),worldMessages:(s,c)=>i(`/api/worlds/${encodeURIComponent(s)}/messages`,{signal:c}),worldMessageHistory:(s,c="",m)=>i(`/api/worlds/${encodeURIComponent(s)}/messages/history?cursor=${encodeURIComponent(c)}`,{signal:m}),myWorldMessage:(s,c)=>i(`/api/worlds/${encodeURIComponent(s)}/messages/mine`,{signal:c}),createWorldMessage:(s,c)=>i(`/api/worlds/${encodeURIComponent(s)}/messages`,{method:"POST",body:c}),editWorldMessage:(s,c,m)=>i(`/api/worlds/${encodeURIComponent(s)}/messages/${encodeURIComponent(c)}`,{method:"PATCH",body:m}),deleteWorldMessage:(s,c)=>i(`/api/worlds/${encodeURIComponent(s)}/messages/${encodeURIComponent(c)}`,{method:"DELETE"}),adminUsers:s=>i(`/api/admin/users${s?`?q=${encodeURIComponent(s)}`:""}`),pendingAccounts:()=>i("/api/admin/pending"),adminSpaces:()=>i("/api/admin/spaces"),createSpace:s=>i("/api/admin/spaces",{method:"POST",body:s}),updateSpace:(s,c)=>i(`/api/admin/spaces/${encodeURIComponent(s)}/update`,{method:"POST",body:c}),archiveSpace:(s,c=!0)=>i(`/api/admin/spaces/${encodeURIComponent(s)}/archive`,{method:"POST",body:{archived:c}}),verifyAccount:s=>i("/api/admin/verify",{method:"POST",body:{accountId:s}}),setPostStatus:(s,c)=>i(`/api/posts/${encodeURIComponent(s)}/status`,{method:"POST",body:{status:c}}),notifications:()=>i("/api/notifications"),markRead:s=>i("/api/notifications/read",{method:"POST",body:{ids:s}}),search:s=>i(`/api/search?q=${encodeURIComponent(s)}`)}}function re(e){let a=Number(e)||0;if(!a)return"";let n=Date.now()-a;if(n<6e4)return"\u521A\u521A";if(n<36e5)return`${Math.floor(n/6e4)} \u5206\u949F\u524D`;if(n<864e5)return`${Math.floor(n/36e5)} \u5C0F\u65F6\u524D`;if(n<7*864e5)return`${Math.floor(n/864e5)} \u5929\u524D`;let o=new Date(a);return`${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`}function oe(e){let a=e?.avatarColor;if(a)return{background:`linear-gradient(135deg, ${a}, ${e?.avatarColorTo||a})`}}function ne(e){return(typeof e?.avatarText=="string"?e.avatarText.trim():"")||et(e?.displayName||e?.handle)}function et(e){let a=String(e||"?").trim();if(!a)return"?";let n=[...a];return n.length>1&&/[\u4e00-\u9fa5]/.test(n[0])?n.slice(-2).join(""):n[0].toUpperCase()}var T=X(require("react"),1);var se=X(require("react"),1),Re=[{key:"diffusion",label:"\u6269\u6563",edition:"DIFFUSION"},{key:"connection",label:"\u8FDE\u63A5",edition:"CONNECTION"},{key:"resonance",label:"\u5171\u632F",edition:"RESONANCE"}];function at({motif:e}){return e==="connection"?se.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},se.default.createElement("rect",{x:"652",y:"-130",width:"390",height:"390",rx:"58",transform:"rotate(-24 847 65)",fill:"#E2F5FF",fillOpacity:".16"}),se.default.createElement("rect",{x:"790",y:"120",width:"326",height:"326",rx:"52",transform:"rotate(19 953 283)",fill:"#E2F5FF",fillOpacity:".13"}),se.default.createElement("rect",{x:"570",y:"170",width:"230",height:"230",rx:"38",transform:"rotate(19 685 285)",fill:"#34298A",fillOpacity:".08"})):e==="resonance"?se.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},se.default.createElement("rect",{x:"500",y:"-40",width:"720",height:"230",rx:"115",transform:"rotate(-28 860 75)",fill:"#FFF4D9",fillOpacity:".16"}),se.default.createElement("rect",{x:"650",y:"165",width:"690",height:"190",rx:"95",transform:"rotate(-28 995 260)",fill:"#FFF4D9",fillOpacity:".14"}),se.default.createElement("circle",{cx:"1130",cy:"105",r:"220",fill:"#AC5B25",fillOpacity:".06"})):e==="diffusion"?se.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},se.default.createElement("circle",{cx:"948",cy:"85",r:"270",fill:"#FFF0F5",fillOpacity:".14"}),se.default.createElement("circle",{cx:"732",cy:"244",r:"190",fill:"#FFF0F5",fillOpacity:".12"}),se.default.createElement("circle",{cx:"1060",cy:"320",r:"240",fill:"#9E2367",fillOpacity:".08"})):null}function $e({space:e,showBadge:a=!0,className:n=""}){return se.default.createElement("span",{className:`acv-space-cover ${n}`.trim(),style:{"--accent":e.accent,"--accent-to":e.accentTo}},se.default.createElement(at,{motif:e.motif}),a&&se.default.createElement("span",{className:"acv-space-badge"},`${e.postCount??0} \u4E2A\u5E16\u5B50`),se.default.createElement("span",{className:"acv-space-enter"},"\u8FDB\u5165\u8BA8\u8BBA \u2192"))}var W=X(require("react"),1),ra=X(Ve(),1);var rt=236,sa=190;function it(e){let a=(window.innerWidth||1024)-rt-10;return Math.max(10,Math.min(e,a))}function R({api:e,me:a,handle:n,children:o,onDm:r,disabled:t=!1,className:i=""}){let[s,c]=W.default.useState(!1),[m,u]=W.default.useState(null),[p,d]=W.default.useState(null),[l,b]=W.default.useState(!1),h=W.default.useRef(null),C=W.default.useRef(null),L=W.default.useRef(null),P=W.default.useRef(0),_=W.default.useCallback(()=>{n&&(b(!1),e.user(n).then(g=>{d(g.user),P.current=Date.now()}).catch(()=>{d(null),b(!0)}))},[e,n]),E=()=>{let g=h.current?.getBoundingClientRect();if(!g)return;let Y=g.bottom+8+sa>(window.innerHeight||768)?Math.max(10,g.top-8-sa):g.bottom+8;u({left:it(g.left),top:Y})},z=()=>{t||(clearTimeout(C.current),L.current=setTimeout(()=>{E(),c(!0),(!p||Date.now()-P.current>3e4)&&_()},140))},B=()=>{clearTimeout(L.current),C.current=setTimeout(()=>c(!1),160)};W.default.useEffect(()=>{if(!s)return;let g=()=>c(!1);return window.addEventListener("scroll",g,!0),window.addEventListener("resize",g),()=>{window.removeEventListener("scroll",g,!0),window.removeEventListener("resize",g)}},[s]),W.default.useEffect(()=>{t&&c(!1)},[t]),W.default.useEffect(()=>()=>{clearTimeout(C.current),clearTimeout(L.current)},[]);let q=!!(a&&n&&a.handle?.toLowerCase()===String(n).toLowerCase()),U=!!p?.allowDm&&!q,V=s&&m&&typeof document<"u"?(0,ra.createPortal)(W.default.createElement("span",{className:"acv-usercard acv-usercard--fixed",style:{left:m.left,top:m.top},role:"dialog","aria-label":`${p?.displayName||n} \u7684\u8D44\u6599\u5361`,onClick:g=>g.stopPropagation(),onMouseEnter:()=>clearTimeout(C.current),onMouseLeave:B},W.default.createElement("span",{className:"acv-usercard-head"},W.default.createElement("span",{className:"acv-avatar",style:oe(p)},ne(p||{handle:n})),W.default.createElement("span",{className:"acv-usercard-id"},W.default.createElement("span",{className:"acv-usercard-name"},p?.displayName||n),W.default.createElement("span",{className:"acv-usercard-handle"},"@",p?.handle||n)),p?.role==="admin"&&W.default.createElement("span",{className:"acv-chip"},"\u7BA1\u7406\u5458")),p?.bio&&W.default.createElement("span",{className:"acv-usercard-bio"},p.bio),W.default.createElement("span",{className:"acv-usercard-foot"},!p&&!l&&W.default.createElement("span",{className:"acv-usercard-bio"},"\u52A0\u8F7D\u4E2D\u2026"),!p&&l&&W.default.createElement("span",{className:"acv-usercard-bio"},"\u8D44\u6599\u52A0\u8F7D\u5931\u8D25"),p&&U&&!a&&W.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:g=>{g.stopPropagation(),c(!1),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55\u540E\u53D1\u79C1\u4FE1"),p&&U&&a&&W.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:g=>{g.stopPropagation(),c(!1),r?.(p)}},"\u53D1\u79C1\u4FE1"),p&&!U&&!q&&W.default.createElement("span",{className:"acv-usercard-bio"},"\u5BF9\u65B9\u672A\u5F00\u653E\u79C1\u4FE1"),q&&W.default.createElement("span",{className:"acv-usercard-bio"},"\u8FD9\u662F\u4F60\u81EA\u5DF1"))),document.body):null;return W.default.createElement("span",{ref:h,className:`acv-userchip ${i}`.trim(),onMouseEnter:z,onMouseLeave:B},o,V)}var Ke=X(require("react"),1);var ia="data:image/webp;base64,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";var la="data:image/webp;base64,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";function ca({size:e=48}){return Ke.default.createElement("img",{className:"acv-home-mascot",src:ia,alt:"","aria-hidden":"true",decoding:"async",draggable:"false",width:e,height:e,style:{width:e,height:e}})}function ye({size:e=20,className:a=""}){return Ke.default.createElement("img",{className:`acv-brand-mark ${a}`.trim(),src:la,alt:"","aria-hidden":"true",decoding:"async",draggable:"false",width:e,height:e,style:{width:e,height:e}})}function We({space:e,onOpen:a,updateOnCover:n=!1}){return T.default.createElement("button",{type:"button",className:"acv-space-card",onClick:()=>a(e.slug),style:{"--accent":e.accent,"--accent-to":e.accentTo}},T.default.createElement($e,{space:e}),T.default.createElement("span",{className:"acv-space-body"},T.default.createElement("span",{className:"acv-space-title"},e.title),T.default.createElement("span",{className:"acv-space-sub"},e.subtitle),T.default.createElement("span",{className:"acv-space-meta"},T.default.createElement("span",{className:n?"acv-space-updated--cover":void 0},e.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${re(e.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u5E16"),!n&&T.default.createElement("span",{className:"acv-dot"}),T.default.createElement("span",{className:"acv-space-desc"},e.description||""))))}var dt=[{key:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{key:"members",label:"\u6D3B\u8DC3\u6210\u5458"}];function da({api:e,me:a,initialData:n=null,onOpenSpace:o,onOpenPost:r,onDm:t}){let[i,s]=T.default.useState(n),[c,m]=T.default.useState(""),[u,p]=T.default.useState("recent"),d=T.default.useCallback(()=>{e.home().then(s).catch(l=>m(l.message))},[e]);return T.default.useEffect(()=>{n||d()},[d,a]),c?T.default.createElement("div",{className:"acv-loading"},c):i?T.default.createElement("div",{className:"acv-main"},T.default.createElement("div",{className:"acv-col"},T.default.createElement("div",{className:"acv-section-head acv-section-head--brand"},T.default.createElement(ca,{size:64}),T.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u677F\u5757"),T.default.createElement("span",{className:"acv-section-note"},"\u70B9\u5F00\u4E00\u4E2A\u677F\u5757\u8FDB\u5165\u8BA8\u8BBA\u533A")),i.spaces.map(l=>T.default.createElement(We,{key:l.id,space:l,onOpen:o,updateOnCover:!0}))),T.default.createElement("div",{className:"acv-col"},T.default.createElement("div",{className:"acv-panel acv-feed"},T.default.createElement("div",{className:"acv-feed-head"},T.default.createElement("div",{className:"acv-feed-tabs",role:"tablist","aria-label":"\u793E\u533A\u52A8\u6001"},dt.map(l=>T.default.createElement("button",{key:l.key,type:"button",role:"tab",id:`acv-feed-tab-${l.key}`,"aria-selected":u===l.key,"aria-controls":`acv-feed-panel-${l.key}`,className:u===l.key?"acv-feed-tab is-active":"acv-feed-tab",onClick:()=>p(l.key)},l.label))),T.default.createElement("button",{type:"button",className:"acv-link acv-feed-refresh",onClick:d,"aria-label":"\u5237\u65B0",title:"\u5237\u65B0"},T.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},T.default.createElement("path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8m0-5v5h-5"}),T.default.createElement("path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16m5 0H3v5"})))),T.default.createElement("div",{className:"acv-feed-body",role:"tabpanel",id:`acv-feed-panel-${u}`,"aria-labelledby":`acv-feed-tab-${u}`},u==="recent"?i.recent.length===0?T.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u5E16\u5B50"):i.recent.map(l=>T.default.createElement("button",{key:l.id,type:"button",className:"acv-recent-item",onClick:()=>r(l.id)},T.default.createElement(R,{api:e,me:a,handle:l.author.handle,onDm:t},T.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:oe(l.author)},ne(l.author))),T.default.createElement("span",{className:"acv-recent-main"},T.default.createElement("span",{className:"acv-recent-title"},l.title),T.default.createElement("span",{className:"acv-recent-meta"},l.spaceTitle," \xB7"," ",T.default.createElement(R,{api:e,me:a,handle:l.author.handle,onDm:t},T.default.createElement("span",null,l.author.displayName))," ","\xB7 ",re(l.lastActivityAt)," \xB7 ",l.commentCount," \u6761\u8BC4\u8BBA")))):(i.members||[]).length===0?T.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8FC7\u5E16"):(i.members||[]).map(l=>T.default.createElement("div",{key:l.id,className:"acv-member"},T.default.createElement(R,{api:e,me:a,handle:l.handle,onDm:t},T.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:oe(l)},ne(l))),T.default.createElement("span",{className:"acv-member-main"},T.default.createElement(R,{api:e,me:a,handle:l.handle,onDm:t},T.default.createElement("span",{className:"acv-member-name"},l.displayName)),T.default.createElement(R,{api:e,me:a,handle:l.handle,onDm:t},T.default.createElement("span",{className:"acv-member-meta"},"@",l.handle))),T.default.createElement("span",{className:"acv-chip"},l.postCount," \u5E16"))))))):T.default.createElement("div",{className:"acv-main"},T.default.createElement("div",{className:"acv-col"},T.default.createElement("div",{className:"acv-skeleton"}),T.default.createElement("div",{className:"acv-skeleton"}),T.default.createElement("div",{className:"acv-skeleton"})),T.default.createElement("div",{className:"acv-col"},T.default.createElement("div",{className:"acv-skeleton",style:{height:820}})))}var M=X(require("react"),1);var ee=X(require("react"),1);var Q=X(require("react"),1);var pe=X(require("react"),1);var we=[{id:"dolphin-1-01",label:"\u5F00\u5FC3\u6325\u624B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-01.png"},{id:"dolphin-1-02",label:"\u6015\u51B7",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_56.png"},{id:"dolphin-1-03",label:"\u5BB3\u7F9E\u6342\u5634",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-03.png"},{id:"dolphin-1-04",label:"\u7591\u60D1",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_13.png"},{id:"dolphin-1-05",label:"\u62B1\u6795\u7761\u89C9",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-05.png"},{id:"dolphin-1-06",label:"\u751F\u6C14",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_40_52.png"},{id:"dolphin-1-07",label:"\u63A2\u9669",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_48.png"},{id:"dolphin-1-08",label:"\u753B\u753B",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-1-08.png"},{id:"dolphin-1-09",label:"\u8BFB\u4E66\u5B66\u4E60",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-1-09.png"},{id:"dolphin-1-10",label:"\u6E38\u6CF3",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-1-10.png"},{id:"dolphin-1-11",label:"\u5403\u51B0\u6DC7\u6DCB",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-1-11.png"},{id:"dolphin-1-12",label:"\u60CA\u8BB6",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-12.png"},{id:"dolphin-2-01",label:"\u533B\u751F",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-01.png"},{id:"dolphin-2-02",label:"\u53A8\u5E08",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-02.png"},{id:"dolphin-2-03",label:"\u5F39\u5409\u4ED6",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-03.png"},{id:"dolphin-2-04",label:"\u4FA6\u63A2",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_44.png"},{id:"dolphin-2-05",label:"\u6444\u5F71",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-05.png"},{id:"dolphin-2-06",label:"\u8DD1\u6B65",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_40.png"},{id:"dolphin-2-07",label:"\u6C34\u624B",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_36.png"},{id:"dolphin-2-08",label:"\u9B54\u672F\u5E08",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-08.png"},{id:"dolphin-2-09",label:"\u56ED\u827A",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-09.png"},{id:"dolphin-2-10",label:"\u6253\u6E38\u620F",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_27.png"},{id:"dolphin-2-11",label:"\u505A\u5B9E\u9A8C",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_31.png"},{id:"dolphin-2-12",label:"\u4E0A\u73ED",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-12.png"},{id:"dolphin-3-01",label:"\u5F00\u5FC3\u8DF3\u8DC3",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-01.png"},{id:"dolphin-3-02",label:"\u5BB3\u7F9E",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-02.png"},{id:"dolphin-3-03",label:"\u601D\u8003",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-03.png"},{id:"dolphin-3-04",label:"\u53D1\u706B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-04.png"},{id:"dolphin-3-05",label:"\u56F0\u4E86",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-05.png"},{id:"dolphin-3-06",label:"\u5927\u54ED",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-06.png"},{id:"dolphin-3-07",label:"\u56FD\u738B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-07.png"},{id:"dolphin-3-08",label:"\u5FC3\u52A8",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-08.png"},{id:"dolphin-3-09",label:"\u5413\u5230\u4E86",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-09.png"},{id:"dolphin-3-10",label:"\u90C1\u95F7",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-10.png"},{id:"dolphin-3-11",label:"\u8BA4\u771F\u89C2\u5BDF",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-11.png"},{id:"dolphin-3-12",label:"\u8138\u7EA2",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-12.png"},{id:"dolphin-4-01",label:"\u5EA6\u5047",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-01.png"},{id:"dolphin-4-02",label:"\u51B2\u6D6A",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-02.png"},{id:"dolphin-4-03",label:"\u9732\u8425",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-03.png"},{id:"dolphin-4-04",label:"\u6C99\u53D1\u9605\u8BFB",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-04.png"},{id:"dolphin-4-05",label:"\u559D\u5496\u5561",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-05.png"},{id:"dolphin-4-06",label:"\u5F92\u6B65",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-06.png"},{id:"dolphin-4-07",label:"\u770B\u5730\u56FE",category:"\u751F\u6D3B\u51FA\u6E38",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_23.png"},{id:"dolphin-4-08",label:"\u8D2D\u7269",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-08.png"},{id:"dolphin-4-09",label:"\u5403\u7206\u7C73\u82B1",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-09.png"},{id:"dolphin-4-10",label:"\u81EA\u62CD",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-10.png"},{id:"dolphin-4-11",label:"\u51AC\u65E5\u4FDD\u6696",category:"\u751F\u6D3B\u51FA\u6E38",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_19.png"},{id:"dolphin-4-12",label:"\u665A\u5B89",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-12.png"}].map(e=>({...e,path:`/emoji/v1/${e.id}.webp`,token:`:acv-${e.id}:`})),pt=new Map(we.map(e=>[e.id,e]));function ke(e){let a=String(e||""),n=[],o=0;for(let r of a.matchAll(/:acv-(dolphin-[1-4]-\d{2}):/g)){let t=pt.get(r[1]);t&&(r.index>o&&n.push(a.slice(o,r.index)),n.push(t),o=r.index+r[0].length)}return o<a.length&&n.push(a.slice(o)),n}var be=X(require("react"),1);var Me=be.default.createContext(null);function Ge({emoji:e,api:a}){let n=be.default.useContext(Me),[o,r]=be.default.useState(!1);return o?be.default.createElement("span",{title:e.label},"[",e.label,"]"):be.default.createElement("img",{className:"acv-emoji",src:(a||n)?.assetUrl(e.path)||e.path,alt:`[${e.label}]`,title:e.label,width:"64",height:"64",loading:"lazy",decoding:"async",onError:()=>r(!0)})}function he({text:e,api:a}){let n=be.default.useContext(Me);return!a&&!n?e:ke(e).map((o,r)=>typeof o=="string"?o:be.default.createElement(Ge,{key:r,emoji:o,api:a}))}function pa({api:e,onSelect:a,onClose:n,disabled:o,id:r}){let[t,i]=pe.default.useState("");return pe.default.createElement("div",{className:"acv-emoji-picker",id:r,role:"dialog","aria-label":"\u6D77\u8C5A\u8868\u60C5"},pe.default.createElement("div",{className:"acv-emoji-picker-head"},pe.default.createElement("input",{className:"acv-input",autoFocus:!0,value:t,placeholder:"\u641C\u7D22\u8868\u60C5\u540D\u79F0","aria-label":"\u641C\u7D22\u8868\u60C5\u540D\u79F0",onChange:s=>i(s.target.value)}),pe.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n,"aria-label":"\u5173\u95ED\u8868\u60C5\u9762\u677F"},"\xD7")),pe.default.createElement("div",{className:"acv-emoji-picker-body"},["\u8868\u60C5\u5FC3\u60C5","\u804C\u4E1A\u7231\u597D","\u751F\u6D3B\u51FA\u6E38"].map(s=>{let c=we.filter(m=>m.category===s&&m.label.includes(t.trim()));return c.length>0&&pe.default.createElement("section",{key:s,"aria-label":s},pe.default.createElement("h4",null,s),pe.default.createElement("div",{className:"acv-emoji-grid"},c.map(m=>pe.default.createElement("button",{key:m.id,type:"button",className:"acv-emoji-choice",disabled:o,title:m.label,"aria-label":m.label,onClick:()=>a(m)},pe.default.createElement(Ge,{emoji:m,api:e})))))}),!we.some(s=>s.label.includes(t.trim()))&&pe.default.createElement("p",null,"\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u8868\u60C5")))}var ua=new Map(we.map(e=>[e.id,e]));function ma(e,a=!1){if(!a)return ke(e);let n=[],o=0;for(let r of e.matchAll(/```[\s\S]*?(?:```|$)|`[^`\n]+`|\[[^\]\n]+\]\([^)\s]+\)/g))n.push(...ke(e.slice(o,r.index)),r[0]),o=r.index+r[0].length;return[...n,...ke(e.slice(o))]}function va(e,a,n,o=!1){let r=e.ownerDocument,t=r.createDocumentFragment();for(let i of ma(a,o))if(typeof i=="string")i.split(`
`).forEach((s,c)=>{c&&t.append(r.createElement("br")),s&&t.append(r.createTextNode(s))});else{let s=r.createElement("span"),c=r.createElement("img");s.dataset.emoji=i.id,s.contentEditable="false",s.className="acv-editor-emoji",s.setAttribute("aria-label",i.label),c.src=n(i.path),c.alt=`[${i.label}]`,c.title=i.label,c.draggable=!1,c.onerror=()=>{s.replaceChildren(r.createTextNode(`[${i.label}]`))},s.append(c),t.append(s)}if(a.endsWith(`
`)){let i=r.createElement("br");i.dataset.editorEnd="",t.append(i)}e.replaceChildren(t)}function ze(e){function a(n){if(n.nodeType===3)return n.nodeValue;if(n.nodeType!==1&&n.nodeType!==11||n.dataset?.editorEnd!==void 0)return"";let o=ua.get(n.dataset?.emoji);return o?o.token:n.nodeName==="BR"?`
`:Array.from(n.childNodes).map((r,t)=>(t>0&&/^(DIV|P)$/.test(r.nodeName)?`
`:"")+a(r)).join("")}return a(e)}function Ne(e){if(!e)return null;let a=e.ownerDocument.getSelection();if(!a?.rangeCount)return null;let n=a.getRangeAt(0);if(!e.contains(n.startContainer)||!e.contains(n.endContainer))return null;function o(r,t){let i=e.ownerDocument.createRange();return i.selectNodeContents(e),i.setEnd(r,t),ze(i.cloneContents()).length}return[o(n.startContainer,n.startOffset),o(n.endContainer,n.endOffset)]}function fa(e,a,n=a){let o=e.ownerDocument,r=o.createRange();function t(s){let c=0;for(let m of e.childNodes){let u=m.nodeType===3?m.nodeValue.length:m.dataset?.editorEnd!==void 0?0:ua.get(m.dataset?.emoji)?.token.length??(m.nodeName==="BR"?1:ze(m).length);if(s<=c+u){if(m.nodeType===3)return[m,Math.max(0,s-c)];let p=Array.prototype.indexOf.call(e.childNodes,m);return[e,p+(s>c?1:0)]}c+=u}return[e,e.childNodes.length]}r.setStart(...t(a)),r.setEnd(...t(n));let i=o.getSelection();i.removeAllRanges(),i.addRange(r)}function ga(e,a,n,o,r,t=!1,i=null){let s=0,c=ma(e,t).map(u=>{let p=typeof u=="string"?u.length:u.token.length,d={start:s,end:s+p,atomic:typeof u!="string"};return s+=p,d});for(let u of c.filter(p=>p.atomic))a>u.start&&a<u.end&&(a=u.start),n>u.start&&n<u.end&&(n=u.end);if(i&&a===n){let u=c.find(p=>p.atomic&&(i==="backward"?p.end===a:p.start===n));if(u)a=u.start,n=u.end;else{let p=[...new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(e)].map(d=>d.index);i==="backward"?a=p.filter(d=>d<a).at(-1)??0:n=p.find(d=>d>n)??e.length}}let m=e.slice(0,a)+o+e.slice(n);return m.length<=r?{value:m,start:a+o.length,end:a+o.length}:null}function Ue({api:e,value:a,onChange:n,maxLength:o,disabled:r=!1,placeholder:t,tall:i=!1,markdown:s=!1}){let c=Q.default.useRef(null),m=Q.default.useRef(null),u=Q.default.useRef(null),p=Q.default.useRef(a),d=Q.default.useRef([a.length,a.length]),l=Q.default.useRef(!1),b=Q.default.useRef([{value:a,start:a.length,end:a.length}]),h=Q.default.useRef(0),[C,L]=Q.default.useState(!1),[P,_]=Q.default.useState(""),E=Q.default.useId(),z=Q.default.useCallback(()=>{L(!1),u.current?.focus()},[]);function B(v,x=!0){p.current=v.value,d.current=[v.start,v.end],va(c.current,v.value,e.assetUrl,s),x&&(c.current.focus(),fa(c.current,v.start,v.end))}Q.default.useLayoutEffect(()=>{l.current||(ze(c.current)!==a&&B({value:a,start:a.length,end:a.length},!1),(p.current!==a||b.current[h.current].value!==a)&&(p.current=a,b.current=[{value:a,start:a.length,end:a.length}],h.current=0))},[a,e,s]),Q.default.useEffect(()=>{let v=()=>{let x=Ne(c.current);x&&(d.current=x)};return document.addEventListener("selectionchange",v),()=>document.removeEventListener("selectionchange",v)},[]),Q.default.useEffect(()=>{if(!C)return;let v=H=>{m.current?.contains(H.target)||L(!1)},x=H=>{H.key==="Escape"&&(H.preventDefault(),H.stopImmediatePropagation(),z())};return document.addEventListener("pointerdown",v),window.addEventListener("keydown",x,!0),()=>{document.removeEventListener("pointerdown",v),window.removeEventListener("keydown",x,!0)}},[C,z]),Q.default.useEffect(()=>{r&&L(!1)},[r]);function q(v){if(!v){_(`\u6700\u591A ${o} \u4E2A\u5B57\u7B26`),B(b.current[h.current]);return}let x=b.current[h.current];x.start=d.current[0],x.end=d.current[1],v.value!==x.value&&(b.current=[...b.current.slice(0,h.current+1),v].slice(-200),h.current=b.current.length-1),B(v),n(v.value),_("")}function U(v,x=null){if(r||l.current)return;let H=Ne(c.current)||d.current;d.current=H,q(ga(p.current,...H,v,o,s,x))}function V(v=!1){if(r||l.current)return;let x=h.current+(v?1:-1);if(x<0||x>=b.current.length)return;h.current=x;let H=b.current[x];B(H),n(H.value),_("")}function g(){if(r||l.current)return;let v=ze(c.current),x=Ne(c.current)||[v.length,v.length];q(v.length<=o?{value:v,start:x[0],end:x[1]}:null)}function Y(v){if(r){v.preventDefault();return}if(l.current||v.isComposing)return;let x=v.inputType;x==="historyUndo"||x==="historyRedo"?(v.preventDefault(),V(x==="historyRedo")):x==="insertParagraph"||x==="insertLineBreak"?(v.preventDefault(),U(`
`)):(x==="deleteContentBackward"||x==="deleteContentForward")&&(v.preventDefault(),U("",x.endsWith("Backward")?"backward":"forward"))}Q.default.useEffect(()=>{let v=c.current;return v.addEventListener("beforeinput",Y),()=>v.removeEventListener("beforeinput",Y)});function j(v){v.isComposing||v.nativeEvent.isComposing||l.current||((v.ctrlKey||v.metaKey)&&["z","y"].includes(v.key.toLowerCase())?(v.preventDefault(),V(v.shiftKey||v.key.toLowerCase()==="y")):v.key==="Enter"?(v.preventDefault(),U(`
`)):["Backspace","Delete"].includes(v.key)&&!v.ctrlKey&&!v.metaKey&&!v.altKey&&(v.preventDefault(),U("",v.key==="Backspace"?"backward":"forward")))}function y(v,x=!1){let H=Ne(c.current);!H||H[0]===H[1]||(v.preventDefault(),v.clipboardData.setData("text/plain",p.current.slice(...H)),x&&U(""))}return Q.default.createElement("div",{className:"acv-emoji-editor",ref:m},Q.default.createElement("div",{ref:c,role:"textbox","aria-multiline":"true","aria-label":t,"aria-disabled":r,"data-placeholder":t,contentEditable:!r,suppressContentEditableWarning:!0,spellCheck:!0,className:`acv-textarea acv-visual-editor${i?" acv-textarea--tall":""}`,onInput:g,onKeyDown:j,onCompositionStart:()=>{l.current=!0},onCompositionEnd:()=>{l.current=!1,g()},onPaste:v=>{v.preventDefault(),U(v.clipboardData.getData("text/plain").replace(/\r\n?/g,`
`))},onCopy:v=>y(v),onCut:v=>y(v,!0),onDrop:v=>v.preventDefault()}),Q.default.createElement("div",{className:"acv-emoji-toolbar"},Q.default.createElement("button",{ref:u,type:"button",className:"acv-btn ghost","aria-expanded":C,"aria-controls":E,disabled:r,onMouseDown:()=>{let v=Ne(c.current);v&&(d.current=v)},onClick:()=>{l.current||L(!C)}},"\u263A \u8868\u60C5"),Q.default.createElement("span",null,a.length," / ",o)),C&&Q.default.createElement(pa,{id:E,api:e,onSelect:v=>U(v.token),onClose:z,disabled:r}),P&&Q.default.createElement("p",{className:"acv-error",role:"alert"},P))}function ba({space:e,api:a,onClose:n,onCreated:o,notify:r}){let[t,i]=ee.default.useState(""),[s,c]=ee.default.useState(""),[m,u]=ee.default.useState(!1),[p,d]=ee.default.useState("");ee.default.useEffect(()=>{let b=h=>{h.key==="Escape"&&n()};return window.addEventListener("keydown",b),()=>window.removeEventListener("keydown",b)},[n]);async function l(){u(!0),d("");try{let b=await a.createPost({spaceId:e.id,title:t,body:s});r("\u5E16\u5B50\u53D1\u51FA\u53BB\u4E86"),o(b.post)}catch(b){d(b.message)}finally{u(!1)}}return ee.default.createElement("div",{className:"acv-overlay",onClick:n},ee.default.createElement("div",{className:"acv-modal acv-modal--wide",onClick:b=>b.stopPropagation()},ee.default.createElement("h3",{className:"acv-modal-title"},ee.default.createElement(ye,{size:24}),ee.default.createElement("span",null,"\u5728\u300C",e.title,"\u300D\u53D1\u5E16")),ee.default.createElement("p",{className:"acv-modal-sub"},"\u6807\u9898\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u6B63\u6587\u5C55\u5F00\u8BB2\u3002\u53D1\u5B8C\u4F1A\u76F4\u63A5\u8FDB\u8BE6\u60C5\u9875\u3002"),p&&ee.default.createElement("div",{className:"acv-error"},p),ee.default.createElement("div",{className:"acv-field"},ee.default.createElement("label",null,"\u6807\u9898"),ee.default.createElement("input",{className:"acv-input",autoFocus:!0,value:t,maxLength:160,placeholder:"\u60F3\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",onChange:b=>i(b.target.value)})),ee.default.createElement("div",{className:"acv-field"},ee.default.createElement("label",null,"\u6B63\u6587"),ee.default.createElement(Ue,{api:a,value:s,onChange:c,maxLength:2e4,disabled:m,placeholder:"\u5C55\u5F00\u8BF4\u8BF4\uFF0C\u652F\u6301\u6362\u884C",tall:!0,markdown:!0})),ee.default.createElement("div",{className:"acv-row"},ee.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n},"\u53D6\u6D88"),ee.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:m||!t.trim()||!s.trim(),onClick:l},m?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u5E03"))))}function ha({api:e,slug:a,me:n,onBack:o,onOpenPost:r,onAuth:t,onDm:i,notify:s}){let[c,m]=M.default.useState(null),[u,p]=M.default.useState(""),[d,l]=M.default.useState(!1),b=M.default.useCallback(()=>{e.space(a).then(P=>{m(P),p("")}).catch(P=>p(P.message))},[e,a]);if(M.default.useEffect(()=>{b()},[b]),u)return M.default.createElement("div",{style:{paddingTop:22}},M.default.createElement("button",{type:"button",className:"acv-back",onClick:o},"\u2190 \u8FD4\u56DE\u9996\u9875"),M.default.createElement("div",{className:"acv-loading"},u));if(!c)return M.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u677F\u5757\u2026");let{space:h,posts:C}=c,L=!!n?.emailVerified;return M.default.createElement("div",{style:{paddingTop:20,display:"flex",flexDirection:"column",gap:16}},M.default.createElement("div",null,M.default.createElement("button",{type:"button",className:"acv-back",onClick:o},"\u2190 \u8FD4\u56DE\u9996\u9875")),M.default.createElement("div",{className:"acv-board-head",style:{"--accent":h.accent,"--accent-to":h.accentTo}},M.default.createElement("h2",{className:"acv-board-title"},h.title),M.default.createElement("p",{className:"acv-board-sub"},h.description||h.subtitle),M.default.createElement("div",{className:"acv-board-actions"},M.default.createElement("button",{type:"button",className:"acv-btn",style:{background:"#fff",color:"#16161d"},onClick:()=>{if(!n)return t();if(!L)return s("\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16");l(!0)}},"\u53D1\u5E16"),M.default.createElement("span",{className:"acv-chip",style:{background:"rgba(255,255,255,.22)",color:"#fff"}},h.postCount," \u4E2A\u5E16\u5B50"))),!n&&M.default.createElement("div",{className:"acv-notice"},"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u9700\u8981\u3002",M.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:t},"\u767B\u5F55")),n&&!n.emailVerified&&M.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002\u9A8C\u8BC1\u90AE\u4EF6\u5728\u6536\u4EF6\u7BB1\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u5934\u50CF\u83DC\u5355\u91CC\u91CD\u53D1\u3002"),M.default.createElement("div",{className:"acv-board-grid"},M.default.createElement("div",{className:"acv-col"},M.default.createElement("div",{className:"acv-panel",style:{padding:"8px 18px"}},C.length===0&&M.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5E16\u5B50\uFF0C\u6765\u53D1\u7B2C\u4E00\u6761\u3002"),C.map(P=>M.default.createElement("button",{key:P.id,type:"button",className:"acv-post-row",onClick:()=>r(P.id)},M.default.createElement("span",{className:"acv-post-title"},P.title),M.default.createElement("span",{className:"acv-post-excerpt"},P.excerpt),M.default.createElement("span",{className:"acv-post-meta"},M.default.createElement(R,{api:e,me:n,handle:P.author.handle,onDm:i},M.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:oe(P.author)},ne(P.author)),P.author.displayName),M.default.createElement("span",{className:"acv-dot"}),re(P.lastActivityAt),M.default.createElement("span",{className:"acv-dot"}),P.commentCount," \u6761\u8BC4\u8BBA"))))),M.default.createElement("aside",{className:"acv-col"},M.default.createElement("div",{className:"acv-panel"},M.default.createElement("div",{className:"acv-section-head"},M.default.createElement("h2",{className:"acv-section-title"},"\u677F\u5757\u8BF4\u660E")),M.default.createElement("p",{className:"acv-space-sub"},h.description||h.subtitle||"\u8FD8\u6CA1\u6709\u5199\u4ECB\u7ECD\u3002"),M.default.createElement("div",{className:"acv-stats",style:{marginTop:14}},M.default.createElement("div",{className:"acv-stat"},M.default.createElement("div",{className:"acv-stat-value"},h.postCount),M.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),M.default.createElement("div",{className:"acv-stat"},M.default.createElement("div",{className:"acv-stat-value"},C.length),M.default.createElement("div",{className:"acv-stat-label"},"\u6761\u5728\u672C\u9875"))),M.default.createElement("p",{className:"acv-space-sub",style:{marginTop:14}},n?.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u4E0A\u9762\u7684\u300C\u53D1\u5E16\u300D\u3002":n?"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u3001\u8BC4\u8BBA\u624D\u9700\u8981\u3002")))),d&&M.default.createElement(ba,{api:e,space:h,notify:s,onClose:()=>l(!1),onCreated:P=>{l(!1),b(),r(P.id)}}))}var S=X(require("react"),1);var K=X(require("react"),1);var xa=/(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(~~[^~\n]+~~)|(\[[^\]\n]+\]\([^)\s]+\))/g,Te=/^\s*([-*+]|\d+[.)])\s+/,ya=/^(#{1,6})\s+(.*)$/,ut=/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/;function De(e,a){let n=[],o=0,r;for(xa.lastIndex=0;(r=xa.exec(e))!==null;){r.index>o&&n.push(K.default.createElement(he,{key:`${a}-text-${o}`,text:e.slice(o,r.index)}));let t=r[0],i=`${a}-${r.index}`;if(t.startsWith("`"))n.push(K.default.createElement("code",{key:i,className:"acv-md-code"},t.slice(1,-1)));else if(t.startsWith("**"))n.push(K.default.createElement("strong",{key:i},K.default.createElement(he,{text:t.slice(2,-2)})));else if(t.startsWith("~~"))n.push(K.default.createElement("del",{key:i},K.default.createElement(he,{text:t.slice(2,-2)})));else if(t.startsWith("[")){let s=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(t),c=s?.[2]||"#",m=/^(https?:\/\/|mailto:|\/)/i.test(c);n.push(m?K.default.createElement("a",{key:i,href:c,target:"_blank",rel:"noreferrer noopener"},s[1]):K.default.createElement("span",{key:i},s?.[1]||t))}else n.push(K.default.createElement("em",{key:i},K.default.createElement(he,{text:t.slice(1,-1)})));o=r.index+t.length}return o<e.length&&n.push(K.default.createElement(he,{key:`${a}-tail`,text:e.slice(o)})),n}function wa(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(a=>a.trim())}function Pe({text:e,api:a}){let o=String(e||"").replace(/\r\n?/g,`
`).split(`
`),r=[],t=0,i=0;for(;t<o.length;){let c=o[t];if(/^\s*```/.test(c)){let d=c.trim().slice(3).trim(),l=[];for(t+=1;t<o.length&&!/^\s*```/.test(o[t]);)l.push(o[t]),t+=1;t+=1,r.push(K.default.createElement("pre",{key:`b${i++}`,className:"acv-md-pre"},K.default.createElement("code",null,l.join(`
`)),d&&K.default.createElement("span",{className:"acv-md-lang"},d)));continue}if(!c.trim()){t+=1;continue}let m=ya.exec(c);if(m){let d=Math.min(m[1].length,4),l=`h${d}`;r.push(K.default.createElement(l,{key:`b${i++}`,className:`acv-md-h${d}`},De(m[2],`h${i}`))),t+=1;continue}if(/^\s*(-{3,}|\*{3,})\s*$/.test(c)){r.push(K.default.createElement("hr",{key:`b${i++}`,className:"acv-md-hr"})),t+=1;continue}if(c.includes("|")&&ut.test(o[t+1]||"")){let d=wa(c);t+=2;let l=[];for(;t<o.length&&o[t].includes("|")&&o[t].trim();)l.push(wa(o[t])),t+=1;r.push(K.default.createElement("div",{key:`b${i++}`,className:"acv-md-table-wrap"},K.default.createElement("table",{className:"acv-md-table"},K.default.createElement("thead",null,K.default.createElement("tr",null,d.map((b,h)=>K.default.createElement("th",{key:h},De(b,`th${h}`))))),K.default.createElement("tbody",null,l.map((b,h)=>K.default.createElement("tr",{key:h},d.map((C,L)=>K.default.createElement("td",{key:L},De(b[L]||"",`td${h}-${L}`)))))))));continue}if(/^\s*>\s?/.test(c)){let d=[];for(;t<o.length&&/^\s*>\s?/.test(o[t]);)d.push(o[t].replace(/^\s*>\s?/,"")),t+=1;r.push(K.default.createElement("blockquote",{key:`b${i++}`,className:"acv-md-quote"},K.default.createElement(Pe,{text:d.join(`
`)})));continue}if(Te.test(c)){let d=/^\s*\d+[.)]\s+/.test(c),l=[];for(;t<o.length&&Te.test(o[t]);)for(l.push(o[t].replace(Te,"")),t+=1;t<o.length&&o[t].trim()&&/^\s{2,}/.test(o[t])&&!Te.test(o[t]);)l[l.length-1]+=` ${o[t].trim()}`,t+=1;let b=d?"ol":"ul";r.push(K.default.createElement(b,{key:`b${i++}`,className:"acv-md-list"},l.map((h,C)=>K.default.createElement("li",{key:C},De(h,`li${C}`)))));continue}let u=[];for(;t<o.length&&o[t].trim()&&!ya.test(o[t])&&!Te.test(o[t])&&!/^\s*>/.test(o[t])&&!/^\s*```/.test(o[t])&&!/^\s*(-{3,}|\*{3,})\s*$/.test(o[t]);)u.push(o[t]),t+=1;let p=[];u.forEach((d,l)=>{l>0&&p.push(K.default.createElement("br",{key:`br${l}`})),p.push(...De(d,`p${l}`))}),r.push(K.default.createElement("p",{key:`b${i++}`,className:"acv-md-p"},p))}let s=K.default.createElement("div",{className:"acv-md"},r);return a?K.default.createElement(Me.Provider,{value:a},s):s}function ka({api:e,id:a,me:n,onBack:o,backTo:r="home",onAuth:t,onDm:i,notify:s}){let[c,m]=S.default.useState(null),[u,p]=S.default.useState(""),[d,l]=S.default.useState(""),[b,h]=S.default.useState(!1),[C,L]=S.default.useState(""),[P,_]=S.default.useState(!1),E=S.default.useCallback(()=>{e.post(a).then(g=>{m(g),p("")}).catch(g=>p(g.message))},[e,a]);S.default.useEffect(()=>{E()},[E]);async function z(){h(!0),L("");try{await e.createComment(a,{body:d}),l(""),E(),s("\u8BC4\u8BBA\u5DF2\u53D1\u5E03")}catch(g){L(g.message)}finally{h(!1)}}async function B(g){_(!0);try{await e.setPostStatus(a,g),s(g==="hidden"?"\u5E16\u5B50\u5DF2\u9690\u85CF":g==="deleted"?"\u5E16\u5B50\u5DF2\u5220\u9664":"\u5E16\u5B50\u5DF2\u6062\u590D"),g==="deleted"?o():E()}catch(Y){s(Y.message,{error:!0})}finally{_(!1)}}let q=r==="space"?"\u2190 \u8FD4\u56DE\u677F\u5757":"\u2190 \u8FD4\u56DE\u9996\u9875";if(u)return S.default.createElement("div",{style:{paddingTop:22}},S.default.createElement("button",{type:"button",className:"acv-back",onClick:o},q),S.default.createElement("div",{className:"acv-loading"},u));if(!c)return S.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u5E16\u5B50\u2026");let{post:U,comments:V}=c;return S.default.createElement("div",{className:"acv-post-wrap"},S.default.createElement("div",null,S.default.createElement("button",{type:"button",className:"acv-back",onClick:o},q)),S.default.createElement("div",{className:"acv-panel",style:{padding:"22px 24px"}},S.default.createElement("div",{className:"acv-post-meta"},S.default.createElement("span",{className:"acv-chip"},U.spaceTitle),S.default.createElement("span",{className:"acv-dot"}),re(U.createdAt),S.default.createElement("span",{className:"acv-dot"}),U.viewCount," \u6B21\u6D4F\u89C8"),S.default.createElement("h1",{className:"acv-article-title"},U.title),S.default.createElement("div",{className:"acv-article-meta"},S.default.createElement(R,{api:e,me:n,handle:U.author.handle,onDm:i},S.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:oe(U.author)},ne(U.author)),S.default.createElement("span",null,U.author.displayName)),S.default.createElement("span",{className:"acv-dot"}),S.default.createElement(R,{api:e,me:n,handle:U.author.handle,onDm:i},S.default.createElement("span",null,"@",U.author.handle)),n?.role==="admin"&&S.default.createElement("span",{className:"acv-mod-actions"},S.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:P,onClick:()=>B("hidden")},"\u9690\u85CF"),S.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:P,onClick:()=>B("deleted")},"\u5220\u9664"))),S.default.createElement("div",{className:"acv-prose acv-prose--md"},S.default.createElement(Pe,{text:U.body,api:e}))),S.default.createElement("div",{className:"acv-panel",style:{padding:"18px 24px"}},S.default.createElement("div",{className:"acv-section-head"},S.default.createElement("h2",{className:"acv-section-title"},"\u8BC4\u8BBA"),S.default.createElement("span",{className:"acv-section-note"},V.length," \u6761")),V.length===0&&S.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u8BF4\u70B9\u4EC0\u4E48\u3002"),V.map(g=>S.default.createElement("div",{key:g.id,className:"acv-comment"},S.default.createElement(R,{api:e,me:n,handle:g.author.handle,onDm:i},S.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:oe(g.author)},ne(g.author))),S.default.createElement("div",{className:"acv-comment-main"},S.default.createElement("div",{className:"acv-comment-head"},S.default.createElement(R,{api:e,me:n,handle:g.author.handle,onDm:i},S.default.createElement("span",{className:"acv-comment-author"},g.author.displayName)),S.default.createElement("span",{className:"acv-comment-time"},re(g.createdAt))),S.default.createElement("p",{className:"acv-comment-body"},S.default.createElement(he,{text:g.body,api:e}))))),S.default.createElement("div",{style:{marginTop:14}},!n&&S.default.createElement("div",{className:"acv-notice"},"\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\u3002",S.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:t},"\u767B\u5F55")),n&&!n.emailVerified&&S.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u8BC4\u8BBA\u3002"),n?.emailVerified&&S.default.createElement(S.default.Fragment,null,C&&S.default.createElement("div",{className:"acv-error"},C),S.default.createElement("div",{className:"acv-input-brand"},S.default.createElement(ye,{size:24})),S.default.createElement(Ue,{api:e,value:d,onChange:l,maxLength:8e3,disabled:b,placeholder:"\u5199\u4E00\u6761\u8BC4\u8BBA\u2026"}),S.default.createElement("div",{className:"acv-row"},S.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:b||!d.trim(),onClick:z},b?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u8868\u8BC4\u8BBA"))))))}var I=X(require("react"),1);function Na({api:e,me:a,onClose:n,onAuth:o}){let[r,t]=I.default.useState(""),[i,s]=I.default.useState(!1),[c,m]=I.default.useState(""),[u,p]=I.default.useState(!1),d=I.default.useRef(null),l=I.default.useRef(!1);I.default.useEffect(()=>{let h=document.activeElement;return d.current.showModal(),()=>h?.focus?.()},[]);async function b(h){if(h.preventDefault(),!(l.current||!r.trim())){l.current=!0,s(!0),m("");try{await e.submitFeedback({body:r.trim()}),p(!0)}catch(C){m(C.message)}finally{l.current=!1,s(!1)}}}return I.default.createElement("dialog",{ref:d,className:"acv-modal","aria-labelledby":"feedback-title",onCancel:h=>{i?h.preventDefault():n()},style:{border:0,color:"inherit",maxWidth:"calc(100vw - 32px)"}},I.default.createElement("h3",{id:"feedback-title",className:"acv-modal-title"},"\u610F\u89C1\u53CD\u9988"),u?I.default.createElement("div",{role:"status"},I.default.createElement("p",{className:"acv-modal-sub"},"\u53CD\u9988\u5DF2\u6536\u5230\uFF0C\u611F\u8C22\u4F60\u5E2E\u52A9\u793E\u533A\u53D8\u5F97\u66F4\u597D\uFF01\u7BA1\u7406\u5458\u4F1A\u53CA\u65F6\u67E5\u770B\u5E76\u8BA4\u771F\u5904\u7406\u4F60\u7684\u53CD\u9988\u3002"),I.default.createElement("button",{type:"button",className:"acv-btn primary",onClick:n,autoFocus:!0},"\u597D\u7684")):a?I.default.createElement("form",{onSubmit:b},I.default.createElement("p",{className:"acv-modal-sub"},"\u9047\u5230\u4E86\u95EE\u9898\uFF0C\u6216\u6709\u60F3\u6CD5\u60F3\u544A\u8BC9\u6211\u4EEC\uFF1F\u5185\u5BB9\u4EC5\u7BA1\u7406\u5458\u53EF\u89C1\u3002"),I.default.createElement("div",{className:"acv-field"},I.default.createElement("label",{htmlFor:"feedback-body"},"\u53CD\u9988\u5185\u5BB9"),I.default.createElement("textarea",{id:"feedback-body",className:"acv-input",rows:6,maxLength:2e3,required:!0,autoFocus:!0,disabled:i,value:r,onChange:h=>t(h.target.value),placeholder:"\u63CF\u8FF0\u9047\u5230\u7684\u95EE\u9898\u6216\u4F60\u7684\u5EFA\u8BAE\u2026",style:{resize:"vertical"}}),I.default.createElement("span",{className:"acv-section-note"},r.length," / 2000")),c&&I.default.createElement("p",{role:"alert"},c),I.default.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:12}},I.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:i,onClick:n},"\u53D6\u6D88"),I.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:i||!r.trim()},i?"\u63D0\u4EA4\u4E2D\u2026":"\u63D0\u4EA4\u53CD\u9988"))):I.default.createElement(I.default.Fragment,null,I.default.createElement("p",{className:"acv-modal-sub"},"\u767B\u5F55\u540E\u5C31\u53EF\u4EE5\u5411\u7BA1\u7406\u5458\u63D0\u4EA4\u53CD\u9988\u3002"),I.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n},"\u5173\u95ED"),I.default.createElement("button",{type:"button",className:"acv-btn primary",onClick:o},"\u53BB\u767B\u5F55")))}function Ca({api:e}){let[a,n]=I.default.useState(0),[o,r]=I.default.useState(0),[t,i]=I.default.useState(null),[s,c]=I.default.useState("");return I.default.useEffect(()=>{let m=!0;return i(null),c(""),e.adminFeedback(a).then(u=>{m&&i(u)}).catch(u=>{m&&c(u.message)}),()=>{m=!1}},[e,a,o]),I.default.createElement("div",null,I.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>r(m=>m+1)},"\u5237\u65B0"),s?I.default.createElement("p",{role:"alert"},s):t?I.default.createElement(I.default.Fragment,null,!t.feedback.length&&I.default.createElement("p",null,"\u6682\u65E0\u53CD\u9988\u5185\u5BB9"),t.feedback.map(m=>I.default.createElement("article",{key:m.id,style:{padding:"20px 0",borderBottom:"1px solid var(--acv-line, #eee)"}},I.default.createElement("strong",null,m.author.displayName," ",I.default.createElement("span",{className:"acv-section-note"},"@",m.author.handle)),I.default.createElement("time",{className:"acv-section-note",dateTime:new Date(m.createdAt).toISOString(),style:{display:"block",marginTop:6}},new Date(m.createdAt).toLocaleString("zh-CN")),I.default.createElement("p",{style:{whiteSpace:"pre-wrap",overflowWrap:"anywhere"}},m.body))),I.default.createElement("div",{style:{display:"flex",gap:12,alignItems:"center",marginTop:16}},I.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:!a,onClick:()=>n(Math.max(0,a-t.limit))},"\u4E0A\u4E00\u9875"),I.default.createElement("span",{className:"acv-section-note"},"\u7B2C ",Math.floor(a/t.limit)+1," \u9875 \xB7 \u5171 ",t.total," \u6761"),I.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:a+t.limit>=t.total,onClick:()=>n(a+t.limit)},"\u4E0B\u4E00\u9875"))):I.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u53CD\u9988\u2026"))}var D=X(require("react"),1);var me=X(require("react"),1);function ve({className:e="",id:a,disabled:n,...o}){let r=me.default.useId(),t=a||r,[i,s]=me.default.useState(!1);return me.default.createElement("div",{className:"acv-password-input"},me.default.createElement("input",{...o,id:t,disabled:n,className:`acv-input ${e}`,type:i?"text":"password"}),me.default.createElement("button",{type:"button",className:"acv-password-toggle",disabled:n,"aria-label":i?"\u9690\u85CF\u5BC6\u7801":"\u663E\u793A\u5BC6\u7801","aria-pressed":i,"aria-controls":t,onClick:()=>s(c=>!c)},me.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},me.default.createElement("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"}),me.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),i&&me.default.createElement("path",{d:"m3 3 18 18"}))))}var mt=["login","register","forgot"];function Fe({api:e,initialMode:a="login",onClose:n,onDone:o,notify:r}){let[t,i]=D.default.useState(mt.includes(a)?a:"login"),[s,c]=D.default.useState(""),[m,u]=D.default.useState(""),[p,d]=D.default.useState(""),[l,b]=D.default.useState(""),[h,C]=D.default.useState(null),[L,P]=D.default.useState(!1),[_,E]=D.default.useState(""),[z,B]=D.default.useState(""),q=D.default.useCallback(()=>{e.captcha().then(C).catch(()=>C(null))},[e]);D.default.useEffect(()=>{t==="register"&&q()},[t,q]);function U(j){i(j),E(""),B(""),b("")}async function V(j){j.preventDefault(),P(!0),E("");try{let y=await e.login({handle:s,password:p});e.setToken(y.token),o(y.account)}catch(y){E(y.message)}finally{P(!1)}}async function g(j){j.preventDefault(),P(!0),E("");try{let y=await e.register({handle:s,email:m,password:p,captchaId:h?.id,captchaAnswer:l}),v=await e.login({handle:s,password:p});e.setToken(v.token),B(y.mail?.delivered?"\u6CE8\u518C\u6210\u529F\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\u3002\u70B9\u90AE\u4EF6\u91CC\u7684\u94FE\u63A5\u5C31\u80FD\u53D1\u5E16\u3002":"\u6CE8\u518C\u6210\u529F\u3002\u672C\u5730\u6CA1\u914D SMTP\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u7ECF\u6253\u5230\u670D\u52A1\u7AEF\u65E5\u5FD7\u91CC\u4E86\u3002"),o(v.account)}catch(y){E(y.message),q(),b("")}finally{P(!1)}}async function Y(j){j.preventDefault(),P(!0),E("");try{let y=await e.forgotPassword(m.trim());B(y?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u670D\u52A1\u5668\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${y.verifyLink}`:"\u5982\u679C\u8FD9\u4E2A\u90AE\u7BB1\u6CE8\u518C\u8FC7\uFF0C\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u5C31\u80FD\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(y){E(y.message)}finally{P(!1)}}return D.default.createElement("div",{className:"acv-overlay",onClick:n},D.default.createElement("div",{className:"acv-modal",onClick:j=>j.stopPropagation()},D.default.createElement("h3",{className:"acv-modal-title"},t==="login"?"\u767B\u5F55 Achoverse":t==="register"?"\u6CE8\u518C Achoverse":"\u5FD8\u8BB0\u5BC6\u7801"),D.default.createElement("p",{className:"acv-modal-sub"},t==="login"?"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002":t==="register"?"\u6CE8\u518C\u540E\u8981\u9A8C\u8BC1\u90AE\u7BB1\u624D\u80FD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002":"\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1\uFF0C\u6211\u4EEC\u53D1\u4E00\u5C01\u5E26\u91CD\u7F6E\u94FE\u63A5\u7684\u90AE\u4EF6\u3002"),t!=="forgot"&&D.default.createElement("div",{className:"acv-switch"},D.default.createElement("button",{type:"button",className:t==="login"?"is-active":"",onClick:()=>U("login")},"\u767B\u5F55"),D.default.createElement("button",{type:"button",className:t==="register"?"is-active":"",onClick:()=>U("register")},"\u6CE8\u518C")),_&&D.default.createElement("div",{className:"acv-error"},_),z&&D.default.createElement("div",{className:"acv-notice"},z),t==="forgot"&&D.default.createElement("form",{onSubmit:Y},D.default.createElement("div",{className:"acv-field"},D.default.createElement("label",null,"\u90AE\u7BB1"),D.default.createElement("input",{className:"acv-input",type:"email",value:m,onChange:j=>u(j.target.value),placeholder:"\u6CE8\u518C\u65F6\u7528\u7684\u90AE\u7BB1"})),D.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},D.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>U("login")},"\u8FD4\u56DE\u767B\u5F55"),D.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:L||!m.trim()},L?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u91CD\u7F6E\u90AE\u4EF6"))),t==="login"&&D.default.createElement("form",{onSubmit:V},D.default.createElement("div",{className:"acv-field"},D.default.createElement("label",{htmlFor:"login-identifier"},"\u7528\u6237\u540D\u6216\u90AE\u7BB1"),D.default.createElement("input",{id:"login-identifier",className:"acv-input",value:s,autoComplete:"username",placeholder:"\u4F60\u7684\u7528\u6237\u540D\u6216\u6CE8\u518C\u90AE\u7BB1",onChange:j=>c(j.target.value)})),D.default.createElement("div",{className:"acv-field"},D.default.createElement("label",{htmlFor:"login-password"},"\u5BC6\u7801"),D.default.createElement(ve,{key:"login-password",id:"login-password",value:p,autoComplete:"current-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:j=>d(j.target.value)})),D.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},D.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>U("forgot")},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),D.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:L||!s||!p},L?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))),t==="register"&&D.default.createElement("form",{onSubmit:g},D.default.createElement("div",{className:"acv-field"},D.default.createElement("label",null,"\u7528\u6237\u540D"),D.default.createElement("input",{className:"acv-input",value:s,autoComplete:"username",placeholder:"3-24 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF",onChange:j=>c(j.target.value)})),D.default.createElement("div",{className:"acv-field"},D.default.createElement("label",null,"\u90AE\u7BB1"),D.default.createElement("input",{className:"acv-input",type:"email",value:m,autoComplete:"email",placeholder:"\u7528\u6765\u6536\u9A8C\u8BC1\u94FE\u63A5",onChange:j=>u(j.target.value)})),D.default.createElement("div",{className:"acv-field"},D.default.createElement("label",{htmlFor:"register-password"},"\u5BC6\u7801"),D.default.createElement(ve,{key:"register-password",id:"register-password",value:p,autoComplete:"new-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:j=>d(j.target.value)})),D.default.createElement("div",{className:"acv-field"},D.default.createElement("label",null,"\u9A8C\u8BC1\u7801"),D.default.createElement("div",{className:"acv-captcha-row"},D.default.createElement("input",{className:"acv-input",value:l,maxLength:8,placeholder:"\u770B\u53F3\u8FB9",onChange:j=>b(j.target.value)}),D.default.createElement("button",{type:"button",className:"acv-captcha-img",onClick:q,title:"\u6362\u4E00\u5F20"},h?D.default.createElement("span",{dangerouslySetInnerHTML:{__html:h.svg}}):D.default.createElement("span",{className:"acv-chip"},"\u52A0\u8F7D\u4E2D")))),D.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},D.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n},"\u53D6\u6D88"),D.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:L||!s||!p||!m},L?"\u6CE8\u518C\u4E2D\u2026":"\u6CE8\u518C")))))}var f=X(require("react"),1);var vt={title:"",slug:"",subtitle:"",description:"",accent:"#F53FA6",accentTo:"#FF7A45",zones:["home"],motif:"diffusion"},ft=[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR \u4E13\u533A"}];function gt({api:e,me:a,onDm:n,notify:o}){let[r,t]=f.default.useState(null),[i,s]=f.default.useState(""),[c,m]=f.default.useState(""),u=f.default.useCallback(()=>{e.pendingAccounts().then(d=>{t(d.accounts),s("")}).catch(d=>s(d.message))},[e]);f.default.useEffect(()=>{u()},[u]);async function p(d){m(d.id);try{await e.verifyAccount(d.id),o(`\u5DF2\u653E\u884C @${d.handle}`),u()}catch(l){o(l.message,{error:!0})}finally{m("")}}return i?f.default.createElement("div",{className:"acv-error"},i):r?r.length===0?f.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5F85\u9A8C\u8BC1\u7684\u8D26\u53F7"):r.map(d=>f.default.createElement("div",{key:d.id,className:"acv-member",style:{padding:"12px 2px"}},f.default.createElement("span",{className:"acv-member-main"},f.default.createElement("span",{className:"acv-member-name"},f.default.createElement(R,{api:e,me:a,handle:d.handle,onDm:n},f.default.createElement("span",null,d.displayName)," ",f.default.createElement("span",{className:"acv-member-meta"},"@",d.handle))),f.default.createElement("span",{className:"acv-member-meta"},d.email," \xB7 \u6CE8\u518C\u4E8E ",re(d.createdAt))),f.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"6px 14px",fontSize:13},disabled:c===d.id,onClick:()=>p(d)},c===d.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C"))):f.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function bt({api:e,space:a,onDone:n,onCancel:o,notify:r}){let[t,i]=f.default.useState(a?{title:a.title,slug:a.slug,subtitle:a.subtitle,description:a.description,accent:a.accent,accentTo:a.accentTo,zones:a.zones?.length?a.zones:["home"],motif:a.motif||"diffusion"}:vt),[s,c]=f.default.useState(!1),[m,u]=f.default.useState(""),p=(l,b)=>i(h=>({...h,[l]:b}));async function d(){c(!0),u("");try{a?await e.updateSpace(a.id,t):await e.createSpace(t),r(a?"\u677F\u5757\u5DF2\u66F4\u65B0":`\u677F\u5757\u300C${t.title}\u300D\u5DF2\u521B\u5EFA`),n()}catch(l){u(l.message)}finally{c(!1)}}return f.default.createElement("div",{className:"acv-editor"},m&&f.default.createElement("div",{className:"acv-error"},m),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u677F\u5757\u540D\u79F0"),f.default.createElement("input",{className:"acv-input",value:t.title,maxLength:24,onChange:l=>p("title",l.target.value),placeholder:"\u6BD4\u5982\uFF1A\u4F5C\u54C1\u5C55\u793A"})),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u677F\u5757\u6807\u8BC6\uFF08\u7528\u4E8E\u94FE\u63A5\uFF0C\u7559\u7A7A\u81EA\u52A8\u751F\u6210\uFF09"),f.default.createElement("input",{className:"acv-input",value:t.slug,maxLength:32,disabled:!!a,onChange:l=>p("slug",l.target.value.toLowerCase()),placeholder:"works"})),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u4E00\u53E5\u8BDD\u4ECB\u7ECD"),f.default.createElement("input",{className:"acv-input",value:t.subtitle,maxLength:60,onChange:l=>p("subtitle",l.target.value)})),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u677F\u5757\u8BF4\u660E"),f.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:t.description,maxLength:300,onChange:l=>p("description",l.target.value)})),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u663E\u793A\u5728"),f.default.createElement("div",{className:"acv-zone-picker"},ft.map(l=>{let b=t.zones.includes(l.key);return f.default.createElement("button",{key:l.key,type:"button",className:b?"acv-zone-option is-active":"acv-zone-option",onClick:()=>i(h=>{let C=b?h.zones.filter(L=>L!==l.key):[...h.zones,l.key];return{...h,zones:C.length?C:["home"]}})},f.default.createElement("span",{className:"acv-zone-tick"},b?"\u2713":""),l.label)})),f.default.createElement("span",{className:"acv-field-hint"},"\u53EF\u4EE5\u591A\u9009\uFF1A\u540C\u65F6\u52FE\u9009\u5C31\u4E24\u4E2A\u5730\u65B9\u90FD\u663E\u793A")),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u5C01\u9762\u6784\u56FE"),f.default.createElement("div",{className:"acv-zone-picker"},Re.map(l=>f.default.createElement("button",{key:l.key,type:"button",className:t.motif===l.key?"acv-zone-option is-active":"acv-zone-option",onClick:()=>p("motif",l.key)},l.label))),f.default.createElement("span",{className:"acv-field-hint"},"\u534A\u900F\u660E\u51E0\u4F55\u56FE\u5F62\uFF0C\u753B\u5728\u6E10\u53D8\u4E0A\u9762")),f.default.createElement("div",{className:"acv-field"},f.default.createElement("label",null,"\u5361\u7247\u6E10\u53D8"),f.default.createElement("div",{className:"acv-color-row"},f.default.createElement("input",{type:"color",className:"acv-color",value:t.accent,onChange:l=>p("accent",l.target.value)}),f.default.createElement("input",{type:"color",className:"acv-color",value:t.accentTo,onChange:l=>p("accentTo",l.target.value)}),f.default.createElement("span",{className:"acv-space-cover acv-color-preview",style:{background:`linear-gradient(120deg, ${t.accent}, ${t.accentTo})`}}))),f.default.createElement("div",{className:"acv-row"},f.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:o},"\u53D6\u6D88"),f.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:s||!t.title.trim(),onClick:d},s?"\u4FDD\u5B58\u4E2D\u2026":a?"\u4FDD\u5B58":"\u521B\u5EFA\u677F\u5757")))}function ht({api:e,me:a,onDm:n,notify:o}){let[r,t]=f.default.useState(null),[i,s]=f.default.useState(""),[c,m]=f.default.useState(""),u=f.default.useCallback(()=>{e.adminUsers(i.trim()).then(d=>t(d.users)).catch(d=>o(d.message,{error:!0}))},[e,i,o]);f.default.useEffect(()=>{u()},[u]);async function p(d){m(d.id);try{await e.verifyAccount(d.id),o(`\u5DF2\u653E\u884C @${d.handle}`),u()}catch(l){o(l.message,{error:!0})}finally{m("")}}return r?f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:"acv-inline",style:{marginBottom:12}},f.default.createElement("input",{className:"acv-input",placeholder:"\u641C\u7D22\u7528\u6237\u540D\u6216\u6635\u79F0",value:i,onChange:d=>s(d.target.value)}),f.default.createElement("button",{type:"button",className:"acv-btn",onClick:u},"\u641C\u7D22")),r.length===0&&f.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5339\u914D\u7684\u7528\u6237"),r.map(d=>f.default.createElement("div",{key:d.id,className:"acv-admin-row"},f.default.createElement("span",{className:"acv-member-main"},f.default.createElement("span",{className:"acv-member-name"},f.default.createElement(R,{api:e,me:a,handle:d.handle,onDm:n},f.default.createElement("span",null,d.displayName),f.default.createElement("span",{className:"acv-member-meta"}," @",d.handle)),d.role==="admin"&&f.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u7BA1\u7406\u5458"),!d.emailVerified&&f.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u672A\u9A8C\u8BC1"),!d.allowDm&&f.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u5173\u79C1\u4FE1")),f.default.createElement("span",{className:"acv-member-meta"},d.email||"\uFF08\u65E0\u90AE\u7BB1\uFF09"," \xB7 ",d.postCount," \u4E2A\u5E16\u5B50 \xB7 \u6CE8\u518C\u4E8E ",re(d.createdAt))),!d.emailVerified&&f.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},disabled:c===d.id,onClick:()=>p(d)},c===d.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C")))):f.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function xt({api:e,notify:a}){let[n,o]=f.default.useState(null),[r,t]=f.default.useState(null),[i,s]=f.default.useState(""),c=f.default.useCallback(()=>{e.adminSpaces().then(u=>o(u.spaces)).catch(u=>a(u.message,{error:!0}))},[e,a]);f.default.useEffect(()=>{c()},[c]);async function m(u){let p=!u.archivedAt;if(!(p&&!window.confirm(`\u5220\u9664\u677F\u5757\u300C${u.title}\u300D\uFF1F\u677F\u5757\u4F1A\u4ECE\u9996\u9875\u6D88\u5931\uFF0C\u5E16\u5B50\u4ECD\u4FDD\u7559\u5728\u5E93\u91CC\u3002`))){s(u.id);try{await e.archiveSpace(u.id,p),a(p?"\u677F\u5757\u5DF2\u5220\u9664":"\u677F\u5757\u5DF2\u6062\u590D"),c()}catch(d){a(d.message,{error:!0})}finally{s("")}}}return n?f.default.createElement(f.default.Fragment,null,r?f.default.createElement(bt,{api:e,space:r==="new"?null:r,notify:a,onCancel:()=>t(null),onDone:()=>{t(null),c()}}):f.default.createElement("div",{className:"acv-row",style:{justifyContent:"flex-start",marginBottom:6}},f.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>t("new")},"\u65B0\u5EFA\u677F\u5757")),n.map(u=>f.default.createElement("div",{key:u.id,className:u.archivedAt?"acv-admin-row is-archived":"acv-admin-row"},f.default.createElement($e,{space:u,showBadge:!1,showEdition:!1,className:"acv-admin-swatch"}),f.default.createElement("span",{className:"acv-member-main"},f.default.createElement("span",{className:"acv-member-name"},u.title,f.default.createElement("span",{className:"acv-member-meta"}," /",u.slug),u.archivedAt&&f.default.createElement("span",{className:"acv-chip",style:{marginLeft:8}},"\u5DF2\u5220\u9664")),f.default.createElement("span",{className:"acv-member-meta"},u.postCount," \u4E2A\u5E16\u5B50 \xB7 ",u.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${re(u.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u5E16\u5B50",u.zones?.map(p=>f.default.createElement("span",{key:p,className:"acv-chip",style:{marginLeft:6}},p==="arvr"?"AR/VR":"\u9996\u9875")))),f.default.createElement("span",{style:{display:"flex",gap:6}},f.default.createElement("button",{type:"button",className:"acv-btn",style:{padding:"5px 12px",fontSize:12},onClick:()=>t(u)},"\u7F16\u8F91"),f.default.createElement("button",{type:"button",className:"acv-btn ghost",style:{padding:"5px 12px",fontSize:12},disabled:i===u.id,onClick:()=>m(u)},u.archivedAt?"\u6062\u590D":"\u5220\u9664"))))):f.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Sa({api:e,me:a,onDm:n,onBack:o,notify:r}){let[t,i]=f.default.useState("spaces"),[s,c]=f.default.useState(null);return f.default.useEffect(()=>{e.pendingAccounts().then(m=>c(m.accounts.length)).catch(()=>c(null))},[e,t]),f.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},f.default.createElement("div",null,f.default.createElement("button",{type:"button",className:"acv-back",onClick:o},"\u2190 \u8FD4\u56DE\u9996\u9875")),f.default.createElement("div",{className:"acv-admin-layout"},f.default.createElement("nav",{className:"acv-admin-nav","aria-label":"\u7BA1\u7406"},f.default.createElement("button",{type:"button",className:t==="feedback"?"is-active":"",onClick:()=>i("feedback")},"\u53CD\u9988\u5185\u5BB9"),f.default.createElement("button",{type:"button",className:t==="spaces"?"is-active":"",onClick:()=>i("spaces")},"\u677F\u5757"),f.default.createElement("button",{type:"button",className:t==="users"?"is-active":"",onClick:()=>i("users")},"\u7528\u6237"),f.default.createElement("button",{type:"button",className:t==="accounts"?"is-active":"",onClick:()=>i("accounts")},f.default.createElement("span",null,"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),s>0&&f.default.createElement("span",{className:"acv-badge"},s))),f.default.createElement("section",{className:"acv-panel acv-admin-content",style:{padding:"20px 22px"}},f.default.createElement("div",{className:"acv-section-head"},f.default.createElement("h2",{className:"acv-section-title"},t==="feedback"?"\u53CD\u9988\u5185\u5BB9":t==="spaces"?"\u677F\u5757":t==="users"?"\u7528\u6237":"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),f.default.createElement("span",{className:"acv-section-note"},t==="feedback"?"\u7528\u6237\u63D0\u4EA4\u7684\u610F\u89C1\u4E0E\u95EE\u9898\uFF0C\u4EC5\u7BA1\u7406\u5458\u53EF\u89C1":t==="spaces"?"\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u677F\u5757\uFF1B\u5220\u9664\u540E\u53EF\u4ECE\u7BA1\u7406\u91CC\u6062\u590D":t==="users"?"\u5168\u90E8\u8D26\u53F7\uFF1B\u672A\u9A8C\u8BC1\u7684\u53EF\u4EE5\u76F4\u63A5\u653E\u884C":"\u6CA1\u914D SMTP \u65F6\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u4E0D\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u4EBA\u5DE5\u653E\u884C")),t==="feedback"&&f.default.createElement(Ca,{api:e}),t==="spaces"&&f.default.createElement(xt,{api:e,notify:r}),t==="users"&&f.default.createElement(ht,{api:e,me:a,onDm:n,notify:r}),t==="accounts"&&f.default.createElement(gt,{api:e,me:a,onDm:n,notify:r}))))}var de=X(require("react"),1);function Ea({api:e,zone:a,title:n,note:o,onOpenSpace:r}){let[t,i]=de.default.useState(null),[s,c]=de.default.useState("");return de.default.useEffect(()=>{let m=!1;return e.zoneSpaces(a).then(u=>{m||(i(u.spaces),c(""))}).catch(u=>{m||c(u.message)}),()=>{m=!0}},[e,a]),de.default.createElement("div",{className:"acv-zone"},de.default.createElement("div",{className:"acv-section-head"},de.default.createElement("h2",{className:"acv-section-title"},n),de.default.createElement("span",{className:"acv-section-note"},o)),s&&de.default.createElement("div",{className:"acv-empty"},s),!t&&!s&&de.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),t&&t.length===0&&de.default.createElement("div",{className:"acv-panel"},de.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u4E13\u533A\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u300C\u7BA1\u7406 \u2192 \u677F\u5757\u300D\u91CC\u628A\u677F\u5757\u653E\u8FDB\u300C",n,"\u300D\u3002")),de.default.createElement("div",{className:"acv-zone-grid"},t?.map(m=>de.default.createElement(We,{key:m.id,space:m,onOpen:r}))))}var F=X(require("react"),1),Aa=X(Ve(),1);var je=X(require("react"),1);function yt(e,a,n){let o={messages:[],mine:null,mineReady:!n,loading:!0,busy:!1,error:"",highlightId:null},r=!0,t=0,i=null,s=new Set,c=globalThis.crypto?.randomUUID?.()||`message_${Date.now()}_${Math.random().toString(36).slice(2)}`,m=p=>{r&&(o={...o,...p},s.forEach(d=>d()))};async function u(){let p=++t;i?.abort(),i=new AbortController;try{let[d,l]=await Promise.all([e.worldMessages(a,i.signal),n?e.myWorldMessage(a,i.signal):Promise.resolve(null)]);r&&p===t&&m({messages:d.messages,mine:l,mineReady:!0,loading:!1,error:""})}catch(d){r&&p===t&&d.name!=="AbortError"&&m({loading:!1,error:d.message})}}return{getSnapshot:()=>o,subscribe(p){return s.add(p),()=>s.delete(p)},refresh:u,async save(p,d,l){if(o.busy||!o.mineReady)return null;t++,i?.abort(),m({busy:!0,error:""});try{let h=(o.mine?.state==="active"?await e.editWorldMessage(a,o.mine.message.id,{body:p,style:d,revision:l}):await e.createWorldMessage(a,{body:p,style:d,requestId:c})).message,C=o.messages.filter(L=>L.id!==h.id&&L.placementSlot!==h.placementSlot);return h.placementSlot!==null&&C.unshift(h),m({mine:{state:"active",message:h},messages:C,highlightId:h.id}),await u(),h}catch(b){throw m({error:b.message}),(b.status===409||b.status===404)&&await u(),b}finally{m({busy:!1})}},async remove(p){if(o.busy)return!1;t++,i?.abort(),m({busy:!0,error:""});try{return await e.deleteWorldMessage(a,p),m({messages:o.messages.filter(d=>d.id!==p)}),await u(),!0}catch(d){throw m({error:d.message}),d}finally{m({busy:!1})}},dispose(){r=!1,t++,i?.abort(),s.clear()}}}function za(e,a,n){let o=je.default.useMemo(()=>yt(e,a,n?.id),[e,a,n?.id]),r=je.default.useSyncExternalStore(o.subscribe,o.getSnapshot);return je.default.useEffect(()=>{o.refresh();let t=()=>{!document.hidden&&!o.getSnapshot().busy&&o.refresh()},i=setInterval(t,3e4);return document.addEventListener("visibilitychange",t),()=>{clearInterval(i),document.removeEventListener("visibilitychange",t),o.dispose()}},[o]),{...r,store:o}}var w=X(require("react"),1);var Ta=[{id:"plank",label:"\u539F\u6728\u62FC\u677F"},{id:"cottage",label:"\u5C0F\u5C4B\u5F62"}];function Pa({api:e,slug:a,me:n,data:o,selected:r,onClose:t,onLogin:i,previews:s={}}){let c=w.default.useRef(null),[m,u]=w.default.useState(r?"detail":"compose"),[p,d]=w.default.useState(r),[l,b]=w.default.useState(""),[h,C]=w.default.useState("plank"),[L,P]=w.default.useState(null),_=w.default.useRef(!1),[E,z]=w.default.useState(""),[B,q]=w.default.useState(!1),[U,V]=w.default.useState(!1),[g,Y]=w.default.useState(!1),[j,y]=w.default.useState(null),[v,x]=w.default.useState(!1),H=w.default.useRef(null),[G,ue]=w.default.useState("");w.default.useEffect(()=>{let Z=document.activeElement;return c.current.showModal(),()=>{H.current?.abort(),Z?.isConnected&&Z.focus()}},[]),w.default.useEffect(()=>{if(!(!o.mineReady||_.current||g)){if(o.mine?.state==="active"){if(l.trim()){Y(!0);return}b(o.mine.message.body),C(o.mine.message.style),P(o.mine.message.revision)}_.current=!!n}},[o.mineReady,o.mine,n,l,g]),w.default.useEffect(()=>{B&&c.current.querySelector(".acv-overlay input")?.focus()},[B]);function $(){o.mine?.state==="active"&&(b(o.mine.message.body),C(o.mine.message.style),P(o.mine.message.revision),_.current=!0,Y(!1)),u("compose"),z("")}async function J(Z=""){H.current?.abort();let fe=new AbortController;H.current=fe,u("history"),z(""),x(!0);try{let Se=await e.worldMessageHistory(a,Z,fe.signal);if(fe.signal.aborted)return;y(Se.messages),ue(Se.nextCursor)}catch(Se){Se.name!=="AbortError"&&z(Se.message)}finally{fe.signal.aborted||x(!1)}}async function xe(Z){if(Z.preventDefault(),z(""),!n){q(!0);return}try{await o.store.save(l,h,L)&&t()}catch(fe){z(fe.message),fe.status===409&&Y(!0),fe.status===401&&q(!0)}}async function Le(){try{await o.store.remove(p.id),V(!1),d(null),await J()}catch(Z){z(Z.message)}}let Ce=o.mine?.state==="removed",He=o.mine?.state==="active",Ya=l.trim()&&[...l.trim()].length<=80&&!o.busy&&!g&&o.mineReady,Va=p?.author.id===n?.id;return w.default.createElement("dialog",{ref:c,className:"acv-modal acv-world-message-dialog","aria-labelledby":"world-message-title",onCancel:Z=>{Z.preventDefault(),B?q(!1):U?V(!1):o.busy||t()}},w.default.createElement("div",{inert:B},w.default.createElement("header",{className:"acv-message-heading"},w.default.createElement("h2",{className:"acv-modal-title",id:"world-message-title"},m==="history"?"\u6C99\u6EE9\u4E0A\u7684\u7559\u8A00":m==="detail"?"\u4E00\u5757\u7559\u8A00\u677F":He?"\u7F16\u8F91\u6211\u7684\u7559\u8A00\u677F":"\u7559\u4E00\u53E5\u8BDD"),w.default.createElement("button",{className:"acv-btn ghost",type:"button","aria-label":"\u5173\u95ED\u7559\u8A00\u9762\u677F",disabled:o.busy,onClick:t},"\xD7")),w.default.createElement("nav",{className:"acv-message-tabs","aria-label":"\u7559\u8A00\u5BFC\u822A"},w.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:$},n?"\u6211\u7684\u7559\u8A00\u677F":"\u5199\u7559\u8A00"),w.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:()=>J()},"\u5168\u90E8\u7559\u8A00")),m==="compose"&&w.default.createElement(w.default.Fragment,null,Ce?w.default.createElement("p",{role:"status"},"\u4F60\u7684\u7559\u8A00\u677F\u5DF2\u88AB\u7BA1\u7406\u5458\u79FB\u9664\uFF0C\u4E0D\u80FD\u518D\u6B21\u653E\u7F6E\u3002"):w.default.createElement("form",{onSubmit:xe},w.default.createElement("p",{className:"acv-modal-sub"},"\u6BCF\u4EBA\u4E00\u5757\uFF0C\u53EF\u4EE5\u968F\u65F6\u4FEE\u6539\u81EA\u5DF1\u7684\u6587\u5B57\u548C\u6837\u5F0F\u3002"),o.mineReady?null:w.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u4F60\u7684\u7559\u8A00\u677F\u2026"),w.default.createElement("fieldset",{disabled:o.busy},w.default.createElement("legend",null,"\u9009\u62E9\u6728\u724C\u6837\u5F0F"),w.default.createElement("div",{className:"acv-message-styles"},Ta.map(Z=>w.default.createElement("label",{key:Z.id,className:h===Z.id?"is-selected":""},w.default.createElement("input",{type:"radio",name:"board-style",value:Z.id,checked:h===Z.id,onChange:()=>C(Z.id)}),w.default.createElement("span",{className:"acv-message-preview","aria-hidden":"true"},s[Z.id]?w.default.createElement("img",{src:s[Z.id],alt:""}):w.default.createElement("span",{className:"acv-message-preview-loading"},"\u6B63\u5728\u51C6\u5907\u6728\u724C\u9884\u89C8\u2026")),Z.label)))),w.default.createElement("div",{className:"acv-field acv-message-field"},w.default.createElement("label",{htmlFor:"world-message-body"},"\u4F60\u7684\u7559\u8A00"),w.default.createElement("textarea",{className:"acv-input",id:"world-message-body",rows:4,value:l,disabled:o.busy,onChange:Z=>b(Z.target.value),placeholder:"\u7ED9\u8DEF\u8FC7\u8FD9\u91CC\u7684\u4EBA\u7559\u4E00\u53E5\u8BDD\u2026"})),w.default.createElement("p",{className:"acv-modal-sub"},[...l].length," / ",80," \u5B57 \xB7 \u7EAF\u6587\u672C"),g&&w.default.createElement("div",{role:"alert"},w.default.createElement("p",null,"\u4F60\u5DF2\u6709\u7559\u8A00\uFF0C\u6216\u7559\u8A00\u5DF2\u5728\u5176\u4ED6\u8BBE\u5907\u4FEE\u6539\u3002\u8349\u7A3F\u4ECD\u4FDD\u7559\u5728\u8F93\u5165\u6846\u4E2D\uFF0C\u8BF7\u5148\u6838\u5BF9\u6700\u65B0\u5185\u5BB9\u3002"),w.default.createElement("blockquote",null,o.mine?.message?.body),w.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:$},"\u8BFB\u53D6\u6700\u65B0\u7559\u8A00"),w.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:!He,onClick:()=>{P(o.mine.message.revision),Y(!1),_.current=!0}},"\u4FDD\u7559\u8349\u7A3F\uFF0C\u4F5C\u4E3A\u4FEE\u6539")),w.default.createElement("button",{className:"acv-btn brand acv-message-submit",type:"submit",disabled:!Ya},o.busy?"\u6B63\u5728\u4FDD\u5B58\u2026":n?He?"\u4FDD\u5B58\u4FEE\u6539":"\u63D2\u4E0A\u7559\u8A00\u677F":"\u767B\u5F55\u540E\u53D1\u5E03"))),m==="history"&&w.default.createElement("section",{"aria-label":"\u5168\u90E8\u7559\u8A00"},v?w.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u7559\u8A00\u2026"):w.default.createElement(w.default.Fragment,null,j?.length===0&&w.default.createElement("p",null,"\u8FD8\u6CA1\u6709\u7559\u8A00\uFF0C\u6765\u7559\u4E0B\u7B2C\u4E00\u53E5\u8BDD\u5427\u3002"),j?.map(Z=>w.default.createElement("button",{className:"acv-message-history-item",key:Z.id,type:"button",onClick:()=>{d(Z),u("detail"),V(!1)}},w.default.createElement("strong",null,Z.author.displayName),w.default.createElement("span",null,Z.body))),w.default.createElement("div",{className:"acv-message-actions"},w.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:()=>J()},"\u56DE\u5230\u6700\u65B0"),G&&w.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:()=>J(G)},"\u4E0B\u4E00\u9875")))),m==="detail"&&p&&w.default.createElement("article",null,s[p.style]&&w.default.createElement("img",{className:"acv-message-detail-preview",src:s[p.style],alt:p.style==="plank"?"\u539F\u6728\u62FC\u677F":"\u5C0F\u5C4B\u5F62\u6728\u724C"}),w.default.createElement("p",{className:"acv-message-fulltext"},p.body),w.default.createElement("p",{className:"acv-modal-sub"},p.author.displayName," \xB7 ",new Date(p.createdAt).toLocaleString("zh-CN")),w.default.createElement("div",{className:"acv-message-actions"},Va&&w.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy||!o.mineReady,onClick:$},"\u7F16\u8F91\u6211\u7684\u7559\u8A00"),n?.role==="admin"&&w.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:()=>V(!0)},"\u5220\u9664\u7559\u8A00")),U&&w.default.createElement("div",{role:"alert"},w.default.createElement("p",null,"\u786E\u5B9A\u79FB\u9664\u8FD9\u5757\u7559\u8A00\u677F\uFF1F\u8BE5\u8D26\u53F7\u4E4B\u540E\u4E0D\u80FD\u91CD\u65B0\u653E\u7F6E\u3002"),w.default.createElement("div",{className:"acv-message-actions"},w.default.createElement("button",{className:"acv-btn ghost",disabled:o.busy,onClick:()=>V(!1)},"\u53D6\u6D88"),w.default.createElement("button",{className:"acv-btn ghost",disabled:o.busy,onClick:Le},"\u786E\u5B9A\u5220\u9664")))),(E||o.error)&&w.default.createElement("div",{role:"alert"},w.default.createElement("p",null,E||o.error),w.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:()=>{z(""),o.store.refresh()}},"\u5237\u65B0\u7559\u8A00"),n&&w.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:()=>q(!0)},"\u91CD\u65B0\u767B\u5F55"))),B&&w.default.createElement(Fe,{api:e,initialMode:"login",onClose:()=>q(!1),onDone:Z=>{q(!1),_.current=!1,i(Z)}}))}var Be=null;async function wt(e){let a=await fetch(e.assetUrl("/worlds/manifest.json"));if(!a.ok)throw new Error(`\u7A7A\u95F4\u6E05\u5355\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${a.status}\uFF09`);let n=await a.json();return Array.isArray(n.worlds)?n.worlds:[]}function Oa(e){let[a,n]=F.default.useState(null),[o,r]=F.default.useState("");return F.default.useEffect(()=>{let t=!1;return wt(e).then(i=>{t||(n(i),r(""))}).catch(i=>{t||r(i.message)}),()=>{t=!0}},[e]),{worlds:a,error:o}}var Ae=null;function kt(e){return window.AchoverseWorld?.messageBoardsVersion===2?Promise.resolve():(Ae||(Ae=new Promise((a,n)=>{let o=document.createElement("script");o.src=e.assetUrl("/assets/world.js?v=messages-2-text-20261111"),o.onload=()=>window.AchoverseWorld?.messageBoardsVersion===2?a():n(new Error("\u573A\u666F\u7248\u672C\u4E0D\u5339\u914D\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")),o.onerror=()=>n(new Error("3D \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")),document.head.appendChild(o)}),Ae.catch(()=>{Ae=null})),Ae)}function Nt({api:e,world:a,onOpen:n}){return F.default.createElement("button",{type:"button",className:"acv-space-card acv-world-card","data-world-slug":a.slug,onClick:()=>{Be=a.slug,n(a.slug)}},a.cover&&F.default.createElement("img",{className:"acv-world-cover",src:e.assetUrl(a.cover),alt:"",loading:"lazy"}),F.default.createElement("span",{className:"acv-world-card-title"},a.title))}function La({api:e,onOpenWorld:a}){let{worlds:n,error:o}=Oa(e),r=F.default.useRef(null);return F.default.useEffect(()=>{if(!n||!Be)return;Array.from(r.current?.querySelectorAll("[data-world-slug]")||[]).find(i=>i.dataset.worldSlug===Be)?.focus({preventScroll:!0}),Be=null},[n]),F.default.createElement("div",{className:"acv-zone"},F.default.createElement("div",{className:"acv-section-head"},F.default.createElement("h2",{className:"acv-section-title"},"3D\u7A7A\u95F4"),F.default.createElement("span",{className:"acv-section-note"},"Web3D \u5236\u4F5C\u7684\u53EF\u4EA4\u4E92\u7A7A\u95F4\uFF0C\u70B9\u5F00\u4E00\u4E2A\u8FDB\u53BB\u901B\u901B")),o&&F.default.createElement("div",{className:"acv-empty"},o),!n&&!o&&F.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),n&&n.length===0&&F.default.createElement("div",{className:"acv-panel"},F.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u7A7A\u95F4\u3002")),F.default.createElement("div",{className:"acv-zone-grid acv-world-grid",ref:r},n?.map(t=>F.default.createElement(Nt,{key:t.slug,api:e,world:t,onOpen:a}))))}function Ct({api:e,world:a,notify:n,data:o,panelOpen:r,onCloud:t,onMessage:i,cloudFocused:s,onBoardPreviews:c}){let m=F.default.useRef(null),[u,p]=F.default.useState("loading"),d=F.default.useRef(null),l=F.default.useRef(null);return l.current={data:o,panelOpen:r,notify:n,onCloud:t,onMessage:i,onBoardPreviews:c},F.default.useEffect(()=>{d.current?.setCloudFocused?.(s)},[s,u]),F.default.useEffect(()=>{d.current?.updateMessages?.(o.messages,o.highlightId),d.current?.setInputEnabled?.(!r)},[o.messages,o.highlightId,r,u]),F.default.useEffect(()=>{let b=null,h=!1;return kt(e).then(()=>{h||!m.current||(b=window.AchoverseWorld.mount(a.slug,m.current,{assetUrl:C=>e.assetUrl(C),onBoardPreviews:C=>l.current.onBoardPreviews(C),onEvent:C=>l.current.notify?.(C),onCloud:()=>l.current.onCloud(),onMessage:C=>l.current.onMessage(C)}),d.current=b,b.updateMessages?.(l.current.data.messages),b.setInputEnabled?.(!l.current.panelOpen),p("ready"))}).catch(C=>{h||p(C.message||"error")}),()=>{h=!0,d.current=null,b?.()}},[e,a.slug]),F.default.createElement("div",{className:"acv-world-live"},F.default.createElement("div",{className:"acv-world-canvas",ref:m},u!=="ready"&&F.default.createElement("div",{className:"acv-world-loading"},u==="loading"?"\u6B63\u5728\u52A0\u8F7D 3D \u5F15\u64CE\u4E0E\u573A\u666F\u2026":u)),F.default.createElement("div",{className:"acv-world-hint"},"\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u4E00\u70B9\u6302\u949F\u548C\u6728\u95E8"))}function _a({api:e,slug:a,onBack:n,notify:o,me:r,onLogin:t}){let{worlds:i,error:s}=Oa(e),c=i?.find(_=>_.slug===a),m=za(e,a,r),[u,p]=F.default.useState(null),[d,l]=F.default.useState(!1),[b,h]=F.default.useState({}),C=F.default.useRef(u);C.current=u;let L=F.default.useRef(null),P=F.default.useRef(null);return F.default.useEffect(()=>{let _=document.body.style.overflow,E=document.querySelector(".acv-root"),z=E?.inert;document.body.style.overflow="hidden",E&&(E.inert=!0),P.current?.focus();let B=q=>{q.key==="Escape"&&!C.current&&P.current?.click()};return document.addEventListener("keydown",B),()=>{document.removeEventListener("keydown",B),document.body.style.overflow=_,E&&(E.inert=z)}},[]),(0,Aa.createPortal)(F.default.createElement("div",{ref:L,className:"acv-world-fullscreen",role:"dialog","aria-modal":"true","aria-label":c?.title||"3D\u7A7A\u95F4",onKeyDown:_=>{if(_.key==="Tab"&&!u){let E=[...L.current.querySelectorAll("button:not(:disabled)")],z=E[0],B=E.at(-1);_.shiftKey&&document.activeElement===z?(_.preventDefault(),B?.focus()):!_.shiftKey&&document.activeElement===B&&(_.preventDefault(),z?.focus())}}},F.default.createElement("button",{ref:P,type:"button",className:"acv-world-back",onClick:n},"\u2190 \u8FD4\u56DE 3D\u7A7A\u95F4"),s&&F.default.createElement("div",{className:"acv-world-loading",role:"alert"},s),!i&&!s&&F.default.createElement("div",{className:"acv-world-loading",role:"status"},"\u6B63\u5728\u52A0\u8F7D\u7A7A\u95F4\u2026"),i&&!c&&F.default.createElement("div",{className:"acv-world-loading"},"\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u7A7A\u95F4\u3002"),c&&(c.status==="ready"?F.default.createElement(Ct,{api:e,world:c,notify:o,data:m,panelOpen:!!u,cloudFocused:d,onBoardPreviews:h,onCloud:()=>p({selected:null}),onMessage:_=>{let E=m.messages.find(z=>z.id===_);E&&p({selected:E})}}):F.default.createElement("div",{className:"acv-world-loading"},"\u8FD9\u4E2A\u7A7A\u95F4\u6682\u65F6\u65E0\u6CD5\u8FDB\u5165\u3002")),c&&F.default.createElement("button",{type:"button",className:"acv-cloud-keyboard-entry","aria-label":"\u4E91\u6735\uFF1A\u6253\u5F00\u7559\u8A00\u677F",onFocus:()=>l(!0),onBlur:()=>l(!1),onClick:()=>p({selected:null})},"\u6253\u5F00\u4E91\u6735\u7559\u8A00\u677F"),u&&F.default.createElement(Pa,{api:e,slug:a,me:r,data:m,selected:u.selected,previews:b,onClose:()=>p(null),onLogin:t})),document.body)}var ae=X(require("react"),1);function $a({api:e,me:a,onDm:n,onOpenPost:o}){let[r,t]=ae.default.useState(""),[i,s]=ae.default.useState(null),[c,m]=ae.default.useState(!1),[u,p]=ae.default.useState(!1),d=ae.default.useRef(null);return ae.default.useEffect(()=>{if(!c)return;let l=b=>{d.current&&!d.current.contains(b.target)&&m(!1)};return document.addEventListener("click",l),()=>document.removeEventListener("click",l)},[c]),ae.default.useEffect(()=>{let l=r.trim();if(l.length===0){s(null);return}let b=setTimeout(async()=>{p(!0);try{let h=await e.search(l);s(h.posts||[]),m(!0)}catch{s([])}finally{p(!1)}},280);return()=>clearTimeout(b)},[e,r]),ae.default.createElement("div",{className:"acv-search",ref:d},ae.default.createElement("span",{className:"acv-search-icon","aria-hidden":"true"},ae.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",focusable:"false"},ae.default.createElement("circle",{cx:"7",cy:"7",r:"4.6",stroke:"currentColor",strokeWidth:"1.6"}),ae.default.createElement("path",{d:"M10.5 10.5 14 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))),ae.default.createElement("input",{className:"acv-search-input",type:"text",value:r,placeholder:"\u641C\u7D22\u5E16\u5B50","aria-label":"\u641C\u7D22\u5E16\u5B50",autoComplete:"off",spellCheck:!1,onChange:l=>t(l.target.value),onFocus:()=>r.trim()&&m(!0)}),c&&ae.default.createElement("div",{className:"acv-search-panel"},u&&ae.default.createElement("div",{className:"acv-search-empty"},"\u641C\u7D22\u4E2D\u2026"),!u&&i?.length===0&&ae.default.createElement("div",{className:"acv-search-empty"},"\u6CA1\u6709\u627E\u5230\u300C",r.trim(),"\u300D"),i?.map(l=>ae.default.createElement("button",{key:l.id,type:"button",className:"acv-search-item",onClick:()=>{m(!1),t(""),o(l.id)}},ae.default.createElement("span",{className:"acv-search-title"},l.title),ae.default.createElement("span",{className:"acv-search-meta"},l.spaceSlug," \xB7"," ",ae.default.createElement(R,{api:e,me:a,handle:l.author?.handle,onDm:n},ae.default.createElement("span",null,l.author?.displayName||l.author?.handle))," ","\xB7 ",re(l.createdAt))))))}var k=X(require("react"),1);function qe({title:e,note:a,children:n}){return k.default.createElement("div",{className:"acv-settings-section"},k.default.createElement("div",{className:"acv-section-head"},k.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},e),a&&k.default.createElement("span",{className:"acv-section-note"},a)),n)}function Ia({api:e,me:a,onBack:n,onRefreshMe:o,notify:r}){let[t,i]=k.default.useState(a?.displayName||""),[s,c]=k.default.useState(a?.bio||""),[m,u]=k.default.useState(a?.allowDm!==!1),[p,d]=k.default.useState(a?.avatarText||""),[l,b]=k.default.useState(a?.avatarColor||"#F53FA6"),[h,C]=k.default.useState(a?.avatarColorTo||"#FF7A45"),[L,P]=k.default.useState(""),[_,E]=k.default.useState(""),[z,B]=k.default.useState(""),[q,U]=k.default.useState(""),[V,g]=k.default.useState(""),[Y,j]=k.default.useState("");if(k.default.useEffect(()=>{i(a?.displayName||""),c(a?.bio||""),u(a?.allowDm!==!1),d(a?.avatarText||""),b(a?.avatarColor||"#F53FA6"),C(a?.avatarColorTo||"#FF7A45")},[a]),!a)return k.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");async function y(v,x,H){U(v),g("");try{await x(),r(H),await o?.()}catch(G){g(G.message)}finally{U("")}}return k.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:820}},k.default.createElement("div",null,k.default.createElement("button",{type:"button",className:"acv-back",onClick:n},"\u2190 \u8FD4\u56DE\u9996\u9875")),V&&k.default.createElement("div",{className:"acv-error"},V),k.default.createElement("div",{className:"acv-panel",style:{padding:"20px 22px"}},k.default.createElement("div",{className:"acv-section-head"},k.default.createElement("h2",{className:"acv-section-title"},"\u8D26\u53F7\u8BBE\u7F6E"),k.default.createElement("span",{className:"acv-section-note"},"@",a.handle)),k.default.createElement(qe,{title:"\u8D44\u6599",note:"\u6635\u79F0\u548C\u7B80\u4ECB\u4F1A\u663E\u793A\u5728\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u4E0A"},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u6635\u79F0"),k.default.createElement("input",{className:"acv-input",value:t,maxLength:24,onChange:v=>i(v.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u7B80\u4ECB"),k.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:s,maxLength:200,onChange:v=>c(v.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u63A5\u6536\u79C1\u4FE1"),k.default.createElement("div",{className:"acv-zone-picker"},k.default.createElement("button",{type:"button",className:m?"acv-zone-option is-active":"acv-zone-option",onClick:()=>u(!0)},"\u5141\u8BB8\u522B\u4EBA\u7ED9\u6211\u53D1\u79C1\u4FE1"),k.default.createElement("button",{type:"button",className:m?"acv-zone-option":"acv-zone-option is-active",onClick:()=>u(!1)},"\u5173\u95ED\u79C1\u4FE1"))),k.default.createElement("div",{className:"acv-row"},k.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:q==="profile",onClick:()=>y("profile",()=>e.updateProfile({displayName:t,bio:s,allowDm:m}),"\u8D44\u6599\u5DF2\u4FDD\u5B58")},q==="profile"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8D44\u6599"))),k.default.createElement(qe,{title:"\u5934\u50CF",note:"\u4E24\u4E2A\u6E10\u53D8\u8272 + \u6700\u591A 4 \u4E2A\u5B57\uFF0C\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u90FD\u4F1A\u7528"},k.default.createElement("div",{className:"acv-avatar-editor"},k.default.createElement("span",{className:"acv-avatar acv-avatar--lg",style:oe({avatarColor:l,avatarColorTo:h,avatarText:p})},ne({displayName:t,handle:a.handle,avatarText:p})),k.default.createElement("div",{className:"acv-avatar-fields"},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u5934\u50CF\u6587\u5B57\uFF08\u7559\u7A7A\u7528\u6635\u79F0\u9996\u5B57\uFF0C\u6700\u591A 4 \u4E2A\u5B57\uFF09"),k.default.createElement("input",{className:"acv-input",value:p,maxLength:4,placeholder:ne({displayName:t,handle:a.handle}),onChange:v=>d(v.target.value)}),k.default.createElement("span",{className:"acv-field-hint"},[...p].length,"/4")),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u6E10\u53D8\u8272"),k.default.createElement("div",{className:"acv-color-row"},k.default.createElement("input",{type:"color",className:"acv-color",value:l,onChange:v=>b(v.target.value)}),k.default.createElement("input",{type:"color",className:"acv-color",value:h,onChange:v=>C(v.target.value)}),k.default.createElement("button",{type:"button",className:"acv-btn",onClick:()=>{b("#F53FA6"),C("#FF7A45")}},"\u6062\u590D\u9ED8\u8BA4\u914D\u8272"))))),k.default.createElement("div",{className:"acv-row"},k.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:q==="avatar",onClick:()=>y("avatar",()=>e.updateProfile({avatarText:p,avatarColor:l,avatarColorTo:h}),"\u5934\u50CF\u5DF2\u4FDD\u5B58")},q==="avatar"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u5934\u50CF"))),k.default.createElement(qe,{title:"\u90AE\u7BB1",note:a.emailVerified?"\u5DF2\u9A8C\u8BC1":"\u672A\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u540E\u624D\u80FD\u53D1\u5E16\u8BC4\u8BBA"},k.default.createElement("p",{className:"acv-space-sub",style:{marginBottom:10}},"\u5F53\u524D\u90AE\u7BB1\uFF1A",k.default.createElement("strong",null,a.email||"\uFF08\u6CA1\u6709\uFF09")),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",null,"\u6362\u6210\u65B0\u90AE\u7BB1"),k.default.createElement("div",{className:"acv-inline"},k.default.createElement("input",{className:"acv-input",type:"email",placeholder:"new@example.com",value:L,onChange:v=>P(v.target.value)}),k.default.createElement("button",{type:"button",className:"acv-btn",disabled:q==="email"||!L.trim(),onClick:()=>y("email",async()=>{(await e.requestEmailChange(L.trim()))?.verifyLink&&r("\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7"),P("")},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u5230\u65B0\u90AE\u7BB1\uFF0C\u70B9\u5F00\u94FE\u63A5\u624D\u751F\u6548")},"\u53D1\u9001\u9A8C\u8BC1"))),!a.emailVerified&&k.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:q==="resend",onClick:()=>y("resend",async()=>{let v=await e.resend();if(v?.verifyLink)throw new Error(`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\uFF1A${v.verifyLink}`)},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u91CD\u53D1")},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6")),k.default.createElement(qe,{title:"\u5BC6\u7801",note:"\u81F3\u5C11 8 \u4F4D"},k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",{htmlFor:"account-password"},"\u5F53\u524D\u5BC6\u7801"),k.default.createElement(ve,{id:"account-password",autoComplete:"current-password",value:_,onChange:v=>E(v.target.value)})),k.default.createElement("div",{className:"acv-field"},k.default.createElement("label",{htmlFor:"account-new-password"},"\u65B0\u5BC6\u7801"),k.default.createElement(ve,{id:"account-new-password",autoComplete:"new-password",value:z,onChange:v=>B(v.target.value)})),k.default.createElement("div",{className:"acv-row"},k.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:q==="password"||!_||!z,onClick:()=>y("password",async()=>{await e.changePassword({currentPassword:_,newPassword:z}),E(""),B("")},"\u5BC6\u7801\u5DF2\u66F4\u65B0")},q==="password"?"\u66F4\u65B0\u4E2D\u2026":"\u66F4\u65B0\u5BC6\u7801")),k.default.createElement("p",{className:"acv-field-hint"},"\u5FD8\u4E86\u5F53\u524D\u5BC6\u7801\uFF1F\u53EF\u4EE5\u7ED9 ",a.email||"\uFF08\u6CA1\u6709\u90AE\u7BB1\uFF09"," \u53D1\u4E00\u5C01\u91CD\u7F6E\u90AE\u4EF6\uFF0C\u70B9\u94FE\u63A5\u8BBE\u65B0\u5BC6\u7801\u3002"),Y&&k.default.createElement("div",{className:"acv-notice"},Y),k.default.createElement("div",{className:"acv-row"},k.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:q==="reset-mail"||!a.email,onClick:async()=>{U("reset-mail"),g(""),j("");try{let v=await e.forgotPassword(a.email);j(v?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${v.verifyLink}`:"\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(v){g(v.message)}finally{U("")}}},q==="reset-mail"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u90AE\u4EF6\u91CD\u7F6E\u5BC6\u7801")))))}var A=X(require("react"),1);function St(e,a){if(!e||e.thread?.id!==a.thread?.id)return a;let n=new Map(e.messages.map(r=>[r.id,r]));for(let r of a.messages)n.set(r.id,r);let o=[...n.values()].sort((r,t)=>r.createdAt-t.createdAt||(r.id<t.id?-1:1));return{...a,messages:o}}function Ma({api:e,me:a,initialThreadId:n,onBack:o,onDm:r,notify:t}){let[i,s]=A.default.useState(null),[c,m]=A.default.useState(n||null),[u,p]=A.default.useState(null),[d,l]=A.default.useState(""),[b,h]=A.default.useState(!1),[C,L]=A.default.useState(!1),[P,_]=A.default.useState(""),E=A.default.useRef(null),z=A.default.useCallback(()=>{a&&e.dmThreads().then(g=>{s(g.threads),!c&&g.threads.length&&m(g.threads[0].id)}).catch(g=>_(g.message))},[e,a,c]),B=A.default.useCallback(g=>{p(Y=>St(Y,g))},[]);A.default.useEffect(()=>{z()},[z]),A.default.useEffect(()=>{c&&e.dmThread(c).then(g=>{B(g),_(""),z()}).catch(g=>_(g.message))},[e,c,B,z]),A.default.useEffect(()=>{if(!a||!c)return;let g=setInterval(()=>{document.hidden||e.dmThread(c).then(Y=>{B(Y),z()}).catch(()=>{})},8e3);return()=>clearInterval(g)},[e,a,c,B,z]),A.default.useEffect(()=>{let g=E.current;g&&(g.scrollTop=g.scrollHeight)},[u]);async function q(){let g=d.trim();if(!(!g||!c)){h(!0);try{await e.dmSend(c,g),l("");let Y=await e.dmThread(c);B(Y),z()}catch(Y){t(Y.message,{error:!0})}finally{h(!1)}}}async function U(){let g=u?.messages?.[0];if(!(!g||!c||C)){L(!0);try{let Y=await e.dmThread(c,g.createdAt);p(j=>{if(!j)return Y;let y=new Map(Y.messages.map(x=>[x.id,x]));for(let x of j.messages)y.set(x.id,x);let v=[...y.values()].sort((x,H)=>x.createdAt-H.createdAt||(x.id<H.id?-1:1));return{...j,messages:v,total:Y.total}})}catch(Y){t(Y.message,{error:!0})}finally{L(!1)}}}if(!a)return A.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");let V=!!(u&&u.messages.length<u.total);return A.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},A.default.createElement("div",null,A.default.createElement("button",{type:"button",className:"acv-back",onClick:o},"\u2190 \u8FD4\u56DE\u9996\u9875")),P&&A.default.createElement("div",{className:"acv-error"},P),A.default.createElement("div",{className:"acv-dm-layout"},A.default.createElement("aside",{className:"acv-panel acv-dm-list"},A.default.createElement("div",{className:"acv-section-head"},A.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},"\u79C1\u4FE1"),A.default.createElement("span",{className:"acv-section-note"},i?.length||0)),i?.length===0&&A.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u79C1\u4FE1"),i?.map(g=>A.default.createElement("button",{key:g.id,type:"button",className:g.id===c?"acv-dm-item is-active":"acv-dm-item",onClick:()=>m(g.id)},A.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:oe(g.other)},ne(g.other||{})),A.default.createElement("span",{className:"acv-dm-main"},A.default.createElement("span",{className:"acv-dm-name"},A.default.createElement(R,{api:e,me:a,handle:g.other?.handle,onDm:r},A.default.createElement("span",null,g.other?.displayName||g.other?.handle)),g.unread>0&&A.default.createElement("span",{className:"acv-badge"},g.unread)),A.default.createElement("span",{className:"acv-dm-preview"},g.lastMessage?.body||"\u8FD8\u6CA1\u6709\u6D88\u606F"))))),A.default.createElement("section",{className:"acv-panel acv-dm-pane"},!u&&A.default.createElement("div",{className:"acv-empty"},"\u9009\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB"),u&&A.default.createElement(A.default.Fragment,null,A.default.createElement("div",{className:"acv-dm-head"},A.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:oe(u.thread.other)},ne(u.thread.other||{})),A.default.createElement(R,{api:e,me:a,handle:u.thread.other?.handle,onDm:r},A.default.createElement("span",{style:{fontWeight:600}},u.thread.other?.displayName),A.default.createElement("span",{className:"acv-member-meta"},"@",u.thread.other?.handle))),A.default.createElement("div",{className:"acv-dm-messages",ref:E},V&&A.default.createElement("button",{type:"button",className:"acv-dm-more",disabled:C,onClick:U},C?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u65E9\u7684\u6D88\u606F"),u.messages.length===0&&A.default.createElement("div",{className:"acv-empty"},"\u6253\u4E2A\u62DB\u547C\u5427"),u.messages.map(g=>A.default.createElement("div",{key:g.id,className:g.mine?"acv-dm-msg is-mine":"acv-dm-msg"},A.default.createElement("div",{className:"acv-dm-bubble"},g.body),A.default.createElement("div",{className:"acv-dm-time"},re(g.createdAt))))),A.default.createElement("div",{className:"acv-dm-composer"},A.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:d,placeholder:"\u5199\u70B9\u4EC0\u4E48\u2026\uFF08Enter \u53D1\u9001\uFF09",onChange:g=>l(g.target.value),onKeyDown:g=>{g.key==="Enter"&&!g.shiftKey&&(g.preventDefault(),q())}}),A.default.createElement("button",{type:"button",className:"acv-chat-send",disabled:b||!d.trim(),onClick:q,"aria-label":"\u53D1\u9001"},A.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},A.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}))))))))}var te=X(require("react"),1);function Ua({api:e,token:a,onDone:n,notify:o}){let[r,t]=te.default.useState(""),[i,s]=te.default.useState(""),[c,m]=te.default.useState(!1),[u,p]=te.default.useState("");async function d(l){if(l.preventDefault(),r!==i)return p("\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4");m(!0),p("");try{await e.resetPassword({token:a,password:r}),o("\u5BC6\u7801\u5DF2\u91CD\u7F6E\uFF0C\u8BF7\u7528\u7528\u6237\u540D\u6216\u90AE\u7BB1\u548C\u65B0\u5BC6\u7801\u767B\u5F55"),n()}catch(b){p(b.message)}finally{m(!1)}}return te.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:460,paddingTop:40}},te.default.createElement("div",{className:"acv-panel",style:{padding:"24px"}},te.default.createElement("h2",{className:"acv-section-title"},"\u8BBE\u7F6E\u65B0\u5BC6\u7801"),te.default.createElement("p",{className:"acv-modal-sub"},"\u91CD\u7F6E\u540E\u6240\u6709\u5DF2\u767B\u5F55\u8BBE\u5907\u90FD\u4F1A\u9000\u51FA\u3002"),u&&te.default.createElement("div",{className:"acv-error"},u),te.default.createElement("form",{onSubmit:d},te.default.createElement("div",{className:"acv-field"},te.default.createElement("label",{htmlFor:"reset-password"},"\u65B0\u5BC6\u7801"),te.default.createElement(ve,{id:"reset-password",autoComplete:"new-password",value:r,onChange:l=>t(l.target.value)})),te.default.createElement("div",{className:"acv-field"},te.default.createElement("label",{htmlFor:"reset-confirm"},"\u518D\u8F93\u4E00\u6B21"),te.default.createElement(ve,{id:"reset-confirm",autoComplete:"new-password",value:i,onChange:l=>s(l.target.value)})),te.default.createElement("div",{className:"acv-row"},te.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:c||r.length<8},c?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u65B0\u5BC6\u7801")))))}function Et({me:e,mode:a,api:n,emailNotice:o,onDsh:r,onFeedback:t,onAuth:i,onLogout:s,onHome:c,onResend:m,onAdmin:u,onAccount:p,onDm:d,onDmUser:l,dmUnread:b=0,onOpenPost:h,tabs:C,activeTab:L,onSelectTab:P}){let[_,E]=N.default.useState(!1);return N.default.useEffect(()=>{if(!_)return;let z=()=>E(!1);return window.addEventListener("click",z),()=>window.removeEventListener("click",z)},[_]),N.default.createElement("div",{className:"acv-topbar"},N.default.createElement("div",{className:"acv-tabs"},C.map(z=>N.default.createElement("button",{key:z.key,type:"button",className:L===z.key?"acv-tab is-active":"acv-tab",onClick:()=>P(z.key)},z.label))),N.default.createElement($a,{api:n,me:e,onDm:l,onOpenPost:h}),N.default.createElement("div",{className:"acv-topbar-grow"}),N.default.createElement("div",{className:"acv-topbar-right"},N.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53CD\u9988"),a==="plugin"&&N.default.createElement("button",{type:"button",className:"acv-dsh",onClick:r,title:"\u548C DSH \u804A\u804A\u8FD9\u4E2A\u793E\u533A"},N.default.createElement("span",{className:"acv-dsh-dot"}),"DSH\u52A9\u624B"),a==="plugin"&&N.default.createElement("span",{className:"acv-divider"}),e?N.default.createElement("div",{className:"acv-relative"},N.default.createElement("button",{type:"button",className:"acv-user",onClick:z=>{z.stopPropagation(),E(B=>!B)}},N.default.createElement(R,{api:n,me:e,handle:e.handle,disabled:_},N.default.createElement("span",{className:"acv-avatar",style:oe(e)},ne(e)),N.default.createElement("span",{className:"acv-user-name"},e.displayName||e.handle)),N.default.createElement("span",{className:"acv-caret"},"\u25BE")),_&&N.default.createElement("div",{className:"acv-menu",onClick:z=>z.stopPropagation()},N.default.createElement("div",{className:"acv-menu-note"},"@",e.handle," \xB7 ",e.role==="admin"?"\u7BA1\u7406\u5458":"\u6210\u5458"),N.default.createElement("div",{className:"acv-menu-group"},"\u4E2A\u4EBA\u7BA1\u7406"),N.default.createElement("button",{type:"button",onClick:()=>{E(!1),p()}},"\u8D26\u53F7\u8BBE\u7F6E"),N.default.createElement("button",{type:"button",onClick:()=>{E(!1),d()}},"\u79C1\u4FE1",b>0?` \xB7 ${b}`:""),!e.emailVerified&&N.default.createElement("button",{type:"button",onClick:()=>{E(!1),m()}},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6"),e.role==="admin"&&N.default.createElement(N.default.Fragment,null,N.default.createElement("div",{className:"acv-menu-group"},"\u7BA1\u7406\u5458"),N.default.createElement("button",{type:"button",onClick:()=>{E(!1),u()}},"\u793E\u533A\u7BA1\u7406")),N.default.createElement("div",{className:"acv-menu-group"}),N.default.createElement("button",{type:"button",onClick:()=>{E(!1),s()}},"\u9000\u51FA\u767B\u5F55"))):N.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("login")},"\u767B\u5F55")),o&&N.default.createElement("div",{style:{display:"none"}},o))}function Fa({mode:e="site",base:a="",tokenStore:n,onDsh:o}){let r=N.default.useMemo(()=>Qe({base:a,credentials:e==="site"?"same-origin":"omit",token:n?.get()||null,onToken:$=>n?.set($)}),[a,e,n]),[t,i]=N.default.useState(null),[s,c]=N.default.useState(null),[m,u]=N.default.useState("loading"),[p,d]=N.default.useState({name:"home"}),[l,b]=N.default.useState("home"),[h,C]=N.default.useState(0),[L,P]=N.default.useState(!1),[_,E]=N.default.useState(null),[z,B]=N.default.useState(null),[q,U]=N.default.useState(0),V=N.default.useRef(0),g=N.default.useCallback(($,{error:J=!1}={})=>{B({text:$,error:J,key:Date.now()})},[]);N.default.useEffect(()=>{if(!z)return;let $=setTimeout(()=>B(null),3200);return()=>clearTimeout($)},[z]);let Y=N.default.useCallback(async()=>{let $=++V.current;try{let J=await r.bootstrap();if($!==V.current)return;i(J.account||null),c(J.home||null)}catch{$===V.current&&i(null)}finally{$===V.current&&u("ready")}},[r]);N.default.useEffect(()=>{Y()},[Y]),N.default.useEffect(()=>{if(e!=="site")return;let J=new URLSearchParams(window.location.search).get("token");J&&window.location.pathname.startsWith("/reset")&&d({name:"reset",token:J})},[e]),N.default.useEffect(()=>{let $=()=>E("login");return window.addEventListener("achoverse:auth",$),()=>window.removeEventListener("achoverse:auth",$)},[]),N.default.useEffect(()=>{if(e!=="site")return;let $=new URLSearchParams(window.location.search),J=$.get("token");if(!J||!window.location.pathname.startsWith("/verify"))return;let xe=$.get("kind");(xe==="email"?r.confirmEmailChange(J):r.verify(J)).then(Ce=>{i(Ce.account||null),g(xe==="email"?"\u65B0\u90AE\u7BB1\u5DF2\u751F\u6548\uFF0C\u9A8C\u8BC1\u4E5F\u5B8C\u6210\u4E86":"\u90AE\u7BB1\u9A8C\u8BC1\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u53D1\u5E16\u4E86"),window.history.replaceState({},"","/")}).catch(Ce=>g(Ce.message,{error:!0}))},[r,e,g]),N.default.useEffect(()=>{if(!t){C(0);return}let $=!1,J=()=>r.dmUnread().then(Le=>{$||C(Le.unread||0)}).catch(()=>{});J();let xe=setInterval(J,3e4);return()=>{$=!0,clearInterval(xe)}},[r,t]);let j=async $=>{try{let J=await r.dmOpenWith({targetId:$.id});d({name:"dm",threadId:J.thread.id})}catch(J){g(J.message,{error:!0})}},y=$=>d({name:"space",slug:$}),v=($,J)=>d({name:"post",id:$,from:J||{name:"home"}}),x=()=>{d({name:"home"}),U($=>$+1),c(null)};return N.default.createElement("div",{className:e==="plugin"?"acv-root acv-root--panel":"acv-root"},N.default.createElement("div",{className:"acv-frame"},N.default.createElement(Et,{me:t,mode:e,api:r,onOpenPost:v,onDsh:()=>{if(o)return o();window.dispatchEvent(new CustomEvent("achoverse:open-dsh"))},onFeedback:()=>P(!0),onAuth:E,onLogout:async()=>{try{await r.logout()}catch{}r.setToken(null),V.current+=1,i(null),u("ready"),g("\u5DF2\u7ECF\u9000\u51FA\u767B\u5F55"),x()},onHome:x,tabs:[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR"},{key:"3dSpace",label:"3D\u7A7A\u95F4"}],activeTab:l,onSelectTab:$=>{b($),d({name:"home"})},onAdmin:()=>d({name:"admin"}),onAccount:()=>d({name:"account"}),onDm:()=>d({name:"dm"}),onDmUser:j,dmUnread:h,onResend:async()=>{try{let $=await r.resend();g($?.verifyLink?"\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7":"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001")}catch($){g($.message,{error:!0})}}}),p.name==="home"&&l==="arvr"&&N.default.createElement(Ea,{api:r,zone:"arvr",title:"AR/VR \u4E13\u533A",note:"\u4E3B\u9898\u4E13\u533A\uFF1A\u53EA\u6536\u5F55 AR/VR \u76F8\u5173\u7684\u677F\u5757",onOpenSpace:y}),p.name==="home"&&l==="3dSpace"&&N.default.createElement(La,{api:r,onOpenWorld:$=>d({name:"3dWorld",slug:$})}),p.name==="home"&&l==="home"&&m!=="ready"&&N.default.createElement("div",{className:"acv-main"},N.default.createElement("div",{className:"acv-col"},N.default.createElement("div",{className:"acv-skeleton"}),N.default.createElement("div",{className:"acv-skeleton"}),N.default.createElement("div",{className:"acv-skeleton"})),N.default.createElement("div",{className:"acv-col"},N.default.createElement("div",{className:"acv-skeleton",style:{height:820}}))),p.name==="home"&&l==="home"&&m==="ready"&&N.default.createElement(da,{initialData:s,key:q,api:r,me:t,onOpenSpace:y,onOpenPost:$=>v($,{name:"home"}),onDm:j}),p.name==="3dWorld"&&N.default.createElement(_a,{api:r,slug:p.slug,onBack:()=>d({name:"home"}),notify:g,me:t,onLogin:$=>{V.current+=1,i($),u("ready"),c(null)}}),p.name==="space"&&N.default.createElement(ha,{api:r,slug:p.slug,me:t,onBack:x,onOpenPost:$=>v($,{name:"space",slug:p.slug}),onAuth:()=>E("login"),onDm:j,notify:g}),p.name==="reset"&&N.default.createElement(Ua,{api:r,token:p.token,notify:g,onDone:()=>{V.current+=1,r.setToken(null),i(null),C(0),u("ready"),window.history.replaceState({},"","/"),x(),E("login")}}),p.name==="account"&&N.default.createElement(Ia,{api:r,me:t,onBack:x,onRefreshMe:Y,notify:g}),p.name==="dm"&&N.default.createElement(Ma,{api:r,me:t,initialThreadId:p.threadId,onBack:x,onDm:j,notify:g}),p.name==="admin"&&N.default.createElement(Sa,{api:r,me:t,onDm:j,onBack:x,notify:g}),p.name==="post"&&N.default.createElement(ka,{api:r,id:p.id,me:t,backTo:p.from?.name==="space"?"space":"home",onDm:j,onBack:()=>p.from?.name==="space"?d({name:"space",slug:p.from.slug}):x(),onAuth:()=>E("login"),notify:g})),L&&N.default.createElement(Na,{key:t?.id||"guest",api:r,me:t,onClose:()=>P(!1),onAuth:()=>{P(!1),E("login")}}),_&&N.default.createElement(Fe,{api:r,initialMode:_,onClose:()=>E(null),onDone:$=>{V.current+=1,i($),u("ready"),E(null),c(null),x(),g("\u767B\u5F55\u6210\u529F")},notify:g}),z&&N.default.createElement("div",{className:z.error?"acv-toast is-error":"acv-toast"},z.text))}var O=X(require("react"),1);function Oe(e,a=""){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,role:e,text:a,tools:[]}}async function zt({token:e,message:a,signal:n,onEvent:o}){let r=await fetch("/community/ai/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e,message:a}),signal:n});if(!r.ok||!r.body){let c=`HTTP ${r.status}`;try{c=(await r.json())?.error||c}catch{}throw new Error(c)}let t=r.body.getReader(),i=new TextDecoder,s="";for(;;){let{value:c,done:m}=await t.read();if(m)break;s+=i.decode(c,{stream:!0});let u;for(;(u=s.indexOf(`

`))>=0;){let p=s.slice(0,u);s=s.slice(u+2);for(let d of p.split(`
`)){if(!d.startsWith("data:"))continue;let l=d.slice(5).trim();if(l)try{o(JSON.parse(l))}catch{}}}}}function ja({tokenStore:e,onClose:a,onLogin:n}){let[o,r]=O.default.useState(()=>[Oe("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),[t,i]=O.default.useState(""),[s,c]=O.default.useState(!1),[m,u]=O.default.useState(""),[p,d]=O.default.useState(()=>e?.get()||null),[l,b]=O.default.useState(""),[h,C]=O.default.useState(!1),[L,P]=O.default.useState(null),[_,E]=O.default.useState({}),[z,B]=O.default.useState(!1),q=O.default.useRef(null),U=O.default.useRef(null);O.default.useEffect(()=>()=>U.current?.abort(),[]),O.default.useEffect(()=>{let y=q.current;y&&(y.scrollTop=y.scrollHeight)},[o]),O.default.useEffect(()=>{let y=()=>{let x=e?.get()||null;x!==p&&(U.current?.abort(),r([Oe("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),P(null),b(""),u(""),d(x))},v=setInterval(y,1500);return window.addEventListener("achoverse:token-changed",y),window.addEventListener("storage",y),()=>{clearInterval(v),window.removeEventListener("achoverse:token-changed",y),window.removeEventListener("storage",y)}},[p,e]),O.default.useEffect(()=>{if(!p)return;let y=!1;return fetch("/community/ai/history",{headers:{authorization:`Bearer ${p}`},cache:"no-store"}).then(v=>{if(!v.ok)throw new Error("\u5386\u53F2\u8BFB\u53D6\u5931\u8D25");return v.json()}).then(v=>{if(y)return;let x=(v?.messages||[]).map(H=>({...Oe(H.role,H.text),id:`h-${Math.random().toString(36).slice(2,8)}`}));x.length&&r(x)}).catch(()=>{}),()=>{y=!0}},[p]);let V=y=>r(v=>{let x=[...v],H={...x[x.length-1]};return x[x.length-1]=y(H),x});async function g(y){let v=String(y??t).trim();if(!v||s)return;let x=e?.get();if(!x){u("\u5148\u767B\u5F55\u793E\u533A\uFF0C\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u8BF4\u8BDD");return}u(""),c(!0),i(""),b("");let H=new AbortController;U.current=H,r(G=>[...G,Oe("user",v),Oe("assistant","")]);try{await zt({token:x,message:v,signal:H.signal,onEvent:G=>{e?.get()===x&&(G.type==="session"?b(G.sessionId):G.type==="question"?(P({callId:G.callId,questions:G.questions,sessionId:G.sessionId}),E({})):G.type==="text"?V(ue=>({...ue,text:ue.text?`${ue.text}
${G.text}`:G.text})):G.type==="tool"?V(ue=>({...ue,tools:G.phase==="call"?[...ue.tools,G.name]:ue.tools})):G.type==="error"&&u(G.error||"\u5BF9\u8BDD\u5931\u8D25"))}})}catch(G){G.name!=="AbortError"&&e?.get()===x&&u(G.message),/登录|401/.test(G.message)&&e?.get()===x&&(e?.set(null),d(null))}finally{U.current===H&&(U.current=null),c(!1),C(!1),P(null)}}async function Y(){if(!(!L||z)){B(!0),u("");try{let y=await fetch("/community/ai/answer",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e?.get(),sessionId:L.sessionId,callId:L.callId,answers:L.questions.map(x=>({id:x.id,selected:_[x.id]?.selected||[],..._[x.id]?.custom?.trim()?{custom:_[x.id].custom.trim()}:{}}))})}),v=await y.json();if(!y.ok)throw new Error(v.error||"\u56DE\u7B54\u5931\u8D25");P(null)}catch(y){u(y.message)}finally{B(!1)}}}async function j(){if(!(!l||h)){C(!0);try{let y=await fetch("/community/ai/stop",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e?.get(),sessionId:l})}),v=await y.json();if(!y.ok)throw new Error(v.error||"\u505C\u6B62\u5931\u8D25");U.current?.abort()}catch(y){u(y.message)}finally{C(!1)}}}return O.default.createElement("div",{className:"acv-drawer",role:"dialog","aria-label":"DSH \u5BF9\u8BDD"},O.default.createElement("div",{className:"acv-drawer-head"},O.default.createElement("span",{className:"acv-dsh",style:{padding:"6px 14px"}},O.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),O.default.createElement("span",{style:{fontWeight:700}},"\u793E\u533A\u52A9\u624B"),O.default.createElement("span",{style:{flex:1}}),O.default.createElement("button",{type:"button",className:"acv-back",onClick:a,"aria-label":"\u5173\u95ED"},"\u2715")),O.default.createElement("div",{className:"acv-drawer-body",ref:q},o.map(y=>O.default.createElement("div",{key:y.id,className:`acv-chat ${y.role==="user"?"is-user":"is-agent"}`},y.tools?.length>0&&O.default.createElement("div",{className:"acv-chat-tools"},y.tools.map((v,x)=>O.default.createElement("span",{key:`${v}-${x}`,className:"acv-chip"},"\u8C03\u7528 ",v))),y.text&&(y.role==="assistant"?O.default.createElement("div",{className:"acv-chat-text acv-chat-text--md"},O.default.createElement(Pe,{text:y.text})):O.default.createElement("div",{className:"acv-chat-text"},y.text)),!y.text&&y.role==="assistant"&&s&&O.default.createElement("div",{className:"acv-chat-typing"},"\u2026"))),L&&O.default.createElement("div",{className:"acv-question-card",role:"group","aria-label":"DSH \u63D0\u95EE"},L.questions.map(y=>O.default.createElement("div",{key:y.id,className:"acv-question-item"},O.default.createElement("strong",null,y.header||"\u9700\u8981\u4F60\u7684\u9009\u62E9"),O.default.createElement("p",null,y.question),y.options?.map(v=>{let x=_[y.id]?.selected||[];return O.default.createElement("button",{key:v.label,type:"button",className:`acv-question-option${x.includes(v.label)?" is-selected":""}`,"aria-pressed":x.includes(v.label),onClick:()=>E(H=>{let G=H[y.id]||{selected:[],custom:""},ue=y.multiSelect?x.includes(v.label)?x.filter($=>$!==v.label):[...x,v.label]:[v.label];return{...H,[y.id]:{...G,selected:ue}}})},v.label,v.description&&O.default.createElement("small",null,v.description))}),O.default.createElement("input",{className:"acv-question-custom",value:_[y.id]?.custom||"",placeholder:"\u5176\u4ED6\u56DE\u7B54\uFF08\u53EF\u9009\uFF09","aria-label":`${y.question}\u7684\u81EA\u5B9A\u4E49\u56DE\u7B54`,onChange:v=>E(x=>({...x,[y.id]:{selected:x[y.id]?.selected||[],custom:v.target.value}}))}))),O.default.createElement("button",{type:"button",className:"acv-btn brand",disabled:z,onClick:Y},z?"\u63D0\u4EA4\u4E2D\u2026":"\u63D0\u4EA4\u56DE\u7B54"),O.default.createElement("span",{className:"acv-field-hint"},"\u4E0D\u9009\u4EFB\u4F55\u9009\u9879\u5373\u8DF3\u8FC7\uFF0C\u4E0D\u4EE3\u8868\u540C\u610F\u3002")),m&&O.default.createElement("div",{className:"acv-error"},m),!p&&O.default.createElement("div",{className:"acv-notice",style:{marginTop:12}},"\u8FD8\u6CA1\u767B\u5F55\u793E\u533A\uFF0C\u767B\u5F55\u4E4B\u540E\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002",O.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>{n?.(),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55"))),O.default.createElement("div",{className:"acv-drawer-foot"},O.default.createElement("div",{className:"acv-input-brand"},O.default.createElement(ye,{size:24})),O.default.createElement("div",{className:"acv-chat-composer"},O.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:t,placeholder:s?"\u6B63\u5728\u56DE\u590D\u2026":"\u548C DSH \u804A\u804A\u793E\u533A\uFF0C\u6216\u8BA9\u5B83\u53D1\u4E00\u6761\u5E16",onChange:y=>i(y.target.value)}),O.default.createElement("button",{type:"button",className:`acv-chat-send${s?" is-stop":""}`,onClick:s?j:()=>g(),disabled:s?!l||h:!t.trim(),"aria-label":s?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001",title:s?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001"},s?O.default.createElement("span",{className:"acv-chat-stop-icon"}):O.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},O.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})))),O.default.createElement("div",{className:"acv-chat-hint"},"Enter \u6362\u884C \xB7 \u70B9\u51FB\u6309\u94AE\u53D1\u9001")))}var Ba="achoverse-community",Ze="achoverse.community.token",qa="https://community.achoverse.com",Tt=["slots"];function Ha(){if(typeof document>"u")return;let e=document.querySelector("style[data-acv-community]");e||(e=document.createElement("style"),e.setAttribute("data-acv-community","styles"),document.head.appendChild(e)),e.textContent!==Ye&&(e.textContent=Ye)}function Dt({size:e=22,active:a=!1}){return ce.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},ce.default.createElement("circle",{cx:12,cy:8.5,r:3.4,stroke:"currentColor",strokeWidth:a?2:1.7}),ce.default.createElement("path",{d:"M4.6 19.4c.8-3.9 3.8-6.1 7.4-6.1s6.6 2.2 7.4 6.1",stroke:"currentColor",strokeWidth:a?2:1.7,strokeLinecap:"round"}))}function Pt(){return{get(){try{return window.localStorage.getItem(Ze)}catch{return null}},set(e){try{e?window.localStorage.setItem(Ze,e):window.localStorage.removeItem(Ze),window.dispatchEvent(new Event("achoverse:token-changed"))}catch{}}}}function At(){let[e,a]=ce.default.useState(null),[n,o]=ce.default.useState(!1),r=ce.default.useMemo(()=>Pt(),[]);return ce.default.useEffect(()=>{Ha();let t=!1;return fetch("/community/config",{cache:"no-store"}).then(i=>i.ok?i.json():Promise.reject(new Error(String(i.status)))).then(i=>{t||a(i?.baseUrl||qa)}).catch(()=>{t||a(qa)}),()=>{t=!0}},[]),e?ce.default.createElement(ce.default.Fragment,null,ce.default.createElement(Fa,{mode:"plugin",base:e,tokenStore:r,onDsh:()=>o(!0)}),n?ce.default.createElement(ja,{tokenStore:r,onClose:()=>o(!1)}):null):ce.default.createElement("div",{className:"acv-root acv-root--panel"},ce.default.createElement("div",{className:"acv-frame"},ce.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u8FDE\u63A5\u793E\u533A\u2026")))}function Ot(e){Ha(),e.slots.inject("main",()=>e.slots.register({name:"main",key:Ba},At)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Ba,order:30,label:()=>"Achoverse\u793E\u533A"},Dt))}
return module.exports}})
