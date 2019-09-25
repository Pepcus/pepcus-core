import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import FaIcon from "../FaIcon";
import Modal from "../Modal";
import Row from "../Row";
import Typography from "../Typography";
import LoadingIcon from "./LoadingIcon";
import LoadingModalContent from "./LoadingModalContent";
/**
 * A Loading component that gets attached to the `document.body`
 *
 * @method      Loading
 * @param       {Object} props
 * @constructor
 */

function Loading(props) {
  const BackdropProps = props.BackdropProps,
        animate = props.animate,
        color = props.color,
        icon = props.icon,
        loading = props.loading,
        noIcon = props.noIcon,
        noUpperCase = props.noUpperCase,
        text = props.text,
        rest = _objectWithoutProperties(props, ["BackdropProps", "animate", "color", "icon", "loading", "noIcon", "noUpperCase", "text"]); // Build the loading text.


  const loadingText = text && (noUpperCase ? text : text.toUpperCase()) || 'loading';
  return React.createElement(Modal, Object.assign({
    BackdropProps: _objectSpread({
      color: 'loading',
      opacity: 0.8
    }, BackdropProps),
    ContentComponent: LoadingModalContent,
    open: loading
  }, rest), React.createElement(Row, {
    alignItems: "center",
    gutter: false,
    justify: "flex-start",
    width: "100%",
    wrap: "nowrap"
  }, !noIcon && React.createElement(LoadingIcon, {
    animate: animate
  }, React.createElement(FaIcon, Object.assign({
    color: color,
    icon: "cog",
    height: "25px",
    width: "25px"
  }, icon))), React.createElement(Typography, {
    color: color,
    gutterBottom: "0",
    gutterLeft: !noIcon && '10px',
    gutterTop: "0",
    type: "title"
  }, loadingText)));
}

Loading.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Additional props for the internally rendered `Backdrop` Component.
   */
  BackdropProps: PropTypes.object,

  /**
   * If `true`, the loading icon will animate (rotate 360 degrees).
   */
  animate: PropTypes.bool,

  /**
   * Set the color of the internal `Typography` and `FaIcon` Component.
   *
   * Color(s) can be set in `theme.palette`.
   */
  color: PropTypes.string,

  /**
   * Additional props for the internally rendered `FaIcon` Component.
   */
  icon: PropTypes.object,

  /**
   * If `true`, the loading modal will show.
   */
  loading: PropTypes.bool,

  /**
   * If `true`, the loading icon won't be rendered.
   */
  noIcon: PropTypes.bool,

  /**
   * If `true`, the loading text will not be upper cased.
   */
  noUpperCase: PropTypes.bool,

  /**
   * The loading text to display next to the loading icon.
   */
  text: PropTypes.string
} : {};
Loading.defaultProps = {
  BackdropProps: null,
  animate: true,
  color: '#0C518A',
  icon: null,
  loading: false,
  noIcon: false,
  noUpperCase: false,
  text: 'loading'
};
export default Loading;