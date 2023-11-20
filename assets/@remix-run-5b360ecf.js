/**
 * @remix-run/router v1.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}var y;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(y||(y={}));const O="popstate";function se(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:l,hash:s}=r.location;return W("",{pathname:i,search:l,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:C(a)}return k(t,n,null,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function L(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function V(){return Math.random().toString(36).substr(2,8)}function U(e,t){return{usr:e.state,key:e.key,idx:t}}function W(e,t,n,r){return n===void 0&&(n=null),x({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?R(t):t,{state:n,key:t&&t.key||r||V()})}function C(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function R(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function k(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,l=a.history,s=y.Pop,o=null,c=h();c==null&&(c=0,l.replaceState(x({},l.state,{idx:c}),""));function h(){return(l.state||{idx:null}).idx}function d(){s=y.Pop;let u=h(),f=u==null?null:u-c;c=u,o&&o({action:s,location:m.location,delta:f})}function p(u,f){s=y.Push;let g=W(m.location,u,f);n&&n(g,u),c=h()+1;let $=U(g,c),P=m.createHref(g);try{l.pushState($,"",P)}catch(b){if(b instanceof DOMException&&b.name==="DataCloneError")throw b;a.location.assign(P)}i&&o&&o({action:s,location:m.location,delta:1})}function E(u,f){s=y.Replace;let g=W(m.location,u,f);n&&n(g,u),c=h();let $=U(g,c),P=m.createHref(g);l.replaceState($,"",P),i&&o&&o({action:s,location:m.location,delta:0})}function w(u){let f=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof u=="string"?u:C(u);return v(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let m={get action(){return s},get location(){return e(a,l)},listen(u){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(O,d),o=u,()=>{a.removeEventListener(O,d),o=null}},createHref(u){return t(a,u)},createURL:w,encodeLocation(u){let f=w(u);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:E,go(u){return l.go(u)}};return m}var B;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(B||(B={}));function oe(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?R(t):t,a=ee(r.pathname||"/",n);if(a==null)return null;let i=M(e);A(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=F(i[s],Y(a));return l}function M(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,l,s)=>{let o={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(r),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(r.length));let c=S([r,o.relativePath]),h=n.concat(o);i.children&&i.children.length>0&&(v(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),M(i.children,t,h,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:J(c,i.index),routesMeta:h})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,l);else for(let o of T(i.path))a(i,l,o)}),t}function T(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let l=T(r.join("/")),s=[];return s.push(...l.map(o=>o===""?i:[i,o].join("/"))),a&&s.push(...l),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function A(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:K(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const D=/^:\w+$/,N=3,z=2,_=1,q=10,G=-2,j=e=>e==="*";function J(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=G),t&&(r+=z),n.filter(a=>!j(a)).reduce((a,i)=>a+(D.test(i)?N:i===""?_:q),r)}function K(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function F(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let l=0;l<n.length;++l){let s=n[l],o=l===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",h=Q({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},c);if(!h)return null;Object.assign(r,h.params);let d=s.route;i.push({params:r,pathname:S([a,h.pathname]),pathnameBase:ae(S([a,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(a=S([a,h.pathnameBase]))}return i}function Q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=X(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],l=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((c,h,d)=>{let{paramName:p,isOptional:E}=h;if(p==="*"){let m=s[d]||"";l=i.slice(0,i.length-m.length).replace(/(.)\/+$/,"$1")}const w=s[d];return E&&!w?c[p]=void 0:c[p]=Z(w||"",p),c},{}),pathname:i,pathnameBase:l,pattern:e}}function X(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),L(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(l,s,o)=>(r.push({paramName:s,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Y(e){try{return decodeURI(e)}catch(t){return L(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Z(e,t){try{return decodeURIComponent(e)}catch(n){return L(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function ee(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function te(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?R(e):e;return{pathname:n?n.startsWith("/")?n:ne(n,t):t,search:re(r),hash:ie(a)}}function ne(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function I(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ce(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ue(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=R(e):(a=x({},e),v(!a.pathname||!a.pathname.includes("?"),I("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),I("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),I("#","search","hash",a)));let i=e===""||a.pathname==="",l=i?"/":a.pathname,s;if(r||l==null)s=n;else{let d=t.length-1;if(l.startsWith("..")){let p=l.split("/");for(;p[0]==="..";)p.shift(),d-=1;a.pathname=p.join("/")}s=d>=0?t[d]:"/"}let o=te(a,s),c=l&&l!=="/"&&l.endsWith("/"),h=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||h)&&(o.pathname+="/"),o}const S=e=>e.join("/").replace(/\/\/+/g,"/"),ae=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),re=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function he(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const H=["post","put","patch","delete"];new Set(H);const le=["get",...H];new Set(le);export{y as A,he as a,Q as b,se as c,C as d,ce as g,v as i,S as j,oe as m,R as p,ue as r,ee as s};
