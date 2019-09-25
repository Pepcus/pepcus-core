"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

/**
 * The `header` component for the Table.
 *
 * @constructor
 */
var TableHead = _styledComponents.default.thead.withConfig({
  displayName: "TableHead",
  componentId: "sc-1datsph-0"
})(["", ";"], (0, _theme.themeGet)('TableHead.styles'));

var _default = TableHead;
exports.default = _default;