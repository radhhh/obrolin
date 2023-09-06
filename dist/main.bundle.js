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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLFFBQVEsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxRQUFRLGFBQWEsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFB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QUNMO0FBQ0EsbUNBQW1DLDBEQUEwQixDQUFDLGlEQUFnQjtBQUM5RTtBQUNBLHlDQUF5Qyx1RUFBc0M7QUFDL0U7QUFDQSxZQUFZLDZEQUE0QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0Q0FBVztBQUNmLElBQUkscURBQW9CO0FBQ3hCLElBQUksb0RBQW1CLFVBQVUsMkNBQTJDO0FBQzVFO0FBQ0EsUUFBUSxtREFBa0IscURBQXFEO0FBQy9FO0FBQ0Esc0NBQXNDLCtDQUFlO0FBQ3JELFlBQVksMERBQXlCLFVBQVUsWUFBWTtBQUMzRDtBQUNBO0FBQ0EsWUFBWSwwREFBeUI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUEseUVBQXlFLGNBQWMsUUFBUTs7QUFFL0Y7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9haS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogbm9uZTtcbn1cblxuOnJvb3R7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5LCBodG1se1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogN2VtO1xufVxuXG5oZWFkZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIgPiBkaXYuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciBoMXtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmhlYWRlciBidXR0b257XG4gICAgdG9wOiAwLjRlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHN2ZyBwYXRoI0luZm8tU3F1YXJlLTJ7XG4gICAgZmlsbDogYmxhY2s7XG59XG5cbmJ1dHRvbjpob3ZlciBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xuICAgIGZpbGw6ICMyRDY4REM7XG59XG5cbm1haW57XG4gICAgcGFkZGluZzogMCAyZW07XG59XG5cbnN0cm9uZ3tcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG5kaXYuY2hhdHNlY3Rpb257XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmRpdi5jaGF0c2VjdGlvbi51c2Vye1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XG59XG5cbmRpdi5jaGF0c2VjdGlvbi5haXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy1yaWdodDogM2VtO1xufVxuZGl2LmNoYXRzZWN0aW9uIGgze1xuICAgIGNvbG9yOiAjOEU4RDk0O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuODI3cHg7IFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59XG5cbmRpdi5jaGF0Ym94e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA3NWNoO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDFlbSAwIDFlbTtcbiAgICBtaW4td2lkdGg6IDE1Y2g7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmbGV4OiAxO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50ICo6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgb2wsIFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCB1bHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5sZWZ0LWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuZGl2LmNoYXRib3ggPiBkaXYucmlnaHQtYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmRpdi5taWRkbGUtbGVmdCwgZGl2Lm1pZGRsZS1yaWdodHtcbiAgICB3aWR0aDogMWVtO1xuICAgIGZsZXg6IDE7XG59XG5cbmRpdi51cHBlci1sZWZ0LCBcbmRpdi5sb3dlci1sZWZ0LCBcbmRpdi51cHBlci1yaWdodCwgXG5kaXYubG93ZXItcmlnaHR7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbn1cblxuZGl2LnVwcGVyLWxlZnR7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDBweCAwcHggMHB4OyBcbn1cbmRpdi51cHBlci1yaWdodHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMWVtIDBweCAwcHg7XG59XG5kaXYubG93ZXItcmlnaHR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBlbSAxZW0gMHB4O1xufVxuZGl2Lmxvd2VyLWxlZnR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBlbSAwcHggMWVtO1xufVxuXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LmxlZnQtYm94ID4gZGl2LFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5yaWdodC1ib3ggPiBkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcbn1cblxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI1MkE7XG59XG5cbmRpdi5jaGF0Ym94LmFpID4gZGl2LmxlZnQtYm94ID4gZGl2LFxuZGl2LmNoYXRib3guYWkgPiBkaXYucmlnaHQtYm94ID4gZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG59XG5cbmRpdi5jaGF0Ym94LmFpID4gZGl2LmNvbnRlbnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbn1cblxuZGl2LmNvbnRlbnQgZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYuY2hhdGJveCBzdmd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMXB4O1xuICAgIHdpZHRoOiAxLjVlbTtcbn1cblxuZGl2LmNoYXRib3guYWkgc3Zne1xuICAgIGxlZnQ6IC0xcHg7XG59XG5cbmRpdi5jaGF0Ym94LnVzZXIgc3Zne1xuICAgIHJpZ2h0OiAtMXB4O1xufVxuXG5cbi8qIElucHV0IFNlY3Rpb24gKi9cblxuc2VjdGlvbiNpbnB1dENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZ2FwOiAwLjZlbTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtIDJlbTtcbn1cblxuc2VjdGlvbiNpbnB1dENvbnRhaW5lciBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xufVxuXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBoZWlnaHQ6IDVlbTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDQ4LjVweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJENjhEQztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xufVxuXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbiA+IHN2Z3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwLjFlbTtcbiAgICByaWdodDogMC4xZW07XG4gICAgd2lkdGg6IDIuMmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA1LjQxN3B4IDEwLjgzM3B4O1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXJ7XG4gICAgZmxleDogMTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gdGV4dGFyZWF7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjZlbSAwLjVlbSAwLjRlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gZGl2I2tleXdvcmRDb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59XG5cbi5rZXl3b3Jke1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC4zZW0gMC43ZW07XG4gICAgd2lkdGg6IG1heCg1Y2gsIGZpdC1jb250ZW50KTtcbiAgICBtYXJnaW46IDAgMC4zZW0gMC4xNWVtIDA7XG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcbiAgICBib3JkZXItcmFkaXVzOiAwLjdlbTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3Jke1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDMwJSk7XG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAyMCUpO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZSAua2V5d29yZC1jbG9zZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3NlIHN2Z3tcbiAgICB0b3A6IDAuMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG59XG5cbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1LjRlbTtcbiAgICBnYXA6IDAuNGVtO1xufVxuXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXIgPiBidXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICB3aWR0aDogMi41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbn1cblxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyIHN2ZyB7XG4gICAgd2lkdGg6IDEuMmVtO1xufVxuXG4vKiBQb3AgVXAgU2VjdGlvbiAqL1xuXG4uaGlkZGVue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNkYXJrT3ZlcmxheXtcbiAgICB6LWluZGV4OiAyMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjIwLCA2OSUsIDUlLCAwLjUpO1xufVxuXG4uY2VudGVyLXBvcHVwe1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwe1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiBtaW4oODB2dywgNjBjaCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgei1pbmRleDogMzAwO1xuICAgIHBhZGRpbmc6IDEuMmVtIDFlbSAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNDkpIGluc2V0O1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGgze1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGRpdntcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgcGFkZGluZzogMC41ZW0gMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG59XG5cbmRpdi5yZWNvbW1lbmRhdGlvbjpub3QoOmxhc3QtY2hpbGQpe1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5kaXYucmVjb21tZW5kYXRpb246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xufVxuXG5kaXYucmVjb21tZW5kYXRpb24uc2VsZWN0ZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xuICAgIG91dGxpbmU6IGhzbCgyMjAsIDcxJSwgMjAlKSAycHggc29saWQ7XG59XG5cbmRpdiNhY3Rpb25CdXR0b25ze1xuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24jcmVmcmVzaEJ1dHRvbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYnV0dG9uI3JlZnJlc2hCdXR0b246aG92ZXJ7XG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuLmxvYWRlZCBidXR0b24jcmVmcmVzaEJ1dHRvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnMgPiBidXR0b257XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTJjaDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG59XG5cblxuLyogQW5pbWF0aW9uIFBhcnQgKi9cblxuI3JlY29tbWVuZGF0aW9uUG9wVXAgLmRvdC1mbGFzaGluZ3tcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5kb3QtZmxhc2hpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgY29sb3I6ICMyRDY4REM7XG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuLmxvYWRlZCAuZG90LWZsYXNoaW5ne1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSwgLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSB7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGNvbG9yOiAjMkQ2OERDO1xuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBjb2xvcjogIzJENjhEQztcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG4gIFxuQGtleWZyYW1lcyBkb3QtZmxhc2hpbmcge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgfVxuICAgIDUwJSwgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTI4LCAyNTUsIDAuMik7XG4gICAgfVxufVxuXG5kaXYuY29udGVudCA+IGRpdi5kb3QtZmxhc2hpbmcuYmx1ZXtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwcHg7XG59XG5cbi5kb3QtZmxhc2hpbmcuYmx1ZSwgLmRvdC1mbGFzaGluZy5ibHVlOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGRvdC1mbGFzaGluZy1ibHVlO1xufVxuXG5Aa2V5ZnJhbWVzIGRvdC1mbGFzaGluZy1ibHVlIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICA1MCUsIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDgwJSk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFD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SSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJO1FBQ0ksdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxvQ0FBb0M7SUFDeEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBub25lO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSwgaHRtbHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHl7XFxuICAgIHBhZGRpbmctdG9wOiA1ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA3ZW07XFxufVxcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oZWFkZXIgPiBkaXYuY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciBoMXtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbmhlYWRlciBidXR0b257XFxuICAgIHRvcDogMC40ZW07XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5idXR0b24gc3ZnIHBhdGgjSW5mby1TcXVhcmUtMntcXG4gICAgZmlsbDogYmxhY2s7XFxufVxcblxcbmJ1dHRvbjpob3ZlciBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xcbiAgICBmaWxsOiAjMkQ2OERDO1xcbn1cXG5cXG5tYWlue1xcbiAgICBwYWRkaW5nOiAwIDJlbTtcXG59XFxuXFxuc3Ryb25ne1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb257XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uLnVzZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctbGVmdDogM2VtO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24uYWl7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy1yaWdodDogM2VtO1xcbn1cXG5kaXYuY2hhdHNlY3Rpb24gaDN7XFxuICAgIGNvbG9yOiAjOEU4RDk0O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC44MjdweDsgXFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xcbn1cXG5cXG5kaXYuY2hhdGJveHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiA3NWNoO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxZW0gMCAxZW07XFxuICAgIG1pbi13aWR0aDogMTVjaDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCAqOm5vdCg6Zmlyc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG59XFxuXFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCBvbCwgXFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCB1bHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuZGl2LmNoYXRib3ggPiBkaXYubGVmdC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5yaWdodC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmRpdi5taWRkbGUtbGVmdCwgZGl2Lm1pZGRsZS1yaWdodHtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuZGl2LnVwcGVyLWxlZnQsIFxcbmRpdi5sb3dlci1sZWZ0LCBcXG5kaXYudXBwZXItcmlnaHQsIFxcbmRpdi5sb3dlci1yaWdodHtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxZW07XFxufVxcblxcbmRpdi51cHBlci1sZWZ0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW0gMHB4IDBweCAwcHg7IFxcbn1cXG5kaXYudXBwZXItcmlnaHR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxZW0gMHB4IDBweDtcXG59XFxuZGl2Lmxvd2VyLXJpZ2h0e1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMGVtIDFlbSAwcHg7XFxufVxcbmRpdi5sb3dlci1sZWZ0e1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMGVtIDBweCAxZW07XFxufVxcblxcbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYubGVmdC1ib3ggPiBkaXYsXFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5yaWdodC1ib3ggPiBkaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI1MkE7XFxufVxcblxcbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYuY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcXG59XFxuXFxuZGl2LmNoYXRib3guYWkgPiBkaXYubGVmdC1ib3ggPiBkaXYsXFxuZGl2LmNoYXRib3guYWkgPiBkaXYucmlnaHQtYm94ID4gZGl2e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbn1cXG5cXG5kaXYuY2hhdGJveC5haSA+IGRpdi5jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbn1cXG5cXG5kaXYuY29udGVudCBkaXZ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2hhdGJveCBzdmd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxcHg7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG59XFxuXFxuZGl2LmNoYXRib3guYWkgc3Zne1xcbiAgICBsZWZ0OiAtMXB4O1xcbn1cXG5cXG5kaXYuY2hhdGJveC51c2VyIHN2Z3tcXG4gICAgcmlnaHQ6IC0xcHg7XFxufVxcblxcblxcbi8qIElucHV0IFNlY3Rpb24gKi9cXG5cXG5zZWN0aW9uI2lucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAwLjZlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMWVtIDJlbSAyZW07XFxufVxcblxcbnNlY3Rpb24jaW5wdXRDb250YWluZXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDVlbTtcXG4gICAgaGVpZ2h0OiA1ZW07XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDQ4LjVweCAxMHB4IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbn1cXG5cXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbiA+IHN2Z3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwLjFlbTtcXG4gICAgcmlnaHQ6IDAuMWVtO1xcbiAgICB3aWR0aDogMi4yZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogNS40MTdweCAxMC44MzNweDtcXG59XFxuXFxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVye1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgPiB0ZXh0YXJlYXtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC42ZW0gMC41ZW0gMC40ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ2OERDO1xcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcXG59XFxuXFxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgPiBkaXYja2V5d29yZENvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xcbn1cXG5cXG4ua2V5d29yZHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjdlbTtcXG4gICAgd2lkdGg6IG1heCg1Y2gsIGZpdC1jb250ZW50KTtcXG4gICAgbWFyZ2luOiAwIDAuM2VtIDAuMTVlbSAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjdlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmR7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQgLmtleXdvcmQtY2xvc2V7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2Rle1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDMwJSk7XFxuICAgIGNvbG9yOiBoc2woMjIwLCA3MSUsIDQ4JSk7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2RlOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDIwJSk7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2RlIC5rZXl3b3JkLWNsb3Nle1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3NlIHN2Z3tcXG4gICAgdG9wOiAwLjFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxZW07XFxufVxcblxcbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUuNGVtO1xcbiAgICBnYXA6IDAuNGVtO1xcbn1cXG5cXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXIgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgd2lkdGg6IDIuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG59XFxuXFxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyIHN2ZyB7XFxuICAgIHdpZHRoOiAxLjJlbTtcXG59XFxuXFxuLyogUG9wIFVwIFNlY3Rpb24gKi9cXG5cXG4uaGlkZGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5kaXYjZGFya092ZXJsYXl7XFxuICAgIHotaW5kZXg6IDIwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjAsIDY5JSwgNSUsIDAuNSk7XFxufVxcblxcbi5jZW50ZXItcG9wdXB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwe1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IG1pbig4MHZ3LCA2MGNoKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIHotaW5kZXg6IDMwMDtcXG4gICAgcGFkZGluZzogMS4yZW0gMWVtIDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQ5KSBpbnNldDtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBoM3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxufVxcblxcbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwID4gZGl2e1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjdlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbn1cXG5cXG5kaXYucmVjb21tZW5kYXRpb246bm90KDpsYXN0LWNoaWxkKXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbmRpdi5yZWNvbW1lbmRhdGlvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG5kaXYucmVjb21tZW5kYXRpb24uc2VsZWN0ZWR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMzAlKTtcXG4gICAgb3V0bGluZTogaHNsKDIyMCwgNzElLCAyMCUpIDJweCBzb2xpZDtcXG59XFxuXFxuZGl2I2FjdGlvbkJ1dHRvbnN7XFxuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uI3JlZnJlc2hCdXR0b257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmJ1dHRvbiNyZWZyZXNoQnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG4ubG9hZGVkIGJ1dHRvbiNyZWZyZXNoQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZGl2I2NlbnRlckJ1dHRvbnMgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbmRpdiNjZW50ZXJCdXR0b25ze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmRpdiNjZW50ZXJCdXR0b25zID4gYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDEyY2g7XFxuICAgIGhlaWdodDogMS44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xcbn1cXG5cXG5cXG4vKiBBbmltYXRpb24gUGFydCAqL1xcblxcbiNyZWNvbW1lbmRhdGlvblBvcFVwIC5kb3QtZmxhc2hpbmd7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmRvdC1mbGFzaGluZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBjb2xvcjogIzJENjhEQztcXG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XFxufVxcblxcbi5sb2FkZWQgLmRvdC1mbGFzaGluZ3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRvdC1mbGFzaGluZzo6YmVmb3JlLCAuZG90LWZsYXNoaW5nOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nOjpiZWZvcmUge1xcbiAgICBsZWZ0OiAtMTVweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBjb2xvcjogIzJENjhEQztcXG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XFxufVxcblxcbi5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBjb2xvcjogIzJENjhEQztcXG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcXG59XFxuICBcXG5Aa2V5ZnJhbWVzIGRvdC1mbGFzaGluZyB7XFxuICAgIDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICB9XFxuICAgIDUwJSwgMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTIsIDEyOCwgMjU1LCAwLjIpO1xcbiAgICB9XFxufVxcblxcbmRpdi5jb250ZW50ID4gZGl2LmRvdC1mbGFzaGluZy5ibHVle1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nLmJsdWUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YmVmb3JlLCAuZG90LWZsYXNoaW5nLmJsdWU6OmFmdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGRvdC1mbGFzaGluZy1ibHVlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGRvdC1mbGFzaGluZy1ibHVlIHtcXG4gICAgMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIH1cXG4gICAgNTAlLCAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgODAlKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQVBJS0VZID0gXCJzay10MzZzQm44MkhrVmphTHhkcFF3dFQzQmxia0ZKdTJpaUtJamo3RHF3NzhFQVlJbldcIjtcblxuY29uc3QgcmVzcG9uc2UxID0gW1xuICAgIFwiSW5pIHBlcnRhbnlhYW4gMVwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gMlwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gM1wiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gNFwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gNVwiLFxuXTtcblxuY29uc3QgcmVzcG9uc2UyID0gW1xuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDFcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAyXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgM1wiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDRcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCA1XCIsXG5dXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZW1vKCl7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAge3JvbGU6IFwidXNlclwiLCBjb250ZW50OiBcIkhhaSBHUFQhXCJ9XG4gICAgXSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsYXkodGltZSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlcGx5KG1lc3NhZ2Upe1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtBUElLRVl9YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlLFxuICAgICAgICB9KSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9ucycsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGFbXCJjaG9pY2VzXCJdWzBdW1wibWVzc2FnZVwiXVtcImNvbnRlbnRcIl07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVJlY29tbWVuZGF0aW9uKGtleXdvcmRMaXN0KXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXBseShbXG4gICAgICAgICAgICAgICAge3JvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFwiVXNlciBha2FuIG1lbWJlcmlrYW4ga2F0YSBrdW5jaSB5YW5nIGRpcGlzYWhrYW4gb2xlaCBrb21hLFxcXG4gICAgICAgICAgICAgICAga2FtdSBoYXJ1cyBtZW1iZXJpa2FuIGxpc3QgNSBwZXJ0YW55YWFuIHlhbmcgcmVsZXZhbiBkZW5nYW4ga2F0YSBrdW5jaSB0ZXJzZWJ1dCB0YW5wYSBrYXRhIHBlbmdhbnRhclwifSxcbiAgICAgICAgICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGtleXdvcmRMaXN0LmpvaW4oJywgJyl9LFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFJlc3BvbnNlID0gcmVzcG9uc2Uuc3BsaXQoL1xcbi8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gL15cXGQkLy50ZXN0KGxpbmVbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUuc2xpY2UoMykpO1xuICAgICAgICAgICAgaWYoZmluYWxSZXNwb25zZS5sZW5ndGggIT0gNSkgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2luZyBQcm9ibGVtXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2h7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCwgdHJ5aW5nLi4uXCIpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCBSZXF1ZXN0Jylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hSZWNvbW1lbmRhdGlvbigpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZTIpO1xuICAgICAgICB9LCAxMDAwKVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNrUXVlc3Rpb24ocXVlc3Rpb24pe1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXBseShbXG4gICAgICAgICAgICB7cm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJVc2VyIGFrYW4gbWVtYmVyaWthbiBwZXJ0YW55YWFuLiBLYW11IGhhcnVzIG1lbWJlcmlrYW4gamF3YWJhbiBkZW5nYW4ga2F0YS1rYXRhIGRhbiBwZW5qZWxhc2FuIHlhbmcgbXVkYWggZGlwYWhhbWlcIn0sXG4gICAgICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGAke3F1ZXN0aW9ufWB9XG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBmaW5hbFJlc3BvbnNlID0gcmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGluZSAhPT0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZUNvdW50ID0gbGluZS5zZWFyY2goL1xcU3wkLyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7J1xcdTAwYTAnLnJlcGVhdCh3aGl0ZXNwYWNlQ291bnQpK2xpbmUuc2xpY2Uod2hpdGVzcGFjZUNvdW50KX08L2Rpdj5cXG5gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgY29uc29sZS5sb2coZmluYWxSZXNwb25zZSk7XG4gICAgICAgIHJldHVybiBmaW5hbFJlc3BvbnNlO1xuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gYXBwZW5kS2V5d29yZChuZXdLZXl3b3JkKXtcbiAgICAvLyBjb25zb2xlLmxvZyhrZXl3b3JkKTtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleXdvcmRDb250YWluZXInKTtcbiAgICBrZXl3b3JkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0tleXdvcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJLZXl3b3JkKCl7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXl3b3JkQ29udGFpbmVyJyk7XG4gICAgd2hpbGUoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKSBrZXl3b3JkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uS2V5d29yZCgpe1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVyJyk7XG4gICAgd2hpbGUoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKSBrZXl3b3JkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVPdmVybGF5KCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtPdmVybGF5JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UG9wVXBSZWNvbW1lbmRhdGlvbihrZXl3b3JkRWxlbWVudExpc3Qpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXInKTtcbiAgICBrZXl3b3JkRWxlbWVudExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBrZXl3b3JkQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVSZWNvbW1lbmRhdGlvbkxvYWRlZChwYXJhbSl7XG4gICAgY29uc3QgcmVjb21tZW5kYXRpb25Qb3BVcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJyk7XG4gICAgaWYocGFyYW0gPT0gXCJhZGRcIikgcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICBlbHNlIGlmKHBhcmFtID09IFwicmVtb3ZlXCIpIHJlY29tbWVuZGF0aW9uUG9wVXAuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVkJyk7XG4gICAgZWxzZSByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC50b2dnbGUoJ2xvYWRlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUmVjb21tZW5kYXRpb24oZWxlbWVudExpc3Qpe1xuICAgIHRvZ2dsZVJlY29tbWVuZGF0aW9uTG9hZGVkKCdhZGQnKTtcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyJyk7XG4gICAgZWxlbWVudExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBxdWVzdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUmVjb21tZW5kYXRpb24oKXtcbiAgICB0b2dnbGVSZWNvbW1lbmRhdGlvbkxvYWRlZCgncmVtb3ZlJyk7XG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lcicpO1xuICAgIHdoaWxlKHF1ZXN0aW9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHF1ZXN0aW9uQ29udGFpbmVyLnJlbW92ZUNoaWxkKHF1ZXN0aW9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbkVsZW1lbnRzKHJlY29tbWVuZGF0aW9uTGlzdCl7XG4gICAgbGV0IGVsZW1lbnRMaXN0ID0gW107XG4gICAgcmVjb21tZW5kYXRpb25MaXN0LmZvckVhY2goKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdRdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdyZWNvbW1lbmRhdGlvbicpO1xuICAgICAgICBuZXdRdWVzdGlvbi5pZCA9IGByZWNvbW1lbmRhdGlvbi0ke2luZGV4fWA7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmlubmVySFRNTCA9IHF1ZXN0aW9uO1xuICAgICAgICBlbGVtZW50TGlzdC5wdXNoKG5ld1F1ZXN0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudExpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZWxlY3RSZWNvbW1lbmRhdGlvbihpbmRleCl7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY29tbWVuZGF0aW9uLSR7aW5kZXh9YCk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlbGVjdFJlY29tbWVuZGF0aW9uKGluZGV4KXtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVjb21tZW5kYXRpb24tJHtpbmRleH1gKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVBvcFVwUmVjb21tZW5kYXRpb24oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNsZWFyUmVjb21tZW5kYXRpb24oKTtcbiAgICBjbGVhclJlY29tbWVuZGF0aW9uS2V5d29yZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVXNlckNoYXQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hhdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoYXRzZWN0aW9uXCIsIFwidXNlclwiKTtcbiAgICBjaGF0RWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkFuZGE8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdGJveCB1c2VyXCIgaWQ9XCJjaGF0LSR7Y2hhdEluZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIxMTYuNTg3IDE5Ni4yNDYgOTUuNTgxIDk5LjEwOVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gMjA2LjU4NyAyOTUuMzU1IEMgMTU2Ljg4MSAyOTUuMzU1IDExNi41ODcgMjU1LjA2MSAxMTYuNTg3IDIwNS4zNTUgQyAxMTYuNTg3IDIwMi4yOCAxMTYuNzQxIDE5OS4yNDEgMTE3LjA0MiAxOTYuMjQ2IEwgMTc2LjMxMiAxOTYuMjQ2IEMgMTczLjIwNCAyMDQuOTM0IDE3MS41MTEgMjE0LjI5NCAxNzEuNTExIDIyNC4wNSBDIDE3MS41MTEgMjU0LjM0NiAxODcuODM1IDI4MC44MyAyMTIuMTY4IDI5NS4xODUgQyAyMTAuMzIyIDI5NS4yOTggMjA4LjQ2MSAyOTUuMzU1IDIwNi41ODcgMjk1LjM1NSBaXCIgc3R5bGU9XCJmaWxsOiByZ2IoMzgsIDM3LCA0Mik7IHRyYW5zZm9ybS1vcmlnaW46IDE2NC4zNzdweCAyNDUuODAycHg7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG4gICAgc2Nyb2xsSW50b1RvcChjaGF0RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHUFRDaGF0KG1lc3NhZ2UsIGNoYXRJbmRleCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjaGF0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoYXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGF0c2VjdGlvblwiLCBcImFpXCIpO1xuICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+T2Jyb2xpbiBBSTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0Ym94IGFpXCIgaWQ9XCJjaGF0LSR7Y2hhdEluZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjExNi41ODYgMTk2LjI0NiA5NS41ODEgOTkuMTA5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAyMDYuNTg3IDE5Ni4yNDkgQyAxNTYuODgxIDE5Ni4yNDkgMTE2LjU4NyAyMzYuNTQzIDExNi41ODcgMjg2LjI0OSBDIDExNi41ODcgMjg5LjMyNCAxMTYuNzQxIDI5Mi4zNjMgMTE3LjA0MiAyOTUuMzU4IEwgMTc2LjMxMiAyOTUuMzU4IEMgMTczLjIwNCAyODYuNjcgMTcxLjUxMSAyNzcuMzEgMTcxLjUxMSAyNjcuNTU0IEMgMTcxLjUxMSAyMzcuMjU4IDE4Ny44MzUgMjEwLjc3NCAyMTIuMTY4IDE5Ni40MTkgQyAyMTAuMzIyIDE5Ni4zMDYgMjA4LjQ2MSAxOTYuMjQ5IDIwNi41ODcgMTk2LjI0OSBaXCIgc3R5bGU9XCJmaWxsOiByZ2IoNDUsIDEwNCwgMjIwKTsgdHJhbnNmb3JtLW9yaWdpbjogMTY0LjM3N3B4IDI0NS44MDJweDtcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsIDAsIDAsIC0xLCAtMC4wMDAwMDQ2MzE2MDgsIC0wLjAwMDAwNjkyNTkpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2hhdEVsZW1lbnQpO1xuICAgIHNjcm9sbEludG9Ub3AoY2hhdEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hhdENvbnRlbnQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBjb25zb2xlLmxvZyhgI2NoYXQtJHtjaGF0SW5kZXh9IGRpdi5jb250ZW50YCk7XG4gICAgY29uc3QgdGFyZ2V0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGF0LSR7Y2hhdEluZGV4fSBkaXYuY29udGVudGApO1xuICAgIHRhcmdldENvbnRlbnQuaW5uZXJIVE1MID0gYCR7bWVzc2FnZX1gO1xuICAgIHRhcmdldENvbnRlbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICBzY3JvbGxJbnRvVG9wKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGF0LSR7Y2hhdEluZGV4fWApKTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsSW50b1RvcCh0YXJnZXRFbGVtZW50KXtcbiAgICB0YXJnZXRFbGVtZW50LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICB9KVxufSIsImxldCBpZHggPSAwO1xubGV0IGtleXdvcmRMaXN0ID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRLZXl3b3JkKGtleXdvcmQpe1xuICAgIGtleXdvcmRMaXN0W2lkeC50b1N0cmluZygpXSA9IGtleXdvcmQ7XG4gICAgcmV0dXJuIGlkeCsrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5TGlzdCgpe1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGtleXdvcmRMaXN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUtleXdvcmQocmVtb3ZlZEluZGV4KXsgLy9pbnB1dCBpbiBzdHJpbmdcbiAgICBpZih0eXBlb2YgcmVtb3ZlZEluZGV4ICE9IFwic3RyaW5nXCIpIHJlbW92ZWRJbmRleCA9IHRvU3RyaW5nKHJlbW92ZWRJbmRleCk7XG4gICAgaWYoIShyZW1vdmVkSW5kZXggaW4ga2V5d29yZExpc3QpKSByZXR1cm47XG4gICAgZGVsZXRlIGtleXdvcmRMaXN0W3JlbW92ZWRJbmRleF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcigpe1xuICAgIGlkeCA9IDA7XG4gICAga2V5d29yZExpc3QgPSB7fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2luZ2xlSFRNTChrZXl3b3JkLCBjYW5DbG9zZSA9IGZhbHNlLCBlbGVtZW50SUQgPSB1bmRlZmluZWQpe1xuICAgIGNvbnN0IG5ld0tleXdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdLZXl3b3JkLmNsYXNzTGlzdC5hZGQoJ2tleXdvcmQnKTtcbiAgICBuZXdLZXl3b3JkLmlubmVySFRNTCA9IGA8c3Bhbj4ke2tleXdvcmR9PC9zcGFuPmA7XG4gICAgaWYoY2FuQ2xvc2Upe1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdLZXl3b3JkLmlkID0gYGtleXdvcmQtJHtlbGVtZW50SUR9YFxuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkLWNsb3NlJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI1MTIuMDAwMDAwcHRcIiBoZWlnaHQ9XCI1MTIuMDAwMDAwcHRcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+IDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgZmlsbD1cIiNmZmZmZmZcIiBzdHJva2U9XCJub25lXCI+IDxwYXRoIGQ9XCJNMzkzIDUxMDYgYy05MCAtMjIgLTE2NCAtNjUgLTIzOSAtMTQwIC0xMzMgLTEzMyAtMTgxIC0yOTcgLTEzOSAtNDc1IDM1IC0xNDUgNSAtMTEzIDk0OSAtMTA1OCBsODcxIC04NzMgLTg3MSAtODcyIGMtOTQ0IC05NDYgLTkxNCAtOTE0IC05NDkgLTEwNTkgLTQyIC0xNzggNiAtMzQyIDEzOSAtNDc1IDEzMyAtMTMzIDI5NyAtMTgxIDQ3NSAtMTM5IDE0NSAzNSAxMTMgNiAxMDU5IDk0OSBsODcyIDg3MSA4NzMgLTg3MSBjOTQ1IC05NDMgOTEzIC05MTQgMTA1OCAtOTQ5IDE3OCAtNDIgMzQyIDYgNDc1IDEzOSAxMzMgMTMzIDE4MSAyOTcgMTM5IDQ3NSAtMzUgMTQ1IC01IDExMyAtOTQ5IDEwNTggbC04NzEgODczIDg3MSA4NzIgYzk0MyA5NDYgOTE0IDkxNCA5NDkgMTA1OSA0MSAxNzQgLTUgMzM1IC0xMzIgNDcwIC0xNTggMTY3IC0zOTcgMjA2IC02MDcgOTcgLTUyIC0yNyAtMTg4IC0xNTggLTkzMyAtOTAyIGwtODczIC04NzEgLTg3MiA4NzEgYy04NDQgODQzIC04NzUgODczIC05NDggOTA4IC0xMTUgNTUgLTIzMiA3MCAtMzQ3IDQyelwiLz4gPC9nPiA8L3N2Zz4nO1xuICAgICAgICBuZXdLZXl3b3JkLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0tleXdvcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUVsZW1lbnRMaXN0KCl7XG4gICAgbGV0IGVsZW1lbnRMaXN0ID0gW107XG4gICAgT2JqZWN0LnZhbHVlcyhrZXl3b3JkTGlzdCkuZm9yRWFjaCgoa2V5d29yZCkgPT4ge1xuICAgICAgICBlbGVtZW50TGlzdC5wdXNoKGdlbmVyYXRlU2luZ2xlSFRNTChrZXl3b3JkKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIHF1ZXJ5IGZyb20gXCIuL3F1ZXJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgKiBhcyBncHQgZnJvbSAnLi9haS5qcyc7XG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxubGV0IHJlY29tbWVuZGF0aW9uTGlzdCA9IHVuZGVmaW5lZDtcbmxldCBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xubGV0IGNoYXRJbmRleCA9IDA7XG5jb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xubGV0IHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsO1xuXG5mdW5jdGlvbiBhZGRSZWNMaXN0ZW5lcihlbGVtZW50TGlzdCl7XG4gICAgZWxlbWVudExpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnVuc2VsZWN0UmVjb21tZW5kYXRpb24oc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gcGFyc2VJbnQoZWxlbWVudC5pZC5yZXBsYWNlKCdyZWNvbW1lbmRhdGlvbi0nLCAnJykpO1xuICAgICAgICAgICAgZGlzcGxheS5zZWxlY3RSZWNvbW1lbmRhdGlvbihzZWxlY3RlZFJlY29tbWVuZGF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfSlcbiAgICByZXR1cm4gZWxlbWVudExpc3Q7XG59XG5cbmZ1bmN0aW9uIGFkZEtleXdvcmRMaXN0ZW5lcihlbGVtZW50KXtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtbW9kZScpKXtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldElEID0gZS5jdXJyZW50VGFyZ2V0LmlkLnJlcGxhY2UoJ2tleXdvcmQtJywgJycpO1xuICAgICAgICAgICAgcXVlcnkucmVtb3ZlS2V5d29yZCh0YXJnZXRJRCk7XG4gICAgICAgICAgICB0YXJnZXQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3QtbW9kZScpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKGUpID0+IHtcbiAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdC1tb2RlJyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZEtleXdvcmQoKXtcbiAgICBjb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dElucHV0Jyk7XG4gICAgaWYodGV4dElucHV0LnZhbHVlID09PSAnJyl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudElEID0gcXVlcnkuYWRkS2V5d29yZCh0ZXh0SW5wdXQudmFsdWUpO1xuICAgIGxldCBrZXl3b3JkRWxlbWVudCA9IHF1ZXJ5LmdlbmVyYXRlU2luZ2xlSFRNTCh0ZXh0SW5wdXQudmFsdWUsIHRydWUsIGVsZW1lbnRJRCk7XG4gICAga2V5d29yZEVsZW1lbnQgPSBhZGRLZXl3b3JkTGlzdGVuZXIoa2V5d29yZEVsZW1lbnQpO1xuICAgIGRpc3BsYXkuYXBwZW5kS2V5d29yZChrZXl3b3JkRWxlbWVudCk7XG4gICAgdGV4dElucHV0LnZhbHVlID0gJyc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRLZXl3b3JkKCl7XG4gICAgYWRkS2V5d29yZCgpO1xuICAgIGlmKHF1ZXJ5LmdldEtleUxpc3QoKS5sZW5ndGggPT0gMCkgcmV0dXJuO1xuICAgIGNvbnN0IHF1ZXJ5RWxlbWVudExpc3QgPSBxdWVyeS5nZW5lcmF0ZUVsZW1lbnRMaXN0KCk7XG4gICAgZGlzcGxheS50b2dnbGVPdmVybGF5KCk7XG4gICAgZGlzcGxheS5zaG93UG9wVXBSZWNvbW1lbmRhdGlvbihxdWVyeUVsZW1lbnRMaXN0KTtcbiAgICB0cnl7XG4gICAgICAgIHJlZnJlc2hSZWNvbW1lbmRhdGlvbihzaWduYWwpO1xuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJQb3BVcCgpe1xuICAgIGRpc3BsYXkudG9nZ2xlT3ZlcmxheSgpO1xuICAgIGRpc3BsYXkuaGlkZVBvcFVwUmVjb21tZW5kYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKXtcbiAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QgPSB1bmRlZmluZWQ7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hSZWNvbW1lbmRhdGlvbihzaWduYWwpe1xuICAgIHNlbGVjdGVkUmVjb21tZW5kYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgcmVjb21tZW5kYXRpb25MaXN0ID0gdW5kZWZpbmVkO1xuICAgIGxldCB2YWxpZFJlcXVlc3QgPSB0cnVlO1xuICAgIGRpc3BsYXkuY2xlYXJSZWNvbW1lbmRhdGlvbigpO1xuICAgIHNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsICgpID0+IHtcbiAgICAgICAgdmFsaWRSZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWJvcnRpbmcuLi5cIik7XG4gICAgfSk7XG4gICAgdHJ5e1xuICAgICAgICByZWNvbW1lbmRhdGlvbkxpc3QgPSBhd2FpdCBncHQuZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbihxdWVyeS5nZXRLZXlMaXN0KCkpO1xuICAgICAgICBpZih2YWxpZFJlcXVlc3Qpe1xuICAgICAgICAgICAgbGV0IHJlY29tbWVuZGF0aW9uRWxlbWVudHMgPSBkaXNwbGF5LmdlbmVyYXRlUmVjb21tZW5kYXRpb25FbGVtZW50cyhyZWNvbW1lbmRhdGlvbkxpc3QpO1xuICAgICAgICAgICAgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGFkZFJlY0xpc3RlbmVyKHJlY29tbWVuZGF0aW9uRWxlbWVudHMpO1xuICAgICAgICAgICAgZGlzcGxheS5hcHBlbmRSZWNvbW1lbmRhdGlvbihyZWNvbW1lbmRhdGlvbkVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNrUXVlc3Rpb24oKXtcbiAgICBpZihyZWNvbW1lbmRhdGlvbkxpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGNsZWFyUG9wVXAoKTtcbiAgICBxdWVyeS5jbGVhcigpO1xuICAgIGRpc3BsYXkuY2xlYXJLZXl3b3JkKCk7XG4gICAgZGlzcGxheS5hZGRVc2VyQ2hhdChgPHNwYW4+JHtyZWNvbW1lbmRhdGlvbkxpc3Rbc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbl19PC9zcGFuPmAsIGNoYXRJbmRleCsrKTtcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgZGlzcGxheS5hZGRHUFRDaGF0KFwiPGRpdiBjbGFzcz0nZG90LWZsYXNoaW5nIGJsdWUnIHN0eWxlPSdtYXJnaW46IGF1dG87Jz48L2Rpdj5cIiwgY2hhdEluZGV4KTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgZ3B0UmVzcG9uc2UgPSBhd2FpdCBncHQuYXNrUXVlc3Rpb24ocmVjb21tZW5kYXRpb25MaXN0W3NlbGVjdGVkUmVjb21tZW5kYXRpb25dKTtcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlQ2hhdENvbnRlbnQoYDxzcGFuPiR7Z3B0UmVzcG9uc2V9PC9zcGFuPmAsIGNoYXRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVDaGF0Q29udGVudChcIjxzcGFuPkVycm9yIDooIHNpbGFrYW4gY29iYSBsYWdpPC9zcGFuPlwiLCBjaGF0SW5kZXgpO1xuICAgICAgICB9XG4gICAgfSwgNTAwKVxufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGx1c0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkS2V5d29yZCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZW5kS2V5d29yZCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtjbGVhclBvcFVwKCk7IHJlc2V0KCl9KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2hCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlZnJlc2hSZWNvbW1lbmRhdGlvbihzaWduYWwpKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXNrUXVlc3Rpb24pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dElucHV0JykuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYoZS5rZXkgPT09ICdFbnRlcicpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmKGUuY3RybEtleSl7XG4gICAgICAgICAgICBzZW5kS2V5d29yZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBhZGRLZXl3b3JkKCk7XG4gICAgICAgIH1cbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==