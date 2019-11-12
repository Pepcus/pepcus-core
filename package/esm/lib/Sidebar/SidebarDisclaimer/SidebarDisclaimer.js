import PropTypes from 'prop-types';
import React from 'react';
import { Box, Divider, Typography } from "../../..";
import styled from 'styled-components'; // import { AlertCircleOutline } from 'components/Icons';

const SidebarDisclaimerStyled = styled.div.withConfig({
  displayName: "SidebarDisclaimer__SidebarDisclaimerStyled",
  componentId: "sc-1y95nqx-0"
})([""]);
const DisclaimerHeader = styled.div.withConfig({
  displayName: "SidebarDisclaimer__DisclaimerHeader",
  componentId: "sc-1y95nqx-1"
})(["display:flex;align-items:center;padding-left:15px;"]);

function SidebarDisclaimer({
  disclaimer
}) {
  return disclaimer ? React.createElement(SidebarDisclaimerStyled, null, React.createElement(DisclaimerHeader, null, React.createElement(Typography, {
    type: "disclaimer",
    gutterTop: "2px",
    gutterBottom: "0",
    gutterLeft: "5px"
  }, "DISCLAIMER")), React.createElement(Divider, {
    color: "muted",
    gutterBottom: "0"
  }), React.createElement(Box, {
    borderWidth: "0",
    margin: "0",
    padding: "0 15px 20px"
  }, React.createElement(Typography, null, disclaimer))) : null;
}

SidebarDisclaimer.propTypes = process.env.NODE_ENV !== "production" ? {
  disclaimer: PropTypes.string
} : {};
SidebarDisclaimer.defaultProps = {
  disclaimer: ''
};
export default SidebarDisclaimer;