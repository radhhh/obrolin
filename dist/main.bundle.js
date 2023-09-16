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
    background-color: #FBFBFF;
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
    background-color: #FBFBFF;
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
    background-color: #FBFBFF;
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
    color: #FBFBFF;
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
    background-color: #FBFBFF;
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

button#voiceInputButton.recording,
button#voiceInputButton.recording:hover{
    transform: scale(1.1);
    background-color: #26252A;
}

div#middleInputContainer{
    flex: 1;
}

div#middleInputContainer > textarea{
    letter-spacing: 0.5px;
    color: #FBFBFF;
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
    color: #FBFBFF;
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
    color: #FBFBFF;
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
    background-color: #FBFBFF;
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
    color: #FBFBFF;
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
    background-color: #FBFBFF;
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
    color: #FBFBFF;
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
    background-color: #FBFBFF;
    animation-name: dot-flashing-blue;
}

@keyframes dot-flashing-blue {
    0% {
        background-color: #FBFBFF;
    }
    50%, 100% {
        background-color: hsl(220, 71%, 80%);
    }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-family: 'Lato';\n    font-weight: 700;\n    font-size: 1em;\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    text-decoration-style: none;\n}\n\n:root{\n    font-size: 16px;\n    scroll-behavior: smooth;\n}\n\nbody, html{\n    background-color: #FBFBFF;\n    min-height: 100%;\n    width: 100%;\n}\n\nbody{\n    padding-top: 5em;\n    padding-bottom: 7em;\n}\n\nheader{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    padding: 1em 2em;\n    box-sizing: border-box;\n    background-color: #FBFBFF;\n}\n\nheader > div.container{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    justify-content: space-between;\n    align-items: center;\n}\n\nheader h1{\n    font-weight: 900;\n    font-size: 2rem;\n    cursor: default;\n}\n\nheader button{\n    top: 0.4em;\n    display: block;\n    box-sizing: border-box;\n    border: none;\n    background-color: #FBFBFF;\n}\n\nbutton svg path#Info-Square-2{\n    fill: black;\n}\n\nbutton:hover svg path#Info-Square-2{\n    fill: #2D68DC;\n}\n\nmain{\n    padding: 0 2em;\n}\n\nstrong{\n    font-weight: 900;\n}\n\ndiv.chatsection{\n    margin-bottom: 1em;\n    display: flex;\n    align-items: center;\n}\n\ndiv.chatsection.user{\n    justify-content: flex-end;\n    padding-left: 1em;\n}\n\ndiv.chatsection.ai{\n    justify-content: flex-start;\n    padding-right: 1em;\n}\ndiv.chatsection h3{\n    color: #8E8D94;\n    font-size: 0.8rem;\n    font-weight: 900;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: 0.827px; \n    margin-left: 2em;\n    margin-bottom: 0.3em;\n}\n\ndiv.chatsection h3 > button{\n    display: none;\n    top: 0.3em;\n    background-color: inherit;\n    border: none;\n    height: 1.2em;\n}\n\ndiv.chatsection.loaded h3 > button{\n    display: inline;\n}\n\ndiv.chatsection h3 > button > svg{\n    filter: invert(59%) sepia(7%) saturate(230%) hue-rotate(209deg) brightness(93%) contrast(94%);\n    height: 1.4em;\n}\n\ndiv.chatsection.user h3 > button:hover svg,\ndiv.chatsection.user.playing h3 > button svg{\n    filter: invert(10%) sepia(5%) saturate(1214%) hue-rotate(211deg) brightness(97%) contrast(89%);\n}\n\ndiv.chatsection.ai h3 > button:hover svg,\ndiv.chatsection.ai.playing h3 > button svg{\n    filter: invert(44%) sepia(13%) saturate(5402%) hue-rotate(196deg) brightness(84%) contrast(107%);\n}\n\ndiv.chatsection.user.playing h3{\n    font-weight: 900;\n    color: #26252A;\n}\n\ndiv.chatsection.ai.playing h3{\n    font-weight: 900;\n    color: #2D68DC;\n}\n\n\ndiv.chatbox{\n    color: #FBFBFF;\n    font-size: 1rem;\n    display: flex;\n    width: fit-content;\n    max-width: 75ch;\n}\n\ndiv.chatbox > div.content{\n    padding: 1em 0 1em;\n    min-width: 15ch;\n    line-height: 1.5;\n    flex: 1;\n}\n\ndiv.chatbox > div.content *:not(:first-child){\n    margin-top: 0.5em;\n}\n\ndiv.chatbox > div.content ol, \ndiv.chatbox > div.content ul{\n    margin-left: 1em;\n}\n\ndiv.chatbox > div.left-box{\n    display: flex;\n    flex-direction: column;\n    width: 1.5em;\n    align-items: flex-end;\n}\n\ndiv.chatbox > div.right-box{\n    display: flex;\n    flex-direction: column;\n    width: 1.5em;\n    align-items: flex-start;\n}\n\ndiv.middle-left, div.middle-right{\n    width: 1em;\n    flex: 1;\n}\n\ndiv.upper-left, \ndiv.lower-left, \ndiv.upper-right, \ndiv.lower-right{\n    height: 1em;\n    width: 1em;\n}\n\ndiv.upper-left{\n    border-radius: 1em 0px 0px 0px; \n}\ndiv.upper-right{\n    border-radius: 0px 1em 0px 0px;\n}\ndiv.lower-right{\n    border-radius: 0px 0em 1em 0px;\n}\ndiv.lower-left{\n    border-radius: 0px 0em 0px 1em;\n}\n\ndiv.chatbox.user > div.left-box > div,\ndiv.chatbox.user > div.right-box > div, \ndiv.chatbox.user > div.content\n{\n    background-color: #26252A;\n}\n\ndiv.chatbox.ai > div.left-box > div,\ndiv.chatbox.ai > div.right-box > div,\ndiv.chatbox.ai > div.content\n{\n    background-color: #2D68DC;\n}\n\ndiv.content div{\n    width: 100%;\n}\n\ndiv.chatbox svg{\n    position: absolute;\n    bottom: 1px;\n    width: 1.5em;\n}\n\ndiv.chatbox.ai svg{\n    left: -1px;\n}\n\ndiv.chatbox.user svg{\n    right: -1px;\n}\n\n\n/* Input Section */\n\nsection#inputContainer{\n    display: flex;\n    position: fixed;\n    align-items: flex-end;\n    gap: 0.6em;\n    bottom: 0;\n    width: 100%;\n    box-sizing: border-box;\n    background-color: #FBFBFF;\n    padding: 1.2em 1.5em 1.2em;\n}\n\nsection#inputContainer button:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\nbutton#voiceInputButton{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 5em;\n    height: 5em;\n    flex-shrink: 0;\n    border-radius: 10px 48.5px 10px 10px;\n    border: 1px solid #2D68DC;\n    background-color: #2D68DC;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\nbutton#voiceInputButton > svg{\n    display: block;\n    position: relative;\n    top: 0.1em;\n    right: 0.1em;\n    width: 2.2em;\n    height: auto;\n    padding: 5.417px 10.833px;\n}\n\nbutton#voiceInputButton.recording,\nbutton#voiceInputButton.recording:hover{\n    transform: scale(1.1);\n    background-color: #26252A;\n}\n\ndiv#middleInputContainer{\n    flex: 1;\n}\n\ndiv#middleInputContainer > textarea{\n    letter-spacing: 0.5px;\n    color: #FBFBFF;\n    height: 2.5em;\n    font-size: 1rem;\n    padding: 0.6em 0.5em 0.4em;\n    width: 100%;\n    border-radius: 10px;\n    border: 1px solid #2D68DC;\n    background: #2D68DC;\n    box-sizing: border-box;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    resize: none;\n}\n\ndiv#middleInputContainer textarea:hover{\n    background-color: hsl(220, 71%, 48%);\n}\n\ndiv#middleInputContainer textarea:focus{\n    outline: none;\n    background: #2D68DC;\n}\n\ndiv#middleInputContainer > div#keywordContainer{\n    width: 100%;\n    margin-bottom: 0.3em;\n}\n\n.keyword{\n    color: #FBFBFF;\n    font-size: 0.9rem;\n    display: inline-block;\n    padding: 0.3em 0.8em;\n    width: max(5ch, fit-content);\n    margin: 0 0.3em 0.15em 0;\n    background: #2D68DC;\n    border-radius: 0.7em;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    border: none;\n}\n\ndiv#keywordContainer .keyword{\n    cursor: pointer;\n}\n\ndiv#keywordContainer .keyword:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv#keywordContainer .keyword .keyword-close{\n    display: none;\n}\n\ndiv#keywordContainer .keyword.select-mode{\n    background-color: hsl(220, 71%, 30%);\n    color: hsl(220, 71%, 48%);\n}\n\ndiv#keywordContainer .keyword.select-mode:hover{\n    background-color: hsl(220, 71%, 20%);\n}\n\ndiv#keywordContainer .keyword.select-mode .keyword-close{\n    text-align: center;\n    color: #FBFBFF;\n    font-weight: 900;\n    opacity: 1;\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n\ndiv#keywordContainer .keyword .keyword-close svg{\n    top: 0.1em;\n    height: 1em;\n    width: 1em;\n}\n\ndiv#rightButtonContainer{\n    display: flex;\n    width: 5.4em;\n    gap: 0.4em;\n}\n\ndiv#rightButtonContainer > button{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    border: none;\n    height: 2.5em;\n    width: 2.5em;\n    background-color: #2D68DC;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\ndiv#rightButtonContainer svg {\n    width: 1.2em;\n}\n\n/* Pop Up Section */\n\n.hidden{\n    transform: translate(-50%, -50%) scale(0) !important;\n}\n\ndiv#darkOverlay{\n    z-index: 200;\n    width: 100%;\n    height: 100%;\n    background-color: hsla(220, 69%, 5%, 0.5);\n}\n\n.center-popup{\n    position: fixed;\n    transform: translate(-50%, -50%);\n    top: 50%;\n    left: 50%;\n}\n\ndiv#recommendationPopUp{\n    font-size: 1.2rem;\n    width: min(80vw, 60ch);\n    border-radius: 0.5em;\n    z-index: 300;\n    padding: 1.2em 1em 1em;\n    background-color: #FBFBFF;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.149) inset;\n}\n\ndiv#recommendationPopUp > h3{\n    margin-bottom: 0.2em;\n}\n\ndiv#recommendationPopUp > div{\n    margin-bottom: 0.5em;\n}\n\ndiv.recommendation{\n    cursor: pointer;\n    font-size: 1rem;\n    color: #FBFBFF;\n    background-color: #2D68DC;\n    padding: 0.5em 0.7em;\n    border-radius: 0.5em;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n}\n\ndiv.recommendation:not(:last-child){\n    margin-bottom: 0.5em;\n}\n\ndiv.recommendation:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv.recommendation.selected{\n    background-color: hsl(220, 71%, 30%);\n    outline: hsl(220, 71%, 20%) 2px solid;\n}\n\ndiv#actionButtons{\n    margin-top: 0.8em;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    align-items: center;\n}\n\nbutton#refreshButton{\n    display: none;\n    font-size: 1rem;\n    background-color: #FBFBFF;\n    box-shadow: none;\n    border: none;\n    text-decoration: underline;\n}\n\nbutton#refreshButton:hover{\n    color: hsl(220, 71%, 40%);\n}\n\n.loaded button#refreshButton{\n    display: block;\n}\n\ndiv#centerButtons button:hover{\n    background-color: hsl(220, 71%, 40%);\n}\n\ndiv#centerButtons{\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n}\n\ndiv#centerButtons > button{\n    font-size: 1rem;\n    color: #FBFBFF;\n    width: 12ch;\n    height: 1.8em;\n    background-color: #2D68DC;\n    border-radius: 0.2em;\n    border: none;\n    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n}\n\n\n/* Animation Part */\n\n#recommendationPopUp .dot-flashing{\n    margin: auto;\n}\n\n.dot-flashing {\n    position: relative;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite linear alternate;\n    animation-delay: 0.3s;\n}\n\n.loaded .dot-flashing{\n    display: none;\n}\n\n.dot-flashing::before, .dot-flashing::after {\n    content: \"\";\n    display: inline-block;\n    position: absolute;\n    top: 0;\n}\n\n.dot-flashing::before {\n    left: -15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite alternate;\n    animation-delay: 0s;\n}\n\n.dot-flashing::after {\n    left: 15px;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background-color: #2D68DC;\n    color: #2D68DC;\n    animation: dot-flashing 0.6s infinite alternate;\n    animation-delay: 0.6s;\n}\n  \n@keyframes dot-flashing {\n    0% {\n      background-color: #2D68DC;\n    }\n    50%, 100% {\n      background-color: rgba(152, 128, 255, 0.2);\n    }\n}\n\ndiv.content > div.dot-flashing.blue{\n    margin: auto;\n    width: 10px;\n}\n\n.dot-flashing.blue, .dot-flashing.blue::before, .dot-flashing.blue::after{\n    background-color: #FBFBFF;\n    animation-name: dot-flashing-blue;\n}\n\n@keyframes dot-flashing-blue {\n    0% {\n        background-color: #FBFBFF;\n    }\n    50%, 100% {\n        background-color: hsl(220, 71%, 80%);\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./src/scripts/stt.js":
/*!****************************!*\
  !*** ./src/scripts/stt.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   report: () => (/* binding */ report),
