import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import Box from "../Box";
const SwitchBar = React.forwardRef((props, ref) => {
  const activeBarColor = props.activeBarColor,
        checked = props.checked,
        inactiveBarColor = props.inactiveBarColor,
        inactiveIconColor = props.inactiveIconColor,
        theme = props.theme,
        rest = _objectWithoutProperties(props, ["activeBarColor", "checked", "inactiveBarColor", "inactiveIconColor", "theme"]);

  const backgroundColor = checked ? activeBarColor : inactiveBarColor;
  const borderColor = checked ? activeBarColor : inactiveIconColor;
  const boxStyles = {
    display: 'block',
    left: 0,
    position: 'absolute',
    top: 0,
    transition: theme.transitions.create(['border-color', 'background-color'], {
      duration: theme.transitions.duration.short
    }),
    zIndex: 1
  };
  return React.createElement(Box, Object.assign({
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
  activeBarColor: PropTypes.string,
  checked: PropTypes.bool,
  inactiveBarColor: PropTypes.string,
  inactiveIconColor: PropTypes.string,
  theme: PropTypes.object
} : {};
SwitchBar.defaultProps = {
  activeBarColor: 'success',
  checked: null,
  inactiveBarColor: 'muted',
  inactiveIconColor: 'light',
  theme: null
};
SwitchBar.displayName = 'SwitchBar';
export default withTheme(SwitchBar);