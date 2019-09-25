"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _theme = require("../../utils/theme");

var PopoverContent = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "PopoverContent",
  componentId: "sc-1ohqckc-0"
})(["", ";&:before{background-color:", ";border-color:", ";", ";}", ";"], function (_ref) {
  var color = _ref.color,
      maxWidth = _ref.maxWidth,
      theme = _ref.theme;
  return (0, _styledComponents.css)(["background-color:", ";color:", ";margin:0;max-width:", ";position:relative;"], (0, _theme.themeGet)("palette.".concat(color, ".color"), color), (0, _theme.themeGet)("palette.".concat(color, ".text"), '#FFFFFF'), maxWidth);
}, (0, _theme.themeGet)('palette.common.white'), (0, _theme.themeGet)('palette.common.lighter'), function (_ref2) {
  var arrowSize = _ref2.arrowSize,
      backgroundColor = _ref2.backgroundColor,
      borderColor = _ref2.borderColor,
      borderRadius = _ref2.borderRadius,
      borderStyle = _ref2.borderStyle,
      borderWidth = _ref2.borderWidth,
      boxShadow = _ref2.boxShadow,
      elevation = _ref2.elevation,
      elevationDirection = _ref2.elevationDirection;
  return (0, _styledComponents.css)(["background-color:", ";border-color:", ";border-radius:", ";border-style:", ";border-width:", ";box-shadow:", ";content:'';height:", "px;pointer-events:none;position:absolute;transform:rotate(-45deg);width:", "px;"], (0, _theme.themeGet)("palette.".concat(backgroundColor, ".color"), backgroundColor), (0, _theme.themeGet)("palette.".concat(borderColor, ".color"), borderColor), borderRadius || '4px', borderStyle || 'solid', borderWidth || '1px', (0, _theme.themeGet)("shadows[".concat(elevationDirection, "][").concat(elevation, "]"), boxShadow), arrowSize * 2, arrowSize * 2);
}, function (_ref3) {
  var anchorRef = _ref3.anchorRef,
      arrowSize = _ref3.arrowSize,
      boundToAnchor = _ref3.boundToAnchor,
      color = _ref3.color,
      marginProps = _ref3.distanceFromContainer,
      placement = _ref3.placement,
      theme = _ref3.theme;
  var bgColor = (0, _theme.themeGet)("palette.".concat(color, ".color"), '#2D2D2D')({
    theme: theme
  });
  var margin = marginProps + arrowSize;
  var anchorRect = anchorRef && anchorRef.getBoundingClientRect();
  var _anchorRect$height = anchorRect.height,
      anchorRectHeight = _anchorRect$height === void 0 ? 0 : _anchorRect$height;

  switch (placement) {
    case 'top-start':
      {
        return {
          transformOrigin: 'center bottom',
          top: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            left: "".concat(arrowSize * 3, "px"),
            marginLeft: "-".concat(arrowSize, "px"),
            top: "calc(100% - ".concat(arrowSize, "px)")
          }
        };
      }

    case 'top':
      {
        return {
          transformOrigin: 'center bottom',
          top: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            left: '50%',
            marginLeft: "-".concat(arrowSize, "px"),
            top: "calc(100% - ".concat(arrowSize, "px)")
          }
        };
      }

    case 'top-end':
      {
        return {
          transformOrigin: 'center bottom',
          top: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            left: "calc(100% - ".concat(arrowSize * 3, "px)"),
            marginLeft: "-".concat(arrowSize, "px"),
            top: "calc(100% - ".concat(arrowSize, "px)")
          }
        };
      }

    case 'right-start':
      {
        return {
          transformOrigin: 'left center',
          right: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            marginTop: "-".concat(arrowSize, "px"),
            right: "calc(100% - ".concat(arrowSize, "px)"),
            top: boundToAnchor ? "".concat(anchorRectHeight / 2, "px") : '20%'
          }
        };
      }

    case 'right':
      {
        return {
          transformOrigin: 'left center',
          right: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            marginTop: "-".concat(arrowSize, "px"),
            right: "calc(100% - ".concat(arrowSize, "px)"),
            top: '50%'
          }
        };
      }

    case 'right-end':
      {
        return {
          transformOrigin: 'left center',
          right: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            marginTop: "-".concat(arrowSize, "px"),
            right: "calc(100% - ".concat(arrowSize, "px)"),
            top: boundToAnchor ? "calc(100% - ".concat(anchorRectHeight / 2, "px)") : '80%'
          }
        };
      }

    case 'bottom-start':
      {
        return {
          transformOrigin: 'center top',
          bottom: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            bottom: "calc(100% - ".concat(arrowSize, "px)"),
            left: boundToAnchor ? "".concat(arrowSize * 3, "px") : '20%',
            marginLeft: "-".concat(arrowSize, "px")
          }
        };
      }

    case 'bottom':
      {
        return {
          transformOrigin: 'center top',
          bottom: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            bottom: "calc(100% - ".concat(arrowSize, "px)"),
            left: '50%',
            marginLeft: "-".concat(arrowSize, "px")
          }
        };
      }

    case 'bottom-end':
      {
        return {
          transformOrigin: 'center top',
          bottom: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            bottom: "calc(100% - ".concat(arrowSize, "px)"),
            left: "calc(100% - ".concat(arrowSize * 3, "px)"),
            marginLeft: "-".concat(arrowSize, "px")
          }
        };
      }

    case 'left-start':
      {
        return {
          transformOrigin: 'right center',
          left: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            left: "calc(100% - ".concat(arrowSize, "px)"),
            marginTop: "-".concat(arrowSize, "px"),
            top: boundToAnchor ? "".concat(anchorRectHeight / 2, "px") : '20%'
          }
        };
      }

    case 'left':
      {
        return {
          transformOrigin: 'right center',
          left: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            left: "calc(100% - ".concat(arrowSize, "px)"),
            marginTop: "-".concat(arrowSize, "px"),
            top: '50%'
          }
        };
      }

    case 'left-end':
      {
        return {
          transformOrigin: 'right center',
          left: "-".concat(margin, "px"),
          '&:before': {
            background: bgColor,
            left: "calc(100% - ".concat(arrowSize, "px)"),
            marginTop: "-".concat(arrowSize, "px"),
            top: boundToAnchor ? "calc(100% - ".concat(anchorRectHeight / 2, "px)") : '80%'
          }
        };
      }

    default:
      return {};
  }
});
PopoverContent.propTypes = {
  /**
   * The size of the Popover Arrow.
   */
  arrowSize: _propTypes.default.number.isRequired,

  /**
   * Apply themed styling to Popover.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * The distance from the Popover to its container.
   */
  distanceFromContainer: _propTypes.default.number,

  /**
   * The maximum width for the rendered Popover container.
   */
  maxWidth: _propTypes.default.string,

  /**
   * The placement of the Popover.
   * This goes directly with placements defined in `Popper.js`.
   */
  placement: _propTypes.default.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end']).isRequired
};
PopoverContent.defaultProps = {
  borderRadius: '0',
  borderWidth: '0',
  color: null,
  distanceFromContainer: null,
  maxWidth: null,
  padding: '0',
  placement: 'bottom'
};
var _default = PopoverContent;
exports.default = _default;