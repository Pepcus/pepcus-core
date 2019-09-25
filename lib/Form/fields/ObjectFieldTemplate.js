"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _findIndex2 = _interopRequireDefault(require("lodash/findIndex"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Col = _interopRequireDefault(require("../../Col"));

var _Row = _interopRequireDefault(require("../../Row"));

var _theme = require("../../../utils/theme");

var _FormGroupContent = _interopRequireDefault(require("./FormGroupContent"));

var ObjectFieldTemplateStyled = _styledComponents.default.div.withConfig({
  displayName: "ObjectFieldTemplate__ObjectFieldTemplateStyled",
  componentId: "ev6hnh-0"
})(["", ";"], (0, _theme.getThemeProps)('ObjectFieldTemplate.styles'));

function ObjectFieldTemplate(props) {
  var DescriptionField = props.DescriptionField,
      TitleField = props.TitleField,
      description = props.description,
      formContext = props.formContext,
      idSchema = props.idSchema,
      properties = props.properties,
      required = props.required,
      schema = props.schema;
  var formGroup = (0, _get2.default)(schema, 'formGroup', false);
  var uiSchemaTitle = (0, _get2.default)(props, 'uiSchema.ui:title');
  var propsTitle = (0, _get2.default)(props, 'title');
  var schemaId = (0, _get2.default)(idSchema, '$id');
  var titleId = "".concat(schemaId, "__title");
  var descriptionId = "".concat(schemaId, "__description");
  var rowProps = (0, _get2.default)(props, 'uiSchema.ui:options.row', {});
  var isRoot = schemaId === 'root';
  var gutter = typeof rowProps.gutter === 'undefined' ? false : rowProps.gutter;
  var displayTitle = (0, _get2.default)(props, 'uiSchema.ui:options.label', true);

  var renderTitle = function renderTitle() {
    return displayTitle && _react.default.createElement(TitleField, {
      formContext: formContext,
      id: titleId,
      required: required,
      root: isRoot,
      title: propsTitle || uiSchemaTitle
    });
  };

  var renderProperty = function renderProperty(prop) {
    // Extract the `col` props, if available.
    var colProps = (0, _get2.default)(prop, 'content.props.uiSchema.ui:options.col', {}); // Extract the gutter from `colProps`.

    var colGutterProp = (0, _get2.default)(colProps, 'gutter'); // Define the gutter for the column.

    var colGutter = typeof colGutterProp === 'undefined' ? true : colGutterProp; // Extract the content to render.

    var content = (0, _get2.default)(prop, 'content'); // To fix the margins, we need to match the last index with current index.

    var currentIndex = (0, _findIndex2.default)(properties, prop); // Should we remove the bottom margin?

    var removeBottomMargin = currentIndex === properties.length - 1; // Return the Column

    return _react.default.createElement(_Col.default, Object.assign({
      key: prop.name,
      gutter: isRoot ? false : colGutter
    }, colProps, {
      margin: removeBottomMargin ? '0 0 -15px 0' : colProps.margin || '',
      size: colProps.size || 12
    }), content);
  };

  var renderRow = function renderRow(items) {
    return _react.default.createElement(_Row.default, Object.assign({
      justify: "space-between"
    }, rowProps, {
      gutter: gutter
    }), items.map(function (prop) {
      return renderProperty(prop);
    }));
  };

  var renderContent = function renderContent() {
    return formGroup ? _react.default.createElement(_FormGroupContent.default, {
      schema: schema
    }, renderRow(properties)) : renderRow(properties);
  };

  var renderDescription = function renderDescription() {
    return !(0, _isEmpty2.default)(description) && _react.default.createElement(DescriptionField, {
      description: description,
      formContext: formContext,
      id: descriptionId,
      root: isRoot
    });
  };

  return _react.default.createElement(ObjectFieldTemplateStyled, null, renderTitle(), isRoot && renderDescription(), renderContent());
}

ObjectFieldTemplate.propTypes = process.env.NODE_ENV !== "production" ? {
  DescriptionField: _propTypes.default.func,
  TitleField: _propTypes.default.func,
  description: _propTypes.default.string,
  formContext: _propTypes.default.object,
  idSchema: _propTypes.default.object,
  properties: _propTypes.default.array,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object.isRequired
} : {};
ObjectFieldTemplate.defaultProps = {
  DescriptionField: null,
  TitleField: null,
  description: '',
  formContext: {},
  idSchema: {},
  properties: [],
  required: false
};
var _default = ObjectFieldTemplate;
exports.default = _default;