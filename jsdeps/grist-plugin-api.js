/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var grist;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./core/app/plugin/CustomSectionAPI-ti.ts":
/*!************************************************!*\
  !*** ./core/app/plugin/CustomSectionAPI-ti.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColumnToMap\": () => (/* binding */ ColumnToMap),\n/* harmony export */   \"ColumnsToMap\": () => (/* binding */ ColumnsToMap),\n/* harmony export */   \"CustomSectionAPI\": () => (/* binding */ CustomSectionAPI),\n/* harmony export */   \"InteractionOptions\": () => (/* binding */ InteractionOptions),\n/* harmony export */   \"InteractionOptionsRequest\": () => (/* binding */ InteractionOptionsRequest),\n/* harmony export */   \"WidgetColumnMap\": () => (/* binding */ WidgetColumnMap),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ColumnToMap = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"name\": \"string\",\n  \"title\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"string\", \"null\")),\n  \"description\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"string\", \"null\")),\n  \"type\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"string\"),\n  \"optional\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"boolean\"),\n  \"allowMultiple\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"boolean\")\n});\nconst ColumnsToMap = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"string\", \"ColumnToMap\"));\nconst InteractionOptionsRequest = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"requiredAccess\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"string\"),\n  \"hasCustomOptions\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"boolean\"),\n  \"columns\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"ColumnsToMap\")\n});\nconst InteractionOptions = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"accessLevel\": \"string\"\n});\nconst WidgetColumnMap = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  [ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.indexKey]: ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"string\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"string\"), \"null\")\n});\nconst CustomSectionAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"configure\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"customOptions\", \"InteractionOptionsRequest\")),\n  \"mappings\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"WidgetColumnMap\", \"null\"))\n});\nconst exportedTypeSuite = {\n  ColumnToMap,\n  ColumnsToMap,\n  InteractionOptionsRequest,\n  InteractionOptions,\n  WidgetColumnMap,\n  CustomSectionAPI\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/CustomSectionAPI-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/CustomSectionAPI.ts":
/*!*********************************************!*\
  !*** ./core/app/plugin/CustomSectionAPI.ts ***!
  \*********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://grist/./core/app/plugin/CustomSectionAPI.ts?");

/***/ }),

/***/ "./core/app/plugin/FileParserAPI-ti.ts":
/*!*********************************************!*\
  !*** ./core/app/plugin/FileParserAPI-ti.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EditOptionsAPI\": () => (/* binding */ EditOptionsAPI),\n/* harmony export */   \"FileSource\": () => (/* binding */ FileSource),\n/* harmony export */   \"ParseFileAPI\": () => (/* binding */ ParseFileAPI),\n/* harmony export */   \"ParseFileResult\": () => (/* binding */ ParseFileResult),\n/* harmony export */   \"ParseOptionSchema\": () => (/* binding */ ParseOptionSchema),\n/* harmony export */   \"ParseOptions\": () => (/* binding */ ParseOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst EditOptionsAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"getParseOptions\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"ParseOptions\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"parseOptions\", \"ParseOptions\", true))\n});\nconst ParseFileAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"parseFile\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"ParseFileResult\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"file\", \"FileSource\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"parseOptions\", \"ParseOptions\", true))\n});\nconst ParseOptions = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"NUM_ROWS\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"number\"),\n  \"SCHEMA\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"ParseOptionSchema\"))\n});\nconst ParseOptionSchema = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"name\": \"string\",\n  \"label\": \"string\",\n  \"type\": \"string\",\n  \"visible\": \"boolean\"\n});\nconst FileSource = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"path\": \"string\",\n  \"origName\": \"string\"\n});\nconst ParseFileResult = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([\"GristTables\"], {\n  \"parseOptions\": \"ParseOptions\"\n});\nconst exportedTypeSuite = {\n  EditOptionsAPI,\n  ParseFileAPI,\n  ParseOptions,\n  ParseOptionSchema,\n  FileSource,\n  ParseFileResult\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/FileParserAPI-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/FileParserAPI.ts":
/*!******************************************!*\
  !*** ./core/app/plugin/FileParserAPI.ts ***!
  \******************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://grist/./core/app/plugin/FileParserAPI.ts?");

/***/ }),

/***/ "./core/app/plugin/GristAPI-ti.ts":
/*!****************************************!*\
  !*** ./core/app/plugin/GristAPI-ti.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AccessTokenOptions\": () => (/* binding */ AccessTokenOptions),\n/* harmony export */   \"AccessTokenResult\": () => (/* binding */ AccessTokenResult),\n/* harmony export */   \"ComponentKind\": () => (/* binding */ ComponentKind),\n/* harmony export */   \"GristAPI\": () => (/* binding */ GristAPI),\n/* harmony export */   \"GristDocAPI\": () => (/* binding */ GristDocAPI),\n/* harmony export */   \"GristView\": () => (/* binding */ GristView),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ComponentKind = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.lit(\"safeBrowser\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.lit(\"safePython\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.lit(\"unsafeNode\"));\nconst GristAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"render\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"number\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"path\", \"string\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"target\", \"RenderTarget\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"options\", \"RenderOptions\", true)),\n  \"dispose\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"procId\", \"number\")),\n  \"subscribe\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"tableId\", \"string\")),\n  \"unsubscribe\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"tableId\", \"string\"))\n});\nconst GristDocAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"getDocName\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"string\"),\n  \"listTables\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"string\")),\n  \"fetchTable\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"any\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"tableId\", \"string\")),\n  \"applyUserActions\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"any\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"actions\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"any\"))), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"options\", \"any\", true)),\n  \"getAccessToken\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"AccessTokenResult\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"options\", \"AccessTokenOptions\"))\n});\nconst GristView = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"fetchSelectedTable\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"any\"),\n  \"fetchSelectedRecord\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"any\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"rowId\", \"number\")),\n  \"allowSelectBy\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\"),\n  \"setSelectedRows\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"rowIds\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"number\")))\n});\nconst AccessTokenOptions = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"readOnly\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"boolean\")\n});\nconst AccessTokenResult = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"token\": \"string\",\n  \"baseUrl\": \"string\",\n  \"ttlMsecs\": \"number\"\n});\nconst exportedTypeSuite = {\n  ComponentKind,\n  GristAPI,\n  GristDocAPI,\n  GristView,\n  AccessTokenOptions,\n  AccessTokenResult\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/GristAPI-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/GristAPI.ts":
/*!*************************************!*\
  !*** ./core/app/plugin/GristAPI.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RPC_GRISTAPI_INTERFACE\": () => (/* binding */ RPC_GRISTAPI_INTERFACE)\n/* harmony export */ });\nconst RPC_GRISTAPI_INTERFACE = \"_grist_api\";\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/GristAPI.ts?");

/***/ }),

/***/ "./core/app/plugin/GristData.ts":
/*!**************************************!*\
  !*** ./core/app/plugin/GristData.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GristObjCode\": () => (/* binding */ GristObjCode)\n/* harmony export */ });\nvar GristObjCode = /* @__PURE__ */ ((GristObjCode2) => {\n  GristObjCode2[\"List\"] = \"L\";\n  GristObjCode2[\"LookUp\"] = \"l\";\n  GristObjCode2[\"Dict\"] = \"O\";\n  GristObjCode2[\"DateTime\"] = \"D\";\n  GristObjCode2[\"Date\"] = \"d\";\n  GristObjCode2[\"Skip\"] = \"S\";\n  GristObjCode2[\"Censored\"] = \"C\";\n  GristObjCode2[\"Reference\"] = \"R\";\n  GristObjCode2[\"ReferenceList\"] = \"r\";\n  GristObjCode2[\"Exception\"] = \"E\";\n  GristObjCode2[\"Pending\"] = \"P\";\n  GristObjCode2[\"Unmarshallable\"] = \"U\";\n  GristObjCode2[\"Versions\"] = \"V\";\n  return GristObjCode2;\n})(GristObjCode || {});\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/GristData.ts?");

/***/ }),

/***/ "./core/app/plugin/GristTable-ti.ts":
/*!******************************************!*\
  !*** ./core/app/plugin/GristTable-ti.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIType\": () => (/* binding */ APIType),\n/* harmony export */   \"GristColumn\": () => (/* binding */ GristColumn),\n/* harmony export */   \"GristTable\": () => (/* binding */ GristTable),\n/* harmony export */   \"GristTables\": () => (/* binding */ GristTables),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GristTable = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"table_name\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"string\", \"null\"),\n  \"column_metadata\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"GristColumn\"),\n  \"table_data\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"any\"))\n});\nconst GristTables = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"tables\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"GristTable\")\n});\nconst GristColumn = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"id\": \"string\",\n  \"type\": \"string\"\n});\nconst APIType = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.enumtype({\n  \"ImportSourceAPI\": 0,\n  \"ImportProcessorAPI\": 1,\n  \"ParseOptionsAPI\": 2,\n  \"ParseFileAPI\": 3\n});\nconst exportedTypeSuite = {\n  GristTable,\n  GristTables,\n  GristColumn,\n  APIType\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/GristTable-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/GristTable.ts":
/*!***************************************!*\
  !*** ./core/app/plugin/GristTable.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIType\": () => (/* binding */ APIType)\n/* harmony export */ });\nvar APIType = /* @__PURE__ */ ((APIType2) => {\n  APIType2[APIType2[\"ImportSourceAPI\"] = 0] = \"ImportSourceAPI\";\n  APIType2[APIType2[\"ImportProcessorAPI\"] = 1] = \"ImportProcessorAPI\";\n  APIType2[APIType2[\"ParseOptionsAPI\"] = 2] = \"ParseOptionsAPI\";\n  APIType2[APIType2[\"ParseFileAPI\"] = 3] = \"ParseFileAPI\";\n  return APIType2;\n})(APIType || {});\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/GristTable.ts?");

/***/ }),

/***/ "./core/app/plugin/ImportSourceAPI-ti.ts":
/*!***********************************************!*\
  !*** ./core/app/plugin/ImportSourceAPI-ti.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FileContent\": () => (/* binding */ FileContent),\n/* harmony export */   \"FileListItem\": () => (/* binding */ FileListItem),\n/* harmony export */   \"ImportProcessorAPI\": () => (/* binding */ ImportProcessorAPI),\n/* harmony export */   \"ImportSource\": () => (/* binding */ ImportSource),\n/* harmony export */   \"ImportSourceAPI\": () => (/* binding */ ImportSourceAPI),\n/* harmony export */   \"URL\": () => (/* binding */ URL),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst ImportSourceAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"getImportSource\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"ImportSource\", \"undefined\"))\n});\nconst ImportProcessorAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"processImport\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"GristTable\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"source\", \"ImportSource\"))\n});\nconst FileContent = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"content\": \"any\",\n  \"name\": \"string\"\n});\nconst FileListItem = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"kind\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.lit(\"fileList\"),\n  \"files\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.array(\"FileContent\")\n});\nconst URL = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"kind\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.lit(\"url\"),\n  \"url\": \"string\"\n});\nconst ImportSource = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"item\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"FileListItem\", \"URL\"),\n  \"options\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"string\", \"Buffer\")),\n  \"description\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"string\")\n});\nconst exportedTypeSuite = {\n  ImportSourceAPI,\n  ImportProcessorAPI,\n  FileContent,\n  FileListItem,\n  URL,\n  ImportSource\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/ImportSourceAPI-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/ImportSourceAPI.ts":
/*!********************************************!*\
  !*** ./core/app/plugin/ImportSourceAPI.ts ***!
  \********************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://grist/./core/app/plugin/ImportSourceAPI.ts?");

/***/ }),

/***/ "./core/app/plugin/InternalImportSourceAPI-ti.ts":
/*!*******************************************************!*\
  !*** ./core/app/plugin/InternalImportSourceAPI-ti.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InternalImportSourceAPI\": () => (/* binding */ InternalImportSourceAPI),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst InternalImportSourceAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"getImportSource\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"ImportSource\", \"undefined\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"inlineTarget\", \"RenderTarget\"))\n});\nconst exportedTypeSuite = {\n  InternalImportSourceAPI\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/InternalImportSourceAPI-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/RenderOptions-ti.ts":
/*!*********************************************!*\
  !*** ./core/app/plugin/RenderOptions-ti.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RenderOptions\": () => (/* binding */ RenderOptions),\n/* harmony export */   \"RenderTarget\": () => (/* binding */ RenderTarget),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RenderTarget = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.lit(\"fullscreen\"), \"number\");\nconst RenderOptions = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"height\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.opt(\"string\")\n});\nconst exportedTypeSuite = {\n  RenderTarget,\n  RenderOptions\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/RenderOptions-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/RenderOptions.ts":
/*!******************************************!*\
  !*** ./core/app/plugin/RenderOptions.ts ***!
  \******************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://grist/./core/app/plugin/RenderOptions.ts?");

/***/ }),

/***/ "./core/app/plugin/StorageAPI-ti.ts":
/*!******************************************!*\
  !*** ./core/app/plugin/StorageAPI-ti.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Storage\": () => (/* binding */ Storage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Storage = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"getItem\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"any\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"key\", \"string\")),\n  \"hasItem\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"boolean\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"key\", \"string\")),\n  \"setItem\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"key\", \"string\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"value\", \"any\")),\n  \"removeItem\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"key\", \"string\")),\n  \"clear\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\")\n});\nconst exportedTypeSuite = {\n  Storage\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/StorageAPI-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/StorageAPI.ts":
/*!***************************************!*\
  !*** ./core/app/plugin/StorageAPI.ts ***!
  \***************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://grist/./core/app/plugin/StorageAPI.ts?");

/***/ }),

/***/ "./core/app/plugin/TableOperationsImpl.ts":
/*!************************************************!*\
  !*** ./core/app/plugin/TableOperationsImpl.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TableOperationsImpl\": () => (/* binding */ TableOperationsImpl),\n/* harmony export */   \"areSameFields\": () => (/* binding */ areSameFields),\n/* harmony export */   \"convertToBulkColValues\": () => (/* binding */ convertToBulkColValues),\n/* harmony export */   \"fieldNames\": () => (/* binding */ fieldNames),\n/* harmony export */   \"handleSandboxErrorOnPlatform\": () => (/* binding */ handleSandboxErrorOnPlatform)\n/* harmony export */ });\n/* harmony import */ var _gutil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gutil */ \"./core/app/plugin/gutil.ts\");\nvar __defProp = Object.defineProperty;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\n\nconst flatMap = __webpack_require__(/*! lodash/flatMap */ \"./node_modules/lodash/flatMap.js\");\nconst isEqual = __webpack_require__(/*! lodash/isEqual */ \"./node_modules/lodash/isEqual.js\");\nconst pick = __webpack_require__(/*! lodash/pick */ \"./node_modules/lodash/pick.js\");\nconst groupBy = __webpack_require__(/*! lodash/groupBy */ \"./node_modules/lodash/groupBy.js\");\nclass TableOperationsImpl {\n  constructor(_platform, _defaultOptions) {\n    this._platform = _platform;\n    this._defaultOptions = _defaultOptions;\n  }\n  getTableId() {\n    return this._platform.getTableId();\n  }\n  async create(recordsOrRecord, options) {\n    return await withRecords(recordsOrRecord, async (records) => {\n      const postRecords = convertToBulkColValues(records);\n      const ids = await this.addRecords(records.length, postRecords, options);\n      return ids.map((id) => ({ id }));\n    });\n  }\n  async update(recordOrRecords, options) {\n    await withRecords(recordOrRecords, async (records) => {\n      if (!areSameFields(records)) {\n        this._platform.throwError(\"PATCH\", \"requires all records to have same fields\", 400);\n      }\n      const rowIds = records.map((r) => r.id);\n      const columnValues = convertToBulkColValues(records);\n      if (!rowIds.length || !columnValues) {\n        this._platform.throwError(\"PATCH\", \"requires a valid record object\", 400);\n      }\n      await this.updateRecords(columnValues, rowIds, options);\n      return [];\n    });\n  }\n  async upsert(recordOrRecords, upsertOptions) {\n    await withRecords(recordOrRecords, async (records) => {\n      const tableId = await this._platform.getTableId();\n      const options = {\n        add: upsertOptions == null ? void 0 : upsertOptions.add,\n        update: upsertOptions == null ? void 0 : upsertOptions.update,\n        on_many: upsertOptions == null ? void 0 : upsertOptions.onMany,\n        allow_empty_require: upsertOptions == null ? void 0 : upsertOptions.allowEmptyRequire\n      };\n      const recordOptions = pick(upsertOptions, \"parseStrings\");\n      const recGroups = groupBy(records, (rec) => {\n        const requireKeys = Object.keys(rec.require).sort().join(\",\");\n        const fieldsKeys = Object.keys(rec.fields || {}).sort().join(\",\");\n        return `${requireKeys}:${fieldsKeys}`;\n      });\n      const actions = Object.values(recGroups).map((group) => {\n        const require2 = convertToBulkColValues(group.map((r) => ({ fields: r.require })));\n        const fields = convertToBulkColValues(group.map((r) => ({ fields: r.fields || {} })));\n        return [\"BulkAddOrUpdateRecord\", tableId, require2, fields, options];\n      });\n      await this._applyUserActions(tableId, [...fieldNames(records)], actions, recordOptions);\n      return [];\n    });\n  }\n  async destroy(recordIdOrRecordIds) {\n    await withRecords(recordIdOrRecordIds, async (recordIds) => {\n      const tableId = await this._platform.getTableId();\n      const actions = [[\"BulkRemoveRecord\", tableId, recordIds]];\n      await this._applyUserActions(tableId, [], actions);\n      return [];\n    });\n  }\n  async updateRecords(columnValues, rowIds, options) {\n    await this._addOrUpdateRecords(columnValues, rowIds, \"BulkUpdateRecord\", options);\n  }\n  async addRecords(count, columnValues, options) {\n    const rowIds = (0,_gutil__WEBPACK_IMPORTED_MODULE_0__.arrayRepeat)(count, null);\n    return this._addOrUpdateRecords(columnValues, rowIds, \"BulkAddRecord\", options);\n  }\n  async _addOrUpdateRecords(columnValues, rowIds, actionType, options) {\n    const tableId = await this._platform.getTableId();\n    const colNames = Object.keys(columnValues);\n    const sandboxRes = await this._applyUserActions(tableId, colNames, [[actionType, tableId, rowIds, columnValues]], options);\n    return sandboxRes.retValues[0];\n  }\n  async _applyUserActions(tableId, colNames, actions, options = {}) {\n    return handleSandboxErrorOnPlatform(tableId, colNames, this._platform.applyUserActions(actions, __spreadValues(__spreadValues({}, this._defaultOptions), options)), this._platform);\n  }\n}\nfunction convertToBulkColValues(records) {\n  const result = {};\n  for (const fieldName of fieldNames(records)) {\n    result[fieldName] = records.map((record) => {\n      var _a, _b;\n      return (_b = (_a = record.fields) == null ? void 0 : _a[fieldName]) != null ? _b : null;\n    });\n  }\n  return result;\n}\nfunction fieldNames(records) {\n  return new Set(flatMap(records, (r) => Object.keys(__spreadValues(__spreadValues({}, r.fields), r.require))));\n}\nfunction areSameFields(records) {\n  const recordsFields = records.map((r) => new Set(Object.keys(r.fields || {})));\n  return recordsFields.every((s) => isEqual(recordsFields[0], s));\n}\nasync function withRecords(recordsOrRecord, op) {\n  const records = Array.isArray(recordsOrRecord) ? recordsOrRecord : [recordsOrRecord];\n  const result = records.length == 0 ? [] : await op(records);\n  return Array.isArray(recordsOrRecord) ? result : result[0];\n}\nasync function handleSandboxErrorOnPlatform(tableId, colNames, p, platform) {\n  var _a;\n  try {\n    return await p;\n  } catch (err) {\n    const message = err instanceof Error && ((_a = err.message) == null ? void 0 : _a.startsWith(\"[Sandbox] \")) ? err.message : void 0;\n    if (message) {\n      let match = message.match(/non-existent record #([0-9]+)/);\n      if (match) {\n        platform.throwError(\"\", `Invalid row id ${match[1]}`, 400);\n      }\n      match = message.match(/\\[Sandbox] (?:KeyError u?'(?:Table \\w+ has no column )?|ValueError No such table: )(\\w+)/);\n      if (match) {\n        if (match[1] === tableId) {\n          platform.throwError(\"\", `Table not found \"${tableId}\"`, 404);\n        } else if (colNames.includes(match[1])) {\n          platform.throwError(\"\", `Invalid column \"${match[1]}\"`, 400);\n        }\n      }\n      platform.throwError(\"\", `Error manipulating data: ${message}`, 400);\n    }\n    throw err;\n  }\n}\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/TableOperationsImpl.ts?");

/***/ }),

/***/ "./core/app/plugin/TypeCheckers.ts":
/*!*****************************************!*\
  !*** ./core/app/plugin/TypeCheckers.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CustomSectionAPITI\": () => (/* reexport safe */ _CustomSectionAPI_ti__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   \"FileParserAPITI\": () => (/* reexport safe */ _FileParserAPI_ti__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   \"GristAPITI\": () => (/* reexport safe */ _GristAPI_ti__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   \"GristTableTI\": () => (/* reexport safe */ _GristTable_ti__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   \"ImportSourceAPITI\": () => (/* reexport safe */ _ImportSourceAPI_ti__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   \"InternalImportSourceAPITI\": () => (/* reexport safe */ _InternalImportSourceAPI_ti__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   \"RenderOptionsTI\": () => (/* reexport safe */ _RenderOptions_ti__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n/* harmony export */   \"StorageAPITI\": () => (/* reexport safe */ _StorageAPI_ti__WEBPACK_IMPORTED_MODULE_8__[\"default\"]),\n/* harmony export */   \"WidgetAPITI\": () => (/* reexport safe */ _WidgetAPI_ti__WEBPACK_IMPORTED_MODULE_9__[\"default\"]),\n/* harmony export */   \"checkers\": () => (/* binding */ checkers)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _CustomSectionAPI_ti__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CustomSectionAPI-ti */ \"./core/app/plugin/CustomSectionAPI-ti.ts\");\n/* harmony import */ var _FileParserAPI_ti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileParserAPI-ti */ \"./core/app/plugin/FileParserAPI-ti.ts\");\n/* harmony import */ var _GristAPI_ti__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GristAPI-ti */ \"./core/app/plugin/GristAPI-ti.ts\");\n/* harmony import */ var _GristTable_ti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GristTable-ti */ \"./core/app/plugin/GristTable-ti.ts\");\n/* harmony import */ var _ImportSourceAPI_ti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ImportSourceAPI-ti */ \"./core/app/plugin/ImportSourceAPI-ti.ts\");\n/* harmony import */ var _InternalImportSourceAPI_ti__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./InternalImportSourceAPI-ti */ \"./core/app/plugin/InternalImportSourceAPI-ti.ts\");\n/* harmony import */ var _RenderOptions_ti__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RenderOptions-ti */ \"./core/app/plugin/RenderOptions-ti.ts\");\n/* harmony import */ var _StorageAPI_ti__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StorageAPI-ti */ \"./core/app/plugin/StorageAPI-ti.ts\");\n/* harmony import */ var _WidgetAPI_ti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./WidgetAPI-ti */ \"./core/app/plugin/WidgetAPI-ti.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst allTypes = [\n  _CustomSectionAPI_ti__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _FileParserAPI_ti__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  _GristAPI_ti__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n  _GristTable_ti__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n  _ImportSourceAPI_ti__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n  _InternalImportSourceAPI_ti__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n  _RenderOptions_ti__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  _StorageAPI_ti__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n  _WidgetAPI_ti__WEBPACK_IMPORTED_MODULE_9__[\"default\"]\n];\nif (typeof Buffer === \"undefined\") {\n  allTypes.push({ Buffer: new ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.BasicType((v) => false, \"Buffer is not supported\") });\n}\nfunction checkDuplicates(types) {\n  const seen = /* @__PURE__ */ new Set();\n  for (const t of types) {\n    for (const key of Object.keys(t)) {\n      if (seen.has(key)) {\n        throw new Error(`TypeCheckers: Duplicate type name ${key}`);\n      }\n      seen.add(key);\n    }\n  }\n}\ncheckDuplicates(allTypes);\nconst checkers = (0,ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.createCheckers)(...allTypes);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/TypeCheckers.ts?");

/***/ }),

/***/ "./core/app/plugin/WidgetAPI-ti.ts":
/*!*****************************************!*\
  !*** ./core/app/plugin/WidgetAPI-ti.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WidgetAPI\": () => (/* binding */ WidgetAPI),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\n/* harmony import */ var ts_interface_checker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__);\n\nconst WidgetAPI = ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n  \"getOptions\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.union(\"object\", \"null\")),\n  \"setOptions\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"options\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.iface([], {\n    [ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.indexKey]: \"any\"\n  }))),\n  \"clearOptions\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\"),\n  \"setOption\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"void\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"key\", \"string\"), ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"value\", \"any\")),\n  \"getOption\": ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.func(\"any\", ts_interface_checker__WEBPACK_IMPORTED_MODULE_0__.param(\"key\", \"string\"))\n});\nconst exportedTypeSuite = {\n  WidgetAPI\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportedTypeSuite);\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/WidgetAPI-ti.ts?");

/***/ }),

/***/ "./core/app/plugin/WidgetAPI.ts":
/*!**************************************!*\
  !*** ./core/app/plugin/WidgetAPI.ts ***!
  \**************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://grist/./core/app/plugin/WidgetAPI.ts?");

/***/ }),

