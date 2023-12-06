/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"about":"about","yourComponent":"yourComponent"}[chunkId]||chunkId) + "." + {"about":"81a2e7f6","chunk-25793009":"acce4ac2","chunk-68e8a80c":"553f4c05","chunk-71a009c6":"9bf33e8b","chunk-7a65e17d":"775f6372","chunk-a86754ee":"9aa051ea","yourComponent":"b29504a2"}[chunkId] + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"about":1,"chunk-25793009":1,"chunk-68e8a80c":1,"chunk-71a009c6":1,"chunk-7a65e17d":1,"chunk-a86754ee":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({"about":"about","yourComponent":"yourComponent"}[chunkId]||chunkId) + "." + {"about":"bdccfda5","chunk-25793009":"8cfc9c29","chunk-68e8a80c":"6ea5f2fe","chunk-71a009c6":"6531dd85","chunk-7a65e17d":"9acdd83f","chunk-a86754ee":"b9b12c8a","yourComponent":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("56d7");


/***/ }),

/***/ "02a9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "0950":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Zhexian_vue_vue_type_style_index_0_id_062971a0_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("61cc");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Zhexian_vue_vue_type_style_index_0_id_062971a0_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Zhexian_vue_vue_type_style_index_0_id_062971a0_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "151b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "166b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuoZhexianTu_vue_vue_type_style_index_0_id_14d185af_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("66f6");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuoZhexianTu_vue_vue_type_style_index_0_id_14d185af_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuoZhexianTu_vue_vue_type_style_index_0_id_14d185af_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "1c62":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/60x80.604362d6.png";

/***/ }),

/***/ "2b45":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2b98":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeiDa_vue_vue_type_style_index_0_id_ea64da9e_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a199");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeiDa_vue_vue_type_style_index_0_id_ea64da9e_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeiDa_vue_vue_type_style_index_0_id_ea64da9e_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "309c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "325e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3375":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "3c7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeiFenHuan_vue_vue_type_style_index_0_id_8fb8344c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("02a9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeiFenHuan_vue_vue_type_style_index_0_id_8fb8344c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DeiFenHuan_vue_vue_type_style_index_0_id_8fb8344c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "3f07":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLineArea_vue_vue_type_style_index_0_id_312e929c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2b45");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLineArea_vue_vue_type_style_index_0_id_312e929c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartLineArea_vue_vue_type_style_index_0_id_312e929c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "445b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "512ce":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "54f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "56d7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=b4c92516
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "main",
    class: _vm.notFound ? '' : 'nomargin'
  }, [_c('router-view')], 1), _c('div', {
    staticClass: "footer"
  })]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=b4c92516

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__("14d9");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js

// import Nav from './components/Nav.vue';
// 屏幕自适应
(function (doc, win) {
  setRem();
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      setRem();
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  // doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
function setRem() {
  var docEl = document.documentElement;
  var clientWidth = docEl.clientWidth;
  if (!clientWidth) {
    return;
  }
  docEl.style.fontSize = 20 * (clientWidth / 1920) + 'px';
}
/* harmony default export */ var Appvue_type_script_lang_js = ({
  name: 'App',
  data() {
    return {
      navData: [],
      menu: [],
      scale: 1,
      notFound: ''
    };
  },
  components: {
    // Nav,
  },
  methods: {
    setScreen() {
      let visibleWidth = window.innerWidth;
      let visibleHeight = window.innerHeight;
      var widthPercentage = 1.0 * visibleWidth / 3840;
      var heightPercentage = 1.0 * visibleHeight / 2160;
      this.scale = Math.min(widthPercentage, heightPercentage);
      this.$store.commit('setScale', this.scale);
    }
  },
  mounted() {},
  created() {
    this.$store.commit('setRouter', this.$router.currentRoute.path);
    let that = this;
    that.menu = this.$router.options.routes.filter(item => {
      that.navData.push(item.path);
    });
  },
  watch: {}
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 /* harmony default export */ var src_Appvue_type_script_lang_js = (Appvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&id=b4c92516&prod&lang=less
var Appvue_type_style_index_0_id_b4c92516_prod_lang_less = __webpack_require__("5c0e");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/Zhexian.vue?vue&type=template&id=062971a0&scoped=true
var Zhexianvue_type_template_id_062971a0_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "zx"
  }, [_c('div', {
    staticClass: "picBox"
  }, [_c('div', [_c('ChartLineArea', {
    attrs: {
      "width": '500px',
      "height": '300px'
    }
  }), _c('div', {
    staticClass: "btn"
  }, [_c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent(1);
      }
    }
  }, [_vm._v("复制代码")])])], 1), _c('div', [_c('DuoZhexianTu', {
    attrs: {
      "width": '500px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent(2);
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('LineCharts', {
    attrs: {
      "width": '500px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent(3);
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('LineChartsXuxian', {
    attrs: {
      "width": '500px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent(4);
      }
    }
  }, [_vm._v("复制代码")])], 1)])]);
};
var Zhexianvue_type_template_id_062971a0_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ChartLibraryView/Zhexian.vue?vue&type=template&id=062971a0&scoped=true

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/01-折线图/02-单折现面积图/ChartLineArea.vue?vue&type=template&id=312e929c&scoped=true
var ChartLineAreavue_type_template_id_312e929c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  }), _vm.legIsShow ? _c('ul', {
    staticClass: "legth",
    style: {
      top: _vm.legTop,
      left: _vm.legLeft
    }
  }, _vm._l(_vm.legendthWZ, function (item, i) {
    return _c('li', {
      key: i
    }, [_c('h3', {
      style: {
        backgroundColor: _vm.legendColor[i]
      }
    }), _c('span', [_vm._v(_vm._s(item))])]);
  }), 0) : _vm._e()]);
};
var ChartLineAreavue_type_template_id_312e929c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/02-单折现面积图/ChartLineArea.vue?vue&type=template&id=312e929c&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/01-折线图/02-单折现面积图/ChartLineArea.vue?vue&type=script&lang=js

/* harmony default export */ var ChartLineAreavue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '00:00',
          value: 90,
          item: 10
        }, {
          name: '02:00',
          value: 150,
          item: 20
        }, {
          name: '04:00',
          value: 130,
          item: 120
        }, {
          name: '04:00',
          value: 130,
          item: 130
        }, {
          name: '04:00',
          value: 120,
          item: 140
        }, {
          name: '06:00',
          value: 100,
          item: 150
        }, {
          name: '08:00',
          value: 80,
          item: 110
        }, {
          name: '10:00',
          value: 80,
          item: 160
        }, {
          name: '12:00',
          value: 70,
          item: 191
        }, {
          name: '14:00',
          value: 90,
          item: 182
        }, {
          name: '16:00',
          value: 100,
          item: 170
        }, {
          name: '18:00',
          value: 130,
          item: 160
        }, {
          name: '20:00',
          value: 120,
          item: 150
        }, {
          name: '22:00',
          value: 110,
          item: 140
        }];
      }
    },
    symbolSize: {
      type: [String, Number],
      default: () => {
        return 5;
      }
    },
    lineColor: {
      type: Array,
      default: () => {
        return ['#F496AA', '#89AAFF'];
      }
    },
    legendColor: {
      type: Array,
      default: () => {
        return ['#F496AA'];
      }
    },
    legendthWZ: {
      type: Array,
      default: () => {
        return ['A'];
      }
    },
    unit: {
      type: String,
      default: () => {
        return '%';
      }
    },
    width: {
      type: String,
      default: () => {
        return '600px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    legTop: {
      type: String,
      default: () => {
        return '10px';
      }
    },
    legLeft: {
      type: String,
      default: () => {
        return '450px';
      }
    },
    legIsShow: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    fontStyle: {
      type: Object,
      default: () => {
        return {
          Xfont: {
            // x轴
            color: '#BFEBFF',
            fontSize: 14,
            fontFamily: 'PingFang'
          },
          Yfont: {
            // y轴
            color: '#BFEBFF',
            fontSize: 14,
            fontFamily: 'Helvetica'
          },
          nameTextStyle: {
            // 单位
            color: '#BFEBFF',
            fontSize: 16,
            padding: 2,
            fontFamily: 'PingFang'
          }
        };
      }
    },
    top: {
      type: String,
      default: () => {
        return '15%';
      }
    },
    left: {
      type: String,
      default: () => {
        return '2%';
      }
    }
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [],
      setTime: null,
      chartInst: null
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach(item => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
      });
    }
    this.drawWidth();
    this.tooltipShuffling();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        color: this.lineColor[0],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          top: this.top,
          left: this.left,
          right: '3%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: [{
          boundaryGap: false,
          type: 'category',
          data: this.Xdata,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            //x轴文字的配置
            textStyle: this.fontStyle.Xfont
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 1.2 //这里是为了突出显示加上的
            }
          }
        }],
        yAxis: [{
          name: '单位:' + this.unit,
          position: 'left',
          type: 'value',
          nameTextStyle: this.fontStyle.nameTextStyle,
          axisLabel: {
            //y轴文字的配置
            textStyle: this.fontStyle.Yfont
          },
          splitNumber: 4,
          // 设置y轴线条的粗细
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#0A223E'],
              width: 2,
              type: 'solid'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 3 //这里是为了突出显示加上的
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              // color: ["rgba(14,29,52,0.5)", "rgba(191,235,255,0.1)"]
              color: ['transparent', 'rgba(238,238,238,.1)']
            }
          }
        }],
        series: [{
          type: 'line',
          data: this.Ydata,
          symbolSize: this.symbolSize,
          // symbolSize: 5,

          areaStyle: {
            normal: {
              lineStyle: {
                width: 30,
                type: 'solid',
                shadowColor: 'rgba(0,0,0,0)',
                //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.lineColor[0]
              }, {
                offset: 1,
                color: this.lineColor[1]
              }])
            }
          }
        }]
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
  },
  watch: {
    rowData: {
      handler() {
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.rowData.forEach(item => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
        });
        this.chartInst.dispose();
        this.drawWidth();
        this.tooltipShuffling();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/02-单折现面积图/ChartLineArea.vue?vue&type=script&lang=js
 /* harmony default export */ var _02_ChartLineAreavue_type_script_lang_js = (ChartLineAreavue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/01-折线图/02-单折现面积图/ChartLineArea.vue?vue&type=style&index=0&id=312e929c&prod&lang=less&scoped=true
var ChartLineAreavue_type_style_index_0_id_312e929c_prod_lang_less_scoped_true = __webpack_require__("3f07");

// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/02-单折现面积图/ChartLineArea.vue






/* normalize component */

var ChartLineArea_component = Object(componentNormalizer["a" /* default */])(
  _02_ChartLineAreavue_type_script_lang_js,
  ChartLineAreavue_type_template_id_312e929c_scoped_true_render,
  ChartLineAreavue_type_template_id_312e929c_scoped_true_staticRenderFns,
  false,
  null,
  "312e929c",
  null
  
)

/* harmony default export */ var ChartLineArea = (ChartLineArea_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/01-折线图/03-多折线图/DuoZhexianTu.vue?vue&type=template&id=14d185af&scoped=true
var DuoZhexianTuvue_type_template_id_14d185af_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  })]);
};
var DuoZhexianTuvue_type_template_id_14d185af_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/DuoZhexianTu.vue?vue&type=template&id=14d185af&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/01-折线图/03-多折线图/DuoZhexianTu.vue?vue&type=script&lang=js

/* harmony default export */ var DuoZhexianTuvue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '00:00',
          value: 90,
          item: 10
        }, {
          name: '02:00',
          value: 150,
          item: 20
        }, {
          name: '04:00',
          value: 130,
          item: 120
        }, {
          name: '04:00',
          value: 130,
          item: 130
        }, {
          name: '04:00',
          value: 120,
          item: 140
        }, {
          name: '06:00',
          value: 100,
          item: 150
        }, {
          name: '08:00',
          value: 80,
          item: 110
        }, {
          name: '10:00',
          value: 80,
          item: 160
        }, {
          name: '12:00',
          value: 70,
          item: 191
        }, {
          name: '14:00',
          value: 90,
          item: 182
        }, {
          name: '16:00',
          value: 100,
          item: 170
        }, {
          name: '18:00',
          value: 130,
          item: 160
        }, {
          name: '20:00',
          value: 120,
          item: 150
        }, {
          name: '22:00',
          value: 110,
          item: 140
        }];
      }
    },
    lineColor: {
      type: Array,
      default: () => {
        return ['#F496AA', '#89AAFF', '#5b7980'];
      }
    },
    legendOptions: {
      type: Object,
      default: () => {
        return {
          WZ: ['邮件', '营销'],
          align: 'left',
          left: 220,
          top: 20,
          itemGap: 10,
          itemWidth: 20,
          itemHeight: 7,
          textColor: '#bfebff',
          textSize: 15
        };
      }
    },
    unit: {
      type: String,
      default: () => {
        return '单位:个';
      }
    },
    barWidth: {
      type: String,
      default: () => {
        return '22';
      }
    },
    width: {
      type: String,
      default: () => {
        return '644px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '266px';
      }
    },
    symbolSize: {
      type: Number,
      default: () => {
        return 5;
      }
    }
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [],
      setTime: null,
      chartInst: null
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach(item => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
      });
    }
    this.drawWidth();
    this.tooltipShuffling();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        color: '#00BFFF',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          boundaryGap: false,
          type: 'category',
          data: this.Xdata,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            //x轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 14,
              fontFamily: 'PingFang'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 1.2 //这里是为了突出显示加上的
            }
          }
        }],
        yAxis: [{
          name: `${this.unit}`,
          position: 'left',
          type: 'value',
          nameTextStyle: {
            color: '#BFEBFF',
            fontSize: 16,
            padding: 2,
            fontFamily: 'PingFang'
          },
          axisLabel: {
            //y轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 14,
              fontFamily: 'Helvetica'
            }
          },
          splitNumber: 5,
          // 设置y轴线条的粗细
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0A223E'],
              width: 1,
              // 背景横向的边框
              type: 'solid'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 2 //这里是为了突出显示加上的
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(14,29,52,0.2)', 'rgba(191,235,255,0.1)']
            }
          }
        }],
        legend: {
          data: this.legendOptions.WZ,
          orient: 'horizontal',
          // 布局方式，默认为水平布局，可选为：vertical /  horizontal
          icon: 'rect',
          //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow', 'none'
          align: this.legendOptions.align,
          left: this.legendOptions.left,
          //距离canvas左侧距离
          top: this.legendOptions.top,
          //距离canvas上面距离
          // bottom: "20%",
          selectedMode: true,
          //图例选择的模式，控制是否可以通过点击图例改变系列的显示状态。默认开启图例选择，可以设成 false 关闭。
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: '#ff0',
          // 图例边框颜色
          borderWidth: 0,
          // 图例边框线宽，单位px，默认为0（无边框）
          padding: 0,
          // 图例内边距，单位px，默认各方向内边距为5，
          // 接受数组分别设定上右下左边距，同css
          itemGap: this.legendOptions.itemGap,
          // 各个item之间的间隔，单位px，默认为10，
          // 横向布局时为水平间隔，纵向布局时为纵向间隔
          itemWidth: this.legendOptions.itemWidth,
          // 图例图形宽度
          itemHeight: this.legendOptions.itemHeight,
          // 图例图形高度
          textStyle: {
            color: this.legendOptions.textColor,
            // color: "#bfebff",
            fontSize: this.legendOptions.textSize
          }
        },
        series: [{
          name: this.legendOptions.WZ[0],
          type: 'line',
          barGap: 0,
          width: this.barWidth,
          symbolSize: this.symbolSize,
          data: this.Ydata,
          color: this.lineColor[0]
        }, {
          name: this.legendOptions.WZ[1],
          type: 'line',
          barGap: 0,
          barWidth: this.barWidth,
          data: this.valTwo,
          symbolSize: this.symbolSize,
          color: this.lineColor[1]
        }]
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 2000);
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
  },
  watch: {
    rowData: {
      handler() {
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.rowData.forEach(item => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
        });
        this.chartInst.dispose();
        this.drawWidth();
        this.tooltipShuffling();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/DuoZhexianTu.vue?vue&type=script&lang=js
 /* harmony default export */ var _03_DuoZhexianTuvue_type_script_lang_js = (DuoZhexianTuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/DuoZhexianTu.vue?vue&type=style&index=0&id=14d185af&prod&lang=less&scoped=true
var DuoZhexianTuvue_type_style_index_0_id_14d185af_prod_lang_less_scoped_true = __webpack_require__("166b");

// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/DuoZhexianTu.vue






/* normalize component */

var DuoZhexianTu_component = Object(componentNormalizer["a" /* default */])(
  _03_DuoZhexianTuvue_type_script_lang_js,
  DuoZhexianTuvue_type_template_id_14d185af_scoped_true_render,
  DuoZhexianTuvue_type_template_id_14d185af_scoped_true_staticRenderFns,
  false,
  null,
  "14d185af",
  null
  
)

/* harmony default export */ var DuoZhexianTu = (DuoZhexianTu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/01-折线图/03-多折线图/LineCharts+xuxian.vue?vue&type=template&id=10e98b96&scoped=true
var LineCharts_xuxianvue_type_template_id_10e98b96_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  }), _vm.legIsShow ? _c('ul', {
    staticClass: "legth",
    style: {
      top: _vm.legTop,
      left: _vm.legLeft
    }
  }, _vm._l(_vm.legthWZ, function (item, i) {
    return _c('li', {
      key: i
    }, [_c('h3', {
      style: {
        backgroundColor: _vm.legthColor[i],
        width: _vm.legendwidth,
        height: _vm.legendheight,
        marginTop: _vm.margintop
      }
    }), _c('span', [_vm._v(_vm._s(item))])]);
  }), 0) : _vm._e()]);
};
var LineCharts_xuxianvue_type_template_id_10e98b96_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/LineCharts+xuxian.vue?vue&type=template&id=10e98b96&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/01-折线图/03-多折线图/LineCharts+xuxian.vue?vue&type=script&lang=js

/* harmony default export */ var LineCharts_xuxianvue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '00:00',
          value: 90,
          item: 10,
          val: 10
        }, {
          name: '02:00',
          value: 150,
          item: 20,
          val: 10
        }, {
          name: '04:00',
          value: 130,
          item: 120,
          val: 10
        }, {
          name: '04:00',
          value: 130,
          item: 130,
          val: 10
        }, {
          name: '04:00',
          value: 120,
          item: 140,
          val: 10
        }, {
          name: '06:00',
          value: 100,
          item: 150,
          val: 10
        }, {
          name: '08:00',
          value: 80,
          item: 110,
          val: 10
        }, {
          name: '10:00',
          value: 80,
          item: 160,
          val: 10
        }, {
          name: '12:00',
          value: 70,
          item: 191,
          val: 10
        }, {
          name: '14:00',
          value: 90,
          item: 182,
          val: 10
        }, {
          name: '16:00',
          value: 100,
          item: 170,
          val: 10
        }, {
          name: '18:00',
          value: 130,
          item: 160
        }, {
          name: '20:00',
          value: 120,
          item: 150,
          val: 10
        }, {
          name: '22:00',
          value: 110,
          item: 140,
          val: 10
        }];
      }
    },
    barColor: {
      type: Array,
      default: () => {
        return ['#F496AA', '#89AAFF', '#7476c5'];
      }
    },
    legthColor: {
      type: Array,
      default: () => {
        return ['#F496AA', '#89AAFF', '#7476c5'];
      }
    },
    legthWZ: {
      type: Array,
      default: () => {
        return ['总量', '整改量'];
      }
    },
    unit: {
      type: String,
      default: () => {
        return '个';
      }
    },
    width: {
      type: String,
      default: () => {
        return '644px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '266px';
      }
    },
    legTop: {
      type: String,
      default: () => {
        return '10px';
      }
    },
    legLeft: {
      type: String,
      default: () => {
        return '320px';
      }
    },
    legIsShow: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    symbolSizebordius: {
      type: Number,
      default: () => {
        return 5;
      }
    },
    legendwidth: {
      type: String,
      default: () => {
        return '';
      }
    },
    legendheight: {
      type: String,
      default: () => {
        return '';
      }
    },
    margintop: {
      type: String,
      default: () => {
        return '';
      }
    }
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [],
      valthree: [],
      valfour: [],
      valfive: [],
      valsix: [],
      valseven: [],
      setTime: null,
      chartInst: null
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach(item => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
        this.valthree.push(item.val);
        this.valfour.push(item.val1);
        this.valfive.push(item.val2);
        this.valsix.push(item.val3);
        this.valseven.push(item.val4);
      });
    }
    this.drawWidth();
    this.tooltipShuffling();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        color: '#00BFFF',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        /*
         * toolbox为工具栏；提供导出图片，数据转化，动态数据等信息
         * 保存图片
         */
        toolbox: {
          // feature: {
          //   dataView: { show: true, readOnly: false },
          //   restore: { show: true },
          //   saveAsImage: { show: true },
          // },
          show: false
        },
        grid: {
          left: '3%',
          right: '0%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          boundaryGap: false,
          type: 'category',
          data: this.Xdata,
          axisTick: {
            alignWithLabel: true
          },
          interval: 0,
          axisLabel: {
            //x轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 16,
              fontFamily: 'PingFang'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 1.2 //这里是为了突出显示加上的
            }
          }
        }],
        yAxis: [{
          name: `单位:${this.unit}`,
          position: 'left',
          type: 'value',
          nameTextStyle: {
            color: '#BFEBFF',
            fontSize: 16,
            padding: 2,
            fontFamily: 'PingFang'
          },
          axisLabel: {
            formatter: '{value} w',
            //y轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 16,
              fontFamily: 'Helvetica',
              interval: 0
            }
          },
          splitNumber: 5,
          // 设置y轴线条的粗细
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0A223E20'],
              width: 1,
              type: 'solid'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(14,29,52,0.2)', 'rgba(191,235,255,0.1)']
            }
          }
        }, {
          position: 'right',
          type: 'value',
          nameTextStyle: {
            show: false,
            color: '#BFEBFF',
            fontSize: 16,
            padding: 2,
            fontFamily: 'PingFang'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#9FAFB5',
              width: 0 //Y轴的粗细
            }
          },
          axisLabel: {
            formatter: '{value} %',
            //y轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 16,
              fontFamily: 'Helvetica',
              interval: 0
            }
          },
          splitNumber: 5,
          // 设置y轴线条的粗细
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#33333330'],
              width: 1,
              // 那个横着的背景线边框
              type: 'solid'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(14,29,52,0.2)', 'rgba(191,235,255,0.1)']
            }
          }
        }],
        series: [{
          type: 'line',
          symbolSize: this.symbolSizebordius,
          data: this.Ydata,
          color: this.barColor[0]
        }, {
          yAxisIndex: 1,
          type: 'line',
          data: this.valTwo,
          symbolSize: this.symbolSizebordius,
          color: this.barColor[1]
        }, {
          type: 'line',
          data: this.valthree,
          symbolSize: this.symbolSizebordius,
          color: this.barColor[2]
        }, {
          type: 'line',
          data: this.valfour,
          symbolSize: this.symbolSizebordius,
          color: this.barColor[3]
        }, {
          type: 'line',
          data: this.valfive,
          symbolSize: this.symbolSizebordius,
          color: this.barColor[4]
        }, {
          type: 'line',
          data: this.valsix,
          symbolSize: this.symbolSizebordius,
          color: this.barColor[5]
        }, {
          type: 'line',
          data: this.valseven,
          symbolSize: this.symbolSizebordius,
          color: this.barColor[6]
        }]
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
  },
  watch: {
    rowData: {
      handler() {
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.valthree = [];
        this.rowData.forEach(item => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
          this.valthree.push(item.val);
          this.valfour.push(item.val1);
          this.valfive.push(item.val2);
          this.valsix.push(item.val3);
          this.valseven.push(item.val3);
        });
        this.chartInst.dispose();
        this.drawWidth();
        this.tooltipShuffling();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/LineCharts+xuxian.vue?vue&type=script&lang=js
 /* harmony default export */ var _03_LineCharts_xuxianvue_type_script_lang_js = (LineCharts_xuxianvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/LineCharts+xuxian.vue?vue&type=style&index=0&id=10e98b96&prod&lang=less&scoped=true
var LineCharts_xuxianvue_type_style_index_0_id_10e98b96_prod_lang_less_scoped_true = __webpack_require__("61a8");

// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/LineCharts+xuxian.vue






/* normalize component */

var LineCharts_xuxian_component = Object(componentNormalizer["a" /* default */])(
  _03_LineCharts_xuxianvue_type_script_lang_js,
  LineCharts_xuxianvue_type_template_id_10e98b96_scoped_true_render,
  LineCharts_xuxianvue_type_template_id_10e98b96_scoped_true_staticRenderFns,
  false,
  null,
  "10e98b96",
  null
  
)

/* harmony default export */ var LineCharts_xuxian = (LineCharts_xuxian_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/01-折线图/03-多折线图/LineCharts.vue?vue&type=template&id=e32b33da&scoped=true
var LineChartsvue_type_template_id_e32b33da_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  }), _vm.legIsShow ? _c('ul', {
    staticClass: "legth",
    style: {
      top: _vm.legTop,
      left: _vm.legLeft
    }
  }, _vm._l(_vm.legthWZ, function (item, i) {
    return _c('li', {
      key: i
    }, [_c('h3', {
      style: {
        backgroundColor: _vm.legthColor[i]
      }
    }), _c('span', [_vm._v(_vm._s(item))])]);
  }), 0) : _vm._e()]);
};
var LineChartsvue_type_template_id_e32b33da_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/LineCharts.vue?vue&type=template&id=e32b33da&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/01-折线图/03-多折线图/LineCharts.vue?vue&type=script&lang=js

