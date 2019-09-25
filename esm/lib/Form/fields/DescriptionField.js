import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Typography from "../../Typography";
import { themeGet } from "../../../utils/theme";
const DescriptionFieldStyled = styled(Typography).withConfig({
  displayName: "DescriptionField__DescriptionFieldStyled",
  componentId: "sc-1n0iax0-0"
})(["", ";", ";"], themeGet('DescriptionField.styles'), ({
  root,
  theme
}) => {
  const rootStyles = themeGet('DescriptionField.styles.root', null)({
    theme
  });
  return root ? rootStyles : null;
});

function DescriptionField(props) {
  const id = props.id,
        description = props.description,
        rest = _objectWithoutProperties(props, ["id", "description"]); // If description is not available, don't render.


  if (!description) {
    return null;
  } // Otherwise, render the regular description.


  return React.createElement(DescriptionFieldStyled, Object.assign({
    color: "#848484",
    gutterBottom: "0",
    gutterLeft: "5px",
    gutterRight: "5px",
    gutterTop: "10px"
  }, rest, {
    htmlFor: id
  }), description);
}

DescriptionField.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string,
  description: PropTypes.string
} : {};
DescriptionField.defaultProps = {
  id: null,
  description: null
};
export default DescriptionField;