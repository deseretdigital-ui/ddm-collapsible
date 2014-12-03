!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("react/addons"));else if("function"==typeof define&&define.amd)define(["react/addons"],t);else{var n=t("object"==typeof exports?require("react/addons"):e.React);for(var s in n)("object"==typeof exports?exports:e)[s]=n[s]}}(this,function(e){return function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(5),e.exports.Collapsible=n(1),e.exports.CollapsibleHead=n(2),e.exports.CollapsibleBody=n(3),e.exports.CollapsibleGroup=n(4)},function(e,t,n){var s=n(8),i=n(2),o=n(3),r=n(10);e.exports=s.createClass({displayName:"Collapsible",propTypes:{open:s.PropTypes.bool,onOpen:s.PropTypes.func,onClose:s.PropTypes.func},getDefaultProps:function(){return{open:null,onOpen:function(){},onClose:function(){}}},getInitialState:function(){return{open:this.props.open||!1,willOpen:!1,opening:!1,willClose:!1,closing:!1}},render:function(){return s.createElement("div",{className:this.getClassNames()},this.renderChildren())},getClassNames:function(){var e={"ddm-collapsible":!0,"ddm-collapsible--will-open":this.state.willOpen,"ddm-collapsible--opening":this.state.opening,"ddm-collapsible--open":this.state.open,"ddm-collapsible--will-close":this.state.willClose,"ddm-collapsible--closing":this.state.closing,"ddm-collapsible--closed":this.isClosed()};return[s.addons.classSet(e),this.props.className].join(" ")},renderChildren:function(){return s.Children.map(this.props.children,this.renderChild)},renderChild:function(e){return e.type===i.type?this.renderHead(e):e.type===o.type?this.renderBody(e):e},renderHead:function(e){return s.addons.cloneWithProps(e,{ref:"head",onClick:this.handleHeadClick})},renderBody:function(e){return s.addons.cloneWithProps(e,{ref:"body",key:"body"})},handleHeadClick:function(){setTimeout(function(){this.toggle()}.bind(this),0)},toggle:function(){this.state.open?this.close():this.isClosed()&&this.open()},open:function(){this.inTransition()||this.state.open||(this.props.onOpen(this),this.prepareOpen())},prepareOpen:function(){this.setState({willOpen:!0},function(){this.after(this.hasWillOpenClass,this.startOpen)}.bind(this))},hasWillOpenClass:function(){return this.hasClass(this.getDOMNode(),"ddm-collapsible--will-open")},startOpen:function(){this.refs.body.addTransitionEndHandler(this.finishOpen),this.setState({willOpen:!1,opening:!0},function(){this.refs.body.setTransitionDuration(),this.after(this.hasOpeningClass,this.refs.body.setHeight),r.supported()||this.finishOpen()}.bind(this))},hasOpeningClass:function(){return this.hasClass(this.getDOMNode(),"ddm-collapsible--opening")},finishOpen:function(){this.setState({opening:!1,open:!0},function(){this.refs.body.unsetTransitionDuration(),this.after(this.hasOpenClass,this.refs.body.unsetHeight)}.bind(this))},hasOpenClass:function(){return this.hasClass(this.getDOMNode(),"ddm-collapsible--open")},close:function(e){return e===!1?(this.props.onClose(this),void this.forceClose()):void(this.inTransition()||this.isClosed()||(this.props.onClose(this),this.prepareClose()))},prepareClose:function(){this.refs.body.setHeight(),this.setState({open:!1,willClose:!0},this.startClose)},startClose:function(){this.refs.body.addTransitionEndHandler(this.finishClose),this.setState({willClose:!1,closing:!0},function(){this.refs.body.setTransitionDuration(),this.after(this.readyToClose,this.refs.body.unsetHeight),r.supported()||this.finishClose()})},readyToClose:function(){var e=this.hasClosingClass()&&this.refs.body.hasHeight();return e},hasClosingClass:function(){var e=this.hasClass(this.getDOMNode(),"ddm-collapsible--closing");return e},finishClose:function(){this.refs.body.unsetTransitionDuration(),this.setState({closing:!1})},forceClose:function(){this.setState({open:!1,willOpen:!1,opening:!1,willClose:!1,closing:!1})},isClosed:function(){return!(this.state.open||this.inTransition())},inTransition:function(){return this.state.willOpen||this.state.opening||this.state.willClose||this.state.closing},after:function l(e,t,n){n=void 0===n?10:n,e()?t():n>1&&setTimeout(function(){l(e,t,--n)}.bind(this),0)},hasClass:function(e,t){var n=!1;return n=e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className)}})},function(e,t,n){var s=n(8);e.exports=s.createClass({displayName:"CollapsibleHead",propTypes:{href:s.PropTypes.string,onClick:s.PropTypes.func},getDefaultProps:function(){return{href:null,onClick:function(){}}},render:function(){return s.createElement("div",{className:this.getClasses(),onClick:this.props.onClick},this.renderChildren(),s.createElement("span",{className:"ddm-collapsible__arrow"}))},getClasses:function(){var e={"ddm-collapsible__head":!0};return[s.addons.classSet(e),this.props.className].join(" ")},renderChildren:function(){var e;return e=this.props.href?s.createElement("a",{href:this.props.href},this.props.children):this.props.children}})},function(e,t,n){var s=n(8),i=n(10);e.exports=s.createClass({displayName:"CollapsibleBody",propTypes:{speed:s.PropTypes.number},getDefaultProps:function(){return{speed:700}},render:function(){return s.createElement("div",{className:this.getClasses(),key:"body"},this.props.children)},getClasses:function(){var e={"ddm-collapsible__body":!0};return[s.addons.classSet(e),this.props.className].join(" ")},setHeight:function(){this.getDOMNode().style.height=this.getContentHeight()+"px"},hasHeight:function(){var e=this.getDOMNode().style.height,t=this.getContentHeight()+"px",n=e===t;return n},unsetHeight:function(){this.getDOMNode().style.height=null},getContentHeight:function(){for(var e=0,t=this.getDOMNode().children,n=t.length,s=0;n>s;s++)e+=t[s].offsetHeight;return e},addTransitionEndHandler:function(e){return i.addEndEventListener(this.getDOMNode(),e,"height")},setTransitionDuration:function(){var e=this.getContentHeight(),t=(e/this.props.speed).toFixed(2)+"s";i.setDuration(this.getDOMNode(),t)},unsetTransitionDuration:function(){i.setDuration(this.getDOMNode(),null)}})},function(e,t,n){var s=n(8),i=n(1);e.exports=s.createClass({displayName:"CollapsibleGroup",propTypes:{accordion:s.PropTypes.bool,open:s.PropTypes.bool},getDefaultProps:function(){return{accordion:!1,open:!1}},render:function(){return s.createElement("div",{className:this.getClasses()},this.renderChildren())},getClasses:function(){var e={"ddm-collapsible-group":!0};return[s.addons.classSet(e),this.props.className].join(" ")},handleCollapsibleOpen:function(e){this.props.accordion&&this.closeOtherCollapsibles(e)},closeOtherCollapsibles:function(e){for(var t in this.refs){var n=this.refs[t],s=n.type!==i.type,o=n.props.index===e.props.index;s&&!o&&n.close()}},renderChildren:function(){return s.Children.map(this.props.children,this.renderChild)},renderChild:function(e,t){return e.type!==i.type?e:e=s.addons.cloneWithProps(e,{key:"ddmCollapsible"+t,ref:"ddmCollapsible"+t,index:t,open:null===e.props.open?this.props.open:e.props.open,onOpen:this.handleCollapsibleOpen})}})},function(e,t,n){var s=n(6);"string"==typeof s&&(s=[[e.id,s,""]]);n(7)(s,{})},function(e,t,n){t=e.exports=n(9)(),t.push([e.id,'.ddm-collapsible__body{overflow:hidden;height:0}.ddm-collapsible--opening>.ddm-collapsible__body{-webkit-transition:height .3s;transition:height .3s}.ddm-collapsible--open>.ddm-collapsible__body{height:auto}.ddm-collapsible--closing>.ddm-collapsible__body{-webkit-transition:height .3s;transition:height .3s}.ddm-collapsible__head{cursor:pointer;position:relative;padding-right:26px}.ddm-collapsible__arrow{position:absolute;top:0;right:0;display:block;height:100%;width:20px;text-align:center}.ddm-collapsible__arrow:before{content:"\\25b8";vertical-align:middle;display:block}.csstransforms .ddm-collapsible__arrow:before{-webkit-transition:all .2s;transition:all .2s}.ddm-collapsible--opening>.ddm-collapsible__head>.ddm-collapsible__arrow:before,.ddm-collapsible--open>.ddm-collapsible__head>.ddm-collapsible__arrow:before{content:"\\25be"}.csstransforms .ddm-collapsible--opening>.ddm-collapsible__head>.ddm-collapsible__arrow:before,.csstransforms .ddm-collapsible--open>.ddm-collapsible__head>.ddm-collapsible__arrow:before{content:"\\25b8";-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}',""])},function(e){function t(e,t){for(var n=0;n<e.length;n++){var s=e[n],o=a[s.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](s.parts[r]);for(;r<s.parts.length;r++)o.parts.push(i(s.parts[r],t))}else{for(var l=[],r=0;r<s.parts.length;r++)l.push(i(s.parts[r],t));a[s.id]={id:s.id,refs:1,parts:l}}}}function n(e){for(var t=[],n={},s=0;s<e.length;s++){var i=e[s],o=i[0],r=i[1],l=i[2],a=i[3],d={css:r,media:l,sourceMap:a};n[o]?n[o].parts.push(d):t.push(n[o]={id:o,parts:[d]})}return t}function s(){var e=document.createElement("style"),t=h();return e.type="text/css",t.appendChild(e),e}function i(e,t){var n,i,o;if(t.singleton){var a=u++;n=c||(c=s()),i=r.bind(null,n,a,!1),o=r.bind(null,n,a,!0)}else n=s(),i=l.bind(null,n),o=function(){n.parentNode.removeChild(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}function o(e,t,n){var s=["/** >>"+t+" **/","/** "+t+"<< **/"],i=e.lastIndexOf(s[0]),o=n?s[0]+n+s[1]:"";if(e.lastIndexOf(s[0])>=0){var r=e.lastIndexOf(s[1])+s[1].length;return e.slice(0,i)+o+e.slice(r)}return e+o}function r(e,t,n,s){var i=n?"":s.css;if(e.styleSheet)e.styleSheet.cssText=o(e.styleSheet.cssText,t,i);else{var r=document.createTextNode(i),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(r,l[t]):e.appendChild(r)}}function l(e,t){var n=t.css,s=t.media,i=t.sourceMap;if(i&&"function"==typeof btoa)try{n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(i))+" */",n='@import url("data:stylesheet/css;base64,'+btoa(n)+'")'}catch(o){}if(s&&e.setAttribute("media",s),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var a={},d=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=d(function(){return/msie 9\b/.test(window.navigator.userAgent.toLowerCase())}),h=d(function(){return document.head||document.getElementsByTagName("head")[0]}),c=null,u=0;e.exports=function(e,s){s=s||{},"undefined"==typeof s.singleton&&(s.singleton=p());var i=n(e);return t(i,s),function(e){for(var o=[],r=0;r<i.length;r++){var l=i[r],d=a[l.id];d.refs--,o.push(d)}if(e){var p=n(e);t(p,s)}for(var r=0;r<o.length;r++){var d=o[r];if(0===d.refs){for(var h=0;h<d.parts.length;h++)d.parts[h]();delete a[d.id]}}}}},function(t){t.exports=e},function(e){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];e.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return e.join("")},e}},function(e,t){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(s){if(n[s])return n[s].exports;var i=n[s]={exports:{},id:s,loaded:!1};return e[s].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e){var t={supported:function(){return this.styleName()!==!1},styleName:function(){for(var e=["transition","WebkitTransition","MozTransition","OTransition","msTransition"],t=document.createElement("div").style,n=!1,s=0;s<e.length;s++){var i=e[s];if(i in t){n=i;break}}return n},endEventName:function(){if(!this.supported())return!1;var e={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"};return"TransitionEvent"in window||delete e.transition,e[this.styleName()]},addEndEventListener:function(e,t,n,s){if(!this.supported())return!1;if(n&&(t=function(e){return function(t){t.propertyName===n&&e(t)}}(t)),s!==!1){var i=this.removeEndEventListener.bind(this);t=function(n){return function(s){n(s),i(e,t)}}(t)}return e.addEventListener(this.endEventName(),t,!1),t},removeEndEventListener:function(e,t){return this.supported()?void e.removeEventListener(this.endEventName(),t):!1},setDuration:function(e,t){return this.supported()?void(e.style[this.styleName()+"Duration"]=t):!1}};e.exports=t}])})}])});