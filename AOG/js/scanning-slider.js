$(document).ready(function(){
	$('.scanning-slider').slick({
		dots: true,
		infinite: false
	});
});

$('.scanning-slider').on('afterChange', function(){
  console.log($('.scanning-slider').slick('slickCurrentSlide'));
  var currentSlide = $('.scanning-slider').slick('slickCurrentSlide');
if(currentSlide==0)
{
   $('.slick-prev').hide();
   $('.slick-next').show();
}
else if(currentSlide==3)
{
	$('.slick-next').hide();
	$('.slick-prev').show();
}

if(currentSlide>0 && currentSlide<3)
{
   $('.slick-prev').show();
   $('.slick-next').show();
}
});

$(document).ready(function(){
var currentSlide = $('.scanning-slider').slick('slickCurrentSlide');
if(currentSlide==0)
{
   $('.slick-prev').hide();
}
else if(currentSlide==3)
{
$('.slick-next').hide();
}

});