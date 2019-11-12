import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import Input from "../../Input";

function BaseInput(props) {
  const autofocus = props.autofocus,
        disabled = props.disabled,
        formContext = props.formContext,
        id = props.id,
        onBlur = props.onBlur,
        onFocus = props.onFocus,
        options = props.options,
        readonly = props.readonly,
        registry = props.registry,
        schema = props.schema,
        value = props.value,
        inputProps = _objectWithoutProperties(props, ["autofocus", "disabled", "formContext", "id", "onBlur", "onFocus", "options", "readonly", "registry", "schema", "value"]);

  if (!id) {
    console.log('No id for BaseInput :', props); // eslint-disable-line no-console

    throw new Error(`no id for BaseInput ${JSON.stringify(props)}`);
  }

  inputProps.type = options.inputType || inputProps.type || 'text';

  const _onChange = ({
    target: {
      value
    }
  }) => props.onChange(value === '' ? options.emptyValue : value);

  const rawErrors = inputProps.rawErrors,
        cleanProps = _objectWithoutProperties(inputProps, ["rawErrors"]);

  return React.createElement(Input, Object.assign({
    autoFocus: autofocus,
    disabled: disabled,
    id: id,
    readOnly: readonly,
    value: value == null ? '' : value
  }, cleanProps, {
    onChange: _onChange,
    onBlur: typeof onBlur === 'function' && (event => onBlur(inputProps.id, event.target.value)),
    onFocus: typeof onFocus === 'function' && (event => onFocus(inputProps.id, event.target.value))
  }));
}

BaseInput.propTypes = process.env.NODE_ENV !== "production" ? {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  formContext: PropTypes.object,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  options: PropTypes.object,
  readonly: PropTypes.bool,
  registry: PropTypes.object,
  required: PropTypes.bool,
  schema: PropTypes.object,
  value: PropTypes.any
} : {};
BaseInput.defaultProps = {
  autofocus: false,
  disabled: false,
  formContext: null,
  onBlur: false,
  onChange: false,
  onFocus: false,
  options: null,
  readonly: false,
  registry: null,
  required: false,
  schema: null,
  value: null
};
export default BaseInput;