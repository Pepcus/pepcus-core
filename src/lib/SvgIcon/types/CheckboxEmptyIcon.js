import PropTypes from 'prop-types';
import React from 'react';

import SvgIcon from '../SvgIcon';

const CheckboxEmptyIcon = ({ setRef, ...rest }) => (
    <SvgIcon {...rest} ref={setRef}>
        <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" />
    </SvgIcon>
);

CheckboxEmptyIcon.propTypes = {
    setRef : PropTypes.func,
    viewBox: PropTypes.string
};

CheckboxEmptyIcon.defaultProps = {
    setRef : null,
    viewBox: '0 0 24 24'
};

export default CheckboxEmptyIcon;
