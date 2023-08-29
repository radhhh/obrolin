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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZ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Q1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ0k7QUFDVDtBQUNUOztBQUV0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrREFBOEI7QUFDOUM7QUFDQTtBQUNBLFlBQVksNkRBQTRCO0FBQ3hDLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksaURBQWdCO0FBQ3BCLHlCQUF5QiwrREFBOEI7QUFDdkQ7QUFDQSxJQUFJLHNEQUFxQjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNEQUFxQjtBQUN6QixJQUFJLGdFQUErQixDQUFDLGlEQUFnQjtBQUNwRDtBQUNBLE9BQU8sK0NBQWU7QUFDdEIsaUNBQWlDLHVFQUFzQyxPQUFPLG9EQUFvQixDQUFDLGlEQUFnQjtBQUNuSDtBQUNBO0FBQ0EsaUNBQWlDLHVFQUFzQyxDQUFDLCtDQUFlO0FBQ3ZGO0FBQ0E7QUFDQSxJQUFJLDJEQUEwQjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBcUI7QUFDekIsSUFBSSxnRUFBK0I7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBMkI7QUFDL0IsNkJBQTZCLHVFQUFzQyxPQUFPLG1EQUFtQjtBQUM3RjtBQUNBLElBQUksMkRBQTBCO0FBQzlCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29icm9saW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vYnJvbGluLy4vc3JjL3NjcmlwdHMvYWkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi8uL3NyYy9zY3JpcHRzL3F1ZXJ5LmpzIiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vYnJvbGluL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Jyb2xpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29icm9saW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29icm9saW4vLi9zcmMvc2NyaXB0cy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogbm9uZTtcbn1cblxuOnJvb3R7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5ib2R5LCBodG1se1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XG4gICAgcGFkZGluZy10b3A6IDRlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogN2VtO1xufVxuXG5oZWFkZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDUwJSk7XG4gICAgY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xuICAgIGJvcmRlci1ib3R0b206IGhzbCgyOSwgNDYlLCAzNSUpIHNvbGlkIDJweDtcbiAgICBoZWlnaHQ6IDRlbTtcbn1cblxuaGVhZGVyID4gZGl2LmNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oZWFkZXIgaDF7XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5tYWlue1xuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgICBzY3JvbGwtbWFyZ2luLWJvdHRvbTogNDAwcHg7XG59XG5cbmRpdi5jaGF0Ym94e1xuICAgIG1hcmdpbjogMC41ZW0gMWVtO1xuICAgIHBhZGRpbmc6IDFlbSAxZW07XG4gICAgYm9yZGVyOiBibGFjayBzb2xpZCAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuXG5kaXYuY2hhdGJveC51c2Vye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA4OCUpO1xufVxuXG5kaXYuY2hhdGJveC5haXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ1JSwgODglKTtcbn1cblxuZGl2LmNoYXRib3ggKntcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG59XG5cbm9se1xuICAgIHBhZGRpbmctbGVmdDogMmNoO1xufVxuXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50ID4gKntcbiAgICBtYXJnaW46IDAuMjVlbSAwO1xufVxuXG5kaXYjaW5wdXRDb250YWluZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuNmVtIDFlbSAxZW07XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lcntcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuZGl2I2tleXdvcmRDb250YWluZXIgPiBkaXYua2V5d29yZHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDgwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuM2VtIDAuNWVtO1xuICAgIG1pbi13aWR0aDogNGNoO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xufVxuXG5kaXYja2V5d29yZENvbnRhaW5lciA+IGRpdi5rZXl3b3JkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA2MCUpO1xufVxuXG5kaXYjdGV4dElucHV0Q29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC42ZW07XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyZW0pO1xufVxuXG5kaXYjdGV4dElucHV0Q29udGFpbmVyIHRleHRhcmVhe1xuICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIGZsZXg6IDE7XG4gICAgcmVzaXplOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGhzbCgyOSwgNDYlLCAxMCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xufVxuXG5kaXYjdGV4dElucHV0Q29udGFpbmVyIHRleHRhcmVhOmZvY3Vze1xuICAgIC8qIG91dGxpbmU6IGhzbCgyOSwgNDYlLCAxMCUpIHNvbGlkIDFweDsgKi9cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIC8qIGJvcmRlcjogc29saWQgMXB4IHJlZDsgKi9cbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG5kaXYjdGV4dElucHV0Q29udGFpbmVyIGJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNTAlKTtcbiAgICBjb2xvcjogaHNsKDI5LCA0NiUsIDkzJSk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogc29saWQgMXB4IGJsYWNrO1xufVxuXG5kaXYjdGV4dElucHV0Q29udGFpbmVyIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNDAlKTtcbn1cblxuYnV0dG9uI3BsdXNCdXR0b24gPiBkaXZ7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYm90dG9tOiAwLjA4ZW07XG59XG5cbmJ1dHRvbiNzZW5kQnV0dG9uID4gZGl2e1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgYm90dG9tOiAwLjAyZW07XG4gICAgbGVmdDogMC4wMWVtO1xufVxuXG5kaXYjZGFya092ZXJsYXl7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE1MDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb3BhY2l0eTogNDAlO1xufVxuXG5kaXYjZGFya092ZXJsYXkuaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgb3BhY2l0eTogMCU7XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwe1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgei1pbmRleDogMjAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgIHBhZGRpbmc6IDJlbSBtaW4oNCUsIDEuNWVtKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgOTMlKTtcbiAgICB3aWR0aDogbWluKDgwJSwgODBjaCk7XG4gICAgYm9yZGVyLXJhZGl1czogMC44ZW07XG59XG5cbmRpdiNyZWNvbW1lbmRhdGlvblBvcFVwLmhpZGRlbntcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBoM3tcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uS2V5d29yZENvbnRhaW5lcntcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcbn1cblxuZGl2LmtleXdvcmR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA4MCUpO1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuM2VtIDAuNWVtO1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbjogMC41ZW0gMC4yZW0gMDtcbiAgICBtaW4td2lkdGg6IDRjaDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXIgPiBkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDgwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgcGFkZGluZzogMC43ZW07XG4gICAgbWFyZ2luOiAwLjVlbSAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyOSwgNDYlLCA0MCUpO1xufVxuXG5kaXYjcmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lciA+IGRpdi5zZWxlY3RlZCxcbmRpdiNyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyID4gZGl2LnNlbGVjdGVkOmhvdmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA3MCUpO1xuICAgIG91dGxpbmU6IDFweCBzb2xpZCBoc2woMjksIDQ2JSwgNDAlKTtcbn1cblxuZGl2I3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXIgPiBkaXY6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDYwJSk7XG59XG5cbmRpdiNhY3Rpb25CdXR0b25ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZGl2I2FjdGlvbkJ1dHRvbnMgYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuM2VtO1xufVxuXG5idXR0b24jcmVmcmVzaEJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ1JSwgOTMlKTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBoc2woMjksIDQ2JSwgNTAlKTsgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgbWF4LXdpZHRoOiAyMGNoO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAuMmVtIDAgMS4yZW07XG59XG5cbmJ1dHRvbiNyZWZyZXNoQnV0dG9uOmhvdmVye1xuICAgIGNvbG9yOiBoc2woMjksIDQ2JSwgMzAlKTtcbn1cblxuZGl2I2FjdGlvbkJ1dHRvbnMgPiBkaXYuY2VudGVyQnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IG1pbigyJSwgMWVtKTtcbn1cblxuZGl2LmNlbnRlckJ1dHRvbnMgPiBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDYwJSk7XG59XG5cbmRpdi5jZW50ZXJCdXR0b25zID4gYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA4MCUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyOSwgNDYlLCA0MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAgIGZsZXg6IDE7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QiwwQ0FBMEM7SUFDMUMsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsU0FBUztJQUNULG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixPQUFPO0lBQ1AsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixtQ0FBbUM7SUFDbkMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLHdCQUF3QjtJQUN4QixjQUFjO0lBQ2QsYUFBYTtJQUNiLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlDQUF5QztJQUN6QywyQkFBMkI7SUFDM0IsbUNBQW1DO0lBQ25DLHFCQUFxQjtJQUNyQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsbUNBQW1DO0FBQ3ZDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsMEJBQTBCO0lBQzFCLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixPQUFPO0FBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogbm9uZTtcXG59XFxuXFxuOnJvb3R7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuYm9keSwgaHRtbHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xcbiAgICBwYWRkaW5nLXRvcDogNGVtO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogN2VtO1xcbn1cXG5cXG5oZWFkZXJ7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogMTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNTAlKTtcXG4gICAgY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xcbiAgICBib3JkZXItYm90dG9tOiBoc2woMjksIDQ2JSwgMzUlKSBzb2xpZCAycHg7XFxuICAgIGhlaWdodDogNGVtO1xcbn1cXG5cXG5oZWFkZXIgPiBkaXYuY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIGgxe1xcbiAgICBmb250LXNpemU6IDJyZW07XFxufVxcblxcbm1haW57XFxuICAgIHBhZGRpbmctdG9wOiAwLjVlbTtcXG4gICAgc2Nyb2xsLW1hcmdpbi1ib3R0b206IDQwMHB4O1xcbn1cXG5cXG5kaXYuY2hhdGJveHtcXG4gICAgbWFyZ2luOiAwLjVlbSAxZW07XFxuICAgIHBhZGRpbmc6IDFlbSAxZW07XFxuICAgIGJvcmRlcjogYmxhY2sgc29saWQgMXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XFxufVxcblxcbmRpdi5jaGF0Ym94LnVzZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA4OCUpO1xcbn1cXG5cXG5kaXYuY2hhdGJveC5haXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NSUsIDg4JSk7XFxufVxcblxcbmRpdi5jaGF0Ym94ICp7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcXG59XFxuXFxub2x7XFxuICAgIHBhZGRpbmctbGVmdDogMmNoO1xcbn1cXG5cXG5kaXYuY2hhdGJveCA+IGRpdi5jb250ZW50ID4gKntcXG4gICAgbWFyZ2luOiAwLjI1ZW0gMDtcXG59XFxuXFxuZGl2I2lucHV0Q29udGFpbmVye1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nOiAwLjZlbSAxZW0gMWVtO1xcbiAgICBib3R0b206IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xcbn1cXG5cXG5kaXYja2V5d29yZENvbnRhaW5lcntcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcblxcbmRpdiNrZXl3b3JkQ29udGFpbmVyID4gZGl2LmtleXdvcmR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDgwJSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4zZW0gMC41ZW07XFxuICAgIG1pbi13aWR0aDogNGNoO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG59XFxuXFxuZGl2I2tleXdvcmRDb250YWluZXIgPiBkaXYua2V5d29yZDpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDYwJSk7XFxufVxcblxcbmRpdiN0ZXh0SW5wdXRDb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMC42ZW07XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMmVtKTtcXG59XFxuXFxuZGl2I3RleHRJbnB1dENvbnRhaW5lciB0ZXh0YXJlYXtcXG4gICAgcGFkZGluZzogMC41ZW07XFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGhlaWdodDogMS41ZW07XFxuICAgIGZsZXg6IDE7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGJvcmRlcjogc29saWQgMXB4IGhzbCgyOSwgNDYlLCAxMCUpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgOTMlKTtcXG59XFxuXFxuZGl2I3RleHRJbnB1dENvbnRhaW5lciB0ZXh0YXJlYTpmb2N1c3tcXG4gICAgLyogb3V0bGluZTogaHNsKDI5LCA0NiUsIDEwJSkgc29saWQgMXB4OyAqL1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICAvKiBib3JkZXI6IHNvbGlkIDFweCByZWQ7ICovXFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbmRpdiN0ZXh0SW5wdXRDb250YWluZXIgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNTAlKTtcXG4gICAgY29sb3I6IGhzbCgyOSwgNDYlLCA5MyUpO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDIuNXJlbTtcXG4gICAgaGVpZ2h0OiAyLjVyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcXG59XFxuXFxuZGl2I3RleHRJbnB1dENvbnRhaW5lciBidXR0b246aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA0MCUpO1xcbn1cXG5cXG5idXR0b24jcGx1c0J1dHRvbiA+IGRpdntcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGJvdHRvbTogMC4wOGVtO1xcbn1cXG5cXG5idXR0b24jc2VuZEJ1dHRvbiA+IGRpdntcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXG4gICAgYm90dG9tOiAwLjAyZW07XFxuICAgIGxlZnQ6IDAuMDFlbTtcXG59XFxuXFxuZGl2I2RhcmtPdmVybGF5e1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE1MDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgb3BhY2l0eTogNDAlO1xcbn1cXG5cXG5kaXYjZGFya092ZXJsYXkuaGlkZGVue1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBvcGFjaXR5OiAwJTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgei1pbmRleDogMjAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG4gICAgcGFkZGluZzogMmVtIG1pbig0JSwgMS41ZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgOTMlKTtcXG4gICAgd2lkdGg6IG1pbig4MCUsIDgwY2gpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjhlbTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAuaGlkZGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUG9wVXAgPiBoM3tcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVye1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJlbTtcXG59XFxuXFxuZGl2LmtleXdvcmR7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDgwJSk7XFxuICAgIGhlaWdodDogMS4yZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMC4zZW0gMC41ZW07XFxuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xcbiAgICBtYXJnaW46IDAuNWVtIDAuMmVtIDA7XFxuICAgIG1pbi13aWR0aDogNGNoO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjNlbTtcXG59XFxuXFxuZGl2I3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXIgPiBkaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA4MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcXG4gICAgcGFkZGluZzogMC43ZW07XFxuICAgIG1hcmdpbjogMC41ZW0gMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDI5LCA0NiUsIDQwJSk7XFxufVxcblxcbmRpdiNyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyID4gZGl2LnNlbGVjdGVkLFxcbmRpdiNyZWNvbW1lbmRhdGlvblF1ZXN0aW9uQ29udGFpbmVyID4gZGl2LnNlbGVjdGVkOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNzAlKTtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkIGhzbCgyOSwgNDYlLCA0MCUpO1xcbn1cXG5cXG5kaXYjcmVjb21tZW5kYXRpb25RdWVzdGlvbkNvbnRhaW5lciA+IGRpdjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDI5LCA0NiUsIDYwJSk7XFxufVxcblxcbmRpdiNhY3Rpb25CdXR0b25ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5kaXYjYWN0aW9uQnV0dG9ucyBidXR0b257XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwYWRkaW5nOiAwLjNlbTtcXG59XFxuXFxuYnV0dG9uI3JlZnJlc2hCdXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDUlLCA5MyUpO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgaHNsKDI5LCA0NiUsIDUwJSk7ICovXFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC4zZW07XFxuICAgIG1heC13aWR0aDogMjBjaDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDAuMmVtIDAgMS4yZW07XFxufVxcblxcbmJ1dHRvbiNyZWZyZXNoQnV0dG9uOmhvdmVye1xcbiAgICBjb2xvcjogaHNsKDI5LCA0NiUsIDMwJSk7XFxufVxcblxcbmRpdiNhY3Rpb25CdXR0b25zID4gZGl2LmNlbnRlckJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgZ2FwOiBtaW4oMiUsIDFlbSk7XFxufVxcblxcbmRpdi5jZW50ZXJCdXR0b25zID4gYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMjksIDQ2JSwgNjAlKTtcXG59XFxuXFxuZGl2LmNlbnRlckJ1dHRvbnMgPiBidXR0b257XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgyOSwgNDYlLCA4MCUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjksIDQ2JSwgNDAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMC41ZW07XFxuICAgIGZsZXg6IDE7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJsZXQgY3VycmVudFF1ZXN0aW9uO1xuXG5jb25zdCByZXNwb25zZTEgPSBbXG4gICAgXCJJbmkgcGVydGFueWFhbiAxXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiAyXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiAzXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiA0XCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiA1XCIsXG5dO1xuXG5jb25zdCByZXNwb25zZTIgPSBbXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgMVwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDJcIixcbiAgICBcIkluaSBwZXJ0YW55YWFuIHJlZnJlc2hlZCAzXCIsXG4gICAgXCJJbmkgcGVydGFueWFhbiByZWZyZXNoZWQgNFwiLFxuICAgIFwiSW5pIHBlcnRhbnlhYW4gcmVmcmVzaGVkIDVcIixcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlUXVlc3Rpb24oa2V5d29yZExpc3Qpe1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFF1ZXN0aW9uID0gcmVzcG9uc2UxO1xuICAgICAgICAgICAgcmVzb2x2ZShjdXJyZW50UXVlc3Rpb24pO1xuICAgICAgICB9LCAxMDAwKVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRRdWVzdGlvbigpe1xuICAgIHJldHVybiBjdXJyZW50UXVlc3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhclF1ZXN0aW9uKCl7XG4gICAgY3VycmVudFF1ZXN0aW9uID0gdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFF1ZXN0aW9uKCl7XG4gICAgaWYoY3VycmVudFF1ZXN0aW9uID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UXVlc3Rpb24gPSByZXNwb25zZTI7XG4gICAgICAgICAgICByZXNvbHZlKGN1cnJlbnRRdWVzdGlvbik7XG4gICAgICAgIH0sIDEwMDApXG4gICAgfSlcbn0iLCJleHBvcnQgZnVuY3Rpb24gY2xlYXJSZWNvbW1lbmRhdGlvbigpe1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbiAgICB3aGlsZShxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKSBxdWVzdGlvbkNvbnRhaW5lci5yZW1vdmVDaGlsZChxdWVzdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJLZXl3b3JkKCl7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWNvbW1lbmRhdGlvbktleXdvcmRDb250YWluZXInKTtcbiAgICB3aGlsZShrZXl3b3JkQ29udGFpbmVyLmZpcnN0Q2hpbGQpIGtleXdvcmRDb250YWluZXIucmVtb3ZlQ2hpbGQoa2V5d29yZENvbnRhaW5lci5maXJzdENoaWxkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlS2V5d29yZEVsZW1lbnQoa2V5d29yZCl7XG4gICAgY29uc3QgbmV3S2V5d29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0tleXdvcmQuY2xhc3NMaXN0LmFkZCgna2V5d29yZCcpO1xuICAgIG5ld0tleXdvcmQuaW5uZXJIVE1MID0ga2V5d29yZDtcbiAgICByZXR1cm4gbmV3S2V5d29yZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZEtleXdvcmQobmV3S2V5d29yZCl7XG4gICAgLy8gY29uc29sZS5sb2coa2V5d29yZCk7XG4gICAgY29uc3Qga2V5d29yZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrZXl3b3JkQ29udGFpbmVyJyk7XG4gICAga2V5d29yZENvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdLZXl3b3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZU92ZXJsYXkoKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGFya092ZXJsYXknKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dQb3BVcFJlY29tbWVuZGF0aW9uKGtleXdvcmRMaXN0KXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIGNvbnN0IGtleXdvcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25LZXl3b3JkQ29udGFpbmVyJyk7XG4gICAga2V5d29yZExpc3QuZm9yRWFjaCgoa2V5d29yZCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdLZXl3b3JkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0tleXdvcmQuY2xhc3NMaXN0LmFkZCgna2V5d29yZCcpO1xuICAgICAgICBuZXdLZXl3b3JkLmlubmVySFRNTCA9IGtleXdvcmQ7XG4gICAgICAgIGtleXdvcmRDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3S2V5d29yZCk7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93UmVjb21tZW5kYXRpb24oZWxlbWVudExpc3Qpe1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY29tbWVuZGF0aW9uUXVlc3Rpb25Db250YWluZXInKTtcbiAgICBlbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIHF1ZXN0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbkVsZW1lbnRzKHJlY29tbWVuZGF0aW9uTGlzdCl7XG4gICAgbGV0IGVsZW1lbnRMaXN0ID0gW107XG4gICAgcmVjb21tZW5kYXRpb25MaXN0LmZvckVhY2goKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdRdWVzdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdxdWVzdGlvbkNob2ljZScpO1xuICAgICAgICBuZXdRdWVzdGlvbi5pZCA9IGByLSR7aW5kZXh9YDtcbiAgICAgICAgbmV3UXVlc3Rpb24uaW5uZXJIVE1MID0gcXVlc3Rpb247XG4gICAgICAgIGVsZW1lbnRMaXN0LnB1c2gobmV3UXVlc3Rpb24pO1xuICAgIH0pO1xuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdFJlY29tbWVuZGF0aW9uKGluZGV4KXtcbiAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgci0ke2luZGV4fWApO1xuICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zZWxlY3RSZWNvbW1lbmRhdGlvbihpbmRleCl7XG4gICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHItJHtpbmRleH1gKTtcbiAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZVBvcFVwUmVjb21tZW5kYXRpb24oKXtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjb21tZW5kYXRpb25Qb3BVcCcpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIGNsZWFyUmVjb21tZW5kYXRpb24oKTtcbiAgICBjbGVhcktleXdvcmQoKTtcbn0iLCJsZXQga2V5d29yZExpc3QgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEtleUxpc3Qoa2V5d29yZCl7XG4gICAga2V5d29yZExpc3QucHVzaChrZXl3b3JkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUxpc3Qoa2V5d29yZCl7XG4gICAgcmV0dXJuIGtleXdvcmRMaXN0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIoKXtcbiAgICBrZXl3b3JkTGlzdCA9IFtdO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIHF1ZXJ5IGZyb20gXCIuL3F1ZXJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBkaXNwbGF5IGZyb20gJy4vZGlzcGxheS5qcyc7XG5pbXBvcnQgKiBhcyBncHQgZnJvbSAnLi9haS5qcyc7XG5pbXBvcnQgXCIuLi9zdHlsZS5jc3NcIjtcblxubGV0IHNlbGVjdGVkUmVjb21tZW5kYXRpb24gPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIGFkZFJlY0xpc3RlbmVyKGVsZW1lbnRMaXN0KXtcbiAgICBlbGVtZW50TGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBpZihzZWxlY3RlZFJlY29tbWVuZGF0aW9uICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIGRpc3BsYXkudW5zZWxlY3RSZWNvbW1lbmRhdGlvbihzZWxlY3RlZFJlY29tbWVuZGF0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGVjdGVkUmVjb21tZW5kYXRpb24gPSBwYXJzZUludChlbGVtZW50LmlkLnNwbGl0KFwiLVwiKVsxXSk7XG4gICAgICAgICAgICBkaXNwbGF5LnNlbGVjdFJlY29tbWVuZGF0aW9uKHNlbGVjdGVkUmVjb21tZW5kYXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50TGlzdDtcbn1cblxuZnVuY3Rpb24gYWRkS2V5d29yZExpc3RlbmVyKGVsZW1lbnQpe1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICB9KVxuICAgIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRLZXl3b3JkKCl7XG4gICAgY29uc3QgdGV4dElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRJbnB1dCcpO1xuICAgIGlmKHRleHRJbnB1dC52YWx1ZSA9PT0gJycpe1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHF1ZXJ5LmFkZEtleUxpc3QodGV4dElucHV0LnZhbHVlKTtcbiAgICBsZXQga2V5d29yZEVsZW1lbnQgPSBkaXNwbGF5LmdlbmVyYXRlS2V5d29yZEVsZW1lbnQodGV4dElucHV0LnZhbHVlKTtcbiAgICBrZXl3b3JkRWxlbWVudCA9IGFkZEtleXdvcmRMaXN0ZW5lcihrZXl3b3JkRWxlbWVudCk7XG4gICAgZGlzcGxheS5hcHBlbmRLZXl3b3JkKGtleXdvcmRFbGVtZW50KTtcbiAgICB0ZXh0SW5wdXQudmFsdWUgPSAnJztcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2VuZEtleXdvcmQoKXtcbiAgICBhZGRLZXl3b3JkKCk7XG4gICAgZGlzcGxheS50b2dnbGVPdmVybGF5KCk7XG4gICAgZGlzcGxheS5zaG93UG9wVXBSZWNvbW1lbmRhdGlvbihxdWVyeS5nZXRLZXlMaXN0KCkpO1xuICAgIGxldCByZWNvbW1lbmRhdGlvbkVsZW1lbnRzO1xuICAgIGlmKGdwdC5nZXRRdWVzdGlvbigpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGRpc3BsYXkuZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbkVsZW1lbnRzKGF3YWl0IGdwdC5nZW5lcmF0ZVF1ZXN0aW9uKHF1ZXJ5LmdldEtleUxpc3QoKSkpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICByZWNvbW1lbmRhdGlvbkVsZW1lbnRzID0gZGlzcGxheS5nZW5lcmF0ZVJlY29tbWVuZGF0aW9uRWxlbWVudHMoZ3B0LmdldFF1ZXN0aW9uKCkpO1xuICAgIH1cbiAgICByZWNvbW1lbmRhdGlvbkVsZW1lbnRzID0gYWRkUmVjTGlzdGVuZXIocmVjb21tZW5kYXRpb25FbGVtZW50cyk7XG4gICAgZGlzcGxheS5zaG93UmVjb21tZW5kYXRpb24ocmVjb21tZW5kYXRpb25FbGVtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyUG9wVXAoKXtcbiAgICBzZWxlY3RlZFJlY29tbWVuZGF0aW9uID0gdW5kZWZpbmVkO1xuICAgIGRpc3BsYXkudG9nZ2xlT3ZlcmxheSgpO1xuICAgIGRpc3BsYXkuaGlkZVBvcFVwUmVjb21tZW5kYXRpb24oKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVmcmVzaFF1ZXN0aW9uKCl7XG4gICAgc2VsZWN0ZWRSZWNvbW1lbmRhdGlvbiA9IHVuZGVmaW5lZDtcbiAgICBjb25zb2xlLmxvZyhcInJlZnJlc2hpbmcgcXVlc3Rpb25cIik7XG4gICAgZGlzcGxheS5jbGVhclJlY29tbWVuZGF0aW9uKCk7XG4gICAgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGRpc3BsYXkuZ2VuZXJhdGVSZWNvbW1lbmRhdGlvbkVsZW1lbnRzKGF3YWl0IGdwdC5yZWZyZXNoUXVlc3Rpb24oKSk7XG4gICAgcmVjb21tZW5kYXRpb25FbGVtZW50cyA9IGFkZFJlY0xpc3RlbmVyKHJlY29tbWVuZGF0aW9uRWxlbWVudHMpO1xuICAgIGRpc3BsYXkuc2hvd1JlY29tbWVuZGF0aW9uKHJlY29tbWVuZGF0aW9uRWxlbWVudHMpO1xufVxuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGx1c0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkS2V5d29yZCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZW5kQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZW5kS2V5d29yZCk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW5jZWxCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsZWFyUG9wVXApO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVmcmVzaEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVmcmVzaFF1ZXN0aW9uKTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRJbnB1dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgIGlmKGUua2V5ID09PSAnRW50ZXInKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZihlLmN0cmxLZXkpe1xuICAgICAgICAgICAgc2VuZEtleXdvcmQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWRkS2V5d29yZCgpO1xuICAgICAgICB9XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=