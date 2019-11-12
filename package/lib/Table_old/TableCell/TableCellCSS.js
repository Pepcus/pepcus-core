"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = require("styled-components");

var _SvgIcon = _interopRequireDefault(require("../../SvgIcon"));

var _theme = require("../../../utils/theme");

var _merge = require("../../../utils/merge");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        display: table-cell;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TableCellCSS = (0, _styledComponents.css)(["align-items:baseline;border-top:1px solid ", ";display:flex;padding:16px 12px;position:relative;text-align:left;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out;vertical-align:middle;", ";", ";", "{transform:", ";}", ";"], (0, _theme.getThemeProps)('palette.common.lighter'), function (_ref) {
  var theme = _ref.theme;
  return theme.media.up('sm')(_templateObject());
}, (0, _theme.getThemeProps)('TableCell.styles'), _SvgIcon.default, function (props) {
  var order = (0, _get2.default)(props, 'order');
  var orderBy = (0, _get2.default)(props, 'orderBy');
  var colId = (0, _get2.default)(props, 'col.id');
  return orderBy === colId && order === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)';
}, function (_ref2) {
  var cellProps = _ref2.cellProps,
      orientation = _ref2.orientation,
      position = _ref2.position,
      theme = _ref2.theme;
  var cellType = cellProps.type || 'default';
  var orientationModePortrait = (0, _get2.default)(orientation, 'mode') === 'portrait';
  var dynamicStyles = {};
  var portraitStyles = orientationModePortrait ? (0, _theme.getThemeProps)('TableCell.styles.portrait', null, {
    theme: theme
  }) : {};
  var positionStyles = (0, _theme.getThemeProps)("TableCell.".concat(position, ".styles"), null, {
    theme: theme
  });
  var cellTypeStyles = (0, _theme.getThemeProps)("TableCell.".concat(cellType, ".styles"), {}, {
    theme: theme
  });
  return (0, _merge.mergeObjects)(dynamicStyles, portraitStyles, cellTypeStyles, positionStyles);
});
var _default = TableCellCSS;
exports.default = _default;