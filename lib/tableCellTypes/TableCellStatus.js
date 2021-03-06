"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _toString2 = _interopRequireDefault(require("lodash/toString"));

var _Status = _interopRequireDefault(require("../Status"));

function TableCellStatus(props) {
  var col = props.col,
      setRef = props.setRef,
      row = props.row,
      cellProps = props.cellProps;
  var enums = cellProps.enum || [];
  var value = (0, _toString2.default)(row[cellProps.key]) || (0, _toString2.default)(row[col.id]) || (0, _toString2.default)(cellProps.value);
  var foundValue = enums.find(function (e) {
    return Object.hasOwnProperty.call(e, 'value') && e.value === value;
  });
  var type = foundValue && foundValue.type || '';

  if (enums.length && foundValue) {
    value = foundValue.text || '';
  }

  value = value || '-';
  return _react.default.createElement(_Status.default, {
    ref: setRef,
    value: value,
    color: type
  }, value);
}

TableCellStatus.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: _propTypes.default.object,
  col: _propTypes.default.object,
  setRef: _propTypes.default.object,
  row: _propTypes.default.object
} : {};
TableCellStatus.defaultProps = {
  cellProps: {},
  col: {},
  setRef: null,
  row: {}
};
var _default = TableCellStatus;
exports.default = _default;