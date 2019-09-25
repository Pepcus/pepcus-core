import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
const isPortalAvailable = ReactDOM && typeof ReactDOM.createPortal === 'function';
const docIsBrowser = typeof window !== 'undefined';

class Portal extends Component {
  constructor(...args) {
    super(...args);

    this.renderLayer = () => {
      const children = this.props.children;

      if (!isPortalAvailable) {
        ReactDOM.unstable_renderSubtreeIntoContainer(this, children, this.container);
      }
    };
  }

  componentWillMount() {
    const container = this.props.container;

    if (docIsBrowser) {
      if (!container) {
        this.container = document.createElement('div');
        document.body.appendChild(this.container);
      } else {
        this.container = container;
      }

      this.renderLayer();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderLayer();
  }

  componentWillUnmount() {
    const container = this.props.container;

    if (!isPortalAvailable) {
      ReactDOM.unmountComponentAtNode(this.container);
    }

    if (!container) {
      document.body.removeChild(this.container);
    }
  }

  render() {
    const children = this.props.children;

    if (isPortalAvailable) {
      return ReactDOM.createPortal(children, this.container);
    }

    return null;
  }

}

Portal.defaultProps = {
  children: null,
  container: null
};
Portal.propTypes = process.env.NODE_ENV !== "production" ? {
  children: PropTypes.node,
  container: PropTypes.object
} : {};
export default Portal;