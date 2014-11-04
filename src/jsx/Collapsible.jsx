var Collapsible = React.createClass({

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
      <div className={this.getClassNames()}>
        {this.renderChildren()}
      </div>
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

    /* fake transition end */
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

    /* fake transition end */
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