/* harmony export */   start: () => (/* binding */ start),
/* harmony export */   stop: () => (/* binding */ stop)
/* harmony export */ });
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
recognition.lang = "id";

const report = new EventTarget();

recognition.addEventListener('result', (e) => {
    let transcript = Array.from(e.results)
                            .map(val => val[0].transcript)
                            .join('')
                            .toLocaleLowerCase();
    report.dispatchEvent(new CustomEvent("result", { detail: transcript }));
});

function start(){
    recognition.start();
}

function stop(){
    recognition.stop()
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
/* harmony import */ var _stt_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stt.js */ "./src/scripts/stt.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.css */ "./src/style.css");







let chatHistory = [];
let recommendationList = undefined;
let selectedRecommendation = undefined;
let chatIndex = 0;
const controller = new AbortController();
let signal = controller.signal;

const voiceInputButton = document.getElementById('voiceInputButton');
const plusButton = document.getElementById('plusButton');
const sendButton = document.getElementById('sendButton');
const cancelButton = document.getElementById('cancelButton');
const refreshButton = document.getElementById('refreshButton');
const submitButton = document.getElementById('submitButton');
const textInput = document.getElementById('textInput');

function addKeywordListener(element){
    element.addEventListener('click', (e) => {
        if(element.classList.contains('select-mode')){
            _query_js__WEBPACK_IMPORTED_MODULE_0__.removeKeyword(element.id);
            element.remove();
        }
        else{
            element.classList.add('select-mode');
        }
    });
    element.addEventListener('mouseleave', (e) => {
        element.classList.remove('select-mode');
    });
}

function addKeyword(){
    if(textInput.value === ''){
        return;
    }
    const elementID = _query_js__WEBPACK_IMPORTED_MODULE_0__.addKeyword(textInput.value);
    let keywordElement = _query_js__WEBPACK_IMPORTED_MODULE_0__.generateSingleHTML(textInput.value, true, elementID);
    addKeywordListener(keywordElement);
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

_stt_js__WEBPACK_IMPORTED_MODULE_4__.report.addEventListener('result', (e) => {
    textInput.value = e.detail;
})

// initializing all buttons
voiceInputButton.addEventListener('click', () => {
    if(voiceInputButton.classList.contains('recording')){
        voiceInputButton.classList.remove('recording');
        _stt_js__WEBPACK_IMPORTED_MODULE_4__.stop();
    }  
    else{
        voiceInputButton.classList.add('recording');
        if(textInput.value !== '') addKeyword();
        _stt_js__WEBPACK_IMPORTED_MODULE_4__.start();
    }
});

plusButton.addEventListener('click', addKeyword);

sendButton.addEventListener('click', sendKeyword);

cancelButton.addEventListener('click', () => {clearPopUp(); reset()});

refreshButton.addEventListener('click', () => refreshRecommendation(signal));

submitButton.addEventListener('click', () => {
    if(recommendationList === undefined || !_display_js__WEBPACK_IMPORTED_MODULE_1__.state.popUp) return;
    askQuestion();
});

textInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        if(textInput.value === ''){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxX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c3R5bGUuY3NzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL2FpLmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9kaXNwbGF5LmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9xdWVyeS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvc3R0LmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy90dHMuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGZvbnQtZmFtaWx5OiAnTGF0byc7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogbm9uZTtcbn1cblxuOnJvb3R7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5ib2R5LCBodG1se1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA3ZW07XG59XG5cbmhlYWRlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcbn1cblxuaGVhZGVyID4gZGl2LmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXIgaDF7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5oZWFkZXIgYnV0dG9ue1xuICAgIHRvcDogMC40ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcbn1cblxuYnV0dG9uIHN2ZyBwYXRoI0luZm8tU3F1YXJlLTJ7XG4gICAgZmlsbDogYmxhY2s7XG59XG5cbmJ1dHRvbjpob3ZlciBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xuICAgIGZpbGw6ICMyRDY4REM7XG59XG5cbm1haW57XG4gICAgcGFkZGluZzogMCAyZW07XG59XG5cbnN0cm9uZ3tcbiAgICBmb250LXdlaWdodDogOTAwO1xufVxuXG5kaXYuY2hhdHNlY3Rpb257XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLnVzZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLmFpe1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG5kaXYuY2hhdHNlY3Rpb24gaDN7XG4gICAgY29sb3I6ICM4RThEOTQ7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC44MjdweDsgXG4gICAgbWFyZ2luLWxlZnQ6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uIGgzID4gYnV0dG9ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdG9wOiAwLjNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDEuMmVtO1xufVxuXG5kaXYuY2hhdHNlY3Rpb24ubG9hZGVkIGgzID4gYnV0dG9ue1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uIGgzID4gYnV0dG9uID4gc3Zne1xuICAgIGZpbHRlcjogaW52ZXJ0KDU5JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDIzMCUpIGh1ZS1yb3RhdGUoMjA5ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTQlKTtcbiAgICBoZWlnaHQ6IDEuNGVtO1xufVxuXG5kaXYuY2hhdHNlY3Rpb24udXNlciBoMyA+IGJ1dHRvbjpob3ZlciBzdmcsXG5kaXYuY2hhdHNlY3Rpb24udXNlci5wbGF5aW5nIGgzID4gYnV0dG9uIHN2Z3tcbiAgICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDUlKSBzYXR1cmF0ZSgxMjE0JSkgaHVlLXJvdGF0ZSgyMTFkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4OSUpO1xufVxuXG5kaXYuY2hhdHNlY3Rpb24uYWkgaDMgPiBidXR0b246aG92ZXIgc3ZnLFxuZGl2LmNoYXRzZWN0aW9uLmFpLnBsYXlpbmcgaDMgPiBidXR0b24gc3Zne1xuICAgIGZpbHRlcjogaW52ZXJ0KDQ0JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSg1NDAyJSkgaHVlLXJvdGF0ZSgxOTZkZWcpIGJyaWdodG5lc3MoODQlKSBjb250cmFzdCgxMDclKTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLnVzZXIucGxheWluZyBoM3tcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjMjYyNTJBO1xufVxuXG5kaXYuY2hhdHNlY3Rpb24uYWkucGxheWluZyBoM3tcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiAjMkQ2OERDO1xufVxuXG5cbmRpdi5jaGF0Ym94e1xuICAgIGNvbG9yOiAjRkJGQkZGO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXgtd2lkdGg6IDc1Y2g7XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnR7XG4gICAgcGFkZGluZzogMWVtIDAgMWVtO1xuICAgIG1pbi13aWR0aDogMTVjaDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGZsZXg6IDE7XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgKjpub3QoOmZpcnN0LWNoaWxkKXtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCBvbCwgXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IHVse1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmxlZnQtYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5yaWdodC1ib3h7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuZGl2Lm1pZGRsZS1sZWZ0LCBkaXYubWlkZGxlLXJpZ2h0e1xuICAgIHdpZHRoOiAxZW07XG4gICAgZmxleDogMTtcbn1cblxuZGl2LnVwcGVyLWxlZnQsIFxuZGl2Lmxvd2VyLWxlZnQsIFxuZGl2LnVwcGVyLXJpZ2h0LCBcbmRpdi5sb3dlci1yaWdodHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xufVxuXG5kaXYudXBwZXItbGVmdHtcbiAgICBib3JkZXItcmFkaXVzOiAxZW0gMHB4IDBweCAwcHg7IFxufVxuZGl2LnVwcGVyLXJpZ2h0e1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxZW0gMHB4IDBweDtcbn1cbmRpdi5sb3dlci1yaWdodHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMGVtIDFlbSAwcHg7XG59XG5kaXYubG93ZXItbGVmdHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMGVtIDBweCAxZW07XG59XG5cbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYubGVmdC1ib3ggPiBkaXYsXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LnJpZ2h0LWJveCA+IGRpdiwgXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LmNvbnRlbnRcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNTJBO1xufVxuXG5kaXYuY2hhdGJveC5haSA+IGRpdi5sZWZ0LWJveCA+IGRpdixcbmRpdi5jaGF0Ym94LmFpID4gZGl2LnJpZ2h0LWJveCA+IGRpdixcbmRpdi5jaGF0Ym94LmFpID4gZGl2LmNvbnRlbnRcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xufVxuXG5kaXYuY29udGVudCBkaXZ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmRpdi5jaGF0Ym94IHN2Z3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxcHg7XG4gICAgd2lkdGg6IDEuNWVtO1xufVxuXG5kaXYuY2hhdGJveC5haSBzdmd7XG4gICAgbGVmdDogLTFweDtcbn1cblxuZGl2LmNoYXRib3gudXNlciBzdmd7XG4gICAgcmlnaHQ6IC0xcHg7XG59XG5cblxuLyogSW5wdXQgU2VjdGlvbiAqL1xuXG5zZWN0aW9uI2lucHV0Q29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBnYXA6IDAuNmVtO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XG4gICAgcGFkZGluZzogMS4yZW0gMS41ZW0gMS4yZW07XG59XG5cbnNlY3Rpb24jaW5wdXRDb250YWluZXIgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA0OC41cHggMTBweCAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbn1cblxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b24gPiBzdmd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMC4xZW07XG4gICAgcmlnaHQ6IDAuMWVtO1xuICAgIHdpZHRoOiAyLjJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogNS40MTdweCAxMC44MzNweDtcbn1cblxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b24ucmVjb3JkaW5nLFxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b24ucmVjb3JkaW5nOmhvdmVye1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNTJBO1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXJ7XG4gICAgZmxleDogMTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gdGV4dGFyZWF7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIGNvbG9yOiAjRkJGQkZGO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHBhZGRpbmc6IDAuNmVtIDAuNWVtIDAuNGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJENjhEQztcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xufVxuXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgPiBkaXYja2V5d29yZENvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcbn1cblxuLmtleXdvcmR7XG4gICAgY29sb3I6ICNGQkZCRkY7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmc6IDAuM2VtIDAuOGVtO1xuICAgIHdpZHRoOiBtYXgoNWNoLCBmaXQtY29udGVudCk7XG4gICAgbWFyZ2luOiAwIDAuM2VtIDAuMTVlbSAwO1xuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XG4gICAgYm9yZGVyLXJhZGl1czogMC43ZW07XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQgLmtleXdvcmQtY2xvc2V7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xuICAgIGNvbG9yOiBoc2woMjIwLCA3MSUsIDQ4JSk7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2RlOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMjAlKTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGUgLmtleXdvcmQtY2xvc2V7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjRkJGQkZGO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgb3BhY2l0eTogMTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3NlIHN2Z3tcbiAgICB0b3A6IDAuMWVtO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG59XG5cbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiA1LjRlbTtcbiAgICBnYXA6IDAuNGVtO1xufVxuXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXIgPiBidXR0b257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICB3aWR0aDogMi41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbn1cblxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyIHN2ZyB7XG4gICAgd2lkdGg6IDEuMmVtO1xufVxuXG4vKiBQb3AgVXAgU2VjdGlvbiAqL1xuXG4uaGlkZGVue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApICFpbXBvcnRhbnQ7XG59XG5cbmRpdiNkYXJrT3ZlcmxheXtcbiAgICB6LWluZGV4OiAyMDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjIwLCA2OSUsIDUlLCAwLjUpO1xufVxuXG4uY2VudGVyLXBvcHVwe1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwe1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHdpZHRoOiBtaW4oODB2dywgNjBjaCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgei1pbmRleDogMzAwO1xuICAgIHBhZGRpbmc6IDEuMmVtIDFlbSAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0OSkgaW5zZXQ7XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwID4gaDN7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwID4gZGl2e1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5kaXYucmVjb21tZW5kYXRpb257XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogI0ZCRkJGRjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuN2VtO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xufVxuXG5kaXYucmVjb21tZW5kYXRpb246bm90KDpsYXN0LWNoaWxkKXtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9uLnNlbGVjdGVke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMzAlKTtcbiAgICBvdXRsaW5lOiBoc2woMjIwLCA3MSUsIDIwJSkgMnB4IHNvbGlkO1xufVxuXG5kaXYjYWN0aW9uQnV0dG9uc3tcbiAgICBtYXJnaW4tdG9wOiAwLjhlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYnV0dG9uI3JlZnJlc2hCdXR0b257XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuYnV0dG9uI3JlZnJlc2hCdXR0b246aG92ZXJ7XG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuLmxvYWRlZCBidXR0b24jcmVmcmVzaEJ1dHRvbntcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnMgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnN7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuZGl2I2NlbnRlckJ1dHRvbnMgPiBidXR0b257XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiAjRkJGQkZGO1xuICAgIHdpZHRoOiAxMmNoO1xuICAgIGhlaWdodDogMS44ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpKTtcbn1cblxuXG4vKiBBbmltYXRpb24gUGFydCAqL1xuXG4jcmVjb21tZW5kYXRpb25Qb3BVcCAuZG90LWZsYXNoaW5ne1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmRvdC1mbGFzaGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBjb2xvcjogIzJENjhEQztcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4ubG9hZGVkIC5kb3QtZmxhc2hpbmd7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmRvdC1mbGFzaGluZzo6YmVmb3JlLCAuZG90LWZsYXNoaW5nOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbn1cblxuLmRvdC1mbGFzaGluZzo6YmVmb3JlIHtcbiAgICBsZWZ0OiAtMTVweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgY29sb3I6ICMyRDY4REM7XG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xuICAgIGxlZnQ6IDE1cHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGNvbG9yOiAjMkQ2OERDO1xuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcbn1cbiAgXG5Aa2V5ZnJhbWVzIGRvdC1mbGFzaGluZyB7XG4gICAgMCUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICB9XG4gICAgNTAlLCAxMDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUyLCAxMjgsIDI1NSwgMC4yKTtcbiAgICB9XG59XG5cbmRpdi5jb250ZW50ID4gZGl2LmRvdC1mbGFzaGluZy5ibHVle1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogMTBweDtcbn1cblxuLmRvdC1mbGFzaGluZy5ibHVlLCAuZG90LWZsYXNoaW5nLmJsdWU6OmJlZm9yZSwgLmRvdC1mbGFzaGluZy5ibHVlOjphZnRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBkb3QtZmxhc2hpbmctYmx1ZTtcbn1cblxuQGtleWZyYW1lcyBkb3QtZmxhc2hpbmctYmx1ZSB7XG4gICAgMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xuICAgIH1cbiAgICA1MCUsIDEwMCUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDgwJSk7XG4gICAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJ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QUN6QixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO01BQ0UseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSwwQ0FBMEM7SUFDNUM7QUFDSjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLG9DQUFvQztJQUN4QztBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IG5vbmU7XFxufVxcblxcbjpyb290e1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5LCBodG1se1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZy10b3A6IDVlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDdlbTtcXG59XFxuXFxuaGVhZGVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHotaW5kZXg6IDEwMDtcXG4gICAgcGFkZGluZzogMWVtIDJlbTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcXG59XFxuXFxuaGVhZGVyID4gZGl2LmNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgaDF7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG5oZWFkZXIgYnV0dG9ue1xcbiAgICB0b3A6IDAuNGVtO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xcbn1cXG5cXG5idXR0b24gc3ZnIHBhdGgjSW5mby1TcXVhcmUtMntcXG4gICAgZmlsbDogYmxhY2s7XFxufVxcblxcbmJ1dHRvbjpob3ZlciBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xcbiAgICBmaWxsOiAjMkQ2OERDO1xcbn1cXG5cXG5tYWlue1xcbiAgICBwYWRkaW5nOiAwIDJlbTtcXG59XFxuXFxuc3Ryb25ne1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb257XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uLnVzZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIHBhZGRpbmctbGVmdDogMWVtO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24uYWl7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xcbn1cXG5kaXYuY2hhdHNlY3Rpb24gaDN7XFxuICAgIGNvbG9yOiAjOEU4RDk0O1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBsZXR0ZXItc3BhY2luZzogMC44MjdweDsgXFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24gaDMgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHRvcDogMC4zZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAxLjJlbTtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uLmxvYWRlZCBoMyA+IGJ1dHRvbntcXG4gICAgZGlzcGxheTogaW5saW5lO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24gaDMgPiBidXR0b24gPiBzdmd7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDU5JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDIzMCUpIGh1ZS1yb3RhdGUoMjA5ZGVnKSBicmlnaHRuZXNzKDkzJSkgY29udHJhc3QoOTQlKTtcXG4gICAgaGVpZ2h0OiAxLjRlbTtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uLnVzZXIgaDMgPiBidXR0b246aG92ZXIgc3ZnLFxcbmRpdi5jaGF0c2VjdGlvbi51c2VyLnBsYXlpbmcgaDMgPiBidXR0b24gc3Zne1xcbiAgICBmaWx0ZXI6IGludmVydCgxMCUpIHNlcGlhKDUlKSBzYXR1cmF0ZSgxMjE0JSkgaHVlLXJvdGF0ZSgyMTFkZWcpIGJyaWdodG5lc3MoOTclKSBjb250cmFzdCg4OSUpO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24uYWkgaDMgPiBidXR0b246aG92ZXIgc3ZnLFxcbmRpdi5jaGF0c2VjdGlvbi5haS5wbGF5aW5nIGgzID4gYnV0dG9uIHN2Z3tcXG4gICAgZmlsdGVyOiBpbnZlcnQoNDQlKSBzZXBpYSgxMyUpIHNhdHVyYXRlKDU0MDIlKSBodWUtcm90YXRlKDE5NmRlZykgYnJpZ2h0bmVzcyg4NCUpIGNvbnRyYXN0KDEwNyUpO1xcbn1cXG5cXG5kaXYuY2hhdHNlY3Rpb24udXNlci5wbGF5aW5nIGgze1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogIzI2MjUyQTtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uLmFpLnBsYXlpbmcgaDN7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbn1cXG5cXG5cXG5kaXYuY2hhdGJveHtcXG4gICAgY29sb3I6ICNGQkZCRkY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgICBtYXgtd2lkdGg6IDc1Y2g7XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDFlbSAwIDFlbTtcXG4gICAgbWluLXdpZHRoOiAxNWNoO1xcbiAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50ICo6bm90KDpmaXJzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IG9sLCBcXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50IHVse1xcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5sZWZ0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LnJpZ2h0LWJveHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuZGl2Lm1pZGRsZS1sZWZ0LCBkaXYubWlkZGxlLXJpZ2h0e1xcbiAgICB3aWR0aDogMWVtO1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaXYudXBwZXItbGVmdCwgXFxuZGl2Lmxvd2VyLWxlZnQsIFxcbmRpdi51cHBlci1yaWdodCwgXFxuZGl2Lmxvd2VyLXJpZ2h0e1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgd2lkdGg6IDFlbTtcXG59XFxuXFxuZGl2LnVwcGVyLWxlZnR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbSAwcHggMHB4IDBweDsgXFxufVxcbmRpdi51cHBlci1yaWdodHtcXG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDFlbSAwcHggMHB4O1xcbn1cXG5kaXYubG93ZXItcmlnaHR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwZW0gMWVtIDBweDtcXG59XFxuZGl2Lmxvd2VyLWxlZnR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwZW0gMHB4IDFlbTtcXG59XFxuXFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5sZWZ0LWJveCA+IGRpdixcXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LnJpZ2h0LWJveCA+IGRpdiwgXFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5jb250ZW50XFxue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNTJBO1xcbn1cXG5cXG5kaXYuY2hhdGJveC5haSA+IGRpdi5sZWZ0LWJveCA+IGRpdixcXG5kaXYuY2hhdGJveC5haSA+IGRpdi5yaWdodC1ib3ggPiBkaXYsXFxuZGl2LmNoYXRib3guYWkgPiBkaXYuY29udGVudFxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG59XFxuXFxuZGl2LmNvbnRlbnQgZGl2e1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGl2LmNoYXRib3ggc3Zne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMXB4O1xcbiAgICB3aWR0aDogMS41ZW07XFxufVxcblxcbmRpdi5jaGF0Ym94LmFpIHN2Z3tcXG4gICAgbGVmdDogLTFweDtcXG59XFxuXFxuZGl2LmNoYXRib3gudXNlciBzdmd7XFxuICAgIHJpZ2h0OiAtMXB4O1xcbn1cXG5cXG5cXG4vKiBJbnB1dCBTZWN0aW9uICovXFxuXFxuc2VjdGlvbiNpbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICAgIGdhcDogMC42ZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XFxuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtIDEuMmVtO1xcbn1cXG5cXG5zZWN0aW9uI2lucHV0Q29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1ZW07XFxuICAgIGhlaWdodDogNWVtO1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA0OC41cHggMTBweCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ2OERDO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG59XFxuXFxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b24gPiBzdmd7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMC4xZW07XFxuICAgIHJpZ2h0OiAwLjFlbTtcXG4gICAgd2lkdGg6IDIuMmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDUuNDE3cHggMTAuODMzcHg7XFxufVxcblxcbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9uLnJlY29yZGluZyxcXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbi5yZWNvcmRpbmc6aG92ZXJ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcXG59XFxuXFxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVye1xcbiAgICBmbGV4OiAxO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgPiB0ZXh0YXJlYXtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgICBjb2xvcjogI0ZCRkJGRjtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBwYWRkaW5nOiAwLjZlbSAwLjVlbSAwLjRlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciB0ZXh0YXJlYTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6Zm9jdXN7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciA+IGRpdiNrZXl3b3JkQ29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XFxufVxcblxcbi5rZXl3b3Jke1xcbiAgICBjb2xvcjogI0ZCRkJGRjtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcGFkZGluZzogMC4zZW0gMC44ZW07XFxuICAgIHdpZHRoOiBtYXgoNWNoLCBmaXQtY29udGVudCk7XFxuICAgIG1hcmdpbjogMCAwLjNlbSAwLjE1ZW0gMDtcXG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcXG4gICAgYm9yZGVyLXJhZGl1czogMC43ZW07XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3Jke1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3Nle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xcbiAgICBjb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZTpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAyMCUpO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZSAua2V5d29yZC1jbG9zZXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogI0ZCRkJGRjtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3NlIHN2Z3tcXG4gICAgdG9wOiAwLjFlbTtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxZW07XFxufVxcblxcbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDUuNGVtO1xcbiAgICBnYXA6IDAuNGVtO1xcbn1cXG5cXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXIgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAyLjVlbTtcXG4gICAgd2lkdGg6IDIuNWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG59XFxuXFxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyIHN2ZyB7XFxuICAgIHdpZHRoOiAxLjJlbTtcXG59XFxuXFxuLyogUG9wIFVwIFNlY3Rpb24gKi9cXG5cXG4uaGlkZGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKSAhaW1wb3J0YW50O1xcbn1cXG5cXG5kaXYjZGFya092ZXJsYXl7XFxuICAgIHotaW5kZXg6IDIwMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsYSgyMjAsIDY5JSwgNSUsIDAuNSk7XFxufVxcblxcbi5jZW50ZXItcG9wdXB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwe1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgd2lkdGg6IG1pbig4MHZ3LCA2MGNoKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIHotaW5kZXg6IDMwMDtcXG4gICAgcGFkZGluZzogMS4yZW0gMWVtIDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNDkpIGluc2V0O1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGgze1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBkaXZ7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5kaXYucmVjb21tZW5kYXRpb257XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogI0ZCRkJGRjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgcGFkZGluZzogMC41ZW0gMC43ZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9uOm5vdCg6bGFzdC1jaGlsZCl7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbn1cXG5cXG5kaXYucmVjb21tZW5kYXRpb246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9uLnNlbGVjdGVke1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDMwJSk7XFxuICAgIG91dGxpbmU6IGhzbCgyMjAsIDcxJSwgMjAlKSAycHggc29saWQ7XFxufVxcblxcbmRpdiNhY3Rpb25CdXR0b25ze1xcbiAgICBtYXJnaW4tdG9wOiAwLjhlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxZW07XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiNyZWZyZXNoQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbmJ1dHRvbiNyZWZyZXNoQnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG4ubG9hZGVkIGJ1dHRvbiNyZWZyZXNoQnV0dG9ue1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuZGl2I2NlbnRlckJ1dHRvbnMgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbmRpdiNjZW50ZXJCdXR0b25ze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbmRpdiNjZW50ZXJCdXR0b25zID4gYnV0dG9ue1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiAjRkJGQkZGO1xcbiAgICB3aWR0aDogMTJjaDtcXG4gICAgaGVpZ2h0OiAxLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XFxufVxcblxcblxcbi8qIEFuaW1hdGlvbiBQYXJ0ICovXFxuXFxuI3JlY29tbWVuZGF0aW9uUG9wVXAgLmRvdC1mbGFzaGluZ3tcXG4gICAgbWFyZ2luOiBhdXRvO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGxpbmVhciBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcXG59XFxuXFxuLmxvYWRlZCAuZG90LWZsYXNoaW5ne1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxufVxcblxcbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSB7XFxuICAgIGxlZnQ6IC0xNXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG59XFxuXFxuLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGNvbG9yOiAjMkQ2OERDO1xcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xcbn1cXG4gIFxcbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nIHtcXG4gICAgMCUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIH1cXG4gICAgNTAlLCAxMDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTI4LCAyNTUsIDAuMik7XFxuICAgIH1cXG59XFxuXFxuZGl2LmNvbnRlbnQgPiBkaXYuZG90LWZsYXNoaW5nLmJsdWV7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgd2lkdGg6IDEwcHg7XFxufVxcblxcbi5kb3QtZmxhc2hpbmcuYmx1ZSwgLmRvdC1mbGFzaGluZy5ibHVlOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YWZ0ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBkb3QtZmxhc2hpbmctYmx1ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBkb3QtZmxhc2hpbmctYmx1ZSB7XFxuICAgIDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XFxuICAgIH1cXG4gICAgNTAlLCAxMDAlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgODAlKTtcXG4gICAgfVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXdpb2F3a29hYWt3b2EgPSBcIlNwTGlUNjYzTlNQVEM1cXhwNTVlU2xvNHBUM0JsYmtGSldCOFBIV3ExdnNSdlNqVkFTMEZpXCI7XG5cbmNvbnN0IHJlc3BvbnNlMSA9IFtcbiAgICBcIkluaSBwZXJ0YW55YWFuIDFcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIDJcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIDNcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIDRcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIDVcIixcbl07XG5cbmNvbnN0IHJlc3BvbnNlMiA9IFtcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAxXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgMlwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDNcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCA0XCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgNVwiLFxuXVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVtbygpe1xuICAgIGxldCByZXN1bHQgPSBhd2FpdCBnZXRSZXBseShbXG4gICAgICAgIHtyb2xlOiBcInVzZXJcIiwgY29udGVudDogXCJIYWkgR1BUIVwifVxuICAgIF0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGF5KHRpbWUpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRSZXBseShtZXNzYWdlKXtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyIHNrLSR7YXdpb2F3a29hYWt3b2Euc2xpY2UoNSl9YCxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlLFxuICAgICAgICB9KSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9ucycsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgcmV0dXJuIGRhdGFbXCJjaG9pY2VzXCJdWzBdW1wibWVzc2FnZVwiXVtcImNvbnRlbnRcIl07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZVJlY29tbWVuZGF0aW9uKGtleXdvcmRMaXN0KXtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMzsgaSsrKXtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRSZXBseShbXG4gICAgICAgICAgICAgICAge3JvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFwiVXNlciBha2FuIG1lbWJlcmlrYW4ga2F0YSBrdW5jaSB5YW5nIGRpcGlzYWhrYW4gb2xlaCBrb21hLFxcXG4gICAgICAgICAgICAgICAga2FtdSBoYXJ1cyBtZW1iZXJpa2FuIGxpc3QgNSBwZXJ0YW55YWFuIHNlZGVyaGFuYSB5YW5nIHJlbGV2YW4gZGVuZ2FuIGthdGEga3VuY2kgdGVyc2VidXQgdGFucGEga2F0YSBwZW5nYW50YXIuXFxcbiAgICAgICAgICAgICAgICBLYXRhIGt1bmNpIGJpc2EgbWVtaWxpa2kga2VzYWxhaGFuIHBlbnVsaXNhbiBkYW4ga2FtdSBoYXJ1cyBtZW5nYW50aXNpcGFzaW55YSFcIn0sXG4gICAgICAgICAgICAgICAge3JvbGU6IFwidXNlclwiLCBjb250ZW50OiBrZXl3b3JkTGlzdC5qb2luKCcsICcpfSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgY29uc3QgZmluYWxSZXNwb25zZSA9IHJlc3BvbnNlLnNwbGl0KC9cXG4vKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKGxpbmUpID0+IC9eXFxkJC8udGVzdChsaW5lWzBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKChsaW5lKSA9PiBsaW5lLnNsaWNlKDMpKTtcbiAgICAgICAgICAgIGlmKGZpbmFsUmVzcG9uc2UubGVuZ3RoICE9IDUpIHRocm93IG5ldyBFcnJvcihcIlBhcnNpbmcgUHJvYmxlbVwiKTtcbiAgICAgICAgICAgIHJldHVybiBmaW5hbFJlc3BvbnNlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYWlsZWQsIHRyeWluZy4uLlwiKTtcbiAgICAgICAgICAgIGF3YWl0IGRlbGF5KDIwMCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgUmVxdWVzdCcpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoUmVjb21tZW5kYXRpb24oKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UyKTtcbiAgICAgICAgfSwgMTAwMClcbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFza1F1ZXN0aW9uKHF1ZXN0aW9uKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmVwbHkoW1xuICAgICAgICAgICAge3JvbGU6IFwic3lzdGVtXCIsIGNvbnRlbnQ6IFwiVXNlciBha2FuIG1lbWJlcmlrYW4gcGVydGFueWFhbi4gS2FtdSBoYXJ1cyBtZW1iZXJpa2FuIGphd2FiYW4gZGVuZ2FuIGthdGEta2F0YSBkYW4gcGVuamVsYXNhbiB5YW5nIG11ZGFoIGRpcGFoYW1pXCJ9LFxuICAgICAgICAgICAge3JvbGU6IFwidXNlclwiLCBjb250ZW50OiBgJHtxdWVzdGlvbn1gfVxuICAgICAgICBdKTtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyByZXNwb25kXCIpXG4gICAgfVxufSIsImV4cG9ydCBsZXQgc3RhdGUgPSB7XG4gICAgcG9wVXA6IGZhbHNlLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9jdXNFbGVtZW50KHNlbGVjdG9yKXtcbiAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHNlbGVjdGVkLmZvY3VzKClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEtleXdvcmQobmV3S2V5d29yZCl7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXl3b3JkQ29udGFpbmVyJyk7XG4gICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdLZXl3b3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyS2V5d29yZCgpe1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna2V5d29yZENvbnRhaW5lcicpO1xuICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJSZWNvbW1lbmRhdGlvbktleXdvcmQoKXtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcicpO1xuICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheSgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrT3ZlcmxheScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BvcFVwUmVjb21tZW5kYXRpb24oa2V5d29yZEVsZW1lbnRMaXN0KXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHN0YXRlLnBvcFVwID0gdHJ1ZTtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcicpO1xuICAgIGtleXdvcmRFbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGtleXdvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZVJlY29tbWVuZGF0aW9uTG9hZGVkKHBhcmFtKXtcbiAgICBjb25zdCByZWNvbW1lbmRhdGlvblBvcFVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUG9wVXAnKTtcbiAgICBpZihwYXJhbSA9PSBcImFkZFwiKSByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIGVsc2UgaWYocGFyYW0gPT0gXCJyZW1vdmVcIikgcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZWQnKTtcbiAgICBlbHNlIHJlY29tbWVuZGF0aW9uUG9wVXAuY2xhc3NMaXN0LnRvZ2dsZSgnbG9hZGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRSZWNvbW1lbmRhdGlvbihlbGVtZW50TGlzdCl7XG4gICAgdG9nZ2xlUmVjb21tZW5kYXRpb25Mb2FkZWQoJ2FkZCcpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbiAgICBlbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJSZWNvbW1lbmRhdGlvbigpe1xuICAgIHRvZ2dsZVJlY29tbWVuZGF0aW9uTG9hZGVkKCdyZW1vdmUnKTtcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyJyk7XG4gICAgd2hpbGUocXVlc3Rpb25Db250YWluZXIuZmlyc3RDaGlsZCkgcXVlc3Rpb25Db250YWluZXIucmVtb3ZlQ2hpbGQocXVlc3Rpb25Db250YWluZXIuZmlyc3RDaGlsZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJlY29tbWVuZGF0aW9uRWxlbWVudHMocmVjb21tZW5kYXRpb25MaXN0KXtcbiAgICBsZXQgZWxlbWVudExpc3QgPSBbXTtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1F1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3JlY29tbWVuZGF0aW9uJyk7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmlkID0gYHJlY29tbWVuZGF0aW9uLSR7aW5kZXh9YDtcbiAgICAgICAgbmV3UXVlc3Rpb24uaW5uZXJIVE1MID0gcXVlc3Rpb247XG4gICAgICAgIGVsZW1lbnRMaXN0LnB1c2gobmV3UXVlc3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJlY29tbWVuZGF0aW9uKGluZGV4KXtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVjb21tZW5kYXRpb24tJHtpbmRleH1gKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVuc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvbW1lbmRhdGlvbi0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgc3RhdGUucG9wVXAgPSBmYWxzZTtcbiAgICBjbGVhclJlY29tbWVuZGF0aW9uKCk7XG4gICAgY2xlYXJSZWNvbW1lbmRhdGlvbktleXdvcmQoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVzZXJDaGF0KG1lc3NhZ2UsIGNoYXRJbmRleCl7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBjb25zdCBjaGF0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoYXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjaGF0c2VjdGlvblwiLCBcInVzZXJcIiwgXCJsb2FkZWRcIik7XG4gICAgY2hhdEVsZW1lbnQuaWQgPSBgY2hhdC0ke2NoYXRJbmRleH1gO1xuICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5BbmRhPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNoYXRTcGVhay0ke2NoYXRJbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzFcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMzEgMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI2LjUyNzggMy44ODA4M0MyNi4yMjQgMy40Nzg0OSAyNS42MjM0IDMuMzc5MTIgMjUuMTg2NCAzLjY1ODg5QzI0Ljc0OTUgMy45Mzg2NSAyNC42NDE1IDQuNDkxNjEgMjQuOTQ1NCA0Ljg5Mzk2QzI2Ljc1ODYgNy4yOTQ5OCAyNy43ODA5IDEwLjQ3OTMgMjcuNzgwOSAxMy45MzI1QzI3Ljc4MDkgMTcuMzg2IDI2Ljc1ODUgMjAuNTcxNSAyNC45NDU0IDIyLjk3MjNDMjQuNjQxNSAyMy4zNzQ3IDI0Ljc0OTUgMjMuOTI3NiAyNS4xODY0IDI0LjIwNzRDMjUuNjIzNCAyNC40ODcxIDI2LjIyNCAyNC4zODc4IDI2LjUyNzggMjMuOTg1NEMyOC41NzIxIDIxLjI3ODUgMjkuNzA4MyAxNy43Mzg2IDI5LjcwODMgMTMuOTMyNUMyOS43MDgzIDEwLjEyNjcgMjguNTcyMyA2LjU4Nzk4IDI2LjUyNzggMy44ODA4M1pNMTMuNjAyNyAzLjgwNDA5TDEzLjgwMjggMy43OTcwM0wxMy45ODUxIDMuNzk4ODJDMTUuMjg5NyAzLjg1NjQ4IDE2LjQwNTEgNC43NDIwMiAxNi44MzIxIDYuMDU1MThDMTYuOTUxMSA2LjQ3Mzg3IDE3LjAxODMgNi44ODMzNCAxNy4wOTY2IDcuNTQ5OTRMMTcuMjAwNyA4LjQyMzVDMTcuNDEwNCAxMC40NDg1IDE3LjQwMzcgMTguNDAzIDE3LjE4MDcgMjAuMDQyOUwxNy4wNDI0IDIxLjIxODhDMTYuOTg3NiAyMS42MTU0IDE2LjkyNTIgMjEuOTIwNSAxNi44MjMgMjIuMjcwNkMxNi4zODE3IDIzLjYyNzMgMTUuMTY0MSAyNC41MzYzIDEzLjgxNzggMjQuNDk4OUMxMy4xMzI1IDI0LjUxNDQgMTIuMjk3OSAyNC4xOTM0IDExLjcxNzQgMjMuNzQzOUw3LjE0MzAyIDIwLjMyMjRMNC43ODg3MyAyMC4zMjNDMy4wNTQzNyAyMC4zMjMgMS44MTkwNyAxOS4yNTEgMS41MTU2NCAxNy42MTU3TDEuNDgxMzkgMTcuMzk5M0MxLjIyNDQ2IDE1LjcxNzcgMS4yMzI0NCAxMi42NjA1IDEuNDgxMjggMTAuODIyOEMxLjczMDMgOS4xODM0MiAzLjAzMDYxIDcuOTczOTkgNC43ODg3MyA3Ljk3Mzk5TDcuMTQxNzMgNy45NzMzM0wxMS42MDIgNC42MjY4MkMxMi4xNDIgNC4yMDU2NyAxMi45NDc4IDMuODU5MjYgMTMuNjAyNyAzLjgwNDA5Wk0xMy44MjIyIDUuNTcwODNMMTMuNzczMyA1LjU3MUMxMy42MTc4IDUuNTY3OTEgMTMuMTE4IDUuNzcwMiAxMi44MzM4IDUuOTkxNjNMOC4wOTM5NSA5LjU0OTA3QzcuOTIxOTggOS42NzgxNCA3LjcwNjkyIDkuNzQ4NjIgNy40ODUwNiA5Ljc0ODYySDQuNzg4NzNDNC4wNTg1MiA5Ljc0ODYyIDMuNTEzNjEgMTAuMjU1NCAzLjM5MTk5IDExLjA1NTRDMy4xNjUyNyAxMi43MzA1IDMuMTU3NjkgMTUuNjMxNyAzLjM5MjM4IDE3LjE2ODhDMy41MTQyIDE4LjA5MzYgNC4wMDc1NiAxOC41NDgzIDQuNzg4NzMgMTguNTQ4M0g3LjQ4NTA2QzcuNzA2MzQgMTguNTQ4MyA3LjkyMDg3IDE4LjYxODUgOC4wOTI2MyAxOC43NDY5TDEyLjk0NTEgMjIuMzc1OUMxMy4yMDM0IDIyLjU3NTkgMTMuNjAwNSAyMi43Mjg2IDEzLjgyMjIgMjIuNzI0OUMxNC4zMDA5IDIyLjczNzggMTQuNzczOSAyMi4zODQ2IDE0Ljk2OSAyMS43ODYyQzE1LjA3MDQgMjEuNDM3OCAxNS4xMjMyIDIxLjExMTggMTUuMTg4NyAyMC41MTI2TDE1LjIzMTQgMjAuMTIyOEwxNS4yNjc5IDE5LjgyNTJDMTUuNDc4MyAxOC4yNzc3IDE1LjQ3ODMgMTAuMDE5MiAxNS4yNjc2IDguNDY5MTNMMTUuMTMwNyA3LjM0NTE3QzE1LjA5ODQgNy4xMDc5OCAxNS4wNjcgNi45MjAwNiAxNS4wMzIxIDYuNzU4OTVMMTQuOTc2NyA2LjUzNDU2QzE0Ljc3MzkgNS45MTE4IDE0LjMwMDIgNS41NTc5OCAxMy44MjIyIDUuNTcwODNaTTIwLjc3NzggNy4yNzk2OUMyMS4yMTQ4IDYuOTk5OTUgMjEuODE1MyA3LjA5OTM1IDIyLjExOTEgNy41MDE3MUMyMy40MzE4IDkuMjQwMSAyNC4xNTg2IDExLjUwNDIgMjQuMTU4NiAxMy45MzMxQzI0LjE1ODYgMTYuMzYxOCAyMy40MzE5IDE4LjYyNDggMjIuMTE5MSAyMC4zNjM0QzIxLjgxNTMgMjAuNzY1NyAyMS4yMTQ4IDIwLjg2NTEgMjAuNzc3OCAyMC41ODU0QzIwLjM0MDggMjAuMzA1NiAyMC4yMzI4IDE5Ljc1MjcgMjAuNTM2NiAxOS4zNTAzQzIxLjYxODMgMTcuOTE3OCAyMi4yMzEyIDE2LjAwOTIgMjIuMjMxMiAxMy45MzMxQzIyLjIzMTIgMTEuODU2OCAyMS42MTgxIDkuOTQ3MDMgMjAuNTM2NiA4LjUxNDc1QzIwLjIzMjggOC4xMTIzOSAyMC4zNDA4IDcuNTU5NDQgMjAuNzc3OCA3LjI3OTY5WlwiIGZpbGw9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdGJveCB1c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjExNi41ODcgMTk2LjI0NiA5NS41ODEgOTkuMTA5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAyMDYuNTg3IDI5NS4zNTUgQyAxNTYuODgxIDI5NS4zNTUgMTE2LjU4NyAyNTUuMDYxIDExNi41ODcgMjA1LjM1NSBDIDExNi41ODcgMjAyLjI4IDExNi43NDEgMTk5LjI0MSAxMTcuMDQyIDE5Ni4yNDYgTCAxNzYuMzEyIDE5Ni4yNDYgQyAxNzMuMjA0IDIwNC45MzQgMTcxLjUxMSAyMTQuMjk0IDE3MS41MTEgMjI0LjA1IEMgMTcxLjUxMSAyNTQuMzQ2IDE4Ny44MzUgMjgwLjgzIDIxMi4xNjggMjk1LjE4NSBDIDIxMC4zMjIgMjk1LjI5OCAyMDguNDYxIDI5NS4zNTUgMjA2LjU4NyAyOTUuMzU1IFpcIiBzdHlsZT1cImZpbGw6IHJnYigzOCwgMzcsIDQyKTsgdHJhbnNmb3JtLW9yaWdpbjogMTY0LjM3N3B4IDI0NS44MDJweDtcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNoYXRFbGVtZW50KTtcbiAgICBzY3JvbGxJbnRvVG9wKGNoYXRFbGVtZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEdQVENoYXQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIGNvbnN0IGNoYXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hhdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNoYXRzZWN0aW9uXCIsIFwiYWlcIik7XG4gICAgY2hhdEVsZW1lbnQuaWQgPSBgY2hhdC0ke2NoYXRJbmRleH1gO1xuICAgIGNoYXRFbGVtZW50LmlubmVySFRNTCA9IGA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PYnJvbGluIEFJPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImNoYXRTcGVhay0ke2NoYXRJbmRleH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHdpZHRoPVwiMzFcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMzEgMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTI2LjUyNzggMy44ODA4M0MyNi4yMjQgMy40Nzg0OSAyNS42MjM0IDMuMzc5MTIgMjUuMTg2NCAzLjY1ODg5QzI0Ljc0OTUgMy45Mzg2NSAyNC42NDE1IDQuNDkxNjEgMjQuOTQ1NCA0Ljg5Mzk2QzI2Ljc1ODYgNy4yOTQ5OCAyNy43ODA5IDEwLjQ3OTMgMjcuNzgwOSAxMy45MzI1QzI3Ljc4MDkgMTcuMzg2IDI2Ljc1ODUgMjAuNTcxNSAyNC45NDU0IDIyLjk3MjNDMjQuNjQxNSAyMy4zNzQ3IDI0Ljc0OTUgMjMuOTI3NiAyNS4xODY0IDI0LjIwNzRDMjUuNjIzNCAyNC40ODcxIDI2LjIyNCAyNC4zODc4IDI2LjUyNzggMjMuOTg1NEMyOC41NzIxIDIxLjI3ODUgMjkuNzA4MyAxNy43Mzg2IDI5LjcwODMgMTMuOTMyNUMyOS43MDgzIDEwLjEyNjcgMjguNTcyMyA2LjU4Nzk4IDI2LjUyNzggMy44ODA4M1pNMTMuNjAyNyAzLjgwNDA5TDEzLjgwMjggMy43OTcwM0wxMy45ODUxIDMuNzk4ODJDMTUuMjg5NyAzLjg1NjQ4IDE2LjQwNTEgNC43NDIwMiAxNi44MzIxIDYuMDU1MThDMTYuOTUxMSA2LjQ3Mzg3IDE3LjAxODMgNi44ODMzNCAxNy4wOTY2IDcuNTQ5OTRMMTcuMjAwNyA4LjQyMzVDMTcuNDEwNCAxMC40NDg1IDE3LjQwMzcgMTguNDAzIDE3LjE4MDcgMjAuMDQyOUwxNy4wNDI0IDIxLjIxODhDMTYuOTg3NiAyMS42MTU0IDE2LjkyNTIgMjEuOTIwNSAxNi44MjMgMjIuMjcwNkMxNi4zODE3IDIzLjYyNzMgMTUuMTY0MSAyNC41MzYzIDEzLjgxNzggMjQuNDk4OUMxMy4xMzI1IDI0LjUxNDQgMTIuMjk3OSAyNC4xOTM0IDExLjcxNzQgMjMuNzQzOUw3LjE0MzAyIDIwLjMyMjRMNC43ODg3MyAyMC4zMjNDMy4wNTQzNyAyMC4zMjMgMS44MTkwNyAxOS4yNTEgMS41MTU2NCAxNy42MTU3TDEuNDgxMzkgMTcuMzk5M0MxLjIyNDQ2IDE1LjcxNzcgMS4yMzI0NCAxMi42NjA1IDEuNDgxMjggMTAuODIyOEMxLjczMDMgOS4xODM0MiAzLjAzMDYxIDcuOTczOTkgNC43ODg3MyA3Ljk3Mzk5TDcuMTQxNzMgNy45NzMzM0wxMS42MDIgNC42MjY4MkMxMi4xNDIgNC4yMDU2NyAxMi45NDc4IDMuODU5MjYgMTMuNjAyNyAzLjgwNDA5Wk0xMy44MjIyIDUuNTcwODNMMTMuNzczMyA1LjU3MUMxMy42MTc4IDUuNTY3OTEgMTMuMTE4IDUuNzcwMiAxMi44MzM4IDUuOTkxNjNMOC4wOTM5NSA5LjU0OTA3QzcuOTIxOTggOS42NzgxNCA3LjcwNjkyIDkuNzQ4NjIgNy40ODUwNiA5Ljc0ODYySDQuNzg4NzNDNC4wNTg1MiA5Ljc0ODYyIDMuNTEzNjEgMTAuMjU1NCAzLjM5MTk5IDExLjA1NTRDMy4xNjUyNyAxMi43MzA1IDMuMTU3NjkgMTUuNjMxNyAzLjM5MjM4IDE3LjE2ODhDMy41MTQyIDE4LjA5MzYgNC4wMDc1NiAxOC41NDgzIDQuNzg4NzMgMTguNTQ4M0g3LjQ4NTA2QzcuNzA2MzQgMTguNTQ4MyA3LjkyMDg3IDE4LjYxODUgOC4wOTI2MyAxOC43NDY5TDEyLjk0NTEgMjIuMzc1OUMxMy4yMDM0IDIyLjU3NTkgMTMuNjAwNSAyMi43Mjg2IDEzLjgyMjIgMjIuNzI0OUMxNC4zMDA5IDIyLjczNzggMTQuNzczOSAyMi4zODQ2IDE0Ljk2OSAyMS43ODYyQzE1LjA3MDQgMjEuNDM3OCAxNS4xMjMyIDIxLjExMTggMTUuMTg4NyAyMC41MTI2TDE1LjIzMTQgMjAuMTIyOEwxNS4yNjc5IDE5LjgyNTJDMTUuNDc4MyAxOC4yNzc3IDE1LjQ3ODMgMTAuMDE5MiAxNS4yNjc2IDguNDY5MTNMMTUuMTMwNyA3LjM0NTE3QzE1LjA5ODQgNy4xMDc5OCAxNS4wNjcgNi45MjAwNiAxNS4wMzIxIDYuNzU4OTVMMTQuOTc2NyA2LjUzNDU2QzE0Ljc3MzkgNS45MTE4IDE0LjMwMDIgNS41NTc5OCAxMy44MjIyIDUuNTcwODNaTTIwLjc3NzggNy4yNzk2OUMyMS4yMTQ4IDYuOTk5OTUgMjEuODE1MyA3LjA5OTM1IDIyLjExOTEgNy41MDE3MUMyMy40MzE4IDkuMjQwMSAyNC4xNTg2IDExLjUwNDIgMjQuMTU4NiAxMy45MzMxQzI0LjE1ODYgMTYuMzYxOCAyMy40MzE5IDE4LjYyNDggMjIuMTE5MSAyMC4zNjM0QzIxLjgxNTMgMjAuNzY1NyAyMS4yMTQ4IDIwLjg2NTEgMjAuNzc3OCAyMC41ODU0QzIwLjM0MDggMjAuMzA1NiAyMC4yMzI4IDE5Ljc1MjcgMjAuNTM2NiAxOS4zNTAzQzIxLjYxODMgMTcuOTE3OCAyMi4yMzEyIDE2LjAwOTIgMjIuMjMxMiAxMy45MzMxQzIyLjIzMTIgMTEuODU2OCAyMS42MTgxIDkuOTQ3MDMgMjAuNTM2NiA4LjUxNDc1QzIwLjIzMjggOC4xMTIzOSAyMC4zNDA4IDcuNTU5NDQgMjAuNzc3OCA3LjI3OTY5WlwiIGZpbGw9XCIjMDAwMDAwXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhdGJveCBhaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjExNi41ODYgMTk2LjI0NiA5NS41ODEgOTkuMTA5XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTSAyMDYuNTg3IDE5Ni4yNDkgQyAxNTYuODgxIDE5Ni4yNDkgMTE2LjU4NyAyMzYuNTQzIDExNi41ODcgMjg2LjI0OSBDIDExNi41ODcgMjg5LjMyNCAxMTYuNzQxIDI5Mi4zNjMgMTE3LjA0MiAyOTUuMzU4IEwgMTc2LjMxMiAyOTUuMzU4IEMgMTczLjIwNCAyODYuNjcgMTcxLjUxMSAyNzcuMzEgMTcxLjUxMSAyNjcuNTU0IEMgMTcxLjUxMSAyMzcuMjU4IDE4Ny44MzUgMjEwLjc3NCAyMTIuMTY4IDE5Ni40MTkgQyAyMTAuMzIyIDE5Ni4zMDYgMjA4LjQ2MSAxOTYuMjQ5IDIwNi41ODcgMTk2LjI0OSBaXCIgc3R5bGU9XCJmaWxsOiByZ2IoNDUsIDEwNCwgMjIwKTsgdHJhbnNmb3JtLW9yaWdpbjogMTY0LjM3N3B4IDI0NS44MDJweDtcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLTEsIDAsIDAsIC0xLCAtMC4wMDAwMDQ2MzE2MDgsIC0wLjAwMDAwNjkyNTkpXCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY2hhdEVsZW1lbnQpO1xuICAgIHNjcm9sbEludG9Ub3AoY2hhdEVsZW1lbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlQ2hhdENvbnRlbnQobWVzc2FnZSwgY2hhdEluZGV4KXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY2hhdC0ke2NoYXRJbmRleH1gKS5jbGFzc0xpc3QuYWRkKFwibG9hZGVkXCIpO1xuICAgIGNvbnN0IHRhcmdldENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hhdC0ke2NoYXRJbmRleH0gZGl2LmNvbnRlbnRgKTtcbiAgICB0YXJnZXRDb250ZW50LmlubmVySFRNTCA9IGAke21lc3NhZ2V9YDtcbiAgICBzY3JvbGxJbnRvVG9wKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGF0LSR7Y2hhdEluZGV4LTF9YCkpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVG9wKHRhcmdldEVsZW1lbnQpe1xuICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbn0iLCJsZXQgaWR4ID0gMDtcbmxldCBrZXl3b3JkTGlzdCA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkS2V5d29yZChrZXl3b3JkKXtcbiAgICBrZXl3b3JkTGlzdFtpZHgudG9TdHJpbmcoKV0gPSBrZXl3b3JkO1xuICAgIHJldHVybiBpZHgrKztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUxpc3QoKXtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhrZXl3b3JkTGlzdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVLZXl3b3JkKHJlbW92ZWRJbmRleCl7IC8vaW5wdXQgaW4gc3RyaW5nXG4gICAgaWYodHlwZW9mIHJlbW92ZWRJbmRleCAhPSBcInN0cmluZ1wiKSByZW1vdmVkSW5kZXggPSB0b1N0cmluZyhyZW1vdmVkSW5kZXgpO1xuICAgIGlmKCEocmVtb3ZlZEluZGV4IGluIGtleXdvcmRMaXN0KSkgcmV0dXJuO1xuICAgIGRlbGV0ZSBrZXl3b3JkTGlzdFtyZW1vdmVkSW5kZXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoKXtcbiAgICBpZHggPSAwO1xuICAgIGtleXdvcmRMaXN0ID0ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNpbmdsZUhUTUwoa2V5d29yZCwgY2FuQ2xvc2UgPSBmYWxzZSwgZWxlbWVudElEID0gdW5kZWZpbmVkKXtcbiAgICBjb25zdCBuZXdLZXl3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3S2V5d29yZC5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkJyk7XG4gICAgbmV3S2V5d29yZC5pbm5lckhUTUwgPSBgPHNwYW4+JHtrZXl3b3JkfTwvc3Bhbj5gO1xuICAgIGlmKGNhbkNsb3NlKXtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3S2V5d29yZC5pZCA9IGBrZXl3b3JkLSR7ZWxlbWVudElEfWBcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgna2V5d29yZC1jbG9zZScpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNTEyLjAwMDAwMHB0XCIgaGVpZ2h0PVwiNTEyLjAwMDAwMHB0XCIgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPiA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIGZpbGw9XCIjZmZmZmZmXCIgc3Ryb2tlPVwibm9uZVwiPiA8cGF0aCBkPVwiTTM5MyA1MTA2IGMtOTAgLTIyIC0xNjQgLTY1IC0yMzkgLTE0MCAtMTMzIC0xMzMgLTE4MSAtMjk3IC0xMzkgLTQ3NSAzNSAtMTQ1IDUgLTExMyA5NDkgLTEwNTggbDg3MSAtODczIC04NzEgLTg3MiBjLTk0NCAtOTQ2IC05MTQgLTkxNCAtOTQ5IC0xMDU5IC00MiAtMTc4IDYgLTM0MiAxMzkgLTQ3NSAxMzMgLTEzMyAyOTcgLTE4MSA0NzUgLTEzOSAxNDUgMzUgMTEzIDYgMTA1OSA5NDkgbDg3MiA4NzEgODczIC04NzEgYzk0NSAtOTQzIDkxMyAtOTE0IDEwNTggLTk0OSAxNzggLTQyIDM0MiA2IDQ3NSAxMzkgMTMzIDEzMyAxODEgMjk3IDEzOSA0NzUgLTM1IDE0NSAtNSAxMTMgLTk0OSAxMDU4IGwtODcxIDg3MyA4NzEgODcyIGM5NDMgOTQ2IDkxNCA5MTQgOTQ5IDEwNTkgNDEgMTc0IC01IDMzNSAtMTMyIDQ3MCAtMTU4IDE2NyAtMzk3IDIwNiAtNjA3IDk3IC01MiAtMjcgLTE4OCAtMTU4IC05MzMgLTkwMiBsLTg3MyAtODcxIC04NzIgODcxIGMtODQ0IDg0MyAtODc1IDg3MyAtOTQ4IDkwOCAtMTE1IDU1IC0yMzIgNzAgLTM0NyA0MnpcIi8+IDwvZz4gPC9zdmc+JztcbiAgICAgICAgbmV3S2V5d29yZC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiBuZXdLZXl3b3JkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50TGlzdCgpe1xuICAgIGxldCBlbGVtZW50TGlzdCA9IFtdO1xuICAgIE9iamVjdC52YWx1ZXMoa2V5d29yZExpc3QpLmZvckVhY2goKGtleXdvcmQpID0+IHtcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChnZW5lcmF0ZVNpbmdsZUhUTUwoa2V5d29yZCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn0iLCJ3aW5kb3cuU3BlZWNoUmVjb2duaXRpb24gPSB3aW5kb3cuU3BlZWNoUmVjb2duaXRpb24gfHwgd2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uO1xuXG5jb25zdCByZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xucmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSB0cnVlO1xucmVjb2duaXRpb24uY29udGludW91cyA9IHRydWU7XG5yZWNvZ25pdGlvbi5sYW5nID0gXCJpZFwiO1xuXG5leHBvcnQgY29uc3QgcmVwb3J0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5cbnJlY29nbml0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc3VsdCcsIChlKSA9PiB7XG4gICAgbGV0IHRyYW5zY3JpcHQgPSBBcnJheS5mcm9tKGUucmVzdWx0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHZhbCA9PiB2YWxbMF0udHJhbnNjcmlwdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICByZXBvcnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJyZXN1bHRcIiwgeyBkZXRhaWw6IHRyYW5zY3JpcHQgfSkpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpe1xuICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wKCl7XG4gICAgcmVjb2duaXRpb24uc3RvcCgpXG59IiwiY29uc3Qgc3ludGggPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzO1xuY29uc3QgdXR0ZXJhbmNlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSgpO1xubGV0IHNlbGVjdGVkVm9pY2UgPSBzeW50aC5nZXRWb2ljZXMoKS5maWx0ZXIoKGxpc3QpID0+IGxpc3QubGFuZyA9PSBcImlkXCIpWzBdO1xubGV0IGlzUGxheWluZyA9IGZhbHNlO1xubGV0IGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuc3ludGguYWRkRXZlbnRMaXN0ZW5lcigndm9pY2VzY2hhbmdlZCcsICgpID0+IHtcbiAgICBzZWxlY3RlZFZvaWNlID0gc3ludGguZ2V0Vm9pY2VzKCkuZmlsdGVyKChsaXN0KSA9PiBsaXN0LmxhbmcgPT0gXCJpZFwiKVswXTtcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RWxlbWVudChlbGVtZW50LCBidXR0b24sIHRleHQpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSl7XG4gICAgICAgICAgICBzdG9wU3BlYWsoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc3RvcFNwZWFrKCk7XG4gICAgICAgICAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgc3RhcnRTcGVhayh0ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG51dHRlcmFuY2UuYWRkRXZlbnRMaXN0ZW5lcignZW5kJywgKCkgPT4ge1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xufSk7XG5cblxuZnVuY3Rpb24gc3RhcnRTcGVhayh0ZXh0KXtcbiAgICB1dHRlcmFuY2UudGV4dCA9IHRleHQ7XG4gICAgdXR0ZXJhbmNlLnZvaWNlID0gc2VsZWN0ZWRWb2ljZTtcbiAgICB1dHRlcmFuY2UubGFuZyA9IFwiaWRcIjtcbiAgICBpc1BsYXlpbmcgPSB0cnVlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgc3ludGguc3BlYWsodXR0ZXJhbmNlKTtcbn1cblxuZnVuY3Rpb24gc3RvcFNwZWFrKCl7XG4gICAgaWYoIWlzUGxheWluZykgcmV0dXJuO1xuICAgIHN5bnRoLnJlc3VtZSgpO1xuICAgIHN5bnRoLmNhbmNlbCgpO1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIHF1ZXJ5IGZyb20gXCIuL3F1ZXJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgKiBhcyBncHQgZnJvbSAnLi9haS5qcyc7XG5pbXBvcnQgKiBhcyB0dHMgZnJvbSAnLi90dHMuanMnO1xuaW1wb3J0ICogYXMgc3R0IGZyb20gJy4vc3R0LmpzJztcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5sZXQgY2hhdEhpc3RvcnkgPSBbXTtcbmxldCByZWNvbW1lbmRhdGlvbkxpc3QgPSB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbmxldCBjaGF0SW5kZXggPSAwO1xuY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbmxldCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcblxuY29uc3Qgdm9pY2VJbnB1dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2ljZUlucHV0QnV0dG9uJyk7XG5jb25zdCBwbHVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXNCdXR0b24nKTtcbmNvbnN0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZEJ1dHRvbicpO1xuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbEJ1dHRvbicpO1xuY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoQnV0dG9uJyk7XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QnV0dG9uJyk7XG5jb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dElucHV0Jyk7XG5cbmZ1bmN0aW9uIGFkZEtleXdvcmRMaXN0ZW5lcihlbGVtZW50KXtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NlbGVjdC1tb2RlJykpe1xuICAgICAgICAgICAgcXVlcnkucmVtb3ZlS2V5d29yZChlbGVtZW50LmlkKTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LW1vZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LW1vZGUnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZCgpe1xuICAgIGlmKHRleHRJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRJRCA9IHF1ZXJ5LmFkZEtleXdvcmQodGV4dElucHV0LnZhbHVlKTtcbiAgICBsZXQga2V5d29yZEVsZW1lbnQgPSBxdWVyeS5nZW5lcmF0ZVNpbmdsZUhUTUwodGV4dElucHV0LnZhbHVlLCB0cnVlLCBlbGVtZW50SUQpO1xuICAgIGFkZEtleXdvcmRMaXN0ZW5lcihrZXl3b3JkRWxlbWVudCk7XG4gICAgZGlzcGxheS5hcHBlbmRLZXl3b3JkKGtleXdvcmRFbGVtZW50KTtcbiAgICB0ZXh0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VuZEtleXdvcmQoKXtcbiAgICBhZGRLZXl3b3JkKCk7XG4gICAgaWYocXVlcnkuZ2V0S2V5TGlzdCgpLmxlbmd0aCA9PSAwKSByZXR1cm47XG4gICAgY29uc3QgcXVlcnlFbGVtZW50TGlzdCA9IHF1ZXJ5LmdlbmVyYXRlRWxlbWVudExpc3QoKTtcbiAgICBkaXNwbGF5LnRvZ2dsZU92ZXJsYXkoKTtcbiAgICBkaXNwbGF5LnNob3dQb3BVcFJlY29tbWVuZGF0aW9uKHF1ZXJ5RWxlbWVudExpc3QpO1xuICAgIHRyeXtcbiAgICAgICAgcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCk7XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclBvcFVwKCl7XG4gICAgZGlzcGxheS50b2dnbGVPdmVybGF5KCk7XG4gICAgZGlzcGxheS5oaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpO1xufVxuXG5mdW5jdGlvbiByZXNldCgpe1xuICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gYWRkUmVjTGlzdGVuZXIoZWxlbWVudExpc3Qpe1xuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkUmVjb21tZW5kYXRpb24gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheS51bnNlbGVjdFJlY29tbWVuZGF0aW9uKHNlbGVjdGVkUmVjb21tZW5kYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHBhcnNlSW50KGVsZW1lbnQuaWQucmVwbGFjZSgncmVjb21tZW5kYXRpb24tJywgJycpKTtcbiAgICAgICAgICAgIGRpc3BsYXkuc2VsZWN0UmVjb21tZW5kYXRpb24oc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufVxuXG5hc3luYyBmdW5jdGlvbiByZWZyZXNoUmVjb21tZW5kYXRpb24oc2lnbmFsKXtcbiAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IHVuZGVmaW5lZDtcbiAgICBsZXQgdmFsaWRSZXF1ZXN0ID0gdHJ1ZTtcbiAgICBkaXNwbGF5LmNsZWFyUmVjb21tZW5kYXRpb24oKTtcbiAgICBzaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCAoKSA9PiB7XG4gICAgICAgIHZhbGlkUmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICBjb25zb2xlLmxvZyhcImFib3J0aW5nLi4uXCIpO1xuICAgIH0pO1xuICAgIHRyeXtcbiAgICAgICAgcmVjb21tZW5kYXRpb25MaXN0ID0gYXdhaXQgZ3B0LmdlbmVyYXRlUmVjb21tZW5kYXRpb24ocXVlcnkuZ2V0S2V5TGlzdCgpKTtcbiAgICAgICAgaWYodmFsaWRSZXF1ZXN0KXtcbiAgICAgICAgICAgIGxldCByZWNvbW1lbmRhdGlvbkVsZW1lbnRzID0gZGlzcGxheS5nZW5lcmF0ZVJlY29tbWVuZGF0aW9uRWxlbWVudHMocmVjb21tZW5kYXRpb25MaXN0KTtcbiAgICAgICAgICAgIHJlY29tbWVuZGF0aW9uRWxlbWVudHMgPSBhZGRSZWNMaXN0ZW5lcihyZWNvbW1lbmRhdGlvbkVsZW1lbnRzKTtcbiAgICAgICAgICAgIGRpc3BsYXkuYXBwZW5kUmVjb21tZW5kYXRpb24ocmVjb21tZW5kYXRpb25FbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZXJyKXtcbiAgICAgICAgZGlzcGxheS5hcHBlbmRSZWNvbW1lbmRhdGlvbihbXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhY3RpdmF0ZUNoYXRTcGVhayhjaGF0SW5kZXgpe1xuICAgIHR0cy5pbml0RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hhdC0ke2NoYXRJbmRleH1gKSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY2hhdFNwZWFrLSR7Y2hhdEluZGV4fWApLFxuICAgICAgICAgICAgICAgIGNoYXRIaXN0b3J5W2NoYXRJbmRleF0pO1xufVxuXG5mdW5jdGlvbiBhc2tRdWVzdGlvbigpe1xuICAgIGRpc3BsYXkuZm9jdXNFbGVtZW50KCdtYWluJyk7XG4gICAgY2xlYXJQb3BVcCgpO1xuICAgIHF1ZXJ5LmNsZWFyKCk7XG4gICAgZGlzcGxheS5jbGVhcktleXdvcmQoKTtcbiAgICBjaGF0SGlzdG9yeS5wdXNoKGAke3JlY29tbWVuZGF0aW9uTGlzdFtzZWxlY3RlZFJlY29tbWVuZGF0aW9uXX1gKTtcbiAgICBkaXNwbGF5LmFkZFVzZXJDaGF0KGA8c3Bhbj4ke3JlY29tbWVuZGF0aW9uTGlzdFtzZWxlY3RlZFJlY29tbWVuZGF0aW9uXX08L3NwYW4+YCwgY2hhdEluZGV4KTtcbiAgICBhY3RpdmF0ZUNoYXRTcGVhayhjaGF0SW5kZXgrKyk7XG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGZyZWV6ZUNoYXRJbmRleCA9IGNoYXRJbmRleCsrO1xuICAgICAgICBjaGF0SGlzdG9yeS5wdXNoKCdsb2FkaW5nJyk7XG4gICAgICAgIGRpc3BsYXkuYWRkR1BUQ2hhdChcIjxkaXYgY2xhc3M9J2RvdC1mbGFzaGluZyBibHVlJyBzdHlsZT0nbWFyZ2luOiBhdXRvOyc+PC9kaXY+XCIsIGZyZWV6ZUNoYXRJbmRleCk7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IGdwdFJlc3BvbnNlID0gYXdhaXQgZ3B0LmFza1F1ZXN0aW9uKHJlY29tbWVuZGF0aW9uTGlzdFtzZWxlY3RlZFJlY29tbWVuZGF0aW9uXSk7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFJlc3BvbnNlID0gZ3B0UmVzcG9uc2Uuc3BsaXQoJ1xcbicpXG4gICAgICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiAobGluZSAhPT0gXCJcIikpXG4gICAgICAgICAgICAubWFwKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2hpdGVzcGFjZUNvdW50ID0gbGluZS5zZWFyY2goL1xcU3wkLyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8ZGl2PiR7J1xcdTAwYTAnLnJlcGVhdCh3aGl0ZXNwYWNlQ291bnQpK2xpbmUuc2xpY2Uod2hpdGVzcGFjZUNvdW50KX08L2Rpdj5cXG5gO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgICAgIGNoYXRIaXN0b3J5W2ZyZWV6ZUNoYXRJbmRleF0gPSBncHRSZXNwb25zZTtcbiAgICAgICAgICAgIGFjdGl2YXRlQ2hhdFNwZWFrKGZyZWV6ZUNoYXRJbmRleCk7XG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZUNoYXRDb250ZW50KGA8c3Bhbj4ke2ZpbmFsUmVzcG9uc2V9PC9zcGFuPmAsIGZyZWV6ZUNoYXRJbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyb3Ipe1xuICAgICAgICAgICAgY2hhdEhpc3RvcnlbZnJlZXplQ2hhdEluZGV4XSA9IFwiRXJyb3IsIHNpbGFrYW4gY29iYSBsYWdpXCI7XG4gICAgICAgICAgICBhY3RpdmF0ZUNoYXRTcGVhayhmcmVlemVDaGF0SW5kZXgpO1xuICAgICAgICAgICAgZGlzcGxheS51cGRhdGVDaGF0Q29udGVudChcIjxzcGFuPkVycm9yIDooIHNpbGFrYW4gY29iYSBsYWdpPC9zcGFuPlwiLCBmcmVlemVDaGF0SW5kZXgpO1xuICAgICAgICB9XG4gICAgfSwgNTAwKTtcbn1cblxuc3R0LnJlcG9ydC5hZGRFdmVudExpc3RlbmVyKCdyZXN1bHQnLCAoZSkgPT4ge1xuICAgIHRleHRJbnB1dC52YWx1ZSA9IGUuZGV0YWlsO1xufSlcblxuLy8gaW5pdGlhbGl6aW5nIGFsbCBidXR0b25zXG52b2ljZUlucHV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHZvaWNlSW5wdXRCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdyZWNvcmRpbmcnKSl7XG4gICAgICAgIHZvaWNlSW5wdXRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgncmVjb3JkaW5nJyk7XG4gICAgICAgIHN0dC5zdG9wKCk7XG4gICAgfSAgXG4gICAgZWxzZXtcbiAgICAgICAgdm9pY2VJbnB1dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZWNvcmRpbmcnKTtcbiAgICAgICAgaWYodGV4dElucHV0LnZhbHVlICE9PSAnJykgYWRkS2V5d29yZCgpO1xuICAgICAgICBzdHQuc3RhcnQoKTtcbiAgICB9XG59KTtcblxucGx1c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEtleXdvcmQpO1xuXG5zZW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VuZEtleXdvcmQpO1xuXG5jYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7Y2xlYXJQb3BVcCgpOyByZXNldCgpfSk7XG5cbnJlZnJlc2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZWZyZXNoUmVjb21tZW5kYXRpb24oc2lnbmFsKSk7XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZihyZWNvbW1lbmRhdGlvbkxpc3QgPT09IHVuZGVmaW5lZCB8fCAhZGlzcGxheS5zdGF0ZS5wb3BVcCkgcmV0dXJuO1xuICAgIGFza1F1ZXN0aW9uKCk7XG59KTtcblxudGV4dElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZih0ZXh0SW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgIHNlbmRLZXl3b3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFkZEtleXdvcmQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==