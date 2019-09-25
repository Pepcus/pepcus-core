"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../Typography"));

/**
 * A simple anchor link component.
 * NOTE: Uses `Typography` component underneath.
 *
 * @constructor
 */
var Link = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(_Typography.default, Object.assign({
    gutterBottom: "0"
  }, props, {
    ref: ref
  }));
});

Link.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the link.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Set theme styled colors and styling to the underneath `Typography` component.
   */
  type: _propTypes.default.string
} : {};
Link.defaultProps = {
  type: 'link'
};
Link.displayName = 'Link';
var _default = Link;
exports.default = _default;