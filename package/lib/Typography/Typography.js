"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styled = require("../../utils/styled");

var _theme = require("../../utils/theme");

var _css = require("../../utils/css");

var _proptypes = require("../../utils/proptypes");

var TypographyCSS = (0, _styledComponents.css)(["", ";", ";", ";"], (0, _theme.getThemeProps)('typography.root'), function (_ref) {
  var noWrap = _ref.noWrap,
      noWrapWidth = _ref.noWrapWidth;
  return noWrap && (0, _styledComponents.css)(["max-width:", ";overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:break-all;"], noWrapWidth || '98%');
}, function (_ref2) {
  var align = _ref2.align,
      bgColor = _ref2.backgroundColor,
      color = _ref2.color,
      fontFamily = _ref2.fontFamily,
      fontSize = _ref2.fontSize,
      fontStyle = _ref2.fontStyle,
      fontWeight = _ref2.fontWeight,
      fullWidth = _ref2.fullWidth,
      gutterBottom = _ref2.gutterBottom,
      gutterLeft = _ref2.gutterLeft,
      gutterRight = _ref2.gutterRight,
      gutterTop = _ref2.gutterTop,
      lineHeight = _ref2.lineHeight,
      padding = _ref2.padding,
      theme = _ref2.theme,
      type = _ref2.type;
  return (0, _styledComponents.css)(["", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], (0, _styled.renderStyle)('background-color', bgColor, theme, false, (0, _css.renderPaletteColor)('background-color', 'color')), (0, _styled.renderStyle)('display', fullWidth ? 'block' : '', theme), (0, _styled.renderStyle)('color', color, theme, false, (0, _css.renderPaletteColor)('color', 'color')), (0, _styled.renderStyle)('text-align', align), (0, _styled.renderStyle)('margin-bottom', gutterBottom, theme), (0, _styled.renderStyle)('margin-left', gutterLeft, theme), (0, _styled.renderStyle)('margin-right', gutterRight, theme), (0, _styled.renderStyle)('margin-top', gutterTop, theme), (0, _styled.renderStyle)('padding', padding), (0, _styled.renderStyle)('type', type, theme, false, _css.renderTypographyType), (0, _styled.renderStyle)('font-family', fontFamily), (0, _styled.renderStyle)('font-size', fontSize), (0, _styled.renderStyle)('font-style', fontStyle), (0, _styled.renderStyle)('font-weight', fontWeight), (0, _styled.renderStyle)('line-height', lineHeight));
});

var Typography = function Typography(props) {
  var theme = props.theme,
      type = props.type; // Find the mapping for the given type style.

  var headlineMapping = (0, _theme.getThemeProps)('typography.mapping', null, {
    theme: theme
  }); // Determine the tagname to use for the HTML element.

  var tagName = headlineMapping[type] || 'span'; // Build the component with the given tagname.

  var Type = (0, _styledComponents.default)(tagName).withConfig({
    displayName: "Typography__Type",
    componentId: "pt5rfo-0"
  })(["", ";"], TypographyCSS); // Return the newly created component, with all the props.

  return _react.default.createElement(Type, Object.assign({}, props, {
    tagName: tagName
  }));
};

Typography.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The text-align property of the component.
   */
  align: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOf(['left', 'center', 'right', 'justify'])),

  /**
   * Set the background-color of the typography component.
   *
   * Color(s) can be set in `theme.palette`.
   */
  backgroundColor: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Set the color of the typography component.
   *
   * Color(s) can be set in `theme.palette`.
   */
  color: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Sets the `font-family` css property.
   */
  fontFamily: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Sets the `font-size` css property.
   */
  fontSize: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Sets the `font-style` css property.
   */
  fontStyle: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Sets the `font-weight` css property.
   */
  fontWeight: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Sets the `display` CSS property to 'block'.
   * Helpful if wanting a full-width Typography component.
   */
  fullWidth: (0, _proptypes.responsiveProptypes)(_propTypes.default.bool),

  /**
   * Add a gutter to the bottom of the Typography.
   */
  gutterBottom: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Add a gutter to the left of the Typography.
   */
  gutterLeft: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Add a gutter to the right of the Typography.
   */
  gutterRight: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Add a gutter to the top of the Typography.
   */
  gutterTop: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Sets the `line-height` css property.
   */
  lineHeight: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Set to `true` to enable truncation with an ellipsis.
   */
  noWrap: _propTypes.default.bool,

  /**
   * Set the `max-width` for the truncation.
   */
  noWrapWidth: _propTypes.default.string,

  /**
   * Sets the `padding` css property.
   */
  padding: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),
  theme: _propTypes.default.object,

  /**
   * Apply the themed typography styles.
   */
  type: (0, _proptypes.responsiveProptypes)(_propTypes.default.string)
} : {};
Typography.defaultProps = {
  align: null,
  backgroundColor: null,
  color: null,
  fontFamily: null,
  fontSize: null,
  fontStyle: null,
  fontWeight: null,
  fullWidth: false,
  gutterBottom: '8px',
  gutterLeft: null,
  gutterRight: null,
  gutterTop: null,
  lineHeight: null,
  noWrap: false,
  noWrapWidth: null,
  padding: null,
  theme: null,
  type: 'body'
};
var _default = Typography;
exports.default = _default;