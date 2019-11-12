"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var _Key = _interopRequireDefault(require("./Key"));

var KeyItemStyled = _styledComponents.default.li.withConfig({
  displayName: "Item__KeyItemStyled",
  componentId: "uxeunx-0"
})(["align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%;", "{margin-right:10px;}", ";"], _Key.default, (0, _theme.getThemeProps)('KeyValuePairsItem.styes'));

var _default = KeyItemStyled;
exports.default = _default;