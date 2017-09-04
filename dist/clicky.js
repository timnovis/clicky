(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Clicky", [], factory);
	else if(typeof exports === 'object')
		exports["Clicky"] = factory();
	else
		root["Clicky"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function Clicky() {
  var _this = this;

  // Default options. Can be overridden using the setOptions method
  this.options = {
    localStorageName: '_ClickyClickCounter',
    threshold: 5,
    callback: function callback() {
      console.log('Clicky threshold reached');
    }

    // Allows user/developer to override the default options
  };this.setOptions = function (object) {
    _this.options = _extends({}, _this.options, object);
  };

  // Return current click count
  this.clickCount = function () {
    return parseInt(localStorage.getItem(_this.options.localStorageName), 10);
  };

  // Return the set threshold
  this.threshold = function () {
    return parseInt(_this.options.threshold, 10);
  };

  // Increment the click count
  this.incrementClickCount = function () {
    var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    localStorage.setItem(_this.options.localStorageName, _this.clickCount() + n);
  };

  // Reset the click count
  this.reset = function () {
    Object.keys(localStorage).forEach(function (item) {
      if (item.indexOf(_this.options.localStorageName) > -1) {
        localStorage.removeItem(item);
      }
    });
  };

  document.addEventListener('click', function () {
    if (isNaN(_this.clickCount())) {
      // If localstorage item is not there, add it
      localStorage.setItem(_this.options.localStorageName, 1);
    } else if (_this.clickCount() === _this.threshold() - 1) {
      // If threshold has been reached, invoke callback + inc
      _this.incrementClickCount();
      _this.options.callback();
    } else {
      _this.incrementClickCount();
    }
  });
}

module.exports = Clicky;

/***/ })
/******/ ]);
});