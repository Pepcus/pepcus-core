import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Row from "../Row";
import Select from "../Select";
import Typography from "../Typography";
import { themeGet } from "../../utils/theme";
const PaginationRowsPerPageStyled = styled(Row).withConfig({
  displayName: "PaginationRowsPerPage__PaginationRowsPerPageStyled",
  componentId: "sc-4yh4iy-0"
})(["", ";"], themeGet('PaginationRowsPerPage.styles'));

function PaginationRowsPerPage(props) {
  const label = props.label,
        onChange = props.onChange,
        rowsPerPage = props.rowsPerPage,
        rowsPerPageOptions = props.rowsPerPageOptions; // Build the options list for the Select Component.

  const options = rowsPerPageOptions.map(option => ({
    label: option,
    value: option
  })); // Build the current default value.

  const value = {
    label: rowsPerPage,
    value: rowsPerPage
  }; // Render the Pagination RowsPerPage.

  return React.createElement(PaginationRowsPerPageStyled, {
    alignItems: "center",
    gutter: false,
    justify: "flex-start",
    width: "auto",
    wrap: "nowrap"
  }, label && React.createElement(Typography, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "10px",
    gutterTop: "0",
    type: "paginationLabel"
  }, label), React.createElement(Select, {
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
  label: PropTypes.string,

  /**
   * `onChange` handler for the select-dropdown.
   */
  onChange: PropTypes.func,

  /**
   * The current number of `rowsPerPage`.
   */
  rowsPerPage: PropTypes.number,

  /**
   * A list of options for the `rowsPerPage` select-dropdown.
   */
  rowsPerPageOptions: PropTypes.array
} : {};
PaginationRowsPerPage.defaultProps = {
  label: '',
  onChange: () => {},
  rowsPerPage: 10,
  rowsPerPageOptions: [20, 10, 5]
};
export default PaginationRowsPerPage;