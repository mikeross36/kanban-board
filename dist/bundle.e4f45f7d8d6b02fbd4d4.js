/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Column.js":
/*!**************************!*\
  !*** ./src/js/Column.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Item.js */ "./src/js/Item.js");
/* harmony import */ var _KanbanApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./KanbanApi.js */ "./src/js/KanbanApi.js");
/* harmony import */ var _DropZone_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropZone.js */ "./src/js/DropZone.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }





var Column = /*#__PURE__*/function () {
  function Column(id, title) {
    var _this = this;

    _classCallCheck(this, Column);

    var dropZoneAbove = _DropZone_js__WEBPACK_IMPORTED_MODULE_2__["default"].createDropZone();
    this.rangeElements = {};
    this.rangeElements.column = Column.createColumn();
    this.rangeElements.title = this.rangeElements.column.querySelector(".kanban-column-title");
    this.rangeElements.items = this.rangeElements.column.querySelector(".kanban-column-items");
    this.rangeElements.addItemBtn = this.rangeElements.column.querySelector(".add-item-btn");
    this.rangeElements.column.dataset.id = id;
    this.rangeElements.title.textContent = title;
    this.rangeElements.items.appendChild(dropZoneAbove);
    this.rangeElements.addItemBtn.addEventListener("click", function () {
      var newItem = _KanbanApi_js__WEBPACK_IMPORTED_MODULE_1__["default"].addColumnItem(id, "");

      _this.renderItem(newItem);
    });
    _KanbanApi_js__WEBPACK_IMPORTED_MODULE_1__["default"].getColumnItems(id).forEach(function (item) {
      _this.renderItem(item);
    });
  }

  _createClass(Column, [{
    key: "renderItem",
    value: function renderItem(itemData) {
      var item = new _Item_js__WEBPACK_IMPORTED_MODULE_0__["default"](itemData.id, itemData.content);
      this.rangeElements.items.appendChild(item.rangeElements.item);
    }
  }], [{
    key: "createColumn",
    value: function createColumn() {
      var range = document.createRange();
      range.selectNode(document.body);
      var tagString = "\n            <div class=\"kanban-column\">\n                <h2 class=\"kanban-column-title\"></h2>\n                <div class=\"kanban-column-items\"></div>\n                <button class=\"add-item-btn\" type=\"button\">add</button>\n            </div>";
      return range.createContextualFragment(tagString).children[0];
    }
  }]);

  return Column;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Column);

/***/ }),

/***/ "./src/js/DropZone.js":
/*!****************************!*\
  !*** ./src/js/DropZone.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KanbanApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KanbanApi.js */ "./src/js/KanbanApi.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var DropZone = /*#__PURE__*/function () {
  function DropZone() {
    _classCallCheck(this, DropZone);
  }

  _createClass(DropZone, null, [{
    key: "createDropZone",
    value: function createDropZone() {
      var range = document.createRange();
      range.selectNode(document.body);
      var tagString = "<div class=\"kanban-dropzone\"></div>";
      var dropZone = range.createContextualFragment(tagString).children[0];
      dropZone.addEventListener("dragover", function (e) {
        e.preventDefault();
        dropZone.classList.add("kanban-dropzone-active");
      });
      dropZone.addEventListener("dragleave", function () {
        dropZone.classList.remove("kanban-dropzone-active");
      });
      dropZone.addEventListener("drop", function (e) {
        e.preventDefault();
        dropZone.classList.remove("kanban-dropzone-active");
        var dropZoneColumn = dropZone.closest(".kanban-column");
        var columnId = +dropZoneColumn.dataset.id;

        var dropZonesInColumn = _toConsumableArray(dropZoneColumn.querySelectorAll(".kanban-dropzone"));

        var dropZoneIndex = dropZonesInColumn.indexOf(dropZone);
        var itemId = +e.dataTransfer.getData("text/plain");
        var droppedItem = document.querySelector("[data-id=\"".concat(itemId, "\"]"));
        var insertAfter = dropZone.parentElement.classList.contains("kanban-item") ? dropZone.parentElement : dropZone;

        if (droppedItem.contains(dropZone)) {
          return;
        }

        insertAfter.after(droppedItem);
        _KanbanApi_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItem(itemId, {
          columnId: columnId,
          position: dropZoneIndex
        });
      });
      return dropZone;
    }
  }]);

  return DropZone;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropZone);

