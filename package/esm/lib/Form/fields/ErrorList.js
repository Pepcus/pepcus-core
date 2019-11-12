import PropTypes from 'prop-types';
import React from 'react';
import List from "../../List";
import ListItem from "../../ListItem";
import Typography from "../../Typography";

function ErrorList({
  errors
}) {
  // Remove the 'is a required property' error,
  // since we're displaying a `REQUIRED` label per field.
  const filteredErrors = errors ? errors.filter(e => !e.includes('is a required property') && !e.startsWith('should be')) : []; // Don't render the error list if there aren't any errors present.

  if (filteredErrors.length === 0) {
    return null;
  } // Render the list of errors.


  return React.createElement(List, {
    backgroundColor: "transparent",
    margin: "10px 0",
    borderWidth: "0"
  }, filteredErrors.map(error => React.createElement(ListItem, {
    backgroundColor: "transparent",
    borderWidth: "0",
    key: error,
    margin: "0",
    padding: "2.5px 5px"
  }, React.createElement(Typography, {
    color: "error",
    gutterBottom: "0"
  }, error))));
}

ErrorList.propTypes = process.env.NODE_ENV !== "production" ? {
  errors: PropTypes.array
} : {};
ErrorList.defaultProps = {
  errors: null
};
export default ErrorList;