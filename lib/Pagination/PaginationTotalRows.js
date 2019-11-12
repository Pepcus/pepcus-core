"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Row = _interopRequireDefault(require("../Row"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _number = require("../../utils/number");

var _theme = require("../../utils/theme");

var PaginationTotalRowsStyled = (0, _styledComponents.default)(_Row.default).withConfig({
  displayName: "PaginationTotalRows__PaginationTotalRowsStyled",
  componentId: "sc-1tz6ddj-0"
})(["", ";"], (0, _theme.themeGet)('PaginationTotalRows.styles'));

function PaginationTotalRows(props) {
  var labelProps = props.label,
      totalRows = props.totalRows;
  var label = typeof labelProps === 'string' && labelProps;
  var prefix = typeof labelProps !== 'string' && labelProps.prefix;
  var suffix = typeof labelProps !== 'string' && labelProps.suffix;
  var total = (0, _number.formatNumberWithDelimiter)(totalRows || 0);
  return _react.default.createElement(PaginationTotalRowsStyled, {
    alignItems: "center",
    gutter: false,
    justify: "flex-start",
    width: "auto"
  }, label && _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationLabel"
  }, label), prefix && _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationLabel"
  }, prefix), _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationLabel"
  }, total), suffix && _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterTop: "0",
    type: "paginationLabel"
  }, suffix));
}

PaginationTotalRows.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The display label for the total rows
   */
  label: _propTypes.default.oneOfType([_propTypes.default.shape({
    prefix: _propTypes.default.node,
    suffix: _propTypes.default.node
  }), _propTypes.default.string]),

  /**
   * The number of total rows.
   */
  totalRows: _propTypes.default.number
} : {};
PaginationTotalRows.defaultProps = {
  label: '',
  totalRows: 0
};
var _default = PaginationTotalRows;
exports.default = _default;