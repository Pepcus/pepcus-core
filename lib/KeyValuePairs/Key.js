"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var KeyValueKeyStyled = _styledComponents.default.p.withConfig({
  displayName: "Key__KeyValueKeyStyled",
  componentId: "sc-1su0zc1-0"
})(["flex:1 1 35%;text-align:right;", ";"], (0, _theme.getThemeProps)('KeyValuePairsKey.styles'));

var _default = KeyValueKeyStyled;
exports.default = _default;