/***/ "./core/app/plugin/grist-plugin-api.ts":
/*!*********************************************!*\
  !*** ./core/app/plugin/grist-plugin-api.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APIType\": () => (/* reexport safe */ _GristTable__WEBPACK_IMPORTED_MODULE_6__.APIType),\n/* harmony export */   \"CustomSectionAPITI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.CustomSectionAPITI),\n/* harmony export */   \"FileParserAPITI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.FileParserAPITI),\n/* harmony export */   \"GristAPITI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.GristAPITI),\n/* harmony export */   \"GristObjCode\": () => (/* reexport safe */ _GristData__WEBPACK_IMPORTED_MODULE_5__.GristObjCode),\n/* harmony export */   \"GristTableTI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.GristTableTI),\n/* harmony export */   \"ImportSourceAPITI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.ImportSourceAPITI),\n/* harmony export */   \"InternalImportSourceAPITI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.InternalImportSourceAPITI),\n/* harmony export */   \"RPC_GRISTAPI_INTERFACE\": () => (/* reexport safe */ _GristAPI__WEBPACK_IMPORTED_MODULE_0__.RPC_GRISTAPI_INTERFACE),\n/* harmony export */   \"RenderOptionsTI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.RenderOptionsTI),\n/* harmony export */   \"StorageAPITI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.StorageAPITI),\n/* harmony export */   \"WidgetAPITI\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.WidgetAPITI),\n/* harmony export */   \"addImporter\": () => (/* binding */ addImporter),\n/* harmony export */   \"allowSelectBy\": () => (/* binding */ allowSelectBy),\n/* harmony export */   \"api\": () => (/* binding */ api),\n/* harmony export */   \"checkers\": () => (/* reexport safe */ _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.checkers),\n/* harmony export */   \"clearOptions\": () => (/* binding */ clearOptions),\n/* harmony export */   \"coreDocApi\": () => (/* binding */ coreDocApi),\n/* harmony export */   \"docApi\": () => (/* binding */ docApi),\n/* harmony export */   \"fetchSelectedRecord\": () => (/* binding */ fetchSelectedRecord),\n/* harmony export */   \"fetchSelectedTable\": () => (/* binding */ fetchSelectedTable),\n/* harmony export */   \"getAccessToken\": () => (/* binding */ getAccessToken),\n/* harmony export */   \"getOption\": () => (/* binding */ getOption),\n/* harmony export */   \"getOptions\": () => (/* binding */ getOptions),\n/* harmony export */   \"getSelectedTableId\": () => (/* binding */ getSelectedTableId),\n/* harmony export */   \"getSelectedTableIdSync\": () => (/* binding */ getSelectedTableIdSync),\n/* harmony export */   \"getTable\": () => (/* binding */ getTable),\n/* harmony export */   \"mapColumnNames\": () => (/* binding */ mapColumnNames),\n/* harmony export */   \"mapColumnNamesBack\": () => (/* binding */ mapColumnNamesBack),\n/* harmony export */   \"on\": () => (/* binding */ on),\n/* harmony export */   \"onNewRecord\": () => (/* binding */ onNewRecord),\n/* harmony export */   \"onOptions\": () => (/* binding */ onOptions),\n/* harmony export */   \"onRecord\": () => (/* binding */ onRecord),\n/* harmony export */   \"onRecords\": () => (/* binding */ onRecords),\n/* harmony export */   \"ready\": () => (/* binding */ ready),\n/* harmony export */   \"rpc\": () => (/* binding */ rpc),\n/* harmony export */   \"sectionApi\": () => (/* binding */ sectionApi),\n/* harmony export */   \"selectedTable\": () => (/* binding */ selectedTable),\n/* harmony export */   \"setOption\": () => (/* binding */ setOption),\n/* harmony export */   \"setOptions\": () => (/* binding */ setOptions),\n/* harmony export */   \"setSelectedRows\": () => (/* binding */ setSelectedRows),\n/* harmony export */   \"viewApi\": () => (/* binding */ viewApi),\n/* harmony export */   \"widgetApi\": () => (/* binding */ widgetApi)\n/* harmony export */ });\n/* harmony import */ var _GristAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GristAPI */ \"./core/app/plugin/GristAPI.ts\");\n/* harmony import */ var _objtypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objtypes */ \"./core/app/plugin/objtypes.ts\");\n/* harmony import */ var _TableOperationsImpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TableOperationsImpl */ \"./core/app/plugin/TableOperationsImpl.ts\");\n/* harmony import */ var _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypeCheckers */ \"./core/app/plugin/TypeCheckers.ts\");\n/* harmony import */ var _FileParserAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FileParserAPI */ \"./core/app/plugin/FileParserAPI.ts\");\n/* harmony import */ var _FileParserAPI__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_FileParserAPI__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _FileParserAPI__WEBPACK_IMPORTED_MODULE_4__) if([\"default\",\"rpc\",\"api\",\"coreDocApi\",\"viewApi\",\"widgetApi\",\"sectionApi\",\"allowSelectBy\",\"setSelectedRows\",\"fetchSelectedTable\",\"fetchSelectedRecord\",\"docApi\",\"on\",\"getOption\",\"setOption\",\"setOptions\",\"getOptions\",\"clearOptions\",\"getTable\",\"getAccessToken\",\"selectedTable\",\"getSelectedTableId\",\"getSelectedTableIdSync\",\"mapColumnNames\",\"mapColumnNamesBack\",\"onRecord\",\"onNewRecord\",\"onRecords\",\"onOptions\",\"addImporter\",\"ready\",\"CustomSectionAPITI\",\"FileParserAPITI\",\"GristAPITI\",\"GristTableTI\",\"ImportSourceAPITI\",\"InternalImportSourceAPITI\",\"RenderOptionsTI\",\"StorageAPITI\",\"WidgetAPITI\",\"checkers\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _FileParserAPI__WEBPACK_IMPORTED_MODULE_4__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _GristData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GristData */ \"./core/app/plugin/GristData.ts\");\n/* harmony import */ var _GristTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GristTable */ \"./core/app/plugin/GristTable.ts\");\n/* harmony import */ var _ImportSourceAPI__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImportSourceAPI */ \"./core/app/plugin/ImportSourceAPI.ts\");\n/* harmony import */ var _ImportSourceAPI__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ImportSourceAPI__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _ImportSourceAPI__WEBPACK_IMPORTED_MODULE_7__) if([\"default\",\"rpc\",\"api\",\"coreDocApi\",\"viewApi\",\"widgetApi\",\"sectionApi\",\"allowSelectBy\",\"setSelectedRows\",\"fetchSelectedTable\",\"fetchSelectedRecord\",\"docApi\",\"on\",\"getOption\",\"setOption\",\"setOptions\",\"getOptions\",\"clearOptions\",\"getTable\",\"getAccessToken\",\"selectedTable\",\"getSelectedTableId\",\"getSelectedTableIdSync\",\"mapColumnNames\",\"mapColumnNamesBack\",\"onRecord\",\"onNewRecord\",\"onRecords\",\"onOptions\",\"addImporter\",\"ready\",\"CustomSectionAPITI\",\"FileParserAPITI\",\"GristAPITI\",\"GristTableTI\",\"ImportSourceAPITI\",\"InternalImportSourceAPITI\",\"RenderOptionsTI\",\"StorageAPITI\",\"WidgetAPITI\",\"checkers\",\"RPC_GRISTAPI_INTERFACE\",\"GristObjCode\",\"APIType\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _ImportSourceAPI__WEBPACK_IMPORTED_MODULE_7__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _StorageAPI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StorageAPI */ \"./core/app/plugin/StorageAPI.ts\");\n/* harmony import */ var _StorageAPI__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_StorageAPI__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _StorageAPI__WEBPACK_IMPORTED_MODULE_8__) if([\"default\",\"rpc\",\"api\",\"coreDocApi\",\"viewApi\",\"widgetApi\",\"sectionApi\",\"allowSelectBy\",\"setSelectedRows\",\"fetchSelectedTable\",\"fetchSelectedRecord\",\"docApi\",\"on\",\"getOption\",\"setOption\",\"setOptions\",\"getOptions\",\"clearOptions\",\"getTable\",\"getAccessToken\",\"selectedTable\",\"getSelectedTableId\",\"getSelectedTableIdSync\",\"mapColumnNames\",\"mapColumnNamesBack\",\"onRecord\",\"onNewRecord\",\"onRecords\",\"onOptions\",\"addImporter\",\"ready\",\"CustomSectionAPITI\",\"FileParserAPITI\",\"GristAPITI\",\"GristTableTI\",\"ImportSourceAPITI\",\"InternalImportSourceAPITI\",\"RenderOptionsTI\",\"StorageAPITI\",\"WidgetAPITI\",\"checkers\",\"RPC_GRISTAPI_INTERFACE\",\"GristObjCode\",\"APIType\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _StorageAPI__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _RenderOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RenderOptions */ \"./core/app/plugin/RenderOptions.ts\");\n/* harmony import */ var _RenderOptions__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_RenderOptions__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _RenderOptions__WEBPACK_IMPORTED_MODULE_9__) if([\"default\",\"rpc\",\"api\",\"coreDocApi\",\"viewApi\",\"widgetApi\",\"sectionApi\",\"allowSelectBy\",\"setSelectedRows\",\"fetchSelectedTable\",\"fetchSelectedRecord\",\"docApi\",\"on\",\"getOption\",\"setOption\",\"setOptions\",\"getOptions\",\"clearOptions\",\"getTable\",\"getAccessToken\",\"selectedTable\",\"getSelectedTableId\",\"getSelectedTableIdSync\",\"mapColumnNames\",\"mapColumnNamesBack\",\"onRecord\",\"onNewRecord\",\"onRecords\",\"onOptions\",\"addImporter\",\"ready\",\"CustomSectionAPITI\",\"FileParserAPITI\",\"GristAPITI\",\"GristTableTI\",\"ImportSourceAPITI\",\"InternalImportSourceAPITI\",\"RenderOptionsTI\",\"StorageAPITI\",\"WidgetAPITI\",\"checkers\",\"RPC_GRISTAPI_INTERFACE\",\"GristObjCode\",\"APIType\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _RenderOptions__WEBPACK_IMPORTED_MODULE_9__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _WidgetAPI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WidgetAPI */ \"./core/app/plugin/WidgetAPI.ts\");\n/* harmony import */ var _WidgetAPI__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_WidgetAPI__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _WidgetAPI__WEBPACK_IMPORTED_MODULE_10__) if([\"default\",\"rpc\",\"api\",\"coreDocApi\",\"viewApi\",\"widgetApi\",\"sectionApi\",\"allowSelectBy\",\"setSelectedRows\",\"fetchSelectedTable\",\"fetchSelectedRecord\",\"docApi\",\"on\",\"getOption\",\"setOption\",\"setOptions\",\"getOptions\",\"clearOptions\",\"getTable\",\"getAccessToken\",\"selectedTable\",\"getSelectedTableId\",\"getSelectedTableIdSync\",\"mapColumnNames\",\"mapColumnNamesBack\",\"onRecord\",\"onNewRecord\",\"onRecords\",\"onOptions\",\"addImporter\",\"ready\",\"CustomSectionAPITI\",\"FileParserAPITI\",\"GristAPITI\",\"GristTableTI\",\"ImportSourceAPITI\",\"InternalImportSourceAPITI\",\"RenderOptionsTI\",\"StorageAPITI\",\"WidgetAPITI\",\"checkers\",\"RPC_GRISTAPI_INTERFACE\",\"GristObjCode\",\"APIType\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _WidgetAPI__WEBPACK_IMPORTED_MODULE_10__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var _CustomSectionAPI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CustomSectionAPI */ \"./core/app/plugin/CustomSectionAPI.ts\");\n/* harmony import */ var _CustomSectionAPI__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_CustomSectionAPI__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _CustomSectionAPI__WEBPACK_IMPORTED_MODULE_11__) if([\"default\",\"rpc\",\"api\",\"coreDocApi\",\"viewApi\",\"widgetApi\",\"sectionApi\",\"allowSelectBy\",\"setSelectedRows\",\"fetchSelectedTable\",\"fetchSelectedRecord\",\"docApi\",\"on\",\"getOption\",\"setOption\",\"setOptions\",\"getOptions\",\"clearOptions\",\"getTable\",\"getAccessToken\",\"selectedTable\",\"getSelectedTableId\",\"getSelectedTableIdSync\",\"mapColumnNames\",\"mapColumnNamesBack\",\"onRecord\",\"onNewRecord\",\"onRecords\",\"onOptions\",\"addImporter\",\"ready\",\"CustomSectionAPITI\",\"FileParserAPITI\",\"GristAPITI\",\"GristTableTI\",\"ImportSourceAPITI\",\"InternalImportSourceAPITI\",\"RenderOptionsTI\",\"StorageAPITI\",\"WidgetAPITI\",\"checkers\",\"RPC_GRISTAPI_INTERFACE\",\"GristObjCode\",\"APIType\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _CustomSectionAPI__WEBPACK_IMPORTED_MODULE_11__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n/* harmony import */ var grain_rpc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grain-rpc */ \"./node_modules/grain-rpc/dist/lib/index.js\");\n/* harmony import */ var grain_rpc__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(grain_rpc__WEBPACK_IMPORTED_MODULE_12__);\nvar __defProp = Object.defineProperty;\nvar __defProps = Object.defineProperties;\nvar __getOwnPropDescs = Object.getOwnPropertyDescriptors;\nvar __getOwnPropSymbols = Object.getOwnPropertySymbols;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __propIsEnum = Object.prototype.propertyIsEnumerable;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __spreadValues = (a, b) => {\n  for (var prop in b || (b = {}))\n    if (__hasOwnProp.call(b, prop))\n      __defNormalProp(a, prop, b[prop]);\n  if (__getOwnPropSymbols)\n    for (var prop of __getOwnPropSymbols(b)) {\n      if (__propIsEnum.call(b, prop))\n        __defNormalProp(a, prop, b[prop]);\n    }\n  return a;\n};\nvar __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst rpc = new grain_rpc__WEBPACK_IMPORTED_MODULE_12__.Rpc({ logger: createRpcLogger() });\nconst api = rpc.getStub(_GristAPI__WEBPACK_IMPORTED_MODULE_0__.RPC_GRISTAPI_INTERFACE, _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.checkers.GristAPI);\nconst coreDocApi = rpc.getStub(\"GristDocAPI@grist\", _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.checkers.GristDocAPI);\nconst viewApi = rpc.getStub(\"GristView\", _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.checkers.GristView);\nconst widgetApi = rpc.getStub(\"WidgetAPI\", _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.checkers.WidgetAPI);\nconst sectionApi = rpc.getStub(\"CustomSectionAPI\", _TypeCheckers__WEBPACK_IMPORTED_MODULE_3__.checkers.CustomSectionAPI);\nconst allowSelectBy = viewApi.allowSelectBy;\nconst setSelectedRows = viewApi.setSelectedRows;\nasync function fetchSelectedTable(options = {}) {\n  const table = await viewApi.fetchSelectedTable();\n  return options.keepEncoded ? table : (0,_objtypes__WEBPACK_IMPORTED_MODULE_1__.mapValues)(table, (col) => col.map(_objtypes__WEBPACK_IMPORTED_MODULE_1__.decodeObject));\n}\nasync function fetchSelectedRecord(rowId, options = {}) {\n  const rec = await viewApi.fetchSelectedRecord(rowId);\n  return options.keepEncoded ? rec : (0,_objtypes__WEBPACK_IMPORTED_MODULE_1__.mapValues)(rec, _objtypes__WEBPACK_IMPORTED_MODULE_1__.decodeObject);\n}\nconst docApi = __spreadProps(__spreadValues(__spreadValues({}, coreDocApi), viewApi), {\n  fetchSelectedTable,\n  fetchSelectedRecord\n});\nconst on = rpc.on.bind(rpc);\nconst getOption = widgetApi.getOption.bind(widgetApi);\nconst setOption = widgetApi.setOption.bind(widgetApi);\nconst setOptions = widgetApi.setOptions.bind(widgetApi);\nconst getOptions = widgetApi.getOptions.bind(widgetApi);\nconst clearOptions = widgetApi.clearOptions.bind(widgetApi);\nfunction getTable(tableId) {\n  return new _TableOperationsImpl__WEBPACK_IMPORTED_MODULE_2__.TableOperationsImpl({\n    async getTableId() {\n      return tableId || await getSelectedTableId();\n    },\n    throwError(verb, text, status) {\n      throw new Error(text);\n    },\n    applyUserActions(actions, opts) {\n      return docApi.applyUserActions(actions, opts);\n    }\n  }, {});\n}\nasync function getAccessToken(options) {\n  return docApi.getAccessToken(options || {});\n}\nconst selectedTable = getTable();\nasync function getSelectedTableId() {\n  await _initialization;\n  return _tableId;\n}\nfunction getSelectedTableIdSync() {\n  return _tableId;\n}\nlet _mappingsCache;\nlet _activeRefreshReq = null;\nlet _columnsToMap;\nlet _tableId;\nlet _setInitialized;\nconst _initialization = new Promise((resolve) => _setInitialized = resolve);\nlet _readyCalled = false;\nasync function getMappingsIfChanged(data) {\n  const uninitialized = _mappingsCache === void 0;\n  if (data.mappingsChange || uninitialized) {\n    if (!_activeRefreshReq) {\n      _activeRefreshReq = sectionApi.mappings().then((mappings) => void (_mappingsCache = mappings)).finally(() => _activeRefreshReq = null);\n    }\n    await _activeRefreshReq;\n  }\n  return _mappingsCache ? JSON.parse(JSON.stringify(_mappingsCache)) : null;\n}\nfunction mapColumnNames(data, options) {\n  options = __spreadValues({ columns: _columnsToMap, mappings: _mappingsCache, reverse: false }, options);\n  if (!options.columns) {\n    return data;\n  }\n  if (!options.mappings) {\n    return null;\n  }\n  if (Array.isArray(data) && data.length === 0) {\n    return data;\n  }\n  const transformations = [];\n  transformations.push((from, to) => to.id = from.id);\n  function isOptional(col) {\n    var _a, _b;\n    return Boolean(!((_a = options.columns) == null ? void 0 : _a.includes(col)) && ((_b = options.columns) == null ? void 0 : _b.find((c) => typeof c === \"object\" && (c == null ? void 0 : c.name) === col && c.optional)));\n  }\n  for (const widgetCol of Object.keys(options.mappings).sort()) {\n    const gristCol = options.mappings[widgetCol];\n    if (Array.isArray(gristCol) && gristCol.length) {\n      if (!options.reverse) {\n        transformations.push((from, to) => {\n          to[widgetCol] = gristCol.map((col) => from[col]);\n        });\n      } else {\n        transformations.push((from, to) => {\n          var _a;\n          for (const [idx, col] of gristCol.entries()) {\n            to[col] = (_a = from[widgetCol]) == null ? void 0 : _a[idx];\n          }\n        });\n      }\n    } else if (!Array.isArray(gristCol) && gristCol) {\n      if (!options.reverse) {\n        transformations.push((from, to) => to[widgetCol] = from[gristCol]);\n      } else {\n        transformations.push((from, to) => to[gristCol] = from[widgetCol]);\n      }\n    } else if (!isOptional(widgetCol)) {\n      return null;\n    }\n  }\n  const convert = (rec) => transformations.reduce((obj, tran) => {\n    tran(rec, obj);\n    return obj;\n  }, {});\n  return Array.isArray(data) ? data.map(convert) : convert(data);\n}\nfunction mapColumnNamesBack(data, options) {\n  return mapColumnNames(data, __spreadProps(__spreadValues({}, options), { reverse: true }));\n}\nfunction onRecord(callback) {\n  on(\"message\", async function(msg) {\n    if (!msg.tableId || !msg.rowId || msg.rowId === \"new\") {\n      return;\n    }\n    const rec = await docApi.fetchSelectedRecord(msg.rowId);\n    callback(rec, await getMappingsIfChanged(msg));\n  });\n}\nfunction onNewRecord(callback) {\n  on(\"message\", async function(msg) {\n    if (msg.tableId && msg.rowId === \"new\") {\n      callback(await getMappingsIfChanged(msg));\n    }\n  });\n}\nfunction onRecords(callback) {\n  on(\"message\", async function(msg) {\n    if (!msg.tableId || !msg.dataChange) {\n      return;\n    }\n    const data = await docApi.fetchSelectedTable();\n    if (!data.id) {\n      return;\n    }\n    const rows = [];\n    for (let i = 0; i < data.id.length; i++) {\n      const row = { id: data.id[i] };\n      for (const key of Object.keys(data)) {\n        row[key] = data[key][i];\n      }\n      rows.push(row);\n    }\n    callback(rows, await getMappingsIfChanged(msg));\n  });\n}\nfunction onOptions(callback) {\n  on(\"message\", async function(msg) {\n    if (msg.settings) {\n      callback(msg.options || null, msg.settings);\n    }\n  });\n}\nasync function addImporter(name, path, mode, options) {\n  rpc.registerImpl(name, {\n    async getImportSource(target) {\n      const procId = await api.render(path, mode === \"inline\" ? target : \"fullscreen\", options);\n      try {\n        const stubName = `${name}@${path}`;\n        return await rpc.getStub(stubName).getImportSource();\n      } finally {\n        await api.dispose(procId);\n      }\n    }\n  });\n}\nfunction ready(settings) {\n  if (_readyCalled) {\n    return;\n  }\n  _readyCalled = true;\n  if (settings && settings.onEditOptions) {\n    rpc.registerFunc(\"editOptions\", settings.onEditOptions);\n  }\n  on(\"message\", async function(msg) {\n    if (msg.tableId && msg.tableId !== _tableId) {\n      if (!_tableId) {\n        _setInitialized();\n      }\n      _tableId = msg.tableId;\n    }\n  });\n  rpc.processIncoming();\n  void async function() {\n    await rpc.sendReadyMessage();\n    if (settings) {\n      const options = __spreadProps(__spreadValues({}, settings), {\n        hasCustomOptions: Boolean(settings.onEditOptions)\n      });\n      delete options.onEditOptions;\n      _columnsToMap = options.columns;\n      await sectionApi.configure(options).catch((err) => console.error(err));\n    }\n  }();\n}\nfunction getPluginPath(location) {\n  return location.pathname.replace(/^\\/plugins\\//, \"\");\n}\nif (typeof window !== \"undefined\") {\n  const preloadWindow = window;\n  if (preloadWindow.isRunningUnderElectron) {\n    rpc.setSendMessage((msg) => preloadWindow.sendToHost(msg));\n    preloadWindow.onGristMessage((data) => rpc.receiveMessage(data));\n  } else {\n    rpc.setSendMessage((msg) => window.parent.postMessage(msg, \"*\"));\n    window.onmessage = (e) => rpc.receiveMessage(e.data);\n  }\n  rpc.registerFunc(\"print\", () => window.print());\n} else if (typeof process === \"undefined\") {\n  self.onmessage = (e) => rpc.receiveMessage(e.data);\n  rpc.setSendMessage((mssg) => self.postMessage(mssg));\n} else if (typeof process.send !== \"undefined\") {\n  rpc.setSendMessage((data) => {\n    process.send(data);\n  });\n  process.on(\"message\", (data) => rpc.receiveMessage(data));\n  process.on(\"disconnect\", () => {\n    process.exit(0);\n  });\n} else {\n  rpc.setSendMessage((data) => {\n    return;\n  });\n}\nfunction createRpcLogger() {\n  let prefix;\n  if (typeof window !== \"undefined\") {\n    prefix = `PLUGIN VIEW ${getPluginPath(window.location)}:`;\n  } else if (typeof process === \"undefined\") {\n    prefix = `PLUGIN VIEW ${getPluginPath(self.location)}:`;\n  } else if (typeof process.send !== \"undefined\") {\n    prefix = `PLUGIN NODE ${process.env.GRIST_PLUGIN_PATH || \"<unset-plugin-id>\"}:`;\n  } else {\n    return {};\n  }\n  return {\n    info(msg) {\n      console.log(\"%s %s\", prefix, msg);\n    },\n    warn(msg) {\n      console.warn(\"%s %s\", prefix, msg);\n    }\n  };\n}\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/grist-plugin-api.ts?");

/***/ }),

/***/ "./core/app/plugin/gutil.ts":
/*!**********************************!*\
  !*** ./core/app/plugin/gutil.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrayRepeat\": () => (/* binding */ arrayRepeat)\n/* harmony export */ });\nconst constant = __webpack_require__(/*! lodash/constant */ \"./node_modules/lodash/constant.js\");\nconst times = __webpack_require__(/*! lodash/times */ \"./node_modules/lodash/times.js\");\nfunction arrayRepeat(count, value) {\n  return times(count, constant(value));\n}\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/gutil.ts?");

/***/ }),

