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

var _Box = _interopRequireDefault(require("../Box"));

var _Row = _interopRequireDefault(require("../Row"));

var BadgeStyled = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "Badge__BadgeStyled",
  componentId: "n53nq0-0"
})(["min-width:32px;text-align:center;"]);

var Badge = _react.default.forwardRef(function (props, ref) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["children"]);
  return _react.default.createElement(BadgeStyled, Object.assign({
    borderRadius: "15px",
    borderWidth: "0",
    height: "auto",
    margin: "0",
    padding: "2px 5px"
  }, rest, {
    ref: ref
  }), _react.default.createElement(_Row.default, {
    alignItems: "center",
    justify: "center",
    gutter: false
  }, children));
});

Badge.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * The width for the Badge.
   */
  width: _propTypes.default.string
} : {};
Badge.defaultProps = {
  children: null,
  width: 'auto'
};
Badge.displayName = 'Badge';
var _default = Badge;
exports.default = _default;