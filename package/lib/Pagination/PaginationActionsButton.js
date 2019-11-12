"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../Button"));

var _theme = require("../../utils/theme");

var PaginationActionsButton = (0, _styledComponents.default)(_Button.default).withConfig({
  displayName: "PaginationActionsButton",
  componentId: "sc-5vbrpe-0"
})(["align-items:center;display:flex;font-size:12px;height:30px;justify-content:center;min-height:30px;min-width:auto;padding:5px;width:45px;", ";"], (0, _theme.themeGet)('PaginationActionsButton.styles'));
var _default = PaginationActionsButton;
exports.default = _default;