import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import MenuContent from "../MenuContent";
import Popover from "../Popover";
import { ChevronIcon } from "../SvgIcon";
import { MenuButton } from "../Button";

class Menu extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
    this.menuContentRef = React.createRef();

    this.handleMenuOpen = event => {
      event.preventDefault(); // Extract the `onOpen` prop.

      const onOpen = this.props.onOpen; // Update the state to open the menu.

      this.setState(() => ({
        open: true
      }), () => {
        // Add an event listener to the document for closing the menu.
        document.addEventListener('click', this.handleMenuClose); // If there is a valid `onOpen` function, invoke it.

        typeof onOpen === 'function' && onOpen(event);
      });
    };

    this.handleMenuClose = event => {
      const current = this.menuContentRef.current; // Close the menu only if we click outside the menu's content.

      if (current && event.target && !current.contains(event.target)) {
        this.closeMenu(event);
      }
    };

    this.closeMenu = event => {
      // Extract the `onClose` prop.
      const onClose = this.props.onClose; // Update the state to close the menu.

      this.setState(() => ({
        open: false
      }), () => {
        // Remove the previously added event listener to the document.
        document.removeEventListener('click', this.handleMenuClose); // If there is a valid `onClose` function, invoke it.

        typeof onClose === 'function' && onClose(event);
      });
    };

    this.renderMenuAnchorChildren = () => {
      const _this$props = this.props,
            ButtonComponent = _this$props.ButtonComponent,
            ButtonProps = _this$props.ButtonProps,
            IconComponent = _this$props.IconComponent,
            IconProps = _this$props.IconProps,
            iconPosition = _this$props.iconPosition;
      return React.createElement(React.Fragment, null, IconComponent && iconPosition === 'left' && React.createElement(IconComponent, Object.assign({}, IconProps, {
        position: iconPosition
      })), _get(ButtonComponent, 'props.children') || _get(ButtonProps, 'children'), IconComponent && iconPosition === 'right' && React.createElement(IconComponent, Object.assign({}, IconProps, {
        position: iconPosition
      })));
    };

    this.renderMenuAnchor = () => {
      const _this$props2 = this.props,
            ButtonComponent = _this$props2.ButtonComponent,
            ButtonProps = _this$props2.ButtonProps; // Clean the passed in props for the button component.

      const children = ButtonProps.children,
            cleanedButtonProps = _objectWithoutProperties(ButtonProps, ["children"]); // Build the props for the button component.


      const btnProps = _objectSpread({
        onClick: this.handleMenuOpen
      }, cleanedButtonProps); // If we have a regular HTML DOM element, or a React functional component, render it.


      if (typeof ButtonComponent === 'string' || typeof ButtonComponent === 'function') {
        return React.createElement(ButtonComponent, btnProps, this.renderMenuAnchorChildren());
      } // Otherwise, clone the passed in element.


      return React.cloneElement(ButtonComponent, btnProps, this.renderMenuAnchorChildren());
    };
  }

  render() {
    const openState = this.state.open;

    const _this$props3 = this.props,
          ButtonComponent = _this$props3.ButtonComponent,
          ButtonProps = _this$props3.ButtonProps,
          ContentComponent = _this$props3.ContentComponent,
          ContentProps = _this$props3.ContentProps,
          IconComponent = _this$props3.IconComponent,
          IconProps = _this$props3.IconProps,
          children = _this$props3.children,
          iconPosition = _this$props3.iconPosition,
          openProps = _this$props3.open,
          dropdownProps = _objectWithoutProperties(_this$props3, ["ButtonComponent", "ButtonProps", "ContentComponent", "ContentProps", "IconComponent", "IconProps", "children", "iconPosition", "open"]);

    const open = typeof openProps === 'boolean' ? openProps : openState;
    return React.createElement(Popover, Object.assign({
      anchor: this.renderMenuAnchor(),
      open: open
    }, dropdownProps), renderProps => React.createElement(ContentComponent, Object.assign({
      ref: this.menuContentRef
    }, renderProps, ContentProps), children));
  }

}

Menu.defaultProps = {
  ButtonComponent: React.createElement(MenuButton, null),
  ButtonProps: {},
  ContentComponent: MenuContent,
  ContentProps: {},
  IconComponent: ChevronIcon,
  IconProps: {
    direction: 'down',
    style: {
      color: '#FFF',
      height: 20,
      width: 20
    }
  },
  children: null,
  distanceFromContainer: 5,
  iconPosition: 'right',
  onClose: null,
  onOpen: null,
  open: null,
  placement: 'bottom-start'
};
Menu.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The Menu action button component.
   */
  ButtonComponent: PropTypes.element,

  /**
   * The props passed down to the `ButtonComponent`.
   */
  ButtonProps: PropTypes.object,

  /**
   * The Content Component which holds all of the Menu's content / children.
   */
  ContentComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * The props passed down to the `ContentComponent`.
   */
  ContentProps: PropTypes.object,

  /**
   * The Component to render the Icon inside the Menu Anchor.
   */
  IconComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * The props passed down to the `IconComponent`.
   */
  IconProps: PropTypes.object,

  /**
   * @ignore
   */
  children: PropTypes.node,

  /**
   * The distance from the Menu to its container.
   */
  distanceFromContainer: PropTypes.number,

  /**
   * The position of the icon.
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),

  /**
   * Callback fired when the Menu is closed.
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the Menu is opened.
   */
  onOpen: PropTypes.func,

  /**
   * Make Menu a controlled component.
   */
  open: PropTypes.bool,

  /**
   * The placement of the Menu.
   * This goes directly with placements defined in `Popper.js`.
   */
  placement: PropTypes.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end'])
} : {};
export default Menu;