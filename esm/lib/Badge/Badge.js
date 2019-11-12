import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Box from "../Box";
import Row from "../Row";
const BadgeStyled = styled(Box).withConfig({
  displayName: "Badge__BadgeStyled",
  componentId: "n53nq0-0"
})(["min-width:32px;text-align:center;"]);
const Badge = React.forwardRef((props, ref) => {
  const children = props.children,
        rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(BadgeStyled, Object.assign({
    borderRadius: "15px",
    borderWidth: "0",
    height: "auto",
    margin: "0",
    padding: "2px 5px"
  }, rest, {
    ref: ref
  }), React.createElement(Row, {
    alignItems: "center",
    justify: "center",
    gutter: false
  }, children));
});
Badge.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * The width for the Badge.
   */
  width: PropTypes.string
} : {};
Badge.defaultProps = {
  children: null,
  width: 'auto'
};
Badge.displayName = 'Badge';
export default Badge;