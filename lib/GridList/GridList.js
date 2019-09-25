"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var GridListStyled = _styledComponents.default.ul.withConfig({
  displayName: "GridList__GridListStyled",
  componentId: "sc-1rmpu4v-0"
})(["-webkit-overflow-scrolling:touch;display:flex;flex-wrap:wrap;list-style:none;margin:0;margin-left:", ";margin-right:", ";padding:0;", ";"], function (_ref) {
  var spacing = _ref.spacing;
  return spacing && "-".concat(spacing / 2, "px");
}, function (_ref2) {
  var spacing = _ref2.spacing;
  return spacing && "-".concat(spacing / 2, "px");
}, (0, _theme.getThemeProps)('GridList.styles'));

function GridList(props) {
  var cellHeight = props.cellHeight,
      children = props.children,
      cols = props.cols,
      spacing = props.spacing;
  return _react.default.createElement(GridListStyled, {
    cols: cols,
    spacing: spacing
  }, _react.default.Children.map(children, function (child) {
    // The child must be a valid element and not a Fragment.
    // With Fragments we don't get a concrete container with sub-children,
    // rather we just get an array of children.
    if (!_react.default.isValidElement(child) || child.type === _react.default.Fragment) {
      return null;
    } // Determine the columns and rows for the child


    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1; // Render each child with updated style

    return _react.default.cloneElement(child, {
      style: (0, _objectSpread2.default)({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
}

GridList.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Set a pre-determined cell-height for a single `GridList` item.
   * Set to `auto` to have the inner children determine their own height.
   */
  cellHeight: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['auto'])]),

  /**
   * The items of the `GridList`.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Number of grid-columns.
   */
  cols: _propTypes.default.number,

  /**
   * The spacing to be added between the `GridList` items.
   */
  spacing: _propTypes.default.number
} : {};
GridList.defaultProps = {
  cellHeight: 200,
  cols: 2,
  spacing: 10
};
var _default = GridList;
exports.default = _default;