import _objectSpread from "@babel/runtime/helpers/objectSpread";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import styled from 'styled-components';
import { genID } from "../../utils/generate";
import { getThemeProps } from "../../utils/theme";
import { getZebraStyle } from "../../utils/table";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import withTableContext from "./withTableContext";
const TableBodyStyled = styled.tbody.withConfig({
  displayName: "TableBody__TableBodyStyled",
  componentId: "sc-15jatdg-0"
})(["display:block;", ";", ";", ";"], ({
  theme
}) => theme.media.up('sm')`
        display: table-row-group;
    `, getThemeProps('TableBody.styles'), ({
  orientation
}) => ({
  display: _get(orientation, 'mode', 'landscape') === 'portrait' && 'block !important'
}));

const TableBody = ({
  data,
  schema,
  tooltips,
  selectable
}) => {
  const colSchema = _get(schema, 'columns', []);

  const rowsSchema = _get(schema, 'rows', {});

  const orientation = _get(schema, 'orientation', {});

  const cleanColSchema = col => {
    const newCol = _objectSpread({}, col);

    delete newCol.actions;
    delete newCol.cellProps;
    return newCol;
  };

  if (!Object.keys(colSchema).length) {
    return null;
  }

  return React.createElement(TableBodyStyled, {
    orientation: orientation
  }, (!data || data.length === 0) && React.createElement(TableRow, null, React.createElement(TableCell, {
    colSpan: colSchema.length,
    noDataAvailable: true
  }, React.createElement("p", {
    style: {
      margin: 0,
      textAlign: 'center'
    }
  }, "No Data Available"))), data && data.length > 0 && data.map((row, rowIdx) => React.createElement(TableRow, Object.assign({
    key: genID('TableBodyRow'),
    row: row
  }, rowsSchema, {
    orientation: orientation,
    zebra: getZebraStyle(rowIdx, rowsSchema.zebra)
  }), typeof selectable === 'function' && React.createElement(TableCell, {
    key: genID('TableBodyCell'),
    orientation: orientation,
    position: "body",
    row: row,
    tooltipsList: tooltips
  }, selectable(row)), colSchema.map((col, colIdx) => React.createElement(TableCell, {
    actions: col.actions,
    col: cleanColSchema(col),
    "data-title": col.title,
    helpText: col.helpText,
    key: genID('TableBodyCell'),
    orientation: orientation,
    position: "body",
    row: row,
    tooltipsList: tooltips,
    cellProps: col.cellProps
  }, _get(row, col.id, '-'))))));
};

TableBody.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The main data for the TableBody.
   */
  data: PropTypes.array,

  /**
   * The JSON Schema informatoin about the columns, etc.
   */
  schema: PropTypes.object.isRequired,

  /**
   * A list of tooltip components.
   */
  tooltips: PropTypes.array,

  /**
   * `renderProp` to allow for a table-row to be selectable.
   */
  selectable: PropTypes.func
} : {};
TableBody.defaultProps = {
  data: [],
  tooltips: [],
  selectable: null
};
export default withTableContext(TableBody);