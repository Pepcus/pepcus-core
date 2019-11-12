"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var CardContentStyled = _styledComponents.default.div.withConfig({
  displayName: "CardContent__CardContentStyled",
  componentId: "sc-18rdvi7-0"
})(["padding:5px;"]);
/**
 * Wrapper to render contents for card component.
 *
 * @method          CardContent
 * @param           {Object}        props
 * @constructor
 */


function CardContent(props) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["children"]);
  return _react.default.createElement(CardContentStyled, rest, children);
}

CardContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   *  Content for the card.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : {};
CardContent.defaultProps = {
  children: null,
  className: ''
};
var _default = CardContent;
exports.default = _default;