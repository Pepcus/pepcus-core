import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from "../../utils/theme";
import { ListItemStyled } from "../ListItem";
const ListStyled = styled.ul.withConfig({
  displayName: "List__ListStyled",
  componentId: "sc-18ddbdp-0"
})(["position:relative;", ";", "{border-left:", ";border-right:", ";&:first-child{border-top-left-radius:", ";border-top-right-radius:", ";border-top:", ";}&:last-child{border-bottom-left-radius:", ";border-bottom-right-radius:", ";border-bottom:", ";}}", " ", ";"], ({
  listStyle,
  margin,
  padding
}) => css(["list-style:", ";margin:", ";padding:", ";"], listStyle || 'none', margin || 0, padding || 0), ListItemStyled, ({
  flush
}) => flush && 'none', ({
  flush
}) => flush && 'none', ({
  flush
}) => flush && '0', ({
  flush
}) => flush && '0', ({
  flush
}) => flush && 'none', ({
  flush
}) => flush && '0', ({
  flush
}) => flush && '0', ({
  flush
}) => flush && 'none', ({
  backgroundColor,
  borderRadius
}) => css(["background-color:", ";border-radius:", ";"], themeGet(`palette.${backgroundColor}.color`, backgroundColor), borderRadius), themeGet('List.styles'));
/**
 * Lists are continuous, vertical indexes of text or images.
 *
 * @method      List
 * @constructor
 */

const List = React.forwardRef((props, ref) => {
  const as = props.as,
        children = props.children,
        ordered = props.ordered,
        rest = _objectWithoutProperties(props, ["as", "children", "ordered"]);

  const listAs = ordered ? 'ol' : 'ul';
  return React.createElement(ListStyled, Object.assign({
    as: listAs
  }, rest, {
    ref: ref
  }), children);
});
List.propTypes = process.env.NODE_ENV !== "production" ? {
  as: PropTypes.string,

  /**
   * Sets the `background-color` CSS property.
   */
  backgroundColor: PropTypes.string,

  /**
   * Sets the `border-radius` css property.
   */
  borderRadius: PropTypes.string,
  borderStyle: PropTypes.string,

  /**
   * The content of the component.
   */
  children: PropTypes.node,

  /**
   * If `true`, a 1px border is added to the bottom of the list-item.
   */
  divider: PropTypes.bool,

  /**
   * Sets the `list-style` css property.
   */
  listStyle: PropTypes.string,

  /**
   * Sets the `margin` css property.
   */
  margin: PropTypes.string,

  /**
   * Should we render an ordered list `ol` or default to `ul`?
   */
  ordered: PropTypes.bool,

  /**
   * Sets the `padding` css property.
   */
  padding: PropTypes.string
} : {};
List.defaultProps = {
  as: null,
  backgroundColor: 'transparent',
  borderRadius: null,
  borderStyle: 'initial',
  children: null,
  divider: false,
  listStyle: null,
  margin: null,
  ordered: false,
  padding: null
};
List.displayName = 'List';
export default List;