import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Box from "../Box";
import ButtonGroup from "../ButtonGroup";
const ButtonGroupStyled = styled(ButtonGroup).withConfig({
  displayName: "CardActions__ButtonGroupStyled",
  componentId: "sc-280nf2-0"
})(["flex-flow:wrap;"]);
/**
 * Card Actions component used to add action buttons on the card
 *
 * @method          CardAction
 * @param           {Object}            props
 * @constructor
 */

function CardActions(props) {
  const buttons = props.buttons,
        children = props.children,
        className = props.className,
        handlers = props.handlers,
        restProps = _objectWithoutProperties(props, ["buttons", "children", "className", "handlers"]);

  function renderChildren() {
    if (!_isEmpty(buttons)) {
      return React.createElement(ButtonGroupStyled, {
        buttons: buttons,
        handlers: handlers
      });
    }

    return children;
  }

  return React.createElement(Box, Object.assign({
    borderWidth: "0",
    padding: "5px",
    margin: "0",
    className: className
  }, restProps), renderChildren());
}

CardActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   *  Array of action buttons.
   */
  buttons: PropTypes.array,

  /**
   *  Custom Action component.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Map of button's onClick action handlers
   */
  handlers: PropTypes.object
} : {};
CardActions.defaultProps = {
  buttons: [],
  children: null,
  className: '',
  handlers: null
};
export default CardActions;