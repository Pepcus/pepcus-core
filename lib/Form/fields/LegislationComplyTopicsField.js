"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _Col = _interopRequireDefault(require("../../Col"));

var _Row = _interopRequireDefault(require("../../Row"));

var _Select = _interopRequireDefault(require("../../Select"));

var _actions = require("../../../utils/actions");

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var LegislationComplyTopicsField =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LegislationComplyTopicsField, _Component);

  function LegislationComplyTopicsField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LegislationComplyTopicsField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LegislationComplyTopicsField).call(this, props));

    _this.componentWillMount = function () {
      var _this$props = _this.props,
          formData = _this$props.formData,
          uiSchema = _this$props.uiSchema;

      var options = _this._getUiOptions(uiSchema);

      var hrTopics = options.hrTopics;

      _this.updateState(formData, hrTopics);
    };

    _this._getUiOptions = function (schema) {
      return (0, _get2.default)(schema, 'ui:options', {});
    };

    _this.handleOnChange = function (options) {
      var newTopics = options.map(function (option) {
        return {
          value: option.value
        };
      });
      var formattedTopics = options.map(function (topic) {
        var newTopic = {
          value: topic.value,
          label: topic.value
        };
        return newTopic;
      });

      _this.setState({
        formattedTopics: formattedTopics,
        formData: newTopics
      });
    };

    _this.handleOnBlur = function (evt) {
      var currentTarget = evt.currentTarget;
      var formContext = _this.props.formContext;
      var _formContext$handlers = formContext.handlers,
          handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      var updateTopics = (0, _actions.getHandler)(handlers, 'updateTopics');
      var topics = _this.state.formData;
      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          (0, _actions.callFunc)(updateTopics, {
            topics: topics
          });
        }
      }, 0);
    };

    _this.updateState = function (formData, hrTopics) {
      var formattedTopics = formData.map(function (topic) {
        var newTopic = {
          value: topic.value,
          label: topic.value
        };
        return newTopic;
      });
      var defaultOptions = hrTopics.map(function (option) {
        option.label = option.value;
        return option;
      });

      _this.setState({
        defaultOptions: defaultOptions,
        formattedTopics: formattedTopics
      });
    };

    var _formData = _this.props.formData;
    _this.state = {
      defaultOptions: {},
      formattedTopics: {},
      formData: _formData
    };
    return _this;
  }

  (0, _createClass2.default)(LegislationComplyTopicsField, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          defaultOptions = _this$state.defaultOptions,
          formattedTopics = _this$state.formattedTopics;
      var _this$props2 = this.props,
          idSchema = _this$props2.idSchema,
          required = _this$props2.required,
          schema = _this$props2.schema;
      var id = (0, _get2.default)(idSchema, '$id', '');
      var title = (0, _get2.default)(schema, 'title');
      var titleHelptext = (0, _get2.default)(schema, 'helpText');
      return _react.default.createElement(_Row.default, {
        width: "auto"
      }, _react.default.createElement(_Col.default, {
        size: 12
      }, _react.default.createElement(_FormGroupTitle.default, {
        helpText: titleHelptext,
        id: id,
        required: required,
        title: title
      })), _react.default.createElement(_Col.default, {
        size: 12,
        style: {
          position: 'relative'
        }
      }, _react.default.createElement(_Select.default, {
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
  }]);
  return LegislationComplyTopicsField;
}(_react.Component);

LegislationComplyTopicsField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: _propTypes.default.object,
  formData: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  idSchema: _propTypes.default.object,
  options: _propTypes.default.object,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object,
  uiSchema: _propTypes.default.object
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
var _default = LegislationComplyTopicsField;
exports.default = _default;