"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var SelectOptionStyled = _styledComponents.default.option.withConfig({
  displayName: "SelectOption__SelectOptionStyled",
  componentId: "i6ad5w-0"
})(["", ";"], (0, _theme.getThemeProps)('SelectOption.styles'));

var _default = SelectOptionStyled;
exports.default = _default;