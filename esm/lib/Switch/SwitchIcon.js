import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import Box from "../Box";
const SwitchIcon = React.forwardRef((props, ref) => {
  const activeIconColor = props.activeIconColor,
        checked = props.checked,
        children = props.children,
        inactiveIconColor = props.inactiveIconColor,
        theme = props.theme,
        rest = _objectWithoutProperties(props, ["activeIconColor", "checked", "children", "inactiveIconColor", "theme"]);

  const backgroundColor = checked ? activeIconColor : inactiveIconColor;
  const borderColor = checked ? activeIconColor : inactiveIconColor;
  const iconStyles = {
    left: checked ? '13px' : '3px',
    position: 'absolute',
    top: '3px',
    transition: theme.transitions.create(['left', 'border-color', 'background-color'], {
      duration: theme.transitions.duration.short
    })
  };
  return React.createElement(Box, Object.assign({
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
  children: PropTypes.node,
  activeIconColor: PropTypes.string,
  checked: PropTypes.bool,
  inactiveIconColor: PropTypes.string,
  theme: PropTypes.object
} : {};
SwitchIcon.defaultProps = {
  children: null,
  activeIconColor: 'white',
  checked: null,
  inactiveIconColor: 'light',
  theme: null
};
SwitchIcon.displayName = 'SwitchIcon';
export default withTheme(SwitchIcon);