import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';

import {ArrowIcon} from 'lib/SvgIcon';

function TableCellSortIcon(props) {
    const { sortSchema, col } = props;

    return _get(sortSchema, 'orderBy') === (col.sortId || col.id) ? (
        <ArrowIcon width="18px" height="18px" />
    ) : null;
}

TableCellSortIcon.propTypes = {
    sortSchema: PropTypes.object,
    col       : PropTypes.object
};

TableCellSortIcon.defaultProps = {
    sortSchema: null,
    col       : null
};

function renderTableCellSortable(props, Component) {
    const { children, ...rest } = props;

    return (
        <Component {...rest}>
            {_get(props, 'sortSchema.iconPosition') === 'left' ? TableCellSortIcon(props) : null}
            {children}
            {_get(props, 'sortSchema.iconPosition') === 'left' ? null : TableCellSortIcon(props)}
        </Component>
    );
}

renderTableCellSortable.propTypes = {
    children: PropTypes.node
};

renderTableCellSortable.defaultProps = {
    children: null
};

export default renderTableCellSortable;
