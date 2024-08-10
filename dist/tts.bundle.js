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

/***/ "./src/scripts/tts.js":
/*!****************************!*\
  !*** ./src/scripts/tts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initElement: () => (/* binding */ initElement)\n/* harmony export */ });\nconst synth = window.speechSynthesis;\nwindow.utterance = new SpeechSynthesisUtterance();\nlet selectedVoice = synth.getVoices().filter((list) => list.lang == \"id\")[0];\nlet isPlaying = false;\nlet textLength, currentWord;\nlet boundaryList;\nlet currentPlayingElement = undefined;\n\nsynth.addEventListener('voiceschanged', () => {\n    selectedVoice = synth.getVoices().filter((list) => list.lang == \"id\")[0];\n})\n\nfunction initElement(element, button, text){\n    button.addEventListener('click', () => {\n        if(element.classList.contains('playing')){\n            stopSpeak();\n        }\n        else{\n            stopSpeak();\n            setTimeout(() => {\n                currentPlayingElement = element;\n                startSpeak(text);\n            }, 200);\n        }\n    });\n}\n\nutterance.addEventListener('boundary', (e) => {\n    while(currentWord < textLength-1 && boundaryList[currentWord] < e.charIndex){\n        resetHighlightWord(currentPlayingElement, currentWord);\n        highlightWord(currentPlayingElement, ++currentWord);\n    }\n});\n\nutterance.addEventListener('end', (e) => {\n    stopSpeak();\n});\n\nfunction highlightWord(targetElement, index){\n    targetElement.querySelector(`.word-${index}`).classList.add('highlight');\n}\n\nfunction resetHighlightWord(targetElement, index){\n    targetElement.querySelector(`.word-${index}`).classList.remove('highlight');\n}\n\n\nfunction startSpeak(text){\n    utterance.text = text;\n    utterance.voice = selectedVoice;\n    utterance.lang = \"id\";\n    textLength = text.split(\" \").length;\n    boundaryList = [];\n    for(let i = 0; i < text.length; i++){\n        if(text.charAt(i) == \" \") boundaryList.push(i);\n    }\n    isPlaying = true;\n    currentPlayingElement.classList.add('playing');\n    currentWord = 0;\n    highlightWord(currentPlayingElement, currentWord);\n    synth.speak(utterance);\n}\n\nfunction stopSpeak(){\n    if(!isPlaying || currentPlayingElement === undefined) return;\n    resetHighlightWord(currentPlayingElement, currentWord);\n    synth.resume();\n    synth.cancel();\n    isPlaying = false;\n    currentPlayingElement.classList.remove('playing');\n    currentPlayingElement = undefined;\n    currentWord = 0;\n    boundaryList = [];\n}\n\n//# sourceURL=webpack://obrolin/./src/scripts/tts.js?");

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
/******/ 	__webpack_modules__["./src/scripts/tts.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;