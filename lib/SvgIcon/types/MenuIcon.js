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

var MenuIcon = function MenuIcon(_ref) {
  var setRef = _ref.setRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["setRef"]);
  return _react.default.createElement(_SvgIcon.default, Object.assign({}, rest, {
    ref: setRef
  }), _react.default.createElement("path", {
    d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
  }));
};

MenuIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  setRef: _propTypes.default.func,
  viewBox: _propTypes.default.string
} : {};
MenuIcon.defaultProps = {
  setRef: null,
  viewBox: '0 0 24 24'
};
var _default = MenuIcon;
exports.default = _default;