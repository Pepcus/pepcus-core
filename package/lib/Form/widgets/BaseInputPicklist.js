"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _getDisplayName = _interopRequireDefault(require("recompose/getDisplayName"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../../Button"));

var _Input = _interopRequireDefault(require("../../Input"));

var _InputMask = _interopRequireDefault(require("../../Input/InputMask"));

var _theme = require("../../../utils/theme");

var _component = require("../../../utils/component");

var PicklistButton = _styledComponents.default.div.withConfig({
  displayName: "BaseInputPicklist__PicklistButton",
  componentId: "gunj1i-0"
})([""]);

var BaseInputPicklistStyled = _styledComponents.default.div.withConfig({
  displayName: "BaseInputPicklist__BaseInputPicklistStyled",
  componentId: "gunj1i-1"
})(["align-items:center;display:flex;justify-content:flex-start;", "{margin-left:15px;}", ";"], PicklistButton, (0, _theme.getThemeProps)('BaseInputPicklist.styles'));

var BaseInputPicklist =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(BaseInputPicklist, _React$Component);

  function BaseInputPicklist() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, BaseInputPicklist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BaseInputPicklist)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      showPicklist: false
    };

    _this.getPicklistComponent = function () {
      var _this$props = _this.props,
          formContext = _this$props.formContext,
          schema = _this$props.schema; // Extract the picklist out of the schema

      var picklist = (0, _get2.default)(schema, 'picklist'); // Extract the picklists from the formContext

      var contextPicklists = (0, _get2.default)(formContext, 'picklists'); // Find the picklist component from the contextPicklists

      var PicklistComponent = !(0, _isEmpty2.default)(picklist) && picklist.id && contextPicklists.find(function (item) {
        return (0, _getDisplayName.default)(item).includes(picklist.id);
      }); // Determine whether the found component is a valid react component.
      // This validation excludes HTML tagNames, and strings, it must be a functional stateless or statefull or styled component.

      var valid = _react.default.isValidElement(PicklistComponent) || (0, _component.isClassComponent)(PicklistComponent); // If needed, we can assign a ref for the wrapped or regular React component

      var PicklistRef = valid && (PicklistComponent.WrappedComponent || PicklistComponent);
      return {
        valid: valid,
        picklistProps: picklist,
        Component: PicklistComponent,
        componentRef: PicklistRef
      };
    };

    _this.handlePicklistClose = function () {
      _this.setState(function () {
        return {
          showPicklist: false
        };
      });
    };

    _this.handlePicklistOnPick = function (_ref) {
      var formData = _ref.formData;

      if (!(0, _isEmpty2.default)(formData)) {
        _this.handleUpdateFormData(formData);

        _this.handlePicklistClose();
      }
    };

    _this.handlePicklistShow = function () {
      _this.setState(function () {
        return {
          showPicklist: true
        };
      });
    };

    _this.handleUpdateFormData = function (formData) {
      var _this$props2 = _this.props,
          formContext = _this$props2.formContext,
          schema = _this$props2.schema; // Make a copy of the current formData from the formContext

      var updatedFormData = (0, _objectSpread2.default)({}, formContext.getFormData()); // Extract the pickmap out of the schema

      var pickmap = (0, _get2.default)(schema, 'pickmap'); // For each of the keys in the pickmap we will update the
      // copied form data (updatedFormData)

      Object.keys(pickmap).forEach(function (pickMapKey) {
        (0, _set2.default)(updatedFormData, pickMapKey, (0, _get2.default)(formData, pickmap[pickMapKey]));
      }); // Update the form with the newly set data

      formContext.updateFormData({
        formData: updatedFormData
      });
    };

    _this.renderPicklist = function () {
      var showPicklist = _this.state.showPicklist;
      var readonly = _this.props.readonly;

      var Picklist = _this.getPicklistComponent();

      if (readonly || !Picklist.valid) {
        return null;
      }

      return _react.default.createElement(PicklistButton, null, _react.default.createElement(_Button.default, {
        noMinWidth: true,
        type: "button",
        onClick: _this.handlePicklistShow
      }, "..."), _react.default.createElement(Picklist.Component, {
        close: _this.handlePicklistClose,
        onPick: _this.handlePicklistOnPick,
        isOpen: showPicklist,
        picklistProps: Picklist.picklistProps
      }));
    };

    return _this;
  }

  (0, _createClass2.default)(BaseInputPicklist, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          autofocus = _this$props3.autofocus,
          disabled = _this$props3.disabled,
          formContext = _this$props3.formContext,
          id = _this$props3.id,
          onBlur = _this$props3.onBlur,
          onChange = _this$props3.onChange,
          onFocus = _this$props3.onFocus,
          options = _this$props3.options,
          readonly = _this$props3.readonly,
          registry = _this$props3.registry,
          schema = _this$props3.schema,
          value = _this$props3.value,
          inputProps = (0, _objectWithoutProperties2.default)(_this$props3, ["autofocus", "disabled", "formContext", "id", "onBlur", "onChange", "onFocus", "options", "readonly", "registry", "schema", "value"]);

      if (!id) {
        throw new Error("no id for BaseInputPicklist ".concat(JSON.stringify(this.props)));
      }

      inputProps.type = options.inputType || inputProps.type || 'text';

      var _onChange = function _onChange(_ref2) {
        var value = _ref2.target.value;
        return onChange(value === '' ? options.emptyValue : value);
      };

      var rawErrors = inputProps.rawErrors,
          cleanProps = (0, _objectWithoutProperties2.default)(inputProps, ["rawErrors"]); // Determine if we are rendering an input mask.

      var maskedInput = Boolean(!(0, _isEmpty2.default)(options.inputMask) && options.inputMask.mask && Array.isArray(options.inputMask.mask)); // Render the masked input if there is a mask option available.

      if (maskedInput) {
        return _react.default.createElement(BaseInputPicklistStyled, null, _react.default.createElement(_InputMask.default, Object.assign({}, options.inputMask, {
          guide: options.inputMask.guide || true,
          autoFocus: autofocus,
          disabled: disabled,
          id: id,
          readOnly: readonly,
          showMask: options.showMaskPlaceholder,
          value: value == null ? '' : value
        }, cleanProps, {
          onChange: _onChange,
          onBlur: typeof onBlur === 'function' && function (event) {
            return onBlur(id, event.target.value);
          },
          onFocus: typeof onFocus === 'function' && function (event) {
            return onFocus(id, event.target.value);
          }
        })));
      }

      return _react.default.createElement(BaseInputPicklistStyled, null, _react.default.createElement(_Input.default, Object.assign({
        autoFocus: autofocus,
        disabled: disabled,
        id: id,
        readOnly: readonly,
        value: value == null ? '' : value
      }, cleanProps, {
        onChange: _onChange,
        onBlur: typeof onBlur === 'function' && function (event) {
          return onBlur(id, event.target.value);
        },
        onFocus: typeof onFocus === 'function' && function (event) {
          return onFocus(id, event.target.value);
        }
      })), this.renderPicklist());
    }
  }]);
  return BaseInputPicklist;
}(_react.default.Component);

BaseInputPicklist.propTypes = process.env.NODE_ENV !== "production" ? {
  autofocus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  formContext: _propTypes.default.object,
  id: _propTypes.default.string.isRequired,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  options: _propTypes.default.object,
  readonly: _propTypes.default.bool,
  registry: _propTypes.default.object,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object,
  value: _propTypes.default.any
} : {};
BaseInputPicklist.defaultProps = {
  autofocus: false,
  disabled: false,
  formContext: null,
  onBlur: false,
  onChange: false,
  onFocus: false,
  options: null,
  readonly: false,
  registry: null,
  required: false,
  schema: null,
  value: null
};
var _default = BaseInputPicklist;
exports.default = _default;