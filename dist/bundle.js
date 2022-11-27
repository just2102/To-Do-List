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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    /* container colors */\r\n    --header-color: rgb(221, 202, 217);\r\n    --secondary-container-color: rgb(229, 233, 236);\r\n    --additional-container-color: rgb(234, 253, 248);\r\n    --sidebar-color: rgb(127, 101, 132);\r\n    \r\n}\r\n\r\nbody {\r\n    margin:0;\r\n    background-color: var(--secondary-container-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n/* HEADER */\r\nheader {\r\n    grid-column: 1/3;\r\n    background-color: var(--header-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    justify-items:center;\r\n    align-items: center;\r\n}\r\nheader #logo{\r\n    border:2px solid;\r\n}\r\nheader #search input{\r\n    background-color: var(--additional-container-color);\r\n    border: none;\r\n    border-radius: 4px;\r\n}\r\nheader #user_info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nheader img {\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n/* SIDEBAR */\r\n#sidebar {\r\n    grid-column: 1/2;\r\n    background-color: var(--additional-container-color);\r\n    display: grid;\r\n    gap:20px;\r\n    justify-items: center;\r\n}\r\n\r\n#sidebar h2 {\r\n    text-align: center;\r\n}\r\n\r\n#sidebar button {\r\n    font-size: large;\r\n    cursor: pointer;\r\n}\r\n.list_button {\r\n\r\n}\r\n.list_button.active {\r\n    box-shadow: 5px 5px;\r\n}\r\n\r\n\r\n\r\n\r\n/* CONTENT */\r\n#content {\r\n    grid-column: 2/4;\r\n    background-color: var(--secondary-container-color)\r\n}\r\n\r\n\r\n/* form (modal) */\r\n#modal {\r\n    display:grid;\r\n    position:fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%) scale(0);\r\n    border:1px solid black;\r\n    padding:10px;\r\n    border-radius:10px;\r\n    z-index:10;\r\n    background-color: white;\r\n    width:500px;\r\n    max-width:80%;\r\n    transition: 200ms ease-in-out;\r\n}\r\n#modal.active {\r\n    transform: translate(-50%,-50%) scale(1);\r\n}\r\n#modal_header {\r\n    padding: 5px 5px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom:1px solid black;\r\n}\r\n#modal #modal_title {\r\n    font-size:large;\r\n}\r\n\r\n#modal #close_modal_button {\r\n    cursor:pointer;\r\n    border:none;\r\n    outline:none;\r\n    background: none;\r\n    font-size:1.25rem;\r\n    font-weight:bold;\r\n}\r\n#modal #modal_body {\r\n    padding:10px 10px;\r\n}\r\n\r\n#modal fieldset {\r\n    padding:3px;\r\n}\r\n\r\n#overlay {\r\n    position:fixed;\r\n    opacity: 0; \r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    background: rgba(0,0,0,.5);\r\n    pointer-events:none;\r\n    transition:200ms ease-in-out;\r\n}\r\n#overlay.active {\r\n    pointer-events:all;\r\n    opacity:1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfooter {\r\n    background-color: var(--additional-container-color);\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,kCAAkC;IAClC,+CAA+C;IAC/C,gDAAgD;IAChD,mCAAmC;;AAEvC;;AAEA;IACI,QAAQ;IACR,kDAAkD;IAClD,aAAa;IACb,8BAA8B;AAClC;AACA,WAAW;AACX;IACI,gBAAgB;IAChB,qCAAqC;IACrC,aAAa;IACb,kCAAkC;IAClC,oBAAoB;IACpB,mBAAmB;AACvB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,mDAAmD;IACnD,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,WAAW;IACX,WAAW;IACX,mBAAmB;AACvB;;;AAGA,YAAY;AACZ;IACI,gBAAgB;IAChB,mDAAmD;IACnD,aAAa;IACb,QAAQ;IACR,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;AACnB;AACA;;AAEA;AACA;IACI,mBAAmB;AACvB;;;;;AAKA,YAAY;AACZ;IACI,gBAAgB;IAChB;AACJ;;;AAGA,iBAAiB;AACjB;IACI,YAAY;IACZ,cAAc;IACd,OAAO;IACP,QAAQ;IACR,wCAAwC;IACxC,sBAAsB;IACtB,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,uBAAuB;IACvB,WAAW;IACX,aAAa;IACb,6BAA6B;AACjC;AACA;IACI,wCAAwC;AAC5C;AACA;IACI,gBAAgB;IAChB,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;IACnB,6BAA6B;AACjC;AACA;IACI,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;AACpB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,cAAc;IACd,UAAU;IACV,KAAK;IACL,MAAM;IACN,OAAO;IACP,QAAQ;IACR,0BAA0B;IAC1B,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,kBAAkB;IAClB,SAAS;AACb;;;;;;;;;;;;AAYA;IACI,mDAAmD;AACvD","sourcesContent":[":root {\r\n    /* container colors */\r\n    --header-color: rgb(221, 202, 217);\r\n    --secondary-container-color: rgb(229, 233, 236);\r\n    --additional-container-color: rgb(234, 253, 248);\r\n    --sidebar-color: rgb(127, 101, 132);\r\n    \r\n}\r\n\r\nbody {\r\n    margin:0;\r\n    background-color: var(--secondary-container-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 3fr;\r\n}\r\n/* HEADER */\r\nheader {\r\n    grid-column: 1/3;\r\n    background-color: var(--header-color);\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr 1fr;\r\n    justify-items:center;\r\n    align-items: center;\r\n}\r\nheader #logo{\r\n    border:2px solid;\r\n}\r\nheader #search input{\r\n    background-color: var(--additional-container-color);\r\n    border: none;\r\n    border-radius: 4px;\r\n}\r\nheader #user_info {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nheader img {\r\n    height:80px;\r\n    width: 80px;\r\n    border-radius: 10px;\r\n}\r\n\r\n\r\n/* SIDEBAR */\r\n#sidebar {\r\n    grid-column: 1/2;\r\n    background-color: var(--additional-container-color);\r\n    display: grid;\r\n    gap:20px;\r\n    justify-items: center;\r\n}\r\n\r\n#sidebar h2 {\r\n    text-align: center;\r\n}\r\n\r\n#sidebar button {\r\n    font-size: large;\r\n    cursor: pointer;\r\n}\r\n.list_button {\r\n\r\n}\r\n.list_button.active {\r\n    box-shadow: 5px 5px;\r\n}\r\n\r\n\r\n\r\n\r\n/* CONTENT */\r\n#content {\r\n    grid-column: 2/4;\r\n    background-color: var(--secondary-container-color)\r\n}\r\n\r\n\r\n/* form (modal) */\r\n#modal {\r\n    display:grid;\r\n    position:fixed;\r\n    top:50%;\r\n    left:50%;\r\n    transform: translate(-50%,-50%) scale(0);\r\n    border:1px solid black;\r\n    padding:10px;\r\n    border-radius:10px;\r\n    z-index:10;\r\n    background-color: white;\r\n    width:500px;\r\n    max-width:80%;\r\n    transition: 200ms ease-in-out;\r\n}\r\n#modal.active {\r\n    transform: translate(-50%,-50%) scale(1);\r\n}\r\n#modal_header {\r\n    padding: 5px 5px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    border-bottom:1px solid black;\r\n}\r\n#modal #modal_title {\r\n    font-size:large;\r\n}\r\n\r\n#modal #close_modal_button {\r\n    cursor:pointer;\r\n    border:none;\r\n    outline:none;\r\n    background: none;\r\n    font-size:1.25rem;\r\n    font-weight:bold;\r\n}\r\n#modal #modal_body {\r\n    padding:10px 10px;\r\n}\r\n\r\n#modal fieldset {\r\n    padding:3px;\r\n}\r\n\r\n#overlay {\r\n    position:fixed;\r\n    opacity: 0; \r\n    top:0;\r\n    left:0;\r\n    right:0;\r\n    bottom:0;\r\n    background: rgba(0,0,0,.5);\r\n    pointer-events:none;\r\n    transition:200ms ease-in-out;\r\n}\r\n#overlay.active {\r\n    pointer-events:all;\r\n    opacity:1;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfooter {\r\n    background-color: var(--additional-container-color);\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");
/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskConstructor */ "./src/taskConstructor.js");





function addTask() {
    let inputTitle = document.getElementById('title').value;
    let inputDescription = document.getElementById('description').value;
    let inputDueDate = new Date(document.getElementById('dueDate').value);

    let inputButtonGroup = document.getElementsByName('priority');
    let inputPriority = '';
    for (let i = 0; i<inputButtonGroup.length; i++) {
        if (inputButtonGroup[i].checked) {
            inputPriority = inputButtonGroup[i].value;
        }
    }

    let newTask = new _taskConstructor__WEBPACK_IMPORTED_MODULE_1__.Tasks(inputTitle,inputDescription,inputDueDate,inputPriority);
    _taskArray__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(newTask)
    
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
/* harmony export */   "taskArray": () => (/* reexport safe */ _taskArray__WEBPACK_IMPORTED_MODULE_1__.taskArray)
/* harmony export */ });
/* harmony import */ var _setListActive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setListActive */ "./src/setListActive.js");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");
/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskConstructor */ "./src/taskConstructor.js");





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

   
    let taskContainer = document.getElementById('content')

    // button to add new task
    let showFormButton = document.createElement('button');
    showFormButton.setAttribute('id','show_form_button')
    showFormButton.innerText = 'Add task'
    taskContainer.appendChild(showFormButton)

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

