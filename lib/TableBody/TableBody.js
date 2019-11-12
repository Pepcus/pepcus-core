"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

/**
 * The `body` component for the Table.
 *
 * @constructor
 */
var TableBody = _styledComponents.default.tbody.withConfig({
  displayName: "TableBody",
  componentId: "sc-10rliy8-0"
})(["", ";"], (0, _theme.themeGet)('TableBody.styles'));

var _default = TableBody;
exports.default = _default;