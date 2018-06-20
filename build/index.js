module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CheckInfoCard = __webpack_require__(1);

Object.defineProperty(exports, 'CheckInfoCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CheckInfoCard).default;
  }
});

var _TranslationHelps = __webpack_require__(18);

Object.defineProperty(exports, 'TranslationHelps', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TranslationHelps).default;
  }
});

var _ScripturePane = __webpack_require__(513);

Object.defineProperty(exports, 'ScripturePane', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScripturePane).default;
  }
});

var _VerseEditor = __webpack_require__(558);

Object.defineProperty(exports, 'VerseEditor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_VerseEditor).default;
  }
});

var _VerseCheck = __webpack_require__(740);

Object.defineProperty(exports, 'VerseCheck', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_VerseCheck).default;
  }
});

var _GroupMenu = __webpack_require__(796);

Object.defineProperty(exports, 'GroupMenu', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GroupMenu).default;
  }
});

var _Bookmark = __webpack_require__(743);

Object.defineProperty(exports, 'Bookmark', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bookmark).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _CheckInfoCard = __webpack_require__(2);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_CheckInfoCard).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/react-bootstrap/es/index.js'");

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(13);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, ".handleIcon {\n  z-index: 999;\n  color: var(--reverse-color);\n  background-color: var(--text-color-dark);\n  padding: 10px 0px;\n  border-radius: 5px 0px 0px 5px\n}\n\n.linkActive {\n  display: flex;\n  justify-content: flex-end;\n  font-weight: bold;\n  margin: 5px 20px;\n  cursor: pointer\n}\n\n.linkInactive {\n  display: none;\n  font-weight: bold;\n  margin: 5px 20px;\n  text-align: right;\n  cursor: default;\n}\n\n.checkInfo {\n  flex: 0 0 120px;\n  display: flex;\n  margin: 0 10px;\n  color: var(--reverse-color);\n  background-color: var(--accent-color-dark);\n  box-shadow: 0 3px 10px var(--background-color);\n  border-radius: 2px;\n}\n\n.leftSide {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.rightSide {\n  flex: 2;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 10px;\n  border-left: 1px solid var(--reverse-color);\n}\n\n.title {\n  max-height: 100px;\n  overflow-y: auto;\n  padding: 0 20px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.phrase {\n  max-height: 80px;\n  overflow-y: auto;\n  padding: 0 20px;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 14:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/css-loader/lib/css-base.js'");

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "/* Include here all css settings that should be part of multiple css stylesheets and\n include them in your .css files */\n\n/*! Hint.css - v2.5.0 - 2017-04-23\n* http://kushagragour.in/lab/hint/\n* Copyright (c) 2017 Kushagra Gour */\n\n[class*=hint--]{position:relative;display:inline-block}[class*=hint--]:after,[class*=hint--]:before{position:absolute;-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);transform:translate3d(0,0,0);visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;-webkit-transition:.3s ease;-moz-transition:.3s ease;transition:.3s ease;-webkit-transition-delay:0s;-moz-transition-delay:0s;transition-delay:0s}[class*=hint--]:hover:after,[class*=hint--]:hover:before{visibility:visible;opacity:1;-webkit-transition-delay:.1s;-moz-transition-delay:.1s;transition-delay:.1s}[class*=hint--]:before{content:'';position:absolute;background:0 0;border:6px solid transparent;z-index:1000001}[class*=hint--]:after{background:#383838;color:#fff;padding:8px 10px;font-size:12px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;line-height:12px;white-space:nowrap;text-shadow:0 -1px 0 #000;box-shadow:4px 4px 8px rgba(0,0,0,.3)}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label='']:after,[aria-label='']:before,[data-hint='']:after,[data-hint='']:before{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#383838}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#383838}.hint--top:after,.hint--top:before{bottom:100%;left:50%}.hint--top:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top:after{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);transform:translateX(-50%)}.hint--top:hover:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--top:hover:after{-webkit-transform:translateX(-50%) translateY(-8px);-moz-transform:translateX(-50%) translateY(-8px);transform:translateX(-50%) translateY(-8px)}.hint--bottom:after,.hint--bottom:before{top:100%;left:50%}.hint--bottom:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom:after{-webkit-transform:translateX(-50%);-moz-transform:translateX(-50%);transform:translateX(-50%)}.hint--bottom:hover:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--bottom:hover:after{-webkit-transform:translateX(-50%) translateY(8px);-moz-transform:translateX(-50%) translateY(8px);transform:translateX(-50%) translateY(8px)}.hint--right:before{border-right-color:#383838;margin-left:-11px;margin-bottom:-6px}.hint--right:after{margin-bottom:-14px}.hint--right:after,.hint--right:before{left:100%;bottom:50%}.hint--right:hover:after,.hint--right:hover:before{-webkit-transform:translateX(8px);-moz-transform:translateX(8px);transform:translateX(8px)}.hint--left:before{border-left-color:#383838;margin-right:-11px;margin-bottom:-6px}.hint--left:after{margin-bottom:-14px}.hint--left:after,.hint--left:before{right:100%;bottom:50%}.hint--left:hover:after,.hint--left:hover:before{-webkit-transform:translateX(-8px);-moz-transform:translateX(-8px);transform:translateX(-8px)}.hint--top-left:after,.hint--top-left:before{bottom:100%;left:50%}.hint--top-left:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top-left:after{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);transform:translateX(-100%);margin-left:12px}.hint--top-left:hover:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--top-left:hover:after{-webkit-transform:translateX(-100%) translateY(-8px);-moz-transform:translateX(-100%) translateY(-8px);transform:translateX(-100%) translateY(-8px)}.hint--top-right:after,.hint--top-right:before{bottom:100%;left:50%}.hint--top-right:before{margin-bottom:-11px;left:calc(50% - 6px)}.hint--top-right:after{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0);margin-left:-12px}.hint--top-right:hover:after,.hint--top-right:hover:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--bottom-left:after,.hint--bottom-left:before{top:100%;left:50%}.hint--bottom-left:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom-left:after{-webkit-transform:translateX(-100%);-moz-transform:translateX(-100%);transform:translateX(-100%);margin-left:12px}.hint--bottom-left:hover:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--bottom-left:hover:after{-webkit-transform:translateX(-100%) translateY(8px);-moz-transform:translateX(-100%) translateY(8px);transform:translateX(-100%) translateY(8px)}.hint--bottom-right:after,.hint--bottom-right:before{top:100%;left:50%}.hint--bottom-right:before{margin-top:-11px;left:calc(50% - 6px)}.hint--bottom-right:after{-webkit-transform:translateX(0);-moz-transform:translateX(0);transform:translateX(0);margin-left:-12px}.hint--bottom-right:hover:after,.hint--bottom-right:hover:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--large:after,.hint--medium:after,.hint--small:after{white-space:normal;line-height:1.4em;word-wrap:break-word}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}.hint--error:after{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{background-color:#458746;text-shadow:0 -1px 0 #1a321a}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--top:after{-webkit-transform:translateX(-50%) translateY(-8px);-moz-transform:translateX(-50%) translateY(-8px);transform:translateX(-50%) translateY(-8px)}.hint--always.hint--top-left:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--top-left:after{-webkit-transform:translateX(-100%) translateY(-8px);-moz-transform:translateX(-100%) translateY(-8px);transform:translateX(-100%) translateY(-8px)}.hint--always.hint--top-right:after,.hint--always.hint--top-right:before{-webkit-transform:translateY(-8px);-moz-transform:translateY(-8px);transform:translateY(-8px)}.hint--always.hint--bottom:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--bottom:after{-webkit-transform:translateX(-50%) translateY(8px);-moz-transform:translateX(-50%) translateY(8px);transform:translateX(-50%) translateY(8px)}.hint--always.hint--bottom-left:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--bottom-left:after{-webkit-transform:translateX(-100%) translateY(8px);-moz-transform:translateX(-100%) translateY(8px);transform:translateX(-100%) translateY(8px)}.hint--always.hint--bottom-right:after,.hint--always.hint--bottom-right:before{-webkit-transform:translateY(8px);-moz-transform:translateY(8px);transform:translateY(8px)}.hint--always.hint--left:after,.hint--always.hint--left:before{-webkit-transform:translateX(-8px);-moz-transform:translateX(-8px);transform:translateX(-8px)}.hint--always.hint--right:after,.hint--always.hint--right:before{-webkit-transform:translateX(8px);-moz-transform:translateX(8px);transform:translateX(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:after,.hint--no-animate:before{-webkit-transition-duration:0s;-moz-transition-duration:0s;transition-duration:0s}.hint--bounce:after,.hint--bounce:before{-webkit-transition:opacity .3s ease,visibility .3s ease,-webkit-transform .3s cubic-bezier(.71,1.7,.77,1.24);-moz-transition:opacity .3s ease,visibility .3s ease,-moz-transform .3s cubic-bezier(.71,1.7,.77,1.24);transition:opacity .3s ease,visibility .3s ease,transform .3s cubic-bezier(.71,1.7,.77,1.24)}\n\n:root {\n  --accent-color: #2196F3;\n  --accent-color-light: #44C6FF;\n  --accent-color-dark: #19579E;\n\n  --reverse-color: #FFFFFF;\n\n  --completed-color: #58C17A;\n  --warning-color: #F44336;\n  --highlight-color: #FDD910;\n\n  --text-color: #333333;\n  --text-color-light: #747474;\n  --text-color-dark: #000000;\n\n  --background-color: #747474;\n  --background-color-light: #EEEEEE;\n  --background-color-dark: #333333;\n\n  --border-color: #CCCCCC;\n  --tool-max-height: calc(100vh - 30px);\n}\n\n.btn-prime {\n  background-color: var(--accent-color-dark);\n  background-image: linear-gradient(to bottom, var(--accent-color-dark), var(--accent-color-dark));\n  color: var(--reverse-color);\n  height: 35px;\n  width: 190px;\n  border-radius: 2px;\n  margin: 10px;\n  padding: 0;\n  vertical-align: middle;\n  text-align: center;\n  border: 2px solid var(--accent-color-dark);\n  outline: none;\n}\n\n.btn-prime:enabled:hover, .btn-prime:focus {\n  background-color: var(--accent-color-dark);\n  background-image: linear-gradient(to bottom, var(--accent-color-dark), var(--accent-color-dark));\n  color: var(--reverse-color);\n  height: 35px;\n  width: 190px;\n  border-radius: 2px;\n  box-shadow: 0 2px 2px var(--text-color-light);\n  margin: 10px;\n  padding: 0;\n  vertical-align: middle;\n  text-align: center;\n  border: 2px solid var(--accent-color-dark);\n  outline: none;\n}\n\n.btn-prime:disabled, .btn-prime:disabled:hover {\n  color: var(--reverse-color);\n  cursor: not-allowed;\n  opacity: .6;\n}\n\n.btn-prime-reverse, .btn-prime-reverse:hover, .btn-prime-reverse:focus {\n  background-color: var(--accent-color-dark);\n  opacity: 0.6;\n  color: var(--reverse-color);\n  height: 35px;\n  width: 190px;\n  border-radius: 0;\n  margin: 10px;\n  padding: 0;\n  vertical-align: middle;\n  text-align: center;\n  border: 2px solid var(--accent-color-dark);\n  outline: none;\n}\n\n.btn-second {\n  background-color: var(--reverse-color);\n  color: var(--accent-color-dark);\n  height: 35px;\n  width: 190px;\n  border-radius: 2px;\n  margin: 10px;\n  padding: 0;\n  vertical-align: middle;\n  text-align: center;\n  border: 2px solid var(--accent-color-dark);\n  outline: none;\n}\n\n.btn-second:enabled:hover, .btn-second:focus {\n  background-color: var(--reverse-color);\n  color: var(--accent-color-dark);\n  height: 35px;\n  width: 190px;\n  border-radius: 2px;\n  box-shadow: 0 2px 2px var(--text-color-light);\n  margin: 10px;\n  padding: 0;\n  vertical-align: middle;\n  text-align: center;\n  border: 2px solid var(--accent-color-dark);\n  outline: none;\n}\n\n.btn-second:disabled, .btn-second:disabled:hover {\n  color: var(--accent-color-dark);\n  cursor: not-allowed;\n  opacity: .6;\n}\n\n.btn-second-reverse, .btn-second-reverse:hover, .btn-second-reverse:focus {\n  background-color: var(--accent-color-dark);\n  opacity: 0.6;\n  color: var(--reverse-color);\n  height: 35px;\n  width: 190px;\n  border-radius: 0;\n  margin: 10px;\n  padding: 0;\n  vertical-align: middle;\n  text-align: center;\n  border: 2px solid var(--reverse-color);\n  outline: none;\n}", ""]);

// exports


/***/ }),

/***/ 16:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/style-loader/lib/addStyles.js'");

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TranslationHelps = __webpack_require__(19);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_TranslationHelps).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(20);

var _reactBootstrap = __webpack_require__(117);

var _ExpandedHelpsModal = __webpack_require__(402);

var _ExpandedHelpsModal2 = _interopRequireDefault(_ExpandedHelpsModal);

var _THelpsMarkDown = __webpack_require__(510);

var _THelpsMarkDown2 = _interopRequireDefault(_THelpsMarkDown);

__webpack_require__(511);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TranslationHelps = function TranslationHelps(_ref) {
  var modalArticle = _ref.modalArticle,
      article = _ref.article,
      expandedHelpsButtonHoverText = _ref.expandedHelpsButtonHoverText,
      openExpandedHelpsModal = _ref.openExpandedHelpsModal,
      isShowHelpsSidebar = _ref.isShowHelpsSidebar,
      sidebarToggle = _ref.sidebarToggle,
      isShowHelpsExpanded = _ref.isShowHelpsExpanded,
      modalTitle = _ref.modalTitle,
      translate = _ref.translate;

  var theme = (0, _styles.createMuiTheme)({ scrollbarThumb: { borderRadius: '10px' } });

  if (isShowHelpsSidebar) {
    return _react2.default.createElement(
      _styles.MuiThemeProvider,
      { theme: theme },
      _react2.default.createElement(
        'div',
        { className: 'helps-sash-container' },
        _react2.default.createElement(
          'div',
          { className: 'helps-sash-closed', onClick: sidebarToggle },
          _react2.default.createElement(_reactBootstrap.Glyphicon, {
            glyph: 'chevron-right',
            style: { cursor: "pointer" } })
        ),
        _react2.default.createElement(
          'div',
          { className: 'helps' },
          _react2.default.createElement(
            'div',
            { className: 'helps-title-bar' },
            _react2.default.createElement(_reactBootstrap.Glyphicon, {
              onClick: openExpandedHelpsModal,
              glyph: "fullscreen",
              style: { cursor: "pointer" },
              title: expandedHelpsButtonHoverText })
          ),
          _react2.default.createElement(_THelpsMarkDown2.default, { article: article })
        ),
        _react2.default.createElement(_ExpandedHelpsModal2.default, {
          translate: translate,
          show: isShowHelpsExpanded,
          onHide: openExpandedHelpsModal,
          title: modalTitle,
          article: modalArticle || article })
      )
    );
  } else {
    return _react2.default.createElement(
      'div',
      { className: 'helps-sash-closed', onClick: sidebarToggle },
      _react2.default.createElement(_reactBootstrap.Glyphicon, {
        glyph: 'chevron-left',
        style: { cursor: "pointer" },
        onClick: sidebarToggle
      })
    );
  }
};
// components
/**
 *  TranslationHelps is a feature of the TranslationWords tool and consists of:
 *   A collapible sidebar showing the complete artical sumarized in panel
 *     The sidebar has a sash that expands to about 20% of the application window
 *     The sash can collapse to about 0.25in
 *     The expanded sidebar vertically wraps article text and can scroll entire article
 *     When expanded the "See More" button in panel is hidden
 *
 *
 *   It interoperates with CheckInfoCard
 */

TranslationHelps.propTypes = {
  modalArticle: _propTypes2.default.string.isRequired,
  article: _propTypes2.default.string.isRequired,
  expandedHelpsButtonHoverText: _propTypes2.default.string.isRequired,
  openExpandedHelpsModal: _propTypes2.default.func.isRequired,
  isShowHelpsSidebar: _propTypes2.default.bool.isRequired,
  sidebarToggle: _propTypes2.default.func.isRequired,
  isShowHelpsExpanded: _propTypes2.default.bool.isRequired,
  translate: _propTypes2.default.func.isRequired
};

TranslationHelps.defaultProps = {
  article: "### tHelps Article",
  modalArticle: "### tHelps Modal Article",
  expandedHelpsButtonHoverText: "Click to show expanded help pane",
  modalTitle: "translationHelps",
  translate: function translate(k) {
    return k;
  }
};

exports.default = TranslationHelps;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckInfoCard = function CheckInfoCard(_ref) {
  var title = _ref.title,
      phrase = _ref.phrase,
      seeMoreLabel = _ref.seeMoreLabel,
      onSeeMoreClick = _ref.onSeeMoreClick,
      showSeeMoreButton = _ref.showSeeMoreButton;

  return _react2.default.createElement(
    'div',
    { className: 'checkInfo' },
    _react2.default.createElement(
      'div',
      { className: 'leftSide' },
      _react2.default.createElement(
        'div',
        { className: 'title' },
        title
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'rightSide' },
      _react2.default.createElement(
        'div',
        { className: 'phrase' },
        phrase
      ),
      _react2.default.createElement(
        'div',
        { onClick: showSeeMoreButton ? onSeeMoreClick : null, className: showSeeMoreButton ? 'linkActive' : 'linkInactive' },
        seeMoreLabel
      )
    )
  );
};

CheckInfoCard.propTypes = {
  phrase: _propTypes2.default.string,
  title: _propTypes2.default.string,
  seeMoreLabel: _propTypes2.default.string,
  onSeeMoreClick: _propTypes2.default.func,
  showSeeMoreButton: _propTypes2.default.bool
};

exports.default = CheckInfoCard;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/styles/index.js'");

/***/ }),

/***/ 237:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/react-dom/index.js'");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/prop-types/index.js'");

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(20);

var _Dialog = __webpack_require__(403);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = __webpack_require__(423);

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(440);

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _Toolbar = __webpack_require__(442);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = __webpack_require__(444);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _reactBootstrap = __webpack_require__(117);

var _reactRemarkable = __webpack_require__(446);

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

__webpack_require__(508);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  paper: { minWidth: 800, minHeight: 500 }
}; /**
   * @description This component displays a modal when the user clicks the
   * new-window glyphicon button on translationHelps component.
   */


var ExpandedHelpsModal = function ExpandedHelpsModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      title = _ref.title,
      article = _ref.article,
      classes = _ref.classes,
      translate = _ref.translate;

  return _react2.default.createElement(
    _Dialog2.default,
    {
      classes: {
        paper: classes.paper
      },
      open: show,
      maxWidth: 'md' },
    _react2.default.createElement(
      _Toolbar2.default,
      { className: 'tool-bar' },
      _react2.default.createElement(
        'div',
        { className: 'tool-bar-title' },
        title
      ),
      _react2.default.createElement(
        _IconButton2.default,
        { style: { position: 'absolute', right: 10 }, color: 'inherit', onClick: onHide, 'aria-label': 'Close', className: 'close-button' },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
      )
    ),
    _react2.default.createElement(
      _DialogContent2.default,
      { className: 'dialog-content' },
      _react2.default.createElement(_reactRemarkable2.default, { options: { html: true }, source: article })
    ),
    _react2.default.createElement(
      _DialogActions2.default,
      { disableActionSpacing: true, className: 'dialog-actions' },
      _react2.default.createElement(
        'button',
        { className: 'btn-prime', onClick: onHide },
        translate('close')
      )
    )
  );
};

ExpandedHelpsModal.propTypes = {
  show: _propTypes2.default.bool.isRequired,
  onHide: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string.isRequired,
  article: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.object.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ExpandedHelpsModal);

/***/ }),

/***/ 403:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/Dialog/index.js'");

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/DialogActions/index.js'");

/***/ }),

/***/ 440:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/DialogContent/index.js'");

/***/ }),

/***/ 442:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/Toolbar/index.js'");

/***/ }),

/***/ 444:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/IconButton/index.js'");

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/react-remarkable/dist/index.js'");

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(509);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".tool-bar {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: var(--reverse-color);\n  background-color: var(--accent-color-dark);\n  padding: 15px;\n  width: 100%;\n  position: relative;\n}\n\n.tool-bar-title {\n  margin: auto;\n  font-size: 22px;\n  font-weight: 400;\n}\n\n.close-button {\n  margin-left: auto;\n}\n\n.dialog-content {\n  padding: 7px;\n}\n\n.dialog-actions {\n  height: 50px;\n  padding: 10px;\n  margin: 0px;\n  border-top: 1px solid var(--border-color);\n}", ""]);

// exports


/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRemarkable = __webpack_require__(446);

var _reactRemarkable2 = _interopRequireDefault(_reactRemarkable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var THelpsMarkDown = function THelpsMarkDown(_ref) {
  var article = _ref.article;
  return _react2.default.createElement(
    'div',
    { className: 'helps-article' },
    _react2.default.createElement('style', { dangerouslySetInnerHTML: {
        __html: ['.remarkableStyling h1{', 'font-size: 19px;', 'font-weight: bold;', '}', '.remarkableStyling h2{', 'font-size: 14px;', 'font-weight: normal;', '}', '.remarkableStyling h3{', 'font-size: 16px;', 'font-weight: bold;', '}', '.remarkableStyling h4{', 'font-size: 16px;', 'font-weight: bold;', '}', '.remarkableStyling blockquote {', 'font-size: small;', '}', '.remarkableStyling blockquote strong {', 'text-decoration: underline;', 'font-weight: normal;', '}'].join('\n')
      } }),
    _react2.default.createElement(
      'div',
      { id: 'helpsbody', className: 'remarkableStyling helpsBody' },
      _react2.default.createElement(_reactRemarkable2.default, { options: { html: true }, source: article })
    )
  );
};

THelpsMarkDown.propTypes = {
  article: _propTypes2.default.string.isRequired
};

exports.default = THelpsMarkDown;

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(512);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, "::-webkit-scrollbar-thumb {\n  border-radius: 7px;\n}\n\n.helps-sash-container {\n  display: flex;\n  height: 100%;\n  max-width: 300px;\n  width: 100%;\n}\n\n.sash-container {\n  display: flex;\n  flex-flow: row nowrap;\n  align-items: center;\n  height: 100vh;\n  width: 1px;\n}\n\n.helps-sash-closed {\n  z-index: 999;\n  color: var(--reverse-color);\n  background-color: var(--text-color-dark);\n  padding: 10px 0px;\n  border-radius: 5px 0px 0px 5px;\n  width: 15px;\n  cursor: pointer;\n  align-self: center;\n}\n\n.helps {\n  display: flex;\n  flex-flow: column nowrap;\n  width:100%;\n}\n\n.helps-title-bar {\n  font-size: 16px;\n  text-align: right;\n  padding: 10px;\n  color: var(--text-color);\n  background-color: var(--background-color-light);\n  border-bottom: thin solid var(--background-color-dark);\n}\n\n.helps-item {\n  display: flex; \n  align-items: center;\n}\n\n.helps-article {\n  padding: 7px;\n  color: var(--text-color);\n  background-color: var(--background-color-light);\n  box-shadow: 0 3px 10px var(--background-color-dark);\n  border-radius: 2px;\n  overflow-y: scroll;\n  flex:auto;\n  display: flex;\n}\n", ""]);

// exports


/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ScripturePane = __webpack_require__(514);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ScripturePane).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepEqual = __webpack_require__(515);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _styles = __webpack_require__(20);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(518);

var _Pane = __webpack_require__(520);

var _Pane2 = _interopRequireDefault(_Pane);

var _ExpandedScripturePaneModal = __webpack_require__(549);

var _ExpandedScripturePaneModal2 = _interopRequireDefault(_ExpandedScripturePaneModal);

var _AddBibleButton = __webpack_require__(597);

var _AddBibleButton2 = _interopRequireDefault(_AddBibleButton);

var _AddPaneModal = __webpack_require__(600);

var _AddPaneModal2 = _interopRequireDefault(_AddPaneModal);

var _bibleHelpers = __webpack_require__(603);

var bibleHelpers = _interopRequireWildcard(_bibleHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

// helpers


// constant
var NAMESPACE = 'ScripturePane';

var ScripturePane = function (_Component) {
  _inherits(ScripturePane, _Component);

  function ScripturePane() {
    _classCallCheck(this, ScripturePane);

    var _this = _possibleConstructorReturn(this, (ScripturePane.__proto__ || Object.getPrototypeOf(ScripturePane)).call(this));

    _this.state = {
      showExpandedScripturePane: false,
      showAddPaneModal: false,
      selectedPane: false,
      biblesWithHighlightedWords: null
    };
    _this.openExpandedScripturePane = _this.openExpandedScripturePane.bind(_this);
    _this.closeExpandedScripturePane = _this.closeExpandedScripturePane.bind(_this);
    _this.showAddBibleModal = _this.showAddBibleModal.bind(_this);
    _this.hideAddBibleModal = _this.hideAddBibleModal.bind(_this);
    _this.selectSourceLanguage = _this.selectSourceLanguage.bind(_this);
    _this.addNewBibleResource = _this.addNewBibleResource.bind(_this);
    _this.removePane = _this.removePane.bind(_this);
    return _this;
  }

  _createClass(ScripturePane, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props = this.props,
          selections = _props.selections,
          contextId = _props.contextId,
          getLexiconData = _props.getLexiconData,
          showPopover = _props.showPopover,
          bibles = _props.bibles,
          translate = _props.translate;

      var biblesWithHighlightedWords = bibleHelpers.getBiblesWithHighlightedWords(bibles, selections, contextId, getLexiconData, showPopover, translate);
      this.setState({ biblesWithHighlightedWords: biblesWithHighlightedWords });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var reParseBibleData = !(0, _deepEqual2.default)(this.props.selections, nextProps.selections) || !(0, _deepEqual2.default)(this.props.contextId, nextProps.contextId) || !(0, _deepEqual2.default)(this.props.bibles, nextProps.bibles);
      if (reParseBibleData) {
        var selections = nextProps.selections,
            contextId = nextProps.contextId,
            getLexiconData = nextProps.getLexiconData,
            showPopover = nextProps.showPopover,
            bibles = nextProps.bibles,
            translate = nextProps.translate;

        var biblesWithHighlightedWords = bibleHelpers.getBiblesWithHighlightedWords(bibles, selections, contextId, getLexiconData, showPopover, translate);
        this.setState({ biblesWithHighlightedWords: biblesWithHighlightedWords });
      }
    }
  }, {
    key: 'openExpandedScripturePane',
    value: function openExpandedScripturePane() {
      this.setState({ showExpandedScripturePane: true });
    }
  }, {
    key: 'closeExpandedScripturePane',
    value: function closeExpandedScripturePane() {
      this.setState({ showExpandedScripturePane: false });
    }
  }, {
    key: 'showAddBibleModal',
    value: function showAddBibleModal() {
      this.setState({ showAddPaneModal: true });
    }
  }, {
    key: 'hideAddBibleModal',
    value: function hideAddBibleModal() {
      this.setState({ showAddPaneModal: false });
    }
  }, {
    key: 'selectSourceLanguage',
    value: function selectSourceLanguage(value) {
      var identifier = value.split('_');
      var selectedBibleId = {
        languageId: identifier[0],
        bibleId: identifier[1]
      };
      this.setState({ selectedPane: value ? selectedBibleId : false });
    }
  }, {
    key: 'addNewBibleResource',
    value: function addNewBibleResource() {
      var _props2 = this.props,
          currentPaneSettings = _props2.currentPaneSettings,
          setToolSettings = _props2.setToolSettings;

      try {
        if (currentPaneSettings) {
          if (this.state.selectedPane) {
            currentPaneSettings.push(this.state.selectedPane);
            setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
            this.hideAddBibleModal();
          }
        }
      } catch (e) {
        console.warn(e);
      }
    }
  }, {
    key: 'removePane',
    value: function removePane(key) {
      var _props3 = this.props,
          currentPaneSettings = _props3.currentPaneSettings,
          setToolSettings = _props3.setToolSettings;

      try {
        if (currentPaneSettings) {
          currentPaneSettings.splice(key, 1);
          setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
        }
      } catch (e) {
        console.warn(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props4 = this.props,
          expandedScripturePaneTitle = _props4.expandedScripturePaneTitle,
          currentPaneSettings = _props4.currentPaneSettings,
          contextId = _props4.contextId,
          editTargetVerse = _props4.editTargetVerse,
          translate = _props4.translate,
          projectDetailsReducer = _props4.projectDetailsReducer,
          bibles = _props4.bibles;

      // material-ui-theme, new color themes could be added here in the future

      var theme = (0, _styles.createMuiTheme)();
      var biblesWithHighlightedWords = this.state.biblesWithHighlightedWords || {};

      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          'div',
          { className: 'scripture-pane-container' },
          _react2.default.createElement(
            'div',
            { className: 'inner-container' },
            _react2.default.createElement(
              'div',
              { className: 'title-bar' },
              _react2.default.createElement(
                'span',
                null,
                translate('pane.title')
              ),
              _react2.default.createElement(_reactBootstrap.Glyphicon, {
                onClick: this.openExpandedScripturePane,
                glyph: "fullscreen",
                style: { cursor: "pointer" },
                title: translate('pane.expand_hover')
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'panes-container' },
              currentPaneSettings.map(function (paneSettings, index) {
                var languageId = paneSettings.languageId,
                    bibleId = paneSettings.bibleId;
                var _biblesWithHighlighte = biblesWithHighlightedWords[languageId][bibleId],
                    _biblesWithHighlighte2 = _biblesWithHighlighte.manifest,
                    language_name = _biblesWithHighlighte2.language_name,
                    direction = _biblesWithHighlighte2.direction,
                    description = _biblesWithHighlighte2.description,
                    bibleData = _biblesWithHighlighte.bibleData;
                var _contextId$reference = contextId.reference,
                    chapter = _contextId$reference.chapter,
                    verse = _contextId$reference.verse;

                var verseElements = bibleData[chapter][verse];

                return _react2.default.createElement(_Pane2.default, {
                  key: index.toString(),
                  translate: translate,
                  index: index,
                  chapter: chapter,
                  verse: verse,
                  bibleId: bibleId,
                  languageName: language_name,
                  direction: direction,
                  description: description,
                  verseElements: verseElements,
                  clickToRemoveResourceLabel: translate('pane.remove_resource'),
                  removePane: _this2.removePane
                });
              }),
              _react2.default.createElement(_AddBibleButton2.default, {
                showAddBibleModal: this.showAddBibleModal,
                clickAddResource: translate('pane.add_resource')
              })
            )
          ),
          _react2.default.createElement(_ExpandedScripturePaneModal2.default, {
            show: this.state.showExpandedScripturePane,
            onHide: this.closeExpandedScripturePane,
            title: expandedScripturePaneTitle,
            primaryLabel: translate('close'),
            biblesWithHighlightedWords: biblesWithHighlightedWords,
            currentPaneSettings: currentPaneSettings,
            contextId: contextId,
            bibles: bibles,
            editTargetVerse: editTargetVerse,
            translate: translate,
            projectDetailsReducer: projectDetailsReducer
          }),
          _react2.default.createElement(_AddPaneModal2.default, {
            translate: translate,
            show: this.state.showAddPaneModal,
            onHide: this.hideAddBibleModal,
            title: translate('pane.add_resource_label'),
            selectedPane: this.state.selectedPane,
            selectLanguageLabel: translate('pane.select_language'),
            selectLabel: translate('select'),
            selectSourceLanguage: this.selectSourceLanguage,
            biblesWithHighlightedWords: biblesWithHighlightedWords,
            addNewBibleResource: this.addNewBibleResource,
            currentPaneSettings: currentPaneSettings
          })
        )
      );
    }
  }]);

  return ScripturePane;
}(_react.Component);

