import PropTypes from 'prop-types';
import React from 'react';

const withActionHandlers = WrappedComponent => {
  var _class, _temp;

  return _temp = _class = class WithActionHandlers extends React.Component {
    constructor(...args) {
      super(...args);
      this.wrappedRef = React.createRef();

      this.getEventProps = action => {
        const handlersList = this.props.handlers;
        const mouseevent = action.mouseevent || null;
        const handlerRef = action.handlerRef || null;
        const handler = handlersList[handlerRef] || null;
        const shouldBind = Boolean(mouseevent && handler && this.wrappedRef.current);

        const wrappedHandler = event => typeof handler === 'function' && handler(this.props, this.wrappedRef, action, event);

        return {
          mouseevent,
          shouldBind,
          wrappedHandler
        };
      };
    }

    componentDidMount() {
      const actionsList = this.props.actions;

      if (actionsList.length > 0 && this.wrappedRef.current) {
        actionsList.forEach(action => {
          const eventProps = this.getEventProps(action);
          eventProps.shouldBind && this.wrappedRef.current.addEventListener(eventProps.mouseevent, eventProps.wrappedHandler);
        });
      }
    }

    componentWillUnmount() {
      const actionsList = this.props.actions;

      if (actionsList.length > 0 && this.wrappedRef.current) {
        actionsList.forEach(action => {
          const eventProps = this.getEventProps(action);
          eventProps.shouldBind && this.wrappedRef.current.removeEventListener(eventProps.mouseevent, eventProps.wrappedHandler);
        });
      }
    }

    render() {
      return React.createElement(WrappedComponent, Object.assign({}, this.props, {
        setRef: this.wrappedRef
      }));
    }

  }, _class.propTypes = {
    /**
     * The action handlers passed to the WrappedComponent
     */
    actions: PropTypes.array,

    /**
     * Extra set of handlers passed to the WrappedComponent
     */
    handlers: PropTypes.object
  }, _class.defaultProps = {
    actions: [],
    handlers: {}
  }, _temp;
};

export default withActionHandlers;