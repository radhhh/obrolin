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
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addGPTChat: () => (/* binding */ addGPTChat),
/* harmony export */   addUserChat: () => (/* binding */ addUserChat),
/* harmony export */   appendKeyword: () => (/* binding */ appendKeyword),
/* harmony export */   appendRecommendation: () => (/* binding */ appendRecommendation),
/* harmony export */   clearKeyword: () => (/* binding */ clearKeyword),
/* harmony export */   clearRecommendation: () => (/* binding */ clearRecommendation),
/* harmony export */   clearRecommendationKeyword: () => (/* binding */ clearRecommendationKeyword),
/* harmony export */   generateRecommendationElements: () => (/* binding */ generateRecommendationElements),
/* harmony export */   hidePopUpRecommendation: () => (/* binding */ hidePopUpRecommendation),
/* harmony export */   selectRecommendation: () => (/* binding */ selectRecommendation),
/* harmony export */   showPopUpRecommendation: () => (/* binding */ showPopUpRecommendation),
/* harmony export */   toggleOverlay: () => (/* binding */ toggleOverlay),
/* harmony export */   unselectRecommendation: () => (/* binding */ unselectRecommendation),
/* harmony export */   updateChatContent: () => (/* binding */ updateChatContent)
/* harmony export */ });
function appendKeyword(newKeyword){
    const keywordContainer = document.getElementById('keywordContainer');
    keywordContainer.appendChild(newKeyword);
}

function clearKeyword(){
    const keywordContainer = document.getElementById('keywordContainer');
    while(keywordContainer.firstChild) keywordContainer.removeChild(keywordContainer.firstChild);
}

function clearRecommendationKeyword(){
    const keywordContainer = document.getElementById('recommendationKeywordContainer');
    while(keywordContainer.firstChild) keywordContainer.removeChild(keywordContainer.firstChild);
}

function toggleOverlay(){
    document.getElementById('darkOverlay').classList.toggle('hidden');
}

function showPopUpRecommendation(keywordElementList){
    document.getElementById('recommendationPopUp').classList.remove('hidden');
    const keywordContainer = document.getElementById('recommendationKeywordContainer');
    keywordElementList.forEach((element) => {
        keywordContainer.appendChild(element);
    });
}

function toggleRecommendationLoaded(param){
    const recommendationPopUp = document.getElementById('recommendationPopUp');
    if(param == "add") recommendationPopUp.classList.add('loaded');
    else if(param == "remove") recommendationPopUp.classList.remove('loaded');
    else recommendationPopUp.classList.toggle('loaded');
}

function appendRecommendation(elementList){
    toggleRecommendationLoaded('add');
    const questionContainer = document.getElementById('recommendationQuestionContainer');
    elementList.forEach((element) => {
        questionContainer.appendChild(element);
    });
}

function clearRecommendation(){
    toggleRecommendationLoaded('remove');
    const questionContainer = document.getElementById('recommendationQuestionContainer');
    while(questionContainer.firstChild) questionContainer.removeChild(questionContainer.firstChild);
}

function generateRecommendationElements(recommendationList){
    let elementList = [];
    recommendationList.forEach((question, index) => {
        const newQuestion = document.createElement('div');
        newQuestion.classList.add('recommendation');
        newQuestion.id = `recommendation-${index}`;
        newQuestion.innerHTML = question;
        elementList.push(newQuestion);
    });
    return elementList;
}

function selectRecommendation(index){
    const target = document.getElementById(`recommendation-${index}`);
    target.classList.add('selected');
}

function unselectRecommendation(index){
    const target = document.getElementById(`recommendation-${index}`);
    target.classList.remove('selected');
}


function hidePopUpRecommendation(){
    document.getElementById('recommendationPopUp').classList.add('hidden');
    clearRecommendation();
    clearRecommendationKeyword();
}

