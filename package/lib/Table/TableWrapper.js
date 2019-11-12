"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _TableStyled = _interopRequireDefault(require("./TableStyled"));

/**
 * A wrapper element around the Table component.
 *
 * @constructor
 */
var TableWrapper = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "TableWrapper",
  componentId: "sc-3e9b6u-0"
})(["border-collapse:initial;margin:0;overflow:visible;overflow-x:auto;padding:0;", "{", "}"], _TableStyled.default, function (_ref) {
  var cols = _ref.cols;
  var minWidth = '';

  switch (cols) {
    case 1:
    case 2:
      minWidth = '100%';
      break;

    case 3:
      minWidth = '600px';
      break;

    case 4:
      minWidth = '800px';
      break;

    case 5:
    case 6:
    case 7:
      minWidth = '900px';
      break;

    case 8:
      minWidth = '1000px';
      break;

    case 9:
      minWidth = '1100px';
      break;

    case 10:
      minWidth = '1200px';
      break;

    case 11:
      minWidth = '1300px';
      break;

    case 12:
      minWidth = '1400px';
      break;

    default:
      break;
  }

  return (0, _styledComponents.css)(["min-width:", ";"], minWidth);
});
var _default = TableWrapper;
exports.default = _default;