import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons/faAngleDoubleLeft';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons/faAngleDoubleRight';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import FaIcon from "../FaIcon";
import Row from "../Row";
import { calculateLastPage } from "../../utils/pagination";
import { getThemeProps } from "../../utils/theme";
import PaginationActionsButton from "./PaginationActionsButton";
import PaginationActionsButtonContainer from "./PaginationActionsButtonContainer";
import PaginationActionsCurrentPage from "./PaginationActionsCurrentPage";
import PaginationActionsLastPage from "./PaginationActionsLastPage";
import PaginationActionsOf from "./PaginationActionsOf";
const PaginationActionsStyled = styled(Row).withConfig({
  displayName: "PaginationActions__PaginationActionsStyled",
  componentId: "sb7dsg-0"
})(["", ";"], getThemeProps('PaginationActions.styles'));

class PaginationActions extends React.Component {
  constructor(props) {
    super(props); // Extract some props.

    this.handleFirstPageClick = event => {
      const onChangePage = this.props.onChangePage;
      onChangePage(event, 1);
    };

    this.handleBackClick = event => {
      const _this$props = this.props,
            currentPage = _this$props.currentPage,
            onChangePage = _this$props.onChangePage;
      onChangePage(event, currentPage - 1);
    };

    this.handleForwardClick = event => {
      const _this$props2 = this.props,
            currentPage = _this$props2.currentPage,
            onChangePage = _this$props2.onChangePage;
      onChangePage(event, currentPage + 1);
    };

    this.handleLastPageClick = event => {
      const lastPage = this.state.lastPage;
      const onChangePage = this.props.onChangePage;
      onChangePage(event, lastPage);
    };

    this.handleInputChange = event => {
      const pageInputValue = this.state.pageInputValue;
      const value = event.target.value;
      pageInputValue !== value && this.setState(() => ({
        pageInputValue: value
      }));
    };

    this.handleInputOnKeyPress = event => {
      if (event.charCode === 13) {
        const _this$state = this.state,
              lastPage = _this$state.lastPage,
              pageInputValue = _this$state.pageInputValue;
        const _this$props3 = this.props,
              currentPage = _this$props3.currentPage,
              onChangePage = _this$props3.onChangePage;
        let value = parseInt(pageInputValue, 10) || lastPage;

        if (value >= lastPage) {
          value = lastPage;
        }

        if (value < 1) {
          value = 1;
        }

        if (currentPage !== value) {
          onChangePage(event, value);
        }

        this.setState(() => ({
          pageInputValue: value
        }));
      }
    };

    const _props$currentPage = props.currentPage,
          _currentPage = _props$currentPage === void 0 ? 1 : _props$currentPage,
          rowsPerPage = props.rowsPerPage,
          totalRows = props.totalRows; // Build the initial state based on passed in props.


    this.state = {
      // Calc the last page from props if possible.
      lastPage: calculateLastPage(totalRows, rowsPerPage),
      // Navigate the user to the initial page value.
      pageInputValue: _currentPage
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const _this$props4 = this.props,
          currentPage = _this$props4.currentPage,
          rowsPerPage = _this$props4.rowsPerPage,
          totalRows = _this$props4.totalRows;
    const prevCurrentPage = prevProps.currentPage,
          prevRowsPerPage = prevProps.rowsPerPage,
          prevTotalRows = prevProps.totalRows;

    if (currentPage !== prevCurrentPage || rowsPerPage !== prevRowsPerPage || totalRows !== prevTotalRows) {
      // NOTE: It's completely alright to update state in 'componentDidUpdate'
      // as long as it is inside a condition.
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(() => ({
        lastPage: calculateLastPage(totalRows, rowsPerPage),
        pageInputValue: currentPage
      }));
    }
  }

  render() {
    const _this$state2 = this.state,
          lastPage = _this$state2.lastPage,
          pageInputValue = _this$state2.pageInputValue;
    const _this$props5 = this.props,
          totalRows = _this$props5.totalRows,
          currentPage = _this$props5.currentPage,
          rowsPerPage = _this$props5.rowsPerPage; // To stay consistent with the current implementation,
    // we will hide the pagination actions if the last page
    // is less than or equal to `1`.

    if (lastPage <= 1) {
      return null;
    }

    return React.createElement(React.Fragment, null, React.createElement(PaginationActionsStyled, {
      alignItems: "center",
      display: {
        xs: 'flex',
        lg: 'none'
      },
      gutter: false,
      height: "100%",
      justify: "space-between",
      wrap: "nowrap"
    }, React.createElement(PaginationActionsButton, {
      border: true,
      color: "paginationButton",
      disabled: currentPage === 1,
      onClick: this.handleBackClick,
      margin: "0 10px 0 0"
    }, React.createElement(FaIcon, {
      icon: faAngleLeft,
      height: "15px",
      width: "15px"
    })), React.createElement(PaginationActionsLastPage, null, currentPage), React.createElement(PaginationActionsOf, null, "of"), React.createElement(PaginationActionsLastPage, null, lastPage), React.createElement(PaginationActionsButton, {
      border: true,
      color: "paginationButton",
      disabled: currentPage >= Math.ceil(totalRows / rowsPerPage),
      onClick: this.handleForwardClick
    }, React.createElement(FaIcon, {
      icon: faAngleRight,
      height: "15px",
      width: "15px"
    }))), React.createElement(PaginationActionsStyled, {
      alignItems: "center",
      display: {
        xs: 'none',
        lg: 'flex'
      },
      gutter: false,
      height: "100%",
      justify: "space-between",
      wrap: "nowrap"
    }, React.createElement(PaginationActionsButtonContainer, null, React.createElement(PaginationActionsButton, {
      border: true,
      color: "paginationButton",
      disabled: currentPage === 1,
      onClick: this.handleFirstPageClick
    }, React.createElement(FaIcon, {
      icon: faAngleDoubleLeft,
      height: "15px",
      width: "15px"
    })), React.createElement(PaginationActionsButton, {
      border: true,
      color: "paginationButton",
      disabled: currentPage === 1,
      onClick: this.handleBackClick
    }, React.createElement(FaIcon, {
      icon: faAngleLeft,
      height: "15px",
      width: "15px"
    }))), React.createElement(PaginationActionsCurrentPage, {
      onKeyPress: this.handleInputOnKeyPress,
      onChange: this.handleInputChange,
      type: "text",
      value: pageInputValue
    }), React.createElement(PaginationActionsOf, null, "of"), React.createElement(PaginationActionsLastPage, null, lastPage), React.createElement(PaginationActionsButtonContainer, null, React.createElement(PaginationActionsButton, {
      border: true,
      color: "paginationButton",
      disabled: currentPage >= Math.ceil(totalRows / rowsPerPage),
      onClick: this.handleForwardClick
    }, React.createElement(FaIcon, {
      icon: faAngleRight,
      height: "15px",
      width: "15px"
    })), React.createElement(PaginationActionsButton, {
      border: true,
      color: "paginationButton",
      disabled: currentPage >= Math.ceil(totalRows / rowsPerPage),
      onClick: this.handleLastPageClick
    }, React.createElement(FaIcon, {
      icon: faAngleDoubleRight,
      height: "15px",
      width: "15px"
    })))));
  }

}

PaginationActions.defaultProps = {
  onChangePage: () => {}
};
PaginationActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The idx of the current page.
   */
  currentPage: PropTypes.number.isRequired,

  /**
   * Action taken upon each page change.
   */
  onChangePage: PropTypes.func,

  /**
   * The amount of rows per page.
   */
  rowsPerPage: PropTypes.number.isRequired,

  /**
   * The total rows available.
   */
  totalRows: PropTypes.number.isRequired
} : {};
export default PaginationActions;