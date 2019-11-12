import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';
import Col from "../../Col";
import Row from "../../Row";
import Input from "../../Input";
import Typography from "../../Typography";
import { callFunc, getHandler } from "../../../utils/actions";
import FormGroupTitle from "./FormGroupTitle";

class LegislationLinkField extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = evt => {
      const pattern = /^(?:http|https|ftp):\/\/[\w.]+(?:\.[\w]+)+[\w\-.,@?^=%&:;/~\\+#]+$/;
      const link = evt.target.value;

      if (link && !pattern.test(link)) {
        this.setState({
          errors: true
        });
      } else {
        this.setState({
          formData: link,
          errors: false
        });
      }
    };

    this.handleOnBlur = evt => {
      if (this.state.errors) {
        return false;
      }

      var currentTarget = evt.currentTarget;
      const formContext = this.props.formContext;
      const _formContext$handlers = formContext.handlers,
            handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      const updatePublicLink = getHandler(handlers, 'updatePublicLink');
      const link = this.state.formData || null;
      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          callFunc(updatePublicLink, {
            link
          });
        }
      }, 0);
    };

    const formData = this.props.formData;
    this.state = {
      formData,
      errors: false
    };
  }

  render() {
    const _this$state = this.state,
          formData = _this$state.formData,
          errors = _this$state.errors;
    const _this$props = this.props,
          idSchema = _this$props.idSchema,
          required = _this$props.required,
          schema = _this$props.schema;

    let id = _get(idSchema, '$id', '');

    const title = _get(schema, 'title');

    const titleHelptext = _get(schema, 'helpText');

    const message = errors ? React.createElement(Typography, {
      color: "error",
      gutterBottom: "0",
      style: {
        margin: '10px 5px'
      }
    }, "Please enter a valid url.") : '';
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
    }, React.createElement(Input, {
      defaultValue: formData,
      id: id,
      onChange: this.handleOnChange,
      onBlur: this.handleOnBlur,
      required: required,
      tabIndex: -1,
      type: "text"
    }), message));
  }

}

LegislationLinkField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: PropTypes.object,
  formData: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  idSchema: PropTypes.object,
  options: PropTypes.object,
  required: PropTypes.bool,
  schema: PropTypes.object,
  uiSchema: PropTypes.object
} : {};
LegislationLinkField.defaultProps = {
  formContext: null,
  formData: null,
  idSchema: null,
  options: null,
  required: null,
  schema: null,
  uiSchema: null
};
export default LegislationLinkField;