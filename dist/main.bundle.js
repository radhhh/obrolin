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
    font-size: 1em;
    margin: 0px;
    padding: 0px;
    position: relative;
    text-decoration-style: none;
}

:root{
    font-size: 16px;
}

body, html{
    min-height: 100%;
    width: 100%;
}

body{
    background-color: hsl(29, 46%, 93%);
    padding-top: 4em;
    padding-bottom: 7em;
}

header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background-color: hsl(29, 46%, 50%);
    color: hsl(29, 46%, 93%);
    border-bottom: hsl(29, 46%, 35%) solid 2px;
    height: 4em;
}

header > div.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

header h1{
    font-size: 2rem;
}

main{
    padding-top: 0.5em;
    scroll-margin-bottom: 400px;
}

div.chatbox{
    margin: 0.5em 1em;
    padding: 1em 1em;
    border: black solid 1px;
    border-radius: 1em;
}

div.chatbox.user{
    background-color: hsl(29, 46%, 88%);
}

div.chatbox.ai{
    background-color: hsl(29, 45%, 88%);
}

div.chatbox *{
    line-height: 1.5em;
}

ol{
    padding-left: 2ch;
}

div.chatbox > div.content > *{
    margin: 0.25em 0;
}

div#inputContainer{
    position: fixed;
    width: 100%;
    padding: 0.6em 1em 1em;
    bottom: 0;
    background-color: hsl(29, 46%, 93%);
}

div#keywordContainer{
    margin-bottom: 0.5em;
}

div#keywordContainer > div.keyword{
    display: inline-block;
    background-color: hsl(29, 46%, 80%);
    text-align: center;
    padding: 0.3em 0.5em;
    min-width: 4ch;
    border-radius: 0.3em;
}

div#keywordContainer > div.keyword:hover{
    background-color: hsl(29, 46%, 60%);
}

div#textInputContainer{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6em;
    width: calc(100vw - 2em);
}

div#textInputContainer textarea{
    padding: 0.5em;
    font-family: sans-serif;
    font-size: inherit;
    height: 1.5em;
    flex: 1;
    resize: none;
    border-radius: 0.5em;
    border: solid 1px hsl(29, 46%, 10%);
    background-color: hsl(29, 46%, 93%);
}

div#textInputContainer textarea:focus{
    /* outline: hsl(29, 46%, 10%) solid 1px; */
    outline: none;
    /* border: solid 1px red; */
    box-shadow: none;
}

div#textInputContainer button{
    background-color: hsl(29, 46%, 50%);
    color: hsl(29, 46%, 93%);
    display: block;
    width: 2.5rem;
    height: 2.5rem;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: solid 1px black;
}

div#textInputContainer button:hover{
    background-color: hsl(29, 46%, 40%);
}

button#plusButton > div{
    font-size: 2em;
    bottom: 0.08em;
}

button#sendButton > div{
    font-size: 1.2em;
    bottom: 0.02em;
    left: 0.01em;
}

div#darkOverlay{
    position: fixed;
    z-index: 150;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 40%;
}

div#darkOverlay.hidden{
    display: none;
    opacity: 0%;
}

div#recommendationPopUp{
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 200;
    transform: translate(-50%, -50%) scale(1);
    padding: 2em min(4%, 1.5em);
    background-color: hsl(29, 46%, 93%);
    width: min(80%, 80ch);
    border-radius: 0.8em;
}

div#recommendationPopUp.hidden{
    transform: translate(-50%, -50%) scale(0);
}

div#recommendationPopUp > h3{
    font-size: 1.2rem;
    font-weight: bold;
}

div#recommendationKeywordContainer{
    margin-bottom: 1.2em;
}

div.keyword{
    display: inline-block;
    background-color: hsl(29, 46%, 80%);
    height: 1.2em;
    text-align: center;
    padding: 0.3em 0.5em;
    margin-top: 0.5em;
    margin: 0.5em 0.2em 0;
    min-width: 4ch;
    border-radius: 0.3em;
}

div#recommendationQuestionContainer > div{
    background-color: hsl(29, 46%, 80%);
    border-radius: 0.5em;
    padding: 0.7em;
    margin: 0.5em 0;
    border: 1px solid hsl(29, 46%, 40%);
}

div#recommendationQuestionContainer > div.selected,
div#recommendationQuestionContainer > div.selected:hover{
    background-color: hsl(29, 46%, 70%);
    outline: 1px solid hsl(29, 46%, 40%);
}

div#recommendationQuestionContainer > div:hover{
    background-color: hsl(29, 46%, 60%);
}

div#actionButtons{
    display: flex;
    flex-direction: column;
}

div#actionButtons button{
    display: block;
    padding: 0.3em;
}

button#refreshButton{
    background-color: hsl(29, 45%, 93%);
    text-decoration: underline;
    /* border: 1px solid hsl(29, 46%, 50%); */
    border: none;
    border-radius: 0.3em;
    max-width: 20ch;
    align-self: center;
    margin: 0.2em 0 1.2em;
}

button#refreshButton:hover{
    color: hsl(29, 46%, 30%);
}

div#actionButtons > div.centerButtons{
    display: flex;
    justify-content: space-between;
    gap: min(2%, 1em);
}

div.centerButtons > button:hover{
    background-color: hsl(29, 46%, 60%);
}

