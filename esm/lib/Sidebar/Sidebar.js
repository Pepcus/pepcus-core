import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Box, Button, Divider } from "./..";
import { genID } from "../../utils";
import SidebarOption from "./SidebarOption";
import SidebarPaginator from "./SidebarPaginator";
import SidebarDisclaimer from "./SidebarDisclaimer";
import SidebarHelpText from "./SidebarHelpText";
const SidebarContainer = styled.div.withConfig({
  displayName: "Sidebar__SidebarContainer",
  componentId: "sc-1lg7nq1-0"
})(["position:fixed;top:124px;right:0;bottom:0;background:#fff;width:300px;.impersonating &{top:180px;}"]);
const SidebarContent = styled(Box).withConfig({
  displayName: "Sidebar__SidebarContent",
  componentId: "sc-1lg7nq1-1"
})(["border-left:1px solid #eaeaea !important;bottom:0;display:flex;flex-direction:column;overflow-y:auto;position:absolute;right:0;top:0;"]);
const DividerStyled = styled(Divider).withConfig({
  displayName: "Sidebar__DividerStyled",
  componentId: "sc-1lg7nq1-2"
})(["margin:20px -10px;width:calc(100% + 20px);"]);

function Sidebar(props) {
  const buttons = props.buttons,
        checkBox = props.checkBox,
        handlers = props.handlers,
        options = props.options,
        paginator = props.paginator;

  function renderSidebarButtons() {
    if (buttons) {
      return buttons.map((_ref) => {
        let _ref$acl = _ref.acl,
            acl = _ref$acl === void 0 ? true : _ref$acl,
            onClick = _ref.onClick,
            disclaimer = _ref.disclaimer,
            helpText = _ref.helpText,
            label = _ref.label,
            hideDivider = _ref.hideDivider,
            btnProps = _objectWithoutProperties(_ref, ["acl", "onClick", "disclaimer", "helpText", "label", "hideDivider"]);

        return acl && React.createElement("div", {
          key: genID()
        }, React.createElement(SidebarDisclaimer, {
          disclaimer: disclaimer
        }), React.createElement(Button, Object.assign({}, btnProps, {
          key: genID(),
          width: "100%",
          onClick: onClick
        }), label), checkBox, React.createElement(SidebarHelpText, {
          helpText: helpText
        }), React.createElement(DividerStyled, {
          color: "muted",
          transparent: hideDivider
        }));
      });
    }

    return null;
  }

  function renderSidebarPaginator() {
    return paginator && React.createElement(SidebarPaginator, {
      config: paginator
    });
  }

  function renderSidebarOptions() {
    if (options) {
      return React.createElement(Box, {
        borderWidth: "0",
        padding: "15px",
        margin: "0"
      }, options.map(option => React.createElement(SidebarOption, Object.assign({
        key: genID()
      }, option, {
        handlers: handlers
      }))), React.createElement(DividerStyled, {
        color: "muted"
      }));
    }

    return null;
  }

  return React.createElement(SidebarContainer, null, React.createElement(SidebarContent, {
    borderRadius: "0",
    borderWidth: "0",
    elevation: 5,
    margin: "0",
    padding: "30px 30px 10px"
  }, renderSidebarOptions(), renderSidebarButtons(), renderSidebarPaginator()));
}

Sidebar.propTypes = process.env.NODE_ENV !== "production" ? {
  buttons: PropTypes.array,
  checkBox: PropTypes.node,
  handlers: PropTypes.objectOf(PropTypes.func),
  options: PropTypes.array,
  paginator: PropTypes.array
} : {};
Sidebar.defaultProps = {
  buttons: null,
  checkBox: null,
  handlers: null,
  options: null,
  paginator: null
};
export default Sidebar;