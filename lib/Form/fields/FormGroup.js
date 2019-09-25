"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../utils/theme");

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var _ErrorList = _interopRequireDefault(require("./ErrorList"));

var FormGroupStyled = _styledComponents.default.div.withConfig({
  displayName: "FormGroup__FormGroupStyled",
  componentId: "sc-8rje2l-0"
})(["margin-bottom:", ";", ";"], function (_ref) {
  var isGroup = _ref.isGroup;
  return !isGroup && '15px';
}, (0, _theme.getThemeProps)('FormGroup.styles'));

function FormGroup(props) {
  var children = props.children,
      classNames = props.classNames,
      description = props.description,
      displayLabel = props.displayLabel,
      help = props.help,
      id = props.id,
      label = props.label,
      rawErrors = props.rawErrors,
      required = props.required,
      schema = props.schema;
  var type = schema.type;
  var descriptionPosition = schema.descriptionPosition || 'bottom';
  var isFormGroup = schema.formGroup || false;
  var titleHelptext = (0, _get2.default)(schema, 'helpText');
  var labelString = "".concat(label);

  var renderLabel = function renderLabel() {
    return !isFormGroup && displayLabel && type !== 'boolean' && _react.default.createElement(_FormGroupTitle.default, {
      helpText: titleHelptext,
      id: id,
      required: required,
      title: labelString
    });
  };

  var renderDescriptionTop = function renderDescriptionTop() {
    return id !== 'root' && descriptionPosition === 'top' && description;
  };

  var renderDescriptionBottom = function renderDescriptionBottom() {
    return id !== 'root' && descriptionPosition === 'bottom' && description;
  };

  return _react.default.createElement(FormGroupStyled, {
    isGroup: isFormGroup,
    className: classNames,
    type: type
  }, renderLabel(), renderDescriptionTop(), children, renderDescriptionBottom(), _react.default.createElement(_ErrorList.default, {
    errors: rawErrors
  }), help);
}

FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  classNames: _propTypes.default.string,
  description: _propTypes.default.element,
  displayLabel: _propTypes.default.bool,
  help: _propTypes.default.element,
  id: _propTypes.default.string,
  label: _propTypes.default.string,
  rawErrors: _propTypes.default.array,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object
} : {};
FormGroup.defaultProps = {
  children: null,
  classNames: '',
  description: null,
  displayLabel: true,
  help: null,
  id: null,
  label: null,
  rawErrors: null,
  required: false,
  schema: {}
};
var _default = FormGroup;
exports.default = _default;