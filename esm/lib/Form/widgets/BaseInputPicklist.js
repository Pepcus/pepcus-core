import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _set from 'lodash/set';
import getDisplayName from 'recompose/getDisplayName';
import styled from 'styled-components';
import Button from "../../Button";
import Input from "../../Input";
import InputMask from "../../Input/InputMask";
import { getThemeProps } from "../../../utils/theme";
import { isClassComponent } from "../../../utils/component";
const PicklistButton = styled.div.withConfig({
  displayName: "BaseInputPicklist__PicklistButton",
  componentId: "gunj1i-0"
})([""]);
const BaseInputPicklistStyled = styled.div.withConfig({
  displayName: "BaseInputPicklist__BaseInputPicklistStyled",
  componentId: "gunj1i-1"
})(["align-items:center;display:flex;justify-content:flex-start;", "{margin-left:15px;}", ";"], PicklistButton, getThemeProps('BaseInputPicklist.styles'));

class BaseInputPicklist extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      showPicklist: false
    };

    this.getPicklistComponent = () => {
      const _this$props = this.props,
            formContext = _this$props.formContext,
            schema = _this$props.schema; // Extract the picklist out of the schema

      const picklist = _get(schema, 'picklist'); // Extract the picklists from the formContext


      const contextPicklists = _get(formContext, 'picklists'); // Find the picklist component from the contextPicklists


      const PicklistComponent = !_isEmpty(picklist) && picklist.id && contextPicklists.find(item => getDisplayName(item).includes(picklist.id)); // Determine whether the found component is a valid react component.
      // This validation excludes HTML tagNames, and strings, it must be a functional stateless or statefull or styled component.

      const valid = React.isValidElement(PicklistComponent) || isClassComponent(PicklistComponent); // If needed, we can assign a ref for the wrapped or regular React component

      const PicklistRef = valid && (PicklistComponent.WrappedComponent || PicklistComponent);
      return {
        valid,
        picklistProps: picklist,
        Component: PicklistComponent,
        componentRef: PicklistRef
      };
    };

    this.handlePicklistClose = () => {
      this.setState(() => ({
        showPicklist: false
      }));
    };

    this.handlePicklistOnPick = ({
      formData
    }) => {
      if (!_isEmpty(formData)) {
        this.handleUpdateFormData(formData);
        this.handlePicklistClose();
      }
    };

    this.handlePicklistShow = () => {
      this.setState(() => ({
        showPicklist: true
      }));
    };

    this.handleUpdateFormData = formData => {
      const _this$props2 = this.props,
            formContext = _this$props2.formContext,
            schema = _this$props2.schema; // Make a copy of the current formData from the formContext

      const updatedFormData = _objectSpread({}, formContext.getFormData()); // Extract the pickmap out of the schema


      const pickmap = _get(schema, 'pickmap'); // For each of the keys in the pickmap we will update the
      // copied form data (updatedFormData)


      Object.keys(pickmap).forEach(pickMapKey => {
        _set(updatedFormData, pickMapKey, _get(formData, pickmap[pickMapKey]));
      }); // Update the form with the newly set data

      formContext.updateFormData({
        formData: updatedFormData
      });
    };

    this.renderPicklist = () => {
      const showPicklist = this.state.showPicklist;
      const readonly = this.props.readonly;
      const Picklist = this.getPicklistComponent();

      if (readonly || !Picklist.valid) {
        return null;
      }

      return React.createElement(PicklistButton, null, React.createElement(Button, {
        noMinWidth: true,
        type: "button",
        onClick: this.handlePicklistShow
      }, "..."), React.createElement(Picklist.Component, {
        close: this.handlePicklistClose,
        onPick: this.handlePicklistOnPick,
        isOpen: showPicklist,
        picklistProps: Picklist.picklistProps
      }));
    };
  }

  render() {
    const _this$props3 = this.props,
          autofocus = _this$props3.autofocus,
          disabled = _this$props3.disabled,
          formContext = _this$props3.formContext,
          id = _this$props3.id,
          onBlur = _this$props3.onBlur,
          onChange = _this$props3.onChange,
          onFocus = _this$props3.onFocus,
          options = _this$props3.options,
          readonly = _this$props3.readonly,
          registry = _this$props3.registry,
          schema = _this$props3.schema,
          value = _this$props3.value,
          inputProps = _objectWithoutProperties(_this$props3, ["autofocus", "disabled", "formContext", "id", "onBlur", "onChange", "onFocus", "options", "readonly", "registry", "schema", "value"]);

    if (!id) {
      throw new Error(`no id for BaseInputPicklist ${JSON.stringify(this.props)}`);
    }

    inputProps.type = options.inputType || inputProps.type || 'text';

    const _onChange = ({
      target: {
        value
      }
    }) => onChange(value === '' ? options.emptyValue : value);

    const rawErrors = inputProps.rawErrors,
          cleanProps = _objectWithoutProperties(inputProps, ["rawErrors"]); // Determine if we are rendering an input mask.


    const maskedInput = Boolean(!_isEmpty(options.inputMask) && options.inputMask.mask && Array.isArray(options.inputMask.mask)); // Render the masked input if there is a mask option available.

    if (maskedInput) {
      return React.createElement(BaseInputPicklistStyled, null, React.createElement(InputMask, Object.assign({}, options.inputMask, {
        guide: options.inputMask.guide || true,
        autoFocus: autofocus,
        disabled: disabled,
        id: id,
        readOnly: readonly,
        showMask: options.showMaskPlaceholder,
        value: value == null ? '' : value
      }, cleanProps, {
        onChange: _onChange,
        onBlur: typeof onBlur === 'function' && (event => onBlur(id, event.target.value)),
        onFocus: typeof onFocus === 'function' && (event => onFocus(id, event.target.value))
      })));
    }

    return React.createElement(BaseInputPicklistStyled, null, React.createElement(Input, Object.assign({
      autoFocus: autofocus,
      disabled: disabled,
      id: id,
      readOnly: readonly,
      value: value == null ? '' : value
    }, cleanProps, {
      onChange: _onChange,
      onBlur: typeof onBlur === 'function' && (event => onBlur(id, event.target.value)),
      onFocus: typeof onFocus === 'function' && (event => onFocus(id, event.target.value))
    })), this.renderPicklist());
  }

}

BaseInputPicklist.propTypes = process.env.NODE_ENV !== "production" ? {
  autofocus: PropTypes.bool,
  disabled: PropTypes.bool,
  formContext: PropTypes.object,
  id: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  options: PropTypes.object,
  readonly: PropTypes.bool,
  registry: PropTypes.object,
  required: PropTypes.bool,
  schema: PropTypes.object,
  value: PropTypes.any
} : {};
BaseInputPicklist.defaultProps = {
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
export default BaseInputPicklist;