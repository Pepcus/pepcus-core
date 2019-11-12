"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../..");

var _utils = require("../../../utils");

function SidebarOption(props) {
  var handlers = props.handlers,
      icon = props.icon,
      onClickProps = props.onClick,
      text = props.text; // Rebuild the onClick handler for the button.

  var onClick = typeof onClickProps === 'string' ? (0, _utils.getHandler)(handlers, onClickProps) : onClickProps; // Render the sidebar option.

  return _react.default.createElement(_.ButtonLink, {
    color: "secondary",
    onClick: onClick,
    style: {
      padding: '3px 0',
      display: 'block'
    }
  }, _react.default.createElement(_.Typography, {
    type: "caption"
  }, _react.default.createElement(_.Row, {
    padding: "0",
    margin: "0"
  }, _react.default.createElement(_.Col, {
    size: {
      md: 2
    }
  }, icon), _react.default.createElement(_.Col, {
    size: {
      md: 10
    }
  }, _react.default.createElement(_.Typography, {
    type: "sidebarOption",
    color: "sidebarOption"
  }, text)))));
}

SidebarOption.propTypes = process.env.NODE_ENV !== "production" ? {
  handlers: _propTypes.default.objectOf(_propTypes.default.func),
  icon: _propTypes.default.node,
  onClick: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
  text: _propTypes.default.string
} : {};
SidebarOption.defaultProps = {
  handlers: null,
  icon: null,
  onClick: null,
  text: ''
};

var _default = (0, _utils.accessControl)(SidebarOption);

exports.default = _default;