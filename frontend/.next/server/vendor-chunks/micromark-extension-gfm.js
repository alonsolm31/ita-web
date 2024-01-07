"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-extension-gfm";
exports.ids = ["vendor-chunks/micromark-extension-gfm"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-extension-gfm/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromark-extension-gfm/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfm: () => (/* binding */ gfm),\n/* harmony export */   gfmHtml: () => (/* binding */ gfmHtml)\n/* harmony export */ });\n/* harmony import */ var micromark_util_combine_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-combine-extensions */ \"(rsc)/./node_modules/micromark-util-combine-extensions/index.js\");\n/* harmony import */ var micromark_extension_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ \"(rsc)/./node_modules/micromark-extension-gfm-autolink-literal/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! micromark-extension-gfm-autolink-literal */ \"(rsc)/./node_modules/micromark-extension-gfm-autolink-literal/dev/lib/html.js\");\n/* harmony import */ var micromark_extension_gfm_footnote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-extension-gfm-footnote */ \"(rsc)/./node_modules/micromark-extension-gfm-footnote/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_footnote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! micromark-extension-gfm-footnote */ \"(rsc)/./node_modules/micromark-extension-gfm-footnote/dev/lib/html.js\");\n/* harmony import */ var micromark_extension_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ \"(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! micromark-extension-gfm-strikethrough */ \"(rsc)/./node_modules/micromark-extension-gfm-strikethrough/dev/lib/html.js\");\n/* harmony import */ var micromark_extension_gfm_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! micromark-extension-gfm-table */ \"(rsc)/./node_modules/micromark-extension-gfm-table/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! micromark-extension-gfm-table */ \"(rsc)/./node_modules/micromark-extension-gfm-table/dev/lib/html.js\");\n/* harmony import */ var micromark_extension_gfm_tagfilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! micromark-extension-gfm-tagfilter */ \"(rsc)/./node_modules/micromark-extension-gfm-tagfilter/lib/index.js\");\n/* harmony import */ var micromark_extension_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ \"(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/syntax.js\");\n/* harmony import */ var micromark_extension_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! micromark-extension-gfm-task-list-item */ \"(rsc)/./node_modules/micromark-extension-gfm-task-list-item/dev/lib/html.js\");\n/**\n * @typedef {import('micromark-extension-gfm-footnote').HtmlOptions} HtmlOptions\n * @typedef {import('micromark-extension-gfm-strikethrough').Options} Options\n * @typedef {import('micromark-util-types').Extension} Extension\n * @typedef {import('micromark-util-types').HtmlExtension} HtmlExtension\n */ \n\n\n\n\n\n\n/**\n * Create an extension for `micromark` to enable GFM syntax.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n *\n *   Passed to `micromark-extens-gfm-strikethrough`.\n * @returns {Extension}\n *   Extension for `micromark` that can be passed in `extensions` to enable GFM\n *   syntax.\n */ function gfm(options) {\n    return (0,micromark_util_combine_extensions__WEBPACK_IMPORTED_MODULE_0__.combineExtensions)([\n        (0,micromark_extension_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_1__.gfmAutolinkLiteral)(),\n        (0,micromark_extension_gfm_footnote__WEBPACK_IMPORTED_MODULE_2__.gfmFootnote)(),\n        (0,micromark_extension_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_3__.gfmStrikethrough)(options),\n        (0,micromark_extension_gfm_table__WEBPACK_IMPORTED_MODULE_4__.gfmTable)(),\n        (0,micromark_extension_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_5__.gfmTaskListItem)()\n    ]);\n}\n/**\n * Create an extension for `micromark` to support GFM when serializing to HTML.\n *\n * @param {HtmlOptions | null | undefined} [options]\n *   Configuration (optional).\n *\n *   Passed to `micromark-extens-gfm-footnote`.\n * @returns {HtmlExtension}\n *   Extension for `micromark` that can be passed in `htmlExtensions` to\n *   support GFM when serializing to HTML.\n */ function gfmHtml(options) {\n    return (0,micromark_util_combine_extensions__WEBPACK_IMPORTED_MODULE_0__.combineHtmlExtensions)([\n        (0,micromark_extension_gfm_autolink_literal__WEBPACK_IMPORTED_MODULE_6__.gfmAutolinkLiteralHtml)(),\n        (0,micromark_extension_gfm_footnote__WEBPACK_IMPORTED_MODULE_7__.gfmFootnoteHtml)(options),\n        (0,micromark_extension_gfm_strikethrough__WEBPACK_IMPORTED_MODULE_8__.gfmStrikethroughHtml)(),\n        (0,micromark_extension_gfm_table__WEBPACK_IMPORTED_MODULE_9__.gfmTableHtml)(),\n        (0,micromark_extension_gfm_tagfilter__WEBPACK_IMPORTED_MODULE_10__.gfmTagfilterHtml)(),\n        (0,micromark_extension_gfm_task_list_item__WEBPACK_IMPORTED_MODULE_11__.gfmTaskListItemHtml)()\n    ]);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUt5QztBQUlPO0FBQzRCO0FBSS9CO0FBQ3NCO0FBQ0Y7QUFJbkI7QUFFL0M7Ozs7Ozs7Ozs7Q0FVQyxHQUNNLFNBQVNhLElBQUlDLE9BQU87SUFDekIsT0FBT2Qsb0ZBQWlCQSxDQUFDO1FBQ3ZCRSw0RkFBa0JBO1FBQ2xCRSw2RUFBV0E7UUFDWEUsdUZBQWdCQSxDQUFDUTtRQUNqQk4sdUVBQVFBO1FBQ1JHLHVGQUFlQTtLQUNoQjtBQUNIO0FBRUE7Ozs7Ozs7Ozs7Q0FVQyxHQUNNLFNBQVNJLFFBQVFELE9BQU87SUFDN0IsT0FBT2Isd0ZBQXFCQSxDQUFDO1FBQzNCRSxnR0FBc0JBO1FBQ3RCRSxpRkFBZUEsQ0FBQ1M7UUFDaEJQLDJGQUFvQkE7UUFDcEJFLDJFQUFZQTtRQUNaQyxvRkFBZ0JBO1FBQ2hCRSw0RkFBbUJBO0tBQ3BCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstZXh0ZW5zaW9uLWdmbS9pbmRleC5qcz9hYTA4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tZm9vdG5vdGUnKS5IdG1sT3B0aW9uc30gSHRtbE9wdGlvbnNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gnKS5PcHRpb25zfSBPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkV4dGVuc2lvbn0gRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtaWNyb21hcmstdXRpbC10eXBlcycpLkh0bWxFeHRlbnNpb259IEh0bWxFeHRlbnNpb25cbiAqL1xuXG5pbXBvcnQge1xuICBjb21iaW5lRXh0ZW5zaW9ucyxcbiAgY29tYmluZUh0bWxFeHRlbnNpb25zXG59IGZyb20gJ21pY3JvbWFyay11dGlsLWNvbWJpbmUtZXh0ZW5zaW9ucydcbmltcG9ydCB7XG4gIGdmbUF1dG9saW5rTGl0ZXJhbCxcbiAgZ2ZtQXV0b2xpbmtMaXRlcmFsSHRtbFxufSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS1hdXRvbGluay1saXRlcmFsJ1xuaW1wb3J0IHtnZm1Gb290bm90ZSwgZ2ZtRm9vdG5vdGVIdG1sfSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS1mb290bm90ZSdcbmltcG9ydCB7XG4gIGdmbVN0cmlrZXRocm91Z2gsXG4gIGdmbVN0cmlrZXRocm91Z2hIdG1sXG59IGZyb20gJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXN0cmlrZXRocm91Z2gnXG5pbXBvcnQge2dmbVRhYmxlLCBnZm1UYWJsZUh0bWx9IGZyb20gJ21pY3JvbWFyay1leHRlbnNpb24tZ2ZtLXRhYmxlJ1xuaW1wb3J0IHtnZm1UYWdmaWx0ZXJIdG1sfSBmcm9tICdtaWNyb21hcmstZXh0ZW5zaW9uLWdmbS10YWdmaWx0ZXInXG5pbXBvcnQge1xuICBnZm1UYXNrTGlzdEl0ZW0sXG4gIGdmbVRhc2tMaXN0SXRlbUh0bWxcbn0gZnJvbSAnbWljcm9tYXJrLWV4dGVuc2lvbi1nZm0tdGFzay1saXN0LWl0ZW0nXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdG8gZW5hYmxlIEdGTSBzeW50YXguXG4gKlxuICogQHBhcmFtIHtPcHRpb25zIHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiAgIENvbmZpZ3VyYXRpb24gKG9wdGlvbmFsKS5cbiAqXG4gKiAgIFBhc3NlZCB0byBgbWljcm9tYXJrLWV4dGVucy1nZm0tc3RyaWtldGhyb3VnaGAuXG4gKiBAcmV0dXJucyB7RXh0ZW5zaW9ufVxuICogICBFeHRlbnNpb24gZm9yIGBtaWNyb21hcmtgIHRoYXQgY2FuIGJlIHBhc3NlZCBpbiBgZXh0ZW5zaW9uc2AgdG8gZW5hYmxlIEdGTVxuICogICBzeW50YXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm0ob3B0aW9ucykge1xuICByZXR1cm4gY29tYmluZUV4dGVuc2lvbnMoW1xuICAgIGdmbUF1dG9saW5rTGl0ZXJhbCgpLFxuICAgIGdmbUZvb3Rub3RlKCksXG4gICAgZ2ZtU3RyaWtldGhyb3VnaChvcHRpb25zKSxcbiAgICBnZm1UYWJsZSgpLFxuICAgIGdmbVRhc2tMaXN0SXRlbSgpXG4gIF0pXG59XG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1pY3JvbWFya2AgdG8gc3VwcG9ydCBHRk0gd2hlbiBzZXJpYWxpemluZyB0byBIVE1MLlxuICpcbiAqIEBwYXJhbSB7SHRtbE9wdGlvbnMgfCBudWxsIHwgdW5kZWZpbmVkfSBbb3B0aW9uc11cbiAqICAgQ29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICpcbiAqICAgUGFzc2VkIHRvIGBtaWNyb21hcmstZXh0ZW5zLWdmbS1mb290bm90ZWAuXG4gKiBAcmV0dXJucyB7SHRtbEV4dGVuc2lvbn1cbiAqICAgRXh0ZW5zaW9uIGZvciBgbWljcm9tYXJrYCB0aGF0IGNhbiBiZSBwYXNzZWQgaW4gYGh0bWxFeHRlbnNpb25zYCB0b1xuICogICBzdXBwb3J0IEdGTSB3aGVuIHNlcmlhbGl6aW5nIHRvIEhUTUwuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1IdG1sKG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNvbWJpbmVIdG1sRXh0ZW5zaW9ucyhbXG4gICAgZ2ZtQXV0b2xpbmtMaXRlcmFsSHRtbCgpLFxuICAgIGdmbUZvb3Rub3RlSHRtbChvcHRpb25zKSxcbiAgICBnZm1TdHJpa2V0aHJvdWdoSHRtbCgpLFxuICAgIGdmbVRhYmxlSHRtbCgpLFxuICAgIGdmbVRhZ2ZpbHRlckh0bWwoKSxcbiAgICBnZm1UYXNrTGlzdEl0ZW1IdG1sKClcbiAgXSlcbn1cbiJdLCJuYW1lcyI6WyJjb21iaW5lRXh0ZW5zaW9ucyIsImNvbWJpbmVIdG1sRXh0ZW5zaW9ucyIsImdmbUF1dG9saW5rTGl0ZXJhbCIsImdmbUF1dG9saW5rTGl0ZXJhbEh0bWwiLCJnZm1Gb290bm90ZSIsImdmbUZvb3Rub3RlSHRtbCIsImdmbVN0cmlrZXRocm91Z2giLCJnZm1TdHJpa2V0aHJvdWdoSHRtbCIsImdmbVRhYmxlIiwiZ2ZtVGFibGVIdG1sIiwiZ2ZtVGFnZmlsdGVySHRtbCIsImdmbVRhc2tMaXN0SXRlbSIsImdmbVRhc2tMaXN0SXRlbUh0bWwiLCJnZm0iLCJvcHRpb25zIiwiZ2ZtSHRtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-extension-gfm/index.js\n");

/***/ })

};
;