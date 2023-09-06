/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    font-family: 'Lato';
    font-weight: 700;
    font-size: 1em;
    margin: 0px;
    padding: 0px;
    position: relative;
    text-decoration-style: none;
}

:root{
    font-size: 16px;
    scroll-behavior: smooth;
}

body, html{
    min-height: 100%;
    width: 100%;
}

body{
    padding-top: 5em;
    padding-bottom: 7em;
}

header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    padding: 1em 2em;
    box-sizing: border-box;
    background-color: white;
}

header > div.container{
    display: flex;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
}

header h1{
    font-weight: 900;
    font-size: 2rem;
    cursor: default;
}

header button{
    top: 0.4em;
    display: block;
    box-sizing: border-box;
    border: none;
    background-color: white;
}

button svg path#Info-Square-2{
    fill: black;
}

button:hover svg path#Info-Square-2{
    fill: #2D68DC;
}

main{
    padding: 0 2em;
}

strong{
    font-weight: 900;
}

div.chatsection{
    margin-bottom: 1em;
    display: flex;
}

div.chatsection.user{
    justify-content: flex-end;
    padding-left: 3em;
}

div.chatsection.ai{
    justify-content: flex-start;
    padding-right: 3em;
}
div.chatsection h3{
    color: #8E8D94;
    font-size: 0.8rem;
    font-weight: 900;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.827px; 
    margin-left: 2em;
    margin-bottom: 0.3em;
}

div.chatbox{
    color: white;
    font-size: 1rem;
    display: flex;
    width: fit-content;
    max-width: 75ch;
}

div.chatbox > div.content{
    padding: 1em 0 1em;
    min-width: 15ch;
    line-height: 1.5;
    flex: 1;
}

div.chatbox > div.content *:not(:first-child){
    margin-top: 0.5em;
}

div.chatbox > div.content ol, 
div.chatbox > div.content ul{
    margin-left: 1em;
}

div.chatbox > div.left-box{
    display: flex;
    flex-direction: column;
    width: 1.5em;
    align-items: flex-end;
}

div.chatbox > div.right-box{
    display: flex;
    flex-direction: column;
    width: 1.5em;
    align-items: flex-start;
}

div.middle-left, div.middle-right{
    width: 1em;
    flex: 1;
}

div.upper-left, 
div.lower-left, 
div.upper-right, 
div.lower-right{
    height: 1em;
    width: 1em;
}

div.upper-left{
    border-radius: 1em 0px 0px 0px; 
}
div.upper-right{
    border-radius: 0px 1em 0px 0px;
}
div.lower-right{
    border-radius: 0px 0em 1em 0px;
}
div.lower-left{
    border-radius: 0px 0em 0px 1em;
}

div.chatbox.user > div.left-box > div,
div.chatbox.user > div.right-box > div{
    background-color: #26252A;
}

div.chatbox.user > div.content{
    background-color: #26252A;
}

div.chatbox.ai > div.left-box > div,
div.chatbox.ai > div.right-box > div{
    background-color: #2D68DC;
}

div.chatbox.ai > div.content{
    background-color: #2D68DC;
}

div.content div{
    width: 100%;
}

div.chatbox svg{
    position: absolute;
    bottom: 1px;
    width: 1.5em;
}

div.chatbox.ai svg{
    left: -1px;
}

div.chatbox.user svg{
    right: -1px;
}


/* Input Section */

section#inputContainer{
    display: flex;
    position: fixed;
    align-items: flex-end;
    gap: 0.6em;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 1em 2em 2em;
}

section#inputContainer button:hover{
    background-color: hsl(220, 71%, 40%);
}

button#voiceInputButton{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5em;
    height: 5em;
    flex-shrink: 0;
    border-radius: 10px 48.5px 10px 10px;
    border: 1px solid #2D68DC;
    background-color: #2D68DC;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

button#voiceInputButton > svg{
    display: block;
    position: relative;
    top: 0.1em;
    right: 0.1em;
    width: 2.2em;
    height: auto;
    padding: 5.417px 10.833px;
}

div#middleInputContainer{
    flex: 1;
}

div#middleInputContainer > textarea{
    letter-spacing: 0.5px;
    color: white;
    height: 2.5em;
    font-size: 1rem;
    padding: 0.6em 0.5em 0.4em;
    width: 100%;
    border-radius: 10px;
    border: 1px solid #2D68DC;
    background: #2D68DC;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    resize: none;
}

div#middleInputContainer textarea:hover{
    background-color: hsl(220, 71%, 48%);
}

div#middleInputContainer textarea:focus{
    outline: none;
    background: #2D68DC;
}

div#middleInputContainer > div#keywordContainer{
    width: 100%;
    margin-bottom: 0.3em;
}

.keyword{
    color: white;
    font-size: 0.9rem;
    display: inline-block;
    padding: 0.3em 0.7em;
    width: max(5ch, fit-content);
    margin: 0 0.3em 0.15em 0;
    background: #2D68DC;
    border-radius: 0.7em;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    border: none;
}

div#keywordContainer .keyword{
    cursor: pointer;
}

div#keywordContainer .keyword:hover{
    background-color: hsl(220, 71%, 40%);
}

div#keywordContainer .keyword .keyword-close{
    display: none;
}

div#keywordContainer .keyword.select-mode{
    background-color: hsl(220, 71%, 30%);
    color: hsl(220, 71%, 48%);
}

div#keywordContainer .keyword.select-mode:hover{
    background-color: hsl(220, 71%, 20%);
}

div#keywordContainer .keyword.select-mode .keyword-close{
    text-align: center;
    color: white;
    font-weight: 900;
    opacity: 1;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


div#keywordContainer .keyword .keyword-close svg{
    top: 0.1em;
    height: 1em;
    width: 1em;
}

div#rightButtonContainer{
    display: flex;
    width: 5.4em;
    gap: 0.4em;
}

div#rightButtonContainer > button{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    height: 2.5em;
    width: 2.5em;
    background-color: #2D68DC;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

div#rightButtonContainer svg {
    width: 1.2em;
}

/* Pop Up Section */

.hidden{
    transform: translate(-50%, -50%) scale(0) !important;
}

div#darkOverlay{
    z-index: 200;
    width: 100%;
    height: 100%;
    background-color: hsla(220, 69%, 5%, 0.5);
}

.center-popup{
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
}

div#recommendationPopUp{
    font-size: 1.2rem;
    width: min(80vw, 60ch);
    border-radius: 0.5em;
    z-index: 300;
    padding: 1.2em 1em 1em;
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.149) inset;
}

div#recommendationPopUp > h3{
    margin-bottom: 0.2em;
}

div#recommendationPopUp > div{
    margin-bottom: 0.5em;
}

div.recommendation{
    cursor: pointer;
    font-size: 1rem;
    color: white;
    background-color: #2D68DC;
    padding: 0.5em 0.7em;
    border-radius: 0.5em;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
}

div.recommendation:not(:last-child){
    margin-bottom: 0.5em;
}

div.recommendation:hover{
    background-color: hsl(220, 71%, 40%);
}

div.recommendation.selected{
    background-color: hsl(220, 71%, 30%);
    outline: hsl(220, 71%, 20%) 2px solid;
}

div#actionButtons{
    margin-top: 0.8em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
}

button#refreshButton{
    display: none;
    font-size: 1rem;
    background-color: white;
    box-shadow: none;
    border: none;
    text-decoration: underline;
}

button#refreshButton:hover{
    color: hsl(220, 71%, 40%);
}

.loaded button#refreshButton{
    display: block;
}

div#centerButtons button:hover{
    background-color: hsl(220, 71%, 40%);
}

div#centerButtons{
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}

div#centerButtons > button{
    font-size: 1rem;
    color: white;
    width: 12ch;
    height: 1.8em;
    background-color: #2D68DC;
    border-radius: 0.2em;
    border: none;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}


/* Animation Part */

#recommendationPopUp .dot-flashing{
    margin: auto;
}

.dot-flashing {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #2D68DC;
    color: #2D68DC;
    animation: dot-flashing 0.6s infinite linear alternate;
    animation-delay: 0.3s;
}

.loaded .dot-flashing{
    display: none;
}