/***/ "./src/setListActive.js":
/*!******************************!*\
  !*** ./src/setListActive.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setListActive": () => (/* binding */ setListActive)
/* harmony export */ });
function setListActive () {
    
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
/* harmony import */ var _addTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addTask */ "./src/addTask.js");
/* harmony import */ var _closeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closeForm */ "./src/closeForm.js");
/* harmony import */ var _getTodayTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getTodayTasks */ "./src/getTodayTasks.js");
/* harmony import */ var _getTomorrowTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTomorrowTasks */ "./src/getTomorrowTasks.js");
/* harmony import */ var _getUserNameAvatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getUserNameAvatar */ "./src/getUserNameAvatar.js");
/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pageLoad */ "./src/pageLoad.js");
/* harmony import */ var _showForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showForm */ "./src/showForm.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./taskArray */ "./src/taskArray.js");
/* harmony import */ var _taskConstructor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taskConstructor */ "./src/taskConstructor.js");











(0,_pageLoad__WEBPACK_IMPORTED_MODULE_5__.pageLoad)(_getUserNameAvatar__WEBPACK_IMPORTED_MODULE_4__.userName,_getUserNameAvatar__WEBPACK_IMPORTED_MODULE_4__.userAvatar)
// debug
let taskContainer = document.getElementById('content')
let task1 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_9__.Tasks('test1','descrip',new Date(),'high')
_taskArray__WEBPACK_IMPORTED_MODULE_8__.taskArray.push(task1)

let task2 = new _taskConstructor__WEBPACK_IMPORTED_MODULE_9__.Tasks('test2','description',new Date(),'high')
task2.dueDate.setDate(27);
_taskArray__WEBPACK_IMPORTED_MODULE_8__.taskArray.push(task2);


task1.removeTask();
console.log(_taskArray__WEBPACK_IMPORTED_MODULE_8__.taskArray)

//
let listTodayButton = document.getElementById('list_today')
listTodayButton.addEventListener('click',_getTodayTasks__WEBPACK_IMPORTED_MODULE_2__.getTodayTasks)

let listTomorrowButton = document.getElementById('list_tomorrow')
listTomorrowButton.addEventListener('click',_getTomorrowTasks__WEBPACK_IMPORTED_MODULE_3__.getTomorrowTasks)

let showFormButton = document.getElementById('show_form_button')
showFormButton.addEventListener('click', _showForm__WEBPACK_IMPORTED_MODULE_6__.showForm)

let closeFormButton = document.getElementById('close_modal_button');
closeFormButton.addEventListener('click',_closeForm__WEBPACK_IMPORTED_MODULE_1__.closeForm)