/* harmony default export */ var LineChartsvue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '00:00',
          value: 90,
          item: 10
        }, {
          name: '02:00',
          value: 150,
          item: 20
        }, {
          name: '04:00',
          value: 130,
          item: 120
        }, {
          name: '04:00',
          value: 130,
          item: 130
        }, {
          name: '04:00',
          value: 120,
          item: 140
        }, {
          name: '06:00',
          value: 100,
          item: 150
        }, {
          name: '08:00',
          value: 80,
          item: 110
        }, {
          name: '10:00',
          value: 80,
          item: 160
        }, {
          name: '12:00',
          value: 70,
          item: 191
        }, {
          name: '14:00',
          value: 90,
          item: 182
        }, {
          name: '16:00',
          value: 100,
          item: 170
        }, {
          name: '18:00',
          value: 130,
          item: 160
        }, {
          name: '20:00',
          value: 120,
          item: 150
        }, {
          name: '22:00',
          value: 110,
          item: 140
        }];
      }
    },
    symbolSize: {
      type: [String, Number],
      default: () => {
        return 0;
      }
    },
    lineColor: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#89AAFF', '#89AAFF', '#F496AA'];
      }
    },
    legthColor: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#F496AA'];
      }
    },
    legthWZ: {
      type: Array,
      default: () => {
        return ['利用率', '使用率'];
      }
    },
    unit: {
      type: String,
      default: () => {
        return '%';
      }
    },
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    legTop: {
      type: String,
      default: () => {
        return '10px';
      }
    },
    legLeft: {
      type: String,
      default: () => {
        return '200px';
      }
    },
    legIsShow: {
      type: Boolean,
      default: () => {
        return true;
      }
    }
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [],
      setTime: null,
      chartInst: null
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach(item => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
      });
    }
    this.drawWidth();
    this.tooltipShuffling();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        color: '#F496AA',
        // 面线  的  线条的颜色
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          boundaryGap: false,
          type: 'category',
          data: this.Xdata,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            //x轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 14,
              fontFamily: 'PingFang'
            }
          }
        }],
        yAxis: [{
          name: `单位:${this.unit}`,
          position: 'left',
          type: 'value',
          nameTextStyle: {
            color: '#BFEBFF',
            fontSize: 16,
            padding: 2,
            fontFamily: 'PingFang'
          },
          axisLabel: {
            //y轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 14,
              fontFamily: 'Helvetica'
            }
          },
          splitNumber: 5,
          // 设置y轴线条的粗细
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0A223E10'],
              width: 1,
              type: 'solid'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(14,29,52,0.2)', 'rgba(191,235,255,0.1)']
            }
          }
        }],
        series: [{
          type: 'line',
          symbolSize: this.symbolSize,
          data: this.Ydata,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.lineColor[0]
              }, {
                offset: 1,
                color: this.lineColor[1]
              }]),
              lineStyle: {
                width: 3,
                type: 'solid',
                shadowColor: 'rgba(0,0,0,0)',
                //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              }
            }
          }
        }, {
          type: 'line',
          data: this.valTwo,
          symbolSize: this.symbolSize,
          areaStyle: {
            normal: {
              lineStyle: {
                width: 25,
                type: 'solid',
                shadowColor: 'rgba(0,0,0,0)',
                //默认透明
                shadowBlur: 5,
                shadowOffsetX: 3,
                shadowOffsetY: 3
              },
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.lineColor[2]
              }, {
                offset: 1,
                color: this.lineColor[3]
              }])
            }
          }
        }]
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
  },
  watch: {
    rowData: {
      handler() {
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.rowData.forEach(item => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
        });
        this.chartInst.dispose();
        this.drawWidth();
        this.tooltipShuffling();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/LineCharts.vue?vue&type=script&lang=js
 /* harmony default export */ var _03_LineChartsvue_type_script_lang_js = (LineChartsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/LineCharts.vue?vue&type=style&index=0&id=e32b33da&prod&lang=less&scoped=true
var LineChartsvue_type_style_index_0_id_e32b33da_prod_lang_less_scoped_true = __webpack_require__("f166");

// CONCATENATED MODULE: ./src/components/Chart Library/01-折线图/03-多折线图/LineCharts.vue






/* normalize component */

var LineCharts_component = Object(componentNormalizer["a" /* default */])(
  _03_LineChartsvue_type_script_lang_js,
  LineChartsvue_type_template_id_e32b33da_scoped_true_render,
  LineChartsvue_type_template_id_e32b33da_scoped_true_staticRenderFns,
  false,
  null,
  "e32b33da",
  null
  
)

/* harmony default export */ var LineCharts = (LineCharts_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/Zhexian.vue?vue&type=script&lang=js





// import ChartLineAreaTxt from '../../assets/copyText/ChartLineArea.txt';
/* harmony default export */ var Zhexianvue_type_script_lang_js = ({
  name: 'App',
  components: {
    ChartLineArea: ChartLineArea,
    DuoZhexianTu: DuoZhexianTu,
    LineCharts: LineCharts,
    LineChartsXuxian: LineCharts_xuxian
  },
  data() {
    return {};
  },
  mounted() {
    // this.getLDFSSS();
  },
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    // getLDFSSS() {},
    copyImportedFileContent(val) {
      let jsonName = '';
      switch (val) {
        case 1:
          jsonName = 'ChartLineArea';
          break;
        case 2:
          jsonName = 'DuoZhexianTu';
          break;
        case 3:
          jsonName = 'LineCharts';
          break;
        case 4:
          jsonName = 'LineChartsXuxian';
          break;
        default:
          break;
      }
      axios_default.a.get(`./data/折线图/文本/${jsonName}.txt`).then(res => {
        // 获取要复制的内容
        var textArea = document.createElement('textarea');
        textArea.value = res.data;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        // 提示复制成功
        alert('内容已复制到剪贴板');
      }).catch(err => {
        console.error('加载文件失败：', err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/ChartLibraryView/Zhexian.vue?vue&type=script&lang=js
 /* harmony default export */ var ChartLibraryView_Zhexianvue_type_script_lang_js = (Zhexianvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/views/ChartLibraryView/Zhexian.vue?vue&type=style&index=0&id=062971a0&prod&lang=less&scoped=true
var Zhexianvue_type_style_index_0_id_062971a0_prod_lang_less_scoped_true = __webpack_require__("0950");

// CONCATENATED MODULE: ./src/views/ChartLibraryView/Zhexian.vue






/* normalize component */

var Zhexian_component = Object(componentNormalizer["a" /* default */])(
  ChartLibraryView_Zhexianvue_type_script_lang_js,
  Zhexianvue_type_template_id_062971a0_scoped_true_render,
  Zhexianvue_type_template_id_062971a0_scoped_true_staticRenderFns,
  false,
  null,
  "062971a0",
  null
  
)

/* harmony default export */ var Zhexian = (Zhexian_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/Zhutu.vue?vue&type=template&id=9141dba6&scoped=true
var Zhutuvue_type_template_id_9141dba6_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "zt"
  }, [_c('div', {
    staticClass: "picBox"
  }, [_c('div', [_c('DuoZhuTu2', {
    attrs: {
      "width": '500px',
      "height": '290px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('DuoZhuTu2');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('PictorialSingleBar', {
    attrs: {
      "width": '500px',
      "height": '290px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('PictorialSingleBar');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticClass: "fgx"
  }), _c('div', [_c('DuoZhuTu', {
    attrs: {
      "width": '500px',
      "height": '290px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('DuoZhuTu');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('StackDuoZhuTu', {
    attrs: {
      "width": '500px',
      "height": '290px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('StackDuoZhuTu');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticClass: "fgx"
  }), _c('div', [_c('CylindricalPlot', {
    attrs: {
      "width": '500px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('CylindricalPlot');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('BarChart3D', {
    attrs: {
      "width": '500px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('BarChart3D');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticClass: "fgx"
  }), _c('div', [_c('HengTwoBarCharts', {
    attrs: {
      "width": '500px',
      "height": '320px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('HengTwoBarCharts');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('CycloneChart', {
    attrs: {
      "width": '500px',
      "height": '320px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('CycloneChart');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticClass: "fgx"
  }), _c('div', [_c('BubbleBar', {
    attrs: {
      "width": '550px',
      "height": '320px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('BubbleBar');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticStyle: {
      "width": "530px"
    }
  })])]);
};
var Zhutuvue_type_template_id_9141dba6_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ChartLibraryView/Zhutu.vue?vue&type=template&id=9141dba6&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/02-多柱图/StackDuoZhuTu.vue?vue&type=template&id=5a0b5438&scoped=true
var StackDuoZhuTuvue_type_template_id_5a0b5438_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  }), _vm.legIsShow && _vm.rowData.length ? _c('ul', {
    staticClass: "legth",
    style: {
      top: _vm.legTop,
      left: _vm.legLeft
    }
  }, _vm._l(_vm.legthWZ, function (item, i) {
    return _c('li', {
      key: i
    }, [_c('h3', {
      style: {
        backgroundColor: _vm.legthColor[i]
      }
    }), _c('span', [_vm._v(_vm._s(item))])]);
  }), 0) : _vm._e()]);
};
var StackDuoZhuTuvue_type_template_id_5a0b5438_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/StackDuoZhuTu.vue?vue&type=template&id=5a0b5438&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/02-多柱图/StackDuoZhuTu.vue?vue&type=script&lang=js

/* harmony default export */ var StackDuoZhuTuvue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '0601',
          value: '10',
          item: '30',
          val: '20'
        }, {
          name: '0602',
          value: '20',
          item: '30',
          val: '40'
        }, {
          name: '0603',
          value: '50',
          item: '30',
          val: '10'
        }, {
          name: '0604',
          value: '20',
          item: '30',
          val: '40'
        }, {
          name: '0605',
          value: '30',
          item: '45',
          val: '32'
        }, {
          name: '0606',
          value: '45',
          item: '32',
          val: '10'
        }, {
          name: '0607',
          value: '12',
          item: '45',
          val: '21'
        }, {
          name: '0608',
          value: '23',
          item: '23',
          val: '45'
        }];
      }
    },
    h3Style: {
      type: Object,
      default: () => {
        return {};
      }
    },
    barColor: {
      type: Array,
      default: () => {
        return ['rgba(137,170,255,1)', 'rgba(137,170,255,.9)', 'rgba(244,150,170,1)', 'rgba(244,150,170,0)', '#f4a22d', '#ff0'];
      }
    },
    legthColor: {
      type: Array,
      default: () => {
        return ['#F496AA', '#89AAFF'];
      }
    },
    legthWZ: {
      type: Array,
      default: () => {
        return ['正常', '违章', '总数'];
      }
    },
    unit: {
      type: String,
      default: () => {
        return '单位:个';
      }
    },
    barWidth: {
      type: String,
      default: () => {
        return '15';
      }
    },
    width: {
      type: String,
      default: () => {
        return '412px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '188px';
      }
    },
    legTop: {
      type: String,
      default: () => {
        return '10px';
      }
    },
    legLeft: {
      type: String,
      default: () => {
        return '200px';
      }
    },
    legIsShow: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    labelShow: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    showUnit: {
      type: Boolean,
      default: () => {
        return true;
      }
    }
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [],
      valThree: [],
      valFour: [],
      setTime: null,
      chartInst: null
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach(item => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
        this.valThree.push(item.val);
        this.valFour.push(item.four);
      });
    } else {
      this.noDataShow();
      return;
    }
    this.drawWidth();
    this.tooltipShuffling();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        color: '#00BFFF',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        legend: {
          icon: 'rect',
          data: this.legthWZ,
          right: '5%',
          selectedMode: true,
          borderWidth: 0,
          padding: 0,
          itemGap: 18,
          itemWidth: 17,
          itemHeight: 7,
          top: 30,
          textStyle: {
            color: '#E5FFFF',
            fontFamily: '微软雅黑',
            fontSize: 14
          }
        },
        xAxis: [{
          type: 'category',
          data: this.Xdata,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            //x轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 16,
              fontFamily: 'PingFang'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 1.2 //这里是为了突出显示加上的
            }
          }
        }],
        yAxis: [{
          name: `${this.unit}`,
          position: 'left',
          type: 'value',
          nameTextStyle: {
            show: this.showUnit,
            color: '#BFEBFF',
            fontSize: 16,
            padding: 2,
            fontFamily: 'PingFang'
          },
          axisLabel: {
            //y轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 16,
              fontFamily: 'Helvetica'
            }
          },
          splitNumber: 5,
          // 设置y轴线条的粗细
          splitLine: {
            show: true,
            lineStyle: {
              color: [' rgba(255,255,255,0.08)'],
              width: 1,
              type: 'solid'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 2 //这里是为了突出显示加上的
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: [' rgba(255,255,255,0.08)', 'rgba(0,0,0,0)']
            }
          }
        }],
        series: [{
          stack: true,
          name: this.legthWZ[0],
          type: 'bar',
          barWidth: this.barWidth,
          data: this.Ydata,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.barColor[0]
              }, {
                offset: 1,
                color: this.barColor[1]
              }]),
              barBorderRadius: 0
            }
          },
          label: {
            show: this.labelShow,
            formatter: '{c} ',
            color: '#00FFFF',
            offset: [0, 1],
            position: 'top',
            fontFamily: '腾祥智黑简',
            fontSize: 18
          }
        }, {
          stack: true,
          name: this.legthWZ[1],
          type: 'bar',
          barWidth: this.barWidth,
          data: this.valTwo,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.barColor[2]
              }, {
                offset: 1,
                color: this.barColor[3]
              }]),
              barBorderRadius: 0
            }
          },
          label: {
            position: 'top',
            show: this.labelShow,
            formatter: '{c} ',
            color: '#00FFFF',
            offset: [0, 1],
            fontFamily: '腾祥智黑简',
            fontSize: 18
          }
        }, {
          name: this.legthWZ[2],
          type: 'line',
          barWidth: this.barWidth,
          data: this.valThree,
          color: this.barColor[4]
          // itemStyle: {
          //   normal: {
          //     color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
          //       {
          //         offset: 0,
          //         color: this.barColor[4]
          //       },
          //       {
          //         offset: 1,
          //         color: this.barColor[5]
          //       }
          //     ]),
          //     barBorderRadius: 0
          //   }
          // },
        }, {
          name: this.legthWZ[3],
          type: 'bar',
          barWidth: this.barWidth,
          data: this.valFour,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.barColor[6]
              }, {
                offset: 1,
                color: this.barColor[7]
              }]),
              barBorderRadius: 0
            }
          },
          label: {
            position: 'top',
            show: this.labelShow,
            formatter: '{c} ',
            color: '#00FFFF',
            offset: [0, 1],
            fontFamily: '腾祥智黑简',
            fontSize: 18
          }
        }]
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 2000);
    },
    noDataShow() {
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        backgroundColor: 'rgba(255,255,255,.03)',
        title: {
          text: `暂无数据`,
          show: true,
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 32
          },
          top: 'center',
          left: 'center'
        }
      });
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    this.setTime = null;
    this.chartInst.dispose();
  },
  watch: {
    rowData: {
      handler(val) {
        if (!val.length) {
          this.noDataShow();
          return;
        }
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.valThree = [];
        this.valFour = [];
        this.rowData.forEach(item => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
          this.valThree.push(item.val);
          this.valFour.push(item.four);
        });
        this.tooltipShuffling();
        this.drawWidth();
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/StackDuoZhuTu.vue?vue&type=script&lang=js
 /* harmony default export */ var _02_StackDuoZhuTuvue_type_script_lang_js = (StackDuoZhuTuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/StackDuoZhuTu.vue?vue&type=style&index=0&id=5a0b5438&prod&lang=less&scoped=true
var StackDuoZhuTuvue_type_style_index_0_id_5a0b5438_prod_lang_less_scoped_true = __webpack_require__("9e10");

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/StackDuoZhuTu.vue






/* normalize component */

var StackDuoZhuTu_component = Object(componentNormalizer["a" /* default */])(
  _02_StackDuoZhuTuvue_type_script_lang_js,
  StackDuoZhuTuvue_type_template_id_5a0b5438_scoped_true_render,
  StackDuoZhuTuvue_type_template_id_5a0b5438_scoped_true_staticRenderFns,
  false,
  null,
  "5a0b5438",
  null
  
)

/* harmony default export */ var StackDuoZhuTu = (StackDuoZhuTu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu2.vue?vue&type=template&id=71e237b8&scoped=true
var DuoZhuTu2vue_type_template_id_71e237b8_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "chart",
    staticClass: "bar-chart",
    style: {
      width: _vm.width,
      height: _vm.height
    },
    on: {
      "mousemove": _vm.mousemove,
      "mouseleave": _vm.mouseleave
    }
  });
};
var DuoZhuTu2vue_type_template_id_71e237b8_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu2.vue?vue&type=template&id=71e237b8&scoped=true

// EXTERNAL MODULE: ./node_modules/echarts/index.js + 542 modules
var echarts = __webpack_require__("313e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu2.vue?vue&type=script&lang=js


/* harmony default export */ var DuoZhuTu2vue_type_script_lang_js = ({
  props: {
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    xtype: {
      type: String,
      default: 'category'
    },
    ytype: {
      type: String,
      default: 'value'
    },
    maxData: {
      type: Number,
      default: 300
    },
    coloreBarChart: {
      type: Array,
      default: () => {
        return ['#F496AA', '#89AAFF'];
      }
    },
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '0601',
          value: '10'
        }, {
          name: '0602',
          value: '20'
        }, {
          name: '0603',
          value: '50'
        }, {
          name: '0604',
          value: '20'
        }, {
          name: '0605',
          value: '30'
        }, {
          name: '0606',
          value: '45'
        }, {
          name: '0607',
          value: '12'
        }, {
          name: '0608',
          value: '23'
        }];
      }
    },
    chartStylr: {
      type: Object,
      default: () => {
        return {
          unit: '单位：人',
          barWidth: 20
        };
      }
    },
    gridData: {
      type: Object,
      default: () => {
        return {
          top: '20%',
          bottom: '13%',
          left: '5%',
          right: '5%'
        };
      }
    }
  },
  data() {
    return {
      chartInst: null,
      option: {},
      setTime: null
    };
  },
  methods: {
    instantiation() {
      this.chartInst = echarts["init"](this.$refs.chart);
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        grid: this.gridData,
        xAxis: {
          type: this.xtype,
          data: [],
          axisLine: {
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 14,
            interval: 0
          }
        },
        yAxis: {
          type: this.ytype,
          name: this.chartStylr.unit,
          // max: this.maxData,
          nameTextStyle: {
            fontSize: 14,
            padding: [0, 0, 0, 35] // 四个数字分别为上右下左与原位置距离
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          axisLabel: {
            fontSize: 14,
            interval: 0
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(255,255,255,0.1)', 'rgba(238,238,238,0)']
            }
          }
        },
        series: [{
          data: [],
          avoidLabelOverlap: false,
          type: 'bar',
          barWidth: this.chartStylr.barWidth,
          itemStyle: {
            color: new echarts["graphic"].LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: this.coloreBarChart[0]
            }, {
              offset: 1,
              color: this.coloreBarChart[1]
            }]),
            //这里设置柱形图圆角 [左上角，右上角，右下角，左下角]
            barBorderRadius: 10
          }
        }]
      };
    },
    rowDataChart() {
      let name = [];
      let value = [];
      this.rowData.forEach(val => {
        name.push(val['name']);
        value.push(val['value']);
      });
      this.option.xAxis.data = name;
      this.option.series[0].data = value;
      this.chartInst.setOption(this.option, true);
    },
    tooltipShuffling() {
      //
      clearInterval(this.setTime);
      let count = 0;
      this.setTime = setInterval(() => {
        if (count == this.rowData.length) {
          count = 0;
        }
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count
        });
        count++;
      }, 3000);
    },
    noDataShow() {
      this.chartInst = echarts["init"](this.$refs.chart);
      this.chartInst.setOption({
        backgroundColor: 'rgba(255,255,255,.03)',
        title: {
          text: `暂无数据`,
          show: true,
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 32
          },
          top: 'center',
          left: 'center'
        }
      });
    },
    mousemove() {
      clearInterval(this.setTime);
    },
    mouseleave() {
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.rowData.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 2000);
    }
  },
  mounted() {
    if (!this.rowData.length) {
      this.noDataShow();
      return;
    }
    this.instantiation();
    this.rowDataChart();
    this.tooltipShuffling();
    this.mousemove();
    this.mouseleave();
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    echarts["init"](this.$refs.chart).dispose();
  },
  watch: {
    rowData: {
      handler(newV) {
        if (!newV.length) {
          this.noDataShow();
          return;
        }
        this.instantiation();
        this.rowDataChart();
        this.tooltipShuffling();
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu2.vue?vue&type=script&lang=js
 /* harmony default export */ var _02_DuoZhuTu2vue_type_script_lang_js = (DuoZhuTu2vue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu2.vue





/* normalize component */

var DuoZhuTu2_component = Object(componentNormalizer["a" /* default */])(
  _02_DuoZhuTu2vue_type_script_lang_js,
  DuoZhuTu2vue_type_template_id_71e237b8_scoped_true_render,
  DuoZhuTu2vue_type_template_id_71e237b8_scoped_true_staticRenderFns,
  false,
  null,
  "71e237b8",
  null
  
)

/* harmony default export */ var DuoZhuTu2 = (DuoZhuTu2_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu.vue?vue&type=template&id=7047ded7&scoped=true
var DuoZhuTuvue_type_template_id_7047ded7_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.width,
      height: _vm.height
    },
    on: {
      "mousemove": _vm.mousemove,
      "mouseleave": _vm.mouseleave
    }
  }), _vm.legIsShow ? _c('ul', {
    staticClass: "legth",
    style: {
      top: _vm.legTop,
      left: _vm.legLeft
    }
  }, _vm._l(_vm.legthWZ, function (item, i) {
    return _c('li', {
      key: i
    }, [_c('h3', {
      style: {
        backgroundColor: _vm.legthColor[i],
        width: _vm.stylebrick.width,
        height: _vm.stylebrick.height,
        marginTop: _vm.stylebrick.marginTop
      }
    }), _c('span', [_vm._v(_vm._s(item))])]);
  }), 0) : _vm._e()]);
};
var DuoZhuTuvue_type_template_id_7047ded7_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu.vue?vue&type=template&id=7047ded7&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu.vue?vue&type=script&lang=js

