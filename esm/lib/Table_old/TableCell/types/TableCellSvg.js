import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import SvgIcon from "../../../SvgIcon";

const TableCellSvg = props => {
  const setRef = props.setRef,
        cellProps = props.cellProps;

  const iconType = _get(cellProps, 'value');

  if (SvgIcon.types[iconType]) {
    const Icon = SvgIcon.types[iconType];
    return React.createElement(Icon, {
      setRef: setRef,
      style: {
        width: 22,
        height: 22
      }
    });
  }

  return null;
};

TableCellSvg.propTypes = process.env.NODE_ENV !== "production" ? {
  cellProps: PropTypes.object,
  setRef: PropTypes.object
} : {};
TableCellSvg.defaultProps = {
  cellProps: {},
  setRef: null
};
export default TableCellSvg;