"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _InputStyles = _interopRequireDefault(require("../Input/InputStyles"));

var _theme = require("../../utils/theme");

var TextAreaStyled = _styledComponents.default.textarea.withConfig({
  displayName: "TextArea__TextAreaStyled",
  componentId: "sc-3e92te-0"
})(["", ";height:unset;max-height:225px;max-width:100%;min-height:119px;min-width:100%;overflow:auto;padding:6px 15px;resize:", ";", ";"], _InputStyles.default, function (_ref) {
  var resize = _ref.resize;
  return resize || 'vertical';
}, (0, _theme.themeGet)('TextArea.styles'));

var _default = TextAreaStyled;
exports.default = _default;