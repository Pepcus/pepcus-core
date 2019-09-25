"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _generate = require("../../utils/generate");

var _theme = require("../../utils/theme");

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var TableFooterStyled = _styledComponents.default.tfoot.withConfig({
  displayName: "TableFooter__TableFooterStyled",
  componentId: "sc-15pkoy6-0"
})(["display:table-footer-group;", ";"], (0, _theme.getThemeProps)('TableFooter.styles'));

var TableFooter = function TableFooter(_ref) {
  var schema = _ref.schema,
      data = _ref.data;
  var colSchema = (0, _get2.default)(schema, 'columns', []);
  var orientation = (0, _get2.default)(schema, 'orientation', {});

  if (!Object.keys(colSchema).length || orientation.mode === 'portrait') {
    return null;
  }

  return _react.default.createElement(TableFooterStyled, null, _react.default.createElement(_TableRow.default, null, colSchema.map(function (col) {
    return _react.default.createElement(_TableCell.default, {
      col: col,
      position: "footer",
      key: (0, _generate.genID)('TableFooterCell')
    }, col.title);
  })));
};

TableFooter.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The main data for the TableBody.
   */
  data: _propTypes.default.array,

  /**
   * The JSON Schema informatoin about the columns, etc.
   */
  schema: _propTypes.default.object.isRequired
} : {};
TableFooter.defaultProps = {
  data: []
};
var _default = TableFooter;
exports.default = _default;