.dot-flashing::before, .dot-flashing::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 0;
}

.dot-flashing::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #2D68DC;
    color: #2D68DC;
    animation: dot-flashing 0.6s infinite alternate;
    animation-delay: 0s;
}

.dot-flashing::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #2D68DC;
    color: #2D68DC;
    animation: dot-flashing 0.6s infinite alternate;
    animation-delay: 0.6s;
}
  
@keyframes dot-flashing {
    0% {
      background-color: #2D68DC;
    }
    50%, 100% {
      background-color: rgba(152, 128, 255, 0.2);
    }
}

div.content > div.dot-flashing.blue{
    margin: auto;
    width: 10px;
}

.dot-flashing.blue, .dot-flashing.blue::before, .dot-flashing.blue::after{
    background-color: white;
    animation-name: dot-flashing-blue;
}

@keyframes dot-flashing-blue {
    0% {
        background-color: white;
    }
    50%, 100% {
        background-color: hsl(220, 71%, 80%);
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: 'Lato';\n    font-weight: 700;\n    font-size: 1em;\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    text-decoration-style: none;\n}\n\n:root{\n    font-size: 16px;\n    scroll-behavior: smooth;\n}\n\nbody, html{\n    min-height: 100%;\n    width: 100%;\n}\n\nbody{\n    padding-top: 5em;\n    padding-bottom: 7em;\n}\n\nheader{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    padding: 1em 2em;\n    box-sizing: border-box;\n    background-color: white;\n}\n\nheader > div.container{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader h1{\n    font-weight: 900;\n    font-size: 2rem;\n    cursor: default;\n}\n\nheader button{\n    top: 0.4em;\n    display: block;\n    box-sizing: border-box;\n    border: none;\n    background-color: white;\n}\n\nbutton svg path#Info-Square-2{\n    fill: black;\n}\n\nbutton:hover svg path#Info-Square-2{\n    fill: #2D68DC;\n}\n\nmain{\n    padding: 0 2em;\n}\n\nstrong{\n    font-weight: 900;\n}\n\ndiv.chatsection{\n    margin-bottom: 1em;\n    display: flex;\n}\n\ndiv.chatsection.user{\n    justify-content: flex-end;\n    padding-left: 3em;\n}\n\ndiv.chatsection.ai{\n    justify-content: flex-start;\n    padding-right: 3em;\n}\ndiv.chatsection h3{\n    color: #8E8D94;\n    font-size: 0.8rem;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.827px; \n    margin-left: 2em;\n    margin-bottom: 0.3em;\n}\n\ndiv.chatbox{\n    color: white;\n    font-size: 1rem;\n    display: flex;\n    width: fit-content;\n    max-width: 75ch;\n}\n\ndiv.chatbox > div.content{\n    padding: 1em 0 1em;\n    min-width: 15ch;\n    line-height: 1.5;\n    flex: 1;\n}\n\ndiv.chatbox > div.content *:not(:first-child){\n    margin-top: 0.5em;\n}\n\ndiv.chatbox > div.content ol, \ndiv.chatbox > div.content ul{\n    margin-left: 1em;\n}\n\ndiv.chatbox > div.left-box{\n    display: flex;\n    flex-direction: column;\n    width: 1.5em;\n    align-items: flex-end;\n}\n\ndiv.chatbox > div.right-box{\n    display: flex;\n    flex-direction: column;\n    width: 1.5em;\n    align-items: flex-start;\n}\n\ndiv.middle-left, div.middle-right{\n    width: 1em;\n    flex: 1;\n}\n\ndiv.upper-left, \ndiv.lower-left, \ndiv.upper-right, \ndiv.lower-right{\n    height: 1em;\n    width: 1em;\n}\n\ndiv.upper-left{\n    border-radius: 1em 0px 0px 0px; \n}\ndiv.upper-right{\n    border-radius: 0px 1em 0px 0px;\n}\ndiv.lower-right{\n    border-radius: 0px 0em 1em 0px;\n}\ndiv.lower-left{\n    border-radius: 0px 0em 0px 1em;\n}\n\ndiv.chatbox.user > div.left-box > div,\ndiv.chatbox.user > div.right-box > div{\n    background-color: #26252A;\n}\n\ndiv.chatbox.user > div.content{\n    background-color: #26252A;\n}\n\ndiv.chatbox.ai > div.left-box > div,\ndiv.chatbox.ai > div.right-box > div{\n    background-color: #2D68DC;\n}\n\ndiv.chatbox.ai > div.content{\n    background-color: #2D68DC;\n}\n\ndiv.content div{\n    width: 100%;\n}\n\ndiv.chatbox svg{\n    position: absolute;\n    bottom: 1px;\n    width: 1.5em;\n}\n\ndiv.chatbox.ai svg{\n    left: -1px;\n}\n\ndiv.chatbox.user svg{\n    right: -1px;\n}\n\n\n/* Input Section */\n\nsection#inputContainer{\n    display: flex;\n    position: fixed;\n    align-items: flex-end;\n    gap: 0.6em;\n    bottom: 0;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 1em 2em 2em;\n}\n\nsection#inputContainer button:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\nbutton#voiceInputButton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 5em;\n    height: 5em;\n    flex-shrink: 0;\n    border-radius: 10px 48.5px 10px 10px;\n    border: 1px solid #2D68DC;\n    background-color: #2D68DC;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\nbutton#voiceInputButton > svg{\n    display: block;\n    position: relative;\n    top: 0.1em;\n    right: 0.1em;\n    width: 2.2em;\n    height: auto;\n    padding: 5.417px 10.833px;\n}\n\ndiv#middleInputContainer{\n    flex: 1;\n}\n\ndiv#middleInputContainer > textarea{\n    letter-spacing: 0.5px;\n    color: white;\n    height: 2.5em;\n    font-size: 1rem;\n    padding: 0.6em 0.5em 0.4em;\n    width: 100%;\n    border-radius: 10px;\n    border: 1px solid #2D68DC;\n    background: #2D68DC;\n    box-sizing: border-box;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    resize: none;\n}\n\ndiv#middleInputContainer textarea:hover{\n    background-color: hsl(220, 71%, 48%);\n}\n\ndiv#middleInputContainer textarea:focus{\n    outline: none;\n    background: #2D68DC;\n}\n\ndiv#middleInputContainer > div#keywordContainer{\n    width: 100%;\n    margin-bottom: 0.3em;\n}\n\n.keyword{\n    color: white;\n    font-size: 0.9rem;\n    display: inline-block;\n    padding: 0.3em 0.7em;\n    width: max(5ch, fit-content);\n    margin: 0 0.3em 0.15em 0;\n    background: #2D68DC;\n    border-radius: 0.7em;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    border: none;\n}\n\ndiv#keywordContainer .keyword{\n    cursor: pointer;\n}\n\ndiv#keywordContainer .keyword:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv#keywordContainer .keyword .keyword-close{\n    display: none;\n}\n\ndiv#keywordContainer .keyword.select-mode{\n    background-color: hsl(220, 71%, 30%);\n    color: hsl(220, 71%, 48%);\n}\n\ndiv#keywordContainer .keyword.select-mode:hover{\n    background-color: hsl(220, 71%, 20%);\n}\n\ndiv#keywordContainer .keyword.select-mode .keyword-close{\n    text-align: center;\n    color: white;\n    font-weight: 900;\n    opacity: 1;\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\ndiv#keywordContainer .keyword .keyword-close svg{\n    top: 0.1em;\n    height: 1em;\n    width: 1em;\n}\n\ndiv#rightButtonContainer{\n    display: flex;\n    width: 5.4em;\n    gap: 0.4em;\n}\n\ndiv#rightButtonContainer > button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    border: none;\n    height: 2.5em;\n    width: 2.5em;\n    background-color: #2D68DC;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\ndiv#rightButtonContainer svg {\n    width: 1.2em;\n}\n\n/* Pop Up Section */\n\n.hidden{\n    transform: translate(-50%, -50%) scale(0) !important;\n}\n\ndiv#darkOverlay{\n    z-index: 200;\n    width: 100%;\n    height: 100%;\n    background-color: hsla(220, 69%, 5%, 0.5);\n}\n\n.center-popup{\n    position: fixed;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n}\n\ndiv#recommendationPopUp{\n    font-size: 1.2rem;\n    width: min(80vw, 60ch);\n    border-radius: 0.5em;\n    z-index: 300;\n    padding: 1.2em 1em 1em;\n    background-color: white;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.149) inset;\n}\n\ndiv#recommendationPopUp > h3{\n    margin-bottom: 0.2em;\n}\n\ndiv#recommendationPopUp > div{\n    margin-bottom: 0.5em;\n}\n\ndiv.recommendation{\n    cursor: pointer;\n    font-size: 1rem;\n    color: white;\n    background-color: #2D68DC;\n    padding: 0.5em 0.7em;\n    border-radius: 0.5em;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\ndiv.recommendation:not(:last-child){\n    margin-bottom: 0.5em;\n}\n\ndiv.recommendation:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv.recommendation.selected{\n    background-color: hsl(220, 71%, 30%);\n    outline: hsl(220, 71%, 20%) 2px solid;\n}\n\ndiv#actionButtons{\n    margin-top: 0.8em;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    align-items: center;\n}\n\nbutton#refreshButton{\n    display: none;\n    font-size: 1rem;\n    background-color: white;\n    box-shadow: none;\n    border: none;\n    text-decoration: underline;\n}\n\nbutton#refreshButton:hover{\n    color: hsl(220, 71%, 40%);\n}\n\n.loaded button#refreshButton{\n    display: block;\n}\n\ndiv#centerButtons button:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv#centerButtons{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n\ndiv#centerButtons > button{\n    font-size: 1rem;\n    color: white;\n    width: 12ch;\n    height: 1.8em;\n    background-color: #2D68DC;\n    border-radius: 0.2em;\n    border: none;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n\n/* Animation Part */\n\n#recommendationPopUp .dot-flashing{\n    margin: auto;\n}\n\n.dot-flashing {\n    position: relative;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite linear alternate;\n    animation-delay: 0.3s;\n}\n\n.loaded .dot-flashing{\n    display: none;\n}\n\n.dot-flashing::before, .dot-flashing::after {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: 0;\n}\n\n.dot-flashing::before {\n    left: -15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite alternate;\n    animation-delay: 0s;\n}\n\n.dot-flashing::after {\n    left: 15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite alternate;\n    animation-delay: 0.6s;\n}\n  \n@keyframes dot-flashing {\n    0% {\n      background-color: #2D68DC;\n    }\n    50%, 100% {\n      background-color: rgba(152, 128, 255, 0.2);\n    }\n}\n\ndiv.content > div.dot-flashing.blue{\n    margin: auto;\n    width: 10px;\n}\n\n.dot-flashing.blue, .dot-flashing.blue::before, .dot-flashing.blue::after{\n    background-color: white;\n    animation-name: dot-flashing-blue;\n}\n\n@keyframes dot-flashing-blue {\n    0% {\n        background-color: white;\n    }\n    50%, 100% {\n        background-color: hsl(220, 71%, 80%);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/ai.js":
/*!***************************!*\
  !*** ./src/scripts/ai.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   askQuestion: () => (/* binding */ askQuestion),
/* harmony export */   demo: () => (/* binding */ demo),
/* harmony export */   generateRecommendation: () => (/* binding */ generateRecommendation),
/* harmony export */   refreshRecommendation: () => (/* binding */ refreshRecommendation)
/* harmony export */ });
const awioawkoaakwoa = "SpLiT663NSPTC5qxp55eSlo4pT3BlbkFJWB8PHWq1vsRvSjVAS0Fi";

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
            'Authorization': `Bearer sk-${awioawkoaakwoa.slice(5)}`,
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

