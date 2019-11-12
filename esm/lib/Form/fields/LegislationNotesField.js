import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';
import Col from "../../Col";
import Row from "../../Row";
import TextArea from "../../TextArea";
import { callFunc, getHandler } from "../../../utils/actions";
import FormGroupTitle from "./FormGroupTitle";

class LegislationNotesField extends Component {
  constructor(props) {
    super(props);

    this.handleOnChange = evt => {
      const notes = evt.target.value;

      if (this.state.typingTimeout !== null) {
        clearTimeout(this.state.typingTimeout);
      }

      const typingTimeout = setTimeout(() => {
        this.setState(() => ({
          formData: notes
        }), () => {
          if (notes.length <= 2000) {
            this.saveNotes(notes);
          }
        });
      }, 1000);
      this.setState({
        typingTimeout: typingTimeout
      });
    };

    this.handleOnBlur = evt => {
      const notes = this.state.formData;
      this.saveNotes(notes);
    };

    this.saveNotes = _notes => {
      const formContext = this.props.formContext;
      const _formContext$handlers = formContext.handlers,
            handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      const updateNotes = getHandler(handlers, 'updateNotes');
      callFunc(updateNotes, {
        notes: _notes
      });
    };

    const formData = this.props.formData;
    this.state = {
      formData,
      typingTimeout: null
    };
  }

  render() {
    const formData = this.state.formData;
    const _this$props = this.props,
          idSchema = _this$props.idSchema,
          required = _this$props.required,
          schema = _this$props.schema;

    let id = _get(idSchema, '$id', '');

    const title = _get(schema, 'title');

    const titleHelptext = _get(schema, 'helpText');

    const notesStyles = {
      overflowY: 'scroll'
    };
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
    }, React.createElement(TextArea, {
      defaultValue: formData,
      maxLength: "2000",
      onChange: this.handleOnChange,
      onBlur: this.handleOnBlur,
      placeholder: "Type your note here",
      rows: 5,
      style: notesStyles
    })));
  }

}

LegislationNotesField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: PropTypes.object,
  formData: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  idSchema: PropTypes.object,
  options: PropTypes.object,
  required: PropTypes.bool,
  schema: PropTypes.object,
  uiSchema: PropTypes.object
} : {};
LegislationNotesField.defaultProps = {
  formContext: null,
  formData: null,
  idSchema: null,
  options: null,
  required: null,
  schema: null,
  uiSchema: null
};
export default LegislationNotesField;