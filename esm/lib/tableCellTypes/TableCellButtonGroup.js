import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import ButtonGroup from "../ButtonGroup";

function TableCellButtonGroup(props) {
  const tableCellProps = props.cellProps,
        handlers = props.handlers,
        row = props.row;

  const type = tableCellProps.type,
        buttons = tableCellProps.buttons,
        rest = _objectWithoutProperties(tableCellProps, ["type", "buttons"]); // Return the built ButtonGroup Component.


  return React.createElement(ButtonGroup, Object.assign({
    buttons: buttons,
    handlers: handlers,
    invokeWith: row
  }, rest));
}

TableCellButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: PropTypes.object,
  handlers: PropTypes.object,
  row: PropTypes.object
} : {};
TableCellButtonGroup.defaultProps = {
  cellProps: {},
  handlers: {},
  row: {}
};
export default TableCellButtonGroup;