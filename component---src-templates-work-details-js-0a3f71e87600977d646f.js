(self.webpackChunkmarshchoco_github_io=self.webpackChunkmarshchoco_github_io||[]).push([[489],{9806:function(e,t,n){"use strict";n(5743),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n(7294),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n.g?n.g:"undefined"!=typeof self?self:{};var a,f,l,s=(a=function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o=function(e){return e&&e.Math==Math&&e},u=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof n&&n)||function(){return this}()||Function("return this")(),i=function(e){try{return!!e()}catch(t){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),f={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,s={f:l&&!f.call({1:2},1)?function(e){var t=l(this,e);return!!t&&t.enumerable}:f},p=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},d={}.toString,y=function(e){return d.call(e).slice(8,-1)},E="".split,v=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==y(e)?E.call(e,""):Object(e)}:Object,h=function(e){return v(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},m=function(e){return"object"==typeof e?null!==e:"function"==typeof e},g=function(e,t){if(!m(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!m(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!m(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!m(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},b={}.hasOwnProperty,O=function(e,t){return b.call(e,t)},_=u.document,T=m(_)&&m(_.createElement),S=function(e){return T?_.createElement(e):{}},A=!a&&!i((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),I=Object.getOwnPropertyDescriptor,w={f:a?I:function(e,t){if(e=h(e),t=g(t,!0),A)try{return I(e,t)}catch(n){}if(O(e,t))return p(!s.f.call(e,t),e[t])}},D=function(e){if(!m(e))throw TypeError(String(e)+" is not an object");return e},N=Object.defineProperty,j={f:a?N:function(e,t,n){if(D(e),t=g(t,!0),D(n),A)try{return N(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},P=a?function(e,t,n){return j.f(e,t,p(1,n))}:function(e,t,n){return e[t]=n,e},L=function(e,t){try{P(u,e,t)}catch(n){u[e]=t}return t},x="__core-js_shared__",M=u[x]||L(x,{}),k=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(e){return k.call(e)});var R,H,B,C=M.inspectSource,G=u.WeakMap,Y="function"==typeof G&&/native code/.test(C(G)),U=r((function(e){(e.exports=function(e,t){return M[e]||(M[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.10.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),Z=0,K=Math.random(),W=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++Z+K).toString(36)},F=U("keys"),z=function(e){return F[e]||(F[e]=W(e))},V={},Q=u.WeakMap;if(Y){var q=M.state||(M.state=new Q),J=q.get,X=q.has,$=q.set;R=function(e,t){return t.facade=e,$.call(q,e,t),t},H=function(e){return J.call(q,e)||{}},B=function(e){return X.call(q,e)}}else{var ee=z("state");V[ee]=!0,R=function(e,t){return t.facade=e,P(e,ee,t),t},H=function(e){return O(e,ee)?e[ee]:{}},B=function(e){return O(e,ee)}}var te={set:R,get:H,has:B,enforce:function(e){return B(e)?H(e):R(e,{})},getterFor:function(e){return function(t){var n;if(!m(t)||(n=H(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ne=r((function(e){var t=te.get,n=te.enforce,r=String(String).split("String");(e.exports=function(e,t,o,i){var c,a=!!i&&!!i.unsafe,f=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof t||O(o,"name")||P(o,"name",t),(c=n(o)).source||(c.source=r.join("string"==typeof t?t:""))),e!==u?(a?!l&&e[t]&&(f=!0):delete e[t],f?e[t]=o:P(e,t,o)):f?e[t]=o:L(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||C(this)}))})),re=u,oe=function(e){return"function"==typeof e?e:void 0},ue=function(e,t){return arguments.length<2?oe(re[e])||oe(u[e]):re[e]&&re[e][t]||u[e]&&u[e][t]},ie=Math.ceil,ce=Math.floor,ae=function(e){return isNaN(e=+e)?0:(e>0?ce:ie)(e)},fe=Math.min,le=Math.max,se=Math.min,pe=function(e){return function(t,n,r){var o,u,i=h(t),c=(o=i.length)>0?fe(ae(o),9007199254740991):0,a=function(e,t){var n=ae(e);return n<0?le(n+t,0):se(n,t)}(r,c);if(e&&n!=n){for(;c>a;)if((u=i[a++])!=u)return!0}else for(;c>a;a++)if((e||a in i)&&i[a]===n)return e||a||0;return!e&&-1}},de={includes:pe(!0),indexOf:pe(!1)},ye=de.indexOf,Ee=function(e,t){var n,r=h(e),o=0,u=[];for(n in r)!O(V,n)&&O(r,n)&&u.push(n);for(;t.length>o;)O(r,n=t[o++])&&(~ye(u,n)||u.push(n));return u},ve=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],he=ve.concat("length","prototype"),me={f:Object.getOwnPropertyNames||function(e){return Ee(e,he)}},ge={f:Object.getOwnPropertySymbols},be=ue("Reflect","ownKeys")||function(e){var t=me.f(D(e)),n=ge.f;return n?t.concat(n(e)):t},Oe=function(e,t){for(var n=be(t),r=j.f,o=w.f,u=0;u<n.length;u++){var i=n[u];O(e,i)||r(e,i,o(t,i))}},_e=/#|\.prototype\./,Te=function(e,t){var n=Ae[Se(e)];return n==we||n!=Ie&&("function"==typeof t?i(t):!!t)},Se=Te.normalize=function(e){return String(e).replace(_e,".").toLowerCase()},Ae=Te.data={},Ie=Te.NATIVE="N",we=Te.POLYFILL="P",De=Te,Ne=w.f,je=function(e,t){var n,r,o,i,c,a=e.target,f=e.global,l=e.stat;if(n=f?u:l?u[a]||L(a,{}):(u[a]||{}).prototype)for(r in t){if(i=t[r],o=e.noTargetGet?(c=Ne(n,r))&&c.value:n[r],!De(f?r:a+(l?".":"#")+r,e.forced)&&void 0!==o){if(typeof i==typeof o)continue;Oe(i,o)}(e.sham||o&&o.sham)&&P(i,"sham",!0),ne(n,r,i,e)}},Pe=Object.keys||function(e){return Ee(e,ve)},Le=s.f,xe=function(e){return function(t){for(var n,r=h(t),o=Pe(r),u=o.length,i=0,c=[];u>i;)n=o[i++],a&&!Le.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Me=(xe(!0),xe(!1));je({target:"Object",stat:!0},{values:function(e){return Me(e)}}),re.Object.values;var ke,Re,He="process"==y(u.process),Be=ue("navigator","userAgent")||"",Ce=u.process,Ge=Ce&&Ce.versions,Ye=Ge&&Ge.v8;Ye?Re=(ke=Ye.split("."))[0]+ke[1]:Be&&(!(ke=Be.match(/Edge\/(\d+)/))||ke[1]>=74)&&(ke=Be.match(/Chrome\/(\d+)/))&&(Re=ke[1]);var Ue,Ze=Re&&+Re,Ke=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(He?38===Ze:Ze>37&&Ze<41)})),We=Ke&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Fe=U("wks"),ze=u.Symbol,Ve=We?ze:ze&&ze.withoutSetter||W,Qe=a?Object.defineProperties:function(e,t){D(e);for(var n,r=Pe(t),o=r.length,u=0;o>u;)j.f(e,n=r[u++],t[n]);return e},qe=ue("document","documentElement"),Je=z("IE_PROTO"),Xe=function(){},$e=function(e){return"<script>"+e+"<\/script>"},et=function(){try{Ue=document.domain&&new ActiveXObject("htmlfile")}catch(r){}var e,t;et=Ue?function(e){e.write($e("")),e.close();var t=e.parentWindow.Object;return e=null,t}(Ue):((t=S("iframe")).style.display="none",qe.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write($e("document.F=Object")),e.close(),e.F);for(var n=ve.length;n--;)delete et.prototype[ve[n]];return et()};V[Je]=!0;var tt,nt=Object.create||function(e,t){var n;return null!==e?(Xe.prototype=D(e),n=new Xe,Xe.prototype=null,n[Je]=e):n=et(),void 0===t?n:Qe(n,t)},rt=(O(Fe,tt="unscopables")&&(Ke||"string"==typeof Fe[tt])||(Ke&&O(ze,tt)?Fe[tt]=ze[tt]:Fe[tt]=Ve("Symbol."+tt)),Fe[tt]),ot=Array.prototype;null==ot[rt]&&j.f(ot,rt,{configurable:!0,value:nt(null)});var ut,it=de.includes;je({target:"Array",proto:!0},{includes:function(e){return it(this,e,arguments.length>1?arguments[1]:void 0)}}),ut="includes",ot[rt][ut]=!0;var ct,at,ft,lt=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},st=Function.call;ct="includes",lt(st,u.Array.prototype[ct],at),function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(ft||(ft={}));var pt,dt=ft;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(pt||(pt={}));var yt,Et=pt,vt=[dt.PARAGRAPH,dt.HEADING_1,dt.HEADING_2,dt.HEADING_3,dt.HEADING_4,dt.HEADING_5,dt.HEADING_6,dt.OL_LIST,dt.UL_LIST,dt.HR,dt.QUOTE,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],ht=[dt.HR,dt.EMBEDDED_ENTRY,dt.EMBEDDED_ASSET],mt=((yt={})[dt.OL_LIST]=[dt.LIST_ITEM],yt[dt.UL_LIST]=[dt.LIST_ITEM],yt[dt.LIST_ITEM]=vt.slice(),yt[dt.QUOTE]=[dt.PARAGRAPH],yt),gt={nodeType:dt.DOCUMENT,data:{},content:[{nodeType:dt.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]},bt=Object.freeze({isInline:function(e){return Object.values(Et).includes(e.nodeType)},isBlock:function(e){return Object.values(dt).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=dt,t.CONTAINERS=mt,t.EMPTY_DOCUMENT=gt,t.INLINES=Et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=vt,t.VOID_BLOCKS=ht,t.helpers=bt},a(f={exports:{}},f.exports),f.exports);(l=s)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var p,d,y=s.BLOCKS,E=(s.CONTAINERS,s.EMPTY_DOCUMENT,s.INLINES),v=s.MARKS,h=(s.TOP_LEVEL_BLOCKS,s.VOID_BLOCKS,s.helpers);function m(e,t){return e.map((function(e,n){return r=g(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function g(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(h.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=m(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var b=((p={})[y.DOCUMENT]=function(e,t){return t},p[y.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},p[y.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},p[y.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},p[y.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},p[y.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},p[y.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},p[y.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},p[y.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},p[y.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},p[y.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},p[y.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},p[y.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},p[y.HR]=function(){return u.createElement("hr",null)},p[E.ASSET_HYPERLINK]=function(e){return _(E.ASSET_HYPERLINK,e)},p[E.ENTRY_HYPERLINK]=function(e){return _(E.ENTRY_HYPERLINK,e)},p[E.EMBEDDED_ENTRY]=function(e){return _(E.EMBEDDED_ENTRY,e)},p[E.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},p),O=((d={})[v.BOLD]=function(e){return u.createElement("b",null,e)},d[v.ITALIC]=function(e){return u.createElement("i",null,e)},d[v.UNDERLINE]=function(e){return u.createElement("u",null,e)},d[v.CODE]=function(e){return u.createElement("code",null,e)},d);function _(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?g(e,{renderNode:i({},b,t.renderNode),renderMark:i({},O,t.renderMark),renderText:t.renderText}):null}},5830:function(e,t,n){"use strict";n.r(t);var r=n(2459),o=n.n(r),u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function i(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var c={},a=function(e){return e&&e.sys&&"Link"===e.sys.type},f=function(e){return e.type+"!"+e.id},l=function e(t,n,r,o){if(n(t))return r(t);if(t&&"object"===(void 0===t?"undefined":u(t))){for(var i in t)t.hasOwnProperty(i)&&(t[i]=e(t[i],n,r,o));o&&(t=function(e){if(Array.isArray(e))return e.filter((function(e){return e!==c}));for(var t in e)e[t]===c&&delete e[t];return e}(t))}return t},s=function(e,t,n){var r=function(e,t){var n=t.sys,r=n.linkType,o=n.id,u=f({type:r,id:o});return e.get(u)||c}(e,t);return r===c?n?r:t:r};t.default=function(e,t){if(t=t||{},!e.items)return[];var n=o()(e),r=Object.keys(n.includes||{}).reduce((function(t,n){return[].concat(i(t),i(e.includes[n]))}),[]),u=[].concat(i(n.items),i(r)),c=new Map(u.map((function(e){return[f(e.sys),e]})));return u.forEach((function(e){var n=function(e,t){return Array.isArray(t)?Object.keys(e).filter((function(e){return-1!==t.indexOf(e)})).reduce((function(t,n){return t[n]=e[n],t}),{}):e}(e,t.itemEntryPoints);Object.assign(e,l(n,a,(function(e){return s(c,e,t.removeUnresolved)}),t.removeUnresolved))})),n.items}},2459:function(e,t,n){n(5743),e.exports=function(){"use strict";var e=Function.prototype.toString,t=Object.create,r=Object.defineProperty,o=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getPrototypeOf,a=Object.prototype,f=a.hasOwnProperty,l=a.propertyIsEnumerable,s={SYMBOL_PROPERTIES:"function"==typeof i,WEAKMAP:"function"==typeof WeakMap},p=function(){if(s.WEAKMAP)return new WeakMap;var e=t({has:function(t){return!!~e._keys.indexOf(t)},set:function(t,n){e._keys.push(t),e._values.push(n)},get:function(t){return e._values[e._keys.indexOf(t)]}});return e._keys=[],e._values=[],e},d=function(n,r){if(!n.constructor)return t(null);var o=n.constructor,u=n.__proto__||c(n);if(o===r.Object)return u===r.Object.prototype?{}:t(u);if(~e.call(o).indexOf("[native code]"))try{return new o}catch(a){}return t(u)},y=function(e,t,n,r){var o=d(e,t);for(var u in r.set(e,o),e)f.call(e,u)&&(o[u]=n(e[u],r));if(s.SYMBOL_PROPERTIES){var c=i(e),a=c.length;if(a)for(var p=0,y=void 0;p<a;p++)y=c[p],l.call(e,y)&&(o[y]=n(e[y],r))}return o},E=function(e,t,n,c){var a=d(e,t);c.set(e,a);var f=s.SYMBOL_PROPERTIES?u(e).concat(i(e)):u(e),l=f.length;if(l)for(var p=0,y=void 0,E=void 0;p<l;p++)if("callee"!==(y=f[p])&&"caller"!==y)if(E=o(e,y)){E.get||E.set||(E.value=n(e[y],c));try{r(a,y,E)}catch(v){a[y]=E.value}}else a[y]=n(e[y],c);return a},v=function(e){var t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t},h=Array.isArray,m="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:void(console&&console.error&&console.error('Unable to locate global object, returning "this".'));function g(e,t){var n=!(!t||!t.isStrict),r=t&&t.realm||m,o=n?E:y,u=function e(t,u){if(!t||"object"!=typeof t)return t;if(u.has(t))return u.get(t);var i,c=t.constructor;if(c===r.Object)return o(t,r,e,u);if(h(t)){if(n)return E(t,r,e,u);var a=t.length;i=new c,u.set(t,i);for(var f=0;f<a;f++)i[f]=e(t[f],u);return i}if(t instanceof r.Date)return new c(t.getTime());if(t instanceof r.RegExp)return(i=new c(t.source,t.flags||v(t))).lastIndex=t.lastIndex,i;if(r.Map&&t instanceof r.Map)return i=new c,u.set(t,i),t.forEach((function(t,n){i.set(n,e(t,u))})),i;if(r.Set&&t instanceof r.Set)return i=new c,u.set(t,i),t.forEach((function(t){i.add(e(t,u))})),i;if(r.Blob&&t instanceof r.Blob)return t.slice(0,t.size,t.type);if(r.Buffer&&r.Buffer.isBuffer(t))return i=r.Buffer.allocUnsafe?r.Buffer.allocUnsafe(t.length):new c(t.length),u.set(t,i),t.copy(i),i;if(r.ArrayBuffer){if(r.ArrayBuffer.isView(t))return i=new c(t.buffer.slice(0)),u.set(t,i),i;if(t instanceof r.ArrayBuffer)return i=t.slice(0),u.set(t,i),i}return"function"==typeof t.then||t instanceof Error||r.WeakMap&&t instanceof r.WeakMap||r.WeakSet&&t instanceof r.WeakSet?t:o(t,r,e,u)};return u(e,p())}return g.default=g,g.strict=function(e,t){return g(e,{isStrict:!0,realm:t?t.realm:void 0})},g}()},8872:function(e,t,n){"use strict";var r=n(5318);t.Z=function(e,t){var n=e.raw,r=e.references;void 0===t&&(t={});var i=JSON.parse(n);if(!r||!r.length)return(0,o.documentToReactComponents)(i,t);var c={items:[{sys:{type:"Entry"},richText:i}],includes:{Entry:r.filter((function(e){return"ContentfulAsset"!==e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Entry",id:e.contentful_id}})})),Asset:r.filter((function(e){return"ContentfulAsset"===e.__typename})).map((function(e){return Object.assign({},e,{sys:{type:"Asset",id:e.contentful_id}})}))}},a=(0,u.default)(c,{removeUnresolved:!0});return(0,o.documentToReactComponents)(a[0].richText,t)};var o=n(9806),u=r(n(5830))},5893:function(e,t,n){"use strict";n.r(t);var r=n(6771),o=n(8872),u=(n(7294),n(244)),i=n(8945),c=n(3431);t.default=function(e){var t=e.data.contentfulWork,n=t.slug,a=t.title,f=t.stack,l=t.github,s=t.website,p=t.description,d=(0,o.Z)(p),y=(0,r.Z)("header",{target:"efo2v6h6"})({name:"mue46n",styles:"margin:16px 0;display:flex;justify-content:space-between;align-items:center;@media (max-width: 768px){align-items:flex-start;flex-direction:column;gap:16px;}"}),E=(0,r.Z)("div",{target:"efo2v6h5"})({name:"1bsrzzn",styles:"display:flex;gap:16px;@media (max-width: 768px){margin:8px 0;}"}),v=(0,r.Z)("a",{target:"efo2v6h4"})({name:"g1jhrg",styles:"text-decoration:none;color:black;padding:8px 16px;box-shadow:0 2px 4px 0 #c5c5c5;&:hover{box-shadow:0 4px 8px 0 #c5c5c5;}"}),h=(0,r.Z)("h1",{target:"efo2v6h3"})({name:"ti75j2",styles:"margin:0"}),m=(0,r.Z)("div",{target:"efo2v6h2"})(""),g=(0,r.Z)("div",{target:"efo2v6h1"})({name:"10kd670",styles:"width:100%;&>p>img{max-width:100%;}"}),b=(0,r.Z)("div",{target:"efo2v6h0"})({name:"3w0yoi",styles:"display:flex;flex-direction:column;gap:8px"});return(0,c.tZ)(u.default,null,(0,c.tZ)(y,null,(0,c.tZ)("div",null,(0,c.tZ)(h,null,a),(0,c.tZ)(m,null,f.join(", "))),(0,c.tZ)(E,null,l?(0,c.tZ)(v,{href:l,target:"__blank"},"Project repo"):null,s?(0,c.tZ)(v,{href:s,target:"__blank"},"Check me out!"):null)),(0,c.tZ)(g,null,d,(0,c.tZ)(b,null,p.references.map((function(e,t){return(0,c.tZ)(i.G,{key:n+"_"+t,image:(0,i.d)(e.gatsbyImageData),alt:e.title})})))))}}}]);
//# sourceMappingURL=component---src-templates-work-details-js-0a3f71e87600977d646f.js.map