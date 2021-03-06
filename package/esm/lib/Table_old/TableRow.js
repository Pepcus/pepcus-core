import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import styled from 'styled-components';
import compose from 'recompose/compose';
import { getThemeProps } from "../../utils/theme";
import { withActionHandlers } from "../bindings";
import withTableContext from "./withTableContext";
const TableRowStyled = styled.tr.withConfig({
  displayName: "TableRow__TableRowStyled",
  componentId: "sc-157gb8k-0"
})(["color:inherit;display:block;outline:none;vertical-align:middle;", ";", ";"], ({
  theme
}) => theme.media.up('sm')`
        display: table-row
    `, ({
  orientation,
  selected,
  theme,
  zebra
}) => {
  const selectedStyles = selected ? getThemeProps('TableRow.styles.selected', null, {
    theme
  }) : {};
  const zebraStyles = zebra ? getThemeProps('TableRow.styles.zebra', null, {
    theme
  }) : {};
  return _objectSpread({}, getThemeProps('TableRow.styles', null, {
    theme
  }), zebraStyles, selectedStyles, {
    // If the orientation is in 'portrait' mode,
    // then force the display to be 'block'
    display: _get(orientation, 'mode') === 'portrait' && 'block !important'
  });
});
TableRowStyled.propTypes = {
  /**
   * If the table row should stand out from the rest.
   */
  selected: PropTypes.bool,

  /**
   * If the table row should be zebra styled.
   */
  zebra: PropTypes.bool
};
TableRowStyled.defaultProps = {
  selected: false,
  zebra: false
};

const TableRow = props => {
  const setRef = props.setRef,
        onSelection = props.onSelection,
        handlers = props.handlers,
        data = props.data,
        rest = _objectWithoutProperties(props, ["setRef", "onSelection", "handlers", "data"]);

  const updatedProps = _objectSpread({}, rest, {
    ref: setRef,
    onSelect: onSelection && handlers[onSelection]
  });

  return React.createElement(TableRowStyled, updatedProps);
};

TableRow.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The main data for the Table.
   */
  data: PropTypes.array,

  /**
   * Any external action handlers.
   */
  handlers: PropTypes.object,

  /**
   * Callback fired upon selecting a row
   */
  onSelection: PropTypes.string,

  /**
   * Set the ref attribute on the current table cell
   */
  setRef: PropTypes.object
} : {};
TableRow.defaultProps = {
  data: [],
  handlers: null,
  onSelection: null,
  setRef: null
};
export default compose(withTableContext, withActionHandlers)(TableRow);