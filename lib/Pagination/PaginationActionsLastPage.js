"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var PaginationActionsLastPage = _styledComponents.default.span.withConfig({
  displayName: "PaginationActionsLastPage",
  componentId: "sc-84x73-0"
})(["color:", ";margin:0 10px;max-height:33px;text-align:center;", ";"], (0, _theme.getThemeProps)('palette.text.light'), (0, _theme.getThemeProps)('PaginationActionsLastPage.styles'));

var _default = PaginationActionsLastPage;
exports.default = _default;