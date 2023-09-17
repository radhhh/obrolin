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
/* harmony export */   generateRecommendationElements: () => (/* binding */ generateRecommendationElements),
/* harmony export */   getState: () => (/* binding */ getState),
/* harmony export */   hidePopUpRecommendation: () => (/* binding */ hidePopUpRecommendation),
/* harmony export */   selectRecommendation: () => (/* binding */ selectRecommendation),
/* harmony export */   showPopUpRecommendation: () => (/* binding */ showPopUpRecommendation),
/* harmony export */   toggleOverlay: () => (/* binding */ toggleOverlay),
/* harmony export */   unselectRecommendation: () => (/* binding */ unselectRecommendation),
/* harmony export */   updateChatContent: () => (/* binding */ updateChatContent)
/* harmony export */ });
const keywordContainer = document.getElementById('keywordContainer');
const recommendationKeywordContainer = document.getElementById('recommendationKeywordContainer');
const recommendationPopUp = document.getElementById('recommendationPopUp');
const darkOverlay = document.getElementById('darkOverlay');
const questionContainer = document.getElementById('recommendationQuestionContainer');
const main = document.querySelector('main');

function getState(query){
    switch(query){
        case "popUpOpen":
            return !(recommendationPopUp.classList.contains('hidden'));
        case "popUpLoaded":
            return recommendationPopUp.classList.contains('loaded');
    }
}

function appendKeyword(newKeyword){
    keywordContainer.appendChild(newKeyword);
}

function clearKeyword(){
    while(keywordContainer.firstChild) keywordContainer.removeChild(keywordContainer.firstChild);
}

function toggleOverlay(){
    darkOverlay.classList.toggle('hidden');
}

function showPopUpRecommendation(keywordElementList){
    recommendationPopUp.classList.remove('hidden');
    keywordElementList.forEach((element) => {
        recommendationKeywordContainer.appendChild(element);
    });
}

function appendRecommendation(elementList){
    recommendationPopUp.classList.add('loaded');
    elementList.forEach((element) => {
        questionContainer.appendChild(element);
    });
}

