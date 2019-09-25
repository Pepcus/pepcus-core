"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _theme = require("../../constants/theme");

// Define styles for the AccordionHeader.
var AccordionHeaderStyled = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "AccordionHeaderStyled",
  componentId: "xwkbj1-0"
})(["cursor:pointer;transition:", ";"], _theme.THEME.transitions.create('background-color'));
var _default = AccordionHeaderStyled;
exports.default = _default;