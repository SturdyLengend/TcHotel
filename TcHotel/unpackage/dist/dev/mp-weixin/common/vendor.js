(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"如程酒店","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 17:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 18);

/***/ }),

/***/ 174:
/*!****************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/utils/htmlparser.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * HTML5 Parser By Sam Blowes
                                                                                                      *
                                                                                                      * Designed for HTML5 documents
                                                                                                      *
                                                                                                      * Original code by John Resig (ejohn.org)
                                                                                                      * http://ejohn.org/blog/pure-javascript-html-parser/
                                                                                                      * Original code by Erik Arvidsson, Mozilla Public License
                                                                                                      * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
                                                                                                      *
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      * License
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      *
                                                                                                      * This code is triple licensed using Apache Software License 2.0,
                                                                                                      * Mozilla Public License or GNU Public License
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License"); you may not
                                                                                                      * use this file except in compliance with the License.  You may obtain a copy
                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * The contents of this file are subject to the Mozilla Public License
                                                                                                      * Version 1.1 (the "License"); you may not use this file except in
                                                                                                      * compliance with the License. You may obtain a copy of the License at
                                                                                                      * http://www.mozilla.org/MPL/
                                                                                                      *
                                                                                                      * Software distributed under the License is distributed on an "AS IS"
                                                                                                      * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
                                                                                                      * License for the specific language governing rights and limitations
                                                                                                      * under the License.
                                                                                                      *
                                                                                                      * The Original Code is Simple HTML Parser.
                                                                                                      *
                                                                                                      * The Initial Developer of the Original Code is Erik Arvidsson.
                                                                                                      * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
                                                                                                      * Reserved.
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * This program is free software; you can redistribute it and/or
                                                                                                      * modify it under the terms of the GNU General Public License
                                                                                                      * as published by the Free Software Foundation; either version 2
                                                                                                      * of the License, or (at your option) any later version.
                                                                                                      *
                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                      * GNU General Public License for more details.
                                                                                                      *
                                                                                                      * You should have received a copy of the GNU General Public License
                                                                                                      * along with this program; if not, write to the Free Software
                                                                                                      * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
                                                                                                      *
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      * Usage
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      *
                                                                                                      * // Use like so:
                                                                                                      * HTMLParser(htmlString, {
                                                                                                      *     start: function(tag, attrs, unary) {},
                                                                                                      *     end: function(tag) {},
                                                                                                      *     chars: function(text) {},
                                                                                                      *     comment: function(text) {}
                                                                                                      * });
                                                                                                      *
                                                                                                      * // or to get an XML string:
                                                                                                      * HTMLtoXML(htmlString);
                                                                                                      *
                                                                                                      * // or to get an XML DOM Document
                                                                                                      * HTMLtoDOM(htmlString);
                                                                                                      *
                                                                                                      * // or to inject into an existing document/DOM node
                                                                                                      * HTMLtoDOM(htmlString, document);
                                                                                                      * HTMLtoDOM(htmlString, document.body);
                                                                                                      *
                                                                                                      */
// Regular Expressions for parsing tags and attributes
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g; // Empty Elements - HTML 5

var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'); // Block Elements - HTML 5
// fixed by xxx 将 ins 标签从块级名单中移除

