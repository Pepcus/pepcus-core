"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../../..");

var _styledComponents = _interopRequireDefault(require("styled-components"));

// import { AlertCircleOutline } from 'components/Icons';
var SidebarDisclaimerStyled = _styledComponents.default.div.withConfig({
  displayName: "SidebarDisclaimer__SidebarDisclaimerStyled",
  componentId: "sc-1y95nqx-0"
})([""]);

var DisclaimerHeader = _styledComponents.default.div.withConfig({
  displayName: "SidebarDisclaimer__DisclaimerHeader",
  componentId: "sc-1y95nqx-1"
})(["display:flex;align-items:center;padding-left:15px;"]);

function SidebarDisclaimer(_ref) {
  var disclaimer = _ref.disclaimer;
  return disclaimer ? _react.default.createElement(SidebarDisclaimerStyled, null, _react.default.createElement(DisclaimerHeader, null, _react.default.createElement(_.Typography, {
    type: "disclaimer",
    gutterTop: "2px",
    gutterBottom: "0",
    gutterLeft: "5px"
  }, "DISCLAIMER")), _react.default.createElement(_.Divider, {
    color: "muted",
    gutterBottom: "0"
  }), _react.default.createElement(_.Box, {
    borderWidth: "0",
    margin: "0",
    padding: "0 15px 20px"
  }, _react.default.createElement(_.Typography, null, disclaimer))) : null;
}

SidebarDisclaimer.propTypes = process.env.NODE_ENV !== "production" ? {
  disclaimer: _propTypes.default.string
} : {};
SidebarDisclaimer.defaultProps = {
  disclaimer: ''
};
var _default = SidebarDisclaimer;
exports.default = _default;