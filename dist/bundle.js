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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    /* container colors */\r\n    --header-color: rgb(221, 202, 217);\r\n    --secondary-container-color: rgb(229, 233, 236);\r\n    --additional-container-color: rgb(234, 253, 248);\r\n    --sidebar-color: rgb(127, 101, 132);\r\n    \r\n}\r\n\r\nbody {\r\n    margin:0;\r\n    background-color: var(--secondary-container-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n/* HEADER */\r\nheader {\r\n    grid-column: 1/3;\r\n    background-color: var(--header-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    justify-items:center;\r\n    align-items: center;\r\n}\r\nheader #logo{\r\n    border:2px solid;\r\n}\r\nheader #search input{\r\n    background-color: var(--additional-container-color);\r\n    border: none;\r\n    border-radius: 4px;\r\n}\r\nheader #user_info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nheader img {\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n/* SIDEBAR */\r\n#sidebar {\r\n    grid-column: 1/2;\r\n    background-color: var(--additional-container-color);\r\n    display: grid;\r\n    gap:20px;\r\n    justify-items: center;\r\n}\r\n\r\n#sidebar h2 {\r\n    text-align: center;\r\n}\r\n\r\n#sidebar button {\r\n    font-size: large;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* CONTENT */\r\n#content {\r\n    grid-column: 2/4;\r\n    background-color: var(--secondary-container-color)\r\n}\r\n\r\n\r\n/* form (modal) */\r\n#modal {\r\n    display:grid;\r\n    position:fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%) scale(0);\r\n    border:1px solid black;\r\n    padding:10px;\r\n    border-radius:10px;\r\n    z-index:10;\r\n    background-color: white;\r\n    width:500px;\r\n    max-width:80%;\r\n    transition: 200ms ease-in-out;\r\n}\r\n#modal.active {\r\n    transform: translate(-50%,-50%) scale(1);\r\n}\r\n#modal_header {\r\n    padding: 5px 5px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom:1px solid black;\r\n}\r\n#modal #modal_title {\r\n    font-size:large;\r\n}\r\n\r\n#modal #close_modal_button {\r\n    cursor:pointer;\r\n    border:none;\r\n    outline:none;\r\n    background: none;\r\n    font-size:1.25rem;\r\n    font-weight:bold;\r\n}\r\n#modal #modal_body {\r\n    padding:10px 10px;\r\n}\r\n#overlay {\r\n    position:fixed;\r\n    opacity: 0; \r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    background: rgba(0,0,0,.5);\r\n    pointer-events:none;\r\n    transition:200ms ease-in-out;\r\n}\r\n#overlay.active {\r\n    pointer-events:all;\r\n    opacity:1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfooter {\r\n    background-color: var(--additional-container-color);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,kCAAkC;IAClC,+CAA+C;IAC/C,gDAAgD;IAChD,mCAAmC;;AAEvC;;AAEA;IACI,QAAQ;IACR,kDAAkD;IAClD,aAAa;IACb,8BAA8B;AAClC;AACA,WAAW;AACX;IACI,gBAAgB;IAChB,qCAAqC;IACrC,aAAa;IACb,kCAAkC;IAClC,oBAAoB;IACpB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mDAAmD;IACnD,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,WAAW;IACX,mBAAmB;AACvB;;;AAGA,YAAY;AACZ;IACI,gBAAgB;IAChB,mDAAmD;IACnD,aAAa;IACb,QAAQ;IACR,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;;;;;AAKA,YAAY;AACZ;IACI,gBAAgB;IAChB;AACJ;;;AAGA,iBAAiB;AACjB;IACI,YAAY;IACZ,cAAc;IACd,OAAO;IACP,QAAQ;IACR,wCAAwC;IACxC,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,cAAc;IACd,UAAU;IACV,KAAK;IACL,MAAM;IACN,OAAO;IACP,QAAQ;IACR,0BAA0B;IAC1B,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,SAAS;AACb;;;;;;;;;;;;AAYA;IACI,mDAAmD;AACvD","sourcesContent":[":root {\r\n    /* container colors */\r\n    --header-color: rgb(221, 202, 217);\r\n    --secondary-container-color: rgb(229, 233, 236);\r\n    --additional-container-color: rgb(234, 253, 248);\r\n    --sidebar-color: rgb(127, 101, 132);\r\n    \r\n}\r\n\r\nbody {\r\n    margin:0;\r\n    background-color: var(--secondary-container-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n/* HEADER */\r\nheader {\r\n    grid-column: 1/3;\r\n    background-color: var(--header-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    justify-items:center;\r\n    align-items: center;\r\n}\r\nheader #logo{\r\n    border:2px solid;\r\n}\r\nheader #search input{\r\n    background-color: var(--additional-container-color);\r\n    border: none;\r\n    border-radius: 4px;\r\n}\r\nheader #user_info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nheader img {\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n/* SIDEBAR */\r\n#sidebar {\r\n    grid-column: 1/2;\r\n    background-color: var(--additional-container-color);\r\n    display: grid;\r\n    gap:20px;\r\n    justify-items: center;\r\n}\r\n\r\n#sidebar h2 {\r\n    text-align: center;\r\n}\r\n\r\n#sidebar button {\r\n    font-size: large;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n/* CONTENT */\r\n#content {\r\n    grid-column: 2/4;\r\n    background-color: var(--secondary-container-color)\r\n}\r\n\r\n\r\n/* form (modal) */\r\n#modal {\r\n    display:grid;\r\n    position:fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%) scale(0);\r\n    border:1px solid black;\r\n    padding:10px;\r\n    border-radius:10px;\r\n    z-index:10;\r\n    background-color: white;\r\n    width:500px;\r\n    max-width:80%;\r\n    transition: 200ms ease-in-out;\r\n}\r\n#modal.active {\r\n    transform: translate(-50%,-50%) scale(1);\r\n}\r\n#modal_header {\r\n    padding: 5px 5px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom:1px solid black;\r\n}\r\n#modal #modal_title {\r\n    font-size:large;\r\n}\r\n\r\n#modal #close_modal_button {\r\n    cursor:pointer;\r\n    border:none;\r\n    outline:none;\r\n    background: none;\r\n    font-size:1.25rem;\r\n    font-weight:bold;\r\n}\r\n#modal #modal_body {\r\n    padding:10px 10px;\r\n}\r\n#overlay {\r\n    position:fixed;\r\n    opacity: 0; \r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    background: rgba(0,0,0,.5);\r\n    pointer-events:none;\r\n    transition:200ms ease-in-out;\r\n}\r\n#overlay.active {\r\n    pointer-events:all;\r\n    opacity:1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfooter {\r\n    background-color: var(--additional-container-color);\r\n}"],"sourceRoot":""}]);
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
            console.log(title);
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
    sidebar.appendChild(listToday)

    let listTomorrow = document.createElement('button');
    listTomorrow.innerText = 'Tomorrow'
    listTomorrow.setAttribute('id','list_tomorrow')
    sidebar.appendChild(listTomorrow)

    //test task on pageload
    let taskContainer = document.getElementById('content')
    
    //let task1 = new Tasks('test1','descrip',new Date(),'high')

    // let task2 = new Tasks('test2','description',new Date(),'high')
    // task2.dueDate.setDate(27);
    // task2.appendTask(taskContainer)
    // taskArray.push(task2)

    // button to add new task
    let showFormButton = document.createElement('button');
    showFormButton.setAttribute('id','show_form_button')
    showFormButton.innerText = 'Add task'
    taskContainer.appendChild(showFormButton)

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
        taskPriority.innerText = this.priority;
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
/* harmony import */ var _closeForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closeForm */ "./src/closeForm.js");
/* harmony import */ var _findTaskTitleToRemove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./findTaskTitleToRemove */ "./src/findTaskTitleToRemove.js");
/* harmony import */ var _getTodayTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTodayTasks */ "./src/getTodayTasks.js");
/* harmony import */ var _getTomorrowTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTomorrowTasks */ "./src/getTomorrowTasks.js");
/* harmony import */ var _getUserNameAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getUserNameAvatar */ "./src/getUserNameAvatar.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _selectRemoveTaskBtns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selectRemoveTaskBtns */ "./src/selectRemoveTaskBtns.js");
/* harmony import */ var _showForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./showForm */ "./src/showForm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");
/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./taskConstructor */ "./src/taskConstructor.js");












