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

var _rgba = _interopRequireDefault(require("polished/lib/color/rgba"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("../../utils/theme");

var _object = require("../../utils/object");

// import Row from 'lib/Row';
var TableRowStyled = _styledComponents.default.tr.withConfig({
  displayName: "TableRow__TableRowStyled",
  componentId: "cun23i-0"
})(["color:inherit;outline:none;vertical-align:middle;", ";", ";"], (0, _theme.themeGet)('TableRow.styles'), function (_ref) {
  var selected = _ref.selected,
      selectedColorProps = _ref.selectedColor,
      selectedOpacity = _ref.selectedOpacity,
      theme = _ref.theme,
      zebra = _ref.zebra,
      zebraColorProps = _ref.zebraColor,
      zebraOpacity = _ref.zebraOpacity;
  var selectedCss = '';
  var zebraCss = ''; // Determine the selected row color.

  var selectedColor = (0, _theme.themeGet)("palette.".concat(selectedColorProps, ".color"), '#FFF')({
    theme: theme
  }); // Determine the zebra-stripe color.

  var zebraColor = (0, _theme.themeGet)("palette.".concat(zebraColorProps, ".color"), '#FFF')({
    theme: theme
  }); // Update the `selectedCss`

  if (selected) {
    selectedCss = (0, _styledComponents.css)(["background-color:", ";"], (0, _rgba.default)(selectedColor, selectedOpacity));
  } // Update the `zebraCss`


  if (zebra) {
    zebraCss = (0, _styledComponents.css)(["background-color:", ";"], (0, _rgba.default)(zebraColor, zebraOpacity));
  } // Return the concatenated zebra-style with selected-row-style.


  return (0, _styledComponents.css)(["", ";", ";"], zebraCss, selectedCss);
});
/**
 * The `row` component for the Table.
 *
 * @constructor
 */


var TableRow = _react.default.forwardRef(function (props, ref) {
  var selectedProps = props.selected,
      handlers = props.handlers,
      row = props.row,
      rest = (0, _objectWithoutProperties2.default)(props, ["selected", "handlers", "row"]); // Determine if the table-row should be selected.

  var selected = typeof selectedProps === 'boolean' ? selectedProps : (0, _object.checkObjectKeys)(row, selectedProps, handlers); // Render the table-row

  return _react.default.createElement(TableRowStyled, Object.assign({}, rest, {
    selected: selected,
    ref: ref
  }));
});

TableRow.displayName = 'TableRow';
TableRow.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Should the `theme.grid.gutterWidth` be taken into account?
   */
  gutter: _propTypes.default.bool,

  /**
   * A map of action handlers used by rendered components.
   */
  handlers: _propTypes.default.object,

  /**
   * The data for the current row.
   */
  row: _propTypes.default.object,

  /**
   * Determine if the table row should stand out from the rest. (be selected)
   */
  selected: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string, _propTypes.default.object]),

  /**
   * Apply themed selected color to Row.
   */
  selectedColor: _propTypes.default.string,

  /**
   * Apply an opacity value to the theme selected color.
   */
  selectedOpacity: _propTypes.default.number,

  /**
   * If the table row should be zebra styled.
   */
  zebra: _propTypes.default.bool,

  /**
   * Apply themed zebra color to Row.
   */
  zebraColor: _propTypes.default.string,

  /**
   * Apply an opacity value to the theme zebra color.
   */
  zebraOpacity: _propTypes.default.number
} : {};
TableRow.defaultProps = {
  gutter: false,
  handlers: null,
  row: null,
  selected: false,
  selectedColor: 'warning',
  selectedOpacity: 0.05,
  zebra: false,
  zebraColor: 'muted',
  zebraOpacity: 0.1
};
var _default = TableRow;
exports.default = _default;