function clearRecommendation(){
    recommendationPopUp.classList.remove('loaded');
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

function clearRecommendationKeyword(){
    while(recommendationKeywordContainer.firstChild) recommendationKeywordContainer.removeChild(recommendationKeywordContainer.firstChild);
}

function hidePopUpRecommendation(){
    recommendationPopUp.classList.add('hidden');
    clearRecommendation();
    clearRecommendationKeyword();
}

function scrollIntoTop(targetElement){
    targetElement.scrollIntoView();
}

function addUserChat(message, chatIndex){
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

function addKeywordListener(element, keywordIndex){
    element.addEventListener('click', (e) => {
        if(element.classList.contains('select-mode')){
            _query_js__WEBPACK_IMPORTED_MODULE_0__.removeKeyword(keywordIndex.toString());
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
    const keywordIndex = _query_js__WEBPACK_IMPORTED_MODULE_0__.addKeyword(textInput.value);
    let keywordElement = _query_js__WEBPACK_IMPORTED_MODULE_0__.generateSingleHTML(textInput.value, true, keywordIndex);
    addKeywordListener(keywordElement, keywordIndex);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.appendKeyword(keywordElement);
    textInput.value = '';
}

async function sendKeyword(){
    addKeyword();
    if(_query_js__WEBPACK_IMPORTED_MODULE_0__.getKeyList().length == 0) return;
    const queryElementList = _query_js__WEBPACK_IMPORTED_MODULE_0__.generateElementList();
    textInput.blur();
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
    elementList.forEach((element, index) => {
        element.addEventListener('click', () => {
            if(selectedRecommendation !== undefined){
                _display_js__WEBPACK_IMPORTED_MODULE_1__.unselectRecommendation(selectedRecommendation);
            }
            selectedRecommendation = index;
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
    textInput.focus();
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
        voiceInputButton.blur();
        textInput.focus();
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
    if(recommendationList === undefined || !_display_js__WEBPACK_IMPORTED_MODULE_1__.getState('popUpOpen')) return;
    askQuestion();
    submitButton.blur();
});

window.addEventListener('keydown', (e) => {
    if(_display_js__WEBPACK_IMPORTED_MODULE_1__.getState('popUpLoaded')){
        switch(e.key){
            case 'ArrowUp':
                document.getElementById(`recommendation-${selectedRecommendation !== undefined ? (selectedRecommendation + 4) % 5 : 0}`)
                    .dispatchEvent(new Event('click'));
                break;
            case 'ArrowDown':
                document.getElementById(`recommendation-${selectedRecommendation !== undefined ? (selectedRecommendation + 1) % 5 : 0}`)
                    .dispatchEvent(new Event('click'));
                break;
            case 'Enter':
                e.preventDefault();
                submitButton.dispatchEvent(new Event('click'));
                break;
            case 'r':
                e.preventDefault();
                refreshButton.dispatchEvent(new Event('click'));
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
                e.preventDefault();
                document.getElementById(`recommendation-${parseInt(e.key) - 1}`).dispatchEvent(new Event('click'));
                break;
        }
    }
    else if(_display_js__WEBPACK_IMPORTED_MODULE_1__.getState('popUpOpen')){
        switch(e.key){
            case 'Escape':
                cancelButton.dispatchEvent(new Event('click'));
        }
    }
    else{
        switch(e.key){
            case 'Enter':
                e.preventDefault();
                if(textInput.value === ''){
                    sendKeyword();
                }
                else{
                    addKeyword();
                }
                break;
        }
    }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxRQUFRLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxRQUFRLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxX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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELG9CQUFvQjtBQUM5RTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9haS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL3N0dC5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvdHRzLmpzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBmb250LWZhbWlseTogJ0xhdG8nO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IG5vbmU7XG59XG5cbjpyb290e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYm9keSwgaHRtbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogN2VtO1xufVxuXG5oZWFkZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XG59XG5cbmhlYWRlciA+IGRpdi5jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaGVhZGVyIGgxe1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuaGVhZGVyIGJ1dHRvbntcbiAgICB0b3A6IDAuNGVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XG59XG5cbmJ1dHRvbiBzdmcgcGF0aCNJbmZvLVNxdWFyZS0ye1xuICAgIGZpbGw6IGJsYWNrO1xufVxuXG5idXR0b246aG92ZXIgc3ZnIHBhdGgjSW5mby1TcXVhcmUtMntcbiAgICBmaWxsOiAjMkQ2OERDO1xufVxuXG5tYWlue1xuICAgIHBhZGRpbmc6IDAgMmVtO1xufVxuXG5zdHJvbmd7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbn1cblxuZGl2LmNoYXRzZWN0aW9ue1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmRpdi5jaGF0c2VjdGlvbi51c2Vye1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XG59XG5cbmRpdi5jaGF0c2VjdGlvbi5haXtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xufVxuZGl2LmNoYXRzZWN0aW9uIGgze1xuICAgIGNvbG9yOiAjOEU4RDk0O1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuODI3cHg7IFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59XG5cbmRpdi5jaGF0c2VjdGlvbiBoMyA+IGJ1dHRvbntcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHRvcDogMC4zZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgaGVpZ2h0OiAxLjJlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLmxvYWRlZCBoMyA+IGJ1dHRvbntcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbmRpdi5jaGF0c2VjdGlvbiBoMyA+IGJ1dHRvbiA+IHN2Z3tcbiAgICBmaWx0ZXI6IGludmVydCg1OSUpIHNlcGlhKDclKSBzYXR1cmF0ZSgyMzAlKSBodWUtcm90YXRlKDIwOWRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDk0JSk7XG4gICAgaGVpZ2h0OiAxLjRlbTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLnVzZXIgaDMgPiBidXR0b246aG92ZXIgc3ZnLFxuZGl2LmNoYXRzZWN0aW9uLnVzZXIucGxheWluZyBoMyA+IGJ1dHRvbiBzdmd7XG4gICAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg1JSkgc2F0dXJhdGUoMTIxNCUpIGh1ZS1yb3RhdGUoMjExZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODklKTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLmFpIGgzID4gYnV0dG9uOmhvdmVyIHN2ZyxcbmRpdi5jaGF0c2VjdGlvbi5haS5wbGF5aW5nIGgzID4gYnV0dG9uIHN2Z3tcbiAgICBmaWx0ZXI6IGludmVydCg0NCUpIHNlcGlhKDEzJSkgc2F0dXJhdGUoNTQwMiUpIGh1ZS1yb3RhdGUoMTk2ZGVnKSBicmlnaHRuZXNzKDg0JSkgY29udHJhc3QoMTA3JSk7XG59XG5cbmRpdi5jaGF0c2VjdGlvbi51c2VyLnBsYXlpbmcgaDN7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogIzI2MjUyQTtcbn1cblxuZGl2LmNoYXRzZWN0aW9uLmFpLnBsYXlpbmcgaDN7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogIzJENjhEQztcbn1cblxuXG5kaXYuY2hhdGJveHtcbiAgICBjb2xvcjogI0ZCRkJGRjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWF4LXdpZHRoOiA3NWNoO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50e1xuICAgIHBhZGRpbmc6IDFlbSAwIDFlbTtcbiAgICBtaW4td2lkdGg6IDE1Y2g7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBmbGV4OiAxO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50ICo6bm90KDpmaXJzdC1jaGlsZCl7XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgb2wsIFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCB1bHtcbiAgICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5sZWZ0LWJveHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuZGl2LmNoYXRib3ggPiBkaXYucmlnaHQtYm94e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmRpdi5taWRkbGUtbGVmdCwgZGl2Lm1pZGRsZS1yaWdodHtcbiAgICB3aWR0aDogMWVtO1xuICAgIGZsZXg6IDE7XG59XG5cbmRpdi51cHBlci1sZWZ0LCBcbmRpdi5sb3dlci1sZWZ0LCBcbmRpdi51cHBlci1yaWdodCwgXG5kaXYubG93ZXItcmlnaHR7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbn1cblxuZGl2LnVwcGVyLWxlZnR7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtIDBweCAwcHggMHB4OyBcbn1cbmRpdi51cHBlci1yaWdodHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMWVtIDBweCAwcHg7XG59XG5kaXYubG93ZXItcmlnaHR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBlbSAxZW0gMHB4O1xufVxuZGl2Lmxvd2VyLWxlZnR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBlbSAwcHggMWVtO1xufVxuXG5kaXYuY2hhdGJveC51c2VyID4gZGl2LmxlZnQtYm94ID4gZGl2LFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5yaWdodC1ib3ggPiBkaXYsIFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5jb250ZW50XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcbn1cblxuZGl2LmNoYXRib3guYWkgPiBkaXYubGVmdC1ib3ggPiBkaXYsXG5kaXYuY2hhdGJveC5haSA+IGRpdi5yaWdodC1ib3ggPiBkaXYsXG5kaXYuY2hhdGJveC5haSA+IGRpdi5jb250ZW50XG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbn1cblxuZGl2LmNvbnRlbnQgZGl2e1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5kaXYuY2hhdGJveCBzdmd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMXB4O1xuICAgIHdpZHRoOiAxLjVlbTtcbn1cblxuZGl2LmNoYXRib3guYWkgc3Zne1xuICAgIGxlZnQ6IC0xcHg7XG59XG5cbmRpdi5jaGF0Ym94LnVzZXIgc3Zne1xuICAgIHJpZ2h0OiAtMXB4O1xufVxuXG5cbi8qIElucHV0IFNlY3Rpb24gKi9cblxuc2VjdGlvbiNpbnB1dENvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZ2FwOiAwLjZlbTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xuICAgIHBhZGRpbmc6IDEuMmVtIDEuNWVtIDEuMmVtO1xufVxuXG5zZWN0aW9uI2lucHV0Q29udGFpbmVyIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNWVtO1xuICAgIGhlaWdodDogNWVtO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggNDguNXB4IDEwcHggMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ2OERDO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG59XG5cbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9uID4gc3Zne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDAuMWVtO1xuICAgIHJpZ2h0OiAwLjFlbTtcbiAgICB3aWR0aDogMi4yZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDUuNDE3cHggMTAuODMzcHg7XG59XG5cbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9uLnJlY29yZGluZyxcbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9uLnJlY29yZGluZzpob3ZlcntcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVye1xuICAgIGZsZXg6IDE7XG59XG5cbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lciA+IHRleHRhcmVhe1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBjb2xvcjogI0ZCRkJGRjtcbiAgICBoZWlnaHQ6IDIuNWVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nOiAwLjZlbSAwLjVlbSAwLjRlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyRDY4REM7XG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmZvY3Vze1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogIzJENjhEQztcbn1cblxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gZGl2I2tleXdvcmRDb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XG59XG5cbi5rZXl3b3Jke1xuICAgIGNvbG9yOiAjRkJGQkZGO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjhlbTtcbiAgICB3aWR0aDogbWF4KDVjaCwgZml0LWNvbnRlbnQpO1xuICAgIG1hcmdpbjogMCAwLjNlbSAwLjE1ZW0gMDtcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmR7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZDpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkIC5rZXl3b3JkLWNsb3Nle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2Rle1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMzAlKTtcbiAgICBjb2xvcjogaHNsKDIyMCwgNzElLCA0OCUpO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZC5zZWxlY3QtbW9kZTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDIwJSk7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyIC5rZXl3b3JkLnNlbGVjdC1tb2RlIC5rZXl3b3JkLWNsb3Nle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogI0ZCRkJGRjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZSBzdmd7XG4gICAgdG9wOiAwLjFlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xufVxuXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogNS40ZW07XG4gICAgZ2FwOiAwLjRlbTtcbn1cblxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyID4gYnV0dG9ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XG59XG5cbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lciBzdmcge1xuICAgIHdpZHRoOiAxLjJlbTtcbn1cblxuLyogUG9wIFVwIFNlY3Rpb24gKi9cblxuLmhpZGRlbntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKSAhaW1wb3J0YW50O1xufVxuXG5kaXYjZGFya092ZXJsYXl7XG4gICAgei1pbmRleDogMjAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDIyMCwgNjklLCA1JSwgMC41KTtcbn1cblxuLmNlbnRlci1wb3B1cHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB3aWR0aDogbWluKDgwdncsIDYwY2gpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIHotaW5kZXg6IDMwMDtcbiAgICBwYWRkaW5nOiAxLjJlbSAxZW0gMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNDkpIGluc2V0O1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGgze1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGRpdntcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9ue1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY29sb3I6ICNGQkZCRkY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjdlbTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcbn1cblxuZGl2LnJlY29tbWVuZGF0aW9uOm5vdCg6bGFzdC1jaGlsZCl7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbmRpdi5yZWNvbW1lbmRhdGlvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbmRpdi5yZWNvbW1lbmRhdGlvbi5zZWxlY3RlZHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDMwJSk7XG4gICAgb3V0bGluZTogaHNsKDIyMCwgNzElLCAyMCUpIDJweCBzb2xpZDtcbn1cblxuZGl2I2FjdGlvbkJ1dHRvbnN7XG4gICAgbWFyZ2luLXRvcDogMC44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMWVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmJ1dHRvbiNyZWZyZXNoQnV0dG9ue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmJ1dHRvbiNyZWZyZXNoQnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbi5sb2FkZWQgYnV0dG9uI3JlZnJlc2hCdXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbmRpdiNjZW50ZXJCdXR0b25zIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XG59XG5cbmRpdiNjZW50ZXJCdXR0b25ze1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbmRpdiNjZW50ZXJCdXR0b25zID4gYnV0dG9ue1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogI0ZCRkJGRjtcbiAgICB3aWR0aDogMTJjaDtcbiAgICBoZWlnaHQ6IDEuOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KSk7XG59XG5cblxuLyogQW5pbWF0aW9uIFBhcnQgKi9cblxuI3JlY29tbWVuZGF0aW9uUG9wVXAgLmRvdC1mbGFzaGluZ3tcbiAgICBtYXJnaW46IGF1dG87XG59XG5cbi5kb3QtZmxhc2hpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgY29sb3I6ICMyRDY4REM7XG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuLmxvYWRlZCAuZG90LWZsYXNoaW5ne1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSwgLmRvdC1mbGFzaGluZzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmJlZm9yZSB7XG4gICAgbGVmdDogLTE1cHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xuICAgIGNvbG9yOiAjMkQ2OERDO1xuICAgIGFuaW1hdGlvbjogZG90LWZsYXNoaW5nIDAuNnMgaW5maW5pdGUgYWx0ZXJuYXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG5cbi5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcbiAgICBjb2xvcjogIzJENjhEQztcbiAgICBhbmltYXRpb246IGRvdC1mbGFzaGluZyAwLjZzIGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNnM7XG59XG4gIFxuQGtleWZyYW1lcyBkb3QtZmxhc2hpbmcge1xuICAgIDAlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XG4gICAgfVxuICAgIDUwJSwgMTAwJSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE1MiwgMTI4LCAyNTUsIDAuMik7XG4gICAgfVxufVxuXG5kaXYuY29udGVudCA+IGRpdi5kb3QtZmxhc2hpbmcuYmx1ZXtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDEwcHg7XG59XG5cbi5kb3QtZmxhc2hpbmcuYmx1ZSwgLmRvdC1mbGFzaGluZy5ibHVlOjpiZWZvcmUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YWZ0ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcbiAgICBhbmltYXRpb24tbmFtZTogZG90LWZsYXNoaW5nLWJsdWU7XG59XG5cbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nLWJsdWUge1xuICAgIDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcbiAgICB9XG4gICAgNTAlLCAxMDAlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA4MCUpO1xuICAgIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDhC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V0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsTUFBTTtBQUNWOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsK0NBQStDO0lBQy9DLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLCtDQUErQztJQUMvQyxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSTtNQUNFLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UsMENBQTBDO0lBQzVDO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxvQ0FBb0M7SUFDeEM7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJztcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBub25lO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuXFxuYm9keSwgaHRtbHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHl7XFxuICAgIHBhZGRpbmctdG9wOiA1ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA3ZW07XFxufVxcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIHBhZGRpbmc6IDFlbSAyZW07XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XFxufVxcblxcbmhlYWRlciA+IGRpdi5jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuaGVhZGVyIGJ1dHRvbntcXG4gICAgdG9wOiAwLjRlbTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRkJGRjtcXG59XFxuXFxuYnV0dG9uIHN2ZyBwYXRoI0luZm8tU3F1YXJlLTJ7XFxuICAgIGZpbGw6IGJsYWNrO1xcbn1cXG5cXG5idXR0b246aG92ZXIgc3ZnIHBhdGgjSW5mby1TcXVhcmUtMntcXG4gICAgZmlsbDogIzJENjhEQztcXG59XFxuXFxubWFpbntcXG4gICAgcGFkZGluZzogMCAyZW07XFxufVxcblxcbnN0cm9uZ3tcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9ue1xcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi51c2Vye1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uLmFpe1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcXG59XFxuZGl2LmNoYXRzZWN0aW9uIGgze1xcbiAgICBjb2xvcjogIzhFOEQ5NDtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuODI3cHg7IFxcbiAgICBtYXJnaW4tbGVmdDogMmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjNlbTtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uIGgzID4gYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICB0b3A6IDAuM2VtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMS4yZW07XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi5sb2FkZWQgaDMgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uIGgzID4gYnV0dG9uID4gc3Zne1xcbiAgICBmaWx0ZXI6IGludmVydCg1OSUpIHNlcGlhKDclKSBzYXR1cmF0ZSgyMzAlKSBodWUtcm90YXRlKDIwOWRlZykgYnJpZ2h0bmVzcyg5MyUpIGNvbnRyYXN0KDk0JSk7XFxuICAgIGhlaWdodDogMS40ZW07XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi51c2VyIGgzID4gYnV0dG9uOmhvdmVyIHN2ZyxcXG5kaXYuY2hhdHNlY3Rpb24udXNlci5wbGF5aW5nIGgzID4gYnV0dG9uIHN2Z3tcXG4gICAgZmlsdGVyOiBpbnZlcnQoMTAlKSBzZXBpYSg1JSkgc2F0dXJhdGUoMTIxNCUpIGh1ZS1yb3RhdGUoMjExZGVnKSBicmlnaHRuZXNzKDk3JSkgY29udHJhc3QoODklKTtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uLmFpIGgzID4gYnV0dG9uOmhvdmVyIHN2ZyxcXG5kaXYuY2hhdHNlY3Rpb24uYWkucGxheWluZyBoMyA+IGJ1dHRvbiBzdmd7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDQ0JSkgc2VwaWEoMTMlKSBzYXR1cmF0ZSg1NDAyJSkgaHVlLXJvdGF0ZSgxOTZkZWcpIGJyaWdodG5lc3MoODQlKSBjb250cmFzdCgxMDclKTtcXG59XFxuXFxuZGl2LmNoYXRzZWN0aW9uLnVzZXIucGxheWluZyBoM3tcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6ICMyNjI1MkE7XFxufVxcblxcbmRpdi5jaGF0c2VjdGlvbi5haS5wbGF5aW5nIGgze1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogIzJENjhEQztcXG59XFxuXFxuXFxuZGl2LmNoYXRib3h7XFxuICAgIGNvbG9yOiAjRkJGQkZGO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXG4gICAgbWF4LXdpZHRoOiA3NWNoO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxZW0gMCAxZW07XFxuICAgIG1pbi13aWR0aDogMTVjaDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCAqOm5vdCg6Zmlyc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG59XFxuXFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCBvbCwgXFxuZGl2LmNoYXRib3ggPiBkaXYuY29udGVudCB1bHtcXG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuZGl2LmNoYXRib3ggPiBkaXYubGVmdC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5yaWdodC1ib3h7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiAxLjVlbTtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbmRpdi5taWRkbGUtbGVmdCwgZGl2Lm1pZGRsZS1yaWdodHtcXG4gICAgd2lkdGg6IDFlbTtcXG4gICAgZmxleDogMTtcXG59XFxuXFxuZGl2LnVwcGVyLWxlZnQsIFxcbmRpdi5sb3dlci1sZWZ0LCBcXG5kaXYudXBwZXItcmlnaHQsIFxcbmRpdi5sb3dlci1yaWdodHtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHdpZHRoOiAxZW07XFxufVxcblxcbmRpdi51cHBlci1sZWZ0e1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW0gMHB4IDBweCAwcHg7IFxcbn1cXG5kaXYudXBwZXItcmlnaHR7XFxuICAgIGJvcmRlci1yYWRpdXM6IDBweCAxZW0gMHB4IDBweDtcXG59XFxuZGl2Lmxvd2VyLXJpZ2h0e1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMGVtIDFlbSAwcHg7XFxufVxcbmRpdi5sb3dlci1sZWZ0e1xcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMGVtIDBweCAxZW07XFxufVxcblxcbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYubGVmdC1ib3ggPiBkaXYsXFxuZGl2LmNoYXRib3gudXNlciA+IGRpdi5yaWdodC1ib3ggPiBkaXYsIFxcbmRpdi5jaGF0Ym94LnVzZXIgPiBkaXYuY29udGVudFxcbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjUyQTtcXG59XFxuXFxuZGl2LmNoYXRib3guYWkgPiBkaXYubGVmdC1ib3ggPiBkaXYsXFxuZGl2LmNoYXRib3guYWkgPiBkaXYucmlnaHQtYm94ID4gZGl2LFxcbmRpdi5jaGF0Ym94LmFpID4gZGl2LmNvbnRlbnRcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxufVxcblxcbmRpdi5jb250ZW50IGRpdntcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmRpdi5jaGF0Ym94IHN2Z3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDFweDtcXG4gICAgd2lkdGg6IDEuNWVtO1xcbn1cXG5cXG5kaXYuY2hhdGJveC5haSBzdmd7XFxuICAgIGxlZnQ6IC0xcHg7XFxufVxcblxcbmRpdi5jaGF0Ym94LnVzZXIgc3Zne1xcbiAgICByaWdodDogLTFweDtcXG59XFxuXFxuXFxuLyogSW5wdXQgU2VjdGlvbiAqL1xcblxcbnNlY3Rpb24jaW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDAuNmVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xcbiAgICBwYWRkaW5nOiAxLjJlbSAxLjVlbSAxLjJlbTtcXG59XFxuXFxuc2VjdGlvbiNpbnB1dENvbnRhaW5lciBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b257XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNWVtO1xcbiAgICBoZWlnaHQ6IDVlbTtcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggNDguNXB4IDEwcHggMTBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzJENjhEQztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxufVxcblxcbmJ1dHRvbiN2b2ljZUlucHV0QnV0dG9uID4gc3Zne1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDAuMWVtO1xcbiAgICByaWdodDogMC4xZW07XFxuICAgIHdpZHRoOiAyLjJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiA1LjQxN3B4IDEwLjgzM3B4O1xcbn1cXG5cXG5idXR0b24jdm9pY2VJbnB1dEJ1dHRvbi5yZWNvcmRpbmcsXFxuYnV0dG9uI3ZvaWNlSW5wdXRCdXR0b24ucmVjb3JkaW5nOmhvdmVye1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNjI1MkE7XFxufVxcblxcbmRpdiNtaWRkbGVJbnB1dENvbnRhaW5lcntcXG4gICAgZmxleDogMTtcXG59XFxuXFxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyID4gdGV4dGFyZWF7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcXG4gICAgY29sb3I6ICNGQkZCRkY7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgcGFkZGluZzogMC42ZW0gMC41ZW0gMC40ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMkQ2OERDO1xcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgdGV4dGFyZWE6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcXG59XFxuXFxuZGl2I21pZGRsZUlucHV0Q29udGFpbmVyIHRleHRhcmVhOmZvY3Vze1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMkQ2OERDO1xcbn1cXG5cXG5kaXYjbWlkZGxlSW5wdXRDb250YWluZXIgPiBkaXYja2V5d29yZENvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuM2VtO1xcbn1cXG5cXG4ua2V5d29yZHtcXG4gICAgY29sb3I6ICNGQkZCRkY7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuM2VtIDAuOGVtO1xcbiAgICB3aWR0aDogbWF4KDVjaCwgZml0LWNvbnRlbnQpO1xcbiAgICBtYXJnaW46IDAgMC4zZW0gMC4xNWVtIDA7XFxuICAgIGJhY2tncm91bmQ6ICMyRDY4REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuN2VtO1xcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjI1KSBpbnNldDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMzAlKTtcXG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDglKTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGU6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyMjAsIDcxJSwgMjAlKTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgLmtleXdvcmQuc2VsZWN0LW1vZGUgLmtleXdvcmQtY2xvc2V7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNGQkZCRkY7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciAua2V5d29yZCAua2V5d29yZC1jbG9zZSBzdmd7XFxuICAgIHRvcDogMC4xZW07XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICB3aWR0aDogMWVtO1xcbn1cXG5cXG5kaXYjcmlnaHRCdXR0b25Db250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiA1LjRlbTtcXG4gICAgZ2FwOiAwLjRlbTtcXG59XFxuXFxuZGl2I3JpZ2h0QnV0dG9uQ29udGFpbmVyID4gYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGhlaWdodDogMi41ZW07XFxuICAgIHdpZHRoOiAyLjVlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJENjhEQztcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxufVxcblxcbmRpdiNyaWdodEJ1dHRvbkNvbnRhaW5lciBzdmcge1xcbiAgICB3aWR0aDogMS4yZW07XFxufVxcblxcbi8qIFBvcCBVcCBTZWN0aW9uICovXFxuXFxuLmhpZGRlbntcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCkgIWltcG9ydGFudDtcXG59XFxuXFxuZGl2I2RhcmtPdmVybGF5e1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMjIwLCA2OSUsIDUlLCAwLjUpO1xcbn1cXG5cXG4uY2VudGVyLXBvcHVwe1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHdpZHRoOiBtaW4oODB2dywgNjBjaCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICB6LWluZGV4OiAzMDA7XFxuICAgIHBhZGRpbmc6IDEuMmVtIDFlbSAxZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQkZCRkY7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQ5KSBpbnNldDtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBoM3tcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XFxufVxcblxcbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwID4gZGl2e1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9ue1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6ICNGQkZCRkY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDAuN2VtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkgaW5zZXQ7XFxufVxcblxcbmRpdi5yZWNvbW1lbmRhdGlvbjpub3QoOmxhc3QtY2hpbGQpe1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuZGl2LnJlY29tbWVuZGF0aW9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDQwJSk7XFxufVxcblxcbmRpdi5yZWNvbW1lbmRhdGlvbi5zZWxlY3RlZHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCAzMCUpO1xcbiAgICBvdXRsaW5lOiBoc2woMjIwLCA3MSUsIDIwJSkgMnB4IHNvbGlkO1xcbn1cXG5cXG5kaXYjYWN0aW9uQnV0dG9uc3tcXG4gICAgbWFyZ2luLXRvcDogMC44ZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5idXR0b24jcmVmcmVzaEJ1dHRvbntcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5idXR0b24jcmVmcmVzaEJ1dHRvbjpob3ZlcntcXG4gICAgY29sb3I6IGhzbCgyMjAsIDcxJSwgNDAlKTtcXG59XFxuXFxuLmxvYWRlZCBidXR0b24jcmVmcmVzaEJ1dHRvbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbmRpdiNjZW50ZXJCdXR0b25zIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDIyMCwgNzElLCA0MCUpO1xcbn1cXG5cXG5kaXYjY2VudGVyQnV0dG9uc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG5kaXYjY2VudGVyQnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogI0ZCRkJGRjtcXG4gICAgd2lkdGg6IDEyY2g7XFxuICAgIGhlaWdodDogMS44ZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDY4REM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMjUpIGluc2V0O1xcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSkpO1xcbn1cXG5cXG5cXG4vKiBBbmltYXRpb24gUGFydCAqL1xcblxcbiNyZWNvbW1lbmRhdGlvblBvcFVwIC5kb3QtZmxhc2hpbmd7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuXFxuLmRvdC1mbGFzaGluZyB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBjb2xvcjogIzJENjhEQztcXG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBsaW5lYXIgYWx0ZXJuYXRlO1xcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuM3M7XFxufVxcblxcbi5sb2FkZWQgLmRvdC1mbGFzaGluZ3tcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRvdC1mbGFzaGluZzo6YmVmb3JlLCAuZG90LWZsYXNoaW5nOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nOjpiZWZvcmUge1xcbiAgICBsZWZ0OiAtMTVweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBjb2xvcjogIzJENjhEQztcXG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XFxufVxcblxcbi5kb3QtZmxhc2hpbmc6OmFmdGVyIHtcXG4gICAgbGVmdDogMTVweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICBjb2xvcjogIzJENjhEQztcXG4gICAgYW5pbWF0aW9uOiBkb3QtZmxhc2hpbmcgMC42cyBpbmZpbml0ZSBhbHRlcm5hdGU7XFxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcXG59XFxuICBcXG5Aa2V5ZnJhbWVzIGRvdC1mbGFzaGluZyB7XFxuICAgIDAlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkQ2OERDO1xcbiAgICB9XFxuICAgIDUwJSwgMTAwJSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTIsIDEyOCwgMjU1LCAwLjIpO1xcbiAgICB9XFxufVxcblxcbmRpdi5jb250ZW50ID4gZGl2LmRvdC1mbGFzaGluZy5ibHVle1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAxMHB4O1xcbn1cXG5cXG4uZG90LWZsYXNoaW5nLmJsdWUsIC5kb3QtZmxhc2hpbmcuYmx1ZTo6YmVmb3JlLCAuZG90LWZsYXNoaW5nLmJsdWU6OmFmdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xcbiAgICBhbmltYXRpb24tbmFtZTogZG90LWZsYXNoaW5nLWJsdWU7XFxufVxcblxcbkBrZXlmcmFtZXMgZG90LWZsYXNoaW5nLWJsdWUge1xcbiAgICAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJGQkZGO1xcbiAgICB9XFxuICAgIDUwJSwgMTAwJSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjIwLCA3MSUsIDgwJSk7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGF3aW9hd2tvYWFrd29hID0gXCJTcExpVDY2M05TUFRDNXF4cDU1ZVNsbzRwVDNCbGJrRkpXQjhQSFdxMXZzUnZTalZBUzBGaVwiO1xuXG5jb25zdCByZXNwb25zZTEgPSBbXG4gICAgXCJJbmkgcGVydGFueWFhbiAxXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiAyXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiAzXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiA0XCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiA1XCIsXG5dO1xuXG5jb25zdCByZXNwb25zZTIgPSBbXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgMVwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDJcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAzXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgNFwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDVcIixcbl1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbW8oKXtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZ2V0UmVwbHkoW1xuICAgICAgICB7cm9sZTogXCJ1c2VyXCIsIGNvbnRlbnQ6IFwiSGFpIEdQVCFcIn1cbiAgICBdKTtcbiAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBkZWxheSh0aW1lKXtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVwbHkobWVzc2FnZSl7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciBzay0ke2F3aW9hd2tvYWFrd29hLnNsaWNlKDUpfWAsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZSxcbiAgICAgICAgfSksXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLCBvcHRpb25zKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiBkYXRhW1wiY2hvaWNlc1wiXVswXVtcIm1lc3NhZ2VcIl1bXCJjb250ZW50XCJdO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbihrZXl3b3JkTGlzdCl7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDM7IGkrKyl7XG4gICAgICAgIHRyeXtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0UmVwbHkoW1xuICAgICAgICAgICAgICAgIHtyb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIlVzZXIgYWthbiBtZW1iZXJpa2FuIGthdGEga3VuY2kgeWFuZyBkaXBpc2Foa2FuIG9sZWgga29tYSxcXFxuICAgICAgICAgICAgICAgIGthbXUgaGFydXMgbWVtYmVyaWthbiBsaXN0IDUgcGVydGFueWFhbiBzZWRlcmhhbmEgeWFuZyByZWxldmFuIGRlbmdhbiBrYXRhIGt1bmNpIHRlcnNlYnV0IHRhbnBhIGthdGEgcGVuZ2FudGFyLlxcXG4gICAgICAgICAgICAgICAgS2F0YSBrdW5jaSBiaXNhIG1lbWlsaWtpIGtlc2FsYWhhbiBwZW51bGlzYW4gZGFuIGthbXUgaGFydXMgbWVuZ2FudGlzaXBhc2lueWEhXCJ9LFxuICAgICAgICAgICAgICAgIHtyb2xlOiBcInVzZXJcIiwgY29udGVudDoga2V5d29yZExpc3Quam9pbignLCAnKX0sXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsUmVzcG9uc2UgPSByZXNwb25zZS5zcGxpdCgvXFxuLylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChsaW5lKSA9PiAvXlxcZCQvLnRlc3QobGluZVswXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgobGluZSkgPT4gbGluZS5zbGljZSgzKSk7XG4gICAgICAgICAgICBpZihmaW5hbFJlc3BvbnNlLmxlbmd0aCAhPSA1KSB0aHJvdyBuZXcgRXJyb3IoXCJQYXJzaW5nIFByb2JsZW1cIik7XG4gICAgICAgICAgICByZXR1cm4gZmluYWxSZXNwb25zZTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkLCB0cnlpbmcuLi5cIik7XG4gICAgICAgICAgICBhd2FpdCBkZWxheSgyMDApO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIFJlcXVlc3QnKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFJlY29tbWVuZGF0aW9uKCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlMik7XG4gICAgICAgIH0sIDEwMDApXG4gICAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc2tRdWVzdGlvbihxdWVzdGlvbil7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFJlcGx5KFtcbiAgICAgICAgICAgIHtyb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIlVzZXIgYWthbiBtZW1iZXJpa2FuIHBlcnRhbnlhYW4uIEthbXUgaGFydXMgbWVtYmVyaWthbiBqYXdhYmFuIGRlbmdhbiBrYXRhLWthdGEgZGFuIHBlbmplbGFzYW4geWFuZyBtdWRhaCBkaXBhaGFtaVwifSxcbiAgICAgICAgICAgIHtyb2xlOiBcInVzZXJcIiwgY29udGVudDogYCR7cXVlc3Rpb259YH1cbiAgICAgICAgXSk7XG4gICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICB9XG4gICAgY2F0Y2goZXJyKXtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gcmVzcG9uZFwiKVxuICAgIH1cbn0iLCJjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleXdvcmRDb250YWluZXInKTtcbmNvbnN0IHJlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXInKTtcbmNvbnN0IHJlY29tbWVuZGF0aW9uUG9wVXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpO1xuY29uc3QgZGFya092ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya092ZXJsYXknKTtcbmNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdGF0ZShxdWVyeSl7XG4gICAgc3dpdGNoKHF1ZXJ5KXtcbiAgICAgICAgY2FzZSBcInBvcFVwT3BlblwiOlxuICAgICAgICAgICAgcmV0dXJuICEocmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKTtcbiAgICAgICAgY2FzZSBcInBvcFVwTG9hZGVkXCI6XG4gICAgICAgICAgICByZXR1cm4gcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QuY29udGFpbnMoJ2xvYWRlZCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEtleXdvcmQobmV3S2V5d29yZCl7XG4gICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdLZXl3b3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyS2V5d29yZCgpe1xuICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheSgpe1xuICAgIGRhcmtPdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BvcFVwUmVjb21tZW5kYXRpb24oa2V5d29yZEVsZW1lbnRMaXN0KXtcbiAgICByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGtleXdvcmRFbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHJlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFJlY29tbWVuZGF0aW9uKGVsZW1lbnRMaXN0KXtcbiAgICByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uKCl7XG4gICAgcmVjb21tZW5kYXRpb25Qb3BVcC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZWQnKTtcbiAgICB3aGlsZShxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKSBxdWVzdGlvbkNvbnRhaW5lci5yZW1vdmVDaGlsZChxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUmVjb21tZW5kYXRpb25FbGVtZW50cyhyZWNvbW1lbmRhdGlvbkxpc3Qpe1xuICAgIGxldCBlbGVtZW50TGlzdCA9IFtdO1xuICAgIHJlY29tbWVuZGF0aW9uTGlzdC5mb3JFYWNoKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3UXVlc3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3UXVlc3Rpb24uY2xhc3NMaXN0LmFkZCgncmVjb21tZW5kYXRpb24nKTtcbiAgICAgICAgbmV3UXVlc3Rpb24uaWQgPSBgcmVjb21tZW5kYXRpb24tJHtpbmRleH1gO1xuICAgICAgICBuZXdRdWVzdGlvbi5pbm5lckhUTUwgPSBxdWVzdGlvbjtcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChuZXdRdWVzdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByZWNvbW1lbmRhdGlvbi0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZWxlY3RSZWNvbW1lbmRhdGlvbihpbmRleCl7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY29tbWVuZGF0aW9uLSR7aW5kZXh9YCk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uS2V5d29yZCgpe1xuICAgIHdoaWxlKHJlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKSByZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXIucmVtb3ZlQ2hpbGQocmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVBvcFVwUmVjb21tZW5kYXRpb24oKXtcbiAgICByZWNvbW1lbmRhdGlvblBvcFVwLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNsZWFyUmVjb21tZW5kYXRpb24oKTtcbiAgICBjbGVhclJlY29tbWVuZGF0aW9uS2V5d29yZCgpO1xufVxuXG5mdW5jdGlvbiBzY3JvbGxJbnRvVG9wKHRhcmdldEVsZW1lbnQpe1xuICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFVzZXJDaGF0KG1lc3NhZ2UsIGNoYXRJbmRleCl7XG4gICAgY29uc3QgY2hhdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGF0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hhdHNlY3Rpb25cIiwgXCJ1c2VyXCIsIFwibG9hZGVkXCIpO1xuICAgIGNoYXRFbGVtZW50LmlkID0gYGNoYXQtJHtjaGF0SW5kZXh9YDtcbiAgICBjaGF0RWxlbWVudC5pbm5lckhUTUwgPSBgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+QW5kYTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJjaGF0U3BlYWstJHtjaGF0SW5kZXh9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB3aWR0aD1cIjMxXCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDMxIDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yNi41Mjc4IDMuODgwODNDMjYuMjI0IDMuNDc4NDkgMjUuNjIzNCAzLjM3OTEyIDI1LjE4NjQgMy42NTg4OUMyNC43NDk1IDMuOTM4NjUgMjQuNjQxNSA0LjQ5MTYxIDI0Ljk0NTQgNC44OTM5NkMyNi43NTg2IDcuMjk0OTggMjcuNzgwOSAxMC40NzkzIDI3Ljc4MDkgMTMuOTMyNUMyNy43ODA5IDE3LjM4NiAyNi43NTg1IDIwLjU3MTUgMjQuOTQ1NCAyMi45NzIzQzI0LjY0MTUgMjMuMzc0NyAyNC43NDk1IDIzLjkyNzYgMjUuMTg2NCAyNC4yMDc0QzI1LjYyMzQgMjQuNDg3MSAyNi4yMjQgMjQuMzg3OCAyNi41Mjc4IDIzLjk4NTRDMjguNTcyMSAyMS4yNzg1IDI5LjcwODMgMTcuNzM4NiAyOS43MDgzIDEzLjkzMjVDMjkuNzA4MyAxMC4xMjY3IDI4LjU3MjMgNi41ODc5OCAyNi41Mjc4IDMuODgwODNaTTEzLjYwMjcgMy44MDQwOUwxMy44MDI4IDMuNzk3MDNMMTMuOTg1MSAzLjc5ODgyQzE1LjI4OTcgMy44NTY0OCAxNi40MDUxIDQuNzQyMDIgMTYuODMyMSA2LjA1NTE4QzE2Ljk1MTEgNi40NzM4NyAxNy4wMTgzIDYuODgzMzQgMTcuMDk2NiA3LjU0OTk0TDE3LjIwMDcgOC40MjM1QzE3LjQxMDQgMTAuNDQ4NSAxNy40MDM3IDE4LjQwMyAxNy4xODA3IDIwLjA0MjlMMTcuMDQyNCAyMS4yMTg4QzE2Ljk4NzYgMjEuNjE1NCAxNi45MjUyIDIxLjkyMDUgMTYuODIzIDIyLjI3MDZDMTYuMzgxNyAyMy42MjczIDE1LjE2NDEgMjQuNTM2MyAxMy44MTc4IDI0LjQ5ODlDMTMuMTMyNSAyNC41MTQ0IDEyLjI5NzkgMjQuMTkzNCAxMS43MTc0IDIzLjc0MzlMNy4xNDMwMiAyMC4zMjI0TDQuNzg4NzMgMjAuMzIzQzMuMDU0MzcgMjAuMzIzIDEuODE5MDcgMTkuMjUxIDEuNTE1NjQgMTcuNjE1N0wxLjQ4MTM5IDE3LjM5OTNDMS4yMjQ0NiAxNS43MTc3IDEuMjMyNDQgMTIuNjYwNSAxLjQ4MTI4IDEwLjgyMjhDMS43MzAzIDkuMTgzNDIgMy4wMzA2MSA3Ljk3Mzk5IDQuNzg4NzMgNy45NzM5OUw3LjE0MTczIDcuOTczMzNMMTEuNjAyIDQuNjI2ODJDMTIuMTQyIDQuMjA1NjcgMTIuOTQ3OCAzLjg1OTI2IDEzLjYwMjcgMy44MDQwOVpNMTMuODIyMiA1LjU3MDgzTDEzLjc3MzMgNS41NzFDMTMuNjE3OCA1LjU2NzkxIDEzLjExOCA1Ljc3MDIgMTIuODMzOCA1Ljk5MTYzTDguMDkzOTUgOS41NDkwN0M3LjkyMTk4IDkuNjc4MTQgNy43MDY5MiA5Ljc0ODYyIDcuNDg1MDYgOS43NDg2Mkg0Ljc4ODczQzQuMDU4NTIgOS43NDg2MiAzLjUxMzYxIDEwLjI1NTQgMy4zOTE5OSAxMS4wNTU0QzMuMTY1MjcgMTIuNzMwNSAzLjE1NzY5IDE1LjYzMTcgMy4zOTIzOCAxNy4xNjg4QzMuNTE0MiAxOC4wOTM2IDQuMDA3NTYgMTguNTQ4MyA0Ljc4ODczIDE4LjU0ODNINy40ODUwNkM3LjcwNjM0IDE4LjU0ODMgNy45MjA4NyAxOC42MTg1IDguMDkyNjMgMTguNzQ2OUwxMi45NDUxIDIyLjM3NTlDMTMuMjAzNCAyMi41NzU5IDEzLjYwMDUgMjIuNzI4NiAxMy44MjIyIDIyLjcyNDlDMTQuMzAwOSAyMi43Mzc4IDE0Ljc3MzkgMjIuMzg0NiAxNC45NjkgMjEuNzg2MkMxNS4wNzA0IDIxLjQzNzggMTUuMTIzMiAyMS4xMTE4IDE1LjE4ODcgMjAuNTEyNkwxNS4yMzE0IDIwLjEyMjhMMTUuMjY3OSAxOS44MjUyQzE1LjQ3ODMgMTguMjc3NyAxNS40NzgzIDEwLjAxOTIgMTUuMjY3NiA4LjQ2OTEzTDE1LjEzMDcgNy4zNDUxN0MxNS4wOTg0IDcuMTA3OTggMTUuMDY3IDYuOTIwMDYgMTUuMDMyMSA2Ljc1ODk1TDE0Ljk3NjcgNi41MzQ1NkMxNC43NzM5IDUuOTExOCAxNC4zMDAyIDUuNTU3OTggMTMuODIyMiA1LjU3MDgzWk0yMC43Nzc4IDcuMjc5NjlDMjEuMjE0OCA2Ljk5OTk1IDIxLjgxNTMgNy4wOTkzNSAyMi4xMTkxIDcuNTAxNzFDMjMuNDMxOCA5LjI0MDEgMjQuMTU4NiAxMS41MDQyIDI0LjE1ODYgMTMuOTMzMUMyNC4xNTg2IDE2LjM2MTggMjMuNDMxOSAxOC42MjQ4IDIyLjExOTEgMjAuMzYzNEMyMS44MTUzIDIwLjc2NTcgMjEuMjE0OCAyMC44NjUxIDIwLjc3NzggMjAuNTg1NEMyMC4zNDA4IDIwLjMwNTYgMjAuMjMyOCAxOS43NTI3IDIwLjUzNjYgMTkuMzUwM0MyMS42MTgzIDE3LjkxNzggMjIuMjMxMiAxNi4wMDkyIDIyLjIzMTIgMTMuOTMzMUMyMi4yMzEyIDExLjg1NjggMjEuNjE4MSA5Ljk0NzAzIDIwLjUzNjYgOC41MTQ3NUMyMC4yMzI4IDguMTEyMzkgMjAuMzQwOCA3LjU1OTQ0IDIwLjc3NzggNy4yNzk2OVpcIiBmaWxsPVwiIzAwMDAwMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXRib3ggdXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7bWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJpZ2h0LWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cHBlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG93ZXItcmlnaHRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIxMTYuNTg3IDE5Ni4yNDYgOTUuNTgxIDk5LjEwOVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0gMjA2LjU4NyAyOTUuMzU1IEMgMTU2Ljg4MSAyOTUuMzU1IDExNi41ODcgMjU1LjA2MSAxMTYuNTg3IDIwNS4zNTUgQyAxMTYuNTg3IDIwMi4yOCAxMTYuNzQxIDE5OS4yNDEgMTE3LjA0MiAxOTYuMjQ2IEwgMTc2LjMxMiAxOTYuMjQ2IEMgMTczLjIwNCAyMDQuOTM0IDE3MS41MTEgMjE0LjI5NCAxNzEuNTExIDIyNC4wNSBDIDE3MS41MTEgMjU0LjM0NiAxODcuODM1IDI4MC44MyAyMTIuMTY4IDI5NS4xODUgQyAyMTAuMzIyIDI5NS4yOTggMjA4LjQ2MSAyOTUuMzU1IDIwNi41ODcgMjk1LjM1NSBaXCIgc3R5bGU9XCJmaWxsOiByZ2IoMzgsIDM3LCA0Mik7IHRyYW5zZm9ybS1vcmlnaW46IDE2NC4zNzdweCAyNDUuODAycHg7XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG4gICAgc2Nyb2xsSW50b1RvcChjaGF0RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRHUFRDaGF0KG1lc3NhZ2UsIGNoYXRJbmRleCl7XG4gICAgY29uc3QgY2hhdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaGF0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2hhdHNlY3Rpb25cIiwgXCJhaVwiKTtcbiAgICBjaGF0RWxlbWVudC5pZCA9IGBjaGF0LSR7Y2hhdEluZGV4fWA7XG4gICAgY2hhdEVsZW1lbnQuaW5uZXJIVE1MID0gYDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPk9icm9saW4gQUk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGlkPVwiY2hhdFNwZWFrLSR7Y2hhdEluZGV4fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgd2lkdGg9XCIzMVwiIGhlaWdodD1cIjI4XCIgdmlld0JveD1cIjAgMCAzMSAyOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMjYuNTI3OCAzLjg4MDgzQzI2LjIyNCAzLjQ3ODQ5IDI1LjYyMzQgMy4zNzkxMiAyNS4xODY0IDMuNjU4ODlDMjQuNzQ5NSAzLjkzODY1IDI0LjY0MTUgNC40OTE2MSAyNC45NDU0IDQuODkzOTZDMjYuNzU4NiA3LjI5NDk4IDI3Ljc4MDkgMTAuNDc5MyAyNy43ODA5IDEzLjkzMjVDMjcuNzgwOSAxNy4zODYgMjYuNzU4NSAyMC41NzE1IDI0Ljk0NTQgMjIuOTcyM0MyNC42NDE1IDIzLjM3NDcgMjQuNzQ5NSAyMy45Mjc2IDI1LjE4NjQgMjQuMjA3NEMyNS42MjM0IDI0LjQ4NzEgMjYuMjI0IDI0LjM4NzggMjYuNTI3OCAyMy45ODU0QzI4LjU3MjEgMjEuMjc4NSAyOS43MDgzIDE3LjczODYgMjkuNzA4MyAxMy45MzI1QzI5LjcwODMgMTAuMTI2NyAyOC41NzIzIDYuNTg3OTggMjYuNTI3OCAzLjg4MDgzWk0xMy42MDI3IDMuODA0MDlMMTMuODAyOCAzLjc5NzAzTDEzLjk4NTEgMy43OTg4MkMxNS4yODk3IDMuODU2NDggMTYuNDA1MSA0Ljc0MjAyIDE2LjgzMjEgNi4wNTUxOEMxNi45NTExIDYuNDczODcgMTcuMDE4MyA2Ljg4MzM0IDE3LjA5NjYgNy41NDk5NEwxNy4yMDA3IDguNDIzNUMxNy40MTA0IDEwLjQ0ODUgMTcuNDAzNyAxOC40MDMgMTcuMTgwNyAyMC4wNDI5TDE3LjA0MjQgMjEuMjE4OEMxNi45ODc2IDIxLjYxNTQgMTYuOTI1MiAyMS45MjA1IDE2LjgyMyAyMi4yNzA2QzE2LjM4MTcgMjMuNjI3MyAxNS4xNjQxIDI0LjUzNjMgMTMuODE3OCAyNC40OTg5QzEzLjEzMjUgMjQuNTE0NCAxMi4yOTc5IDI0LjE5MzQgMTEuNzE3NCAyMy43NDM5TDcuMTQzMDIgMjAuMzIyNEw0Ljc4ODczIDIwLjMyM0MzLjA1NDM3IDIwLjMyMyAxLjgxOTA3IDE5LjI1MSAxLjUxNTY0IDE3LjYxNTdMMS40ODEzOSAxNy4zOTkzQzEuMjI0NDYgMTUuNzE3NyAxLjIzMjQ0IDEyLjY2MDUgMS40ODEyOCAxMC44MjI4QzEuNzMwMyA5LjE4MzQyIDMuMDMwNjEgNy45NzM5OSA0Ljc4ODczIDcuOTczOTlMNy4xNDE3MyA3Ljk3MzMzTDExLjYwMiA0LjYyNjgyQzEyLjE0MiA0LjIwNTY3IDEyLjk0NzggMy44NTkyNiAxMy42MDI3IDMuODA0MDlaTTEzLjgyMjIgNS41NzA4M0wxMy43NzMzIDUuNTcxQzEzLjYxNzggNS41Njc5MSAxMy4xMTggNS43NzAyIDEyLjgzMzggNS45OTE2M0w4LjA5Mzk1IDkuNTQ5MDdDNy45MjE5OCA5LjY3ODE0IDcuNzA2OTIgOS43NDg2MiA3LjQ4NTA2IDkuNzQ4NjJINC43ODg3M0M0LjA1ODUyIDkuNzQ4NjIgMy41MTM2MSAxMC4yNTU0IDMuMzkxOTkgMTEuMDU1NEMzLjE2NTI3IDEyLjczMDUgMy4xNTc2OSAxNS42MzE3IDMuMzkyMzggMTcuMTY4OEMzLjUxNDIgMTguMDkzNiA0LjAwNzU2IDE4LjU0ODMgNC43ODg3MyAxOC41NDgzSDcuNDg1MDZDNy43MDYzNCAxOC41NDgzIDcuOTIwODcgMTguNjE4NSA4LjA5MjYzIDE4Ljc0NjlMMTIuOTQ1MSAyMi4zNzU5QzEzLjIwMzQgMjIuNTc1OSAxMy42MDA1IDIyLjcyODYgMTMuODIyMiAyMi43MjQ5QzE0LjMwMDkgMjIuNzM3OCAxNC43NzM5IDIyLjM4NDYgMTQuOTY5IDIxLjc4NjJDMTUuMDcwNCAyMS40Mzc4IDE1LjEyMzIgMjEuMTExOCAxNS4xODg3IDIwLjUxMjZMMTUuMjMxNCAyMC4xMjI4TDE1LjI2NzkgMTkuODI1MkMxNS40NzgzIDE4LjI3NzcgMTUuNDc4MyAxMC4wMTkyIDE1LjI2NzYgOC40NjkxM0wxNS4xMzA3IDcuMzQ1MTdDMTUuMDk4NCA3LjEwNzk4IDE1LjA2NyA2LjkyMDA2IDE1LjAzMjEgNi43NTg5NUwxNC45NzY3IDYuNTM0NTZDMTQuNzczOSA1LjkxMTggMTQuMzAwMiA1LjU1Nzk4IDEzLjgyMjIgNS41NzA4M1pNMjAuNzc3OCA3LjI3OTY5QzIxLjIxNDggNi45OTk5NSAyMS44MTUzIDcuMDk5MzUgMjIuMTE5MSA3LjUwMTcxQzIzLjQzMTggOS4yNDAxIDI0LjE1ODYgMTEuNTA0MiAyNC4xNTg2IDEzLjkzMzFDMjQuMTU4NiAxNi4zNjE4IDIzLjQzMTkgMTguNjI0OCAyMi4xMTkxIDIwLjM2MzRDMjEuODE1MyAyMC43NjU3IDIxLjIxNDggMjAuODY1MSAyMC43Nzc4IDIwLjU4NTRDMjAuMzQwOCAyMC4zMDU2IDIwLjIzMjggMTkuNzUyNyAyMC41MzY2IDE5LjM1MDNDMjEuNjE4MyAxNy45MTc4IDIyLjIzMTIgMTYuMDA5MiAyMi4yMzEyIDEzLjkzMzFDMjIuMjMxMiAxMS44NTY4IDIxLjYxODEgOS45NDcwMyAyMC41MzY2IDguNTE0NzVDMjAuMjMyOCA4LjExMjM5IDIwLjM0MDggNy41NTk0NCAyMC43Nzc4IDcuMjc5NjlaXCIgZmlsbD1cIiMwMDAwMDBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGF0Ym94IGFpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC1ib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidXBwZXItbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtaWRkbGUtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMTE2LjU4NiAxOTYuMjQ2IDk1LjU4MSA5OS4xMDlcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNIDIwNi41ODcgMTk2LjI0OSBDIDE1Ni44ODEgMTk2LjI0OSAxMTYuNTg3IDIzNi41NDMgMTE2LjU4NyAyODYuMjQ5IEMgMTE2LjU4NyAyODkuMzI0IDExNi43NDEgMjkyLjM2MyAxMTcuMDQyIDI5NS4zNTggTCAxNzYuMzEyIDI5NS4zNTggQyAxNzMuMjA0IDI4Ni42NyAxNzEuNTExIDI3Ny4zMSAxNzEuNTExIDI2Ny41NTQgQyAxNzEuNTExIDIzNy4yNTggMTg3LjgzNSAyMTAuNzc0IDIxMi4xNjggMTk2LjQxOSBDIDIxMC4zMjIgMTk2LjMwNiAyMDguNDYxIDE5Ni4yNDkgMjA2LjU4NyAxOTYuMjQ5IFpcIiBzdHlsZT1cImZpbGw6IHJnYig0NSwgMTA0LCAyMjApOyB0cmFuc2Zvcm0tb3JpZ2luOiAxNjQuMzc3cHggMjQ1LjgwMnB4O1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgtMSwgMCwgMCwgLTEsIC0wLjAwMDAwNDYzMTYwOCwgLTAuMDAwMDA2OTI1OSlcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHttZXNzYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHQtYm94XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInVwcGVyLXJpZ2h0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pZGRsZS1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb3dlci1yaWdodFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjaGF0RWxlbWVudCk7XG4gICAgc2Nyb2xsSW50b1RvcChjaGF0RWxlbWVudCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVDaGF0Q29udGVudChtZXNzYWdlLCBjaGF0SW5kZXgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjaGF0LSR7Y2hhdEluZGV4fWApLmNsYXNzTGlzdC5hZGQoXCJsb2FkZWRcIik7XG4gICAgY29uc3QgdGFyZ2V0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNjaGF0LSR7Y2hhdEluZGV4fSBkaXYuY29udGVudGApO1xuICAgIHRhcmdldENvbnRlbnQuaW5uZXJIVE1MID0gYCR7bWVzc2FnZX1gO1xuICAgIHNjcm9sbEludG9Ub3AoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNoYXQtJHtjaGF0SW5kZXgtMX1gKSk7XG59IiwibGV0IGlkeCA9IDA7XG5sZXQga2V5d29yZExpc3QgPSB7fTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEtleXdvcmQoa2V5d29yZCl7XG4gICAga2V5d29yZExpc3RbaWR4LnRvU3RyaW5nKCldID0ga2V5d29yZDtcbiAgICByZXR1cm4gaWR4Kys7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlMaXN0KCl7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoa2V5d29yZExpc3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlS2V5d29yZChyZW1vdmVkSW5kZXgpeyAvL2lucHV0IGluIHN0cmluZ1xuICAgIGRlbGV0ZSBrZXl3b3JkTGlzdFtyZW1vdmVkSW5kZXhdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoKXtcbiAgICBpZHggPSAwO1xuICAgIGtleXdvcmRMaXN0ID0ge307XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVNpbmdsZUhUTUwoa2V5d29yZCwgY2FuQ2xvc2UgPSBmYWxzZSwgZWxlbWVudElEID0gdW5kZWZpbmVkKXtcbiAgICBjb25zdCBuZXdLZXl3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3S2V5d29yZC5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkJyk7XG4gICAgbmV3S2V5d29yZC5pbm5lckhUTUwgPSBgPHNwYW4+JHtrZXl3b3JkfTwvc3Bhbj5gO1xuICAgIGlmKGNhbkNsb3NlKXtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3S2V5d29yZC5pZCA9IGBrZXl3b3JkLSR7ZWxlbWVudElEfWBcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZCgna2V5d29yZC1jbG9zZScpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSAnPHN2ZyB2ZXJzaW9uPVwiMS4wXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiNTEyLjAwMDAwMHB0XCIgaGVpZ2h0PVwiNTEyLjAwMDAwMHB0XCIgdmlld0JveD1cIjAgMCA1MTIuMDAwMDAwIDUxMi4wMDAwMDBcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwieE1pZFlNaWQgbWVldFwiPiA8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMC4wMDAwMDAsNTEyLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVwiIGZpbGw9XCIjZmZmZmZmXCIgc3Ryb2tlPVwibm9uZVwiPiA8cGF0aCBkPVwiTTM5MyA1MTA2IGMtOTAgLTIyIC0xNjQgLTY1IC0yMzkgLTE0MCAtMTMzIC0xMzMgLTE4MSAtMjk3IC0xMzkgLTQ3NSAzNSAtMTQ1IDUgLTExMyA5NDkgLTEwNTggbDg3MSAtODczIC04NzEgLTg3MiBjLTk0NCAtOTQ2IC05MTQgLTkxNCAtOTQ5IC0xMDU5IC00MiAtMTc4IDYgLTM0MiAxMzkgLTQ3NSAxMzMgLTEzMyAyOTcgLTE4MSA0NzUgLTEzOSAxNDUgMzUgMTEzIDYgMTA1OSA5NDkgbDg3MiA4NzEgODczIC04NzEgYzk0NSAtOTQzIDkxMyAtOTE0IDEwNTggLTk0OSAxNzggLTQyIDM0MiA2IDQ3NSAxMzkgMTMzIDEzMyAxODEgMjk3IDEzOSA0NzUgLTM1IDE0NSAtNSAxMTMgLTk0OSAxMDU4IGwtODcxIDg3MyA4NzEgODcyIGM5NDMgOTQ2IDkxNCA5MTQgOTQ5IDEwNTkgNDEgMTc0IC01IDMzNSAtMTMyIDQ3MCAtMTU4IDE2NyAtMzk3IDIwNiAtNjA3IDk3IC01MiAtMjcgLTE4OCAtMTU4IC05MzMgLTkwMiBsLTg3MyAtODcxIC04NzIgODcxIGMtODQ0IDg0MyAtODc1IDg3MyAtOTQ4IDkwOCAtMTE1IDU1IC0yMzIgNzAgLTM0NyA0MnpcIi8+IDwvZz4gPC9zdmc+JztcbiAgICAgICAgbmV3S2V5d29yZC5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgfVxuICAgIHJldHVybiBuZXdLZXl3b3JkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVFbGVtZW50TGlzdCgpe1xuICAgIGxldCBlbGVtZW50TGlzdCA9IFtdO1xuICAgIE9iamVjdC52YWx1ZXMoa2V5d29yZExpc3QpLmZvckVhY2goKGtleXdvcmQpID0+IHtcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChnZW5lcmF0ZVNpbmdsZUhUTUwoa2V5d29yZCkpO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn0iLCJ3aW5kb3cuU3BlZWNoUmVjb2duaXRpb24gPSB3aW5kb3cuU3BlZWNoUmVjb2duaXRpb24gfHwgd2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uO1xuXG5jb25zdCByZWNvZ25pdGlvbiA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xucmVjb2duaXRpb24uaW50ZXJpbVJlc3VsdHMgPSB0cnVlO1xucmVjb2duaXRpb24uY29udGludW91cyA9IHRydWU7XG5yZWNvZ25pdGlvbi5sYW5nID0gXCJpZFwiO1xuXG5leHBvcnQgY29uc3QgcmVwb3J0ID0gbmV3IEV2ZW50VGFyZ2V0KCk7XG5cbnJlY29nbml0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc3VsdCcsIChlKSA9PiB7XG4gICAgbGV0IHRyYW5zY3JpcHQgPSBBcnJheS5mcm9tKGUucmVzdWx0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAubWFwKHZhbCA9PiB2YWxbMF0udHJhbnNjcmlwdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuam9pbignJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICByZXBvcnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJyZXN1bHRcIiwgeyBkZXRhaWw6IHRyYW5zY3JpcHQgfSkpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydCgpe1xuICAgIHJlY29nbml0aW9uLnN0YXJ0KCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wKCl7XG4gICAgcmVjb2duaXRpb24uc3RvcCgpXG59IiwiY29uc3Qgc3ludGggPSB3aW5kb3cuc3BlZWNoU3ludGhlc2lzO1xuY29uc3QgdXR0ZXJhbmNlID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSgpO1xubGV0IHNlbGVjdGVkVm9pY2UgPSBzeW50aC5nZXRWb2ljZXMoKS5maWx0ZXIoKGxpc3QpID0+IGxpc3QubGFuZyA9PSBcImlkXCIpWzBdO1xubGV0IGlzUGxheWluZyA9IGZhbHNlO1xubGV0IGN1cnJlbnRQbGF5aW5nRWxlbWVudCA9IHVuZGVmaW5lZDtcblxuc3ludGguYWRkRXZlbnRMaXN0ZW5lcigndm9pY2VzY2hhbmdlZCcsICgpID0+IHtcbiAgICBzZWxlY3RlZFZvaWNlID0gc3ludGguZ2V0Vm9pY2VzKCkuZmlsdGVyKChsaXN0KSA9PiBsaXN0LmxhbmcgPT0gXCJpZFwiKVswXTtcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0RWxlbWVudChlbGVtZW50LCBidXR0b24sIHRleHQpe1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYXlpbmcnKSl7XG4gICAgICAgICAgICBzdG9wU3BlYWsoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgc3RvcFNwZWFrKCk7XG4gICAgICAgICAgICBjdXJyZW50UGxheWluZ0VsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgc3RhcnRTcGVhayh0ZXh0KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG51dHRlcmFuY2UuYWRkRXZlbnRMaXN0ZW5lcignZW5kJywgKCkgPT4ge1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xufSk7XG5cblxuZnVuY3Rpb24gc3RhcnRTcGVhayh0ZXh0KXtcbiAgICB1dHRlcmFuY2UudGV4dCA9IHRleHQ7XG4gICAgdXR0ZXJhbmNlLnZvaWNlID0gc2VsZWN0ZWRWb2ljZTtcbiAgICB1dHRlcmFuY2UubGFuZyA9IFwiaWRcIjtcbiAgICBpc1BsYXlpbmcgPSB0cnVlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nJyk7XG4gICAgc3ludGguc3BlYWsodXR0ZXJhbmNlKTtcbn1cblxuZnVuY3Rpb24gc3RvcFNwZWFrKCl7XG4gICAgaWYoIWlzUGxheWluZykgcmV0dXJuO1xuICAgIHN5bnRoLnJlc3VtZSgpO1xuICAgIHN5bnRoLmNhbmNlbCgpO1xuICAgIGlzUGxheWluZyA9IGZhbHNlO1xuICAgIGN1cnJlbnRQbGF5aW5nRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nJyk7XG4gICAgY3VycmVudFBsYXlpbmdFbGVtZW50ID0gdW5kZWZpbmVkO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIHF1ZXJ5IGZyb20gXCIuL3F1ZXJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgKiBhcyBncHQgZnJvbSAnLi9haS5qcyc7XG5pbXBvcnQgKiBhcyB0dHMgZnJvbSAnLi90dHMuanMnO1xuaW1wb3J0ICogYXMgc3R0IGZyb20gJy4vc3R0LmpzJztcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5sZXQgY2hhdEhpc3RvcnkgPSBbXTtcbmxldCByZWNvbW1lbmRhdGlvbkxpc3QgPSB1bmRlZmluZWQ7XG5sZXQgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbmxldCBjaGF0SW5kZXggPSAwO1xuY29uc3QgY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbmxldCBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcblxuY29uc3Qgdm9pY2VJbnB1dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2b2ljZUlucHV0QnV0dG9uJyk7XG5jb25zdCBwbHVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXNCdXR0b24nKTtcbmNvbnN0IHNlbmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZEJ1dHRvbicpO1xuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbEJ1dHRvbicpO1xuY29uc3QgcmVmcmVzaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWZyZXNoQnV0dG9uJyk7XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0QnV0dG9uJyk7XG5jb25zdCB0ZXh0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGV4dElucHV0Jyk7XG5cbmZ1bmN0aW9uIGFkZEtleXdvcmRMaXN0ZW5lcihlbGVtZW50LCBrZXl3b3JkSW5kZXgpe1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0LW1vZGUnKSl7XG4gICAgICAgICAgICBxdWVyeS5yZW1vdmVLZXl3b3JkKGtleXdvcmRJbmRleC50b1N0cmluZygpKTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LW1vZGUnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChlKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0LW1vZGUnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZCgpe1xuICAgIGlmKHRleHRJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGtleXdvcmRJbmRleCA9IHF1ZXJ5LmFkZEtleXdvcmQodGV4dElucHV0LnZhbHVlKTtcbiAgICBsZXQga2V5d29yZEVsZW1lbnQgPSBxdWVyeS5nZW5lcmF0ZVNpbmdsZUhUTUwodGV4dElucHV0LnZhbHVlLCB0cnVlLCBrZXl3b3JkSW5kZXgpO1xuICAgIGFkZEtleXdvcmRMaXN0ZW5lcihrZXl3b3JkRWxlbWVudCwga2V5d29yZEluZGV4KTtcbiAgICBkaXNwbGF5LmFwcGVuZEtleXdvcmQoa2V5d29yZEVsZW1lbnQpO1xuICAgIHRleHRJbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzZW5kS2V5d29yZCgpe1xuICAgIGFkZEtleXdvcmQoKTtcbiAgICBpZihxdWVyeS5nZXRLZXlMaXN0KCkubGVuZ3RoID09IDApIHJldHVybjtcbiAgICBjb25zdCBxdWVyeUVsZW1lbnRMaXN0ID0gcXVlcnkuZ2VuZXJhdGVFbGVtZW50TGlzdCgpO1xuICAgIHRleHRJbnB1dC5ibHVyKCk7XG4gICAgZGlzcGxheS50b2dnbGVPdmVybGF5KCk7XG4gICAgZGlzcGxheS5zaG93UG9wVXBSZWNvbW1lbmRhdGlvbihxdWVyeUVsZW1lbnRMaXN0KTtcbiAgICB0cnl7XG4gICAgICAgIHJlZnJlc2hSZWNvbW1lbmRhdGlvbihzaWduYWwpO1xuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJQb3BVcCgpe1xuICAgIGRpc3BsYXkudG9nZ2xlT3ZlcmxheSgpO1xuICAgIGRpc3BsYXkuaGlkZVBvcFVwUmVjb21tZW5kYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gcmVzZXQoKXtcbiAgICBjb250cm9sbGVyLmFib3J0KCk7XG4gICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGFkZFJlY0xpc3RlbmVyKGVsZW1lbnRMaXN0KXtcbiAgICBlbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYoc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiAhPT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICBkaXNwbGF5LnVuc2VsZWN0UmVjb21tZW5kYXRpb24oc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gaW5kZXg7XG4gICAgICAgICAgICBkaXNwbGF5LnNlbGVjdFJlY29tbWVuZGF0aW9uKHNlbGVjdGVkUmVjb21tZW5kYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFJlY29tbWVuZGF0aW9uKHNpZ25hbCl7XG4gICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHZhbGlkUmVxdWVzdCA9IHRydWU7XG4gICAgZGlzcGxheS5jbGVhclJlY29tbWVuZGF0aW9uKCk7XG4gICAgc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgKCkgPT4ge1xuICAgICAgICB2YWxpZFJlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgY29uc29sZS5sb2coXCJhYm9ydGluZy4uLlwiKTtcbiAgICB9KTtcbiAgICB0cnl7XG4gICAgICAgIHJlY29tbWVuZGF0aW9uTGlzdCA9IGF3YWl0IGdwdC5nZW5lcmF0ZVJlY29tbWVuZGF0aW9uKHF1ZXJ5LmdldEtleUxpc3QoKSk7XG4gICAgICAgIGlmKHZhbGlkUmVxdWVzdCl7XG4gICAgICAgICAgICBsZXQgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGRpc3BsYXkuZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbkVsZW1lbnRzKHJlY29tbWVuZGF0aW9uTGlzdCk7XG4gICAgICAgICAgICByZWNvbW1lbmRhdGlvbkVsZW1lbnRzID0gYWRkUmVjTGlzdGVuZXIocmVjb21tZW5kYXRpb25FbGVtZW50cyk7XG4gICAgICAgICAgICBkaXNwbGF5LmFwcGVuZFJlY29tbWVuZGF0aW9uKHJlY29tbWVuZGF0aW9uRWxlbWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGVycil7XG4gICAgICAgIGRpc3BsYXkuYXBwZW5kUmVjb21tZW5kYXRpb24oW10pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWN0aXZhdGVDaGF0U3BlYWsoY2hhdEluZGV4KXtcbiAgICB0dHMuaW5pdEVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NoYXQtJHtjaGF0SW5kZXh9YCksXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NoYXRTcGVhay0ke2NoYXRJbmRleH1gKSxcbiAgICAgICAgICAgICAgICBjaGF0SGlzdG9yeVtjaGF0SW5kZXhdKTtcbn1cblxuZnVuY3Rpb24gYXNrUXVlc3Rpb24oKXtcbiAgICB0ZXh0SW5wdXQuZm9jdXMoKTtcbiAgICBjbGVhclBvcFVwKCk7XG4gICAgcXVlcnkuY2xlYXIoKTtcbiAgICBkaXNwbGF5LmNsZWFyS2V5d29yZCgpO1xuICAgIGNoYXRIaXN0b3J5LnB1c2goYCR7cmVjb21tZW5kYXRpb25MaXN0W3NlbGVjdGVkUmVjb21tZW5kYXRpb25dfWApO1xuICAgIGRpc3BsYXkuYWRkVXNlckNoYXQoYDxzcGFuPiR7cmVjb21tZW5kYXRpb25MaXN0W3NlbGVjdGVkUmVjb21tZW5kYXRpb25dfTwvc3Bhbj5gLCBjaGF0SW5kZXgpO1xuICAgIGFjdGl2YXRlQ2hhdFNwZWFrKGNoYXRJbmRleCsrKTtcbiAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZnJlZXplQ2hhdEluZGV4ID0gY2hhdEluZGV4Kys7XG4gICAgICAgIGNoYXRIaXN0b3J5LnB1c2goJ2xvYWRpbmcnKTtcbiAgICAgICAgZGlzcGxheS5hZGRHUFRDaGF0KFwiPGRpdiBjbGFzcz0nZG90LWZsYXNoaW5nIGJsdWUnIHN0eWxlPSdtYXJnaW46IGF1dG87Jz48L2Rpdj5cIiwgZnJlZXplQ2hhdEluZGV4KTtcbiAgICAgICAgdHJ5e1xuICAgICAgICAgICAgY29uc3QgZ3B0UmVzcG9uc2UgPSBhd2FpdCBncHQuYXNrUXVlc3Rpb24ocmVjb21tZW5kYXRpb25MaXN0W3NlbGVjdGVkUmVjb21tZW5kYXRpb25dKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbmFsUmVzcG9uc2UgPSBncHRSZXNwb25zZS5zcGxpdCgnXFxuJylcbiAgICAgICAgICAgIC5maWx0ZXIoKGxpbmUpID0+IChsaW5lICE9PSBcIlwiKSlcbiAgICAgICAgICAgIC5tYXAoKGxpbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB3aGl0ZXNwYWNlQ291bnQgPSBsaW5lLnNlYXJjaCgvXFxTfCQvKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYDxkaXY+JHsnXFx1MDBhMCcucmVwZWF0KHdoaXRlc3BhY2VDb3VudCkrbGluZS5zbGljZSh3aGl0ZXNwYWNlQ291bnQpfTwvZGl2PlxcbmA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgICAgICAgICAgY2hhdEhpc3RvcnlbZnJlZXplQ2hhdEluZGV4XSA9IGdwdFJlc3BvbnNlO1xuICAgICAgICAgICAgYWN0aXZhdGVDaGF0U3BlYWsoZnJlZXplQ2hhdEluZGV4KTtcbiAgICAgICAgICAgIGRpc3BsYXkudXBkYXRlQ2hhdENvbnRlbnQoYDxzcGFuPiR7ZmluYWxSZXNwb25zZX08L3NwYW4+YCwgZnJlZXplQ2hhdEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaChlcnJvcil7XG4gICAgICAgICAgICBjaGF0SGlzdG9yeVtmcmVlemVDaGF0SW5kZXhdID0gXCJFcnJvciwgc2lsYWthbiBjb2JhIGxhZ2lcIjtcbiAgICAgICAgICAgIGFjdGl2YXRlQ2hhdFNwZWFrKGZyZWV6ZUNoYXRJbmRleCk7XG4gICAgICAgICAgICBkaXNwbGF5LnVwZGF0ZUNoYXRDb250ZW50KFwiPHNwYW4+RXJyb3IgOiggc2lsYWthbiBjb2JhIGxhZ2k8L3NwYW4+XCIsIGZyZWV6ZUNoYXRJbmRleCk7XG4gICAgICAgIH1cbiAgICB9LCA1MDApO1xufVxuXG5zdHQucmVwb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc3VsdCcsIChlKSA9PiB7XG4gICAgdGV4dElucHV0LnZhbHVlID0gZS5kZXRhaWw7XG59KVxuXG4vLyBpbml0aWFsaXppbmcgYWxsIGJ1dHRvbnNcbnZvaWNlSW5wdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYodm9pY2VJbnB1dEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3JlY29yZGluZycpKXtcbiAgICAgICAgdm9pY2VJbnB1dEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZWNvcmRpbmcnKTtcbiAgICAgICAgc3R0LnN0b3AoKTtcbiAgICAgICAgdm9pY2VJbnB1dEJ1dHRvbi5ibHVyKCk7XG4gICAgICAgIHRleHRJbnB1dC5mb2N1cygpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICB2b2ljZUlucHV0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3JlY29yZGluZycpO1xuICAgICAgICBpZih0ZXh0SW5wdXQudmFsdWUgIT09ICcnKSBhZGRLZXl3b3JkKCk7XG4gICAgICAgIHN0dC5zdGFydCgpO1xuICAgIH1cbn0pO1xuXG5wbHVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkS2V5d29yZCk7XG5cbnNlbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZW5kS2V5d29yZCk7XG5cbmNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtjbGVhclBvcFVwKCk7IHJlc2V0KCl9KTtcblxucmVmcmVzaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlZnJlc2hSZWNvbW1lbmRhdGlvbihzaWduYWwpKTtcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmKHJlY29tbWVuZGF0aW9uTGlzdCA9PT0gdW5kZWZpbmVkIHx8ICFkaXNwbGF5LmdldFN0YXRlKCdwb3BVcE9wZW4nKSkgcmV0dXJuO1xuICAgIGFza1F1ZXN0aW9uKCk7XG4gICAgc3VibWl0QnV0dG9uLmJsdXIoKTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYoZGlzcGxheS5nZXRTdGF0ZSgncG9wVXBMb2FkZWQnKSl7XG4gICAgICAgIHN3aXRjaChlLmtleSl7XG4gICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVjb21tZW5kYXRpb24tJHtzZWxlY3RlZFJlY29tbWVuZGF0aW9uICE9PSB1bmRlZmluZWQgPyAoc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiArIDQpICUgNSA6IDB9YClcbiAgICAgICAgICAgICAgICAgICAgLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHJlY29tbWVuZGF0aW9uLSR7c2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiAhPT0gdW5kZWZpbmVkID8gKHNlbGVjdGVkUmVjb21tZW5kYXRpb24gKyAxKSAlIDUgOiAwfWApXG4gICAgICAgICAgICAgICAgICAgIC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcmVmcmVzaEJ1dHRvbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcxJzpcbiAgICAgICAgICAgIGNhc2UgJzInOlxuICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICBjYXNlICc0JzpcbiAgICAgICAgICAgIGNhc2UgJzUnOlxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcmVjb21tZW5kYXRpb24tJHtwYXJzZUludChlLmtleSkgLSAxfWApLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmKGRpc3BsYXkuZ2V0U3RhdGUoJ3BvcFVwT3BlbicpKXtcbiAgICAgICAgc3dpdGNoKGUua2V5KXtcbiAgICAgICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBzd2l0Y2goZS5rZXkpe1xuICAgICAgICAgICAgY2FzZSAnRW50ZXInOlxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBpZih0ZXh0SW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgc2VuZEtleXdvcmQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgYWRkS2V5d29yZCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==