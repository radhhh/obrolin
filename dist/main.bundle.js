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

div.chatsection.user h3 > button:hover svg,
div.chatsection.user.playing h3 > button svg{
    filter: invert(10%) sepia(5%) saturate(1214%) hue-rotate(211deg) brightness(97%) contrast(89%);
}

div.chatsection.ai h3 > button:hover svg,
div.chatsection.ai.playing h3 > button svg{
    filter: invert(44%) sepia(13%) saturate(5402%) hue-rotate(196deg) brightness(84%) contrast(107%);
}

div.chatsection.user.playing h3{
    font-weight: 900;
    color: #26252A;
}

div.chatsection.ai.playing h3{
    font-weight: 900;
    color: #2D68DC;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: 'Lato';\n    font-weight: 700;\n    font-size: 1em;\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    text-decoration-style: none;\n}\n\n:root{\n    font-size: 16px;\n    scroll-behavior: smooth;\n}\n\nbody, html{\n    min-height: 100%;\n    width: 100%;\n}\n\nbody{\n    padding-top: 5em;\n    padding-bottom: 7em;\n}\n\nheader{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    padding: 1em 2em;\n    box-sizing: border-box;\n    background-color: white;\n}\n\nheader > div.container{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader h1{\n    font-weight: 900;\n    font-size: 2rem;\n    cursor: default;\n}\n\nheader button{\n    top: 0.4em;\n    display: block;\n    box-sizing: border-box;\n    border: none;\n    background-color: white;\n}\n\nbutton svg path#Info-Square-2{\n    fill: black;\n}\n\nbutton:hover svg path#Info-Square-2{\n    fill: #2D68DC;\n}\n\nmain{\n    padding: 0 2em;\n}\n\nstrong{\n    font-weight: 900;\n}\n\ndiv.chatsection{\n    margin-bottom: 1em;\n    display: flex;\n    align-items: center;\n}\n\ndiv.chatsection.user{\n    justify-content: flex-end;\n    padding-left: 1em;\n}\n\ndiv.chatsection.ai{\n    justify-content: flex-start;\n    padding-right: 1em;\n}\ndiv.chatsection h3{\n    color: #8E8D94;\n    font-size: 0.8rem;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.827px; \n    margin-left: 2em;\n    margin-bottom: 0.3em;\n}\n\ndiv.chatsection h3 > button{\n    display: none;\n    top: 0.3em;\n    background-color: inherit;\n    border: none;\n    height: 1.2em;\n}\n\ndiv.chatsection.loaded h3 > button{\n    display: inline;\n}\n\ndiv.chatsection h3 > button > svg{\n    filter: invert(59%) sepia(7%) saturate(230%) hue-rotate(209deg) brightness(93%) contrast(94%);\n    height: 1.4em;\n}\n\ndiv.chatsection.user h3 > button:hover svg,\ndiv.chatsection.user.playing h3 > button svg{\n    filter: invert(10%) sepia(5%) saturate(1214%) hue-rotate(211deg) brightness(97%) contrast(89%);\n}\n\ndiv.chatsection.ai h3 > button:hover svg,\ndiv.chatsection.ai.playing h3 > button svg{\n    filter: invert(44%) sepia(13%) saturate(5402%) hue-rotate(196deg) brightness(84%) contrast(107%);\n}\n\ndiv.chatsection.user.playing h3{\n    font-weight: 900;\n    color: #26252A;\n}\n\ndiv.chatsection.ai.playing h3{\n    font-weight: 900;\n    color: #2D68DC;\n}\n\n\ndiv.chatbox{\n    color: white;\n    font-size: 1rem;\n    display: flex;\n    width: fit-content;\n    max-width: 75ch;\n}\n\ndiv.chatbox > div.content{\n    padding: 1em 0 1em;\n    min-width: 15ch;\n    line-height: 1.5;\n    flex: 1;\n}\n\ndiv.chatbox > div.content *:not(:first-child){\n    margin-top: 0.5em;\n}\n\ndiv.chatbox > div.content ol, \ndiv.chatbox > div.content ul{\n    margin-left: 1em;\n}\n\ndiv.chatbox > div.left-box{\n    display: flex;\n    flex-direction: column;\n    width: 1.5em;\n    align-items: flex-end;\n}\n\ndiv.chatbox > div.right-box{\n    display: flex;\n    flex-direction: column;\n    width: 1.5em;\n    align-items: flex-start;\n}\n\ndiv.middle-left, div.middle-right{\n    width: 1em;\n    flex: 1;\n}\n\ndiv.upper-left, \ndiv.lower-left, \ndiv.upper-right, \ndiv.lower-right{\n    height: 1em;\n    width: 1em;\n}\n\ndiv.upper-left{\n    border-radius: 1em 0px 0px 0px; \n}\ndiv.upper-right{\n    border-radius: 0px 1em 0px 0px;\n}\ndiv.lower-right{\n    border-radius: 0px 0em 1em 0px;\n}\ndiv.lower-left{\n    border-radius: 0px 0em 0px 1em;\n}\n\ndiv.chatbox.user > div.left-box > div,\ndiv.chatbox.user > div.right-box > div, \ndiv.chatbox.user > div.content\n{\n    background-color: #26252A;\n}\n\ndiv.chatbox.ai > div.left-box > div,\ndiv.chatbox.ai > div.right-box > div,\ndiv.chatbox.ai > div.content\n{\n    background-color: #2D68DC;\n}\n\ndiv.content div{\n    width: 100%;\n}\n\ndiv.chatbox svg{\n    position: absolute;\n    bottom: 1px;\n    width: 1.5em;\n}\n\ndiv.chatbox.ai svg{\n    left: -1px;\n}\n\ndiv.chatbox.user svg{\n    right: -1px;\n}\n\n\n/* Input Section */\n\nsection#inputContainer{\n    display: flex;\n    position: fixed;\n    align-items: flex-end;\n    gap: 0.6em;\n    bottom: 0;\n    width: 100%;\n    box-sizing: border-box;\n    background-color: white;\n    padding: 1.2em 1.5em 1.2em;\n}\n\nsection#inputContainer button:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\nbutton#voiceInputButton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 5em;\n    height: 5em;\n    flex-shrink: 0;\n    border-radius: 10px 48.5px 10px 10px;\n    border: 1px solid #2D68DC;\n    background-color: #2D68DC;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\nbutton#voiceInputButton > svg{\n    display: block;\n    position: relative;\n    top: 0.1em;\n    right: 0.1em;\n    width: 2.2em;\n    height: auto;\n    padding: 5.417px 10.833px;\n}\n\ndiv#middleInputContainer{\n    flex: 1;\n}\n\ndiv#middleInputContainer > textarea{\n    letter-spacing: 0.5px;\n    color: white;\n    height: 2.5em;\n    font-size: 1rem;\n    padding: 0.6em 0.5em 0.4em;\n    width: 100%;\n    border-radius: 10px;\n    border: 1px solid #2D68DC;\n    background: #2D68DC;\n    box-sizing: border-box;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    resize: none;\n}\n\ndiv#middleInputContainer textarea:hover{\n    background-color: hsl(220, 71%, 48%);\n}\n\ndiv#middleInputContainer textarea:focus{\n    outline: none;\n    background: #2D68DC;\n}\n\ndiv#middleInputContainer > div#keywordContainer{\n    width: 100%;\n    margin-bottom: 0.3em;\n}\n\n.keyword{\n    color: white;\n    font-size: 0.9rem;\n    display: inline-block;\n    padding: 0.3em 0.8em;\n    width: max(5ch, fit-content);\n    margin: 0 0.3em 0.15em 0;\n    background: #2D68DC;\n    border-radius: 0.7em;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    border: none;\n}\n\ndiv#keywordContainer .keyword{\n    cursor: pointer;\n}\n\ndiv#keywordContainer .keyword:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv#keywordContainer .keyword .keyword-close{\n    display: none;\n}\n\ndiv#keywordContainer .keyword.select-mode{\n    background-color: hsl(220, 71%, 30%);\n    color: hsl(220, 71%, 48%);\n}\n\ndiv#keywordContainer .keyword.select-mode:hover{\n    background-color: hsl(220, 71%, 20%);\n}\n\ndiv#keywordContainer .keyword.select-mode .keyword-close{\n    text-align: center;\n    color: white;\n    font-weight: 900;\n    opacity: 1;\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\ndiv#keywordContainer .keyword .keyword-close svg{\n    top: 0.1em;\n    height: 1em;\n    width: 1em;\n}\n\ndiv#rightButtonContainer{\n    display: flex;\n    width: 5.4em;\n    gap: 0.4em;\n}\n\ndiv#rightButtonContainer > button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    border: none;\n    height: 2.5em;\n    width: 2.5em;\n    background-color: #2D68DC;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\ndiv#rightButtonContainer svg {\n    width: 1.2em;\n}\n\n/* Pop Up Section */\n\n.hidden{\n    transform: translate(-50%, -50%) scale(0) !important;\n}\n\ndiv#darkOverlay{\n    z-index: 200;\n    width: 100%;\n    height: 100%;\n    background-color: hsla(220, 69%, 5%, 0.5);\n}\n\n.center-popup{\n    position: fixed;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n}\n\ndiv#recommendationPopUp{\n    font-size: 1.2rem;\n    width: min(80vw, 60ch);\n    border-radius: 0.5em;\n    z-index: 300;\n    padding: 1.2em 1em 1em;\n    background-color: white;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.149) inset;\n}\n\ndiv#recommendationPopUp > h3{\n    margin-bottom: 0.2em;\n}\n\ndiv#recommendationPopUp > div{\n    margin-bottom: 0.5em;\n}\n\ndiv.recommendation{\n    cursor: pointer;\n    font-size: 1rem;\n    color: white;\n    background-color: #2D68DC;\n    padding: 0.5em 0.7em;\n    border-radius: 0.5em;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\ndiv.recommendation:not(:last-child){\n    margin-bottom: 0.5em;\n}\n\ndiv.recommendation:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv.recommendation.selected{\n    background-color: hsl(220, 71%, 30%);\n    outline: hsl(220, 71%, 20%) 2px solid;\n}\n\ndiv#actionButtons{\n    margin-top: 0.8em;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    align-items: center;\n}\n\nbutton#refreshButton{\n    display: none;\n    font-size: 1rem;\n    background-color: white;\n    box-shadow: none;\n    border: none;\n    text-decoration: underline;\n}\n\nbutton#refreshButton:hover{\n    color: hsl(220, 71%, 40%);\n}\n\n.loaded button#refreshButton{\n    display: block;\n}\n\ndiv#centerButtons button:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv#centerButtons{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n\ndiv#centerButtons > button{\n    font-size: 1rem;\n    color: white;\n    width: 12ch;\n    height: 1.8em;\n    background-color: #2D68DC;\n    border-radius: 0.2em;\n    border: none;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n\n/* Animation Part */\n\n#recommendationPopUp .dot-flashing{\n    margin: auto;\n}\n\n.dot-flashing {\n    position: relative;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite linear alternate;\n    animation-delay: 0.3s;\n}\n\n.loaded .dot-flashing{\n    display: none;\n}\n\n.dot-flashing::before, .dot-flashing::after {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: 0;\n}\n\n.dot-flashing::before {\n    left: -15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite alternate;\n    animation-delay: 0s;\n}\n\n.dot-flashing::after {\n    left: 15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite alternate;\n    animation-delay: 0.6s;\n}\n  \n@keyframes dot-flashing {\n    0% {\n      background-color: #2D68DC;\n    }\n    50%, 100% {\n      background-color: rgba(152, 128, 255, 0.2);\n    }\n}\n\ndiv.content > div.dot-flashing.blue{\n    margin: auto;\n    width: 10px;\n}\n\n.dot-flashing.blue, .dot-flashing.blue::before, .dot-flashing.blue::after{\n    background-color: white;\n    animation-name: dot-flashing-blue;\n}\n\n@keyframes dot-flashing-blue {\n    0% {\n        background-color: white;\n    }\n    50%, 100% {\n        background-color: hsl(220, 71%, 80%);\n    }\n}"],"sourceRoot":""}]);
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
/* harmony export */   state: () => (/* binding */ state),
/* harmony export */   toggleOverlay: () => (/* binding */ toggleOverlay),
/* harmony export */   unselectRecommendation: () => (/* binding */ unselectRecommendation),
/* harmony export */   updateChatContent: () => (/* binding */ updateChatContent)
/* harmony export */ });
let state = {
    popUp: false,
}

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
    state.popUp = true;
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
    state.popUp = false;
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