/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    // console.log(keyword);
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
    chatElement.classList.add("chatsection", "user");
    chatElement.innerHTML = `<div>
                                <h3>Anda</h3>
                                <div class="chatbox user" id="chat-${chatIndex}">
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
    chatElement.innerHTML = `<div>
                                <h3>Obrolin AI</h3>
                                <div class="chatbox ai" id="chat-${chatIndex}">
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
    console.log(`#chat-${chatIndex} div.content`);
    const targetContent = document.querySelector(`#chat-${chatIndex} div.content`);
    targetContent.innerHTML = `${message}`;
    targetContent.scrollIntoView();
    scrollIntoTop(document.getElementById(`chat-${chatIndex}`));
}

function scrollIntoTop(targetElement){
    targetElement.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}

/***/ }),

/***/ "./src/scripts/query.js":
/*!******************************!*\
  !*** ./src/scripts/query.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    if(typeof removedIndex != "string") removedIndex = toString(removedIndex);
    if(!(removedIndex in keywordList)) return;
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _query_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./query.js */ "./src/scripts/query.js");
/* harmony import */ var _display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display.js */ "./src/scripts/display.js");
/* harmony import */ var _ai_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ai.js */ "./src/scripts/ai.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.css */ "./src/style.css");





let recommendationList = undefined;
let selectedRecommendation = undefined;
let chatIndex = 0;
const controller = new AbortController();
let signal = controller.signal;

function addRecListener(elementList){
    elementList.forEach((element) => {
        element.addEventListener('click', () => {
            if(selectedRecommendation !== undefined){
                _display_js__WEBPACK_IMPORTED_MODULE_1__.unselectRecommendation(selectedRecommendation);
            }
            selectedRecommendation = parseInt(element.id.replace('recommendation-', ''));
            _display_js__WEBPACK_IMPORTED_MODULE_1__.selectRecommendation(selectedRecommendation);
        });
    })
    return elementList;
}

function addKeywordListener(element){
    element.addEventListener('click', (e) => {
        const target = e.currentTarget;
        if(target.classList.contains('select-mode')){
            const targetID = e.currentTarget.id.replace('keyword-', '');
            _query_js__WEBPACK_IMPORTED_MODULE_0__.removeKeyword(targetID);
            target.remove();
        }
        else{
            target.classList.add('select-mode');
        }
    });
    element.addEventListener('mouseleave', (e) => {
        e.currentTarget.classList.remove('select-mode');
    });
    return element;
}

function addKeyword(){
    const textInput = document.getElementById('textInput');
    if(textInput.value === ''){
        return;
    }
    const elementID = _query_js__WEBPACK_IMPORTED_MODULE_0__.addKeyword(textInput.value);
    let keywordElement = _query_js__WEBPACK_IMPORTED_MODULE_0__.generateSingleHTML(textInput.value, true, elementID);
    keywordElement = addKeywordListener(keywordElement);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.appendKeyword(keywordElement);
    textInput.value = '';
}

async function sendKeyword(){
    addKeyword();
    if(_query_js__WEBPACK_IMPORTED_MODULE_0__.getKeyList().length == 0) return;
    const queryElementList = _query_js__WEBPACK_IMPORTED_MODULE_0__.generateElementList();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.toggleOverlay();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.showPopUpRecommendation(queryElementList);
    try{
        refreshRecommendation(signal);
    }
    catch(err){
        console.log(err);
    }
}

function clearPopUp(){
    _display_js__WEBPACK_IMPORTED_MODULE_1__.toggleOverlay();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.hidePopUpRecommendation();
}

function reset(){
    controller.abort();
    selectedRecommendation = undefined;
    recommendationList = undefined;
}

async function refreshRecommendation(signal){
    selectedRecommendation = undefined;
    recommendationList = undefined;
    let validRequest = true;
    _display_js__WEBPACK_IMPORTED_MODULE_1__.clearRecommendation();
    signal.addEventListener('abort', () => {
        validRequest = false;
        console.log("aborting...");
    });
    try{
        recommendationList = await _ai_js__WEBPACK_IMPORTED_MODULE_2__.generateRecommendation(_query_js__WEBPACK_IMPORTED_MODULE_0__.getKeyList());
        if(validRequest){
            let recommendationElements = _display_js__WEBPACK_IMPORTED_MODULE_1__.generateRecommendationElements(recommendationList);
            recommendationElements = addRecListener(recommendationElements);
            _display_js__WEBPACK_IMPORTED_MODULE_1__.appendRecommendation(recommendationElements);
        }
    }
    catch(err){
        console.log(err);
    }
}

