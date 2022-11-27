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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    /* container colors */\r\n    --header-color: rgb(221, 202, 217);\r\n    --secondary-container-color: rgb(229, 233, 236);\r\n    --additional-container-color: rgb(234, 253, 248);\r\n    --sidebar-color: rgb(127, 101, 132);\r\n    \r\n}\r\n\r\nbody {\r\n    margin:0;\r\n    background-color: var(--secondary-container-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n/* HEADER */\r\nheader {\r\n    grid-column: 1/3;\r\n    background-color: var(--header-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    justify-items:center;\r\n    align-items: center;\r\n}\r\nheader #logo{\r\n    border:2px solid;\r\n}\r\nheader #search input{\r\n    background-color: var(--additional-container-color);\r\n    border: none;\r\n    border-radius: 4px;\r\n}\r\nheader #user_info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nheader img {\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n/* SIDEBAR */\r\n#sidebar {\r\n    grid-column: 1/2;\r\n    background-color: var(--additional-container-color);\r\n    display: grid;\r\n    gap:20px;\r\n    justify-items: center;\r\n}\r\n\r\n#sidebar h2 {\r\n    text-align: center;\r\n}\r\n\r\n#sidebar button {\r\n    font-size: large;\r\n    cursor: pointer;\r\n}\r\n.list_button {\r\n\r\n}\r\n.list_button.active {\r\n    box-shadow: 5px 5px;\r\n}\r\n\r\n\r\n\r\n\r\n/* CONTENT */\r\n#content {\r\n    grid-column: 2/4;\r\n    background-color: var(--secondary-container-color)\r\n}\r\n\r\n.task_container {\r\n    display:grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n    border-bottom: 2px solid #292524;\r\n}\r\n.task_container h3 {\r\n    width:100%;\r\n    border-bottom: 2px solid #292524;\r\n}\r\n.task_container h4 {\r\n    width:100%;\r\n}\r\n\r\n.remove_task_button {\r\n    background: rgb(112, 89, 116);\r\n    border:none;\r\n    padding:5px;\r\n    border-radius: 10px;\r\n    transition: 150ms;\r\n    font-size:larger;\r\n}\r\n.remove_task_button:hover {\r\n    background: rgb(93, 80, 102);\r\n    cursor: pointer;\r\n}\r\n\r\n/* form (modal) */\r\n#overlay {\r\n    position:fixed;\r\n    opacity: 0; \r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    background: rgba(0,0,0,.5);\r\n    pointer-events:none;\r\n    transition:200ms ease-in-out;\r\n}\r\n#overlay.active {\r\n    pointer-events:all;\r\n    opacity:1;\r\n}\r\n\r\n#modal {\r\n    display:grid;\r\n    position:fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%) scale(0);\r\n    border:1px solid black;\r\n    padding:10px;\r\n    border-radius:10px;\r\n    z-index:10;\r\n    background-color: white;\r\n    width:500px;\r\n    max-width:80%;\r\n    transition: 200ms ease-in-out;\r\n    background-color: var(--secondary-container-color);\r\n}\r\n#modal.active {\r\n    transform: translate(-50%,-50%) scale(1);\r\n}\r\n#modal_header {\r\n    padding: 5px 5px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom:1px solid black;\r\n}\r\n#modal #modal_title {\r\n    font-size:large;\r\n}\r\n\r\n#modal #close_modal_button {\r\n    cursor:pointer;\r\n    border:none;\r\n    outline:none;\r\n    background: none;\r\n    font-size:1.25rem;\r\n    font-weight:bold;\r\n}\r\n#modal #modal_body {\r\n    display:grid;\r\n    padding:10px 10px;\r\n}\r\n\r\n#modal fieldset {\r\n    padding:3px;\r\n}\r\n\r\n#modal .input_error {\r\n    display:none;\r\n    color:red;\r\n}\r\n\r\n\r\n#modal input:focus {\r\n    outline: none;\r\n    border:solid 1.5px rgb(219, 186, 228);\r\n    box-shadow: 3px 5px rgb(195, 148, 191);\r\n}\r\n\r\n#modal #add_task_button {\r\n    background: rgb(112, 89, 116);\r\n    border:none;\r\n    padding:5px;\r\n    border-radius: 10px;\r\n    transition: 150ms;\r\n    font-size:larger;\r\n}\r\n#modal #add_task_button:hover {\r\n    transform: scale(1.05);\r\n    cursor: pointer;\r\n    box-shadow:3px 5px var(--additional-container-color);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nfooter {\r\n    background-color: var(--additional-container-color);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,kCAAkC;IAClC,+CAA+C;IAC/C,gDAAgD;IAChD,mCAAmC;;AAEvC;;AAEA;IACI,QAAQ;IACR,kDAAkD;IAClD,aAAa;IACb,8BAA8B;AAClC;AACA,WAAW;AACX;IACI,gBAAgB;IAChB,qCAAqC;IACrC,aAAa;IACb,kCAAkC;IAClC,oBAAoB;IACpB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mDAAmD;IACnD,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,WAAW;IACX,mBAAmB;AACvB;;;AAGA,YAAY;AACZ;IACI,gBAAgB;IAChB,mDAAmD;IACnD,aAAa;IACb,QAAQ;IACR,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;;AAEA;AACA;IACI,mBAAmB;AACvB;;;;;AAKA,YAAY;AACZ;IACI,gBAAgB;IAChB;AACJ;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,qBAAqB;IACrB,gCAAgC;AACpC;AACA;IACI,UAAU;IACV,gCAAgC;AACpC;AACA;IACI,UAAU;AACd;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,4BAA4B;IAC5B,eAAe;AACnB;;AAEA,iBAAiB;AACjB;IACI,cAAc;IACd,UAAU;IACV,KAAK;IACL,MAAM;IACN,OAAO;IACP,QAAQ;IACR,0BAA0B;IAC1B,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,OAAO;IACP,QAAQ;IACR,wCAAwC;IACxC,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,kDAAkD;AACtD;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,SAAS;AACb;;;AAGA;IACI,aAAa;IACb,qCAAqC;IACrC,sCAAsC;AAC1C;;AAEA;IACI,6BAA6B;IAC7B,WAAW;IACX,WAAW;IACX,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,sBAAsB;IACtB,eAAe;IACf,oDAAoD;AACxD;;;;;;;AAOA;IACI,mDAAmD;AACvD","sourcesContent":[":root {\r\n    /* container colors */\r\n    --header-color: rgb(221, 202, 217);\r\n    --secondary-container-color: rgb(229, 233, 236);\r\n    --additional-container-color: rgb(234, 253, 248);\r\n    --sidebar-color: rgb(127, 101, 132);\r\n    \r\n}\r\n\r\nbody {\r\n    margin:0;\r\n    background-color: var(--secondary-container-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n/* HEADER */\r\nheader {\r\n    grid-column: 1/3;\r\n    background-color: var(--header-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    justify-items:center;\r\n    align-items: center;\r\n}\r\nheader #logo{\r\n    border:2px solid;\r\n}\r\nheader #search input{\r\n    background-color: var(--additional-container-color);\r\n    border: none;\r\n    border-radius: 4px;\r\n}\r\nheader #user_info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nheader img {\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n/* SIDEBAR */\r\n#sidebar {\r\n    grid-column: 1/2;\r\n    background-color: var(--additional-container-color);\r\n    display: grid;\r\n    gap:20px;\r\n    justify-items: center;\r\n}\r\n\r\n#sidebar h2 {\r\n    text-align: center;\r\n}\r\n\r\n#sidebar button {\r\n    font-size: large;\r\n    cursor: pointer;\r\n}\r\n.list_button {\r\n\r\n}\r\n.list_button.active {\r\n    box-shadow: 5px 5px;\r\n}\r\n\r\n\r\n\r\n\r\n/* CONTENT */\r\n#content {\r\n    grid-column: 2/4;\r\n    background-color: var(--secondary-container-color)\r\n}\r\n\r\n.task_container {\r\n    display:grid;\r\n    align-items: center;\r\n    justify-items: center;\r\n    border-bottom: 2px solid #292524;\r\n}\r\n.task_container h3 {\r\n    width:100%;\r\n    border-bottom: 2px solid #292524;\r\n}\r\n.task_container h4 {\r\n    width:100%;\r\n}\r\n\r\n.remove_task_button {\r\n    background: rgb(112, 89, 116);\r\n    border:none;\r\n    padding:5px;\r\n    border-radius: 10px;\r\n    transition: 150ms;\r\n    font-size:larger;\r\n}\r\n.remove_task_button:hover {\r\n    background: rgb(93, 80, 102);\r\n    cursor: pointer;\r\n}\r\n\r\n/* form (modal) */\r\n#overlay {\r\n    position:fixed;\r\n    opacity: 0; \r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    background: rgba(0,0,0,.5);\r\n    pointer-events:none;\r\n    transition:200ms ease-in-out;\r\n}\r\n#overlay.active {\r\n    pointer-events:all;\r\n    opacity:1;\r\n}\r\n\r\n#modal {\r\n    display:grid;\r\n    position:fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%) scale(0);\r\n    border:1px solid black;\r\n    padding:10px;\r\n    border-radius:10px;\r\n    z-index:10;\r\n    background-color: white;\r\n    width:500px;\r\n    max-width:80%;\r\n    transition: 200ms ease-in-out;\r\n    background-color: var(--secondary-container-color);\r\n}\r\n#modal.active {\r\n    transform: translate(-50%,-50%) scale(1);\r\n}\r\n#modal_header {\r\n    padding: 5px 5px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom:1px solid black;\r\n}\r\n#modal #modal_title {\r\n    font-size:large;\r\n}\r\n\r\n#modal #close_modal_button {\r\n    cursor:pointer;\r\n    border:none;\r\n    outline:none;\r\n    background: none;\r\n    font-size:1.25rem;\r\n    font-weight:bold;\r\n}\r\n#modal #modal_body {\r\n    display:grid;\r\n    padding:10px 10px;\r\n}\r\n\r\n#modal fieldset {\r\n    padding:3px;\r\n}\r\n\r\n#modal .input_error {\r\n    display:none;\r\n    color:red;\r\n}\r\n\r\n\r\n#modal input:focus {\r\n    outline: none;\r\n    border:solid 1.5px rgb(219, 186, 228);\r\n    box-shadow: 3px 5px rgb(195, 148, 191);\r\n}\r\n\r\n#modal #add_task_button {\r\n    background: rgb(112, 89, 116);\r\n    border:none;\r\n    padding:5px;\r\n    border-radius: 10px;\r\n    transition: 150ms;\r\n    font-size:larger;\r\n}\r\n#modal #add_task_button:hover {\r\n    transform: scale(1.05);\r\n    cursor: pointer;\r\n    box-shadow:3px 5px var(--additional-container-color);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nfooter {\r\n    background-color: var(--additional-container-color);\r\n}"],"sourceRoot":""}]);
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTask": () => (/* binding */ addTask)
/* harmony export */ });
/* harmony import */ var _closeForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeForm */ "./src/closeForm.js");
/* harmony import */ var _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectRemoveTaskBtns */ "./src/selectRemoveTaskBtns.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");
/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskConstructor */ "./src/taskConstructor.js");
/* harmony import */ var _validateForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validateForm */ "./src/validateForm.js");








