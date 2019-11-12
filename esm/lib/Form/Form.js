import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";

/* eslint-disable react/no-did-update-set-state */
import JsonSchemaForm from 'react-jsonschema-form';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import _isEqual from 'lodash/isEqual';
import styled from 'styled-components';
import Loading from "../Loading";
import { extractAPIConfig, fetchAPIData } from "../../utils/apis";
import { getThemeProps } from "../../utils/theme";
import { warning } from "../../utils/warning";
import FormActions from "./FormActions";
import FormDirtyCheck from "./FormDirtyCheck";
import customFields from "./fields";
import customWidgets from "./widgets";
const FormStyled = styled.div.withConfig({
  displayName: "Form__FormStyled",
  componentId: "jh2kj9-0"
})(["position:relative;", ";"], getThemeProps('Form.styles'));

class Form extends Component {
  constructor(props) {
    super(props); // Extract the `formData`, incase we need to transform it.

    this.getFormContext = () => {
      const _this$props = this.props,
            handlers = _this$props.handlers,
            formContext = _this$props.formContext;
      return _objectSpread({}, formContext, {
        getFormData: this.getFormData,
        handlers,
        updateFormData: this.updateFormData
      });
    };

    this.getFormData = () => {
      const formData = this.state.formData;
      return formData;
    };

    this.getFormSchema = () => {
      const schema = this.props.schema;
      return schema;
    };

    this.getFormUiSchema = () => {
      const _this$props2 = this.props,
            readonly = _this$props2.readonly,
            uiSchema = _this$props2.uiSchema;
      const formData = this.state.formData;

      if (typeof readonly === 'function' && readonly(formData)) {
        return _objectSpread({}, uiSchema, {
          'ui:readonly': true
        });
      }

      return uiSchema;
    };

    this.handleOnChange = form => {
      const _this$props3 = this.props,
            enableDirtyCheck = _this$props3.enableDirtyCheck,
            onChange = _this$props3.onChange;

      const outputForm = _objectSpread({}, form); // Performing the dirty only if the enableDirtyCheck flag is true for performance.


      if (enableDirtyCheck) {
        this.formDirtyCheck.onChange(form); // Adding isDirty flag in the

        outputForm.isDirty = this.formDirtyCheck.isFormDirty();
      }

      if (typeof onChange === 'function') {
        onChange(outputForm);
      }
    };

    this.handleOnError = errors => {
      const onError = this.props.onError; // Invoke the `onError` if available.

      typeof onError === 'function' && onError(errors);
    };

    this.handleSubmit = formProps => {
      const formData = formProps.formData;
      const _this$props4 = this.props,
            afterSubmit = _this$props4.afterSubmit,
            apis = _this$props4.apis,
            baseUrl = _this$props4.baseUrl,
            oAuthToken = _this$props4.oAuthToken,
            onSubmit = _this$props4.onSubmit; // Transform the data based on the 'out' func.

      const transformedData = this.transformData(formData, 'out'); // If `onSubmit` exists then invoke it.

      if (typeof onSubmit === 'function') {
        onSubmit(_objectSpread({}, formProps, {
          formData: transformedData
        }));
      } // Check to see if we have a list of `apis`
      // and the `transformedData` is not empty.


      if (!_isEmpty(transformedData) && !_isEmpty(apis)) {
        // Display a warning to user if the `oAuthToken` is empty.
        warning(!_isEmpty(oAuthToken), [`A <Form /> requires an oAuthToken to submit the requested data.`]); // Set the `loading` to true.

        this.setState(() => ({
          submittingForm: true,
          submittingFormText: 'Submitting...'
        })); // Extract the API config from the schema.

        const api = extractAPIConfig(apis, 'onSubmit'); // Extract the requeset object from API config.

        const request = _get(api, 'request', {}); // Extract the requested `dataKey` for the final fetched data.


        const dataKey = _get(api, 'dataKey', 'data'); // Build the axios config


        const config = _objectSpread({}, request, {
          baseURL: baseUrl || request.baseURL,
          data: transformedData,
          headers: {
            Authorization: `Bearer ${oAuthToken}`
          }
        }); // Check to see if the `oAuthToken` is not empty
        // before we start to make the API call.


        if (!_isEmpty(oAuthToken) && !_isEmpty(config.baseURL)) {
          // Make the API call.
          fetchAPIData(config, {
            data: dataKey
          }).then(resp => {
            setTimeout(() => {
              this.setState(() => ({
                submittingForm: false,
                submittingFormText: 'Submitted!'
              }));
            }); // Extract the data from the response.

            const data = _get(resp, 'data'); // If `afterSubmit` exists then invoke it.


            if (typeof afterSubmit === 'function') {
              afterSubmit(_objectSpread({}, formProps, {
                formData: transformedData,
                resp: data
              }));
            }
          }).catch(error => {
            setTimeout(() => {
              this.setState(() => ({
                submittingForm: false,
                submittingFormText: 'Error submitting form!'
              }));
            }); // If `afterSubmit` exists then invoke it.

            if (typeof afterSubmit === 'function') {
              afterSubmit(_objectSpread({}, formProps, {
                formData: transformedData,
                error
              }));
            }
          });
        } else {
          setTimeout(() => {
            this.setState(() => ({
              submittingForm: false,
              submittingFormText: 'Submitted!'
            }));
          }, 1000);
        }
      }
    };

    this.transformData = (formData, inOut) => {
      const _this$props5 = this.props,
            transformDataIn = _this$props5.transformDataIn,
            transformDataOut = _this$props5.transformDataOut; // Switch based on `inOut` key

      switch (inOut) {
        case 'in':
          {
            const data = typeof transformDataIn === 'function' ? transformDataIn(formData) : formData;
            return data;
          }

        case 'out':
          {
            const data = typeof transformDataOut === 'function' ? transformDataOut(formData) : formData;
            return data;
          }

        default:
          {
            return formData;
          }
      }
    };

    this.updateFormData = ({
      formData
    }) => {
      !_isEmpty(formData) && this.setState(prevState => ({
        formData: _objectSpread({}, prevState.formData, formData)
      }));
    };

    this.renderChildren = () => {
      const _this$props6 = this.props,
            actionsList = _this$props6.actionsList,
            actionsTitle = _this$props6.actionsTitle,
            children = _this$props6.children,
            externalSubmission = _this$props6.externalSubmission,
            hideActions = _this$props6.hideActions,
            readonly = _this$props6.readonly;
      const formData = this.state.formData;
      const disabled = Boolean(typeof readonly === 'function' && readonly(formData));

      if (externalSubmission) {
        return React.createElement("button", {
          ref: btn => this.submitButton = btn,
          style: {
            display: 'none'
          },
          type: "submit"
        });
      }

      if (_isEmpty(children)) {
        return React.createElement(FormActions, {
          actions: actionsList,
          disabled: disabled,
          hideActions: hideActions,
          title: actionsTitle
        });
      }

      return children;
    };

    const _formData = props.formData,
          loading = props.loading,
          loadingText = props.loadingText; // Transform the incoming data.

    const _data = this.transformData(_formData, 'in'); // Set the state with the updated data.


    this.state = {
      formData: _data,
      submittingForm: loading != null ? loading : false,
      submittingFormText: loadingText
    };
    this.formDirtyCheck = new FormDirtyCheck();
  }