function askQuestion(){
    if(recommendationList === undefined) return;
    clearPopUp();
    _query_js__WEBPACK_IMPORTED_MODULE_0__.clear();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.clearKeyword();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.addUserChat(`<span>${recommendationList[selectedRecommendation]}</span>`, chatIndex++);
    setTimeout(async () => {
        _display_js__WEBPACK_IMPORTED_MODULE_1__.addGPTChat("<div class='dot-flashing blue' style='margin: auto;'></div>", chatIndex);
        try{
            const gptResponse = await _ai_js__WEBPACK_IMPORTED_MODULE_2__.askQuestion(recommendationList[selectedRecommendation]);
            _display_js__WEBPACK_IMPORTED_MODULE_1__.updateChatContent(`<span>${gptResponse}</span>`, chatIndex);
        }
        catch(error){
            _display_js__WEBPACK_IMPORTED_MODULE_1__.updateChatContent("<span>Error :( silakan coba lagi</span>", chatIndex);
        }
    }, 500)
}

document.getElementById('plusButton').addEventListener('click', addKeyword);

document.getElementById('sendButton').addEventListener('click', sendKeyword);

document.getElementById('cancelButton').addEventListener('click', () => {clearPopUp(); reset()});

document.getElementById('refreshButton').addEventListener('click', () => refreshRecommendation(signal));

document.getElementById('submitButton').addEventListener('click', askQuestion);

