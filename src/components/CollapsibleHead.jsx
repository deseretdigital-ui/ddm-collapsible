var React = require('react/addons');
var doesBrowserSupportCssTransforms = require('../util/doesBrowserSupportCssTransforms');

module.exports = React.createClass({ displayName: 'CollapsibleHead',

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
      <div className={this.getClasses()} onClick={this.props.onClick}>
        {this.renderChildren()}
        <span className="ddm-collapsible__arrow"></span>
      </div>
    );
  },

  componentDidMount: function () {
    doesBrowserSupportCssTransforms();
  },

  getClasses: function () {
    var classes = {
      'ddm-collapsible__head': true
    };

    return [
      React.addons.classSet(classes),
      this.props.className
    ].join(' ');
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