ScripturePane.propTypes = {
  titleLabel: _propTypes2.default.string.isRequired,
  closeButtonLabel: _propTypes2.default.string.isRequired,
  addResourceLabel: _propTypes2.default.string.isRequired,
  clickToRemoveResourceLabel: _propTypes2.default.string.isRequired,
  expandedScripturePaneTitle: _propTypes2.default.string.isRequired,
  expandButtonHoverText: _propTypes2.default.string.isRequired,
  clickAddResource: _propTypes2.default.string.isRequired,
  currentPaneSettings: _propTypes2.default.array.isRequired,
  selectLanguageLabel: _propTypes2.default.string.isRequired,
  selectLabel: _propTypes2.default.string.isRequired,
  setToolSettings: _propTypes2.default.func.isRequired,
  contextId: _propTypes2.default.object.isRequired,
  selections: _propTypes2.default.array.isRequired,
  getLexiconData: _propTypes2.default.func.isRequired,
  showPopover: _propTypes2.default.func.isRequired,
  projectDetailsReducer: _propTypes2.default.object.isRequired,
  editTargetVerse: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.func.isRequired,
  bibles: _propTypes2.default.object.isRequired
};

ScripturePane.defaultProps = {
  titleLabel: '',
  closeButtonLabel: '',
  addResourceLabel: '',
  clickToRemoveResourceLabel: '',
  expandedScripturePaneTitle: '',
  expandButtonHoverText: '',
  clickAddResource: '',
  currentPaneSettings: [],
  selectLanguageLabel: '',
  selectLabel: '',
  setToolSettings: function setToolSettings() {},
  contextId: {},
  selections: [],
  getLexiconData: function getLexiconData() {},
  showPopover: function showPopover() {},
  projectDetailsReducer: {},
  editTargetVerse: function editTargetVerse() {},
  translate: function translate() {},
  bibles: {}
};

exports.default = ScripturePane;

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/deep-equal/index.js'");

/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(519);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, ".scripture-pane-container {\n  flex: 1;\n  height: 100%;\n  margin: 10px;\n  box-shadow: 0 3px 10px var(--background-color);\n  border-radius: 2px;\n}\n\n.inner-container {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.title-bar {\n  flex: 0 0 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  color: var(--reverse-color);\n  background-color: var(--accent-color-dark);\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.panes-container {\n  flex: 1;\n  display: flex;\n  overflow-x: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactContainerDimensions = __webpack_require__(521);

var _reactContainerDimensions2 = _interopRequireDefault(_reactContainerDimensions);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(535);

var _Verse = __webpack_require__(537);

var _Verse2 = _interopRequireDefault(_Verse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pane = function Pane(_ref) {
  var index = _ref.index,
      bibleId = _ref.bibleId,
      languageName = _ref.languageName,
      direction = _ref.direction,
      description = _ref.description,
      chapter = _ref.chapter,
      verse = _ref.verse,
      removePane = _ref.removePane,
      verseElements = _ref.verseElements,
      clickToRemoveResourceLabel = _ref.clickToRemoveResourceLabel,
      translate = _ref.translate;

  var headingText = bibleId !== "targetBible" ? languageName + " (" + bibleId.toUpperCase() + ")" : languageName || '';
  var PANECHAR = 9;

  return _react2.default.createElement(
    'div',
    { className: 'pane-container' },
    _react2.default.createElement(
      'div',
      { className: 'pane-title-container' },
      _react2.default.createElement(
        'div',
        { className: 'pane-title-container-content' },
        _react2.default.createElement(
          'span',
          {
            className: headingText.length > 21 ? 'pane-title-text hint--bottom hint--medium' : 'pane-title-text',
            'aria-label': headingText },
          headingText.length > 21 ? headingText.slice(0, 21) + '...' : headingText
        ),
        _react2.default.createElement(
          _reactContainerDimensions2.default,
          null,
          function (_ref2) {
            var width = _ref2.width;
            return _react2.default.createElement(
              'span',
              {
                className: description.length > width / PANECHAR ? 'pane-subtitle-text hint--bottom hint--medium' : 'pane-subtitle-text',
                'aria-label': description },
              description.length > width / PANECHAR ? description.slice(0, Math.round(width / PANECHAR)) + "..." : description
            );
          }
        )
      ),
      _react2.default.createElement(_reactBootstrap.Glyphicon, {
        className: 'remove-glyph-icon',
        glyph: "remove",
        title: clickToRemoveResourceLabel,
        onClick: function onClick() {
          return removePane(index);
        }
      })
    ),
    _react2.default.createElement(
      'div',
      { className: direction === 'ltr' ? 'verse-content-container-ltr' : 'verse-content-container-rtl' },
      _react2.default.createElement(_Verse2.default, {
        translate: translate,
        verseElements: verseElements,
        bibleId: bibleId,
        direction: direction,
        chapter: chapter,
        verse: verse
      })
    )
  );
};

// components


Pane.propTypes = {
  index: _propTypes2.default.number.isRequired,
  bibleId: _propTypes2.default.string.isRequired,
  languageName: _propTypes2.default.string.isRequired,
  direction: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired,
  chapter: _propTypes2.default.number.isRequired,
  verse: _propTypes2.default.number.isRequired,
  removePane: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.func.isRequired,
  clickToRemoveResourceLabel: _propTypes2.default.string.isRequired,
  verseElements: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.array]).isRequired
};

exports.default = Pane;

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/react-container-dimensions/lib/index.js'");

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(536);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, ".pane-container {\n  min-height: 130px;\n  flex: 1;\n  display: flex;\n  min-width: 240px;\n  flex-direction: column;\n  border-right: 1px solid var(--border-color);\n}\n\n.pane-title-container {\n  flex: 0 0 35px;\n  display: flex;\n  justify-content: space-between;\n  margin: 5px 10px 5px 15px;\n}\n\n.pane-title-container-content {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.pane-title-text {\n  font-weight: 700;\n  font-size: 1em;\n  margin-bottom: -5px;\n}\n\n.pane-subtitle-text {\n  color: var(--text-color-light);\n  font-style: bold;\n  font-family: noto sans;\n}\n\n.verse-content-container-ltr {\n  overflow-y: auto;\n  direction: ltr;\n  padding: 0 15px 10px;\n}\n\n.verse-content-container-rtl {\n  overflow-y: auto;\n  direction: rtl;\n  padding: 0 15px 10px;\n}\n\n.remove-glyph-icon {\n  color: var(--text-color-light);\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = __webpack_require__(444);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Edit = __webpack_require__(538);

var _Edit2 = _interopRequireDefault(_Edit);

__webpack_require__(547);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  edit_wrapper: {
    textAlign: 'right'
  },
  edit_button: {
    padding: 0,
    width: 28,
    height: 28
  }
};

var Verse = function (_Component) {
  _inherits(Verse, _Component);

  function Verse(props) {
    _classCallCheck(this, Verse);

    var _this = _possibleConstructorReturn(this, (Verse.__proto__ || Object.getPrototypeOf(Verse)).call(this, props));

    _this.handleEdit = _this.handleEdit.bind(_this);
    return _this;
  }

  _createClass(Verse, [{
    key: 'handleEdit',
    value: function handleEdit() {
      var _props = this.props,
          bibleId = _props.bibleId,
          chapter = _props.chapter,
          verse = _props.verse,
          verseText = _props.verseText,
          onEdit = _props.onEdit;

      if (typeof onEdit === 'function') {
        onEdit(bibleId, chapter, verse, verseText);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          verseElements = _props2.verseElements,
          bibleId = _props2.bibleId,
          direction = _props2.direction,
          chapter = _props2.chapter,
          verse = _props2.verse,
          onEdit = _props2.onEdit,
          translate = _props2.translate;

      var verseIsPlaceHolder = !verseElements;
      var chapterVerseContent = direction === 'rtl' ? verse + ':' + chapter + ' ' : chapter + ':' + verse + ' ';
      var chapterVerse = _react2.default.createElement(
        'strong',
        null,
        chapterVerseContent
      );
      var isEditable = bibleId === 'targetBible';
      var verseSpan = verseElements;

      if (verseIsPlaceHolder) {
        verseSpan = _react2.default.createElement(
          'span',
          { className: 'placeholder-text' },
          translate('pane.missing_bible')
        );
      }

      var edit = null;
      if (isEditable && onEdit) {
        edit = _react2.default.createElement(
          'div',
          { style: styles.edit_wrapper },
          _react2.default.createElement(
            _IconButton2.default,
            { style: styles.edit_button, onClick: this.handleEdit },
            _react2.default.createElement(_Edit2.default, null)
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'verse-container' },
        _react2.default.createElement(
          'div',
          { className: direction === 'ltr' ? 'verse-content-ltr' : 'verse-content-rtl' },
          chapterVerse,
          verseSpan
        ),
        edit
      );
    }
  }]);

  return Verse;
}(_react.Component);

Verse.propTypes = {
  verseText: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array, _propTypes2.default.object]),
  verseElements: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.string, _propTypes2.default.array]),
  bibleId: _propTypes2.default.string.isRequired,
  direction: _propTypes2.default.string.isRequired,
  chapter: _propTypes2.default.number.isRequired,
  verse: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]),
  onEdit: _propTypes2.default.func,
  translate: _propTypes2.default.func.isRequired
};

exports.default = Verse;

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/icons/Edit.js'");

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(548);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".verse-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.verse-content-ltr {\n  flex: 1;\n  direction: ltr;\n}\n\n.verse-content-rtl {\n  flex: 1;\n  direction: rtl;\n}\n\n.placeholder-text {\n  font-style: italic;\n}\n", ""]);

// exports


/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = __webpack_require__(403);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = __webpack_require__(423);

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(440);

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _Toolbar = __webpack_require__(442);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = __webpack_require__(444);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(550);

var _ChapterView = __webpack_require__(552);

var _ChapterView2 = _interopRequireDefault(_ChapterView);

var _BibleHeadingsRow = __webpack_require__(594);

var _BibleHeadingsRow2 = _interopRequireDefault(_BibleHeadingsRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
var styles = {
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--reverse-color)',
    backgroundColor: 'var(--accent-color-dark)',
    padding: '15px',
    width: '100%'
  },
  title: {
    marginLeft: 'auto',
    fontSize: '22px',
    fontWeight: '400'
  },
  closeButton: {
    marginLeft: 'auto'
  },
  dialogContent: {
    padding: '0px',
    margin: '0px'
  },
  dialogActions: {
    height: '70px',
    padding: '10px',
    margin: '0px',
    borderTop: '1px solid var(--border-color)'
  }
};

var ExpandedScripturePaneModal = function ExpandedScripturePaneModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      title = _ref.title,
      contextId = _ref.contextId,
      biblesWithHighlightedWords = _ref.biblesWithHighlightedWords,
      currentPaneSettings = _ref.currentPaneSettings,
      editTargetVerse = _ref.editTargetVerse,
      translate = _ref.translate,
      projectDetailsReducer = _ref.projectDetailsReducer,
      bibles = _ref.bibles;

  return _react2.default.createElement(
    _Dialog2.default,
    { open: show, onClose: onHide, fullWidth: true, maxWidth: 'md' },
    _react2.default.createElement(
      _Toolbar2.default,
      { style: styles.toolBar },
      _react2.default.createElement(
        'div',
        { style: styles.title },
        title
      ),
      _react2.default.createElement(
        _IconButton2.default,
        { color: 'inherit', onClick: onHide, 'aria-label': 'Close', style: styles.closeButton },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
      )
    ),
    _react2.default.createElement(
      _DialogContent2.default,
      { style: styles.dialogContent },
      _react2.default.createElement(_BibleHeadingsRow2.default, {
        currentPaneSettings: currentPaneSettings,
        biblesWithHighlightedWords: biblesWithHighlightedWords,
        projectDetailsReducer: projectDetailsReducer }),
      _react2.default.createElement(_ChapterView2.default, {
        contextId: contextId,
        currentPaneSettings: currentPaneSettings,
        biblesWithHighlightedWords: biblesWithHighlightedWords,
        editTargetVerse: editTargetVerse,
        translate: translate,
        bibles: bibles,
        projectDetailsReducer: projectDetailsReducer })
    ),
    _react2.default.createElement(
      _DialogActions2.default,
      { disableActionSpacing: true, style: styles.dialogActions },
      _react2.default.createElement(
        'button',
        { className: 'btn-prime', onClick: onHide },
        translate('close')
      )
    )
  );
};

ExpandedScripturePaneModal.propTypes = {
  show: _propTypes2.default.bool.isRequired,
  onHide: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string.isRequired,
  primaryLabel: _propTypes2.default.string.isRequired,
  contextId: _propTypes2.default.object.isRequired,
  biblesWithHighlightedWords: _propTypes2.default.object.isRequired,
  currentPaneSettings: _propTypes2.default.array.isRequired,
  editTargetVerse: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.func.isRequired,
  projectDetailsReducer: _propTypes2.default.object.isRequired,
  bibles: _propTypes2.default.object.isRequired
};

exports.default = ExpandedScripturePaneModal;

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(551);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".expanded-modal-body {\n  padding: 0;\n  max-height: 500px;\n}\n\n.expanded-modal-title {\n  display: flex;\n  flex-direction: row;\n}\n\n.expanded-modal-content {\n  border-bottom: solid 1px var(--border-color);\n}\n\n.expanded-modal-icon {\n  cursor: pointer;\n  color: #ffffff;\n  width: 25;\n  height: 25;\n}\n\n.expanded-modal-icon-button {\n  padding: 0;\n  width: 25;\n  height: 25;\n  margin-top: 5;\n}\n", ""]);

// exports


/***/ }),

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(237);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(553);

var _VerseRow = __webpack_require__(555);

var _VerseRow2 = _interopRequireDefault(_VerseRow);

var _VerseEditor = __webpack_require__(558);

var _VerseEditor2 = _interopRequireDefault(_VerseEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-string-refs */
/* eslint-disable react/no-find-dom-node */


// components


var ChapterView = function (_Component) {
  _inherits(ChapterView, _Component);

  function ChapterView(props) {
    _classCallCheck(this, ChapterView);

    var _this = _possibleConstructorReturn(this, (ChapterView.__proto__ || Object.getPrototypeOf(ChapterView)).call(this, props));

    _this.handleEditTargetVerse = _this.handleEditTargetVerse.bind(_this);
    _this.handleEditorCancel = _this.handleEditorCancel.bind(_this);
    _this.handleEditorSubmit = _this.handleEditorSubmit.bind(_this);
    _this.state = {
      editVerse: null
    };
    return _this;
  }

  _createClass(ChapterView, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$contextId$refe = this.props.contextId.reference,
          chapter = _props$contextId$refe.chapter,
          verse = _props$contextId$refe.verse;

      var verseReference = ChapterView.makeRefKey(chapter, verse);
      var currentVerse = this.verseRefs[verseReference];
      var element = _reactDom2.default.findDOMNode(currentVerse);
      if (element) element.scrollIntoView();
    }

    /**
     * Generates a key to use for verse ref's
     * @param chapter
     * @param verse
     * @return {string}
     */

  }, {
    key: 'handleEditTargetVerse',


    /**
    * Handles events to edit the target verse
    * @param bibleId
    * @param chapter
    * @param verse
    * @param verseText
    */
    value: function handleEditTargetVerse(bibleId, chapter, verse, verseText) {
      this.setState({
        editVerse: {
          bibleId: bibleId,
          chapter: chapter,
          verse: verse,
          verseText: verseText
        }
      });
    }
  }, {
    key: 'handleEditorSubmit',
    value: function handleEditorSubmit(originalVerse, newVerse, reasons) {
      var editTargetVerse = this.props.editTargetVerse;
      var editVerse = this.state.editVerse;

      if (editVerse === null) return;
      var chapter = editVerse.chapter,
          verse = editVerse.verse;

      if (typeof editTargetVerse === 'function') {
        editTargetVerse(chapter, verse, originalVerse, newVerse, reasons);
      } else {
        console.warn('Unable to edit verse. Callback is not a function.');
      }
      this.setState({
        editVerse: null
      });
    }
  }, {
    key: 'handleEditorCancel',
    value: function handleEditorCancel() {
      this.setState({
        editVerse: null
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          contextId = _props.contextId,
          currentPaneSettings = _props.currentPaneSettings,
          biblesWithHighlightedWords = _props.biblesWithHighlightedWords,
          projectDetailsReducer = _props.projectDetailsReducer,
          translate = _props.translate,
          bibles = _props.bibles;
      var _contextId$reference = contextId.reference,
          chapter = _contextId$reference.chapter,
          verse = _contextId$reference.verse;

      var verseNumbers = Object.keys(biblesWithHighlightedWords['en']['ult'].bibleData[chapter]);
      this.verseRefs = {};
      var verseRows = _react2.default.createElement('div', null);

      if (verseNumbers.length > 0) {
        verseRows = verseNumbers.map(function (verseNumber) {
          var refKey = ChapterView.makeRefKey(chapter, verseNumber);
          return _react2.default.createElement(_VerseRow2.default, {
            translate: translate,
            key: verseNumber,
            chapter: chapter,
            verse: verse,
            bibles: bibles,
            currentVerseNumber: verseNumber,
            currentPaneSettings: currentPaneSettings,
            biblesWithHighlightedWords: biblesWithHighlightedWords,
            onEditTargetVerse: _this2.handleEditTargetVerse,
            ref: function ref(node) {
              return _this2.verseRefs[refKey] = node;
            } });
        });
      }

      var editVerse = this.state.editVerse;

      var openEditor = editVerse !== null;
      var verseTitle = '';
      var verseText = '';
      if (openEditor) {
        var bookName = projectDetailsReducer.manifest.target_language.book.name;
        if (bookName === null) {
          console.warn('The localized book name could not be found. This is likely a bug in tC.');
          bookName = projectDetailsReducer.manifest.project.name;
        }
        verseTitle = bookName + ' ' + editVerse.chapter + ':' + editVerse.verse;
        verseText = editVerse.verseText;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'verse-row-container' },
          verseRows
        ),
        _react2.default.createElement(_VerseEditor2.default, { translate: translate,
          onSubmit: this.handleEditorSubmit,
          open: openEditor,
          onCancel: this.handleEditorCancel,
          verseText: verseText,
          verseTitle: verseTitle })
      );
    }
  }], [{
    key: 'makeRefKey',
    value: function makeRefKey(chapter, verse) {
      return 'c' + chapter.toString() + 'v' + verse.toString();
    }
  }]);

  return ChapterView;
}(_react.Component);

ChapterView.propTypes = {
  contextId: _propTypes2.default.object.isRequired,
  currentPaneSettings: _propTypes2.default.array.isRequired,
  biblesWithHighlightedWords: _propTypes2.default.object.isRequired,
  editTargetVerse: _propTypes2.default.func.isRequired,
  projectDetailsReducer: _propTypes2.default.object.isRequired,
  translate: _propTypes2.default.func.isRequired,
  bibles: _propTypes2.default.object.isRequired
};

exports.default = ChapterView;

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(554);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".bible-heading-container {\n  width: 100%;\n  height: 100%;\n}\n\n.verse-row-container {\n  /* overflow-y: scroll;\n  overflow-x: scroll; */\n}", ""]);

// exports


/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(556);

var _Verse = __webpack_require__(537);

var _Verse2 = _interopRequireDefault(_Verse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// components


var VerseRow = function (_Component) {
  _inherits(VerseRow, _Component);

  function VerseRow(props) {
    _classCallCheck(this, VerseRow);

    var _this = _possibleConstructorReturn(this, (VerseRow.__proto__ || Object.getPrototypeOf(VerseRow)).call(this, props));

    _this.handleEdit = _this.handleEdit.bind(_this);
    return _this;
  }

  _createClass(VerseRow, [{
    key: 'handleEdit',
    value: function handleEdit(bibleId, chapter, verse, verseText) {
      var onEditTargetVerse = this.props.onEditTargetVerse;

      if (bibleId === 'targetBible' && typeof onEditTargetVerse === 'function') {
        onEditTargetVerse(bibleId, chapter, verse, verseText);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          chapter = _props.chapter,
          currentVerseNumber = _props.currentVerseNumber,
          currentPaneSettings = _props.currentPaneSettings,
          biblesWithHighlightedWords = _props.biblesWithHighlightedWords,
          bibles = _props.bibles,
          translate = _props.translate;

      var verseCells = _react2.default.createElement('div', null);
      // const isCurrent = currentVerseNumber === verse.toString();

      var colStyle = {
        minWidth: '240px', alignItems: 'stretch', padding: '10px', paddingTop: '20px',
        borderRight: '1px solid var(--border-color)'
      };
      var rowStyle = { display: 'flex', margin: '0', color: 'var(--text-color-dark)', width: '100%' };

      if (currentVerseNumber % 2 === 0) {
        rowStyle.backgroundColor = 'var(--background-color-light)';
      }

      if (currentPaneSettings.length > 0) {
        verseCells = currentPaneSettings.map(function (paneSetting, index) {
          var languageId = paneSetting.languageId,
              bibleId = paneSetting.bibleId;
          var _biblesWithHighlighte = biblesWithHighlightedWords[languageId][bibleId],
              direction = _biblesWithHighlighte.manifest.direction,
              bibleData = _biblesWithHighlighte.bibleData;

          var verseElements = bibleData[chapter][currentVerseNumber];
          var verseText = bibles[languageId][bibleId][chapter][currentVerseNumber]; // string value of the verse.

          return _react2.default.createElement(
            _reactBootstrap.Col,
            { key: index, md: 4, sm: 4, xs: 4, lg: 4, style: colStyle },
            _react2.default.createElement(_Verse2.default, {
              translate: translate,
              verseElements: verseElements,
              verseText: verseText,
              bibleId: bibleId,
              direction: direction,
              chapter: chapter,
              verse: currentVerseNumber,
              onEdit: _this2.handleEdit })
          );
        });
      }

      return _react2.default.createElement(
        _reactBootstrap.Row,
        { style: rowStyle },
        verseCells
      );
    }
  }]);

  return VerseRow;
}(_react.Component);

VerseRow.propTypes = {
  chapter: _propTypes2.default.number.isRequired,
  verse: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]),
  currentVerseNumber: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.number.isRequired]),
  currentPaneSettings: _propTypes2.default.array.isRequired,
  verseElements: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.array.isRequired]),
  biblesWithHighlightedWords: _propTypes2.default.object.isRequired,
  onEditTargetVerse: _propTypes2.default.func.isRequired,
  bibles: _propTypes2.default.object.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = VerseRow;

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(557);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".row-container {\n  display: flex;\n  margin: 0;\n  color: var(--text-color-dark);\n};\n", ""]);

// exports


/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VerseEditor = __webpack_require__(559);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_VerseEditor).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNextEnabled = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Edit = __webpack_require__(538);

var _Edit2 = _interopRequireDefault(_Edit);

var _Done = __webpack_require__(560);

var _Done2 = _interopRequireDefault(_Done);

var _EditScreen = __webpack_require__(561);

var _EditScreen2 = _interopRequireDefault(_EditScreen);

var _ReasonScreen = __webpack_require__(562);

var _ReasonScreen2 = _interopRequireDefault(_ReasonScreen);

var _BaseDialog = __webpack_require__(575);

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _VerseEditorStepper = __webpack_require__(578);

var _VerseEditorStepper2 = _interopRequireDefault(_VerseEditorStepper);

__webpack_require__(592);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components


var steps = ['edit_verse', 'select_reasons'];

/**
 * Checks if the next butt should be enabled
 * @param state
 * @return {*}
 */
var isNextEnabled = exports.isNextEnabled = function isNextEnabled(state) {
  var stepIndex = state.stepIndex,
      verseChanged = state.verseChanged,
      newVerse = state.newVerse,
      reasons = state.reasons;

  switch (stepIndex) {
    case 0:
      return verseChanged && Boolean(newVerse);
    case 1:
      return reasons.length > 0;
    default:
      return false;
  }
};

/**
 * @callback VerseEditor~submitCallback
 * @param {string} originalVerse - the original verse text
 * @param {string} newVerse - the edited version of the verse text
 * @param {string[]} reasons - an array of reasons for editing the verse
 */

/**
 * Renders a form for editing a single verse
 * @property {string} verseText - the verse text to edit
 * @property {func} translate - the locale function
 * @property {VerseEditor~submitCallback} onSubmit - callback when the edit is submitted
 * @property {func} onCancel - callback when the edit is canceled
 */

var VerseEditor = function (_React$Component) {
  _inherits(VerseEditor, _React$Component);

  function VerseEditor(props) {
    _classCallCheck(this, VerseEditor);

    var _this = _possibleConstructorReturn(this, (VerseEditor.__proto__ || Object.getPrototypeOf(VerseEditor)).call(this, props));

    _this._handleBack = _this._handleBack.bind(_this);
    _this._handleCancel = _this._handleCancel.bind(_this);
    _this._handleNext = _this._handleNext.bind(_this);
    _this._isLastStep = _this._isLastStep.bind(_this);
    _this._handleVerseChange = _this._handleVerseChange.bind(_this);
    _this._handleReasonChange = _this._handleReasonChange.bind(_this);
    _this._resetState = _this._resetState.bind(_this);
    _this.state = {
      stepIndex: 0,
      newVerse: '',
      verseChanged: false,
      reasons: []
    };
    return _this;
  }

  _createClass(VerseEditor, [{
    key: '_resetState',
    value: function _resetState() {
      this.setState({
        stepIndex: 0,
        newVerse: '',
        verseChanged: false,
        reasons: []
      });
    }
  }, {
    key: '_handleBack',
    value: function _handleBack() {
      var stepIndex = this.state.stepIndex;

      this.setState({
        stepIndex: Math.max(stepIndex - 1, 0)
      });
    }
  }, {
    key: '_handleCancel',
    value: function _handleCancel() {
      var onCancel = this.props.onCancel;

      onCancel();
      this._resetState();
    }
  }, {
    key: '_handleNext',
    value: function _handleNext() {
      var _state = this.state,
          stepIndex = _state.stepIndex,
          newVerse = _state.newVerse,
          reasons = _state.reasons;
      var _props = this.props,
          verseText = _props.verseText,
          onSubmit = _props.onSubmit;

      if (this._isLastStep()) {
        onSubmit(verseText, newVerse, reasons);
        this._resetState();
      } else {
        this.setState({
          stepIndex: stepIndex + 1
        });
      }
    }
  }, {
    key: '_handleVerseChange',
    value: function _handleVerseChange(newVerse) {
      var verseText = this.props.verseText;

      this.setState({
        newVerse: newVerse,
        verseChanged: newVerse !== verseText
      });
    }
  }, {
    key: '_handleReasonChange',
    value: function _handleReasonChange(newReasons) {
      this.setState({
        reasons: newReasons
      });
    }
  }, {
    key: '_isLastStep',
    value: function _isLastStep() {
      var stepIndex = this.state.stepIndex;

      return stepIndex === steps.length - 1;
    }

    /**
     * Checks if the next button is enabled
     * @return {*}
     */

  }, {
    key: '_isNextEnabled',
    value: function _isNextEnabled() {
      return isNextEnabled(this.state);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          translate = _props2.translate,
          open = _props2.open,
          verseTitle = _props2.verseTitle,
          verseText = _props2.verseText;
      var _state2 = this.state,
          stepIndex = _state2.stepIndex,
          newVerse = _state2.newVerse,
          reasons = _state2.reasons;

      var text = !this.state.verseChanged ? verseText : newVerse;
      var screen = void 0;
      switch (stepIndex) {
        case 0:
          screen = _react2.default.createElement(_EditScreen2.default, { verseText: text, onChange: this._handleVerseChange });
          break;
        case 1:
          screen = _react2.default.createElement(_ReasonScreen2.default, { translate: translate, selectedReasons: reasons, onChange: this._handleReasonChange });
          break;
        default:
          screen = translate('oops');
      }

      var nextStepButtonTitle = translate('buttons.next_button');
      if (this._isLastStep()) {
        nextStepButtonTitle = _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(_Done2.default, { className: 'done-icon' }),
          translate('buttons.save_button')
        );
      }

      var localizedSteps = [];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = steps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var step = _step.value;

          localizedSteps.push(translate(step));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var title = _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(_Edit2.default, { className: 'edit-icon' }),
        translate('edit_verse_title', { passage: verseTitle })
      );

      return _react2.default.createElement(
        _BaseDialog2.default,
        { modal: true,
          open: open,
          title: title },
        _react2.default.createElement(_VerseEditorStepper2.default, { stepIndex: stepIndex,
          className: 'stepper',
          steps: localizedSteps }),
        _react2.default.createElement(
          'div',
          { className: 'screen' },
          screen
        ),
        _react2.default.createElement(
          'div',
          { className: 'actions' },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-link',
              disabled: stepIndex === 0,
              style: { color: stepIndex === 0 ? '#777' : 'var(--accent-color-dark)' },
              onClick: this._handleBack },
            translate('buttons.back_button')
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn-second',
              onClick: this._handleCancel },
            translate('buttons.cancel_button')
          ),
          _react2.default.createElement(
            'button',
            { className: 'btn-prime',
              disabled: !this._isNextEnabled(),
              onClick: this._handleNext },
            nextStepButtonTitle
          )
        )
      );
    }
  }]);

  return VerseEditor;
}(_react2.default.Component);

VerseEditor.propTypes = {
  open: _propTypes2.default.bool.isRequired,
  verseTitle: _propTypes2.default.string.isRequired,
  verseText: _propTypes2.default.string.isRequired,
  translate: _propTypes2.default.func.isRequired,
  onCancel: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
};

exports.default = VerseEditor;

/***/ }),

/***/ 560:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/icons/Done.js'");

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @callback EditScreen~onChange
 * @param {string} newVerse - the edited verse
 */

/**
 * Renders a text area for editing the verse
 * @property {string} verseText - the verse text to edit
 * @property {EditScreen~onChange} onChange - callback when the text has changed
 */