var block = makeMap('a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5

var inline = makeMap('abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'); // Elements that you can, intentionally, leave open
// (and which close themselves)

var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'); // Attributes that have their values filled in disabled="disabled"

var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'); // Special Elements (can contain anything)

var special = makeMap('script,style');
function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var stack = [];
  var last = html;

  stack.last = function () {
    return this[this.length - 1];
  };

  while (html) {
    chars = true; // Make sure we're not in a script or style element

    if (!stack.last() || !special[stack.last()]) {
      // Comment
      if (html.indexOf('<!--') == 0) {
        index = html.indexOf('-->');

        if (index >= 0) {
          if (handler.comment) {
            handler.comment(html.substring(4, index));
          }

          html = html.substring(index + 3);
          chars = false;
        } // end tag

      } else if (html.indexOf('</') == 0) {
        match = html.match(endTag);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(endTag, parseEndTag);
          chars = false;
        } // start tag

      } else if (html.indexOf('<') == 0) {
        match = html.match(startTag);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(startTag, parseStartTag);
          chars = false;
        }
      }

      if (chars) {
        index = html.indexOf('<');
        var text = index < 0 ? html : html.substring(0, index);
        html = index < 0 ? '' : html.substring(index);

        if (handler.chars) {
          handler.chars(text);
        }
      }
    } else {
      html = html.replace(new RegExp('([\\s\\S]*?)<\/' + stack.last() + '[^>]*>'), function (all, text) {
        text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2');

        if (handler.chars) {
          handler.chars(text);
        }

        return '';
      });
      parseEndTag('', stack.last());
    }

    if (html == last) {
      throw 'Parse Error: ' + html;
    }

    last = html;
  } // Clean up any remaining tags


  parseEndTag();

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last());
      }
    }

    if (closeSelf[tagName] && stack.last() == tagName) {
      parseEndTag('', tagName);
    }

    unary = empty[tagName] || !!unary;

    if (!unary) {
      stack.push(tagName);
    }

    if (handler.start) {
      var attrs = [];
      rest.replace(attr, function (match, name) {
        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : '';
        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') // "
        });

      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    if (!tagName) {
      var pos = 0;
    } // Find the closest opened tag of the same type
    else {
        for (var pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos] == tagName) {
            break;
          }
        }
      }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (handler.end) {
          handler.end(stack[i]);
        }
      } // Remove the open elements from the stack


      stack.length = pos;
    }
  }
}

function makeMap(str) {
  var obj = {};
  var items = str.split(',');

  for (var i = 0; i < items.length; i++) {
    obj[items[i]] = true;
  }

  return obj;
}

function removeDOCTYPE(html) {
  return html.replace(/<\?xml.*\?>\n/, '').replace(/<!doctype.*>\n/, '').replace(/<!DOCTYPE.*>\n/, '');
}

function parseAttrs(attrs) {
  return attrs.reduce(function (pre, attr) {
    var value = attr.value;
    var name = attr.name;

    if (pre[name]) {
      pre[name] = pre[name] + " " + value;
    } else {
      pre[name] = value;
    }

    return pre;
  }, {});
}

function parseHtml(html) {
  html = removeDOCTYPE(html);
  var stacks = [];
  var results = {
    node: 'root',
    children: [] };

  HTMLParser(html, {
    start: function start(tag, attrs, unary) {
      var node = {
        name: tag };


      if (attrs.length !== 0) {
        node.attrs = parseAttrs(attrs);
      }

      if (unary) {
        var parent = stacks[0] || results;

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      } else {
        stacks.unshift(node);
      }
    },
    end: function end(tag) {
      var node = stacks.shift();
      if (node.name !== tag) console.error('invalid state: mismatch end tag');

      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        var parent = stacks[0];

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      }
    },
    chars: function chars(text) {
      var node = {
        type: 'text',
        text: text };


      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        var parent = stacks[0];

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      }
    },
    comment: function comment(text) {
      var node = {
        node: 'comment',
        text: text };

      var parent = stacks[0];

      if (!parent.children) {
        parent.children = [];
      }

      parent.children.push(node);
    } });

  return results.children;
}var _default =

parseHtml;exports.default = _default;

/***/ }),

