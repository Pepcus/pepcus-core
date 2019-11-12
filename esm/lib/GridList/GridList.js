import _objectSpread from "@babel/runtime/helpers/objectSpread";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme";
const GridListStyled = styled.ul.withConfig({
  displayName: "GridList__GridListStyled",
  componentId: "sc-1rmpu4v-0"
})(["-webkit-overflow-scrolling:touch;display:flex;flex-wrap:wrap;list-style:none;margin:0;margin-left:", ";margin-right:", ";padding:0;", ";"], ({
  spacing
}) => spacing && `-${spacing / 2}px`, ({
  spacing
}) => spacing && `-${spacing / 2}px`, getThemeProps('GridList.styles'));

function GridList(props) {
  const cellHeight = props.cellHeight,
        children = props.children,
        cols = props.cols,
        spacing = props.spacing;
  return React.createElement(GridListStyled, {
    cols: cols,
    spacing: spacing
  }, React.Children.map(children, child => {
    // The child must be a valid element and not a Fragment.
    // With Fragments we don't get a concrete container with sub-children,
    // rather we just get an array of children.
    if (!React.isValidElement(child) || child.type === React.Fragment) {
      return null;
    } // Determine the columns and rows for the child


    const childCols = child.props.cols || 1;
    const childRows = child.props.rows || 1; // Render each child with updated style

    return React.cloneElement(child, {
      style: _objectSpread({
        width: `${100 / cols * childCols}%`,
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
}

GridList.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Set a pre-determined cell-height for a single `GridList` item.
   * Set to `auto` to have the inner children determine their own height.
   */
  cellHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),

  /**
   * The items of the `GridList`.
   */
  children: PropTypes.node.isRequired,

  /**
   * Number of grid-columns.
   */
  cols: PropTypes.number,

  /**
   * The spacing to be added between the `GridList` items.
   */
  spacing: PropTypes.number
} : {};
GridList.defaultProps = {
  cellHeight: 200,
  cols: 2,
  spacing: 10
};
export default GridList;