"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-whitespace";
exports.ids = ["vendor-chunks/micromark-factory-whitespace"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-factory-whitespace/dev/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/micromark-factory-whitespace/dev/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryWhitespace: () => (/* binding */ factoryWhitespace)\n/* harmony export */ });\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-factory-space */ \"(rsc)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/types.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n */ \n\n\n/**\n * Parse spaces and tabs.\n *\n * There is no `nok` parameter:\n *\n * *   line endings or spaces in markdown are often optional, in which case this\n *     factory can be used and `ok` will be switched to whether spaces were found\n *     or not\n * *   one line ending or space can be detected with\n *     `markdownLineEndingOrSpace(code)` right before using `factoryWhitespace`\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @returns {State}\n *   Start state.\n */ function factoryWhitespace(effects, ok) {\n    /** @type {boolean} */ let seen;\n    return start;\n    /** @type {State} */ function start(code) {\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownLineEnding)(code)) {\n            effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding);\n            effects.consume(code);\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineEnding);\n            seen = true;\n            return start;\n        }\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n            return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_2__.factorySpace)(effects, start, seen ? micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.linePrefix : micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.types.lineSuffix)(code);\n        }\n        return ok(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktd2hpdGVzcGFjZS9kZXYvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Q0FHQyxHQUVtRDtBQUNzQjtBQUMvQjtBQUUzQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FpQkMsR0FDTSxTQUFTSSxrQkFBa0JDLE9BQU8sRUFBRUMsRUFBRTtJQUMzQyxvQkFBb0IsR0FDcEIsSUFBSUM7SUFFSixPQUFPQztJQUVQLGtCQUFrQixHQUNsQixTQUFTQSxNQUFNQyxJQUFJO1FBQ2pCLElBQUlSLDRFQUFrQkEsQ0FBQ1EsT0FBTztZQUM1QkosUUFBUUssS0FBSyxDQUFDUCx3REFBS0EsQ0FBQ1EsVUFBVTtZQUM5Qk4sUUFBUU8sT0FBTyxDQUFDSDtZQUNoQkosUUFBUVEsSUFBSSxDQUFDVix3REFBS0EsQ0FBQ1EsVUFBVTtZQUM3QkosT0FBTztZQUNQLE9BQU9DO1FBQ1Q7UUFFQSxJQUFJTix1RUFBYUEsQ0FBQ08sT0FBTztZQUN2QixPQUFPVCxxRUFBWUEsQ0FDakJLLFNBQ0FHLE9BQ0FELE9BQU9KLHdEQUFLQSxDQUFDVyxVQUFVLEdBQUdYLHdEQUFLQSxDQUFDWSxVQUFVLEVBQzFDTjtRQUNKO1FBRUEsT0FBT0gsR0FBR0c7SUFDWjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktd2hpdGVzcGFjZS9kZXYvaW5kZXguanM/NzAxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRWZmZWN0c30gRWZmZWN0c1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqL1xuXG5pbXBvcnQge2ZhY3RvcnlTcGFjZX0gZnJvbSAnbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UnXG5pbXBvcnQge21hcmtkb3duTGluZUVuZGluZywgbWFya2Rvd25TcGFjZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHt0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIFBhcnNlIHNwYWNlcyBhbmQgdGFicy5cbiAqXG4gKiBUaGVyZSBpcyBubyBgbm9rYCBwYXJhbWV0ZXI6XG4gKlxuICogKiAgIGxpbmUgZW5kaW5ncyBvciBzcGFjZXMgaW4gbWFya2Rvd24gYXJlIG9mdGVuIG9wdGlvbmFsLCBpbiB3aGljaCBjYXNlIHRoaXNcbiAqICAgICBmYWN0b3J5IGNhbiBiZSB1c2VkIGFuZCBgb2tgIHdpbGwgYmUgc3dpdGNoZWQgdG8gd2hldGhlciBzcGFjZXMgd2VyZSBmb3VuZFxuICogICAgIG9yIG5vdFxuICogKiAgIG9uZSBsaW5lIGVuZGluZyBvciBzcGFjZSBjYW4gYmUgZGV0ZWN0ZWQgd2l0aFxuICogICAgIGBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlKGNvZGUpYCByaWdodCBiZWZvcmUgdXNpbmcgYGZhY3RvcnlXaGl0ZXNwYWNlYFxuICpcbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiBzdWNjZXNzZnVsLlxuICogQHJldHVybnMge1N0YXRlfVxuICogICBTdGFydCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnlXaGl0ZXNwYWNlKGVmZmVjdHMsIG9rKSB7XG4gIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgbGV0IHNlZW5cblxuICByZXR1cm4gc3RhcnRcblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlcy5saW5lRW5kaW5nKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZXMubGluZUVuZGluZylcbiAgICAgIHNlZW4gPSB0cnVlXG4gICAgICByZXR1cm4gc3RhcnRcbiAgICB9XG5cbiAgICBpZiAobWFya2Rvd25TcGFjZShjb2RlKSkge1xuICAgICAgcmV0dXJuIGZhY3RvcnlTcGFjZShcbiAgICAgICAgZWZmZWN0cyxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIHNlZW4gPyB0eXBlcy5saW5lUHJlZml4IDogdHlwZXMubGluZVN1ZmZpeFxuICAgICAgKShjb2RlKVxuICAgIH1cblxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsiZmFjdG9yeVNwYWNlIiwibWFya2Rvd25MaW5lRW5kaW5nIiwibWFya2Rvd25TcGFjZSIsInR5cGVzIiwiZmFjdG9yeVdoaXRlc3BhY2UiLCJlZmZlY3RzIiwib2siLCJzZWVuIiwic3RhcnQiLCJjb2RlIiwiZW50ZXIiLCJsaW5lRW5kaW5nIiwiY29uc3VtZSIsImV4aXQiLCJsaW5lUHJlZml4IiwibGluZVN1ZmZpeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-factory-whitespace/dev/index.js\n");

/***/ })

};
;