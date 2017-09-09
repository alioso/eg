(function($) {

	"use strict";

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var $mainMenuUl = $('#mainMenuUl');
		var $mainMenuClose = $('#mainMenuClose');
		var $page = $('.page');
		var $mainVideo = $('.main-video');

    $mainMenuClose.on('click', function() {
    	$(this).toggleClass('active');
      $mainMenuUl.toggleClass('visible');
      $page.toggleClass('passive');
      $mainVideo.toggleClass('passive');
		});

    var rellax = new Rellax('.main-logo', {
      speed: -2,
      center: false,
      round: true,
    });

	});

})(jQuery);