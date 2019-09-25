"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Tooltip = _interopRequireDefault(require("../../Tooltip"));

var _SvgIcon = require("../../SvgIcon");

var _table = require("../../../utils/table");

var _bindings = require("../../bindings");

var _TableCellCSS = _interopRequireDefault(require("./TableCellCSS"));

var _TableCellChild = _interopRequireDefault(require("./TableCellChild"));

var _TableCellTitle = _interopRequireDefault(require("./TableCellTitle"));

var _types = _interopRequireDefault(require("./types"));

var _withTableContext = _interopRequireDefault(require("../withTableContext"));

/**
 * Simple table-cell
 *
 * @type {Function}
 */
var TableCellStyled = _styledComponents.default.td.withConfig({
  displayName: "TableCell__TableCellStyled",
  componentId: "sc-1wm764g-0"
})(["", ";"], _TableCellCSS.default);
/**
 * Render an arrow icon based on the current order and column being equal
 *
 * @method renderArrowIcon
 * @param  {string}        orderBy The ordeby value
 * @param  {Object}        col     The column info
 * @return {JSX|null}
 */


var renderArrowIcon = function renderArrowIcon(_ref // eslint-disable-line react/prop-types
) {
  var orderBy = _ref.orderBy,
      col = _ref.col;
  return orderBy === col.id ? _react.default.createElement(_SvgIcon.ArrowIcon, {
    style: {
      width: 18,
      height: 18
    }
  }) : null;
};
/**
 * Render a sortable cell with an arrow icon
 *
 * @method renderSortableCell
 * @param  {Object}            props     The props for the component
 * @param  {Function}          Component The component to render
 * @return {JSX}
 */


var renderSortableCell = function renderSortableCell(props, Component) {
  return _react.default.createElement(Component, props, (0, _get2.default)(props, 'sortSchema.iconPosition') === 'left' ? renderArrowIcon(props) : null, (0, _get2.default)(props, 'children'), (0, _get2.default)(props, 'sortSchema.iconPosition') === 'left' ? null : renderArrowIcon(props));
};

var TableCell = function TableCell(props) {
  var baseUrl = props.baseUrl,
      cellProps = props.cellProps,
      cellTypes = props.cellTypes,
      children = props.children,
      col = props.col,
      handlers = props.handlers,
      helpText = props.helpText,
      noDataAvailable = props.noDataAvailable,
      oAuthToken = props.oAuthToken,
      orientation = props.orientation,
      position = props.position,
      row = props.row,
      schema = props.schema,
      setRef = props.setRef,
      tooltipsList = props.tooltipsList; // Combine the `cellTypes` from the context along with the default `cellTypes`.

  var tableCellTypes = (0, _objectSpread2.default)({}, _types.default, cellTypes); // Rebuild the `context` for the cell from the current props.

  var cellContext = {
    baseUrl: baseUrl,
    cellTypes: cellTypes,
    handlers: handlers,
    helpText: helpText,
    oAuthToken: oAuthToken,
    schema: schema
  }; // Should the table cell be disabled?

  var disabled = (0, _table.disableTableCell)(props); // NOTE: Removing the big data prop from the TableCellStyled.
  // It just pollutes the DOM.

  var componentProps = (0, _objectSpread2.default)({
    disabled: disabled
  }, (0, _omit2.default)(props, ['actions', 'baseUrl', 'cellTypes', 'data', 'handlers', 'helpText', 'noDataAvailable', 'oAuthToken', 'schema', 'selectable', 'setRef']), {
    cellContext: cellContext
  }); // Determine the type of table-cell to render.

  var type = (0, _get2.default)(cellProps, 'type'); // Determine the component to use based on the position
  // of the table cell in the table.
  // Usually only used for table header since we use 'th' instead of 'td'

  var Component = position === 'head' ? tableCellTypes['head'] : TableCellStyled; // Build the children for the TableCell.

  var getChildren = function getChildren() {
    if (type && tableCellTypes[type]) {
      var Cell = tableCellTypes[type];
      return _react.default.createElement(Cell, Object.assign({}, componentProps, {
        setRef: setRef
      }));
    } else {
      return children;
    }
  }; // If the type is 'sortable' then we'll render the sortable TableCell.


  if (type === 'sortable') {
    return renderSortableCell(componentProps, Component);
  } // Return the final Table Cell Component.


  return _react.default.createElement(Component, Object.assign({}, componentProps, {
    setRef: type === 'default' && setRef
  }), (0, _get2.default)(orientation, 'header') !== false && _react.default.createElement(_TableCellTitle.default, {
    orientation: orientation
  }, col.title, ' :'), !(0, _isEmpty2.default)(helpText) && (0, _typeof2.default)(helpText) === 'object' ? _react.default.createElement(_Tooltip.default, Object.assign({
    content: getChildren()
  }, helpText, {
    tooltipProps: {
      baseUrl: baseUrl,
      col: col,
      oAuthToken: oAuthToken,
      row: row
    },
    tooltipsList: tooltipsList
  }), _react.default.createElement(_TableCellChild.default, {
    orientation: orientation,
    noDataAvailable: noDataAvailable
  }, getChildren())) : _react.default.createElement(_TableCellChild.default, {
    orientation: orientation,
    noDataAvailable: noDataAvailable
  }, getChildren()));
};

TableCell.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A base URL for making the API calls.
   */
  baseUrl: _propTypes.default.string,

  /**
   * What type of table cell are we rendering?
   * We can re-define the type of cell, it's value,
   * or the internal key it's associated with.
   * If we provide a key, then the table cell will
   * try to extract the key from its internal row-data.
   * Defaults to 'default' / 'text'.
   */
  cellProps: _propTypes.default.shape({
    key: _propTypes.default.string,
    type: _propTypes.default.string,
    value: _propTypes.default.string
  }),
  cellTypes: _propTypes.default.object,

  /**
   * Table cell contents
   */
  children: _propTypes.default.node,

  /**
   * Properties of the current table-column
   */
  col: _propTypes.default.object,
  handlers: _propTypes.default.object,

  /**
   * Add a Tooltip component to the TableCell.
   */
  helpText: _propTypes.default.object,

  /**
   * A boolean representing that no data is available for the table.
   */
  noDataAvailable: _propTypes.default.bool,

  /**
   * An oAuth token to make API calls.
   */
  oAuthToken: _propTypes.default.string,

  /**
   * The orientation of the table, 'portrait' or 'landscape'
   */
  orientation: _propTypes.default.object,

  /**
   * Where are we positioning the table cell? head, body, or footer?
   * Defaults to 'body'.
   */
  position: _propTypes.default.oneOf(['head', 'body', 'footer']),

  /**
   * Properties of the current table-row
   */
  row: _propTypes.default.object,
  schema: _propTypes.default.object,

  /**
   * Set the ref attribute on the current table cell
   */
  setRef: _propTypes.default.object,

  /**
   * A list of tooltip components.
   */
  tooltipsList: _propTypes.default.array
} : {};
TableCell.defaultProps = {
  baseUrl: null,
  cellProps: {
    type: 'default'
  },
  cellTypes: null,
  children: null,
  col: {},
  handlers: null,
  helpText: null,
  noDataAvailable: false,
  oAuthToken: null,
  orientation: {},
  position: 'body',
  row: {},
  schema: null,
  setRef: null,
  tooltipsList: null
};

var _default = (0, _compose.default)(_withTableContext.default, _bindings.withActionHandlers)(TableCell);

exports.default = _default;