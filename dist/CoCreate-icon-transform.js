(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["iconTransform"] = factory();
	else
		root["CoCreate"] = root["CoCreate"] || {}, root["CoCreate"]["iconTransform"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../CoCreate-components/CoCreate-icon-transform/src/CoCreate-icon-transform.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoCreate-components/CoCreate-icon-transform/src/CoCreate-icon-transform.js":
/*!*************************************************************************************!*\
  !*** ../CoCreate-components/CoCreate-icon-transform/src/CoCreate-icon-transform.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*!\n* https://cocreate.app\n* https://github.com/CoCreate-app/Icon_Transform\n* Released under the MIT license\n* https://github.com/CoCreate-app/Icon_Transform/blob/master/LICENSE\n//*/\n//var list_icon_transform = document.querySelectorAll(\"i[data-transform_to]\")\n//for (var icon of list_icon_transform) {\n//     icon.addEventListener(\"click\", function(e) {\n// \t\tif(typeof this.dataset.transform_to != 'undefined'){\n// \t\t\tvar transform_to = this.dataset.transform_to;\n// \t\t\tvar class_name = this.className;\n// \t\t\tthis.className = transform_to;\n// \t\t\tthis.dataset.transform_to = class_name;\n// \t\t}\n// \t\te.preventDefault();\n//     });\n//}\ndocument.addEventListener('click', function (e) {\n  iconTransform(e.target);\n  e.preventDefault();\n});\n\nfunction iconTransform(element) {\n  if (element && element.getAttribute('data-transform_to')) {\n    var t_icon = element.tagName == \"I\" ? element : element.querySelector('i');\n\n    if (element.tagName != \"I\" && typeof t_icon.dataset.transform_to == 'undefined') {\n      t_icon.dataset.transform_to = element.getAttribute('data-transform_to');\n    }\n\n    if (typeof t_icon.dataset.transform_to != 'undefined') {\n      var transform_to = t_icon.dataset.transform_to;\n      var class_name = t_icon.className;\n      t_icon.className = transform_to;\n      t_icon.dataset.transform_to = class_name;\n    }\n  }\n}\n\nvar CoCreateIconTransform = {\n  iconTransform: iconTransform\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoCreateIconTransform);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Db0NyZWF0ZS5pY29uVHJhbnNmb3JtLy4uL0NvQ3JlYXRlLWNvbXBvbmVudHMvQ29DcmVhdGUtaWNvbi10cmFuc2Zvcm0vc3JjL0NvQ3JlYXRlLWljb24tdHJhbnNmb3JtLmpzP2Y4YTkiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImljb25UcmFuc2Zvcm0iLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImVsZW1lbnQiLCJnZXRBdHRyaWJ1dGUiLCJ0X2ljb24iLCJ0YWdOYW1lIiwicXVlcnlTZWxlY3RvciIsImRhdGFzZXQiLCJ0cmFuc2Zvcm1fdG8iLCJjbGFzc19uYW1lIiwiY2xhc3NOYW1lIiwiQ29DcmVhdGVJY29uVHJhbnNmb3JtIl0sIm1hcHBpbmdzIjoiQUFBQztBQUFBO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVEQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQVNDLENBQVQsRUFBWTtBQUM5Q0MsZUFBYSxDQUFDRCxDQUFDLENBQUNFLE1BQUgsQ0FBYjtBQUNBRixHQUFDLENBQUNHLGNBQUY7QUFDQSxDQUhEOztBQUtBLFNBQVNGLGFBQVQsQ0FBdUJHLE9BQXZCLEVBQStCO0FBQzlCLE1BQUlBLE9BQU8sSUFBS0EsT0FBTyxDQUFDQyxZQUFSLENBQXFCLG1CQUFyQixDQUFoQixFQUEyRDtBQUUxRCxRQUFJQyxNQUFNLEdBQUlGLE9BQU8sQ0FBQ0csT0FBUixJQUFtQixHQUFwQixHQUEyQkgsT0FBM0IsR0FBcUNBLE9BQU8sQ0FBQ0ksYUFBUixDQUFzQixHQUF0QixDQUFsRDs7QUFFQSxRQUFHSixPQUFPLENBQUNHLE9BQVIsSUFBbUIsR0FBbkIsSUFBMEIsT0FBT0QsTUFBTSxDQUFDRyxPQUFQLENBQWVDLFlBQXRCLElBQXNDLFdBQW5FLEVBQStFO0FBQzlFSixZQUFNLENBQUNHLE9BQVAsQ0FBZUMsWUFBZixHQUE4Qk4sT0FBTyxDQUFDQyxZQUFSLENBQXFCLG1CQUFyQixDQUE5QjtBQUNBOztBQUVELFFBQUcsT0FBT0MsTUFBTSxDQUFDRyxPQUFQLENBQWVDLFlBQXRCLElBQXNDLFdBQXpDLEVBQXFEO0FBQ3BELFVBQUlBLFlBQVksR0FBR0osTUFBTSxDQUFDRyxPQUFQLENBQWVDLFlBQWxDO0FBQ0EsVUFBSUMsVUFBVSxHQUFHTCxNQUFNLENBQUNNLFNBQXhCO0FBQ0FOLFlBQU0sQ0FBQ00sU0FBUCxHQUFtQkYsWUFBbkI7QUFDQUosWUFBTSxDQUFDRyxPQUFQLENBQWVDLFlBQWYsR0FBOEJDLFVBQTlCO0FBQ0E7QUFFRDtBQUNEOztBQUVELElBQU1FLHFCQUFxQixHQUFHO0FBQUVaLGVBQWEsRUFBYkE7QUFBRixDQUE5QjtBQUNlWSxvRkFBZiIsImZpbGUiOiIuLi9Db0NyZWF0ZS1jb21wb25lbnRzL0NvQ3JlYXRlLWljb24tdHJhbnNmb3JtL3NyYy9Db0NyZWF0ZS1pY29uLXRyYW5zZm9ybS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlx0LyohXG4gKiBodHRwczovL2NvY3JlYXRlLmFwcFxuICogaHR0cHM6Ly9naXRodWIuY29tL0NvQ3JlYXRlLWFwcC9JY29uX1RyYW5zZm9ybVxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwczovL2dpdGh1Yi5jb20vQ29DcmVhdGUtYXBwL0ljb25fVHJhbnNmb3JtL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAvLyovXHRcblxuIC8vdmFyIGxpc3RfaWNvbl90cmFuc2Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaVtkYXRhLXRyYW5zZm9ybV90b11cIilcbiAvL2ZvciAodmFyIGljb24gb2YgbGlzdF9pY29uX3RyYW5zZm9ybSkge1xuIC8vICAgICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG5cdC8vIFx0XHRpZih0eXBlb2YgdGhpcy5kYXRhc2V0LnRyYW5zZm9ybV90byAhPSAndW5kZWZpbmVkJyl7XG5cdC8vIFx0XHRcdHZhciB0cmFuc2Zvcm1fdG8gPSB0aGlzLmRhdGFzZXQudHJhbnNmb3JtX3RvO1xuXHQvLyBcdFx0XHR2YXIgY2xhc3NfbmFtZSA9IHRoaXMuY2xhc3NOYW1lO1xuXHQvLyBcdFx0XHR0aGlzLmNsYXNzTmFtZSA9IHRyYW5zZm9ybV90bztcblx0Ly8gXHRcdFx0dGhpcy5kYXRhc2V0LnRyYW5zZm9ybV90byA9IGNsYXNzX25hbWU7XG5cdC8vIFx0XHR9XG5cdC8vIFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG4gLy8gICAgIH0pO1xuIC8vfVxuIFxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdGljb25UcmFuc2Zvcm0oZS50YXJnZXQpXG5cdGUucHJldmVudERlZmF1bHQoKTtcbn0pXG5cbmZ1bmN0aW9uIGljb25UcmFuc2Zvcm0oZWxlbWVudCl7XG5cdGlmIChlbGVtZW50ICAmJiBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10cmFuc2Zvcm1fdG8nKSkge1xuXHRcblx0XHRsZXQgdF9pY29uID0gKGVsZW1lbnQudGFnTmFtZSA9PSBcIklcIikgPyBlbGVtZW50IDogZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpJyk7XG5cdFxuXHRcdGlmKGVsZW1lbnQudGFnTmFtZSAhPSBcIklcIiAmJiB0eXBlb2YgdF9pY29uLmRhdGFzZXQudHJhbnNmb3JtX3RvID09ICd1bmRlZmluZWQnKXtcblx0XHRcdHRfaWNvbi5kYXRhc2V0LnRyYW5zZm9ybV90byA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRyYW5zZm9ybV90bycpXG5cdFx0fVxuXHRcdFx0XG5cdFx0aWYodHlwZW9mIHRfaWNvbi5kYXRhc2V0LnRyYW5zZm9ybV90byAhPSAndW5kZWZpbmVkJyl7XG5cdFx0XHR2YXIgdHJhbnNmb3JtX3RvID0gdF9pY29uLmRhdGFzZXQudHJhbnNmb3JtX3RvO1xuXHRcdFx0dmFyIGNsYXNzX25hbWUgPSB0X2ljb24uY2xhc3NOYW1lO1xuXHRcdFx0dF9pY29uLmNsYXNzTmFtZSA9IHRyYW5zZm9ybV90bztcblx0XHRcdHRfaWNvbi5kYXRhc2V0LnRyYW5zZm9ybV90byA9IGNsYXNzX25hbWU7XG5cdFx0fVxuXHRcdFxuXHR9XG59XG5cbmNvbnN0IENvQ3JlYXRlSWNvblRyYW5zZm9ybSA9IHsgaWNvblRyYW5zZm9ybSB9O1xuZXhwb3J0IGRlZmF1bHQgQ29DcmVhdGVJY29uVHJhbnNmb3JtOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../CoCreate-components/CoCreate-icon-transform/src/CoCreate-icon-transform.js\n");

/***/ })

/******/ })["default"];
});