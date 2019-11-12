import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Box from "../Box";
import Row from "../Row";
import { themeGet } from "../../utils/theme";
const AlertStyled = styled(Box).withConfig({
  displayName: "Alert__AlertStyled",
  componentId: "wnie6l-0"
})(["", ";"], ({
  backgroundColor,
  borderColor
}) => css(["background-color:", ";border-color:", ";position:relative;"], themeGet(`palette.${backgroundColor}.backgroundColor`, backgroundColor), themeGet(`palette.${borderColor}.borderColor`, borderColor)));
const Alert = React.forwardRef((props, ref) => {
  const children = props.children,
        rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(AlertStyled, Object.assign({
    padding: "12px 20px"
  }, rest, {
    ref: ref
  }), React.createElement(Row, {
    alignItems: "left",
    justify: "left",
    gutter: false
  }, children));
});
Alert.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node
} : {};
Alert.defaultProps = {
  children: null
};
export default Alert;