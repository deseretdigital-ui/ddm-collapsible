var React = require('react/addons');
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
      React.addons.classSet(classes),
      this.props.className
    ].join(' ');
  },

  setHeight: function () {
    this.getDOMNode().style.height = this.getContentHeight() + 'px';
  },

  hasHeight: function () {
    var height = this.getDOMNode().style.height;
    var contentHeight = this.getContentHeight() + 'px';
    var hasHeight = height === contentHeight;
    return hasHeight;
  },

  unsetHeight: function () {
    this.getDOMNode().style.height = null;
  },

  getContentHeight: function () {
    var height = 0;
    var children = this.getDOMNode().children;
    var limit = children.length;
    for (var i = 0; i < limit; i++) {
      height += children[i].offsetHeight;
    }
    return height;
  },

  addTransitionEndHandler: function (handler) {
    return Transitions.addEndEventListener(this.getDOMNode(), handler, 'height');
  },

  setTransitionDuration: function () {
    var contentHeight = this.getContentHeight();
    var duration = (contentHeight / this.props.speed).toFixed(2) + 's';
    Transitions.setDuration(this.getDOMNode(), duration);
  },

  unsetTransitionDuration: function () {
    Transitions.setDuration(this.getDOMNode(), null);
  }

});
