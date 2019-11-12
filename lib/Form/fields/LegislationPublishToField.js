"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _Col = _interopRequireDefault(require("../../Col"));

var _Container = _interopRequireDefault(require("../../Container"));

var _Row = _interopRequireDefault(require("../../Row"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _actions = require("../../../utils/actions");

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var LegislationPublishToField =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LegislationPublishToField, _Component);

  function LegislationPublishToField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LegislationPublishToField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LegislationPublishToField).call(this, props));

    _this.buildComponent = function (completionEvents) {
      return completionEvents.map(function (item, itemIdx) {
        var completion_event = item.completion_event;
        var key = "".concat(completion_event, "___").concat(itemIdx);

        var dataCompletion = _this.state.completionEvents[completion_event.replace(/ /g, "").toLowerCase()];

        var checkboxUpdated = Boolean(dataCompletion.needed) === true ? _react.default.createElement("input", {
          type: "checkbox",
          "data-option": "updated",
          "data-completion-event": completion_event,
          checked: dataCompletion.updated,
          onChange: _this.handleSelecting
        }) : _react.default.createElement("input", {
          type: "checkbox",
          checked: dataCompletion.updated,
          disabled: true
        }); // Render the item.

        return _react.default.createElement(_Row.default, {
          width: "auto",
          alignItems: "baseline",
          key: key,
          style: {
            margin: 0
          }
        }, _react.default.createElement(_Col.default, {
          size: 4,
          style: {
            padding: '6px 8px'
          }
        }, _react.default.createElement(_Typography.default, {
          type: "label",
          gutterBottom: "0",
          fullWidth: true
        }, _react.default.createElement("strong", null, completion_event))), _react.default.createElement(_Col.default, {
          size: 4,
          style: {
            justifyContent: 'center',
            textAlign: 'center'
          }
        }, _react.default.createElement("input", {
          type: "checkbox",
          "data-option": "needed",
          "data-completion-event": completion_event,
          checked: dataCompletion.needed,
          onChange: _this.handleSelecting
        })), _react.default.createElement(_Col.default, {
          size: 4,
          style: {
            justifyContent: 'center',
            textAlign: 'center'
          }
        }, checkboxUpdated));
      });
    };

    _this._getUiOptions = function (schema) {
      return (0, _get2.default)(schema, 'ui:options', {});
    };

    _this.handleSelecting = function (evt) {
      var option = evt.target.getAttribute('data-option');
      var completionEventReal = evt.target.getAttribute('data-completion-event');
      var completionEvent = completionEventReal.replace(/ /g, "").toLowerCase();
      var checked = evt.target.checked;
      var isCompleted = null;

      _this.setState(function (prevState) {
        var updatedState = (0, _objectSpread2.default)({}, prevState);

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

        var updateCompletionEvent = {
          completion_event: completionEventReal,
          is_completed: isCompleted
        };
        var keyInFormData = updatedState.formData.findIndex(function (completionEvent) {
          return completionEvent.completion_event === completionEventReal;
        });

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

    _this.handleOnBlur = function (evt) {
      var currentTarget = evt.currentTarget;
      var formContext = _this.props.formContext;
      var _formContext$handlers = formContext.handlers,
          handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      var publishTo = (0, _actions.getHandler)(handlers, 'publishTo');
      var completionEvents = _this.state.formData;
      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          (0, _actions.callFunc)(publishTo, {
            completionEvents: completionEvents
          });
        }
      }, 0);
    };

    var _this$props = _this.props,
        formData = _this$props.formData,
        uiSchema = _this$props.uiSchema;

    var options = _this._getUiOptions(uiSchema);

    var _completionEvents = options.completionEvents;

    var _formatData = formData.map(function (events, idx) {
      var newValue = events.is_completed ? Boolean(events.is_completed) : null;
      return {
        completion_event: events.completion_event,
        is_completed: newValue
      };
    });

    var formattedEvents = {};

    _completionEvents.forEach(function (events, idx) {
      var completionEvent = events.completion_event.replace(/ /g, "").toLowerCase();
      var keyInFormData = formData.findIndex(function (completionEvent) {
        return completionEvent.completion_event === events.completion_event;
      });
      var needed = keyInFormData >= 0 && (formData[keyInFormData].is_completed === null || Boolean(formData[keyInFormData].is_completed)) ? true : false;
      var updated = keyInFormData >= 0 ? Boolean(formData[keyInFormData].is_completed) : false;
      formattedEvents[completionEvent] = {};
      formattedEvents[completionEvent].needed = needed;
      formattedEvents[completionEvent].updated = updated;
    });

    _this.state = {
      completionEvents: formattedEvents,
      formData: _formatData
    };
    return _this;
  }

  (0, _createClass2.default)(LegislationPublishToField, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          idSchema = _this$props2.idSchema,
          required = _this$props2.required,
          schema = _this$props2.schema,
          uiSchema = _this$props2.uiSchema;

      var options = this._getUiOptions(uiSchema);

      var completionEvents = options.completionEvents;
      var id = (0, _get2.default)(idSchema, '$id', '');
      var title = (0, _get2.default)(schema, 'title');
      var titleHelptext = (0, _get2.default)(schema, 'helpText');
      return _react.default.createElement(_Container.default, {
        width: "100%"
      }, _react.default.createElement(_Row.default, {
        alignItems: "baseline",
        width: "auto"
      }, _react.default.createElement(_Col.default, {
        size: 6,
        style: {
          padding: '0 15px'
        }
      }, _react.default.createElement(_Row.default, {
        alignItems: "baseline",
        width: "auto"
      }, _react.default.createElement(_Col.default, {
        size: 4
      }, _react.default.createElement(_FormGroupTitle.default, {
        helpText: titleHelptext,
        id: id,
        required: required,
        title: title
      })), _react.default.createElement(_Col.default, {
        size: 4,
        style: {
          justifyContent: 'center',
          textAlign: 'center'
        }
      }, _react.default.createElement(_Typography.default, {
        type: "label",
        gutterBottom: "0",
        fullWidth: true
      }, _react.default.createElement("strong", null, "Needed"))), _react.default.createElement(_Col.default, {
        size: 4,
        style: {
          justifyContent: 'center',
          textAlign: 'center'
        }
      }, _react.default.createElement(_Typography.default, {
        type: "label",
        gutterBottom: "0",
        fullWidth: true
      }, _react.default.createElement("strong", null, "Updated")))))), _react.default.createElement(_Row.default, {
        width: "auto",
        alignItems: "baseline"
      }, _react.default.createElement(_Col.default, {
        size: 6
      }, _react.default.createElement("div", {
        onBlur: this.handleOnBlur,
        style: {
          border: '1px solid #EDEDED',
          padding: '5px 0'
        }
      }, this.buildComponent(completionEvents)))));
    }
  }]);
  return LegislationPublishToField;
}(_react.Component);

LegislationPublishToField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: _propTypes.default.object,
  formData: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  idSchema: _propTypes.default.object,
  options: _propTypes.default.object,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object,
  uiSchema: _propTypes.default.object
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
var _default = LegislationPublishToField;
exports.default = _default;