"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var isPortalAvailable = _reactDom.default && typeof _reactDom.default.createPortal === 'function';
var docIsBrowser = typeof window !== 'undefined';

var Portal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Portal, _Component);

  function Portal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Portal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.renderLayer = function () {
      var children = _this.props.children;

      if (!isPortalAvailable) {
        _reactDom.default.unstable_renderSubtreeIntoContainer((0, _assertThisInitialized2.default)(_this), children, _this.container);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var container = this.props.container;

      if (docIsBrowser) {
        if (!container) {
          this.container = document.createElement('div');
          document.body.appendChild(this.container);
        } else {
          this.container = container;
        }

        this.renderLayer();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      this.renderLayer();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var container = this.props.container;

      if (!isPortalAvailable) {
        _reactDom.default.unmountComponentAtNode(this.container);
      }

      if (!container) {
        document.body.removeChild(this.container);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;

      if (isPortalAvailable) {
        return _reactDom.default.createPortal(children, this.container);
      }

      return null;
    }
  }]);
  return Portal;
}(_react.Component);

Portal.defaultProps = {
  children: null,
  container: null
};
Portal.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node,
  container: _propTypes.default.object
} : {};
var _default = Portal;
exports.default = _default;