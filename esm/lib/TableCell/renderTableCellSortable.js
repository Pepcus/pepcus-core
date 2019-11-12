import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import { ArrowIcon } from "../SvgIcon";

function TableCellSortIcon(props) {
  const sortSchema = props.sortSchema,
        col = props.col;
  return _get(sortSchema, 'orderBy') === (col.sortId || col.id) ? React.createElement(ArrowIcon, {
    width: "18px",
    height: "18px"
  }) : null;
}

TableCellSortIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  sortSchema: PropTypes.object,
  col: PropTypes.object
} : {};
TableCellSortIcon.defaultProps = {
  sortSchema: null,
  col: null
};

function renderTableCellSortable(props, Component) {
  const children = props.children,
        rest = _objectWithoutProperties(props, ["children"]);

  return React.createElement(Component, rest, _get(props, 'sortSchema.iconPosition') === 'left' ? TableCellSortIcon(props) : null, children, _get(props, 'sortSchema.iconPosition') === 'left' ? null : TableCellSortIcon(props));
}

renderTableCellSortable.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node
} : {};
renderTableCellSortable.defaultProps = {
  children: null
};
export default renderTableCellSortable;