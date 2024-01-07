"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-space";
exports.ids = ["vendor-chunks/micromark-factory-space"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-factory-space/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-space/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factorySpace: () => (/* binding */ factorySpace)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */ \n// To do: implement `spaceOrTab`, `spaceOrTabMinMax`, `spaceOrTabWithOptions`.\n/**\n * Parse spaces and tabs.\n *\n * There is no `nok` parameter:\n *\n * *   spaces in markdown are often optional, in which case this factory can be\n *     used and `ok` will be switched to whether spaces were found or not\n * *   one line ending or space can be detected with `markdownSpace(code)` right\n *     before using `factorySpace`\n *\n * ###### Examples\n *\n * Where `␉` represents a tab (plus how much it expands) and `␠` represents a\n * single space.\n *\n * ```markdown\n * ␉\n * ␠␠␠␠\n * ␉␠\n * ```\n *\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {TokenType} type\n *   Type (`' \\t'`).\n * @param {number | undefined} [max=Infinity]\n *   Max (exclusive).\n * @returns {State}\n *   Start state.\n */ function factorySpace(effects, ok, type, max) {\n    const limit = max ? max - 1 : Number.POSITIVE_INFINITY;\n    let size = 0;\n    return start;\n    /** @type {State} */ function start(code) {\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code)) {\n            effects.enter(type);\n            return prefix(code);\n        }\n        return ok(code);\n    }\n    /** @type {State} */ function prefix(code) {\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_0__.markdownSpace)(code) && size++ < limit) {\n            effects.consume(code);\n            return prefix;\n        }\n        effects.exit(type);\n        return ok(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7Q0FJQyxHQUVxRDtBQUV0RCw4RUFBOEU7QUFFOUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0ErQkMsR0FDTSxTQUFTQyxhQUFhQyxPQUFPLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxHQUFHO0lBQ2pELE1BQU1DLFFBQVFELE1BQU1BLE1BQU0sSUFBSUUsT0FBT0MsaUJBQWlCO0lBQ3RELElBQUlDLE9BQU87SUFFWCxPQUFPQztJQUVQLGtCQUFrQixHQUNsQixTQUFTQSxNQUFNQyxJQUFJO1FBQ2pCLElBQUlYLHVFQUFhQSxDQUFDVyxPQUFPO1lBQ3ZCVCxRQUFRVSxLQUFLLENBQUNSO1lBQ2QsT0FBT1MsT0FBT0Y7UUFDaEI7UUFFQSxPQUFPUixHQUFHUTtJQUNaO0lBRUEsa0JBQWtCLEdBQ2xCLFNBQVNFLE9BQU9GLElBQUk7UUFDbEIsSUFBSVgsdUVBQWFBLENBQUNXLFNBQVNGLFNBQVNILE9BQU87WUFDekNKLFFBQVFZLE9BQU8sQ0FBQ0g7WUFDaEIsT0FBT0U7UUFDVDtRQUVBWCxRQUFRYSxJQUFJLENBQUNYO1FBQ2IsT0FBT0QsR0FBR1E7SUFDWjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3Rvcnktc3BhY2UvZGV2L2luZGV4LmpzPzYxZDIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkVmZmVjdHN9IEVmZmVjdHNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLlRva2VuVHlwZX0gVG9rZW5UeXBlXG4gKi9cblxuaW1wb3J0IHttYXJrZG93blNwYWNlfSBmcm9tICdtaWNyb21hcmstdXRpbC1jaGFyYWN0ZXInXG5cbi8vIFRvIGRvOiBpbXBsZW1lbnQgYHNwYWNlT3JUYWJgLCBgc3BhY2VPclRhYk1pbk1heGAsIGBzcGFjZU9yVGFiV2l0aE9wdGlvbnNgLlxuXG4vKipcbiAqIFBhcnNlIHNwYWNlcyBhbmQgdGFicy5cbiAqXG4gKiBUaGVyZSBpcyBubyBgbm9rYCBwYXJhbWV0ZXI6XG4gKlxuICogKiAgIHNwYWNlcyBpbiBtYXJrZG93biBhcmUgb2Z0ZW4gb3B0aW9uYWwsIGluIHdoaWNoIGNhc2UgdGhpcyBmYWN0b3J5IGNhbiBiZVxuICogICAgIHVzZWQgYW5kIGBva2Agd2lsbCBiZSBzd2l0Y2hlZCB0byB3aGV0aGVyIHNwYWNlcyB3ZXJlIGZvdW5kIG9yIG5vdFxuICogKiAgIG9uZSBsaW5lIGVuZGluZyBvciBzcGFjZSBjYW4gYmUgZGV0ZWN0ZWQgd2l0aCBgbWFya2Rvd25TcGFjZShjb2RlKWAgcmlnaHRcbiAqICAgICBiZWZvcmUgdXNpbmcgYGZhY3RvcnlTcGFjZWBcbiAqXG4gKiAjIyMjIyMgRXhhbXBsZXNcbiAqXG4gKiBXaGVyZSBg4pCJYCByZXByZXNlbnRzIGEgdGFiIChwbHVzIGhvdyBtdWNoIGl0IGV4cGFuZHMpIGFuZCBg4pCgYCByZXByZXNlbnRzIGFcbiAqIHNpbmdsZSBzcGFjZS5cbiAqXG4gKiBgYGBtYXJrZG93blxuICog4pCJXG4gKiDikKDikKDikKDikKBcbiAqIOKQieKQoFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFZmZlY3RzfSBlZmZlY3RzXG4gKiAgIENvbnRleHQuXG4gKiBAcGFyYW0ge1N0YXRlfSBva1xuICogICBTdGF0ZSBzd2l0Y2hlZCB0byB3aGVuIHN1Y2Nlc3NmdWwuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gdHlwZVxuICogICBUeXBlIChgJyBcXHQnYCkuXG4gKiBAcGFyYW0ge251bWJlciB8IHVuZGVmaW5lZH0gW21heD1JbmZpbml0eV1cbiAqICAgTWF4IChleGNsdXNpdmUpLlxuICogQHJldHVybnMge1N0YXRlfVxuICogICBTdGFydCBzdGF0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBvaywgdHlwZSwgbWF4KSB7XG4gIGNvbnN0IGxpbWl0ID0gbWF4ID8gbWF4IC0gMSA6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWVxuICBsZXQgc2l6ZSA9IDBcblxuICByZXR1cm4gc3RhcnRcblxuICAvKiogQHR5cGUge1N0YXRlfSAqL1xuICBmdW5jdGlvbiBzdGFydChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICAgIHJldHVybiBwcmVmaXgoY29kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gb2soY29kZSlcbiAgfVxuXG4gIC8qKiBAdHlwZSB7U3RhdGV9ICovXG4gIGZ1bmN0aW9uIHByZWZpeChjb2RlKSB7XG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkgJiYgc2l6ZSsrIDwgbGltaXQpIHtcbiAgICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgICAgcmV0dXJuIHByZWZpeFxuICAgIH1cblxuICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgIHJldHVybiBvayhjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsibWFya2Rvd25TcGFjZSIsImZhY3RvcnlTcGFjZSIsImVmZmVjdHMiLCJvayIsInR5cGUiLCJtYXgiLCJsaW1pdCIsIk51bWJlciIsIlBPU0lUSVZFX0lORklOSVRZIiwic2l6ZSIsInN0YXJ0IiwiY29kZSIsImVudGVyIiwicHJlZml4IiwiY29uc3VtZSIsImV4aXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-factory-space/dev/index.js\n");

/***/ })

};
;