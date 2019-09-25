"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = require("../../Select");

var _number = require("../../../utils/number");

var _actions = require("../../../utils/actions");

var _identity = function _identity(val) {
  return val;
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
 * @method      AsyncReactSelectWidget
 * @param       {Object}               props The props for the component
 * @constructor
 */


function AsyncReactSelectWidget(props) {
  var disabled = props.disabled,
      formContext = props.formContext,
      id = props.id,
      onChange = props.onChange,
      options = props.options,
      placeholder = props.placeholder,
      schema = props.schema,
      valueProps = props.value;
  var _formContext$handlers = formContext.handlers,
      handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers; // Extract out the `enumOptions` from the form field.

  var enumOptions = options.enumOptions,
      _options$getOptionLab = options.getOptionLabelRef,
      getOptionLabelRef = _options$getOptionLab === void 0 ? '' : _options$getOptionLab,
      _options$getOptionVal = options.getOptionValueRef,
      getOptionValueRef = _options$getOptionVal === void 0 ? '' : _options$getOptionVal,
      _options$loadOptionsR = options.loadOptionsRef,
      loadOptionsRef = _options$loadOptionsR === void 0 ? '' : _options$loadOptionsR,
      _options$loadingMessa = options.loadingMessageRef,
      loadingMessageRef = _options$loadingMessa === void 0 ? '' : _options$loadingMessa,
      _options$noOptionsMes = options.noOptionsMessageRef,
      noOptionsMessageRef = _options$noOptionsMes === void 0 ? '' : _options$noOptionsMes; // Find the value item in the list of `enumOptions`.

  var value = enumOptions.find(function (option) {
    return option.value === valueProps;
  }); // Attach action handlers to the required async functions.

  var getOptionLabel = (0, _actions.getHandler)(handlers, getOptionLabelRef, _identity);
  var getOptionValue = (0, _actions.getHandler)(handlers, getOptionValueRef, _identity);
  var loadOptions = (0, _actions.getHandler)(handlers, loadOptionsRef, _identity);
  var loadingMessage = (0, _actions.getHandler)(handlers, loadingMessageRef, _identity);
  var noOptionsMessage = (0, _actions.getHandler)(handlers, noOptionsMessageRef, _identity); // `onChange` handler for the `Select`.

  var _handleOnChange = function _handleOnChange(value) {
    var optionValue = value && getOptionValue(value) || null;
    typeof onChange === 'function' && onChange(getSelectWidgetValue(schema, optionValue));
  }; // Render the default `Select` component.


  return _react.default.createElement(_Select.AsyncSelect, {
    cacheOptions: true,
    defaultOptions: true,
    getOptionLabel: getOptionLabel,
    getOptionValue: getOptionValue,
    inputId: id,
    isDisabled: disabled,
    loadOptions: loadOptions,
    loadingMessage: loadingMessage,
    noOptionsMessage: noOptionsMessage,
    onChange: _handleOnChange,
    options: enumOptions || [],
    placeholder: placeholder,
    value: value
  });
}

AsyncReactSelectWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes.default.bool,
  formContext: _propTypes.default.object.isRequired,
  id: _propTypes.default.string.isRequired,
  multiple: _propTypes.default.bool,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  schema: _propTypes.default.object.isRequired,
  value: _propTypes.default.any
} : {};
AsyncReactSelectWidget.defaultProps = {
  disabled: null,
  multiple: null,
  options: null,
  placeholder: 'Select an Option...',
  value: null
};
var _default = AsyncReactSelectWidget;
exports.default = _default;