
// See http://youmightnotneedjquery.com/#find_elements
var getHtml = function () {
  return document.querySelectorAll('html')[0];
};

// See http://youmightnotneedjquery.com/#has_class
var hasClass = function (domElement, className) {
  if (domElement.classList) {
    return domElement.classList.contains(className);
  } else {
    new RegExp('(^| )' + className + '( |$)', 'gi').test(domElement.className);
  }
};

// See http://youmightnotneedjquery.com/#add_class
var addClass = function (domElement, className) {
  if (domElement.classList) {
    domElement.classList.add(className);
  } else {
    domElement.className += ' ' + className;
  }
};

// See http://stackoverflow.com/questions/7212102/detect-with-javascript-or-jquery-if-css-transform-2d-is-available#12625986
var propertySupported = function () {
  var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');

  for(var i = 0; i < prefixes.length; i++) {
    if(document.createElement('div').style[prefixes[i]] !== undefined) {
      return prefixes[i];
    }
  }

  return false;
};

var doesBrowserSupportCssTransforms = function () {
  var html = getHtml();
  var className = 'csstransforms';

  if (hasClass(html, className)) {
    return true;
  } else if (propertySupported() !== false) {
    addClass(html, className);
    return true;
  }

  return false;
};

module.exports = doesBrowserSupportCssTransforms;
