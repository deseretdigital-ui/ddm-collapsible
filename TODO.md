+ Refactor transition end helpers.
+ Move body related methods to body component.
+ Fallback for browsers that don't support transitionEnd.
+ Experimental Rule: Set state and respond to prevState and nextState in componentDidUpdate to manipulate DOM.
+ Handle toggle to cancel opening or closing states so that close can occur in the middle of open and vice versa.
+ Test in all browsers.
