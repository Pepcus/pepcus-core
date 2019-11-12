"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = require("react");

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

/* eslint-disable react/no-find-dom-node */
var RootRef =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RootRef, _Component);

  function RootRef() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, RootRef);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(RootRef)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.setRootRef = function (rootRef, ref) {
      if (typeof rootRef === 'function') {
        rootRef(ref);
      } else if (rootRef && (0, _typeof2.default)(rootRef) === 'object') {
        rootRef.current = ref;
      }
    };

    return _this;
  }

  (0, _createClass2.default)(RootRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rootRef = this.props.rootRef;
      this.ref = (0, _reactDom.findDOMNode)(this);
      this.setRootRef(rootRef, this.ref);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var rootRef = this.props.rootRef;
      var ref = (0, _reactDom.findDOMNode)(this);

      if (prevProps.rootRef !== rootRef || this.ref !== ref) {
        if (prevProps.rootRef !== rootRef) {
          this.setRootRef(prevProps.rootRef, null);
        }

        this.ref = ref;
        this.setRootRef(rootRef, this.ref);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var rootRef = this.props.rootRef;
      this.ref = null;
      this.setRootRef(rootRef, null);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);
  return RootRef;
}(_react.Component);

RootRef.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The wrapped React element.
   */
  children: _propTypes.default.element.isRequired,

  /**
   * The function / object to access the DOM node of the wrapped element.
   * Can be a function or a `React.createRef()`.
   */
  rootRef: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired
} : {};
var _default = RootRef;
exports.default = _default;