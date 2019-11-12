"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _faAngleDoubleLeft = require("@fortawesome/free-solid-svg-icons/faAngleDoubleLeft");

var _faAngleDoubleRight = require("@fortawesome/free-solid-svg-icons/faAngleDoubleRight");

var _faAngleLeft = require("@fortawesome/free-solid-svg-icons/faAngleLeft");

var _faAngleRight = require("@fortawesome/free-solid-svg-icons/faAngleRight");

var _FaIcon = _interopRequireDefault(require("../FaIcon"));

var _Row = _interopRequireDefault(require("../Row"));

var _pagination = require("../../utils/pagination");

var _theme = require("../../utils/theme");

var _PaginationActionsButton = _interopRequireDefault(require("./PaginationActionsButton"));

var _PaginationActionsButtonContainer = _interopRequireDefault(require("./PaginationActionsButtonContainer"));

var _PaginationActionsCurrentPage = _interopRequireDefault(require("./PaginationActionsCurrentPage"));

var _PaginationActionsLastPage = _interopRequireDefault(require("./PaginationActionsLastPage"));

var _PaginationActionsOf = _interopRequireDefault(require("./PaginationActionsOf"));

var PaginationActionsStyled = (0, _styledComponents.default)(_Row.default).withConfig({
  displayName: "PaginationActions__PaginationActionsStyled",
  componentId: "sb7dsg-0"
})(["", ";"], (0, _theme.getThemeProps)('PaginationActions.styles'));

