import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import _isFunction from 'lodash/isFunction';
import styled from 'styled-components';
import { genID } from "../../utils/generate";
import { getThemeProps } from "../../utils/theme";
import Item from "./Item";
import Key from "./Key";
import Value from "./Value";
const KeyValuePairsStyled = styled.ul.withConfig({
  displayName: "KeyValuePairs__KeyValuePairsStyled",
  componentId: "sc-1u1eota-0"
})(["align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start;list-style:none;margin:0;padding:0;", ";"], getThemeProps('KeyValuePairs.styles'));

const KeyValuePairs = ({
  items,
  itemKey,
  onItemClick,
  itemValue
}) => React.createElement(KeyValuePairsStyled, null, items.map((item, itemIdx) => {
  const theKey = _get(item, itemKey, itemKey);

  const theValue = _get(item, itemValue, itemValue);

  const onClick = _isFunction(onItemClick) ? () => onItemClick(item) : null;
  return React.createElement(Item, {
    key: genID('KeyItem'),
    onClick: onClick
  }, React.createElement(Key, null, theKey), React.createElement(Value, null, theValue));
}));

KeyValuePairs.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The `key` to extract from the item.
   * Key is inserted into the first column of the KeyValuePairs.
   */
  itemKey: PropTypes.string,

  /**
   * The `value` to extract from the item.
   * Value is inserted into the second column of the KeyValuePairs.
   *
   * @type {[type]}
   */
  itemValue: PropTypes.string,

  /**
   * The list of items for the KeyValuePairs
   */
  items: PropTypes.arrayOf(PropTypes.object).isRequired,

  /**
   * The `onClick` prop for the item.
   */
  onItemClick: PropTypes.func
} : {};
KeyValuePairs.defaultProps = {
  itemKey: '',
  onItemClick: null,
  itemValue: ''
};
export default KeyValuePairs;