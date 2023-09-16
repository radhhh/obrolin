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
/*!****************************!*\
  !*** ./src/scripts/tts.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initElement: () => (/* binding */ initElement)
/* harmony export */ });
const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance();
let selectedVoice = synth.getVoices().filter((list) => list.lang == "id")[0];
let isPlaying = false;
let currentPlayingElement = undefined;

synth.addEventListener('voiceschanged', () => {
    selectedVoice = synth.getVoices().filter((list) => list.lang == "id")[0];
})

function initElement(element, button, text){
    button.addEventListener('click', () => {
        if(element.classList.contains('playing')){
            stopSpeak();
        }
        else{
            stopSpeak();
            currentPlayingElement = element;
            startSpeak(text);
        }
    });
}

utterance.addEventListener('end', () => {
    isPlaying = false;
    currentPlayingElement.classList.remove('playing');
    currentPlayingElement = undefined;
});


function startSpeak(text){
    utterance.text = text;
    utterance.voice = selectedVoice;
    utterance.lang = "id";
    isPlaying = true;
    currentPlayingElement.classList.add('playing');
    synth.speak(utterance);
}

function stopSpeak(){
    if(!isPlaying) return;
    synth.resume();
    synth.cancel();
    isPlaying = false;
    currentPlayingElement.classList.remove('playing');
    currentPlayingElement = undefined;
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHRzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29icm9saW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvdHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3Qgc3ludGggPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzO1xuY29uc3QgdXR0ZXJhbmNlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSgpO1xubGV0IHNlbGVjdGVkVm9pY2UgPSBzeW50aC5nZXRWb2ljZXMoKS5maWx0ZXIoKGxpc3QpID0+IGxpc3QubGFuZyA9PSBcImlkXCIpWzBdO1xubGV0IGlzUGxheWluZyA9IGZhbHNlO1xubGV0IGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuc3ludGguYWRkRXZlbnRMaXN0ZW5lcigndm9pY2VzY2hhbmdlZCcsICgpID0+IHtcbiAgICBzZWxlY3RlZFZvaWNlID0gc3ludGguZ2V0Vm9pY2VzKCkuZmlsdGVyKChsaXN0KSA9PiBsaXN0LmxhbmcgPT0gXCJpZFwiKVswXTtcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RWxlbWVudChlbGVtZW50LCBidXR0b24sIHRleHQpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSl7XG4gICAgICAgICAgICBzdG9wU3BlYWsoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc3RvcFNwZWFrKCk7XG4gICAgICAgICAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgc3RhcnRTcGVhayh0ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG51dHRlcmFuY2UuYWRkRXZlbnRMaXN0ZW5lcignZW5kJywgKCkgPT4ge1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xufSk7XG5cblxuZnVuY3Rpb24gc3RhcnRTcGVhayh0ZXh0KXtcbiAgICB1dHRlcmFuY2UudGV4dCA9IHRleHQ7XG4gICAgdXR0ZXJhbmNlLnZvaWNlID0gc2VsZWN0ZWRWb2ljZTtcbiAgICB1dHRlcmFuY2UubGFuZyA9IFwiaWRcIjtcbiAgICBpc1BsYXlpbmcgPSB0cnVlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgc3ludGguc3BlYWsodXR0ZXJhbmNlKTtcbn1cblxuZnVuY3Rpb24gc3RvcFNwZWFrKCl7XG4gICAgaWYoIWlzUGxheWluZykgcmV0dXJuO1xuICAgIHN5bnRoLnJlc3VtZSgpO1xuICAgIHN5bnRoLmNhbmNlbCgpO1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==