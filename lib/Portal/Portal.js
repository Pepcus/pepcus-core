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

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _component = require("../../utils/component");

/* eslint-disable react/no-find-dom-node */
// eslint-disable-next-line valid-jsdoc

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * @see     {@link https://reactjs.org/docs/portals.html}
 * @class
 * @extends Component
 */
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
    _this.container = null;

    _this.setContainerAndRender = function (props) {
      var container = props.container,
          disable = props.disable,
          onMount = props.onMount; // Set the container

      _this.setContainer(container); // Force the render when needed.
      // This skips the `shouldComponentUpdate` method call.


      if (!disable) {
        _this.forceUpdate(onMount);
      }
    };

    _this.setContainer = function (container) {
      var disable = _this.props.disable; // If the Portal is `disable`d, then set the current DOM node's parent as the container.

      if (disable) {
        _this.container = (0, _reactDom.findDOMNode)((0, _assertThisInitialized2.default)(_this)).parentElement;
        return;
      } // Otherwise, find the current passed in `container`'s parent and set it to the `container`.


      _this.container = (0, _component.getContainer)(container, (0, _component.getDocumentOwner)((0, _assertThisInitialized2.default)(_this)).body);
    };

    return _this;
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Set the container and force render if needed.
      this.setContainerAndRender(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          container = _this$props.container,
          disable = _this$props.disable;

      if (prevProps.container !== container || prevProps.disable !== disable) {
        // Set the container and force render if needed.
        this.setContainerAndRender(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Remove the current container
      this.container = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          disable = _this$props2.disable; // If the Portal is disabled, render just the children.

      if (disable) {
        return children;
      } // Create the portal for the current children, and the chosen container.


      return this.container ? (0, _reactDom.createPortal)(children, this.container) : null;
    }
  }]);
  return Portal;
}(_react.Component);

Portal.defaultProps = {
  children: null,
  container: null,
  disable: false,
  onMount: function onMount() {}
};
Portal.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The children to be rendered in the passed in `container`.
   */
  children: _propTypes.default.node,

  /**
   * The `container` will have the children appended to itself during mount.
   * Default value is the `document.body`.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * Disable the React portal behavior.
   * Only the children are rendered.
   */
  disable: _propTypes.default.bool,

  /**
   * Callback fired upon the children being rendered in the `container`.
   */
  onMount: _propTypes.default.func
} : {};
var _default = Portal;
exports.default = _default;