"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _theme = require("../../../utils/theme");

var DescriptionFieldStyled = (0, _styledComponents.default)(_Typography.default).withConfig({
  displayName: "DescriptionField__DescriptionFieldStyled",
  componentId: "sc-1n0iax0-0"
})(["", ";", ";"], (0, _theme.themeGet)('DescriptionField.styles'), function (_ref) {
  var root = _ref.root,
      theme = _ref.theme;
  var rootStyles = (0, _theme.themeGet)('DescriptionField.styles.root', null)({
    theme: theme
  });
  return root ? rootStyles : null;
});

function DescriptionField(props) {
  var id = props.id,
      description = props.description,
      rest = (0, _objectWithoutProperties2.default)(props, ["id", "description"]); // If description is not available, don't render.

  if (!description) {
    return null;
  } // Otherwise, render the regular description.


  return _react.default.createElement(DescriptionFieldStyled, Object.assign({
    color: "#848484",
    gutterBottom: "0",
    gutterLeft: "5px",
    gutterRight: "5px",
    gutterTop: "10px"
  }, rest, {
    htmlFor: id
  }), description);
}

DescriptionField.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes.default.string,
  description: _propTypes.default.string
} : {};
DescriptionField.defaultProps = {
  id: null,
  description: null
};
var _default = DescriptionField;
exports.default = _default;