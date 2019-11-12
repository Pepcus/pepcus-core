"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSpring = require("react-spring");

var CollapseStyled = (0, _styledComponents.default)(_reactSpring.animated.div).withConfig({
  displayName: "CollapseSpringStyled__CollapseStyled",
  componentId: "sc-4rohwt-0"
})(["overflow:hidden;"]);
var _default = CollapseStyled;
exports.default = _default;