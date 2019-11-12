"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("../../List"));

var _ListItem = _interopRequireDefault(require("../../ListItem"));

var _Typography = _interopRequireDefault(require("../../Typography"));

function ErrorList(_ref) {
  var errors = _ref.errors;
  // Remove the 'is a required property' error,
  // since we're displaying a `REQUIRED` label per field.
  var filteredErrors = errors ? errors.filter(function (e) {
    return !e.includes('is a required property') && !e.startsWith('should be');
  }) : []; // Don't render the error list if there aren't any errors present.

  if (filteredErrors.length === 0) {
    return null;
  } // Render the list of errors.


  return _react.default.createElement(_List.default, {
    backgroundColor: "transparent",
    margin: "10px 0",
    borderWidth: "0"
  }, filteredErrors.map(function (error) {
    return _react.default.createElement(_ListItem.default, {
      backgroundColor: "transparent",
      borderWidth: "0",
      key: error,
      margin: "0",
      padding: "2.5px 5px"
    }, _react.default.createElement(_Typography.default, {
      color: "error",
      gutterBottom: "0"
    }, error));
  }));
}

ErrorList.propTypes = process.env.NODE_ENV !== "production" ? {
  errors: _propTypes.default.array
} : {};
ErrorList.defaultProps = {
  errors: null
};
var _default = ErrorList;
exports.default = _default;