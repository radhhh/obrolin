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
/*!******************************!*\
  !*** ./src/scripts/query.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addKeyList: () => (/* binding */ addKeyList),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   generateSingleElement: () => (/* binding */ generateSingleElement),
/* harmony export */   getKeyList: () => (/* binding */ getKeyList)
/* harmony export */ });
let keywordList = [];

function addKeyList(keyword){
    keywordList.push(keyword);
}

function getKeyList(){
    return keywordList;
}

function clear(){
    keywordList = [];
}

function generateSingleElement(keyword){
    const newKeyword = document.createElement('div');
    const closeButton = document.createElement('div');
    newKeyword.classList.add('keyword');
    newKeyword.innerHTML = `<span>${keyword}</span>`;
    closeButton.classList.add('keyword-close');
    closeButton.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"> <path d="M393 5106 c-90 -22 -164 -65 -239 -140 -133 -133 -181 -297 -139 -475 35 -145 5 -113 949 -1058 l871 -873 -871 -872 c-944 -946 -914 -914 -949 -1059 -42 -178 6 -342 139 -475 133 -133 297 -181 475 -139 145 35 113 6 1059 949 l872 871 873 -871 c945 -943 913 -914 1058 -949 178 -42 342 6 475 139 133 133 181 297 139 475 -35 145 -5 113 -949 1058 l-871 873 871 872 c943 946 914 914 949 1059 41 174 -5 335 -132 470 -158 167 -397 206 -607 97 -52 -27 -188 -158 -933 -902 l-873 -871 -872 871 c-844 843 -875 873 -948 908 -115 55 -232 70 -347 42z"/> </g> </svg>';
    newKeyword.appendChild(closeButton);
    return newKeyword;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL3F1ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwibGV0IGtleXdvcmRMaXN0ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRLZXlMaXN0KGtleXdvcmQpe1xuICAgIGtleXdvcmRMaXN0LnB1c2goa2V5d29yZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlMaXN0KCl7XG4gICAgcmV0dXJuIGtleXdvcmRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoKXtcbiAgICBrZXl3b3JkTGlzdCA9IFtdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTaW5nbGVFbGVtZW50KGtleXdvcmQpe1xuICAgIGNvbnN0IG5ld0tleXdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0tleXdvcmQuY2xhc3NMaXN0LmFkZCgna2V5d29yZCcpO1xuICAgIG5ld0tleXdvcmQuaW5uZXJIVE1MID0gYDxzcGFuPiR7a2V5d29yZH08L3NwYW4+YDtcbiAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkLWNsb3NlJyk7XG4gICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjUxMi4wMDAwMDBwdFwiIGhlaWdodD1cIjUxMi4wMDAwMDBwdFwiIHZpZXdCb3g9XCIwIDAgNTEyLjAwMDAwMCA1MTIuMDAwMDAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj4gPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBmaWxsPVwiI2ZmZmZmZlwiIHN0cm9rZT1cIm5vbmVcIj4gPHBhdGggZD1cIk0zOTMgNTEwNiBjLTkwIC0yMiAtMTY0IC02NSAtMjM5IC0xNDAgLTEzMyAtMTMzIC0xODEgLTI5NyAtMTM5IC00NzUgMzUgLTE0NSA1IC0xMTMgOTQ5IC0xMDU4IGw4NzEgLTg3MyAtODcxIC04NzIgYy05NDQgLTk0NiAtOTE0IC05MTQgLTk0OSAtMTA1OSAtNDIgLTE3OCA2IC0zNDIgMTM5IC00NzUgMTMzIC0xMzMgMjk3IC0xODEgNDc1IC0xMzkgMTQ1IDM1IDExMyA2IDEwNTkgOTQ5IGw4NzIgODcxIDg3MyAtODcxIGM5NDUgLTk0MyA5MTMgLTkxNCAxMDU4IC05NDkgMTc4IC00MiAzNDIgNiA0NzUgMTM5IDEzMyAxMzMgMTgxIDI5NyAxMzkgNDc1IC0zNSAxNDUgLTUgMTEzIC05NDkgMTA1OCBsLTg3MSA4NzMgODcxIDg3MiBjOTQzIDk0NiA5MTQgOTE0IDk0OSAxMDU5IDQxIDE3NCAtNSAzMzUgLTEzMiA0NzAgLTE1OCAxNjcgLTM5NyAyMDYgLTYwNyA5NyAtNTIgLTI3IC0xODggLTE1OCAtOTMzIC05MDIgbC04NzMgLTg3MSAtODcyIDg3MSBjLTg0NCA4NDMgLTg3NSA4NzMgLTk0OCA5MDggLTExNSA1NSAtMjMyIDcwIC0zNDcgNDJ6XCIvPiA8L2c+IDwvc3ZnPic7XG4gICAgbmV3S2V5d29yZC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcmV0dXJuIG5ld0tleXdvcmQ7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9