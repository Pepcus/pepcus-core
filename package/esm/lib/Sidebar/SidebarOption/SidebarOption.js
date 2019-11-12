import React from 'react';
import PropTypes from 'prop-types';
import { ButtonLink, Col, Row, Typography } from "../..";
import { accessControl, getHandler } from "../../../utils";

function SidebarOption(props) {
  const handlers = props.handlers,
        icon = props.icon,
        onClickProps = props.onClick,
        text = props.text; // Rebuild the onClick handler for the button.

  const onClick = typeof onClickProps === 'string' ? getHandler(handlers, onClickProps) : onClickProps; // Render the sidebar option.

  return React.createElement(ButtonLink, {
    color: "secondary",
    onClick: onClick,
    style: {
      padding: '3px 0',
      display: 'block'
    }
  }, React.createElement(Typography, {
    type: "caption"
  }, React.createElement(Row, {
    padding: "0",
    margin: "0"
  }, React.createElement(Col, {
    size: {
      md: 2
    }
  }, icon), React.createElement(Col, {
    size: {
      md: 10
    }
  }, React.createElement(Typography, {
    type: "sidebarOption",
    color: "sidebarOption"
  }, text)))));
}

SidebarOption.propTypes = process.env.NODE_ENV !== "production" ? {
  handlers: PropTypes.objectOf(PropTypes.func),
  icon: PropTypes.node,
  onClick: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  text: PropTypes.string
} : {};
SidebarOption.defaultProps = {
  handlers: null,
  icon: null,
  onClick: null,
  text: ''
};
export default accessControl(SidebarOption);