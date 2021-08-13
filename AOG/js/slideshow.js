$(document).ready(function(){
	$('.slideshow').slick({
		infinite: true,
		arrows: true,
		slidesToShow: 1,
		prevArrow: '<i class="fa fa-caret-left slider-prev slick-prev"></i>',
		nextArrow: '<i class="fa fa-caret-right slider-next slick-next"></i>'
	});
});