var EditScreen = function (_React$Component) {
  _inherits(EditScreen, _React$Component);

  function EditScreen(props) {
    _classCallCheck(this, EditScreen);

    var _this = _possibleConstructorReturn(this, (EditScreen.__proto__ || Object.getPrototypeOf(EditScreen)).call(this, props));

    _this._handleChange = _this._handleChange.bind(_this);
    return _this;
  }

  _createClass(EditScreen, [{
    key: '_handleChange',
    value: function _handleChange(event) {
      var onChange = this.props.onChange;

      onChange(event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var verseText = this.props.verseText;

      return _react2.default.createElement('textarea', {
        id: 'verse-editor-field',
        rows: 4,
        className: 'edit-screen',
        autoFocus: true,
        onChange: this._handleChange,
        value: verseText });
    }
  }]);

  return EditScreen;
}(_react2.default.Component);

EditScreen.propTypes = {
  verseText: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired
};

exports.default = EditScreen;

/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateReasons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ReasonCheckbox = __webpack_require__(563);

var _ReasonCheckbox2 = _interopRequireDefault(_ReasonCheckbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var updateReasons = exports.updateReasons = function updateReasons(reason, checked, selectedReasons) {
  var newReasons = [].concat(_toConsumableArray(selectedReasons));
  if (checked && !newReasons.includes(reason)) {
    newReasons.push(reason);
  } else if (!checked && newReasons.includes(reason)) {
    var index = newReasons.indexOf(reason);
    newReasons.splice(index, 1);
  }
  return newReasons;
};

/**
 * @callback ReasonScreen~onChange
 * @param {string[]} newReasons - an array of reasons for editing the verse
 */

/**
 * Renders checkboxes to indicate the reason for the change
 * @property {ReasonScreen~onChange} onChange - callback when the selected reasons change
 * @property {func} translate - the locale function
 * @property {string[]} selectedReasons - an array of selected reasons
 */

var ReasonScreen = function (_React$Component) {
  _inherits(ReasonScreen, _React$Component);

  function ReasonScreen(props) {
    _classCallCheck(this, ReasonScreen);

    var _this = _possibleConstructorReturn(this, (ReasonScreen.__proto__ || Object.getPrototypeOf(ReasonScreen)).call(this, props));

    _this._handleCheck = _this._handleCheck.bind(_this);
    return _this;
  }

  /**
   * Checks if a checkbox is selected
   * @param {string} reason
   * @param {bool} checked
   * @return {boolean}
   * @private
   */


  _createClass(ReasonScreen, [{
    key: '_handleCheck',
    value: function _handleCheck(reason, checked) {
      var _props = this.props,
          selectedReasons = _props.selectedReasons,
          onChange = _props.onChange;

      var newReasons = updateReasons(reason, checked, selectedReasons);
      onChange(newReasons);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          translate = _props2.translate,
          selectedReasons = _props2.selectedReasons;


      return _react2.default.createElement(
        'div',
        { className: 'reasons-screen' },
        _react2.default.createElement(
          'div',
          { className: 'reasons-screen-column' },
          _react2.default.createElement(_ReasonCheckbox2.default, { reason: 'spelling',
            label: translate('spelling'),
            onCheck: this._handleCheck,
            selectedReasons: selectedReasons }),
          _react2.default.createElement(_ReasonCheckbox2.default, { reason: 'punctuation',
            label: translate('punctuation'),
            onCheck: this._handleCheck,
            selectedReasons: selectedReasons }),
          _react2.default.createElement(_ReasonCheckbox2.default, { reason: 'word_choice',
            label: translate('word_choice'),
            onCheck: this._handleCheck,
            selectedReasons: selectedReasons })
        ),
        _react2.default.createElement(
          'div',
          { className: 'reasons-screen-column' },
          _react2.default.createElement(_ReasonCheckbox2.default, { reason: 'meaning',
            label: translate('meaning'),
            onCheck: this._handleCheck,
            selectedReasons: selectedReasons }),
          _react2.default.createElement(_ReasonCheckbox2.default, { reason: 'grammar',
            label: translate('grammar'),
            onCheck: this._handleCheck,
            selectedReasons: selectedReasons }),
          _react2.default.createElement(_ReasonCheckbox2.default, { reason: 'other',
            label: translate('other'),
            onCheck: this._handleCheck,
            selectedReasons: selectedReasons })
        )
      );
    }
  }]);

  return ReasonScreen;
}(_react2.default.Component);

ReasonScreen.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.func.isRequired,
  selectedReasons: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired
};

exports.default = ReasonScreen;

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(20);

var _Checkbox = __webpack_require__(564);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _FormControlLabel = __webpack_require__(570);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _cyan = __webpack_require__(574);

var _cyan2 = _interopRequireDefault(_cyan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  formControlLabelRoot: {
    height: 30
  },
  formControlLabel: {
    justifyContent: 'flex-start',
    fontWeight: 700,
    fontSize: 16
  },
  checkBox: {
    '&$checked': {
      color: _cyan2.default[500]
    }
  },
  checked: {}
};

/**
 * @callback ReasonCheckbox~onCheck
 * @param {string} reason - the reason being checked
 * @param {bool} checked - indicates if the reason is checked
 */

/**
 * Renders a reason checkbox
 * @property {string} reason - the reason for the edit
 * @property {string} label - the checkbox label
 * @property {string[]} selectedReasons - an array of selected reasons
 * @property {ReasonCheckbox~onCheck} onCheck - callback when the checkbox is changed
 */

var ReasonCheckbox = function (_React$Component) {
  _inherits(ReasonCheckbox, _React$Component);

  function ReasonCheckbox(props) {
    _classCallCheck(this, ReasonCheckbox);

    var _this = _possibleConstructorReturn(this, (ReasonCheckbox.__proto__ || Object.getPrototypeOf(ReasonCheckbox)).call(this, props));

    _this._handleCheck = _this._handleCheck.bind(_this);
    return _this;
  }

  _createClass(ReasonCheckbox, [{
    key: '_handleCheck',
    value: function _handleCheck(e, checked) {
      var _props = this.props,
          reason = _props.reason,
          onCheck = _props.onCheck;

      onCheck(reason, checked);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          reason = _props2.reason,
          label = _props2.label,
          selectedReasons = _props2.selectedReasons,
          classes = _props2.classes;

      return _react2.default.createElement(_FormControlLabel2.default, {
        classes: {
          root: classes.formControlLabelRoot,
          label: classes.formControlLabel
        },
        control: _react2.default.createElement(_Checkbox2.default, {
          classes: {
            root: classes.checkBox,
            checked: classes.checked
          },
          checked: selectedReasons.includes(reason),
          onChange: this._handleCheck
        }),
        label: label
      });
    }
  }]);

  return ReasonCheckbox;
}(_react2.default.Component);

ReasonCheckbox.propTypes = {
  reason: _propTypes2.default.string.isRequired,
  label: _propTypes2.default.string.isRequired,
  selectedReasons: _propTypes2.default.arrayOf(_propTypes2.default.string),
  onCheck: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.object.isRequired
};

ReasonCheckbox.defaultProps = {
  selectedReasons: []
};

exports.default = (0, _styles.withStyles)(styles)(ReasonCheckbox);

/***/ }),

/***/ 564:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/Checkbox/index.js'");

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/FormControlLabel/index.js'");

/***/ }),

/***/ 574:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/colors/cyan.js'");

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = __webpack_require__(403);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(576);

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogActions = __webpack_require__(423);

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(440);

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _styles = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Generates the dialog actions
 *
 * This was copied from tC core.
 * here should be a better way to provide a consistent dialog experience across tools.
 *
 * @param {bool} actionsEnabled enables/disables the action buttons
 * @param {*} primaryLabel the title of the primary button
 * @param {*} secondaryLabel the title of the secondary button
 * @param {func} onPrimaryClick the click callback of the primary button
 * @param {func} onSecondaryClick the click callback of the secondary button
 * @return {*}
 */
var makeDialogActions = function makeDialogActions(_ref) {
  var actionsEnabled = _ref.actionsEnabled,
      primaryLabel = _ref.primaryLabel,
      secondaryLabel = _ref.secondaryLabel,
      onPrimaryClick = _ref.onPrimaryClick,
      onSecondaryClick = _ref.onSecondaryClick;

  var hasPrimaryLabel = Boolean(primaryLabel);
  var hasSecondaryLabel = Boolean(secondaryLabel);
  var hasPrimaryCallback = Boolean(onPrimaryClick);
  var hasSecondaryCallback = Boolean(onSecondaryClick);
  var actions = [];

  var primaryButton = _react2.default.createElement(
    'button',
    { className: 'btn-prime',
      disabled: !actionsEnabled,
      onClick: onPrimaryClick },
    primaryLabel
  );
  var secondaryButton = _react2.default.createElement(
    'button',
    { className: 'btn-second',
      disabled: !actionsEnabled,
      onClick: onSecondaryClick },
    secondaryLabel
  );

  if (hasSecondaryLabel && hasSecondaryCallback) {
    actions.push(secondaryButton);
  }

  if (hasPrimaryLabel && hasPrimaryCallback) {
    actions.push(primaryButton);
  }
  return actions;
};

var styles = {
  actionRoot: {
    padding: 0
  }
};

/**
 * Represents a generic dialog.
 * You could use this to display simple information,
 * or you could create a new component that wraps this component
 * with some custom functionality.
 *
 * @class
 * @property {bool} [modal] - controls whether this dialog is modal
 * @property {Object[]} [actions] - a custom list of actions. This overrides the default secondary and primary actions.
 * @property {*} [title] - the title of the dialog
 * @property {*} [secondaryLabel] - the label of the secondary action
 * @property {*} [primaryLabel] - the label of the primary action
 * @property {bool} [actionsEnabled] - controls whether the actions are enabled or disabled
 * @property {bool} [open] - controls whether the dialog is open
 * @property {func} [onClose] - callback when the secondary button is triggered. Overridden by `actions`
 * @property {func} [onSubmit] - callback when the primary button is triggered. Overridden by `actions`
 */

var BaseDialog = function (_React$Component) {
  _inherits(BaseDialog, _React$Component);

  function BaseDialog() {
    _classCallCheck(this, BaseDialog);

    return _possibleConstructorReturn(this, (BaseDialog.__proto__ || Object.getPrototypeOf(BaseDialog)).apply(this, arguments));
  }

  _createClass(BaseDialog, [{
    key: 'componentDidCatch',
    value: function componentDidCatch(error, info) {
      console.error(error);
      console.warn(info);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          actionsEnabled = _props.actionsEnabled,
          title = _props.title,
          secondaryLabel = _props.secondaryLabel,
          primaryLabel = _props.primaryLabel,
          onClose = _props.onClose,
          onSubmit = _props.onSubmit,
          open = _props.open,
          children = _props.children,
          actions = _props.actions;


      var dialogActions = actions ? actions : makeDialogActions({
        actionsEnabled: actionsEnabled,
        primaryLabel: primaryLabel,
        secondaryLabel: secondaryLabel,
        onPrimaryClick: onSubmit,
        onSecondaryClick: onClose
      });

      var theme = (0, _styles.createMuiTheme)();
      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          _Dialog2.default,
          {
            fullWidth: true,
            open: open,
            onClose: onClose },
          _react2.default.createElement(
            _DialogTitle2.default,
            {
              disableTypography: true,
              style: {
                color: 'var(--reverse-color)',
                backgroundColor: 'var(--accent-color-dark)',
                padding: '15px',
                display: 'block',
                width: '100%',
                fontSize: 22,
                fontWeight: 400
              } },
            title
          ),
          _react2.default.createElement(
            _DialogContent2.default,
            { className: 'stepper-body' },
            children
          ),
          _react2.default.createElement(
            _DialogActions2.default,
            { disableActionSpacing: true },
            dialogActions
          )
        )
      );
    }
  }]);

  return BaseDialog;
}(_react2.default.Component);

BaseDialog.propTypes = {
  modal: _propTypes2.default.bool,
  actions: _propTypes2.default.array,
  title: _propTypes2.default.any,
  secondaryLabel: _propTypes2.default.any,
  primaryLabel: _propTypes2.default.any,
  actionsEnabled: _propTypes2.default.bool,
  open: _propTypes2.default.bool,
  onClose: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  children: _propTypes2.default.any,
  classes: _propTypes2.default.object
};

BaseDialog.defaultProps = {
  actionsEnabled: true,
  modal: false
};

exports.default = (0, _styles.withStyles)(styles)(BaseDialog);

/***/ }),

/***/ 576:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/DialogTitle/index.js'");

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(20);

var _Stepper = __webpack_require__(579);

var _Stepper2 = _interopRequireDefault(_Stepper);

var _Step = __webpack_require__(583);

var _Step2 = _interopRequireDefault(_Step);

var _StepLabel = __webpack_require__(585);

var _StepLabel2 = _interopRequireDefault(_StepLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  label: {
    fontSize: 14
  }
};

/**
 * Renders the steps for editing a verse
 * @property {object} [style] - custom style attributes
 * @property {int} stepIndex - the current step index
 * @property {string[]} steps - an array of steps
 */

var VerseEditorStepper = function (_React$Component) {
  _inherits(VerseEditorStepper, _React$Component);

  function VerseEditorStepper() {
    _classCallCheck(this, VerseEditorStepper);

    return _possibleConstructorReturn(this, (VerseEditorStepper.__proto__ || Object.getPrototypeOf(VerseEditorStepper)).apply(this, arguments));
  }

  _createClass(VerseEditorStepper, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          stepIndex = _props.stepIndex,
          steps = _props.steps,
          style = _props.style,
          classes = _props.classes;

      return _react2.default.createElement(
        _Stepper2.default,
        { activeStep: stepIndex, style: style },
        steps.map(function (step, index) {
          return _react2.default.createElement(
            _Step2.default,
            { key: index },
            _react2.default.createElement(
              _StepLabel2.default,
              {
                classes: {
                  label: classes.label
                } },
              step
            )
          );
        })
      );
    }
  }]);

  return VerseEditorStepper;
}(_react2.default.Component);

VerseEditorStepper.propTypes = {
  style: _propTypes2.default.object,
  stepIndex: _propTypes2.default.number.isRequired,
  steps: _propTypes2.default.arrayOf(_propTypes2.default.string).isRequired,
  classes: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styles)(VerseEditorStepper);

/***/ }),

/***/ 579:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/Stepper/index.js'");

/***/ }),

/***/ 583:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/Step/index.js'");

/***/ }),

/***/ 585:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/StepLabel/index.js'");

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(593);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, "svg > text {\n  font-size: 1rem !important;\n}\n\n.edit-icon {\n  color: #ffffff;\n  width: 25;\n  height: 25;\n  margin-right: 5;\n  margin-bottom: 5;\n  vertical-align: middle;\n}\n\n.stepper-body {\n  padding: 0;\n}\n\n.screen {\n  padding: 24px;\n}\n\n.stepper {\n  border-bottom: solid 1px #999;\n  height: 50px;\n}\n\n.actions {\n  padding: 0 24px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.done-icon {\n  color: #ffffff;\n  width: 20;\n  height: 20;\n  margin-right: 5;\n  margin-bottom: 5;\n  vertical-align: middle;\n}\n\n.reasons-screen {\n  display: flex;\n  justify-content: center;\n}\n\n.reasons-screen-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.edit-screen {\n  width: 100%;\n  resize: none;\n  padding: 10px;\n  border: solid 1px var(--border-color);\n  font-style: inherit;\n  font-variant: inherit;\n  font-weight: inherit;\n  font-stretch: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  font-family: inherit;\n  cursor: inherit;\n  outline: none;\n  background-color: transparent;\n  -webkit-appearance: textfield;\n  color: rgba(0, 0, 0, 0.870588);\n}", ""]);

// exports


/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(595);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rowStyle = {
  display: 'flex',
  height: "80px",
  margin: '0',
  backgroundColor: 'var(--reverse-color)'
};

var BibleHeadingsRow = function (_Component) {
  _inherits(BibleHeadingsRow, _Component);

  function BibleHeadingsRow() {
    _classCallCheck(this, BibleHeadingsRow);

    return _possibleConstructorReturn(this, (BibleHeadingsRow.__proto__ || Object.getPrototypeOf(BibleHeadingsRow)).apply(this, arguments));
  }

  _createClass(BibleHeadingsRow, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          currentPaneSettings = _props.currentPaneSettings,
          biblesWithHighlightedWords = _props.biblesWithHighlightedWords,
          projectDetailsReducer = _props.projectDetailsReducer;

      var bibleHeadings = currentPaneSettings.map(function (paneSetting, index) {
        var languageId = paneSetting.languageId;
        var bibleId = paneSetting.bibleId;
        var _biblesWithHighlighte = biblesWithHighlightedWords[languageId][bibleId]['manifest'],
            language_name = _biblesWithHighlighte.language_name,
            direction = _biblesWithHighlighte.direction;

        var resourceText = bibleId !== "targetBible" ? " (" + bibleId.toUpperCase() + ")" : "";
        var headingText = language_name + resourceText;
        var dir = direction;
        if (!dir) dir = projectDetailsReducer.manifest.target_language.direction;
        var colStyle = {
          minWidth: '240px', alignItems: 'stretch', padding: '10px', fontSize: '16px', fontWeight: 'bold',
          color: 'var(--text-color-dark)', borderRight: '1px solid var(--border-color)',
          borderBottom: '3px solid var(--border-color)', direction: dir
        };

        return _react2.default.createElement(
          _reactBootstrap.Col,
          { key: index, md: 4, sm: 4, xs: 4, lg: 4, style: colStyle },
          _react2.default.createElement(
            'span',
            null,
            headingText
          )
        );
      });

      return _react2.default.createElement(
        _reactBootstrap.Row,
        { style: rowStyle },
        bibleHeadings
      );
    }
  }]);

  return BibleHeadingsRow;
}(_react.Component);

BibleHeadingsRow.propTypes = {
  currentPaneSettings: _propTypes2.default.array.isRequired,
  biblesWithHighlightedWords: _propTypes2.default.object.isRequired,
  projectDetailsReducer: _propTypes2.default.object.isRequired
};

exports.default = BibleHeadingsRow;

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(596);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, ".row-container {\n  display: flex;\n  height: 70px;\n  margin: 0;\n  margin-right: 12px;\n  background-color: var(--reverse-color);\n  min-width: 500px;\n}\n", ""]);

// exports


/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(598);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddBibleSVG = function AddBibleSVG(_ref) {
  var title = _ref.title;
  return _react2.default.createElement(
    'svg',
    { viewBox: '-424 2130 45.573 45.724', width: '100%', height: '100%' },
    _react2.default.createElement('defs', null),
    _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement(
      'g',
      { id: 'Group_1424', 'data-name': 'Group 1424', opacity: '0.5', transform: 'translate(-1484 1794)' },
      _react2.default.createElement(
        'g',
        { id: 'Book_font_awesome', transform: 'translate(1060 336)' },
        _react2.default.createElement('path', { id: 'path3029', fill: '#333', d: 'M42.89-1398.733a3.747,3.747,0,0,1,.477,3.416l-7.282,23.99a5.469,5.469,0,0,1-2.026,2.846,5.284,5.284,0,0,1-3.244,1.152H6.376a6.484,6.484,0,0,1-3.932-1.417,7.437,7.437,0,0,1-2.635-3.482,4.8,4.8,0,0,1-.053-3.362q0-.106.079-.715t.106-.98a1.474,1.474,0,0,0-.079-.569,1.31,1.31,0,0,1-.079-.516,1.647,1.647,0,0,1,.212-.556,6.46,6.46,0,0,1,.437-.622,6.505,6.505,0,0,0,.437-.622,17.764,17.764,0,0,0,1.192-2.422,14.377,14.377,0,0,0,.794-2.423,2.066,2.066,0,0,0,.013-.794,2.326,2.326,0,0,1-.013-.741,2.22,2.22,0,0,1,.45-.741,4.328,4.328,0,0,0,.45-.609,16.187,16.187,0,0,0,1.112-2.436,10.842,10.842,0,0,0,.662-2.383,3.831,3.831,0,0,0-.066-.847q-.093-.609.013-.741a2.117,2.117,0,0,1,.583-.808q.477-.464.583-.6a10.921,10.921,0,0,0,1.125-2.238,10.042,10.042,0,0,0,.728-2.555,2.189,2.189,0,0,0-.079-.675,1.719,1.719,0,0,1-.053-.7,1.493,1.493,0,0,1,.238-.477c.124-.177.282-.379.477-.61s.344-.414.45-.556a5.968,5.968,0,0,0,.437-.807c.15-.327.282-.635.4-.927s.256-.609.424-.953a4.56,4.56,0,0,1,.516-.847,3.065,3.065,0,0,1,.7-.622,1.768,1.768,0,0,1,.953-.3,5.5,5.5,0,0,1,1.258.146l-.026.079a7.374,7.374,0,0,1,1.35-.238h20.15a3.488,3.488,0,0,1,3.019,1.483,3.777,3.777,0,0,1,.477,3.442l-7.255,23.99a10.352,10.352,0,0,1-1.893,4.064,4.879,4.879,0,0,1-3.4.914H3.623a1.167,1.167,0,0,0-1.006.4,1.209,1.209,0,0,0-.026,1.139q.635,1.853,3.813,1.853H30.842a2.938,2.938,0,0,0,1.483-.41,1.9,1.9,0,0,0,.927-1.1l7.943-26.134a4.277,4.277,0,0,0,.132-1.509A3.5,3.5,0,0,1,42.89-1398.733Zm-28.173.053a.69.69,0,0,0,.053.6.578.578,0,0,0,.53.252H31.4a1.107,1.107,0,0,0,.675-.252,1.181,1.181,0,0,0,.437-.6l.556-1.695a.69.69,0,0,0-.053-.6.578.578,0,0,0-.53-.252h-16.1a1.108,1.108,0,0,0-.675.252,1.182,1.182,0,0,0-.437.6Zm-2.2,6.779a.689.689,0,0,0,.053.6.577.577,0,0,0,.53.251H29.2a1.106,1.106,0,0,0,.675-.251,1.181,1.181,0,0,0,.437-.6l.556-1.695a.689.689,0,0,0-.053-.6.578.578,0,0,0-.53-.252h-16.1a1.108,1.108,0,0,0-.675.252,1.182,1.182,0,0,0-.437.6Z', transform: 'translate(0.522 1408)' })
      ),
      _react2.default.createElement(
        'g',
        { id: 'ic_add', transform: 'translate(1069.493 345.644)' },
        _react2.default.createElement('path', { fill: '#f8f8f8', stroke: '#333', strokeWidth: '4px', fillRule: 'evenodd', d: 'M26.047-6.973h-9.02v9.02H14.02v-9.02H5V-9.98h9.02V-19h3.007v9.02h9.02v3.007Z', transform: 'translate(2.517 26.517)' }),
        _react2.default.createElement('path', { fill: '#f8f8f8', fillRule: 'evenodd', stroke: '#f8f8f8', d: 'M26.047-6.973h-9.02v9.02H14.02v-9.02H5V-9.98h9.02V-19h3.007v9.02h9.02v3.007Z', transform: 'translate(2.517 26.517)' }),
        _react2.default.createElement('path', { fill: 'none', fillRule: 'evenodd', d: 'M36.08,12.08H0V-24H36.08Z', transform: 'translate(0 24)' })
      )
    )
  );
};

AddBibleSVG.propTypes = {
  title: _propTypes2.default.string.isRequired
};

var AddBible = function (_React$Component) {
  _inherits(AddBible, _React$Component);

  function AddBible() {
    _classCallCheck(this, AddBible);

    return _possibleConstructorReturn(this, (AddBible.__proto__ || Object.getPrototypeOf(AddBible)).apply(this, arguments));
  }

  _createClass(AddBible, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showAddBibleModal = _props.showAddBibleModal,
          clickAddResource = _props.clickAddResource;

      return _react2.default.createElement(
        'div',
        { className: 'add-bible-button-container' },
        _react2.default.createElement(
          'div',
          { style: { height: "60px", width: "60px", cursor: 'pointer' }, title: clickAddResource, onClick: showAddBibleModal },
          _react2.default.createElement(AddBibleSVG, { title: clickAddResource })
        )
      );
    }
  }]);

  return AddBible;
}(_react2.default.Component);

AddBible.propTypes = {
  clickAddResource: _propTypes2.default.string.isRequired,
  showAddBibleModal: _propTypes2.default.func.isRequired
};

exports.default = AddBible;

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(599);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".add-bible-button-container {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 130px;\n  min-width: 240px;\n  flex-direction: column;\n  border-right: 1px solid var(--border-color);\n}", ""]);

// exports


/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = __webpack_require__(403);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = __webpack_require__(423);

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(440);

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _Toolbar = __webpack_require__(442);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = __webpack_require__(444);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(601);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--reverse-color)',
    backgroundColor: 'var(--accent-color-dark)',
    padding: '15px',
    width: '100%'
  },
  title: {
    marginLeft: 'auto',
    fontSize: '22px',
    fontWeight: '400'
  },
  closeButton: {
    marginLeft: 'auto'
  },
  dialogContent: {
    color: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
    padding: '0px 24px 24px',
    margin: '0px'
  },
  dialogActions: {
    height: '70px',
    padding: '10px',
    margin: '0px',
    borderTop: '1px solid var(--border-color)'
  },

  icon: {
    color: '#ffffff',
    width: 25,
    height: 25
  },
  iconButton: {
    padding: 0,
    width: 25,
    height: 25,
    marginTop: 5
  },
  body: {
    textAlign: 'center'
  },
  select: {
    margin: '0 auto',
    width: '300px'
  }
};

var AddPaneModal = function AddPaneModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      title = _ref.title,
      selectLanguageLabel = _ref.selectLanguageLabel,
      selectLabel = _ref.selectLabel,
      selectSourceLanguage = _ref.selectSourceLanguage,
      biblesWithHighlightedWords = _ref.biblesWithHighlightedWords,
      selectedPane = _ref.selectedPane,
      addNewBibleResource = _ref.addNewBibleResource,
      currentPaneSettings = _ref.currentPaneSettings,
      translate = _ref.translate;

  var panes = [];
  Object.keys(biblesWithHighlightedWords).forEach(function (languageId) {
    Object.keys(biblesWithHighlightedWords[languageId]).forEach(function (bibleId) {
      var _biblesWithHighlighte = biblesWithHighlightedWords[languageId][bibleId]['manifest'],
          resource_title = _biblesWithHighlighte.resource_title,
          language_name = _biblesWithHighlighte.language_name;

      var resourceText = bibleId !== "targetBible" ? " (" + resource_title + ")" : ' (' + translate('pane.current_project') + ')';
      var displayText = language_name + ' (' + languageId + ') ' + resourceText;
      var foundInCurrentPaneSettings = currentPaneSettings.filter(function (paneSetting) {
        return paneSetting.bibleId === bibleId && paneSetting.languageId === languageId;
      }).length > 0;

      panes.push(_react2.default.createElement(
        'option',
        {
          key: languageId + '_' + bibleId,
          value: languageId + '_' + bibleId,
          disabled: foundInCurrentPaneSettings
        },
        displayText
      ));
    });
  });

  return _react2.default.createElement(
    _Dialog2.default,
    { open: show, onClose: onHide, fullWidth: true, maxWidth: 'md' },
    _react2.default.createElement(
      _Toolbar2.default,
      { style: styles.toolBar },
      _react2.default.createElement(
        'div',
        { style: styles.title },
        title
      ),
      _react2.default.createElement(
        _IconButton2.default,
        { color: 'inherit', onClick: onHide, 'aria-label': 'Close', style: styles.closeButton },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'remove' })
      )
    ),
    _react2.default.createElement(
      _DialogContent2.default,
      { style: styles.dialogContent },
      _react2.default.createElement(
        'h4',
        { style: { marginBottom: "30px" } },
        selectLanguageLabel
      ),
      _react2.default.createElement(
        _reactBootstrap.FormControl,
        {
          componentClass: 'select',
          style: styles.select,
          onChange: function onChange(e) {
            return selectSourceLanguage(e.target.value);
          }
        },
        _react2.default.createElement(
          'option',
          { value: '' },
          selectLabel
        ),
        panes
      )
    ),
    _react2.default.createElement(
      _DialogActions2.default,
      { disableActionSpacing: true, style: styles.dialogActions },
      _react2.default.createElement(
        'button',
        { className: 'btn-second', onClick: onHide },
        'Close'
      ),
      selectedPane && _react2.default.createElement(
        'button',
        { className: 'btn-prime', onClick: addNewBibleResource },
        'Load'
      )
    )
  );
};

AddPaneModal.propTypes = {
  show: _propTypes2.default.bool.isRequired,
  onHide: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string.isRequired,
  selectLanguageLabel: _propTypes2.default.string.isRequired,
  selectLabel: _propTypes2.default.string.isRequired,
  selectSourceLanguage: _propTypes2.default.func.isRequired,
  biblesWithHighlightedWords: _propTypes2.default.object.isRequired,
  selectedPane: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.shape({
    bibleId: _propTypes2.default.string,
    languageId: _propTypes2.default.string
  })]),
  addNewBibleResource: _propTypes2.default.func.isRequired,
  currentPaneSettings: _propTypes2.default.array.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = AddPaneModal;

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(602);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBiblesWithHighlightedWords = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _verseHelpers = __webpack_require__(604);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getBiblesWithHighlightedWords = exports.getBiblesWithHighlightedWords = function getBiblesWithHighlightedWords(bibles, selections, contextId, getLexiconData, showPopover, translate) {
  var parsedBible = {};
  Object.keys(bibles).forEach(function (languageId) {
    parsedBible[languageId] = {};
    var currentBible = bibles[languageId];
    Object.keys(currentBible).forEach(function (bibleId) {
      parsedBible[languageId][bibleId] = { bibleData: {} };
      Object.keys(currentBible[bibleId]).forEach(function (chapterNumber) {
        if (chapterNumber !== 'manifest') {
          parsedBible[languageId][bibleId] = _extends({}, parsedBible[languageId][bibleId], {
            bibleData: _extends({}, parsedBible[languageId][bibleId]['bibleData'], _defineProperty({}, chapterNumber, {}))
          });
          var chapterData = currentBible[bibleId][chapterNumber];
          Object.keys(chapterData).forEach(function (verseNumber) {
            var verseData = chapterData[verseNumber];
            if (verseData && typeof verseData === 'string') {
              // if the verse content is string.
              parsedBible[languageId][bibleId]['bibleData'][chapterNumber][verseNumber] = (0, _verseHelpers.verseString)(verseData, selections);
            } else if (verseData) {
              // then the verse content is an array/verse objects.
              parsedBible[languageId][bibleId]['bibleData'][chapterNumber][verseNumber] = (0, _verseHelpers.verseArray)(verseData, bibleId, contextId, getLexiconData, showPopover, translate);
            }
          });
        } else {
          // is manifest
          var manifest = currentBible[bibleId][chapterNumber];
          parsedBible[languageId][bibleId] = _extends({}, parsedBible[languageId][bibleId], _defineProperty({}, chapterNumber, manifest));
        }
      });
    });
  });

  return parsedBible;
};

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verseArray = exports.verseString = undefined;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _deepEqual = __webpack_require__(515);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _stringPunctuationTokenizer = __webpack_require__(605);

var _stringPunctuationTokenizer2 = _interopRequireDefault(_stringPunctuationTokenizer);

var _wordAligner = __webpack_require__(621);

var _highlightHelpers = __webpack_require__(640);

var highlightHelpers = _interopRequireWildcard(_highlightHelpers);

var _htmlElementsHelpers = __webpack_require__(732);

var _usfmHelpers = __webpack_require__(735);

var _stringHelpers = __webpack_require__(731);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// constants

// helpers
var PLACE_HOLDER_TEXT = '[WARNING: This Bible version does not include text for this reference.]';

var verseString = exports.verseString = function verseString(verseText, selections) {
  verseText = (0, _usfmHelpers.removeMarker)(verseText);
  verseText = verseText.replace(/\s+/g, ' ');
  // if empty string then verseText = place holder warning.
  if (verseText.length === 0) verseText = PLACE_HOLDER_TEXT;
  var verseTextSpans = _react2.default.createElement(
    'span',
    null,
    verseText
  );

  if (selections && selections.length > 0) {
    var _selectionArray = _stringPunctuationTokenizer2.default.selectionArray(verseText, selections);

    verseTextSpans = _selectionArray.map(function (selection, index) {
      return _react2.default.createElement(
        'span',
        { key: index, style: { backgroundColor: selection.selected ? 'var(--highlight-color)' : '' } },
        selection.text
      );
    });
  }

  return verseTextSpans;
};

