;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-ui/uni-grid/uni-grid"],{"4b8d":function(t,n,e){"use strict";var i=e("5104"),u=e.n(i);u.a},5104:function(t,n,e){},a00d:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return c})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement;t._self._c},c=[]},b8c8:function(t,n,e){"use strict";e.r(n);var i=e("a00d"),u=e("dc8d");for(var c in u)"default"!==c&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("4b8d");var r,o=e("f0c5"),a=Object(o["a"])(u["default"],i["b"],i["c"],!1,null,"1b0e137f",null,!1,i["a"],r);n["default"]=a.exports},dc8d:function(t,n,e){"use strict";e.r(n);var i=e("e827"),u=e.n(i);for(var c in i)"default"!==c&&function(t){e.d(n,t,(function(){return i[t]}))}(c);n["default"]=u.a},e827:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(n){t.children.forEach((function(t,e){t.width=n}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(n){var e=this;t.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(t){e.width=parseInt((t[0].width-1)/e.column)+"px",n(e.width)}))}}};n.default=e}).call(this,e("c11b")["default"])}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-ui/uni-grid/uni-grid-create-component',
    {
        'components/uni-ui/uni-grid/uni-grid-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("b8c8"))
        })
    },
    [['components/uni-ui/uni-grid/uni-grid-create-component']]
]);
