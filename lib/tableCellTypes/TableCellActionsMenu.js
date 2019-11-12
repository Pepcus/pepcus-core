"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ActionsMenu = _interopRequireDefault(require("../../components/ActionsMenu"));

var _actions = require("../../utils/actions");

/**
 * Replace `onClick` handler refs with actual function calls.
 *
 * @method _addHandlersToMenuItems
 * @private
 * @param  {Array}                items    The list of menuItems
 * @param  {Object}               handlers The map of action handlers
 * @param  {Object}               row      The info about the current table row
 * @return {Array}
 */
function _addHandlersToMenuItems(items, handlers, row) {
  // `items` is an Array of Arrays.
  return items.map( // For each of the `item` in the `itemsList`,
  // replace the `onClick` handler with the function
  // from the passed in `handlers`, if present;
  // invoke that `onClick` function with the `row` data.
  function (itemsList) {
    return (0, _actions.replaceHandlerRefs)(itemsList, handlers, null, row);
  });
}

function TableCellActionsMenu(props) {
  var tableCellProps = props.cellProps,
      handlers = props.handlers,
      row = props.row;
  var type = tableCellProps.type,
      menuItems = tableCellProps.menuItems,
      actionsProps = (0, _objectWithoutProperties2.default)(tableCellProps, ["type", "menuItems"]); // Update the `menuItems` by replacing `onClick` references with actual functions.

  var updatedMenuItems = _addHandlersToMenuItems(menuItems, handlers, row); // Return the built ActionsMenu Component.


  return _react.default.createElement(_ActionsMenu.default, Object.assign({
    data: row,
    handlers: handlers,
    menuItems: updatedMenuItems,
    snapToButton: true
  }, actionsProps));
}

TableCellActionsMenu.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: _propTypes.default.object,
  handlers: _propTypes.default.object,
  row: _propTypes.default.object
} : {};
TableCellActionsMenu.defaultProps = {
  cellProps: {},
  handlers: {},
  row: {}
};
var _default = TableCellActionsMenu;
exports.default = _default;