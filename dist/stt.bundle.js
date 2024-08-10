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

/***/ "./src/scripts/stt.js":
/*!****************************!*\
  !*** ./src/scripts/stt.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   report: () => (/* binding */ report),\n/* harmony export */   start: () => (/* binding */ start),\n/* harmony export */   stop: () => (/* binding */ stop)\n/* harmony export */ });\nlet speechSupported = true;\nlet isSpeaking = false;\nlet previousText = \"\";\nlet currentText = \"\";\nlet recognition;\n\ntry{\n    if(!('speechRecognition' in window || 'webkitSpeechRecognition' in window)) throw \"not supported\";\n    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\n    recognition = new SpeechRecognition();\n    recognition.interimResults = true;\n    recognition.continuous = false;\n    recognition.lang = \"id\";\n}\ncatch(e){\n    alert(\"Fitur voice recognition tidak dapat berjalan di browser ini, silakan gunakan Google Chrome\");\n    speechSupported = false;\n}\n\nconst report = new EventTarget();\nif(speechSupported){   \n    recognition.addEventListener('result', (e) => {\n        currentText = Array.from(e.results)\n                            .map(val => val[0].transcript)\n                            .join('')\n                            .toLocaleLowerCase();\n        report.dispatchEvent(new CustomEvent(\"result\", { detail: previousText + \" \" + currentText }));\n    });\n    recognition.addEventListener('end', (e) => {\n        if(isSpeaking){\n            previousText = previousText + \" \" + currentText;\n            currentText = \"\";\n            start();\n        }\n    })\n}\n\nfunction start(){\n    isSpeaking = true;\n    recognition.start();\n}\n    \nfunction stop(){\n    isSpeaking = false;\n    currentText = \"\";\n    previousText = \"\";\n    recognition.stop();\n}\n\n\n//# sourceURL=webpack://obrolin/./src/scripts/stt.js?");

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
/******/ 	__webpack_modules__["./src/scripts/stt.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;