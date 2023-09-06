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
/* harmony export */   askQuestion: () => (/* binding */ askQuestion),
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

async function demo(){
    let result = await getReply([
        {role: "user", content: "Hai GPT!"}
    ]);
    console.log(result);
}

async function delay(time){
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, time);
    });
}

async function getReply(message){
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
    console.log(data);
    return data["choices"][0]["message"]["content"];
}

async function generateRecommendation(keywordList){
    for(let i = 0; i < 3; i++){
        try{
            const response = await getReply([
                {role: "system", content: "User akan memberikan kata kunci yang dipisahkan oleh koma,\
                kamu harus memberikan list 5 pertanyaan yang relevan dengan kata kunci tersebut tanpa kata pengantar"},
                {role: "user", content: keywordList.join(', ')},
            ]);
            const finalResponse = response.split(/\n/)
                                        .filter((line) => /^\d$/.test(line[0]))
                                        .map((line) => line.slice(3));
            if(finalResponse.length != 5) throw new Error("Parsing Problem");
            return finalResponse;
        }
        catch{
            console.log("Failed, trying...");
            await delay(200);
        }
    }
    throw new Error('Failed Request')
}

async function refreshRecommendation(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(response2);
        }, 1000)
    });
}

async function askQuestion(question){
    try{
        const response = await getReply([
            {role: "system", content: "User akan memberikan pertanyaan. Kamu harus memberikan jawaban dengan kata-kata dan penjelasan yang mudah dipahami"},
            {role: "user", content: `${question}`}
        ]);
        const finalResponse = response
                                    .split('\n')
                                    .filter((line) => {
                                        return line !== "";
                                    })
                                    .map((line) => {
                                        const whitespaceCount = line.search(/\S|$/);
                                        return `<div>${'\u00a0'.repeat(whitespaceCount)+line.slice(whitespaceCount)}</div>\n`;
                                    })
                                    .join('');
        console.log(finalResponse);
        return finalResponse;
    }
    catch(err){
        console.log(err);
    }
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLE9BQU87QUFDOUM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsc0hBQXNIO0FBQ3RILGlCQUFpQiw4Q0FBOEM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0EsYUFBYSw4SUFBOEk7QUFDM0osYUFBYSwwQkFBMEIsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSx1REFBdUQsNkRBQTZEO0FBQ3BILHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL2FpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgQVBJS0VZID0gXCJzay10MzZzQm44MkhrVmphTHhkcFF3dFQzQmxia0ZKdTJpaUtJamo3RHF3NzhFQVlJbldcIjtcblxuY29uc3QgcmVzcG9uc2UxID0gW1xuICAgIFwiSW5pIHBlcnRhbnlhYW4gMVwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gMlwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gM1wiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gNFwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gNVwiLFxuXTtcblxuY29uc3QgcmVzcG9uc2UyID0gW1xuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDFcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAyXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgM1wiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDRcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCA1XCIsXG5dXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZW1vKCl7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAge3JvbGU6IFwidXNlclwiLCBjb250ZW50OiBcIkhhaSBHUFQhXCJ9XG4gICAgXSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsYXkodGltZSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlcGx5KG1lc3NhZ2Upe1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtBUElLRVl9YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlLFxuICAgICAgICB9KSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9ucycsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGFbXCJjaG9pY2VzXCJdWzBdW1wibWVzc2FnZVwiXVtcImNvbnRlbnRcIl07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVJlY29tbWVuZGF0aW9uKGtleXdvcmRMaXN0KXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXBseShbXG4gICAgICAgICAgICAgICAge3JvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFwiVXNlciBha2FuIG1lbWJlcmlrYW4ga2F0YSBrdW5jaSB5YW5nIGRpcGlzYWhrYW4gb2xlaCBrb21hLFxcXG4gICAgICAgICAgICAgICAga2FtdSBoYXJ1cyBtZW1iZXJpa2FuIGxpc3QgNSBwZXJ0YW55YWFuIHlhbmcgcmVsZXZhbiBkZW5nYW4ga2F0YSBrdW5jaSB0ZXJzZWJ1dCB0YW5wYSBrYXRhIHBlbmdhbnRhclwifSxcbiAgICAgICAgICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGtleXdvcmRMaXN0LmpvaW4oJywgJyl9LFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFJlc3BvbnNlID0gcmVzcG9uc2Uuc3BsaXQoL1xcbi8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gL15cXGQkLy50ZXN0KGxpbmVbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUuc2xpY2UoMykpO1xuICAgICAgICAgICAgaWYoZmluYWxSZXNwb25zZS5sZW5ndGggIT0gNSkgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2luZyBQcm9ibGVtXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2h7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCwgdHJ5aW5nLi4uXCIpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCBSZXF1ZXN0Jylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hSZWNvbW1lbmRhdGlvbigpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZTIpO1xuICAgICAgICB9LCAxMDAwKVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNrUXVlc3Rpb24ocXVlc3Rpb24pe1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXBseShbXG4gICAgICAgICAgICB7cm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJVc2VyIGFrYW4gbWVtYmVyaWthbiBwZXJ0YW55YWFuLiBLYW11IGhhcnVzIG1lbWJlcmlrYW4gamF3YWJhbiBkZW5nYW4ga2F0YS1rYXRhIGRhbiBwZW5qZWxhc2FuIHlhbmcgbXVkYWggZGlwYWhhbWlcIn0sXG4gICAgICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGAke3F1ZXN0aW9ufWB9XG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBmaW5hbFJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGluZSAhPT0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZUNvdW50ID0gbGluZS5zZWFyY2goL1xcU3wkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7J1xcdTAwYTAnLnJlcGVhdCh3aGl0ZXNwYWNlQ291bnQpK2xpbmUuc2xpY2Uod2hpdGVzcGFjZUNvdW50KX08L2Rpdj5cXG5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgY29uc29sZS5sb2coZmluYWxSZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBmaW5hbFJlc3BvbnNlO1xuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=