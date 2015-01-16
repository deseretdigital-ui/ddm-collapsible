module.exports = (function () {
  var IE8 = false;
  if (navigator.userAgent.search('MSIE 8') > 0) {
    IE8 = true;
    return IE8;
  }
}());

