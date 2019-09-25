"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

/**
 * The `footer` component for the Table.
 *
 * @constructor
 */
var TableFooter = _styledComponents.default.tfoot.withConfig({
  displayName: "TableFooter",
  componentId: "sc-1bp7qdm-0"
})(["", ";"], (0, _theme.themeGet)('TableFooter.styles'));

var _default = TableFooter;
exports.default = _default;