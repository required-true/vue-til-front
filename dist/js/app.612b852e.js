(function(t){function e(e){for(var r,o,a=e[0],i=e[1],s=e[2],f=0,l=[];f<a.length;f++)o=a[f],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&l.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);d&&d(e);while(l.length)l.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},c={app:0},u=[];function a(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-16572868":"10a251d7","chunk-329cbd7b":"9ea40406","chunk-77ced75b":"0444d570","chunk-eafa37f8":"dbbc19f5"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-16572868":1,"chunk-329cbd7b":1,"chunk-77ced75b":1,"chunk-eafa37f8":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-16572868":"c5208e18","chunk-329cbd7b":"03dcd7bc","chunk-77ced75b":"4c2edf4f","chunk-eafa37f8":"345935e4"}[t]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var s=u[a],f=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(f===r||f===c))return e()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){s=l[a],f=s.getAttribute("data-href");if(f===r||f===c)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||c,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[t],d.parentNode.removeChild(d),n(u)},d.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var u=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=u);var s,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=a(t);var l=new Error;s=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,n[1](l)}c[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:f})}),12e4);f.onerror=f.onload=s,document.head.appendChild(f)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=f;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2a39":function(t,e,n){"use strict";n("db20")},4360:function(t,e,n){"use strict";var r=n("1da1"),o=(n("96cf"),n("2b0e")),c=n("2f62"),u=n("49c2"),a=n("6a1d");o["default"].use(c["a"]),e["a"]=new c["a"].Store({state:{token:"",user:{}},getters:{is_login:function(t){return!!t.token||!!Object(a["c"])()},user_token:function(){return Object(a["b"])()}},mutations:{SET_TOKEN:function(t,e){t.token=e},SET_USER:function(t,e){t.user=e},LOGOUT:function(t){t.token="",t.user={},Object(a["a"])("til_auth"),Object(a["a"])("til_user")}},actions:{LOGIN:function(t,e){return Object(r["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,Object(u["a"])(e);case 3:return o=n.sent,r("SET_TOKEN",o.data.token),r("SET_USER",o.data.user),Object(a["d"])(o.data.token),Object(a["e"])(JSON.stringify(o.data.user)),n.abrupt("return",o);case 9:case"end":return n.stop()}}),n)})))()}}})},"49c2":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c}));var r=n("f8c8");function o(t){return r["a"].post("/signup",t)}function c(t){return r["a"].post("/login",t)}},"4dcb":function(t,e,n){},"4ee2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4de4");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AppHeader"),n("router-view"),n("AppFooter")],1)},c=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"container"},[n("h1",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[t._v("Vue-Note")])],1),t.is_login?n("div",{staticClass:"sign-btns-wrap"},[n("button",{staticClass:"sign-btn",on:{click:t.logout}},[t._v("Logout")])]):n("div",{staticClass:"sign-btns-wrap"},[n("router-link",{staticClass:"sign-btn",attrs:{to:"/login"}},[t._v("Login")]),n("router-link",{staticClass:"sign-btn invert",attrs:{to:"/signup"}},[t._v("Sign up")])],1)])])},a=[],i=n("5530"),s=n("2f62"),f={computed:Object(i["a"])({},Object(s["b"])(["is_login"])),methods:{logout:function(){this.$store.commit("LOGOUT"),this.$router.push({name:"login-page"})}}},l=f,d=(n("e11a"),n("2877")),p=Object(d["a"])(l,u,a,!1,null,"743913ed",null),h=p.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("a",{attrs:{href:"https://github.com/Jaehyeokk/vue-til-front",target:"_blank"}},[t._v("View source")]),t._v(" | "),n("a",{attrs:{href:"https://github.com/Jaehyeokk",target:"_blank"}},[t._v("GitHub")])])])}],m={},v=m,_=(n("2a39"),Object(d["a"])(v,b,g,!1,null,"cb640b4c",null)),k=_.exports,O=(n("4ee2"),n("4dcb"),{components:{AppHeader:h,AppFooter:k},mounted:function(){var t=document.querySelector("html");t.classList.add("vue-note")}}),y=O,E=Object(d["a"])(y,o,c,!1,null,null,null),j=E.exports,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),S=n("4360");r["default"].use(w["a"]);var P=[{path:"/",name:"main-page",component:function(){return n.e("chunk-16572868").then(n.bind(null,"4385"))},beforeEnter:function(t,e,n){!0===S["a"].getters.is_login?n():n("/login")}},{path:"/login",name:"login-page",component:function(){return n.e("chunk-329cbd7b").then(n.bind(null,"48ca"))},beforeEnter:function(t,e,n){!0===S["a"].getters.is_login?n("/"):n()}},{path:"/signup",name:"signup-page",component:function(){return n.e("chunk-eafa37f8").then(n.bind(null,"560f"))}},{path:"*",name:"notFound",component:function(){return n.e("chunk-77ced75b").then(n.bind(null,"9703"))}}],T=new w["a"]({mode:"history",base:"/",routes:P}),A=T,C=n("5c96"),L=n.n(C);n("99af");function N(t){var e=new Date(t),n=e.getFullYear(),r=e.getMonth()+1;r=r>9?r:"0".concat(r);var o=e.getDate(),c=e.getHours();c=c>9?c:"0".concat(c);var u=e.getMinutes();return"".concat(n,"-").concat(r,"-").concat(o," ").concat(c,":").concat(u)}r["default"].config.productionTip=!1,r["default"].use(L.a),r["default"].filter("formatDate",N),new r["default"]({router:A,store:S["a"],render:function(t){return t(j)}}).$mount("#app")},"6a1d":function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));n("ac1f"),n("5319");function r(t){document.cookie="til_auth=".concat(t)}function o(t){document.cookie="til_user=".concat(t)}function c(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_auth\s*=\s*([^;]*).*$)|^.*$/,"$1")}function u(){return document.cookie.replace(/(?:(?:^|.*;\s*)til_user\s*=\s*([^;]*).*$)|^.*$/,"$1")}function a(t){document.cookie="".concat(t,"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;")}},db20:function(t,e,n){},e11a:function(t,e,n){"use strict";n("ef09")},ef09:function(t,e,n){},f8c8:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d}));n("99af");var r=n("bc3a"),o=n.n(r),c=(n("d3b7"),n("4360")),u=n("6a1d");function a(t){t.interceptors.request.use((function(t){var e=c["a"].getters.user_token||Object(u["b"])();return t.headers.Authorization=e,t}),(function(t){return Promise.reject(t)})),t.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)}))}var i=a;function s(){var t=o.a.create({baseURL:"".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL)});return t}function f(t){var e=o.a.create({baseURL:"".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL,"/").concat(t)});return i(e),e}var l=s(),d=f("posts")}});
//# sourceMappingURL=app.612b852e.js.map