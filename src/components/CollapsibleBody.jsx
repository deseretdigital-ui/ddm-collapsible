var React = require('react');
var ReactDOM = require('react-dom');
var cx = require('classnames');
var Transitions = require('transition-helpers');

module.exports = React.createClass({ displayName: 'CollapsibleBody',

  propTypes: {
    speed: React.PropTypes.number
  },

  getDefaultProps: function () {
    return {
      speed: 700 // pixels per second: .3s duration for about 210px
    };
  },

  render: function () {
    return (
      <div className={this.getClasses()} key="body">
        {this.props.children}
      </div>
    );
  },

  getClasses: function () {
    var classes = {
      'ddm-collapsible__body': true
    };

    return [
      cx(classes),
      this.props.className
    ].join(' ');
  },

  setHeight: function () {
    ReactDOM.findDOMNode(this).style.height = this.getContentHeight() + 'px';
  },

  hasHeight: function () {
    var height = ReactDOM.findDOMNode(this).style.height;
    var contentHeight = this.getContentHeight() + 'px';
    var hasHeight = height === contentHeight;
    return hasHeight;
  },

  unsetHeight: function () {
    ReactDOM.findDOMNode(this).style.height = null;
  },

  getContentHeight: function () {
    var height = 0;
    var children = ReactDOM.findDOMNode(this).children;
    var limit = children.length;
    for (var i = 0; i < limit; i++) {
      height += children[i].offsetHeight;
    }
    return height;
  },

  addTransitionEndHandler: function (handler) {
    return Transitions.addEndEventListener(ReactDOM.findDOMNode(this), handler, 'height');
  },

  setTransitionDuration: function () {
    var contentHeight = this.getContentHeight();
    var duration = (contentHeight / this.props.speed).toFixed(2) + 's';
    Transitions.setDuration(ReactDOM.findDOMNode(this), duration);
  },

  unsetTransitionDuration: function () {
    Transitions.setDuration(ReactDOM.findDOMNode(this), null);
  }

});
