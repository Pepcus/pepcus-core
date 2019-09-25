"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var SelectOptionGroupStyled = _styledComponents.default.optgroup.withConfig({
  displayName: "SelectOptionGroup__SelectOptionGroupStyled",
  componentId: "sc-1kdv5x2-0"
})(["", ";"], (0, _theme.getThemeProps)('SelectOptionGroup.styles'));

var _default = SelectOptionGroupStyled;
exports.default = _default;