"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _SwitchBase = _interopRequireDefault(require("../SwitchBase"));

var _SwitchBar = _interopRequireDefault(require("./SwitchBar"));

var _SwitchIcon = _interopRequireDefault(require("./SwitchIcon"));

var _SwitchStyled = _interopRequireDefault(require("./SwitchStyled"));

/**
 * A simple Switch.
 *
 * @method      Switch
 * @param       {Object} props The props
 * @constructor
 */
function Switch(props) {
  var checkedIcon = props.checkedIcon,
      isDisabled = props.isDisabled,
      icon = props.icon,
      margin = props.margin,
      onClick = props.onClick,
      useSameIcon = props.useSameIcon,
      rest = (0, _objectWithoutProperties2.default)(props, ["checkedIcon", "isDisabled", "icon", "margin", "onClick", "useSameIcon"]);
  var switchBaseStyle = {
    height: '20px',
    width: '30px',
    zIndex: 2
  };
  return _react.default.createElement(_SwitchStyled.default, {
    isDisabled: isDisabled,
    margin: margin,
    onClick: onClick
  }, _react.default.createElement(_SwitchBase.default, Object.assign({
    checkedIcon: checkedIcon,
    isDisabled: isDisabled,
    icon: icon,
    style: switchBaseStyle,
    useSameIcon: useSameIcon
  }, rest)), _react.default.createElement(_SwitchBar.default, Object.assign({
    disabled: isDisabled
  }, rest)));
}

Switch.propTypes = process.env.NODE_ENV !== "production" ? {
  activeBarColor: _propTypes.default.string,
  activeIconColor: _propTypes.default.string,
  checked: _propTypes.default.bool,
  checkedIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),
  inactiveBarColor: _propTypes.default.string,
  inactiveIconColor: _propTypes.default.string,
  isDisabled: _propTypes.default.bool,
  margin: _propTypes.default.string,
  onClick: _propTypes.default.func,
  useSameIcon: _propTypes.default.bool
} : {};
Switch.defaultProps = {
  activeBarColor: 'success',
  activeIconColor: 'white',
  checked: null,
  checkedIcon: null,
  icon: _SwitchIcon.default,
  inactiveBarColor: 'muted',
  inactiveIconColor: 'light',
  isDisabled: null,
  margin: null,
  onClick: null,
  useSameIcon: true
};
var _default = Switch;
exports.default = _default;