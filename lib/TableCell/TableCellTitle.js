"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _theme = require("../../utils/theme");

var TableCellTitle = _styledComponents.default.div.withConfig({
  displayName: "TableCellTitle",
  componentId: "i3t933-0"
})(["color:#848484;display:block;flex:1 1 30%;padding-right:15px;text-align:right;", ";", ";"], (0, _theme.getThemeProps)('TableCellTitle.styles'), function (_ref) {
  var orientation = _ref.orientation;
  return {
    display: (0, _get2.default)(orientation, 'mode', 'landscape') === 'portrait' ? 'block' : 'none'
  };
});

var _default = TableCellTitle;
exports.default = _default;