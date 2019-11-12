"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup"));

function TableCellButtonGroup(props) {
  var tableCellProps = props.cellProps,
      handlers = props.handlers,
      row = props.row;
  var type = tableCellProps.type,
      buttons = tableCellProps.buttons,
      rest = (0, _objectWithoutProperties2.default)(tableCellProps, ["type", "buttons"]); // Return the built ButtonGroup Component.

  return _react.default.createElement(_ButtonGroup.default, Object.assign({
    buttons: buttons,
    handlers: handlers,
    invokeWith: row
  }, rest));
}

TableCellButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: _propTypes.default.object,
  handlers: _propTypes.default.object,
  row: _propTypes.default.object
} : {};
TableCellButtonGroup.defaultProps = {
  cellProps: {},
  handlers: {},
  row: {}
};
var _default = TableCellButtonGroup;
exports.default = _default;