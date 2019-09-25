"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Input = _interopRequireDefault(require("../../Input"));

function BaseInput(props) {
  var autofocus = props.autofocus,
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
      inputProps = (0, _objectWithoutProperties2.default)(props, ["autofocus", "disabled", "formContext", "id", "onBlur", "onFocus", "options", "readonly", "registry", "schema", "value"]);

  if (!id) {
    console.log('No id for BaseInput :', props); // eslint-disable-line no-console

    throw new Error("no id for BaseInput ".concat(JSON.stringify(props)));
  }

  inputProps.type = options.inputType || inputProps.type || 'text';

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return props.onChange(value === '' ? options.emptyValue : value);
  };

  var rawErrors = inputProps.rawErrors,
      cleanProps = (0, _objectWithoutProperties2.default)(inputProps, ["rawErrors"]);
  return _react.default.createElement(_Input.default, Object.assign({
    autoFocus: autofocus,
    disabled: disabled,
    id: id,
    readOnly: readonly,
    value: value == null ? '' : value
  }, cleanProps, {
    onChange: _onChange,
    onBlur: typeof onBlur === 'function' && function (event) {
      return onBlur(inputProps.id, event.target.value);
    },
    onFocus: typeof onFocus === 'function' && function (event) {
      return onFocus(inputProps.id, event.target.value);
    }
  }));
}

BaseInput.propTypes = process.env.NODE_ENV !== "production" ? {
  autofocus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  formContext: _propTypes.default.object,
  id: _propTypes.default.string.isRequired,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  options: _propTypes.default.object,
  readonly: _propTypes.default.bool,
  registry: _propTypes.default.object,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object,
  value: _propTypes.default.any
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
var _default = BaseInput;
exports.default = _default;