"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _TextArea = _interopRequireDefault(require("../../TextArea"));

function TextAreaWidget(props) {
  var autofocus = props.autofocus,
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
      inputProps = (0, _objectWithoutProperties2.default)(props, ["autofocus", "disabled", "formContext", "id", "onBlur", "onChange", "onFocus", "options", "readonly", "registry", "schema", "value"]);

  if (!id) {
    console.log('No id for TextAreaWidget :', props); // eslint-disable-line no-console

    throw new Error("no id for TextAreaWidget ".concat(JSON.stringify(props)));
  }

  var _options$inputType = options.inputType,
      inputType = _options$inputType === void 0 ? '' : _options$inputType,
      _options$emptyValue = options.emptyValue,
      emptyValue = _options$emptyValue === void 0 ? '' : _options$emptyValue,
      label = options.label,
      enumOptions = options.enumOptions,
      optionProps = (0, _objectWithoutProperties2.default)(options, ["inputType", "emptyValue", "label", "enumOptions"]);
  inputProps.type = inputType || inputProps.type || 'textarea';

  var _onChange = function _onChange(_ref) {
    var value = _ref.target.value;
    return onChange(value === '' ? emptyValue : value);
  };

  var rawErrors = inputProps.rawErrors,
      cleanProps = (0, _objectWithoutProperties2.default)(inputProps, ["rawErrors"]);
  return _react.default.createElement(_TextArea.default, Object.assign({
    autoFocus: autofocus,
    disabled: disabled,
    id: id,
    readOnly: readonly,
    value: value == null ? '' : value,
    rows: 5
  }, optionProps, cleanProps, {
    onChange: _onChange,
    onBlur: typeof onBlur === 'function' && function (event) {
      return onBlur(id, event.target.value);
    },
    onFocus: typeof onFocus === 'function' && function (event) {
      return onFocus(id, event.target.value);
    }
  }));
}

TextAreaWidget.propTypes = process.env.NODE_ENV !== "production" ? {
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
var _default = TextAreaWidget;
exports.default = _default;