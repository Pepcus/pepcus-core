"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

var CheckboxIcon = function CheckboxIcon(_ref) {
  var setRef = _ref.setRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["setRef"]);
  return _react.default.createElement(_SvgIcon.default, Object.assign({}, rest, {
    ref: setRef
  }), _react.default.createElement("path", {
    d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
  }));
};

CheckboxIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  setRef: _propTypes.default.func,
  viewBox: _propTypes.default.string
} : {};
CheckboxIcon.defaultProps = {
  setRef: null,
  viewBox: '0 0 24 24'
};
var _default = CheckboxIcon;
exports.default = _default;