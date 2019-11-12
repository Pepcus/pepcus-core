"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = require("../../constants/colors");

var _theme = require("../../utils/theme");

var MenuLinkCSS = (0, _styledComponents.css)(["background-color:#ffffff;clear:both;cursor:pointer;display:block;font-weight:normal;line-height:1.5;padding:6.5px 20px;text-decoration:none;white-space:nowrap;&:hover,&:active{text-decoration:none;}", " ", ";"], function (_ref) {
  var selected = _ref.selected,
      theme = _ref.theme,
      colorProps = _ref.color;
  var background = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".gradientColor"), _colors.COLORS.PRIMARY_GRADIENT, {
    theme: theme
  });
  var defaultColor = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".color"), _colors.COLORS.PRIMARY, {
    theme: theme
  });
  var color = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".text"), _colors.COLORS.WHITE, {
    theme: theme
  });
  return {
    background: selected ? defaultColor : background,
    color: color,
    '&:hover': {
      background: defaultColor
    },
    '&:active': {
      background: defaultColor
    },
    '&:disabled': {
      background: defaultColor
    }
  };
}, (0, _theme.getThemeProps)('MenuLink.styles'));

var MenuLink = function MenuLink(_ref2) {
  var component = _ref2.component,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["component"]);
  var cmp = component || 'a';
  var MenuLinkStyled = (0, _styledComponents.default)(cmp).withConfig({
    displayName: "MenuLink__MenuLinkStyled",
    componentId: "sc-14l9odk-0"
  })(["", ";"], MenuLinkCSS);
  return _react.default.createElement(MenuLinkStyled, props);
};

MenuLink.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The component used for the root node.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object])
} : {};
MenuLink.defaultProps = {
  component: 'a'
};
var _default = MenuLink;
exports.default = _default;