var CollapsibleGroup = React.createClass({

  /* private values */

  collapsibles: [],



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
    console.log(this.props.accordion);
    return (
      <div className="ddm-collapsible-group" onClick={this.handleClick}>
        {this.renderChildren()}
      </div>
    );
  },



  /* event handlers */

  handleCollapsibleOpen: function (collapsible) {
    for (var i = 0; i < this.collapsibles.length; i++) {
      var child = this.collapsibles[i];
      var isSame = collapsible.props.index === child.props.index;
      if (isSame) { continue; }
      child.close();
    };
  },

  handleCollapsibleMount: function (collapsible) {
    this.collapsibles.push(collapsible);
  },



  /* methods */



  /* helpers */

  renderChildren: function () {
    return React.Children.map(this.props.children, this.renderChild);
  },

  renderChild: function (child, index) {
    if (child.type !== Collapsible.type) { return child; }

    child = React.addons.cloneWithProps(child, {
      index: index,
      onOpen: this.handleCollapsibleOpen,
      onMount: this.handleCollapsibleMount
    });

    return child;
  }

});
