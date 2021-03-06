var React = require('react');
var cx = require('classnames');
var doesBrowserSupportCssTransforms = require('../util/doesBrowserSupportCssTransforms');
var emptyFunction = require('../util/emptyFunction');
var isIE8 = require('../util/isIE8');

module.exports = React.createClass({ displayName: 'CollapsibleHead',

  propTypes: {
    href: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      href: null,
      onClick: emptyFunction
    }
  },

  render: function () {
    return (
      <div className={this.getClasses()} onClick={this.props.onClick}>
        {this.renderChildren()}
        <span className={this.getArrowClasses()}></span>
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

    return cx(classes) + ' ' + this.props.className;
  },

  getArrowClasses: function () {
    var classes = {
      'ddm-collapsible__arrow': true,
      'ddm-collapsible__arrow--with-image': isIE8
    };

    return cx(classes) + ' ' + this.props.className;
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