var PaginationActions =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(PaginationActions, _React$Component);

  function PaginationActions(props) {
    var _this;

    (0, _classCallCheck2.default)(this, PaginationActions);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PaginationActions).call(this, props)); // Extract some props.

    _this.handleFirstPageClick = function (event) {
      var onChangePage = _this.props.onChangePage;
      onChangePage(event, 1);
    };

    _this.handleBackClick = function (event) {
      var _this$props = _this.props,
          currentPage = _this$props.currentPage,
          onChangePage = _this$props.onChangePage;
      onChangePage(event, currentPage - 1);
    };

    _this.handleForwardClick = function (event) {
      var _this$props2 = _this.props,
          currentPage = _this$props2.currentPage,
          onChangePage = _this$props2.onChangePage;
      onChangePage(event, currentPage + 1);
    };

    _this.handleLastPageClick = function (event) {
      var lastPage = _this.state.lastPage;
      var onChangePage = _this.props.onChangePage;
      onChangePage(event, lastPage);
    };

    _this.handleInputChange = function (event) {
      var pageInputValue = _this.state.pageInputValue;
      var value = event.target.value;
      pageInputValue !== value && _this.setState(function () {
        return {
          pageInputValue: value
        };
      });
    };

    _this.handleInputOnKeyPress = function (event) {
      if (event.charCode === 13) {
        var _this$state = _this.state,
            lastPage = _this$state.lastPage,
            pageInputValue = _this$state.pageInputValue;
        var _this$props3 = _this.props,
            currentPage = _this$props3.currentPage,
            onChangePage = _this$props3.onChangePage;
        var value = parseInt(pageInputValue, 10) || lastPage;

        if (value >= lastPage) {
          value = lastPage;
        }

        if (value < 1) {
          value = 1;
        }

        if (currentPage !== value) {
          onChangePage(event, value);
        }

        _this.setState(function () {
          return {
            pageInputValue: value
          };
        });
      }
    };

    var _props$currentPage = props.currentPage,
        _currentPage = _props$currentPage === void 0 ? 1 : _props$currentPage,
        rowsPerPage = props.rowsPerPage,
        totalRows = props.totalRows; // Build the initial state based on passed in props.


    _this.state = {
      // Calc the last page from props if possible.
      lastPage: (0, _pagination.calculateLastPage)(totalRows, rowsPerPage),
      // Navigate the user to the initial page value.
      pageInputValue: _currentPage
    };
    return _this;
  }

  (0, _createClass2.default)(PaginationActions, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props4 = this.props,
          currentPage = _this$props4.currentPage,
          rowsPerPage = _this$props4.rowsPerPage,
          totalRows = _this$props4.totalRows;
      var prevCurrentPage = prevProps.currentPage,
          prevRowsPerPage = prevProps.rowsPerPage,
          prevTotalRows = prevProps.totalRows;

      if (currentPage !== prevCurrentPage || rowsPerPage !== prevRowsPerPage || totalRows !== prevTotalRows) {
        // NOTE: It's completely alright to update state in 'componentDidUpdate'
        // as long as it is inside a condition.
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(function () {
          return {
            lastPage: (0, _pagination.calculateLastPage)(totalRows, rowsPerPage),
            pageInputValue: currentPage
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          lastPage = _this$state2.lastPage,
          pageInputValue = _this$state2.pageInputValue;
      var _this$props5 = this.props,
          totalRows = _this$props5.totalRows,
          currentPage = _this$props5.currentPage,
          rowsPerPage = _this$props5.rowsPerPage; // To stay consistent with the current implementation,
      // we will hide the pagination actions if the last page
      // is less than or equal to `1`.

      if (lastPage <= 1) {
        return null;
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(PaginationActionsStyled, {
        alignItems: "center",
        display: {
          xs: 'flex',
          lg: 'none'
        },
        gutter: false,
        height: "100%",
        justify: "space-between",
        wrap: "nowrap"
      }, _react.default.createElement(_PaginationActionsButton.default, {
        border: true,
        color: "paginationButton",
        disabled: currentPage === 1,
        onClick: this.handleBackClick,
        margin: "0 10px 0 0"
      }, _react.default.createElement(_FaIcon.default, {
        icon: _faAngleLeft.faAngleLeft,
        height: "15px",
        width: "15px"
      })), _react.default.createElement(_PaginationActionsLastPage.default, null, currentPage), _react.default.createElement(_PaginationActionsOf.default, null, "of"), _react.default.createElement(_PaginationActionsLastPage.default, null, lastPage), _react.default.createElement(_PaginationActionsButton.default, {
        border: true,
        color: "paginationButton",
        disabled: currentPage >= Math.ceil(totalRows / rowsPerPage),
        onClick: this.handleForwardClick
      }, _react.default.createElement(_FaIcon.default, {
        icon: _faAngleRight.faAngleRight,
        height: "15px",
        width: "15px"
      }))), _react.default.createElement(PaginationActionsStyled, {
        alignItems: "center",
        display: {
          xs: 'none',
          lg: 'flex'
        },
        gutter: false,
        height: "100%",
        justify: "space-between",
        wrap: "nowrap"
      }, _react.default.createElement(_PaginationActionsButtonContainer.default, null, _react.default.createElement(_PaginationActionsButton.default, {
        border: true,
        color: "paginationButton",
        disabled: currentPage === 1,
        onClick: this.handleFirstPageClick
      }, _react.default.createElement(_FaIcon.default, {
        icon: _faAngleDoubleLeft.faAngleDoubleLeft,
        height: "15px",
        width: "15px"
      })), _react.default.createElement(_PaginationActionsButton.default, {
        border: true,
        color: "paginationButton",
        disabled: currentPage === 1,
        onClick: this.handleBackClick
      }, _react.default.createElement(_FaIcon.default, {
        icon: _faAngleLeft.faAngleLeft,
        height: "15px",
        width: "15px"
      }))), _react.default.createElement(_PaginationActionsCurrentPage.default, {
        onKeyPress: this.handleInputOnKeyPress,
        onChange: this.handleInputChange,
        type: "text",
        value: pageInputValue
      }), _react.default.createElement(_PaginationActionsOf.default, null, "of"), _react.default.createElement(_PaginationActionsLastPage.default, null, lastPage), _react.default.createElement(_PaginationActionsButtonContainer.default, null, _react.default.createElement(_PaginationActionsButton.default, {
        border: true,
        color: "paginationButton",
        disabled: currentPage >= Math.ceil(totalRows / rowsPerPage),
        onClick: this.handleForwardClick
      }, _react.default.createElement(_FaIcon.default, {
        icon: _faAngleRight.faAngleRight,
        height: "15px",
        width: "15px"
      })), _react.default.createElement(_PaginationActionsButton.default, {
        border: true,
        color: "paginationButton",
        disabled: currentPage >= Math.ceil(totalRows / rowsPerPage),
        onClick: this.handleLastPageClick
      }, _react.default.createElement(_FaIcon.default, {
        icon: _faAngleDoubleRight.faAngleDoubleRight,
        height: "15px",
        width: "15px"
      })))));
    }
  }]);
  return PaginationActions;
}(_react.default.Component);

PaginationActions.defaultProps = {
  onChangePage: function onChangePage() {}
};
PaginationActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The idx of the current page.
   */
  currentPage: _propTypes.default.number.isRequired,

  /**
   * Action taken upon each page change.
   */
  onChangePage: _propTypes.default.func,

  /**
   * The amount of rows per page.
   */
  rowsPerPage: _propTypes.default.number.isRequired,

  /**
   * The total rows available.
   */
  totalRows: _propTypes.default.number.isRequired
} : {};
var _default = PaginationActions;
exports.default = _default;