function addUserChat(message, chatIndex){
    const main = document.querySelector('main');
    const chatElement = document.createElement('div');
    chatElement.classList.add("chatsection", "user", "loaded");
    chatElement.id = `chat-${chatIndex}`;
    chatElement.innerHTML = `<div>
                                <h3>
                                    <span>Anda</span>
                                    <button>
                                        <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5278 3.88083C26.224 3.47849 25.6234 3.37912 25.1864 3.65889C24.7495 3.93865 24.6415 4.49161 24.9454 4.89396C26.7586 7.29498 27.7809 10.4793 27.7809 13.9325C27.7809 17.386 26.7585 20.5715 24.9454 22.9723C24.6415 23.3747 24.7495 23.9276 25.1864 24.2074C25.6234 24.4871 26.224 24.3878 26.5278 23.9854C28.5721 21.2785 29.7083 17.7386 29.7083 13.9325C29.7083 10.1267 28.5723 6.58798 26.5278 3.88083ZM13.6027 3.80409L13.8028 3.79703L13.9851 3.79882C15.2897 3.85648 16.4051 4.74202 16.8321 6.05518C16.9511 6.47387 17.0183 6.88334 17.0966 7.54994L17.2007 8.4235C17.4104 10.4485 17.4037 18.403 17.1807 20.0429L17.0424 21.2188C16.9876 21.6154 16.9252 21.9205 16.823 22.2706C16.3817 23.6273 15.1641 24.5363 13.8178 24.4989C13.1325 24.5144 12.2979 24.1934 11.7174 23.7439L7.14302 20.3224L4.78873 20.323C3.05437 20.323 1.81907 19.251 1.51564 17.6157L1.48139 17.3993C1.22446 15.7177 1.23244 12.6605 1.48128 10.8228C1.7303 9.18342 3.03061 7.97399 4.78873 7.97399L7.14173 7.97333L11.602 4.62682C12.142 4.20567 12.9478 3.85926 13.6027 3.80409ZM13.8222 5.57083L13.7733 5.571C13.6178 5.56791 13.118 5.7702 12.8338 5.99163L8.09395 9.54907C7.92198 9.67814 7.70692 9.74862 7.48506 9.74862H4.78873C4.05852 9.74862 3.51361 10.2554 3.39199 11.0554C3.16527 12.7305 3.15769 15.6317 3.39238 17.1688C3.5142 18.0936 4.00756 18.5483 4.78873 18.5483H7.48506C7.70634 18.5483 7.92087 18.6185 8.09263 18.7469L12.9451 22.3759C13.2034 22.5759 13.6005 22.7286 13.8222 22.7249C14.3009 22.7378 14.7739 22.3846 14.969 21.7862C15.0704 21.4378 15.1232 21.1118 15.1887 20.5126L15.2314 20.1228L15.2679 19.8252C15.4783 18.2777 15.4783 10.0192 15.2676 8.46913L15.1307 7.34517C15.0984 7.10798 15.067 6.92006 15.0321 6.75895L14.9767 6.53456C14.7739 5.9118 14.3002 5.55798 13.8222 5.57083ZM20.7778 7.27969C21.2148 6.99995 21.8153 7.09935 22.1191 7.50171C23.4318 9.2401 24.1586 11.5042 24.1586 13.9331C24.1586 16.3618 23.4319 18.6248 22.1191 20.3634C21.8153 20.7657 21.2148 20.8651 20.7778 20.5854C20.3408 20.3056 20.2328 19.7527 20.5366 19.3503C21.6183 17.9178 22.2312 16.0092 22.2312 13.9331C22.2312 11.8568 21.6181 9.94703 20.5366 8.51475C20.2328 8.11239 20.3408 7.55944 20.7778 7.27969Z" fill="#000000"/>
                                        </svg>                            
                                    </button>
                                </h3>
                                <div class="chatbox user">
                                    <div class="left-box">
                                        <div class="upper-left"></div>
                                        <div class="middle-left"></div>
                                        <div class="lower-left"></div>
                                    </div>
                                    <div class="content">
                                        ${message}
                                    </div>
                                    <div class="right-box">
                                        <div class="upper-right"></div>
                                        <div class="middle-right"></div>
                                        <div class="lower-right"></div>
                                        <svg viewBox="116.587 196.246 95.581 99.109" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M 206.587 295.355 C 156.881 295.355 116.587 255.061 116.587 205.355 C 116.587 202.28 116.741 199.241 117.042 196.246 L 176.312 196.246 C 173.204 204.934 171.511 214.294 171.511 224.05 C 171.511 254.346 187.835 280.83 212.168 295.185 C 210.322 295.298 208.461 295.355 206.587 295.355 Z" style="fill: rgb(38, 37, 42); transform-origin: 164.377px 245.802px;"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>`;
    main.appendChild(chatElement);
    scrollIntoTop(chatElement);
}