var verseArray = exports.verseArray = function verseArray() {
  var verseText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var bibleId = arguments[1];
  var contextId = arguments[2];
  var getLexiconData = arguments[3];
  var showPopover = arguments[4];
  var translate = arguments[5];

  var words = _wordAligner.VerseObjectUtils.getWordListForVerse(verseText);
  var wordSpacing = '';
  var previousWord = null;
  var verseSpan = [];

  if (verseText.verseObjects && (0, _stringHelpers.textIsEmptyInVerseObject)(verseText)) {
    // if empty verse string.
    verseSpan.push(_react2.default.createElement(
      'span',
      { key: PLACE_HOLDER_TEXT },
      PLACE_HOLDER_TEXT
    ));
  } else {
    words.forEach(function (word, index, wordsArray) {
      var nextWord = wordsArray[index + 1];
      if ((0, _stringHelpers.isWord)(word)) {
        var padding = wordSpacing;
        wordSpacing = ' '; // spacing between words
        var text = word.word || word.text;
        var isHighlightedWord = false;
        var isBetweenHighlightedWord = false;

        if (bibleId === 'ugnt' && contextId.quote && word.text) {
          isHighlightedWord = highlightHelpers.isWordMatch(word, contextId, words, index);
          isBetweenHighlightedWord = previousWord && !(0, _deepEqual2.default)(previousWord, word) && highlightHelpers.isWordMatch(previousWord, contextId, words, index - 1) && isHighlightedWord;
        } else if (bibleId === 'ulb' || bibleId === 'ult' || bibleId === 'udt' && contextId.quote && word.content) {
          var highlightedDetails = highlightHelpers.getWordHighlightedDetails(contextId, previousWord, word);
          isHighlightedWord = highlightedDetails.isHighlightedWord;
          isBetweenHighlightedWord = highlightedDetails.isBetweenHighlightedWord;
        }
        // Save word to be used as previousWord in next word.
        previousWord = word;
        var paddingSpanStyle = {
          backgroundColor: isBetweenHighlightedWord ? "var(--highlight-color)" : "transparent"
        };

        if (word.strong) {
          // if clickable
          verseSpan.push(_react2.default.createElement(
            'span',
            {
              key: index.toString(),
              onClick: function onClick(e) {
                return (0, _htmlElementsHelpers.onWordClick)(e, word, getLexiconData, showPopover, translate);
              },
              style: { cursor: 'pointer' }
            },
            _react2.default.createElement(
              'span',
              { style: paddingSpanStyle },
              padding
            ),
            _react2.default.createElement(
              'span',
              { style: { backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" } },
              text
            )
          ));
        } else {
          verseSpan.push((0, _htmlElementsHelpers.createNonClickableSpan)(index, paddingSpanStyle, padding, isHighlightedWord, text));
        }
      } else if ((0, _stringHelpers.isNestedMilestone)(word)) {
        // if nested milestone
        var nestedMilestone = highlightHelpers.getWordsFromNestedMilestone(word, contextId, index, previousWord, wordSpacing);
        nestedMilestone.wordSpans.forEach(function (nestedWordSpan) {
          return verseSpan.push(nestedWordSpan);
        });
        previousWord = nestedMilestone.nestedPreviousWord;
        wordSpacing = nestedMilestone.nestedWordSpacing;
      } else if (word.text) {
        // if not word, show punctuation, etc. but not clickable
        wordSpacing = (0, _stringHelpers.punctuationWordSpacing)(word); // spacing before words
        if (highlightHelpers.isPunctuationHighlighted(previousWord, nextWord, contextId)) {
          verseSpan.push((0, _htmlElementsHelpers.createHighlightedSpan)(index, word.text));
        } else {
          verseSpan.push((0, _htmlElementsHelpers.createTextSpan)(index, word.text));
        }
      }
    });
  }

  return verseSpan;
};

/***/ }),

/***/ 605:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/string-punctuation-tokenizer/lib/index.js'");

/***/ }),

/***/ 621:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/word-aligner/lib/index.js'");

/***/ }),

/***/ 640:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWordArrayMatch = isWordArrayMatch;
exports.isWordMatch = isWordMatch;
exports.getWordHighlightedDetails = getWordHighlightedDetails;
exports.getWordsFromNestedMilestone = getWordsFromNestedMilestone;
exports.getDeepNestedWords = getDeepNestedWords;
exports.isPunctuationHighlighted = isPunctuationHighlighted;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _isEqual = __webpack_require__(641);

var _isEqual2 = _interopRequireDefault(_isEqual);

var _stringHelpers = __webpack_require__(731);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isWordArrayMatch(word, contextId) {
  var isMatch = false;
  if (word && word.content && contextId && contextId.quote) {
    isMatch = word.content.some(function (wordItem) {
      var foundMatch = false;
      if (contextId.quote.split(' ').includes(wordItem.content)) {
        foundMatch = contextId.occurrence === wordItem.occurrence;
      }
      return foundMatch;
    });
  }
  return isMatch;
}

function isWordMatch(word, contextId, words, index) {
  var isMatch = false;
  if (word && word.text && contextId && contextId.quote) {
    if (contextId.quote.split(' ').includes(word.text)) {
      // get occurrence of word
      var occurrence = 0;
      for (var i = 0; i <= index; i++) {
        var wordItem = words[i];
        if (wordItem.text === word.text) {
          occurrence++;
        }
      }
      isMatch = occurrence === contextId.occurrence;
    }
  }
  return isMatch;
}

function getWordHighlightedDetails(contextId, previousWord, word) {
  var isHighlightedWord = isWordArrayMatch(word, contextId);
  var isBetweenHighlightedWord = isHighlightedWord && previousWord && !(0, _isEqual2.default)(previousWord, word) && isWordArrayMatch(previousWord, contextId);
  return {
    isHighlightedWord: isHighlightedWord,
    isBetweenHighlightedWord: isBetweenHighlightedWord
  };
}

function getWordsFromNestedMilestone(nestedWords, contextId, index, previousWord, wordSpacing) {
  // if its an array of an array thus get deep nested words array.
  if (Array.isArray(nestedWords[0])) nestedWords = getDeepNestedWords(nestedWords);

  var isHighlightedWord = false;
  var isBetweenHighlightedWord = false;
  var nestedPreviousWord = previousWord;
  var nestedWordSpacing = wordSpacing;

  var wordSpans = nestedWords.map(function (nestedWord, nestedWordIndex, wordsArray) {
    var nestedWordSpanIndex = index.toString() + '_' + nestedWordIndex.toString() + '_' + nestedWord.text;
    var nestedNextWord = wordsArray[index + 1];
    if ((0, _stringHelpers.isWord)(nestedWord)) {
      var padding = nestedWordSpacing;
      nestedWordSpacing = ' '; // spacing between words
      if (nestedPreviousWord && isPuntuationAndNeedsNoSpace(nestedPreviousWord)) padding = '';
      var highlightedDetails = getWordHighlightedDetails(contextId, nestedPreviousWord, nestedWord);
      isHighlightedWord = highlightedDetails.isHighlightedWord;
      isBetweenHighlightedWord = highlightedDetails.isBetweenHighlightedWord;
      nestedPreviousWord = nestedWord;
      var paddingSpanStyle = {
        backgroundColor: isBetweenHighlightedWord ? "var(--highlight-color)" : "transparent"
      };
      return _react2.default.createElement(
        'span',
        { key: nestedWordSpanIndex.toString() },
        _react2.default.createElement(
          'span',
          { style: paddingSpanStyle },
          padding
        ),
        _react2.default.createElement(
          'span',
          { style: { backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" } },
          nestedWord.text
        )
      );
    } else if (nestedWord.text) {
      nestedWordSpacing = (0, _stringHelpers.punctuationWordSpacing)(nestedWord); // spacing before words

      if (isPunctuationHighlighted(nestedPreviousWord, nestedNextWord, contextId)) {
        return _react2.default.createElement(
          'span',
          { key: nestedWordSpanIndex, style: { backgroundColor: 'var(--highlight-color)' } },
          nestedWord.text
        );
      } else {
        return _react2.default.createElement(
          'span',
          { key: nestedWordSpanIndex },
          nestedWord.text
        );
      }
    }
  });

  return {
    wordSpans: wordSpans,
    nestedPreviousWord: nestedPreviousWord,
    nestedWordSpacing: nestedWordSpacing
  };
}

/**
 * Determines if the previous word is a punctuation that
 * doesnt need spacing after it.
 * @param {Object} wordObject
 */
function isPuntuationAndNeedsNoSpace(wordObject) {
  return !(0, _stringHelpers.isWord)(wordObject) && wordObject.text === '"' || wordObject.text === "'";
}

/**
 * Gets a words object array from a deep nested milestone.
 * @param {array} nestedWords
 */
function getDeepNestedWords(nestedWords) {
  var deepNestedWords = null;
  nestedWords.forEach(function (nestedWord) {
    if (nestedWord.text) {
      deepNestedWords = nestedWords;
    } else {
      deepNestedWords = getDeepNestedWords(nestedWord);
    }
  });
  return deepNestedWords;
}

/**
 * Determines if a punctuation should be highlighted or not.
 * @param {object} previousWord
 * @param {object} nextWord
 * @param {object} contextId
 * @returns {bool} true or false. highlighted or not highlighted.
 */
function isPunctuationHighlighted(previousWord, nextWord, contextId) {
  // handle nested previous words
  if (previousWord && Array.isArray(previousWord[0])) {
    var nestedPreviousWord = getDeepNestedWords(previousWord);
    // get the last item in the array
    previousWord = nestedPreviousWord[nestedPreviousWord.length - 1];
  }
  // handle nested next words
  if (nextWord) {
    if (Array.isArray(nextWord) || Array.isArray(nextWord[0])) {
      var nestedNextWords = getDeepNestedWords(nextWord);
      nextWord = nestedNextWords[0];
    }
  }

  if (previousWord && nextWord) {
    return isWordArrayMatch(previousWord, contextId) && isWordArrayMatch(nextWord, contextId);
  } else if (previousWord) {
    return isWordArrayMatch(previousWord, contextId);
  } else if (nextWord) {
    return isWordArrayMatch(nextWord, contextId);
  } else {
    return false;
  }
}

/***/ }),

/***/ 641:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/lodash/isEqual.js'");

/***/ }),

/***/ 731:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.punctuationWordSpacing = punctuationWordSpacing;
exports.textIsEmptyInVerseObject = textIsEmptyInVerseObject;
var isWord = exports.isWord = function isWord(word) {
  return typeof word !== 'string' && (word.word || word.type === 'word');
};

var isNestedMilestone = exports.isNestedMilestone = function isNestedMilestone(word) {
  var deepNestedChild = false;
  if (word[0] && word[0][0]) deepNestedChild = isDeepNestedChild(word);
  return Array.isArray(word) && word.length > 0 && word[0].type === 'word' || deepNestedChild;
};

var isDeepNestedChild = exports.isDeepNestedChild = function isDeepNestedChild(words) {
  var deepNestedChild = false;
  words.forEach(function (wordItem) {
    if (wordItem.type === 'word') {
      deepNestedChild = true;
      return;
    } else {
      deepNestedChild = isDeepNestedChild(wordItem);
    }
  });
  return deepNestedChild;
};

function punctuationWordSpacing(word) {
  var lastChar = word.text.substr(word.text.length - 1);
  return lastChar === '"' || lastChar === "'" || lastChar === "-" ? '' : ' ';
}

function textIsEmptyInVerseObject(verseText) {
  var emptyVerse = !verseText.verseObjects.some(function (word) {
    return word.type === "milestone" || word.type === "word" && word.text.length > 0;
  });

  return (typeof verseText === 'undefined' ? 'undefined' : _typeof(verseText)) === 'object' && emptyVerse;
}

/***/ }),

/***/ 732:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHighlightedSpan = exports.createTextSpan = exports.createNonClickableSpan = exports.onWordClick = undefined;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _WordDetails = __webpack_require__(733);

var _WordDetails2 = _interopRequireDefault(_WordDetails);

var _lexiconHelpers = __webpack_require__(734);

var lexiconHelpers = _interopRequireWildcard(_lexiconHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Components
var onWordClick = exports.onWordClick = function onWordClick(e, word, getLexiconData, showPopover, translate) {
  if (word && word.strong) {
    var strong = word.strong;

    var entryId = lexiconHelpers.lexiconEntryIdFromStrongs(strong);
    var lexiconId = lexiconHelpers.lexiconIdFromStrongs(strong);
    var lexiconData = getLexiconData(lexiconId, entryId);
    var positionCoord = e.target;
    var PopoverTitle = _react2.default.createElement(
      'strong',
      { style: { fontSize: '1.2em' } },
      word.word
    );
    var wordDetails = _react2.default.createElement(_WordDetails2.default, { lexiconData: lexiconData, word: word, translate: translate });
    showPopover(PopoverTitle, wordDetails, positionCoord);
  }
};
// helpers
var createNonClickableSpan = exports.createNonClickableSpan = function createNonClickableSpan(index, paddingSpanStyle, padding, isHighlightedWord, text) {
  return _react2.default.createElement(
    'span',
    { key: index.toString() },
    _react2.default.createElement(
      'span',
      { style: paddingSpanStyle },
      padding
    ),
    _react2.default.createElement(
      'span',
      { style: { backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" } },
      text
    )
  );
};

var createTextSpan = exports.createTextSpan = function createTextSpan(index, text) {
  return _react2.default.createElement(
    'span',
    { key: index },
    text
  );
};

var createHighlightedSpan = exports.createHighlightedSpan = function createHighlightedSpan(index, text) {
  return _react2.default.createElement(
    'span',
    { key: index, style: { backgroundColor: 'var(--highlight-color)' } },
    text
  );
};

/***/ }),

/***/ 733:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lexiconHelpers = __webpack_require__(734);

var lexiconHelpers = _interopRequireWildcard(_lexiconHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// helpers


var WordDetails = function (_React$Component) {
  _inherits(WordDetails, _React$Component);

  function WordDetails() {
    _classCallCheck(this, WordDetails);

    return _possibleConstructorReturn(this, (WordDetails.__proto__ || Object.getPrototypeOf(WordDetails)).apply(this, arguments));
  }

  _createClass(WordDetails, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$word = _props.word,
          lemma = _props$word.lemma,
          morph = _props$word.morph,
          strong = _props$word.strong,
          translate = _props.translate;
      var lexiconData = this.props.lexiconData;

      var entryId = lexiconHelpers.lexiconEntryIdFromStrongs(strong);
      var lexiconId = lexiconHelpers.lexiconIdFromStrongs(strong);
      var lexicon = void 0;
      if (lexiconData[lexiconId] && lexiconData[lexiconId][entryId]) {
        lexicon = lexiconData[lexiconId][entryId].long;
      }

      return _react2.default.createElement(
        'div',
        { style: { margin: '-10px 10px -20px', maxWidth: '400px' } },
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'strong',
            null,
            translate('lemma')
          ),
          ' ',
          lemma
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'strong',
            null,
            translate('morph')
          ),
          ' ',
          morph
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'strong',
            null,
            translate('strongs')
          ),
          ' ',
          strong
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'span',
          null,
          _react2.default.createElement(
            'strong',
            null,
            translate('lexicon')
          ),
          ' ',
          lexicon
        ),
        _react2.default.createElement('br', null)
      );
    }
  }]);

  return WordDetails;
}(_react2.default.Component);

WordDetails.propTypes = {
  word: _propTypes2.default.object.isRequired,
  lexiconData: _propTypes2.default.object.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = WordDetails;

/***/ }),

/***/ 734:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @description - Get the lexiconId from the strong's number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {String} - the id of the lexicon
 */
var lexiconIdFromStrongs = exports.lexiconIdFromStrongs = function lexiconIdFromStrongs(strong) {
  var lexiconId = strong.replace(/\d+/, '') === 'G' ? 'ugl' : 'uhl';
  return lexiconId;
};
/**
 * @description - Get the lexicon entryId from the strong's number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {int} - the number of the entry
 */
var lexiconEntryIdFromStrongs = exports.lexiconEntryIdFromStrongs = function lexiconEntryIdFromStrongs(strong) {
  var entryId = parseInt(strong.replace(/\w/, '').slice(0, -1));
  return entryId;
};

/***/ }),

/***/ 735:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeMarker = undefined;

var _usfmJs = __webpack_require__(736);

var _usfmJs2 = _interopRequireDefault(_usfmJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Method to filter usfm markers from a string
 * @param {String} verseText - The string to remove markers from
 * @return {String}
 */
var removeMarker = exports.removeMarker = function removeMarker(verseText) {
  var cleaned = _usfmJs2.default.removeMarker(verseText, ['f', 'q(\\d)?', 's(\\d)?', 'p(\\d)?']); // remove these markers, 'f' is predefined
  // the rest are regex (these will be prefixed with '\\\\')
  return cleaned;
};

/***/ }),

/***/ 736:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/usfm-js/lib/index.js'");

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _VerseCheck = __webpack_require__(741);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_VerseCheck).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 741:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(20);

var _ActionsArea = __webpack_require__(742);

var _ActionsArea2 = _interopRequireDefault(_ActionsArea);

var _CheckArea = __webpack_require__(749);

var _CheckArea2 = _interopRequireDefault(_CheckArea);

var _SaveArea = __webpack_require__(789);

var _SaveArea2 = _interopRequireDefault(_SaveArea);

var _DialogComponent = __webpack_require__(792);

var _DialogComponent2 = _interopRequireDefault(_DialogComponent);

var _IconIndicators = __webpack_require__(794);

var _IconIndicators2 = _interopRequireDefault(_IconIndicators);

__webpack_require__(757);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * component displays the Verse so selection, edit and comments can be made.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var VerseCheck = function (_Component) {
  _inherits(VerseCheck, _Component);

  function VerseCheck() {
    _classCallCheck(this, VerseCheck);

    return _possibleConstructorReturn(this, (VerseCheck.__proto__ || Object.getPrototypeOf(VerseCheck)).apply(this, arguments));
  }

  _createClass(VerseCheck, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          translate = _props.translate,
          commentsReducer = _props.commentsReducer,
          remindersReducer = _props.remindersReducer,
          projectDetailsReducer = _props.projectDetailsReducer,
          contextIdReducer = _props.contextIdReducer,
          resourcesReducer = _props.resourcesReducer,
          selectionsReducer = _props.selectionsReducer,
          alignedGLText = _props.alignedGLText,
          verseText = _props.verseText,
          mode = _props.mode,
          actions = _props.actions,
          dialogModalVisibility = _props.dialogModalVisibility,
          commentChanged = _props.commentChanged,
          findIfVerseEdited = _props.findIfVerseEdited,
          findIfVerseInvalidated = _props.findIfVerseInvalidated,
          tags = _props.tags,
          verseChanged = _props.verseChanged,
          selections = _props.selections,
          saveSelection = _props.saveSelection,
          cancelSelection = _props.cancelSelection,
          clearSelection = _props.clearSelection,
          handleSkip = _props.handleSkip;


      var titleText = void 0;
      var saveArea = void 0;
      switch (mode) {
        case 'edit':
          titleText = translate('edit_verse');
          saveArea = _react2.default.createElement('div', null);
          break;
        case 'comment':
          titleText = translate('comment');
          saveArea = _react2.default.createElement('div', null);
          break;
        case 'select':
          titleText = translate('select');
          saveArea = _react2.default.createElement('div', null);
          break;
        default:
          titleText = translate('step2_check');
          saveArea = _react2.default.createElement(_SaveArea2.default, {
            actions: actions,
            selections: selectionsReducer.selections,
            translate: translate });
      }
      // material-ui-theme, new color themes could be added here in the future
      var theme = (0, _styles.createMuiTheme)();
      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          'div',
          { className: 'verse-check' },
          _react2.default.createElement(
            'div',
            { style: { display: 'flex', flexDirection: 'column', height: '100%', width: '100%' } },
            _react2.default.createElement(
              'div',
              { className: 'verse-check-card' },
              _react2.default.createElement(
                'div',
                { className: 'title-bar' },
                _react2.default.createElement(
                  'span',
                  null,
                  titleText
                ),
                _react2.default.createElement(_IconIndicators2.default, {
                  verseEdited: findIfVerseEdited(),
                  selections: selectionsReducer.selections,
                  comment: commentsReducer.text,
                  bookmarkEnabled: remindersReducer.enabled,
                  translate: translate,
                  invalidated: findIfVerseInvalidated() })
              ),
              _react2.default.createElement(_CheckArea2.default, {
                actions: actions,
                mode: mode,
                tags: tags,
                verseText: verseText,
                verseChanged: verseChanged,
                comment: commentsReducer.text,
                newSelections: selections,
                selections: selectionsReducer.selections,
                translate: translate,
                projectDetailsReducer: projectDetailsReducer,
                contextId: contextIdReducer.contextId,
                bibles: resourcesReducer.bibles,
                alignedGLText: alignedGLText,
                invalidated: findIfVerseInvalidated() }),
              _react2.default.createElement(_ActionsArea2.default, {
                mode: mode,
                tags: tags,
                actions: actions,
                commentChanged: commentChanged,
                selections: selectionsReducer.selections,
                newSelections: selections,
                remindersReducer: remindersReducer,
                saveSelection: saveSelection,
                cancelSelection: cancelSelection,
                clearSelection: clearSelection,
                translate: translate })
            ),
            saveArea
          ),
          _react2.default.createElement(_DialogComponent2.default, {
            handleSkip: handleSkip,
            dialogModalVisibility: dialogModalVisibility,
            handleClose: actions.handleCloseDialog,
            translate: translate })
        )
      );
    }
  }]);

  return VerseCheck;
}(_react.Component);

VerseCheck.propTypes = {
  alignedGLText: _propTypes2.default.string.isRequired,
  commentChanged: _propTypes2.default.bool.isRequired,
  findIfVerseEdited: _propTypes2.default.func.isRequired,
  findIfVerseInvalidated: _propTypes2.default.func.isRequired,
  tags: _propTypes2.default.array.isRequired,
  verseChanged: _propTypes2.default.bool.isRequired,
  selections: _propTypes2.default.array.isRequired,
  saveSelection: _propTypes2.default.func.isRequired,
  cancelSelection: _propTypes2.default.func.isRequired,
  clearSelection: _propTypes2.default.func.isRequired,
  handleSkip: _propTypes2.default.func.isRequired,
  verseText: _propTypes2.default.string,
  remindersReducer: _propTypes2.default.object.isRequired,
  groupsDataReducer: _propTypes2.default.object.isRequired,
  toolsReducer: _propTypes2.default.object.isRequired,
  translate: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.object.isRequired,
  contextIdReducer: _propTypes2.default.shape({
    contextId: _propTypes2.default.object
  }).isRequired,
  selectionsReducer: _propTypes2.default.object.isRequired,
  commentsReducer: _propTypes2.default.object.isRequired,
  resourcesReducer: _propTypes2.default.object.isRequired,
  loginReducer: _propTypes2.default.object.isRequired,
  projectDetailsReducer: _propTypes2.default.object.isRequired,
  mode: _propTypes2.default.string.isRequired,
  dialogModalVisibility: _propTypes2.default.bool.isRequired
};

VerseCheck.defaultProps = {
  contextIdReducer: {
    contextId: {
      reference: {
        chapter: 1,
        verse: 1,
        bookId: 'tit'
      }
    }
  },
  projectDetailsReducer: {
    manifest: {
      project: {
        id: 'tit'
      },
      target_language: {
        direction: 'ltr'
      }
    },
    currentProjectToolsSelectedGL: {
      tw: 'en'
    }
  },
  resourcesReducer: {
    bibles: {
      targetLanguage: {
        targetBible: {
          1: { 1: '' }
        }
      }
    }
  },
  selectionsReducer: {
    selections: []
  },
  toolsReducer: {
    currentToolName: 'tw'
  },
  translate: function translate(key) {
    return key;
  },
  groupsDataReducer: {
    groupsData: {}
  },
  commentsReducer: {
    text: ''
  },
  remindersReducer: {
    enabled: false
  },
  actions: {
    handleGoToNext: function handleGoToNext() {},
    handleGoToPrevious: function handleGoToPrevious() {},
    handleOpenDialog: function handleOpenDialog() {},
    handleCloseDialog: function handleCloseDialog() {},
    skipToNext: function skipToNext() {},
    skipToPrevious: function skipToPrevious() {},
    changeSelectionsInLocalState: function changeSelectionsInLocalState() {},
    changeMode: function changeMode() {},
    handleComment: function handleComment() {},
    checkComment: function checkComment() {},
    cancelComment: function cancelComment() {},
    saveComment: function saveComment() {},
    handleTagsCheckbox: function handleTagsCheckbox() {},
    handleEditVerse: function handleEditVerse() {},
    checkVerse: function checkVerse() {},
    cancelEditVerse: function cancelEditVerse() {},
    saveEditVerse: function saveEditVerse() {},
    validateSelections: function validateSelections() {},
    toggleReminder: function toggleReminder() {},
    openAlertDialog: function openAlertDialog() {},
    selectModalTab: function selectModalTab() {}
  },
  loginReducer: {},
  alignedGLText: '',
  mode: 'default',
  commentChanged: false,
  findIfVerseEdited: function findIfVerseEdited() {
    return false;
  },
  findIfVerseInvalidated: function findIfVerseInvalidated() {
    return false;
  },
  tags: [],
  verseChanged: false,
  selections: [],
  saveSelection: function saveSelection() {},
  cancelSelection: function cancelSelection() {},
  clearSelection: function clearSelection() {},
  handleSkip: function handleSkip() {},
  verseText: '',
  dialogModalVisibility: false
};

exports.default = VerseCheck;

/***/ }),

/***/ 742:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(117);

var _deepEqual = __webpack_require__(515);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _Bookmark = __webpack_require__(743);

var _Bookmark2 = _interopRequireDefault(_Bookmark);

__webpack_require__(747);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionsArea = function ActionsArea(_ref) {
  var tags = _ref.tags,
      mode = _ref.mode,
      actions = _ref.actions,
      commentChanged = _ref.commentChanged,
      selections = _ref.selections,
      newSelections = _ref.newSelections,
      remindersReducer = _ref.remindersReducer,
      saveSelection = _ref.saveSelection,
      cancelSelection = _ref.cancelSelection,
      clearSelection = _ref.clearSelection,
      translate = _ref.translate;


  var changeModeArea = _react2.default.createElement(
    'div',
    { className: 'actions-area' },
    _react2.default.createElement(_Bookmark2.default, {
      value: 'bookmark',
      color: 'primary',
      checked: remindersReducer.enabled,
      label: translate('bookmark'),
      onChange: actions.toggleReminder }),
    _react2.default.createElement(
      'div',
      { style: { display: "flex", marginLeft: 'auto' } },
      _react2.default.createElement(
        'button',
        {
          style: { width: "140px", marginRigth: "5px" },
          className: 'btn-second',
          onClick: actions.changeMode.bind(undefined, 'select')
        },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok', style: { marginRight: '10px' } }),
        translate("select")
      ),
      _react2.default.createElement(
        'button',
        {
          style: { width: "140px", marginRigth: "5px" },
          className: 'btn-second',
          onClick: actions.changeMode.bind(undefined, 'edit')
        },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'pencil', style: { marginRight: '10px' } }),
        translate("edit_verse")
      ),
      _react2.default.createElement(
        'button',
        {
          style: { width: "140px" },
          className: 'btn-second',
          onClick: actions.changeMode.bind(undefined, 'comment')
        },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'comment', style: { marginRight: '10px' } }),
        translate("comment")
      )
    )
  );

  var confirmEditVerseArea = _react2.default.createElement(
    'div',
    { className: 'actions-area' },
    _react2.default.createElement(
      'button',
      { className: 'btn-second',
        onClick: actions.cancelEditVerse.bind(undefined)
      },
      translate("cancel")
    ),
    _react2.default.createElement(
      'button',
      { className: 'btn-prime',
        disabled: !tags.length,
        onClick: actions.saveEditVerse.bind(undefined)
      },
      _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok', style: { marginRight: '10px' } }),
      translate("save")
    )
  );

  var confirmCommentArea = _react2.default.createElement(
    'div',
    { className: 'actions-area' },
    _react2.default.createElement(
      'button',
      { className: 'btn-second',
        onClick: actions.cancelComment.bind(undefined)
      },
      translate("cancel")
    ),
    _react2.default.createElement(
      'button',
      { className: 'btn-prime',
        disabled: !commentChanged,
        onClick: actions.saveComment.bind(undefined)
      },
      _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok', style: { marginRight: '10px' } }),
      translate("save")
    )
  );

  var confirmSelectionArea = _react2.default.createElement(
    'div',
    { className: 'actions-area' },
    _react2.default.createElement(
      'button',
      {
        className: 'btn-second',
        style: { alignSelf: 'flex-start' },
        onClick: cancelSelection.bind(undefined)
      },
      translate("cancel")
    ),
    _react2.default.createElement(
      'button',
      {
        className: 'btn-second',
        disabled: selections.length > 0 ? false : true,
        onClick: clearSelection.bind(undefined)
      },
      _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'erase', style: { marginRight: '10px' } }),
      translate("clear_selection")
    ),
    _react2.default.createElement(
      'button',
      {
        className: 'btn-prime',
        disabled: (0, _deepEqual2.default)(newSelections, selections),
        onClick: saveSelection.bind(undefined)
      },
      _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok', style: { marginRight: '10px' } }),
      translate("save")
    )
  );

  var modeArea = void 0;
  switch (mode) {
    case 'edit':
      modeArea = confirmEditVerseArea;
      break;
    case 'comment':
      modeArea = confirmCommentArea;
      break;
    case 'select':
      modeArea = confirmSelectionArea;
      break;
    case 'default':
      modeArea = changeModeArea;
      break;
    default:
      modeArea = changeModeArea;
  }

  return modeArea;
};

exports.default = ActionsArea;

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Bookmark = __webpack_require__(744);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bookmark).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Switch = __webpack_require__(745);

var _Switch2 = _interopRequireDefault(_Switch);

var _FormControlLabel = __webpack_require__(570);

var _FormControlLabel2 = _interopRequireDefault(_FormControlLabel);

var _styles = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  label: {
    color: 'var(--accent-color-dark)',
    fontWeight: "normal",
    fontSize: 14
  },
  colorPrimary: 'var(--accent-color-dark)'
};

var Bookmark = function Bookmark(_ref) {
  var value = _ref.value,
      label = _ref.label,
      checked = _ref.checked,
      color = _ref.color,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      classes = _ref.classes;

  return _react2.default.createElement(_FormControlLabel2.default, {
    style: { paddingLeft: 10 },
    control: _react2.default.createElement(_Switch2.default, {
      value: value,
      checked: checked,
      color: color,
      onChange: onChange,
      disabled: disabled,
      classes: { colorPrimary: classes.colorPrimary }
    }),
    classes: { label: classes.label },
    label: label
  });
};

Bookmark.defaultProps = {
  checked: false,
  disabled: false,
  color: 'primary'
};

