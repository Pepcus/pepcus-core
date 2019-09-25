import React from 'react';
import PropTypes from 'prop-types';
import { AsyncSelect } from "../../Select";
import { parseAsNumber } from "../../../utils/number";
import { getHandler } from "../../../utils/actions";

const _identity = val => val;
/**
 * Get the select widgets value
 *
 * @method getSelectWidgetValue
 * @param  {Object}             schema The form schema
 * @param  {Any}                value  The value for the select widget
 * @return {Any}                       The final value
 */


const getSelectWidgetValue = ({
  type,
  items
}, value) => {
  const NUMBER_INT = ['number', 'integer'];

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && NUMBER_INT.includes(items.type)) {
    return value.map(parseAsNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return parseAsNumber(value);
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
  const disabled = props.disabled,
        formContext = props.formContext,
        id = props.id,
        onChange = props.onChange,
        options = props.options,
        placeholder = props.placeholder,
        schema = props.schema,
        valueProps = props.value;
  const _formContext$handlers = formContext.handlers,
        handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers; // Extract out the `enumOptions` from the form field.

  const enumOptions = options.enumOptions,
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

  const value = enumOptions.find(option => option.value === valueProps); // Attach action handlers to the required async functions.

  const getOptionLabel = getHandler(handlers, getOptionLabelRef, _identity);
  const getOptionValue = getHandler(handlers, getOptionValueRef, _identity);
  const loadOptions = getHandler(handlers, loadOptionsRef, _identity);
  const loadingMessage = getHandler(handlers, loadingMessageRef, _identity);
  const noOptionsMessage = getHandler(handlers, noOptionsMessageRef, _identity); // `onChange` handler for the `Select`.

  const _handleOnChange = value => {
    const optionValue = value && getOptionValue(value) || null;
    typeof onChange === 'function' && onChange(getSelectWidgetValue(schema, optionValue));
  }; // Render the default `Select` component.


  return React.createElement(AsyncSelect, {
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
  disabled: PropTypes.bool,
  formContext: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
  schema: PropTypes.object.isRequired,
  value: PropTypes.any
} : {};
AsyncReactSelectWidget.defaultProps = {
  disabled: null,
  multiple: null,
  options: null,
  placeholder: 'Select an Option...',
  value: null
};
export default AsyncReactSelectWidget;