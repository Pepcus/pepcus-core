import React from 'react';
import PropTypes from 'prop-types';

import SvgIcon from '../SvgIcon';

const GearIcon = ({ setRef, ...rest }) => (
    <SvgIcon {...rest} ref={setRef}>
        {/* <path d="M19.43,12.97L21.54,14.63C21.73,14.78 21.78,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.03 19.05,18.95L16.56,17.94C16.04,18.34 15.5,18.67 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.78,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,12.97M6.5,12C6.5,12.58 6.59,13.13 6.75,13.66L4.68,15.36L5.43,16.66L7.95,15.72C8.69,16.53 9.68,17.12 10.8,17.37L11.24,20H12.74L13.18,17.37C14.3,17.13 15.3,16.54 16.05,15.73L18.56,16.67L19.31,15.37L17.24,13.67C17.41,13.14 17.5,12.58 17.5,12C17.5,11.43 17.41,10.87 17.25,10.35L19.31,8.66L18.56,7.36L16.06,8.29C15.31,7.47 14.31,6.88 13.19,6.63L12.75,4H11.25L10.81,6.63C9.69,6.88 8.69,7.47 7.94,8.29L5.44,7.35L4.69,8.65L6.75,10.35C6.59,10.87 6.5,11.43 6.5,12M12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5Z" /> */}
        <path d="M556.133 591.467c-44 11.733-90 5.733-129.467-17.067s-67.733-59.6-79.467-103.6c-11.733-44-5.733-90 17.067-129.467s59.6-67.733 103.6-79.467c14.667-4 29.6-5.867 44.4-5.867 29.6 0 58.8 7.733 85.067 22.933 81.467 47.067 109.467 151.6 62.533 233.2-22.8 39.333-59.6 67.6-103.733 79.333zM576 315.867c-29.6-17.067-64.133-21.6-97.067-12.8-33.067 8.8-60.667 30-77.733 59.6s-21.6 64.133-12.8 97.067c8.8 33.067 30 60.667 59.6 77.733 19.733 11.333 41.6 17.2 63.733 17.2 11.067 0 22.267-1.467 33.333-4.4 33.067-8.8 60.667-30 77.733-59.6 35.333-61.067 14.267-139.6-46.8-174.8zM534.133 509.067c-22 5.867-45.067 2.933-64.8-8.533-19.733-11.333-33.867-29.733-39.733-51.867-5.867-22-2.933-45.067 8.533-64.8s29.733-33.867 51.867-39.733c7.333-2 14.8-2.933 22.267-2.933 14.8 0 29.333 3.867 42.533 11.467 19.733 11.333 33.867 29.733 39.733 51.867s2.933 45.067-8.533 64.8-29.867 33.867-51.867 39.733zM553.2 415.6c-2.933-11.067-10-20.267-19.867-25.867-9.867-5.733-21.333-7.2-32.4-4.267s-20.267 10-25.867 19.867-7.2 21.333-4.267 32.4 10 20.267 19.867 25.867c6.533 3.733 13.867 5.733 21.2 5.733 3.733 0 7.467-0.533 11.067-1.467 11.067-2.933 20.267-10 25.867-19.867s7.333-21.333 4.4-32.4zM945.467 324.134l-95.467 55.2c4.4 31.467 4.4 63.467 0.133 94.8l95.467 55.067c19.733 11.467 33.867 29.867 39.733 51.867s2.8 45.067-8.533 64.8l-42.667 73.867c-23.467 40.8-75.867 54.8-116.533 31.2l-95.467-55.067c-24.933 19.467-52.667 35.333-82.133 47.333v110.267c-0.133 47.067-38.4 85.2-85.333 85.2h-85.467c-22.667 0-44-8.8-60.133-24.933-16.267-16.133-25.067-37.6-25.067-60.4v-110.267c-14.667-6-28.933-12.933-42.667-20.8-13.733-8-26.933-16.8-39.333-26.4l-95.467 55.2c-19.733 11.467-42.8 14.533-64.8 8.533-22-5.867-40.4-20-51.733-39.733l-42.533-73.867c-23.733-40.667-9.733-92.933 31.067-116.667l95.6-55.2c-4.4-31.467-4.4-63.467-0.133-94.8l-95.467-55.2c-19.733-11.467-33.867-29.867-39.733-51.867s-2.8-45.067 8.533-64.8l42.667-73.867c23.467-40.8 75.867-54.8 116.533-31.2l95.6 55.2c24.933-19.467 52.667-35.333 82-47.333l-0.133-110.533c0.133-47.067 38.267-85.2 85.2-85.2h85.6c22.667 0 44 8.8 60.133 24.933s25.067 37.6 25.067 60.4l0.133 110.4c14.667 6 28.933 12.933 42.533 20.667 13.867 8 27.067 16.933 39.467 26.533l95.333-55.067c19.733-11.467 42.8-14.533 64.8-8.533 22 5.867 40.4 20 51.733 39.733l42.533 73.867c23.733 40.8 9.733 93.067-31.067 116.667zM469.333-0v0c0 0 0 0 0 0s0 0 0 0zM860.133 176.4l-121.333 70.267c-16.4 9.467-36.933 7.067-50.667-6-14.267-13.467-30.4-25.467-48-35.733-17.067-9.867-35.467-17.867-54.8-23.6-18-5.467-30.267-22-30.4-40.8l-0.267-140.533h-85.333l0.133 140.533c0 18.933-12.4 35.467-30.4 40.933-38.267 11.467-73.867 32-102.933 59.333-13.733 12.933-34.267 15.333-50.667 5.867l-121.6-70.267-42.667 73.867 121.6 70.267c16.4 9.467 24.533 28.533 20.133 46.933-9.333 38.533-9.2 79.6 0.133 118.533 4.4 18.4-3.733 37.467-20.133 46.933l-121.733 70.4 42.667 73.733 121.6-70.267c16.4-9.467 36.933-7.067 50.667 6 14.267 13.467 30.4 25.467 47.867 35.6 17.2 10 35.733 18 54.933 23.733 18 5.467 30.4 22 30.4 40.8v140.4h85.333v-140.4c0-18.8 12.4-35.467 30.4-40.933 38.267-11.467 73.867-32 102.933-59.333 13.733-12.933 34.267-15.333 50.533-5.867l121.6 70.133 42.667-73.867-121.6-70.133c-16.4-9.467-24.533-28.533-20.133-46.933 9.333-38.533 9.2-79.6-0.133-118.533-4.4-18.4 3.733-37.467 20.133-46.933l121.733-70.4-42.667-73.733z" />
    </SvgIcon>
);

GearIcon.propTypes = {
    setRef : PropTypes.func,
    viewBox: PropTypes.string
};

GearIcon.defaultProps = {
    setRef : null,
    // viewBox: '0 0 24 24'
    viewBox: '0 0 1050 850'
};

export default GearIcon;