  componentDidUpdate(prevProps, prevState) {
    const prevFormData = prevProps.formData;
    const formData = this.props.formData;

    if (!_isEqual(formData, prevFormData)) {
      this.setState(() => ({
        formData: this.transformData(formData, 'in')
      }));
    }
  }
  /**
   * Return an updated form context
   *
   * @method getFormContext
   * @return {Object}       The updated formContext
   */


  render() {
    const _this$state = this.state,
          formData = _this$state.formData,
          submittingForm = _this$state.submittingForm,
          submittingFormText = _this$state.submittingFormText;

    const _this$props7 = this.props,
          children = _this$props7.children,
          fields = _this$props7.fields,
          FieldTemplate = _this$props7.FieldTemplate,
          loading = _this$props7.loading,
          loadingText = _this$props7.loadingText,
          onSubmit = _this$props7.onSubmit,
          schema = _this$props7.schema,
          uiSchema = _this$props7.uiSchema,
          widgets = _this$props7.widgets,
          otherProps = _objectWithoutProperties(_this$props7, ["children", "fields", "FieldTemplate", "loading", "loadingText", "onSubmit", "schema", "uiSchema", "widgets"]);

    const loadingProps = {
      loading: loading != null ? loading : submittingForm,
      text: loadingText != null && loadingText ? loadingText : submittingFormText
    };
    return React.createElement(FormStyled, null, React.createElement(Loading, loadingProps), React.createElement(JsonSchemaForm, Object.assign({}, otherProps, {
      ArrayFieldTemplate: customFields.ArrayFieldTemplate,
      FieldTemplate: FieldTemplate ? FieldTemplate : customFields.FieldTemplate,
      ObjectFieldTemplate: customFields.ObjectFieldTemplate,
      fields: _objectSpread({}, customFields, fields),
      formContext: this.getFormContext(),
      formData: formData,
      onChange: this.handleOnChange,
      onError: this.handleOnError,
      onSubmit: this.handleSubmit,
      schema: this.getFormSchema(),
      uiSchema: this.getFormUiSchema(),
      widgets: _objectSpread({}, customWidgets, widgets)
    }), this.renderChildren()));
  }

}

