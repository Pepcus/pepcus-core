"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var CardStyled = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "Card__CardStyled",
  componentId: "sc-1iky0mq-0"
})([""]);
/**
 * Card (wrapper) component to render the passed content as children.
 *
 * @method      Card
 * @param       {Object}        props Component props
 * @constructor
 */

function Card(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return _react.default.createElement(CardStyled, rest, children);
}

Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The children to render inside Card.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : {};
Card.defaultProps = {
  children: null,
  className: ''
};
var _default = Card;
exports.default = _default;