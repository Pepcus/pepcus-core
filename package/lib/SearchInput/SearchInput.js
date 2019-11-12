"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _SvgIcon = require("../SvgIcon");

var _theme = require("../../utils/theme");

var SearchInputStyled = _styledComponents.default.input.withConfig({
  displayName: "SearchInput__SearchInputStyled",
  componentId: "bygdrb-0"
})(["background-color:", ";border:none;box-shadow:none;color:rgba(127,143,164,1);display:block;font-size:14px;height:100%;line-height:1.5;min-height:34px;padding:6px;width:100%;&:focus{outline:none;border:none;box-shadow:none;}&::placeholder{color:rgba(166,179,190,1);}&[disabled],&[readonly]{background-color:#e1e5e9 !important;border-color:transparent;box-shadow:none;cursor:not-allowed;user-select:none;}"], (0, _theme.getThemeProps)('palette.common.white'));

var SearchInputButton = _styledComponents.default.button.withConfig({
  displayName: "SearchInput__SearchInputButton",
  componentId: "bygdrb-1"
})(["background:transparent;border:0px;color:#c4ccd3;font-size:16px;line-height:1;outline:0;padding:5px 10px 5px 10px;text-decoration:none;width:35px;svg{transition:color 0.15s ease-in;}&:hover{cursor:pointer;color:#98a6b2;}&:focus{outline:none;border:none;box-shadow:none;}&:disabled{background-color:#e1e5e9 !important;border-color:transparent;box-shadow:none;cursor:not-allowed;user-select:none;&:hover{color:#c4ccd3;cursor:not-allowed;}}"]);

var SearchInputContainer = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "SearchInput__SearchInputContainer",
  componentId: "bygdrb-2"
})(["align-items:stretch;color:#7f8fa4;display:flex;font-size:14px;justify-content:space-between;line-height:1.5;min-height:36px;overflow:hidden;padding:0;transition:border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out;width:100%;", ";", ";", ";", ";"], function (_ref) {
  var focused = _ref.focused,
      theme = _ref.theme;
  return focused && (0, _objectSpread2.default)({}, (0, _theme.getThemeProps)('effects.inputFocus')({
    theme: theme
  })['&:focus']);
}, (0, _theme.getThemeProps)('effects.inputFocus'), function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && {
    backgroundColor: '#e1e5e9 !important',
    borderColor: 'transparent !important',
    boxShadow: 'none !important',
    cursor: 'not-allowed',
    userSelect: 'none'
  };
}, (0, _theme.getThemeProps)('SearchInput.styles'));

var SearchInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SearchInput, _React$Component);

  function SearchInput(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SearchInput);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchInput).call(this, props));

    _this.clearSearchValue = function () {
      _this.setState(function () {
        return {
          searchSpec: ''
        };
      });
    };

    _this.handleInputBtnClick = function (e) {
      e.preventDefault();
      var searchSpec = _this.state.searchSpec;
      var onCancel = _this.props.onCancel; // If there is no `searchSpec` present, just return.

      if (!searchSpec) {
        return;
      } else {
        // Update the state with the empty `searchSpec`.
        _this.setState(function () {
          return {
            searchSpec: ''
          };
        }); // Invoke the `onCancel` callback.


        typeof onCancel === 'function' && onCancel(e); // Return

        return;
      }
    };

    _this.handleInputOnChange = function (e) {
      var onChange = _this.props.onChange; // Extract the value from the current event

      var value = (0, _get2.default)(e, 'target.value'); // Update the state with the new search spec.

      _this.setState(function () {
        return {
          searchSpec: value
        };
      }); // Invoke the `onChange` callback.


      typeof onChange === 'function' && onChange(value); // Return

      return;
    };

    _this.handleInputOnFocus = function () {
      _this.setState(function () {
        return {
          inputFocused: true
        };
      });
    };

    _this.handleInputOnBlur = function () {
      _this.setState(function () {
        return {
          inputFocused: false
        };
      });
    };

    var _value = _this.props.value;
    _this.state = {
      inputFocused: false,
      searchSpec: _value
    };
    return _this;
  }

  (0, _createClass2.default)(SearchInput, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          inputFocused = _this$state.inputFocused,
          searchSpec = _this$state.searchSpec;
      var _this$props = this.props,
          disabled = _this$props.disabled,
          onCancel = _this$props.onCancel,
          onClick = _this$props.onClick,
          inputRef = _this$props.inputRef,
          inputProps = (0, _objectWithoutProperties2.default)(_this$props, ["disabled", "onCancel", "onClick", "inputRef"]);
      return _react.default.createElement(SearchInputContainer, {
        disabled: disabled,
        focused: inputFocused,
        margin: "0",
        padding: "0",
        readOnly: disabled
      }, _react.default.createElement(SearchInputButton, {
        disabled: disabled,
        onClick: this.handleInputBtnClick
      }, !searchSpec && _react.default.createElement(_SvgIcon.SearchIcon, {
        style: {
          color: 'inherit',
          width: 15,
          height: 15
        }
      }), searchSpec && _react.default.createElement(_SvgIcon.ClearIcon, {
        style: {
          color: 'inherit',
          width: 20,
          height: 20
        }
      })), _react.default.createElement(SearchInputStyled, Object.assign({}, inputProps, {
        disabled: disabled,
        onBlur: this.handleInputOnBlur,
        onChange: this.handleInputOnChange,
        onFocus: this.handleInputOnFocus,
        readOnly: disabled,
        ref: inputRef,
        value: searchSpec
      })));
    }
  }]);
  return SearchInput;
}(_react.default.Component);

SearchInput.defaultProps = {
  disabled: false,
  inputRef: null,
  onCancel: null,
  onChange: null,
  onClick: null,
  value: ''
};
SearchInput.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: _propTypes.default.bool,
  inputRef: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onClick: _propTypes.default.func,
  value: _propTypes.default.string
} : {};
var _default = SearchInput;
exports.default = _default;