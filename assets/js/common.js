/*! common.js | Bulkit | CSS Ninja */

/* ==========================================================================
js pageloader file
========================================================================== */

$(document).ready(function($) {

  "use strict";

  //Page loader
  if ($('.pageloader').length) {

    // $('.pageloader').toggleClass('is-active');

    // $(window).on('load', function() {
    //   var pageloaderTimeout = setTimeout(function(pageloaderTimeout) {
    //     $('.pageloader').removeClass('is-active');
    //     $('.infraloader').removeClass('is-active');
    //     clearTimeout(pageloaderTimeout);
    //   }, 700);
    // })
    $('.pageloader').removeClass('is-active');
    $('.infraloader').removeClass('is-active');
  }
});
