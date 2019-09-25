"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var PreStyled = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "PreStyled",
  componentId: "sc-1sdrquk-0"
})(["white-space:pre-wrap;word-break:normal;word-wrap:break-word;"]);
var _default = PreStyled;
exports.default = _default;