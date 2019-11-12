"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Input = _interopRequireDefault(require("../Input"));

var _theme = require("../../utils/theme");

var PaginationActionsCurrentPage = (0, _styledComponents.default)(_Input.default).withConfig({
  displayName: "PaginationActionsCurrentPage",
  componentId: "sc-1i6zcag-0"
})(["border-radius:4px;color:", ";display:inline-block;height:30px !important;margin:0 15px;min-height:30px;padding:0;text-align:center;width:55px;", ";"], (0, _theme.getThemeProps)('palette.text.dark'), (0, _theme.getThemeProps)('PaginationActionsCurrentPage.styles'));
var _default = PaginationActionsCurrentPage;
exports.default = _default;