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

/***/ "./src/scripts/ai.js":
/*!***************************!*\
  !*** ./src/scripts/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   askQuestion: () => (/* binding */ askQuestion),\n/* harmony export */   demo: () => (/* binding */ demo),\n/* harmony export */   demoRefreshRecommendation: () => (/* binding */ demoRefreshRecommendation),\n/* harmony export */   generateRecommendation: () => (/* binding */ generateRecommendation)\n/* harmony export */ });\nconst awioawkoaakwoa = \"SpLiTproj-1p2UVpX-eLaH8nFxxIteu3BQkkB4JvqACPDQvM7irxMH-6kDPKg3WCc_2GLwhhMRUS0gQ6xKbJT3BlbkFJKOiGP80R8ntFlR6jYXqsow6kZbeMSw_esISzJV-GyPYi87psBqhI7HMT83Hq5rP3yrak-Z7gIA\";\n\nconst response1 = [\n    \"Ini pertanyaan 1\",\n    \"Ini pertanyaan 2\",\n    \"Ini pertanyaan 3\",\n    \"Ini pertanyaan 4\",\n    \"Ini pertanyaan 5\",\n];\n\nconst response2 = [\n    \"Ini pertanyaan refreshed 1\",\n    \"Ini pertanyaan refreshed 2\",\n    \"Ini pertanyaan refreshed 3\",\n    \"Ini pertanyaan refreshed 4\",\n    \"Ini pertanyaan refreshed 5\",\n]\n\nasync function demo(){\n    let result = await getReply([\n        {role: \"user\", content: \"Hai GPT!\"}\n    ]);\n    console.log(result);\n}\n\nasync function demoRefreshRecommendation(){\n    return new Promise((resolve, reject) => {\n        setTimeout(() => {\n            resolve(response2);\n        }, 1000)\n    });\n}\n\nasync function delay(time){\n    return new Promise((resolve) => {\n        setTimeout(() => {\n          resolve();\n        }, time);\n    });\n}\n\nasync function getReply(message){\n    const options = {\n        method: 'POST',\n        headers: {\n            'Authorization': `Bearer sk-${awioawkoaakwoa.slice(5)}`,\n            'Content-Type': 'application/json',\n        },\n        body: JSON.stringify({\n            model: \"gpt-3.5-turbo\",\n            messages: message,\n        }),\n    };\n    const response = await fetch('https://api.openai.com/v1/chat/completions', options);\n    const data = await response.json();\n    return data[\"choices\"][0][\"message\"][\"content\"];\n}\n\nasync function generateRecommendation(keywordList){\n    for(let i = 0; i < 3; i++){\n        try{\n            const response = await getReply([\n                {role: \"system\", content: \"User akan memberikan kata kunci yang dipisahkan oleh koma, \\\n                kamu harus memberikan list 5 pertanyaan yang relevan dengan kata kunci tersebut tanpa kata pengantar. \\\n                Pertanyaan harus dibuat sederhana, sedekat mungkin dengan kata kunci, dengan sesedikit mungkin kata. \\\n                Kata kunci bisa memiliki kesalahan penulisan dan kamu harus mengantisipasinya!\"},\n                {role: \"user\", content: keywordList.join(', ')},\n            ]);\n            const finalResponse = response.split(/\\n/)\n                                        .filter((line) => /^\\d$/.test(line[0]))\n                                        .map((line) => line.slice(3));\n            if(finalResponse.length != 5) throw new Error(\"Parsing Problem\");\n            return finalResponse;\n        }\n        catch{\n            console.log(\"Failed, trying...\");\n            await delay(200);\n        }\n    }\n    throw new Error('Failed Request')\n}\n\nasync function askQuestion(question){\n    try{\n        const response = await getReply([\n            {role: \"system\", content: \"User akan memberikan pertanyaan. Kamu harus memberikan jawaban sesingkat dan sejelas mungkin seperti menjelaskan kepada anak kecil!\"},\n            {role: \"user\", content: `${question}`}\n        ]);\n        return response;\n    }\n    catch(err){\n        throw new Error(\"No respond\")\n    }\n}\n\n//# sourceURL=webpack://obrolin/./src/scripts/ai.js?");

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
/******/ 	__webpack_modules__["./src/scripts/ai.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;