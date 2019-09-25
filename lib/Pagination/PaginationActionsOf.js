"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var PaginationActionsOf = _styledComponents.default.span.withConfig({
  displayName: "PaginationActionsOf",
  componentId: "sc-1hpceeq-0"
})(["color:", ";", ";"], (0, _theme.getThemeProps)('palette.text.light'), (0, _theme.getThemeProps)('PaginationActionsOf.styles'));

var _default = PaginationActionsOf;
exports.default = _default;