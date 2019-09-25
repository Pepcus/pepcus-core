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

var _Box = _interopRequireDefault(require("../Box"));

var ImageWrapperStyled = _styledComponents.default.div.withConfig({
  displayName: "CardMedia__ImageWrapperStyled",
  componentId: "sc-1jyx2zi-0"
})(["position:relative;left:2px;width:64px;height:68px;overflow:hidden;"]);
/**
 * Renders media to card.
 *
 * @method          CardMedia
 * @param           {Object}        props
 * @constructor
 */


function CardMedia(props) {
  var alt = props.alt,
      children = props.children,
      src = props.src,
      imageStyle = props.imageStyle,
      rest = (0, _objectWithoutProperties2.default)(props, ["alt", "children", "src", "imageStyle"]);
  return _react.default.createElement(_Box.default, Object.assign({
    padding: "2px",
    borderWidth: "0"
  }, rest), _react.default.createElement(ImageWrapperStyled, null, _react.default.createElement("img", {
    style: imageStyle,
    src: src,
    alt: alt
  })));
}

CardMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   *  Alternate text.
   */
  alt: _propTypes.default.string.isRequired,

  /**
   *  Custom media.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Custom styling for <img/> element
   */
  imageStyle: _propTypes.default.object,

  /**
   *  Image source for <img/> element.
   */
  src: _propTypes.default.string.isRequired
} : {};
CardMedia.defaultProps = {
  children: null,
  className: '',
  imageStyle: {}
};
var _default = CardMedia;
exports.default = _default;