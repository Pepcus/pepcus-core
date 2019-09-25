import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';
import Col from "../../Col";
import Row from "../../Row";
import DatePicker from "../../DatePicker";
import { callFunc, getHandler } from "../../../utils/actions";
import FormGroupTitle from "./FormGroupTitle";

class LegislationEffectiveDateField extends Component {
  constructor(props) {
    super(props);

    this.handleOnBlur = evt => {
      const formContext = this.props.formContext;
      const _formContext$handlers = formContext.handlers,
            handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      const updateEffectiveDate = getHandler(handlers, 'updateEffectiveDate');
      const date = this.state.effectiveDate ? new Date(this.state.effectiveDate) : null;
      callFunc(updateEffectiveDate, {
        date
      });
    };

    this.handleOnChange = date => {
      this.setState({
        effectiveDate: date
      });
    };

    this.handleOnSelect = date => {};

    const formData = this.props.formData;
    const effectiveDate = formData ? new Date(formData) : '';
    this.state = {
      effectiveDate
    };
  }

  render() {
    const effectiveDate = this.state.effectiveDate;
    const _this$props = this.props,
          idSchema = _this$props.idSchema,
          required = _this$props.required,
          schema = _this$props.schema;

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
    }, React.createElement(DatePicker, {
      onBlur: this.handleOnBlur,
      onChange: this.handleOnChange,
      onSelect: this.handleOnSelect,
      selected: effectiveDate
    })));
  }

}

LegislationEffectiveDateField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: PropTypes.object,
  formData: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  idSchema: PropTypes.object,
  options: PropTypes.object,
  required: PropTypes.bool,
  schema: PropTypes.object,
  uiSchema: PropTypes.object
} : {};
LegislationEffectiveDateField.defaultProps = {
  formContext: null,
  formData: null,
  idSchema: null,
  options: null,
  required: null,
  schema: null,
  uiSchema: null
};
export default LegislationEffectiveDateField;