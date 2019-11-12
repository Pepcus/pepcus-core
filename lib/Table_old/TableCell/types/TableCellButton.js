"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _Button = _interopRequireDefault(require("../../../Button"));

var TableCellButton = function TableCellButton(_ref) {
  var col = _ref.col,
      setRef = _ref.setRef,
      row = _ref.row,
      cellProps = _ref.cellProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["col", "setRef", "row", "cellProps"]);
  return _react.default.createElement(_Button.default, Object.assign({
    ref: setRef
  }, rest), (0, _get2.default)(row, cellProps.key) || (0, _get2.default)(row, col.id) || (0, _get2.default)(cellProps, 'value'));
};

TableCellButton.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: _propTypes.default.object,
  col: _propTypes.default.object,
  setRef: _propTypes.default.object,
  row: _propTypes.default.object
} : {};
TableCellButton.defaultProps = {
  cellProps: {},
  col: null,
  setRef: null,
  row: {}
};
var _default = TableCellButton;
exports.default = _default;