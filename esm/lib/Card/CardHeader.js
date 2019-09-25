import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Typography from "../Typography";
const CardHeaderStyled = styled.div.withConfig({
  displayName: "CardHeader__CardHeaderStyled",
  componentId: "xgv5zi-0"
})([""]);
/**
 *  Card header section with icons and actions.
 * @method          CardHeader
 * @param           {Object}            props
 * @constructor
 */

function CardHeader(props) {
  const actionComponent = props.actionComponent,
        headerIcon = props.headerIcon,
        subTitle = props.subTitle,
        title = props.title,
        rest = _objectWithoutProperties(props, ["actionComponent", "headerIcon", "subTitle", "title"]);

  return React.createElement(CardHeaderStyled, rest, headerIcon, React.createElement(Typography, {
    type: "display1"
  }, title), React.createElement(Typography, {
    type: "display2"
  }, subTitle), actionComponent);
}

CardHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   *  Custom component for the header section.
   */
  actionComponent: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   *  Icon on the header section.
   */
  headerIcon: PropTypes.node,

  /**
   * Sub title or a small description below title.
   */
  subTitle: PropTypes.string,

  /**
   * Header title.
   */
  title: PropTypes.string
} : {};
CardHeader.defaultProps = {
  actionComponent: null,
  className: '',
  headerIcon: null,
  subTitle: '',
  title: ''
};
export default CardHeader;