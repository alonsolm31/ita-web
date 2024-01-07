"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm-task-list-item";
exports.ids = ["vendor-chunks/micromark-extension-gfm-task-list-item"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItemHtml: () => (/* binding */ gfmTaskListItemHtml)\n/* harmony export */ });\n/**\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */ /**\n * Create an HTML extension for `micromark` to support GFM task list items when\n * serializing to HTML.\n *\n * @returns {HtmlExtension}\n *   Extension for `micromark` that can be passed in `htmlExtensions` to\n *   support GFM task list items when serializing to HTML.\n */ function gfmTaskListItemHtml() {\n    return {\n        enter: {\n            taskListCheck () {\n                this.tag('<input type=\"checkbox\" disabled=\"\" ');\n            }\n        },\n        exit: {\n            taskListCheck () {\n                this.tag(\"/>\");\n            },\n            taskListCheckValueChecked () {\n                this.tag('checked=\"\" ');\n            }\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9odG1sLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7Q0FFQyxHQUVEOzs7Ozs7O0NBT0MsR0FDTSxTQUFTQTtJQUNkLE9BQU87UUFDTEMsT0FBTztZQUNMQztnQkFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQztZQUNYO1FBQ0Y7UUFDQUMsTUFBTTtZQUNKRjtnQkFDRSxJQUFJLENBQUNDLEdBQUcsQ0FBQztZQUNYO1lBQ0FFO2dCQUNFLElBQUksQ0FBQ0YsR0FBRyxDQUFDO1lBQ1g7UUFDRjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS10YXNrLWxpc3QtaXRlbS9kZXYvbGliL2h0bWwuanM/N2U2NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuSHRtbEV4dGVuc2lvbn0gSHRtbEV4dGVuc2lvblxuICovXG5cbi8qKlxuICogQ3JlYXRlIGFuIEhUTUwgZXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0byBzdXBwb3J0IEdGTSB0YXNrIGxpc3QgaXRlbXMgd2hlblxuICogc2VyaWFsaXppbmcgdG8gSFRNTC5cbiAqXG4gKiBAcmV0dXJucyB7SHRtbEV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0aGF0IGNhbiBiZSBwYXNzZWQgaW4gYGh0bWxFeHRlbnNpb25zYCB0b1xuICogICBzdXBwb3J0IEdGTSB0YXNrIGxpc3QgaXRlbXMgd2hlbiBzZXJpYWxpemluZyB0byBIVE1MLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtVGFza0xpc3RJdGVtSHRtbCgpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlcjoge1xuICAgICAgdGFza0xpc3RDaGVjaygpIHtcbiAgICAgICAgdGhpcy50YWcoJzxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBkaXNhYmxlZD1cIlwiICcpXG4gICAgICB9XG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICB0YXNrTGlzdENoZWNrKCkge1xuICAgICAgICB0aGlzLnRhZygnLz4nKVxuICAgICAgfSxcbiAgICAgIHRhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQoKSB7XG4gICAgICAgIHRoaXMudGFnKCdjaGVja2VkPVwiXCIgJylcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJnZm1UYXNrTGlzdEl0ZW1IdG1sIiwiZW50ZXIiLCJ0YXNrTGlzdENoZWNrIiwidGFnIiwiZXhpdCIsInRhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTaskListItem: () => (/* binding */ gfmTaskListItem)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-factory-space */ \"(rsc)/./node_modules/micromark-factory-space/dev/index.js\");\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/types.js\");\n/**\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').Tokenizer} Tokenizer\n */ \n\n\n\nconst tasklistCheck = {\n    tokenize: tokenizeTasklistCheck\n};\n/**\n * Create an HTML extension for `micromark` to support GFM task list items\n * syntax.\n *\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `htmlExtensions` to\n *   support GFM task list items when serializing to HTML.\n */ function gfmTaskListItem() {\n    return {\n        text: {\n            [micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftSquareBracket]: tasklistCheck\n        }\n    };\n}\n/**\n * @this {TokenizeContext}\n * @type {Tokenizer}\n */ function tokenizeTasklistCheck(effects, ok, nok) {\n    const self = this;\n    return open;\n    /**\n   * At start of task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *       ^\n   * ```\n   *\n   * @type {State}\n   */ function open(code) {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_1__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.leftSquareBracket, \"expected `[`\");\n        if (// Exit if there’s stuff before.\n        self.previous !== micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof || // Exit if not in the first content that is the first child of a list\n        // item.\n        !self._gfmTasklistFirstContentOfListItem) {\n            return nok(code);\n        }\n        effects.enter(\"taskListCheck\");\n        effects.enter(\"taskListCheckMarker\");\n        effects.consume(code);\n        effects.exit(\"taskListCheckMarker\");\n        return inside;\n    }\n    /**\n   * In task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */ function inside(code) {\n        // Currently we match how GH works in files.\n        // To match how GH works in comments, use `markdownSpace` (`[\\t ]`) instead\n        // of `markdownLineEndingOrSpace` (`[\\t\\n\\r ]`).\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEndingOrSpace)(code)) {\n            effects.enter(\"taskListCheckValueUnchecked\");\n            effects.consume(code);\n            effects.exit(\"taskListCheckValueUnchecked\");\n            return close;\n        }\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.uppercaseX || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.lowercaseX) {\n            effects.enter(\"taskListCheckValueChecked\");\n            effects.consume(code);\n            effects.exit(\"taskListCheckValueChecked\");\n            return close;\n        }\n        return nok(code);\n    }\n    /**\n   * At close of task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *         ^\n   * ```\n   *\n   * @type {State}\n   */ function close(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.rightSquareBracket) {\n            effects.enter(\"taskListCheckMarker\");\n            effects.consume(code);\n            effects.exit(\"taskListCheckMarker\");\n            effects.exit(\"taskListCheck\");\n            return after;\n        }\n        return nok(code);\n    }\n    /**\n   * @type {State}\n   */ function after(code) {\n        // EOL in paragraph means there must be something else after it.\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownLineEnding)(code)) {\n            return ok(code);\n        }\n        // Space or tab?\n        // Check what comes after.\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.markdownSpace)(code)) {\n            return effects.check({\n                tokenize: spaceThenNonSpace\n            }, ok, nok)(code);\n        }\n        // EOF, or non-whitespace, both wrong.\n        return nok(code);\n    }\n}\n/**\n * @this {TokenizeContext}\n * @type {Tokenizer}\n */ function spaceThenNonSpace(effects, ok, nok) {\n    return (0,micromark_factory_space__WEBPACK_IMPORTED_MODULE_3__.factorySpace)(effects, after, micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.whitespace);\n    /**\n   * After whitespace, after task list item check.\n   *\n   * ```markdown\n   * > | * [x] y.\n   *           ^\n   * ```\n   *\n   * @type {State}\n   */ function after(code) {\n        // EOF means there was nothing, so bad.\n        // EOL means there’s content after it, so good.\n        // Impossible to have more spaces.\n        // Anything else is good.\n        return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_0__.codes.eof ? nok(code) : ok(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0vZGV2L2xpYi9zeW50YXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FFa0M7QUFDaUI7QUFLbkI7QUFDaUI7QUFFbEQsTUFBTVEsZ0JBQWdCO0lBQUNDLFVBQVVDO0FBQXFCO0FBRXREOzs7Ozs7O0NBT0MsR0FDTSxTQUFTQztJQUNkLE9BQU87UUFDTEMsTUFBTTtZQUFDLENBQUNOLHdEQUFLQSxDQUFDTyxpQkFBaUIsQ0FBQyxFQUFFTDtRQUFhO0lBQ2pEO0FBQ0Y7QUFFQTs7O0NBR0MsR0FDRCxTQUFTRSxzQkFBc0JJLE9BQU8sRUFBRWQsRUFBRSxFQUFFZSxHQUFHO0lBQzdDLE1BQU1DLE9BQU8sSUFBSTtJQUVqQixPQUFPQztJQUVQOzs7Ozs7Ozs7R0FTQyxHQUNELFNBQVNBLEtBQUtDLElBQUk7UUFDaEJqQiwwQ0FBTUEsQ0FBQ2lCLFNBQVNaLHdEQUFLQSxDQUFDTyxpQkFBaUIsRUFBRTtRQUV6QyxJQUNFLGdDQUFnQztRQUNoQ0csS0FBS0csUUFBUSxLQUFLYix3REFBS0EsQ0FBQ2MsR0FBRyxJQUMzQixxRUFBcUU7UUFDckUsUUFBUTtRQUNSLENBQUNKLEtBQUtLLGtDQUFrQyxFQUN4QztZQUNBLE9BQU9OLElBQUlHO1FBQ2I7UUFFQUosUUFBUVEsS0FBSyxDQUFDO1FBQ2RSLFFBQVFRLEtBQUssQ0FBQztRQUNkUixRQUFRUyxPQUFPLENBQUNMO1FBQ2hCSixRQUFRVSxJQUFJLENBQUM7UUFDYixPQUFPQztJQUNUO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0EsT0FBT1AsSUFBSTtRQUNsQiw0Q0FBNEM7UUFDNUMsMkVBQTJFO1FBQzNFLGdEQUFnRDtRQUNoRCxJQUFJZCxtRkFBeUJBLENBQUNjLE9BQU87WUFDbkNKLFFBQVFRLEtBQUssQ0FBQztZQUNkUixRQUFRUyxPQUFPLENBQUNMO1lBQ2hCSixRQUFRVSxJQUFJLENBQUM7WUFDYixPQUFPRTtRQUNUO1FBRUEsSUFBSVIsU0FBU1osd0RBQUtBLENBQUNxQixVQUFVLElBQUlULFNBQVNaLHdEQUFLQSxDQUFDc0IsVUFBVSxFQUFFO1lBQzFEZCxRQUFRUSxLQUFLLENBQUM7WUFDZFIsUUFBUVMsT0FBTyxDQUFDTDtZQUNoQkosUUFBUVUsSUFBSSxDQUFDO1lBQ2IsT0FBT0U7UUFDVDtRQUVBLE9BQU9YLElBQUlHO0lBQ2I7SUFFQTs7Ozs7Ozs7O0dBU0MsR0FDRCxTQUFTUSxNQUFNUixJQUFJO1FBQ2pCLElBQUlBLFNBQVNaLHdEQUFLQSxDQUFDdUIsa0JBQWtCLEVBQUU7WUFDckNmLFFBQVFRLEtBQUssQ0FBQztZQUNkUixRQUFRUyxPQUFPLENBQUNMO1lBQ2hCSixRQUFRVSxJQUFJLENBQUM7WUFDYlYsUUFBUVUsSUFBSSxDQUFDO1lBQ2IsT0FBT007UUFDVDtRQUVBLE9BQU9mLElBQUlHO0lBQ2I7SUFFQTs7R0FFQyxHQUNELFNBQVNZLE1BQU1aLElBQUk7UUFDakIsZ0VBQWdFO1FBQ2hFLElBQUlmLDRFQUFrQkEsQ0FBQ2UsT0FBTztZQUM1QixPQUFPbEIsR0FBR2tCO1FBQ1o7UUFFQSxnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLElBQUliLHVFQUFhQSxDQUFDYSxPQUFPO1lBQ3ZCLE9BQU9KLFFBQVFpQixLQUFLLENBQUM7Z0JBQUN0QixVQUFVdUI7WUFBaUIsR0FBR2hDLElBQUllLEtBQUtHO1FBQy9EO1FBRUEsc0NBQXNDO1FBQ3RDLE9BQU9ILElBQUlHO0lBQ2I7QUFDRjtBQUVBOzs7Q0FHQyxHQUNELFNBQVNjLGtCQUFrQmxCLE9BQU8sRUFBRWQsRUFBRSxFQUFFZSxHQUFHO0lBQ3pDLE9BQU9iLHFFQUFZQSxDQUFDWSxTQUFTZ0IsT0FBT3ZCLHdEQUFLQSxDQUFDMEIsVUFBVTtJQUVwRDs7Ozs7Ozs7O0dBU0MsR0FDRCxTQUFTSCxNQUFNWixJQUFJO1FBQ2pCLHVDQUF1QztRQUN2QywrQ0FBK0M7UUFDL0Msa0NBQWtDO1FBQ2xDLHlCQUF5QjtRQUN6QixPQUFPQSxTQUFTWix3REFBS0EsQ0FBQ2MsR0FBRyxHQUFHTCxJQUFJRyxRQUFRbEIsR0FBR2tCO0lBQzdDO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS10YXNrLWxpc3QtaXRlbS9kZXYvbGliL3N5bnRheC5qcz85NDA2Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5FeHRlbnNpb259IEV4dGVuc2lvblxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVyfSBUb2tlbml6ZXJcbiAqL1xuXG5pbXBvcnQge29rIGFzIGFzc2VydH0gZnJvbSAnZGV2bG9wJ1xuaW1wb3J0IHtmYWN0b3J5U3BhY2V9IGZyb20gJ21pY3JvbWFyay1mYWN0b3J5LXNwYWNlJ1xuaW1wb3J0IHtcbiAgbWFya2Rvd25MaW5lRW5kaW5nLFxuICBtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlLFxuICBtYXJrZG93blNwYWNlXG59IGZyb20gJ21pY3JvbWFyay11dGlsLWNoYXJhY3RlcidcbmltcG9ydCB7Y29kZXMsIHR5cGVzfSBmcm9tICdtaWNyb21hcmstdXRpbC1zeW1ib2wnXG5cbmNvbnN0IHRhc2tsaXN0Q2hlY2sgPSB7dG9rZW5pemU6IHRva2VuaXplVGFza2xpc3RDaGVja31cblxuLyoqXG4gKiBDcmVhdGUgYW4gSFRNTCBleHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRvIHN1cHBvcnQgR0ZNIHRhc2sgbGlzdCBpdGVtc1xuICogc3ludGF4LlxuICpcbiAqIEByZXR1cm5zIHtFeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdGhhdCBjYW4gYmUgcGFzc2VkIGluIGBodG1sRXh0ZW5zaW9uc2AgdG9cbiAqICAgc3VwcG9ydCBHRk0gdGFzayBsaXN0IGl0ZW1zIHdoZW4gc2VyaWFsaXppbmcgdG8gSFRNTC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdmbVRhc2tMaXN0SXRlbSgpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0OiB7W2NvZGVzLmxlZnRTcXVhcmVCcmFja2V0XTogdGFza2xpc3RDaGVja31cbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtUb2tlbml6ZUNvbnRleHR9XG4gKiBAdHlwZSB7VG9rZW5pemVyfVxuICovXG5mdW5jdGlvbiB0b2tlbml6ZVRhc2tsaXN0Q2hlY2soZWZmZWN0cywgb2ssIG5vaykge1xuICBjb25zdCBzZWxmID0gdGhpc1xuXG4gIHJldHVybiBvcGVuXG5cbiAgLyoqXG4gICAqIEF0IHN0YXJ0IG9mIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gb3Blbihjb2RlKSB7XG4gICAgYXNzZXJ0KGNvZGUgPT09IGNvZGVzLmxlZnRTcXVhcmVCcmFja2V0LCAnZXhwZWN0ZWQgYFtgJylcblxuICAgIGlmIChcbiAgICAgIC8vIEV4aXQgaWYgdGhlcmXigJlzIHN0dWZmIGJlZm9yZS5cbiAgICAgIHNlbGYucHJldmlvdXMgIT09IGNvZGVzLmVvZiB8fFxuICAgICAgLy8gRXhpdCBpZiBub3QgaW4gdGhlIGZpcnN0IGNvbnRlbnQgdGhhdCBpcyB0aGUgZmlyc3QgY2hpbGQgb2YgYSBsaXN0XG4gICAgICAvLyBpdGVtLlxuICAgICAgIXNlbGYuX2dmbVRhc2tsaXN0Rmlyc3RDb250ZW50T2ZMaXN0SXRlbVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2snKVxuICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tNYXJrZXInKVxuICAgIGVmZmVjdHMuY29uc3VtZShjb2RlKVxuICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgcmV0dXJuIGluc2lkZVxuICB9XG5cbiAgLyoqXG4gICAqIEluIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGluc2lkZShjb2RlKSB7XG4gICAgLy8gQ3VycmVudGx5IHdlIG1hdGNoIGhvdyBHSCB3b3JrcyBpbiBmaWxlcy5cbiAgICAvLyBUbyBtYXRjaCBob3cgR0ggd29ya3MgaW4gY29tbWVudHMsIHVzZSBgbWFya2Rvd25TcGFjZWAgKGBbXFx0IF1gKSBpbnN0ZWFkXG4gICAgLy8gb2YgYG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2VgIChgW1xcdFxcblxcciBdYCkuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZ09yU3BhY2UoY29kZSkpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZVVuY2hlY2tlZCcpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja1ZhbHVlVW5jaGVja2VkJylcbiAgICAgIHJldHVybiBjbG9zZVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBjb2Rlcy51cHBlcmNhc2VYIHx8IGNvZGUgPT09IGNvZGVzLmxvd2VyY2FzZVgpIHtcbiAgICAgIGVmZmVjdHMuZW50ZXIoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQnKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2tWYWx1ZUNoZWNrZWQnKVxuICAgICAgcmV0dXJuIGNsb3NlXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEF0IGNsb3NlIG9mIHRhc2sgbGlzdCBpdGVtIGNoZWNrLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgKiBbeF0geS5cbiAgICogICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBjbG9zZShjb2RlKSB7XG4gICAgaWYgKGNvZGUgPT09IGNvZGVzLnJpZ2h0U3F1YXJlQnJhY2tldCkge1xuICAgICAgZWZmZWN0cy5lbnRlcigndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIGVmZmVjdHMuZXhpdCgndGFza0xpc3RDaGVja01hcmtlcicpXG4gICAgICBlZmZlY3RzLmV4aXQoJ3Rhc2tMaXN0Q2hlY2snKVxuICAgICAgcmV0dXJuIGFmdGVyXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIGFmdGVyKGNvZGUpIHtcbiAgICAvLyBFT0wgaW4gcGFyYWdyYXBoIG1lYW5zIHRoZXJlIG11c3QgYmUgc29tZXRoaW5nIGVsc2UgYWZ0ZXIgaXQuXG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgcmV0dXJuIG9rKGNvZGUpXG4gICAgfVxuXG4gICAgLy8gU3BhY2Ugb3IgdGFiP1xuICAgIC8vIENoZWNrIHdoYXQgY29tZXMgYWZ0ZXIuXG4gICAgaWYgKG1hcmtkb3duU3BhY2UoY29kZSkpIHtcbiAgICAgIHJldHVybiBlZmZlY3RzLmNoZWNrKHt0b2tlbml6ZTogc3BhY2VUaGVuTm9uU3BhY2V9LCBvaywgbm9rKShjb2RlKVxuICAgIH1cblxuICAgIC8vIEVPRiwgb3Igbm9uLXdoaXRlc3BhY2UsIGJvdGggd3JvbmcuXG4gICAgcmV0dXJuIG5vayhjb2RlKVxuICB9XG59XG5cbi8qKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqIEB0eXBlIHtUb2tlbml6ZXJ9XG4gKi9cbmZ1bmN0aW9uIHNwYWNlVGhlbk5vblNwYWNlKGVmZmVjdHMsIG9rLCBub2spIHtcbiAgcmV0dXJuIGZhY3RvcnlTcGFjZShlZmZlY3RzLCBhZnRlciwgdHlwZXMud2hpdGVzcGFjZSlcblxuICAvKipcbiAgICogQWZ0ZXIgd2hpdGVzcGFjZSwgYWZ0ZXIgdGFzayBsaXN0IGl0ZW0gY2hlY2suXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCAqIFt4XSB5LlxuICAgKiAgICAgICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYWZ0ZXIoY29kZSkge1xuICAgIC8vIEVPRiBtZWFucyB0aGVyZSB3YXMgbm90aGluZywgc28gYmFkLlxuICAgIC8vIEVPTCBtZWFucyB0aGVyZeKAmXMgY29udGVudCBhZnRlciBpdCwgc28gZ29vZC5cbiAgICAvLyBJbXBvc3NpYmxlIHRvIGhhdmUgbW9yZSBzcGFjZXMuXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpcyBnb29kLlxuICAgIHJldHVybiBjb2RlID09PSBjb2Rlcy5lb2YgPyBub2soY29kZSkgOiBvayhjb2RlKVxuICB9XG59XG4iXSwibmFtZXMiOlsib2siLCJhc3NlcnQiLCJmYWN0b3J5U3BhY2UiLCJtYXJrZG93bkxpbmVFbmRpbmciLCJtYXJrZG93bkxpbmVFbmRpbmdPclNwYWNlIiwibWFya2Rvd25TcGFjZSIsImNvZGVzIiwidHlwZXMiLCJ0YXNrbGlzdENoZWNrIiwidG9rZW5pemUiLCJ0b2tlbml6ZVRhc2tsaXN0Q2hlY2siLCJnZm1UYXNrTGlzdEl0ZW0iLCJ0ZXh0IiwibGVmdFNxdWFyZUJyYWNrZXQiLCJlZmZlY3RzIiwibm9rIiwic2VsZiIsIm9wZW4iLCJjb2RlIiwicHJldmlvdXMiLCJlb2YiLCJfZ2ZtVGFza2xpc3RGaXJzdENvbnRlbnRPZkxpc3RJdGVtIiwiZW50ZXIiLCJjb25zdW1lIiwiZXhpdCIsImluc2lkZSIsImNsb3NlIiwidXBwZXJjYXNlWCIsImxvd2VyY2FzZVgiLCJyaWdodFNxdWFyZUJyYWNrZXQiLCJhZnRlciIsImNoZWNrIiwic3BhY2VUaGVuTm9uU3BhY2UiLCJ3aGl0ZXNwYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js\n");

/***/ })

};
;