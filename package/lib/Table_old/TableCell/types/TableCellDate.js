"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _date = require("../../../../utils/date");

function TableCellDate(_ref) {
  var col = _ref.col,
      row = _ref.row,
      cellProps = _ref.cellProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["col", "row", "cellProps"]);
  var format = (0, _get2.default)(cellProps, 'format');
  var value = (0, _get2.default)(row, cellProps.key) || (0, _get2.default)(row, col.id) || (0, _get2.default)(cellProps, 'value'); // If the value is a number, we need to fix its length due to Java APIs
  // returning a 10 digit timestamp.

  if (typeof value === 'number') {
    value = String(value).length >= 13 ? Number(value) : Number(value) * 1000;
  } // Format the date.


  var date = (0, _date.formatDate)(value, format); // FIX: for the `date-fns` library, where if we send an invalid date, or none at all,
  // it returns an `Invalid Date` string. We just want to make sure we don't display
  // that string to the user. Thus we return a single hyphen '-', just like other table cells.

  if (!value || date.toLowerCase() === 'invalid date') {
    return '-';
  } // Return the formatted date otherwise.


  return date;
}

TableCellDate.propTypes = {
  cellProps: _propTypes.default.object,
  col: _propTypes.default.object,
  row: _propTypes.default.object
};
TableCellDate.defaultProps = {
  cellProps: {},
  col: {},
  row: {}
};
var _default = TableCellDate;
exports.default = _default;