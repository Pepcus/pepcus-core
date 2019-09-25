import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import templateReplace from 'es6-template-strings';
import Col from "../../Col";
import Row from "../../Row";
import { AsyncSelect as Select } from "../../Select";
import { extractAPIConfig, fetchAPIData } from "../../../utils/apis";
import { mergeObjects } from "../../../utils/merge";
import FormGroupContent from "./FormGroupContent";
import FormGroupTitle from "./FormGroupTitle";

class HandbookSearchField extends React.Component {
  constructor(props) {
    super(props);

    this._getUiOptions = schema => _get(schema, 'ui:options', {});

    this.getHiddenInputStyle = () => ({
      height: 38,
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -1
    });

    this.handleHiddenInputOnChange = () => {};

    this.handleOptionDisabled = option => {
      const value = option.value; // We're disabling any and all handbooks that have policy alerts.

      return value.hasPolicyAlerts && value.hasPolicyAlerts === 1;
    };

    this.handleSelectOnChange = option => {
      const onChange = this.props.onChange;

      const value = _get(option, 'value', '');

      this.setState(() => ({
        searchValue: value
      }), () => {
        typeof onChange === 'function' && onChange(value);
      });
    };

    this.state = {
      searchValue: {}
    }; // Bind the async func.

    this.fetchSelectOptions = this.fetchSelectOptions.bind(this);
  }
  /**
   * Get the `ui:options` for the current field.
   *
   * @method _getUiOptions
   * @private
   * @param  {Object}      schema The schema to extract the options from
   * @return {Object}             The extracted options
   */


  async fetchSelectOptions(searchSpec) {
    try {
      const uiSchema = this.props.uiSchema;

      const options = this._getUiOptions(uiSchema);

      const optionLabel = options.optionLabel,
            optionValue = options.optionValue,
            config = options.config;
      const oAuthToken = config.oAuthToken,
            schema = config.schema;

      const apis = _get(schema, 'apis'); // If no `baseURL` is found, then we will just return.


      if (!_get(apis, 'request.baseURL')) {
        return null;
      } // Extract some info from the `schema`


      const api = extractAPIConfig(apis, 'data');

      const dataKey = _get(api, 'dataKey', 'data');

      const paramsMap = _get(api, 'paramsMap', {});

      const request = _get(api, 'request', {});

      const Authorization = _get(request, 'headers.Authorization');

      const _paramsMap$searchSpec = paramsMap.searchSpecKey,
            searchSpecKey = _paramsMap$searchSpec === void 0 ? 'searchSpec' : _paramsMap$searchSpec; // Build the `axios` config.

      const apiConfig = mergeObjects(request, {
        headers: {
          Authorization: Authorization ? Authorization : `Bearer ${oAuthToken}`
        },
        params: {
          [searchSpecKey]: searchSpec
        }
      }); // Fetch the data

      const _ref = await fetchAPIData(apiConfig, {
        data: dataKey
      }),
            respData = _ref.data; // Format the data


      const formattedData = respData ? respData.map(i => ({
        label: templateReplace(optionLabel, i),
        value: optionValue ? _get(i, optionValue) : i
      })) : []; // Return the data

      return formattedData;
    } catch (e) {
      return Promise.reject([]);
    }
  }

  render() {
    const searchValue = this.state.searchValue;
    const _this$props = this.props,
          disabled = _this$props.disabled,
          idSchema = _this$props.idSchema,
          required = _this$props.required,
          schema = _this$props.schema,
          uiSchema = _this$props.uiSchema;

    const options = this._getUiOptions(uiSchema); // Extract the actual id of the field from the `idSchema`


    let id = _get(idSchema, '$id', ''); // Extract the placeholder and selectProps.


    const _options$placeholder = options.placeholder,
          placeholder = _options$placeholder === void 0 ? '' : _options$placeholder,
          _options$selectProps = options.selectProps,
          selectProps = _options$selectProps === void 0 ? {} : _options$selectProps; // Extract the title.

    const title = _get(schema, 'title'); // Extract the title help text.


    const titleHelptext = _get(schema, 'helpText'); // Determine if we are rendering a formGroup.


    const formGroup = _get(schema, 'formGroup', false); // Determine the hidden input's value.


    const hiddenInputValue = !_isEmpty(searchValue) ? JSON.stringify(searchValue) : '';
    return React.createElement(Row, {
      width: "auto"
    }, React.createElement(Col, {
      size: 12
    }, React.createElement(FormGroupTitle, {
      helpText: titleHelptext,
      id: id,
      required: required,
      title: title
    })), React.createElement(Col, {
      size: 12,
      style: {
        position: 'relative'
      }
    }, formGroup ? React.createElement(FormGroupContent, {
      schema: schema
    }, React.createElement(Select, Object.assign({
      cacheOptions: true,
      defaultOptions: true,
      loadOptions: this.fetchSelectOptions,
      onChange: this.handleSelectOnChange,
      placeholder: placeholder
    }, selectProps))) : React.createElement(Select, Object.assign({
      cacheOptions: true,
      defaultOptions: true,
      loadOptions: this.fetchSelectOptions,
      onChange: this.handleSelectOnChange,
      placeholder: placeholder
    }, selectProps)), React.createElement("input", {
      onChange: this.handleHiddenInputOnChange,
      disabled: disabled,
      id: id,
      required: required,
      style: this.getHiddenInputStyle(),
      tabIndex: -1,
      type: "text",
      value: hiddenInputValue
    })));
  }

}

HandbookSearchField.defaultProps = {
  disabled: null,
  idSchema: null,
  options: null,
  placeholder: null,
  required: null,
  schema: null,
  uiSchema: null,
  value: null
};
HandbookSearchField.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: PropTypes.bool,
  idSchema: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  schema: PropTypes.object,
  uiSchema: PropTypes.object,
  value: PropTypes.number
} : {};
export default HandbookSearchField;