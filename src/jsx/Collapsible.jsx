var Collapsible = React.createClass({

  /* react hooks */

  render: function () {
    return (
      <div className={this.getClassNames()} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  },

  getInitialState: function() {
    return {
      open: false
    }
  },

  componentWillMount: function () {
    if (this.props.onMount) {
      this.props.onMount(this);
    }
  },

  componentDidMount: function () {
    this.setMaxHeight(false);
  },

  componentDidUpdate: function () {
    this.setMaxHeight();
  },



  /* event handlers */

  handleClick: function (event) {
    $target = $(event.target);
    var isHead = $target.closest('.ddm-collapsible__head').length > 0;
    if (isHead) {
      this.toggle();
    }
  },



  /* methods */

  open: function () {
    this.setState({open: true});

    if (this.props.onOpen) {
      this.props.onOpen(this);
    }
  },

  close: function () {
    this.setState({open: false});
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
      'ddm-collapsible--open': this.state.open
    });
  },

  getBody: function () {
    return $(this.getDOMNode()).find('.ddm-collapsible__body');
  },

  setMaxHeight: function (animate) {
    var maxHeight = (this.state.open) ? this.getBody().find(':first-child').outerHeight(true) : '';
    this.getBody().css('max-height', maxHeight);
  }

});
