import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { themeGet } from "../../utils/theme";
const LoadingText = styled.div.withConfig({
  displayName: "Iframe__LoadingText",
  componentId: "m40dpk-0"
})(["padding:20px;font-weight:bold;"]);
const IframeStyled = styled.iframe.withConfig({
  displayName: "Iframe__IframeStyled",
  componentId: "m40dpk-1"
})(["", ";", ";"], ({
  height,
  margin,
  padding,
  position,
  width
}) => css(["border:none;height:", ";margin:", ";padding:", ";position:", ";width:", ";"], height || '100%', margin || 0, padding || 0, position, width || '100%'), themeGet('Iframe.styles'));
/**
 * A simple iframe component.
 *
 * @method      Iframe
 * @param       {Object} props The props for the component
 * @constructor
 */

class Iframe extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      isLoading: true
    };

    this.renderLoadingMessage = () => {
      const isLoading = this.state.isLoading;
      return isLoading ? React.createElement(LoadingText, {
        className: "text-center"
      }, "Loading...") : null;
    };
  }

  render() {
    return React.createElement("div", null, this.renderLoadingMessage(), React.createElement(IframeStyled, Object.assign({}, this.props, {
      onLoad: () => {
        this.setState(() => ({
          isLoading: false
        }));
      }
    })));
  }

}

Iframe.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Set the `height` css property.
   */
  height: PropTypes.string,

  /**
   * Set the `margin` css property.
   */
  margin: PropTypes.string,

  /**
   * Set the `padding` css property.
   */
  padding: PropTypes.string,

  /**
   * Set the `position` css property.
   */
  position: PropTypes.string,

  /**
   * The URL of the page to embed.
   */
  src: PropTypes.string.isRequired,

  /**
   * The title of the iframe.
   */
  title: PropTypes.string.isRequired,

  /**
   * Set the `width` css property.
   */
  width: PropTypes.string
} : {};
Iframe.defaultProps = {
  height: null,
  margin: null,
  padding: null,
  position: null,
  width: null
};
export default Iframe;