var Collapsible = React.createClass({

  /* react hooks */

  getInitialState: function() {
    return {
      mounted: false,
      opening: false,
      open: false || this.props.open,
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
    if (this.state.open || this.state.opening) {
      return; /* nothing to do */
    }

    if (this.props.onOpen) {
      this.props.onOpen(this);
    }

    this.setState({
      opening: true
    }, function () {
      /* fake transition end */
      setTimeout(function () {
        this.setState({
          open: true,
          opening: false
        });
      }.bind(this), 300);
    }.bind(this));
  },

  close: function () {
    if (!this.state.open || this.state.closing) {
      return; /* nothing to do */
    }

    this.setState({
      open: false,
      closing: true
    }, function () {
      this.setState({
        closing: false
      });
    }.bind(this));
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
      'ddm-collapsible--open': this.state.open,
      'ddm-collapsible--opening': this.state.opening
    });
  },

  setMaxHeight: function () {
    var body = this.refs.body.getDOMNode();
    var content = this.refs.body.refs.content.getDOMNode();
    var contentHeight = content.offsetHeight + 'px';

    if (this.state.opening) {
      body.style.maxHeight = contentHeight;
    } else if (this.state.closing) {
      body.style.maxHeight = contentHeight;
      setTimeout(function () {
        body.style.maxHeight = '0';
      }, 0);
    } else if (this.state.open) {
      body.style.maxHeight = 'none';
    } else {
      body.style.maxHeight = '0';
    }
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
