import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import MaskedInput, { conformToMask } from 'react-text-mask';
import Input from "./Input";
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
  const mask = props.mask,
        value = props.value,
        rest = _objectWithoutProperties(props, ["mask", "value"]); // Transform the passed in value via the given mask.


  const conformedValue = Array.isArray(mask) && mask.length > 0 ? conformToMask(`${value}`, mask).conformedValue : value; // Render function for the MaskedInput to render the styled-component Input.

  function render(ref, inputProps) {
    return React.createElement(Input, Object.assign({
      ref: ref
    }, inputProps));
  } // Return the MaskedInput.


  return React.createElement(MaskedInput, Object.assign({}, rest, {
    value: conformedValue,
    mask: mask,
    render: render
  }));
}

InputMask.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Array or a function that defines how the user input is going to be masked
   */
  mask: PropTypes.array,

  /**
   * Should be set to true if the mask needs to be displayed as the placeholder
   */
  showMask: PropTypes.bool,

  /**
   * Current value of the input
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
} : {};
InputMask.defaultProps = {
  mask: null,
  showMask: false,
  value: null
};
export default InputMask;