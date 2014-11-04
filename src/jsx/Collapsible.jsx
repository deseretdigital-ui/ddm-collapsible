var Collapsible = React.createClass({

  /* react hooks */

  getInitialState: function() {
    return {
      open: false || this.props.open,
      mounted: false
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
    this.setState({open: true});

    if (this.props.onOpen) {
      this.props.onOpen(this);
    }
  },

  close: function () {
    this.setState({open: false});
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
    var maxHeight = (this.state.open) ? child.offsetHeight + 'px' : null;
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
