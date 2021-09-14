export default function () {
    $('#email form').submit(() => {
        $.ajax({
            success: () => {
                $('#email .form').slideUp();
                $('#email .thankyou').slideDown();
            },
        });
    });
    $('#featured-products .product-grid.featured').slick({
        slidesToShow: 6,
        infinite: false,
        dots: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        autoplaySpeed: 50000,
        prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
        nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    });
    if ($('#foot-table').length) {
        const footTableButton = document.querySelectorAll('#foot-table button');
        footTableButton.forEach((item) => {
            item.addEventListener('click', () => {
                const data = item.getAttribute('data-gender');
                $('.shoe-table').removeClass('active');
                $(`.shoe-table[data-gender="${data}"]`).addClass('active');
            });
        });
    }

    window.clearFacetedSearch = function(url){
        window.location.href = url;
        return true;
    };



    $('.mobile-menu').click((e) => {
        e.preventDefault();
        $('.top-menu').toggleClass('active');
        $('html').toggleClass('menu-open');
    });
    const mobileSubmenu = document.querySelectorAll('#main-menu ul li.top');
    mobileSubmenu.forEach((item) => {
        item.addEventListener('click', () => {
            mobileSubmenu.forEach(element => {
                if (element.classList.contains('active')) {
                    element.classList.remove('active');
                }
            });
            item.classList.add('active');
        });
    });
    const saleCard = document.querySelectorAll('.product-grid-item.on-sale');
    if (saleCard.length) {
        saleCard.forEach((item) => {
            const original = item.querySelector('.original');
            const sale = item.querySelector('span.sale');
            const saved = item.querySelector('span.saved');
            if (original) {
                let originalHtml = original.innerHTML;
                originalHtml = Number(originalHtml.replace(/[^0-9.-]+/g, ''));
                originalHtml = Number(originalHtml);
                let saleHtml = sale.innerHTML;
                saleHtml = Number(saleHtml.replace(/[^0-9.-]+/g, ''));
                saleHtml = Number(saleHtml);
                let savedTotal = ((originalHtml - saleHtml) / originalHtml) * 100;
                savedTotal = Math.round(savedTotal);
                if (saved) saved.innerHTML = ` | ${savedTotal}% Off!`;
            }
        });
    }
}
