"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _Button = require("../Button");

function TableCellLink(props) {
  var col = props.col,
      setRef = props.setRef,
      row = props.row,
      cellProps = props.cellProps; // for some reason, link doesn't like `as`

  var _cellProps = (0, _omit2.default)(cellProps, ['as']);

  return _react.default.createElement(_Button.ButtonLink, Object.assign({
    ref: setRef
  }, _cellProps), (0, _get2.default)(row, cellProps.key) || (0, _get2.default)(row, col.id) || (0, _get2.default)(cellProps, 'value'));
}

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