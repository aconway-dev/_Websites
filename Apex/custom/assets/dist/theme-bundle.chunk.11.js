(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_4__);



function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }

  var _proto = CatalogPage.prototype;

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_4___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_4___default.a.format({
      pathname: url.pathname,
      search: _common_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

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

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _url_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _form_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _product_swatch_builder__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product/swatch-builder */ "./assets/js/theme/product/swatch-builder.js");













/**
 * Faceted search view component
 */

var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;

    var defaultOptions = {
      accordionToggleSelector: "#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle, #facetedSearch .accordion .title",
      blockerSelector: "#facetedSearch .blocker",
      clearFacetSelector: "#facetedSearch .facetedSearch-clearLink",
      componentSelector: "#facetedSearch-navList",
      facetNavListSelector: "#facetedSearch .navList",
      priceRangeErrorSelector: "#facet-range-form .form-inlineMessage",
      priceRangeFieldsetSelector: "#facet-range-form .form-fieldset",
      priceRangeFormSelector: "#facet-range-form",
      priceRangeMaxPriceSelector: "#facet-range-form [name=max_price]",
      priceRangeMinPriceSelector: "#facet-range-form [name=min_price]",
      showMoreToggleSelector: "#facetedSearch .accordion-content .toggleLink",
      facetedSearchFilterItems: "#facetedSearch-filterItems .form-input",
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])("#modal")[0],
      modalOpen: false
    }; // Private properties

    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = []; // Init collapsibles

    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Init price validator

    this.initPriceValidator(); // Show limited items by default

    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    }); // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped

    setTimeout(function () {
      if ($(_this.options.componentSelector).is(":hidden")) {
        _this.collapseAllFacets();
      }
    }); // Observe user events

    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  } // Public methods


  var _proto = FacetedSearch.prototype;

  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    } // Init collapsibles


    Object(_collapsible__WEBPACK_IMPORTED_MODULE_9__["default"])(); // Init price validator

    this.initPriceValidator(); // Restore view state
    //this.restoreCollapsedFacets();
    //this.expandAllFacets();

    this.restoreCollapsedFacetItems(); // Bind events

    this.bindEvents();
    Object(_product_swatch_builder__WEBPACK_IMPORTED_MODULE_12__["default"])();
  };

  _proto.updateView = function updateView() {
    var _this2 = this;

    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(_url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();

      if (err) {
        throw new Error(err);
      } // Refresh view with new content


      _this2.refreshView(content);
    });
  };

  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr("id"); // Remove

    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };

  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr("id");
    var hasMoreResults = $navList.data("hasMoreResults");

    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };

  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr("id"); // Toggle depending on `collapsed` flag

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;

    var facet = $navList.data("facet");
    var facetUrl = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].getUrl();

    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }

        _this3.options.modal.open();

        _this3.options.modalOpen = true;

        _this3.options.modal.updateContent(response);
      });
    }

    this.collapseFacetItems($navList);
    return false;
  };

  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $(".navList-item");
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();

      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };

  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data("collapsibleInstance");
    collapsible && collapsible.open();
  };

  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data("collapsibleInstance");
    collapsible && collapsible.close();
  };

  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this4.collapseFacet($accordionToggle);
    });
  };

  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);

      _this5.expandFacet($accordionToggle);
    });
  } // Private methods
  ;

  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }

    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_11__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _form_utils__WEBPACK_IMPORTED_MODULE_10__["Validators"].setMinMaxPriceValidation(validator, selectors);
    this.priceRangeValidator = validator;
  };

  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;

    var $navLists = $(this.options.facetNavListSelector); // Restore collapsed state for each facet

    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr("id");

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);

      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };

  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;

    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data("collapsibleInstance");
      var id = collapsible.targetId;

      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);

      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };

  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents(); // DOM events

    $(window).on("statechange", this.onStateChange);
    $(document).on("click", this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on("toggle.collapsible", this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on("keyup", this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on("click", this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on("facetedSearch-facet-clicked", this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on("facetedSearch-range-submitted", this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].on("sortBy-submitted", this.onSortBySubmit);
    setTimeout(function () {
      var accordion = document.querySelectorAll(".accordion");
      console.log(accordion.length);
      accordion.forEach(function (item) {
        if (!item.classList.contains("active")) {
          item.classList.add("active");
          item.classList.remove("active");
        }
      });
      var accordionHeading = document.querySelectorAll(".accordion > .title");
      accordionHeading.forEach(function (item) {
        $(item).on("click", function (event) {
          item.parentElement.classList.contains("active") ? item.parentElement.classList.remove("active") : item.parentElement.classList.add("active");
        });
      });
    }, 0);
  };

  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off("statechange", this.onStateChange);
    $(document).off("click", this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off("toggle.collapsible", this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off("keyup", this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off("click", this.onClearFacet); // Hooks

    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off("facetedSearch-facet-clicked", this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off("facetedSearch-range-submitted", this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["hooks"].off("sortBy-submitted", this.onSortBySubmit);
  };

  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr("href");
    event.preventDefault();
    event.stopPropagation(); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);
  };

  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr("href")); // Prevent default

    event.preventDefault(); // Toggle visible items

    this.toggleFacetItems($navList);
  };

  _proto.onFacetClick = function onFacetClick(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr("href");
    event.preventDefault();
    $link.toggleClass("is-selected"); // Update URL

    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url);

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event) {
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var queryParams = $(event.currentTarget).serialize().split("=");
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onRangeSubmit = function onRangeSubmit(event) {
    event.preventDefault();

    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_11__["default"].constants.VALID)) {
      return;
    }

    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var queryParams = decodeURI($(event.currentTarget).serialize()).split("&");
    queryParams = _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].parseQueryParams(queryParams);

    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_6___default.a.format({
      pathname: url.pathname,
      search: _url_utils__WEBPACK_IMPORTED_MODULE_7__["default"].buildQueryString(url.query)
    }));
  };

  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };

  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data("collapsibleInstance");
    var id = collapsible.targetId;

    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };

  return FacetedSearch;
}();

