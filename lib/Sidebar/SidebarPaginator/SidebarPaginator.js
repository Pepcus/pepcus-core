"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ = require("../../..");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SidebarPaginatorWrapper = _styledComponents.default.div.withConfig({
  displayName: "SidebarPaginator__SidebarPaginatorWrapper",
  componentId: "sc-1huby0v-0"
})(["position:absolute;bottom:0;display:flex;flex-direction:column;padding:10px 0 15px 0;width:240px;"]);

var ButtonsWrapper = _styledComponents.default.div.withConfig({
  displayName: "SidebarPaginator__ButtonsWrapper",
  componentId: "sc-1huby0v-1"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);

function SidebarPaginator(props) {
  var config = props.config;
  return _react.default.createElement(SidebarPaginatorWrapper, null, _react.default.createElement(_.Divider, {
    color: "muted"
  }), _react.default.createElement(ButtonsWrapper, null, config.map(function (conf) {
    return _react.default.createElement(_.Button, {
      key: (0, _.genID)(),
      width: "110px",
      style: {
        minWidth: '110px'
      },
      color: conf.color
    }, conf.text);
  })));
}

SidebarPaginator.propTypes = process.env.NODE_ENV !== "production" ? {
  config: _propTypes.default.array
} : {};
SidebarPaginator.defaultProps = {
  config: []
};
var _default = SidebarPaginator;
exports.default = _default;