function addTask() {
    let inputTitle = document.getElementById('title').value;
    let titleErrorMessage = document.getElementById('title_error')

    let inputDescription = document.getElementById('description').value;
    let inputDueDate = new Date(document.getElementById('dueDate').value);
    let dateErrorMessage = document.getElementById('date_error')

    let inputPriorityButtonGroup = document.getElementsByName('priority');
    let inputPriority = '';
    for (let i = 0; i<inputPriorityButtonGroup.length; i++) {
        if (inputPriorityButtonGroup[i].checked) {
            inputPriority = inputPriorityButtonGroup[i].value;
        }
    }
    // Watch for any changes in title or date inputs and immediately validate form if anything changes
    document.getElementsByTagName('form').onchange = _validateForm__WEBPACK_IMPORTED_MODULE_4__.validateForm


    //check for duplicates in array
    function findDuplicates() {
        let result = ''
        for (let i = 0; i<_taskArray__WEBPACK_IMPORTED_MODULE_2__.taskArray.length; i++) {
            if (_taskArray__WEBPACK_IMPORTED_MODULE_2__.taskArray[i].title==inputTitle) {
                result = true;
            } else {
                result = false
            }
        }
        if (result==true) {
            return true
        } else {
            return false;
        }
    }    
    
    (0,_validateForm__WEBPACK_IMPORTED_MODULE_4__.validateForm)();
    findDuplicates();

    if ((0,_validateForm__WEBPACK_IMPORTED_MODULE_4__.validateForm)()==true && findDuplicates()==false) {
        let newTask = new _taskConstructor__WEBPACK_IMPORTED_MODULE_3__.Tasks(inputTitle,inputDescription,inputDueDate,inputPriority);
        _taskArray__WEBPACK_IMPORTED_MODULE_2__.taskArray.push(newTask)
        console.log(_taskArray__WEBPACK_IMPORTED_MODULE_2__.taskArray)
    
        let content = document.getElementById('content');
        newTask.appendTask(content)
        ;(0,_closeForm__WEBPACK_IMPORTED_MODULE_0__.closeForm)()
        ;(0,_selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_1__.selectRemoveTaskBtns)();
    } else if ((0,_validateForm__WEBPACK_IMPORTED_MODULE_4__.validateForm)()==true && findDuplicates()==true) {
        alert('Task with this title already exists! Please choose a different one')
    }
}



/***/ }),

/***/ "./src/closeForm.js":
/*!**************************!*\
  !*** ./src/closeForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeForm": () => (/* binding */ closeForm)
/* harmony export */ });
function closeForm() {
    let form = document.getElementById('modal');
    form.classList.remove('active')
    overlay.classList.remove('active')
}


/***/ }),

/***/ "./src/findTaskTitleToRemove.js":
/*!**************************************!*\
  !*** ./src/findTaskTitleToRemove.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTaskTitleToRemove": () => (/* binding */ findTaskTitleToRemove),
/* harmony export */   "title": () => (/* binding */ title)
/* harmony export */ });
/* harmony import */ var _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectRemoveTaskBtns */ "./src/selectRemoveTaskBtns.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");


let title = '';
function findTaskTitleToRemove() {
    _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.removeTaskButton.forEach(button => {
        button.addEventListener('click', function handleClick(event) {
            title = button.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

            // removes task from taskArray
            removeTaskByTitle(title)
            // removes the parent DOM element associated with current 'remove task' button
            button.parentElement.remove();
        })
    })
}
function removeTaskByTitle (title) {
    let currentTaskIndex = _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray.findIndex((i) => {
        return i.title === title;
    })
    _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray.splice(currentTaskIndex,1);
    console.log(_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray);
}




/***/ }),

/***/ "./src/getHighTasks.js":
/*!*****************************!*\
  !*** ./src/getHighTasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHighTasks": () => (/* binding */ getHighTasks),
/* harmony export */   "removeTaskButton": () => (/* reexport safe */ _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.removeTaskButton)
/* harmony export */ });
/* harmony import */ var _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectRemoveTaskBtns */ "./src/selectRemoveTaskBtns.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");



function getHighTasks() {
    let content = document.getElementById('content');
    // First, if content is not empty, remove everything inside task container (so that there is no infinite duplication of 'today' tasks)
    let allTasks = document.querySelectorAll('.task_container');
    allTasks.forEach((elem) => elem.remove());
    // Check for objects inside the 'taskArray' array that have 'Low' priority

    for (let i = 0 ; i<_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {
        if (_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].priority=='High') {
            _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].appendTask(content)
        }
    }
    // Selects all remove task buttons inside the 'content' section after user chooses this list
    (0,_selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.selectRemoveTaskBtns)()
}



/***/ }),

/***/ "./src/getLowTasks.js":
/*!****************************!*\
  !*** ./src/getLowTasks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLowTasks": () => (/* binding */ getLowTasks),
/* harmony export */   "removeTaskButton": () => (/* reexport safe */ _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.removeTaskButton)
/* harmony export */ });
/* harmony import */ var _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectRemoveTaskBtns */ "./src/selectRemoveTaskBtns.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");



function getLowTasks() {
    let content = document.getElementById('content');
    // First, if content is not empty, remove everything inside task container (so that there is no infinite duplication of 'today' tasks)
    let allTasks = document.querySelectorAll('.task_container');
    allTasks.forEach((elem) => elem.remove());
    // Check for objects inside the 'taskArray' array that have 'Low' priority

    for (let i = 0 ; i<_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {
        if (_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].priority=='Low') {
            _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].appendTask(content)
        }
    }
    // Selects all remove task buttons inside the 'content' section after user chooses this list
    (0,_selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.selectRemoveTaskBtns)()
}



/***/ }),

/***/ "./src/getMediumTasks.js":
/*!*******************************!*\
  !*** ./src/getMediumTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMediumTasks": () => (/* binding */ getMediumTasks),
/* harmony export */   "removeTaskButton": () => (/* reexport safe */ _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.removeTaskButton)
/* harmony export */ });
/* harmony import */ var _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectRemoveTaskBtns */ "./src/selectRemoveTaskBtns.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");



function getMediumTasks() {
    let content = document.getElementById('content');
    // First, if content is not empty, remove everything inside task container (so that there is no infinite duplication of 'today' tasks)
    let allTasks = document.querySelectorAll('.task_container');
    allTasks.forEach((elem) => elem.remove());
    // Check for objects inside the 'taskArray' array that have 'Low' priority

    for (let i = 0 ; i<_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {
        if (_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].priority=='Medium') {
            _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].appendTask(content)
        }
    }
    // Selects all remove task buttons inside the 'content' section after user chooses this list
    (0,_selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.selectRemoveTaskBtns)()
}



/***/ }),

/***/ "./src/getTodayTasks.js":
/*!******************************!*\
  !*** ./src/getTodayTasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodayTasks": () => (/* binding */ getTodayTasks),
/* harmony export */   "removeTaskButton": () => (/* reexport safe */ _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.removeTaskButton)
/* harmony export */ });
/* harmony import */ var _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectRemoveTaskBtns */ "./src/selectRemoveTaskBtns.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");



