;my.defineComponent || (my.defineComponent = Component);(my["webpackJsonp"]=my["webpackJsonp"]||[]).push([["components/uni-ui/uni-collapse/uni-collapse"],{"1d3c":function(n,t,e){"use strict";var u=e("8663"),c=e.n(u);c.a},3059:function(n,t,e){"use strict";var u;e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return u}));var c=function(){var n=this,t=n.$createElement;n._self._c},r=[]},"44da":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=u},6914:function(n,t,e){"use strict";e.r(t);var u=e("3059"),c=e("d735");for(var r in c)"default"!==r&&function(n){e.d(t,n,(function(){return c[n]}))}(r);e("1d3c");var i,a=e("f0c5"),o=Object(a["a"])(c["default"],u["b"],u["c"],!1,null,"49733db9",null,!1,u["a"],i);t["default"]=o.exports},8663:function(n,t,e){},d735:function(n,t,e){"use strict";e.r(t);var u=e("44da"),c=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);t["default"]=c.a}}]);
;(my["webpackJsonp"] = my["webpackJsonp"] || []).push([
    'components/uni-ui/uni-collapse/uni-collapse-create-component',
    {
        'components/uni-ui/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('c11b')['createComponent'](__webpack_require__("6914"))
        })
    },
    [['components/uni-ui/uni-collapse/uni-collapse-create-component']]
]);
