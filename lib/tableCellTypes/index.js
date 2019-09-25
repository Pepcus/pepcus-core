"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TableCellActionsMenu", {
  enumerable: true,
  get: function get() {
    return _TableCellActionsMenu.default;
  }
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
Object.defineProperty(exports, "TableCellDate", {
  enumerable: true,
  get: function get() {
    return _TableCellDate.default;
  }
});
Object.defineProperty(exports, "TableCellLinksList", {
  enumerable: true,
  get: function get() {
    return _TableCellLinksList.default;
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

var _TableCellActionsMenu = _interopRequireDefault(require("./TableCellActionsMenu"));

var _TableCellButton = _interopRequireDefault(require("./TableCellButton"));

var _TableCellButtonGroup = _interopRequireDefault(require("./TableCellButtonGroup"));

var _TableCellCheckbox = _interopRequireDefault(require("./TableCellCheckbox"));

var _TableCellDate = _interopRequireDefault(require("./TableCellDate"));

var _TableCellLinksList = _interopRequireDefault(require("./TableCellLinksList"));

var _TableCellStatus = _interopRequireDefault(require("./TableCellStatus"));

var _TableCellSvg = _interopRequireDefault(require("./TableCellSvg"));

var types = {
  actionsMenu: _TableCellActionsMenu.default,
  button: _TableCellButton.default,
  buttonGroup: _TableCellButtonGroup.default,
  checkbox: _TableCellCheckbox.default,
  date: _TableCellDate.default,
  link: _TableCellLinksList.default,
  status: _TableCellStatus.default,
  svg: _TableCellSvg.default
};
var _default = types;
exports.default = _default;