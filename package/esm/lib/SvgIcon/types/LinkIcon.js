import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from "../SvgIcon";

const LinkIcon = (_ref) => {
  let setRef = _ref.setRef,
      rest = _objectWithoutProperties(_ref, ["setRef"]);

  return React.createElement(SvgIcon, Object.assign({}, rest, {
    ref: setRef
  }), React.createElement("path", {
    d: "M13.05 16.11l-3.549-3.55.977-.976.594.595a.78.78 0 0 0 1.107 0 .783.783 0 0 0 0-1.107l-.595-.595.977-.976 3.55 3.55-3.06 3.06zM5.44 8.5L1.89 4.95l3.06-3.06L8.5 5.44l-.978.977-.594-.595A.783.783 0 0 0 5.82 6.928l.595.594-.977.977zm12.33 3.999L13.115 7.84a.783.783 0 0 0-1.107 0l-1.53 1.53L8.63 7.522l1.53-1.53a.783.783 0 0 0 0-1.106L5.503.229a.782.782 0 0 0-1.107 0L.23 4.395a.783.783 0 0 0 0 1.107l4.657 4.657a.78.78 0 0 0 1.107 0l1.53-1.53 1.848 1.849-1.53 1.53a.783.783 0 0 0 0 1.106l4.656 4.657a.783.783 0 0 0 1.107 0l4.167-4.167a.783.783 0 0 0 0-1.106z",
    fillRule: "evenodd"
  }));
};

LinkIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  viewBox: PropTypes.string
} : {};
LinkIcon.defaultProps = {
  viewBox: '0 0 18 18'
};
export default LinkIcon;