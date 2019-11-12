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

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _es6TemplateStrings = _interopRequireDefault(require("es6-template-strings"));

var _Col = _interopRequireDefault(require("../../Col"));

var _Row = _interopRequireDefault(require("../../Row"));

var _Select = require("../../Select");

var _apis = require("../../../utils/apis");

var _merge = require("../../../utils/merge");

var _FormGroupContent = _interopRequireDefault(require("./FormGroupContent"));

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var HandbookSearchField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(HandbookSearchField, _React$Component);

  function HandbookSearchField(props) {
    var _this;

    (0, _classCallCheck2.default)(this, HandbookSearchField);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HandbookSearchField).call(this, props));

    _this._getUiOptions = function (schema) {
      return (0, _get2.default)(schema, 'ui:options', {});
    };

    _this.getHiddenInputStyle = function () {
      return {
        height: 38,
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        top: 0,
        width: '100%',
        zIndex: -1
      };
    };

    _this.handleHiddenInputOnChange = function () {};

    _this.handleOptionDisabled = function (option) {
      var value = option.value; // We're disabling any and all handbooks that have policy alerts.

      return value.hasPolicyAlerts && value.hasPolicyAlerts === 1;
    };

    _this.handleSelectOnChange = function (option) {
      var onChange = _this.props.onChange;
      var value = (0, _get2.default)(option, 'value', '');

      _this.setState(function () {
        return {
          searchValue: value
        };
      }, function () {
        typeof onChange === 'function' && onChange(value);
      });
    };

    _this.state = {
      searchValue: {}
    }; // Bind the async func.

    _this.fetchSelectOptions = _this.fetchSelectOptions.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  /**
   * Get the `ui:options` for the current field.
   *
   * @method _getUiOptions
   * @private
   * @param  {Object}      schema The schema to extract the options from
   * @return {Object}             The extracted options
   */


  (0, _createClass2.default)(HandbookSearchField, [{
    key: "fetchSelectOptions",
    value: function () {
      var _fetchSelectOptions = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(searchSpec) {
        var uiSchema, options, optionLabel, optionValue, config, oAuthToken, schema, apis, api, dataKey, paramsMap, request, Authorization, _paramsMap$searchSpec, searchSpecKey, apiConfig, _ref, respData, formattedData;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                uiSchema = this.props.uiSchema;
                options = this._getUiOptions(uiSchema);
                optionLabel = options.optionLabel, optionValue = options.optionValue, config = options.config;
                oAuthToken = config.oAuthToken, schema = config.schema;
                apis = (0, _get2.default)(schema, 'apis'); // If no `baseURL` is found, then we will just return.

                if ((0, _get2.default)(apis, 'request.baseURL')) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return", null);

              case 8:
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

                _context.next = 17;
                return (0, _apis.fetchAPIData)(apiConfig, {
                  data: dataKey
                });

              case 17:
                _ref = _context.sent;
                respData = _ref.data;
                // Format the data
                formattedData = respData ? respData.map(function (i) {
                  return {
                    label: (0, _es6TemplateStrings.default)(optionLabel, i),
                    value: optionValue ? (0, _get2.default)(i, optionValue) : i
                  };
                }) : []; // Return the data

                return _context.abrupt("return", formattedData);

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](0);
                return _context.abrupt("return", Promise.reject([]));

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 23]]);
      }));

      function fetchSelectOptions(_x) {
        return _fetchSelectOptions.apply(this, arguments);
      }

      return fetchSelectOptions;
    }()
  }, {
    key: "render",
    value: function render() {
      var searchValue = this.state.searchValue;
      var _this$props = this.props,
          disabled = _this$props.disabled,
          idSchema = _this$props.idSchema,
          required = _this$props.required,
          schema = _this$props.schema,
          uiSchema = _this$props.uiSchema;

      var options = this._getUiOptions(uiSchema); // Extract the actual id of the field from the `idSchema`


      var id = (0, _get2.default)(idSchema, '$id', ''); // Extract the placeholder and selectProps.

      var _options$placeholder = options.placeholder,
          placeholder = _options$placeholder === void 0 ? '' : _options$placeholder,
          _options$selectProps = options.selectProps,
          selectProps = _options$selectProps === void 0 ? {} : _options$selectProps; // Extract the title.

      var title = (0, _get2.default)(schema, 'title'); // Extract the title help text.

      var titleHelptext = (0, _get2.default)(schema, 'helpText'); // Determine if we are rendering a formGroup.

      var formGroup = (0, _get2.default)(schema, 'formGroup', false); // Determine the hidden input's value.

      var hiddenInputValue = !(0, _isEmpty2.default)(searchValue) ? JSON.stringify(searchValue) : '';
      return _react.default.createElement(_Row.default, {
        width: "auto"
      }, _react.default.createElement(_Col.default, {
        size: 12
      }, _react.default.createElement(_FormGroupTitle.default, {
        helpText: titleHelptext,
        id: id,
        required: required,
        title: title
      })), _react.default.createElement(_Col.default, {
        size: 12,
        style: {
          position: 'relative'
        }
      }, formGroup ? _react.default.createElement(_FormGroupContent.default, {
        schema: schema
      }, _react.default.createElement(_Select.AsyncSelect, Object.assign({
        cacheOptions: true,
        defaultOptions: true,
        loadOptions: this.fetchSelectOptions,
        onChange: this.handleSelectOnChange,
        placeholder: placeholder
      }, selectProps))) : _react.default.createElement(_Select.AsyncSelect, Object.assign({
        cacheOptions: true,
        defaultOptions: true,
        loadOptions: this.fetchSelectOptions,
        onChange: this.handleSelectOnChange,
        placeholder: placeholder
      }, selectProps)), _react.default.createElement("input", {
        onChange: this.handleHiddenInputOnChange,
        disabled: disabled,
        id: id,
        required: required,
        style: this.getHiddenInputStyle(),
        tabIndex: -1,
        type: "text",
        value: hiddenInputValue
      })));
    }
  }]);
  return HandbookSearchField;
}(_react.default.Component);

HandbookSearchField.defaultProps = {
  disabled: null,
  idSchema: null,
  options: null,
  placeholder: null,
  required: null,
  schema: null,
  uiSchema: null,
  value: null
};
HandbookSearchField.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes.default.bool,
  idSchema: _propTypes.default.object,
  onChange: _propTypes.default.func.isRequired,
  options: _propTypes.default.object,
  placeholder: _propTypes.default.string,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object,
  uiSchema: _propTypes.default.object,
  value: _propTypes.default.number
} : {};
var _default = HandbookSearchField;
exports.default = _default;