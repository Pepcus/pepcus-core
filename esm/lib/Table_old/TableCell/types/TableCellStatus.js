import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import _toString from 'lodash/toString';
import Status from "../../../Status";

const TableCellStatus = (_ref) => {
  let col = _ref.col,
      setRef = _ref.setRef,
      row = _ref.row,
      cellProps = _ref.cellProps,
      rest = _objectWithoutProperties(_ref, ["col", "setRef", "row", "cellProps"]);

  const enums = cellProps.enum || [];

  let value = _toString(row[cellProps.key]) || _toString(row[col.id]) || _toString(cellProps.value);

  const foundValue = enums.find(e => Object.hasOwnProperty.call(e, 'value') && e.value === value);
  const type = foundValue && foundValue.type || '';

  if (enums.length && foundValue) {
    value = foundValue.text || '';
  }

  value = value || '-';
  return React.createElement(Status, {
    ref: setRef,
    value: value,
    color: type
  }, value);
};

TableCellStatus.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: PropTypes.object,
  col: PropTypes.object,
  setRef: PropTypes.object,
  row: PropTypes.object
} : {};
TableCellStatus.defaultProps = {
  cellProps: {},
  col: {},
  setRef: null,
  row: {}
};
export default TableCellStatus;