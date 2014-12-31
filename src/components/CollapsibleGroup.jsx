var React = require('react/addons');
var Collapsible = require('./Collapsible');
var emptyFunction = require('../util/emptyFunction');

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
      React.addons.classSet(classes),
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
      var isCollapsible = ref.type !== Collapsible.type;
      if (!isCollapsible) { continue; }
      ref.close();
    }
  },

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

    var self = this;

    var onOpen = this.handleCollapsibleOpen;
    if (child.props.onOpen !== emptyFunction) {
      // Save the current onOpen for later use
      if (child.props._cgPreviousOnOpen === undefined) {
        child.props._cgPreviousOnOpen = child.props.onOpen;
      }

      // Make a new function that calls the old onOpen and then the CollapsibleGroup's
      // handleCollapsible
      onOpen = function(collapsible) {
        child.props._cgPreviousOnOpen(collapsible);
        self.handleCollapsibleOpen(collapsible);
      }
    }

    child = React.addons.cloneWithProps(child, {
      key: 'ddmCollapsible' + index,
      ref: 'ddmCollapsible' + index,
      index: index,
      open: child.props.open === null ? this.props.open : child.props.open,
      onOpen: onOpen
    });

    return child;
  }

});
