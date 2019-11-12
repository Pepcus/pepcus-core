import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import styled from 'styled-components';
import ButtonIcon from "./ButtonIcon";
const ButtonSwitchInput = styled.input.withConfig({
  displayName: "ButtonSwitch__ButtonSwitchInput",
  componentId: "sc-1crtpr1-0"
})(["cursor:inherit;height:100%;left:0;margin:0;opacity:0;padding:0;position:absolute;top:0;width:100%;"]);

class ButtonSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.handleFocus = event => {
      const onFocus = this.props.onFocus;

      if (typeof onFocus === 'function') {
        onFocus(event);
      }
    };

    this.handleBlur = event => {
      const onBlur = this.props.onBlur;

      if (typeof onBlur === 'function') {
        onBlur(event);
      }
    };

    this.handleChange = event => {
      const _this$props = this.props,
            onChange = _this$props.onChange,
            checkedProps = _this$props.checked;

      let checked = _get(event, 'target.checked');

      if (checkedProps != null) {
        checked = checkedProps;
      }

      this.setState(() => ({
        checked
      }));

      if (typeof onChange === 'function') {
        onChange(event, checked);
      }
    };

    const _checked = this.props.checked;
    this.state = {
      checked: _checked || false
    };
  }

  render() {
    const _this$props2 = this.props,
          checkedIcon = _this$props2.checkedIcon,
          disabled = _this$props2.disabled,
          icon = _this$props2.icon,
          id = _this$props2.id,
          inputProps = _this$props2.inputProps,
          inputRef = _this$props2.inputRef,
          name = _this$props2.name,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onFocus = _this$props2.onFocus,
          readOnly = _this$props2.readOnly,
          required = _this$props2.required,
          type = _this$props2.type,
          value = _this$props2.value,
          other = _objectWithoutProperties(_this$props2, ["checkedIcon", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "type", "value"]);

    const checked = this.state.checked;
    const hasLabelFor = type === 'checkbox' || type === 'radio';
    return React.createElement(ButtonIcon, Object.assign({
      disabled: disabled,
      noMinWidth: true,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      role: undefined,
      tabIndex: null
    }, other), checked ? checkedIcon : icon, React.createElement(ButtonSwitchInput, Object.assign({
      checked: checked,
      disabled: disabled,
      id: hasLabelFor && id,
      name: name,
      onChange: this.handleChange,
      readOnly: readOnly,
      ref: inputRef,
      required: required,
      type: type,
      value: value
    }, inputProps)));
  }

}

ButtonSwitch.defaultProps = {
  checked: null,
  checkedIcon: null,
  className: '',
  disabled: false,
  icon: null,
  id: null,
  inputProps: null,
  inputRef: null,
  name: '',
  onBlur: null,
  onChange: null,
  onFocus: null,
  readOnly: false,
  required: false,
  type: 'checkbox',
  value: ''
};
ButtonSwitch.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is marked as checked.
   */
  checked: PropTypes.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * If `true`, the Button will be disabled.
   */
  disabled: PropTypes.bool,

  /**
   * The Icon to display when the component is unchecked.
   */
  icon: PropTypes.node,

  /**
   * The id for the `input` element.
   */
  id: PropTypes.string,

  /**
   * The attributes for the `input` element.
   */
  inputProps: PropTypes.object,

  /**
   * Attaches a React ref to the native input component.
   * Can use a `node => this.ref = node` function, or a `React.createRef()` object.
   */
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * @ignore
   */
  name: PropTypes.string,

  /**
   * @ignore
   */
  onBlur: PropTypes.func,

  /**
   * Callback fired when the internal state is changed.
   */
  onChange: PropTypes.func,

  /**
   * @ignore
   */
  onFocus: PropTypes.func,

  /**
   * Set the element to be read-only.
   */
  readOnly: PropTypes.bool,

  /**
   * If `true`, the input will be required.
   */
  required: PropTypes.bool,

  /**
   * The `type` of internal input.
   */
  type: PropTypes.string,

  /**
   * The value of the internal input component.
   */
  value: PropTypes.string
} : {};
export default ButtonSwitch;