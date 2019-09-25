import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Button from "../Button";
import Typography from "../Typography";
import { genID } from "../../utils/generate";
import { getThemeProps } from "../../utils/theme";
const FormActionsSingle = styled.div.withConfig({
  displayName: "FormActions__FormActionsSingle",
  componentId: "iprc1p-0"
})(["", ";"], getThemeProps('FormActionsSingle.styles'));
const FormActionsTitle = styled.div.withConfig({
  displayName: "FormActions__FormActionsTitle",
  componentId: "iprc1p-1"
})(["margin:10px 0;", ";"], getThemeProps('FormActionsTitle.styles'));
const FormActionsStyled = styled.div.withConfig({
  displayName: "FormActions__FormActionsStyled",
  componentId: "iprc1p-2"
})(["align-items:center;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;margin:25px 0;", "{margin-right:10px;&:last-of-type{margin-right:0;}}", " ", ";"], FormActionsSingle, ({
  hideActions
}) => hideActions && {
  display: 'none'
}, getThemeProps('FormActions.styles'));

const renderDesc = desc => React.createElement(Typography, null, desc);

const renderDescTop = (desc, pos) => desc && pos === 'top' && renderDesc(desc);

const renderDescBottom = (desc, pos) => desc && pos === 'bottom' && renderDesc(desc);

function FormActions({
  actions,
  disabled,
  hideActions,
  title
}) {
  return disabled ? React.createElement(FormActionsStyled, {
    hideActions: hideActions
  }) : React.createElement(FormActionsStyled, {
    hideActions: hideActions
  }, title && React.createElement(FormActionsTitle, null, React.createElement(Typography, {
    type: "subheading"
  }, title)), actions.map(action => {
    const description = action.description,
          descriptionPosition = action.descriptionPosition,
          rest = _objectWithoutProperties(action, ["description", "descriptionPosition"]);

    return React.createElement(FormActionsSingle, {
      key: genID()
    }, renderDescTop(description, descriptionPosition), React.createElement(Button, Object.assign({
      key: genID()
    }, rest)), renderDescBottom(description, descriptionPosition));
  }));
}

FormActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A list of action buttons for the form
   */
  actions: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.node,
    color: PropTypes.string,
    description: PropTypes.node,
    descriptionPosition: PropTypes.oneOf(['top', 'bottom']),
    onClick: PropTypes.func,
    type: PropTypes.string
  })),

  /**
   * Disable the actions and display an empty `div`.
   */
  disabled: PropTypes.bool,

  /**
   * If the actions should be hidden but still function
   */
  hideActions: PropTypes.bool,

  /**
   * A title for the form actions group
   */
  title: PropTypes.string
} : {};
FormActions.defaultProps = {
  actions: [],
  disabled: null,
  hideActions: false,
  title: ''
};
export default FormActions;