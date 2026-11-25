window.__ModuleLoader__.load({id:"dsh-achoverse-community",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var no=Object.create;var tt=Object.defineProperty;var ro=Object.getOwnPropertyDescriptor;var so=Object.getOwnPropertyNames;var io=Object.getPrototypeOf,lo=Object.prototype.hasOwnProperty;var Ne=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(o){throw n=[o],o}};var Ut=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},Ft=(e,t)=>{for(var n in t)tt(e,n,{get:t[n],enumerable:!0})},Bt=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of so(t))!lo.call(e,a)&&a!==n&&tt(e,a,{get:()=>t[a],enumerable:!(o=ro(t,a))||o.enumerable});return e};var Z=(e,t,n)=>(n=e!=null?no(io(e)):{},Bt(t||!e||!e.__esModule?tt(n,"default",{value:e,enumerable:!0}):n,e)),co=e=>Bt(tt({},"__esModule",{value:!0}),e);var Zt=Ut(pe=>{"use strict";var fo=require("react");function Gt(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function ze(){}var fe={d:{f:ze,r:function(){throw Error(Gt(522))},D:ze,C:ze,L:ze,m:ze,X:ze,S:ze,M:ze},p:0,findDOMNode:null},vo=Symbol.for("react.portal"),go=Symbol.for("react.recoverable"),Vt=Symbol.for("react.optimistic_key");function ho(e,t,n){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vo,key:o==null?null:o===Vt?Vt:""+o,children:e,containerInfo:t,implementation:n}}var qe=fo.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ot(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=fe;pe.browser=function(e){return{$$typeof:go,_reason:e}};pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Gt(299));return ho(e,t,null,n)};pe.flushSync=function(e){var t=qe.T,n=fe.p;try{if(qe.T=null,fe.p=2,e)return e()}finally{qe.T=t,fe.p=n,fe.d.f()}};pe.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,fe.d.C(e,t))};pe.prefetchDNS=function(e){typeof e=="string"&&fe.d.D(e)};pe.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,o=ot(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,r=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?fe.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:o,integrity:a,fetchPriority:r}):n==="script"&&fe.d.X(e,{crossOrigin:o,integrity:a,fetchPriority:r,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};pe.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=ot(t.as,t.crossOrigin);fe.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}}else t==null&&fe.d.M(e)};pe.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,o=ot(n,t.crossOrigin);fe.d.L(e,n,{crossOrigin:o,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};pe.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=ot(t.as,t.crossOrigin);fe.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0})}else fe.d.m(e)};pe.requestFormReset=function(e){fe.d.r(e)};pe.unstable_batchedUpdates=function(e,t){return e(t)};pe.useFormState=function(e,t,n){return qe.H.useFormState(e,t,n)};pe.useFormStatus=function(){return qe.H.useHostTransitionStatus()};pe.version="19.3.1"});var bt=Ut((mn,Jt)=>{"use strict";function Xt(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xt)}catch(e){console.error(e)}}Xt(),Jt.exports=Zt()});var nt,xt=Ne(()=>{nt="data:image/webp;base64,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"});function Ae(e){let t=String(e||""),n=[],o=0;for(let a of t.matchAll(/:acv-(dolphin-[1-4]-\d{2}):/g)){let r=No.get(a[1]);r&&(a.index>o&&n.push(t.slice(o,a.index)),n.push(r),o=a.index+a[0].length)}return o<t.length&&n.push(t.slice(o)),n}function oa(e,t=1/0){return Ae(e).map(n=>typeof n=="string"?n:`[${n.label}]`).join("").slice(0,t)}var Ue,No,He=Ne(()=>{Ue=[{id:"dolphin-1-01",label:"\u5F00\u5FC3\u6325\u624B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-01.png"},{id:"dolphin-1-02",label:"\u6015\u51B7",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_56.png"},{id:"dolphin-1-03",label:"\u5BB3\u7F9E\u6342\u5634",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-03.png"},{id:"dolphin-1-04",label:"\u7591\u60D1",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_13.png"},{id:"dolphin-1-05",label:"\u62B1\u6795\u7761\u89C9",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-05.png"},{id:"dolphin-1-06",label:"\u751F\u6C14",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_40_52.png"},{id:"dolphin-1-07",label:"\u63A2\u9669",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_48.png"},{id:"dolphin-1-08",label:"\u753B\u753B",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-1-08.png"},{id:"dolphin-1-09",label:"\u8BFB\u4E66\u5B66\u4E60",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-1-09.png"},{id:"dolphin-1-10",label:"\u6E38\u6CF3",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-1-10.png"},{id:"dolphin-1-11",label:"\u5403\u51B0\u6DC7\u6DCB",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-1-11.png"},{id:"dolphin-1-12",label:"\u60CA\u8BB6",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-12.png"},{id:"dolphin-2-01",label:"\u533B\u751F",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-01.png"},{id:"dolphin-2-02",label:"\u53A8\u5E08",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-02.png"},{id:"dolphin-2-03",label:"\u5F39\u5409\u4ED6",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-03.png"},{id:"dolphin-2-04",label:"\u4FA6\u63A2",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_44.png"},{id:"dolphin-2-05",label:"\u6444\u5F71",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-05.png"},{id:"dolphin-2-06",label:"\u8DD1\u6B65",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_40.png"},{id:"dolphin-2-07",label:"\u6C34\u624B",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_36.png"},{id:"dolphin-2-08",label:"\u9B54\u672F\u5E08",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-08.png"},{id:"dolphin-2-09",label:"\u56ED\u827A",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-09.png"},{id:"dolphin-2-10",label:"\u6253\u6E38\u620F",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_27.png"},{id:"dolphin-2-11",label:"\u505A\u5B9E\u9A8C",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_31.png"},{id:"dolphin-2-12",label:"\u4E0A\u73ED",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-12.png"},{id:"dolphin-3-01",label:"\u5F00\u5FC3\u8DF3\u8DC3",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-01.png"},{id:"dolphin-3-02",label:"\u5BB3\u7F9E",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-02.png"},{id:"dolphin-3-03",label:"\u601D\u8003",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-03.png"},{id:"dolphin-3-04",label:"\u53D1\u706B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-04.png"},{id:"dolphin-3-05",label:"\u56F0\u4E86",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-05.png"},{id:"dolphin-3-06",label:"\u5927\u54ED",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-06.png"},{id:"dolphin-3-07",label:"\u56FD\u738B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-07.png"},{id:"dolphin-3-08",label:"\u5FC3\u52A8",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-08.png"},{id:"dolphin-3-09",label:"\u5413\u5230\u4E86",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-09.png"},{id:"dolphin-3-10",label:"\u90C1\u95F7",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-10.png"},{id:"dolphin-3-11",label:"\u8BA4\u771F\u89C2\u5BDF",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-11.png"},{id:"dolphin-3-12",label:"\u8138\u7EA2",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-12.png"},{id:"dolphin-4-01",label:"\u5EA6\u5047",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-01.png"},{id:"dolphin-4-02",label:"\u51B2\u6D6A",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-02.png"},{id:"dolphin-4-03",label:"\u9732\u8425",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-03.png"},{id:"dolphin-4-04",label:"\u6C99\u53D1\u9605\u8BFB",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-04.png"},{id:"dolphin-4-05",label:"\u559D\u5496\u5561",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-05.png"},{id:"dolphin-4-06",label:"\u5F92\u6B65",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-06.png"},{id:"dolphin-4-07",label:"\u770B\u5730\u56FE",category:"\u751F\u6D3B\u51FA\u6E38",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_23.png"},{id:"dolphin-4-08",label:"\u8D2D\u7269",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-08.png"},{id:"dolphin-4-09",label:"\u5403\u7206\u7C73\u82B1",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-09.png"},{id:"dolphin-4-10",label:"\u81EA\u62CD",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-10.png"},{id:"dolphin-4-11",label:"\u51AC\u65E5\u4FDD\u6696",category:"\u751F\u6D3B\u51FA\u6E38",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_19.png"},{id:"dolphin-4-12",label:"\u665A\u5B89",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-12.png"}].map(e=>({...e,path:`/emoji/v1/${e.id}.webp`,token:`:acv-${e.id}:`})),No=new Map(Ue.map(e=>[e.id,e]))});function Ve(e,t){let n=Ke.find(o=>o.id===t)?.pointCount||0;return e.points.slice(0,n).map((o,a)=>({text:o,number:a+1})).filter(o=>o.text.trim())}function Co(e=""){return oa(String(e)).replace(/```[^]*?```|~~~[^]*?~~~/g,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/<[^>]*>/g,"").replace(/^\s{0,3}(?:#{1,6}\s+|>\s*|[-*+]\s+|\d+[.)]\s+)/gm,"").replace(/[*_`~]/g,"").replace(/\r/g,"").replace(/[ \t]+/g," ").trim()}function We(e,t){return Array.from(e).slice(0,t).join("")}function pa(e,t){let o=Co(e.body).split(/\n+|(?<=[。！？!?])\s*/u).map(r=>r.trim()).filter(Boolean),a=new Date(e.createdAt);return{title:We(e.title||"\u793E\u533A\u5E16\u5B50",80),summary:We(o[0]||"",180),points:o.slice(1,4).map(r=>We(r,120)),category:We(e.spaceTitle||"\u793E\u533A\u5206\u4EAB",24),author:e.author?.displayName||e.author?.handle||"\u793E\u533A\u6210\u5458",avatar:We(e.author?.avatarText||e.author?.displayName||"A",1),date:Number.isNaN(a.getTime())?"":new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}).format(a).replaceAll("/","."),source:t}}var Ke,st=Ne(()=>{He();Ke=[{id:"quote",name:"\u84DD\u7D2B\u89C2\u70B9",color:"#6960ff",pointCount:0},{id:"cover",name:"\u7C89\u6A59\u5C01\u9762",color:"#f53fa6",pointCount:1},{id:"list",name:"\u6A59\u9EC4\u6E05\u5355",color:"#ff962d",pointCount:3},{id:"editorial",name:"\u84DD\u7D2B\u6742\u5FD7",color:"#6748ff",pointCount:1},{id:"cards",name:"\u6A59\u9EC4\u7EB8\u5361",color:"#ff8c34",pointCount:2},{id:"sidebar",name:"\u7C89\u6A59\u4FA7\u680F",color:"#f53fa6",pointCount:1},{id:"aqua-columns",name:"\u6E56\u9752\u53CC\u680F",color:"#00a4aa",pointCount:2},{id:"mint-split",name:"\u8584\u8377\u5206\u680F",color:"#0abd77",pointCount:0},{id:"blue-partner",name:"\u6D77\u84DD\u534F\u4F5C",color:"#0089ea",pointCount:1}]});function So(e){if(!e.naturalWidth||typeof document>"u")return{x:0,y:0};if(Nt.has(e))return Nt.get(e);let t=document.createElement("canvas");t.width=e.naturalWidth,t.height=e.naturalHeight;let n=t.getContext("2d");n.drawImage(e,0,0);let o=n.getImageData(0,0,t.width,t.height).data,a=t.width,r=-1,s=t.height,i=-1;for(let d=0;d<t.height;d++)for(let c=0;c<t.width;c++)o[(d*t.width+c)*4+3]<16||(a=Math.min(a,c),r=Math.max(r,c),s=Math.min(s,d),i=Math.max(i,d));let l=r<0?{x:0,y:0}:{x:(t.width/2-(a+r+1)/2)*70/t.width,y:(t.height/2-(s+i+1)/2)*70/t.height};return Nt.set(e,l),l}function ee(e,t,n,o,a,r,s){e.beginPath(),e.roundRect(t,n,o,a,r),e.fillStyle=s,e.fill()}function he(e,t,n,o,a,r,s){let i=e.createLinearGradient(t,n,t+o,n+a);return i.addColorStop(0,r),i.addColorStop(1,s),i}function be(e,t,n,o,a){e.beginPath(),e.arc(t,n,o,0,Math.PI*2),e.fillStyle=a,e.fill()}function Oe(e,t,n,o,a="#e4e4ec"){e.beginPath(),e.moveTo(t,n),e.lineTo(o,n),e.strokeStyle=a,e.lineWidth=1.5,e.stroke()}function Ge(e,t,n){let o=typeof Intl.Segmenter=="function"?new Intl.Segmenter("zh",{granularity:"grapheme"}):null;return String(t).split(`
`).flatMap(a=>{let r=o?Array.from(o.segment(a),c=>c.segment):Array.from(a),s=[];for(let c of r)/^[a-zA-Z0-9]$/.test(c)&&/^[a-zA-Z0-9]+$/.test(s.at(-1)||"")?s[s.length-1]+=c:s.push(c);let i=[],l="",d=s.flatMap(c=>e.measureText(c).width>n?Array.from(c):[c]);for(let c of d)l&&e.measureText(l+c).width>n&&(i.push(l),l=""),l+=c;return i.push(l),i})}function ye(e,t,n,o,a,r,s,{weight:i=400,color:l=ua,min:d=s,leading:c=1.35}={}){let u;do{if(e.font=`${i} ${s}px ${$e}`,u=Ge(e,t,a),u.length*s*c<=r||s<=d)break;s-=2}while(!0);let p=Math.max(1,Math.floor(r/(s*c))),m=u.length>p||u.some(g=>e.measureText(g).width>a);if(u=u.slice(0,p),m){let g=u.at(-1)||"";for(;g&&e.measureText(g+"\u2026").width>a;)g=Array.from(g).slice(0,-1).join("");u[u.length-1]=g+"\u2026"}return e.fillStyle=l,e.textBaseline="top",u.forEach((g,y)=>e.fillText(g,n,o+y*s*c)),m}function Ie(e,t,n=80,o=66,a=42){let r=So(t);e.drawImage(t,n+r.x,o+r.y,70,70),Se(e,"Achoverse \u793E\u533A",n+85,o,700,70,a,{weight:700,align:"left"})}function Se(e,t,n,o,a,r,s,{weight:i=400,color:l=ua,align:d="center"}={}){e.save(),e.font=`${i} ${s}px ${$e}`,e.textBaseline="alphabetic",e.textAlign="left";let c=e.measureText(t);for(;(c.width>a||c.actualBoundingBoxAscent+c.actualBoundingBoxDescent>r)&&s>12;)s-=2,e.font=`${i} ${s}px ${$e}`,c=e.measureText(t);if(c.width>a){for(;t&&e.measureText(t+"\u2026").width>a;)t=Array.from(t).slice(0,-1).join("");t+="\u2026",c=e.measureText(t)}let u=c.actualBoundingBoxLeft??0,p=c.actualBoundingBoxRight??c.width,m=c.actualBoundingBoxAscent??s*.8,g=c.actualBoundingBoxDescent??s*.2,y=d==="left"?n+u:n+a/2+(u-p)/2,k=o+r/2+(m-g)/2;e.fillStyle=l,e.fillText(t,y,k),e.restore()}function Me(e,t,n=65,o=1250,a=950,r="#f9d7e8"){if(Oe(e,n,o,n+a),be(e,n+43,o+80,43,r),Se(e,t.avatar,n,o+37,86,86,38,{weight:500}),a<800){ye(e,t.author,n+120,o+40,a-120,50,29,{weight:600}),ye(e,`${t.date} \xB7 ${t.source}`,n+120,o+90,a-120,40,20,{color:Ce,min:16});return}ye(e,t.author,n+120,o+44,a*.49,50,29,{weight:600}),ye(e,t.date,n+120,o+89,300,40,25,{color:Ce}),ye(e,t.source,n+a*.6,o+51,a*.4,80,23,{color:Ce,min:18})}function Ct(e,t,n=1190){t.forEach((o,a)=>{e.beginPath(),e.ellipse(855+a*60,n+a*14,65,42,0,Math.PI*1.1,Math.PI*1.9),e.strokeStyle=o,e.lineWidth=1.1,e.stroke()})}var $e,ua,Ce,Nt,it=Ne(()=>{$e="AcvPoster",ua="#16161d",Ce="#8a8a99",Nt=new WeakMap});function St(e,t,n,o,a=42,r=!1){e.save(),e.translate(n,o+5),e.scale(1.05,1.05),e.beginPath(),e.moveTo(2,58),e.bezierCurveTo(4,48,6,46,12,45),e.bezierCurveTo(12,31,20,18,31,13),e.lineTo(23,3),e.bezierCurveTo(28,-1,38,3,42,7),e.bezierCurveTo(58,3,66,10,68,19),e.bezierCurveTo(69,21,75,24,73,27),e.bezierCurveTo(69,29,64,25,59,26),e.bezierCurveTo(54,25,49,26,45,28),e.bezierCurveTo(43,35,38,38,34,36),e.lineTo(36,29),e.bezierCurveTo(23,33,14,43,12,50),e.bezierCurveTo(16,51,19,55,19,59),e.lineTo(10,56),e.lineTo(2,58),e.fillStyle=he(e,0,0,70,60,r?"#ff06b1":"#ff83a2",r?"#ff009b":"#ff557f"),e.fill(),be(e,60,16,1.2,"#ffffffbd"),e.restore(),Se(e,"Achoverse \u793E\u533A",n+88,o,750,70,a,{weight:700,color:"#080a0c",align:"left"})}function Et(e,t,n,o,a,r){e.save(),e.shadowColor="#25365b18",e.shadowBlur=22,e.shadowOffsetY=8,ee(e,t,n,o,a,r,"#fff"),e.restore()}function Tt(e,t,n,o){let a=o==="blue",r=o==="aqua";Oe(e,r?77:64,r?1267:1250,1016,"#dce1ec");let l=a?260:r?112:110,d=a?1332:1326,c=r?35:a?42:46;be(e,l,d,c,a?"#ff149c":r?"#ffd4c9":"#cef8eb"),Se(e,t.avatar,l-c,d-c,c*2,c*2,a?48:44,{color:a?"#fff":"#111",weight:500});let u=a?335:r?175:184;n(t.author,u,1288,a?590:485,48,30,{weight:700,color:"#111",min:22}),n(t.date,u,1333,a?155:300,42,27,{color:lt,min:18});let p=a?502:680;n(t.source,p,a?1335:1288,a?470:335,72,a?24:26,{color:lt,min:18})}function Eo(e,t,n,o){Et(e,31,33,1018,1380,29),St(e,n,78,72,40),o(t.category,79,175,900,60,34,{color:"#63666a",min:24}),o(t.title,78,250,925,245,94,{weight:900,color:"#020c19",min:44,leading:1.26}),o(t.summary,79,522,920,124,40,{color:"#63666a",min:26,leading:1.4});let a=Ve(t,"aqua-columns");a.forEach(({text:r,number:s},i)=>{let l=66+i*487,d=a.length===1?949:462;ee(e,l,680,d,500,29,he(e,l,680,d,500,"#effafb","#e5f5f8")),ee(e,l+37,712,d-74,6,0,he(e,l,712,d,0,"#0794aa","#1bbca2")),o(`0${s}`,l+37,739,d-74,93,72,{weight:800,color:"#00a4aa"});let c=r.includes(`
`)?r.indexOf(`
`):r.search(/[。！？!?]/u),u=c<0?r:r.slice(0,c),p=Array.from(u);/^[\p{Script=Han}]+$/u.test(u)&&p.length>=8&&p.length<=12&&(u=p.slice(0,Math.ceil(p.length/2)).join("")+`
`+p.slice(Math.ceil(p.length/2)).join(""));let m=c<0?"":r.slice(c+1).trim();o(u,l+38,840,d-76,m?170:300,62,{weight:800,min:30,color:"#020c19",leading:1.3}),m&&o(m,l+39,1025,d-78,132,38,{min:24,color:"#63666a",leading:1.42})}),Tt(e,t,o,"aqua")}function To(e,t,n,o){Et(e,24,28,1032,1384,36),St(e,n,82,60,44),Oe(e,64,155,1016,"#dce1ec"),o(t.category,87,253,520,75,42,{weight:700,color:"#00ad58",min:24}),e.save(),e.beginPath(),e.roundRect(632,216,387,829,36),e.clip(),ee(e,632,216,387,829,36,he(e,632,216,387,829,"#dcfaf1","#d4faee")),be(e,925,306,146,"#7de4c24d"),e.restore();let a=112,r;do{if(e.font=`900 ${a}px ${$e}`,r=Ge(e,t.title,525),r.length*a*1.32<=620||a<=46)break;a-=2}while(!0);o(t.title,84,382,525,620,a,{weight:900,color:"#002a1d",min:46,leading:1.32}),r.length*a*1.32<=620&&o(r.at(-1),84,382+(r.length-1)*a*1.32,525,a*1.32+1,a,{weight:900,color:"#0abd77",leading:1.32}),o(t.summary,666,796,342,218,38,{weight:700,color:"#002c21",min:24,leading:1.42}),Tt(e,t,o,"mint")}function zo(e,t,n,o){Et(e,21,37,1038,1380,48),St(e,n,75,82,46,!0),o(t.category,84,219,910,70,42,{color:lt,min:24,weight:600}),e.save(),e.beginPath(),e.roundRect(419,285,598,440,48),e.clip(),ee(e,419,285,598,440,48,he(e,419,285,598,440,"#0062de","#2ed5ef")),be(e,1015,800,248,"#ffffff30"),e.restore();let a=t.title.indexOf(`
`),r=t.title.search(/[，,：:]/u),s=a>=0?a:r,i=s>=0?t.title.slice(0,s+(a>=0?0:1)):"",l=i&&Array.from(i).length<=10;l&&o(i,79,326,420,115,88,{weight:900,color:ma,min:42,leading:1.2}),o(l?t.title.slice(s+1).trim():t.title,477,412,500,279,86,{weight:800,color:"#fff",min:38,leading:1.35}),o(t.summary,81,840,921,114,64,{weight:800,color:ma,min:30,leading:1.35}),o(t.points[0]||"",81,960,920,205,47,{weight:600,color:lt,min:28,leading:1.42}),Tt(e,t,o,"blue")}var ma,lt,fa,va=Ne(()=>{it();st();ma="#00132f",lt="#626b85";fa={"aqua-columns":Eo,"mint-split":To,"blue-partner":zo}});function At(e,t,n,o,a,r=!1){if(e.save(),e.beginPath(),e.roundRect(t,n,o,a,32),e.clip(),ee(e,t,n,o,a,32,he(e,t,n,o,a,r?"#ff852e":"#f52ba4",r?"#ffd744":"#ff7a50")),r){e.translate(t+o*.8,n+a*.4),e.rotate(-.55);let s=o*(o<400?.75:.36),i=Math.min(120,a*.28);ee(e,-s*.6,-i*.6,s,i,i/2,"#ffffff35"),ee(e,-s*.8,i*.4,s,i,i/2,"#ffffff35")}else be(e,t+o*.86,n+a*.12,a*.52,"#fff0f52b"),be(e,t+o*.66,n+a*1.08,a*.58,"#fff0f52b"),be(e,t+o*1.1,n+a*.9,a*.5,"#fff0f525");e.restore()}function zt(e,t,n,o=1){e.save(),e.translate(t,n),e.scale(o,o),e.rotate(-.32),ee(e,0,0,270,270,38,he(e,0,0,270,270,"#b0a3ff77","#64edfa77")),ee(e,-60,110,205,205,32,he(e,0,0,205,205,"#bca7ff77","#54e5ff77")),e.restore()}function ha(e,t,n,o,a){if(!t.trim())return;e.font="600 32px AcvPoster";let r=Math.min(500,e.measureText(t).width+64);ee(e,n,o,r,66,33,"#ffffff"),Se(e,t,n+24,o,r-48,66,32,{weight:600,color:a})}function ba(e){let t=e.indexOf(`
`)>=0?e.indexOf(`
`):e.search(/[。！？!?]/u);return t>=0?[e.slice(0,t),e.slice(t+1).trim()]:[e,""]}function Po(e,t,n,o){ee(e,24,30,1032,1380,42,"#fff"),e.save(),e.beginPath(),e.roundRect(24,30,1032,1380,42),e.clip(),zt(e,835,0,1.05),zt(e,805,885,1.03),e.restore(),Ie(e,n),t.category.trim()&&(ee(e,80,210,265,68,34,"#e3d5ff"),Se(e,t.category,100,210,225,68,32,{color:"#6932da",weight:600})),ye(e,"\u201C",10,320,200,155,180,{weight:900,color:"#b68afa",leading:1}),o(t.title,80,480,950,300,104,{weight:900,min:56,leading:1.32}),o(t.summary,82,810,650,230,51,{color:Ce,min:30}),Me(e,t,64,1250,950,"#e1d9ff")}function Do(e,t,n,o){Ie(e,n,55,30,40),ee(e,20,105,1040,1305,52,"#fff"),At(e,45,134,990,648),ha(e,t.category,110,245,"#f53fa6"),o(t.title,108,365,860,310,99,{weight:700,color:"#fff",min:58}),o(t.summary,77,850,925,120,63,{weight:700,min:38}),o(t.points[0]||"",78,1e3,920,100,36,{color:Ce,min:28}),Ct(e,["#f894c1","#f9ae99"]),Me(e,t)}function Ao(e,t,n,o){ee(e,30,28,1020,1385,42,"#fff"),Ie(e,n,80,65),At(e,30,142,1020,405,!0),ha(e,t.category,80,200,"#bf4e13"),o(t.title,80,305,905,206,78,{weight:900,min:46}),o(t.summary,80,575,925,118,34,{color:Ce,min:26});let a=Ve(t,"list"),r=a.length===1?300:a.length===2?210:140;a.forEach(({text:s,number:i},l)=>{let d=720+l*(r+20);ee(e,74,d,932,r,30,"#f2f2f6"),be(e,158,d+r/2,42,"#ff8d25"),Se(e,`0${i}`,116,d+r/2-42,84,84,40,{weight:700,color:"#fff"}),e.beginPath(),e.moveTo(240,d+40),e.lineTo(240,d+r-40),e.strokeStyle="#c8c8d3",e.lineWidth=2,e.stroke();let[c,u]=ba(s);o(c,280,d+20,675,u?r*.43:r-40,39,{weight:700,min:25}),u&&o(u,280,d+r*.55,675,r*.4,34,{color:Ce,min:25})}),Ct(e,["#f3cf84","#ffb878"],1232),Me(e,t,72,1280,936,"#ffe1ce")}function Lo(e,t,n,o){Ie(e,n,50,28),ee(e,30,118,1020,1295,38,"#fff"),ye(e,"COMMUNITY NOTES",84,190,620,50,30,{color:"#73737c",weight:500}),zt(e,790,160,.25),o(t.category,800,188,200,50,28,{weight:600,min:18}),Oe(e,84,260,995,"#a877ff"),ee(e,84,350,78,78,0,he(e,84,350,78,78,"#a865ff","#69adff"));let a=120,r;do{if(e.font=`900 ${a}px AcvPoster`,r=Ge(e,t.title,770),r.length*a*1.35<=480||a<=58)break;a-=2}while(!0);o(t.title,190,330,770,480,a,{weight:900}),r[1]&&o(r[1],190,330+a*1.35,770,a*1.35,a,{weight:900,color:"#5136ee"}),o(t.summary,102,855,875,170,42,{color:"#777780",min:30}),t.points[0]&&(ee(e,107,1050,5,145,0,"#dfd1ff"),o(t.points[0],148,1050,820,150,40,{min:28})),Me(e,t,84,1265,910,"#e2dbff")}function $o(e,t,n,o){ee(e,30,34,1020,1377,40,"#fff"),Ie(e,n,80,80,40),o(t.category,80,180,600,60,31,{color:"#777780",min:22}),At(e,739,196,270,270,!0),o(t.title,79,260,640,230,70,{weight:900,min:44}),o(t.summary,80,510,925,115,34,{color:Ce,min:26});let a=Ve(t,"cards");a.forEach(({text:r,number:s},i)=>{let l=76+i*36,d=655+i*275,c=a.length===1?470:250;e.save(),e.shadowColor="#17172614",e.shadowBlur=20,e.shadowOffsetY=10,ee(e,l,d,900-i*12,c,30,"#f5f3f3"),e.restore(),ye(e,`0${s}`,l+50,d+20,120,65,42,{weight:700,color:"#ff8b29"});let[u,p]=ba(r);o(u,l+50,d+85,790,p?65:c-105,43,{weight:700,min:28}),p&&o(p,l+50,d+155,790,c-170,33,{color:"#777780",min:25})}),Me(e,t,76,1270,930,"#ffe0d6")}function Oo(e,t,n,o){ee(e,42,47,996,1346,42,"#fff"),e.save(),e.beginPath(),e.roundRect(42,47,996,1346,42),e.clip(),ee(e,42,47,134,1346,0,he(e,42,47,134,1346,"#f52da7","#ff7d43")),be(e,-85,660,263,"#ffffff20"),e.restore(),Ie(e,n,236,112,40),o(t.category,237,255,735,70,36,{color:"#777780",min:22}),o(t.title,236,355,730,415,106,{weight:900,min:58}),o(t.summary,240,820,720,180,43,{color:"#777780",min:28}),Oe(e,240,1030,320,"#777780"),o(t.points[0]||"",240,1080,710,130,36,{min:26}),Me(e,t,238,1250,725)}function xa(e,t,n,o){if(!ga[t])throw new Error("\u8BF7\u9009\u62E9\u6709\u6548\u7684\u6D77\u62A5\u6837\u5F0F");e.fillStyle="#ededf2",e.fillRect(0,0,1080,1440);let a=!1,r=(...s)=>{let i=ye(e,...s);return a||=i,i};return ga[t](e,n,o,r),{clipped:a}}var ga,ya=Ne(()=>{it();va();st();ga={quote:Po,cover:Do,list:Ao,editorial:Lo,cards:$o,sidebar:Oo,...fa}});async function Lt(e){let t=e.assetUrl("/fonts/noto-sans-sc-v1.woff2");if(!ct.has(t)){let o=new FontFace($e,`url(${JSON.stringify(t)})`,{weight:"100 900"}).load().then(a=>(document.fonts.add(a),a)).catch(a=>{throw ct.delete(t),a});ct.set(t,o)}dt||(dt=new Promise((o,a)=>{let r=new Image;r.onload=()=>o(r),r.onerror=()=>{dt=null,a(new Error("\u54C1\u724C\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"))},r.src=nt}));let[,n]=await Promise.all([ct.get(t),dt]);return n}async function $t(e,t,n){let o=await Lt(e),a=document.createElement("canvas");a.width=1080,a.height=1440;let r=a.getContext("2d");if(!r)throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u56FE\u7247\u751F\u6210\uFF0C\u8BF7\u6362\u7528\u6D4F\u89C8\u5668\u6253\u5F00");let s=xa(r,t,n,o),i=await new Promise(l=>a.toBlob(l,"image/png"));if(!i)throw new Error("\u56FE\u7247\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");return{blob:i,clipped:s.clipped}}function Ot(e,t){return`${Array.from(e).slice(0,35).join("").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"_")||"\u793E\u533A\u5E16\u5B50"}-${t}.png`}function wa(e,t){let n=document.createElement("a");n.href=e,n.download=t,document.body.append(n),n.click(),n.remove()}function ka(e){return!!navigator.canShare?.({files:[new File([e],"poster.png",{type:"image/png"})]})}async function Na(e,t){await navigator.share({files:[new File([e],t,{type:"image/png"})]})}var ct,dt,Ca=Ne(()=>{xt();it();ya();ct=new Map});function Sa({render:e,onStart:t,onResult:n,onError:o,delay:a=160}){let r=0,s,i=!1;return{update(l,d){if(i)return;let c=++r;clearTimeout(s),t(),s=setTimeout(async()=>{try{let u=await e(l,d);!i&&c===r&&n(u,l,d)}catch(u){!i&&c===r&&o(u)}},a)},dispose(){i=!0,r++,clearTimeout(s)}}}var Ea=Ne(()=>{});var Ta={};Ft(Ta,{PosterDialog:()=>Io});function Io({api:e,postId:t,me:n,onLogin:o,onClose:a}){let r=L.default.useRef(null),s=L.default.useRef(0),[i,l]=L.default.useState(null),[d,c]=L.default.useState("quote"),[u,p]=L.default.useState(""),[m,g]=L.default.useState(!1),[y,k]=L.default.useState(null),[$,H]=L.default.useState({}),[I,P]=L.default.useState(0),[T,U]=L.default.useState(!1);L.default.useEffect(()=>{let w=r.current,v=document.activeElement;w.showModal();let f=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{s.current++,w.close(),document.body.style.overflow=f,v?.isConnected&&v.focus()}},[]),L.default.useEffect(()=>{if(!n)return;let w=!0,v=[];p("");async function f(){try{let{account:b}=await e.me();if(!w)return;if(!b){U(!0);return}let{post:M}=await e.post(t),G=new URL(e.assetUrl("/")||"/",window.location.href).host,me=pa(M,G);if(!w)return;l(me),await Lt(e);for(let ke of Ke){if(!w)return;let{blob:_}=await $t(e,ke.id,me);if(!w)return;let X=URL.createObjectURL(_);v.push(X),H(xe=>({...xe,[ke.id]:X}))}}catch(b){w&&p(`\u65E0\u6CD5\u51C6\u5907\u6D77\u62A5\uFF1A${b.message}`)}}return f(),()=>{w=!1,v.forEach(b=>URL.revokeObjectURL(b))}},[e,t,I,n]),L.default.useEffect(()=>()=>{y&&URL.revokeObjectURL(y.url)},[y]),L.default.useEffect(()=>{if(!i||!n||T)return;let w=++s.current,v=Sa({render:(f,b)=>$t(e,f,b),onStart(){g(!0),p(""),k(null)},onResult(f){w===s.current&&(k({...f,url:URL.createObjectURL(f.blob)}),g(!1))},onError(f){w===s.current&&(p(`\u9884\u89C8\u66F4\u65B0\u5931\u8D25\uFF1A${f.message}`),g(!1))}});return v.update(d,i),()=>{w===s.current&&s.current++,v.dispose()}},[e,i,d,n,T]);function A(w){s.current++,g(!0),k(null),l(w),p("")}async function q(){let w=s.current;try{let{account:v}=await e.me();if(w!==s.current)return;if(!v){k(null),U(!0);return}wa(y.url,Ot(i.title,d))}catch{p("\u65E0\u6CD5\u786E\u8BA4\u767B\u5F55\u72B6\u6001\uFF0C\u8BF7\u91CD\u8BD5")}}async function K(){try{await Na(y.blob,Ot(i.title,d))}catch(w){w.name!=="AbortError"&&p("\u5206\u4EAB\u672A\u5B8C\u6210\uFF0C\u53EF\u4EE5\u957F\u6309\u539F\u56FE\u6216\u4FDD\u5B58\u56FE\u7247")}}let x=y?.url,W=Ke.find(w=>w.id===d).pointCount;return L.default.createElement("dialog",{ref:r,className:"acv-modal acv-poster-dialog","aria-labelledby":"acv-poster-title",onCancel:w=>{w.preventDefault(),a()}},L.default.createElement("header",{className:"acv-poster-heading"},L.default.createElement("div",null,L.default.createElement("h2",{id:"acv-poster-title",className:"acv-modal-title"},"\u751F\u6210\u5E16\u5B50\u6D77\u62A5"),L.default.createElement("p",null,"\u9009\u62E9\u6837\u5F0F\uFF0C\u8C03\u6574\u6587\u5B57\uFF0C\u4FDD\u5B58\u4F60\u7684\u5206\u4EAB\u56FE\u7247\u3002")),L.default.createElement("button",{type:"button",className:"acv-btn ghost","aria-label":"\u5173\u95ED\u6D77\u62A5\u9762\u677F",onClick:a},"\xD7")),u&&L.default.createElement("div",{className:"acv-error",role:"alert"},u," ",L.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:()=>{H({}),P(w=>w+1)}},"\u91CD\u65B0\u52A0\u8F7D")),!n||T?L.default.createElement("div",{className:"acv-notice"},"\u767B\u5F55\u540E\u5373\u53EF\u9009\u62E9\u4E5D\u79CD\u6837\u5F0F\uFF0C\u751F\u6210\u5E76\u4FDD\u5B58\u5E16\u5B50\u6D77\u62A5\u3002",L.default.createElement("button",{className:"acv-btn brand",type:"button",onClick:o},"\u767B\u5F55\u540E\u751F\u6210\u6D77\u62A5")):i?L.default.createElement("div",{className:"acv-poster-layout"},L.default.createElement("section",{className:"acv-poster-controls","aria-label":"\u6D77\u62A5\u8BBE\u7F6E"},L.default.createElement("fieldset",{className:"acv-poster-choices"},L.default.createElement("legend",null,"\u9009\u62E9\u6837\u5F0F"),Ke.map(w=>L.default.createElement("label",{key:w.id,className:d===w.id?"is-active":""},L.default.createElement("input",{type:"radio",name:"poster-style",value:w.id,checked:d===w.id,onChange:()=>{A(i),c(w.id)}}),$[w.id]?L.default.createElement("img",{src:$[w.id],alt:""}):L.default.createElement("span",{className:"acv-poster-thumb-loading",style:{background:w.color}}),L.default.createElement("span",null,w.name)))),L.default.createElement("label",{className:"acv-poster-field"},"\u6D77\u62A5\u6807\u9898 ",L.default.createElement("small",null,"\u6700\u591A 80 \u5B57"),L.default.createElement("textarea",{className:"acv-input",maxLength:80,rows:2,value:i.title,onChange:w=>A({...i,title:w.target.value})})),L.default.createElement("label",{className:"acv-poster-field"},"\u6D77\u62A5\u6807\u7B7E ",L.default.createElement("small",null,"\u9ED8\u8BA4\u53D6\u81EA\u5E16\u5B50\u6240\u5C5E\u677F\u5757\uFF0C\u53EF\u4FEE\u6539\u6216\u6E05\u7A7A"),L.default.createElement("input",{className:"acv-input",maxLength:24,value:i.category,onChange:w=>A({...i,category:w.target.value})})),L.default.createElement("label",{className:"acv-poster-field"},"\u6B63\u6587\u6458\u8981 ",L.default.createElement("small",null,"\u6700\u591A 180 \u5B57"),L.default.createElement("textarea",{className:"acv-input",maxLength:180,rows:3,value:i.summary,onChange:w=>A({...i,summary:w.target.value})})),Array.from({length:W},(w,v)=>L.default.createElement("label",{className:"acv-poster-field",key:v},"\u8981\u70B9 ",v+1," ",L.default.createElement("small",null,"\u53EF\u7559\u7A7A\uFF0C\u6700\u591A 120 \u5B57"),L.default.createElement("textarea",{className:"acv-input",rows:2,maxLength:120,value:i.points[v]||"",onChange:f=>{let b=[...i.points];b[v]=f.target.value,A({...i,points:b})}}))),L.default.createElement("p",{className:"acv-poster-hint"},"\u4EC5\u8C03\u6574\u672C\u6B21\u6D77\u62A5\uFF0C\u4E0D\u4F1A\u4FEE\u6539\u539F\u5E16\u3002\u5F53\u524D\u6837\u5F0F\u5C55\u793A ",W," \u6761\u8981\u70B9\uFF1B\u5207\u6362\u6837\u5F0F\u4FDD\u7559\u5DF2\u586B\u5185\u5BB9\u3002\u6587\u5B57\u4FEE\u6539\u540E\u81EA\u52A8\u66F4\u65B0\u53F3\u4FA7\u56FE\u7247\u3002")),L.default.createElement("section",{className:"acv-poster-preview","aria-label":"\u6D77\u62A5\u9884\u89C8"},L.default.createElement("div",{className:"acv-poster-canvas","aria-busy":m},x?L.default.createElement("img",{src:x,alt:"\u5F53\u524D\u6587\u5B57\u751F\u6210\u7684\u5E16\u5B50\u6D77\u62A5\uFF0C\u53EF\u957F\u6309\u4FDD\u5B58"}):L.default.createElement("p",{role:"status"},m?"\u6B63\u5728\u66F4\u65B0\u6D77\u62A5\u9884\u89C8\u2026":"\u6B63\u5728\u51C6\u5907\u5B57\u4F53\u4E0E\u6837\u5F0F\u9884\u89C8\u2026")),y?.clipped&&L.default.createElement("p",{role:"status"},"\u90E8\u5206\u6587\u5B57\u8F83\u957F\uFF0C\u5DF2\u7701\u7565\u663E\u793A\uFF1B\u53EF\u7F29\u77ED\u6587\u6848\u540E\u91CD\u65B0\u751F\u6210\u3002"),L.default.createElement("div",{className:"acv-poster-actions"},L.default.createElement("button",{className:"acv-btn primary",type:"button",disabled:m||!y||!i.title.trim(),onClick:q},"\u4FDD\u5B58\u56FE\u7247"),y&&L.default.createElement(L.default.Fragment,null,ka(y.blob)&&L.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:K},"\u5206\u4EAB\u56FE\u7247"))),y&&L.default.createElement("p",{className:"acv-poster-hint"},"1080 \xD7 1440 PNG \xB7 \u624B\u673A\u53EF\u957F\u6309\u4E0A\u65B9\u539F\u56FE\u4FDD\u5B58\uFF1B\u90E8\u5206\u5E94\u7528\u9700\u8981\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u3002"))):L.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u5E16\u5B50\u2026"))}var L,za=Ne(()=>{L=Z(require("react"),1);st();Ca();Ea()});var rn={};Ft(rn,{apply:()=>nn,inject:()=>en});module.exports=co(rn);var ue=Z(require("react"),1);var ht=`/* Achoverse \u793E\u533A\uFF1A\u6D45\u7070\u753B\u5E03 + \u767D\u8272\u5927\u5706\u89D2\u5361\u7247 + \u7C89\u7D2B\u6E10\u53D8\u4E3B\u89C6\u89C9\u3002 */

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

.acv-recent-link { display: block; color: inherit; text-decoration: none; }
.acv-recent-link:hover .acv-recent-title, .acv-post-open:hover .acv-post-title { color: var(--acv-pink); }
.acv-recent-link:focus-visible, .acv-post-open:focus-visible { outline: 2px solid var(--acv-pink); outline-offset: 3px; border-radius: 3px; }
.acv-recent-excerpt { display: block; margin-top: 3px; color: var(--acv-muted); font-size: 12px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

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

.acv-post-summary {
  margin-top: 20px;
  padding: 16px 18px;
  border: 1px solid var(--acv-line);
  border-radius: 12px;
  background: var(--acv-surface, #fff);
  line-height: 1.7;
}

.acv-post-summary h2 { margin: 0 0 8px; font-size: 16px; }
.acv-post-summary p { margin: 4px 0; overflow-wrap: anywhere; }
.acv-post-summary small { color: var(--acv-muted); }

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

/* 3D \u753B\u5ECA\u6309\u53EF\u7528\u5BBD\u5EA6\u5207\u6362\u3002\u7F51\u683C\u7684\u884C\u5217\u5355\u4F4D\u76F8\u7B49\uFF0C\u8DE8\u4E24\u683C\u4ECD\u4E3A\u6B63\u65B9\u5F62\u3002 */
.acv-world-gallery { container: acv-world-gallery / inline-size; }
.acv-world-grid {
  display: grid;
  --acv-world-gap: 16px;
  --acv-world-columns: 6;
  grid-template-columns: repeat(var(--acv-world-columns), minmax(0, 1fr));
  grid-auto-rows: calc((100cqw - (var(--acv-world-columns) - 1) * var(--acv-world-gap)) / var(--acv-world-columns));
  gap: var(--acv-world-gap);
}
.acv-world-card { min-width: 0; min-height: 0; background: #203b53; }
.acv-world-card[data-world-size="hero"] { grid-column: span 3; grid-row: span 2; }
.acv-world-card[data-world-size="large"] { grid-column: span 2; grid-row: span 2; }
.acv-world-card:hover { transform: none; }
.acv-world-card .acv-world-cover { object-position: center 38%; }
.acv-world-card::after { content: ''; position: absolute; inset: 35% 0 0; z-index: 2; background: linear-gradient(transparent, #102033df); pointer-events: none; }
.acv-world-card-title { position: absolute; bottom: 18px; left: 18px; right: 18px; z-index: 3; color: #fff; font-size: 20px; line-height: 1.3; font-weight: 600; text-shadow: 0 1px 8px #10203380; overflow-wrap: anywhere; }
.acv-world-card[data-world-size="small"] .acv-world-card-title { left: 12px; right: 12px; bottom: 12px; font-size: 15px; }
.acv-world-card:focus-visible { outline: 3px solid #f53fa6; outline-offset: 4px; z-index: 3; }

@container acv-world-gallery (width < 780px) {
  .acv-world-grid { --acv-world-columns: 3; }
}
@container acv-world-gallery (width < 450px) {
  .acv-world-grid { --acv-world-gap: 14px; grid-template-columns: minmax(0, 1fr); grid-auto-rows: auto; }
  .acv-world-grid .acv-world-card { grid-area: auto; aspect-ratio: 1; width: 100%; }
  .acv-world-grid .acv-world-card[data-world-size="hero"] { aspect-ratio: 3 / 2; }
  .acv-world-grid .acv-world-card[data-world-size="small"] { width: 72%; }
}

/* Portal \u76F4\u63A5\u8986\u76D6\u5F53\u524D\u6587\u6863\u89C6\u53E3\uFF0C\u821E\u53F0\u548C\u63D0\u793A\u4E0D\u53C2\u4E0E\u793E\u533A\u9875\u9762\u6392\u7248\u3002 */
.acv-world-fullscreen { position: fixed; inset: 0; height: 100vh; height: 100dvh; z-index: 90; background: #0c1e33; color: #e4ecf3; font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif; }
.acv-world-fullscreen .acv-world-live { position: absolute; inset: 0; display: block; }
.acv-world-fullscreen .acv-world-canvas { width: 100%; height: 100%; border-radius: 0; box-shadow: none; }
.acv-world-back { position: absolute; z-index: 2; top: max(16px, env(safe-area-inset-top)); left: max(16px, env(safe-area-inset-left)); padding: 10px 16px; border: 1px solid #ffffff50; border-radius: 12px; background: #102033b3; color: #fff; font: inherit; cursor: pointer; backdrop-filter: blur(12px); }
.acv-world-back:hover { background: #203b53e6; }
.acv-world-back:focus-visible { outline: 3px solid #fff; outline-offset: 3px; }
.acv-world-fullscreen .acv-world-hint { position: absolute; bottom: max(16px, env(safe-area-inset-bottom)); left: 16px; right: 16px; color: #fff; text-shadow: 0 1px 6px #102033; pointer-events: none; font-size: 12px; }
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

/* \u5E16\u5B50\u6D77\u62A5\uFF1A\u5165\u53E3\u5BF9\u6240\u6709\u8BFB\u8005\u53EF\u89C1\uFF1B\u6D77\u62A5\u672C\u8EAB\u7531 canvas \u7ED8\u5236\u3002 */
.acv-post-poster-panel { position: relative; }
.acv-post-poster-entry { position: absolute; right: 20px; top: 16px; }
.acv-post-poster-panel > .acv-post-meta { padding-right: 48px; }
.acv-poster-icon { display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; padding: 0; border: 0; background: transparent; color: var(--acv-muted); cursor: pointer; flex-shrink: 0; transition: color .3s; }
.acv-poster-icon svg { width: 16px; height: 16px; }
.acv-poster-icon:hover { color: var(--acv-pink); }
.acv-poster-icon:focus-visible { outline: 2px solid var(--acv-pink); outline-offset: 3px; }
.acv-post-row-heading { display: flex; align-items: flex-start; gap: 16px; width: 100%; }
.acv-post-open { display: flex; flex: 1; min-width: 0; flex-direction: column; gap: 8px; border: 0; padding: 0; text-align: left; font: inherit; color: inherit; background: none; cursor: pointer; text-decoration: none; }
.acv-post-row--poster { cursor: default; }
.acv-poster-dialog { width: min(1050px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); overflow: auto; border: 0; color: var(--acv-ink); font: 14px/1.5 -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif; padding: 28px; }
.acv-poster-dialog::backdrop { background: #12121c70; backdrop-filter: blur(3px); }
.acv-poster-heading { display: flex; justify-content: space-between; gap: 20px; align-items: flex-start; margin-bottom: 24px; }
.acv-poster-heading p { margin: 8px 0 0; color: var(--acv-muted); }
.acv-poster-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 28px; }
.acv-poster-choices { margin: 0 0 24px; padding: 0; border: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
.acv-poster-choices legend { margin-bottom: 12px; font-weight: 600; }
.acv-poster-choices label { position: relative; border: 2px solid var(--acv-line); padding: 5px; border-radius: 12px; cursor: pointer; font-size: 12px; text-align: center; }
.acv-poster-choices label.is-active { border-color: var(--acv-pink); background: #fff5fa; }
.acv-poster-choices label:focus-within { outline: 2px solid var(--acv-pink); outline-offset: 2px; }
.acv-poster-choices input { position: absolute; width: 1px; height: 1px; opacity: 0; }
.acv-poster-choices img, .acv-poster-thumb-loading { display: block; width: 100%; aspect-ratio: 3 / 4; object-fit: contain; border-radius: 6px; margin-bottom: 5px; }
.acv-poster-thumb-loading { opacity: .15; }
.acv-poster-field { display: block; margin-bottom: 16px; font-weight: 600; }
.acv-poster-field small { color: var(--acv-muted); font-weight: 400; }
.acv-poster-field textarea { display: block; margin-top: 8px; resize: vertical; width: 100%; }
.acv-poster-preview { min-width: 0; align-self: start; position: sticky; top: 0; }
.acv-poster-canvas { width: 100%; aspect-ratio: 3 / 4; border-radius: 14px; background: var(--acv-canvas); display: grid; place-items: center; }
.acv-poster-canvas > img { width: 100%; height: auto; display: block; border-radius: 14px; -webkit-touch-callout: default; user-select: auto; }
.acv-poster-canvas > p { padding: 24px; color: var(--acv-muted); }
.acv-poster-actions { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
.acv-poster-hint { color: var(--acv-muted); font-size: 12px; line-height: 1.6; }
@media (max-width: 640px) {
  .acv-poster-dialog { padding: 20px; }
  .acv-poster-layout { grid-template-columns: minmax(0, 1fr); gap: 20px; }
  .acv-poster-preview { position: static; }
}

/* \u5E16\u5B50\u7F16\u8F91\u6CBF\u7528\u8F93\u5165\u7EC4\u4EF6\uFF0C\u7A84\u5C4F\u5141\u8BB8\u64CD\u4F5C\u6362\u884C\u3002 */
.acv-post-editor { margin-top: 20px; min-width: 0; }
.acv-post-editor .acv-row, .acv-mod-actions, .acv-article-meta { flex-wrap: wrap; }

/* \u677F\u5757\u5206\u9875\uFF1A\u9875\u7801\u6298\u53E0\u4E0E\u624B\u673A\u6362\u884C\uFF0C\u5F53\u524D\u4F4D\u7F6E\u4E0D\u4F9D\u8D56\u989C\u8272\u4F20\u8FBE\u3002 */
.acv-pagination { border-top: 1px solid var(--acv-line, #ececf1); margin-top: 12px; padding: 16px 0; color: var(--acv-muted); }
.acv-pagination p { margin: 0 0 12px; font-size: 13px; }
.acv-pagination-buttons { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; }
.acv-pagination-buttons .acv-btn { min-width: 36px; padding: 8px 10px; }
.acv-pagination-buttons [aria-current="page"] { background: var(--acv-ink, #242430); color: white; opacity: 1; }
`;function jt(e,t){let n=[...new Set([1,e-1,e,e+1,t])].filter(o=>o>=1&&o<=t).sort((o,a)=>o-a);return n.flatMap((o,a)=>a&&o-n[a-1]>1?["gap-"+o,o]:[o])}function qt(e,t,n=1){return{name:"post",id:e,from:{name:"space",slug:t,page:n}}}function Ht(e){return{name:"space",slug:e.slug,page:e.page||1}}function Yt(e){let t=0,n;return{cancel(){t+=1,n?.abort()},async load(o,a,{success:r,failure:s,settled:i}){let l=++t;n?.abort(),n=new AbortController;try{let d=await e.space(o,{limit:20,offset:(a-1)*20,signal:n.signal});l===t&&r(d)}catch(d){l===t&&d.name!=="AbortError"&&s(d)}finally{l===t&&i()}}}}var S=Z(require("react"),1);function Wt({base:e="",token:t=null,credentials:n="same-origin",onToken:o}={}){let a=t;function r(i){a=i||null,o?.(a)}async function s(i,{method:l="GET",body:d,signal:c}={}){let u={};d!==void 0&&(u["content-type"]="application/json"),a&&(u.authorization=`Bearer ${a}`);let p=await fetch(e+i,{method:l,headers:u,body:d===void 0?void 0:JSON.stringify(d),credentials:a?"omit":n,cache:"no-store",signal:c}),m=await p.text(),g={};try{g=m?JSON.parse(m):{}}catch{g={error:m.slice(0,200)}}if(!p.ok){let y=new Error(g?.error||`HTTP ${p.status}`);throw y.code=g?.code,y.status=p.status,y}return g}return{assetUrl:i=>e.replace(/\/$/,"")+i,raw:s,setToken:r,getToken:()=>a,me:()=>s("/api/auth/me"),home:()=>s("/api/home"),bootstrap:()=>s("/api/bootstrap"),spaces:()=>s("/api/spaces"),zoneSpaces:i=>s(`/api/zones/${encodeURIComponent(i)}`),space:(i,{limit:l=20,offset:d=0,signal:c}={})=>s(`/api/spaces/${encodeURIComponent(i)}?limit=${l}&offset=${d}`,{signal:c}),post:i=>s(`/api/posts/${encodeURIComponent(i)}`),captcha:()=>s("/api/captcha"),register:i=>s("/api/auth/register",{method:"POST",body:i}),login:i=>s("/api/auth/login",{method:"POST",body:i}),logout:()=>s("/api/auth/logout",{method:"POST",body:{}}),resend:()=>s("/api/auth/resend",{method:"POST",body:{}}),verify:i=>s("/api/auth/verify",{method:"POST",body:{token:i}}),updatePost:(i,l)=>s(`/api/posts/${encodeURIComponent(i)}`,{method:"PATCH",body:l}),deletePost:i=>s(`/api/posts/${encodeURIComponent(i)}`,{method:"DELETE"}),createPost:i=>s("/api/posts",{method:"POST",body:i}),createComment:(i,l)=>s(`/api/posts/${encodeURIComponent(i)}/comments`,{method:"POST",body:l}),updateProfile:i=>s("/api/account/profile",{method:"POST",body:i}),requestEmailChange:i=>s("/api/account/email",{method:"POST",body:{email:i}}),confirmEmailChange:i=>s("/api/account/email/confirm",{method:"POST",body:{token:i}}),changePassword:i=>s("/api/account/password",{method:"POST",body:i}),forgotPassword:i=>s("/api/account/password/forgot",{method:"POST",body:{email:i}}),resetPassword:i=>s("/api/account/password/reset",{method:"POST",body:i}),dmThreads:()=>s("/api/dm/threads"),dmUnread:()=>s("/api/dm/unread"),dmThread:(i,l)=>s(`/api/dm/thread/${encodeURIComponent(i)}${l?`?before=${encodeURIComponent(l)}`:""}`),dmOpenWith:i=>s("/api/dm/thread",{method:"POST",body:i}),dmSend:(i,l)=>s(`/api/dm/thread/${encodeURIComponent(i)}`,{method:"POST",body:{body:l}}),user:i=>s(`/api/users/${encodeURIComponent(i)}`),submitFeedback:i=>s("/api/feedback",{method:"POST",body:i}),adminFeedback:(i=0)=>s(`/api/admin/feedback?offset=${encodeURIComponent(i)}`),worldMessages:(i,l)=>s(`/api/worlds/${encodeURIComponent(i)}/messages`,{signal:l}),worldMessageHistory:(i,l="",d)=>s(`/api/worlds/${encodeURIComponent(i)}/messages/history?cursor=${encodeURIComponent(l)}`,{signal:d}),myWorldMessage:(i,l)=>s(`/api/worlds/${encodeURIComponent(i)}/messages/mine`,{signal:l}),createWorldMessage:(i,l)=>s(`/api/worlds/${encodeURIComponent(i)}/messages`,{method:"POST",body:l}),editWorldMessage:(i,l,d)=>s(`/api/worlds/${encodeURIComponent(i)}/messages/${encodeURIComponent(l)}`,{method:"PATCH",body:d}),deleteWorldMessage:(i,l)=>s(`/api/worlds/${encodeURIComponent(i)}/messages/${encodeURIComponent(l)}`,{method:"DELETE"}),adminUsers:i=>s(`/api/admin/users${i?`?q=${encodeURIComponent(i)}`:""}`),pendingAccounts:()=>s("/api/admin/pending"),adminSpaces:()=>s("/api/admin/spaces"),createSpace:i=>s("/api/admin/spaces",{method:"POST",body:i}),updateSpace:(i,l)=>s(`/api/admin/spaces/${encodeURIComponent(i)}/update`,{method:"POST",body:l}),archiveSpace:(i,l=!0)=>s(`/api/admin/spaces/${encodeURIComponent(i)}/archive`,{method:"POST",body:{archived:l}}),verifyAccount:i=>s("/api/admin/verify",{method:"POST",body:{accountId:i}}),setPostStatus:(i,l)=>s(`/api/posts/${encodeURIComponent(i)}/status`,{method:"POST",body:{status:l}}),notifications:()=>s("/api/notifications"),markRead:i=>s("/api/notifications/read",{method:"POST",body:{ids:i}}),search:i=>s(`/api/search?q=${encodeURIComponent(i)}`)}}function de(e){let t=Number(e)||0;if(!t)return"";let n=Date.now()-t;if(n<6e4)return"\u521A\u521A";if(n<36e5)return`${Math.floor(n/6e4)} \u5206\u949F\u524D`;if(n<864e5)return`${Math.floor(n/36e5)} \u5C0F\u65F6\u524D`;if(n<7*864e5)return`${Math.floor(n/864e5)} \u5929\u524D`;let o=new Date(t);return`${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`}function ie(e){let t=e?.avatarColor;if(t)return{background:`linear-gradient(135deg, ${t}, ${e?.avatarColorTo||t})`}}function se(e){return(typeof e?.avatarText=="string"?e.avatarText.trim():"")||uo(e?.displayName||e?.handle)}function uo(e){let t=String(e||"?").trim();if(!t)return"?";let n=[...t];return n.length>1&&/[\u4e00-\u9fa5]/.test(n[0])?n.slice(-2).join(""):n[0].toUpperCase()}var D=Z(require("react"),1);var le=Z(require("react"),1),Kt=[{key:"diffusion",label:"\u6269\u6563",edition:"DIFFUSION"},{key:"connection",label:"\u8FDE\u63A5",edition:"CONNECTION"},{key:"resonance",label:"\u5171\u632F",edition:"RESONANCE"}];function mo({motif:e}){return e==="connection"?le.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},le.default.createElement("rect",{x:"652",y:"-130",width:"390",height:"390",rx:"58",transform:"rotate(-24 847 65)",fill:"#E2F5FF",fillOpacity:".16"}),le.default.createElement("rect",{x:"790",y:"120",width:"326",height:"326",rx:"52",transform:"rotate(19 953 283)",fill:"#E2F5FF",fillOpacity:".13"}),le.default.createElement("rect",{x:"570",y:"170",width:"230",height:"230",rx:"38",transform:"rotate(19 685 285)",fill:"#34298A",fillOpacity:".08"})):e==="resonance"?le.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},le.default.createElement("rect",{x:"500",y:"-40",width:"720",height:"230",rx:"115",transform:"rotate(-28 860 75)",fill:"#FFF4D9",fillOpacity:".16"}),le.default.createElement("rect",{x:"650",y:"165",width:"690",height:"190",rx:"95",transform:"rotate(-28 995 260)",fill:"#FFF4D9",fillOpacity:".14"}),le.default.createElement("circle",{cx:"1130",cy:"105",r:"220",fill:"#AC5B25",fillOpacity:".06"})):e==="diffusion"?le.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},le.default.createElement("circle",{cx:"948",cy:"85",r:"270",fill:"#FFF0F5",fillOpacity:".14"}),le.default.createElement("circle",{cx:"732",cy:"244",r:"190",fill:"#FFF0F5",fillOpacity:".12"}),le.default.createElement("circle",{cx:"1060",cy:"320",r:"240",fill:"#9E2367",fillOpacity:".08"})):null}function at({space:e,showBadge:t=!0,className:n=""}){return le.default.createElement("span",{className:`acv-space-cover ${n}`.trim(),style:{"--accent":e.accent,"--accent-to":e.accentTo}},le.default.createElement(mo,{motif:e.motif}),t&&le.default.createElement("span",{className:"acv-space-badge"},`${e.postCount??0} \u4E2A\u5E16\u5B50`),le.default.createElement("span",{className:"acv-space-enter"},"\u8FDB\u5165\u8BA8\u8BBA \u2192"))}var J=Z(require("react"),1),Rt=Z(bt(),1);var bo=236,Qt=190;function xo(e){let t=(window.innerWidth||1024)-bo-10;return Math.max(10,Math.min(e,t))}function te({api:e,me:t,handle:n,children:o,onDm:a,disabled:r=!1,className:s=""}){let[i,l]=J.default.useState(!1),[d,c]=J.default.useState(null),[u,p]=J.default.useState(null),[m,g]=J.default.useState(!1),y=J.default.useRef(null),k=J.default.useRef(null),$=J.default.useRef(null),H=J.default.useRef(0),I=J.default.useCallback(()=>{n&&(g(!1),e.user(n).then(x=>{p(x.user),H.current=Date.now()}).catch(()=>{p(null),g(!0)}))},[e,n]),P=()=>{let x=y.current?.getBoundingClientRect();if(!x)return;let W=x.bottom+8+Qt>(window.innerHeight||768)?Math.max(10,x.top-8-Qt):x.bottom+8;c({left:xo(x.left),top:W})},T=()=>{r||(clearTimeout(k.current),$.current=setTimeout(()=>{P(),l(!0),(!u||Date.now()-H.current>3e4)&&I()},140))},U=()=>{clearTimeout($.current),k.current=setTimeout(()=>l(!1),160)};J.default.useEffect(()=>{if(!i)return;let x=()=>l(!1);return window.addEventListener("scroll",x,!0),window.addEventListener("resize",x),()=>{window.removeEventListener("scroll",x,!0),window.removeEventListener("resize",x)}},[i]),J.default.useEffect(()=>{r&&l(!1)},[r]),J.default.useEffect(()=>()=>{clearTimeout(k.current),clearTimeout($.current)},[]);let A=!!(t&&n&&t.handle?.toLowerCase()===String(n).toLowerCase()),q=!!u?.allowDm&&!A,K=i&&d&&typeof document<"u"?(0,Rt.createPortal)(J.default.createElement("span",{className:"acv-usercard acv-usercard--fixed",style:{left:d.left,top:d.top},role:"dialog","aria-label":`${u?.displayName||n} \u7684\u8D44\u6599\u5361`,onClick:x=>x.stopPropagation(),onMouseEnter:()=>clearTimeout(k.current),onMouseLeave:U},J.default.createElement("span",{className:"acv-usercard-head"},J.default.createElement("span",{className:"acv-avatar",style:ie(u)},se(u||{handle:n})),J.default.createElement("span",{className:"acv-usercard-id"},J.default.createElement("span",{className:"acv-usercard-name"},u?.displayName||n),J.default.createElement("span",{className:"acv-usercard-handle"},"@",u?.handle||n)),u?.role==="admin"&&J.default.createElement("span",{className:"acv-chip"},"\u7BA1\u7406\u5458")),u?.bio&&J.default.createElement("span",{className:"acv-usercard-bio"},u.bio),J.default.createElement("span",{className:"acv-usercard-foot"},!u&&!m&&J.default.createElement("span",{className:"acv-usercard-bio"},"\u52A0\u8F7D\u4E2D\u2026"),!u&&m&&J.default.createElement("span",{className:"acv-usercard-bio"},"\u8D44\u6599\u52A0\u8F7D\u5931\u8D25"),u&&q&&!t&&J.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:x=>{x.stopPropagation(),l(!1),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55\u540E\u53D1\u79C1\u4FE1"),u&&q&&t&&J.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:x=>{x.stopPropagation(),l(!1),a?.(u)}},"\u53D1\u79C1\u4FE1"),u&&!q&&!A&&J.default.createElement("span",{className:"acv-usercard-bio"},"\u5BF9\u65B9\u672A\u5F00\u653E\u79C1\u4FE1"),A&&J.default.createElement("span",{className:"acv-usercard-bio"},"\u8FD9\u662F\u4F60\u81EA\u5DF1"))),document.body):null;return J.default.createElement("span",{ref:y,className:`acv-userchip ${s}`.trim(),onMouseEnter:T,onMouseLeave:U},o,K)}var yt=Z(require("react"),1);var ea="data:image/webp;base64,UklGRoB2AABXRUJQVlA4WAoAAAAQAAAAfwIAeAIAQUxQSJYtAAABFIZt24ax9P/XTZN02AERMQH5c/Ujf07XBbajtjjVBTLEzSIjYOaSqxvZY9ZuCLBnG3XkLsMo94mDu6s7fMFhbkD6wJHSK/XEzcv0M/YBisxb1AULZ8FwxyqnClnFGkJ3hVszy3DzfBA4xBPMPv28bcGTpJH3F3gWQCBf5PzEb9t8NfRk27YkSZIknS06/1HDhwIBieADgPJijogJ8Ib/n2o77f+93vOeExISPALFS3BtcLcPXheoS+ruxV0qlHqxClrBK7hrcaviFtxC9KyZec963dj7JOfstdbei+/3TkRMgOVIkgRJjsATmAUTIA7PmS4z4K6yMquiIqLzGRET0N+ne/38PSfvHnr5vn/Ku8cLSHnzDN8///z/z////F8ob5+/TfbHnz9x+v8YT8Ykv3/+aOj1M89ePy9gf/rR+1d5/bx7pbx+XrbIFnnXGG/pndO2l+2+163Xz98n8+5R75+3L14/vX15+dAffsrr50+/Xj+L/pTnucgk/fP//8/r9XPTi0hLp0ydiDinvrsuunMiIm0XmjVxTtWrw1iLqqpz0k5ZbbJFnKoKRhxaaurqG22/13s+9uWDj/7+j3504g9OOO6w737l0we8c/fN115puYlD6K6qTqRtarpEnHpF90krb7DHzMN+eeGt/3rspfmJo7rgpccevOPaP/zkwI9utcoS6BSvTtokKWXB3Ig4VXT1y26477dOu/yuWfOMI+YUYwyLW4SUS3bPL95+0bEf3mHVCQAgqk5aokZY9EtKp1tE6aw9cerQ6Vd42/5fP/Xye18q2GkphBBiTCnZaKaUYowhFKGIiZ0LH7v+1E9tsBw61UkLJA1V+uHFOVV1glF2TtU5J3UkqugcP32vr59+7dMFOy3GEGKyrrlzVBYzxRCSkWTx2MXH7b/JJACq0vYUgxJ+KnFeBSO7cRNXeMtbN9zsbZttvNHGG2+0wfRVpyyz5JBgRKfeidSGOBUAMnnbz51267PDJJlTLEJMNnIe1cXIOWczs9yZUkwlSb5xzy92nwTAedfyrCv6gUXVoatO3mind33txDMuuua2B598efa8+Qvmz5kzZ+68+XNffvy+my4//9yfHfiRPWesqOjqVNVVTZwKAFnzvd+/8smCZJliiCnZYubRHiGPuAidZjEmkunfJ39sPQFEXR/nWvTTiqoAwLjVdvzY8Rfc/OhrCzNHLrOZ5WxmlkuOWMZ5T9x47vFf2G31iejqVKUqTh0ATN7z8GueyyQtFCHZYuY8JjlbXnSzvJhmKUSSL13x1Y0AOO+k7flxRRWdq+3+jdPvfHGYnWVKsQgxxpgWNY4YQgjRSnYufP7fF5/0zXdsNB4AnDrpNXEKAMvs+O2LnjCyjCHElJJ1z7lLrrp1xhBLcvYV31gfgGp/NqmiDoCb/q7vXz0rkmSOMaZkuauNaUoxFMHYmec88Idv7LwiADh10jOiCkA3/tIFjw2TTEVItsi5NruYWQqhJF+5+MNvAZy+OeBUAEze8+hrnyfJWIRolhdzLLqnFEOMRpLx8T9+davlAcCpk7ETVQBL7nr0Da+TtBBissXMdZMtZ0sxlOQTP98GgEoDuRecCoA13/27hwLJEEJMZpZHsVvO3XLOXfLiWgohkZz/v/O/uPnSAKAqY+HUAVhjnx/fF8gcQky22LlWO3JXM0tFQS64YK8hQF3TYB+ICuA2/fZVs0jGIiTrmkfZzHIvWoohGMn5957+uS0nAlCV0RF1ANb48HmzSjKFmHKn5Ua0rrEw5tu+syag2jTtQucBbHLoTfNJphCTWa5NSzGWJIsHfv3OtwBQlcUR5wFM/9Ilz5JMISaz3KhdzFJI5Eu/ngGoa5Lb0HlgxZmXvU7mGJN15nq1FGMm+cTZ75sGwKssglMAK3/y4pdIxpisMzdsNzOLgZxz9haAV2nXnAKrH/kEWYaQcs65hjothUTy0V/vMwWAqgAQdcDE7X/6DMkYLTf1SDmnYHzjlM2AIdeiOQdsctIsMgbLdW8pRDL/99R3TQbgnQew8TF3zCdDSLnRu+SczVIwvnbKhoCXloOfwjlgm9/OIUO03IRmMSSSj/50tyUBLLv/BfNIiyk3/aKYpcL42k/WBrRxXKufUhTY+YL5zEU0yw1pZikmMt397W0O+g9Zhmi5j7TOVJR84bAJUGmYGVdg7XMirUhmzdHVUkjkQjIGy31mh1kqSt62K6DtlnNY6sAXaCFZZ25aC7GM0XIf2mGWCg7/+q0Q12IpcMD9ZMjZquLwPTlny/2rmVlInPU5hbZVoph+MRktd5pZ7n0T6GvNzFJBXjkDzrVSCrzjKcaUq/wFmcWCrx00DtpCKVY8pWTIFf9uchezIvPydaHSMjnF7v9ljLndNMtmZqngc58CXKOYHgd8cyGLZC1HdzMrSp6xPHyDaHY9Jp5OC2aticXAe7aESkNoeoew1nUM0cxya2I2zNc+BWgzzK/H5g+zMDPLLWkXK0r+djn4PotLotjjRYZsZrlfLPue3MVi4L1vg68zJT9LuSAe75zHkPvJsiz7npw7zIb50n5QqTEyP0N4+4Ly5zga4bA9OXdY4MLPQ6WuVDQ7Htu8UUZaeaLJZhYTj4W4mppjhzUfYsjtoM1mlgJPHg9tbZxMuJpF7jtotJmlghctC21pRPW3HLaWx2yYN6wCbWXE43AOp76j2R1W8D8bwfdXLoLH24uYLLe7HVbwmR3g+6qL6GTlxxmt7cnZzHLB198D30+5Bqq/Z7DcAptZDnn4/fD9lCugeE8ZLbdEZsHm7QXfP11CkaXuZsztcEeO+eUd4NsUxUwmG9g0l2yWc458bgtoiyLjbmPMA5zZWM458In1oK2JYrdoZoOa6YwY+MAqcO2IiMoZjJZbplzw+qXEVclEOaz7Uk5m/Y0Ns4LnepXKaJ6J4ouMZrl1soInwEtVptB5nFzOUANqbuaVtpmlkD8FXxUz5fDWWTnWg5k13Mws2pztoYPbeRX7hGjtlEU+shpcNaba49Ms2ifrHvjXIZWWg+J4htbKCh4NbTlyOIdFHbApUswfgbYd7lKGWtiMI1myVzeDazdEr+pi7VI2s9xhgdcu4aXVcO7SVqq7mVngodCKmR38ocXKOZuludtCq1WZGY8jWbRbgXct51zVplbx7jK1W7ngkfAthmCNF5harJzN0uytoe0FHP7EYJZbbAu8bSnnqmN6FPumZLnVtsCj4KsTTA3cErcyDmJaR7Y0b2v4iliUqfH4FNMAZik58IpxKtWoNDviJt3L2HLlUM6EVqbS3CrebskGrlrNUn5iDXEVml7FjxjaLDOzwJOh7YW48X9nYWZtVrI5M+BaCwimXMeitbKugX90LQYUky9nSC1V7mKp2AWuvYBi4ulMqcXKOfASVwPmRZzgMDK2WdmGd4VrLwDn8LHXGCqk+yLnLpEXuVYDotjyn0zV2aCWij2gbQbgMe0Clqm9CrxyyFXO3EChBxaMrZXFuDe03YBT7Hw/k7VVgX9VqRbNr8fkc5nToqluoWwWw17wVYL5gQJfXsCwKO6jbIHXjHcilSHMD0SxzwssbAS3kqX4dvjKGDTFHpvcw9BK5YJ/EEVlYpbgscLfGawLqOxiS/mlDeCqkomCYsIfWYywkc2s4CHw1RDSNDsscSFD65TNQnnnJJFKFM0UnCx9HUPrlC3F+G5oKwKHyXcyVkD3RrbAS5xUQ00WFGs9WqZgDjdHsjlvg6vEqgxnCIr/G07Hbsq54IHwVWrNBEFxEn/2U+SNS4hUyWqZH3FT/ufvdrI8d1O4StVIE6x4P58jEsoGDTwIvkqpLGcI6v/+9zfUHo28fpxIlYaUGXL485/js5ssz30bXFsC/eOvf393Uw48EtqaONlktiVrmRLvW1akYtAkK85maJtySntDa8AkefxfSGYtU+BJtdAci5OJtzO2TZF3T5LKNcsiHgexMLNWyfLCLeCqNdEiihlzLLVMOfIQ+BpQTJCTJW9jbJ+uGnJSveX8QMTjFAbL/bbNSeULa8G1JBCPTzDmPttzayzwAGg9zLAoNp1bWj+mnSl4apXMlpNl72NqmyLvXVqkLREnlzD2ZzYm5Xkz4Kpivjx+2bfZFwv8FLQlgQzhe30XKkpfzQqeUp35Fo+ZtH4LpLVmgTePkxZl79CHNdcslS+tA9eSQLHJG6W1S9ks8j3QtsRh+qutU86RJ1bJZIlMe4Zt1JVw1VkXM6TYYba1T4mPTIFUrjTB4la4jzG3va5ZOW8GXA1MseJnLHLbqy7lVL4T2ooo3m8xtUEuRR7YjjhZ82kL1vpwz+/g2hB1l7CwFujOyJuctCAe32JhlvtPz80zPrkypPVQbDsvpZYqlwu3hWs7nFvuTgbrRxw3L3F/+LZD8QMOW1tVRn679XCY8UZK/QnfQI78NVzbMf5qBjOz3JeqtO/StkMxk8H6ly8w8b4JTnaGwxpP5nhiUxufXx2AqmsrVP7IwraKGiynmW9deQiAU2kjPD5SFqmDXeo5VM7lwucfu/k3X9gYgHetg8jKT+ZodhxsrFyy843LP7MSoK5lUPyWhbVeKcUQQkk++v11Ad8qKPa1YJ1s1Ddk60whkK+dtCqctAfilr6THXlzqlMoGCx3mFkKJZ/9nEBbA8U3WJhZblmGBsu5i+VUkH+cAt8SOKzzrEWz3H7e8sYOM4uBd20C3w6oO59FttzSqtFyN7PAF/aBtgGK91q0PPiL6juMlnM3Cxz+JLwMfOKWeZApD/5el5Bzl5xy/gT8wKf4CmNu5yynPGdnuIHCF4ib9khObQ7KKztyzoEPryhugPANHocw5hZRDfdyK3g6dGCQOJuTtZ43axMoJ6WwA9yAoG8Uj5MZ8gCuPqBWYpG3THIyEKjEU2w3P6Z2gZNlmFkO/D7cQPClqn9hsAHM80CfUk3OUpq3Bdygptg3RRvoVO+xipwt58BL3cDmxl3DYnAzjqnlnC2l3aCDmWL/HNMA5z1ejqyh4FkDmrjlHmAwy4McPUj5pTXgBjHFN1mkQe9SXdIZs7PAb0AHMJFpj5TR2gMHTs+ImlnkdeNkAFMczJD7QNV6GHDt8BklsWyW524GN3A5mfJImaz5vKyIaJmbBX4NOnApDmTMfeCVnrQKCDFP7hZ5EdygJTL5kTL1F+M65kcWlhP/tzRkwFJ8njH3gW4CK1/fAG7AchNv71OsTICbSN9S2mvQUuyfU+5PrIgLHQBXoJK/WeDn4QcrN+4qhjZCZDigzI5joAOVYr/hYP2KBTl1ObCUU+AGKjd0DUPuWyzHxZKyBf4BMkgp3pmTNZ9d8BaHFBp54YCllzHkNxn+MlApdirM+gDwLmuxC5cMWH9gkftAV6Em2/AHuMHJYcZcs/6Cywsq9c7M9L7A0warXzKYNZ6zFOYzpKt6W+Tx8AOTyCpP5dRX0BEK+twApfgqg+Xmv2J6QKkPgKTrI9n2gg5MMuEuxtz89mesyXC38dV14QYlh72S5T6C4rhFndMKEu9dEjI4/YGhb0Hle+GJyLPgMCALpr9Wpn6GctvwVfhBSfE1BrN6UiNxU3RT4A6mT+ZneXhruEFJ/LW1Zi1qTqyR6G2J/5oEGZAcZszJqb3DmwJ/AsXA9DMGqzHi8TJyrOVmywu2HZgEq79QptwnqvRwzbkaA6/3ggFZ8U1Gsz6hkWtaTeRM6KAkQzcyWG4dq0vlEytABiSHrRZYakOsJfIwKAZkxbEsrIWA0lL52FSRQQkT7mdoJ6gs8qtQDMiKnWNKLQV1Jf57GSeD08843FowRynlAVAMyILJj5bRWguKijxfFIOyx0fKmFoMJshaXUt8eg1xA5OT81mYWe4TrUFDwYisVZaPWO4Pj0FZsPorZeojalSNtarJoC798sfwMjApPs9oZnnQ8lUmc+PPv1eOd4KB2eml/DkO9on5JT4+HQ4Ds8O6r/DDl72gL4kvbQvF4Kz4LBNft/Je00s5vBceA9XvGb+vdSORnVk5Ex4DtGCZ/zLlpdobh3TSEr8Fj0FasW3MlpsPaU6qZalvSolHwGPAOoIhp20MS2NgH1JZHggvg5WMu5axyTx/F16+I7H4LNSh4i6WYINXyjSAEAfSMl6ZI+d8AF5EKuSCKT7GaE1H9ZLsa8oc+PSu8FIxdLlOZsh1rvK09Mq8Enn9OvAiIqi0XCvB8v9iqrUWa6iQI4Jb5PyjxsOLCCrN5XLYOSarDW0a6bwylrxze8Chmna4WIqDGXJNagTPDQmvJmMWOHzkRKigmmRb19rhgvogguP2oaZiRebtOwOKilouCLrWgimPMbZ8KXHOcUvDC3rZwh5Z5lopdk7JaiPkLKQaE3nx5oCikipoJbpe32JolNsxJvKO9wHeoYoa09Cwi604q8WzmMhbPjIRqiJShfUNNXCpZOI9jLmdT6FkuukD4wAvIqgohFSycK0cNpydU2VUN4x1ZouJfOPCvcYBKqjwQkKVcVda8T5Gq4LzzdDmmJmlGEn++7jNACgqvlBC1nOljmDIve9qKzy3xiyFUJLP/+G9SwFOUXWrIRTKhXK4uA7cJxZDJPniJZ+dDkAV1R+kyMKyCy1Y9n9MFYAFetkYi9HI9NAfPrsGAKcOtbgQGqxeKIfN55VWLTraEovRSC68/6d7TgEg3kFQdQsbS4QuteIAplwldqhZjEYyPnXpd7eeAMCpE9TnKA11uRVHMrZaFqKRtGcuPXSPVQFAVVCvI112h3MYrULsTYshkSweueB7u64EAKJOULuDLpyMu53RrOe8/rYcB7EUjExPXfit7VcAAFEnqOnFdRes+jRT20JESzGTC248ao8VAcCpOrSUiq3n5/bEMCmQXHjX0Vt6AKJO0GJ6fJDRKkR31VwgRApGzr7+8G3GAVAVtJyK4xmqwAlAm0OlWuZsMZHFTV9bBwC8CtpPxR86ciUYuRMskuW9x2/vAag6EbSg4q6vlt2pVUvyxd/vNRGAOkAEbahg6X8xVs1tcJT/+/p0AF4F7algrReZLI+xnnQOVJyuR9vx4eWAeieCFtVh64XZ8uh755U31uK5GxD5KQyJtCuK/crUYzpwS6Ty8SnOiaBdmckxYbPkwGOhrcsRDLknI1CqXUn5hdXFtS2/6hVgzmkKdkhDLfAY+HbF4eweYmfoIKf89FvEtSqCv1bDacqik6qDHHkCvLQrVzNaz5wVcLGic1fMXp4ObVMwdFuvDXvQy5Oac86RP4drUQTL/JMx96I6435gVOacLb+4FlybMu3JXmF6hc2QA78JbVOmv0rrieUrNuKgzDkn3r2ktCcOm86vBgO6rpoQaJk7U9oH2qJsNVwhWmdmgb+Ba1G2K8qq0HfHCV1b+exqcO3J9qHM1dwZOfLz0PZkh0ooTXc+t8tV2pMdY7be6/uLNJaVr64L15rsFHMFtWlOE1wNlWP5GWir1foLXmAsngvXmuwQy8HqreGMj06DtCVbF7R2hNgp7AVtSzZfwNxCBR7Tnmw8j9aCoMaKvHFIpBURrDN77FSLUm0DqpEsz94YriVZ9aXe8PtDNVLgTGhLMvmZMfM6gu6DgqfBjY37YOJ/mMbGSH43hDKLvH0JtCKA/mMMXH3MczLdjGRmqXxpOmTUdCcK/l4Xfj+RO2LYC64VcTiDcdRYMQC70Mys4DfhR+1eVPx0LGZVnt4Qp0BbEY9De+NrtVRL1hl4pYq0IYpPMTWdaj1mZimGkmZWU5FPToVrR/Ypc6N7XYylEBLJ2S+UlmvK8pyNoW2Iw9YLSxu0UghGxicv+t6Wmz9bxrpKxa7tiGCV5zlYpRBJzr7lR/uuBADvGE5WU7Hcvx2BDN3NNDBZjEbymT9/ZbNJANTrEA5kMKulwK/AtyIOFzM2kqNhDZaikYwPnXHAagDEeycizvvzWWQzq5+CR7YkipOayTlUMzOLIZVk+ezfDt9lRQDOOxnRyQp3MJiZ1dDPoS3J5xvJSlIImeTrN5349jUAQNUBsoiK1f7DYGZWH7kjFTy9JkyPw24x2yhpWp7nSMtSjCRfufN3H914CICoE4zYDVCs9ySDmVl95NzlzN5zzPw6rPkCU19gLmY5W4xG8rGzPrjZRADi1WFxRQDAY+vXcqijc+B67UgzJBh3H+PoeE6K9MwsxZhJe/iM/VcEAKdOBKPu8c6FFvsXswOH88fEQsg0hcLIeXf8aN9pAJw6wRgrPhZTrBkreDa0enOsOH60OFFFqimGTM7/xyFbLQFAvaAXPT4TLdXO79qTT4zaK42SuKVIcvbNh+40CYCqE0FvenwuWqoP6/LztsRh24XZ6sPSLMVMvvKXr28yHnDeCSDoWcUXsqWaObotEUx7kqkuVKsySyGRC2/5+voKyJA6QY97fIWW6iTwy20JRK5grAuUks0sFmRx/w+2mQA4r05Eek4UX0o5ZbM6yGYWy/dXzywpju33zGIgnz957+UA8SqAiKD3RfGBuSzMrA6ymQ3vVDUz9U6m2qjZQiSfPG5tAF6dCKrrsfssFnWRypenw7UkgnVeKa1/s5jJ+7+zGuC9k84KwWPjf7Oohxx530RIpYhJgixxJ1PfFjPj5R9eDhhy0h2V9ljtNgarhcA/iaLazJPiVIY+LRjTn3d0kCEn3VF1xXLnMKVsnZWywO/CVyyap48z9mXRWF68C6DeiYigHh3c0SVDDaRiZ2jVKpPksMEbZeq/UmJ52V6AqnRFXYrDAc8xpIpZ5AOTRFoTkXE3MvZdgbx2T8ApBB2oT1Gsfw1TMLM3FTwCivZUcRRDnxUTH53p4RS1rBh3VMGiUim/vBZcq7JbMuujLBW0U1aBKOraCfb6F2OsUMHfw6Fl9BHBlIcZ+yeLiU+8H/CC+hbF5JONoTKWFm7brkBxTj8VWJ6xBtRJnQEKvOdxWqpI4HlwaFU9Ps9ofZIFzjoAGHLSWWMQxernZEargtnsTaE95A5w2GRu2Q+ZWTReuTa8Svc6Azzwvn+S0Xov8CgoWlY37lrG/sfMYubx4zAk3VH3TrH8Ua+SIZlZLwVeP9FJ26L4GqP1O2YW+MZHIQ5d0IQKrPO7eWSMqYcCH1oDDm2rw9qvlanBvHzGzAo+uyu8oElFgY1++BgZY88EPrkpFBVUZk7E/Y2huYxgZlbwoS0whKZ1Cqz8lXvIGK0XLPCJGVBU17RB8RXGfqfgv9fDEBrYKbDM5x8iy5jGLCXeux4UldXEC9Z5vbTG45mCd60Bj2YWBaZ84rI5pEUbC4vk76dAUU0T4xxwch5jYzHg4cA7V4IXkUYCRAHMOOERkhaTLZblnC1G8qH9AYcKw4ycVfEBplrwHQQIvG8VeBFBY4sKMHn/s54iSYsxmVk3sxRjJPnKz98CFVSseRdZ4RHGWvA1PBv58Frw0mgAnAJY5UOnPTiHXUtLKaZkmSTn33zg+oAXVFszrziRoQ7QVzyeyudnYEhEBA0vqgCWXP9jJ1x0z6zZw+waF8y65fTPzvCAOkG1NfUOWy/MZjWQckrD+8BD+v0AiCo6J0xdZ5t3fuxzX/jMAXtusdISAOCVLzM3PifOX8FgVgk1noaK/DY8+khx6gWLqd6h8jS3ZxjCJxmrYXqBl3iVfqKriHPa1TkR9D7FjqbPybSnytgUSuBUPrGGKAZKFrBp/kU8fshQCd4QO+YPYkhkwFh2O4rKpm9Y6j8ifwMvA4lwK0BUzmfoO1L55Kqig0ZaIPOjOAsU+6RkFTGzmfDSU64RWmB2rJ5EZOg6xgo4TiryH+PViQgGTBqV2elUULzfkvWakxNqGmbpXfAigkU2A6syS51Wlrybsce8yywir/AqA0zlZvD4JqM1ig+Zhd0wtHjzaM3UrJ7GyarPlrG3uIskI8+DymAiqjQ7jTqv4kcMZmZVIOWwM3wHBhAtFU2udGaV9V/PyTp7JvXIG5YQgQgW3xyooptRcRpDHzETKqhrG8uS6XIKh01nW+wTEp9aGYJRtPA14lTVORUsojinqirNpDmmFHwOil+y6BMCT4FitPWF4lRVMOK4pSevvOb06WutNnWioLtTlcZQNNFixRpHOazzcg79gYX/G4Ozi1N16JSp6+/02SN/8bs/XXH7v596/sUXX3j6oTsuO+dXJ3zrPZtPBQCn0gxL5km2rtDhihMYzHLzJz64PKQGxKmic+n13/2d39/y8OuZi1qWHHn40b8etu/KANRJrdkQ05RDylFOVn4yx34g8BQoqi7OA4Bbbc8Dz3vwVXaWKYTYNXWNMXTGTDI9ev6n3wJApb60kSZZxi0aCw6C4lsM/YDZu0SlUqIKwK33wROvf5kkyxhDiMksZ1vsnLOlECLJWafu4gGtre2UGWptuFJ0uLjl/lPG5kt8emU4kcqIKoCltj/+htdIMoUQk3XmRR0hj2hmMQSyuP6AITjXALNsR9Y+qvg4+4DIy7yTqogqgCn7/fjBRJYxxGRmlkdxcbJ1ppDI6/cBtC3KaieCG3clY+MFnoghEVRRFMBy7znjkUymEJJ15l61zhgYztsUKq2QhIw7qWLzOWZ1pz5hlkP5cXhBBZ0C4/f46cMkU4jWPfe0mVmMfO2LcNIGpWiNc0DxQ8aa8zGz4R3gRXrOKTD1C7dF0kKy7rn3zcyKkr8cB9cGNVqeycmqs8qUG6qPJD67OrTnnAM2+fGjZAop55y75CqamaXAcyeKa4XE6aD4NuOUOfFI5D3LiBP0tHPAjNNeJ0M0s5FyRS2bFTxnSKUtcjpxk+7lZ0Kq7bhqCe0tp8D2Z85mWUQzs1x9Myv4A3hpgdKWnAQOe4TPcWFFgX+Glx4SBbY5fwFTkcws16NZivwwtB0aL3ASKE7+9/eiYit4MoZ6SIH1TpvHMBzNzHJ9xvLRFZ1rf2RTOYnItIeZFs86Ao/vISeYduyrTEVKqWZy4JHQ9qfI9nNA8c4UbXGsIwceCt8j4jH0yUdYFsm65lpNedZq4vo6lyScAorfMDbZd3rFCTa5nCySdc81G/kdaF93Ibd0HierPl2mRdJavt0jCnzpVRbRck3H8jovfZtr0RangeKARStT8m3OYb2LmAuz2jK+vC5ksPFbGKcoTgGPnzPW3IOB3+0FBWa+xCKaWa5tK98BrQm/z3nxO1Qa00nFLXUHY2Md2gOKVc4lC+usr8CvwtfEZZV+fFbWzwPFtvPNRsgqlRw/ZqLY43GGaGaWazzwWGhtuCo/P0WysOi8ikMYR6o18OcYGhvn8I1hFmZmudYDT6yRq+rHI7KsjM8jOv46xkaK/CMUY+HgfsoUzHLdB/5g4PnhoZWWK04DxYYv5dRMt05ybgwUy/2ZIVmu/8Aj250Mo4HVTuzxUUarJ59JfGIljIFi5VsYLDdh4NfHzq1hY8MvEPH4EYM1j+W5m8JhtBVr/ZOFmTVB5LvHRNG9EdGCLc4DcTp0CePo+aank70LfrQ81v8fh81yE1q5YCu4MVjeHHttPRGgssrDTKOWeOBh0FFSbPIYi2y5ERMfmQIZo2n0G9jYuaDYeUGyBvrDaCk2epyFWW7GwIvh0BLb5GTw+AajNU3ivyZDRsNh+kMctsaI/Ap8O0S+SBQ/Y8g2CmJe2cJu0FFwmHo3h81yQ1r5ynpwVeMu2JlzQXToPIa86GW3zANPHA2Hpa5mYYunJhV5nnPoYVkjpQT3QSrp9A7L3spgi1COmFrknRNFFkecP4/DZpZHQc0ole+F9lLWLEfoDmjTdzqs9TjjIuRc5kxyVs7dFG5xPH7MYRs980nlv1cQ6SXDyjLjxH3wxR5bvVTGRWnCwC9BF0PxGRZmZnl0SDjyICh62PpIi5Dm3+oXwWO/BWYN81eVRXPY+DVLowOScSqfWVWkh3yyO3DQd3vMLKM1ScovrQ23KOKWuJrBzCw3ZeRRUPSuT3YTfp94HM7QJFbwc9BFURzOwswsN2UqH54mUr1uhPRt4nEiQ3OYRd48XhZBsU8RkpnlBvkgFL3rI+6CH9ApTmSw5rAU9oCO4LDK42Uws9yYkRd4JzUwvI0gipNYWHMEXuQcABFA9U8srEksz1oTDr3rs93I4uT3LBoim1lasBOcdCo+yGBmlhsz8atQ9FI3GZxMuJhFc0T+Rbuom/ZQjo0SedUEJz310e5lh0mXsmgMi2F3eBHx+DkLM7PclInPrwuHHhY6ohsKimWuYtEI2cwCrxhSJx67LoxmZrkpzRbsB0VPyZFB3ExQLHslQyNkM0v5A/BOx9/E0CQW+Vl4RLZs0JYW3VDiMOkShqaI5YPL6zh8qizMjoMiLfJIeOmtrI9aiKL72WHCOQzJ6i/nbIHHY2j5/5bRjDIDfyUq6FnLWiOrKemOdhj3S4bUCNnSgr1xDENuQuvMueBZQ07QU6lSKpWGoptaBMcwpUbIkffv9WyZmsA6cw68YLw4jL2sdTy6rcXhS0UOjZAtPRNyE1r3wPMnicoYER3Jnu4siMe7XmVoBqM1SME/TYBirEduPsBjuycYmiE1Rwo8byJUeiEGtsXA2t09hOk3MthYmERDWmdMPGU8HHqlvapG9/kQJv2OMY2F9iowHAjnRHqCHkEvOCIx2mh57pKZWcHX3w/vRAS9eJTbDU7x3hcYxsQemZkN8z/bwjsRQc/YYpluePHY4CYG6/eyxcC/rQwvIoIepa1GN/0QJp7KMuVcnrtmIfNnQ1CICHpU2dVtr8AX5zOWo0WLreDrn4VzgAh6RuzIbQdx2OEBprzW5xR5/3bwTkTQo8ZZsXrbAUNY/jQy9mlWkL9bAeNE6KO21WIjojtfgU++xmD9WAp85uOAytitk/EONx9EMeNGlqnstyyQ570V6qSzU5KNK1ZvPUAx4ai5jNY3mVnOMfHpTwJeOnFOn735oA5b3soy9kM2YiDPeivUQUTQs59x84nzmHT4bKbU79iIwfjQBwAvEIyy08XCr+M+EFHB5leS0fqhGLjgVytDVTD6X2LhnusUhcx8ijn2NdksWyCv3QHwGGMnKsuB3+ZuVIc1Tg6Mqb8x43PfGAcVyBhVdnVMK1Xo5vfAHjeTwfoWs5TjWdMhiqoe0qIh3f6iGP/lp8hg/UoqX94P4gW96Zh2dMP7EKDAykfNYo59iqWFZ05WRa86Iree0ufFA6v9eiEtJus/slni9SvA9YblHtncDU+nFA/sfJkxBes/slnByyfBVcQed1xOATiFf8c1kRb7ESv45yEnvZB2OvB+k07rHPyuFwRatP7DCv4SXnphp0O423IiQAXY5XIyR+s7rOC34XuNWunecyJAHfSd15CM1kfkjhTDfvC9lrW9N1s6uQrc2/+2gIypf8g5m4XyyTWhPXZ03GxfqAJscdIzZIo2kpk1XM4WeMPS4upg/GgA6oCVv3gHyZiswzqbLufAc4ZUqhA6wKMBOAXGv+OCOWQKlq1PyIHfhq8CDXd4OgDxAmxy2N0kY0h9gqXXNoWrQsf0fIrzCizzzj+/SjKE1A/kgheo9lB9xgMiIuodsNY3LnuNLEO05ksx7AHXO1Y6qGdExHkFZN2vX/oyyRiTNZsFXjeuh5a0KdLDIgLxDsA6n73odZI5RmuwbCG/H9prWUlD9IgAIoLuTh2Adb947iOJpMVkTZVjedck10vQRlbykCymUwdg6k4H/X0WSVpMqZFy4HehPSapFAp6JmSMADhVAFhtvxNvfI4kLcZk1jSpfG4NkZ4qysYqeiR7AIA4dQDGrf3eH97yHDtzCjFZg+TIE6A9NaxRDZ5eURUAWHXvw86/69kF7GySlJ9ZRaTnNleeHgDiVAUAllh9mw8fc9H985skR34F2iuOeozFexV06reYGuWmJUQqUniQABFx6oeGsML/ytQclhbuAO2RttSg56nrEL7AaI2RA3/RS61pqIe5m3NL3slojWH5ybdAeifp+fZ4R2yQHPgFaM/Qdk+VqF7I0CRXiPSEoueVb4DDhq9YagpL+ZUN4E4g4YnxDfA4hKExLPDz8Cco1QPzrc5N+gdjE1hn4IXizkI8Mc4HxY4LkzVFKp+YBmeoVHnExON4xqawFPbEfyd5YlX6RqdL3s5Yf7lLwUPxv6fKsu9UbDE7JzOzOrPukZd6k2PahL7V48sMdZe75MSHls3UaOLFtzjvzmDRCGbl65v239RM/TeJc8veydAEOaf8nje3VI7xIfHY6NkcGsBy5Dfg36xajhziQzKEfRZaQ/yg13hWhtij+pgMYWYZrRHOgusdi54ZG6x8WETE47uMVmN5pKuGpHce2wUlwhkAgXh8n8HqziLvXQby5tg4sgGOAiCKnzNYfeUuiU+u/CZaljsiR0Gc/JZFjeUu+cXpcG+WtagtqE/AuaEzGerOXt34TS+rKY2tiT7onD+Z0WorZzOz2TPe5CLSUEPLLPIZqJPjmZJZjaU3Nn+Tq5J2DgzQJ0VU8bWyDLWVLdnsGW+C6aDVchxEnGL/lxnMaqt8ZYM3vyprZH9LlQMgEI8N72BINZWNz632pthGRydskEXoVCx3Bi3lbHWU+N/lIG+iGXdQGxZbga8PM9RT5NVDgjfPNTqwLA+DU+z9JEOqp1Ohg4o7Ige2TRwD8VjzcqZodfSFweWePG61dJR4+MPnM9RPnjMDroc8Px2AVpKOE3XY+V5aqpnEuydAesbC05MGpVGb9AkRj2V+MsyYaiXyeCjG3Jry/FQ0HKETdFdgp2vJYLVg3edsCjdmlIT0CK3a32bDXRAHnfkQGZKZjZH6kHUNPAMOYwppKehR3lTtKSQ7AAVWOPgZlkUys7EyQLLXNpYxioxa9Fw5oKD94oHVfvAiy5DGzkdyxzCPgmLMbOhxakOl3YYHAKLAWifMIkMcC57L2YZ53SQnY6DSgoXlM9XRxwFOgVW+9ygZo41exIKPrAXFWEr29kjFJxwDOAWmfvVOYw6pd2wRc7ZsBZ94GxSjagvaxhOlj3S8U2DJd5y/gMzRes5yTpH3bgAvMirrhk8YjkBwHCAKYMtj70ikhWRdeyYF8reToRD8vwJikywLHwBEBZi4x88eMJIxpLHKIxWBfOjDgMMYO/wZo5U+rQpgmV0Ov+ZZkimEaIt0HMexlELI5EOHrwgVjPnj5oDlx4oqAJ3+4TMejiTLlGKMyUayRbAYQiI5+68fWxFQ9OCztvyWAFEFgKk7f/usu55N7FpaCqEII0crSXLhf8/7+iYAvKAHPWxtW644BQBxXgFgwlt3/+RxF934r6dfD1zMOPvx20773I5TADgv6MmD6rGyy2qnFRGnqugqy6y+yW77f/67hx/7gx+deOKJPzj2ux/dfbOVPQA47wS9etSzvNYRRacCIADEqaoTjLJTFfTyEeV3cXsZR7VFFkt9qYhzql5H9N57dSLocYfoWVpqL3QRD9Hz7Ur0xFmWq1D7esxcFs9XEV3HfR4vdDF39YRxLWpTebyi67nt8abD5QL06FuWX6lXgHH8SiV6zH3EBvhNqgft4C2KEH4ResodY9hovfB7PP4D2jZ8zTQ69OXT68d3KZVjPH44S1/NcRp77g49qK+2rLJLz7/KrvppLIt9etydqV18UQPohXD4oDb1dehNqeEe39TrYnXTMr4l9M7ckS9K7020iPAdb1Cy6LVTI53SPu+QSv/8/8////zfXq+ff/7/5/+/pAZWUDggxEgAADA5AZ0BKoACeQI+MRiKRCIho6ai8ikA0AYJZW78afwRengD+QZsi5X/AOnywWtFwD9AOOLcV/oB9PmJTxO/gBd+zsfmP8B+0vhMgG7p/i/7v/nv7X+1P0Q8H9nvlv7x+l/7f/8f9J8uf956W9MefT4x+lf6H+2/5j/hf5b///+T7m/5X/lf4D3Gfof/if4799/oB/iv8q/yn9n/zX/J/y3///+f1Tfrx7of7j/w/yk+AP81/rf/D/wn7sfMZ/i/+p/g/dT/a/9L/0P9F8AP87/sP/E/Ov5vf9l7Cf+D/2n/z9wH+Uf2j/e+zT/uf+t/lf9n/8Poi/aH/z/6X/d//P6Bf5V/Tv9/+0P/x/f/7AP+L/8/YA/3f/j9yH+AfuB+f/kG/rp+OP6q/SD4f/Jf4v+4fsT+3Hvb+Ke1H7Zfub7+OzetT+Df4X+E9P/wl8k/lrqBfkH85/0/9q9WH5ztVNc/2noC+z30X/l/4zxkdTXwx7AH9C/rf/D8mfwPvv3+f/Yn4Af5H/Wf95/j/dl/r//P/m/9N+7ftr/Of8n/7f9J8An8m/qf/J/vf+c9+P2B/tD/4/cm/Uz/W/n+KUgp7ZgDucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjrh+RW4I6nt5HGDyRwV27Hc47nHc47nHc47jKkfH1DUm9gtLrdnQlnlN/dEi9Xiz/GeIq0frgeshsT+w0RspHQGQKRqgWFPg+Hn0PVWHqiKGd697H4nZT5eSKRpMFTYRif6CntmAOuH7JgWoEZvQURZ05ubjhfJwiC1n50oxjuPOGS31/KG9f/jo02GlW++2dAEdqURjGLgTNWw9swB3OO5xhpqFJ1xADKr//ZkPIcE/efVv9aga7JgDd6fpblctWeg6QehUnFrrUPnrox6WwJWovAoDZGgpSOT/QU9swB14NpVSWO3///4S/LtS71mEQ+rysljiEi4FO+D2+ml4dGG/taNhQzDOuf6zp7D4jSgQ5NlePcdHr+gp7ZgDubUBwtvqLKDbLsg9m3mReGrVxG9i+KswnMdprvuulusSiY2CA314cN1hN5y/5ajhWYA7nHc47kJbxd7oBt1gKXVWCw9+dLFFaoM/K1b0aB4rzFLpmv/5R6//ZKnW5z6ZZukLEn+gp7ZgDubbmQ9+sDbr6hQqLjdWbXUw9F7eoSm5+KC9KJNpXb+QVJqYGceQDYxweQW9qzBRje3YoU7cQJE/0FPbMAY6BfGhmlofq+FbttA/GuG4XTNhrxdRLgKzbMk7NJWfVwoAuAurzFqz3jjSKL32j4UYCg6A9igSHyhxo+ZyrHc47nHc4wGTiW5p0siMfnO1EpiwKC/zzSE6QN13V1VuB6E48/AMpuHRJ58FeAOhuEWzCNMYArCmf33+/G0ChtCiJn7vAJKjA7nHc47jP7a4xgZhfNIoi6FyJvk+Kco+bieA4+d7DDboHDsAnBfRbnnhfvjN7+OGQInyo51G0f8/UtkYA7nHc4w0AWQDhlhPFExTI6uF0OuXmmrjDMnUuozRPMbiWCXuKNvn2zBp0odj4bboms1n+o/V0MH+sJ3yupw/HLtRT5EnjGs2g+DIrABfJ/oKe2RcP0YxC7NDrvMJn7xBGi7Z24jkdV3dPhiPl5rGn8e1TaGCukfsNSqwXYcxpXfcXsUmhADHHRLK8Pbr5m7GASFSv/f48gOnSP7TP2EYn+WmnDY5RcUe8hx025CODPVE5PBI84VAqmPl3ycTK49pZGSkwf/TrYTcla9VufU3zhR60qo7JIYiyUKv+NO6GYMqdzliStw7lCfdsuEtkjW8+wHdMTQU9swB3GVJsjuS4rKZl16egUgjy1333kr+qT6sVRvln07GRU6Iv8msNTU/maYfSog589FtiapqcwGoR1SAi/hczFSq+p0/8DucdzjCGW9qgbXQ45nvi2WFQ0WWVLORaLN8QGUF/xwhgyOIXv8zZDcQMAxTND77KNLmH3qdHYzb3/4QUPGMzM1/n6O2RTnK2OB7sIxP9BT2nf54rOoS76vavZEf//+ljZD1MCHmhpmK57SKftaQSy7Y5CMbWjc445qJ8hRyfi+TcoUtIbpIn+gp7ZgDBf2QmCeh5MsQIxLkNk9sMDt+9xULzxTZ+1wrWU+NG81LzVARrK0hyRoX9+Jk+9nN6n8oUNuD3X8C/mfROhP4kYdWw9swB3OOsu87F+1gsgVND2LkvSYSYMmh0XnNAKQDGIkQhozmcRtgEt7HyOnVWV3vU2P7H/v2Obh/b/P4IvB2adFwjnuADSkE9fvvGy7FSJ/oKe2YAw4mfNj/WEvMl2E7mdruPIh8bYSf3Nh2CFesXa+oaQb+xj/nxQkGqbizP6fzj4kRalYgvjEemxE0ZoGCntmAO5x3Np4SPgTfGH866F9Xy4NLb59X3EP0ora5jCaqfKDVl9iKnLDfKn5aWzEgBfq1ukKalpvA9a8Z+m3Y+/0FPbMAdzjKXCeb6uTfhd8d78+DKMi3/GdYZc9JprjTcwMcKMJSr1IElODeW3NVYGx/yGr/Cp6VTuyNliGufk7ZyICMT/QU9swB3OMeA0/kRMbifbEdjYsYHDEcFeea1kK5n6uHvGnHjyYZ7ESnK02CyRP9BT2zAHc460Ibw/t5np1ACPvRbqs0k22nEFRaYHsJObxnG0t3w2DA1ZmxvcXv/2uXt3I2oWWYA7nHc47nHc3IxqLixmo6iCujpQJd6HQ+pCLL++FGnW2irOnH+uwzWKnft8CUEfzCizHivF2YNh7ZgDucdzjrwbxVdr14CfUh2AVpbtnJgMKCXNoIBCq9M92RfGllbObZl6Nsv8DucdzjucdzaummXdid7DCEtriolMK38qax6/iL/FI1E9gmJOUi5c/pLAWw9swB3OO5x3OO5tXXqNVxA4+TpBSj8h00haxgOJ6ymnMW+GTCpd1f4/9xdgU2cdzjucdzjucdzjuNPZVQr1s7H+IhDOzTHEDvdD04LS5bY9lWZjtoAqStg85UCBW9QaB/zi/wO5x3OO5x3OO5x3IS2qa4Zz0FYNNuAB90BrVnHfMR4QcABzeFyG0qmULwlZJE/0FPbMAdzjucdzjuQamzzRrjZ1epNzTr0XAv47hLlHN8CP9RkNNwEO8L/SCntmAO5x3OO5x3OO5x3Nq9ImPi4A0YKu1uCpgDucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdzjucdYAD++aXAAAAAAAAAAAAAAAAAAAAAAAAAA4/7TOzMylegeciw2SOsfLdsXz0kW8vvr6iaXEnhAdznsCAxOu+/yKXaJtuh7O0PaUIS6arDnZML04xYL+evMnStLx3fmW9Cln/2bjLnMIiZb71esqS+9Sr+PaaJR8Q0Ay0BpmiNFZ6Jae1Vj+eZgaXVhbGp33pQB+gyLM4oM3Olp9lkYdhP2Tpx6d0+65erqwPN+lWUfdZYXOXOpkbpkUG0gqzmznsAABz/xxuLVl5m3ASXIu4RM2zskxv4cUPiX/g0Pyzn3381ZJnKZpqLz5hl0a+7ttTSca3MZjK4uc1/2jFS9Hd4nrZ/JQ7/mh/NIztDCdLA+LXDcGyhAhtEr0tHCxwWsRdiuNeCIonU71sX34wcFvFfY/F5O8anrH/6tK6xjg/of3GkAiDmXNiLth732VyFa6ld8dheRWGv/nc0aXg3+UPY8EjzkrddeaszKCPjIDPPilo7nRtZS7nrGmSgW/g2hUnivtChQT2bLLln7pS/NpDb6GlIz5WOl2+4+s913NI88MPFkEz6kMuUrdYDEn6TIrbn5QohEMo8IRsUWnFui9ALlz51CIuwaybqiSLHoWjKmcqWzmTp97i+zA18xErUy8wAqNM1tpOuqtawGLqcl81h4kR25DJ/DIbFFuLBIBguatGGSFLe95BJ7+uahTaqXFb2d/JYQiU/40cXDyk2MDlNLBB2/j3Nuc0EsnIs09U6+TZWqhm8Q1yV7IqHWFmKsma/XjBr73B3erq9R8NyIL/YbDk3zp1hkw/CrbqSAMLTutqMZnjBjHK+dPjRk0eHstJSCOWiOUOGqZU3uLlD04/NEj9u4GWdq5TAquZHPwCGifYjpTD54WjKCWG1P5BSybsgpDLUlLTFEJP94y3cHVdgtMlxzZamSk0AjheR3RV5nKRW2n56C5bSLE/011TOxgzP05Aj7D8l/DGhzMUlsHa8BUM7a2WjLfrhjOOzFJcCHFH8xPTXs66Kv2X5r5cVUqktcnXDgRHy6Yi+G360K6uXFBgpv6wOZF8xzrdgxxz16UGzfiOaX8ZY+JVU/l5OpTHp9HchkCP+msIqBDV9yDsw9x+LgJHAKXJGuuTZ1lzxgBQif70bPolhVkh1KTAKNHiq3MLXbqkAtVJbfolu4oVacbEOpwSK/P3/m5sZ3uZE2XDowIB7Eb6ENXODLdsZf3WQYr9nFxrCDX3TwFau/Jg0LsNUpAxllN1lsQuQzn/vje0klyMlwlQTsNP+NTqGWvJ3k6oiBsR/QUvyFwdyIKm/qRCRxBACR7+519MRTbhrvIf7w7XnPzRu/blOjqVsn3jDACABazxLi0C+C6NacMIOpOKh9QWfGWLpY/N0Wnu8346x1azTN561L7vWqX5WpFklkbso1ARWn2mVOXR6HcyDBJ1DA4jErgQbLw911SXBs8ldrazYVZdCqXww1rzJljmoB9WnJ7s5BGSKRLat4I0cUulxt1EKLKt1BskRiHI9f6kZBhbIn+l2XM+cCMyzBiykefvDvbFo4LWIxoJt1R4bT8e2Aql90xiP2L2n7D+dIX8vxFWKxMlNpP7hDSUPKB3KNLH3tcQZQCHCZmqXFrOqBMm/oKuYug1y6LWRZFH9Wm3svF57axFF3555x3ZEvFjBZ6yBsO1UM256XHJ0l75k6N8cmgGbfZ2msCl6r/IZBsoU260VqccsiAO0SAAbf9NbI2uZ9k8R87J5oifOQQI+WqMS7A8Hv/bCrNKvO+yHf99C5OLN857hTETJT3SjmxalULX8gw7bAc0DDT1oOoeYsWhu0s6GThMht2hyQJF3N61PeVqxAFU3NvGx9u3oZMJWu182VtGkFWPC9H2J3cAV2hBTYKSFc7l/SDtFsOnkkKOfx/N+YzME/WniTDCvw8k/DZPiz+ceJuE758T+DWf9WjzogNBrakDB4JjGky1auKrg05/zjJE+6a0KcSV+c5O/1w6dgYm6fKgk5F7giBd1f6y7FN8v7kj39ztJPmLcMYYyDtGydDtmp6NR7N7PNnzv3hb/8F8wlP6NNfn3aAnQ4ZSfts9JNJJCklkdwPKjFYpl/THiTaNAV6oXeT/qrNNvfdnIhxnfcn1AB/owgYUVBluqz8zYSWI44RI1O0xRGrWBBauuzxnlisTSeMxqRoJK9pLUJ7Q4zlbtv18JXLg+lVXrnFG2XFeBRKtsDAISlSvDFBo02kcE5TUMRKsunkJaXUk2UlAc644MbxGGGPiu8Z5g1hHbRb137aQ7ljE8YudzbtMCR+188Ti+bHr/jl4tojm0YVVlFuoqBo96wXZN4U/KPOwquTrpAyC/QxZivlIDUB2ez0aWACRFSWRCHpRKyMG7eLwtuBKQG5/IeEWzSAfHSkWyogXnV+B2GevnP18DAtEP7SjiEjd7PmxURKY3bos+4KnJAHmGSFjo9xHVxrtS5C3gPY8V2dNh3oaECTJMHn1/41Q1lrYClGwsoj+JmnuCC7yBreZZL1oU7YncPHfBaYZC1WAqrBCmGJmh1Tb3Ot+4Z84+kllkAdDX93tlxh/d6j2D8/6JG7RtS//qhPk/dh5elZN8MyBmyjrtzvsijlG94AHgtsDvKXpgk5AkITN2YCCNOUMdDGtodoEcYsJqcoRZS/Ti6LuS3UFbWRgnA8v5N5+sFehdCsUhHST+SpouMyiphEWPQ2Ceh27dJqY8R9WiVFifkcCzio9gBA0vl1pzyxb+O9QwixwzWH+2WFA9AH3YuXQs9bA2y/7o6gxXJs+czyhHpgarsbr7tSFJiIEdncHCiXisK92X4rA3Zi/SIk7Plk+qCZUvaB4wNBAgFlOjcFSlx7LH8hi9Ef5+KzuRt+zWtrjp82p9jUMYSIxo+i84s2FXltASK6tglsAY8X1Gja6XYEypTMCRHBychzow+eeoFMXTOuoErNs/iyr3vzOg4TIgRTLhS6H4PIkHoHL9ydogA2wNnC2Kzl4J15bpxslAExFFBVQNsnzNK4pbhrWDp+xyDfANCsqbwPyhe/Z8G55ucbW2QJQjixBPQwBc1YCO/dV23RTRf618KrlsRWSPejFkb+Lvs5uYjgF1dMZuSTYXTq0gHVAHn+AaPUcJFizTtg/abJBdCnVYHqwCPIMdoLPck8PztgvM6lO7hXIvvBCvazj0m+4XVIsWHV3rpRVV5PhUBHzkmgNQGUJDS3wYg4JPlLKVT1ZhWbuWVyn+7klvblUU+omwVditgaKUFTD4o04GXCP34Hl+/IKz8h28tWaM+PRzWW4nBTddhDL346LzIIh9/QQArrF4uiObQ3CS+6duidU/q5tJCys8dWsWz44Sc7RV/e5IAAKd5RTEWwAcZ4ivniszpaS2H2kYR4zvi+sSax5zeCxywxv9elTS/LYoWi19xIo7epdHzknCsrMIuuDCpebSjazpRdhuIQrPi2K24MLHTvV42wG/bLPYVwNEi9TuJFZ5QFVgbUmyybDfd75sUJrqJdbLHJsTkVAaRs1kNVCkY6gKo6MyghtxWsxSaIgltSKRg8ZCSj4Am5FU1Z2TpiD3gmaB09JafZEXEwr3vb/w2PnKNvUpyoEAjQlRnISsh84f4ajTZGmfJQOYGQSsK5GJCpwBdFHDsCuvtSOxa09CvNKnqnZh+lutDqQBayNeSOzLZq4MGcb0hiI6Zi9StcrNtgsLGrbNuIFLDL+OTGwmjG+YjOIirE9DrmdJ3x01A32THf1FEvWyOuFe738iRBWklTiKPckHwqWcvocijJUG0lv4AXsvZbsLOQoMSZccDn60fRvo3WGwJIPXAadCwmZhbj4g1RzPeLr5Lt/yH53Xi2LifY3JoySjJRvucjnhRtKc2uj94mS7PTkeZdBjynsZY+N6tWIMQ8I38Keufz16QgLiP/YY6LW4ZjV9BarKF6Fja8uBIJj8n7KNoPgYzkOr/clevJzTK3dvfAXmP60tnyFBiWsL+bABxRx5wEVUf/LuoaNwDmKY0Iyl6OTflgFVDGQiRWR7hF2g/yqVjdYB/CsDfm5G83J5P9uYEW/x/IJcCv0YlVU/XRhbznPqOdA7YFgVWNHQMeURih7ZeIVZr1kp3n/OWgOdv73uJxj39FzP2VdYMOkBAjOdU98jktUdonV7nACihwIUL2aWGHjOadWwZwUfGcU4Sho66FiSCqZ1TJ4F7ZyeQVlAdg9JDBPV+DjSzEMUaPIorzgI4hZIaabXr0C8SZKJSUzzVjtSHnGYd+8cZ3XBc5yfuAR7nc427owjXXj01szBaH/Lz5rL8EzvmiB/ps5ButI8GJheHAp38lQiS7KCeXKz0zTLhrxzKL22wVUvfdHOa5/yaQ6mzM2ct++fb/f4xO0CpTsYYvsTgor6yAiISflEW2uJ548ASdID+gT5TCH699YPYj4+DgaOQTzQfRpWYYJM+TemgYvfsmV2VZZ05Q7y9pQ1hhTivXEX9einNRncwbohBphlu3ID/8VAxtFBPWGkFHnoF+OGCdo22L5ugCUk+uHUNfgnt5GL8YEHzz4vyQanQu4LtaLTvVBkWPd9wy0s7gHe09JeUuTD+g/zbb/l+DYPk0irSgwhOJ5nS6rO83aLYR8tdUwKP8rTeHKXFYOjroPLgNEJ5IFQeomrFfVU4hFgYUWg/cB+E8Bxc82XMC/a06YJZaD5d4D3BoF9fBDDzzk0jb8UAxCm3VDxw7P4a8pkrylzG3puiJFx5xTuYYJBbbGTXUEooDVyy2ezuLgK8bX2F7+L4ULEPpawkmKi2Xrurj09bLa7jM/J0gExkp0m9QHPhUpD91GA39qWGOpWi88XUganz2t0OMrfonFot9PXfXtR55xeJ/tInieGGvg/MJ5qw/GmfzcETO6XmkQJ40oPr8dABMSadzIxyvVttGym2aTFFvVMKCtumO3GWYJEahO2JrrmbfCV+au95iyTXxbJEzuefwR/lj697QYSkpEej1pr2qAPXMVZouwH38TxwNvURVFV1PKjtFT4UDXrzkO13uLssm/HHeZ7eblD9XLEzW5QBWtHSEHXY/S4t42Gcf1mKtj7DRuYxJ4mwJ0e7esHBAaF1wacwGAzBZMoA4MTbHIuvHkzDcUbEc/Qq3C/96APrZPfkuc1IuRTLbcduX19AaQX+CxfijWQ3YnDxWboHkJszsd1y2EYmCV+W9nvVbRaHqu6+xQ5p6BynFUFi8mGycqIfubupUJ/Q5Ogo3KYgG9Lew0Kvk3DFqEyiYdYM4TsaTvK0yTLU73ijcbtVCjIY4xf9qnvUwCPFyhHsIlLEdtoAADT/qcx4qceFnNShLId8ce+oB66pcV1s7zfneLSgNU4SXURH8IsDn2yiu8/DgyrwS4UuWECHJ/ZqOLDc/qsytEZn7S25v0gKY5BqdYp3RXsmA4sNoQDMxbSlvTTaCjUIxjDFklIYhCMN1bMSxXZQtJ1mCsBwwBgj1QENptFWQ+FKFw0n1Nqihz/lCkG67BEkFfeadzniQOJn7EzeWVRegZv7HccvUlS+Gx8uRdpERBkNGg1sklhfL3LpaKkJwSU8X5jfDN7qKAyetne6ZrZms+tV+Ck0MTsUpxnSqJLHL3pxzMln1W6WlA0rZV7yQ74VMQ+pDEyU1aksbmMgiFo9W8PQer5UF5mrJ5/7OiXZwFFdZ4yDghEtyBFAN2r3FxkNUEyZy/uvJ+qth+QlNuBJdw7PPOw1QQiLw3fJAY+puvZB4pPS/Y5rehfS2RCPQtBsRSvtGAY2Wkv5LEpkLqjmhfjAPVWIba+zxdPQKq2Gv/nGvZz8PrN2Yqbg8P3M+wWXufPBhEqKTbLOeh8ifBdq9cBeHBPKUQt3i7tVfhg/Wv0/8x5ClWFd8Up9lBtQdWA5h4ju/A4zvu2UojmTaarA+NvmNR0/CFJDh4TiSI/Lks3NHiBpsDhM2h8eNtNUyTDyeIZAyW/7J9HN7SliZIn7aVzKRMcWchR560Q/P3zUEV0CAc0aCZ4PK+BxEQ5RIYFpZRYBR/+nn/sDgjsjEpp1UOl4H2vCxforWFuFULk+RlNgQuvPhPSTcEpVDe6nrtg3j+Coxxgu00QadJVUFUAESdAYU7WfyY8e2uCZYzESRXZHOyuLCa00Zkgkj/WEuD/0jm7DQwj7we5sf43mhp9SV9fuyumGbSPGq9EqsjBEwk5iVTkcAFB/TVLNo1Z80LjObxzcFaK5VozPtH02UjEdDdz52JQh9wxk3SQrhmlGuC7CCKhhLv7rg/hXl47O3coYhr3s7PJuWAyT3+MhwIl96RGe+4REjKDJw4a38iy+0nyi9R8eWznAv9ng519lyZmuCDC+zJmd5gb9G5NDDYVdoCCqMFHE9gkEhWN3kje8XP+B1khE5ln6qBdlTFWIyQTzCoCmjRwNV8APgBnD6GwduZosA7PpDTa4pogqXQN4JXSLS5fJNU6bz1G9/Hp3bfKED4dknnirNpzK96WLWTIu5TduqOFvGzXJ3sw1B4+6ZIvqBRphZBEgSbSadx1BLlDYkkUcJOW4HOGfhPt4DnM1HdOTuoWYtm/W/No57Em5Com3n7ArYY3kq1jS8EQb/olwkkARWKTrrtPE5A/28LBGJMb41XtvZ8VQAD4C0uWZNVG8CyXD4ANFHNIejPlGmp/SBc4BGhCD6NXwE6iUEqvxMWWRK6v4DEEXRNHQZds/ff0hTmUSI155CBDhWvDE45+iT6UiW5t1idrvtDXSLt6n12DAHxJFMIDf5B/jId3N1bPUinddU9tqFbaNbEl77bpDk9lKnVouaGrCdJVTk7Ovs6FFPO275cA+MSfMIuqBYsAuZqNlA0IE878LskbNafpKyMNv0elcP9QtOpMJui/m0J3J8EM/znnzQvjqHNFNDGXMx8XftfDY6E+8Fx7mKarnq8Mc2WvJ2TR93XL2a7GSxQZuQZkeYfaaxqFpuzN00lnVOT5HeHEN2KBCp+7EMb7ak2JvKWayZglmPCKWWEvyCN0WP/b73dVOlMwnL5QB5/xx8hohOcSkB7G1+sufi6sq92DBF9oQsjn1znpo7VQyS09xl+7X8T34cMI96PJGuAtptW0vlrfNw7iye+HoPU0kqFzcU9mJDl4UKuqVZeOqbami6YfyALapnezfkXowYhLGC9o1GZTRk9smyRWGKeAd0XyX7J6nYEUbDROz3Kyk90+LYtjI3J09HY7fqhEi4O6TQJBDd4zsNN1990u28oVVuhz+6S6Ru5Oi9IjlHb/f7IwRbO5s8u/Dmnt2B5bSCfDRj2V6pYVdDokkr9xjmCg2BzT93DglRoLQ8hD43arnc1ouRRL/edwqnBy+sViC+Awm6J2JEqn0kDZm/94/e/1Y4nMciJfIGyz8GGCLP9sGMUlNJNJhQRpaNRfq46CvUhNA/y5QJdIAJ21dEq1v5ylMa+fzRKMLbmC/Djnraagwqk69rePbTEYeSKTN5XVxVYwXBz3tJAnAL4PoxHSLf7HQBkrYEvOdAvyueE+zS3AN9cpN8t9LyZiZo1eAL2RKIEbu4GiCxQWpb1/agT8j9o80Dp4HZDnERVeeya50s3ostd2F2DAoWLev74EtgtT3ctP5N0J1EGRwbZeAff8ALpEhf88EazN7Yfud0KtIQllWdvM8GxeEDYDAz/oYrXYpmsef1w8qWZqyMsB5mt9VQgfz5XU/79dqXAJl1gY4W2D1mpYkRFJZOcJzLKUMVLO1ROjoOqbWYxU2LcO1ygAgxO/FQc+4v6KnESToVNVjxznbCQ/abb2XxzMYDodEltnuzNAu+stC+1RqAudGs8p6sWQeN82oBbw25m5eU8lAMLS0wIO0Yzv7NViOJkYoifkLpQFOfBfJANGksg7W71+rvFeBC/JkQ2F9A0hqYAUEwvRGThj8tCLSwgJ0PmLERJkE3iG9jkrJFsXRt6dEECVX7JCmZz/YpQYQpxRXmRVXKVym4Kw4tQI87vg6BbcpTnriSXA23GPaXWOwdLuZH1+hZJA/ll4EPGPNCkbsVubRGYtZ5yr6ccgXCW4g1vZ52l9DYC6hE35X1AsqfhC2EckE2gqg5ZejbC0LT8vFuVgH2eVuAid+5BP7kNYhaC8Mx4tdbeZ3847De5oiQWBcsAgqWPIE+edl14KcgtwMsPLEunjsC+GxOCKdZHP8xwCuKZq2VsrKFHvTx7/VWJ+QvMmasSzJ6lvOOXmyUfWEarBsDy9slH6cr+RNKjIrUZSCA00pWbGi2T792Bm/qGd9q+gmloDQB7/wnNosnMrB6q8mfaVbHepvlTKuhtFPstLmroGrlb5M/nsYwn2d+K4WKu/G3UPlnYSiduCQD1xVGHR+1j2Irx2Q3/nep625BPVq2Prm7T04kxMLX1UsOXoc0E82t+DQ2Q35xRoZACCnPDN+IOipIpbPlPIyrtK3vCzRDXDtR3DtzUzeJF0Agtr4V95jIjNvGXT62Y+g5uVT0xw/igh1q9c8cp52XqIxRiCrJZfm2CRX+1B7RtgUTt4oFl3ltb99YO9tDQ/767KpTOiMhE28tSJgBnCXGnDjb+ULVU0Rtp6yGPA7DfhAZabWwMgXzJ8cHCHCJb64Bi0nDDC4qNXF15kyeNStJrnkiWzcCcmOu+rBT/ZHvNM5b+VPF4dullgwgcgpNnFryxyw+/JKHILYkRgu6IGlIsAoxIFdrOJIOYwZsbFUe70TvVDU5+0kCedC5/YZQIaAafYqEIiQa9m+PXLB5KVNFJM7WKZ0cJiI4oxWAb8BRt92uJjodmv3e6GzbiRjVb6rvt5h/KPBDEctU1j/yCMLLCtEomOWkc2FVzyCjMD9AqBYiH8g4q4KcR38Wzf26FaaAsl1JoTAp2IqH52RKLJL4DFm9L2i/3ak7no+lWC4ftQnt1zhOFt/Ds5i40eLVXbfwNarf/RM7YIKTA/DulaoHTwc/1WBcismGJ3Dqj/QUDwQHUid/0MXXNy7y+ZkhRHzj9c8B9Ewn3fGV5ZaM2KAh4oN8AAVhpfQfxEsumHY69MytZBTiZ3s3/8k/aBApc91KOLg9I2wEroNTot6xgf+8ul0HvGRrrS+hivuXwnZLlc2vjLkWDCFaMjRFjcD7gAwn4w7M0Yg3/ycky1BkY8qUU5cAm1eIWwL9GTxiJjjnehAL1bb2ajYY+w0L76k3MJSghojtYTMr5EhlEAiuUfpsZj67gHgL8+ClpAaab1bv4D3Wwuz4q15zzXIz0RLrZ0OIBT3Oo9BYqTeasIVxKWlS87RmS/BQJ11Lxwzqk/7SXe/KZATrrEKjclV9Ad3NaYtFTb+B2lZWUdU6fJk1fPS5vB7yRHP6iCFvrmxvqFwXdmkzXaMYD/Lfucd6Q80SF38M3IN/yWarkTBvU8+jYMh5eO5PJ7I2lgAW9AufHcqVutvLos+EAjJEy1qOJodNDykUc7uYcEDDy6hY76bklB4Y7N5KBdTkr+wnykJkN8veDR3V5QU+8CMeizbZIUWyfC3549fhxK4DyK8rSkUA9qww0VXNkjbJ4tXY5K2M1QWOcUGRtuopTK6qViY7Z7V7Jg0S0WBxI7hSVJHeGwb5CWffYSLiu3u6ykLZjmNKD3EEd5u1SgVpi4yMp5sqsM6WuzoEN0O1+7veKZu0aAsRCNFH/AL26FCJ2uCsAKynyslbFUTpsxroTkJjkEt2Yf0+Uw1neFbypTgiqSVugqlnveJIFdSec4Oz1iU8eaFScaKptw6wavL0LtJNkSDUTbJrKa6Ak3k7heZWvOkSRsIplPpqB8C6EYm7c+pIq5SrGyjVqBM2Is3fDe42FPiqd3K0UF4ujISBbSOczws9sX4BHfkDrzKzjeneohqKUlW54ZxkOJIWmgEnHqrOyeJGMSqN4IHzToAVS3yP6QoCJCqQ46zoUi1NgFNc/zjORYUr55Oy0cqw+A1gC8PoCPNISbNo4NvlSWG6qRLjIk7eKOxJsXp4Vvoun04tncnszMxK80tJzchER4I2l3jA9h1L69/fa2V7pl4tstY8QT5b1nALkyKz3gZg2CEO/vAj+4vKdBMNdfxp+iDsM4YyiN4y9NcvDhsce7Lv1/2xAezg8IcFoxYluwNDqSu1/QeYKevKT8Z1iYtl6Kr8Exsc/OkVvqabeyMCjXaCsUPTA+yAFUWvrbbguduIwXgMnZta5OhKrsuGNmkyJ75sk4outEOrtiLQo7GxJhuMajEXzB4WShdOC7/Fpm3NfV0K1TufNqoKdHLn5tJOUQZPvUHkpYFilCTQG0XncHMNlUAetyPoZrlFP/RHUuHS8n9OSFb+ihD8Ghv1N02qhdkQVxZpWSI68hyyRostqpXsBBPmlNf2DKP4UfemPEYtSQtD1EbvIf9UzYqHdZnECh74eiMjYukgd+mVYnP6d3Ln3QYQXOD2iM2LCrFfqN13ljC4dUjZHq3ybk+w0RbGyHSOQLqH6JGaKTLm6hPstUxNYpxXa6PiYd/5t9FExWTF+LC2+B7bjcjviO3KWHje16jnYDEnDEBgJcmt9r1cl1ZuYgeiZopNXFDA+Tg/Z0qPkkU7AJN+vQIlH9OXHyFcTVTAerq+iANKxzDlWLYcPTkQQtK3nQ+PL6H7DxFqIKMTHxDrOe0QDV5rZ5Uvjc9enbnaxdkF1wn8MU7Ka4SQAHWwwvBNVdVZo+mUb/4nhl3bgHxWJgB8/Kgx9iOYDbHLSEtLp2I0mOER7nfZsQIIjlEOLQQgEmlYtsqoKiUHUE/tD4iQUEpQ/kdGvKytnEERoz7GF4EJQ9zLNfTwtdvvfrR4dlc4moi1+ASQ6+d/wok8uo5VNJKcunbpgOE0a/aUWN+JiPWw/05XXTvuUVqlm3x8NQhwo/ctmCUjxcz9NVgHr5wykAZ+jAyFWPyT0OFXg9mCC9RJEnWuJ3KWofkQfMrBqfsRzWb3GCZdDXEG7Ipm18KFSWCIKKnOFiK8g4Gnl2+DOcJ51M8ySTWtaBmdRK/l6FJySDGSOsezuPhoZtAY59jtScckT1D/xoiUTi7daItvFUCb3sKlU9CUa1Jn3UaztRmWmpuR7iSLeBrNRgTd7rcK4L51NdZYsgeMsLIwutXy2ZWuDZRgc8eLhzBxa6/uYL3GSHENWQYM5T5TkgpM0uR3s1URh+k+fSErHjnCWe2RjQRfvtcKOirZgoR+OpVlP+/LtKCg8rhlzUYEegqawf1UpYx83LvDzxDBz+TSQcKF3Zv/1rIbZMsYeYuE7PKAz4Gx3pAnWDLrqXZOHv4VgN9calfxo336iCYA3y2wOnYJpfyHL/MBOCfcpR6W/ET5T8CCO8cLmFtQGm0Lt6Pym1XL7yrFVY8w9lD5SNkfIqo2eT+1L6geVuDx7xNuLesHy86t7RGhL8E2VdMDcL3QAAD/sXmzMVzZiziP7ryiutSXb7OIBsv2VTkXCD2NiuHQJZuk4RxDq35BMcmZm3hwpK/7Ua/1R34t1Jl+E5jpGRcyjLa6S7tAkpo17cqdMXRQdmuAuV52c7GquMO+6i8VwLxWAobag+mnqEuuuxXuGGrRAT+Zjejg/bwQXzp1mDvm0RMkCcPKlkEie1RtkiAYJkTwTZCDietwnVxjY3BMluHHY4OcUacV0ek6PVfsI/FoNjoWPs84s7HJ9uK8vaxAwZ5T2cA2Y1P7uXyklE1p/4UTQsiBqBXqpvhY1YUqRhBUYKpM5wOn9lWFoR8XSGI83pSNtLWsKEmjKN2duiQBvS0sAS+41SwMywqANQxtouNEazavNwtxz60weKghHPZbwsl/ck6MW61NDK5VYNwGrQLLN7WUBZDwi71iBoI7ZgO/8utWdTGnB2/BdiSAWA+YmGLdnifWUryLmkn5VINq8miiPT2RH1oqxBFzoNdKZb5U0Ftn2sntc0amXc4mETwpcQTUtQGDmGX15pz/hfZVTHUJZR4F1eT9OEHV3TywSqvB0hfauHoxTknzFiHm04RV2xbq6p7StnbTKgIQ3MeviMtjNp0/ePO0baUdxgADCJwfmmnHpbTgbV9EfzZJsdrXh6YsLmDpFgjwyIpDDzh+3GtR+pNdPNh0BEmq4hXi50Kgv3Qx8UQyuRv73q1aaPfVytkKT6IDJDDd35ibMdbXYyxmoPyE1uemn8Jx64bLgUmhqY4G+jH8YYsjH/Fuq/CmKV/cObDiVI7KA8NlUrF5reqPGlVWf2VM2C6J/J/n2hrcRdZO1ElaOq1Z6i0FmMF9PeYNhXEUFM78kgr4EKYCGgWFj8ppAKxRDkB4CnI0IaLT+I+ciRNsMxKziGBXGzQEnfAdJtDT70MAi1R7gxIzFe3I6c1wuRha2kW4RXROgs9pmLLKINOwpmD7E3RHKha4GGk0lJ/esKAEnBrIzU189QyWVHOnobY4heneprhFoe2Du6Q1SXgcnIIrVFTSc9mXEAcKCT8GFgTu1ZfrE+jKUQiyEkKsHBEwgQR+SsLCsxlN3oejGPIf++4XvQVs5WShzAH5+lEDsTThnpkNSiBfmUsnXnmRLA7lFs3uGGmgH3bnBf9AZp60dhFBenCaXIdE0/YR6LwE9cMX7bvLE+ZZIpclJbZWt+d6W7Dj2/T0Bvx9ZsK8Jtawo9pw3ZhAoFFHtXJEBO1ze4epTsmyMmmd7QxZ15BAnxQrvRK8sCgMbf1lLbywTCETYQtkd2ME+P8ysLy0DEBHZ7sI91JMKMi3FxuAWrC0ZDbXkNvP0zdK9Kelg0uf6NI7nVi4BhHw43//9zY6fXIbt9w4E1Cnk0nLT9kJHPY/V0TbtUlFCbtJDk6/C0/o/UUAeEf22kxjT7ir498DW0IYmHrdiT9kXePDwbApM19ZNLmfqBoWaNl2qy32PcGVt698ovcLz2pyy1b5FH5V5cmX76Oc1jA5pkQEcY6b9XiaN3Qg1uugi7N2lKLSwsIdpHkPbQsbef99B9JeDlgeC+kzVK8QvhXpavbsP6UOcrMnW/qYiGeK1LYonONXCnZEG3FYWVia1pZ1QxNqEVZOK0Dshn2ppXljC5hq9NEv6MgyzxLPIwOqFOF842Q+kvrCfrcaMyoHmMV30haqLpKWB2Q+lqoVmiSsnn6oCbABZtlqFvijAUfO3VLHwJF63xvlJlXVu/6g2BELboChPoaAdFZkjUtAJw7y9pGF/c4sGIyYr0P2/MBL/u61/JJ87cWRg+VcWq30F9Oek3g3bY5E8mglUY06xSUpGL3ZXqkRuKE9IsvHzN0wqMMNWFPRUVRuKY+du8+JwrSuRCZz9DAiIF/vaeEYwdnE/FGk7ktfL+t77RFwI5tbYhGUfHxe62i4JObwABQTpyjMYwPHv7eTZoF7ay15Oo9ErKXBKegQpqu1Wiq8I9E9/aG/wzGC7WAKdz4divLCVFIla0FywafOvFY+N2c/gD0u2ze9ER14GFSx/P7vMWmdh+dzPJK12lixGeCRVWZABRFSIUxXWBTNuU2mhZIvTQpAQCpzyepx0iTsnzvOWVgZr1M5bq7de9uNFtdQqJd87/1pdGyU0K9cgYZ8PnKfwgXDB0qE/PPtk2oJdK7ET40vB+mhQnVSIENbfExPn0RC2eGvxUXkRRirKn5ZIPsqe5ZXIwuV4gKG/CjfsniVdAqJZ45lyguErfAMT/ZrXMtV4aGt1waSBNflSyLLJHc3eiiK7YmzHL9phAK8aRwBnOx4fUha35AlcA4R5/dr5t3mqgmmuNy3G2NXQxyPTuEhUH8ADoKDiaQYlmbYpcZdXuGLsMiRxoYIUS0/M0BXV+nJGTG4LMVquRou7Vtsx83ZsN+TuluYmI/j7rRI0oNFfTfD50+AOumJ9W4icg0TnFDctCrNrSiVbnZZMlYYpyyb6bgFIOEcLkLOonztAju13NxSRwlZ+UbX9BscqhvCrR7ztnT515E4SinmmJA4D239B89dyvXFcAIQys91hk5ao0DKJlscGUH+QQ06G4mwAzZedGhS5wss4rt39B10NsBnipwlM+40aEcCHJhVflrwPqFNBkgOwLH+38jtLQ6znP9ZvggOSka/nytTq3c2G8on7ZPiSnCqzUoU0OsC0ZM+5KDLmuFw0i/iqIvEAAIwn9g+f6XKHfKefb6jQg4kTwgj1Qrk0aW7CAxZUJjHgPNOf6d65f8rTdQMa9qNmksESsRiYi69+htd3jykWhYXS3oxsTGtULs2GTieQcnRvF5uKJbNWDB6XIQxvdWQ/T9x2KfISJCrOW7ghpxkoirrXtgYypcOiFEryK8SPHMWlLUu6jNhzMJpqUEx+oDmNpCjwTA08coK37K7iPntVnhKRJLn1lLIIPbbbgoC6K7oN4+bfPJl26SBHcLuR1CU/wMoTKzQT+lmVHILpuGsXjfqVzYGXCBT7gIW+lnaVS4+io6owPJDyO0prKIuOFp+ajH4TcjRwAZZtAVWF8URh998lrLvVADQyKmUvmdCIrJfFL9Rhbd6hN2/iDEXrUSygOb5jP0Ucr51ACQYv7GYV4L95B7rpRKKC09B0ou9u7acGslqL6+PKGIpWB4LDQZoJSK/dtF9sPuNy+M2le2+Dv3XfMkRZ4AkfXBAzS9GQrHnR6aiAUu/opidBeFQb5PqJuV4Zy4hpugrOGGLF/01xIhBlpuR+VYiz6pDV9ZxJDiBTJ947q+q85Jsv/SqAoElGO8mdNd6Y3i8MbKj9D5lY9b9H5afME9iT0798iuYYIDdnHYS9oPehAPL/U6AD3/t0tz8yljLAb+mZloHQ3fVa2sGgWQX/Wv6zGSpBpY9oRVwafm+KePSxpjD+xkJYl/OpJpuaRn1jQv41C/eckJnit3JB7v5uP1b+9I8tX8b/L4Q5pNAa1+34Ez0JgnlBsKyna47x5CrICq5gXaEdd0Yjyh1SnIvNRXZx5d4dO0ob0eQEb6OnOtCc5DhFRz+vk6bhZ5UD3mla6jUA3DRqCdUzRJHDu2AP2FYZZIUllckaqniwvMWtpS2Hfwqkb63/68skgRWJGhjP21H+NVnCAAFPj0Df+pKNAEfDaOFYVFJ8d8d6hHNHtOHFjXL1jkTkxzeNJMOwI/kRPZOuGCPRr6wWqSK6sQ64k1X81mWDwrcI4Le7Mt9k8FgksgAErV51PXqYYHnRICI4Vawr04GNymHXDtu0pZqINqd77CUUxhj0duqbhUgV9hp9neH55MiPC+nRisBT4sEe/oEjxlpQTyToWWNgSpaqG2aYlzxQyNh60XL+OMn4zDcQDPc/QviQ7jk0C+WThJicnVHCGCjGAW9FRTPhQT5MrsETQoqYGp23nSlgIdAGIWgbXRs8XPeLGSFL10vqoyx7h6RGpQnTPxRNcMVhExOAyjhEGRdTVg9TkKW2YyXAoVrisuXwPhgPd6DCQJb+rOBLbTxIdJ7R5eZRn7ubMx0aE4zKVqud+XqREgAkQWpAk5mlIOVCIKXYBqIzt+iXYOBzhamelKxOjhrtp///B/oM+cYQXcfZkSf0panrR7FPGPkbwwJETH0pdX2f85P5KPWyZyAHH+edn5/v8Lqc17TUyb/agxgNSZvHYI7zrLO+By2t3k+pRJjnVKnGh4imaV6u0yXrXzk2/2tNP6gp4gpo6s38JuBMfexb2xL993/ggX1uPwPAL6j+/u9ZaalYBUF8KjqyJJmj119Bsi2HMSHRAazdG3hZB0p46TVcQLqLEry9IFStOD9Fi12c+bJN0D57ij2zOXnmUN//SMidTUE+kDZpkoMZ5zykmeIAx0Gt9mp4KglzrrDgilPMBhgQ29TuS9bpY0mR9UDX+FCFmkJhYut0DwCv5D631zj6y0dzJhr+fChzDyGsFpk9WgVe5fxsRM643iC1+nB7RkNoPRsjNk5VRH6ZuTOJPXUf8d+M9DxebD2r6UZOSYOPtt+i1tMG1RxY9cY9OxoAAAJb0OLkc46pbMX8Tuizsjszap65rOY3nsy1dfNVfiMBxPYXIkZmO6PXYcH4Oc16K/qjdOcIWjADMZcOnebOjyczvHidJY2zmxUiBXnKp0nz+pzZxP2p47vZkXiiVDKbPWe1Tz3gfbPrJOSt3V0VnGRfpWbXdfuMmDfZl9bFS6OA9Pn3MlXViWNW+UI+vt0sq+s1ly5FT8etM9NPxl8AeZMpEBBel27us7qKzvDbV2Z9kAMRW5gO9qXjRrxtrHVWcwfpQ6xA7QJQMemzDOqwOownTUGL+wSHKQwmTN9HB+ZZ7+E5t9bVWb4GP/yk6FgJZDIqGqOaHnynB0AxqQ+5zB5IdAAEIPN81LjZjTNEuTpJYpvmU0EyZWbNAyRoJjhCCh2fkHIawDXCZzcWe8+QntoWQlDl4hgSgvvuFSj7+vCszvQZjTaAQPRyHODUmIFOSS/ggGra7RLAiCLSFbVKUydHaZ/d/7+CHwtI4l5Ymkr75TlEaiczzuGIXE4Xq1a999DbSunt0J2RQn9z303XHNcnYFIckr0Dz1TQgdFb9dRgAgXsmgA7t+w4jBQT2wDBnb33ouYM7fAfEuWvLlA8qsBG3u3DbokSUBTWRh9ap5/WSR5HzF6OJ6cXjTGjAAH+zsdHqc7NopqZQyqOPjFesCwuskHRj1s6qG9QJNFYkm7z3E6YXGMfiBM+MZ4dzdUo1wp9BN5kwgdX18Uklr8s+XtM4wgLycwhs+TeML1WO0596wYicJkwT+28SZcTQlg/oqj7c0yca9ipkY0IX0ZYNRWCoayuM28gIE9MaZ6BBOmU3vLqj/sH/SBFDUGdcfrLGYwR7/GBCd+eYxj1SsTy+DQJFQ6vzzZ8PgWXeHEvrZxrP0X+votFnVJHDxAcJoD/Y14sQTaAImQwFNmjIvpN7LzuJqW/XNeUA3PLtC8yVYgRqN43/nvFiqaTg6QDZXbHi2LKhKXHF00T5skDxUbkpOcDx3rx7IAqfN0nhuT8k163kJE87eB/OwSn2IVkbWA93vlQD2m+hPwzFhhya9qUsYMmY7R9h557bTrTPeRHpbLKhKfnSYZrYc9gOdQ8e5Et3098mxR/BkIIZk3PEzSqExUY1OCSCJTX4QXIq/qRTaw9cy3yB+jY38dQQ/Si/qkwu5mIBV3EdMtaEHq59xZduF1oRZjnkFhMuS9v63KrF3pvKgsMMoSzXS7PvB8U9YzfdI5R69eJ/6EhQzsPT5QUlQFneQHGprDQ1RtgoPJHJ0p0h8jnF5YggAABBvNdDe5ZkITxZlEsSTAn7uLGF9Y6tyy/9VBXtqYlqKMkzLfly0Z3FCtBdc/RZiqF37TUTqB2cPLbs+Nh2BIURhuE96XUagA+S/tslAykpfapocfxnw6+UksbMxTeCzNtN+nN11TIyHfkG+OSPUVJ89OQuyKHrqiSf941Vyko7+vJGYqMF7SDEGNB6FAKRSSH0wxjR7k9uqgo3uHqVJam+GS2rmHuEuja5bi/8kw6uUNoDdPK84Ni4N6gJ4anhttxGSLyC88kAFDrDYVnpNJTh2KYOZMKSr6rRu4aQwRj94vSNDF2DwUwnjTB92ioULXAm/nUjR/BmSnWZF4f0er863/iAvUbM/QsN9hUHy4YD+nb8HVOceuuxd/LbAf/Kp4JuVb71zxLQHuq0gXFMEMXuytqLBc8e2+gBiqdX71FNMEW2bqTFyDuJwvNenQilkG07FuSI9SW5dg+jB+fEfSQ3SUealqzAarrBLcEPgAQKFcOSMm2WOUL4uegOWNagvIPSw+cVIR6krMAaWVS86mchchBWYz4pqQ6ZWfH8dgWtfs7QZzqaVM5UbNdStY4PvdX19lMkjKx3GF4fJWM1+4axlUZgasgtvkiZnyTdolfQEe0NrCAEu0PgUP30RM5HqWB1r3zEO4BrQbc+AAPMst///dHPV8kljmZUtIrOFWHRUzDMpyyUQ87IbSHFbrmPBTk85dvKs89m3FfX0zbjAsbzZW84D6qznS4FZE5QFkcK5DfJfrkC6ufP3JAKObGlvovCCExzjZbilg85I96ArIcN4vPdkJrcuBKiFk5G/XWmGe0Q9c8nl5WKwQYT3v1NRUSJkFY+SNGCompE7fGWZhzaR2a/dPtziOrobGeqI3fqYZBmur5f3wY0FrV3XmBf5QB5uKP1Z/1ah/o8NVVBKNOCSex1CHRVeEppYutRjfTAfj8itGGsYlUzEGmeGEK/DGgjXFmD7iby56+mMHYJ/P/EG36TyVvnhrSm8TGNYq9ZGjGAa9ZTlqwiIye0efBk4cPJDb68+jCGDTFZeOcqn2yvgGdIqz5x55H4Z3kjXXui4OhfjfcWKsbq/9Wf8DNIJ4EX0nOw+r9eY7h4P29xmaFZsgopqadb2IbYJK4bxWrlCronXSJPij6Y7gYuwFoadhNd6N0b0rVYCEWiA/9e/ZJRAbVmvNVLZxDtdfFh/9Cd64z/l2olXL06o6f3r/2NwqcX49C/50KX25m7UDV+XRDAasclIa3Pn5g9a5alEHERz/XP14H+WFxTFjbh+a5cqI/9huFIIXS0lzPjbUcaSpJylPJ12f2iUXV4HFW0m7ihDZ3bG7jKrZrQi83G3own/HBmxgM4l4mK+7aRVI9twAAAj6JbLuIl95pGbFGXSv3R/U+c2diH9pdOW5CepEvr6T/e0GdDbp46cfa+nwRYQZ/U2he/m1lD6aFCcxozaRAsnLTNTS4fyFkInl0P1rLB2PXjoA6CxQRrxHFM7WV925sxeA6X14naKdNArxUouNHVm7423G6+NNaZDnuKwxwCnsHoy8s9bIax69ateND+sNqguPPYz6pKtNqYBHphyObblZgi/biO/PeGi/R14bzV1ifGU06icoeLIy7Y9Z9s8hDbPr6vfA6RZrDgjhELq2aXIssOFTw/M8NqeVhXOOc7BfCM8S0WAXzI2Q5a4IRG8pensoNSiuRq6z/XXb1s+SYQ8nbafO5u8ySsZH+czPN008+qGl50qENI353oMxK8lks79qlKtVnLGMBiOR89g2Y9XRsZcz2uwZsVJglCCCwjgQAw0LTn9RJLb32p9fi9RId8P6rZfK/uziYU1aN3XxFMJHid5aFrTp1xa6VxU3oFyUstw3wr8BP8v9+yQXAbUf2vd4AAEv3F9XDqgBXfL4f567/x470+HPVMB9kDVaIFombZ1JCXdzOBqNwxDuAXMI9CsKPZ8dBD1kEunOCWSrEqU+8wRBF7v/hLTp1oQA72gzO2+rKahWm5+MSgGl11WYMSoFCJ2gQbg5FXBB6z02kRW/gVPCDj369Duv89sDkJ+KAL3HmVk+rAOwqlfZaLiuJHuAZxw/WcrX8wD4MX1TPFVbFxO0XJGCAiNaabFqAXmjAdkJifuofeMBrAlepFu1wWP0KS/Zhg4w//e2vfeghB9jwdKHY39F1nAUtH9ka6OcDGMV5B1v7WTZoV/dDu3FHakbH7YZloYQVxCrwJfx1Nf4+sroz1poP+FAKh5bNTxpmQ5yYNOpTEqqmSbvU2Bp/Sr0By9d8Q1vPNNgnnjv5N94/kVYuc9+BCjcYRuPk+sVZ1Oj6h+5RNEJk+pRVU87ybC6bG1oPOXfQAAAChHxba3E2rD8kE9MOdULwy9dkaVh01tiYJEeClC1eV63RGuPnvVTICOoV0P/kbH1WQ9p4d/ElPeibsS3dH15688uWmnK6bnyogk3dR+F0+jt1HHg+Ajw8mWht1WUQEKQWpT+Ji/OXAhl3lzuraM2r0EpO/Acf7oMF4bOB19Dk8mNZPm3dvgNr8ApRm/f6f/KF49J32M0pVXoIP1NPlHQEqPzZwodBtOOV4wOj9gv4qwq6Nt+KAI7HwS6d1ZqQizKo16ous49qbn7HJLMaIB6vlaL1NPlOneIyk00eHLFzP1sfzV/0eYqOlDy6RbSpxY2Ll2YLvtrHtJNu9G7bmdmXeHM9SZinvRTvVKGs4WcQSoyXQsno6sRpgrDXwfXfk6Ya5vdoOspNCaLBpL9gf6RIhpNeG6A39C61IOrnrd+jqQlBfwzueNopvnUyJmU/PWu6Z/+gXPzxA47/NBjt/iP7PJE7cwCjqlgzFXMkRzkFJGN9Y0zKvZlAgJGQZ1kn4HOqMagx/VPt97tzIlTN+8I+pn2Ceba79VXEw1/lGjNjWZzddKN5bOawr47iF0yOcwcpBVORmZtSdAj5ov/dqZOMANTyThURGpdHu/0CzrlaN+nThXp6ShHMvYaJWJLdkFK0LBcC73xkzCKou7HjjDfSGyC3GvjSj+yAAABUvw53jSa9KvqgmOmK39VlpoIdaKzc84FUZzWENt4M36fvJacVkuTwS8u9h5xvAfQMWZh4C1iao2zih/UX+ZfqDgfHzB5xiWkFk29++bAEnlJRELj7cTefPN2ftJfdYr9A5MLhajxNi2t6OZdrySkdE2wGwyQ/vSSPcE0kouWUOyeQ+7J0KxYYPRKu/hrSOQoroTRVJccfm8A15ctgp05ZadAWeV6tZtbnPKGufFelPthvwXlAgWJq6KvAaOE6cMLf/lm7qrS44jVsij4wo3P3HjN9VvSEvBDF+UAPJc/dQnBxDLWvfEp5x5Ti12ENVhxCPA7T2MW8Oq9n79hOn+CFV/MREFSzJ39x21lr6Y9QbxX3Mr52n77q2zs2UzH5PSEern+VSy+jVi/dGCV/zvEP7H9JsG9Xr/dGH7Vz2qY2LS02LDFIEB8XIkLztCuzqxShL7NSnK78cVoFbC++oKyx88wKztSOTzWmXE4ov/qs3I8OPyBYdC13ZEjDuvCfAXdPUcYl5dG2iNItevw4ciiuihmDUFcDl5n4Ovcloxx3F1TM7X97B/OLd9dMvwF3K2yyc4YaV2ob20IqvzKZMNH4ApSajgFLzbkVfYOounfW05YtL0WXoCSUKd5THw8WEuIz/vMdhlacHHDetXOgSAMmBxh4xst3QYQ/l2NdmzvI7u9gAAAGhsB/XJt+/KEQn+PCZ4cHVUyOyLmTkRq+TtZFuh/UrpZlYEIArPqrxa0h+xUaKWV3sd2CwWq41Cvz4xlU9aJkozq0NAMR2A9YsHH8Kcw0Qp7zkOuZlrWJVUTjTdMCaEZu46bkdMl8ngz+Fcrf6CGx6XPRNTKoGUNoqlCtsWxdCbmcFSyCE231cTIYWFw39kbxSO8BPgGaje3NrX/ASY1DPjwc/ZWtq/v+jHJ5oamOVLL29g84zruuY2ib4Pu/no70KJpZySg3CeMhLTWMhw/SHFeSqniLTFx8rx+h4cD6r8Cb+7msyvNnSBLESCeqiJWQvyi3k1wypqGSZ4EQDhTFtWEDmv4EjA+eb91KbK0BKAw7OjZ+XgDG0KvMs26xL0vQ5JQi0+SSGMMH91lWIwMkENz/kEAQOUgeDZXXwR4XkeviRTcIp8fLIbtzKo2d3fV+o9TdM3aTYQ6cyB60Dx+RpcuSWD3K9ZZXgflD8aEAAAAOryUPoDTLBJCOa/ZhnwzF9z0QuQRm3wXBP89rBq33ZCRyqUxNKD+/mQv0SLVumBEjuBsTEZugZbB0ZohjaVtuf8+3jT70vkH5luDK+0b9Bb3cW3SR1ktwGXW74O0LVuCWfRrDsvAizw4bMaffaGsvsaQCe7i7cW8Gi05wcxQloZ85tFAAAAAAAAAAAAAAAAAAAAAA=";xt();function ta({size:e=48}){return yt.default.createElement("img",{className:"acv-home-mascot",src:ea,alt:"","aria-hidden":"true",decoding:"async",draggable:"false",width:e,height:e,style:{width:e,height:e}})}function _e({size:e=20,className:t=""}){return yt.default.createElement("img",{className:`acv-brand-mark ${t}`.trim(),src:nt,alt:"","aria-hidden":"true",decoding:"async",draggable:"false",width:e,height:e,style:{width:e,height:e}})}function wt({space:e,onOpen:t,updateOnCover:n=!1}){return D.default.createElement("button",{type:"button",className:"acv-space-card",onClick:()=>t(e.slug),style:{"--accent":e.accent,"--accent-to":e.accentTo}},D.default.createElement(at,{space:e}),D.default.createElement("span",{className:"acv-space-body"},D.default.createElement("span",{className:"acv-space-title"},e.title),D.default.createElement("span",{className:"acv-space-sub"},e.subtitle),D.default.createElement("span",{className:"acv-space-meta"},D.default.createElement("span",{className:n?"acv-space-updated--cover":void 0},e.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${de(e.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u5E16"),!n&&D.default.createElement("span",{className:"acv-dot"}),D.default.createElement("span",{className:"acv-space-desc"},e.description||""))))}var ko=[{key:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{key:"members",label:"\u6D3B\u8DC3\u6210\u5458"}];function aa({api:e,me:t,initialData:n=null,onOpenSpace:o,onOpenPost:a,onDm:r}){let[s,i]=D.default.useState(n),[l,d]=D.default.useState(""),[c,u]=D.default.useState("recent"),p=D.default.useCallback(()=>{e.home().then(i).catch(m=>d(m.message))},[e]);return D.default.useEffect(()=>{n||p()},[p,t]),l?D.default.createElement("div",{className:"acv-loading"},l):s?D.default.createElement("div",{className:"acv-main"},D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-section-head acv-section-head--brand"},D.default.createElement(ta,{size:64}),D.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u677F\u5757"),D.default.createElement("span",{className:"acv-section-note"},"\u70B9\u5F00\u4E00\u4E2A\u677F\u5757\u8FDB\u5165\u8BA8\u8BBA\u533A")),s.spaces.map(m=>D.default.createElement(wt,{key:m.id,space:m,onOpen:o,updateOnCover:!0}))),D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-panel acv-feed"},D.default.createElement("div",{className:"acv-feed-head"},D.default.createElement("div",{className:"acv-feed-tabs",role:"tablist","aria-label":"\u793E\u533A\u52A8\u6001"},ko.map(m=>D.default.createElement("button",{key:m.key,type:"button",role:"tab",id:`acv-feed-tab-${m.key}`,"aria-selected":c===m.key,"aria-controls":`acv-feed-panel-${m.key}`,className:c===m.key?"acv-feed-tab is-active":"acv-feed-tab",onClick:()=>u(m.key)},m.label))),D.default.createElement("button",{type:"button",className:"acv-link acv-feed-refresh",onClick:p,"aria-label":"\u5237\u65B0",title:"\u5237\u65B0"},D.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},D.default.createElement("path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8m0-5v5h-5"}),D.default.createElement("path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16m5 0H3v5"})))),D.default.createElement("div",{className:"acv-feed-body",role:"tabpanel",id:`acv-feed-panel-${c}`,"aria-labelledby":`acv-feed-tab-${c}`},c==="recent"?s.recent.length===0?D.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u5E16\u5B50"):s.recent.map(m=>D.default.createElement("div",{key:m.id,className:"acv-recent-item"},D.default.createElement(te,{api:e,me:t,handle:m.author.handle,onDm:r},D.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:ie(m.author)},se(m.author))),D.default.createElement("span",{className:"acv-recent-main"},D.default.createElement("a",{className:"acv-recent-link",href:`/post/${encodeURIComponent(m.id)}`,onClick:g=>{g.button!==0||g.metaKey||g.ctrlKey||g.shiftKey||g.altKey||(g.preventDefault(),a(m.id))}},D.default.createElement("span",{className:"acv-recent-title"},m.title),D.default.createElement("span",{className:"acv-recent-excerpt"},m.excerpt)),D.default.createElement("span",{className:"acv-recent-meta"},m.spaceTitle," \xB7"," ",D.default.createElement(te,{api:e,me:t,handle:m.author.handle,onDm:r},D.default.createElement("span",null,m.author.displayName))," ","\xB7 ",de(m.lastActivityAt)," \xB7 ",m.commentCount," \u6761\u8BC4\u8BBA")))):(s.members||[]).length===0?D.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8FC7\u5E16"):(s.members||[]).map(m=>D.default.createElement("div",{key:m.id,className:"acv-member"},D.default.createElement(te,{api:e,me:t,handle:m.handle,onDm:r},D.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:ie(m)},se(m))),D.default.createElement("span",{className:"acv-member-main"},D.default.createElement(te,{api:e,me:t,handle:m.handle,onDm:r},D.default.createElement("span",{className:"acv-member-name"},m.displayName)),D.default.createElement(te,{api:e,me:t,handle:m.handle,onDm:r},D.default.createElement("span",{className:"acv-member-meta"},"@",m.handle))),D.default.createElement("span",{className:"acv-chip"},m.postCount," \u5E16"))))))):D.default.createElement("div",{className:"acv-main"},D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-skeleton"}),D.default.createElement("div",{className:"acv-skeleton"}),D.default.createElement("div",{className:"acv-skeleton"})),D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-skeleton",style:{height:820}})))}var z=Z(require("react"),1);var ae=Z(require("react"),1);var R=Z(require("react"),1);var ge=Z(require("react"),1);He();var Pe=Z(require("react"),1);He();var rt=Pe.default.createContext(null);function kt({emoji:e,api:t}){let n=Pe.default.useContext(rt),[o,a]=Pe.default.useState(!1);return o?Pe.default.createElement("span",{title:e.label},"[",e.label,"]"):Pe.default.createElement("img",{className:"acv-emoji",src:(t||n)?.assetUrl(e.path)||e.path,alt:`[${e.label}]`,title:e.label,width:"64",height:"64",loading:"lazy",decoding:"async",onError:()=>a(!0)})}function Le({text:e,api:t}){let n=Pe.default.useContext(rt);return!t&&!n?e:Ae(e).map((o,a)=>typeof o=="string"?o:Pe.default.createElement(kt,{key:a,emoji:o,api:t}))}function na({api:e,onSelect:t,onClose:n,disabled:o,id:a}){let[r,s]=ge.default.useState("");return ge.default.createElement("div",{className:"acv-emoji-picker",id:a,role:"dialog","aria-label":"\u6D77\u8C5A\u8868\u60C5"},ge.default.createElement("div",{className:"acv-emoji-picker-head"},ge.default.createElement("input",{className:"acv-input",autoFocus:!0,value:r,placeholder:"\u641C\u7D22\u8868\u60C5\u540D\u79F0","aria-label":"\u641C\u7D22\u8868\u60C5\u540D\u79F0",onChange:i=>s(i.target.value)}),ge.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n,"aria-label":"\u5173\u95ED\u8868\u60C5\u9762\u677F"},"\xD7")),ge.default.createElement("div",{className:"acv-emoji-picker-body"},["\u8868\u60C5\u5FC3\u60C5","\u804C\u4E1A\u7231\u597D","\u751F\u6D3B\u51FA\u6E38"].map(i=>{let l=Ue.filter(d=>d.category===i&&d.label.includes(r.trim()));return l.length>0&&ge.default.createElement("section",{key:i,"aria-label":i},ge.default.createElement("h4",null,i),ge.default.createElement("div",{className:"acv-emoji-grid"},l.map(d=>ge.default.createElement("button",{key:d.id,type:"button",className:"acv-emoji-choice",disabled:o,title:d.label,"aria-label":d.label,onClick:()=>t(d)},ge.default.createElement(kt,{emoji:d,api:e})))))}),!Ue.some(i=>i.label.includes(r.trim()))&&ge.default.createElement("p",null,"\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u8868\u60C5")))}He();var ra=new Map(Ue.map(e=>[e.id,e]));function sa(e,t=!1){if(!t)return Ae(e);let n=[],o=0;for(let a of e.matchAll(/```[\s\S]*?(?:```|$)|`[^`\n]+`|\[[^\]\n]+\]\([^)\s]+\)/g))n.push(...Ae(e.slice(o,a.index)),a[0]),o=a.index+a[0].length;return[...n,...Ae(e.slice(o))]}function ia(e,t,n,o=!1){let a=e.ownerDocument,r=a.createDocumentFragment();for(let s of sa(t,o))if(typeof s=="string")s.split(`
`).forEach((i,l)=>{l&&r.append(a.createElement("br")),i&&r.append(a.createTextNode(i))});else{let i=a.createElement("span"),l=a.createElement("img");i.dataset.emoji=s.id,i.contentEditable="false",i.className="acv-editor-emoji",i.setAttribute("aria-label",s.label),l.src=n(s.path),l.alt=`[${s.label}]`,l.title=s.label,l.draggable=!1,l.onerror=()=>{i.replaceChildren(a.createTextNode(`[${s.label}]`))},i.append(l),r.append(i)}if(t.endsWith(`
`)){let s=a.createElement("br");s.dataset.editorEnd="",r.append(s)}e.replaceChildren(r)}function Ye(e){function t(n){if(n.nodeType===3)return n.nodeValue;if(n.nodeType!==1&&n.nodeType!==11||n.dataset?.editorEnd!==void 0)return"";let o=ra.get(n.dataset?.emoji);return o?o.token:n.nodeName==="BR"?`
`:Array.from(n.childNodes).map((a,r)=>(r>0&&/^(DIV|P)$/.test(a.nodeName)?`
`:"")+t(a)).join("")}return t(e)}function Fe(e){if(!e)return null;let t=e.ownerDocument.getSelection();if(!t?.rangeCount)return null;let n=t.getRangeAt(0);if(!e.contains(n.startContainer)||!e.contains(n.endContainer))return null;function o(a,r){let s=e.ownerDocument.createRange();return s.selectNodeContents(e),s.setEnd(a,r),Ye(s.cloneContents()).length}return[o(n.startContainer,n.startOffset),o(n.endContainer,n.endOffset)]}function la(e,t,n=t){let o=e.ownerDocument,a=o.createRange();function r(i){let l=0;for(let d of e.childNodes){let c=d.nodeType===3?d.nodeValue.length:d.dataset?.editorEnd!==void 0?0:ra.get(d.dataset?.emoji)?.token.length??(d.nodeName==="BR"?1:Ye(d).length);if(i<=l+c){if(d.nodeType===3)return[d,Math.max(0,i-l)];let u=Array.prototype.indexOf.call(e.childNodes,d);return[e,u+(i>l?1:0)]}l+=c}return[e,e.childNodes.length]}a.setStart(...r(t)),a.setEnd(...r(n));let s=o.getSelection();s.removeAllRanges(),s.addRange(a)}function ca(e,t,n,o,a,r=!1,s=null){let i=0,l=sa(e,r).map(c=>{let u=typeof c=="string"?c.length:c.token.length,p={start:i,end:i+u,atomic:typeof c!="string"};return i+=u,p});for(let c of l.filter(u=>u.atomic))t>c.start&&t<c.end&&(t=c.start),n>c.start&&n<c.end&&(n=c.end);if(s&&t===n){let c=l.find(u=>u.atomic&&(s==="backward"?u.end===t:u.start===n));if(c)t=c.start,n=c.end;else{let u=[...new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(e)].map(p=>p.index);s==="backward"?t=u.filter(p=>p<t).at(-1)??0:n=u.find(p=>p>n)??e.length}}let d=e.slice(0,t)+o+e.slice(n);return d.length<=a?{value:d,start:t+o.length,end:t+o.length}:null}function Be({api:e,value:t,onChange:n,maxLength:o,disabled:a=!1,placeholder:r,tall:s=!1,markdown:i=!1}){let l=R.default.useRef(null),d=R.default.useRef(null),c=R.default.useRef(null),u=R.default.useRef(t),p=R.default.useRef([t.length,t.length]),m=R.default.useRef(!1),g=R.default.useRef([{value:t,start:t.length,end:t.length}]),y=R.default.useRef(0),[k,$]=R.default.useState(!1),[H,I]=R.default.useState(""),P=R.default.useId(),T=R.default.useCallback(()=>{$(!1),c.current?.focus()},[]);function U(f,b=!0){u.current=f.value,p.current=[f.start,f.end],ia(l.current,f.value,e.assetUrl,i),b&&(l.current.focus(),la(l.current,f.start,f.end))}R.default.useLayoutEffect(()=>{m.current||(Ye(l.current)!==t&&U({value:t,start:t.length,end:t.length},!1),(u.current!==t||g.current[y.current].value!==t)&&(u.current=t,g.current=[{value:t,start:t.length,end:t.length}],y.current=0))},[t,e,i]),R.default.useEffect(()=>{let f=()=>{let b=Fe(l.current);b&&(p.current=b)};return document.addEventListener("selectionchange",f),()=>document.removeEventListener("selectionchange",f)},[]),R.default.useEffect(()=>{if(!k)return;let f=M=>{d.current?.contains(M.target)||$(!1)},b=M=>{M.key==="Escape"&&(M.preventDefault(),M.stopImmediatePropagation(),T())};return document.addEventListener("pointerdown",f),window.addEventListener("keydown",b,!0),()=>{document.removeEventListener("pointerdown",f),window.removeEventListener("keydown",b,!0)}},[k,T]),R.default.useEffect(()=>{a&&$(!1)},[a]);function A(f){if(!f){I(`\u6700\u591A ${o} \u4E2A\u5B57\u7B26`),U(g.current[y.current]);return}let b=g.current[y.current];b.start=p.current[0],b.end=p.current[1],f.value!==b.value&&(g.current=[...g.current.slice(0,y.current+1),f].slice(-200),y.current=g.current.length-1),U(f),n(f.value),I("")}function q(f,b=null){if(a||m.current)return;let M=Fe(l.current)||p.current;p.current=M,A(ca(u.current,...M,f,o,i,b))}function K(f=!1){if(a||m.current)return;let b=y.current+(f?1:-1);if(b<0||b>=g.current.length)return;y.current=b;let M=g.current[b];U(M),n(M.value),I("")}function x(){if(a||m.current)return;let f=Ye(l.current),b=Fe(l.current)||[f.length,f.length];A(f.length<=o?{value:f,start:b[0],end:b[1]}:null)}function W(f){if(a){f.preventDefault();return}if(m.current||f.isComposing)return;let b=f.inputType;b==="historyUndo"||b==="historyRedo"?(f.preventDefault(),K(b==="historyRedo")):b==="insertParagraph"||b==="insertLineBreak"?(f.preventDefault(),q(`
`)):(b==="deleteContentBackward"||b==="deleteContentForward")&&(f.preventDefault(),q("",b.endsWith("Backward")?"backward":"forward"))}R.default.useEffect(()=>{let f=l.current;return f.addEventListener("beforeinput",W),()=>f.removeEventListener("beforeinput",W)});function w(f){f.isComposing||f.nativeEvent.isComposing||m.current||((f.ctrlKey||f.metaKey)&&["z","y"].includes(f.key.toLowerCase())?(f.preventDefault(),K(f.shiftKey||f.key.toLowerCase()==="y")):f.key==="Enter"?(f.preventDefault(),q(`
`)):["Backspace","Delete"].includes(f.key)&&!f.ctrlKey&&!f.metaKey&&!f.altKey&&(f.preventDefault(),q("",f.key==="Backspace"?"backward":"forward")))}function v(f,b=!1){let M=Fe(l.current);!M||M[0]===M[1]||(f.preventDefault(),f.clipboardData.setData("text/plain",u.current.slice(...M)),b&&q(""))}return R.default.createElement("div",{className:"acv-emoji-editor",ref:d},R.default.createElement("div",{ref:l,role:"textbox","aria-multiline":"true","aria-label":r,"aria-disabled":a,"data-placeholder":r,contentEditable:!a,suppressContentEditableWarning:!0,spellCheck:!0,className:`acv-textarea acv-visual-editor${s?" acv-textarea--tall":""}`,onInput:x,onKeyDown:w,onCompositionStart:()=>{m.current=!0},onCompositionEnd:()=>{m.current=!1,x()},onPaste:f=>{f.preventDefault(),q(f.clipboardData.getData("text/plain").replace(/\r\n?/g,`
`))},onCopy:f=>v(f),onCut:f=>v(f,!0),onDrop:f=>f.preventDefault()}),R.default.createElement("div",{className:"acv-emoji-toolbar"},R.default.createElement("button",{ref:c,type:"button",className:"acv-btn ghost","aria-expanded":k,"aria-controls":P,disabled:a,onMouseDown:()=>{let f=Fe(l.current);f&&(p.current=f)},onClick:()=>{m.current||$(!k)}},"\u263A \u8868\u60C5"),R.default.createElement("span",null,t.length," / ",o)),k&&R.default.createElement(na,{id:P,api:e,onSelect:f=>q(f.token),onClose:T,disabled:a}),H&&R.default.createElement("p",{className:"acv-error",role:"alert"},H))}function da({space:e,api:t,onClose:n,onCreated:o,notify:a}){let[r,s]=ae.default.useState(""),[i,l]=ae.default.useState(""),[d,c]=ae.default.useState(!1),[u,p]=ae.default.useState("");ae.default.useEffect(()=>{let g=y=>{y.key==="Escape"&&n()};return window.addEventListener("keydown",g),()=>window.removeEventListener("keydown",g)},[n]);async function m(){c(!0),p("");try{let g=await t.createPost({spaceId:e.id,title:r,body:i});a("\u5E16\u5B50\u53D1\u51FA\u53BB\u4E86"),o(g.post)}catch(g){p(g.message)}finally{c(!1)}}return ae.default.createElement("div",{className:"acv-overlay",onClick:n},ae.default.createElement("div",{className:"acv-modal acv-modal--wide",onClick:g=>g.stopPropagation()},ae.default.createElement("h3",{className:"acv-modal-title"},ae.default.createElement(_e,{size:24}),ae.default.createElement("span",null,"\u5728\u300C",e.title,"\u300D\u53D1\u5E16")),ae.default.createElement("p",{className:"acv-modal-sub"},"\u6807\u9898\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u6B63\u6587\u5C55\u5F00\u8BB2\u3002\u53D1\u5B8C\u4F1A\u76F4\u63A5\u8FDB\u8BE6\u60C5\u9875\u3002"),u&&ae.default.createElement("div",{className:"acv-error"},u),ae.default.createElement("div",{className:"acv-field"},ae.default.createElement("label",null,"\u6807\u9898"),ae.default.createElement("input",{className:"acv-input",autoFocus:!0,value:r,maxLength:160,placeholder:"\u60F3\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",onChange:g=>s(g.target.value)})),ae.default.createElement("div",{className:"acv-field"},ae.default.createElement("label",null,"\u6B63\u6587"),ae.default.createElement(Be,{api:t,value:i,onChange:l,maxLength:2e4,disabled:d,placeholder:"\u5C55\u5F00\u8BF4\u8BF4\uFF0C\u652F\u6301\u6362\u884C",tall:!0,markdown:!0})),ae.default.createElement("div",{className:"acv-row"},ae.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n},"\u53D6\u6D88"),ae.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:d||!r.trim()||!i.trim(),onClick:m},d?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u5E03"))))}var ce=Z(require("react"),1);function pt({api:e,post:t,me:n,onAuth:o}){let[a,r]=ce.default.useState(null),[s,i]=ce.default.useState(!1),[l,d]=ce.default.useState(""),[c,u]=ce.default.useState(!1),p=ce.default.useRef(!0),m=ce.default.useRef(null);ce.default.useEffect(()=>(p.current=!0,()=>{p.current=!1}),[]);async function g(){u(!0),d("");try{let y=await Promise.resolve().then(()=>(za(),Ta));p.current&&(r(()=>y.PosterDialog),i(!0))}catch{p.current&&d("\u6D77\u62A5\u9762\u677F\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}finally{p.current&&u(!1)}}return ce.default.createElement(ce.default.Fragment,null,ce.default.createElement("button",{ref:m,type:"button",className:"acv-poster-icon",title:"\u751F\u6210\u6D77\u62A5","aria-label":`\u751F\u6210\u6D77\u62A5\uFF1A${t.title}`,disabled:c,onClick:y=>{y.stopPropagation(),g()}},ce.default.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},ce.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4"}),ce.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),ce.default.createElement("path",{d:"m3 17 5-5 4 4 3-3 6 6"}))),l&&ce.default.createElement("span",{role:"alert",className:"acv-error"},l),s&&a&&ce.default.createElement(a,{api:e,postId:t.id,me:n,onLogin:()=>{i(!1),o()},onClose:()=>{i(!1),m.current?.focus()}}))}function Pa({api:e,slug:t,page:n=1,onPageChange:o,me:a,onBack:r,onOpenPost:s,onAuth:i,onDm:l,notify:d}){let[c,u]=z.default.useState(null),[p,m]=z.default.useState(""),[g,y]=z.default.useState(!1),[k,$]=z.default.useState(!0),[H,I]=z.default.useState(0),P=z.default.useMemo(()=>Yt(e),[e]),T=z.default.useRef(null),U=z.default.useRef(n);if(z.default.useEffect(()=>($(!0),m(""),P.load(t,n,{success(v){u(v),v.pagination.page&&v.pagination.page!==n&&o(v.pagination.page),U.current!==v.pagination.page&&T.current?.scrollIntoView({block:"start"}),U.current=v.pagination.page},failure(v){m(v.message)},settled(){$(!1)}}),()=>P.cancel()),[P,t,n,H,o]),!c)return z.default.createElement("div",{style:{paddingTop:22}},z.default.createElement("button",{type:"button",className:"acv-back",onClick:r},"\u2190 \u8FD4\u56DE\u9996\u9875"),p?z.default.createElement("div",{className:"acv-error",role:"alert"},p," ",z.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>I(v=>v+1)},"\u91CD\u8BD5")):z.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u6253\u5F00\u677F\u5757\u2026"));let{space:A,posts:q,pagination:K}=c,x=K.page||1,W=v=>{k||o(v)},w=!!a?.emailVerified;return z.default.createElement("div",{style:{paddingTop:20,display:"flex",flexDirection:"column",gap:16}},z.default.createElement("div",null,z.default.createElement("button",{type:"button",className:"acv-back",onClick:r},"\u2190 \u8FD4\u56DE\u9996\u9875")),z.default.createElement("div",{className:"acv-board-head",style:{"--accent":A.accent,"--accent-to":A.accentTo}},z.default.createElement("h2",{className:"acv-board-title"},A.title),z.default.createElement("p",{className:"acv-board-sub"},A.description||A.subtitle),z.default.createElement("div",{className:"acv-board-actions"},z.default.createElement("button",{type:"button",className:"acv-btn",style:{background:"#fff",color:"#16161d"},onClick:()=>{if(!a)return i();if(!w)return d("\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16");y(!0)}},"\u53D1\u5E16"),z.default.createElement("span",{className:"acv-chip",style:{background:"rgba(255,255,255,.22)",color:"#fff"}},A.postCount," \u4E2A\u5E16\u5B50"))),!a&&z.default.createElement("div",{className:"acv-notice"},"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u9700\u8981\u3002",z.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:i},"\u767B\u5F55")),a&&!a.emailVerified&&z.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002\u9A8C\u8BC1\u90AE\u4EF6\u5728\u6536\u4EF6\u7BB1\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u5934\u50CF\u83DC\u5355\u91CC\u91CD\u53D1\u3002"),z.default.createElement("div",{className:"acv-board-grid"},z.default.createElement("div",{className:"acv-col"},z.default.createElement("div",{ref:T,className:"acv-panel",style:{padding:"8px 18px",scrollMarginTop:20},"aria-busy":k},k&&z.default.createElement("div",{className:"acv-loading",role:"status"},"\u6B63\u5728\u52A0\u8F7D\u5E16\u5B50\u2026"),p&&z.default.createElement("div",{className:"acv-error",role:"alert"},p," ",z.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>I(v=>v+1)},"\u91CD\u8BD5")),q.length===0&&z.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5E16\u5B50\uFF0C\u6765\u53D1\u7B2C\u4E00\u6761\u3002"),q.map(v=>z.default.createElement("div",{key:v.id,className:"acv-post-row acv-post-row--poster"},z.default.createElement("div",{className:"acv-post-row-heading"},z.default.createElement("a",{className:"acv-post-open",href:`/post/${encodeURIComponent(v.id)}`,onClick:f=>{f.button!==0||f.metaKey||f.ctrlKey||f.shiftKey||f.altKey||(f.preventDefault(),s(v.id,x))}},z.default.createElement("span",{className:"acv-post-title"},v.title),z.default.createElement("span",{className:"acv-post-excerpt"},v.excerpt)),z.default.createElement(pt,{api:e,post:v,me:a,onAuth:i})),z.default.createElement("span",{className:"acv-post-meta"},z.default.createElement(te,{api:e,me:a,handle:v.author.handle,onDm:l},z.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:ie(v.author)},se(v.author)),v.author.displayName),z.default.createElement("span",{className:"acv-dot"}),de(v.lastActivityAt),z.default.createElement("span",{className:"acv-dot"}),v.commentCount," \u6761\u8BC4\u8BBA"))),K.total>0&&z.default.createElement("nav",{className:"acv-pagination","aria-label":"\u5E16\u5B50\u5206\u9875"},z.default.createElement("p",{"aria-live":"polite"},"\u5171 ",K.total," \u6761 \xB7 \u7B2C ",K.page," / ",K.pageCount," \u9875"),z.default.createElement("div",{className:"acv-pagination-buttons"},z.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:k||!K.hasPrevious,onClick:()=>W(x-1)},"\u4E0A\u4E00\u9875"),jt(x,K.pageCount).map(v=>typeof v=="number"?z.default.createElement("button",{type:"button",key:v,className:"acv-btn ghost","aria-label":`\u7B2C ${v} \u9875`,"aria-current":v===x?"page":void 0,disabled:k||v===x,onClick:()=>W(v)},v):z.default.createElement("span",{key:v,"aria-hidden":"true"},"\u2026")),z.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:k||!K.hasNext,onClick:()=>W(x+1)},"\u4E0B\u4E00\u9875"))))),z.default.createElement("aside",{className:"acv-col"},z.default.createElement("div",{className:"acv-panel"},z.default.createElement("div",{className:"acv-section-head"},z.default.createElement("h2",{className:"acv-section-title"},"\u677F\u5757\u8BF4\u660E")),z.default.createElement("p",{className:"acv-space-sub"},A.description||A.subtitle||"\u8FD8\u6CA1\u6709\u5199\u4ECB\u7ECD\u3002"),z.default.createElement("div",{className:"acv-stats",style:{marginTop:14}},z.default.createElement("div",{className:"acv-stat"},z.default.createElement("div",{className:"acv-stat-value"},A.postCount),z.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),z.default.createElement("div",{className:"acv-stat"},z.default.createElement("div",{className:"acv-stat-value"},q.length),z.default.createElement("div",{className:"acv-stat-label"},"\u6761\u5728\u672C\u9875"))),z.default.createElement("p",{className:"acv-space-sub",style:{marginTop:14}},a?.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u4E0A\u9762\u7684\u300C\u53D1\u5E16\u300D\u3002":a?"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u3001\u8BC4\u8BBA\u624D\u9700\u8981\u3002")))),g&&z.default.createElement(da,{api:e,space:A,notify:d,onClose:()=>y(!1),onCreated:v=>{y(!1),s(v.id,1)}}))}var E=Z(require("react"),1);var V=Z(require("react"),1);var Da=/(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(~~[^~\n]+~~)|(\[[^\]\n]+\]\([^)\s]+\))|(https?:\/\/[^\s<>"'`，。！？；：、（）【】《》“”‘’]+)/gi,Ze=/^\s*([-*+]|\d+[.)])\s+/,Aa=/^(#{1,6})\s+(.*)$/,Mo=/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/;function ut(e,t){let n=[],o=/https?:\/\/[^\s<>"'`，。！？；：、（）【】《》“”‘’]+/gi,a=0;for(let r of e.matchAll(o)){let s=r[0];for(;s;){let i=s.at(-1),l={")":"(","]":"[","}":"{"}[i],d=l&&s.split(i).length>s.split(l).length;if(/[.,!?;:]/.test(i)||d)s=s.slice(0,-1);else break}try{if(!new URL(s).hostname)continue}catch{continue}r.index>a&&n.push(V.default.createElement(Le,{key:`${t}-text-${a}`,text:e.slice(a,r.index)})),n.push(V.default.createElement("a",{key:`${t}-url-${r.index}`,href:s,target:"_blank",rel:"noreferrer noopener"},s)),a=r.index+s.length}return a<e.length&&n.push(V.default.createElement(Le,{key:`${t}-tail-${a}`,text:e.slice(a)})),n}function Xe(e,t){let n=[],o=0,a;for(Da.lastIndex=0;(a=Da.exec(e))!==null;){a.index>o&&n.push(V.default.createElement(Le,{key:`${t}-text-${o}`,text:e.slice(o,a.index)}));let r=a[0],s=`${t}-${a.index}`;if(r.startsWith("`"))n.push(V.default.createElement("code",{key:s,className:"acv-md-code"},r.slice(1,-1)));else if(r.startsWith("**"))n.push(V.default.createElement("strong",{key:s},ut(r.slice(2,-2),s)));else if(r.startsWith("~~"))n.push(V.default.createElement("del",{key:s},ut(r.slice(2,-2),s)));else if(r.startsWith("[")){let i=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(r),l=i?.[2]||"#",d=/^(https?:\/\/|mailto:|\/)/i.test(l);n.push(d?V.default.createElement("a",{key:s,href:l,target:"_blank",rel:"noreferrer noopener"},i[1]):V.default.createElement("span",{key:s},i?.[1]||r))}else/^https?:\/\//i.test(r)?n.push(...ut(r,s)):n.push(V.default.createElement("em",{key:s},ut(r.slice(1,-1),s)));o=a.index+r.length}return o<e.length&&n.push(V.default.createElement(Le,{key:`${t}-tail`,text:e.slice(o)})),n}function La(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(t=>t.trim())}function Je({text:e,api:t}){let o=String(e||"").replace(/\r\n?/g,`
`).split(`
`),a=[],r=0,s=0;for(;r<o.length;){let l=o[r];if(/^\s*```/.test(l)){let p=l.trim().slice(3).trim(),m=[];for(r+=1;r<o.length&&!/^\s*```/.test(o[r]);)m.push(o[r]),r+=1;r+=1,a.push(V.default.createElement("pre",{key:`b${s++}`,className:"acv-md-pre"},V.default.createElement("code",null,m.join(`
`)),p&&V.default.createElement("span",{className:"acv-md-lang"},p)));continue}if(!l.trim()){r+=1;continue}let d=Aa.exec(l);if(d){let p=Math.min(d[1].length,4),m=`h${p}`;a.push(V.default.createElement(m,{key:`b${s++}`,className:`acv-md-h${p}`},Xe(d[2],`h${s}`))),r+=1;continue}if(/^\s*(-{3,}|\*{3,})\s*$/.test(l)){a.push(V.default.createElement("hr",{key:`b${s++}`,className:"acv-md-hr"})),r+=1;continue}if(l.includes("|")&&Mo.test(o[r+1]||"")){let p=La(l);r+=2;let m=[];for(;r<o.length&&o[r].includes("|")&&o[r].trim();)m.push(La(o[r])),r+=1;a.push(V.default.createElement("div",{key:`b${s++}`,className:"acv-md-table-wrap"},V.default.createElement("table",{className:"acv-md-table"},V.default.createElement("thead",null,V.default.createElement("tr",null,p.map((g,y)=>V.default.createElement("th",{key:y},Xe(g,`th${y}`))))),V.default.createElement("tbody",null,m.map((g,y)=>V.default.createElement("tr",{key:y},p.map((k,$)=>V.default.createElement("td",{key:$},Xe(g[$]||"",`td${y}-${$}`)))))))));continue}if(/^\s*>\s?/.test(l)){let p=[];for(;r<o.length&&/^\s*>\s?/.test(o[r]);)p.push(o[r].replace(/^\s*>\s?/,"")),r+=1;a.push(V.default.createElement("blockquote",{key:`b${s++}`,className:"acv-md-quote"},V.default.createElement(Je,{text:p.join(`
`)})));continue}if(Ze.test(l)){let p=/^\s*\d+[.)]\s+/.test(l),m=[];for(;r<o.length&&Ze.test(o[r]);)for(m.push(o[r].replace(Ze,"")),r+=1;r<o.length&&o[r].trim()&&/^\s{2,}/.test(o[r])&&!Ze.test(o[r]);)m[m.length-1]+=` ${o[r].trim()}`,r+=1;let g=p?"ol":"ul";a.push(V.default.createElement(g,{key:`b${s++}`,className:"acv-md-list"},m.map((y,k)=>V.default.createElement("li",{key:k},Xe(y,`li${k}`)))));continue}let c=[];for(;r<o.length&&o[r].trim()&&!Aa.test(o[r])&&!Ze.test(o[r])&&!/^\s*>/.test(o[r])&&!/^\s*```/.test(o[r])&&!/^\s*(-{3,}|\*{3,})\s*$/.test(o[r]);)c.push(o[r]),r+=1;let u=[];c.forEach((p,m)=>{m>0&&u.push(V.default.createElement("br",{key:`br${m}`})),u.push(...Xe(p,`p${m}`))}),a.push(V.default.createElement("p",{key:`b${s++}`,className:"acv-md-p"},u))}let i=V.default.createElement("div",{className:"acv-md"},a);return t?V.default.createElement(rt.Provider,{value:t},i):i}var ne=Z(require("react"),1);function $a({api:e,post:t,onSaved:n,onCancel:o}){let[a,r]=ne.default.useState(t.title),[s,i]=ne.default.useState(t.body),[l,d]=ne.default.useState(!1),[c,u]=ne.default.useState(""),p=ne.default.useRef(!0),m=ne.default.useRef(!1);ne.default.useEffect(()=>(p.current=!0,()=>{p.current=!1}),[]);let g=a!==t.title||s!==t.body;async function y(k){if(k.preventDefault(),!m.current){m.current=!0,d(!0),u("");try{await e.updatePost(t.id,{title:a,body:s}),p.current&&n()}catch($){p.current&&u($.message)}finally{m.current=!1,p.current&&d(!1)}}}return ne.default.createElement("form",{className:"acv-post-editor",onSubmit:y,"aria-label":"\u7F16\u8F91\u5E16\u5B50"},c&&ne.default.createElement("div",{className:"acv-error",role:"alert"},c),ne.default.createElement("div",{className:"acv-field"},ne.default.createElement("label",{htmlFor:"post-edit-title"},"\u6807\u9898"),ne.default.createElement("input",{id:"post-edit-title",className:"acv-input",autoFocus:!0,maxLength:160,value:a,disabled:l,onChange:k=>r(k.target.value)})),ne.default.createElement("div",{className:"acv-field"},ne.default.createElement("label",null,"\u6B63\u6587"),ne.default.createElement(Be,{api:e,value:s,onChange:i,maxLength:2e4,disabled:l,tall:!0,markdown:!0})),ne.default.createElement("div",{className:"acv-row"},ne.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:l,onClick:()=>{(!g||window.confirm("\u653E\u5F03\u5C1A\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\uFF1F"))&&o()}},"\u53D6\u6D88"),ne.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:l||!g||!a.trim()||!s.trim()},l?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58")))}function Oa({api:e,id:t,me:n,onBack:o,backTo:a="home",onAuth:r,onDm:s,notify:i}){let[l,d]=E.default.useState(null),[c,u]=E.default.useState(""),[p,m]=E.default.useState(""),[g,y]=E.default.useState(!1),[k,$]=E.default.useState(""),[H,I]=E.default.useState(!1),[P,T]=E.default.useState(!1),U=E.default.useRef(0),A=E.default.useRef(!1),q=E.default.useCallback(()=>{let b=++U.current;return e.post(t).then(M=>{b===U.current&&(d(M),u(""))}).catch(M=>{b===U.current&&u(M.message)})},[e,t]);E.default.useEffect(()=>(d(null),T(!1),q(),()=>{U.current+=1}),[q]),E.default.useEffect(()=>{T(!1)},[n?.id]);async function K(){y(!0),$("");try{await e.createComment(t,{body:p}),m(""),q(),i("\u8BC4\u8BBA\u5DF2\u53D1\u5E03")}catch(b){$(b.message)}finally{y(!1)}}async function x(b){if(A.current||b==="deleted"&&!window.confirm("\u5220\u9664\u540E\u5E16\u5B50\u53CA\u5176\u8BC4\u8BBA\u5C06\u4E0D\u518D\u516C\u5F00\u663E\u793A\u3002\u786E\u5B9A\u5220\u9664\uFF1F"))return;A.current=!0;let M=U.current;I(!0);try{if(b==="deleted"?await e.deletePost(t):await e.setPostStatus(t,b),M!==U.current)return;i(b==="hidden"?"\u5E16\u5B50\u5DF2\u9690\u85CF":b==="deleted"?"\u5E16\u5B50\u5DF2\u5220\u9664":"\u5E16\u5B50\u5DF2\u6062\u590D"),b==="deleted"?o():q()}catch(G){M===U.current&&i(G.message,{error:!0})}finally{A.current=!1,I(!1)}}let W=a==="space"?"\u2190 \u8FD4\u56DE\u677F\u5757":"\u2190 \u8FD4\u56DE\u9996\u9875";if(c)return E.default.createElement("div",{style:{paddingTop:22}},E.default.createElement("button",{type:"button",className:"acv-back",onClick:o},W),E.default.createElement("div",{className:"acv-loading"},c));if(!l)return E.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u5E16\u5B50\u2026");let{post:w,comments:v}=l,f=!!(n&&n.handle===w.author.handle);return E.default.createElement("div",{className:"acv-post-wrap"},E.default.createElement("div",null,E.default.createElement("button",{type:"button",className:"acv-back",onClick:o},W)),E.default.createElement("div",{className:"acv-panel acv-post-poster-panel",style:{padding:"22px 24px"}},E.default.createElement("div",{className:"acv-post-poster-entry"},E.default.createElement(pt,{api:e,post:w,me:n,onAuth:r})),E.default.createElement("div",{className:"acv-post-meta"},E.default.createElement("span",{className:"acv-chip"},w.spaceTitle),E.default.createElement("span",{className:"acv-dot"}),de(w.createdAt),E.default.createElement("span",{className:"acv-dot"}),w.viewCount," \u6B21\u6D4F\u89C8"),E.default.createElement("h1",{className:"acv-article-title"},w.title),E.default.createElement("div",{className:"acv-article-meta"},E.default.createElement(te,{api:e,me:n,handle:w.author.handle,onDm:s},E.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:ie(w.author)},se(w.author)),E.default.createElement("span",null,w.author.displayName)),E.default.createElement("span",{className:"acv-dot"}),E.default.createElement(te,{api:e,me:n,handle:w.author.handle,onDm:s},E.default.createElement("span",null,"@",w.author.handle)),(f||n?.role==="admin")&&E.default.createElement("span",{className:"acv-mod-actions"},f&&E.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:H||P,onClick:()=>T(!0)},"\u7F16\u8F91"),n?.role==="admin"&&E.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:H||P,onClick:()=>x("hidden")},"\u9690\u85CF"),E.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:H||P,onClick:()=>x("deleted")},"\u5220\u9664"))),P&&f?E.default.createElement($a,{key:`${t}:${n.id}`,api:e,post:w,onCancel:()=>T(!1),onSaved:()=>{T(!1),q(),i("\u5E16\u5B50\u5DF2\u66F4\u65B0")}}):E.default.createElement(E.default.Fragment,null,l.summary&&E.default.createElement("aside",{className:"acv-post-summary","aria-label":"\u95EE\u9898\u4E0E\u89E3\u51B3\u65B9\u6848"},E.default.createElement("h2",null,"\u95EE\u9898\u4E0E\u89E3\u51B3\u65B9\u6848"),E.default.createElement("p",null,"\u95EE\u9898\uFF1A",l.summary.question),E.default.createElement("p",null,"\u89E3\u51B3\u65B9\u6848\uFF1A",l.summary.solution),E.default.createElement("small",null,"\u4F5C\u8005\u539F\u6587\u6458\u5F55\uFF0C\u5B8C\u6574\u8BA8\u8BBA\u89C1\u4E0B\u65B9\u3002")),E.default.createElement("div",{className:"acv-prose acv-prose--md"},E.default.createElement(Je,{text:w.body,api:e})))),E.default.createElement("div",{className:"acv-panel",style:{padding:"18px 24px"}},E.default.createElement("div",{className:"acv-section-head"},E.default.createElement("h2",{className:"acv-section-title"},"\u8BC4\u8BBA"),E.default.createElement("span",{className:"acv-section-note"},v.length," \u6761")),v.length===0&&E.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u8BF4\u70B9\u4EC0\u4E48\u3002"),v.map(b=>E.default.createElement("div",{key:b.id,className:"acv-comment"},E.default.createElement(te,{api:e,me:n,handle:b.author.handle,onDm:s},E.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:ie(b.author)},se(b.author))),E.default.createElement("div",{className:"acv-comment-main"},E.default.createElement("div",{className:"acv-comment-head"},E.default.createElement(te,{api:e,me:n,handle:b.author.handle,onDm:s},E.default.createElement("span",{className:"acv-comment-author"},b.author.displayName)),E.default.createElement("span",{className:"acv-comment-time"},de(b.createdAt))),E.default.createElement("p",{className:"acv-comment-body"},E.default.createElement(Le,{text:b.body,api:e}))))),E.default.createElement("div",{style:{marginTop:14}},!n&&E.default.createElement("div",{className:"acv-notice"},"\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\u3002",E.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:r},"\u767B\u5F55")),n&&!n.emailVerified&&E.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u8BC4\u8BBA\u3002"),n?.emailVerified&&E.default.createElement(E.default.Fragment,null,k&&E.default.createElement("div",{className:"acv-error"},k),E.default.createElement("div",{className:"acv-input-brand"},E.default.createElement(_e,{size:24})),E.default.createElement(Be,{api:e,value:p,onChange:m,maxLength:8e3,disabled:g,placeholder:"\u5199\u4E00\u6761\u8BC4\u8BBA\u2026"}),E.default.createElement("div",{className:"acv-row"},E.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:g||!p.trim(),onClick:K},g?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u8868\u8BC4\u8BBA"))))))}var j=Z(require("react"),1);function Ia({api:e,me:t,onClose:n,onAuth:o}){let[a,r]=j.default.useState(""),[s,i]=j.default.useState(!1),[l,d]=j.default.useState(""),[c,u]=j.default.useState(!1),p=j.default.useRef(null),m=j.default.useRef(!1);j.default.useEffect(()=>{let y=document.activeElement;return p.current.showModal(),()=>y?.focus?.()},[]);async function g(y){if(y.preventDefault(),!(m.current||!a.trim())){m.current=!0,i(!0),d("");try{await e.submitFeedback({body:a.trim()}),u(!0)}catch(k){d(k.message)}finally{m.current=!1,i(!1)}}}return j.default.createElement("dialog",{ref:p,className:"acv-modal","aria-labelledby":"feedback-title",onCancel:y=>{s?y.preventDefault():n()},style:{border:0,color:"inherit",maxWidth:"calc(100vw - 32px)"}},j.default.createElement("h3",{id:"feedback-title",className:"acv-modal-title"},"\u610F\u89C1\u53CD\u9988"),c?j.default.createElement("div",{role:"status"},j.default.createElement("p",{className:"acv-modal-sub"},"\u53CD\u9988\u5DF2\u6536\u5230\uFF0C\u611F\u8C22\u4F60\u5E2E\u52A9\u793E\u533A\u53D8\u5F97\u66F4\u597D\uFF01\u7BA1\u7406\u5458\u4F1A\u53CA\u65F6\u67E5\u770B\u5E76\u8BA4\u771F\u5904\u7406\u4F60\u7684\u53CD\u9988\u3002"),j.default.createElement("button",{type:"button",className:"acv-btn primary",onClick:n,autoFocus:!0},"\u597D\u7684")):t?j.default.createElement("form",{onSubmit:g},j.default.createElement("p",{className:"acv-modal-sub"},"\u9047\u5230\u4E86\u95EE\u9898\uFF0C\u6216\u6709\u60F3\u6CD5\u60F3\u544A\u8BC9\u6211\u4EEC\uFF1F\u5185\u5BB9\u4EC5\u7BA1\u7406\u5458\u53EF\u89C1\u3002"),j.default.createElement("div",{className:"acv-field"},j.default.createElement("label",{htmlFor:"feedback-body"},"\u53CD\u9988\u5185\u5BB9"),j.default.createElement("textarea",{id:"feedback-body",className:"acv-input",rows:6,maxLength:2e3,required:!0,autoFocus:!0,disabled:s,value:a,onChange:y=>r(y.target.value),placeholder:"\u63CF\u8FF0\u9047\u5230\u7684\u95EE\u9898\u6216\u4F60\u7684\u5EFA\u8BAE\u2026",style:{resize:"vertical"}}),j.default.createElement("span",{className:"acv-section-note"},a.length," / 2000")),l&&j.default.createElement("p",{role:"alert"},l),j.default.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:12}},j.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:s,onClick:n},"\u53D6\u6D88"),j.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:s||!a.trim()},s?"\u63D0\u4EA4\u4E2D\u2026":"\u63D0\u4EA4\u53CD\u9988"))):j.default.createElement(j.default.Fragment,null,j.default.createElement("p",{className:"acv-modal-sub"},"\u767B\u5F55\u540E\u5C31\u53EF\u4EE5\u5411\u7BA1\u7406\u5458\u63D0\u4EA4\u53CD\u9988\u3002"),j.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n},"\u5173\u95ED"),j.default.createElement("button",{type:"button",className:"acv-btn primary",onClick:o},"\u53BB\u767B\u5F55")))}function Ma({api:e}){let[t,n]=j.default.useState(0),[o,a]=j.default.useState(0),[r,s]=j.default.useState(null),[i,l]=j.default.useState("");return j.default.useEffect(()=>{let d=!0;return s(null),l(""),e.adminFeedback(t).then(c=>{d&&s(c)}).catch(c=>{d&&l(c.message)}),()=>{d=!1}},[e,t,o]),j.default.createElement("div",null,j.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>a(d=>d+1)},"\u5237\u65B0"),i?j.default.createElement("p",{role:"alert"},i):r?j.default.createElement(j.default.Fragment,null,!r.feedback.length&&j.default.createElement("p",null,"\u6682\u65E0\u53CD\u9988\u5185\u5BB9"),r.feedback.map(d=>j.default.createElement("article",{key:d.id,style:{padding:"20px 0",borderBottom:"1px solid var(--acv-line, #eee)"}},j.default.createElement("strong",null,d.author.displayName," ",j.default.createElement("span",{className:"acv-section-note"},"@",d.author.handle)),j.default.createElement("time",{className:"acv-section-note",dateTime:new Date(d.createdAt).toISOString(),style:{display:"block",marginTop:6}},new Date(d.createdAt).toLocaleString("zh-CN")),j.default.createElement("p",{style:{whiteSpace:"pre-wrap",overflowWrap:"anywhere"}},d.body))),j.default.createElement("div",{style:{display:"flex",gap:12,alignItems:"center",marginTop:16}},j.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:!t,onClick:()=>n(Math.max(0,t-r.limit))},"\u4E0A\u4E00\u9875"),j.default.createElement("span",{className:"acv-section-note"},"\u7B2C ",Math.floor(t/r.limit)+1," \u9875 \xB7 \u5171 ",r.total," \u6761"),j.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:t+r.limit>=r.total,onClick:()=>n(t+r.limit)},"\u4E0B\u4E00\u9875"))):j.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u53CD\u9988\u2026"))}var O=Z(require("react"),1);var we=Z(require("react"),1);function Ee({className:e="",id:t,disabled:n,...o}){let a=we.default.useId(),r=t||a,[s,i]=we.default.useState(!1);return we.default.createElement("div",{className:"acv-password-input"},we.default.createElement("input",{...o,id:r,disabled:n,className:`acv-input ${e}`,type:s?"text":"password"}),we.default.createElement("button",{type:"button",className:"acv-password-toggle",disabled:n,"aria-label":s?"\u9690\u85CF\u5BC6\u7801":"\u663E\u793A\u5BC6\u7801","aria-pressed":s,"aria-controls":r,onClick:()=>i(l=>!l)},we.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},we.default.createElement("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"}),we.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),s&&we.default.createElement("path",{d:"m3 3 18 18"}))))}var _o=["login","register","forgot"];function mt({api:e,initialMode:t="login",onClose:n,onDone:o,notify:a}){let[r,s]=O.default.useState(_o.includes(t)?t:"login"),[i,l]=O.default.useState(""),[d,c]=O.default.useState(""),[u,p]=O.default.useState(""),[m,g]=O.default.useState(""),[y,k]=O.default.useState(null),[$,H]=O.default.useState(!1),[I,P]=O.default.useState(""),[T,U]=O.default.useState(""),A=O.default.useCallback(()=>{e.captcha().then(k).catch(()=>k(null))},[e]);O.default.useEffect(()=>{r==="register"&&A()},[r,A]);function q(w){s(w),P(""),U(""),g("")}async function K(w){w.preventDefault(),H(!0),P("");try{let v=await e.login({handle:i,password:u});e.setToken(v.token),o(v.account)}catch(v){P(v.message)}finally{H(!1)}}async function x(w){w.preventDefault(),H(!0),P("");try{let v=await e.register({handle:i,email:d,password:u,captchaId:y?.id,captchaAnswer:m}),f=await e.login({handle:i,password:u});e.setToken(f.token),U(v.mail?.delivered?"\u6CE8\u518C\u6210\u529F\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\u3002\u70B9\u90AE\u4EF6\u91CC\u7684\u94FE\u63A5\u5C31\u80FD\u53D1\u5E16\u3002":"\u6CE8\u518C\u6210\u529F\u3002\u672C\u5730\u6CA1\u914D SMTP\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u7ECF\u6253\u5230\u670D\u52A1\u7AEF\u65E5\u5FD7\u91CC\u4E86\u3002"),o(f.account)}catch(v){P(v.message),A(),g("")}finally{H(!1)}}async function W(w){w.preventDefault(),H(!0),P("");try{let v=await e.forgotPassword(d.trim());U(v?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u670D\u52A1\u5668\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${v.verifyLink}`:"\u5982\u679C\u8FD9\u4E2A\u90AE\u7BB1\u6CE8\u518C\u8FC7\uFF0C\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u5C31\u80FD\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(v){P(v.message)}finally{H(!1)}}return O.default.createElement("div",{className:"acv-overlay",onClick:n},O.default.createElement("div",{className:"acv-modal",onClick:w=>w.stopPropagation()},O.default.createElement("h3",{className:"acv-modal-title"},r==="login"?"\u767B\u5F55 Achoverse":r==="register"?"\u6CE8\u518C Achoverse":"\u5FD8\u8BB0\u5BC6\u7801"),O.default.createElement("p",{className:"acv-modal-sub"},r==="login"?"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002":r==="register"?"\u6CE8\u518C\u540E\u8981\u9A8C\u8BC1\u90AE\u7BB1\u624D\u80FD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002":"\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1\uFF0C\u6211\u4EEC\u53D1\u4E00\u5C01\u5E26\u91CD\u7F6E\u94FE\u63A5\u7684\u90AE\u4EF6\u3002"),r!=="forgot"&&O.default.createElement("div",{className:"acv-switch"},O.default.createElement("button",{type:"button",className:r==="login"?"is-active":"",onClick:()=>q("login")},"\u767B\u5F55"),O.default.createElement("button",{type:"button",className:r==="register"?"is-active":"",onClick:()=>q("register")},"\u6CE8\u518C")),I&&O.default.createElement("div",{className:"acv-error"},I),T&&O.default.createElement("div",{className:"acv-notice"},T),r==="forgot"&&O.default.createElement("form",{onSubmit:W},O.default.createElement("div",{className:"acv-field"},O.default.createElement("label",null,"\u90AE\u7BB1"),O.default.createElement("input",{className:"acv-input",type:"email",value:d,onChange:w=>c(w.target.value),placeholder:"\u6CE8\u518C\u65F6\u7528\u7684\u90AE\u7BB1"})),O.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},O.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>q("login")},"\u8FD4\u56DE\u767B\u5F55"),O.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:$||!d.trim()},$?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u91CD\u7F6E\u90AE\u4EF6"))),r==="login"&&O.default.createElement("form",{onSubmit:K},O.default.createElement("div",{className:"acv-field"},O.default.createElement("label",{htmlFor:"login-identifier"},"\u7528\u6237\u540D\u6216\u90AE\u7BB1"),O.default.createElement("input",{id:"login-identifier",className:"acv-input",value:i,autoComplete:"username",placeholder:"\u4F60\u7684\u7528\u6237\u540D\u6216\u6CE8\u518C\u90AE\u7BB1",onChange:w=>l(w.target.value)})),O.default.createElement("div",{className:"acv-field"},O.default.createElement("label",{htmlFor:"login-password"},"\u5BC6\u7801"),O.default.createElement(Ee,{key:"login-password",id:"login-password",value:u,autoComplete:"current-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:w=>p(w.target.value)})),O.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},O.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>q("forgot")},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),O.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:$||!i||!u},$?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))),r==="register"&&O.default.createElement("form",{onSubmit:x},O.default.createElement("div",{className:"acv-field"},O.default.createElement("label",null,"\u7528\u6237\u540D"),O.default.createElement("input",{className:"acv-input",value:i,autoComplete:"username",placeholder:"3-24 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF",onChange:w=>l(w.target.value)})),O.default.createElement("div",{className:"acv-field"},O.default.createElement("label",null,"\u90AE\u7BB1"),O.default.createElement("input",{className:"acv-input",type:"email",value:d,autoComplete:"email",placeholder:"\u7528\u6765\u6536\u9A8C\u8BC1\u94FE\u63A5",onChange:w=>c(w.target.value)})),O.default.createElement("div",{className:"acv-field"},O.default.createElement("label",{htmlFor:"register-password"},"\u5BC6\u7801"),O.default.createElement(Ee,{key:"register-password",id:"register-password",value:u,autoComplete:"new-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:w=>p(w.target.value)})),O.default.createElement("div",{className:"acv-field"},O.default.createElement("label",null,"\u9A8C\u8BC1\u7801"),O.default.createElement("div",{className:"acv-captcha-row"},O.default.createElement("input",{className:"acv-input",value:m,maxLength:8,placeholder:"\u770B\u53F3\u8FB9",onChange:w=>g(w.target.value)}),O.default.createElement("button",{type:"button",className:"acv-captcha-img",onClick:A,title:"\u6362\u4E00\u5F20"},y?O.default.createElement("span",{dangerouslySetInnerHTML:{__html:y.svg}}):O.default.createElement("span",{className:"acv-chip"},"\u52A0\u8F7D\u4E2D")))),O.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},O.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n},"\u53D6\u6D88"),O.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:$||!i||!u||!d},$?"\u6CE8\u518C\u4E2D\u2026":"\u6CE8\u518C")))))}var h=Z(require("react"),1);var Uo={title:"",slug:"",subtitle:"",description:"",accent:"#F53FA6",accentTo:"#FF7A45",zones:["home"],motif:"diffusion"},Fo=[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR \u4E13\u533A"}];function Bo({api:e,me:t,onDm:n,notify:o}){let[a,r]=h.default.useState(null),[s,i]=h.default.useState(""),[l,d]=h.default.useState(""),c=h.default.useCallback(()=>{e.pendingAccounts().then(p=>{r(p.accounts),i("")}).catch(p=>i(p.message))},[e]);h.default.useEffect(()=>{c()},[c]);async function u(p){d(p.id);try{await e.verifyAccount(p.id),o(`\u5DF2\u653E\u884C @${p.handle}`),c()}catch(m){o(m.message,{error:!0})}finally{d("")}}return s?h.default.createElement("div",{className:"acv-error"},s):a?a.length===0?h.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5F85\u9A8C\u8BC1\u7684\u8D26\u53F7"):a.map(p=>h.default.createElement("div",{key:p.id,className:"acv-member",style:{padding:"12px 2px"}},h.default.createElement("span",{className:"acv-member-main"},h.default.createElement("span",{className:"acv-member-name"},h.default.createElement(te,{api:e,me:t,handle:p.handle,onDm:n},h.default.createElement("span",null,p.displayName)," ",h.default.createElement("span",{className:"acv-member-meta"},"@",p.handle))),h.default.createElement("span",{className:"acv-member-meta"},p.email," \xB7 \u6CE8\u518C\u4E8E ",de(p.createdAt))),h.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"6px 14px",fontSize:13},disabled:l===p.id,onClick:()=>u(p)},l===p.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C"))):h.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function jo({api:e,space:t,onDone:n,onCancel:o,notify:a}){let[r,s]=h.default.useState(t?{title:t.title,slug:t.slug,subtitle:t.subtitle,description:t.description,accent:t.accent,accentTo:t.accentTo,zones:t.zones?.length?t.zones:["home"],motif:t.motif||"diffusion"}:Uo),[i,l]=h.default.useState(!1),[d,c]=h.default.useState(""),u=(m,g)=>s(y=>({...y,[m]:g}));async function p(){l(!0),c("");try{t?await e.updateSpace(t.id,r):await e.createSpace(r),a(t?"\u677F\u5757\u5DF2\u66F4\u65B0":`\u677F\u5757\u300C${r.title}\u300D\u5DF2\u521B\u5EFA`),n()}catch(m){c(m.message)}finally{l(!1)}}return h.default.createElement("div",{className:"acv-editor"},d&&h.default.createElement("div",{className:"acv-error"},d),h.default.createElement("div",{className:"acv-field"},h.default.createElement("label",null,"\u677F\u5757\u540D\u79F0"),h.default.createElement("input",{className:"acv-input",value:r.title,maxLength:24,onChange:m=>u("title",m.target.value),placeholder:"\u6BD4\u5982\uFF1A\u4F5C\u54C1\u5C55\u793A"})),h.default.createElement("div",{className:"acv-field"},h.default.createElement("label",null,"\u677F\u5757\u6807\u8BC6\uFF08\u7528\u4E8E\u94FE\u63A5\uFF0C\u7559\u7A7A\u81EA\u52A8\u751F\u6210\uFF09"),h.default.createElement("input",{className:"acv-input",value:r.slug,maxLength:32,disabled:!!t,onChange:m=>u("slug",m.target.value.toLowerCase()),placeholder:"works"})),h.default.createElement("div",{className:"acv-field"},h.default.createElement("label",null,"\u4E00\u53E5\u8BDD\u4ECB\u7ECD"),h.default.createElement("input",{className:"acv-input",value:r.subtitle,maxLength:60,onChange:m=>u("subtitle",m.target.value)})),h.default.createElement("div",{className:"acv-field"},h.default.createElement("label",null,"\u677F\u5757\u8BF4\u660E"),h.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:r.description,maxLength:300,onChange:m=>u("description",m.target.value)})),h.default.createElement("div",{className:"acv-field"},h.default.createElement("label",null,"\u663E\u793A\u5728"),h.default.createElement("div",{className:"acv-zone-picker"},Fo.map(m=>{let g=r.zones.includes(m.key);return h.default.createElement("button",{key:m.key,type:"button",className:g?"acv-zone-option is-active":"acv-zone-option",onClick:()=>s(y=>{let k=g?y.zones.filter($=>$!==m.key):[...y.zones,m.key];return{...y,zones:k.length?k:["home"]}})},h.default.createElement("span",{className:"acv-zone-tick"},g?"\u2713":""),m.label)})),h.default.createElement("span",{className:"acv-field-hint"},"\u53EF\u4EE5\u591A\u9009\uFF1A\u540C\u65F6\u52FE\u9009\u5C31\u4E24\u4E2A\u5730\u65B9\u90FD\u663E\u793A")),h.default.createElement("div",{className:"acv-field"},h.default.createElement("label",null,"\u5C01\u9762\u6784\u56FE"),h.default.createElement("div",{className:"acv-zone-picker"},Kt.map(m=>h.default.createElement("button",{key:m.key,type:"button",className:r.motif===m.key?"acv-zone-option is-active":"acv-zone-option",onClick:()=>u("motif",m.key)},m.label))),h.default.createElement("span",{className:"acv-field-hint"},"\u534A\u900F\u660E\u51E0\u4F55\u56FE\u5F62\uFF0C\u753B\u5728\u6E10\u53D8\u4E0A\u9762")),h.default.createElement("div",{className:"acv-field"},h.default.createElement("label",null,"\u5361\u7247\u6E10\u53D8"),h.default.createElement("div",{className:"acv-color-row"},h.default.createElement("input",{type:"color",className:"acv-color",value:r.accent,onChange:m=>u("accent",m.target.value)}),h.default.createElement("input",{type:"color",className:"acv-color",value:r.accentTo,onChange:m=>u("accentTo",m.target.value)}),h.default.createElement("span",{className:"acv-space-cover acv-color-preview",style:{background:`linear-gradient(120deg, ${r.accent}, ${r.accentTo})`}}))),h.default.createElement("div",{className:"acv-row"},h.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:o},"\u53D6\u6D88"),h.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:i||!r.title.trim(),onClick:p},i?"\u4FDD\u5B58\u4E2D\u2026":t?"\u4FDD\u5B58":"\u521B\u5EFA\u677F\u5757")))}function qo({api:e,me:t,onDm:n,notify:o}){let[a,r]=h.default.useState(null),[s,i]=h.default.useState(""),[l,d]=h.default.useState(""),c=h.default.useCallback(()=>{e.adminUsers(s.trim()).then(p=>r(p.users)).catch(p=>o(p.message,{error:!0}))},[e,s,o]);h.default.useEffect(()=>{c()},[c]);async function u(p){d(p.id);try{await e.verifyAccount(p.id),o(`\u5DF2\u653E\u884C @${p.handle}`),c()}catch(m){o(m.message,{error:!0})}finally{d("")}}return a?h.default.createElement(h.default.Fragment,null,h.default.createElement("div",{className:"acv-inline",style:{marginBottom:12}},h.default.createElement("input",{className:"acv-input",placeholder:"\u641C\u7D22\u7528\u6237\u540D\u6216\u6635\u79F0",value:s,onChange:p=>i(p.target.value)}),h.default.createElement("button",{type:"button",className:"acv-btn",onClick:c},"\u641C\u7D22")),a.length===0&&h.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5339\u914D\u7684\u7528\u6237"),a.map(p=>h.default.createElement("div",{key:p.id,className:"acv-admin-row"},h.default.createElement("span",{className:"acv-member-main"},h.default.createElement("span",{className:"acv-member-name"},h.default.createElement(te,{api:e,me:t,handle:p.handle,onDm:n},h.default.createElement("span",null,p.displayName),h.default.createElement("span",{className:"acv-member-meta"}," @",p.handle)),p.role==="admin"&&h.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u7BA1\u7406\u5458"),!p.emailVerified&&h.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u672A\u9A8C\u8BC1"),!p.allowDm&&h.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u5173\u79C1\u4FE1")),h.default.createElement("span",{className:"acv-member-meta"},p.email||"\uFF08\u65E0\u90AE\u7BB1\uFF09"," \xB7 ",p.postCount," \u4E2A\u5E16\u5B50 \xB7 \u6CE8\u518C\u4E8E ",de(p.createdAt))),!p.emailVerified&&h.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},disabled:l===p.id,onClick:()=>u(p)},l===p.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C")))):h.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Ho({api:e,notify:t}){let[n,o]=h.default.useState(null),[a,r]=h.default.useState(null),[s,i]=h.default.useState(""),l=h.default.useCallback(()=>{e.adminSpaces().then(c=>o(c.spaces)).catch(c=>t(c.message,{error:!0}))},[e,t]);h.default.useEffect(()=>{l()},[l]);async function d(c){let u=!c.archivedAt;if(!(u&&!window.confirm(`\u5220\u9664\u677F\u5757\u300C${c.title}\u300D\uFF1F\u677F\u5757\u4F1A\u4ECE\u9996\u9875\u6D88\u5931\uFF0C\u5E16\u5B50\u4ECD\u4FDD\u7559\u5728\u5E93\u91CC\u3002`))){i(c.id);try{await e.archiveSpace(c.id,u),t(u?"\u677F\u5757\u5DF2\u5220\u9664":"\u677F\u5757\u5DF2\u6062\u590D"),l()}catch(p){t(p.message,{error:!0})}finally{i("")}}}return n?h.default.createElement(h.default.Fragment,null,a?h.default.createElement(jo,{api:e,space:a==="new"?null:a,notify:t,onCancel:()=>r(null),onDone:()=>{r(null),l()}}):h.default.createElement("div",{className:"acv-row",style:{justifyContent:"flex-start",marginBottom:6}},h.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>r("new")},"\u65B0\u5EFA\u677F\u5757")),n.map(c=>h.default.createElement("div",{key:c.id,className:c.archivedAt?"acv-admin-row is-archived":"acv-admin-row"},h.default.createElement(at,{space:c,showBadge:!1,showEdition:!1,className:"acv-admin-swatch"}),h.default.createElement("span",{className:"acv-member-main"},h.default.createElement("span",{className:"acv-member-name"},c.title,h.default.createElement("span",{className:"acv-member-meta"}," /",c.slug),c.archivedAt&&h.default.createElement("span",{className:"acv-chip",style:{marginLeft:8}},"\u5DF2\u5220\u9664")),h.default.createElement("span",{className:"acv-member-meta"},c.postCount," \u4E2A\u5E16\u5B50 \xB7 ",c.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${de(c.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u5E16\u5B50",c.zones?.map(u=>h.default.createElement("span",{key:u,className:"acv-chip",style:{marginLeft:6}},u==="arvr"?"AR/VR":"\u9996\u9875")))),h.default.createElement("span",{style:{display:"flex",gap:6}},h.default.createElement("button",{type:"button",className:"acv-btn",style:{padding:"5px 12px",fontSize:12},onClick:()=>r(c)},"\u7F16\u8F91"),h.default.createElement("button",{type:"button",className:"acv-btn ghost",style:{padding:"5px 12px",fontSize:12},disabled:s===c.id,onClick:()=>d(c)},c.archivedAt?"\u6062\u590D":"\u5220\u9664"))))):h.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function _a({api:e,me:t,onDm:n,onBack:o,notify:a}){let[r,s]=h.default.useState("spaces"),[i,l]=h.default.useState(null);return h.default.useEffect(()=>{e.pendingAccounts().then(d=>l(d.accounts.length)).catch(()=>l(null))},[e,r]),h.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},h.default.createElement("div",null,h.default.createElement("button",{type:"button",className:"acv-back",onClick:o},"\u2190 \u8FD4\u56DE\u9996\u9875")),h.default.createElement("div",{className:"acv-admin-layout"},h.default.createElement("nav",{className:"acv-admin-nav","aria-label":"\u7BA1\u7406"},h.default.createElement("button",{type:"button",className:r==="feedback"?"is-active":"",onClick:()=>s("feedback")},"\u53CD\u9988\u5185\u5BB9"),h.default.createElement("button",{type:"button",className:r==="spaces"?"is-active":"",onClick:()=>s("spaces")},"\u677F\u5757"),h.default.createElement("button",{type:"button",className:r==="users"?"is-active":"",onClick:()=>s("users")},"\u7528\u6237"),h.default.createElement("button",{type:"button",className:r==="accounts"?"is-active":"",onClick:()=>s("accounts")},h.default.createElement("span",null,"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),i>0&&h.default.createElement("span",{className:"acv-badge"},i))),h.default.createElement("section",{className:"acv-panel acv-admin-content",style:{padding:"20px 22px"}},h.default.createElement("div",{className:"acv-section-head"},h.default.createElement("h2",{className:"acv-section-title"},r==="feedback"?"\u53CD\u9988\u5185\u5BB9":r==="spaces"?"\u677F\u5757":r==="users"?"\u7528\u6237":"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),h.default.createElement("span",{className:"acv-section-note"},r==="feedback"?"\u7528\u6237\u63D0\u4EA4\u7684\u610F\u89C1\u4E0E\u95EE\u9898\uFF0C\u4EC5\u7BA1\u7406\u5458\u53EF\u89C1":r==="spaces"?"\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u677F\u5757\uFF1B\u5220\u9664\u540E\u53EF\u4ECE\u7BA1\u7406\u91CC\u6062\u590D":r==="users"?"\u5168\u90E8\u8D26\u53F7\uFF1B\u672A\u9A8C\u8BC1\u7684\u53EF\u4EE5\u76F4\u63A5\u653E\u884C":"\u6CA1\u914D SMTP \u65F6\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u4E0D\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u4EBA\u5DE5\u653E\u884C")),r==="feedback"&&h.default.createElement(Ma,{api:e}),r==="spaces"&&h.default.createElement(Ho,{api:e,notify:a}),r==="users"&&h.default.createElement(qo,{api:e,me:t,onDm:n,notify:a}),r==="accounts"&&h.default.createElement(Bo,{api:e,me:t,onDm:n,notify:a}))))}var ve=Z(require("react"),1);function Ua({api:e,zone:t,title:n,note:o,onOpenSpace:a}){let[r,s]=ve.default.useState(null),[i,l]=ve.default.useState("");return ve.default.useEffect(()=>{let d=!1;return e.zoneSpaces(t).then(c=>{d||(s(c.spaces),l(""))}).catch(c=>{d||l(c.message)}),()=>{d=!0}},[e,t]),ve.default.createElement("div",{className:"acv-zone"},ve.default.createElement("div",{className:"acv-section-head"},ve.default.createElement("h2",{className:"acv-section-title"},n),ve.default.createElement("span",{className:"acv-section-note"},o)),i&&ve.default.createElement("div",{className:"acv-empty"},i),!r&&!i&&ve.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),r&&r.length===0&&ve.default.createElement("div",{className:"acv-panel"},ve.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u4E13\u533A\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u300C\u7BA1\u7406 \u2192 \u677F\u5757\u300D\u91CC\u628A\u677F\u5757\u653E\u8FDB\u300C",n,"\u300D\u3002")),ve.default.createElement("div",{className:"acv-zone-grid"},r?.map(d=>ve.default.createElement(wt,{key:d.id,space:d,onOpen:a}))))}var Y=Z(require("react"),1),Ha=Z(bt(),1);var It=Object.freeze(["seaside-chapel","autumn-house"]),Mt=80;var Fa=[{id:"plank",label:"\u539F\u6728\u62FC\u677F"},{id:"cottage",label:"\u5C0F\u5C4B\u5F62"}];function Yo(e){if(typeof e!="string"||!/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2}))?$/.test(e))return-1/0;let t=Date.parse(e);return!Number.isFinite(t)||e.length===10&&new Date(t).toISOString().slice(0,10)!==e?-1/0:t}function Ba(e){return e.map((t,n)=>({world:t,index:n,time:Yo(t.updatedAt)})).sort((t,n)=>t.time===n.time?t.index-n.index:t.time>n.time?-1:1).map(t=>t.world)}var ft=Z(require("react"),1);function Wo(e,t,n){let o={messages:[],mine:null,mineReady:!n,loading:!0,busy:!1,error:"",highlightId:null},a=!0,r=0,s=null,i=new Set,l=globalThis.crypto?.randomUUID?.()||`message_${Date.now()}_${Math.random().toString(36).slice(2)}`,d=u=>{a&&(o={...o,...u},i.forEach(p=>p()))};async function c(){let u=++r;s?.abort(),s=new AbortController;try{let[p,m]=await Promise.all([e.worldMessages(t,s.signal),n?e.myWorldMessage(t,s.signal):Promise.resolve(null)]);a&&u===r&&d({messages:p.messages,mine:m,mineReady:!0,loading:!1,error:""})}catch(p){a&&u===r&&p.name!=="AbortError"&&d({loading:!1,error:p.message})}}return{getSnapshot:()=>o,subscribe(u){return i.add(u),()=>i.delete(u)},refresh:c,async save(u,p,m){if(o.busy||!o.mineReady)return null;r++,s?.abort(),d({busy:!0,error:""});try{let y=(o.mine?.state==="active"?await e.editWorldMessage(t,o.mine.message.id,{body:u,style:p,revision:m}):await e.createWorldMessage(t,{body:u,style:p,requestId:l})).message,k=o.messages.filter($=>$.id!==y.id&&$.placementSlot!==y.placementSlot);return y.placementSlot!==null&&k.unshift(y),d({mine:{state:"active",message:y},messages:k,highlightId:y.id}),await c(),y}catch(g){throw d({error:g.message}),(g.status===409||g.status===404)&&await c(),g}finally{d({busy:!1})}},async remove(u){if(o.busy)return!1;r++,s?.abort(),d({busy:!0,error:""});try{return await e.deleteWorldMessage(t,u),d({messages:o.messages.filter(p=>p.id!==u)}),await c(),!0}catch(p){throw d({error:p.message}),p}finally{d({busy:!1})}},dispose(){a=!1,r++,s?.abort(),i.clear()}}}function ja(e,t,n,o=!0){let a=ft.default.useMemo(()=>Wo(e,t,n?.id),[e,t,n?.id]),r=ft.default.useSyncExternalStore(a.subscribe,a.getSnapshot);return ft.default.useEffect(()=>{if(!o)return()=>a.dispose();a.refresh();let s=()=>{!document.hidden&&!a.getSnapshot().busy&&a.refresh()},i=setInterval(s,3e4);return document.addEventListener("visibilitychange",s),()=>{clearInterval(i),document.removeEventListener("visibilitychange",s),a.dispose()}},[a,o]),{...r,store:a}}var N=Z(require("react"),1);function qa({api:e,slug:t,me:n,data:o,selected:a,onClose:r,onLogin:s,previews:i={}}){let l=N.default.useRef(null),[d,c]=N.default.useState(a?"detail":"compose"),[u,p]=N.default.useState(a),[m,g]=N.default.useState(""),[y,k]=N.default.useState("plank"),[$,H]=N.default.useState(null),I=N.default.useRef(!1),[P,T]=N.default.useState(""),[U,A]=N.default.useState(!1),[q,K]=N.default.useState(!1),[x,W]=N.default.useState(!1),[w,v]=N.default.useState(null),[f,b]=N.default.useState(!1),M=N.default.useRef(null),[G,me]=N.default.useState("");N.default.useEffect(()=>{let Q=document.activeElement;return l.current.showModal(),()=>{M.current?.abort(),Q?.isConnected&&Q.focus()}},[]),N.default.useEffect(()=>{if(!(!o.mineReady||I.current||x)){if(o.mine?.state==="active"){if(m.trim()){W(!0);return}g(o.mine.message.body),k(o.mine.message.style),H(o.mine.message.revision)}I.current=!!n}},[o.mineReady,o.mine,n,m,x]),N.default.useEffect(()=>{U&&l.current.querySelector(".acv-overlay input")?.focus()},[U]);function ke(){o.mine?.state==="active"&&(g(o.mine.message.body),k(o.mine.message.style),H(o.mine.message.revision),I.current=!0,W(!1)),c("compose"),T("")}async function _(Q=""){M.current?.abort();let Te=new AbortController;M.current=Te,c("history"),T(""),b(!0);try{let je=await e.worldMessageHistory(t,Q,Te.signal);if(Te.signal.aborted)return;v(je.messages),me(je.nextCursor)}catch(je){je.name!=="AbortError"&&T(je.message)}finally{Te.signal.aborted||b(!1)}}async function X(Q){if(Q.preventDefault(),T(""),!n){A(!0);return}try{await o.store.save(m,y,$)&&r()}catch(Te){T(Te.message),Te.status===409&&W(!0),Te.status===401&&A(!0)}}async function xe(){try{await o.store.remove(u.id),K(!1),p(null),await _()}catch(Q){T(Q.message)}}let et=o.mine?.state==="removed",De=o.mine?.state==="active",ao=m.trim()&&[...m.trim()].length<=Mt&&!o.busy&&!x&&o.mineReady,oo=u?.author.id===n?.id;return N.default.createElement("dialog",{ref:l,className:"acv-modal acv-world-message-dialog","aria-labelledby":"world-message-title",onCancel:Q=>{Q.preventDefault(),U?A(!1):q?K(!1):o.busy||r()}},N.default.createElement("div",{inert:U},N.default.createElement("header",{className:"acv-message-heading"},N.default.createElement("h2",{className:"acv-modal-title",id:"world-message-title"},d==="history"?t==="autumn-house"?"\u8349\u5761\u4E0A\u7684\u7559\u8A00":"\u6C99\u6EE9\u4E0A\u7684\u7559\u8A00":d==="detail"?"\u4E00\u5757\u7559\u8A00\u677F":De?"\u7F16\u8F91\u6211\u7684\u7559\u8A00\u677F":"\u7559\u4E00\u53E5\u8BDD"),N.default.createElement("button",{className:"acv-btn ghost",type:"button","aria-label":"\u5173\u95ED\u7559\u8A00\u9762\u677F",disabled:o.busy,onClick:r},"\xD7")),N.default.createElement("nav",{className:"acv-message-tabs","aria-label":"\u7559\u8A00\u5BFC\u822A"},N.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:ke},n?"\u6211\u7684\u7559\u8A00\u677F":"\u5199\u7559\u8A00"),N.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:()=>_()},"\u5168\u90E8\u7559\u8A00")),d==="compose"&&N.default.createElement(N.default.Fragment,null,et?N.default.createElement("p",{role:"status"},"\u4F60\u7684\u7559\u8A00\u677F\u5DF2\u88AB\u7BA1\u7406\u5458\u79FB\u9664\uFF0C\u4E0D\u80FD\u518D\u6B21\u653E\u7F6E\u3002"):N.default.createElement("form",{onSubmit:X},N.default.createElement("p",{className:"acv-modal-sub"},"\u6BCF\u4EBA\u4E00\u5757\uFF0C\u53EF\u4EE5\u968F\u65F6\u4FEE\u6539\u81EA\u5DF1\u7684\u6587\u5B57\u548C\u6837\u5F0F\u3002"),o.mineReady?null:N.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u4F60\u7684\u7559\u8A00\u677F\u2026"),N.default.createElement("fieldset",{disabled:o.busy},N.default.createElement("legend",null,"\u9009\u62E9\u6728\u724C\u6837\u5F0F"),N.default.createElement("div",{className:"acv-message-styles"},Fa.map(Q=>N.default.createElement("label",{key:Q.id,className:y===Q.id?"is-selected":""},N.default.createElement("input",{type:"radio",name:"board-style",value:Q.id,checked:y===Q.id,onChange:()=>k(Q.id)}),N.default.createElement("span",{className:"acv-message-preview","aria-hidden":"true"},i[Q.id]?N.default.createElement("img",{src:i[Q.id],alt:""}):N.default.createElement("span",{className:"acv-message-preview-loading"},"\u6B63\u5728\u51C6\u5907\u6728\u724C\u9884\u89C8\u2026")),Q.label)))),N.default.createElement("div",{className:"acv-field acv-message-field"},N.default.createElement("label",{htmlFor:"world-message-body"},"\u4F60\u7684\u7559\u8A00"),N.default.createElement("textarea",{className:"acv-input",id:"world-message-body",rows:4,value:m,disabled:o.busy,onChange:Q=>g(Q.target.value),placeholder:"\u7ED9\u8DEF\u8FC7\u8FD9\u91CC\u7684\u4EBA\u7559\u4E00\u53E5\u8BDD\u2026"})),N.default.createElement("p",{className:"acv-modal-sub"},[...m].length," / ",Mt," \u5B57 \xB7 \u7EAF\u6587\u672C"),x&&N.default.createElement("div",{role:"alert"},N.default.createElement("p",null,"\u4F60\u5DF2\u6709\u7559\u8A00\uFF0C\u6216\u7559\u8A00\u5DF2\u5728\u5176\u4ED6\u8BBE\u5907\u4FEE\u6539\u3002\u8349\u7A3F\u4ECD\u4FDD\u7559\u5728\u8F93\u5165\u6846\u4E2D\uFF0C\u8BF7\u5148\u6838\u5BF9\u6700\u65B0\u5185\u5BB9\u3002"),N.default.createElement("blockquote",null,o.mine?.message?.body),N.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:ke},"\u8BFB\u53D6\u6700\u65B0\u7559\u8A00"),N.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:!De,onClick:()=>{H(o.mine.message.revision),W(!1),I.current=!0}},"\u4FDD\u7559\u8349\u7A3F\uFF0C\u4F5C\u4E3A\u4FEE\u6539")),N.default.createElement("button",{className:"acv-btn brand acv-message-submit",type:"submit",disabled:!ao},o.busy?"\u6B63\u5728\u4FDD\u5B58\u2026":n?De?"\u4FDD\u5B58\u4FEE\u6539":"\u63D2\u4E0A\u7559\u8A00\u677F":"\u767B\u5F55\u540E\u53D1\u5E03"))),d==="history"&&N.default.createElement("section",{"aria-label":"\u5168\u90E8\u7559\u8A00"},f?N.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u7559\u8A00\u2026"):N.default.createElement(N.default.Fragment,null,w?.length===0&&N.default.createElement("p",null,"\u8FD8\u6CA1\u6709\u7559\u8A00\uFF0C\u6765\u7559\u4E0B\u7B2C\u4E00\u53E5\u8BDD\u5427\u3002"),w?.map(Q=>N.default.createElement("button",{className:"acv-message-history-item",key:Q.id,type:"button",onClick:()=>{p(Q),c("detail"),K(!1)}},N.default.createElement("strong",null,Q.author.displayName),N.default.createElement("span",null,Q.body))),N.default.createElement("div",{className:"acv-message-actions"},N.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:()=>_()},"\u56DE\u5230\u6700\u65B0"),G&&N.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:()=>_(G)},"\u4E0B\u4E00\u9875")))),d==="detail"&&u&&N.default.createElement("article",null,i[u.style]&&N.default.createElement("img",{className:"acv-message-detail-preview",src:i[u.style],alt:u.style==="plank"?"\u539F\u6728\u62FC\u677F":"\u5C0F\u5C4B\u5F62\u6728\u724C"}),N.default.createElement("p",{className:"acv-message-fulltext"},u.body),N.default.createElement("p",{className:"acv-modal-sub"},u.author.displayName," \xB7 ",new Date(u.createdAt).toLocaleString("zh-CN")),N.default.createElement("div",{className:"acv-message-actions"},oo&&N.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy||!o.mineReady,onClick:ke},"\u7F16\u8F91\u6211\u7684\u7559\u8A00"),n?.role==="admin"&&N.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:()=>K(!0)},"\u5220\u9664\u7559\u8A00")),q&&N.default.createElement("div",{role:"alert"},N.default.createElement("p",null,"\u786E\u5B9A\u79FB\u9664\u8FD9\u5757\u7559\u8A00\u677F\uFF1F\u8BE5\u8D26\u53F7\u4E4B\u540E\u4E0D\u80FD\u91CD\u65B0\u653E\u7F6E\u3002"),N.default.createElement("div",{className:"acv-message-actions"},N.default.createElement("button",{className:"acv-btn ghost",disabled:o.busy,onClick:()=>K(!1)},"\u53D6\u6D88"),N.default.createElement("button",{className:"acv-btn ghost",disabled:o.busy,onClick:xe},"\u786E\u5B9A\u5220\u9664")))),(P||o.error)&&N.default.createElement("div",{role:"alert"},N.default.createElement("p",null,P||o.error),N.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:()=>{T(""),o.store.refresh()}},"\u5237\u65B0\u7559\u8A00"),n&&N.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:o.busy,onClick:()=>A(!0)},"\u91CD\u65B0\u767B\u5F55"))),U&&N.default.createElement(mt,{api:e,initialMode:"login",onClose:()=>A(!1),onDone:Q=>{A(!1),I.current=!1,s(Q)}}))}var vt=null;async function Ko(e){let t=await fetch(e.assetUrl("/worlds/manifest.json"));if(!t.ok)throw new Error(`\u7A7A\u95F4\u6E05\u5355\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${t.status}\uFF09`);let n=await t.json();return Array.isArray(n.worlds)?Ba(n.worlds):[]}function Ya(e){let[t,n]=Y.default.useState(null),[o,a]=Y.default.useState("");return Y.default.useEffect(()=>{let r=!1;return Ko(e).then(s=>{r||(n(s),a(""))}).catch(s=>{r||a(s.message)}),()=>{r=!0}},[e]),{worlds:t,error:o}}var Qe=null;function Vo(e){return window.AchoverseWorld?.messageBoardsVersion===2?Promise.resolve():(Qe||(Qe=new Promise((t,n)=>{let o=document.createElement("script");o.src=e.assetUrl("/assets/world.js?v=autumn-boards-20261119"),o.onload=()=>window.AchoverseWorld?.messageBoardsVersion===2?t():n(new Error("\u573A\u666F\u7248\u672C\u4E0D\u5339\u914D\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")),o.onerror=()=>n(new Error("3D \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")),document.head.appendChild(o)}),Qe.catch(()=>{Qe=null})),Qe)}function Go(e){if(e===0)return"hero";if(e===1)return"large";if(e<4)return"small";let t=(e-4)%6;return t===0||t===2?"large":"small"}function Zo({api:e,world:t,onOpen:n,size:o}){return Y.default.createElement("button",{type:"button",className:"acv-space-card acv-world-card","data-world-slug":t.slug,"data-world-size":o,onClick:()=>{vt=t.slug,n(t.slug)}},t.cover&&Y.default.createElement("img",{className:"acv-world-cover",src:e.assetUrl(t.cover),alt:"",loading:"lazy"}),Y.default.createElement("span",{className:"acv-world-card-title"},t.title))}function Wa({api:e,onOpenWorld:t}){let{worlds:n,error:o}=Ya(e),a=Y.default.useRef(null);return Y.default.useEffect(()=>{if(!n||!vt)return;Array.from(a.current?.querySelectorAll("[data-world-slug]")||[]).find(s=>s.dataset.worldSlug===vt)?.focus({preventScroll:!0}),vt=null},[n]),Y.default.createElement("div",{className:"acv-zone acv-world-gallery"},Y.default.createElement("div",{className:"acv-section-head"},Y.default.createElement("h2",{className:"acv-section-title"},"3D\u7A7A\u95F4"),Y.default.createElement("span",{className:"acv-section-note"},"Web3D \u5236\u4F5C\u7684\u53EF\u4EA4\u4E92\u7A7A\u95F4\uFF0C\u70B9\u5F00\u4E00\u4E2A\u8FDB\u53BB\u901B\u901B")),o&&Y.default.createElement("div",{className:"acv-empty"},o),!n&&!o&&Y.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),n&&n.length===0&&Y.default.createElement("div",{className:"acv-panel"},Y.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u7A7A\u95F4\u3002")),Y.default.createElement("div",{className:"acv-world-grid",ref:a},n?.map((r,s)=>Y.default.createElement(Zo,{key:r.slug,api:e,world:r,onOpen:t,size:Go(s)}))))}function Xo({api:e,world:t,notify:n,data:o,panelOpen:a,onCloud:r,onMessage:s,cloudFocused:i,onBoardPreviews:l}){let d=Y.default.useRef(null),[c,u]=Y.default.useState("loading"),p=Y.default.useRef(null),m=Y.default.useRef(null);return m.current={data:o,panelOpen:a,notify:n,onCloud:r,onMessage:s,onBoardPreviews:l},Y.default.useEffect(()=>{p.current?.setCloudFocused?.(i)},[i,c]),Y.default.useEffect(()=>{p.current?.updateMessages?.(o.messages,o.highlightId),p.current?.setInputEnabled?.(!a)},[o.messages,o.highlightId,a,c]),Y.default.useEffect(()=>{let g=null,y=!1;return Vo(e).then(()=>{y||!d.current||(g=window.AchoverseWorld.mount(t.slug,d.current,{assetUrl:k=>e.assetUrl(k),onBoardPreviews:k=>m.current.onBoardPreviews(k),onEvent:k=>m.current.notify?.(k),onCloud:()=>m.current.onCloud(),onMessage:k=>m.current.onMessage(k)}),p.current=g,g.updateMessages?.(m.current.data.messages),g.setInputEnabled?.(!m.current.panelOpen),u("ready"))}).catch(k=>{y||u(k.message||"error")}),()=>{y=!0,p.current=null,g?.()}},[e,t.slug]),Y.default.createElement("div",{className:"acv-world-live"},Y.default.createElement("div",{className:"acv-world-canvas",ref:d},c!=="ready"&&Y.default.createElement("div",{className:"acv-world-loading"},c==="loading"?"\u6B63\u5728\u52A0\u8F7D 3D \u5F15\u64CE\u4E0E\u573A\u666F\u2026":c)),Y.default.createElement("div",{className:"acv-world-hint"},t.hint||"\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u4E00\u70B9\u6302\u949F\u548C\u6728\u95E8"))}function Ka({api:e,slug:t,onBack:n,notify:o,me:a,onLogin:r}){let{worlds:s,error:i}=Ya(e),l=s?.find(I=>I.slug===t),d=ja(e,t,a,It.includes(t)),[c,u]=Y.default.useState(null),[p,m]=Y.default.useState(!1),[g,y]=Y.default.useState({}),k=Y.default.useRef(c);k.current=c;let $=Y.default.useRef(null),H=Y.default.useRef(null);return Y.default.useEffect(()=>{let I=document.body.style.overflow,P=document.querySelector(".acv-root"),T=P?.inert;document.body.style.overflow="hidden",P&&(P.inert=!0),H.current?.focus();let U=A=>{A.key==="Escape"&&!k.current&&H.current?.click()};return document.addEventListener("keydown",U),()=>{document.removeEventListener("keydown",U),document.body.style.overflow=I,P&&(P.inert=T)}},[]),(0,Ha.createPortal)(Y.default.createElement("div",{ref:$,className:"acv-world-fullscreen",role:"dialog","aria-modal":"true","aria-label":l?.title||"3D\u7A7A\u95F4",onKeyDown:I=>{if(I.key==="Tab"&&!c){let P=[...$.current.querySelectorAll("button:not(:disabled)")],T=P[0],U=P.at(-1);I.shiftKey&&document.activeElement===T?(I.preventDefault(),U?.focus()):!I.shiftKey&&document.activeElement===U&&(I.preventDefault(),T?.focus())}}},Y.default.createElement("button",{ref:H,type:"button",className:"acv-world-back",onClick:n},"\u2190 \u8FD4\u56DE 3D\u7A7A\u95F4"),i&&Y.default.createElement("div",{className:"acv-world-loading",role:"alert"},i),!s&&!i&&Y.default.createElement("div",{className:"acv-world-loading",role:"status"},"\u6B63\u5728\u52A0\u8F7D\u7A7A\u95F4\u2026"),s&&!l&&Y.default.createElement("div",{className:"acv-world-loading"},"\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u7A7A\u95F4\u3002"),l&&(l.status==="ready"?Y.default.createElement(Xo,{api:e,world:l,notify:o,data:d,panelOpen:!!c,cloudFocused:p,onBoardPreviews:y,onCloud:()=>u({selected:null}),onMessage:I=>{let P=d.messages.find(T=>T.id===I);P&&u({selected:P})}}):Y.default.createElement("div",{className:"acv-world-loading"},"\u8FD9\u4E2A\u7A7A\u95F4\u6682\u65F6\u65E0\u6CD5\u8FDB\u5165\u3002")),It.includes(l?.slug)&&Y.default.createElement("button",{type:"button",className:"acv-cloud-keyboard-entry","aria-label":"\u4E91\u6735\uFF1A\u6253\u5F00\u7559\u8A00\u677F",onFocus:()=>m(!0),onBlur:()=>m(!1),onClick:()=>u({selected:null})},"\u6253\u5F00\u4E91\u6735\u7559\u8A00\u677F"),c&&Y.default.createElement(qa,{api:e,slug:t,me:a,data:d,selected:c.selected,previews:g,onClose:()=>u(null),onLogin:r})),document.body)}var oe=Z(require("react"),1);function Va({api:e,me:t,onDm:n,onOpenPost:o}){let[a,r]=oe.default.useState(""),[s,i]=oe.default.useState(null),[l,d]=oe.default.useState(!1),[c,u]=oe.default.useState(!1),p=oe.default.useRef(null);return oe.default.useEffect(()=>{if(!l)return;let m=g=>{p.current&&!p.current.contains(g.target)&&d(!1)};return document.addEventListener("click",m),()=>document.removeEventListener("click",m)},[l]),oe.default.useEffect(()=>{let m=a.trim();if(m.length===0){i(null);return}let g=setTimeout(async()=>{u(!0);try{let y=await e.search(m);i(y.posts||[]),d(!0)}catch{i([])}finally{u(!1)}},280);return()=>clearTimeout(g)},[e,a]),oe.default.createElement("div",{className:"acv-search",ref:p},oe.default.createElement("span",{className:"acv-search-icon","aria-hidden":"true"},oe.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",focusable:"false"},oe.default.createElement("circle",{cx:"7",cy:"7",r:"4.6",stroke:"currentColor",strokeWidth:"1.6"}),oe.default.createElement("path",{d:"M10.5 10.5 14 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))),oe.default.createElement("input",{className:"acv-search-input",type:"text",value:a,placeholder:"\u641C\u7D22\u5E16\u5B50","aria-label":"\u641C\u7D22\u5E16\u5B50",autoComplete:"off",spellCheck:!1,onChange:m=>r(m.target.value),onFocus:()=>a.trim()&&d(!0)}),l&&oe.default.createElement("div",{className:"acv-search-panel"},c&&oe.default.createElement("div",{className:"acv-search-empty"},"\u641C\u7D22\u4E2D\u2026"),!c&&s?.length===0&&oe.default.createElement("div",{className:"acv-search-empty"},"\u6CA1\u6709\u627E\u5230\u300C",a.trim(),"\u300D"),s?.map(m=>oe.default.createElement("button",{key:m.id,type:"button",className:"acv-search-item",onClick:()=>{d(!1),r(""),o(m.id)}},oe.default.createElement("span",{className:"acv-search-title"},m.title),oe.default.createElement("span",{className:"acv-search-meta"},m.spaceSlug," \xB7"," ",oe.default.createElement(te,{api:e,me:t,handle:m.author?.handle,onDm:n},oe.default.createElement("span",null,m.author?.displayName||m.author?.handle))," ","\xB7 ",de(m.createdAt))))))}var C=Z(require("react"),1);function gt({title:e,note:t,children:n}){return C.default.createElement("div",{className:"acv-settings-section"},C.default.createElement("div",{className:"acv-section-head"},C.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},e),t&&C.default.createElement("span",{className:"acv-section-note"},t)),n)}function Ga({api:e,me:t,onBack:n,onRefreshMe:o,notify:a}){let[r,s]=C.default.useState(t?.displayName||""),[i,l]=C.default.useState(t?.bio||""),[d,c]=C.default.useState(t?.allowDm!==!1),[u,p]=C.default.useState(t?.avatarText||""),[m,g]=C.default.useState(t?.avatarColor||"#F53FA6"),[y,k]=C.default.useState(t?.avatarColorTo||"#FF7A45"),[$,H]=C.default.useState(""),[I,P]=C.default.useState(""),[T,U]=C.default.useState(""),[A,q]=C.default.useState(""),[K,x]=C.default.useState(""),[W,w]=C.default.useState("");if(C.default.useEffect(()=>{s(t?.displayName||""),l(t?.bio||""),c(t?.allowDm!==!1),p(t?.avatarText||""),g(t?.avatarColor||"#F53FA6"),k(t?.avatarColorTo||"#FF7A45")},[t]),!t)return C.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");async function v(f,b,M){q(f),x("");try{await b(),a(M),await o?.()}catch(G){x(G.message)}finally{q("")}}return C.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:820}},C.default.createElement("div",null,C.default.createElement("button",{type:"button",className:"acv-back",onClick:n},"\u2190 \u8FD4\u56DE\u9996\u9875")),K&&C.default.createElement("div",{className:"acv-error"},K),C.default.createElement("div",{className:"acv-panel",style:{padding:"20px 22px"}},C.default.createElement("div",{className:"acv-section-head"},C.default.createElement("h2",{className:"acv-section-title"},"\u8D26\u53F7\u8BBE\u7F6E"),C.default.createElement("span",{className:"acv-section-note"},"@",t.handle)),C.default.createElement(gt,{title:"\u8D44\u6599",note:"\u6635\u79F0\u548C\u7B80\u4ECB\u4F1A\u663E\u793A\u5728\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u4E0A"},C.default.createElement("div",{className:"acv-field"},C.default.createElement("label",null,"\u6635\u79F0"),C.default.createElement("input",{className:"acv-input",value:r,maxLength:24,onChange:f=>s(f.target.value)})),C.default.createElement("div",{className:"acv-field"},C.default.createElement("label",null,"\u7B80\u4ECB"),C.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:i,maxLength:200,onChange:f=>l(f.target.value)})),C.default.createElement("div",{className:"acv-field"},C.default.createElement("label",null,"\u63A5\u6536\u79C1\u4FE1"),C.default.createElement("div",{className:"acv-zone-picker"},C.default.createElement("button",{type:"button",className:d?"acv-zone-option is-active":"acv-zone-option",onClick:()=>c(!0)},"\u5141\u8BB8\u522B\u4EBA\u7ED9\u6211\u53D1\u79C1\u4FE1"),C.default.createElement("button",{type:"button",className:d?"acv-zone-option":"acv-zone-option is-active",onClick:()=>c(!1)},"\u5173\u95ED\u79C1\u4FE1"))),C.default.createElement("div",{className:"acv-row"},C.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:A==="profile",onClick:()=>v("profile",()=>e.updateProfile({displayName:r,bio:i,allowDm:d}),"\u8D44\u6599\u5DF2\u4FDD\u5B58")},A==="profile"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8D44\u6599"))),C.default.createElement(gt,{title:"\u5934\u50CF",note:"\u4E24\u4E2A\u6E10\u53D8\u8272 + \u6700\u591A 4 \u4E2A\u5B57\uFF0C\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u90FD\u4F1A\u7528"},C.default.createElement("div",{className:"acv-avatar-editor"},C.default.createElement("span",{className:"acv-avatar acv-avatar--lg",style:ie({avatarColor:m,avatarColorTo:y,avatarText:u})},se({displayName:r,handle:t.handle,avatarText:u})),C.default.createElement("div",{className:"acv-avatar-fields"},C.default.createElement("div",{className:"acv-field"},C.default.createElement("label",null,"\u5934\u50CF\u6587\u5B57\uFF08\u7559\u7A7A\u7528\u6635\u79F0\u9996\u5B57\uFF0C\u6700\u591A 4 \u4E2A\u5B57\uFF09"),C.default.createElement("input",{className:"acv-input",value:u,maxLength:4,placeholder:se({displayName:r,handle:t.handle}),onChange:f=>p(f.target.value)}),C.default.createElement("span",{className:"acv-field-hint"},[...u].length,"/4")),C.default.createElement("div",{className:"acv-field"},C.default.createElement("label",null,"\u6E10\u53D8\u8272"),C.default.createElement("div",{className:"acv-color-row"},C.default.createElement("input",{type:"color",className:"acv-color",value:m,onChange:f=>g(f.target.value)}),C.default.createElement("input",{type:"color",className:"acv-color",value:y,onChange:f=>k(f.target.value)}),C.default.createElement("button",{type:"button",className:"acv-btn",onClick:()=>{g("#F53FA6"),k("#FF7A45")}},"\u6062\u590D\u9ED8\u8BA4\u914D\u8272"))))),C.default.createElement("div",{className:"acv-row"},C.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:A==="avatar",onClick:()=>v("avatar",()=>e.updateProfile({avatarText:u,avatarColor:m,avatarColorTo:y}),"\u5934\u50CF\u5DF2\u4FDD\u5B58")},A==="avatar"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u5934\u50CF"))),C.default.createElement(gt,{title:"\u90AE\u7BB1",note:t.emailVerified?"\u5DF2\u9A8C\u8BC1":"\u672A\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u540E\u624D\u80FD\u53D1\u5E16\u8BC4\u8BBA"},C.default.createElement("p",{className:"acv-space-sub",style:{marginBottom:10}},"\u5F53\u524D\u90AE\u7BB1\uFF1A",C.default.createElement("strong",null,t.email||"\uFF08\u6CA1\u6709\uFF09")),C.default.createElement("div",{className:"acv-field"},C.default.createElement("label",null,"\u6362\u6210\u65B0\u90AE\u7BB1"),C.default.createElement("div",{className:"acv-inline"},C.default.createElement("input",{className:"acv-input",type:"email",placeholder:"new@example.com",value:$,onChange:f=>H(f.target.value)}),C.default.createElement("button",{type:"button",className:"acv-btn",disabled:A==="email"||!$.trim(),onClick:()=>v("email",async()=>{(await e.requestEmailChange($.trim()))?.verifyLink&&a("\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7"),H("")},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u5230\u65B0\u90AE\u7BB1\uFF0C\u70B9\u5F00\u94FE\u63A5\u624D\u751F\u6548")},"\u53D1\u9001\u9A8C\u8BC1"))),!t.emailVerified&&C.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:A==="resend",onClick:()=>v("resend",async()=>{let f=await e.resend();if(f?.verifyLink)throw new Error(`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\uFF1A${f.verifyLink}`)},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u91CD\u53D1")},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6")),C.default.createElement(gt,{title:"\u5BC6\u7801",note:"\u81F3\u5C11 8 \u4F4D"},C.default.createElement("div",{className:"acv-field"},C.default.createElement("label",{htmlFor:"account-password"},"\u5F53\u524D\u5BC6\u7801"),C.default.createElement(Ee,{id:"account-password",autoComplete:"current-password",value:I,onChange:f=>P(f.target.value)})),C.default.createElement("div",{className:"acv-field"},C.default.createElement("label",{htmlFor:"account-new-password"},"\u65B0\u5BC6\u7801"),C.default.createElement(Ee,{id:"account-new-password",autoComplete:"new-password",value:T,onChange:f=>U(f.target.value)})),C.default.createElement("div",{className:"acv-row"},C.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:A==="password"||!I||!T,onClick:()=>v("password",async()=>{await e.changePassword({currentPassword:I,newPassword:T}),P(""),U("")},"\u5BC6\u7801\u5DF2\u66F4\u65B0")},A==="password"?"\u66F4\u65B0\u4E2D\u2026":"\u66F4\u65B0\u5BC6\u7801")),C.default.createElement("p",{className:"acv-field-hint"},"\u5FD8\u4E86\u5F53\u524D\u5BC6\u7801\uFF1F\u53EF\u4EE5\u7ED9 ",t.email||"\uFF08\u6CA1\u6709\u90AE\u7BB1\uFF09"," \u53D1\u4E00\u5C01\u91CD\u7F6E\u90AE\u4EF6\uFF0C\u70B9\u94FE\u63A5\u8BBE\u65B0\u5BC6\u7801\u3002"),W&&C.default.createElement("div",{className:"acv-notice"},W),C.default.createElement("div",{className:"acv-row"},C.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:A==="reset-mail"||!t.email,onClick:async()=>{q("reset-mail"),x(""),w("");try{let f=await e.forgotPassword(t.email);w(f?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${f.verifyLink}`:"\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(f){x(f.message)}finally{q("")}}},A==="reset-mail"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u90AE\u4EF6\u91CD\u7F6E\u5BC6\u7801")))))}var F=Z(require("react"),1);function Jo(e,t){if(!e||e.thread?.id!==t.thread?.id)return t;let n=new Map(e.messages.map(a=>[a.id,a]));for(let a of t.messages)n.set(a.id,a);let o=[...n.values()].sort((a,r)=>a.createdAt-r.createdAt||(a.id<r.id?-1:1));return{...t,messages:o}}function Za({api:e,me:t,initialThreadId:n,onBack:o,onDm:a,notify:r}){let[s,i]=F.default.useState(null),[l,d]=F.default.useState(n||null),[c,u]=F.default.useState(null),[p,m]=F.default.useState(""),[g,y]=F.default.useState(!1),[k,$]=F.default.useState(!1),[H,I]=F.default.useState(""),P=F.default.useRef(null),T=F.default.useCallback(()=>{t&&e.dmThreads().then(x=>{i(x.threads),!l&&x.threads.length&&d(x.threads[0].id)}).catch(x=>I(x.message))},[e,t,l]),U=F.default.useCallback(x=>{u(W=>Jo(W,x))},[]);F.default.useEffect(()=>{T()},[T]),F.default.useEffect(()=>{l&&e.dmThread(l).then(x=>{U(x),I(""),T()}).catch(x=>I(x.message))},[e,l,U,T]),F.default.useEffect(()=>{if(!t||!l)return;let x=setInterval(()=>{document.hidden||e.dmThread(l).then(W=>{U(W),T()}).catch(()=>{})},8e3);return()=>clearInterval(x)},[e,t,l,U,T]),F.default.useEffect(()=>{let x=P.current;x&&(x.scrollTop=x.scrollHeight)},[c]);async function A(){let x=p.trim();if(!(!x||!l)){y(!0);try{await e.dmSend(l,x),m("");let W=await e.dmThread(l);U(W),T()}catch(W){r(W.message,{error:!0})}finally{y(!1)}}}async function q(){let x=c?.messages?.[0];if(!(!x||!l||k)){$(!0);try{let W=await e.dmThread(l,x.createdAt);u(w=>{if(!w)return W;let v=new Map(W.messages.map(b=>[b.id,b]));for(let b of w.messages)v.set(b.id,b);let f=[...v.values()].sort((b,M)=>b.createdAt-M.createdAt||(b.id<M.id?-1:1));return{...w,messages:f,total:W.total}})}catch(W){r(W.message,{error:!0})}finally{$(!1)}}}if(!t)return F.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");let K=!!(c&&c.messages.length<c.total);return F.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},F.default.createElement("div",null,F.default.createElement("button",{type:"button",className:"acv-back",onClick:o},"\u2190 \u8FD4\u56DE\u9996\u9875")),H&&F.default.createElement("div",{className:"acv-error"},H),F.default.createElement("div",{className:"acv-dm-layout"},F.default.createElement("aside",{className:"acv-panel acv-dm-list"},F.default.createElement("div",{className:"acv-section-head"},F.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},"\u79C1\u4FE1"),F.default.createElement("span",{className:"acv-section-note"},s?.length||0)),s?.length===0&&F.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u79C1\u4FE1"),s?.map(x=>F.default.createElement("button",{key:x.id,type:"button",className:x.id===l?"acv-dm-item is-active":"acv-dm-item",onClick:()=>d(x.id)},F.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:ie(x.other)},se(x.other||{})),F.default.createElement("span",{className:"acv-dm-main"},F.default.createElement("span",{className:"acv-dm-name"},F.default.createElement(te,{api:e,me:t,handle:x.other?.handle,onDm:a},F.default.createElement("span",null,x.other?.displayName||x.other?.handle)),x.unread>0&&F.default.createElement("span",{className:"acv-badge"},x.unread)),F.default.createElement("span",{className:"acv-dm-preview"},x.lastMessage?.body||"\u8FD8\u6CA1\u6709\u6D88\u606F"))))),F.default.createElement("section",{className:"acv-panel acv-dm-pane"},!c&&F.default.createElement("div",{className:"acv-empty"},"\u9009\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB"),c&&F.default.createElement(F.default.Fragment,null,F.default.createElement("div",{className:"acv-dm-head"},F.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:ie(c.thread.other)},se(c.thread.other||{})),F.default.createElement(te,{api:e,me:t,handle:c.thread.other?.handle,onDm:a},F.default.createElement("span",{style:{fontWeight:600}},c.thread.other?.displayName),F.default.createElement("span",{className:"acv-member-meta"},"@",c.thread.other?.handle))),F.default.createElement("div",{className:"acv-dm-messages",ref:P},K&&F.default.createElement("button",{type:"button",className:"acv-dm-more",disabled:k,onClick:q},k?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u65E9\u7684\u6D88\u606F"),c.messages.length===0&&F.default.createElement("div",{className:"acv-empty"},"\u6253\u4E2A\u62DB\u547C\u5427"),c.messages.map(x=>F.default.createElement("div",{key:x.id,className:x.mine?"acv-dm-msg is-mine":"acv-dm-msg"},F.default.createElement("div",{className:"acv-dm-bubble"},x.body),F.default.createElement("div",{className:"acv-dm-time"},de(x.createdAt))))),F.default.createElement("div",{className:"acv-dm-composer"},F.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:p,placeholder:"\u5199\u70B9\u4EC0\u4E48\u2026\uFF08Enter \u53D1\u9001\uFF09",onChange:x=>m(x.target.value),onKeyDown:x=>{x.key==="Enter"&&!x.shiftKey&&(x.preventDefault(),A())}}),F.default.createElement("button",{type:"button",className:"acv-chat-send",disabled:g||!p.trim(),onClick:A,"aria-label":"\u53D1\u9001"},F.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},F.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}))))))))}var re=Z(require("react"),1);function Xa({api:e,token:t,onDone:n,notify:o}){let[a,r]=re.default.useState(""),[s,i]=re.default.useState(""),[l,d]=re.default.useState(!1),[c,u]=re.default.useState("");async function p(m){if(m.preventDefault(),a!==s)return u("\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4");d(!0),u("");try{await e.resetPassword({token:t,password:a}),o("\u5BC6\u7801\u5DF2\u91CD\u7F6E\uFF0C\u8BF7\u7528\u7528\u6237\u540D\u6216\u90AE\u7BB1\u548C\u65B0\u5BC6\u7801\u767B\u5F55"),n()}catch(g){u(g.message)}finally{d(!1)}}return re.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:460,paddingTop:40}},re.default.createElement("div",{className:"acv-panel",style:{padding:"24px"}},re.default.createElement("h2",{className:"acv-section-title"},"\u8BBE\u7F6E\u65B0\u5BC6\u7801"),re.default.createElement("p",{className:"acv-modal-sub"},"\u91CD\u7F6E\u540E\u6240\u6709\u5DF2\u767B\u5F55\u8BBE\u5907\u90FD\u4F1A\u9000\u51FA\u3002"),c&&re.default.createElement("div",{className:"acv-error"},c),re.default.createElement("form",{onSubmit:p},re.default.createElement("div",{className:"acv-field"},re.default.createElement("label",{htmlFor:"reset-password"},"\u65B0\u5BC6\u7801"),re.default.createElement(Ee,{id:"reset-password",autoComplete:"new-password",value:a,onChange:m=>r(m.target.value)})),re.default.createElement("div",{className:"acv-field"},re.default.createElement("label",{htmlFor:"reset-confirm"},"\u518D\u8F93\u4E00\u6B21"),re.default.createElement(Ee,{id:"reset-confirm",autoComplete:"new-password",value:s,onChange:m=>i(m.target.value)})),re.default.createElement("div",{className:"acv-row"},re.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:l||a.length<8},l?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u65B0\u5BC6\u7801")))))}function Qo({me:e,mode:t,api:n,emailNotice:o,onDsh:a,onFeedback:r,onAuth:s,onLogout:i,onHome:l,onResend:d,onAdmin:c,onAccount:u,onDm:p,onDmUser:m,dmUnread:g=0,onOpenPost:y,tabs:k,activeTab:$,onSelectTab:H}){let[I,P]=S.default.useState(!1);return S.default.useEffect(()=>{if(!I)return;let T=()=>P(!1);return window.addEventListener("click",T),()=>window.removeEventListener("click",T)},[I]),S.default.createElement("div",{className:"acv-topbar"},S.default.createElement("div",{className:"acv-tabs"},k.map(T=>S.default.createElement("button",{key:T.key,type:"button",className:$===T.key?"acv-tab is-active":"acv-tab",onClick:()=>H(T.key)},T.label))),S.default.createElement(Va,{api:n,me:e,onDm:m,onOpenPost:y}),S.default.createElement("div",{className:"acv-topbar-grow"}),S.default.createElement("div",{className:"acv-topbar-right"},S.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:r},"\u53CD\u9988"),t==="plugin"&&S.default.createElement("button",{type:"button",className:"acv-dsh",onClick:a,title:"\u548C DSH \u804A\u804A\u8FD9\u4E2A\u793E\u533A"},S.default.createElement("span",{className:"acv-dsh-dot"}),"DSH\u52A9\u624B"),t==="plugin"&&S.default.createElement("span",{className:"acv-divider"}),e?S.default.createElement("div",{className:"acv-relative"},S.default.createElement("button",{type:"button",className:"acv-user",onClick:T=>{T.stopPropagation(),P(U=>!U)}},S.default.createElement(te,{api:n,me:e,handle:e.handle,disabled:I},S.default.createElement("span",{className:"acv-avatar",style:ie(e)},se(e)),S.default.createElement("span",{className:"acv-user-name"},e.displayName||e.handle)),S.default.createElement("span",{className:"acv-caret"},"\u25BE")),I&&S.default.createElement("div",{className:"acv-menu",onClick:T=>T.stopPropagation()},S.default.createElement("div",{className:"acv-menu-note"},"@",e.handle," \xB7 ",e.role==="admin"?"\u7BA1\u7406\u5458":"\u6210\u5458"),S.default.createElement("div",{className:"acv-menu-group"},"\u4E2A\u4EBA\u7BA1\u7406"),S.default.createElement("button",{type:"button",onClick:()=>{P(!1),u()}},"\u8D26\u53F7\u8BBE\u7F6E"),S.default.createElement("button",{type:"button",onClick:()=>{P(!1),p()}},"\u79C1\u4FE1",g>0?` \xB7 ${g}`:""),!e.emailVerified&&S.default.createElement("button",{type:"button",onClick:()=>{P(!1),d()}},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6"),e.role==="admin"&&S.default.createElement(S.default.Fragment,null,S.default.createElement("div",{className:"acv-menu-group"},"\u7BA1\u7406\u5458"),S.default.createElement("button",{type:"button",onClick:()=>{P(!1),c()}},"\u793E\u533A\u7BA1\u7406")),S.default.createElement("div",{className:"acv-menu-group"}),S.default.createElement("button",{type:"button",onClick:()=>{P(!1),i()}},"\u9000\u51FA\u767B\u5F55"))):S.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>s("login")},"\u767B\u5F55")),o&&S.default.createElement("div",{style:{display:"none"}},o))}function Ja({mode:e="site",base:t="",tokenStore:n,onDsh:o}){let a=S.default.useMemo(()=>Wt({base:t,credentials:e==="site"?"same-origin":"omit",token:n?.get()||null,onToken:_=>n?.set(_)}),[t,e,n]),[r,s]=S.default.useState(null),[i,l]=S.default.useState(null),[d,c]=S.default.useState("loading"),[u,p]=S.default.useState({name:"home"}),[m,g]=S.default.useState("home"),[y,k]=S.default.useState(0),[$,H]=S.default.useState(!1),[I,P]=S.default.useState(null),[T,U]=S.default.useState(null),[A,q]=S.default.useState(0),K=S.default.useRef(0),x=S.default.useCallback((_,{error:X=!1}={})=>{U({text:_,error:X,key:Date.now()})},[]);S.default.useEffect(()=>{if(!T)return;let _=setTimeout(()=>U(null),3200);return()=>clearTimeout(_)},[T]);let W=S.default.useCallback(async()=>{let _=++K.current;try{let X=await a.bootstrap();if(_!==K.current)return;s(X.account||null),l(X.home||null)}catch{_===K.current&&s(null)}finally{_===K.current&&c("ready")}},[a]);S.default.useEffect(()=>{W()},[W]),S.default.useEffect(()=>{if(e!=="site")return;let _=/^\/post\/([^/]+)$/.exec(window.location.pathname)?.[1];_&&p({name:"post",id:decodeURIComponent(_),from:{name:"home"}});let xe=new URLSearchParams(window.location.search).get("token");xe&&window.location.pathname.startsWith("/reset")&&p({name:"reset",token:xe})},[e]),S.default.useEffect(()=>{let _=()=>P("login");return window.addEventListener("achoverse:auth",_),()=>window.removeEventListener("achoverse:auth",_)},[]),S.default.useEffect(()=>{if(e!=="site")return;let _=new URLSearchParams(window.location.search),X=_.get("token");if(!X||!window.location.pathname.startsWith("/verify"))return;let xe=_.get("kind");(xe==="email"?a.confirmEmailChange(X):a.verify(X)).then(De=>{s(De.account||null),x(xe==="email"?"\u65B0\u90AE\u7BB1\u5DF2\u751F\u6548\uFF0C\u9A8C\u8BC1\u4E5F\u5B8C\u6210\u4E86":"\u90AE\u7BB1\u9A8C\u8BC1\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u53D1\u5E16\u4E86"),window.history.replaceState({},"","/")}).catch(De=>x(De.message,{error:!0}))},[a,e,x]),S.default.useEffect(()=>{if(!r){k(0);return}let _=!1,X=()=>a.dmUnread().then(et=>{_||k(et.unread||0)}).catch(()=>{});X();let xe=setInterval(X,3e4);return()=>{_=!0,clearInterval(xe)}},[a,r]);let w=async _=>{try{let X=await a.dmOpenWith({targetId:_.id});p({name:"dm",threadId:X.thread.id})}catch(X){x(X.message,{error:!0})}},v=_=>p({name:"space",slug:_,page:1}),f=S.default.useCallback(_=>p(X=>X.name==="space"&&X.page!==_?{...X,page:_}:X),[]),b=(_,X)=>p({name:"post",id:_,from:X||{name:"home"}}),M=()=>{p({name:"home"}),q(_=>_+1),l(null)};return S.default.createElement("div",{className:e==="plugin"?"acv-root acv-root--panel":"acv-root"},S.default.createElement("div",{className:"acv-frame"},S.default.createElement(Qo,{me:r,mode:e,api:a,onOpenPost:b,onDsh:()=>{if(o)return o();window.dispatchEvent(new CustomEvent("achoverse:open-dsh"))},onFeedback:()=>H(!0),onAuth:P,onLogout:async()=>{try{await a.logout()}catch{}a.setToken(null),K.current+=1,s(null),c("ready"),x("\u5DF2\u7ECF\u9000\u51FA\u767B\u5F55"),M()},onHome:M,tabs:[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR"},{key:"3dSpace",label:"3D\u7A7A\u95F4"}],activeTab:m,onSelectTab:_=>{g(_),p({name:"home"})},onAdmin:()=>p({name:"admin"}),onAccount:()=>p({name:"account"}),onDm:()=>p({name:"dm"}),onDmUser:w,dmUnread:y,onResend:async()=>{try{let _=await a.resend();x(_?.verifyLink?"\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7":"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001")}catch(_){x(_.message,{error:!0})}}}),u.name==="home"&&m==="arvr"&&S.default.createElement(Ua,{api:a,zone:"arvr",title:"AR/VR \u4E13\u533A",note:"\u4E3B\u9898\u4E13\u533A\uFF1A\u53EA\u6536\u5F55 AR/VR \u76F8\u5173\u7684\u677F\u5757",onOpenSpace:v}),u.name==="home"&&m==="3dSpace"&&S.default.createElement(Wa,{api:a,onOpenWorld:_=>p({name:"3dWorld",slug:_})}),u.name==="home"&&m==="home"&&d!=="ready"&&S.default.createElement("div",{className:"acv-main"},S.default.createElement("div",{className:"acv-col"},S.default.createElement("div",{className:"acv-skeleton"}),S.default.createElement("div",{className:"acv-skeleton"}),S.default.createElement("div",{className:"acv-skeleton"})),S.default.createElement("div",{className:"acv-col"},S.default.createElement("div",{className:"acv-skeleton",style:{height:820}}))),u.name==="home"&&m==="home"&&d==="ready"&&S.default.createElement(aa,{initialData:i,key:A,api:a,me:r,onOpenSpace:v,onOpenPost:_=>b(_,{name:"home"}),onDm:w}),u.name==="3dWorld"&&S.default.createElement(Ka,{api:a,slug:u.slug,onBack:()=>p({name:"home"}),notify:x,me:r,onLogin:_=>{K.current+=1,s(_),c("ready"),l(null)}}),u.name==="space"&&S.default.createElement(Pa,{api:a,key:u.slug,slug:u.slug,page:u.page||1,onPageChange:f,me:r,onBack:M,onOpenPost:(_,X)=>p(qt(_,u.slug,X)),onAuth:()=>P("login"),onDm:w,notify:x}),u.name==="reset"&&S.default.createElement(Xa,{api:a,token:u.token,notify:x,onDone:()=>{K.current+=1,a.setToken(null),s(null),k(0),c("ready"),window.history.replaceState({},"","/"),M(),P("login")}}),u.name==="account"&&S.default.createElement(Ga,{api:a,me:r,onBack:M,onRefreshMe:W,notify:x}),u.name==="dm"&&S.default.createElement(Za,{api:a,me:r,initialThreadId:u.threadId,onBack:M,onDm:w,notify:x}),u.name==="admin"&&S.default.createElement(_a,{api:a,me:r,onDm:w,onBack:M,notify:x}),u.name==="post"&&S.default.createElement(Oa,{api:a,id:u.id,me:r,backTo:u.from?.name==="space"?"space":"home",onDm:w,onBack:()=>u.from?.name==="space"?p(Ht(u.from)):M(),onAuth:()=>P("login"),notify:x})),$&&S.default.createElement(Ia,{key:r?.id||"guest",api:a,me:r,onClose:()=>H(!1),onAuth:()=>{H(!1),P("login")}}),I&&S.default.createElement(mt,{api:a,initialMode:I,onClose:()=>P(null),onDone:_=>{K.current+=1,s(_),c("ready"),P(null),l(null),M(),x("\u767B\u5F55\u6210\u529F")},notify:x}),T&&S.default.createElement("div",{className:T.error?"acv-toast is-error":"acv-toast"},T.text))}var B=Z(require("react"),1);function Re(e,t=""){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,role:e,text:t,tools:[]}}async function Ro({token:e,message:t,signal:n,onEvent:o}){let a=await fetch("/community/ai/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e,message:t}),signal:n});if(!a.ok||!a.body){let l=`HTTP ${a.status}`;try{l=(await a.json())?.error||l}catch{}throw new Error(l)}let r=a.body.getReader(),s=new TextDecoder,i="";for(;;){let{value:l,done:d}=await r.read();if(d)break;i+=s.decode(l,{stream:!0});let c;for(;(c=i.indexOf(`

`))>=0;){let u=i.slice(0,c);i=i.slice(c+2);for(let p of u.split(`
`)){if(!p.startsWith("data:"))continue;let m=p.slice(5).trim();if(m)try{o(JSON.parse(m))}catch{}}}}}function Qa({tokenStore:e,onClose:t,onLogin:n}){let[o,a]=B.default.useState(()=>[Re("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),[r,s]=B.default.useState(""),[i,l]=B.default.useState(!1),[d,c]=B.default.useState(""),[u,p]=B.default.useState(()=>e?.get()||null),[m,g]=B.default.useState(""),[y,k]=B.default.useState(!1),[$,H]=B.default.useState(null),[I,P]=B.default.useState({}),[T,U]=B.default.useState(!1),A=B.default.useRef(null),q=B.default.useRef(null);B.default.useEffect(()=>()=>q.current?.abort(),[]),B.default.useEffect(()=>{let v=A.current;v&&(v.scrollTop=v.scrollHeight)},[o]),B.default.useEffect(()=>{let v=()=>{let b=e?.get()||null;b!==u&&(q.current?.abort(),a([Re("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),H(null),g(""),c(""),p(b))},f=setInterval(v,1500);return window.addEventListener("achoverse:token-changed",v),window.addEventListener("storage",v),()=>{clearInterval(f),window.removeEventListener("achoverse:token-changed",v),window.removeEventListener("storage",v)}},[u,e]),B.default.useEffect(()=>{if(!u)return;let v=!1;return fetch("/community/ai/history",{headers:{authorization:`Bearer ${u}`},cache:"no-store"}).then(f=>{if(!f.ok)throw new Error("\u5386\u53F2\u8BFB\u53D6\u5931\u8D25");return f.json()}).then(f=>{if(v)return;let b=(f?.messages||[]).map(M=>({...Re(M.role,M.text),id:`h-${Math.random().toString(36).slice(2,8)}`}));b.length&&a(b)}).catch(()=>{}),()=>{v=!0}},[u]);let K=v=>a(f=>{let b=[...f],M={...b[b.length-1]};return b[b.length-1]=v(M),b});async function x(v){let f=String(v??r).trim();if(!f||i)return;let b=e?.get();if(!b){c("\u5148\u767B\u5F55\u793E\u533A\uFF0C\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u8BF4\u8BDD");return}c(""),l(!0),s(""),g("");let M=new AbortController;q.current=M,a(G=>[...G,Re("user",f),Re("assistant","")]);try{await Ro({token:b,message:f,signal:M.signal,onEvent:G=>{e?.get()===b&&(G.type==="session"?g(G.sessionId):G.type==="question"?(H({callId:G.callId,questions:G.questions,sessionId:G.sessionId}),P({})):G.type==="text"?K(me=>({...me,text:me.text?`${me.text}
${G.text}`:G.text})):G.type==="tool"?K(me=>({...me,tools:G.phase==="call"?[...me.tools,G.name]:me.tools})):G.type==="error"&&c(G.error||"\u5BF9\u8BDD\u5931\u8D25"))}})}catch(G){G.name!=="AbortError"&&e?.get()===b&&c(G.message),/登录|401/.test(G.message)&&e?.get()===b&&(e?.set(null),p(null))}finally{q.current===M&&(q.current=null),l(!1),k(!1),H(null)}}async function W(){if(!(!$||T)){U(!0),c("");try{let v=await fetch("/community/ai/answer",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e?.get(),sessionId:$.sessionId,callId:$.callId,answers:$.questions.map(b=>({id:b.id,selected:I[b.id]?.selected||[],...I[b.id]?.custom?.trim()?{custom:I[b.id].custom.trim()}:{}}))})}),f=await v.json();if(!v.ok)throw new Error(f.error||"\u56DE\u7B54\u5931\u8D25");H(null)}catch(v){c(v.message)}finally{U(!1)}}}async function w(){if(!(!m||y)){k(!0);try{let v=await fetch("/community/ai/stop",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e?.get(),sessionId:m})}),f=await v.json();if(!v.ok)throw new Error(f.error||"\u505C\u6B62\u5931\u8D25");q.current?.abort()}catch(v){c(v.message)}finally{k(!1)}}}return B.default.createElement("div",{className:"acv-drawer",role:"dialog","aria-label":"DSH \u5BF9\u8BDD"},B.default.createElement("div",{className:"acv-drawer-head"},B.default.createElement("span",{className:"acv-dsh",style:{padding:"6px 14px"}},B.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),B.default.createElement("span",{style:{fontWeight:700}},"\u793E\u533A\u52A9\u624B"),B.default.createElement("span",{style:{flex:1}}),B.default.createElement("button",{type:"button",className:"acv-back",onClick:t,"aria-label":"\u5173\u95ED"},"\u2715")),B.default.createElement("div",{className:"acv-drawer-body",ref:A},o.map(v=>B.default.createElement("div",{key:v.id,className:`acv-chat ${v.role==="user"?"is-user":"is-agent"}`},v.tools?.length>0&&B.default.createElement("div",{className:"acv-chat-tools"},v.tools.map((f,b)=>B.default.createElement("span",{key:`${f}-${b}`,className:"acv-chip"},"\u8C03\u7528 ",f))),v.text&&(v.role==="assistant"?B.default.createElement("div",{className:"acv-chat-text acv-chat-text--md"},B.default.createElement(Je,{text:v.text})):B.default.createElement("div",{className:"acv-chat-text"},v.text)),!v.text&&v.role==="assistant"&&i&&B.default.createElement("div",{className:"acv-chat-typing"},"\u2026"))),$&&B.default.createElement("div",{className:"acv-question-card",role:"group","aria-label":"DSH \u63D0\u95EE"},$.questions.map(v=>B.default.createElement("div",{key:v.id,className:"acv-question-item"},B.default.createElement("strong",null,v.header||"\u9700\u8981\u4F60\u7684\u9009\u62E9"),B.default.createElement("p",null,v.question),v.options?.map(f=>{let b=I[v.id]?.selected||[];return B.default.createElement("button",{key:f.label,type:"button",className:`acv-question-option${b.includes(f.label)?" is-selected":""}`,"aria-pressed":b.includes(f.label),onClick:()=>P(M=>{let G=M[v.id]||{selected:[],custom:""},me=v.multiSelect?b.includes(f.label)?b.filter(ke=>ke!==f.label):[...b,f.label]:[f.label];return{...M,[v.id]:{...G,selected:me}}})},f.label,f.description&&B.default.createElement("small",null,f.description))}),B.default.createElement("input",{className:"acv-question-custom",value:I[v.id]?.custom||"",placeholder:"\u5176\u4ED6\u56DE\u7B54\uFF08\u53EF\u9009\uFF09","aria-label":`${v.question}\u7684\u81EA\u5B9A\u4E49\u56DE\u7B54`,onChange:f=>P(b=>({...b,[v.id]:{selected:b[v.id]?.selected||[],custom:f.target.value}}))}))),B.default.createElement("button",{type:"button",className:"acv-btn brand",disabled:T,onClick:W},T?"\u63D0\u4EA4\u4E2D\u2026":"\u63D0\u4EA4\u56DE\u7B54"),B.default.createElement("span",{className:"acv-field-hint"},"\u4E0D\u9009\u4EFB\u4F55\u9009\u9879\u5373\u8DF3\u8FC7\uFF0C\u4E0D\u4EE3\u8868\u540C\u610F\u3002")),d&&B.default.createElement("div",{className:"acv-error"},d),!u&&B.default.createElement("div",{className:"acv-notice",style:{marginTop:12}},"\u8FD8\u6CA1\u767B\u5F55\u793E\u533A\uFF0C\u767B\u5F55\u4E4B\u540E\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002",B.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>{n?.(),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55"))),B.default.createElement("div",{className:"acv-drawer-foot"},B.default.createElement("div",{className:"acv-input-brand"},B.default.createElement(_e,{size:24})),B.default.createElement("div",{className:"acv-chat-composer"},B.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:r,placeholder:i?"\u6B63\u5728\u56DE\u590D\u2026":"\u548C DSH \u804A\u804A\u793E\u533A\uFF0C\u6216\u8BA9\u5B83\u53D1\u4E00\u6761\u5E16",onChange:v=>s(v.target.value)}),B.default.createElement("button",{type:"button",className:`acv-chat-send${i?" is-stop":""}`,onClick:i?w:()=>x(),disabled:i?!m||y:!r.trim(),"aria-label":i?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001",title:i?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001"},i?B.default.createElement("span",{className:"acv-chat-stop-icon"}):B.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},B.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})))),B.default.createElement("div",{className:"acv-chat-hint"},"Enter \u6362\u884C \xB7 \u70B9\u51FB\u6309\u94AE\u53D1\u9001")))}var Ra="achoverse-community",_t="achoverse.community.token",eo="https://community.achoverse.com",en=["slots"];function to(){if(typeof document>"u")return;let e=document.querySelector("style[data-acv-community]");e||(e=document.createElement("style"),e.setAttribute("data-acv-community","styles"),document.head.appendChild(e)),e.textContent!==ht&&(e.textContent=ht)}function tn({size:e=22,active:t=!1}){return ue.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},ue.default.createElement("circle",{cx:12,cy:8.5,r:3.4,stroke:"currentColor",strokeWidth:t?2:1.7}),ue.default.createElement("path",{d:"M4.6 19.4c.8-3.9 3.8-6.1 7.4-6.1s6.6 2.2 7.4 6.1",stroke:"currentColor",strokeWidth:t?2:1.7,strokeLinecap:"round"}))}function an(){return{get(){try{return window.localStorage.getItem(_t)}catch{return null}},set(e){try{e?window.localStorage.setItem(_t,e):window.localStorage.removeItem(_t),window.dispatchEvent(new Event("achoverse:token-changed"))}catch{}}}}function on(){let[e,t]=ue.default.useState(null),[n,o]=ue.default.useState(!1),a=ue.default.useMemo(()=>an(),[]);return ue.default.useEffect(()=>{let r=()=>{let s=a.get();fetch("/community/ai/token",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:s})}).catch(()=>{})};return r(),window.addEventListener("achoverse:token-changed",r),window.addEventListener("storage",r),()=>{window.removeEventListener("achoverse:token-changed",r),window.removeEventListener("storage",r)}},[a]),ue.default.useEffect(()=>{to();let r=!1;return fetch("/community/config",{cache:"no-store"}).then(s=>s.ok?s.json():Promise.reject(new Error(String(s.status)))).then(s=>{r||t(s?.baseUrl||eo)}).catch(()=>{r||t(eo)}),()=>{r=!0}},[]),e?ue.default.createElement(ue.default.Fragment,null,ue.default.createElement(Ja,{mode:"plugin",base:e,tokenStore:a,onDsh:()=>o(!0)}),n?ue.default.createElement(Qa,{tokenStore:a,onClose:()=>o(!1)}):null):ue.default.createElement("div",{className:"acv-root acv-root--panel"},ue.default.createElement("div",{className:"acv-frame"},ue.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u8FDE\u63A5\u793E\u533A\u2026")))}function nn(e){to(),e.slots.inject("main",()=>e.slots.register({name:"main",key:Ra},on)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Ra,order:30,label:()=>"Achoverse\u793E\u533A"},tn))}
return module.exports}})
