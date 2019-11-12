"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _Box = _interopRequireDefault(require("../Box"));

var SwitchBar = _react.default.forwardRef(function (props, ref) {
  var activeBarColor = props.activeBarColor,
      checked = props.checked,
      inactiveBarColor = props.inactiveBarColor,
      inactiveIconColor = props.inactiveIconColor,
      theme = props.theme,
      rest = (0, _objectWithoutProperties2.default)(props, ["activeBarColor", "checked", "inactiveBarColor", "inactiveIconColor", "theme"]);
  var backgroundColor = checked ? activeBarColor : inactiveBarColor;
  var borderColor = checked ? activeBarColor : inactiveIconColor;
  var boxStyles = {
    display: 'block',
    left: 0,
    position: 'absolute',
    top: 0,
    transition: theme.transitions.create(['border-color', 'background-color'], {
      duration: theme.transitions.duration.short
    }),
    zIndex: 1
  };
  return _react.default.createElement(_Box.default, Object.assign({
    borderRadius: "100px"
  }, rest, {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    height: "20px",
    margin: "0",
    padding: "0",
    ref: ref,
    style: boxStyles,
    width: "30px"
  }));
});

SwitchBar.propTypes = process.env.NODE_ENV !== "production" ? {
  activeBarColor: _propTypes.default.string,
  checked: _propTypes.default.bool,
  inactiveBarColor: _propTypes.default.string,
  inactiveIconColor: _propTypes.default.string,
  theme: _propTypes.default.object
} : {};
SwitchBar.defaultProps = {
  activeBarColor: 'success',
  checked: null,
  inactiveBarColor: 'muted',
  inactiveIconColor: 'light',
  theme: null
};
SwitchBar.displayName = 'SwitchBar';

var _default = (0, _styledComponents.withTheme)(SwitchBar);

exports.default = _default;