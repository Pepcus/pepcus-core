import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Row from "../Row";
import Typography from "../Typography";
import { formatNumberWithDelimiter } from "../../utils/number";
import { themeGet } from "../../utils/theme";
const PaginationTotalRowsStyled = styled(Row).withConfig({
  displayName: "PaginationTotalRows__PaginationTotalRowsStyled",
  componentId: "sc-1tz6ddj-0"
})(["", ";"], themeGet('PaginationTotalRows.styles'));

function PaginationTotalRows(props) {
  const labelProps = props.label,
        totalRows = props.totalRows;
  const label = typeof labelProps === 'string' && labelProps;
  const prefix = typeof labelProps !== 'string' && labelProps.prefix;
  const suffix = typeof labelProps !== 'string' && labelProps.suffix;
  const total = formatNumberWithDelimiter(totalRows || 0);
  return React.createElement(PaginationTotalRowsStyled, {
    alignItems: "center",
    gutter: false,
    justify: "flex-start",
    width: "auto"
  }, label && React.createElement(Typography, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationLabel"
  }, label), prefix && React.createElement(Typography, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationLabel"
  }, prefix), React.createElement(Typography, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationLabel"
  }, total), suffix && React.createElement(Typography, {
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
  label: PropTypes.oneOfType([PropTypes.shape({
    prefix: PropTypes.node,
    suffix: PropTypes.node
  }), PropTypes.string]),

  /**
   * The number of total rows.
   */
  totalRows: PropTypes.number
} : {};
PaginationTotalRows.defaultProps = {
  label: '',
  totalRows: 0
};
export default PaginationTotalRows;