import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import Row from "../../Row";
import FaIcon from "../../FaIcon";
import Tooltip from "../../Tooltip";
import Typography from "../../Typography";
import { getThemeProps } from "../../../utils/theme";
const FormGroupTitleStyled = styled.label.withConfig({
  displayName: "FormGroupTitle__FormGroupTitleStyled",
  componentId: "sc-1s6nfk8-0"
})(["align-items:baseline;color:#15191d;display:flex;font-size:14px;font-weight:400;justify-content:space-between;margin:0;padding:0 5px 7.5px 5px;", ";"], getThemeProps('FormGroupTitle.styles'));

function FormGroupTitle({
  id,
  required,
  title,
  helpText
}) {
  const _helpText$icon = helpText.icon,
        icon = _helpText$icon === void 0 ? {} : _helpText$icon,
        tooltip = _objectWithoutProperties(helpText, ["icon"]);

  return title && React.createElement(FormGroupTitleStyled, {
    htmlFor: id
  }, React.createElement(Row, {
    alignItems: "flex-start",
    gutter: false,
    margin: "0 5px 0 0",
    wrap: "nowrap"
  }, React.createElement("span", {
    style: {
      marginRight: 5
    }
  }, title), typeof helpText === 'object' && !_isEmpty(helpText) && React.createElement(Tooltip, tooltip, React.createElement(FaIcon, Object.assign({}, icon, {
    icon: faInfoCircle
  })))), required && React.createElement(Typography, {
    as: "span",
    color: "error",
    type: "required",
    gutterBottom: "0"
  }, "Required"));
}

FormGroupTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  helpText: PropTypes.object,
  id: PropTypes.string,
  title: PropTypes.string
} : {};
FormGroupTitle.defaultProps = {
  helpText: {},
  id: null,
  title: null
};
export default FormGroupTitle;