Bookmark.propTypes = {
  value: _propTypes2.default.string,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  label: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  color: _propTypes2.default.string,
  classes: _propTypes2.default.object
};

exports.default = (0, _styles.withStyles)(styles)(Bookmark);

/***/ }),

/***/ 745:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/Switch/index.js'");

/***/ }),

/***/ 747:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(748);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 748:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".actions-area {\n  flex: 0 0 55px;\n  display: flex;\n  justify-content: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ 749:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DefaultArea = __webpack_require__(750);

var _DefaultArea2 = _interopRequireDefault(_DefaultArea);

var _SelectionArea = __webpack_require__(759);

var _SelectionArea2 = _interopRequireDefault(_SelectionArea);

var _InstructionsArea = __webpack_require__(764);

var _InstructionsArea2 = _interopRequireDefault(_InstructionsArea);

var _EditVerseArea = __webpack_require__(781);

var _EditVerseArea2 = _interopRequireDefault(_EditVerseArea);

var _CommentArea = __webpack_require__(784);

var _CommentArea2 = _interopRequireDefault(_CommentArea);

__webpack_require__(787);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// components
var CheckArea = function CheckArea(_ref) {
  var contextId = _ref.contextId,
      actions = _ref.actions,
      mode = _ref.mode,
      tags = _ref.tags,
      verseText = _ref.verseText,
      verseChanged = _ref.verseChanged,
      comment = _ref.comment,
      newSelections = _ref.newSelections,
      selections = _ref.selections,
      projectDetailsReducer = _ref.projectDetailsReducer,
      translate = _ref.translate,
      invalidated = _ref.invalidated,
      bibles = _ref.bibles,
      alignedGLText = _ref.alignedGLText;

  var modeArea = void 0;
  switch (mode) {
    case 'edit':
      modeArea = _react2.default.createElement(_EditVerseArea2.default, {
        tags: tags,
        verseText: verseText,
        verseChanged: verseChanged,
        actions: actions,
        dir: projectDetailsReducer.manifest.target_language.direction,
        translate: translate

      });
      break;
    case 'comment':
      modeArea = _react2.default.createElement(_CommentArea2.default, { comment: comment, actions: actions, translate: translate });
      break;
    case 'select':
      modeArea = _react2.default.createElement(
        'div',
        { style: { WebkitUserSelect: 'none', display: "flex", flex: "1", justifyContent: "center", alignItems: "center", overflow: "auto" } },
        _react2.default.createElement(_InstructionsArea2.default, {
          verseText: verseText,
          selections: selections,
          alignedGLText: alignedGLText,
          mode: mode,
          translate: translate,
          invalidated: invalidated
        })
      );
      break;
    case 'default':
    default:
      modeArea = _react2.default.createElement(
        'div',
        { style: { WebkitUserSelect: 'none', display: "flex", justifyContent: "center", alignItems: "center", height: "100%" } },
        _react2.default.createElement(_InstructionsArea2.default, {
          dontShowTranslation: true,
          verseText: verseText,
          selections: selections,
          alignedGLText: alignedGLText,
          translate: translate,
          invalidated: invalidated
        })
      );
  }

  return _react2.default.createElement(
    'div',
    { className: 'check-area' },
    mode === 'select' ? _react2.default.createElement(_SelectionArea2.default, {
      translate: translate,
      verseText: verseText,
      selections: newSelections,
      mode: mode,
      manifest: projectDetailsReducer.manifest,
      reference: contextId.reference,
      actions: actions }) : _react2.default.createElement(_DefaultArea2.default, {
      reference: contextId.reference,
      actions: actions,
      translate: translate,
      manifest: projectDetailsReducer.manifest,
      verseText: verseText,
      selections: selections,
      bibles: bibles
    }),
    _react2.default.createElement(
      'div',
      { style: { borderLeft: '1px solid var(--border-color)', flex: 1, overflowY: "auto", display: 'flex', justifyContent: 'center' } },
      modeArea
    )
  );
};

CheckArea.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.object.isRequired,
  mode: _propTypes2.default.string.isRequired,
  tags: _propTypes2.default.array.isRequired,
  invalidated: _propTypes2.default.bool.isRequired,
  verseText: _propTypes2.default.string.isRequired,
  verseChanged: _propTypes2.default.bool.isRequired,
  comment: _propTypes2.default.string.isRequired,
  contextId: _propTypes2.default.object,
  selections: _propTypes2.default.array.isRequired,
  newSelections: _propTypes2.default.array.isRequired,
  projectDetailsReducer: _propTypes2.default.shape({
    manifest: _propTypes2.default.object,
    currentProjectToolsSelectedGL: _propTypes2.default.object
  }).isRequired,
  bibles: _propTypes2.default.object,
  alignedGLText: _propTypes2.default.string.isRequired
};

exports.default = CheckArea;

/***/ }),

/***/ 750:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _selectionHelpers = __webpack_require__(751);

var _reactBootstrap = __webpack_require__(117);

var _MyLanguageModal = __webpack_require__(753);

var _MyLanguageModal2 = _interopRequireDefault(_MyLanguageModal);

__webpack_require__(757);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// helpers

// components

// styling


var DefaultArea = function (_React$Component) {
  _inherits(DefaultArea, _React$Component);

  function DefaultArea() {
    _classCallCheck(this, DefaultArea);

    var _this = _possibleConstructorReturn(this, (DefaultArea.__proto__ || Object.getPrototypeOf(DefaultArea)).call(this));

    _this.state = {
      inBox: false,
      modalVisibility: false
    };
    return _this;
  }

  _createClass(DefaultArea, [{
    key: 'displayText',
    value: function displayText(verseText, selections) {
      var _this2 = this;

      // normalize whitespace for text rendering in order to display highlights with more than one space since html selections show one space
      verseText = (0, _selectionHelpers.normalizeString)(verseText);
      var verseTextSpans = _react2.default.createElement(
        'span',
        null,
        verseText
      );
      if (selections && selections.length > 0) {
        var _selectionArray = (0, _selectionHelpers.selectionArray)(verseText, selections);
        selections.forEach(function (selection) {
          if ((0, _selectionHelpers.occurrencesInString)(verseText, selection.text) !== selection.occurrences) {
            // validate selections and remove ones that do not apply
            _this2.props.actions.validateSelections(verseText);
          }
        });
        verseTextSpans = _selectionArray.map(function (selection, index) {
          var style = selection.selected ? { backgroundColor: 'var(--highlight-color)' } : {};
          return _react2.default.createElement(
            'span',
            { key: index, style: style },
            selection.text
          );
        });
      }
      return _react2.default.createElement(
        'div',
        { style: { userSelect: 'none', color: 'var(--text-color-light)' } },
        verseTextSpans
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          manifest = _props.manifest,
          translate = _props.translate,
          reference = _props.reference,
          verseText = _props.verseText,
          selections = _props.selections,
          bibles = _props.bibles;
      var target_language = manifest.target_language,
          project = manifest.project;

      var bookName = target_language && target_language.book && target_language.book.name ? target_language.book.name : project.name;
      var languageName = manifest.target_language ? manifest.target_language.name : null;
      var dir = manifest.target_language ? manifest.target_language.direction : null;

      return _react2.default.createElement(
        'div',
        { style: { WebkitUserSelect: 'none', flex: 1, display: 'flex', flexDirection: 'column' } },
        _react2.default.createElement(
          'div',
          { className: 'verse-title' },
          _react2.default.createElement(
            'div',
            { className: 'pane', style: { display: 'flex', flexDirection: 'column' } },
            _react2.default.createElement(
              'span',
              { className: 'verse-title-title' },
              languageName
            ),
            _react2.default.createElement(
              'span',
              { className: 'verse-title-subtitle' },
              bookName,
              ' ',
              reference.chapter + ':' + reference.verse
            )
          ),
          _react2.default.createElement(
            'div',
            { onClick: function onClick() {
                _this3.setState({ modalVisibility: true });
              } },
            _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'fullscreen', title: translate("click_show_expanded"), style: { cursor: "pointer" } })
          ),
          _react2.default.createElement(_MyLanguageModal2.default, {
            translate: translate,
            manifest: manifest,
            show: this.state.modalVisibility,
            targetLangBible: bibles.targetLanguage.targetBible,
            chapter: reference.chapter,
            currentVerse: reference.verse,
            dir: dir ? dir : "ltr",
            onHide: function onHide() {
              return _this3.setState({ modalVisibility: false });
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: manifest.target_language.direction === 'ltr' ? 'ltr-content' : 'rtl-content' },
          this.displayText(verseText, selections)
        )
      );
    }
  }]);

  return DefaultArea;
}(_react2.default.Component);

DefaultArea.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.shape({
    validateSelections: _propTypes2.default.func
  }).isRequired,
  reference: _propTypes2.default.object,
  bibles: _propTypes2.default.object.isRequired,
  manifest: _propTypes2.default.object,
  selections: _propTypes2.default.array,
  verseText: _propTypes2.default.string.isRequired
};

exports.default = DefaultArea;

/***/ }),

/***/ 751:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.normalizeString = exports.occurrencesInString = exports.optimizeSelections = exports.rangesToSelections = exports.optimizeRanges = exports.selectionArray = exports.selectionsToRanges = exports.spliceStringOnRanges = undefined;

var _lodash = __webpack_require__(752);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Splice string into array of ranges, flagging what is selected
 * @param {array} ranges - array of ranges [[int,int],...]
 * @returns {array} - array of objects [obj,...]
 */
var spliceStringOnRanges = exports.spliceStringOnRanges = function spliceStringOnRanges(string, ranges) {
    var selectionArray = []; // response
    // sort ranges - this ensures we build the string correctly and don't miss selections
    // concat overlaps - should not be a concern here but might help rendering bugs
    var remainingString = string;
    // shift the range since the loop is destructive
    // by working on the remainingString and not original string
    var rangeShift = 0;
    ranges.forEach(function (rangeObject) {
        var range = rangeObject.range;
        // save all the text before the selection
        var beforeSelection = remainingString.slice(0, range[0] - rangeShift);
        // console.log('beforeSelection: ', beforeSelection)
        // save the text in the selection
        var selection = remainingString.slice(range[0] - rangeShift, range[1] + 1 - rangeShift);
        // console.log('subString: ', selection)
        // save all the text after the selection
        var afterSelection = remainingString.slice(range[1] - rangeShift + 1);
        // console.log('afterSelection: ', afterSelection)
        selectionArray.push({ text: beforeSelection, selected: false });
        selectionArray.push({
            text: selection,
            selected: true,
            occurrence: rangeObject.occurrence,
            occurrences: rangeObject.occurrences
        });
        // next iteration is using remaining string
        remainingString = afterSelection;
        // shift the range up to last char of substring (before+sub)
        rangeShift += beforeSelection.length;
        rangeShift += selection.length;
    });
    selectionArray.push({ text: remainingString, selected: false });
    // remove empty text from selectionArray
    return selectionArray;
};
//
// Use the following lines to test the previous function
// var string = "01 234 56789qwertyuiopasdfghjklzxcvbnmtyui01 234 567890"
// var ranges = [ { range: [ 45, 47 ], occurrence: 2, occurrences: 2 } ]
// console.log(module.exports.spliceStringOnRanges(string, ranges))

/**
 * This converts ranges to array of selection objects
 * @param {string} string - text used to get the ranges of
 * @param {array} selections - array of selections [obj,...]
 * @returns {array} - array of range objects
 */
/* eslint-disable no-constant-condition */
var selectionsToRanges = exports.selectionsToRanges = function selectionsToRanges(string, selections) {
    var ranges = [];
    selections.forEach(function (selection) {
        if (string !== undefined && string.includes(selection.text)) {
            var splitArray = string.split(selection.text);
            var beforeSelection = splitArray.slice(0, selection.occurrence).join(selection.text);
            var start = beforeSelection.length;
            var end = start + selection.text.length - 1;
            var rangesObject = {
                range: [start, end],
                occurrence: selection.occurrence,
                occurrences: selection.occurrences
            };
            ranges.push(rangesObject);
        }
    });
    return ranges;
};
//
// Use the following lines to test the previous function
// var string = "01 234 56789qwertyuiopasdfghjklzxcvbnmtyui01 234 567890"
// var selections = [
//   { text: '234', occurrence: 2, occurrences: 2 },
// ]
// console.log(module.exports.selectionsToRanges(string, selections))

/**
 * Splice string into array of substrings, flagging what is selected
 * @param {string} string - text used to get the ranges of
 * @param {array} selections - array of selections [obj,...]
 * @returns {array} - array of objects
 */
var selectionArray = exports.selectionArray = function selectionArray(string, selections) {
    var selectionArray = [];
    var ranges = module.exports.selectionsToRanges(string, selections);
    selectionArray = module.exports.spliceStringOnRanges(string, ranges);
    return selectionArray;
};
//
// Use the following lines to test the previous function
// var string = "01 234 56789qwertyuiopasdfghjklzxcvbnmtyui01 234 567890"
// var selections = [
//   { text: '234', occurrence: 2, occurrences: 2 },
// ]
// console.log(module.exports.selectionArray(string, selections))


/**
 * This abstracts complex handling of ranges such as order, deduping, concatenating, overlaps
 * @param {array}  ranges - array of ranges [[int,int],...]
 * @returns {array} - array of optimized ranges [[int,int],...]
 */
var optimizeRanges = exports.optimizeRanges = function optimizeRanges(ranges) {
    var optimizedRanges = []; // response
    ranges = _lodash2.default.sortBy(ranges, function (range) {
        return range[1];
    }); // order ranges by end char index as secondary
    ranges = _lodash2.default.sortBy(ranges, function (range) {
        return range[0];
    }); // order ranges by start char index as primary
    ranges = _lodash2.default.uniq(ranges); // remove duplicates
    // combine overlapping and contiguous ranges
    var _range = [];
    ranges.forEach(function (range, index) {
        if (range[0] >= _range[0] && range[0] <= _range[1] + 1) {
            // the start occurs in the running range and +1 handles contiguous
            if (range[1] >= _range[0] && range[1] <= _range[1]) {// if the start occurs inside running range then let's check the end
                // if the end occurs inside the running range then it's inside it and doesn't matter
            } else {
                // it doesn't occur inside the running range
                _range[1] = range[1]; // extend running range
            }
        } else {
            // the start does not occur in the running range
            if (_range.length != 0) optimizedRanges.push(_range); // the running range is closed push it to optimizedRanges
            _range = range; // reset the running range to this one
        }
        if (ranges.length === index + 1 && _range[1] - _range[0] >= 0) {
            // this is the last one and it isn't blank
            optimizedRanges.push(_range); // push the last one to optimizedRanges
        }
    });
    return optimizedRanges;
};
//
// Use the following lines to test the previous function
// var ranges = [[1,1],[5,9],[3,4],[7,10],[20,40],[15,16],[14,17]]
// console.log(module.exports.optimizeRanges(ranges))
// => [ [ 1, 1 ], [ 3, 10 ], [ 14, 17 ], [ 20, 40 ] ]

/**
 * This converts ranges to array of selection objects
 * @param {string} string - text used to get the ranges of
 * @param {array} ranges - array of ranges [[int,int],...]
 * @returns {array} - array of selection objects
 */
var rangesToSelections = exports.rangesToSelections = function rangesToSelections(string, ranges) {
    var selections = [];
    ranges.forEach(function (range) {
        var start = range[0],
            end = range[1];
        var length = end - start + 1;
        var text = string.substr(start, length); // get text
        var regex = eval('/' + text + '/g');
        var beforeText = string.substr(0, start);
        var beforeMatches = beforeText.match(regex);
        var occurrence = (beforeMatches !== null ? beforeMatches.length : 0) + 1; // get number of this occurrence
        var occurrences = string.match(regex).length; // get occurrences in string
        var selection = {
            text: text,
            occurrence: occurrence,
            occurrences: occurrences
        };
        selections.push(selection);
    });
    return selections;
};
//
// Use the following lines to test the previous function
// var string = "0123456789qwertyuiopasdfghjklzxcvbnmtyui01234567890"
// var ranges = [ [3,9], [14,17], [20,40] ]
// console.log(module.exports.rangesToSelections(string, ranges))
// => [ { text: '3456789', occurrence: 1, occurrences: 2 },
//      { text: 'tyui', occurrence: 1, occurrences: 2 },
//      { text: 'asdfghjklzxcvbnmtyui0', occurrence: 1, occurrences: 1 }
//    ]

/**
 * This abstracts complex handling of selections such as order, deduping, concatenating, overlapping ranges
 * @param {string} string - the text selections are found in
 * @param {array}  selections - array of selection objects [Obj,...]
 * @returns {array} - array of selection objects
 */
var optimizeSelections = exports.optimizeSelections = function optimizeSelections(string, selections) {
    var optimizedSelections = void 0; // return
    var ranges = module.exports.selectionsToRanges(string, selections).map(function (rangeObject) {
        return rangeObject.range;
    }); // get char ranges of each selection
    ranges = module.exports.optimizeRanges(ranges); // optimize the ranges
    optimizedSelections = module.exports.rangesToSelections(string, ranges); // convert optimized ranges into selections
    return optimizedSelections;
};
//
// Use the following lines to test the previous function
// var string = "0123456789qwertyuiopasdfghjklzxcvbnmtyui01234567890"
// var selections = [
//   { text: '234', occurrence: 2, occurrences: 2 },
// ]
// var selections = [
//   { text: 'not found in here', occurrence: 2, occurrences: 2 },
//   { text: '234', occurrence: 1, occurrences: 2 },
//   { text: '56789', occurrence: 1, occurrences: 2 },
//   { text: '3456', occurrence: 1, occurrences: 2 },
//   { text: 'tyu', occurrence: 1, occurrences: 2 },
//   { text: 'yui', occurrence: 1, occurrences: 2 },
//   { text: 'yui', occurrence: 2, occurrences: 2 },
//   { text: 'asdfghjklzxcvbnmtyui0', occurrence: 1, occurrences: 1 }
// ]
// the following tests a repeated occurrence after an early selection is made
// var selections = [
//   { text: '234', occurrence: 1, occurrences: 2 },
//   { text: 'yui', occurrence: 2, occurrences: 2 },
//   { text: '0', occurrence: 3, occurrences: 3 }
// ]
// console.log(module.exports.optimizeSelections(string, selections))

/**
 * @description Function that count occurrences of a substring in a string
 * @param {String} string - The string to search in
 * @param {String} subString - The sub string to search for
 * @returns {Integer} - the count of the occurrences
 * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
 * modified to fit our use cases, return zero for '' substring, and no use case for overlapping.
 */
var occurrencesInString = exports.occurrencesInString = function occurrencesInString(string, subString) {
    if (subString.length <= 0) return 0;
    var n = 0,
        pos = 0,
        step = subString.length;
    while (true) {
        pos = string.indexOf(subString, pos);
        if (pos === -1) break;
        ++n;
        pos += step;
    }
    return n;
};
/**
 * @description Function that normalizes a string including whitespace
 * @param {String} string - the string to normalize
 * @preturns {String} - The returned normalized string
 */
var normalizeString = exports.normalizeString = function normalizeString(string) {
    string = string.replace(/\s+/g, ' ');
    return string;
};

// Use for testing/debugging...

// var string = 'abcdefghijklmnopqrstuvwxyz'
// var selectedText = [
//   {
//     "text": "cdef",
//     "occurrence": 1,
//     "occurrences": 1
//   },
//   {
//     "text": "klmno",
//     "occurrence": 1,
//     "occurrences": 1
//   },
//   {
//     "text": "wxyz",
//     "occurrence": 1,
//     "occurrences": 1
//   }
// ]

// var string = '012345678901234567890123456789'
// var selectedText = [
//   {
//     "text": "1234",
//     "occurrence": 1,
//     "occurrences": 3
//   },
//   {
//     "text": "01234",
//     "occurrence": 2,
//     "occurrences": 3
//   },
//   {
//     "text": "01234",
//     "occurrence": 3,
//     "occurrences": 3
//   }
// ]
// loop through occurrences to get character ranges
// var selectionCharacterRanges = [
//   [1,4],
//   [10,14],
//   [20,24]
// ]
// var ranges = module.exports.selectionsToRanges(string, selectedText)
// console.log(ranges)
//
// var selectionArray = module.exports.spliceStringOnRanges(string, ranges)
// console.log(selectionArray)

// var selectionArray = module.exports.selectionArray(string, selectedText)
// console.log(selectionArray)

/***/ }),

/***/ 752:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/lodash/lodash.js'");

/***/ }),

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = __webpack_require__(403);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogTitle = __webpack_require__(576);

var _DialogTitle2 = _interopRequireDefault(_DialogTitle);

var _DialogActions = __webpack_require__(423);

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(440);

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _Toolbar = __webpack_require__(442);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _reactBootstrap = __webpack_require__(117);

var _MyTargetVerse = __webpack_require__(754);

var _MyTargetVerse2 = _interopRequireDefault(_MyTargetVerse);

__webpack_require__(755);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyLanguageModal = function (_Component) {
  _inherits(MyLanguageModal, _Component);

  function MyLanguageModal(props) {
    _classCallCheck(this, MyLanguageModal);

    var _this = _possibleConstructorReturn(this, (MyLanguageModal.__proto__ || Object.getPrototypeOf(MyLanguageModal)).call(this, props));

    _this.scrollToCurrentVerse = _this.scrollToCurrentVerse.bind(_this);
    return _this;
  }

  _createClass(MyLanguageModal, [{
    key: 'scrollToCurrentVerse',
    value: function scrollToCurrentVerse() {
      var _props = this.props,
          chapter = _props.chapter,
          currentVerse = _props.currentVerse;

      var verseReference = 'MyTargetVerse:' + chapter.toString() + currentVerse.toString();
      var element = document.getElementById(verseReference);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          show = _props2.show,
          onHide = _props2.onHide,
          targetLangBible = _props2.targetLangBible,
          chapter = _props2.chapter,
          currentVerse = _props2.currentVerse,
          manifest = _props2.manifest,
          translate = _props2.translate;
      var target_language = manifest.target_language,
          project = manifest.project;

      var title = target_language && target_language.book && target_language.book.name ? target_language.book.name : project.name;
      var MyTargetLanguage = [];
      if (show) {
        for (var key in targetLangBible[chapter]) {
          if (targetLangBible[chapter].hasOwnProperty(key)) {
            var verseText = targetLangBible[chapter][key];
            var versePaneStyle = {};
            if (key == currentVerse) {
              if (key % 2 == 0) {
                versePaneStyle = { borderLeft: '6px solid var(--accent-color)', backgroundColor: 'var(--background-color-light)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px' };
              } else {
                versePaneStyle = { borderLeft: '6px solid var(--accent-color)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px' };
              }
            } else if (key % 2 == 0) {
              versePaneStyle = { backgroundColor: 'var(--background-color-light)', marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px' };
            } else {
              versePaneStyle = { marginTop: '10px', color: 'var(--text-color-dark)', padding: '10px' };
            }
            MyTargetLanguage.push(_react2.default.createElement(
              'div',
              { key: key, id: 'MyTargetVerse:' + chapter.toString() + key.toString() },
              _react2.default.createElement(_MyTargetVerse2.default, {
                chapter: chapter,
                verse: parseInt(key, 10),
                verseText: verseText,
                styles: versePaneStyle,
                dir: this.props.dir
              })
            ));
          }
        }
      }
      return _react2.default.createElement(
        _Dialog2.default,
        {
          onEntered: this.scrollToCurrentVerse,
          maxWidth: 'md',
          fullWidth: true,
          open: show,
          onClose: onHide },
        _react2.default.createElement(
          _Toolbar2.default,
          { disableGutters: true, style: { display: 'flex', justifyContent: 'flex-end', backgroundColor: "var(--accent-color-dark)" } },
          _react2.default.createElement(
            _DialogTitle2.default,
            { disableTypography: true, className: 'verse-check-modal-title' },
            _react2.default.createElement(
              'h4',
              { style: { color: 'var(--reverse-color)' } },
              title
            ),
            _react2.default.createElement(_reactBootstrap.Glyphicon, {
              onClick: onHide,
              glyph: "remove",
              style: { position: 'absolute', right: 0, margin: 30, color: "var(--reverse-color)", cursor: "pointer", fontSize: "18px" }
            })
          )
        ),
        _react2.default.createElement(
          _DialogContent2.default,
          { style: { padding: '0px', height: "500px", backgroundColor: "var(--reverse-color)", overflowY: "auto" } },
          MyTargetLanguage
        ),
        _react2.default.createElement(
          _DialogActions2.default,
          { disableActionSpacing: true },
          _react2.default.createElement(
            'button',
            { className: 'btn-prime', onClick: onHide },
            translate('close')
          )
        )
      );
    }
  }]);

  return MyLanguageModal;
}(_react.Component);

MyLanguageModal.propTypes = {
  show: _propTypes2.default.bool.isRequired,
  onHide: _propTypes2.default.func.isRequired,
  targetLangBible: _propTypes2.default.object,
  chapter: _propTypes2.default.number,
  currentVerse: _propTypes2.default.number,
  manifest: _propTypes2.default.object,
  dir: _propTypes2.default.string.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = MyLanguageModal;

/***/ }),

/***/ 754:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyTargetVerse = function MyTargetVerse(_ref) {
  var chapter = _ref.chapter,
      verse = _ref.verse,
      verseText = _ref.verseText,
      styles = _ref.styles,
      dir = _ref.dir;

  var chapterVerse = void 0;

  if (dir == "rtl") {
    chapterVerse = verse + ":" + chapter + " ";
  } else {
    chapterVerse = chapter + ":" + verse + " ";
  }

  return _react2.default.createElement(
    _reactBootstrap.Col,
    { md: 12, sm: 12, xs: 12, lg: 12, style: styles },
    _react2.default.createElement(
      'div',
      { style: { direction: dir } },
      _react2.default.createElement(
        'b',
        null,
        chapterVerse
      ),
      verseText
    )
  );
};

MyTargetVerse.propTypes = {
  chapter: _propTypes2.default.number.isRequired,
  verse: _propTypes2.default.number.isRequired,
  verseText: _propTypes2.default.string.isRequired,
  styles: _propTypes2.default.object.isRequired,
  dir: _propTypes2.default.string.isRequired
};

exports.default = MyTargetVerse;

/***/ }),

/***/ 755:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(756);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 756:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".verse-check-modal-title {\n  text-align: center;\n  color: var(--reverse-color);\n  display: flex;\n  position: relative;\n  width: 100%;\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ 757:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(758);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 758:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, ".verse-check {\n  margin: 10px;\n  height: 100%;\n  display: flex;\n  margin: 10px;\n}\n.verse-check .ltr-content {\n  direction: ltr;\n  flex: auto;\n  padding: 0 15px 10px;\n  overflow-y: auto;\n}\n.verse-check .rtl-content {\n  direction: rtl;\n  flex: auto;\n  padding: 0 15px 10px;\n  overflow-y: auto;\n}\n.verse-title-title {\n  font-weight: bold;\n}\n.verse-title-subtitle {\n  color: var(--text-color-light);\n}\n\n.verse-check-card {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 3px 10px var(--background-color);\n  border-radius: 2px;\n}\n.verse-check .title-bar {\n  flex: 0 0 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px;\n  color: var(--reverse-color);\n  background-color: var(--accent-color-dark);\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.verse-title {\n  flex: 0 0 45px;\n  display: flex;\n  justify-content: space-between;\n  margin: 5px 10px 5px 15px;\n}", ""]);

// exports


/***/ }),

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(757);

var _RenderSelectionTextComponent = __webpack_require__(760);

var _RenderSelectionTextComponent2 = _interopRequireDefault(_RenderSelectionTextComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components


var SelectionArea = function (_Component) {
  _inherits(SelectionArea, _Component);

  function SelectionArea() {
    _classCallCheck(this, SelectionArea);

    var _this = _possibleConstructorReturn(this, (SelectionArea.__proto__ || Object.getPrototypeOf(SelectionArea)).call(this));

    _this.state = {
      inBox: false,
      modalVisibility: false
    };
    return _this;
  }

  _createClass(SelectionArea, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          manifest = _props.manifest,
          reference = _props.reference,
          translate = _props.translate;
      var target_language = manifest.target_language,
          project = manifest.project;

      var bookName = target_language && target_language.book && target_language.book.name ? target_language.book.name : project.name;
      var languageName = manifest.target_language ? manifest.target_language.name : null;
      return _react2.default.createElement(
        'div',
        { style: { flex: 1, display: 'flex', flexDirection: 'column' } },
        _react2.default.createElement(
          'div',
          { className: 'verse-title' },
          _react2.default.createElement(
            'div',
            { className: 'pane', style: { display: 'flex', flexDirection: 'column' } },
            _react2.default.createElement(
              'span',
              { className: 'verse-title-title' },
              languageName
            ),
            _react2.default.createElement(
              'span',
              { className: 'verse-title-subtitle' },
              bookName,
              ' ',
              reference.chapter + ':' + reference.verse
            )
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: manifest.target_language.direction === 'ltr' ? 'ltr-content' : 'rtl-content' },
            _react2.default.createElement(_RenderSelectionTextComponent2.default, {
              translate: translate,
              actions: this.props.actions,
              mode: this.props.mode,
              verseText: this.props.verseText,
              selections: this.props.selections
            })
          )
        )
      );
    }
  }]);

  return SelectionArea;
}(_react.Component);

SelectionArea.propTypes = {
  actions: _propTypes2.default.shape({
    changeSelectionsInLocalState: _propTypes2.default.func,
    openAlertDialog: _propTypes2.default.func
  }).isRequired,
  manifest: _propTypes2.default.object,
  reference: _propTypes2.default.object,
  mode: _propTypes2.default.string.isRequired,
  verseText: _propTypes2.default.string.isRequired,
  selections: _propTypes2.default.array.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = SelectionArea;

/***/ }),

/***/ 760:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _deepEqual = __webpack_require__(515);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _windowSelectionHelpers = __webpack_require__(761);

var windowSelectionHelpers = _interopRequireWildcard(_windowSelectionHelpers);

var _selectionHelpers = __webpack_require__(763);

var selectionHelpers = _interopRequireWildcard(_selectionHelpers);

var _stringHelpers = __webpack_require__(762);

