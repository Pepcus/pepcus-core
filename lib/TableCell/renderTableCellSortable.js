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

var _SvgIcon = require("../SvgIcon");

function TableCellSortIcon(props) {
  var sortSchema = props.sortSchema,
      col = props.col;
  return (0, _get2.default)(sortSchema, 'orderBy') === (col.sortId || col.id) ? _react.default.createElement(_SvgIcon.ArrowIcon, {
    width: "18px",
    height: "18px"
  }) : null;
}

TableCellSortIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  sortSchema: _propTypes.default.object,
  col: _propTypes.default.object
} : {};
TableCellSortIcon.defaultProps = {
  sortSchema: null,
  col: null
};

function renderTableCellSortable(props, Component) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["children"]);
  return _react.default.createElement(Component, rest, (0, _get2.default)(props, 'sortSchema.iconPosition') === 'left' ? TableCellSortIcon(props) : null, children, (0, _get2.default)(props, 'sortSchema.iconPosition') === 'left' ? null : TableCellSortIcon(props));
}

renderTableCellSortable.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node
} : {};
renderTableCellSortable.defaultProps = {
  children: null
};
var _default = renderTableCellSortable;
exports.default = _default;