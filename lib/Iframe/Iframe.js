"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("../../utils/theme");

var LoadingText = _styledComponents.default.div.withConfig({
  displayName: "Iframe__LoadingText",
  componentId: "m40dpk-0"
})(["padding:20px;font-weight:bold;"]);

var IframeStyled = _styledComponents.default.iframe.withConfig({
  displayName: "Iframe__IframeStyled",
  componentId: "m40dpk-1"
})(["", ";", ";"], function (_ref) {
  var height = _ref.height,
      margin = _ref.margin,
      padding = _ref.padding,
      position = _ref.position,
      width = _ref.width;
  return (0, _styledComponents.css)(["border:none;height:", ";margin:", ";padding:", ";position:", ";width:", ";"], height || '100%', margin || 0, padding || 0, position, width || '100%');
}, (0, _theme.themeGet)('Iframe.styles'));
/**
 * A simple iframe component.
 *
 * @method      Iframe
 * @param       {Object} props The props for the component
 * @constructor
 */


var Iframe =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Iframe, _React$Component);

  function Iframe() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Iframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Iframe)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      isLoading: true
    };

    _this.renderLoadingMessage = function () {
      var isLoading = _this.state.isLoading;
      return isLoading ? _react.default.createElement(LoadingText, {
        className: "text-center"
      }, "Loading...") : null;
    };

    return _this;
  }

  (0, _createClass2.default)(Iframe, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", null, this.renderLoadingMessage(), _react.default.createElement(IframeStyled, Object.assign({}, this.props, {
        onLoad: function onLoad() {
          _this2.setState(function () {
            return {
              isLoading: false
            };
          });
        }
      })));
    }
  }]);
  return Iframe;
}(_react.default.Component);

Iframe.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Set the `height` css property.
   */
  height: _propTypes.default.string,

  /**
   * Set the `margin` css property.
   */
  margin: _propTypes.default.string,

  /**
   * Set the `padding` css property.
   */
  padding: _propTypes.default.string,

  /**
   * Set the `position` css property.
   */
  position: _propTypes.default.string,

  /**
   * The URL of the page to embed.
   */
  src: _propTypes.default.string.isRequired,

  /**
   * The title of the iframe.
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Set the `width` css property.
   */
  width: _propTypes.default.string
} : {};
Iframe.defaultProps = {
  height: null,
  margin: null,
  padding: null,
  position: null,
  width: null
};
var _default = Iframe;
exports.default = _default;