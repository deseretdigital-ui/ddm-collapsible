var React = require('react/addons');
var CollapsibleHead = require('./CollapsibleHead');
var CollapsibleBody = require('./CollapsibleBody');
var Transitions = require('transition-helpers');
var emptyFunction = require('../util/emptyFunction');

module.exports = React.createClass({ displayName: 'Collapsible',

  propTypes: {
    open: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      open: null,
      onOpen: emptyFunction,
      onClose: emptyFunction
    }
  },

  getInitialState: function() {
    return {
      open: this.props.open || false,
      willOpen: false,
      opening: false,
      willClose: false,
      closing: false
    }
  },

  render: function () {
    return (
      <div className={this.getClassNames()}>
        {this.renderChildren()}
      </div>
    );
  },

  getClassNames: function () {
    var classes = {
      'ddm-collapsible': true,
      'ddm-collapsible--will-open': this.state.willOpen,
      'ddm-collapsible--opening': this.state.opening,
      'ddm-collapsible--open': this.state.open,
      'ddm-collapsible--will-close': this.state.willClose,
      'ddm-collapsible--closing': this.state.closing,
      'ddm-collapsible--closed': this.isClosed()
    };

    return [
      React.addons.classSet(classes),
      this.props.className
    ].join(' ');
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, this.renderChild);
  },

  renderChild: function (child, index) {
    if (child.type === CollapsibleHead.type) {
      return this.renderHead(child);
    } else if (child.type === CollapsibleBody.type) {
      return this.renderBody(child);
    } else {
      return child;
    }
  },

  renderHead: function (child) {
    return React.addons.cloneWithProps(child, {
      ref: 'head',
      onClick: this.handleHeadClick
    });
  },

  renderBody: function (child) {
    return React.addons.cloneWithProps(child, {
      ref: 'body',
      key: 'body'
    });
  },

  handleHeadClick: function (event) {
    setTimeout(function () {
      this.toggle();
    }.bind(this), 0)
  },

  toggle: function () {
    if (this.state.open) {
      this.close();
    } else if (this.isClosed()) {
      this.open();
    }
  },

  open: function () {
    if (this.inTransition() || this.state.open) {
      return; /* nothing to do or already doing something */
    }

    this.props.onOpen(this);

    this.prepareOpen();
  },

  prepareOpen: function () {
    this.setState({ willOpen: true }, function () {
      this.after(this.hasWillOpenClass, this.startOpen);
    }.bind(this));
  },

  hasWillOpenClass: function () {
    return this.hasClass(this.getDOMNode(), 'ddm-collapsible--will-open');
  },

  startOpen: function () {
    this.refs.body.addTransitionEndHandler(this.finishOpen);
    this.setState({ willOpen: false, opening: true }, function () {
      this.refs.body.setTransitionDuration();
      this.after(this.hasOpeningClass, this.refs.body.setHeight);
      if (!Transitions.supported()) { this.finishOpen(); }
    }.bind(this));
  },

  hasOpeningClass: function () {
    return this.hasClass(this.getDOMNode(), 'ddm-collapsible--opening');
  },

  finishOpen: function () {
    this.setState({ opening: false, open: true }, function () {
      this.refs.body.unsetTransitionDuration();
      this.after(this.hasOpenClass, this.refs.body.unsetHeight);
    }.bind(this));
  },

  hasOpenClass: function () {
    return this.hasClass(this.getDOMNode(), 'ddm-collapsible--open');
  },

  close: function (withTransition) {
    if (withTransition === false) {
      this.props.onClose(this);
      this.forceClose();
      return;
    }

    if (this.inTransition() || this.isClosed()) {
      return; /* nothing to do or already doing something */
    }

    this.props.onClose(this);

    this.prepareClose();
  },

  prepareClose: function () {
    this.refs.body.setHeight();
    this.setState({ open: false, willClose: true }, this.startClose);
  },

  startClose: function () {
    this.refs.body.addTransitionEndHandler(this.finishClose);
    this.setState({ willClose: false, closing: true }, function () {
      this.refs.body.setTransitionDuration();
      this.after(this.readyToClose, this.refs.body.unsetHeight);
      if (!Transitions.supported()) { this.finishClose(); }
    });
  },

  readyToClose: function () {
    var ready = (
      this.hasClosingClass()
      && this.refs.body.hasHeight()
    );
    return ready;
  },

  hasClosingClass: function () {
    var hasClosingClass = this.hasClass(this.getDOMNode(), 'ddm-collapsible--closing');
    return hasClosingClass;
  },

  finishClose: function () {
    this.refs.body.unsetTransitionDuration();
    this.setState({ closing: false });
  },

  forceClose: function() {
    this.setState({
      open: false,
      willOpen: false,
      opening: false,
      willClose: false,
      closing: false
    });
  },

  isClosed: function () {
    return !(
      this.state.open
      || this.inTransition()
    );
  },

  inTransition: function () {
    return (
      this.state.willOpen
      || this.state.opening
      || this.state.willClose
      || this.state.closing
    );
  },

  // helpers; highly reusable; candidate for graduation
  after: function after(check, action, limit) {
    limit = limit === undefined ? 10 : limit;
    if (check()) {
      action();
    } else if (limit > 1) {
      setTimeout(function () {
        after(check, action, --limit);
      }.bind(this), 0);
    }
  },

  hasClass: function (element, className) {
    var hasClass = false;
    if (element.classList) {
      hasClass =  element.classList.contains(className);
    } else {
      hasClass = new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
    }
    return hasClass;
  }

});
