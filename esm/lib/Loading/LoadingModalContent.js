import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import Box from "../Box";

function LoadingModalContent(props) {
  const style = props.style,
        rest = _objectWithoutProperties(props, ["style"]); // Build some styles for the `Box` Component.


  const boxStyles = _objectSpread({
    minWidth: '230px',
    maxWidth: '500px'
  }, style); // Build the Loading Modal Content.


  return React.createElement(Box, Object.assign({
    elevation: 5,
    margin: "0 auto",
    padding: "30px",
    style: boxStyles,
    width: "auto"
  }, rest));
}

LoadingModalContent.propTypes = process.env.NODE_ENV !== "production" ? {
  style: PropTypes.object
} : {};
LoadingModalContent.defaultProps = {
  style: null
};
export default LoadingModalContent;