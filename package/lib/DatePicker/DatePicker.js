"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

require("react-datepicker/dist/react-datepicker.css");

function DatePicker(props) {
  var onBlur = props.onBlur,
      onChange = props.onChange,
      onSelect = props.onSelect,
      selected = props.selected;
  return _react.default.createElement(_reactDatepicker.default, {
    onBlur: onBlur,
    onChange: onChange,
    onSelect: onSelect,
    selected: selected
  });
}

DatePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  selected: _propTypes.default.instanceOf(Date)
} : {};
DatePicker.defaultProps = {
  onBlur: null,
  onChange: null,
  onSelect: null,
  selected: ''
};
var _default = DatePicker;
exports.default = _default;