function activateChatSpeak(chatIndex){
    _tts_js__WEBPACK_IMPORTED_MODULE_3__.initElement(document.querySelector(`#chat-${chatIndex}`),
                document.querySelector(`#chatSpeak-${chatIndex}`),
                chatHistory[chatIndex]);
}

function askQuestion(){
    _display_js__WEBPACK_IMPORTED_MODULE_1__.focusElement('main');
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

document.getElementById('submitButton').addEventListener('click', () => {
    if(recommendationList === undefined || !_display_js__WEBPACK_IMPORTED_MODULE_1__.state.popUp) return;
    askQuestion();
});

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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlB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QUFxRCxVQUFVO0FBQy9EO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLHFEQUFvQjtBQUN4QjtBQUNBLElBQUksNENBQVc7QUFDZixJQUFJLHFEQUFvQjtBQUN4Qix3QkFBd0IsMkNBQTJDO0FBQ25FLElBQUksb0RBQW1CLFVBQVUsMkNBQTJDO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxtREFBa0IscURBQXFEO0FBQy9FO0FBQ0Esc0NBQXNDLCtDQUFlO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZEQUE2RDtBQUM1RixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBeUIsVUFBVSxjQUFjO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBeUI7QUFDckM7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7O0FBRUEseUVBQXlFLGNBQWMsUUFBUTs7QUFFL0Y7O0FBRUE7QUFDQSw0Q0FBNEMsOENBQWE7QUFDekQ7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvYWkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL3F1ZXJ5LmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy90dHMuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogbm9uZTtcbn1cblxuOnJvb3R7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5LCBodG1se1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogN2VtO1xufVxuXG5oZWFkZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG5oZWFkZXIgPiBkaXYuY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciBoMXtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmhlYWRlciBidXR0b257XG4gICAgdG9wOiAwLjRlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuYnV0dG9uIHN2ZyBwYXRoI0luZm8tU3F1YXJlLTJ7XG4gICAgZmlsbDogYmxhY2s7XG59XG5cbmJ1dHRvbjpob3ZlciBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xuICAgIGZpbGw6ICMyRDY4REM7XG59XG5cbm1haW57XG4gICAgcGFkZGluZzogMCAyZW07XG59XG5cbnN0cm9uZ3tcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG5kaXYuY2hhdHNlY3Rpb257XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLnVzZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLmFpe1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG5kaXYuY2hhdHNlY3Rpb24gaDN7XG4gICAgY29sb3I6ICM4RThEOTQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC44MjdweDsgXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uIGgzID4gYnV0dG9ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdG9wOiAwLjNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDEuMmVtO1xufVxuXG5kaXYuY2hhdHNlY3Rpb24ubG9hZGVkIGgzID4gYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uIGgzID4gYnV0dG9uID4gc3Zne1xuICAgIGZpbHRlcjogaW52ZXJ0KDU5JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDIzMCUpIGh1ZS1yb3RhdGUoMjA5ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTQlKTtcbiAgICBoZWlnaHQ6IDEuNGVtO1xufVxuXG5kaXYuY2hhdHNlY3Rpb24udXNlciBoMyA+IGJ1dHRvbjpob3ZlciBzdmcsXG5kaXYuY2hhdHNlY3Rpb24udXNlci5wbGF5aW5nIGgzID4gYnV0dG9uIHN2Z3tcbiAgICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDUlKSBzYXR1cmF0ZSgxMjE0JSkgaHVlLXJvdGF0ZSgyMTFkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4OSUpO1xufVxuXG5kaXYuY2hhdHNlY3Rpb24uYWkgaDMgPiBidXR0b246aG92ZXIgc3ZnLFxuZGl2LmNoYXRzZWN0aW9uLmFpLnBsYXlpbmcgaDMgPiBidXR0b24gc3Zne1xuICAgIGZpbHRlcjogaW52ZXJ0KDQ0JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSg1NDAyJSkgaHVlLXJvdGF0ZSgxOTZkZWcpIGJyaWdodG5lc3MoODQlKSBjb250cmFzdCgxMDclKTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLnVzZXIucGxheWluZyBoM3tcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjMjYyNTJBO1xufVxuXG5kaXYuY2hhdHNlY3Rpb24uYWkucGxheWluZyBoM3tcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjMkQ2OERDO1xufVxuXG5cbmRpdi5jaGF0Ym94e1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA3NWNoO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDFlbSAwIDFlbTtcbiAgICBtaW4td2lkdGg6IDE1Y2g7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmbGV4OiAxO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50ICo6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgb2wsIFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCB1bHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5sZWZ0LWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuZGl2LmNoYXRib3ggPiBkaXYucmlnaHQtYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmRpdi5taWRkbGUtbGVmdCwgZGl2Lm1pZGRsZS1yaWdodHtcbiAgICB3aWR0aDogMWVtO1xuICAgIGZsZXg6IDE7XG59XG5cbmRpdi51cHBlci1sZWZ0LCBcbmRpdi5sb3dlci1sZWZ0LCBcbmRpdi51cHBlci1yaWdodCwgXG5kaXYubG93ZXItcmlnaHR7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbn1cblxuZGl2LnVwcGVyLWxlZnR7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDBweCAwcHggMHB4OyBcbn1cbmRpdi51cHBlci1yaWdodHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMWVtIDBweCAwcHg7XG59XG5kaXYubG93ZXItcmlnaHR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBlbSAxZW0gMHB4O1xufVxuZGl2Lmxvd2VyLWxlZnR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBlbSAwcHggMWVtO1xufVxuXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LmxlZnQtYm94ID4gZGl2LFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5yaWdodC1ib3ggPiBkaXYsIFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5jb250ZW50XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcbn1cblxuZGl2LmNoYXRib3guYWkgPiBkaXYubGVmdC1ib3ggPiBkaXYsXG5kaXYuY2hhdGJveC5haSA+IGRpdi5yaWdodC1ib3ggPiBkaXYsXG5kaXYuY2hhdGJveC5haSA+IGRpdi5jb250ZW50XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbn1cblxuZGl2LmNvbnRlbnQgZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYuY2hhdGJveCBzdmd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMXB4O1xuICAgIHdpZHRoOiAxLjVlbTtcbn1cblxuZGl2LmNoYXRib3guYWkgc3Zne1xuICAgIGxlZnQ6IC0xcHg7XG59XG5cbmRpdi5jaGF0Ym94LnVzZXIgc3Zne1xuICAgIHJpZ2h0OiAtMXB4O1xufVxuXG5cbi8qIElucHV0IFNlY3Rpb24gKi9cblxuc2VjdGlvbiNpbnB1dENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZ2FwOiAwLjZlbTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjVlbSAxLjJlbTtcbn1cblxuc2VjdGlvbiNpbnB1dENvbnRhaW5lciBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xufVxuXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDVlbTtcbiAgICBoZWlnaHQ6IDVlbTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDQ4LjVweCAxMHB4IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJENjhEQztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xufVxuXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbiA+IHN2Z3tcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwLjFlbTtcbiAgICByaWdodDogMC4xZW07XG4gICAgd2lkdGg6IDIuMmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA1LjQxN3B4IDEwLjgzM3B4O1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXJ7XG4gICAgZmxleDogMTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gdGV4dGFyZWF7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjZlbSAwLjVlbSAwLjRlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gZGl2I2tleXdvcmRDb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59XG5cbi5rZXl3b3Jke1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZzogMC4zZW0gMC44ZW07XG4gICAgd2lkdGg6IG1heCg1Y2gsIGZpdC1jb250ZW50KTtcbiAgICBtYXJnaW46IDAgMC4zZW0gMC4xNWVtIDA7XG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcbiAgICBib3JkZXItcmFkaXVzOiAwLjdlbTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3Jke1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDMwJSk7XG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAyMCUpO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZSAua2V5d29yZC1jbG9zZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3NlIHN2Z3tcbiAgICB0b3A6IDAuMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG59XG5cbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1LjRlbTtcbiAgICBnYXA6IDAuNGVtO1xufVxuXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXIgPiBidXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICB3aWR0aDogMi41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbn1cblxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyIHN2ZyB7XG4gICAgd2lkdGg6IDEuMmVtO1xufVxuXG4vKiBQb3AgVXAgU2VjdGlvbiAqL1xuXG4uaGlkZGVue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNkYXJrT3ZlcmxheXtcbiAgICB6LWluZGV4OiAyMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjIwLCA2OSUsIDUlLCAwLjUpO1xufVxuXG4uY2VudGVyLXBvcHVwe1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwe1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiBtaW4oODB2dywgNjBjaCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgei1pbmRleDogMzAwO1xuICAgIHBhZGRpbmc6IDEuMmVtIDFlbSAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNDkpIGluc2V0O1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGgze1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGRpdntcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgcGFkZGluZzogMC41ZW0gMC43ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG59XG5cbmRpdi5yZWNvbW1lbmRhdGlvbjpub3QoOmxhc3QtY2hpbGQpe1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5kaXYucmVjb21tZW5kYXRpb246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xufVxuXG5kaXYucmVjb21tZW5kYXRpb24uc2VsZWN0ZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xuICAgIG91dGxpbmU6IGhzbCgyMjAsIDcxJSwgMjAlKSAycHggc29saWQ7XG59XG5cbmRpdiNhY3Rpb25CdXR0b25ze1xuICAgIG1hcmdpbi10b3A6IDAuOGVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDFlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5idXR0b24jcmVmcmVzaEJ1dHRvbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYnV0dG9uI3JlZnJlc2hCdXR0b246aG92ZXJ7XG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuLmxvYWRlZCBidXR0b24jcmVmcmVzaEJ1dHRvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnMgPiBidXR0b257XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTJjaDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG59XG5cblxuLyogQW5pbWF0aW9uIFBhcnQgKi9cblxuI3JlY29tbWVuZGF0aW9uUG9wVXAgLmRvdC1mbGFzaGluZ3tcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5kb3QtZmxhc2hpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgY29sb3I6ICMyRDY4REM7XG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuLmxvYWRlZCAuZG90LWZsYXNoaW5ne1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSwgLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSB7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGNvbG9yOiAjMkQ2OERDO1xuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBjb2xvcjogIzJENjhEQztcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG4gIFxuQGtleWZyYW1lcyBkb3QtZmxhc2hpbmcge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgfVxuICAgIDUwJSwgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTI4LCAyNTUsIDAuMik7XG4gICAgfVxufVxuXG5kaXYuY29udGVudCA+IGRpdi5kb3QtZmxhc2hpbmcuYmx1ZXtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwcHg7XG59XG5cbi5kb3QtZmxhc2hpbmcuYmx1ZSwgLmRvdC1mbGFzaGluZy5ibHVlOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGRvdC1mbGFzaGluZy1ibHVlO1xufVxuXG5Aa2V5ZnJhbWVzIGRvdC1mbGFzaGluZy1ibHVlIHtcbiAgICAwJSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICA1MCUsIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDgwJSk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RC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QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixNQUFNO0FBQ1Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCwrQ0FBK0M7SUFDL0MsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO01BQ0UseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSwwQ0FBMEM7SUFDNUM7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLG9DQUFvQztJQUN4QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IG5vbmU7XFxufVxcblxcbjpyb290e1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZy10b3A6IDVlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdlbTtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmhlYWRlciA+IGRpdi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbntcXG4gICAgdG9wOiAwLjRlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbmJ1dHRvbiBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xcbiAgICBmaWxsOiBibGFjaztcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHN2ZyBwYXRoI0luZm8tU3F1YXJlLTJ7XFxuICAgIGZpbGw6ICMyRDY4REM7XFxufVxcblxcbm1haW57XFxuICAgIHBhZGRpbmc6IDAgMmVtO1xcbn1cXG5cXG5zdHJvbmd7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbntcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24udXNlcntcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi5haXtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxufVxcbmRpdi5jaGF0c2VjdGlvbiBoM3tcXG4gICAgY29sb3I6ICM4RThEOTQ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjgyN3B4OyBcXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbiBoMyA+IGJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgdG9wOiAwLjNlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDEuMmVtO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24ubG9hZGVkIGgzID4gYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbiBoMyA+IGJ1dHRvbiA+IHN2Z3tcXG4gICAgZmlsdGVyOiBpbnZlcnQoNTklKSBzZXBpYSg3JSkgc2F0dXJhdGUoMjMwJSkgaHVlLXJvdGF0ZSgyMDlkZWcpIGJyaWdodG5lc3MoOTMlKSBjb250cmFzdCg5NCUpO1xcbiAgICBoZWlnaHQ6IDEuNGVtO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24udXNlciBoMyA+IGJ1dHRvbjpob3ZlciBzdmcsXFxuZGl2LmNoYXRzZWN0aW9uLnVzZXIucGxheWluZyBoMyA+IGJ1dHRvbiBzdmd7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEwJSkgc2VwaWEoNSUpIHNhdHVyYXRlKDEyMTQlKSBodWUtcm90YXRlKDIxMWRlZykgYnJpZ2h0bmVzcyg5NyUpIGNvbnRyYXN0KDg5JSk7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi5haSBoMyA+IGJ1dHRvbjpob3ZlciBzdmcsXFxuZGl2LmNoYXRzZWN0aW9uLmFpLnBsYXlpbmcgaDMgPiBidXR0b24gc3Zne1xcbiAgICBmaWx0ZXI6IGludmVydCg0NCUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoNTQwMiUpIGh1ZS1yb3RhdGUoMTk2ZGVnKSBicmlnaHRuZXNzKDg0JSkgY29udHJhc3QoMTA3JSk7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi51c2VyLnBsYXlpbmcgaDN7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjMjYyNTJBO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24uYWkucGxheWluZyBoM3tcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6ICMyRDY4REM7XFxufVxcblxcblxcbmRpdi5jaGF0Ym94e1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDc1Y2g7XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDFlbSAwIDFlbTtcXG4gICAgbWluLXdpZHRoOiAxNWNoO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50ICo6bm90KDpmaXJzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IG9sLCBcXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IHVse1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5sZWZ0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LnJpZ2h0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuZGl2Lm1pZGRsZS1sZWZ0LCBkaXYubWlkZGxlLXJpZ2h0e1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaXYudXBwZXItbGVmdCwgXFxuZGl2Lmxvd2VyLWxlZnQsIFxcbmRpdi51cHBlci1yaWdodCwgXFxuZGl2Lmxvd2VyLXJpZ2h0e1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG59XFxuXFxuZGl2LnVwcGVyLWxlZnR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbSAwcHggMHB4IDBweDsgXFxufVxcbmRpdi51cHBlci1yaWdodHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDFlbSAwcHggMHB4O1xcbn1cXG5kaXYubG93ZXItcmlnaHR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwZW0gMWVtIDBweDtcXG59XFxuZGl2Lmxvd2VyLWxlZnR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwZW0gMHB4IDFlbTtcXG59XFxuXFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5sZWZ0LWJveCA+IGRpdixcXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LnJpZ2h0LWJveCA+IGRpdiwgXFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5jb250ZW50XFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNTJBO1xcbn1cXG5cXG5kaXYuY2hhdGJveC5haSA+IGRpdi5sZWZ0LWJveCA+IGRpdixcXG5kaXYuY2hhdGJveC5haSA+IGRpdi5yaWdodC1ib3ggPiBkaXYsXFxuZGl2LmNoYXRib3guYWkgPiBkaXYuY29udGVudFxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG59XFxuXFxuZGl2LmNvbnRlbnQgZGl2e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNoYXRib3ggc3Zne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMXB4O1xcbiAgICB3aWR0aDogMS41ZW07XFxufVxcblxcbmRpdi5jaGF0Ym94LmFpIHN2Z3tcXG4gICAgbGVmdDogLTFweDtcXG59XFxuXFxuZGl2LmNoYXRib3gudXNlciBzdmd7XFxuICAgIHJpZ2h0OiAtMXB4O1xcbn1cXG5cXG5cXG4vKiBJbnB1dCBTZWN0aW9uICovXFxuXFxuc2VjdGlvbiNpbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGdhcDogMC42ZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjVlbSAxLjJlbTtcXG59XFxuXFxuc2VjdGlvbiNpbnB1dENvbnRhaW5lciBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggNDguNXB4IDEwcHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJENjhEQztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxufVxcblxcbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9uID4gc3Zne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDAuMWVtO1xcbiAgICByaWdodDogMC4xZW07XFxuICAgIHdpZHRoOiAyLjJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1LjQxN3B4IDEwLjgzM3B4O1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXJ7XFxuICAgIGZsZXg6IDE7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciA+IHRleHRhcmVhe1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjZlbSAwLjVlbSAwLjRlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciB0ZXh0YXJlYTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciA+IGRpdiNrZXl3b3JkQ29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcblxcbi5rZXl3b3Jke1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuM2VtIDAuOGVtO1xcbiAgICB3aWR0aDogbWF4KDVjaCwgZml0LWNvbnRlbnQpO1xcbiAgICBtYXJnaW46IDAgMC4zZW0gMC4xNWVtIDA7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMzAlKTtcXG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMjAlKTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGUgLmtleXdvcmQtY2xvc2V7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQgLmtleXdvcmQtY2xvc2Ugc3Zne1xcbiAgICB0b3A6IDAuMWVtO1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG59XFxuXFxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogNS40ZW07XFxuICAgIGdhcDogMC40ZW07XFxufVxcblxcbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lciA+IGJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDIuNWVtO1xcbiAgICB3aWR0aDogMi41ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbn1cXG5cXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXIgc3ZnIHtcXG4gICAgd2lkdGg6IDEuMmVtO1xcbn1cXG5cXG4vKiBQb3AgVXAgU2VjdGlvbiAqL1xcblxcbi5oaWRkZW57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApICFpbXBvcnRhbnQ7XFxufVxcblxcbmRpdiNkYXJrT3ZlcmxheXtcXG4gICAgei1pbmRleDogMjAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyMCwgNjklLCA1JSwgMC41KTtcXG59XFxuXFxuLmNlbnRlci1wb3B1cHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB3aWR0aDogbWluKDgwdncsIDYwY2gpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgei1pbmRleDogMzAwO1xcbiAgICBwYWRkaW5nOiAxLjJlbSAxZW0gMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNDkpIGluc2V0O1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGgze1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBkaXZ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5kaXYucmVjb21tZW5kYXRpb257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuN2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxufVxcblxcbmRpdi5yZWNvbW1lbmRhdGlvbjpub3QoOmxhc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbmRpdi5yZWNvbW1lbmRhdGlvbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xcbiAgICBvdXRsaW5lOiBoc2woMjIwLCA3MSUsIDIwJSkgMnB4IHNvbGlkO1xcbn1cXG5cXG5kaXYjYWN0aW9uQnV0dG9uc3tcXG4gICAgbWFyZ2luLXRvcDogMC44ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24jcmVmcmVzaEJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuYnV0dG9uI3JlZnJlc2hCdXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbi5sb2FkZWQgYnV0dG9uI3JlZnJlc2hCdXR0b257XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5kaXYjY2VudGVyQnV0dG9ucyBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuZGl2I2NlbnRlckJ1dHRvbnN7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuZGl2I2NlbnRlckJ1dHRvbnMgPiBidXR0b257XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMTJjaDtcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XFxufVxcblxcblxcbi8qIEFuaW1hdGlvbiBQYXJ0ICovXFxuXFxuI3JlY29tbWVuZGF0aW9uUG9wVXAgLmRvdC1mbGFzaGluZ3tcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG59XFxuXFxuLmxvYWRlZCAuZG90LWZsYXNoaW5ne1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSB7XFxuICAgIGxlZnQ6IC0xNXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG59XFxuXFxuLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcbn1cXG4gIFxcbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nIHtcXG4gICAgMCUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIH1cXG4gICAgNTAlLCAxMDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTI4LCAyNTUsIDAuMik7XFxuICAgIH1cXG59XFxuXFxuZGl2LmNvbnRlbnQgPiBkaXYuZG90LWZsYXNoaW5nLmJsdWV7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5kb3QtZmxhc2hpbmcuYmx1ZSwgLmRvdC1mbGFzaGluZy5ibHVlOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YWZ0ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBhbmltYXRpb24tbmFtZTogZG90LWZsYXNoaW5nLWJsdWU7XFxufVxcblxcbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nLWJsdWUge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgfVxcbiAgICA1MCUsIDEwMCUge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA4MCUpO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBhd2lvYXdrb2Fha3dvYSA9IFwiU3BMaVQ2NjNOU1BUQzVxeHA1NWVTbG80cFQzQmxia0ZKV0I4UEhXcTF2c1J2U2pWQVMwRmlcIjtcblxuY29uc3QgcmVzcG9uc2UxID0gW1xuICAgIFwiSW5pIHBlcnRhbnlhYW4gMVwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gMlwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gM1wiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gNFwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gNVwiLFxuXTtcblxuY29uc3QgcmVzcG9uc2UyID0gW1xuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDFcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAyXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgM1wiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDRcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCA1XCIsXG5dXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZW1vKCl7XG4gICAgbGV0IHJlc3VsdCA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAge3JvbGU6IFwidXNlclwiLCBjb250ZW50OiBcIkhhaSBHUFQhXCJ9XG4gICAgXSk7XG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGVsYXkodGltZSl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFJlcGx5KG1lc3NhZ2Upe1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgc2stJHthd2lvYXdrb2Fha3dvYS5zbGljZSg1KX1gLFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2UsXG4gICAgICAgIH0pLFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zJywgb3B0aW9ucyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICByZXR1cm4gZGF0YVtcImNob2ljZXNcIl1bMF1bXCJtZXNzYWdlXCJdW1wiY29udGVudFwiXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlUmVjb21tZW5kYXRpb24oa2V5d29yZExpc3Qpe1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAzOyBpKyspe1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAgICAgICAgICB7cm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJVc2VyIGFrYW4gbWVtYmVyaWthbiBrYXRhIGt1bmNpIHlhbmcgZGlwaXNhaGthbiBvbGVoIGtvbWEsXFxcbiAgICAgICAgICAgICAgICBrYW11IGhhcnVzIG1lbWJlcmlrYW4gbGlzdCA1IHBlcnRhbnlhYW4gc2VkZXJoYW5hIHlhbmcgcmVsZXZhbiBkZW5nYW4ga2F0YSBrdW5jaSB0ZXJzZWJ1dCB0YW5wYSBrYXRhIHBlbmdhbnRhci5cXFxuICAgICAgICAgICAgICAgIEthdGEga3VuY2kgYmlzYSBtZW1pbGlraSBrZXNhbGFoYW4gcGVudWxpc2FuIGRhbiBrYW11IGhhcnVzIG1lbmdhbnRpc2lwYXNpbnlhIVwifSxcbiAgICAgICAgICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGtleXdvcmRMaXN0LmpvaW4oJywgJyl9LFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFJlc3BvbnNlID0gcmVzcG9uc2Uuc3BsaXQoL1xcbi8pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigobGluZSkgPT4gL15cXGQkLy50ZXN0KGxpbmVbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKGxpbmUpID0+IGxpbmUuc2xpY2UoMykpO1xuICAgICAgICAgICAgaWYoZmluYWxSZXNwb25zZS5sZW5ndGggIT0gNSkgdGhyb3cgbmV3IEVycm9yKFwiUGFyc2luZyBQcm9ibGVtXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGZpbmFsUmVzcG9uc2U7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2h7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCwgdHJ5aW5nLi4uXCIpO1xuICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCBSZXF1ZXN0Jylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hSZWNvbW1lbmRhdGlvbigpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZTIpO1xuICAgICAgICB9LCAxMDAwKVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXNrUXVlc3Rpb24ocXVlc3Rpb24pe1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXBseShbXG4gICAgICAgICAgICB7cm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJVc2VyIGFrYW4gbWVtYmVyaWthbiBwZXJ0YW55YWFuLiBLYW11IGhhcnVzIG1lbWJlcmlrYW4gamF3YWJhbiBkZW5nYW4ga2F0YS1rYXRhIGRhbiBwZW5qZWxhc2FuIHlhbmcgbXVkYWggZGlwYWhhbWlcIn0sXG4gICAgICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IGAke3F1ZXN0aW9ufWB9XG4gICAgICAgIF0pO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHJlc3BvbmRcIilcbiAgICB9XG59IiwiZXhwb3J0IGxldCBzdGF0ZSA9IHtcbiAgICBwb3BVcDogZmFsc2UsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb2N1c0VsZW1lbnQoc2VsZWN0b3Ipe1xuICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgc2VsZWN0ZWQuZm9jdXMoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kS2V5d29yZChuZXdLZXl3b3JkKXtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleXdvcmRDb250YWluZXInKTtcbiAgICBrZXl3b3JkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0tleXdvcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJLZXl3b3JkKCl7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXl3b3JkQ29udGFpbmVyJyk7XG4gICAgd2hpbGUoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKSBrZXl3b3JkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uS2V5d29yZCgpe1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVyJyk7XG4gICAgd2hpbGUoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKSBrZXl3b3JkQ29udGFpbmVyLnJlbW92ZUNoaWxkKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVPdmVybGF5KCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhcmtPdmVybGF5JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UG9wVXBSZWNvbW1lbmRhdGlvbihrZXl3b3JkRWxlbWVudExpc3Qpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgc3RhdGUucG9wVXAgPSB0cnVlO1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVyJyk7XG4gICAga2V5d29yZEVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQocGFyYW0pe1xuICAgIGNvbnN0IHJlY29tbWVuZGF0aW9uUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpO1xuICAgIGlmKHBhcmFtID09IFwiYWRkXCIpIHJlY29tbWVuZGF0aW9uUG9wVXAuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgZWxzZSBpZihwYXJhbSA9PSBcInJlbW92ZVwiKSByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRlZCcpO1xuICAgIGVsc2UgcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QudG9nZ2xlKCdsb2FkZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFJlY29tbWVuZGF0aW9uKGVsZW1lbnRMaXN0KXtcbiAgICB0b2dnbGVSZWNvbW1lbmRhdGlvbkxvYWRlZCgnYWRkJyk7XG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lcicpO1xuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uKCl7XG4gICAgdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQoJ3JlbW92ZScpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbiAgICB3aGlsZShxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKSBxdWVzdGlvbkNvbnRhaW5lci5yZW1vdmVDaGlsZChxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmVjb21tZW5kYXRpb25FbGVtZW50cyhyZWNvbW1lbmRhdGlvbkxpc3Qpe1xuICAgIGxldCBlbGVtZW50TGlzdCA9IFtdO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdC5mb3JFYWNoKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgncmVjb21tZW5kYXRpb24nKTtcbiAgICAgICAgbmV3UXVlc3Rpb24uaWQgPSBgcmVjb21tZW5kYXRpb24tJHtpbmRleH1gO1xuICAgICAgICBuZXdRdWVzdGlvbi5pbm5lckhUTUwgPSBxdWVzdGlvbjtcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChuZXdRdWVzdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvbW1lbmRhdGlvbi0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZWxlY3RSZWNvbW1lbmRhdGlvbihpbmRleCl7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY29tbWVuZGF0aW9uLSR7aW5kZXh9YCk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVQb3BVcFJlY29tbWVuZGF0aW9uKCl7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUG9wVXAnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBzdGF0ZS5wb3BVcCA9IGZhbHNlO1xuICAgIGNsZWFyUmVjb21tZW5kYXRpb24oKTtcbiAgICBjbGVhclJlY29tbWVuZGF0aW9uS2V5d29yZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVXNlckNoYXQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hhdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoYXRzZWN0aW9uXCIsIFwidXNlclwiLCBcImxvYWRlZFwiKTtcbiAgICBjaGF0RWxlbWVudC5pZCA9IGBjaGF0LSR7Y2hhdEluZGV4fWA7XG4gICAgY2hhdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPkFuZGE8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2hhdFNwZWFrLSR7Y2hhdEluZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzMVwiIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAzMSAyOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjYuNTI3OCAzLjg4MDgzQzI2LjIyNCAzLjQ3ODQ5IDI1LjYyMzQgMy4zNzkxMiAyNS4xODY0IDMuNjU4ODlDMjQuNzQ5NSAzLjkzODY1IDI0LjY0MTUgNC40OTE2MSAyNC45NDU0IDQuODkzOTZDMjYuNzU4NiA3LjI5NDk4IDI3Ljc4MDkgMTAuNDc5MyAyNy43ODA5IDEzLjkzMjVDMjcuNzgwOSAxNy4zODYgMjYuNzU4NSAyMC41NzE1IDI0Ljk0NTQgMjIuOTcyM0MyNC42NDE1IDIzLjM3NDcgMjQuNzQ5NSAyMy45Mjc2IDI1LjE4NjQgMjQuMjA3NEMyNS42MjM0IDI0LjQ4NzEgMjYuMjI0IDI0LjM4NzggMjYuNTI3OCAyMy45ODU0QzI4LjU3MjEgMjEuMjc4NSAyOS43MDgzIDE3LjczODYgMjkuNzA4MyAxMy45MzI1QzI5LjcwODMgMTAuMTI2NyAyOC41NzIzIDYuNTg3OTggMjYuNTI3OCAzLjg4MDgzWk0xMy42MDI3IDMuODA0MDlMMTMuODAyOCAzLjc5NzAzTDEzLjk4NTEgMy43OTg4MkMxNS4yODk3IDMuODU2NDggMTYuNDA1MSA0Ljc0MjAyIDE2LjgzMjEgNi4wNTUxOEMxNi45NTExIDYuNDczODcgMTcuMDE4MyA2Ljg4MzM0IDE3LjA5NjYgNy41NDk5NEwxNy4yMDA3IDguNDIzNUMxNy40MTA0IDEwLjQ0ODUgMTcuNDAzNyAxOC40MDMgMTcuMTgwNyAyMC4wNDI5TDE3LjA0MjQgMjEuMjE4OEMxNi45ODc2IDIxLjYxNTQgMTYuOTI1MiAyMS45MjA1IDE2LjgyMyAyMi4yNzA2QzE2LjM4MTcgMjMuNjI3MyAxNS4xNjQxIDI0LjUzNjMgMTMuODE3OCAyNC40OTg5QzEzLjEzMjUgMjQuNTE0NCAxMi4yOTc5IDI0LjE5MzQgMTEuNzE3NCAyMy43NDM5TDcuMTQzMDIgMjAuMzIyNEw0Ljc4ODczIDIwLjMyM0MzLjA1NDM3IDIwLjMyMyAxLjgxOTA3IDE5LjI1MSAxLjUxNTY0IDE3LjYxNTdMMS40ODEzOSAxNy4zOTkzQzEuMjI0NDYgMTUuNzE3NyAxLjIzMjQ0IDEyLjY2MDUgMS40ODEyOCAxMC44MjI4QzEuNzMwMyA5LjE4MzQyIDMuMDMwNjEgNy45NzM5OSA0Ljc4ODczIDcuOTczOTlMNy4xNDE3MyA3Ljk3MzMzTDExLjYwMiA0LjYyNjgyQzEyLjE0MiA0LjIwNTY3IDEyLjk0NzggMy44NTkyNiAxMy42MDI3IDMuODA0MDlaTTEzLjgyMjIgNS41NzA4M0wxMy43NzMzIDUuNTcxQzEzLjYxNzggNS41Njc5MSAxMy4xMTggNS43NzAyIDEyLjgzMzggNS45OTE2M0w4LjA5Mzk1IDkuNTQ5MDdDNy45MjE5OCA5LjY3ODE0IDcuNzA2OTIgOS43NDg2MiA3LjQ4NTA2IDkuNzQ4NjJINC43ODg3M0M0LjA1ODUyIDkuNzQ4NjIgMy41MTM2MSAxMC4yNTU0IDMuMzkxOTkgMTEuMDU1NEMzLjE2NTI3IDEyLjczMDUgMy4xNTc2OSAxNS42MzE3IDMuMzkyMzggMTcuMTY4OEMzLjUxNDIgMTguMDkzNiA0LjAwNzU2IDE4LjU0ODMgNC43ODg3MyAxOC41NDgzSDcuNDg1MDZDNy43MDYzNCAxOC41NDgzIDcuOTIwODcgMTguNjE4NSA4LjA5MjYzIDE4Ljc0NjlMMTIuOTQ1MSAyMi4zNzU5QzEzLjIwMzQgMjIuNTc1OSAxMy42MDA1IDIyLjcyODYgMTMuODIyMiAyMi43MjQ5QzE0LjMwMDkgMjIuNzM3OCAxNC43NzM5IDIyLjM4NDYgMTQuOTY5IDIxLjc4NjJDMTUuMDcwNCAyMS40Mzc4IDE1LjEyMzIgMjEuMTExOCAxNS4xODg3IDIwLjUxMjZMMTUuMjMxNCAyMC4xMjI4TDE1LjI2NzkgMTkuODI1MkMxNS40NzgzIDE4LjI3NzcgMTUuNDc4MyAxMC4wMTkyIDE1LjI2NzYgOC40NjkxM0wxNS4xMzA3IDcuMzQ1MTdDMTUuMDk4NCA3LjEwNzk4IDE1LjA2NyA2LjkyMDA2IDE1LjAzMjEgNi43NTg5NUwxNC45NzY3IDYuNTM0NTZDMTQuNzczOSA1LjkxMTggMTQuMzAwMiA1LjU1Nzk4IDEzLjgyMjIgNS41NzA4M1pNMjAuNzc3OCA3LjI3OTY5QzIxLjIxNDggNi45OTk5NSAyMS44MTUzIDcuMDk5MzUgMjIuMTE5MSA3LjUwMTcxQzIzLjQzMTggOS4yNDAxIDI0LjE1ODYgMTEuNTA0MiAyNC4xNTg2IDEzLjkzMzFDMjQuMTU4NiAxNi4zNjE4IDIzLjQzMTkgMTguNjI0OCAyMi4xMTkxIDIwLjM2MzRDMjEuODE1MyAyMC43NjU3IDIxLjIxNDggMjAuODY1MSAyMC43Nzc4IDIwLjU4NTRDMjAuMzQwOCAyMC4zMDU2IDIwLjIzMjggMTkuNzUyNyAyMC41MzY2IDE5LjM1MDNDMjEuNjE4MyAxNy45MTc4IDIyLjIzMTIgMTYuMDA5MiAyMi4yMzEyIDEzLjkzMzFDMjIuMjMxMiAxMS44NTY4IDIxLjYxODEgOS45NDcwMyAyMC41MzY2IDguNTE0NzVDMjAuMjMyOCA4LjExMjM5IDIwLjM0MDggNy41NTk0NCAyMC43Nzc4IDcuMjc5NjlaXCIgZmlsbD1cIiMwMDAwMDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0Ym94IHVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvd2VyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAke21lc3NhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyaWdodC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvd2VyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMTE2LjU4NyAxOTYuMjQ2IDk1LjU4MSA5OS4xMDlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDIwNi41ODcgMjk1LjM1NSBDIDE1Ni44ODEgMjk1LjM1NSAxMTYuNTg3IDI1NS4wNjEgMTE2LjU4NyAyMDUuMzU1IEMgMTE2LjU4NyAyMDIuMjggMTE2Ljc0MSAxOTkuMjQxIDExNy4wNDIgMTk2LjI0NiBMIDE3Ni4zMTIgMTk2LjI0NiBDIDE3My4yMDQgMjA0LjkzNCAxNzEuNTExIDIxNC4yOTQgMTcxLjUxMSAyMjQuMDUgQyAxNzEuNTExIDI1NC4zNDYgMTg3LjgzNSAyODAuODMgMjEyLjE2OCAyOTUuMTg1IEMgMjEwLjMyMiAyOTUuMjk4IDIwOC40NjEgMjk1LjM1NSAyMDYuNTg3IDI5NS4zNTUgWlwiIHN0eWxlPVwiZmlsbDogcmdiKDM4LCAzNywgNDIpOyB0cmFuc2Zvcm0tb3JpZ2luOiAxNjQuMzc3cHggMjQ1LjgwMnB4O1wiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2hhdEVsZW1lbnQpO1xuICAgIHNjcm9sbEludG9Ub3AoY2hhdEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkR1BUQ2hhdChtZXNzYWdlLCBjaGF0SW5kZXgpe1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgY29uc3QgY2hhdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGF0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hhdHNlY3Rpb25cIiwgXCJhaVwiKTtcbiAgICBjaGF0RWxlbWVudC5pZCA9IGBjaGF0LSR7Y2hhdEluZGV4fWA7XG4gICAgY2hhdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk9icm9saW4gQUk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2hhdFNwZWFrLSR7Y2hhdEluZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzMVwiIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAzMSAyOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjYuNTI3OCAzLjg4MDgzQzI2LjIyNCAzLjQ3ODQ5IDI1LjYyMzQgMy4zNzkxMiAyNS4xODY0IDMuNjU4ODlDMjQuNzQ5NSAzLjkzODY1IDI0LjY0MTUgNC40OTE2MSAyNC45NDU0IDQuODkzOTZDMjYuNzU4NiA3LjI5NDk4IDI3Ljc4MDkgMTAuNDc5MyAyNy43ODA5IDEzLjkzMjVDMjcuNzgwOSAxNy4zODYgMjYuNzU4NSAyMC41NzE1IDI0Ljk0NTQgMjIuOTcyM0MyNC42NDE1IDIzLjM3NDcgMjQuNzQ5NSAyMy45Mjc2IDI1LjE4NjQgMjQuMjA3NEMyNS42MjM0IDI0LjQ4NzEgMjYuMjI0IDI0LjM4NzggMjYuNTI3OCAyMy45ODU0QzI4LjU3MjEgMjEuMjc4NSAyOS43MDgzIDE3LjczODYgMjkuNzA4MyAxMy45MzI1QzI5LjcwODMgMTAuMTI2NyAyOC41NzIzIDYuNTg3OTggMjYuNTI3OCAzLjg4MDgzWk0xMy42MDI3IDMuODA0MDlMMTMuODAyOCAzLjc5NzAzTDEzLjk4NTEgMy43OTg4MkMxNS4yODk3IDMuODU2NDggMTYuNDA1MSA0Ljc0MjAyIDE2LjgzMjEgNi4wNTUxOEMxNi45NTExIDYuNDczODcgMTcuMDE4MyA2Ljg4MzM0IDE3LjA5NjYgNy41NDk5NEwxNy4yMDA3IDguNDIzNUMxNy40MTA0IDEwLjQ0ODUgMTcuNDAzNyAxOC40MDMgMTcuMTgwNyAyMC4wNDI5TDE3LjA0MjQgMjEuMjE4OEMxNi45ODc2IDIxLjYxNTQgMTYuOTI1MiAyMS45MjA1IDE2LjgyMyAyMi4yNzA2QzE2LjM4MTcgMjMuNjI3MyAxNS4xNjQxIDI0LjUzNjMgMTMuODE3OCAyNC40OTg5QzEzLjEzMjUgMjQuNTE0NCAxMi4yOTc5IDI0LjE5MzQgMTEuNzE3NCAyMy43NDM5TDcuMTQzMDIgMjAuMzIyNEw0Ljc4ODczIDIwLjMyM0MzLjA1NDM3IDIwLjMyMyAxLjgxOTA3IDE5LjI1MSAxLjUxNTY0IDE3LjYxNTdMMS40ODEzOSAxNy4zOTkzQzEuMjI0NDYgMTUuNzE3NyAxLjIzMjQ0IDEyLjY2MDUgMS40ODEyOCAxMC44MjI4QzEuNzMwMyA5LjE4MzQyIDMuMDMwNjEgNy45NzM5OSA0Ljc4ODczIDcuOTczOTlMNy4xNDE3MyA3Ljk3MzMzTDExLjYwMiA0LjYyNjgyQzEyLjE0MiA0LjIwNTY3IDEyLjk0NzggMy44NTkyNiAxMy42MDI3IDMuODA0MDlaTTEzLjgyMjIgNS41NzA4M0wxMy43NzMzIDUuNTcxQzEzLjYxNzggNS41Njc5MSAxMy4xMTggNS43NzAyIDEyLjgzMzggNS45OTE2M0w4LjA5Mzk1IDkuNTQ5MDdDNy45MjE5OCA5LjY3ODE0IDcuNzA2OTIgOS43NDg2MiA3LjQ4NTA2IDkuNzQ4NjJINC43ODg3M0M0LjA1ODUyIDkuNzQ4NjIgMy41MTM2MSAxMC4yNTU0IDMuMzkxOTkgMTEuMDU1NEMzLjE2NTI3IDEyLjczMDUgMy4xNTc2OSAxNS42MzE3IDMuMzkyMzggMTcuMTY4OEMzLjUxNDIgMTguMDkzNiA0LjAwNzU2IDE4LjU0ODMgNC43ODg3MyAxOC41NDgzSDcuNDg1MDZDNy43MDYzNCAxOC41NDgzIDcuOTIwODcgMTguNjE4NSA4LjA5MjYzIDE4Ljc0NjlMMTIuOTQ1MSAyMi4zNzU5QzEzLjIwMzQgMjIuNTc1OSAxMy42MDA1IDIyLjcyODYgMTMuODIyMiAyMi43MjQ5QzE0LjMwMDkgMjIuNzM3OCAxNC43NzM5IDIyLjM4NDYgMTQuOTY5IDIxLjc4NjJDMTUuMDcwNCAyMS40Mzc4IDE1LjEyMzIgMjEuMTExOCAxNS4xODg3IDIwLjUxMjZMMTUuMjMxNCAyMC4xMjI4TDE1LjI2NzkgMTkuODI1MkMxNS40NzgzIDE4LjI3NzcgMTUuNDc4MyAxMC4wMTkyIDE1LjI2NzYgOC40NjkxM0wxNS4xMzA3IDcuMzQ1MTdDMTUuMDk4NCA3LjEwNzk4IDE1LjA2NyA2LjkyMDA2IDE1LjAzMjEgNi43NTg5NUwxNC45NzY3IDYuNTM0NTZDMTQuNzczOSA1LjkxMTggMTQuMzAwMiA1LjU1Nzk4IDEzLjgyMjIgNS41NzA4M1pNMjAuNzc3OCA3LjI3OTY5QzIxLjIxNDggNi45OTk5NSAyMS44MTUzIDcuMDk5MzUgMjIuMTE5MSA3LjUwMTcxQzIzLjQzMTggOS4yNDAxIDI0LjE1ODYgMTEuNTA0MiAyNC4xNTg2IDEzLjkzMzFDMjQuMTU4NiAxNi4zNjE4IDIzLjQzMTkgMTguNjI0OCAyMi4xMTkxIDIwLjM2MzRDMjEuODE1MyAyMC43NjU3IDIxLjIxNDggMjAuODY1MSAyMC43Nzc4IDIwLjU4NTRDMjAuMzQwOCAyMC4zMDU2IDIwLjIzMjggMTkuNzUyNyAyMC41MzY2IDE5LjM1MDNDMjEuNjE4MyAxNy45MTc4IDIyLjIzMTIgMTYuMDA5MiAyMi4yMzEyIDEzLjkzMzFDMjIuMjMxMiAxMS44NTY4IDIxLjYxODEgOS45NDcwMyAyMC41MzY2IDguNTE0NzVDMjAuMjMyOCA4LjExMjM5IDIwLjM0MDggNy41NTk0NCAyMC43Nzc4IDcuMjc5NjlaXCIgZmlsbD1cIiMwMDAwMDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0Ym94IGFpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMTE2LjU4NiAxOTYuMjQ2IDk1LjU4MSA5OS4xMDlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDIwNi41ODcgMTk2LjI0OSBDIDE1Ni44ODEgMTk2LjI0OSAxMTYuNTg3IDIzNi41NDMgMTE2LjU4NyAyODYuMjQ5IEMgMTE2LjU4NyAyODkuMzI0IDExNi43NDEgMjkyLjM2MyAxMTcuMDQyIDI5NS4zNTggTCAxNzYuMzEyIDI5NS4zNTggQyAxNzMuMjA0IDI4Ni42NyAxNzEuNTExIDI3Ny4zMSAxNzEuNTExIDI2Ny41NTQgQyAxNzEuNTExIDIzNy4yNTggMTg3LjgzNSAyMTAuNzc0IDIxMi4xNjggMTk2LjQxOSBDIDIxMC4zMjIgMTk2LjMwNiAyMDguNDYxIDE5Ni4yNDkgMjA2LjU4NyAxOTYuMjQ5IFpcIiBzdHlsZT1cImZpbGw6IHJnYig0NSwgMTA0LCAyMjApOyB0cmFuc2Zvcm0tb3JpZ2luOiAxNjQuMzc3cHggMjQ1LjgwMnB4O1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwgMCwgMCwgLTEsIC0wLjAwMDAwNDYzMTYwOCwgLTAuMDAwMDA2OTI1OSlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG4gICAgc2Nyb2xsSW50b1RvcChjaGF0RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDaGF0Q29udGVudChtZXNzYWdlLCBjaGF0SW5kZXgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGF0LSR7Y2hhdEluZGV4fWApLmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG4gICAgY29uc3QgdGFyZ2V0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGF0LSR7Y2hhdEluZGV4fSBkaXYuY29udGVudGApO1xuICAgIHRhcmdldENvbnRlbnQuaW5uZXJIVE1MID0gYCR7bWVzc2FnZX1gO1xuICAgIHNjcm9sbEludG9Ub3AoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXQtJHtjaGF0SW5kZXgtMX1gKSk7XG59XG5cbmZ1bmN0aW9uIHNjcm9sbEludG9Ub3AodGFyZ2V0RWxlbWVudCl7XG4gICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xufSIsImxldCBpZHggPSAwO1xubGV0IGtleXdvcmRMaXN0ID0ge307XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRLZXl3b3JkKGtleXdvcmQpe1xuICAgIGtleXdvcmRMaXN0W2lkeC50b1N0cmluZygpXSA9IGtleXdvcmQ7XG4gICAgcmV0dXJuIGlkeCsrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5TGlzdCgpe1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKGtleXdvcmRMaXN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUtleXdvcmQocmVtb3ZlZEluZGV4KXsgLy9pbnB1dCBpbiBzdHJpbmdcbiAgICBpZih0eXBlb2YgcmVtb3ZlZEluZGV4ICE9IFwic3RyaW5nXCIpIHJlbW92ZWRJbmRleCA9IHRvU3RyaW5nKHJlbW92ZWRJbmRleCk7XG4gICAgaWYoIShyZW1vdmVkSW5kZXggaW4ga2V5d29yZExpc3QpKSByZXR1cm47XG4gICAgZGVsZXRlIGtleXdvcmRMaXN0W3JlbW92ZWRJbmRleF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcigpe1xuICAgIGlkeCA9IDA7XG4gICAga2V5d29yZExpc3QgPSB7fTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlU2luZ2xlSFRNTChrZXl3b3JkLCBjYW5DbG9zZSA9IGZhbHNlLCBlbGVtZW50SUQgPSB1bmRlZmluZWQpe1xuICAgIGNvbnN0IG5ld0tleXdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdLZXl3b3JkLmNsYXNzTGlzdC5hZGQoJ2tleXdvcmQnKTtcbiAgICBuZXdLZXl3b3JkLmlubmVySFRNTCA9IGA8c3Bhbj4ke2tleXdvcmR9PC9zcGFuPmA7XG4gICAgaWYoY2FuQ2xvc2Upe1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdLZXl3b3JkLmlkID0gYGtleXdvcmQtJHtlbGVtZW50SUR9YFxuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkLWNsb3NlJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmlubmVySFRNTCA9ICc8c3ZnIHZlcnNpb249XCIxLjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCI1MTIuMDAwMDAwcHRcIiBoZWlnaHQ9XCI1MTIuMDAwMDAwcHRcIiB2aWV3Qm94PVwiMCAwIDUxMi4wMDAwMDAgNTEyLjAwMDAwMFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBtZWV0XCI+IDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwLjAwMDAwMCw1MTIuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXCIgZmlsbD1cIiNmZmZmZmZcIiBzdHJva2U9XCJub25lXCI+IDxwYXRoIGQ9XCJNMzkzIDUxMDYgYy05MCAtMjIgLTE2NCAtNjUgLTIzOSAtMTQwIC0xMzMgLTEzMyAtMTgxIC0yOTcgLTEzOSAtNDc1IDM1IC0xNDUgNSAtMTEzIDk0OSAtMTA1OCBsODcxIC04NzMgLTg3MSAtODcyIGMtOTQ0IC05NDYgLTkxNCAtOTE0IC05NDkgLTEwNTkgLTQyIC0xNzggNiAtMzQyIDEzOSAtNDc1IDEzMyAtMTMzIDI5NyAtMTgxIDQ3NSAtMTM5IDE0NSAzNSAxMTMgNiAxMDU5IDk0OSBsODcyIDg3MSA4NzMgLTg3MSBjOTQ1IC05NDMgOTEzIC05MTQgMTA1OCAtOTQ5IDE3OCAtNDIgMzQyIDYgNDc1IDEzOSAxMzMgMTMzIDE4MSAyOTcgMTM5IDQ3NSAtMzUgMTQ1IC01IDExMyAtOTQ5IDEwNTggbC04NzEgODczIDg3MSA4NzIgYzk0MyA5NDYgOTE0IDkxNCA5NDkgMTA1OSA0MSAxNzQgLTUgMzM1IC0xMzIgNDcwIC0xNTggMTY3IC0zOTcgMjA2IC02MDcgOTcgLTUyIC0yNyAtMTg4IC0xNTggLTkzMyAtOTAyIGwtODczIC04NzEgLTg3MiA4NzEgYy04NDQgODQzIC04NzUgODczIC05NDggOTA4IC0xMTUgNTUgLTIzMiA3MCAtMzQ3IDQyelwiLz4gPC9nPiA8L3N2Zz4nO1xuICAgICAgICBuZXdLZXl3b3JkLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0tleXdvcmQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUVsZW1lbnRMaXN0KCl7XG4gICAgbGV0IGVsZW1lbnRMaXN0ID0gW107XG4gICAgT2JqZWN0LnZhbHVlcyhrZXl3b3JkTGlzdCkuZm9yRWFjaCgoa2V5d29yZCkgPT4ge1xuICAgICAgICBlbGVtZW50TGlzdC5wdXNoKGdlbmVyYXRlU2luZ2xlSFRNTChrZXl3b3JkKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufSIsImNvbnN0IHN5bnRoID0gd2luZG93LnNwZWVjaFN5bnRoZXNpcztcbmNvbnN0IHV0dGVyYW5jZSA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UoKTtcbmxldCBzZWxlY3RlZFZvaWNlID0gc3ludGguZ2V0Vm9pY2VzKCkuZmlsdGVyKChsaXN0KSA9PiBsaXN0LmxhbmcgPT0gXCJpZFwiKVswXTtcbmxldCBpc1BsYXlpbmcgPSBmYWxzZTtcbmxldCBjdXJyZW50UGxheWluZ0VsZW1lbnQgPSB1bmRlZmluZWQ7XG5cbnN5bnRoLmFkZEV2ZW50TGlzdGVuZXIoJ3ZvaWNlc2NoYW5nZWQnLCAoKSA9PiB7XG4gICAgc2VsZWN0ZWRWb2ljZSA9IHN5bnRoLmdldFZvaWNlcygpLmZpbHRlcigobGlzdCkgPT4gbGlzdC5sYW5nID09IFwiaWRcIilbMF07XG59KVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdEVsZW1lbnQoZWxlbWVudCwgYnV0dG9uLCB0ZXh0KXtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGF5aW5nJykpe1xuICAgICAgICAgICAgc3RvcFNwZWFrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHN0b3BTcGVhaygpO1xuICAgICAgICAgICAgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHN0YXJ0U3BlYWsodGV4dCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxudXR0ZXJhbmNlLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZCcsICgpID0+IHtcbiAgICBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9IHVuZGVmaW5lZDtcbn0pO1xuXG5cbmZ1bmN0aW9uIHN0YXJ0U3BlYWsodGV4dCl7XG4gICAgdXR0ZXJhbmNlLnRleHQgPSB0ZXh0O1xuICAgIHV0dGVyYW5jZS52b2ljZSA9IHNlbGVjdGVkVm9pY2U7XG4gICAgdXR0ZXJhbmNlLmxhbmcgPSBcImlkXCI7XG4gICAgaXNQbGF5aW5nID0gdHJ1ZTtcbiAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxheWluZycpO1xuICAgIHN5bnRoLnNwZWFrKHV0dGVyYW5jZSk7XG59XG5cbmZ1bmN0aW9uIHN0b3BTcGVhaygpe1xuICAgIGlmKCFpc1BsYXlpbmcpIHJldHVybjtcbiAgICBzeW50aC5yZXN1bWUoKTtcbiAgICBzeW50aC5jYW5jZWwoKTtcbiAgICBpc1BsYXlpbmcgPSBmYWxzZTtcbiAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZycpO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9IHVuZGVmaW5lZDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBxdWVyeSBmcm9tIFwiLi9xdWVyeS5qc1wiO1xuaW1wb3J0ICogYXMgZGlzcGxheSBmcm9tICcuL2Rpc3BsYXkuanMnO1xuaW1wb3J0ICogYXMgZ3B0IGZyb20gJy4vYWkuanMnO1xuaW1wb3J0ICogYXMgdHRzIGZyb20gJy4vdHRzLmpzJztcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5sZXQgY2hhdEhpc3RvcnkgPSBbXTtcbmxldCByZWNvbW1lbmRhdGlvbkxpc3QgPSB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbmxldCBjaGF0SW5kZXggPSAwO1xuY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbmxldCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcblxuZnVuY3Rpb24gYWRkS2V5d29yZExpc3RlbmVyKGVsZW1lbnQpe1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC1tb2RlJykpe1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SUQgPSBlLmN1cnJlbnRUYXJnZXQuaWQucmVwbGFjZSgna2V5d29yZC0nLCAnJyk7XG4gICAgICAgICAgICBxdWVyeS5yZW1vdmVLZXl3b3JkKHRhcmdldElEKTtcbiAgICAgICAgICAgIHRhcmdldC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdC1tb2RlJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoZSkgPT4ge1xuICAgICAgICBlLmN1cnJlbnRUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LW1vZGUnKTtcbiAgICB9KTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZCgpe1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0SW5wdXQnKTtcbiAgICBpZih0ZXh0SW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50SUQgPSBxdWVyeS5hZGRLZXl3b3JkKHRleHRJbnB1dC52YWx1ZSk7XG4gICAgbGV0IGtleXdvcmRFbGVtZW50ID0gcXVlcnkuZ2VuZXJhdGVTaW5nbGVIVE1MKHRleHRJbnB1dC52YWx1ZSwgdHJ1ZSwgZWxlbWVudElEKTtcbiAgICBrZXl3b3JkRWxlbWVudCA9IGFkZEtleXdvcmRMaXN0ZW5lcihrZXl3b3JkRWxlbWVudCk7XG4gICAgZGlzcGxheS5hcHBlbmRLZXl3b3JkKGtleXdvcmRFbGVtZW50KTtcbiAgICB0ZXh0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VuZEtleXdvcmQoKXtcbiAgICBhZGRLZXl3b3JkKCk7XG4gICAgaWYocXVlcnkuZ2V0S2V5TGlzdCgpLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgY29uc3QgcXVlcnlFbGVtZW50TGlzdCA9IHF1ZXJ5LmdlbmVyYXRlRWxlbWVudExpc3QoKTtcbiAgICBkaXNwbGF5LnRvZ2dsZU92ZXJsYXkoKTtcbiAgICBkaXNwbGF5LnNob3dQb3BVcFJlY29tbWVuZGF0aW9uKHF1ZXJ5RWxlbWVudExpc3QpO1xuICAgIHRyeXtcbiAgICAgICAgcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCk7XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBvcFVwKCl7XG4gICAgZGlzcGxheS50b2dnbGVPdmVybGF5KCk7XG4gICAgZGlzcGxheS5oaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpe1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gYWRkUmVjTGlzdGVuZXIoZWxlbWVudExpc3Qpe1xuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkUmVjb21tZW5kYXRpb24gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheS51bnNlbGVjdFJlY29tbWVuZGF0aW9uKHNlbGVjdGVkUmVjb21tZW5kYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHBhcnNlSW50KGVsZW1lbnQuaWQucmVwbGFjZSgncmVjb21tZW5kYXRpb24tJywgJycpKTtcbiAgICAgICAgICAgIGRpc3BsYXkuc2VsZWN0UmVjb21tZW5kYXRpb24oc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoUmVjb21tZW5kYXRpb24oc2lnbmFsKXtcbiAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgdmFsaWRSZXF1ZXN0ID0gdHJ1ZTtcbiAgICBkaXNwbGF5LmNsZWFyUmVjb21tZW5kYXRpb24oKTtcbiAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgICAgIHZhbGlkUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFib3J0aW5nLi4uXCIpO1xuICAgIH0pO1xuICAgIHRyeXtcbiAgICAgICAgcmVjb21tZW5kYXRpb25MaXN0ID0gYXdhaXQgZ3B0LmdlbmVyYXRlUmVjb21tZW5kYXRpb24ocXVlcnkuZ2V0S2V5TGlzdCgpKTtcbiAgICAgICAgaWYodmFsaWRSZXF1ZXN0KXtcbiAgICAgICAgICAgIGxldCByZWNvbW1lbmRhdGlvbkVsZW1lbnRzID0gZGlzcGxheS5nZW5lcmF0ZVJlY29tbWVuZGF0aW9uRWxlbWVudHMocmVjb21tZW5kYXRpb25MaXN0KTtcbiAgICAgICAgICAgIHJlY29tbWVuZGF0aW9uRWxlbWVudHMgPSBhZGRSZWNMaXN0ZW5lcihyZWNvbW1lbmRhdGlvbkVsZW1lbnRzKTtcbiAgICAgICAgICAgIGRpc3BsYXkuYXBwZW5kUmVjb21tZW5kYXRpb24ocmVjb21tZW5kYXRpb25FbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZXJyKXtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRSZWNvbW1lbmRhdGlvbihbXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoYXRTcGVhayhjaGF0SW5kZXgpe1xuICAgIHR0cy5pbml0RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hhdC0ke2NoYXRJbmRleH1gKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hhdFNwZWFrLSR7Y2hhdEluZGV4fWApLFxuICAgICAgICAgICAgICAgIGNoYXRIaXN0b3J5W2NoYXRJbmRleF0pO1xufVxuXG5mdW5jdGlvbiBhc2tRdWVzdGlvbigpe1xuICAgIGRpc3BsYXkuZm9jdXNFbGVtZW50KCdtYWluJyk7XG4gICAgY2xlYXJQb3BVcCgpO1xuICAgIHF1ZXJ5LmNsZWFyKCk7XG4gICAgZGlzcGxheS5jbGVhcktleXdvcmQoKTtcbiAgICBjaGF0SGlzdG9yeS5wdXNoKGAke3JlY29tbWVuZGF0aW9uTGlzdFtzZWxlY3RlZFJlY29tbWVuZGF0aW9uXX1gKTtcbiAgICBkaXNwbGF5LmFkZFVzZXJDaGF0KGA8c3Bhbj4ke3JlY29tbWVuZGF0aW9uTGlzdFtzZWxlY3RlZFJlY29tbWVuZGF0aW9uXX08L3NwYW4+YCwgY2hhdEluZGV4KTtcbiAgICBhY3RpdmF0ZUNoYXRTcGVhayhjaGF0SW5kZXgrKyk7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZyZWV6ZUNoYXRJbmRleCA9IGNoYXRJbmRleCsrO1xuICAgICAgICBjaGF0SGlzdG9yeS5wdXNoKCdsb2FkaW5nJyk7XG4gICAgICAgIGRpc3BsYXkuYWRkR1BUQ2hhdChcIjxkaXYgY2xhc3M9J2RvdC1mbGFzaGluZyBibHVlJyBzdHlsZT0nbWFyZ2luOiBhdXRvOyc+PC9kaXY+XCIsIGZyZWV6ZUNoYXRJbmRleCk7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGdwdFJlc3BvbnNlID0gYXdhaXQgZ3B0LmFza1F1ZXN0aW9uKHJlY29tbWVuZGF0aW9uTGlzdFtzZWxlY3RlZFJlY29tbWVuZGF0aW9uXSk7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFJlc3BvbnNlID0gZ3B0UmVzcG9uc2Uuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiAobGluZSAhPT0gXCJcIikpXG4gICAgICAgICAgICAubWFwKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZUNvdW50ID0gbGluZS5zZWFyY2goL1xcU3wkLyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7J1xcdTAwYTAnLnJlcGVhdCh3aGl0ZXNwYWNlQ291bnQpK2xpbmUuc2xpY2Uod2hpdGVzcGFjZUNvdW50KX08L2Rpdj5cXG5gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgICAgIGNoYXRIaXN0b3J5W2ZyZWV6ZUNoYXRJbmRleF0gPSBncHRSZXNwb25zZTtcbiAgICAgICAgICAgIGFjdGl2YXRlQ2hhdFNwZWFrKGZyZWV6ZUNoYXRJbmRleCk7XG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZUNoYXRDb250ZW50KGA8c3Bhbj4ke2ZpbmFsUmVzcG9uc2V9PC9zcGFuPmAsIGZyZWV6ZUNoYXRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY2hhdEhpc3RvcnlbZnJlZXplQ2hhdEluZGV4XSA9IFwiRXJyb3IsIHNpbGFrYW4gY29iYSBsYWdpXCI7XG4gICAgICAgICAgICBhY3RpdmF0ZUNoYXRTcGVhayhmcmVlemVDaGF0SW5kZXgpO1xuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVDaGF0Q29udGVudChcIjxzcGFuPkVycm9yIDooIHNpbGFrYW4gY29iYSBsYWdpPC9zcGFuPlwiLCBmcmVlemVDaGF0SW5kZXgpO1xuICAgICAgICB9XG4gICAgfSwgNTAwKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXNCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEtleXdvcmQpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VuZEtleXdvcmQpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7Y2xlYXJQb3BVcCgpOyByZXNldCgpfSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZWZyZXNoUmVjb21tZW5kYXRpb24oc2lnbmFsKSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXRCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihyZWNvbW1lbmRhdGlvbkxpc3QgPT09IHVuZGVmaW5lZCB8fCAhZGlzcGxheS5zdGF0ZS5wb3BVcCkgcmV0dXJuO1xuICAgIGFza1F1ZXN0aW9uKCk7XG59KTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRJbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dElucHV0JykudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIHNlbmRLZXl3b3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFkZEtleXdvcmQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==