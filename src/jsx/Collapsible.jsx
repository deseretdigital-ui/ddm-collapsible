var Collapsible = React.createClass({

  /* react hooks */

  propTypes: {
    open: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      open: false,
      onOpen: function () {},
      onClose: function () {}
    }
  },

  getInitialState: function() {
    return {
      mounted: false,
      open: false || this.props.open
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
    if (this.state.open) {
      return; /* nothing to do */
    }

    this.props.onOpen(this);

    this.setState({
      open: true
    });
  },

  close: function () {
    if (!this.state.open) {
      return; /* nothing to do */
    }

    this.props.onClose(this);

    this.setState({
      open: false
    });
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
    var content = this.refs.body.refs.content.getDOMNode();
    var contentHeight = content.offsetHeight + 'px';
    body.style.maxHeight = this.state.open ? contentHeight : '0';
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
