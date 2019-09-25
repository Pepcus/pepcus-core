import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import ReactSelect from 'react-select';
import { withTheme } from 'styled-components';
import DropdownIndicator from "./DropdownIndicator";
import getSelectStyles from "./SelectStyles";
/**
 * Shallow wrapper around the `react-select`.
 *
 * @method      Select
 * @param       {Object} props The props for the component.
 * @constructor
 */

function Select(props) {
  const components = props.components,
        id = props.id,
        inputId = props.inputId,
        onChange = props.onChange,
        required = props.required,
        theme = props.theme,
        value = props.value,
        rest = _objectWithoutProperties(props, ["components", "id", "inputId", "onChange", "required", "theme", "value"]); // Create a ref for the input field.


  const inputRef = React.useRef(null); // Render a `ReactSelect` select options element.

  return React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(ReactSelect, Object.assign({
    classNamePrefix: "RavenSelect",
    components: _objectSpread({
      DropdownIndicator
    }, components),
    menuPlacement: "auto",
    ref: inputRef,
    onChange: onChange,
    id: id || inputId
  }, rest, {
    styles: getSelectStyles(props),
    required: required,
    value: value
  })), React.createElement("input", {
    id: `${id || inputId}__hidden`,
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
    onFocus: () => inputRef.current.focus()
  }));
}

Select.propTypes = process.env.NODE_ENV !== "production" ? {
  components: PropTypes.object,

  /**
   * Shadow depth for the box.
   * Accepts values between 0 and 24.
   */
  elevation: PropTypes.number,

  /**
   * Direction for the shadow depth for the box.
   * Accepts either `top` or `bottom`.
   */
  elevationDirection: PropTypes.oneOf(['top', 'bottom']),
  id: PropTypes.string,
  inputId: PropTypes.string,

  /**
   * On Change Callback
   */
  onChange: PropTypes.func,

  /**
   * 'true' if the input value is required
   */
  required: PropTypes.bool,
  theme: PropTypes.object,

  /**
   * Value of the input field
   */
  value: PropTypes.any
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
export default withTheme(Select);