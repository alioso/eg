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
		var $content = $('#main');

    $mainMenuClose.on('click', function() {
    	$(this).toggleClass('active');
      $mainMenuUl.toggleClass('visible');
      $page.toggleClass('passive');
      $mainVideo.toggleClass('passive');
      $content.toggleClass('behind');

      if ($(this).hasClass('active')) {
        $.fn.fullpage.setAllowScrolling(false);
      }
      else {
        $.fn.fullpage.setAllowScrolling(true);
      }
		});

    $('.main-menu__link').each(function () {
      var link = $(this).text();
      var href = link.toLowerCase();
      $(this).attr('href', '#'+href);

      $(this).on('click', function () {
        $mainMenuClose.removeClass('active');
        $mainMenuUl.removeClass('visible');
        $page.removeClass('passive');
        $mainVideo.removeClass('passive');
        $content.removeClass('behind');
        $.fn.fullpage.setAllowScrolling(true);
      });
    });

    // var rellax = new Rellax('.main-logo', {
    //   speed: +10,
    //   center: false,
    //   round: true
    // });


    $('#fullpage').fullpage({
      //Navigation
      menu: '#menu',
      lockAnchors: false,
      anchors:['everyGlobal', 'about', 'work', 'team'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 800,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: true,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      //Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Design
      controlArrows: true,
      verticalCentered: true,
      sectionsColor : false,
      paddingTop: false,
      paddingBottom: false,
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,
      parallax: false,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

      //Custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      lazyLoading: true,

      //events
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
	});

	$('.eg-modal').on('scroll', function(e) {

  });

  $('.openModal').on('click', function () {
    var $openLinkUrl = $(this).attr('href');

    console.log($openLinkUrl);

    $('body').addClass('overlayed');
    $('.eg-modal')
      .addClass('active')
      .removeClass('hidden');
    $($openLinkUrl)
      .addClass('active')
      .removeClass('hidden');
    $.fn.fullpage.setAllowScrolling(false);
  });

  $('.eg-modal__close').on('click', function() {
    $('body').removeClass('overlayed');
    $('.eg-modal, .eg-modal__container')
      .removeClass('active')
      .addClass('hidden');
    $.fn.fullpage.setAllowScrolling(true);
  });

})(jQuery);