"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _generate = require("../../utils/generate");

var _theme = require("../../utils/theme");

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _withTableContext = _interopRequireDefault(require("./withTableContext"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        display: table-header-group;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TableHeadStyled = _styledComponents.default.thead.withConfig({
  displayName: "TableHead__TableHeadStyled",
  componentId: "evwhc5-0"
})(["display:none;", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.media.up('sm')(_templateObject());
}, (0, _theme.getThemeProps)('TableHead.styles'));

var TableHead = function TableHead(_ref2) {
  var data = _ref2.data,
      onSortChange = _ref2.onSortChange,
      order = _ref2.order,
      orderBy = _ref2.orderBy,
      schema = _ref2.schema,
      selectable = _ref2.selectable;
  var colSchema = (0, _get2.default)(schema, 'columns', []);
  var orientation = (0, _get2.default)(schema, 'orientation', {});
  var sortSchema = (0, _get2.default)(schema, 'sorting', {});
  var sortSchemaActive = Boolean(Object.keys(sortSchema).length);

  if (!Object.keys(colSchema).length || orientation.mode === 'portrait') {
    return null;
  }

  return _react.default.createElement(TableHeadStyled, null, _react.default.createElement(_TableRow.default, null, typeof selectable === 'function' && _react.default.createElement(_TableCell.default, {
    key: (0, _generate.genID)('TableHeadCell'),
    position: "head",
    cellProps: {
      type: 'default'
    }
  }), colSchema.map(function (col, colIdx) {
    return _react.default.createElement(_TableCell.default, {
      col: col,
      key: (0, _generate.genID)('TableHeadCell'),
      onClick: sortSchemaActive && col.id ? onSortChange(order, col.id) : null,
      order: order,
      orderBy: orderBy,
      position: "head",
      sortSchema: sortSchema,
      cellProps: {
        type: sortSchemaActive ? 'sortable' : 'default'
      }
    }, col.title);
  })));
};

TableHead.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The main data.
   */
  data: _propTypes.default.array,

  /**
   * Function to run on each sort change.
   */
  onSortChange: _propTypes.default.func,

  /**
   * The current order of the rows.
   */
  order: _propTypes.default.string,

  /**
   * The current order ID of the columns.
   */
  orderBy: _propTypes.default.string,

  /**
   * The JSON Schema informatoin about the columns, etc.
   */
  schema: _propTypes.default.object.isRequired,

  /**
   * `renderProp` to allow for a table-row to be selectable.
   */
  selectable: _propTypes.default.func
} : {};
TableHead.defaultProps = {
  data: [],
  onSortChange: function onSortChange() {},
  order: null,
  orderBy: null,
  selectable: null
};

var _default = (0, _withTableContext.default)(TableHead);

exports.default = _default;