(0,_pageLoad__WEBPACK_IMPORTED_MODULE_5__.pageLoad)(_getUserNameAvatar__WEBPACK_IMPORTED_MODULE_4__.userName,_getUserNameAvatar__WEBPACK_IMPORTED_MODULE_4__.userAvatar)
// debug
let taskContainer = document.getElementById('content')
let task1 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_10__.Tasks('test1','descrip',new Date(),'high')
_taskArray__WEBPACK_IMPORTED_MODULE_9__.taskArray.push(task1)

let task2 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_10__.Tasks('test2','description',new Date(),'high')
task2.dueDate.setDate(27);
_taskArray__WEBPACK_IMPORTED_MODULE_9__.taskArray.push(task2);


task1.removeTask();
console.log(_taskArray__WEBPACK_IMPORTED_MODULE_9__.taskArray)

let task3 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_10__.Tasks('teswqoejwq','description',new Date(),'high')
_taskArray__WEBPACK_IMPORTED_MODULE_9__.taskArray.push(task3);

let task4 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_10__.Tasks('testsdfjsdkfl','description',new Date(),'high')
_taskArray__WEBPACK_IMPORTED_MODULE_9__.taskArray.push(task4);

let task5 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_10__.Tasks('ewfkjwelfjwe','description',new Date(),'medium')
_taskArray__WEBPACK_IMPORTED_MODULE_9__.taskArray.push(task5)

