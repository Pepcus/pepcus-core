import React from 'react';
import { components } from 'react-select';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import FaIcon from "../FaIcon"; // Custom DropdownIndicator for the Select.

function DropdownIndicator(props) {
  return React.createElement(components.DropdownIndicator, props, React.createElement(FaIcon, {
    icon: faAngleDown,
    width: "17px",
    height: "17px"
  }));
}

export default DropdownIndicator;