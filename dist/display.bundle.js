/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
// export function clearRecommendation(){
//     const questionContainer = document.getElementById('recommendationQuestionContainer');
//     while(questionContainer.firstChild) questionContainer.removeChild(questionContainer.firstChild);
// }

// function clearKeyword(){
//     const keywordContainer = document.getElementById('recommendationKeywordContainer');
//     while(keywordContainer.firstChild) keywordContainer.removeChild(keywordContainer.firstChild);
// }

// export function generateKeywordElement(keyword){
//     const newKeyword = document.createElement('div');
//     newKeyword.classList.add('keyword');
//     newKeyword.innerHTML = keyword;
//     return newKeyword;
// }

// export function appendKeyword(newKeyword){
//     // console.log(keyword);
//     const keywordContainer = document.getElementById('keywordContainer');
//     keywordContainer.appendChild(newKeyword);
// }

// export function toggleOverlay(){
//     document.getElementById('darkOverlay').classList.toggle('hidden');
// }

// export function showPopUpRecommendation(keywordList){
//     document.getElementById('recommendationPopUp').classList.remove('hidden');
//     const keywordContainer = document.getElementById('recommendationKeywordContainer');
//     keywordList.forEach((keyword) => {
//         const newKeyword = document.createElement('div');
//         newKeyword.classList.add('keyword');
//         newKeyword.innerHTML = keyword;
//         keywordContainer.appendChild(newKeyword);
//     });
// }

// export function showRecommendation(elementList){
//     const questionContainer = document.getElementById('recommendationQuestionContainer');
//     elementList.forEach((element) => {
//         questionContainer.appendChild(element);
//     });
// }

// export function generateRecommendationElements(recommendationList){
//     let elementList = [];
//     recommendationList.forEach((question, index) => {
//         const newQuestion = document.createElement('div');
//         newQuestion.classList.add('questionChoice');
//         newQuestion.id = `r-${index}`;
//         newQuestion.innerHTML = question;
//         elementList.push(newQuestion);
//     });
//     return elementList;
// }

// export function selectRecommendation(index){
//     const target = document.getElementById(`r-${index}`);
//     target.classList.add('selected');
// }

// export function unselectRecommendation(index){
//     const target = document.getElementById(`r-${index}`);
//     target.classList.remove('selected');
// }


// export function hidePopUpRecommendation(){
//     document.getElementById('recommendationPopUp').classList.add('hidden');
//     clearRecommendation();
//     clearKeyword();
// }
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU07QUFDdkM7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7QUFDQTs7QUFFQTtBQUNBLG1EQUFtRCxNQUFNO0FBQ3pEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSSIsInNvdXJjZXMiOlsid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uKCl7XG4vLyAgICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lcicpO1xuLy8gICAgIHdoaWxlKHF1ZXN0aW9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHF1ZXN0aW9uQ29udGFpbmVyLnJlbW92ZUNoaWxkKHF1ZXN0aW9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjbGVhcktleXdvcmQoKXtcbi8vICAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcicpO1xuLy8gICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVLZXl3b3JkRWxlbWVudChrZXl3b3JkKXtcbi8vICAgICBjb25zdCBuZXdLZXl3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgbmV3S2V5d29yZC5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkJyk7XG4vLyAgICAgbmV3S2V5d29yZC5pbm5lckhUTUwgPSBrZXl3b3JkO1xuLy8gICAgIHJldHVybiBuZXdLZXl3b3JkO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gYXBwZW5kS2V5d29yZChuZXdLZXl3b3JkKXtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhrZXl3b3JkKTtcbi8vICAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleXdvcmRDb250YWluZXInKTtcbi8vICAgICBrZXl3b3JkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0tleXdvcmQpO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheSgpe1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrT3ZlcmxheScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2hvd1BvcFVwUmVjb21tZW5kYXRpb24oa2V5d29yZExpc3Qpe1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4vLyAgICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXInKTtcbi8vICAgICBrZXl3b3JkTGlzdC5mb3JFYWNoKChrZXl3b3JkKSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG5ld0tleXdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vICAgICAgICAgbmV3S2V5d29yZC5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkJyk7XG4vLyAgICAgICAgIG5ld0tleXdvcmQuaW5uZXJIVE1MID0ga2V5d29yZDtcbi8vICAgICAgICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdLZXl3b3JkKTtcbi8vICAgICB9KTtcbi8vIH1cblxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNob3dSZWNvbW1lbmRhdGlvbihlbGVtZW50TGlzdCl7XG4vLyAgICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lcicpO1xuLy8gICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbi8vICAgICAgICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4vLyAgICAgfSk7XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJlY29tbWVuZGF0aW9uRWxlbWVudHMocmVjb21tZW5kYXRpb25MaXN0KXtcbi8vICAgICBsZXQgZWxlbWVudExpc3QgPSBbXTtcbi8vICAgICByZWNvbW1lbmRhdGlvbkxpc3QuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4vLyAgICAgICAgIGNvbnN0IG5ld1F1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4vLyAgICAgICAgIG5ld1F1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3F1ZXN0aW9uQ2hvaWNlJyk7XG4vLyAgICAgICAgIG5ld1F1ZXN0aW9uLmlkID0gYHItJHtpbmRleH1gO1xuLy8gICAgICAgICBuZXdRdWVzdGlvbi5pbm5lckhUTUwgPSBxdWVzdGlvbjtcbi8vICAgICAgICAgZWxlbWVudExpc3QucHVzaChuZXdRdWVzdGlvbik7XG4vLyAgICAgfSk7XG4vLyAgICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuLy8gICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByLSR7aW5kZXh9YCk7XG4vLyAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4vLyB9XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiB1bnNlbGVjdFJlY29tbWVuZGF0aW9uKGluZGV4KXtcbi8vICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgci0ke2luZGV4fWApO1xuLy8gICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuLy8gfVxuXG5cbi8vIGV4cG9ydCBmdW5jdGlvbiBoaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpe1xuLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4vLyAgICAgY2xlYXJSZWNvbW1lbmRhdGlvbigpO1xuLy8gICAgIGNsZWFyS2V5d29yZCgpO1xuLy8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==