import PropTypes from 'prop-types';
import React from 'react';
import { Typography } from "../../..";

function SidebarHelpText(props) {
  const helpText = props.helpText;
  return helpText ? React.createElement(Typography, {
    color: "sidebarHelpText",
    type: "sidebarHelpText"
  }, helpText) : null;
}

SidebarHelpText.propTypes = process.env.NODE_ENV !== "production" ? {
  helpText: PropTypes.string
} : {};
SidebarHelpText.defaultProps = {
  helpText: null
};
export default SidebarHelpText;