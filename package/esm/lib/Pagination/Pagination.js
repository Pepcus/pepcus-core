import PropTypes from 'prop-types';
import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import Col from "../Col";
import Row from "../Row";
import { calculateLastPage } from "../../utils/pagination";
import { getThemeProps } from "../../utils/theme";
import PaginationActions from "./PaginationActions";
import PaginationRowsPerPage from "./PaginationRowsPerPage";
import PaginationTotalRows from "./PaginationTotalRows";
import PaginationTotalSelected from "./PaginationTotalSelected";
const PaginationStyled = styled.div.withConfig({
  displayName: "Pagination__PaginationStyled",
  componentId: "sc-7vagv8-0"
})(["align-items:flex-start;display:flex;flex-direction:column;justify-content:space-between;padding:20px 0;@media (min-width:641px){align-items:center;flex-direction:row;}", ";"], getThemeProps('Pagination.styles'));

class Pagination extends React.Component {
  constructor(...args) {
    super(...args);

    this.onRowsChange = ({
      value
    }) => {
      const onChangeRowsPerPage = this.props.onChangeRowsPerPage;
      onChangeRowsPerPage({
        value: parseInt(value, 10)
      });
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const _this$props = this.props,
          totalRows = _this$props.totalRows,
          onChangePage = _this$props.onChangePage,
          currentPage = _this$props.currentPage,
          rowsPerPage = _this$props.rowsPerPage; // Calculate the last page of the pagination.

    const lastPage = calculateLastPage(totalRows, rowsPerPage); // If the current page is greater than the last page,
    // then we will throw the onChangePage event.

    if (currentPage > lastPage) {
      onChangePage(null, lastPage);
    }
  }

  render() {
    const _this$props2 = this.props,
          currentPage = _this$props2.currentPage,
          onChangePage = _this$props2.onChangePage,
          rowsPerPage = _this$props2.rowsPerPage,
          rowsPerPageLabel = _this$props2.rowsPerPageLabel,
          rowsPerPageOptions = _this$props2.rowsPerPageOptions,
          style = _this$props2.style,
          selected = _this$props2.selected,
          totalRows = _this$props2.totalRows,
          totalRowsLabel = _this$props2.totalRowsLabel; // Determine the selected count.

    const selectedCount = selected ? _isEmpty(selected.items) ? selected.itemCount : selected.items.length : null;
    const isSelectedCountPresent = typeof selectedCount === 'number';
    return React.createElement(PaginationStyled, {
      style: style
    }, React.createElement(Row, {
      alignItems: "center",
      gutter: false,
      width: "100%"
    }, React.createElement(Col, {
      gutter: false
    }, React.createElement(Row, {
      direction: isSelectedCountPresent ? 'column' : null,
      gutter: false,
      height: "100%",
      justify: "flex-start"
    }, !_isEmpty(totalRowsLabel) && React.createElement(PaginationTotalRows, {
      label: totalRowsLabel,
      totalRows: totalRows
    }), isSelectedCountPresent && React.createElement(PaginationTotalSelected, Object.assign({
      count: selectedCount
    }, selected)))), React.createElement(Col, {
      gutter: false
    }, React.createElement(Row, {
      alignItems: "center",
      gutter: false,
      height: "100%",
      justify: {
        xs: 'flex-end',
        md: 'center'
      }
    }, React.createElement(PaginationActions, {
      currentPage: currentPage,
      onChangePage: onChangePage,
      rowsPerPage: rowsPerPage,
      totalRows: totalRows
    }))), React.createElement(Col, {
      display: {
        xs: 'none',
        md: 'block'
      },
      gutter: false
    }, React.createElement(Row, {
      alignItems: "center",
      justify: "flex-end",
      gutter: false
    }, React.createElement(PaginationRowsPerPage, {
      label: rowsPerPageLabel,
      onChange: this.onRowsChange,
      rowsPerPage: rowsPerPage,
      rowsPerPageOptions: rowsPerPageOptions
    })))));
  }

}

Pagination.defaultProps = {
  currentPage: 0,
  onChangePage: () => {},
  onChangeRowsPerPage: () => {},
  rowsPerPage: 10,
  rowsPerPageLabel: 'Rows per page:',
  rowsPerPageOptions: [5, 10, 15, 20],
  selected: {},
  style: null,
  totalRows: 0,
  totalRowsLabel: null
};
Pagination.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Index of the current page
   */
  currentPage: PropTypes.number,

  /**
   * The number of rows per page
   */
  rowsPerPage: PropTypes.number,

  /**
   * The display label for the rows per page
   */
  rowsPerPageLabel: PropTypes.node,

  /**
   * The options of the rows per page selection field
   */
  rowsPerPageOptions: PropTypes.array,

  /**
   * Define and overwrite the CSS styles.
   */
  style: PropTypes.object,

  /**
   * The total number of rows
   */
  totalRows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
   * The display label for the total rows
   */
  totalRowsLabel: PropTypes.oneOfType([PropTypes.shape({
    prefix: PropTypes.node,
    suffix: PropTypes.node
  }), PropTypes.string]),

  /**
   * Event fired upon a successful page change
   */
  onChangePage: PropTypes.func,

  /**
   * Event fired upon a successful rows per page change
   */
  onChangeRowsPerPage: PropTypes.func,

  /**
   * Props for the selected items count.
   */
  selected: PropTypes.object
} : {};
export default Pagination;