/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
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

/***/ "./assets/js/theme/common/url-utils.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/common/url-utils.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);


var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(url, true);
    var param; // Let the formatter use the query object to build the new url

    parsed.search = null;

    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    return url__WEBPACK_IMPORTED_MODULE_1___default.a.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;

    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;

          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }

    return out.substring(1);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tZWRpYS1xdWVyeS1saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXJsLXV0aWxzLmpzIl0sIm5hbWVzIjpbIkNhdGFsb2dQYWdlIiwib25Tb3J0QnlTdWJtaXQiLCJldmVudCIsInVybCIsIlVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiUExVR0lOX0tFWSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwib3BlbiIsImNsb3NlIiwidG9nZ2xlIiwiY2xpY2siLCJDb2xsYXBzaWJsZVN0YXRlIiwiY2xvc2VkIiwicHJlcGVuZEhhc2giLCJpZCIsImluZGV4T2YiLCJvcHRpb25zRnJvbURhdGEiLCIkZWxlbWVudCIsImRpc2FibGVkQnJlYWtwb2ludCIsImRhdGEiLCJkaXNhYmxlZFN0YXRlIiwiZW5hYmxlZFN0YXRlIiwib3BlbkNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlIiwiJHRvZ2dsZSIsIiR0YXJnZXQiLCJ0YXJnZXRJZCIsImF0dHIiLCJkaXNhYmxlZE1lZGlhUXVlcnlMaXN0IiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5IiwiZGlzYWJsZWQiLCJtYXRjaGVzIiwib25DbGlja2VkIiwiYmluZCIsIm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoIiwiaXNDb2xsYXBzZWQiLCJpc09wZW4iLCJiaW5kRXZlbnRzIiwibm90aWZ5IiwiYWRkQ2xhc3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVCeVN0YXRlIiwic3RhdGUiLCJhcmdzIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJoYXNDb2xsYXBzaWJsZSIsImNvbGxhcHNpYmxlSW5zdGFuY2UiLCJjb250YWlucyIsImdldCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsIm1lZGlhIiwiaGFzQ2xhc3MiLCJpcyIsIl9kaXNhYmxlZCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInNlbGVjdG9yIiwib3ZlcnJpZGVPcHRpb25zIiwiJGNvbGxhcHNpYmxlcyIsIiRjb250ZXh0IiwibWFwIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRDb2xsYXBzaWJsZSIsIm9wdGlvbnMiLCJjb2xsYXBzaWJsZSIsInRvQXJyYXkiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwibW9kYWxPcGVuIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwic2V0VGltZW91dCIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25TdGF0ZUNoYW5nZSIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJTd2F0Y2hCdWlsZGVyIiwidXBkYXRlVmlldyIsInNob3ciLCJhcGkiLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiaGFzTW9yZVJlc3VsdHMiLCJ0b2dnbGVGYWNldEl0ZW1zIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsInVwZGF0ZUNvbnRlbnQiLCIkaXRlbXMiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsInRleHQiLCJleHBhbmRGYWNldCIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzZUZhY2V0IiwiJGFjY29yZGlvblRvZ2dsZXMiLCJhY2NvcmRpb25Ub2dnbGUiLCJleHBhbmRBbGxGYWNldHMiLCJsZW5ndGgiLCJ2YWxpZGF0b3IiLCJub2QiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiVmFsaWRhdG9ycyIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJkb2N1bWVudCIsImhvb2tzIiwiYWNjb3JkaW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFjY29yZGlvbkhlYWRpbmciLCJwYXJlbnRFbGVtZW50IiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwidG9nZ2xlQ2xhc3MiLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImJyZWFrcG9pbnRTaXplcyIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJicmVha3BvaW50TmFtZSIsIm1hdGNoTWVkaWEiLCJicmVha3BvaW50IiwibWVkaWFRdWVyeSIsIm1lZGlhUXVlcnlMaXN0IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRpdGxlIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwicXVlcnlEYXRhIiwib3V0IiwiQXJyYXkiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxXOzs7Ozs7Ozs7U0FDakJDLGMsR0FBQSx3QkFBZUMsS0FBZixFQUFzQjtJQUNsQixJQUFNQyxHQUFHLEdBQUdDLDBDQUFHLENBQUNDLEtBQUosQ0FBVUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUExQixFQUFnQyxJQUFoQyxDQUFaO0lBQ0EsSUFBTUMsV0FBVyxHQUFHQyxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsYUFBUCxDQUFELENBQXVCQyxTQUF2QixHQUFtQ0MsS0FBbkMsQ0FBeUMsR0FBekMsQ0FBcEI7SUFFQVYsR0FBRyxDQUFDVyxLQUFKLENBQVVMLFdBQVcsQ0FBQyxDQUFELENBQXJCLElBQTRCQSxXQUFXLENBQUMsQ0FB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QUFQO0VBQ0g7QUE1Q1ksQ0FBakI7QUErQ2V2TSx1RUFBZixFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbWVkaWFRdWVyeUxpc3RGYWN0b3J5IGZyb20gJy4vbWVkaWEtcXVlcnktbGlzdCc7XG5cbmNvbnN0IFBMVUdJTl9LRVkgPSAnY29sbGFwc2libGUnO1xuXG5leHBvcnQgY29uc3QgQ29sbGFwc2libGVFdmVudHMgPSB7XG4gICAgb3BlbjogJ29wZW4uY29sbGFwc2libGUnLFxuICAgIGNsb3NlOiAnY2xvc2UuY29sbGFwc2libGUnLFxuICAgIHRvZ2dsZTogJ3RvZ2dsZS5jb2xsYXBzaWJsZScsXG4gICAgY2xpY2s6ICdjbGljay5jb2xsYXBzaWJsZScsXG59O1xuXG5jb25zdCBDb2xsYXBzaWJsZVN0YXRlID0ge1xuICAgIGNsb3NlZDogJ2Nsb3NlZCcsXG4gICAgb3BlbjogJ29wZW4nLFxufTtcblxuZnVuY3Rpb24gcHJlcGVuZEhhc2goaWQpIHtcbiAgICBpZiAoaWQgJiYgaWQuaW5kZXhPZignIycpID09PSAwKSB7XG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCMke2lkfWA7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbnNGcm9tRGF0YSgkZWxlbWVudCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludDogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkQnJlYWtwb2ludGApLFxuICAgICAgICBkaXNhYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RGlzYWJsZWRTdGF0ZWApLFxuICAgICAgICBlbmFibGVkU3RhdGU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1FbmFibGVkU3RhdGVgKSxcbiAgICAgICAgb3BlbkNsYXNzTmFtZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfU9wZW5DbGFzc05hbWVgKSxcbiAgICB9O1xufVxuXG4vKipcbiAqIENvbGxhcHNlL0V4cGFuZCB0b2dnbGVcbiAqL1xuZXhwb3J0IGNsYXNzIENvbGxhcHNpYmxlIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRvZ2dsZSAtIFRyaWdnZXIgYnV0dG9uXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0YXJnZXQgLSBDb250ZW50IHRvIGNvbGxhcHNlIC8gZXhwYW5kXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLiRjb250ZXh0XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmVuYWJsZWRTdGF0ZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogPGJ1dHRvbiBpZD1cIiNtb3JlXCI+Q29sbGFwc2U8L2J1dHRvbj5cbiAgICAgKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICAgICAqXG4gICAgICogbmV3IENvbGxhcHNpYmxlKCQoJyNtb3JlJyksICQoJyNjb250ZW50JykpO1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKCR0b2dnbGUsICR0YXJnZXQsIHtcbiAgICAgICAgZGlzYWJsZWRCcmVha3BvaW50LFxuICAgICAgICBkaXNhYmxlZFN0YXRlLFxuICAgICAgICBlbmFibGVkU3RhdGUsXG4gICAgICAgIG9wZW5DbGFzc05hbWUgPSAnaXMtb3BlbicsXG4gICAgfSA9IHt9KSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZSA9ICR0b2dnbGU7XG4gICAgICAgIHRoaXMuJHRhcmdldCA9ICR0YXJnZXQ7XG4gICAgICAgIHRoaXMudGFyZ2V0SWQgPSAkdGFyZ2V0LmF0dHIoJ2lkJyk7XG4gICAgICAgIHRoaXMub3BlbkNsYXNzTmFtZSA9IG9wZW5DbGFzc05hbWU7XG4gICAgICAgIHRoaXMuZGlzYWJsZWRTdGF0ZSA9IGRpc2FibGVkU3RhdGU7XG4gICAgICAgIHRoaXMuZW5hYmxlZFN0YXRlID0gZW5hYmxlZFN0YXRlO1xuXG4gICAgICAgIGlmIChkaXNhYmxlZEJyZWFrcG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCA9IG1lZGlhUXVlcnlMaXN0RmFjdG9yeShkaXNhYmxlZEJyZWFrcG9pbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5tYXRjaGVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXV0by1iaW5kXG4gICAgICAgIHRoaXMub25DbGlja2VkID0gdGhpcy5vbkNsaWNrZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCA9IHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2guYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBBc3NpZ24gRE9NIGF0dHJpYnV0ZXNcbiAgICAgICAgdGhpcy4kdGFyZ2V0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdGhpcy5pc0NvbGxhcHNlZCk7XG4gICAgICAgIHRoaXMuJHRvZ2dsZVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtY29udHJvbHMnLCAkdGFyZ2V0LmF0dHIoJ2lkJykpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRoaXMuaXNPcGVuKTtcblxuICAgICAgICAvLyBMaXN0ZW5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgZ2V0IGlzQ29sbGFwc2VkKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuJHRhcmdldC5oYXNDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpIHx8IHRoaXMuJHRhcmdldC5pcygnOmhpZGRlbicpO1xuICAgIH1cblxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc0NvbGxhcHNlZDtcbiAgICB9XG5cbiAgICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcblxuICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnlTdGF0ZSh0aGlzLmRpc2FibGVkU3RhdGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50b2dnbGVCeVN0YXRlKHRoaXMuZW5hYmxlZFN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBkaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICAgIH1cblxuICAgIG9wZW4oeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuJHRhcmdldFxuICAgICAgICAgICAgLmFkZENsYXNzKHRoaXMub3BlbkNsYXNzTmFtZSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5vcGVuLCBbdGhpc10pO1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMudG9nZ2xlLCBbdGhpc10pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2UoeyBub3RpZnkgPSB0cnVlIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcblxuICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgICAgICBpZiAobm90aWZ5KSB7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbG9zZSwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlQnlTdGF0ZShzdGF0ZSwgLi4uYXJncykge1xuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XG4gICAgICAgIGNhc2UgQ29sbGFwc2libGVTdGF0ZS5vcGVuOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3Blbi5hcHBseSh0aGlzLCBhcmdzKTtcblxuICAgICAgICBjYXNlIENvbGxhcHNpYmxlU3RhdGUuY2xvc2VkOlxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2UuYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDb2xsYXBzaWJsZShjb2xsYXBzaWJsZUluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiAkLmNvbnRhaW5zKHRoaXMuJHRhcmdldC5nZXQoMCksIGNvbGxhcHNpYmxlSW5zdGFuY2UuJHRhcmdldC5nZXQoMCkpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vbihDb2xsYXBzaWJsZUV2ZW50cy5jbGljaywgdGhpcy5vbkNsaWNrZWQpO1xuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgJiYgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QuYWRkTGlzdGVuZXIodGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHRvZ2dsZS5vZmYoQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DbGlja2VkKGV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgfVxuXG4gICAgb25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gobWVkaWEpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IG1lZGlhLm1hdGNoZXM7XG4gICAgfVxufVxuXG4vKipcbiAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgY29uc3RydWN0aW5nIENvbGxhcHNpYmxlIGluc3RhbmNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFtzZWxlY3Rvcl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy4kY29udGV4dF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZEJyZWFrcG9pbnRdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRTdGF0ZV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5lbmFibGVkU3RhdGVdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMub3BlbkNsYXNzTmFtZV1cbiAqIEByZXR1cm4ge0FycmF5fSBhcnJheSBvZiBDb2xsYXBzaWJsZSBpbnN0YW5jZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogPGEgaHJlZj1cIiNjb250ZW50XCIgZGF0YS1jb2xsYXBzaWJsZT5Db2xsYXBzZTwvYT5cbiAqIDxkaXYgaWQ9XCJjb250ZW50XCI+Li4uPC9kaXY+XG4gKlxuICogY29sbGFwc2libGVGYWN0b3J5KCk7XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbGxhcHNpYmxlRmFjdG9yeShzZWxlY3RvciA9IGBbZGF0YS0ke1BMVUdJTl9LRVl9XWAsIG92ZXJyaWRlT3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGNvbGxhcHNpYmxlcyA9ICQoc2VsZWN0b3IsIG92ZXJyaWRlT3B0aW9ucy4kY29udGV4dCk7XG5cbiAgICByZXR1cm4gJGNvbGxhcHNpYmxlcy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IGAke1BMVUdJTl9LRVl9SW5zdGFuY2VgO1xuICAgICAgICBjb25zdCBjYWNoZWRDb2xsYXBzaWJsZSA9ICR0b2dnbGUuZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZENvbGxhcHNpYmxlIGluc3RhbmNlb2YgQ29sbGFwc2libGUpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDb2xsYXBzaWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhcmdldElkID0gcHJlcGVuZEhhc2goJHRvZ2dsZS5kYXRhKFBMVUdJTl9LRVkpIHx8XG4gICAgICAgICAgICAkdG9nZ2xlLmRhdGEoYCR7UExVR0lOX0tFWX1UYXJnZXRgKSB8fFxuICAgICAgICAgICAgJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gXy5leHRlbmQob3B0aW9uc0Zyb21EYXRhKCR0b2dnbGUpLCBvdmVycmlkZU9wdGlvbnMpO1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9IG5ldyBDb2xsYXBzaWJsZSgkdG9nZ2xlLCAkKHRhcmdldElkLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpLCBvcHRpb25zKTtcblxuICAgICAgICAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXksIGNvbGxhcHNpYmxlKTtcblxuICAgICAgICByZXR1cm4gY29sbGFwc2libGU7XG4gICAgfSkudG9BcnJheSgpO1xufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gXCJAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlsc1wiO1xuaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFVybCBmcm9tIFwidXJsXCI7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSBcIi4vdXJsLXV0aWxzXCI7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gXCIuLi9nbG9iYWwvbW9kYWxcIjtcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSBcIi4vY29sbGFwc2libGVcIjtcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tIFwiLi9mb3JtLXV0aWxzXCI7XG5pbXBvcnQgbm9kIGZyb20gXCIuL25vZFwiO1xuaW1wb3J0IFN3YXRjaEJ1aWxkZXIgZnJvbSBcIi4uL3Byb2R1Y3Qvc3dhdGNoLWJ1aWxkZXJcIjtcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcblx0LyoqXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcblx0ICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBDb25maWd1cmFibGUgb3B0aW9uc1xuXHQgKiBAZXhhbXBsZVxuXHQgKlxuXHQgKiBsZXQgcmVxdWVzdE9wdGlvbnMgPSB7XG5cdCAqICAgICAgdGVtcGxhdGVzOiB7XG5cdCAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcblx0ICogICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInXG5cdCAqICAgICB9XG5cdCAqIH07XG5cdCAqXG5cdCAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuXHQgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG5cdCAqICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XG5cdCAqIH07XG5cdCAqXG5cdCAqIGxldCBmYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIHRlbXBsYXRlc0RpZExvYWQpO1xuXHQgKi9cblx0Y29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG5cdFx0Y29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdFx0XHRhY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcjpcblx0XHRcdFx0XCIjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLW5hdmlnYXRpb24sICNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLXRvZ2dsZSwgI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbiAudGl0bGVcIixcblx0XHRcdGJsb2NrZXJTZWxlY3RvcjogXCIjZmFjZXRlZFNlYXJjaCAuYmxvY2tlclwiLFxuXHRcdFx0Y2xlYXJGYWNldFNlbGVjdG9yOiBcIiNmYWNldGVkU2VhcmNoIC5mYWNldGVkU2VhcmNoLWNsZWFyTGlua1wiLFxuXHRcdFx0Y29tcG9uZW50U2VsZWN0b3I6IFwiI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdFwiLFxuXHRcdFx0ZmFjZXROYXZMaXN0U2VsZWN0b3I6IFwiI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3RcIixcblx0XHRcdHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiBcIiNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWlubGluZU1lc3NhZ2VcIixcblx0XHRcdHByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yOiBcIiNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0XCIsXG5cdFx0XHRwcmljZVJhbmdlRm9ybVNlbGVjdG9yOiBcIiNmYWNldC1yYW5nZS1mb3JtXCIsXG5cdFx0XHRwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogXCIjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1tYXhfcHJpY2VdXCIsXG5cdFx0XHRwcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcjogXCIjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdXCIsXG5cdFx0XHRzaG93TW9yZVRvZ2dsZVNlbGVjdG9yOlxuXHRcdFx0XHRcIiNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGlua1wiLFxuXHRcdFx0ZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiBcIiNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0XCIsXG5cdFx0XHRtb2RhbDogbW9kYWxGYWN0b3J5KFwiI21vZGFsXCIpWzBdLFxuXHRcdFx0bW9kYWxPcGVuOiBmYWxzZSxcblx0XHR9O1xuXG5cdFx0Ly8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG5cdFx0dGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xuXHRcdHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblx0XHR0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXHRcdHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XG5cdFx0dGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cblx0XHQvLyBJbml0IGNvbGxhcHNpYmxlc1xuXHRcdGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG5cdFx0Ly8gSW5pdCBwcmljZSB2YWxpZGF0b3Jcblx0XHR0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG5cdFx0Ly8gU2hvdyBsaW1pdGVkIGl0ZW1zIGJ5IGRlZmF1bHRcblx0XHQkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcblx0XHRcdHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQ29sbGFwc2UgYWxsIGZhY2V0cyBpZiBpbml0aWFsbHkgaGlkZGVuXG5cdFx0Ly8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKFwiOmhpZGRlblwiKSkge1xuXHRcdFx0XHR0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG5cdFx0dGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vblRvZ2dsZUNsaWNrID0gdGhpcy5vblRvZ2dsZUNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkZhY2V0Q2xpY2sgPSB0aGlzLm9uRmFjZXRDbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5maWx0ZXJGYWNldEl0ZW1zID0gdGhpcy5maWx0ZXJGYWNldEl0ZW1zLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcblx0fVxuXG5cdC8vIFB1YmxpYyBtZXRob2RzXG5cdHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcblx0XHRpZiAoY29udGVudCkge1xuXHRcdFx0dGhpcy5jYWxsYmFjayhjb250ZW50KTtcblx0XHR9XG5cblx0XHQvLyBJbml0IGNvbGxhcHNpYmxlc1xuXHRcdGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG5cdFx0Ly8gSW5pdCBwcmljZSB2YWxpZGF0b3Jcblx0XHR0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG5cdFx0Ly8gUmVzdG9yZSB2aWV3IHN0YXRlXG5cdFx0Ly90aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcblx0XHQvL3RoaXMuZXhwYW5kQWxsRmFjZXRzKCk7XG5cdFx0dGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG5cdFx0Ly8gQmluZCBldmVudHNcblx0XHR0aGlzLmJpbmRFdmVudHMoKTtcblx0XHRTd2F0Y2hCdWlsZGVyKCk7XG5cdH1cblxuXHR1cGRhdGVWaWV3KCkge1xuXHRcdCQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG5cdFx0YXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcblx0XHRcdCQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG5cdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihlcnIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuXHRcdFx0dGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcblx0XHR9KTtcblx0fVxuXG5cdGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcblx0XHRjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoXCJpZFwiKTtcblxuXHRcdC8vIFJlbW92ZVxuXHRcdHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblx0fVxuXG5cdGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuXHRcdGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cihcImlkXCIpO1xuXHRcdGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YShcImhhc01vcmVSZXN1bHRzXCIpO1xuXG5cdFx0aWYgKGhhc01vcmVSZXN1bHRzKSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgW2lkXSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblx0XHR9XG5cdH1cblxuXHR0b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG5cdFx0Y29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKFwiaWRcIik7XG5cblx0XHQvLyBUb2dnbGUgZGVwZW5kaW5nIG9uIGBjb2xsYXBzZWRgIGZsYWdcblx0XHRpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuXHRcdFx0dGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Z2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuXHRcdGNvbnN0IGZhY2V0ID0gJG5hdkxpc3QuZGF0YShcImZhY2V0XCIpO1xuXHRcdGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cblx0XHRpZiAodGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSkge1xuXHRcdFx0YXBpLmdldFBhZ2UoXG5cdFx0XHRcdGZhY2V0VXJsLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG5cdFx0XHRcdFx0cGFyYW1zOiB7XG5cdFx0XHRcdFx0XHRsaXN0X2FsbDogZmFjZXQsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdFx0KGVyciwgcmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuXHRcdFx0XHRcdHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblx0XHRcdFx0fVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHR0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG5cdFx0Y29uc3QgJGl0ZW1zID0gJChcIi5uYXZMaXN0LWl0ZW1cIik7XG5cdFx0Y29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cblx0XHQkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcblx0XHRcdGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG5cdFx0XHRcdCQoZWxlbWVudCkuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0JChlbGVtZW50KS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG5cdFx0Y29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoXCJjb2xsYXBzaWJsZUluc3RhbmNlXCIpO1xuXG5cdFx0Y29sbGFwc2libGUgJiYgY29sbGFwc2libGUub3BlbigpO1xuXHR9XG5cblx0Y29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG5cdFx0Y29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoXCJjb2xsYXBzaWJsZUluc3RhbmNlXCIpO1xuXG5cdFx0Y29sbGFwc2libGUgJiYgY29sbGFwc2libGUuY2xvc2UoKTtcblx0fVxuXG5cdGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuXHRcdGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG5cdFx0JGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuXHRcdFx0Y29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuXHRcdFx0dGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZXhwYW5kQWxsRmFjZXRzKCkge1xuXHRcdGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG5cdFx0JGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuXHRcdFx0Y29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuXHRcdFx0dGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIFByaXZhdGUgbWV0aG9kc1xuXHRpbml0UHJpY2VWYWxpZGF0b3IoKSB7XG5cdFx0aWYgKCQodGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IpLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xuXHRcdGNvbnN0IHNlbGVjdG9ycyA9IHtcblx0XHRcdGVycm9yU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRXJyb3JTZWxlY3Rvcixcblx0XHRcdGZpZWxkc2V0U2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRmllbGRzZXRTZWxlY3Rvcixcblx0XHRcdGZvcm1TZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGb3JtU2VsZWN0b3IsXG5cdFx0XHRtYXhQcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3IsXG5cdFx0XHRtaW5QcmljZVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IsXG5cdFx0fTtcblxuXHRcdFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzKTtcblxuXHRcdHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcblx0fVxuXG5cdHJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCkge1xuXHRcdGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuXHRcdC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG5cdFx0JG5hdkxpc3RzLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG5cdFx0XHRjb25zdCAkbmF2TGlzdCA9ICQobmF2TGlzdCk7XG5cdFx0XHRjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoXCJpZFwiKTtcblx0XHRcdGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuXHRcdFx0aWYgKHNob3VsZENvbGxhcHNlKSB7XG5cdFx0XHRcdHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRyZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuXHRcdGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG5cdFx0JGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuXHRcdFx0Y29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblx0XHRcdGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKFwiY29sbGFwc2libGVJbnN0YW5jZVwiKTtcblx0XHRcdGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cdFx0XHRjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuXHRcdFx0aWYgKHNob3VsZENvbGxhcHNlKSB7XG5cdFx0XHRcdHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRiaW5kRXZlbnRzKCkge1xuXHRcdC8vIENsZWFuLXVwXG5cdFx0dGhpcy51bmJpbmRFdmVudHMoKTtcblxuXHRcdC8vIERPTSBldmVudHNcblx0XHQkKHdpbmRvdykub24oXCJzdGF0ZWNoYW5nZVwiLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuXHRcdCQoZG9jdW1lbnQpLm9uKFxuXHRcdFx0XCJjbGlja1wiLFxuXHRcdFx0dGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsXG5cdFx0XHR0aGlzLm9uVG9nZ2xlQ2xpY2tcblx0XHQpO1xuXHRcdCQoZG9jdW1lbnQpLm9uKFxuXHRcdFx0XCJ0b2dnbGUuY29sbGFwc2libGVcIixcblx0XHRcdHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcixcblx0XHRcdHRoaXMub25BY2NvcmRpb25Ub2dnbGVcblx0XHQpO1xuXHRcdCQoZG9jdW1lbnQpLm9uKFxuXHRcdFx0XCJrZXl1cFwiLFxuXHRcdFx0dGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyxcblx0XHRcdHRoaXMuZmlsdGVyRmFjZXRJdGVtc1xuXHRcdCk7XG5cdFx0JCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbihcImNsaWNrXCIsIHRoaXMub25DbGVhckZhY2V0KTtcblxuXHRcdC8vIEhvb2tzXG5cdFx0aG9va3Mub24oXCJmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWRcIiwgdGhpcy5vbkZhY2V0Q2xpY2spO1xuXHRcdGhvb2tzLm9uKFwiZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWRcIiwgdGhpcy5vblJhbmdlU3VibWl0KTtcblx0XHRob29rcy5vbihcInNvcnRCeS1zdWJtaXR0ZWRcIiwgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG5cblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNvbnN0IGFjY29yZGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uXCIpO1xuXHRcdFx0Y29uc29sZS5sb2coYWNjb3JkaW9uLmxlbmd0aCk7XG5cdFx0XHRcblx0XHRcdGFjY29yZGlvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdGlmICghaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpICB7XG5cdFx0XHRcdFx0aXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblxuICAgICAgICAgICAgY29uc3QgYWNjb3JkaW9uSGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYWNjb3JkaW9uID4gLnRpdGxlXCIpO1xuICAgICAgICAgICAgYWNjb3JkaW9uSGVhZGluZy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRcdCQoaXRlbSkub24oXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG5cdFx0XHRcdFx0XHQ/IGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG5cdFx0XHRcdFx0XHQ6IGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuXHRcdFx0XHR9KTtcbiAgICAgICAgICAgIH0pXG5cdFx0fSwgMCk7XG5cdH1cblxuXHR1bmJpbmRFdmVudHMoKSB7XG5cdFx0Ly8gRE9NIGV2ZW50c1xuXHRcdCQod2luZG93KS5vZmYoXCJzdGF0ZWNoYW5nZVwiLCB0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuXHRcdCQoZG9jdW1lbnQpLm9mZihcblx0XHRcdFwiY2xpY2tcIixcblx0XHRcdHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLFxuXHRcdFx0dGhpcy5vblRvZ2dsZUNsaWNrXG5cdFx0KTtcblx0XHQkKGRvY3VtZW50KS5vZmYoXG5cdFx0XHRcInRvZ2dsZS5jb2xsYXBzaWJsZVwiLFxuXHRcdFx0dGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLFxuXHRcdFx0dGhpcy5vbkFjY29yZGlvblRvZ2dsZVxuXHRcdCk7XG5cdFx0JChkb2N1bWVudCkub2ZmKFxuXHRcdFx0XCJrZXl1cFwiLFxuXHRcdFx0dGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyxcblx0XHRcdHRoaXMuZmlsdGVyRmFjZXRJdGVtc1xuXHRcdCk7XG5cdFx0JCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vZmYoXCJjbGlja1wiLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cblx0XHQvLyBIb29rc1xuXHRcdGhvb2tzLm9mZihcImZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZFwiLCB0aGlzLm9uRmFjZXRDbGljayk7XG5cdFx0aG9va3Mub2ZmKFwiZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWRcIiwgdGhpcy5vblJhbmdlU3VibWl0KTtcblx0XHRob29rcy5vZmYoXCJzb3J0Qnktc3VibWl0dGVkXCIsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuXHR9XG5cblx0b25DbGVhckZhY2V0KGV2ZW50KSB7XG5cdFx0Y29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoXCJocmVmXCIpO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFVwZGF0ZSBVUkxcblx0XHR1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cdH1cblxuXHRvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG5cdFx0Y29uc3QgJHRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0Y29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cihcImhyZWZcIikpO1xuXG5cdFx0Ly8gUHJldmVudCBkZWZhdWx0XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG5cdFx0dGhpcy50b2dnbGVGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblx0fVxuXG5cdG9uRmFjZXRDbGljayhldmVudCkge1xuXHRcdGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRjb25zdCB1cmwgPSAkbGluay5hdHRyKFwiaHJlZlwiKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQkbGluay50b2dnbGVDbGFzcyhcImlzLXNlbGVjdGVkXCIpO1xuXG5cdFx0Ly8gVXBkYXRlIFVSTFxuXHRcdHVybFV0aWxzLmdvVG9VcmwodXJsKTtcblxuXHRcdGlmICh0aGlzLm9wdGlvbnMubW9kYWxPcGVuKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMubW9kYWwuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRvblNvcnRCeVN1Ym1pdChldmVudCkge1xuXHRcdGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG5cdFx0Y29uc3QgcXVlcnlQYXJhbXMgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KFwiPVwiKTtcblxuXHRcdHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcblx0XHRkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dXJsVXRpbHMuZ29Ub1VybChcblx0XHRcdFVybC5mb3JtYXQoe1xuXHRcdFx0XHRwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuXHRcdFx0XHRzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSxcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdG9uUmFuZ2VTdWJtaXQoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcblx0XHRsZXQgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSkuc3BsaXQoXG5cdFx0XHRcIiZcIlxuXHRcdCk7XG5cdFx0cXVlcnlQYXJhbXMgPSB1cmxVdGlscy5wYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuXHRcdGZvciAoY29uc3Qga2V5IGluIHF1ZXJ5UGFyYW1zKSB7XG5cdFx0XHRpZiAocXVlcnlQYXJhbXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuXHRcdFx0XHR1cmwucXVlcnlba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dXJsVXRpbHMuZ29Ub1VybChcblx0XHRcdFVybC5mb3JtYXQoe1xuXHRcdFx0XHRwYXRobmFtZTogdXJsLnBhdGhuYW1lLFxuXHRcdFx0XHRzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSxcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdG9uU3RhdGVDaGFuZ2UoKSB7XG5cdFx0dGhpcy51cGRhdGVWaWV3KCk7XG5cdH1cblxuXHRvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuXHRcdGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKFwiY29sbGFwc2libGVJbnN0YW5jZVwiKTtcblx0XHRjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXG5cdFx0aWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiLypcbiAqIFJlbWVtYmVyIHRvIHVwZGF0ZSAvYXNzZXRzL3Njc3Mvc2V0dGluZ3MvZ2xvYmFsL3NjcmVlbnNpemVzL3NjcmVlbnNpemVzLnNjc3NcbiAqIGlmIHlvdSBkZWNpZGUgdG8gY2hhbmdlIGJyZWFrcG9pbnQgdmFsdWVzXG4gKi9cbmNvbnN0IGJyZWFrcG9pbnRTaXplcyA9IHtcbiAgICBsYXJnZTogMTI2MSxcbiAgICBtZWRpdW06IDgwMSxcbiAgICBzbWFsbDogNTUxLFxufTtcblxuLyoqXG4gKiBDcmVhdGUgTWVkaWFRdWVyeUxpc3QgdXNpbmcgYnJlYWtwb2ludCBuYW1lXG4gKiBAcGFyYW0ge3N0cmluZ30gYnJlYWtwb2ludE5hbWVcbiAqIEByZXR1cm4ge01lZGlhUXVlcnlMaXN0fG51bGx9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lZGlhUXVlcnlMaXN0RmFjdG9yeShicmVha3BvaW50TmFtZSkge1xuICAgIGlmICghYnJlYWtwb2ludE5hbWUgfHwgIXdpbmRvdy5tYXRjaE1lZGlhKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBicmVha3BvaW50U2l6ZXNbYnJlYWtwb2ludE5hbWVdO1xuICAgIGNvbnN0IG1lZGlhUXVlcnkgPSBgKG1pbi13aWR0aDogJHticmVha3BvaW50fXB4KWA7XG4gICAgY29uc3QgbWVkaWFRdWVyeUxpc3QgPSB3aW5kb3cubWF0Y2hNZWRpYShtZWRpYVF1ZXJ5KTtcblxuICAgIHJldHVybiBtZWRpYVF1ZXJ5TGlzdDtcbn1cbiIsImltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuY29uc3QgdXJsVXRpbHMgPSB7XG4gICAgZ2V0VXJsOiAoKSA9PiBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9JHt3aW5kb3cubG9jYXRpb24uc2VhcmNofWAsXG5cbiAgICBnb1RvVXJsOiAodXJsKSA9PiB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVybCk7XG4gICAgICAgICQod2luZG93KS50cmlnZ2VyKCdzdGF0ZWNoYW5nZScpO1xuICAgIH0sXG5cbiAgICByZXBsYWNlUGFyYW1zOiAodXJsLCBwYXJhbXMpID0+IHtcbiAgICAgICAgY29uc3QgcGFyc2VkID0gVXJsLnBhcnNlKHVybCwgdHJ1ZSk7XG4gICAgICAgIGxldCBwYXJhbTtcblxuICAgICAgICAvLyBMZXQgdGhlIGZvcm1hdHRlciB1c2UgdGhlIHF1ZXJ5IG9iamVjdCB0byBidWlsZCB0aGUgbmV3IHVybFxuICAgICAgICBwYXJzZWQuc2VhcmNoID0gbnVsbDtcblxuICAgICAgICBmb3IgKHBhcmFtIGluIHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucXVlcnlbcGFyYW1dID0gcGFyYW1zW3BhcmFtXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIGJ1aWxkUXVlcnlTdHJpbmc6IChxdWVyeURhdGEpID0+IHtcbiAgICAgICAgbGV0IG91dCA9ICcnO1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBmb3IgKGtleSBpbiBxdWVyeURhdGEpIHtcbiAgICAgICAgICAgIGlmIChxdWVyeURhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5RGF0YVtrZXldKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmR4O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAobmR4IGluIHF1ZXJ5RGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocXVlcnlEYXRhW2tleV0uaGFzT3duUHJvcGVydHkobmR4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldW25keF19YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG91dCArPSBgJiR7a2V5fT0ke3F1ZXJ5RGF0YVtrZXldfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG91dC5zdWJzdHJpbmcoMSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==