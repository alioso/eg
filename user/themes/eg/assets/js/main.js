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
      anchors:['everyGlobal', 'about', 'work'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',

      //Scrolling
      css3: true,
      scrollingSpeed: 700,
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
      scrollOverflow: false,
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
    $.fn.fullpage.setAllowScrolling(false);
  });

  var $openLink = $('.openModal');

  $('.work-list a').on('click', function () {
    openModal();
  });

  $('.eg-modal__close').on('click', function() {
    closeModal();
  });

  function openModal() {
    var $openLinkUrl = $(this).attr('url');
    var $modalTarget = $('.eg-modal__container').attr('id');

    if ($openLinkUrl = $modalTarget) {
      $('.eg-modal')
        .addClass('active')
        .removeClass('hidden');
      $('.modal').attr('id', $(this)).addClass('active')
        .addClass('active')
        .removeClass('hidden');
    }
  }

  function closeModal() {
    $('.modal, .eg-modal')
      .removeClass('active')
      .addClass('hidden');
    $.fn.fullpage.setAllowScrolling(true);
  }

})(jQuery);