/***/ }),

/***/ "./src/js/Item.js":
/*!************************!*\
  !*** ./src/js/Item.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _KanbanApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KanbanApi.js */ "./src/js/KanbanApi.js");
/* harmony import */ var _DropZone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropZone.js */ "./src/js/DropZone.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }




var Item = /*#__PURE__*/function () {
  function Item(id, content) {
    var _this = this;

    _classCallCheck(this, Item);

    var dropZoneBelowe = _DropZone_js__WEBPACK_IMPORTED_MODULE_1__["default"].createDropZone();
    this.rangeElements = {};
    this.rangeElements.item = Item.createItem();
    this.rangeElements.itemInput = this.rangeElements.item.querySelector(".kanban-item-input");
    this.rangeElements.item.dataset.id = id;
    this.rangeElements.itemInput.textContent = content;
    this.content = content;
    this.rangeElements.item.appendChild(dropZoneBelowe);

    var updateItemsContent = function updateItemsContent() {
      var newContent = _this.rangeElements.itemInput.textContent.trim();

      if (newContent === _this.content) {
        return;
      }

      _this.content = newContent;
      _KanbanApi_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateItem(id, {
        content: _this.content
      });
    };

    this.rangeElements.itemInput.addEventListener("blur", updateItemsContent);
    this.rangeElements.item.addEventListener("dblclick", function () {
      var check = confirm("Are you sure sou want to delete this item?");

      if (check) {
        _KanbanApi_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteItem(id);

        _this.rangeElements.itemInput.removeEventListener("blur", updateItemsContent);

        _this.rangeElements.item.parentElement.removeChild(_this.rangeElements.item);
      }
    });
    this.rangeElements.item.addEventListener("dragstart", function (e) {
      e.dataTransfer.setData("text/plain", id);
    });
    this.rangeElements.itemInput.addEventListener("drop", function (e) {
      e.preventDefault();
    });
  }

  _createClass(Item, null, [{
    key: "createItem",
    value: function createItem() {
      var range = document.createRange();
      range.selectNode(document.body);
      var tagString = "\n            <div class=\"kanban-item\" draggable=\"true\">\n                <div class=\"kanban-item-input\" contenteditable></div>\n            </div>";
      return range.createContextualFragment(tagString).children[0];
    }
  }]);

  return Item;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "./src/js/Kanban.js":
/*!**************************!*\
  !*** ./src/js/Kanban.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Column_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Column.js */ "./src/js/Column.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



var Kanban = /*#__PURE__*/function () {
  function Kanban(kanban) {
    var _this = this;

    _classCallCheck(this, Kanban);

    this.kanban = kanban;
    Kanban.columns().forEach(function (column) {
      var newColumn = new _Column_js__WEBPACK_IMPORTED_MODULE_0__["default"](column.id, column.title);

      _this.kanban.appendChild(newColumn.rangeElements.column);
    });
  }

  _createClass(Kanban, null, [{
    key: "columns",
    value: function columns() {
      return [{
        id: 1,
        title: "todo"
      }, {
        id: 2,
        title: "doing"
      }, {
        id: 3,
        title: "done"
      }];
    }
  }]);

  return Kanban;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Kanban);

/***/ }),

