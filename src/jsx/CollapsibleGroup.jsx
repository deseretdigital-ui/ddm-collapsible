var CollapsibleGroup = React.createClass({

  /* react hooks */

  propTypes: {
    accordion: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      accordion: true
    }
  },

  render: function () {
    return (
      <div className="ddm-collapsible-group">
        {this.renderChildren()}
      </div>
    );
  },



  /* event handlers */

  handleCollapsibleOpen: function (collapsible) {
    this.closeOtherCollapsibles(collapsible);
  },



  /* methods */



  /* helpers */

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

    child = React.addons.cloneWithProps(child, {
      index: index,
      onOpen: this.handleCollapsibleOpen,
      ref: 'ddmCollapsible' + index
    });

    return child;
  }

});
