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

var _Box = _interopRequireDefault(require("../../Box"));

var _theme = require("../../../utils/theme");

var FormGroupContentStyled = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "FormGroupContent__FormGroupContentStyled",
  componentId: "pdunaq-0"
})(["", ";"], (0, _theme.themeGet)('FormGroupContent.styles'));

function FormGroupContent(props) {
  var children = props.children,
      schema = props.schema; // Extract the `boxProps` from the schema.

  var boxProps = (0, _get2.default)(schema, 'boxProps', {}); // Render the styled FormGroupContent.

  return _react.default.createElement(FormGroupContentStyled, Object.assign({
    elevation: 5,
    margin: "0 0 20px 0",
    padding: "20px 7.5px"
  }, boxProps), children);
}

FormGroupContent.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  schema: _propTypes.default.object
} : {};
FormGroupContent.defaultProps = {
  children: null,
  schema: null
};
var _default = FormGroupContent;
exports.default = _default;