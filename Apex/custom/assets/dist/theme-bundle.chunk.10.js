(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/*! exports provided: CollapsibleEvents, Collapsible, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleEvents", function() { return CollapsibleEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapsible", function() { return Collapsible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collapsibleFactory; });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");



function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};

function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }

  return "#" + id;
}

function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}
/**
 * Collapse/Expand toggle
 */


var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {Object} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {Object} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        disabledBreakpoint = _ref.disabledBreakpoint,
        disabledState = _ref.disabledState,
        enabledState = _ref.enabledState,
        _ref$openClassName = _ref.openClassName,
        openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;

    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;

    if (disabledBreakpoint) {
      this.disabledMediaQueryList = Object(_media_query_list__WEBPACK_IMPORTED_MODULE_2__["default"])(disabledBreakpoint);
    }

    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    } // Auto-bind


    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this); // Assign DOM attributes

    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen); // Listen

    this.bindEvents();
  }

  var _proto = Collapsible.prototype;

  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$notify = _ref2.notify,
        notify = _ref2$notify === void 0 ? true : _ref2$notify;

    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);

    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };

  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$notify = _ref3.notify,
        notify = _ref3$notify === void 0 ? true : _ref3$notify;

    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);

    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };

  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };

  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);

      case CollapsibleState.closed:
        return this.close.apply(this, args);

      default:
        return undefined;
    }
  };

  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return $.contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };

  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);

    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);

    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };

  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }

    event.preventDefault();
    this.toggle();
  };

  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };

  _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return !this.$target.hasClass(this.openClassName) || this.$target.is(':hidden');
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;

      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);

  return Collapsible;
}();
/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.$context]
 * @param {Object} [options.disabledBreakpoint]
 * @param {Object} [options.disabledState]
 * @param {Object} [options.enabledState]
 * @param {Object} [options.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */

function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }

  if (overrideOptions === void 0) {
    overrideOptions = {};
  }

  var $collapsibles = $(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = $(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);

    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }

    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));

    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);

    var collapsible = new Collapsible($toggle, $(targetId, overrideOptions.$context), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/media-query-list.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/media-query-list.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mediaQueryListFactory; });
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */
var breakpointSizes = {
  large: 1261,
  medium: 801,
  small: 551
};
/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */

function mediaQueryListFactory(breakpointName) {
  if (!breakpointName || !window.matchMedia) {
    return null;
  }

  var breakpoint = breakpointSizes[breakpointName];
  var mediaQuery = "(min-width: " + breakpoint + "px)";
  var mediaQueryList = window.matchMedia(mediaQuery);
  return mediaQueryList;
}

/***/ }),

/***/ "./assets/js/theme/common/product-details.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/product-details.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetails; });
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ "./node_modules/core-js/modules/es6.symbol.js");
/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.from.js */ "./node_modules/core-js/modules/es6.array.from.js");
/* harmony import */ var core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _product_image_gallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../product/image-gallery */ "./assets/js/theme/product/image-gallery.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_19__);












function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











