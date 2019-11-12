"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var SwitchStyled = _styledComponents.default.div.withConfig({
  displayName: "SwitchStyled",
  componentId: "sc-1d4att9-0"
})(["", ";"], function (_ref) {
  var isDisabled = _ref.isDisabled;
  return (0, _styledComponents.css)(["align-items:center;cursor:", ";display:flex;max-height:25px;max-width:55px;opacity:", ";position:relative;vertical-align:middle;z-index:1;margin:", ";"], isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.5 : null, function (_ref2) {
    var margin = _ref2.margin;
    return margin || 'inherit';
  });
});

var _default = SwitchStyled;
exports.default = _default;