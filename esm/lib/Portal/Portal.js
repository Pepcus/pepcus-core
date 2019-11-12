/* eslint-disable react/no-find-dom-node */
import { Component } from 'react';
import { createPortal, findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import { getContainer, getDocumentOwner } from "../../utils/component"; // eslint-disable-next-line valid-jsdoc

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * @see     {@link https://reactjs.org/docs/portals.html}
 * @class
 * @extends Component
 */

class Portal extends Component {
  constructor(...args) {
    super(...args);
    this.container = null;

    this.setContainerAndRender = props => {
      const container = props.container,
            disable = props.disable,
            onMount = props.onMount; // Set the container

      this.setContainer(container); // Force the render when needed.
      // This skips the `shouldComponentUpdate` method call.

      if (!disable) {
        this.forceUpdate(onMount);
      }
    };

    this.setContainer = container => {
      const disable = this.props.disable; // If the Portal is `disable`d, then set the current DOM node's parent as the container.

      if (disable) {
        this.container = findDOMNode(this).parentElement;
        return;
      } // Otherwise, find the current passed in `container`'s parent and set it to the `container`.


      this.container = getContainer(container, getDocumentOwner(this).body);
    };
  }

  componentDidMount() {
    // Set the container and force render if needed.
    this.setContainerAndRender(this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    const _this$props = this.props,
          container = _this$props.container,
          disable = _this$props.disable;

    if (prevProps.container !== container || prevProps.disable !== disable) {
      // Set the container and force render if needed.
      this.setContainerAndRender(this.props);
    }
  }

  componentWillUnmount() {
    // Remove the current container
    this.container = null;
  }

  render() {
    const _this$props2 = this.props,
          children = _this$props2.children,
          disable = _this$props2.disable; // If the Portal is disabled, render just the children.

    if (disable) {
      return children;
    } // Create the portal for the current children, and the chosen container.


    return this.container ? createPortal(children, this.container) : null;
  }

}

Portal.defaultProps = {
  children: null,
  container: null,
  disable: false,
  onMount: () => {}
};
Portal.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The children to be rendered in the passed in `container`.
   */
  children: PropTypes.node,

  /**
   * The `container` will have the children appended to itself during mount.
   * Default value is the `document.body`.
   */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Disable the React portal behavior.
   * Only the children are rendered.
   */
  disable: PropTypes.bool,

  /**
   * Callback fired upon the children being rendered in the `container`.
   */
  onMount: PropTypes.func
} : {};
export default Portal;