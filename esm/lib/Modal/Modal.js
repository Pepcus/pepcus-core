import PropTypes from 'prop-types';
import React from 'react';
import noScroll from 'no-scroll';
import styled from 'styled-components';
import Backdrop from "../Backdrop";
import Portal from "../Portal";
import { DURATION } from "../../constants/transitions";
import { getThemeProps } from "../../utils/theme";
import ModalManager from "./ModalManager";
const ModalStyled = styled.div.withConfig({
  displayName: "Modal__ModalStyled",
  componentId: "cgziqe-0"
})(["background-clip:padding-box;background:#fff;box-shadow:0 12px 15px 0 rgba(0,0,0,0.25);max-width:768px;padding:10px;position:relative;", ";"], getThemeProps('Modal.styles'));

class Modal extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (!prevState.show && nextProps.open) {
      return {
        show: true
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.handleOpen = () => {
      const manager = this.props.manager;
      manager.add(this);
      this.blockScroll();
      document.addEventListener('keydown', this.handleKeyDown);
    };

    this.handleClose = () => {
      const manager = this.props.manager;
      manager.remove(this);
      this.unblockScroll();
      document.removeEventListener('keydown', this.handleKeyDown);
    };

    this.handleBackdropClick = event => {
      const _this$props = this.props,
            onBackdropClick = _this$props.onBackdropClick,
            onClose = _this$props.onClose,
            closeOnBackdropClick = _this$props.closeOnBackdropClick;

      if (this.shouldClose === null) {
        this.shouldClose = true;
      }

      if (!this.shouldClose) {
        this.shouldClose = null;
        return;
      }

      if (typeof onBackdropClick === 'function') {
        onBackdropClick(event);
      }

      if (closeOnBackdropClick) {
        typeof onClose === 'function' && onClose(event);
      }

      this.shouldClose = null;
    };

    this.handleKeyDown = event => {
      const _this$props2 = this.props,
            manager = _this$props2.manager,
            onEscKeyDown = _this$props2.onEscKeyDown,
            onClose = _this$props2.onClose,
            closeOnEsc = _this$props2.closeOnEsc;

      if (event.keyCode !== 27 || !manager.isTopModal(this)) {
        return;
      }

      if (typeof onEscKeyDown === 'function') {
        onEscKeyDown(event);
      }

      if (closeOnEsc) {
        typeof onClose === 'function' && onClose(event);
      }
    };

    this.handleModalEvent = () => {
      this.shouldClose = false;
    };

    this.handleEntered = () => {
      const onEntered = this.props.onEntered;

      if (typeof onEntered === 'function') {
        onEntered();
      }
    };

    this.handleExited = () => {
      const onExited = this.props.onExited;

      if (typeof onExited === 'function') {
        onExited();
      }

      this.setState(() => ({
        show: false
      }));
      this.unblockScroll();
    };

    this.unblockScroll = () => {
      const manager = this.props.manager;

      if (manager.getModals().length === 0) {
        noScroll.off();
      }
    };

    this.blockScroll = () => {
      noScroll.on();
    };

    this.state = {
      show: props.open
    };
    this.shouldClose = null;
  }

  componentDidMount() {
    const open = this.props.open;

    if (open) {
      this.handleOpen();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const show = this.state.show;
    const open = this.props.open;

    if (prevState.show && !show) {
      this.handleClose();
    } else if (!prevProps.open && open) {
      this.handleOpen();
    }
  }

  componentWillUnmount() {
    const open = this.props.open;

    if (open) {
      this.handleClose();
    }
  }

  render() {
    const _this$props3 = this.props,
          BackdropComponent = _this$props3.BackdropComponent,
          BackdropProps = _this$props3.BackdropProps,
          ContentComponent = _this$props3.ContentComponent,
          ContentProps = _this$props3.ContentProps,
          children = _this$props3.children,
          container = _this$props3.container,
          open = _this$props3.open,
          timeout = _this$props3.timeout,
          style = _this$props3.style;
    const show = this.state.show;

    if (!show) {
      return null;
    }

    return React.createElement(Portal, {
      container: container
    }, React.createElement(BackdropComponent, Object.assign({
      appear: true,
      in: open,
      onBackdropClick: this.handleBackdropClick,
      onEntered: this.handleEntered,
      onExited: this.handleExited,
      timeout: timeout
    }, BackdropProps), React.createElement(ContentComponent, Object.assign({
      onClick: this.handleModalEvent,
      onMouseDown: this.handleModalEvent,
      onMouseUp: this.handleModalEvent,
      style: style
    }, ContentProps), children)));
  }

}

Modal.defaultProps = {
  BackdropComponent: Backdrop,
  BackdropProps: {},
  ContentComponent: ModalStyled,
  ContentProps: {},
  children: null,
  closeOnBackdropClick: true,
  closeOnEsc: true,
  container: null,
  manager: new ModalManager(),
  onBackdropClick: null,
  onClose: null,
  onEntered: null,
  onEscKeyDown: null,
  onExited: null,
  open: false,
  style: null,
  timeout: DURATION.regular
};
Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The Backdrop Component which will be rendered behind the Modal.
   */
  BackdropComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Properties for the `Backdrop` component.
   */
  BackdropProps: PropTypes.object,

  /**
   * The Content Component which holds all of the Modal's content / children.
   */
  ContentComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * The props passed down to the `ContentComponent`.
   */
  ContentProps: PropTypes.object,

  /**
   * Children for the Modal.
   */
  children: PropTypes.node,

  /**
   * Should the Modal close on the Backdrop click?
   */
  closeOnBackdropClick: PropTypes.bool,

  /**
   * If `true`, the modal will close on `esc` keydown.
   */
  closeOnEsc: PropTypes.bool,

  /**
   * The container to append the Modal to.
   */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * A modal manager used to track and manage the state of open modals.
   */
  manager: PropTypes.object,

  /**
   * Callback fired upon the Backdrop click.
   */
  onBackdropClick: PropTypes.func,

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: PropTypes.func,

  /**
   * Callback fired when the Modal enters the DOM.
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired upon the `esc` keydown event.
   */
  onEscKeyDown: PropTypes.func,

  /**
   * Callback fired when the Modal exits the DOM.
   */
  onExited: PropTypes.func,

  /**
   * If `true`, the modal is open.
   */
  open: PropTypes.bool,

  /**
   * @ignore
   */
  style: PropTypes.object,

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : {};
export default Modal;