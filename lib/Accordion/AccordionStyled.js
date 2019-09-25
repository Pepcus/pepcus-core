"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _theme = require("../../constants/theme");

var _AccordionHeaderStyled = _interopRequireDefault(require("../AccordionHeader/AccordionHeaderStyled"));

var AccordionStyled = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "AccordionStyled",
  componentId: "sc-1y2xodm-0"
})(["", ";"], function (_ref) {
  var expanded = _ref.expanded,
      single = _ref.single;
  // Build the AccordionHeader border-bottom CSS.
  var accordionHeaderBorderBottomCSS = !expanded && (0, _styledComponents.css)(["border-bottom-width:0;transition:", ";"], _theme.THEME.transitions.create('border-bottom-width', {
    duration: 150
  })); // Styles when not rendering a single Accordion component.
  // Define the border-radius for the Accordion when rendered within a group.

  var notSingleAccordionCSS = !single && (0, _styledComponents.css)(["&:not(:first-child):not(:last-child){border-radius:0;}&:not(:last-child)&:first-child{border-bottom-left-radius:0;border-bottom-right-radius:0;}&:not(:first-child)&:last-child{border-top-left-radius:0;border-top-right-radius:0;}&:not(:first-child)&:nth-child(n){border-top-width:0;}"]); // Return the updated css.

  return (0, _styledComponents.css)(["", ";", "{border-top-width:0;border-right-width:0;border-left-width:0;", ";}"], notSingleAccordionCSS, _AccordionHeaderStyled.default, accordionHeaderBorderBottomCSS);
});
var _default = AccordionStyled;
exports.default = _default;