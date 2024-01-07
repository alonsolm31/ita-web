"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-factory-label";
exports.ids = ["vendor-chunks/micromark-factory-label"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-factory-label/dev/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/micromark-factory-label/dev/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   factoryLabel: () => (/* binding */ factoryLabel)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/constants.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/types.js\");\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/**\n * @typedef {import('micromark-util-types').Effects} Effects\n * @typedef {import('micromark-util-types').State} State\n * @typedef {import('micromark-util-types').TokenizeContext} TokenizeContext\n * @typedef {import('micromark-util-types').TokenType} TokenType\n */ \n\n\n/**\n * Parse labels.\n *\n * > 👉 **Note**: labels in markdown are capped at 999 characters in the string.\n *\n * ###### Examples\n *\n * ```markdown\n * [a]\n * [a\n * b]\n * [a\\]b]\n * ```\n *\n * @this {TokenizeContext}\n *   Tokenize context.\n * @param {Effects} effects\n *   Context.\n * @param {State} ok\n *   State switched to when successful.\n * @param {State} nok\n *   State switched to when unsuccessful.\n * @param {TokenType} type\n *   Type of the whole label (`[a]`).\n * @param {TokenType} markerType\n *   Type for the markers (`[` and `]`).\n * @param {TokenType} stringType\n *   Type for the identifier (`a`).\n * @returns {State}\n *   Start state.\n */ // eslint-disable-next-line max-params\nfunction factoryLabel(effects, ok, nok, type, markerType, stringType) {\n    const self = this;\n    let size = 0;\n    /** @type {boolean} */ let seen;\n    return start;\n    /**\n   * Start of label.\n   *\n   * ```markdown\n   * > | [a]\n   *     ^\n   * ```\n   *\n   * @type {State}\n   */ function start(code) {\n        (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket, \"expected `[`\");\n        effects.enter(type);\n        effects.enter(markerType);\n        effects.consume(code);\n        effects.exit(markerType);\n        effects.enter(stringType);\n        return atBreak;\n    }\n    /**\n   * In label, at something, before something else.\n   *\n   * ```markdown\n   * > | [a]\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function atBreak(code) {\n        if (size > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket && !seen || // To do: remove in the future once we’ve switched from\n        // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,\n        // which doesn’t need this.\n        // Hidden footnotes hook.\n        /* c8 ignore next 3 */ code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.caret && !size && \"_hiddenFootnoteSupport\" in self.parser.constructs) {\n            return nok(code);\n        }\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {\n            effects.exit(stringType);\n            effects.enter(markerType);\n            effects.consume(code);\n            effects.exit(markerType);\n            effects.exit(type);\n            return ok;\n        }\n        // To do: indent? Link chunks and EOLs together?\n        if ((0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code)) {\n            effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding);\n            effects.consume(code);\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.lineEnding);\n            return atBreak;\n        }\n        effects.enter(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkString, {\n            contentType: micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.contentTypeString\n        });\n        return labelInside(code);\n    }\n    /**\n   * In label, in text.\n   *\n   * ```markdown\n   * > | [a]\n   *      ^\n   * ```\n   *\n   * @type {State}\n   */ function labelInside(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.eof || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket || (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownLineEnding)(code) || size++ > micromark_util_symbol__WEBPACK_IMPORTED_MODULE_2__.constants.linkReferenceSizeMax) {\n            effects.exit(micromark_util_symbol__WEBPACK_IMPORTED_MODULE_4__.types.chunkString);\n            return atBreak(code);\n        }\n        effects.consume(code);\n        if (!seen) seen = !(0,micromark_util_character__WEBPACK_IMPORTED_MODULE_3__.markdownSpace)(code);\n        return code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash ? labelEscape : labelInside;\n    }\n    /**\n   * After `\\`, at a special character.\n   *\n   * ```markdown\n   * > | [a\\*a]\n   *        ^\n   * ```\n   *\n   * @type {State}\n   */ function labelEscape(code) {\n        if (code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.leftSquareBracket || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.backslash || code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.rightSquareBracket) {\n            effects.consume(code);\n            size++;\n            return labelInside;\n        }\n        return labelInside(code);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWZhY3RvcnktbGFiZWwvZGV2L2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7OztDQUtDLEdBRXlFO0FBQ2I7QUFDMUI7QUFFbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQThCQyxHQUNELHNDQUFzQztBQUMvQixTQUFTTyxhQUFhQyxPQUFPLEVBQUVILEVBQUUsRUFBRUksR0FBRyxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVTtJQUN6RSxNQUFNQyxPQUFPLElBQUk7SUFDakIsSUFBSUMsT0FBTztJQUNYLG9CQUFvQixHQUNwQixJQUFJQztJQUVKLE9BQU9DO0lBRVA7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0EsTUFBTUMsSUFBSTtRQUNqQlgsMENBQU1BLENBQUNXLFNBQVNmLHdEQUFLQSxDQUFDZ0IsaUJBQWlCLEVBQUU7UUFDekNWLFFBQVFXLEtBQUssQ0FBQ1Q7UUFDZEYsUUFBUVcsS0FBSyxDQUFDUjtRQUNkSCxRQUFRWSxPQUFPLENBQUNIO1FBQ2hCVCxRQUFRYSxJQUFJLENBQUNWO1FBQ2JILFFBQVFXLEtBQUssQ0FBQ1A7UUFDZCxPQUFPVTtJQUNUO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0EsUUFBUUwsSUFBSTtRQUNuQixJQUNFSCxPQUFPWCw0REFBU0EsQ0FBQ29CLG9CQUFvQixJQUNyQ04sU0FBU2Ysd0RBQUtBLENBQUNzQixHQUFHLElBQ2xCUCxTQUFTZix3REFBS0EsQ0FBQ2dCLGlCQUFpQixJQUMvQkQsU0FBU2Ysd0RBQUtBLENBQUN1QixrQkFBa0IsSUFBSSxDQUFDVixRQUN2Qyx1REFBdUQ7UUFDdkQsd0VBQXdFO1FBQ3hFLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsb0JBQW9CLEdBQ25CRSxTQUFTZix3REFBS0EsQ0FBQ3dCLEtBQUssSUFDbkIsQ0FBQ1osUUFDRCw0QkFBNEJELEtBQUtjLE1BQU0sQ0FBQ0MsVUFBVSxFQUNwRDtZQUNBLE9BQU9uQixJQUFJUTtRQUNiO1FBRUEsSUFBSUEsU0FBU2Ysd0RBQUtBLENBQUN1QixrQkFBa0IsRUFBRTtZQUNyQ2pCLFFBQVFhLElBQUksQ0FBQ1Q7WUFDYkosUUFBUVcsS0FBSyxDQUFDUjtZQUNkSCxRQUFRWSxPQUFPLENBQUNIO1lBQ2hCVCxRQUFRYSxJQUFJLENBQUNWO1lBQ2JILFFBQVFhLElBQUksQ0FBQ1g7WUFDYixPQUFPTDtRQUNUO1FBRUEsZ0RBQWdEO1FBQ2hELElBQUlMLDRFQUFrQkEsQ0FBQ2lCLE9BQU87WUFDNUJULFFBQVFXLEtBQUssQ0FBQ2Ysd0RBQUtBLENBQUN5QixVQUFVO1lBQzlCckIsUUFBUVksT0FBTyxDQUFDSDtZQUNoQlQsUUFBUWEsSUFBSSxDQUFDakIsd0RBQUtBLENBQUN5QixVQUFVO1lBQzdCLE9BQU9QO1FBQ1Q7UUFFQWQsUUFBUVcsS0FBSyxDQUFDZix3REFBS0EsQ0FBQzBCLFdBQVcsRUFBRTtZQUFDQyxhQUFhNUIsNERBQVNBLENBQUM2QixpQkFBaUI7UUFBQTtRQUMxRSxPQUFPQyxZQUFZaEI7SUFDckI7SUFFQTs7Ozs7Ozs7O0dBU0MsR0FDRCxTQUFTZ0IsWUFBWWhCLElBQUk7UUFDdkIsSUFDRUEsU0FBU2Ysd0RBQUtBLENBQUNzQixHQUFHLElBQ2xCUCxTQUFTZix3REFBS0EsQ0FBQ2dCLGlCQUFpQixJQUNoQ0QsU0FBU2Ysd0RBQUtBLENBQUN1QixrQkFBa0IsSUFDakN6Qiw0RUFBa0JBLENBQUNpQixTQUNuQkgsU0FBU1gsNERBQVNBLENBQUNvQixvQkFBb0IsRUFDdkM7WUFDQWYsUUFBUWEsSUFBSSxDQUFDakIsd0RBQUtBLENBQUMwQixXQUFXO1lBQzlCLE9BQU9SLFFBQVFMO1FBQ2pCO1FBRUFULFFBQVFZLE9BQU8sQ0FBQ0g7UUFDaEIsSUFBSSxDQUFDRixNQUFNQSxPQUFPLENBQUNkLHVFQUFhQSxDQUFDZ0I7UUFDakMsT0FBT0EsU0FBU2Ysd0RBQUtBLENBQUNnQyxTQUFTLEdBQUdDLGNBQWNGO0lBQ2xEO0lBRUE7Ozs7Ozs7OztHQVNDLEdBQ0QsU0FBU0UsWUFBWWxCLElBQUk7UUFDdkIsSUFDRUEsU0FBU2Ysd0RBQUtBLENBQUNnQixpQkFBaUIsSUFDaENELFNBQVNmLHdEQUFLQSxDQUFDZ0MsU0FBUyxJQUN4QmpCLFNBQVNmLHdEQUFLQSxDQUFDdUIsa0JBQWtCLEVBQ2pDO1lBQ0FqQixRQUFRWSxPQUFPLENBQUNIO1lBQ2hCSDtZQUNBLE9BQU9tQjtRQUNUO1FBRUEsT0FBT0EsWUFBWWhCO0lBQ3JCO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZmFjdG9yeS1sYWJlbC9kZXYvaW5kZXguanM/OWNiMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuRWZmZWN0c30gRWZmZWN0c1xuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLXV0aWwtdHlwZXMnKS5TdGF0ZX0gU3RhdGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5pemVDb250ZXh0fSBUb2tlbml6ZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay11dGlsLXR5cGVzJykuVG9rZW5UeXBlfSBUb2tlblR5cGVcbiAqL1xuXG5pbXBvcnQge21hcmtkb3duTGluZUVuZGluZywgbWFya2Rvd25TcGFjZX0gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtjb2RlcywgY29uc3RhbnRzLCB0eXBlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuaW1wb3J0IHtvayBhcyBhc3NlcnR9IGZyb20gJ2RldmxvcCdcblxuLyoqXG4gKiBQYXJzZSBsYWJlbHMuXG4gKlxuICogPiDwn5GJICoqTm90ZSoqOiBsYWJlbHMgaW4gbWFya2Rvd24gYXJlIGNhcHBlZCBhdCA5OTkgY2hhcmFjdGVycyBpbiB0aGUgc3RyaW5nLlxuICpcbiAqICMjIyMjIyBFeGFtcGxlc1xuICpcbiAqIGBgYG1hcmtkb3duXG4gKiBbYV1cbiAqIFthXG4gKiBiXVxuICogW2FcXF1iXVxuICogYGBgXG4gKlxuICogQHRoaXMge1Rva2VuaXplQ29udGV4dH1cbiAqICAgVG9rZW5pemUgY29udGV4dC5cbiAqIEBwYXJhbSB7RWZmZWN0c30gZWZmZWN0c1xuICogICBDb250ZXh0LlxuICogQHBhcmFtIHtTdGF0ZX0gb2tcbiAqICAgU3RhdGUgc3dpdGNoZWQgdG8gd2hlbiBzdWNjZXNzZnVsLlxuICogQHBhcmFtIHtTdGF0ZX0gbm9rXG4gKiAgIFN0YXRlIHN3aXRjaGVkIHRvIHdoZW4gdW5zdWNjZXNzZnVsLlxuICogQHBhcmFtIHtUb2tlblR5cGV9IHR5cGVcbiAqICAgVHlwZSBvZiB0aGUgd2hvbGUgbGFiZWwgKGBbYV1gKS5cbiAqIEBwYXJhbSB7VG9rZW5UeXBlfSBtYXJrZXJUeXBlXG4gKiAgIFR5cGUgZm9yIHRoZSBtYXJrZXJzIChgW2AgYW5kIGBdYCkuXG4gKiBAcGFyYW0ge1Rva2VuVHlwZX0gc3RyaW5nVHlwZVxuICogICBUeXBlIGZvciB0aGUgaWRlbnRpZmllciAoYGFgKS5cbiAqIEByZXR1cm5zIHtTdGF0ZX1cbiAqICAgU3RhcnQgc3RhdGUuXG4gKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtcGFyYW1zXG5leHBvcnQgZnVuY3Rpb24gZmFjdG9yeUxhYmVsKGVmZmVjdHMsIG9rLCBub2ssIHR5cGUsIG1hcmtlclR5cGUsIHN0cmluZ1R5cGUpIHtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgbGV0IHNpemUgPSAwXG4gIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi9cbiAgbGV0IHNlZW5cblxuICByZXR1cm4gc3RhcnRcblxuICAvKipcbiAgICogU3RhcnQgb2YgbGFiZWwuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYV1cbiAgICogICAgIF5cbiAgICogYGBgXG4gICAqXG4gICAqIEB0eXBlIHtTdGF0ZX1cbiAgICovXG4gIGZ1bmN0aW9uIHN0YXJ0KGNvZGUpIHtcbiAgICBhc3NlcnQoY29kZSA9PT0gY29kZXMubGVmdFNxdWFyZUJyYWNrZXQsICdleHBlY3RlZCBgW2AnKVxuICAgIGVmZmVjdHMuZW50ZXIodHlwZSlcbiAgICBlZmZlY3RzLmVudGVyKG1hcmtlclR5cGUpXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgZWZmZWN0cy5leGl0KG1hcmtlclR5cGUpXG4gICAgZWZmZWN0cy5lbnRlcihzdHJpbmdUeXBlKVxuICAgIHJldHVybiBhdEJyZWFrXG4gIH1cblxuICAvKipcbiAgICogSW4gbGFiZWwsIGF0IHNvbWV0aGluZywgYmVmb3JlIHNvbWV0aGluZyBlbHNlLlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdXG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gYXRCcmVhayhjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgc2l6ZSA+IGNvbnN0YW50cy5saW5rUmVmZXJlbmNlU2l6ZU1heCB8fFxuICAgICAgY29kZSA9PT0gY29kZXMuZW9mIHx8XG4gICAgICBjb2RlID09PSBjb2Rlcy5sZWZ0U3F1YXJlQnJhY2tldCB8fFxuICAgICAgKGNvZGUgPT09IGNvZGVzLnJpZ2h0U3F1YXJlQnJhY2tldCAmJiAhc2VlbikgfHxcbiAgICAgIC8vIFRvIGRvOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSBvbmNlIHdl4oCZdmUgc3dpdGNoZWQgZnJvbVxuICAgICAgLy8gYG1pY3JvbWFyay1leHRlbnNpb24tZm9vdG5vdGVgIHRvIGBtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS1mb290bm90ZWAsXG4gICAgICAvLyB3aGljaCBkb2VzbuKAmXQgbmVlZCB0aGlzLlxuICAgICAgLy8gSGlkZGVuIGZvb3Rub3RlcyBob29rLlxuICAgICAgLyogYzggaWdub3JlIG5leHQgMyAqL1xuICAgICAgKGNvZGUgPT09IGNvZGVzLmNhcmV0ICYmXG4gICAgICAgICFzaXplICYmXG4gICAgICAgICdfaGlkZGVuRm9vdG5vdGVTdXBwb3J0JyBpbiBzZWxmLnBhcnNlci5jb25zdHJ1Y3RzKVxuICAgICkge1xuICAgICAgcmV0dXJuIG5vayhjb2RlKVxuICAgIH1cblxuICAgIGlmIChjb2RlID09PSBjb2Rlcy5yaWdodFNxdWFyZUJyYWNrZXQpIHtcbiAgICAgIGVmZmVjdHMuZXhpdChzdHJpbmdUeXBlKVxuICAgICAgZWZmZWN0cy5lbnRlcihtYXJrZXJUeXBlKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQobWFya2VyVHlwZSlcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlKVxuICAgICAgcmV0dXJuIG9rXG4gICAgfVxuXG4gICAgLy8gVG8gZG86IGluZGVudD8gTGluayBjaHVua3MgYW5kIEVPTHMgdG9nZXRoZXI/XG4gICAgaWYgKG1hcmtkb3duTGluZUVuZGluZyhjb2RlKSkge1xuICAgICAgZWZmZWN0cy5lbnRlcih0eXBlcy5saW5lRW5kaW5nKVxuICAgICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgICBlZmZlY3RzLmV4aXQodHlwZXMubGluZUVuZGluZylcbiAgICAgIHJldHVybiBhdEJyZWFrXG4gICAgfVxuXG4gICAgZWZmZWN0cy5lbnRlcih0eXBlcy5jaHVua1N0cmluZywge2NvbnRlbnRUeXBlOiBjb25zdGFudHMuY29udGVudFR5cGVTdHJpbmd9KVxuICAgIHJldHVybiBsYWJlbEluc2lkZShjb2RlKVxuICB9XG5cbiAgLyoqXG4gICAqIEluIGxhYmVsLCBpbiB0ZXh0LlxuICAgKlxuICAgKiBgYGBtYXJrZG93blxuICAgKiA+IHwgW2FdXG4gICAqICAgICAgXlxuICAgKiBgYGBcbiAgICpcbiAgICogQHR5cGUge1N0YXRlfVxuICAgKi9cbiAgZnVuY3Rpb24gbGFiZWxJbnNpZGUoY29kZSkge1xuICAgIGlmIChcbiAgICAgIGNvZGUgPT09IGNvZGVzLmVvZiB8fFxuICAgICAgY29kZSA9PT0gY29kZXMubGVmdFNxdWFyZUJyYWNrZXQgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLnJpZ2h0U3F1YXJlQnJhY2tldCB8fFxuICAgICAgbWFya2Rvd25MaW5lRW5kaW5nKGNvZGUpIHx8XG4gICAgICBzaXplKysgPiBjb25zdGFudHMubGlua1JlZmVyZW5jZVNpemVNYXhcbiAgICApIHtcbiAgICAgIGVmZmVjdHMuZXhpdCh0eXBlcy5jaHVua1N0cmluZylcbiAgICAgIHJldHVybiBhdEJyZWFrKGNvZGUpXG4gICAgfVxuXG4gICAgZWZmZWN0cy5jb25zdW1lKGNvZGUpXG4gICAgaWYgKCFzZWVuKSBzZWVuID0gIW1hcmtkb3duU3BhY2UoY29kZSlcbiAgICByZXR1cm4gY29kZSA9PT0gY29kZXMuYmFja3NsYXNoID8gbGFiZWxFc2NhcGUgOiBsYWJlbEluc2lkZVxuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGBcXGAsIGF0IGEgc3BlY2lhbCBjaGFyYWN0ZXIuXG4gICAqXG4gICAqIGBgYG1hcmtkb3duXG4gICAqID4gfCBbYVxcKmFdXG4gICAqICAgICAgICBeXG4gICAqIGBgYFxuICAgKlxuICAgKiBAdHlwZSB7U3RhdGV9XG4gICAqL1xuICBmdW5jdGlvbiBsYWJlbEVzY2FwZShjb2RlKSB7XG4gICAgaWYgKFxuICAgICAgY29kZSA9PT0gY29kZXMubGVmdFNxdWFyZUJyYWNrZXQgfHxcbiAgICAgIGNvZGUgPT09IGNvZGVzLmJhY2tzbGFzaCB8fFxuICAgICAgY29kZSA9PT0gY29kZXMucmlnaHRTcXVhcmVCcmFja2V0XG4gICAgKSB7XG4gICAgICBlZmZlY3RzLmNvbnN1bWUoY29kZSlcbiAgICAgIHNpemUrK1xuICAgICAgcmV0dXJuIGxhYmVsSW5zaWRlXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsSW5zaWRlKGNvZGUpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJtYXJrZG93bkxpbmVFbmRpbmciLCJtYXJrZG93blNwYWNlIiwiY29kZXMiLCJjb25zdGFudHMiLCJ0eXBlcyIsIm9rIiwiYXNzZXJ0IiwiZmFjdG9yeUxhYmVsIiwiZWZmZWN0cyIsIm5vayIsInR5cGUiLCJtYXJrZXJUeXBlIiwic3RyaW5nVHlwZSIsInNlbGYiLCJzaXplIiwic2VlbiIsInN0YXJ0IiwiY29kZSIsImxlZnRTcXVhcmVCcmFja2V0IiwiZW50ZXIiLCJjb25zdW1lIiwiZXhpdCIsImF0QnJlYWsiLCJsaW5rUmVmZXJlbmNlU2l6ZU1heCIsImVvZiIsInJpZ2h0U3F1YXJlQnJhY2tldCIsImNhcmV0IiwicGFyc2VyIiwiY29uc3RydWN0cyIsImxpbmVFbmRpbmciLCJjaHVua1N0cmluZyIsImNvbnRlbnRUeXBlIiwiY29udGVudFR5cGVTdHJpbmciLCJsYWJlbEluc2lkZSIsImJhY2tzbGFzaCIsImxhYmVsRXNjYXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-factory-label/dev/index.js\n");

/***/ })

};
;