(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-search-search"],{"03d3":function(t,e,i){"use strict";var n=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("75fc"));i("96cf");var o=n(i("3b8d")),r=n(i("ca6b")),s=n(i("6f25")),c=i("1e6f"),u={data:function(){return{title:"点击选择城市",pageNum:1,cityCode:"",res:[],flag:!1,url:"https://image.ructrip.com/ructrip/1608122201728/1204-未购卡-任享会员688+20天会期-通用通览.jpg"}},onLoad:function(t){this.cityCode=t.cityCode,console.log(this.cityCode,"1111111111"),this.getword()},methods:{goSearch:function(){uni.navigateTo({url:"/pages/citiesList/citiesList"})},goVip:function(){uni.navigateTo({url:"/pages/welfare/welfare"})},getword:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,c.myRequestPost)("/sojo.equity.home.listIndexCityMenuRecommend",{pageNum:this.pageNum,pageSize:3,cityCode:this.cityCode,platFrom:10,memberCityCode:"320200",storeNoListStr:"",client:"applets",mobileBrand:"microsoft",mobileModel:"microsoft",osVersion:"Windows 10 x64",timestamp:1608105167e3,sign:"2BD4F2E388596CE4EB209B0C440BD3EF"});case 2:e=t.sent,this.res=[].concat((0,a.default)(this.res),(0,a.default)(e.respData.list)),this.res=this.res.filter(function(t){if(t.storeImage)return t}),this.page=e.respData.pages;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onReachBottom:function(){this.pageNum++,this.pageNum<=this.page?this.getword():this.flag=!0},onPullDownRefresh:function(){uni.showNavigationBarLoading(),uni.request({url:"https://capi.ructrip.com/sojo.equity.home.listIndexCityMenuRecommend",method:"POST",header:{"content-type":"application/json"},data:{},success:function(t){},fail:function(t){},complete:function(t){uni.hideNavigationBarLoading(),uni.stopPullDownRefresh()}})}},components:{Suzhou:r.default,uniLoadMore:s.default}};e.default=u},"1de6":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("1e6f");var n={props:["res"],data:function(){return{storeImage:[]}},methods:{hotel:function(t){uni.navigateTo({url:"/pages/hotelDetails/hotelDetails?storeNo="+t.storeNo})}}};e.default=n},2450:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"home"},[i("v-uni-button",{staticClass:"search",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goSearch.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"country"},[t._v("全国")]),i("v-uni-text",{staticClass:"icon1 icon-jiantou9 iconfont"}),i("v-uni-text",{staticClass:"city"},[t._v(t._s(t.title))])],1),i("v-uni-image",{attrs:{src:t.url,mode:"widthFix"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goVip.apply(void 0,arguments)}}}),t._l(t.res.length,function(e){return i("v-uni-view",{key:e},[i("Suzhou",{attrs:{res:t.res[e],pageNum:t.pageNum,cityCode:t.cityCode}})],1)}),t.flag?i("uni-load-more",{attrs:{status:"noMore"}}):i("uni-load-more",{attrs:{status:"loading"}})],2)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},3423:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".contents[data-v-2a2b5897]{width:%?710.28?%;margin:auto;margin-top:%?30?%;border:%?1?% solid #eee}.contents .content1[data-v-2a2b5897]{height:%?404?%}.contents .content1 uni-swiper[data-v-2a2b5897]{height:%?404?%}.contents .content1 uni-swiper uni-image[data-v-2a2b5897]{width:%?712.28?%;height:%?404?%;margin-left:%?1?%;margin-top:%?1?%}.contents .word[data-v-2a2b5897]{margin-top:%?35?%;margin-left:%?20?%}.contents .word .laber[data-v-2a2b5897]{display:-webkit-box;display:-webkit-flex;display:flex}.contents .word .laber .reserve[data-v-2a2b5897]{color:#ff6c36;background-color:#fff6f3}.contents .word .laber uni-text[data-v-2a2b5897]{overflow:hidden;white-space:nowrap;color:#777;padding:%?5?%;display:block;font-size:%?25?%;background-color:#f8f8f7;margin-right:%?8?%}.contents .word .title[data-v-2a2b5897]{color:#00004f;margin-top:%?20?%;display:block;font-size:%?42?%;font-weight:300;margin-bottom:%?20?%}.contents .word1[data-v-2a2b5897]{display:-webkit-box;display:-webkit-flex;display:flex}.contents .word1 uni-text[data-v-2a2b5897]{color:#b7b7b7;display:block;margin-bottom:%?40?%}",""])},"5ba3":function(t,e,i){"use strict";i.r(e);var n=i("2450"),a=i("ca65");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("9122");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"7cb6c68f",null);e["default"]=s.exports},7041:function(t,e,i){var n=i("7058");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6184da6d",n,!0,{sourceMap:!1,shadowMode:!1})},7058:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".home .search[data-v-7cb6c68f]{margin-top:%?20?%;width:%?680?%;height:%?80?%;line-height:%?80?%;border:1px solid #e0e0e0;background-color:#fff;outline:hidden;color:#9d9d9d;margin-left:%?35?%;font-size:%?28?%;position:relative;padding-left:%?30?%}.home .search .country[data-v-7cb6c68f]{font-size:%?28?%;font-weight:600;color:#4a4a4a;margin-right:%?22?%;float:left}.home .search .icon1[data-v-7cb6c68f]{font-size:%?18?%;color:#b1b1b1;margin-right:%?12?%;float:left}.home .search .city[data-v-7cb6c68f]{float:left}.home uni-image[data-v-7cb6c68f]{width:%?680?%;margin-top:%?20?%;margin-left:%?35?%}",""])},9122:function(t,e,i){"use strict";var n=i("7041"),a=i.n(n);a.a},"9f35":function(t,e,i){var n=i("3423");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("2abf76e8",n,!0,{sourceMap:!1,shadowMode:!1})},b3a3:function(t,e,i){"use strict";i.r(e);var n=i("1de6"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},ca65:function(t,e,i){"use strict";i.r(e);var n=i("03d3"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},ca6b:function(t,e,i){"use strict";i.r(e);var n=i("ce82"),a=i("b3a3");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("e213");var r=i("2877"),s=Object(r["a"])(a["default"],n["a"],n["b"],!1,null,"2a2b5897",null);e["default"]=s.exports},ce82:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"contents",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hotel(t.res)}}},[i("v-uni-view",{staticClass:"content1"},[i("v-uni-swiper",{attrs:{interval:4500,circular:""}},[t.res.storeImage?t._l(t.res.storeImage.split(","),function(t){return i("v-uni-swiper-item",{key:t},[i("v-uni-image",{attrs:{src:t,mode:"widthFix"}})],1)}):t._e()],2)],1),i("v-uni-view",{staticClass:"word"},[i("v-uni-view",{staticClass:"laber"},[i("v-uni-text",{staticClass:"reserve"},[t._v(t._s(t.res.storeReserve||"本月可订"))]),t.res.sellingLabel?t._l(t.res&&t.res.sellingLabel&&t.res.sellingLabel.split(","),function(e){return i("v-uni-text",[t._v(t._s(e))])}):t._e()],2),i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.res.subTitle))]),i("v-uni-view",{staticClass:"word1"},[i("v-uni-text",[t._v(t._s(t.res.storeName))]),i("v-uni-text",[t._v("特色度假酒店")])],1)],1)],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},e213:function(t,e,i){"use strict";var n=i("9f35"),a=i.n(n);a.a}}]);