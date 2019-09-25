"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

// Define styles for the AccordionContent.
var AccordionContentStyled = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "AccordionContentStyled",
  componentId: "ofwwfc-0"
})([""]);
var _default = AccordionContentStyled;
exports.default = _default;