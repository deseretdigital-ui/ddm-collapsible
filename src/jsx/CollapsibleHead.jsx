var CollapsibleHead = React.createClass({

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
      <div className="ddm-collapsible__head">
        {this.renderChildren()}
        <span className="ddm-collapsible__arrow"></span>
      </div>
    );
  },

  renderChildren: function () {
    var children;

    if (this.props.href) {
      children = (<a href={this.props.href}>{this.props.children}</a>);
    } else {
      children = this.props.children;
    }

    return children;
  }

});
