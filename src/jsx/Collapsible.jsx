var Collapsible = React.createClass({

  propTypes: {
    open: React.PropTypes.bool,
    onOpen: React.PropTypes.func,
    onClose: React.PropTypes.func
  },

  getDefaultProps: function () {
    return {
      open: null,
      onOpen: function () {},
      onClose: function () {}
    }
  },

  getInitialState: function() {
    console.log(this.props.open);
    return {
      open: (this.props.open || false)
    }
  },

  render: function () {
    console.log('render');
    return (
      <div className={this.getClassNames()}>
        {this.renderChildren()}
      </div>
    );
  },

  getClassNames: function () {
    return React.addons.classSet({
      'ddm-collapsible': true,
      'ddm-collapsible--open': this.state.open
    });
  },

  renderChildren: function () {
    return React.Children.map(this.props.children, this.renderChild);
  },

  renderChild: function (child, index) {
    if (child.type === CollapsibleHead.type) {
      return this.renderHead(child);
    } else if (child.type === CollapsibleBody.type) {
      return this.renderBody(child);
    } else {
      return child;
    }
  },

  renderHead: function (child) {
    return React.addons.cloneWithProps(child, {
      ref: 'head',
      onClick: this.handleHeadClick
    });
  },

  renderBody: function (child) {
    return React.addons.cloneWithProps(child, {
      ref: 'body'
    });
  },

  componentDidMount: function () {
    this.setInitialHeight();
  },

  componentDidUpdate: function (prevProps, prevState) {
    if (!prevState.open && this.state.open) { /* opening */
      this.transitionToHeightAuto();
    } else if (prevState.open && !this.state.open) { /* closing */
      this.transitionFromHeightAuto();
    }
  },

  setInitialHeight: function () {
    var body = this.refs.body.getDOMNode();
    var height = this.state.open ? 'auto' : '0';
    body.style.height = height;
  },

  handleHeadClick: function (event) {
    console.log('click');
    this.toggle();
  },

  open: function () {
    if (this.state.open) { return; }
    this.props.onOpen(this);
    this.setState({ open: true });
  },

  close: function () {
    if (!this.state.open) { return; }
    this.props.onClose(this);
    this.setState({ open: false });
  },

  toggle: function () {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  },

  handleTransitionEnd: function (event) {
    console.log('transitionend');
    if (event.propertyName == 'height') {
      var body = this.refs.body.getDOMNode();
      this.removeClass(body, 'ddm-collapsible__body--transition');
      body.style.height = 'auto';
      body.removeEventListener('transitionend', this.handleTransitionEnd, false);
    }
  },

  transitionToHeightAuto: function () { /* encapsulate messy stuff */
    console.log('transitionToHeightAuto');
    var body = this.refs.body.getDOMNode();
    body.style.height = '0px';
    this.addClass(body, 'ddm-collapsible__body--transition');
    body.style.height = this.getContentHeight();
    body.addEventListener('transitionend', this.handleTransitionEnd, false);
  },

  setHeightZero: function () {
    var body = this.refs.body.getDOMNode();
    this.addClass(body, 'ddm-collapsible__body--transition');
    body.style.height = '0px';
  },

  transitionFromHeightAuto: function () { /* encapsulate messy stuff */
    var body = this.refs.body.getDOMNode();
    body.style.height = this.getContentHeight();
    setTimeout(this.setHeightZero, 0);
  },

  getContentHeight: function () {
    console.log(this.refs.body.refs.content.getDOMNode().offsetHeight);
    return this.refs.body.refs.content.getDOMNode().offsetHeight + 'px';
  },

  addClass: function (element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else {
      element.className += ' ' + className;
    }
  },

  removeClass: function (element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else {
      element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
  }

});
