"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styled = require("../../utils/styled");

var _proptypes = require("../../utils/proptypes");

var _theme = require("../../utils/theme");

var FaIconStyled = (0, _styledComponents.default)(_reactFontawesome.FontAwesomeIcon).withConfig({
  displayName: "FaIcon__FaIconStyled",
  componentId: "sc-1ox3biz-0"
})(["", ";", ";"], (0, _theme.themeGet)('FaIcon.styles'), function (_ref) {
  var color = _ref.color,
      height = _ref.height,
      margin = _ref.margin,
      opacity = _ref.opacity,
      padding = _ref.padding,
      theme = _ref.theme,
      width = _ref.width;
  return (0, _styledComponents.css)(["color:", ";", ";", ";", ";", ";", ";"], (0, _theme.themeGet)("palette.".concat(color, ".color"), color || 'inherit'), (0, _styled.renderStyle)('height', height, theme, null, function (val, name) {
    return "".concat(name, ": ").concat(val, " !important;");
  }), (0, _styled.renderStyle)('margin', margin, theme), (0, _styled.renderStyle)('opacity', opacity, theme), (0, _styled.renderStyle)('padding', padding, theme), (0, _styled.renderStyle)('width', width, theme, null, function (val, name) {
    return "".concat(name, ": ").concat(val, " !important;");
  }));
});
/**
 * Build a react-font-awesome icon!
 *
 * @method      FaIcon
 * @param       {Object} props The component props
 * @constructor
 */

function FaIcon(props) {
  // Render the font-awesome icon.
  return _react.default.createElement(FaIconStyled, props);
}

FaIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Apply themed styling to FaIcon.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * Vertically align icons together by including support for a `fixed-width`.
   * @see {@link https://fontawesome.com/how-to-use/on-the-web/styling/fixed-width-icons}
   */
  fixedWidth: _propTypes.default.bool,

  /**
   * Defines the 'height' style property.
   */
  height: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * The name of the font-awesome icon, `trash-alt`. (string)
   * A React Object, that renders out the desired icon, `{faTrashAlt}`. (object)
   * An array of strings, where the first element is a `prefix`,
   * and second element is the icon name `{[ 'fab', 'apple' ]}`. (array)
   * @see {@link https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use}
   */
  icon: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array, _propTypes.default.string]),

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
   * Defines the 'width' style property.
   */
  width: (0, _proptypes.responsiveProptypes)(_propTypes.default.string)
} : {};
FaIcon.defaultProps = {
  color: null,
  fixedWidth: true,
  height: null,
  icon: null,
  margin: null,
  opacity: null,
  padding: null,
  width: null
};
var _default = FaIcon;
exports.default = _default;