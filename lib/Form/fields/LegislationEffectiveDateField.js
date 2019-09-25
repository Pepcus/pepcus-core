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

var _DatePicker = _interopRequireDefault(require("../../DatePicker"));

var _actions = require("../../../utils/actions");

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var LegislationEffectiveDateField =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LegislationEffectiveDateField, _Component);

  function LegislationEffectiveDateField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LegislationEffectiveDateField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LegislationEffectiveDateField).call(this, props));

    _this.handleOnBlur = function (evt) {
      var formContext = _this.props.formContext;
      var _formContext$handlers = formContext.handlers,
          handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      var updateEffectiveDate = (0, _actions.getHandler)(handlers, 'updateEffectiveDate');
      var date = _this.state.effectiveDate ? new Date(_this.state.effectiveDate) : null;
      (0, _actions.callFunc)(updateEffectiveDate, {
        date: date
      });
    };

    _this.handleOnChange = function (date) {
      _this.setState({
        effectiveDate: date
      });
    };

    _this.handleOnSelect = function (date) {};

    var formData = _this.props.formData;
    var effectiveDate = formData ? new Date(formData) : '';
    _this.state = {
      effectiveDate: effectiveDate
    };
    return _this;
  }

  (0, _createClass2.default)(LegislationEffectiveDateField, [{
    key: "render",
    value: function render() {
      var effectiveDate = this.state.effectiveDate;
      var _this$props = this.props,
          idSchema = _this$props.idSchema,
          required = _this$props.required,
          schema = _this$props.schema;
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
      }, _react.default.createElement(_DatePicker.default, {
        onBlur: this.handleOnBlur,
        onChange: this.handleOnChange,
        onSelect: this.handleOnSelect,
        selected: effectiveDate
      })));
    }
  }]);
  return LegislationEffectiveDateField;
}(_react.Component);

LegislationEffectiveDateField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: _propTypes.default.object,
  formData: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  idSchema: _propTypes.default.object,
  options: _propTypes.default.object,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object,
  uiSchema: _propTypes.default.object
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
var _default = LegislationEffectiveDateField;
exports.default = _default;