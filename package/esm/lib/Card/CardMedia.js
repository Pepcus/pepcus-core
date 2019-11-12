import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import Box from "../Box";
const ImageWrapperStyled = styled.div.withConfig({
  displayName: "CardMedia__ImageWrapperStyled",
  componentId: "sc-1jyx2zi-0"
})(["position:relative;left:2px;width:64px;height:68px;overflow:hidden;"]);
/**
 * Renders media to card.
 *
 * @method          CardMedia
 * @param           {Object}        props
 * @constructor
 */

function CardMedia(props) {
  const alt = props.alt,
        children = props.children,
        src = props.src,
        imageStyle = props.imageStyle,
        rest = _objectWithoutProperties(props, ["alt", "children", "src", "imageStyle"]);

  return React.createElement(Box, Object.assign({
    padding: "2px",
    borderWidth: "0"
  }, rest), React.createElement(ImageWrapperStyled, null, React.createElement("img", {
    style: imageStyle,
    src: src,
    alt: alt
  })));
}

CardMedia.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   *  Alternate text.
   */
  alt: PropTypes.string.isRequired,

  /**
   *  Custom media.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Custom styling for <img/> element
   */
  imageStyle: PropTypes.object,

  /**
   *  Image source for <img/> element.
   */
  src: PropTypes.string.isRequired
} : {};
CardMedia.defaultProps = {
  children: null,
  className: '',
  imageStyle: {}
};
export default CardMedia;