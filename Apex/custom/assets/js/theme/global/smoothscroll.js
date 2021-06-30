/* eslint-disable */
function smoothScroll() {
    var offSet = $('.main-header').outerHeight();
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .not('[href="#tab-description"]')
        .not('[href="#tab-info"]')
        .not('[href="#tab-reviews"]')
        .not('[href="#tab-videos"]')
        .click(function (event) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - offSet
                }, 1000);
            }
        });
}
smoothScroll();
/* eslint-enable */
