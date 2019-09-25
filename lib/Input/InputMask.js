"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _reactTextMask = _interopRequireWildcard(require("react-text-mask"));

var _Input = _interopRequireDefault(require("./Input"));

/**
 * An Input Mask component, encapsulating the default Input Component.
 * See the @link for more documentation on how to use the Input Mask.
 *
 * @see {@link https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md}
 * @method      InputMask
 * @param       {Object}  props The props
 * @constructor
 */
function InputMask(props) {
  var mask = props.mask,
      value = props.value,
      rest = (0, _objectWithoutProperties2.default)(props, ["mask", "value"]); // Transform the passed in value via the given mask.

  var conformedValue = Array.isArray(mask) && mask.length > 0 ? (0, _reactTextMask.conformToMask)("".concat(value), mask).conformedValue : value; // Render function for the MaskedInput to render the styled-component Input.

  function render(ref, inputProps) {
    return _react.default.createElement(_Input.default, Object.assign({
      ref: ref
    }, inputProps));
  } // Return the MaskedInput.


  return _react.default.createElement(_reactTextMask.default, Object.assign({}, rest, {
    value: conformedValue,
    mask: mask,
    render: render
  }));
}

InputMask.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Array or a function that defines how the user input is going to be masked
   */
  mask: _propTypes.default.array,

  /**
   * Should be set to true if the mask needs to be displayed as the placeholder
   */
  showMask: _propTypes.default.bool,

  /**
   * Current value of the input
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
InputMask.defaultProps = {
  mask: null,
  showMask: false,
  value: null
};
var _default = InputMask;
exports.default = _default;