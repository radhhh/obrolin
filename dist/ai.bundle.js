/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/scripts/ai.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   demo: () => (/* binding */ demo),
/* harmony export */   generateRecommendation: () => (/* binding */ generateRecommendation),
/* harmony export */   refreshRecommendation: () => (/* binding */ refreshRecommendation)
/* harmony export */ });
const APIKEY = "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";

const response1 = [
    "Ini pertanyaan 1",
    "Ini pertanyaan 2",
    "Ini pertanyaan 3",
    "Ini pertanyaan 4",
    "Ini pertanyaan 5",
];

const response2 = [
    "Ini pertanyaan refreshed 1",
    "Ini pertanyaan refreshed 2",
    "Ini pertanyaan refreshed 3",
    "Ini pertanyaan refreshed 4",
    "Ini pertanyaan refreshed 5",
]

async function getMessage(message){
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${APIKEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: message,
        }),
    };
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    console.log("Total token",data.usage.total_tokens);
    return data["choices"][0]["message"]["content"];
}

async function demo(){
    let result = await getMessage([
        {role: "user", content: "Hai GPT!"}
    ]);
    console.log(result);
}

async function generateRecommendation(keywordList){
    for(let i = 0; i < 5; i++){
        try{
            const response = await getMessage([
                {role: "system", content: "Chat ini dalam bahasa Indonesia. User akan memberikan\
                kata kunci yang dipisahkan oleh koma, kamu harus memberikan list 5 pertanyaan\
                yang relevan dengan kata kunci tersebut tanpa kata pengantar"},
                {role: "user", content: keywordList.join(', ')},
            ])
            const finalResponse = response.split(/\n/)
                                        .filter((line) => /^\d$/.test(line[0]))
                                        .map((line) => line.slice(3));
            return finalResponse;
        }
        catch{
            console.log("Failed, trying...");
        }
    }
    return undefined;
}

async function refreshRecommendation(){
    if(currentQuestion === undefined) return undefined;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            currentQuestion = response2;
            resolve(currentQuestion);
        }, 1000)
    })
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRU87QUFDUCxtQkFBbUIsT0FBTztBQUMxQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsOEVBQThFO0FBQzlFLGlCQUFpQiw4Q0FBOEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29icm9saW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvYWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBBUElLRVkgPSBcInNrLWYzUXg3Wm5ZWWtubU1XdFBHUG93VDNCbGJrRkpLcXZrYVh3MkczQkJ6dWw2bFJtTlwiO1xuXG5jb25zdCByZXNwb25zZTEgPSBbXG4gICAgXCJJbmkgcGVydGFueWFhbiAxXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiAyXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiAzXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiA0XCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiA1XCIsXG5dO1xuXG5jb25zdCByZXNwb25zZTIgPSBbXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgMVwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDJcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAzXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgNFwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDVcIixcbl1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0TWVzc2FnZShtZXNzYWdlKXtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7QVBJS0VZfWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZSxcbiAgICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLCBvcHRpb25zKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKFwiVG90YWwgdG9rZW5cIixkYXRhLnVzYWdlLnRvdGFsX3Rva2Vucyk7XG4gICAgcmV0dXJuIGRhdGFbXCJjaG9pY2VzXCJdWzBdW1wibWVzc2FnZVwiXVtcImNvbnRlbnRcIl07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZW1vKCl7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGdldE1lc3NhZ2UoW1xuICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IFwiSGFpIEdQVCFcIn1cbiAgICBdKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbihrZXl3b3JkTGlzdCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0TWVzc2FnZShbXG4gICAgICAgICAgICAgICAge3JvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFwiQ2hhdCBpbmkgZGFsYW0gYmFoYXNhIEluZG9uZXNpYS4gVXNlciBha2FuIG1lbWJlcmlrYW5cXFxuICAgICAgICAgICAgICAgIGthdGEga3VuY2kgeWFuZyBkaXBpc2Foa2FuIG9sZWgga29tYSwga2FtdSBoYXJ1cyBtZW1iZXJpa2FuIGxpc3QgNSBwZXJ0YW55YWFuXFxcbiAgICAgICAgICAgICAgICB5YW5nIHJlbGV2YW4gZGVuZ2FuIGthdGEga3VuY2kgdGVyc2VidXQgdGFucGEga2F0YSBwZW5nYW50YXJcIn0sXG4gICAgICAgICAgICAgICAge3JvbGU6IFwidXNlclwiLCBjb250ZW50OiBrZXl3b3JkTGlzdC5qb2luKCcsICcpfSxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBjb25zdCBmaW5hbFJlc3BvbnNlID0gcmVzcG9uc2Uuc3BsaXQoL1xcbi8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gL15cXGQkLy50ZXN0KGxpbmVbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUuc2xpY2UoMykpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2h7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCwgdHJ5aW5nLi4uXCIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoUmVjb21tZW5kYXRpb24oKXtcbiAgICBpZihjdXJyZW50UXVlc3Rpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9IHJlc3BvbnNlMjtcbiAgICAgICAgICAgIHJlc29sdmUoY3VycmVudFF1ZXN0aW9uKTtcbiAgICAgICAgfSwgMTAwMClcbiAgICB9KVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==