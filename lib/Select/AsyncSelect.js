import PropTypes from 'prop-types';
import AsyncReactSelect from 'react-select/lib/Async';
import React from 'react';
import {withTheme} from 'styled-components';

import DropdownIndicator from './DropdownIndicator';
import getSelectStyles from './SelectStyles';

/**
 * Shallow wrapper around the `react-select`.
 *
 * @method      AsyncSelect
 * @param       {Object} props The props for the component.
 * @constructor
 */
function AsyncSelect(props) {
    const { components, theme, ...rest } = props;
    // Render a `ReactSelect` select options element.
    return (
        <AsyncReactSelect
            classNamePrefix="RavenSelect-Async"
            components={{ DropdownIndicator, ...components }}
            menuPlacement="auto"
            {...rest}
            styles={getSelectStyles(theme)}
        />
    );
}

AsyncSelect.propTypes = {
    components: PropTypes.object,
    theme     : PropTypes.object
};

AsyncSelect.defaultProps = {
    components: null,
    theme     : null
};

export default withTheme(AsyncSelect);
