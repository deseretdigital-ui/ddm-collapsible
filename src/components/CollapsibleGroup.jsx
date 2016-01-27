var React = require('react');
var cx = require('classnames');
var Collapsible = require('./Collapsible');

module.exports = React.createClass({ displayName: 'CollapsibleGroup',

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
      <div className={this.getClasses()}>
        {this.renderChildren()}
      </div>
    );
  },

  getClasses: function () {
    var classes = {
      'ddm-collapsible-group': true
    };

    return [
      cx(classes),
      this.props.className
    ].join(' ');
  },

  handleCollapsibleOpen: function (collapsible) {
    if (this.props.accordion) {
      this.closeOtherCollapsibles(collapsible);
    }
  },

  close: function () {
    for (var key in this.refs) {
      var ref = this.refs[key];
      var isCollapsible = ref.type !== Collapsible;
      if (!isCollapsible) { continue; }
      ref.close();
    }
  },

  closeOtherCollapsibles: function (collapsible) {
    for (var key in this.refs) {
      var ref = this.refs[key];
      var isCollapsible = ref.type !== Collapsible;
      var isSame = ref.props.index === collapsible.props.index;
      if (!isCollapsible || isSame) { continue; }
      ref.close();
    }
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, this.renderChild);
  },

  renderChild: function (child, index) {
    if (child.type !== Collapsible) { return child; }

    child = React.cloneElement(child, {
      key: 'ddmCollapsible' + index,
      ref: 'ddmCollapsible' + index,
      index: index,
      open: child.props.open === null ? this.props.open : child.props.open,
      onOpen: this.getOnOpenMethod(child)
    });

    return child;
  },

  getOnOpenMethod: function(child) {
    var group = this;

    return function (collapsible) {
      child.props.onOpen(collapsible);
      group.handleCollapsibleOpen(collapsible);
    }
  }

});
