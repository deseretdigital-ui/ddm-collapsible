var CollapsibleHead = React.createClass({displayName: 'CollapsibleHead',

  /* react hooks */

  propTypes: {
    href: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      href: null
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
      React.createElement("div", {className: "ddm-collapsible__body"}, 
        this.props.children
      )
    );
  }
});

var Collapsible = React.createClass({displayName: 'Collapsible',

  /* react hooks */

  getInitialState: function() {
    return {
      mounted: false,
      open: false || this.props.open,
      opening: false,
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

  componentDidMount: function () {
    this.setMaxHeight();
    setTimeout(function () {
      this.setState({mounted: true});
    }.bind(this), 0);

  },

  componentDidUpdate: function () {
    this.setMaxHeight();
  },



  /* event handlers */

  handleHeadClick: function (event) {
    this.toggle();
  },



  /* methods */

  open: function () {
    this.setState({
      open: true,
      opening: true
    });

    setTimeout(function () {
      this.setState({
        opening: false
      });
    }.bind(this), 300); /* this is brittle; it assumes the transition duration is .3s */

    if (this.props.onOpen) {
      this.props.onOpen(this);
    }
  },

  close: function () {
    this.setState({
      closing: true
    });

    setTimeout(function () {
      this.setState({
        closing: false,
        open: false
      });
    }.bind(this), 300);
  },

  toggle: function () {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  },



  /* helpers */

  getClassNames: function () {
    return React.addons.classSet({
      'ddm-collapsible': true,
      'ddm-collapsible--mounted': this.state.mounted,
      'ddm-collapsible--open': this.state.open
    });
  },

  setMaxHeight: function () {
    var body = this.refs.body.getDOMNode();
    var child = body.children[0];
    var maxHeight;

    if (this.state.opening || this.state.closing) {
      /* we need something to transition to or from */
      maxHeight = child.offsetHeight + 'px';
    } else if (this.state.open) {
      /* lest there be nested collapsibles, remove max-height */
      maxHeight = 'none';
    } else {
      /* unset to make closed */
      maxHeight = null;
    }

    body.style.maxHeight = maxHeight;
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
      open: child.props.open === undefined ? this.props.open : child.props.open,
      onOpen: this.handleCollapsibleOpen
    });

    return child;
  }

});