function addGPTChat(message, chatIndex){
    const main = document.querySelector('main');
    const chatElement = document.createElement('div');
    chatElement.classList.add("chatsection", "ai");
    chatElement.id = `chat-${chatIndex}`;
    chatElement.innerHTML = `<div>
                                <h3>
                                    <span>Obrolin AI</span>
                                    <button>
                                        <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.5278 3.88083C26.224 3.47849 25.6234 3.37912 25.1864 3.65889C24.7495 3.93865 24.6415 4.49161 24.9454 4.89396C26.7586 7.29498 27.7809 10.4793 27.7809 13.9325C27.7809 17.386 26.7585 20.5715 24.9454 22.9723C24.6415 23.3747 24.7495 23.9276 25.1864 24.2074C25.6234 24.4871 26.224 24.3878 26.5278 23.9854C28.5721 21.2785 29.7083 17.7386 29.7083 13.9325C29.7083 10.1267 28.5723 6.58798 26.5278 3.88083ZM13.6027 3.80409L13.8028 3.79703L13.9851 3.79882C15.2897 3.85648 16.4051 4.74202 16.8321 6.05518C16.9511 6.47387 17.0183 6.88334 17.0966 7.54994L17.2007 8.4235C17.4104 10.4485 17.4037 18.403 17.1807 20.0429L17.0424 21.2188C16.9876 21.6154 16.9252 21.9205 16.823 22.2706C16.3817 23.6273 15.1641 24.5363 13.8178 24.4989C13.1325 24.5144 12.2979 24.1934 11.7174 23.7439L7.14302 20.3224L4.78873 20.323C3.05437 20.323 1.81907 19.251 1.51564 17.6157L1.48139 17.3993C1.22446 15.7177 1.23244 12.6605 1.48128 10.8228C1.7303 9.18342 3.03061 7.97399 4.78873 7.97399L7.14173 7.97333L11.602 4.62682C12.142 4.20567 12.9478 3.85926 13.6027 3.80409ZM13.8222 5.57083L13.7733 5.571C13.6178 5.56791 13.118 5.7702 12.8338 5.99163L8.09395 9.54907C7.92198 9.67814 7.70692 9.74862 7.48506 9.74862H4.78873C4.05852 9.74862 3.51361 10.2554 3.39199 11.0554C3.16527 12.7305 3.15769 15.6317 3.39238 17.1688C3.5142 18.0936 4.00756 18.5483 4.78873 18.5483H7.48506C7.70634 18.5483 7.92087 18.6185 8.09263 18.7469L12.9451 22.3759C13.2034 22.5759 13.6005 22.7286 13.8222 22.7249C14.3009 22.7378 14.7739 22.3846 14.969 21.7862C15.0704 21.4378 15.1232 21.1118 15.1887 20.5126L15.2314 20.1228L15.2679 19.8252C15.4783 18.2777 15.4783 10.0192 15.2676 8.46913L15.1307 7.34517C15.0984 7.10798 15.067 6.92006 15.0321 6.75895L14.9767 6.53456C14.7739 5.9118 14.3002 5.55798 13.8222 5.57083ZM20.7778 7.27969C21.2148 6.99995 21.8153 7.09935 22.1191 7.50171C23.4318 9.2401 24.1586 11.5042 24.1586 13.9331C24.1586 16.3618 23.4319 18.6248 22.1191 20.3634C21.8153 20.7657 21.2148 20.8651 20.7778 20.5854C20.3408 20.3056 20.2328 19.7527 20.5366 19.3503C21.6183 17.9178 22.2312 16.0092 22.2312 13.9331C22.2312 11.8568 21.6181 9.94703 20.5366 8.51475C20.2328 8.11239 20.3408 7.55944 20.7778 7.27969Z" fill="#000000"/>
                                        </svg>                            
                                    </button>
                                </h3>
                                <div class="chatbox ai">
                                    <div class="left-box">
                                        <div class="upper-left"></div>
                                        <div class="middle-left"></div>
                                        <div class="lower-left"></div>
                                        <svg viewBox="116.586 196.246 95.581 99.109" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M 206.587 196.249 C 156.881 196.249 116.587 236.543 116.587 286.249 C 116.587 289.324 116.741 292.363 117.042 295.358 L 176.312 295.358 C 173.204 286.67 171.511 277.31 171.511 267.554 C 171.511 237.258 187.835 210.774 212.168 196.419 C 210.322 196.306 208.461 196.249 206.587 196.249 Z" style="fill: rgb(45, 104, 220); transform-origin: 164.377px 245.802px;" transform="matrix(-1, 0, 0, -1, -0.000004631608, -0.0000069259)"/>
                                        </svg>
                                    </div>
                                    <div class="content">
                                        ${message}
                                    </div>
                                    <div class="right-box">
                                        <div class="upper-right"></div>
                                        <div class="middle-right"></div>
                                        <div class="lower-right"></div>
                                    </div>
                                </div>
                            </div>`;
    main.appendChild(chatElement);
    scrollIntoTop(chatElement);
}

