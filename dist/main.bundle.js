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
    align-items: center;
}

div.chatsection.user{
    justify-content: flex-end;
    padding-left: 1em;
}

div.chatsection.ai{
    justify-content: flex-start;
    padding-right: 1em;
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

div.chatsection h3 > button{
    display: none;
    top: 0.3em;
    background-color: inherit;
    border: none;
    height: 1.2em;
}

div.chatsection.loaded h3 > button{
    display: inline;
}

div.chatsection h3 > button > svg{
    filter: invert(59%) sepia(7%) saturate(230%) hue-rotate(209deg) brightness(93%) contrast(94%);
    height: 1.4em;
}

div.chatsection.user h3 > button:hover svg{
    filter: invert(10%) sepia(5%) saturate(1214%) hue-rotate(211deg) brightness(97%) contrast(89%);
}

div.chatsection.ai h3 > button:hover svg{
    filter: invert(44%) sepia(13%) saturate(5402%) hue-rotate(196deg) brightness(84%) contrast(107%);
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
div.chatbox.user > div.right-box > div, 
div.chatbox.user > div.content
{
    background-color: #26252A;
}

div.chatbox.ai > div.left-box > div,
div.chatbox.ai > div.right-box > div,
div.chatbox.ai > div.content
{
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
    background-color: white;
    padding: 1.2em 1.5em 1.2em;
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
    padding: 0.3em 0.8em;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: 'Lato';\n    font-weight: 700;\n    font-size: 1em;\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    text-decoration-style: none;\n}\n\n:root{\n    font-size: 16px;\n    scroll-behavior: smooth;\n}\n\nbody, html{\n    min-height: 100%;\n    width: 100%;\n}\n\nbody{\n    padding-top: 5em;\n    padding-bottom: 7em;\n}\n\nheader{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    padding: 1em 2em;\n    box-sizing: border-box;\n    background-color: white;\n}\n\nheader > div.container{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader h1{\n    font-weight: 900;\n    font-size: 2rem;\n    cursor: default;\n}\n\nheader button{\n    top: 0.4em;\n    display: block;\n    box-sizing: border-box;\n    border: none;\n    background-color: white;\n}\n\nbutton svg path#Info-Square-2{\n    fill: black;\n}\n\nbutton:hover svg path#Info-Square-2{\n    fill: #2D68DC;\n}\n\nmain{\n    padding: 0 2em;\n}\n\nstrong{\n    font-weight: 900;\n}\n\ndiv.chatsection{\n    margin-bottom: 1em;\n    display: flex;\n    align-items: center;\n}\n\ndiv.chatsection.user{\n    justify-content: flex-end;\n    padding-left: 1em;\n}\n\ndiv.chatsection.ai{\n    justify-content: flex-start;\n    padding-right: 1em;\n}\ndiv.chatsection h3{\n    color: #8E8D94;\n    font-size: 0.8rem;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.827px; \n    margin-left: 2em;\n    margin-bottom: 0.3em;\n}\n\ndiv.chatsection h3 > button{\n    display: none;\n    top: 0.3em;\n    background-color: inherit;\n    border: none;\n    height: 1.2em;\n}\n\ndiv.chatsection.loaded h3 > button{\n    display: inline;\n}\n\ndiv.chatsection h3 > button > svg{\n    filter: invert(59%) sepia(7%) saturate(230%) hue-rotate(209deg) brightness(93%) contrast(94%);\n    height: 1.4em;\n}\n\ndiv.chatsection.user h3 > button:hover svg{\n    filter: invert(10%) sepia(5%) saturate(1214%) hue-rotate(211deg) brightness(97%) contrast(89%);\n}\n\ndiv.chatsection.ai h3 > button:hover svg{\n    filter: invert(44%) sepia(13%) saturate(5402%) hue-rotate(196deg) brightness(84%) contrast(107%);\n}\n\ndiv.chatbox{\n    color: white;\n    font-size: 1rem;\n    display: flex;\n    width: fit-content;\n    max-width: 75ch;\n}\n\ndiv.chatbox > div.content{\n    padding: 1em 0 1em;\n    min-width: 15ch;\n    line-height: 1.5;\n    flex: 1;\n}\n\ndiv.chatbox > div.content *:not(:first-child){\n    margin-top: 0.5em;\n}\n\ndiv.chatbox > div.content ol, \ndiv.chatbox > div.content ul{\n    margin-left: 1em;\n}\n\ndiv.chatbox > div.left-box{\n    display: flex;\n    flex-direction: column;\n    width: 1.5em;\n    align-items: flex-end;\n}\n\ndiv.chatbox > div.right-box{\n    display: flex;\n    flex-direction: column;\n    width: 1.5em;\n    align-items: flex-start;\n}\n\ndiv.middle-left, div.middle-right{\n    width: 1em;\n    flex: 1;\n}\n\ndiv.upper-left, \ndiv.lower-left, \ndiv.upper-right, \ndiv.lower-right{\n    height: 1em;\n    width: 1em;\n}\n\ndiv.upper-left{\n    border-radius: 1em 0px 0px 0px; \n}\ndiv.upper-right{\n    border-radius: 0px 1em 0px 0px;\n}\ndiv.lower-right{\n    border-radius: 0px 0em 1em 0px;\n}\ndiv.lower-left{\n    border-radius: 0px 0em 0px 1em;\n}\n\ndiv.chatbox.user > div.left-box > div,\ndiv.chatbox.user > div.right-box > div, \ndiv.chatbox.user > div.content\n{\n    background-color: #26252A;\n}\n\ndiv.chatbox.ai > div.left-box > div,\ndiv.chatbox.ai > div.right-box > div,\ndiv.chatbox.ai > div.content\n{\n    background-color: #2D68DC;\n}\n\ndiv.content div{\n    width: 100%;\n}\n\ndiv.chatbox svg{\n    position: absolute;\n    bottom: 1px;\n    width: 1.5em;\n}\n\ndiv.chatbox.ai svg{\n    left: -1px;\n}\n\ndiv.chatbox.user svg{\n    right: -1px;\n}\n\n\n/* Input Section */\n\nsection#inputContainer{\n    display: flex;\n    position: fixed;\n    align-items: flex-end;\n    gap: 0.6em;\n    bottom: 0;\n    width: 100%;\n    box-sizing: border-box;\n    background-color: white;\n    padding: 1.2em 1.5em 1.2em;\n}\n\nsection#inputContainer button:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\nbutton#voiceInputButton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 5em;\n    height: 5em;\n    flex-shrink: 0;\n    border-radius: 10px 48.5px 10px 10px;\n    border: 1px solid #2D68DC;\n    background-color: #2D68DC;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\nbutton#voiceInputButton > svg{\n    display: block;\n    position: relative;\n    top: 0.1em;\n    right: 0.1em;\n    width: 2.2em;\n    height: auto;\n    padding: 5.417px 10.833px;\n}\n\ndiv#middleInputContainer{\n    flex: 1;\n}\n\ndiv#middleInputContainer > textarea{\n    letter-spacing: 0.5px;\n    color: white;\n    height: 2.5em;\n    font-size: 1rem;\n    padding: 0.6em 0.5em 0.4em;\n    width: 100%;\n    border-radius: 10px;\n    border: 1px solid #2D68DC;\n    background: #2D68DC;\n    box-sizing: border-box;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    resize: none;\n}\n\ndiv#middleInputContainer textarea:hover{\n    background-color: hsl(220, 71%, 48%);\n}\n\ndiv#middleInputContainer textarea:focus{\n    outline: none;\n    background: #2D68DC;\n}\n\ndiv#middleInputContainer > div#keywordContainer{\n    width: 100%;\n    margin-bottom: 0.3em;\n}\n\n.keyword{\n    color: white;\n    font-size: 0.9rem;\n    display: inline-block;\n    padding: 0.3em 0.8em;\n    width: max(5ch, fit-content);\n    margin: 0 0.3em 0.15em 0;\n    background: #2D68DC;\n    border-radius: 0.7em;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    border: none;\n}\n\ndiv#keywordContainer .keyword{\n    cursor: pointer;\n}\n\ndiv#keywordContainer .keyword:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv#keywordContainer .keyword .keyword-close{\n    display: none;\n}\n\ndiv#keywordContainer .keyword.select-mode{\n    background-color: hsl(220, 71%, 30%);\n    color: hsl(220, 71%, 48%);\n}\n\ndiv#keywordContainer .keyword.select-mode:hover{\n    background-color: hsl(220, 71%, 20%);\n}\n\ndiv#keywordContainer .keyword.select-mode .keyword-close{\n    text-align: center;\n    color: white;\n    font-weight: 900;\n    opacity: 1;\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\ndiv#keywordContainer .keyword .keyword-close svg{\n    top: 0.1em;\n    height: 1em;\n    width: 1em;\n}\n\ndiv#rightButtonContainer{\n    display: flex;\n    width: 5.4em;\n    gap: 0.4em;\n}\n\ndiv#rightButtonContainer > button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    border: none;\n    height: 2.5em;\n    width: 2.5em;\n    background-color: #2D68DC;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\ndiv#rightButtonContainer svg {\n    width: 1.2em;\n}\n\n/* Pop Up Section */\n\n.hidden{\n    transform: translate(-50%, -50%) scale(0) !important;\n}\n\ndiv#darkOverlay{\n    z-index: 200;\n    width: 100%;\n    height: 100%;\n    background-color: hsla(220, 69%, 5%, 0.5);\n}\n\n.center-popup{\n    position: fixed;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n}\n\ndiv#recommendationPopUp{\n    font-size: 1.2rem;\n    width: min(80vw, 60ch);\n    border-radius: 0.5em;\n    z-index: 300;\n    padding: 1.2em 1em 1em;\n    background-color: white;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.149) inset;\n}\n\ndiv#recommendationPopUp > h3{\n    margin-bottom: 0.2em;\n}\n\ndiv#recommendationPopUp > div{\n    margin-bottom: 0.5em;\n}\n\ndiv.recommendation{\n    cursor: pointer;\n    font-size: 1rem;\n    color: white;\n    background-color: #2D68DC;\n    padding: 0.5em 0.7em;\n    border-radius: 0.5em;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\ndiv.recommendation:not(:last-child){\n    margin-bottom: 0.5em;\n}\n\ndiv.recommendation:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv.recommendation.selected{\n    background-color: hsl(220, 71%, 30%);\n    outline: hsl(220, 71%, 20%) 2px solid;\n}\n\ndiv#actionButtons{\n    margin-top: 0.8em;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    align-items: center;\n}\n\nbutton#refreshButton{\n    display: none;\n    font-size: 1rem;\n    background-color: white;\n    box-shadow: none;\n    border: none;\n    text-decoration: underline;\n}\n\nbutton#refreshButton:hover{\n    color: hsl(220, 71%, 40%);\n}\n\n.loaded button#refreshButton{\n    display: block;\n}\n\ndiv#centerButtons button:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv#centerButtons{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n\ndiv#centerButtons > button{\n    font-size: 1rem;\n    color: white;\n    width: 12ch;\n    height: 1.8em;\n    background-color: #2D68DC;\n    border-radius: 0.2em;\n    border: none;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n\n/* Animation Part */\n\n#recommendationPopUp .dot-flashing{\n    margin: auto;\n}\n\n.dot-flashing {\n    position: relative;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite linear alternate;\n    animation-delay: 0.3s;\n}\n\n.loaded .dot-flashing{\n    display: none;\n}\n\n.dot-flashing::before, .dot-flashing::after {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: 0;\n}\n\n.dot-flashing::before {\n    left: -15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite alternate;\n    animation-delay: 0s;\n}\n\n.dot-flashing::after {\n    left: 15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite alternate;\n    animation-delay: 0.6s;\n}\n  \n@keyframes dot-flashing {\n    0% {\n      background-color: #2D68DC;\n    }\n    50%, 100% {\n      background-color: rgba(152, 128, 255, 0.2);\n    }\n}\n\ndiv.content > div.dot-flashing.blue{\n    margin: auto;\n    width: 10px;\n}\n\n.dot-flashing.blue, .dot-flashing.blue::before, .dot-flashing.blue::after{\n    background-color: white;\n    animation-name: dot-flashing-blue;\n}\n\n@keyframes dot-flashing-blue {\n    0% {\n        background-color: white;\n    }\n    50%, 100% {\n        background-color: hsl(220, 71%, 80%);\n    }\n}"],"sourceRoot":""}]);
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
                kamu harus memberikan list 5 pertanyaan sederhana yang relevan dengan kata kunci tersebut tanpa kata pengantar.\
                Kata kunci bisa memiliki kesalahan penulisan dan kamu harus mengantisipasinya!"},
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
        return response;
    }
    catch(err){
        throw new Error("No respond")
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

/***/ }),

/***/ "./src/scripts/tts.js":
/*!****************************!*\
  !*** ./src/scripts/tts.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _tts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tts.js */ "./src/scripts/tts.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../style.css */ "./src/style.css");






let chatHistory = [];
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

function activateChatSpeak(chatIndex){
    _tts_js__WEBPACK_IMPORTED_MODULE_3__.initElement(document.querySelector(`#chat-${chatIndex}`),
                document.querySelector(`#chatSpeak-${chatIndex}`),
                chatHistory[chatIndex]);
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
        _display_js__WEBPACK_IMPORTED_MODULE_1__.appendRecommendation([]);
    }
}

