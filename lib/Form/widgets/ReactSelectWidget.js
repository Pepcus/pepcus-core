"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = _interopRequireDefault(require("../../Select"));

var _number = require("../../../utils/number");

/**
 * Extract the select input value based on regular or multiple select
 *
 * @method getSelectInputValue
 * @param  {Event}              event    The synthetic event
 * @param  {boolean}            multiple The multiple select attr
 * @return {Any}                         The value
 */
var getSelectInputValue = function getSelectInputValue(event, multiple) {
  return Array.isArray(event) ? event.map(function (option) {
    return option.value;
  }) : event.value;
};
/**
 * Get the select widgets value
 *
 * @method getSelectWidgetValue
 * @param  {Object}             schema The form schema
 * @param  {Any}                value  The value for the select widget
 * @return {Any}                       The final value
 */


var getSelectWidgetValue = function getSelectWidgetValue(_ref, value) {
  var type = _ref.type,
      items = _ref.items;
  var NUMBER_INT = ['number', 'integer'];

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && NUMBER_INT.includes(items.type)) {
    return value.map(_number.parseAsNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return (0, _number.parseAsNumber)(value);
  }

  return value;
};
/**
 * A simple Select componened wrapped in a form-field.
 *
 * @method      ReactSelectWidget
 * @param       {Object}          props The props for the component
 * @constructor
 */


function ReactSelectWidget(props) {
  var disabled = props.disabled,
      id = props.id,
      multiple = props.multiple,
      onChange = props.onChange,
      options = props.options,
      placeholderProps = props.placeholder,
      required = props.required,
      schema = props.schema,
      valueProps = props.value,
      readonly = props.readonly; // Fix the placeholder, when rendering inside a `<Form />` at times the
  // `placeholder` is set to an empty string if not provided in the form-schema.
  // Due to this, the `defaultProps` don't help since an empty string is a valid value.

  var placeholder = placeholderProps || '-- Select an Option --'; // Extract out the `enumOptions` from the form field.

  var enumOptions = options.enumOptions,
      _options$onChange = options.onChange,
      optionsOnChange = _options$onChange === void 0 ? null : _options$onChange; // Find the value item in the list of `enumOptions`.

  var value = enumOptions.find(function (option) {
    return option.value === valueProps;
  }) || null; // `onChange` handler for the `Select`.

  var _handleOnChange = function _handleOnChange(event) {
    var newValue = getSelectInputValue(event);
    var onChangeValue = getSelectWidgetValue(schema, newValue); // Fire the `onChange` passed in from the Form.

    typeof onChange === 'function' && onChange(onChangeValue); // Call the `onChange` handler if available from the options.

    typeof optionsOnChange === 'function' && optionsOnChange(onChangeValue);
  }; // Render the default `Select` component.


  return _react.default.createElement(_Select.default, {
    inputId: id,
    isDisabled: disabled || readonly,
    isMulti: multiple,
    onChange: _handleOnChange,
    options: enumOptions || [],
    placeholder: placeholder,
    required: required,
    value: value
  });
}

ReactSelectWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  multiple: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object.isRequired,
  value: _propTypes.default.any,
  readonly: _propTypes.default.bool
} : {};
ReactSelectWidget.defaultProps = {
  disabled: null,
  multiple: null,
  options: null,
  placeholder: null,
  required: null,
  value: null,
  readonly: null
};
var _default = ReactSelectWidget;
exports.default = _default;