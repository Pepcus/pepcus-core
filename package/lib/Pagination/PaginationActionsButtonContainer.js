"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var _PaginationActionsButton = _interopRequireDefault(require("./PaginationActionsButton"));

var PaginationActionsButtonContainer = _styledComponents.default.div.withConfig({
  displayName: "PaginationActionsButtonContainer",
  componentId: "sc-5e1a0n-0"
})(["align-items:center;display:flex;justify-content:flex-start;", "{&:first-of-type{border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;}&:last-of-type{border-bottom-left-radius:0;border-top-left-radius:0;}}", ";"], _PaginationActionsButton.default, (0, _theme.getThemeProps)('PaginationActionsButtonContainer.styles'));

var _default = PaginationActionsButtonContainer;
exports.default = _default;