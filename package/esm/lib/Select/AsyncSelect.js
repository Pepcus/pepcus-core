import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import AsyncReactSelect from 'react-select/lib/Async';
import React from 'react';
import { withTheme } from 'styled-components';
import DropdownIndicator from "./DropdownIndicator";
import getSelectStyles from "./SelectStyles";
/**
 * Shallow wrapper around the `react-select`.
 *
 * @method      AsyncSelect
 * @param       {Object} props The props for the component.
 * @constructor
 */

function AsyncSelect(props) {
  const components = props.components,
        id = props.id,
        inputId = props.inputId,
        onChange = props.onChange,
        value = props.value,
        required = props.required,
        theme = props.theme,
        rest = _objectWithoutProperties(props, ["components", "id", "inputId", "onChange", "value", "required", "theme"]); // Create a ref for the input field.


  const inputRef = React.useRef(null); // Render a `ReactSelect` select options element.

  return React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, React.createElement(AsyncReactSelect, Object.assign({
    classNamePrefix: "RavenSelect-Async",
    components: _objectSpread({
      DropdownIndicator
    }, components),
    menuPlacement: "auto",
    ref: inputRef,
    onChange: onChange,
    id: id || inputId
  }, rest, {
    styles: getSelectStyles(theme),
    required: required,
    value: value || null
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

AsyncSelect.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Components for the dropdown
   */
  components: PropTypes.object,

  /**
   * the dropdown identifier
   */
  id: PropTypes.string,

  /**
   * the dropdown's input identifier
   */
  inputId: PropTypes.string,

  /**
   * On Change Callback
   */
  onChange: PropTypes.func,

  /**
   * 'true' if the input value is required
   */
  required: PropTypes.bool,

  /**
   * the THEME object
   */
  theme: PropTypes.object,

  /**
   * Value of the input field
   */
  value: PropTypes.any
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
export default withTheme(AsyncSelect);