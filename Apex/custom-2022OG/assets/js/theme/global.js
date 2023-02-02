import './global/jquery-migrate';
import './common/select-option-plugin';
import './global/waypoints';
import './global/smoothscroll';
import 'lazysizes';
import 'lity';
import 'slick-carousel';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import svgInjector from './global/svg-injector';
import SwatchBuilder from './product/swatch-builder';
import mainScripts from './global/main-scripts';

export default class Global extends PageManager {
    onReady() {
        window.lazySizesConfig = window.lazySizesConfig || {};
        window.lazySizesConfig.loadMode = 1;
        quickSearch();
        currencySelector();
        svgInjector();
        SwatchBuilder();
        mainScripts();
    }
}
