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

var _Input = _interopRequireDefault(require("../../Input"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _actions = require("../../../utils/actions");

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var LegislationLinkField =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LegislationLinkField, _Component);

  function LegislationLinkField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LegislationLinkField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LegislationLinkField).call(this, props));

    _this.handleOnChange = function (evt) {
      var pattern = /^(?:http|https|ftp):\/\/[\w.]+(?:\.[\w]+)+[\w\-.,@?^=%&:;/~\\+#]+$/;
      var link = evt.target.value;

      if (link && !pattern.test(link)) {
        _this.setState({
          errors: true
        });
      } else {
        _this.setState({
          formData: link,
          errors: false
        });
      }
    };

    _this.handleOnBlur = function (evt) {
      if (_this.state.errors) {
        return false;
      }

      var currentTarget = evt.currentTarget;
      var formContext = _this.props.formContext;
      var _formContext$handlers = formContext.handlers,
          handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      var updatePublicLink = (0, _actions.getHandler)(handlers, 'updatePublicLink');
      var link = _this.state.formData || null;
      setTimeout(function () {
        if (!currentTarget.contains(document.activeElement)) {
          (0, _actions.callFunc)(updatePublicLink, {
            link: link
          });
        }
      }, 0);
    };

    var formData = _this.props.formData;
    _this.state = {
      formData: formData,
      errors: false
    };
    return _this;
  }

  (0, _createClass2.default)(LegislationLinkField, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          formData = _this$state.formData,
          errors = _this$state.errors;
      var _this$props = this.props,
          idSchema = _this$props.idSchema,
          required = _this$props.required,
          schema = _this$props.schema;
      var id = (0, _get2.default)(idSchema, '$id', '');
      var title = (0, _get2.default)(schema, 'title');
      var titleHelptext = (0, _get2.default)(schema, 'helpText');
      var message = errors ? _react.default.createElement(_Typography.default, {
        color: "error",
        gutterBottom: "0",
        style: {
          margin: '10px 5px'
        }
      }, "Please enter a valid url.") : '';
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
      }, _react.default.createElement(_Input.default, {
        defaultValue: formData,
        id: id,
        onChange: this.handleOnChange,
        onBlur: this.handleOnBlur,
        required: required,
        tabIndex: -1,
        type: "text"
      }), message));
    }
  }]);
  return LegislationLinkField;
}(_react.Component);

LegislationLinkField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: _propTypes.default.object,
  formData: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  idSchema: _propTypes.default.object,
  options: _propTypes.default.object,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object,
  uiSchema: _propTypes.default.object
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
var _default = LegislationLinkField;
exports.default = _default;