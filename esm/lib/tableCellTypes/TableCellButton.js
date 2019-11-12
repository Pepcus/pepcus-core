import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import Button from "../Button";

function TableCellButton(props) {
  const col = props.col,
        setRef = props.setRef,
        row = props.row,
        cellProps = props.cellProps,
        rest = _objectWithoutProperties(props, ["col", "setRef", "row", "cellProps"]);

  return React.createElement(Button, Object.assign({
    ref: setRef
  }, rest, cellProps), _get(row, cellProps.key) || _get(row, col.id) || _get(cellProps, 'value'));
}

TableCellButton.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: PropTypes.object,
  col: PropTypes.object,
  setRef: PropTypes.object,
  row: PropTypes.object
} : {};
TableCellButton.defaultProps = {
  cellProps: {},
  col: null,
  setRef: null,
  row: {}
};
export default TableCellButton;