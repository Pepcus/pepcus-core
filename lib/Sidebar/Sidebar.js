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

var _ = require("./..");

var _utils = require("../../utils");

var _SidebarOption = _interopRequireDefault(require("./SidebarOption"));

var _SidebarPaginator = _interopRequireDefault(require("./SidebarPaginator"));

var _SidebarDisclaimer = _interopRequireDefault(require("./SidebarDisclaimer"));

var _SidebarHelpText = _interopRequireDefault(require("./SidebarHelpText"));

var SidebarContainer = _styledComponents.default.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "sc-1lg7nq1-0"
})(["position:fixed;top:124px;right:0;bottom:0;background:#fff;width:300px;.impersonating &{top:180px;}"]);

var SidebarContent = (0, _styledComponents.default)(_.Box).withConfig({
  displayName: "Sidebar__SidebarContent",
  componentId: "sc-1lg7nq1-1"
})(["border-left:1px solid #eaeaea !important;bottom:0;display:flex;flex-direction:column;overflow-y:auto;position:absolute;right:0;top:0;"]);
var DividerStyled = (0, _styledComponents.default)(_.Divider).withConfig({
  displayName: "Sidebar__DividerStyled",
  componentId: "sc-1lg7nq1-2"
})(["margin:20px -10px;width:calc(100% + 20px);"]);

function Sidebar(props) {
  var buttons = props.buttons,
      checkBox = props.checkBox,
      handlers = props.handlers,
      options = props.options,
      paginator = props.paginator;

  function renderSidebarButtons() {
    if (buttons) {
      return buttons.map(function (_ref) {
        var _ref$acl = _ref.acl,
            acl = _ref$acl === void 0 ? true : _ref$acl,
            onClick = _ref.onClick,
            disclaimer = _ref.disclaimer,
            helpText = _ref.helpText,
            label = _ref.label,
            hideDivider = _ref.hideDivider,
            btnProps = (0, _objectWithoutProperties2.default)(_ref, ["acl", "onClick", "disclaimer", "helpText", "label", "hideDivider"]);
        return acl && _react.default.createElement("div", {
          key: (0, _utils.genID)()
        }, _react.default.createElement(_SidebarDisclaimer.default, {
          disclaimer: disclaimer
        }), _react.default.createElement(_.Button, Object.assign({}, btnProps, {
          key: (0, _utils.genID)(),
          width: "100%",
          onClick: onClick
        }), label), checkBox, _react.default.createElement(_SidebarHelpText.default, {
          helpText: helpText
        }), _react.default.createElement(DividerStyled, {
          color: "muted",
          transparent: hideDivider
        }));
      });
    }

    return null;
  }

  function renderSidebarPaginator() {
    return paginator && _react.default.createElement(_SidebarPaginator.default, {
      config: paginator
    });
  }

  function renderSidebarOptions() {
    if (options) {
      return _react.default.createElement(_.Box, {
        borderWidth: "0",
        padding: "15px",
        margin: "0"
      }, options.map(function (option) {
        return _react.default.createElement(_SidebarOption.default, Object.assign({
          key: (0, _utils.genID)()
        }, option, {
          handlers: handlers
        }));
      }), _react.default.createElement(DividerStyled, {
        color: "muted"
      }));
    }

    return null;
  }

  return _react.default.createElement(SidebarContainer, null, _react.default.createElement(SidebarContent, {
    borderRadius: "0",
    borderWidth: "0",
    elevation: 5,
    margin: "0",
    padding: "30px 30px 10px"
  }, renderSidebarOptions(), renderSidebarButtons(), renderSidebarPaginator()));
}

Sidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  buttons: _propTypes.default.array,
  checkBox: _propTypes.default.node,
  handlers: _propTypes.default.objectOf(_propTypes.default.func),
  options: _propTypes.default.array,
  paginator: _propTypes.default.array
} : {};
Sidebar.defaultProps = {
  buttons: null,
  checkBox: null,
  handlers: null,
  options: null,
  paginator: null
};
var _default = Sidebar;
exports.default = _default;