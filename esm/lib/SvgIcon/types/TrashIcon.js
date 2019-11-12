import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from "../SvgIcon";

const TrashIcon = (_ref) => {
  let setRef = _ref.setRef,
      rest = _objectWithoutProperties(_ref, ["setRef"]);

  return React.createElement(SvgIcon, Object.assign({}, rest, {
    ref: setRef
  }), React.createElement("path", {
    d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
  }));
};

TrashIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  setRef: PropTypes.func,
  viewBox: PropTypes.string
} : {};
TrashIcon.defaultProps = {
  setRef: null,
  viewBox: '0 0 24 24'
};
export default TrashIcon;