/* harmony default export */ var DuoZhuTuvue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    stylebrick: {
      type: Object,
      default: () => {
        return {
          width: '4px',
          height: '15px',
          marginTop: '5px'
        };
      }
    },
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '20210601',
          value: '10',
          item: '30',
          val: '20'
        }, {
          name: '20210602',
          value: '20',
          item: '30',
          val: '40'
        }, {
          name: '20210603',
          value: '50',
          item: '30',
          val: '10'
        }, {
          name: '20210604',
          value: '20',
          item: '30',
          val: '40'
        }, {
          name: '20210605',
          value: '30',
          item: '45',
          val: '32'
        }, {
          name: '20210606',
          value: '45',
          item: '32',
          val: '10'
        }, {
          name: '20210607',
          value: '12',
          item: '45',
          val: '21'
        }, {
          name: '20210608',
          value: '23',
          item: '23',
          val: '45'
        }];
      }
    },
    barColor: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#F496AA', '#71C6FF', '#71C6FF'];
      }
    },
    legthColor: {
      type: Array,
      default: () => {
        return ['#F496AA', '#71C6FF'];
      }
    },
    legthWZ: {
      type: Array,
      default: () => {
        return ['使用率', '利用率'];
      }
    },
    unit: {
      type: String,
      default: () => {
        return '%';
      }
    },
    barWidth: {
      type: String,
      default: () => {
        return '15';
      }
    },
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    legTop: {
      type: String,
      default: () => {
        return '10px';
      }
    },
    legLeft: {
      type: String,
      default: () => {
        return '330px';
      }
    },
    legIsShow: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    fontStyle: {
      type: Object,
      default: () => {
        return {
          Xfont: {
            color: '#BFEBFF',
            fontSize: 14,
            fontFamily: 'PingFang'
          },
          Yfont: {
            color: '#BFEBFF',
            fontSize: 14,
            fontFamily: 'Helvetica'
          },
          nameTextStyle: {
            color: '#BFEBFF',
            fontSize: 16,
            padding: 2,
            fontFamily: 'PingFang'
          }
        };
      }
    },
    rotate: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [30, 40, 50, 60],
      valThree: [],
      setTime: null,
      chartInst: null
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach(item => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
        this.valThree.push(item.val);
      });
    }
    this.drawWidth();
    this.tooltipShuffling();
    this.mousemove();
    this.mouseleave();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        color: '#00BFFF',
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: this.Xdata,
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            //x轴文字的配置
            textStyle: this.fontStyle.Xfont,
            rotate: this.rotate
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 1 //这里是为了突出显示加上的
            }
          }
        }],
        yAxis: [{
          name: `单位:${this.unit}`,
          position: 'left',
          type: 'value',
          nameTextStyle: this.fontStyle.nameTextStyle,
          axisLabel: {
            //y轴文字的配置
            textStyle: this.fontStyle.Yfont
          },
          splitNumber: 5,
          // 设置y轴线条的粗细
          splitLine: {
            show: true,
            lineStyle: {
              color: ['#0A223E50'],
              width: 1,
              type: 'solid'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 2 //这里是为了突出显示加上的
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0.1)']
            }
          }
        }],
        series: [{
          // name: "直接访问",
          type: 'bar',
          barWidth: this.barWidth,
          data: this.Ydata,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.barColor[0]
              }, {
                offset: 1,
                color: this.barColor[1]
              }])
            }
          }
        }, {
          // name: "直接访问",
          type: 'bar',
          barWidth: this.barWidth,
          data: this.valTwo,
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: this.barColor[2]
              }, {
                offset: 1,
                color: this.barColor[3]
              }])
            }
          }
        }]
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 2000);
    },
    mousemove() {
      clearInterval(this.setTime);
    },
    mouseleave() {
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 2000);
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
  },
  watch: {
    rowData: {
      handler() {
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.valThree = [];
        this.rowData.forEach(item => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
          this.valThree.push(item.val);
        });
        this.tooltipShuffling();
        this.drawWidth();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu.vue?vue&type=script&lang=js
 /* harmony default export */ var _02_DuoZhuTuvue_type_script_lang_js = (DuoZhuTuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu.vue?vue&type=style&index=0&id=7047ded7&prod&lang=less&scoped=true
var DuoZhuTuvue_type_style_index_0_id_7047ded7_prod_lang_less_scoped_true = __webpack_require__("a9c3");

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/02-多柱图/DuoZhuTu.vue






/* normalize component */

var DuoZhuTu_component = Object(componentNormalizer["a" /* default */])(
  _02_DuoZhuTuvue_type_script_lang_js,
  DuoZhuTuvue_type_template_id_7047ded7_scoped_true_render,
  DuoZhuTuvue_type_template_id_7047ded7_scoped_true_staticRenderFns,
  false,
  null,
  "7047ded7",
  null
  
)

/* harmony default export */ var DuoZhuTu = (DuoZhuTu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/01-单柱图/PictorialSingleBar.vue?vue&type=template&id=a489d838&scoped=true
var PictorialSingleBarvue_type_template_id_a489d838_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "chart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  });
};
var PictorialSingleBarvue_type_template_id_a489d838_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/PictorialSingleBar.vue?vue&type=template&id=a489d838&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/01-单柱图/PictorialSingleBar.vue?vue&type=script&lang=js


let baseStyle = {
  //柱子颜色
  barLiner: '#F496AA',
  //柱子宽度
  barWidth: '100%',
  //x单位，不显示置空即可
  xName: '',
  //y单位，不显示置空即可
  yName: '单位：分',
  //x轴Tick颜色 '#BFEBFF',置空不展示
  xTick: '',
  //x轴轴线颜色 '#BFEBFF',置空不展示
  xLine: '#BFEBFF',
  //x轴分割线颜色 '#BFEBFF',置空不展示
  xSplit: '',
  //x轴分割区域颜色 ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.1)'],置空不展示
  xSplitArea: '',
  //y轴Tick颜色 '#BFEBFF',置空不展示 间隔线
  yTick: '#68f8ff',
  //y轴轴线颜色 '#BFEBFF',置空不展示 ↓
  yLine: '#68f8ff',
  //y轴分割线颜色 '#BFEBFF',置空不展示
  ySplit: '',
  //y轴分割区域颜色 ['rgba(250,250,250,0.3)', 'rgba(200,200,200,0.1)'],置空不展示
  ySplitArea: ['#FFFFFF08', '#FFFFFF00'],
  //y轴分割份数
  splitNumber: 6,
  //x轴label间隔,设置为1,间隔1个展示
  xLabelInterval: 0
};
/* harmony default export */ var PictorialSingleBarvue_type_script_lang_js = ({
  name: 'PictorialSingleBar',
  props: {
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    labelStyle: {
      type: Object,
      default: () => {
        return {
          color: '#BFEBFF',
          fontStyle: 'normal',
          fontSize: 16
        };
      }
    },
    chartGrid: {
      type: Object,
      default: () => {
        return {
          right: '8%',
          top: '18%',
          left: '5%',
          bottom: '5%',
          containLabel: true
        };
      }
    },
    chartStyle: {
      type: Object,
      default: () => {
        return baseStyle;
      }
    },
    chartData: {
      type: Array,
      default: () => {
        return [{
          name: '0601',
          value: '10'
        }, {
          name: '0602',
          value: '20'
        }, {
          name: '0603',
          value: '50'
        }, {
          name: '0604',
          value: '20'
        }, {
          name: '0605',
          value: '30'
        }];
      }
    },
    chartToolTip: {
      type: Object,
      default: () => {
        return {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        };
      }
    }
  },
  data() {
    return {
      instance: null,
      option: {},
      refreshTimer: null
    };
  },
  methods: {
    getAxisStyle(axis, tick, line, split, splitArea) {
      axis.axisTick = {
        //坐标轴刻度相关设置。
        show: tick,
        //坐标轴轴线相关设置
        lineStyle: {
          color: tick
        }
      };
      axis.axisLine = {
        show: line,
        //坐标轴轴线相关设置
        lineStyle: {
          color: line
        }
      };
      axis.splitLine = {
        //坐标轴在 grid 区域中的分隔线。
        show: split,
        lineStyle: {
          color: split
        }
      };
      axis.splitArea = {
        show: splitArea,
        areaStyle: {
          color: splitArea
        }
      };
      axis.axisPointer = {
        type: 'none',
        //line(直线指示器),none,shadow(阴影)
        label: {
          show: false
        }
      };
      axis.nameTextStyle = this.labelStyle;
      axis.axisLabel = Object.assign({}, axis.axisLabel, {
        textStyle: this.labelStyle
      });
    },
    init() {
      this.instance = echarts["init"](this.$refs.chart);
      for (const key in this.chartStyle) {
        baseStyle[key] = this.chartStyle[key];
      }
      let cOption = baseStyle;
      this.option = {
        tooltip: this.chartToolTip,
        xAxis: {
          name: cOption.xName,
          type: 'category',
          boundaryGap: true,
          axisLabel: {
            //坐标轴刻度标签的相关设置。
            interval: cOption.xLabelInterval //设置为 1，表示『隔一个标签显示一个标签』
          }
        },
        yAxis: {
          name: cOption.yName,
          type: 'value',
          splitNumber: cOption.splitNumber
        },
        grid: this.chartGrid,
        series: [{
          type: 'pictorialBar',
          barWidth: cOption.barWidth,
          label: {
            normal: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: cOption.barLiner // 0% 处的颜色
                }, {
                  offset: 1,
                  color: cOption.barLiner + '33' // 100% 处的颜色
                }],
                globalCoord: false // 缺省为 false
              } //渐变颜色
            }
          },
          symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z'
        }]
      };
      this.getAxisStyle(this.option.xAxis, cOption.xTick, cOption.xLine, cOption.xSplit, cOption.xSplitArea);
      this.getAxisStyle(this.option.yAxis, cOption.yTick, cOption.yLine, cOption.ySplit, cOption.ySplitArea);
      this.instance.setOption(this.option, true);
    },
    loadData() {
      let name = [];
      let value = [];
      this.chartData.forEach(val => {
        name.push(val['name']);
        value.push(val['value']);
      });
      this.option.xAxis.data = name;
      this.option.series[0].data = value;
      this.instance.setOption(this.option, true);
    },
    refreshToolTip() {
      clearInterval(this.refreshTimer);
      let index = 0;
      this.refreshTimer = setInterval(() => {
        if (index >= this.chartData.length) {
          index = 0;
        }
        this.instance.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: index++
        });
      }, 2000);
    }
  },
  mounted() {
    this.init();
    this.loadData();
    this.refreshToolTip();
  },
  beforeDestroy() {
    clearInterval(this.refreshTimer);
    echarts["init"](this.$refs.chart).dispose();
  },
  watch: {
    chartData: {
      handler() {
        this.init();
        this.loadData();
        this.refreshToolTip();
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/PictorialSingleBar.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_PictorialSingleBarvue_type_script_lang_js = (PictorialSingleBarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/PictorialSingleBar.vue





/* normalize component */

var PictorialSingleBar_component = Object(componentNormalizer["a" /* default */])(
  _01_PictorialSingleBarvue_type_script_lang_js,
  PictorialSingleBarvue_type_template_id_a489d838_scoped_true_render,
  PictorialSingleBarvue_type_template_id_a489d838_scoped_true_staticRenderFns,
  false,
  null,
  "a489d838",
  null
  
)

/* harmony default export */ var PictorialSingleBar = (PictorialSingleBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/01-单柱图/CylindricalPlot.vue?vue&type=template&id=7322b608&scoped=true
var CylindricalPlotvue_type_template_id_7322b608_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.width,
      height: _vm.height
    },
    on: {
      "mousemove": _vm.mousemove,
      "mouseleave": _vm.mouseleave
    }
  })]);
};
var CylindricalPlotvue_type_template_id_7322b608_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/CylindricalPlot.vue?vue&type=template&id=7322b608&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/01-单柱图/CylindricalPlot.vue?vue&type=script&lang=js

/* harmony default export */ var CylindricalPlotvue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Array,
      default: () => {
        return ['91', '51', '29', '25', '35'];
      }
    },
    rowData2: {
      type: Array,
      default: () => {
        return ['400', '400', '400', '400', '400'];
      }
    },
    XData: {
      type: Array,
      default: () => {
        return ['干净', '整洁', '有序', '群众满意', '安全'];
      }
    },
    //
    barColor: {
      type: Array,
      default: () => ['#006DD9', '#1A98E3', '#087ADB', '#1A98E3', 'rgba(77,233,255,0.1)', 'rgb(77,233,255)', 'rgba(77,233,255,0)', 'rgb(77,233,255)', 'rgb(77,233,255,0.8)', 'rgb(77,233,255,0)', 'rgb(77,233,255,0.8)']
    },
    unit: {
      type: String,
      default: () => {
        return '件';
      }
    },
    barWidth: {
      type: String,
      default: () => {
        return '22';
      }
    },
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    fontStyle: {
      type: Object,
      default: () => {
        return {
          Xfont: {
            color: '#BFEBFF',
            fontSize: 16,
            fontFamily: '碳纤维正中黑简体'
          },
          Yfont: {
            color: '#BFEBFF',
            fontSize: 16,
            fontFamily: 'Helvetica'
          },
          nameTextStyle: {
            color: '#BFEBFF',
            fontSize: 16,
            fontFamily: '碳纤维正中黑简体',
            padding: 2
          }
        };
      }
    },
    rotate: {
      type: Number,
      default() {
        return 0;
      }
    },
    provideNumber: {
      type: Number,
      default: 2
    },
    //一行显示几个字
    interval: {
      type: Number,
      default() {
        return 20;
      }
    },
    top: {
      type: String,
      default: '18%'
    }
  },
  data() {
    return {
      // Xdata: [],
      Ydata: [],
      valTwo: [],
      valThree: [],
      valFour: [],
      setTime: null,
      chartInst: null
    };
  },
  mounted() {
    this.drawWidth();
    this.tooltipShuffling();
    this.mousemove();
    this.mouseleave();
  },
  methods: {
    drawWidth() {
      let that = this;
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      // var xData2 = [
      //   '容城谷庄',
      //   '雄县七间房',
      //   '安新三台',
      //   '雄县张岗',
      //   '安新寨里'
      // ];
      var data1 = this.rowData;
      var data2 = this.rowData2;
      let _this = this;
      let option = {
        color: '#00BFFF',
        tooltip: {
          trigger: 'axis',
          textStyle: {
            color: '#fff',
            fontSize: 38
          },
          formatter: function (params) {
            // console.log(params, 'paramsparams');
            let str = `${params.axisValue}  ${params.value}`;
            return str;
          }
        },
        grid: {
          left: '2%',
          right: '2%',
          bottom: '3%',
          top: this.top,
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 1 //这里是为了突出显示加上的
            }
          },
          axisLabel: {
            //x轴文字的配置
            interval: 0,
            textStyle: this.fontStyle.Xfont,
            rotate: this.rotate,
            formatter: function (params) {
              var newParamsName = '';
              var paramsNameNumber = params.length;
              var provideNumber = that.provideNumber; //一行显示几个字
              var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
              if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                  var tempStr = '';
                  var start = p * provideNumber;
                  var end = start + provideNumber;
                  if (p == rowNumber - 1) {
                    tempStr = params.substring(start, paramsNameNumber);
                  } else {
                    tempStr = params.substring(start, end) + '\n';
                  }
                  newParamsName += tempStr;
                }
              } else {
                newParamsName = params;
              }
              return newParamsName;
            }
          },
          data: this.XData
        }, {
          type: 'category',
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitArea: {
            show: false
          },
          splitLine: {
            show: false
          },
          data: this.XData
        }],
        yAxis: [{
          name: `单位:${this.unit}`,
          position: 'left',
          type: 'value',
          nameTextStyle: this.fontStyle.nameTextStyle,
          // interval: this.interval,
          axisLabel: {
            //y轴文字的配置
            textStyle: this.fontStyle.Yfont
          },
          splitNumber: 5,
          // 设置y轴线条的粗细
          splitLine: {
            show: true,
            lineStyle: {
              color: '#0A223E50',
              width: 1,
              type: 'solid'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 2 //这里是为了突出显示加上的
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(191,235,255,.1)', 'rgba(191,235,255,0)']
            }
          }
        }, {
          type: 'value',
          show: false,
          name: '单位:%',
          nameTextStyle: {
            color: '#BFEBFF',
            fontFamily: '苹方',
            fontWeight: 'Medium',
            fontSize: 20
          },
          min: 0,
          max: 100,
          interval: 25,
          splitLine: {
            show: false
          },
          axisLabel: {
            // formatter: "{value} %",
            textStyle: {
              color: '#BFEBFF',
              fontSize: '18',
              fontFamily: 'Helvetica'
            }
          }
        }],
        series: [{
          //三个最低下的圆片
          name: '',
          type: 'pictorialBar',
          symbolSize: [22, 11],
          symbolOffset: [0, 5],
          z: 23,
          itemStyle: {
            opacity: 1,
            color: function () {
              return new echarts["graphic"].LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: _this.barColor[0] // 0% 处的颜色
              }, {
                offset: 1,
                color: _this.barColor[0] // 100% 处的颜色
              }], false);
            }
          },
          data: Array(_this.XData.length).fill(1)
        },
        //下半截柱状图
        {
          name: '2020',
          type: 'bar',
          barWidth: 22,
          barGap: '-100%',
          z: 22,
          itemStyle: {
            //lenged文本
            opacity: 0.7,
            color: function () {
              return new echarts["graphic"].LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: _this.barColor[1] // 0% 处的颜色
              }, {
                offset: 0.5,
                color: _this.barColor[2] // 0% 处的颜色
              }, {
                offset: 1,
                color: _this.barColor[3] // 100% 处的颜色
              }], false);
            }
          },
          data: data1
        }, {
          // 替代柱状图 默认不显示颜色，是最下方柱图（邮件营销）的value值 - 20
          type: 'bar',
          barWidth: 22,
          barGap: '-100%',
          stack: '广告',
          itemStyle: {
            color: 'transparent'
          },
          data: data1
        }, {
          name: '',
          //头部
          type: 'pictorialBar',
          symbolSize: [22, 11],
          symbolOffset: [0, -5],
          z: 23,
          symbolPosition: 'end',
          itemStyle: {
            color: function () {
              return new echarts["graphic"].LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: _this.barColor[4]
                // 0% 处的颜色
              }, {
                offset: 1,
                color: _this.barColor[5]
                // 100% 处的颜色
              }], false);
            },
            opacity: 1
          },
          data: data2
        }, {
          name: '',
          type: 'pictorialBar',
          symbolSize: [22, 11],
          symbolOffset: [0, -5],
          z: 23,
          itemStyle: {
            opacity: 1,
            color: function () {
              return new echarts["graphic"].LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: _this.barColor[6]
                // 0% 处的颜色
              }, {
                offset: 1,
                color: _this.barColor[7]
                // 100% 处的颜色
              }], false);
            }
          },
          symbolPosition: 'end',
          data: data1
        }, {
          name: '2019',
          type: 'bar',
          barWidth: 22,
          barGap: '-100%',
          z: 2,
          itemStyle: {
            color: function () {
              return new echarts["graphic"].LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: _this.barColor[8]
                // 0% 处的颜色
              }, {
                offset: 0.5,
                color: _this.barColor[9]
                // 0% 处的颜色
              }, {
                offset: 1,
                color: _this.barColor[10]
                // 100% 处的颜色
              }], false);
            },
            opacity: 0.7
          },
          data: data2
        }]
      };
      this.chartInst.setOption(option);
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 1000);
    },
    mousemove() {
      clearInterval(this.setTime);
    },
    mouseleave() {
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 1000);
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
  },
  watch: {
    rowData: {
      handler() {
        this.tooltipShuffling();
        this.drawWidth();
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/CylindricalPlot.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_CylindricalPlotvue_type_script_lang_js = (CylindricalPlotvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/CylindricalPlot.vue?vue&type=style&index=0&id=7322b608&prod&lang=less&scoped=true
var CylindricalPlotvue_type_style_index_0_id_7322b608_prod_lang_less_scoped_true = __webpack_require__("8055");

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/CylindricalPlot.vue






/* normalize component */

var CylindricalPlot_component = Object(componentNormalizer["a" /* default */])(
  _01_CylindricalPlotvue_type_script_lang_js,
  CylindricalPlotvue_type_template_id_7322b608_scoped_true_render,
  CylindricalPlotvue_type_template_id_7322b608_scoped_true_staticRenderFns,
  false,
  null,
  "7322b608",
  null
  
)

/* harmony default export */ var CylindricalPlot = (CylindricalPlot_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/01-单柱图/BarChart3D.vue?vue&type=template&id=525a1cec&scoped=true
var BarChart3Dvue_type_template_id_525a1cec_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "chart",
    staticClass: "bar-chart",
    style: {
      width: _vm.width,
      height: _vm.height
    },
    on: {
      "mousemove": _vm.mousemove,
      "mouseleave": _vm.mouseleave
    }
  });
};
var BarChart3Dvue_type_template_id_525a1cec_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/BarChart3D.vue?vue&type=template&id=525a1cec&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/01-单柱图/BarChart3D.vue?vue&type=script&lang=js


/* harmony default export */ var BarChart3Dvue_type_script_lang_js = ({
  props: {
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    xtype: {
      type: String,
      default: 'category'
    },
    ytype: {
      type: String,
      default: 'value'
    },
    maxData: {
      type: Number,
      default: 300
    },
    coloreBarChart: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#F496AA', '#71C6FF', '#FFE595', '#4BD3B4'];
      }
    },
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '语文',
          value: 60
        }, {
          name: '数学',
          value: 30
        }, {
          name: '英语',
          value: 80
        }, {
          name: '物理',
          value: 40
        }, {
          name: '化学',
          value: 55
        }];
      }
    },
    chartStylr: {
      type: Object,
      default: () => {
        return {
          unit: '单位：人次',
          barWidth: 20
        };
      }
    },
    gridData: {
      type: Object,
      default: () => {
        return {
          top: '18%',
          bottom: '20%',
          left: '10%',
          right: '10%'
        };
      }
    }
  },
  data() {
    return {
      chartInst: null,
      option: {},
      setTime: null
    };
  },
  methods: {
    instantiation() {
      let that = this;
      this.chartInst = echarts["init"](this.$refs.chart);
      this.option = {
        tooltip: {
          show: true,
          trigger: 'axis',
          formatter: function (params) {
            const item = params[2];
            return item.name + ' : ' + item.value;
          },
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        grid: this.gridData,
        xAxis: {
          type: this.xtype,
          data: [],
          axisLine: {
            show: false,
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 16,
            margin: 15,
            interval: 0
          }
        },
        yAxis: {
          show: false,
          type: this.ytype,
          name: this.chartStylr.unit,
          // max: this.maxData,
          nameTextStyle: {
            fontSize: 14,
            padding: [0, 0, 0, 35] // 四个数字分别为上右下左与原位置距离
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          axisLabel: {
            fontSize: 12,
            interval: 0
          },
          splitArea: {
            show: false,
            areaStyle: {
              color: ['rgba(255,255,255,0.1)', 'rgba(238,238,238,0)']
            }
          }
        },
        series: [{
          data: [],
          avoidLabelOverlap: false,
          type: 'bar',
          barWidth: 35,
          barMaxWidth: 'auto',
          itemStyle: {
            // color: {
            //   x: 0,
            //   y: 0,
            //   x2: 0,
            //   y2: 1,
            //   type: 'linear',
            //   global: false,
            //   colorStops: [
            //     {
            //       offset: 0,
            //       color: 'rgba(76, 228, 230, 0.7)'
            //     },
            //     {
            //       offset: 1,
            //       color: 'rgba(24, 134, 144, 1)'
            //     }
            //   ]
            // }

            color: function (params) {
              return that.coloreBarChart[params.dataIndex];
              // var num = that.coloreBarChart.length
              // return that.coloreBarChart[params.dataIndex % num]
            }
          },
          label: {
            show: true,
            position: 'top',
            distance: 10,
            color: '#EBEBF9',
            fontFamily: '腾祥智黑简',
            fontSize: 24,
            formatter: function (p) {
              return p.data + '%';
            }
          }
        }, {
          data: [],
          //底部三角
          type: 'pictorialBar',
          barMaxWidth: '20',
          itemStyle: {
            color: function (params) {
              return that.coloreBarChart[params.dataIndex];
              // var num = that.coloreBarChart.length
              // return that.coloreBarChart[params.dataIndex % num]
            }
          },
          symbol: 'diamond',
          symbolOffset: [0, '50%'],
          symbolSize: [35, 15]
        }, {
          data: [],
          //数据上部分
          type: 'pictorialBar',
          barMaxWidth: '20',
          symbolPosition: 'end',
          symbol: 'diamond',
          symbolOffset: [0, '-50%'],
          symbolSize: [35, 15],
          zlevel: 2,
          itemStyle: {
            color: function (params) {
              return that.coloreBarChart[params.dataIndex];
              // var num = that.coloreBarChart.length
              // return that.coloreBarChart[params.dataIndex % num]
            }
          }
        }, {
          data: [],
          //背景阴影
          type: 'bar',
          barMaxWidth: 'auto',
          barWidth: 35,
          barGap: '-100%',
          zlevel: -1,
          itemStyle: {
            color: function (params) {
              return that.coloreBarChart[params.dataIndex] + '60';
              // var num = that.coloreBarChart.length
              // return that.coloreBarChart[params.dataIndex % num]
            }
          }
        }, {
          data: [],
          //顶部三角
          type: 'pictorialBar',
          barMaxWidth: '20',
          symbolPosition: 'end',
          symbol: 'diamond',
          symbolOffset: [0, '-50%'],
          symbolSize: [35, 15],
          itemStyle: {
            color: function (params) {
              return that.coloreBarChart[params.dataIndex] + '60';
              // var num = that.coloreBarChart.length
              // return that.coloreBarChart[params.dataIndex % num]
            }
          },
          zlevel: -1
        }]
      };
    },
    rowDataChart() {
      let name = [];
      let value = [];
      // let rate = []
      let botData = [];
      let sum = 0;
      let n = 0; // eslint-disable-line no-unused-vars
      let topData = [];
      this.rowData.forEach(val => {
        n += Number(val.value);
        name.push(val['name']);
        value.push(val['value']);
        botData.push(1); // 底数小三角
        if (val.value > sum) {
          sum = val.value;
        }
      });
      this.rowData.forEach(() => {
        topData.push(sum + 20); //背景柱子数据
        // value.push(((it.value / n)*100).toFixed(0))
      });
      this.option.xAxis.data = name;
      this.option.series[0].data = value;
      this.option.series[1].data = botData;
      this.option.series[2].data = value;
      this.option.series[3].data = topData;
      this.option.series[4].data = topData;
      this.chartInst.setOption(this.option, true);
    },
    tooltipShuffling() {
      //
      clearInterval(this.setTime);
      let count = 0;
      this.setTime = setInterval(() => {
        if (count == this.rowData.length) {
          count = 0;
        }
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count
        });
        count++;
      }, 3000);
    },
    noDataShow() {
      this.chartInst = echarts["init"](this.$refs.chart);
      this.chartInst.setOption({
        backgroundColor: 'rgba(255,255,255,.03)',
        title: {
          text: `暂无数据`,
          show: true,
          textStyle: {
            align: 'center',
            color: '#fff',
            fontSize: 32
          },
          top: 'center',
          left: 'center'
        }
      });
    },
    mousemove() {
      clearInterval(this.setTime);
    },
    mouseleave() {
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.rowData.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 2000);
    }
  },
  mounted() {
    if (!this.rowData.length) {
      this.noDataShow();
      return;
    }
    this.instantiation();
    this.rowDataChart();
    this.mousemove();
    this.mouseleave();
    // this.tooltipShuffling()
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    echarts["init"](this.$refs.chart).dispose();
  },
  watch: {
    rowData: {
      handler(newV) {
        if (!newV.length) {
          this.noDataShow();
          return;
        }
        this.instantiation();
        this.rowDataChart();
        // this.tooltipShuffling()
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/BarChart3D.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_BarChart3Dvue_type_script_lang_js = (BarChart3Dvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/01-单柱图/BarChart3D.vue





/* normalize component */

var BarChart3D_component = Object(componentNormalizer["a" /* default */])(
  _01_BarChart3Dvue_type_script_lang_js,
  BarChart3Dvue_type_template_id_525a1cec_scoped_true_render,
  BarChart3Dvue_type_template_id_525a1cec_scoped_true_staticRenderFns,
  false,
  null,
  "525a1cec",
  null
  
)

/* harmony default export */ var BarChart3D = (BarChart3D_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/03-堆叠主图/HengTwoBarCharts.vue?vue&type=template&id=a94afc4a&scoped=true
var HengTwoBarChartsvue_type_template_id_a94afc4a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  }), _vm.legIsShow ? _c('ul', {
    staticClass: "legth",
    style: {
      top: _vm.legTop,
      left: _vm.legLeft
    }
  }, _vm._l(_vm.legthWZ, function (item, i) {
    return _c('li', {
      key: i
    }, [_c('h3', {
      style: {
        backgroundColor: _vm.legthColor[i]
      }
    }), _c('span', [_vm._v(_vm._s(item))])]);
  }), 0) : _vm._e()]);
};
var HengTwoBarChartsvue_type_template_id_a94afc4a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/03-堆叠主图/HengTwoBarCharts.vue?vue&type=template&id=a94afc4a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/03-堆叠主图/HengTwoBarCharts.vue?vue&type=script&lang=js

