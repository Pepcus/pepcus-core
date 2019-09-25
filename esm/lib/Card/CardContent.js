import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
const CardContentStyled = styled.div.withConfig({
  displayName: "CardContent__CardContentStyled",
  componentId: "sc-18rdvi7-0"
})(["padding:5px;"]);
/**
 * Wrapper to render contents for card component.
 *
 * @method          CardContent
 * @param           {Object}        props
 * @constructor
 */

function CardContent(props) {
  const children = props.children,
        rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(CardContentStyled, rest, children);
}

CardContent.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   *  Content for the card.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string
} : {};
CardContent.defaultProps = {
  children: null,
  className: ''
};
export default CardContent;