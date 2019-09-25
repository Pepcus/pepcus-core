"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../../utils/theme");

var _TableCellCSS = _interopRequireDefault(require("../TableCellCSS"));

// eslint-disable-next-line valid-jsdoc

/**
 * A simple table cell styled as a header table-cell
 *
 * @type {Function}
 */
var TableCellHead = _styledComponents.default.th.withConfig({
  displayName: "TableCellHead",
  componentId: "sc-1md71m1-0"
})(["", ";font-weight:", ";", ";", ";"], _TableCellCSS.default, (0, _theme.getThemeProps)('typography.fontWeights.regular'), function (_ref) {
  var schema = _ref.schema;
  var iconPosition = (0, _get2.default)(schema, 'sorting.iconPosition', null);
  return {
    '> svg': {
      marginLeft: iconPosition === 'right' ? '5px' : null,
      marginRight: iconPosition === 'left' ? '5px' : null
    }
  };
}, (0, _theme.getThemeProps)('TableCellHead.styles'));

var _default = TableCellHead;
exports.default = _default;