import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import Checkbox from "../../../Checkbox";

const TableCellCheckbox = props => {
  const setRef = props.setRef,
        row = props.row,
        cellProps = props.cellProps,
        rest = _objectWithoutProperties(props, ["setRef", "row", "cellProps"]);

  const checked = Boolean(row.selected) === true || null;
  return React.createElement(Checkbox, Object.assign({
    inputRef: setRef
  }, rest, {
    checked: checked
  }));
};

TableCellCheckbox.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: PropTypes.object,
  row: PropTypes.object,
  setRef: PropTypes.object
} : {};
TableCellCheckbox.defaultProps = {
  cellProps: {},
  row: null,
  setRef: null
};
export default TableCellCheckbox;