/***/ "./core/app/plugin/objtypes.ts":
/*!*************************************!*\
  !*** ./core/app/plugin/objtypes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CensoredValue\": () => (/* binding */ CensoredValue),\n/* harmony export */   \"GristDate\": () => (/* binding */ GristDate),\n/* harmony export */   \"GristDateTime\": () => (/* binding */ GristDateTime),\n/* harmony export */   \"PENDING_DATA_PLACEHOLDER\": () => (/* binding */ PENDING_DATA_PLACEHOLDER),\n/* harmony export */   \"PendingValue\": () => (/* binding */ PendingValue),\n/* harmony export */   \"RaisedException\": () => (/* binding */ RaisedException),\n/* harmony export */   \"Reference\": () => (/* binding */ Reference),\n/* harmony export */   \"ReferenceList\": () => (/* binding */ ReferenceList),\n/* harmony export */   \"SkipValue\": () => (/* binding */ SkipValue),\n/* harmony export */   \"UnknownValue\": () => (/* binding */ UnknownValue),\n/* harmony export */   \"decodeObject\": () => (/* binding */ decodeObject),\n/* harmony export */   \"encodeObject\": () => (/* binding */ encodeObject),\n/* harmony export */   \"mapValues\": () => (/* binding */ mapValues)\n/* harmony export */ });\n/* harmony import */ var _GristData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GristData */ \"./core/app/plugin/GristData.ts\");\n\nconst isPlainObject = __webpack_require__(/*! lodash/isPlainObject */ \"./node_modules/lodash/isPlainObject.js\");\nconst PENDING_DATA_PLACEHOLDER = \"Loading...\";\nclass GristDate extends Date {\n  static fromGristValue(epochSec) {\n    return new GristDate(epochSec * 1e3);\n  }\n  toString() {\n    return this.toISOString().slice(0, 10);\n  }\n}\nclass GristDateTime extends Date {\n  static fromGristValue(epochSec, timezone) {\n    return Object.assign(new GristDateTime(epochSec * 1e3), { timezone });\n  }\n  toString() {\n    return this.toISOString();\n  }\n}\nclass Reference {\n  constructor(tableId, rowId) {\n    this.tableId = tableId;\n    this.rowId = rowId;\n  }\n  toString() {\n    return `${this.tableId}[${this.rowId}]`;\n  }\n}\nclass ReferenceList {\n  constructor(tableId, rowIds) {\n    this.tableId = tableId;\n    this.rowIds = rowIds;\n  }\n  toString() {\n    return `${this.tableId}[[${this.rowIds}]]`;\n  }\n}\nclass RaisedException {\n  constructor(list) {\n    var _a;\n    if (!list.length) {\n      throw new Error(\"RaisedException requires a name as first element\");\n    }\n    list = [...list];\n    this.name = list.shift();\n    this.message = list.shift();\n    this.details = list.shift();\n    this.user_input = (_a = list.shift()) == null ? void 0 : _a.u;\n  }\n  toString() {\n    switch (this.name) {\n      case \"ZeroDivisionError\":\n        return \"#DIV/0!\";\n      case \"UnmarshallableError\":\n        return this.details || \"#\" + this.name;\n      case \"InvalidTypedValue\":\n        return `#Invalid ${this.message}: ${this.details}`;\n    }\n    return \"#\" + this.name;\n  }\n}\nclass UnknownValue {\n  constructor(value) {\n    this.value = value;\n  }\n  static safeRepr(value) {\n    try {\n      return String(value);\n    } catch (e) {\n      return `<${typeof value}>`;\n    }\n  }\n  toString() {\n    return String(this.value);\n  }\n}\nclass PendingValue {\n  toString() {\n    return PENDING_DATA_PLACEHOLDER;\n  }\n}\nclass SkipValue {\n  toString() {\n    return \"...\";\n  }\n}\nclass CensoredValue {\n  toString() {\n    return \"CENSORED\";\n  }\n}\nfunction encodeObject(value) {\n  try {\n    switch (typeof value) {\n      case \"string\":\n      case \"number\":\n      case \"boolean\":\n        return value;\n    }\n    if (value == null) {\n      return null;\n    } else if (value instanceof Reference) {\n      return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.Reference, value.tableId, value.rowId];\n    } else if (value instanceof ReferenceList) {\n      return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.ReferenceList, value.tableId, value.rowIds];\n    } else if (value instanceof Date) {\n      const timestamp = value.valueOf() / 1e3;\n      if (\"timezone\" in value) {\n        return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.DateTime, timestamp, value.timezone];\n      } else {\n        return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.DateTime, timestamp, \"UTC\"];\n      }\n    } else if (value instanceof CensoredValue) {\n      return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.Censored];\n    } else if (value instanceof RaisedException) {\n      return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.Exception, value.name, value.message, value.details];\n    } else if (Array.isArray(value)) {\n      return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.List, ...value.map(encodeObject)];\n    } else if (isPlainObject(value)) {\n      return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.Dict, mapValues(value, encodeObject, { sort: true })];\n    }\n  } catch (e) {\n  }\n  return [_GristData__WEBPACK_IMPORTED_MODULE_0__.GristObjCode.Unmarshallable, UnknownValue.safeRepr(value)];\n}\nfunction decodeObject(value) {\n  if (!Array.isArray(value)) {\n    return value;\n  }\n  const code = value[0];\n  const args = value.slice(1);\n  let err;\n  try {\n    switch (code) {\n      case \"D\":\n        return GristDateTime.fromGristValue(args[0], String(args[1]));\n      case \"d\":\n        return GristDate.fromGristValue(args[0]);\n      case \"E\":\n        return new RaisedException(args);\n      case \"L\":\n        return args.map(decodeObject);\n      case \"O\":\n        return mapValues(args[0], decodeObject, { sort: true });\n      case \"P\":\n        return new PendingValue();\n      case \"r\":\n        return new ReferenceList(String(args[0]), args[1]);\n      case \"R\":\n        return new Reference(String(args[0]), args[1]);\n      case \"S\":\n        return new SkipValue();\n      case \"C\":\n        return new CensoredValue();\n      case \"U\":\n        return new UnknownValue(args[0]);\n    }\n  } catch (e) {\n    err = e;\n  }\n  return new UnknownValue(`${code}(${JSON.stringify(args).slice(1, -1)})` + (err ? `#${err.name}(${err.message})` : \"\"));\n}\nfunction mapValues(sourceObj, mapper, options = {}) {\n  const result = {};\n  const keys = Object.keys(sourceObj);\n  if (options.sort) {\n    keys.sort();\n  }\n  for (const key of keys) {\n    result[key] = mapper(sourceObj[key]);\n  }\n  return result;\n}\n\n\n//# sourceURL=webpack://grist/./core/app/plugin/objtypes.ts?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\nfunction EventEmitter() {\n  this._events = this._events || {};\n  this._maxListeners = this._maxListeners || undefined;\n}\nmodule.exports = EventEmitter;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nEventEmitter.defaultMaxListeners = 10;\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function(n) {\n  if (!isNumber(n) || n < 0 || isNaN(n))\n    throw TypeError('n must be a positive number');\n  this._maxListeners = n;\n  return this;\n};\n\nEventEmitter.prototype.emit = function(type) {\n  var er, handler, len, args, i, listeners;\n\n  if (!this._events)\n    this._events = {};\n\n  // If there is no 'error' event listener then throw.\n  if (type === 'error') {\n    if (!this._events.error ||\n        (isObject(this._events.error) && !this._events.error.length)) {\n      er = arguments[1];\n      if (er instanceof Error) {\n        throw er; // Unhandled 'error' event\n      } else {\n        // At least give some kind of context to the user\n        var err = new Error('Uncaught, unspecified \"error\" event. (' + er + ')');\n        err.context = er;\n        throw err;\n      }\n    }\n  }\n\n  handler = this._events[type];\n\n  if (isUndefined(handler))\n    return false;\n\n  if (isFunction(handler)) {\n    switch (arguments.length) {\n      // fast cases\n      case 1:\n        handler.call(this);\n        break;\n      case 2:\n        handler.call(this, arguments[1]);\n        break;\n      case 3:\n        handler.call(this, arguments[1], arguments[2]);\n        break;\n      // slower\n      default:\n        args = Array.prototype.slice.call(arguments, 1);\n        handler.apply(this, args);\n    }\n  } else if (isObject(handler)) {\n    args = Array.prototype.slice.call(arguments, 1);\n    listeners = handler.slice();\n    len = listeners.length;\n    for (i = 0; i < len; i++)\n      listeners[i].apply(this, args);\n  }\n\n  return true;\n};\n\nEventEmitter.prototype.addListener = function(type, listener) {\n  var m;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events)\n    this._events = {};\n\n  // To avoid recursion in the case that type === \"newListener\"! Before\n  // adding it to the listeners, first emit \"newListener\".\n  if (this._events.newListener)\n    this.emit('newListener', type,\n              isFunction(listener.listener) ?\n              listener.listener : listener);\n\n  if (!this._events[type])\n    // Optimize the case of one listener. Don't need the extra array object.\n    this._events[type] = listener;\n  else if (isObject(this._events[type]))\n    // If we've already got an array, just append.\n    this._events[type].push(listener);\n  else\n    // Adding the second element, need to change to array.\n    this._events[type] = [this._events[type], listener];\n\n  // Check for listener leak\n  if (isObject(this._events[type]) && !this._events[type].warned) {\n    if (!isUndefined(this._maxListeners)) {\n      m = this._maxListeners;\n    } else {\n      m = EventEmitter.defaultMaxListeners;\n    }\n\n    if (m && m > 0 && this._events[type].length > m) {\n      this._events[type].warned = true;\n      console.error('(node) warning: possible EventEmitter memory ' +\n                    'leak detected. %d listeners added. ' +\n                    'Use emitter.setMaxListeners() to increase limit.',\n                    this._events[type].length);\n      if (typeof console.trace === 'function') {\n        // not supported in IE 10\n        console.trace();\n      }\n    }\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.once = function(type, listener) {\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  var fired = false;\n\n  function g() {\n    this.removeListener(type, g);\n\n    if (!fired) {\n      fired = true;\n      listener.apply(this, arguments);\n    }\n  }\n\n  g.listener = listener;\n  this.on(type, g);\n\n  return this;\n};\n\n// emits a 'removeListener' event iff the listener was removed\nEventEmitter.prototype.removeListener = function(type, listener) {\n  var list, position, length, i;\n\n  if (!isFunction(listener))\n    throw TypeError('listener must be a function');\n\n  if (!this._events || !this._events[type])\n    return this;\n\n  list = this._events[type];\n  length = list.length;\n  position = -1;\n\n  if (list === listener ||\n      (isFunction(list.listener) && list.listener === listener)) {\n    delete this._events[type];\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n\n  } else if (isObject(list)) {\n    for (i = length; i-- > 0;) {\n      if (list[i] === listener ||\n          (list[i].listener && list[i].listener === listener)) {\n        position = i;\n        break;\n      }\n    }\n\n    if (position < 0)\n      return this;\n\n    if (list.length === 1) {\n      list.length = 0;\n      delete this._events[type];\n    } else {\n      list.splice(position, 1);\n    }\n\n    if (this._events.removeListener)\n      this.emit('removeListener', type, listener);\n  }\n\n  return this;\n};\n\nEventEmitter.prototype.removeAllListeners = function(type) {\n  var key, listeners;\n\n  if (!this._events)\n    return this;\n\n  // not listening for removeListener, no need to emit\n  if (!this._events.removeListener) {\n    if (arguments.length === 0)\n      this._events = {};\n    else if (this._events[type])\n      delete this._events[type];\n    return this;\n  }\n\n  // emit removeListener for all listeners on all events\n  if (arguments.length === 0) {\n    for (key in this._events) {\n      if (key === 'removeListener') continue;\n      this.removeAllListeners(key);\n    }\n    this.removeAllListeners('removeListener');\n    this._events = {};\n    return this;\n  }\n\n  listeners = this._events[type];\n\n  if (isFunction(listeners)) {\n    this.removeListener(type, listeners);\n  } else if (listeners) {\n    // LIFO order\n    while (listeners.length)\n      this.removeListener(type, listeners[listeners.length - 1]);\n  }\n  delete this._events[type];\n\n  return this;\n};\n\nEventEmitter.prototype.listeners = function(type) {\n  var ret;\n  if (!this._events || !this._events[type])\n    ret = [];\n  else if (isFunction(this._events[type]))\n    ret = [this._events[type]];\n  else\n    ret = this._events[type].slice();\n  return ret;\n};\n\nEventEmitter.prototype.listenerCount = function(type) {\n  if (this._events) {\n    var evlistener = this._events[type];\n\n    if (isFunction(evlistener))\n      return 1;\n    else if (evlistener)\n      return evlistener.length;\n  }\n  return 0;\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  return emitter.listenerCount(type);\n};\n\nfunction isFunction(arg) {\n  return typeof arg === 'function';\n}\n\nfunction isNumber(arg) {\n  return typeof arg === 'number';\n}\n\nfunction isObject(arg) {\n  return typeof arg === 'object' && arg !== null;\n}\n\nfunction isUndefined(arg) {\n  return arg === void 0;\n}\n\n\n//# sourceURL=webpack://grist/./node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/grain-rpc/dist/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/grain-rpc/dist/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nfunction __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n}\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__export(__webpack_require__(/*! ./message */ \"./node_modules/grain-rpc/dist/lib/message.js\"));\n__export(__webpack_require__(/*! ./rpc */ \"./node_modules/grain-rpc/dist/lib/rpc.js\"));\n\n\n//# sourceURL=webpack://grist/./node_modules/grain-rpc/dist/lib/index.js?");

/***/ }),

/***/ "./node_modules/grain-rpc/dist/lib/message.js":
/*!****************************************************!*\
  !*** ./node_modules/grain-rpc/dist/lib/message.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n/**\n * This defines the message types sent over an RpcChannel.\n *\n * WARNING: Any changes to these must be backward-compatible, since Rpc may be used across\n * different versions of this library. Specifically, enums must not be renumbered, fields renamed,\n * or their types changed. Really, the only reasonable enhancement is adding a new optional field.\n */\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar MsgType;\n(function (MsgType) {\n    // Warning: Do NOT renumber enums (see warning above).\n    MsgType[MsgType[\"RpcCall\"] = 1] = \"RpcCall\";\n    MsgType[MsgType[\"RpcRespData\"] = 2] = \"RpcRespData\";\n    MsgType[MsgType[\"RpcRespErr\"] = 3] = \"RpcRespErr\";\n    MsgType[MsgType[\"Custom\"] = 4] = \"Custom\";\n    MsgType[MsgType[\"Ready\"] = 5] = \"Ready\";\n})(MsgType = exports.MsgType || (exports.MsgType = {}));\n\n\n//# sourceURL=webpack://grist/./node_modules/grain-rpc/dist/lib/message.js?");

/***/ }),

/***/ "./node_modules/grain-rpc/dist/lib/rpc.js":
/*!************************************************!*\
  !*** ./node_modules/grain-rpc/dist/lib/rpc.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n/**\n * Rpc implements an remote-procedure-call interface on top of a simple messaging interface.\n *\n * The user must provide the messaging between two endpoints, and in return gets the ability to\n * register interfaces or functions at either endpoint, and call them from the other side. For\n * messaging, the user must supply a sendMessage() function to send messages to the other side,\n * and must call rpc.receiveMessage(msg) whenever a message is received.\n *\n * E.g.\n *    rpc.registerImpl<MyInterface>(\"some-name\", new MyInterfaceImpl(), descMyInterfaceImpl);\n *    rpc.getStub<MyInterface>(\"some-name\", descMyInterfaceImpl)\n *          => returns a stub implemeting MyInterface\n *\n * Calls to the generated stub get turned into messages across the channel, and then call to the\n * implementation object registered on the other side. Both return values and exceptions get\n * passed back over the channel, and cause the promise from the stub to be resolved or rejected.\n *\n * Note that the stub interface returns Promises for all methods.\n *\n * Rpc library supports ts-interface-checker descriptors for the interfaces, to allow validation.\n * You may skip it by passing in `rpc.unchecked` where a descriptor is expected; it will skip\n * checks and you will not get descriptive errors.\n *\n * The string name used to register and use an implementation allows for the same Rpc object to be\n * used to expose multiple interfaces, or different implementations of the same interface.\n *\n * Messaging\n * ---------\n * Rpc also supports a messaging interface, with postMessage() to send arbitrary messages, and an\n * EventEmitter interface for \"message\" events to receive them, e.g. on(\"message\", ...). So if you\n * need to multiplex non-Rpc messages over the same channel, Rpc class does it for you.\n *\n * Cleanup\n * -------\n * If the channel is closed or had an error, and will no longer be used, the user of Rpc must\n * call rpc.close() to reject any calls waiting for an answer.\n *\n * If a particular stub for a remote API is no longer needed, user may call rpc.discardStub(stub)\n * to reject any pending calls made to that stub.\n *\n * Timeouts\n * --------\n * TODO (Not yet implementd.)\n * You may call rpc.setTimeout(ms) or rpc.setStubTimeout(stub, ms) to set a call timeout for all\n * stubs or for a particular one. If a response to a call does not arrive within the timeout, the\n * call gets rejected, and the rejection Error will have a \"code\" property set to \"TIMEOUT\".\n *\n * Forwarding\n * ----------\n * Rpc.registerForwarder() along with methods with \"-Forward\" suffix allow one Rpc object to forward\n * calls and messages to another Rpc object. The intended usage is when Rpc connects A to B, and B\n * to C. Then B can use registerForwarder to expose A's interfaces to C (or C's to A) without having\n * to know what exactly they are. A default forwarder can be registered using the '*' name.\n *\n *\n * Instead of using getStubForward and callRemoteFuncForward, the forwarder name can be\n * appended to the interface name as \"interfaceName@forwarderName\" and the regular\n * getStub and callRemoteFunc methods can be used.  For example:\n *   getStub(\"iface@forwarder\")\n * is the same as:\n *   getStubForward(\"forwarder\", \"iface\")\n *\n *\n * E.g. with A.registerImpl(\"A-name\", ...) and B.registerForwarder(\"b2a\", A), we may now call\n * C.getStubForward(\"b2a\", \"A-name\") to get a stub that will forward calls to A, as well as\n * C.postMessageForward(\"b2a\", msg) to have the message received by A.\n *\n * TODO We may want to support progress callbacks, perhaps by supporting arbitrary callbacks as\n * parameters. (Could be implemented by allowing \"meth\" to be [reqId, paramPath]) It would be nice\n * to allow the channel to report progress too, e.g. to report progress of uploading large files.\n *\n * TODO Sending of large files should probably be a separate feature, to allow for channel\n * implementations to stream them.\n */\nconst events_1 = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\nconst tic = __webpack_require__(/*! ts-interface-checker */ \"./node_modules/ts-interface-checker/dist/index.js\");\nconst message_1 = __webpack_require__(/*! ./message */ \"./node_modules/grain-rpc/dist/lib/message.js\");\nconst plainCall = (callFunc) => callFunc();\nclass Rpc extends events_1.EventEmitter {\n    /**\n     * To use Rpc, you must provide a sendMessage function that sends a message to the other side;\n     * it may be given in the constructor, or later with setSendMessage. You must also call\n     * receiveMessage() for every message received from the other side.\n     */\n    constructor(options = {}) {\n        super();\n        // Note the invariant: _inactiveSendQueue == null iff (_sendMessageCB != null && !_waitForReadyMessage)\n        this._sendMessageCB = null;\n        this._inactiveRecvQueue = null; // queue of received message\n        this._inactiveSendQueue = null; // queue of messages to be sent\n        this._waitForReadyMessage = false;\n        this._implMap = new Map();\n        this._forwarders = new Map();\n        this._pendingCalls = new Map();\n        this._nextRequestId = 1;\n        const { logger = console, sendMessage = null, callWrapper = plainCall } = options;\n        this._logger = logger;\n        this._callWrapper = callWrapper;\n        this.setSendMessage(sendMessage);\n    }\n    /**\n     * To use Rpc, call this for every message received from the other side of the channel.\n     */\n    receiveMessage(msg) {\n        if (this._inactiveRecvQueue) {\n            this._inactiveRecvQueue.push(msg);\n        }\n        else {\n            this._dispatch(msg);\n        }\n    }\n    /**\n     * If you've set up calls to receiveMessage(), but need time to call registerImpl() before\n     * processing new messages, you may use queueIncoming(), make the registerImpl() calls,\n     * and then call processIncoming() to handle queued messages and resume normal processing.\n     */\n    queueIncoming() {\n        if (!this._inactiveRecvQueue) {\n            this._inactiveRecvQueue = [];\n        }\n    }\n    /**\n     * Process received messages queued since queueIncoming, and resume normal processing of\n     * received messages.\n     */\n    processIncoming() {\n        if (this._inactiveRecvQueue) {\n            processQueue(this._inactiveRecvQueue, this._dispatch.bind(this));\n            this._inactiveRecvQueue = null;\n        }\n    }\n    /**\n     * Set the callback to send messages. If set to null, sent messages will be queued. If you\n     * disconnect and want for sent messages to throw, set a callback that throws.\n     */\n    setSendMessage(sendMessage) {\n        this._sendMessageCB = sendMessage;\n        if (this._sendMessageCB) {\n            this._processOutgoing();\n        }\n        else {\n            this._queueOutgoing();\n        }\n    }\n    /**\n     * If your peer may not be listening yet to your messages, you may call this to queue outgoing\n     * messages until receiving a \"ready\" message from the peer. I.e. one peer may call\n     * queueOutgoingUntilReadyMessage() while the other calls sendReadyMessage().\n     */\n    queueOutgoingUntilReadyMessage() {\n        this._waitForReadyMessage = true;\n        this._queueOutgoing();\n    }\n    /**\n     * If your peer is using queueOutgoingUntilReadyMessage(), you should let it know that you are\n     * ready using sendReadyMessage() as soon as you've set up the processing of received messages.\n     * Note that at most one peer may use queueOutgoingUntilReadyMessage(), or they will deadlock.\n     */\n    sendReadyMessage() {\n        return this._sendMessage({ mtype: message_1.MsgType.Ready });\n    }\n    /**\n     * Messaging interface: send data to the other side, to be emitted there as a \"message\" event.\n     */\n    postMessage(data) { return this.postMessageForward(\"\", data); }\n    postMessageForward(fwdDest, data) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const msg = { mtype: message_1.MsgType.Custom, data };\n            if (fwdDest) {\n                msg.mdest = fwdDest;\n            }\n            yield this._sendMessage(msg);\n        });\n    }\n    registerImpl(name, impl, checker) {\n        if (this._implMap.has(name)) {\n            throw new Error(`Rpc.registerImpl has already been called for ${name}`);\n        }\n        const invokeImpl = (call) => impl[call.meth](...call.args);\n        if (!checker) {\n            this._implMap.set(name, { name, invokeImpl, argsCheckers: null });\n        }\n        else {\n            const ttype = checker.getType();\n            if (!(ttype instanceof tic.TIface)) {\n                throw new Error(\"Rpc.registerImpl requires a Checker for an interface\");\n            }\n            const argsCheckers = {};\n            for (const prop of ttype.props) {\n                if (prop.ttype instanceof tic.TFunc) {\n                    argsCheckers[prop.name] = checker.methodArgs(prop.name);\n                }\n            }\n            this._implMap.set(name, { name, invokeImpl, argsCheckers });\n        }\n    }\n    registerForwarder(fwdName, dest, fwdDest = (fwdName === \"*\" ? \"*\" : \"\")) {\n        const passThru = fwdDest === \"*\";\n        this._forwarders.set(fwdName, {\n            name: \"[FWD]\" + fwdName,\n            argsCheckers: null,\n            invokeImpl: (c) => dest.forwardCall(Object.assign({}, c, { mdest: passThru ? c.mdest : fwdDest })),\n            forwardMessage: (msg) => dest.forwardMessage(Object.assign({}, msg, { mdest: passThru ? msg.mdest : fwdDest })),\n        });\n    }\n    unregisterForwarder(fwdName) {\n        this._forwarders.delete(fwdName);\n    }\n    /**\n     * Unregister an implementation, if one was registered with this name.\n     */\n    unregisterImpl(name) {\n        this._implMap.delete(name);\n    }\n    getStub(name, checker) {\n        const parts = this._parseName(name);\n        return this.getStubForward(parts.forwarder, parts.name, checker);\n    }\n    getStubForward(fwdDest, name, checker) {\n        if (!checker) {\n            // TODO Test, then explain how this works.\n            return new Proxy({}, {\n                get: (target, property, receiver) => {\n                    if (property === \"then\") {\n                        // By default, take care not to look \"thenable\", so that the stub can be returned\n                        // as a value of a Promise:\n                        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve\n                        // If user really wants to proxy \"then\", they can write a checker.\n                        return undefined;\n                    }\n                    return (...args) => this._makeCall(name, property, args, anyChecker, fwdDest);\n                },\n            });\n        }\n        else {\n            const ttype = checker.getType();\n            if (!(ttype instanceof tic.TIface)) {\n                throw new Error(\"Rpc.getStub requires a Checker for an interface\");\n            }\n            const api = {};\n            for (const prop of ttype.props) {\n                if (prop.ttype instanceof tic.TFunc) {\n                    const resultChecker = checker.methodResult(prop.name);\n                    api[prop.name] = (...args) => this._makeCall(name, prop.name, args, resultChecker, fwdDest);\n                }\n            }\n            return api;\n        }\n    }\n    /**\n     * Simple way to registers a function under a given name, with no argument checking.\n     */\n    registerFunc(name, impl) {\n        return this.registerImpl(name, { invoke: impl }, checkerAnyFunc);\n    }\n    /**\n     * Unregister a function, if one was registered with this name.\n     */\n    unregisterFunc(name) {\n        return this.unregisterImpl(name);\n    }\n    /**\n     * Call a remote function registered with registerFunc. Does no type checking.\n     */\n    callRemoteFunc(name, ...args) {\n        const parts = this._parseName(name);\n        return this.callRemoteFuncForward(parts.forwarder, parts.name, ...args);\n    }\n    callRemoteFuncForward(fwdDest, name, ...args) {\n        return this._makeCall(name, \"invoke\", args, anyChecker, fwdDest);\n    }\n    forwardCall(c) {\n        return this._makeCall(c.iface, c.meth, c.args, anyChecker, c.mdest || \"\");\n    }\n    forwardMessage(msg) {\n        return this.postMessageForward(msg.mdest || \"\", msg.data);\n    }\n    // Mark outgoing messages for queueing.\n    _queueOutgoing() {\n        if (!this._inactiveSendQueue) {\n            this._inactiveSendQueue = [];\n        }\n    }\n    // If sendMessageCB is set and we are no longer waiting for a ready message, send out any\n    // queued outgoing messages and resume normal sending.\n    _processOutgoing() {\n        if (this._inactiveSendQueue && this._sendMessageCB && !this._waitForReadyMessage) {\n            processQueue(this._inactiveSendQueue, this._sendMessageOrReject.bind(this, this._sendMessageCB));\n            this._inactiveSendQueue = null;\n        }\n    }\n    _sendMessage(msg) {\n        if (this._inactiveSendQueue) {\n            this._inactiveSendQueue.push(msg);\n        }\n        else {\n            return this._sendMessageOrReject(this._sendMessageCB, msg);\n        }\n    }\n    // This helper calls calls sendMessage(msg), and if that call fails, rejects the call\n    // represented by msg (when it's of type RpcCall).\n    _sendMessageOrReject(sendMessage, msg) {\n        if (this._logger.info) {\n            const desc = (msg.mtype === message_1.MsgType.RpcCall) ? \": \" + this._callDesc(msg) : \"\";\n            this._logger.info(`Rpc sending ${message_1.MsgType[msg.mtype]}${desc}`);\n        }\n        return catchMaybePromise(() => sendMessage(msg), (err) => this._sendReject(msg, err));\n    }\n    // Rejects a RpcCall due to the given send error; this helper always re-throws.\n    _sendReject(msg, err) {\n        const newErr = new ErrorWithCode(\"RPC_SEND_FAILED\", `Send failed: ${err.message}`);\n        if (msg.mtype === message_1.MsgType.RpcCall && msg.reqId !== undefined) {\n            const callObj = this._pendingCalls.get(msg.reqId);\n            if (callObj) {\n                this._pendingCalls.delete(msg.reqId);\n                callObj.reject(newErr);\n            }\n        }\n        this.emit(\"error\", newErr);\n        throw newErr;\n    }\n    _makeCallRaw(iface, meth, args, resultChecker, fwdDest) {\n        return new Promise((resolve, reject) => {\n            const reqId = this._nextRequestId++;\n            const callObj = { reqId, iface, meth, resolve, reject, resultChecker };\n            this._pendingCalls.set(reqId, callObj);\n            // Send the Call message. If the sending fails, reject the _makeCall promise. If it\n            // succeeds, we save {resolve,reject} to resolve _makeCall when we get back a response.\n            this._info(callObj, \"RPC_CALLING\");\n            const msg = { mtype: message_1.MsgType.RpcCall, reqId, iface, meth, args };\n            if (fwdDest) {\n                msg.mdest = fwdDest;\n            }\n            // If _sendMessage fails, reject, allowing it to throw synchronously or not.\n            catchMaybePromise(() => this._sendMessage(msg), reject);\n        });\n    }\n    _makeCall(iface, meth, args, resultChecker, fwdDest) {\n        return this._callWrapper(() => this._makeCallRaw(iface, meth, args, resultChecker, fwdDest));\n    }\n    _dispatch(msg) {\n        switch (msg.mtype) {\n            case message_1.MsgType.RpcCall: {\n                this._onMessageCall(msg);\n                return;\n            }\n            case message_1.MsgType.RpcRespData:\n            case message_1.MsgType.RpcRespErr: {\n                this._onMessageResp(msg);\n                return;\n            }\n            case message_1.MsgType.Custom: {\n                this._onCustomMessage(msg);\n                return;\n            }\n            case message_1.MsgType.Ready: {\n                this._waitForReadyMessage = false;\n                try {\n                    this._processOutgoing();\n                }\n                catch (e) { /* swallowing error, an event 'error' was already emitted */ }\n                return;\n            }\n        }\n    }\n    _onCustomMessage(msg) {\n        if (msg.mdest) {\n            const impl = this._forwarders.get(msg.mdest) || this._forwarders.get(\"*\");\n            if (!impl) {\n                this._warn(null, \"RPC_UNKNOWN_FORWARD_DEST\", `Unknown forward destination: ${msg.mdest}`);\n            }\n            else {\n                impl.forwardMessage(msg);\n            }\n        }\n        else {\n            this.emit(\"message\", msg.data);\n        }\n    }\n    _onMessageCall(call) {\n        return __awaiter(this, void 0, void 0, function* () {\n            let impl;\n            if (call.mdest) {\n                impl = this._forwarders.get(call.mdest) || this._forwarders.get(\"*\");\n                if (!impl) {\n                    return this._failCall(call, \"RPC_UNKNOWN_FORWARD_DEST\", `Unknown forward destination: ${call.mdest}`);\n                }\n            }\n            else {\n                impl = this._implMap.get(call.iface);\n                if (!impl) {\n                    return this._failCall(call, \"RPC_UNKNOWN_INTERFACE\", \"Unknown interface\");\n                }\n            }\n            if (!impl.argsCheckers) {\n                // No call or argument checking.\n            }\n            else {\n                // Check the method name and argument types.\n                if (!impl.argsCheckers.hasOwnProperty(call.meth)) {\n                    return this._failCall(call, \"RPC_UNKNOWN_METHOD\", \"Unknown method\");\n                }\n                const argsChecker = impl.argsCheckers[call.meth];\n                try {\n                    argsChecker.check(call.args);\n                }\n                catch (e) {\n                    return this._failCall(call, \"RPC_INVALID_ARGS\", `Invalid args: ${e.message}`);\n                }\n            }\n            if (call.reqId === undefined) {\n                return this._failCall(call, \"RPC_MISSING_REQID\", \"Missing request id\");\n            }\n            this._info(call, \"RPC_ONCALL\");\n            let result;\n            try {\n                result = yield impl.invokeImpl(call);\n            }\n            catch (e) {\n                return this._failCall(call, e.code, e.message, \"RPC_ONCALL_ERROR\");\n            }\n            this._info(call, \"RPC_ONCALL_OK\");\n            return this._sendResponse(call.reqId, result);\n        });\n    }\n    _failCall(call, code, mesg, reportCode) {\n        return __awaiter(this, void 0, void 0, function* () {\n            this._warn(call, reportCode || code, mesg);\n            if (call.reqId !== undefined) {\n                const msg = { mtype: message_1.MsgType.RpcRespErr, reqId: call.reqId, mesg, code };\n                yield this._sendMessage(msg);\n            }\n        });\n    }\n    _sendResponse(reqId, data) {\n        return __awaiter(this, void 0, void 0, function* () {\n            const msg = { mtype: message_1.MsgType.RpcRespData, reqId, data };\n            yield this._sendMessage(msg);\n        });\n    }\n    _onMessageResp(resp) {\n        const callObj = this._pendingCalls.get(resp.reqId);\n        this._pendingCalls.delete(resp.reqId);\n        if (!callObj) {\n            this._warn(null, \"RPC_UNKNOWN_REQID\", `Response to unknown reqId ${resp.reqId}`);\n            return;\n        }\n        if (resp.mtype === message_1.MsgType.RpcRespErr) {\n            this._info(callObj, \"RPC_RESULT_ERROR\", resp.mesg);\n            return callObj.reject(new ErrorWithCode(resp.code, resp.mesg));\n        }\n        try {\n            callObj.resultChecker.check(resp.data);\n        }\n        catch (e) {\n            this._warn(callObj, \"RPC_RESULT_INVALID\", e.message);\n            return callObj.reject(new ErrorWithCode(\"RPC_INVALID_RESULT\", `Implementation produced invalid result: ${e.message}`));\n        }\n        this._info(callObj, \"RPC_RESULT_OK\");\n        callObj.resolve(resp.data);\n    }\n    _info(call, code, message) {\n        if (this._logger.info) {\n            const msg = message ? \" \" + message : \"\";\n            this._logger.info(`Rpc for ${this._callDesc(call)}: ${code}${msg}`);\n        }\n    }\n    _warn(call, code, message) {\n        if (this._logger.warn) {\n            const msg = message ? \" \" + message : \"\";\n            this._logger.warn(`Rpc for ${this._callDesc(call)}: ${code}${msg}`);\n        }\n    }\n    _callDesc(call) {\n        if (!call) {\n            return \"?\";\n        }\n        return `${call.iface}.${call.meth}#${call.reqId || \"-\"}`;\n    }\n    _parseName(name) {\n        const idx = name.lastIndexOf(\"@\");\n        if (idx === -1) {\n            return {\n                forwarder: \"\",\n                name,\n            };\n        }\n        return {\n            name: name.substr(0, idx),\n            forwarder: name.substr(idx + 1),\n        };\n    }\n}\nexports.Rpc = Rpc;\n/**\n * Interfaces may throw errors that include .code field, and it gets propagated to callers (e.g.\n * \"NOT_AUTHORIZED\"). Its purpose is to be a stable way to distinguish different types of errors.\n * This way the human-friendly error message can be changed without affecting behavior.\n */\nclass ErrorWithCode extends Error {\n    constructor(code, message) {\n        super(message);\n        this.code = code;\n    }\n}\nexports.ErrorWithCode = ErrorWithCode;\nconst IAnyFunc = tic.iface([], {\n    invoke: tic.func(\"any\"),\n});\nconst { IAnyFunc: checkerAnyFunc } = tic.createCheckers({ IAnyFunc });\nconst checkerAnyResult = checkerAnyFunc.methodResult(\"invoke\");\nconst anyChecker = checkerAnyResult;\n/**\n * A little helper that processes message queues when starting an rpc instance.\n */\nfunction processQueue(queue, processFunc) {\n    let i = 0;\n    try {\n        while (i < queue.length) {\n            // i gets read and then incremented before the call, so that if processFunc throws, the\n            // message still gets removed from the queue (to avoid processing it twice).\n            processFunc(queue[i++]);\n        }\n    }\n    finally {\n        queue.splice(0, i);\n    }\n}\n/**\n * Calls callback(), handling the exception both synchronously and not. If callback and handler\n * both return or throw synchronously, then so does this method.\n */\nfunction catchMaybePromise(callback, handler) {\n    try {\n        const p = callback();\n        if (p) {\n            return p.catch(handler);\n        }\n    }\n    catch (err) {\n        return handler(err);\n    }\n}\n\n\n//# sourceURL=webpack://grist/./node_modules/grain-rpc/dist/lib/rpc.js?");

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar DataView = getNative(root, 'DataView');\n\nmodule.exports = DataView;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_DataView.js?");

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hashClear = __webpack_require__(/*! ./_hashClear */ \"./node_modules/lodash/_hashClear.js\"),\n    hashDelete = __webpack_require__(/*! ./_hashDelete */ \"./node_modules/lodash/_hashDelete.js\"),\n    hashGet = __webpack_require__(/*! ./_hashGet */ \"./node_modules/lodash/_hashGet.js\"),\n    hashHas = __webpack_require__(/*! ./_hashHas */ \"./node_modules/lodash/_hashHas.js\"),\n    hashSet = __webpack_require__(/*! ./_hashSet */ \"./node_modules/lodash/_hashSet.js\");\n\n/**\n * Creates a hash object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Hash(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `Hash`.\nHash.prototype.clear = hashClear;\nHash.prototype['delete'] = hashDelete;\nHash.prototype.get = hashGet;\nHash.prototype.has = hashHas;\nHash.prototype.set = hashSet;\n\nmodule.exports = Hash;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_Hash.js?");

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ \"./node_modules/lodash/_listCacheClear.js\"),\n    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ \"./node_modules/lodash/_listCacheDelete.js\"),\n    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ \"./node_modules/lodash/_listCacheGet.js\"),\n    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ \"./node_modules/lodash/_listCacheHas.js\"),\n    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ \"./node_modules/lodash/_listCacheSet.js\");\n\n/**\n * Creates an list cache object.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction ListCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `ListCache`.\nListCache.prototype.clear = listCacheClear;\nListCache.prototype['delete'] = listCacheDelete;\nListCache.prototype.get = listCacheGet;\nListCache.prototype.has = listCacheHas;\nListCache.prototype.set = listCacheSet;\n\nmodule.exports = ListCache;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_ListCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Map = getNative(root, 'Map');\n\nmodule.exports = Map;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_Map.js?");

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ \"./node_modules/lodash/_mapCacheClear.js\"),\n    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ \"./node_modules/lodash/_mapCacheDelete.js\"),\n    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ \"./node_modules/lodash/_mapCacheGet.js\"),\n    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ \"./node_modules/lodash/_mapCacheHas.js\"),\n    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ \"./node_modules/lodash/_mapCacheSet.js\");\n\n/**\n * Creates a map cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction MapCache(entries) {\n  var index = -1,\n      length = entries == null ? 0 : entries.length;\n\n  this.clear();\n  while (++index < length) {\n    var entry = entries[index];\n    this.set(entry[0], entry[1]);\n  }\n}\n\n// Add methods to `MapCache`.\nMapCache.prototype.clear = mapCacheClear;\nMapCache.prototype['delete'] = mapCacheDelete;\nMapCache.prototype.get = mapCacheGet;\nMapCache.prototype.has = mapCacheHas;\nMapCache.prototype.set = mapCacheSet;\n\nmodule.exports = MapCache;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_MapCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Promise = getNative(root, 'Promise');\n\nmodule.exports = Promise;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_Promise.js?");

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar Set = getNative(root, 'Set');\n\nmodule.exports = Set;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_Set.js?");

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\"),\n    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ \"./node_modules/lodash/_setCacheAdd.js\"),\n    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ \"./node_modules/lodash/_setCacheHas.js\");\n\n/**\n *\n * Creates an array cache object to store unique values.\n *\n * @private\n * @constructor\n * @param {Array} [values] The values to cache.\n */\nfunction SetCache(values) {\n  var index = -1,\n      length = values == null ? 0 : values.length;\n\n  this.__data__ = new MapCache;\n  while (++index < length) {\n    this.add(values[index]);\n  }\n}\n\n// Add methods to `SetCache`.\nSetCache.prototype.add = SetCache.prototype.push = setCacheAdd;\nSetCache.prototype.has = setCacheHas;\n\nmodule.exports = SetCache;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_SetCache.js?");

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    stackClear = __webpack_require__(/*! ./_stackClear */ \"./node_modules/lodash/_stackClear.js\"),\n    stackDelete = __webpack_require__(/*! ./_stackDelete */ \"./node_modules/lodash/_stackDelete.js\"),\n    stackGet = __webpack_require__(/*! ./_stackGet */ \"./node_modules/lodash/_stackGet.js\"),\n    stackHas = __webpack_require__(/*! ./_stackHas */ \"./node_modules/lodash/_stackHas.js\"),\n    stackSet = __webpack_require__(/*! ./_stackSet */ \"./node_modules/lodash/_stackSet.js\");\n\n/**\n * Creates a stack cache object to store key-value pairs.\n *\n * @private\n * @constructor\n * @param {Array} [entries] The key-value pairs to cache.\n */\nfunction Stack(entries) {\n  var data = this.__data__ = new ListCache(entries);\n  this.size = data.size;\n}\n\n// Add methods to `Stack`.\nStack.prototype.clear = stackClear;\nStack.prototype['delete'] = stackDelete;\nStack.prototype.get = stackGet;\nStack.prototype.has = stackHas;\nStack.prototype.set = stackSet;\n\nmodule.exports = Stack;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_Stack.js?");

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Uint8Array = root.Uint8Array;\n\nmodule.exports = Uint8Array;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_Uint8Array.js?");

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\"),\n    root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/* Built-in method references that are verified to be native. */\nvar WeakMap = getNative(root, 'WeakMap');\n\nmodule.exports = WeakMap;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_WeakMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/***/ ((module) => {

