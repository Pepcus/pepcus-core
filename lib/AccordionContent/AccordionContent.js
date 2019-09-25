"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _AccordionContentStyled = _interopRequireDefault(require("./AccordionContentStyled"));

/**
 * The content component for the Accordion.
 *
 * @method      AccordionContent
 * @param       {Object}        props Component props
 * @constructor
 */
function AccordionContent(props) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["children"]); // Render the AccordionContent.

  return _react.default.createElement(_AccordionContentStyled.default, Object.assign({
    borderRadius: "0",
    borderWidth: "0",
    margin: "0",
    padding: "12px 15px"
  }, rest), children);
}

AccordionContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the AccordionContent.
   */
  children: _propTypes.default.node,

  /**
   * Either collapse or expand the Accordion.
   */
  expanded: _propTypes.default.bool
} : {};
AccordionContent.defaultProps = {
  children: null,
  expanded: null
};
var _default = AccordionContent;
exports.default = _default;