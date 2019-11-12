import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme";
export const TableContext = React.createContext({
  // The base url for making the internal API calls.
  baseUrl: '',
  // The different types of available table-cells.
  cellTypes: {},
  // The data to be rendered in the table.
  data: [],
  // The action handlers for the table.
  handlers: {},
  // The oAuth token for making the internal API calls.
  oAuthToken: '',
  // The sorting order.
  order: '',
  // The sorting key.
  orderBy: '',
  // The table schema.
  schema: {},
  // Add a selectable checkbox input for the row.
  selectable: null
});
const TableStyled = styled.table.withConfig({
  displayName: "Table__TableStyled",
  componentId: "sc-11pip9i-0"
})(["border-collapse:initial;border-radius:5px;border-spacing:0;border:1px solid ", ";display:table;overflow:hidden;width:100%;", ";"], getThemeProps('palette.common.lighter'), getThemeProps('Table.styles'));

const Table = (_ref) => {
  let context = _ref.context,
      rest = _objectWithoutProperties(_ref, ["context"]);

  return React.createElement(TableContext.Provider, {
    value: _objectSpread({}, context)
  }, React.createElement(TableStyled, rest));
};

Table.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Add a context value to the Table and its children.
   */
  context: PropTypes.object
} : {};
Table.defaultProps = {
  context: {}
};
export default Table;