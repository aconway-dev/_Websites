/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/form-utils';

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);

        videoGallery();
        const $reviewForm = classifyForm('.writeReview-form');
        const review = new Review($reviewForm);

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
        });
        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });
        $(".product-thumbnails").slick({
			slidesToShow: 6,
			infinite: false,
			dots: true,
			lazyLoad: "ondemand",
			autoplay: true,
			autoplaySpeed: 50000,
			prevArrow:
				'<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
			nextArrow:
				'<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
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
			],
		});
        $('.form-option.unavailable').click(false);
        this.productReviewHandler();
    }
    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }
}
