"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var TableStyled = _styledComponents.default.table.withConfig({
  displayName: "TableStyled",
  componentId: "y906da-0"
})(["border-collapse:collapse;overflow:hidden;overflow-x:auto;width:100%;", ";"], (0, _theme.themeGet)('Table.styles'));

var _default = TableStyled;
exports.default = _default;