Form.defaultProps = {
  actionsList: [{
    children: 'Submit',
    color: 'error',
    onClick: () => {}
  }],
  actionsTitle: '',
  afterSubmit: null,
  apis: {},
  baseUrl: null,
  children: null,
  enableDirtyCheck: false,
  externalSubmission: false,
  fields: null,
  FieldTemplate: null,
  formContext: {},
  formData: {},
  handlers: null,
  hideActions: false,
  loading: null,
  loadingText: null,
  oAuthToken: null,
  onChange: null,
  onError: null,
  onSubmit: null,
  readonly: null,
  transformDataIn: null,
  transformDataOut: null,
  uiSchema: {},
  widgets: null
};
Form.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A list of action buttons for the form
   */
  actionsList: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.node,
    color: PropTypes.string,
    description: PropTypes.node,
    descriptionPosition: PropTypes.oneOf(['top', 'bottom']),
    onClick: PropTypes.func,
    title: PropTypes.node,
    type: PropTypes.string
  })),

  /**
   * A title for the form actions group
   */
  actionsTitle: PropTypes.string,

  /**
   * Callback fired after the form is submitted.
   *
   * @param {object} resp The api response
   */
  afterSubmit: PropTypes.func,

  /**
   * A list of api configs to call
   */
  apis: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),

  /**
   * A base URL for making the RESTful API calls.
   */
  baseUrl: PropTypes.string,

  /**
   * The contents of the Form.
   */
  children: PropTypes.node,

  /**
   * To enable form dirty check operation.
   * If set to 'true', the 'isDirty' flag will be passed in onChange callback params.
   */
  enableDirtyCheck: PropTypes.bool,

  /**
   * Handle form submission through an external source.
   */
  externalSubmission: PropTypes.bool,

  /**
   * A set of custom fields for the form.
   */
  fields: PropTypes.object,

  /**
   * Custom field Template for schema form.
   */
  FieldTemplate: PropTypes.func,

  /**
   * The `formContext` which gets passed
   * down to react-jsonschema-form.
   */
  formContext: PropTypes.object,

  /**
   * Initial `formData`
   */
  formData: PropTypes.object,

  /**
   * A map of action handlers used by rendered components.
   */
  handlers: PropTypes.object,

  /**
   * If you would like to hide the default form actions.
   */
  hideActions: PropTypes.bool,

  /**
   * A boolean to show the internal `loading` component.
   */
  loading: PropTypes.bool,

  /**
   * The text to be displayed for the internal `loading` component.
   */
  loadingText: PropTypes.string,

  /**
   * An oAuth token to make API calls.
   */
  oAuthToken: PropTypes.string,

  /**
   * Callback fired when a value changes in the form.
   *
   * @param {Object} form  The form object
   */
  onChange: PropTypes.func,

  /**
   * Callback fired when the form validates and has errors present.
   *
   * @param {Object} errors The form errors
   */
  onError: PropTypes.func,

  /**
   * Callback fired when the form is ready to be submitted.
   *
   * @param {Object} formData The current formData
   */
  onSubmit: PropTypes.func,

  /**
   * If `true`, the form will be marked as read-only.
   */
  readonly: PropTypes.func,

  /**
   * The `schema` for info providing what should the Form render.
   */
  schema: PropTypes.object.isRequired,

  /**
   * Transform the data coming into the form via the API call.
   *
   * @param   {Object} formData The current `formData`
   * @returns {Object}          The transformed `formData`
   */
  transformDataIn: PropTypes.func,

  /**
   * Transform the data going out of the form via the `onSubmit` handler.
   *
   * @returns {Object}  The transformed `formData`
   */
  transformDataOut: PropTypes.func,

  /**
   * The `uiSchema` for determining how the Form should be rendered.
   */
  uiSchema: PropTypes.object,

  /**
   * A set of custom widgets for the form.
   */
  widgets: PropTypes.object
} : {};
export default Form;