eval("/**\n * A faster alternative to `Function#apply`, this function invokes `func`\n * with the `this` binding of `thisArg` and the arguments of `args`.\n *\n * @private\n * @param {Function} func The function to invoke.\n * @param {*} thisArg The `this` binding of `func`.\n * @param {Array} args The arguments to invoke `func` with.\n * @returns {*} Returns the result of `func`.\n */\nfunction apply(func, thisArg, args) {\n  switch (args.length) {\n    case 0: return func.call(thisArg);\n    case 1: return func.call(thisArg, args[0]);\n    case 2: return func.call(thisArg, args[0], args[1]);\n    case 3: return func.call(thisArg, args[0], args[1], args[2]);\n  }\n  return func.apply(thisArg, args);\n}\n\nmodule.exports = apply;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_apply.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayAggregator.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_arrayAggregator.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `baseAggregator` for arrays.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} setter The function to set `accumulator` values.\n * @param {Function} iteratee The iteratee to transform keys.\n * @param {Object} accumulator The initial aggregated object.\n * @returns {Function} Returns `accumulator`.\n */\nfunction arrayAggregator(array, setter, iteratee, accumulator) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    var value = array[index];\n    setter(accumulator, value, iteratee(value), array);\n  }\n  return accumulator;\n}\n\nmodule.exports = arrayAggregator;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_arrayAggregator.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.filter` for arrays without support for\n * iteratee shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {Array} Returns the new filtered array.\n */\nfunction arrayFilter(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      resIndex = 0,\n      result = [];\n\n  while (++index < length) {\n    var value = array[index];\n    if (predicate(value, index, array)) {\n      result[resIndex++] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayFilter;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_arrayFilter.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  var isArr = isArray(value),\n      isArg = !isArr && isArguments(value),\n      isBuff = !isArr && !isArg && isBuffer(value),\n      isType = !isArr && !isArg && !isBuff && isTypedArray(value),\n      skipIndexes = isArr || isArg || isBuff || isType,\n      result = skipIndexes ? baseTimes(value.length, String) : [],\n      length = result.length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (\n           // Safari 9 has enumerable `arguments.length` in strict mode.\n           key == 'length' ||\n           // Node.js 0.10 has enumerable non-index properties on buffers.\n           (isBuff && (key == 'offset' || key == 'parent')) ||\n           // PhantomJS 2 has enumerable non-index properties on typed arrays.\n           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||\n           // Skip index properties.\n           isIndex(key, length)\n        ))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = arrayLikeKeys;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_arrayLikeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array == null ? 0 : array.length,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\nmodule.exports = arrayMap;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_arrayMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Appends the elements of `values` to `array`.\n *\n * @private\n * @param {Array} array The array to modify.\n * @param {Array} values The values to append.\n * @returns {Array} Returns `array`.\n */\nfunction arrayPush(array, values) {\n  var index = -1,\n      length = values.length,\n      offset = array.length;\n\n  while (++index < length) {\n    array[offset + index] = values[index];\n  }\n  return array;\n}\n\nmodule.exports = arrayPush;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_arrayPush.js?");

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `_.some` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} predicate The function invoked per iteration.\n * @returns {boolean} Returns `true` if any element passes the predicate check,\n *  else `false`.\n */\nfunction arraySome(array, predicate) {\n  var index = -1,\n      length = array == null ? 0 : array.length;\n\n  while (++index < length) {\n    if (predicate(array[index], index, array)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nmodule.exports = arraySome;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_arraySome.js?");

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Assigns `value` to `key` of `object` if the existing value is not equivalent\n * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * for equality comparisons.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction assignValue(object, key, value) {\n  var objValue = object[key];\n  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||\n      (value === undefined && !(key in object))) {\n    baseAssignValue(object, key, value);\n  }\n}\n\nmodule.exports = assignValue;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_assignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\");\n\n/**\n * Gets the index at which the `key` is found in `array` of key-value pairs.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} key The key to search for.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction assocIndexOf(array, key) {\n  var length = array.length;\n  while (length--) {\n    if (eq(array[length][0], key)) {\n      return length;\n    }\n  }\n  return -1;\n}\n\nmodule.exports = assocIndexOf;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_assocIndexOf.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAggregator.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseAggregator.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseEach = __webpack_require__(/*! ./_baseEach */ \"./node_modules/lodash/_baseEach.js\");\n\n/**\n * Aggregates elements of `collection` on `accumulator` with keys transformed\n * by `iteratee` and values set by `setter`.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} setter The function to set `accumulator` values.\n * @param {Function} iteratee The iteratee to transform keys.\n * @param {Object} accumulator The initial aggregated object.\n * @returns {Function} Returns `accumulator`.\n */\nfunction baseAggregator(collection, setter, iteratee, accumulator) {\n  baseEach(collection, function(value, key, collection) {\n    setter(accumulator, value, iteratee(value), collection);\n  });\n  return accumulator;\n}\n\nmodule.exports = baseAggregator;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseAggregator.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\");\n\n/**\n * The base implementation of `assignValue` and `assignMergeValue` without\n * value checks.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {string} key The key of the property to assign.\n * @param {*} value The value to assign.\n */\nfunction baseAssignValue(object, key, value) {\n  if (key == '__proto__' && defineProperty) {\n    defineProperty(object, key, {\n      'configurable': true,\n      'enumerable': true,\n      'value': value,\n      'writable': true\n    });\n  } else {\n    object[key] = value;\n  }\n}\n\nmodule.exports = baseAssignValue;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseAssignValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ \"./node_modules/lodash/_baseForOwn.js\"),\n    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ \"./node_modules/lodash/_createBaseEach.js\");\n\n/**\n * The base implementation of `_.forEach` without support for iteratee shorthands.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array|Object} Returns `collection`.\n */\nvar baseEach = createBaseEach(baseForOwn);\n\nmodule.exports = baseEach;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFlatten.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseFlatten.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isFlattenable = __webpack_require__(/*! ./_isFlattenable */ \"./node_modules/lodash/_isFlattenable.js\");\n\n/**\n * The base implementation of `_.flatten` with support for restricting flattening.\n *\n * @private\n * @param {Array} array The array to flatten.\n * @param {number} depth The maximum recursion depth.\n * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.\n * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.\n * @param {Array} [result=[]] The initial result value.\n * @returns {Array} Returns the new flattened array.\n */\nfunction baseFlatten(array, depth, predicate, isStrict, result) {\n  var index = -1,\n      length = array.length;\n\n  predicate || (predicate = isFlattenable);\n  result || (result = []);\n\n  while (++index < length) {\n    var value = array[index];\n    if (depth > 0 && predicate(value)) {\n      if (depth > 1) {\n        // Recursively flatten arrays (susceptible to call stack limits).\n        baseFlatten(value, depth - 1, predicate, isStrict, result);\n      } else {\n        arrayPush(result, value);\n      }\n    } else if (!isStrict) {\n      result[result.length] = value;\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseFlatten;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseFlatten.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ \"./node_modules/lodash/_createBaseFor.js\");\n\n/**\n * The base implementation of `baseForOwn` which iterates over `object`\n * properties returned by `keysFunc` and invokes `iteratee` for each property.\n * Iteratee functions may exit iteration early by explicitly returning `false`.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @returns {Object} Returns `object`.\n */\nvar baseFor = createBaseFor();\n\nmodule.exports = baseFor;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseFor = __webpack_require__(/*! ./_baseFor */ \"./node_modules/lodash/_baseFor.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * The base implementation of `_.forOwn` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Object} Returns `object`.\n */\nfunction baseForOwn(object, iteratee) {\n  return object && baseFor(object, iteratee, keys);\n}\n\nmodule.exports = baseForOwn;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseForOwn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.get` without support for default values.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @returns {*} Returns the resolved value.\n */\nfunction baseGet(object, path) {\n  path = castPath(path, object);\n\n  var index = 0,\n      length = path.length;\n\n  while (object != null && index < length) {\n    object = object[toKey(path[index++])];\n  }\n  return (index && index == length) ? object : undefined;\n}\n\nmodule.exports = baseGet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayPush = __webpack_require__(/*! ./_arrayPush */ \"./node_modules/lodash/_arrayPush.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * The base implementation of `getAllKeys` and `getAllKeysIn` which uses\n * `keysFunc` and `symbolsFunc` to get the enumerable property names and\n * symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Function} keysFunc The function to get the keys of `object`.\n * @param {Function} symbolsFunc The function to get the symbols of `object`.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction baseGetAllKeys(object, keysFunc, symbolsFunc) {\n  var result = keysFunc(object);\n  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));\n}\n\nmodule.exports = baseGetAllKeys;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseGetAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.hasIn` without support for deep paths.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {Array|string} key The key to check.\n * @returns {boolean} Returns `true` if `key` exists, else `false`.\n */\nfunction baseHasIn(object, key) {\n  return object != null && key in Object(object);\n}\n\nmodule.exports = baseHasIn;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseHasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]';\n\n/**\n * The base implementation of `_.isArguments`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n */\nfunction baseIsArguments(value) {\n  return isObjectLike(value) && baseGetTag(value) == argsTag;\n}\n\nmodule.exports = baseIsArguments;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseIsArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ \"./node_modules/lodash/_baseIsEqualDeep.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/**\n * The base implementation of `_.isEqual` which supports partial comparisons\n * and tracks traversed objects.\n *\n * @private\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @param {boolean} bitmask The bitmask flags.\n *  1 - Unordered comparison\n *  2 - Partial comparison\n * @param {Function} [customizer] The function to customize comparisons.\n * @param {Object} [stack] Tracks traversed `value` and `other` objects.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n */\nfunction baseIsEqual(value, other, bitmask, customizer, stack) {\n  if (value === other) {\n    return true;\n  }\n  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {\n    return value !== value && other !== other;\n  }\n  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);\n}\n\nmodule.exports = baseIsEqual;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseIsEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    equalByTag = __webpack_require__(/*! ./_equalByTag */ \"./node_modules/lodash/_equalByTag.js\"),\n    equalObjects = __webpack_require__(/*! ./_equalObjects */ \"./node_modules/lodash/_equalObjects.js\"),\n    getTag = __webpack_require__(/*! ./_getTag */ \"./node_modules/lodash/_getTag.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isBuffer = __webpack_require__(/*! ./isBuffer */ \"./node_modules/lodash/isBuffer.js\"),\n    isTypedArray = __webpack_require__(/*! ./isTypedArray */ \"./node_modules/lodash/isTypedArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqual` for arrays and objects which performs\n * deep comparisons and tracks traversed objects enabling objects with circular\n * references to be compared.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} [stack] Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {\n  var objIsArr = isArray(object),\n      othIsArr = isArray(other),\n      objTag = objIsArr ? arrayTag : getTag(object),\n      othTag = othIsArr ? arrayTag : getTag(other);\n\n  objTag = objTag == argsTag ? objectTag : objTag;\n  othTag = othTag == argsTag ? objectTag : othTag;\n\n  var objIsObj = objTag == objectTag,\n      othIsObj = othTag == objectTag,\n      isSameTag = objTag == othTag;\n\n  if (isSameTag && isBuffer(object)) {\n    if (!isBuffer(other)) {\n      return false;\n    }\n    objIsArr = true;\n    objIsObj = false;\n  }\n  if (isSameTag && !objIsObj) {\n    stack || (stack = new Stack);\n    return (objIsArr || isTypedArray(object))\n      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)\n      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);\n  }\n  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {\n    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),\n        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');\n\n    if (objIsWrapped || othIsWrapped) {\n      var objUnwrapped = objIsWrapped ? object.value() : object,\n          othUnwrapped = othIsWrapped ? other.value() : other;\n\n      stack || (stack = new Stack);\n      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);\n    }\n  }\n  if (!isSameTag) {\n    return false;\n  }\n  stack || (stack = new Stack);\n  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);\n}\n\nmodule.exports = baseIsEqualDeep;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseIsEqualDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Stack = __webpack_require__(/*! ./_Stack */ \"./node_modules/lodash/_Stack.js\"),\n    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * The base implementation of `_.isMatch` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The object to inspect.\n * @param {Object} source The object of property values to match.\n * @param {Array} matchData The property names, values, and compare flags to match.\n * @param {Function} [customizer] The function to customize comparisons.\n * @returns {boolean} Returns `true` if `object` is a match, else `false`.\n */\nfunction baseIsMatch(object, source, matchData, customizer) {\n  var index = matchData.length,\n      length = index,\n      noCustomizer = !customizer;\n\n  if (object == null) {\n    return !length;\n  }\n  object = Object(object);\n  while (index--) {\n    var data = matchData[index];\n    if ((noCustomizer && data[2])\n          ? data[1] !== object[data[0]]\n          : !(data[0] in object)\n        ) {\n      return false;\n    }\n  }\n  while (++index < length) {\n    data = matchData[index];\n    var key = data[0],\n        objValue = object[key],\n        srcValue = data[1];\n\n    if (noCustomizer && data[2]) {\n      if (objValue === undefined && !(key in object)) {\n        return false;\n      }\n    } else {\n      var stack = new Stack;\n      if (customizer) {\n        var result = customizer(objValue, srcValue, key, object, source, stack);\n      }\n      if (!(result === undefined\n            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)\n            : result\n          )) {\n        return false;\n      }\n    }\n  }\n  return true;\n}\n\nmodule.exports = baseIsMatch;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseIsMatch.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isMasked = __webpack_require__(/*! ./_isMasked */ \"./node_modules/lodash/_isMasked.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/**\n * Used to match `RegExp`\n * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).\n */\nvar reRegExpChar = /[\\\\^$.*+?()[\\]{}|]/g;\n\n/** Used to detect host constructors (Safari). */\nvar reIsHostCtor = /^\\[object .+?Constructor\\]$/;\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to detect if a method is native. */\nvar reIsNative = RegExp('^' +\n  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\\\$&')\n  .replace(/hasOwnProperty|(function).*?(?=\\\\\\()| for .+?(?=\\\\\\])/g, '$1.*?') + '$'\n);\n\n/**\n * The base implementation of `_.isNative` without bad shim checks.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a native function,\n *  else `false`.\n */\nfunction baseIsNative(value) {\n  if (!isObject(value) || isMasked(value)) {\n    return false;\n  }\n  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;\n  return pattern.test(toSource(value));\n}\n\nmodule.exports = baseIsNative;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseIsNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    arrayTag = '[object Array]',\n    boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    funcTag = '[object Function]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    objectTag = '[object Object]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    weakMapTag = '[object WeakMap]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]',\n    float32Tag = '[object Float32Array]',\n    float64Tag = '[object Float64Array]',\n    int8Tag = '[object Int8Array]',\n    int16Tag = '[object Int16Array]',\n    int32Tag = '[object Int32Array]',\n    uint8Tag = '[object Uint8Array]',\n    uint8ClampedTag = '[object Uint8ClampedArray]',\n    uint16Tag = '[object Uint16Array]',\n    uint32Tag = '[object Uint32Array]';\n\n/** Used to identify `toStringTag` values of typed arrays. */\nvar typedArrayTags = {};\ntypedArrayTags[float32Tag] = typedArrayTags[float64Tag] =\ntypedArrayTags[int8Tag] = typedArrayTags[int16Tag] =\ntypedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =\ntypedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =\ntypedArrayTags[uint32Tag] = true;\ntypedArrayTags[argsTag] = typedArrayTags[arrayTag] =\ntypedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =\ntypedArrayTags[dataViewTag] = typedArrayTags[dateTag] =\ntypedArrayTags[errorTag] = typedArrayTags[funcTag] =\ntypedArrayTags[mapTag] = typedArrayTags[numberTag] =\ntypedArrayTags[objectTag] = typedArrayTags[regexpTag] =\ntypedArrayTags[setTag] = typedArrayTags[stringTag] =\ntypedArrayTags[weakMapTag] = false;\n\n/**\n * The base implementation of `_.isTypedArray` without Node.js optimizations.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n */\nfunction baseIsTypedArray(value) {\n  return isObjectLike(value) &&\n    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];\n}\n\nmodule.exports = baseIsTypedArray;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseIsTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseMatches = __webpack_require__(/*! ./_baseMatches */ \"./node_modules/lodash/_baseMatches.js\"),\n    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ \"./node_modules/lodash/_baseMatchesProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    property = __webpack_require__(/*! ./property */ \"./node_modules/lodash/property.js\");\n\n/**\n * The base implementation of `_.iteratee`.\n *\n * @private\n * @param {*} [value=_.identity] The value to convert to an iteratee.\n * @returns {Function} Returns the iteratee.\n */\nfunction baseIteratee(value) {\n  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.\n  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.\n  if (typeof value == 'function') {\n    return value;\n  }\n  if (value == null) {\n    return identity;\n  }\n  if (typeof value == 'object') {\n    return isArray(value)\n      ? baseMatchesProperty(value[0], value[1])\n      : baseMatches(value);\n  }\n  return property(value);\n}\n\nmodule.exports = baseIteratee;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseIteratee.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isPrototype = __webpack_require__(/*! ./_isPrototype */ \"./node_modules/lodash/_isPrototype.js\"),\n    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ \"./node_modules/lodash/_nativeKeys.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\nmodule.exports = baseKeys;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseMap.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseEach = __webpack_require__(/*! ./_baseEach */ \"./node_modules/lodash/_baseEach.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * The base implementation of `_.map` without support for iteratee shorthands.\n *\n * @private\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction baseMap(collection, iteratee) {\n  var index = -1,\n      result = isArrayLike(collection) ? Array(collection.length) : [];\n\n  baseEach(collection, function(value, key, collection) {\n    result[++index] = iteratee(value, key, collection);\n  });\n  return result;\n}\n\nmodule.exports = baseMap;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseMap.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ \"./node_modules/lodash/_baseIsMatch.js\"),\n    getMatchData = __webpack_require__(/*! ./_getMatchData */ \"./node_modules/lodash/_getMatchData.js\"),\n    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ \"./node_modules/lodash/_matchesStrictComparable.js\");\n\n/**\n * The base implementation of `_.matches` which doesn't clone `source`.\n *\n * @private\n * @param {Object} source The object of property values to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction baseMatches(source) {\n  var matchData = getMatchData(source);\n  if (matchData.length == 1 && matchData[0][2]) {\n    return matchesStrictComparable(matchData[0][0], matchData[0][1]);\n  }\n  return function(object) {\n    return object === source || baseIsMatch(object, source, matchData);\n  };\n}\n\nmodule.exports = baseMatches;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseMatches.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\"),\n    get = __webpack_require__(/*! ./get */ \"./node_modules/lodash/get.js\"),\n    hasIn = __webpack_require__(/*! ./hasIn */ \"./node_modules/lodash/hasIn.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ \"./node_modules/lodash/_isStrictComparable.js\"),\n    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ \"./node_modules/lodash/_matchesStrictComparable.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.\n *\n * @private\n * @param {string} path The path of the property to get.\n * @param {*} srcValue The value to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction baseMatchesProperty(path, srcValue) {\n  if (isKey(path) && isStrictComparable(srcValue)) {\n    return matchesStrictComparable(toKey(path), srcValue);\n  }\n  return function(object) {\n    var objValue = get(object, path);\n    return (objValue === undefined && objValue === srcValue)\n      ? hasIn(object, path)\n      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);\n  };\n}\n\nmodule.exports = baseMatchesProperty;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseMatchesProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePick.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_basePick.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var basePickBy = __webpack_require__(/*! ./_basePickBy */ \"./node_modules/lodash/_basePickBy.js\"),\n    hasIn = __webpack_require__(/*! ./hasIn */ \"./node_modules/lodash/hasIn.js\");\n\n/**\n * The base implementation of `_.pick` without support for individual\n * property identifiers.\n *\n * @private\n * @param {Object} object The source object.\n * @param {string[]} paths The property paths to pick.\n * @returns {Object} Returns the new object.\n */\nfunction basePick(object, paths) {\n  return basePickBy(object, paths, function(value, path) {\n    return hasIn(object, path);\n  });\n}\n\nmodule.exports = basePick;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_basePick.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePickBy.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_basePickBy.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\"),\n    baseSet = __webpack_require__(/*! ./_baseSet */ \"./node_modules/lodash/_baseSet.js\"),\n    castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\");\n\n/**\n * The base implementation of  `_.pickBy` without support for iteratee shorthands.\n *\n * @private\n * @param {Object} object The source object.\n * @param {string[]} paths The property paths to pick.\n * @param {Function} predicate The function invoked per property.\n * @returns {Object} Returns the new object.\n */\nfunction basePickBy(object, paths, predicate) {\n  var index = -1,\n      length = paths.length,\n      result = {};\n\n  while (++index < length) {\n    var path = paths[index],\n        value = baseGet(object, path);\n\n    if (predicate(value, path)) {\n      baseSet(result, castPath(path, object), value);\n    }\n  }\n  return result;\n}\n\nmodule.exports = basePickBy;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_basePickBy.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.property` without support for deep paths.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction baseProperty(key) {\n  return function(object) {\n    return object == null ? undefined : object[key];\n  };\n}\n\nmodule.exports = baseProperty;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * A specialized version of `baseProperty` which supports deep paths.\n *\n * @private\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new accessor function.\n */\nfunction basePropertyDeep(path) {\n  return function(object) {\n    return baseGet(object, path);\n  };\n}\n\nmodule.exports = basePropertyDeep;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_basePropertyDeep.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assignValue = __webpack_require__(/*! ./_assignValue */ \"./node_modules/lodash/_assignValue.js\"),\n    castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * The base implementation of `_.set`.\n *\n * @private\n * @param {Object} object The object to modify.\n * @param {Array|string} path The path of the property to set.\n * @param {*} value The value to set.\n * @param {Function} [customizer] The function to customize path creation.\n * @returns {Object} Returns `object`.\n */\nfunction baseSet(object, path, value, customizer) {\n  if (!isObject(object)) {\n    return object;\n  }\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      lastIndex = length - 1,\n      nested = object;\n\n  while (nested != null && ++index < length) {\n    var key = toKey(path[index]),\n        newValue = value;\n\n    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {\n      return object;\n    }\n\n    if (index != lastIndex) {\n      var objValue = nested[key];\n      newValue = customizer ? customizer(objValue, key, nested) : undefined;\n      if (newValue === undefined) {\n        newValue = isObject(objValue)\n          ? objValue\n          : (isIndex(path[index + 1]) ? [] : {});\n      }\n    }\n    assignValue(nested, key, newValue);\n    nested = nested[key];\n  }\n  return object;\n}\n\nmodule.exports = baseSet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseSetToString.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseSetToString.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var constant = __webpack_require__(/*! ./constant */ \"./node_modules/lodash/constant.js\"),\n    defineProperty = __webpack_require__(/*! ./_defineProperty */ \"./node_modules/lodash/_defineProperty.js\"),\n    identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * The base implementation of `setToString` without support for hot loop shorting.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar baseSetToString = !defineProperty ? identity : function(func, string) {\n  return defineProperty(func, 'toString', {\n    'configurable': true,\n    'enumerable': false,\n    'value': constant(string),\n    'writable': true\n  });\n};\n\nmodule.exports = baseSetToString;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseSetToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = baseTimes;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseTimes.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolToString = symbolProto ? symbolProto.toString : undefined;\n\n/**\n * The base implementation of `_.toString` which doesn't convert nullish\n * values to empty strings.\n *\n * @private\n * @param {*} value The value to process.\n * @returns {string} Returns the string.\n */\nfunction baseToString(value) {\n  // Exit early for strings to avoid a performance hit in some environments.\n  if (typeof value == 'string') {\n    return value;\n  }\n  if (isArray(value)) {\n    // Recursively convert values (susceptible to call stack limits).\n    return arrayMap(value, baseToString) + '';\n  }\n  if (isSymbol(value)) {\n    return symbolToString ? symbolToString.call(value) : '';\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = baseToString;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ \"./node_modules/lodash/_trimmedEndIndex.js\");\n\n/** Used to match leading whitespace. */\nvar reTrimStart = /^\\s+/;\n\n/**\n * The base implementation of `_.trim`.\n *\n * @private\n * @param {string} string The string to trim.\n * @returns {string} Returns the trimmed string.\n */\nfunction baseTrim(string) {\n  return string\n    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')\n    : string;\n}\n\nmodule.exports = baseTrim;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseTrim.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * The base implementation of `_.unary` without support for storing metadata.\n *\n * @private\n * @param {Function} func The function to cap arguments for.\n * @returns {Function} Returns the new capped function.\n */\nfunction baseUnary(func) {\n  return function(value) {\n    return func(value);\n  };\n}\n\nmodule.exports = baseUnary;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_baseUnary.js?");

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Checks if a `cache` value for `key` exists.\n *\n * @private\n * @param {Object} cache The cache to query.\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction cacheHas(cache, key) {\n  return cache.has(key);\n}\n\nmodule.exports = cacheHas;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_cacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var identity = __webpack_require__(/*! ./identity */ \"./node_modules/lodash/identity.js\");\n\n/**\n * Casts `value` to `identity` if it's not a function.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {Function} Returns cast function.\n */\nfunction castFunction(value) {\n  return typeof value == 'function' ? value : identity;\n}\n\nmodule.exports = castFunction;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_castFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    stringToPath = __webpack_require__(/*! ./_stringToPath */ \"./node_modules/lodash/_stringToPath.js\"),\n    toString = __webpack_require__(/*! ./toString */ \"./node_modules/lodash/toString.js\");\n\n/**\n * Casts `value` to a path array if it's not one.\n *\n * @private\n * @param {*} value The value to inspect.\n * @param {Object} [object] The object to query keys on.\n * @returns {Array} Returns the cast property path array.\n */\nfunction castPath(value, object) {\n  if (isArray(value)) {\n    return value;\n  }\n  return isKey(value, object) ? [value] : stringToPath(toString(value));\n}\n\nmodule.exports = castPath;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_castPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Used to detect overreaching core-js shims. */\nvar coreJsData = root['__core-js_shared__'];\n\nmodule.exports = coreJsData;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_coreJsData.js?");

/***/ }),

