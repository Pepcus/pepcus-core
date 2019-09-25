"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _PreStyled = _interopRequireDefault(require("./PreStyled"));

/**
 * Styled <pre> tag component.
 *
 * @constructor
 */
var Pre = _react.default.forwardRef(function (props, ref) {
  return _react.default.createElement(_PreStyled.default, Object.assign({
    borderRadius: "0",
    borderWidth: "0",
    display: "block",
    margin: "0",
    padding: "10px",
    width: "100%"
  }, props, {
    as: "pre",
    ref: ref
  }));
}); // Update the `displayName` for this component.


Pre.displayName = 'Pre';
var _default = Pre;
exports.default = _default;