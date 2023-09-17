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
/* harmony export */   addKeyword: () => (/* binding */ addKeyword),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   generateElementList: () => (/* binding */ generateElementList),
/* harmony export */   generateSingleHTML: () => (/* binding */ generateSingleHTML),
/* harmony export */   getKeyList: () => (/* binding */ getKeyList),
/* harmony export */   removeKeyword: () => (/* binding */ removeKeyword)
/* harmony export */ });
let idx = 0;
let keywordList = {};

function addKeyword(keyword){
    keywordList[idx.toString()] = keyword;
    return idx++;
}

function getKeyList(){
    return Object.values(keywordList);
}

function removeKeyword(removedIndex){ //input in string
    delete keywordList[removedIndex];
}

function clear(){
    idx = 0;
    keywordList = {};
}

function generateSingleHTML(keyword, canClose = false, elementID = undefined){
    const newKeyword = document.createElement('div');
    newKeyword.classList.add('keyword');
    newKeyword.innerHTML = `<span>${keyword}</span>`;
    if(canClose){
        const closeButton = document.createElement('div');
        newKeyword.id = `keyword-${elementID}`
        closeButton.classList.add('keyword-close');
        closeButton.innerHTML = '<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none"> <path d="M393 5106 c-90 -22 -164 -65 -239 -140 -133 -133 -181 -297 -139 -475 35 -145 5 -113 949 -1058 l871 -873 -871 -872 c-944 -946 -914 -914 -949 -1059 -42 -178 6 -342 139 -475 133 -133 297 -181 475 -139 145 35 113 6 1059 949 l872 871 873 -871 c945 -943 913 -914 1058 -949 178 -42 342 6 475 139 133 133 181 297 139 475 -35 145 -5 113 -949 1058 l-871 873 871 872 c943 946 914 914 949 1059 41 174 -5 335 -132 470 -158 167 -397 206 -607 97 -52 -27 -188 -158 -933 -902 l-873 -871 -872 871 c-844 843 -875 873 -948 908 -115 55 -232 70 -347 42z"/> </g> </svg>';
        newKeyword.appendChild(closeButton);
    }
    return newKeyword;
}

function generateElementList(){
    let elementList = [];
    Object.values(keywordList).forEach((keyword) => {
        elementList.push(generateSingleHTML(keyword));
    });
    return elementList;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVlcnkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTyxzQ0FBc0M7QUFDN0M7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29icm9saW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJsZXQgaWR4ID0gMDtcbmxldCBrZXl3b3JkTGlzdCA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkS2V5d29yZChrZXl3b3JkKXtcbiAgICBrZXl3b3JkTGlzdFtpZHgudG9TdHJpbmcoKV0gPSBrZXl3b3JkO1xuICAgIHJldHVybiBpZHgrKztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUxpc3QoKXtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhrZXl3b3JkTGlzdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVLZXl3b3JkKHJlbW92ZWRJbmRleCl7IC8vaW5wdXQgaW4gc3RyaW5nXG4gICAgZGVsZXRlIGtleXdvcmRMaXN0W3JlbW92ZWRJbmRleF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcigpe1xuICAgIGlkeCA9IDA7XG4gICAga2V5d29yZExpc3QgPSB7fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2luZ2xlSFRNTChrZXl3b3JkLCBjYW5DbG9zZSA9IGZhbHNlLCBlbGVtZW50SUQgPSB1bmRlZmluZWQpe1xuICAgIGNvbnN0IG5ld0tleXdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdLZXl3b3JkLmNsYXNzTGlzdC5hZGQoJ2tleXdvcmQnKTtcbiAgICBuZXdLZXl3b3JkLmlubmVySFRNTCA9IGA8c3Bhbj4ke2tleXdvcmR9PC9zcGFuPmA7XG4gICAgaWYoY2FuQ2xvc2Upe1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdLZXl3b3JkLmlkID0gYGtleXdvcmQtJHtlbGVtZW50SUR9YFxuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkLWNsb3NlJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI1MTIuMDAwMDAwcHRcIiBoZWlnaHQ9XCI1MTIuMDAwMDAwcHRcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+IDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgZmlsbD1cIiNmZmZmZmZcIiBzdHJva2U9XCJub25lXCI+IDxwYXRoIGQ9XCJNMzkzIDUxMDYgYy05MCAtMjIgLTE2NCAtNjUgLTIzOSAtMTQwIC0xMzMgLTEzMyAtMTgxIC0yOTcgLTEzOSAtNDc1IDM1IC0xNDUgNSAtMTEzIDk0OSAtMTA1OCBsODcxIC04NzMgLTg3MSAtODcyIGMtOTQ0IC05NDYgLTkxNCAtOTE0IC05NDkgLTEwNTkgLTQyIC0xNzggNiAtMzQyIDEzOSAtNDc1IDEzMyAtMTMzIDI5NyAtMTgxIDQ3NSAtMTM5IDE0NSAzNSAxMTMgNiAxMDU5IDk0OSBsODcyIDg3MSA4NzMgLTg3MSBjOTQ1IC05NDMgOTEzIC05MTQgMTA1OCAtOTQ5IDE3OCAtNDIgMzQyIDYgNDc1IDEzOSAxMzMgMTMzIDE4MSAyOTcgMTM5IDQ3NSAtMzUgMTQ1IC01IDExMyAtOTQ5IDEwNTggbC04NzEgODczIDg3MSA4NzIgYzk0MyA5NDYgOTE0IDkxNCA5NDkgMTA1OSA0MSAxNzQgLTUgMzM1IC0xMzIgNDcwIC0xNTggMTY3IC0zOTcgMjA2IC02MDcgOTcgLTUyIC0yNyAtMTg4IC0xNTggLTkzMyAtOTAyIGwtODczIC04NzEgLTg3MiA4NzEgYy04NDQgODQzIC04NzUgODczIC05NDggOTA4IC0xMTUgNTUgLTIzMiA3MCAtMzQ3IDQyelwiLz4gPC9nPiA8L3N2Zz4nO1xuICAgICAgICBuZXdLZXl3b3JkLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0tleXdvcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUVsZW1lbnRMaXN0KCl7XG4gICAgbGV0IGVsZW1lbnRMaXN0ID0gW107XG4gICAgT2JqZWN0LnZhbHVlcyhrZXl3b3JkTGlzdCkuZm9yRWFjaCgoa2V5d29yZCkgPT4ge1xuICAgICAgICBlbGVtZW50TGlzdC5wdXNoKGdlbmVyYXRlU2luZ2xlSFRNTChrZXl3b3JkKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==