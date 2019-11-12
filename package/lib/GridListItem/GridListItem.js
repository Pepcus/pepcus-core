"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

// const GridListItemContainer = styled.div`
//     display: block;
//     height: 100%;
//     overflow: auto;
//     position: relative;
//     /**
//      * Add all of the remaining styles from theme
//      */
//     ${getThemeProps('GridListItemContainer.styles')};
// `;
var GridListItemStyled = _styledComponents.default.li.withConfig({
  displayName: "GridListItem__GridListItemStyled",
  componentId: "sc-1m2x2g7-0"
})(["box-sizing:border-box;display:block;flex-shrink:0;margin:0;padding:0;position:relative;", ";"], (0, _theme.getThemeProps)('GridListItem.styles'));

function GridListItem(props) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["children"]);
  return _react.default.createElement(GridListItemStyled, rest, children);
}

GridListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The root node to be rendered into the `GridListItem`
   */
  children: _propTypes.default.node.isRequired
} : {};
var _default = GridListItem;
exports.default = _default;