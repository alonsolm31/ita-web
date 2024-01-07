"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/remark-rehype";
exports.ids = ["vendor-chunks/remark-rehype"];
exports.modules = {

/***/ "(rsc)/./node_modules/remark-rehype/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/remark-rehype/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ remarkRehype)\n/* harmony export */ });\n/* harmony import */ var mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdast-util-to-hast */ \"(rsc)/./node_modules/mdast-util-to-hast/lib/index.js\");\n// Include `data` fields in mdast and `raw` nodes in hast.\n/// <reference types=\"mdast-util-to-hast\" />\n/**\n * @typedef {import('hast').Root} HastRoot\n * @typedef {import('mdast').Root} MdastRoot\n * @typedef {import('mdast-util-to-hast').Options} Options\n * @typedef {import('unified').Processor} Processor\n * @typedef {import('vfile').VFile} VFile\n */ /**\n * @callback TransformBridge\n *   Bridge-mode.\n *\n *   Runs the destination with the new hast tree.\n *   Discards result.\n * @param {MdastRoot} tree\n *   Tree.\n * @param {VFile} file\n *   File.\n * @returns {Promise<undefined>}\n *   Nothing.\n *\n * @callback TransformMutate\n *  Mutate-mode.\n *\n *  Further transformers run on the hast tree.\n * @param {MdastRoot} tree\n *   Tree.\n * @param {VFile} file\n *   File.\n * @returns {HastRoot}\n *   Tree (hast).\n */ \n/**\n * Turn markdown into HTML.\n *\n * ##### Notes\n *\n * ###### Signature\n *\n * *   if a processor is given, runs the (rehype) plugins used on it with a\n *     hast tree, then discards the result (*bridge mode*)\n * *   otherwise, returns a hast tree, the plugins used after `remarkRehype`\n *     are rehype plugins (*mutate mode*)\n *\n * > 👉 **Note**: It’s highly unlikely that you want to pass a `processor`.\n *\n * ###### HTML\n *\n * Raw HTML is available in mdast as `html` nodes and can be embedded in hast\n * as semistandard `raw` nodes.\n * Most plugins ignore `raw` nodes but two notable ones don’t:\n *\n * *   `rehype-stringify` also has an option `allowDangerousHtml` which will\n *     output the raw HTML.\n *     This is typically discouraged as noted by the option name but is useful if\n *     you completely trust authors\n * *   `rehype-raw` can handle the raw embedded HTML strings by parsing them\n *     into standard hast nodes (`element`, `text`, etc).\n *     This is a heavy task as it needs a full HTML parser, but it is the only way\n *     to support untrusted content\n *\n * ###### Footnotes\n *\n * Many options supported here relate to footnotes.\n * Footnotes are not specified by CommonMark, which we follow by default.\n * They are supported by GitHub, so footnotes can be enabled in markdown with\n * `remark-gfm`.\n *\n * The options `footnoteBackLabel` and `footnoteLabel` define natural language\n * that explains footnotes, which is hidden for sighted users but shown to\n * assistive technology.\n * When your page is not in English, you must define translated values.\n *\n * Back references use ARIA attributes, but the section label itself uses a\n * heading that is hidden with an `sr-only` class.\n * To show it to sighted users, define different attributes in\n * `footnoteLabelProperties`.\n *\n * ###### Clobbering\n *\n * Footnotes introduces a problem, as it links footnote calls to footnote\n * definitions on the page through `id` attributes generated from user content,\n * which results in DOM clobbering.\n *\n * DOM clobbering is this:\n *\n * ```html\n * <p id=x></p>\n * <script>alert(x) // `x` now refers to the DOM `p#x` element</script>\n * ```\n *\n * Elements by their ID are made available by browsers on the `window` object,\n * which is a security risk.\n * Using a prefix solves this problem.\n *\n * More information on how to handle clobbering and the prefix is explained in\n * *Example: headings (DOM clobbering)* in `rehype-sanitize`.\n *\n * ###### Unknown nodes\n *\n * Unknown nodes are nodes with a type that isn’t in `handlers` or `passThrough`.\n * The default behavior for unknown nodes is:\n *\n * *   when the node has a `value` (and doesn’t have `data.hName`,\n *     `data.hProperties`, or `data.hChildren`, see later), create a hast `text`\n *     node\n * *   otherwise, create a `<div>` element (which could be changed with\n *     `data.hName`), with its children mapped from mdast to hast as well\n *\n * This behavior can be changed by passing an `unknownHandler`.\n *\n * @overload\n * @param {Processor} processor\n * @param {Readonly<Options> | null | undefined} [options]\n * @returns {TransformBridge}\n *\n * @overload\n * @param {Readonly<Options> | null | undefined} [options]\n * @returns {TransformMutate}\n *\n * @param {Readonly<Options> | Processor | null | undefined} [destination]\n *   Processor or configuration (optional).\n * @param {Readonly<Options> | null | undefined} [options]\n *   When a processor was given, configuration (optional).\n * @returns {TransformBridge | TransformMutate}\n *   Transform.\n */ function remarkRehype(destination, options) {\n    if (destination && \"run\" in destination) {\n        /**\n     * @type {TransformBridge}\n     */ return async function(tree, file) {\n            // Cast because root in -> root out.\n            const hastTree = /** @type {HastRoot} */ (0,mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__.toHast)(tree, options);\n            await destination.run(hastTree, file);\n        };\n    }\n    /**\n   * @type {TransformMutate}\n   */ return function(tree) {\n        // Cast because root in -> root out.\n        return /** @type {HastRoot} */ (0,mdast_util_to_hast__WEBPACK_IMPORTED_MODULE_0__.toHast)(tree, options || destination);\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcmVtYXJrLXJlaHlwZS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBMEQ7QUFDMUQsNENBQTRDO0FBRTVDOzs7Ozs7Q0FNQyxHQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVCQyxHQUV3QztBQUV6Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQThGQyxHQUNjLFNBQVNDLGFBQWFDLFdBQVcsRUFBRUMsT0FBTztJQUN2RCxJQUFJRCxlQUFlLFNBQVNBLGFBQWE7UUFDdkM7O0tBRUMsR0FDRCxPQUFPLGVBQWdCRSxJQUFJLEVBQUVDLElBQUk7WUFDL0Isb0NBQW9DO1lBQ3BDLE1BQU1DLFdBQVcscUJBQXFCLEdBQUlOLDBEQUFNQSxDQUFDSSxNQUFNRDtZQUN2RCxNQUFNRCxZQUFZSyxHQUFHLENBQUNELFVBQVVEO1FBQ2xDO0lBQ0Y7SUFFQTs7R0FFQyxHQUNELE9BQU8sU0FBVUQsSUFBSTtRQUNuQixvQ0FBb0M7UUFDcEMsT0FBTyxxQkFBcUIsR0FBSUosMERBQU1BLENBQUNJLE1BQU1ELFdBQVdEO0lBQzFEO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL25vZGVfbW9kdWxlcy9yZW1hcmstcmVoeXBlL2xpYi9pbmRleC5qcz80OWU5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluY2x1ZGUgYGRhdGFgIGZpZWxkcyBpbiBtZGFzdCBhbmQgYHJhd2Agbm9kZXMgaW4gaGFzdC5cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwibWRhc3QtdXRpbC10by1oYXN0XCIgLz5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuUm9vdH0gSGFzdFJvb3RcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuUm9vdH0gTWRhc3RSb290XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLWhhc3QnKS5PcHRpb25zfSBPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlmaWVkJykuUHJvY2Vzc29yfSBQcm9jZXNzb3JcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3ZmaWxlJykuVkZpbGV9IFZGaWxlXG4gKi9cblxuLyoqXG4gKiBAY2FsbGJhY2sgVHJhbnNmb3JtQnJpZGdlXG4gKiAgIEJyaWRnZS1tb2RlLlxuICpcbiAqICAgUnVucyB0aGUgZGVzdGluYXRpb24gd2l0aCB0aGUgbmV3IGhhc3QgdHJlZS5cbiAqICAgRGlzY2FyZHMgcmVzdWx0LlxuICogQHBhcmFtIHtNZGFzdFJvb3R9IHRyZWVcbiAqICAgVHJlZS5cbiAqIEBwYXJhbSB7VkZpbGV9IGZpbGVcbiAqICAgRmlsZS5cbiAqIEByZXR1cm5zIHtQcm9taXNlPHVuZGVmaW5lZD59XG4gKiAgIE5vdGhpbmcuXG4gKlxuICogQGNhbGxiYWNrIFRyYW5zZm9ybU11dGF0ZVxuICogIE11dGF0ZS1tb2RlLlxuICpcbiAqICBGdXJ0aGVyIHRyYW5zZm9ybWVycyBydW4gb24gdGhlIGhhc3QgdHJlZS5cbiAqIEBwYXJhbSB7TWRhc3RSb290fSB0cmVlXG4gKiAgIFRyZWUuXG4gKiBAcGFyYW0ge1ZGaWxlfSBmaWxlXG4gKiAgIEZpbGUuXG4gKiBAcmV0dXJucyB7SGFzdFJvb3R9XG4gKiAgIFRyZWUgKGhhc3QpLlxuICovXG5cbmltcG9ydCB7dG9IYXN0fSBmcm9tICdtZGFzdC11dGlsLXRvLWhhc3QnXG5cbi8qKlxuICogVHVybiBtYXJrZG93biBpbnRvIEhUTUwuXG4gKlxuICogIyMjIyMgTm90ZXNcbiAqXG4gKiAjIyMjIyMgU2lnbmF0dXJlXG4gKlxuICogKiAgIGlmIGEgcHJvY2Vzc29yIGlzIGdpdmVuLCBydW5zIHRoZSAocmVoeXBlKSBwbHVnaW5zIHVzZWQgb24gaXQgd2l0aCBhXG4gKiAgICAgaGFzdCB0cmVlLCB0aGVuIGRpc2NhcmRzIHRoZSByZXN1bHQgKCpicmlkZ2UgbW9kZSopXG4gKiAqICAgb3RoZXJ3aXNlLCByZXR1cm5zIGEgaGFzdCB0cmVlLCB0aGUgcGx1Z2lucyB1c2VkIGFmdGVyIGByZW1hcmtSZWh5cGVgXG4gKiAgICAgYXJlIHJlaHlwZSBwbHVnaW5zICgqbXV0YXRlIG1vZGUqKVxuICpcbiAqID4g8J+RiSAqKk5vdGUqKjogSXTigJlzIGhpZ2hseSB1bmxpa2VseSB0aGF0IHlvdSB3YW50IHRvIHBhc3MgYSBgcHJvY2Vzc29yYC5cbiAqXG4gKiAjIyMjIyMgSFRNTFxuICpcbiAqIFJhdyBIVE1MIGlzIGF2YWlsYWJsZSBpbiBtZGFzdCBhcyBgaHRtbGAgbm9kZXMgYW5kIGNhbiBiZSBlbWJlZGRlZCBpbiBoYXN0XG4gKiBhcyBzZW1pc3RhbmRhcmQgYHJhd2Agbm9kZXMuXG4gKiBNb3N0IHBsdWdpbnMgaWdub3JlIGByYXdgIG5vZGVzIGJ1dCB0d28gbm90YWJsZSBvbmVzIGRvbuKAmXQ6XG4gKlxuICogKiAgIGByZWh5cGUtc3RyaW5naWZ5YCBhbHNvIGhhcyBhbiBvcHRpb24gYGFsbG93RGFuZ2Vyb3VzSHRtbGAgd2hpY2ggd2lsbFxuICogICAgIG91dHB1dCB0aGUgcmF3IEhUTUwuXG4gKiAgICAgVGhpcyBpcyB0eXBpY2FsbHkgZGlzY291cmFnZWQgYXMgbm90ZWQgYnkgdGhlIG9wdGlvbiBuYW1lIGJ1dCBpcyB1c2VmdWwgaWZcbiAqICAgICB5b3UgY29tcGxldGVseSB0cnVzdCBhdXRob3JzXG4gKiAqICAgYHJlaHlwZS1yYXdgIGNhbiBoYW5kbGUgdGhlIHJhdyBlbWJlZGRlZCBIVE1MIHN0cmluZ3MgYnkgcGFyc2luZyB0aGVtXG4gKiAgICAgaW50byBzdGFuZGFyZCBoYXN0IG5vZGVzIChgZWxlbWVudGAsIGB0ZXh0YCwgZXRjKS5cbiAqICAgICBUaGlzIGlzIGEgaGVhdnkgdGFzayBhcyBpdCBuZWVkcyBhIGZ1bGwgSFRNTCBwYXJzZXIsIGJ1dCBpdCBpcyB0aGUgb25seSB3YXlcbiAqICAgICB0byBzdXBwb3J0IHVudHJ1c3RlZCBjb250ZW50XG4gKlxuICogIyMjIyMjIEZvb3Rub3Rlc1xuICpcbiAqIE1hbnkgb3B0aW9ucyBzdXBwb3J0ZWQgaGVyZSByZWxhdGUgdG8gZm9vdG5vdGVzLlxuICogRm9vdG5vdGVzIGFyZSBub3Qgc3BlY2lmaWVkIGJ5IENvbW1vbk1hcmssIHdoaWNoIHdlIGZvbGxvdyBieSBkZWZhdWx0LlxuICogVGhleSBhcmUgc3VwcG9ydGVkIGJ5IEdpdEh1Yiwgc28gZm9vdG5vdGVzIGNhbiBiZSBlbmFibGVkIGluIG1hcmtkb3duIHdpdGhcbiAqIGByZW1hcmstZ2ZtYC5cbiAqXG4gKiBUaGUgb3B0aW9ucyBgZm9vdG5vdGVCYWNrTGFiZWxgIGFuZCBgZm9vdG5vdGVMYWJlbGAgZGVmaW5lIG5hdHVyYWwgbGFuZ3VhZ2VcbiAqIHRoYXQgZXhwbGFpbnMgZm9vdG5vdGVzLCB3aGljaCBpcyBoaWRkZW4gZm9yIHNpZ2h0ZWQgdXNlcnMgYnV0IHNob3duIHRvXG4gKiBhc3Npc3RpdmUgdGVjaG5vbG9neS5cbiAqIFdoZW4geW91ciBwYWdlIGlzIG5vdCBpbiBFbmdsaXNoLCB5b3UgbXVzdCBkZWZpbmUgdHJhbnNsYXRlZCB2YWx1ZXMuXG4gKlxuICogQmFjayByZWZlcmVuY2VzIHVzZSBBUklBIGF0dHJpYnV0ZXMsIGJ1dCB0aGUgc2VjdGlvbiBsYWJlbCBpdHNlbGYgdXNlcyBhXG4gKiBoZWFkaW5nIHRoYXQgaXMgaGlkZGVuIHdpdGggYW4gYHNyLW9ubHlgIGNsYXNzLlxuICogVG8gc2hvdyBpdCB0byBzaWdodGVkIHVzZXJzLCBkZWZpbmUgZGlmZmVyZW50IGF0dHJpYnV0ZXMgaW5cbiAqIGBmb290bm90ZUxhYmVsUHJvcGVydGllc2AuXG4gKlxuICogIyMjIyMjIENsb2JiZXJpbmdcbiAqXG4gKiBGb290bm90ZXMgaW50cm9kdWNlcyBhIHByb2JsZW0sIGFzIGl0IGxpbmtzIGZvb3Rub3RlIGNhbGxzIHRvIGZvb3Rub3RlXG4gKiBkZWZpbml0aW9ucyBvbiB0aGUgcGFnZSB0aHJvdWdoIGBpZGAgYXR0cmlidXRlcyBnZW5lcmF0ZWQgZnJvbSB1c2VyIGNvbnRlbnQsXG4gKiB3aGljaCByZXN1bHRzIGluIERPTSBjbG9iYmVyaW5nLlxuICpcbiAqIERPTSBjbG9iYmVyaW5nIGlzIHRoaXM6XG4gKlxuICogYGBgaHRtbFxuICogPHAgaWQ9eD48L3A+XG4gKiA8c2NyaXB0PmFsZXJ0KHgpIC8vIGB4YCBub3cgcmVmZXJzIHRvIHRoZSBET00gYHAjeGAgZWxlbWVudDwvc2NyaXB0PlxuICogYGBgXG4gKlxuICogRWxlbWVudHMgYnkgdGhlaXIgSUQgYXJlIG1hZGUgYXZhaWxhYmxlIGJ5IGJyb3dzZXJzIG9uIHRoZSBgd2luZG93YCBvYmplY3QsXG4gKiB3aGljaCBpcyBhIHNlY3VyaXR5IHJpc2suXG4gKiBVc2luZyBhIHByZWZpeCBzb2x2ZXMgdGhpcyBwcm9ibGVtLlxuICpcbiAqIE1vcmUgaW5mb3JtYXRpb24gb24gaG93IHRvIGhhbmRsZSBjbG9iYmVyaW5nIGFuZCB0aGUgcHJlZml4IGlzIGV4cGxhaW5lZCBpblxuICogKkV4YW1wbGU6IGhlYWRpbmdzIChET00gY2xvYmJlcmluZykqIGluIGByZWh5cGUtc2FuaXRpemVgLlxuICpcbiAqICMjIyMjIyBVbmtub3duIG5vZGVzXG4gKlxuICogVW5rbm93biBub2RlcyBhcmUgbm9kZXMgd2l0aCBhIHR5cGUgdGhhdCBpc27igJl0IGluIGBoYW5kbGVyc2Agb3IgYHBhc3NUaHJvdWdoYC5cbiAqIFRoZSBkZWZhdWx0IGJlaGF2aW9yIGZvciB1bmtub3duIG5vZGVzIGlzOlxuICpcbiAqICogICB3aGVuIHRoZSBub2RlIGhhcyBhIGB2YWx1ZWAgKGFuZCBkb2VzbuKAmXQgaGF2ZSBgZGF0YS5oTmFtZWAsXG4gKiAgICAgYGRhdGEuaFByb3BlcnRpZXNgLCBvciBgZGF0YS5oQ2hpbGRyZW5gLCBzZWUgbGF0ZXIpLCBjcmVhdGUgYSBoYXN0IGB0ZXh0YFxuICogICAgIG5vZGVcbiAqICogICBvdGhlcndpc2UsIGNyZWF0ZSBhIGA8ZGl2PmAgZWxlbWVudCAod2hpY2ggY291bGQgYmUgY2hhbmdlZCB3aXRoXG4gKiAgICAgYGRhdGEuaE5hbWVgKSwgd2l0aCBpdHMgY2hpbGRyZW4gbWFwcGVkIGZyb20gbWRhc3QgdG8gaGFzdCBhcyB3ZWxsXG4gKlxuICogVGhpcyBiZWhhdmlvciBjYW4gYmUgY2hhbmdlZCBieSBwYXNzaW5nIGFuIGB1bmtub3duSGFuZGxlcmAuXG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge1Byb2Nlc3Nvcn0gcHJvY2Vzc29yXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9wdGlvbnM+IHwgbnVsbCB8IHVuZGVmaW5lZH0gW29wdGlvbnNdXG4gKiBAcmV0dXJucyB7VHJhbnNmb3JtQnJpZGdlfVxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtSZWFkb25seTxPcHRpb25zPiB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogQHJldHVybnMge1RyYW5zZm9ybU11dGF0ZX1cbiAqXG4gKiBAcGFyYW0ge1JlYWRvbmx5PE9wdGlvbnM+IHwgUHJvY2Vzc29yIHwgbnVsbCB8IHVuZGVmaW5lZH0gW2Rlc3RpbmF0aW9uXVxuICogICBQcm9jZXNzb3Igb3IgY29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHBhcmFtIHtSZWFkb25seTxPcHRpb25zPiB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBXaGVuIGEgcHJvY2Vzc29yIHdhcyBnaXZlbiwgY29uZmlndXJhdGlvbiAob3B0aW9uYWwpLlxuICogQHJldHVybnMge1RyYW5zZm9ybUJyaWRnZSB8IFRyYW5zZm9ybU11dGF0ZX1cbiAqICAgVHJhbnNmb3JtLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW1hcmtSZWh5cGUoZGVzdGluYXRpb24sIG9wdGlvbnMpIHtcbiAgaWYgKGRlc3RpbmF0aW9uICYmICdydW4nIGluIGRlc3RpbmF0aW9uKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUge1RyYW5zZm9ybUJyaWRnZX1cbiAgICAgKi9cbiAgICByZXR1cm4gYXN5bmMgZnVuY3Rpb24gKHRyZWUsIGZpbGUpIHtcbiAgICAgIC8vIENhc3QgYmVjYXVzZSByb290IGluIC0+IHJvb3Qgb3V0LlxuICAgICAgY29uc3QgaGFzdFRyZWUgPSAvKiogQHR5cGUge0hhc3RSb290fSAqLyAodG9IYXN0KHRyZWUsIG9wdGlvbnMpKVxuICAgICAgYXdhaXQgZGVzdGluYXRpb24ucnVuKGhhc3RUcmVlLCBmaWxlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZSB7VHJhbnNmb3JtTXV0YXRlfVxuICAgKi9cbiAgcmV0dXJuIGZ1bmN0aW9uICh0cmVlKSB7XG4gICAgLy8gQ2FzdCBiZWNhdXNlIHJvb3QgaW4gLT4gcm9vdCBvdXQuXG4gICAgcmV0dXJuIC8qKiBAdHlwZSB7SGFzdFJvb3R9ICovICh0b0hhc3QodHJlZSwgb3B0aW9ucyB8fCBkZXN0aW5hdGlvbikpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJ0b0hhc3QiLCJyZW1hcmtSZWh5cGUiLCJkZXN0aW5hdGlvbiIsIm9wdGlvbnMiLCJ0cmVlIiwiZmlsZSIsImhhc3RUcmVlIiwicnVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/remark-rehype/lib/index.js\n");

/***/ })

};
;