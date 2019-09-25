"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Typography = _interopRequireDefault(require("../Typography"));

var CardHeaderStyled = _styledComponents.default.div.withConfig({
  displayName: "CardHeader__CardHeaderStyled",
  componentId: "xgv5zi-0"
})([""]);
/**
 *  Card header section with icons and actions.
 * @method          CardHeader
 * @param           {Object}            props
 * @constructor
 */


function CardHeader(props) {
  var actionComponent = props.actionComponent,
      headerIcon = props.headerIcon,
      subTitle = props.subTitle,
      title = props.title,
      rest = (0, _objectWithoutProperties2.default)(props, ["actionComponent", "headerIcon", "subTitle", "title"]);
  return _react.default.createElement(CardHeaderStyled, rest, headerIcon, _react.default.createElement(_Typography.default, {
    type: "display1"
  }, title), _react.default.createElement(_Typography.default, {
    type: "display2"
  }, subTitle), actionComponent);
}

CardHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   *  Custom component for the header section.
   */
  actionComponent: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   *  Icon on the header section.
   */
  headerIcon: _propTypes.default.node,

  /**
   * Sub title or a small description below title.
   */
  subTitle: _propTypes.default.string,

  /**
   * Header title.
   */
  title: _propTypes.default.string
} : {};
CardHeader.defaultProps = {
  actionComponent: null,
  className: '',
  headerIcon: null,
  subTitle: '',
  title: ''
};
var _default = CardHeader;
exports.default = _default;