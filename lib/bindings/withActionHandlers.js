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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var withActionHandlers = function withActionHandlers(WrappedComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2.default)(WithActionHandlers, _React$Component);

    function WithActionHandlers() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, WithActionHandlers);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WithActionHandlers)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.wrappedRef = _react.default.createRef();

      _this.getEventProps = function (action) {
        var handlersList = _this.props.handlers;
        var mouseevent = action.mouseevent || null;
        var handlerRef = action.handlerRef || null;
        var handler = handlersList[handlerRef] || null;
        var shouldBind = Boolean(mouseevent && handler && _this.wrappedRef.current);

        var wrappedHandler = function wrappedHandler(event) {
          return typeof handler === 'function' && handler(_this.props, _this.wrappedRef, action, event);
        };

        return {
          mouseevent: mouseevent,
          shouldBind: shouldBind,
          wrappedHandler: wrappedHandler
        };
      };

      return _this;
    }

    (0, _createClass2.default)(WithActionHandlers, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;

        var actionsList = this.props.actions;

        if (actionsList.length > 0 && this.wrappedRef.current) {
          actionsList.forEach(function (action) {
            var eventProps = _this2.getEventProps(action);

            eventProps.shouldBind && _this2.wrappedRef.current.addEventListener(eventProps.mouseevent, eventProps.wrappedHandler);
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var _this3 = this;

        var actionsList = this.props.actions;

        if (actionsList.length > 0 && this.wrappedRef.current) {
          actionsList.forEach(function (action) {
            var eventProps = _this3.getEventProps(action);

            eventProps.shouldBind && _this3.wrappedRef.current.removeEventListener(eventProps.mouseevent, eventProps.wrappedHandler);
          });
        }
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement(WrappedComponent, Object.assign({}, this.props, {
          setRef: this.wrappedRef
        }));
      }
    }]);
    return WithActionHandlers;
  }(_react.default.Component), _class.propTypes = {
    /**
     * The action handlers passed to the WrappedComponent
     */
    actions: _propTypes.default.array,

    /**
     * Extra set of handlers passed to the WrappedComponent
     */
    handlers: _propTypes.default.object
  }, _class.defaultProps = {
    actions: [],
    handlers: {}
  }, _temp;
};

var _default = withActionHandlers;
exports.default = _default;