var stringHelpers = _interopRequireWildcard(_stringHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// helpers


var RenderSelectionTextComponent = function (_Component) {
  _inherits(RenderSelectionTextComponent, _Component);

  function RenderSelectionTextComponent() {
    _classCallCheck(this, RenderSelectionTextComponent);

    return _possibleConstructorReturn(this, (RenderSelectionTextComponent.__proto__ || Object.getPrototypeOf(RenderSelectionTextComponent)).apply(this, arguments));
  }

  _createClass(RenderSelectionTextComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      // track when the selections change to prevent false clicks of removals
      this.renderTimestamp = Date.now();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // track when the selections change to prevent false clicks of removals
      if (!(0, _deepEqual2.default)(this.props.selections, nextProps.selections)) {
        this.renderTimestamp = Date.now();
      }
    }
  }, {
    key: 'getSelectionText',
    value: function getSelectionText(verseText) {
      var selection = windowSelectionHelpers.getSelectionFromCurrentWindowSelection(verseText);
      this.addSelection(selection);
    }
  }, {
    key: 'addSelection',
    value: function addSelection(selection) {
      var _props = this.props,
          selections = _props.selections,
          verseText = _props.verseText,
          translate = _props.translate;

      selections = selectionHelpers.addSelectionToSelections(selection, selections, verseText);
      // console.log(selections); // this is a good place to preview selections before saved in state
      if (selections.length <= 4) {
        this.props.actions.changeSelectionsInLocalState(selections);
      } else {
        var message = translate('select_too_many');
        this.props.actions.openAlertDialog(message);
      }
    }
  }, {
    key: 'removeSelection',
    value: function removeSelection(selection) {
      var _props2 = this.props,
          selections = _props2.selections,
          verseText = _props2.verseText;

      selections = selectionHelpers.removeSelectionFromSelections(selection, selections, verseText);
      this.props.actions.changeSelectionsInLocalState(selections);
    }
  }, {
    key: 'inDisplayBox',
    value: function inDisplayBox(insideDisplayBox) {
      var verseText = this.props.verseText;

      this.setState({ inBox: insideDisplayBox });
      if (!insideDisplayBox && Math.abs(window.getSelection().extentOffset - window.getSelection().baseOffset) > 0) {
        this.getSelectionText(verseText);
      }
    }
  }, {
    key: 'verseTextSpans',
    value: function verseTextSpans(selections, verseText) {
      var _this2 = this;

      var verseTextSpans = void 0; // return
      var stringSplices = selectionHelpers.selectionsToStringSplices(verseText, selections);
      verseTextSpans = stringSplices.map(function (stringSplice, index) {
        var selectMode = _this2.props.mode === "select"; // use selectMode to conditionally use highlight and remove
        var style = { color: 'black' };
        var callback = function callback() {};
        if (stringSplice.selected) {
          style.backgroundColor = 'var(--highlight-color)';
          if (selectMode) {
            style.cursor = 'pointer'; // only show hand if in select mode
            callback = function callback() {
              var timePassed = Date.now() - _this2.renderTimestamp; // see how long between now and last selection
              var isRealClick = timePassed > 100; // if the click happened quicker than 100ms, it was likely false click
              if (isRealClick) _this2.removeSelection(stringSplice); // actually remove since it was likely a real click
            };
          }
        }

        return _react2.default.createElement(
          'span',
          { key: index, style: style, onClick: callback },
          stringSplice.text
        );
      });
      return verseTextSpans;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          verseText = _props3.verseText,
          selections = _props3.selections;
      // normalize whitespace for text rendering in order to display highlights with more than one space since html selections show one space

      verseText = stringHelpers.normalizeString(verseText);
      var verseTextSpans = _react2.default.createElement(
        'span',
        null,
        verseText
      );

      if (selections && selections.length > 0) {
        verseTextSpans = this.verseTextSpans(selections, verseText);
      }
      return _react2.default.createElement(
        'div',
        { onMouseUp: function onMouseUp() {
            return _this3.getSelectionText(verseText);
          }, onMouseLeave: function onMouseLeave() {
            return _this3.inDisplayBox(false);
          }, onMouseEnter: function onMouseEnter() {
            return _this3.inDisplayBox(true);
          } },
        verseTextSpans
      );
    }
  }]);

  return RenderSelectionTextComponent;
}(_react.Component);

RenderSelectionTextComponent.propTypes = {
  actions: _propTypes2.default.shape({
    changeSelectionsInLocalState: _propTypes2.default.func,
    openAlertDialog: _propTypes2.default.func
  }).isRequired,
  mode: _propTypes2.default.string.isRequired,
  verseText: _propTypes2.default.string.isRequired,
  selections: _propTypes2.default.array.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = RenderSelectionTextComponent;

/***/ }),

/***/ 761:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPrescedingTextFromElementSiblings = exports.getPrescedingTextFromElement = exports.getPrescedingTextFromElementAndSiblings = exports.getPrescedingTextFromWindowSelection = exports.getSelectedTextFromWindowSelection = exports.getCurrentWindowSelection = exports.getSelectionFromCurrentWindowSelection = undefined;
exports.shouldRenderEllipsis = shouldRenderEllipsis;

var _stringHelpers = __webpack_require__(762);

var stringHelpers = _interopRequireWildcard(_stringHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @description - Gets the selection object from the currently selected text from the Web UI
 * @param {String} entireText - the text that the selection should be in, ie verseText
 * @return {Object} - the selection object to be used
 * TODO: Find a way to test
 */
var getSelectionFromCurrentWindowSelection = exports.getSelectionFromCurrentWindowSelection = function getSelectionFromCurrentWindowSelection(entireText) {
  var selection = void 0; // response
  var windowSelection = getCurrentWindowSelection();
  var selectedText = getSelectedTextFromWindowSelection(windowSelection);
  var prescedingText = getPrescedingTextFromWindowSelection(windowSelection);
  // Some edge cases leave a weird selection remaining, let's clean up.
  selection = stringHelpers.generateSelection(selectedText, prescedingText, entireText);
  window.getSelection().empty();
  return selection;
};
/**
* @description - Gets the window's Selection from the UI
* @return {Object} windowSelection - a windowSelection object from inside a compatible element
* TODO: Find a way to test
*/
var getCurrentWindowSelection = exports.getCurrentWindowSelection = function getCurrentWindowSelection() {
  return window.getSelection();
};
/**
* @description - Gets the window selected text from the windowSelection
* @param {Object} windowSelection - a windowSelection object from inside a compatible element
* @return {String} - selectedText
* TODO: Find a way to test
*/
var getSelectedTextFromWindowSelection = exports.getSelectedTextFromWindowSelection = function getSelectedTextFromWindowSelection(windowSelection) {
  return windowSelection.toString();
};
/**
* @description - Gets the prescedingText from the windowSelection
* @param {Object} windowSelection - a windowSelection object from inside a compatible element
* @return {String} - the string of prescedingText
* Implementation notes on why you can't just use the window.getSelection()
* getSelection is limited by same innerText node, and does not include span siblings
* indexOfTextSelection is broken by any other previous selection since it only knows its innerText node.
* TODO: Find a way to test
*/
var getPrescedingTextFromWindowSelection = exports.getPrescedingTextFromWindowSelection = function getPrescedingTextFromWindowSelection(windowSelection) {
  var prescedingText = void 0; // response
  // concatenate spans etc... to get the prescedingText from the windowSelection
  var selectedText = getSelectedTextFromWindowSelection(windowSelection);
  // do nothing since an empty space was selected
  if (selectedText !== '') {
    // get the text after the presceding selection and current span selection is in.
    var selectionRange = windowSelection.getRangeAt(0);
    // get the character index of what is selected in context of the span it is in.
    var selectionRangeStart = selectionRange.startOffset;
    // get the container of the selection, this is a strange object, that logs as a string.
    var textContainer = selectionRange.commonAncestorContainer;
    // get the parent span that contains the textContainer.

    var element = void 0;
    // if the textContainer is #text, then use the parentElement - usually non-overlapping selection
    if ('#text' === textContainer.nodeName) element = textContainer.parentElement;
    // if the textContainer is a span, then use it as the element
    if ('SPAN' === textContainer.nodeName) element = textContainer;
    // if the textContainer is a div, its an overlapping selection, don't use commonAncestorContainer
    if ('DIV' === textContainer.nodeName) element = selectionRange.startContainer.parentElement;
    // check for element, as textContainer can but rarely be something other than #text, span or div
    if (element) {
      prescedingText = getPrescedingTextFromElementAndSiblings(element, selectionRangeStart, windowSelection);
    }
  }
  return prescedingText;
};
/**
 * @description - gets the prescedingText from the element ending at the selectionRangeStart
 * @param {Element} element - the html element that has text and siblings with text
 * @param {Int} selectionRangeStart - the character index of the start of the selection
 * @return {String} - the string of prescedingText
 */
var getPrescedingTextFromElementAndSiblings = exports.getPrescedingTextFromElementAndSiblings = function getPrescedingTextFromElementAndSiblings(element, selectionRangeStart, windowSelection) {
  var prescedingText = void 0; // response
  var prescedingTextFromElementSiblings = getPrescedingTextFromElementSiblings(element, windowSelection);
  var prescedingTextFromElement = getPrescedingTextFromElement(element, selectionRangeStart, windowSelection);
  prescedingText = prescedingTextFromElementSiblings + prescedingTextFromElement;
  return prescedingText;
};
/**
 * @description - gets the prescedingText from the element ending at the selectionRangeStart
 * @param {Element} element - the html element that has text
 * @param {Int} selectionRangeStart - the character index of the start of the selection
 * @return {String} - the string of prescedingText
 */
var getPrescedingTextFromElement = exports.getPrescedingTextFromElement = function getPrescedingTextFromElement(element, selectionRangeStart) {
  var prescedingText = void 0; // response
  var text = element.textContent;
  prescedingText = text.slice(0, selectionRangeStart);
  return prescedingText;
};
/**
 * @description - gets the prescedingText from the element siblings
 * @param {Element} element - the html element that has text and siblings with text
 * @return {String} - the string of prescedingText
 */
var getPrescedingTextFromElementSiblings = exports.getPrescedingTextFromElementSiblings = function getPrescedingTextFromElementSiblings(element, windowSelection) {
  var prescedingText = ''; // response
  // get the previous sibling to start the loop
  var previousSibling = element.previousElementSibling;
  // loop through previous spans to get their text
  while (previousSibling) {
    // just in case the previousSibling just happens to be a part of the selection
    if (windowSelection && !windowSelection.containsNode(previousSibling)) {
      // prepend the spans innerText to the prescedingText
      prescedingText = previousSibling.textContent + prescedingText;
    }
    // move to the previous span, if none, it ends the loop
    previousSibling = previousSibling.previousElementSibling;
  }
  return prescedingText;
};

/**
 * This is a helper method to determine if the selection needs an ellipsis in
 * between the selected words or not.
 * @param {Array} selections - Array of word objects that the user selected
 * @param {string} verseText - The entire verse string from the current check
 * @returns {boolean} - Whether or not the View should display an ellipsis
 */
function shouldRenderEllipsis(selections, verseText) {
  /** Need to get the the words and occurrence of the selected edge words */
  var endSelectedWord = selections[selections.length - 1].text.trim();
  var endSelectedWordOccurrence = selections[selections.length - 1].occurrence;
  var beginningSelectedWord = selections[0].text.trim();
  var beginningSelectedWordOccurrence = selections[0].occurrence;

  /** Using the occurrences to get the actual index of the word vs
   *  the first time it appears in verse text */
  var indexOfBeginningSelection = verseText.split(beginningSelectedWord, beginningSelectedWordOccurrence).join(beginningSelectedWord).length;
  var indexOfEndSelection = verseText.split(endSelectedWord, endSelectedWordOccurrence).join(endSelectedWord).length;

  /** Checking the text in between selected words for a non space character */
  var textBetweenSelection = verseText.substring(indexOfBeginningSelection + beginningSelectedWord.length, indexOfEndSelection);
  /** If the end index is the same as the beginning then it is the first word */
  return indexOfEndSelection !== indexOfBeginningSelection && textBetweenSelection.match(/\S/);
}

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-console */
/**
 * @description Function that count occurrences of a substring in a string
 * @param {String} string - The string to search in
 * @param {String} subString - The sub string to search for
 * @returns {Integer} - the count of the occurrences
 * @see http://stackoverflow.com/questions/4009756/how-to-count-string-occurrence-in-string/7924240#7924240
 * modified to fit our use cases, return zero for '' substring, and no use case for overlapping.
 */
var occurrencesInString = exports.occurrencesInString = function occurrencesInString(string, subString) {
  if (subString.length <= 0) return 0;
  var occurrences = 0,
      position = 0,
      step = subString.length;
  while (position < string.length) {
    position = string.indexOf(subString, position);
    if (position === -1) break;
    ++occurrences;
    position += step;
  }
  return occurrences;
};
/**
 * @description - Function that normalizes a string including whitespace
 * @param {String} string - the string to normalize
 * @preturns {String} - The returned normalized string
 */
var normalizeString = exports.normalizeString = function normalizeString(string) {
  string = string.replace(/\s+/g, ' ');
  return string;
};
/**
 * @description - generates a selection object from the selected text, prescedingText and whole text
 * @param {String} selectedText - the text that is selected
 * @param {String} prescedingText - the text that prescedes the selection
 * @param {String} entireText - the text that the selection should be in
 * @return {Object} - the selection object to be used
 */
var generateSelection = exports.generateSelection = function generateSelection(selectedText, prescedingText, entireText) {
  var selection = {}; // response
  // replace more than one contiguous space with a single one since HTML/selection only renders 1
  entireText = normalizeString(entireText);
  // get the occurrences before this one
  var prescedingOccurrences = occurrencesInString(prescedingText, selectedText);
  // calculate this occurrence number by adding it to the presceding ones
  var occurrence = prescedingOccurrences + 1;
  // get the total occurrences from the verse
  var occurrences = occurrencesInString(entireText, selectedText);
  selection = {
    text: selectedText,
    occurrence: occurrence,
    occurrences: occurrences
  };
  return selection;
};

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSelectionToSelections = exports.removeSelectionFromSelections = exports.optimizeSelections = exports.rangesToSelections = exports.optimizeRanges = exports.selectionsToStringSplices = exports.selectionsToRanges = exports.spliceStringOnRanges = undefined;

var _deepEqual = __webpack_require__(515);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _lodash = __webpack_require__(752);

var _lodash2 = _interopRequireDefault(_lodash);

var _stringHelpers = __webpack_require__(762);

var stringHelpers = _interopRequireWildcard(_stringHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @description - Splice string into array of ranges, flagging what is selected
 * @param {array} ranges - array of ranges [[int,int],...]
 * @returns {array} - array of objects [obj,...]
 */
var spliceStringOnRanges = exports.spliceStringOnRanges = function spliceStringOnRanges(string, ranges) {
  var selectionArray = []; // response
  var remainingString = string;
  // shift the range since the loop is destructive by working on the remainingString and not original string
  var rangeShift = 0; // start the range shift at the first character
  ranges.forEach(function (range) {
    var firstCharacterPosition = range[0] - rangeShift; // original range start - the rangeShift
    var beforeSelection = remainingString.slice(0, firstCharacterPosition); // save all the text before the selection
    if (beforeSelection) {
      // only add to the array if string isn't empty
      selectionArray.push({ text: beforeSelection, selected: false });
    }
    var shiftedRangeStart = range[0] - rangeShift; // range start - the rangeShift
    var shiftedRangeEnd = range[1] + 1 - rangeShift; // range end - rangeShift + 1 to include last character
    var selection = remainingString.slice(shiftedRangeStart, shiftedRangeEnd); // save the text in the selection
    var stringBeforeRange = string.slice(0, range[0]);
    var occurrence = stringHelpers.occurrencesInString(stringBeforeRange, selection) + 1;
    var occurrences = stringHelpers.occurrencesInString(string, selection);
    var selectionObject = {
      text: selection,
      selected: true,
      occurrence: occurrence,
      occurrences: occurrences
    };
    selectionArray.push(selectionObject); // add the selection to the response array
    // next iteration is using remaining string
    var lastCharacterPosition = range[1] - rangeShift + 1; // original range end position - the rangeShift + 1 to not include the last range character in the remaining string
    remainingString = remainingString.slice(lastCharacterPosition); // update the remainingString to after the range
    // shift the range up to last char of substring (before+sub)
    rangeShift += beforeSelection.length; // adjust the rangeShift by the length prior to the selection
    rangeShift += selection.length; // adjust the rangeShift by the length of the selection itself
  });
  if (remainingString) {
    // only add to the array if string isn't empty
    selectionArray.push({ text: remainingString, selected: false });
  }
  return selectionArray;
};
/**
 * @description - This converts ranges to array of selection objects
 * @param {string} string - text used to get the ranges of
 * @param {array} selections - array of selections [obj,...]
 * @returns {array} - array of range objects
 */

// helpers
var selectionsToRanges = exports.selectionsToRanges = function selectionsToRanges(string, selections) {
  var ranges = []; // response
  selections.forEach(function (selection) {
    if (string && string.includes(selection.text)) {
      // conditions to prevent errors
      var splitArray = string.split(selection.text); // split the string to get the text between occurrences
      var beforeSelection = splitArray.slice(0, selection.occurrence).join(selection.text); // get the text before the selection to handle multiple occurrences
      var start = beforeSelection.length; // the start position happens at the length of the string that comes before it
      var end = start + selection.text.length - 1; // the end position happens at the end of the selection text, but length doesn't account for 0 based position start
      var range = [start, end]; // new range
      ranges.push(range); // add the new range
    }
  });
  return ranges;
};

/**
 * @description - Splice string into array of substrings, flagging what is selected
 * @param {string} string - text used to get the ranges of
 * @param {array} selections - array of selections [obj,...]
 * @returns {array} - array of objects
 */
var selectionsToStringSplices = exports.selectionsToStringSplices = function selectionsToStringSplices(string, selections) {
  var splicedStringArray = []; // response
  selections = optimizeSelections(string, selections); // optimize them before converting
  var ranges = selectionsToRanges(string, selections); // convert the selections to ranges
  splicedStringArray = spliceStringOnRanges(string, ranges); // splice the string on the ranges
  return splicedStringArray; // return the spliced string
};

/**
 * @description - This abstracts complex handling of ranges such as order, deduping, concatenating, overlaps
 * @param {array}  ranges - array of ranges [[int,int],...]
 * @returns {array} - array of optimized ranges [[int,int],...]
 */
var optimizeRanges = exports.optimizeRanges = function optimizeRanges(ranges) {
  var optimizedRanges = []; // response
  if (ranges.length === 1) return ranges; // if there's only one, return it
  ranges = _lodash2.default.sortBy(ranges, function (range) {
    return range[1];
  }); // order ranges by end char index as secondary
  ranges = _lodash2.default.sortBy(ranges, function (range) {
    return range[0];
  }); // order ranges by start char index as primary
  ranges = _lodash2.default.uniq(ranges); // remove duplicates
  // combine overlapping and contiguous ranges
  var runningRange = []; // the running range to merge overlapping and contiguous ranges
  ranges.forEach(function (currentRange, index) {
    var currentStart = currentRange[0],
        currentEnd = currentRange[1];
    var runningStart = runningRange[0],
        runningEnd = runningRange[1];
    if (currentStart >= runningStart && currentStart <= runningEnd + 1) {
      // the start occurs in the running range and +1 handles contiguous
      if (currentEnd >= runningStart && currentEnd <= runningEnd) {// if the start occurs inside running range then let's check the end
        // if the end occurs inside the running range then it's inside it and doesn't matter
      } else {
        // the end doesn't occur inside the running range
        runningRange[1] = runningEnd = currentEnd; // extend running range
      }
    } else {
      // the start does not occur in the running range
      if (runningRange.length !== 0) optimizedRanges.push(runningRange); // the running range is closed push it to optimizedRanges
      runningRange = currentRange; // reset the running range to this one
    }
    if (ranges.length === index + 1 && runningEnd - runningStart >= 0) {
      // this is the last one and it isn't blank
      optimizedRanges.push(runningRange); // push the last one to optimizedRanges
    }
  });
  return optimizedRanges;
};

/**
 * @description - This converts ranges to array of selection objects
 * @param {string} string - text used to get the ranges of
 * @param {array} ranges - array of ranges [[int,int],...]
 * @returns {array} - array of selection objects
 */
var rangesToSelections = exports.rangesToSelections = function rangesToSelections(string, ranges) {
  var selections = [];
  ranges.forEach(function (range) {
    var start = range[0],
        end = range[1]; // set the start and end point
    var length = end - start + 1; // get the length of the sub string
    var subString = string.substr(start, length); // get text of the sub string
    var beforeText = string.substr(0, start); // get the string prior to the range
    var beforeMatches = stringHelpers.occurrencesInString(beforeText, subString); // get occurrences prior to range
    var occurrence = beforeMatches + 1; // get number of this occurrence
    var occurrences = stringHelpers.occurrencesInString(string, subString); // get occurrences in string
    var selection = {
      text: subString,
      occurrence: occurrence,
      occurrences: occurrences
    };
    if (occurrences > 0) {
      // there are some edge cases where empty strings get through but don't have occurrences
      selections.push(selection);
    }
  });
  return selections;
};
/**
 * @description - This abstracts complex handling of selections such as order, deduping, concatenating, overlapping ranges
 * @param {string} string - the text selections are found in
 * @param {array}  selections - array of selection objects [Obj,...]
 * @returns {array} - array of selection objects
 */
var optimizeSelections = exports.optimizeSelections = function optimizeSelections(string, selections) {
  var optimizedSelections = void 0; // return
  // filter out the random clicks from the UI
  selections = selections.filter(function (selection) {
    var blankSelection = { text: "", occurrence: 1, occurrences: 0 };
    return !(0, _deepEqual2.default)(selection, blankSelection);
  });
  var ranges = selectionsToRanges(string, selections); // get char ranges of each selection
  ranges = optimizeRanges(ranges); // optimize the ranges
  optimizedSelections = rangesToSelections(string, ranges); // convert optimized ranges into selections
  return optimizedSelections;
};
/**
 * @description - Removes a selection if found in the array of selections
 * @param {Object} selection - the selection to remove
 * @param {Array}  selections - array of selection objects [Obj,...]
 * @param {string} string - the text selections are found in
 * @returns {Array} - array of selection objects
 */
var removeSelectionFromSelections = exports.removeSelectionFromSelections = function removeSelectionFromSelections(selection, selections, string) {
  selections = Array.from(selections);
  selections = selections.filter(function (_selection) {
    return !(_selection.occurrence === selection.occurrence && _selection.text === selection.text);
  });
  selections = optimizeSelections(string, selections);
  return selections;
};
/**
 * @description - Removes a selection if found in the array of selections
 * @param {Object} selection - the selection to remove
 * @param {Array}  selections - array of selection objects [Obj,...]
 * @param {string} string - the text selections are found in
 * @returns {Array} - array of selection objects
 */
var addSelectionToSelections = exports.addSelectionToSelections = function addSelectionToSelections(selection, selections, string) {
  selections = Array.from(selections);
  selections.push(selection);
  selections = optimizeSelections(string, selections);
  return selections;
};

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(765);

var _InstructionsAreaTextSelection = __webpack_require__(767);

var _InstructionsAreaTextSelection2 = _interopRequireDefault(_InstructionsAreaTextSelection);

var _reactTooltip = __webpack_require__(768);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstructionsArea = function InstructionsArea(_ref) {
  var alignedGLText = _ref.alignedGLText,
      selections = _ref.selections,
      dontShowTranslation = _ref.dontShowTranslation,
      verseText = _ref.verseText,
      mode = _ref.mode,
      translate = _ref.translate,
      invalidated = _ref.invalidated;


  if (!verseText) {
    return _react2.default.createElement(
      'div',
      { className: 'instructions-area' },
      _react2.default.createElement(
        'span',
        null,
        translate("empty_verse")
      ),
      _react2.default.createElement('br', null)
    );
  }

  if (selections.length === 0 && dontShowTranslation && !invalidated) {
    // if invalidated we had previous selection
    return _react2.default.createElement(
      'div',
      { className: 'instructions-area' },
      _react2.default.createElement(
        'span',
        null,
        translate("no_selection")
      ),
      _react2.default.createElement('br', null)
    );
  }

  function getSelectionString() {
    if (invalidated) {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          translate('selection_invalidated'),
          _react2.default.createElement(
            'strong',
            {
              'data-tip': translate('invalidated_tooltip'),
              'data-place': 'top',
              'data-effect': 'float',
              'data-type': 'dark',
              'data-class': 'selection-tooltip',
              'data-delay-hide': '100',
              style: { 'vertical-align': 'super', 'font-size': '0.8em' } },
            '1'
          )
        ),
        _react2.default.createElement(_reactTooltip2.default, null)
      );
    }
  }

  if (mode === 'select' || invalidated) {
    // if invalidated we had previous selection
    return _react2.default.createElement(
      'div',
      { className: 'instructions-area' },
      getSelectionString(),
      _react2.default.createElement(
        'span',
        null,
        translate("please_select")
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          'strong',
          { style: { color: 'var(--accent-color)' } },
          '"' + alignedGLText + '"'
        )
      ),
      _react2.default.createElement('br', null)
    );
  }

  return _react2.default.createElement(
    'div',
    { className: 'instructions-area' },
    _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(
        'strong',
        { style: { color: 'var(--accent-color)' } },
        '"' + alignedGLText + '"'
      )
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'span',
      null,
      translate("translated_as")
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_InstructionsAreaTextSelection2.default, {
        selections: selections,
        verseText: verseText })
    )
  );
};

InstructionsArea.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  alignedGLText: _propTypes2.default.string.isRequired,
  selections: _propTypes2.default.array.isRequired,
  dontShowTranslation: _propTypes2.default.bool,
  verseText: _propTypes2.default.string.isRequired,
  mode: _propTypes2.default.string,
  invalidated: _propTypes2.default.bool
};

exports.default = InstructionsArea;

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(766);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".instructions-area {\n  padding: 5px;\n  text-align: center;\n  overflow: auto;\n}", ""]);

// exports


/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _windowSelectionHelpers = __webpack_require__(761);

var windowSelectionHelpers = _interopRequireWildcard(_windowSelectionHelpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ELLIPSIS = '…';

var InstructionsAreaTextSelection = function InstructionsAreaTextSelection(_ref) {
  var selections = _ref.selections,
      verseText = _ref.verseText;

  if (windowSelectionHelpers.shouldRenderEllipsis(selections, verseText)) {
    return _react2.default.createElement(
      QuoatationMarks,
      null,
      selections[0].text.trim(),
      _react2.default.createElement(
        'strong',
        { style: { color: 'var(--accent-color)' } },
        ' ' + ELLIPSIS + ' '
      ),
      selections[selections.length - 1].text.trim()
    );
  } else {
    return _react2.default.createElement(
      QuoatationMarks,
      null,
      selections.map(function (selection, index) {
        return _react2.default.createElement(
          'span',
          { key: index },
          _react2.default.createElement(
            'strong',
            { style: { color: 'var(--accent-color)' } },
            '' + selection.text.trim()
          ),
          selections[index + 1] ? _react2.default.createElement(
            'span',
            null,
            " "
          ) : null
        );
      })
    );
  }
};

exports.default = InstructionsAreaTextSelection;

InstructionsAreaTextSelection.propTypes = {
  selections: _propTypes2.default.array.isRequired,
  verseText: _propTypes2.default.string.isRequired
};

var QuoatationMarks = function QuoatationMarks(_ref2) {
  var children = _ref2.children;
  return _react2.default.createElement(
    'strong',
    { style: { color: 'var(--accent-color)' } },
    '"',
    children,
    '"'
  );
};

QuoatationMarks.propTypes = {
  children: _propTypes2.default.array.isRequired
};

/***/ }),

/***/ 768:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/react-tooltip/dist/index.js'");

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(782);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditVerseArea = function EditVerseArea(_ref) {
  var actions = _ref.actions,
      tags = _ref.tags,
      verseChanged = _ref.verseChanged,
      verseText = _ref.verseText,
      dir = _ref.dir,
      translate = _ref.translate;

  var tagList1 = [["spelling", translate("spelling")], ["punctuation", translate("punctuation")], ["wordChoice", translate("word_choice")]];

  var tagList2 = [["meaning", translate("meaning")], ["grammar", translate("grammar")], ["other", translate("other")]];

  var checkboxesColumn1 = tagList1.map(function (tag) {
    return _react2.default.createElement(
      _reactBootstrap.Checkbox,
      {
        key: tag[0],
        checked: tags.includes(tag[0]),
        disabled: !verseChanged,
        style: verseChanged ? { marginLeft: '10px', marginRight: '10px', color: 'var(--text-color-dark)' } : { marginLeft: '10px', marginRight: '10px', color: 'var(--text-color-light)' },
        onChange: actions.handleTagsCheckbox.bind(undefined, tag[0])
      },
      tag[1]
    );
  });

  var checkboxesColumn2 = tagList2.map(function (tag) {
    return _react2.default.createElement(
      _reactBootstrap.Checkbox,
      {
        key: tag[0],
        checked: tags.includes(tag[0]),
        disabled: !verseChanged,
        style: verseChanged ? { marginLeft: '10px', marginRight: '10px', color: 'var(--text-color-dark)' } : { marginLeft: '10px', marginRight: '10px', color: 'var(--text-color-light)' },
        onChange: actions.handleTagsCheckbox.bind(undefined, tag[0])
      },
      tag[1]
    );
  });

  var checkBoxText = verseChanged ? translate("next_change_reason") : translate("first_make_change");

  return _react2.default.createElement(
    'div',
    { className: 'edit-area' },
    _react2.default.createElement(
      'div',
      { style: { fontWeight: 'bold' } },
      _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'pencil', style: { marginRight: '5px' } }),
      translate("edit_verse")
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { style: { flex: 'auto', display: 'flex', flexDirection: 'column', marginBottom: '5px' }, controlId: 'formControlsTextarea' },
      _react2.default.createElement(_reactBootstrap.FormControl, { autoFocus: true,
        componentClass: 'textarea',
        type: 'text',
        defaultValue: verseText,
        style: { flex: 'auto', direction: dir },
        onBlur: actions.handleEditVerse.bind(undefined),
        onInput: actions.checkVerse.bind(undefined)
      }),
      _react2.default.createElement(
        'div',
        { style: { flex: '0 0 65px', marginTop: '5px', fontSize: '0.9em' } },
        checkBoxText,
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { style: { display: 'flex' } },
          _react2.default.createElement(
            'div',
            { style: { flex: '1' } },
            checkboxesColumn1
          ),
          _react2.default.createElement(
            'div',
            { style: { flex: '1' } },
            checkboxesColumn2
          )
        )
      )
    )
  );
};

EditVerseArea.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.shape({
    handleTagsCheckbox: _propTypes2.default.func,
    handleEditVerse: _propTypes2.default.func,
    checkVerse: _propTypes2.default.func
  }).isRequired,
  tags: _propTypes2.default.array.isRequired,
  verseChanged: _propTypes2.default.bool.isRequired,
  verseText: _propTypes2.default.string.isRequired,
  dir: _propTypes2.default.string.isRequired
};

exports.default = EditVerseArea;

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(783);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".edit-area {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  padding: 5px 15px 0 15px;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(785);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CommentArea = function CommentArea(_ref) {
  var actions = _ref.actions,
      comment = _ref.comment,
      translate = _ref.translate;

  return _react2.default.createElement(
    'div',
    { className: 'comment-area' },
    _react2.default.createElement(
      'div',
      { style: { fontWeight: 'bold' } },
      _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'comment', style: { marginRight: '5px' } }),
      translate("comment")
    ),
    _react2.default.createElement(
      _reactBootstrap.FormGroup,
      { style: { flex: 'auto', display: 'flex' }, controlId: 'formControlsTextarea' },
      _react2.default.createElement(_reactBootstrap.FormControl, { autoFocus: true,
        componentClass: 'textarea',
        type: 'text',
        defaultValue: comment,
        style: { flex: 'auto' },
        onBlur: actions.handleComment.bind(undefined),
        onInput: actions.checkComment.bind(undefined)
      })
    )
  );
};

CommentArea.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.shape({
    handleComment: _propTypes2.default.func,
    checkComment: _propTypes2.default.func
  }).isRequired,
  comment: _propTypes2.default.string.isRequired
};

exports.default = CommentArea;

/***/ }),

/***/ 785:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(786);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 786:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".comment-area {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  padding: 5px 15px 0 15px;\n  height: 100%;\n}", ""]);