/***/ "./node_modules/lodash/_createAggregator.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_createAggregator.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayAggregator = __webpack_require__(/*! ./_arrayAggregator */ \"./node_modules/lodash/_arrayAggregator.js\"),\n    baseAggregator = __webpack_require__(/*! ./_baseAggregator */ \"./node_modules/lodash/_baseAggregator.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Creates a function like `_.groupBy`.\n *\n * @private\n * @param {Function} setter The function to set accumulator values.\n * @param {Function} [initializer] The accumulator object initializer.\n * @returns {Function} Returns the new aggregator function.\n */\nfunction createAggregator(setter, initializer) {\n  return function(collection, iteratee) {\n    var func = isArray(collection) ? arrayAggregator : baseAggregator,\n        accumulator = initializer ? initializer() : {};\n\n    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);\n  };\n}\n\nmodule.exports = createAggregator;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_createAggregator.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates a `baseEach` or `baseEachRight` function.\n *\n * @private\n * @param {Function} eachFunc The function to iterate over a collection.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseEach(eachFunc, fromRight) {\n  return function(collection, iteratee) {\n    if (collection == null) {\n      return collection;\n    }\n    if (!isArrayLike(collection)) {\n      return eachFunc(collection, iteratee);\n    }\n    var length = collection.length,\n        index = fromRight ? length : -1,\n        iterable = Object(collection);\n\n    while ((fromRight ? index-- : ++index < length)) {\n      if (iteratee(iterable[index], index, iterable) === false) {\n        break;\n      }\n    }\n    return collection;\n  };\n}\n\nmodule.exports = createBaseEach;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_createBaseEach.js?");

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

eval("/**\n * Creates a base function for methods like `_.forIn` and `_.forOwn`.\n *\n * @private\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {Function} Returns the new base function.\n */\nfunction createBaseFor(fromRight) {\n  return function(object, iteratee, keysFunc) {\n    var index = -1,\n        iterable = Object(object),\n        props = keysFunc(object),\n        length = props.length;\n\n    while (length--) {\n      var key = props[fromRight ? length : ++index];\n      if (iteratee(iterable[key], key, iterable) === false) {\n        break;\n      }\n    }\n    return object;\n  };\n}\n\nmodule.exports = createBaseFor;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_createBaseFor.js?");

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\nvar defineProperty = (function() {\n  try {\n    var func = getNative(Object, 'defineProperty');\n    func({}, '', {});\n    return func;\n  } catch (e) {}\n}());\n\nmodule.exports = defineProperty;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_defineProperty.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var SetCache = __webpack_require__(/*! ./_SetCache */ \"./node_modules/lodash/_SetCache.js\"),\n    arraySome = __webpack_require__(/*! ./_arraySome */ \"./node_modules/lodash/_arraySome.js\"),\n    cacheHas = __webpack_require__(/*! ./_cacheHas */ \"./node_modules/lodash/_cacheHas.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/**\n * A specialized version of `baseIsEqualDeep` for arrays with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Array} array The array to compare.\n * @param {Array} other The other array to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `array` and `other` objects.\n * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.\n */\nfunction equalArrays(array, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      arrLength = array.length,\n      othLength = other.length;\n\n  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {\n    return false;\n  }\n  // Check that cyclic values are equal.\n  var arrStacked = stack.get(array);\n  var othStacked = stack.get(other);\n  if (arrStacked && othStacked) {\n    return arrStacked == other && othStacked == array;\n  }\n  var index = -1,\n      result = true,\n      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;\n\n  stack.set(array, other);\n  stack.set(other, array);\n\n  // Ignore non-index properties.\n  while (++index < arrLength) {\n    var arrValue = array[index],\n        othValue = other[index];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, arrValue, index, other, array, stack)\n        : customizer(arrValue, othValue, index, array, other, stack);\n    }\n    if (compared !== undefined) {\n      if (compared) {\n        continue;\n      }\n      result = false;\n      break;\n    }\n    // Recursively compare arrays (susceptible to call stack limits).\n    if (seen) {\n      if (!arraySome(other, function(othValue, othIndex) {\n            if (!cacheHas(seen, othIndex) &&\n                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {\n              return seen.push(othIndex);\n            }\n          })) {\n        result = false;\n        break;\n      }\n    } else if (!(\n          arrValue === othValue ||\n            equalFunc(arrValue, othValue, bitmask, customizer, stack)\n        )) {\n      result = false;\n      break;\n    }\n  }\n  stack['delete'](array);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalArrays;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_equalArrays.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ \"./node_modules/lodash/_Uint8Array.js\"),\n    eq = __webpack_require__(/*! ./eq */ \"./node_modules/lodash/eq.js\"),\n    equalArrays = __webpack_require__(/*! ./_equalArrays */ \"./node_modules/lodash/_equalArrays.js\"),\n    mapToArray = __webpack_require__(/*! ./_mapToArray */ \"./node_modules/lodash/_mapToArray.js\"),\n    setToArray = __webpack_require__(/*! ./_setToArray */ \"./node_modules/lodash/_setToArray.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1,\n    COMPARE_UNORDERED_FLAG = 2;\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]',\n    dateTag = '[object Date]',\n    errorTag = '[object Error]',\n    mapTag = '[object Map]',\n    numberTag = '[object Number]',\n    regexpTag = '[object RegExp]',\n    setTag = '[object Set]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\nvar arrayBufferTag = '[object ArrayBuffer]',\n    dataViewTag = '[object DataView]';\n\n/** Used to convert symbols to primitives and strings. */\nvar symbolProto = Symbol ? Symbol.prototype : undefined,\n    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;\n\n/**\n * A specialized version of `baseIsEqualDeep` for comparing objects of\n * the same `toStringTag`.\n *\n * **Note:** This function only supports comparing values with tags of\n * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {string} tag The `toStringTag` of the objects to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {\n  switch (tag) {\n    case dataViewTag:\n      if ((object.byteLength != other.byteLength) ||\n          (object.byteOffset != other.byteOffset)) {\n        return false;\n      }\n      object = object.buffer;\n      other = other.buffer;\n\n    case arrayBufferTag:\n      if ((object.byteLength != other.byteLength) ||\n          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {\n        return false;\n      }\n      return true;\n\n    case boolTag:\n    case dateTag:\n    case numberTag:\n      // Coerce booleans to `1` or `0` and dates to milliseconds.\n      // Invalid dates are coerced to `NaN`.\n      return eq(+object, +other);\n\n    case errorTag:\n      return object.name == other.name && object.message == other.message;\n\n    case regexpTag:\n    case stringTag:\n      // Coerce regexes to strings and treat strings, primitives and objects,\n      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring\n      // for more details.\n      return object == (other + '');\n\n    case mapTag:\n      var convert = mapToArray;\n\n    case setTag:\n      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;\n      convert || (convert = setToArray);\n\n      if (object.size != other.size && !isPartial) {\n        return false;\n      }\n      // Assume cyclic values are equal.\n      var stacked = stack.get(object);\n      if (stacked) {\n        return stacked == other;\n      }\n      bitmask |= COMPARE_UNORDERED_FLAG;\n\n      // Recursively compare objects (susceptible to call stack limits).\n      stack.set(object, other);\n      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);\n      stack['delete'](object);\n      return result;\n\n    case symbolTag:\n      if (symbolValueOf) {\n        return symbolValueOf.call(object) == symbolValueOf.call(other);\n      }\n  }\n  return false;\n}\n\nmodule.exports = equalByTag;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_equalByTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ \"./node_modules/lodash/_getAllKeys.js\");\n\n/** Used to compose bitmasks for value comparisons. */\nvar COMPARE_PARTIAL_FLAG = 1;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * A specialized version of `baseIsEqualDeep` for objects with support for\n * partial deep comparisons.\n *\n * @private\n * @param {Object} object The object to compare.\n * @param {Object} other The other object to compare.\n * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.\n * @param {Function} customizer The function to customize comparisons.\n * @param {Function} equalFunc The function to determine equivalents of values.\n * @param {Object} stack Tracks traversed `object` and `other` objects.\n * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.\n */\nfunction equalObjects(object, other, bitmask, customizer, equalFunc, stack) {\n  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,\n      objProps = getAllKeys(object),\n      objLength = objProps.length,\n      othProps = getAllKeys(other),\n      othLength = othProps.length;\n\n  if (objLength != othLength && !isPartial) {\n    return false;\n  }\n  var index = objLength;\n  while (index--) {\n    var key = objProps[index];\n    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {\n      return false;\n    }\n  }\n  // Check that cyclic values are equal.\n  var objStacked = stack.get(object);\n  var othStacked = stack.get(other);\n  if (objStacked && othStacked) {\n    return objStacked == other && othStacked == object;\n  }\n  var result = true;\n  stack.set(object, other);\n  stack.set(other, object);\n\n  var skipCtor = isPartial;\n  while (++index < objLength) {\n    key = objProps[index];\n    var objValue = object[key],\n        othValue = other[key];\n\n    if (customizer) {\n      var compared = isPartial\n        ? customizer(othValue, objValue, key, other, object, stack)\n        : customizer(objValue, othValue, key, object, other, stack);\n    }\n    // Recursively compare objects (susceptible to call stack limits).\n    if (!(compared === undefined\n          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))\n          : compared\n        )) {\n      result = false;\n      break;\n    }\n    skipCtor || (skipCtor = key == 'constructor');\n  }\n  if (result && !skipCtor) {\n    var objCtor = object.constructor,\n        othCtor = other.constructor;\n\n    // Non `Object` object instances with different constructors are not equal.\n    if (objCtor != othCtor &&\n        ('constructor' in object && 'constructor' in other) &&\n        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&\n          typeof othCtor == 'function' && othCtor instanceof othCtor)) {\n      result = false;\n    }\n  }\n  stack['delete'](object);\n  stack['delete'](other);\n  return result;\n}\n\nmodule.exports = equalObjects;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_equalObjects.js?");

/***/ }),

/***/ "./node_modules/lodash/_flatRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_flatRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var flatten = __webpack_require__(/*! ./flatten */ \"./node_modules/lodash/flatten.js\"),\n    overRest = __webpack_require__(/*! ./_overRest */ \"./node_modules/lodash/_overRest.js\"),\n    setToString = __webpack_require__(/*! ./_setToString */ \"./node_modules/lodash/_setToString.js\");\n\n/**\n * A specialized version of `baseRest` which flattens the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @returns {Function} Returns the new function.\n */\nfunction flatRest(func) {\n  return setToString(overRest(func, undefined, flatten), func + '');\n}\n\nmodule.exports = flatRest;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_flatRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module) => {

eval("/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ \"./node_modules/lodash/_baseGetAllKeys.js\"),\n    getSymbols = __webpack_require__(/*! ./_getSymbols */ \"./node_modules/lodash/_getSymbols.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Creates an array of own enumerable property names and symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names and symbols.\n */\nfunction getAllKeys(object) {\n  return baseGetAllKeys(object, keys, getSymbols);\n}\n\nmodule.exports = getAllKeys;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getAllKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isKeyable = __webpack_require__(/*! ./_isKeyable */ \"./node_modules/lodash/_isKeyable.js\");\n\n/**\n * Gets the data for `map`.\n *\n * @private\n * @param {Object} map The map to query.\n * @param {string} key The reference key.\n * @returns {*} Returns the map data.\n */\nfunction getMapData(map, key) {\n  var data = map.__data__;\n  return isKeyable(key)\n    ? data[typeof key == 'string' ? 'string' : 'hash']\n    : data.map;\n}\n\nmodule.exports = getMapData;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getMapData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ \"./node_modules/lodash/_isStrictComparable.js\"),\n    keys = __webpack_require__(/*! ./keys */ \"./node_modules/lodash/keys.js\");\n\n/**\n * Gets the property names, values, and compare flags of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the match data of `object`.\n */\nfunction getMatchData(object) {\n  var result = keys(object),\n      length = result.length;\n\n  while (length--) {\n    var key = result[length],\n        value = object[key];\n\n    result[length] = [key, value, isStrictComparable(value)];\n  }\n  return result;\n}\n\nmodule.exports = getMatchData;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getMatchData.js?");

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ \"./node_modules/lodash/_baseIsNative.js\"),\n    getValue = __webpack_require__(/*! ./_getValue */ \"./node_modules/lodash/_getValue.js\");\n\n/**\n * Gets the native function at `key` of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {string} key The key of the method to get.\n * @returns {*} Returns the function if it's native, else `undefined`.\n */\nfunction getNative(object, key) {\n  var value = getValue(object, key);\n  return baseIsNative(value) ? value : undefined;\n}\n\nmodule.exports = getNative;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getNative.js?");

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\nmodule.exports = getPrototype;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ \"./node_modules/lodash/_arrayFilter.js\"),\n    stubArray = __webpack_require__(/*! ./stubArray */ \"./node_modules/lodash/stubArray.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeGetSymbols = Object.getOwnPropertySymbols;\n\n/**\n * Creates an array of the own enumerable symbols of `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of symbols.\n */\nvar getSymbols = !nativeGetSymbols ? stubArray : function(object) {\n  if (object == null) {\n    return [];\n  }\n  object = Object(object);\n  return arrayFilter(nativeGetSymbols(object), function(symbol) {\n    return propertyIsEnumerable.call(object, symbol);\n  });\n};\n\nmodule.exports = getSymbols;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getSymbols.js?");

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DataView = __webpack_require__(/*! ./_DataView */ \"./node_modules/lodash/_DataView.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    Promise = __webpack_require__(/*! ./_Promise */ \"./node_modules/lodash/_Promise.js\"),\n    Set = __webpack_require__(/*! ./_Set */ \"./node_modules/lodash/_Set.js\"),\n    WeakMap = __webpack_require__(/*! ./_WeakMap */ \"./node_modules/lodash/_WeakMap.js\"),\n    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    toSource = __webpack_require__(/*! ./_toSource */ \"./node_modules/lodash/_toSource.js\");\n\n/** `Object#toString` result references. */\nvar mapTag = '[object Map]',\n    objectTag = '[object Object]',\n    promiseTag = '[object Promise]',\n    setTag = '[object Set]',\n    weakMapTag = '[object WeakMap]';\n\nvar dataViewTag = '[object DataView]';\n\n/** Used to detect maps, sets, and weakmaps. */\nvar dataViewCtorString = toSource(DataView),\n    mapCtorString = toSource(Map),\n    promiseCtorString = toSource(Promise),\n    setCtorString = toSource(Set),\n    weakMapCtorString = toSource(WeakMap);\n\n/**\n * Gets the `toStringTag` of `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nvar getTag = baseGetTag;\n\n// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.\nif ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||\n    (Map && getTag(new Map) != mapTag) ||\n    (Promise && getTag(Promise.resolve()) != promiseTag) ||\n    (Set && getTag(new Set) != setTag) ||\n    (WeakMap && getTag(new WeakMap) != weakMapTag)) {\n  getTag = function(value) {\n    var result = baseGetTag(value),\n        Ctor = result == objectTag ? value.constructor : undefined,\n        ctorString = Ctor ? toSource(Ctor) : '';\n\n    if (ctorString) {\n      switch (ctorString) {\n        case dataViewCtorString: return dataViewTag;\n        case mapCtorString: return mapTag;\n        case promiseCtorString: return promiseTag;\n        case setCtorString: return setTag;\n        case weakMapCtorString: return weakMapTag;\n      }\n    }\n    return result;\n  };\n}\n\nmodule.exports = getTag;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Gets the value at `key` of `object`.\n *\n * @private\n * @param {Object} [object] The object to query.\n * @param {string} key The key of the property to get.\n * @returns {*} Returns the property value.\n */\nfunction getValue(object, key) {\n  return object == null ? undefined : object[key];\n}\n\nmodule.exports = getValue;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_getValue.js?");

