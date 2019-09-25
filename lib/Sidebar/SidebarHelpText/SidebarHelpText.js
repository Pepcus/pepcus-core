"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../../..");

function SidebarHelpText(props) {
  var helpText = props.helpText;
  return helpText ? _react.default.createElement(_.Typography, {
    color: "sidebarHelpText",
    type: "sidebarHelpText"
  }, helpText) : null;
}

SidebarHelpText.propTypes = process.env.NODE_ENV !== "production" ? {
  helpText: _propTypes.default.string
} : {};
SidebarHelpText.defaultProps = {
  helpText: null
};
var _default = SidebarHelpText;
exports.default = _default;