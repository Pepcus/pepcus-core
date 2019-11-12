import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import Link from "../Link";
import { callFunc, getHandler } from "../../utils/actions";
import { get, isEmpty } from "../../utils/lodash";
/**
 * Build either a single or multiple links inside a table-cell.
 *
 * @method      TableCellLinks
 * @param       {Object}       props Component props
 * @constructor
 */

function TableCellLinks(props) {
  const cellProps = props.cellProps,
        col = props.col,
        handlers = props.handlers,
        row = props.row;

  const cellType = cellProps.cellType,
        items = cellProps.items,
        onClick = cellProps.onClick,
        cleanCellProps = _objectWithoutProperties(cellProps, ["cellType", "items", "onClick"]); // If we're only rendering a single link.


  if (isEmpty(items)) {
    // Extract the handler for the Link.
    const linkOnClick = getHandler(handlers, onClick); // Extract the value.

    const value = get(row, cellProps.key) || get(row, col.id) || get(cellProps, 'value'); // Handle a single onClick if available.

    const handleOnClick = () => callFunc(linkOnClick, props); // Render the single table cell.


    return React.createElement(Link, Object.assign({
      onClick: handleOnClick
    }, cleanCellProps), value);
  } // If we're rendering multiple links...


  return React.createElement("div", null, items.map((item, itemIdx) => {
    const onClickHandler = item.onClick,
          _item$value = item.value,
          value = _item$value === void 0 ? '' : _item$value,
          rest = _objectWithoutProperties(item, ["onClick", "value"]);

    const key = `${value}__${itemIdx}`; // Extract the handler for each of the items.

    const itemOnClick = getHandler(handlers, onClickHandler); // Handle onClick if available.

    function handleOnClick() {
      callFunc(itemOnClick, props, item);
    } // Render the item.


    return React.createElement(Link, Object.assign({
      gutterLeft: itemIdx !== 0 ? '10px' : '0',
      onClick: handleOnClick
    }, rest, {
      key: key
    }), value);
  }));
}

TableCellLinks.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Props passed down to the inner cell `Link` component.
   */
  cellProps: PropTypes.object,

  /**
   * Info about the current table column.
   */
  col: PropTypes.object,

  /**
   * A map of action handlers passed down from the parent `DataView` component.
   */
  handlers: PropTypes.object,

  /**
   * The data about the current row.
   */
  row: PropTypes.object
} : {};
TableCellLinks.defaultProps = {
  cellProps: null,
  col: null,
  handlers: null,
  row: null
};
export default TableCellLinks;