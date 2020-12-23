;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-ui/uni-popup-message/uni-popup-message"],{9745:function(t,e,n){},cdbc:function(t,e,n){"use strict";n.r(e);var u=n("f984"),i=n("d7cd");for(var c in i)"default"!==c&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("fa0d");var r,o=n("f0c5"),a=Object(o["a"])(i["default"],u["b"],u["c"],!1,null,"14ef1c3e",null,!1,u["a"],r);e["default"]=a.exports},cf9b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniPopupMessage",props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3}},inject:["popup"],data:function(){return{}},created:function(){this.popup.childrenMsg=this},methods:{open:function(){var t=this;0!==this.duration&&(clearTimeout(this.popuptimer),this.popuptimer=setTimeout((function(){t.popup.close()}),this.duration))},close:function(){clearTimeout(this.popuptimer)}}};e.default=u},d7cd:function(t,e,n){"use strict";n.r(e);var u=n("cf9b"),i=n.n(u);for(var c in u)"default"!==c&&function(t){n.d(e,t,(function(){return u[t]}))}(c);e["default"]=i.a},f984:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},c=[]},fa0d:function(t,e,n){"use strict";var u=n("9745"),i=n.n(u);i.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-ui/uni-popup-message/uni-popup-message-create-component',
    {
        'components/uni-ui/uni-popup-message/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("cdbc"))
        })
    },
    [['components/uni-ui/uni-popup-message/uni-popup-message-create-component']]
]);