/* harmony default export */ var HengTwoBarChartsvue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '0601',
          value: '10',
          item: '30',
          val: '20'
        }, {
          name: '0602',
          value: '20',
          item: '30',
          val: '40'
        }, {
          name: '0603',
          value: '50',
          item: '30',
          val: '10'
        }, {
          name: '0604',
          value: '20',
          item: '30',
          val: '40'
        }, {
          name: '0605',
          value: '30',
          item: '45',
          val: '32'
        }, {
          name: '0606',
          value: '45',
          item: '32',
          val: '10'
        }, {
          name: '0607',
          value: '12',
          item: '45',
          val: '21'
        }, {
          name: '0608',
          value: '23',
          item: '23',
          val: '45'
        }];
      }
    },
    h3Style: {
      type: Object,
      default: () => {
        return {};
      }
    },
    barColor: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#F496AA', '#FFE595', '#FFE595', '#71C6FF', '#71C6FF'];
      }
    },
    legthColor: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#FFE595', '#71C6FF'];
      }
    },
    legthWZ: {
      type: Array,
      default: () => {
        return ['利用率', '废弃率', '使用率'];
      }
    },
    unit: {
      type: String,
      default: () => {
        return '%';
      }
    },
    barWidth: {
      type: [String, Number],
      default: () => {
        return '22';
      }
    },
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    legTop: {
      type: String,
      default: () => {
        return '10px';
      }
    },
    legLeft: {
      type: String,
      default: () => {
        return '200px';
      }
    },
    legIsShow: {
      type: Boolean,
      default: () => {
        return true;
      }
    }
  },
  data() {
    return {
      Xdata: [],
      Ydata: [],
      valTwo: [],
      valThree: [],
      setTime: null,
      chartInst: null
    };
  },
  mounted() {
    // this.getData();
    if (this.rowData && this.rowData.length > 0) {
      this.rowData.forEach(item => {
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
        this.valThree.push(item.val);
      });
    }
    this.drawWidth();
    this.tooltipShuffling();
  },
  methods: {
    drawWidth() {
      // 基于准备好的dom，初始化echarts实例
      this.chartInst = this.$echarts.init(this.$refs.myChart);
      this.chartInst.setOption({
        // color: "#00BFFF",
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'value',
          data: this.Xdata,
          // axisTick: {
          //   alignWithLabel: true
          // },
          axisLabel: {
            //x轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 16,
              fontFamily: 'PingFang'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 1.2 //这里是为了突出显示加上的
            }
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#8A9EB5'],
              width: 1,
              type: 'solid'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(14,29,52,0.2)', 'rgba(191,235,255,0.1)']
            }
          }
        }],
        yAxis: [{
          data: this.Xdata,
          name: `单位:${this.unit}`,
          position: 'top',
          type: 'category',
          inverse: true,
          axisTick: {
            show: false,
            alignWithLabel: true
          },
          // position: "top",
          nameTextStyle: {
            color: '#BFEBFF',
            fontSize: 16,
            padding: [-260, 4, 5, 6],
            fontFamily: 'PingFang'
          },
          axisLabel: {
            //y轴文字的配置
            textStyle: {
              color: '#BFEBFF',
              fontSize: 16,
              fontFamily: 'Helvetica'
            }
          },
          splitNumber: 2,
          // 设置y轴线条的粗细
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#8A9EB5'],
              width: 1,
              type: 'solid'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#9FAFB5',
              width: 1.2 //这里是为了突出显示加上的
            }
          }
        }],
        series: [{
          // name: "直接访问",
          type: 'bar',
          barWidth: this.barWidth,
          data: this.Ydata,
          stack: 'total',
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: this.barColor[0]
              }, {
                offset: 1,
                color: this.barColor[1]
              }])
            }
          }
        }, {
          // name: "直接访问",
          type: 'bar',
          barWidth: this.barWidth,
          data: this.valTwo,
          stack: 'total',
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: this.barColor[2]
              }, {
                offset: 1,
                color: this.barColor[3]
              }])
            }
          }
        }, {
          // name: "直接访问",
          type: 'bar',
          barWidth: this.barWidth,
          data: this.valThree,
          stack: 'total',
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: this.barColor[4]
              }, {
                offset: 1,
                color: this.barColor[5]
              }])
            }
          }
        }]
      });
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;

        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 2000);
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    this.setTime = null;
    this.chartInst.dispose();
  },
  watch: {
    rowData: {
      handler() {
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.valThree = [];
        this.rowData.forEach(item => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
          this.valThree.push(item.val);
        });
        this.tooltipShuffling();
        this.drawWidth();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/03-堆叠主图/HengTwoBarCharts.vue?vue&type=script&lang=js
 /* harmony default export */ var _03_HengTwoBarChartsvue_type_script_lang_js = (HengTwoBarChartsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/02-柱图/03-堆叠主图/HengTwoBarCharts.vue?vue&type=style&index=0&id=a94afc4a&prod&lang=less&scoped=true
var HengTwoBarChartsvue_type_style_index_0_id_a94afc4a_prod_lang_less_scoped_true = __webpack_require__("b5ca");

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/03-堆叠主图/HengTwoBarCharts.vue






/* normalize component */

var HengTwoBarCharts_component = Object(componentNormalizer["a" /* default */])(
  _03_HengTwoBarChartsvue_type_script_lang_js,
  HengTwoBarChartsvue_type_template_id_a94afc4a_scoped_true_render,
  HengTwoBarChartsvue_type_template_id_a94afc4a_scoped_true_staticRenderFns,
  false,
  null,
  "a94afc4a",
  null
  
)

/* harmony default export */ var HengTwoBarCharts = (HengTwoBarCharts_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/09-蝴蝶柱图/CycloneChart.vue?vue&type=template&id=2d120cea&scoped=true
var CycloneChartvue_type_template_id_2d120cea_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "cyclone_chart"
  }, [_c('div', {
    ref: "chart",
    staticClass: "bar-chart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  }), _c('ul', {
    staticClass: "center"
  }, _vm._l(_vm.centerCon, function (item, index) {
    return _c('li', {
      key: index
    }, [_vm._v(_vm._s(item))]);
  }), 0), _c('ul', {
    staticClass: "Unit"
  }, _vm._l(_vm.units, function (item, index) {
    return _c('li', {
      key: index
    }, [_vm._v("单位:" + _vm._s(item))]);
  }), 0)]);
};
var CycloneChartvue_type_template_id_2d120cea_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/09-蝴蝶柱图/CycloneChart.vue?vue&type=template&id=2d120cea&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/09-蝴蝶柱图/CycloneChart.vue?vue&type=script&lang=js


/* harmony default export */ var CycloneChartvue_type_script_lang_js = ({
  props: {
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    xtype: {
      type: String,
      default: 'category'
    },
    ytype: {
      type: String,
      default: 'value'
    },
    units: {
      type: Array,
      default: () => {
        return ['户', '户'];
      }
    },
    centerCon: {
      type: Array,
      default: () => {
        return ['新办户', '注销户'];
      }
    },
    maxData: {
      type: Number,
      default: 100
    },
    coloreBarChart: {
      type: Array,
      default: () => {
        return [{
          start: '#FFDF80',
          end: '#FFD24D'
        }, {
          start: '#00BFFF',
          end: '#51D3FF'
        }];
      }
    },
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '1月',
          value: 22,
          item: 23
        }, {
          name: '2月',
          value: 32,
          item: 53
        }, {
          name: '3月',
          value: 42,
          item: 43
        }, {
          name: '4月',
          value: 52,
          item: 33
        }, {
          name: '5月',
          value: 32,
          item: 23
        }];
      }
    },
    chartStylr: {
      type: Object,
      default: () => {
        return {
          unit: '单位：人次',
          barWidth: 20
        };
      }
    }
  },
  data() {
    return {
      chartInst: null,
      option: {},
      setTime: null,
      setTimeRight: null,
      Xdata: [],
      Ydata: [],
      valTwo: []
    };
  },
  methods: {
    instantiation() {
      // let timeLineData = [1];
      this.chartInst = echarts["init"](this.$refs.chart);
      this.option = {
        baseOption: {
          timeline: {
            show: false,
            top: 0,
            data: []
          },
          tooltip: {
            trigger: 'axis',
            show: true,
            axisPointer: {
              type: 'cross',
              // animation: true,
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          grid: [{
            show: false,
            left: '5%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '37%'
          }, {
            show: false,
            left: '53%',
            top: '6%',
            bottom: '19%',
            width: '0%'
          }, {
            show: false,
            right: '2%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '37%'
          }],
          xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
              lineStyle: {
                color: '#BFEBFF',
                fontSize: 22
              }
            },
            axisTick: {
              show: false
            },
            // position: "bottom",
            axisLabel: {
              show: true,
              fontSize: 16,
              interval: 0,
              color: '#BFEBFF'
            },
            splitLine: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(255,255,255,0.1)', 'rgba(238,238,238,0)']
              }
            }
          }, {
            gridIndex: 1,
            show: false
          }, {
            gridIndex: 2,
            axisLine: {
              lineStyle: {
                color: '#BFEBFF'
              }
            },
            axisTick: {
              show: false
            },
            position: 'bottom',
            axisLabel: {
              show: true,
              fontSize: 16,
              interval: 0,
              color: '#BFEBFF'
            },
            splitLine: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ['rgba(255,255,255,0.1)', 'rgba(238,238,238,0)']
              }
            }
          }],
          yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            data: this.Xdata
          }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            nameTextStyle: {
              color: '#BFEBFF',
              fontSize: 22,
              padding: 2,
              fontFamily: 'PingFang SC'
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: true,
              padding: [30, 0, 0, 0],
              textStyle: {
                color: '#ffffff',
                fontSize: 20
              },
              align: 'center'
            },
            data: this.Xdata
          }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            data: this.Xdata
          }],
          series: []
        },
        options: []
      };
      // this.option.baseOption.timeline.data.push(timeLineData[0]);
      this.option.options.push({
        series: [{
          name: '2017',
          type: 'bar',
          barWidth: 25,
          itemStyle: {
            normal: {
              color: new echarts["graphic"].LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: this.coloreBarChart[0].start
              }, {
                offset: 1,
                color: this.coloreBarChart[0].end
              }])
            }
            // emphasis: {
            //   color: "#fe89ff" // 高亮状态下柱条颜色
            // }
          },
          label: {
            normal: {
              show: false
            }
          },
          data: this.Ydata,
          animationEasing: 'elasticOut'
        }, {
          name: '2018',
          type: 'bar',
          barWidth: this.chartStylr.barWidth,
          xAxisIndex: 2,
          yAxisIndex: 2,
          itemStyle: {
            normal: {
              color: new echarts["graphic"].LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: this.coloreBarChart[1].start
              }, {
                offset: 1,
                color: this.coloreBarChart[1].end
              }])
            }
            // emphasis: {
            //   color: "#fe89ff" // 高亮状态下柱条颜色
            // }
          },
          label: {
            normal: {
              show: false
            }
          },
          data: this.valTwo,
          animationEasing: 'elasticOut'
        }]
      });
      this.chartInst.setOption(this.option, true);
      //设置默认选中高亮部分
      this.chartInst.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: 0
      }); //鼠标进
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: [0, 1],
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: [0],
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'highlight',
          seriesIndex: [0, 1],
          dataIndex: currentIndex
        });
      }, 1000);
    },
    tooltipShufflingright() {
      clearInterval(this.setTimeRight);
      var currentIndex = 1;
      this.setTimeRight = setInterval(() => {
        var dataLen = this.Ydata.length;
        // 取消之前高亮的图形
        this.chartInst.dispatchAction({
          type: 'downplay',
          seriesIndex: 1,
          //表示series中的第几个data数据循环展示
          dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 1,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.chartInst.dispatchAction({
          type: 'highlight',
          seriesIndex: 1,
          dataIndex: currentIndex
        });
      }, 1000);
    }
  },
  mounted() {
    if (this.rowData && this.rowData.length > 0) {
      this.Xdata = [];
      this.Ydata = [];
      this.valTwo = [];
      this.rowData.forEach(item => {
        // .reverse()
        this.Xdata.push(item.name);
        this.Ydata.push(item.value);
        this.valTwo.push(item.item);
      });
    }
    this.instantiation();
    // this.tooltipShuffling();
    // this.tooltipShufflingright();
  },
  beforeDestroy() {
    echarts["init"](this.$refs.chart).dispose();
  },
  watch: {
    rowData: {
      handler() {
        this.Xdata = [];
        this.Ydata = [];
        this.valTwo = [];
        this.rowData.forEach(item => {
          this.Xdata.push(item.name);
          this.Ydata.push(item.value);
          this.valTwo.push(item.item);
        });
        this.instantiation();
        // this.tooltipShuffling();
        // this.tooltipShufflingright();
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/09-蝴蝶柱图/CycloneChart.vue?vue&type=script&lang=js
 /* harmony default export */ var _09_CycloneChartvue_type_script_lang_js = (CycloneChartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/02-柱图/09-蝴蝶柱图/CycloneChart.vue?vue&type=style&index=0&id=2d120cea&prod&lang=less&scoped=true
var CycloneChartvue_type_style_index_0_id_2d120cea_prod_lang_less_scoped_true = __webpack_require__("ac17");

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/09-蝴蝶柱图/CycloneChart.vue






/* normalize component */

var CycloneChart_component = Object(componentNormalizer["a" /* default */])(
  _09_CycloneChartvue_type_script_lang_js,
  CycloneChartvue_type_template_id_2d120cea_scoped_true_render,
  CycloneChartvue_type_template_id_2d120cea_scoped_true_staticRenderFns,
  false,
  null,
  "2d120cea",
  null
  
)

/* harmony default export */ var CycloneChart = (CycloneChart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/10-Svg气泡柱图/BubbleBar.vue?vue&type=template&id=5a04d2f4&scoped=true
var BubbleBarvue_type_template_id_5a04d2f4_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    ref: "chart",
    staticClass: "bar-chart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  });
};
var BubbleBarvue_type_template_id_5a04d2f4_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/10-Svg气泡柱图/BubbleBar.vue?vue&type=template&id=5a04d2f4&scoped=true

// EXTERNAL MODULE: ./src/components/Chart Library/02-柱图/10-Svg气泡柱图/60x80.png
var _60x80 = __webpack_require__("1c62");
var _60x80_default = /*#__PURE__*/__webpack_require__.n(_60x80);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/02-柱图/10-Svg气泡柱图/BubbleBar.vue?vue&type=script&lang=js



/* harmony default export */ var BubbleBarvue_type_script_lang_js = ({
  props: {
    width: {
      type: String,
      default: () => {
        return '736px';
      }
    },
    height: {
      type: String,
      default: () => {
        return '360px';
      }
    },
    xtype: {
      type: String,
      default: 'category'
    },
    ytype: {
      type: String,
      default: 'value'
    },
    maxData: {
      type: Number,
      default: 300
    },
    coloreBarChart: {
      type: Array,
      default: () => {
        return ['#F496AA', '#89AAFF'];
      }
    },
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '0601',
          value: '10'
        }, {
          name: '0602',
          value: '20'
        }, {
          name: '0603',
          value: '50'
        }, {
          name: '0604',
          value: '20'
        }, {
          name: '0605',
          value: '30'
        }, {
          name: '0606',
          value: '45'
        }, {
          name: '0607',
          value: '12'
        }, {
          name: '0608',
          value: '23'
        }];
      }
    },
    chartStylr: {
      type: Object,
      default: () => {
        return {
          unit: '单位：人次',
          barWidth: 30
        };
      }
    },
    gridData: {
      type: Object,
      default: () => {
        return {
          top: '20%',
          bottom: '13%',
          left: '10%',
          right: '10%'
        };
      }
    },
    // 参考echarts官网配置
    animateAttr: {
      type: Object,
      default: () => ({
        attributeName: 'y',
        dur: '500ms',
        to: '-80',
        repeatCount: 'indefinite'
      })
    }
  },
  data() {
    return {
      chartInst: null,
      option: {},
      setTime: null
    };
  },
  methods: {
    instantiation() {
      this.chartInst = echarts["init"](this.$refs.chart, {}, {
        renderer: 'svg'
      });
      this.option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            animation: false,
            label: {
              backgroundColor: '#505765'
            }
          }
        },
        aria: {
          enabled: true,
          decal: {
            show: true,
            decals: {
              symbol: `image://${_60x80_default.a}`,
              dashArrayX: 30,
              dashArrayY: 60,
              maxTileWidth: 20,
              maxTileHeight: 80
            }
          }
        },
        grid: this.gridData,
        xAxis: {
          type: this.xtype,
          data: [],
          axisLine: {
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 14,
            interval: 0
          }
        },
        yAxis: {
          type: this.ytype,
          name: this.chartStylr.unit,
          // max: this.maxData,
          nameTextStyle: {
            fontSize: 14,
            padding: [0, 0, 0, 35] // 四个数字分别为上右下左与原位置距离
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          axisLabel: {
            fontSize: 14,
            interval: 0
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(255,255,255,0.1)', 'rgba(238,238,238,0)']
            }
          }
        },
        series: [{
          data: [],
          avoidLabelOverlap: false,
          type: 'bar',
          barWidth: this.chartStylr.barWidth,
          itemStyle: {
            color: new echarts["graphic"].LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: this.coloreBarChart[0]
            }, {
              offset: 1,
              color: this.coloreBarChart[1]
            }])
          }
        }]
      };
    },
    rowDataChart() {
      let name = [];
      let value = [];
      this.rowData.forEach(val => {
        name.push(val['name']);
        value.push(val['value']);
      });
      this.option.xAxis.data = name;
      this.option.series[0].data = value;
      this.chartInst.setOption(this.option, true);
    },
    runAnimate() {
      const animateDom = document.createElement('animate');
      let animateAttr = {
        attributeName: 'y',
        dur: '500ms',
        to: '-80',
        repeatCount: 'indefinite'
      };
      Object.assign(animateAttr, this.animateAttr);
      for (let key in animateAttr) {
        animateDom.setAttribute(key, animateAttr[key]);
      }
      const pattern = this.$el.querySelector('pattern');
      pattern === null || pattern === void 0 || pattern.prepend(animateDom);
      const defsDom = this.$el.querySelector('defs');
      let ani = defsDom.innerHTML;
      defsDom.innerHTML = ani;
    },
    tooltipShuffling() {
      //
      clearInterval(this.setTime);
      let count = 0;
      this.setTime = setInterval(() => {
        if (count == this.rowData.length) {
          count = 0;
        }
        this.chartInst.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: count
        });
        count++;
      }, 2000);
    }
  },
  mounted() {
    this.instantiation();
    this.rowDataChart();
    this.runAnimate();
    this.tooltipShuffling();
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    echarts["init"](this.$refs.chart).dispose();
  },
  watch: {
    rowData: {
      handler() {
        this.instantiation();
        this.rowDataChart();
        this.runAnimate();
        this.tooltipShuffling();
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/10-Svg气泡柱图/BubbleBar.vue?vue&type=script&lang=js
 /* harmony default export */ var _10_Svg_BubbleBarvue_type_script_lang_js = (BubbleBarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Chart Library/02-柱图/10-Svg气泡柱图/BubbleBar.vue





/* normalize component */

var BubbleBar_component = Object(componentNormalizer["a" /* default */])(
  _10_Svg_BubbleBarvue_type_script_lang_js,
  BubbleBarvue_type_template_id_5a04d2f4_scoped_true_render,
  BubbleBarvue_type_template_id_5a04d2f4_scoped_true_staticRenderFns,
  false,
  null,
  "5a04d2f4",
  null
  
)

/* harmony default export */ var BubbleBar = (BubbleBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/Zhutu.vue?vue&type=script&lang=js










/* harmony default export */ var Zhutuvue_type_script_lang_js = ({
  name: 'App',
  components: {
    DuoZhuTu2: DuoZhuTu2,
    PictorialSingleBar: PictorialSingleBar,
    DuoZhuTu: DuoZhuTu,
    StackDuoZhuTu: StackDuoZhuTu,
    CylindricalPlot: CylindricalPlot,
    BarChart3D: BarChart3D,
    HengTwoBarCharts: HengTwoBarCharts,
    CycloneChart: CycloneChart,
    BubbleBar: BubbleBar
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    copyImportedFileContent(val) {
      axios_default.a.get(`./data/柱图/文本/${val}.txt`).then(res => {
        // 获取要复制的内容
        var textArea = document.createElement('textarea');
        textArea.value = res.data;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        // 提示复制成功
        alert('内容已复制到剪贴板');
      }).catch(err => {
        console.error('加载文件失败：', err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/ChartLibraryView/Zhutu.vue?vue&type=script&lang=js
 /* harmony default export */ var ChartLibraryView_Zhutuvue_type_script_lang_js = (Zhutuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/views/ChartLibraryView/Zhutu.vue?vue&type=style&index=0&id=9141dba6&prod&lang=less&scoped=true
var Zhutuvue_type_style_index_0_id_9141dba6_prod_lang_less_scoped_true = __webpack_require__("8f33");

// CONCATENATED MODULE: ./src/views/ChartLibraryView/Zhutu.vue






/* normalize component */

var Zhutu_component = Object(componentNormalizer["a" /* default */])(
  ChartLibraryView_Zhutuvue_type_script_lang_js,
  Zhutuvue_type_template_id_9141dba6_scoped_true_render,
  Zhutuvue_type_template_id_9141dba6_scoped_true_staticRenderFns,
  false,
  null,
  "9141dba6",
  null
  
)

/* harmony default export */ var Zhutu = (Zhutu_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/pieChart.vue?vue&type=template&id=23cccdc2&scoped=true
var pieChartvue_type_template_id_23cccdc2_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "zt"
  }, [_c('div', {
    staticClass: "picBox"
  }, [_c('div', [_c('ChartPie', {
    attrs: {
      "width": '280px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('ChartPie');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('locaLoopChart', {
    attrs: {
      "width": '280px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('locaLoopChart');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticClass: "fgx"
  }), _c('div', {
    staticStyle: {
      "margin-top": "-30px"
    }
  }, [_c('DeiFenHuan', {
    attrs: {
      "width": '280px',
      "height": '200px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('DeiFenHuan');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticStyle: {
      "margin-top": "-30px"
    }
  }, [_c('roseCharts', {
    attrs: {
      "width": '300px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('roseCharts');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticClass: "fgx"
  }), _c('div', [_c('DoughnutChart', {
    attrs: {
      "width": '300px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    staticStyle: {
      "margin-top": "-50px"
    },
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('DoughnutChart');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div')])]);
};
var pieChartvue_type_template_id_23cccdc2_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ChartLibraryView/pieChart.vue?vue&type=template&id=23cccdc2&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/03-玫瑰图/roseCharts.vue?vue&type=template&id=e902b00a&scoped=true
var roseChartsvue_type_template_id_e902b00a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "box"
  }, [_c('div', {
    ref: "NightingaleEcharts",
    style: {
      width: _vm.width,
      height: _vm.height
    },
    attrs: {
      "id": "NightingaleEcharts"
    }
  }), _vm.displayModel == 1 ? _c('div', {
    staticClass: "rose_legend"
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend"
    }, [_c('div', {
      staticClass: "legend_color",
      style: {
        backgroundColor: _vm.pieceColor[index]
      }
    }), 0 ? undefined : _vm._e(), _c('div', {
      staticClass: "legend_name"
    }, [_vm._v(_vm._s(item.name))]), 0 ? undefined : _vm._e(), _c('div', {
      staticClass: "legend_value",
      style: {
        color: _vm.pieceColor[index]
      }
    }, [_vm._v(_vm._s(item.num))]), 0 ? undefined : _vm._e(), 0 ? undefined : _vm._e()]);
  }), 0) : _vm._e(), _vm.displayModel == 2 ? _c('div', {
    staticClass: "bottomrose_legend"
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend"
    }, [_c('div', {
      staticClass: "legend_color",
      style: {
        backgroundColor: _vm.pieceColor[index]
      }
    }), 0 ? undefined : _vm._e(), _c('div', {
      staticClass: "legend_name"
    }, [_vm._v(_vm._s(item.name))]), 0 ? undefined : _vm._e(), 0 ? undefined : _vm._e(), 0 ? undefined : _vm._e(), 0 ? undefined : _vm._e()]);
  }), 0) : _vm._e()]);
};
var roseChartsvue_type_template_id_e902b00a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/03-玫瑰图/roseCharts.vue?vue&type=template&id=e902b00a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/03-玫瑰图/roseCharts.vue?vue&type=script&lang=js

/* harmony default export */ var roseChartsvue_type_script_lang_js = ({
  name: 'NightingaleEcharts',
  props: {
    title: {
      type: String
    },
    width: {
      type: String,
      default: '500px'
    },
    height: {
      type: String,
      default: '500px'
    },
    //数据
    rowData: {
      type: Array,
      default: () => {
        return [{
          category: '类型1',
          value: 20
        }, {
          category: '类型2',
          value: 30
        }, {
          category: '类型3',
          value: 40
        }, {
          category: '类型4',
          value: 50
        }];
      }
    },
    //图表颜色
    pieceColor: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#F496AA', '#71C6FF', '#FFE595', '#051839', '#E6C84F'];
      }
    },
    //图表位置
    location: {
      type: Array,
      default: () => {
        return ['100%', '55%'];
      }
    },
    //图表半径
    EchartRadius: {
      type: Array,
      default: () => {
        return [50, 100];
      }
    },
    displayModel: {
      type: [String, Number],
      default: () => {
        return 1;
      }
    }
  },
  data() {
    return {
      option: {
        //title图的标题，副标题，以及位置设置
        title: {
          show: false,
          text: '南丁格尔玫瑰图',
          subtext: '纯属虚构',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          show: false
          //提示框的数据样式显示
        },
        //图例相关内容的说明

        legend: {
          show: false,
          x: 'left',
          y: 'center',
          //图例的排列默认属性是：水平或垂直,默认是：水平

          orient: 'vertical'

          // data: ['北京', '上海', '广州', '福建', '厦门', '武汉', '青岛', '南京']
        },
        /*
         * toolbox为工具栏；提供导出图片，数据转化，动态数据等信息
         * 保存图片
         */

        toolbox: {
          show: false //是否显示工具栏组件
        },
        calculable: false,
        //手柄拖拽调整选中的范围

        series: [{
          name: this.title,
          type: 'pie',
          radius: this.EchartRadius,
          color: this.pieceColor,
          center: this.location,
          roseType: 'radius',
          width: '40%',
          // for funnel

          max: 140,
          // for funnel

          itemStyle: {
            //普通样式设置
            normal: {
              label: {
                show: false
              },
              labelLine: {
                show: false
              }
            },
            //高亮样式设置
            emphasis: {
              label: {
                show: true
              },
              labelLine: {
                show: true
              }
            }
          },
          data: this.rowData
        }]
      },
      ind: 0,
      loopData: [],
      num: 0,
      sum: 0,
      //当前选中的value
      selectedSeries: {
        category: '',
        value: '',
        sum: ''
      }
    };
  },
  methods: {
    initEcharts() {
      let that = this;
      this.myChart = that.$echarts.init(that.$refs.NightingaleEcharts);
      this.loopData = this.convertData(this.rowData, this.legends);
      console.log(this.loopData);
      this.option.series[0].data = this.loopData;
      this.carousel();
      this.myChart.setOption(that.option);
    },
    //value转换
    convertData(rowData) {
      this.sum = 0;
      let returnData = [];
      rowData.forEach(d => {
        this.sum += d.value;
        returnData.push({
          value: d.value,
          name: d.category
          // itemStyle: {
          //   color: legends[d.category]
          // }
        });
      });
      returnData.forEach(d => {
        d.num = this.sum == 0 ? '0' : (d.value / this.sum * 100).toFixed(3) + '%';
      });
      //进度条模式时 倒序排序
      if (this.displayModel == 100) {
        returnData.sort((a, b) => {
          return b.value - a.value;
        });
      }
      //增加千分位
      if (this.displayModel == 2) {
        let re = /(?=(?!(\b))(\d{3})+$)/g;
        returnData.forEach(r => {
          r.value = String(r.value).replace(re, ',');
        });
      }
      return returnData;
    },
    setTimeToDo() {
      const data = this.option.series[0].data;
      data.forEach(e => e.selected = false);
      data[this.num].selected = true;
      this.selectedSeries.category = data[this.num].name;
      // 计算百分比的一个
      this.selectedSeries.value = data[this.num].num;
      // this.selectedSeries =data[this.num]
      // 必须重新设置option，因为echart没有监听data的变化
      this.myChart.setOption(this.option);
    },
    setHighLight() {
      clearInterval(this.timer);
      const data = this.option.series[0].data;
      this.timer = setInterval(() => {
        if (this.num < data.length - 1) {
          this.num++;
        } else {
          this.num = 0;
        }
        this.setTimeToDo();
      }, 1000);
    },
    //轮播
    carousel() {
      if (this.option.series[0].data.length > 0) {
        //开启定时器
        this.setTimeToDo();
        this.setHighLight();
        this.myChart.on('mouseover', params => {
          clearInterval(this.timer);
          // 鼠标快速移动时，会导致mouseover里的代码来不及执行，引起事件延迟，出现多个扇形区域同时被选中的现象，所以有必要设置防抖函数
          this.debounce && clearTimeout(this.debounce);
          this.debounce = setTimeout(() => {
            const data = this.option.series[0].data;
            data.forEach(e => e.selected = false);
            data[params.dataIndex].selected = true;
            this.myChart.setOption(this.option);
            this.num = params.dataIndex;
          }, 300);
        });
        this.myChart.on('mouseout', () => {
          this.setTimeToDo();
          this.setHighLight();
        });
      }
    }
  },
  mounted() {
    if (this.rowData && this.rowData.length > 0) {
      this.initEcharts();
    }
  },
  destroyed() {
    this.timer && clearInterval(this.timer);
    this.debounce && clearTimeout(this.debounce);
  },
  watch: {
    rowData: {
      handler(neVal) {
        let that = this;
        this.option.series[0].data = [];
        this.loopData = this.convertData(neVal, this.legends);
        this.option.series[0].data = this.loopData;
        this.$nextTick(() => {
          let chart = this.$echarts.init(this.$refs.NightingaleEcharts);
          this.carousel();
          chart.setOption(this.option);
          that.initEcharts();
        });
      },
      deep: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/03-玫瑰图/roseCharts.vue?vue&type=script&lang=js
 /* harmony default export */ var _03_roseChartsvue_type_script_lang_js = (roseChartsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/03-饼图/03-玫瑰图/roseCharts.vue?vue&type=style&index=0&id=e902b00a&prod&lang=less&scoped=true
var roseChartsvue_type_style_index_0_id_e902b00a_prod_lang_less_scoped_true = __webpack_require__("578e");

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/03-玫瑰图/roseCharts.vue






/* normalize component */

var roseCharts_component = Object(componentNormalizer["a" /* default */])(
  _03_roseChartsvue_type_script_lang_js,
  roseChartsvue_type_template_id_e902b00a_scoped_true_render,
  roseChartsvue_type_template_id_e902b00a_scoped_true_staticRenderFns,
  false,
  null,
  "e902b00a",
  null
  
)

/* harmony default export */ var roseCharts = (roseCharts_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/01-基础饼图/ChartPie.vue?vue&type=template&id=4185133e&scoped=true
var ChartPievue_type_template_id_4185133e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "loop"
  }, [_c('div', {
    staticClass: "container",
    style: {
      alignItems: _vm.containerFlex,
      flexDirection: _vm.flexDirection
    }
  }, [_c('div', {
    ref: "loop",
    staticClass: "loop_ref",
    style: {
      width: `${_vm.width}`,
      height: `${_vm.height}`
    }
  }), _c('div', {
    staticClass: "loop_label",
    style: {
      width: _vm.width,
      height: _vm.height,
      left: _vm.loop_labelStyle.left,
      top: _vm.loop_labelStyle.top,
      backgroundImage: `url(${_vm.backImg.url})`,
      backgroundPosition: _vm.backImg.pos,
      backgroundSize: _vm.backImg.size
    }
  }, [_c('div', {
    staticClass: "text",
    style: {
      fontSize: _vm.loop_labelStyle.wzSize,
      marginTop: _vm.marginTop,
      lineHeight: _vm.loop_labelStyle.lineHeight
    },
    domProps: {
      "textContent": _vm._s(_vm.selectedSeries.category)
    }
  }), _vm.displayModel !== 3 ? _c('div', {
    staticClass: "num",
    style: {
      fontSize: _vm.loop_labelStyle.numSize
    },
    domProps: {
      "textContent": _vm._s(_vm.selectedSeries.value)
    }
  }) : _vm._e(), _vm.displayModel === 3 ? _c('div', {
    staticClass: "num",
    style: {
      fontSize: _vm.loop_labelStyle.numSize
    },
    domProps: {
      "textContent": _vm._s(_vm.selectedSeries.value)
    }
  }) : _vm._e()]), _vm.displayModel === 3 ? _c('div', {
    staticClass: "rose_legend",
    style: {
      height: _vm.roseheight
    }
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend",
      style: {
        paddingBottom: _vm.paddingBottom
      }
    }, [_c('div', {
      staticClass: "legend_color",
      style: {
        backgroundColor: _vm.color[index]
      }
    }), _c('div', {
      staticClass: "legend_progress"
    }, [_c('div', {
      style: {
        background: `linear-gradient(to right,rgba(0,0,0,0),${_vm.color[index]})`,
        width: 'calc(' + item.num + ' - 0px)'
      }
    })]), _c('div', {
      staticClass: "legend_name",
      style: {
        color: _vm.color[index]
      }
    }, [_vm._v(" " + _vm._s(item.name) + " ")]), 0 ? undefined : _vm._e(), _c('div', {
      staticClass: "legend_num",
      style: {
        right: _vm.legendsStyle.right,
        color: _vm.color[index]
      }
    }, [_vm._v(" " + _vm._s(item.value) + " ")]), _c('div', {
      staticClass: "legend_unit",
      style: {
        right: _vm.legendsStyle.unitright
      }
    }, [_vm._v(" " + _vm._s(_vm.legthunit) + " ")])]);
  }), 0) : _vm._e(), _vm.displayModel === 4 ? _c('div', {
    staticClass: "botrose_legend"
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend",
      style: {
        paddingBottom: _vm.paddingBottom
      }
    }, [_c('div', {
      staticClass: "legend_color",
      style: {
        backgroundColor: _vm.color[index]
      }
    }), 0 ? undefined : _vm._e(), _c('div', {
      staticClass: "legend_name"
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: "legend_value",
      style: {
        color: _vm.color[index],
        display: _vm.legendsStyle.display
      }
    }, [_vm._v(" " + _vm._s(item.num) + " ")]), _c('div', {
      staticClass: "legend_num",
      style: {
        right: _vm.legendsStyle.right,
        color: _vm.color[index]
      }
    }, [_vm._v(" " + _vm._s(item.value) + " ")]), _c('div', {
      staticClass: "legend_unit",
      style: {
        right: _vm.legendsStyle.unitright
      }
    }, [_vm._v(" " + _vm._s(_vm.legthunit) + " ")])]);
  }), 0) : _vm._e(), _vm.displayModel === 5 ? _c('div', {
    staticClass: "progrerose_legend",
    style: {
      height: _vm.roseheight
    }
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend",
      style: {
        paddingBottom: _vm.paddingBottom
      }
    }, [0 ? undefined : _vm._e(), _c('div', {
      staticClass: "top"
    }, [_c('div', {
      staticClass: "legend_color",
      style: {
        backgroundColor: _vm.color[index]
      }
    }), _c('div', {
      staticClass: "legend_name"
    }, [_vm._v(_vm._s(item.name))])]), _c('div', {
      staticClass: "bot"
    }, [_c('div', {
      staticClass: "legend_value",
      style: {
        right: _vm.legendsStyle.valueright
      }
    }, [_vm._v(" " + _vm._s(item.num) + " ")]), _c('div', {
      staticClass: "legend_num",
      style: {
        right: _vm.legendsStyle.right,
        color: _vm.color[index]
      }
    }, [_vm._v(" " + _vm._s(item.value) + " ")]), _c('div', {
      staticClass: "legend_unit",
      style: {
        right: _vm.legendsStyle.unitright
      }
    }, [_vm._v(" " + _vm._s(_vm.legthunit) + " ")])])]);
  }), 0) : _vm._e(), _vm.displayModel === 6 ? _c('div', {
    staticClass: "rectrose_legend",
    style: {
      height: _vm.roseheight
    }
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend",
      style: {
        paddingBottom: _vm.paddingBottom
      }
    }, [_c('div', {
      staticClass: "legend_color",
      style: {
        backgroundColor: _vm.color[index]
      }
    }), _c('div', {
      staticClass: "legend_name"
    }, [_vm._v(_vm._s(item.name))])]);
  }), 0) : _vm._e(), _vm.displayModel === 7 ? _c('div', {
    staticClass: "rectbottomrose_legend",
    style: {
      height: _vm.roseheight
    }
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend",
      style: {
        paddingBottom: _vm.paddingBottom
      }
    }, [_c('div', {
      staticClass: "legend_color",
      style: {
        backgroundColor: _vm.color[index]
      }
    }), _c('div', {
      staticClass: "legend_name"
    }, [_vm._v(_vm._s(item.name))])]);
  }), 0) : _vm._e()])]);
};
var ChartPievue_type_template_id_4185133e_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/ChartPie.vue?vue&type=template&id=4185133e&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/01-基础饼图/ChartPie.vue?vue&type=script&lang=js

/* harmony default export */ var ChartPievue_type_script_lang_js = ({
  name: 'LoopChartTj',
  props: {
    width: {
      type: String,
      default: '150px'
    },
    //宽度
    height: {
      type: String,
      default: '300px'
    },
    //高度
    legthunit: {
      type: String,
      default: ''
    },
    flexDirection: {
      type: String,
      default: 'row'
    },
    loop_labelStyle: {
      type: Object,
      default: () => {
        return {
          wzSize: '',
          numSize: '',
          lineHeight: '',
          left: '',
          top: '-80px'
        };
      }
    },
    paddingBottom: {
      type: String,
      default: '6px'
    },
    containerFlex: {
      type: String,
      default: () => {
        return 'flex';
      }
    },
    // value
    rowData: {
      type: Array,
      default: () => {
        return [{
          category: '类型1',
          value: 20
        }, {
          category: '类型2',
          value: 30
        }, {
          category: '类型3',
          value: 40
        }, {
          category: '类型4',
          value: 50
        }];
      }
    },
    color: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#F496AA', '#71C6FF', '#FFE595', '#051839', '#E6C84F'];
      }
    },
    // 图表文字中间位置
    marginTop: {
      type: String,
      default: () => {
        return '155px';
      }
    },
    legendsStyle: {
      type: Object,
      default: () => {
        return {
          display: 'block',
          right: '40px',
          unitright: '10px',
          valueright: '80px'
        };
      }
    },
    roseheight: {
      type: String,
      default: () => {
        return '262px';
      }
    },
    //图例value
    legends: {
      type: Object,
      default: () => {
        return {
          城管采集员: '#00BFFF',
          执法人员: '#FFE426',
          坐席人员: '#00DD8A',
          离岗: '#96FF2B'
        };
      }
    },
    displayModel: {
      type: Number,
      default: 3 //0 光一个圈 3 进度条   1~7
    },
    chartStyle: {
      type: Object,
      default: () => {
        return {
          left: 6,
          top: 20,
          right: 15,
          bottom: 25
        };
      }
    },
    // 背景图片路径 及 位置
    backImg: {
      type: Object,
      default: () => {
        return {
          url: '',
          pos: '54px 68px',
          size: '100% 100%'
        };
      }
    },
    // 图表大小
    pieRadius: {
      type: Array,
      default() {
        return ['92%', '76%'];
      }
    }
  },
  data() {
    return {
      ind: 0,
      loopData: [],
      num: 0,
      //当前选中的value
      selectedSeries: {
        category: '',
        value: '',
        sum: ''
      },
      sum: 0,
      Status: []
    };
  },
  mounted() {
    if (!this.rowData.length) {
      let dom = document.querySelector('.loop');
      dom.innerHTML = '暂无数据';
      dom.style.cssText = `text-align:center; color: #fff; font-size: 32px; border: none;line-height: ${this.height}`;
      return;
    }
    this.$nextTick(() => {
      this.draw();
    });
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(this.$refs.loop);
      this.option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}:{d}%'
        },
        series: [{
          ...this.chartStyle,
          type: 'pie',
          radius: this.pieRadius,
          hoverAnimation: false,
          selectedMode: 'single',
          // roseType: "none",
          color: this.color,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: []
        }]
      };
      this.loopData = this.convertData(this.rowData, this.legends);
      this.option.series[0].data = this.loopData;
      this.carousel();
      this.myChart.setOption(this.option);
    },
    //value转换
    convertData(rowData) {
      this.sum = 0;
      let returnData = [];
      rowData.forEach(d => {
        this.sum += d.value;
        returnData.push({
          value: d.value,
          name: d.category
          // itemStyle: {
          //   color: legends[d.category]
          // }
        });
      });
      returnData.forEach(d => {
        d.num = this.sum == 0 ? '0' : (d.value / this.sum * 100).toFixed(0) + '%';
      });
      //进度条模式时 倒序排序
      if (this.displayModel == 1) {
        returnData.sort((a, b) => {
          return b.value - a.value;
        });
      }
      //增加千分位
      if (this.displayModel == 2) {
        let re = /(?=(?!(\b))(\d{3})+$)/g;
        returnData.forEach(r => {
          r.value = String(r.value).replace(re, ',');
        });
      }
      return returnData;
    },
    setTimeToDo() {
      const data = this.option.series[0].data;
      data.forEach(e => e.selected = false);
      data[this.num].selected = true;
      this.selectedSeries.category = data[this.num].name;
      // 计算百分比的一个
      this.selectedSeries.value = data[this.num].num;
      // this.selectedSeries =data[this.num]
      // 必须重新设置option，因为echart没有监听data的变化
      this.myChart.setOption(this.option);
    },
    setHighLight() {
      clearInterval(this.timer);
      const data = this.option.series[0].data;
      this.timer = setInterval(() => {
        if (this.num < data.length - 1) {
          this.num++;
        } else {
          this.num = 0;
        }
        this.setTimeToDo();
      }, 3000);
    },
    //轮播
    carousel() {
      if (this.option.series[0].data.length > 0) {
        //开启定时器
        this.setTimeToDo();
        this.setHighLight();
        this.myChart.on('mouseover', params => {
          clearInterval(this.timer);
          // 鼠标快速移动时，会导致mouseover里的代码来不及执行，引起事件延迟，出现多个扇形区域同时被选中的现象，所以有必要设置防抖函数
          this.debounce && clearTimeout(this.debounce);
          this.debounce = setTimeout(() => {
            const data = this.option.series[0].data;
            data.forEach(e => e.selected = false);
            data[params.dataIndex].selected = true;
            this.myChart.setOption(this.option);
            this.num = params.dataIndex;
          }, 300);
        });
        this.myChart.on('mouseout', () => {
          this.setTimeToDo();
          this.setHighLight();
        });
      }
    }
  },
  watch: {
    rowData: {
      handler(neVal) {
        if (!neVal.length) {
          let dom = document.querySelector('.loop');
          dom.innerHTML = '暂无数据';
          dom.style.cssText = `text-align:center; color: #fff; font-size: 32px; border: none;line-height: ${this.height}`;
          return;
        }
        this.option.series[0].data = [];
        this.loopData = this.convertData(neVal, this.legends);
        this.option.series[0].data = this.loopData;
        this.$nextTick(() => {
          let chart = this.$echarts.init(this.$refs.loop);
          this.carousel();
          chart.setOption(this.option);
        });
      },
      deep: false
    }
  },
  destroyed() {
    this.timer && clearInterval(this.timer);
    this.debounce && clearTimeout(this.debounce);
    this.myChart.dispose();
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/ChartPie.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_ChartPievue_type_script_lang_js = (ChartPievue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/ChartPie.vue?vue&type=style&index=0&id=4185133e&prod&lang=less&scoped=true
var ChartPievue_type_style_index_0_id_4185133e_prod_lang_less_scoped_true = __webpack_require__("6c7a");

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/ChartPie.vue






/* normalize component */

var ChartPie_component = Object(componentNormalizer["a" /* default */])(
  _01_ChartPievue_type_script_lang_js,
  ChartPievue_type_template_id_4185133e_scoped_true_render,
  ChartPievue_type_template_id_4185133e_scoped_true_staticRenderFns,
  false,
  null,
  "4185133e",
  null
  
)

/* harmony default export */ var ChartPie = (ChartPie_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/01-基础饼图/locaLoopChart.vue?vue&type=template&id=4228168c&scoped=true
var locaLoopChartvue_type_template_id_4228168c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "loop"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    ref: "loop",
    staticClass: "pie",
    style: {
      width: `${_vm.width}`,
      height: `${_vm.height}`
    }
  }), _c('div', {
    staticClass: "loop_label",
    style: {
      left: `${_vm.loop_labelStyle.left}`,
      top: `${_vm.loop_labelStyle.top}`
    }
  }, [_c('div', {
    staticClass: "text",
    domProps: {
      "textContent": _vm._s(_vm.selectedSeries.category)
    }
  }), _c('div', {
    staticClass: "num",
    domProps: {
      "textContent": _vm._s(_vm.selectedSeries.value)
    }
  })]), _vm.displayModel == 0 ? _c('div', {
    staticClass: "right"
  }, _vm._l(_vm.loopData, function (d, index) {
    return _c('div', {
      key: index,
      staticClass: "right_item"
    }, [_c('div', {
      staticClass: "legend",
      style: {
        'background-color': d.itemStyle.color
      }
    }), _c('div', {
      staticClass: "text",
      domProps: {
        "textContent": _vm._s(d.name)
      }
    }), _c('div', {
      staticClass: "num",
      style: {
        color: d.itemStyle.color
      },
      domProps: {
        "textContent": _vm._s(d.value)
      }
    })]);
  }), 0) : _vm.displayModel == 1 ? _c('div', {
    staticClass: "right"
  }, _vm._l(_vm.loopData, function (d, index) {
    return _c('div', {
      key: index,
      staticClass: "right_item_2"
    }, [_c('div', {
      staticClass: "top"
    }, [_c('div', {
      staticClass: "text",
      domProps: {
        "textContent": _vm._s(d.name)
      }
    }), _c('div', {
      staticClass: "num",
      domProps: {
        "textContent": _vm._s(d.value)
      }
    }), _c('div', {
      staticClass: "unit"
    }, [_vm._v("个")])]), _c('div', {
      staticClass: "progress",
      style: {
        background: `linear-gradient(90deg, ${d.itemStyle.color} ${d.num}, #495472 ${d.num})`
      }
    })]);
  }), 0) : _vm._e(), _vm.displayModel == 2 ? _c('div', {
    staticClass: "right"
  }, _vm._l(_vm.loopData, function (d, index) {
    return _c('div', {
      key: index,
      staticClass: "right_item_3"
    }, [_c('div', {
      staticClass: "legend",
      style: {
        'background-color': d.itemStyle.color
      }
    }), _c('div', {
      staticClass: "text",
      domProps: {
        "textContent": _vm._s(d.name)
      }
    }), _c('div', {
      staticClass: "num",
      style: {
        color: d.itemStyle.color
      },
      domProps: {
        "textContent": _vm._s(d.num)
      }
    }), _c('div', {
      staticClass: "unitNum",
      domProps: {
        "textContent": _vm._s(d.value)
      }
    }), _c('div', {
      staticClass: "unit"
    }, [_vm._v("个")])]);
  }), 0) : _vm._e(), _vm.displayModel === 3 && _vm.lengthShow == true ? _c('div', {
    staticClass: "rose_legend"
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend",
      style: {
        paddingBottom: _vm.paddingBottom
      }
    }, [0 ? undefined : _vm._e(), _c('div', {
      staticClass: "legend_progress",
      style: {
        backgroundColor: _vm.color[index]
      }
    }), _c('div', {
      staticClass: "legend_name",
      on: {
        "click": function ($event) {
          return _vm.changeRegion($event, item.name);
        }
      }
    }, [_c('div', {
      staticClass: "name_label"
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: "num_label",
      style: {
        color: _vm.color[index]
      }
    }, [_vm._v(" " + _vm._s(item.value) + " ")]), _vm.showValue ? _c('div', {
      staticClass: "value_label"
    }, [_vm._v(_vm._s(item.value))]) : _vm._e(), _c('div', {
      staticClass: "unit"
    }, [_vm._v(_vm._s(_vm.legthunit))])])]);
  }), 0) : _vm._e()])]);
};
var locaLoopChartvue_type_template_id_4228168c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/locaLoopChart.vue?vue&type=template&id=4228168c&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/01-基础饼图/locaLoopChart.vue?vue&type=script&lang=js


