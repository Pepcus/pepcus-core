"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _ButtonGroup = _interopRequireDefault(require("../ButtonGroup"));

var ButtonGroupStyled = (0, _styledComponents.default)(_ButtonGroup.default).withConfig({
  displayName: "CardActions__ButtonGroupStyled",
  componentId: "sc-280nf2-0"
})(["flex-flow:wrap;"]);
/**
 * Card Actions component used to add action buttons on the card
 *
 * @method          CardAction
 * @param           {Object}            props
 * @constructor
 */

function CardActions(props) {
  var buttons = props.buttons,
      children = props.children,
      className = props.className,
      handlers = props.handlers,
      restProps = (0, _objectWithoutProperties2.default)(props, ["buttons", "children", "className", "handlers"]);

  function renderChildren() {
    if (!(0, _isEmpty2.default)(buttons)) {
      return _react.default.createElement(ButtonGroupStyled, {
        buttons: buttons,
        handlers: handlers
      });
    }

    return children;
  }

  return _react.default.createElement(_Box.default, Object.assign({
    borderWidth: "0",
    padding: "5px",
    margin: "0",
    className: className
  }, restProps), renderChildren());
}

CardActions.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   *  Array of action buttons.
   */
  buttons: _propTypes.default.array,

  /**
   *  Custom Action component.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Map of button's onClick action handlers
   */
  handlers: _propTypes.default.object
} : {};
CardActions.defaultProps = {
  buttons: [],
  children: null,
  className: '',
  handlers: null
};
var _default = CardActions;
exports.default = _default;