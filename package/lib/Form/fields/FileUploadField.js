"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _faUpload = require("@fortawesome/free-solid-svg-icons/faUpload");

var _Button = _interopRequireDefault(require("../../Button"));

var _Col = _interopRequireDefault(require("../../Col"));

var _FaIcon = _interopRequireDefault(require("../../FaIcon"));

var _Input = _interopRequireDefault(require("../../Input"));

var _Row = _interopRequireDefault(require("../../Row"));

var FileUploadField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FileUploadField, _React$Component);

  // Create a reference to the hidden `input` DOM element.
  function FileUploadField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FileUploadField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(FileUploadField).call(this, props)); // TODO: Switch to use `useSate` hook later on...

    _this.hiddenFileInputRef = _react.default.createRef();

    _this._getUiOptions = function (schema) {
      return (0, _get2.default)(schema, 'ui:options', {});
    };

    _this.getInputLabel = function () {
      var _this$props = _this.props,
          uiSchema = _this$props.uiSchema,
          value = _this$props.value;
      var filesList = _this.state.filesList; // Determine the value based on current formData or internal filesList.

      var files = value || filesList; // Get the uiOptions

      var options = _this._getUiOptions(uiSchema);

      var _options$chooseFileLa = options.chooseFileLabel,
          chooseFileLabel = _options$chooseFileLa === void 0 ? 'Select a file...' : _options$chooseFileLa;
      var count = files && files.length || 0; // Based on the `count` value, update the label.

      if (!count) {
        return chooseFileLabel;
      } else if (count > 1) {
        return "".concat(count, " files selected.");
      }

      return (0, _get2.default)(files, '[0].name', '1 file selected.');
    };

    _this.getHiddenInputStyle = function () {
      return {
        height: 38,
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: -1
      };
    };

    _this.handleOnUploadClick = function (event) {
      event.preventDefault();
      var current = _this.hiddenFileInputRef.current; // Invoke the input click() event.

      current && typeof current.click === 'function' && current.click();
    };

    _this.handleOnInputChange = function (event) {
      // Extract the `onChange` handler from props.
      var onChange = _this.props.onChange; // Extract the files out of the file input.

      var current = _this.hiddenFileInputRef.current;
      var files = current && current.files || {}; // Update the current files list.

      _this.setState(function () {
        return {
          filesList: files
        };
      }, function () {
        // Invoke the `onChange` handler.
        typeof onChange === 'function' && onChange(files);
      });
    };

    _this.state = {
      // Create an empty files list.
      filesList: []
    };
    return _this;
  }
  /**
   * Get the `ui:options` for the current field.
   *
   * @method _getUiOptions
   * @private
   * @param  {Object}      schema The schema to extract the options from
   * @return {Object}             The extracted options
   */


  (0, _createClass2.default)(FileUploadField, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          disabledProps = _this$props2.disabled,
          idSchema = _this$props2.idSchema,
          name = _this$props2.name,
          readonly = _this$props2.readonly,
          registry = _this$props2.registry,
          required = _this$props2.required,
          schema = _this$props2.schema,
          uiSchema = _this$props2.uiSchema; // Determine if the field is disabled

      var disabled = readonly || disabledProps; // Extract couple of fields from the props.

      var options = this._getUiOptions(uiSchema);

      var title = (0, _get2.default)(schema, 'title') || name;
      var TitleField = (0, _get2.default)(registry, 'fields.FormGroupTitleField');
      var id = idSchema.$id;
      var _options$accept = options.accept,
          accept = _options$accept === void 0 ? '*' : _options$accept,
          _options$multiple = options.multiple,
          multiple = _options$multiple === void 0 ? false : _options$multiple,
          _options$btnProps = options.btnProps,
          btnProps = _options$btnProps === void 0 ? {} : _options$btnProps,
          _options$btnLabel = options.btnLabel,
          btnLabel = _options$btnLabel === void 0 ? 'Upload' : _options$btnLabel,
          _options$showIcon = options.showIcon,
          showIcon = _options$showIcon === void 0 ? true : _options$showIcon; // Render the `FileField` component.

      return _react.default.createElement(_Row.default, {
        width: "auto"
      }, _react.default.createElement(_Col.default, {
        size: 12
      }, _react.default.createElement(TitleField, {
        id: id,
        title: title,
        required: required
      })), _react.default.createElement(_Col.default, {
        style: {
          position: 'relative'
        }
      }, _react.default.createElement(_Input.default, {
        disabled: true,
        required: required,
        type: "text",
        value: this.getInputLabel()
      }), _react.default.createElement("input", {
        accept: accept,
        defaultValue: "",
        disabled: disabled,
        id: id,
        multiple: multiple,
        onChange: this.handleOnInputChange,
        ref: this.hiddenFileInputRef,
        required: required,
        style: this.getHiddenInputStyle(),
        tabIndex: -1,
        type: "file"
      })), _react.default.createElement(_Col.default, {
        size: "auto"
      }, _react.default.createElement(_Button.default, Object.assign({
        disabled: disabled,
        onClick: this.handleOnUploadClick,
        type: "button"
      }, btnProps), showIcon && _react.default.createElement(_FaIcon.default, {
        icon: _faUpload.faUpload,
        margin: "0 5px 0 0"
      }), btnLabel)));
    }
  }]);
  return FileUploadField;
}(_react.default.Component);

FileUploadField.defaultProps = {
  disabled: null,
  readonly: null,
  required: null,
  value: null
};
FileUploadField.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the field is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The schema object for identifying the field.
   */
  idSchema: _propTypes.default.object.isRequired,

  /**
   * The name for the field.
   */
  name: _propTypes.default.string.isRequired,

  /**
   * Callback fired on the change event of the input element.
   */
  onChange: _propTypes.default.func.isRequired,

  /**
   * If `true`, the field will be readonly.
   */
  readonly: _propTypes.default.bool,

  /**
   * The form's registry object, containing the registered custom fields and widgets.
   */
  registry: _propTypes.default.object.isRequired,

  /**
   * Is this a required field?
   */
  required: _propTypes.default.bool,

  /**
   * The JSON Schema for this field.
   */
  schema: _propTypes.default.object.isRequired,

  /**
   * The JSON uiSchema for this field.
   */
  uiSchema: _propTypes.default.object.isRequired,

  /**
   * The value for this field.
   */
  value: _propTypes.default.object
} : {};
var _default = FileUploadField;
exports.default = _default;