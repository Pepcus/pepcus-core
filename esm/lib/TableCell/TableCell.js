import _objectSpread from "@babel/runtime/helpers/objectSpread";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _omit from 'lodash/omit';
import compose from 'recompose/compose';
import styled, { withTheme } from 'styled-components';
import Tooltip from "../Tooltip";
import defaultCellTypes from "../tableCellTypes";
import defaultTooltipTypes from "../tooltipTypes";
import { checkObjectKeys } from "../../utils/object";
import { responsiveProptypes } from "../../utils/proptypes";
import { withActionHandlers } from "../bindings";
import TableCellCSS from "./TableCellCSS";
import TableCellChild from "./TableCellChild";
import renderTableCellSortable from "./renderTableCellSortable";
const TableCellStyled = styled.td.withConfig({
  displayName: "TableCell__TableCellStyled",
  componentId: "sc-8m09hl-0"
})(["", ";"], TableCellCSS); // eslint-disable-next-line valid-jsdoc

/**
 * A styled table-cell component.
 */

function TableCell(props) {
  const cellProps = props.cellProps,
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

  const helpText = _get(col, 'helpText');

  const dynamicHelpText = Boolean(typeof helpText === 'string');
  const helpTextProps = dynamicHelpText ? {
    tooltip: {
      id: helpText
    }
  } : helpText; // Combine the `cellTypes` from the context along with the default `cellTypes`.

  const tableCellTypes = _objectSpread({}, defaultCellTypes, cellTypes); // Combine the `tooltipTypes` from the context along with the default `tooltipTypes`.


  const tooltipsList = _objectSpread({}, defaultTooltipTypes, tooltipTypes); // Rebuild the `context` for the cell from the current props.


  const cellContext = {
    cellTypes,
    col,
    schema
  }; // Rebuild the `Col` properties for the cell.

  const colProps = {
    flex: _get(col, 'flex'),
    order: _get(col, 'order'),
    size: _get(col, 'size')
  }; // Extract the keysMap from the `col` for disabling the table cell.

  const disabledKeysMap = _get(col, 'disabled'); // Should the table cell be disabled?


  const disabled = checkObjectKeys(row, disabledKeysMap, handlers); // Determine the cellType of table-cell to render.

  const cellType = _get(cellProps, 'cellType'); // NOTE: Removing the big data props from the TableCellStyled.
  // It just pollutes the DOM.


  const componentProps = _objectSpread({
    disabled
  }, _omit(props, ['baseUrl', 'cellTypes', 'data', 'helpText', 'noDataAvailable', 'schema', 'selectable', 'setRef']), {
    cellContext,
    cellType
  }, colProps);

  const TableCellRef = !tableCellTypes[cellType] ? setRef : null; // Build the children fro the TableCell.

  function renderChildren() {
    if (typeProps !== 'head' && cellType && tableCellTypes[cellType]) {
      const Cell = tableCellTypes[cellType];
      return React.createElement(Cell, Object.assign({}, componentProps, {
        setRef: setRef
      }));
    }

    return children;
  } // If the cellType is 'sortable' then we'll render the sortable `TableCell`.


  if (cellType === 'sortable') {
    return renderTableCellSortable(componentProps, TableCellStyled);
  } // We need to render the cell inside a row if we're
  // Build the final `TableCell` output.


  return React.createElement(TableCellStyled, Object.assign({}, componentProps, {
    ref: TableCellRef
  }), !_isEmpty(helpText) ? React.createElement(Tooltip, Object.assign({
    content: renderChildren()
  }, helpTextProps, {
    tooltipProps: _objectSpread({
      col
    }, cellProps, componentProps),
    tooltipsList: tooltipsList
  }), React.createElement(TableCellChild, {
    noDataAvailable: noDataAvailable
  }, renderChildren())) : React.createElement(TableCellChild, {
    noDataAvailable: noDataAvailable
  }, renderChildren()));
}

TableCell.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Sets the `text-align` css property.
   */
  align: PropTypes.string,
  cellProps: PropTypes.object,
  cellTypes: PropTypes.object,
  children: PropTypes.node,

  /**
   * Properties of the current table-column
   */
  col: PropTypes.object,

  /**
   * Defines the 'flex' style property.
   */
  flex: responsiveProptypes(PropTypes.oneOfType([PropTypes.string])),

  /**
   * Should the `theme.grid.gutterWidth` be taken into account?
   */
  gutter: PropTypes.bool,

  /**
   * A map of action handlers for the `TableCell`.
   */
  handlers: PropTypes.object,
  noDataAvailable: PropTypes.bool,

  /**
   * Defines the 'flex-order' style property.
   */
  order: responsiveProptypes(PropTypes.number),

  /**
   * The row data for the `TableCell` when rendered inside a `DataList`.
   */
  row: PropTypes.object,
  schema: PropTypes.object,
  setRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Specifies the size of the `column`.
   * Can be set to `auto` for an auto-sizing.
   * Can be set to `*` for sizing the `column` as normal. (default)
   * Can be set to any number from `1 - n` (n being the `theme.grid.column` size).
   * Can be set to an object for responsive styling. `{{ sm: 6, lg: 12 }}`
   */
  size: responsiveProptypes(PropTypes.oneOfType([PropTypes.oneOf(['auto', '*', false]), PropTypes.number, PropTypes.string])),

  /**
   * Determines if the table-cell is sortable.
   */
  sortable: PropTypes.bool,
  tooltipTypes: PropTypes.object,

  /**
   * Determines the type of table cell to render.
   */
  type: PropTypes.oneOf(['head', 'body', 'foot'])
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
export default compose(withActionHandlers, withTheme)(TableCell);