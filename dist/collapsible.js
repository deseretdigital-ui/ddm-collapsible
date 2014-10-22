// collapsible init function
var ddm = ddm || {};
ddm.collapsible = (function ($) {

  // collapsible constructor
  var Collapsible = function ($element, options) {

    var collapsible = this;
    $element.addClass('ddm-collapsible');

    // wrap the body
    var $content = $element.find(options.body);
    $content.wrap('<div class="ddm-collapsible__body"></div>');
    var $body = $element.find('.ddm-collapsible__body');

    // bind head as toggle
    var $head = $element.find(options.head);
    $head.addClass('ddm-collapsible__head');
    $head.on('click.ddm.collapsible', function (event) {
      $element.trigger('toggle.ddm.collapsible');
    });

    // add arrow
    if (options.arrow !== false) {
      $head.addClass('ddm-collapsible__head--with-arrow');
    }

    collapsible.isOpen = function () {
      return $element.hasClass('ddm-collapsible--open');
    };

    $element.on('open.ddm.collapsible', function (event) {
      var height = $body.children().eq(0).outerHeight(true);
      $body.css('max-height', height);
      $element.addClass('ddm-collapsible--open');
    });

    $element.on('close.ddm.collapsible', function (event) {
      $body.css('max-height', '');
      $element.removeClass('ddm-collapsible--open');
    });

    $element.on('toggle.ddm.collapsible', function (event) {
      if (collapsible.isOpen()) {
        $element.trigger('close.ddm.collapsible');
      } else {
        $element.trigger('open.ddm.collapsible');
      }
    });

    $element.on('teardown.ddm.collapsible', function (event) {
      $element.removeClass('ddm-collapsible ddm-collapsible--open');
      $content.unwrap();
      $head.removeClass('ddm-collapsible__head ddm-collapsible__head--with-arrow');
      $head.off('.ddm-collapsible');
      $element.off('.ddm-collapsible');
      $element.removeData('ddm-collapsible-api');
    });

    return collapsible;
  };



  var collapsible = function ($element, options) {
    $element = $element.eq(0); // only handles one collapsible at a time
    var api = $element.data('ddm-collapsible-api');
    if (!api) {
      api = new Collapsible($element, options);
      $element.data('ddm-collapsible-api', api);
    }
    return api;
  };

  return collapsible;
})(jQuery);
