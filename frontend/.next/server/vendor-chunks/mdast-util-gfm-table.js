"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mdast-util-gfm-table";
exports.ids = ["vendor-chunks/mdast-util-gfm-table"];
exports.modules = {

/***/ "(rsc)/./node_modules/mdast-util-gfm-table/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/mdast-util-gfm-table/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gfmTableFromMarkdown: () => (/* binding */ gfmTableFromMarkdown),\n/* harmony export */   gfmTableToMarkdown: () => (/* binding */ gfmTableToMarkdown)\n/* harmony export */ });\n/* harmony import */ var devlop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! devlop */ \"(rsc)/./node_modules/devlop/lib/development.js\");\n/* harmony import */ var markdown_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! markdown-table */ \"(rsc)/./node_modules/markdown-table/index.js\");\n/* harmony import */ var mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdast-util-to-markdown */ \"(rsc)/./node_modules/mdast-util-to-markdown/lib/handle/index.js\");\n/**\n * @typedef {import('mdast').InlineCode} InlineCode\n * @typedef {import('mdast').Table} Table\n * @typedef {import('mdast').TableCell} TableCell\n * @typedef {import('mdast').TableRow} TableRow\n *\n * @typedef {import('markdown-table').Options} MarkdownTableOptions\n *\n * @typedef {import('mdast-util-from-markdown').CompileContext} CompileContext\n * @typedef {import('mdast-util-from-markdown').Extension} FromMarkdownExtension\n * @typedef {import('mdast-util-from-markdown').Handle} FromMarkdownHandle\n *\n * @typedef {import('mdast-util-to-markdown').Options} ToMarkdownExtension\n * @typedef {import('mdast-util-to-markdown').Handle} ToMarkdownHandle\n * @typedef {import('mdast-util-to-markdown').State} State\n * @typedef {import('mdast-util-to-markdown').Info} Info\n */ /**\n * @typedef Options\n *   Configuration.\n * @property {boolean | null | undefined} [tableCellPadding=true]\n *   Whether to add a space of padding between delimiters and cells (default:\n *   `true`).\n * @property {boolean | null | undefined} [tablePipeAlign=true]\n *   Whether to align the delimiters (default: `true`).\n * @property {MarkdownTableOptions['stringLength'] | null | undefined} [stringLength]\n *   Function to detect the length of table cell content, used when aligning\n *   the delimiters between cells (optional).\n */ \n\n\n/**\n * Create an extension for `mdast-util-from-markdown` to enable GFM tables in\n * markdown.\n *\n * @returns {FromMarkdownExtension}\n *   Extension for `mdast-util-from-markdown` to enable GFM tables.\n */ function gfmTableFromMarkdown() {\n    return {\n        enter: {\n            table: enterTable,\n            tableData: enterCell,\n            tableHeader: enterCell,\n            tableRow: enterRow\n        },\n        exit: {\n            codeText: exitCodeText,\n            table: exitTable,\n            tableData: exit,\n            tableHeader: exit,\n            tableRow: exit\n        }\n    };\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterTable(token) {\n    const align = token._align;\n    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(align, \"expected `_align` on table\");\n    this.enter({\n        type: \"table\",\n        align: align.map(function(d) {\n            return d === \"none\" ? null : d;\n        }),\n        children: []\n    }, token);\n    this.data.inTable = true;\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitTable(token) {\n    this.exit(token);\n    this.data.inTable = undefined;\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterRow(token) {\n    this.enter({\n        type: \"tableRow\",\n        children: []\n    }, token);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exit(token) {\n    this.exit(token);\n}\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function enterCell(token) {\n    this.enter({\n        type: \"tableCell\",\n        children: []\n    }, token);\n}\n// Overwrite the default code text data handler to unescape escaped pipes when\n// they are in tables.\n/**\n * @this {CompileContext}\n * @type {FromMarkdownHandle}\n */ function exitCodeText(token) {\n    let value = this.resume();\n    if (this.data.inTable) {\n        value = value.replace(/\\\\([\\\\|])/g, replace);\n    }\n    const node = this.stack[this.stack.length - 1];\n    (0,devlop__WEBPACK_IMPORTED_MODULE_0__.ok)(node.type === \"inlineCode\");\n    node.value = value;\n    this.exit(token);\n}\n/**\n * @param {string} $0\n * @param {string} $1\n * @returns {string}\n */ function replace($0, $1) {\n    // Pipes work, backslashes don’t (but can’t escape pipes).\n    return $1 === \"|\" ? $1 : $0;\n}\n/**\n * Create an extension for `mdast-util-to-markdown` to enable GFM tables in\n * markdown.\n *\n * @param {Options | null | undefined} [options]\n *   Configuration.\n * @returns {ToMarkdownExtension}\n *   Extension for `mdast-util-to-markdown` to enable GFM tables.\n */ function gfmTableToMarkdown(options) {\n    const settings = options || {};\n    const padding = settings.tableCellPadding;\n    const alignDelimiters = settings.tablePipeAlign;\n    const stringLength = settings.stringLength;\n    const around = padding ? \" \" : \"|\";\n    return {\n        unsafe: [\n            {\n                character: \"\\r\",\n                inConstruct: \"tableCell\"\n            },\n            {\n                character: \"\\n\",\n                inConstruct: \"tableCell\"\n            },\n            // A pipe, when followed by a tab or space (padding), or a dash or colon\n            // (unpadded delimiter row), could result in a table.\n            {\n                atBreak: true,\n                character: \"|\",\n                after: \"[\t :-]\"\n            },\n            // A pipe in a cell must be encoded.\n            {\n                character: \"|\",\n                inConstruct: \"tableCell\"\n            },\n            // A colon must be followed by a dash, in which case it could start a\n            // delimiter row.\n            {\n                atBreak: true,\n                character: \":\",\n                after: \"-\"\n            },\n            // A delimiter row can also start with a dash, when followed by more\n            // dashes, a colon, or a pipe.\n            // This is a stricter version than the built in check for lists, thematic\n            // breaks, and setex heading underlines though:\n            // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>\n            {\n                atBreak: true,\n                character: \"-\",\n                after: \"[:|-]\"\n            }\n        ],\n        handlers: {\n            inlineCode: inlineCodeWithTable,\n            table: handleTable,\n            tableCell: handleTableCell,\n            tableRow: handleTableRow\n        }\n    };\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {Table} node\n   */ function handleTable(node, _, state, info) {\n        return serializeData(handleTableAsData(node, state, info), node.align);\n    }\n    /**\n   * This function isn’t really used normally, because we handle rows at the\n   * table level.\n   * But, if someone passes in a table row, this ensures we make somewhat sense.\n   *\n   * @type {ToMarkdownHandle}\n   * @param {TableRow} node\n   */ function handleTableRow(node, _, state, info) {\n        const row = handleTableRowAsData(node, state, info);\n        const value = serializeData([\n            row\n        ]);\n        // `markdown-table` will always add an align row\n        return value.slice(0, value.indexOf(\"\\n\"));\n    }\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {TableCell} node\n   */ function handleTableCell(node, _, state, info) {\n        const exit = state.enter(\"tableCell\");\n        const subexit = state.enter(\"phrasing\");\n        const value = state.containerPhrasing(node, {\n            ...info,\n            before: around,\n            after: around\n        });\n        subexit();\n        exit();\n        return value;\n    }\n    /**\n   * @param {Array<Array<string>>} matrix\n   * @param {Array<string | null | undefined> | null | undefined} [align]\n   */ function serializeData(matrix, align) {\n        return (0,markdown_table__WEBPACK_IMPORTED_MODULE_1__.markdownTable)(matrix, {\n            align,\n            // @ts-expect-error: `markdown-table` types should support `null`.\n            alignDelimiters,\n            // @ts-expect-error: `markdown-table` types should support `null`.\n            padding,\n            // @ts-expect-error: `markdown-table` types should support `null`.\n            stringLength\n        });\n    }\n    /**\n   * @param {Table} node\n   * @param {State} state\n   * @param {Info} info\n   */ function handleTableAsData(node, state, info) {\n        const children = node.children;\n        let index = -1;\n        /** @type {Array<Array<string>>} */ const result = [];\n        const subexit = state.enter(\"table\");\n        while(++index < children.length){\n            result[index] = handleTableRowAsData(children[index], state, info);\n        }\n        subexit();\n        return result;\n    }\n    /**\n   * @param {TableRow} node\n   * @param {State} state\n   * @param {Info} info\n   */ function handleTableRowAsData(node, state, info) {\n        const children = node.children;\n        let index = -1;\n        /** @type {Array<string>} */ const result = [];\n        const subexit = state.enter(\"tableRow\");\n        while(++index < children.length){\n            // Note: the positional info as used here is incorrect.\n            // Making it correct would be impossible due to aligning cells?\n            // And it would need copy/pasting `markdown-table` into this project.\n            result[index] = handleTableCell(children[index], node, state, info);\n        }\n        subexit();\n        return result;\n    }\n    /**\n   * @type {ToMarkdownHandle}\n   * @param {InlineCode} node\n   */ function inlineCodeWithTable(node, parent, state) {\n        let value = mdast_util_to_markdown__WEBPACK_IMPORTED_MODULE_2__.handle.inlineCode(node, parent, state);\n        if (state.stack.includes(\"tableCell\")) {\n            value = value.replace(/\\|/g, \"\\\\$&\");\n        }\n        return value;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFibGUvbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnQkMsR0FFRDs7Ozs7Ozs7Ozs7Q0FXQyxHQUVrQztBQUNTO0FBQ1U7QUFFdEQ7Ozs7OztDQU1DLEdBQ00sU0FBU0k7SUFDZCxPQUFPO1FBQ0xDLE9BQU87WUFDTEMsT0FBT0M7WUFDUEMsV0FBV0M7WUFDWEMsYUFBYUQ7WUFDYkUsVUFBVUM7UUFDWjtRQUNBQyxNQUFNO1lBQ0pDLFVBQVVDO1lBQ1ZULE9BQU9VO1lBQ1BSLFdBQVdLO1lBQ1hILGFBQWFHO1lBQ2JGLFVBQVVFO1FBQ1o7SUFDRjtBQUNGO0FBRUE7OztDQUdDLEdBQ0QsU0FBU04sV0FBV1UsS0FBSztJQUN2QixNQUFNQyxRQUFRRCxNQUFNRSxNQUFNO0lBQzFCbEIsMENBQU1BLENBQUNpQixPQUFPO0lBQ2QsSUFBSSxDQUFDYixLQUFLLENBQ1I7UUFDRWUsTUFBTTtRQUNORixPQUFPQSxNQUFNRyxHQUFHLENBQUMsU0FBVUMsQ0FBQztZQUMxQixPQUFPQSxNQUFNLFNBQVMsT0FBT0E7UUFDL0I7UUFDQUMsVUFBVSxFQUFFO0lBQ2QsR0FDQU47SUFFRixJQUFJLENBQUNPLElBQUksQ0FBQ0MsT0FBTyxHQUFHO0FBQ3RCO0FBRUE7OztDQUdDLEdBQ0QsU0FBU1QsVUFBVUMsS0FBSztJQUN0QixJQUFJLENBQUNKLElBQUksQ0FBQ0k7SUFDVixJQUFJLENBQUNPLElBQUksQ0FBQ0MsT0FBTyxHQUFHQztBQUN0QjtBQUVBOzs7Q0FHQyxHQUNELFNBQVNkLFNBQVNLLEtBQUs7SUFDckIsSUFBSSxDQUFDWixLQUFLLENBQUM7UUFBQ2UsTUFBTTtRQUFZRyxVQUFVLEVBQUU7SUFBQSxHQUFHTjtBQUMvQztBQUVBOzs7Q0FHQyxHQUNELFNBQVNKLEtBQUtJLEtBQUs7SUFDakIsSUFBSSxDQUFDSixJQUFJLENBQUNJO0FBQ1o7QUFFQTs7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LElBQUksRUFBRXlDLE1BQU0sRUFBRWQsS0FBSztRQUM5QyxJQUFJOUIsUUFBUXhCLDBEQUFlQSxDQUFDK0MsVUFBVSxDQUFDcEIsTUFBTXlDLFFBQVFkO1FBRXJELElBQUlBLE1BQU0xQixLQUFLLENBQUN5QyxRQUFRLENBQUMsY0FBYztZQUNyQzdDLFFBQVFBLE1BQU1FLE9BQU8sQ0FBQyxPQUFPO1FBQy9CO1FBRUEsT0FBT0Y7SUFDVDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9ub2RlX21vZHVsZXMvbWRhc3QtdXRpbC1nZm0tdGFibGUvbGliL2luZGV4LmpzPzY3YmUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLklubGluZUNvZGV9IElubGluZUNvZGVcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0JykuVGFibGV9IFRhYmxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlRhYmxlQ2VsbH0gVGFibGVDZWxsXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdCcpLlRhYmxlUm93fSBUYWJsZVJvd1xuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21hcmtkb3duLXRhYmxlJykuT3B0aW9uc30gTWFya2Rvd25UYWJsZU9wdGlvbnNcbiAqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5Db21waWxlQ29udGV4dH0gQ29tcGlsZUNvbnRleHRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtZnJvbS1tYXJrZG93bicpLkV4dGVuc2lvbn0gRnJvbU1hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLWZyb20tbWFya2Rvd24nKS5IYW5kbGV9IEZyb21NYXJrZG93bkhhbmRsZVxuICpcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nKS5PcHRpb25zfSBUb01hcmtkb3duRXh0ZW5zaW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSGFuZGxlfSBUb01hcmtkb3duSGFuZGxlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuU3RhdGV9IFN0YXRlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdtZGFzdC11dGlsLXRvLW1hcmtkb3duJykuSW5mb30gSW5mb1xuICovXG5cbi8qKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogICBDb25maWd1cmF0aW9uLlxuICogQHByb3BlcnR5IHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3RhYmxlQ2VsbFBhZGRpbmc9dHJ1ZV1cbiAqICAgV2hldGhlciB0byBhZGQgYSBzcGFjZSBvZiBwYWRkaW5nIGJldHdlZW4gZGVsaW1pdGVycyBhbmQgY2VsbHMgKGRlZmF1bHQ6XG4gKiAgIGB0cnVlYCkuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbdGFibGVQaXBlQWxpZ249dHJ1ZV1cbiAqICAgV2hldGhlciB0byBhbGlnbiB0aGUgZGVsaW1pdGVycyAoZGVmYXVsdDogYHRydWVgKS5cbiAqIEBwcm9wZXJ0eSB7TWFya2Rvd25UYWJsZU9wdGlvbnNbJ3N0cmluZ0xlbmd0aCddIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3N0cmluZ0xlbmd0aF1cbiAqICAgRnVuY3Rpb24gdG8gZGV0ZWN0IHRoZSBsZW5ndGggb2YgdGFibGUgY2VsbCBjb250ZW50LCB1c2VkIHdoZW4gYWxpZ25pbmdcbiAqICAgdGhlIGRlbGltaXRlcnMgYmV0d2VlbiBjZWxscyAob3B0aW9uYWwpLlxuICovXG5cbmltcG9ydCB7b2sgYXMgYXNzZXJ0fSBmcm9tICdkZXZsb3AnXG5pbXBvcnQge21hcmtkb3duVGFibGV9IGZyb20gJ21hcmtkb3duLXRhYmxlJ1xuaW1wb3J0IHtkZWZhdWx0SGFuZGxlcnN9IGZyb20gJ21kYXN0LXV0aWwtdG8tbWFya2Rvd24nXG5cbi8qKlxuICogQ3JlYXRlIGFuIGV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YWJsZXMgaW5cbiAqIG1hcmtkb3duLlxuICpcbiAqIEByZXR1cm5zIHtGcm9tTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtZnJvbS1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YWJsZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZm1UYWJsZUZyb21NYXJrZG93bigpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnRlcjoge1xuICAgICAgdGFibGU6IGVudGVyVGFibGUsXG4gICAgICB0YWJsZURhdGE6IGVudGVyQ2VsbCxcbiAgICAgIHRhYmxlSGVhZGVyOiBlbnRlckNlbGwsXG4gICAgICB0YWJsZVJvdzogZW50ZXJSb3dcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgIGNvZGVUZXh0OiBleGl0Q29kZVRleHQsXG4gICAgICB0YWJsZTogZXhpdFRhYmxlLFxuICAgICAgdGFibGVEYXRhOiBleGl0LFxuICAgICAgdGFibGVIZWFkZXI6IGV4aXQsXG4gICAgICB0YWJsZVJvdzogZXhpdFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEB0aGlzIHtDb21waWxlQ29udGV4dH1cbiAqIEB0eXBlIHtGcm9tTWFya2Rvd25IYW5kbGV9XG4gKi9cbmZ1bmN0aW9uIGVudGVyVGFibGUodG9rZW4pIHtcbiAgY29uc3QgYWxpZ24gPSB0b2tlbi5fYWxpZ25cbiAgYXNzZXJ0KGFsaWduLCAnZXhwZWN0ZWQgYF9hbGlnbmAgb24gdGFibGUnKVxuICB0aGlzLmVudGVyKFxuICAgIHtcbiAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICBhbGlnbjogYWxpZ24ubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkID09PSAnbm9uZScgPyBudWxsIDogZFxuICAgICAgfSksXG4gICAgICBjaGlsZHJlbjogW11cbiAgICB9LFxuICAgIHRva2VuXG4gIClcbiAgdGhpcy5kYXRhLmluVGFibGUgPSB0cnVlXG59XG5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdFRhYmxlKHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbiAgdGhpcy5kYXRhLmluVGFibGUgPSB1bmRlZmluZWRcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlclJvdyh0b2tlbikge1xuICB0aGlzLmVudGVyKHt0eXBlOiAndGFibGVSb3cnLCBjaGlsZHJlbjogW119LCB0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBleGl0KHRva2VuKSB7XG4gIHRoaXMuZXhpdCh0b2tlbilcbn1cblxuLyoqXG4gKiBAdGhpcyB7Q29tcGlsZUNvbnRleHR9XG4gKiBAdHlwZSB7RnJvbU1hcmtkb3duSGFuZGxlfVxuICovXG5mdW5jdGlvbiBlbnRlckNlbGwodG9rZW4pIHtcbiAgdGhpcy5lbnRlcih7dHlwZTogJ3RhYmxlQ2VsbCcsIGNoaWxkcmVuOiBbXX0sIHRva2VuKVxufVxuXG4vLyBPdmVyd3JpdGUgdGhlIGRlZmF1bHQgY29kZSB0ZXh0IGRhdGEgaGFuZGxlciB0byB1bmVzY2FwZSBlc2NhcGVkIHBpcGVzIHdoZW5cbi8vIHRoZXkgYXJlIGluIHRhYmxlcy5cbi8qKlxuICogQHRoaXMge0NvbXBpbGVDb250ZXh0fVxuICogQHR5cGUge0Zyb21NYXJrZG93bkhhbmRsZX1cbiAqL1xuZnVuY3Rpb24gZXhpdENvZGVUZXh0KHRva2VuKSB7XG4gIGxldCB2YWx1ZSA9IHRoaXMucmVzdW1lKClcblxuICBpZiAodGhpcy5kYXRhLmluVGFibGUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcXFwoW1xcXFx8XSkvZywgcmVwbGFjZSlcbiAgfVxuXG4gIGNvbnN0IG5vZGUgPSB0aGlzLnN0YWNrW3RoaXMuc3RhY2subGVuZ3RoIC0gMV1cbiAgYXNzZXJ0KG5vZGUudHlwZSA9PT0gJ2lubGluZUNvZGUnKVxuICBub2RlLnZhbHVlID0gdmFsdWVcbiAgdGhpcy5leGl0KHRva2VuKVxufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSAkMFxuICogQHBhcmFtIHtzdHJpbmd9ICQxXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiByZXBsYWNlKCQwLCAkMSkge1xuICAvLyBQaXBlcyB3b3JrLCBiYWNrc2xhc2hlcyBkb27igJl0IChidXQgY2Fu4oCZdCBlc2NhcGUgcGlwZXMpLlxuICByZXR1cm4gJDEgPT09ICd8JyA/ICQxIDogJDBcbn1cblxuLyoqXG4gKiBDcmVhdGUgYW4gZXh0ZW5zaW9uIGZvciBgbWRhc3QtdXRpbC10by1tYXJrZG93bmAgdG8gZW5hYmxlIEdGTSB0YWJsZXMgaW5cbiAqIG1hcmtkb3duLlxuICpcbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uLlxuICogQHJldHVybnMge1RvTWFya2Rvd25FeHRlbnNpb259XG4gKiAgIEV4dGVuc2lvbiBmb3IgYG1kYXN0LXV0aWwtdG8tbWFya2Rvd25gIHRvIGVuYWJsZSBHRk0gdGFibGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2ZtVGFibGVUb01hcmtkb3duKG9wdGlvbnMpIHtcbiAgY29uc3Qgc2V0dGluZ3MgPSBvcHRpb25zIHx8IHt9XG4gIGNvbnN0IHBhZGRpbmcgPSBzZXR0aW5ncy50YWJsZUNlbGxQYWRkaW5nXG4gIGNvbnN0IGFsaWduRGVsaW1pdGVycyA9IHNldHRpbmdzLnRhYmxlUGlwZUFsaWduXG4gIGNvbnN0IHN0cmluZ0xlbmd0aCA9IHNldHRpbmdzLnN0cmluZ0xlbmd0aFxuICBjb25zdCBhcm91bmQgPSBwYWRkaW5nID8gJyAnIDogJ3wnXG5cbiAgcmV0dXJuIHtcbiAgICB1bnNhZmU6IFtcbiAgICAgIHtjaGFyYWN0ZXI6ICdcXHInLCBpbkNvbnN0cnVjdDogJ3RhYmxlQ2VsbCd9LFxuICAgICAge2NoYXJhY3RlcjogJ1xcbicsIGluQ29uc3RydWN0OiAndGFibGVDZWxsJ30sXG4gICAgICAvLyBBIHBpcGUsIHdoZW4gZm9sbG93ZWQgYnkgYSB0YWIgb3Igc3BhY2UgKHBhZGRpbmcpLCBvciBhIGRhc2ggb3IgY29sb25cbiAgICAgIC8vICh1bnBhZGRlZCBkZWxpbWl0ZXIgcm93KSwgY291bGQgcmVzdWx0IGluIGEgdGFibGUuXG4gICAgICB7YXRCcmVhazogdHJ1ZSwgY2hhcmFjdGVyOiAnfCcsIGFmdGVyOiAnW1xcdCA6LV0nfSxcbiAgICAgIC8vIEEgcGlwZSBpbiBhIGNlbGwgbXVzdCBiZSBlbmNvZGVkLlxuICAgICAge2NoYXJhY3RlcjogJ3wnLCBpbkNvbnN0cnVjdDogJ3RhYmxlQ2VsbCd9LFxuICAgICAgLy8gQSBjb2xvbiBtdXN0IGJlIGZvbGxvd2VkIGJ5IGEgZGFzaCwgaW4gd2hpY2ggY2FzZSBpdCBjb3VsZCBzdGFydCBhXG4gICAgICAvLyBkZWxpbWl0ZXIgcm93LlxuICAgICAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJzonLCBhZnRlcjogJy0nfSxcbiAgICAgIC8vIEEgZGVsaW1pdGVyIHJvdyBjYW4gYWxzbyBzdGFydCB3aXRoIGEgZGFzaCwgd2hlbiBmb2xsb3dlZCBieSBtb3JlXG4gICAgICAvLyBkYXNoZXMsIGEgY29sb24sIG9yIGEgcGlwZS5cbiAgICAgIC8vIFRoaXMgaXMgYSBzdHJpY3RlciB2ZXJzaW9uIHRoYW4gdGhlIGJ1aWx0IGluIGNoZWNrIGZvciBsaXN0cywgdGhlbWF0aWNcbiAgICAgIC8vIGJyZWFrcywgYW5kIHNldGV4IGhlYWRpbmcgdW5kZXJsaW5lcyB0aG91Z2g6XG4gICAgICAvLyA8aHR0cHM6Ly9naXRodWIuY29tL3N5bnRheC10cmVlL21kYXN0LXV0aWwtdG8tbWFya2Rvd24vYmxvYi81MWEyMDM4L2xpYi91bnNhZmUuanMjTDU3PlxuICAgICAge2F0QnJlYWs6IHRydWUsIGNoYXJhY3RlcjogJy0nLCBhZnRlcjogJ1s6fC1dJ31cbiAgICBdLFxuICAgIGhhbmRsZXJzOiB7XG4gICAgICBpbmxpbmVDb2RlOiBpbmxpbmVDb2RlV2l0aFRhYmxlLFxuICAgICAgdGFibGU6IGhhbmRsZVRhYmxlLFxuICAgICAgdGFibGVDZWxsOiBoYW5kbGVUYWJsZUNlbGwsXG4gICAgICB0YWJsZVJvdzogaGFuZGxlVGFibGVSb3dcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHR5cGUge1RvTWFya2Rvd25IYW5kbGV9XG4gICAqIEBwYXJhbSB7VGFibGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlKG5vZGUsIF8sIHN0YXRlLCBpbmZvKSB7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZURhdGEoaGFuZGxlVGFibGVBc0RhdGEobm9kZSwgc3RhdGUsIGluZm8pLCBub2RlLmFsaWduKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgZnVuY3Rpb24gaXNu4oCZdCByZWFsbHkgdXNlZCBub3JtYWxseSwgYmVjYXVzZSB3ZSBoYW5kbGUgcm93cyBhdCB0aGVcbiAgICogdGFibGUgbGV2ZWwuXG4gICAqIEJ1dCwgaWYgc29tZW9uZSBwYXNzZXMgaW4gYSB0YWJsZSByb3csIHRoaXMgZW5zdXJlcyB3ZSBtYWtlIHNvbWV3aGF0IHNlbnNlLlxuICAgKlxuICAgKiBAdHlwZSB7VG9NYXJrZG93bkhhbmRsZX1cbiAgICogQHBhcmFtIHtUYWJsZVJvd30gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlVGFibGVSb3cobm9kZSwgXywgc3RhdGUsIGluZm8pIHtcbiAgICBjb25zdCByb3cgPSBoYW5kbGVUYWJsZVJvd0FzRGF0YShub2RlLCBzdGF0ZSwgaW5mbylcbiAgICBjb25zdCB2YWx1ZSA9IHNlcmlhbGl6ZURhdGEoW3Jvd10pXG4gICAgLy8gYG1hcmtkb3duLXRhYmxlYCB3aWxsIGFsd2F5cyBhZGQgYW4gYWxpZ24gcm93XG4gICAgcmV0dXJuIHZhbHVlLnNsaWNlKDAsIHZhbHVlLmluZGV4T2YoJ1xcbicpKVxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICAgKiBAcGFyYW0ge1RhYmxlQ2VsbH0gbm9kZVxuICAgKi9cbiAgZnVuY3Rpb24gaGFuZGxlVGFibGVDZWxsKG5vZGUsIF8sIHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgZXhpdCA9IHN0YXRlLmVudGVyKCd0YWJsZUNlbGwnKVxuICAgIGNvbnN0IHN1YmV4aXQgPSBzdGF0ZS5lbnRlcigncGhyYXNpbmcnKVxuICAgIGNvbnN0IHZhbHVlID0gc3RhdGUuY29udGFpbmVyUGhyYXNpbmcobm9kZSwge1xuICAgICAgLi4uaW5mbyxcbiAgICAgIGJlZm9yZTogYXJvdW5kLFxuICAgICAgYWZ0ZXI6IGFyb3VuZFxuICAgIH0pXG4gICAgc3ViZXhpdCgpXG4gICAgZXhpdCgpXG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtBcnJheTxBcnJheTxzdHJpbmc+Pn0gbWF0cml4XG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4gfCBudWxsIHwgdW5kZWZpbmVkfSBbYWxpZ25dXG4gICAqL1xuICBmdW5jdGlvbiBzZXJpYWxpemVEYXRhKG1hdHJpeCwgYWxpZ24pIHtcbiAgICByZXR1cm4gbWFya2Rvd25UYWJsZShtYXRyaXgsIHtcbiAgICAgIGFsaWduLFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYG1hcmtkb3duLXRhYmxlYCB0eXBlcyBzaG91bGQgc3VwcG9ydCBgbnVsbGAuXG4gICAgICBhbGlnbkRlbGltaXRlcnMsXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgbWFya2Rvd24tdGFibGVgIHR5cGVzIHNob3VsZCBzdXBwb3J0IGBudWxsYC5cbiAgICAgIHBhZGRpbmcsXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yOiBgbWFya2Rvd24tdGFibGVgIHR5cGVzIHNob3VsZCBzdXBwb3J0IGBudWxsYC5cbiAgICAgIHN0cmluZ0xlbmd0aFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUYWJsZX0gbm9kZVxuICAgKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICAgKiBAcGFyYW0ge0luZm99IGluZm9cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlQXNEYXRhKG5vZGUsIHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICAvKiogQHR5cGUge0FycmF5PEFycmF5PHN0cmluZz4+fSAqL1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdXG4gICAgY29uc3Qgc3ViZXhpdCA9IHN0YXRlLmVudGVyKCd0YWJsZScpXG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgcmVzdWx0W2luZGV4XSA9IGhhbmRsZVRhYmxlUm93QXNEYXRhKGNoaWxkcmVuW2luZGV4XSwgc3RhdGUsIGluZm8pXG4gICAgfVxuXG4gICAgc3ViZXhpdCgpXG5cbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtUYWJsZVJvd30gbm9kZVxuICAgKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZVxuICAgKiBAcGFyYW0ge0luZm99IGluZm9cbiAgICovXG4gIGZ1bmN0aW9uIGhhbmRsZVRhYmxlUm93QXNEYXRhKG5vZGUsIHN0YXRlLCBpbmZvKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBub2RlLmNoaWxkcmVuXG4gICAgbGV0IGluZGV4ID0gLTFcbiAgICAvKiogQHR5cGUge0FycmF5PHN0cmluZz59ICovXG4gICAgY29uc3QgcmVzdWx0ID0gW11cbiAgICBjb25zdCBzdWJleGl0ID0gc3RhdGUuZW50ZXIoJ3RhYmxlUm93JylcblxuICAgIHdoaWxlICgrK2luZGV4IDwgY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAvLyBOb3RlOiB0aGUgcG9zaXRpb25hbCBpbmZvIGFzIHVzZWQgaGVyZSBpcyBpbmNvcnJlY3QuXG4gICAgICAvLyBNYWtpbmcgaXQgY29ycmVjdCB3b3VsZCBiZSBpbXBvc3NpYmxlIGR1ZSB0byBhbGlnbmluZyBjZWxscz9cbiAgICAgIC8vIEFuZCBpdCB3b3VsZCBuZWVkIGNvcHkvcGFzdGluZyBgbWFya2Rvd24tdGFibGVgIGludG8gdGhpcyBwcm9qZWN0LlxuICAgICAgcmVzdWx0W2luZGV4XSA9IGhhbmRsZVRhYmxlQ2VsbChjaGlsZHJlbltpbmRleF0sIG5vZGUsIHN0YXRlLCBpbmZvKVxuICAgIH1cblxuICAgIHN1YmV4aXQoKVxuXG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG5cbiAgLyoqXG4gICAqIEB0eXBlIHtUb01hcmtkb3duSGFuZGxlfVxuICAgKiBAcGFyYW0ge0lubGluZUNvZGV9IG5vZGVcbiAgICovXG4gIGZ1bmN0aW9uIGlubGluZUNvZGVXaXRoVGFibGUobm9kZSwgcGFyZW50LCBzdGF0ZSkge1xuICAgIGxldCB2YWx1ZSA9IGRlZmF1bHRIYW5kbGVycy5pbmxpbmVDb2RlKG5vZGUsIHBhcmVudCwgc3RhdGUpXG5cbiAgICBpZiAoc3RhdGUuc3RhY2suaW5jbHVkZXMoJ3RhYmxlQ2VsbCcpKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xcfC9nLCAnXFxcXCQmJylcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm9rIiwiYXNzZXJ0IiwibWFya2Rvd25UYWJsZSIsImRlZmF1bHRIYW5kbGVycyIsImdmbVRhYmxlRnJvbU1hcmtkb3duIiwiZW50ZXIiLCJ0YWJsZSIsImVudGVyVGFibGUiLCJ0YWJsZURhdGEiLCJlbnRlckNlbGwiLCJ0YWJsZUhlYWRlciIsInRhYmxlUm93IiwiZW50ZXJSb3ciLCJleGl0IiwiY29kZVRleHQiLCJleGl0Q29kZVRleHQiLCJleGl0VGFibGUiLCJ0b2tlbiIsImFsaWduIiwiX2FsaWduIiwidHlwZSIsIm1hcCIsImQiLCJjaGlsZHJlbiIsImRhdGEiLCJpblRhYmxlIiwidW5kZWZpbmVkIiwidmFsdWUiLCJyZXN1bWUiLCJyZXBsYWNlIiwibm9kZSIsInN0YWNrIiwibGVuZ3RoIiwiJDAiLCIkMSIsImdmbVRhYmxlVG9NYXJrZG93biIsIm9wdGlvbnMiLCJzZXR0aW5ncyIsInBhZGRpbmciLCJ0YWJsZUNlbGxQYWRkaW5nIiwiYWxpZ25EZWxpbWl0ZXJzIiwidGFibGVQaXBlQWxpZ24iLCJzdHJpbmdMZW5ndGgiLCJhcm91bmQiLCJ1bnNhZmUiLCJjaGFyYWN0ZXIiLCJpbkNvbnN0cnVjdCIsImF0QnJlYWsiLCJhZnRlciIsImhhbmRsZXJzIiwiaW5saW5lQ29kZSIsImlubGluZUNvZGVXaXRoVGFibGUiLCJoYW5kbGVUYWJsZSIsInRhYmxlQ2VsbCIsImhhbmRsZVRhYmxlQ2VsbCIsImhhbmRsZVRhYmxlUm93IiwiXyIsInN0YXRlIiwiaW5mbyIsInNlcmlhbGl6ZURhdGEiLCJoYW5kbGVUYWJsZUFzRGF0YSIsInJvdyIsImhhbmRsZVRhYmxlUm93QXNEYXRhIiwic2xpY2UiLCJpbmRleE9mIiwic3ViZXhpdCIsImNvbnRhaW5lclBocmFzaW5nIiwiYmVmb3JlIiwibWF0cml4IiwiaW5kZXgiLCJyZXN1bHQiLCJwYXJlbnQiLCJpbmNsdWRlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mdast-util-gfm-table/lib/index.js\n");

/***/ })

};
;