/***/ 18:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 19);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 19:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 195:
/*!************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/utils/format.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.formatRichText = formatRichText;function formatRichText(html) {
  var html = new String(html);
  var newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
    match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '');
    match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '');
    match = match.replace(/height="[^"]+"/gi, '').replace(/height='[^']+'/gi, '');
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
    match = match.replace(/width:[^;]+;/gi, 'max-width:100%;').replace(/width:[^;]+;/gi, 'max-width:100%;');
    return match;
  });
  newContent = newContent.replace(/<br[^>]*\/>/gi, '');
  newContent = newContent.replace(/\<img/gi,
  '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"');
  return newContent;
}

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"如程酒店","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"如程酒店","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"如程酒店","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"如程酒店","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 258:
/*!**********************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/utils/html.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * HTML5 Parser By Sam Blowes
                                                                                                      *
                                                                                                      * Designed for HTML5 documents
                                                                                                      *
                                                                                                      * Original code by John Resig (ejohn.org)
                                                                                                      * http://ejohn.org/blog/pure-javascript-html-parser/
                                                                                                      * Original code by Erik Arvidsson, Mozilla Public License
                                                                                                      * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
                                                                                                      *
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      * License
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      *
                                                                                                      * This code is triple licensed using Apache Software License 2.0,
                                                                                                      * Mozilla Public License or GNU Public License
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * Licensed under the Apache License, Version 2.0 (the "License"); you may not
                                                                                                      * use this file except in compliance with the License.  You may obtain a copy
                                                                                                      * of the License at http://www.apache.org/licenses/LICENSE-2.0
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * The contents of this file are subject to the Mozilla Public License
                                                                                                      * Version 1.1 (the "License"); you may not use this file except in
                                                                                                      * compliance with the License. You may obtain a copy of the License at
                                                                                                      * http://www.mozilla.org/MPL/
                                                                                                      *
                                                                                                      * Software distributed under the License is distributed on an "AS IS"
                                                                                                      * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
                                                                                                      * License for the specific language governing rights and limitations
                                                                                                      * under the License.
                                                                                                      *
                                                                                                      * The Original Code is Simple HTML Parser.
                                                                                                      *
                                                                                                      * The Initial Developer of the Original Code is Erik Arvidsson.
                                                                                                      * Portions created by Erik Arvidssson are Copyright (C) 2004. All Rights
                                                                                                      * Reserved.
                                                                                                      *
                                                                                                      * ////////////////////////////////////////////////////////////////////////////
                                                                                                      *
                                                                                                      * This program is free software; you can redistribute it and/or
                                                                                                      * modify it under the terms of the GNU General Public License
                                                                                                      * as published by the Free Software Foundation; either version 2
                                                                                                      * of the License, or (at your option) any later version.
                                                                                                      *
                                                                                                      * This program is distributed in the hope that it will be useful,
                                                                                                      * but WITHOUT ANY WARRANTY; without even the implied warranty of
                                                                                                      * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
                                                                                                      * GNU General Public License for more details.
                                                                                                      *
                                                                                                      * You should have received a copy of the GNU General Public License
                                                                                                      * along with this program; if not, write to the Free Software
                                                                                                      * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
                                                                                                      *
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      * Usage
                                                                                                      * ----------------------------------------------------------------------------
                                                                                                      *
                                                                                                      * // Use like so:
                                                                                                      * HTMLParser(htmlString, {
                                                                                                      *     start: function(tag, attrs, unary) {},
                                                                                                      *     end: function(tag) {},
                                                                                                      *     chars: function(text) {},
                                                                                                      *     comment: function(text) {}
                                                                                                      * });
                                                                                                      *
                                                                                                      * // or to get an XML string:
                                                                                                      * HTMLtoXML(htmlString);
                                                                                                      *
                                                                                                      * // or to get an XML DOM Document
                                                                                                      * HTMLtoDOM(htmlString);
                                                                                                      *
                                                                                                      * // or to inject into an existing document/DOM node
                                                                                                      * HTMLtoDOM(htmlString, document);
                                                                                                      * HTMLtoDOM(htmlString, document.body);
                                                                                                      *
                                                                                                      */
// Regular Expressions for parsing tags and attributes
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g; // Empty Elements - HTML 5

var empty = makeMap('area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'); // Block Elements - HTML 5
// fixed by xxx 将 ins 标签从块级名单中移除

