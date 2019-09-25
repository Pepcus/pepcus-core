"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _tableCellTypes = _interopRequireDefault(require("../tableCellTypes"));

var _tooltipTypes = _interopRequireDefault(require("../tooltipTypes"));

var _object = require("../../utils/object");

var _proptypes = require("../../utils/proptypes");

var _bindings = require("../bindings");

var _TableCellCSS = _interopRequireDefault(require("./TableCellCSS"));

var _TableCellChild = _interopRequireDefault(require("./TableCellChild"));

var _renderTableCellSortable = _interopRequireDefault(require("./renderTableCellSortable"));

var TableCellStyled = _styledComponents.default.td.withConfig({
  displayName: "TableCell__TableCellStyled",
  componentId: "sc-8m09hl-0"
})(["", ";"], _TableCellCSS.default); // eslint-disable-next-line valid-jsdoc

/**
 * A styled table-cell component.
 */


function TableCell(props) {
  var cellProps = props.cellProps,
      cellTypes = props.cellTypes,
      children = props.children,
      col = props.col,
      handlers = props.handlers,
      noDataAvailable = props.noDataAvailable,
      row = props.row,
      schema = props.schema,
      setRef = props.setRef,
      tooltipTypes = props.tooltipTypes,
      typeProps = props.type; // Extract properties from the props.

  var helpText = (0, _get2.default)(col, 'helpText');
  var dynamicHelpText = Boolean(typeof helpText === 'string');
  var helpTextProps = dynamicHelpText ? {
    tooltip: {
      id: helpText
    }
  } : helpText; // Combine the `cellTypes` from the context along with the default `cellTypes`.

  var tableCellTypes = (0, _objectSpread2.default)({}, _tableCellTypes.default, cellTypes); // Combine the `tooltipTypes` from the context along with the default `tooltipTypes`.

  var tooltipsList = (0, _objectSpread2.default)({}, _tooltipTypes.default, tooltipTypes); // Rebuild the `context` for the cell from the current props.

  var cellContext = {
    cellTypes: cellTypes,
    col: col,
    schema: schema
  }; // Rebuild the `Col` properties for the cell.

  var colProps = {
    flex: (0, _get2.default)(col, 'flex'),
    order: (0, _get2.default)(col, 'order'),
    size: (0, _get2.default)(col, 'size')
  }; // Extract the keysMap from the `col` for disabling the table cell.

  var disabledKeysMap = (0, _get2.default)(col, 'disabled'); // Should the table cell be disabled?

  var disabled = (0, _object.checkObjectKeys)(row, disabledKeysMap, handlers); // Determine the cellType of table-cell to render.

  var cellType = (0, _get2.default)(cellProps, 'cellType'); // NOTE: Removing the big data props from the TableCellStyled.
  // It just pollutes the DOM.

  var componentProps = (0, _objectSpread2.default)({
    disabled: disabled
  }, (0, _omit2.default)(props, ['baseUrl', 'cellTypes', 'data', 'helpText', 'noDataAvailable', 'schema', 'selectable', 'setRef']), {
    cellContext: cellContext,
    cellType: cellType
  }, colProps);
  var TableCellRef = !tableCellTypes[cellType] ? setRef : null; // Build the children fro the TableCell.

  function renderChildren() {
    if (typeProps !== 'head' && cellType && tableCellTypes[cellType]) {
      var Cell = tableCellTypes[cellType];
      return _react.default.createElement(Cell, Object.assign({}, componentProps, {
        setRef: setRef
      }));
    }

    return children;
  } // If the cellType is 'sortable' then we'll render the sortable `TableCell`.


  if (cellType === 'sortable') {
    return (0, _renderTableCellSortable.default)(componentProps, TableCellStyled);
  } // We need to render the cell inside a row if we're
  // Build the final `TableCell` output.


  return _react.default.createElement(TableCellStyled, Object.assign({}, componentProps, {
    ref: TableCellRef
  }), !(0, _isEmpty2.default)(helpText) ? _react.default.createElement(_Tooltip.default, Object.assign({
    content: renderChildren()
  }, helpTextProps, {
    tooltipProps: (0, _objectSpread2.default)({
      col: col
    }, cellProps, componentProps),
    tooltipsList: tooltipsList
  }), _react.default.createElement(_TableCellChild.default, {
    noDataAvailable: noDataAvailable
  }, renderChildren())) : _react.default.createElement(_TableCellChild.default, {
    noDataAvailable: noDataAvailable
  }, renderChildren()));
}

TableCell.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Sets the `text-align` css property.
   */
  align: _propTypes.default.string,
  cellProps: _propTypes.default.object,
  cellTypes: _propTypes.default.object,
  children: _propTypes.default.node,

  /**
   * Properties of the current table-column
   */
  col: _propTypes.default.object,

  /**
   * Defines the 'flex' style property.
   */
  flex: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.string])),

  /**
   * Should the `theme.grid.gutterWidth` be taken into account?
   */
  gutter: _propTypes.default.bool,

  /**
   * A map of action handlers for the `TableCell`.
   */
  handlers: _propTypes.default.object,
  noDataAvailable: _propTypes.default.bool,

  /**
   * Defines the 'flex-order' style property.
   */
  order: (0, _proptypes.responsiveProptypes)(_propTypes.default.number),

  /**
   * The row data for the `TableCell` when rendered inside a `DataList`.
   */
  row: _propTypes.default.object,
  schema: _propTypes.default.object,
  setRef: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * Specifies the size of the `column`.
   * Can be set to `auto` for an auto-sizing.
   * Can be set to `*` for sizing the `column` as normal. (default)
   * Can be set to any number from `1 - n` (n being the `theme.grid.column` size).
   * Can be set to an object for responsive styling. `{{ sm: 6, lg: 12 }}`
   */
  size: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.oneOf(['auto', '*', false]), _propTypes.default.number, _propTypes.default.string])),

  /**
   * Determines if the table-cell is sortable.
   */
  sortable: _propTypes.default.bool,
  tooltipTypes: _propTypes.default.object,

  /**
   * Determines the type of table cell to render.
   */
  type: _propTypes.default.oneOf(['head', 'body', 'foot'])
} : {};
TableCell.defaultProps = {
  align: null,
  cellProps: null,
  cellTypes: null,
  children: null,
  col: {},
  flex: null,
  gutter: false,
  handlers: {},
  noDataAvailable: null,
  order: null,
  row: {},
  schema: {},
  setRef: null,
  size: null,
  sortable: false,
  tooltipTypes: null,
  type: null
};

var _default = (0, _compose.default)(_bindings.withActionHandlers, _styledComponents.withTheme)(TableCell);

exports.default = _default;