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

var _TextArea = _interopRequireDefault(require("../../TextArea"));

var _actions = require("../../../utils/actions");

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var LegislationNotesField =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LegislationNotesField, _Component);

  function LegislationNotesField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LegislationNotesField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LegislationNotesField).call(this, props));

    _this.handleOnChange = function (evt) {
      var notes = evt.target.value;

      if (_this.state.typingTimeout !== null) {
        clearTimeout(_this.state.typingTimeout);
      }

      var typingTimeout = setTimeout(function () {
        _this.setState(function () {
          return {
            formData: notes
          };
        }, function () {
          if (notes.length <= 2000) {
            _this.saveNotes(notes);
          }
        });
      }, 1000);

      _this.setState({
        typingTimeout: typingTimeout
      });
    };

    _this.handleOnBlur = function (evt) {
      var notes = _this.state.formData;

      _this.saveNotes(notes);
    };

    _this.saveNotes = function (_notes) {
      var formContext = _this.props.formContext;
      var _formContext$handlers = formContext.handlers,
          handlers = _formContext$handlers === void 0 ? {} : _formContext$handlers;
      var updateNotes = (0, _actions.getHandler)(handlers, 'updateNotes');
      (0, _actions.callFunc)(updateNotes, {
        notes: _notes
      });
    };

    var formData = _this.props.formData;
    _this.state = {
      formData: formData,
      typingTimeout: null
    };
    return _this;
  }

  (0, _createClass2.default)(LegislationNotesField, [{
    key: "render",
    value: function render() {
      var formData = this.state.formData;
      var _this$props = this.props,
          idSchema = _this$props.idSchema,
          required = _this$props.required,
          schema = _this$props.schema;
      var id = (0, _get2.default)(idSchema, '$id', '');
      var title = (0, _get2.default)(schema, 'title');
      var titleHelptext = (0, _get2.default)(schema, 'helpText');
      var notesStyles = {
        overflowY: 'scroll'
      };
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
      }, _react.default.createElement(_TextArea.default, {
        defaultValue: formData,
        maxLength: "2000",
        onChange: this.handleOnChange,
        onBlur: this.handleOnBlur,
        placeholder: "Type your note here",
        rows: 5,
        style: notesStyles
      })));
    }
  }]);
  return LegislationNotesField;
}(_react.Component);

LegislationNotesField.propTypes = process.env.NODE_ENV !== "production" ? {
  formContext: _propTypes.default.object,
  formData: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.object, _propTypes.default.string]),
  idSchema: _propTypes.default.object,
  options: _propTypes.default.object,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object,
  uiSchema: _propTypes.default.object
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
var _default = LegislationNotesField;
exports.default = _default;