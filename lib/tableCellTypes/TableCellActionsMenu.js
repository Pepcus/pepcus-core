import PropTypes from 'prop-types';
import React from 'react';

import ActionsMenu from 'components/ActionsMenu';
import {replaceHandlerRefs} from 'utils/actions';

/**
 * Replace `onClick` handler refs with actual function calls.
 *
 * @method _addHandlersToMenuItems
 * @private
 * @param  {Array}                items    The list of menuItems
 * @param  {Object}               handlers The map of action handlers
 * @param  {Object}               row      The info about the current table row
 * @return {Array}
 */
function _addHandlersToMenuItems(items, handlers, row) {
    // `items` is an Array of Arrays.
    return items.map(
        // For each of the `item` in the `itemsList`,
        // replace the `onClick` handler with the function
        // from the passed in `handlers`, if present;
        // invoke that `onClick` function with the `row` data.
        itemsList => replaceHandlerRefs(itemsList, handlers, null, row)
    );
}

function TableCellActionsMenu(props) {
    const { cellProps: tableCellProps, handlers, row } = props;
    const { type, menuItems, ...actionsProps } = tableCellProps;
    // Update the `menuItems` by replacing `onClick` references with actual functions.
    const updatedMenuItems = _addHandlersToMenuItems(menuItems, handlers, row);
    // Return the built ActionsMenu Component.
    return (
        <ActionsMenu
            data={row}
            handlers={handlers}
            menuItems={updatedMenuItems}
            snapToButton
            {...actionsProps}
        />
    );
}

TableCellActionsMenu.propTypes = {
    cellProps: PropTypes.object,
    handlers : PropTypes.object,
    row      : PropTypes.object
};

TableCellActionsMenu.defaultProps = {
    cellProps: {},
    handlers : {},
    row      : {}
};

export default TableCellActionsMenu;
