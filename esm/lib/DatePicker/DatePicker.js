import PropTypes from 'prop-types';
import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker(props) {
  const onBlur = props.onBlur,
        onChange = props.onChange,
        onSelect = props.onSelect,
        selected = props.selected;
  return React.createElement(ReactDatePicker, {
    onBlur: onBlur,
    onChange: onChange,
    onSelect: onSelect,
    selected: selected
  });
}

DatePicker.propTypes = process.env.NODE_ENV !== "production" ? {
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onSelect: PropTypes.func,
  selected: PropTypes.instanceOf(Date)
} : {};
DatePicker.defaultProps = {
  onBlur: null,
  onChange: null,
  onSelect: null,
  selected: ''
};
export default DatePicker;