document.getElementById('textInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        if(e.ctrlKey){
            sendKeyword();
        }
        else{
            addKeyword();
        }
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxRQUFRLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFB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O0FBQ0w7QUFDQSxtQ0FBbUMsMERBQTBCLENBQUMsaURBQWdCO0FBQzlFO0FBQ0EseUNBQXlDLHVFQUFzQztBQUMvRTtBQUNBLFlBQVksNkRBQTRCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDRDQUFXO0FBQ2YsSUFBSSxxREFBb0I7QUFDeEIsSUFBSSxvREFBbUIsVUFBVSwyQ0FBMkM7QUFDNUU7QUFDQSxRQUFRLG1EQUFrQixxREFBcUQ7QUFDL0U7QUFDQSxzQ0FBc0MsK0NBQWU7QUFDckQsWUFBWSwwREFBeUIsVUFBVSxZQUFZO0FBQzNEO0FBQ0E7QUFDQSxZQUFZLDBEQUF5QjtBQUNyQztBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQSx5RUFBeUUsY0FBYyxRQUFROztBQUUvRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29icm9saW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL2FpLmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBub25lO1xufVxuXG46cm9vdHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbmJvZHksIGh0bWx7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA3ZW07XG59XG5cbmhlYWRlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmhlYWRlciA+IGRpdi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxe1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuaGVhZGVyIGJ1dHRvbntcbiAgICB0b3A6IDAuNGVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5idXR0b24gc3ZnIHBhdGgjSW5mby1TcXVhcmUtMntcbiAgICBmaWxsOiBibGFjaztcbn1cblxuYnV0dG9uOmhvdmVyIHN2ZyBwYXRoI0luZm8tU3F1YXJlLTJ7XG4gICAgZmlsbDogIzJENjhEQztcbn1cblxubWFpbntcbiAgICBwYWRkaW5nOiAwIDJlbTtcbn1cblxuc3Ryb25ne1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG5cbmRpdi5jaGF0c2VjdGlvbntcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLnVzZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDNlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLmFpe1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XG59XG5kaXYuY2hhdHNlY3Rpb24gaDN7XG4gICAgY29sb3I6ICM4RThEOTQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC44MjdweDsgXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbn1cblxuZGl2LmNoYXRib3h7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDc1Y2g7XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnR7XG4gICAgcGFkZGluZzogMWVtIDAgMWVtO1xuICAgIG1pbi13aWR0aDogMTVjaDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZsZXg6IDE7XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgKjpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCBvbCwgXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IHVse1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmxlZnQtYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5yaWdodC1ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuZGl2Lm1pZGRsZS1sZWZ0LCBkaXYubWlkZGxlLXJpZ2h0e1xuICAgIHdpZHRoOiAxZW07XG4gICAgZmxleDogMTtcbn1cblxuZGl2LnVwcGVyLWxlZnQsIFxuZGl2Lmxvd2VyLWxlZnQsIFxuZGl2LnVwcGVyLXJpZ2h0LCBcbmRpdi5sb3dlci1yaWdodHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xufVxuXG5kaXYudXBwZXItbGVmdHtcbiAgICBib3JkZXItcmFkaXVzOiAxZW0gMHB4IDBweCAwcHg7IFxufVxuZGl2LnVwcGVyLXJpZ2h0e1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxZW0gMHB4IDBweDtcbn1cbmRpdi5sb3dlci1yaWdodHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMGVtIDFlbSAwcHg7XG59XG5kaXYubG93ZXItbGVmdHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMGVtIDBweCAxZW07XG59XG5cbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYubGVmdC1ib3ggPiBkaXYsXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LnJpZ2h0LWJveCA+IGRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNTJBO1xufVxuXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LmNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcbn1cblxuZGl2LmNoYXRib3guYWkgPiBkaXYubGVmdC1ib3ggPiBkaXYsXG5kaXYuY2hhdGJveC5haSA+IGRpdi5yaWdodC1ib3ggPiBkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbn1cblxuZGl2LmNoYXRib3guYWkgPiBkaXYuY29udGVudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xufVxuXG5kaXYuY29udGVudCBkaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5jaGF0Ym94IHN2Z3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxcHg7XG4gICAgd2lkdGg6IDEuNWVtO1xufVxuXG5kaXYuY2hhdGJveC5haSBzdmd7XG4gICAgbGVmdDogLTFweDtcbn1cblxuZGl2LmNoYXRib3gudXNlciBzdmd7XG4gICAgcmlnaHQ6IC0xcHg7XG59XG5cblxuLyogSW5wdXQgU2VjdGlvbiAqL1xuXG5zZWN0aW9uI2lucHV0Q29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBnYXA6IDAuNmVtO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDFlbSAyZW0gMmVtO1xufVxuXG5zZWN0aW9uI2lucHV0Q29udGFpbmVyIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNWVtO1xuICAgIGhlaWdodDogNWVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggNDguNXB4IDEwcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ2OERDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG59XG5cbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9uID4gc3Zne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDAuMWVtO1xuICAgIHJpZ2h0OiAwLjFlbTtcbiAgICB3aWR0aDogMi4yZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDUuNDE3cHggMTAuODMzcHg7XG59XG5cbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lcntcbiAgICBmbGV4OiAxO1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgPiB0ZXh0YXJlYXtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuNmVtIDAuNWVtIDAuNGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJENjhEQztcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgPiBkaXYja2V5d29yZENvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbn1cblxuLmtleXdvcmR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjdlbTtcbiAgICB3aWR0aDogbWF4KDVjaCwgZml0LWNvbnRlbnQpO1xuICAgIG1hcmdpbjogMCAwLjNlbSAwLjE1ZW0gMDtcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3Nle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2Rle1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMzAlKTtcbiAgICBjb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDIwJSk7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2RlIC5rZXl3b3JkLWNsb3Nle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQgLmtleXdvcmQtY2xvc2Ugc3Zne1xuICAgIHRvcDogMC4xZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbn1cblxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDUuNGVtO1xuICAgIGdhcDogMC40ZW07XG59XG5cbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lciA+IGJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIHdpZHRoOiAyLjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xufVxuXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXIgc3ZnIHtcbiAgICB3aWR0aDogMS4yZW07XG59XG5cbi8qIFBvcCBVcCBTZWN0aW9uICovXG5cbi5oaWRkZW57XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCkgIWltcG9ydGFudDtcbn1cblxuZGl2I2RhcmtPdmVybGF5e1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjAsIDY5JSwgNSUsIDAuNSk7XG59XG5cbi5jZW50ZXItcG9wdXB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgd2lkdGg6IG1pbig4MHZ3LCA2MGNoKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICB6LWluZGV4OiAzMDA7XG4gICAgcGFkZGluZzogMS4yZW0gMWVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0OSkgaW5zZXQ7XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwID4gaDN7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwID4gZGl2e1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5kaXYucmVjb21tZW5kYXRpb257XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9uOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbmRpdi5yZWNvbW1lbmRhdGlvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbmRpdi5yZWNvbW1lbmRhdGlvbi5zZWxlY3RlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDMwJSk7XG4gICAgb3V0bGluZTogaHNsKDIyMCwgNzElLCAyMCUpIDJweCBzb2xpZDtcbn1cblxuZGl2I2FjdGlvbkJ1dHRvbnN7XG4gICAgbWFyZ2luLXRvcDogMC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMWVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiNyZWZyZXNoQnV0dG9ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5idXR0b24jcmVmcmVzaEJ1dHRvbjpob3ZlcntcbiAgICBjb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xufVxuXG4ubG9hZGVkIGJ1dHRvbiNyZWZyZXNoQnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5kaXYjY2VudGVyQnV0dG9ucyBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xufVxuXG5kaXYjY2VudGVyQnV0dG9uc3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuXG5kaXYjY2VudGVyQnV0dG9ucyA+IGJ1dHRvbntcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMmNoO1xuICAgIGhlaWdodDogMS44ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcbn1cblxuXG4vKiBBbmltYXRpb24gUGFydCAqL1xuXG4jcmVjb21tZW5kYXRpb25Qb3BVcCAuZG90LWZsYXNoaW5ne1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmRvdC1mbGFzaGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBjb2xvcjogIzJENjhEQztcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4ubG9hZGVkIC5kb3QtZmxhc2hpbmd7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRvdC1mbGFzaGluZzo6YmVmb3JlLCAuZG90LWZsYXNoaW5nOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbn1cblxuLmRvdC1mbGFzaGluZzo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgY29sb3I6ICMyRDY4REM7XG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGNvbG9yOiAjMkQ2OERDO1xuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cbiAgXG5Aa2V5ZnJhbWVzIGRvdC1mbGFzaGluZyB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICB9XG4gICAgNTAlLCAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUyLCAxMjgsIDI1NSwgMC4yKTtcbiAgICB9XG59XG5cbmRpdi5jb250ZW50ID4gZGl2LmRvdC1mbGFzaGluZy5ibHVle1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTBweDtcbn1cblxuLmRvdC1mbGFzaGluZy5ibHVlLCAuZG90LWZsYXNoaW5nLmJsdWU6OmJlZm9yZSwgLmRvdC1mbGFzaGluZy5ibHVlOjphZnRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogZG90LWZsYXNoaW5nLWJsdWU7XG59XG5cbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nLWJsdWUge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIDUwJSwgMTAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgODAlKTtcbiAgICB9XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJ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QUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLG9DQUFvQztJQUN4QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IG5vbmU7XFxufVxcblxcbjpyb290e1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZy10b3A6IDVlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdlbTtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+IGRpdi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbntcXG4gICAgdG9wOiAwLjRlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbiBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xcbiAgICBmaWxsOiBibGFjaztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHN2ZyBwYXRoI0luZm8tU3F1YXJlLTJ7XFxuICAgIGZpbGw6ICMyRDY4REM7XFxufVxcblxcbm1haW57XFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcbn1cXG5cXG5zdHJvbmd7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24udXNlcntcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi5haXtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzZW07XFxufVxcbmRpdi5jaGF0c2VjdGlvbiBoM3tcXG4gICAgY29sb3I6ICM4RThEOTQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjgyN3B4OyBcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcblxcbmRpdi5jaGF0Ym94e1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDc1Y2g7XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDFlbSAwIDFlbTtcXG4gICAgbWluLXdpZHRoOiAxNWNoO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50ICo6bm90KDpmaXJzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IG9sLCBcXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IHVse1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5sZWZ0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LnJpZ2h0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuZGl2Lm1pZGRsZS1sZWZ0LCBkaXYubWlkZGxlLXJpZ2h0e1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaXYudXBwZXItbGVmdCwgXFxuZGl2Lmxvd2VyLWxlZnQsIFxcbmRpdi51cHBlci1yaWdodCwgXFxuZGl2Lmxvd2VyLXJpZ2h0e1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG59XFxuXFxuZGl2LnVwcGVyLWxlZnR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbSAwcHggMHB4IDBweDsgXFxufVxcbmRpdi51cHBlci1yaWdodHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDFlbSAwcHggMHB4O1xcbn1cXG5kaXYubG93ZXItcmlnaHR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwZW0gMWVtIDBweDtcXG59XFxuZGl2Lmxvd2VyLWxlZnR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwZW0gMHB4IDFlbTtcXG59XFxuXFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5sZWZ0LWJveCA+IGRpdixcXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LnJpZ2h0LWJveCA+IGRpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcXG59XFxuXFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNTJBO1xcbn1cXG5cXG5kaXYuY2hhdGJveC5haSA+IGRpdi5sZWZ0LWJveCA+IGRpdixcXG5kaXYuY2hhdGJveC5haSA+IGRpdi5yaWdodC1ib3ggPiBkaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxufVxcblxcbmRpdi5jaGF0Ym94LmFpID4gZGl2LmNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxufVxcblxcbmRpdi5jb250ZW50IGRpdntcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5jaGF0Ym94IHN2Z3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDFweDtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveC5haSBzdmd7XFxuICAgIGxlZnQ6IC0xcHg7XFxufVxcblxcbmRpdi5jaGF0Ym94LnVzZXIgc3Zne1xcbiAgICByaWdodDogLTFweDtcXG59XFxuXFxuXFxuLyogSW5wdXQgU2VjdGlvbiAqL1xcblxcbnNlY3Rpb24jaW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDAuNmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxZW0gMmVtIDJlbTtcXG59XFxuXFxuc2VjdGlvbiNpbnB1dENvbnRhaW5lciBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggNDguNXB4IDEwcHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJENjhEQztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxufVxcblxcbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9uID4gc3Zne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDAuMWVtO1xcbiAgICByaWdodDogMC4xZW07XFxuICAgIHdpZHRoOiAyLjJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1LjQxN3B4IDEwLjgzM3B4O1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXJ7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciA+IHRleHRhcmVhe1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjZlbSAwLjVlbSAwLjRlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciB0ZXh0YXJlYTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciA+IGRpdiNrZXl3b3JkQ29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcblxcbi5rZXl3b3Jke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuM2VtIDAuN2VtO1xcbiAgICB3aWR0aDogbWF4KDVjaCwgZml0LWNvbnRlbnQpO1xcbiAgICBtYXJnaW46IDAgMC4zZW0gMC4xNWVtIDA7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMzAlKTtcXG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMjAlKTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGUgLmtleXdvcmQtY2xvc2V7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQgLmtleXdvcmQtY2xvc2Ugc3Zne1xcbiAgICB0b3A6IDAuMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG59XFxuXFxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNS40ZW07XFxuICAgIGdhcDogMC40ZW07XFxufVxcblxcbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lciA+IGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICB3aWR0aDogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbn1cXG5cXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXIgc3ZnIHtcXG4gICAgd2lkdGg6IDEuMmVtO1xcbn1cXG5cXG4vKiBQb3AgVXAgU2VjdGlvbiAqL1xcblxcbi5oaWRkZW57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApICFpbXBvcnRhbnQ7XFxufVxcblxcbmRpdiNkYXJrT3ZlcmxheXtcXG4gICAgei1pbmRleDogMjAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyMCwgNjklLCA1JSwgMC41KTtcXG59XFxuXFxuLmNlbnRlci1wb3B1cHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB3aWR0aDogbWluKDgwdncsIDYwY2gpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgei1pbmRleDogMzAwO1xcbiAgICBwYWRkaW5nOiAxLjJlbSAxZW0gMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNDkpIGluc2V0O1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGgze1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBkaXZ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5kaXYucmVjb21tZW5kYXRpb257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuN2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxufVxcblxcbmRpdi5yZWNvbW1lbmRhdGlvbjpub3QoOmxhc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbmRpdi5yZWNvbW1lbmRhdGlvbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xcbiAgICBvdXRsaW5lOiBoc2woMjIwLCA3MSUsIDIwJSkgMnB4IHNvbGlkO1xcbn1cXG5cXG5kaXYjYWN0aW9uQnV0dG9uc3tcXG4gICAgbWFyZ2luLXRvcDogMC44ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24jcmVmcmVzaEJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYnV0dG9uI3JlZnJlc2hCdXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbi5sb2FkZWQgYnV0dG9uI3JlZnJlc2hCdXR0b257XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5kaXYjY2VudGVyQnV0dG9ucyBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuZGl2I2NlbnRlckJ1dHRvbnN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuZGl2I2NlbnRlckJ1dHRvbnMgPiBidXR0b257XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTJjaDtcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XFxufVxcblxcblxcbi8qIEFuaW1hdGlvbiBQYXJ0ICovXFxuXFxuI3JlY29tbWVuZGF0aW9uUG9wVXAgLmRvdC1mbGFzaGluZ3tcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG59XFxuXFxuLmxvYWRlZCAuZG90LWZsYXNoaW5ne1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSB7XFxuICAgIGxlZnQ6IC0xNXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG59XFxuXFxuLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcbn1cXG4gIFxcbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nIHtcXG4gICAgMCUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIH1cXG4gICAgNTAlLCAxMDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTI4LCAyNTUsIDAuMik7XFxuICAgIH1cXG59XFxuXFxuZGl2LmNvbnRlbnQgPiBkaXYuZG90LWZsYXNoaW5nLmJsdWV7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5kb3QtZmxhc2hpbmcuYmx1ZSwgLmRvdC1mbGFzaGluZy5ibHVlOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YWZ0ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBhbmltYXRpb24tbmFtZTogZG90LWZsYXNoaW5nLWJsdWU7XFxufVxcblxcbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nLWJsdWUge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICA1MCUsIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA4MCUpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhd2lvYXdrb2Fha3dvYSA9IFwiU3BMaVQ2NjNOU1BUQzVxeHA1NWVTbG80cFQzQmxia0ZKV0I4UEhXcTF2c1J2U2pWQVMwRmlcIjtcblxuY29uc3QgcmVzcG9uc2UxID0gW1xuICAgIFwiSW5pIHBlcnRhbnlhYW4gMVwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gMlwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gM1wiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gNFwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gNVwiLFxuXTtcblxuY29uc3QgcmVzcG9uc2UyID0gW1xuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDFcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAyXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgM1wiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDRcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCA1XCIsXG5dXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZW1vKCl7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAge3JvbGU6IFwidXNlclwiLCBjb250ZW50OiBcIkhhaSBHUFQhXCJ9XG4gICAgXSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsYXkodGltZSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlcGx5KG1lc3NhZ2Upe1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgc2stJHthd2lvYXdrb2Fha3dvYS5zbGljZSg1KX1gLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2UsXG4gICAgICAgIH0pLFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zJywgb3B0aW9ucyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YVtcImNob2ljZXNcIl1bMF1bXCJtZXNzYWdlXCJdW1wiY29udGVudFwiXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUmVjb21tZW5kYXRpb24oa2V5d29yZExpc3Qpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAgICAgICAgICB7cm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJVc2VyIGFrYW4gbWVtYmVyaWthbiBrYXRhIGt1bmNpIHlhbmcgZGlwaXNhaGthbiBvbGVoIGtvbWEsXFxcbiAgICAgICAgICAgICAgICBrYW11IGhhcnVzIG1lbWJlcmlrYW4gbGlzdCA1IHBlcnRhbnlhYW4geWFuZyByZWxldmFuIGRlbmdhbiBrYXRhIGt1bmNpIHRlcnNlYnV0IHRhbnBhIGthdGEgcGVuZ2FudGFyXCJ9LFxuICAgICAgICAgICAgICAgIHtyb2xlOiBcInVzZXJcIiwgY29udGVudDoga2V5d29yZExpc3Quam9pbignLCAnKX0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsUmVzcG9uc2UgPSByZXNwb25zZS5zcGxpdCgvXFxuLylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiAvXlxcZCQvLnRlc3QobGluZVswXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgobGluZSkgPT4gbGluZS5zbGljZSgzKSk7XG4gICAgICAgICAgICBpZihmaW5hbFJlc3BvbnNlLmxlbmd0aCAhPSA1KSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzaW5nIFByb2JsZW1cIik7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkLCB0cnlpbmcuLi5cIik7XG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIFJlcXVlc3QnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFJlY29tbWVuZGF0aW9uKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlMik7XG4gICAgICAgIH0sIDEwMDApXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc2tRdWVzdGlvbihxdWVzdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAgICAgIHtyb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIlVzZXIgYWthbiBtZW1iZXJpa2FuIHBlcnRhbnlhYW4uIEthbXUgaGFydXMgbWVtYmVyaWthbiBqYXdhYmFuIGRlbmdhbiBrYXRhLWthdGEgZGFuIHBlbmplbGFzYW4geWFuZyBtdWRhaCBkaXBhaGFtaVwifSxcbiAgICAgICAgICAgIHtyb2xlOiBcInVzZXJcIiwgY29udGVudDogYCR7cXVlc3Rpb259YH1cbiAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IGZpbmFsUmVzcG9uc2UgPSByZXNwb25zZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5lICE9PSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB3aGl0ZXNwYWNlQ291bnQgPSBsaW5lLnNlYXJjaCgvXFxTfCQvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHsnXFx1MDBhMCcucmVwZWF0KHdoaXRlc3BhY2VDb3VudCkrbGluZS5zbGljZSh3aGl0ZXNwYWNlQ291bnQpfTwvZGl2PlxcbmA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgICAgICBjb25zb2xlLmxvZyhmaW5hbFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIGZpbmFsUmVzcG9uc2U7XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufSIsImV4cG9ydCBmdW5jdGlvbiBhcHBlbmRLZXl3b3JkKG5ld0tleXdvcmQpe1xuICAgIC8vIGNvbnNvbGUubG9nKGtleXdvcmQpO1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5d29yZENvbnRhaW5lcicpO1xuICAgIGtleXdvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3S2V5d29yZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcktleXdvcmQoKXtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleXdvcmRDb250YWluZXInKTtcbiAgICB3aGlsZShrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGtleXdvcmRDb250YWluZXIucmVtb3ZlQ2hpbGQoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUmVjb21tZW5kYXRpb25LZXl3b3JkKCl7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXInKTtcbiAgICB3aGlsZShrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGtleXdvcmRDb250YWluZXIucmVtb3ZlQ2hpbGQoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU92ZXJsYXkoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya092ZXJsYXknKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQb3BVcFJlY29tbWVuZGF0aW9uKGtleXdvcmRFbGVtZW50TGlzdCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUG9wVXAnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcicpO1xuICAgIGtleXdvcmRFbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGtleXdvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVJlY29tbWVuZGF0aW9uTG9hZGVkKHBhcmFtKXtcbiAgICBjb25zdCByZWNvbW1lbmRhdGlvblBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUG9wVXAnKTtcbiAgICBpZihwYXJhbSA9PSBcImFkZFwiKSByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIGVsc2UgaWYocGFyYW0gPT0gXCJyZW1vdmVcIikgcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZWQnKTtcbiAgICBlbHNlIHJlY29tbWVuZGF0aW9uUG9wVXAuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRSZWNvbW1lbmRhdGlvbihlbGVtZW50TGlzdCl7XG4gICAgdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQoJ2FkZCcpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbiAgICBlbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJSZWNvbW1lbmRhdGlvbigpe1xuICAgIHRvZ2dsZVJlY29tbWVuZGF0aW9uTG9hZGVkKCdyZW1vdmUnKTtcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyJyk7XG4gICAgd2hpbGUocXVlc3Rpb25Db250YWluZXIuZmlyc3RDaGlsZCkgcXVlc3Rpb25Db250YWluZXIucmVtb3ZlQ2hpbGQocXVlc3Rpb25Db250YWluZXIuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJlY29tbWVuZGF0aW9uRWxlbWVudHMocmVjb21tZW5kYXRpb25MaXN0KXtcbiAgICBsZXQgZWxlbWVudExpc3QgPSBbXTtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1F1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlY29tbWVuZGF0aW9uJyk7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmlkID0gYHJlY29tbWVuZGF0aW9uLSR7aW5kZXh9YDtcbiAgICAgICAgbmV3UXVlc3Rpb24uaW5uZXJIVE1MID0gcXVlc3Rpb247XG4gICAgICAgIGVsZW1lbnRMaXN0LnB1c2gobmV3UXVlc3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJlY29tbWVuZGF0aW9uKGluZGV4KXtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVjb21tZW5kYXRpb24tJHtpbmRleH1gKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvbW1lbmRhdGlvbi0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY2xlYXJSZWNvbW1lbmRhdGlvbigpO1xuICAgIGNsZWFyUmVjb21tZW5kYXRpb25LZXl3b3JkKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRVc2VyQ2hhdChtZXNzYWdlLCBjaGF0SW5kZXgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgY2hhdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGF0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hhdHNlY3Rpb25cIiwgXCJ1c2VyXCIpO1xuICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+QW5kYTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0Ym94IHVzZXJcIiBpZD1cImNoYXQtJHtjaGF0SW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjExNi41ODcgMTk2LjI0NiA5NS41ODEgOTkuMTA5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAyMDYuNTg3IDI5NS4zNTUgQyAxNTYuODgxIDI5NS4zNTUgMTE2LjU4NyAyNTUuMDYxIDExNi41ODcgMjA1LjM1NSBDIDExNi41ODcgMjAyLjI4IDExNi43NDEgMTk5LjI0MSAxMTcuMDQyIDE5Ni4yNDYgTCAxNzYuMzEyIDE5Ni4yNDYgQyAxNzMuMjA0IDIwNC45MzQgMTcxLjUxMSAyMTQuMjk0IDE3MS41MTEgMjI0LjA1IEMgMTcxLjUxMSAyNTQuMzQ2IDE4Ny44MzUgMjgwLjgzIDIxMi4xNjggMjk1LjE4NSBDIDIxMC4zMjIgMjk1LjI5OCAyMDguNDYxIDI5NS4zNTUgMjA2LjU4NyAyOTUuMzU1IFpcIiBzdHlsZT1cImZpbGw6IHJnYigzOCwgMzcsIDQyKTsgdHJhbnNmb3JtLW9yaWdpbjogMTY0LjM3N3B4IDI0NS44MDJweDtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcbiAgICBzY3JvbGxJbnRvVG9wKGNoYXRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEdQVENoYXQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hhdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoYXRzZWN0aW9uXCIsIFwiYWlcIik7XG4gICAgY2hhdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5PYnJvbGluIEFJPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRib3ggYWlcIiBpZD1cImNoYXQtJHtjaGF0SW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMTE2LjU4NiAxOTYuMjQ2IDk1LjU4MSA5OS4xMDlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDIwNi41ODcgMTk2LjI0OSBDIDE1Ni44ODEgMTk2LjI0OSAxMTYuNTg3IDIzNi41NDMgMTE2LjU4NyAyODYuMjQ5IEMgMTE2LjU4NyAyODkuMzI0IDExNi43NDEgMjkyLjM2MyAxMTcuMDQyIDI5NS4zNTggTCAxNzYuMzEyIDI5NS4zNTggQyAxNzMuMjA0IDI4Ni42NyAxNzEuNTExIDI3Ny4zMSAxNzEuNTExIDI2Ny41NTQgQyAxNzEuNTExIDIzNy4yNTggMTg3LjgzNSAyMTAuNzc0IDIxMi4xNjggMTk2LjQxOSBDIDIxMC4zMjIgMTk2LjMwNiAyMDguNDYxIDE5Ni4yNDkgMjA2LjU4NyAxOTYuMjQ5IFpcIiBzdHlsZT1cImZpbGw6IHJnYig0NSwgMTA0LCAyMjApOyB0cmFuc2Zvcm0tb3JpZ2luOiAxNjQuMzc3cHggMjQ1LjgwMnB4O1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwgMCwgMCwgLTEsIC0wLjAwMDAwNDYzMTYwOCwgLTAuMDAwMDA2OTI1OSlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG4gICAgc2Nyb2xsSW50b1RvcChjaGF0RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDaGF0Q29udGVudChtZXNzYWdlLCBjaGF0SW5kZXgpe1xuICAgIGNvbnNvbGUubG9nKGAjY2hhdC0ke2NoYXRJbmRleH0gZGl2LmNvbnRlbnRgKTtcbiAgICBjb25zdCB0YXJnZXRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NoYXQtJHtjaGF0SW5kZXh9IGRpdi5jb250ZW50YCk7XG4gICAgdGFyZ2V0Q29udGVudC5pbm5lckhUTUwgPSBgJHttZXNzYWdlfWA7XG4gICAgdGFyZ2V0Q29udGVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIHNjcm9sbEludG9Ub3AoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXQtJHtjaGF0SW5kZXh9YCkpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVG9wKHRhcmdldEVsZW1lbnQpe1xuICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxuICAgIH0pXG59IiwibGV0IGlkeCA9IDA7XG5sZXQga2V5d29yZExpc3QgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEtleXdvcmQoa2V5d29yZCl7XG4gICAga2V5d29yZExpc3RbaWR4LnRvU3RyaW5nKCldID0ga2V5d29yZDtcbiAgICByZXR1cm4gaWR4Kys7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlMaXN0KCl7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoa2V5d29yZExpc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlS2V5d29yZChyZW1vdmVkSW5kZXgpeyAvL2lucHV0IGluIHN0cmluZ1xuICAgIGlmKHR5cGVvZiByZW1vdmVkSW5kZXggIT0gXCJzdHJpbmdcIikgcmVtb3ZlZEluZGV4ID0gdG9TdHJpbmcocmVtb3ZlZEluZGV4KTtcbiAgICBpZighKHJlbW92ZWRJbmRleCBpbiBrZXl3b3JkTGlzdCkpIHJldHVybjtcbiAgICBkZWxldGUga2V5d29yZExpc3RbcmVtb3ZlZEluZGV4XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgaWR4ID0gMDtcbiAgICBrZXl3b3JkTGlzdCA9IHt9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVTaW5nbGVIVE1MKGtleXdvcmQsIGNhbkNsb3NlID0gZmFsc2UsIGVsZW1lbnRJRCA9IHVuZGVmaW5lZCl7XG4gICAgY29uc3QgbmV3S2V5d29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0tleXdvcmQuY2xhc3NMaXN0LmFkZCgna2V5d29yZCcpO1xuICAgIG5ld0tleXdvcmQuaW5uZXJIVE1MID0gYDxzcGFuPiR7a2V5d29yZH08L3NwYW4+YDtcbiAgICBpZihjYW5DbG9zZSl7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0tleXdvcmQuaWQgPSBga2V5d29yZC0ke2VsZW1lbnRJRH1gXG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2tleXdvcmQtY2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gJzxzdmcgdmVyc2lvbj1cIjEuMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjUxMi4wMDAwMDBwdFwiIGhlaWdodD1cIjUxMi4wMDAwMDBwdFwiIHZpZXdCb3g9XCIwIDAgNTEyLjAwMDAwMCA1MTIuMDAwMDAwXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cInhNaWRZTWlkIG1lZXRcIj4gPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAuMDAwMDAwLDUxMi4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcIiBmaWxsPVwiI2ZmZmZmZlwiIHN0cm9rZT1cIm5vbmVcIj4gPHBhdGggZD1cIk0zOTMgNTEwNiBjLTkwIC0yMiAtMTY0IC02NSAtMjM5IC0xNDAgLTEzMyAtMTMzIC0xODEgLTI5NyAtMTM5IC00NzUgMzUgLTE0NSA1IC0xMTMgOTQ5IC0xMDU4IGw4NzEgLTg3MyAtODcxIC04NzIgYy05NDQgLTk0NiAtOTE0IC05MTQgLTk0OSAtMTA1OSAtNDIgLTE3OCA2IC0zNDIgMTM5IC00NzUgMTMzIC0xMzMgMjk3IC0xODEgNDc1IC0xMzkgMTQ1IDM1IDExMyA2IDEwNTkgOTQ5IGw4NzIgODcxIDg3MyAtODcxIGM5NDUgLTk0MyA5MTMgLTkxNCAxMDU4IC05NDkgMTc4IC00MiAzNDIgNiA0NzUgMTM5IDEzMyAxMzMgMTgxIDI5NyAxMzkgNDc1IC0zNSAxNDUgLTUgMTEzIC05NDkgMTA1OCBsLTg3MSA4NzMgODcxIDg3MiBjOTQzIDk0NiA5MTQgOTE0IDk0OSAxMDU5IDQxIDE3NCAtNSAzMzUgLTEzMiA0NzAgLTE1OCAxNjcgLTM5NyAyMDYgLTYwNyA5NyAtNTIgLTI3IC0xODggLTE1OCAtOTMzIC05MDIgbC04NzMgLTg3MSAtODcyIDg3MSBjLTg0NCA4NDMgLTg3NSA4NzMgLTk0OCA5MDggLTExNSA1NSAtMjMyIDcwIC0zNDcgNDJ6XCIvPiA8L2c+IDwvc3ZnPic7XG4gICAgICAgIG5ld0tleXdvcmQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3S2V5d29yZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlRWxlbWVudExpc3QoKXtcbiAgICBsZXQgZWxlbWVudExpc3QgPSBbXTtcbiAgICBPYmplY3QudmFsdWVzKGtleXdvcmRMaXN0KS5mb3JFYWNoKChrZXl3b3JkKSA9PiB7XG4gICAgICAgIGVsZW1lbnRMaXN0LnB1c2goZ2VuZXJhdGVTaW5nbGVIVE1MKGtleXdvcmQpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudExpc3Q7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgcXVlcnkgZnJvbSBcIi4vcXVlcnkuanNcIjtcbmltcG9ydCAqIGFzIGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCAqIGFzIGdwdCBmcm9tICcuL2FpLmpzJztcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5sZXQgcmVjb21tZW5kYXRpb25MaXN0ID0gdW5kZWZpbmVkO1xubGV0IHNlbGVjdGVkUmVjb21tZW5kYXRpb24gPSB1bmRlZmluZWQ7XG5sZXQgY2hhdEluZGV4ID0gMDtcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5sZXQgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG5cbmZ1bmN0aW9uIGFkZFJlY0xpc3RlbmVyKGVsZW1lbnRMaXN0KXtcbiAgICBlbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RlZFJlY29tbWVuZGF0aW9uICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXkudW5zZWxlY3RSZWNvbW1lbmRhdGlvbihzZWxlY3RlZFJlY29tbWVuZGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdGVkUmVjb21tZW5kYXRpb24gPSBwYXJzZUludChlbGVtZW50LmlkLnJlcGxhY2UoJ3JlY29tbWVuZGF0aW9uLScsICcnKSk7XG4gICAgICAgICAgICBkaXNwbGF5LnNlbGVjdFJlY29tbWVuZGF0aW9uKHNlbGVjdGVkUmVjb21tZW5kYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZExpc3RlbmVyKGVsZW1lbnQpe1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC1tb2RlJykpe1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SUQgPSBlLmN1cnJlbnRUYXJnZXQuaWQucmVwbGFjZSgna2V5d29yZC0nLCAnJyk7XG4gICAgICAgICAgICBxdWVyeS5yZW1vdmVLZXl3b3JkKHRhcmdldElEKTtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1tb2RlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LW1vZGUnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZCgpe1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0SW5wdXQnKTtcbiAgICBpZih0ZXh0SW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50SUQgPSBxdWVyeS5hZGRLZXl3b3JkKHRleHRJbnB1dC52YWx1ZSk7XG4gICAgbGV0IGtleXdvcmRFbGVtZW50ID0gcXVlcnkuZ2VuZXJhdGVTaW5nbGVIVE1MKHRleHRJbnB1dC52YWx1ZSwgdHJ1ZSwgZWxlbWVudElEKTtcbiAgICBrZXl3b3JkRWxlbWVudCA9IGFkZEtleXdvcmRMaXN0ZW5lcihrZXl3b3JkRWxlbWVudCk7XG4gICAgZGlzcGxheS5hcHBlbmRLZXl3b3JkKGtleXdvcmRFbGVtZW50KTtcbiAgICB0ZXh0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VuZEtleXdvcmQoKXtcbiAgICBhZGRLZXl3b3JkKCk7XG4gICAgaWYocXVlcnkuZ2V0S2V5TGlzdCgpLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgY29uc3QgcXVlcnlFbGVtZW50TGlzdCA9IHF1ZXJ5LmdlbmVyYXRlRWxlbWVudExpc3QoKTtcbiAgICBkaXNwbGF5LnRvZ2dsZU92ZXJsYXkoKTtcbiAgICBkaXNwbGF5LnNob3dQb3BVcFJlY29tbWVuZGF0aW9uKHF1ZXJ5RWxlbWVudExpc3QpO1xuICAgIHRyeXtcbiAgICAgICAgcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCk7XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBvcFVwKCl7XG4gICAgZGlzcGxheS50b2dnbGVPdmVybGF5KCk7XG4gICAgZGlzcGxheS5oaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpe1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IHVuZGVmaW5lZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCl7XG4gICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHZhbGlkUmVxdWVzdCA9IHRydWU7XG4gICAgZGlzcGxheS5jbGVhclJlY29tbWVuZGF0aW9uKCk7XG4gICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgICB2YWxpZFJlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhYm9ydGluZy4uLlwiKTtcbiAgICB9KTtcbiAgICB0cnl7XG4gICAgICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IGF3YWl0IGdwdC5nZW5lcmF0ZVJlY29tbWVuZGF0aW9uKHF1ZXJ5LmdldEtleUxpc3QoKSk7XG4gICAgICAgIGlmKHZhbGlkUmVxdWVzdCl7XG4gICAgICAgICAgICBsZXQgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGRpc3BsYXkuZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbkVsZW1lbnRzKHJlY29tbWVuZGF0aW9uTGlzdCk7XG4gICAgICAgICAgICByZWNvbW1lbmRhdGlvbkVsZW1lbnRzID0gYWRkUmVjTGlzdGVuZXIocmVjb21tZW5kYXRpb25FbGVtZW50cyk7XG4gICAgICAgICAgICBkaXNwbGF5LmFwcGVuZFJlY29tbWVuZGF0aW9uKHJlY29tbWVuZGF0aW9uRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhc2tRdWVzdGlvbigpe1xuICAgIGlmKHJlY29tbWVuZGF0aW9uTGlzdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgY2xlYXJQb3BVcCgpO1xuICAgIHF1ZXJ5LmNsZWFyKCk7XG4gICAgZGlzcGxheS5jbGVhcktleXdvcmQoKTtcbiAgICBkaXNwbGF5LmFkZFVzZXJDaGF0KGA8c3Bhbj4ke3JlY29tbWVuZGF0aW9uTGlzdFtzZWxlY3RlZFJlY29tbWVuZGF0aW9uXX08L3NwYW4+YCwgY2hhdEluZGV4KyspO1xuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBkaXNwbGF5LmFkZEdQVENoYXQoXCI8ZGl2IGNsYXNzPSdkb3QtZmxhc2hpbmcgYmx1ZScgc3R5bGU9J21hcmdpbjogYXV0bzsnPjwvZGl2PlwiLCBjaGF0SW5kZXgpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBncHRSZXNwb25zZSA9IGF3YWl0IGdwdC5hc2tRdWVzdGlvbihyZWNvbW1lbmRhdGlvbkxpc3Rbc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbl0pO1xuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVDaGF0Q29udGVudChgPHNwYW4+JHtncHRSZXNwb25zZX08L3NwYW4+YCwgY2hhdEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZUNoYXRDb250ZW50KFwiPHNwYW4+RXJyb3IgOiggc2lsYWthbiBjb2JhIGxhZ2k8L3NwYW4+XCIsIGNoYXRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9LCA1MDApXG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbHVzQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRLZXl3b3JkKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbmRLZXl3b3JkKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2NsZWFyUG9wVXAoKTsgcmVzZXQoKX0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCkpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc2tRdWVzdGlvbik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0SW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZS5jdHJsS2V5KXtcbiAgICAgICAgICAgIHNlbmRLZXl3b3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFkZEtleXdvcmQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9