var ProductDetails = /*#__PURE__*/function () {
  function ProductDetails($scope, context, productAttributesData) {
    var _this = this;

    if (productAttributesData === void 0) {
      productAttributesData = {};
    }

    // this.$overlay = $('[data-cart-item-add] .loadingOverlay');
    this.$scope = $scope;
    this.context = context;
    this.imageGallery = new _product_image_gallery__WEBPACK_IMPORTED_MODULE_17__["default"]($('[data-image-gallery]', this.$scope));
    this.imageGallery.init();
    this.listenQuantityChange();
    this.initRadioAttributes();
    var $form = $('form[data-cart-item-add]', $scope);
    var $productOptionsElement = $('[data-product-option-change]', $form);
    var hasOptions = $productOptionsElement.html().trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;
    $productOptionsElement.on('change', function (event) {
      _this.productOptionsChanged(event);
    });
    $form.on('submit', function (event) {
      _this.addProductToCart(event, $form[0]);
    }); // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view

    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_10___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var $productId = $('[name="product_id"]', $form).val();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.productAttributes.optionChange($productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};

        _this.updateProductAttributes(attributesData);

        if (hasDefaultOptions) {
          _this.updateView(attributesData, attributesContent);
        } else {
          _this.updateDefaultAttributesForOOS(attributesData);
        }
      });
    } else {
      this.updateProductAttributes(productAttributesData);
    }

    $productOptionsElement.show();
    this.previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_18__["default"])('#previewModal')[0];
  }
  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */


  var _proto = ProductDetails.prototype;

  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
            key = _step$value[0],
            val = _step$value[1];

        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }

    return formData;
  }
  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */
  ;

  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithPrice: {
        $div: $('.non-sale-price---withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutPrice: {
        $div: $('.non-sale-price---withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      $sku: $('[data-product-sku]'),
      $upc: $('[data-product-upc]'),
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }
  /**
   * Checks if the current window is being run inside an iframe
   * @returns {boolean}
   */
  ;

  _proto.isRunningInIframe = function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  /**
   *
   * Handle product options changes
   *
   */
  ;

  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var _this2 = this;

    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val(); // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData

    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};

      _this2.updateProductAttributes(productAttributesData);

      _this2.updateView(productAttributesData, productAttributesContent);
    });
  };

  _proto.showProductImage = function showProductImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_9___default()(image)) {
      var zoomImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].tools.image.getSrc(image.data, 500);
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].tools.image.getSrc(image.data, 500);
      this.imageGallery.setAlternateImage({
        mainImageUrl: mainImageUrl,
        zoomImageUrl: zoomImageUrl
      });
    } else {
      this.imageGallery.restoreImage();
    }
  }
  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */
  ;

  _proto.listenQuantityChange = function listenQuantityChange() {
    var _this3 = this;

    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);

      var viewModel = _this3.getViewModel(_this3.$scope);

      var $input = viewModel.quantity.$input;
      var quantityMin = parseInt($input.data('quantityMin'), 10);
      var quantityMax = parseInt($input.data('quantityMax'), 10);
      var qty = parseInt($input.val(), 10); // If action is incrementing

      if ($target.data('action') === 'inc') {
        // If quantity max option is set
        if (quantityMax > 0) {
          // Check quantity does not exceed max
          if (qty + 1 <= quantityMax) {
            qty++;
          }
        } else {
          qty++;
        }
      } else if (qty > 1) {
        // If quantity min option is set
        if (quantityMin > 0) {
          // Check quantity does not fall below min
          if (qty - 1 >= quantityMin) {
            qty--;
          }
        } else {
          qty--;
        }
      } // update hidden input


      viewModel.quantity.$input.val(qty); // update text

      viewModel.quantity.$text.text(qty);
    });
  }
  /**
   *
   * Add a product to cart
   *
   */
  ;

  _proto.addProductToCart = function addProductToCart(event, form) {
    var $addToCartBtn = $('#form-action-addToCart', $(event.target));
    var originalBtnVal = $addToCartBtn.val();
    var waitMessage = $addToCartBtn.data('waitMessage'); // Do not do AJAX if browser doesn't support FormData

    if (window.FormData === undefined) {
      return;
    } // Prevent default
    // event.preventDefault();


    $addToCartBtn.val(waitMessage).prop('disabled', true); // this.$overlay.show();
    // Add item to cart

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), function (err, response) {
      var errorMessage = err || response.data.error;
      $addToCartBtn.val(originalBtnVal).prop('disabled', false); // this.$overlay.hide();
      // Guard statement

      if (errorMessage) {
        // Strip the HTML from the error message
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return sweetalert2__WEBPACK_IMPORTED_MODULE_19___default()({
          text: tmp.textContent || tmp.innerText,
          type: 'error'
        });
      }
    });
  }
  /**
   * Get cart contents
   *
   * @param {String} cartItemHash
   * @param {Function} onComplete
   */
  ;

  _proto.getCartContent = function getCartContent(cartItemHash, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemHash
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_14__["default"].api.cart.getContent(options, onComplete);
  }
  /**
   * Redirect to url
   *
   * @param {String} url
   */
  ;

  _proto.redirectTo = function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }
  /**
   * Update cart content
   *
   * @param {Modal} modal
   * @param {String} cartItemHash
   * @param {Function} onComplete
   */
  ;

  _proto.updateCartContent = function updateCartContent(modal, cartItemHash, onComplete) {
    this.getCartContent(cartItemHash, function (err, response) {
      if (err) {
        return;
      }

      modal.updateContent(response); // Update cart counter

      var $body = $('body');
      var $cartQuantity = $('[data-cart-quantity]', modal.$content);
      var $cartCounter = $('.top-cart');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      $cartCounter.addClass('active');
      $body.trigger('cart-quantity-update', quantity);

      if (onComplete) {
        onComplete(response);
      }
    });
  }
  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */
  ;

  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message');

    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }
  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */
  ;

  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithPrice.$div.hide();
    viewModel.nonSaleWithoutPrice.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);

    if (price.with_tax) {
      viewModel.$priceWithTax.html(price.with_tax.formatted);
    }

    if (price.without_tax) {
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
    }

    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }

    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }

    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }

    if (price.non_sale_price_with_tax) {
      viewModel.nonSaleWithPrice.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithPrice.$span.html(price.non_sale_price_with_tax.formatted);
    }

    if (price.non_sale_price_without_tax) {
      viewModel.nonSaleWithoutPrice.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutPrice.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }
  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }

    var viewModel = this.getViewModel(this.$scope);
    this.showMessageBox(data.stock_message || data.purchasing_message);

    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_8___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }

    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_8___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    } // If SKU is available


    if (data.sku) {
      viewModel.$sku.text(data.sku);
    } // If UPC is available


    if (data.upc) {
      viewModel.$upc.text(data.upc);
    } // if stock view is on (CP settings)


    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_7___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }

    this.updateDefaultAttributesForOOS(data); // If Bulk Pricing rendered HTML is available

    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
  };

  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);

    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  }
  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */
  ;

  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this4 = this;

    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    this.showProductImage(data.image);

    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }

    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);

      if (inStockIds.indexOf(attrId) !== -1) {
        _this4.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this4.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  };

  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }

    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  };

  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();

    if (behavior === 'hide_option') {
      $attribute.toggleOption(false); // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)

      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };

  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }

    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };

  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };

  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  /**
   * Allow radio buttons to get deselected
   */
  ;

  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this5 = this;

    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio); // Only bind to click once

      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }

          _this5.initRadioAttributes();
        });
      }

      $radio.attr('data-state', $radio.prop('checked'));
    });
  };

  return ProductDetails;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 Import all product specific js
 */







var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);

  function Product(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    return _this;
  }

  var _proto = Product.prototype;

  _proto.onReady = function onReady() {
    var _this2 = this;

    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator; // Init collapsible

    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_6__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
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
      prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
      nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
      responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 5
        }
      }, {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      }]
    });
    $('.form-option.unavailable').click(false);
    this.productReviewHandler();
  };

  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };

  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/image-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/image-gallery.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageGallery; });
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);




var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery($gallery) {
    this.$mainImage = $gallery.find('[data-main-image]');
    this.$selectableImages = $gallery.find('[data-image-gallery-item]');
    this.currentImage = {};
  }

  var _proto = ImageGallery.prototype;

  _proto.init = function init() {
    this.bindEvents();
  };

  _proto.setMainImage = function setMainImage(imgObj) {
    this.currentImage = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(imgObj);
    this.setActiveThumb();
    this.swapMainImage();
  };

  _proto.setAlternateImage = function setAlternateImage(imgObj) {
    if (!this.savedImage) {
      this.savedImage = {
        mainImageUrl: this.$mainImage.find('img').attr('src'),
        zoomImageUrl: this.$mainImage.attr('href'),
        $selectedThumb: this.currentImage.$selectedThumb
      };
    }

    this.setMainImage(imgObj);
  };

  _proto.restoreImage = function restoreImage() {
    if (this.savedImage) {
      this.setMainImage(this.savedImage);
      delete this.savedImage;
    }
  };

  _proto.selectNewImage = function selectNewImage(e) {
    e.preventDefault();
    var $target = jquery__WEBPACK_IMPORTED_MODULE_2___default()(e.currentTarget);
    var imgObj = {
      mainImageUrl: $target.find('img').attr('src'),
      zoomImageUrl: $target.attr('href'),
      $selectedThumb: $target
    };
    this.setMainImage(imgObj);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$selectableImages.removeClass('active');

    if (this.currentImage.$selectedThumb) {
      this.currentImage.$selectedThumb.addClass('active');
    }
  };

  _proto.swapMainImage = function swapMainImage() {
    this.$mainImage.attr({
      src: this.currentImage.mainImageUrl
    });
    this.$mainImage.parent().attr({
      href: this.currentImage.zoomImageUrl
    });
  };

  _proto.bindEvents = function bindEvents() {
    this.$selectableImages.on('click', this.selectNewImage.bind(this));
  };

  return ImageGallery;
}();



