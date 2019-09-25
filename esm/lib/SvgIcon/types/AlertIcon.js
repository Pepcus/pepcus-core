import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from "../SvgIcon";

const AlertIcon = (_ref) => {
  let setRef = _ref.setRef,
      rest = _objectWithoutProperties(_ref, ["setRef"]);

  return React.createElement(SvgIcon, Object.assign({}, rest, {
    ref: setRef
  }), React.createElement("path", {
    d: "M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
  }));
};

AlertIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  setRef: PropTypes.func,
  viewBox: PropTypes.string
} : {};
AlertIcon.defaultProps = {
  setRef: null,
  viewBox: '0 0 24 24'
};
export default AlertIcon;