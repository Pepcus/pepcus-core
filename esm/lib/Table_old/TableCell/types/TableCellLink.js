import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import { ButtonLink } from "../../../Button";

const TableCellLink = (_ref) => {
  let col = _ref.col,
      setRef = _ref.setRef,
      row = _ref.row,
      cellProps = _ref.cellProps,
      rest = _objectWithoutProperties(_ref, ["col", "setRef", "row", "cellProps"]);

  return React.createElement(ButtonLink, {
    ref: setRef
  }, _get(row, cellProps.key) || _get(row, col.id) || _get(cellProps, 'value'));
};

TableCellLink.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: PropTypes.object,
  col: PropTypes.object,
  setRef: PropTypes.object,
  row: PropTypes.object
} : {};
TableCellLink.defaultProps = {
  cellProps: {},
  col: {},
  setRef: null,
  row: {}
};
export default TableCellLink;