var block = makeMap('a,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'); // Inline Elements - HTML 5

var inline = makeMap('abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'); // Elements that you can, intentionally, leave open
// (and which close themselves)

var closeSelf = makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'); // Attributes that have their values filled in disabled="disabled"

var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'); // Special Elements (can contain anything)

var special = makeMap('script,style');
function HTMLParser(html, handler) {
  var index;
  var chars;
  var match;
  var stack = [];
  var last = html;

  stack.last = function () {
    return this[this.length - 1];
  };

  while (html) {
    chars = true; // Make sure we're not in a script or style element

    if (!stack.last() || !special[stack.last()]) {
      // Comment
      if (html.indexOf('<!--') == 0) {
        index = html.indexOf('-->');

        if (index >= 0) {
          if (handler.comment) {
            handler.comment(html.substring(4, index));
          }

          html = html.substring(index + 3);
          chars = false;
        } // end tag

      } else if (html.indexOf('</') == 0) {
        match = html.match(endTag);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(endTag, parseEndTag);
          chars = false;
        } // start tag

      } else if (html.indexOf('<') == 0) {
        match = html.match(startTag);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(startTag, parseStartTag);
          chars = false;
        }
      }

      if (chars) {
        index = html.indexOf('<');
        var text = index < 0 ? html : html.substring(0, index);
        html = index < 0 ? '' : html.substring(index);

        if (handler.chars) {
          handler.chars(text);
        }
      }
    } else {
      html = html.replace(new RegExp('([\\s\\S]*?)<\/' + stack.last() + '[^>]*>'), function (all, text) {
        text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, '$1$2');

        if (handler.chars) {
          handler.chars(text);
        }

        return '';
      });
      parseEndTag('', stack.last());
    }

    if (html == last) {
      throw 'Parse Error: ' + html;
    }

    last = html;
  } // Clean up any remaining tags


  parseEndTag();

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (block[tagName]) {
      while (stack.last() && inline[stack.last()]) {
        parseEndTag('', stack.last());
      }
    }

    if (closeSelf[tagName] && stack.last() == tagName) {
      parseEndTag('', tagName);
    }

    unary = empty[tagName] || !!unary;

    if (!unary) {
      stack.push(tagName);
    }

    if (handler.start) {
      var attrs = [];
      rest.replace(attr, function (match, name) {
        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : '';
        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') // "
        });

      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    if (!tagName) {
      var pos = 0;
    } // Find the closest opened tag of the same type
    else {
        for (var pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos] == tagName) {
            break;
          }
        }
      }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (handler.end) {
          handler.end(stack[i]);
        }
      } // Remove the open elements from the stack


      stack.length = pos;
    }
  }
}

function makeMap(str) {
  var obj = {};
  var items = str.split(',');

  for (var i = 0; i < items.length; i++) {
    obj[items[i]] = true;
  }

  return obj;
}

function removeDOCTYPE(html) {
  return html.replace(/<\?xml.*\?>\n/, '').replace(/<!doctype.*>\n/, '').replace(/<!DOCTYPE.*>\n/, '');
}

function parseAttrs(attrs) {
  return attrs.reduce(function (pre, attr) {
    var value = attr.value;
    var name = attr.name;

    if (pre[name]) {
      pre[name] = pre[name] + " " + value;
    } else {
      pre[name] = value;
    }

    return pre;
  }, {});
}

