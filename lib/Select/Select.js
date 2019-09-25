"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _styledComponents = require("styled-components");

var _DropdownIndicator = _interopRequireDefault(require("./DropdownIndicator"));

var _SelectStyles = _interopRequireDefault(require("./SelectStyles"));

/**
 * Shallow wrapper around the `react-select`.
 *
 * @method      Select
 * @param       {Object} props The props for the component.
 * @constructor
 */
function Select(props) {
  var components = props.components,
      id = props.id,
      inputId = props.inputId,
      onChange = props.onChange,
      required = props.required,
      theme = props.theme,
      value = props.value,
      rest = (0, _objectWithoutProperties2.default)(props, ["components", "id", "inputId", "onChange", "required", "theme", "value"]); // Create a ref for the input field.

  var inputRef = _react.default.useRef(null); // Render a `ReactSelect` select options element.


  return _react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, _react.default.createElement(_reactSelect.default, Object.assign({
    classNamePrefix: "RavenSelect",
    components: (0, _objectSpread2.default)({
      DropdownIndicator: _DropdownIndicator.default
    }, components),
    menuPlacement: "auto",
    ref: inputRef,
    onChange: onChange,
    id: id || inputId
  }, rest, {
    styles: (0, _SelectStyles.default)(props),
    required: required,
    value: value
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

Select.propTypes = process.env.NODE_ENV !== "production" ? {
  components: _propTypes.default.object,

  /**
   * Shadow depth for the box.
   * Accepts values between 0 and 24.
   */
  elevation: _propTypes.default.number,

  /**
   * Direction for the shadow depth for the box.
   * Accepts either `top` or `bottom`.
   */
  elevationDirection: _propTypes.default.oneOf(['top', 'bottom']),
  id: _propTypes.default.string,
  inputId: _propTypes.default.string,

  /**
   * On Change Callback
   */
  onChange: _propTypes.default.func,

  /**
   * 'true' if the input value is required
   */
  required: _propTypes.default.bool,
  theme: _propTypes.default.object,

  /**
   * Value of the input field
   */
  value: _propTypes.default.any
} : {};
Select.defaultProps = {
  components: null,
  elevation: 10,
  elevationDirection: 'bottom',
  id: null,
  inputId: null,
  onChange: null,
  required: false,
  theme: null,
  // TODO: Remove once the 'required' hack is not needed
  // Setting to undefined to avoid passing null to the <input>
  value: undefined
};

var _default = (0, _styledComponents.withTheme)(Select);

exports.default = _default;