let task6 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_10__.Tasks('FJWEOPRJWEOP','description',new Date(),'low')
_taskArray__WEBPACK_IMPORTED_MODULE_9__.taskArray.push(task6);
console.log(_taskArray__WEBPACK_IMPORTED_MODULE_9__.taskArray);
//
let listTodayButton = document.getElementById('list_today')
listTodayButton.addEventListener('click',_getTodayTasks__WEBPACK_IMPORTED_MODULE_2__.getTodayTasks)

let listTomorrowButton = document.getElementById('list_tomorrow')
listTomorrowButton.addEventListener('click',_getTomorrowTasks__WEBPACK_IMPORTED_MODULE_3__.getTomorrowTasks)

let showFormButton = document.getElementById('show_form_button')
showFormButton.addEventListener('click', _showForm__WEBPACK_IMPORTED_MODULE_7__.showForm)

let closeFormButton = document.getElementById('close_modal_button');
closeFormButton.addEventListener('click',_closeForm__WEBPACK_IMPORTED_MODULE_0__.closeForm)




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdDO0FBQ3dCO0FBQ2hCO0FBQ007QUFDSztBQUNyQjtBQUMwQztBQUMxQztBQUNqQjtBQUNtQjtBQUNFO0FBQzFDO0FBQ0EsbURBQVEsQ0FBQyx3REFBUSxDQUFDLDBEQUFVO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0Isb0RBQUs7QUFDckIsc0RBQWM7QUFDZDtBQUNBLGdCQUFnQixvREFBSztBQUNyQjtBQUNBLHNEQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBUztBQUNyQjtBQUNBLGdCQUFnQixvREFBSztBQUNyQixzREFBYztBQUNkO0FBQ0EsZ0JBQWdCLG9EQUFLO0FBQ3JCLHNEQUFjO0FBQ2Q7QUFDQSxnQkFBZ0Isb0RBQUs7QUFDckIsc0RBQWM7QUFDZDtBQUNBLGdCQUFnQixvREFBSztBQUNyQixzREFBYztBQUNkLFlBQVksaURBQVM7QUFDckI7QUFDQTtBQUNBLHlDQUF5Qyx5REFBYTtBQUN0RDtBQUNBO0FBQ0EsNENBQTRDLCtEQUFnQjtBQUM1RDtBQUNBO0FBQ0EseUNBQXlDLCtDQUFRO0FBQ2pEO0FBQ0E7QUFDQSx5Q0FBeUMsaURBQVM7QUFDbEQ7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Nsb3NlRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2ZpbmRUYXNrVGl0bGVUb1JlbW92ZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dldFRvZGF5VGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZXRUb21vcnJvd1Rhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0VXNlck5hbWVBdmF0YXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wYWdlTG9hZC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NlbGVjdFJlbW92ZVRhc2tCdG5zLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc2hvd0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrQXJyYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrQ29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLyogY29udGFpbmVyIGNvbG9ycyAqL1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiKDIyMSwgMjAyLCAyMTcpO1xcclxcbiAgICAtLXNlY29uZGFyeS1jb250YWluZXItY29sb3I6IHJnYigyMjksIDIzMywgMjM2KTtcXHJcXG4gICAgLS1hZGRpdGlvbmFsLWNvbnRhaW5lci1jb2xvcjogcmdiKDIzNCwgMjUzLCAyNDgpO1xcclxcbiAgICAtLXNpZGViYXItY29sb3I6IHJnYigxMjcsIDEwMSwgMTMyKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG59XFxyXFxuLyogSEVBREVSICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciAjbG9nb3tcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZDtcXHJcXG59XFxyXFxuaGVhZGVyICNzZWFyY2ggaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbmhlYWRlciAjdXNlcl9pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNJREVCQVIgKi9cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogQ09OVEVOVCAqL1xcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcilcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogZm9ybSAobW9kYWwpICovXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgdG9wOjUwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7XFxyXFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcclxcbiAgICB6LWluZGV4OjEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6NTAwcHg7XFxyXFxuICAgIG1heC13aWR0aDo4MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4jbW9kYWwuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXHJcXG59XFxyXFxuI21vZGFsX2hlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuI21vZGFsICNtb2RhbF90aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsICNjbG9zZV9tb2RhbF9idXR0b24ge1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOjEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxufVxcclxcbiNtb2RhbCAjbW9kYWxfYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6MTBweCAxMHB4O1xcclxcbn1cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwOyBcXHJcXG4gICAgdG9wOjA7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgYm90dG9tOjA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOjIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4jb3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czphbGw7XFxyXFxuICAgIG9wYWNpdHk6MTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1jb250YWluZXItY29sb3IpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtDQUFrQztJQUNsQywrQ0FBK0M7SUFDL0MsZ0RBQWdEO0lBQ2hELG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxRQUFRO0lBQ1Isa0RBQWtEO0lBQ2xELGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7QUFDQSxXQUFXO0FBQ1g7SUFDSSxnQkFBZ0I7SUFDaEIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtREFBbUQ7SUFDbkQsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOzs7QUFHQSxZQUFZO0FBQ1o7SUFDSSxnQkFBZ0I7SUFDaEIsbURBQW1EO0lBQ25ELGFBQWE7SUFDYixRQUFRO0lBQ1IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7Ozs7O0FBS0EsWUFBWTtBQUNaO0lBQ0ksZ0JBQWdCO0lBQ2hCO0FBQ0o7OztBQUdBLGlCQUFpQjtBQUNqQjtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsT0FBTztJQUNQLFFBQVE7SUFDUix3Q0FBd0M7SUFDeEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksd0NBQXdDO0FBQzVDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixLQUFLO0lBQ0wsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7Ozs7Ozs7Ozs7OztBQVlBO0lBQ0ksbURBQW1EO0FBQ3ZEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLyogY29udGFpbmVyIGNvbG9ycyAqL1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiKDIyMSwgMjAyLCAyMTcpO1xcclxcbiAgICAtLXNlY29uZGFyeS1jb250YWluZXItY29sb3I6IHJnYigyMjksIDIzMywgMjM2KTtcXHJcXG4gICAgLS1hZGRpdGlvbmFsLWNvbnRhaW5lci1jb2xvcjogcmdiKDIzNCwgMjUzLCAyNDgpO1xcclxcbiAgICAtLXNpZGViYXItY29sb3I6IHJnYigxMjcsIDEwMSwgMTMyKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG59XFxyXFxuLyogSEVBREVSICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciAjbG9nb3tcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZDtcXHJcXG59XFxyXFxuaGVhZGVyICNzZWFyY2ggaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbmhlYWRlciAjdXNlcl9pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNJREVCQVIgKi9cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogQ09OVEVOVCAqL1xcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcilcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogZm9ybSAobW9kYWwpICovXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgdG9wOjUwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7XFxyXFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcclxcbiAgICB6LWluZGV4OjEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6NTAwcHg7XFxyXFxuICAgIG1heC13aWR0aDo4MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4jbW9kYWwuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXHJcXG59XFxyXFxuI21vZGFsX2hlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuI21vZGFsICNtb2RhbF90aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsICNjbG9zZV9tb2RhbF9idXR0b24ge1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOjEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxufVxcclxcbiNtb2RhbCAjbW9kYWxfYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6MTBweCAxMHB4O1xcclxcbn1cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOmZpeGVkO1xcclxcbiAgICBvcGFjaXR5OiAwOyBcXHJcXG4gICAgdG9wOjA7XFxyXFxuICAgIGxlZnQ6MDtcXHJcXG4gICAgcmlnaHQ6MDtcXHJcXG4gICAgYm90dG9tOjA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjUpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czpub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOjIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4jb3ZlcmxheS5hY3RpdmUge1xcclxcbiAgICBwb2ludGVyLWV2ZW50czphbGw7XFxyXFxuICAgIG9wYWNpdHk6MTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1jb250YWluZXItY29sb3IpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjbG9zZUZvcm0oKSB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxyXG59XHJcbmV4cG9ydCB7Y2xvc2VGb3JtfSIsImltcG9ydCB7IHJlbW92ZVRhc2tCdXR0b24gfSBmcm9tIFwiLi9zZWxlY3RSZW1vdmVUYXNrQnRuc1wiO1xyXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIjtcclxubGV0IHRpdGxlID0gJyc7XHJcbmZ1bmN0aW9uIGZpbmRUYXNrVGl0bGVUb1JlbW92ZSgpIHtcclxuICAgIHJlbW92ZVRhc2tCdXR0b24uZm9yRWFjaChidXR0b24gPT4ge1xyXG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHRpdGxlID0gYnV0dG9uLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aXRsZSk7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZXMgdGFzayBmcm9tIHRhc2tBcnJheVxyXG4gICAgICAgICAgICByZW1vdmVUYXNrQnlUaXRsZSh0aXRsZSlcclxuICAgICAgICAgICAgLy8gcmVtb3ZlcyB0aGUgcGFyZW50IERPTSBlbGVtZW50IGFzc29jaWF0ZWQgd2l0aCBjdXJyZW50ICdyZW1vdmUgdGFzaycgYnV0dG9uXHJcbiAgICAgICAgICAgIGJ1dHRvbi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIHJlbW92ZVRhc2tCeVRpdGxlICh0aXRsZSkge1xyXG4gICAgbGV0IGN1cnJlbnRUYXNrSW5kZXggPSB0YXNrQXJyYXkuZmluZEluZGV4KChpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGkudGl0bGUgPT09IHRpdGxlO1xyXG4gICAgfSlcclxuICAgIHRhc2tBcnJheS5zcGxpY2UoY3VycmVudFRhc2tJbmRleCwxKTtcclxuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQge3RpdGxlLCBmaW5kVGFza1RpdGxlVG9SZW1vdmV9IiwiaW1wb3J0IHsgcmVtb3ZlVGFza0J1dHRvbiwgc2VsZWN0UmVtb3ZlVGFza0J0bnMgfSBmcm9tIFwiLi9zZWxlY3RSZW1vdmVUYXNrQnRuc1wiO1xyXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIlxyXG5cclxuZnVuY3Rpb24gZ2V0VG9kYXlUYXNrcygpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIC8vIEZpcnN0LCBpZiBjb250ZW50IGlzIG5vdCBlbXB0eSwgcmVtb3ZlIGV2ZXJ5dGhpbmcgaW5zaWRlIHRhc2sgY29udGFpbmVyIChzbyB0aGF0IHRoZXJlIGlzIG5vIGluZmluaXRlIGR1cGxpY2F0aW9uIG9mICd0b2RheScgdGFza3MpXHJcbiAgICBsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza19jb250YWluZXInKTtcclxuICAgIGFsbFRhc2tzLmZvckVhY2goKGVsZW0pID0+IGVsZW0ucmVtb3ZlKCkpO1xyXG4gICAgLy8gQ2hlY2sgZm9yIG9iamVjdHMgaW5zaWRlIHRoZSAndGFza0FycmF5JyBhcnJheSB0aGF0IGhhdmUgJ2R1ZURhdGUnIHRvZGF5XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdG9kYXkuZ2V0RnVsbFllYXIoKSA9PT0gdGFza0FycmF5W2ldLmR1ZURhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICB0b2RheS5nZXRNb250aCgpID09PSB0YXNrQXJyYXlbaV0uZHVlRGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgIHRvZGF5LmdldERhdGUoKSA9PT0gdGFza0FycmF5W2ldLmR1ZURhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhc2tBcnJheVtpXS5hcHBlbmRUYXNrKGNvbnRlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU2VsZWN0cyBhbGwgcmVtb3ZlIHRhc2sgYnV0dG9ucyBpbnNpZGUgdGhlICdjb250ZW50JyBzZWN0aW9uIGFmdGVyIHVzZXIgY2hvb3NlcyB0aGlzIGxpc3RcclxuICAgIHNlbGVjdFJlbW92ZVRhc2tCdG5zKClcclxufVxyXG5cclxuZXhwb3J0IHtnZXRUb2RheVRhc2tzLCByZW1vdmVUYXNrQnV0dG9ufSIsImltcG9ydCB7IHJlbW92ZVRhc2tCdXR0b24sIHNlbGVjdFJlbW92ZVRhc2tCdG5zIH0gZnJvbSBcIi4vc2VsZWN0UmVtb3ZlVGFza0J0bnNcIjtcclxuaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSBcIi4vdGFza0FycmF5XCJcclxuXHJcbmZ1bmN0aW9uIGdldFRvbW9ycm93VGFza3MoKSB7XHJcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICAgIC8vIEZpcnN0LCBpZiBjb250ZW50IGlzIG5vdCBlbXB0eSwgcmVtb3ZlIGV2ZXJ5dGhpbmcgaW5zaWRlIHRhc2sgY29udGFpbmVyIChzbyB0aGF0IHRoZXJlIGlzIG5vIGluZmluaXRlIGR1cGxpY2F0aW9uIG9mICd0b2RheScgdGFza3MpXHJcbiAgICBsZXQgYWxsVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza19jb250YWluZXInKTtcclxuICAgIGFsbFRhc2tzLmZvckVhY2goKGVsZW0pID0+IGVsZW0ucmVtb3ZlKCkpO1xyXG4gICAgLy8gQ2hlY2sgZm9yIG9iamVjdHMgaW5zaWRlIHRoZSAndGFza0FycmF5JyBhcnJheSB0aGF0IGhhdmUgJ2R1ZURhdGUnIHRvbW9ycm93XHJcbiAgICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbGV0IHRvbW9ycm93ID0gIG5ldyBEYXRlKClcclxuICAgIHRvbW9ycm93LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgMSlcclxuICAgIGZvciAobGV0IGkgPSAwIDsgaTx0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgIHRvbW9ycm93LmdldEZ1bGxZZWFyKCkgPT09IHRhc2tBcnJheVtpXS5kdWVEYXRlLmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgdG9tb3Jyb3cuZ2V0TW9udGgoKSA9PT0gdGFza0FycmF5W2ldLmR1ZURhdGUuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICB0b21vcnJvdy5nZXREYXRlKCkgPT09IHRhc2tBcnJheVtpXS5kdWVEYXRlLmdldERhdGUoKVxyXG4gICAgICAgICkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0YXNrQXJyYXlbaV0uYXBwZW5kVGFzayhjb250ZW50KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFNlbGVjdHMgYWxsIHJlbW92ZSB0YXNrIGJ1dHRvbnMgaW5zaWRlIHRoZSAnY29udGVudCcgc2VjdGlvbiBhZnRlciB1c2VyIGNob29zZXMgdGhpcyBsaXN0XHJcbiAgICBzZWxlY3RSZW1vdmVUYXNrQnRucygpXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0VG9tb3Jyb3dUYXNrcywgcmVtb3ZlVGFza0J1dHRvbn0iLCJpbXBvcnQgQXZhdGFyIGZyb20gJy4vYXZhMS5qcGcnO1xyXG5jb25zdCB1c2VyQXZhdGFyID0gbmV3IEltYWdlKCk7XHJcbnVzZXJBdmF0YXIuc3JjID0gQXZhdGFyO1xyXG5jb25zdCB1c2VyTmFtZSA9ICdAdXNlck5hbWUnXHJcblxyXG5leHBvcnQge3VzZXJOYW1lLHVzZXJBdmF0YXJ9IiwiaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSBcIi4vdGFza0FycmF5XCJcclxuaW1wb3J0IHsgVGFza3MgfSBmcm9tIFwiLi90YXNrQ29uc3RydWN0b3JcIlxyXG5cclxuXHJcbmZ1bmN0aW9uIHBhZ2VMb2FkKG5hbWUsYXZhdGFyKSB7XHJcbiAgICAvLyBoZWFkZXIgdXNlcm5hbWUgYW5kIGF2YXRhclxyXG4gICAgbGV0IHVzZXJOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJfbmFtZScpXHJcbiAgICB1c2VyTmFtZS5pbm5lclRleHQgPSBuYW1lXHJcblxyXG4gICAgbGV0IHVzZXJBdmF0YXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlcl9hdmF0YXInKVxyXG4gICAgdXNlckF2YXRhci5hcHBlbmRDaGlsZChhdmF0YXIpXHJcbiAgICAvLyBzaWRlYmFyXHJcbiAgICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJylcclxuICAgIGxldCBsaXN0VG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGxpc3RUb2RheS5pbm5lclRleHQgPSAnVG9kYXknXHJcbiAgICBsaXN0VG9kYXkuc2V0QXR0cmlidXRlKCdpZCcsJ2xpc3RfdG9kYXknKVxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0VG9kYXkpXHJcblxyXG4gICAgbGV0IGxpc3RUb21vcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGlzdFRvbW9ycm93LmlubmVyVGV4dCA9ICdUb21vcnJvdydcclxuICAgIGxpc3RUb21vcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywnbGlzdF90b21vcnJvdycpXHJcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RUb21vcnJvdylcclxuXHJcbiAgICAvL3Rlc3QgdGFzayBvbiBwYWdlbG9hZFxyXG4gICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgICBcclxuICAgIC8vbGV0IHRhc2sxID0gbmV3IFRhc2tzKCd0ZXN0MScsJ2Rlc2NyaXAnLG5ldyBEYXRlKCksJ2hpZ2gnKVxyXG5cclxuICAgIC8vIGxldCB0YXNrMiA9IG5ldyBUYXNrcygndGVzdDInLCdkZXNjcmlwdGlvbicsbmV3IERhdGUoKSwnaGlnaCcpXHJcbiAgICAvLyB0YXNrMi5kdWVEYXRlLnNldERhdGUoMjcpO1xyXG4gICAgLy8gdGFzazIuYXBwZW5kVGFzayh0YXNrQ29udGFpbmVyKVxyXG4gICAgLy8gdGFza0FycmF5LnB1c2godGFzazIpXHJcblxyXG4gICAgLy8gYnV0dG9uIHRvIGFkZCBuZXcgdGFza1xyXG4gICAgbGV0IHNob3dGb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBzaG93Rm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnc2hvd19mb3JtX2J1dHRvbicpXHJcbiAgICBzaG93Rm9ybUJ1dHRvbi5pbm5lclRleHQgPSAnQWRkIHRhc2snXHJcbiAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHNob3dGb3JtQnV0dG9uKVxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtwYWdlTG9hZCwgdGFza0FycmF5fSIsImltcG9ydCB7IGZpbmRUYXNrVGl0bGVUb1JlbW92ZSB9IGZyb20gXCIuL2ZpbmRUYXNrVGl0bGVUb1JlbW92ZVwiXHJcblxyXG5sZXQgcmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVfdGFza19idXR0b24nKVxyXG5cclxuLy8gU2VsZWN0cyBhbGwgJ1JlbW92ZSB0YXNrJyBidXR0b25zIGluc2lkZSB0aGUgJ2NvbnRlbnQnIHNlY3Rpb24gYWZ0ZXIgdXNlciBjaG9vc2VzICd0b2RheScgb3IgJ3RvbW9ycm93JyBsaXN0c1xyXG4vLyBhbmQgc3RhcnRzIHRoZSBmaW5kVGFza1RpdGxlVG9SZW1vdmUgZnVuY3Rpb25cclxuZnVuY3Rpb24gc2VsZWN0UmVtb3ZlVGFza0J0bnMoKSB7XHJcbiAgICByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZV90YXNrX2J1dHRvbicpXHJcbiAgICBjb25zb2xlLmxvZyhyZW1vdmVUYXNrQnV0dG9uKVxyXG4gICAgZmluZFRhc2tUaXRsZVRvUmVtb3ZlKClcclxufVxyXG5leHBvcnQge3JlbW92ZVRhc2tCdXR0b24sIHNlbGVjdFJlbW92ZVRhc2tCdG5zfSIsImZ1bmN0aW9uIHNob3dGb3JtKCkge1xyXG4gICAgbGV0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcclxuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICAgIGxldCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ292ZXJsYXknKVxyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG59XHJcblxyXG5leHBvcnQge3Nob3dGb3JtfSIsImxldCB0YXNrQXJyYXkgPSBbXVxyXG4vLyBvYmplY3RzIGluIHRoaXMgYXJyYXkgaGF2ZSB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XHJcbi8vIHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHlcclxuXHJcbi8vIGFuZCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XHJcbi8vIHNldFRpdGxlIChuZXdUaXRsZSlcclxuLy8gc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pXHJcbi8vIHNldER1ZURhdGUobmV3RHVlRGF0ZSlcclxuLy8gc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpXHJcblxyXG4vLyBhcHBlbmRUYXNrKGNvbnRhaW5lcikgLy9cclxuZXhwb3J0IHt0YXNrQXJyYXl9IiwiaW1wb3J0IHsgdGFza0FycmF5IH0gZnJvbSBcIi4vdGFza0FycmF5XCI7XHJcblxyXG5jbGFzcyBUYXNrcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxuICAgIHNldFRpdGxlIChuZXdUaXRsZSkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSBuZXdUaXRsZVxyXG4gICAgfVxyXG4gICAgc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gbmV3RGVzY3JpcHRpb25cclxuICAgIH1cclxuICAgIHNldER1ZURhdGUobmV3RHVlRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IG5ld0R1ZURhdGVcclxuICAgIH1cclxuICAgIHNldFByaW9yaXR5KG5ld1ByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IG5ld1ByaW9yaXR5XHJcbiAgICB9XHJcbiAgICBhcHBlbmRUYXNrKGNvbnRhaW5lcikge1xyXG4gICAgICAgIGxldCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0YXNrQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0YXNrX2NvbnRhaW5lcicpXHJcblxyXG4gICAgICAgIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICAgICAgdGFza1RpdGxlLmlubmVyVGV4dCA9IHRoaXMudGl0bGVcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSlcclxuXHJcbiAgICAgICAgbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHRoaXMuZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pXHJcblxyXG4gICAgICAgIGxldCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRhc2tEdWVEYXRlLmlubmVyVGV4dCA9IHRoaXMuZHVlRGF0ZTtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEdWVEYXRlKVxyXG5cclxuICAgICAgICBsZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIHRhc2tQcmlvcml0eS5pbm5lclRleHQgPSB0aGlzLnByaW9yaXR5O1xyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5pbm5lclRleHQgPSAnUmVtb3ZlIHRhc2snXHJcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywncmVtb3ZlX3Rhc2tfYnV0dG9uJylcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlbW92ZVRhc2tCdXR0b24pXHJcblxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICAgICAgICAvL3Rhc2tBcnJheS5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlVGFzayh0aXRsZSkge1xyXG4gICAgICAgIC8vIGZpbmQgdGl0bGUgb2YgdGhlIHRhc2sgaW4gdGhlIGNvbnRhaW5lcidzIGZpcnN0IGNoaWxkICh0YXNrIHRpdGxlID09IGgzIERPTSBlbGVtZW50J3MgaW5uZXJUZXh0KSAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwIDsgaTx0YXNrQXJyYXkubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICBpZiAodGFza0FycmF5W2ldLnRpdGxlID09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tBcnJheVtpXSwxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtUYXNrc30iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSAnLi9jbG9zZUZvcm0nO1xyXG5pbXBvcnQgeyBmaW5kVGFza1RpdGxlVG9SZW1vdmUgfSBmcm9tICcuL2ZpbmRUYXNrVGl0bGVUb1JlbW92ZSc7XHJcbmltcG9ydCB7IGdldFRvZGF5VGFza3MgfSBmcm9tICcuL2dldFRvZGF5VGFza3MnO1xyXG5pbXBvcnQgeyBnZXRUb21vcnJvd1Rhc2tzIH0gZnJvbSAnLi9nZXRUb21vcnJvd1Rhc2tzJztcclxuaW1wb3J0IHsgdXNlck5hbWUsIHVzZXJBdmF0YXIgfSBmcm9tICcuL2dldFVzZXJOYW1lQXZhdGFyJztcclxuaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tICcuL3BhZ2VMb2FkJztcclxuaW1wb3J0IHsgcmVtb3ZlVGFza0J1dHRvbiwgc2VsZWN0UmVtb3ZlVGFza0J0bnMgfSBmcm9tICcuL3NlbGVjdFJlbW92ZVRhc2tCdG5zJztcclxuaW1wb3J0IHsgc2hvd0Zvcm0gfSBmcm9tICcuL3Nob3dGb3JtJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gJy4vdGFza0FycmF5JztcclxuaW1wb3J0IHsgVGFza3MgfSBmcm9tICcuL3Rhc2tDb25zdHJ1Y3Rvcic7XHJcblxyXG5wYWdlTG9hZCh1c2VyTmFtZSx1c2VyQXZhdGFyKVxyXG4vLyBkZWJ1Z1xyXG5sZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxubGV0IHRhc2sxID0gbmV3IFRhc2tzKCd0ZXN0MScsJ2Rlc2NyaXAnLG5ldyBEYXRlKCksJ2hpZ2gnKVxyXG50YXNrQXJyYXkucHVzaCh0YXNrMSlcclxuXHJcbmxldCB0YXNrMiA9IG5ldyBUYXNrcygndGVzdDInLCdkZXNjcmlwdGlvbicsbmV3IERhdGUoKSwnaGlnaCcpXHJcbnRhc2syLmR1ZURhdGUuc2V0RGF0ZSgyNyk7XHJcbnRhc2tBcnJheS5wdXNoKHRhc2syKTtcclxuXHJcblxyXG50YXNrMS5yZW1vdmVUYXNrKCk7XHJcbmNvbnNvbGUubG9nKHRhc2tBcnJheSlcclxuXHJcbmxldCB0YXNrMyA9IG5ldyBUYXNrcygndGVzd3FvZWp3cScsJ2Rlc2NyaXB0aW9uJyxuZXcgRGF0ZSgpLCdoaWdoJylcclxudGFza0FycmF5LnB1c2godGFzazMpO1xyXG5cclxubGV0IHRhc2s0ID0gbmV3IFRhc2tzKCd0ZXN0c2RmanNka2ZsJywnZGVzY3JpcHRpb24nLG5ldyBEYXRlKCksJ2hpZ2gnKVxyXG50YXNrQXJyYXkucHVzaCh0YXNrNCk7XHJcblxyXG5sZXQgdGFzazUgPSBuZXcgVGFza3MoJ2V3Zmtqd2VsZmp3ZScsJ2Rlc2NyaXB0aW9uJyxuZXcgRGF0ZSgpLCdtZWRpdW0nKVxyXG50YXNrQXJyYXkucHVzaCh0YXNrNSlcclxuXHJcbmxldCB0YXNrNiA9IG5ldyBUYXNrcygnRkpXRU9QUkpXRU9QJywnZGVzY3JpcHRpb24nLG5ldyBEYXRlKCksJ2xvdycpXHJcbnRhc2tBcnJheS5wdXNoKHRhc2s2KTtcclxuY29uc29sZS5sb2codGFza0FycmF5KTtcclxuLy9cclxubGV0IGxpc3RUb2RheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0X3RvZGF5JylcclxubGlzdFRvZGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxnZXRUb2RheVRhc2tzKVxyXG5cclxubGV0IGxpc3RUb21vcnJvd0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0X3RvbW9ycm93JylcclxubGlzdFRvbW9ycm93QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxnZXRUb21vcnJvd1Rhc2tzKVxyXG5cclxubGV0IHNob3dGb3JtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3dfZm9ybV9idXR0b24nKVxyXG5zaG93Rm9ybUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dGb3JtKVxyXG5cclxubGV0IGNsb3NlRm9ybUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZV9tb2RhbF9idXR0b24nKTtcclxuY2xvc2VGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjbG9zZUZvcm0pXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==