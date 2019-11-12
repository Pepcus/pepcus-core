import PropTypes from 'prop-types';
import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import styled from 'styled-components';
import Divider from "../../Divider";
import { getThemeProps } from "../../../utils/theme";
const CheckboxWidgetStyled = styled.div.withConfig({
  displayName: "CheckboxWidget__CheckboxWidgetStyled",
  componentId: "amzdr3-0"
})(["font-size:14px;label{align-items:baseline;display:flex;justify-content:flex-start;margin:0;input{margin-right:10px;}}", ";"], getThemeProps('CheckboxWidget.styles'));

function CheckboxWidget(props) {
  const id = props.id,
        value = props.value,
        required = props.required,
        disabled = props.disabled,
        readonly = props.readonly,
        label = props.label,
        onChange = props.onChange,
        options = props.options;
  const divider = options.divider,
        className = options.className;
  const renderDivider = typeof divider === 'boolean' ? divider : !_isEmpty(divider);
  return React.createElement(CheckboxWidgetStyled, {
    className: className,
    disabled: disabled || readonly
  }, React.createElement("label", {
    htmlFor: id
  }, React.createElement("input", {
    checked: typeof value === 'undefined' ? false : value,
    disabled: disabled || readonly,
    id: id,
    onChange: event => onChange && onChange(event.target.checked),
    required: required,
    type: "checkbox"
  }), React.createElement("span", null, label)), renderDivider && React.createElement(Divider, divider));
}

CheckboxWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
  readonly: PropTypes.bool,
  required: PropTypes.bool,
  value: PropTypes.bool
} : {};
CheckboxWidget.defaultProps = {
  disabled: false,
  label: '',
  onChange: null,
  options: null,
  readonly: false,
  required: false,
  value: false
};
export default CheckboxWidget;