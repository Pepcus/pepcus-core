import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { getThemeProps } from "../../../utils/theme";
const TitleFieldStyled = styled.label.withConfig({
  displayName: "TitleField__TitleFieldStyled",
  componentId: "sc-1sffnve-0"
})(["color:#848484;font-size:14px;font-weight:400;margin:0 0 10px 15px;padding:0;", ";", ";"], getThemeProps('TitleField.styles'), ({
  root,
  theme
}) => {
  const rootStyles = getThemeProps('TitleField.styles.root', null, {
    theme
  });
  return root ? rootStyles : null;
});

function TitleField(_ref) {
  let id = _ref.id,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, ["id", "title"]);

  return title && React.createElement(TitleFieldStyled, Object.assign({}, rest, {
    htmlFor: id
  }), title);
}

TitleField.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string,
  title: PropTypes.string
} : {};
TitleField.defaultProps = {
  id: null,
  title: null
};
export default TitleField;