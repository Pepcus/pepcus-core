"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _generate = require("../../utils/generate");

var _theme = require("../../utils/theme");

var _table = require("../../utils/table");

var _TableCell = _interopRequireDefault(require("./TableCell"));

var _TableRow = _interopRequireDefault(require("./TableRow"));

var _withTableContext = _interopRequireDefault(require("./withTableContext"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        display: table-row-group;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TableBodyStyled = _styledComponents.default.tbody.withConfig({
  displayName: "TableBody__TableBodyStyled",
  componentId: "sc-15jatdg-0"
})(["display:block;", ";", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.media.up('sm')(_templateObject());
}, (0, _theme.getThemeProps)('TableBody.styles'), function (_ref2) {
  var orientation = _ref2.orientation;
  return {
    display: (0, _get2.default)(orientation, 'mode', 'landscape') === 'portrait' && 'block !important'
  };
});

var TableBody = function TableBody(_ref3) {
  var data = _ref3.data,
      schema = _ref3.schema,
      tooltips = _ref3.tooltips,
      selectable = _ref3.selectable;
  var colSchema = (0, _get2.default)(schema, 'columns', []);
  var rowsSchema = (0, _get2.default)(schema, 'rows', {});
  var orientation = (0, _get2.default)(schema, 'orientation', {});

  var cleanColSchema = function cleanColSchema(col) {
    var newCol = (0, _objectSpread2.default)({}, col);
    delete newCol.actions;
    delete newCol.cellProps;
    return newCol;
  };

  if (!Object.keys(colSchema).length) {
    return null;
  }

  return _react.default.createElement(TableBodyStyled, {
    orientation: orientation
  }, (!data || data.length === 0) && _react.default.createElement(_TableRow.default, null, _react.default.createElement(_TableCell.default, {
    colSpan: colSchema.length,
    noDataAvailable: true
  }, _react.default.createElement("p", {
    style: {
      margin: 0,
      textAlign: 'center'
    }
  }, "No Data Available"))), data && data.length > 0 && data.map(function (row, rowIdx) {
    return _react.default.createElement(_TableRow.default, Object.assign({
      key: (0, _generate.genID)('TableBodyRow'),
      row: row
    }, rowsSchema, {
      orientation: orientation,
      zebra: (0, _table.getZebraStyle)(rowIdx, rowsSchema.zebra)
    }), typeof selectable === 'function' && _react.default.createElement(_TableCell.default, {
      key: (0, _generate.genID)('TableBodyCell'),
      orientation: orientation,
      position: "body",
      row: row,
      tooltipsList: tooltips
    }, selectable(row)), colSchema.map(function (col, colIdx) {
      return _react.default.createElement(_TableCell.default, {
        actions: col.actions,
        col: cleanColSchema(col),
        "data-title": col.title,
        helpText: col.helpText,
        key: (0, _generate.genID)('TableBodyCell'),
        orientation: orientation,
        position: "body",
        row: row,
        tooltipsList: tooltips,
        cellProps: col.cellProps
      }, (0, _get2.default)(row, col.id, '-'));
    }));
  }));
};

TableBody.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The main data for the TableBody.
   */
  data: _propTypes.default.array,

  /**
   * The JSON Schema informatoin about the columns, etc.
   */
  schema: _propTypes.default.object.isRequired,

  /**
   * A list of tooltip components.
   */
  tooltips: _propTypes.default.array,

  /**
   * `renderProp` to allow for a table-row to be selectable.
   */
  selectable: _propTypes.default.func
} : {};
TableBody.defaultProps = {
  data: [],
  tooltips: [],
  selectable: null
};

var _default = (0, _withTableContext.default)(TableBody);

exports.default = _default;