/* harmony default export */ var locaLoopChartvue_type_script_lang_js = ({
  name: 'LoopChartTj',
  props: {
    height: {
      type: String,
      default: '800px'
    },
    //高度
    width: {
      type: String,
      default: '800px'
    },
    //宽度
    legthunit: {
      type: String,
      default: '个'
    },
    paddingBottom: {
      type: String,
      default: '6px'
    },
    // value
    rowData: {
      type: Array,
      default: () => {
        return [{
          category: '类型1',
          value: 20
        }, {
          category: '类型2',
          value: 30
        }, {
          category: '类型3',
          value: 40
        }];
      }
    },
    lengthShow: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    showValue: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    color: {
      type: Array,
      default: () => {
        return ['#89AAFF', '#F496AA', '#71C6FF', '#FFE595'];
      }
    },
    // 图表文字中间位置
    loop_labelStyle: {
      type: Object,
      default: () => {
        return {
          left: '5%',
          top: '45%'
        };
      }
    },
    legendsStyle: {
      type: Object,
      default: () => {
        return {
          display: 'block',
          right: '2px',
          unitright: '-27px'
        };
      }
    },
    //图例value
    legends: {
      type: Object,
      default: () => {
        return {
          城管采集员: '#00BFFF',
          执法人员: '#FFE426',
          坐席人员: '#00DD8A',
          离岗: '#96FF2B'
        };
      }
    },
    displayModel: {
      type: Number,
      default: 3 //0 图例 1 进度条 2 图例+个数
    },
    chartStyle: {
      type: Object,
      default: () => {
        return {
          left: 6,
          top: 6,
          right: 6,
          bottom: 6
        };
      }
    }
  },
  data() {
    return {
      ind: 0,
      loopData: [],
      num: 0,
      //当前选中的value
      selectedSeries: {
        category: '',
        value: ''
      },
      sum: 0,
      Status: []
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.draw();
    });
  },
  methods: {
    changeRegion(e, item) {
      e.stopPropagation();
      this.$emit('changeRegion', item);
    },
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(this.$refs.loop);
      this.option = {
        tooltip: {
          // trigger: 'item',
          // formatter: '{b}:{d}%'
          show: false
        },
        series: [{
          // ...this.chartStyle,
          type: 'pie',
          // radius: '50%',
          radius: ['95%', '80%'],
          hoverAnimation: false,
          selectedMode: 'single',
          color: [new echarts["graphic"].LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: this.color[0] + '00'
          }, {
            offset: 1,
            color: this.color[0]
          }]), new echarts["graphic"].LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: this.color[1] + '00'
          }, {
            offset: 1,
            color: this.color[1]
          }]), new echarts["graphic"].LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: this.color[2] + '00'
          }, {
            offset: 1,
            color: this.color[2]
          }]), new echarts["graphic"].LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: this.color[3] + '00'
          }, {
            offset: 1,
            color: this.color[3]
          }]), new echarts["graphic"].LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: this.color[4] + '00'
          }, {
            offset: 1,
            color: this.color[4]
          }])],
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: []
        }]
      };
      this.loopData = this.convertData(this.rowData, this.legends);
      this.option.series[0].data = this.loopData;
      this.carousel();
      this.myChart.setOption(this.option);
    },
    //value转换
    convertData(rowData) {
      this.sum = 0;
      let returnData = [];
      rowData.forEach(d => {
        this.sum += d.value;
        returnData.push({
          value: d.value,
          name: d.category
          // itemStyle: {
          //   color: legends[d.category]
          // }
        });
      });
      returnData.forEach(d => {
        d.num = this.sum == 0 ? '0' : (d.value / this.sum * 100).toFixed(0) + '%';
      });

      //进度条模式时 倒序排序
      if (this.displayModel == 1) {
        returnData.sort((a, b) => {
          return b.value - a.value;
        });
      }

      //增加千分位
      if (this.displayModel == 2) {
        let re = /(?=(?!(\b))(\d{3})+$)/g;
        returnData.forEach(r => {
          r.value = String(r.value).replace(re, ',');
        });
      }
      return returnData;
    },
    setTimeToDo() {
      const data = this.option.series[0].data;
      data.forEach(e => e.selected = false);
      data[this.num].selected = false;
      this.selectedSeries.category = data[this.num].name;
      // 计算百分比的一个
      // this.selectedSeries.value = data[this.num].num
      this.selectedSeries.value = data[this.num].value;

      // 必须重新设置option，因为echart没有监听data的变化
      this.myChart.setOption(this.option);
    },
    setHighLight() {
      clearInterval(this.timer);
      const data = this.option.series[0].data;
      this.timer = setInterval(() => {
        if (this.num < data.length - 1) {
          this.num++;
        } else {
          this.num = 0;
        }
        this.setTimeToDo();
      }, 3000);
    },
    //轮播
    carousel() {
      if (this.option.series[0].data.length > 0) {
        //开启定时器
        this.setTimeToDo();
        this.setHighLight();
        this.myChart.on('mouseover', params => {
          clearInterval(this.timer);
          // 鼠标快速移动时，会导致mouseover里的代码来不及执行，引起事件延迟，出现多个扇形区域同时被选中的现象，所以有必要设置防抖函数
          this.debounce && clearTimeout(this.debounce);
          this.debounce = setTimeout(() => {
            const data = this.option.series[0].data;
            data.forEach(e => e.selected = false);
            data[params.dataIndex].selected = true;
            this.myChart.setOption(this.option);
            this.num = params.dataIndex;
          }, 300);
        });
        this.myChart.on('mouseout', () => {
          this.setTimeToDo();
          this.setHighLight();
        });
      }
    }
  },
  watch: {
    rowData: {
      handler(neVal) {
        this.option.series[0].data = [];
        this.loopData = this.convertData(neVal, this.legends);
        this.option.series[0].data = this.loopData;
        this.$nextTick(() => {
          let chart = this.$echarts.init(this.$refs.loop);
          this.carousel();
          chart.setOption(this.option);
        });
      },
      deep: false
    }
  },
  destroyed() {
    this.timer && clearInterval(this.timer);
    this.debounce && clearTimeout(this.debounce);
    this.myChart.dispose();
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/locaLoopChart.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_locaLoopChartvue_type_script_lang_js = (locaLoopChartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/locaLoopChart.vue?vue&type=style&index=0&id=4228168c&prod&lang=less&scoped=true
var locaLoopChartvue_type_style_index_0_id_4228168c_prod_lang_less_scoped_true = __webpack_require__("f2e5");

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/locaLoopChart.vue






/* normalize component */

var locaLoopChart_component = Object(componentNormalizer["a" /* default */])(
  _01_locaLoopChartvue_type_script_lang_js,
  locaLoopChartvue_type_template_id_4228168c_scoped_true_render,
  locaLoopChartvue_type_template_id_4228168c_scoped_true_staticRenderFns,
  false,
  null,
  "4228168c",
  null
  
)

/* harmony default export */ var locaLoopChart = (locaLoopChart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/01-基础饼图/DeiFenHuan.vue?vue&type=template&id=8fb8344c&scoped=true
var DeiFenHuanvue_type_template_id_8fb8344c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    style: {
      width: _vm.echartStyle.width + 'px',
      height: _vm.echartStyle.height + 'px'
    }
  }), _c('div', {
    staticClass: "echartLegend",
    style: {
      width: _vm.echartStyle.width + 'px',
      height: _vm.echartStyle.height + 'px',
      'margin-top': _vm.echartStyle.top + 'px'
    }
  }, [_c('div', {
    staticClass: "title",
    style: {
      'margin-top': _vm.marginTop + 'px'
    }
  }, [_vm._v(" " + _vm._s(_vm.title) + " ")]), _c('div', {
    staticClass: "percentage"
  }, [_vm._v(_vm._s(_vm.perCentage) + "%")])]), _c('div', {
    staticClass: "cont",
    style: {
      width: _vm.contStyle.width + 'px',
      height: _vm.contStyle.height + 'px'
    }
  }, [_c('div', {
    staticClass: "cont_box"
  }, _vm._l(_vm.echartData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "context"
    }, [_c('div', {
      staticClass: "context_bg",
      style: {
        background: _vm.echartColor[index]
      }
    }), _c('div', {
      staticClass: "context_tit"
    }, [_vm._v(_vm._s(_vm.echartLegend[index]))]), _c('div', {
      staticClass: "context_per",
      style: {
        color: _vm.echartColor[index]
      }
    }, [_vm._v(_vm._s(_vm.echartPer[index]) + "%")])]);
  }), 0)])]);
};
var DeiFenHuanvue_type_template_id_8fb8344c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/DeiFenHuan.vue?vue&type=template&id=8fb8344c&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/01-基础饼图/DeiFenHuan.vue?vue&type=script&lang=js
/* harmony default export */ var DeiFenHuanvue_type_script_lang_js = ({
  props: {
    //饼图图例数据
    echartLegend: {
      type: Array,
      default() {
        return ['类型1', '类型2', '类型3'];
      }
    },
    //饼图图例上间距
    marginTop: {
      type: String,
      default() {
        return '92';
      }
    },
    //饼图宽高  左侧图例上间距
    echartStyle: {
      type: Object,
      default() {
        return {
          width: 300,
          height: 300,
          top: 20
        };
      }
    },
    //饼图数据
    echartData: {
      type: Array,
      default() {
        return [20, 30, 40];
      }
    },
    //饼图位置
    echartCenter: {
      type: Array,
      default() {
        return ['50%', '50%'];
      }
    },
    //饼图内外半径
    echartRadius: {
      type: Array,
      default() {
        return ['50%', '70%'];
      }
    },
    //饼图颜色
    echartColor: {
      type: Array,
      default() {
        return ['#89AAFF', '#F496AA', '#71C6FF', '#FFE595', '#94FF27', '#7473FF', '#BFFFFF', '#7473FF', '#BFFFFF'];
      }
    },
    //饼图右侧图例宽高
    contStyle: {
      type: Object,
      default() {
        return {
          width: 280,
          height: 280
        };
      }
    },
    //饼图百分比
    echartPer: {
      type: Array,
      default() {
        return ['34', '46', '20'];
      }
    }
  },
  data() {
    return {
      data: [],
      myChart: null,
      initTimer: null,
      currentIndex: -1,
      setTime: null,
      title: '河道垃圾',
      perCentage: '20'
    };
  },
  mounted() {
    this.draw();
    this.timerMode();
  },
  methods: {
    draw() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(this.$refs.myChart);
      // 绘制图表
      this.myChart.setOption({
        color: this.echartColor,
        // tooltip: {
        //   trigger: "item",
        // },
        legend: {
          data: [],
          type: 'scroll',
          orient: 'vertical',
          selectedMode: false,
          left: 240,
          top: 60,
          bottom: 20,
          itemGap: 44,
          itemWidth: 12,
          itemHeight: 12,
          textStyle: {
            color: '#BFEBFF',
            fontSize: 14,
            fontFamily: 'PingFang'
          }
        },
        series: [{
          showbackground: false,
          type: 'pie',
          radius: this.echartRadius,
          center: this.echartCenter,
          selectedMode: 'single',
          data: this.echartData,
          labelLine: {
            show: false
          }
        }]
      });
    },
    timerMode() {
      clearInterval(this.setTime);
      this.setTime = null;
      let str = 0;
      this.setTime = setInterval(() => {
        this.title = this.echartLegend[str];
        this.perCentage = this.echartPer[str];
        // 取消之前高亮的图形
        this.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          //表示series中的第几个data数据循环展示
          dataIndex: this.currentIndex
        });
        str = (str + 1) % this.echartData.length;
        this.currentIndex = (this.currentIndex + 1) % this.echartData.length;
        //高亮
        this.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: this.currentIndex
        });
      }, 2000);
    }
  },
  beforeDestroy() {
    clearInterval(this.setTime);
    this.setTime = null;
  },
  watch: {
    echartData: {
      handler() {
        this.draw();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/DeiFenHuan.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_DeiFenHuanvue_type_script_lang_js = (DeiFenHuanvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/DeiFenHuan.vue?vue&type=style&index=0&id=8fb8344c&prod&lang=less&scoped=true
var DeiFenHuanvue_type_style_index_0_id_8fb8344c_prod_lang_less_scoped_true = __webpack_require__("3c7e");

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/01-基础饼图/DeiFenHuan.vue






/* normalize component */

var DeiFenHuan_component = Object(componentNormalizer["a" /* default */])(
  _01_DeiFenHuanvue_type_script_lang_js,
  DeiFenHuanvue_type_template_id_8fb8344c_scoped_true_render,
  DeiFenHuanvue_type_template_id_8fb8344c_scoped_true_staticRenderFns,
  false,
  null,
  "8fb8344c",
  null
  
)

/* harmony default export */ var DeiFenHuan = (DeiFenHuan_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/04-多环图/DoughnutChart.vue?vue&type=template&id=0d3227ee&scoped=true
var DoughnutChartvue_type_template_id_0d3227ee_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "doughBox"
  }, [_c('div', {
    ref: "chart",
    staticClass: "doughnu"
  }), _vm.displayModel == 1 ? _c('div', {
    staticClass: "rose_legend"
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend"
    }, [_c('div', {
      staticClass: "legend_color"
    }), _c('div', {
      staticClass: "legend_progress",
      style: {
        backgroundColor: _vm.color[index],
        width: 'calc(' + item.num + ' - 0px)'
      }
    }), _c('div', {
      staticClass: "legend_name"
    }, [_vm._v(_vm._s(item.name))]), _c('div', {
      staticClass: "legend_bar"
    }), _c('div', {
      staticClass: "legend_value",
      style: {
        color: _vm.color[index]
      }
    }, [_vm._v(_vm._s(item.num))]), 0 ? undefined : _vm._e(), 0 ? undefined : _vm._e()]);
  }), 0) : _vm._e(), _vm.displayModel == 2 ? _c('div', {
    staticClass: "rectrose_legend"
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "legend"
    }, [_c('div', {
      staticClass: "legend_color",
      style: {
        backgroundColor: _vm.color[index]
      }
    }), _c('div', {
      staticClass: "legend_name",
      style: {
        color: '#aae3ff'
      }
    }, [_vm._v(_vm._s(item.name))])]);
  }), 0) : _vm._e(), _c('div', {
    staticClass: "doughPos",
    style: _vm.doughPosStyle
  }, _vm._l(_vm.loopData, function (item, index) {
    return _c('li', {
      key: index
    }, [_vm._v(_vm._s(item.name))]);
  }), 0)]);
};
var DoughnutChartvue_type_template_id_0d3227ee_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/04-多环图/DoughnutChart.vue?vue&type=template&id=0d3227ee&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/03-饼图/04-多环图/DoughnutChart.vue?vue&type=script&lang=js


