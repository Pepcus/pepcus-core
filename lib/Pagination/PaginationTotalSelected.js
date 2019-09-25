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

var PaginationTotalSelectedStyled = (0, _styledComponents.default)(_Row.default).withConfig({
  displayName: "PaginationTotalSelected__PaginationTotalSelectedStyled",
  componentId: "sc-1a6bcd9-0"
})(["", ";"], (0, _theme.themeGet)('PaginationTotalRows.styles'));

function PaginationTotalSelected(props) {
  var count = props.count,
      labelProps = props.label;
  var label = typeof labelProps === 'string' && labelProps;
  var prefix = typeof labelProps !== 'string' && labelProps.prefix;
  var suffix = typeof labelProps !== 'string' && labelProps.suffix;
  return _react.default.createElement(PaginationTotalSelectedStyled, {
    margin: "5px 0 0",
    alignItems: "center",
    gutter: false,
    justify: "flex-start"
  }, label && _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    type: "paginationTotalSelected"
  }, label), prefix && _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationTotalSelected"
  }, prefix), _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationTotalSelected"
  }, (0, _number.formatNumberWithDelimiter)(count)), suffix && _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterTop: "0",
    type: "paginationTotalSelected"
  }, suffix));
}

PaginationTotalSelected.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The display label for the total selected items.
   */
  label: _propTypes.default.oneOfType([_propTypes.default.shape({
    prefix: _propTypes.default.node,
    suffix: _propTypes.default.node
  }), _propTypes.default.string]),

  /**
   * The number of total selected items.
   */
  count: _propTypes.default.number
} : {};
PaginationTotalSelected.defaultProps = {
  label: '',
  count: 0
};
var _default = PaginationTotalSelected;
exports.default = _default;