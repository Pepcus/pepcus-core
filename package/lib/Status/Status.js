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

var StatusStyled = _styledComponents.default.div.withConfig({
  displayName: "Status__StatusStyled",
  componentId: "sc-110dsdx-0"
})(["", ";", ";"], (0, _theme2.getThemeProps)('Status.styles'), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  var type = color || 'text';
  return {
    color: (0, _theme2.getThemeProps)("palette.".concat(type, ".color"), _theme.THEME.palette.dark.color, {
      theme: theme
    })
  };
});

StatusStyled.propTypes = {
  /**
   * Apply themed styling to Status.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string
};
StatusStyled.defaultProps = {
  color: 'dark'
};
var _default = StatusStyled;
exports.default = _default;