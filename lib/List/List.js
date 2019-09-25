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

var _theme = require("../../utils/theme");

var _ListItem = require("../ListItem");

var ListStyled = _styledComponents.default.ul.withConfig({
  displayName: "List__ListStyled",
  componentId: "sc-18ddbdp-0"
})(["position:relative;", ";", "{border-left:", ";border-right:", ";&:first-child{border-top-left-radius:", ";border-top-right-radius:", ";border-top:", ";}&:last-child{border-bottom-left-radius:", ";border-bottom-right-radius:", ";border-bottom:", ";}}", " ", ";"], function (_ref) {
  var listStyle = _ref.listStyle,
      margin = _ref.margin,
      padding = _ref.padding;
  return (0, _styledComponents.css)(["list-style:", ";margin:", ";padding:", ";"], listStyle || 'none', margin || 0, padding || 0);
}, _ListItem.ListItemStyled, function (_ref2) {
  var flush = _ref2.flush;
  return flush && 'none';
}, function (_ref3) {
  var flush = _ref3.flush;
  return flush && 'none';
}, function (_ref4) {
  var flush = _ref4.flush;
  return flush && '0';
}, function (_ref5) {
  var flush = _ref5.flush;
  return flush && '0';
}, function (_ref6) {
  var flush = _ref6.flush;
  return flush && 'none';
}, function (_ref7) {
  var flush = _ref7.flush;
  return flush && '0';
}, function (_ref8) {
  var flush = _ref8.flush;
  return flush && '0';
}, function (_ref9) {
  var flush = _ref9.flush;
  return flush && 'none';
}, function (_ref10) {
  var backgroundColor = _ref10.backgroundColor,
      borderRadius = _ref10.borderRadius;
  return (0, _styledComponents.css)(["background-color:", ";border-radius:", ";"], (0, _theme.themeGet)("palette.".concat(backgroundColor, ".color"), backgroundColor), borderRadius);
}, (0, _theme.themeGet)('List.styles'));
/**
 * Lists are continuous, vertical indexes of text or images.
 *
 * @method      List
 * @constructor
 */


var List = _react.default.forwardRef(function (props, ref) {
  var as = props.as,
      children = props.children,
      ordered = props.ordered,
      rest = (0, _objectWithoutProperties2.default)(props, ["as", "children", "ordered"]);
  var listAs = ordered ? 'ol' : 'ul';
  return _react.default.createElement(ListStyled, Object.assign({
    as: listAs
  }, rest, {
    ref: ref
  }), children);
});

List.propTypes = process.env.NODE_ENV !== "production" ? {
  as: _propTypes.default.string,

  /**
   * Sets the `background-color` CSS property.
   */
  backgroundColor: _propTypes.default.string,

  /**
   * Sets the `border-radius` css property.
   */
  borderRadius: _propTypes.default.string,
  borderStyle: _propTypes.default.string,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * If `true`, a 1px border is added to the bottom of the list-item.
   */
  divider: _propTypes.default.bool,

  /**
   * Sets the `list-style` css property.
   */
  listStyle: _propTypes.default.string,

  /**
   * Sets the `margin` css property.
   */
  margin: _propTypes.default.string,

  /**
   * Should we render an ordered list `ol` or default to `ul`?
   */
  ordered: _propTypes.default.bool,

  /**
   * Sets the `padding` css property.
   */
  padding: _propTypes.default.string
} : {};
List.defaultProps = {
  as: null,
  backgroundColor: 'transparent',
  borderRadius: null,
  borderStyle: 'initial',
  children: null,
  divider: false,
  listStyle: null,
  margin: null,
  ordered: false,
  padding: null
};
List.displayName = 'List';
var _default = List;
exports.default = _default;