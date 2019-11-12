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

var SwitchIcon = _react.default.forwardRef(function (props, ref) {
  var activeIconColor = props.activeIconColor,
      checked = props.checked,
      children = props.children,
      inactiveIconColor = props.inactiveIconColor,
      theme = props.theme,
      rest = (0, _objectWithoutProperties2.default)(props, ["activeIconColor", "checked", "children", "inactiveIconColor", "theme"]);
  var backgroundColor = checked ? activeIconColor : inactiveIconColor;
  var borderColor = checked ? activeIconColor : inactiveIconColor;
  var iconStyles = {
    left: checked ? '13px' : '3px',
    position: 'absolute',
    top: '3px',
    transition: theme.transitions.create(['left', 'border-color', 'background-color'], {
      duration: theme.transitions.duration.short
    })
  };
  return _react.default.createElement(_Box.default, Object.assign({
    borderRadius: "50%"
  }, rest, {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    height: "14px",
    margin: "0",
    padding: "0",
    ref: ref,
    style: iconStyles,
    width: "14px"
  }));
});

SwitchIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  activeIconColor: _propTypes.default.string,
  checked: _propTypes.default.bool,
  inactiveIconColor: _propTypes.default.string,
  theme: _propTypes.default.object
} : {};
SwitchIcon.defaultProps = {
  children: null,
  activeIconColor: 'white',
  checked: null,
  inactiveIconColor: 'light',
  theme: null
};
SwitchIcon.displayName = 'SwitchIcon';

var _default = (0, _styledComponents.withTheme)(SwitchIcon);

exports.default = _default;