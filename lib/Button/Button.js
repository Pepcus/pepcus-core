"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("../../constants/colors");

var _theme = require("../../utils/theme");

var Button = _styledComponents.default.button.withConfig({
  displayName: "Button",
  componentId: "sc-11at515-0"
})(["-moz-appearance:none;-webkit-appearance:none;background:linear-gradient(to top,#1991eb,#2da1f8);border:", ";color:inherit;cursor:pointer;display:inline-block;outline:none;position:relative;text-align:", ";text-decoration:none;text-transform:initial;transition:box-shadow 0.2s ease-in;user-select:none;vertical-align:middle;&::-moz-focus-inner{border-style:none;}&:disabled{cursor:", ";opacity:", ";}&:focus{outline:none;}", ";", ";", ";"], function (_ref) {
  var border = _ref.border;
  return border ? '1px solid transparent' : 'none';
}, function (_ref2) {
  var align = _ref2.align;
  return align || 'center';
}, function (_ref3) {
  var disabledCursor = _ref3.disabledCursor;
  return disabledCursor || 'not-allowed';
}, function (_ref4) {
  var disabledOpacity = _ref4.disabledOpacity;
  return disabledOpacity || 0.5;
}, (0, _theme.getThemeProps)('typography.button'), (0, _theme.getThemeProps)('Button.styles'), function (_ref5) {
  var active = _ref5.active,
      borderRadius = _ref5.borderRadius,
      colorProps = _ref5.color,
      disabledCursor = _ref5.disabledCursor,
      disabledOpacity = _ref5.disabledOpacity,
      height = _ref5.height,
      margin = _ref5.margin,
      minHeightProps = _ref5.minHeight,
      noMinHeight = _ref5.noMinHeight,
      noMinWidth = _ref5.noMinWidth,
      noPaddingX = _ref5.noPaddingX,
      noPaddingY = _ref5.noPaddingY,
      paddingProps = _ref5.padding,
      softDisableProps = _ref5.softDisable,
      theme = _ref5.theme,
      width = _ref5.width;
  var background = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".gradientColor"), _colors.COLORS.PRIMARY_GRADIENT, {
    theme: theme
  });
  var defaultColor = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".color"), _colors.COLORS.PRIMARY, {
    theme: theme
  });
  var color = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".text"), _colors.COLORS.WHITE, {
    theme: theme
  });
  var hoverColor = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".hoverColor"), color, {
    theme: theme
  });
  var borderColor = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".borderColor"), _colors.COLORS.PRIMARY, {
    theme: theme
  });
  var focusColor = (0, _theme.getThemeProps)("palette.".concat(colorProps, ".focusColor"), _colors.COLORS.FOCUS, {
    theme: theme
  });
  var padding = paddingProps;
  var minWidth = noMinWidth ? 'auto' : (0, _theme.getThemeProps)('Button.styles.minWidth', '152px', {
    theme: theme
  });
  var minHeight = noMinHeight ? 'auto' : minHeightProps || '36px';
  var softDisable = softDisableProps ? {
    background: defaultColor,
    color: hoverColor,
    cursor: disabledCursor || 'not-allowed',
    opacity: disabledOpacity || 0.4
  } : {};

  if (noPaddingX && noPaddingY) {
    padding = '0';
  } else if (noPaddingX) {
    padding = "10px 0";
  } else if (noPaddingY) {
    padding = "0 25px";
  }

  if (active) {
    background = defaultColor;
    color = hoverColor;
  }

  return (0, _objectSpread2.default)({
    background: background,
    borderColor: borderColor,
    borderRadius: borderRadius || '4px',
    color: color,
    height: height,
    margin: margin,
    minHeight: minHeight,
    minWidth: minWidth,
    padding: padding,
    width: width,
    '&:hover': {
      background: defaultColor,
      color: hoverColor
    },
    '&:active': {
      background: defaultColor,
      color: hoverColor
    },
    '&:disabled': {
      background: background,
      color: color
    },
    '&:focus': {
      boxShadow: "0 0 0 3px ".concat(focusColor)
    }
  }, softDisable);
});

Button.propTypes = {
  /**
   * Set the state of the button to 'active'.
   */
  active: _propTypes.default.bool,

  /**
   * Set the `text-align` css property.
   */
  align: _propTypes.default.string,

  /**
   * Add a `1px` border to the button.
   */
  border: _propTypes.default.bool,

  /**
   * Set the `border-radius` css property.
   */
  borderRadius: _propTypes.default.string,

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
   * Set the disabled cursor for the `disabled` button state.
   */
  disabledCursor: _propTypes.default.string,

  /**
   * Set an opacity for the `disabled` button state.
   */
  disabledOpacity: _propTypes.default.number,

  /**
   * Set the `margin` css property.
   */
  margin: _propTypes.default.string,

  /**
   * Set the `min-height` css property.
   */
  minHeight: _propTypes.default.string,

  /**
   * Do not apply a minimum height to the button.
   */
  noMinHeight: _propTypes.default.bool,

  /**
   * Do not apply a minimum width to the button.
   */
  noMinWidth: _propTypes.default.bool,

  /**
   * Default onClick handler for the button
   */
  onClick: _propTypes.default.func,

  /**
   * Set the `padding` css property.
   */
  padding: _propTypes.default.string,

  /**
   * Softly `disable` the button without passing in the prop to the HTML DOM element.
   * This helps keep DOM synthetic events alive.
   */
  softDisable: _propTypes.default.bool,

  /**
   * Give the button a set width.
   */
  width: _propTypes.default.string
};
Button.defaultProps = {
  active: false,
  align: null,
  border: false,
  borderRadius: null,
  children: null,
  className: '',
  color: 'primary',
  disabledCursor: null,
  disabledOpacity: null,
  margin: '0',
  minHeight: null,
  noMinHeight: false,
  noMinWidth: false,
  onClick: function onClick() {},
  padding: '5px 15px',
  softDisable: null,
  width: null
};
var _default = Button;
exports.default = _default;