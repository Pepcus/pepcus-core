"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _reactJsonschemaForm = _interopRequireDefault(require("react-jsonschema-form"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Loading = _interopRequireDefault(require("../Loading"));

var _apis = require("../../utils/apis");

var _theme = require("../../utils/theme");

var _warning = require("../../utils/warning");

var _FormActions = _interopRequireDefault(require("./FormActions"));

var _FormDirtyCheck = _interopRequireDefault(require("./FormDirtyCheck"));

var _fields = _interopRequireDefault(require("./fields"));

var _widgets = _interopRequireDefault(require("./widgets"));

/* eslint-disable react/no-did-update-set-state */
var FormStyled = _styledComponents.default.div.withConfig({
  displayName: "Form__FormStyled",
  componentId: "jh2kj9-0"
})(["position:relative;", ";"], (0, _theme.getThemeProps)('Form.styles'));

var Form =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Form, _Component);

  function Form(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Form);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Form).call(this, props)); // Extract the `formData`, incase we need to transform it.

    _this.getFormContext = function () {
      var _this$props = _this.props,
          handlers = _this$props.handlers,
          formContext = _this$props.formContext;
      return (0, _objectSpread2.default)({}, formContext, {
        getFormData: _this.getFormData,
        handlers: handlers,
        updateFormData: _this.updateFormData
      });
    };

    _this.getFormData = function () {
      var formData = _this.state.formData;
      return formData;
    };

    _this.getFormSchema = function () {
      var schema = _this.props.schema;
      return schema;
    };

    _this.getFormUiSchema = function () {
      var _this$props2 = _this.props,
          readonly = _this$props2.readonly,
          uiSchema = _this$props2.uiSchema;
      var formData = _this.state.formData;

      if (typeof readonly === 'function' && readonly(formData)) {
        return (0, _objectSpread2.default)({}, uiSchema, {
          'ui:readonly': true
        });
      }

      return uiSchema;
    };

    _this.handleOnChange = function (form) {
      var _this$props3 = _this.props,
          enableDirtyCheck = _this$props3.enableDirtyCheck,
          onChange = _this$props3.onChange;
      var outputForm = (0, _objectSpread2.default)({}, form); // Performing the dirty only if the enableDirtyCheck flag is true for performance.

      if (enableDirtyCheck) {
        _this.formDirtyCheck.onChange(form); // Adding isDirty flag in the


        outputForm.isDirty = _this.formDirtyCheck.isFormDirty();
      }

      if (typeof onChange === 'function') {
        onChange(outputForm);
      }
    };

    _this.handleOnError = function (errors) {
      var onError = _this.props.onError; // Invoke the `onError` if available.

      typeof onError === 'function' && onError(errors);
    };

    _this.handleSubmit = function (formProps) {
      var formData = formProps.formData;
      var _this$props4 = _this.props,
          afterSubmit = _this$props4.afterSubmit,
          apis = _this$props4.apis,
          baseUrl = _this$props4.baseUrl,
          oAuthToken = _this$props4.oAuthToken,
          onSubmit = _this$props4.onSubmit; // Transform the data based on the 'out' func.

      var transformedData = _this.transformData(formData, 'out'); // If `onSubmit` exists then invoke it.


      if (typeof onSubmit === 'function') {
        onSubmit((0, _objectSpread2.default)({}, formProps, {
          formData: transformedData
        }));
      } // Check to see if we have a list of `apis`
      // and the `transformedData` is not empty.


      if (!(0, _isEmpty2.default)(transformedData) && !(0, _isEmpty2.default)(apis)) {
        // Display a warning to user if the `oAuthToken` is empty.
        (0, _warning.warning)(!(0, _isEmpty2.default)(oAuthToken), ["A <Form /> requires an oAuthToken to submit the requested data."]); // Set the `loading` to true.

        _this.setState(function () {
          return {
            submittingForm: true,
            submittingFormText: 'Submitting...'
          };
        }); // Extract the API config from the schema.


        var api = (0, _apis.extractAPIConfig)(apis, 'onSubmit'); // Extract the requeset object from API config.

        var request = (0, _get2.default)(api, 'request', {}); // Extract the requested `dataKey` for the final fetched data.

        var dataKey = (0, _get2.default)(api, 'dataKey', 'data'); // Build the axios config

        var config = (0, _objectSpread2.default)({}, request, {
          baseURL: baseUrl || request.baseURL,
          data: transformedData,
          headers: {
            Authorization: "Bearer ".concat(oAuthToken)
          }
        }); // Check to see if the `oAuthToken` is not empty
        // before we start to make the API call.

        if (!(0, _isEmpty2.default)(oAuthToken) && !(0, _isEmpty2.default)(config.baseURL)) {
          // Make the API call.
          (0, _apis.fetchAPIData)(config, {
            data: dataKey
          }).then(function (resp) {
            setTimeout(function () {
              _this.setState(function () {
                return {
                  submittingForm: false,
                  submittingFormText: 'Submitted!'
                };
              });
            }); // Extract the data from the response.

            var data = (0, _get2.default)(resp, 'data'); // If `afterSubmit` exists then invoke it.

            if (typeof afterSubmit === 'function') {
              afterSubmit((0, _objectSpread2.default)({}, formProps, {
                formData: transformedData,
                resp: data
              }));
            }
          }).catch(function (error) {
            setTimeout(function () {
              _this.setState(function () {
                return {
                  submittingForm: false,
                  submittingFormText: 'Error submitting form!'
                };
              });
            }); // If `afterSubmit` exists then invoke it.

            if (typeof afterSubmit === 'function') {
              afterSubmit((0, _objectSpread2.default)({}, formProps, {
                formData: transformedData,
                error: error
              }));
            }
          });
        } else {
          setTimeout(function () {
            _this.setState(function () {
              return {
                submittingForm: false,
                submittingFormText: 'Submitted!'
              };
            });
          }, 1000);
        }
      }
    };

    _this.transformData = function (formData, inOut) {
      var _this$props5 = _this.props,
          transformDataIn = _this$props5.transformDataIn,
          transformDataOut = _this$props5.transformDataOut; // Switch based on `inOut` key

      switch (inOut) {
        case 'in':
          {
            var data = typeof transformDataIn === 'function' ? transformDataIn(formData) : formData;
            return data;
          }

        case 'out':
          {
            var _data2 = typeof transformDataOut === 'function' ? transformDataOut(formData) : formData;

            return _data2;
          }

        default:
          {
            return formData;
          }
      }
    };

    _this.updateFormData = function (_ref) {
      var formData = _ref.formData;
      !(0, _isEmpty2.default)(formData) && _this.setState(function (prevState) {
        return {
          formData: (0, _objectSpread2.default)({}, prevState.formData, formData)
        };
      });
    };

    _this.renderChildren = function () {
      var _this$props6 = _this.props,
          actionsList = _this$props6.actionsList,
          actionsTitle = _this$props6.actionsTitle,
          children = _this$props6.children,
          externalSubmission = _this$props6.externalSubmission,
          hideActions = _this$props6.hideActions,
          readonly = _this$props6.readonly;
      var formData = _this.state.formData;
      var disabled = Boolean(typeof readonly === 'function' && readonly(formData));

      if (externalSubmission) {
        return _react.default.createElement("button", {
          ref: function ref(btn) {
            return _this.submitButton = btn;
          },
          style: {
            display: 'none'
          },
          type: "submit"
        });
      }

      if ((0, _isEmpty2.default)(children)) {
        return _react.default.createElement(_FormActions.default, {
          actions: actionsList,
          disabled: disabled,
          hideActions: hideActions,
          title: actionsTitle
        });
      }

      return children;
    };

    var _formData = props.formData,
        loading = props.loading,
        loadingText = props.loadingText; // Transform the incoming data.

    var _data = _this.transformData(_formData, 'in'); // Set the state with the updated data.


    _this.state = {
      formData: _data,
      submittingForm: loading != null ? loading : false,
      submittingFormText: loadingText
    };
    _this.formDirtyCheck = new _FormDirtyCheck.default();
    return _this;
  }

  (0, _createClass2.default)(Form, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var prevFormData = prevProps.formData;
      var formData = this.props.formData;

      if (!(0, _isEqual2.default)(formData, prevFormData)) {
        this.setState(function () {
          return {
            formData: _this2.transformData(formData, 'in')
          };
        });
      }
    }
    /**
     * Return an updated form context
     *
     * @method getFormContext
     * @return {Object}       The updated formContext
     */

  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          formData = _this$state.formData,
          submittingForm = _this$state.submittingForm,
          submittingFormText = _this$state.submittingFormText;
      var _this$props7 = this.props,
          autoCursor = _this$props7.autoCursor,
          ArrayFieldTemplate = _this$props7.ArrayFieldTemplate,
          children = _this$props7.children,
          fields = _this$props7.fields,
          FieldTemplate = _this$props7.FieldTemplate,
          loading = _this$props7.loading,
          loadingText = _this$props7.loadingText,
          ObjectFieldTemplate = _this$props7.ObjectFieldTemplate,
          onSubmit = _this$props7.onSubmit,
          schema = _this$props7.schema,
          uiSchema = _this$props7.uiSchema,
          widgets = _this$props7.widgets,
          otherProps = (0, _objectWithoutProperties2.default)(_this$props7, ["autoCursor", "ArrayFieldTemplate", "children", "fields", "FieldTemplate", "loading", "loadingText", "ObjectFieldTemplate", "onSubmit", "schema", "uiSchema", "widgets"]);
      var loadingProps = {
        loading: loading != null ? loading : submittingForm,
        text: loadingText != null && loadingText ? loadingText : submittingFormText
      };
      return _react.default.createElement(FormStyled, null, _react.default.createElement(_Loading.default, loadingProps), _react.default.createElement(_reactJsonschemaForm.default, Object.assign({}, otherProps, {
        autoCursor: autoCursor ? autoCursor : false,
        ArrayFieldTemplate: ArrayFieldTemplate ? ArrayFieldTemplate : _fields.default.ArrayFieldTemplate,
        FieldTemplate: FieldTemplate ? FieldTemplate : _fields.default.FieldTemplate,
        ObjectFieldTemplate: ObjectFieldTemplate ? ObjectFieldTemplate : _fields.default.ObjectFieldTemplate,
        fields: (0, _objectSpread2.default)({}, _fields.default, fields),
        formContext: this.getFormContext(),
        formData: formData,
        onChange: this.handleOnChange,
        onError: this.handleOnError,
        onSubmit: this.handleSubmit,
        schema: this.getFormSchema(),
        uiSchema: this.getFormUiSchema(),
        widgets: (0, _objectSpread2.default)({}, _widgets.default, widgets)
      }), this.renderChildren()));
    }
  }]);
  return Form;
}(_react.Component);

