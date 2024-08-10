/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/query.js":
/*!******************************!*\
  !*** ./src/scripts/query.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addKeyword: () => (/* binding */ addKeyword),\n/* harmony export */   clear: () => (/* binding */ clear),\n/* harmony export */   generateElementList: () => (/* binding */ generateElementList),\n/* harmony export */   generateSingleHTML: () => (/* binding */ generateSingleHTML),\n/* harmony export */   getKeyList: () => (/* binding */ getKeyList),\n/* harmony export */   removeKeyword: () => (/* binding */ removeKeyword)\n/* harmony export */ });\nlet idx = 0;\nlet keywordList = {};\n\nfunction addKeyword(keyword){\n    keywordList[idx.toString()] = keyword;\n    return idx++;\n}\n\nfunction getKeyList(){\n    return Object.values(keywordList);\n}\n\nfunction removeKeyword(removedIndex){ //input in string\n    delete keywordList[removedIndex];\n}\n\nfunction clear(){\n    idx = 0;\n    keywordList = {};\n}\n\nfunction generateSingleHTML(keyword, canClose = false, elementID = undefined){\n    const newKeyword = document.createElement('div');\n    newKeyword.classList.add('keyword');\n    newKeyword.innerHTML = `<span>${keyword}</span>`;\n    if(canClose){\n        const closeButton = document.createElement('div');\n        newKeyword.id = `keyword-${elementID}`\n        closeButton.classList.add('keyword-close');\n        closeButton.innerHTML = '<svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\" width=\"512.000000pt\" height=\"512.000000pt\" viewBox=\"0 0 512.000000 512.000000\" preserveAspectRatio=\"xMidYMid meet\"> <g transform=\"translate(0.000000,512.000000) scale(0.100000,-0.100000)\" fill=\"#ffffff\" stroke=\"none\"> <path d=\"M393 5106 c-90 -22 -164 -65 -239 -140 -133 -133 -181 -297 -139 -475 35 -145 5 -113 949 -1058 l871 -873 -871 -872 c-944 -946 -914 -914 -949 -1059 -42 -178 6 -342 139 -475 133 -133 297 -181 475 -139 145 35 113 6 1059 949 l872 871 873 -871 c945 -943 913 -914 1058 -949 178 -42 342 6 475 139 133 133 181 297 139 475 -35 145 -5 113 -949 1058 l-871 873 871 872 c943 946 914 914 949 1059 41 174 -5 335 -132 470 -158 167 -397 206 -607 97 -52 -27 -188 -158 -933 -902 l-873 -871 -872 871 c-844 843 -875 873 -948 908 -115 55 -232 70 -347 42z\"/> </g> </svg>';\n        newKeyword.appendChild(closeButton);\n    }\n    return newKeyword;\n}\n\nfunction generateElementList(){\n    let elementList = [];\n    Object.values(keywordList).forEach((keyword) => {\n        elementList.push(generateSingleHTML(keyword));\n    });\n    return elementList;\n}\n\n//# sourceURL=webpack://obrolin/./src/scripts/query.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/query.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;