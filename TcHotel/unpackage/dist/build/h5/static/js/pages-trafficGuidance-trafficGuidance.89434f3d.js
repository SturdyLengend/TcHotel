(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trafficGuidance-trafficGuidance"],{"2b33":function(t,e,n){"use strict";n.r(e);var r=n("d392"),i=n("f249");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n("2877"),a=Object(s["a"])(i["default"],r["a"],r["b"],!1,null,"155353f2",null);e["default"]=a.exports},"4eca":function(t,e,n){"use strict";var r=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("3b8d")),o=(r(n("5990")),n("1e6f")),s={data:function(){return{htmlNodes:[],trafficGuide:[],storeNo:""}},onLoad:function(t){this.storeNo=t.storeNo,console.log(t.storeNo),console.log(this.storeNo,"44444444"),this.getPicture()},methods:{getPicture:function(){var t=(0,i.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.myRequestPost)("/sojo.equity.store.detail.v.two",{storeNo:this.storeNo,client:"applets",mobileBrand:"microsoft",mobileModel:"microsoft",osVersion:"Windows 10 x64",timestamp:1607425661e3,sign:"53E5E8A53FCC179B1006E2A61F2D6A8E"});case 2:e=t.sent,console.log(this.trafficGuide),this.trafficGuide=e.respData.trafficGuide;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}};e.default=s},d392:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"all"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-rich-text",{attrs:{nodes:t.trafficGuide}})],1)],1)},i=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return i})},f249:function(t,e,n){"use strict";n.r(e);var r=n("4eca"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,function(){return r[t]})}(o);e["default"]=i.a}}]);