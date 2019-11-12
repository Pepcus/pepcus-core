import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Row from "../Row";
import Typography from "../Typography";
import { formatNumberWithDelimiter } from "../../utils/number";
import { themeGet } from "../../utils/theme";
const PaginationTotalSelectedStyled = styled(Row).withConfig({
  displayName: "PaginationTotalSelected__PaginationTotalSelectedStyled",
  componentId: "sc-1a6bcd9-0"
})(["", ";"], themeGet('PaginationTotalRows.styles'));

function PaginationTotalSelected(props) {
  const count = props.count,
        labelProps = props.label;
  const label = typeof labelProps === 'string' && labelProps;
  const prefix = typeof labelProps !== 'string' && labelProps.prefix;
  const suffix = typeof labelProps !== 'string' && labelProps.suffix;
  return React.createElement(PaginationTotalSelectedStyled, {
    margin: "5px 0 0",
    alignItems: "center",
    gutter: false,
    justify: "flex-start"
  }, label && React.createElement(Typography, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    type: "paginationTotalSelected"
  }, label), prefix && React.createElement(Typography, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationTotalSelected"
  }, prefix), React.createElement(Typography, {
    color: "text",
    gutterBottom: "0",
    gutterRight: "4px",
    gutterTop: "0",
    type: "paginationTotalSelected"
  }, formatNumberWithDelimiter(count)), suffix && React.createElement(Typography, {
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
  label: PropTypes.oneOfType([PropTypes.shape({
    prefix: PropTypes.node,
    suffix: PropTypes.node
  }), PropTypes.string]),

  /**
   * The number of total selected items.
   */
  count: PropTypes.number
} : {};
PaginationTotalSelected.defaultProps = {
  label: '',
  count: 0
};
export default PaginationTotalSelected;