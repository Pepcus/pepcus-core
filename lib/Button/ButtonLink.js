"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../constants/theme");

var _theme2 = require("../../utils/theme");

var ButtonLink = _styledComponents.default.a.withConfig({
  displayName: "ButtonLink",
  componentId: "l1k07u-0"
})(["color:", ";cursor:pointer;text-decoration:none;transition:color 0.15s ease-in-out;&:hover{color:", ";text-decoration:underline;}&:active{color:", ";text-decoration:underline;}", ";"], function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return (0, _theme2.getThemeProps)("palette.".concat(color, ".color"), _theme.THEME.palette.primary.color, {
    theme: theme
  });
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return (0, _theme2.getThemeProps)("palette.".concat(color, ".light"), _theme.THEME.palette.primary.light, {
    theme: theme
  });
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return (0, _theme2.getThemeProps)("palette.".concat(color, ".dark"), _theme.THEME.palette.primary.dark, {
    theme: theme
  });
}, (0, _theme2.getThemeProps)('ButtonLink.styles'));

ButtonLink.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Apply themed styling to Button.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * Default onClick handler for the button
   */
  onClick: _propTypes.default.func
};
ButtonLink.defaultProps = {
  children: null,
  className: '',
  color: 'primary',
  onClick: function onClick() {}
};
var _default = ButtonLink;
exports.default = _default;