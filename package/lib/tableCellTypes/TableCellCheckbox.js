"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Checkbox = _interopRequireDefault(require("../Checkbox"));

function TableCellCheckbox(props) {
  var setRef = props.setRef,
      row = props.row,
      cellProps = props.cellProps,
      rest = (0, _objectWithoutProperties2.default)(props, ["setRef", "row", "cellProps"]);
  var checked = Boolean(row.selected) === true || null;
  return _react.default.createElement(_Checkbox.default, Object.assign({
    inputRef: setRef
  }, rest, cellProps, {
    checked: checked
  }));
}

TableCellCheckbox.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: _propTypes.default.object,
  row: _propTypes.default.object,
  setRef: _propTypes.default.object
} : {};
TableCellCheckbox.defaultProps = {
  cellProps: {},
  row: null,
  setRef: null
};
var _default = TableCellCheckbox;
exports.default = _default;