div.centerButtons > button{
    background-color: hsl(29, 46%, 80%);
    border: 1px solid hsl(29, 46%, 40%);
    border-radius: 0.5em;
    flex: 1;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n    font-size: 1em;\n    margin: 0px;\n    padding: 0px;\n    position: relative;\n    text-decoration-style: none;\n}\n\n:root{\n    font-size: 16px;\n}\n\nbody, html{\n    min-height: 100%;\n    width: 100%;\n}\n\nbody{\n    background-color: hsl(29, 46%, 93%);\n    padding-top: 4em;\n    padding-bottom: 7em;\n}\n\nheader{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 100;\n    background-color: hsl(29, 46%, 50%);\n    color: hsl(29, 46%, 93%);\n    border-bottom: hsl(29, 46%, 35%) solid 2px;\n    height: 4em;\n}\n\nheader > div.container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nheader h1{\n    font-size: 2rem;\n}\n\nmain{\n    padding-top: 0.5em;\n    scroll-margin-bottom: 400px;\n}\n\ndiv.chatbox{\n    margin: 0.5em 1em;\n    padding: 1em 1em;\n    border: black solid 1px;\n    border-radius: 1em;\n}\n\ndiv.chatbox.user{\n    background-color: hsl(29, 46%, 88%);\n}\n\ndiv.chatbox.ai{\n    background-color: hsl(29, 45%, 88%);\n}\n\ndiv.chatbox *{\n    line-height: 1.5em;\n}\n\nol{\n    padding-left: 2ch;\n}\n\ndiv.chatbox > div.content > *{\n    margin: 0.25em 0;\n}\n\ndiv#inputContainer{\n    position: fixed;\n    width: 100%;\n    padding: 0.6em 1em 1em;\n    bottom: 0;\n    background-color: hsl(29, 46%, 93%);\n}\n\ndiv#keywordContainer{\n    margin-bottom: 0.5em;\n}\n\ndiv#keywordContainer > div.keyword{\n    display: inline-block;\n    background-color: hsl(29, 46%, 80%);\n    text-align: center;\n    padding: 0.3em 0.5em;\n    min-width: 4ch;\n    border-radius: 0.3em;\n}\n\ndiv#keywordContainer > div.keyword:hover{\n    background-color: hsl(29, 46%, 60%);\n}\n\ndiv#textInputContainer{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 0.6em;\n    width: calc(100vw - 2em);\n}\n\ndiv#textInputContainer textarea{\n    padding: 0.5em;\n    font-family: sans-serif;\n    font-size: inherit;\n    height: 1.5em;\n    flex: 1;\n    resize: none;\n    border-radius: 0.5em;\n    border: solid 1px hsl(29, 46%, 10%);\n    background-color: hsl(29, 46%, 93%);\n}\n\ndiv#textInputContainer textarea:focus{\n    /* outline: hsl(29, 46%, 10%) solid 1px; */\n    outline: none;\n    /* border: solid 1px red; */\n    box-shadow: none;\n}\n\ndiv#textInputContainer button{\n    background-color: hsl(29, 46%, 50%);\n    color: hsl(29, 46%, 93%);\n    display: block;\n    width: 2.5rem;\n    height: 2.5rem;\n    align-self: flex-end;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n    border: solid 1px black;\n}\n\ndiv#textInputContainer button:hover{\n    background-color: hsl(29, 46%, 40%);\n}\n\nbutton#plusButton > div{\n    font-size: 2em;\n    bottom: 0.08em;\n}\n\nbutton#sendButton > div{\n    font-size: 1.2em;\n    bottom: 0.02em;\n    left: 0.01em;\n}\n\ndiv#darkOverlay{\n    position: fixed;\n    z-index: 150;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: black;\n    opacity: 40%;\n}\n\ndiv#darkOverlay.hidden{\n    display: none;\n    opacity: 0%;\n}\n\ndiv#recommendationPopUp{\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    z-index: 200;\n    transform: translate(-50%, -50%) scale(1);\n    padding: 2em min(4%, 1.5em);\n    background-color: hsl(29, 46%, 93%);\n    width: min(80%, 80ch);\n    border-radius: 0.8em;\n}\n\ndiv#recommendationPopUp.hidden{\n    transform: translate(-50%, -50%) scale(0);\n}\n\ndiv#recommendationPopUp > h3{\n    font-size: 1.2rem;\n    font-weight: bold;\n}\n\ndiv#recommendationKeywordContainer{\n    margin-bottom: 1.2em;\n}\n\ndiv.keyword{\n    display: inline-block;\n    background-color: hsl(29, 46%, 80%);\n    height: 1.2em;\n    text-align: center;\n    padding: 0.3em 0.5em;\n    margin-top: 0.5em;\n    margin: 0.5em 0.2em 0;\n    min-width: 4ch;\n    border-radius: 0.3em;\n}\n\ndiv#recommendationQuestionContainer > div{\n    background-color: hsl(29, 46%, 80%);\n    border-radius: 0.5em;\n    padding: 0.7em;\n    margin: 0.5em 0;\n    border: 1px solid hsl(29, 46%, 40%);\n}\n\ndiv#recommendationQuestionContainer > div.selected,\ndiv#recommendationQuestionContainer > div.selected:hover{\n    background-color: hsl(29, 46%, 70%);\n    outline: 1px solid hsl(29, 46%, 40%);\n}\n\ndiv#recommendationQuestionContainer > div:hover{\n    background-color: hsl(29, 46%, 60%);\n}\n\ndiv#actionButtons{\n    display: flex;\n    flex-direction: column;\n}\n\ndiv#actionButtons button{\n    display: block;\n    padding: 0.3em;\n}\n\nbutton#refreshButton{\n    background-color: hsl(29, 45%, 93%);\n    text-decoration: underline;\n    /* border: 1px solid hsl(29, 46%, 50%); */\n    border: none;\n    border-radius: 0.3em;\n    max-width: 20ch;\n    align-self: center;\n    margin: 0.2em 0 1.2em;\n}\n\nbutton#refreshButton:hover{\n    color: hsl(29, 46%, 30%);\n}\n\ndiv#actionButtons > div.centerButtons{\n    display: flex;\n    justify-content: space-between;\n    gap: min(2%, 1em);\n}\n\ndiv.centerButtons > button:hover{\n    background-color: hsl(29, 46%, 60%);\n}\n\ndiv.centerButtons > button{\n    background-color: hsl(29, 46%, 80%);\n    border: 1px solid hsl(29, 46%, 40%);\n    border-radius: 0.5em;\n    flex: 1;\n}"],"sourceRoot":""}]);
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
/* harmony export */   clearQuestion: () => (/* binding */ clearQuestion),
/* harmony export */   generateQuestion: () => (/* binding */ generateQuestion),
/* harmony export */   getQuestion: () => (/* binding */ getQuestion),
/* harmony export */   refreshQuestion: () => (/* binding */ refreshQuestion)
/* harmony export */ });
let currentQuestion;

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

