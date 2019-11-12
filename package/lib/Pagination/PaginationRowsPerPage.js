"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Row = _interopRequireDefault(require("../Row"));

var _Select = _interopRequireDefault(require("../Select"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _theme = require("../../utils/theme");

var PaginationRowsPerPageStyled = (0, _styledComponents.default)(_Row.default).withConfig({
  displayName: "PaginationRowsPerPage__PaginationRowsPerPageStyled",
  componentId: "sc-4yh4iy-0"
})(["", ";"], (0, _theme.themeGet)('PaginationRowsPerPage.styles'));

function PaginationRowsPerPage(props) {
  var label = props.label,
      onChange = props.onChange,
      rowsPerPage = props.rowsPerPage,
      rowsPerPageOptions = props.rowsPerPageOptions; // Build the options list for the Select Component.

  var options = rowsPerPageOptions.map(function (option) {
    return {
      label: option,
      value: option
    };
  }); // Build the current default value.

  var value = {
    label: rowsPerPage,
    value: rowsPerPage
  }; // Render the Pagination RowsPerPage.

  return _react.default.createElement(PaginationRowsPerPageStyled, {
    alignItems: "center",
    gutter: false,
    justify: "flex-start",
    width: "auto",
    wrap: "nowrap"
  }, label && _react.default.createElement(_Typography.default, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "10px",
    gutterTop: "0",
    type: "paginationLabel"
  }, label), _react.default.createElement(_Select.default, {
    defaultValue: value,
    isClearable: false,
    isSearchable: false,
    minWidth: "80px",
    name: "pagination-rows-per-page",
    onChange: onChange,
    options: options,
    value: value
  }));
}

PaginationRowsPerPage.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Rows per page Label.
   */
  label: _propTypes.default.string,

  /**
   * `onChange` handler for the select-dropdown.
   */
  onChange: _propTypes.default.func,

  /**
   * The current number of `rowsPerPage`.
   */
  rowsPerPage: _propTypes.default.number,

  /**
   * A list of options for the `rowsPerPage` select-dropdown.
   */
  rowsPerPageOptions: _propTypes.default.array
} : {};
PaginationRowsPerPage.defaultProps = {
  label: '',
  onChange: function onChange() {},
  rowsPerPage: 10,
  rowsPerPageOptions: [20, 10, 5]
};
var _default = PaginationRowsPerPage;
exports.default = _default;