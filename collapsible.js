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

  /* props */

  propTypes: {
    open: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      open: null,
      onOpen: function () {},
      onClose: function () {}
    }
  },



  /* state */

  getInitialState: function() {
    return {
      open: this.props.open || false,
      willOpen: false,
      opening: false,
      willClose: false,
      closing: false
    }
  },

  isClosed: function () {
    return !this.state.open && !this.state.willOpen && !this.state.willClose && !this.state.closing;
  },

  open: function () {
    if (this.state.closing || this.state.opening || this.state.open) {
      return; /* nothing to do or already doing something */
    }

    console.log('open');
    this.props.onOpen(this);
    this.setState({
      willOpen: true
    }, this.startOpen);
  },

  startOpen: function () {
    console.log('startOpen');
    this.setBodyHeight();
    this.setState({
      willOpen: false,
      opening: true
    }, this.transitionEnd(this.finishOpen));
  },

  finishOpen: function () {
    console.log('finishOpen');
    this.setState({
      opening: false,
      open: true
    }, this.unsetBodyHeight);
  },

  close: function () {
    if (this.opening || this.closing || this.isClosed()) {
      return; /* nothing to do or already doing something */
    }

    console.log('close');
    this.props.onClose(this);
    this.setBodyHeight();
    setTimeout(function () { /* wait for height to set */
      this.setState({
        open: false,
        willClose: true,
      }, this.startClose);
    }.bind(this), 1)
  },

  startClose: function () {
    console.log('startClose');
    this.unsetBodyHeight();
    this.setState({
      willClose: false,
      closing: true
    }, this.transitionEnd(this.finishClose));
  },

  finishClose: function () {
    console.log('finishClose');
    this.setState({
      closing: false
    });
  },

  toggle: function () {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  },



  /* render */

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
      ref: 'body'
    });
  },



  /* handlers */

  handleHeadClick: function (event) {
    console.log('handleHeadClick');
    this.toggle();
  },



  /* DOM */

  setBodyHeight: function () {
    console.log('setBodyHeight');
    this.refs.body.getDOMNode().style.height = this.getContentHeight() + 'px';
  },

  unsetBodyHeight: function () {
    console.log('unsetBodyHeight');
    this.refs.body.getDOMNode().style.height = null;
  },

  getContentHeight: function () {
    return this.refs.body.refs.content.getDOMNode().offsetHeight;
  },

  transitionEnd: function (callback) {
    var eventName = this.transitionEndEventName();
    if (!eventName) {
      console.log('transition not supported');
      callback(); /* transition not supported */
      return;
    }

    var body = this.refs.body.getDOMNode();
    var newCallback = function (event) {
      console.log('transition supported');
      if (event.propertyName === 'height') {
        callback();
        body.removeEventListener(eventName, newCallback);
      }
    };

    body.addEventListener(eventName, newCallback, false);
  },

  transitionEndEventName: (function () { /* iife to reduce redundant calculations; trying to avoid dependencies */
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
    var eventName = false;

    for (var styleName in eventNames) {
      if (styleName in style) {
        eventName = eventNames[styleName];
        break;
      }
    }

    return function () {
      return eventName;
    };
  })()







  // setInitialHeight: function () {
  //   var body = this.refs.body.getDOMNode();
  //   var height = this.state.open ? 'auto' : '0';
  //   body.style.height = height;
  // },

  // open: function () {
  //   if (this.state.open) { return; }
  //   this.props.onOpen(this);
  //   this.setState({
  //     willOpen: true
  //   });
  // },

  // close: function () {
  //   if (!this.state.open) { return; }
  //   this.props.onClose(this);
  //   this.setState({ open: false });
  // },

  // handleTransitionEnd: function (event) {
  //   console.log('transitionend');
  //   if (event.propertyName == 'height') {
  //     var body = this.refs.body.getDOMNode();
  //     this.removeClass(body, 'ddm-collapsible__body--transition');
  //     body.style.height = 'auto';
  //     body.removeEventListener('transitionend', this.handleTransitionEnd, false);
  //   }
  // },

  // transitionToHeightAuto: function () { /* encapsulate messy stuff */
  //   console.log('transitionToHeightAuto');
  //   var body = this.refs.body.getDOMNode();
  //   body.style.height = '0px';
  //   this.addClass(body, 'ddm-collapsible__body--transition');
  //   body.style.height = this.getContentHeight();
  //   body.addEventListener('transitionend', this.handleTransitionEnd, false);
  // },

  // setHeightZero: function () {
  //   var body = this.refs.body.getDOMNode();
  //   this.addClass(body, 'ddm-collapsible__body--transition');
  //   body.style.height = '0px';
  // },

  // transitionFromHeightAuto: function () { /* encapsulate messy stuff */
  //   var body = this.refs.body.getDOMNode();
  //   body.style.height = this.getContentHeight();
  //   setTimeout(this.setHeightZero, 0);
  // },

  // getContentHeight: function () {
  //   console.log(this.refs.body.refs.content.getDOMNode().offsetHeight);
  //   return this.refs.body.refs.content.getDOMNode().offsetHeight + 'px';
  // },

  // addClass: function (element, className) {
  //   if (element.classList) {
  //     element.classList.add(className);
  //   } else {
  //     element.className += ' ' + className;
  //   }
  // },

  // removeClass: function (element, className) {
  //   if (element.classList) {
  //     element.classList.remove(className);
  //   } else {
  //     element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  //   }
  // }

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
