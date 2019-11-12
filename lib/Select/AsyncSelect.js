"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Async = _interopRequireDefault(require("react-select/lib/Async"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _DropdownIndicator = _interopRequireDefault(require("./DropdownIndicator"));

var _SelectStyles = _interopRequireDefault(require("./SelectStyles"));

/**
 * Shallow wrapper around the `react-select`.
 *
 * @method      AsyncSelect
 * @param       {Object} props The props for the component.
 * @constructor
 */
function AsyncSelect(props) {
  var components = props.components,
      id = props.id,
      inputId = props.inputId,
      onChange = props.onChange,
      value = props.value,
      required = props.required,
      theme = props.theme,
      rest = (0, _objectWithoutProperties2.default)(props, ["components", "id", "inputId", "onChange", "value", "required", "theme"]); // Create a ref for the input field.

  var inputRef = _react.default.useRef(null); // Render a `ReactSelect` select options element.


  return _react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, _react.default.createElement(_Async.default, Object.assign({
    classNamePrefix: "RavenSelect-Async",
    components: (0, _objectSpread2.default)({
      DropdownIndicator: _DropdownIndicator.default
    }, components),
    menuPlacement: "auto",
    ref: inputRef,
    onChange: onChange,
    id: id || inputId
  }, rest, {
    styles: (0, _SelectStyles.default)(theme),
    required: required,
    value: value || null
  })), _react.default.createElement("input", {
    id: "".concat(id || inputId, "__hidden"),
    tabIndex: -1,
    value: value || '',
    required: required,
    onChange: onChange,
    style: {
      height: '100%',
      left: 0,
      opacity: 0,
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -100
    },
    onFocus: function onFocus() {
      return inputRef.current.focus();
    }
  }));
}

AsyncSelect.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Components for the dropdown
   */
  components: _propTypes.default.object,

  /**
   * the dropdown identifier
   */
  id: _propTypes.default.string,

  /**
   * the dropdown's input identifier
   */
  inputId: _propTypes.default.string,

  /**
   * On Change Callback
   */
  onChange: _propTypes.default.func,

  /**
   * 'true' if the input value is required
   */
  required: _propTypes.default.bool,

  /**
   * the THEME object
   */
  theme: _propTypes.default.object,

  /**
   * Value of the input field
   */
  value: _propTypes.default.any
} : {};
AsyncSelect.defaultProps = {
  components: null,
  id: null,
  inputId: null,
  onChange: null,
  required: false,
  theme: null,
  // TODO: Remove once the 'required' hack is not needed
  // Setting to undefined to avoid passing null to the <input>
  value: undefined
};

var _default = (0, _styledComponents.withTheme)(AsyncSelect);

exports.default = _default;