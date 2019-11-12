import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _omit from 'lodash/omit';
import { ButtonLink } from "../Button";

function TableCellLink(props) {
  const col = props.col,
        setRef = props.setRef,
        row = props.row,
        cellProps = props.cellProps; // for some reason, link doesn't like `as`

  const _cellProps = _omit(cellProps, ['as']);

  return React.createElement(ButtonLink, Object.assign({
    ref: setRef
  }, _cellProps), _get(row, cellProps.key) || _get(row, col.id) || _get(cellProps, 'value'));
}

TableCellLink.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: PropTypes.object,
  col: PropTypes.object,
  setRef: PropTypes.object,
  row: PropTypes.object
} : {};
TableCellLink.defaultProps = {
  cellProps: {},
  col: {},
  setRef: null,
  row: {}
};
export default TableCellLink;