import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import TableStyled from "./TableStyled";
import TableWrapper from "./TableWrapper";
/**
 * A simple `table` component.
 *
 * @constructor
 */

const Table = React.forwardRef((props, ref) => {
  const boxProps = props.boxProps,
        cols = props.cols,
        rest = _objectWithoutProperties(props, ["boxProps", "cols"]);

  return React.createElement(TableWrapper, Object.assign({
    elevation: 5
  }, boxProps, {
    cols: cols
  }), React.createElement(TableStyled, Object.assign({}, rest, {
    cols: cols,
    ref: ref
  })));
});
Table.displayName = 'Table';
Table.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The props applied to the inner `TableWrapper` component.
   */
  boxProps: PropTypes.object,

  /**
   * The amount of columns that are being rendered.
   */
  cols: PropTypes.number
} : {};
Table.defaultProps = {
  boxProps: null,
  cols: 12
};
export default Table;