// exports


/***/ }),

/***/ 787:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(788);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 788:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".check-area {\n  min-height: 130px;\n  height: 100%;\n  display: flex;\n  font-size: 1.1em;\n  border-bottom: 1px solid var(--border-color);\n}", ""]);

// exports


/***/ }),

/***/ 789:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(117);

__webpack_require__(790);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable non-constant-condition */
var SaveArea = function SaveArea(_ref) {
  var actions = _ref.actions,
      selections = _ref.selections,
      translate = _ref.translate;


  var handleNext = function handleNext() {
    selections.length > 0 ? actions.handleGoToNext() : actions.handleOpenDialog("next");
  };

  var handlePrevious = function handlePrevious() {
    selections.length > 0 ? actions.handleGoToPrevious() : actions.handleOpenDialog("previous");
  };

  return _react2.default.createElement(
    'div',
    { className: 'save-area' },
    _react2.default.createElement(
      'button',
      { className: 'btn-second',
        onClick: handlePrevious
      },
      _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'share-alt', style: { marginRight: '10px', transform: 'scaleX(-1)' } }),
      translate("save_previous")
    ),
    _react2.default.createElement(
      'button',
      { className: 'btn-prime',
        onClick: handleNext
      },
      translate("save_continue"),
      _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'share-alt', style: { marginLeft: '10px' } })
    )
  );
};

SaveArea.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  actions: _propTypes2.default.shape({
    handleGoToNext: _propTypes2.default.func,
    handleGoToPrevious: _propTypes2.default.func,
    handleOpenDialog: _propTypes2.default.func
  }).isRequired,
  selections: _propTypes2.default.array,
  goToNextOrPrevious: _propTypes2.default.string,
  skipToPrevious: _propTypes2.default.func,
  skipToNext: _propTypes2.default.func,
  handleClose: _propTypes2.default.func
};

exports.default = SaveArea;

/***/ }),

/***/ 790:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(791);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 791:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".save-area {\n  flex: 0 0 55px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: -10px;\n}", ""]);

// exports


/***/ }),

/***/ 792:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Dialog = __webpack_require__(403);

var _Dialog2 = _interopRequireDefault(_Dialog);

var _DialogActions = __webpack_require__(423);

var _DialogActions2 = _interopRequireDefault(_DialogActions);

var _DialogContent = __webpack_require__(440);

var _DialogContent2 = _interopRequireDefault(_DialogContent);

var _Toolbar = __webpack_require__(442);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _reactBootstrap = __webpack_require__(117);

var _localizationHelpers = __webpack_require__(793);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DialogComponent = function DialogComponent(_ref) {
  var dialogModalVisibility = _ref.dialogModalVisibility,
      translate = _ref.translate,
      handleSkip = _ref.handleSkip,
      handleClose = _ref.handleClose;

  var actions = [_react2.default.createElement(
    'button',
    {
      key: 1,
      className: 'btn-second',
      onClick: handleSkip },
    translate("skip")
  ), _react2.default.createElement(
    'button',
    {
      key: 2,
      className: 'btn-prime',
      onClick: handleClose },
    translate("close")
  )];

  var headerContent = _react2.default.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'space-between', width: '100%', marginLeft: 20, marginRight: 20 } },
    _react2.default.createElement(
      'span',
      { style: { color: "var(--reverse-color)" } },
      translate("attention")
    ),
    _react2.default.createElement(_reactBootstrap.Glyphicon, {
      onClick: handleClose,
      glyph: "remove",
      style: { color: "var(--reverse-color)", cursor: "pointer", fontSize: "18px", float: "right" }
    })
  );

  var select = (0, _localizationHelpers.getTranslatedParts)(translate, "select_translation", "${span}", 3);
  var skip = (0, _localizationHelpers.getTranslatedParts)(translate, "can_skip", "${span}", 3);
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Dialog2.default,
      {
        open: dialogModalVisibility,
        onClose: handleClose },
      _react2.default.createElement(
        _Toolbar2.default,
        { disableGutters: true, style: { backgroundColor: "var(--accent-color-dark)" } },
        headerContent
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        _DialogContent2.default,
        null,
        _react2.default.createElement(
          'p',
          null,
          select[0],
          ' ',
          _react2.default.createElement(
            'span',
            { style: { color: "var(--accent-color)", fontWeight: "bold" } },
            ' ',
            select[1],
            ' '
          ),
          ' ',
          select[2]
        ),
        _react2.default.createElement(
          'p',
          null,
          skip[0],
          ' ',
          _react2.default.createElement(
            'span',
            { style: { color: "var(--accent-color)", fontWeight: "bold" } },
            ' ',
            skip[1],
            ' '
          ),
          ' ',
          skip[2]
        )
      ),
      _react2.default.createElement(
        _DialogActions2.default,
        { disableActionSpacing: true },
        actions
      )
    )
  );
};

DialogComponent.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  handleClose: _propTypes2.default.func.isRequired,
  dialogModalVisibility: _propTypes2.default.bool.isRequired,
  handleSkip: _propTypes2.default.func.isRequired
};

exports.default = DialogComponent;

/***/ }),

/***/ 793:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-console */

/**
 * translate a string and splits it into parts.  Fills part array with blank lines to meet minCount 
 * @param {function} translate
 * @param {string} key
 * @param {string} splitAt - text for splitting
 * @param {int} minCount
 * @return {array} split translated string
 */
var getTranslatedParts = exports.getTranslatedParts = function getTranslatedParts(translate, key, splitAt, minCount) {
  var parts = [];
  var translation = translate(key);
  if (translation) {
    parts = translation.split(splitAt);
  }
  for (var i = parts.length; i < minCount; i++) {
    parts.push("");
  }
  return parts;
};

/***/ }),

/***/ 794:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(117);

var _InvalidatedIcon = __webpack_require__(795);

var _InvalidatedIcon2 = _interopRequireDefault(_InvalidatedIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IconIndicators = function IconIndicators(_ref) {
  var verseEdited = _ref.verseEdited,
      selections = _ref.selections,
      bookmarkEnabled = _ref.bookmarkEnabled,
      translate = _ref.translate,
      invalidated = _ref.invalidated,
      comment = _ref.comment;


  function getInvalidatedIcon() {
    if (invalidated) {
      return _react2.default.createElement(
        'div',
        { key: 'invalidated',
          className: 'glyphicon glyphicon-invalidated',
          style: {
            margin: '0px 20px'
          } },
        _react2.default.createElement(_InvalidatedIcon2.default, {
          height: 16,
          width: 16,
          color: '#ffffff'
        })
      );
    }
  }

  return _react2.default.createElement(
    'div',
    { style: { display: 'flex', justifyContent: 'flex-end' } },
    getInvalidatedIcon(),
    _react2.default.createElement(_reactBootstrap.Glyphicon, {
      glyph: 'ok',
      style: {
        margin: '0px 20px',
        color: "var(--reverse-color)",
        opacity: selections.length > 0 ? 1 : 0.2
      },
      title: selections.length > 0 ? translate("icons.selections_found") : translate("icons.no_selections_found")
    }),
    _react2.default.createElement(_reactBootstrap.Glyphicon, {
      glyph: 'pencil',
      style: {
        margin: '0px 20px',
        color: "var(--reverse-color)",
        opacity: verseEdited ? 1 : 0.2
      },
      title: verseEdited ? translate("icons.verse_edits_found") : translate("icons.no_verse_edits_found")
    }),
    _react2.default.createElement(_reactBootstrap.Glyphicon, {
      glyph: 'comment',
      style: {
        margin: '0px 20px',
        color: "var(--reverse-color)",
        opacity: comment && comment.length > 0 ? 1 : 0.2
      },
      title: comment && comment.length > 0 ? translate("icons.comments_found") : translate("icons.no_comments_found")
    }),
    _react2.default.createElement(_reactBootstrap.Glyphicon, {
      glyph: 'bookmark',
      style: {
        margin: '0px 20px',
        color: "var(--reverse-color)",
        opacity: bookmarkEnabled ? 1 : 0.2
      },
      title: bookmarkEnabled ? translate("icons.bookmarked") : translate("icons.not_bookmarked")
    })
  );
};

IconIndicators.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  invalidated: _propTypes2.default.bool.isRequired,
  verseEdited: _propTypes2.default.bool.isRequired,
  selections: _propTypes2.default.array,
  comment: _propTypes2.default.string,
  bookmarkEnabled: _propTypes2.default.bool
};

exports.default = IconIndicators;

/***/ }),

/***/ 795:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvalidatedIcon = function InvalidatedIcon(props) {
  var styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: props.color
    }
  };

  return _react2.default.createElement(
    'svg',
    { style: styles.svg, width: '' + props.width, height: '' + props.height, viewBox: '0 0 475.082 475.082' },
    _react2.default.createElement('path', { style: styles.path, d: 'M107.067,317.195c1.713-1.708,2.568-3.898,2.568-6.563c0-2.663-0.855-4.853-2.568-6.571    c-1.714-1.707-3.905-2.562-6.567-2.562H9.135c-2.666,0-4.853,0.855-6.567,2.562C0.859,305.772,0,307.962,0,310.632    c0,2.665,0.855,4.855,2.568,6.563c1.714,1.711,3.905,2.566,6.567,2.566H100.5C103.166,319.766,105.353,318.91,107.067,317.195z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M310.629,109.634c2.669,0,4.859-0.855,6.563-2.568c1.718-1.711,2.574-3.901,2.574-6.567V9.138    c0-2.659-0.856-4.85-2.574-6.565c-1.704-1.711-3.895-2.57-6.563-2.57c-2.662,0-4.853,0.859-6.563,2.57    c-1.711,1.713-2.566,3.903-2.566,6.565v91.361c0,2.666,0.855,4.856,2.566,6.567C305.784,108.779,307.974,109.634,310.629,109.634z    ' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M118.771,347.184c-2.478,0-4.664,0.855-6.567,2.563l-73.089,73.087c-1.713,1.902-2.568,4.093-2.568,6.567    c0,2.474,0.855,4.664,2.568,6.566c2.096,1.708,4.283,2.57,6.567,2.57c2.475,0,4.665-0.862,6.567-2.57l73.089-73.087    c1.714-1.902,2.568-4.093,2.568-6.57c0-2.471-0.854-4.661-2.568-6.563C123.436,348.039,121.245,347.184,118.771,347.184z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M356.315,127.905c2.283,0,4.473-0.855,6.571-2.565l73.087-73.089c1.707-1.903,2.562-4.093,2.562-6.567    c0-2.475-0.855-4.665-2.562-6.567c-1.91-1.709-4.093-2.568-6.571-2.568c-2.471,0-4.66,0.859-6.563,2.568l-73.087,73.089    c-1.708,1.903-2.57,4.093-2.57,6.567c0,2.474,0.862,4.661,2.57,6.567C351.846,127.05,354.037,127.905,356.315,127.905z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M350.607,193.005c-4-3.999-9.328-7.994-15.988-11.991l-5.14,68.238l78.23,78.508c5.328,5.328,7.987,11.807,7.987,19.417    c0,7.423-2.662,13.802-7.987,19.13l-41.977,41.686c-5.146,5.146-11.608,7.666-19.417,7.566c-7.81-0.1-14.271-2.707-19.411-7.854    l-77.946-78.225l-68.234,5.144c3.999,6.656,7.993,11.988,11.991,15.985l95.362,95.643c15.803,16.18,35.207,24.27,58.238,24.27    c22.846,0,42.154-7.898,57.957-23.695l41.977-41.685c16.173-15.8,24.27-35.115,24.27-57.958c0-22.46-7.994-41.877-23.982-58.248    L350.607,193.005z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M472.518,157.889c-1.711-1.709-3.901-2.565-6.563-2.565h-91.365c-2.662,0-4.853,0.855-6.563,2.565    c-1.715,1.713-2.57,3.903-2.57,6.567c0,2.666,0.855,4.856,2.57,6.567c1.711,1.712,3.901,2.568,6.563,2.568h91.365    c2.662,0,4.853-0.856,6.563-2.568c1.708-1.711,2.563-3.901,2.563-6.567C475.082,161.792,474.226,159.602,472.518,157.889z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M109.348,67.099c5.523-5.14,11.991-7.705,19.417-7.705c7.611,0,14.084,2.663,19.414,7.993l77.943,78.227l68.234-5.142    c-4-6.661-7.99-11.991-11.991-15.987l-95.358-95.643c-15.798-16.178-35.212-24.27-58.242-24.27c-22.841,0-42.16,7.902-57.958,23.7    L28.837,69.955C12.659,85.756,4.57,105.073,4.57,127.912c0,22.463,7.996,41.877,23.982,58.245l95.93,95.93    c3.995,4.001,9.325,7.995,15.986,11.991l5.139-68.521L67.377,147.33c-5.327-5.33-7.992-11.801-7.992-19.417    c0-7.421,2.662-13.796,7.992-19.126L109.348,67.099z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M164.454,365.451c-2.667,0-4.854,0.855-6.567,2.563c-1.711,1.711-2.568,3.901-2.568,6.57v91.358    c0,2.669,0.854,4.853,2.568,6.57c1.713,1.707,3.9,2.566,6.567,2.566c2.666,0,4.853-0.859,6.567-2.566    c1.713-1.718,2.568-3.901,2.568-6.57v-91.358c0-2.662-0.855-4.853-2.568-6.57C169.306,366.307,167.116,365.451,164.454,365.451z' })
  );
};

InvalidatedIcon.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  color: _propTypes2.default.string
};

InvalidatedIcon.defaultProps = {
  width: 18,
  height: 18
};

exports.default = InvalidatedIcon;

/***/ }),

/***/ 796:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GroupMenu = __webpack_require__(797);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_GroupMenu).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 797:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = __webpack_require__(798);

var helpers = _interopRequireWildcard(_helpers);

var _Groups = __webpack_require__(803);

var _Groups2 = _interopRequireDefault(_Groups);

var _FilterMenuHeader = __webpack_require__(814);

var _FilterMenuHeader2 = _interopRequireDefault(_FilterMenuHeader);

var _GroupsMenuFilter = __webpack_require__(816);

var _GroupsMenuFilter2 = _interopRequireDefault(_GroupsMenuFilter);

__webpack_require__(821);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//helpers

//components


var GroupMenu = function (_React$Component) {
  _inherits(GroupMenu, _React$Component);

  function GroupMenu(props) {
    _classCallCheck(this, GroupMenu);

    var _this = _possibleConstructorReturn(this, (GroupMenu.__proto__ || Object.getPrototypeOf(GroupMenu)).call(this, props));

    _this.state = {
      expandFilter: false,
      isSubMenuExpanded: false
    };
    _this.handleFilterShowHideToggle = _this.handleFilterShowHideToggle.bind(_this);
    return _this;
  }

  _createClass(GroupMenu, [{
    key: 'handleFilterShowHideToggle',
    value: function handleFilterShowHideToggle() {
      this.setState({ expandFilter: !this.state.expandFilter });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          translate = _props.translate,
          currentToolName = _props.toolsReducer.currentToolName,
          _props$groupMenuReduc = _props.groupMenuReducer,
          filters = _props$groupMenuReduc.filters,
          isSubMenuExpanded = _props$groupMenuReduc.isSubMenuExpanded,
          groupsIndex = _props.groupsIndexReducer.groupsIndex,
          groupsData = _props.groupsDataReducer.groupsData,
          contextId = _props.contextIdReducer.contextId,
          _props$projectDetails = _props.projectDetailsReducer,
          projectSaveLocation = _props$projectDetails.projectSaveLocation,
          manifest = _props$projectDetails.manifest,
          actions = _props.actions,
          getSelections = _props.getSelections,
          isVerseFinished = _props.isVerseFinished,
          getGroupProgress = _props.getGroupProgress;

      var filterCount = helpers.getFilterCount(filters);
      // const showFilterMenu = currentToolName === "translationWords" && (this.state.expandFilter || filterCount);
      return _react2.default.createElement(
        'div',
        { id: 'groups-menu-container' },
        _react2.default.createElement(
          'div',
          { id: 'groups-menu-top' },
          _react2.default.createElement(
            'div',
            { id: 'groups-menu-header' },
            _react2.default.createElement(
              'span',
              { id: 'groups-menu-title' },
              translate('menu.menu')
            ),
            _react2.default.createElement(_FilterMenuHeader2.default, {
              filterCount: filterCount,
              handleFilterShowHideToggle: this.handleFilterShowHideToggle,
              currentToolName: currentToolName,
              expandFilter: this.state.expandFilter })
          ),
          _react2.default.createElement(_GroupsMenuFilter2.default, {
            filterCount: filterCount,
            currentToolName: currentToolName,
            expandFilter: this.state.expandFilter,
            filters: filters,
            translate: translate,
            setFilter: actions.setFilter })
        ),
        _react2.default.createElement(_Groups2.default, {
          currentToolName: currentToolName,
          isVerseFinished: isVerseFinished,
          getSelections: getSelections,
          translate: translate,
          changeCurrentContextId: actions.changeCurrentContextId,
          getGroupProgress: getGroupProgress,
          isSubMenuExpanded: isSubMenuExpanded,
          groupsIndex: groupsIndex,
          groupsData: groupsData,
          contextId: contextId,
          manifest: manifest,
          projectSaveLocation: projectSaveLocation,
          groupMenuExpandSubMenu: actions.groupMenuExpandSubMenu,
          groupMenuChangeGroup: actions.groupMenuChangeGroup,
          filters: filters })
      );
    }
  }]);

  return GroupMenu;
}(_react2.default.Component);

GroupMenu.propTypes = {
  isVerseFinished: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.func.isRequired,
  toolsReducer: _propTypes2.default.shape({
    currentToolName: _propTypes2.default.string.isRequired
  }),
  groupMenuReducer: _propTypes2.default.shape({
    filters: _propTypes2.default.object.isRequired,
    isSubMenuExpanded: _propTypes2.default.bool.isRequired
  }),
  groupsIndexReducer: _propTypes2.default.shape({
    groupsIndex: _propTypes2.default.array.isRequired
  }),
  groupsDataReducer: _propTypes2.default.shape({
    groupsData: _propTypes2.default.object.isRequired
  }),
  contextIdReducer: _propTypes2.default.shape({
    contextId: _propTypes2.default.object.isRequired
  }),
  projectDetailsReducer: _propTypes2.default.shape({
    projectSaveLocation: _propTypes2.default.string.isRequired
  }),
  actions: _propTypes2.default.shape({
    setFilter: _propTypes2.default.func.isRequired,
    groupMenuChangeGroup: _propTypes2.default.func.isRequired,
    groupMenuExpandSubMenu: _propTypes2.default.func.isRequired
  }),
  getGroupProgress: _propTypes2.default.func.isRequired,
  getSelections: _propTypes2.default.func.isRequired
};
var i = 1;

GroupMenu.defaultProps = {
  getGroupProgress: function getGroupProgress() {
    return 1;
  },
  isVerseFinished: function isVerseFinished() {
    return false;
  },
  getSelections: function getSelections() {
    return 'A selection';
  },
  translate: function translate(key) {
    return key;
  },
  toolsReducer: { currentToolName: 'translationWords' },
  groupMenuReducer: { filters: {}, isSubMenuExpanded: true },
  groupsIndexReducer: {
    groupsIndex: [{
      id: 'apostle',
      name: "apostle, apostles, apostleship"
    }]
  },
  groupsDataReducer: {
    groupsData: {
      apostle: [{
        "priority": 1,
        "comments": false,
        "reminders": false,
        "selections": false,
        "verseEdits": false,
        "contextId": {
          "reference": {
            "bookId": "tit",
            "chapter": 1,
            "verse": 1
          },
          "tool": "translationWords",
          "groupId": "apostle",
          "quote": "ἀπόστολος",
          "strong": ["G06520"],
          "occurrence": 1
        }
      }].concat(_toConsumableArray(Array(50).fill(0).map(function () {
        return {
          "priority": 1,
          "comments": false,
          "reminders": false,
          "selections": false,
          "verseEdits": false,
          "contextId": {
            "reference": {
              "bookId": "tit",
              "chapter": 2,
              "verse": i++
            },
            "tool": "translationWords",
            "groupId": "apostle",
            "quote": "ἀπόστολος",
            "strong": ["G06520"],
            "occurrence": 1
          }
        };
      })))

    }
  },
  contextIdReducer: {
    contextId: {
      "reference": {
        "bookId": "tit",
        "chapter": 2,
        "verse": 14
      },
      "tool": "translationWords",
      "groupId": "apostle",
      "quote": "ἀπόστολος",
      "strong": ["G06520"],
      "occurrence": 1
    }
  },
  projectDetailsReducer: {
    projectSaveLocation: '',
    manifest: {
      "target_language": {
        "id": "bhadrawahi",
        "name": "Bible",
        "direction": "ltr",
        "book": {
          "name": "Titus"
        }
      },
      "project": {
        "id": "tit",
        "name": "Titus"
      }
    }
  },
  actions: {
    setFilter: function setFilter() {},
    groupMenuChangeGroup: function groupMenuChangeGroup() {},
    groupMenuExpandSubMenu: function groupMenuExpandSubMenu() {}
  }
};

exports.default = GroupMenu;

/***/ }),

/***/ 798:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.groupIsVisible = exports.groupItemIsVisible = exports.getFilterCount = undefined;
exports.getGroupData = getGroupData;
exports.scrollIntoView = scrollIntoView;
exports.inView = inView;
exports.getStatusBadges = getStatusBadges;
exports.makeStatusBadgeComponents = makeStatusBadgeComponents;
exports.getGlyphIcons = getGlyphIcons;

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(799);

var _server2 = _interopRequireDefault(_server);

var _reactTooltip = __webpack_require__(768);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _reactBootstrap = __webpack_require__(117);

var _InvalidatedIcon = __webpack_require__(802);

var _InvalidatedIcon2 = _interopRequireDefault(_InvalidatedIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MENU_BAR_HEIGHT = 30;
var MENU_ITEM_HEIGHT = 38;

function getGroupData(groupsData, groupId) {
  var groupData = void 0;
  if (groupsData !== undefined) {
    groupData = groupsData[groupId];
  }
  return groupData;
}

var getFilterCount = exports.getFilterCount = function getFilterCount(filters) {
  return Object.keys(filters).filter(function (k) {
    return filters[k];
  }).length;
};

/**
 * @description - Determines if the item should be navigatable
 * @param {object} groupItemData
 * @returns {boolean}
 */
var groupItemIsVisible = exports.groupItemIsVisible = function groupItemIsVisible(groupItemData, filters) {
  return !getFilterCount(filters) || filters.invalidated && groupItemData.invalidated || filters.reminders && groupItemData.reminders || filters.selections && groupItemData.selections || filters.noSelections && !groupItemData.selections || filters.verseEdits && groupItemData.verseEdits || filters.comments && groupItemData.comments;
};

/**
 * @description - Determines if the group is navigatable based on filters
 * @param {object} groupData
 * @returns {boolean}
 */
var groupIsVisible = exports.groupIsVisible = function groupIsVisible(groupData, filters) {
  if (!getFilterCount(filters)) {
    return true;
  }
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = groupData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var groupItemData = _step.value;

      if (groupItemIsVisible(groupItemData, filters)) {
        return true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return false;
};

function scrollIntoView(_ref) {
  var current = _ref.current;

  if (current && current.scrollIntoView) current.scrollIntoView({ block: 'start', behavior: 'smooth' });
}

/**
* @description - Tests if the the two elements are in the scope of the window (scroll bar)
* The consts MENU_BAR_HEIGHT & MENU_ITEM_HEIGHT are set to account for the static window avialablity
* @param {object} currentGroupMenu - The current group menu header that is extended/actived (i.e. Metaphors)
* @param {object} currentGroupItem - The current group check item that is active (i.e. Luke 1:1)
*/
function inView(_ref2, _ref3) {
  var currentGroupMenu = _ref2.current;
  var currentGroupItem = _ref3.current;

  if (currentGroupMenu && currentGroupItem) {
    var rectGroup = currentGroupMenu.getBoundingClientRect();
    var rectItem = currentGroupItem.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return Math.abs(rectGroup.top - rectItem.top) + MENU_BAR_HEIGHT + MENU_ITEM_HEIGHT <= viewHeight;
  }
}

/**
* @description - gets the status badge component for the group menu row
* @param {object} groupItemData
*/
function getStatusBadges(groupItemData, verseFinished) {
  var glyphs = [];

  if (groupItemData && groupItemData.contextId && groupItemData.contextId.reference) {
    // The below ifs are in order of precedence of the status badges we show
    if (groupItemData.invalidated) glyphs.push('invalidated');
    if (groupItemData.reminders) glyphs.push('bookmark');
    if (groupItemData.selections || verseFinished) glyphs.push('ok');
    if (groupItemData.verseEdits) glyphs.push('pencil');
    if (groupItemData.comments) glyphs.push('comment');
  }

  return makeStatusBadgeComponents(glyphs);
}

/**
 * @description - Takes an array of glyph names, gets their React components and then renders the status badge
 * with the first icon and then a mouse-over tooltip with the rest of the icons and a chip to say how many icons there are.
 * @param {*} glyphs
 */
function makeStatusBadgeComponents(glyphs) {
  var statusGlyphs = getGlyphIcons(glyphs);
  var mainGlyph = statusGlyphs[0];
  if (statusGlyphs.length > 1) {
    var tooltip = _server2.default.renderToString(statusGlyphs);
    return _react2.default.createElement(
      'div',
      { className: 'status-badge-wrapper' },
      _react2.default.createElement(
        'div',
        {
          className: 'status-badge',
          'data-tip': tooltip,
          'data-html': 'true',
          'data-place': 'bottom',
          'data-effect': 'float',
          'data-class': 'status-tooltip',
          'data-delay-hide': '100',
          'data-offset': '{\'bottom\': -5, \'right\': 5}' },
        mainGlyph,
        _react2.default.createElement(
          'div',
          { className: 'badge' },
          statusGlyphs.length
        )
      ),
      _react2.default.createElement(_reactTooltip2.default, null)
    );
  } else {
    return _react2.default.createElement(
      'div',
      { className: 'status-badge-wrapper' },
      _react2.default.createElement(
        'div',
        { className: 'status-badge' },
        mainGlyph
      )
    );
  }
}

/**
 * @description - Takes an array of strings that are glyph names and gets the proper React component to render them
 * @param {*} glyphs
 */
function getGlyphIcons(glyphs) {
  var glyphicons = [];
  if (glyphs && glyphs.length) {
    glyphs.forEach(function (glyph) {
      if (glyph === 'invalidated') {
        glyphicons.push(_react2.default.createElement(
          'div',
          { key: glyph, className: 'glyphicon glyphicon-invalidated' },
          _react2.default.createElement(_InvalidatedIcon2.default, { height: 16, width: 16 })
        ));
      } else {
        var className = 'status-icon-' + glyph;
        glyphicons.push(_react2.default.createElement(_reactBootstrap.Glyphicon, { key: glyph, glyph: glyph, className: className }));
      }
    });
  } else {
    glyphicons.push(_react2.default.createElement('div', { key: 'blank', className: 'glyphicon glyphicon-blank status-icon-blank' }));
  }
  return glyphicons;
}

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/react-dom/server.browser.js'");

/***/ }),

/***/ 802:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InvalidatedIcon = function InvalidatedIcon(props) {
  var styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    path: {
      fill: props.color
    }
  };

  return _react2.default.createElement(
    'svg',
    { style: styles.svg, width: '' + props.width, height: '' + props.height, viewBox: '0 0 475.082 475.082' },
    _react2.default.createElement('path', { style: styles.path, d: 'M107.067,317.195c1.713-1.708,2.568-3.898,2.568-6.563c0-2.663-0.855-4.853-2.568-6.571    c-1.714-1.707-3.905-2.562-6.567-2.562H9.135c-2.666,0-4.853,0.855-6.567,2.562C0.859,305.772,0,307.962,0,310.632    c0,2.665,0.855,4.855,2.568,6.563c1.714,1.711,3.905,2.566,6.567,2.566H100.5C103.166,319.766,105.353,318.91,107.067,317.195z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M310.629,109.634c2.669,0,4.859-0.855,6.563-2.568c1.718-1.711,2.574-3.901,2.574-6.567V9.138    c0-2.659-0.856-4.85-2.574-6.565c-1.704-1.711-3.895-2.57-6.563-2.57c-2.662,0-4.853,0.859-6.563,2.57    c-1.711,1.713-2.566,3.903-2.566,6.565v91.361c0,2.666,0.855,4.856,2.566,6.567C305.784,108.779,307.974,109.634,310.629,109.634z    ' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M118.771,347.184c-2.478,0-4.664,0.855-6.567,2.563l-73.089,73.087c-1.713,1.902-2.568,4.093-2.568,6.567    c0,2.474,0.855,4.664,2.568,6.566c2.096,1.708,4.283,2.57,6.567,2.57c2.475,0,4.665-0.862,6.567-2.57l73.089-73.087    c1.714-1.902,2.568-4.093,2.568-6.57c0-2.471-0.854-4.661-2.568-6.563C123.436,348.039,121.245,347.184,118.771,347.184z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M356.315,127.905c2.283,0,4.473-0.855,6.571-2.565l73.087-73.089c1.707-1.903,2.562-4.093,2.562-6.567    c0-2.475-0.855-4.665-2.562-6.567c-1.91-1.709-4.093-2.568-6.571-2.568c-2.471,0-4.66,0.859-6.563,2.568l-73.087,73.089    c-1.708,1.903-2.57,4.093-2.57,6.567c0,2.474,0.862,4.661,2.57,6.567C351.846,127.05,354.037,127.905,356.315,127.905z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M350.607,193.005c-4-3.999-9.328-7.994-15.988-11.991l-5.14,68.238l78.23,78.508c5.328,5.328,7.987,11.807,7.987,19.417    c0,7.423-2.662,13.802-7.987,19.13l-41.977,41.686c-5.146,5.146-11.608,7.666-19.417,7.566c-7.81-0.1-14.271-2.707-19.411-7.854    l-77.946-78.225l-68.234,5.144c3.999,6.656,7.993,11.988,11.991,15.985l95.362,95.643c15.803,16.18,35.207,24.27,58.238,24.27    c22.846,0,42.154-7.898,57.957-23.695l41.977-41.685c16.173-15.8,24.27-35.115,24.27-57.958c0-22.46-7.994-41.877-23.982-58.248    L350.607,193.005z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M472.518,157.889c-1.711-1.709-3.901-2.565-6.563-2.565h-91.365c-2.662,0-4.853,0.855-6.563,2.565    c-1.715,1.713-2.57,3.903-2.57,6.567c0,2.666,0.855,4.856,2.57,6.567c1.711,1.712,3.901,2.568,6.563,2.568h91.365    c2.662,0,4.853-0.856,6.563-2.568c1.708-1.711,2.563-3.901,2.563-6.567C475.082,161.792,474.226,159.602,472.518,157.889z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M109.348,67.099c5.523-5.14,11.991-7.705,19.417-7.705c7.611,0,14.084,2.663,19.414,7.993l77.943,78.227l68.234-5.142    c-4-6.661-7.99-11.991-11.991-15.987l-95.358-95.643c-15.798-16.178-35.212-24.27-58.242-24.27c-22.841,0-42.16,7.902-57.958,23.7    L28.837,69.955C12.659,85.756,4.57,105.073,4.57,127.912c0,22.463,7.996,41.877,23.982,58.245l95.93,95.93    c3.995,4.001,9.325,7.995,15.986,11.991l5.139-68.521L67.377,147.33c-5.327-5.33-7.992-11.801-7.992-19.417    c0-7.421,2.662-13.796,7.992-19.126L109.348,67.099z' }),
    _react2.default.createElement('path', { style: styles.path, d: 'M164.454,365.451c-2.667,0-4.854,0.855-6.567,2.563c-1.711,1.711-2.568,3.901-2.568,6.57v91.358    c0,2.669,0.854,4.853,2.568,6.57c1.713,1.707,3.9,2.566,6.567,2.566c2.666,0,4.853-0.859,6.567-2.566    c1.713-1.718,2.568-3.901,2.568-6.57v-91.358c0-2.662-0.855-4.853-2.568-6.57C169.306,366.307,167.116,365.451,164.454,365.451z' })
  );
};

InvalidatedIcon.propTypes = {
  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  color: _propTypes2.default.string
};

InvalidatedIcon.defaultProps = {
  width: 18,
  height: 18
};

exports.default = InvalidatedIcon;

/***/ }),

