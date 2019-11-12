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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _Table = require("./Table");

/**
 * Wrap a Table Component with the TableContext's Consumer,
 * injecting the Consumer's context values into the Wrapped
 * Component as props.
 *
 * @method withTableContext
 * @param  {Component}         WrappedComponent The Component to wrap
 * @return {Component}                          The wrapped Component
 */
var withTableContext = function withTableContext(WrappedComponent) {
  return (
    /*#__PURE__*/
    function (_Component) {
      (0, _inherits2.default)(WithTableContext, _Component);

      function WithTableContext() {
        (0, _classCallCheck2.default)(this, WithTableContext);
        return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithTableContext).apply(this, arguments));
      }

      (0, _createClass2.default)(WithTableContext, [{
        key: "componentDidMount",
        value: function componentDidMount() {}
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          return _react.default.createElement(_Table.TableContext.Consumer, null, function (tableContext) {
            return _react.default.createElement(WrappedComponent, Object.assign({}, _this.props, tableContext));
          });
        }
      }]);
      return WithTableContext;
    }(_react.Component)
  );
};

var _default = withTableContext;
exports.default = _default;