/***/ "./src/js/KanbanApi.js":
/*!*****************************!*\
  !*** ./src/js/KanbanApi.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// import {v4 as uuidv4} from uuidv4;
var KanbanApi = /*#__PURE__*/function () {
  function KanbanApi() {
    _classCallCheck(this, KanbanApi);
  }

  _createClass(KanbanApi, null, [{
    key: "getColumnItems",
    value: function getColumnItems(columnId) {
      var column = getDataFromStorage().find(function (column) {
        return column.id === columnId;
      });

      if (!column) {
        return [];
      }

      return column.items;
    }
  }, {
    key: "addColumnItem",
    value: function addColumnItem(columnId, content) {
      var data = getDataFromStorage();
      var column = data.find(function (column) {
        return column.id === columnId;
      });
      var item = {
        id: Math.floor(Math.random() * 100000),
        content: content
      };

      if (!column) {
        throw new Error("Column not found!");
      }

      column.items.push(item);
      setDataToStorage(data);
      return item;
    }
  }, {
    key: "updateItem",
    value: function updateItem(itemId, newProps) {
      var data = getDataFromStorage();

      var _ref = function () {
        var _iterator = _createForOfIteratorHelper(data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var column = _step.value;

            var _item = column.items.find(function (item) {
              return item.id === itemId;
            });

            if (_item) {
              return [_item, column];
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }(),
          _ref2 = _slicedToArray(_ref, 2),
          item = _ref2[0],
          currColumn = _ref2[1];

      if (!item) {
        throw new Error("Item not found!");
      }

      updateContent(item, newProps);
      updateColAndPos(newProps, data, currColumn, item);
      setDataToStorage(data);
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(itemId) {
      var data = getDataFromStorage();

      var _iterator2 = _createForOfIteratorHelper(data),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var column = _step2.value;
          var item = column.items.find(function (item) {
            return item.id === itemId;
          });

          if (item) {
            column.items.splice(column.items.indexOf(item), 1);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      setDataToStorage(data);
    }
  }]);

  return KanbanApi;
}();

var setDataToStorage = function setDataToStorage(kanbanData) {
  localStorage.setItem("kanban-data", JSON.stringify(kanbanData));
};

var getDataFromStorage = function getDataFromStorage() {
  var kanbanData = localStorage.getItem("kanban-data");

  if (!kanbanData) {
    return [{
      id: 1,
      items: []
    }, {
      id: 2,
      items: []
    }, {
      id: 3,
      items: []
    }];
  }

  return JSON.parse(kanbanData);
};

var updateContent = function updateContent(item, newProps) {
  item.content = newProps.content === undefined ? item.content : newProps.content;
};

var updateColAndPos = function updateColAndPos(newProps, data, currColumn, item) {
  if (newProps.columnId !== undefined && newProps.position !== undefined) {
    var newColumn = data.find(function (column) {
      return column.id === newProps.columnId;
    });

    if (!newColumn) {
      throw new Error("Column not found!");
    }

    currColumn.items.splice(currColumn.items.indexOf(item), 1);
    newColumn.items.splice(newProps.position, 0, item);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KanbanApi);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\n  display: flex;\n  justify-content: center;\n  padding: 0.3rem;\n}\n\n.kanban {\n  display: flex;\n  padding: 1rem;\n  width: 35rem;\n  height: 90vh;\n  background: #fcab3b;\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\n}\n.kanban-column {\n  flex: 1;\n  width: 10rem;\n  padding: 0 5px;\n}\n.kanban-column:not(:last-child) {\n  margin-right: 1.5rem;\n}\n.kanban-column-title {\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 1rem;\n  font-size: 1.2rem;\n  color: white;\n  text-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;\n  user-select: none;\n  /* preventing accidentally highlights*/\n}\n.kanban-item-input {\n  padding: 10px 15px;\n  box-sizing: border-box;\n  background: white;\n  border: 1px solid #a7a5a5;\n  border-radius: 5px;\n  width: 100%;\n  cursor: pointer;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5px;\n}\n.kanban-dropzone {\n  height: 10px;\n  transition: background 0.15s, height 0.15s;\n}\n.kanban-dropzone-active {\n  height: 20px;\n  background: rgba(0, 0, 0, 0.25);\n}\n\n.add-item-btn {\n  width: 100%;\n  padding: 5px;\n  font-size: 1rem;\n  border: none;\n  border-radius: 15px;\n  color: white;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 600;\n  background: #76b852;\n  /* fallback for old browsers */\n  background: -webkit-linear-gradient(to right, #8DC26F, #76b852);\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #8DC26F, #76b852);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  transition: transform 0.2s linear;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\n}\n.add-item-btn:hover {\n  background: #6e9657;\n  transform: translateY(4px);\n}", "",{"version":3,"sources":["webpack://./src/style/main.scss"],"names":[],"mappings":"AAAA;EACI,aAAA;EACH,uBAAA;EACA,eAAA;AACD;;AAEA;EACC,aAAA;EACA,aAAA;EACA,YAAA;EACG,YAAA;EACH,mBAAA;EACA,kBAAA;EACG,kLACA;AAAJ;AAMI;EACI,OAAA;EACA,YAAA;EACA,cAAA;AAJR;AAOI;EACI,oBAAA;AALR;AAQI;EACI,yBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,iBAAA;EACA,YAAA;EACA,2CAAA;EACA,iBAAA;EAAmB,sCAAA;AAL3B;AAQI;EACI,kBAAA;EACA,sBAAA;EACA,iBAAA;EACA,yBAAA;EACA,kBAAA;EACA,WAAA;EACA,eAAA;EACA,2CAAA;AANR;AASI;EACI,YAAA;EACH,0CAAA;AAPL;AAUI;EACI,YAAA;EACA,+BAAA;AARR;;AAYA;EACI,WAAA;EACH,YAAA;EACA,eAAA;EACG,YAAA;EACH,mBAAA;EACA,YAAA;EACA,eAAA;EACA,qBAAA;EACA,gBAAA;EACG,mBAAA;EAAsB,8BAAA;EACtB,+DAAA;EAAkE,+BAAA;EAClE,uDAAA;EAAyD,qEAAA;EACzD,iCAAA;EACA,uHACI;AAPR;AAWI;EACI,mBAAA;EACA,0BAAA;AATR","sourcesContent":[".wrapper {\r\n    display: flex;\r\n\tjustify-content: center;\r\n\tpadding: .3rem;\r\n}\r\n\r\n.kanban {\r\n\tdisplay: flex;\r\n\tpadding: 1rem;\r\n\twidth: 35rem;\r\n    height: 90vh;\r\n\tbackground: #fcab3b;\r\n\tborder-radius: 5px;\r\n    box-shadow: \r\n    rgba(0, 0, 0, 0.09) 0px 2px 1px, \r\n    rgba(0, 0, 0, 0.09) 0px 4px 2px, \r\n    rgba(0, 0, 0, 0.09) 0px 8px 4px, \r\n    rgba(0, 0, 0, 0.09) 0px 16px 8px, \r\n    rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n\r\n    &-column {\r\n        flex: 1;\r\n        width: 10rem;\r\n        padding: 0 5px;\r\n    }\r\n\r\n    &-column:not(:last-child){\r\n        margin-right: 1.5rem;\r\n    }\r\n\r\n    &-column-title {\r\n        text-transform: uppercase;\r\n        font-weight: 700;\r\n        text-align: center;\r\n        margin-bottom: 1rem;\r\n        font-size: 1.2rem;\r\n        color: white;\r\n        text-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;;\r\n        user-select: none; /* preventing accidentally highlights*/\r\n    }\r\n\r\n    &-item-input {\r\n        padding: 10px 15px;\r\n        box-sizing: border-box;\r\n        background: white;\r\n        border: 1px solid #a7a5a5;\r\n        border-radius: 5px;\r\n        width: 100%;\r\n        cursor: pointer;\r\n        box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 5px;\r\n    }\r\n\r\n    &-dropzone {\r\n        height: 10px;\r\n\t    transition: background 0.15s, height 0.15s;\r\n    }\r\n\r\n    &-dropzone-active {\r\n        height: 20px;\r\n        background: rgba(0, 0, 0, 0.25);\r\n    }\r\n}\r\n\r\n.add-item-btn {\r\n    width: 100%;\r\n\tpadding: 5px;\r\n\tfont-size: 1rem;\r\n    border: none;\r\n\tborder-radius: 15px;\r\n\tcolor: white;\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\tfont-weight: 600;\r\n    background: #76b852;  /* fallback for old browsers */\r\n    background: -webkit-linear-gradient(to right, #8DC26F, #76b852);  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to right, #8DC26F, #76b852); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    transition: transform .2s linear;\r\n    box-shadow: \r\n        rgba(0, 0, 0, 0.4) 0px 2px 4px, \r\n        rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, \r\n        rgba(0, 0, 0, 0.2) 0px -3px 0px inset;\r\n\r\n    &:hover {\r\n        background: #6e9657;\r\n        transform: translateY(4px);\r\n    }\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _Kanban_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Kanban.js */ "./src/js/Kanban.js");


var selector = document.querySelector(".kanban");
new _Kanban_js__WEBPACK_IMPORTED_MODULE_1__["default"](selector);
})();

/******/ })()
;
//# sourceMappingURL=bundle.e4f45f7d8d6b02fbd4d4.js.map