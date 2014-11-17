var React = require('react/addons');

var CollapsibleHead = React.createClass({

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
      <div className="ddm-collapsible__head" onClick={this.props.onClick}>
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

module.exports = CollapsibleHead;
