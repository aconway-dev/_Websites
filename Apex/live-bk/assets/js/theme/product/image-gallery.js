import $ from 'jquery';
import _ from 'lodash';

export default class ImageGallery {
    constructor($gallery) {
        this.$mainImage = $gallery.find('[data-main-image]');
        this.$selectableImages = $gallery.find('[data-image-gallery-item]');
        this.currentImage = {};
    }
    init() {
        this.bindEvents();
    }
    setMainImage(imgObj) {
        this.currentImage = _.clone(imgObj);
        this.setActiveThumb();
        this.swapMainImage();
    }
    setAlternateImage(imgObj) {
        if (!this.savedImage) {
            this.savedImage = {
                mainImageUrl: this.$mainImage.find('img').attr('src'),
                zoomImageUrl: this.$mainImage.attr('href'),
                $selectedThumb: this.currentImage.$selectedThumb,
            };
        }
        this.setMainImage(imgObj);
    }
    restoreImage() {
        if (this.savedImage) {
            this.setMainImage(this.savedImage);
            delete this.savedImage;
        }
    }
    selectNewImage(e) {
        e.preventDefault();
        const $target = $(e.currentTarget);
        const imgObj = {
            mainImageUrl: $target.find('img').attr('src'),
            zoomImageUrl: $target.attr('href'),
            $selectedThumb: $target,
        };

        this.setMainImage(imgObj);
    }
    setActiveThumb() {
        this.$selectableImages.removeClass('active');
        if (this.currentImage.$selectedThumb) {
            this.currentImage.$selectedThumb.addClass('active');
        }
    }
    swapMainImage() {
        this.$mainImage.attr({
            src: this.currentImage.mainImageUrl,
        });
        this.$mainImage.parent().attr({
            href: this.currentImage.zoomImageUrl,
        });
    }
    bindEvents() {
        this.$selectableImages.on('click', this.selectNewImage.bind(this));
    }
}
