"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var MenuItem = _styledComponents.default.li.withConfig({
  displayName: "MenuItem",
  componentId: "sc-1pnaqcd-0"
})(["margin:0;padding:0;width:100%;", ";"], (0, _theme.getThemeProps)('MenuItem.styles'));

MenuItem.propTypes = {};
MenuItem.defaultProps = {};
var _default = MenuItem;
exports.default = _default;