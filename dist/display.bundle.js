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
/* harmony export */   focusElement: () => (/* binding */ focusElement),
/* harmony export */   generateRecommendationElements: () => (/* binding */ generateRecommendationElements),
/* harmony export */   hidePopUpRecommendation: () => (/* binding */ hidePopUpRecommendation),
/* harmony export */   selectRecommendation: () => (/* binding */ selectRecommendation),
/* harmony export */   showPopUpRecommendation: () => (/* binding */ showPopUpRecommendation),
/* harmony export */   toggleOverlay: () => (/* binding */ toggleOverlay),
/* harmony export */   unselectRecommendation: () => (/* binding */ unselectRecommendation),
/* harmony export */   updateChatContent: () => (/* binding */ updateChatContent)
/* harmony export */ });
function focusElement(selector){
    const selected = document.querySelector(selector);
    selected.focus()
}

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
                                    <button id="chatSpeak-${chatIndex}">
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
                                    <button id="chatSpeak-${chatIndex}">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05PO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxNQUFNO0FBQ2pEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQLDZEQUE2RCxNQUFNO0FBQ25FO0FBQ0E7O0FBRU87QUFDUCw2REFBNkQsTUFBTTtBQUNuRTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsNERBQTRELFVBQVU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlYQUFpWCxzQ0FBc0M7QUFDdlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTtBQUN2QztBQUNBO0FBQ0E7QUFDQSw0REFBNEQsVUFBVTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb1hBQW9YLHNDQUFzQztBQUMxWjtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG9DQUFvQyxVQUFVO0FBQzlDLDBEQUEwRCxXQUFXO0FBQ3JFLGlDQUFpQyxRQUFRO0FBQ3pDLGtEQUFrRCxZQUFZO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIGZvY3VzRWxlbWVudChzZWxlY3Rvcil7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBzZWxlY3RlZC5mb2N1cygpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRLZXl3b3JkKG5ld0tleXdvcmQpe1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5d29yZENvbnRhaW5lcicpO1xuICAgIGtleXdvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3S2V5d29yZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcktleXdvcmQoKXtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleXdvcmRDb250YWluZXInKTtcbiAgICB3aGlsZShrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGtleXdvcmRDb250YWluZXIucmVtb3ZlQ2hpbGQoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUmVjb21tZW5kYXRpb25LZXl3b3JkKCl7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXInKTtcbiAgICB3aGlsZShrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGtleXdvcmRDb250YWluZXIucmVtb3ZlQ2hpbGQoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU92ZXJsYXkoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya092ZXJsYXknKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQb3BVcFJlY29tbWVuZGF0aW9uKGtleXdvcmRFbGVtZW50TGlzdCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUG9wVXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcicpO1xuICAgIGtleXdvcmRFbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGtleXdvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVJlY29tbWVuZGF0aW9uTG9hZGVkKHBhcmFtKXtcbiAgICBjb25zdCByZWNvbW1lbmRhdGlvblBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUG9wVXAnKTtcbiAgICBpZihwYXJhbSA9PSBcImFkZFwiKSByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIGVsc2UgaWYocGFyYW0gPT0gXCJyZW1vdmVcIikgcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZWQnKTtcbiAgICBlbHNlIHJlY29tbWVuZGF0aW9uUG9wVXAuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRSZWNvbW1lbmRhdGlvbihlbGVtZW50TGlzdCl7XG4gICAgdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQoJ2FkZCcpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbiAgICBlbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJSZWNvbW1lbmRhdGlvbigpe1xuICAgIHRvZ2dsZVJlY29tbWVuZGF0aW9uTG9hZGVkKCdyZW1vdmUnKTtcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyJyk7XG4gICAgd2hpbGUocXVlc3Rpb25Db250YWluZXIuZmlyc3RDaGlsZCkgcXVlc3Rpb25Db250YWluZXIucmVtb3ZlQ2hpbGQocXVlc3Rpb25Db250YWluZXIuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJlY29tbWVuZGF0aW9uRWxlbWVudHMocmVjb21tZW5kYXRpb25MaXN0KXtcbiAgICBsZXQgZWxlbWVudExpc3QgPSBbXTtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1F1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlY29tbWVuZGF0aW9uJyk7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmlkID0gYHJlY29tbWVuZGF0aW9uLSR7aW5kZXh9YDtcbiAgICAgICAgbmV3UXVlc3Rpb24uaW5uZXJIVE1MID0gcXVlc3Rpb247XG4gICAgICAgIGVsZW1lbnRMaXN0LnB1c2gobmV3UXVlc3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJlY29tbWVuZGF0aW9uKGluZGV4KXtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVjb21tZW5kYXRpb24tJHtpbmRleH1gKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvbW1lbmRhdGlvbi0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY2xlYXJSZWNvbW1lbmRhdGlvbigpO1xuICAgIGNsZWFyUmVjb21tZW5kYXRpb25LZXl3b3JkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyQ2hhdChtZXNzYWdlLCBjaGF0SW5kZXgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgY2hhdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGF0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hhdHNlY3Rpb25cIiwgXCJ1c2VyXCIsIFwibG9hZGVkXCIpO1xuICAgIGNoYXRFbGVtZW50LmlkID0gYGNoYXQtJHtjaGF0SW5kZXh9YDtcbiAgICBjaGF0RWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QW5kYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjaGF0U3BlYWstJHtjaGF0SW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMxXCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDMxIDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yNi41Mjc4IDMuODgwODNDMjYuMjI0IDMuNDc4NDkgMjUuNjIzNCAzLjM3OTEyIDI1LjE4NjQgMy42NTg4OUMyNC43NDk1IDMuOTM4NjUgMjQuNjQxNSA0LjQ5MTYxIDI0Ljk0NTQgNC44OTM5NkMyNi43NTg2IDcuMjk0OTggMjcuNzgwOSAxMC40NzkzIDI3Ljc4MDkgMTMuOTMyNUMyNy43ODA5IDE3LjM4NiAyNi43NTg1IDIwLjU3MTUgMjQuOTQ1NCAyMi45NzIzQzI0LjY0MTUgMjMuMzc0NyAyNC43NDk1IDIzLjkyNzYgMjUuMTg2NCAyNC4yMDc0QzI1LjYyMzQgMjQuNDg3MSAyNi4yMjQgMjQuMzg3OCAyNi41Mjc4IDIzLjk4NTRDMjguNTcyMSAyMS4yNzg1IDI5LjcwODMgMTcuNzM4NiAyOS43MDgzIDEzLjkzMjVDMjkuNzA4MyAxMC4xMjY3IDI4LjU3MjMgNi41ODc5OCAyNi41Mjc4IDMuODgwODNaTTEzLjYwMjcgMy44MDQwOUwxMy44MDI4IDMuNzk3MDNMMTMuOTg1MSAzLjc5ODgyQzE1LjI4OTcgMy44NTY0OCAxNi40MDUxIDQuNzQyMDIgMTYuODMyMSA2LjA1NTE4QzE2Ljk1MTEgNi40NzM4NyAxNy4wMTgzIDYuODgzMzQgMTcuMDk2NiA3LjU0OTk0TDE3LjIwMDcgOC40MjM1QzE3LjQxMDQgMTAuNDQ4NSAxNy40MDM3IDE4LjQwMyAxNy4xODA3IDIwLjA0MjlMMTcuMDQyNCAyMS4yMTg4QzE2Ljk4NzYgMjEuNjE1NCAxNi45MjUyIDIxLjkyMDUgMTYuODIzIDIyLjI3MDZDMTYuMzgxNyAyMy42MjczIDE1LjE2NDEgMjQuNTM2MyAxMy44MTc4IDI0LjQ5ODlDMTMuMTMyNSAyNC41MTQ0IDEyLjI5NzkgMjQuMTkzNCAxMS43MTc0IDIzLjc0MzlMNy4xNDMwMiAyMC4zMjI0TDQuNzg4NzMgMjAuMzIzQzMuMDU0MzcgMjAuMzIzIDEuODE5MDcgMTkuMjUxIDEuNTE1NjQgMTcuNjE1N0wxLjQ4MTM5IDE3LjM5OTNDMS4yMjQ0NiAxNS43MTc3IDEuMjMyNDQgMTIuNjYwNSAxLjQ4MTI4IDEwLjgyMjhDMS43MzAzIDkuMTgzNDIgMy4wMzA2MSA3Ljk3Mzk5IDQuNzg4NzMgNy45NzM5OUw3LjE0MTczIDcuOTczMzNMMTEuNjAyIDQuNjI2ODJDMTIuMTQyIDQuMjA1NjcgMTIuOTQ3OCAzLjg1OTI2IDEzLjYwMjcgMy44MDQwOVpNMTMuODIyMiA1LjU3MDgzTDEzLjc3MzMgNS41NzFDMTMuNjE3OCA1LjU2NzkxIDEzLjExOCA1Ljc3MDIgMTIuODMzOCA1Ljk5MTYzTDguMDkzOTUgOS41NDkwN0M3LjkyMTk4IDkuNjc4MTQgNy43MDY5MiA5Ljc0ODYyIDcuNDg1MDYgOS43NDg2Mkg0Ljc4ODczQzQuMDU4NTIgOS43NDg2MiAzLjUxMzYxIDEwLjI1NTQgMy4zOTE5OSAxMS4wNTU0QzMuMTY1MjcgMTIuNzMwNSAzLjE1NzY5IDE1LjYzMTcgMy4zOTIzOCAxNy4xNjg4QzMuNTE0MiAxOC4wOTM2IDQuMDA3NTYgMTguNTQ4MyA0Ljc4ODczIDE4LjU0ODNINy40ODUwNkM3LjcwNjM0IDE4LjU0ODMgNy45MjA4NyAxOC42MTg1IDguMDkyNjMgMTguNzQ2OUwxMi45NDUxIDIyLjM3NTlDMTMuMjAzNCAyMi41NzU5IDEzLjYwMDUgMjIuNzI4NiAxMy44MjIyIDIyLjcyNDlDMTQuMzAwOSAyMi43Mzc4IDE0Ljc3MzkgMjIuMzg0NiAxNC45NjkgMjEuNzg2MkMxNS4wNzA0IDIxLjQzNzggMTUuMTIzMiAyMS4xMTE4IDE1LjE4ODcgMjAuNTEyNkwxNS4yMzE0IDIwLjEyMjhMMTUuMjY3OSAxOS44MjUyQzE1LjQ3ODMgMTguMjc3NyAxNS40NzgzIDEwLjAxOTIgMTUuMjY3NiA4LjQ2OTEzTDE1LjEzMDcgNy4zNDUxN0MxNS4wOTg0IDcuMTA3OTggMTUuMDY3IDYuOTIwMDYgMTUuMDMyMSA2Ljc1ODk1TDE0Ljk3NjcgNi41MzQ1NkMxNC43NzM5IDUuOTExOCAxNC4zMDAyIDUuNTU3OTggMTMuODIyMiA1LjU3MDgzWk0yMC43Nzc4IDcuMjc5NjlDMjEuMjE0OCA2Ljk5OTk1IDIxLjgxNTMgNy4wOTkzNSAyMi4xMTkxIDcuNTAxNzFDMjMuNDMxOCA5LjI0MDEgMjQuMTU4NiAxMS41MDQyIDI0LjE1ODYgMTMuOTMzMUMyNC4xNTg2IDE2LjM2MTggMjMuNDMxOSAxOC42MjQ4IDIyLjExOTEgMjAuMzYzNEMyMS44MTUzIDIwLjc2NTcgMjEuMjE0OCAyMC44NjUxIDIwLjc3NzggMjAuNTg1NEMyMC4zNDA4IDIwLjMwNTYgMjAuMjMyOCAxOS43NTI3IDIwLjUzNjYgMTkuMzUwM0MyMS42MTgzIDE3LjkxNzggMjIuMjMxMiAxNi4wMDkyIDIyLjIzMTIgMTMuOTMzMUMyMi4yMzEyIDExLjg1NjggMjEuNjE4MSA5Ljk0NzAzIDIwLjUzNjYgOC41MTQ3NUMyMC4yMzI4IDguMTEyMzkgMjAuMzQwOCA3LjU1OTQ0IDIwLjc3NzggNy4yNzk2OVpcIiBmaWxsPVwiIzAwMDAwMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRib3ggdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIxMTYuNTg3IDE5Ni4yNDYgOTUuNTgxIDk5LjEwOVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gMjA2LjU4NyAyOTUuMzU1IEMgMTU2Ljg4MSAyOTUuMzU1IDExNi41ODcgMjU1LjA2MSAxMTYuNTg3IDIwNS4zNTUgQyAxMTYuNTg3IDIwMi4yOCAxMTYuNzQxIDE5OS4yNDEgMTE3LjA0MiAxOTYuMjQ2IEwgMTc2LjMxMiAxOTYuMjQ2IEMgMTczLjIwNCAyMDQuOTM0IDE3MS41MTEgMjE0LjI5NCAxNzEuNTExIDIyNC4wNSBDIDE3MS41MTEgMjU0LjM0NiAxODcuODM1IDI4MC44MyAyMTIuMTY4IDI5NS4xODUgQyAyMTAuMzIyIDI5NS4yOTggMjA4LjQ2MSAyOTUuMzU1IDIwNi41ODcgMjk1LjM1NSBaXCIgc3R5bGU9XCJmaWxsOiByZ2IoMzgsIDM3LCA0Mik7IHRyYW5zZm9ybS1vcmlnaW46IDE2NC4zNzdweCAyNDUuODAycHg7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG4gICAgc2Nyb2xsSW50b1RvcChjaGF0RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHUFRDaGF0KG1lc3NhZ2UsIGNoYXRJbmRleCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjaGF0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoYXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGF0c2VjdGlvblwiLCBcImFpXCIpO1xuICAgIGNoYXRFbGVtZW50LmlkID0gYGNoYXQtJHtjaGF0SW5kZXh9YDtcbiAgICBjaGF0RWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+T2Jyb2xpbiBBSTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjaGF0U3BlYWstJHtjaGF0SW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMxXCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDMxIDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yNi41Mjc4IDMuODgwODNDMjYuMjI0IDMuNDc4NDkgMjUuNjIzNCAzLjM3OTEyIDI1LjE4NjQgMy42NTg4OUMyNC43NDk1IDMuOTM4NjUgMjQuNjQxNSA0LjQ5MTYxIDI0Ljk0NTQgNC44OTM5NkMyNi43NTg2IDcuMjk0OTggMjcuNzgwOSAxMC40NzkzIDI3Ljc4MDkgMTMuOTMyNUMyNy43ODA5IDE3LjM4NiAyNi43NTg1IDIwLjU3MTUgMjQuOTQ1NCAyMi45NzIzQzI0LjY0MTUgMjMuMzc0NyAyNC43NDk1IDIzLjkyNzYgMjUuMTg2NCAyNC4yMDc0QzI1LjYyMzQgMjQuNDg3MSAyNi4yMjQgMjQuMzg3OCAyNi41Mjc4IDIzLjk4NTRDMjguNTcyMSAyMS4yNzg1IDI5LjcwODMgMTcuNzM4NiAyOS43MDgzIDEzLjkzMjVDMjkuNzA4MyAxMC4xMjY3IDI4LjU3MjMgNi41ODc5OCAyNi41Mjc4IDMuODgwODNaTTEzLjYwMjcgMy44MDQwOUwxMy44MDI4IDMuNzk3MDNMMTMuOTg1MSAzLjc5ODgyQzE1LjI4OTcgMy44NTY0OCAxNi40MDUxIDQuNzQyMDIgMTYuODMyMSA2LjA1NTE4QzE2Ljk1MTEgNi40NzM4NyAxNy4wMTgzIDYuODgzMzQgMTcuMDk2NiA3LjU0OTk0TDE3LjIwMDcgOC40MjM1QzE3LjQxMDQgMTAuNDQ4NSAxNy40MDM3IDE4LjQwMyAxNy4xODA3IDIwLjA0MjlMMTcuMDQyNCAyMS4yMTg4QzE2Ljk4NzYgMjEuNjE1NCAxNi45MjUyIDIxLjkyMDUgMTYuODIzIDIyLjI3MDZDMTYuMzgxNyAyMy42MjczIDE1LjE2NDEgMjQuNTM2MyAxMy44MTc4IDI0LjQ5ODlDMTMuMTMyNSAyNC41MTQ0IDEyLjI5NzkgMjQuMTkzNCAxMS43MTc0IDIzLjc0MzlMNy4xNDMwMiAyMC4zMjI0TDQuNzg4NzMgMjAuMzIzQzMuMDU0MzcgMjAuMzIzIDEuODE5MDcgMTkuMjUxIDEuNTE1NjQgMTcuNjE1N0wxLjQ4MTM5IDE3LjM5OTNDMS4yMjQ0NiAxNS43MTc3IDEuMjMyNDQgMTIuNjYwNSAxLjQ4MTI4IDEwLjgyMjhDMS43MzAzIDkuMTgzNDIgMy4wMzA2MSA3Ljk3Mzk5IDQuNzg4NzMgNy45NzM5OUw3LjE0MTczIDcuOTczMzNMMTEuNjAyIDQuNjI2ODJDMTIuMTQyIDQuMjA1NjcgMTIuOTQ3OCAzLjg1OTI2IDEzLjYwMjcgMy44MDQwOVpNMTMuODIyMiA1LjU3MDgzTDEzLjc3MzMgNS41NzFDMTMuNjE3OCA1LjU2NzkxIDEzLjExOCA1Ljc3MDIgMTIuODMzOCA1Ljk5MTYzTDguMDkzOTUgOS41NDkwN0M3LjkyMTk4IDkuNjc4MTQgNy43MDY5MiA5Ljc0ODYyIDcuNDg1MDYgOS43NDg2Mkg0Ljc4ODczQzQuMDU4NTIgOS43NDg2MiAzLjUxMzYxIDEwLjI1NTQgMy4zOTE5OSAxMS4wNTU0QzMuMTY1MjcgMTIuNzMwNSAzLjE1NzY5IDE1LjYzMTcgMy4zOTIzOCAxNy4xNjg4QzMuNTE0MiAxOC4wOTM2IDQuMDA3NTYgMTguNTQ4MyA0Ljc4ODczIDE4LjU0ODNINy40ODUwNkM3LjcwNjM0IDE4LjU0ODMgNy45MjA4NyAxOC42MTg1IDguMDkyNjMgMTguNzQ2OUwxMi45NDUxIDIyLjM3NTlDMTMuMjAzNCAyMi41NzU5IDEzLjYwMDUgMjIuNzI4NiAxMy44MjIyIDIyLjcyNDlDMTQuMzAwOSAyMi43Mzc4IDE0Ljc3MzkgMjIuMzg0NiAxNC45NjkgMjEuNzg2MkMxNS4wNzA0IDIxLjQzNzggMTUuMTIzMiAyMS4xMTE4IDE1LjE4ODcgMjAuNTEyNkwxNS4yMzE0IDIwLjEyMjhMMTUuMjY3OSAxOS44MjUyQzE1LjQ3ODMgMTguMjc3NyAxNS40NzgzIDEwLjAxOTIgMTUuMjY3NiA4LjQ2OTEzTDE1LjEzMDcgNy4zNDUxN0MxNS4wOTg0IDcuMTA3OTggMTUuMDY3IDYuOTIwMDYgMTUuMDMyMSA2Ljc1ODk1TDE0Ljk3NjcgNi41MzQ1NkMxNC43NzM5IDUuOTExOCAxNC4zMDAyIDUuNTU3OTggMTMuODIyMiA1LjU3MDgzWk0yMC43Nzc4IDcuMjc5NjlDMjEuMjE0OCA2Ljk5OTk1IDIxLjgxNTMgNy4wOTkzNSAyMi4xMTkxIDcuNTAxNzFDMjMuNDMxOCA5LjI0MDEgMjQuMTU4NiAxMS41MDQyIDI0LjE1ODYgMTMuOTMzMUMyNC4xNTg2IDE2LjM2MTggMjMuNDMxOSAxOC42MjQ4IDIyLjExOTEgMjAuMzYzNEMyMS44MTUzIDIwLjc2NTcgMjEuMjE0OCAyMC44NjUxIDIwLjc3NzggMjAuNTg1NEMyMC4zNDA4IDIwLjMwNTYgMjAuMjMyOCAxOS43NTI3IDIwLjUzNjYgMTkuMzUwM0MyMS42MTgzIDE3LjkxNzggMjIuMjMxMiAxNi4wMDkyIDIyLjIzMTIgMTMuOTMzMUMyMi4yMzEyIDExLjg1NjggMjEuNjE4MSA5Ljk0NzAzIDIwLjUzNjYgOC41MTQ3NUMyMC4yMzI4IDguMTEyMzkgMjAuMzQwOCA3LjU1OTQ0IDIwLjc3NzggNy4yNzk2OVpcIiBmaWxsPVwiIzAwMDAwMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRib3ggYWlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvd2VyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIxMTYuNTg2IDE5Ni4yNDYgOTUuNTgxIDk5LjEwOVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gMjA2LjU4NyAxOTYuMjQ5IEMgMTU2Ljg4MSAxOTYuMjQ5IDExNi41ODcgMjM2LjU0MyAxMTYuNTg3IDI4Ni4yNDkgQyAxMTYuNTg3IDI4OS4zMjQgMTE2Ljc0MSAyOTIuMzYzIDExNy4wNDIgMjk1LjM1OCBMIDE3Ni4zMTIgMjk1LjM1OCBDIDE3My4yMDQgMjg2LjY3IDE3MS41MTEgMjc3LjMxIDE3MS41MTEgMjY3LjU1NCBDIDE3MS41MTEgMjM3LjI1OCAxODcuODM1IDIxMC43NzQgMjEyLjE2OCAxOTYuNDE5IEMgMjEwLjMyMiAxOTYuMzA2IDIwOC40NjEgMTk2LjI0OSAyMDYuNTg3IDE5Ni4yNDkgWlwiIHN0eWxlPVwiZmlsbDogcmdiKDQ1LCAxMDQsIDIyMCk7IHRyYW5zZm9ybS1vcmlnaW46IDE2NC4zNzdweCAyNDUuODAycHg7XCIgdHJhbnNmb3JtPVwibWF0cml4KC0xLCAwLCAwLCAtMSwgLTAuMDAwMDA0NjMxNjA4LCAtMC4wMDAwMDY5MjU5KVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvd2VyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcbiAgICBzY3JvbGxJbnRvVG9wKGNoYXRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUNoYXRDb250ZW50KG1lc3NhZ2UsIGNoYXRJbmRleCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXQtJHtjaGF0SW5kZXh9YCkuY2xhc3NMaXN0LmFkZChcImxvYWRlZFwiKTtcbiAgICBjb25zdCB0YXJnZXRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NoYXQtJHtjaGF0SW5kZXh9IGRpdi5jb250ZW50YCk7XG4gICAgdGFyZ2V0Q29udGVudC5pbm5lckhUTUwgPSBgJHttZXNzYWdlfWA7XG4gICAgc2Nyb2xsSW50b1RvcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hhdC0ke2NoYXRJbmRleC0xfWApKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSW50b1RvcCh0YXJnZXRFbGVtZW50KXtcbiAgICB0YXJnZXRFbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9