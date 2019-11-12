"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../Box"));

function LoadingModalContent(props) {
  var style = props.style,
      rest = (0, _objectWithoutProperties2.default)(props, ["style"]); // Build some styles for the `Box` Component.

  var boxStyles = (0, _objectSpread2.default)({
    minWidth: '230px',
    maxWidth: '500px'
  }, style); // Build the Loading Modal Content.

  return _react.default.createElement(_Box.default, Object.assign({
    elevation: 5,
    margin: "0 auto",
    padding: "30px",
    style: boxStyles,
    width: "auto"
  }, rest));
}

LoadingModalContent.propTypes = process.env.NODE_ENV !== "production" ? {
  style: _propTypes.default.object
} : {};
LoadingModalContent.defaultProps = {
  style: null
};
var _default = LoadingModalContent;
exports.default = _default;