import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme"; // const GridListItemContainer = styled.div`
//     display: block;
//     height: 100%;
//     overflow: auto;
//     position: relative;
//     /**
//      * Add all of the remaining styles from theme
//      */
//     ${getThemeProps('GridListItemContainer.styles')};
// `;

const GridListItemStyled = styled.li.withConfig({
  displayName: "GridListItem__GridListItemStyled",
  componentId: "sc-1m2x2g7-0"
})(["box-sizing:border-box;display:block;flex-shrink:0;margin:0;padding:0;position:relative;", ";"], getThemeProps('GridListItem.styles'));

function GridListItem(props) {
  const children = props.children,
        rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(GridListItemStyled, rest, children);
}

GridListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The root node to be rendered into the `GridListItem`
   */
  children: PropTypes.node.isRequired
} : {};
export default GridListItem;