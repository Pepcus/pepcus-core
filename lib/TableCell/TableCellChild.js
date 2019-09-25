"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var TableCellChild = _styledComponents.default.div.withConfig({
  displayName: "TableCellChild",
  componentId: "sc-1kh0ryy-0"
})(["width:100%;", ";"], (0, _theme.themeGet)('TableCellChild.styles'));

var _default = TableCellChild;
exports.default = _default;