function getTodayTasks() {
    let content = document.getElementById('content');
    // First, if content is not empty, remove everything inside task container (so that there is no infinite duplication of 'today' tasks)
    let allTasks = document.querySelectorAll('.task_container');
    allTasks.forEach((elem) => elem.remove());
    // Check for objects inside the 'taskArray' array that have 'dueDate' today
    let today = new Date();
    for (let i = 0 ; i<_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {
        if (
            today.getFullYear() === _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].dueDate.getFullYear() &&
            today.getMonth() === _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].dueDate.getMonth() &&
            today.getDate() === _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].dueDate.getDate()
        ) 
        {
            _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].appendTask(content)
        }
    }
    // Selects all remove task buttons inside the 'content' section after user chooses this list
    (0,_selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.selectRemoveTaskBtns)()
}



/***/ }),

/***/ "./src/getTomorrowTasks.js":
/*!*********************************!*\
  !*** ./src/getTomorrowTasks.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTomorrowTasks": () => (/* binding */ getTomorrowTasks),
/* harmony export */   "removeTaskButton": () => (/* reexport safe */ _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.removeTaskButton)
/* harmony export */ });
/* harmony import */ var _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectRemoveTaskBtns */ "./src/selectRemoveTaskBtns.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");



function getTomorrowTasks() {
    let content = document.getElementById('content')
    // First, if content is not empty, remove everything inside task container (so that there is no infinite duplication of 'today' tasks)
    let allTasks = document.querySelectorAll('.task_container');
    allTasks.forEach((elem) => elem.remove());
    // Check for objects inside the 'taskArray' array that have 'dueDate' tomorrow
    let today = new Date();
    let tomorrow =  new Date()
    tomorrow.setDate(today.getDate() + 1)
    for (let i = 0 ; i<_taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray.length; i++) {
        if (
            tomorrow.getFullYear() === _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].dueDate.getFullYear() &&
            tomorrow.getMonth() === _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].dueDate.getMonth() &&
            tomorrow.getDate() === _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].dueDate.getDate()
        ) 
        {
            _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray[i].appendTask(content)
        }
    }
    // Selects all remove task buttons inside the 'content' section after user chooses this list
    (0,_selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_0__.selectRemoveTaskBtns)()
}



/***/ }),

/***/ "./src/getUserNameAvatar.js":
/*!**********************************!*\
  !*** ./src/getUserNameAvatar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "userAvatar": () => (/* binding */ userAvatar),
/* harmony export */   "userName": () => (/* binding */ userName)
/* harmony export */ });
/* harmony import */ var _ava1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ava1.jpg */ "./src/ava1.jpg");

const userAvatar = new Image();
userAvatar.src = _ava1_jpg__WEBPACK_IMPORTED_MODULE_0__;
const userName = '@userName'



/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad),
/* harmony export */   "taskArray": () => (/* reexport safe */ _taskArray__WEBPACK_IMPORTED_MODULE_0__.taskArray)
/* harmony export */ });
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");
/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskConstructor */ "./src/taskConstructor.js");




function pageLoad(name,avatar) {
    // header username and avatar
    let userName = document.getElementById('user_name')
    userName.innerText = name

    let userAvatar = document.getElementById('user_avatar')
    userAvatar.appendChild(avatar)
    // sidebar
    let sidebar = document.getElementById('sidebar')
    let listToday = document.createElement('button');
    listToday.innerText = 'Today'
    listToday.setAttribute('id','list_today')
    listToday.setAttribute('class','list_button')
    sidebar.appendChild(listToday)

    let listTomorrow = document.createElement('button');
    listTomorrow.innerText = 'Tomorrow'
    listTomorrow.setAttribute('id','list_tomorrow')
    listTomorrow.setAttribute('class','list_button')
    sidebar.appendChild(listTomorrow)

    let listLow = document.createElement('button');
    listLow.innerText = 'Low Priority'
    listLow.setAttribute('id','list_low');
    listLow.setAttribute('class','list_button');
    sidebar.appendChild(listLow);

    let listMedium = document.createElement('button');
    listMedium.innerText = 'Medium Priority'
    listMedium.setAttribute('id','list_medium');
    listMedium.setAttribute('class','list_button');
    sidebar.appendChild(listMedium);

    let listHigh = document.createElement('button');
    listHigh.innerText = 'High Priority'
    listHigh.setAttribute('id','list_high');
    listHigh.setAttribute('class','list_button');
    sidebar.appendChild(listHigh);
   
    let content = document.getElementById('content')

    // button to show 'add task' form
    let showFormButton = document.createElement('button');
    showFormButton.setAttribute('id','show_form_button')
    showFormButton.innerText = 'Add task'
    content.appendChild(showFormButton)

    // select all list buttons
    let listButtons = document.querySelectorAll('.list_button')
    
}



/***/ }),

/***/ "./src/selectRemoveTaskBtns.js":
/*!*************************************!*\
  !*** ./src/selectRemoveTaskBtns.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeTaskButton": () => (/* binding */ removeTaskButton),
/* harmony export */   "selectRemoveTaskBtns": () => (/* binding */ selectRemoveTaskBtns)
/* harmony export */ });
/* harmony import */ var _findTaskTitleToRemove__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./findTaskTitleToRemove */ "./src/findTaskTitleToRemove.js");


let removeTaskButton = document.querySelectorAll('.remove_task_button')

// Selects all 'Remove task' buttons inside the 'content' section after user chooses 'today' or 'tomorrow' lists
// and starts the findTaskTitleToRemove function
function selectRemoveTaskBtns() {
    removeTaskButton = document.querySelectorAll('.remove_task_button')
    console.log(removeTaskButton)
    ;(0,_findTaskTitleToRemove__WEBPACK_IMPORTED_MODULE_0__.findTaskTitleToRemove)()
}


/***/ }),

/***/ "./src/showForm.js":
/*!*************************!*\
  !*** ./src/showForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showForm": () => (/* binding */ showForm)
/* harmony export */ });
function showForm() {
    let form = document.getElementById('modal');
    form.classList.add('active')
    let overlay = document.getElementById('overlay')
    overlay.classList.add('active')
}



/***/ }),

/***/ "./src/taskArray.js":
/*!**************************!*\
  !*** ./src/taskArray.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });
let taskArray = []
// objects in this array have the following properties:
// title,description,dueDate,priority

// and the following methods:
// setTitle (newTitle)
// setDescription(newDescription)
// setDueDate(newDueDate)
// setPriority(newPriority)

// appendTask(container) //


/***/ }),

/***/ "./src/taskConstructor.js":
/*!********************************!*\
  !*** ./src/taskConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tasks": () => (/* binding */ Tasks)
/* harmony export */ });
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");


class Tasks {
    constructor(title,description,dueDate,priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    setTitle (newTitle) {
        this.title = newTitle
    }
    setDescription(newDescription) {
        this.description = newDescription
    }
    setDueDate(newDueDate) {
        this.dueDate = newDueDate
    }
    setPriority(newPriority) {
        this.priority = newPriority
    }
    appendTask(container) {
        let taskContainer = document.createElement('div')
        taskContainer.setAttribute('class','task_container')

        let taskTitle = document.createElement('h3')
        taskTitle.innerText = this.title
        taskContainer.appendChild(taskTitle)

        let taskDescription = document.createElement('h4');
        taskDescription.innerText = this.description;
        taskContainer.appendChild(taskDescription)

        let taskDueDate = document.createElement('div');
        taskDueDate.innerText = this.dueDate;
        taskContainer.appendChild(taskDueDate)

        let taskPriority = document.createElement('a');
        taskPriority.innerText = 'Priority: ' + this.priority;
        taskContainer.appendChild(taskPriority)
        
        let removeTaskButton = document.createElement('button');
        removeTaskButton.innerText = 'Remove task'
        removeTaskButton.setAttribute('class','remove_task_button')
        taskContainer.appendChild(removeTaskButton)

        container.appendChild(taskContainer);
        //taskArray.push(this);
    }
    removeTask(title) {
        // find title of the task in the container's first child (task title == h3 DOM element's innerText)      
        for (let i = 0 ; i<_taskArray__WEBPACK_IMPORTED_MODULE_0__.taskArray.length;i++) {
            if (_taskArray__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title == title) {
                _taskArray__WEBPACK_IMPORTED_MODULE_0__.taskArray.splice(_taskArray__WEBPACK_IMPORTED_MODULE_0__.taskArray[i],1);
            }
        }
    }
}



/***/ }),

/***/ "./src/validateForm.js":
/*!*****************************!*\
  !*** ./src/validateForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateForm": () => (/* binding */ validateForm)
