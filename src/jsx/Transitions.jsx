var Transitions = {
  supported: function () {
    return this.styleName() !== false;
  },

  styleName: function () {
    var styleNames = [
      'transition',
      'WebkitTransition',
      'MozTransition',
      'OTransition',
      'msTransition'
    ];

    var style = document.createElement('div').style;
    var styleName = false;

    for (var i = 0; i < styleNames.length; i++) {
      var key = styleNames[i];
      if (key in style) {
        styleName = key;
        break;
      }
    }

    return styleName;
  },

  endEventName: function () {
    /* adapted from https://github.com/facebook/react/blob/master/src/addons/transitions/ReactTransitionEvents.js */

    var eventNames = {
      'transition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'mozTransitionEnd',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd'
    };

    if (!('TransitionEvent' in window)) {
      delete eventNames['transition'];
    }

    var styleName = this.styleName();
    var eventName = false;

    if (styleName !== false) {
      eventName = eventNames[styleName];
    }

    return eventName;
  },

  addEndEventListener: function (element, handler, property, autoRemove) {
    if (property) {
      handler = (function (originalHandler) {
        return function (event) {
          if (event.propertyName === property) {
            originalHandler(event);
          }
        };
      })(handler);
    }

    if (autoRemove !== false) {
      var remove = this.removeEndEventListener.bind(this);
      handler = (function (originalHandler) {
        return function (event) {
          originalHandler(event);
          remove(element, handler);
        };
      })(handler);
    }

    element.addEventListener(this.endEventName(), handler, false);
    return handler; /* returns new handler for removal */
  },

  removeEndEventListener: function (element, handler) {
    element.removeEventListener(this.endEventName(), handler);
  },

  setDuration: function (element, duration) {
    element.style[this.styleName() + 'Duration'] = duration;
  }
};
