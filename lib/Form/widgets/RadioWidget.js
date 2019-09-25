"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("../../Box"));

var _Radio = _interopRequireDefault(require("../../Radio"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _generate = require("../../../utils/generate");

function RadioWidget(props) {
  var autofocus = props.autofocus,
      disabled = props.disabled,
      id = props.id,
      _onChange = props.onChange,
      options = props.options,
      readonly = props.readonly,
      required = props.required,
      value = props.value; // Generate a unique field name to identify this set of radio buttons.

  var name = (0, _generate.genID)('RadioWidget__'); // Extract props from the options.

  var _options$boxProps = options.boxProps,
      boxProps = _options$boxProps === void 0 ? {} : _options$boxProps,
      enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled,
      inline = options.inline; // Render the `RadioWidget`.

  return _react.default.createElement(_Box.default, Object.assign({
    borderRadius: "0",
    borderWidth: "0",
    margin: "0",
    padding: "0 5px"
  }, boxProps), enumOptions.map(function (option, optionIdx) {
    var checked = option.value === value;
    var itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
    var key = "".concat(name, "__").concat(id, "__").concat(optionIdx); // Build the single radio.

    return _react.default.createElement(_Typography.default, {
      fullWidth: inline ? null : true,
      gutterRight: inline ? '20px' : null,
      htmlFor: key,
      key: key,
      type: "label"
    }, _react.default.createElement(_Radio.default, {
      autoFocus: autofocus && optionIdx === 0,
      checked: checked,
      disabled: disabled || itemDisabled || readonly,
      id: key,
      margin: "0 5px 0 0",
      name: name,
      onChange: function onChange() {
        return _onChange(option.value);
      },
      required: required,
      value: option.value
    }), _react.default.createElement("span", null, option.label));
  }));
}

RadioWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  autofocus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  options: _propTypes.default.shape({
    enumOptions: _propTypes.default.array,
    inline: _propTypes.default.bool
  }),
  readonly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object.isRequired,
  value: _propTypes.default.any
} : {};
RadioWidget.defaultProps = {
  autofocus: false,
  disabled: null,
  onChange: null,
  options: null,
  readonly: null,
  required: null,
  value: null
};
var _default = RadioWidget;
exports.default = _default;