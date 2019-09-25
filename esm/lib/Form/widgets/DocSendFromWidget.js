import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _isEqual from 'lodash/isEqual';
import templateReplace from 'es6-template-strings';
import Col from "../../Col";
import Radio from "../../Radio";
import Row from "../../Row";
import Typography from "../../Typography";
import { AsyncSelect as Select } from "../../Select";
import { extractAPIConfig, fetchAPIData } from "../../../utils/apis";
import { mergeObjects } from "../../../utils/merge";

class DocSendFromWidget extends React.Component {
  constructor(props) {
    super(props);

    this.handleRadioOnChange = label => () => {
      const onChange = this.props.onChange;
      typeof onChange === 'function' && onChange(label);
    };

    this.handleSelectOnChange = option => {
      const onChange = this.props.onChange;

      const value = _get(option, 'value', '');

      typeof onChange === 'function' && onChange(value);
    };

    this.state = {
      initialSelectOptions: null
    }; // Bind the async func.

    this.fetchSelectOptions = this.fetchSelectOptions.bind(this);
  }

  componentDidMount() {
    // Fetch the default set of options upon mount.
    this.fetchSelectOptions();
  }

  componentDidUpdate(prevProps, prevState) {
    const options = this.props.options; // If the options are not equal, then we will refresh the already loaded data.

    if (!_isEqual(options, prevProps.options)) {
      this.fetchSelectOptions(null, null, true);
    }
  }

  async fetchSelectOptions(searchSpec, selectOptions, updateDefaultOptions = false) {
    try {
      const options = this.props.options;
      const config = options.config,
            selectProps = options.selectProps;
      const selectLabel = selectProps.selectLabel,
            selectValue = selectProps.selectValue;
      const oAuthToken = config.oAuthToken,
            schema = config.schema;

      const apis = _get(schema, 'apis'); // If no `baseURL` is found, then we will just return.


      if (!_get(apis, 'request.baseURL')) {
        this.setState(() => ({
          initialSelectOptions: []
        }));
        return null;
      } // Extract some info from the `schema`


      const api = extractAPIConfig(apis, 'data');

      const dataKey = _get(api, 'dataKey', 'data');

      const request = _get(api, 'request', {});

      const paramsMap = _get(api, 'paramsMap', {});

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
        label: templateReplace(selectLabel, i),
        value: templateReplace(selectValue, i)
      })) : []; // Update the state.

      this.setState(prevState => {
        // We only want to update the state on the initial load.
        // NOTE: If we return `null` from a `setState()` func call,
        // it doesn't update the state or run a re-render!
        if (!updateDefaultOptions && prevState.initialSelectOptions) {
          return null;
        } // Return the initialSelectOptions.


        return {
          initialSelectOptions: formattedData
        };
      }); // Return the data

      return formattedData;
    } catch (e) {
      // Return an empty array.
      return [];
    }
  }

  render() {
    const initialSelectOptions = this.state.initialSelectOptions;
    const _this$props = this.props,
          options = _this$props.options,
          placeholder = _this$props.placeholder,
          required = _this$props.required,
          value = _this$props.value;
    const displayLabel = options.displayLabel,
          displayValue = options.displayValue,
          _options$selectProps = options.selectProps,
          selectProps = _options$selectProps === void 0 ? {} : _options$selectProps;

    const selectLabel = selectProps.selectLabel,
          selectValue = selectProps.selectValue,
          cleanSelectProps = _objectWithoutProperties(selectProps, ["selectLabel", "selectValue"]);

    const checked = displayValue === value;
    const extraSelectProps = checked ? {
      value: null
    } : {};
    return React.createElement(Row, {
      width: "auto",
      alignItems: "baseline"
    }, React.createElement(Col, {
      size: 2
    }, React.createElement(Typography, {
      type: "label",
      gutterBottom: "0",
      fullWidth: true
    }, React.createElement(Radio, {
      checked: checked,
      margin: "0 5px 0 0",
      name: displayLabel,
      onChange: this.handleRadioOnChange(displayValue),
      required: Boolean(!value && required),
      value: displayValue,
      color: "checkbox"
    }), React.createElement("span", null, displayLabel))), initialSelectOptions && initialSelectOptions.length === 1 && React.createElement(Col, {
      size: 10
    }, React.createElement(Typography, {
      type: "label",
      gutterBottom: "0",
      fullWidth: true,
      noWrap: true
    }, React.createElement(Radio, {
      checked: value === initialSelectOptions[0].value,
      margin: "0 5px 0 0",
      name: initialSelectOptions[0].value,
      required: Boolean(!value && required),
      onChange: this.handleRadioOnChange(initialSelectOptions[0].value),
      value: initialSelectOptions[0].value
    }), React.createElement("span", null, initialSelectOptions[0].label))), (initialSelectOptions === null || initialSelectOptions && initialSelectOptions.length > 1) && React.createElement(Col, {
      size: 10,
      style: {
        opacity: initialSelectOptions === null || initialSelectOptions.length === 1 ? '0' : '1',
        transition: 'opacity 0.2s ease-in-out'
      }
    }, React.createElement(Select, Object.assign({
      cacheOptions: true,
      defaultOptions: initialSelectOptions,
      loadOptions: this.fetchSelectOptions,
      onChange: this.handleSelectOnChange,
      placeholder: placeholder
    }, cleanSelectProps, extraSelectProps))));
  }

}

DocSendFromWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.object,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string
} : {};
DocSendFromWidget.defaultProps = {
  options: null,
  placeholder: null,
  required: null,
  value: null
};
export default DocSendFromWidget;