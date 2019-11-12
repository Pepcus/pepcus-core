"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Divider = _interopRequireDefault(require("../../Divider"));

var _theme = require("../../../utils/theme");

var CheckboxWidgetStyled = _styledComponents.default.div.withConfig({
  displayName: "CheckboxWidget__CheckboxWidgetStyled",
  componentId: "amzdr3-0"
})(["font-size:14px;label{align-items:baseline;display:flex;justify-content:flex-start;margin:0;input{margin-right:10px;}}", ";"], (0, _theme.getThemeProps)('CheckboxWidget.styles'));

function CheckboxWidget(props) {
  var id = props.id,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      _onChange = props.onChange,
      options = props.options;
  var divider = options.divider,
      className = options.className;
  var renderDivider = typeof divider === 'boolean' ? divider : !(0, _isEmpty2.default)(divider);
  return _react.default.createElement(CheckboxWidgetStyled, {
    className: className,
    disabled: disabled || readonly
  }, _react.default.createElement("label", {
    htmlFor: id
  }, _react.default.createElement("input", {
    checked: typeof value === 'undefined' ? false : value,
    disabled: disabled || readonly,
    id: id,
    onChange: function onChange(event) {
      return _onChange && _onChange(event.target.checked);
    },
    required: required,
    type: "checkbox"
  }), _react.default.createElement("span", null, label)), renderDivider && _react.default.createElement(_Divider.default, divider));
}

CheckboxWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  label: _propTypes.default.string,
  onChange: _propTypes.default.func,
  options: _propTypes.default.object,
  readonly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  value: _propTypes.default.bool
} : {};
CheckboxWidget.defaultProps = {
  disabled: false,
  label: '',
  onChange: null,
  options: null,
  readonly: false,
  required: false,
  value: false
};
var _default = CheckboxWidget;
exports.default = _default;