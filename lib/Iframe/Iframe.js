import PropTypes from 'prop-types';
import React from 'react';
import styled, {css} from 'styled-components';

import {themeGet} from 'utils/theme';

const LoadingText = styled.div`
    padding: 20px;
    font-weight: bold;
`;

const IframeStyled = styled.iframe`
    /**
     * Add dynamic styles to the iframe component.
     */
    ${({ height, margin, padding, position, width }) => css`
        border: none;
        height: ${height || '100%'};
        margin: ${margin || 0};
        padding: ${padding || 0};
        position: ${position};
        width: ${width || '100%'};
    `};
    /**
     * Add all of the remaining styles from theme
     */
    ${themeGet('Iframe.styles')};
`;

/**
 * A simple iframe component.
 *
 * @method      Iframe
 * @param       {Object} props The props for the component
 * @constructor
 */
class Iframe extends React.Component {
    state = {
        isLoading: true
    };

    renderLoadingMessage = () => {
        const { isLoading } = this.state;
        return isLoading ? <LoadingText className="text-center">Loading...</LoadingText> : null;
    };

    render() {
        return (
            <div>
                {this.renderLoadingMessage()}
                <IframeStyled
                    {...this.props}
                    onLoad={() => {
                        this.setState(() => ({ isLoading: false }));
                    }}
                />
            </div>
        );
    }
}

Iframe.propTypes = {
    /**
     * Set the `height` css property.
     */
    height  : PropTypes.string,
    /**
     * Set the `margin` css property.
     */
    margin  : PropTypes.string,
    /**
     * Set the `padding` css property.
     */
    padding : PropTypes.string,
    /**
     * Set the `position` css property.
     */
    position: PropTypes.string,
    /**
     * The URL of the page to embed.
     */
    src     : PropTypes.string.isRequired,
    /**
     * The title of the iframe.
     */
    title   : PropTypes.string.isRequired,
    /**
     * Set the `width` css property.
     */
    width   : PropTypes.string
};

Iframe.defaultProps = {
    height  : null,
    margin  : null,
    padding : null,
    position: null,
    width   : null
};

export default Iframe;
