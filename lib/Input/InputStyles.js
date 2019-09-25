"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = require("styled-components");

var _theme = require("../../utils/theme");

/**
 * Define the CSS Styles for the Input Component
 */
var InputCss = (0, _styledComponents.css)(["background-color:", ";border-color:", ";border-radius:4px;border-style:solid;border-width:1px;box-shadow:none;color:", ";display:block;font-size:14px;height:38px;line-height:1.5;padding:6px 15px;transition:border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out;width:100%;&::placeholder{color:", ";}", ";&[disabled],&[readonly]{background-color:#e1e5e9 !important;border-color:transparent;box-shadow:none;cursor:not-allowed;user-select:none;}", ";"], (0, _theme.themeGet)('palette.common.white'), (0, _theme.themeGet)('palette.common.lighter'), (0, _theme.themeGet)('palette.common.input'), (0, _theme.themeGet)('palette.common.placeholder'), (0, _theme.themeGet)('effects.inputFocus'), (0, _theme.themeGet)('Input.styles'));
var _default = InputCss;
exports.default = _default;