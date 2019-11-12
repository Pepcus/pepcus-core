"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _es6TemplateStrings = _interopRequireDefault(require("es6-template-strings"));

var _Col = _interopRequireDefault(require("../../Col"));

var _Row = _interopRequireDefault(require("../../Row"));

var _Select = require("../../Select");

var _apis = require("../../../utils/apis");

var _merge = require("../../../utils/merge");

var HandbookSearchWidget =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(HandbookSearchWidget, _React$Component);

  function HandbookSearchWidget(props) {
    var _this;

    (0, _classCallCheck2.default)(this, HandbookSearchWidget);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HandbookSearchWidget).call(this, props)); // Bind the async func.

    _this.handleSelectOnChange = function (option) {
      var onChange = _this.props.onChange;
      var value = (0, _get2.default)(option, 'value', '');
      typeof onChange === 'function' && onChange(value);
    };

    _this.fetchSelectOptions = _this.fetchSelectOptions.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(HandbookSearchWidget, [{
    key: "fetchSelectOptions",
    value: function () {
      var _fetchSelectOptions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(searchSpec) {
        var options, optionLabel, optionValue, config, oAuthToken, schema, apis, api, dataKey, paramsMap, request, Authorization, _paramsMap$searchSpec, searchSpecKey, apiConfig, _ref, respData, formattedData;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                options = this.props.options;
                optionLabel = options.optionLabel, optionValue = options.optionValue, config = options.config;
                oAuthToken = config.oAuthToken, schema = config.schema;
                apis = (0, _get2.default)(schema, 'apis'); // If no `baseURL` is found, then we will just return.

                if ((0, _get2.default)(apis, 'request.baseURL')) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", null);

              case 7:
                // Extract some info from the `schema`
                api = (0, _apis.extractAPIConfig)(apis, 'data');
                dataKey = (0, _get2.default)(api, 'dataKey', 'data');
                paramsMap = (0, _get2.default)(api, 'paramsMap', {});
                request = (0, _get2.default)(api, 'request', {});
                Authorization = (0, _get2.default)(request, 'headers.Authorization');
                _paramsMap$searchSpec = paramsMap.searchSpecKey, searchSpecKey = _paramsMap$searchSpec === void 0 ? 'searchSpec' : _paramsMap$searchSpec; // Build the `axios` config.

                apiConfig = (0, _merge.mergeObjects)(request, {
                  headers: {
                    Authorization: Authorization ? Authorization : "Bearer ".concat(oAuthToken)
                  },
                  params: (0, _defineProperty2.default)({}, searchSpecKey, searchSpec)
                }); // Fetch the data

                _context.next = 16;
                return (0, _apis.fetchAPIData)(apiConfig, {
                  data: dataKey
                });

              case 16:
                _ref = _context.sent;
                respData = _ref.data;
                // Format the data
                formattedData = respData ? respData.map(function (i) {
                  return {
                    label: (0, _es6TemplateStrings.default)(optionLabel, i),
                    value: (0, _get2.default)(i, optionValue)
                  };
                }) : []; // Return the data

                return _context.abrupt("return", formattedData);

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", Promise.reject([]));

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 22]]);
      }));

      function fetchSelectOptions(_x) {
        return _fetchSelectOptions.apply(this, arguments);
      }

      return fetchSelectOptions;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          options = _this$props.options,
          placeholder = _this$props.placeholder;
      var _options$selectProps = options.selectProps,
          selectProps = _options$selectProps === void 0 ? {} : _options$selectProps;
      return _react.default.createElement(_Row.default, {
        width: "auto",
        alignItems: "baseline"
      }, _react.default.createElement(_Col.default, null, _react.default.createElement(_Select.AsyncSelect, Object.assign({
        cacheOptions: true,
        defaultOptions: true,
        loadOptions: this.fetchSelectOptions,
        onChange: this.handleSelectOnChange,
        placeholder: placeholder
      }, selectProps))));
    }
  }]);
  return HandbookSearchWidget;
}(_react.default.Component);

HandbookSearchWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  value: _propTypes.default.number
} : {};
HandbookSearchWidget.defaultProps = {
  options: null,
  placeholder: null,
  required: null,
  value: null
};
var _default = HandbookSearchWidget;
exports.default = _default;