(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("React")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_8__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);

	module.exports.Collapsible = __webpack_require__(3);
	module.exports.CollapsibleHead = __webpack_require__(4);
	module.exports.CollapsibleBody = __webpack_require__(5);
	module.exports.CollapsibleGroup = __webpack_require__(6);



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/Users/rahlstrom/Projects/ddm-collapsible/node_modules/css-loader/index.js!/Users/rahlstrom/Projects/ddm-collapsible/node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"> 1%\", \"ie 8\"]}!/Users/rahlstrom/Projects/ddm-collapsible/node_modules/sass-loader/index.js!/Users/rahlstrom/Projects/ddm-collapsible/src/scss/collapsible.scss", function() {
			var newContent = require("!!/Users/rahlstrom/Projects/ddm-collapsible/node_modules/css-loader/index.js!/Users/rahlstrom/Projects/ddm-collapsible/node_modules/autoprefixer-loader/index.js?{browsers:[\"last 2 version\", \"> 1%\", \"ie 8\"]}!/Users/rahlstrom/Projects/ddm-collapsible/node_modules/sass-loader/index.js!/Users/rahlstrom/Projects/ddm-collapsible/src/scss/collapsible.scss");
			if(typeof newContent === 'string') newContent = [module.id, newContent, ''];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	exports.push([module.id, ".ddm-collapsible__body{overflow:hidden;height:0}.ddm-collapsible--will-open>.ddm-collapsible__body{}.ddm-collapsible--opening>.ddm-collapsible__body{-webkit-transition:height 0.3s;transition:height 0.3s}.ddm-collapsible--open>.ddm-collapsible__body{height:auto}.ddm-collapsible--will-close>.ddm-collapsible__body{}.ddm-collapsible--closing>.ddm-collapsible__body{-webkit-transition:height 0.3s;transition:height 0.3s}.ddm-collapsible--closed>.ddm-collapsible__body{}.ddm-collapsible__head{cursor:pointer;position:relative;padding-right:26px}.ddm-collapsible__arrow{position:absolute;top:0;right:0;display:block;height:100%;width:20px;text-align:center}.ddm-collapsible__arrow:before{content:\"\\25b8\";vertical-align:middle;display:block}.csstransforms .ddm-collapsible__arrow:before{-webkit-transition:all 0.2s;transition:all 0.2s}.ddm-collapsible--opening>.ddm-collapsible__head>.ddm-collapsible__arrow:before,.ddm-collapsible--open>.ddm-collapsible__head>.ddm-collapsible__arrow:before{content:\"\\25be\"}.csstransforms .ddm-collapsible--opening>.ddm-collapsible__head>.ddm-collapsible__arrow:before,.csstransforms .ddm-collapsible--open>.ddm-collapsible__head>.ddm-collapsible__arrow:before{content:\"\\25b8\";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}", ""]);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(8);
	var cx = React.addons.classSet;
	var CollapsibleHead = __webpack_require__(4);
	var CollapsibleBody = __webpack_require__(5);
	var Transitions = __webpack_require__(9);

	var Collapsible = React.createClass({displayName: 'Collapsible',

	  propTypes: {
	    open: React.PropTypes.bool,
	    onOpen: React.PropTypes.func,
	    onClose: React.PropTypes.func
	  },

	  getDefaultProps: function () {
	    return {
	      open: null,
	      onOpen: function () {},
	      onClose: function () {},
	      speed: 700 /* pixels per second */
	    }
	  },

	  getInitialState: function() {
	    return {
	      open: this.props.open || false,
	      willOpen: false,
	      opening: false,
	      willClose: false,
	      closing: false
	    }
	  },

	  render: function () {
	    return (
	      React.createElement("div", {className: this.getClassNames()}, 
	        this.renderChildren()
	      )
	    );
	  },

	  getClassNames: function () {
	    return cx({
	      'ddm-collapsible': true,
	      'ddm-collapsible--will-open': this.state.willOpen,
	      'ddm-collapsible--opening': this.state.opening,
	      'ddm-collapsible--open': this.state.open,
	      'ddm-collapsible--will-close': this.state.willClose,
	      'ddm-collapsible--closing': this.state.closing,
	      'ddm-collapsible--closed': this.isClosed()
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
	      ref: 'body',
	      key: 'body'
	    });
	  },

	  handleHeadClick: function (event) {
	    setTimeout(function () {
	      this.toggle();
	    }.bind(this), 0)
	  },

	  toggle: function () {
	    if (this.state.open) {
	      this.close();
	    } else if (this.isClosed()) {
	      this.open();
	    }
	  },

	  open: function () {
	    if (this.inTransition() || this.state.open) {
	      return; /* nothing to do or already doing something */
	    }

	    this.props.onOpen(this);

	    this.prepareOpen();
	  },

	  prepareOpen: function () {
	    this.setState({ willOpen: true }, function () {
	      this.after(this.hasWillOpenClass, this.startOpen);
	    }.bind(this));
	  },

	  hasWillOpenClass: function () {
	    return this.hasClass(this.getDOMNode(), 'ddm-collapsible--will-open');
	  },

	  startOpen: function () {
	    this.refs.body.addTransitionEndHandler(this.finishOpen);
	    this.setState({ willOpen: false, opening: true }, function () {
	      this.refs.body.setTransitionDuration();
	      this.after(this.hasOpeningClass, this.refs.body.setHeight);
	      if (!Transitions.supported()) { this.finishOpen(); }
	    }.bind(this));
	  },

	  hasOpeningClass: function () {
	    return this.hasClass(this.getDOMNode(), 'ddm-collapsible--opening');
	  },

	  finishOpen: function () {
	    this.setState({ opening: false, open: true }, function () {
	      this.refs.body.unsetTransitionDuration();
	      this.after(this.hasOpenClass, this.refs.body.unsetHeight);
	    }.bind(this));
	  },

	  hasOpenClass: function () {
	    return this.hasClass(this.getDOMNode(), 'ddm-collapsible--open');
	  },

	  close: function () {
	    if (this.inTransition() || this.isClosed()) {
	      return; /* nothing to do or already doing something */
	    }

	    this.props.onClose(this);

	    this.prepareClose();
	  },

	  prepareClose: function () {
	    this.refs.body.setHeight();
	    this.setState({ open: false, willClose: true }, this.startClose);
	  },

	  startClose: function () {
	    this.refs.body.addTransitionEndHandler(this.finishClose);
	    this.setState({ willClose: false, closing: true }, function () {
	      this.refs.body.setTransitionDuration();
	      this.after(this.readyToClose, this.refs.body.unsetHeight);
	      if (!Transitions.supported()) { this.finishClose(); }
	    });
	  },

	  readyToClose: function () {
	    var ready = (
	      this.hasClosingClass()
	      && this.refs.body.hasHeight()
	    );
	    return ready;
	  },

	  hasClosingClass: function () {
	    var hasClosingClass = this.hasClass(this.getDOMNode(), 'ddm-collapsible--closing');
	    return hasClosingClass;
	  },

	  finishClose: function () {
	    this.refs.body.unsetTransitionDuration();
	    this.setState({ closing: false });
	  },

	  isClosed: function () {
	    return !(
	      this.state.open
	      || this.inTransition()
	    );
	  },

	  inTransition: function () {
	    return (
	      this.state.willOpen
	      || this.state.opening
	      || this.state.willClose
	      || this.state.closing
	    );
	  },

	  // helpers; highly reusable; candidate for graduation
	  after: function after(check, action, limit) {
	    limit = limit === undefined ? 10 : limit;
	    if (check()) {
	      action();
	    } else if (limit > 1) {
	      setTimeout(function () {
	        after(check, action, --limit);
	      }.bind(this), 0);
	    }
	  },

	  hasClass: function (element, className) {
	    var hasClass = false;
	    if (element.classList) {
	      hasClass =  element.classList.contains(className);
	    } else {
	      hasClass = new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
	    }
	    return hasClass;
	  }

	});

	module.exports = Collapsible;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(8);

	var CollapsibleHead = React.createClass({displayName: 'CollapsibleHead',

	  /* react hooks */

	  propTypes: {
	    href: React.PropTypes.string,
	    onClick: React.PropTypes.func
	  },

	  getDefaultProps: function() {
	    return {
	      href: null,
	      onClick: function () {}
	    }
	  },

	  render: function () {
	    return (
	      React.createElement("div", {className: "ddm-collapsible__head", onClick: this.props.onClick}, 
	        this.renderChildren(), 
	        React.createElement("span", {className: "ddm-collapsible__arrow"})
	      )
	    );
	  },

	  renderChildren: function () {
	    var children;

	    if (this.props.href) {
	      children = (React.createElement("a", {href: this.props.href}, this.props.children));
	    } else {
	      children = this.props.children;
	    }

	    return children;
	  }

	});

	module.exports = CollapsibleHead;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(8);
	var Transitions = __webpack_require__(9);

	var CollapsibleBody = React.createClass({displayName: 'CollapsibleBody',
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
	      React.createElement("div", {className: "ddm-collapsible__body", key: "body"}, 
	        React.createElement("div", {className: "ddm-collapsible__content", ref: "content"}, 
	          this.props.children
	        )
	      )
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(8);
	var Collapsible = __webpack_require__(3);

	var CollapsibleGroup = React.createClass({displayName: 'CollapsibleGroup',

	  /* react hooks */

	  propTypes: {
	    accordion: React.PropTypes.bool,
	    open: React.PropTypes.bool
	  },

	  getDefaultProps: function () {
	    return {
	      accordion: false,
	      open: false
	    }
	  },

	  render: function () {
	    return (
	      React.createElement("div", {className: "ddm-collapsible-group"}, 
	        this.renderChildren()
	      )
	    );
	  },



	  /* event handlers */

	  handleCollapsibleOpen: function (collapsible) {
	    if (this.props.accordion) {
	      this.closeOtherCollapsibles(collapsible);
	    }
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
	      key: 'ddmCollapsible' + index,
	      ref: 'ddmCollapsible' + index,
	      index: index,
	      open: child.props.open === null ? this.props.open : child.props.open,
	      onOpen: this.handleCollapsibleOpen
	    });

	    return child;
	  }

	});

	module.exports = CollapsibleGroup;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isIE9 = memoize(function() {
			return /msie 9\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isIE9();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:stylesheet/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

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
	    if (!this.supported()) { return false; }

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

	    return eventNames[this.styleName()];
	  },

	  addEndEventListener: function (element, handler, property, autoRemove) {
	    if (!this.supported()) { return false; }

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
	    if (!this.supported()) { return false; }
	    element.removeEventListener(this.endEventName(), handler);
	  },

	  setDuration: function (element, duration) {
	    if (!this.supported()) { return false; }
	    element.style[this.styleName() + 'Duration'] = duration;
	  }
	};

	module.exports = Transitions;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ }
/******/ ])
});
