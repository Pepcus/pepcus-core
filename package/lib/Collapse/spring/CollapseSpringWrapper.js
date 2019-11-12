"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSpring = require("react-spring");

var CollapseWrapper = (0, _styledComponents.default)(_reactSpring.animated.div).withConfig({
  displayName: "CollapseSpringWrapper__CollapseWrapper",
  componentId: "sc-11a5e5u-0"
})([""]);
var _default = CollapseWrapper;
exports.default = _default;