(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["pages/sleep/sleep"],{"178e":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={swiperAdv:function(){return n.e("components/swiperAdv/swiperAdv").then(n.bind(null,"5c3a"))}},o=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"206b":function(e,t,n){"use strict";(function(e){n("e476");r(n("66fd"));var t=r(n("6906"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("c11b")["createPage"])},6906:function(e,t,n){"use strict";n.r(t);var r=n("178e"),o=n("a87f");for(var u in o)"default"!==u&&function(e){n.d(t,e,(function(){return o[e]}))}(u);n("da65");var i,c=n("f0c5"),a=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=a.exports},"8d37":function(e,t,n){},a87f:function(e,t,n){"use strict";n.r(t);var r=n("e006"),o=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=o.a},da65:function(e,t,n){"use strict";var r=n("8d37"),o=n.n(r);o.a},e006:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("a34a")),o=n("8615");function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,o,u,i){try{var c=e[u](i),a=c.value}catch(s){return void n(s)}c.done?t(a):Promise.resolve(a).then(r,o)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var u=e.apply(t,n);function c(e){i(u,r,o,c,a,"next",e)}function a(e){i(u,r,o,c,a,"throw",e)}c(void 0)}))}}var a=function(){n.e("components/swiperAdv/swiperAdv").then(function(){return resolve(n("5c3a"))}.bind(null,n)).catch(n.oe)},s={data:function(){return{Url:"https://image.ructrip.com/ructrip/1607880634493/otto2试睡专区2.jpg",res:[],number:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]}},onLoad:function(){this.getSleep()},methods:{getSleep:function(){var e=this;return c(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.myRequestPost)("/sojo.equity.store.tst.store.list",{pageNum:1,pageSize:27,channelCode:null,planNo:null,exclusiveZoneId:"40",trySleepActivityId:"1300608627434864641",client:"applets",mobileBrand:"microsoft",mobileModel:"microsoft",osVersion:"Windows 10 x64",timestamp:1608089847e3,sign:"BF1518CCA320E633C1A40E979B334C5D"});case 2:n=t.sent,"00"===n.respCode&&(e.res=n.respData.equityVoPageInfo.list,console.log(e.res,"0000000000000"));case 4:case"end":return t.stop()}}),t)})))()}},components:{swiperAdv:a}};t.default=s}},[["206b","common/runtime","common/vendor"]]]);