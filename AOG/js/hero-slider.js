$(document).ready(function() {
	//var slideStart = Math.floor(Math.random() * (2 - 0 + 2)) + 0;
	$('.hero-slider').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 10000,
		pauseOnHover: true,
		initialSlide: 0
	});
});