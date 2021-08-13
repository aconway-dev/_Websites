$(document).ready(function(){
	$('.news-slider').slick({
		infinite: true,
		arrows: true,
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 3,
		prevArrow: '<i class="fa fa-caret-left slider-prev slick-prev"></i>',
		nextArrow: '<i class="fa fa-caret-right slider-next slick-next"></i>',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
                centerPadding: '30px'
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
                centerPadding: '0px'
			  }
			}
		  ]
	});
});