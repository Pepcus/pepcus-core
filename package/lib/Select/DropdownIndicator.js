"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactSelect = require("react-select");

var _faAngleDown = require("@fortawesome/free-solid-svg-icons/faAngleDown");

var _FaIcon = _interopRequireDefault(require("../FaIcon"));

// Custom DropdownIndicator for the Select.
function DropdownIndicator(props) {
  return _react.default.createElement(_reactSelect.components.DropdownIndicator, props, _react.default.createElement(_FaIcon.default, {
    icon: _faAngleDown.faAngleDown,
    width: "17px",
    height: "17px"
  }));
}

var _default = DropdownIndicator;
exports.default = _default;