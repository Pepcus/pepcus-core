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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _ButtonIcon = _interopRequireDefault(require("./ButtonIcon"));

var ButtonSwitchInput = _styledComponents.default.input.withConfig({
  displayName: "ButtonSwitch__ButtonSwitchInput",
  componentId: "sc-1crtpr1-0"
})(["cursor:inherit;height:100%;left:0;margin:0;opacity:0;padding:0;position:absolute;top:0;width:100%;"]);

var ButtonSwitch =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ButtonSwitch, _React$Component);

  function ButtonSwitch(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ButtonSwitch);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ButtonSwitch).call(this, props));

    _this.handleFocus = function (event) {
      var onFocus = _this.props.onFocus;

      if (typeof onFocus === 'function') {
        onFocus(event);
      }
    };

    _this.handleBlur = function (event) {
      var onBlur = _this.props.onBlur;

      if (typeof onBlur === 'function') {
        onBlur(event);
      }
    };

    _this.handleChange = function (event) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          checkedProps = _this$props.checked;
      var checked = (0, _get2.default)(event, 'target.checked');

      if (checkedProps != null) {
        checked = checkedProps;
      }

      _this.setState(function () {
        return {
          checked: checked
        };
      });

      if (typeof onChange === 'function') {
        onChange(event, checked);
      }
    };

    var _checked = _this.props.checked;
    _this.state = {
      checked: _checked || false
    };
    return _this;
  }

  (0, _createClass2.default)(ButtonSwitch, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          checkedIcon = _this$props2.checkedIcon,
          disabled = _this$props2.disabled,
          icon = _this$props2.icon,
          id = _this$props2.id,
          inputProps = _this$props2.inputProps,
          inputRef = _this$props2.inputRef,
          name = _this$props2.name,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onFocus = _this$props2.onFocus,
          readOnly = _this$props2.readOnly,
          required = _this$props2.required,
          type = _this$props2.type,
          value = _this$props2.value,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["checkedIcon", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "type", "value"]);
      var checked = this.state.checked;
      var hasLabelFor = type === 'checkbox' || type === 'radio';
      return _react.default.createElement(_ButtonIcon.default, Object.assign({
        disabled: disabled,
        noMinWidth: true,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        role: undefined,
        tabIndex: null
      }, other), checked ? checkedIcon : icon, _react.default.createElement(ButtonSwitchInput, Object.assign({
        checked: checked,
        disabled: disabled,
        id: hasLabelFor && id,
        name: name,
        onChange: this.handleChange,
        readOnly: readOnly,
        ref: inputRef,
        required: required,
        type: type,
        value: value
      }, inputProps)));
    }
  }]);
  return ButtonSwitch;
}(_react.default.Component);

ButtonSwitch.defaultProps = {
  checked: null,
  checkedIcon: null,
  className: '',
  disabled: false,
  icon: null,
  id: null,
  inputProps: null,
  inputRef: null,
  name: '',
  onBlur: null,
  onChange: null,
  onFocus: null,
  readOnly: false,
  required: false,
  type: 'checkbox',
  value: ''
};
ButtonSwitch.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is marked as checked.
   */
  checked: _propTypes.default.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the Button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The Icon to display when the component is unchecked.
   */
  icon: _propTypes.default.node,

  /**
   * The id for the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * The attributes for the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Attaches a React ref to the native input component.
   * Can use a `node => this.ref = node` function, or a `React.createRef()` object.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * @ignore
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback fired when the internal state is changed.
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * Set the element to be read-only.
   */
  readOnly: _propTypes.default.bool,

  /**
   * If `true`, the input will be required.
   */
  required: _propTypes.default.bool,

  /**
   * The `type` of internal input.
   */
  type: _propTypes.default.string,

  /**
   * The value of the internal input component.
   */
  value: _propTypes.default.string
} : {};
var _default = ButtonSwitch;
exports.default = _default;