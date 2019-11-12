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

var _Button = require("../../../Button");

var TableCellLink = function TableCellLink(_ref) {
  var col = _ref.col,
      setRef = _ref.setRef,
      row = _ref.row,
      cellProps = _ref.cellProps,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["col", "setRef", "row", "cellProps"]);
  return _react.default.createElement(_Button.ButtonLink, {
    ref: setRef
  }, (0, _get2.default)(row, cellProps.key) || (0, _get2.default)(row, col.id) || (0, _get2.default)(cellProps, 'value'));
};

TableCellLink.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: _propTypes.default.object,
  col: _propTypes.default.object,
  setRef: _propTypes.default.object,
  row: _propTypes.default.object
} : {};
TableCellLink.defaultProps = {
  cellProps: {},
  col: {},
  setRef: null,
  row: {}
};
var _default = TableCellLink;
exports.default = _default;