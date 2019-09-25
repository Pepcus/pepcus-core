import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import templateReplace from 'es6-template-strings';
import Col from "../../Col";
import Row from "../../Row";
import { AsyncSelect as Select } from "../../Select";
import { extractAPIConfig, fetchAPIData } from "../../../utils/apis";
import { mergeObjects } from "../../../utils/merge";

class HandbookSearchWidget extends React.Component {
  constructor(props) {
    super(props); // Bind the async func.

    this.handleSelectOnChange = option => {
      const onChange = this.props.onChange;

      const value = _get(option, 'value', '');

      typeof onChange === 'function' && onChange(value);
    };

    this.fetchSelectOptions = this.fetchSelectOptions.bind(this);
  }

  async fetchSelectOptions(searchSpec) {
    try {
      const options = this.props.options;
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
        value: _get(i, optionValue)
      })) : []; // Return the data

      return formattedData;
    } catch (e) {
      return Promise.reject([]);
    }
  }

  render() {
    const _this$props = this.props,
          options = _this$props.options,
          placeholder = _this$props.placeholder;
    const _options$selectProps = options.selectProps,
          selectProps = _options$selectProps === void 0 ? {} : _options$selectProps;
    return React.createElement(Row, {
      width: "auto",
      alignItems: "baseline"
    }, React.createElement(Col, null, React.createElement(Select, Object.assign({
      cacheOptions: true,
      defaultOptions: true,
      loadOptions: this.fetchSelectOptions,
      onChange: this.handleSelectOnChange,
      placeholder: placeholder
    }, selectProps))));
  }

}

HandbookSearchWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.number
} : {};
HandbookSearchWidget.defaultProps = {
  options: null,
  placeholder: null,
  required: null,
  value: null
};
export default HandbookSearchWidget;