/* harmony export */ });
function validateForm() {
    let inputTitle = document.getElementById('title').value;
    let titleErrorMessage = document.getElementById('title_error')

    let inputDescription = document.getElementById('description').value;
    let descriptionErrorMessage = document.getElementById('description_error')

    let inputDueDate = new Date(document.getElementById('dueDate').value);
    let dateErrorMessage = document.getElementById('date_error')

    let inputPriorityButtonGroup = document.getElementsByName('priority');
    let inputPriority = '';
    for (let i = 0; i<inputPriorityButtonGroup.length; i++) {
        if (inputPriorityButtonGroup[i].checked) {
            inputPriority = inputPriorityButtonGroup[i].value;
        }
    }
    let priorityErrorMessage = document.getElementById('priority_error')

    
    if (inputTitle=='') {
        if (inputDueDate!='Invalid Date') {
            titleErrorMessage.style.display = 'block'
            dateErrorMessage.style.display = 'none'
            return false;
        } else if (inputDescription!='') {
            descriptionErrorMessage.style.display = 'none'
            titleErrorMessage.style.display = 'block';
            return false
        } else {
            titleErrorMessage.style.display = 'block'
            dateErrorMessage.style.display = 'block'
            descriptionErrorMessage.style.display = 'block'
            return false;
        }
    } else if (inputDueDate=='Invalid Date') {
        if (inputTitle!='') {
            dateErrorMessage.style.display = 'block'
            titleErrorMessage.style.display = 'none'
            return false;
        } else if (inputDescription!='') {
            dateErrorMessage.style.display = 'block';
            descriptionErrorMessage.style.display = 'none';
            return false;
        } else {
            titleErrorMessage.style.display = 'block'
            dateErrorMessage.style.display = 'block'
            descriptionErrorMessage.style.display = 'block'
            return false;
        }
    } else if (inputDescription=='') {
        if (inputTitle!='') {
            titleErrorMessage.style.display = 'none';
            descriptionErrorMessage.style.display = 'block';
            return false
        } else if (inputDueDate!='Invalid Date') {
            dateErrorMessage.style.display = 'none';
            descriptionErrorMessage.style.display = 'block';
            return false
        } else {           
            titleErrorMessage.style.display = 'block';
            descriptionErrorMessage.style.display = 'block';
            dateErrorMessage.style.display = 'block';
            return false;
        }
    }  
    else if (inputTitle!='' && inputDescription!='' && inputDueDate!='Invalid Date') {
        titleErrorMessage.style.display = 'none';   
        descriptionErrorMessage.style.display = 'none'
        dateErrorMessage.style.display = 'none';
        priorityErrorMessage.style.display = 'none'

        return true;
    }
}



/***/ }),

/***/ "./src/ava1.jpg":
/*!**********************!*\
  !*** ./src/ava1.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1626ee9de98db6a5a071.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _closeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeForm */ "./src/closeForm.js");
/* harmony import */ var _getHighTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getHighTasks */ "./src/getHighTasks.js");
/* harmony import */ var _getLowTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getLowTasks */ "./src/getLowTasks.js");
/* harmony import */ var _getMediumTasks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getMediumTasks */ "./src/getMediumTasks.js");
/* harmony import */ var _getTodayTasks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getTodayTasks */ "./src/getTodayTasks.js");
/* harmony import */ var _getTomorrowTasks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getTomorrowTasks */ "./src/getTomorrowTasks.js");
/* harmony import */ var _getUserNameAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./getUserNameAvatar */ "./src/getUserNameAvatar.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _showForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./showForm */ "./src/showForm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");
/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./taskConstructor */ "./src/taskConstructor.js");














(0,_pageLoad__WEBPACK_IMPORTED_MODULE_8__.pageLoad)(_getUserNameAvatar__WEBPACK_IMPORTED_MODULE_7__.userName,_getUserNameAvatar__WEBPACK_IMPORTED_MODULE_7__.userAvatar)
// debug
let taskContainer = document.getElementById('content')
let task1 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_12__.Tasks('test1','descrip',new Date(),'High')
_taskArray__WEBPACK_IMPORTED_MODULE_11__.taskArray.push(task1)

let task2 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_12__.Tasks('test2','description',new Date(),'Low')
task2.dueDate.setDate(27);
_taskArray__WEBPACK_IMPORTED_MODULE_11__.taskArray.push(task2);


task1.removeTask();
console.log(_taskArray__WEBPACK_IMPORTED_MODULE_11__.taskArray)

//

// task lists
let listTodayButton = document.getElementById('list_today')
listTodayButton.addEventListener('click',_getTodayTasks__WEBPACK_IMPORTED_MODULE_5__.getTodayTasks)

let listTomorrowButton = document.getElementById('list_tomorrow')
listTomorrowButton.addEventListener('click',_getTomorrowTasks__WEBPACK_IMPORTED_MODULE_6__.getTomorrowTasks)

let listLowButton = document.getElementById('list_low');
listLowButton.addEventListener('click',_getLowTasks__WEBPACK_IMPORTED_MODULE_3__.getLowTasks)

let listMediumButton = document.getElementById('list_medium');
listMediumButton.addEventListener('click',_getMediumTasks__WEBPACK_IMPORTED_MODULE_4__.getMediumTasks)

let listHighButton = document.getElementById('list_high');
listHighButton.addEventListener('click',_getHighTasks__WEBPACK_IMPORTED_MODULE_2__.getHighTasks)

//
let showFormButton = document.getElementById('show_form_button')
showFormButton.addEventListener('click', _showForm__WEBPACK_IMPORTED_MODULE_9__.showForm)

let closeFormButton = document.getElementById('close_modal_button');
closeFormButton.addEventListener('click',_closeForm__WEBPACK_IMPORTED_MODULE_1__.closeForm)

let addTaskButton = document.getElementById('add_task_button')
addTaskButton.addEventListener('click',function(event) {
    event.preventDefault()
})

