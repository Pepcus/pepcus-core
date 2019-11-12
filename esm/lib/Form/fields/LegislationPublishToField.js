import _objectSpread from "@babel/runtime/helpers/objectSpread";
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';
import Col from "../../Col";
import Container from "../../Container";
import Row from "../../Row";
import Typography from "../../Typography";
import { callFunc, getHandler } from "../../../utils/actions";
import FormGroupTitle from "./FormGroupTitle";

class LegislationPublishToField extends Component {
  constructor(props) {
    super(props);

    this.buildComponent = completionEvents => {
      return completionEvents.map((item, itemIdx) => {
        const completion_event = item.completion_event;
        const key = `${completion_event}___${itemIdx}`;
        const dataCompletion = this.state.completionEvents[completion_event.replace(/ /g, "").toLowerCase()];
        const checkboxUpdated = Boolean(dataCompletion.needed) === true ? React.createElement("input", {
          type: "checkbox",
          "data-option": "updated",
          "data-completion-event": completion_event,
          checked: dataCompletion.updated,
          onChange: this.handleSelecting
        }) : React.createElement("input", {
          type: "checkbox",
          checked: dataCompletion.updated,
          disabled: true
        }); // Render the item.

        return React.createElement(Row, {
          width: "auto",
          alignItems: "baseline",
          key: key,
          style: {
            margin: 0
          }
        }, React.createElement(Col, {
          size: 4,
          style: {
            padding: '6px 8px'
          }
        }, React.createElement(Typography, {
          type: "label",
          gutterBottom: "0",
          fullWidth: true
        }, React.createElement("strong", null, completion_event))), React.createElement(Col, {
          size: 4,
          style: {
            justifyContent: 'center',
            textAlign: 'center'
          }
        }, React.createElement("input", {
          type: "checkbox",
          "data-option": "needed",
          "data-completion-event": completion_event,
          checked: dataCompletion.needed,
          onChange: this.handleSelecting
        })), React.createElement(Col, {
          size: 4,
          style: {
            justifyContent: 'center',
            textAlign: 'center'
          }
        }, checkboxUpdated));
      });
    };

    this._getUiOptions = schema => _get(schema, 'ui:options', {});

    this.handleSelecting = evt => {
      const option = evt.target.getAttribute('data-option');
      const completionEventReal = evt.target.getAttribute('data-completion-event');
      const completionEvent = completionEventReal.replace(/ /g, "").toLowerCase();
      const checked = evt.target.checked;
      let isCompleted = null;
      this.setState(prevState => {
        const updatedState = _objectSpread({}, prevState);

        if (option === 'needed') {
          updatedState.completionEvents[completionEvent].needed = checked;
          isCompleted = false;

          if (!checked) {
            updatedState.completionEvents[completionEvent].updated = checked;
            isCompleted = null;
          }
        } else {
          updatedState.completionEvents[completionEvent].updated = checked;
          isCompleted = true;

          if (!checked) {
            isCompleted = false;
          }
        }

        const updateCompletionEvent = {
          completion_event: completionEventReal,
          is_completed: isCompleted
        };
        const keyInFormData = updatedState.formData.findIndex(completionEvent => completionEvent.completion_event === completionEventReal);

        if (keyInFormData >= 0) {
          if (isCompleted === null) {
            updatedState.formData.splice(keyInFormData, 1);
          } else {
            updatedState.formData[keyInFormData] = updateCompletionEvent;
          }
        } else {
          updatedState.formData.push(updateCompletionEvent);
        }

        return {
          completionEvents: updatedState.completionEvents,
          formData: updatedState.formData
        };
      });
    };

    this.handleOnBlur = evt => {
      var currentTarget = evt.currentTarget;
      const formContext = this.props.formContext;
      const _formContext$handlers = formContext.handlers,
            handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      const publishTo = getHandler(handlers, 'publishTo');
      let completionEvents = this.state.formData;
      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          callFunc(publishTo, {
            completionEvents
          });
        }
      }, 0);
    };

    const _this$props = this.props,
          formData = _this$props.formData,
          uiSchema = _this$props.uiSchema;

    const options = this._getUiOptions(uiSchema);

    const _completionEvents = options.completionEvents;

    const _formatData = formData.map((events, idx) => {
      const newValue = events.is_completed ? Boolean(events.is_completed) : null;
      return {
        completion_event: events.completion_event,
        is_completed: newValue
      };
    });

    const formattedEvents = {};

    _completionEvents.forEach((events, idx) => {
      const completionEvent = events.completion_event.replace(/ /g, "").toLowerCase();
      const keyInFormData = formData.findIndex(completionEvent => completionEvent.completion_event === events.completion_event);
      const needed = keyInFormData >= 0 && (formData[keyInFormData].is_completed === null || Boolean(formData[keyInFormData].is_completed)) ? true : false;
      const updated = keyInFormData >= 0 ? Boolean(formData[keyInFormData].is_completed) : false;
      formattedEvents[completionEvent] = {};
      formattedEvents[completionEvent].needed = needed;
      formattedEvents[completionEvent].updated = updated;
    });

    this.state = {
      completionEvents: formattedEvents,
      formData: _formatData
    };
  }

  render() {
    const _this$props2 = this.props,
          idSchema = _this$props2.idSchema,
          required = _this$props2.required,
          schema = _this$props2.schema,
          uiSchema = _this$props2.uiSchema;

    const options = this._getUiOptions(uiSchema);

    const completionEvents = options.completionEvents;

    let id = _get(idSchema, '$id', '');

    const title = _get(schema, 'title');

    const titleHelptext = _get(schema, 'helpText');

    return React.createElement(Container, {
      width: "100%"
    }, React.createElement(Row, {
      alignItems: "baseline",
      width: "auto"
    }, React.createElement(Col, {
      size: 6,
      style: {
        padding: '0 15px'
      }
    }, React.createElement(Row, {
      alignItems: "baseline",
      width: "auto"
    }, React.createElement(Col, {
      size: 4
    }, React.createElement(FormGroupTitle, {
      helpText: titleHelptext,
      id: id,
      required: required,
      title: title
    })), React.createElement(Col, {
      size: 4,
      style: {
        justifyContent: 'center',
        textAlign: 'center'
      }
    }, React.createElement(Typography, {
      type: "label",
      gutterBottom: "0",
      fullWidth: true
    }, React.createElement("strong", null, "Needed"))), React.createElement(Col, {
      size: 4,
      style: {
        justifyContent: 'center',
        textAlign: 'center'
      }
    }, React.createElement(Typography, {
      type: "label",
      gutterBottom: "0",
      fullWidth: true
    }, React.createElement("strong", null, "Updated")))))), React.createElement(Row, {
      width: "auto",
      alignItems: "baseline"
    }, React.createElement(Col, {
      size: 6
    }, React.createElement("div", {
      onBlur: this.handleOnBlur,
      style: {
        border: '1px solid #EDEDED',
        padding: '5px 0'
      }
    }, this.buildComponent(completionEvents)))));
  }

}

LegislationPublishToField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: PropTypes.object,
  formData: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  idSchema: PropTypes.object,
  options: PropTypes.object,
  required: PropTypes.bool,
  schema: PropTypes.object,
  uiSchema: PropTypes.object
} : {};
LegislationPublishToField.defaultProps = {
  formContext: null,
  formData: null,
  idSchema: null,
  options: null,
  required: null,
  schema: null,
  uiSchema: null
};
export default LegislationPublishToField;