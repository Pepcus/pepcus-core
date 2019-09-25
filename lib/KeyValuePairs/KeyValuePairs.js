"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isFunction2 = _interopRequireDefault(require("lodash/isFunction"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _generate = require("../../utils/generate");

var _theme = require("../../utils/theme");

var _Item = _interopRequireDefault(require("./Item"));

var _Key = _interopRequireDefault(require("./Key"));

var _Value = _interopRequireDefault(require("./Value"));

var KeyValuePairsStyled = _styledComponents.default.ul.withConfig({
  displayName: "KeyValuePairs__KeyValuePairsStyled",
  componentId: "sc-1u1eota-0"
})(["align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;list-style:none;margin:0;padding:0;", ";"], (0, _theme.getThemeProps)('KeyValuePairs.styles'));

var KeyValuePairs = function KeyValuePairs(_ref) {
  var items = _ref.items,
      itemKey = _ref.itemKey,
      onItemClick = _ref.onItemClick,
      itemValue = _ref.itemValue;
  return _react.default.createElement(KeyValuePairsStyled, null, items.map(function (item, itemIdx) {
    var theKey = (0, _get2.default)(item, itemKey, itemKey);
    var theValue = (0, _get2.default)(item, itemValue, itemValue);
    var onClick = (0, _isFunction2.default)(onItemClick) ? function () {
      return onItemClick(item);
    } : null;
    return _react.default.createElement(_Item.default, {
      key: (0, _generate.genID)('KeyItem'),
      onClick: onClick
    }, _react.default.createElement(_Key.default, null, theKey), _react.default.createElement(_Value.default, null, theValue));
  }));
};

KeyValuePairs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The `key` to extract from the item.
   * Key is inserted into the first column of the KeyValuePairs.
   */
  itemKey: _propTypes.default.string,

  /**
   * The `value` to extract from the item.
   * Value is inserted into the second column of the KeyValuePairs.
   *
   * @type {[type]}
   */
  itemValue: _propTypes.default.string,

  /**
   * The list of items for the KeyValuePairs
   */
  items: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,

  /**
   * The `onClick` prop for the item.
   */
  onItemClick: _propTypes.default.func
} : {};
KeyValuePairs.defaultProps = {
  itemKey: '',
  onItemClick: null,
  itemValue: ''
};
var _default = KeyValuePairs;
exports.default = _default;