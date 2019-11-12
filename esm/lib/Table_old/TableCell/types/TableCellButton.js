import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import Button from "../../../Button";

const TableCellButton = (_ref) => {
  let col = _ref.col,
      setRef = _ref.setRef,
      row = _ref.row,
      cellProps = _ref.cellProps,
      rest = _objectWithoutProperties(_ref, ["col", "setRef", "row", "cellProps"]);

  return React.createElement(Button, Object.assign({
    ref: setRef
  }, rest), _get(row, cellProps.key) || _get(row, col.id) || _get(cellProps, 'value'));
};

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