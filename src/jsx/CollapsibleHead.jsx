var CollapsibleHead = React.createClass({

  /* react hooks */

  propTypes: {
    href: React.PropTypes.string,
    arrow: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      href: null,
      arrow: true
    }
  },

  render: function () {
    var children;

    if (this.props.href) {
      children = (
        <a href={this.props.href}>{this.props.children}</a>
      );
    } else {
      children = this.props.children;
    }

    return (
      <div className={this.getClassNames()}>{children}</div>
    );
  },



  /* event handlers */



  /* methods */



  /* helpers */

  getClassNames: function () {
    return React.addons.classSet({
      'ddm-collapsible__head': true,
      'ddm-collapsible__head--with-arrow': this.props.arrow
    });
  }

});
