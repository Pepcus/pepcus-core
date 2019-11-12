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

var _Button = _interopRequireDefault(require("../../Button"));

var _SvgIcon = require("../../SvgIcon");

var _theme = require("../../../utils/theme");

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var ArrayFieldTemplateStyled = _styledComponents.default.div.withConfig({
  displayName: "ArrayFieldTemplate__ArrayFieldTemplateStyled",
  componentId: "sc-1xpcqsi-0"
})(["", ";"], (0, _theme.getThemeProps)('ArrayFieldTemplate.styles'));

var ArrayFieldButtons = _styledComponents.default.div.withConfig({
  displayName: "ArrayFieldTemplate__ArrayFieldButtons",
  componentId: "sc-1xpcqsi-1"
})(["padding:10px 0;"]);

function ArrayFieldTemplate(props) {
  var canAdd = props.canAdd,
      formContext = props.formContext,
      idSchema = props.idSchema,
      items = props.items,
      onAddClick = props.onAddClick,
      required = props.required;
  var schemaId = (0, _get2.default)(idSchema, '$id');
  var uiSchemaTitle = (0, _get2.default)(props, ['uiSchema', 'ui:title']);
  var propsTitle = (0, _get2.default)(props, 'title');
  var titleId = "".concat(schemaId, "__title");

  var renderTitle = function renderTitle() {
    return _react.default.createElement(_FormGroupTitle.default, {
      formContext: formContext,
      id: titleId,
      required: required,
      root: schemaId === 'root',
      title: propsTitle || uiSchemaTitle
    });
  };

  return _react.default.createElement(ArrayFieldTemplateStyled, null, renderTitle(), items.map(function (item) {
    return _react.default.createElement("div", {
      key: item.index
    }, _react.default.createElement("div", null, item.children), _react.default.createElement(ArrayFieldButtons, null, item.hasMoveDown && _react.default.createElement(_Button.default, {
      noMinWidth: true,
      noPaddingY: true,
      onClick: item.onReorderClick(item.index, item.index + 1),
      style: {
        marginRight: '10px'
      },
      width: "47px"
    }, _react.default.createElement(_SvgIcon.ChevronIcon, {
      direction: "down",
      style: {
        width: 25,
        height: 25
      }
    })), item.hasMoveUp && _react.default.createElement(_Button.default, {
      noMinWidth: true,
      noPaddingY: true,
      onClick: item.onReorderClick(item.index, item.index - 1),
      style: {
        marginRight: '10px'
      },
      width: "47px"
    }, _react.default.createElement(_SvgIcon.ChevronIcon, {
      direction: "up",
      style: {
        width: 25,
        height: 25
      }
    })), _react.default.createElement(_Button.default, {
      noMinWidth: true,
      noPaddingY: true,
      onClick: item.onDropIndexClick(item.index),
      color: "error",
      width: "47px"
    }, ' ', _react.default.createElement(_SvgIcon.TrashIcon, {
      style: {
        width: 25,
        height: 25
      }
    }))));
  }), canAdd && _react.default.createElement("div", null, _react.default.createElement(_Button.default, {
    onClick: onAddClick
  }, "Add Item")));
}

ArrayFieldTemplate.propTypes = process.env.NODE_ENV !== "production" ? {
  canAdd: _propTypes.default.bool,
  formContext: _propTypes.default.object,
  idSchema: _propTypes.default.object,
  items: _propTypes.default.array,
  onAddClick: _propTypes.default.func,
  required: _propTypes.default.bool
} : {};
ArrayFieldTemplate.defaultProps = {
  canAdd: false,
  formContext: null,
  idSchema: {},
  items: [],
  onAddClick: function onAddClick() {},
  required: false
};
var _default = ArrayFieldTemplate;
exports.default = _default;