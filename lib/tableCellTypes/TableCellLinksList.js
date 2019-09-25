"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("../Link"));

var _actions = require("../../utils/actions");

var _lodash = require("../../utils/lodash");

/**
 * Build either a single or multiple links inside a table-cell.
 *
 * @method      TableCellLinks
 * @param       {Object}       props Component props
 * @constructor
 */
function TableCellLinks(props) {
  var cellProps = props.cellProps,
      col = props.col,
      handlers = props.handlers,
      row = props.row;
  var cellType = cellProps.cellType,
      items = cellProps.items,
      onClick = cellProps.onClick,
      cleanCellProps = (0, _objectWithoutProperties2.default)(cellProps, ["cellType", "items", "onClick"]); // If we're only rendering a single link.

  if ((0, _lodash.isEmpty)(items)) {
    // Extract the handler for the Link.
    var linkOnClick = (0, _actions.getHandler)(handlers, onClick); // Extract the value.

    var value = (0, _lodash.get)(row, cellProps.key) || (0, _lodash.get)(row, col.id) || (0, _lodash.get)(cellProps, 'value'); // Handle a single onClick if available.

    var handleOnClick = function handleOnClick() {
      return (0, _actions.callFunc)(linkOnClick, props);
    }; // Render the single table cell.


    return _react.default.createElement(_Link.default, Object.assign({
      onClick: handleOnClick
    }, cleanCellProps), value);
  } // If we're rendering multiple links...


  return _react.default.createElement("div", null, items.map(function (item, itemIdx) {
    var onClickHandler = item.onClick,
        _item$value = item.value,
        value = _item$value === void 0 ? '' : _item$value,
        rest = (0, _objectWithoutProperties2.default)(item, ["onClick", "value"]);
    var key = "".concat(value, "__").concat(itemIdx); // Extract the handler for each of the items.

    var itemOnClick = (0, _actions.getHandler)(handlers, onClickHandler); // Handle onClick if available.

    function handleOnClick() {
      (0, _actions.callFunc)(itemOnClick, props, item);
    } // Render the item.


    return _react.default.createElement(_Link.default, Object.assign({
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
  cellProps: _propTypes.default.object,

  /**
   * Info about the current table column.
   */
  col: _propTypes.default.object,

  /**
   * A map of action handlers passed down from the parent `DataView` component.
   */
  handlers: _propTypes.default.object,

  /**
   * The data about the current row.
   */
  row: _propTypes.default.object
} : {};
TableCellLinks.defaultProps = {
  cellProps: null,
  col: null,
  handlers: null,
  row: null
};
var _default = TableCellLinks;
exports.default = _default;