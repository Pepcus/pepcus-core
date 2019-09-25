"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Col = _interopRequireDefault(require("../Col"));

var _Row = _interopRequireDefault(require("../Row"));

var _pagination = require("../../utils/pagination");

var _theme = require("../../utils/theme");

var _PaginationActions = _interopRequireDefault(require("./PaginationActions"));

var _PaginationRowsPerPage = _interopRequireDefault(require("./PaginationRowsPerPage"));

var _PaginationTotalRows = _interopRequireDefault(require("./PaginationTotalRows"));

var _PaginationTotalSelected = _interopRequireDefault(require("./PaginationTotalSelected"));

var PaginationStyled = _styledComponents.default.div.withConfig({
  displayName: "Pagination__PaginationStyled",
  componentId: "sc-7vagv8-0"
})(["align-items:flex-start;display:flex;flex-direction:column;justify-content:space-between;padding:20px 0;@media (min-width:641px){align-items:center;flex-direction:row;}", ";"], (0, _theme.getThemeProps)('Pagination.styles'));

var Pagination =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Pagination, _React$Component);

  function Pagination() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Pagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Pagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.onRowsChange = function (_ref) {
      var value = _ref.value;
      var onChangeRowsPerPage = _this.props.onChangeRowsPerPage;
      onChangeRowsPerPage({
        value: parseInt(value, 10)
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Pagination, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          totalRows = _this$props.totalRows,
          onChangePage = _this$props.onChangePage,
          currentPage = _this$props.currentPage,
          rowsPerPage = _this$props.rowsPerPage; // Calculate the last page of the pagination.

      var lastPage = (0, _pagination.calculateLastPage)(totalRows, rowsPerPage); // If the current page is greater than the last page,
      // then we will throw the onChangePage event.

      if (currentPage > lastPage) {
        onChangePage(null, lastPage);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          currentPage = _this$props2.currentPage,
          onChangePage = _this$props2.onChangePage,
          rowsPerPage = _this$props2.rowsPerPage,
          rowsPerPageLabel = _this$props2.rowsPerPageLabel,
          rowsPerPageOptions = _this$props2.rowsPerPageOptions,
          style = _this$props2.style,
          selected = _this$props2.selected,
          totalRows = _this$props2.totalRows,
          totalRowsLabel = _this$props2.totalRowsLabel; // Determine the selected count.

      var selectedCount = selected ? (0, _isEmpty2.default)(selected.items) ? selected.itemCount : selected.items.length : null;
      var isSelectedCountPresent = typeof selectedCount === 'number';
      return _react.default.createElement(PaginationStyled, {
        style: style
      }, _react.default.createElement(_Row.default, {
        alignItems: "center",
        gutter: false,
        width: "100%"
      }, _react.default.createElement(_Col.default, {
        gutter: false
      }, _react.default.createElement(_Row.default, {
        direction: isSelectedCountPresent ? 'column' : null,
        gutter: false,
        height: "100%",
        justify: "flex-start"
      }, !(0, _isEmpty2.default)(totalRowsLabel) && _react.default.createElement(_PaginationTotalRows.default, {
        label: totalRowsLabel,
        totalRows: totalRows
      }), isSelectedCountPresent && _react.default.createElement(_PaginationTotalSelected.default, Object.assign({
        count: selectedCount
      }, selected)))), _react.default.createElement(_Col.default, {
        gutter: false
      }, _react.default.createElement(_Row.default, {
        alignItems: "center",
        gutter: false,
        height: "100%",
        justify: {
          xs: 'flex-end',
          md: 'center'
        }
      }, _react.default.createElement(_PaginationActions.default, {
        currentPage: currentPage,
        onChangePage: onChangePage,
        rowsPerPage: rowsPerPage,
        totalRows: totalRows
      }))), _react.default.createElement(_Col.default, {
        display: {
          xs: 'none',
          md: 'block'
        },
        gutter: false
      }, _react.default.createElement(_Row.default, {
        alignItems: "center",
        justify: "flex-end",
        gutter: false
      }, _react.default.createElement(_PaginationRowsPerPage.default, {
        label: rowsPerPageLabel,
        onChange: this.onRowsChange,
        rowsPerPage: rowsPerPage,
        rowsPerPageOptions: rowsPerPageOptions
      })))));
    }
  }]);
  return Pagination;
}(_react.default.Component);

Pagination.defaultProps = {
  currentPage: 0,
  onChangePage: function onChangePage() {},
  onChangeRowsPerPage: function onChangeRowsPerPage() {},
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
  currentPage: _propTypes.default.number,

  /**
   * The number of rows per page
   */
  rowsPerPage: _propTypes.default.number,

  /**
   * The display label for the rows per page
   */
  rowsPerPageLabel: _propTypes.default.node,

  /**
   * The options of the rows per page selection field
   */
  rowsPerPageOptions: _propTypes.default.array,

  /**
   * Define and overwrite the CSS styles.
   */
  style: _propTypes.default.object,

  /**
   * The total number of rows
   */
  totalRows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * The display label for the total rows
   */
  totalRowsLabel: _propTypes.default.oneOfType([_propTypes.default.shape({
    prefix: _propTypes.default.node,
    suffix: _propTypes.default.node
  }), _propTypes.default.string]),

  /**
   * Event fired upon a successful page change
   */
  onChangePage: _propTypes.default.func,

  /**
   * Event fired upon a successful rows per page change
   */
  onChangeRowsPerPage: _propTypes.default.func,

  /**
   * Props for the selected items count.
   */
  selected: _propTypes.default.object
} : {};
var _default = Pagination;
exports.default = _default;