addTaskButton.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_0__.addTask)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FvQztBQUNJO0FBQ007QUFDRjtBQUNNO0FBQ0Y7QUFDTTtBQUNLO0FBQ3JCO0FBQ0E7QUFDakI7QUFDbUI7QUFDRTtBQUMxQztBQUNBLG1EQUFRLENBQUMsd0RBQVEsQ0FBQywwREFBVTtBQUM1QjtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFLO0FBQ3JCLHVEQUFjO0FBQ2Q7QUFDQSxnQkFBZ0Isb0RBQUs7QUFDckI7QUFDQSx1REFBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0RBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5REFBYTtBQUN0RDtBQUNBO0FBQ0EsNENBQTRDLCtEQUFnQjtBQUM1RDtBQUNBO0FBQ0EsdUNBQXVDLHFEQUFXO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEMsMkRBQWM7QUFDeEQ7QUFDQTtBQUNBLHdDQUF3Qyx1REFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsK0NBQVE7QUFDakQ7QUFDQTtBQUNBLHlDQUF5QyxpREFBUztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLHdDQUF3Qyw2Q0FBTztBQUMvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGRUYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2xvc2VGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZmluZFRhc2tUaXRsZVRvUmVtb3ZlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0SGlnaFRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0TG93VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZXRNZWRpdW1UYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dldFRvZGF5VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZXRUb21vcnJvd1Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0VXNlck5hbWVBdmF0YXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlbGVjdFJlbW92ZVRhc2tCdG5zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrQ29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy92YWxpZGF0ZUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLyogY29udGFpbmVyIGNvbG9ycyAqL1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiKDIyMSwgMjAyLCAyMTcpO1xcclxcbiAgICAtLXNlY29uZGFyeS1jb250YWluZXItY29sb3I6IHJnYigyMjksIDIzMywgMjM2KTtcXHJcXG4gICAgLS1hZGRpdGlvbmFsLWNvbnRhaW5lci1jb2xvcjogcmdiKDIzNCwgMjUzLCAyNDgpO1xcclxcbiAgICAtLXNpZGViYXItY29sb3I6IHJnYigxMjcsIDEwMSwgMTMyKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG59XFxyXFxuLyogSEVBREVSICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciAjbG9nb3tcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZDtcXHJcXG59XFxyXFxuaGVhZGVyICNzZWFyY2ggaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbmhlYWRlciAjdXNlcl9pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNJREVCQVIgKi9cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmxpc3RfYnV0dG9uIHtcXHJcXG5cXHJcXG59XFxyXFxuLmxpc3RfYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIENPTlRFTlQgKi9cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb250YWluZXItY29sb3IpXFxyXFxufVxcclxcblxcclxcbi50YXNrX2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI5MjUyNDtcXHJcXG59XFxyXFxuLnRhc2tfY29udGFpbmVyIGgzIHtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyOTI1MjQ7XFxyXFxufVxcclxcbi50YXNrX2NvbnRhaW5lciBoNCB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVfdGFza19idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTEyLCA4OSwgMTE2KTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIHBhZGRpbmc6NXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXHJcXG4gICAgZm9udC1zaXplOmxhcmdlcjtcXHJcXG59XFxyXFxuLnJlbW92ZV90YXNrX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig5MywgODAsIDEwMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9ybSAobW9kYWwpICovXFxyXFxuI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgb3BhY2l0eTogMDsgXFxyXFxuICAgIHRvcDowO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIHJpZ2h0OjA7XFxyXFxuICAgIGJvdHRvbTowO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjoyMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuI292ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6YWxsO1xcclxcbiAgICBvcGFjaXR5OjE7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIHRvcDo1MCU7XFxyXFxuICAgIGxlZnQ6NTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDApO1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXHJcXG4gICAgei1pbmRleDoxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOjUwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6ODAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcik7XFxyXFxufVxcclxcbiNtb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG4jbW9kYWxfaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4jbW9kYWwgI21vZGFsX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOmxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwgI2Nsb3NlX21vZGFsX2J1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgb3V0bGluZTpub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6MS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG59XFxyXFxuI21vZGFsICNtb2RhbF9ib2R5IHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwYWRkaW5nOjEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIGZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzozcHg7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbCAuaW5wdXRfZXJyb3Ige1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIGNvbG9yOnJlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21vZGFsIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOnNvbGlkIDEuNXB4IHJnYigyMTksIDE4NiwgMjI4KTtcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDVweCByZ2IoMTk1LCAxNDgsIDE5MSk7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbCAjYWRkX3Rhc2tfYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDExMiwgODksIDExNik7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBwYWRkaW5nOjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxyXFxuICAgIGZvbnQtc2l6ZTpsYXJnZXI7XFxyXFxufVxcclxcbiNtb2RhbCAjYWRkX3Rhc2tfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OjNweCA1cHggdmFyKC0tYWRkaXRpb25hbC1jb250YWluZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWNvbnRhaW5lci1jb2xvcik7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0NBQWtDO0lBQ2xDLCtDQUErQztJQUMvQyxnREFBZ0Q7SUFDaEQsbUNBQW1DOztBQUV2Qzs7QUFFQTtJQUNJLFFBQVE7SUFDUixrREFBa0Q7SUFDbEQsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQztBQUNBLFdBQVc7QUFDWDtJQUNJLGdCQUFnQjtJQUNoQixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxvQkFBb0I7SUFDcEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1EQUFtRDtJQUNuRCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7OztBQUdBLFlBQVk7QUFDWjtJQUNJLGdCQUFnQjtJQUNoQixtREFBbUQ7SUFDbkQsYUFBYTtJQUNiLFFBQVE7SUFDUixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7Ozs7O0FBS0EsWUFBWTtBQUNaO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFVBQVU7SUFDVixnQ0FBZ0M7QUFDcEM7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQSxpQkFBaUI7QUFDakI7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLEtBQUs7SUFDTCxNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsT0FBTztJQUNQLFFBQVE7SUFDUix3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixrREFBa0Q7QUFDdEQ7QUFDQTtJQUNJLHdDQUF3QztBQUM1QztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG9EQUFvRDtBQUN4RDs7Ozs7OztBQU9BO0lBQ0ksbURBQW1EO0FBQ3ZEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLyogY29udGFpbmVyIGNvbG9ycyAqL1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiKDIyMSwgMjAyLCAyMTcpO1xcclxcbiAgICAtLXNlY29uZGFyeS1jb250YWluZXItY29sb3I6IHJnYigyMjksIDIzMywgMjM2KTtcXHJcXG4gICAgLS1hZGRpdGlvbmFsLWNvbnRhaW5lci1jb2xvcjogcmdiKDIzNCwgMjUzLCAyNDgpO1xcclxcbiAgICAtLXNpZGViYXItY29sb3I6IHJnYigxMjcsIDEwMSwgMTMyKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG59XFxyXFxuLyogSEVBREVSICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciAjbG9nb3tcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZDtcXHJcXG59XFxyXFxuaGVhZGVyICNzZWFyY2ggaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbmhlYWRlciAjdXNlcl9pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNJREVCQVIgKi9cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmxpc3RfYnV0dG9uIHtcXHJcXG5cXHJcXG59XFxyXFxuLmxpc3RfYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIENPTlRFTlQgKi9cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb250YWluZXItY29sb3IpXFxyXFxufVxcclxcblxcclxcbi50YXNrX2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI5MjUyNDtcXHJcXG59XFxyXFxuLnRhc2tfY29udGFpbmVyIGgzIHtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyOTI1MjQ7XFxyXFxufVxcclxcbi50YXNrX2NvbnRhaW5lciBoNCB7XFxyXFxuICAgIHdpZHRoOjEwMCU7XFxyXFxufVxcclxcblxcclxcbi5yZW1vdmVfdGFza19idXR0b24ge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTEyLCA4OSwgMTE2KTtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIHBhZGRpbmc6NXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiAxNTBtcztcXHJcXG4gICAgZm9udC1zaXplOmxhcmdlcjtcXHJcXG59XFxyXFxuLnJlbW92ZV90YXNrX2J1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYig5MywgODAsIDEwMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9ybSAobW9kYWwpICovXFxyXFxuI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgb3BhY2l0eTogMDsgXFxyXFxuICAgIHRvcDowO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIHJpZ2h0OjA7XFxyXFxuICAgIGJvdHRvbTowO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjoyMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuI292ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6YWxsO1xcclxcbiAgICBvcGFjaXR5OjE7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIHRvcDo1MCU7XFxyXFxuICAgIGxlZnQ6NTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDApO1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXHJcXG4gICAgei1pbmRleDoxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOjUwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6ODAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcik7XFxyXFxufVxcclxcbiNtb2RhbC5hY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDEpO1xcclxcbn1cXHJcXG4jbW9kYWxfaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogNXB4IDVweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG4jbW9kYWwgI21vZGFsX3RpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOmxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwgI2Nsb3NlX21vZGFsX2J1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjpwb2ludGVyO1xcclxcbiAgICBib3JkZXI6bm9uZTtcXHJcXG4gICAgb3V0bGluZTpub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgICBmb250LXNpemU6MS4yNXJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcXHJcXG59XFxyXFxuI21vZGFsICNtb2RhbF9ib2R5IHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwYWRkaW5nOjEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIGZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzozcHg7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbCAuaW5wdXRfZXJyb3Ige1xcclxcbiAgICBkaXNwbGF5Om5vbmU7XFxyXFxuICAgIGNvbG9yOnJlZDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI21vZGFsIGlucHV0OmZvY3VzIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOnNvbGlkIDEuNXB4IHJnYigyMTksIDE4NiwgMjI4KTtcXHJcXG4gICAgYm94LXNoYWRvdzogM3B4IDVweCByZ2IoMTk1LCAxNDgsIDE5MSk7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbCAjYWRkX3Rhc2tfYnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDExMiwgODksIDExNik7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBwYWRkaW5nOjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogMTUwbXM7XFxyXFxuICAgIGZvbnQtc2l6ZTpsYXJnZXI7XFxyXFxufVxcclxcbiNtb2RhbCAjYWRkX3Rhc2tfYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OjNweCA1cHggdmFyKC0tYWRkaXRpb25hbC1jb250YWluZXItY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWNvbnRhaW5lci1jb2xvcik7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IGNsb3NlRm9ybSB9IGZyb20gXCIuL2Nsb3NlRm9ybVwiO1xyXG5pbXBvcnQgeyBzZWxlY3RSZW1vdmVUYXNrQnRucyB9IGZyb20gXCIuL3NlbGVjdFJlbW92ZVRhc2tCdG5zXCI7XHJcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiO1xyXG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gXCIuL3Rhc2tDb25zdHJ1Y3RvclwiO1xyXG5pbXBvcnQgeyB2YWxpZGF0ZUZvcm0gfSBmcm9tIFwiLi92YWxpZGF0ZUZvcm1cIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkVGFzaygpIHtcclxuICAgIGxldCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XHJcbiAgICBsZXQgdGl0bGVFcnJvck1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGVfZXJyb3InKVxyXG5cclxuICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICBsZXQgaW5wdXREdWVEYXRlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZSk7XHJcbiAgICBsZXQgZGF0ZUVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlX2Vycm9yJylcclxuXHJcbiAgICBsZXQgaW5wdXRQcmlvcml0eUJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3ByaW9yaXR5Jyk7XHJcbiAgICBsZXQgaW5wdXRQcmlvcml0eSA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8aW5wdXRQcmlvcml0eUJ1dHRvbkdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlucHV0UHJpb3JpdHlCdXR0b25Hcm91cFtpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGlucHV0UHJpb3JpdHkgPSBpbnB1dFByaW9yaXR5QnV0dG9uR3JvdXBbaV0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gV2F0Y2ggZm9yIGFueSBjaGFuZ2VzIGluIHRpdGxlIG9yIGRhdGUgaW5wdXRzIGFuZCBpbW1lZGlhdGVseSB2YWxpZGF0ZSBmb3JtIGlmIGFueXRoaW5nIGNoYW5nZXNcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJykub25jaGFuZ2UgPSB2YWxpZGF0ZUZvcm1cclxuXHJcblxyXG4gICAgLy9jaGVjayBmb3IgZHVwbGljYXRlcyBpbiBhcnJheVxyXG4gICAgZnVuY3Rpb24gZmluZER1cGxpY2F0ZXMoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9ICcnXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8dGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrQXJyYXlbaV0udGl0bGU9PWlucHV0VGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXN1bHQ9PXRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgdmFsaWRhdGVGb3JtKCk7XHJcbiAgICBmaW5kRHVwbGljYXRlcygpO1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKT09dHJ1ZSAmJiBmaW5kRHVwbGljYXRlcygpPT1mYWxzZSkge1xyXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRhc2tzKGlucHV0VGl0bGUsaW5wdXREZXNjcmlwdGlvbixpbnB1dER1ZURhdGUsaW5wdXRQcmlvcml0eSk7XHJcbiAgICAgICAgdGFza0FycmF5LnB1c2gobmV3VGFzaylcclxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpXHJcbiAgICBcclxuICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAgICAgbmV3VGFzay5hcHBlbmRUYXNrKGNvbnRlbnQpXHJcbiAgICAgICAgY2xvc2VGb3JtKClcclxuICAgICAgICBzZWxlY3RSZW1vdmVUYXNrQnRucygpO1xyXG4gICAgfSBlbHNlIGlmICh2YWxpZGF0ZUZvcm0oKT09dHJ1ZSAmJiBmaW5kRHVwbGljYXRlcygpPT10cnVlKSB7XHJcbiAgICAgICAgYWxlcnQoJ1Rhc2sgd2l0aCB0aGlzIHRpdGxlIGFscmVhZHkgZXhpc3RzISBQbGVhc2UgY2hvb3NlIGEgZGlmZmVyZW50IG9uZScpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7YWRkVGFza30iLCJmdW5jdGlvbiBjbG9zZUZvcm0oKSB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59XHJcbmV4cG9ydCB7Y2xvc2VGb3JtfSIsImltcG9ydCB7IHJlbW92ZVRhc2tCdXR0b24gfSBmcm9tIFwiLi9zZWxlY3RSZW1vdmVUYXNrQnRuc1wiO1xyXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIjtcclxubGV0IHRpdGxlID0gJyc7XHJcbmZ1bmN0aW9uIGZpbmRUYXNrVGl0bGVUb1JlbW92ZSgpIHtcclxuICAgIHJlbW92ZVRhc2tCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRpdGxlID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlcyB0YXNrIGZyb20gdGFza0FycmF5XHJcbiAgICAgICAgICAgIHJlbW92ZVRhc2tCeVRpdGxlKHRpdGxlKVxyXG4gICAgICAgICAgICAvLyByZW1vdmVzIHRoZSBwYXJlbnQgRE9NIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGN1cnJlbnQgJ3JlbW92ZSB0YXNrJyBidXR0b25cclxuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlVGFza0J5VGl0bGUgKHRpdGxlKSB7XHJcbiAgICBsZXQgY3VycmVudFRhc2tJbmRleCA9IHRhc2tBcnJheS5maW5kSW5kZXgoKGkpID0+IHtcclxuICAgICAgICByZXR1cm4gaS50aXRsZSA9PT0gdGl0bGU7XHJcbiAgICB9KVxyXG4gICAgdGFza0FycmF5LnNwbGljZShjdXJyZW50VGFza0luZGV4LDEpO1xyXG4gICAgY29uc29sZS5sb2codGFza0FycmF5KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7dGl0bGUsIGZpbmRUYXNrVGl0bGVUb1JlbW92ZX0iLCJpbXBvcnQgeyByZW1vdmVUYXNrQnV0dG9uLCBzZWxlY3RSZW1vdmVUYXNrQnRucyB9IGZyb20gXCIuL3NlbGVjdFJlbW92ZVRhc2tCdG5zXCI7XHJcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiXHJcblxyXG5mdW5jdGlvbiBnZXRIaWdoVGFza3MoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAvLyBGaXJzdCwgaWYgY29udGVudCBpcyBub3QgZW1wdHksIHJlbW92ZSBldmVyeXRoaW5nIGluc2lkZSB0YXNrIGNvbnRhaW5lciAoc28gdGhhdCB0aGVyZSBpcyBubyBpbmZpbml0ZSBkdXBsaWNhdGlvbiBvZiAndG9kYXknIHRhc2tzKVxyXG4gICAgbGV0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tfY29udGFpbmVyJyk7XHJcbiAgICBhbGxUYXNrcy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnJlbW92ZSgpKTtcclxuICAgIC8vIENoZWNrIGZvciBvYmplY3RzIGluc2lkZSB0aGUgJ3Rhc2tBcnJheScgYXJyYXkgdGhhdCBoYXZlICdMb3cnIHByaW9yaXR5XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0YXNrQXJyYXlbaV0ucHJpb3JpdHk9PSdIaWdoJykge1xyXG4gICAgICAgICAgICB0YXNrQXJyYXlbaV0uYXBwZW5kVGFzayhjb250ZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNlbGVjdHMgYWxsIHJlbW92ZSB0YXNrIGJ1dHRvbnMgaW5zaWRlIHRoZSAnY29udGVudCcgc2VjdGlvbiBhZnRlciB1c2VyIGNob29zZXMgdGhpcyBsaXN0XHJcbiAgICBzZWxlY3RSZW1vdmVUYXNrQnRucygpXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0SGlnaFRhc2tzLCByZW1vdmVUYXNrQnV0dG9ufSIsImltcG9ydCB7IHJlbW92ZVRhc2tCdXR0b24sIHNlbGVjdFJlbW92ZVRhc2tCdG5zIH0gZnJvbSBcIi4vc2VsZWN0UmVtb3ZlVGFza0J0bnNcIjtcclxuaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSBcIi4vdGFza0FycmF5XCJcclxuXHJcbmZ1bmN0aW9uIGdldExvd1Rhc2tzKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgLy8gRmlyc3QsIGlmIGNvbnRlbnQgaXMgbm90IGVtcHR5LCByZW1vdmUgZXZlcnl0aGluZyBpbnNpZGUgdGFzayBjb250YWluZXIgKHNvIHRoYXQgdGhlcmUgaXMgbm8gaW5maW5pdGUgZHVwbGljYXRpb24gb2YgJ3RvZGF5JyB0YXNrcylcclxuICAgIGxldCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX2NvbnRhaW5lcicpO1xyXG4gICAgYWxsVGFza3MuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5yZW1vdmUoKSk7XHJcbiAgICAvLyBDaGVjayBmb3Igb2JqZWN0cyBpbnNpZGUgdGhlICd0YXNrQXJyYXknIGFycmF5IHRoYXQgaGF2ZSAnTG93JyBwcmlvcml0eVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwIDsgaTx0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAodGFza0FycmF5W2ldLnByaW9yaXR5PT0nTG93Jykge1xyXG4gICAgICAgICAgICB0YXNrQXJyYXlbaV0uYXBwZW5kVGFzayhjb250ZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNlbGVjdHMgYWxsIHJlbW92ZSB0YXNrIGJ1dHRvbnMgaW5zaWRlIHRoZSAnY29udGVudCcgc2VjdGlvbiBhZnRlciB1c2VyIGNob29zZXMgdGhpcyBsaXN0XHJcbiAgICBzZWxlY3RSZW1vdmVUYXNrQnRucygpXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0TG93VGFza3MsIHJlbW92ZVRhc2tCdXR0b259IiwiaW1wb3J0IHsgcmVtb3ZlVGFza0J1dHRvbiwgc2VsZWN0UmVtb3ZlVGFza0J0bnMgfSBmcm9tIFwiLi9zZWxlY3RSZW1vdmVUYXNrQnRuc1wiO1xyXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIlxyXG5cclxuZnVuY3Rpb24gZ2V0TWVkaXVtVGFza3MoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAvLyBGaXJzdCwgaWYgY29udGVudCBpcyBub3QgZW1wdHksIHJlbW92ZSBldmVyeXRoaW5nIGluc2lkZSB0YXNrIGNvbnRhaW5lciAoc28gdGhhdCB0aGVyZSBpcyBubyBpbmZpbml0ZSBkdXBsaWNhdGlvbiBvZiAndG9kYXknIHRhc2tzKVxyXG4gICAgbGV0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2tfY29udGFpbmVyJyk7XHJcbiAgICBhbGxUYXNrcy5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnJlbW92ZSgpKTtcclxuICAgIC8vIENoZWNrIGZvciBvYmplY3RzIGluc2lkZSB0aGUgJ3Rhc2tBcnJheScgYXJyYXkgdGhhdCBoYXZlICdMb3cnIHByaW9yaXR5XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmICh0YXNrQXJyYXlbaV0ucHJpb3JpdHk9PSdNZWRpdW0nKSB7XHJcbiAgICAgICAgICAgIHRhc2tBcnJheVtpXS5hcHBlbmRUYXNrKGNvbnRlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU2VsZWN0cyBhbGwgcmVtb3ZlIHRhc2sgYnV0dG9ucyBpbnNpZGUgdGhlICdjb250ZW50JyBzZWN0aW9uIGFmdGVyIHVzZXIgY2hvb3NlcyB0aGlzIGxpc3RcclxuICAgIHNlbGVjdFJlbW92ZVRhc2tCdG5zKClcclxufVxyXG5cclxuZXhwb3J0IHtnZXRNZWRpdW1UYXNrcywgcmVtb3ZlVGFza0J1dHRvbn0iLCJpbXBvcnQgeyByZW1vdmVUYXNrQnV0dG9uLCBzZWxlY3RSZW1vdmVUYXNrQnRucyB9IGZyb20gXCIuL3NlbGVjdFJlbW92ZVRhc2tCdG5zXCI7XHJcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiXHJcblxyXG5mdW5jdGlvbiBnZXRUb2RheVRhc2tzKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgLy8gRmlyc3QsIGlmIGNvbnRlbnQgaXMgbm90IGVtcHR5LCByZW1vdmUgZXZlcnl0aGluZyBpbnNpZGUgdGFzayBjb250YWluZXIgKHNvIHRoYXQgdGhlcmUgaXMgbm8gaW5maW5pdGUgZHVwbGljYXRpb24gb2YgJ3RvZGF5JyB0YXNrcylcclxuICAgIGxldCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX2NvbnRhaW5lcicpO1xyXG4gICAgYWxsVGFza3MuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5yZW1vdmUoKSk7XHJcbiAgICAvLyBDaGVjayBmb3Igb2JqZWN0cyBpbnNpZGUgdGhlICd0YXNrQXJyYXknIGFycmF5IHRoYXQgaGF2ZSAnZHVlRGF0ZScgdG9kYXlcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMCA7IGk8dGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0b2RheS5nZXRGdWxsWWVhcigpID09PSB0YXNrQXJyYXlbaV0uZHVlRGF0ZS5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgIHRvZGF5LmdldE1vbnRoKCkgPT09IHRhc2tBcnJheVtpXS5kdWVEYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgdG9kYXkuZ2V0RGF0ZSgpID09PSB0YXNrQXJyYXlbaV0uZHVlRGF0ZS5nZXREYXRlKClcclxuICAgICAgICApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFza0FycmF5W2ldLmFwcGVuZFRhc2soY29udGVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBTZWxlY3RzIGFsbCByZW1vdmUgdGFzayBidXR0b25zIGluc2lkZSB0aGUgJ2NvbnRlbnQnIHNlY3Rpb24gYWZ0ZXIgdXNlciBjaG9vc2VzIHRoaXMgbGlzdFxyXG4gICAgc2VsZWN0UmVtb3ZlVGFza0J0bnMoKVxyXG59XHJcblxyXG5leHBvcnQge2dldFRvZGF5VGFza3MsIHJlbW92ZVRhc2tCdXR0b259IiwiaW1wb3J0IHsgcmVtb3ZlVGFza0J1dHRvbiwgc2VsZWN0UmVtb3ZlVGFza0J0bnMgfSBmcm9tIFwiLi9zZWxlY3RSZW1vdmVUYXNrQnRuc1wiO1xyXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIlxyXG5cclxuZnVuY3Rpb24gZ2V0VG9tb3Jyb3dUYXNrcygpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgLy8gRmlyc3QsIGlmIGNvbnRlbnQgaXMgbm90IGVtcHR5LCByZW1vdmUgZXZlcnl0aGluZyBpbnNpZGUgdGFzayBjb250YWluZXIgKHNvIHRoYXQgdGhlcmUgaXMgbm8gaW5maW5pdGUgZHVwbGljYXRpb24gb2YgJ3RvZGF5JyB0YXNrcylcclxuICAgIGxldCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX2NvbnRhaW5lcicpO1xyXG4gICAgYWxsVGFza3MuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5yZW1vdmUoKSk7XHJcbiAgICAvLyBDaGVjayBmb3Igb2JqZWN0cyBpbnNpZGUgdGhlICd0YXNrQXJyYXknIGFycmF5IHRoYXQgaGF2ZSAnZHVlRGF0ZScgdG9tb3Jyb3dcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgdG9tb3Jyb3cgPSAgbmV3IERhdGUoKVxyXG4gICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKVxyXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdG9tb3Jyb3cuZ2V0RnVsbFllYXIoKSA9PT0gdGFza0FycmF5W2ldLmR1ZURhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICB0b21vcnJvdy5nZXRNb250aCgpID09PSB0YXNrQXJyYXlbaV0uZHVlRGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgIHRvbW9ycm93LmdldERhdGUoKSA9PT0gdGFza0FycmF5W2ldLmR1ZURhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhc2tBcnJheVtpXS5hcHBlbmRUYXNrKGNvbnRlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU2VsZWN0cyBhbGwgcmVtb3ZlIHRhc2sgYnV0dG9ucyBpbnNpZGUgdGhlICdjb250ZW50JyBzZWN0aW9uIGFmdGVyIHVzZXIgY2hvb3NlcyB0aGlzIGxpc3RcclxuICAgIHNlbGVjdFJlbW92ZVRhc2tCdG5zKClcclxufVxyXG5cclxuZXhwb3J0IHtnZXRUb21vcnJvd1Rhc2tzLCByZW1vdmVUYXNrQnV0dG9ufSIsImltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmExLmpwZyc7XHJcbmNvbnN0IHVzZXJBdmF0YXIgPSBuZXcgSW1hZ2UoKTtcclxudXNlckF2YXRhci5zcmMgPSBBdmF0YXI7XHJcbmNvbnN0IHVzZXJOYW1lID0gJ0B1c2VyTmFtZSdcclxuXHJcbmV4cG9ydCB7dXNlck5hbWUsdXNlckF2YXRhcn0iLCJpbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIlxyXG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gXCIuL3Rhc2tDb25zdHJ1Y3RvclwiXHJcblxyXG5cclxuZnVuY3Rpb24gcGFnZUxvYWQobmFtZSxhdmF0YXIpIHtcclxuICAgIC8vIGhlYWRlciB1c2VybmFtZSBhbmQgYXZhdGFyXHJcbiAgICBsZXQgdXNlck5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcl9uYW1lJylcclxuICAgIHVzZXJOYW1lLmlubmVyVGV4dCA9IG5hbWVcclxuXHJcbiAgICBsZXQgdXNlckF2YXRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyX2F2YXRhcicpXHJcbiAgICB1c2VyQXZhdGFyLmFwcGVuZENoaWxkKGF2YXRhcilcclxuICAgIC8vIHNpZGViYXJcclxuICAgIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXInKVxyXG4gICAgbGV0IGxpc3RUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGlzdFRvZGF5LmlubmVyVGV4dCA9ICdUb2RheSdcclxuICAgIGxpc3RUb2RheS5zZXRBdHRyaWJ1dGUoJ2lkJywnbGlzdF90b2RheScpXHJcbiAgICBsaXN0VG9kYXkuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3RfYnV0dG9uJylcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdFRvZGF5KVxyXG5cclxuICAgIGxldCBsaXN0VG9tb3Jyb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxpc3RUb21vcnJvdy5pbm5lclRleHQgPSAnVG9tb3Jyb3cnXHJcbiAgICBsaXN0VG9tb3Jyb3cuc2V0QXR0cmlidXRlKCdpZCcsJ2xpc3RfdG9tb3Jyb3cnKVxyXG4gICAgbGlzdFRvbW9ycm93LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0X2J1dHRvbicpXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RUb21vcnJvdylcclxuXHJcbiAgICBsZXQgbGlzdExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGlzdExvdy5pbm5lclRleHQgPSAnTG93IFByaW9yaXR5J1xyXG4gICAgbGlzdExvdy5zZXRBdHRyaWJ1dGUoJ2lkJywnbGlzdF9sb3cnKTtcclxuICAgIGxpc3RMb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3RfYnV0dG9uJyk7XHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RMb3cpO1xyXG5cclxuICAgIGxldCBsaXN0TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBsaXN0TWVkaXVtLmlubmVyVGV4dCA9ICdNZWRpdW0gUHJpb3JpdHknXHJcbiAgICBsaXN0TWVkaXVtLnNldEF0dHJpYnV0ZSgnaWQnLCdsaXN0X21lZGl1bScpO1xyXG4gICAgbGlzdE1lZGl1bS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdF9idXR0b24nKTtcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdE1lZGl1bSk7XHJcblxyXG4gICAgbGV0IGxpc3RIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBsaXN0SGlnaC5pbm5lclRleHQgPSAnSGlnaCBQcmlvcml0eSdcclxuICAgIGxpc3RIaWdoLnNldEF0dHJpYnV0ZSgnaWQnLCdsaXN0X2hpZ2gnKTtcclxuICAgIGxpc3RIaWdoLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdsaXN0X2J1dHRvbicpO1xyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0SGlnaCk7XHJcbiAgIFxyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcblxyXG4gICAgLy8gYnV0dG9uIHRvIHNob3cgJ2FkZCB0YXNrJyBmb3JtXHJcbiAgICBsZXQgc2hvd0Zvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNob3dGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdzaG93X2Zvcm1fYnV0dG9uJylcclxuICAgIHNob3dGb3JtQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgdGFzaydcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2hvd0Zvcm1CdXR0b24pXHJcblxyXG4gICAgLy8gc2VsZWN0IGFsbCBsaXN0IGJ1dHRvbnNcclxuICAgIGxldCBsaXN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0X2J1dHRvbicpXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHtwYWdlTG9hZCwgdGFza0FycmF5fSIsImltcG9ydCB7IGZpbmRUYXNrVGl0bGVUb1JlbW92ZSB9IGZyb20gXCIuL2ZpbmRUYXNrVGl0bGVUb1JlbW92ZVwiXHJcblxyXG5sZXQgcmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVfdGFza19idXR0b24nKVxyXG5cclxuLy8gU2VsZWN0cyBhbGwgJ1JlbW92ZSB0YXNrJyBidXR0b25zIGluc2lkZSB0aGUgJ2NvbnRlbnQnIHNlY3Rpb24gYWZ0ZXIgdXNlciBjaG9vc2VzICd0b2RheScgb3IgJ3RvbW9ycm93JyBsaXN0c1xyXG4vLyBhbmQgc3RhcnRzIHRoZSBmaW5kVGFza1RpdGxlVG9SZW1vdmUgZnVuY3Rpb25cclxuZnVuY3Rpb24gc2VsZWN0UmVtb3ZlVGFza0J0bnMoKSB7XHJcbiAgICByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZV90YXNrX2J1dHRvbicpXHJcbiAgICBjb25zb2xlLmxvZyhyZW1vdmVUYXNrQnV0dG9uKVxyXG4gICAgZmluZFRhc2tUaXRsZVRvUmVtb3ZlKClcclxufVxyXG5leHBvcnQge3JlbW92ZVRhc2tCdXR0b24sIHNlbGVjdFJlbW92ZVRhc2tCdG5zfSIsImZ1bmN0aW9uIHNob3dGb3JtKCkge1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcblxyXG5leHBvcnQge3Nob3dGb3JtfSIsImxldCB0YXNrQXJyYXkgPSBbXVxyXG4vLyBvYmplY3RzIGluIHRoaXMgYXJyYXkgaGF2ZSB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcbi8vIHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHlcclxuXHJcbi8vIGFuZCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XHJcbi8vIHNldFRpdGxlIChuZXdUaXRsZSlcclxuLy8gc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pXHJcbi8vIHNldER1ZURhdGUobmV3RHVlRGF0ZSlcclxuLy8gc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpXHJcblxyXG4vLyBhcHBlbmRUYXNrKGNvbnRhaW5lcikgLy9cclxuZXhwb3J0IHt0YXNrQXJyYXl9IiwiaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSBcIi4vdGFza0FycmF5XCI7XHJcblxyXG5jbGFzcyBUYXNrcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuICAgIHNldFRpdGxlIChuZXdUaXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgfVxyXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGVcclxuICAgIH1cclxuICAgIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5XHJcbiAgICB9XHJcbiAgICBhcHBlbmRUYXNrKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0YXNrX2NvbnRhaW5lcicpXHJcblxyXG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRoaXMudGl0bGVcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcclxuXHJcbiAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXHJcblxyXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9IHRoaXMuZHVlRGF0ZTtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKVxyXG5cclxuICAgICAgICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSAnUHJpb3JpdHk6ICcgKyB0aGlzLnByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5pbm5lclRleHQgPSAnUmVtb3ZlIHRhc2snXHJcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncmVtb3ZlX3Rhc2tfYnV0dG9uJylcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdXR0b24pXHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICAgICAgICAvL3Rhc2tBcnJheS5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVGFzayh0aXRsZSkge1xyXG4gICAgICAgIC8vIGZpbmQgdGl0bGUgb2YgdGhlIHRhc2sgaW4gdGhlIGNvbnRhaW5lcidzIGZpcnN0IGNoaWxkICh0YXNrIHRpdGxlID09IGgzIERPTSBlbGVtZW50J3MgaW5uZXJUZXh0KSAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaTx0YXNrQXJyYXkubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICBpZiAodGFza0FycmF5W2ldLnRpdGxlID09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tBcnJheVtpXSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtUYXNrc30iLCJmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XHJcbiAgICBsZXQgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xyXG4gICAgbGV0IHRpdGxlRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlX2Vycm9yJylcclxuXHJcbiAgICBsZXQgaW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uRXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uX2Vycm9yJylcclxuXHJcbiAgICBsZXQgaW5wdXREdWVEYXRlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZSk7XHJcbiAgICBsZXQgZGF0ZUVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlX2Vycm9yJylcclxuXHJcbiAgICBsZXQgaW5wdXRQcmlvcml0eUJ1dHRvbkdyb3VwID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ3ByaW9yaXR5Jyk7XHJcbiAgICBsZXQgaW5wdXRQcmlvcml0eSA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8aW5wdXRQcmlvcml0eUJ1dHRvbkdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlucHV0UHJpb3JpdHlCdXR0b25Hcm91cFtpXS5jaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGlucHV0UHJpb3JpdHkgPSBpbnB1dFByaW9yaXR5QnV0dG9uR3JvdXBbaV0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHByaW9yaXR5RXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5X2Vycm9yJylcclxuXHJcbiAgICBcclxuICAgIGlmIChpbnB1dFRpdGxlPT0nJykge1xyXG4gICAgICAgIGlmIChpbnB1dER1ZURhdGUhPSdJbnZhbGlkIERhdGUnKSB7XHJcbiAgICAgICAgICAgIHRpdGxlRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIGRhdGVFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbnB1dERlc2NyaXB0aW9uIT0nJykge1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHRpdGxlRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aXRsZUVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICBkYXRlRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0RHVlRGF0ZT09J0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICBpZiAoaW5wdXRUaXRsZSE9JycpIHtcclxuICAgICAgICAgICAgZGF0ZUVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICB0aXRsZUVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0RGVzY3JpcHRpb24hPScnKSB7XHJcbiAgICAgICAgICAgIGRhdGVFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aXRsZUVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG4gICAgICAgICAgICBkYXRlRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKGlucHV0RGVzY3JpcHRpb249PScnKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VGl0bGUhPScnKSB7XHJcbiAgICAgICAgICAgIHRpdGxlRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9IGVsc2UgaWYgKGlucHV0RHVlRGF0ZSE9J0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICAgICAgZGF0ZUVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSBlbHNlIHsgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aXRsZUVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgZGVzY3JpcHRpb25FcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGRhdGVFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIGVsc2UgaWYgKGlucHV0VGl0bGUhPScnICYmIGlucHV0RGVzY3JpcHRpb24hPScnICYmIGlucHV0RHVlRGF0ZSE9J0ludmFsaWQgRGF0ZScpIHtcclxuICAgICAgICB0aXRsZUVycm9yTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBkYXRlRXJyb3JNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgcHJpb3JpdHlFcnJvck1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHt2YWxpZGF0ZUZvcm19IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGFkZFRhc2sgfSBmcm9tICcuL2FkZFRhc2snO1xyXG5pbXBvcnQgeyBjbG9zZUZvcm0gfSBmcm9tICcuL2Nsb3NlRm9ybSc7XHJcbmltcG9ydCB7IGdldEhpZ2hUYXNrcyB9IGZyb20gJy4vZ2V0SGlnaFRhc2tzJztcclxuaW1wb3J0IHsgZ2V0TG93VGFza3MgfSBmcm9tICcuL2dldExvd1Rhc2tzJztcclxuaW1wb3J0IHsgZ2V0TWVkaXVtVGFza3MgfSBmcm9tICcuL2dldE1lZGl1bVRhc2tzJztcclxuaW1wb3J0IHsgZ2V0VG9kYXlUYXNrcyB9IGZyb20gJy4vZ2V0VG9kYXlUYXNrcyc7XHJcbmltcG9ydCB7IGdldFRvbW9ycm93VGFza3MgfSBmcm9tICcuL2dldFRvbW9ycm93VGFza3MnO1xyXG5pbXBvcnQgeyB1c2VyTmFtZSwgdXNlckF2YXRhciB9IGZyb20gJy4vZ2V0VXNlck5hbWVBdmF0YXInO1xyXG5pbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vcGFnZUxvYWQnO1xyXG5pbXBvcnQgeyBzaG93Rm9ybSB9IGZyb20gJy4vc2hvd0Zvcm0nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSAnLi90YXNrQXJyYXknO1xyXG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gJy4vdGFza0NvbnN0cnVjdG9yJztcclxuXHJcbnBhZ2VMb2FkKHVzZXJOYW1lLHVzZXJBdmF0YXIpXHJcbi8vIGRlYnVnXHJcbmxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG5sZXQgdGFzazEgPSBuZXcgVGFza3MoJ3Rlc3QxJywnZGVzY3JpcCcsbmV3IERhdGUoKSwnSGlnaCcpXHJcbnRhc2tBcnJheS5wdXNoKHRhc2sxKVxyXG5cclxubGV0IHRhc2syID0gbmV3IFRhc2tzKCd0ZXN0MicsJ2Rlc2NyaXB0aW9uJyxuZXcgRGF0ZSgpLCdMb3cnKVxyXG50YXNrMi5kdWVEYXRlLnNldERhdGUoMjcpO1xyXG50YXNrQXJyYXkucHVzaCh0YXNrMik7XHJcblxyXG5cclxudGFzazEucmVtb3ZlVGFzaygpO1xyXG5jb25zb2xlLmxvZyh0YXNrQXJyYXkpXHJcblxyXG4vL1xyXG5cclxuLy8gdGFzayBsaXN0c1xyXG5sZXQgbGlzdFRvZGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RfdG9kYXknKVxyXG5saXN0VG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGdldFRvZGF5VGFza3MpXHJcblxyXG5sZXQgbGlzdFRvbW9ycm93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RfdG9tb3Jyb3cnKVxyXG5saXN0VG9tb3Jyb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGdldFRvbW9ycm93VGFza3MpXHJcblxyXG5sZXQgbGlzdExvd0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0X2xvdycpO1xyXG5saXN0TG93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxnZXRMb3dUYXNrcylcclxuXHJcbmxldCBsaXN0TWVkaXVtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RfbWVkaXVtJyk7XHJcbmxpc3RNZWRpdW1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGdldE1lZGl1bVRhc2tzKVxyXG5cclxubGV0IGxpc3RIaWdoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RfaGlnaCcpO1xyXG5saXN0SGlnaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZ2V0SGlnaFRhc2tzKVxyXG5cclxuLy9cclxubGV0IHNob3dGb3JtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dfZm9ybV9idXR0b24nKVxyXG5zaG93Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb3JtKVxyXG5cclxubGV0IGNsb3NlRm9ybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9tb2RhbF9idXR0b24nKTtcclxuY2xvc2VGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjbG9zZUZvcm0pXHJcblxyXG5sZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRfdGFza19idXR0b24nKVxyXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldmVudCkge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG59KVxyXG5cclxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZFRhc2spXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=