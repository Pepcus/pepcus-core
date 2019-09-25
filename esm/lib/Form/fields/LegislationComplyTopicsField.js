import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';
import Col from "../../Col";
import Row from "../../Row";
import Select from "../../Select";
import { callFunc, getHandler } from "../../../utils/actions";
import FormGroupTitle from "./FormGroupTitle";

class LegislationComplyTopicsField extends Component {
  constructor(props) {
    super(props);

    this.componentWillMount = () => {
      const _this$props = this.props,
            formData = _this$props.formData,
            uiSchema = _this$props.uiSchema;

      const options = this._getUiOptions(uiSchema);

      const hrTopics = options.hrTopics;
      this.updateState(formData, hrTopics);
    };

    this._getUiOptions = schema => _get(schema, 'ui:options', {});

    this.handleOnChange = options => {
      const newTopics = options.map(function (option) {
        return {
          value: option.value
        };
      });
      const formattedTopics = options.map(function (topic) {
        const newTopic = {
          value: topic.value,
          label: topic.value
        };
        return newTopic;
      });
      this.setState({
        formattedTopics,
        formData: newTopics
      });
    };

    this.handleOnBlur = evt => {
      var currentTarget = evt.currentTarget;
      const formContext = this.props.formContext;
      const _formContext$handlers = formContext.handlers,
            handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      const updateTopics = getHandler(handlers, 'updateTopics');
      let topics = this.state.formData;
      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          callFunc(updateTopics, {
            topics
          });
        }
      }, 0);
    };

    this.updateState = (formData, hrTopics) => {
      const formattedTopics = formData.map(function (topic) {
        const newTopic = {
          value: topic.value,
          label: topic.value
        };
        return newTopic;
      });
      const defaultOptions = hrTopics.map(function (option) {
        option.label = option.value;
        return option;
      });
      this.setState({
        defaultOptions,
        formattedTopics
      });
    };

    const _formData = this.props.formData;
    this.state = {
      defaultOptions: {},
      formattedTopics: {},
      formData: _formData
    };
  }

  render() {
    const _this$state = this.state,
          defaultOptions = _this$state.defaultOptions,
          formattedTopics = _this$state.formattedTopics;
    const _this$props2 = this.props,
          idSchema = _this$props2.idSchema,
          required = _this$props2.required,
          schema = _this$props2.schema;

    let id = _get(idSchema, '$id', '');

    const title = _get(schema, 'title');

    const titleHelptext = _get(schema, 'helpText');

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
    }, React.createElement(Select, {
      defaultValue: formattedTopics,
      isMulti: true,
      isClearable: false,
      minControlHeight: 30,
      onBlur: this.handleOnBlur,
      onChange: this.handleOnChange,
      options: defaultOptions,
      placeholder: ""
    })));
  }

}

LegislationComplyTopicsField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: PropTypes.object,
  formData: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  idSchema: PropTypes.object,
  options: PropTypes.object,
  required: PropTypes.bool,
  schema: PropTypes.object,
  uiSchema: PropTypes.object
} : {};
LegislationComplyTopicsField.defaultProps = {
  formContext: null,
  formData: null,
  idSchema: null,
  options: null,
  required: null,
  schema: null,
  uiSchema: null
};
export default LegislationComplyTopicsField;