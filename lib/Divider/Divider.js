"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _theme = require("../../utils/theme");

var DividerStyled = _styledComponents.default.hr.withConfig({
  displayName: "Divider__DividerStyled",
  componentId: "sc-1fuby3h-0"
})(["border:none;box-sizing:border-box;clear:both;flex-shrink:0;", ";", ";"], (0, _theme.getThemeProps)('Divider.styles'), function (_ref) {
  var height = _ref.height,
      light = _ref.light,
      margin = _ref.margin,
      theme = _ref.theme,
      transparent = _ref.transparent,
      color = _ref.color,
      width = _ref.width;
  var bgColor = (0, _theme.getThemeProps)("palette.".concat(color, ".color"), color || '#2D2D2D', {
    theme: theme
  });
  var backgroundColor = light ? (0, _polished.lighten)(0.4, bgColor) : bgColor;
  return {
    backgroundColor: transparent ? 'transparent' : backgroundColor,
    height: height,
    margin: margin ? margin : 0,
    width: width
  };
});

DividerStyled.propTypes = {
  /**
   * Apply themed styling to Divider.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * The height for the divider.
   */
  height: _propTypes.default.string,

  /**
   * Lighten the shade of the Divider.
   */
  light: _propTypes.default.bool,

  /**
   * Add a custom margin.
   */
  margin: _propTypes.default.string,

  /**
   * Render a transparent divider.
   * The `<Divider />` can be used as a spacer.
   */
  transparent: _propTypes.default.bool,

  /**
   * The width for the Divider.
   */
  width: _propTypes.default.string
};
DividerStyled.defaultProps = {
  color: 'muted',
  height: '1px',
  light: false,
  margin: '10px 0',
  transparent: false,
  width: '100%'
};
var _default = DividerStyled;
exports.default = _default;