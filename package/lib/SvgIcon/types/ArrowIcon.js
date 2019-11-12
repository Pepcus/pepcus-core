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

/**
 * Render a arrow based on a given direction
 *
 * @method renderDirectionalArrowIcon
 * @param  {string}                   direction The direction of the arrow
 * @return {JSX}
 */
var renderDirectionalArrowIcon = function renderDirectionalArrowIcon(direction) {
  switch (direction) {
    case 'up':
      return _react.default.createElement("path", {
        d: "M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"
      });

    case 'right':
      return _react.default.createElement("path", {
        d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
      });

    case 'down':
      return _react.default.createElement("path", {
        d: "M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z"
      });

    case 'left':
      return _react.default.createElement("path", {
        d: "M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
      });

    default:
      return null;
  }
};

var ArrowIcon = function ArrowIcon(_ref) {
  var direction = _ref.direction,
      setRef = _ref.setRef,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["direction", "setRef"]);
  return _react.default.createElement(_SvgIcon.default, Object.assign({}, rest, {
    ref: setRef
  }), renderDirectionalArrowIcon(direction));
};

ArrowIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  direction: _propTypes.default.oneOf(['up', 'right', 'down', 'left']),
  setRef: _propTypes.default.func,
  viewBox: _propTypes.default.string
} : {};
ArrowIcon.defaultProps = {
  direction: 'up',
  setRef: null,
  viewBox: '0 0 24 24'
};
var _default = ArrowIcon;
exports.default = _default;