/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var castPath = __webpack_require__(/*! ./_castPath */ \"./node_modules/lodash/_castPath.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isIndex = __webpack_require__(/*! ./_isIndex */ \"./node_modules/lodash/_isIndex.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Checks if `path` exists on `object`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @param {Function} hasFunc The function to check properties.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n */\nfunction hasPath(object, path, hasFunc) {\n  path = castPath(path, object);\n\n  var index = -1,\n      length = path.length,\n      result = false;\n\n  while (++index < length) {\n    var key = toKey(path[index]);\n    if (!(result = object != null && hasFunc(object, key))) {\n      break;\n    }\n    object = object[key];\n  }\n  if (result || ++index != length) {\n    return result;\n  }\n  length = object == null ? 0 : object.length;\n  return !!length && isLength(length) && isIndex(key, length) &&\n    (isArray(object) || isArguments(object));\n}\n\nmodule.exports = hasPath;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_hasPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/**\n * Removes all key-value entries from the hash.\n *\n * @private\n * @name clear\n * @memberOf Hash\n */\nfunction hashClear() {\n  this.__data__ = nativeCreate ? nativeCreate(null) : {};\n  this.size = 0;\n}\n\nmodule.exports = hashClear;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_hashClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Removes `key` and its value from the hash.\n *\n * @private\n * @name delete\n * @memberOf Hash\n * @param {Object} hash The hash to modify.\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction hashDelete(key) {\n  var result = this.has(key) && delete this.__data__[key];\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = hashDelete;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_hashDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Gets the hash value for `key`.\n *\n * @private\n * @name get\n * @memberOf Hash\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction hashGet(key) {\n  var data = this.__data__;\n  if (nativeCreate) {\n    var result = data[key];\n    return result === HASH_UNDEFINED ? undefined : result;\n  }\n  return hasOwnProperty.call(data, key) ? data[key] : undefined;\n}\n\nmodule.exports = hashGet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_hashGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Checks if a hash value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Hash\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction hashHas(key) {\n  var data = this.__data__;\n  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);\n}\n\nmodule.exports = hashHas;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_hashHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ \"./node_modules/lodash/_nativeCreate.js\");\n\n/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Sets the hash `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Hash\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the hash instance.\n */\nfunction hashSet(key, value) {\n  var data = this.__data__;\n  this.size += this.has(key) ? 0 : 1;\n  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;\n  return this;\n}\n\nmodule.exports = hashSet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_hashSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_isFlattenable.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_isFlattenable.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    isArguments = __webpack_require__(/*! ./isArguments */ \"./node_modules/lodash/isArguments.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/** Built-in value references. */\nvar spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;\n\n/**\n * Checks if `value` is a flattenable `arguments` object or array.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.\n */\nfunction isFlattenable(value) {\n  return isArray(value) || isArguments(value) ||\n    !!(spreadableSymbol && value && value[spreadableSymbol]);\n}\n\nmodule.exports = isFlattenable;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_isFlattenable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  var type = typeof value;\n  length = length == null ? MAX_SAFE_INTEGER : length;\n\n  return !!length &&\n    (type == 'number' ||\n      (type != 'symbol' && reIsUint.test(value))) &&\n        (value > -1 && value % 1 == 0 && value < length);\n}\n\nmodule.exports = isIndex;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_isIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used to match property names within property paths. */\nvar reIsDeepProp = /\\.|\\[(?:[^[\\]]*|([\"'])(?:(?!\\1)[^\\\\]|\\\\.)*?\\1)\\]/,\n    reIsPlainProp = /^\\w*$/;\n\n/**\n * Checks if `value` is a property name and not a property path.\n *\n * @private\n * @param {*} value The value to check.\n * @param {Object} [object] The object to query keys on.\n * @returns {boolean} Returns `true` if `value` is a property name, else `false`.\n */\nfunction isKey(value, object) {\n  if (isArray(value)) {\n    return false;\n  }\n  var type = typeof value;\n  if (type == 'number' || type == 'symbol' || type == 'boolean' ||\n      value == null || isSymbol(value)) {\n    return true;\n  }\n  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||\n    (object != null && value in Object(object));\n}\n\nmodule.exports = isKey;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_isKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is suitable for use as unique object key.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is suitable, else `false`.\n */\nfunction isKeyable(value) {\n  var type = typeof value;\n  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')\n    ? (value !== '__proto__')\n    : (value === null);\n}\n\nmodule.exports = isKeyable;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_isKeyable.js?");

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var coreJsData = __webpack_require__(/*! ./_coreJsData */ \"./node_modules/lodash/_coreJsData.js\");\n\n/** Used to detect methods masquerading as native. */\nvar maskSrcKey = (function() {\n  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');\n  return uid ? ('Symbol(src)_1.' + uid) : '';\n}());\n\n/**\n * Checks if `func` has its source masked.\n *\n * @private\n * @param {Function} func The function to check.\n * @returns {boolean} Returns `true` if `func` is masked, else `false`.\n */\nfunction isMasked(func) {\n  return !!maskSrcKey && (maskSrcKey in func);\n}\n\nmodule.exports = isMasked;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_isMasked.js?");

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\nmodule.exports = isPrototype;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_isPrototype.js?");

/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/**\n * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` if suitable for strict\n *  equality comparisons, else `false`.\n */\nfunction isStrictComparable(value) {\n  return value === value && !isObject(value);\n}\n\nmodule.exports = isStrictComparable;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_isStrictComparable.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/***/ ((module) => {

eval("/**\n * Removes all key-value entries from the list cache.\n *\n * @private\n * @name clear\n * @memberOf ListCache\n */\nfunction listCacheClear() {\n  this.__data__ = [];\n  this.size = 0;\n}\n\nmodule.exports = listCacheClear;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_listCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/** Used for built-in method references. */\nvar arrayProto = Array.prototype;\n\n/** Built-in value references. */\nvar splice = arrayProto.splice;\n\n/**\n * Removes `key` and its value from the list cache.\n *\n * @private\n * @name delete\n * @memberOf ListCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction listCacheDelete(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    return false;\n  }\n  var lastIndex = data.length - 1;\n  if (index == lastIndex) {\n    data.pop();\n  } else {\n    splice.call(data, index, 1);\n  }\n  --this.size;\n  return true;\n}\n\nmodule.exports = listCacheDelete;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_listCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Gets the list cache value for `key`.\n *\n * @private\n * @name get\n * @memberOf ListCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction listCacheGet(key) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  return index < 0 ? undefined : data[index][1];\n}\n\nmodule.exports = listCacheGet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_listCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Checks if a list cache value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf ListCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction listCacheHas(key) {\n  return assocIndexOf(this.__data__, key) > -1;\n}\n\nmodule.exports = listCacheHas;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_listCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ \"./node_modules/lodash/_assocIndexOf.js\");\n\n/**\n * Sets the list cache `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf ListCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the list cache instance.\n */\nfunction listCacheSet(key, value) {\n  var data = this.__data__,\n      index = assocIndexOf(data, key);\n\n  if (index < 0) {\n    ++this.size;\n    data.push([key, value]);\n  } else {\n    data[index][1] = value;\n  }\n  return this;\n}\n\nmodule.exports = listCacheSet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_listCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Hash = __webpack_require__(/*! ./_Hash */ \"./node_modules/lodash/_Hash.js\"),\n    ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\");\n\n/**\n * Removes all key-value entries from the map.\n *\n * @private\n * @name clear\n * @memberOf MapCache\n */\nfunction mapCacheClear() {\n  this.size = 0;\n  this.__data__ = {\n    'hash': new Hash,\n    'map': new (Map || ListCache),\n    'string': new Hash\n  };\n}\n\nmodule.exports = mapCacheClear;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_mapCacheClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Removes `key` and its value from the map.\n *\n * @private\n * @name delete\n * @memberOf MapCache\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction mapCacheDelete(key) {\n  var result = getMapData(this, key)['delete'](key);\n  this.size -= result ? 1 : 0;\n  return result;\n}\n\nmodule.exports = mapCacheDelete;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_mapCacheDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Gets the map value for `key`.\n *\n * @private\n * @name get\n * @memberOf MapCache\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction mapCacheGet(key) {\n  return getMapData(this, key).get(key);\n}\n\nmodule.exports = mapCacheGet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_mapCacheGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Checks if a map value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf MapCache\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction mapCacheHas(key) {\n  return getMapData(this, key).has(key);\n}\n\nmodule.exports = mapCacheHas;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_mapCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getMapData = __webpack_require__(/*! ./_getMapData */ \"./node_modules/lodash/_getMapData.js\");\n\n/**\n * Sets the map `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf MapCache\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the map cache instance.\n */\nfunction mapCacheSet(key, value) {\n  var data = getMapData(this, key),\n      size = data.size;\n\n  data.set(key, value);\n  this.size += data.size == size ? 0 : 1;\n  return this;\n}\n\nmodule.exports = mapCacheSet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_mapCacheSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Converts `map` to its key-value pairs.\n *\n * @private\n * @param {Object} map The map to convert.\n * @returns {Array} Returns the key-value pairs.\n */\nfunction mapToArray(map) {\n  var index = -1,\n      result = Array(map.size);\n\n  map.forEach(function(value, key) {\n    result[++index] = [key, value];\n  });\n  return result;\n}\n\nmodule.exports = mapToArray;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_mapToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("/**\n * A specialized version of `matchesProperty` for source values suitable\n * for strict equality comparisons, i.e. `===`.\n *\n * @private\n * @param {string} key The key of the property to get.\n * @param {*} srcValue The value to match.\n * @returns {Function} Returns the new spec function.\n */\nfunction matchesStrictComparable(key, srcValue) {\n  return function(object) {\n    if (object == null) {\n      return false;\n    }\n    return object[key] === srcValue &&\n      (srcValue !== undefined || (key in Object(object)));\n  };\n}\n\nmodule.exports = matchesStrictComparable;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_matchesStrictComparable.js?");

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var memoize = __webpack_require__(/*! ./memoize */ \"./node_modules/lodash/memoize.js\");\n\n/** Used as the maximum memoize cache size. */\nvar MAX_MEMOIZE_SIZE = 500;\n\n/**\n * A specialized version of `_.memoize` which clears the memoized function's\n * cache when it exceeds `MAX_MEMOIZE_SIZE`.\n *\n * @private\n * @param {Function} func The function to have its output memoized.\n * @returns {Function} Returns the new memoized function.\n */\nfunction memoizeCapped(func) {\n  var result = memoize(func, function(key) {\n    if (cache.size === MAX_MEMOIZE_SIZE) {\n      cache.clear();\n    }\n    return key;\n  });\n\n  var cache = result.cache;\n  return result;\n}\n\nmodule.exports = memoizeCapped;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_memoizeCapped.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var getNative = __webpack_require__(/*! ./_getNative */ \"./node_modules/lodash/_getNative.js\");\n\n/* Built-in method references that are verified to be native. */\nvar nativeCreate = getNative(Object, 'create');\n\nmodule.exports = nativeCreate;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_nativeCreate.js?");

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var overArg = __webpack_require__(/*! ./_overArg */ \"./node_modules/lodash/_overArg.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object);\n\nmodule.exports = nativeKeys;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_nativeKeys.js?");

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Detect free variable `process` from Node.js. */\nvar freeProcess = moduleExports && freeGlobal.process;\n\n/** Used to access faster Node.js helpers. */\nvar nodeUtil = (function() {\n  try {\n    // Use `util.types` for Node.js 10+.\n    var types = freeModule && freeModule.require && freeModule.require('util').types;\n\n    if (types) {\n      return types;\n    }\n\n    // Legacy `process.binding('util')` for Node.js < 10.\n    return freeProcess && freeProcess.binding && freeProcess.binding('util');\n  } catch (e) {}\n}());\n\nmodule.exports = nodeUtil;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_nodeUtil.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\nmodule.exports = overArg;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_overArg.js?");

/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var apply = __webpack_require__(/*! ./_apply */ \"./node_modules/lodash/_apply.js\");\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMax = Math.max;\n\n/**\n * A specialized version of `baseRest` which transforms the rest array.\n *\n * @private\n * @param {Function} func The function to apply a rest parameter to.\n * @param {number} [start=func.length-1] The start position of the rest parameter.\n * @param {Function} transform The rest array transform.\n * @returns {Function} Returns the new function.\n */\nfunction overRest(func, start, transform) {\n  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);\n  return function() {\n    var args = arguments,\n        index = -1,\n        length = nativeMax(args.length - start, 0),\n        array = Array(length);\n\n    while (++index < length) {\n      array[index] = args[start + index];\n    }\n    index = -1;\n    var otherArgs = Array(start + 1);\n    while (++index < start) {\n      otherArgs[index] = args[index];\n    }\n    otherArgs[start] = transform(array);\n    return apply(func, this, otherArgs);\n  };\n}\n\nmodule.exports = overRest;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_overRest.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/** Used to stand-in for `undefined` hash values. */\nvar HASH_UNDEFINED = '__lodash_hash_undefined__';\n\n/**\n * Adds `value` to the array cache.\n *\n * @private\n * @name add\n * @memberOf SetCache\n * @alias push\n * @param {*} value The value to cache.\n * @returns {Object} Returns the cache instance.\n */\nfunction setCacheAdd(value) {\n  this.__data__.set(value, HASH_UNDEFINED);\n  return this;\n}\n\nmodule.exports = setCacheAdd;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_setCacheAdd.js?");

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is in the array cache.\n *\n * @private\n * @name has\n * @memberOf SetCache\n * @param {*} value The value to search for.\n * @returns {number} Returns `true` if `value` is found, else `false`.\n */\nfunction setCacheHas(value) {\n  return this.__data__.has(value);\n}\n\nmodule.exports = setCacheHas;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_setCacheHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/***/ ((module) => {

eval("/**\n * Converts `set` to an array of its values.\n *\n * @private\n * @param {Object} set The set to convert.\n * @returns {Array} Returns the values.\n */\nfunction setToArray(set) {\n  var index = -1,\n      result = Array(set.size);\n\n  set.forEach(function(value) {\n    result[++index] = value;\n  });\n  return result;\n}\n\nmodule.exports = setToArray;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_setToArray.js?");

/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseSetToString = __webpack_require__(/*! ./_baseSetToString */ \"./node_modules/lodash/_baseSetToString.js\"),\n    shortOut = __webpack_require__(/*! ./_shortOut */ \"./node_modules/lodash/_shortOut.js\");\n\n/**\n * Sets the `toString` method of `func` to return `string`.\n *\n * @private\n * @param {Function} func The function to modify.\n * @param {Function} string The `toString` result.\n * @returns {Function} Returns `func`.\n */\nvar setToString = shortOut(baseSetToString);\n\nmodule.exports = setToString;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_setToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_shortOut.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_shortOut.js ***!
  \******************************************/
/***/ ((module) => {

eval("/** Used to detect hot functions by number of calls within a span of milliseconds. */\nvar HOT_COUNT = 800,\n    HOT_SPAN = 16;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeNow = Date.now;\n\n/**\n * Creates a function that'll short out and invoke `identity` instead\n * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`\n * milliseconds.\n *\n * @private\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new shortable function.\n */\nfunction shortOut(func) {\n  var count = 0,\n      lastCalled = 0;\n\n  return function() {\n    var stamp = nativeNow(),\n        remaining = HOT_SPAN - (stamp - lastCalled);\n\n    lastCalled = stamp;\n    if (remaining > 0) {\n      if (++count >= HOT_COUNT) {\n        return arguments[0];\n      }\n    } else {\n      count = 0;\n    }\n    return func.apply(undefined, arguments);\n  };\n}\n\nmodule.exports = shortOut;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_shortOut.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\");\n\n/**\n * Removes all key-value entries from the stack.\n *\n * @private\n * @name clear\n * @memberOf Stack\n */\nfunction stackClear() {\n  this.__data__ = new ListCache;\n  this.size = 0;\n}\n\nmodule.exports = stackClear;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_stackClear.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Removes `key` and its value from the stack.\n *\n * @private\n * @name delete\n * @memberOf Stack\n * @param {string} key The key of the value to remove.\n * @returns {boolean} Returns `true` if the entry was removed, else `false`.\n */\nfunction stackDelete(key) {\n  var data = this.__data__,\n      result = data['delete'](key);\n\n  this.size = data.size;\n  return result;\n}\n\nmodule.exports = stackDelete;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_stackDelete.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Gets the stack value for `key`.\n *\n * @private\n * @name get\n * @memberOf Stack\n * @param {string} key The key of the value to get.\n * @returns {*} Returns the entry value.\n */\nfunction stackGet(key) {\n  return this.__data__.get(key);\n}\n\nmodule.exports = stackGet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_stackGet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * Checks if a stack value for `key` exists.\n *\n * @private\n * @name has\n * @memberOf Stack\n * @param {string} key The key of the entry to check.\n * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.\n */\nfunction stackHas(key) {\n  return this.__data__.has(key);\n}\n\nmodule.exports = stackHas;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_stackHas.js?");

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var ListCache = __webpack_require__(/*! ./_ListCache */ \"./node_modules/lodash/_ListCache.js\"),\n    Map = __webpack_require__(/*! ./_Map */ \"./node_modules/lodash/_Map.js\"),\n    MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Used as the size to enable large array optimizations. */\nvar LARGE_ARRAY_SIZE = 200;\n\n/**\n * Sets the stack `key` to `value`.\n *\n * @private\n * @name set\n * @memberOf Stack\n * @param {string} key The key of the value to set.\n * @param {*} value The value to set.\n * @returns {Object} Returns the stack cache instance.\n */\nfunction stackSet(key, value) {\n  var data = this.__data__;\n  if (data instanceof ListCache) {\n    var pairs = data.__data__;\n    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {\n      pairs.push([key, value]);\n      this.size = ++data.size;\n      return this;\n    }\n    data = this.__data__ = new MapCache(pairs);\n  }\n  data.set(key, value);\n  this.size = data.size;\n  return this;\n}\n\nmodule.exports = stackSet;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_stackSet.js?");

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ \"./node_modules/lodash/_memoizeCapped.js\");\n\n/** Used to match property names within property paths. */\nvar rePropName = /[^.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))/g;\n\n/** Used to match backslashes in property paths. */\nvar reEscapeChar = /\\\\(\\\\)?/g;\n\n/**\n * Converts `string` to a property path array.\n *\n * @private\n * @param {string} string The string to convert.\n * @returns {Array} Returns the property path array.\n */\nvar stringToPath = memoizeCapped(function(string) {\n  var result = [];\n  if (string.charCodeAt(0) === 46 /* . */) {\n    result.push('');\n  }\n  string.replace(rePropName, function(match, number, quote, subString) {\n    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));\n  });\n  return result;\n});\n\nmodule.exports = stringToPath;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_stringToPath.js?");

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0;\n\n/**\n * Converts `value` to a string key if it's not a string or symbol.\n *\n * @private\n * @param {*} value The value to inspect.\n * @returns {string|symbol} Returns the key.\n */\nfunction toKey(value) {\n  if (typeof value == 'string' || isSymbol(value)) {\n    return value;\n  }\n  var result = (value + '');\n  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;\n}\n\nmodule.exports = toKey;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_toKey.js?");

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/***/ ((module) => {

eval("/** Used for built-in method references. */\nvar funcProto = Function.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/**\n * Converts `func` to its source code.\n *\n * @private\n * @param {Function} func The function to convert.\n * @returns {string} Returns the source code.\n */\nfunction toSource(func) {\n  if (func != null) {\n    try {\n      return funcToString.call(func);\n    } catch (e) {}\n    try {\n      return (func + '');\n    } catch (e) {}\n  }\n  return '';\n}\n\nmodule.exports = toSource;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_toSource.js?");

/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/***/ ((module) => {

eval("/** Used to match a single whitespace character. */\nvar reWhitespace = /\\s/;\n\n/**\n * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace\n * character of `string`.\n *\n * @private\n * @param {string} string The string to inspect.\n * @returns {number} Returns the index of the last non-whitespace character.\n */\nfunction trimmedEndIndex(string) {\n  var index = string.length;\n\n  while (index-- && reWhitespace.test(string.charAt(index))) {}\n  return index;\n}\n\nmodule.exports = trimmedEndIndex;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/_trimmedEndIndex.js?");

/***/ }),

/***/ "./node_modules/lodash/constant.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/constant.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Creates a function that returns `value`.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {*} value The value to return from the new function.\n * @returns {Function} Returns the new constant function.\n * @example\n *\n * var objects = _.times(2, _.constant({ 'a': 1 }));\n *\n * console.log(objects);\n * // => [{ 'a': 1 }, { 'a': 1 }]\n *\n * console.log(objects[0] === objects[1]);\n * // => true\n */\nfunction constant(value) {\n  return function() {\n    return value;\n  };\n}\n\nmodule.exports = constant;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/constant.js?");

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/***/ ((module) => {

eval("/**\n * Performs a\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * comparison between two values to determine if they are equivalent.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.eq(object, object);\n * // => true\n *\n * _.eq(object, other);\n * // => false\n *\n * _.eq('a', 'a');\n * // => true\n *\n * _.eq('a', Object('a'));\n * // => false\n *\n * _.eq(NaN, NaN);\n * // => true\n */\nfunction eq(value, other) {\n  return value === other || (value !== value && other !== other);\n}\n\nmodule.exports = eq;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/eq.js?");

/***/ }),

/***/ "./node_modules/lodash/flatMap.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatMap.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\"),\n    map = __webpack_require__(/*! ./map */ \"./node_modules/lodash/map.js\");\n\n/**\n * Creates a flattened array of values by running each element in `collection`\n * thru `iteratee` and flattening the mapped results. The iteratee is invoked\n * with three arguments: (value, index|key, collection).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array} Returns the new flattened array.\n * @example\n *\n * function duplicate(n) {\n *   return [n, n];\n * }\n *\n * _.flatMap([1, 2], duplicate);\n * // => [1, 1, 2, 2]\n */\nfunction flatMap(collection, iteratee) {\n  return baseFlatten(map(collection, iteratee), 1);\n}\n\nmodule.exports = flatMap;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/flatMap.js?");

/***/ }),

/***/ "./node_modules/lodash/flatten.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/flatten.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseFlatten = __webpack_require__(/*! ./_baseFlatten */ \"./node_modules/lodash/_baseFlatten.js\");\n\n/**\n * Flattens `array` a single level deep.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Array\n * @param {Array} array The array to flatten.\n * @returns {Array} Returns the new flattened array.\n * @example\n *\n * _.flatten([1, [2, [3, [4]], 5]]);\n * // => [1, 2, [3, [4]], 5]\n */\nfunction flatten(array) {\n  var length = array == null ? 0 : array.length;\n  return length ? baseFlatten(array, 1) : [];\n}\n\nmodule.exports = flatten;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/flatten.js?");

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGet = __webpack_require__(/*! ./_baseGet */ \"./node_modules/lodash/_baseGet.js\");\n\n/**\n * Gets the value at `path` of `object`. If the resolved value is\n * `undefined`, the `defaultValue` is returned in its place.\n *\n * @static\n * @memberOf _\n * @since 3.7.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path of the property to get.\n * @param {*} [defaultValue] The value returned for `undefined` resolved values.\n * @returns {*} Returns the resolved value.\n * @example\n *\n * var object = { 'a': [{ 'b': { 'c': 3 } }] };\n *\n * _.get(object, 'a[0].b.c');\n * // => 3\n *\n * _.get(object, ['a', '0', 'b', 'c']);\n * // => 3\n *\n * _.get(object, 'a.b.c', 'default');\n * // => 'default'\n */\nfunction get(object, path, defaultValue) {\n  var result = object == null ? undefined : baseGet(object, path);\n  return result === undefined ? defaultValue : result;\n}\n\nmodule.exports = get;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/get.js?");

/***/ }),

/***/ "./node_modules/lodash/groupBy.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/groupBy.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ \"./node_modules/lodash/_baseAssignValue.js\"),\n    createAggregator = __webpack_require__(/*! ./_createAggregator */ \"./node_modules/lodash/_createAggregator.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Creates an object composed of keys generated from the results of running\n * each element of `collection` thru `iteratee`. The order of grouped values\n * is determined by the order they occur in `collection`. The corresponding\n * value of each key is an array of elements responsible for generating the\n * key. The iteratee is invoked with one argument: (value).\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The iteratee to transform keys.\n * @returns {Object} Returns the composed aggregate object.\n * @example\n *\n * _.groupBy([6.1, 4.2, 6.3], Math.floor);\n * // => { '4': [4.2], '6': [6.1, 6.3] }\n *\n * // The `_.property` iteratee shorthand.\n * _.groupBy(['one', 'two', 'three'], 'length');\n * // => { '3': ['one', 'two'], '5': ['three'] }\n */\nvar groupBy = createAggregator(function(result, value, key) {\n  if (hasOwnProperty.call(result, key)) {\n    result[key].push(value);\n  } else {\n    baseAssignValue(result, key, [value]);\n  }\n});\n\nmodule.exports = groupBy;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/groupBy.js?");

/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ \"./node_modules/lodash/_baseHasIn.js\"),\n    hasPath = __webpack_require__(/*! ./_hasPath */ \"./node_modules/lodash/_hasPath.js\");\n\n/**\n * Checks if `path` is a direct or inherited property of `object`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Object\n * @param {Object} object The object to query.\n * @param {Array|string} path The path to check.\n * @returns {boolean} Returns `true` if `path` exists, else `false`.\n * @example\n *\n * var object = _.create({ 'a': _.create({ 'b': 2 }) });\n *\n * _.hasIn(object, 'a');\n * // => true\n *\n * _.hasIn(object, 'a.b');\n * // => true\n *\n * _.hasIn(object, ['a', 'b']);\n * // => true\n *\n * _.hasIn(object, 'b');\n * // => false\n */\nfunction hasIn(object, path) {\n  return object != null && hasPath(object, path, baseHasIn);\n}\n\nmodule.exports = hasIn;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/hasIn.js?");

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * This method returns the first argument it receives.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {*} value Any value.\n * @returns {*} Returns `value`.\n * @example\n *\n * var object = { 'a': 1 };\n *\n * console.log(_.identity(object) === object);\n * // => true\n */\nfunction identity(value) {\n  return value;\n}\n\nmodule.exports = identity;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/identity.js?");

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ \"./node_modules/lodash/_baseIsArguments.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nvar isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {\n  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&\n    !propertyIsEnumerable.call(value, 'callee');\n};\n\nmodule.exports = isArguments;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isArguments.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var isFunction = __webpack_require__(/*! ./isFunction */ \"./node_modules/lodash/isFunction.js\"),\n    isLength = __webpack_require__(/*! ./isLength */ \"./node_modules/lodash/isLength.js\");\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\nmodule.exports = isArrayLike;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isArrayLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\nvar root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\"),\n    stubFalse = __webpack_require__(/*! ./stubFalse */ \"./node_modules/lodash/stubFalse.js\");\n\n/** Detect free variable `exports`. */\nvar freeExports =  true && exports && !exports.nodeType && exports;\n\n/** Detect free variable `module`. */\nvar freeModule = freeExports && \"object\" == 'object' && module && !module.nodeType && module;\n\n/** Detect the popular CommonJS extension `module.exports`. */\nvar moduleExports = freeModule && freeModule.exports === freeExports;\n\n/** Built-in value references. */\nvar Buffer = moduleExports ? root.Buffer : undefined;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;\n\n/**\n * Checks if `value` is a buffer.\n *\n * @static\n * @memberOf _\n * @since 4.3.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.\n * @example\n *\n * _.isBuffer(new Buffer(2));\n * // => true\n *\n * _.isBuffer(new Uint8Array(2));\n * // => false\n */\nvar isBuffer = nativeIsBuffer || stubFalse;\n\nmodule.exports = isBuffer;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isBuffer.js?");

/***/ }),

