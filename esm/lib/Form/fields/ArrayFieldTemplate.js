import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import styled from 'styled-components';
import Button from "../../Button";
import { ChevronIcon, TrashIcon } from "../../SvgIcon";
import { getThemeProps } from "../../../utils/theme";
import FormGroupTitle from "./FormGroupTitle";
const ArrayFieldTemplateStyled = styled.div.withConfig({
  displayName: "ArrayFieldTemplate__ArrayFieldTemplateStyled",
  componentId: "sc-1xpcqsi-0"
})(["", ";"], getThemeProps('ArrayFieldTemplate.styles'));
const ArrayFieldButtons = styled.div.withConfig({
  displayName: "ArrayFieldTemplate__ArrayFieldButtons",
  componentId: "sc-1xpcqsi-1"
})(["padding:10px 0;"]);

function ArrayFieldTemplate(props) {
  const canAdd = props.canAdd,
        formContext = props.formContext,
        idSchema = props.idSchema,
        items = props.items,
        onAddClick = props.onAddClick,
        required = props.required;

  const schemaId = _get(idSchema, '$id');

  const uiSchemaTitle = _get(props, ['uiSchema', 'ui:title']);

  const propsTitle = _get(props, 'title');

  const titleId = `${schemaId}__title`;

  const renderTitle = () => React.createElement(FormGroupTitle, {
    formContext: formContext,
    id: titleId,
    required: required,
    root: schemaId === 'root',
    title: propsTitle || uiSchemaTitle
  });

  return React.createElement(ArrayFieldTemplateStyled, null, renderTitle(), items.map(item => React.createElement("div", {
    key: item.index
  }, React.createElement("div", null, item.children), React.createElement(ArrayFieldButtons, null, item.hasMoveDown && React.createElement(Button, {
    noMinWidth: true,
    noPaddingY: true,
    onClick: item.onReorderClick(item.index, item.index + 1),
    style: {
      marginRight: '10px'
    },
    width: "47px"
  }, React.createElement(ChevronIcon, {
    direction: "down",
    style: {
      width: 25,
      height: 25
    }
  })), item.hasMoveUp && React.createElement(Button, {
    noMinWidth: true,
    noPaddingY: true,
    onClick: item.onReorderClick(item.index, item.index - 1),
    style: {
      marginRight: '10px'
    },
    width: "47px"
  }, React.createElement(ChevronIcon, {
    direction: "up",
    style: {
      width: 25,
      height: 25
    }
  })), React.createElement(Button, {
    noMinWidth: true,
    noPaddingY: true,
    onClick: item.onDropIndexClick(item.index),
    color: "error",
    width: "47px"
  }, ' ', React.createElement(TrashIcon, {
    style: {
      width: 25,
      height: 25
    }
  }))))), canAdd && React.createElement("div", null, React.createElement(Button, {
    onClick: onAddClick
  }, "Add Item")));
}

ArrayFieldTemplate.propTypes = process.env.NODE_ENV !== "production" ? {
  canAdd: PropTypes.bool,
  formContext: PropTypes.object,
  idSchema: PropTypes.object,
  items: PropTypes.array,
  onAddClick: PropTypes.func,
  required: PropTypes.bool
} : {};
ArrayFieldTemplate.defaultProps = {
  canAdd: false,
  formContext: null,
  idSchema: {},
  items: [],
  onAddClick: () => {},
  required: false
};
export default ArrayFieldTemplate;