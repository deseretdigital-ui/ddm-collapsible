var isIE8 = function () {
  var IE8 = false;
  if (navigator.userAgent.search('MSIE 8') > 0) {
    IE8 = true;
    return IE8;
  }
}

 module.exports = isIE8;

