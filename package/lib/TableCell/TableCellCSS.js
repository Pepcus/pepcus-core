"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _styled = require("../../utils/styled");

var _css = require("../../utils/css");

var _theme = require("../../utils/theme");

var TableCellCSS = (0, _styledComponents.css)(["border-top:1px solid ", ";box-sizing:border-box;max-width:100%;padding:16px 12px;position:relative;text-align:", ";justify-content:", ";transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out;vertical-align:middle;", ";", ";"], (0, _theme.themeGet)('palette.common.lighter'), function (_ref) {
  var align = _ref.align;
  return align || 'left';
}, function (_ref2) {
  var align = _ref2.align;
  return align || 'left';
}, (0, _theme.themeGet)('TableCell.styles'), function (_ref3) {
  var cellType = _ref3.cellType,
      sortSchema = _ref3.sortSchema,
      size = _ref3.size,
      theme = _ref3.theme,
      type = _ref3.type;
  var headCss = '';
  var sortableCss = '';

  if (type === 'head') {
    headCss = (0, _styledComponents.css)(["background-color:#f5f8fa;border-top:none;color:#6c8193;font-weight:", ";padding:10px 12px;", ";"], (0, _theme.themeGet)('typography.fontWeights.regular'), (0, _theme.themeGet)('TableCell.styles.head'));
  }

  if (cellType === 'sortable') {
    sortableCss = (0, _styledComponents.css)(["cursor:pointer;> svg{margin-left:", ";margin-right:", ";transform:", ";}", ";"], sortSchema.iconPosition === 'right' ? '5px' : null, sortSchema.iconPosition === 'left' ? '5px' : null, sortSchema.order === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)', (0, _theme.themeGet)('TableCell.styles.sortable'));
  }

  return (0, _styledComponents.css)(["", ";", ";", ";"], headCss, sortableCss, (0, _styled.renderStyle)('size', size, theme, _css.verifyCSSColSize, _css.renderTableCellSize));
});
var _default = TableCellCSS;
exports.default = _default;