(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-notice"],{"0616":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"container",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getNewsDetail.apply(void 0,arguments)}}},[n("v-uni-rich-text",{attrs:{nodes:t.content}})],1)],1)},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"062d":function(t,e,n){"use strict";var o=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var a=o(n("3b8d")),r=n("1e6f"),i=(o(n("a5a2")),{data:function(){return{content:"",htmlNodes:[]}},onLoad:function(){this.getNewsDetail()},methods:{getNewsDetail:function(){var t=(0,a.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,r.myRequestPost)("/sojourn.equity.custom.web.content",{contentNo:"10000001",client:"applets",mobileBrand:"microsoft",mobileModel:"microsoft",osVersion:"Windows 10 x64",timestamp:1607925096e3,sign:"8A8410C2566691E44C4007496946B829"});case 2:e=t.sent,this.content=e.respData.content;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}});e.default=i},"0f79":function(t,e,n){"use strict";var o=n("7026"),a=n.n(o);a.a},"50a4":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".container[data-v-52f9c66a]{padding:%?70?% %?20?%;font-size:%?30?%;color:#636363}",""])},7026:function(t,e,n){var o=n("50a4");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=n("4f06").default;a("b610e9de",o,!0,{sourceMap:!1,shadowMode:!1})},e8ad:function(t,e,n){"use strict";n.r(e);var o=n("062d"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},f50d:function(t,e,n){"use strict";n.r(e);var o=n("0616"),a=n("e8ad");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("0f79");var i=n("2877"),u=Object(i["a"])(a["default"],o["a"],o["b"],!1,null,"52f9c66a",null);e["default"]=u.exports}}]);