function askQuestion(){
    if(recommendationList === undefined) return;
    clearPopUp();
    _query_js__WEBPACK_IMPORTED_MODULE_0__.clear();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.clearKeyword();
    chatHistory.push(`${recommendationList[selectedRecommendation]}`);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.addUserChat(`<span>${recommendationList[selectedRecommendation]}</span>`, chatIndex);
    activateChatSpeak(chatIndex++);
    setTimeout(async () => {
        const freezeChatIndex = chatIndex++;
        chatHistory.push('loading');
        _display_js__WEBPACK_IMPORTED_MODULE_1__.addGPTChat("<div class='dot-flashing blue' style='margin: auto;'></div>", freezeChatIndex);
        _display_js__WEBPACK_IMPORTED_MODULE_1__.focusElement('#textInput');
        try{
            const gptResponse = await _ai_js__WEBPACK_IMPORTED_MODULE_2__.askQuestion(recommendationList[selectedRecommendation]);
            const finalResponse = gptResponse.split('\n')
            .filter((line) => (line !== ""))
            .map((line) => {
                const whitespaceCount = line.search(/\S|$/);
                return `<div>${'\u00a0'.repeat(whitespaceCount)+line.slice(whitespaceCount)}</div>\n`;
            })
            .join('');
            chatHistory[freezeChatIndex] = gptResponse;
            activateChatSpeak(freezeChatIndex);
            _display_js__WEBPACK_IMPORTED_MODULE_1__.updateChatContent(`<span>${finalResponse}</span>`, freezeChatIndex);
        }
        catch(error){
            chatHistory[freezeChatIndex] = "Error, silakan coba lagi";
            activateChatSpeak(freezeChatIndex);
            _display_js__WEBPACK_IMPORTED_MODULE_1__.updateChatContent("<span>Error :( silakan coba lagi</span>", freezeChatIndex);
        }
    }, 500);
}

document.getElementById('plusButton').addEventListener('click', addKeyword);

document.getElementById('sendButton').addEventListener('click', sendKeyword);

document.getElementById('cancelButton').addEventListener('click', () => {clearPopUp(); reset()});

document.getElementById('refreshButton').addEventListener('click', () => refreshRecommendation(signal));

document.getElementById('submitButton').addEventListener('click', askQuestion);

document.getElementById('textInput').addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        if(document.getElementById('textInput').value === ''){
            sendKeyword();
        }
        else{
            addKeyword();
        }
    }
});