function generateQuestion(keywordList){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            currentQuestion = response1;
            resolve(currentQuestion);
        }, 1000)
    })
}

function getQuestion(){
    return currentQuestion;
}

function clearQuestion(){
    currentQuestion = undefined;
}

async function refreshQuestion(){
    if(currentQuestion === undefined) return undefined;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            currentQuestion = response2;
            resolve(currentQuestion);
        }, 1000)
    })
}

/***/ }),

/***/ "./src/scripts/display.js":
/*!********************************!*\
  !*** ./src/scripts/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendKeyword: () => (/* binding */ appendKeyword),
/* harmony export */   clearRecommendation: () => (/* binding */ clearRecommendation),
/* harmony export */   generateKeywordElement: () => (/* binding */ generateKeywordElement),
/* harmony export */   generateRecommendationElements: () => (/* binding */ generateRecommendationElements),
/* harmony export */   hidePopUpRecommendation: () => (/* binding */ hidePopUpRecommendation),
/* harmony export */   selectRecommendation: () => (/* binding */ selectRecommendation),
/* harmony export */   showPopUpRecommendation: () => (/* binding */ showPopUpRecommendation),
/* harmony export */   showRecommendation: () => (/* binding */ showRecommendation),
/* harmony export */   toggleOverlay: () => (/* binding */ toggleOverlay),
/* harmony export */   unselectRecommendation: () => (/* binding */ unselectRecommendation)
/* harmony export */ });
function clearRecommendation(){
    const questionContainer = document.getElementById('recommendationQuestionContainer');
    while(questionContainer.firstChild) questionContainer.removeChild(questionContainer.firstChild);
}

function clearKeyword(){
    const keywordContainer = document.getElementById('recommendationKeywordContainer');
    while(keywordContainer.firstChild) keywordContainer.removeChild(keywordContainer.firstChild);
}

function generateKeywordElement(keyword){
    const newKeyword = document.createElement('div');
    newKeyword.classList.add('keyword');
    newKeyword.innerHTML = keyword;
    return newKeyword;
}

function appendKeyword(newKeyword){
    // console.log(keyword);
    const keywordContainer = document.getElementById('keywordContainer');
    keywordContainer.appendChild(newKeyword);
}

function toggleOverlay(){
    document.getElementById('darkOverlay').classList.toggle('hidden');
}

function showPopUpRecommendation(keywordList){
    document.getElementById('recommendationPopUp').classList.remove('hidden');
    const keywordContainer = document.getElementById('recommendationKeywordContainer');
    keywordList.forEach((keyword) => {
        const newKeyword = document.createElement('div');
        newKeyword.classList.add('keyword');
        newKeyword.innerHTML = keyword;
        keywordContainer.appendChild(newKeyword);
    });
}

function showRecommendation(elementList){
    const questionContainer = document.getElementById('recommendationQuestionContainer');
    elementList.forEach((element) => {
        questionContainer.appendChild(element);
    });
}

function generateRecommendationElements(recommendationList){
    let elementList = [];
    recommendationList.forEach((question, index) => {
        const newQuestion = document.createElement('div');
        newQuestion.classList.add('questionChoice');
        newQuestion.id = `r-${index}`;
        newQuestion.innerHTML = question;
        elementList.push(newQuestion);
    });
    return elementList;
}

function selectRecommendation(index){
    const target = document.getElementById(`r-${index}`);
    target.classList.add('selected');
}

function unselectRecommendation(index){
    const target = document.getElementById(`r-${index}`);
    target.classList.remove('selected');
}


function hidePopUpRecommendation(){
    document.getElementById('recommendationPopUp').classList.add('hidden');
    clearRecommendation();
    clearKeyword();
}

/***/ }),

/***/ "./src/scripts/query.js":
/*!******************************!*\
  !*** ./src/scripts/query.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addKeyList: () => (/* binding */ addKeyList),
/* harmony export */   clear: () => (/* binding */ clear),
/* harmony export */   getKeyList: () => (/* binding */ getKeyList)
/* harmony export */ });
let keywordList = [];

function addKeyList(keyword){
    keywordList.push(keyword);
}

function getKeyList(keyword){
    return keywordList;
}

