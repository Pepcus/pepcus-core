import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from "../Box";
const CardStyled = styled(Box).withConfig({
  displayName: "Card__CardStyled",
  componentId: "sc-1iky0mq-0"
})([""]);
/**
 * Card (wrapper) component to render the passed content as children.
 *
 * @method      Card
 * @param       {Object}        props Component props
 * @constructor
 */

function Card(_ref) {
  let children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return React.createElement(CardStyled, rest, children);
}

Card.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The children to render inside Card.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string
} : {};
Card.defaultProps = {
  children: null,
  className: ''
};
export default Card;