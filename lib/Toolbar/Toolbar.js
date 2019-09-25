"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("../Box"));

function Toolbar(props) {
  // Define the default `Box` props for the Toolbar.
  var boxProps = (0, _objectSpread2.default)({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: '0',
    borderWidth: '0',
    padding: '16px 0'
  }, props); // Render the `Box` with the updated props.

  return _react.default.createElement(_Box.default, boxProps);
}

Toolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The children to render inside the Toolbar.
   * Usually a couple of `Rows` with `Cols` and inner components.
   */
  children: _propTypes.default.node
} : {};
Toolbar.defaultProps = {
  children: null
};
var _default = Toolbar;
exports.default = _default;