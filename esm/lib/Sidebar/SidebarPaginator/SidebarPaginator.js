import PropTypes from 'prop-types';
import React from 'react';
import { Button, Divider, genID } from "../../..";
import styled from 'styled-components';
const SidebarPaginatorWrapper = styled.div.withConfig({
  displayName: "SidebarPaginator__SidebarPaginatorWrapper",
  componentId: "sc-1huby0v-0"
})(["position:absolute;bottom:0;display:flex;flex-direction:column;padding:10px 0 15px 0;width:240px;"]);
const ButtonsWrapper = styled.div.withConfig({
  displayName: "SidebarPaginator__ButtonsWrapper",
  componentId: "sc-1huby0v-1"
})(["display:flex;flex-direction:row;justify-content:space-between;"]);

function SidebarPaginator(props) {
  const config = props.config;
  return React.createElement(SidebarPaginatorWrapper, null, React.createElement(Divider, {
    color: "muted"
  }), React.createElement(ButtonsWrapper, null, config.map(conf => React.createElement(Button, {
    key: genID(),
    width: "110px",
    style: {
      minWidth: '110px'
    },
    color: conf.color
  }, conf.text))));
}

SidebarPaginator.propTypes = process.env.NODE_ENV !== "production" ? {
  config: PropTypes.array
} : {};
SidebarPaginator.defaultProps = {
  config: []
};
export default SidebarPaginator;