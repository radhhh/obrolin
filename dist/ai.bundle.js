/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/scripts/ai.js ***!
  \***************************/
// let currentQuestion;

// const response1 = [
//     "Ini pertanyaan 1",
//     "Ini pertanyaan 2",
//     "Ini pertanyaan 3",
//     "Ini pertanyaan 4",
//     "Ini pertanyaan 5",
// ];

// const response2 = [
//     "Ini pertanyaan refreshed 1",
//     "Ini pertanyaan refreshed 2",
//     "Ini pertanyaan refreshed 3",
//     "Ini pertanyaan refreshed 4",
//     "Ini pertanyaan refreshed 5",
// ]

// export function generateQuestion(keywordList){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             currentQuestion = response1;
//             resolve(currentQuestion);
//         }, 1000)
//     })
// }

// export function getQuestion(){
//     return currentQuestion;
// }

// export function clearQuestion(){
//     currentQuestion = undefined;
// }

// export async function refreshQuestion(){
//     if(currentQuestion === undefined) return undefined;
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             currentQuestion = response2;
//             resolve(currentQuestion);
//         }, 1000)
//     })
// }
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osUUFBUTtBQUNSLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvYWkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gbGV0IGN1cnJlbnRRdWVzdGlvbjtcblxuLy8gY29uc3QgcmVzcG9uc2UxID0gW1xuLy8gICAgIFwiSW5pIHBlcnRhbnlhYW4gMVwiLFxuLy8gICAgIFwiSW5pIHBlcnRhbnlhYW4gMlwiLFxuLy8gICAgIFwiSW5pIHBlcnRhbnlhYW4gM1wiLFxuLy8gICAgIFwiSW5pIHBlcnRhbnlhYW4gNFwiLFxuLy8gICAgIFwiSW5pIHBlcnRhbnlhYW4gNVwiLFxuLy8gXTtcblxuLy8gY29uc3QgcmVzcG9uc2UyID0gW1xuLy8gICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDFcIixcbi8vICAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAyXCIsXG4vLyAgICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgM1wiLFxuLy8gICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDRcIixcbi8vICAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCA1XCIsXG4vLyBdXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVF1ZXN0aW9uKGtleXdvcmRMaXN0KXtcbi8vICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9IHJlc3BvbnNlMTtcbi8vICAgICAgICAgICAgIHJlc29sdmUoY3VycmVudFF1ZXN0aW9uKTtcbi8vICAgICAgICAgfSwgMTAwMClcbi8vICAgICB9KVxuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0UXVlc3Rpb24oKXtcbi8vICAgICByZXR1cm4gY3VycmVudFF1ZXN0aW9uO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gY2xlYXJRdWVzdGlvbigpe1xuLy8gICAgIGN1cnJlbnRRdWVzdGlvbiA9IHVuZGVmaW5lZDtcbi8vIH1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hRdWVzdGlvbigpe1xuLy8gICAgIGlmKGN1cnJlbnRRdWVzdGlvbiA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdW5kZWZpbmVkO1xuLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uID0gcmVzcG9uc2UyO1xuLy8gICAgICAgICAgICAgcmVzb2x2ZShjdXJyZW50UXVlc3Rpb24pO1xuLy8gICAgICAgICB9LCAxMDAwKVxuLy8gICAgIH0pXG4vLyB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9