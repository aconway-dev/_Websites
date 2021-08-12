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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0YWxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tZWRpYS1xdWVyeS1saXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXJsLXV0aWxzLmpzIl0sIm5hbWVzIjpbIkNhdGFsb2dQYWdlIiwib25Tb3J0QnlTdWJtaXQiLCJldmVudCIsInVybCIsIlVybCIsInBhcnNlIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicXVlcnlQYXJhbXMiLCIkIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiUExVR0lOX0tFWSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwib3BlbiIsImNsb3NlIiwidG9nZ2xlIiwiY2xpY2siLCJDb2xsYXBzaWJsZVN0YXRlIiwiY2xvc2VkIiwicHJlcGVuZEhhc2giLCJpZCIsImluZGV4T2YiLCJvcHRpb25zRnJvbURhdGEiLCIkZWxlbWVudCIsImRpc2FibGVkQnJlYWtwb2ludCIsImRhdGEiLCJkaXNhYmxlZFN0YXRlIiwiZW5hYmxlZFN0YXRlIiwib3BlbkNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlIiwiJHRvZ2dsZSIsIiR0YXJnZXQiLCJ0YXJnZXRJZCIsImF0dHIiLCJkaXNhYmxlZE1lZGlhUXVlcnlMaXN0IiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5IiwiZGlzYWJsZWQiLCJtYXRjaGVzIiwib25DbGlja2VkIiwiYmluZCIsIm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoIiwiaXNDb2xsYXBzZWQiLCJpc09wZW4iLCJiaW5kRXZlbnRzIiwibm90aWZ5IiwiYWRkQ2xhc3MiLCJ0cmlnZ2VyIiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVCeVN0YXRlIiwic3RhdGUiLCJhcmdzIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJoYXNDb2xsYXBzaWJsZSIsImNvbGxhcHNpYmxlSW5zdGFuY2UiLCJjb250YWlucyIsImdldCIsIm9uIiwiYWRkTGlzdGVuZXIiLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsIm1lZGlhIiwiaGFzQ2xhc3MiLCJpcyIsIl9kaXNhYmxlZCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInNlbGVjdG9yIiwib3ZlcnJpZGVPcHRpb25zIiwiJGNvbGxhcHNpYmxlcyIsIiRjb250ZXh0IiwibWFwIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRDb2xsYXBzaWJsZSIsIm9wdGlvbnMiLCJjb2xsYXBzaWJsZSIsInRvQXJyYXkiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwibW9kYWxPcGVuIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJuYXZMaXN0IiwiY29sbGFwc2VGYWNldEl0ZW1zIiwic2V0VGltZW91dCIsImNvbGxhcHNlQWxsRmFjZXRzIiwib25TdGF0ZUNoYW5nZSIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJTd2F0Y2hCdWlsZGVyIiwidXBkYXRlVmlldyIsInNob3ciLCJhcGkiLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiaGFzTW9yZVJlc3VsdHMiLCJ0b2dnbGVGYWNldEl0ZW1zIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsInVwZGF0ZUNvbnRlbnQiLCIkaXRlbXMiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsInRleHQiLCJleHBhbmRGYWNldCIsIiRhY2NvcmRpb25Ub2dnbGUiLCJjb2xsYXBzZUZhY2V0IiwiJGFjY29yZGlvblRvZ2dsZXMiLCJhY2NvcmRpb25Ub2dnbGUiLCJleHBhbmRBbGxGYWNldHMiLCJsZW5ndGgiLCJ2YWxpZGF0b3IiLCJub2QiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiVmFsaWRhdG9ycyIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInByaWNlUmFuZ2VWYWxpZGF0b3IiLCIkbmF2TGlzdHMiLCJzaG91bGRDb2xsYXBzZSIsInJlc3RvcmVDb2xsYXBzZWRGYWNldHMiLCJkb2N1bWVudCIsImhvb2tzIiwiYWNjb3JkaW9uIiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwiaXRlbSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImFjY29yZGlvbkhlYWRpbmciLCJwYXJlbnRFbGVtZW50IiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwidG9nZ2xlQ2xhc3MiLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImJyZWFrcG9pbnRTaXplcyIsImxhcmdlIiwibWVkaXVtIiwic21hbGwiLCJicmVha3BvaW50TmFtZSIsIm1hdGNoTWVkaWEiLCJicmVha3BvaW50IiwibWVkaWFRdWVyeSIsIm1lZGlhUXVlcnlMaXN0IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInRpdGxlIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwicXVlcnlEYXRhIiwib3V0IiwiQXJyYXkiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0lBRXFCQSxXOzs7Ozs7Ozs7U0FDakJDLGMsR0FBQSx3QkFBZUMsS0FBZixFQUFzQjtBQUNsQixRQUFNQyxHQUFHLEdBQUdDLDBDQUFHLENBQUNDLEtBQUosQ0FBVUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUExQixFQUFnQyxJQUFoQyxDQUFaO0FBQ0EsUUFBTUMsV0FBVyxHQUFHQyxDQUFDLENBQUNSLEtBQUssQ0FBQ1MsYUFBUCxDQUFELENBQXVCQyxTQUF2QixHQUFtQ0MsS0FBbkMsQ0FBeUMsR0FBekMsQ0FBcEI7QUFFQVYsT0FBRyxDQUFDVyxLQUFKLENBQVVMLFdBQVcsQ0FBQyxDQUFELENBQXJCLElBQTRCQSxXQUFXLENBQUMsQ0FB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SixDQUFjLENBQWQsQ0FBUDtBQUNIO0FBNUNZLENBQWpCO0FBK0Nldk0sdUVBQWYsRSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGFsb2dQYWdlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSBmcm9tICcuL21lZGlhLXF1ZXJ5LWxpc3QnO1xuXG5jb25zdCBQTFVHSU5fS0VZID0gJ2NvbGxhcHNpYmxlJztcblxuZXhwb3J0IGNvbnN0IENvbGxhcHNpYmxlRXZlbnRzID0ge1xuICAgIG9wZW46ICdvcGVuLmNvbGxhcHNpYmxlJyxcbiAgICBjbG9zZTogJ2Nsb3NlLmNvbGxhcHNpYmxlJyxcbiAgICB0b2dnbGU6ICd0b2dnbGUuY29sbGFwc2libGUnLFxuICAgIGNsaWNrOiAnY2xpY2suY29sbGFwc2libGUnLFxufTtcblxuY29uc3QgQ29sbGFwc2libGVTdGF0ZSA9IHtcbiAgICBjbG9zZWQ6ICdjbG9zZWQnLFxuICAgIG9wZW46ICdvcGVuJyxcbn07XG5cbmZ1bmN0aW9uIHByZXBlbmRIYXNoKGlkKSB7XG4gICAgaWYgKGlkICYmIGlkLmluZGV4T2YoJyMnKSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGAjJHtpZH1gO1xufVxuXG5mdW5jdGlvbiBvcHRpb25zRnJvbURhdGEoJGVsZW1lbnQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBkaXNhYmxlZEJyZWFrcG9pbnQ6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1EaXNhYmxlZEJyZWFrcG9pbnRgKSxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfURpc2FibGVkU3RhdGVgKSxcbiAgICAgICAgZW5hYmxlZFN0YXRlOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RW5hYmxlZFN0YXRlYCksXG4gICAgICAgIG9wZW5DbGFzc05hbWU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1PcGVuQ2xhc3NOYW1lYCksXG4gICAgfTtcbn1cblxuLyoqXG4gKiBDb2xsYXBzZS9FeHBhbmQgdG9nZ2xlXG4gKi9cbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtqUXVlcnl9ICR0b2dnbGUgLSBUcmlnZ2VyIGJ1dHRvblxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkdGFyZ2V0IC0gQ29udGVudCB0byBjb2xsYXBzZSAvIGV4cGFuZFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBDb25maWd1cmFibGUgb3B0aW9uc1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy4kY29udGV4dF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRCcmVha3BvaW50XVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5kaXNhYmxlZFN0YXRlXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5lbmFibGVkU3RhdGVdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm9wZW5DbGFzc05hbWVdXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIDxidXR0b24gaWQ9XCIjbW9yZVwiPkNvbGxhcHNlPC9idXR0b24+XG4gICAgICogPGRpdiBpZD1cImNvbnRlbnRcIj4uLi48L2Rpdj5cbiAgICAgKlxuICAgICAqIG5ldyBDb2xsYXBzaWJsZSgkKCcjbW9yZScpLCAkKCcjY29udGVudCcpKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcigkdG9nZ2xlLCAkdGFyZ2V0LCB7XG4gICAgICAgIGRpc2FibGVkQnJlYWtwb2ludCxcbiAgICAgICAgZGlzYWJsZWRTdGF0ZSxcbiAgICAgICAgZW5hYmxlZFN0YXRlLFxuICAgICAgICBvcGVuQ2xhc3NOYW1lID0gJ2lzLW9wZW4nLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiR0b2dnbGUgPSAkdG9nZ2xlO1xuICAgICAgICB0aGlzLiR0YXJnZXQgPSAkdGFyZ2V0O1xuICAgICAgICB0aGlzLnRhcmdldElkID0gJHRhcmdldC5hdHRyKCdpZCcpO1xuICAgICAgICB0aGlzLm9wZW5DbGFzc05hbWUgPSBvcGVuQ2xhc3NOYW1lO1xuICAgICAgICB0aGlzLmRpc2FibGVkU3RhdGUgPSBkaXNhYmxlZFN0YXRlO1xuICAgICAgICB0aGlzLmVuYWJsZWRTdGF0ZSA9IGVuYWJsZWRTdGF0ZTtcblxuICAgICAgICBpZiAoZGlzYWJsZWRCcmVha3BvaW50KSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QgPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoZGlzYWJsZWRCcmVha3BvaW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QubWF0Y2hlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF1dG8tYmluZFxuICAgICAgICB0aGlzLm9uQ2xpY2tlZCA9IHRoaXMub25DbGlja2VkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2ggPSB0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8gQXNzaWduIERPTSBhdHRyaWJ1dGVzXG4gICAgICAgIHRoaXMuJHRhcmdldC5hdHRyKCdhcmlhLWhpZGRlbicsIHRoaXMuaXNDb2xsYXBzZWQpO1xuICAgICAgICB0aGlzLiR0b2dnbGVcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgJHRhcmdldC5hdHRyKCdpZCcpKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0aGlzLmlzT3Blbik7XG5cbiAgICAgICAgLy8gTGlzdGVuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldCBpc0NvbGxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLiR0YXJnZXQuaGFzQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKSB8fCB0aGlzLiR0YXJnZXQuaXMoJzpoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBnZXQgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ5U3RhdGUodGhpcy5kaXNhYmxlZFN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnlTdGF0ZSh0aGlzLmVuYWJsZWRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBvcGVuKHsgbm90aWZ5ID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlXG4gICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMub3BlbiwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKHsgbm90aWZ5ID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xvc2UsIFt0aGlzXSk7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy50b2dnbGUsIFt0aGlzXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUJ5U3RhdGUoc3RhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIENvbGxhcHNpYmxlU3RhdGUub3BlbjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4uYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgY2FzZSBDb2xsYXBzaWJsZVN0YXRlLmNsb3NlZDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ29sbGFwc2libGUoY29sbGFwc2libGVJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gJC5jb250YWlucyh0aGlzLiR0YXJnZXQuZ2V0KDApLCBjb2xsYXBzaWJsZUluc3RhbmNlLiR0YXJnZXQuZ2V0KDApKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR0b2dnbGUub24oQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR0b2dnbGUub2ZmKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrLCB0aGlzLm9uQ2xpY2tlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCAmJiB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tlZChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKG1lZGlhKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBtZWRpYS5tYXRjaGVzO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGNvbnN0cnVjdGluZyBDb2xsYXBzaWJsZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuJGNvbnRleHRdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRCcmVha3BvaW50XVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZW5hYmxlZFN0YXRlXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm9wZW5DbGFzc05hbWVdXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgQ29sbGFwc2libGUgaW5zdGFuY2VzXG4gKlxuICogQGV4YW1wbGVcbiAqIDxhIGhyZWY9XCIjY29udGVudFwiIGRhdGEtY29sbGFwc2libGU+Q29sbGFwc2U8L2E+XG4gKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICpcbiAqIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xsYXBzaWJsZUZhY3Rvcnkoc2VsZWN0b3IgPSBgW2RhdGEtJHtQTFVHSU5fS0VZfV1gLCBvdmVycmlkZU9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRjb2xsYXBzaWJsZXMgPSAkKHNlbGVjdG9yLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpO1xuXG4gICAgcmV0dXJuICRjb2xsYXBzaWJsZXMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBgJHtQTFVHSU5fS0VZfUluc3RhbmNlYDtcbiAgICAgICAgY29uc3QgY2FjaGVkQ29sbGFwc2libGUgPSAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRDb2xsYXBzaWJsZSBpbnN0YW5jZW9mIENvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ29sbGFwc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHByZXBlbmRIYXNoKCR0b2dnbGUuZGF0YShQTFVHSU5fS0VZKSB8fFxuICAgICAgICAgICAgJHRvZ2dsZS5kYXRhKGAke1BMVUdJTl9LRVl9VGFyZ2V0YCkgfHxcbiAgICAgICAgICAgICR0b2dnbGUuYXR0cignaHJlZicpKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IF8uZXh0ZW5kKG9wdGlvbnNGcm9tRGF0YSgkdG9nZ2xlKSwgb3ZlcnJpZGVPcHRpb25zKTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSBuZXcgQ29sbGFwc2libGUoJHRvZ2dsZSwgJCh0YXJnZXRJZCwgb3ZlcnJpZGVPcHRpb25zLiRjb250ZXh0KSwgb3B0aW9ucyk7XG5cbiAgICAgICAgJHRvZ2dsZS5kYXRhKGluc3RhbmNlS2V5LCBjb2xsYXBzaWJsZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxhcHNpYmxlO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cbiIsImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tIFwiQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHNcIjtcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVcmwgZnJvbSBcInVybFwiO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gXCIuL3VybC11dGlsc1wiO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tIFwiLi4vZ2xvYmFsL21vZGFsXCI7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gXCIuL2NvbGxhcHNpYmxlXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSBcIi4vZm9ybS11dGlsc1wiO1xuaW1wb3J0IG5vZCBmcm9tIFwiLi9ub2RcIjtcbmltcG9ydCBTd2F0Y2hCdWlsZGVyIGZyb20gXCIuLi9wcm9kdWN0L3N3YXRjaC1idWlsZGVyXCI7XG5cbi8qKlxuICogRmFjZXRlZCBzZWFyY2ggdmlldyBjb21wb25lbnRcbiAqL1xuY2xhc3MgRmFjZXRlZFNlYXJjaCB7XG5cdC8qKlxuXHQgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgYWZ0ZXIgZmV0Y2hpbmcgdGVtcGxhdGVzXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcblx0ICogQGV4YW1wbGVcblx0ICpcblx0ICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuXHQgKiAgICAgIHRlbXBsYXRlczoge1xuXHQgKiAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG5cdCAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuXHQgKiAgICAgfVxuXHQgKiB9O1xuXHQgKlxuXHQgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcblx0ICogICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuXHQgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXHQgKiB9O1xuXHQgKlxuXHQgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcblx0ICovXG5cdGNvbnN0cnVjdG9yKHJlcXVlc3RPcHRpb25zLCBjYWxsYmFjaywgb3B0aW9ucykge1xuXHRcdGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuXHRcdFx0YWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3I6XG5cdFx0XHRcdFwiI2ZhY2V0ZWRTZWFyY2ggLmFjY29yZGlvbi1uYXZpZ2F0aW9uLCAjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC10b2dnbGUsICNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24gLnRpdGxlXCIsXG5cdFx0XHRibG9ja2VyU2VsZWN0b3I6IFwiI2ZhY2V0ZWRTZWFyY2ggLmJsb2NrZXJcIixcblx0XHRcdGNsZWFyRmFjZXRTZWxlY3RvcjogXCIjZmFjZXRlZFNlYXJjaCAuZmFjZXRlZFNlYXJjaC1jbGVhckxpbmtcIixcblx0XHRcdGNvbXBvbmVudFNlbGVjdG9yOiBcIiNmYWNldGVkU2VhcmNoLW5hdkxpc3RcIixcblx0XHRcdGZhY2V0TmF2TGlzdFNlbGVjdG9yOiBcIiNmYWNldGVkU2VhcmNoIC5uYXZMaXN0XCIsXG5cdFx0XHRwcmljZVJhbmdlRXJyb3JTZWxlY3RvcjogXCIjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1pbmxpbmVNZXNzYWdlXCIsXG5cdFx0XHRwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogXCIjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldFwiLFxuXHRcdFx0cHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogXCIjZmFjZXQtcmFuZ2UtZm9ybVwiLFxuXHRcdFx0cHJpY2VSYW5nZU1heFByaWNlU2VsZWN0b3I6IFwiI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXVwiLFxuXHRcdFx0cHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6IFwiI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXVwiLFxuXHRcdFx0c2hvd01vcmVUb2dnbGVTZWxlY3Rvcjpcblx0XHRcdFx0XCIjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmtcIixcblx0XHRcdGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogXCIjZmFjZXRlZFNlYXJjaC1maWx0ZXJJdGVtcyAuZm9ybS1pbnB1dFwiLFxuXHRcdFx0bW9kYWw6IG1vZGFsRmFjdG9yeShcIiNtb2RhbFwiKVswXSxcblx0XHRcdG1vZGFsT3BlbjogZmFsc2UsXG5cdFx0fTtcblxuXHRcdC8vIFByaXZhdGUgcHJvcGVydGllc1xuXHRcdHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0dGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblx0XHR0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuXHRcdHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xuXG5cdFx0Ly8gSW5pdCBjb2xsYXBzaWJsZXNcblx0XHRjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuXHRcdC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG5cdFx0dGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuXHRcdC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG5cdFx0JCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpLmVhY2goKGluZGV4LCBuYXZMaXN0KSA9PiB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkKG5hdkxpc3QpKTtcblx0XHR9KTtcblxuXHRcdC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuXHRcdC8vIE5PVEU6IE5lZWQgdG8gZXhlY3V0ZSBhZnRlciBDb2xsYXBzaWJsZSBnZXRzIGJvb3RzdHJhcHBlZFxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0aWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcyhcIjpoaWRkZW5cIikpIHtcblx0XHRcdFx0dGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gT2JzZXJ2ZSB1c2VyIGV2ZW50c1xuXHRcdHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25BY2NvcmRpb25Ub2dnbGUgPSB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uUmFuZ2VTdWJtaXQgPSB0aGlzLm9uUmFuZ2VTdWJtaXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5iaW5kRXZlbnRzKCk7XG5cdH1cblxuXHQvLyBQdWJsaWMgbWV0aG9kc1xuXHRyZWZyZXNoVmlldyhjb250ZW50KSB7XG5cdFx0aWYgKGNvbnRlbnQpIHtcblx0XHRcdHRoaXMuY2FsbGJhY2soY29udGVudCk7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCBjb2xsYXBzaWJsZXNcblx0XHRjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuXHRcdC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG5cdFx0dGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuXHRcdC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuXHRcdC8vdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCk7XG5cdFx0Ly90aGlzLmV4cGFuZEFsbEZhY2V0cygpO1xuXHRcdHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKTtcblxuXHRcdC8vIEJpbmQgZXZlbnRzXG5cdFx0dGhpcy5iaW5kRXZlbnRzKCk7XG5cdFx0U3dhdGNoQnVpbGRlcigpO1xuXHR9XG5cblx0dXBkYXRlVmlldygpIHtcblx0XHQkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuXHRcdGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG5cdFx0XHQkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuXHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcblx0XHRcdHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XG5cdFx0fSk7XG5cdH1cblxuXHRleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG5cdFx0Y29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKFwiaWRcIik7XG5cblx0XHQvLyBSZW1vdmVcblx0XHR0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cdH1cblxuXHRjb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcblx0XHRjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoXCJpZFwiKTtcblx0XHRjb25zdCBoYXNNb3JlUmVzdWx0cyA9ICRuYXZMaXN0LmRhdGEoXCJoYXNNb3JlUmVzdWx0c1wiKTtcblxuXHRcdGlmIChoYXNNb3JlUmVzdWx0cykge1xuXHRcdFx0dGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cdFx0fVxuXHR9XG5cblx0dG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuXHRcdGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cihcImlkXCIpO1xuXG5cdFx0Ly8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG5cdFx0aWYgKF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCkpIHtcblx0XHRcdHRoaXMuZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCk7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcblx0XHRjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoXCJmYWNldFwiKTtcblx0XHRjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG5cdFx0aWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcblx0XHRcdGFwaS5nZXRQYWdlKFxuXHRcdFx0XHRmYWNldFVybCxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuXHRcdFx0XHRcdHBhcmFtczoge1xuXHRcdFx0XHRcdFx0bGlzdF9hbGw6IGZhY2V0LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdChlcnIsIHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGVycik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5vcHRpb25zLm1vZGFsLm9wZW4oKTtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMubW9kYWxPcGVuID0gdHJ1ZTtcblx0XHRcdFx0XHR0aGlzLm9wdGlvbnMubW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZSk7XG5cdFx0XHRcdH1cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0ZmlsdGVyRmFjZXRJdGVtcyhldmVudCkge1xuXHRcdGNvbnN0ICRpdGVtcyA9ICQoXCIubmF2TGlzdC1pdGVtXCIpO1xuXHRcdGNvbnN0IHF1ZXJ5ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0JGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG5cdFx0XHRjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuXHRcdFx0XHQkKGVsZW1lbnQpLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdCQoZWxlbWVudCkuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuXHRcdGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKFwiY29sbGFwc2libGVJbnN0YW5jZVwiKTtcblxuXHRcdGNvbGxhcHNpYmxlICYmIGNvbGxhcHNpYmxlLm9wZW4oKTtcblx0fVxuXG5cdGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuXHRcdGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKFwiY29sbGFwc2libGVJbnN0YW5jZVwiKTtcblxuXHRcdGNvbGxhcHNpYmxlICYmIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG5cdH1cblxuXHRjb2xsYXBzZUFsbEZhY2V0cygpIHtcblx0XHRjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuXHRcdCRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcblx0XHRcdGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cblx0XHRcdHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcblx0XHR9KTtcblx0fVxuXG5cdGV4cGFuZEFsbEZhY2V0cygpIHtcblx0XHRjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuXHRcdCRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcblx0XHRcdGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cblx0XHRcdHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBQcml2YXRlIG1ldGhvZHNcblx0aW5pdFByaWNlVmFsaWRhdG9yKCkge1xuXHRcdGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcblx0XHRjb25zdCBzZWxlY3RvcnMgPSB7XG5cdFx0XHRlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXG5cdFx0XHRmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXG5cdFx0XHRmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxuXHRcdFx0bWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxuXHRcdFx0bWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxuXHRcdH07XG5cblx0XHRWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycyk7XG5cblx0XHR0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG5cdH1cblxuXHRyZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcblx0XHRjb25zdCAkbmF2TGlzdHMgPSAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3Rvcik7XG5cblx0XHQvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuXHRcdCRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuXHRcdFx0Y29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuXHRcdFx0Y29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKFwiaWRcIik7XG5cdFx0XHRjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG5cblx0XHRcdGlmIChzaG91bGRDb2xsYXBzZSkge1xuXHRcdFx0XHR0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpIHtcblx0XHRjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuXHRcdCRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcblx0XHRcdGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cdFx0XHRjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YShcImNvbGxhcHNpYmxlSW5zdGFuY2VcIik7XG5cdFx0XHRjb25zdCBpZCA9IGNvbGxhcHNpYmxlLnRhcmdldElkO1xuXHRcdFx0Y29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBpZCk7XG5cblx0XHRcdGlmIChzaG91bGRDb2xsYXBzZSkge1xuXHRcdFx0XHR0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0YmluZEV2ZW50cygpIHtcblx0XHQvLyBDbGVhbi11cFxuXHRcdHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cblx0XHQvLyBET00gZXZlbnRzXG5cdFx0JCh3aW5kb3cpLm9uKFwic3RhdGVjaGFuZ2VcIiwgdGhpcy5vblN0YXRlQ2hhbmdlKTtcblx0XHQkKGRvY3VtZW50KS5vbihcblx0XHRcdFwiY2xpY2tcIixcblx0XHRcdHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLFxuXHRcdFx0dGhpcy5vblRvZ2dsZUNsaWNrXG5cdFx0KTtcblx0XHQkKGRvY3VtZW50KS5vbihcblx0XHRcdFwidG9nZ2xlLmNvbGxhcHNpYmxlXCIsXG5cdFx0XHR0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IsXG5cdFx0XHR0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlXG5cdFx0KTtcblx0XHQkKGRvY3VtZW50KS5vbihcblx0XHRcdFwia2V5dXBcIixcblx0XHRcdHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsXG5cdFx0XHR0aGlzLmZpbHRlckZhY2V0SXRlbXNcblx0XHQpO1xuXHRcdCQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oXCJjbGlja1wiLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cblx0XHQvLyBIb29rc1xuXHRcdGhvb2tzLm9uKFwiZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkXCIsIHRoaXMub25GYWNldENsaWNrKTtcblx0XHRob29rcy5vbihcImZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkXCIsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG5cdFx0aG9va3Mub24oXCJzb3J0Qnktc3VibWl0dGVkXCIsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuXG5cdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRjb25zdCBhY2NvcmRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvblwiKTtcblx0XHRcdGNvbnNvbGUubG9nKGFjY29yZGlvbi5sZW5ndGgpO1xuXHRcdFx0XG5cdFx0XHRhY2NvcmRpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHRpZiAoIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSAge1xuXHRcdFx0XHRcdGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRcdFx0XHRpdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0XG5cbiAgICAgICAgICAgIGNvbnN0IGFjY29yZGlvbkhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmFjY29yZGlvbiA+IC50aXRsZVwiKTtcbiAgICAgICAgICAgIGFjY29yZGlvbkhlYWRpbmcuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdFx0XHQkKGl0ZW0pLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0aXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuXHRcdFx0XHRcdFx0PyBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuXHRcdFx0XHRcdFx0OiBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHRcdFx0fSk7XG4gICAgICAgICAgICB9KVxuXHRcdH0sIDApO1xuXHR9XG5cblx0dW5iaW5kRXZlbnRzKCkge1xuXHRcdC8vIERPTSBldmVudHNcblx0XHQkKHdpbmRvdykub2ZmKFwic3RhdGVjaGFuZ2VcIiwgdGhpcy5vblN0YXRlQ2hhbmdlKTtcblx0XHQkKGRvY3VtZW50KS5vZmYoXG5cdFx0XHRcImNsaWNrXCIsXG5cdFx0XHR0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3Rvcixcblx0XHRcdHRoaXMub25Ub2dnbGVDbGlja1xuXHRcdCk7XG5cdFx0JChkb2N1bWVudCkub2ZmKFxuXHRcdFx0XCJ0b2dnbGUuY29sbGFwc2libGVcIixcblx0XHRcdHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcixcblx0XHRcdHRoaXMub25BY2NvcmRpb25Ub2dnbGVcblx0XHQpO1xuXHRcdCQoZG9jdW1lbnQpLm9mZihcblx0XHRcdFwia2V5dXBcIixcblx0XHRcdHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsXG5cdFx0XHR0aGlzLmZpbHRlckZhY2V0SXRlbXNcblx0XHQpO1xuXHRcdCQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKFwiY2xpY2tcIiwgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG5cdFx0Ly8gSG9va3Ncblx0XHRob29rcy5vZmYoXCJmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWRcIiwgdGhpcy5vbkZhY2V0Q2xpY2spO1xuXHRcdGhvb2tzLm9mZihcImZhY2V0ZWRTZWFyY2gtcmFuZ2Utc3VibWl0dGVkXCIsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG5cdFx0aG9va3Mub2ZmKFwic29ydEJ5LXN1Ym1pdHRlZFwiLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcblx0fVxuXG5cdG9uQ2xlYXJGYWNldChldmVudCkge1xuXHRcdGNvbnN0ICRsaW5rID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRjb25zdCB1cmwgPSAkbGluay5hdHRyKFwiaHJlZlwiKTtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHQvLyBVcGRhdGUgVVJMXG5cdFx0dXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuXHR9XG5cblx0b25Ub2dnbGVDbGljayhldmVudCkge1xuXHRcdGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXHRcdGNvbnN0ICRuYXZMaXN0ID0gJCgkdG9nZ2xlLmF0dHIoXCJocmVmXCIpKTtcblxuXHRcdC8vIFByZXZlbnQgZGVmYXVsdFxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHQvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuXHRcdHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cdH1cblxuXHRvbkZhY2V0Q2xpY2soZXZlbnQpIHtcblx0XHRjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cdFx0Y29uc3QgdXJsID0gJGxpbmsuYXR0cihcImhyZWZcIik7XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0JGxpbmsudG9nZ2xlQ2xhc3MoXCJpcy1zZWxlY3RlZFwiKTtcblxuXHRcdC8vIFVwZGF0ZSBVUkxcblx0XHR1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cblx0XHRpZiAodGhpcy5vcHRpb25zLm1vZGFsT3Blbikge1xuXHRcdFx0dGhpcy5vcHRpb25zLm1vZGFsLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25Tb3J0QnlTdWJtaXQoZXZlbnQpIHtcblx0XHRjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuXHRcdGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdChcIj1cIik7XG5cblx0XHR1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG5cdFx0ZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHVybFV0aWxzLmdvVG9VcmwoXG5cdFx0XHRVcmwuZm9ybWF0KHtcblx0XHRcdFx0cGF0aG5hbWU6IHVybC5wYXRobmFtZSxcblx0XHRcdFx0c2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSksXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRvblJhbmdlU3VibWl0KGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdGlmICghdGhpcy5wcmljZVJhbmdlVmFsaWRhdG9yLmFyZUFsbChub2QuY29uc3RhbnRzLlZBTElEKSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG5cdFx0bGV0IHF1ZXJ5UGFyYW1zID0gZGVjb2RlVVJJKCQoZXZlbnQuY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkpLnNwbGl0KFxuXHRcdFx0XCImXCJcblx0XHQpO1xuXHRcdHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMucGFyc2VRdWVyeVBhcmFtcyhxdWVyeVBhcmFtcyk7XG5cblx0XHRmb3IgKGNvbnN0IGtleSBpbiBxdWVyeVBhcmFtcykge1xuXHRcdFx0aWYgKHF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcblx0XHRcdFx0dXJsLnF1ZXJ5W2tleV0gPSBxdWVyeVBhcmFtc1trZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHVybFV0aWxzLmdvVG9VcmwoXG5cdFx0XHRVcmwuZm9ybWF0KHtcblx0XHRcdFx0cGF0aG5hbWU6IHVybC5wYXRobmFtZSxcblx0XHRcdFx0c2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSksXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH1cblxuXHRvblN0YXRlQ2hhbmdlKCkge1xuXHRcdHRoaXMudXBkYXRlVmlldygpO1xuXHR9XG5cblx0b25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcblx0XHRjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YShcImNvbGxhcHNpYmxlSW5zdGFuY2VcIik7XG5cdFx0Y29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuXHRcdGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuXHRcdFx0dGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLnVuaW9uKHRoaXMuY29sbGFwc2VkRmFjZXRzLCBbaWRdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsIi8qXG4gKiBSZW1lbWJlciB0byB1cGRhdGUgL2Fzc2V0cy9zY3NzL3NldHRpbmdzL2dsb2JhbC9zY3JlZW5zaXplcy9zY3JlZW5zaXplcy5zY3NzXG4gKiBpZiB5b3UgZGVjaWRlIHRvIGNoYW5nZSBicmVha3BvaW50IHZhbHVlc1xuICovXG5jb25zdCBicmVha3BvaW50U2l6ZXMgPSB7XG4gICAgbGFyZ2U6IDEyNjEsXG4gICAgbWVkaXVtOiA4MDEsXG4gICAgc21hbGw6IDU1MSxcbn07XG5cbi8qKlxuICogQ3JlYXRlIE1lZGlhUXVlcnlMaXN0IHVzaW5nIGJyZWFrcG9pbnQgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGJyZWFrcG9pbnROYW1lXG4gKiBAcmV0dXJuIHtNZWRpYVF1ZXJ5TGlzdHxudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoYnJlYWtwb2ludE5hbWUpIHtcbiAgICBpZiAoIWJyZWFrcG9pbnROYW1lIHx8ICF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBicmVha3BvaW50ID0gYnJlYWtwb2ludFNpemVzW2JyZWFrcG9pbnROYW1lXTtcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludH1weClgO1xuICAgIGNvbnN0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG5cbiAgICByZXR1cm4gbWVkaWFRdWVyeUxpc3Q7XG59XG4iLCJpbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmNvbnN0IHVybFV0aWxzID0ge1xuICAgIGdldFVybDogKCkgPT4gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH1gLFxuXG4gICAgZ29Ub1VybDogKHVybCkgPT4ge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9LFxuXG4gICAgcmVwbGFjZVBhcmFtczogKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBsZXQgcGFyYW07XG5cbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xuICAgIH0sXG5cbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGxldCBvdXQgPSAnJztcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gcXVlcnlEYXRhKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeURhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5keDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKG5keCBpbiBxdWVyeURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YVtrZXldLmhhc093blByb3BlcnR5KG5keCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XVtuZHhdfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQuc3Vic3RyaW5nKDEpO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1cmxVdGlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=