// display.addUserChat("<span>Halo ini testing doang</span>", chatIndex++);
// display.addGPTChat("<span>Halo ini kalimat random yang digenerate oleh orang gabut seperti radhya \
// yang gunanya cuma buat template supaya kita ada gambaran mengenai apa saja yang harus ditampilkan \
// dengan baik kepada user. Terutama dalam bentuk tombol speaker text-to-speech", chatIndex++);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUs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QUFRLHFEQUFvQjtBQUM1QjtBQUNBLHNDQUFzQywrQ0FBZTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiw2REFBNkQ7QUFDNUYsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCLFVBQVUsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBOztBQUVBLHlFQUF5RSxjQUFjLFFBQVE7O0FBRS9GOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSwrRiIsInNvdXJjZXMiOlsid2VicGFjazovL29icm9saW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL2FpLmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvdHRzLmpzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IG5vbmU7XG59XG5cbjpyb290e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSwgaHRtbHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5ib2R5e1xuICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgcGFkZGluZy1ib3R0b206IDdlbTtcbn1cblxuaGVhZGVye1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuaGVhZGVyID4gZGl2LmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXIgaDF7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5oZWFkZXIgYnV0dG9ue1xuICAgIHRvcDogMC40ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmJ1dHRvbiBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xuICAgIGZpbGw6IGJsYWNrO1xufVxuXG5idXR0b246aG92ZXIgc3ZnIHBhdGgjSW5mby1TcXVhcmUtMntcbiAgICBmaWxsOiAjMkQ2OERDO1xufVxuXG5tYWlue1xuICAgIHBhZGRpbmc6IDAgMmVtO1xufVxuXG5zdHJvbmd7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuZGl2LmNoYXRzZWN0aW9ue1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5jaGF0c2VjdGlvbi51c2Vye1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbmRpdi5jaGF0c2VjdGlvbi5haXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuZGl2LmNoYXRzZWN0aW9uIGgze1xuICAgIGNvbG9yOiAjOEU4RDk0O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuODI3cHg7IFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59XG5cbmRpdi5jaGF0c2VjdGlvbiBoMyA+IGJ1dHRvbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRvcDogMC4zZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAxLjJlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLmxvYWRlZCBoMyA+IGJ1dHRvbntcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmRpdi5jaGF0c2VjdGlvbiBoMyA+IGJ1dHRvbiA+IHN2Z3tcbiAgICBmaWx0ZXI6IGludmVydCg1OSUpIHNlcGlhKDclKSBzYXR1cmF0ZSgyMzAlKSBodWUtcm90YXRlKDIwOWRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDk0JSk7XG4gICAgaGVpZ2h0OiAxLjRlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLnVzZXIgaDMgPiBidXR0b246aG92ZXIgc3Zne1xuICAgIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoNSUpIHNhdHVyYXRlKDEyMTQlKSBodWUtcm90YXRlKDIxMWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg5JSk7XG59XG5cbmRpdi5jaGF0c2VjdGlvbi5haSBoMyA+IGJ1dHRvbjpob3ZlciBzdmd7XG4gICAgZmlsdGVyOiBpbnZlcnQoNDQlKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDU0MDIlKSBodWUtcm90YXRlKDE5NmRlZykgYnJpZ2h0bmVzcyg4NCUpIGNvbnRyYXN0KDEwNyUpO1xufVxuXG5kaXYuY2hhdGJveHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1heC13aWR0aDogNzVjaDtcbn1cblxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudHtcbiAgICBwYWRkaW5nOiAxZW0gMCAxZW07XG4gICAgbWluLXdpZHRoOiAxNWNoO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgZmxleDogMTtcbn1cblxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCAqOm5vdCg6Zmlyc3QtY2hpbGQpe1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IG9sLCBcbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgdWx7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuZGl2LmNoYXRib3ggPiBkaXYubGVmdC1ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LnJpZ2h0LWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5kaXYubWlkZGxlLWxlZnQsIGRpdi5taWRkbGUtcmlnaHR7XG4gICAgd2lkdGg6IDFlbTtcbiAgICBmbGV4OiAxO1xufVxuXG5kaXYudXBwZXItbGVmdCwgXG5kaXYubG93ZXItbGVmdCwgXG5kaXYudXBwZXItcmlnaHQsIFxuZGl2Lmxvd2VyLXJpZ2h0e1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG59XG5cbmRpdi51cHBlci1sZWZ0e1xuICAgIGJvcmRlci1yYWRpdXM6IDFlbSAwcHggMHB4IDBweDsgXG59XG5kaXYudXBwZXItcmlnaHR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDFlbSAwcHggMHB4O1xufVxuZGl2Lmxvd2VyLXJpZ2h0e1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwZW0gMWVtIDBweDtcbn1cbmRpdi5sb3dlci1sZWZ0e1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwZW0gMHB4IDFlbTtcbn1cblxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5sZWZ0LWJveCA+IGRpdixcbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYucmlnaHQtYm94ID4gZGl2LCBcbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYuY29udGVudFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI1MkE7XG59XG5cbmRpdi5jaGF0Ym94LmFpID4gZGl2LmxlZnQtYm94ID4gZGl2LFxuZGl2LmNoYXRib3guYWkgPiBkaXYucmlnaHQtYm94ID4gZGl2LFxuZGl2LmNoYXRib3guYWkgPiBkaXYuY29udGVudFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG59XG5cbmRpdi5jb250ZW50IGRpdntcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuZGl2LmNoYXRib3ggc3Zne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFweDtcbiAgICB3aWR0aDogMS41ZW07XG59XG5cbmRpdi5jaGF0Ym94LmFpIHN2Z3tcbiAgICBsZWZ0OiAtMXB4O1xufVxuXG5kaXYuY2hhdGJveC51c2VyIHN2Z3tcbiAgICByaWdodDogLTFweDtcbn1cblxuXG4vKiBJbnB1dCBTZWN0aW9uICovXG5cbnNlY3Rpb24jaW5wdXRDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGdhcDogMC42ZW07XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMS4yZW0gMS41ZW0gMS4yZW07XG59XG5cbnNlY3Rpb24jaW5wdXRDb250YWluZXIgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA0OC41cHggMTBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbn1cblxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b24gPiBzdmd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMC4xZW07XG4gICAgcmlnaHQ6IDAuMWVtO1xuICAgIHdpZHRoOiAyLjJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNS40MTdweCAxMC44MzNweDtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVye1xuICAgIGZsZXg6IDE7XG59XG5cbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciA+IHRleHRhcmVhe1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcGFkZGluZzogMC42ZW0gMC41ZW0gMC40ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ2OERDO1xuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciB0ZXh0YXJlYTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQ4JSk7XG59XG5cbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciB0ZXh0YXJlYTpmb2N1c3tcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XG59XG5cbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciA+IGRpdiNrZXl3b3JkQ29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xufVxuXG4ua2V5d29yZHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAuM2VtIDAuOGVtO1xuICAgIHdpZHRoOiBtYXgoNWNoLCBmaXQtY29udGVudCk7XG4gICAgbWFyZ2luOiAwIDAuM2VtIDAuMTVlbSAwO1xuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XG4gICAgYm9yZGVyLXJhZGl1czogMC43ZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQgLmtleXdvcmQtY2xvc2V7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xuICAgIGNvbG9yOiBoc2woMjIwLCA3MSUsIDQ4JSk7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2RlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMjAlKTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGUgLmtleXdvcmQtY2xvc2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZSBzdmd7XG4gICAgdG9wOiAwLjFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xufVxuXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNS40ZW07XG4gICAgZ2FwOiAwLjRlbTtcbn1cblxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyID4gYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG59XG5cbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lciBzdmcge1xuICAgIHdpZHRoOiAxLjJlbTtcbn1cblxuLyogUG9wIFVwIFNlY3Rpb24gKi9cblxuLmhpZGRlbntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKSAhaW1wb3J0YW50O1xufVxuXG5kaXYjZGFya092ZXJsYXl7XG4gICAgei1pbmRleDogMjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyMCwgNjklLCA1JSwgMC41KTtcbn1cblxuLmNlbnRlci1wb3B1cHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB3aWR0aDogbWluKDgwdncsIDYwY2gpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIHotaW5kZXg6IDMwMDtcbiAgICBwYWRkaW5nOiAxLjJlbSAxZW0gMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQ5KSBpbnNldDtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBoM3tcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBkaXZ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbmRpdi5yZWNvbW1lbmRhdGlvbntcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xufVxuXG5kaXYucmVjb21tZW5kYXRpb246bm90KDpsYXN0LWNoaWxkKXtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9uLnNlbGVjdGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMzAlKTtcbiAgICBvdXRsaW5lOiBoc2woMjIwLCA3MSUsIDIwJSkgMnB4IHNvbGlkO1xufVxuXG5kaXYjYWN0aW9uQnV0dG9uc3tcbiAgICBtYXJnaW4tdG9wOiAwLjhlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uI3JlZnJlc2hCdXR0b257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmJ1dHRvbiNyZWZyZXNoQnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbi5sb2FkZWQgYnV0dG9uI3JlZnJlc2hCdXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmRpdiNjZW50ZXJCdXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbmRpdiNjZW50ZXJCdXR0b25ze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbmRpdiNjZW50ZXJCdXR0b25zID4gYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEyY2g7XG4gICAgaGVpZ2h0OiAxLjhlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xufVxuXG5cbi8qIEFuaW1hdGlvbiBQYXJ0ICovXG5cbiNyZWNvbW1lbmRhdGlvblBvcFVwIC5kb3QtZmxhc2hpbmd7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4uZG90LWZsYXNoaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGNvbG9yOiAjMkQ2OERDO1xuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XG59XG5cbi5sb2FkZWQgLmRvdC1mbGFzaGluZ3tcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uZG90LWZsYXNoaW5nOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xufVxuXG4uZG90LWZsYXNoaW5nOjpiZWZvcmUge1xuICAgIGxlZnQ6IC0xNXB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBjb2xvcjogIzJENjhEQztcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuXG4uZG90LWZsYXNoaW5nOjphZnRlciB7XG4gICAgbGVmdDogMTVweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgY29sb3I6ICMyRDY4REM7XG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xufVxuICBcbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nIHtcbiAgICAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIH1cbiAgICA1MCUsIDEwMCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTIsIDEyOCwgMjU1LCAwLjIpO1xuICAgIH1cbn1cblxuZGl2LmNvbnRlbnQgPiBkaXYuZG90LWZsYXNoaW5nLmJsdWV7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG4uZG90LWZsYXNoaW5nLmJsdWUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YmVmb3JlLCAuZG90LWZsYXNoaW5nLmJsdWU6OmFmdGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBkb3QtZmxhc2hpbmctYmx1ZTtcbn1cblxuQGtleWZyYW1lcyBkb3QtZmxhc2hpbmctYmx1ZSB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gICAgNTAlLCAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA4MCUpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxp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eTogJ0xhdG8nO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IG5vbmU7XFxufVxcblxcbjpyb290e1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZy10b3A6IDVlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdlbTtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+IGRpdi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbntcXG4gICAgdG9wOiAwLjRlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbiBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xcbiAgICBmaWxsOiBibGFjaztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHN2ZyBwYXRoI0luZm8tU3F1YXJlLTJ7XFxuICAgIGZpbGw6ICMyRDY4REM7XFxufVxcblxcbm1haW57XFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcbn1cXG5cXG5zdHJvbmd7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24udXNlcntcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi5haXtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcbmRpdi5jaGF0c2VjdGlvbiBoM3tcXG4gICAgY29sb3I6ICM4RThEOTQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjgyN3B4OyBcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbiBoMyA+IGJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdG9wOiAwLjNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24ubG9hZGVkIGgzID4gYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbiBoMyA+IGJ1dHRvbiA+IHN2Z3tcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTklKSBzZXBpYSg3JSkgc2F0dXJhdGUoMjMwJSkgaHVlLXJvdGF0ZSgyMDlkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg5NCUpO1xcbiAgICBoZWlnaHQ6IDEuNGVtO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24udXNlciBoMyA+IGJ1dHRvbjpob3ZlciBzdmd7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoNSUpIHNhdHVyYXRlKDEyMTQlKSBodWUtcm90YXRlKDIxMWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg5JSk7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi5haSBoMyA+IGJ1dHRvbjpob3ZlciBzdmd7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDQ0JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSg1NDAyJSkgaHVlLXJvdGF0ZSgxOTZkZWcpIGJyaWdodG5lc3MoODQlKSBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuZGl2LmNoYXRib3h7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICAgIG1heC13aWR0aDogNzVjaDtcXG59XFxuXFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudHtcXG4gICAgcGFkZGluZzogMWVtIDAgMWVtO1xcbiAgICBtaW4td2lkdGg6IDE1Y2g7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgKjpub3QoOmZpcnN0LWNoaWxkKXtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgb2wsIFxcbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgdWx7XFxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LmxlZnQtYm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuZGl2LmNoYXRib3ggPiBkaXYucmlnaHQtYm94e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogMS41ZW07XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5kaXYubWlkZGxlLWxlZnQsIGRpdi5taWRkbGUtcmlnaHR7XFxuICAgIHdpZHRoOiAxZW07XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmRpdi51cHBlci1sZWZ0LCBcXG5kaXYubG93ZXItbGVmdCwgXFxuZGl2LnVwcGVyLXJpZ2h0LCBcXG5kaXYubG93ZXItcmlnaHR7XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICB3aWR0aDogMWVtO1xcbn1cXG5cXG5kaXYudXBwZXItbGVmdHtcXG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDBweCAwcHggMHB4OyBcXG59XFxuZGl2LnVwcGVyLXJpZ2h0e1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMWVtIDBweCAwcHg7XFxufVxcbmRpdi5sb3dlci1yaWdodHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBlbSAxZW0gMHB4O1xcbn1cXG5kaXYubG93ZXItbGVmdHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBlbSAwcHggMWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LmxlZnQtYm94ID4gZGl2LFxcbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYucmlnaHQtYm94ID4gZGl2LCBcXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LmNvbnRlbnRcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI1MkE7XFxufVxcblxcbmRpdi5jaGF0Ym94LmFpID4gZGl2LmxlZnQtYm94ID4gZGl2LFxcbmRpdi5jaGF0Ym94LmFpID4gZGl2LnJpZ2h0LWJveCA+IGRpdixcXG5kaXYuY2hhdGJveC5haSA+IGRpdi5jb250ZW50XFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbn1cXG5cXG5kaXYuY29udGVudCBkaXZ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaXYuY2hhdGJveCBzdmd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxcHg7XFxuICAgIHdpZHRoOiAxLjVlbTtcXG59XFxuXFxuZGl2LmNoYXRib3guYWkgc3Zne1xcbiAgICBsZWZ0OiAtMXB4O1xcbn1cXG5cXG5kaXYuY2hhdGJveC51c2VyIHN2Z3tcXG4gICAgcmlnaHQ6IC0xcHg7XFxufVxcblxcblxcbi8qIElucHV0IFNlY3Rpb24gKi9cXG5cXG5zZWN0aW9uI2lucHV0Q29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgZ2FwOiAwLjZlbTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtIDEuMmVtO1xcbn1cXG5cXG5zZWN0aW9uI2lucHV0Q29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGhlaWdodDogNWVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA0OC41cHggMTBweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ2OERDO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG59XFxuXFxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b24gPiBzdmd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMC4xZW07XFxuICAgIHJpZ2h0OiAwLjFlbTtcXG4gICAgd2lkdGg6IDIuMmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDUuNDE3cHggMTAuODMzcHg7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lcntcXG4gICAgZmxleDogMTtcXG59XFxuXFxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gdGV4dGFyZWF7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHBhZGRpbmc6IDAuNmVtIDAuNWVtIDAuNGVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJENjhEQztcXG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQ4JSk7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciB0ZXh0YXJlYTpmb2N1c3tcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcXG59XFxuXFxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gZGl2I2tleXdvcmRDb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG59XFxuXFxuLmtleXdvcmR7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMC4zZW0gMC44ZW07XFxuICAgIHdpZHRoOiBtYXgoNWNoLCBmaXQtY29udGVudCk7XFxuICAgIG1hcmdpbjogMCAwLjNlbSAwLjE1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcXG4gICAgYm9yZGVyLXJhZGl1czogMC43ZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3Jke1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3Nle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xcbiAgICBjb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAyMCUpO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZSAua2V5d29yZC1jbG9zZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZSBzdmd7XFxuICAgIHRvcDogMC4xZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICB3aWR0aDogMWVtO1xcbn1cXG5cXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1LjRlbTtcXG4gICAgZ2FwOiAwLjRlbTtcXG59XFxuXFxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyID4gYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIHdpZHRoOiAyLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxufVxcblxcbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lciBzdmcge1xcbiAgICB3aWR0aDogMS4yZW07XFxufVxcblxcbi8qIFBvcCBVcCBTZWN0aW9uICovXFxuXFxuLmhpZGRlbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCkgIWltcG9ydGFudDtcXG59XFxuXFxuZGl2I2RhcmtPdmVybGF5e1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjIwLCA2OSUsIDUlLCAwLjUpO1xcbn1cXG5cXG4uY2VudGVyLXBvcHVwe1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdpZHRoOiBtaW4oODB2dywgNjBjaCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICB6LWluZGV4OiAzMDA7XFxuICAgIHBhZGRpbmc6IDEuMmVtIDFlbSAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0OSkgaW5zZXQ7XFxufVxcblxcbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwID4gaDN7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGRpdntcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbmRpdi5yZWNvbW1lbmRhdGlvbntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgcGFkZGluZzogMC41ZW0gMC43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9uOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5kaXYucmVjb21tZW5kYXRpb246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9uLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDMwJSk7XFxuICAgIG91dGxpbmU6IGhzbCgyMjAsIDcxJSwgMjAlKSAycHggc29saWQ7XFxufVxcblxcbmRpdiNhY3Rpb25CdXR0b25ze1xcbiAgICBtYXJnaW4tdG9wOiAwLjhlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiNyZWZyZXNoQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5idXR0b24jcmVmcmVzaEJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuLmxvYWRlZCBidXR0b24jcmVmcmVzaEJ1dHRvbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmRpdiNjZW50ZXJCdXR0b25zIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG5kaXYjY2VudGVyQnV0dG9uc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5kaXYjY2VudGVyQnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAxMmNoO1xcbiAgICBoZWlnaHQ6IDEuOGVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcXG59XFxuXFxuXFxuLyogQW5pbWF0aW9uIFBhcnQgKi9cXG5cXG4jcmVjb21tZW5kYXRpb25Qb3BVcCAuZG90LWZsYXNoaW5ne1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcblxcbi5kb3QtZmxhc2hpbmcge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgY29sb3I6ICMyRDY4REM7XFxuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgbGluZWFyIGFsdGVybmF0ZTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xcbn1cXG5cXG4ubG9hZGVkIC5kb3QtZmxhc2hpbmd7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSwgLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLmRvdC1mbGFzaGluZzo6YmVmb3JlIHtcXG4gICAgbGVmdDogLTE1cHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgY29sb3I6ICMyRDY4REM7XFxuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nOjphZnRlciB7XFxuICAgIGxlZnQ6IDE1cHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgY29sb3I6ICMyRDY4REM7XFxuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XFxufVxcbiAgXFxuQGtleWZyYW1lcyBkb3QtZmxhc2hpbmcge1xcbiAgICAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgfVxcbiAgICA1MCUsIDEwMCUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUyLCAxMjgsIDI1NSwgMC4yKTtcXG4gICAgfVxcbn1cXG5cXG5kaXYuY29udGVudCA+IGRpdi5kb3QtZmxhc2hpbmcuYmx1ZXtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICB3aWR0aDogMTBweDtcXG59XFxuXFxuLmRvdC1mbGFzaGluZy5ibHVlLCAuZG90LWZsYXNoaW5nLmJsdWU6OmJlZm9yZSwgLmRvdC1mbGFzaGluZy5ibHVlOjphZnRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBkb3QtZmxhc2hpbmctYmx1ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBkb3QtZmxhc2hpbmctYmx1ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB9XFxuICAgIDUwJSwgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDgwJSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGF3aW9hd2tvYWFrd29hID0gXCJTcExpVDY2M05TUFRDNXF4cDU1ZVNsbzRwVDNCbGJrRkpXQjhQSFdxMXZzUnZTalZBUzBGaVwiO1xuXG5jb25zdCByZXNwb25zZTEgPSBbXG4gICAgXCJJbmkgcGVydGFueWFhbiAxXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiAyXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiAzXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiA0XCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiA1XCIsXG5dO1xuXG5jb25zdCByZXNwb25zZTIgPSBbXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgMVwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDJcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAzXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgNFwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDVcIixcbl1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbW8oKXtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZ2V0UmVwbHkoW1xuICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IFwiSGFpIEdQVCFcIn1cbiAgICBdKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxheSh0aW1lKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVwbHkobWVzc2FnZSl7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciBzay0ke2F3aW9hd2tvYWFrd29hLnNsaWNlKDUpfWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZSxcbiAgICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLCBvcHRpb25zKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhW1wiY2hvaWNlc1wiXVswXVtcIm1lc3NhZ2VcIl1bXCJjb250ZW50XCJdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbihrZXl3b3JkTGlzdCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKyl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmVwbHkoW1xuICAgICAgICAgICAgICAgIHtyb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIlVzZXIgYWthbiBtZW1iZXJpa2FuIGthdGEga3VuY2kgeWFuZyBkaXBpc2Foa2FuIG9sZWgga29tYSxcXFxuICAgICAgICAgICAgICAgIGthbXUgaGFydXMgbWVtYmVyaWthbiBsaXN0IDUgcGVydGFueWFhbiBzZWRlcmhhbmEgeWFuZyByZWxldmFuIGRlbmdhbiBrYXRhIGt1bmNpIHRlcnNlYnV0IHRhbnBhIGthdGEgcGVuZ2FudGFyLlxcXG4gICAgICAgICAgICAgICAgS2F0YSBrdW5jaSBiaXNhIG1lbWlsaWtpIGtlc2FsYWhhbiBwZW51bGlzYW4gZGFuIGthbXUgaGFydXMgbWVuZ2FudGlzaXBhc2lueWEhXCJ9LFxuICAgICAgICAgICAgICAgIHtyb2xlOiBcInVzZXJcIiwgY29udGVudDoga2V5d29yZExpc3Quam9pbignLCAnKX0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsUmVzcG9uc2UgPSByZXNwb25zZS5zcGxpdCgvXFxuLylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiAvXlxcZCQvLnRlc3QobGluZVswXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgobGluZSkgPT4gbGluZS5zbGljZSgzKSk7XG4gICAgICAgICAgICBpZihmaW5hbFJlc3BvbnNlLmxlbmd0aCAhPSA1KSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzaW5nIFByb2JsZW1cIik7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkLCB0cnlpbmcuLi5cIik7XG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIFJlcXVlc3QnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFJlY29tbWVuZGF0aW9uKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlMik7XG4gICAgICAgIH0sIDEwMDApXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc2tRdWVzdGlvbihxdWVzdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAgICAgIHtyb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIlVzZXIgYWthbiBtZW1iZXJpa2FuIHBlcnRhbnlhYW4uIEthbXUgaGFydXMgbWVtYmVyaWthbiBqYXdhYmFuIGRlbmdhbiBrYXRhLWthdGEgZGFuIHBlbmplbGFzYW4geWFuZyBtdWRhaCBkaXBhaGFtaVwifSxcbiAgICAgICAgICAgIHtyb2xlOiBcInVzZXJcIiwgY29udGVudDogYCR7cXVlc3Rpb259YH1cbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgY2F0Y2goZXJyKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uZFwiKVxuICAgIH1cbn0iLCJleHBvcnQgZnVuY3Rpb24gZm9jdXNFbGVtZW50KHNlbGVjdG9yKXtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHNlbGVjdGVkLmZvY3VzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEtleXdvcmQobmV3S2V5d29yZCl7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXl3b3JkQ29udGFpbmVyJyk7XG4gICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdLZXl3b3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyS2V5d29yZCgpe1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5d29yZENvbnRhaW5lcicpO1xuICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJSZWNvbW1lbmRhdGlvbktleXdvcmQoKXtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcicpO1xuICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheSgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrT3ZlcmxheScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BvcFVwUmVjb21tZW5kYXRpb24oa2V5d29yZEVsZW1lbnRMaXN0KXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVyJyk7XG4gICAga2V5d29yZEVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQocGFyYW0pe1xuICAgIGNvbnN0IHJlY29tbWVuZGF0aW9uUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpO1xuICAgIGlmKHBhcmFtID09IFwiYWRkXCIpIHJlY29tbWVuZGF0aW9uUG9wVXAuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgZWxzZSBpZihwYXJhbSA9PSBcInJlbW92ZVwiKSByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlZCcpO1xuICAgIGVsc2UgcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFJlY29tbWVuZGF0aW9uKGVsZW1lbnRMaXN0KXtcbiAgICB0b2dnbGVSZWNvbW1lbmRhdGlvbkxvYWRlZCgnYWRkJyk7XG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lcicpO1xuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uKCl7XG4gICAgdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQoJ3JlbW92ZScpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbiAgICB3aGlsZShxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKSBxdWVzdGlvbkNvbnRhaW5lci5yZW1vdmVDaGlsZChxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmVjb21tZW5kYXRpb25FbGVtZW50cyhyZWNvbW1lbmRhdGlvbkxpc3Qpe1xuICAgIGxldCBlbGVtZW50TGlzdCA9IFtdO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdC5mb3JFYWNoKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgncmVjb21tZW5kYXRpb24nKTtcbiAgICAgICAgbmV3UXVlc3Rpb24uaWQgPSBgcmVjb21tZW5kYXRpb24tJHtpbmRleH1gO1xuICAgICAgICBuZXdRdWVzdGlvbi5pbm5lckhUTUwgPSBxdWVzdGlvbjtcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChuZXdRdWVzdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvbW1lbmRhdGlvbi0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZWxlY3RSZWNvbW1lbmRhdGlvbihpbmRleCl7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY29tbWVuZGF0aW9uLSR7aW5kZXh9YCk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQb3BVcFJlY29tbWVuZGF0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUG9wVXAnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjbGVhclJlY29tbWVuZGF0aW9uKCk7XG4gICAgY2xlYXJSZWNvbW1lbmRhdGlvbktleXdvcmQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVzZXJDaGF0KG1lc3NhZ2UsIGNoYXRJbmRleCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjaGF0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoYXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGF0c2VjdGlvblwiLCBcInVzZXJcIiwgXCJsb2FkZWRcIik7XG4gICAgY2hhdEVsZW1lbnQuaWQgPSBgY2hhdC0ke2NoYXRJbmRleH1gO1xuICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbmRhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNoYXRTcGVhay0ke2NoYXRJbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzFcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMzEgMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI2LjUyNzggMy44ODA4M0MyNi4yMjQgMy40Nzg0OSAyNS42MjM0IDMuMzc5MTIgMjUuMTg2NCAzLjY1ODg5QzI0Ljc0OTUgMy45Mzg2NSAyNC42NDE1IDQuNDkxNjEgMjQuOTQ1NCA0Ljg5Mzk2QzI2Ljc1ODYgNy4yOTQ5OCAyNy43ODA5IDEwLjQ3OTMgMjcuNzgwOSAxMy45MzI1QzI3Ljc4MDkgMTcuMzg2IDI2Ljc1ODUgMjAuNTcxNSAyNC45NDU0IDIyLjk3MjNDMjQuNjQxNSAyMy4zNzQ3IDI0Ljc0OTUgMjMuOTI3NiAyNS4xODY0IDI0LjIwNzRDMjUuNjIzNCAyNC40ODcxIDI2LjIyNCAyNC4zODc4IDI2LjUyNzggMjMuOTg1NEMyOC41NzIxIDIxLjI3ODUgMjkuNzA4MyAxNy43Mzg2IDI5LjcwODMgMTMuOTMyNUMyOS43MDgzIDEwLjEyNjcgMjguNTcyMyA2LjU4Nzk4IDI2LjUyNzggMy44ODA4M1pNMTMuNjAyNyAzLjgwNDA5TDEzLjgwMjggMy43OTcwM0wxMy45ODUxIDMuNzk4ODJDMTUuMjg5NyAzLjg1NjQ4IDE2LjQwNTEgNC43NDIwMiAxNi44MzIxIDYuMDU1MThDMTYuOTUxMSA2LjQ3Mzg3IDE3LjAxODMgNi44ODMzNCAxNy4wOTY2IDcuNTQ5OTRMMTcuMjAwNyA4LjQyMzVDMTcuNDEwNCAxMC40NDg1IDE3LjQwMzcgMTguNDAzIDE3LjE4MDcgMjAuMDQyOUwxNy4wNDI0IDIxLjIxODhDMTYuOTg3NiAyMS42MTU0IDE2LjkyNTIgMjEuOTIwNSAxNi44MjMgMjIuMjcwNkMxNi4zODE3IDIzLjYyNzMgMTUuMTY0MSAyNC41MzYzIDEzLjgxNzggMjQuNDk4OUMxMy4xMzI1IDI0LjUxNDQgMTIuMjk3OSAyNC4xOTM0IDExLjcxNzQgMjMuNzQzOUw3LjE0MzAyIDIwLjMyMjRMNC43ODg3MyAyMC4zMjNDMy4wNTQzNyAyMC4zMjMgMS44MTkwNyAxOS4yNTEgMS41MTU2NCAxNy42MTU3TDEuNDgxMzkgMTcuMzk5M0MxLjIyNDQ2IDE1LjcxNzcgMS4yMzI0NCAxMi42NjA1IDEuNDgxMjggMTAuODIyOEMxLjczMDMgOS4xODM0MiAzLjAzMDYxIDcuOTczOTkgNC43ODg3MyA3Ljk3Mzk5TDcuMTQxNzMgNy45NzMzM0wxMS42MDIgNC42MjY4MkMxMi4xNDIgNC4yMDU2NyAxMi45NDc4IDMuODU5MjYgMTMuNjAyNyAzLjgwNDA5Wk0xMy44MjIyIDUuNTcwODNMMTMuNzczMyA1LjU3MUMxMy42MTc4IDUuNTY3OTEgMTMuMTE4IDUuNzcwMiAxMi44MzM4IDUuOTkxNjNMOC4wOTM5NSA5LjU0OTA3QzcuOTIxOTggOS42NzgxNCA3LjcwNjkyIDkuNzQ4NjIgNy40ODUwNiA5Ljc0ODYySDQuNzg4NzNDNC4wNTg1MiA5Ljc0ODYyIDMuNTEzNjEgMTAuMjU1NCAzLjM5MTk5IDExLjA1NTRDMy4xNjUyNyAxMi43MzA1IDMuMTU3NjkgMTUuNjMxNyAzLjM5MjM4IDE3LjE2ODhDMy41MTQyIDE4LjA5MzYgNC4wMDc1NiAxOC41NDgzIDQuNzg4NzMgMTguNTQ4M0g3LjQ4NTA2QzcuNzA2MzQgMTguNTQ4MyA3LjkyMDg3IDE4LjYxODUgOC4wOTI2MyAxOC43NDY5TDEyLjk0NTEgMjIuMzc1OUMxMy4yMDM0IDIyLjU3NTkgMTMuNjAwNSAyMi43Mjg2IDEzLjgyMjIgMjIuNzI0OUMxNC4zMDA5IDIyLjczNzggMTQuNzczOSAyMi4zODQ2IDE0Ljk2OSAyMS43ODYyQzE1LjA3MDQgMjEuNDM3OCAxNS4xMjMyIDIxLjExMTggMTUuMTg4NyAyMC41MTI2TDE1LjIzMTQgMjAuMTIyOEwxNS4yNjc5IDE5LjgyNTJDMTUuNDc4MyAxOC4yNzc3IDE1LjQ3ODMgMTAuMDE5MiAxNS4yNjc2IDguNDY5MTNMMTUuMTMwNyA3LjM0NTE3QzE1LjA5ODQgNy4xMDc5OCAxNS4wNjcgNi45MjAwNiAxNS4wMzIxIDYuNzU4OTVMMTQuOTc2NyA2LjUzNDU2QzE0Ljc3MzkgNS45MTE4IDE0LjMwMDIgNS41NTc5OCAxMy44MjIyIDUuNTcwODNaTTIwLjc3NzggNy4yNzk2OUMyMS4yMTQ4IDYuOTk5OTUgMjEuODE1MyA3LjA5OTM1IDIyLjExOTEgNy41MDE3MUMyMy40MzE4IDkuMjQwMSAyNC4xNTg2IDExLjUwNDIgMjQuMTU4NiAxMy45MzMxQzI0LjE1ODYgMTYuMzYxOCAyMy40MzE5IDE4LjYyNDggMjIuMTE5MSAyMC4zNjM0QzIxLjgxNTMgMjAuNzY1NyAyMS4yMTQ4IDIwLjg2NTEgMjAuNzc3OCAyMC41ODU0QzIwLjM0MDggMjAuMzA1NiAyMC4yMzI4IDE5Ljc1MjcgMjAuNTM2NiAxOS4zNTAzQzIxLjYxODMgMTcuOTE3OCAyMi4yMzEyIDE2LjAwOTIgMjIuMjMxMiAxMy45MzMxQzIyLjIzMTIgMTEuODU2OCAyMS42MTgxIDkuOTQ3MDMgMjAuNTM2NiA4LjUxNDc1QzIwLjIzMjggOC4xMTIzOSAyMC4zNDA4IDcuNTU5NDQgMjAuNzc3OCA3LjI3OTY5WlwiIGZpbGw9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdGJveCB1c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjExNi41ODcgMTk2LjI0NiA5NS41ODEgOTkuMTA5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAyMDYuNTg3IDI5NS4zNTUgQyAxNTYuODgxIDI5NS4zNTUgMTE2LjU4NyAyNTUuMDYxIDExNi41ODcgMjA1LjM1NSBDIDExNi41ODcgMjAyLjI4IDExNi43NDEgMTk5LjI0MSAxMTcuMDQyIDE5Ni4yNDYgTCAxNzYuMzEyIDE5Ni4yNDYgQyAxNzMuMjA0IDIwNC45MzQgMTcxLjUxMSAyMTQuMjk0IDE3MS41MTEgMjI0LjA1IEMgMTcxLjUxMSAyNTQuMzQ2IDE4Ny44MzUgMjgwLjgzIDIxMi4xNjggMjk1LjE4NSBDIDIxMC4zMjIgMjk1LjI5OCAyMDguNDYxIDI5NS4zNTUgMjA2LjU4NyAyOTUuMzU1IFpcIiBzdHlsZT1cImZpbGw6IHJnYigzOCwgMzcsIDQyKTsgdHJhbnNmb3JtLW9yaWdpbjogMTY0LjM3N3B4IDI0NS44MDJweDtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcbiAgICBzY3JvbGxJbnRvVG9wKGNoYXRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEdQVENoYXQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hhdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoYXRzZWN0aW9uXCIsIFwiYWlcIik7XG4gICAgY2hhdEVsZW1lbnQuaWQgPSBgY2hhdC0ke2NoYXRJbmRleH1gO1xuICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PYnJvbGluIEFJPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNoYXRTcGVhay0ke2NoYXRJbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzFcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMzEgMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI2LjUyNzggMy44ODA4M0MyNi4yMjQgMy40Nzg0OSAyNS42MjM0IDMuMzc5MTIgMjUuMTg2NCAzLjY1ODg5QzI0Ljc0OTUgMy45Mzg2NSAyNC42NDE1IDQuNDkxNjEgMjQuOTQ1NCA0Ljg5Mzk2QzI2Ljc1ODYgNy4yOTQ5OCAyNy43ODA5IDEwLjQ3OTMgMjcuNzgwOSAxMy45MzI1QzI3Ljc4MDkgMTcuMzg2IDI2Ljc1ODUgMjAuNTcxNSAyNC45NDU0IDIyLjk3MjNDMjQuNjQxNSAyMy4zNzQ3IDI0Ljc0OTUgMjMuOTI3NiAyNS4xODY0IDI0LjIwNzRDMjUuNjIzNCAyNC40ODcxIDI2LjIyNCAyNC4zODc4IDI2LjUyNzggMjMuOTg1NEMyOC41NzIxIDIxLjI3ODUgMjkuNzA4MyAxNy43Mzg2IDI5LjcwODMgMTMuOTMyNUMyOS43MDgzIDEwLjEyNjcgMjguNTcyMyA2LjU4Nzk4IDI2LjUyNzggMy44ODA4M1pNMTMuNjAyNyAzLjgwNDA5TDEzLjgwMjggMy43OTcwM0wxMy45ODUxIDMuNzk4ODJDMTUuMjg5NyAzLjg1NjQ4IDE2LjQwNTEgNC43NDIwMiAxNi44MzIxIDYuMDU1MThDMTYuOTUxMSA2LjQ3Mzg3IDE3LjAxODMgNi44ODMzNCAxNy4wOTY2IDcuNTQ5OTRMMTcuMjAwNyA4LjQyMzVDMTcuNDEwNCAxMC40NDg1IDE3LjQwMzcgMTguNDAzIDE3LjE4MDcgMjAuMDQyOUwxNy4wNDI0IDIxLjIxODhDMTYuOTg3NiAyMS42MTU0IDE2LjkyNTIgMjEuOTIwNSAxNi44MjMgMjIuMjcwNkMxNi4zODE3IDIzLjYyNzMgMTUuMTY0MSAyNC41MzYzIDEzLjgxNzggMjQuNDk4OUMxMy4xMzI1IDI0LjUxNDQgMTIuMjk3OSAyNC4xOTM0IDExLjcxNzQgMjMuNzQzOUw3LjE0MzAyIDIwLjMyMjRMNC43ODg3MyAyMC4zMjNDMy4wNTQzNyAyMC4zMjMgMS44MTkwNyAxOS4yNTEgMS41MTU2NCAxNy42MTU3TDEuNDgxMzkgMTcuMzk5M0MxLjIyNDQ2IDE1LjcxNzcgMS4yMzI0NCAxMi42NjA1IDEuNDgxMjggMTAuODIyOEMxLjczMDMgOS4xODM0MiAzLjAzMDYxIDcuOTczOTkgNC43ODg3MyA3Ljk3Mzk5TDcuMTQxNzMgNy45NzMzM0wxMS42MDIgNC42MjY4MkMxMi4xNDIgNC4yMDU2NyAxMi45NDc4IDMuODU5MjYgMTMuNjAyNyAzLjgwNDA5Wk0xMy44MjIyIDUuNTcwODNMMTMuNzczMyA1LjU3MUMxMy42MTc4IDUuNTY3OTEgMTMuMTE4IDUuNzcwMiAxMi44MzM4IDUuOTkxNjNMOC4wOTM5NSA5LjU0OTA3QzcuOTIxOTggOS42NzgxNCA3LjcwNjkyIDkuNzQ4NjIgNy40ODUwNiA5Ljc0ODYySDQuNzg4NzNDNC4wNTg1MiA5Ljc0ODYyIDMuNTEzNjEgMTAuMjU1NCAzLjM5MTk5IDExLjA1NTRDMy4xNjUyNyAxMi43MzA1IDMuMTU3NjkgMTUuNjMxNyAzLjM5MjM4IDE3LjE2ODhDMy41MTQyIDE4LjA5MzYgNC4wMDc1NiAxOC41NDgzIDQuNzg4NzMgMTguNTQ4M0g3LjQ4NTA2QzcuNzA2MzQgMTguNTQ4MyA3LjkyMDg3IDE4LjYxODUgOC4wOTI2MyAxOC43NDY5TDEyLjk0NTEgMjIuMzc1OUMxMy4yMDM0IDIyLjU3NTkgMTMuNjAwNSAyMi43Mjg2IDEzLjgyMjIgMjIuNzI0OUMxNC4zMDA5IDIyLjczNzggMTQuNzczOSAyMi4zODQ2IDE0Ljk2OSAyMS43ODYyQzE1LjA3MDQgMjEuNDM3OCAxNS4xMjMyIDIxLjExMTggMTUuMTg4NyAyMC41MTI2TDE1LjIzMTQgMjAuMTIyOEwxNS4yNjc5IDE5LjgyNTJDMTUuNDc4MyAxOC4yNzc3IDE1LjQ3ODMgMTAuMDE5MiAxNS4yNjc2IDguNDY5MTNMMTUuMTMwNyA3LjM0NTE3QzE1LjA5ODQgNy4xMDc5OCAxNS4wNjcgNi45MjAwNiAxNS4wMzIxIDYuNzU4OTVMMTQuOTc2NyA2LjUzNDU2QzE0Ljc3MzkgNS45MTE4IDE0LjMwMDIgNS41NTc5OCAxMy44MjIyIDUuNTcwODNaTTIwLjc3NzggNy4yNzk2OUMyMS4yMTQ4IDYuOTk5OTUgMjEuODE1MyA3LjA5OTM1IDIyLjExOTEgNy41MDE3MUMyMy40MzE4IDkuMjQwMSAyNC4xNTg2IDExLjUwNDIgMjQuMTU4NiAxMy45MzMxQzI0LjE1ODYgMTYuMzYxOCAyMy40MzE5IDE4LjYyNDggMjIuMTE5MSAyMC4zNjM0QzIxLjgxNTMgMjAuNzY1NyAyMS4yMTQ4IDIwLjg2NTEgMjAuNzc3OCAyMC41ODU0QzIwLjM0MDggMjAuMzA1NiAyMC4yMzI4IDE5Ljc1MjcgMjAuNTM2NiAxOS4zNTAzQzIxLjYxODMgMTcuOTE3OCAyMi4yMzEyIDE2LjAwOTIgMjIuMjMxMiAxMy45MzMxQzIyLjIzMTIgMTEuODU2OCAyMS42MTgxIDkuOTQ3MDMgMjAuNTM2NiA4LjUxNDc1QzIwLjIzMjggOC4xMTIzOSAyMC4zNDA4IDcuNTU5NDQgMjAuNzc3OCA3LjI3OTY5WlwiIGZpbGw9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdGJveCBhaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjExNi41ODYgMTk2LjI0NiA5NS41ODEgOTkuMTA5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAyMDYuNTg3IDE5Ni4yNDkgQyAxNTYuODgxIDE5Ni4yNDkgMTE2LjU4NyAyMzYuNTQzIDExNi41ODcgMjg2LjI0OSBDIDExNi41ODcgMjg5LjMyNCAxMTYuNzQxIDI5Mi4zNjMgMTE3LjA0MiAyOTUuMzU4IEwgMTc2LjMxMiAyOTUuMzU4IEMgMTczLjIwNCAyODYuNjcgMTcxLjUxMSAyNzcuMzEgMTcxLjUxMSAyNjcuNTU0IEMgMTcxLjUxMSAyMzcuMjU4IDE4Ny44MzUgMjEwLjc3NCAyMTIuMTY4IDE5Ni40MTkgQyAyMTAuMzIyIDE5Ni4zMDYgMjA4LjQ2MSAxOTYuMjQ5IDIwNi41ODcgMTk2LjI0OSBaXCIgc3R5bGU9XCJmaWxsOiByZ2IoNDUsIDEwNCwgMjIwKTsgdHJhbnNmb3JtLW9yaWdpbjogMTY0LjM3N3B4IDI0NS44MDJweDtcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsIDAsIDAsIC0xLCAtMC4wMDAwMDQ2MzE2MDgsIC0wLjAwMDAwNjkyNTkpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2hhdEVsZW1lbnQpO1xuICAgIHNjcm9sbEludG9Ub3AoY2hhdEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hhdENvbnRlbnQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hhdC0ke2NoYXRJbmRleH1gKS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuICAgIGNvbnN0IHRhcmdldENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hhdC0ke2NoYXRJbmRleH0gZGl2LmNvbnRlbnRgKTtcbiAgICB0YXJnZXRDb250ZW50LmlubmVySFRNTCA9IGAke21lc3NhZ2V9YDtcbiAgICBzY3JvbGxJbnRvVG9wKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGF0LSR7Y2hhdEluZGV4LTF9YCkpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVG9wKHRhcmdldEVsZW1lbnQpe1xuICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbn0iLCJsZXQgaWR4ID0gMDtcbmxldCBrZXl3b3JkTGlzdCA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkS2V5d29yZChrZXl3b3JkKXtcbiAgICBrZXl3b3JkTGlzdFtpZHgudG9TdHJpbmcoKV0gPSBrZXl3b3JkO1xuICAgIHJldHVybiBpZHgrKztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUxpc3QoKXtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhrZXl3b3JkTGlzdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVLZXl3b3JkKHJlbW92ZWRJbmRleCl7IC8vaW5wdXQgaW4gc3RyaW5nXG4gICAgaWYodHlwZW9mIHJlbW92ZWRJbmRleCAhPSBcInN0cmluZ1wiKSByZW1vdmVkSW5kZXggPSB0b1N0cmluZyhyZW1vdmVkSW5kZXgpO1xuICAgIGlmKCEocmVtb3ZlZEluZGV4IGluIGtleXdvcmRMaXN0KSkgcmV0dXJuO1xuICAgIGRlbGV0ZSBrZXl3b3JkTGlzdFtyZW1vdmVkSW5kZXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoKXtcbiAgICBpZHggPSAwO1xuICAgIGtleXdvcmRMaXN0ID0ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNpbmdsZUhUTUwoa2V5d29yZCwgY2FuQ2xvc2UgPSBmYWxzZSwgZWxlbWVudElEID0gdW5kZWZpbmVkKXtcbiAgICBjb25zdCBuZXdLZXl3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3S2V5d29yZC5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkJyk7XG4gICAgbmV3S2V5d29yZC5pbm5lckhUTUwgPSBgPHNwYW4+JHtrZXl3b3JkfTwvc3Bhbj5gO1xuICAgIGlmKGNhbkNsb3NlKXtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3S2V5d29yZC5pZCA9IGBrZXl3b3JkLSR7ZWxlbWVudElEfWBcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgna2V5d29yZC1jbG9zZScpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNTEyLjAwMDAwMHB0XCIgaGVpZ2h0PVwiNTEyLjAwMDAwMHB0XCIgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPiA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIGZpbGw9XCIjZmZmZmZmXCIgc3Ryb2tlPVwibm9uZVwiPiA8cGF0aCBkPVwiTTM5MyA1MTA2IGMtOTAgLTIyIC0xNjQgLTY1IC0yMzkgLTE0MCAtMTMzIC0xMzMgLTE4MSAtMjk3IC0xMzkgLTQ3NSAzNSAtMTQ1IDUgLTExMyA5NDkgLTEwNTggbDg3MSAtODczIC04NzEgLTg3MiBjLTk0NCAtOTQ2IC05MTQgLTkxNCAtOTQ5IC0xMDU5IC00MiAtMTc4IDYgLTM0MiAxMzkgLTQ3NSAxMzMgLTEzMyAyOTcgLTE4MSA0NzUgLTEzOSAxNDUgMzUgMTEzIDYgMTA1OSA5NDkgbDg3MiA4NzEgODczIC04NzEgYzk0NSAtOTQzIDkxMyAtOTE0IDEwNTggLTk0OSAxNzggLTQyIDM0MiA2IDQ3NSAxMzkgMTMzIDEzMyAxODEgMjk3IDEzOSA0NzUgLTM1IDE0NSAtNSAxMTMgLTk0OSAxMDU4IGwtODcxIDg3MyA4NzEgODcyIGM5NDMgOTQ2IDkxNCA5MTQgOTQ5IDEwNTkgNDEgMTc0IC01IDMzNSAtMTMyIDQ3MCAtMTU4IDE2NyAtMzk3IDIwNiAtNjA3IDk3IC01MiAtMjcgLTE4OCAtMTU4IC05MzMgLTkwMiBsLTg3MyAtODcxIC04NzIgODcxIGMtODQ0IDg0MyAtODc1IDg3MyAtOTQ4IDkwOCAtMTE1IDU1IC0yMzIgNzAgLTM0NyA0MnpcIi8+IDwvZz4gPC9zdmc+JztcbiAgICAgICAgbmV3S2V5d29yZC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiBuZXdLZXl3b3JkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50TGlzdCgpe1xuICAgIGxldCBlbGVtZW50TGlzdCA9IFtdO1xuICAgIE9iamVjdC52YWx1ZXMoa2V5d29yZExpc3QpLmZvckVhY2goKGtleXdvcmQpID0+IHtcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChnZW5lcmF0ZVNpbmdsZUhUTUwoa2V5d29yZCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn0iLCJjb25zdCBzeW50aCA9IHdpbmRvdy5zcGVlY2hTeW50aGVzaXM7XG5jb25zdCB1dHRlcmFuY2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKCk7XG5sZXQgc2VsZWN0ZWRWb2ljZSA9IHN5bnRoLmdldFZvaWNlcygpLmZpbHRlcigobGlzdCkgPT4gbGlzdC5sYW5nID09IFwiaWRcIilbMF07XG5sZXQgaXNQbGF5aW5nID0gZmFsc2U7XG5sZXQgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xuXG5zeW50aC5hZGRFdmVudExpc3RlbmVyKCd2b2ljZXNjaGFuZ2VkJywgKCkgPT4ge1xuICAgIHNlbGVjdGVkVm9pY2UgPSBzeW50aC5nZXRWb2ljZXMoKS5maWx0ZXIoKGxpc3QpID0+IGxpc3QubGFuZyA9PSBcImlkXCIpWzBdO1xufSlcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRFbGVtZW50KGVsZW1lbnQsIGJ1dHRvbiwgdGV4dCl7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGxheWluZycpKXtcbiAgICAgICAgICAgIHN0b3BTcGVhaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBzdG9wU3BlYWsoKTtcbiAgICAgICAgICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBzdGFydFNwZWFrKHRleHQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbnV0dGVyYW5jZS5hZGRFdmVudExpc3RlbmVyKCdlbmQnLCAoKSA9PiB7XG4gICAgaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlpbmcnKTtcbiAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQgPSB1bmRlZmluZWQ7XG59KTtcblxuXG5mdW5jdGlvbiBzdGFydFNwZWFrKHRleHQpe1xuICAgIHV0dGVyYW5jZS50ZXh0ID0gdGV4dDtcbiAgICB1dHRlcmFuY2Uudm9pY2UgPSBzZWxlY3RlZFZvaWNlO1xuICAgIHV0dGVyYW5jZS5sYW5nID0gXCJpZFwiO1xuICAgIGlzUGxheWluZyA9IHRydWU7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BsYXlpbmcnKTtcbiAgICBzeW50aC5zcGVhayh1dHRlcmFuY2UpO1xufVxuXG5mdW5jdGlvbiBzdG9wU3BlYWsoKXtcbiAgICBpZighaXNQbGF5aW5nKSByZXR1cm47XG4gICAgc3ludGgucmVzdW1lKCk7XG4gICAgc3ludGguY2FuY2VsKCk7XG4gICAgaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXlpbmcnKTtcbiAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQgPSB1bmRlZmluZWQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgcXVlcnkgZnJvbSBcIi4vcXVlcnkuanNcIjtcbmltcG9ydCAqIGFzIGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCAqIGFzIGdwdCBmcm9tICcuL2FpLmpzJztcbmltcG9ydCAqIGFzIHR0cyBmcm9tICcuL3R0cy5qcyc7XG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxubGV0IGNoYXRIaXN0b3J5ID0gW107XG5sZXQgcmVjb21tZW5kYXRpb25MaXN0ID0gdW5kZWZpbmVkO1xubGV0IHNlbGVjdGVkUmVjb21tZW5kYXRpb24gPSB1bmRlZmluZWQ7XG5sZXQgY2hhdEluZGV4ID0gMDtcbmNvbnN0IGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKCk7XG5sZXQgc2lnbmFsID0gY29udHJvbGxlci5zaWduYWw7XG5cbmZ1bmN0aW9uIGFkZFJlY0xpc3RlbmVyKGVsZW1lbnRMaXN0KXtcbiAgICBlbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RlZFJlY29tbWVuZGF0aW9uICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXkudW5zZWxlY3RSZWNvbW1lbmRhdGlvbihzZWxlY3RlZFJlY29tbWVuZGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdGVkUmVjb21tZW5kYXRpb24gPSBwYXJzZUludChlbGVtZW50LmlkLnJlcGxhY2UoJ3JlY29tbWVuZGF0aW9uLScsICcnKSk7XG4gICAgICAgICAgICBkaXNwbGF5LnNlbGVjdFJlY29tbWVuZGF0aW9uKHNlbGVjdGVkUmVjb21tZW5kYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZExpc3RlbmVyKGVsZW1lbnQpe1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC1tb2RlJykpe1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SUQgPSBlLmN1cnJlbnRUYXJnZXQuaWQucmVwbGFjZSgna2V5d29yZC0nLCAnJyk7XG4gICAgICAgICAgICBxdWVyeS5yZW1vdmVLZXl3b3JkKHRhcmdldElEKTtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1tb2RlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LW1vZGUnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGF0U3BlYWsoY2hhdEluZGV4KXtcbiAgICB0dHMuaW5pdEVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NoYXQtJHtjaGF0SW5kZXh9YCksXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NoYXRTcGVhay0ke2NoYXRJbmRleH1gKSxcbiAgICAgICAgICAgICAgICBjaGF0SGlzdG9yeVtjaGF0SW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZCgpe1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0SW5wdXQnKTtcbiAgICBpZih0ZXh0SW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50SUQgPSBxdWVyeS5hZGRLZXl3b3JkKHRleHRJbnB1dC52YWx1ZSk7XG4gICAgbGV0IGtleXdvcmRFbGVtZW50ID0gcXVlcnkuZ2VuZXJhdGVTaW5nbGVIVE1MKHRleHRJbnB1dC52YWx1ZSwgdHJ1ZSwgZWxlbWVudElEKTtcbiAgICBrZXl3b3JkRWxlbWVudCA9IGFkZEtleXdvcmRMaXN0ZW5lcihrZXl3b3JkRWxlbWVudCk7XG4gICAgZGlzcGxheS5hcHBlbmRLZXl3b3JkKGtleXdvcmRFbGVtZW50KTtcbiAgICB0ZXh0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VuZEtleXdvcmQoKXtcbiAgICBhZGRLZXl3b3JkKCk7XG4gICAgaWYocXVlcnkuZ2V0S2V5TGlzdCgpLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgY29uc3QgcXVlcnlFbGVtZW50TGlzdCA9IHF1ZXJ5LmdlbmVyYXRlRWxlbWVudExpc3QoKTtcbiAgICBkaXNwbGF5LnRvZ2dsZU92ZXJsYXkoKTtcbiAgICBkaXNwbGF5LnNob3dQb3BVcFJlY29tbWVuZGF0aW9uKHF1ZXJ5RWxlbWVudExpc3QpO1xuICAgIHRyeXtcbiAgICAgICAgcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCk7XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBvcFVwKCl7XG4gICAgZGlzcGxheS50b2dnbGVPdmVybGF5KCk7XG4gICAgZGlzcGxheS5oaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpe1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IHVuZGVmaW5lZDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCl7XG4gICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHZhbGlkUmVxdWVzdCA9IHRydWU7XG4gICAgZGlzcGxheS5jbGVhclJlY29tbWVuZGF0aW9uKCk7XG4gICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgICB2YWxpZFJlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhYm9ydGluZy4uLlwiKTtcbiAgICB9KTtcbiAgICB0cnl7XG4gICAgICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IGF3YWl0IGdwdC5nZW5lcmF0ZVJlY29tbWVuZGF0aW9uKHF1ZXJ5LmdldEtleUxpc3QoKSk7XG4gICAgICAgIGlmKHZhbGlkUmVxdWVzdCl7XG4gICAgICAgICAgICBsZXQgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGRpc3BsYXkuZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbkVsZW1lbnRzKHJlY29tbWVuZGF0aW9uTGlzdCk7XG4gICAgICAgICAgICByZWNvbW1lbmRhdGlvbkVsZW1lbnRzID0gYWRkUmVjTGlzdGVuZXIocmVjb21tZW5kYXRpb25FbGVtZW50cyk7XG4gICAgICAgICAgICBkaXNwbGF5LmFwcGVuZFJlY29tbWVuZGF0aW9uKHJlY29tbWVuZGF0aW9uRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kUmVjb21tZW5kYXRpb24oW10pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNrUXVlc3Rpb24oKXtcbiAgICBpZihyZWNvbW1lbmRhdGlvbkxpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgIGNsZWFyUG9wVXAoKTtcbiAgICBxdWVyeS5jbGVhcigpO1xuICAgIGRpc3BsYXkuY2xlYXJLZXl3b3JkKCk7XG4gICAgY2hhdEhpc3RvcnkucHVzaChgJHtyZWNvbW1lbmRhdGlvbkxpc3Rbc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbl19YCk7XG4gICAgZGlzcGxheS5hZGRVc2VyQ2hhdChgPHNwYW4+JHtyZWNvbW1lbmRhdGlvbkxpc3Rbc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbl19PC9zcGFuPmAsIGNoYXRJbmRleCk7XG4gICAgYWN0aXZhdGVDaGF0U3BlYWsoY2hhdEluZGV4KyspO1xuICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCBmcmVlemVDaGF0SW5kZXggPSBjaGF0SW5kZXgrKztcbiAgICAgICAgY2hhdEhpc3RvcnkucHVzaCgnbG9hZGluZycpO1xuICAgICAgICBkaXNwbGF5LmFkZEdQVENoYXQoXCI8ZGl2IGNsYXNzPSdkb3QtZmxhc2hpbmcgYmx1ZScgc3R5bGU9J21hcmdpbjogYXV0bzsnPjwvZGl2PlwiLCBmcmVlemVDaGF0SW5kZXgpO1xuICAgICAgICBkaXNwbGF5LmZvY3VzRWxlbWVudCgnI3RleHRJbnB1dCcpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBncHRSZXNwb25zZSA9IGF3YWl0IGdwdC5hc2tRdWVzdGlvbihyZWNvbW1lbmRhdGlvbkxpc3Rbc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbl0pO1xuICAgICAgICAgICAgY29uc3QgZmluYWxSZXNwb25zZSA9IGdwdFJlc3BvbnNlLnNwbGl0KCdcXG4nKVxuICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gKGxpbmUgIT09IFwiXCIpKVxuICAgICAgICAgICAgLm1hcCgobGluZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHdoaXRlc3BhY2VDb3VudCA9IGxpbmUuc2VhcmNoKC9cXFN8JC8pO1xuICAgICAgICAgICAgICAgIHJldHVybiBgPGRpdj4keydcXHUwMGEwJy5yZXBlYXQod2hpdGVzcGFjZUNvdW50KStsaW5lLnNsaWNlKHdoaXRlc3BhY2VDb3VudCl9PC9kaXY+XFxuYDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgICAgICBjaGF0SGlzdG9yeVtmcmVlemVDaGF0SW5kZXhdID0gZ3B0UmVzcG9uc2U7XG4gICAgICAgICAgICBhY3RpdmF0ZUNoYXRTcGVhayhmcmVlemVDaGF0SW5kZXgpO1xuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVDaGF0Q29udGVudChgPHNwYW4+JHtmaW5hbFJlc3BvbnNlfTwvc3Bhbj5gLCBmcmVlemVDaGF0SW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoKGVycm9yKXtcbiAgICAgICAgICAgIGNoYXRIaXN0b3J5W2ZyZWV6ZUNoYXRJbmRleF0gPSBcIkVycm9yLCBzaWxha2FuIGNvYmEgbGFnaVwiO1xuICAgICAgICAgICAgYWN0aXZhdGVDaGF0U3BlYWsoZnJlZXplQ2hhdEluZGV4KTtcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlQ2hhdENvbnRlbnQoXCI8c3Bhbj5FcnJvciA6KCBzaWxha2FuIGNvYmEgbGFnaTwvc3Bhbj5cIiwgZnJlZXplQ2hhdEluZGV4KTtcbiAgICAgICAgfVxuICAgIH0sIDUwMCk7XG59XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbHVzQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRLZXl3b3JkKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlbmRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlbmRLZXl3b3JkKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge2NsZWFyUG9wVXAoKTsgcmVzZXQoKX0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCkpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc2tRdWVzdGlvbik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0SW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRJbnB1dCcpLnZhbHVlID09PSAnJyl7XG4gICAgICAgICAgICBzZW5kS2V5d29yZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBhZGRLZXl3b3JkKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuLy8gZGlzcGxheS5hZGRVc2VyQ2hhdChcIjxzcGFuPkhhbG8gaW5pIHRlc3RpbmcgZG9hbmc8L3NwYW4+XCIsIGNoYXRJbmRleCsrKTtcbi8vIGRpc3BsYXkuYWRkR1BUQ2hhdChcIjxzcGFuPkhhbG8gaW5pIGthbGltYXQgcmFuZG9tIHlhbmcgZGlnZW5lcmF0ZSBvbGVoIG9yYW5nIGdhYnV0IHNlcGVydGkgcmFkaHlhIFxcXG4vLyB5YW5nIGd1bmFueWEgY3VtYSBidWF0IHRlbXBsYXRlIHN1cGF5YSBraXRhIGFkYSBnYW1iYXJhbiBtZW5nZW5haSBhcGEgc2FqYSB5YW5nIGhhcnVzIGRpdGFtcGlsa2FuIFxcXG4vLyBkZW5nYW4gYmFpayBrZXBhZGEgdXNlci4gVGVydXRhbWEgZGFsYW0gYmVudHVrIHRvbWJvbCBzcGVha2VyIHRleHQtdG8tc3BlZWNoXCIsIGNoYXRJbmRleCsrKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=