(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/ss-upload-image/ss-upload-image"],{"21c6":function(e,t,n){"use strict";n.r(t);var u=n("8a6f"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,(function(){return u[e]}))}(r);t["default"]=a.a},4298:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return u}));var u={uniIcon:function(){return n.e("components/uni-icon/uni-icon").then(n.bind(null,"18ae"))}},a=function(){var e=this,t=e.$createElement;e._self._c},r=[]},"74c9":function(e,t,n){"use strict";n.r(t);var u=n("4298"),a=n("21c6");for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n("d0be");var o,i=n("f0c5"),c=Object(i["a"])(a["default"],u["b"],u["c"],!1,null,"d54f955e",null,!1,u["a"],o);t["default"]=c.exports},"8a6f":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={props:{limit:{type:Number,default:5},url:{type:String,required:!0},name:{type:String,default:"file"},formData:{type:Object,default:function(){return{}}},header:{type:Object,default:function(){return{}}},fileList:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{chooseImage:function(){var t=this;e.chooseImage({success:function(n){var u=e.uploadFile({url:t.url,name:t.name,filePath:n.tempFilePaths[0],formData:t.formData,header:t.header,success:function(e){t.$emit("on-success",JSON.parse(e.data))},fail:function(e){t.$emit("on-error",e)}});u.onProgressUpdate((function(e){t.$emit("on-process",e)}))}})},handleRemove:function(e){this.$emit("on-remove",e)}}};t.default=n}).call(this,n("543d")["default"])},d0be:function(e,t,n){"use strict";var u=n("dc93"),a=n.n(u);a.a},dc93:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/ss-upload-image/ss-upload-image-create-component',
    {
        'components/ss-upload-image/ss-upload-image-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("74c9"))
        })
    },
    [['components/ss-upload-image/ss-upload-image-create-component']]
]);
