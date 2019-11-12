import _objectSpread from "@babel/runtime/helpers/objectSpread";
import PropTypes from 'prop-types';
import React from 'react';
import Box from "../Box";

function Toolbar(props) {
  // Define the default `Box` props for the Toolbar.
  const boxProps = _objectSpread({
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: '0',
    borderWidth: '0',
    padding: '16px 0'
  }, props); // Render the `Box` with the updated props.


  return React.createElement(Box, boxProps);
}

Toolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The children to render inside the Toolbar.
   * Usually a couple of `Rows` with `Cols` and inner components.
   */
  children: PropTypes.node
} : {};
Toolbar.defaultProps = {
  children: null
};
export default Toolbar;