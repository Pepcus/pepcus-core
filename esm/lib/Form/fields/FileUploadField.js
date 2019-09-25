import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import Button from "../../Button";
import Col from "../../Col";
import FaIcon from "../../FaIcon";
import Input from "../../Input";
import Row from "../../Row";

class FileUploadField extends React.Component {
  // Create a reference to the hidden `input` DOM element.
  constructor(props) {
    super(props); // TODO: Switch to use `useSate` hook later on...

    this.hiddenFileInputRef = React.createRef();

    this._getUiOptions = schema => _get(schema, 'ui:options', {});

    this.getInputLabel = () => {
      const _this$props = this.props,
            uiSchema = _this$props.uiSchema,
            value = _this$props.value;
      const filesList = this.state.filesList; // Determine the value based on current formData or internal filesList.

      const files = value || filesList; // Get the uiOptions

      const options = this._getUiOptions(uiSchema);

      const _options$chooseFileLa = options.chooseFileLabel,
            chooseFileLabel = _options$chooseFileLa === void 0 ? 'Select a file...' : _options$chooseFileLa;
      const count = files && files.length || 0; // Based on the `count` value, update the label.

      if (!count) {
        return chooseFileLabel;
      } else if (count > 1) {
        return `${count} files selected.`;
      }

      return _get(files, '[0].name', '1 file selected.');
    };

    this.getHiddenInputStyle = () => ({
      height: 38,
      opacity: 0,
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      width: '100%',
      zIndex: -1
    });

    this.handleOnUploadClick = event => {
      event.preventDefault();
      const current = this.hiddenFileInputRef.current; // Invoke the input click() event.

      current && typeof current.click === 'function' && current.click();
    };

    this.handleOnInputChange = event => {
      // Extract the `onChange` handler from props.
      const onChange = this.props.onChange; // Extract the files out of the file input.

      const current = this.hiddenFileInputRef.current;
      const files = current && current.files || {}; // Update the current files list.

      this.setState(() => ({
        filesList: files
      }), () => {
        // Invoke the `onChange` handler.
        typeof onChange === 'function' && onChange(files);
      });
    };

    this.state = {
      // Create an empty files list.
      filesList: []
    };
  }
  /**
   * Get the `ui:options` for the current field.
   *
   * @method _getUiOptions
   * @private
   * @param  {Object}      schema The schema to extract the options from
   * @return {Object}             The extracted options
   */


  render() {
    const _this$props2 = this.props,
          disabledProps = _this$props2.disabled,
          idSchema = _this$props2.idSchema,
          name = _this$props2.name,
          readonly = _this$props2.readonly,
          registry = _this$props2.registry,
          required = _this$props2.required,
          schema = _this$props2.schema,
          uiSchema = _this$props2.uiSchema; // Determine if the field is disabled

    const disabled = readonly || disabledProps; // Extract couple of fields from the props.

    const options = this._getUiOptions(uiSchema);

    const title = _get(schema, 'title') || name;

    const TitleField = _get(registry, 'fields.FormGroupTitleField');

    const id = idSchema.$id;
    const _options$accept = options.accept,
          accept = _options$accept === void 0 ? '*' : _options$accept,
          _options$multiple = options.multiple,
          multiple = _options$multiple === void 0 ? false : _options$multiple,
          _options$btnProps = options.btnProps,
          btnProps = _options$btnProps === void 0 ? {} : _options$btnProps,
          _options$btnLabel = options.btnLabel,
          btnLabel = _options$btnLabel === void 0 ? 'Upload' : _options$btnLabel,
          _options$showIcon = options.showIcon,
          showIcon = _options$showIcon === void 0 ? true : _options$showIcon; // Render the `FileField` component.

    return React.createElement(Row, {
      width: "auto"
    }, React.createElement(Col, {
      size: 12
    }, React.createElement(TitleField, {
      id: id,
      title: title,
      required: required
    })), React.createElement(Col, {
      style: {
        position: 'relative'
      }
    }, React.createElement(Input, {
      disabled: true,
      required: required,
      type: "text",
      value: this.getInputLabel()
    }), React.createElement("input", {
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
    })), React.createElement(Col, {
      size: "auto"
    }, React.createElement(Button, Object.assign({
      disabled: disabled,
      onClick: this.handleOnUploadClick,
      type: "button"
    }, btnProps), showIcon && React.createElement(FaIcon, {
      icon: faUpload,
      margin: "0 5px 0 0"
    }), btnLabel)));
  }

}

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
  disabled: PropTypes.bool,

  /**
   * The schema object for identifying the field.
   */
  idSchema: PropTypes.object.isRequired,

  /**
   * The name for the field.
   */
  name: PropTypes.string.isRequired,

  /**
   * Callback fired on the change event of the input element.
   */
  onChange: PropTypes.func.isRequired,

  /**
   * If `true`, the field will be readonly.
   */
  readonly: PropTypes.bool,

  /**
   * The form's registry object, containing the registered custom fields and widgets.
   */
  registry: PropTypes.object.isRequired,

  /**
   * Is this a required field?
   */
  required: PropTypes.bool,

  /**
   * The JSON Schema for this field.
   */
  schema: PropTypes.object.isRequired,

  /**
   * The JSON uiSchema for this field.
   */
  uiSchema: PropTypes.object.isRequired,

  /**
   * The value for this field.
   */
  value: PropTypes.object
} : {};
export default FileUploadField;