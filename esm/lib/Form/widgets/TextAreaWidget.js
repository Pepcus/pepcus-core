import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import TextArea from "../../TextArea";

function TextAreaWidget(props) {
  const autofocus = props.autofocus,
        disabled = props.disabled,
        formContext = props.formContext,
        id = props.id,
        onBlur = props.onBlur,
        onChange = props.onChange,
        onFocus = props.onFocus,
        options = props.options,
        readonly = props.readonly,
        registry = props.registry,
        schema = props.schema,
        value = props.value,
        inputProps = _objectWithoutProperties(props, ["autofocus", "disabled", "formContext", "id", "onBlur", "onChange", "onFocus", "options", "readonly", "registry", "schema", "value"]);

  if (!id) {
    console.log('No id for TextAreaWidget :', props); // eslint-disable-line no-console

    throw new Error(`no id for TextAreaWidget ${JSON.stringify(props)}`);
  }

  const _options$inputType = options.inputType,
        inputType = _options$inputType === void 0 ? '' : _options$inputType,
        _options$emptyValue = options.emptyValue,
        emptyValue = _options$emptyValue === void 0 ? '' : _options$emptyValue,
        label = options.label,
        enumOptions = options.enumOptions,
        optionProps = _objectWithoutProperties(options, ["inputType", "emptyValue", "label", "enumOptions"]);

  inputProps.type = inputType || inputProps.type || 'textarea';

  const _onChange = ({
    target: {
      value
    }
  }) => onChange(value === '' ? emptyValue : value);

  const rawErrors = inputProps.rawErrors,
        cleanProps = _objectWithoutProperties(inputProps, ["rawErrors"]);

  return React.createElement(TextArea, Object.assign({
    autoFocus: autofocus,
    disabled: disabled,
    id: id,
    readOnly: readonly,
    value: value == null ? '' : value,
    rows: 5
  }, optionProps, cleanProps, {
    onChange: _onChange,
    onBlur: typeof onBlur === 'function' && (event => onBlur(id, event.target.value)),
    onFocus: typeof onFocus === 'function' && (event => onFocus(id, event.target.value))
  }));
}

TextAreaWidget.propTypes = process.env.NODE_ENV !== "production" ? {
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
TextAreaWidget.defaultProps = {
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
export default TextAreaWidget;