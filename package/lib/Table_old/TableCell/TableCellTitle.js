"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _theme = require("../../../utils/theme");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        display: none;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TableCellTitle = _styledComponents.default.div.withConfig({
  displayName: "TableCellTitle",
  componentId: "sc-1qnoxmc-0"
})(["color:#848484;display:block;flex:1 1 30%;padding-right:15px;text-align:right;", ";", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.media.up('sm')(_templateObject());
}, (0, _theme.getThemeProps)('TableCellTitle.styles'), function (_ref2) {
  var orientation = _ref2.orientation;
  return {
    display: (0, _get2.default)(orientation, 'mode', 'landscape') === 'portrait' && 'block !important'
  };
});

var _default = TableCellTitle;
exports.default = _default;