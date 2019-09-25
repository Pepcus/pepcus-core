"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TableContext = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var TableContext = _react.default.createContext({
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

exports.TableContext = TableContext;

var TableStyled = _styledComponents.default.table.withConfig({
  displayName: "Table__TableStyled",
  componentId: "sc-11pip9i-0"
})(["border-collapse:initial;border-radius:5px;border-spacing:0;border:1px solid ", ";display:table;overflow:hidden;width:100%;", ";"], (0, _theme.getThemeProps)('palette.common.lighter'), (0, _theme.getThemeProps)('Table.styles'));

var Table = function Table(_ref) {
  var context = _ref.context,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["context"]);
  return _react.default.createElement(TableContext.Provider, {
    value: (0, _objectSpread2.default)({}, context)
  }, _react.default.createElement(TableStyled, rest));
};

Table.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Add a context value to the Table and its children.
   */
  context: _propTypes.default.object
} : {};
Table.defaultProps = {
  context: {}
};
var _default = Table;
exports.default = _default;