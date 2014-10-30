var CollapsibleGroup = React.createClass({

  closeSiblingsOf: function ($collapsible) {
    /* close sibling collapsibles? */
  },

  handleClick: function (event) {
    $target = $(event.target);
    var isHead = $target.closest('.ddm-collapsible__head').length > 0;
    if (isHead) {
      var $collapsible = $target.closest('.ddm-collapsible');
      this.closeSiblingsOf($collapsible);
    }
  },

  render: function () {
    return (
      <div className="ddm-collapsible-group" onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
});

var CollapsibleHead = React.createClass({
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
    var head;
    if (this.props.href) {
      head = (
        <a href={this.props.href}>{this.props.children}</a>
      );
    } else {
      head = this.props.children;
    }

    var cx = React.addons.classSet;
    var classNames = {
      'ddm-collapsible__head': true,
      'ddm-collapsible__head--with-arrow': this.props.arrow
    };

    return (
      <div className={cx(classNames)}>{head}</div>
    );
  }
});

var CollapsibleBody = React.createClass({
  render: function () {
    return (
      <div className="ddm-collapsible__body">
        {this.props.children}
      </div>
    );
  }
});

var Collapsible = React.createClass({
  getInitialState: function() {
    return {
      open: false
    }
  },

  open: function () {
    this.setState({open: true});
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

  handleClick: function (event) {
    $target = $(event.target);
    var isHead = $target.closest('.ddm-collapsible__head').length > 0;
    if (isHead) {
      this.toggle();
    }
  },

  componentDidUpdate: function () {
    var $body = $(this.getDOMNode()).find('.ddm-collapsible__body');
    if (this.state.open) {
      var height = $body.find(':first-child').outerHeight(true);
      $body.css('max-height', height);
    } else {
      $body.css('max-height', '');
    }
  },

  render: function () {
    var cx = React.addons.classSet;
    var classNames = {
      'ddm-collapsible': true,
      'ddm-collapsible--open': this.state.open
    };

    return (
      <div className={cx(classNames)} onClick={this.handleClick}>
        {this.props.children}
      </div>
    );
  }
});
