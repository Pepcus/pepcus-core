import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import styled from 'styled-components';
import { getThemeProps } from "../../../utils/theme";
import FormGroupTitle from "./FormGroupTitle";
import ErrorList from "./ErrorList";
const FormGroupStyled = styled.div.withConfig({
  displayName: "FormGroup__FormGroupStyled",
  componentId: "sc-8rje2l-0"
})(["margin-bottom:", ";", ";"], ({
  isGroup
}) => !isGroup && '15px', getThemeProps('FormGroup.styles'));

function FormGroup(props) {
  const children = props.children,
        classNames = props.classNames,
        description = props.description,
        displayLabel = props.displayLabel,
        help = props.help,
        id = props.id,
        label = props.label,
        rawErrors = props.rawErrors,
        required = props.required,
        schema = props.schema;
  const type = schema.type;
  const descriptionPosition = schema.descriptionPosition || 'bottom';
  const isFormGroup = schema.formGroup || false;

  const titleHelptext = _get(schema, 'helpText');

  const labelString = `${label}`;

  const renderLabel = () => !isFormGroup && displayLabel && type !== 'boolean' && React.createElement(FormGroupTitle, {
    helpText: titleHelptext,
    id: id,
    required: required,
    title: labelString
  });

  const renderDescriptionTop = () => id !== 'root' && descriptionPosition === 'top' && description;

  const renderDescriptionBottom = () => id !== 'root' && descriptionPosition === 'bottom' && description;

  return React.createElement(FormGroupStyled, {
    isGroup: isFormGroup,
    className: classNames,
    type: type
  }, renderLabel(), renderDescriptionTop(), children, renderDescriptionBottom(), React.createElement(ErrorList, {
    errors: rawErrors
  }), help);
}

FormGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  classNames: PropTypes.string,
  description: PropTypes.element,
  displayLabel: PropTypes.bool,
  help: PropTypes.element,
  id: PropTypes.string,
  label: PropTypes.string,
  rawErrors: PropTypes.array,
  required: PropTypes.bool,
  schema: PropTypes.object
} : {};
FormGroup.defaultProps = {
  children: null,
  classNames: '',
  description: null,
  displayLabel: true,
  help: null,
  id: null,
  label: null,
  rawErrors: null,
  required: false,
  schema: {}
};
export default FormGroup;