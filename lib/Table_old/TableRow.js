"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _compose = _interopRequireDefault(require("recompose/compose"));

var _theme = require("../../utils/theme");

var _bindings = require("../bindings");

var _withTableContext = _interopRequireDefault(require("./withTableContext"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n        display: table-row\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TableRowStyled = _styledComponents.default.tr.withConfig({
  displayName: "TableRow__TableRowStyled",
  componentId: "sc-157gb8k-0"
})(["color:inherit;display:block;outline:none;vertical-align:middle;", ";", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.media.up('sm')(_templateObject());
}, function (_ref2) {
  var orientation = _ref2.orientation,
      selected = _ref2.selected,
      theme = _ref2.theme,
      zebra = _ref2.zebra;
  var selectedStyles = selected ? (0, _theme.getThemeProps)('TableRow.styles.selected', null, {
    theme: theme
  }) : {};
  var zebraStyles = zebra ? (0, _theme.getThemeProps)('TableRow.styles.zebra', null, {
    theme: theme
  }) : {};
  return (0, _objectSpread2.default)({}, (0, _theme.getThemeProps)('TableRow.styles', null, {
    theme: theme
  }), zebraStyles, selectedStyles, {
    // If the orientation is in 'portrait' mode,
    // then force the display to be 'block'
    display: (0, _get2.default)(orientation, 'mode') === 'portrait' && 'block !important'
  });
});

TableRowStyled.propTypes = {
  /**
   * If the table row should stand out from the rest.
   */
  selected: _propTypes.default.bool,

  /**
   * If the table row should be zebra styled.
   */
  zebra: _propTypes.default.bool
};
TableRowStyled.defaultProps = {
  selected: false,
  zebra: false
};

var TableRow = function TableRow(props) {
  var setRef = props.setRef,
      onSelection = props.onSelection,
      handlers = props.handlers,
      data = props.data,
      rest = (0, _objectWithoutProperties2.default)(props, ["setRef", "onSelection", "handlers", "data"]);
  var updatedProps = (0, _objectSpread2.default)({}, rest, {
    ref: setRef,
    onSelect: onSelection && handlers[onSelection]
  });
  return _react.default.createElement(TableRowStyled, updatedProps);
};

TableRow.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The main data for the Table.
   */
  data: _propTypes.default.array,

  /**
   * Any external action handlers.
   */
  handlers: _propTypes.default.object,

  /**
   * Callback fired upon selecting a row
   */
  onSelection: _propTypes.default.string,

  /**
   * Set the ref attribute on the current table cell
   */
  setRef: _propTypes.default.object
} : {};
TableRow.defaultProps = {
  data: [],
  handlers: null,
  onSelection: null,
  setRef: null
};

var _default = (0, _compose.default)(_withTableContext.default, _bindings.withActionHandlers)(TableRow);

exports.default = _default;