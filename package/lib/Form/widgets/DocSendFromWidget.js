"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

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

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

var _es6TemplateStrings = _interopRequireDefault(require("es6-template-strings"));

var _Col = _interopRequireDefault(require("../../Col"));

var _Radio = _interopRequireDefault(require("../../Radio"));

var _Row = _interopRequireDefault(require("../../Row"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _Select = require("../../Select");

var _apis = require("../../../utils/apis");

var _merge = require("../../../utils/merge");

var DocSendFromWidget =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(DocSendFromWidget, _React$Component);

  function DocSendFromWidget(props) {
    var _this;

    (0, _classCallCheck2.default)(this, DocSendFromWidget);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(DocSendFromWidget).call(this, props));

    _this.handleRadioOnChange = function (label) {
      return function () {
        var onChange = _this.props.onChange;
        typeof onChange === 'function' && onChange(label);
      };
    };

    _this.handleSelectOnChange = function (option) {
      var onChange = _this.props.onChange;
      var value = (0, _get2.default)(option, 'value', '');
      typeof onChange === 'function' && onChange(value);
    };

    _this.state = {
      initialSelectOptions: null
    }; // Bind the async func.

    _this.fetchSelectOptions = _this.fetchSelectOptions.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(DocSendFromWidget, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Fetch the default set of options upon mount.
      this.fetchSelectOptions();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var options = this.props.options; // If the options are not equal, then we will refresh the already loaded data.

      if (!(0, _isEqual2.default)(options, prevProps.options)) {
        this.fetchSelectOptions(null, null, true);
      }
    }
  }, {
    key: "fetchSelectOptions",
    value: function () {
      var _fetchSelectOptions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(searchSpec, selectOptions) {
        var updateDefaultOptions,
            options,
            config,
            selectProps,
            selectLabel,
            selectValue,
            oAuthToken,
            schema,
            apis,
            api,
            dataKey,
            request,
            paramsMap,
            Authorization,
            _paramsMap$searchSpec,
            searchSpecKey,
            apiConfig,
            _ref,
            respData,
            formattedData,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                updateDefaultOptions = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
                _context.prev = 1;
                options = this.props.options;
                config = options.config, selectProps = options.selectProps;
                selectLabel = selectProps.selectLabel, selectValue = selectProps.selectValue;
                oAuthToken = config.oAuthToken, schema = config.schema;
                apis = (0, _get2.default)(schema, 'apis'); // If no `baseURL` is found, then we will just return.

                if ((0, _get2.default)(apis, 'request.baseURL')) {
                  _context.next = 10;
                  break;
                }

                this.setState(function () {
                  return {
                    initialSelectOptions: []
                  };
                });
                return _context.abrupt("return", null);

              case 10:
                // Extract some info from the `schema`
                api = (0, _apis.extractAPIConfig)(apis, 'data');
                dataKey = (0, _get2.default)(api, 'dataKey', 'data');
                request = (0, _get2.default)(api, 'request', {});
                paramsMap = (0, _get2.default)(api, 'paramsMap', {});
                Authorization = (0, _get2.default)(request, 'headers.Authorization');
                _paramsMap$searchSpec = paramsMap.searchSpecKey, searchSpecKey = _paramsMap$searchSpec === void 0 ? 'searchSpec' : _paramsMap$searchSpec; // Build the `axios` config.

                apiConfig = (0, _merge.mergeObjects)(request, {
                  headers: {
                    Authorization: Authorization ? Authorization : "Bearer ".concat(oAuthToken)
                  },
                  params: (0, _defineProperty2.default)({}, searchSpecKey, searchSpec)
                }); // Fetch the data

                _context.next = 19;
                return (0, _apis.fetchAPIData)(apiConfig, {
                  data: dataKey
                });

              case 19:
                _ref = _context.sent;
                respData = _ref.data;
                // Format the data
                formattedData = respData ? respData.map(function (i) {
                  return {
                    label: (0, _es6TemplateStrings.default)(selectLabel, i),
                    value: (0, _es6TemplateStrings.default)(selectValue, i)
                  };
                }) : []; // Update the state.

                this.setState(function (prevState) {
                  // We only want to update the state on the initial load.
                  // NOTE: If we return `null` from a `setState()` func call,
                  // it doesn't update the state or run a re-render!
                  if (!updateDefaultOptions && prevState.initialSelectOptions) {
                    return null;
                  } // Return the initialSelectOptions.


                  return {
                    initialSelectOptions: formattedData
                  };
                }); // Return the data

                return _context.abrupt("return", formattedData);

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", []);

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 26]]);
      }));

      function fetchSelectOptions(_x, _x2) {
        return _fetchSelectOptions.apply(this, arguments);
      }

      return fetchSelectOptions;
    }()
  }, {
    key: "render",
    value: function render() {
      var initialSelectOptions = this.state.initialSelectOptions;
      var _this$props = this.props,
          options = _this$props.options,
          placeholder = _this$props.placeholder,
          required = _this$props.required,
          value = _this$props.value;
      var displayLabel = options.displayLabel,
          displayValue = options.displayValue,
          _options$selectProps = options.selectProps,
          selectProps = _options$selectProps === void 0 ? {} : _options$selectProps;
      var selectLabel = selectProps.selectLabel,
          selectValue = selectProps.selectValue,
          cleanSelectProps = (0, _objectWithoutProperties2.default)(selectProps, ["selectLabel", "selectValue"]);
      var checked = displayValue === value;
      var extraSelectProps = checked ? {
        value: null
      } : {};
      return _react.default.createElement(_Row.default, {
        width: "auto",
        alignItems: "baseline"
      }, _react.default.createElement(_Col.default, {
        size: 2
      }, _react.default.createElement(_Typography.default, {
        type: "label",
        gutterBottom: "0",
        fullWidth: true
      }, _react.default.createElement(_Radio.default, {
        checked: checked,
        margin: "0 5px 0 0",
        name: displayLabel,
        onChange: this.handleRadioOnChange(displayValue),
        required: Boolean(!value && required),
        value: displayValue,
        color: "checkbox"
      }), _react.default.createElement("span", null, displayLabel))), initialSelectOptions && initialSelectOptions.length === 1 && _react.default.createElement(_Col.default, {
        size: 10
      }, _react.default.createElement(_Typography.default, {
        type: "label",
        gutterBottom: "0",
        fullWidth: true,
        noWrap: true
      }, _react.default.createElement(_Radio.default, {
        checked: value === initialSelectOptions[0].value,
        margin: "0 5px 0 0",
        name: initialSelectOptions[0].value,
        required: Boolean(!value && required),
        onChange: this.handleRadioOnChange(initialSelectOptions[0].value),
        value: initialSelectOptions[0].value
      }), _react.default.createElement("span", null, initialSelectOptions[0].label))), (initialSelectOptions === null || initialSelectOptions && initialSelectOptions.length > 1) && _react.default.createElement(_Col.default, {
        size: 10,
        style: {
          opacity: initialSelectOptions === null || initialSelectOptions.length === 1 ? '0' : '1',
          transition: 'opacity 0.2s ease-in-out'
        }
      }, _react.default.createElement(_Select.AsyncSelect, Object.assign({
        cacheOptions: true,
        defaultOptions: initialSelectOptions,
        loadOptions: this.fetchSelectOptions,
        onChange: this.handleSelectOnChange,
        placeholder: placeholder
      }, cleanSelectProps, extraSelectProps))));
    }
  }]);
  return DocSendFromWidget;
}(_react.default.Component);

DocSendFromWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  value: _propTypes.default.string
} : {};
DocSendFromWidget.defaultProps = {
  options: null,
  placeholder: null,
  required: null,
  value: null
};
var _default = DocSendFromWidget;
exports.default = _default;