function parseHtml(html) {
  html = removeDOCTYPE(html);
  var stacks = [];
  var results = {
    node: 'root',
    children: [] };

  HTMLParser(html, {
    start: function start(tag, attrs, unary) {
      var node = {
        name: tag };


      if (attrs.length !== 0) {
        node.attrs = parseAttrs(attrs);
      }

      if (unary) {
        var parent = stacks[0] || results;

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      } else {
        stacks.unshift(node);
      }
    },
    end: function end(tag) {
      var node = stacks.shift();
      if (node.name !== tag) console.error('invalid state: mismatch end tag');

      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        var parent = stacks[0];

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      }
    },
    chars: function chars(text) {
      var node = {
        type: 'text',
        text: text };


      if (stacks.length === 0) {
        results.children.push(node);
      } else {
        var parent = stacks[0];

        if (!parent.children) {
          parent.children = [];
        }

        parent.children.push(node);
      }
    },
    comment: function comment(text) {
      var node = {
        node: 'comment',
        text: text };

      var parent = stacks[0];

      if (!parent.children) {
        parent.children = [];
      }

      parent.children.push(node);
    } });

  return results.children;
}var _default =

parseHtml;exports.default = _default;

/***/ }),

/***/ 27:
/*!***************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/utils/zgrequest.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.myRequestGet = myRequestGet;exports.myRequestPost = myRequestPost;var baseUrl = "https://capi.ructrip.com";

function myRequestGet(url, data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: baseUrl + url,
      method: "GET",
      data: data,
      success: function success(res) {
        console.log('GET成功', res),
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('GET失败'),
        reject(err);
      } });

  });
}


function myRequestPost(url, data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: baseUrl + url,
      header: {
        'Content-Type': 'application/json' },

      method: "POST",
      data: data,
      success: function success(res) {
        console.log('POST成功', res),
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('POST失败'),
        reject(err);
      } });

  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!*******************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/pages.json ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 433:
/*!*********************************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/components/uni-ui/uni-popup/popup.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message = _interopRequireDefault(__webpack_require__(/*! ./message.js */ 434));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// 定义 type 类型:弹出类型：top/bottom/center
var config = {
  // 顶部弹出
  top: 'top',
  // 底部弹出
  bottom: 'bottom',
  // 居中弹出
  center: 'center',
  // 消息提示
  message: 'top',
  // 对话框
  dialog: 'center',
  // 分享
  share: 'bottom' };var _default =


{
  data: function data() {
    return {
      config: config };

  },
  mixins: [_message.default] };exports.default = _default;

/***/ }),

/***/ 434:
/*!***********************************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/components/uni-ui/uni-popup/message.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  created: function created() {
    if (this.type === 'message') {
      // 不显示遮罩
      this.maskShow = false;
      // 获取子组件对象
      this.childrenMsg = null;
    }
  },
  methods: {
    customOpen: function customOpen() {
      if (this.childrenMsg) {
        this.childrenMsg.open();
      }
    },
    customClose: function customClose() {
      if (this.childrenMsg) {
        this.childrenMsg.close();
      }
    } } };exports.default = _default;

/***/ }),

