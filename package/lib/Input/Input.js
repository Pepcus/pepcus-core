"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _InputStyles = _interopRequireDefault(require("./InputStyles"));

var Input = _styledComponents.default.input.withConfig({
  displayName: "Input",
  componentId: "j9nvtq-0"
})(["", ";"], _InputStyles.default);

var _default = Input;
exports.default = _default;