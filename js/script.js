jQuery(function ($) {
	'use strict';

	/* ----------------------------------------------------------- */
	/*  Fixed header
	/* ----------------------------------------------------------- */
	$(window).on('scroll', function () {

		// fixedHeader on scroll
		function fixedHeader() {
			if ($(window).scrollTop() > 70) {
				$('.site-navigation').addClass('navbar-fixed');
			} else {
				$('.site-navigation').removeClass('navbar-fixed');
			}
		}
		fixedHeader();


		// Count Up
		function counter() {
			var oTop;
			if ($('.counterUp').length !== 0) {
				oTop = $('.counterUp').offset().top - window.innerHeight;
			}
			if ($(window).scrollTop() > oTop) {
				$('.counterUp').each(function () {
					var $this = $(this),
						countTo = $this.attr('data-count');
					$({
						countNum: $this.text()
					}).animate({
						countNum: countTo
					}, {
						duration: 1000,
						easing: 'swing',
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
						}
					});
				});
			}
		}
		counter();


		// scroll to top btn show/hide
		function scrollTopBtn() {
			var scrollToTop = $('#back-to-top'),
				scroll = $(window).scrollTop();
			if (scroll >= 50) {
				scrollToTop.fadeIn();
			} else {
				scrollToTop.fadeOut();
			}
		}
		scrollTopBtn();
	});


	/* ----------------------------------------------------------- */
	/*  Site search
   /* ----------------------------------------------------------- */
	// navSearch show/hide
	function navSearch() {
		$('.nav-search').on('click', function () {
			$('.search-block').fadeIn(350);
		});
		$('.search-close').on('click', function () {
			$('.search-block').fadeOut(350);
		});
	}
	navSearch();


	// back to top
	function backToTop() {
		$('#back-to-top').on('click', function () {
			$('#back-to-top').tooltip('hide');
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	}
	backToTop();


	// banner-carousel
	function bannerCarouselOne() {
		$('.banner-carousel.banner-carousel-1').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: true,
			speed: 600,
			arrows: true,
			prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
		});
		$('.banner-carousel.banner-carousel-1').slickAnimation();
	}
	bannerCarouselOne();


	// banner Carousel Two
	function bannerCarouselTwo() {
		$('.banner-carousel.banner-carousel-2').slick({
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: false,
			speed: 600,
			arrows: true,
			prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
		});
	}
	bannerCarouselTwo();


	// pageSlider
	function pageSlider() {
		$('.page-slider').slick({
			fade: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: false,
			speed: 600,
			arrows: true,
			prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>'
		});
	}
	pageSlider();


	// Shuffle js filter and masonry
	function projectShuffle() {
		if ($('.shuffle-wrapper').length !== 0) {
			var Shuffle = window.Shuffle;
			var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
				itemSelector: '.shuffle-item',
				sizer: '.shuffle-sizer',
				buffer: 1
			});
			$('input[name="shuffle-filter"]').on('change', function (evt) {
				var input = evt.currentTarget;
				if (input.checked) {
					myShuffle.filter(input.value);
				}
			});
			$('.shuffle-btn-group label').on('click', function () {
				$('.shuffle-btn-group label').removeClass('active');
				$(this).addClass('active');
			});
		}
	}
	projectShuffle();


	// testimonial carousel
	function testimonialCarousel() {
		$('.testimonial-slide').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true,
			speed: 600,
			arrows: false
		});
	}
	testimonialCarousel();


	// team carousel
	function teamCarousel() {
		$('.team-slide').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 2,
			arrows: true,
			prevArrow: '<button type="button" class="carousel-control left" aria-label="carousel-control"><i class="fas fa-chevron-left"></i></button>',
			nextArrow: '<button type="button" class="carousel-control right" aria-label="carousel-control"><i class="fas fa-chevron-right"></i></button>',
			responsive: [{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 481,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	}
	teamCarousel();


	// media popup
	$(document).ready(function () {

		$('.gallery-popup').colorbox({
			rel: 'gallery-popup',
			transition: 'slideshow',
			innerHeight: '500'
		});

		$('.popup').colorbox({
			iframe: true,
			innerWidth: 600,
			innerHeight: 400
		});

	});


	//  Contact Map 
	if ($('#map').length > 0) {

		var contactmap = {
			lat: 40.742964,
			lng: -73.992277
		};

		$('#map')
			.gmap3({
				zoom: 13,
				center: contactmap,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			})

			.marker({
				position: contactmap
			})

			.infowindow({
				position: contactmap,
				content: 'NYC Seminar and Conference Center, New York'
			})

			.then(function (infowindow) {
				var map = this.get(0);
				var marker = this.get(1);
				marker.addListener('click', function () {
					infowindow.open(map, marker);
				});
			});
	}


	// Contact form
	$('#contact-form').submit(function () {

		var $form = $(this),
			$error = $form.find('.error-container'),
			action = $form.attr('action');

		$error.slideUp(750, function () {
			$error.hide();

			var $name = $form.find('.form-control-name'),
				$email = $form.find('.form-control-email'),
				$subject = $form.find('.form-control-subject'),
				$message = $form.find('.form-control-message');

			$.post(action, {
					name: $name.val(),
					email: $email.val(),
					subject: $subject.val(),
					message: $message.val()
				},
				function (data) {
					$error.html(data);
					$error.slideDown('slow');

					if (data.match('success') !== null) {
						$name.val('');
						$email.val('');
						$subject.val('');
						$message.val('');
					}
				}
			);

		});
		return false;
	});

});