/***/ 803:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Group = __webpack_require__(804);

var _Group2 = _interopRequireDefault(_Group);

var _NoResults = __webpack_require__(809);

var _NoResults2 = _interopRequireDefault(_NoResults);

var _helpers = __webpack_require__(798);

var helpers = _interopRequireWildcard(_helpers);

__webpack_require__(812);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//helpers
var Groups = function Groups(_ref) {
  var changeCurrentContextId = _ref.changeCurrentContextId,
      filters = _ref.filters,
      _ref$groupsIndex = _ref.groupsIndex,
      groupsIndex = _ref$groupsIndex === undefined ? [] : _ref$groupsIndex,
      _ref$groupsData = _ref.groupsData,
      groupsData = _ref$groupsData === undefined ? {} : _ref$groupsData,
      getGroupProgress = _ref.getGroupProgress,
      groupMenuChangeGroup = _ref.groupMenuChangeGroup,
      groupMenuExpandSubMenu = _ref.groupMenuExpandSubMenu,
      isSubMenuExpanded = _ref.isSubMenuExpanded,
      manifest = _ref.manifest,
      contextId = _ref.contextId,
      translate = _ref.translate,
      getSelections = _ref.getSelections,
      isVerseFinished = _ref.isVerseFinished,
      currentToolName = _ref.currentToolName;

  var groupComponents = _react2.default.createElement(_NoResults2.default, { translate: translate });
  groupsIndex = groupsIndex.filter(function (groupIndex) {
    return Object.keys(groupsData).includes(groupIndex.id) && helpers.groupIsVisible(helpers.getGroupData(groupsData, groupIndex.id), filters);
  });
  if (groupsIndex.length) {
    groupComponents = groupsIndex.map(function (groupIndex) {
      var groupId = groupIndex.id;
      var currentGroupData = helpers.getGroupData(groupsData, groupId);
      var active = contextId ? contextId.groupId === groupId : false;
      return _react2.default.createElement(_Group2.default, {
        currentToolName: currentToolName,
        isVerseFinished: isVerseFinished,
        contextId: contextId,
        getSelections: getSelections,
        changeCurrentContextId: changeCurrentContextId,
        manifest: manifest,
        filters: filters,
        groupData: currentGroupData,
        isSubMenuExpanded: isSubMenuExpanded,
        groupIndex: groupIndex,
        active: active,
        key: groupIndex.id,
        progress: getGroupProgress(groupIndex, groupsData),
        groupMenuExpandSubMenu: groupMenuExpandSubMenu,
        openGroup: function openGroup() {
          return groupMenuChangeGroup(currentGroupData[0].contextId);
        }
      });
    });
  }
  return _react2.default.createElement(
    'div',
    { className: 'groups' },
    groupComponents
  );
};

Groups.propTypes = {
  changeCurrentContextId: _propTypes2.default.func.isRequired,
  filters: _propTypes2.default.object.isRequired,
  groupsIndex: _propTypes2.default.array.isRequired,
  groupsData: _propTypes2.default.object.isRequired,
  getGroupProgress: _propTypes2.default.func.isRequired,
  groupMenuChangeGroup: _propTypes2.default.func.isRequired,
  groupMenuExpandSubMenu: _propTypes2.default.func.isRequired,
  isSubMenuExpanded: _propTypes2.default.bool.isRequired,
  manifest: _propTypes2.default.object.isRequired,
  contextId: _propTypes2.default.object.isRequired,
  translate: _propTypes2.default.func.isRequired,
  getSelections: _propTypes2.default.func.isRequired,
  isVerseFinished: _propTypes2.default.func.isRequired,
  currentToolName: _propTypes2.default.string.isRequired
};

exports.default = Groups;

/***/ }),

/***/ 804:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(20);

var _CircularProgress = __webpack_require__(805);

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _reactBootstrap = __webpack_require__(117);

var _GroupItems = __webpack_require__(807);

var _GroupItems2 = _interopRequireDefault(_GroupItems);

var _helpers = __webpack_require__(798);

var helpers = _interopRequireWildcard(_helpers);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

// helpers


var styles = {
  circle: {
    width: 40,
    height: 40
  }
};

var Group = function (_React$Component) {
  _inherits(Group, _React$Component);

  function Group(props) {
    _classCallCheck(this, Group);

    var _this = _possibleConstructorReturn(this, (Group.__proto__ || Object.getPrototypeOf(Group)).call(this, props));

    _this.activeGroupItemRef = _react2.default.createRef();
    _this.currentGroupRef = _react2.default.createRef();
    _this.scrollToCurrentCheck = _this.scrollToCurrentCheck.bind(_this);
    return _this;
  }

  _createClass(Group, [{
    key: 'scrollToCurrentCheck',
    value: function scrollToCurrentCheck() {
      if (helpers.inView(this.currentGroupRef, this.activeGroupItemRef)) {
        //If the menu and current check are able to be rendered in the
        //same window scroll to the group menu item
        helpers.scrollIntoView(this.currentGroupRef);
      } else {
        //Scroll to the current check item
        helpers.scrollIntoView(this.activeGroupItemRef);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.active) this.scrollToCurrentCheck();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.active) this.scrollToCurrentCheck();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          changeCurrentContextId = _props.changeCurrentContextId,
          active = _props.active,
          groupMenuExpandSubMenu = _props.groupMenuExpandSubMenu,
          openGroup = _props.openGroup,
          isSubMenuExpanded = _props.isSubMenuExpanded,
          progress = _props.progress,
          groupIndex = _props.groupIndex,
          groupData = _props.groupData,
          filters = _props.filters,
          manifest = _props.manifest,
          contextId = _props.contextId,
          getSelections = _props.getSelections,
          isVerseFinished = _props.isVerseFinished,
          currentToolName = _props.currentToolName;

      var groupMenuItemHeadingClassName = active ? 'menu-item-heading-current' : 'menu-item-heading-normal';

      var glyphAction = active ? groupMenuExpandSubMenu : openGroup;
      var expandedGlyph = _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'chevron-down', style: { float: 'right', marginTop: '3px' }, onClick: function onClick() {
          return glyphAction(false);
        } });
      var collapsedGlyph = _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'chevron-right', style: { float: 'right', marginTop: '3px' }, onClick: function onClick() {
          return glyphAction(true);
        } });
      var theme = (0, _styles.createMuiTheme)();
      return _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          'div',
          { className: 'group' },
          _react2.default.createElement(
            'div',
            { ref: this.currentGroupRef, className: groupMenuItemHeadingClassName },
            active && isSubMenuExpanded ? expandedGlyph : collapsedGlyph,
            _react2.default.createElement(
              'div',
              { onClick: openGroup },
              _react2.default.createElement(
                'div',
                { style: { position: 'relative', justifyContent: 'center', height: 20, width: 20, display: 'flex', marginRight: '10px', float: 'left' } },
                _react2.default.createElement('div', { style: { height: 20, width: 20, border: 'white solid 3px', borderRadius: '50%' } }),
                _react2.default.createElement(_CircularProgress2.default, {
                  variant: 'static',
                  value: progress * 100,
                  thickness: 10,
                  size: 15,
                  color: 'primary',
                  style: { alignSelf: 'center', position: 'absolute', width: 20, height: 20, color: '#40BDF2' }
                })
              ),
              groupIndex.name
            )
          ),
          active && isSubMenuExpanded ? _react2.default.createElement(_GroupItems2.default, {
            currentToolName: currentToolName,
            isVerseFinished: isVerseFinished,
            getSelections: getSelections,
            changeCurrentContextId: changeCurrentContextId,
            contextId: contextId,
            groupData: groupData,
            activeGroupItemRef: this.activeGroupItemRef,
            filters: filters,
            manifest: manifest }) : null
        )
      );
    }
  }]);

  return Group;
}(_react2.default.Component);

Group.propTypes = {
  manifest: _propTypes2.default.object.isRequired,
  contextId: _propTypes2.default.object.isRequired,
  filters: _propTypes2.default.object.isRequired,
  groupData: _propTypes2.default.array.isRequired,
  isSubMenuExpanded: _propTypes2.default.bool.isRequired,
  groupMenuExpandSubMenu: _propTypes2.default.func.isRequired,
  openGroup: _propTypes2.default.func.isRequired,
  progress: _propTypes2.default.number.isRequired,
  groupIndex: _propTypes2.default.object.isRequired,
  active: _propTypes2.default.bool.isRequired,
  changeCurrentContextId: _propTypes2.default.func.isRequired,
  getSelections: _propTypes2.default.func.isRequired,
  classes: _propTypes2.default.object.isRequired,
  isVerseFinished: _propTypes2.default.func.isRequired,
  currentToolName: _propTypes2.default.string.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Group);

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/jay/Documents/tc-ui-toolkit/node_modules/@material-ui/core/CircularProgress/index.js'");

/***/ }),

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _helpers = __webpack_require__(798);

var helpers = _interopRequireWildcard(_helpers);

var _GroupItem = __webpack_require__(808);

var _GroupItem2 = _interopRequireDefault(_GroupItem);

var _deepEqual = __webpack_require__(515);

var _deepEqual2 = _interopRequireDefault(_deepEqual);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupItems = function GroupItems(_ref) {
  var changeCurrentContextId = _ref.changeCurrentContextId,
      groupData = _ref.groupData,
      activeGroupItemRef = _ref.activeGroupItemRef,
      filters = _ref.filters,
      manifest = _ref.manifest,
      contextId = _ref.contextId,
      isVerseFinished = _ref.isVerseFinished,
      currentToolName = _ref.currentToolName,
      getSelections = _ref.getSelections;

  var items = [];
  var index = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = groupData[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var groupItemData = _step.value;

      if (!helpers.groupItemIsVisible(groupItemData, filters)) {
        continue;
      }

      var active = (0, _deepEqual2.default)(groupItemData.contextId, contextId);
      var useTargetLanguageBookName = manifest.target_language && manifest.target_language.book && manifest.target_language.book.name;
      var bookName = useTargetLanguageBookName ? manifest.target_language.book.name : manifest.project.name;
      var _groupItemData$contex = groupItemData.contextId.reference,
          chapter = _groupItemData$contex.chapter,
          verse = _groupItemData$contex.verse;

      items.push(_react2.default.createElement(_GroupItem2.default, {
        contextId: groupItemData.contextId,
        changeCurrentContextId: changeCurrentContextId,
        key: index,
        statusBadge: helpers.getStatusBadges(groupItemData, isVerseFinished(chapter, verse), currentToolName),
        activeGroupItemRef: active ? activeGroupItemRef : null,
        active: active,
        bookName: bookName,
        selectionText: getSelections(groupItemData.contextId)
      }));
      index++;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return items;
};

exports.default = GroupItems;

/***/ }),

/***/ 808:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactTooltip = __webpack_require__(768);

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupItem = function (_React$Component) {
  _inherits(GroupItem, _React$Component);

  function GroupItem() {
    _classCallCheck(this, GroupItem);

    return _possibleConstructorReturn(this, (GroupItem.__proto__ || Object.getPrototypeOf(GroupItem)).apply(this, arguments));
  }

  _createClass(GroupItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          changeCurrentContextId = _props.changeCurrentContextId,
          contextId = _props.contextId,
          active = _props.active,
          statusBadge = _props.statusBadge,
          selectionText = _props.selectionText,
          bookName = _props.bookName,
          activeGroupItemRef = _props.activeGroupItemRef;
      var reference = contextId.reference;

      return _react2.default.createElement(
        'div',
        { ref: activeGroupItemRef, onClick: function onClick() {
            return changeCurrentContextId(contextId);
          },
          className: "group-item" + (active ? " active active-submenu-item" : " submenu-item") },
        statusBadge,
        _react2.default.createElement(
          'span',
          {
            className: 'selection',
            'data-tip': selectionText,
            'data-place': 'bottom',
            'data-effect': 'float',
            'data-type': 'dark',
            'data-class': 'selection-tooltip',
            'data-delay-hide': '100' },
          reference.chapterVerseMenu ? _react2.default.createElement(
            'span',
            { className: 'group-item-text' },
            reference.text + ' ' + reference.verse
          ) : _react2.default.createElement(
            'span',
            { className: 'group-item-text' },
            " " + bookName + " " + reference.chapter + ":" + reference.verse + " " + selectionText
          )
        ),
        _react2.default.createElement(_reactTooltip2.default, null)
      );
    }
  }]);

  return GroupItem;
}(_react2.default.Component);

GroupItem.propTypes = {
  bookName: _propTypes2.default.string.isRequired,
  selectionText: _propTypes2.default.string.isRequired,
  contextId: _propTypes2.default.object.isRequired,
  changeCurrentContextId: _propTypes2.default.func.isRequired,
  statusBadge: _propTypes2.default.object.isRequired,
  active: _propTypes2.default.bool.isRequired,
  groupMenuHeader: _propTypes2.default.object,
  activeGroupItemRef: _propTypes2.default.object.isRequired
};

exports.default = GroupItem;

/***/ }),

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(810);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoResults = function NoResults(_ref) {
  var translate = _ref.translate;
  return _react2.default.createElement(
    'div',
    { className: 'no-results' },
    translate('menu.no_results')
  );
};

NoResults.propTypes = {
  translate: _propTypes2.default.func.isRequired
};

exports.default = NoResults;

/***/ }),

/***/ 810:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(811);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, ".no-results {\n  font-style: italic;\n  font-size: 16px;\n  padding: 15px;\n  color: var(--reverse-color);\n}", ""]);

// exports


/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(813);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports


// module
exports.push([module.i, ".groups {\n  overflow-y: scroll;\n}", ""]);

// exports


/***/ }),

/***/ 814:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = __webpack_require__(117);

var _FilterBadge = __webpack_require__(815);

var _FilterBadge2 = _interopRequireDefault(_FilterBadge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterMenuHeader = function FilterMenuHeader(_ref) {
  var currentToolName = _ref.currentToolName,
      expandFilter = _ref.expandFilter,
      handleFilterShowHideToggle = _ref.handleFilterShowHideToggle,
      filterCount = _ref.filterCount;

  return currentToolName === "translationWords" && _react2.default.createElement(
    'div',
    { className: 'filter-toggle' },
    _react2.default.createElement(_reactBootstrap.Glyphicon, {
      key: 'filter',
      glyph: 'filter',
      className: 'filter-icon ' + (expandFilter ? 'expanded' : 'collapsed'),
      onClick: handleFilterShowHideToggle }),
    _react2.default.createElement(_FilterBadge2.default, {
      handleFilterShowHideToggle: handleFilterShowHideToggle,
      filterCount: filterCount,
      expandFilter: expandFilter })
  );
};

exports.default = FilterMenuHeader;

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterBadge = function FilterBadge(_ref) {
  var expandFilter = _ref.expandFilter,
      filterCount = _ref.filterCount,
      handleFilterShowHideToggle = _ref.handleFilterShowHideToggle;

  return !expandFilter && filterCount ? _react2.default.createElement(
    'span',
    { className: 'filter-badge badge', onClick: handleFilterShowHideToggle },
    filterCount
  ) : null;
};

FilterBadge.propTypes = {
  expandFilter: _propTypes2.default.bool.isRequired,
  filterCount: _propTypes2.default.number.isRequired,
  handleFilterShowHideToggle: _propTypes2.default.func.isRequired
};

exports.default = FilterBadge;

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ExpandedFilter = __webpack_require__(817);

var _ExpandedFilter2 = _interopRequireDefault(_ExpandedFilter);

var _CollapsedFilter = __webpack_require__(819);

var _CollapsedFilter2 = _interopRequireDefault(_CollapsedFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupsMenuFilter = function GroupsMenuFilter(_ref) {
  var currentToolName = _ref.currentToolName,
      filters = _ref.filters,
      translate = _ref.translate,
      expandFilter = _ref.expandFilter,
      setFilter = _ref.setFilter,
      filterCount = _ref.filterCount;

  if (currentToolName === "translationWords" && (expandFilter || filterCount)) {
    if (expandFilter) {
      return _react2.default.createElement(_ExpandedFilter2.default, {
        filters: filters,
        setFilter: setFilter,
        translate: translate });
    } else {
      return _react2.default.createElement(_CollapsedFilter2.default, {
        filters: filters,
        setFilter: setFilter,
        translate: translate
      });
    }
  } else return null;
};

GroupsMenuFilter.defaultProps = {
  expandFilter: false
};

GroupsMenuFilter.propTypes = {
  translate: _propTypes2.default.func.isRequired,
  filters: _propTypes2.default.object.isRequired,
  setFilter: _propTypes2.default.func,
  expandFilter: _propTypes2.default.bool
};

exports.default = GroupsMenuFilter;

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupsMenuFilterOption = __webpack_require__(818);

var _GroupsMenuFilterOption2 = _interopRequireDefault(_GroupsMenuFilterOption);

var _InvalidatedIcon = __webpack_require__(802);

var _InvalidatedIcon2 = _interopRequireDefault(_InvalidatedIcon);

var _reactBootstrap = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandedFilter = function ExpandedFilter(_ref) {
  var filters = _ref.filters,
      setFilter = _ref.setFilter,
      translate = _ref.translate;

  var options = [];

  options.push(_react2.default.createElement(_GroupsMenuFilterOption2.default, {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: 'invalidated',
    name: 'invalidated',
    checked: filters.invalidated,
    setFilter: setFilter,
    icon: _react2.default.createElement(_InvalidatedIcon2.default, { width: 16, height: 16, color: '#fff' }),
    text: translate('menu.invalidated') }));

  options.push(_react2.default.createElement(_GroupsMenuFilterOption2.default, {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: 'reminders',
    name: 'reminders',
    checked: filters.reminders,
    setFilter: setFilter,
    icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'bookmark' }),
    text: translate('menu.bookmarks') }));

  options.push(_react2.default.createElement(_GroupsMenuFilterOption2.default, {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: 'selections',
    name: 'selections',
    checked: filters.selections,
    disabled: filters.noSelections,
    setFilter: setFilter,
    icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ok' }),
    text: translate('menu.selected') }));

  options.push(_react2.default.createElement(_GroupsMenuFilterOption2.default, {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: 'noSelections',
    name: 'noSelections',
    checked: filters.noSelections,
    disabled: filters.selections,
    setFilter: setFilter,
    icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'ban-circle' }),
    text: translate('menu.no_selection') }));

  options.push(_react2.default.createElement(_GroupsMenuFilterOption2.default, {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: 'verseEdits',
    name: 'verseEdits',
    checked: filters.verseEdits,
    setFilter: setFilter,
    icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'pencil' }),
    text: translate('menu.verse_edit') }));

  options.push(_react2.default.createElement(_GroupsMenuFilterOption2.default, {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: 'comments',
    name: 'comments',
    checked: filters.comments,
    setFilter: setFilter,
    icon: _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'comment' }),
    text: translate('menu.comments') }));

  return _react2.default.createElement(
    'div',
    { id: 'groups-menu-filter', className: 'options-wrapper' },
    options
  );
};

ExpandedFilter.propTypes = {
  filters: _propTypes2.default.object.isRequired,
  setFilter: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = ExpandedFilter;

/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupsMenuFilterOption = function GroupsMenuFilterOption(_ref) {
  var name = _ref.name,
      text = _ref.text,
      icon = _ref.icon,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onCheck = _ref.onCheck;
  return _react2.default.createElement(
    'label',
    { className: "option" + (disabled ? " disabled" : "") },
    _react2.default.createElement(
      'span',
      { className: 'option-checkbox' },
      _react2.default.createElement('input', { type: 'checkbox', name: name, checked: checked, disabled: disabled, onChange: function onChange(_ref2) {
          var value = _ref2.target;
          return onCheck(name, value.checked);
        } })
    ),
    _react2.default.createElement(
      'span',
      { className: 'option-icon' },
      icon
    ),
    _react2.default.createElement(
      'span',
      { className: 'option-text' },
      text
    )
  );
};

GroupsMenuFilterOption.defaultProps = {
  checked: false,
  disabled: false
};

GroupsMenuFilterOption.propTypes = {
  name: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired,
  icon: _propTypes2.default.object.isRequired,
  setFilter: _propTypes2.default.func.isRequired,
  checked: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  onCheck: _propTypes2.default.func.isRequired
};

exports.default = GroupsMenuFilterOption;

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _GroupsMenuFilterBubble = __webpack_require__(820);

var _GroupsMenuFilterBubble2 = _interopRequireDefault(_GroupsMenuFilterBubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CollapsedFilter = function CollapsedFilter(_ref) {
  var translate = _ref.translate,
      filters = _ref.filters,
      setFilter = _ref.setFilter;

  var bubbles = [];

  if (filters.invalidated) {
    bubbles.push(_react2.default.createElement(_GroupsMenuFilterBubble2.default, {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: 'invalidated',
      name: 'invalidated',
      text: translate('menu.invalidated') }));
  }

  if (filters.reminders) {
    bubbles.push(_react2.default.createElement(_GroupsMenuFilterBubble2.default, {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: 'reminders',
      name: 'reminders',
      text: translate('menu.bookmarks') }));
  }

  if (filters.selections) {
    bubbles.push(_react2.default.createElement(_GroupsMenuFilterBubble2.default, {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: 'selections',
      name: 'selections',
      text: translate('menu.selected') }));
  }

  if (filters.noSelections) {
    bubbles.push(_react2.default.createElement(_GroupsMenuFilterBubble2.default, {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: 'noSelections',
      name: 'noSelections',
      text: translate('menu.no_selection') }));
  }

  if (filters.verseEdits) {
    bubbles.push(_react2.default.createElement(_GroupsMenuFilterBubble2.default, {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: 'verseEdits',
      name: 'verseEdits',
      text: translate('menu.verse_edit') }));
  }

  if (filters.comments) {
    bubbles.push(_react2.default.createElement(_GroupsMenuFilterBubble2.default, {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: 'comments',
      name: 'comments',
      text: translate('menu.comments'),
      setFilter: setFilter }));
  }

  return _react2.default.createElement(
    'div',
    { id: 'groups-menu-filter', className: 'bubbles-wrapper' },
    bubbles
  );
};

CollapsedFilter.propTypes = {
  filters: _propTypes2.default.object.isRequired,
  setFilter: _propTypes2.default.func.isRequired,
  translate: _propTypes2.default.func.isRequired
};

exports.default = CollapsedFilter;

/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = __webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupsMenuFilterBubble = function GroupsMenuFilterBubble(_ref) {
  var onPress = _ref.onPress,
      text = _ref.text,
      name = _ref.name;
  return _react2.default.createElement(
    'span',
    { className: 'filter-bubble-wrapper' },
    _react2.default.createElement(
      'span',
      { className: 'filter-bubble' },
      _react2.default.createElement(_reactBootstrap.Glyphicon, { className: 'filter-remove', glyph: 'remove', onClick: function onClick() {
          return onPress(name);
        } }),
      _react2.default.createElement(
        'span',
        { className: 'filter-text' },
        text
      )
    )
  );
};

GroupsMenuFilterBubble.propTypes = {
  onPress: _propTypes2.default.func.isRequired,
  name: _propTypes2.default.string.isRequired,
  text: _propTypes2.default.string.isRequired
};

exports.default = GroupsMenuFilterBubble;

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(822);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(16)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// imports
exports.i(__webpack_require__(15), "");

// module
exports.push([module.i, "#groups-menu-container  {\n  flex-direction: column;\n  background-color: var(--background-color-dark);\n  font-size: 12px;\n  max-width: 250px;\n  width: 100%;\n  display: flex;\n}\n\n#groups-menu-container .group .group-item .status-badge {\n  position: relative;\n  margin: 0 10px 0 20px;\n}\n\n#groups-menu-container .group .group-item .status-badge .glyphicon {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n#groups-menu-container .group .group-item .status-badge .glyphicon svg {\n  width: 16px !important;\n  height: 16px !important;\n  fill: var(--reverse-color) !important;\n}\n\n#groups-menu-container .group .group-item .status-badge .badge {\n  position: absolute;\n  top: -4px;\n  right: -5px;\n  font-size: 6px;\n  color: var(--background-color); /* to give the text a transparent look */\n  border: solid 1px var(--background-color); /* to give the text a transparent look */\n  background-color: var(--reverse-color);\n  padding: 2px 3px;\n  margin: 0;\n}\n\n#groups-menu-container .group .group-item.active .status-badge .badge {\n  color: var(--accent-color);\n  border: solid 1px var(--accent-color);\n}\n\n#groups-menu-container .group .group-item .status-tooltip {\n  padding: 8px 0 8px 8px !important;\n}\n\n#groups-menu-container .group .group-item .status-tooltip .glyphicon {\n  padding: 0 !important;\n  padding-right: 8px !important;\n  color: var(--text-color-dark) !important;\n  font-size: 16px;\n}\n\n#groups-menu-container .group .group-item .status-tooltip .glyphicon svg {\n  fill: var(--text-color-dark) !important;\n}\n\n#groups-menu-container .group .group-item .status-tooltip .glyphicon-invalidated svg {\n  height: 18px !important;\n  width: 18px !important;\n  margin-bottom: 5px;\n}\n\n#groups-menu-container .group .group-item .status-tooltip {\n  background-color: var(--background-color-light);\n}\n\n#groups-menu-container .group .group-item .status-tooltip.place-right:after {\n  border-right-color: var(--background-color-light);\n}\n\n#groups-menu-container .group .group-item .status-tooltip.place-bottom:after {\n  border-bottom-color: var(--background-color-light);\n}\n\n#groups-menu-container #groups-menu-top {\n  color: var(--reverse-color);\n  background-color: var(--accent-color-dark);\n  width: calc(100% - 12px);\n  padding: 5px 0;\n  z-index: 10;\n}\n\n#groups-menu-container #groups-menu-header {\n  background-color: var(--accent-color-dark);\n  margin: 3px;\n  padding: 0 5px;\n  line-height: 40px;\n  font-size: 16px;\n  font-weight: bold;\n}\n\n#groups-menu-container #groups-menu-title {\n  padding-left: 10px;\n}\n\n#groups-menu-top .filter-toggle {\n  position: relative;\n  float: right;\n  cursor: pointer;\n}\n\n#groups-menu-header .filter-icon {\n  padding: 6px;\n}\n\n#groups-menu-header .filter-icon.expanded {\n  background-color: var(--reverse-color);\n  color: var(--accent-color-dark);\n  border-radius: 50%;\n}\n\n#groups-menu-header .filter-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background-color: #933;\n  padding: 2px 4px;\n  margin: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n\n#groups-menu-filter {\n  margin: 0 15px;\n  font-size: 14px;\n  border-top: 1px solid var(--reverse-color);\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\n#groups-menu-filter .option.disabled {\n  color: var(--text-color-light);\n}\n\n#groups-menu-filter .option span {\n  margin: 0 5px;\n}\n\n#groups-menu-filter .option .option-icon svg {\n  margin: 0 5px 5px 5px;\n}\n\n#groups-menu-container #groups {\n  overflow-y: scroll;\n}\n\n#groups-menu-filter.bubbles-wrapper {\n  display: grid;\n  grid-template-columns: auto 1fr;\n}\n\n#groups-menu-filter .filter-bubble {\n  color: var(--accent-color-dark);\n  background-color: var(--reverse-color);\n  margin: 2px;\n  display: inline-block;\n  border-radius: 15px;\n  padding: 2px 5px;\n  font-weight: bold;\n  font-size: 12px;\n}\n\n#groups-menu-filter .filter-bubble .filter-remove {\n  cursor: pointer;\n}\n\n#groups-menu-filter .filter-bubble .filter-remove:before {\n  padding-right: 3px;\n}\n\n#groups-menu-filter .filter-bubble .filter-text {\n  vertical-align: text-bottom;\n}\n\n\n.menu-item-heading-normal {\n  display: block;\n  padding-top: 7px;\n  padding-right: 5px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--background-color);\n  font-weight: normal;\n  color: var(--reverse-color);\n}\n\n.menu-item-heading-current {\n  display: block;\n  padding-top: 7px;\n  padding-right: 5px;\n  padding-bottom: 10px;\n  padding-left: 15px;\n  cursor: pointer;\n  border-bottom: 1px solid var(--background-color);\n  background-color: var(--accent-color);\n  font-weight: bold;\n  color: var(--reverse-color)\n}\n\n\n.status-icon-ok {\n  color: var(--completed-color);\n  display: initial;\n}\n\n.status-icon-comment {\n  color: var(--highlight-color);\n  display: initial;\n}\n\n.status-icon-pencil {\n  color: var(--reverse-color);\n  display: initial;\n}\n\n.status-icon-flagged {\n  color: var(--highlight-color);\n  display: initial;\n}\n\n.status-icon-unchecked {\n  display: none;\n}\n.status-icon-bookmark {\n  color: var(--reverse-color);\n  display: initial;\n}\n\n.status-icon-invalidated {\n  display: initial;\n  height: 16px;\n  width: 16px;\n}\n\n.status-icon-blank {\n  display: initial;\n  color: none;\n  padding-left: 15px;\n}\n\n.active-submenu-item {\n  height: 38;\n  align-items: center;\n  display: flex;\n  padding: 10px 0;\n  cursor: pointer;\n  border-bottom: 1px solid var(--background-color-dark);\n  color: var(--reverse-color);\n  background-color: var(--accent-color);\n  z-index: 1;\n}\n\n.submenu-item {\n  height: 38;\n  align-items: center;\n  display: flex;\n  padding: 10px 0;\n  cursor: pointer;\n  border-bottom: 1px solid var(--background-color-dark);\n  color: var(--reverse-color);\n  background-color: var(--background-color);\n}\n\n.group-item-text {\n  text-overflow: ellipsis;\n  padding: 0px 20px 0px 0px;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.slide-button {\n  float: right;\n  margin-top: 50vh;\n  z-index: 999;\n  color: var(--reverse-color);\n  background-color: var(--text-color-dark);\n  padding: 10px 0;\n  margin-right: -15px;\n  border-radius: 0 5px 5px 0;\n}\n\n.slide-button-collapsed {\n  float: left;\n  margin-top: 50vh;\n  z-index: 999;\n  color: var(--reverse-color);\n  background-color: var(--text-color-dark);\n  padding: 10px 0;\n  margin-right: -15px;\n  border-radius: 0 5px 5px 0;\n}", ""]);

// exports


/***/ })

/******/ });