(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-me-outlink"],{"240f":function(n,t,e){"use strict";var a;e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}));var r=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-uni-view",[e("v-uni-web-view",{attrs:{src:n.urls[n.banner.linkIndex]}})],1)},u=[]},"4f58":function(n,t,e){"use strict";e.r(t);var a=e("240f"),r=e("d830");for(var u in r)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return r[n]}))}(u);var i,c=e("f0c5"),o=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=o.exports},"90c3":function(n,t,e){"use strict";e("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{urls:["https://github.com/dataease/dataease","https://dataease.io/docs/user_manual/general/"],banner:{}}},onLoad:function(n){var t=n.detailDate||n.payload;try{this.banner=JSON.parse(decodeURIComponent(t))}catch(e){this.banner=JSON.parse(t)}}};t.default=a},d830:function(n,t,e){"use strict";e.r(t);var a=e("90c3"),r=e.n(a);for(var u in a)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=r.a}}]);