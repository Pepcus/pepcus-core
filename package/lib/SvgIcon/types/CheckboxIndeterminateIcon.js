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

var CheckboxIndeterminateIcon = function CheckboxIndeterminateIcon(_ref) {
  var setRef = _ref.setRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["setRef"]);
  return _react.default.createElement(_SvgIcon.default, Object.assign({}, rest, {
    ref: setRef
  }), _react.default.createElement("path", {
    d: "M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z"
  }));
};

CheckboxIndeterminateIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  setRef: _propTypes.default.func,
  viewBox: _propTypes.default.string
} : {};
CheckboxIndeterminateIcon.defaultProps = {
  setRef: null,
  viewBox: '0 0 24 24'
};
var _default = CheckboxIndeterminateIcon;
exports.default = _default;