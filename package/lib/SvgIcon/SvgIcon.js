"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("../../utils/theme");

var _css = require("../../utils/css");

var _styled = require("../../utils/styled");

var _proptypes = require("../../utils/proptypes");

var SvgIcon = _styledComponents.default.svg.attrs(function (props) {
  return {
    'aria-hidden': props.titleAccess ? 'false' : 'true',
    focusable: 'false'
  };
}).withConfig({
  displayName: "SvgIcon",
  componentId: "g6yw5a-0"
})(["", ";", ";"], (0, _theme.themeGet)('SvgIcon.styles'), function (_ref) {
  var color = _ref.color,
      currentColor = _ref.currentColor,
      height = _ref.height,
      margin = _ref.margin,
      opacity = _ref.opacity,
      padding = _ref.padding,
      theme = _ref.theme,
      width = _ref.width;
  return (0, _styledComponents.css)(["display:inline-block;fill:currentColor;flex-shrink:0;transition:all 1s ease-in-out;user-select:none;", ";", ";", ";", ";", ";", ";"], (0, _styled.renderStyle)('color', color || 'inherit', theme, false, (0, _css.renderPaletteColor)('color', 'color')), (0, _styled.renderStyle)('height', height, theme), (0, _styled.renderStyle)('margin', margin, theme), (0, _styled.renderStyle)('opacity', opacity, theme), (0, _styled.renderStyle)('padding', padding, theme), (0, _styled.renderStyle)('width', width, theme));
});

SvgIcon.propTypes = {
  /**
   * Children passed into the SvgIcon.
   */
  children: _propTypes.default.node,

  /**
   * Set the color of the SvgIcon.
   */
  color: _propTypes.default.string,

  /**
   * Defines the 'height' style property.
   */
  height: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Defines the 'margin' style property.
   */
  margin: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Defines the 'opacity' style property.
   */
  opacity: (0, _proptypes.responsiveProptypes)(_propTypes.default.number),

  /**
   * Defines the 'padding' style property.
   */
  padding: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: _propTypes.default.string,

  /**
   * The viewBox attribute defines the position and dimension,
   * in user space, of an SVG viewport.
   * The value of the viewBox attribute is a list of four numbers:
   * min-x, min-y, width and height, separated by whitespace and/or a comma,
   * which specify a rectangle in user space which is mapped to the bounds
   * of the viewport established for the associated element.
   * https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox
   */
  viewBox: _propTypes.default.string,

  /**
   * Defines the 'width' style property.
   */
  width: (0, _proptypes.responsiveProptypes)(_propTypes.default.string)
};
SvgIcon.defaultProps = {
  children: null,
  color: 'inherit',
  height: '1rem',
  margin: null,
  opacity: null,
  padding: null,
  titleAccess: null,
  viewBox: '0 0 24 24',
  width: '1rem'
};
var _default = SvgIcon;
exports.default = _default;