(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-mine-coupon"],{5502:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{couponValidList:[{id:1,title:"艺栈特色度假酒店",termStart:"2020-12-11",termEnd:"2021-1-11",ticket:"10",criteria:"满50使用"},{id:2,title:"金林逸舍度假酒店",termStart:"2020-12-11",termEnd:"2021-1-11",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减100元",termStart:"2020-12-11",termEnd:"2021-1-11",ticket:"100",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2020-12-11",termEnd:"2021-1-11",ticket:"50",criteria:"满100使用"}],couponinvalidList:[{id:1,title:"艺栈特色度假酒店",termStart:"2019-12-11",termEnd:"2020-1-11",ticket:"10",criteria:"满50使用"},{id:2,title:"金林逸舍度假酒店",termStart:"2019-12-11",termEnd:"2020-1-11",ticket:"100",criteria:"满500使用"},{id:3,title:"全场立减100元",termStart:"2019-12-11",termEnd:"2020-1-11",ticket:"100",criteria:"无门槛"},{id:4,title:"全场立减50元",termStart:"2019-12-11",termEnd:"2020-1-11",ticket:"50",criteria:"满1000使用"}],headerTop:0,typeClass:"valid",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){uni.stopPullDownRefresh()},1e3)},onLoad:function(){var t=this,e=setInterval(function(){var i=document.getElementsByTagName("uni-page-head");i.length>0&&(t.headerTop=i[0].offsetHeight+"px",clearInterval(e))},1)},methods:{switchType:function(t){var e=this;this.typeClass!=t&&(uni.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=t,this.subState=""==this.typeClass?"":"show"+t,setTimeout(function(){e.oldIndex=null,e.theIndex=null,e.subState="valid"==e.typeClass?"":e.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var i=this;if(e.touches.length>1)this.isStop=!0;else{var a=e.touches[0].pageX-this.initXY[0],n=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(a)<5||(Math.abs(n)>Math.abs(a)?this.isStop=!0:a<0?(this.theIndex=t,this.isStop=!0):a>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){i.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var i=e.length,a=0;a<i;a++)if(t==e[a].id){e.splice(a,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=a},5867:function(t,e,i){"use strict";var a=i("dccc"),n=i.n(a);n.a},aae4:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"tabr",style:{top:t.headerTop}},[i("v-uni-view",{class:{on:"valid"==t.typeClass},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchType("valid")}}},[t._v("可用("+t._s(t.couponValidList.length)+")")]),i("v-uni-view",{class:{on:"invalid"==t.typeClass},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchType("invalid")}}},[t._v("已失效")]),i("v-uni-view",{staticClass:"border",class:t.typeClass})],1),i("v-uni-view",{staticClass:"place"}),i("v-uni-view",{staticClass:"list"},[i("v-uni-view",{staticClass:"sub-list valid",class:t.subState},[0==t.couponValidList.length?i("v-uni-view",{staticClass:"tis"},[t._v("没有数据~")]):t._e(),t._l(t.couponValidList,function(e,a){return i("v-uni-view",{key:a,staticClass:"row"},[i("v-uni-view",{staticClass:"menu",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.deleteCoupon(e.id,t.couponValidList)}}},[i("v-uni-view",{staticClass:"iconfont icon-shanchu"})],1),i("v-uni-view",{staticClass:"carrier",class:["valid"==t.typeClass?t.theIndex==a?"open":t.oldIndex==a?"close":"":""],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(a,e)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(a,e)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(a,e)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"term"},[t._v(t._s(e.termStart)+" ~ "+t._s(e.termEnd))]),i("v-uni-view",{staticClass:"gap-top"}),i("v-uni-view",{staticClass:"gap-bottom"})],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",{staticClass:"ticket"},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(e.ticket))]),i("v-uni-view",{staticClass:"unit"},[t._v("元")])],1),i("v-uni-view",{staticClass:"criteria"},[t._v(t._s(e.criteria))]),i("v-uni-view",{staticClass:"use"},[t._v("去使用")])],1)],1)],1)})],2),i("v-uni-view",{staticClass:"sub-list invalid",class:t.subState},[0==t.couponinvalidList.length?i("v-uni-view",{staticClass:"tis"},[t._v("没有数据~")]):t._e(),t._l(t.couponinvalidList,function(e,a){return i("v-uni-view",{key:a,staticClass:"row"},[i("v-uni-view",{staticClass:"menu",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.deleteCoupon(e.id,t.couponinvalidList)}}},[i("v-uni-view",{staticClass:"iconfont icon-shanchu"})],1),i("v-uni-view",{staticClass:"carrier",class:["invalid"==t.typeClass?t.theIndex==a?"open":t.oldIndex==a?"close":"":""],on:{touchstart:function(e){arguments[0]=e=t.$handleEvent(e),t.touchStart(a,e)},touchmove:function(e){arguments[0]=e=t.$handleEvent(e),t.touchMove(a,e)},touchend:function(e){arguments[0]=e=t.$handleEvent(e),t.touchEnd(a,e)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(e.title))]),i("v-uni-view",{staticClass:"term"},[t._v(t._s(e.termStart)+" ~ "+t._s(e.termEnd))]),i("v-uni-view",{staticClass:"icon shixiao"}),i("v-uni-view",{staticClass:"gap-top"}),i("v-uni-view",{staticClass:"gap-bottom"})],1),i("v-uni-view",{staticClass:"right invalid"},[i("v-uni-view",{staticClass:"ticket"},[i("v-uni-view",{staticClass:"num"},[t._v(t._s(e.ticket))]),i("v-uni-view",{staticClass:"unit"},[t._v("元")])],1),i("v-uni-view",{staticClass:"criteria"},[t._v(t._s(e.criteria))]),i("v-uni-view",{staticClass:"use"},[t._v("去查看")])],1)],1)],1)})],2)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},cf63:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-a151dc6e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}uni-page-body[data-v-a151dc6e]{position:relative;background-color:#f5f5f5}.hidden[data-v-a151dc6e]{display:none!important}.place[data-v-a151dc6e]{width:100%;height:%?95?%}.tabr[data-v-a151dc6e]{background-color:#fff;width:94%;height:%?95?%;padding:0 3%;border-bottom:solid %?1?% #dedede;position:fixed;top:0;z-index:10}.tabr uni-view[data-v-a151dc6e]{width:50%;height:%?90?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;color:#999}.tabr .on[data-v-a151dc6e]{color:#f09749}.tabr .border[data-v-a151dc6e]{height:%?4?%;background-color:#f0b323;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.tabr .border.invalid[data-v-a151dc6e]{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.list[data-v-a151dc6e]{width:100%;display:block;position:relative}@-webkit-keyframes showValid-data-v-a151dc6e{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes showValid-data-v-a151dc6e{0%{-webkit-transform:translateX(-100%);transform:translateX(-100%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes showInvalid-data-v-a151dc6e{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}@keyframes showInvalid-data-v-a151dc6e{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-100%);transform:translateX(-100%)}}.sub-list[data-v-a151dc6e]{width:100%;padding:%?20?% 0 %?120?% 0}.sub-list.invalid[data-v-a151dc6e]{position:absolute;top:0;left:100%;display:none}.sub-list.showvalid[data-v-a151dc6e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-animation:showValid-data-v-a151dc6e .2s linear both;animation:showValid-data-v-a151dc6e .2s linear both}.sub-list.showinvalid[data-v-a151dc6e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-animation:showInvalid-data-v-a151dc6e .2s linear both;animation:showInvalid-data-v-a151dc6e .2s linear both}.sub-list .tis[data-v-a151dc6e]{width:100%;height:%?60?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%}.sub-list .row[data-v-a151dc6e]{width:92%;height:24vw;margin:%?20?% auto %?10?% auto;border-radius:%?8?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;overflow:hidden;z-index:4;border:0\n    /*\n\t\t<view class="carrier" :class="[theIndex==index?\'open\':oldIndex==index?\'close\':\'\']" @touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)" @touchend="touchEnd(index,$event)">\n\t\t\t<view class="left">\n\t\t\t\t<view class="title">\n\t\t\t\t\t10元日常用品类\n\t\t\t\t</view>\n\t\t\t\t<view class="term">\n\t\t\t\t\t2019-04-01~2019-05-30\n\t\t\t\t</view>\n\t\t\t</view>\n\t\t\t<view class="right">\n\t\t\t\t<view class="ticket">\n\t\t\t\t\t<view class="num">\n\t\t\t\t\t\t10\n\t\t\t\t\t</view>\n\t\t\t\t\t<view class="unit">\n\t\t\t\t\t\t元\n\t\t\t\t\t</view>\n\t\t\t\t</view>\n\t\t\t\t<view class="criteria">\n\t\t\t\t\t满50使用\n\t\t\t\t</view>\n\t\t\t\t<view class="use">\n\t\t\t\t\t去使用\n\t\t\t\t</view>\n\t\t\t</view>\n\t\t</view>\n\t\t* \n\t\t* */}.sub-list .row .menu[data-v-a151dc6e]{position:absolute;width:28%;height:100%;right:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#ff6c36;color:#fff;z-index:2}.sub-list .row .menu .icon[data-v-a151dc6e]{color:#fff;font-size:%?50?%}.sub-list .row .carrier[data-v-a151dc6e]{background-color:#fff;position:absolute;width:100%;padding:0 0;height:100%;z-index:3;-webkit-flex-wrap:nowrap;flex-wrap:nowrap}@-webkit-keyframes showMenu-data-v-a151dc6e{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-28%);transform:translateX(-28%)}}@keyframes showMenu-data-v-a151dc6e{0%{-webkit-transform:translateX(0);transform:translateX(0)}to{-webkit-transform:translateX(-28%);transform:translateX(-28%)}}@-webkit-keyframes closeMenu-data-v-a151dc6e{0%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes closeMenu-data-v-a151dc6e{0%{-webkit-transform:translateX(-28%);transform:translateX(-28%)}to{-webkit-transform:translateX(0);transform:translateX(0)}}.sub-list .row .carrier.open[data-v-a151dc6e]{-webkit-animation:showMenu-data-v-a151dc6e .25s linear both;animation:showMenu-data-v-a151dc6e .25s linear both}.sub-list .row .carrier.close[data-v-a151dc6e]{-webkit-animation:closeMenu-data-v-a151dc6e .15s linear both;animation:closeMenu-data-v-a151dc6e .15s linear both}.sub-list .row .carrier .left[data-v-a151dc6e]{width:100%;position:relative}.sub-list .row .carrier .left .title[data-v-a151dc6e]{padding-top:3vw;width:90%;margin:0 5%;font-size:%?36?%}.sub-list .row .carrier .left .term[data-v-a151dc6e]{width:90%;margin:0 5%;font-size:%?26?%;color:#999}.sub-list .row .carrier .left .gap-bottom[data-v-a151dc6e],.sub-list .row .carrier .left .gap-top[data-v-a151dc6e]{position:absolute;width:%?20?%;height:%?20?%;right:%?-10?%;border-radius:100%;background-color:#f5f5f5}.sub-list .row .carrier .left .gap-top[data-v-a151dc6e]{top:%?-10?%}.sub-list .row .carrier .left .gap-bottom[data-v-a151dc6e]{bottom:%?-10?%}.sub-list .row .carrier .left .shixiao[data-v-a151dc6e]{position:absolute;right:%?20?%;font-size:%?150?%;z-index:6;color:hsla(0,0%,60%,.2)}.sub-list .row .carrier .right[data-v-a151dc6e]{-webkit-flex-shrink:0;flex-shrink:0;width:28%;color:#fff;background:-webkit-linear-gradient(left,#ff6c36,#fd9132);background:linear-gradient(90deg,#ff6c36,#fd9132);-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.sub-list .row .carrier .right.invalid[data-v-a151dc6e]{background:-webkit-linear-gradient(left,#aaa,#999);background:linear-gradient(90deg,#aaa,#999)}.sub-list .row .carrier .right.invalid .use[data-v-a151dc6e]{color:#aaa}.sub-list .row .carrier .right .criteria[data-v-a151dc6e],.sub-list .row .carrier .right .ticket[data-v-a151dc6e]{width:100%}.sub-list .row .carrier .right .ticket[data-v-a151dc6e]{padding-top:1vw;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;height:6vw}.sub-list .row .carrier .right .ticket .num[data-v-a151dc6e]{font-size:%?42?%;font-weight:600}.sub-list .row .carrier .right .ticket .unit[data-v-a151dc6e]{font-size:%?24?%}.sub-list .row .carrier .right .criteria[data-v-a151dc6e]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%}.sub-list .row .carrier .right .use[data-v-a151dc6e]{width:50%;height:%?40?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?24?%;background-color:#fff;color:#ee827f;border-radius:%?40?%;padding:0 %?10?%}body.?%PAGE?%[data-v-a151dc6e]{background-color:#f5f5f5}',""])},d242:function(t,e,i){"use strict";i.r(e);var a=i("5502"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},dccc:function(t,e,i){var a=i("cf63");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("0a25e31b",a,!0,{sourceMap:!1,shadowMode:!1})},e8a3:function(t,e,i){"use strict";i.r(e);var a=i("aae4"),n=i("d242");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("5867");var r=i("2877"),o=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"a151dc6e",null);e["default"]=o.exports}}]);