/***/ "./node_modules/lodash/isEqual.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isEqual.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ \"./node_modules/lodash/_baseIsEqual.js\");\n\n/**\n * Performs a deep comparison between two values to determine if they are\n * equivalent.\n *\n * **Note:** This method supports comparing arrays, array buffers, booleans,\n * date objects, error objects, maps, numbers, `Object` objects, regexes,\n * sets, strings, symbols, and typed arrays. `Object` objects are compared\n * by their own, not inherited, enumerable properties. Functions and DOM\n * nodes are compared by strict equality, i.e. `===`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to compare.\n * @param {*} other The other value to compare.\n * @returns {boolean} Returns `true` if the values are equivalent, else `false`.\n * @example\n *\n * var object = { 'a': 1 };\n * var other = { 'a': 1 };\n *\n * _.isEqual(object, other);\n * // => true\n *\n * object === other;\n * // => false\n */\nfunction isEqual(value, other) {\n  return baseIsEqual(value, other);\n}\n\nmodule.exports = isEqual;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isEqual.js?");

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\");\n\n/** `Object#toString` result references. */\nvar asyncTag = '[object AsyncFunction]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    proxyTag = '[object Proxy]';\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  if (!isObject(value)) {\n    return false;\n  }\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 9 which returns 'object' for typed arrays and other constructors.\n  var tag = baseGetTag(value);\n  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;\n}\n\nmodule.exports = isFunction;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isFunction.js?");

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\nmodule.exports = isLength;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isLength.js?");

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return value != null && (type == 'object' || type == 'function');\n}\n\nmodule.exports = isObject;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    getPrototype = __webpack_require__(/*! ./_getPrototype */ \"./node_modules/lodash/_getPrototype.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return typeof Ctor == 'function' && Ctor instanceof Ctor &&\n    funcToString.call(Ctor) == objectCtorString;\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isPlainObject.js?");

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && baseGetTag(value) == symbolTag);\n}\n\nmodule.exports = isSymbol;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isSymbol.js?");

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ \"./node_modules/lodash/_baseIsTypedArray.js\"),\n    baseUnary = __webpack_require__(/*! ./_baseUnary */ \"./node_modules/lodash/_baseUnary.js\"),\n    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ \"./node_modules/lodash/_nodeUtil.js\");\n\n/* Node.js helper references. */\nvar nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;\n\n/**\n * Checks if `value` is classified as a typed array.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.\n * @example\n *\n * _.isTypedArray(new Uint8Array);\n * // => true\n *\n * _.isTypedArray([]);\n * // => false\n */\nvar isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;\n\nmodule.exports = isTypedArray;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/isTypedArray.js?");

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ \"./node_modules/lodash/_arrayLikeKeys.js\"),\n    baseKeys = __webpack_require__(/*! ./_baseKeys */ \"./node_modules/lodash/_baseKeys.js\"),\n    isArrayLike = __webpack_require__(/*! ./isArrayLike */ \"./node_modules/lodash/isArrayLike.js\");\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\nmodule.exports = keys;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/keys.js?");

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var arrayMap = __webpack_require__(/*! ./_arrayMap */ \"./node_modules/lodash/_arrayMap.js\"),\n    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ \"./node_modules/lodash/_baseIteratee.js\"),\n    baseMap = __webpack_require__(/*! ./_baseMap */ \"./node_modules/lodash/_baseMap.js\"),\n    isArray = __webpack_require__(/*! ./isArray */ \"./node_modules/lodash/isArray.js\");\n\n/**\n * Creates an array of values by running each element in `collection` thru\n * `iteratee`. The iteratee is invoked with three arguments:\n * (value, index|key, collection).\n *\n * Many lodash methods are guarded to work as iteratees for methods like\n * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.\n *\n * The guarded methods are:\n * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,\n * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,\n * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,\n * `template`, `trim`, `trimEnd`, `trimStart`, and `words`\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object} collection The collection to iterate over.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n * @example\n *\n * function square(n) {\n *   return n * n;\n * }\n *\n * _.map([4, 8], square);\n * // => [16, 64]\n *\n * _.map({ 'a': 4, 'b': 8 }, square);\n * // => [16, 64] (iteration order is not guaranteed)\n *\n * var users = [\n *   { 'user': 'barney' },\n *   { 'user': 'fred' }\n * ];\n *\n * // The `_.property` iteratee shorthand.\n * _.map(users, 'user');\n * // => ['barney', 'fred']\n */\nfunction map(collection, iteratee) {\n  var func = isArray(collection) ? arrayMap : baseMap;\n  return func(collection, baseIteratee(iteratee, 3));\n}\n\nmodule.exports = map;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/map.js?");

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var MapCache = __webpack_require__(/*! ./_MapCache */ \"./node_modules/lodash/_MapCache.js\");\n\n/** Error message constants. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/**\n * Creates a function that memoizes the result of `func`. If `resolver` is\n * provided, it determines the cache key for storing the result based on the\n * arguments provided to the memoized function. By default, the first argument\n * provided to the memoized function is used as the map cache key. The `func`\n * is invoked with the `this` binding of the memoized function.\n *\n * **Note:** The cache is exposed as the `cache` property on the memoized\n * function. Its creation may be customized by replacing the `_.memoize.Cache`\n * constructor with one whose instances implement the\n * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)\n * method interface of `clear`, `delete`, `get`, `has`, and `set`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to have its output memoized.\n * @param {Function} [resolver] The function to resolve the cache key.\n * @returns {Function} Returns the new memoized function.\n * @example\n *\n * var object = { 'a': 1, 'b': 2 };\n * var other = { 'c': 3, 'd': 4 };\n *\n * var values = _.memoize(_.values);\n * values(object);\n * // => [1, 2]\n *\n * values(other);\n * // => [3, 4]\n *\n * object.a = 2;\n * values(object);\n * // => [1, 2]\n *\n * // Modify the result cache.\n * values.cache.set(object, ['a', 'b']);\n * values(object);\n * // => ['a', 'b']\n *\n * // Replace `_.memoize.Cache`.\n * _.memoize.Cache = WeakMap;\n */\nfunction memoize(func, resolver) {\n  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  var memoized = function() {\n    var args = arguments,\n        key = resolver ? resolver.apply(this, args) : args[0],\n        cache = memoized.cache;\n\n    if (cache.has(key)) {\n      return cache.get(key);\n    }\n    var result = func.apply(this, args);\n    memoized.cache = cache.set(key, result) || cache;\n    return result;\n  };\n  memoized.cache = new (memoize.Cache || MapCache);\n  return memoized;\n}\n\n// Expose `MapCache`.\nmemoize.Cache = MapCache;\n\nmodule.exports = memoize;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/memoize.js?");

/***/ }),

/***/ "./node_modules/lodash/pick.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/pick.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var basePick = __webpack_require__(/*! ./_basePick */ \"./node_modules/lodash/_basePick.js\"),\n    flatRest = __webpack_require__(/*! ./_flatRest */ \"./node_modules/lodash/_flatRest.js\");\n\n/**\n * Creates an object composed of the picked `object` properties.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The source object.\n * @param {...(string|string[])} [paths] The property paths to pick.\n * @returns {Object} Returns the new object.\n * @example\n *\n * var object = { 'a': 1, 'b': '2', 'c': 3 };\n *\n * _.pick(object, ['a', 'c']);\n * // => { 'a': 1, 'c': 3 }\n */\nvar pick = flatRest(function(object, paths) {\n  return object == null ? {} : basePick(object, paths);\n});\n\nmodule.exports = pick;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/pick.js?");

/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseProperty = __webpack_require__(/*! ./_baseProperty */ \"./node_modules/lodash/_baseProperty.js\"),\n    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ \"./node_modules/lodash/_basePropertyDeep.js\"),\n    isKey = __webpack_require__(/*! ./_isKey */ \"./node_modules/lodash/_isKey.js\"),\n    toKey = __webpack_require__(/*! ./_toKey */ \"./node_modules/lodash/_toKey.js\");\n\n/**\n * Creates a function that returns the value at `path` of a given object.\n *\n * @static\n * @memberOf _\n * @since 2.4.0\n * @category Util\n * @param {Array|string} path The path of the property to get.\n * @returns {Function} Returns the new accessor function.\n * @example\n *\n * var objects = [\n *   { 'a': { 'b': 2 } },\n *   { 'a': { 'b': 1 } }\n * ];\n *\n * _.map(objects, _.property('a.b'));\n * // => [2, 1]\n *\n * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');\n * // => [1, 2]\n */\nfunction property(path) {\n  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);\n}\n\nmodule.exports = property;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/property.js?");

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * This method returns a new empty array.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {Array} Returns the new empty array.\n * @example\n *\n * var arrays = _.times(2, _.stubArray);\n *\n * console.log(arrays);\n * // => [[], []]\n *\n * console.log(arrays[0] === arrays[1]);\n * // => false\n */\nfunction stubArray() {\n  return [];\n}\n\nmodule.exports = stubArray;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/stubArray.js?");

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

eval("/**\n * This method returns `false`.\n *\n * @static\n * @memberOf _\n * @since 4.13.0\n * @category Util\n * @returns {boolean} Returns `false`.\n * @example\n *\n * _.times(2, _.stubFalse);\n * // => [false, false]\n */\nfunction stubFalse() {\n  return false;\n}\n\nmodule.exports = stubFalse;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/stubFalse.js?");

/***/ }),

/***/ "./node_modules/lodash/times.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/times.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTimes = __webpack_require__(/*! ./_baseTimes */ \"./node_modules/lodash/_baseTimes.js\"),\n    castFunction = __webpack_require__(/*! ./_castFunction */ \"./node_modules/lodash/_castFunction.js\"),\n    toInteger = __webpack_require__(/*! ./toInteger */ \"./node_modules/lodash/toInteger.js\");\n\n/** Used as references for various `Number` constants. */\nvar MAX_SAFE_INTEGER = 9007199254740991;\n\n/** Used as references for the maximum length and index of an array. */\nvar MAX_ARRAY_LENGTH = 4294967295;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeMin = Math.min;\n\n/**\n * Invokes the iteratee `n` times, returning an array of the results of\n * each invocation. The iteratee is invoked with one argument; (index).\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Util\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} [iteratee=_.identity] The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n * @example\n *\n * _.times(3, String);\n * // => ['0', '1', '2']\n *\n *  _.times(4, _.constant(0));\n * // => [0, 0, 0, 0]\n */\nfunction times(n, iteratee) {\n  n = toInteger(n);\n  if (n < 1 || n > MAX_SAFE_INTEGER) {\n    return [];\n  }\n  var index = MAX_ARRAY_LENGTH,\n      length = nativeMin(n, MAX_ARRAY_LENGTH);\n\n  iteratee = castFunction(iteratee);\n  n -= MAX_ARRAY_LENGTH;\n\n  var result = baseTimes(length, iteratee);\n  while (++index < n) {\n    iteratee(index);\n  }\n  return result;\n}\n\nmodule.exports = times;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/times.js?");

/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toNumber = __webpack_require__(/*! ./toNumber */ \"./node_modules/lodash/toNumber.js\");\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308;\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\nmodule.exports = toFinite;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/toFinite.js?");

/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var toFinite = __webpack_require__(/*! ./toFinite */ \"./node_modules/lodash/toFinite.js\");\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\nmodule.exports = toInteger;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/toInteger.js?");

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseTrim = __webpack_require__(/*! ./_baseTrim */ \"./node_modules/lodash/_baseTrim.js\"),\n    isObject = __webpack_require__(/*! ./isObject */ \"./node_modules/lodash/isObject.js\"),\n    isSymbol = __webpack_require__(/*! ./isSymbol */ \"./node_modules/lodash/isSymbol.js\");\n\n/** Used as references for various `Number` constants. */\nvar NAN = 0 / 0;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = baseTrim(value);\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = toNumber;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/toNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var baseToString = __webpack_require__(/*! ./_baseToString */ \"./node_modules/lodash/_baseToString.js\");\n\n/**\n * Converts `value` to a string. An empty string is returned for `null`\n * and `undefined` values. The sign of `-0` is preserved.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n * @example\n *\n * _.toString(null);\n * // => ''\n *\n * _.toString(-0);\n * // => '-0'\n *\n * _.toString([1, 2, 3]);\n * // => '1,2,3'\n */\nfunction toString(value) {\n  return value == null ? '' : baseToString(value);\n}\n\nmodule.exports = toString;\n\n\n//# sourceURL=webpack://grist/./node_modules/lodash/toString.js?");

/***/ }),

/***/ "./node_modules/ts-interface-checker/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/ts-interface-checker/dist/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Checker = exports.createCheckers = void 0;\nvar types_1 = __webpack_require__(/*! ./types */ \"./node_modules/ts-interface-checker/dist/types.js\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./node_modules/ts-interface-checker/dist/util.js\");\n/**\n * Export functions used to define interfaces.\n */\nvar types_2 = __webpack_require__(/*! ./types */ \"./node_modules/ts-interface-checker/dist/types.js\");\nObject.defineProperty(exports, \"TArray\", ({ enumerable: true, get: function () { return types_2.TArray; } }));\nObject.defineProperty(exports, \"TEnumType\", ({ enumerable: true, get: function () { return types_2.TEnumType; } }));\nObject.defineProperty(exports, \"TEnumLiteral\", ({ enumerable: true, get: function () { return types_2.TEnumLiteral; } }));\nObject.defineProperty(exports, \"TFunc\", ({ enumerable: true, get: function () { return types_2.TFunc; } }));\nObject.defineProperty(exports, \"TIface\", ({ enumerable: true, get: function () { return types_2.TIface; } }));\nObject.defineProperty(exports, \"TLiteral\", ({ enumerable: true, get: function () { return types_2.TLiteral; } }));\nObject.defineProperty(exports, \"TName\", ({ enumerable: true, get: function () { return types_2.TName; } }));\nObject.defineProperty(exports, \"TOptional\", ({ enumerable: true, get: function () { return types_2.TOptional; } }));\nObject.defineProperty(exports, \"TParam\", ({ enumerable: true, get: function () { return types_2.TParam; } }));\nObject.defineProperty(exports, \"TParamList\", ({ enumerable: true, get: function () { return types_2.TParamList; } }));\nObject.defineProperty(exports, \"TProp\", ({ enumerable: true, get: function () { return types_2.TProp; } }));\nObject.defineProperty(exports, \"TTuple\", ({ enumerable: true, get: function () { return types_2.TTuple; } }));\nObject.defineProperty(exports, \"TType\", ({ enumerable: true, get: function () { return types_2.TType; } }));\nObject.defineProperty(exports, \"TUnion\", ({ enumerable: true, get: function () { return types_2.TUnion; } }));\nObject.defineProperty(exports, \"TIntersection\", ({ enumerable: true, get: function () { return types_2.TIntersection; } }));\nObject.defineProperty(exports, \"array\", ({ enumerable: true, get: function () { return types_2.array; } }));\nObject.defineProperty(exports, \"enumlit\", ({ enumerable: true, get: function () { return types_2.enumlit; } }));\nObject.defineProperty(exports, \"enumtype\", ({ enumerable: true, get: function () { return types_2.enumtype; } }));\nObject.defineProperty(exports, \"func\", ({ enumerable: true, get: function () { return types_2.func; } }));\nObject.defineProperty(exports, \"iface\", ({ enumerable: true, get: function () { return types_2.iface; } }));\nObject.defineProperty(exports, \"lit\", ({ enumerable: true, get: function () { return types_2.lit; } }));\nObject.defineProperty(exports, \"name\", ({ enumerable: true, get: function () { return types_2.name; } }));\nObject.defineProperty(exports, \"opt\", ({ enumerable: true, get: function () { return types_2.opt; } }));\nObject.defineProperty(exports, \"param\", ({ enumerable: true, get: function () { return types_2.param; } }));\nObject.defineProperty(exports, \"tuple\", ({ enumerable: true, get: function () { return types_2.tuple; } }));\nObject.defineProperty(exports, \"union\", ({ enumerable: true, get: function () { return types_2.union; } }));\nObject.defineProperty(exports, \"intersection\", ({ enumerable: true, get: function () { return types_2.intersection; } }));\nObject.defineProperty(exports, \"rest\", ({ enumerable: true, get: function () { return types_2.rest; } }));\nObject.defineProperty(exports, \"indexKey\", ({ enumerable: true, get: function () { return types_2.indexKey; } }));\nObject.defineProperty(exports, \"BasicType\", ({ enumerable: true, get: function () { return types_2.BasicType; } }));\nvar util_2 = __webpack_require__(/*! ./util */ \"./node_modules/ts-interface-checker/dist/util.js\");\nObject.defineProperty(exports, \"VError\", ({ enumerable: true, get: function () { return util_2.VError; } }));\n/**\n * Takes one of more type suites (e.g. a module generated by `ts-interface-builder`), and combines\n * them into a suite of interface checkers. If a type is used by name, that name should be present\n * among the passed-in type suites.\n *\n * The returned object maps type names to Checker objects.\n */\nfunction createCheckers() {\n    var typeSuite = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        typeSuite[_i] = arguments[_i];\n    }\n    var fullSuite = Object.assign.apply(Object, __spreadArrays([{}, types_1.basicTypes], typeSuite));\n    var checkers = {};\n    for (var _a = 0, typeSuite_1 = typeSuite; _a < typeSuite_1.length; _a++) {\n        var suite_1 = typeSuite_1[_a];\n        for (var _b = 0, _c = Object.keys(suite_1); _b < _c.length; _b++) {\n            var name = _c[_b];\n            checkers[name] = new Checker(fullSuite, suite_1[name]);\n        }\n    }\n    return checkers;\n}\nexports.createCheckers = createCheckers;\n/**\n * Checker implements validation of objects, and also includes accessors to validate method calls.\n * Checkers should be created using `createCheckers()`.\n */\nvar Checker = /** @class */ (function () {\n    // Create checkers by using `createCheckers()` function.\n    function Checker(suite, ttype, _path) {\n        if (_path === void 0) { _path = 'value'; }\n        this.suite = suite;\n        this.ttype = ttype;\n        this._path = _path;\n        this.props = new Map();\n        if (ttype instanceof types_1.TIface) {\n            for (var _i = 0, _a = ttype.props; _i < _a.length; _i++) {\n                var p = _a[_i];\n                this.props.set(p.name, p.ttype);\n            }\n        }\n        this.checkerPlain = this.ttype.getChecker(suite, false);\n        this.checkerStrict = this.ttype.getChecker(suite, true);\n    }\n    /**\n     * Set the path to report in errors, instead of the default \"value\". (E.g. if the Checker is for\n     * a \"person\" interface, set path to \"person\" to report e.g. \"person.name is not a string\".)\n     */\n    Checker.prototype.setReportedPath = function (path) {\n        this._path = path;\n    };\n    /**\n     * Check that the given value satisfies this checker's type, or throw Error.\n     */\n    Checker.prototype.check = function (value) { return this._doCheck(this.checkerPlain, value); };\n    /**\n     * A fast check for whether or not the given value satisfies this Checker's type. This returns\n     * true or false, does not produce an error message, and is fast both on success and on failure.\n     */\n    Checker.prototype.test = function (value) {\n        return this.checkerPlain(value, new util_1.NoopContext());\n    };\n    /**\n     * Returns a non-empty array of error objects describing the errors if the given value does not satisfy this\n     * Checker's type, or null if it does.\n     */\n    Checker.prototype.validate = function (value) {\n        return this._doValidate(this.checkerPlain, value);\n    };\n    /**\n     * Check that the given value satisfies this checker's type strictly. This checks that objects\n     * and tuples have no extra members. Note that this prevents backward compatibility, so usually\n     * a plain check() is more appropriate.\n     */\n    Checker.prototype.strictCheck = function (value) { return this._doCheck(this.checkerStrict, value); };\n    /**\n     * A fast strict check for whether or not the given value satisfies this Checker's type. Returns\n     * true or false, does not produce an error message, and is fast both on success and on failure.\n     */\n    Checker.prototype.strictTest = function (value) {\n        return this.checkerStrict(value, new util_1.NoopContext());\n    };\n    /**\n     * Returns a non-empty array of error objects describing the errors if the given value does not satisfy this\n     * Checker's type strictly, or null if it does.\n     */\n    Checker.prototype.strictValidate = function (value) {\n        return this._doValidate(this.checkerStrict, value);\n    };\n    /**\n     * If this checker is for an interface, returns a Checker for the type required for the given\n     * property of this interface.\n     */\n    Checker.prototype.getProp = function (prop) {\n        var ttype = this.props.get(prop);\n        if (!ttype) {\n            throw new Error(\"Type has no property \" + prop);\n        }\n        return new Checker(this.suite, ttype, this._path + \".\" + prop);\n    };\n    /**\n     * If this checker is for an interface, returns a Checker for the argument-list required to call\n     * the given method of this interface. E.g. if this Checker is for the interface:\n     *    interface Foo {\n     *      find(s: string, pos?: number): number;\n     *    }\n     * Then methodArgs(\"find\").check(...) will succeed for [\"foo\"] and [\"foo\", 3], but not for [17].\n     */\n    Checker.prototype.methodArgs = function (methodName) {\n        var tfunc = this._getMethod(methodName);\n        return new Checker(this.suite, tfunc.paramList);\n    };\n    /**\n     * If this checker is for an interface, returns a Checker for the return value of the given\n     * method of this interface.\n     */\n    Checker.prototype.methodResult = function (methodName) {\n        var tfunc = this._getMethod(methodName);\n        return new Checker(this.suite, tfunc.result);\n    };\n    /**\n     * If this checker is for a function, returns a Checker for its argument-list.\n     */\n    Checker.prototype.getArgs = function () {\n        if (!(this.ttype instanceof types_1.TFunc)) {\n            throw new Error(\"getArgs() applied to non-function\");\n        }\n        return new Checker(this.suite, this.ttype.paramList);\n    };\n    /**\n     * If this checker is for a function, returns a Checker for its result.\n     */\n    Checker.prototype.getResult = function () {\n        if (!(this.ttype instanceof types_1.TFunc)) {\n            throw new Error(\"getResult() applied to non-function\");\n        }\n        return new Checker(this.suite, this.ttype.result);\n    };\n    /**\n     * Return the type for which this is a checker.\n     */\n    Checker.prototype.getType = function () {\n        return this.ttype;\n    };\n    /**\n     * Actual implementation of check() and strictCheck().\n     */\n    Checker.prototype._doCheck = function (checkerFunc, value) {\n        var noopCtx = new util_1.NoopContext();\n        if (!checkerFunc(value, noopCtx)) {\n            var detailCtx = new util_1.DetailContext();\n            checkerFunc(value, detailCtx);\n            throw detailCtx.getError(this._path);\n        }\n    };\n    Checker.prototype._doValidate = function (checkerFunc, value) {\n        var noopCtx = new util_1.NoopContext();\n        if (checkerFunc(value, noopCtx)) {\n            return null;\n        }\n        var detailCtx = new util_1.DetailContext();\n        checkerFunc(value, detailCtx);\n        return detailCtx.getErrorDetails(this._path);\n    };\n    Checker.prototype._getMethod = function (methodName) {\n        var ttype = this.props.get(methodName);\n        if (!ttype) {\n            throw new Error(\"Type has no property \" + methodName);\n        }\n        if (!(ttype instanceof types_1.TFunc)) {\n            throw new Error(\"Property \" + methodName + \" is not a method\");\n        }\n        return ttype;\n    };\n    return Checker;\n}());\nexports.Checker = Checker;\n\n\n//# sourceURL=webpack://grist/./node_modules/ts-interface-checker/dist/index.js?");

/***/ }),

