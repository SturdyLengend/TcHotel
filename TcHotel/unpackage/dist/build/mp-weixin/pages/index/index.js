(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"15c0":function(t,e,n){},"32f0":function(t,e,n){"use strict";n.r(e);var r=n("cb83"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"464f":function(t,e,n){"use strict";var r=n("a6f5"),i=n.n(r);i.a},"735d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n("a34a")),i=(o(n("bd9e")),n("8615"));function o(t){return t&&t.__esModule?t:{default:t}}function u(t){return p(t)||s(t)||a(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"===typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function p(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e,n,r,i,o,u){try{var c=t[o](u),a=c.value}catch(s){return void n(s)}c.done?e(a):Promise.resolve(a).then(r,i)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){f(o,r,i,u,c,"next",t)}function c(t){f(o,r,i,u,c,"throw",t)}u(void 0)}))}}var h=function(){n.e("components/uni-ui/uni-grid/uni-grid").then(function(){return resolve(n("b8c8"))}.bind(null,n)).catch(n.oe)},m=function(){n.e("components/uni-ui/uni-grid-item/uni-grid-item").then(function(){return resolve(n("2177"))}.bind(null,n)).catch(n.oe)},g=function(){n.e("components/uni-ui/uni-swiper-dot/uni-swiper-dot").then(function(){return resolve(n("81c5"))}.bind(null,n)).catch(n.oe)},v=function(){n.e("components/uni-ui/uni-notice-bar/uni-notice-bar").then(function(){return resolve(n("a29d"))}.bind(null,n)).catch(n.oe)},b=function(){n.e("components/search/search").then(function(){return resolve(n("9e63"))}.bind(null,n)).catch(n.oe)},y=function(){n.e("components/preferent/preferent").then(function(){return resolve(n("c8a1"))}.bind(null,n)).catch(n.oe)},w=function(){n.e("components/suzhou/suzhou").then(function(){return resolve(n("3993"))}.bind(null,n)).catch(n.oe)},x=function(){n.e("components/uni-ui/uni-load-more/uni-load-more").then(function(){return resolve(n("574a"))}.bind(null,n)).catch(n.oe)},S={data:function(){return{pageNum:1,cityCode:"",res:[],flag:!1,swipers:[{id:0,pics:"https://image.ructrip.com/ructrip/1607512632892/双十二每日抢购头图的副本banner.jpg",title:"双十二每日抢购",path:"/pages/welfare/welfare"},{id:1,pics:"https://image.ructrip.com/ructrip/1607420414465/1204-如程小程序版本更新-12月上新预告.jpg",title:"上新预告",path:"/pages/hotel/hotel"},{id:2,pics:"https://image.ructrip.com/ructrip/1608128246925/%E5%8F%8C%E5%8D%81%E4%BA%8C%E5%B2%81%E6%9C%AB%E6%9A%96%E5%86%AC%E5%AD%A3banner.jpg",title:"冬季福利",path:"/pages/winter/winter"}],navs:[{pics:"https://image.ructrip.com/ructrip/1607422116032/最新上线@3x.png",title:"最新上线",path:"/pages/news/news"},{pics:"https://image.ructrip.com/ructrip/1607422043859/预订指南@3x.png",title:"预定指南",path:"/pages/reservation/reservation"},{pics:"https://image.ructrip.com/ructrip/1607422059182/专属客服@3x.png",title:"专属客服",path:"/pages/customer/customer"},{pics:"https://image.ructrip.com/ructrip/1607422152381/酒店合集@3x.png",title:"酒店合集",path:"/pages/hotel/hotel"},{pics:"https://image.ructrip.com/ructrip/1607422268333/开放城市@3x.png",title:"开放城市",path:"/pages/cities/cities"},{pics:"https://image.ructrip.com/ructrip/1607422291089/预订榜单@3x.png",title:"预定榜单",path:"/pages/reservationList/reservationList"},{pics:"https://image.ructrip.com/ructrip/1607422363618/天天抽奖@3x.png",title:"天天抽奖",path:"/pages/prize/prize"},{pics:"https://image.ructrip.com/ructrip/1607422386263/新人福利@3x.png",title:"新人福利",path:"/pages/welfare/welfare"}],adv:["https://image.ructrip.com/ructrip/1607607428908/【new688】.png","https://image.ructrip.com/ructrip/1607513447380/双十二.jpg"],floatTip:"https://image.ructrip.com/ructrip/1603255818332/首页浮标1.png",sleep:"https://image.ructrip.com/ructrip/1607512681756/试睡专区通栏.jpg",iconType:["success"]}},onLoad:function(){this.getword()},methods:{search:function(){t.navigateTo({url:"/pages/search/search"})},gopages:function(e){t.navigateTo({url:e.path})},goVip:function(){t.navigateTo({url:"/pages/welfare/welfare"})},goPrize:function(){t.navigateTo({url:"/pages/prize/prize"})},goSleep:function(){t.navigateTo({url:"/pages/sleep/sleep"})},receive:function(t){console.log(t,"999999999"),this.cityCode=t,this.pageNum=1,this.res=[],this.getword()},getword:function(){var t=this;return d(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,i.myRequestPost)("/sojo.equity.home.listIndexCityMenuRecommend",{pageNum:t.pageNum,pageSize:3,cityCode:t.cityCode,platFrom:10,memberCityCode:"320200",storeNoListStr:"",client:"applets",mobileBrand:"microsoft",mobileModel:"microsoft",osVersion:"Windows 10 x64",timestamp:1608105167e3,sign:"2BD4F2E388596CE4EB209B0C440BD3EF"});case 2:n=e.sent,t.res=[].concat(u(t.res),u(n.respData.list)),t.page=n.respData.pages,t.res=t.res.filter((function(t){if(t.storeImage)return t}));case 6:case"end":return e.stop()}}),e)})))()},onReachBottom:function(){this.pageNum++,this.pageNum<=this.page?this.getword():this.flag=!0},onPullDownRefresh:function(){t.showNavigationBarLoading(),t.request({url:"https://capi.ructrip.com/sojo.equity.home.listIndexCityMenuRecommend",method:"POST",header:{"content-type":"application/json"},data:{},success:function(t){},fail:function(t){},complete:function(e){t.hideNavigationBarLoading(),t.stopPullDownRefresh()}})}},components:{uniGrid:h,uniGridItem:m,uniSwiperDot:g,uniNoticeBar:v,Search:b,Preferent:y,Suzhou:w,uniLoadMore:x}};e.default=S}).call(this,n("543d")["default"])},"76dc":function(t,e,n){"use strict";var r=n("15c0"),i=n.n(r);i.a},"82bf":function(t,e,n){"use strict";n.r(e);var r=n("735d"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},a634:function(t,e,n){"use strict";(function(t){n("e476");r(n("66fd"));var e=r(n("c4b4"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},a6f5:function(t,e,n){},b8b7:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},bd9e:function(t,e,n){"use strict";n.r(e);var r=n("dd90"),i=n("32f0");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("76dc");var u,c=n("f0c5"),a=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"6402c764",null,!1,r["a"],u);e["default"]=a.exports},c4b4:function(t,e,n){"use strict";n.r(e);var r=n("b8b7"),i=n("82bf");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("464f");var u,c=n("f0c5"),a=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],u);e["default"]=a.exports},cb83:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=r},dd90:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]}},[["a634","common/runtime","common/vendor"]]]);