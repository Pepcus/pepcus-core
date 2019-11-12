"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var CollapseStyled = _styledComponents.default.div.withConfig({
  displayName: "CollapseStyled",
  componentId: "sc-1xlffoi-0"
})(["", ";"], function (_ref) {
  var entered = _ref.entered,
      isHidden = _ref.isHidden,
      minHeight = _ref.minHeight,
      theme = _ref.theme;
  // Build the `entered` styles
  var enteredCss = entered && (0, _styledComponents.css)(["height:auto;overflow:visible;"]); // Build the `hidden` styles

  var hiddenCss = isHidden && (0, _styledComponents.css)(["visibility:hidden;"]); // Return the component's styles

  return (0, _styledComponents.css)(["height:0;min-height:", ";overflow:hidden;transition:", ";", ";", ";"], minHeight, theme.transitions.create('height'), enteredCss, hiddenCss);
});

var _default = CollapseStyled;
exports.default = _default;