/***/ "./node_modules/ts-interface-checker/dist/types.js":
/*!*********************************************************!*\
  !*** ./node_modules/ts-interface-checker/dist/types.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n/**\n * This module defines nodes used to define types and validations for objects and interfaces.\n */\n// tslint:disable:no-shadowed-variable prefer-for-of\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.basicTypes = exports.BasicType = exports.TParamList = exports.TParam = exports.param = exports.TFunc = exports.func = exports.TProp = exports.TOptional = exports.opt = exports.TIface = exports.iface = exports.indexKey = exports.TEnumLiteral = exports.enumlit = exports.TEnumType = exports.enumtype = exports.TIntersection = exports.intersection = exports.TUnion = exports.union = exports.TTuple = exports.tuple = exports.RestType = exports.rest = exports.TArray = exports.array = exports.TLiteral = exports.lit = exports.TName = exports.name = exports.TType = void 0;\nvar util_1 = __webpack_require__(/*! ./util */ \"./node_modules/ts-interface-checker/dist/util.js\");\n/** Node that represents a type. */\nvar TType = /** @class */ (function () {\n    function TType() {\n    }\n    return TType;\n}());\nexports.TType = TType;\n/** Parses a type spec into a TType node. */\nfunction parseSpec(typeSpec) {\n    return typeof typeSpec === \"string\" ? name(typeSpec) : typeSpec;\n}\nfunction getNamedType(suite, name) {\n    var ttype = suite[name];\n    if (!ttype) {\n        throw new Error(\"Unknown type \" + name);\n    }\n    return ttype;\n}\n/**\n * Defines a type name, either built-in, or defined in this suite. It can typically be included in\n * the specs as just a plain string.\n */\nfunction name(value) { return new TName(value); }\nexports.name = name;\nvar TName = /** @class */ (function (_super) {\n    __extends(TName, _super);\n    function TName(name) {\n        var _this = _super.call(this) || this;\n        _this.name = name;\n        _this._failMsg = \"is not a \" + name;\n        return _this;\n    }\n    TName.prototype.getChecker = function (suite, strict, allowedProps) {\n        // Using names, we can reference a type recursively in its own definition. To avoid an\n        // infinite recursion in getChecker() calls, we cache and reuse the checker that's being built\n        // when it references its own TName node. Note that it's important to reuse the result only\n        // when getChecker() is called with the same arguments, but that's already guaranteed because\n        // we are caching only for the current call and only for the same TName object (not another\n        // instance of name() call for the same name).\n        //\n        // Note also that this is about handling recursive types; it does NOT help validating data\n        // with circular references.\n        var checkerFunc = this._checkerBeingBuilt;\n        if (!checkerFunc) {\n            this._checkerBeingBuilt = function (value, ctx) { return checkerFunc(value, ctx); };\n            try {\n                checkerFunc = this._getChecker(suite, strict, allowedProps);\n            }\n            finally {\n                this._checkerBeingBuilt = undefined;\n            }\n        }\n        return checkerFunc;\n    };\n    TName.prototype._getChecker = function (suite, strict, allowedProps) {\n        var _this = this;\n        var ttype = getNamedType(suite, this.name);\n        var checker = ttype.getChecker(suite, strict, allowedProps);\n        if (ttype instanceof BasicType || ttype instanceof TName) {\n            return checker;\n        }\n        // For complex types, add an additional \"is not a <Type>\" message on failure.\n        return function (value, ctx) { return checker(value, ctx) ? true : ctx.fail(null, _this._failMsg, 0); };\n    };\n    return TName;\n}(TType));\nexports.TName = TName;\n/**\n * Defines a literal value, e.g. lit('hello') or lit(123).\n */\nfunction lit(value) { return new TLiteral(value); }\nexports.lit = lit;\nvar TLiteral = /** @class */ (function (_super) {\n    __extends(TLiteral, _super);\n    function TLiteral(value) {\n        var _this = _super.call(this) || this;\n        _this.value = value;\n        _this.name = JSON.stringify(value);\n        _this._failMsg = \"is not \" + _this.name;\n        return _this;\n    }\n    TLiteral.prototype.getChecker = function (suite, strict) {\n        var _this = this;\n        return function (value, ctx) { return (value === _this.value) ? true : ctx.fail(null, _this._failMsg, -1); };\n    };\n    return TLiteral;\n}(TType));\nexports.TLiteral = TLiteral;\n/**\n * Defines an array type, e.g. array('number').\n */\nfunction array(typeSpec) { return new TArray(parseSpec(typeSpec)); }\nexports.array = array;\nvar TArray = /** @class */ (function (_super) {\n    __extends(TArray, _super);\n    function TArray(ttype) {\n        var _this = _super.call(this) || this;\n        _this.ttype = ttype;\n        var elementTypeName = getTypeName(ttype);\n        if (elementTypeName) {\n            _this.name = elementTypeName + \"[]\";\n        }\n        return _this;\n    }\n    TArray.prototype.getChecker = function (suite, strict) {\n        var itemChecker = this.ttype.getChecker(suite, strict);\n        return function (value, ctx) {\n            if (!Array.isArray(value)) {\n                return ctx.fail(null, \"is not an array\", 0);\n            }\n            for (var i = 0; i < value.length; i++) {\n                var ok = itemChecker(value[i], ctx);\n                if (!ok) {\n                    return ctx.fail(i, null, 1);\n                }\n            }\n            return true;\n        };\n    };\n    return TArray;\n}(TType));\nexports.TArray = TArray;\n/**\n * Defines a rest type, e.g. tuple('string', rest(array('number'))).\n */\nfunction rest(typeSpec) {\n    return new RestType(typeSpec);\n}\nexports.rest = rest;\nvar RestType = /** @class */ (function (_super) {\n    __extends(RestType, _super);\n    function RestType(typeSpec) {\n        var _this = _super.call(this) || this;\n        _this.typeSpec = typeSpec;\n        return _this;\n    }\n    RestType.prototype.setStart = function (start) {\n        this._start = start;\n    };\n    RestType.prototype.getChecker = function (suite, strict) {\n        var arrType = typeof this.typeSpec === \"string\" ? getNamedType(suite, this.typeSpec) : this.typeSpec;\n        if (!(arrType instanceof TArray)) {\n            throw new Error(\"Rest type must be an array\");\n        }\n        var itemChecker = arrType.ttype.getChecker(suite, strict);\n        var start = this._start;\n        return function (value, ctx) {\n            for (var i = start; i < value.length; i++) {\n                if (!itemChecker(value[i], ctx)) {\n                    return ctx.fail(i, null, 1);\n                }\n            }\n            return true;\n        };\n    };\n    return RestType;\n}(TType));\nexports.RestType = RestType;\n/**\n * Defines a tuple type, e.g. tuple('string', 'number').\n */\nfunction tuple() {\n    var typeSpec = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        typeSpec[_i] = arguments[_i];\n    }\n    return new TTuple(typeSpec.map(function (t) { return parseSpec(t); }));\n}\nexports.tuple = tuple;\nvar TTuple = /** @class */ (function (_super) {\n    __extends(TTuple, _super);\n    function TTuple(ttypes) {\n        var _this = _super.call(this) || this;\n        _this.ttypes = ttypes;\n        var last = ttypes[ttypes.length - 1];\n        if (last instanceof RestType) {\n            ttypes.pop();\n            _this._restType = last;\n            _this._restType.setStart(ttypes.length);\n        }\n        return _this;\n    }\n    TTuple.prototype.getChecker = function (suite, strict) {\n        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict); });\n        var checker = function (value, ctx) {\n            if (!Array.isArray(value)) {\n                return ctx.fail(null, \"is not an array\", 0);\n            }\n            for (var i = 0; i < itemCheckers.length; i++) {\n                var ok = itemCheckers[i](value[i], ctx);\n                if (!ok) {\n                    return ctx.fail(i, null, 1);\n                }\n            }\n            return true;\n        };\n        if (this._restType) {\n            var restChecker_1 = this._restType.getChecker(suite, strict);\n            return function (value, ctx) {\n                return checker(value, ctx) && restChecker_1(value, ctx);\n            };\n        }\n        if (!strict) {\n            return checker;\n        }\n        return function (value, ctx) {\n            if (!checker(value, ctx)) {\n                return false;\n            }\n            return value.length <= itemCheckers.length ? true :\n                ctx.fail(itemCheckers.length, \"is extraneous\", 2);\n        };\n    };\n    return TTuple;\n}(TType));\nexports.TTuple = TTuple;\n/**\n * Defines a union type, e.g. union('number', 'null').\n */\nfunction union() {\n    var typeSpec = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        typeSpec[_i] = arguments[_i];\n    }\n    return new TUnion(typeSpec.map(function (t) { return parseSpec(t); }));\n}\nexports.union = union;\nvar TUnion = /** @class */ (function (_super) {\n    __extends(TUnion, _super);\n    function TUnion(ttypes) {\n        var _this = _super.call(this) || this;\n        _this.ttypes = ttypes;\n        var names = ttypes.map(getTypeName)\n            .filter(function (n) { return n; });\n        var otherTypes = ttypes.length - names.length;\n        if (names.length) {\n            if (otherTypes > 0) {\n                names.push(otherTypes + \" more\");\n            }\n            _this._failMsg = \"is none of \" + names.join(\", \");\n        }\n        else {\n            _this._failMsg = \"is none of \" + otherTypes + \" types\";\n        }\n        return _this;\n    }\n    TUnion.prototype.getChecker = function (suite, strict, allowedProps) {\n        var _this = this;\n        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict, allowedProps); });\n        return function (value, ctx) {\n            var ur = ctx.unionResolver();\n            for (var i = 0; i < itemCheckers.length; i++) {\n                var ok = itemCheckers[i](value, ur.createContext());\n                if (ok) {\n                    return true;\n                }\n            }\n            ctx.resolveUnion(ur);\n            return ctx.fail(null, _this._failMsg, 0);\n        };\n    };\n    return TUnion;\n}(TType));\nexports.TUnion = TUnion;\n/**\n * Defines an intersection type, e.g. intersection('number', 'null').\n */\nfunction intersection() {\n    var typeSpec = [];\n    for (var _i = 0; _i < arguments.length; _i++) {\n        typeSpec[_i] = arguments[_i];\n    }\n    return new TIntersection(typeSpec.map(function (t) { return parseSpec(t); }));\n}\nexports.intersection = intersection;\nvar TIntersection = /** @class */ (function (_super) {\n    __extends(TIntersection, _super);\n    function TIntersection(ttypes) {\n        var _this = _super.call(this) || this;\n        _this.ttypes = ttypes;\n        return _this;\n    }\n    TIntersection.prototype.getChecker = function (suite, strict, allowedProps) {\n        if (allowedProps === void 0) { allowedProps = new Set(); }\n        var itemCheckers = this.ttypes.map(function (t) { return t.getChecker(suite, strict, allowedProps); });\n        return function (value, ctx) {\n            return itemCheckers.every(function (checker) {\n                checker(value, ctx.fork());\n                return ctx.completeFork();\n            }) && !ctx.failed();\n        };\n    };\n    return TIntersection;\n}(TType));\nexports.TIntersection = TIntersection;\n/**\n * Defines an enum type, e.g. enum({'A': 1, 'B': 2}).\n */\nfunction enumtype(values) {\n    return new TEnumType(values);\n}\nexports.enumtype = enumtype;\nvar TEnumType = /** @class */ (function (_super) {\n    __extends(TEnumType, _super);\n    function TEnumType(members) {\n        var _this = _super.call(this) || this;\n        _this.members = members;\n        _this.validValues = new Set();\n        _this._failMsg = \"is not a valid enum value\";\n        _this.validValues = new Set(Object.keys(members).map(function (name) { return members[name]; }));\n        return _this;\n    }\n    TEnumType.prototype.getChecker = function (suite, strict) {\n        var _this = this;\n        return function (value, ctx) {\n            return (_this.validValues.has(value) ? true : ctx.fail(null, _this._failMsg, 0));\n        };\n    };\n    return TEnumType;\n}(TType));\nexports.TEnumType = TEnumType;\n/**\n * Defines a literal enum value, such as Direction.Up, specified as enumlit(\"Direction\", \"Up\").\n */\nfunction enumlit(name, prop) {\n    return new TEnumLiteral(name, prop);\n}\nexports.enumlit = enumlit;\nvar TEnumLiteral = /** @class */ (function (_super) {\n    __extends(TEnumLiteral, _super);\n    function TEnumLiteral(enumName, prop) {\n        var _this = _super.call(this) || this;\n        _this.enumName = enumName;\n        _this.prop = prop;\n        _this._failMsg = \"is not \" + enumName + \".\" + prop;\n        return _this;\n    }\n    TEnumLiteral.prototype.getChecker = function (suite, strict) {\n        var _this = this;\n        var ttype = getNamedType(suite, this.enumName);\n        if (!(ttype instanceof TEnumType)) {\n            throw new Error(\"Type \" + this.enumName + \" used in enumlit is not an enum type\");\n        }\n        var val = ttype.members[this.prop];\n        if (!ttype.members.hasOwnProperty(this.prop)) {\n            throw new Error(\"Unknown value \" + this.enumName + \".\" + this.prop + \" used in enumlit\");\n        }\n        return function (value, ctx) { return (value === val) ? true : ctx.fail(null, _this._failMsg, -1); };\n    };\n    return TEnumLiteral;\n}(TType));\nexports.TEnumLiteral = TEnumLiteral;\nfunction makeIfaceProps(props) {\n    return Object.keys(props)\n        .filter(function (name) { return (name !== exports.indexKey); })\n        .map(function (name) { return makeIfaceProp(name, props[name]); });\n}\nfunction makeIfaceProp(name, prop) {\n    return prop instanceof TOptional ?\n        new TProp(name, prop.ttype, true) :\n        new TProp(name, parseSpec(prop), false);\n}\n/**\n * indexKey is a special key that indicates an index signature when used as a key in an interface.\n * E.g. {[key: string]: number} becomes t.iface([], {[t.indexKey]: \"number\"}).\n *\n * We don't distinguish between string- and number-type index signatures, and don't support\n * multiple index signatures.\n */\nexports.indexKey = Symbol();\n/**\n * Defines an interface. The first argument is an array of interfaces that it extends, and the\n * second is an array of properties.\n */\nfunction iface(bases, props) {\n    return new TIface(bases, makeIfaceProps(props), props[exports.indexKey]);\n}\nexports.iface = iface;\nvar TIface = /** @class */ (function (_super) {\n    __extends(TIface, _super);\n    function TIface(bases, props, indexType) {\n        var _this = _super.call(this) || this;\n        _this.bases = bases;\n        _this.props = props;\n        _this.indexType = indexType ? parseSpec(indexType) : undefined;\n        _this.propSet = new Set(props.map(function (p) { return p.name; }));\n        return _this;\n    }\n    TIface.prototype.getChecker = function (suite, strict, allowedProps) {\n        var _this = this;\n        var _a;\n        if (allowedProps === void 0) { allowedProps = new Set(); }\n        this.propSet.forEach(function (prop) { return allowedProps.add(prop); });\n        var baseCheckers = this.bases.map(function (b) { return getNamedType(suite, b).getChecker(suite, strict, allowedProps); });\n        var propCheckers = this.props.map(function (prop) { return prop.ttype.getChecker(suite, strict); });\n        var indexTypeChecker = (_a = this.indexType) === null || _a === void 0 ? void 0 : _a.getChecker(suite, strict);\n        var testCtx = new util_1.NoopContext();\n        // Consider a prop required if it's not optional AND does not allow for undefined as a value.\n        var isPropRequired = this.props.map(function (prop, i) {\n            return !prop.isOpt && !propCheckers[i](undefined, testCtx);\n        });\n        return function (value, ctx) {\n            if (typeof value !== \"object\" || value === null) {\n                return ctx.fail(null, \"is not an object\", 0);\n            }\n            for (var i = 0; i < baseCheckers.length; i++) {\n                baseCheckers[i](value, ctx.fork());\n                if (!ctx.completeFork()) {\n                    return false;\n                }\n            }\n            for (var i = 0; i < propCheckers.length; i++) {\n                var name_1 = _this.props[i].name;\n                var v = value[name_1];\n                if (v === undefined) {\n                    if (isPropRequired[i]) {\n                        ctx.fork().fail(name_1, \"is missing\", 1);\n                        if (!ctx.completeFork()) {\n                            return false;\n                        }\n                    }\n                }\n                else {\n                    var fork = ctx.fork();\n                    var ok = propCheckers[i](v, fork);\n                    if (!ok) {\n                        fork.fail(name_1, null, 1);\n                    }\n                    if (!ctx.completeFork()) {\n                        return false;\n                    }\n                }\n            }\n            if (indexTypeChecker) {\n                for (var prop in value) {\n                    var fork = ctx.fork();\n                    if (!indexTypeChecker(value[prop], fork)) {\n                        fork.fail(prop, null, 1);\n                    }\n                    if (!ctx.completeFork()) {\n                        return false;\n                    }\n                }\n            }\n            else if (strict) {\n                // In strict mode, check also for unknown enumerable properties.\n                for (var prop in value) {\n                    if (!allowedProps.has(prop)) {\n                        ctx.fork().fail(prop, \"is extraneous\", 2);\n                        if (!ctx.completeFork()) {\n                            return false;\n                        }\n                    }\n                }\n            }\n            return !ctx.failed();\n        };\n    };\n    return TIface;\n}(TType));\nexports.TIface = TIface;\n/**\n * Defines an optional property on an interface.\n */\nfunction opt(typeSpec) { return new TOptional(parseSpec(typeSpec)); }\nexports.opt = opt;\nvar TOptional = /** @class */ (function (_super) {\n    __extends(TOptional, _super);\n    function TOptional(ttype) {\n        var _this = _super.call(this) || this;\n        _this.ttype = ttype;\n        return _this;\n    }\n    TOptional.prototype.getChecker = function (suite, strict) {\n        var itemChecker = this.ttype.getChecker(suite, strict);\n        return function (value, ctx) {\n            return value === undefined || itemChecker(value, ctx);\n        };\n    };\n    return TOptional;\n}(TType));\nexports.TOptional = TOptional;\n/**\n * Defines a property in an interface.\n */\nvar TProp = /** @class */ (function () {\n    function TProp(name, ttype, isOpt) {\n        this.name = name;\n        this.ttype = ttype;\n        this.isOpt = isOpt;\n    }\n    return TProp;\n}());\nexports.TProp = TProp;\n/**\n * Defines a function. The first argument declares the function's return type, the rest declare\n * its parameters.\n */\nfunction func(resultSpec) {\n    var params = [];\n    for (var _i = 1; _i < arguments.length; _i++) {\n        params[_i - 1] = arguments[_i];\n    }\n    return new TFunc(new TParamList(params), parseSpec(resultSpec));\n}\nexports.func = func;\nvar TFunc = /** @class */ (function (_super) {\n    __extends(TFunc, _super);\n    function TFunc(paramList, result) {\n        var _this = _super.call(this) || this;\n        _this.paramList = paramList;\n        _this.result = result;\n        return _this;\n    }\n    TFunc.prototype.getChecker = function (suite, strict) {\n        return function (value, ctx) {\n            return typeof value === \"function\" ? true : ctx.fail(null, \"is not a function\", 0);\n        };\n    };\n    return TFunc;\n}(TType));\nexports.TFunc = TFunc;\n/**\n * Defines a function parameter.\n */\nfunction param(name, typeSpec, isOpt) {\n    return new TParam(name, parseSpec(typeSpec), Boolean(isOpt));\n}\nexports.param = param;\nvar TParam = /** @class */ (function () {\n    function TParam(name, ttype, isOpt) {\n        this.name = name;\n        this.ttype = ttype;\n        this.isOpt = isOpt;\n    }\n    return TParam;\n}());\nexports.TParam = TParam;\n/**\n * Defines a function parameter list.\n */\nvar TParamList = /** @class */ (function (_super) {\n    __extends(TParamList, _super);\n    function TParamList(params) {\n        var _this = _super.call(this) || this;\n        _this.params = params;\n        return _this;\n    }\n    TParamList.prototype.getChecker = function (suite, strict) {\n        var _this = this;\n        var itemCheckers = this.params.map(function (t) { return t.ttype.getChecker(suite, strict); });\n        var testCtx = new util_1.NoopContext();\n        var isParamRequired = this.params.map(function (param, i) {\n            return !param.isOpt && !itemCheckers[i](undefined, testCtx);\n        });\n        var checker = function (value, ctx) {\n            if (!Array.isArray(value)) {\n                return ctx.fail(null, \"is not an array\", 0);\n            }\n            for (var i = 0; i < itemCheckers.length; i++) {\n                var p = _this.params[i];\n                if (value[i] === undefined) {\n                    if (isParamRequired[i]) {\n                        return ctx.fail(p.name, \"is missing\", 1);\n                    }\n                }\n                else {\n                    var ok = itemCheckers[i](value[i], ctx);\n                    if (!ok) {\n                        return ctx.fail(p.name, null, 1);\n                    }\n                }\n            }\n            return true;\n        };\n        if (!strict) {\n            return checker;\n        }\n        return function (value, ctx) {\n            if (!checker(value, ctx)) {\n                return false;\n            }\n            return value.length <= itemCheckers.length ? true :\n                ctx.fail(itemCheckers.length, \"is extraneous\", 2);\n        };\n    };\n    return TParamList;\n}(TType));\nexports.TParamList = TParamList;\n/**\n * Single TType implementation for all basic built-in types.\n */\nvar BasicType = /** @class */ (function (_super) {\n    __extends(BasicType, _super);\n    function BasicType(validator, message) {\n        var _this = _super.call(this) || this;\n        _this.validator = validator;\n        _this.message = message;\n        return _this;\n    }\n    BasicType.prototype.getChecker = function (suite, strict) {\n        var _this = this;\n        return function (value, ctx) { return _this.validator(value) ? true : ctx.fail(null, _this.message, 0); };\n    };\n    return BasicType;\n}(TType));\nexports.BasicType = BasicType;\n/**\n * Defines the suite of basic types.\n */\nexports.basicTypes = {\n    any: new BasicType(function (v) { return true; }, \"is invalid\"),\n    unknown: new BasicType(function (v) { return true; }, \"is invalid\"),\n    number: new BasicType(function (v) { return (typeof v === \"number\"); }, \"is not a number\"),\n    object: new BasicType(function (v) { return (typeof v === \"object\" && v); }, \"is not an object\"),\n    boolean: new BasicType(function (v) { return (typeof v === \"boolean\"); }, \"is not a boolean\"),\n    string: new BasicType(function (v) { return (typeof v === \"string\"); }, \"is not a string\"),\n    symbol: new BasicType(function (v) { return (typeof v === \"symbol\"); }, \"is not a symbol\"),\n    void: new BasicType(function (v) { return (v == null); }, \"is not void\"),\n    undefined: new BasicType(function (v) { return (v === undefined); }, \"is not undefined\"),\n    null: new BasicType(function (v) { return (v === null); }, \"is not null\"),\n    never: new BasicType(function (v) { return false; }, \"is unexpected\"),\n    Date: new BasicType(getIsNativeChecker(\"[object Date]\"), \"is not a Date\"),\n    RegExp: new BasicType(getIsNativeChecker(\"[object RegExp]\"), \"is not a RegExp\"),\n};\n// This approach for checking native object types mirrors that of lodash. Its advantage over\n// `isinstance` is that it can still return true for native objects created in different JS\n// execution environments.\nvar nativeToString = Object.prototype.toString;\nfunction getIsNativeChecker(tag) {\n    return function (v) { return typeof v === \"object\" && v && nativeToString.call(v) === tag; };\n}\nif (typeof Buffer !== \"undefined\") {\n    exports.basicTypes.Buffer = new BasicType(function (v) { return Buffer.isBuffer(v); }, \"is not a Buffer\");\n}\nvar _loop_1 = function (array_1) {\n    exports.basicTypes[array_1.name] = new BasicType(function (v) { return (v instanceof array_1); }, \"is not a \" + array_1.name);\n};\n// Support typed arrays of various flavors\nfor (var _i = 0, _a = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array,\n    Int32Array, Uint32Array, Float32Array, Float64Array, ArrayBuffer]; _i < _a.length; _i++) {\n    var array_1 = _a[_i];\n    _loop_1(array_1);\n}\nfunction getTypeName(t) {\n    if (t instanceof TName || t instanceof TLiteral || t instanceof TArray) {\n        return t.name;\n    }\n}\n\n\n//# sourceURL=webpack://grist/./node_modules/ts-interface-checker/dist/types.js?");

/***/ }),

/***/ "./node_modules/ts-interface-checker/dist/util.js":
/*!********************************************************!*\
  !*** ./node_modules/ts-interface-checker/dist/util.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar __extends = (this && this.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DetailContext = exports.NoopContext = exports.VError = void 0;\n/**\n * Error thrown by validation. Besides an informative message, it includes the path to the\n * property which triggered the failure.\n */\nvar VError = /** @class */ (function (_super) {\n    __extends(VError, _super);\n    function VError(path, message) {\n        var _this = _super.call(this, message) || this;\n        _this.path = path;\n        // See https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work for info about this workaround.\n        Object.setPrototypeOf(_this, VError.prototype);\n        return _this;\n    }\n    return VError;\n}(Error));\nexports.VError = VError;\n/**\n * Fast implementation of IContext used for first-pass validation. If that fails, we can validate\n * using DetailContext to collect error messages. That's faster for the common case when messages\n * normally pass validation.\n */\nvar NoopContext = /** @class */ (function () {\n    function NoopContext() {\n        this._failed = false;\n    }\n    NoopContext.prototype.fail = function (relPath, message, score) {\n        this._failed = true;\n        return false;\n    };\n    NoopContext.prototype.fork = function () {\n        return this;\n    };\n    NoopContext.prototype.completeFork = function () {\n        return !this._failed;\n    };\n    NoopContext.prototype.failed = function () {\n        return this._failed;\n    };\n    NoopContext.prototype.unionResolver = function () { return this; };\n    NoopContext.prototype.createContext = function () {\n        this._failed = false;\n        return this;\n    };\n    NoopContext.prototype.resolveUnion = function (ur) { };\n    return NoopContext;\n}());\nexports.NoopContext = NoopContext;\n/**\n * Complete implementation of IContext that collects meaningfull errors.\n */\nvar DetailContext = /** @class */ (function () {\n    function DetailContext() {\n        // Stack of property names and associated messages for reporting helpful error messages.\n        this._propNames = [];\n        this._messages = [];\n        /** Contexts created by fork() which have completed and contain failures */\n        this._failedForks = [];\n        /**\n         * Contains the context returned by fork() which should be checked until\n         * completeFork() is called.\n         * Will be reused for the next fork() if there are no failures.\n         */\n        this._currentFork = null;\n        // Score is used to choose the best union member whose DetailContext to use for reporting.\n        // Higher score means better match (or rather less severe mismatch).\n        this._score = 0;\n    }\n    DetailContext.prototype.fail = function (relPath, message, score) {\n        this._propNames.push(relPath);\n        this._messages.push(message);\n        this._score += score;\n        return false;\n    };\n    DetailContext.prototype.unionResolver = function () {\n        return new DetailUnionResolver();\n    };\n    DetailContext.prototype.resolveUnion = function (unionResolver) {\n        var _a, _b, _c;\n        var u = unionResolver;\n        var best = null;\n        for (var _i = 0, _d = u.contexts; _i < _d.length; _i++) {\n            var ctx = _d[_i];\n            if (!best || ctx._score >= best._score) {\n                best = ctx;\n            }\n        }\n        if (best && best._score > 0) {\n            (_a = this._propNames).push.apply(_a, best._propNames);\n            (_b = this._messages).push.apply(_b, best._messages);\n            (_c = this._failedForks).push.apply(_c, best._failedForks);\n        }\n    };\n    DetailContext.prototype.getError = function (path) {\n        var fullMessage = flatten(this.getErrorDetails(path).map(errorLines))\n            .join(\"\\n\");\n        return new VError(path, fullMessage);\n    };\n    DetailContext.prototype.getErrorDetails = function (path) {\n        var detail = null;\n        var nested;\n        var details = [];\n        // As checkers call fail() and return to their parent checkers,\n        // the deepest failures are recorded first.\n        // Go through failures in reverse to start from the root type\n        for (var i = this._propNames.length - 1; i >= 0; i--) {\n            var p = this._propNames[i];\n            path += (typeof p === \"number\") ? \"[\" + p + \"]\" : (p ? \".\" + p : \"\");\n            var message = this._messages[i];\n            if (!message) {\n                continue;\n            }\n            nested = { path: path, message: message };\n            if (detail) {\n                detail.nested = [nested];\n            }\n            else {\n                // This is the root failure, so it will be returned\n                details.push(nested);\n            }\n            // Move into the deeper error\n            detail = nested;\n        }\n        var forkErrors = flatten(this._failedForks.map(function (fork) { return fork.getErrorDetails(path); }));\n        if (detail) {\n            // don't put an empty array in detail.nested\n            if (forkErrors.length) {\n                // detail is the deepest nested error, so detail.nested is null at this point\n                detail.nested = forkErrors;\n            }\n        }\n        else {\n            // There were no 'plain' failures, only fork failures\n            details = forkErrors;\n        }\n        return details;\n    };\n    DetailContext.prototype.fork = function () {\n        if (this._currentFork == null) {\n            this._currentFork = new DetailContext();\n        }\n        return this._currentFork;\n    };\n    DetailContext.prototype.completeFork = function () {\n        var fork = this._currentFork;\n        if (fork._failed()) {\n            this._failedForks.push(fork);\n            this._currentFork = null;\n            // To preserve old behaviour, use the score of the first failure\n            // Might want to revise this\n            if (this._failedForks.length === 1) {\n                this._score = fork._score;\n            }\n        }\n        return this._failedForks.length < DetailContext.maxForks;\n    };\n    // failed() is the public interface,\n    // it gets monkeypatched to ensure correct usage in checkers.\n    // _failed() may be called internally\n    // in ways which would fail the monkeypatched assertions.\n    DetailContext.prototype.failed = function () {\n        return this._failed();\n    };\n    DetailContext.prototype._failed = function () {\n        return this._propNames.length + this._failedForks.length > 0;\n    };\n    /**\n     * Maximum number of errors recorded at one level for an object,\n     * i.e. the maximum length of Checker.validate() or IErrorDetail.nested.\n     */\n    // If _failedForks has this length then completeFork() should return false\n    // so that the checker stops making more forks.\n    DetailContext.maxForks = 3;\n    return DetailContext;\n}());\nexports.DetailContext = DetailContext;\nvar DetailUnionResolver = /** @class */ (function () {\n    function DetailUnionResolver() {\n        this.contexts = [];\n    }\n    DetailUnionResolver.prototype.createContext = function () {\n        var ctx = new DetailContext();\n        this.contexts.push(ctx);\n        return ctx;\n    };\n    return DetailUnionResolver;\n}());\n/**\n * Returns lines of a message describing `error`.\n * The lines should be newline separated in the final message.\n * Only returns multiple lines if `error` or a descendant\n * has multiple errors in its `.nested` array.\n * Simple paths of nested errors anywhere in the tree\n * are collapsed into a single line until a branch is reached.\n */\nvar errorLines = function (error) {\n    var rootMessage = error.path + \" \" + error.message;\n    var nestedErrors = error.nested || [];\n    var nestedLines = flatten(nestedErrors.map(errorLines));\n    if (nestedErrors.length == 1) {\n        // Single nested errors are collapsed into the first line,\n        // but they may have branches deeper down leading to more lines\n        // which are already indented\n        var first = nestedLines[0], rest = nestedLines.slice(1);\n        return __spreadArrays([\n            rootMessage + \"; \" + first\n        ], rest);\n    }\n    else {\n        // Indent messages from nested errors\n        // or just return [rootMessage] if there are no nested errors\n        return __spreadArrays([\n            rootMessage\n        ], nestedLines.map(function (line) { return \"    \" + line; }));\n    }\n};\n/** Shallow flatten a 2D array into a 1D array */\nfunction flatten(arr) {\n    var _a;\n    return (_a = []).concat.apply(_a, arr);\n}\n\n\n//# sourceURL=webpack://grist/./node_modules/ts-interface-checker/dist/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./core/app/plugin/grist-plugin-api.ts");
/******/ 	grist = __webpack_exports__;
/******/ 	
/******/ })()
;