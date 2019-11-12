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

var LinkIcon = function LinkIcon(_ref) {
  var setRef = _ref.setRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["setRef"]);
  return _react.default.createElement(_SvgIcon.default, Object.assign({}, rest, {
    ref: setRef
  }), _react.default.createElement("path", {
    d: "M13.05 16.11l-3.549-3.55.977-.976.594.595a.78.78 0 0 0 1.107 0 .783.783 0 0 0 0-1.107l-.595-.595.977-.976 3.55 3.55-3.06 3.06zM5.44 8.5L1.89 4.95l3.06-3.06L8.5 5.44l-.978.977-.594-.595A.783.783 0 0 0 5.82 6.928l.595.594-.977.977zm12.33 3.999L13.115 7.84a.783.783 0 0 0-1.107 0l-1.53 1.53L8.63 7.522l1.53-1.53a.783.783 0 0 0 0-1.106L5.503.229a.782.782 0 0 0-1.107 0L.23 4.395a.783.783 0 0 0 0 1.107l4.657 4.657a.78.78 0 0 0 1.107 0l1.53-1.53 1.848 1.849-1.53 1.53a.783.783 0 0 0 0 1.106l4.656 4.657a.783.783 0 0 0 1.107 0l4.167-4.167a.783.783 0 0 0 0-1.106z",
    fillRule: "evenodd"
  }));
};

LinkIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  viewBox: _propTypes.default.string
} : {};
LinkIcon.defaultProps = {
  viewBox: '0 0 18 18'
};
var _default = LinkIcon;
exports.default = _default;