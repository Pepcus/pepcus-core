"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../constants/theme");

var _theme2 = require("../../utils/theme");

var TooltipStyled = _styledComponents.default.div.withConfig({
  displayName: "TooltipStyled",
  componentId: "sc-308d57-0"
})(["", ";border-radius:4px;max-width:400px;padding:15px;position:relative;&:after{border:solid transparent;content:' ';height:0;width:0;position:absolute;pointer-events:none;border-color:transparent;border-width:", ";}", ";", ";", ";"], (0, _theme2.getThemeProps)('typography.caption'), function (_ref) {
  var arrowSize = _ref.arrowSize;
  return "".concat(arrowSize, "px");
}, (0, _theme2.getThemeProps)('Tooltip.styles'), function (_ref2) {
  var maxWidth = _ref2.maxWidth,
      padding = _ref2.padding,
      theme = _ref2.theme,
      colorProps = _ref2.color;
  var bgColor = (0, _theme2.getThemeProps)("palette.".concat(colorProps, ".color"), _theme.THEME.palette.dark.color, {
    theme: theme
  });
  var color = (0, _theme2.getThemeProps)("palette.".concat(colorProps, ".text"), _theme.THEME.palette.dark.text, {
    theme: theme
  });
  return {
    backgroundColor: bgColor,
    color: color,
    padding: padding,
    maxWidth: maxWidth
  };
}, function (_ref3) {
  var arrowSize = _ref3.arrowSize,
      marginProps = _ref3.margin,
      placement = _ref3.placement,
      theme = _ref3.theme,
      color = _ref3.color;
  var bgColor = (0, _theme2.getThemeProps)("palette.".concat(color, ".color"), _theme.THEME.palette.dark.color, {
    theme: theme
  });
  var margin = marginProps + arrowSize;

  switch (placement) {
    case 'top-start':
      {
        return {
          transformOrigin: 'center bottom',
          margin: "".concat(margin, "px 0"),
          '&:after': {
            borderTopColor: bgColor,
            left: '20%',
            marginLeft: "-".concat(arrowSize, "px"),
            top: '100%'
          }
        };
      }

    case 'top':
      {
        return {
          transformOrigin: 'center bottom',
          margin: "".concat(margin, "px 0"),
          '&:after': {
            borderTopColor: bgColor,
            left: '50%',
            marginLeft: "-".concat(arrowSize, "px"),
            top: '100%'
          }
        };
      }

    case 'top-end':
      {
        return {
          transformOrigin: 'center bottom',
          margin: "".concat(margin, "px 0"),
          '&:after': {
            borderTopColor: bgColor,
            left: '80%',
            marginLeft: "-".concat(arrowSize, "px"),
            top: '100%'
          }
        };
      }

    case 'right-start':
      {
        return {
          transformOrigin: 'left center',
          margin: "0 ".concat(margin, "px"),
          '&:after': {
            borderRightColor: bgColor,
            marginTop: "-".concat(arrowSize, "px"),
            right: '100%',
            top: '20%'
          }
        };
      }

    case 'right':
      {
        return {
          transformOrigin: 'left center',
          margin: "0 ".concat(margin, "px"),
          '&:after': {
            borderRightColor: bgColor,
            marginTop: "-".concat(arrowSize, "px"),
            right: '100%',
            top: '50%'
          }
        };
      }

    case 'right-end':
      {
        return {
          transformOrigin: 'left center',
          margin: "0 ".concat(margin, "px"),
          '&:after': {
            borderRightColor: bgColor,
            marginTop: "-".concat(arrowSize, "px"),
            right: '100%',
            top: '80%'
          }
        };
      }

    case 'bottom-start':
      {
        return {
          transformOrigin: 'center top',
          margin: "".concat(margin, "px 0"),
          '&:after': {
            borderBottomColor: bgColor,
            bottom: '100%',
            left: '20%',
            marginLeft: "-".concat(arrowSize, "px")
          }
        };
      }

    case 'bottom':
      {
        return {
          transformOrigin: 'center top',
          margin: "".concat(margin, "px 0"),
          '&:after': {
            borderBottomColor: bgColor,
            bottom: '100%',
            left: '50%',
            marginLeft: "-".concat(arrowSize, "px")
          }
        };
      }

    case 'bottom-end':
      {
        return {
          transformOrigin: 'center top',
          margin: "".concat(margin, "px 0"),
          '&:after': {
            borderBottomColor: bgColor,
            bottom: '100%',
            left: '80%',
            marginLeft: "-".concat(arrowSize, "px")
          }
        };
      }

    case 'left-start':
      {
        return {
          transformOrigin: 'right center',
          margin: "0 ".concat(margin, "px"),
          '&:after': {
            borderLeftColor: bgColor,
            left: '100%',
            marginTop: "-".concat(arrowSize, "px"),
            top: '20%'
          }
        };
      }

    case 'left':
      {
        return {
          transformOrigin: 'right center',
          margin: "0 ".concat(margin, "px"),
          '&:after': {
            borderLeftColor: bgColor,
            left: '100%',
            marginTop: "-".concat(arrowSize, "px"),
            top: '50%'
          }
        };
      }

    case 'left-end':
      {
        return {
          transformOrigin: 'right center',
          margin: "0 ".concat(margin, "px"),
          '&:after': {
            borderLeftColor: bgColor,
            left: '100%',
            marginTop: "-".concat(arrowSize, "px"),
            top: '80%'
          }
        };
      }

    default:
      return {};
  }
});

TooltipStyled.propTypes = {
  /**
   * The size of the Tooltip Arrow.
   */
  arrowSize: _propTypes.default.number.isRequired,

  /**
   * Apply themed styling to Tooltip.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * The distance from the Tooltip to its container.
   */
  margin: _propTypes.default.number,

  /**
   * The padding for the rendered Tooltip container.
   */
  padding: _propTypes.default.string,

  /**
   * The placement of the Tooltip.
   * This goes directly with placements defined in `Popper.js`.
   */
  placement: _propTypes.default.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end']).isRequired
};
TooltipStyled.defaultProps = {
  color: 'dark',
  margin: 10,
  padding: '10px'
};
var _default = TooltipStyled;
exports.default = _default;