Form.defaultProps = {
  actionsList: [{
    children: 'Submit',
    color: 'error',
    onClick: function onClick() {}
  }],
  actionsTitle: '',
  afterSubmit: null,
  apis: {},
  autoCursor: false,
  ArrayFieldTemplate: null,
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
  ObjectFieldTemplate: null,
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
  actionsList: _propTypes.default.arrayOf(_propTypes.default.shape({
    children: _propTypes.default.node,
    color: _propTypes.default.string,
    description: _propTypes.default.node,
    descriptionPosition: _propTypes.default.oneOf(['top', 'bottom']),
    onClick: _propTypes.default.func,
    title: _propTypes.default.node,
    type: _propTypes.default.string
  })),

  /**
   * A title for the form actions group
   */
  actionsTitle: _propTypes.default.string,

  /**
   * Callback fired after the form is submitted.
   *
   * @param {object} resp The api response
   */
  afterSubmit: _propTypes.default.func,

  /**
   * A list of api configs to call
   */
  apis: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object]),

  /**
   * a prop to control the text field cursor
   */
  autoCursor: _propTypes.default.bool,

  /**
   * Custom ArrayFieldTemplate
   */
  ArrayFieldTemplate: _propTypes.default.func,

  /**
   * A base URL for making the RESTful API calls.
   */
  baseUrl: _propTypes.default.string,

  /**
   * The contents of the Form.
   */
  children: _propTypes.default.node,

  /**
   * To enable form dirty check operation.
   * If set to 'true', the 'isDirty' flag will be passed in onChange callback params.
   */
  enableDirtyCheck: _propTypes.default.bool,

  /**
   * Handle form submission through an external source.
   */
  externalSubmission: _propTypes.default.bool,

  /**
   * A set of custom fields for the form.
   */
  fields: _propTypes.default.object,

  /**
   * Custom field Template for schema form.
   */
  FieldTemplate: _propTypes.default.func,

  /**
   * The `formContext` which gets passed
   * down to react-jsonschema-form.
   */
  formContext: _propTypes.default.object,

  /**
   * Initial `formData`
   */
  formData: _propTypes.default.object,

  /**
   * A map of action handlers used by rendered components.
   */
  handlers: _propTypes.default.object,

  /**
   * If you would like to hide the default form actions.
   */
  hideActions: _propTypes.default.bool,

  /**
   * A boolean to show the internal `loading` component.
   */
  loading: _propTypes.default.bool,

  /**
   * The text to be displayed for the internal `loading` component.
   */
  loadingText: _propTypes.default.string,

  /**
   * An oAuth token to make API calls.
   */
  oAuthToken: _propTypes.default.string,

  /**
   * Custom object field Template for schema form.
   */
  ObjectFieldTemplate: _propTypes.default.func,

  /**
   * Callback fired when a value changes in the form.
   *
   * @param {Object} form  The form object
   */
  onChange: _propTypes.default.func,

  /**
   * Callback fired when the form validates and has errors present.
   *
   * @param {Object} errors The form errors
   */
  onError: _propTypes.default.func,

  /**
   * Callback fired when the form is ready to be submitted.
   *
   * @param {Object} formData The current formData
   */
  onSubmit: _propTypes.default.func,

  /**
   * If `true`, the form will be marked as read-only.
   */
  readonly: _propTypes.default.func,

  /**
   * The `schema` for info providing what should the Form render.
   */
  schema: _propTypes.default.object.isRequired,

  /**
   * Transform the data coming into the form via the API call.
   *
   * @param   {Object} formData The current `formData`
   * @returns {Object}          The transformed `formData`
   */
  transformDataIn: _propTypes.default.func,

  /**
   * Transform the data going out of the form via the `onSubmit` handler.
   *
   * @returns {Object}  The transformed `formData`
   */
  transformDataOut: _propTypes.default.func,

  /**
   * The `uiSchema` for determining how the Form should be rendered.
   */
  uiSchema: _propTypes.default.object,

  /**
   * A set of custom widgets for the form.
   */
  widgets: _propTypes.default.object
} : {};
var _default = Form;
exports.default = _default;