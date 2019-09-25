"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = require("react");

var _grid = require("../../constants/grid");

var _styled = require("../../utils/styled");

var _proptypes = require("../../utils/proptypes");

var _css = require("../../utils/css");

/* eslint-disable react/prop-types */
var ColStyled = (0, _react.forwardRef)(function (props, ref) {
  var tagname = props.tagname;
  return (0, _react.createElement)(tagname, (0, _objectSpread2.default)({}, (0, _styled.filterProps)(props), {
    ref: ref
  }));
});
ColStyled.displayName = 'ColStyled';
/* eslint-enable */

var Col = (0, _styledComponents.default)(ColStyled).withConfig({
  displayName: "Col",
  componentId: "sc-1ncoagy-0"
})(["box-sizing:border-box;flex:0 0 auto;", ";"], function (_ref) {
  var alignSelf = _ref.alignSelf,
      display = _ref.display,
      flex = _ref.flex,
      gutter = _ref.gutter,
      leftOffset = _ref.leftOffset,
      margin = _ref.margin,
      order = _ref.order,
      padding = _ref.padding,
      rightOffset = _ref.rightOffset,
      size = _ref.size,
      theme = _ref.theme;
  return (0, _styledComponents.css)(["", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], (0, _styled.renderStyle)('display', display, theme), (0, _styled.renderStyle)('size', size, theme, _css.verifyCSSColSize, _css.renderCSSColSize), (0, _styled.renderStyle)('gutter', gutter, theme, true, _css.renderColumnGutter), (0, _styled.renderStyle)('align-self', alignSelf, theme, (0, _css.verifyCSSValueCurry)(_grid.ALIGN_SELF)), (0, _styled.renderStyle)('flex', flex, theme), (0, _styled.renderStyle)('order', order, theme, _css.verifyCSSFlexOrder), (0, _styled.renderStyle)('leftOffset', leftOffset, theme, true, _css.renderLeftOffset), (0, _styled.renderStyle)('rightOffset', rightOffset, theme, true, _css.renderRightOffset), (0, _styled.renderStyle)('padding', padding, theme), (0, _styled.renderStyle)('margin', margin, theme));
});
Col.propTypes = {
  /**
   * Defines the 'align-content' style property.
   */
  alignSelf: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOf(_grid.ALIGN_SELF)),

  /**
   * The content of the Col.
   */
  children: _propTypes.default.node,

  /**
   * Defines the 'flex' style property.
   */
  flex: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.string])),

  /**
   * Should the `theme.grid.gutterWidth` be taken into account?
   */
  gutter: _propTypes.default.bool,

  /**
   * Add an offset `margin` to the left of the Col.
   */
  leftOffset: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number])),

  /**
   * Defines the 'margin' style property.
   */
  margin: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Defines the 'flex-order' style property.
   */
  order: (0, _proptypes.responsiveProptypes)(_propTypes.default.number),

  /**
   * Defines the 'padding' style property.
   */
  padding: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Add an offset `margin` to the right of the Col.
   */
  rightOffset: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.number])),

  /**
   * Specifies the size of the `column`.
   * Can be set to `auto` for an auto-sizing.
   * Can be set to `*` for sizing the `column` as normal. (default)
   * Can be set to any number from `1 - n` (n being the `theme.grid.column` size).
   * Can be set to an object for responsive styling. `{{ sm: 6, lg: 12 }}`
   */
  size: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.oneOf(['auto', '*', false]), _propTypes.default.number, _propTypes.default.string])),

  /**
   * The html tag or React component to use for the root node.
   */
  tagname: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object])
};
Col.defaultProps = {
  alignSelf: null,
  children: null,
  flex: null,
  gutter: true,
  leftOffset: null,
  margin: null,
  order: null,
  padding: null,
  rightOffset: null,
  size: '*',
  tagname: 'div'
};
var _default = Col;
exports.default = _default;