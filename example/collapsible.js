var CollapsibleHead = React.createClass({displayName: 'CollapsibleHead',

  /* react hooks */

  propTypes: {
    href: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      href: null,
      onClick: function () {}
    }
  },

  render: function () {
    return (
      React.createElement("div", {className: "ddm-collapsible__head", onClick: this.props.onClick}, 
        this.renderChildren(), 
        React.createElement("span", {className: "ddm-collapsible__arrow"})
      )
    );
  },

  renderChildren: function () {
    var children;

    if (this.props.href) {
      children = (React.createElement("a", {href: this.props.href}, this.props.children));
    } else {
      children = this.props.children;
    }

    return children;
  }

});

var CollapsibleBody = React.createClass({displayName: 'CollapsibleBody',
  render: function () {
    return (
      React.createElement("div", {className: "ddm-collapsible__body", key: "body"}, 
        React.createElement("div", {className: "ddm-collapsible__content", ref: "content"}, 
          this.props.children
        )
      )
    );
  }
});

var Collapsible = React.createClass({displayName: 'Collapsible',

  propTypes: {
    open: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func,
    speed: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      open: null,
      onOpen: function () {},
      onClose: function () {},
      speed: 700 /* pixels per second */
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
      React.createElement("div", {className: this.getClassNames()}, 
        this.renderChildren()
      )
    );
  },

  getClassNames: function () {
    return React.addons.classSet({
      'ddm-collapsible': true,
      'ddm-collapsible--will-open': this.state.willOpen,
      'ddm-collapsible--opening': this.state.opening,
      'ddm-collapsible--open': this.state.open,
      'ddm-collapsible--will-close': this.state.willClose,
      'ddm-collapsible--closing': this.state.closing,
      'ddm-collapsible--closed': this.isClosed()
    });
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
    this.transitionEnd(this.finishOpen);
    this.setState({ willOpen: false, opening: true }, function () {
      this.setTransitionDuration();
      this.after(this.hasOpeningClass, this.setBodyHeight);
    }.bind(this));
  },

  hasOpeningClass: function () {
    return this.hasClass(this.getDOMNode(), 'ddm-collapsible--opening');
  },

  finishOpen: function () {
    this.setState({ opening: false, open: true }, function () {
      this.unsetTransitionDuration();
      this.after(this.hasOpenClass, this.unsetBodyHeight);
    }.bind(this));
  },

  hasOpenClass: function () {
    return this.hasClass(this.getDOMNode(), 'ddm-collapsible--open');
  },

  close: function () {
    if (this.inTransition() || this.isClosed()) {
      return; /* nothing to do or already doing something */
    }

    this.props.onClose(this);

    this.prepareClose();
  },

  prepareClose: function () {
    this.setBodyHeight();
    this.setState({ open: false, willClose: true }, this.startClose);
  },

  startClose: function () {
    this.transitionEnd(this.finishClose);
    this.setState({ willClose: false, closing: true }, function () {
      this.setTransitionDuration();
      this.after(this.readyToClose, this.unsetBodyHeight);
    });
  },

  readyToClose: function () {
    var ready = (
      this.hasClosingClass()
      && this.hasBodyHeight()
    );
    return ready;
  },

  hasClosingClass: function () {
    var hasClosingClass = this.hasClass(this.getDOMNode(), 'ddm-collapsible--closing');
    return hasClosingClass;
  },

  finishClose: function () {
    this.unsetTransitionDuration();
    this.setState({ closing: false });
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

  setBodyHeight: function () {
    this.refs.body.getDOMNode().style.height = this.getContentHeight();
  },

  unsetBodyHeight: function () {
    this.refs.body.getDOMNode().style.height = null;
  },

  unsetTransitionDuration: function () {
    var styleName = this.transitionStyleName() + 'Duration';
    this.refs.body.getDOMNode().style[styleName] = null;
  },

  setTransitionDuration: function () {
    var contentHeight = parseInt(this.getContentHeight(), 10);
    var duration = contentHeight / this.props.speed;
    var styleName = this.transitionStyleName() + 'Duration';
    this.refs.body.getDOMNode().style[styleName] = duration + 's';
  },

  getContentHeight: function () {
    return this.refs.body.refs.content.getDOMNode().offsetHeight + 'px';
  },

  transitionEnd: function (callback) {
    var eventName = this.transitionEndEventName();
    var body = this.refs.body.getDOMNode();
    var handler = function (event) {
      if (event.propertyName === 'height') {
        callback();
        body.removeEventListener(eventName, handler);
      }
    };

    body.addEventListener(eventName, handler, false);
  },

  transitionSupported: function () {
    return this.transitionEndEventName() !== false;
  },

  transitionEndEventName: function () {
    /* adapted from https://github.com/facebook/react/blob/master/src/addons/transitions/ReactTransitionEvents.js */

    var eventNames = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'mozTransitionEnd',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd'
    };

    if (!('TransitionEvent' in window)) {
      delete eventNames['transition'];
    }

    var style = document.createElement('div').style;
    var styleName = this.transitionStyleName();
    var eventName = false;

    if (styleName !== false) {
      eventName = eventNames[styleName];
    }

    return eventName;
  },

  transitionStyleName: function () {
    var styleNames = [
      'transition',
      'WebkitTransition',
      'MozTransition',
      'OTransition',
      'msTransition'
    ];

    var style = document.createElement('div').style;
    var styleName = false;

    for (var i = 0; i < styleNames.length; i++) {
      var key = styleNames[i];
      if (key in style) {
        styleName = key;
        break;
      }
    }

    return styleName;
  },

  after: function (check, action, limit) {
    limit = limit === undefined ? 10 : limit;
    if (check()) {
      action();
    } else if (limit > 1) {
      setTimeout(function () {
        this.after(check, action, --limit);
      }.bind(this), 0);
    }
  },

  hasBodyHeight: function () {
    var bodyHeight = this.refs.body.getDOMNode().style.height;
    var contentHeight = this.getContentHeight();
    var hasBodyHeight = bodyHeight === contentHeight;
    return hasBodyHeight;
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

var CollapsibleGroup = React.createClass({displayName: 'CollapsibleGroup',

  /* react hooks */

  propTypes: {
    accordion: React.PropTypes.bool,
    open: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      accordion: false,
      open: false
    }
  },

  render: function () {
    return (
      React.createElement("div", {className: "ddm-collapsible-group"}, 
        this.renderChildren()
      )
    );
  },



  /* event handlers */

  handleCollapsibleOpen: function (collapsible) {
    if (this.props.accordion) {
      this.closeOtherCollapsibles(collapsible);
    }
  },



  /* methods */



  /* helpers */

  closeOtherCollapsibles: function (collapsible) {
    for (var key in this.refs) {
      var ref = this.refs[key];
      var isCollapsible = ref.type !== Collapsible.type;
      var isSame = ref.props.index === collapsible.props.index;
      if (!isCollapsible || isSame) { continue; }
      ref.close();
    }
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, this.renderChild);
  },

  renderChild: function (child, index) {
    if (child.type !== Collapsible.type) { return child; }
    child = React.addons.cloneWithProps(child, {
      key: 'ddmCollapsible' + index,
      ref: 'ddmCollapsible' + index,
      index: index,
      open: child.props.open === null ? this.props.open : child.props.open,
      onOpen: this.handleCollapsibleOpen
    });

    return child;
  }

});
