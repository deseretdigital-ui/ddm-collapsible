var React = require('react/addons');
var Transitions = require('transition-helpers');

var CollapsibleBody = React.createClass({
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
      <div className="ddm-collapsible__body" key="body">
        <div className="ddm-collapsible__content" ref="content">
          {this.props.children}
        </div>
      </div>
    );
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
    return this.refs.content.getDOMNode().offsetHeight;
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

module.exports = CollapsibleBody;