/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");





var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }
  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */


  var _proto = _default.prototype;

  _proto.initLinkBind = function initLinkBind() {
    var _this = this;

    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
      }
    });
  };

  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    } // force collapse on page load


    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].click);
  }
  /**
   * Inject ID into the pagination link
   */
  ;

  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);

    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }

    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };

  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };

  _proto.validate = function validate() {
    return this.validator.performCheck();
  };

  return _default;
}();


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }

  var _proto = VideoGallery.prototype;

  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };

  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };

  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };

  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };

  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;

    if (isInitialized) {
      return;
    }

    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbWVkaWEtcXVlcnktbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9pbWFnZS1nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3Jldmlld3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJuYW1lcyI6WyJQTFVHSU5fS0VZIiwiQ29sbGFwc2libGVFdmVudHMiLCJvcGVuIiwiY2xvc2UiLCJ0b2dnbGUiLCJjbGljayIsIkNvbGxhcHNpYmxlU3RhdGUiLCJjbG9zZWQiLCJwcmVwZW5kSGFzaCIsImlkIiwiaW5kZXhPZiIsIm9wdGlvbnNGcm9tRGF0YSIsIiRlbGVtZW50IiwiZGlzYWJsZWRCcmVha3BvaW50IiwiZGF0YSIsImRpc2FibGVkU3RhdGUiLCJlbmFibGVkU3RhdGUiLCJvcGVuQ2xhc3NOYW1lIiwiQ29sbGFwc2libGUiLCIkdG9nZ2xlIiwiJHRhcmdldCIsInRhcmdldElkIiwiYXR0ciIsImRpc2FibGVkTWVkaWFRdWVyeUxpc3QiLCJtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkiLCJkaXNhYmxlZCIsIm1hdGNoZXMiLCJvbkNsaWNrZWQiLCJiaW5kIiwib25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2giLCJpc0NvbGxhcHNlZCIsImlzT3BlbiIsImJpbmRFdmVudHMiLCJub3RpZnkiLCJhZGRDbGFzcyIsInRyaWdnZXIiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUJ5U3RhdGUiLCJzdGF0ZSIsImFyZ3MiLCJhcHBseSIsInVuZGVmaW5lZCIsImhhc0NvbGxhcHNpYmxlIiwiY29sbGFwc2libGVJbnN0YW5jZSIsIiQiLCJjb250YWlucyIsImdldCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtZWRpYSIsImhhc0NsYXNzIiwiaXMiLCJfZGlzYWJsZWQiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJzZWxlY3RvciIsIm92ZXJyaWRlT3B0aW9ucyIsIiRjb2xsYXBzaWJsZXMiLCIkY29udGV4dCIsIm1hcCIsImluZGV4IiwiZWxlbWVudCIsImluc3RhbmNlS2V5IiwiY2FjaGVkQ29sbGFwc2libGUiLCJvcHRpb25zIiwiY29sbGFwc2libGUiLCJ0b0FycmF5IiwiYnJlYWtwb2ludFNpemVzIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsImJyZWFrcG9pbnROYW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImJyZWFrcG9pbnQiLCJtZWRpYVF1ZXJ5IiwibWVkaWFRdWVyeUxpc3QiLCJQcm9kdWN0RGV0YWlscyIsIiRzY29wZSIsImNvbnRleHQiLCJwcm9kdWN0QXR0cmlidXRlc0RhdGEiLCJpbWFnZUdhbGxlcnkiLCJJbWFnZUdhbGxlcnkiLCJpbml0IiwibGlzdGVuUXVhbnRpdHlDaGFuZ2UiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwiJGZvcm0iLCIkcHJvZHVjdE9wdGlvbnNFbGVtZW50IiwiaGFzT3B0aW9ucyIsImh0bWwiLCJ0cmltIiwibGVuZ3RoIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJmaW5kIiwicHJvZHVjdE9wdGlvbnNDaGFuZ2VkIiwiYWRkUHJvZHVjdFRvQ2FydCIsIiRwcm9kdWN0SWQiLCJ2YWwiLCJ1dGlscyIsImFwaSIsInByb2R1Y3RBdHRyaWJ1dGVzIiwib3B0aW9uQ2hhbmdlIiwic2VyaWFsaXplIiwiZXJyIiwicmVzcG9uc2UiLCJhdHRyaWJ1dGVzRGF0YSIsImF0dHJpYnV0ZXNDb250ZW50IiwiY29udGVudCIsInVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzIiwidXBkYXRlVmlldyIsInVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TIiwic2hvdyIsInByZXZpZXdNb2RhbCIsIm1vZGFsRmFjdG9yeSIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsImZvcm1EYXRhIiwia2V5IiwiRmlsZSIsIm5hbWUiLCJzaXplIiwiZGVsZXRlIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImdldFZpZXdNb2RlbCIsIiRwcmljZVdpdGhUYXgiLCIkcHJpY2VXaXRob3V0VGF4IiwicnJwV2l0aFRheCIsIiRkaXYiLCIkc3BhbiIsInJycFdpdGhvdXRUYXgiLCJub25TYWxlV2l0aFByaWNlIiwibm9uU2FsZVdpdGhvdXRQcmljZSIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsInN0b2NrIiwiJGNvbnRhaW5lciIsIiRpbnB1dCIsIiRza3UiLCIkdXBjIiwicXVhbnRpdHkiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsImlzUnVubmluZ0luSWZyYW1lIiwic2VsZiIsInRvcCIsIiRjaGFuZ2VkT3B0aW9uIiwidGFyZ2V0IiwicGFyZW50cyIsInByb2R1Y3RJZCIsIkZvcm1EYXRhIiwicHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50Iiwic2hvd1Byb2R1Y3RJbWFnZSIsImltYWdlIiwiem9vbUltYWdlVXJsIiwidG9vbHMiLCJnZXRTcmMiLCJtYWluSW1hZ2VVcmwiLCJzZXRBbHRlcm5hdGVJbWFnZSIsInJlc3RvcmVJbWFnZSIsImN1cnJlbnRUYXJnZXQiLCJ2aWV3TW9kZWwiLCJxdWFudGl0eU1pbiIsInBhcnNlSW50IiwicXVhbnRpdHlNYXgiLCJxdHkiLCJ0ZXh0IiwiZm9ybSIsIiRhZGRUb0NhcnRCdG4iLCJvcmlnaW5hbEJ0blZhbCIsIndhaXRNZXNzYWdlIiwicHJvcCIsImNhcnQiLCJpdGVtQWRkIiwiZXJyb3JNZXNzYWdlIiwidG1wIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwic3dhbCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwidHlwZSIsImdldENhcnRDb250ZW50IiwiY2FydEl0ZW1IYXNoIiwib25Db21wbGV0ZSIsInRlbXBsYXRlIiwicGFyYW1zIiwic3VnZ2VzdCIsImNvbmZpZyIsInN1Z2dlc3Rpb25zIiwibGltaXQiLCJnZXRDb250ZW50IiwicmVkaXJlY3RUbyIsInVybCIsImlmcmFtZVNkayIsImxvY2F0aW9uIiwidXBkYXRlQ2FydENvbnRlbnQiLCJtb2RhbCIsInVwZGF0ZUNvbnRlbnQiLCIkYm9keSIsIiRjYXJ0UXVhbnRpdHkiLCIkY29udGVudCIsIiRjYXJ0Q291bnRlciIsInNob3dNZXNzYWdlQm94IiwibWVzc2FnZSIsIiRtZXNzYWdlQm94IiwiaGlkZSIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwidXBkYXRlUHJpY2VWaWV3IiwicHJpY2UiLCJ3aXRoX3RheCIsImZvcm1hdHRlZCIsIndpdGhvdXRfdGF4IiwicnJwX3dpdGhfdGF4IiwicnJwX3dpdGhvdXRfdGF4Iiwic2F2ZWQiLCJub25fc2FsZV9wcmljZV93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4Iiwic3RvY2tfbWVzc2FnZSIsInB1cmNoYXNpbmdfbWVzc2FnZSIsIndlaWdodCIsInNrdSIsInVwYyIsImJ1bGtfZGlzY291bnRfcmF0ZXMiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJiZWhhdmlvciIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImVhY2giLCJpIiwiYXR0cmlidXRlIiwiJGF0dHJpYnV0ZSIsImF0dHJJZCIsImVuYWJsZUF0dHJpYnV0ZSIsImRpc2FibGVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGVUeXBlIiwiZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRzZWxlY3QiLCJwYXJlbnQiLCJ0b2dnbGVPcHRpb24iLCJzZWxlY3RlZEluZGV4IiwicmVwbGFjZSIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJjbG9zZXN0IiwicmFkaW8iLCIkcmFkaW8iLCJQcm9kdWN0IiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwib25SZWFkeSIsImhpc3RvcnkiLCJyZXBsYWNlU3RhdGUiLCJ0aXRsZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwicHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJ2aWRlb0dhbGxlcnkiLCIkcmV2aWV3Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsInJldmlldyIsIlJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInNsaWNrIiwic2xpZGVzVG9TaG93IiwiaW5maW5pdGUiLCJkb3RzIiwibGF6eUxvYWQiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwic2V0dGluZ3MiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsIlBhZ2VNYW5hZ2VyIiwiJGdhbGxlcnkiLCIkbWFpbkltYWdlIiwiJHNlbGVjdGFibGVJbWFnZXMiLCJjdXJyZW50SW1hZ2UiLCJzZXRNYWluSW1hZ2UiLCJpbWdPYmoiLCJzZXRBY3RpdmVUaHVtYiIsInN3YXBNYWluSW1hZ2UiLCJzYXZlZEltYWdlIiwiJHNlbGVjdGVkVGh1bWIiLCJzZWxlY3ROZXdJbWFnZSIsInNyYyIsIm5vZCIsInN1Ym1pdCIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiaGFzaCIsIiRuZXh0TGluayIsIiRwcmV2TGluayIsImFkZCIsInZhbGlkYXRlIiwicmV2aWV3UmF0aW5nIiwicmV2aWV3U3ViamVjdCIsInJldmlld0NvbW1lbnQiLCJjYiIsInJlc3VsdCIsImZvcm1zIiwiZW1haWwiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwic2VsZWN0TmV3VmlkZW8iLCJzZXRNYWluVmlkZW8iLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiJGVsIiwiaXNJbml0aWFsaXplZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxhQUFuQjtBQUVPLElBQU1DLGlCQUFpQixHQUFHO0VBQzdCQyxJQUFJLEVBQUUsa0JBRHVCO0VBRTdCQyxLQUFLLEVBQUUsbUJBRnNCO0VBRzdCQyxNQUFNLEVBQUUsb0JBSHFCO0VBSTdCQyxLQUFLLEVBQUU7QUFKc0IsQ0FBMUI7QUFPUCxJQUFNQyxnQkFBZ0IsR0FBRztFQUNyQkMsTUFBTSxFQUFFLFFBRGE7RUFFckJMLElBQUksRUFBRTtBQUZlLENBQXpCOztBQUtBLFNBQVNNLFdBQVQsQ0FBcUJDLEVBQXJCLEVBQXlCO0VBQ3JCLElBQUlBLEVBQUUsSUFBSUEsRUFBRSxDQUFDQyxPQUFILENBQVcsR0FBWCxNQUFvQixDQUE5QixFQUFpQztJQUM3QixPQUFPRCxFQUFQO0VBQ0g7O0VBRUQsYUFBV0EsRUFBWDtBQUNIOztBQUVELFNBQVNFLGVBQVQsQ0FBeUJDLFFBQXpCLEVBQW1DO0VBQy9CLE9BQU87SUFDSEMsa0JBQWtCLEVBQUVELFFBQVEsQ0FBQ0UsSUFBVCxDQUFpQmQsVUFBakIsd0JBRGpCO0lBRUhlLGFBQWEsRUFBRUgsUUFBUSxDQUFDRSxJQUFULENBQWlCZCxVQUFqQixtQkFGWjtJQUdIZ0IsWUFBWSxFQUFFSixRQUFRLENBQUNFLElBQVQsQ0FBaUJkLFVBQWpCLGtCQUhYO0lBSUhpQixhQUFhLEVBQUVMLFFBQVEsQ0FBQ0UsSUFBVCxDQUFpQmQsVUFBakI7RUFKWixDQUFQ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QUFSLEVBQW9CO0lBQ25DLElBQU0yUSxHQUFHLEdBQUdoUyxDQUFDLENBQUNxQixPQUFELENBQWI7SUFDQSxJQUFNNFEsYUFBYSxHQUFHRCxHQUFHLENBQUM5VCxJQUFKLENBQVM0VCxTQUFULGFBQStCTixZQUFyRDs7SUFFQSxJQUFJUyxhQUFKLEVBQW1CO01BQ2Y7SUFDSDs7SUFFREQsR0FBRyxDQUFDOVQsSUFBSixDQUFTNFQsU0FBVCxFQUFvQixJQUFJTixZQUFKLENBQWlCUSxHQUFqQixDQUFwQjtFQUNILENBVEQ7QUFVSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbWVkaWFRdWVyeUxpc3RGYWN0b3J5IGZyb20gJy4vbWVkaWEtcXVlcnktbGlzdCc7XG5cbmNvbnN0IFBMVUdJTl9LRVkgPSAnY29sbGFwc2libGUnO1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2libGVFdmVudHMgPSB7XG4gICAgb3BlbjogJ29wZW4uY29sbGFwc2libGUnLFxuICAgIGNsb3NlOiAnY2xvc2UuY29sbGFwc2libGUnLFxuICAgIHRvZ2dsZTogJ3RvZ2dsZS5jb2xsYXBzaWJsZScsXG4gICAgY2xpY2s6ICdjbGljay5jb2xsYXBzaWJsZScsXG59O1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0YXRlID0ge1xuICAgIGNsb3NlZDogJ2Nsb3NlZCcsXG4gICAgb3BlbjogJ29wZW4nLFxufTtcblxuZnVuY3Rpb24gcHJlcGVuZEhhc2goaWQpIHtcbiAgICBpZiAoaWQgJiYgaWQuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCMke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tRGF0YSgkZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludDogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkQnJlYWtwb2ludGApLFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RGlzYWJsZWRTdGF0ZWApLFxuICAgICAgICBlbmFibGVkU3RhdGU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1FbmFibGVkU3RhdGVgKSxcbiAgICAgICAgb3BlbkNsYXNzTmFtZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfU9wZW5DbGFzc05hbWVgKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbGxhcHNlL0V4cGFuZCB0b2dnbGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRvZ2dsZSAtIFRyaWdnZXIgYnV0dG9uXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBDb250ZW50IHRvIGNvbGxhcHNlIC8gZXhwYW5kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLiRjb250ZXh0XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmVuYWJsZWRTdGF0ZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogPGJ1dHRvbiBpZD1cIiNtb3JlXCI+Q29sbGFwc2U8L2J1dHRvbj5cbiAgICAgKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICAgICAqXG4gICAgICogbmV3IENvbGxhcHNpYmxlKCQoJyNtb3JlJyksICQoJyNjb250ZW50JykpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCR0b2dnbGUsICR0YXJnZXQsIHtcbiAgICAgICAgZGlzYWJsZWRCcmVha3BvaW50LFxuICAgICAgICBkaXNhYmxlZFN0YXRlLFxuICAgICAgICBlbmFibGVkU3RhdGUsXG4gICAgICAgIG9wZW5DbGFzc05hbWUgPSAnaXMtb3BlbicsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZSA9ICR0b2dnbGU7XG4gICAgICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSAkdGFyZ2V0LmF0dHIoJ2lkJyk7XG4gICAgICAgIHRoaXMub3BlbkNsYXNzTmFtZSA9IG9wZW5DbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRTdGF0ZSA9IGRpc2FibGVkU3RhdGU7XG4gICAgICAgIHRoaXMuZW5hYmxlZFN0YXRlID0gZW5hYmxlZFN0YXRlO1xuXG4gICAgICAgIGlmIChkaXNhYmxlZEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeShkaXNhYmxlZEJyZWFrcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0by1iaW5kXG4gICAgICAgIHRoaXMub25DbGlja2VkID0gdGhpcy5vbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCA9IHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2guYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBBc3NpZ24gRE9NIGF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy4kdGFyZ2V0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdGhpcy5pc0NvbGxhcHNlZCk7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtY29udHJvbHMnLCAkdGFyZ2V0LmF0dHIoJ2lkJykpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNPcGVuKTtcblxuICAgICAgICAvLyBMaXN0ZW5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzQ29sbGFwc2VkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuJHRhcmdldC5oYXNDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpIHx8IHRoaXMuJHRhcmdldC5pcygnOmhpZGRlbicpO1xuICAgIH1cblxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0NvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnlTdGF0ZSh0aGlzLmRpc2FibGVkU3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCeVN0YXRlKHRoaXMuZW5hYmxlZFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIG9wZW4oeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5vcGVuLCBbdGhpc10pO1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMudG9nZ2xlLCBbdGhpc10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbG9zZSwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQnlTdGF0ZShzdGF0ZSwgLi4uYXJncykge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgQ29sbGFwc2libGVTdGF0ZS5vcGVuOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3Blbi5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBjYXNlIENvbGxhcHNpYmxlU3RhdGUuY2xvc2VkOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDb2xsYXBzaWJsZShjb2xsYXBzaWJsZUluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiAkLmNvbnRhaW5zKHRoaXMuJHRhcmdldC5nZXQoMCksIGNvbGxhcHNpYmxlSW5zdGFuY2UuJHRhcmdldC5nZXQoMCkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vbihDb2xsYXBzaWJsZUV2ZW50cy5jbGljaywgdGhpcy5vbkNsaWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vZmYoQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gobWVkaWEpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IG1lZGlhLm1hdGNoZXM7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgY29uc3RydWN0aW5nIENvbGxhcHNpYmxlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy4kY29udGV4dF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRTdGF0ZV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5lbmFibGVkU3RhdGVdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBDb2xsYXBzaWJsZSBpbnN0YW5jZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogPGEgaHJlZj1cIiNjb250ZW50XCIgZGF0YS1jb2xsYXBzaWJsZT5Db2xsYXBzZTwvYT5cbiAqIDxkaXYgaWQ9XCJjb250ZW50XCI+Li4uPC9kaXY+XG4gKlxuICogY29sbGFwc2libGVGYWN0b3J5KCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbGxhcHNpYmxlRmFjdG9yeShzZWxlY3RvciA9IGBbZGF0YS0ke1BMVUdJTl9LRVl9XWAsIG92ZXJyaWRlT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGNvbGxhcHNpYmxlcyA9ICQoc2VsZWN0b3IsIG92ZXJyaWRlT3B0aW9ucy4kY29udGV4dCk7XG5cbiAgICByZXR1cm4gJGNvbGxhcHNpYmxlcy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IGAke1BMVUdJTl9LRVl9SW5zdGFuY2VgO1xuICAgICAgICBjb25zdCBjYWNoZWRDb2xsYXBzaWJsZSA9ICR0b2dnbGUuZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZENvbGxhcHNpYmxlIGluc3RhbmNlb2YgQ29sbGFwc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDb2xsYXBzaWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gcHJlcGVuZEhhc2goJHRvZ2dsZS5kYXRhKFBMVUdJTl9LRVkpIHx8XG4gICAgICAgICAgICAkdG9nZ2xlLmRhdGEoYCR7UExVR0lOX0tFWX1UYXJnZXRgKSB8fFxuICAgICAgICAgICAgJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gXy5leHRlbmQob3B0aW9uc0Zyb21EYXRhKCR0b2dnbGUpLCBvdmVycmlkZU9wdGlvbnMpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9IG5ldyBDb2xsYXBzaWJsZSgkdG9nZ2xlLCAkKHRhcmdldElkLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpLCBvcHRpb25zKTtcblxuICAgICAgICAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXksIGNvbGxhcHNpYmxlKTtcblxuICAgICAgICByZXR1cm4gY29sbGFwc2libGU7XG4gICAgfSkudG9BcnJheSgpO1xufVxuIiwiLypcbiAqIFJlbWVtYmVyIHRvIHVwZGF0ZSAvYXNzZXRzL3Njc3Mvc2V0dGluZ3MvZ2xvYmFsL3NjcmVlbnNpemVzL3NjcmVlbnNpemVzLnNjc3NcbiAqIGlmIHlvdSBkZWNpZGUgdG8gY2hhbmdlIGJyZWFrcG9pbnQgdmFsdWVzXG4gKi9cbmNvbnN0IGJyZWFrcG9pbnRTaXplcyA9IHtcbiAgICBsYXJnZTogMTI2MSxcbiAgICBtZWRpdW06IDgwMSxcbiAgICBzbWFsbDogNTUxLFxufTtcblxuLyoqXG4gKiBDcmVhdGUgTWVkaWFRdWVyeUxpc3QgdXNpbmcgYnJlYWtwb2ludCBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gYnJlYWtwb2ludE5hbWVcbiAqIEByZXR1cm4ge01lZGlhUXVlcnlMaXN0fG51bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lZGlhUXVlcnlMaXN0RmFjdG9yeShicmVha3BvaW50TmFtZSkge1xuICAgIGlmICghYnJlYWtwb2ludE5hbWUgfHwgIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBicmVha3BvaW50U2l6ZXNbYnJlYWtwb2ludE5hbWVdO1xuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSBgKG1pbi13aWR0aDogJHticmVha3BvaW50fXB4KWA7XG4gICAgY29uc3QgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KTtcblxuICAgIHJldHVybiBtZWRpYVF1ZXJ5TGlzdDtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSAnLi4vcHJvZHVjdC9pbWFnZS1nYWxsZXJ5JztcblxuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHMge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSwgY29udGV4dCwgcHJvZHVjdEF0dHJpYnV0ZXNEYXRhID0ge30pIHtcbiAgICAgICAgLy8gdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnQtaXRlbS1hZGRdIC5sb2FkaW5nT3ZlcmxheScpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkgPSBuZXcgSW1hZ2VHYWxsZXJ5KCQoJ1tkYXRhLWltYWdlLWdhbGxlcnldJywgdGhpcy4kc2NvcGUpKTtcbiAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuaW5pdCgpO1xuICAgICAgICB0aGlzLmxpc3RlblF1YW50aXR5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXScsICRzY29wZSk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdJywgJGZvcm0pO1xuICAgICAgICBjb25zdCBoYXNPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkudHJpbSgpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgaGFzRGVmYXVsdE9wdGlvbnMgPSAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuXG4gICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgICRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsICRmb3JtWzBdKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHByb2R1Y3QgYXR0cmlidXRlcy4gQWxzbyB1cGRhdGUgdGhlIGluaXRpYWwgdmlldyBpbiBjYXNlIGl0ZW1zIGFyZSBvb3NcbiAgICAgICAgLy8gb3IgaGF2ZSBkZWZhdWx0IHZhcmlhbnQgcHJvcGVydGllcyB0aGF0IGNoYW5nZSB0aGUgdmlld1xuICAgICAgICBpZiAoKF8uaXNFbXB0eShwcm9kdWN0QXR0cmlidXRlc0RhdGEpIHx8IGhhc0RlZmF1bHRPcHRpb25zKSAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICBjb25zdCAkcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKCRwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzKHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcblxuICAgICAgICB0aGlzLnByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQ5NjcyOTkyL2FqYXgtcmVxdWVzdC1mYWlscy13aGVuLXNlbmRpbmctZm9ybWRhdGEtaW5jbHVkaW5nLWVtcHR5LWZpbGUtaW5wdXQtaW4tc2FmYXJpXG4gICAgICogU2FmYXJpIGJyb3dzZXIgd2l0aCBqcXVlcnkgMy4zLjEgaGFzIGFuIGlzc3VlIHVwbG9hZGluZyBlbXB0eSBmaWxlIHBhcmFtZXRlcnMuIFRoaXMgZnVuY3Rpb24gcmVtb3ZlcyBhbnkgZW1wdHkgZmlsZXMgZnJvbSB0aGUgZm9ybSBwYXJhbXNcbiAgICAgKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhIG9iamVjdFxuICAgICAqL1xuICAgIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWxdIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaW5jZSAkcHJvZHVjdFZpZXcgY2FuIGJlIGR5bmFtaWNhbGx5IGluc2VydGVkIHVzaW5nIHJlbmRlcl93aXRoLFxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSAkc2NvcGVcbiAgICAgKi9cbiAgICBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoUHJpY2U6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0UHJpY2U6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG5cbiAgICAgICAgICAgIHN0b2NrOiB7XG4gICAgICAgICAgICAgICAgJGNvbnRhaW5lcjogJCgnLmZvcm0tZmllbGQtLXN0b2NrJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tkYXRhLXByb2R1Y3Qtc3RvY2tdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkc2t1OiAkKCdbZGF0YS1wcm9kdWN0LXNrdV0nKSxcbiAgICAgICAgICAgICR1cGM6ICQoJ1tkYXRhLXByb2R1Y3QtdXBjXScpLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgd2luZG93IGlzIGJlaW5nIHJ1biBpbnNpZGUgYW4gaWZyYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSdW5uaW5nSW5JZnJhbWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcbiAgICAgKlxuICAgICAqL1xuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhbiBhamF4IHJlcXVlc3QgaWYgaXQncyBhIGZpbGUgb3IgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVmlldyhwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlLmdldFNyYyhcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIDUwMFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2UuZ2V0U3JjKFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgNTAwLFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuc2V0QWx0ZXJuYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmwsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LnJlc3RvcmVJbWFnZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxuICAgICAqXG4gICAgICovXG4gICAgbGlzdGVuUXVhbnRpdHlDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdNb2RlbCA9IHRoaXMuZ2V0Vmlld01vZGVsKHRoaXMuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQ7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1pbiA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eU1heCA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG5cbiAgICAgICAgICAgIGxldCBxdHkgPSBwYXJzZUludCgkaW5wdXQudmFsKCksIDEwKTtcblxuICAgICAgICAgICAgLy8gSWYgYWN0aW9uIGlzIGluY3JlbWVudGluZ1xuICAgICAgICAgICAgaWYgKCR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcXVhbnRpdHkgbWF4IG9wdGlvbiBpcyBzZXRcbiAgICAgICAgICAgICAgICBpZiAocXVhbnRpdHlNYXggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGV4Y2VlZCBtYXhcbiAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgKyAxKSA8PSBxdWFudGl0eU1heCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHF0eSA+IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZmFsbCBiZWxvdyBtaW5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChxdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBoaWRkZW4gaW5wdXRcbiAgICAgICAgICAgIHZpZXdNb2RlbC5xdWFudGl0eS4kaW5wdXQudmFsKHF0eSk7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGV4dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiR0ZXh0LnRleHQocXR5KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBBZGQgYSBwcm9kdWN0IHRvIGNhcnRcbiAgICAgKlxuICAgICAqL1xuICAgIGFkZFByb2R1Y3RUb0NhcnQoZXZlbnQsIGZvcm0pIHtcbiAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCAkKGV2ZW50LnRhcmdldCkpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgIGNvbnN0IHdhaXRNZXNzYWdlID0gJGFkZFRvQ2FydEJ0bi5kYXRhKCd3YWl0TWVzc2FnZScpO1xuXG4gICAgICAgIC8vIERvIG5vdCBkbyBBSkFYIGlmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0XG4gICAgICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgLnZhbCh3YWl0TWVzc2FnZSlcbiAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgICAgIC8vIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbUFkZCh0aGlzLmZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAudmFsKG9yaWdpbmFsQnRuVmFsKVxuICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcblxuICAgICAgICAgICAgLy8gdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIC8vIEd1YXJkIHN0YXRlbWVudFxuICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0bXAudGV4dENvbnRlbnQgfHwgdG1wLmlubmVyVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUhhc2hcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvbkNvbXBsZXRlXG4gICAgICovXG4gICAgZ2V0Q2FydENvbnRlbnQoY2FydEl0ZW1IYXNoLCBvbkNvbXBsZXRlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvcHJldmlldycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBzdWdnZXN0OiBjYXJ0SXRlbUhhc2gsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1IYXNoXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIHVwZGF0ZUNhcnRDb250ZW50KG1vZGFsLCBjYXJ0SXRlbUhhc2gsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudChjYXJ0SXRlbUhhc2gsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGNhcnQgY291bnRlclxuICAgICAgICAgICAgY29uc3QgJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgICAgICBjb25zdCAkY2FydFF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCBtb2RhbC4kY29udGVudCk7XG4gICAgICAgICAgICBjb25zdCAkY2FydENvdW50ZXIgPSAkKCcudG9wLWNhcnQnKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJGNhcnRRdWFudGl0eS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuXG4gICAgICAgICAgICAkY2FydENvdW50ZXIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAqIEhpZGUgdGhlIGJveCBpZiB0aGUgbWVzc2FnZSBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScpO1xuXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoUHJpY2UuJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFByaWNlLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZSB0aGUgdmlldyBvZiBwcmljZSwgbWVzc2FnZXMsIFNLVSBhbmQgc3RvY2sgb3B0aW9ucyB3aGVuIGEgcHJvZHVjdCBvcHRpb24gY2hhbmdlc1xuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpIHtcbiAgICAgICAgdGhpcy5jbGVhclByaWNpbmdOb3RGb3VuZCh2aWV3TW9kZWwpO1xuXG4gICAgICAgIGlmIChwcmljZS53aXRoX3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHByaWNlLndpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhQcmljZS4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFByaWNlLiRzcGFuLmh0bWwocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0UHJpY2UuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRQcmljZS4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLnByaWNlKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEud2VpZ2h0KSkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgU0tVIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5za3UpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kc2t1LnRleHQoZGF0YS5za3UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kdXBjLnRleHQoZGF0YS51cGMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgc3RvY2sgdmlldyBpcyBvbiAoQ1Agc2V0dGluZ3MpXG4gICAgICAgIGlmICh2aWV3TW9kZWwuc3RvY2suJGNvbnRhaW5lci5sZW5ndGggJiYgXy5pc051bWJlcihkYXRhLnN0b2NrKSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoZGF0YSkge1xuICAgICAgICBjb25zdCB2aWV3TW9kZWwgPSB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSk7XG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xuXG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RJbWFnZShkYXRhLmltYWdlKTtcblxuICAgICAgICBpZiAoYmVoYXZpb3IgIT09ICdoaWRlX29wdGlvbicgJiYgYmVoYXZpb3IgIT09ICdsYWJlbF9vcHRpb24nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZS12YWx1ZV0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG5cbiAgICAgICAgICAgIGlmIChpblN0b2NrSWRzLmluZGV4T2YoYXR0cklkKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcblxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvdyByYWRpbyBidXR0b25zIHRvIGdldCBkZXNlbGVjdGVkXG4gICAgICovXG4gICAgaW5pdFJhZGlvQXR0cmlidXRlcygpIHtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdIGlucHV0W3R5cGU9XCJyYWRpb1wiXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCByYWRpbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHJhZGlvID0gJChyYWRpbyk7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgYmluZCB0byBjbGljayBvbmNlXG4gICAgICAgICAgICBpZiAoJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJHJhZGlvLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRyYWRpby5kYXRhKCdzdGF0ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnLCAkcmFkaW8ucHJvcCgnY2hlY2tlZCcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vZm9ybS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy51cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgdGhpcy4kcmV2aWV3TGluayA9ICQoJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuICAgICAgICBjb25zdCAkcmV2aWV3Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLndyaXRlUmV2aWV3LWZvcm0nKTtcbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScsICgpID0+IHtcbiAgICAgICAgICAgIHZhbGlkYXRvciA9IHJldmlldy5yZWdpc3RlclZhbGlkYXRpb24odGhpcy5jb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICAkKFwiLnByb2R1Y3QtdGh1bWJuYWlsc1wiKS5zbGljayh7XG5cdFx0XHRzbGlkZXNUb1Nob3c6IDYsXG5cdFx0XHRpbmZpbml0ZTogZmFsc2UsXG5cdFx0XHRkb3RzOiB0cnVlLFxuXHRcdFx0bGF6eUxvYWQ6IFwib25kZW1hbmRcIixcblx0XHRcdGF1dG9wbGF5OiB0cnVlLFxuXHRcdFx0YXV0b3BsYXlTcGVlZDogNTAwMDAsXG5cdFx0XHRwcmV2QXJyb3c6XG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwic2xpY2stcHJldlwiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvZGl2PicsXG5cdFx0XHRuZXh0QXJyb3c6XG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwic2xpY2stbmV4dFwiPjxpIGNsYXNzPVwiZmEgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2Rpdj4nLFxuXHRcdFx0cmVzcG9uc2l2ZTogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0YnJlYWtwb2ludDogMTQwMCxcblx0XHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdFx0c2xpZGVzVG9TaG93OiA1LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRicmVha3BvaW50OiAxMjAwLFxuXHRcdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJyZWFrcG9pbnQ6IDEwMjQsXG5cdFx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0XSxcblx0XHR9KTtcbiAgICAgICAgJCgnLmZvcm0tb3B0aW9uLnVuYXZhaWxhYmxlJykuY2xpY2soZmFsc2UpO1xuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG4gICAgfVxuICAgIHByb2R1Y3RSZXZpZXdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZignI3dyaXRlX3JldmlldycpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kcmV2aWV3TGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGdhbGxlcnkpIHtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtbWFpbi1pbWFnZV0nKTtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcyA9ICRnYWxsZXJ5LmZpbmQoJ1tkYXRhLWltYWdlLWdhbGxlcnktaXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7fTtcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuICAgIHNldE1haW5JbWFnZShpbWdPYmopIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSBfLmNsb25lKGltZ09iaik7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICAgICAgdGhpcy5zd2FwTWFpbkltYWdlKCk7XG4gICAgfVxuICAgIHNldEFsdGVybmF0ZUltYWdlKGltZ09iaikge1xuICAgICAgICBpZiAoIXRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zYXZlZEltYWdlID0ge1xuICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgIHpvb21JbWFnZVVybDogdGhpcy4kbWFpbkltYWdlLmF0dHIoJ2hyZWYnKSxcbiAgICAgICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuICAgIHJlc3RvcmVJbWFnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2F2ZWRJbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRNYWluSW1hZ2UodGhpcy5zYXZlZEltYWdlKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNhdmVkSW1hZ2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2VsZWN0TmV3SW1hZ2UoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGltZ09iaiA9IHtcbiAgICAgICAgICAgIG1haW5JbWFnZVVybDogJHRhcmdldC5maW5kKCdpbWcnKS5hdHRyKCdzcmMnKSxcbiAgICAgICAgICAgIHpvb21JbWFnZVVybDogJHRhcmdldC5hdHRyKCdocmVmJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5JbWFnZShpbWdPYmopO1xuICAgIH1cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRJbWFnZS4kc2VsZWN0ZWRUaHVtYikge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UuJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN3YXBNYWluSW1hZ2UoKSB7XG4gICAgICAgIHRoaXMuJG1haW5JbWFnZS5hdHRyKHtcbiAgICAgICAgICAgIHNyYzogdGhpcy5jdXJyZW50SW1hZ2UubWFpbkltYWdlVXJsLFxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy4kbWFpbkltYWdlLnBhcmVudCgpLmF0dHIoe1xuICAgICAgICAgICAgaHJlZjogdGhpcy5jdXJyZW50SW1hZ2Uuem9vbUltYWdlVXJsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kc2VsZWN0YWJsZUltYWdlcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld0ltYWdlLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbiIsImltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgeyBDb2xsYXBzaWJsZUV2ZW50cyB9IGZyb20gJy4uL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgZm9ybXMgZnJvbSAnLi4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigkcmV2aWV3Rm9ybSkge1xuICAgICAgICB0aGlzLnZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRyZXZpZXdGb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQgPSAkKCcjcHJvZHVjdC1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgICBjb25zdCAkY29udGVudCA9ICQoJyNwcm9kdWN0UmV2aWV3cy1jb250ZW50JywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdMaW5rJykub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEkY29udGVudC5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbGxhcHNlUmV2aWV3cygpIHtcbiAgICAgICAgLy8gV2UncmUgaW4gcGFnaW5hdGluZyBzdGF0ZSwgZG8gbm90IGNvbGxhcHNlXG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAmJiB3aW5kb3cubG9jYXRpb24uaGFzaC5pbmRleE9mKCcjcHJvZHVjdC1yZXZpZXdzJykgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvcmNlIGNvbGxhcHNlIG9uIHBhZ2UgbG9hZFxuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3QgSUQgaW50byB0aGUgcGFnaW5hdGlvbiBsaW5rXG4gICAgICovXG4gICAgaW5qZWN0UGFnaW5hdGlvbkxpbmsoKSB7XG4gICAgICAgIGNvbnN0ICRuZXh0TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLW5leHQgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcbiAgICAgICAgY29uc3QgJHByZXZMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tcHJldmlvdXMgLnBhZ2luYXRpb24tbGluaycsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICBpZiAoJG5leHRMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5leHRMaW5rLmF0dHIoJ2hyZWYnLCBgJHskbmV4dExpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHByZXZMaW5rLmxlbmd0aCkge1xuICAgICAgICAgICAgJHByZXZMaW5rLmF0dHIoJ2hyZWYnLCBgJHskcHJldkxpbmsuYXR0cignaHJlZicpfSAjcHJvZHVjdC1yZXZpZXdzYCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlclZhbGlkYXRpb24oY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoW3tcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZyYXRpbmdcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0aXRsZVwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnW25hbWU9XCJyZXZ0ZXh0XCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cImVtYWlsXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLmVtYWlsKHZhbCk7XG4gICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdFbWFpbCxcbiAgICAgICAgfV0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==