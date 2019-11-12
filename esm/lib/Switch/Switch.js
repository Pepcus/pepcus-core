import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import SwitchBase from "../SwitchBase";
import SwitchBar from "./SwitchBar";
import SwitchIcon from "./SwitchIcon";
import SwitchStyled from "./SwitchStyled";
/**
 * A simple Switch.
 *
 * @method      Switch
 * @param       {Object} props The props
 * @constructor
 */

function Switch(props) {
  const checkedIcon = props.checkedIcon,
        isDisabled = props.isDisabled,
        icon = props.icon,
        margin = props.margin,
        onClick = props.onClick,
        useSameIcon = props.useSameIcon,
        rest = _objectWithoutProperties(props, ["checkedIcon", "isDisabled", "icon", "margin", "onClick", "useSameIcon"]);

  const switchBaseStyle = {
    height: '20px',
    width: '30px',
    zIndex: 2
  };
  return React.createElement(SwitchStyled, {
    isDisabled: isDisabled,
    margin: margin,
    onClick: onClick
  }, React.createElement(SwitchBase, Object.assign({
    checkedIcon: checkedIcon,
    isDisabled: isDisabled,
    icon: icon,
    style: switchBaseStyle,
    useSameIcon: useSameIcon
  }, rest)), React.createElement(SwitchBar, Object.assign({
    disabled: isDisabled
  }, rest)));
}

Switch.propTypes = process.env.NODE_ENV !== "production" ? {
  activeBarColor: PropTypes.string,
  activeIconColor: PropTypes.string,
  checked: PropTypes.bool,
  checkedIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  inactiveBarColor: PropTypes.string,
  inactiveIconColor: PropTypes.string,
  isDisabled: PropTypes.bool,
  margin: PropTypes.string,
  onClick: PropTypes.func,
  useSameIcon: PropTypes.bool
} : {};
Switch.defaultProps = {
  activeBarColor: 'success',
  activeIconColor: 'white',
  checked: null,
  checkedIcon: null,
  icon: SwitchIcon,
  inactiveBarColor: 'muted',
  inactiveIconColor: 'light',
  isDisabled: null,
  margin: null,
  onClick: null,
  useSameIcon: true
};
export default Switch;