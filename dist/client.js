window.__ModuleLoader__.load({id:"dsh-achoverse-community",factory:(require)=>{const module={exports:{}};const exports=module.exports;
var qt=Object.create;var Ze=Object.defineProperty;var Yt=Object.getOwnPropertyDescriptor;var Kt=Object.getOwnPropertyNames;var Wt=Object.getPrototypeOf,Vt=Object.prototype.hasOwnProperty;var ke=(e,a,t)=>()=>{if(t)throw t[0];try{return e&&(a=e(e=0)),a}catch(n){throw t=[n],n}};var Aa=(e,a)=>()=>{try{return a||e((a={exports:{}}).exports,a),a.exports}catch(t){throw a=0,t}},La=(e,a)=>{for(var t in a)Ze(e,t,{get:a[t],enumerable:!0})},$a=(e,a,t,n)=>{if(a&&typeof a=="object"||typeof a=="function")for(let s of Kt(a))!Vt.call(e,s)&&s!==t&&Ze(e,s,{get:()=>a[s],enumerable:!(n=Yt(a,s))||n.enumerable});return e};var Z=(e,a,t)=>(t=e!=null?qt(Wt(e)):{},$a(a||!e||!e.__esModule?Ze(t,"default",{value:e,enumerable:!0}):t,e)),Gt=e=>$a(Ze({},"__esModule",{value:!0}),e);var Ua=Aa(de=>{"use strict";var Qt=require("react");function _a(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)a+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ne(){}var me={d:{f:Ne,r:function(){throw Error(_a(522))},D:Ne,C:Ne,L:Ne,m:Ne,X:Ne,S:Ne,M:Ne},p:0,findDOMNode:null},Rt=Symbol.for("react.portal"),en=Symbol.for("react.recoverable"),Ma=Symbol.for("react.optimistic_key");function an(e,a,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rt,key:n==null?null:n===Ma?Ma:""+n,children:e,containerInfo:a,implementation:t}}var Ue=Qt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Je(e,a){if(e==="font")return"";if(typeof a=="string")return a==="use-credentials"?a:""}de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me;de.browser=function(e){return{$$typeof:en,_reason:e}};de.createPortal=function(e,a){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)throw Error(_a(299));return an(e,a,null,t)};de.flushSync=function(e){var a=Ue.T,t=me.p;try{if(Ue.T=null,me.p=2,e)return e()}finally{Ue.T=a,me.p=t,me.d.f()}};de.preconnect=function(e,a){typeof e=="string"&&(a?(a=a.crossOrigin,a=typeof a=="string"?a==="use-credentials"?a:"":void 0):a=null,me.d.C(e,a))};de.prefetchDNS=function(e){typeof e=="string"&&me.d.D(e)};de.preinit=function(e,a){if(typeof e=="string"&&a&&typeof a.as=="string"){var t=a.as,n=Je(t,a.crossOrigin),s=typeof a.integrity=="string"?a.integrity:void 0,o=typeof a.fetchPriority=="string"?a.fetchPriority:void 0;t==="style"?me.d.S(e,typeof a.precedence=="string"?a.precedence:void 0,{crossOrigin:n,integrity:s,fetchPriority:o}):t==="script"&&me.d.X(e,{crossOrigin:n,integrity:s,fetchPriority:o,nonce:typeof a.nonce=="string"?a.nonce:void 0})}};de.preinitModule=function(e,a){if(typeof e=="string")if(typeof a=="object"&&a!==null){if(a.as==null||a.as==="script"){var t=Je(a.as,a.crossOrigin);me.d.M(e,{crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0})}}else a==null&&me.d.M(e)};de.preload=function(e,a){if(typeof e=="string"&&typeof a=="object"&&a!==null&&typeof a.as=="string"){var t=a.as,n=Je(t,a.crossOrigin);me.d.L(e,t,{crossOrigin:n,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,type:typeof a.type=="string"?a.type:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0,referrerPolicy:typeof a.referrerPolicy=="string"?a.referrerPolicy:void 0,imageSrcSet:typeof a.imageSrcSet=="string"?a.imageSrcSet:void 0,imageSizes:typeof a.imageSizes=="string"?a.imageSizes:void 0,media:typeof a.media=="string"?a.media:void 0})}};de.preloadModule=function(e,a){if(typeof e=="string")if(a){var t=Je(a.as,a.crossOrigin);me.d.m(e,{as:typeof a.as=="string"&&a.as!=="script"?a.as:void 0,crossOrigin:t,integrity:typeof a.integrity=="string"?a.integrity:void 0,nonce:typeof a.nonce=="string"?a.nonce:void 0,fetchPriority:typeof a.fetchPriority=="string"?a.fetchPriority:void 0})}else me.d.m(e)};de.requestFormReset=function(e){me.d.r(e)};de.unstable_batchedUpdates=function(e,a){return e(a)};de.useFormState=function(e,a,t){return Ue.H.useFormState(e,a,t)};de.useFormStatus=function(){return Ue.H.useHostTransitionStatus()};de.version="19.3.1"});var ua=Aa((Kn,Ba)=>{"use strict";function Fa(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Fa)}catch(e){console.error(e)}}Fa(),Ba.exports=Ua()});var Qe,ma=ke(()=>{Qe="data:image/webp;base64,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"});function Se(e){let a=String(e||""),t=[],n=0;for(let s of a.matchAll(/:acv-(dolphin-[1-4]-\d{2}):/g)){let o=ln.get(s[1]);o&&(s.index>n&&t.push(a.slice(n,s.index)),t.push(o),n=s.index+s[0].length)}return n<a.length&&t.push(a.slice(n)),t}function Wa(e,a=1/0){return Se(e).map(t=>typeof t=="string"?t:`[${t.label}]`).join("").slice(0,a)}var Le,ln,Fe=ke(()=>{Le=[{id:"dolphin-1-01",label:"\u5F00\u5FC3\u6325\u624B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-01.png"},{id:"dolphin-1-02",label:"\u6015\u51B7",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_56.png"},{id:"dolphin-1-03",label:"\u5BB3\u7F9E\u6342\u5634",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-03.png"},{id:"dolphin-1-04",label:"\u7591\u60D1",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_13.png"},{id:"dolphin-1-05",label:"\u62B1\u6795\u7761\u89C9",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-05.png"},{id:"dolphin-1-06",label:"\u751F\u6C14",category:"\u8868\u60C5\u5FC3\u60C5",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_40_52.png"},{id:"dolphin-1-07",label:"\u63A2\u9669",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_48.png"},{id:"dolphin-1-08",label:"\u753B\u753B",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-1-08.png"},{id:"dolphin-1-09",label:"\u8BFB\u4E66\u5B66\u4E60",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-1-09.png"},{id:"dolphin-1-10",label:"\u6E38\u6CF3",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-1-10.png"},{id:"dolphin-1-11",label:"\u5403\u51B0\u6DC7\u6DCB",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-1-11.png"},{id:"dolphin-1-12",label:"\u60CA\u8BB6",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-1-12.png"},{id:"dolphin-2-01",label:"\u533B\u751F",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-01.png"},{id:"dolphin-2-02",label:"\u53A8\u5E08",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-02.png"},{id:"dolphin-2-03",label:"\u5F39\u5409\u4ED6",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-03.png"},{id:"dolphin-2-04",label:"\u4FA6\u63A2",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_44.png"},{id:"dolphin-2-05",label:"\u6444\u5F71",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-05.png"},{id:"dolphin-2-06",label:"\u8DD1\u6B65",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_40.png"},{id:"dolphin-2-07",label:"\u6C34\u624B",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_36.png"},{id:"dolphin-2-08",label:"\u9B54\u672F\u5E08",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-08.png"},{id:"dolphin-2-09",label:"\u56ED\u827A",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-09.png"},{id:"dolphin-2-10",label:"\u6253\u6E38\u620F",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_27.png"},{id:"dolphin-2-11",label:"\u505A\u5B9E\u9A8C",category:"\u804C\u4E1A\u7231\u597D",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_31.png"},{id:"dolphin-2-12",label:"\u4E0A\u73ED",category:"\u804C\u4E1A\u7231\u597D",source:"dolphin-2-12.png"},{id:"dolphin-3-01",label:"\u5F00\u5FC3\u8DF3\u8DC3",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-01.png"},{id:"dolphin-3-02",label:"\u5BB3\u7F9E",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-02.png"},{id:"dolphin-3-03",label:"\u601D\u8003",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-03.png"},{id:"dolphin-3-04",label:"\u53D1\u706B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-04.png"},{id:"dolphin-3-05",label:"\u56F0\u4E86",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-05.png"},{id:"dolphin-3-06",label:"\u5927\u54ED",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-06.png"},{id:"dolphin-3-07",label:"\u56FD\u738B",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-07.png"},{id:"dolphin-3-08",label:"\u5FC3\u52A8",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-08.png"},{id:"dolphin-3-09",label:"\u5413\u5230\u4E86",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-09.png"},{id:"dolphin-3-10",label:"\u90C1\u95F7",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-10.png"},{id:"dolphin-3-11",label:"\u8BA4\u771F\u89C2\u5BDF",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-11.png"},{id:"dolphin-3-12",label:"\u8138\u7EA2",category:"\u8868\u60C5\u5FC3\u60C5",source:"dolphin-3-12.png"},{id:"dolphin-4-01",label:"\u5EA6\u5047",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-01.png"},{id:"dolphin-4-02",label:"\u51B2\u6D6A",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-02.png"},{id:"dolphin-4-03",label:"\u9732\u8425",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-03.png"},{id:"dolphin-4-04",label:"\u6C99\u53D1\u9605\u8BFB",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-04.png"},{id:"dolphin-4-05",label:"\u559D\u5496\u5561",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-05.png"},{id:"dolphin-4-06",label:"\u5F92\u6B65",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-06.png"},{id:"dolphin-4-07",label:"\u770B\u5730\u56FE",category:"\u751F\u6D3B\u51FA\u6E38",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_23.png"},{id:"dolphin-4-08",label:"\u8D2D\u7269",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-08.png"},{id:"dolphin-4-09",label:"\u5403\u7206\u7C73\u82B1",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-09.png"},{id:"dolphin-4-10",label:"\u81EA\u62CD",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-10.png"},{id:"dolphin-4-11",label:"\u51AC\u65E5\u4FDD\u6696",category:"\u751F\u6D3B\u51FA\u6E38",source:"ChatGPT \u56FE\u50CF 2026\u5E7411\u67089\u65E5 13_41_19.png"},{id:"dolphin-4-12",label:"\u665A\u5B89",category:"\u751F\u6D3B\u51FA\u6E38",source:"dolphin-4-12.png"}].map(e=>({...e,path:`/emoji/v1/${e.id}.webp`,token:`:acv-${e.id}:`})),ln=new Map(Le.map(e=>[e.id,e]))});function ha(e,a){let t=He.find(n=>n.id===a)?.pointCount||0;return e.points.slice(0,t).map((n,s)=>({text:n,number:s+1})).filter(n=>n.text.trim())}function cn(e=""){return Wa(String(e)).replace(/```[^]*?```|~~~[^]*?~~~/g,"").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]+)\]\([^)]*\)/g,"$1").replace(/<[^>]*>/g,"").replace(/^\s{0,3}(?:#{1,6}\s+|>\s*|[-*+]\s+|\d+[.)]\s+)/gm,"").replace(/[*_`~]/g,"").replace(/\r/g,"").replace(/[ \t]+/g," ").trim()}function je(e,a){return Array.from(e).slice(0,a).join("")}function et(e,a){let n=cn(e.body).split(/\n+|(?<=[。！？!?])\s*/u).map(o=>o.trim()).filter(Boolean),s=new Date(e.createdAt);return{title:je(e.title||"\u793E\u533A\u5E16\u5B50",80),summary:je(n[0]||"",180),points:n.slice(1,4).map(o=>je(o,120)),category:je(e.spaceTitle||"\u793E\u533A\u5206\u4EAB",24),author:e.author?.displayName||e.author?.handle||"\u793E\u533A\u6210\u5458",avatar:je(e.author?.avatarText||e.author?.displayName||"A",1),date:Number.isNaN(s.getTime())?"":new Intl.DateTimeFormat("zh-CN",{timeZone:"Asia/Shanghai",year:"numeric",month:"2-digit",day:"2-digit"}).format(s).replaceAll("/","."),source:a}}var He,ba=ke(()=>{Fe();He=[{id:"quote",name:"\u84DD\u7D2B\u89C2\u70B9",color:"#6960ff",pointCount:0},{id:"cover",name:"\u7C89\u6A59\u5C01\u9762",color:"#f53fa6",pointCount:1},{id:"list",name:"\u6A59\u9EC4\u6E05\u5355",color:"#ff962d",pointCount:3},{id:"editorial",name:"\u84DD\u7D2B\u6742\u5FD7",color:"#6748ff",pointCount:1},{id:"cards",name:"\u6A59\u9EC4\u7EB8\u5361",color:"#ff8c34",pointCount:2},{id:"sidebar",name:"\u7C89\u6A59\u4FA7\u680F",color:"#f53fa6",pointCount:1}]});function dn(e){if(!e.naturalWidth||typeof document>"u")return{x:0,y:0};if(xa.has(e))return xa.get(e);let a=document.createElement("canvas");a.width=e.naturalWidth,a.height=e.naturalHeight;let t=a.getContext("2d");t.drawImage(e,0,0);let n=t.getImageData(0,0,a.width,a.height).data,s=a.width,o=-1,i=a.height,r=-1;for(let m=0;m<a.height;m++)for(let c=0;c<a.width;c++)n[(m*a.width+c)*4+3]<16||(s=Math.min(s,c),o=Math.max(o,c),i=Math.min(i,m),r=Math.max(r,m));let l=o<0?{x:0,y:0}:{x:(a.width/2-(s+o+1)/2)*70/a.width,y:(a.height/2-(i+r+1)/2)*70/a.height};return xa.set(e,l),l}function ne(e,a,t,n,s,o,i){e.beginPath(),e.roundRect(a,t,n,s,o),e.fillStyle=i,e.fill()}function Oe(e,a,t,n,s,o,i){let r=e.createLinearGradient(a,t,a+n,t+s);return r.addColorStop(0,o),r.addColorStop(1,i),r}function Te(e,a,t,n,s){e.beginPath(),e.arc(a,t,n,0,Math.PI*2),e.fillStyle=s,e.fill()}function aa(e,a,t,n,s="#e4e4ec"){e.beginPath(),e.moveTo(a,t),e.lineTo(n,t),e.strokeStyle=s,e.lineWidth=1.5,e.stroke()}function ya(e,a,t){let n=typeof Intl.Segmenter=="function"?new Intl.Segmenter("zh",{granularity:"grapheme"}):null;return String(a).split(`
`).flatMap(s=>{let o=n?Array.from(n.segment(s),c=>c.segment):Array.from(s),i=[];for(let c of o)/^[a-zA-Z0-9]$/.test(c)&&/^[a-zA-Z0-9]+$/.test(i.at(-1)||"")?i[i.length-1]+=c:i.push(c);let r=[],l="",m=i.flatMap(c=>e.measureText(c).width>t?Array.from(c):[c]);for(let c of m)l&&e.measureText(l+c).width>t&&(r.push(l),l=""),l+=c;return r.push(l),r})}function he(e,a,t,n,s,o,i,{weight:r=400,color:l=at,min:m=i,leading:c=1.35}={}){let p;do{if(e.font=`${r} ${i}px ${qe}`,p=ya(e,a,s),p.length*i*c<=o||i<=m)break;i-=2}while(!0);let u=Math.max(1,Math.floor(o/(i*c))),d=p.length>u||p.some(h=>e.measureText(h).width>s);if(p=p.slice(0,u),d){let h=p.at(-1)||"";for(;h&&e.measureText(h+"\u2026").width>s;)h=Array.from(h).slice(0,-1).join("");p[p.length-1]=h+"\u2026"}return e.fillStyle=l,e.textBaseline="top",p.forEach((h,b)=>e.fillText(h,t,n+b*i*c)),d}function ze(e,a,t=80,n=66,s=42){let o=dn(a);e.drawImage(a,t+o.x,n+o.y,70,70),Ie(e,"Achoverse \u793E\u533A",t+85,n,700,70,s,{weight:700,align:"left"})}function Ie(e,a,t,n,s,o,i,{weight:r=400,color:l=at,align:m="center"}={}){e.save(),e.font=`${r} ${i}px ${qe}`,e.textBaseline="alphabetic",e.textAlign="left";let c=e.measureText(a);for(;(c.width>s||c.actualBoundingBoxAscent+c.actualBoundingBoxDescent>o)&&i>12;)i-=2,e.font=`${r} ${i}px ${qe}`,c=e.measureText(a);if(c.width>s){for(;a&&e.measureText(a+"\u2026").width>s;)a=Array.from(a).slice(0,-1).join("");a+="\u2026",c=e.measureText(a)}let p=c.actualBoundingBoxLeft??0,u=c.actualBoundingBoxRight??c.width,d=c.actualBoundingBoxAscent??i*.8,h=c.actualBoundingBoxDescent??i*.2,b=m==="left"?t+p:t+s/2+(p-u)/2,S=n+o/2+(d-h)/2;e.fillStyle=l,e.fillText(a,b,S),e.restore()}function Pe(e,a,t=65,n=1250,s=950,o="#f9d7e8"){if(aa(e,t,n,t+s),Te(e,t+43,n+80,43,o),Ie(e,a.avatar,t,n+37,86,86,38,{weight:500}),s<800){he(e,a.author,t+120,n+40,s-120,50,29,{weight:600}),he(e,`${a.date} \xB7 ${a.source}`,t+120,n+90,s-120,40,20,{color:xe,min:16});return}he(e,a.author,t+120,n+44,s*.49,50,29,{weight:600}),he(e,a.date,t+120,n+89,300,40,25,{color:xe}),he(e,a.source,t+s*.6,n+51,s*.4,80,23,{color:xe,min:18})}function wa(e,a,t=1190){a.forEach((n,s)=>{e.beginPath(),e.ellipse(855+s*60,t+s*14,65,42,0,Math.PI*1.1,Math.PI*1.9),e.strokeStyle=n,e.lineWidth=1.1,e.stroke()})}var qe,at,xe,xa,ka=ke(()=>{qe="AcvPoster",at="#16161d",xe="#8a8a99",xa=new WeakMap});function Ea(e,a,t,n,s,o=!1){if(e.save(),e.beginPath(),e.roundRect(a,t,n,s,32),e.clip(),ne(e,a,t,n,s,32,Oe(e,a,t,n,s,o?"#ff852e":"#f52ba4",o?"#ffd744":"#ff7a50")),o){e.translate(a+n*.8,t+s*.4),e.rotate(-.55);let i=n*(n<400?.75:.36),r=Math.min(120,s*.28);ne(e,-i*.6,-r*.6,i,r,r/2,"#ffffff35"),ne(e,-i*.8,r*.4,i,r,r/2,"#ffffff35")}else Te(e,a+n*.86,t+s*.12,s*.52,"#fff0f52b"),Te(e,a+n*.66,t+s*1.08,s*.58,"#fff0f52b"),Te(e,a+n*1.1,t+s*.9,s*.5,"#fff0f525");e.restore()}function Na(e,a,t,n=1){e.save(),e.translate(a,t),e.scale(n,n),e.rotate(-.32),ne(e,0,0,270,270,38,Oe(e,0,0,270,270,"#b0a3ff77","#64edfa77")),ne(e,-60,110,205,205,32,Oe(e,0,0,205,205,"#bca7ff77","#54e5ff77")),e.restore()}function nt(e,a,t,n,s){if(!a.trim())return;e.font="600 32px AcvPoster";let o=Math.min(500,e.measureText(a).width+64);ne(e,t,n,o,66,33,"#ffffff"),Ie(e,a,t+24,n,o-48,66,32,{weight:600,color:s})}function ot(e){let a=e.indexOf(`
`)>=0?e.indexOf(`
`):e.search(/[。！？!?]/u);return a>=0?[e.slice(0,a),e.slice(a+1).trim()]:[e,""]}function pn(e,a,t,n){ne(e,24,30,1032,1380,42,"#fff"),e.save(),e.beginPath(),e.roundRect(24,30,1032,1380,42),e.clip(),Na(e,835,0,1.05),Na(e,805,885,1.03),e.restore(),ze(e,t),a.category.trim()&&(ne(e,80,210,265,68,34,"#e3d5ff"),Ie(e,a.category,100,210,225,68,32,{color:"#6932da",weight:600})),he(e,"\u201C",10,320,200,155,180,{weight:900,color:"#b68afa",leading:1}),n(a.title,80,480,950,300,104,{weight:900,min:56,leading:1.32}),n(a.summary,82,810,650,230,51,{color:xe,min:30}),Pe(e,a,64,1250,950,"#e1d9ff")}function un(e,a,t,n){ze(e,t,55,30,40),ne(e,20,105,1040,1305,52,"#fff"),Ea(e,45,134,990,648),nt(e,a.category,110,245,"#f53fa6"),n(a.title,108,365,860,310,99,{weight:700,color:"#fff",min:58}),n(a.summary,77,850,925,120,63,{weight:700,min:38}),n(a.points[0]||"",78,1e3,920,100,36,{color:xe,min:28}),wa(e,["#f894c1","#f9ae99"]),Pe(e,a)}function mn(e,a,t,n){ne(e,30,28,1020,1385,42,"#fff"),ze(e,t,80,65),Ea(e,30,142,1020,405,!0),nt(e,a.category,80,200,"#bf4e13"),n(a.title,80,305,905,206,78,{weight:900,min:46}),n(a.summary,80,575,925,118,34,{color:xe,min:26});let s=ha(a,"list"),o=s.length===1?300:s.length===2?210:140;s.forEach(({text:i,number:r},l)=>{let m=720+l*(o+20);ne(e,74,m,932,o,30,"#f2f2f6"),Te(e,158,m+o/2,42,"#ff8d25"),Ie(e,`0${r}`,116,m+o/2-42,84,84,40,{weight:700,color:"#fff"}),e.beginPath(),e.moveTo(240,m+40),e.lineTo(240,m+o-40),e.strokeStyle="#c8c8d3",e.lineWidth=2,e.stroke();let[c,p]=ot(i);n(c,280,m+20,675,p?o*.43:o-40,39,{weight:700,min:25}),p&&n(p,280,m+o*.55,675,o*.4,34,{color:xe,min:25})}),wa(e,["#f3cf84","#ffb878"],1232),Pe(e,a,72,1280,936,"#ffe1ce")}function vn(e,a,t,n){ze(e,t,50,28),ne(e,30,118,1020,1295,38,"#fff"),he(e,"COMMUNITY NOTES",84,190,620,50,30,{color:"#73737c",weight:500}),Na(e,790,160,.25),n(a.category,800,188,200,50,28,{weight:600,min:18}),aa(e,84,260,995,"#a877ff"),ne(e,84,350,78,78,0,Oe(e,84,350,78,78,"#a865ff","#69adff"));let s=120,o;do{if(e.font=`900 ${s}px AcvPoster`,o=ya(e,a.title,770),o.length*s*1.35<=480||s<=58)break;s-=2}while(!0);n(a.title,190,330,770,480,s,{weight:900}),o[1]&&n(o[1],190,330+s*1.35,770,s*1.35,s,{weight:900,color:"#5136ee"}),n(a.summary,102,855,875,170,42,{color:"#777780",min:30}),a.points[0]&&(ne(e,107,1050,5,145,0,"#dfd1ff"),n(a.points[0],148,1050,820,150,40,{min:28})),Pe(e,a,84,1265,910,"#e2dbff")}function fn(e,a,t,n){ne(e,30,34,1020,1377,40,"#fff"),ze(e,t,80,80,40),n(a.category,80,180,600,60,31,{color:"#777780",min:22}),Ea(e,739,196,270,270,!0),n(a.title,79,260,640,230,70,{weight:900,min:44}),n(a.summary,80,510,925,115,34,{color:xe,min:26});let s=ha(a,"cards");s.forEach(({text:o,number:i},r)=>{let l=76+r*36,m=655+r*275,c=s.length===1?470:250;e.save(),e.shadowColor="#17172614",e.shadowBlur=20,e.shadowOffsetY=10,ne(e,l,m,900-r*12,c,30,"#f5f3f3"),e.restore(),he(e,`0${i}`,l+50,m+20,120,65,42,{weight:700,color:"#ff8b29"});let[p,u]=ot(o);n(p,l+50,m+85,790,u?65:c-105,43,{weight:700,min:28}),u&&n(u,l+50,m+155,790,c-170,33,{color:"#777780",min:25})}),Pe(e,a,76,1270,930,"#ffe0d6")}function gn(e,a,t,n){ne(e,42,47,996,1346,42,"#fff"),e.save(),e.beginPath(),e.roundRect(42,47,996,1346,42),e.clip(),ne(e,42,47,134,1346,0,Oe(e,42,47,134,1346,"#f52da7","#ff7d43")),Te(e,-85,660,263,"#ffffff20"),e.restore(),ze(e,t,236,112,40),n(a.category,237,255,735,70,36,{color:"#777780",min:22}),n(a.title,236,355,730,415,106,{weight:900,min:58}),n(a.summary,240,820,720,180,43,{color:"#777780",min:28}),aa(e,240,1030,320,"#777780"),n(a.points[0]||"",240,1080,710,130,36,{min:26}),Pe(e,a,238,1250,725)}function st(e,a,t,n){if(!tt[a])throw new Error("\u8BF7\u9009\u62E9\u6709\u6548\u7684\u6D77\u62A5\u6837\u5F0F");e.fillStyle="#ededf2",e.fillRect(0,0,1080,1440);let s=!1,o=(...i)=>{let r=he(e,...i);return s||=r,r};return tt[a](e,t,n,o),{clipped:s}}var tt,rt=ke(()=>{ka();ba();tt={quote:pn,cover:un,list:mn,editorial:vn,cards:fn,sidebar:gn}});async function Ta(e){let a=e.assetUrl("/fonts/noto-sans-sc-v1.woff2");if(!ta.has(a)){let n=new FontFace(qe,`url(${JSON.stringify(a)})`,{weight:"100 900"}).load().then(s=>(document.fonts.add(s),s)).catch(s=>{throw ta.delete(a),s});ta.set(a,n)}na||(na=new Promise((n,s)=>{let o=new Image;o.onload=()=>n(o),o.onerror=()=>{na=null,s(new Error("\u54C1\u724C\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5"))},o.src=Qe}));let[,t]=await Promise.all([ta.get(a),na]);return t}async function za(e,a,t){let n=await Ta(e),s=document.createElement("canvas");s.width=1080,s.height=1440;let o=s.getContext("2d");if(!o)throw new Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u56FE\u7247\u751F\u6210\uFF0C\u8BF7\u6362\u7528\u6D4F\u89C8\u5668\u6253\u5F00");let i=st(o,a,t,n),r=await new Promise(l=>s.toBlob(l,"image/png"));if(!r)throw new Error("\u56FE\u7247\u751F\u6210\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5");return{blob:r,clipped:i.clipped}}function Pa(e,a){return`${Array.from(e).slice(0,35).join("").replace(/[<>:"/\\|?*\u0000-\u001f]/g,"_")||"\u793E\u533A\u5E16\u5B50"}-${a}.png`}function it(e,a){let t=document.createElement("a");t.href=e,t.download=a,document.body.append(t),t.click(),t.remove()}function lt(e){return!!navigator.canShare?.({files:[new File([e],"poster.png",{type:"image/png"})]})}async function ct(e,a){await navigator.share({files:[new File([e],a,{type:"image/png"})]})}var ta,na,dt=ke(()=>{ma();ka();rt();ta=new Map});function pt({render:e,onStart:a,onResult:t,onError:n,delay:s=160}){let o=0,i,r=!1;return{update(l,m){if(r)return;let c=++o;clearTimeout(i),a(),i=setTimeout(async()=>{try{let p=await e(l,m);!r&&c===o&&t(p,l,m)}catch(p){!r&&c===o&&n(p)}},s)},dispose(){r=!0,o++,clearTimeout(i)}}}var ut=ke(()=>{});var mt={};La(mt,{PosterDialog:()=>hn});function hn({api:e,postId:a,me:t,onLogin:n,onClose:s}){let o=L.default.useRef(null),i=L.default.useRef(0),[r,l]=L.default.useState(null),[m,c]=L.default.useState("quote"),[p,u]=L.default.useState(""),[d,h]=L.default.useState(!1),[b,S]=L.default.useState(null),[O,z]=L.default.useState({}),[A,P]=L.default.useState(0),[T,H]=L.default.useState(!1);L.default.useEffect(()=>{let w=o.current,y=document.activeElement;w.showModal();let v=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{i.current++,w.close(),document.body.style.overflow=v,y?.isConnected&&y.focus()}},[]),L.default.useEffect(()=>{if(!t)return;let w=!0,y=[];u("");async function v(){try{let{account:x}=await e.me();if(!w)return;if(!x){H(!0);return}let{post:Y}=await e.post(a),G=new URL(e.assetUrl("/")||"/",window.location.href).host,ue=et(Y,G);if(!w)return;l(ue),await Ta(e);for(let I of He){if(!w)return;let{blob:Q}=await za(e,I.id,ue);if(!w)return;let ge=URL.createObjectURL(Q);y.push(ge),z(De=>({...De,[I.id]:ge}))}}catch(x){w&&u(`\u65E0\u6CD5\u51C6\u5907\u6D77\u62A5\uFF1A${x.message}`)}}return v(),()=>{w=!1,y.forEach(x=>URL.revokeObjectURL(x))}},[e,a,A,t]),L.default.useEffect(()=>()=>{b&&URL.revokeObjectURL(b.url)},[b]),L.default.useEffect(()=>{if(!r||!t||T)return;let w=++i.current,y=pt({render:(v,x)=>za(e,v,x),onStart(){h(!0),u(""),S(null)},onResult(v){w===i.current&&(S({...v,url:URL.createObjectURL(v.blob)}),h(!1))},onError(v){w===i.current&&(u(`\u9884\u89C8\u66F4\u65B0\u5931\u8D25\uFF1A${v.message}`),h(!1))}});return y.update(m,r),()=>{w===i.current&&i.current++,y.dispose()}},[e,r,m,t,T]);function j(w){i.current++,h(!0),S(null),l(w),u("")}async function F(){let w=i.current;try{let{account:y}=await e.me();if(w!==i.current)return;if(!y){S(null),H(!0);return}it(b.url,Pa(r.title,m))}catch{u("\u65E0\u6CD5\u786E\u8BA4\u767B\u5F55\u72B6\u6001\uFF0C\u8BF7\u91CD\u8BD5")}}async function W(){try{await ct(b.blob,Pa(r.title,m))}catch(w){w.name!=="AbortError"&&u("\u5206\u4EAB\u672A\u5B8C\u6210\uFF0C\u53EF\u4EE5\u957F\u6309\u539F\u56FE\u6216\u4FDD\u5B58\u56FE\u7247")}}let f=b?.url,K=He.find(w=>w.id===m).pointCount;return L.default.createElement("dialog",{ref:o,className:"acv-modal acv-poster-dialog","aria-labelledby":"acv-poster-title",onCancel:w=>{w.preventDefault(),s()}},L.default.createElement("header",{className:"acv-poster-heading"},L.default.createElement("div",null,L.default.createElement("h2",{id:"acv-poster-title",className:"acv-modal-title"},"\u751F\u6210\u5E16\u5B50\u6D77\u62A5"),L.default.createElement("p",null,"\u9009\u62E9\u6837\u5F0F\uFF0C\u8C03\u6574\u6587\u5B57\uFF0C\u4FDD\u5B58\u4F60\u7684\u5206\u4EAB\u56FE\u7247\u3002")),L.default.createElement("button",{type:"button",className:"acv-btn ghost","aria-label":"\u5173\u95ED\u6D77\u62A5\u9762\u677F",onClick:s},"\xD7")),p&&L.default.createElement("div",{className:"acv-error",role:"alert"},p," ",L.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:()=>{z({}),P(w=>w+1)}},"\u91CD\u65B0\u52A0\u8F7D")),!t||T?L.default.createElement("div",{className:"acv-notice"},"\u767B\u5F55\u540E\u5373\u53EF\u9009\u62E9\u516D\u79CD\u6837\u5F0F\uFF0C\u751F\u6210\u5E76\u4FDD\u5B58\u5E16\u5B50\u6D77\u62A5\u3002",L.default.createElement("button",{className:"acv-btn brand",type:"button",onClick:n},"\u767B\u5F55\u540E\u751F\u6210\u6D77\u62A5")):r?L.default.createElement("div",{className:"acv-poster-layout"},L.default.createElement("section",{className:"acv-poster-controls","aria-label":"\u6D77\u62A5\u8BBE\u7F6E"},L.default.createElement("fieldset",{className:"acv-poster-choices"},L.default.createElement("legend",null,"\u9009\u62E9\u6837\u5F0F"),He.map(w=>L.default.createElement("label",{key:w.id,className:m===w.id?"is-active":""},L.default.createElement("input",{type:"radio",name:"poster-style",value:w.id,checked:m===w.id,onChange:()=>{j(r),c(w.id)}}),O[w.id]?L.default.createElement("img",{src:O[w.id],alt:""}):L.default.createElement("span",{className:"acv-poster-thumb-loading",style:{background:w.color}}),L.default.createElement("span",null,w.name)))),L.default.createElement("label",{className:"acv-poster-field"},"\u6D77\u62A5\u6807\u9898 ",L.default.createElement("small",null,"\u6700\u591A 80 \u5B57"),L.default.createElement("textarea",{className:"acv-input",maxLength:80,rows:2,value:r.title,onChange:w=>j({...r,title:w.target.value})})),L.default.createElement("label",{className:"acv-poster-field"},"\u6D77\u62A5\u6807\u7B7E ",L.default.createElement("small",null,"\u9ED8\u8BA4\u53D6\u81EA\u5E16\u5B50\u6240\u5C5E\u677F\u5757\uFF0C\u53EF\u4FEE\u6539\u6216\u6E05\u7A7A"),L.default.createElement("input",{className:"acv-input",maxLength:24,value:r.category,onChange:w=>j({...r,category:w.target.value})})),L.default.createElement("label",{className:"acv-poster-field"},"\u6B63\u6587\u6458\u8981 ",L.default.createElement("small",null,"\u6700\u591A 180 \u5B57"),L.default.createElement("textarea",{className:"acv-input",maxLength:180,rows:3,value:r.summary,onChange:w=>j({...r,summary:w.target.value})})),Array.from({length:K},(w,y)=>L.default.createElement("label",{className:"acv-poster-field",key:y},"\u8981\u70B9 ",y+1," ",L.default.createElement("small",null,"\u53EF\u7559\u7A7A\uFF0C\u6700\u591A 120 \u5B57"),L.default.createElement("textarea",{className:"acv-input",rows:2,maxLength:120,value:r.points[y]||"",onChange:v=>{let x=[...r.points];x[y]=v.target.value,j({...r,points:x})}}))),L.default.createElement("p",{className:"acv-poster-hint"},"\u4EC5\u8C03\u6574\u672C\u6B21\u6D77\u62A5\uFF0C\u4E0D\u4F1A\u4FEE\u6539\u539F\u5E16\u3002\u5F53\u524D\u6837\u5F0F\u5C55\u793A ",K," \u6761\u8981\u70B9\uFF1B\u5207\u6362\u6837\u5F0F\u4FDD\u7559\u5DF2\u586B\u5185\u5BB9\u3002\u6587\u5B57\u4FEE\u6539\u540E\u81EA\u52A8\u66F4\u65B0\u53F3\u4FA7\u56FE\u7247\u3002")),L.default.createElement("section",{className:"acv-poster-preview","aria-label":"\u6D77\u62A5\u9884\u89C8"},L.default.createElement("div",{className:"acv-poster-canvas","aria-busy":d},f?L.default.createElement("img",{src:f,alt:"\u5F53\u524D\u6587\u5B57\u751F\u6210\u7684\u5E16\u5B50\u6D77\u62A5\uFF0C\u53EF\u957F\u6309\u4FDD\u5B58"}):L.default.createElement("p",{role:"status"},d?"\u6B63\u5728\u66F4\u65B0\u6D77\u62A5\u9884\u89C8\u2026":"\u6B63\u5728\u51C6\u5907\u5B57\u4F53\u4E0E\u6837\u5F0F\u9884\u89C8\u2026")),b?.clipped&&L.default.createElement("p",{role:"status"},"\u90E8\u5206\u6587\u5B57\u8F83\u957F\uFF0C\u5DF2\u7701\u7565\u663E\u793A\uFF1B\u53EF\u7F29\u77ED\u6587\u6848\u540E\u91CD\u65B0\u751F\u6210\u3002"),L.default.createElement("div",{className:"acv-poster-actions"},L.default.createElement("button",{className:"acv-btn primary",type:"button",disabled:d||!b||!r.title.trim(),onClick:F},"\u4FDD\u5B58\u56FE\u7247"),b&&L.default.createElement(L.default.Fragment,null,lt(b.blob)&&L.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:W},"\u5206\u4EAB\u56FE\u7247"))),b&&L.default.createElement("p",{className:"acv-poster-hint"},"1080 \xD7 1440 PNG \xB7 \u624B\u673A\u53EF\u957F\u6309\u4E0A\u65B9\u539F\u56FE\u4FDD\u5B58\uFF1B\u90E8\u5206\u5E94\u7528\u9700\u8981\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\u3002"))):L.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u5E16\u5B50\u2026"))}var L,vt=ke(()=>{L=Z(require("react"),1);ba();dt();ut()});var Fn={};La(Fn,{apply:()=>Un,inject:()=>On});module.exports=Gt(Fn);var pe=Z(require("react"),1);var pa=`/* Achoverse \u793E\u533A\uFF1A\u6D45\u7070\u753B\u5E03 + \u767D\u8272\u5927\u5706\u89D2\u5361\u7247 + \u7C89\u7D2B\u6E10\u53D8\u4E3B\u89C6\u89C9\u3002 */

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
`;var C=Z(require("react"),1);function Oa({base:e="",token:a=null,credentials:t="same-origin",onToken:n}={}){let s=a;function o(r){s=r||null,n?.(s)}async function i(r,{method:l="GET",body:m,signal:c}={}){let p={};m!==void 0&&(p["content-type"]="application/json"),s&&(p.authorization=`Bearer ${s}`);let u=await fetch(e+r,{method:l,headers:p,body:m===void 0?void 0:JSON.stringify(m),credentials:s?"omit":t,cache:"no-store",signal:c}),d=await u.text(),h={};try{h=d?JSON.parse(d):{}}catch{h={error:d.slice(0,200)}}if(!u.ok){let b=new Error(h?.error||`HTTP ${u.status}`);throw b.code=h?.code,b.status=u.status,b}return h}return{assetUrl:r=>e.replace(/\/$/,"")+r,raw:i,setToken:o,getToken:()=>s,me:()=>i("/api/auth/me"),home:()=>i("/api/home"),bootstrap:()=>i("/api/bootstrap"),spaces:()=>i("/api/spaces"),zoneSpaces:r=>i(`/api/zones/${encodeURIComponent(r)}`),space:r=>i(`/api/spaces/${encodeURIComponent(r)}`),post:r=>i(`/api/posts/${encodeURIComponent(r)}`),captcha:()=>i("/api/captcha"),register:r=>i("/api/auth/register",{method:"POST",body:r}),login:r=>i("/api/auth/login",{method:"POST",body:r}),logout:()=>i("/api/auth/logout",{method:"POST",body:{}}),resend:()=>i("/api/auth/resend",{method:"POST",body:{}}),verify:r=>i("/api/auth/verify",{method:"POST",body:{token:r}}),createPost:r=>i("/api/posts",{method:"POST",body:r}),createComment:(r,l)=>i(`/api/posts/${encodeURIComponent(r)}/comments`,{method:"POST",body:l}),updateProfile:r=>i("/api/account/profile",{method:"POST",body:r}),requestEmailChange:r=>i("/api/account/email",{method:"POST",body:{email:r}}),confirmEmailChange:r=>i("/api/account/email/confirm",{method:"POST",body:{token:r}}),changePassword:r=>i("/api/account/password",{method:"POST",body:r}),forgotPassword:r=>i("/api/account/password/forgot",{method:"POST",body:{email:r}}),resetPassword:r=>i("/api/account/password/reset",{method:"POST",body:r}),dmThreads:()=>i("/api/dm/threads"),dmUnread:()=>i("/api/dm/unread"),dmThread:(r,l)=>i(`/api/dm/thread/${encodeURIComponent(r)}${l?`?before=${encodeURIComponent(l)}`:""}`),dmOpenWith:r=>i("/api/dm/thread",{method:"POST",body:r}),dmSend:(r,l)=>i(`/api/dm/thread/${encodeURIComponent(r)}`,{method:"POST",body:{body:l}}),user:r=>i(`/api/users/${encodeURIComponent(r)}`),submitFeedback:r=>i("/api/feedback",{method:"POST",body:r}),adminFeedback:(r=0)=>i(`/api/admin/feedback?offset=${encodeURIComponent(r)}`),worldMessages:(r,l)=>i(`/api/worlds/${encodeURIComponent(r)}/messages`,{signal:l}),worldMessageHistory:(r,l="",m)=>i(`/api/worlds/${encodeURIComponent(r)}/messages/history?cursor=${encodeURIComponent(l)}`,{signal:m}),myWorldMessage:(r,l)=>i(`/api/worlds/${encodeURIComponent(r)}/messages/mine`,{signal:l}),createWorldMessage:(r,l)=>i(`/api/worlds/${encodeURIComponent(r)}/messages`,{method:"POST",body:l}),editWorldMessage:(r,l,m)=>i(`/api/worlds/${encodeURIComponent(r)}/messages/${encodeURIComponent(l)}`,{method:"PATCH",body:m}),deleteWorldMessage:(r,l)=>i(`/api/worlds/${encodeURIComponent(r)}/messages/${encodeURIComponent(l)}`,{method:"DELETE"}),adminUsers:r=>i(`/api/admin/users${r?`?q=${encodeURIComponent(r)}`:""}`),pendingAccounts:()=>i("/api/admin/pending"),adminSpaces:()=>i("/api/admin/spaces"),createSpace:r=>i("/api/admin/spaces",{method:"POST",body:r}),updateSpace:(r,l)=>i(`/api/admin/spaces/${encodeURIComponent(r)}/update`,{method:"POST",body:l}),archiveSpace:(r,l=!0)=>i(`/api/admin/spaces/${encodeURIComponent(r)}/archive`,{method:"POST",body:{archived:l}}),verifyAccount:r=>i("/api/admin/verify",{method:"POST",body:{accountId:r}}),setPostStatus:(r,l)=>i(`/api/posts/${encodeURIComponent(r)}/status`,{method:"POST",body:{status:l}}),notifications:()=>i("/api/notifications"),markRead:r=>i("/api/notifications/read",{method:"POST",body:{ids:r}}),search:r=>i(`/api/search?q=${encodeURIComponent(r)}`)}}function ce(e){let a=Number(e)||0;if(!a)return"";let t=Date.now()-a;if(t<6e4)return"\u521A\u521A";if(t<36e5)return`${Math.floor(t/6e4)} \u5206\u949F\u524D`;if(t<864e5)return`${Math.floor(t/36e5)} \u5C0F\u65F6\u524D`;if(t<7*864e5)return`${Math.floor(t/864e5)} \u5929\u524D`;let n=new Date(a);return`${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function re(e){let a=e?.avatarColor;if(a)return{background:`linear-gradient(135deg, ${a}, ${e?.avatarColorTo||a})`}}function se(e){return(typeof e?.avatarText=="string"?e.avatarText.trim():"")||Xt(e?.displayName||e?.handle)}function Xt(e){let a=String(e||"?").trim();if(!a)return"?";let t=[...a];return t.length>1&&/[\u4e00-\u9fa5]/.test(t[0])?t.slice(-2).join(""):t[0].toUpperCase()}var D=Z(require("react"),1);var ie=Z(require("react"),1),Ia=[{key:"diffusion",label:"\u6269\u6563",edition:"DIFFUSION"},{key:"connection",label:"\u8FDE\u63A5",edition:"CONNECTION"},{key:"resonance",label:"\u5171\u632F",edition:"RESONANCE"}];function Jt({motif:e}){return e==="connection"?ie.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},ie.default.createElement("rect",{x:"652",y:"-130",width:"390",height:"390",rx:"58",transform:"rotate(-24 847 65)",fill:"#E2F5FF",fillOpacity:".16"}),ie.default.createElement("rect",{x:"790",y:"120",width:"326",height:"326",rx:"52",transform:"rotate(19 953 283)",fill:"#E2F5FF",fillOpacity:".13"}),ie.default.createElement("rect",{x:"570",y:"170",width:"230",height:"230",rx:"38",transform:"rotate(19 685 285)",fill:"#34298A",fillOpacity:".08"})):e==="resonance"?ie.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},ie.default.createElement("rect",{x:"500",y:"-40",width:"720",height:"230",rx:"115",transform:"rotate(-28 860 75)",fill:"#FFF4D9",fillOpacity:".16"}),ie.default.createElement("rect",{x:"650",y:"165",width:"690",height:"190",rx:"95",transform:"rotate(-28 995 260)",fill:"#FFF4D9",fillOpacity:".14"}),ie.default.createElement("circle",{cx:"1130",cy:"105",r:"220",fill:"#AC5B25",fillOpacity:".06"})):e==="diffusion"?ie.default.createElement("svg",{className:"acv-cover-art",viewBox:"0 0 1200 320",preserveAspectRatio:"xMidYMid slice",fill:"none","aria-hidden":"true",focusable:"false"},ie.default.createElement("circle",{cx:"948",cy:"85",r:"270",fill:"#FFF0F5",fillOpacity:".14"}),ie.default.createElement("circle",{cx:"732",cy:"244",r:"190",fill:"#FFF0F5",fillOpacity:".12"}),ie.default.createElement("circle",{cx:"1060",cy:"320",r:"240",fill:"#9E2367",fillOpacity:".08"})):null}function Xe({space:e,showBadge:a=!0,className:t=""}){return ie.default.createElement("span",{className:`acv-space-cover ${t}`.trim(),style:{"--accent":e.accent,"--accent-to":e.accentTo}},ie.default.createElement(Jt,{motif:e.motif}),a&&ie.default.createElement("span",{className:"acv-space-badge"},`${e.postCount??0} \u4E2A\u5E16\u5B50`),ie.default.createElement("span",{className:"acv-space-enter"},"\u8FDB\u5165\u8BA8\u8BBA \u2192"))}var X=Z(require("react"),1),Ha=Z(ua(),1);var tn=236,ja=190;function nn(e){let a=(window.innerWidth||1024)-tn-10;return Math.max(10,Math.min(e,a))}function ee({api:e,me:a,handle:t,children:n,onDm:s,disabled:o=!1,className:i=""}){let[r,l]=X.default.useState(!1),[m,c]=X.default.useState(null),[p,u]=X.default.useState(null),[d,h]=X.default.useState(!1),b=X.default.useRef(null),S=X.default.useRef(null),O=X.default.useRef(null),z=X.default.useRef(0),A=X.default.useCallback(()=>{t&&(h(!1),e.user(t).then(f=>{u(f.user),z.current=Date.now()}).catch(()=>{u(null),h(!0)}))},[e,t]),P=()=>{let f=b.current?.getBoundingClientRect();if(!f)return;let K=f.bottom+8+ja>(window.innerHeight||768)?Math.max(10,f.top-8-ja):f.bottom+8;c({left:nn(f.left),top:K})},T=()=>{o||(clearTimeout(S.current),O.current=setTimeout(()=>{P(),l(!0),(!p||Date.now()-z.current>3e4)&&A()},140))},H=()=>{clearTimeout(O.current),S.current=setTimeout(()=>l(!1),160)};X.default.useEffect(()=>{if(!r)return;let f=()=>l(!1);return window.addEventListener("scroll",f,!0),window.addEventListener("resize",f),()=>{window.removeEventListener("scroll",f,!0),window.removeEventListener("resize",f)}},[r]),X.default.useEffect(()=>{o&&l(!1)},[o]),X.default.useEffect(()=>()=>{clearTimeout(S.current),clearTimeout(O.current)},[]);let j=!!(a&&t&&a.handle?.toLowerCase()===String(t).toLowerCase()),F=!!p?.allowDm&&!j,W=r&&m&&typeof document<"u"?(0,Ha.createPortal)(X.default.createElement("span",{className:"acv-usercard acv-usercard--fixed",style:{left:m.left,top:m.top},role:"dialog","aria-label":`${p?.displayName||t} \u7684\u8D44\u6599\u5361`,onClick:f=>f.stopPropagation(),onMouseEnter:()=>clearTimeout(S.current),onMouseLeave:H},X.default.createElement("span",{className:"acv-usercard-head"},X.default.createElement("span",{className:"acv-avatar",style:re(p)},se(p||{handle:t})),X.default.createElement("span",{className:"acv-usercard-id"},X.default.createElement("span",{className:"acv-usercard-name"},p?.displayName||t),X.default.createElement("span",{className:"acv-usercard-handle"},"@",p?.handle||t)),p?.role==="admin"&&X.default.createElement("span",{className:"acv-chip"},"\u7BA1\u7406\u5458")),p?.bio&&X.default.createElement("span",{className:"acv-usercard-bio"},p.bio),X.default.createElement("span",{className:"acv-usercard-foot"},!p&&!d&&X.default.createElement("span",{className:"acv-usercard-bio"},"\u52A0\u8F7D\u4E2D\u2026"),!p&&d&&X.default.createElement("span",{className:"acv-usercard-bio"},"\u8D44\u6599\u52A0\u8F7D\u5931\u8D25"),p&&F&&!a&&X.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:f=>{f.stopPropagation(),l(!1),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55\u540E\u53D1\u79C1\u4FE1"),p&&F&&a&&X.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},onClick:f=>{f.stopPropagation(),l(!1),s?.(p)}},"\u53D1\u79C1\u4FE1"),p&&!F&&!j&&X.default.createElement("span",{className:"acv-usercard-bio"},"\u5BF9\u65B9\u672A\u5F00\u653E\u79C1\u4FE1"),j&&X.default.createElement("span",{className:"acv-usercard-bio"},"\u8FD9\u662F\u4F60\u81EA\u5DF1"))),document.body):null;return X.default.createElement("span",{ref:b,className:`acv-userchip ${i}`.trim(),onMouseEnter:T,onMouseLeave:H},n,W)}var va=Z(require("react"),1);var qa="data:image/webp;base64,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";ma();function Ya({size:e=48}){return va.default.createElement("img",{className:"acv-home-mascot",src:qa,alt:"","aria-hidden":"true",decoding:"async",draggable:"false",width:e,height:e,style:{width:e,height:e}})}function Ae({size:e=20,className:a=""}){return va.default.createElement("img",{className:`acv-brand-mark ${a}`.trim(),src:Qe,alt:"","aria-hidden":"true",decoding:"async",draggable:"false",width:e,height:e,style:{width:e,height:e}})}function fa({space:e,onOpen:a,updateOnCover:t=!1}){return D.default.createElement("button",{type:"button",className:"acv-space-card",onClick:()=>a(e.slug),style:{"--accent":e.accent,"--accent-to":e.accentTo}},D.default.createElement(Xe,{space:e}),D.default.createElement("span",{className:"acv-space-body"},D.default.createElement("span",{className:"acv-space-title"},e.title),D.default.createElement("span",{className:"acv-space-sub"},e.subtitle),D.default.createElement("span",{className:"acv-space-meta"},D.default.createElement("span",{className:t?"acv-space-updated--cover":void 0},e.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${ce(e.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u5E16"),!t&&D.default.createElement("span",{className:"acv-dot"}),D.default.createElement("span",{className:"acv-space-desc"},e.description||""))))}var rn=[{key:"recent",label:"\u6700\u8FD1\u66F4\u65B0"},{key:"members",label:"\u6D3B\u8DC3\u6210\u5458"}];function Ka({api:e,me:a,initialData:t=null,onOpenSpace:n,onOpenPost:s,onDm:o}){let[i,r]=D.default.useState(t),[l,m]=D.default.useState(""),[c,p]=D.default.useState("recent"),u=D.default.useCallback(()=>{e.home().then(r).catch(d=>m(d.message))},[e]);return D.default.useEffect(()=>{t||u()},[u,a]),l?D.default.createElement("div",{className:"acv-loading"},l):i?D.default.createElement("div",{className:"acv-main"},D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-section-head acv-section-head--brand"},D.default.createElement(Ya,{size:64}),D.default.createElement("h2",{className:"acv-section-title"},"\u793E\u533A\u677F\u5757"),D.default.createElement("span",{className:"acv-section-note"},"\u70B9\u5F00\u4E00\u4E2A\u677F\u5757\u8FDB\u5165\u8BA8\u8BBA\u533A")),i.spaces.map(d=>D.default.createElement(fa,{key:d.id,space:d,onOpen:n,updateOnCover:!0}))),D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-panel acv-feed"},D.default.createElement("div",{className:"acv-feed-head"},D.default.createElement("div",{className:"acv-feed-tabs",role:"tablist","aria-label":"\u793E\u533A\u52A8\u6001"},rn.map(d=>D.default.createElement("button",{key:d.key,type:"button",role:"tab",id:`acv-feed-tab-${d.key}`,"aria-selected":c===d.key,"aria-controls":`acv-feed-panel-${d.key}`,className:c===d.key?"acv-feed-tab is-active":"acv-feed-tab",onClick:()=>p(d.key)},d.label))),D.default.createElement("button",{type:"button",className:"acv-link acv-feed-refresh",onClick:u,"aria-label":"\u5237\u65B0",title:"\u5237\u65B0"},D.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",focusable:"false"},D.default.createElement("path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8m0-5v5h-5"}),D.default.createElement("path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16m5 0H3v5"})))),D.default.createElement("div",{className:"acv-feed-body",role:"tabpanel",id:`acv-feed-panel-${c}`,"aria-labelledby":`acv-feed-tab-${c}`},c==="recent"?i.recent.length===0?D.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u5E16\u5B50"):i.recent.map(d=>D.default.createElement("div",{key:d.id,className:"acv-recent-item"},D.default.createElement(ee,{api:e,me:a,handle:d.author.handle,onDm:o},D.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:re(d.author)},se(d.author))),D.default.createElement("span",{className:"acv-recent-main"},D.default.createElement("a",{className:"acv-recent-link",href:`/post/${encodeURIComponent(d.id)}`,onClick:h=>{h.button!==0||h.metaKey||h.ctrlKey||h.shiftKey||h.altKey||(h.preventDefault(),s(d.id))}},D.default.createElement("span",{className:"acv-recent-title"},d.title),D.default.createElement("span",{className:"acv-recent-excerpt"},d.excerpt)),D.default.createElement("span",{className:"acv-recent-meta"},d.spaceTitle," \xB7"," ",D.default.createElement(ee,{api:e,me:a,handle:d.author.handle,onDm:o},D.default.createElement("span",null,d.author.displayName))," ","\xB7 ",ce(d.lastActivityAt)," \xB7 ",d.commentCount," \u6761\u8BC4\u8BBA")))):(i.members||[]).length===0?D.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u4EBA\u53D1\u8FC7\u5E16"):(i.members||[]).map(d=>D.default.createElement("div",{key:d.id,className:"acv-member"},D.default.createElement(ee,{api:e,me:a,handle:d.handle,onDm:o},D.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:re(d)},se(d))),D.default.createElement("span",{className:"acv-member-main"},D.default.createElement(ee,{api:e,me:a,handle:d.handle,onDm:o},D.default.createElement("span",{className:"acv-member-name"},d.displayName)),D.default.createElement(ee,{api:e,me:a,handle:d.handle,onDm:o},D.default.createElement("span",{className:"acv-member-meta"},"@",d.handle))),D.default.createElement("span",{className:"acv-chip"},d.postCount," \u5E16"))))))):D.default.createElement("div",{className:"acv-main"},D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-skeleton"}),D.default.createElement("div",{className:"acv-skeleton"}),D.default.createElement("div",{className:"acv-skeleton"})),D.default.createElement("div",{className:"acv-col"},D.default.createElement("div",{className:"acv-skeleton",style:{height:820}})))}var U=Z(require("react"),1);var ae=Z(require("react"),1);var R=Z(require("react"),1);var fe=Z(require("react"),1);Fe();var Ce=Z(require("react"),1);Fe();var Re=Ce.default.createContext(null);function ga({emoji:e,api:a}){let t=Ce.default.useContext(Re),[n,s]=Ce.default.useState(!1);return n?Ce.default.createElement("span",{title:e.label},"[",e.label,"]"):Ce.default.createElement("img",{className:"acv-emoji",src:(a||t)?.assetUrl(e.path)||e.path,alt:`[${e.label}]`,title:e.label,width:"64",height:"64",loading:"lazy",decoding:"async",onError:()=>s(!0)})}function Ee({text:e,api:a}){let t=Ce.default.useContext(Re);return!a&&!t?e:Se(e).map((n,s)=>typeof n=="string"?n:Ce.default.createElement(ga,{key:s,emoji:n,api:a}))}function Va({api:e,onSelect:a,onClose:t,disabled:n,id:s}){let[o,i]=fe.default.useState("");return fe.default.createElement("div",{className:"acv-emoji-picker",id:s,role:"dialog","aria-label":"\u6D77\u8C5A\u8868\u60C5"},fe.default.createElement("div",{className:"acv-emoji-picker-head"},fe.default.createElement("input",{className:"acv-input",autoFocus:!0,value:o,placeholder:"\u641C\u7D22\u8868\u60C5\u540D\u79F0","aria-label":"\u641C\u7D22\u8868\u60C5\u540D\u79F0",onChange:r=>i(r.target.value)}),fe.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t,"aria-label":"\u5173\u95ED\u8868\u60C5\u9762\u677F"},"\xD7")),fe.default.createElement("div",{className:"acv-emoji-picker-body"},["\u8868\u60C5\u5FC3\u60C5","\u804C\u4E1A\u7231\u597D","\u751F\u6D3B\u51FA\u6E38"].map(r=>{let l=Le.filter(m=>m.category===r&&m.label.includes(o.trim()));return l.length>0&&fe.default.createElement("section",{key:r,"aria-label":r},fe.default.createElement("h4",null,r),fe.default.createElement("div",{className:"acv-emoji-grid"},l.map(m=>fe.default.createElement("button",{key:m.id,type:"button",className:"acv-emoji-choice",disabled:n,title:m.label,"aria-label":m.label,onClick:()=>a(m)},fe.default.createElement(ga,{emoji:m,api:e})))))}),!Le.some(r=>r.label.includes(o.trim()))&&fe.default.createElement("p",null,"\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u8868\u60C5")))}Fe();var Ga=new Map(Le.map(e=>[e.id,e]));function Za(e,a=!1){if(!a)return Se(e);let t=[],n=0;for(let s of e.matchAll(/```[\s\S]*?(?:```|$)|`[^`\n]+`|\[[^\]\n]+\]\([^)\s]+\)/g))t.push(...Se(e.slice(n,s.index)),s[0]),n=s.index+s[0].length;return[...t,...Se(e.slice(n))]}function Xa(e,a,t,n=!1){let s=e.ownerDocument,o=s.createDocumentFragment();for(let i of Za(a,n))if(typeof i=="string")i.split(`
`).forEach((r,l)=>{l&&o.append(s.createElement("br")),r&&o.append(s.createTextNode(r))});else{let r=s.createElement("span"),l=s.createElement("img");r.dataset.emoji=i.id,r.contentEditable="false",r.className="acv-editor-emoji",r.setAttribute("aria-label",i.label),l.src=t(i.path),l.alt=`[${i.label}]`,l.title=i.label,l.draggable=!1,l.onerror=()=>{r.replaceChildren(s.createTextNode(`[${i.label}]`))},r.append(l),o.append(r)}if(a.endsWith(`
`)){let i=s.createElement("br");i.dataset.editorEnd="",o.append(i)}e.replaceChildren(o)}function Be(e){function a(t){if(t.nodeType===3)return t.nodeValue;if(t.nodeType!==1&&t.nodeType!==11||t.dataset?.editorEnd!==void 0)return"";let n=Ga.get(t.dataset?.emoji);return n?n.token:t.nodeName==="BR"?`
`:Array.from(t.childNodes).map((s,o)=>(o>0&&/^(DIV|P)$/.test(s.nodeName)?`
`:"")+a(s)).join("")}return a(e)}function $e(e){if(!e)return null;let a=e.ownerDocument.getSelection();if(!a?.rangeCount)return null;let t=a.getRangeAt(0);if(!e.contains(t.startContainer)||!e.contains(t.endContainer))return null;function n(s,o){let i=e.ownerDocument.createRange();return i.selectNodeContents(e),i.setEnd(s,o),Be(i.cloneContents()).length}return[n(t.startContainer,t.startOffset),n(t.endContainer,t.endOffset)]}function Ja(e,a,t=a){let n=e.ownerDocument,s=n.createRange();function o(r){let l=0;for(let m of e.childNodes){let c=m.nodeType===3?m.nodeValue.length:m.dataset?.editorEnd!==void 0?0:Ga.get(m.dataset?.emoji)?.token.length??(m.nodeName==="BR"?1:Be(m).length);if(r<=l+c){if(m.nodeType===3)return[m,Math.max(0,r-l)];let p=Array.prototype.indexOf.call(e.childNodes,m);return[e,p+(r>l?1:0)]}l+=c}return[e,e.childNodes.length]}s.setStart(...o(a)),s.setEnd(...o(t));let i=n.getSelection();i.removeAllRanges(),i.addRange(s)}function Qa(e,a,t,n,s,o=!1,i=null){let r=0,l=Za(e,o).map(c=>{let p=typeof c=="string"?c.length:c.token.length,u={start:r,end:r+p,atomic:typeof c!="string"};return r+=p,u});for(let c of l.filter(p=>p.atomic))a>c.start&&a<c.end&&(a=c.start),t>c.start&&t<c.end&&(t=c.end);if(i&&a===t){let c=l.find(p=>p.atomic&&(i==="backward"?p.end===a:p.start===t));if(c)a=c.start,t=c.end;else{let p=[...new Intl.Segmenter(void 0,{granularity:"grapheme"}).segment(e)].map(u=>u.index);i==="backward"?a=p.filter(u=>u<a).at(-1)??0:t=p.find(u=>u>t)??e.length}}let m=e.slice(0,a)+n+e.slice(t);return m.length<=s?{value:m,start:a+n.length,end:a+n.length}:null}function ea({api:e,value:a,onChange:t,maxLength:n,disabled:s=!1,placeholder:o,tall:i=!1,markdown:r=!1}){let l=R.default.useRef(null),m=R.default.useRef(null),c=R.default.useRef(null),p=R.default.useRef(a),u=R.default.useRef([a.length,a.length]),d=R.default.useRef(!1),h=R.default.useRef([{value:a,start:a.length,end:a.length}]),b=R.default.useRef(0),[S,O]=R.default.useState(!1),[z,A]=R.default.useState(""),P=R.default.useId(),T=R.default.useCallback(()=>{O(!1),c.current?.focus()},[]);function H(v,x=!0){p.current=v.value,u.current=[v.start,v.end],Xa(l.current,v.value,e.assetUrl,r),x&&(l.current.focus(),Ja(l.current,v.start,v.end))}R.default.useLayoutEffect(()=>{d.current||(Be(l.current)!==a&&H({value:a,start:a.length,end:a.length},!1),(p.current!==a||h.current[b.current].value!==a)&&(p.current=a,h.current=[{value:a,start:a.length,end:a.length}],b.current=0))},[a,e,r]),R.default.useEffect(()=>{let v=()=>{let x=$e(l.current);x&&(u.current=x)};return document.addEventListener("selectionchange",v),()=>document.removeEventListener("selectionchange",v)},[]),R.default.useEffect(()=>{if(!S)return;let v=Y=>{m.current?.contains(Y.target)||O(!1)},x=Y=>{Y.key==="Escape"&&(Y.preventDefault(),Y.stopImmediatePropagation(),T())};return document.addEventListener("pointerdown",v),window.addEventListener("keydown",x,!0),()=>{document.removeEventListener("pointerdown",v),window.removeEventListener("keydown",x,!0)}},[S,T]),R.default.useEffect(()=>{s&&O(!1)},[s]);function j(v){if(!v){A(`\u6700\u591A ${n} \u4E2A\u5B57\u7B26`),H(h.current[b.current]);return}let x=h.current[b.current];x.start=u.current[0],x.end=u.current[1],v.value!==x.value&&(h.current=[...h.current.slice(0,b.current+1),v].slice(-200),b.current=h.current.length-1),H(v),t(v.value),A("")}function F(v,x=null){if(s||d.current)return;let Y=$e(l.current)||u.current;u.current=Y,j(Qa(p.current,...Y,v,n,r,x))}function W(v=!1){if(s||d.current)return;let x=b.current+(v?1:-1);if(x<0||x>=h.current.length)return;b.current=x;let Y=h.current[x];H(Y),t(Y.value),A("")}function f(){if(s||d.current)return;let v=Be(l.current),x=$e(l.current)||[v.length,v.length];j(v.length<=n?{value:v,start:x[0],end:x[1]}:null)}function K(v){if(s){v.preventDefault();return}if(d.current||v.isComposing)return;let x=v.inputType;x==="historyUndo"||x==="historyRedo"?(v.preventDefault(),W(x==="historyRedo")):x==="insertParagraph"||x==="insertLineBreak"?(v.preventDefault(),F(`
`)):(x==="deleteContentBackward"||x==="deleteContentForward")&&(v.preventDefault(),F("",x.endsWith("Backward")?"backward":"forward"))}R.default.useEffect(()=>{let v=l.current;return v.addEventListener("beforeinput",K),()=>v.removeEventListener("beforeinput",K)});function w(v){v.isComposing||v.nativeEvent.isComposing||d.current||((v.ctrlKey||v.metaKey)&&["z","y"].includes(v.key.toLowerCase())?(v.preventDefault(),W(v.shiftKey||v.key.toLowerCase()==="y")):v.key==="Enter"?(v.preventDefault(),F(`
`)):["Backspace","Delete"].includes(v.key)&&!v.ctrlKey&&!v.metaKey&&!v.altKey&&(v.preventDefault(),F("",v.key==="Backspace"?"backward":"forward")))}function y(v,x=!1){let Y=$e(l.current);!Y||Y[0]===Y[1]||(v.preventDefault(),v.clipboardData.setData("text/plain",p.current.slice(...Y)),x&&F(""))}return R.default.createElement("div",{className:"acv-emoji-editor",ref:m},R.default.createElement("div",{ref:l,role:"textbox","aria-multiline":"true","aria-label":o,"aria-disabled":s,"data-placeholder":o,contentEditable:!s,suppressContentEditableWarning:!0,spellCheck:!0,className:`acv-textarea acv-visual-editor${i?" acv-textarea--tall":""}`,onInput:f,onKeyDown:w,onCompositionStart:()=>{d.current=!0},onCompositionEnd:()=>{d.current=!1,f()},onPaste:v=>{v.preventDefault(),F(v.clipboardData.getData("text/plain").replace(/\r\n?/g,`
`))},onCopy:v=>y(v),onCut:v=>y(v,!0),onDrop:v=>v.preventDefault()}),R.default.createElement("div",{className:"acv-emoji-toolbar"},R.default.createElement("button",{ref:c,type:"button",className:"acv-btn ghost","aria-expanded":S,"aria-controls":P,disabled:s,onMouseDown:()=>{let v=$e(l.current);v&&(u.current=v)},onClick:()=>{d.current||O(!S)}},"\u263A \u8868\u60C5"),R.default.createElement("span",null,a.length," / ",n)),S&&R.default.createElement(Va,{id:P,api:e,onSelect:v=>F(v.token),onClose:T,disabled:s}),z&&R.default.createElement("p",{className:"acv-error",role:"alert"},z))}function Ra({space:e,api:a,onClose:t,onCreated:n,notify:s}){let[o,i]=ae.default.useState(""),[r,l]=ae.default.useState(""),[m,c]=ae.default.useState(!1),[p,u]=ae.default.useState("");ae.default.useEffect(()=>{let h=b=>{b.key==="Escape"&&t()};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[t]);async function d(){c(!0),u("");try{let h=await a.createPost({spaceId:e.id,title:o,body:r});s("\u5E16\u5B50\u53D1\u51FA\u53BB\u4E86"),n(h.post)}catch(h){u(h.message)}finally{c(!1)}}return ae.default.createElement("div",{className:"acv-overlay",onClick:t},ae.default.createElement("div",{className:"acv-modal acv-modal--wide",onClick:h=>h.stopPropagation()},ae.default.createElement("h3",{className:"acv-modal-title"},ae.default.createElement(Ae,{size:24}),ae.default.createElement("span",null,"\u5728\u300C",e.title,"\u300D\u53D1\u5E16")),ae.default.createElement("p",{className:"acv-modal-sub"},"\u6807\u9898\u4E00\u53E5\u8BDD\u8BF4\u6E05\u695A\uFF0C\u6B63\u6587\u5C55\u5F00\u8BB2\u3002\u53D1\u5B8C\u4F1A\u76F4\u63A5\u8FDB\u8BE6\u60C5\u9875\u3002"),p&&ae.default.createElement("div",{className:"acv-error"},p),ae.default.createElement("div",{className:"acv-field"},ae.default.createElement("label",null,"\u6807\u9898"),ae.default.createElement("input",{className:"acv-input",autoFocus:!0,value:o,maxLength:160,placeholder:"\u60F3\u8BA8\u8BBA\u4EC0\u4E48\uFF1F",onChange:h=>i(h.target.value)})),ae.default.createElement("div",{className:"acv-field"},ae.default.createElement("label",null,"\u6B63\u6587"),ae.default.createElement(ea,{api:a,value:r,onChange:l,maxLength:2e4,disabled:m,placeholder:"\u5C55\u5F00\u8BF4\u8BF4\uFF0C\u652F\u6301\u6362\u884C",tall:!0,markdown:!0})),ae.default.createElement("div",{className:"acv-row"},ae.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),ae.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:m||!o.trim()||!r.trim(),onClick:d},m?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u5E03"))))}var le=Z(require("react"),1);function oa({api:e,post:a,me:t,onAuth:n}){let[s,o]=le.default.useState(null),[i,r]=le.default.useState(!1),[l,m]=le.default.useState(""),[c,p]=le.default.useState(!1),u=le.default.useRef(!0),d=le.default.useRef(null);le.default.useEffect(()=>(u.current=!0,()=>{u.current=!1}),[]);async function h(){p(!0),m("");try{let b=await Promise.resolve().then(()=>(vt(),mt));u.current&&(o(()=>b.PosterDialog),r(!0))}catch{u.current&&m("\u6D77\u62A5\u9762\u677F\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5")}finally{u.current&&p(!1)}}return le.default.createElement(le.default.Fragment,null,le.default.createElement("button",{ref:d,type:"button",className:"acv-poster-icon",title:"\u751F\u6210\u6D77\u62A5","aria-label":`\u751F\u6210\u6D77\u62A5\uFF1A${a.title}`,disabled:c,onClick:b=>{b.stopPropagation(),h()}},le.default.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7","aria-hidden":"true"},le.default.createElement("rect",{x:"3",y:"3",width:"18",height:"18",rx:"4"}),le.default.createElement("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),le.default.createElement("path",{d:"m3 17 5-5 4 4 3-3 6 6"}))),l&&le.default.createElement("span",{role:"alert",className:"acv-error"},l),i&&s&&le.default.createElement(s,{api:e,postId:a.id,me:t,onLogin:()=>{r(!1),n()},onClose:()=>{r(!1),d.current?.focus()}}))}function ft({api:e,slug:a,me:t,onBack:n,onOpenPost:s,onAuth:o,onDm:i,notify:r}){let[l,m]=U.default.useState(null),[c,p]=U.default.useState(""),[u,d]=U.default.useState(!1),h=U.default.useCallback(()=>{e.space(a).then(z=>{m(z),p("")}).catch(z=>p(z.message))},[e,a]);if(U.default.useEffect(()=>{h()},[h]),c)return U.default.createElement("div",{style:{paddingTop:22}},U.default.createElement("button",{type:"button",className:"acv-back",onClick:n},"\u2190 \u8FD4\u56DE\u9996\u9875"),U.default.createElement("div",{className:"acv-loading"},c));if(!l)return U.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u677F\u5757\u2026");let{space:b,posts:S}=l,O=!!t?.emailVerified;return U.default.createElement("div",{style:{paddingTop:20,display:"flex",flexDirection:"column",gap:16}},U.default.createElement("div",null,U.default.createElement("button",{type:"button",className:"acv-back",onClick:n},"\u2190 \u8FD4\u56DE\u9996\u9875")),U.default.createElement("div",{className:"acv-board-head",style:{"--accent":b.accent,"--accent-to":b.accentTo}},U.default.createElement("h2",{className:"acv-board-title"},b.title),U.default.createElement("p",{className:"acv-board-sub"},b.description||b.subtitle),U.default.createElement("div",{className:"acv-board-actions"},U.default.createElement("button",{type:"button",className:"acv-btn",style:{background:"#fff",color:"#16161d"},onClick:()=>{if(!t)return o();if(!O)return r("\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16");d(!0)}},"\u53D1\u5E16"),U.default.createElement("span",{className:"acv-chip",style:{background:"rgba(255,255,255,.22)",color:"#fff"}},b.postCount," \u4E2A\u5E16\u5B50"))),!t&&U.default.createElement("div",{className:"acv-notice"},"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u9700\u8981\u3002",U.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:o},"\u767B\u5F55")),t&&!t.emailVerified&&U.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u8FD8\u6CA1\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u548C\u8BC4\u8BBA\u3002\u9A8C\u8BC1\u90AE\u4EF6\u5728\u6536\u4EF6\u7BB1\u91CC\uFF0C\u4E5F\u53EF\u4EE5\u5728\u53F3\u4E0A\u89D2\u5934\u50CF\u83DC\u5355\u91CC\u91CD\u53D1\u3002"),U.default.createElement("div",{className:"acv-board-grid"},U.default.createElement("div",{className:"acv-col"},U.default.createElement("div",{className:"acv-panel",style:{padding:"8px 18px"}},S.length===0&&U.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u677F\u5757\u8FD8\u6CA1\u6709\u5E16\u5B50\uFF0C\u6765\u53D1\u7B2C\u4E00\u6761\u3002"),S.map(z=>U.default.createElement("div",{key:z.id,className:"acv-post-row acv-post-row--poster"},U.default.createElement("div",{className:"acv-post-row-heading"},U.default.createElement("a",{className:"acv-post-open",href:`/post/${encodeURIComponent(z.id)}`,onClick:A=>{A.button!==0||A.metaKey||A.ctrlKey||A.shiftKey||A.altKey||(A.preventDefault(),s(z.id))}},U.default.createElement("span",{className:"acv-post-title"},z.title),U.default.createElement("span",{className:"acv-post-excerpt"},z.excerpt)),U.default.createElement(oa,{api:e,post:z,me:t,onAuth:o})),U.default.createElement("span",{className:"acv-post-meta"},U.default.createElement(ee,{api:e,me:t,handle:z.author.handle,onDm:i},U.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:re(z.author)},se(z.author)),z.author.displayName),U.default.createElement("span",{className:"acv-dot"}),ce(z.lastActivityAt),U.default.createElement("span",{className:"acv-dot"}),z.commentCount," \u6761\u8BC4\u8BBA"))))),U.default.createElement("aside",{className:"acv-col"},U.default.createElement("div",{className:"acv-panel"},U.default.createElement("div",{className:"acv-section-head"},U.default.createElement("h2",{className:"acv-section-title"},"\u677F\u5757\u8BF4\u660E")),U.default.createElement("p",{className:"acv-space-sub"},b.description||b.subtitle||"\u8FD8\u6CA1\u6709\u5199\u4ECB\u7ECD\u3002"),U.default.createElement("div",{className:"acv-stats",style:{marginTop:14}},U.default.createElement("div",{className:"acv-stat"},U.default.createElement("div",{className:"acv-stat-value"},b.postCount),U.default.createElement("div",{className:"acv-stat-label"},"\u4E2A\u5E16\u5B50")),U.default.createElement("div",{className:"acv-stat"},U.default.createElement("div",{className:"acv-stat-value"},S.length),U.default.createElement("div",{className:"acv-stat-label"},"\u6761\u5728\u672C\u9875"))),U.default.createElement("p",{className:"acv-space-sub",style:{marginTop:14}},t?.emailVerified?"\u60F3\u53D1\u5E16\u5C31\u70B9\u4E0A\u9762\u7684\u300C\u53D1\u5E16\u300D\u3002":t?"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u53D1\u5E16\u3002":"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u3001\u8BC4\u8BBA\u624D\u9700\u8981\u3002")))),u&&U.default.createElement(Ra,{api:e,space:b,notify:r,onClose:()=>d(!1),onCreated:z=>{d(!1),h(),s(z.id)}}))}var E=Z(require("react"),1);var V=Z(require("react"),1);var gt=/(`[^`\n]+`)|(\*\*[^*\n]+\*\*)|(\*[^*\n]+\*)|(~~[^~\n]+~~)|(\[[^\]\n]+\]\([^)\s]+\))|(https?:\/\/[^\s<>"'`，。！？；：、（）【】《》“”‘’]+)/gi,Ye=/^\s*([-*+]|\d+[.)])\s+/,ht=/^(#{1,6})\s+(.*)$/,bn=/^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)+\|?\s*$/;function sa(e,a){let t=[],n=/https?:\/\/[^\s<>"'`，。！？；：、（）【】《》“”‘’]+/gi,s=0;for(let o of e.matchAll(n)){let i=o[0];for(;i;){let r=i.at(-1),l={")":"(","]":"[","}":"{"}[r],m=l&&i.split(r).length>i.split(l).length;if(/[.,!?;:]/.test(r)||m)i=i.slice(0,-1);else break}try{if(!new URL(i).hostname)continue}catch{continue}o.index>s&&t.push(V.default.createElement(Ee,{key:`${a}-text-${s}`,text:e.slice(s,o.index)})),t.push(V.default.createElement("a",{key:`${a}-url-${o.index}`,href:i,target:"_blank",rel:"noreferrer noopener"},i)),s=o.index+i.length}return s<e.length&&t.push(V.default.createElement(Ee,{key:`${a}-tail-${s}`,text:e.slice(s)})),t}function Ke(e,a){let t=[],n=0,s;for(gt.lastIndex=0;(s=gt.exec(e))!==null;){s.index>n&&t.push(V.default.createElement(Ee,{key:`${a}-text-${n}`,text:e.slice(n,s.index)}));let o=s[0],i=`${a}-${s.index}`;if(o.startsWith("`"))t.push(V.default.createElement("code",{key:i,className:"acv-md-code"},o.slice(1,-1)));else if(o.startsWith("**"))t.push(V.default.createElement("strong",{key:i},sa(o.slice(2,-2),i)));else if(o.startsWith("~~"))t.push(V.default.createElement("del",{key:i},sa(o.slice(2,-2),i)));else if(o.startsWith("[")){let r=/^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(o),l=r?.[2]||"#",m=/^(https?:\/\/|mailto:|\/)/i.test(l);t.push(m?V.default.createElement("a",{key:i,href:l,target:"_blank",rel:"noreferrer noopener"},r[1]):V.default.createElement("span",{key:i},r?.[1]||o))}else/^https?:\/\//i.test(o)?t.push(...sa(o,i)):t.push(V.default.createElement("em",{key:i},sa(o.slice(1,-1),i)));n=s.index+o.length}return n<e.length&&t.push(V.default.createElement(Ee,{key:`${a}-tail`,text:e.slice(n)})),t}function bt(e){return e.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(a=>a.trim())}function We({text:e,api:a}){let n=String(e||"").replace(/\r\n?/g,`
`).split(`
`),s=[],o=0,i=0;for(;o<n.length;){let l=n[o];if(/^\s*```/.test(l)){let u=l.trim().slice(3).trim(),d=[];for(o+=1;o<n.length&&!/^\s*```/.test(n[o]);)d.push(n[o]),o+=1;o+=1,s.push(V.default.createElement("pre",{key:`b${i++}`,className:"acv-md-pre"},V.default.createElement("code",null,d.join(`
`)),u&&V.default.createElement("span",{className:"acv-md-lang"},u)));continue}if(!l.trim()){o+=1;continue}let m=ht.exec(l);if(m){let u=Math.min(m[1].length,4),d=`h${u}`;s.push(V.default.createElement(d,{key:`b${i++}`,className:`acv-md-h${u}`},Ke(m[2],`h${i}`))),o+=1;continue}if(/^\s*(-{3,}|\*{3,})\s*$/.test(l)){s.push(V.default.createElement("hr",{key:`b${i++}`,className:"acv-md-hr"})),o+=1;continue}if(l.includes("|")&&bn.test(n[o+1]||"")){let u=bt(l);o+=2;let d=[];for(;o<n.length&&n[o].includes("|")&&n[o].trim();)d.push(bt(n[o])),o+=1;s.push(V.default.createElement("div",{key:`b${i++}`,className:"acv-md-table-wrap"},V.default.createElement("table",{className:"acv-md-table"},V.default.createElement("thead",null,V.default.createElement("tr",null,u.map((h,b)=>V.default.createElement("th",{key:b},Ke(h,`th${b}`))))),V.default.createElement("tbody",null,d.map((h,b)=>V.default.createElement("tr",{key:b},u.map((S,O)=>V.default.createElement("td",{key:O},Ke(h[O]||"",`td${b}-${O}`)))))))));continue}if(/^\s*>\s?/.test(l)){let u=[];for(;o<n.length&&/^\s*>\s?/.test(n[o]);)u.push(n[o].replace(/^\s*>\s?/,"")),o+=1;s.push(V.default.createElement("blockquote",{key:`b${i++}`,className:"acv-md-quote"},V.default.createElement(We,{text:u.join(`
`)})));continue}if(Ye.test(l)){let u=/^\s*\d+[.)]\s+/.test(l),d=[];for(;o<n.length&&Ye.test(n[o]);)for(d.push(n[o].replace(Ye,"")),o+=1;o<n.length&&n[o].trim()&&/^\s{2,}/.test(n[o])&&!Ye.test(n[o]);)d[d.length-1]+=` ${n[o].trim()}`,o+=1;let h=u?"ol":"ul";s.push(V.default.createElement(h,{key:`b${i++}`,className:"acv-md-list"},d.map((b,S)=>V.default.createElement("li",{key:S},Ke(b,`li${S}`)))));continue}let c=[];for(;o<n.length&&n[o].trim()&&!ht.test(n[o])&&!Ye.test(n[o])&&!/^\s*>/.test(n[o])&&!/^\s*```/.test(n[o])&&!/^\s*(-{3,}|\*{3,})\s*$/.test(n[o]);)c.push(n[o]),o+=1;let p=[];c.forEach((u,d)=>{d>0&&p.push(V.default.createElement("br",{key:`br${d}`})),p.push(...Ke(u,`p${d}`))}),s.push(V.default.createElement("p",{key:`b${i++}`,className:"acv-md-p"},p))}let r=V.default.createElement("div",{className:"acv-md"},s);return a?V.default.createElement(Re.Provider,{value:a},r):r}function xt({api:e,id:a,me:t,onBack:n,backTo:s="home",onAuth:o,onDm:i,notify:r}){let[l,m]=E.default.useState(null),[c,p]=E.default.useState(""),[u,d]=E.default.useState(""),[h,b]=E.default.useState(!1),[S,O]=E.default.useState(""),[z,A]=E.default.useState(!1),P=E.default.useCallback(()=>{e.post(a).then(f=>{m(f),p("")}).catch(f=>p(f.message))},[e,a]);E.default.useEffect(()=>{P()},[P]);async function T(){b(!0),O("");try{await e.createComment(a,{body:u}),d(""),P(),r("\u8BC4\u8BBA\u5DF2\u53D1\u5E03")}catch(f){O(f.message)}finally{b(!1)}}async function H(f){A(!0);try{await e.setPostStatus(a,f),r(f==="hidden"?"\u5E16\u5B50\u5DF2\u9690\u85CF":f==="deleted"?"\u5E16\u5B50\u5DF2\u5220\u9664":"\u5E16\u5B50\u5DF2\u6062\u590D"),f==="deleted"?n():P()}catch(K){r(K.message,{error:!0})}finally{A(!1)}}let j=s==="space"?"\u2190 \u8FD4\u56DE\u677F\u5757":"\u2190 \u8FD4\u56DE\u9996\u9875";if(c)return E.default.createElement("div",{style:{paddingTop:22}},E.default.createElement("button",{type:"button",className:"acv-back",onClick:n},j),E.default.createElement("div",{className:"acv-loading"},c));if(!l)return E.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u6B63\u5728\u6253\u5F00\u5E16\u5B50\u2026");let{post:F,comments:W}=l;return E.default.createElement("div",{className:"acv-post-wrap"},E.default.createElement("div",null,E.default.createElement("button",{type:"button",className:"acv-back",onClick:n},j)),E.default.createElement("div",{className:"acv-panel acv-post-poster-panel",style:{padding:"22px 24px"}},E.default.createElement("div",{className:"acv-post-poster-entry"},E.default.createElement(oa,{api:e,post:F,me:t,onAuth:o})),E.default.createElement("div",{className:"acv-post-meta"},E.default.createElement("span",{className:"acv-chip"},F.spaceTitle),E.default.createElement("span",{className:"acv-dot"}),ce(F.createdAt),E.default.createElement("span",{className:"acv-dot"}),F.viewCount," \u6B21\u6D4F\u89C8"),E.default.createElement("h1",{className:"acv-article-title"},F.title),E.default.createElement("div",{className:"acv-article-meta"},E.default.createElement(ee,{api:e,me:t,handle:F.author.handle,onDm:i},E.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:re(F.author)},se(F.author)),E.default.createElement("span",null,F.author.displayName)),E.default.createElement("span",{className:"acv-dot"}),E.default.createElement(ee,{api:e,me:t,handle:F.author.handle,onDm:i},E.default.createElement("span",null,"@",F.author.handle)),t?.role==="admin"&&E.default.createElement("span",{className:"acv-mod-actions"},E.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:z,onClick:()=>H("hidden")},"\u9690\u85CF"),E.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:z,onClick:()=>H("deleted")},"\u5220\u9664"))),l.summary&&E.default.createElement("aside",{className:"acv-post-summary","aria-label":"\u95EE\u9898\u4E0E\u89E3\u51B3\u65B9\u6848"},E.default.createElement("h2",null,"\u95EE\u9898\u4E0E\u89E3\u51B3\u65B9\u6848"),E.default.createElement("p",null,"\u95EE\u9898\uFF1A",l.summary.question),E.default.createElement("p",null,"\u89E3\u51B3\u65B9\u6848\uFF1A",l.summary.solution),E.default.createElement("small",null,"\u4F5C\u8005\u539F\u6587\u6458\u5F55\uFF0C\u5B8C\u6574\u8BA8\u8BBA\u89C1\u4E0B\u65B9\u3002")),E.default.createElement("div",{className:"acv-prose acv-prose--md"},E.default.createElement(We,{text:F.body,api:e}))),E.default.createElement("div",{className:"acv-panel",style:{padding:"18px 24px"}},E.default.createElement("div",{className:"acv-section-head"},E.default.createElement("h2",{className:"acv-section-title"},"\u8BC4\u8BBA"),E.default.createElement("span",{className:"acv-section-note"},W.length," \u6761")),W.length===0&&E.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u8BC4\u8BBA\uFF0C\u8BF4\u70B9\u4EC0\u4E48\u3002"),W.map(f=>E.default.createElement("div",{key:f.id,className:"acv-comment"},E.default.createElement(ee,{api:e,me:t,handle:f.author.handle,onDm:i},E.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:re(f.author)},se(f.author))),E.default.createElement("div",{className:"acv-comment-main"},E.default.createElement("div",{className:"acv-comment-head"},E.default.createElement(ee,{api:e,me:t,handle:f.author.handle,onDm:i},E.default.createElement("span",{className:"acv-comment-author"},f.author.displayName)),E.default.createElement("span",{className:"acv-comment-time"},ce(f.createdAt))),E.default.createElement("p",{className:"acv-comment-body"},E.default.createElement(Ee,{text:f.body,api:e}))))),E.default.createElement("div",{style:{marginTop:14}},!t&&E.default.createElement("div",{className:"acv-notice"},"\u8BC4\u8BBA\u9700\u8981\u5148\u767B\u5F55\u3002",E.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:o},"\u767B\u5F55")),t&&!t.emailVerified&&E.default.createElement("div",{className:"acv-notice"},"\u90AE\u7BB1\u9A8C\u8BC1\u4E4B\u540E\u624D\u80FD\u8BC4\u8BBA\u3002"),t?.emailVerified&&E.default.createElement(E.default.Fragment,null,S&&E.default.createElement("div",{className:"acv-error"},S),E.default.createElement("div",{className:"acv-input-brand"},E.default.createElement(Ae,{size:24})),E.default.createElement(ea,{api:e,value:u,onChange:d,maxLength:8e3,disabled:h,placeholder:"\u5199\u4E00\u6761\u8BC4\u8BBA\u2026"}),E.default.createElement("div",{className:"acv-row"},E.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:h||!u.trim(),onClick:T},h?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u8868\u8BC4\u8BBA"))))))}var B=Z(require("react"),1);function yt({api:e,me:a,onClose:t,onAuth:n}){let[s,o]=B.default.useState(""),[i,r]=B.default.useState(!1),[l,m]=B.default.useState(""),[c,p]=B.default.useState(!1),u=B.default.useRef(null),d=B.default.useRef(!1);B.default.useEffect(()=>{let b=document.activeElement;return u.current.showModal(),()=>b?.focus?.()},[]);async function h(b){if(b.preventDefault(),!(d.current||!s.trim())){d.current=!0,r(!0),m("");try{await e.submitFeedback({body:s.trim()}),p(!0)}catch(S){m(S.message)}finally{d.current=!1,r(!1)}}}return B.default.createElement("dialog",{ref:u,className:"acv-modal","aria-labelledby":"feedback-title",onCancel:b=>{i?b.preventDefault():t()},style:{border:0,color:"inherit",maxWidth:"calc(100vw - 32px)"}},B.default.createElement("h3",{id:"feedback-title",className:"acv-modal-title"},"\u610F\u89C1\u53CD\u9988"),c?B.default.createElement("div",{role:"status"},B.default.createElement("p",{className:"acv-modal-sub"},"\u53CD\u9988\u5DF2\u6536\u5230\uFF0C\u611F\u8C22\u4F60\u5E2E\u52A9\u793E\u533A\u53D8\u5F97\u66F4\u597D\uFF01\u7BA1\u7406\u5458\u4F1A\u53CA\u65F6\u67E5\u770B\u5E76\u8BA4\u771F\u5904\u7406\u4F60\u7684\u53CD\u9988\u3002"),B.default.createElement("button",{type:"button",className:"acv-btn primary",onClick:t,autoFocus:!0},"\u597D\u7684")):a?B.default.createElement("form",{onSubmit:h},B.default.createElement("p",{className:"acv-modal-sub"},"\u9047\u5230\u4E86\u95EE\u9898\uFF0C\u6216\u6709\u60F3\u6CD5\u60F3\u544A\u8BC9\u6211\u4EEC\uFF1F\u5185\u5BB9\u4EC5\u7BA1\u7406\u5458\u53EF\u89C1\u3002"),B.default.createElement("div",{className:"acv-field"},B.default.createElement("label",{htmlFor:"feedback-body"},"\u53CD\u9988\u5185\u5BB9"),B.default.createElement("textarea",{id:"feedback-body",className:"acv-input",rows:6,maxLength:2e3,required:!0,autoFocus:!0,disabled:i,value:s,onChange:b=>o(b.target.value),placeholder:"\u63CF\u8FF0\u9047\u5230\u7684\u95EE\u9898\u6216\u4F60\u7684\u5EFA\u8BAE\u2026",style:{resize:"vertical"}}),B.default.createElement("span",{className:"acv-section-note"},s.length," / 2000")),l&&B.default.createElement("p",{role:"alert"},l),B.default.createElement("div",{style:{display:"flex",justifyContent:"flex-end",gap:12}},B.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:i,onClick:t},"\u53D6\u6D88"),B.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:i||!s.trim()},i?"\u63D0\u4EA4\u4E2D\u2026":"\u63D0\u4EA4\u53CD\u9988"))):B.default.createElement(B.default.Fragment,null,B.default.createElement("p",{className:"acv-modal-sub"},"\u767B\u5F55\u540E\u5C31\u53EF\u4EE5\u5411\u7BA1\u7406\u5458\u63D0\u4EA4\u53CD\u9988\u3002"),B.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u5173\u95ED"),B.default.createElement("button",{type:"button",className:"acv-btn primary",onClick:n},"\u53BB\u767B\u5F55")))}function wt({api:e}){let[a,t]=B.default.useState(0),[n,s]=B.default.useState(0),[o,i]=B.default.useState(null),[r,l]=B.default.useState("");return B.default.useEffect(()=>{let m=!0;return i(null),l(""),e.adminFeedback(a).then(c=>{m&&i(c)}).catch(c=>{m&&l(c.message)}),()=>{m=!1}},[e,a,n]),B.default.createElement("div",null,B.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>s(m=>m+1)},"\u5237\u65B0"),r?B.default.createElement("p",{role:"alert"},r):o?B.default.createElement(B.default.Fragment,null,!o.feedback.length&&B.default.createElement("p",null,"\u6682\u65E0\u53CD\u9988\u5185\u5BB9"),o.feedback.map(m=>B.default.createElement("article",{key:m.id,style:{padding:"20px 0",borderBottom:"1px solid var(--acv-line, #eee)"}},B.default.createElement("strong",null,m.author.displayName," ",B.default.createElement("span",{className:"acv-section-note"},"@",m.author.handle)),B.default.createElement("time",{className:"acv-section-note",dateTime:new Date(m.createdAt).toISOString(),style:{display:"block",marginTop:6}},new Date(m.createdAt).toLocaleString("zh-CN")),B.default.createElement("p",{style:{whiteSpace:"pre-wrap",overflowWrap:"anywhere"}},m.body))),B.default.createElement("div",{style:{display:"flex",gap:12,alignItems:"center",marginTop:16}},B.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:!a,onClick:()=>t(Math.max(0,a-o.limit))},"\u4E0A\u4E00\u9875"),B.default.createElement("span",{className:"acv-section-note"},"\u7B2C ",Math.floor(a/o.limit)+1," \u9875 \xB7 \u5171 ",o.total," \u6761"),B.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:a+o.limit>=o.total,onClick:()=>t(a+o.limit)},"\u4E0B\u4E00\u9875"))):B.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u53CD\u9988\u2026"))}var $=Z(require("react"),1);var be=Z(require("react"),1);function ye({className:e="",id:a,disabled:t,...n}){let s=be.default.useId(),o=a||s,[i,r]=be.default.useState(!1);return be.default.createElement("div",{className:"acv-password-input"},be.default.createElement("input",{...n,id:o,disabled:t,className:`acv-input ${e}`,type:i?"text":"password"}),be.default.createElement("button",{type:"button",className:"acv-password-toggle",disabled:t,"aria-label":i?"\u9690\u85CF\u5BC6\u7801":"\u663E\u793A\u5BC6\u7801","aria-pressed":i,"aria-controls":o,onClick:()=>r(l=>!l)},be.default.createElement("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.7",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true"},be.default.createElement("path",{d:"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12Z"}),be.default.createElement("circle",{cx:"12",cy:"12",r:"3"}),i&&be.default.createElement("path",{d:"m3 3 18 18"}))))}var xn=["login","register","forgot"];function ra({api:e,initialMode:a="login",onClose:t,onDone:n,notify:s}){let[o,i]=$.default.useState(xn.includes(a)?a:"login"),[r,l]=$.default.useState(""),[m,c]=$.default.useState(""),[p,u]=$.default.useState(""),[d,h]=$.default.useState(""),[b,S]=$.default.useState(null),[O,z]=$.default.useState(!1),[A,P]=$.default.useState(""),[T,H]=$.default.useState(""),j=$.default.useCallback(()=>{e.captcha().then(S).catch(()=>S(null))},[e]);$.default.useEffect(()=>{o==="register"&&j()},[o,j]);function F(w){i(w),P(""),H(""),h("")}async function W(w){w.preventDefault(),z(!0),P("");try{let y=await e.login({handle:r,password:p});e.setToken(y.token),n(y.account)}catch(y){P(y.message)}finally{z(!1)}}async function f(w){w.preventDefault(),z(!0),P("");try{let y=await e.register({handle:r,email:m,password:p,captchaId:b?.id,captchaAnswer:d}),v=await e.login({handle:r,password:p});e.setToken(v.token),H(y.mail?.delivered?"\u6CE8\u518C\u6210\u529F\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\u3002\u70B9\u90AE\u4EF6\u91CC\u7684\u94FE\u63A5\u5C31\u80FD\u53D1\u5E16\u3002":"\u6CE8\u518C\u6210\u529F\u3002\u672C\u5730\u6CA1\u914D SMTP\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u7ECF\u6253\u5230\u670D\u52A1\u7AEF\u65E5\u5FD7\u91CC\u4E86\u3002"),n(v.account)}catch(y){P(y.message),j(),h("")}finally{z(!1)}}async function K(w){w.preventDefault(),z(!0),P("");try{let y=await e.forgotPassword(m.trim());H(y?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u670D\u52A1\u5668\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${y.verifyLink}`:"\u5982\u679C\u8FD9\u4E2A\u90AE\u7BB1\u6CE8\u518C\u8FC7\uFF0C\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u7ECF\u53D1\u51FA\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u5C31\u80FD\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(y){P(y.message)}finally{z(!1)}}return $.default.createElement("div",{className:"acv-overlay",onClick:t},$.default.createElement("div",{className:"acv-modal",onClick:w=>w.stopPropagation()},$.default.createElement("h3",{className:"acv-modal-title"},o==="login"?"\u767B\u5F55 Achoverse":o==="register"?"\u6CE8\u518C Achoverse":"\u5FD8\u8BB0\u5BC6\u7801"),$.default.createElement("p",{className:"acv-modal-sub"},o==="login"?"\u6D4F\u89C8\u4E0D\u9700\u8981\u767B\u5F55\uFF0C\u53D1\u5E16\u548C\u8BC4\u8BBA\u65F6\u624D\u9700\u8981\u3002":o==="register"?"\u6CE8\u518C\u540E\u8981\u9A8C\u8BC1\u90AE\u7BB1\u624D\u80FD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002":"\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1\uFF0C\u6211\u4EEC\u53D1\u4E00\u5C01\u5E26\u91CD\u7F6E\u94FE\u63A5\u7684\u90AE\u4EF6\u3002"),o!=="forgot"&&$.default.createElement("div",{className:"acv-switch"},$.default.createElement("button",{type:"button",className:o==="login"?"is-active":"",onClick:()=>F("login")},"\u767B\u5F55"),$.default.createElement("button",{type:"button",className:o==="register"?"is-active":"",onClick:()=>F("register")},"\u6CE8\u518C")),A&&$.default.createElement("div",{className:"acv-error"},A),T&&$.default.createElement("div",{className:"acv-notice"},T),o==="forgot"&&$.default.createElement("form",{onSubmit:K},$.default.createElement("div",{className:"acv-field"},$.default.createElement("label",null,"\u90AE\u7BB1"),$.default.createElement("input",{className:"acv-input",type:"email",value:m,onChange:w=>c(w.target.value),placeholder:"\u6CE8\u518C\u65F6\u7528\u7684\u90AE\u7BB1"})),$.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},$.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>F("login")},"\u8FD4\u56DE\u767B\u5F55"),$.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:O||!m.trim()},O?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u9001\u91CD\u7F6E\u90AE\u4EF6"))),o==="login"&&$.default.createElement("form",{onSubmit:W},$.default.createElement("div",{className:"acv-field"},$.default.createElement("label",{htmlFor:"login-identifier"},"\u7528\u6237\u540D\u6216\u90AE\u7BB1"),$.default.createElement("input",{id:"login-identifier",className:"acv-input",value:r,autoComplete:"username",placeholder:"\u4F60\u7684\u7528\u6237\u540D\u6216\u6CE8\u518C\u90AE\u7BB1",onChange:w=>l(w.target.value)})),$.default.createElement("div",{className:"acv-field"},$.default.createElement("label",{htmlFor:"login-password"},"\u5BC6\u7801"),$.default.createElement(ye,{key:"login-password",id:"login-password",value:p,autoComplete:"current-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:w=>u(w.target.value)})),$.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},$.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:()=>F("forgot")},"\u5FD8\u8BB0\u5BC6\u7801\uFF1F"),$.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:O||!r||!p},O?"\u767B\u5F55\u4E2D\u2026":"\u767B\u5F55"))),o==="register"&&$.default.createElement("form",{onSubmit:f},$.default.createElement("div",{className:"acv-field"},$.default.createElement("label",null,"\u7528\u6237\u540D"),$.default.createElement("input",{className:"acv-input",value:r,autoComplete:"username",placeholder:"3-24 \u4F4D\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF",onChange:w=>l(w.target.value)})),$.default.createElement("div",{className:"acv-field"},$.default.createElement("label",null,"\u90AE\u7BB1"),$.default.createElement("input",{className:"acv-input",type:"email",value:m,autoComplete:"email",placeholder:"\u7528\u6765\u6536\u9A8C\u8BC1\u94FE\u63A5",onChange:w=>c(w.target.value)})),$.default.createElement("div",{className:"acv-field"},$.default.createElement("label",{htmlFor:"register-password"},"\u5BC6\u7801"),$.default.createElement(ye,{key:"register-password",id:"register-password",value:p,autoComplete:"new-password",placeholder:"\u81F3\u5C11 8 \u4F4D",onChange:w=>u(w.target.value)})),$.default.createElement("div",{className:"acv-field"},$.default.createElement("label",null,"\u9A8C\u8BC1\u7801"),$.default.createElement("div",{className:"acv-captcha-row"},$.default.createElement("input",{className:"acv-input",value:d,maxLength:8,placeholder:"\u770B\u53F3\u8FB9",onChange:w=>h(w.target.value)}),$.default.createElement("button",{type:"button",className:"acv-captcha-img",onClick:j,title:"\u6362\u4E00\u5F20"},b?$.default.createElement("span",{dangerouslySetInnerHTML:{__html:b.svg}}):$.default.createElement("span",{className:"acv-chip"},"\u52A0\u8F7D\u4E2D")))),$.default.createElement("div",{className:"acv-row",style:{justifyContent:"space-between"}},$.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:t},"\u53D6\u6D88"),$.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:O||!r||!p||!m},O?"\u6CE8\u518C\u4E2D\u2026":"\u6CE8\u518C")))))}var g=Z(require("react"),1);var yn={title:"",slug:"",subtitle:"",description:"",accent:"#F53FA6",accentTo:"#FF7A45",zones:["home"],motif:"diffusion"},wn=[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR \u4E13\u533A"}];function kn({api:e,me:a,onDm:t,notify:n}){let[s,o]=g.default.useState(null),[i,r]=g.default.useState(""),[l,m]=g.default.useState(""),c=g.default.useCallback(()=>{e.pendingAccounts().then(u=>{o(u.accounts),r("")}).catch(u=>r(u.message))},[e]);g.default.useEffect(()=>{c()},[c]);async function p(u){m(u.id);try{await e.verifyAccount(u.id),n(`\u5DF2\u653E\u884C @${u.handle}`),c()}catch(d){n(d.message,{error:!0})}finally{m("")}}return i?g.default.createElement("div",{className:"acv-error"},i):s?s.length===0?g.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5F85\u9A8C\u8BC1\u7684\u8D26\u53F7"):s.map(u=>g.default.createElement("div",{key:u.id,className:"acv-member",style:{padding:"12px 2px"}},g.default.createElement("span",{className:"acv-member-main"},g.default.createElement("span",{className:"acv-member-name"},g.default.createElement(ee,{api:e,me:a,handle:u.handle,onDm:t},g.default.createElement("span",null,u.displayName)," ",g.default.createElement("span",{className:"acv-member-meta"},"@",u.handle))),g.default.createElement("span",{className:"acv-member-meta"},u.email," \xB7 \u6CE8\u518C\u4E8E ",ce(u.createdAt))),g.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"6px 14px",fontSize:13},disabled:l===u.id,onClick:()=>p(u)},l===u.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C"))):g.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Nn({api:e,space:a,onDone:t,onCancel:n,notify:s}){let[o,i]=g.default.useState(a?{title:a.title,slug:a.slug,subtitle:a.subtitle,description:a.description,accent:a.accent,accentTo:a.accentTo,zones:a.zones?.length?a.zones:["home"],motif:a.motif||"diffusion"}:yn),[r,l]=g.default.useState(!1),[m,c]=g.default.useState(""),p=(d,h)=>i(b=>({...b,[d]:h}));async function u(){l(!0),c("");try{a?await e.updateSpace(a.id,o):await e.createSpace(o),s(a?"\u677F\u5757\u5DF2\u66F4\u65B0":`\u677F\u5757\u300C${o.title}\u300D\u5DF2\u521B\u5EFA`),t()}catch(d){c(d.message)}finally{l(!1)}}return g.default.createElement("div",{className:"acv-editor"},m&&g.default.createElement("div",{className:"acv-error"},m),g.default.createElement("div",{className:"acv-field"},g.default.createElement("label",null,"\u677F\u5757\u540D\u79F0"),g.default.createElement("input",{className:"acv-input",value:o.title,maxLength:24,onChange:d=>p("title",d.target.value),placeholder:"\u6BD4\u5982\uFF1A\u4F5C\u54C1\u5C55\u793A"})),g.default.createElement("div",{className:"acv-field"},g.default.createElement("label",null,"\u677F\u5757\u6807\u8BC6\uFF08\u7528\u4E8E\u94FE\u63A5\uFF0C\u7559\u7A7A\u81EA\u52A8\u751F\u6210\uFF09"),g.default.createElement("input",{className:"acv-input",value:o.slug,maxLength:32,disabled:!!a,onChange:d=>p("slug",d.target.value.toLowerCase()),placeholder:"works"})),g.default.createElement("div",{className:"acv-field"},g.default.createElement("label",null,"\u4E00\u53E5\u8BDD\u4ECB\u7ECD"),g.default.createElement("input",{className:"acv-input",value:o.subtitle,maxLength:60,onChange:d=>p("subtitle",d.target.value)})),g.default.createElement("div",{className:"acv-field"},g.default.createElement("label",null,"\u677F\u5757\u8BF4\u660E"),g.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:o.description,maxLength:300,onChange:d=>p("description",d.target.value)})),g.default.createElement("div",{className:"acv-field"},g.default.createElement("label",null,"\u663E\u793A\u5728"),g.default.createElement("div",{className:"acv-zone-picker"},wn.map(d=>{let h=o.zones.includes(d.key);return g.default.createElement("button",{key:d.key,type:"button",className:h?"acv-zone-option is-active":"acv-zone-option",onClick:()=>i(b=>{let S=h?b.zones.filter(O=>O!==d.key):[...b.zones,d.key];return{...b,zones:S.length?S:["home"]}})},g.default.createElement("span",{className:"acv-zone-tick"},h?"\u2713":""),d.label)})),g.default.createElement("span",{className:"acv-field-hint"},"\u53EF\u4EE5\u591A\u9009\uFF1A\u540C\u65F6\u52FE\u9009\u5C31\u4E24\u4E2A\u5730\u65B9\u90FD\u663E\u793A")),g.default.createElement("div",{className:"acv-field"},g.default.createElement("label",null,"\u5C01\u9762\u6784\u56FE"),g.default.createElement("div",{className:"acv-zone-picker"},Ia.map(d=>g.default.createElement("button",{key:d.key,type:"button",className:o.motif===d.key?"acv-zone-option is-active":"acv-zone-option",onClick:()=>p("motif",d.key)},d.label))),g.default.createElement("span",{className:"acv-field-hint"},"\u534A\u900F\u660E\u51E0\u4F55\u56FE\u5F62\uFF0C\u753B\u5728\u6E10\u53D8\u4E0A\u9762")),g.default.createElement("div",{className:"acv-field"},g.default.createElement("label",null,"\u5361\u7247\u6E10\u53D8"),g.default.createElement("div",{className:"acv-color-row"},g.default.createElement("input",{type:"color",className:"acv-color",value:o.accent,onChange:d=>p("accent",d.target.value)}),g.default.createElement("input",{type:"color",className:"acv-color",value:o.accentTo,onChange:d=>p("accentTo",d.target.value)}),g.default.createElement("span",{className:"acv-space-cover acv-color-preview",style:{background:`linear-gradient(120deg, ${o.accent}, ${o.accentTo})`}}))),g.default.createElement("div",{className:"acv-row"},g.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:n},"\u53D6\u6D88"),g.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:r||!o.title.trim(),onClick:u},r?"\u4FDD\u5B58\u4E2D\u2026":a?"\u4FDD\u5B58":"\u521B\u5EFA\u677F\u5757")))}function Cn({api:e,me:a,onDm:t,notify:n}){let[s,o]=g.default.useState(null),[i,r]=g.default.useState(""),[l,m]=g.default.useState(""),c=g.default.useCallback(()=>{e.adminUsers(i.trim()).then(u=>o(u.users)).catch(u=>n(u.message,{error:!0}))},[e,i,n]);g.default.useEffect(()=>{c()},[c]);async function p(u){m(u.id);try{await e.verifyAccount(u.id),n(`\u5DF2\u653E\u884C @${u.handle}`),c()}catch(d){n(d.message,{error:!0})}finally{m("")}}return s?g.default.createElement(g.default.Fragment,null,g.default.createElement("div",{className:"acv-inline",style:{marginBottom:12}},g.default.createElement("input",{className:"acv-input",placeholder:"\u641C\u7D22\u7528\u6237\u540D\u6216\u6635\u79F0",value:i,onChange:u=>r(u.target.value)}),g.default.createElement("button",{type:"button",className:"acv-btn",onClick:c},"\u641C\u7D22")),s.length===0&&g.default.createElement("div",{className:"acv-empty"},"\u6CA1\u6709\u5339\u914D\u7684\u7528\u6237"),s.map(u=>g.default.createElement("div",{key:u.id,className:"acv-admin-row"},g.default.createElement("span",{className:"acv-member-main"},g.default.createElement("span",{className:"acv-member-name"},g.default.createElement(ee,{api:e,me:a,handle:u.handle,onDm:t},g.default.createElement("span",null,u.displayName),g.default.createElement("span",{className:"acv-member-meta"}," @",u.handle)),u.role==="admin"&&g.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u7BA1\u7406\u5458"),!u.emailVerified&&g.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u672A\u9A8C\u8BC1"),!u.allowDm&&g.default.createElement("span",{className:"acv-chip",style:{marginLeft:6}},"\u5173\u79C1\u4FE1")),g.default.createElement("span",{className:"acv-member-meta"},u.email||"\uFF08\u65E0\u90AE\u7BB1\uFF09"," \xB7 ",u.postCount," \u4E2A\u5E16\u5B50 \xB7 \u6CE8\u518C\u4E8E ",ce(u.createdAt))),!u.emailVerified&&g.default.createElement("button",{type:"button",className:"acv-btn primary",style:{padding:"5px 12px",fontSize:12},disabled:l===u.id,onClick:()=>p(u)},l===u.id?"\u5904\u7406\u4E2D\u2026":"\u653E\u884C")))):g.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function Sn({api:e,notify:a}){let[t,n]=g.default.useState(null),[s,o]=g.default.useState(null),[i,r]=g.default.useState(""),l=g.default.useCallback(()=>{e.adminSpaces().then(c=>n(c.spaces)).catch(c=>a(c.message,{error:!0}))},[e,a]);g.default.useEffect(()=>{l()},[l]);async function m(c){let p=!c.archivedAt;if(!(p&&!window.confirm(`\u5220\u9664\u677F\u5757\u300C${c.title}\u300D\uFF1F\u677F\u5757\u4F1A\u4ECE\u9996\u9875\u6D88\u5931\uFF0C\u5E16\u5B50\u4ECD\u4FDD\u7559\u5728\u5E93\u91CC\u3002`))){r(c.id);try{await e.archiveSpace(c.id,p),a(p?"\u677F\u5757\u5DF2\u5220\u9664":"\u677F\u5757\u5DF2\u6062\u590D"),l()}catch(u){a(u.message,{error:!0})}finally{r("")}}}return t?g.default.createElement(g.default.Fragment,null,s?g.default.createElement(Nn,{api:e,space:s==="new"?null:s,notify:a,onCancel:()=>o(null),onDone:()=>{o(null),l()}}):g.default.createElement("div",{className:"acv-row",style:{justifyContent:"flex-start",marginBottom:6}},g.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>o("new")},"\u65B0\u5EFA\u677F\u5757")),t.map(c=>g.default.createElement("div",{key:c.id,className:c.archivedAt?"acv-admin-row is-archived":"acv-admin-row"},g.default.createElement(Xe,{space:c,showBadge:!1,showEdition:!1,className:"acv-admin-swatch"}),g.default.createElement("span",{className:"acv-member-main"},g.default.createElement("span",{className:"acv-member-name"},c.title,g.default.createElement("span",{className:"acv-member-meta"}," /",c.slug),c.archivedAt&&g.default.createElement("span",{className:"acv-chip",style:{marginLeft:8}},"\u5DF2\u5220\u9664")),g.default.createElement("span",{className:"acv-member-meta"},c.postCount," \u4E2A\u5E16\u5B50 \xB7 ",c.lastActivityAt?`\u6700\u540E\u66F4\u65B0 ${ce(c.lastActivityAt)}`:"\u8FD8\u6CA1\u6709\u5E16\u5B50",c.zones?.map(p=>g.default.createElement("span",{key:p,className:"acv-chip",style:{marginLeft:6}},p==="arvr"?"AR/VR":"\u9996\u9875")))),g.default.createElement("span",{style:{display:"flex",gap:6}},g.default.createElement("button",{type:"button",className:"acv-btn",style:{padding:"5px 12px",fontSize:12},onClick:()=>o(c)},"\u7F16\u8F91"),g.default.createElement("button",{type:"button",className:"acv-btn ghost",style:{padding:"5px 12px",fontSize:12},disabled:i===c.id,onClick:()=>m(c)},c.archivedAt?"\u6062\u590D":"\u5220\u9664"))))):g.default.createElement("div",{className:"acv-empty"},"\u6B63\u5728\u8BFB\u53D6\u2026")}function kt({api:e,me:a,onDm:t,onBack:n,notify:s}){let[o,i]=g.default.useState("spaces"),[r,l]=g.default.useState(null);return g.default.useEffect(()=>{e.pendingAccounts().then(m=>l(m.accounts.length)).catch(()=>l(null))},[e,o]),g.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},g.default.createElement("div",null,g.default.createElement("button",{type:"button",className:"acv-back",onClick:n},"\u2190 \u8FD4\u56DE\u9996\u9875")),g.default.createElement("div",{className:"acv-admin-layout"},g.default.createElement("nav",{className:"acv-admin-nav","aria-label":"\u7BA1\u7406"},g.default.createElement("button",{type:"button",className:o==="feedback"?"is-active":"",onClick:()=>i("feedback")},"\u53CD\u9988\u5185\u5BB9"),g.default.createElement("button",{type:"button",className:o==="spaces"?"is-active":"",onClick:()=>i("spaces")},"\u677F\u5757"),g.default.createElement("button",{type:"button",className:o==="users"?"is-active":"",onClick:()=>i("users")},"\u7528\u6237"),g.default.createElement("button",{type:"button",className:o==="accounts"?"is-active":"",onClick:()=>i("accounts")},g.default.createElement("span",null,"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),r>0&&g.default.createElement("span",{className:"acv-badge"},r))),g.default.createElement("section",{className:"acv-panel acv-admin-content",style:{padding:"20px 22px"}},g.default.createElement("div",{className:"acv-section-head"},g.default.createElement("h2",{className:"acv-section-title"},o==="feedback"?"\u53CD\u9988\u5185\u5BB9":o==="spaces"?"\u677F\u5757":o==="users"?"\u7528\u6237":"\u5F85\u9A8C\u8BC1\u8D26\u53F7"),g.default.createElement("span",{className:"acv-section-note"},o==="feedback"?"\u7528\u6237\u63D0\u4EA4\u7684\u610F\u89C1\u4E0E\u95EE\u9898\uFF0C\u4EC5\u7BA1\u7406\u5458\u53EF\u89C1":o==="spaces"?"\u65B0\u5EFA\u3001\u7F16\u8F91\u3001\u5220\u9664\u677F\u5757\uFF1B\u5220\u9664\u540E\u53EF\u4ECE\u7BA1\u7406\u91CC\u6062\u590D":o==="users"?"\u5168\u90E8\u8D26\u53F7\uFF1B\u672A\u9A8C\u8BC1\u7684\u53EF\u4EE5\u76F4\u63A5\u653E\u884C":"\u6CA1\u914D SMTP \u65F6\uFF0C\u9A8C\u8BC1\u90AE\u4EF6\u53D1\u4E0D\u51FA\u53BB\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u4EBA\u5DE5\u653E\u884C")),o==="feedback"&&g.default.createElement(wt,{api:e}),o==="spaces"&&g.default.createElement(Sn,{api:e,notify:s}),o==="users"&&g.default.createElement(Cn,{api:e,me:a,onDm:t,notify:s}),o==="accounts"&&g.default.createElement(kn,{api:e,me:a,onDm:t,notify:s}))))}var ve=Z(require("react"),1);function Nt({api:e,zone:a,title:t,note:n,onOpenSpace:s}){let[o,i]=ve.default.useState(null),[r,l]=ve.default.useState("");return ve.default.useEffect(()=>{let m=!1;return e.zoneSpaces(a).then(c=>{m||(i(c.spaces),l(""))}).catch(c=>{m||l(c.message)}),()=>{m=!0}},[e,a]),ve.default.createElement("div",{className:"acv-zone"},ve.default.createElement("div",{className:"acv-section-head"},ve.default.createElement("h2",{className:"acv-section-title"},t),ve.default.createElement("span",{className:"acv-section-note"},n)),r&&ve.default.createElement("div",{className:"acv-empty"},r),!o&&!r&&ve.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),o&&o.length===0&&ve.default.createElement("div",{className:"acv-panel"},ve.default.createElement("div",{className:"acv-empty"},"\u8FD9\u4E2A\u4E13\u533A\u8FD8\u6CA1\u6709\u677F\u5757\u3002\u7BA1\u7406\u5458\u53EF\u4EE5\u5728\u300C\u7BA1\u7406 \u2192 \u677F\u5757\u300D\u91CC\u628A\u677F\u5757\u653E\u8FDB\u300C",t,"\u300D\u3002")),ve.default.createElement("div",{className:"acv-zone-grid"},o?.map(m=>ve.default.createElement(fa,{key:m.id,space:m,onOpen:s}))))}var q=Z(require("react"),1),zt=Z(ua(),1);var ia=Z(require("react"),1);function En(e,a,t){let n={messages:[],mine:null,mineReady:!t,loading:!0,busy:!1,error:"",highlightId:null},s=!0,o=0,i=null,r=new Set,l=globalThis.crypto?.randomUUID?.()||`message_${Date.now()}_${Math.random().toString(36).slice(2)}`,m=p=>{s&&(n={...n,...p},r.forEach(u=>u()))};async function c(){let p=++o;i?.abort(),i=new AbortController;try{let[u,d]=await Promise.all([e.worldMessages(a,i.signal),t?e.myWorldMessage(a,i.signal):Promise.resolve(null)]);s&&p===o&&m({messages:u.messages,mine:d,mineReady:!0,loading:!1,error:""})}catch(u){s&&p===o&&u.name!=="AbortError"&&m({loading:!1,error:u.message})}}return{getSnapshot:()=>n,subscribe(p){return r.add(p),()=>r.delete(p)},refresh:c,async save(p,u,d){if(n.busy||!n.mineReady)return null;o++,i?.abort(),m({busy:!0,error:""});try{let b=(n.mine?.state==="active"?await e.editWorldMessage(a,n.mine.message.id,{body:p,style:u,revision:d}):await e.createWorldMessage(a,{body:p,style:u,requestId:l})).message,S=n.messages.filter(O=>O.id!==b.id&&O.placementSlot!==b.placementSlot);return b.placementSlot!==null&&S.unshift(b),m({mine:{state:"active",message:b},messages:S,highlightId:b.id}),await c(),b}catch(h){throw m({error:h.message}),(h.status===409||h.status===404)&&await c(),h}finally{m({busy:!1})}},async remove(p){if(n.busy)return!1;o++,i?.abort(),m({busy:!0,error:""});try{return await e.deleteWorldMessage(a,p),m({messages:n.messages.filter(u=>u.id!==p)}),await c(),!0}catch(u){throw m({error:u.message}),u}finally{m({busy:!1})}},dispose(){s=!1,o++,i?.abort(),r.clear()}}}function Ct(e,a,t){let n=ia.default.useMemo(()=>En(e,a,t?.id),[e,a,t?.id]),s=ia.default.useSyncExternalStore(n.subscribe,n.getSnapshot);return ia.default.useEffect(()=>{n.refresh();let o=()=>{!document.hidden&&!n.getSnapshot().busy&&n.refresh()},i=setInterval(o,3e4);return document.addEventListener("visibilitychange",o),()=>{clearInterval(i),document.removeEventListener("visibilitychange",o),n.dispose()}},[n]),{...s,store:n}}var k=Z(require("react"),1);var St=[{id:"plank",label:"\u539F\u6728\u62FC\u677F"},{id:"cottage",label:"\u5C0F\u5C4B\u5F62"}];function Tt({api:e,slug:a,me:t,data:n,selected:s,onClose:o,onLogin:i,previews:r={}}){let l=k.default.useRef(null),[m,c]=k.default.useState(s?"detail":"compose"),[p,u]=k.default.useState(s),[d,h]=k.default.useState(""),[b,S]=k.default.useState("plank"),[O,z]=k.default.useState(null),A=k.default.useRef(!1),[P,T]=k.default.useState(""),[H,j]=k.default.useState(!1),[F,W]=k.default.useState(!1),[f,K]=k.default.useState(!1),[w,y]=k.default.useState(null),[v,x]=k.default.useState(!1),Y=k.default.useRef(null),[G,ue]=k.default.useState("");k.default.useEffect(()=>{let J=document.activeElement;return l.current.showModal(),()=>{Y.current?.abort(),J?.isConnected&&J.focus()}},[]),k.default.useEffect(()=>{if(!(!n.mineReady||A.current||f)){if(n.mine?.state==="active"){if(d.trim()){K(!0);return}h(n.mine.message.body),S(n.mine.message.style),z(n.mine.message.revision)}A.current=!!t}},[n.mineReady,n.mine,t,d,f]),k.default.useEffect(()=>{H&&l.current.querySelector(".acv-overlay input")?.focus()},[H]);function I(){n.mine?.state==="active"&&(h(n.mine.message.body),S(n.mine.message.style),z(n.mine.message.revision),A.current=!0,K(!1)),c("compose"),T("")}async function Q(J=""){Y.current?.abort();let we=new AbortController;Y.current=we,c("history"),T(""),x(!0);try{let _e=await e.worldMessageHistory(a,J,we.signal);if(we.signal.aborted)return;y(_e.messages),ue(_e.nextCursor)}catch(_e){_e.name!=="AbortError"&&T(_e.message)}finally{we.signal.aborted||x(!1)}}async function ge(J){if(J.preventDefault(),T(""),!t){j(!0);return}try{await n.store.save(d,b,O)&&o()}catch(we){T(we.message),we.status===409&&K(!0),we.status===401&&j(!0)}}async function De(){try{await n.store.remove(p.id),W(!1),u(null),await Q()}catch(J){T(J.message)}}let Me=n.mine?.state==="removed",da=n.mine?.state==="active",jt=d.trim()&&[...d.trim()].length<=80&&!n.busy&&!f&&n.mineReady,Ht=p?.author.id===t?.id;return k.default.createElement("dialog",{ref:l,className:"acv-modal acv-world-message-dialog","aria-labelledby":"world-message-title",onCancel:J=>{J.preventDefault(),H?j(!1):F?W(!1):n.busy||o()}},k.default.createElement("div",{inert:H},k.default.createElement("header",{className:"acv-message-heading"},k.default.createElement("h2",{className:"acv-modal-title",id:"world-message-title"},m==="history"?"\u6C99\u6EE9\u4E0A\u7684\u7559\u8A00":m==="detail"?"\u4E00\u5757\u7559\u8A00\u677F":da?"\u7F16\u8F91\u6211\u7684\u7559\u8A00\u677F":"\u7559\u4E00\u53E5\u8BDD"),k.default.createElement("button",{className:"acv-btn ghost",type:"button","aria-label":"\u5173\u95ED\u7559\u8A00\u9762\u677F",disabled:n.busy,onClick:o},"\xD7")),k.default.createElement("nav",{className:"acv-message-tabs","aria-label":"\u7559\u8A00\u5BFC\u822A"},k.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:n.busy,onClick:I},t?"\u6211\u7684\u7559\u8A00\u677F":"\u5199\u7559\u8A00"),k.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:n.busy,onClick:()=>Q()},"\u5168\u90E8\u7559\u8A00")),m==="compose"&&k.default.createElement(k.default.Fragment,null,Me?k.default.createElement("p",{role:"status"},"\u4F60\u7684\u7559\u8A00\u677F\u5DF2\u88AB\u7BA1\u7406\u5458\u79FB\u9664\uFF0C\u4E0D\u80FD\u518D\u6B21\u653E\u7F6E\u3002"):k.default.createElement("form",{onSubmit:ge},k.default.createElement("p",{className:"acv-modal-sub"},"\u6BCF\u4EBA\u4E00\u5757\uFF0C\u53EF\u4EE5\u968F\u65F6\u4FEE\u6539\u81EA\u5DF1\u7684\u6587\u5B57\u548C\u6837\u5F0F\u3002"),n.mineReady?null:k.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u4F60\u7684\u7559\u8A00\u677F\u2026"),k.default.createElement("fieldset",{disabled:n.busy},k.default.createElement("legend",null,"\u9009\u62E9\u6728\u724C\u6837\u5F0F"),k.default.createElement("div",{className:"acv-message-styles"},St.map(J=>k.default.createElement("label",{key:J.id,className:b===J.id?"is-selected":""},k.default.createElement("input",{type:"radio",name:"board-style",value:J.id,checked:b===J.id,onChange:()=>S(J.id)}),k.default.createElement("span",{className:"acv-message-preview","aria-hidden":"true"},r[J.id]?k.default.createElement("img",{src:r[J.id],alt:""}):k.default.createElement("span",{className:"acv-message-preview-loading"},"\u6B63\u5728\u51C6\u5907\u6728\u724C\u9884\u89C8\u2026")),J.label)))),k.default.createElement("div",{className:"acv-field acv-message-field"},k.default.createElement("label",{htmlFor:"world-message-body"},"\u4F60\u7684\u7559\u8A00"),k.default.createElement("textarea",{className:"acv-input",id:"world-message-body",rows:4,value:d,disabled:n.busy,onChange:J=>h(J.target.value),placeholder:"\u7ED9\u8DEF\u8FC7\u8FD9\u91CC\u7684\u4EBA\u7559\u4E00\u53E5\u8BDD\u2026"})),k.default.createElement("p",{className:"acv-modal-sub"},[...d].length," / ",80," \u5B57 \xB7 \u7EAF\u6587\u672C"),f&&k.default.createElement("div",{role:"alert"},k.default.createElement("p",null,"\u4F60\u5DF2\u6709\u7559\u8A00\uFF0C\u6216\u7559\u8A00\u5DF2\u5728\u5176\u4ED6\u8BBE\u5907\u4FEE\u6539\u3002\u8349\u7A3F\u4ECD\u4FDD\u7559\u5728\u8F93\u5165\u6846\u4E2D\uFF0C\u8BF7\u5148\u6838\u5BF9\u6700\u65B0\u5185\u5BB9\u3002"),k.default.createElement("blockquote",null,n.mine?.message?.body),k.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:I},"\u8BFB\u53D6\u6700\u65B0\u7559\u8A00"),k.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:!da,onClick:()=>{z(n.mine.message.revision),K(!1),A.current=!0}},"\u4FDD\u7559\u8349\u7A3F\uFF0C\u4F5C\u4E3A\u4FEE\u6539")),k.default.createElement("button",{className:"acv-btn brand acv-message-submit",type:"submit",disabled:!jt},n.busy?"\u6B63\u5728\u4FDD\u5B58\u2026":t?da?"\u4FDD\u5B58\u4FEE\u6539":"\u63D2\u4E0A\u7559\u8A00\u677F":"\u767B\u5F55\u540E\u53D1\u5E03"))),m==="history"&&k.default.createElement("section",{"aria-label":"\u5168\u90E8\u7559\u8A00"},v?k.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u7559\u8A00\u2026"):k.default.createElement(k.default.Fragment,null,w?.length===0&&k.default.createElement("p",null,"\u8FD8\u6CA1\u6709\u7559\u8A00\uFF0C\u6765\u7559\u4E0B\u7B2C\u4E00\u53E5\u8BDD\u5427\u3002"),w?.map(J=>k.default.createElement("button",{className:"acv-message-history-item",key:J.id,type:"button",onClick:()=>{u(J),c("detail"),W(!1)}},k.default.createElement("strong",null,J.author.displayName),k.default.createElement("span",null,J.body))),k.default.createElement("div",{className:"acv-message-actions"},k.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:()=>Q()},"\u56DE\u5230\u6700\u65B0"),G&&k.default.createElement("button",{className:"acv-btn ghost",type:"button",onClick:()=>Q(G)},"\u4E0B\u4E00\u9875")))),m==="detail"&&p&&k.default.createElement("article",null,r[p.style]&&k.default.createElement("img",{className:"acv-message-detail-preview",src:r[p.style],alt:p.style==="plank"?"\u539F\u6728\u62FC\u677F":"\u5C0F\u5C4B\u5F62\u6728\u724C"}),k.default.createElement("p",{className:"acv-message-fulltext"},p.body),k.default.createElement("p",{className:"acv-modal-sub"},p.author.displayName," \xB7 ",new Date(p.createdAt).toLocaleString("zh-CN")),k.default.createElement("div",{className:"acv-message-actions"},Ht&&k.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:n.busy||!n.mineReady,onClick:I},"\u7F16\u8F91\u6211\u7684\u7559\u8A00"),t?.role==="admin"&&k.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:n.busy,onClick:()=>W(!0)},"\u5220\u9664\u7559\u8A00")),F&&k.default.createElement("div",{role:"alert"},k.default.createElement("p",null,"\u786E\u5B9A\u79FB\u9664\u8FD9\u5757\u7559\u8A00\u677F\uFF1F\u8BE5\u8D26\u53F7\u4E4B\u540E\u4E0D\u80FD\u91CD\u65B0\u653E\u7F6E\u3002"),k.default.createElement("div",{className:"acv-message-actions"},k.default.createElement("button",{className:"acv-btn ghost",disabled:n.busy,onClick:()=>W(!1)},"\u53D6\u6D88"),k.default.createElement("button",{className:"acv-btn ghost",disabled:n.busy,onClick:De},"\u786E\u5B9A\u5220\u9664")))),(P||n.error)&&k.default.createElement("div",{role:"alert"},k.default.createElement("p",null,P||n.error),k.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:n.busy,onClick:()=>{T(""),n.store.refresh()}},"\u5237\u65B0\u7559\u8A00"),t&&k.default.createElement("button",{className:"acv-btn ghost",type:"button",disabled:n.busy,onClick:()=>j(!0)},"\u91CD\u65B0\u767B\u5F55"))),H&&k.default.createElement(ra,{api:e,initialMode:"login",onClose:()=>j(!1),onDone:J=>{j(!1),A.current=!1,i(J)}}))}var la=null;async function Tn(e){let a=await fetch(e.assetUrl("/worlds/manifest.json"));if(!a.ok)throw new Error(`\u7A7A\u95F4\u6E05\u5355\u52A0\u8F7D\u5931\u8D25\uFF08HTTP ${a.status}\uFF09`);let t=await a.json();return Array.isArray(t.worlds)?t.worlds:[]}function Pt(e){let[a,t]=q.default.useState(null),[n,s]=q.default.useState("");return q.default.useEffect(()=>{let o=!1;return Tn(e).then(i=>{o||(t(i),s(""))}).catch(i=>{o||s(i.message)}),()=>{o=!0}},[e]),{worlds:a,error:n}}var Ve=null;function zn(e){return window.AchoverseWorld?.messageBoardsVersion===2?Promise.resolve():(Ve||(Ve=new Promise((a,t)=>{let n=document.createElement("script");n.src=e.assetUrl("/assets/world.js?v=messages-2-text-20261111"),n.onload=()=>window.AchoverseWorld?.messageBoardsVersion===2?a():t(new Error("\u573A\u666F\u7248\u672C\u4E0D\u5339\u914D\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")),n.onerror=()=>t(new Error("3D \u5F15\u64CE\u52A0\u8F7D\u5931\u8D25\uFF0C\u8BF7\u5237\u65B0\u91CD\u8BD5")),document.head.appendChild(n)}),Ve.catch(()=>{Ve=null})),Ve)}function Pn({api:e,world:a,onOpen:t}){return q.default.createElement("button",{type:"button",className:"acv-space-card acv-world-card","data-world-slug":a.slug,onClick:()=>{la=a.slug,t(a.slug)}},a.cover&&q.default.createElement("img",{className:"acv-world-cover",src:e.assetUrl(a.cover),alt:"",loading:"lazy"}),q.default.createElement("span",{className:"acv-world-card-title"},a.title))}function Dt({api:e,onOpenWorld:a}){let{worlds:t,error:n}=Pt(e),s=q.default.useRef(null);return q.default.useEffect(()=>{if(!t||!la)return;Array.from(s.current?.querySelectorAll("[data-world-slug]")||[]).find(i=>i.dataset.worldSlug===la)?.focus({preventScroll:!0}),la=null},[t]),q.default.createElement("div",{className:"acv-zone"},q.default.createElement("div",{className:"acv-section-head"},q.default.createElement("h2",{className:"acv-section-title"},"3D\u7A7A\u95F4"),q.default.createElement("span",{className:"acv-section-note"},"Web3D \u5236\u4F5C\u7684\u53EF\u4EA4\u4E92\u7A7A\u95F4\uFF0C\u70B9\u5F00\u4E00\u4E2A\u8FDB\u53BB\u901B\u901B")),n&&q.default.createElement("div",{className:"acv-empty"},n),!t&&!n&&q.default.createElement("div",{className:"acv-skeleton",style:{height:200}}),t&&t.length===0&&q.default.createElement("div",{className:"acv-panel"},q.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u7A7A\u95F4\u3002")),q.default.createElement("div",{className:"acv-zone-grid acv-world-grid",ref:s},t?.map(o=>q.default.createElement(Pn,{key:o.slug,api:e,world:o,onOpen:a}))))}function Dn({api:e,world:a,notify:t,data:n,panelOpen:s,onCloud:o,onMessage:i,cloudFocused:r,onBoardPreviews:l}){let m=q.default.useRef(null),[c,p]=q.default.useState("loading"),u=q.default.useRef(null),d=q.default.useRef(null);return d.current={data:n,panelOpen:s,notify:t,onCloud:o,onMessage:i,onBoardPreviews:l},q.default.useEffect(()=>{u.current?.setCloudFocused?.(r)},[r,c]),q.default.useEffect(()=>{u.current?.updateMessages?.(n.messages,n.highlightId),u.current?.setInputEnabled?.(!s)},[n.messages,n.highlightId,s,c]),q.default.useEffect(()=>{let h=null,b=!1;return zn(e).then(()=>{b||!m.current||(h=window.AchoverseWorld.mount(a.slug,m.current,{assetUrl:S=>e.assetUrl(S),onBoardPreviews:S=>d.current.onBoardPreviews(S),onEvent:S=>d.current.notify?.(S),onCloud:()=>d.current.onCloud(),onMessage:S=>d.current.onMessage(S)}),u.current=h,h.updateMessages?.(d.current.data.messages),h.setInputEnabled?.(!d.current.panelOpen),p("ready"))}).catch(S=>{b||p(S.message||"error")}),()=>{b=!0,u.current=null,h?.()}},[e,a.slug]),q.default.createElement("div",{className:"acv-world-live"},q.default.createElement("div",{className:"acv-world-canvas",ref:m},c!=="ready"&&q.default.createElement("div",{className:"acv-world-loading"},c==="loading"?"\u6B63\u5728\u52A0\u8F7D 3D \u5F15\u64CE\u4E0E\u573A\u666F\u2026":c)),q.default.createElement("div",{className:"acv-world-hint"},"\u62D6\u62FD\u65CB\u8F6C \xB7 \u6EDA\u8F6E\u7F29\u653E \xB7 \u70B9\u4E00\u70B9\u6302\u949F\u548C\u6728\u95E8"))}function At({api:e,slug:a,onBack:t,notify:n,me:s,onLogin:o}){let{worlds:i,error:r}=Pt(e),l=i?.find(A=>A.slug===a),m=Ct(e,a,s),[c,p]=q.default.useState(null),[u,d]=q.default.useState(!1),[h,b]=q.default.useState({}),S=q.default.useRef(c);S.current=c;let O=q.default.useRef(null),z=q.default.useRef(null);return q.default.useEffect(()=>{let A=document.body.style.overflow,P=document.querySelector(".acv-root"),T=P?.inert;document.body.style.overflow="hidden",P&&(P.inert=!0),z.current?.focus();let H=j=>{j.key==="Escape"&&!S.current&&z.current?.click()};return document.addEventListener("keydown",H),()=>{document.removeEventListener("keydown",H),document.body.style.overflow=A,P&&(P.inert=T)}},[]),(0,zt.createPortal)(q.default.createElement("div",{ref:O,className:"acv-world-fullscreen",role:"dialog","aria-modal":"true","aria-label":l?.title||"3D\u7A7A\u95F4",onKeyDown:A=>{if(A.key==="Tab"&&!c){let P=[...O.current.querySelectorAll("button:not(:disabled)")],T=P[0],H=P.at(-1);A.shiftKey&&document.activeElement===T?(A.preventDefault(),H?.focus()):!A.shiftKey&&document.activeElement===H&&(A.preventDefault(),T?.focus())}}},q.default.createElement("button",{ref:z,type:"button",className:"acv-world-back",onClick:t},"\u2190 \u8FD4\u56DE 3D\u7A7A\u95F4"),r&&q.default.createElement("div",{className:"acv-world-loading",role:"alert"},r),!i&&!r&&q.default.createElement("div",{className:"acv-world-loading",role:"status"},"\u6B63\u5728\u52A0\u8F7D\u7A7A\u95F4\u2026"),i&&!l&&q.default.createElement("div",{className:"acv-world-loading"},"\u6CA1\u6709\u627E\u5230\u8FD9\u4E2A\u7A7A\u95F4\u3002"),l&&(l.status==="ready"?q.default.createElement(Dn,{api:e,world:l,notify:n,data:m,panelOpen:!!c,cloudFocused:u,onBoardPreviews:b,onCloud:()=>p({selected:null}),onMessage:A=>{let P=m.messages.find(T=>T.id===A);P&&p({selected:P})}}):q.default.createElement("div",{className:"acv-world-loading"},"\u8FD9\u4E2A\u7A7A\u95F4\u6682\u65F6\u65E0\u6CD5\u8FDB\u5165\u3002")),l&&q.default.createElement("button",{type:"button",className:"acv-cloud-keyboard-entry","aria-label":"\u4E91\u6735\uFF1A\u6253\u5F00\u7559\u8A00\u677F",onFocus:()=>d(!0),onBlur:()=>d(!1),onClick:()=>p({selected:null})},"\u6253\u5F00\u4E91\u6735\u7559\u8A00\u677F"),c&&q.default.createElement(Tt,{api:e,slug:a,me:s,data:m,selected:c.selected,previews:h,onClose:()=>p(null),onLogin:o})),document.body)}var te=Z(require("react"),1);function Lt({api:e,me:a,onDm:t,onOpenPost:n}){let[s,o]=te.default.useState(""),[i,r]=te.default.useState(null),[l,m]=te.default.useState(!1),[c,p]=te.default.useState(!1),u=te.default.useRef(null);return te.default.useEffect(()=>{if(!l)return;let d=h=>{u.current&&!u.current.contains(h.target)&&m(!1)};return document.addEventListener("click",d),()=>document.removeEventListener("click",d)},[l]),te.default.useEffect(()=>{let d=s.trim();if(d.length===0){r(null);return}let h=setTimeout(async()=>{p(!0);try{let b=await e.search(d);r(b.posts||[]),m(!0)}catch{r([])}finally{p(!1)}},280);return()=>clearTimeout(h)},[e,s]),te.default.createElement("div",{className:"acv-search",ref:u},te.default.createElement("span",{className:"acv-search-icon","aria-hidden":"true"},te.default.createElement("svg",{width:"14",height:"14",viewBox:"0 0 16 16",fill:"none",focusable:"false"},te.default.createElement("circle",{cx:"7",cy:"7",r:"4.6",stroke:"currentColor",strokeWidth:"1.6"}),te.default.createElement("path",{d:"M10.5 10.5 14 14",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round"}))),te.default.createElement("input",{className:"acv-search-input",type:"text",value:s,placeholder:"\u641C\u7D22\u5E16\u5B50","aria-label":"\u641C\u7D22\u5E16\u5B50",autoComplete:"off",spellCheck:!1,onChange:d=>o(d.target.value),onFocus:()=>s.trim()&&m(!0)}),l&&te.default.createElement("div",{className:"acv-search-panel"},c&&te.default.createElement("div",{className:"acv-search-empty"},"\u641C\u7D22\u4E2D\u2026"),!c&&i?.length===0&&te.default.createElement("div",{className:"acv-search-empty"},"\u6CA1\u6709\u627E\u5230\u300C",s.trim(),"\u300D"),i?.map(d=>te.default.createElement("button",{key:d.id,type:"button",className:"acv-search-item",onClick:()=>{m(!1),o(""),n(d.id)}},te.default.createElement("span",{className:"acv-search-title"},d.title),te.default.createElement("span",{className:"acv-search-meta"},d.spaceSlug," \xB7"," ",te.default.createElement(ee,{api:e,me:a,handle:d.author?.handle,onDm:t},te.default.createElement("span",null,d.author?.displayName||d.author?.handle))," ","\xB7 ",ce(d.createdAt))))))}var N=Z(require("react"),1);function ca({title:e,note:a,children:t}){return N.default.createElement("div",{className:"acv-settings-section"},N.default.createElement("div",{className:"acv-section-head"},N.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},e),a&&N.default.createElement("span",{className:"acv-section-note"},a)),t)}function $t({api:e,me:a,onBack:t,onRefreshMe:n,notify:s}){let[o,i]=N.default.useState(a?.displayName||""),[r,l]=N.default.useState(a?.bio||""),[m,c]=N.default.useState(a?.allowDm!==!1),[p,u]=N.default.useState(a?.avatarText||""),[d,h]=N.default.useState(a?.avatarColor||"#F53FA6"),[b,S]=N.default.useState(a?.avatarColorTo||"#FF7A45"),[O,z]=N.default.useState(""),[A,P]=N.default.useState(""),[T,H]=N.default.useState(""),[j,F]=N.default.useState(""),[W,f]=N.default.useState(""),[K,w]=N.default.useState("");if(N.default.useEffect(()=>{i(a?.displayName||""),l(a?.bio||""),c(a?.allowDm!==!1),u(a?.avatarText||""),h(a?.avatarColor||"#F53FA6"),S(a?.avatarColorTo||"#FF7A45")},[a]),!a)return N.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");async function y(v,x,Y){F(v),f("");try{await x(),s(Y),await n?.()}catch(G){f(G.message)}finally{F("")}}return N.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:820}},N.default.createElement("div",null,N.default.createElement("button",{type:"button",className:"acv-back",onClick:t},"\u2190 \u8FD4\u56DE\u9996\u9875")),W&&N.default.createElement("div",{className:"acv-error"},W),N.default.createElement("div",{className:"acv-panel",style:{padding:"20px 22px"}},N.default.createElement("div",{className:"acv-section-head"},N.default.createElement("h2",{className:"acv-section-title"},"\u8D26\u53F7\u8BBE\u7F6E"),N.default.createElement("span",{className:"acv-section-note"},"@",a.handle)),N.default.createElement(ca,{title:"\u8D44\u6599",note:"\u6635\u79F0\u548C\u7B80\u4ECB\u4F1A\u663E\u793A\u5728\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u4E0A"},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u6635\u79F0"),N.default.createElement("input",{className:"acv-input",value:o,maxLength:24,onChange:v=>i(v.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u7B80\u4ECB"),N.default.createElement("textarea",{className:"acv-textarea",style:{minHeight:80},value:r,maxLength:200,onChange:v=>l(v.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u63A5\u6536\u79C1\u4FE1"),N.default.createElement("div",{className:"acv-zone-picker"},N.default.createElement("button",{type:"button",className:m?"acv-zone-option is-active":"acv-zone-option",onClick:()=>c(!0)},"\u5141\u8BB8\u522B\u4EBA\u7ED9\u6211\u53D1\u79C1\u4FE1"),N.default.createElement("button",{type:"button",className:m?"acv-zone-option":"acv-zone-option is-active",onClick:()=>c(!1)},"\u5173\u95ED\u79C1\u4FE1"))),N.default.createElement("div",{className:"acv-row"},N.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:j==="profile",onClick:()=>y("profile",()=>e.updateProfile({displayName:o,bio:r,allowDm:m}),"\u8D44\u6599\u5DF2\u4FDD\u5B58")},j==="profile"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8D44\u6599"))),N.default.createElement(ca,{title:"\u5934\u50CF",note:"\u4E24\u4E2A\u6E10\u53D8\u8272 + \u6700\u591A 4 \u4E2A\u5B57\uFF0C\u5E16\u5B50\u548C\u60AC\u6D6E\u5361\u90FD\u4F1A\u7528"},N.default.createElement("div",{className:"acv-avatar-editor"},N.default.createElement("span",{className:"acv-avatar acv-avatar--lg",style:re({avatarColor:d,avatarColorTo:b,avatarText:p})},se({displayName:o,handle:a.handle,avatarText:p})),N.default.createElement("div",{className:"acv-avatar-fields"},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u5934\u50CF\u6587\u5B57\uFF08\u7559\u7A7A\u7528\u6635\u79F0\u9996\u5B57\uFF0C\u6700\u591A 4 \u4E2A\u5B57\uFF09"),N.default.createElement("input",{className:"acv-input",value:p,maxLength:4,placeholder:se({displayName:o,handle:a.handle}),onChange:v=>u(v.target.value)}),N.default.createElement("span",{className:"acv-field-hint"},[...p].length,"/4")),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u6E10\u53D8\u8272"),N.default.createElement("div",{className:"acv-color-row"},N.default.createElement("input",{type:"color",className:"acv-color",value:d,onChange:v=>h(v.target.value)}),N.default.createElement("input",{type:"color",className:"acv-color",value:b,onChange:v=>S(v.target.value)}),N.default.createElement("button",{type:"button",className:"acv-btn",onClick:()=>{h("#F53FA6"),S("#FF7A45")}},"\u6062\u590D\u9ED8\u8BA4\u914D\u8272"))))),N.default.createElement("div",{className:"acv-row"},N.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:j==="avatar",onClick:()=>y("avatar",()=>e.updateProfile({avatarText:p,avatarColor:d,avatarColorTo:b}),"\u5934\u50CF\u5DF2\u4FDD\u5B58")},j==="avatar"?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u5934\u50CF"))),N.default.createElement(ca,{title:"\u90AE\u7BB1",note:a.emailVerified?"\u5DF2\u9A8C\u8BC1":"\u672A\u9A8C\u8BC1\uFF0C\u9A8C\u8BC1\u540E\u624D\u80FD\u53D1\u5E16\u8BC4\u8BBA"},N.default.createElement("p",{className:"acv-space-sub",style:{marginBottom:10}},"\u5F53\u524D\u90AE\u7BB1\uFF1A",N.default.createElement("strong",null,a.email||"\uFF08\u6CA1\u6709\uFF09")),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",null,"\u6362\u6210\u65B0\u90AE\u7BB1"),N.default.createElement("div",{className:"acv-inline"},N.default.createElement("input",{className:"acv-input",type:"email",placeholder:"new@example.com",value:O,onChange:v=>z(v.target.value)}),N.default.createElement("button",{type:"button",className:"acv-btn",disabled:j==="email"||!O.trim(),onClick:()=>y("email",async()=>{(await e.requestEmailChange(O.trim()))?.verifyLink&&s("\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7"),z("")},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u5230\u65B0\u90AE\u7BB1\uFF0C\u70B9\u5F00\u94FE\u63A5\u624D\u751F\u6548")},"\u53D1\u9001\u9A8C\u8BC1"))),!a.emailVerified&&N.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:j==="resend",onClick:()=>y("resend",async()=>{let v=await e.resend();if(v?.verifyLink)throw new Error(`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u94FE\u63A5\uFF1A${v.verifyLink}`)},"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u91CD\u53D1")},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6")),N.default.createElement(ca,{title:"\u5BC6\u7801",note:"\u81F3\u5C11 8 \u4F4D"},N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",{htmlFor:"account-password"},"\u5F53\u524D\u5BC6\u7801"),N.default.createElement(ye,{id:"account-password",autoComplete:"current-password",value:A,onChange:v=>P(v.target.value)})),N.default.createElement("div",{className:"acv-field"},N.default.createElement("label",{htmlFor:"account-new-password"},"\u65B0\u5BC6\u7801"),N.default.createElement(ye,{id:"account-new-password",autoComplete:"new-password",value:T,onChange:v=>H(v.target.value)})),N.default.createElement("div",{className:"acv-row"},N.default.createElement("button",{type:"button",className:"acv-btn primary",disabled:j==="password"||!A||!T,onClick:()=>y("password",async()=>{await e.changePassword({currentPassword:A,newPassword:T}),P(""),H("")},"\u5BC6\u7801\u5DF2\u66F4\u65B0")},j==="password"?"\u66F4\u65B0\u4E2D\u2026":"\u66F4\u65B0\u5BC6\u7801")),N.default.createElement("p",{className:"acv-field-hint"},"\u5FD8\u4E86\u5F53\u524D\u5BC6\u7801\uFF1F\u53EF\u4EE5\u7ED9 ",a.email||"\uFF08\u6CA1\u6709\u90AE\u7BB1\uFF09"," \u53D1\u4E00\u5C01\u91CD\u7F6E\u90AE\u4EF6\uFF0C\u70B9\u94FE\u63A5\u8BBE\u65B0\u5BC6\u7801\u3002"),K&&N.default.createElement("div",{className:"acv-notice"},K),N.default.createElement("div",{className:"acv-row"},N.default.createElement("button",{type:"button",className:"acv-btn ghost",disabled:j==="reset-mail"||!a.email,onClick:async()=>{F("reset-mail"),f(""),w("");try{let v=await e.forgotPassword(a.email);w(v?.verifyLink?`\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF08\u6CA1\u914D SMTP\uFF09\uFF0C\u91CD\u7F6E\u94FE\u63A5\uFF1A${v.verifyLink}`:"\u91CD\u7F6E\u90AE\u4EF6\u5DF2\u53D1\u9001\uFF0C\u53BB\u90AE\u7BB1\u70B9\u94FE\u63A5\u8BBE\u7F6E\u65B0\u5BC6\u7801\u3002")}catch(v){f(v.message)}finally{F("")}}},j==="reset-mail"?"\u53D1\u9001\u4E2D\u2026":"\u53D1\u90AE\u4EF6\u91CD\u7F6E\u5BC6\u7801")))))}var M=Z(require("react"),1);function An(e,a){if(!e||e.thread?.id!==a.thread?.id)return a;let t=new Map(e.messages.map(s=>[s.id,s]));for(let s of a.messages)t.set(s.id,s);let n=[...t.values()].sort((s,o)=>s.createdAt-o.createdAt||(s.id<o.id?-1:1));return{...a,messages:n}}function Ot({api:e,me:a,initialThreadId:t,onBack:n,onDm:s,notify:o}){let[i,r]=M.default.useState(null),[l,m]=M.default.useState(t||null),[c,p]=M.default.useState(null),[u,d]=M.default.useState(""),[h,b]=M.default.useState(!1),[S,O]=M.default.useState(!1),[z,A]=M.default.useState(""),P=M.default.useRef(null),T=M.default.useCallback(()=>{a&&e.dmThreads().then(f=>{r(f.threads),!l&&f.threads.length&&m(f.threads[0].id)}).catch(f=>A(f.message))},[e,a,l]),H=M.default.useCallback(f=>{p(K=>An(K,f))},[]);M.default.useEffect(()=>{T()},[T]),M.default.useEffect(()=>{l&&e.dmThread(l).then(f=>{H(f),A(""),T()}).catch(f=>A(f.message))},[e,l,H,T]),M.default.useEffect(()=>{if(!a||!l)return;let f=setInterval(()=>{document.hidden||e.dmThread(l).then(K=>{H(K),T()}).catch(()=>{})},8e3);return()=>clearInterval(f)},[e,a,l,H,T]),M.default.useEffect(()=>{let f=P.current;f&&(f.scrollTop=f.scrollHeight)},[c]);async function j(){let f=u.trim();if(!(!f||!l)){b(!0);try{await e.dmSend(l,f),d("");let K=await e.dmThread(l);H(K),T()}catch(K){o(K.message,{error:!0})}finally{b(!1)}}}async function F(){let f=c?.messages?.[0];if(!(!f||!l||S)){O(!0);try{let K=await e.dmThread(l,f.createdAt);p(w=>{if(!w)return K;let y=new Map(K.messages.map(x=>[x.id,x]));for(let x of w.messages)y.set(x.id,x);let v=[...y.values()].sort((x,Y)=>x.createdAt-Y.createdAt||(x.id<Y.id?-1:1));return{...w,messages:v,total:K.total}})}catch(K){o(K.message,{error:!0})}finally{O(!1)}}}if(!a)return M.default.createElement("div",{className:"acv-loading",style:{paddingTop:40}},"\u8BF7\u5148\u767B\u5F55");let W=!!(c&&c.messages.length<c.total);return M.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:1040}},M.default.createElement("div",null,M.default.createElement("button",{type:"button",className:"acv-back",onClick:n},"\u2190 \u8FD4\u56DE\u9996\u9875")),z&&M.default.createElement("div",{className:"acv-error"},z),M.default.createElement("div",{className:"acv-dm-layout"},M.default.createElement("aside",{className:"acv-panel acv-dm-list"},M.default.createElement("div",{className:"acv-section-head"},M.default.createElement("h3",{className:"acv-section-title",style:{fontSize:15}},"\u79C1\u4FE1"),M.default.createElement("span",{className:"acv-section-note"},i?.length||0)),i?.length===0&&M.default.createElement("div",{className:"acv-empty"},"\u8FD8\u6CA1\u6709\u79C1\u4FE1"),i?.map(f=>M.default.createElement("button",{key:f.id,type:"button",className:f.id===l?"acv-dm-item is-active":"acv-dm-item",onClick:()=>m(f.id)},M.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:re(f.other)},se(f.other||{})),M.default.createElement("span",{className:"acv-dm-main"},M.default.createElement("span",{className:"acv-dm-name"},M.default.createElement(ee,{api:e,me:a,handle:f.other?.handle,onDm:s},M.default.createElement("span",null,f.other?.displayName||f.other?.handle)),f.unread>0&&M.default.createElement("span",{className:"acv-badge"},f.unread)),M.default.createElement("span",{className:"acv-dm-preview"},f.lastMessage?.body||"\u8FD8\u6CA1\u6709\u6D88\u606F"))))),M.default.createElement("section",{className:"acv-panel acv-dm-pane"},!c&&M.default.createElement("div",{className:"acv-empty"},"\u9009\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB"),c&&M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"acv-dm-head"},M.default.createElement("span",{className:"acv-avatar acv-avatar--sm",style:re(c.thread.other)},se(c.thread.other||{})),M.default.createElement(ee,{api:e,me:a,handle:c.thread.other?.handle,onDm:s},M.default.createElement("span",{style:{fontWeight:600}},c.thread.other?.displayName),M.default.createElement("span",{className:"acv-member-meta"},"@",c.thread.other?.handle))),M.default.createElement("div",{className:"acv-dm-messages",ref:P},W&&M.default.createElement("button",{type:"button",className:"acv-dm-more",disabled:S,onClick:F},S?"\u52A0\u8F7D\u4E2D\u2026":"\u52A0\u8F7D\u66F4\u65E9\u7684\u6D88\u606F"),c.messages.length===0&&M.default.createElement("div",{className:"acv-empty"},"\u6253\u4E2A\u62DB\u547C\u5427"),c.messages.map(f=>M.default.createElement("div",{key:f.id,className:f.mine?"acv-dm-msg is-mine":"acv-dm-msg"},M.default.createElement("div",{className:"acv-dm-bubble"},f.body),M.default.createElement("div",{className:"acv-dm-time"},ce(f.createdAt))))),M.default.createElement("div",{className:"acv-dm-composer"},M.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:u,placeholder:"\u5199\u70B9\u4EC0\u4E48\u2026\uFF08Enter \u53D1\u9001\uFF09",onChange:f=>d(f.target.value),onKeyDown:f=>{f.key==="Enter"&&!f.shiftKey&&(f.preventDefault(),j())}}),M.default.createElement("button",{type:"button",className:"acv-chat-send",disabled:h||!u.trim(),onClick:j,"aria-label":"\u53D1\u9001"},M.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},M.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"}))))))))}var oe=Z(require("react"),1);function It({api:e,token:a,onDone:t,notify:n}){let[s,o]=oe.default.useState(""),[i,r]=oe.default.useState(""),[l,m]=oe.default.useState(!1),[c,p]=oe.default.useState("");async function u(d){if(d.preventDefault(),s!==i)return p("\u4E24\u6B21\u8F93\u5165\u4E0D\u4E00\u81F4");m(!0),p("");try{await e.resetPassword({token:a,password:s}),n("\u5BC6\u7801\u5DF2\u91CD\u7F6E\uFF0C\u8BF7\u7528\u7528\u6237\u540D\u6216\u90AE\u7BB1\u548C\u65B0\u5BC6\u7801\u767B\u5F55"),t()}catch(h){p(h.message)}finally{m(!1)}}return oe.default.createElement("div",{className:"acv-post-wrap",style:{maxWidth:460,paddingTop:40}},oe.default.createElement("div",{className:"acv-panel",style:{padding:"24px"}},oe.default.createElement("h2",{className:"acv-section-title"},"\u8BBE\u7F6E\u65B0\u5BC6\u7801"),oe.default.createElement("p",{className:"acv-modal-sub"},"\u91CD\u7F6E\u540E\u6240\u6709\u5DF2\u767B\u5F55\u8BBE\u5907\u90FD\u4F1A\u9000\u51FA\u3002"),c&&oe.default.createElement("div",{className:"acv-error"},c),oe.default.createElement("form",{onSubmit:u},oe.default.createElement("div",{className:"acv-field"},oe.default.createElement("label",{htmlFor:"reset-password"},"\u65B0\u5BC6\u7801"),oe.default.createElement(ye,{id:"reset-password",autoComplete:"new-password",value:s,onChange:d=>o(d.target.value)})),oe.default.createElement("div",{className:"acv-field"},oe.default.createElement("label",{htmlFor:"reset-confirm"},"\u518D\u8F93\u4E00\u6B21"),oe.default.createElement(ye,{id:"reset-confirm",autoComplete:"new-password",value:i,onChange:d=>r(d.target.value)})),oe.default.createElement("div",{className:"acv-row"},oe.default.createElement("button",{type:"submit",className:"acv-btn primary",disabled:l||s.length<8},l?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u65B0\u5BC6\u7801")))))}function Ln({me:e,mode:a,api:t,emailNotice:n,onDsh:s,onFeedback:o,onAuth:i,onLogout:r,onHome:l,onResend:m,onAdmin:c,onAccount:p,onDm:u,onDmUser:d,dmUnread:h=0,onOpenPost:b,tabs:S,activeTab:O,onSelectTab:z}){let[A,P]=C.default.useState(!1);return C.default.useEffect(()=>{if(!A)return;let T=()=>P(!1);return window.addEventListener("click",T),()=>window.removeEventListener("click",T)},[A]),C.default.createElement("div",{className:"acv-topbar"},C.default.createElement("div",{className:"acv-tabs"},S.map(T=>C.default.createElement("button",{key:T.key,type:"button",className:O===T.key?"acv-tab is-active":"acv-tab",onClick:()=>z(T.key)},T.label))),C.default.createElement(Lt,{api:t,me:e,onDm:d,onOpenPost:b}),C.default.createElement("div",{className:"acv-topbar-grow"}),C.default.createElement("div",{className:"acv-topbar-right"},C.default.createElement("button",{type:"button",className:"acv-btn ghost",onClick:o},"\u53CD\u9988"),a==="plugin"&&C.default.createElement("button",{type:"button",className:"acv-dsh",onClick:s,title:"\u548C DSH \u804A\u804A\u8FD9\u4E2A\u793E\u533A"},C.default.createElement("span",{className:"acv-dsh-dot"}),"DSH\u52A9\u624B"),a==="plugin"&&C.default.createElement("span",{className:"acv-divider"}),e?C.default.createElement("div",{className:"acv-relative"},C.default.createElement("button",{type:"button",className:"acv-user",onClick:T=>{T.stopPropagation(),P(H=>!H)}},C.default.createElement(ee,{api:t,me:e,handle:e.handle,disabled:A},C.default.createElement("span",{className:"acv-avatar",style:re(e)},se(e)),C.default.createElement("span",{className:"acv-user-name"},e.displayName||e.handle)),C.default.createElement("span",{className:"acv-caret"},"\u25BE")),A&&C.default.createElement("div",{className:"acv-menu",onClick:T=>T.stopPropagation()},C.default.createElement("div",{className:"acv-menu-note"},"@",e.handle," \xB7 ",e.role==="admin"?"\u7BA1\u7406\u5458":"\u6210\u5458"),C.default.createElement("div",{className:"acv-menu-group"},"\u4E2A\u4EBA\u7BA1\u7406"),C.default.createElement("button",{type:"button",onClick:()=>{P(!1),p()}},"\u8D26\u53F7\u8BBE\u7F6E"),C.default.createElement("button",{type:"button",onClick:()=>{P(!1),u()}},"\u79C1\u4FE1",h>0?` \xB7 ${h}`:""),!e.emailVerified&&C.default.createElement("button",{type:"button",onClick:()=>{P(!1),m()}},"\u91CD\u65B0\u53D1\u9001\u9A8C\u8BC1\u90AE\u4EF6"),e.role==="admin"&&C.default.createElement(C.default.Fragment,null,C.default.createElement("div",{className:"acv-menu-group"},"\u7BA1\u7406\u5458"),C.default.createElement("button",{type:"button",onClick:()=>{P(!1),c()}},"\u793E\u533A\u7BA1\u7406")),C.default.createElement("div",{className:"acv-menu-group"}),C.default.createElement("button",{type:"button",onClick:()=>{P(!1),r()}},"\u9000\u51FA\u767B\u5F55"))):C.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>i("login")},"\u767B\u5F55")),n&&C.default.createElement("div",{style:{display:"none"}},n))}function Mt({mode:e="site",base:a="",tokenStore:t,onDsh:n}){let s=C.default.useMemo(()=>Oa({base:a,credentials:e==="site"?"same-origin":"omit",token:t?.get()||null,onToken:I=>t?.set(I)}),[a,e,t]),[o,i]=C.default.useState(null),[r,l]=C.default.useState(null),[m,c]=C.default.useState("loading"),[p,u]=C.default.useState({name:"home"}),[d,h]=C.default.useState("home"),[b,S]=C.default.useState(0),[O,z]=C.default.useState(!1),[A,P]=C.default.useState(null),[T,H]=C.default.useState(null),[j,F]=C.default.useState(0),W=C.default.useRef(0),f=C.default.useCallback((I,{error:Q=!1}={})=>{H({text:I,error:Q,key:Date.now()})},[]);C.default.useEffect(()=>{if(!T)return;let I=setTimeout(()=>H(null),3200);return()=>clearTimeout(I)},[T]);let K=C.default.useCallback(async()=>{let I=++W.current;try{let Q=await s.bootstrap();if(I!==W.current)return;i(Q.account||null),l(Q.home||null)}catch{I===W.current&&i(null)}finally{I===W.current&&c("ready")}},[s]);C.default.useEffect(()=>{K()},[K]),C.default.useEffect(()=>{if(e!=="site")return;let I=/^\/post\/([^/]+)$/.exec(window.location.pathname)?.[1];I&&u({name:"post",id:decodeURIComponent(I),from:{name:"home"}});let ge=new URLSearchParams(window.location.search).get("token");ge&&window.location.pathname.startsWith("/reset")&&u({name:"reset",token:ge})},[e]),C.default.useEffect(()=>{let I=()=>P("login");return window.addEventListener("achoverse:auth",I),()=>window.removeEventListener("achoverse:auth",I)},[]),C.default.useEffect(()=>{if(e!=="site")return;let I=new URLSearchParams(window.location.search),Q=I.get("token");if(!Q||!window.location.pathname.startsWith("/verify"))return;let ge=I.get("kind");(ge==="email"?s.confirmEmailChange(Q):s.verify(Q)).then(Me=>{i(Me.account||null),f(ge==="email"?"\u65B0\u90AE\u7BB1\u5DF2\u751F\u6548\uFF0C\u9A8C\u8BC1\u4E5F\u5B8C\u6210\u4E86":"\u90AE\u7BB1\u9A8C\u8BC1\u5B8C\u6210\uFF0C\u73B0\u5728\u53EF\u4EE5\u53D1\u5E16\u4E86"),window.history.replaceState({},"","/")}).catch(Me=>f(Me.message,{error:!0}))},[s,e,f]),C.default.useEffect(()=>{if(!o){S(0);return}let I=!1,Q=()=>s.dmUnread().then(De=>{I||S(De.unread||0)}).catch(()=>{});Q();let ge=setInterval(Q,3e4);return()=>{I=!0,clearInterval(ge)}},[s,o]);let w=async I=>{try{let Q=await s.dmOpenWith({targetId:I.id});u({name:"dm",threadId:Q.thread.id})}catch(Q){f(Q.message,{error:!0})}},y=I=>u({name:"space",slug:I}),v=(I,Q)=>u({name:"post",id:I,from:Q||{name:"home"}}),x=()=>{u({name:"home"}),F(I=>I+1),l(null)};return C.default.createElement("div",{className:e==="plugin"?"acv-root acv-root--panel":"acv-root"},C.default.createElement("div",{className:"acv-frame"},C.default.createElement(Ln,{me:o,mode:e,api:s,onOpenPost:v,onDsh:()=>{if(n)return n();window.dispatchEvent(new CustomEvent("achoverse:open-dsh"))},onFeedback:()=>z(!0),onAuth:P,onLogout:async()=>{try{await s.logout()}catch{}s.setToken(null),W.current+=1,i(null),c("ready"),f("\u5DF2\u7ECF\u9000\u51FA\u767B\u5F55"),x()},onHome:x,tabs:[{key:"home",label:"\u9996\u9875"},{key:"arvr",label:"AR/VR"},{key:"3dSpace",label:"3D\u7A7A\u95F4"}],activeTab:d,onSelectTab:I=>{h(I),u({name:"home"})},onAdmin:()=>u({name:"admin"}),onAccount:()=>u({name:"account"}),onDm:()=>u({name:"dm"}),onDmUser:w,dmUnread:b,onResend:async()=>{try{let I=await s.resend();f(I?.verifyLink?"\u90AE\u4EF6\u6CA1\u53D1\u51FA\u53BB\uFF0C\u9A8C\u8BC1\u94FE\u63A5\u5DF2\u5199\u5165\u670D\u52A1\u7AEF\u65E5\u5FD7":"\u9A8C\u8BC1\u90AE\u4EF6\u5DF2\u53D1\u9001")}catch(I){f(I.message,{error:!0})}}}),p.name==="home"&&d==="arvr"&&C.default.createElement(Nt,{api:s,zone:"arvr",title:"AR/VR \u4E13\u533A",note:"\u4E3B\u9898\u4E13\u533A\uFF1A\u53EA\u6536\u5F55 AR/VR \u76F8\u5173\u7684\u677F\u5757",onOpenSpace:y}),p.name==="home"&&d==="3dSpace"&&C.default.createElement(Dt,{api:s,onOpenWorld:I=>u({name:"3dWorld",slug:I})}),p.name==="home"&&d==="home"&&m!=="ready"&&C.default.createElement("div",{className:"acv-main"},C.default.createElement("div",{className:"acv-col"},C.default.createElement("div",{className:"acv-skeleton"}),C.default.createElement("div",{className:"acv-skeleton"}),C.default.createElement("div",{className:"acv-skeleton"})),C.default.createElement("div",{className:"acv-col"},C.default.createElement("div",{className:"acv-skeleton",style:{height:820}}))),p.name==="home"&&d==="home"&&m==="ready"&&C.default.createElement(Ka,{initialData:r,key:j,api:s,me:o,onOpenSpace:y,onOpenPost:I=>v(I,{name:"home"}),onDm:w}),p.name==="3dWorld"&&C.default.createElement(At,{api:s,slug:p.slug,onBack:()=>u({name:"home"}),notify:f,me:o,onLogin:I=>{W.current+=1,i(I),c("ready"),l(null)}}),p.name==="space"&&C.default.createElement(ft,{api:s,slug:p.slug,me:o,onBack:x,onOpenPost:I=>v(I,{name:"space",slug:p.slug}),onAuth:()=>P("login"),onDm:w,notify:f}),p.name==="reset"&&C.default.createElement(It,{api:s,token:p.token,notify:f,onDone:()=>{W.current+=1,s.setToken(null),i(null),S(0),c("ready"),window.history.replaceState({},"","/"),x(),P("login")}}),p.name==="account"&&C.default.createElement($t,{api:s,me:o,onBack:x,onRefreshMe:K,notify:f}),p.name==="dm"&&C.default.createElement(Ot,{api:s,me:o,initialThreadId:p.threadId,onBack:x,onDm:w,notify:f}),p.name==="admin"&&C.default.createElement(kt,{api:s,me:o,onDm:w,onBack:x,notify:f}),p.name==="post"&&C.default.createElement(xt,{api:s,id:p.id,me:o,backTo:p.from?.name==="space"?"space":"home",onDm:w,onBack:()=>p.from?.name==="space"?u({name:"space",slug:p.from.slug}):x(),onAuth:()=>P("login"),notify:f})),O&&C.default.createElement(yt,{key:o?.id||"guest",api:s,me:o,onClose:()=>z(!1),onAuth:()=>{z(!1),P("login")}}),A&&C.default.createElement(ra,{api:s,initialMode:A,onClose:()=>P(null),onDone:I=>{W.current+=1,i(I),c("ready"),P(null),l(null),x(),f("\u767B\u5F55\u6210\u529F")},notify:f}),T&&C.default.createElement("div",{className:T.error?"acv-toast is-error":"acv-toast"},T.text))}var _=Z(require("react"),1);function Ge(e,a=""){return{id:`${Date.now()}-${Math.random().toString(36).slice(2,6)}`,role:e,text:a,tools:[]}}async function $n({token:e,message:a,signal:t,onEvent:n}){let s=await fetch("/community/ai/chat",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e,message:a}),signal:t});if(!s.ok||!s.body){let l=`HTTP ${s.status}`;try{l=(await s.json())?.error||l}catch{}throw new Error(l)}let o=s.body.getReader(),i=new TextDecoder,r="";for(;;){let{value:l,done:m}=await o.read();if(m)break;r+=i.decode(l,{stream:!0});let c;for(;(c=r.indexOf(`

`))>=0;){let p=r.slice(0,c);r=r.slice(c+2);for(let u of p.split(`
`)){if(!u.startsWith("data:"))continue;let d=u.slice(5).trim();if(d)try{n(JSON.parse(d))}catch{}}}}}function _t({tokenStore:e,onClose:a,onLogin:t}){let[n,s]=_.default.useState(()=>[Ge("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),[o,i]=_.default.useState(""),[r,l]=_.default.useState(!1),[m,c]=_.default.useState(""),[p,u]=_.default.useState(()=>e?.get()||null),[d,h]=_.default.useState(""),[b,S]=_.default.useState(!1),[O,z]=_.default.useState(null),[A,P]=_.default.useState({}),[T,H]=_.default.useState(!1),j=_.default.useRef(null),F=_.default.useRef(null);_.default.useEffect(()=>()=>F.current?.abort(),[]),_.default.useEffect(()=>{let y=j.current;y&&(y.scrollTop=y.scrollHeight)},[n]),_.default.useEffect(()=>{let y=()=>{let x=e?.get()||null;x!==p&&(F.current?.abort(),s([Ge("assistant","\u6211\u662F DSH\u3002\u53EF\u4EE5\u95EE\u6211\u793E\u533A\u91CC\u6709\u4EC0\u4E48\uFF0C\u4E5F\u53EF\u4EE5\u8BA9\u6211\u53D1\u5E16\u3001\u5199\u8BC4\u8BBA\u3002")]),z(null),h(""),c(""),u(x))},v=setInterval(y,1500);return window.addEventListener("achoverse:token-changed",y),window.addEventListener("storage",y),()=>{clearInterval(v),window.removeEventListener("achoverse:token-changed",y),window.removeEventListener("storage",y)}},[p,e]),_.default.useEffect(()=>{if(!p)return;let y=!1;return fetch("/community/ai/history",{headers:{authorization:`Bearer ${p}`},cache:"no-store"}).then(v=>{if(!v.ok)throw new Error("\u5386\u53F2\u8BFB\u53D6\u5931\u8D25");return v.json()}).then(v=>{if(y)return;let x=(v?.messages||[]).map(Y=>({...Ge(Y.role,Y.text),id:`h-${Math.random().toString(36).slice(2,8)}`}));x.length&&s(x)}).catch(()=>{}),()=>{y=!0}},[p]);let W=y=>s(v=>{let x=[...v],Y={...x[x.length-1]};return x[x.length-1]=y(Y),x});async function f(y){let v=String(y??o).trim();if(!v||r)return;let x=e?.get();if(!x){c("\u5148\u767B\u5F55\u793E\u533A\uFF0C\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u8BF4\u8BDD");return}c(""),l(!0),i(""),h("");let Y=new AbortController;F.current=Y,s(G=>[...G,Ge("user",v),Ge("assistant","")]);try{await $n({token:x,message:v,signal:Y.signal,onEvent:G=>{e?.get()===x&&(G.type==="session"?h(G.sessionId):G.type==="question"?(z({callId:G.callId,questions:G.questions,sessionId:G.sessionId}),P({})):G.type==="text"?W(ue=>({...ue,text:ue.text?`${ue.text}
${G.text}`:G.text})):G.type==="tool"?W(ue=>({...ue,tools:G.phase==="call"?[...ue.tools,G.name]:ue.tools})):G.type==="error"&&c(G.error||"\u5BF9\u8BDD\u5931\u8D25"))}})}catch(G){G.name!=="AbortError"&&e?.get()===x&&c(G.message),/登录|401/.test(G.message)&&e?.get()===x&&(e?.set(null),u(null))}finally{F.current===Y&&(F.current=null),l(!1),S(!1),z(null)}}async function K(){if(!(!O||T)){H(!0),c("");try{let y=await fetch("/community/ai/answer",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e?.get(),sessionId:O.sessionId,callId:O.callId,answers:O.questions.map(x=>({id:x.id,selected:A[x.id]?.selected||[],...A[x.id]?.custom?.trim()?{custom:A[x.id].custom.trim()}:{}}))})}),v=await y.json();if(!y.ok)throw new Error(v.error||"\u56DE\u7B54\u5931\u8D25");z(null)}catch(y){c(y.message)}finally{H(!1)}}}async function w(){if(!(!d||b)){S(!0);try{let y=await fetch("/community/ai/stop",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:e?.get(),sessionId:d})}),v=await y.json();if(!y.ok)throw new Error(v.error||"\u505C\u6B62\u5931\u8D25");F.current?.abort()}catch(y){c(y.message)}finally{S(!1)}}}return _.default.createElement("div",{className:"acv-drawer",role:"dialog","aria-label":"DSH \u5BF9\u8BDD"},_.default.createElement("div",{className:"acv-drawer-head"},_.default.createElement("span",{className:"acv-dsh",style:{padding:"6px 14px"}},_.default.createElement("span",{className:"acv-dsh-dot"}),"DSH"),_.default.createElement("span",{style:{fontWeight:700}},"\u793E\u533A\u52A9\u624B"),_.default.createElement("span",{style:{flex:1}}),_.default.createElement("button",{type:"button",className:"acv-back",onClick:a,"aria-label":"\u5173\u95ED"},"\u2715")),_.default.createElement("div",{className:"acv-drawer-body",ref:j},n.map(y=>_.default.createElement("div",{key:y.id,className:`acv-chat ${y.role==="user"?"is-user":"is-agent"}`},y.tools?.length>0&&_.default.createElement("div",{className:"acv-chat-tools"},y.tools.map((v,x)=>_.default.createElement("span",{key:`${v}-${x}`,className:"acv-chip"},"\u8C03\u7528 ",v))),y.text&&(y.role==="assistant"?_.default.createElement("div",{className:"acv-chat-text acv-chat-text--md"},_.default.createElement(We,{text:y.text})):_.default.createElement("div",{className:"acv-chat-text"},y.text)),!y.text&&y.role==="assistant"&&r&&_.default.createElement("div",{className:"acv-chat-typing"},"\u2026"))),O&&_.default.createElement("div",{className:"acv-question-card",role:"group","aria-label":"DSH \u63D0\u95EE"},O.questions.map(y=>_.default.createElement("div",{key:y.id,className:"acv-question-item"},_.default.createElement("strong",null,y.header||"\u9700\u8981\u4F60\u7684\u9009\u62E9"),_.default.createElement("p",null,y.question),y.options?.map(v=>{let x=A[y.id]?.selected||[];return _.default.createElement("button",{key:v.label,type:"button",className:`acv-question-option${x.includes(v.label)?" is-selected":""}`,"aria-pressed":x.includes(v.label),onClick:()=>P(Y=>{let G=Y[y.id]||{selected:[],custom:""},ue=y.multiSelect?x.includes(v.label)?x.filter(I=>I!==v.label):[...x,v.label]:[v.label];return{...Y,[y.id]:{...G,selected:ue}}})},v.label,v.description&&_.default.createElement("small",null,v.description))}),_.default.createElement("input",{className:"acv-question-custom",value:A[y.id]?.custom||"",placeholder:"\u5176\u4ED6\u56DE\u7B54\uFF08\u53EF\u9009\uFF09","aria-label":`${y.question}\u7684\u81EA\u5B9A\u4E49\u56DE\u7B54`,onChange:v=>P(x=>({...x,[y.id]:{selected:x[y.id]?.selected||[],custom:v.target.value}}))}))),_.default.createElement("button",{type:"button",className:"acv-btn brand",disabled:T,onClick:K},T?"\u63D0\u4EA4\u4E2D\u2026":"\u63D0\u4EA4\u56DE\u7B54"),_.default.createElement("span",{className:"acv-field-hint"},"\u4E0D\u9009\u4EFB\u4F55\u9009\u9879\u5373\u8DF3\u8FC7\uFF0C\u4E0D\u4EE3\u8868\u540C\u610F\u3002")),m&&_.default.createElement("div",{className:"acv-error"},m),!p&&_.default.createElement("div",{className:"acv-notice",style:{marginTop:12}},"\u8FD8\u6CA1\u767B\u5F55\u793E\u533A\uFF0C\u767B\u5F55\u4E4B\u540E\u6211\u624D\u80FD\u7528\u4F60\u7684\u8EAB\u4EFD\u53D1\u5E16\u3001\u8BC4\u8BBA\u3002",_.default.createElement("button",{type:"button",className:"acv-btn brand",onClick:()=>{t?.(),window.dispatchEvent(new CustomEvent("achoverse:auth"))}},"\u767B\u5F55"))),_.default.createElement("div",{className:"acv-drawer-foot"},_.default.createElement("div",{className:"acv-input-brand"},_.default.createElement(Ae,{size:24})),_.default.createElement("div",{className:"acv-chat-composer"},_.default.createElement("textarea",{className:"acv-chat-input",rows:1,value:o,placeholder:r?"\u6B63\u5728\u56DE\u590D\u2026":"\u548C DSH \u804A\u804A\u793E\u533A\uFF0C\u6216\u8BA9\u5B83\u53D1\u4E00\u6761\u5E16",onChange:y=>i(y.target.value)}),_.default.createElement("button",{type:"button",className:`acv-chat-send${r?" is-stop":""}`,onClick:r?w:()=>f(),disabled:r?!d||b:!o.trim(),"aria-label":r?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001",title:r?"\u505C\u6B62\u751F\u6210":"\u53D1\u9001"},r?_.default.createElement("span",{className:"acv-chat-stop-icon"}):_.default.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},_.default.createElement("path",{d:"M8 13V3.6M8 3.6 3.8 7.8M8 3.6l4.2 4.2",stroke:"currentColor",strokeWidth:"1.8",strokeLinecap:"round",strokeLinejoin:"round"})))),_.default.createElement("div",{className:"acv-chat-hint"},"Enter \u6362\u884C \xB7 \u70B9\u51FB\u6309\u94AE\u53D1\u9001")))}var Ut="achoverse-community",Da="achoverse.community.token",Ft="https://community.achoverse.com",On=["slots"];function Bt(){if(typeof document>"u")return;let e=document.querySelector("style[data-acv-community]");e||(e=document.createElement("style"),e.setAttribute("data-acv-community","styles"),document.head.appendChild(e)),e.textContent!==pa&&(e.textContent=pa)}function In({size:e=22,active:a=!1}){return pe.default.createElement("svg",{width:e,height:e,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"},pe.default.createElement("circle",{cx:12,cy:8.5,r:3.4,stroke:"currentColor",strokeWidth:a?2:1.7}),pe.default.createElement("path",{d:"M4.6 19.4c.8-3.9 3.8-6.1 7.4-6.1s6.6 2.2 7.4 6.1",stroke:"currentColor",strokeWidth:a?2:1.7,strokeLinecap:"round"}))}function Mn(){return{get(){try{return window.localStorage.getItem(Da)}catch{return null}},set(e){try{e?window.localStorage.setItem(Da,e):window.localStorage.removeItem(Da),window.dispatchEvent(new Event("achoverse:token-changed"))}catch{}}}}function _n(){let[e,a]=pe.default.useState(null),[t,n]=pe.default.useState(!1),s=pe.default.useMemo(()=>Mn(),[]);return pe.default.useEffect(()=>{let o=()=>{let i=s.get();fetch("/community/ai/token",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({token:i})}).catch(()=>{})};return o(),window.addEventListener("achoverse:token-changed",o),window.addEventListener("storage",o),()=>{window.removeEventListener("achoverse:token-changed",o),window.removeEventListener("storage",o)}},[s]),pe.default.useEffect(()=>{Bt();let o=!1;return fetch("/community/config",{cache:"no-store"}).then(i=>i.ok?i.json():Promise.reject(new Error(String(i.status)))).then(i=>{o||a(i?.baseUrl||Ft)}).catch(()=>{o||a(Ft)}),()=>{o=!0}},[]),e?pe.default.createElement(pe.default.Fragment,null,pe.default.createElement(Mt,{mode:"plugin",base:e,tokenStore:s,onDsh:()=>n(!0)}),t?pe.default.createElement(_t,{tokenStore:s,onClose:()=>n(!1)}):null):pe.default.createElement("div",{className:"acv-root acv-root--panel"},pe.default.createElement("div",{className:"acv-frame"},pe.default.createElement("div",{className:"acv-loading"},"\u6B63\u5728\u8FDE\u63A5\u793E\u533A\u2026")))}function Un(e){Bt(),e.slots.inject("main",()=>e.slots.register({name:"main",key:Ut},_n)),e.slots.inject("sidebar.panellist",()=>e.slots.register({name:"sidebar.panellist",id:Ut,order:30,label:()=>"Achoverse\u793E\u533A"},In))}
return module.exports}})
