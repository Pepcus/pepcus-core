"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableCellButton", {
  enumerable: true,
  get: function get() {
    return _TableCellButton.default;
  }
});
Object.defineProperty(exports, "TableCellCheckbox", {
  enumerable: true,
  get: function get() {
    return _TableCellCheckbox.default;
  }
});
Object.defineProperty(exports, "TableCellHead", {
  enumerable: true,
  get: function get() {
    return _TableCellHead.default;
  }
});
Object.defineProperty(exports, "TableCellLink", {
  enumerable: true,
  get: function get() {
    return _TableCellLink.default;
  }
});
Object.defineProperty(exports, "TableCellStatus", {
  enumerable: true,
  get: function get() {
    return _TableCellStatus.default;
  }
});
Object.defineProperty(exports, "TableCellSvg", {
  enumerable: true,
  get: function get() {
    return _TableCellSvg.default;
  }
});
exports.default = void 0;

var _TableCellButton = _interopRequireDefault(require("./TableCellButton"));

var _TableCellCheckbox = _interopRequireDefault(require("./TableCellCheckbox"));

var _TableCellHead = _interopRequireDefault(require("./TableCellHead"));

var _TableCellLink = _interopRequireDefault(require("./TableCellLink"));

var _TableCellStatus = _interopRequireDefault(require("./TableCellStatus"));

var _TableCellSvg = _interopRequireDefault(require("./TableCellSvg"));

var _TableCellDate = _interopRequireDefault(require("./TableCellDate"));

var types = {
  button: _TableCellButton.default,
  checkbox: _TableCellCheckbox.default,
  date: _TableCellDate.default,
  head: _TableCellHead.default,
  link: _TableCellLink.default,
  status: _TableCellStatus.default,
  svg: _TableCellSvg.default
};
var _default = types;
exports.default = _default;