(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-ui/uni-popup-message/uni-popup-message"],{9745:function(t,e,n){},cdbc:function(t,e,n){"use strict";n.r(e);var u=n("f984"),i=n("d7cd");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("fa0d");var c,r=n("f0c5"),a=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"14ef1c3e",null,!1,u["a"],c);e["default"]=a.exports},cf9b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=u},d7cd:function(t,e,n){"use strict";n.r(e);var u=n("cf9b"),i=n.n(u);for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);e["default"]=i.a},f984:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},o=[]},fa0d:function(t,e,n){"use strict";var u=n("9745"),i=n.n(u);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-ui/uni-popup-message/uni-popup-message-create-component',
    {
        'components/uni-ui/uni-popup-message/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("cdbc"))
        })
    },
    [['components/uni-ui/uni-popup-message/uni-popup-message-create-component']]
]);
