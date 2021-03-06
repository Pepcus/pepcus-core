import PropTypes from 'prop-types';
import React from 'react';
import Typography from "../Typography";
/**
 * A simple anchor link component.
 * NOTE: Uses `Typography` component underneath.
 *
 * @constructor
 */

const Link = React.forwardRef((props, ref) => {
  return React.createElement(Typography, Object.assign({
    gutterBottom: "0"
  }, props, {
    ref: ref
  }));
});
Link.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the link.
   */
  children: PropTypes.node.isRequired,

  /**
   * Set theme styled colors and styling to the underneath `Typography` component.
   */
  type: PropTypes.string
} : {};
Link.defaultProps = {
  type: 'link'
};
Link.displayName = 'Link';
export default Link;