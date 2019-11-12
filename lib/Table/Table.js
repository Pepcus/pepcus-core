"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _TableStyled = _interopRequireDefault(require("./TableStyled"));

var _TableWrapper = _interopRequireDefault(require("./TableWrapper"));

/**
 * A simple `table` component.
 *
 * @constructor
 */
var Table = _react.default.forwardRef(function (props, ref) {
  var boxProps = props.boxProps,
      cols = props.cols,
      rest = (0, _objectWithoutProperties2.default)(props, ["boxProps", "cols"]);
  return _react.default.createElement(_TableWrapper.default, Object.assign({
    elevation: 5
  }, boxProps, {
    cols: cols
  }), _react.default.createElement(_TableStyled.default, Object.assign({}, rest, {
    cols: cols,
    ref: ref
  })));
});

Table.displayName = 'Table';
Table.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The props applied to the inner `TableWrapper` component.
   */
  boxProps: _propTypes.default.object,

  /**
   * The amount of columns that are being rendered.
   */
  cols: _propTypes.default.number
} : {};
Table.defaultProps = {
  boxProps: null,
  cols: 12
};
var _default = Table;
exports.default = _default;