/***/ 477:
/*!*********************************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/components/uni-ui/uni-icons/icons.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  "pulldown": "\uE588",
  "refreshempty": "\uE461",
  "back": "\uE471",
  "forward": "\uE470",
  "more": "\uE507",
  "more-filled": "\uE537",
  "scan": "\uE612",
  "qq": "\uE264",
  "weibo": "\uE260",
  "weixin": "\uE261",
  "pengyouquan": "\uE262",
  "loop": "\uE565",
  "refresh": "\uE407",
  "refresh-filled": "\uE437",
  "arrowthindown": "\uE585",
  "arrowthinleft": "\uE586",
  "arrowthinright": "\uE587",
  "arrowthinup": "\uE584",
  "undo-filled": "\uE7D6",
  "undo": "\uE406",
  "redo": "\uE405",
  "redo-filled": "\uE7D9",
  "bars": "\uE563",
  "chatboxes": "\uE203",
  "camera": "\uE301",
  "chatboxes-filled": "\uE233",
  "camera-filled": "\uE7EF",
  "cart-filled": "\uE7F4",
  "cart": "\uE7F5",
  "checkbox-filled": "\uE442",
  "checkbox": "\uE7FA",
  "arrowleft": "\uE582",
  "arrowdown": "\uE581",
  "arrowright": "\uE583",
  "smallcircle-filled": "\uE801",
  "arrowup": "\uE580",
  "circle": "\uE411",
  "eye-filled": "\uE568",
  "eye-slash-filled": "\uE822",
  "eye-slash": "\uE823",
  "eye": "\uE824",
  "flag-filled": "\uE825",
  "flag": "\uE508",
  "gear-filled": "\uE532",
  "reload": "\uE462",
  "gear": "\uE502",
  "hand-thumbsdown-filled": "\uE83B",
  "hand-thumbsdown": "\uE83C",
  "hand-thumbsup-filled": "\uE83D",
  "heart-filled": "\uE83E",
  "hand-thumbsup": "\uE83F",
  "heart": "\uE840",
  "home": "\uE500",
  "info": "\uE504",
  "home-filled": "\uE530",
  "info-filled": "\uE534",
  "circle-filled": "\uE441",
  "chat-filled": "\uE847",
  "chat": "\uE263",
  "mail-open-filled": "\uE84D",
  "email-filled": "\uE231",
  "mail-open": "\uE84E",
  "email": "\uE201",
  "checkmarkempty": "\uE472",
  "list": "\uE562",
  "locked-filled": "\uE856",
  "locked": "\uE506",
  "map-filled": "\uE85C",
  "map-pin": "\uE85E",
  "map-pin-ellipse": "\uE864",
  "map": "\uE364",
  "minus-filled": "\uE440",
  "mic-filled": "\uE332",
  "minus": "\uE410",
  "micoff": "\uE360",
  "mic": "\uE302",
  "clear": "\uE434",
  "smallcircle": "\uE868",
  "close": "\uE404",
  "closeempty": "\uE460",
  "paperclip": "\uE567",
  "paperplane": "\uE503",
  "paperplane-filled": "\uE86E",
  "person-filled": "\uE131",
  "contact-filled": "\uE130",
  "person": "\uE101",
  "contact": "\uE100",
  "images-filled": "\uE87A",
  "phone": "\uE200",
  "images": "\uE87B",
  "image": "\uE363",
  "image-filled": "\uE877",
  "location-filled": "\uE333",
  "location": "\uE303",
  "plus-filled": "\uE439",
  "plus": "\uE409",
  "plusempty": "\uE468",
  "help-filled": "\uE535",
  "help": "\uE505",
  "navigate-filled": "\uE884",
  "navigate": "\uE501",
  "mic-slash-filled": "\uE892",
  "search": "\uE466",
  "settings": "\uE560",
  "sound": "\uE590",
  "sound-filled": "\uE8A1",
  "spinner-cycle": "\uE465",
  "download-filled": "\uE8A4",
  "personadd-filled": "\uE132",
  "videocam-filled": "\uE8AF",
  "personadd": "\uE102",
  "upload": "\uE402",
  "upload-filled": "\uE8B1",
  "starhalf": "\uE463",
  "star-filled": "\uE438",
  "star": "\uE408",
  "trash": "\uE401",
  "phone-filled": "\uE230",
  "compose": "\uE400",
  "videocam": "\uE300",
  "trash-filled": "\uE8DC",
  "download": "\uE403",
  "chatbubble-filled": "\uE232",
  "chatbubble": "\uE202",
  "cloud-download": "\uE8E4",
  "cloud-upload-filled": "\uE8E5",
  "cloud-upload": "\uE8E6",
  "cloud-download-filled": "\uE8E9",
  "headphones": "\uE8BF",
  "shop": "\uE609" };exports.default = _default;

/***/ }),

/***/ 50:
/*!*********************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/static/image/tuceng1.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 51:
/*!*********************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/static/image/tuceng2.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 52:
/*!*********************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/static/image/tuceng3.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 53:
/*!*********************************************************************!*\
  !*** C:/Users/wtte/Desktop/如程/Application/static/image/tuceng4.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map