function clear(){
    keywordList = [];
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





let selectedRecommendation = undefined;

function addRecListener(elementList){
    elementList.forEach((element) => {
        element.addEventListener('click', () => {
            if(selectedRecommendation !== undefined){
                _display_js__WEBPACK_IMPORTED_MODULE_1__.unselectRecommendation(selectedRecommendation);
            }
            selectedRecommendation = parseInt(element.id.split("-")[1]);
            _display_js__WEBPACK_IMPORTED_MODULE_1__.selectRecommendation(selectedRecommendation);
        });
    })
    return elementList;
}

function addKeywordListener(element){
    element.addEventListener('mouseenter', () => {
        // todo listener for keyword elements
    })
    return element;
}

function addKeyword(){
    const textInput = document.getElementById('textInput');
    if(textInput.value === ''){
        return;
    }
    _query_js__WEBPACK_IMPORTED_MODULE_0__.addKeyList(textInput.value);
    let keywordElement = _display_js__WEBPACK_IMPORTED_MODULE_1__.generateKeywordElement(textInput.value);
    keywordElement = addKeywordListener(keywordElement);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.appendKeyword(keywordElement);
    textInput.value = '';
}

async function sendKeyword(){
    addKeyword();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.toggleOverlay();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.showPopUpRecommendation(_query_js__WEBPACK_IMPORTED_MODULE_0__.getKeyList());
    let recommendationElements;
    if(_ai_js__WEBPACK_IMPORTED_MODULE_2__.getQuestion() === undefined) {
        recommendationElements = _display_js__WEBPACK_IMPORTED_MODULE_1__.generateRecommendationElements(await _ai_js__WEBPACK_IMPORTED_MODULE_2__.generateQuestion(_query_js__WEBPACK_IMPORTED_MODULE_0__.getKeyList()));
    }
    else{
        recommendationElements = _display_js__WEBPACK_IMPORTED_MODULE_1__.generateRecommendationElements(_ai_js__WEBPACK_IMPORTED_MODULE_2__.getQuestion());
    }
    recommendationElements = addRecListener(recommendationElements);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.showRecommendation(recommendationElements);
}

function clearPopUp(){
    selectedRecommendation = undefined;
    _display_js__WEBPACK_IMPORTED_MODULE_1__.toggleOverlay();
    _display_js__WEBPACK_IMPORTED_MODULE_1__.hidePopUpRecommendation();
}

async function refreshQuestion(){
    selectedRecommendation = undefined;
    console.log("refreshing question");
    _display_js__WEBPACK_IMPORTED_MODULE_1__.clearRecommendation();
    recommendationElements = _display_js__WEBPACK_IMPORTED_MODULE_1__.generateRecommendationElements(await _ai_js__WEBPACK_IMPORTED_MODULE_2__.refreshQuestion());
    recommendationElements = addRecListener(recommendationElements);
    _display_js__WEBPACK_IMPORTED_MODULE_1__.showRecommendation(recommendationElements);
}

document.getElementById('plusButton').addEventListener('click', addKeyword);

document.getElementById('sendButton').addEventListener('click', sendKeyword);

document.getElementById('cancelButton').addEventListener('click', clearPopUp);

document.getElementById('refreshButton').addEventListener('click', refreshQuestion);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZ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Q1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ0k7QUFDVDtBQUNUOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrREFBOEI7QUFDOUM7QUFDQTtBQUNBLFlBQVksNkRBQTRCO0FBQ3hDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxpREFBZ0I7QUFDcEIseUJBQXlCLCtEQUE4QjtBQUN2RDtBQUNBLElBQUksc0RBQXFCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQXFCO0FBQ3pCLElBQUksZ0VBQStCLENBQUMsaURBQWdCO0FBQ3BEO0FBQ0EsT0FBTywrQ0FBZTtBQUN0QixpQ0FBaUMsdUVBQXNDLE9BQU8sb0RBQW9CLENBQUMsaURBQWdCO0FBQ25IO0FBQ0E7QUFDQSxpQ0FBaUMsdUVBQXNDLENBQUMsK0NBQWU7QUFDdkY7QUFDQTtBQUNBLElBQUksMkRBQTBCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNEQUFxQjtBQUN6QixJQUFJLGdFQUErQjtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUEyQjtBQUMvQiw2QkFBNkIsdUVBQXNDLE9BQU8sbURBQW1CO0FBQzdGO0FBQ0EsSUFBSSwyREFBMEI7QUFDOUI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9haS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvcXVlcnkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBub25lO1xufVxuXG46cm9vdHtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbmJvZHksIGh0bWx7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgOTMlKTtcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xuICAgIHBhZGRpbmctYm90dG9tOiA3ZW07XG59XG5cbmhlYWRlcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNTAlKTtcbiAgICBjb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XG4gICAgYm9yZGVyLWJvdHRvbTogaHNsKDI5LCA0NiUsIDM1JSkgc29saWQgMnB4O1xuICAgIGhlaWdodDogNGVtO1xufVxuXG5oZWFkZXIgPiBkaXYuY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmhlYWRlciBoMXtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbm1haW57XG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xuICAgIHNjcm9sbC1tYXJnaW4tYm90dG9tOiA0MDBweDtcbn1cblxuZGl2LmNoYXRib3h7XG4gICAgbWFyZ2luOiAwLjVlbSAxZW07XG4gICAgcGFkZGluZzogMWVtIDFlbTtcbiAgICBib3JkZXI6IGJsYWNrIHNvbGlkIDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG59XG5cbmRpdi5jaGF0Ym94LnVzZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDg4JSk7XG59XG5cbmRpdi5jaGF0Ym94LmFpe1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDUlLCA4OCUpO1xufVxuXG5kaXYuY2hhdGJveCAqe1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbn1cblxub2x7XG4gICAgcGFkZGluZy1sZWZ0OiAyY2g7XG59XG5cbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgPiAqe1xuICAgIG1hcmdpbjogMC4yNWVtIDA7XG59XG5cbmRpdiNpbnB1dENvbnRhaW5lcntcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMC42ZW0gMWVtIDFlbTtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVye1xuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciA+IGRpdi5rZXl3b3Jke1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgODAlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4zZW0gMC41ZW07XG4gICAgbWluLXdpZHRoOiA0Y2g7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG59XG5cbmRpdiNrZXl3b3JkQ29udGFpbmVyID4gZGl2LmtleXdvcmQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDYwJSk7XG59XG5cbmRpdiN0ZXh0SW5wdXRDb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjZlbTtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDJlbSk7XG59XG5cbmRpdiN0ZXh0SW5wdXRDb250YWluZXIgdGV4dGFyZWF7XG4gICAgcGFkZGluZzogMC41ZW07XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgZmxleDogMTtcbiAgICByZXNpemU6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggaHNsKDI5LCA0NiUsIDEwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XG59XG5cbmRpdiN0ZXh0SW5wdXRDb250YWluZXIgdGV4dGFyZWE6Zm9jdXN7XG4gICAgLyogb3V0bGluZTogaHNsKDI5LCA0NiUsIDEwJSkgc29saWQgMXB4OyAqL1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgLyogYm9yZGVyOiBzb2xpZCAxcHggcmVkOyAqL1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbmRpdiN0ZXh0SW5wdXRDb250YWluZXIgYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA1MCUpO1xuICAgIGNvbG9yOiBoc2woMjksIDQ2JSwgOTMlKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMi41cmVtO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XG59XG5cbmRpdiN0ZXh0SW5wdXRDb250YWluZXIgYnV0dG9uOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA0MCUpO1xufVxuXG5idXR0b24jcGx1c0J1dHRvbiA+IGRpdntcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBib3R0b206IDAuMDhlbTtcbn1cblxuYnV0dG9uI3NlbmRCdXR0b24gPiBkaXZ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3R0b206IDAuMDJlbTtcbiAgICBsZWZ0OiAwLjAxZW07XG59XG5cbmRpdiNkYXJrT3ZlcmxheXtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTUwO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvcGFjaXR5OiA0MCU7XG59XG5cbmRpdiNkYXJrT3ZlcmxheS5oaWRkZW57XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBvcGFjaXR5OiAwJTtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB6LWluZGV4OiAyMDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgcGFkZGluZzogMmVtIG1pbig0JSwgMS41ZW0pO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xuICAgIHdpZHRoOiBtaW4oODAlLCA4MGNoKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjhlbTtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAuaGlkZGVue1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGgze1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVye1xuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xufVxuXG5kaXYua2V5d29yZHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDgwJSk7XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4zZW0gMC41ZW07XG4gICAgbWFyZ2luLXRvcDogMC41ZW07XG4gICAgbWFyZ2luOiAwLjVlbSAwLjJlbSAwO1xuICAgIG1pbi13aWR0aDogNGNoO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lciA+IGRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgODAlKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcbiAgICBwYWRkaW5nOiAwLjdlbTtcbiAgICBtYXJnaW46IDAuNWVtIDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDI5LCA0NiUsIDQwJSk7XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyID4gZGl2LnNlbGVjdGVkLFxuZGl2I3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXIgPiBkaXYuc2VsZWN0ZWQ6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDcwJSk7XG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGhzbCgyOSwgNDYlLCA0MCUpO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lciA+IGRpdjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNjAlKTtcbn1cblxuZGl2I2FjdGlvbkJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5kaXYjYWN0aW9uQnV0dG9ucyBidXR0b257XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMC4zZW07XG59XG5cbmJ1dHRvbiNyZWZyZXNoQnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDUlLCA5MyUpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyOSwgNDYlLCA1MCUpOyAqL1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbiAgICBtYXgtd2lkdGg6IDIwY2g7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIG1hcmdpbjogMC4yZW0gMCAxLjJlbTtcbn1cblxuYnV0dG9uI3JlZnJlc2hCdXR0b246aG92ZXJ7XG4gICAgY29sb3I6IGhzbCgyOSwgNDYlLCAzMCUpO1xufVxuXG5kaXYjYWN0aW9uQnV0dG9ucyA+IGRpdi5jZW50ZXJCdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGdhcDogbWluKDIlLCAxZW0pO1xufVxuXG5kaXYuY2VudGVyQnV0dG9ucyA+IGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNjAlKTtcbn1cblxuZGl2LmNlbnRlckJ1dHRvbnMgPiBidXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDgwJSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDI5LCA0NiUsIDQwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgZmxleDogMTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsd0JBQXdCO0lBQ3hCLDBDQUEwQztJQUMxQyxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVB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QyxtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLE9BQU87QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiBub25lO1xcbn1cXG5cXG46cm9vdHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5ib2R5LCBodG1se1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XFxuICAgIHBhZGRpbmctdG9wOiA0ZW07XFxuICAgIHBhZGRpbmctYm90dG9tOiA3ZW07XFxufVxcblxcbmhlYWRlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB6LWluZGV4OiAxMDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA1MCUpO1xcbiAgICBjb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XFxuICAgIGJvcmRlci1ib3R0b206IGhzbCgyOSwgNDYlLCAzNSUpIHNvbGlkIDJweDtcXG4gICAgaGVpZ2h0OiA0ZW07XFxufVxcblxcbmhlYWRlciA+IGRpdi5jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIgaDF7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxubWFpbntcXG4gICAgcGFkZGluZy10b3A6IDAuNWVtO1xcbiAgICBzY3JvbGwtbWFyZ2luLWJvdHRvbTogNDAwcHg7XFxufVxcblxcbmRpdi5jaGF0Ym94e1xcbiAgICBtYXJnaW46IDAuNWVtIDFlbTtcXG4gICAgcGFkZGluZzogMWVtIDFlbTtcXG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcXG59XFxuXFxuZGl2LmNoYXRib3gudXNlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDg4JSk7XFxufVxcblxcbmRpdi5jaGF0Ym94LmFpe1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ1JSwgODglKTtcXG59XFxuXFxuZGl2LmNoYXRib3ggKntcXG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xcbn1cXG5cXG5vbHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyY2g7XFxufVxcblxcbmRpdi5jaGF0Ym94ID4gZGl2LmNvbnRlbnQgPiAqe1xcbiAgICBtYXJnaW46IDAuMjVlbSAwO1xcbn1cXG5cXG5kaXYjaW5wdXRDb250YWluZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAuNmVtIDFlbSAxZW07XFxuICAgIGJvdHRvbTogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVye1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgPiBkaXYua2V5d29yZHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgODAlKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjVlbTtcXG4gICAgbWluLXdpZHRoOiA0Y2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lciA+IGRpdi5rZXl3b3JkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNjAlKTtcXG59XFxuXFxuZGl2I3RleHRJbnB1dENvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAwLjZlbTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyZW0pO1xcbn1cXG5cXG5kaXYjdGV4dElucHV0Q29udGFpbmVyIHRleHRhcmVhe1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgaGVpZ2h0OiAxLjVlbTtcXG4gICAgZmxleDogMTtcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggaHNsKDI5LCA0NiUsIDEwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xcbn1cXG5cXG5kaXYjdGV4dElucHV0Q29udGFpbmVyIHRleHRhcmVhOmZvY3Vze1xcbiAgICAvKiBvdXRsaW5lOiBoc2woMjksIDQ2JSwgMTAlKSBzb2xpZCAxcHg7ICovXFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJlZDsgKi9cXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuZGl2I3RleHRJbnB1dENvbnRhaW5lciBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA1MCUpO1xcbiAgICBjb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMi41cmVtO1xcbiAgICBoZWlnaHQ6IDIuNXJlbTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xcbn1cXG5cXG5kaXYjdGV4dElucHV0Q29udGFpbmVyIGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDQwJSk7XFxufVxcblxcbmJ1dHRvbiNwbHVzQnV0dG9uID4gZGl2e1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYm90dG9tOiAwLjA4ZW07XFxufVxcblxcbmJ1dHRvbiNzZW5kQnV0dG9uID4gZGl2e1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBib3R0b206IDAuMDJlbTtcXG4gICAgbGVmdDogMC4wMWVtO1xcbn1cXG5cXG5kaXYjZGFya092ZXJsYXl7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTUwO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBvcGFjaXR5OiA0MCU7XFxufVxcblxcbmRpdiNkYXJrT3ZlcmxheS5oaWRkZW57XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDAlO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB6LWluZGV4OiAyMDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbiAgICBwYWRkaW5nOiAyZW0gbWluKDQlLCAxLjVlbSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xcbiAgICB3aWR0aDogbWluKDgwJSwgODBjaCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcC5oaWRkZW57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDApO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25Qb3BVcCA+IGgze1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdiNyZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXJ7XFxuICAgIG1hcmdpbi1ib3R0b206IDEuMmVtO1xcbn1cXG5cXG5kaXYua2V5d29yZHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgODAlKTtcXG4gICAgaGVpZ2h0OiAxLjJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjNlbSAwLjVlbTtcXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XFxuICAgIG1hcmdpbjogMC41ZW0gMC4yZW0gMDtcXG4gICAgbWluLXdpZHRoOiA0Y2g7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lciA+IGRpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDgwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xcbiAgICBwYWRkaW5nOiAwLjdlbTtcXG4gICAgbWFyZ2luOiAwLjVlbSAwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjksIDQ2JSwgNDAlKTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXIgPiBkaXYuc2VsZWN0ZWQsXFxuZGl2I3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXIgPiBkaXYuc2VsZWN0ZWQ6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA3MCUpO1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgaHNsKDI5LCA0NiUsIDQwJSk7XFxufVxcblxcbmRpdiNyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyID4gZGl2OmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNjAlKTtcXG59XFxuXFxuZGl2I2FjdGlvbkJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbmRpdiNhY3Rpb25CdXR0b25zIGJ1dHRvbntcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDAuM2VtO1xcbn1cXG5cXG5idXR0b24jcmVmcmVzaEJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NSUsIDkzJSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBoc2woMjksIDQ2JSwgNTAlKTsgKi9cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG4gICAgbWF4LXdpZHRoOiAyMGNoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMC4yZW0gMCAxLjJlbTtcXG59XFxuXFxuYnV0dG9uI3JlZnJlc2hCdXR0b246aG92ZXJ7XFxuICAgIGNvbG9yOiBoc2woMjksIDQ2JSwgMzAlKTtcXG59XFxuXFxuZGl2I2FjdGlvbkJ1dHRvbnMgPiBkaXYuY2VudGVyQnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBnYXA6IG1pbigyJSwgMWVtKTtcXG59XFxuXFxuZGl2LmNlbnRlckJ1dHRvbnMgPiBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA2MCUpO1xcbn1cXG5cXG5kaXYuY2VudGVyQnV0dG9ucyA+IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDgwJSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyOSwgNDYlLCA0MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgZmxleDogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImxldCBjdXJyZW50UXVlc3Rpb247XG5cbmNvbnN0IHJlc3BvbnNlMSA9IFtcbiAgICBcIkluaSBwZXJ0YW55YWFuIDFcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIDJcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIDNcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIDRcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIDVcIixcbl07XG5cbmNvbnN0IHJlc3BvbnNlMiA9IFtcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAxXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgMlwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDNcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCA0XCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgNVwiLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVRdWVzdGlvbihrZXl3b3JkTGlzdCl7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24gPSByZXNwb25zZTE7XG4gICAgICAgICAgICByZXNvbHZlKGN1cnJlbnRRdWVzdGlvbik7XG4gICAgICAgIH0sIDEwMDApXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXN0aW9uKCl7XG4gICAgcmV0dXJuIGN1cnJlbnRRdWVzdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyUXVlc3Rpb24oKXtcbiAgICBjdXJyZW50UXVlc3Rpb24gPSB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoUXVlc3Rpb24oKXtcbiAgICBpZihjdXJyZW50UXVlc3Rpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRRdWVzdGlvbiA9IHJlc3BvbnNlMjtcbiAgICAgICAgICAgIHJlc29sdmUoY3VycmVudFF1ZXN0aW9uKTtcbiAgICAgICAgfSwgMTAwMClcbiAgICB9KVxufSIsImV4cG9ydCBmdW5jdGlvbiBjbGVhclJlY29tbWVuZGF0aW9uKCl7XG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lcicpO1xuICAgIHdoaWxlKHF1ZXN0aW9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHF1ZXN0aW9uQ29udGFpbmVyLnJlbW92ZUNoaWxkKHF1ZXN0aW9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5mdW5jdGlvbiBjbGVhcktleXdvcmQoKXtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcicpO1xuICAgIHdoaWxlKGtleXdvcmRDb250YWluZXIuZmlyc3RDaGlsZCkga2V5d29yZENvbnRhaW5lci5yZW1vdmVDaGlsZChrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVLZXl3b3JkRWxlbWVudChrZXl3b3JkKXtcbiAgICBjb25zdCBuZXdLZXl3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3S2V5d29yZC5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkJyk7XG4gICAgbmV3S2V5d29yZC5pbm5lckhUTUwgPSBrZXl3b3JkO1xuICAgIHJldHVybiBuZXdLZXl3b3JkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kS2V5d29yZChuZXdLZXl3b3JkKXtcbiAgICAvLyBjb25zb2xlLmxvZyhrZXl3b3JkKTtcbiAgICBjb25zdCBrZXl3b3JkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2tleXdvcmRDb250YWluZXInKTtcbiAgICBrZXl3b3JkQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0tleXdvcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlT3ZlcmxheSgpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXJrT3ZlcmxheScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd1BvcFVwUmVjb21tZW5kYXRpb24oa2V5d29yZExpc3Qpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXInKTtcbiAgICBrZXl3b3JkTGlzdC5mb3JFYWNoKChrZXl3b3JkKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0tleXdvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmV3S2V5d29yZC5jbGFzc0xpc3QuYWRkKCdrZXl3b3JkJyk7XG4gICAgICAgIG5ld0tleXdvcmQuaW5uZXJIVE1MID0ga2V5d29yZDtcbiAgICAgICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdLZXl3b3JkKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dSZWNvbW1lbmRhdGlvbihlbGVtZW50TGlzdCl7XG4gICAgY29uc3QgcXVlc3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lcicpO1xuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgcXVlc3Rpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJlY29tbWVuZGF0aW9uRWxlbWVudHMocmVjb21tZW5kYXRpb25MaXN0KXtcbiAgICBsZXQgZWxlbWVudExpc3QgPSBbXTtcbiAgICByZWNvbW1lbmRhdGlvbkxpc3QuZm9yRWFjaCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1F1ZXN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ3F1ZXN0aW9uQ2hvaWNlJyk7XG4gICAgICAgIG5ld1F1ZXN0aW9uLmlkID0gYHItJHtpbmRleH1gO1xuICAgICAgICBuZXdRdWVzdGlvbi5pbm5lckhUTUwgPSBxdWVzdGlvbjtcbiAgICAgICAgZWxlbWVudExpc3QucHVzaChuZXdRdWVzdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0UmVjb21tZW5kYXRpb24oaW5kZXgpe1xuICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGByLSR7aW5kZXh9YCk7XG4gICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bnNlbGVjdFJlY29tbWVuZGF0aW9uKGluZGV4KXtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgci0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlUG9wVXBSZWNvbW1lbmRhdGlvbigpe1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvblBvcFVwJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgY2xlYXJSZWNvbW1lbmRhdGlvbigpO1xuICAgIGNsZWFyS2V5d29yZCgpO1xufSIsImxldCBrZXl3b3JkTGlzdCA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkS2V5TGlzdChrZXl3b3JkKXtcbiAgICBrZXl3b3JkTGlzdC5wdXNoKGtleXdvcmQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5TGlzdChrZXl3b3JkKXtcbiAgICByZXR1cm4ga2V5d29yZExpc3Q7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhcigpe1xuICAgIGtleXdvcmRMaXN0ID0gW107XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgcXVlcnkgZnJvbSBcIi4vcXVlcnkuanNcIjtcbmltcG9ydCAqIGFzIGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5LmpzJztcbmltcG9ydCAqIGFzIGdwdCBmcm9tICcuL2FpLmpzJztcbmltcG9ydCBcIi4uL3N0eWxlLmNzc1wiO1xuXG5sZXQgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gYWRkUmVjTGlzdGVuZXIoZWxlbWVudExpc3Qpe1xuICAgIGVsZW1lbnRMaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkUmVjb21tZW5kYXRpb24gIT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICAgICAgZGlzcGxheS51bnNlbGVjdFJlY29tbWVuZGF0aW9uKHNlbGVjdGVkUmVjb21tZW5kYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHBhcnNlSW50KGVsZW1lbnQuaWQuc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgICAgICAgIGRpc3BsYXkuc2VsZWN0UmVjb21tZW5kYXRpb24oc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbik7XG4gICAgICAgIH0pO1xuICAgIH0pXG4gICAgcmV0dXJuIGVsZW1lbnRMaXN0O1xufVxuXG5mdW5jdGlvbiBhZGRLZXl3b3JkTGlzdGVuZXIoZWxlbWVudCl7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAvLyB0b2RvIGxpc3RlbmVyIGZvciBrZXl3b3JkIGVsZW1lbnRzXG4gICAgfSlcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZCgpe1xuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0SW5wdXQnKTtcbiAgICBpZih0ZXh0SW5wdXQudmFsdWUgPT09ICcnKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBxdWVyeS5hZGRLZXlMaXN0KHRleHRJbnB1dC52YWx1ZSk7XG4gICAgbGV0IGtleXdvcmRFbGVtZW50ID0gZGlzcGxheS5nZW5lcmF0ZUtleXdvcmRFbGVtZW50KHRleHRJbnB1dC52YWx1ZSk7XG4gICAga2V5d29yZEVsZW1lbnQgPSBhZGRLZXl3b3JkTGlzdGVuZXIoa2V5d29yZEVsZW1lbnQpO1xuICAgIGRpc3BsYXkuYXBwZW5kS2V5d29yZChrZXl3b3JkRWxlbWVudCk7XG4gICAgdGV4dElucHV0LnZhbHVlID0gJyc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHNlbmRLZXl3b3JkKCl7XG4gICAgYWRkS2V5d29yZCgpO1xuICAgIGRpc3BsYXkudG9nZ2xlT3ZlcmxheSgpO1xuICAgIGRpc3BsYXkuc2hvd1BvcFVwUmVjb21tZW5kYXRpb24ocXVlcnkuZ2V0S2V5TGlzdCgpKTtcbiAgICBsZXQgcmVjb21tZW5kYXRpb25FbGVtZW50cztcbiAgICBpZihncHQuZ2V0UXVlc3Rpb24oKSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJlY29tbWVuZGF0aW9uRWxlbWVudHMgPSBkaXNwbGF5LmdlbmVyYXRlUmVjb21tZW5kYXRpb25FbGVtZW50cyhhd2FpdCBncHQuZ2VuZXJhdGVRdWVzdGlvbihxdWVyeS5nZXRLZXlMaXN0KCkpKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGRpc3BsYXkuZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbkVsZW1lbnRzKGdwdC5nZXRRdWVzdGlvbigpKTtcbiAgICB9XG4gICAgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGFkZFJlY0xpc3RlbmVyKHJlY29tbWVuZGF0aW9uRWxlbWVudHMpO1xuICAgIGRpc3BsYXkuc2hvd1JlY29tbWVuZGF0aW9uKHJlY29tbWVuZGF0aW9uRWxlbWVudHMpO1xufVxuXG5mdW5jdGlvbiBjbGVhclBvcFVwKCl7XG4gICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICBkaXNwbGF5LnRvZ2dsZU92ZXJsYXkoKTtcbiAgICBkaXNwbGF5LmhpZGVQb3BVcFJlY29tbWVuZGF0aW9uKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZnJlc2hRdWVzdGlvbigpe1xuICAgIHNlbGVjdGVkUmVjb21tZW5kYXRpb24gPSB1bmRlZmluZWQ7XG4gICAgY29uc29sZS5sb2coXCJyZWZyZXNoaW5nIHF1ZXN0aW9uXCIpO1xuICAgIGRpc3BsYXkuY2xlYXJSZWNvbW1lbmRhdGlvbigpO1xuICAgIHJlY29tbWVuZGF0aW9uRWxlbWVudHMgPSBkaXNwbGF5LmdlbmVyYXRlUmVjb21tZW5kYXRpb25FbGVtZW50cyhhd2FpdCBncHQucmVmcmVzaFF1ZXN0aW9uKCkpO1xuICAgIHJlY29tbWVuZGF0aW9uRWxlbWVudHMgPSBhZGRSZWNMaXN0ZW5lcihyZWNvbW1lbmRhdGlvbkVsZW1lbnRzKTtcbiAgICBkaXNwbGF5LnNob3dSZWNvbW1lbmRhdGlvbihyZWNvbW1lbmRhdGlvbkVsZW1lbnRzKTtcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsdXNCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZEtleXdvcmQpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VuZEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VuZEtleXdvcmQpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FuY2VsQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbGVhclBvcFVwKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZnJlc2hCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZnJlc2hRdWVzdGlvbik7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0SW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICBpZihlLmtleSA9PT0gJ0VudGVyJyl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYoZS5jdHJsS2V5KXtcbiAgICAgICAgICAgIHNlbmRLZXl3b3JkKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFkZEtleXdvcmQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9