let addTaskButton = document.getElementById('add_task_button')
addTaskButton.addEventListener('click', _addTask__WEBPACK_IMPORTED_MODULE_0__.addTask)
addTaskButton.addEventListener('click',_closeForm__WEBPACK_IMPORTED_MODULE_1__.closeForm)


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQSxpREFBaUQseUVBQXlFLHdEQUF3RCx5REFBeUQsNENBQTRDLGFBQWEsY0FBYyxpQkFBaUIsMkRBQTJELHNCQUFzQix1Q0FBdUMsS0FBSyw0QkFBNEIseUJBQXlCLDhDQUE4QyxzQkFBc0IsMkNBQTJDLDZCQUE2Qiw0QkFBNEIsS0FBSyxpQkFBaUIseUJBQXlCLEtBQUsseUJBQXlCLDREQUE0RCxxQkFBcUIsMkJBQTJCLEtBQUssdUJBQXVCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLEtBQUssZ0JBQWdCLG9CQUFvQixvQkFBb0IsNEJBQTRCLEtBQUssdUNBQXVDLHlCQUF5Qiw0REFBNEQsc0JBQXNCLGlCQUFpQiw4QkFBOEIsS0FBSyxxQkFBcUIsMkJBQTJCLEtBQUsseUJBQXlCLHlCQUF5Qix3QkFBd0IsS0FBSyxrQkFBa0IsU0FBUyx5QkFBeUIsNEJBQTRCLEtBQUssK0NBQStDLHlCQUF5QiwrREFBK0QsMENBQTBDLHFCQUFxQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixpREFBaUQsK0JBQStCLHFCQUFxQiwyQkFBMkIsbUJBQW1CLGdDQUFnQyxvQkFBb0Isc0JBQXNCLHNDQUFzQyxLQUFLLG1CQUFtQixpREFBaUQsS0FBSyxtQkFBbUIseUJBQXlCLHFCQUFxQix1Q0FBdUMsNEJBQTRCLHNDQUFzQyxLQUFLLHlCQUF5Qix3QkFBd0IsS0FBSyxvQ0FBb0MsdUJBQXVCLG9CQUFvQixxQkFBcUIseUJBQXlCLDBCQUEwQix5QkFBeUIsS0FBSyx3QkFBd0IsMEJBQTBCLEtBQUsseUJBQXlCLG9CQUFvQixLQUFLLGtCQUFrQix1QkFBdUIsb0JBQW9CLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLG1DQUFtQyw0QkFBNEIscUNBQXFDLEtBQUsscUJBQXFCLDJCQUEyQixrQkFBa0IsS0FBSyx3REFBd0QsNERBQTRELEtBQUssT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxVQUFVLFVBQVUsS0FBSyxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxnQkFBZ0IsS0FBSyxZQUFZLGlDQUFpQyx5RUFBeUUsd0RBQXdELHlEQUF5RCw0Q0FBNEMsYUFBYSxjQUFjLGlCQUFpQiwyREFBMkQsc0JBQXNCLHVDQUF1QyxLQUFLLDRCQUE0Qix5QkFBeUIsOENBQThDLHNCQUFzQiwyQ0FBMkMsNkJBQTZCLDRCQUE0QixLQUFLLGlCQUFpQix5QkFBeUIsS0FBSyx5QkFBeUIsNERBQTRELHFCQUFxQiwyQkFBMkIsS0FBSyx1QkFBdUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIsS0FBSyxnQkFBZ0Isb0JBQW9CLG9CQUFvQiw0QkFBNEIsS0FBSyx1Q0FBdUMseUJBQXlCLDREQUE0RCxzQkFBc0IsaUJBQWlCLDhCQUE4QixLQUFLLHFCQUFxQiwyQkFBMkIsS0FBSyx5QkFBeUIseUJBQXlCLHdCQUF3QixLQUFLLGtCQUFrQixTQUFTLHlCQUF5Qiw0QkFBNEIsS0FBSywrQ0FBK0MseUJBQXlCLCtEQUErRCwwQ0FBMEMscUJBQXFCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGlEQUFpRCwrQkFBK0IscUJBQXFCLDJCQUEyQixtQkFBbUIsZ0NBQWdDLG9CQUFvQixzQkFBc0Isc0NBQXNDLEtBQUssbUJBQW1CLGlEQUFpRCxLQUFLLG1CQUFtQix5QkFBeUIscUJBQXFCLHVDQUF1Qyw0QkFBNEIsc0NBQXNDLEtBQUsseUJBQXlCLHdCQUF3QixLQUFLLG9DQUFvQyx1QkFBdUIsb0JBQW9CLHFCQUFxQix5QkFBeUIsMEJBQTBCLHlCQUF5QixLQUFLLHdCQUF3QiwwQkFBMEIsS0FBSyx5QkFBeUIsb0JBQW9CLEtBQUssa0JBQWtCLHVCQUF1QixvQkFBb0IsY0FBYyxlQUFlLGdCQUFnQixpQkFBaUIsbUNBQW1DLDRCQUE0QixxQ0FBcUMsS0FBSyxxQkFBcUIsMkJBQTJCLGtCQUFrQixLQUFLLHdEQUF3RCw0REFBNEQsS0FBSyxtQkFBbUI7QUFDbG1PO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3QztBQUNFO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1EQUFLO0FBQzNCLElBQUksc0RBQWM7QUFDbEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjBEO0FBQ2xCO0FBQ3hDO0FBQ0E7QUFDQSxJQUFJLDJFQUF3QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBLDJCQUEyQiwyREFBbUI7QUFDOUM7QUFDQSxLQUFLO0FBQ0wsSUFBSSx3REFBZ0I7QUFDcEIsZ0JBQWdCLGlEQUFTO0FBQ3pCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJnRjtBQUN6QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUUsd0RBQWdCLEVBQUU7QUFDekM7QUFDQSxvQ0FBb0MsaURBQVM7QUFDN0MsaUNBQWlDLGlEQUFTO0FBQzFDLGdDQUFnQyxpREFBUztBQUN6QztBQUNBO0FBQ0EsWUFBWSxpREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUFvQjtBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QmdGO0FBQ3pDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLEVBQUUsd0RBQWdCLEVBQUU7QUFDekM7QUFDQSx1Q0FBdUMsaURBQVM7QUFDaEQsb0NBQW9DLGlEQUFTO0FBQzdDLG1DQUFtQyxpREFBUztBQUM1QztBQUNBO0FBQ0EsWUFBWSxpREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUFvQjtBQUN4QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZ0M7QUFDaEM7QUFDQSxpQkFBaUIsc0NBQU07QUFDdkI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0orQztBQUNSO0FBQ0U7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkMrRDtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4RUFBcUI7QUFDekI7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1Z3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLEVBQUUsd0RBQWdCLENBQUM7QUFDNUMsZ0JBQWdCLGlEQUFTO0FBQ3pCLGdCQUFnQix3REFBZ0IsQ0FBQyxpREFBUztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW9DO0FBQ0k7QUFDUTtBQUNNO0FBQ0s7QUFDckI7QUFDQTtBQUNqQjtBQUNtQjtBQUNFO0FBQzFDO0FBQ0EsbURBQVEsQ0FBQyx3REFBUSxDQUFDLDBEQUFVO0FBQzVCO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQUs7QUFDckIsc0RBQWM7QUFDZDtBQUNBLGdCQUFnQixtREFBSztBQUNyQjtBQUNBLHNEQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseURBQWE7QUFDdEQ7QUFDQTtBQUNBLDRDQUE0QywrREFBZ0I7QUFDNUQ7QUFDQTtBQUNBLHlDQUF5QywrQ0FBUTtBQUNqRDtBQUNBO0FBQ0EseUNBQXlDLGlEQUFTO0FBQ2xEO0FBQ0E7QUFDQSx3Q0FBd0MsNkNBQU87QUFDL0MsdUNBQXVDLGlEQUFTO0FBQ2hEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZFRhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jbG9zZUZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9maW5kVGFza1RpdGxlVG9SZW1vdmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9nZXRUb2RheVRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2V0VG9tb3Jyb3dUYXNrcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2dldFVzZXJOYW1lQXZhdGFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcGFnZUxvYWQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zZWxlY3RSZW1vdmVUYXNrQnRucy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NldExpc3RBY3RpdmUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaG93Rm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tBcnJheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2tDb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgICAvKiBjb250YWluZXIgY29sb3JzICovXFxyXFxuICAgIC0taGVhZGVyLWNvbG9yOiByZ2IoMjIxLCAyMDIsIDIxNyk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcjogcmdiKDIyOSwgMjMzLCAyMzYpO1xcclxcbiAgICAtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yOiByZ2IoMjM0LCAyNTMsIDI0OCk7XFxyXFxuICAgIC0tc2lkZWJhci1jb2xvcjogcmdiKDEyNywgMTAxLCAxMzIpO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcclxcbn1cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMS8zO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyZnIgMWZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuaGVhZGVyICNsb2dve1xcclxcbiAgICBib3JkZXI6MnB4IHNvbGlkO1xcclxcbn1cXHJcXG5oZWFkZXIgI3NlYXJjaCBpbnB1dHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1jb250YWluZXItY29sb3IpO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuaGVhZGVyICN1c2VyX2luZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuaGVhZGVyIGltZyB7XFxyXFxuICAgIGhlaWdodDo4MHB4O1xcclxcbiAgICB3aWR0aDogODBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogU0lERUJBUiAqL1xcclxcbiNzaWRlYmFyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWRkaXRpb25hbC1jb250YWluZXItY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBnYXA6MjBweDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2lkZWJhciBoMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgYnV0dG9uIHtcXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4ubGlzdF9idXR0b24ge1xcclxcblxcclxcbn1cXHJcXG4ubGlzdF9idXR0b24uYWN0aXZlIHtcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogQ09OVEVOVCAqL1xcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIvNDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcilcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogZm9ybSAobW9kYWwpICovXFxyXFxuI21vZGFsIHtcXHJcXG4gICAgZGlzcGxheTpncmlkO1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgdG9wOjUwJTtcXHJcXG4gICAgbGVmdDo1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7XFxyXFxuICAgIGJvcmRlcjoxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6MTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xcclxcbiAgICB6LWluZGV4OjEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgd2lkdGg6NTAwcHg7XFxyXFxuICAgIG1heC13aWR0aDo4MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4jbW9kYWwuYWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKSBzY2FsZSgxKTtcXHJcXG59XFxyXFxuI21vZGFsX2hlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDVweCA1cHg7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjaztcXHJcXG59XFxyXFxuI21vZGFsICNtb2RhbF90aXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsICNjbG9zZV9tb2RhbF9idXR0b24ge1xcclxcbiAgICBjdXJzb3I6cG9pbnRlcjtcXHJcXG4gICAgYm9yZGVyOm5vbmU7XFxyXFxuICAgIG91dGxpbmU6bm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOjEuMjVyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XFxyXFxufVxcclxcbiNtb2RhbCAjbW9kYWxfYm9keSB7XFxyXFxuICAgIHBhZGRpbmc6MTBweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbW9kYWwgZmllbGRzZXQge1xcclxcbiAgICBwYWRkaW5nOjNweDtcXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjpmaXhlZDtcXHJcXG4gICAgb3BhY2l0eTogMDsgXFxyXFxuICAgIHRvcDowO1xcclxcbiAgICBsZWZ0OjA7XFxyXFxuICAgIHJpZ2h0OjA7XFxyXFxuICAgIGJvdHRvbTowO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLC41KTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6bm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjoyMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuI292ZXJsYXkuYWN0aXZlIHtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6YWxsO1xcclxcbiAgICBvcGFjaXR5OjE7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQ0FBa0M7SUFDbEMsK0NBQStDO0lBQy9DLGdEQUFnRDtJQUNoRCxtQ0FBbUM7O0FBRXZDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGtEQUFrRDtJQUNsRCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDO0FBQ0EsV0FBVztBQUNYO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFDQUFxQztJQUNyQyxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbURBQW1EO0lBQ25ELFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7O0FBR0EsWUFBWTtBQUNaO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1EQUFtRDtJQUNuRCxhQUFhO0lBQ2IsUUFBUTtJQUNSLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7Ozs7QUFLQSxZQUFZO0FBQ1o7SUFDSSxnQkFBZ0I7SUFDaEI7QUFDSjs7O0FBR0EsaUJBQWlCO0FBQ2pCO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxPQUFPO0lBQ1AsUUFBUTtJQUNSLHdDQUF3QztJQUN4QyxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSx3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7SUFDVixLQUFLO0lBQ0wsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7Ozs7Ozs7Ozs7OztBQVlBO0lBQ0ksbURBQW1EO0FBQ3ZEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLyogY29udGFpbmVyIGNvbG9ycyAqL1xcclxcbiAgICAtLWhlYWRlci1jb2xvcjogcmdiKDIyMSwgMjAyLCAyMTcpO1xcclxcbiAgICAtLXNlY29uZGFyeS1jb250YWluZXItY29sb3I6IHJnYigyMjksIDIzMywgMjM2KTtcXHJcXG4gICAgLS1hZGRpdGlvbmFsLWNvbnRhaW5lci1jb2xvcjogcmdiKDIzNCwgMjUzLCAyNDgpO1xcclxcbiAgICAtLXNpZGViYXItY29sb3I6IHJnYigxMjcsIDEwMSwgMTMyKTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbnRhaW5lci1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXHJcXG59XFxyXFxuLyogSEVBREVSICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEvMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczpjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciAjbG9nb3tcXHJcXG4gICAgYm9yZGVyOjJweCBzb2xpZDtcXHJcXG59XFxyXFxuaGVhZGVyICNzZWFyY2ggaW5wdXR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbmhlYWRlciAjdXNlcl9pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgICBoZWlnaHQ6ODBweDtcXHJcXG4gICAgd2lkdGg6IDgwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFNJREVCQVIgKi9cXHJcXG4jc2lkZWJhciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFkZGl0aW9uYWwtY29udGFpbmVyLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ2FwOjIwcHg7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIGJ1dHRvbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmxpc3RfYnV0dG9uIHtcXHJcXG5cXHJcXG59XFxyXFxuLmxpc3RfYnV0dG9uLmFjdGl2ZSB7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIENPTlRFTlQgKi9cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb250YWluZXItY29sb3IpXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIGZvcm0gKG1vZGFsKSAqL1xcclxcbiNtb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6Z3JpZDtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIHRvcDo1MCU7XFxyXFxuICAgIGxlZnQ6NTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpIHNjYWxlKDApO1xcclxcbiAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOjEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6MTBweDtcXHJcXG4gICAgei1pbmRleDoxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIHdpZHRoOjUwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6ODAlO1xcclxcbiAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuI21vZGFsLmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7XFxyXFxufVxcclxcbiNtb2RhbF9oZWFkZXIge1xcclxcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcbiNtb2RhbCAjbW9kYWxfdGl0bGUge1xcclxcbiAgICBmb250LXNpemU6bGFyZ2U7XFxyXFxufVxcclxcblxcclxcbiNtb2RhbCAjY2xvc2VfbW9kYWxfYnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOnBvaW50ZXI7XFxyXFxuICAgIGJvcmRlcjpub25lO1xcclxcbiAgICBvdXRsaW5lOm5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZToxLjI1cmVtO1xcclxcbiAgICBmb250LXdlaWdodDpib2xkO1xcclxcbn1cXHJcXG4jbW9kYWwgI21vZGFsX2JvZHkge1xcclxcbiAgICBwYWRkaW5nOjEwcHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI21vZGFsIGZpZWxkc2V0IHtcXHJcXG4gICAgcGFkZGluZzozcHg7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246Zml4ZWQ7XFxyXFxuICAgIG9wYWNpdHk6IDA7IFxcclxcbiAgICB0b3A6MDtcXHJcXG4gICAgbGVmdDowO1xcclxcbiAgICByaWdodDowO1xcclxcbiAgICBib3R0b206MDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwuNSk7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOm5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246MjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcbiNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOmFsbDtcXHJcXG4gICAgb3BhY2l0eToxO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hZGRpdGlvbmFsLWNvbnRhaW5lci1jb2xvcik7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiO1xyXG5pbXBvcnQgeyBUYXNrcyB9IGZyb20gXCIuL3Rhc2tDb25zdHJ1Y3RvclwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBhZGRUYXNrKCkge1xyXG4gICAgbGV0IGlucHV0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcclxuICAgIGxldCBpbnB1dERlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgICBsZXQgaW5wdXREdWVEYXRlID0gbmV3IERhdGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZSk7XHJcblxyXG4gICAgbGV0IGlucHV0QnV0dG9uR3JvdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgncHJpb3JpdHknKTtcclxuICAgIGxldCBpbnB1dFByaW9yaXR5ID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaTxpbnB1dEJ1dHRvbkdyb3VwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlucHV0QnV0dG9uR3JvdXBbaV0uY2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpbnB1dFByaW9yaXR5ID0gaW5wdXRCdXR0b25Hcm91cFtpXS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5ld1Rhc2sgPSBuZXcgVGFza3MoaW5wdXRUaXRsZSxpbnB1dERlc2NyaXB0aW9uLGlucHV0RHVlRGF0ZSxpbnB1dFByaW9yaXR5KTtcclxuICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHthZGRUYXNrfSIsImZ1bmN0aW9uIGNsb3NlRm9ybSgpIHtcclxuICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsJyk7XHJcbiAgICBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbn1cclxuZXhwb3J0IHtjbG9zZUZvcm19IiwiaW1wb3J0IHsgcmVtb3ZlVGFza0J1dHRvbiB9IGZyb20gXCIuL3NlbGVjdFJlbW92ZVRhc2tCdG5zXCI7XHJcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiO1xyXG5sZXQgdGl0bGUgPSAnJztcclxuZnVuY3Rpb24gZmluZFRhc2tUaXRsZVRvUmVtb3ZlKCkge1xyXG4gICAgcmVtb3ZlVGFza0J1dHRvbi5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcclxuICAgICAgICAgICAgdGl0bGUgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRpdGxlKTtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlcyB0YXNrIGZyb20gdGFza0FycmF5XHJcbiAgICAgICAgICAgIHJlbW92ZVRhc2tCeVRpdGxlKHRpdGxlKVxyXG4gICAgICAgICAgICAvLyByZW1vdmVzIHRoZSBwYXJlbnQgRE9NIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGN1cnJlbnQgJ3JlbW92ZSB0YXNrJyBidXR0b25cclxuICAgICAgICAgICAgYnV0dG9uLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gcmVtb3ZlVGFza0J5VGl0bGUgKHRpdGxlKSB7XHJcbiAgICBsZXQgY3VycmVudFRhc2tJbmRleCA9IHRhc2tBcnJheS5maW5kSW5kZXgoKGkpID0+IHtcclxuICAgICAgICByZXR1cm4gaS50aXRsZSA9PT0gdGl0bGU7XHJcbiAgICB9KVxyXG4gICAgdGFza0FycmF5LnNwbGljZShjdXJyZW50VGFza0luZGV4LDEpO1xyXG4gICAgY29uc29sZS5sb2codGFza0FycmF5KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7dGl0bGUsIGZpbmRUYXNrVGl0bGVUb1JlbW92ZX0iLCJpbXBvcnQgeyByZW1vdmVUYXNrQnV0dG9uLCBzZWxlY3RSZW1vdmVUYXNrQnRucyB9IGZyb20gXCIuL3NlbGVjdFJlbW92ZVRhc2tCdG5zXCI7XHJcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiXHJcblxyXG5mdW5jdGlvbiBnZXRUb2RheVRhc2tzKCkge1xyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgLy8gRmlyc3QsIGlmIGNvbnRlbnQgaXMgbm90IGVtcHR5LCByZW1vdmUgZXZlcnl0aGluZyBpbnNpZGUgdGFzayBjb250YWluZXIgKHNvIHRoYXQgdGhlcmUgaXMgbm8gaW5maW5pdGUgZHVwbGljYXRpb24gb2YgJ3RvZGF5JyB0YXNrcylcclxuICAgIGxldCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX2NvbnRhaW5lcicpO1xyXG4gICAgYWxsVGFza3MuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5yZW1vdmUoKSk7XHJcbiAgICAvLyBDaGVjayBmb3Igb2JqZWN0cyBpbnNpZGUgdGhlICd0YXNrQXJyYXknIGFycmF5IHRoYXQgaGF2ZSAnZHVlRGF0ZScgdG9kYXlcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMCA7IGk8dGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICB0b2RheS5nZXRGdWxsWWVhcigpID09PSB0YXNrQXJyYXlbaV0uZHVlRGF0ZS5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgIHRvZGF5LmdldE1vbnRoKCkgPT09IHRhc2tBcnJheVtpXS5kdWVEYXRlLmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgdG9kYXkuZ2V0RGF0ZSgpID09PSB0YXNrQXJyYXlbaV0uZHVlRGF0ZS5nZXREYXRlKClcclxuICAgICAgICApIFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGFza0FycmF5W2ldLmFwcGVuZFRhc2soY29udGVudClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBTZWxlY3RzIGFsbCByZW1vdmUgdGFzayBidXR0b25zIGluc2lkZSB0aGUgJ2NvbnRlbnQnIHNlY3Rpb24gYWZ0ZXIgdXNlciBjaG9vc2VzIHRoaXMgbGlzdFxyXG4gICAgc2VsZWN0UmVtb3ZlVGFza0J0bnMoKVxyXG59XHJcblxyXG5leHBvcnQge2dldFRvZGF5VGFza3MsIHJlbW92ZVRhc2tCdXR0b259IiwiaW1wb3J0IHsgcmVtb3ZlVGFza0J1dHRvbiwgc2VsZWN0UmVtb3ZlVGFza0J0bnMgfSBmcm9tIFwiLi9zZWxlY3RSZW1vdmVUYXNrQnRuc1wiO1xyXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIlxyXG5cclxuZnVuY3Rpb24gZ2V0VG9tb3Jyb3dUYXNrcygpIHtcclxuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gICAgLy8gRmlyc3QsIGlmIGNvbnRlbnQgaXMgbm90IGVtcHR5LCByZW1vdmUgZXZlcnl0aGluZyBpbnNpZGUgdGFzayBjb250YWluZXIgKHNvIHRoYXQgdGhlcmUgaXMgbm8gaW5maW5pdGUgZHVwbGljYXRpb24gb2YgJ3RvZGF5JyB0YXNrcylcclxuICAgIGxldCBhbGxUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrX2NvbnRhaW5lcicpO1xyXG4gICAgYWxsVGFza3MuZm9yRWFjaCgoZWxlbSkgPT4gZWxlbS5yZW1vdmUoKSk7XHJcbiAgICAvLyBDaGVjayBmb3Igb2JqZWN0cyBpbnNpZGUgdGhlICd0YXNrQXJyYXknIGFycmF5IHRoYXQgaGF2ZSAnZHVlRGF0ZScgdG9tb3Jyb3dcclxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgdG9tb3Jyb3cgPSAgbmV3IERhdGUoKVxyXG4gICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyAxKVxyXG4gICAgZm9yIChsZXQgaSA9IDAgOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdG9tb3Jyb3cuZ2V0RnVsbFllYXIoKSA9PT0gdGFza0FycmF5W2ldLmR1ZURhdGUuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICB0b21vcnJvdy5nZXRNb250aCgpID09PSB0YXNrQXJyYXlbaV0uZHVlRGF0ZS5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgIHRvbW9ycm93LmdldERhdGUoKSA9PT0gdGFza0FycmF5W2ldLmR1ZURhdGUuZ2V0RGF0ZSgpXHJcbiAgICAgICAgKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRhc2tBcnJheVtpXS5hcHBlbmRUYXNrKGNvbnRlbnQpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gU2VsZWN0cyBhbGwgcmVtb3ZlIHRhc2sgYnV0dG9ucyBpbnNpZGUgdGhlICdjb250ZW50JyBzZWN0aW9uIGFmdGVyIHVzZXIgY2hvb3NlcyB0aGlzIGxpc3RcclxuICAgIHNlbGVjdFJlbW92ZVRhc2tCdG5zKClcclxufVxyXG5cclxuZXhwb3J0IHtnZXRUb21vcnJvd1Rhc2tzLCByZW1vdmVUYXNrQnV0dG9ufSIsImltcG9ydCBBdmF0YXIgZnJvbSAnLi9hdmExLmpwZyc7XHJcbmNvbnN0IHVzZXJBdmF0YXIgPSBuZXcgSW1hZ2UoKTtcclxudXNlckF2YXRhci5zcmMgPSBBdmF0YXI7XHJcbmNvbnN0IHVzZXJOYW1lID0gJ0B1c2VyTmFtZSdcclxuXHJcbmV4cG9ydCB7dXNlck5hbWUsdXNlckF2YXRhcn0iLCJpbXBvcnQgeyBzZXRMaXN0QWN0aXZlIH0gZnJvbSBcIi4vc2V0TGlzdEFjdGl2ZVwiXHJcbmltcG9ydCB7IHRhc2tBcnJheSB9IGZyb20gXCIuL3Rhc2tBcnJheVwiXHJcbmltcG9ydCB7IFRhc2tzIH0gZnJvbSBcIi4vdGFza0NvbnN0cnVjdG9yXCJcclxuXHJcblxyXG5mdW5jdGlvbiBwYWdlTG9hZChuYW1lLGF2YXRhcikge1xyXG4gICAgLy8gaGVhZGVyIHVzZXJuYW1lIGFuZCBhdmF0YXJcclxuICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1c2VyX25hbWUnKVxyXG4gICAgdXNlck5hbWUuaW5uZXJUZXh0ID0gbmFtZVxyXG5cclxuICAgIGxldCB1c2VyQXZhdGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJfYXZhdGFyJylcclxuICAgIHVzZXJBdmF0YXIuYXBwZW5kQ2hpbGQoYXZhdGFyKVxyXG4gICAgLy8gc2lkZWJhclxyXG4gICAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpXHJcbiAgICBsZXQgbGlzdFRvZGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBsaXN0VG9kYXkuaW5uZXJUZXh0ID0gJ1RvZGF5J1xyXG4gICAgbGlzdFRvZGF5LnNldEF0dHJpYnV0ZSgnaWQnLCdsaXN0X3RvZGF5JylcclxuICAgIGxpc3RUb2RheS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnbGlzdF9idXR0b24nKVxyXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0VG9kYXkpXHJcblxyXG4gICAgbGV0IGxpc3RUb21vcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgbGlzdFRvbW9ycm93LmlubmVyVGV4dCA9ICdUb21vcnJvdydcclxuICAgIGxpc3RUb21vcnJvdy5zZXRBdHRyaWJ1dGUoJ2lkJywnbGlzdF90b21vcnJvdycpXHJcbiAgICBsaXN0VG9tb3Jyb3cuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2xpc3RfYnV0dG9uJylcclxuICAgIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdFRvbW9ycm93KVxyXG5cclxuICAgXHJcbiAgICBsZXQgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuXHJcbiAgICAvLyBidXR0b24gdG8gYWRkIG5ldyB0YXNrXHJcbiAgICBsZXQgc2hvd0Zvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHNob3dGb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCdzaG93X2Zvcm1fYnV0dG9uJylcclxuICAgIHNob3dGb3JtQnV0dG9uLmlubmVyVGV4dCA9ICdBZGQgdGFzaydcclxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoc2hvd0Zvcm1CdXR0b24pXHJcblxyXG4gICAgLy8gc2VsZWN0IGFsbCBsaXN0IGJ1dHRvbnNcclxuICAgIGxldCBsaXN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0X2J1dHRvbicpXHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHtwYWdlTG9hZCwgdGFza0FycmF5fSIsImltcG9ydCB7IGZpbmRUYXNrVGl0bGVUb1JlbW92ZSB9IGZyb20gXCIuL2ZpbmRUYXNrVGl0bGVUb1JlbW92ZVwiXHJcblxyXG5sZXQgcmVtb3ZlVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmVfdGFza19idXR0b24nKVxyXG5cclxuLy8gU2VsZWN0cyBhbGwgJ1JlbW92ZSB0YXNrJyBidXR0b25zIGluc2lkZSB0aGUgJ2NvbnRlbnQnIHNlY3Rpb24gYWZ0ZXIgdXNlciBjaG9vc2VzICd0b2RheScgb3IgJ3RvbW9ycm93JyBsaXN0c1xyXG4vLyBhbmQgc3RhcnRzIHRoZSBmaW5kVGFza1RpdGxlVG9SZW1vdmUgZnVuY3Rpb25cclxuZnVuY3Rpb24gc2VsZWN0UmVtb3ZlVGFza0J0bnMoKSB7XHJcbiAgICByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbW92ZV90YXNrX2J1dHRvbicpXHJcbiAgICBjb25zb2xlLmxvZyhyZW1vdmVUYXNrQnV0dG9uKVxyXG4gICAgZmluZFRhc2tUaXRsZVRvUmVtb3ZlKClcclxufVxyXG5leHBvcnQge3JlbW92ZVRhc2tCdXR0b24sIHNlbGVjdFJlbW92ZVRhc2tCdG5zfSIsImZ1bmN0aW9uIHNldExpc3RBY3RpdmUgKCkge1xyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0TGlzdEFjdGl2ZX07IiwiZnVuY3Rpb24gc2hvd0Zvcm0oKSB7XHJcbiAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbCcpO1xyXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gICAgbGV0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3ZlcmxheScpXHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7c2hvd0Zvcm19IiwibGV0IHRhc2tBcnJheSA9IFtdXHJcbi8vIG9iamVjdHMgaW4gdGhpcyBhcnJheSBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcclxuLy8gdGl0bGUsZGVzY3JpcHRpb24sZHVlRGF0ZSxwcmlvcml0eVxyXG5cclxuLy8gYW5kIHRoZSBmb2xsb3dpbmcgbWV0aG9kczpcclxuLy8gc2V0VGl0bGUgKG5ld1RpdGxlKVxyXG4vLyBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbilcclxuLy8gc2V0RHVlRGF0ZShuZXdEdWVEYXRlKVxyXG4vLyBzZXRQcmlvcml0eShuZXdQcmlvcml0eSlcclxuXHJcbi8vIGFwcGVuZFRhc2soY29udGFpbmVyKSAvL1xyXG5leHBvcnQge3Rhc2tBcnJheX0iLCJpbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tIFwiLi90YXNrQXJyYXlcIjtcclxuXHJcbmNsYXNzIFRhc2tzIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgfVxyXG4gICAgc2V0VGl0bGUgKG5ld1RpdGxlKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IG5ld1RpdGxlXHJcbiAgICB9XHJcbiAgICBzZXREZXNjcmlwdGlvbihuZXdEZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBuZXdEZXNjcmlwdGlvblxyXG4gICAgfVxyXG4gICAgc2V0RHVlRGF0ZShuZXdEdWVEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gbmV3RHVlRGF0ZVxyXG4gICAgfVxyXG4gICAgc2V0UHJpb3JpdHkobmV3UHJpb3JpdHkpIHtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gbmV3UHJpb3JpdHlcclxuICAgIH1cclxuICAgIGFwcGVuZFRhc2soY29udGFpbmVyKSB7XHJcbiAgICAgICAgbGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRhc2tDb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3Rhc2tfY29udGFpbmVyJylcclxuXHJcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgICAgICB0YXNrVGl0bGUuaW5uZXJUZXh0ID0gdGhpcy50aXRsZVxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKVxyXG5cclxuICAgICAgICBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgICAgICB0YXNrRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdGhpcy5kZXNjcmlwdGlvbjtcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbilcclxuXHJcbiAgICAgICAgbGV0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJUZXh0ID0gdGhpcy5kdWVEYXRlO1xyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0R1ZURhdGUpXHJcblxyXG4gICAgICAgIGxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgdGFza1ByaW9yaXR5LmlubmVyVGV4dCA9IHRoaXMucHJpb3JpdHk7XHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHJlbW92ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLmlubmVyVGV4dCA9ICdSZW1vdmUgdGFzaydcclxuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdyZW1vdmVfdGFza19idXR0b24nKVxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQocmVtb3ZlVGFza0J1dHRvbilcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG4gICAgICAgIC8vdGFza0FycmF5LnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVUYXNrKHRpdGxlKSB7XHJcbiAgICAgICAgLy8gZmluZCB0aXRsZSBvZiB0aGUgdGFzayBpbiB0aGUgY29udGFpbmVyJ3MgZmlyc3QgY2hpbGQgKHRhc2sgdGl0bGUgPT0gaDMgRE9NIGVsZW1lbnQncyBpbm5lclRleHQpICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAgOyBpPHRhc2tBcnJheS5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0YXNrQXJyYXlbaV0udGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRhc2tBcnJheS5zcGxpY2UodGFza0FycmF5W2ldLDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1Rhc2tzfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSAnLi9hZGRUYXNrJztcclxuaW1wb3J0IHsgY2xvc2VGb3JtIH0gZnJvbSAnLi9jbG9zZUZvcm0nO1xyXG5pbXBvcnQgeyBnZXRUb2RheVRhc2tzIH0gZnJvbSAnLi9nZXRUb2RheVRhc2tzJztcclxuaW1wb3J0IHsgZ2V0VG9tb3Jyb3dUYXNrcyB9IGZyb20gJy4vZ2V0VG9tb3Jyb3dUYXNrcyc7XHJcbmltcG9ydCB7IHVzZXJOYW1lLCB1c2VyQXZhdGFyIH0gZnJvbSAnLi9nZXRVc2VyTmFtZUF2YXRhcic7XHJcbmltcG9ydCB7IHBhZ2VMb2FkIH0gZnJvbSAnLi9wYWdlTG9hZCc7XHJcbmltcG9ydCB7IHNob3dGb3JtIH0gZnJvbSAnLi9zaG93Rm9ybSc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgeyB0YXNrQXJyYXkgfSBmcm9tICcuL3Rhc2tBcnJheSc7XHJcbmltcG9ydCB7IFRhc2tzIH0gZnJvbSAnLi90YXNrQ29uc3RydWN0b3InO1xyXG5cclxucGFnZUxvYWQodXNlck5hbWUsdXNlckF2YXRhcilcclxuLy8gZGVidWdcclxubGV0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbmxldCB0YXNrMSA9IG5ldyBUYXNrcygndGVzdDEnLCdkZXNjcmlwJyxuZXcgRGF0ZSgpLCdoaWdoJylcclxudGFza0FycmF5LnB1c2godGFzazEpXHJcblxyXG5sZXQgdGFzazIgPSBuZXcgVGFza3MoJ3Rlc3QyJywnZGVzY3JpcHRpb24nLG5ldyBEYXRlKCksJ2hpZ2gnKVxyXG50YXNrMi5kdWVEYXRlLnNldERhdGUoMjcpO1xyXG50YXNrQXJyYXkucHVzaCh0YXNrMik7XHJcblxyXG5cclxudGFzazEucmVtb3ZlVGFzaygpO1xyXG5jb25zb2xlLmxvZyh0YXNrQXJyYXkpXHJcblxyXG4vL1xyXG5sZXQgbGlzdFRvZGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RfdG9kYXknKVxyXG5saXN0VG9kYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGdldFRvZGF5VGFza3MpXHJcblxyXG5sZXQgbGlzdFRvbW9ycm93QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3RfdG9tb3Jyb3cnKVxyXG5saXN0VG9tb3Jyb3dCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGdldFRvbW9ycm93VGFza3MpXHJcblxyXG5sZXQgc2hvd0Zvcm1CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvd19mb3JtX2J1dHRvbicpXHJcbnNob3dGb3JtQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zvcm0pXHJcblxyXG5sZXQgY2xvc2VGb3JtQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlX21vZGFsX2J1dHRvbicpO1xyXG5jbG9zZUZvcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGNsb3NlRm9ybSlcclxuXHJcbmxldCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZF90YXNrX2J1dHRvbicpXHJcbmFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRUYXNrKVxyXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxjbG9zZUZvcm0pXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=