"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../Button"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _generate = require("../../utils/generate");

var _theme = require("../../utils/theme");

var FormActionsSingle = _styledComponents.default.div.withConfig({
  displayName: "FormActions__FormActionsSingle",
  componentId: "iprc1p-0"
})(["", ";"], (0, _theme.getThemeProps)('FormActionsSingle.styles'));

var FormActionsTitle = _styledComponents.default.div.withConfig({
  displayName: "FormActions__FormActionsTitle",
  componentId: "iprc1p-1"
})(["margin:10px 0;", ";"], (0, _theme.getThemeProps)('FormActionsTitle.styles'));

var FormActionsStyled = _styledComponents.default.div.withConfig({
  displayName: "FormActions__FormActionsStyled",
  componentId: "iprc1p-2"
})(["align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:25px 0;", "{margin-right:10px;&:last-of-type{margin-right:0;}}", " ", ";"], FormActionsSingle, function (_ref) {
  var hideActions = _ref.hideActions;
  return hideActions && {
    display: 'none'
  };
}, (0, _theme.getThemeProps)('FormActions.styles'));

var renderDesc = function renderDesc(desc) {
  return _react.default.createElement(_Typography.default, null, desc);
};

var renderDescTop = function renderDescTop(desc, pos) {
  return desc && pos === 'top' && renderDesc(desc);
};

var renderDescBottom = function renderDescBottom(desc, pos) {
  return desc && pos === 'bottom' && renderDesc(desc);
};

function FormActions(_ref2) {
  var actions = _ref2.actions,
      disabled = _ref2.disabled,
      hideActions = _ref2.hideActions,
      title = _ref2.title;
  return disabled ? _react.default.createElement(FormActionsStyled, {
    hideActions: hideActions
  }) : _react.default.createElement(FormActionsStyled, {
    hideActions: hideActions
  }, title && _react.default.createElement(FormActionsTitle, null, _react.default.createElement(_Typography.default, {
    type: "subheading"
  }, title)), actions.map(function (action) {
    var description = action.description,
        descriptionPosition = action.descriptionPosition,
        rest = (0, _objectWithoutProperties2.default)(action, ["description", "descriptionPosition"]);
    return _react.default.createElement(FormActionsSingle, {
      key: (0, _generate.genID)()
    }, renderDescTop(description, descriptionPosition), _react.default.createElement(_Button.default, Object.assign({
      key: (0, _generate.genID)()
    }, rest)), renderDescBottom(description, descriptionPosition));
  }));
}

FormActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A list of action buttons for the form
   */
  actions: _propTypes.default.arrayOf(_propTypes.default.shape({
    children: _propTypes.default.node,
    color: _propTypes.default.string,
    description: _propTypes.default.node,
    descriptionPosition: _propTypes.default.oneOf(['top', 'bottom']),
    onClick: _propTypes.default.func,
    type: _propTypes.default.string
  })),

  /**
   * Disable the actions and display an empty `div`.
   */
  disabled: _propTypes.default.bool,

  /**
   * If the actions should be hidden but still function
   */
  hideActions: _propTypes.default.bool,

  /**
   * A title for the form actions group
   */
  title: _propTypes.default.string
} : {};
FormActions.defaultProps = {
  actions: [],
  disabled: null,
  hideActions: false,
  title: ''
};
var _default = FormActions;
exports.default = _default;