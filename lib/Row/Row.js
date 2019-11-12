"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _grid = require("../../constants/grid");

var _styled = require("../../utils/styled");

var _proptypes = require("../../utils/proptypes");

var _css = require("../../utils/css");

/* eslint-disable react/prop-types */
var RowStyled = _react.default.forwardRef(function (props, ref) {
  var tagname = props.tagname;
  return _react.default.createElement(tagname, (0, _objectSpread2.default)({}, (0, _styled.filterProps)(props), {
    ref: ref
  }));
});

RowStyled.displayName = 'RowStyled';
/* eslint-enable */

var Row = (0, _styledComponents.default)(RowStyled).withConfig({
  displayName: "Row",
  componentId: "sc-8yqi8n-0"
})(["box-sizing:border-box;", ";"], function (_ref) {
  var alignContent = _ref.alignContent,
      alignItems = _ref.alignItems,
      direction = _ref.direction,
      display = _ref.display,
      flex = _ref.flex,
      gutter = _ref.gutter,
      height = _ref.height,
      justify = _ref.justify,
      margin = _ref.margin,
      padding = _ref.padding,
      theme = _ref.theme,
      width = _ref.width,
      wrap = _ref.wrap;
  return (0, _styledComponents.css)(["", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], (0, _styled.renderStyle)('display', display, theme, (0, _css.verifyCSSValueCurry)(_grid.DISPLAY)), (0, _styled.renderStyle)('flex', flex, theme), (0, _styled.renderStyle)('align-content', alignContent, theme, (0, _css.verifyCSSValueCurry)(_grid.ALIGN_CONTENT)), (0, _styled.renderStyle)('align-items', alignItems, theme, (0, _css.verifyCSSValueCurry)(_grid.ALIGN_ITEMS)), (0, _styled.renderStyle)('flex-direction', direction, theme, (0, _css.verifyCSSValueCurry)(_grid.FLEX_DIRECTION)), (0, _styled.renderStyle)('flex-wrap', wrap, theme, (0, _css.verifyCSSValueCurry)(_grid.FLEX_WRAP)), (0, _styled.renderStyle)('gutter', gutter, theme, true, _css.renderRowGutter), (0, _styled.renderStyle)('height', height, theme), (0, _styled.renderStyle)('justify-content', justify, theme, (0, _css.verifyCSSValueCurry)(_grid.JUSTIFY_CONTENT)), (0, _styled.renderStyle)('width', width, theme), (0, _styled.renderStyle)('padding', padding, theme), (0, _styled.renderStyle)('margin', margin, theme));
});
Row.propTypes = {
  /**
   * Defines the 'align-content' style property.
   */
  alignContent: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOf(_grid.ALIGN_CONTENT)),

  /**
   * The content of the Row.
   */
  children: _propTypes.default.node,

  /**
   * Defines the 'align-items' style property.
   */
  alignItems: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOf(_grid.ALIGN_ITEMS)),

  /**
   * Defines the 'flex-direction' style property.
   */
  direction: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOf(_grid.FLEX_DIRECTION)),

  /**
   * Defines the 'display' style property.
   */
  display: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOf(_grid.DISPLAY)),

  /**
   * Defines the 'flex' style property.
   */
  flex: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Should the `theme.grid.gutterWidth` be taken into account?
   */
  gutter: _propTypes.default.bool,

  /**
   * Defines the 'height' style property.
   */
  height: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Defines the 'justify-content' style property.
   */
  justify: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOf(_grid.JUSTIFY_CONTENT)),

  /**
   * Defines the 'margin' style property.
   */
  margin: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Defines the 'padding' style property.
   */
  padding: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * The html tag or React component to use for the root node.
   */
  tagname: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Defines the 'width' style property.
   */
  width: (0, _proptypes.responsiveProptypes)(_propTypes.default.string),

  /**
   * Defines the 'flex-wrap' style property.
   */
  wrap: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOf(_grid.FLEX_WRAP))
};
Row.defaultProps = {
  alignContent: null,
  alignItems: null,
  children: null,
  direction: 'row',
  display: 'flex',
  flex: '0 1 auto',
  gutter: true,
  height: null,
  justify: null,
  margin: null,
  padding: null,
  tagname: 'div',
  width: 'auto',
  wrap: 'wrap'
};
var _default = Row;
exports.default = _default;