/* harmony default export */ var DoughnutChartvue_type_script_lang_js = ({
  props: {
    doughPosStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 表示图表的个数
    data: {
      type: Array,
      default: () => {
        return [5, 6, 7, 8];
      }
    },
    barWidth: {
      type: [String, Number],
      default: () => {
        return 18;
      }
    },
    displayModel: {
      type: [String, Number],
      default: () => {
        return 1;
      }
    },
    obj: {
      type: Object,
      default: () => {
        return {};
      }
    },
    color: {
      type: Array,
      default: () => {
        return ['#F496AA', '#71C6FF', '#FFE595', '#89AAFF'];
      }
    },
    rowData: {
      type: Array,
      default: () => {
        return [{
          category: '类型1',
          value: 20
        }, {
          category: '类型2',
          value: 30
        }, {
          category: '类型3',
          value: 40
        }, {
          category: '类型4',
          value: 50
        }];
      }
    }
  },
  data() {
    return {
      chartInst: null,
      option: {},
      setTime: null,
      loopData: [],
      num: 0,
      //当前选中的value
      selectedSeries: {
        category: '',
        value: '',
        sum: ''
      },
      sum: 0
    };
  },
  methods: {
    instantiation() {
      this.chartInst = echarts["init"](this.$refs.chart);
      let _this = this;
      this.option = {
        angleAxis: {
          max: 12,
          startAngle: 90,
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          minorTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          minorSplitLine: {
            show: false
          },
          splitArea: {
            show: false
          },
          axisPointer: {
            show: false
          }
        },
        radiusAxis: {
          type: 'category',
          show: false
        },
        polar: {},
        series: [{
          type: 'bar',
          barGap: '75%',
          data: this.data,
          barWidth: this.barWidth,
          animationEasing: 'bounceOut',
          //初始动画
          itemStyle: {
            normal: {
              // 定制显示（按顺序）
              color: function (params) {
                return _this.color[params.dataIndex];
              }
              // color:this.dough
            }
          },
          coordinateSystem: 'polar'
        }],
        legend: {
          show: true
        }
      };
      this.loopData = this.convertData(this.rowData, this.legends);
      this.chartInst.setOption(this.option, true);
    },
    //value转换
    convertData(rowData) {
      this.sum = 0;
      let returnData = [];
      rowData.forEach(d => {
        this.sum += d.value;
        returnData.push({
          value: d.value,
          name: d.category,
          num: d.value
          // itemStyle: {
          //   color: legends[d.category]
          // }
        });
      });
      returnData.forEach(d => {
        d.num = this.sum == 0 ? '0' : (d.value / this.sum * 100).toFixed(0) + '%';
      });
      //进度条模式时 倒序排序
      if (this.displayModel == 100000) {
        returnData.sort((a, b) => {
          return b.value - a.value;
        });
      }
      //增加千分位
      if (this.displayModel == 2) {
        let re = /(?=(?!(\b))(\d{3})+$)/g;
        returnData.forEach(r => {
          r.value = String(r.value).replace(re, ',');
        });
      }
      return returnData;
    }
  },
  mounted() {
    this.instantiation();
  },
  beforeDestroy() {
    echarts["init"](this.$refs.chart).dispose();
  },
  watch: {
    dough: {
      handler() {
        this.instantiation();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/04-多环图/DoughnutChart.vue?vue&type=script&lang=js
 /* harmony default export */ var _04_DoughnutChartvue_type_script_lang_js = (DoughnutChartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/03-饼图/04-多环图/DoughnutChart.vue?vue&type=style&index=0&id=0d3227ee&prod&lang=less&scoped=true
var DoughnutChartvue_type_style_index_0_id_0d3227ee_prod_lang_less_scoped_true = __webpack_require__("a41b");

// CONCATENATED MODULE: ./src/components/Chart Library/03-饼图/04-多环图/DoughnutChart.vue






/* normalize component */

var DoughnutChart_component = Object(componentNormalizer["a" /* default */])(
  _04_DoughnutChartvue_type_script_lang_js,
  DoughnutChartvue_type_template_id_0d3227ee_scoped_true_render,
  DoughnutChartvue_type_template_id_0d3227ee_scoped_true_staticRenderFns,
  false,
  null,
  "0d3227ee",
  null
  
)

/* harmony default export */ var DoughnutChart = (DoughnutChart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/pieChart.vue?vue&type=script&lang=js






/* harmony default export */ var pieChartvue_type_script_lang_js = ({
  name: 'App',
  components: {
    ChartPie: ChartPie,
    locaLoopChart: locaLoopChart,
    DeiFenHuan: DeiFenHuan,
    roseCharts: roseCharts,
    DoughnutChart: DoughnutChart
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    copyImportedFileContent(val) {
      axios_default.a.get(`./data/饼图/文本/${val}.txt`).then(res => {
        // 获取要复制的内容
        var textArea = document.createElement('textarea');
        textArea.value = res.data;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        // 提示复制成功
        alert('内容已复制到剪贴板');
      }).catch(err => {
        console.error('加载文件失败：', err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/ChartLibraryView/pieChart.vue?vue&type=script&lang=js
 /* harmony default export */ var ChartLibraryView_pieChartvue_type_script_lang_js = (pieChartvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/views/ChartLibraryView/pieChart.vue?vue&type=style&index=0&id=23cccdc2&prod&lang=less&scoped=true
var pieChartvue_type_style_index_0_id_23cccdc2_prod_lang_less_scoped_true = __webpack_require__("bc19");

// CONCATENATED MODULE: ./src/views/ChartLibraryView/pieChart.vue






/* normalize component */

var pieChart_component = Object(componentNormalizer["a" /* default */])(
  ChartLibraryView_pieChartvue_type_script_lang_js,
  pieChartvue_type_template_id_23cccdc2_scoped_true_render,
  pieChartvue_type_template_id_23cccdc2_scoped_true_staticRenderFns,
  false,
  null,
  "23cccdc2",
  null
  
)

/* harmony default export */ var pieChart = (pieChart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/LeiDa.vue?vue&type=template&id=ea64da9e&scoped=true
var LeiDavue_type_template_id_ea64da9e_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "zt"
  }, [_c('div', {
    staticClass: "picBox"
  }, [_c('div', [_c('LeiDaBar', {
    attrs: {
      "width": '280px',
      "height": '300px'
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent(1);
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('RadarChart', {
    staticStyle: {
      "margin-top": "20px",
      "margin-left": "-20px"
    },
    attrs: {
      "width": '540px',
      "hight": '418px',
      "datacolor": _vm.teacherColor
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent(1);
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticClass: "fgx"
  })])]);
};
var LeiDavue_type_template_id_ea64da9e_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ChartLibraryView/LeiDa.vue?vue&type=template&id=ea64da9e&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/04-雷达图/01-基础雷达图/LeiDaBar.vue?vue&type=template&id=fd4f413c&scoped=true
var LeiDaBarvue_type_template_id_fd4f413c_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "chartBox"
  }, [_c('div', {
    ref: "myChart",
    staticClass: "myChart",
    staticStyle: {
      "width": "445px",
      "height": "352px"
    }
  })]);
};
var LeiDaBarvue_type_template_id_fd4f413c_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/04-雷达图/01-基础雷达图/LeiDaBar.vue?vue&type=template&id=fd4f413c&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/04-雷达图/01-基础雷达图/LeiDaBar.vue?vue&type=script&lang=js
/* harmony default export */ var LeiDaBarvue_type_script_lang_js = ({
  name: 'pieGeRenNanDing',
  props: {
    rowData: {
      type: Object,
      default: () => {
        return {
          // shape: 'circle',
          indicator: [{
            name: '销售',
            max: 6500
          }, {
            name: '管理',
            max: 16000
          }, {
            name: '信息技术',
            max: 30000
          }, {
            name: '客服',
            max: 38000
          }, {
            name: '研发',
            max: 52000
          }, {
            name: '市场',
            max: 25000
          }],
          value: [4200, 3000, 20000, 35000, 50000, 18000]
        };
      }
    }
  },
  data() {
    return {
      setTime: null,
      myChart: null,
      initTimer: null
    };
  },
  mounted() {
    if (this.rowData && this.rowData.indicator && this.rowData.indicator.length > 0) {
      console.log(this.rowData.indicator);
    }
    this.leidadraw();
    this.initTimer = setInterval(() => {
      this.myChart.dispose();
      this.leidadraw();
    }, 30000);
  },
  methods: {
    leidadraw() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(this.$refs.myChart);
      // 绘制图表
      this.myChart.setOption({
        radar: {
          nameGap: 0,
          center: ['50%', '48%'],
          name: {
            textStyle: {
              // padding: [3, 5],
              fontSize: 15,
              family: 'PingFang',
              color: '#BFEBFF',
              borderRadius: 1
            }
          },
          // radius: [55,10], // 圆的半径，数组的第一项是内半径，第二项是外半径
          splitNumber: 3,
          splitLine: {
            show: true,
            lineStyle: {
              width: 2,
              color: ['#fff', '#19334D', '#19334D'],
              // type: "dashed[]",
              type: 'solid'
              //  type: ["solid","solid","dashed"],

              // 图表背景网格线的颜色
            }
          },
          axisLine: {
            lineStyle: {
              width: 1,
              color: '#fff',
              // 分割线
              type: 'dashed'
            }
          },
          splitArea: {
            show: false,
            type: 'dashed',
            areaStyle: {
              color: ['rgba(240,240,240,0)'] // 图表背景网格的颜色
            }
          },
          indicator: this.rowData.indicator
        },
        tooltip: {
          trigger: 'axis'
        },
        series: [{
          type: 'radar',
          tooltip: {
            trigger: 'item'
          },
          areaStyle: {
            normal: {}
          },
          itemStyle: {
            type: 'dashed',
            // 单个拐点标志的样式设置。
            normal: {
              borderColor: '#59FFFF',
              // 拐点的描边颜色。[ default: '#000' ]
              borderWidth: 5
              // 拐点的描边宽度，默认不描边。[ default: 0 ]
            }
          },
          lineStyle: {
            // 单项线条样式。
            normal: {
              color: '#1FC5CC',
              opacity: 0.8 // 图形透明度,
            }
          },
          data: [{
            value: this.rowData.value,
            name: '预算分配（Allocated Budget）',
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return params.value;
                },
                fontSize: '20',
                fontFamily: '腾祥智黑简',
                position: ['1%', '1%'],
                color: '#00ffff',
                backgroundColor: 'rgba(51,51,51,1)'
              }
            }
          }]
        }]
      });
    },
    tooltipShuffling() {
      clearInterval(this.setTime);
      var currentIndex = -1;
      this.setTime = setInterval(() => {
        var dataLen = this.rowData.value.length;
        // // 取消之前高亮的图形
        // this.myChart.dispatchAction({
        //   type: "downplay",
        //   seriesIndex: 0, //表示series中的第几个data数据循环展示
        //   dataIndex: currentIndex
        // });
        currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
        this.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
        // 显示 tooltip
        this.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        });
      }, 3000);
    }
  },
  watch: {
    rowData: {
      handler() {
        this.myChart && this.myChart.dispose();
        this.leidadraw();
      }
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/04-雷达图/01-基础雷达图/LeiDaBar.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_LeiDaBarvue_type_script_lang_js = (LeiDaBarvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Chart Library/04-雷达图/01-基础雷达图/LeiDaBar.vue





/* normalize component */

var LeiDaBar_component = Object(componentNormalizer["a" /* default */])(
  _01_LeiDaBarvue_type_script_lang_js,
  LeiDaBarvue_type_template_id_fd4f413c_scoped_true_render,
  LeiDaBarvue_type_template_id_fd4f413c_scoped_true_staticRenderFns,
  false,
  null,
  "fd4f413c",
  null
  
)

/* harmony default export */ var LeiDaBar = (LeiDaBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/04-雷达图/01-基础雷达图/RadarChart.vue?vue&type=template&id=310ca396&scoped=true
var RadarChartvue_type_template_id_310ca396_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "ldat"
  }, [_c('div', {
    ref: "ldatChart",
    style: {
      width: _vm.width,
      height: _vm.height
    }
  })]);
};
var RadarChartvue_type_template_id_310ca396_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/04-雷达图/01-基础雷达图/RadarChart.vue?vue&type=template&id=310ca396&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/04-雷达图/01-基础雷达图/RadarChart.vue?vue&type=script&lang=js

/* harmony default export */ var RadarChartvue_type_script_lang_js = ({
  name: 'Ldat',
  props: {
    leidaData: {
      type: Array,
      default: () => {
        return [{
          value: 1000,
          maxvalue: 2000,
          name: '一级教师'
        }, {
          value: 1100,
          maxvalue: 2000,
          name: '二级教师'
        }, {
          value: 1200,
          maxvalue: 2000,
          name: '教授'
        }, {
          value: 1300,
          maxvalue: 2000,
          name: '副教授'
        }, {
          value: 1400,
          maxvalue: 2000,
          name: '专家'
        }];
      }
    },
    datacolor: {
      type: Array,
      default: () => {
        return ['#00BFFF', '#00BFFF']; //面积内颜色起始值及结束值
      }
    },
    width: {
      type: String,
      default: '265px'
    },
    height: {
      type: String,
      default: '230px'
    }
  },
  data() {
    return {
      da: [{
        value: 1155,
        maxvalue: 2000,
        name: 'PDH'
      }, {
        value: 1151,
        maxvalue: 2000,
        name: 'REG'
      }, {
        value: 1152,
        maxvalue: 2000,
        name: 'PCM'
      }, {
        value: 1168,
        maxvalue: 2000,
        name: 'SDH-ADM'
      }, {
        value: 1174,
        maxvalue: 2000,
        name: 'TEM'
      }],
      //标题及最大值
      maxdata: [],
      //数据
      ldatdata: [],
      ldatChart: null,
      option: null
    };
  },
  mounted() {
    this.getData();
  },
  watch: {
    leidaData() {
      this.getData();
    }
  },
  methods: {
    getData() {
      if (this.leidaData.length === 0) {
        return;
      } else {
        var a = new Array();
        var b = new Array();
        for (let i = 0; i < this.leidaData.length; i++) {
          a.push({
            name: this.leidaData[i].name,
            max: this.leidaData[i].maxvalue
          });
          b.push(this.leidaData[i].value);
        }
        this.maxdata = a;
        this.ldatdata.push(b);
        this.ldatdrawLine();
      }
    },
    ldatdrawLine() {
      let echarts = __webpack_require__("313e");
      this.ldatChart = this.$echarts.init(this.$refs.ldatChart);
      // let ldatChart = echarts.init(document.getElementById("ldatChart"));
      let maxdata = this.maxdata;
      let ldatdata = this.ldatdata;
      let datacolor = this.datacolor;
      this.option = {
        // backgroundColor: '#fff',
        // color: ["rgba(0,183,238, 1)", "rgba(86,199,60, 1)"],
        tooltip: {
          show: false,
          trigger: 'item',
          extraCssText: 'background: #fff; border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;'
        },
        radar: {
          center: ['60%', '50%'],
          radius: '70%',
          startAngle: 90,
          splitNumber: 1,
          // shape: "circle",
          splitArea: {
            areaStyle: {
              color: ['transparent']
            }
          },
          axisLabel: {
            show: false,
            fontSize: 20,
            color: '#ffffff',
            fontStyle: 'normal',
            fontWeight: 'normal'
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#BFEBFF'
            }
          },
          name: {
            formatter: '{value}',
            textStyle: {
              color: '#B8E5FE',
              fontSize: 16
            }
          },
          //标题及最大值
          indicator: maxdata
        },
        series: [{
          type: 'radar',
          symbol: 'none',
          symbolSize: 9,
          areaStyle: {
            normal: {
              //面积颜色
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: datacolor[0]
              }, {
                offset: 1,
                color: datacolor[1]
              }], false)
            }
          },
          itemStyle: {
            color: '#00BFFF',
            borderColor: '#00BFFF',
            borderWidth: 2
          },
          lineStyle: {
            normal: {
              color: 'rgba(0, 255, 191, 0.5)',
              width: 2
            }
          },
          //数据值
          data: ldatdata
        }]
      };
      this.ldatChart.setOption(this.option);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/04-雷达图/01-基础雷达图/RadarChart.vue?vue&type=script&lang=js
 /* harmony default export */ var _01_RadarChartvue_type_script_lang_js = (RadarChartvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Chart Library/04-雷达图/01-基础雷达图/RadarChart.vue





/* normalize component */

var RadarChart_component = Object(componentNormalizer["a" /* default */])(
  _01_RadarChartvue_type_script_lang_js,
  RadarChartvue_type_template_id_310ca396_scoped_true_render,
  RadarChartvue_type_template_id_310ca396_scoped_true_staticRenderFns,
  false,
  null,
  "310ca396",
  null
  
)

/* harmony default export */ var RadarChart = (RadarChart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/LeiDa.vue?vue&type=script&lang=js


/* harmony default export */ var LeiDavue_type_script_lang_js = ({
  name: 'App',
  components: {
    LeiDaBar: LeiDaBar,
    RadarChart: RadarChart
  },
  data() {
    return {
      teacherColor: ['rgba(0, 255, 191, 0.2)', ' rgba(0, 255, 191, 0.2)']
    };
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    copyImportedFileContent() {
      __webpack_require__.e(/* import() | yourComponent */ "yourComponent").then(__webpack_require__.bind(null, "a9e0")).then(() => {
        const componentCode = `123 `;
        navigator.clipboard.writeText(componentCode).then(() => {
          alert('文件内容已成功复制！请检索删除【这个要删除哦】字段哦！');
        }).catch(err => {
          console.error('复制文件内容失败：', err);
        });
      }).catch(err => {
        console.error('加载文件失败：', err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/ChartLibraryView/LeiDa.vue?vue&type=script&lang=js
 /* harmony default export */ var ChartLibraryView_LeiDavue_type_script_lang_js = (LeiDavue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/views/ChartLibraryView/LeiDa.vue?vue&type=style&index=0&id=ea64da9e&prod&lang=less&scoped=true
var LeiDavue_type_style_index_0_id_ea64da9e_prod_lang_less_scoped_true = __webpack_require__("2b98");

// CONCATENATED MODULE: ./src/views/ChartLibraryView/LeiDa.vue






/* normalize component */

var LeiDa_component = Object(componentNormalizer["a" /* default */])(
  ChartLibraryView_LeiDavue_type_script_lang_js,
  LeiDavue_type_template_id_ea64da9e_scoped_true_render,
  LeiDavue_type_template_id_ea64da9e_scoped_true_staticRenderFns,
  false,
  null,
  "ea64da9e",
  null
  
)

/* harmony default export */ var LeiDa = (LeiDa_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/Other.vue?vue&type=template&id=6413c777&scoped=true
var Othervue_type_template_id_6413c777_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "zt"
  }, [_c('div', {
    staticClass: "picBox"
  }, [_c('div', [_c('Table'), _c('button', {
    staticClass: "button button--block",
    staticStyle: {
      "margin": "30px 0 0 200px"
    },
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('Table');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', [_c('VideoCommon'), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent('VideoCommon');
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticStyle: {
      "margin": "70px 0 0 -120px"
    }
  }, [_c('treeChart', {
    staticStyle: {
      "transform": "scale(0.87)"
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent(1);
      }
    }
  }, [_vm._v("复制代码")])], 1), _c('div', {
    staticStyle: {
      "margin": "70px 0 0 -120px"
    }
  }, [_c('RectangleChart', {
    staticStyle: {
      "transform": "scale(0.87)"
    }
  }), _c('button', {
    staticClass: "button button--block",
    on: {
      "click": function ($event) {
        return _vm.copyImportedFileContent(1);
      }
    }
  }, [_vm._v("复制代码")])], 1)])]);
};
var Othervue_type_template_id_6413c777_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/views/ChartLibraryView/Other.vue?vue&type=template&id=6413c777&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/09-其他组件/表格组件/Table.vue?vue&type=template&id=42ed3768&scoped=true
var Tablevue_type_template_id_42ed3768_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "table"
  }, [_c('ul', {
    staticClass: "FJ_GZZDYJLB_Nav",
    style: {
      height: _vm.TableStyle.NavHeight,
      width: _vm.TableStyle.TableWidth
    }
  }, _vm._l(_vm.NavData, function (item, index) {
    return _c('li', {
      key: index,
      style: {
        lineHeight: _vm.TableStyle.NavlineHeight,
        marginTop: _vm.TableStyle.NavTop
      }
    }, [_vm._v(_vm._s(item))]);
  }), 0), _c('div', {
    staticClass: "swiper_wraper FJ_GZZDYJLB_Content",
    style: {
      width: _vm.TableStyle.TableWidth
    },
    on: {
      "mouseenter": _vm.enterSwiper,
      "mouseleave": _vm.leaveSwiper
    }
  }, [_vm.Data.length > 1 ? _c('swiper', {
    ref: "mySwiper",
    staticClass: "wrap",
    attrs: {
      "options": _vm.swiperOptions,
      "auto-update": true,
      "auto-destroy": true,
      "delete-instance-on-destroy": true,
      "cleanup-styles-on-destroy": true
    }
  }, _vm._l(_vm.Data, function (item, index) {
    return _c('swiperSlide', {
      key: index,
      staticClass: "swipe_inner"
    }, [_c('div', [_vm._v(_vm._s(item.id))]), _c('div', [_vm._v(_vm._s(item.time))]), _c('div', [_vm._v(_vm._s(item.content))]), _c('div', [_vm._v(_vm._s(item.status))]), _c('div', [_vm._v(_vm._s(item.istime))])]);
  }), 1) : _vm._e()], 1)]);
};
var Tablevue_type_template_id_42ed3768_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/09-其他组件/表格组件/Table.vue?vue&type=template&id=42ed3768&scoped=true

// EXTERNAL MODULE: ./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js
var vue_awesome_swiper = __webpack_require__("7212");

// EXTERNAL MODULE: ./node_modules/swiper/dist/css/swiper.css
var swiper = __webpack_require__("dfa4");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/09-其他组件/表格组件/Table.vue?vue&type=script&lang=js


/* harmony default export */ var Tablevue_type_script_lang_js = ({
  components: {
    swiper: vue_awesome_swiper["swiper"],
    swiperSlide: vue_awesome_swiper["swiperSlide"]
  },
  props: {
    NavData: {
      type: Array,
      default: () => {
        return ['编号', '时间', '事件详情', '办结情况'];
      }
    },
    TableStyle: {
      type: Object,
      default: () => {
        return {
          TableWidth: '500px',
          NavHeight: '40px',
          NavlineHeight: '40px',
          NavTop: '0px'
        };
      }
    },
    Data: {
      type: Array,
      default: () => {
        return [{
          id: 'B12322',
          time: '2021-6-10',
          content: '安防告警事件',
          status: '已处理'
        }, {
          id: 'B12322',
          time: '2021-6-10',
          content: '安防告警事件',
          status: '已处理'
        }, {
          id: 'B12322',
          time: '2021-6-10',
          content: '安防告警事件',
          status: '已处理'
        }, {
          id: 'B12322',
          time: '2021-6-10',
          content: '安防告警事件',
          status: '已处理'
        }, {
          id: 'B12322',
          time: '2021-6-10',
          content: '安防告警事件',
          status: '已处理'
        }, {
          id: 'B12322',
          time: '2021-6-10',
          content: '安防告警事件',
          status: '已处理'
        }, {
          id: 'B12322',
          time: '2021-6-10',
          content: '安防告警事件',
          status: '已处理'
        }];
      }
    }
  },
  data() {
    return {
      // 轮播图配置
      swiperOptions: {
        direction: 'vertical',
        initialSlide: 0,
        loop: true,
        slidesPerView: 4,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        }
      }
    };
  },
  methods: {
    enterSwiper() {},
    leaveSwiper() {}
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/09-其他组件/表格组件/Table.vue?vue&type=script&lang=js
 /* harmony default export */ var _Tablevue_type_script_lang_js = (Tablevue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/09-其他组件/表格组件/Table.vue?vue&type=style&index=0&id=42ed3768&prod&lang=less&scoped=true
var Tablevue_type_style_index_0_id_42ed3768_prod_lang_less_scoped_true = __webpack_require__("d085");

// CONCATENATED MODULE: ./src/components/Chart Library/09-其他组件/表格组件/Table.vue






/* normalize component */

var Table_component = Object(componentNormalizer["a" /* default */])(
  _Tablevue_type_script_lang_js,
  Tablevue_type_template_id_42ed3768_scoped_true_render,
  Tablevue_type_template_id_42ed3768_scoped_true_staticRenderFns,
  false,
  null,
  "42ed3768",
  null
  
)

/* harmony default export */ var Table = (Table_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/09-其他组件/视频组件/VideoCommon.vue?vue&type=template&id=8e92524a&scoped=true
var VideoCommonvue_type_template_id_8e92524a_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "right",
    style: {
      width: _vm.videoStyle.videoBOXWidth
    }
  }, [_c('div', {
    staticClass: "right_bottom"
  }, _vm._l(_vm.videoList, function (item, index) {
    return _c('div', {
      key: index,
      staticClass: "bottom_item",
      style: {
        height: _vm.videoStyle.videoHeight,
        width: _vm.videoStyle.videoWidth
      }
    }, [_c('div', {
      staticClass: "btn",
      on: {
        "click": function ($event) {
          return _vm.sentData(item);
        }
      }
    }), _c('video', {
      staticClass: "video-box",
      attrs: {
        "autoplay": "",
        "loop": "",
        "muted": "",
        "src": item.videopath
      },
      domProps: {
        "muted": true
      }
    }), _c('div', {
      style: {
        bottom: _vm.videoStyle.linearpositions
      }
    }, [_c('span', [_vm._v(_vm._s(item.title))]), _c('span', [_vm._v(_vm._s(_vm.timeObj.year + _vm.timeObj.month + _vm.timeObj.day + _vm.timeObj.h + _vm.timeObj.m + _vm.timeObj.s))])])]);
  }), 0)]);
};
var VideoCommonvue_type_template_id_8e92524a_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/09-其他组件/视频组件/VideoCommon.vue?vue&type=template&id=8e92524a&scoped=true

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/09-其他组件/视频组件/VideoCommon.vue?vue&type=script&lang=js
/* harmony default export */ var VideoCommonvue_type_script_lang_js = ({
  props: {
    videoList: {
      type: Array,
      default: () => {
        return [{
          videopath: '/video/fire01.mp4',
          title: '消防车001',
          timer: '20210204 00:00:00'
        }];
      }
    },
    videoStyle: {
      type: Object,
      default: () => {
        return {
          videoHeight: '200px',
          videoWidth: '394px',
          videoBOXWidth: '1223px',
          linearpositions: 'px'
        };
      }
    }
  },
  components: {},
  data() {
    return {
      timer: null,
      timeObj: {}
    };
  },
  methods: {
    setHighLight(cardName, index) {
      this.currentIndex = index;
      if (cardName === this.$store.state.highLight) {
        this.$store.commit('clearHighLight');
      } else {
        this.$store.commit('setHighLight', cardName);
      }
    },
    sentData(item) {
      console.log(item);
      this.$store.commit('setMonitorDetail', item);
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      let sTime = new Date();
      let week = sTime.getDay();
      let year = sTime.getFullYear() + '/';
      let month = sTime.getMonth() + 1;
      let day = sTime.getDate();
      //小时
      let h = sTime.getHours() + ':';
      // 分钟
      let m = sTime.getMinutes();
      // 秒
      let s = sTime.getSeconds();
      day = day < 10 ? '0' + day : day;
      month = month < 10 ? '0' + month : month;
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      let str = '';
      switch (week) {
        case 0:
          str += '日';
          break;
        case 1:
          str += '一';
          break;
        case 2:
          str += '二';
          break;
        case 3:
          str += '三';
          break;
        case 4:
          str += '四';
          break;
        case 5:
          str += '五';
          break;
        case 6:
          str += '六';
          break;
      }
      this.timeObj = {
        year,
        month,
        day,
        h,
        m,
        s,
        str
      };
    }, 1000);
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/09-其他组件/视频组件/VideoCommon.vue?vue&type=script&lang=js
 /* harmony default export */ var _VideoCommonvue_type_script_lang_js = (VideoCommonvue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/components/Chart Library/09-其他组件/视频组件/VideoCommon.vue?vue&type=style&index=0&id=8e92524a&prod&lang=less&scoped=true
var VideoCommonvue_type_style_index_0_id_8e92524a_prod_lang_less_scoped_true = __webpack_require__("efb9");

// CONCATENATED MODULE: ./src/components/Chart Library/09-其他组件/视频组件/VideoCommon.vue






/* normalize component */

var VideoCommon_component = Object(componentNormalizer["a" /* default */])(
  _VideoCommonvue_type_script_lang_js,
  VideoCommonvue_type_template_id_8e92524a_scoped_true_render,
  VideoCommonvue_type_template_id_8e92524a_scoped_true_staticRenderFns,
  false,
  null,
  "8e92524a",
  null
  
)

/* harmony default export */ var VideoCommon = (VideoCommon_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/11矩形树图/背景树图/treeChart.vue?vue&type=template&id=152a0934
var treeChartvue_type_template_id_152a0934_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.rowData != null ? _c('div', {
    staticClass: "barChart"
  }, [_c('div', {
    ref: "barChart",
    staticClass: "barEcharts",
    style: {
      width: `${_vm.width}px`,
      height: `${_vm.height}px`,
      marginTop: '20px'
    },
    on: {
      "onmousemove": _vm.move,
      "onmouseout": _vm.leave
    }
  })]) : _vm._e();
};
var treeChartvue_type_template_id_152a0934_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/11矩形树图/背景树图/treeChart.vue?vue&type=template&id=152a0934

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/11矩形树图/背景树图/treeChart.vue?vue&type=script&lang=js

// import { mapState } from 'vuex'
/* harmony default export */ var treeChartvue_type_script_lang_js = ({
  computed: {
    // ...mapState(['officesState']),
  },
  data() {
    return {
      option: null,
      barChart: null,
      loopData: [],
      num: 0,
      //当前选中的value
      selectedSeries: {
        category: '',
        value: '',
        sum: ''
      },
      sum: 0
    };
  },
  props: {
    flag: {
      type: String,
      default: '新办'
    },
    height: {
      type: String,
      default: '178'
    },
    //高度
    width: {
      type: String,
      default: '500px'
    },
    //宽度
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '大数据产业',
          value: 40
        }, {
          name: '人工智能产业',
          value: 20
        }, {
          name: '区块链产业',
          value: 20
        }, {
          name: '服务业',
          value: 5
        }, {
          name: '制造业',
          value: 5
        }, {
          name: '医疗卫生业',
          value: 5
        }];
      }
    },
    rowColor: {
      type: Array,
      default: () => {
        return ['#00FFFF', '#00DD8A', '#00D9D9', '#95FF2B', '#7373FF', '#2693FF', '#00698C'];
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
    });
  },
  watch: {
    rowData: {
      handler() {
        this.$nextTick(() => {
          this.drawChart();
        });
      },
      immediate: true,
      deep: true
    },
    flag: {
      handler(val) {
        console.log(val);
      }
    }
  },
  methods: {
    drawChart() {
      let that = this;
      this.barChart = this.$echarts.init(this.$refs.barChart);
      // data对象中添加color属性
      this.rowData.forEach((item, index) => {
        // this.rowData[index].itemStyle = {
        //   color: this.rowColor[index],
        //   borderColor: "transparent"
        // };
        this.rowData[index].children = [{
          name: item.name,
          value: item.value,
          itemStyle: {
            color: this.rowColor[index],
            borderWidth: 0,
            borderColor: 'transparent',
            label: {
              show: true,
              formatter: '{b}: {c}'
            }
          },
          emphasis: {
            itemStyle: {
              color: 'rgba(0,0,0,0.6)',
              borderWidth: 50,
              borderColor: 'transparent'
            },
            label: {
              show: true,
              formatter: function (info) {
                that.loopData = that.convertData(that.rowData);
                if (info.name !== '') {
                  let res = `{a|${that.flag ? that.flag : '新办'}户占比}` + '\r\n' + `{b|${that.loopData[index].num}}` + '\r\n' + `{a|${that.flag ? that.flag : '新办'}户数量}` + '\r\n' + `{b|${that.loopData[index].value}户}`;
                  return res;
                } else {
                  return '';
                }
              },
              rich: {
                a: {
                  color: '#fff',
                  lineHeight: 30,
                  fontFamily: '腾祥智黑简',
                  fontSize: 18,
                  align: 'center'
                },
                b: {
                  color: '#4CFFFF',
                  lineHeight: 30,
                  fontFamily: '腾祥智黑简',
                  fontSize: 18,
                  align: 'center'
                },
                c: {
                  color: 'blue',
                  height: 40
                }
              },
              textStyle: {
                color: '#fff',
                fontSize: 22
              },
              backgroundColor: 'transparent'
            }
          }
        }];
      });
      this.option = {
        levels: [{
          color: 'rgba(0,0,0,0.0)'
        }],
        series: [{
          type: 'treemap',
          roam: false,
          // 禁止拖拽
          nodeClick: false,
          // 子项禁止点击
          breadcrumb: {
            // 面包屑
            show: false
          },
          width: '100%',
          height: '100%',
          label: {
            show: true,
            formatter: '{b}',
            normal: {
              textStyle: {
                ellipsis: true,
                //圆角,
                fontFamily: '微软雅黑',
                fontSize: 18,
                color: '#00FFFF'
              }
            }
          },
          itemStyle: {
            borderColor: 'transparent',
            color: 'transparent',
            gapWidth: 8,
            colorAlpha: [0.3],
            label: {
              show: false,
              formatter: '{b}: {c}'
            }
            // shadowColor: "rgba(0, 0, 0, 0.5)",
            // shadowBlur: 10
          },
          data: this.rowData
        }]
      };
      // 清除点击事件
      // this.barChart.off('click')
      // this.barChart.on('click', function (params) {
      //         this.officesState = !this.officesState
      //   that.$store.commit('changeOfficesState', this.officesState)
      //   that.$store.commit('changeOffices', params.data.name)
      //   that.$store.commit('changeOfficesCode', params.data.code)

      // })

      this.barChart.on('mouseover', function () {
        // alert(111);
      });
      this.barChart.on(' mouseout', function () {
        // alert(222);
      });
      this.barChart.setOption(this.option, true);
    },
    //value转换
    convertData(rowData) {
      this.sum = 0;
      let returnData = [];
      rowData.forEach(d => {
        this.sum += d.value;
        returnData.push({
          value: d.value,
          name: d.name
          // itemStyle: {
          //   color: legends[d.category]
          // }
        });
      });
      returnData.forEach(d => {
        d.num = this.sum == 0 ? '0' : (d.value / this.sum * 100).toFixed(0) + '%';
      });
      return returnData;
    },
    move() {},
    leave() {}
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/11矩形树图/背景树图/treeChart.vue?vue&type=script&lang=js
 /* harmony default export */ var _treeChartvue_type_script_lang_js = (treeChartvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Chart Library/11矩形树图/背景树图/treeChart.vue





/* normalize component */

var treeChart_component = Object(componentNormalizer["a" /* default */])(
  _treeChartvue_type_script_lang_js,
  treeChartvue_type_template_id_152a0934_render,
  treeChartvue_type_template_id_152a0934_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var treeChart = (treeChart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c022066c-vue-loader-template"}!./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/11矩形树图/普通树图/RectangleChart.vue?vue&type=template&id=5bb6aa9c
var RectangleChartvue_type_template_id_5bb6aa9c_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.rowData != null ? _c('div', {
    staticClass: "barChart"
  }, [_c('div', {
    ref: "barChart",
    staticClass: "barEcharts",
    style: {
      width: `${_vm.width}px`,
      height: `${_vm.height}px`,
      marginTop: '20px'
    }
  })]) : _vm._e();
};
var RectangleChartvue_type_template_id_5bb6aa9c_staticRenderFns = [];

// CONCATENATED MODULE: ./src/components/Chart Library/11矩形树图/普通树图/RectangleChart.vue?vue&type=template&id=5bb6aa9c

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Chart Library/11矩形树图/普通树图/RectangleChart.vue?vue&type=script&lang=js
// import { mapState } from 'vuex'
/* harmony default export */ var RectangleChartvue_type_script_lang_js = ({
  computed: {
    // ...mapState(['officesState']),
  },
  data() {
    return {
      option: null,
      barChart: null
    };
  },
  props: {
    height: {
      type: String,
      default: '178'
    },
    //高度
    width: {
      type: String,
      default: '500px'
    },
    //宽度
    rowData: {
      type: Array,
      default: () => {
        return [{
          name: '大数据产业',
          value: 40
        }, {
          name: '人工智能产业',
          value: 20
        }, {
          name: '区块链产业',
          value: 20
        }, {
          name: '服务业',
          value: 5
        }, {
          name: '制造业',
          value: 5
        }, {
          name: '医疗卫生业',
          value: 5
        }];
      }
    },
    rowColor: {
      type: Array,
      default: () => {
        return ['#00BFFF', '#00DD8A', '#00D9D9', '#95FF2B', '#7373FF', '#2693FF', '#00698C'];
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawChart();
    });
  },
  watch: {
    rowData: {
      handler() {
        this.$nextTick(() => {
          this.drawChart();
        });
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    drawChart() {
      // let that = this
      this.barChart = this.$echarts.init(this.$refs.barChart);
      // data对象中添加color属性
      for (var i = 0; i < this.rowData.length; i++) {
        // this.rowData[i].name =this.rowData[i].Ksmc
        // this.rowData[i].value=this.rowData[i].Tjsz
        // delete(this.rowData[i].Ksmc)
        // delete(this.rowData[i].Tjsz)
        this.rowData[i].itemStyle = {
          color: this.rowColor[i]
        };
      }
      this.option = {
        series: [{
          type: 'treemap',
          roam: false,
          // 禁止拖拽
          nodeClick: false,
          // 子项禁止点击
          breadcrumb: {
            // 面包屑
            show: false
          },
          width: '100%',
          height: '100%',
          label: {
            show: true,
            formatter: '{b}',
            fontFamily: '腾祥智黑简',
            fontSize: 16,
            color: '#000000'
          },
          itemStyle: {
            borderColor: '#062E43',
            borderWidth: 0,
            gapWidth: 2
          },
          data: this.rowData
        }]
      };
      // 清除点击事件
      // this.barChart.off('click')
      // this.barChart.on('click', function (params) {
      //         this.officesState = !this.officesState
      //   that.$store.commit('changeOfficesState', this.officesState)
      //   that.$store.commit('changeOffices', params.data.name)
      //   that.$store.commit('changeOfficesCode', params.data.code)

      // })
      this.barChart.setOption(this.option, true);
    }
  }
});
// CONCATENATED MODULE: ./src/components/Chart Library/11矩形树图/普通树图/RectangleChart.vue?vue&type=script&lang=js
 /* harmony default export */ var _RectangleChartvue_type_script_lang_js = (RectangleChartvue_type_script_lang_js); 
// CONCATENATED MODULE: ./src/components/Chart Library/11矩形树图/普通树图/RectangleChart.vue





/* normalize component */

var RectangleChart_component = Object(componentNormalizer["a" /* default */])(
  _RectangleChartvue_type_script_lang_js,
  RectangleChartvue_type_template_id_5bb6aa9c_render,
  RectangleChartvue_type_template_id_5bb6aa9c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RectangleChart = (RectangleChart_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/ChartLibraryView/Other.vue?vue&type=script&lang=js

// import Water from '../../components/Chart Library/10-水球图/普通水球图/Water';




/* harmony default export */ var Othervue_type_script_lang_js = ({
  name: 'App',
  components: {
    Table: Table,
    VideoCommon: VideoCommon,
    treeChart: treeChart,
    RectangleChart: RectangleChart
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onSubmit() {
      console.log('submit!', this.form);
    },
    copyImportedFileContent(val) {
      axios_default.a.get(`./data/other/文本/${val}.txt`).then(res => {
        // 获取要复制的内容
        var textArea = document.createElement('textarea');
        textArea.value = res.data;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        // 提示复制成功
        alert('内容已复制到剪贴板');
      }).catch(err => {
        console.error('加载文件失败：', err);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/views/ChartLibraryView/Other.vue?vue&type=script&lang=js
 /* harmony default export */ var ChartLibraryView_Othervue_type_script_lang_js = (Othervue_type_script_lang_js); 
// EXTERNAL MODULE: ./src/views/ChartLibraryView/Other.vue?vue&type=style&index=0&id=6413c777&prod&lang=less&scoped=true
var Othervue_type_style_index_0_id_6413c777_prod_lang_less_scoped_true = __webpack_require__("67b3");

// CONCATENATED MODULE: ./src/views/ChartLibraryView/Other.vue






/* normalize component */

var Other_component = Object(componentNormalizer["a" /* default */])(
  ChartLibraryView_Othervue_type_script_lang_js,
  Othervue_type_template_id_6413c777_scoped_true_render,
  Othervue_type_template_id_6413c777_scoped_true_staticRenderFns,
  false,
  null,
  "6413c777",
  null
  
)

/* harmony default export */ var Other = (Other_component.exports);
// CONCATENATED MODULE: ./src/router/index.js
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-07-22 02:06:03
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-11-30 15:10:51
 * @FilePath: \图表库ing\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */







vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
const routes = [{
  path: '/',
  name: '首页',
  redirect: '/index'
}, {
  path: '/index',
  name: '首页',
  component: () => __webpack_require__.e(/* import() | about */ "about").then(__webpack_require__.bind(null, "d504"))
}, {
  path: '/aboutMe',
  name: '关于我的',
  component: () => __webpack_require__.e(/* import() */ "chunk-68e8a80c").then(__webpack_require__.bind(null, "dd86"))
}, {
  path: '/echarts',
  children: [
  // 子路由
  {
    path: '/echarts/zhexian',
    name: 'zhexian',
    component: Zhexian
  },
  // 折线
  {
    path: '/echarts/ZhuTu',
    name: 'ZhuTu',
    component: Zhutu
  },
  // 柱图
  {
    path: '/echarts/pieChart',
    name: 'pieChart',
    component: pieChart
  },
  // 饼图
  {
    path: '/echarts/LeiDa',
    name: 'LeiDa',
    component: LeiDa
  },
  // 雷达
  {
    path: '/echarts/Other',
    name: 'Other',
    component: Other
  } // 其他组件
  ],
  name: '关于我的',
  component: () => __webpack_require__.e(/* import() */ "chunk-a86754ee").then(__webpack_require__.bind(null, "b0c4"))
}, {
  path: '/resume',
  name: '个人作品',
  component: () => __webpack_require__.e(/* import() */ "chunk-7a65e17d").then(__webpack_require__.bind(null, "8672"))
}, {
  path: '/work',
  name: '工作经历',
  component: () => __webpack_require__.e(/* import() */ "chunk-71a009c6").then(__webpack_require__.bind(null, "f126"))
}, {
  path: '/tables',
  name: '美女自拍',
  component: () => __webpack_require__.e(/* import() */ "about").then(__webpack_require__.bind(null, "d504"))
}, {
  path: '*',
  name: '404',
  component: () => __webpack_require__.e(/* import() */ "chunk-25793009").then(__webpack_require__.bind(null, "8cdb"))
}];
const router = new vue_router_esm["a" /* default */]({
  routes
});
/* harmony default export */ var src_router = (router);
// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./src/store/index.js
/*
 * @Author: 赵姐
 * @Date: 2023-07-22 02:06:03
 * @LastEditTime: 2023-12-02 17:58:39
 * Copyright: 2023 xxxTech CO.,LTD. All Rights Reserved.
 */


vue_runtime_esm["default"].use(vuex_esm["a" /* default */]);
/* harmony default export */ var store = (new vuex_esm["a" /* default */].Store({
  state: {
    topicId: '',
    //当前主题下标
    routerPath: '',
    // 当前主题路径
    scale: 1 //页面缩放倍率
  },
  mutations: {
    setTopicId(state, ind) {
      state.topicId = ind;
    },
    setRouter(state, ind) {
      state.routerPath = ind;
    },
    setUpdataC(state, ind) {
      state.routerPath = ind;
    },
    setScale(state, ind) {
      state.scale = ind;
    }
  },
  actions: {},
  modules: {}
}));
// EXTERNAL MODULE: ./node_modules/element-ui/lib/element-ui.common.js
var element_ui_common = __webpack_require__("5c96");
var element_ui_common_default = /*#__PURE__*/__webpack_require__.n(element_ui_common);

// EXTERNAL MODULE: ./node_modules/element-ui/lib/theme-chalk/index.css
var theme_chalk = __webpack_require__("0fae");

// EXTERNAL MODULE: ./src/assets/style/base.css
var base = __webpack_require__("a531");

// EXTERNAL MODULE: ./node_modules/wowjs/dist/wow.js
var wow = __webpack_require__("bc1b");

// EXTERNAL MODULE: ./node_modules/wowjs/css/libs/animate.css
var animate = __webpack_require__("e9a2");
var animate_default = /*#__PURE__*/__webpack_require__.n(animate);

// EXTERNAL MODULE: ./node_modules/vue-fullscreen/dist/vue-fullscreen.min.js
var vue_fullscreen_min = __webpack_require__("03cd");
var vue_fullscreen_min_default = /*#__PURE__*/__webpack_require__.n(vue_fullscreen_min);

// EXTERNAL MODULE: ./node_modules/vue-seamless-scroll/dist/vue-seamless-scroll.min.js
var vue_seamless_scroll_min = __webpack_require__("a939");
var vue_seamless_scroll_min_default = /*#__PURE__*/__webpack_require__.n(vue_seamless_scroll_min);

// CONCATENATED MODULE: ./src/main.js













vue_runtime_esm["default"].use(vue_seamless_scroll_min_default.a);
vue_runtime_esm["default"].use(vue_fullscreen_min_default.a);
vue_runtime_esm["default"].prototype.$echarts = echarts;
vue_runtime_esm["default"].prototype.$axios = axios_default.a;

//这里需要将样式用起来，
vue_runtime_esm["default"].use(animate_default.a);
//创建全局实例
vue_runtime_esm["default"].prototype.$wow = new wow["WOW"]({
  boxClass: 'wow',
  // 需要执行动画的元素的 class
  animateClass: 'animated',
  //animation.css 动画的 class
  offset: 0,
  // 距离可视区域多少开始执行动画
  mobile: true,
  // 是否在移动设备上执行动画
  live: true // 异步加载的内容是否有效
});
vue_runtime_esm["default"].use(element_ui_common_default.a);
vue_runtime_esm["default"].config.productionTip = false;
// Vue.prototype.$wow = wow;

new vue_runtime_esm["default"]({
  router: src_router,
  store: store,
  render: h => h(App)
}).$mount('#app');

/***/ }),

/***/ "578e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roseCharts_vue_vue_type_style_index_0_id_e902b00a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("efec");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roseCharts_vue_vue_type_style_index_0_id_e902b00a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_roseCharts_vue_vue_type_style_index_0_id_e902b00a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "5c0e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b4c92516_prod_lang_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6add");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b4c92516_prod_lang_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_id_b4c92516_prod_lang_less__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "61a8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineCharts_xuxian_vue_vue_type_style_index_0_id_10e98b96_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a772");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineCharts_xuxian_vue_vue_type_style_index_0_id_10e98b96_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineCharts_xuxian_vue_vue_type_style_index_0_id_10e98b96_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "61cc":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "66f6":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "67b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Other_vue_vue_type_style_index_0_id_6413c777_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8353");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Other_vue_vue_type_style_index_0_id_6413c777_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Other_vue_vue_type_style_index_0_id_6413c777_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6a53":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6add":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6c7a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_style_index_0_id_4185133e_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("54f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_style_index_0_id_4185133e_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChartPie_vue_vue_type_style_index_0_id_4185133e_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6f51":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7b09":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8055":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CylindricalPlot_vue_vue_type_style_index_0_id_7322b608_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ce04");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CylindricalPlot_vue_vue_type_style_index_0_id_7322b608_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CylindricalPlot_vue_vue_type_style_index_0_id_7322b608_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8353":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "84a3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8f33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Zhutu_vue_vue_type_style_index_0_id_9141dba6_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("151b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Zhutu_vue_vue_type_style_index_0_id_9141dba6_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Zhutu_vue_vue_type_style_index_0_id_9141dba6_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "9e10":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StackDuoZhuTu_vue_vue_type_style_index_0_id_5a0b5438_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("84a3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StackDuoZhuTu_vue_vue_type_style_index_0_id_5a0b5438_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StackDuoZhuTu_vue_vue_type_style_index_0_id_5a0b5438_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a199":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a41b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_style_index_0_id_0d3227ee_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("512ce");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_style_index_0_id_0d3227ee_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DoughnutChart_vue_vue_type_style_index_0_id_0d3227ee_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "a531":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a772":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a9c3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuoZhuTu_vue_vue_type_style_index_0_id_7047ded7_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3375");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuoZhuTu_vue_vue_type_style_index_0_id_7047ded7_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DuoZhuTu_vue_vue_type_style_index_0_id_7047ded7_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ac17":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CycloneChart_vue_vue_type_style_index_0_id_2d120cea_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("445b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CycloneChart_vue_vue_type_style_index_0_id_2d120cea_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CycloneChart_vue_vue_type_style_index_0_id_2d120cea_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "b5ca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HengTwoBarCharts_vue_vue_type_style_index_0_id_a94afc4a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7b09");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HengTwoBarCharts_vue_vue_type_style_index_0_id_a94afc4a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HengTwoBarCharts_vue_vue_type_style_index_0_id_a94afc4a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "bc19":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pieChart_vue_vue_type_style_index_0_id_23cccdc2_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6a53");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pieChart_vue_vue_type_style_index_0_id_23cccdc2_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pieChart_vue_vue_type_style_index_0_id_23cccdc2_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "ce04":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "d085":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_42ed3768_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("309c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_42ed3768_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_id_42ed3768_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "efb9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCommon_vue_vue_type_style_index_0_id_8e92524a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("325e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCommon_vue_vue_type_style_index_0_id_8e92524a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VideoCommon_vue_vue_type_style_index_0_id_8e92524a_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "efec":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "f166":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineCharts_vue_vue_type_style_index_0_id_e32b33da_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6f51");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineCharts_vue_vue_type_style_index_0_id_e32b33da_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LineCharts_vue_vue_type_style_index_0_id_e32b33da_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f2e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_locaLoopChart_vue_vue_type_style_index_0_id_4228168c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f9f7");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_locaLoopChart_vue_vue_type_style_index_0_id_4228168c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_locaLoopChart_vue_vue_type_style_index_0_id_4228168c_prod_lang_less_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "f9f7":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.41564aa0.js.map