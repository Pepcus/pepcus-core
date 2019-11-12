"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

var GridIcon = function GridIcon(_ref) {
  var setRef = _ref.setRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["setRef"]);
  return _react.default.createElement(_SvgIcon.default, Object.assign({}, rest, {
    ref: setRef
  }), _react.default.createElement("path", {
    d: "M16,20H20V16H16M16,14H20V10H16M10,8H14V4H10M16,8H20V4H16M10,14H14V10H10M4,14H8V10H4M4,20H8V16H4M10,20H14V16H10M4,8H8V4H4V8Z"
  }));
};

GridIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  setRef: _propTypes.default.func,
  viewBox: _propTypes.default.string
} : {};
GridIcon.defaultProps = {
  setRef: null,
  viewBox: '0 0 24 24'
};
var _default = GridIcon;
exports.default = _default;