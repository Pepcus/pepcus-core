"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _SvgIcon = _interopRequireDefault(require("../SvgIcon"));

function TableCellSvg(props) {
  var setRef = props.setRef,
      cellProps = props.cellProps;
  var iconType = (0, _get2.default)(cellProps, 'value');

  if (_SvgIcon.default.types[iconType]) {
    var Icon = _SvgIcon.default.types[iconType];
    return _react.default.createElement(Icon, {
      setRef: setRef,
      style: {
        width: 22,
        height: 22
      }
    });
  }

  return null;
}

TableCellSvg.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: _propTypes.default.object,
  setRef: _propTypes.default.object
} : {};
TableCellSvg.defaultProps = {
  cellProps: {},
  setRef: null
};
var _default = TableCellSvg;
exports.default = _default;