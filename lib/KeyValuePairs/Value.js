"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var KeyValueStyled = _styledComponents.default.p.withConfig({
  displayName: "Value__KeyValueStyled",
  componentId: "wevxov-0"
})(["flex:1 1 65%;", ";"], (0, _theme.getThemeProps)('KeyValuePairsValue.styles'));

var _default = KeyValueStyled;
exports.default = _default;