function updateChatContent(message, chatIndex){
    document.getElementById(`chat-${chatIndex}`).classList.add("loaded");
    const targetContent = document.querySelector(`#chat-${chatIndex} div.content`);
    targetContent.innerHTML = `${message}`;
    scrollIntoTop(document.getElementById(`chat-${chatIndex-1}`));
}

function scrollIntoTop(targetElement){
    targetElement.scrollIntoView();
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLE1BQU07QUFDakQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1AsNkRBQTZELE1BQU07QUFDbkU7QUFDQTs7QUFFTztBQUNQLDZEQUE2RCxNQUFNO0FBQ25FO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpWEFBaVgsc0NBQXNDO0FBQ3ZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb1hBQW9YLHNDQUFzQztBQUMxWjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9DQUFvQyxVQUFVO0FBQzlDLDBEQUEwRCxXQUFXO0FBQ3JFLGlDQUFpQyxRQUFRO0FBQ3pDLGtEQUFrRCxZQUFZO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEtleXdvcmQobmV3S2V5d29yZCl7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXl3b3JkQ29udGFpbmVyJyk7XG4gICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdLZXl3b3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyS2V5d29yZCgpe1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5d29yZENvbnRhaW5lcicpO1xuICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJSZWNvbW1lbmRhdGlvbktleXdvcmQoKXtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcicpO1xuICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheSgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrT3ZlcmxheScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BvcFVwUmVjb21tZW5kYXRpb24oa2V5d29yZEVsZW1lbnRMaXN0KXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVyJyk7XG4gICAga2V5d29yZEVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQocGFyYW0pe1xuICAgIGNvbnN0IHJlY29tbWVuZGF0aW9uUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpO1xuICAgIGlmKHBhcmFtID09IFwiYWRkXCIpIHJlY29tbWVuZGF0aW9uUG9wVXAuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgZWxzZSBpZihwYXJhbSA9PSBcInJlbW92ZVwiKSByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlZCcpO1xuICAgIGVsc2UgcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFJlY29tbWVuZGF0aW9uKGVsZW1lbnRMaXN0KXtcbiAgICB0b2dnbGVSZWNvbW1lbmRhdGlvbkxvYWRlZCgnYWRkJyk7XG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lcicpO1xuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uKCl7XG4gICAgdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQoJ3JlbW92ZScpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbiAgICB3aGlsZShxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKSBxdWVzdGlvbkNvbnRhaW5lci5yZW1vdmVDaGlsZChxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmVjb21tZW5kYXRpb25FbGVtZW50cyhyZWNvbW1lbmRhdGlvbkxpc3Qpe1xuICAgIGxldCBlbGVtZW50TGlzdCA9IFtdO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdC5mb3JFYWNoKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgncmVjb21tZW5kYXRpb24nKTtcbiAgICAgICAgbmV3UXVlc3Rpb24uaWQgPSBgcmVjb21tZW5kYXRpb24tJHtpbmRleH1gO1xuICAgICAgICBuZXdRdWVzdGlvbi5pbm5lckhUTUwgPSBxdWVzdGlvbjtcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChuZXdRdWVzdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvbW1lbmRhdGlvbi0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZWxlY3RSZWNvbW1lbmRhdGlvbihpbmRleCl7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY29tbWVuZGF0aW9uLSR7aW5kZXh9YCk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQb3BVcFJlY29tbWVuZGF0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUG9wVXAnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjbGVhclJlY29tbWVuZGF0aW9uKCk7XG4gICAgY2xlYXJSZWNvbW1lbmRhdGlvbktleXdvcmQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVzZXJDaGF0KG1lc3NhZ2UsIGNoYXRJbmRleCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjaGF0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoYXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGF0c2VjdGlvblwiLCBcInVzZXJcIiwgXCJsb2FkZWRcIik7XG4gICAgY2hhdEVsZW1lbnQuaWQgPSBgY2hhdC0ke2NoYXRJbmRleH1gO1xuICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbmRhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzFcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMzEgMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI2LjUyNzggMy44ODA4M0MyNi4yMjQgMy40Nzg0OSAyNS42MjM0IDMuMzc5MTIgMjUuMTg2NCAzLjY1ODg5QzI0Ljc0OTUgMy45Mzg2NSAyNC42NDE1IDQuNDkxNjEgMjQuOTQ1NCA0Ljg5Mzk2QzI2Ljc1ODYgNy4yOTQ5OCAyNy43ODA5IDEwLjQ3OTMgMjcuNzgwOSAxMy45MzI1QzI3Ljc4MDkgMTcuMzg2IDI2Ljc1ODUgMjAuNTcxNSAyNC45NDU0IDIyLjk3MjNDMjQuNjQxNSAyMy4zNzQ3IDI0Ljc0OTUgMjMuOTI3NiAyNS4xODY0IDI0LjIwNzRDMjUuNjIzNCAyNC40ODcxIDI2LjIyNCAyNC4zODc4IDI2LjUyNzggMjMuOTg1NEMyOC41NzIxIDIxLjI3ODUgMjkuNzA4MyAxNy43Mzg2IDI5LjcwODMgMTMuOTMyNUMyOS43MDgzIDEwLjEyNjcgMjguNTcyMyA2LjU4Nzk4IDI2LjUyNzggMy44ODA4M1pNMTMuNjAyNyAzLjgwNDA5TDEzLjgwMjggMy43OTcwM0wxMy45ODUxIDMuNzk4ODJDMTUuMjg5NyAzLjg1NjQ4IDE2LjQwNTEgNC43NDIwMiAxNi44MzIxIDYuMDU1MThDMTYuOTUxMSA2LjQ3Mzg3IDE3LjAxODMgNi44ODMzNCAxNy4wOTY2IDcuNTQ5OTRMMTcuMjAwNyA4LjQyMzVDMTcuNDEwNCAxMC40NDg1IDE3LjQwMzcgMTguNDAzIDE3LjE4MDcgMjAuMDQyOUwxNy4wNDI0IDIxLjIxODhDMTYuOTg3NiAyMS42MTU0IDE2LjkyNTIgMjEuOTIwNSAxNi44MjMgMjIuMjcwNkMxNi4zODE3IDIzLjYyNzMgMTUuMTY0MSAyNC41MzYzIDEzLjgxNzggMjQuNDk4OUMxMy4xMzI1IDI0LjUxNDQgMTIuMjk3OSAyNC4xOTM0IDExLjcxNzQgMjMuNzQzOUw3LjE0MzAyIDIwLjMyMjRMNC43ODg3MyAyMC4zMjNDMy4wNTQzNyAyMC4zMjMgMS44MTkwNyAxOS4yNTEgMS41MTU2NCAxNy42MTU3TDEuNDgxMzkgMTcuMzk5M0MxLjIyNDQ2IDE1LjcxNzcgMS4yMzI0NCAxMi42NjA1IDEuNDgxMjggMTAuODIyOEMxLjczMDMgOS4xODM0MiAzLjAzMDYxIDcuOTczOTkgNC43ODg3MyA3Ljk3Mzk5TDcuMTQxNzMgNy45NzMzM0wxMS42MDIgNC42MjY4MkMxMi4xNDIgNC4yMDU2NyAxMi45NDc4IDMuODU5MjYgMTMuNjAyNyAzLjgwNDA5Wk0xMy44MjIyIDUuNTcwODNMMTMuNzczMyA1LjU3MUMxMy42MTc4IDUuNTY3OTEgMTMuMTE4IDUuNzcwMiAxMi44MzM4IDUuOTkxNjNMOC4wOTM5NSA5LjU0OTA3QzcuOTIxOTggOS42NzgxNCA3LjcwNjkyIDkuNzQ4NjIgNy40ODUwNiA5Ljc0ODYySDQuNzg4NzNDNC4wNTg1MiA5Ljc0ODYyIDMuNTEzNjEgMTAuMjU1NCAzLjM5MTk5IDExLjA1NTRDMy4xNjUyNyAxMi43MzA1IDMuMTU3NjkgMTUuNjMxNyAzLjM5MjM4IDE3LjE2ODhDMy41MTQyIDE4LjA5MzYgNC4wMDc1NiAxOC41NDgzIDQuNzg4NzMgMTguNTQ4M0g3LjQ4NTA2QzcuNzA2MzQgMTguNTQ4MyA3LjkyMDg3IDE4LjYxODUgOC4wOTI2MyAxOC43NDY5TDEyLjk0NTEgMjIuMzc1OUMxMy4yMDM0IDIyLjU3NTkgMTMuNjAwNSAyMi43Mjg2IDEzLjgyMjIgMjIuNzI0OUMxNC4zMDA5IDIyLjczNzggMTQuNzczOSAyMi4zODQ2IDE0Ljk2OSAyMS43ODYyQzE1LjA3MDQgMjEuNDM3OCAxNS4xMjMyIDIxLjExMTggMTUuMTg4NyAyMC41MTI2TDE1LjIzMTQgMjAuMTIyOEwxNS4yNjc5IDE5LjgyNTJDMTUuNDc4MyAxOC4yNzc3IDE1LjQ3ODMgMTAuMDE5MiAxNS4yNjc2IDguNDY5MTNMMTUuMTMwNyA3LjM0NTE3QzE1LjA5ODQgNy4xMDc5OCAxNS4wNjcgNi45MjAwNiAxNS4wMzIxIDYuNzU4OTVMMTQuOTc2NyA2LjUzNDU2QzE0Ljc3MzkgNS45MTE4IDE0LjMwMDIgNS41NTc5OCAxMy44MjIyIDUuNTcwODNaTTIwLjc3NzggNy4yNzk2OUMyMS4yMTQ4IDYuOTk5OTUgMjEuODE1MyA3LjA5OTM1IDIyLjExOTEgNy41MDE3MUMyMy40MzE4IDkuMjQwMSAyNC4xNTg2IDExLjUwNDIgMjQuMTU4NiAxMy45MzMxQzI0LjE1ODYgMTYuMzYxOCAyMy40MzE5IDE4LjYyNDggMjIuMTE5MSAyMC4zNjM0QzIxLjgxNTMgMjAuNzY1NyAyMS4yMTQ4IDIwLjg2NTEgMjAuNzc3OCAyMC41ODU0QzIwLjM0MDggMjAuMzA1NiAyMC4yMzI4IDE5Ljc1MjcgMjAuNTM2NiAxOS4zNTAzQzIxLjYxODMgMTcuOTE3OCAyMi4yMzEyIDE2LjAwOTIgMjIuMjMxMiAxMy45MzMxQzIyLjIzMTIgMTEuODU2OCAyMS42MTgxIDkuOTQ3MDMgMjAuNTM2NiA4LjUxNDc1QzIwLjIzMjggOC4xMTIzOSAyMC4zNDA4IDcuNTU5NDQgMjAuNzc3OCA3LjI3OTY5WlwiIGZpbGw9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdGJveCB1c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjExNi41ODcgMTk2LjI0NiA5NS41ODEgOTkuMTA5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAyMDYuNTg3IDI5NS4zNTUgQyAxNTYuODgxIDI5NS4zNTUgMTE2LjU4NyAyNTUuMDYxIDExNi41ODcgMjA1LjM1NSBDIDExNi41ODcgMjAyLjI4IDExNi43NDEgMTk5LjI0MSAxMTcuMDQyIDE5Ni4yNDYgTCAxNzYuMzEyIDE5Ni4yNDYgQyAxNzMuMjA0IDIwNC45MzQgMTcxLjUxMSAyMTQuMjk0IDE3MS41MTEgMjI0LjA1IEMgMTcxLjUxMSAyNTQuMzQ2IDE4Ny44MzUgMjgwLjgzIDIxMi4xNjggMjk1LjE4NSBDIDIxMC4zMjIgMjk1LjI5OCAyMDguNDYxIDI5NS4zNTUgMjA2LjU4NyAyOTUuMzU1IFpcIiBzdHlsZT1cImZpbGw6IHJnYigzOCwgMzcsIDQyKTsgdHJhbnNmb3JtLW9yaWdpbjogMTY0LjM3N3B4IDI0NS44MDJweDtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcbiAgICBzY3JvbGxJbnRvVG9wKGNoYXRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEdQVENoYXQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hhdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoYXRzZWN0aW9uXCIsIFwiYWlcIik7XG4gICAgY2hhdEVsZW1lbnQuaWQgPSBgY2hhdC0ke2NoYXRJbmRleH1gO1xuICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PYnJvbGluIEFJPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzFcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMzEgMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI2LjUyNzggMy44ODA4M0MyNi4yMjQgMy40Nzg0OSAyNS42MjM0IDMuMzc5MTIgMjUuMTg2NCAzLjY1ODg5QzI0Ljc0OTUgMy45Mzg2NSAyNC42NDE1IDQuNDkxNjEgMjQuOTQ1NCA0Ljg5Mzk2QzI2Ljc1ODYgNy4yOTQ5OCAyNy43ODA5IDEwLjQ3OTMgMjcuNzgwOSAxMy45MzI1QzI3Ljc4MDkgMTcuMzg2IDI2Ljc1ODUgMjAuNTcxNSAyNC45NDU0IDIyLjk3MjNDMjQuNjQxNSAyMy4zNzQ3IDI0Ljc0OTUgMjMuOTI3NiAyNS4xODY0IDI0LjIwNzRDMjUuNjIzNCAyNC40ODcxIDI2LjIyNCAyNC4zODc4IDI2LjUyNzggMjMuOTg1NEMyOC41NzIxIDIxLjI3ODUgMjkuNzA4MyAxNy43Mzg2IDI5LjcwODMgMTMuOTMyNUMyOS43MDgzIDEwLjEyNjcgMjguNTcyMyA2LjU4Nzk4IDI2LjUyNzggMy44ODA4M1pNMTMuNjAyNyAzLjgwNDA5TDEzLjgwMjggMy43OTcwM0wxMy45ODUxIDMuNzk4ODJDMTUuMjg5NyAzLjg1NjQ4IDE2LjQwNTEgNC43NDIwMiAxNi44MzIxIDYuMDU1MThDMTYuOTUxMSA2LjQ3Mzg3IDE3LjAxODMgNi44ODMzNCAxNy4wOTY2IDcuNTQ5OTRMMTcuMjAwNyA4LjQyMzVDMTcuNDEwNCAxMC40NDg1IDE3LjQwMzcgMTguNDAzIDE3LjE4MDcgMjAuMDQyOUwxNy4wNDI0IDIxLjIxODhDMTYuOTg3NiAyMS42MTU0IDE2LjkyNTIgMjEuOTIwNSAxNi44MjMgMjIuMjcwNkMxNi4zODE3IDIzLjYyNzMgMTUuMTY0MSAyNC41MzYzIDEzLjgxNzggMjQuNDk4OUMxMy4xMzI1IDI0LjUxNDQgMTIuMjk3OSAyNC4xOTM0IDExLjcxNzQgMjMuNzQzOUw3LjE0MzAyIDIwLjMyMjRMNC43ODg3MyAyMC4zMjNDMy4wNTQzNyAyMC4zMjMgMS44MTkwNyAxOS4yNTEgMS41MTU2NCAxNy42MTU3TDEuNDgxMzkgMTcuMzk5M0MxLjIyNDQ2IDE1LjcxNzcgMS4yMzI0NCAxMi42NjA1IDEuNDgxMjggMTAuODIyOEMxLjczMDMgOS4xODM0MiAzLjAzMDYxIDcuOTczOTkgNC43ODg3MyA3Ljk3Mzk5TDcuMTQxNzMgNy45NzMzM0wxMS42MDIgNC42MjY4MkMxMi4xNDIgNC4yMDU2NyAxMi45NDc4IDMuODU5MjYgMTMuNjAyNyAzLjgwNDA5Wk0xMy44MjIyIDUuNTcwODNMMTMuNzczMyA1LjU3MUMxMy42MTc4IDUuNTY3OTEgMTMuMTE4IDUuNzcwMiAxMi44MzM4IDUuOTkxNjNMOC4wOTM5NSA5LjU0OTA3QzcuOTIxOTggOS42NzgxNCA3LjcwNjkyIDkuNzQ4NjIgNy40ODUwNiA5Ljc0ODYySDQuNzg4NzNDNC4wNTg1MiA5Ljc0ODYyIDMuNTEzNjEgMTAuMjU1NCAzLjM5MTk5IDExLjA1NTRDMy4xNjUyNyAxMi43MzA1IDMuMTU3NjkgMTUuNjMxNyAzLjM5MjM4IDE3LjE2ODhDMy41MTQyIDE4LjA5MzYgNC4wMDc1NiAxOC41NDgzIDQuNzg4NzMgMTguNTQ4M0g3LjQ4NTA2QzcuNzA2MzQgMTguNTQ4MyA3LjkyMDg3IDE4LjYxODUgOC4wOTI2MyAxOC43NDY5TDEyLjk0NTEgMjIuMzc1OUMxMy4yMDM0IDIyLjU3NTkgMTMuNjAwNSAyMi43Mjg2IDEzLjgyMjIgMjIuNzI0OUMxNC4zMDA5IDIyLjczNzggMTQuNzczOSAyMi4zODQ2IDE0Ljk2OSAyMS43ODYyQzE1LjA3MDQgMjEuNDM3OCAxNS4xMjMyIDIxLjExMTggMTUuMTg4NyAyMC41MTI2TDE1LjIzMTQgMjAuMTIyOEwxNS4yNjc5IDE5LjgyNTJDMTUuNDc4MyAxOC4yNzc3IDE1LjQ3ODMgMTAuMDE5MiAxNS4yNjc2IDguNDY5MTNMMTUuMTMwNyA3LjM0NTE3QzE1LjA5ODQgNy4xMDc5OCAxNS4wNjcgNi45MjAwNiAxNS4wMzIxIDYuNzU4OTVMMTQuOTc2NyA2LjUzNDU2QzE0Ljc3MzkgNS45MTE4IDE0LjMwMDIgNS41NTc5OCAxMy44MjIyIDUuNTcwODNaTTIwLjc3NzggNy4yNzk2OUMyMS4yMTQ4IDYuOTk5OTUgMjEuODE1MyA3LjA5OTM1IDIyLjExOTEgNy41MDE3MUMyMy40MzE4IDkuMjQwMSAyNC4xNTg2IDExLjUwNDIgMjQuMTU4NiAxMy45MzMxQzI0LjE1ODYgMTYuMzYxOCAyMy40MzE5IDE4LjYyNDggMjIuMTE5MSAyMC4zNjM0QzIxLjgxNTMgMjAuNzY1NyAyMS4yMTQ4IDIwLjg2NTEgMjAuNzc3OCAyMC41ODU0QzIwLjM0MDggMjAuMzA1NiAyMC4yMzI4IDE5Ljc1MjcgMjAuNTM2NiAxOS4zNTAzQzIxLjYxODMgMTcuOTE3OCAyMi4yMzEyIDE2LjAwOTIgMjIuMjMxMiAxMy45MzMxQzIyLjIzMTIgMTEuODU2OCAyMS42MTgxIDkuOTQ3MDMgMjAuNTM2NiA4LjUxNDc1QzIwLjIzMjggOC4xMTIzOSAyMC4zNDA4IDcuNTU5NDQgMjAuNzc3OCA3LjI3OTY5WlwiIGZpbGw9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdGJveCBhaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjExNi41ODYgMTk2LjI0NiA5NS41ODEgOTkuMTA5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAyMDYuNTg3IDE5Ni4yNDkgQyAxNTYuODgxIDE5Ni4yNDkgMTE2LjU4NyAyMzYuNTQzIDExNi41ODcgMjg2LjI0OSBDIDExNi41ODcgMjg5LjMyNCAxMTYuNzQxIDI5Mi4zNjMgMTE3LjA0MiAyOTUuMzU4IEwgMTc2LjMxMiAyOTUuMzU4IEMgMTczLjIwNCAyODYuNjcgMTcxLjUxMSAyNzcuMzEgMTcxLjUxMSAyNjcuNTU0IEMgMTcxLjUxMSAyMzcuMjU4IDE4Ny44MzUgMjEwLjc3NCAyMTIuMTY4IDE5Ni40MTkgQyAyMTAuMzIyIDE5Ni4zMDYgMjA4LjQ2MSAxOTYuMjQ5IDIwNi41ODcgMTk2LjI0OSBaXCIgc3R5bGU9XCJmaWxsOiByZ2IoNDUsIDEwNCwgMjIwKTsgdHJhbnNmb3JtLW9yaWdpbjogMTY0LjM3N3B4IDI0NS44MDJweDtcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsIDAsIDAsIC0xLCAtMC4wMDAwMDQ2MzE2MDgsIC0wLjAwMDAwNjkyNTkpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2hhdEVsZW1lbnQpO1xuICAgIHNjcm9sbEludG9Ub3AoY2hhdEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hhdENvbnRlbnQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hhdC0ke2NoYXRJbmRleH1gKS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuICAgIGNvbnN0IHRhcmdldENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hhdC0ke2NoYXRJbmRleH0gZGl2LmNvbnRlbnRgKTtcbiAgICB0YXJnZXRDb250ZW50LmlubmVySFRNTCA9IGAke21lc3NhZ2V9YDtcbiAgICBzY3JvbGxJbnRvVG9wKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGF0LSR7Y2hhdEluZGV4LTF9YCkpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVG9wKHRhcmdldEVsZW1lbnQpe1xuICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=