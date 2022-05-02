(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");









var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */

function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName; // Input can be text/checkbox/radio etc...

  if (tagName === 'input') {
    var inputType = $input.prop('type');

    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  } // Apply class modifier


  return $formField.addClass(className).addClass(specificClassName);
}
/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */


function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }

  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', ')); // Obtain options

  var _options = options,
      _options$formFieldCla = _options.formFieldClass,
      formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla; // Classify each input in a form

  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}
/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */

function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);

  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }

  return '';
}
/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */


function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_8__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },

  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength; // If optional and nothing entered, it is valid

        if (isOptional && val.length === 0) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;

        if (isOptional) {
          return cb(true);
        }

        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },

  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
        fieldsetSelector = selectors.fieldsetSelector,
        formSelector = selectors.formSelector,
        maxPriceSelector = selectors.maxPriceSelector,
        minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class

    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },

  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },

  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_7__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },

  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },

  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/common/nod-functions/min-max-validate.js":
/*!******************************************************************!*\
  !*** ./assets/js/theme/common/nod-functions/min-max-validate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);


function minMaxValidate(minInputSelector, maxInputSelector) {
  function validate(cb) {
    var minValue = parseFloat($(minInputSelector).val());
    var maxValue = parseFloat($(maxInputSelector).val());

    if (maxValue > minValue || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(maxValue) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(minValue)) {
      return cb(true);
    }

    return cb(false);
  }

  return validate;
}

/* harmony default export */ __webpack_exports__["default"] = (minMaxValidate);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/nod.js":
/*!***************************************!*\
  !*** ./assets/js/theme/common/nod.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nod-validate */ "./node_modules/nod-validate/nod.js");
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nod_validate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nod-functions/min-max-validate */ "./assets/js/theme/common/nod-functions/min-max-validate.js");

 // Hook our SCSS framework form field status classes into the nod validation system before use

nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.errorClass = 'form-field--error';
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.successClass = 'form-field--success';
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.errorMessageClass = 'form-inlineMessage'; // Register validate functions

nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.checkFunctions['min-max'] = _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./assets/js/theme/global/foundation.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/foundation.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.tab */ "./node_modules/foundation-sites/js/foundation/foundation.tab.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_tab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _reveal_close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reveal-close */ "./assets/js/theme/global/reveal-close.js");






/* harmony default export */ __webpack_exports__["default"] = (function ($element) {
  $element.foundation({
    dropdown: {
      // specify the class used for active dropdowns
      active_class: 'is-open'
    },
    reveal: {
      bg_class: 'modal-background',
      dismiss_modal_class: 'modal-close',
      close_on_background_click: true
    },
    tab: {
      active_class: 'is-active'
    }
  });
  Object(_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('[data-reveal]', {
    $context: $element
  });
  Object(_reveal_close__WEBPACK_IMPORTED_MODULE_5__["default"])('[data-reveal-close]', {
    $context: $element
  });
});

/***/ }),

/***/ "./assets/js/theme/global/modal.js":
/*!*****************************************!*\
  !*** ./assets/js/theme/global/modal.js ***!
  \*****************************************/
/*! exports provided: ModalEvents, Modal, default, defaultModal, alertModal, showAlertModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalEvents", function() { return ModalEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modalFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultModal", function() { return defaultModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertModal", function() { return alertModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlertModal", function() { return showAlertModal; });
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ "./assets/js/theme/global/foundation.js");


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }


var bodyActiveClass = 'has-activeModal';
var loadingOverlayClass = 'loadingOverlay';
var modalBodyClass = 'modal-body';
var modalContentClass = 'modal-content';
var SizeClasses = {
  small: 'modal--small',
  large: 'modal--large',
  normal: ''
};
var ModalEvents = {
  close: 'close.fndtn.reveal',
  closed: 'closed.fndtn.reveal',
  open: 'open.fndtn.reveal',
  opened: 'opened.fndtn.reveal'
};

function getSizeFromModal($modal) {
  if ($modal.hasClass(SizeClasses.small)) {
    return 'small';
  }

  if ($modal.hasClass(SizeClasses.large)) {
    return 'large';
  }

  return 'normal';
}

function getViewportHeight(multipler) {
  if (multipler === void 0) {
    multipler = 1;
  }

  var viewportHeight = $(window).height();
  return viewportHeight * multipler;
}

function wrapModalBody(content) {
  var $modalBody = $('<div>');
  $modalBody.addClass(modalBodyClass).html(content);
  return $modalBody;
}

function restrainContentHeight($content) {
  var $body = $("." + modalBodyClass, $content);
  var bodyHeight = $body.outerHeight();
  var contentHeight = $content.outerHeight();
  var viewportHeight = getViewportHeight(0.9);
  var maxHeight = viewportHeight - (contentHeight - bodyHeight);
  $body.css('max-height', maxHeight);
}

function createModalContent($modal) {
  var $content = $("." + modalContentClass, $modal);

  if ($content.length === 0) {
    var existingContent = $modal.children();
    $content = $('<div>').addClass(modalContentClass).append(existingContent).appendTo($modal);
  }

  return $content;
}

function createLoadingOverlay($modal) {
  var $loadingOverlay = $("." + loadingOverlayClass, $modal);

  if ($loadingOverlay.length === 0) {
    $loadingOverlay = $('<div>').addClass(loadingOverlayClass).appendTo($modal);
  }

  return $loadingOverlay;
}
/**
 * Require foundation.reveal
 * Decorate foundation.reveal with additional methods
 * @param {jQuery} $modal
 * @param {Object} [options]
 * @param {string} [options.size]
 */


var Modal = /*#__PURE__*/function () {
  function Modal($modal, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$size = _ref.size,
        size = _ref$size === void 0 ? null : _ref$size;

    this.$modal = $modal;
    this.$content = createModalContent(this.$modal);
    this.$overlay = createLoadingOverlay(this.$modal);
    this.defaultSize = size || getSizeFromModal($modal);
    this.size = this.defaultSize;
    this.pending = false;
    this.onModalOpen = this.onModalOpen.bind(this);
    this.onModalOpened = this.onModalOpened.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.onModalClosed = this.onModalClosed.bind(this);
    this.bindEvents();
    /* STRF-2471 - Multiple Wish Lists - prevents double-firing
     * of foundation.dropdown click.fndtn.dropdown event */

    this.$modal.on('click', '.dropdown-menu-button', function (e) {
      e.stopPropagation();
    });
  }

  var _proto = Modal.prototype;

  _proto.bindEvents = function bindEvents() {
    this.$modal.on(ModalEvents.close, this.onModalClose);
    this.$modal.on(ModalEvents.closed, this.onModalClosed);
    this.$modal.on(ModalEvents.open, this.onModalOpen);
    this.$modal.on(ModalEvents.opened, this.onModalOpened);
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$modal.off(ModalEvents.close, this.onModalClose);
    this.$modal.off(ModalEvents.closed, this.onModalClosed);
    this.$modal.off(ModalEvents.open, this.onModalOpen);
    this.$modal.off(ModalEvents.opened, this.onModalOpened);
  };

  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
        size = _ref2.size,
        _ref2$pending = _ref2.pending,
        pending = _ref2$pending === void 0 ? true : _ref2$pending,
        _ref2$clearContent = _ref2.clearContent,
        clearContent = _ref2$clearContent === void 0 ? true : _ref2$clearContent;

    this.pending = pending;

    if (size) {
      this.size = size;
    }

    if (clearContent) {
      this.clearContent();
    }

    this.$modal.foundation('reveal', 'open');
  };

  _proto.close = function close() {
    this.$modal.foundation('reveal', 'close');
  };

  _proto.updateContent = function updateContent(content, _temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
        _ref3$wrap = _ref3.wrap,
        wrap = _ref3$wrap === void 0 ? false : _ref3$wrap;

    var $content = $(content);

    if (wrap) {
      $content = wrapModalBody(content);
    }

    this.pending = false;
    this.$content.html($content);
    restrainContentHeight(this.$content);
    Object(_foundation__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$content);
  };

  _proto.clearContent = function clearContent() {
    this.$content.html('');
  };

  _proto.onModalClose = function onModalClose() {
    $('body').removeClass(bodyActiveClass);
  };

  _proto.onModalClosed = function onModalClosed() {
    this.size = this.defaultSize;
  };

  _proto.onModalOpen = function onModalOpen() {
    $('body').addClass(bodyActiveClass);
  };

  _proto.onModalOpened = function onModalOpened() {
    restrainContentHeight(this.$content);
  };

  _createClass(Modal, [{
    key: "pending",
    get: function get() {
      return this._pending;
    },
    set: function set(pending) {
      this._pending = pending;

      if (pending) {
        this.$overlay.show();
      } else {
        this.$overlay.hide();
      }
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(size) {
      this._size = size;
      this.$modal.removeClass(SizeClasses.small).removeClass(SizeClasses.large).addClass(SizeClasses[size] || '');
    }
  }]);

  return Modal;
}();
/**
 * Return an array of modals
 * @param {string} selector
 * @param {Object} [options]
 * @param {string} [options.size]
 * @returns {array}
 */

function modalFactory(selector, options) {
  if (selector === void 0) {
    selector = '[data-reveal]';
  }

  if (options === void 0) {
    options = {};
  }

  var $modals = $(selector, options.$context);
  return $modals.map(function (index, element) {
    var $modal = $(element);
    var instanceKey = 'modalInstance';
    var cachedModal = $modal.data(instanceKey);

    if (cachedModal instanceof Modal) {
      return cachedModal;
    }

    var modal = new Modal($modal, options);
    $modal.data(instanceKey, modal);
    return modal;
  }).toArray();
}
/*
 * Return the default page modal
 */

function defaultModal() {
  return modalFactory('#modal')[0];
}
/*
 * Return the default alert modal
 */

function alertModal() {
  return modalFactory('#alert-modal')[0];
}
/*
 * Display the given message in the default alert modal
 */

function showAlertModal(message) {
  var modal = alertModal();
  modal.open();
  modal.updateContent("<span>" + message + "</span>");
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/global/reveal-close.js":
/*!************************************************!*\
  !*** ./assets/js/theme/global/reveal-close.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return revealCloseFactory; });
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var revealCloseAttr = 'revealClose';
var revealCloseSelector = "[data-" + revealCloseAttr + "]";
var revealSelector = '[data-reveal]';

var RevealClose = /*#__PURE__*/function () {
  function RevealClose($button) {
    this.$button = $button;
    this.modalId = $button.data(revealCloseAttr);
    this.onClick = this.onClick.bind(this);
    this.bindEvents();
  }

  var _proto = RevealClose.prototype;

  _proto.bindEvents = function bindEvents() {
    this.$button.on('click', this.onClick);
  };

  _proto.unbindEvents = function unbindEvents() {
    this.$button.off('click', this.onClick);
  };

  _proto.onClick = function onClick(event) {
    var modal = this.modal;

    if (modal) {
      event.preventDefault();
      modal.close();
    }
  };

  _createClass(RevealClose, [{
    key: "modal",
    get: function get() {
      var $modal;

      if (this.modalId) {
        $modal = $("#" + this.modalId);
      } else {
        $modal = this.$button.parents(revealSelector).eq(0);
      }

      return $modal.data('modalInstance');
    }
  }]);

  return RevealClose;
}();
/*
 * Extend foundation.reveal with the ability to close a modal by clicking on any of its child element
 * with data-reveal-close attribute.
 *
 * @example
 *
 * <div data-reveal id="helloModal">
 *   <button data-reveal-close>Continue</button>
 * </div>
 *
 * <div data-reveal id="helloModal"></div>
 * <button data-reveal-close="helloModal">Continue</button>
 */


function revealCloseFactory(selector, options) {
  if (selector === void 0) {
    selector = revealCloseSelector;
  }

  if (options === void 0) {
    options = {};
  }

  var $buttons = $(selector, options.$context);
  return $buttons.map(function (index, element) {
    var $button = $(element);
    var instanceKey = revealCloseAttr + "Instance";
    var cachedButton = $button.data(instanceKey);

    if (cachedButton instanceof RevealClose) {
      return cachedButton;
    }

    var button = new RevealClose($button);
    $button.data(instanceKey, button);
    return button;
  }).toArray();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9yZXZlYWwtY2xvc2UuanMiXSwibmFtZXMiOlsiaW5wdXRUYWdOYW1lcyIsImNsYXNzaWZ5SW5wdXQiLCJpbnB1dCIsImZvcm1GaWVsZENsYXNzIiwiJGlucHV0IiwiJCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsInRvTG93ZXJDYXNlIiwiY2xhc3NOYW1lIiwic3BlY2lmaWNDbGFzc05hbWUiLCJpbnB1dFR5cGUiLCJhZGRDbGFzcyIsImNsYXNzaWZ5Rm9ybSIsImZvcm1TZWxlY3RvciIsIm9wdGlvbnMiLCIkZm9ybSIsIiRpbnB1dHMiLCJmaW5kIiwiam9pbiIsImVhY2giLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJsZW5ndGgiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJmb3JtcyIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiaXNPcHRpb25hbCIsIiRwYXNzd29yZCIsInBhc3N3b3JkVmFsaWRhdGlvbnMiLCJSZWdFeHAiLCJhbHBoYSIsIm51bWVyaWMiLCJtaW5sZW5ndGgiLCJlcnJvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm5vZCIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJtaW5NYXhWYWxpZGF0ZSIsIm1pbklucHV0U2VsZWN0b3IiLCJtYXhJbnB1dFNlbGVjdG9yIiwibWluVmFsdWUiLCJwYXJzZUZsb2F0IiwibWF4VmFsdWUiLCJlcnJvckNsYXNzIiwiZXJyb3JNZXNzYWdlQ2xhc3MiLCJjaGVja0Z1bmN0aW9ucyIsIiRlbGVtZW50IiwiZm91bmRhdGlvbiIsImRyb3Bkb3duIiwiYWN0aXZlX2NsYXNzIiwicmV2ZWFsIiwiYmdfY2xhc3MiLCJkaXNtaXNzX21vZGFsX2NsYXNzIiwiY2xvc2Vfb25fYmFja2dyb3VuZF9jbGljayIsInRhYiIsIm1vZGFsRmFjdG9yeSIsIiRjb250ZXh0IiwicmV2ZWFsQ2xvc2VGYWN0b3J5IiwiYm9keUFjdGl2ZUNsYXNzIiwibG9hZGluZ092ZXJsYXlDbGFzcyIsIm1vZGFsQm9keUNsYXNzIiwibW9kYWxDb250ZW50Q2xhc3MiLCJTaXplQ2xhc3NlcyIsInNtYWxsIiwibGFyZ2UiLCJub3JtYWwiLCJNb2RhbEV2ZW50cyIsImNsb3NlIiwiY2xvc2VkIiwib3BlbiIsIm9wZW5lZCIsImdldFNpemVGcm9tTW9kYWwiLCIkbW9kYWwiLCJnZXRWaWV3cG9ydEhlaWdodCIsIm11bHRpcGxlciIsInZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaGVpZ2h0Iiwid3JhcE1vZGFsQm9keSIsImNvbnRlbnQiLCIkbW9kYWxCb2R5IiwiaHRtbCIsInJlc3RyYWluQ29udGVudEhlaWdodCIsIiRjb250ZW50IiwiJGJvZHkiLCJib2R5SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb250ZW50SGVpZ2h0IiwibWF4SGVpZ2h0IiwiY3NzIiwiY3JlYXRlTW9kYWxDb250ZW50IiwiZXhpc3RpbmdDb250ZW50IiwiY2hpbGRyZW4iLCJhcHBlbmQiLCJhcHBlbmRUbyIsImNyZWF0ZUxvYWRpbmdPdmVybGF5IiwiJGxvYWRpbmdPdmVybGF5IiwiTW9kYWwiLCJzaXplIiwiJG92ZXJsYXkiLCJkZWZhdWx0U2l6ZSIsInBlbmRpbmciLCJvbk1vZGFsT3BlbiIsImJpbmQiLCJvbk1vZGFsT3BlbmVkIiwib25Nb2RhbENsb3NlIiwib25Nb2RhbENsb3NlZCIsImJpbmRFdmVudHMiLCJvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJjbGVhckNvbnRlbnQiLCJ1cGRhdGVDb250ZW50Iiwid3JhcCIsIl9wZW5kaW5nIiwic2hvdyIsImhpZGUiLCJfc2l6ZSIsIiRtb2RhbHMiLCJtYXAiLCJpbmRleCIsImVsZW1lbnQiLCJpbnN0YW5jZUtleSIsImNhY2hlZE1vZGFsIiwibW9kYWwiLCJ0b0FycmF5IiwiZGVmYXVsdE1vZGFsIiwiYWxlcnRNb2RhbCIsInNob3dBbGVydE1vZGFsIiwibWVzc2FnZSIsInJldmVhbENsb3NlQXR0ciIsInJldmVhbENsb3NlU2VsZWN0b3IiLCJyZXZlYWxTZWxlY3RvciIsIlJldmVhbENsb3NlIiwiJGJ1dHRvbiIsIm1vZGFsSWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudHMiLCJlcSIsIiRidXR0b25zIiwiY2FjaGVkQnV0dG9uIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQixPQURrQixFQUVsQixRQUZrQixFQUdsQixVQUhrQixDQUF0QjtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsY0FBOUIsRUFBOEM7RUFDMUMsSUFBTUMsTUFBTSxHQUFHQyxDQUFDLENBQUNILEtBQUQsQ0FBaEI7RUFDQSxJQUFNSSxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csTUFBUCxPQUFrQkosY0FBbEIsQ0FBbkI7RUFDQSxJQUFNSyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLFNBQVosRUFBdUJDLFdBQXZCLEVBQWhCO0VBRUEsSUFBSUMsU0FBUyxHQUFNUixjQUFOLFVBQXlCSyxPQUF0QztFQUNBLElBQUlJLGlCQUFKLENBTjBDLENBUTFDOztFQUNBLElBQUlKLE9BQU8sS0FBSyxPQUFoQixFQUF5QjtJQUNyQixJQUFNSyxTQUFTLEdBQUdULE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLE1BQVosQ0FBbEI7O0lBRUEsSUFBSSx1REFBVyxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLFFBQXRCLENBQVgsRUFBNENJLFNBQTVDLENBQUosRUFBNEQ7TUFDeEQ7TUFDQUYsU0FBUyxHQUFNUixjQUFOLFVBQXlCLHdEQUFZVSxTQUFaLENBQWxDO0lBQ0gsQ0FIRCxNQUdPO01BQ0g7TUFDQUQsaUJBQWlCLFFBQU1ELFNBQU4sR0FBa0IseURBQWFFLFNB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RCxFQUFXeEIsT0FBTyxDQUFDMEYsUUFBbkIsQ0FBbEI7RUFFQSxPQUFPdUYsUUFBUSxDQUFDdEIsR0FBVCxDQUFhLFVBQUNDLEtBQUQsRUFBUUMsT0FBUixFQUFvQjtJQUNwQyxJQUFNYSxPQUFPLEdBQUd0TCxDQUFDLENBQUN5SyxPQUFELENBQWpCO0lBQ0EsSUFBTUMsV0FBVyxHQUFNUSxlQUFOLGFBQWpCO0lBQ0EsSUFBTVksWUFBWSxHQUFHUixPQUFPLENBQUMvRyxJQUFSLENBQWFtRyxXQUFiLENBQXJCOztJQUVBLElBQUlvQixZQUFZLFlBQVlULFdBQTVCLEVBQXlDO01BQ3JDLE9BQU9TLFlBQVA7SUFDSDs7SUFFRCxJQUFNQyxNQUFNLEdBQUcsSUFBSVYsV0FBSixDQUFnQkMsT0FBaEIsQ0FBZjtJQUVBQSxPQUFPLENBQUMvRyxJQUFSLENBQWFtRyxXQUFiLEVBQTBCcUIsTUFBMUI7SUFFQSxPQUFPQSxNQUFQO0VBQ0gsQ0FkTSxFQWNKbEIsT0FkSSxFQUFQO0FBZUgsQyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZChwYXNzd29yZFZhbGlkYXRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZvcm1TZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxuICAgICAqL1xuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgY2xhc3NlcyBmcm9tIGRpcnR5IGZvcm0gaWYgcHJldmlvdXNseSBjaGVja2VkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgY2xlYW5VcFN0YXRlVmFsaWRhdGlvbjogKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kLmNsYXNzZXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcbiIsImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uIG1pbk1heFZhbGlkYXRlKG1pbklucHV0U2VsZWN0b3IsIG1heElucHV0U2VsZWN0b3IpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShjYikge1xuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IHBhcnNlRmxvYXQoJChtaW5JbnB1dFNlbGVjdG9yKS52YWwoKSk7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gcGFyc2VGbG9hdCgkKG1heElucHV0U2VsZWN0b3IpLnZhbCgpKTtcblxuICAgICAgICBpZiAobWF4VmFsdWUgPiBtaW5WYWx1ZSB8fCBfLmlzTmFOKG1heFZhbHVlKSB8fCBfLmlzTmFOKG1pblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNiKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbk1heFZhbGlkYXRlO1xuIiwiaW1wb3J0IG5vZCBmcm9tICdub2QtdmFsaWRhdGUnO1xuaW1wb3J0IG1pbk1heFZhbGlkYXRlIGZyb20gJy4vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlJztcblxuLy8gSG9vayBvdXIgU0NTUyBmcmFtZXdvcmsgZm9ybSBmaWVsZCBzdGF0dXMgY2xhc3NlcyBpbnRvIHRoZSBub2QgdmFsaWRhdGlvbiBzeXN0ZW0gYmVmb3JlIHVzZVxubm9kLmNsYXNzZXMuZXJyb3JDbGFzcyA9ICdmb3JtLWZpZWxkLS1lcnJvcic7XG5ub2QuY2xhc3Nlcy5zdWNjZXNzQ2xhc3MgPSAnZm9ybS1maWVsZC0tc3VjY2Vzcyc7XG5ub2QuY2xhc3Nlcy5lcnJvck1lc3NhZ2VDbGFzcyA9ICdmb3JtLWlubGluZU1lc3NhZ2UnO1xuXG4vLyBSZWdpc3RlciB2YWxpZGF0ZSBmdW5jdGlvbnNcbm5vZC5jaGVja0Z1bmN0aW9uc1snbWluLW1heCddID0gbWluTWF4VmFsaWRhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZDtcbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5kcm9wZG93bic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnJldmVhbCc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLnRhYic7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0IHJldmVhbENsb3NlRmFjdG9yeSBmcm9tICcuL3JldmVhbC1jbG9zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgkZWxlbWVudCkge1xuICAgICRlbGVtZW50LmZvdW5kYXRpb24oe1xuICAgICAgICBkcm9wZG93bjoge1xuICAgICAgICAgICAgLy8gc3BlY2lmeSB0aGUgY2xhc3MgdXNlZCBmb3IgYWN0aXZlIGRyb3Bkb3duc1xuICAgICAgICAgICAgYWN0aXZlX2NsYXNzOiAnaXMtb3BlbicsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmVhbDoge1xuICAgICAgICAgICAgYmdfY2xhc3M6ICdtb2RhbC1iYWNrZ3JvdW5kJyxcbiAgICAgICAgICAgIGRpc21pc3NfbW9kYWxfY2xhc3M6ICdtb2RhbC1jbG9zZScsXG4gICAgICAgICAgICBjbG9zZV9vbl9iYWNrZ3JvdW5kX2NsaWNrOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB0YWI6IHtcbiAgICAgICAgICAgIGFjdGl2ZV9jbGFzczogJ2lzLWFjdGl2ZScsXG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBtb2RhbEZhY3RvcnkoJ1tkYXRhLXJldmVhbF0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcbiAgICByZXZlYWxDbG9zZUZhY3RvcnkoJ1tkYXRhLXJldmVhbC1jbG9zZV0nLCB7ICRjb250ZXh0OiAkZWxlbWVudCB9KTtcbn1cbiIsImltcG9ydCBmb3VuZGF0aW9uIGZyb20gJy4vZm91bmRhdGlvbic7XG5cbmNvbnN0IGJvZHlBY3RpdmVDbGFzcyA9ICdoYXMtYWN0aXZlTW9kYWwnO1xuY29uc3QgbG9hZGluZ092ZXJsYXlDbGFzcyA9ICdsb2FkaW5nT3ZlcmxheSc7XG5jb25zdCBtb2RhbEJvZHlDbGFzcyA9ICdtb2RhbC1ib2R5JztcbmNvbnN0IG1vZGFsQ29udGVudENsYXNzID0gJ21vZGFsLWNvbnRlbnQnO1xuXG5jb25zdCBTaXplQ2xhc3NlcyA9IHtcbiAgICBzbWFsbDogJ21vZGFsLS1zbWFsbCcsXG4gICAgbGFyZ2U6ICdtb2RhbC0tbGFyZ2UnLFxuICAgIG5vcm1hbDogJycsXG59O1xuXG5leHBvcnQgY29uc3QgTW9kYWxFdmVudHMgPSB7XG4gICAgY2xvc2U6ICdjbG9zZS5mbmR0bi5yZXZlYWwnLFxuICAgIGNsb3NlZDogJ2Nsb3NlZC5mbmR0bi5yZXZlYWwnLFxuICAgIG9wZW46ICdvcGVuLmZuZHRuLnJldmVhbCcsXG4gICAgb3BlbmVkOiAnb3BlbmVkLmZuZHRuLnJldmVhbCcsXG59O1xuXG5mdW5jdGlvbiBnZXRTaXplRnJvbU1vZGFsKCRtb2RhbCkge1xuICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoU2l6ZUNsYXNzZXMuc21hbGwpKSB7XG4gICAgICAgIHJldHVybiAnc21hbGwnO1xuICAgIH1cblxuICAgIGlmICgkbW9kYWwuaGFzQ2xhc3MoU2l6ZUNsYXNzZXMubGFyZ2UpKSB7XG4gICAgICAgIHJldHVybiAnbGFyZ2UnO1xuICAgIH1cblxuICAgIHJldHVybiAnbm9ybWFsJztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRIZWlnaHQobXVsdGlwbGVyID0gMSkge1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4gICAgcmV0dXJuIHZpZXdwb3J0SGVpZ2h0ICogbXVsdGlwbGVyO1xufVxuXG5mdW5jdGlvbiB3cmFwTW9kYWxCb2R5KGNvbnRlbnQpIHtcbiAgICBjb25zdCAkbW9kYWxCb2R5ID0gJCgnPGRpdj4nKTtcblxuICAgICRtb2RhbEJvZHlcbiAgICAgICAgLmFkZENsYXNzKG1vZGFsQm9keUNsYXNzKVxuICAgICAgICAuaHRtbChjb250ZW50KTtcblxuICAgIHJldHVybiAkbW9kYWxCb2R5O1xufVxuXG5mdW5jdGlvbiByZXN0cmFpbkNvbnRlbnRIZWlnaHQoJGNvbnRlbnQpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoYC4ke21vZGFsQm9keUNsYXNzfWAsICRjb250ZW50KTtcbiAgICBjb25zdCBib2R5SGVpZ2h0ID0gJGJvZHkub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gJGNvbnRlbnQub3V0ZXJIZWlnaHQoKTtcbiAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IGdldFZpZXdwb3J0SGVpZ2h0KDAuOSk7XG4gICAgY29uc3QgbWF4SGVpZ2h0ID0gdmlld3BvcnRIZWlnaHQgLSAoY29udGVudEhlaWdodCAtIGJvZHlIZWlnaHQpO1xuXG4gICAgJGJvZHkuY3NzKCdtYXgtaGVpZ2h0JywgbWF4SGVpZ2h0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWxDb250ZW50KCRtb2RhbCkge1xuICAgIGxldCAkY29udGVudCA9ICQoYC4ke21vZGFsQ29udGVudENsYXNzfWAsICRtb2RhbCk7XG5cbiAgICBpZiAoJGNvbnRlbnQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nQ29udGVudCA9ICRtb2RhbC5jaGlsZHJlbigpO1xuXG4gICAgICAgICRjb250ZW50ID0gJCgnPGRpdj4nKVxuICAgICAgICAgICAgLmFkZENsYXNzKG1vZGFsQ29udGVudENsYXNzKVxuICAgICAgICAgICAgLmFwcGVuZChleGlzdGluZ0NvbnRlbnQpXG4gICAgICAgICAgICAuYXBwZW5kVG8oJG1vZGFsKTtcbiAgICB9XG5cbiAgICByZXR1cm4gJGNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvYWRpbmdPdmVybGF5KCRtb2RhbCkge1xuICAgIGxldCAkbG9hZGluZ092ZXJsYXkgPSAkKGAuJHtsb2FkaW5nT3ZlcmxheUNsYXNzfWAsICRtb2RhbCk7XG5cbiAgICBpZiAoJGxvYWRpbmdPdmVybGF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAkbG9hZGluZ092ZXJsYXkgPSAkKCc8ZGl2PicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MobG9hZGluZ092ZXJsYXlDbGFzcylcbiAgICAgICAgICAgIC5hcHBlbmRUbygkbW9kYWwpO1xuICAgIH1cblxuICAgIHJldHVybiAkbG9hZGluZ092ZXJsYXk7XG59XG5cbi8qKlxuICogUmVxdWlyZSBmb3VuZGF0aW9uLnJldmVhbFxuICogRGVjb3JhdGUgZm91bmRhdGlvbi5yZXZlYWwgd2l0aCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAqIEBwYXJhbSB7alF1ZXJ5fSAkbW9kYWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaXplXVxuICovXG5leHBvcnQgY2xhc3MgTW9kYWwge1xuICAgIGNvbnN0cnVjdG9yKCRtb2RhbCwge1xuICAgICAgICBzaXplID0gbnVsbCxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kbW9kYWwgPSAkbW9kYWw7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQgPSBjcmVhdGVNb2RhbENvbnRlbnQodGhpcy4kbW9kYWwpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gY3JlYXRlTG9hZGluZ092ZXJsYXkodGhpcy4kbW9kYWwpO1xuICAgICAgICB0aGlzLmRlZmF1bHRTaXplID0gc2l6ZSB8fCBnZXRTaXplRnJvbU1vZGFsKCRtb2RhbCk7XG4gICAgICAgIHRoaXMuc2l6ZSA9IHRoaXMuZGVmYXVsdFNpemU7XG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMub25Nb2RhbE9wZW4gPSB0aGlzLm9uTW9kYWxPcGVuLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2RhbE9wZW5lZCA9IHRoaXMub25Nb2RhbE9wZW5lZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTW9kYWxDbG9zZSA9IHRoaXMub25Nb2RhbENsb3NlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2RhbENsb3NlZCA9IHRoaXMub25Nb2RhbENsb3NlZC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8qIFNUUkYtMjQ3MSAtIE11bHRpcGxlIFdpc2ggTGlzdHMgLSBwcmV2ZW50cyBkb3VibGUtZmlyaW5nXG4gICAgICAgICAqIG9mIGZvdW5kYXRpb24uZHJvcGRvd24gY2xpY2suZm5kdG4uZHJvcGRvd24gZXZlbnQgKi9cbiAgICAgICAgdGhpcy4kbW9kYWwub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51LWJ1dHRvbicsIGUgPT4ge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IHBlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZW5kaW5nO1xuICAgIH1cblxuICAgIHNldCBwZW5kaW5nKHBlbmRpbmcpIHtcbiAgICAgICAgdGhpcy5fcGVuZGluZyA9IHBlbmRpbmc7XG5cbiAgICAgICAgaWYgKHBlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gICAgfVxuXG4gICAgc2V0IHNpemUoc2l6ZSkge1xuICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcblxuICAgICAgICB0aGlzLiRtb2RhbFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFNpemVDbGFzc2VzLnNtYWxsKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFNpemVDbGFzc2VzLmxhcmdlKVxuICAgICAgICAgICAgLmFkZENsYXNzKFNpemVDbGFzc2VzW3NpemVdIHx8ICcnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZSwgdGhpcy5vbk1vZGFsQ2xvc2UpO1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5jbG9zZWQsIHRoaXMub25Nb2RhbENsb3NlZCk7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLm9wZW4sIHRoaXMub25Nb2RhbE9wZW4pO1xuICAgICAgICB0aGlzLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5vcGVuZWQsIHRoaXMub25Nb2RhbE9wZW5lZCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC5vZmYoTW9kYWxFdmVudHMuY2xvc2UsIHRoaXMub25Nb2RhbENsb3NlKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLmNsb3NlZCwgdGhpcy5vbk1vZGFsQ2xvc2VkKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLm9wZW4sIHRoaXMub25Nb2RhbE9wZW4pO1xuICAgICAgICB0aGlzLiRtb2RhbC5vZmYoTW9kYWxFdmVudHMub3BlbmVkLCB0aGlzLm9uTW9kYWxPcGVuZWQpO1xuICAgIH1cblxuICAgIG9wZW4oe1xuICAgICAgICBzaXplLFxuICAgICAgICBwZW5kaW5nID0gdHJ1ZSxcbiAgICAgICAgY2xlYXJDb250ZW50ID0gdHJ1ZSxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gcGVuZGluZztcblxuICAgICAgICBpZiAoc2l6ZSkge1xuICAgICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbGVhckNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJDb250ZW50KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRtb2RhbC5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnb3BlbicpO1xuICAgIH1cblxuICAgIGNsb3NlKCkge1xuICAgICAgICB0aGlzLiRtb2RhbC5mb3VuZGF0aW9uKCdyZXZlYWwnLCAnY2xvc2UnKTtcbiAgICB9XG5cbiAgICB1cGRhdGVDb250ZW50KGNvbnRlbnQsIHsgd3JhcCA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgJGNvbnRlbnQgPSAkKGNvbnRlbnQpO1xuXG4gICAgICAgIGlmICh3cmFwKSB7XG4gICAgICAgICAgICAkY29udGVudCA9IHdyYXBNb2RhbEJvZHkoY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy4kY29udGVudC5odG1sKCRjb250ZW50KTtcblxuICAgICAgICByZXN0cmFpbkNvbnRlbnRIZWlnaHQodGhpcy4kY29udGVudCk7XG4gICAgICAgIGZvdW5kYXRpb24odGhpcy4kY29udGVudCk7XG4gICAgfVxuXG4gICAgY2xlYXJDb250ZW50KCkge1xuICAgICAgICB0aGlzLiRjb250ZW50Lmh0bWwoJycpO1xuICAgIH1cblxuICAgIG9uTW9kYWxDbG9zZSgpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKGJvZHlBY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgb25Nb2RhbENsb3NlZCgpIHtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kZWZhdWx0U2l6ZTtcbiAgICB9XG5cbiAgICBvbk1vZGFsT3BlbigpIHtcbiAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKGJvZHlBY3RpdmVDbGFzcyk7XG4gICAgfVxuXG4gICAgb25Nb2RhbE9wZW5lZCgpIHtcbiAgICAgICAgcmVzdHJhaW5Db250ZW50SGVpZ2h0KHRoaXMuJGNvbnRlbnQpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgb2YgbW9kYWxzXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5zaXplXVxuICogQHJldHVybnMge2FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbEZhY3Rvcnkoc2VsZWN0b3IgPSAnW2RhdGEtcmV2ZWFsXScsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRtb2RhbHMgPSAkKHNlbGVjdG9yLCBvcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkbW9kYWxzLm1hcCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJG1vZGFsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSAnbW9kYWxJbnN0YW5jZSc7XG4gICAgICAgIGNvbnN0IGNhY2hlZE1vZGFsID0gJG1vZGFsLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRNb2RhbCBpbnN0YW5jZW9mIE1vZGFsKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkTW9kYWw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBtb2RhbCA9IG5ldyBNb2RhbCgkbW9kYWwsIG9wdGlvbnMpO1xuXG4gICAgICAgICRtb2RhbC5kYXRhKGluc3RhbmNlS2V5LCBtb2RhbCk7XG5cbiAgICAgICAgcmV0dXJuIG1vZGFsO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cblxuLypcbiAqIFJldHVybiB0aGUgZGVmYXVsdCBwYWdlIG1vZGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TW9kYWwoKSB7XG4gICAgcmV0dXJuIG1vZGFsRmFjdG9yeSgnI21vZGFsJylbMF07XG59XG5cbi8qXG4gKiBSZXR1cm4gdGhlIGRlZmF1bHQgYWxlcnQgbW9kYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFsZXJ0TW9kYWwoKSB7XG4gICAgcmV0dXJuIG1vZGFsRmFjdG9yeSgnI2FsZXJ0LW1vZGFsJylbMF07XG59XG5cbi8qXG4gKiBEaXNwbGF5IHRoZSBnaXZlbiBtZXNzYWdlIGluIHRoZSBkZWZhdWx0IGFsZXJ0IG1vZGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxlcnRNb2RhbChtZXNzYWdlKSB7XG4gICAgY29uc3QgbW9kYWwgPSBhbGVydE1vZGFsKCk7XG4gICAgbW9kYWwub3BlbigpO1xuICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQoYDxzcGFuPiR7bWVzc2FnZX08L3NwYW4+YCk7XG59XG4iLCJjb25zdCByZXZlYWxDbG9zZUF0dHIgPSAncmV2ZWFsQ2xvc2UnO1xuY29uc3QgcmV2ZWFsQ2xvc2VTZWxlY3RvciA9IGBbZGF0YS0ke3JldmVhbENsb3NlQXR0cn1dYDtcbmNvbnN0IHJldmVhbFNlbGVjdG9yID0gJ1tkYXRhLXJldmVhbF0nO1xuXG5jbGFzcyBSZXZlYWxDbG9zZSB7XG4gICAgY29uc3RydWN0b3IoJGJ1dHRvbikge1xuICAgICAgICB0aGlzLiRidXR0b24gPSAkYnV0dG9uO1xuICAgICAgICB0aGlzLm1vZGFsSWQgPSAkYnV0dG9uLmRhdGEocmV2ZWFsQ2xvc2VBdHRyKTtcblxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBnZXQgbW9kYWwoKSB7XG4gICAgICAgIGxldCAkbW9kYWw7XG5cbiAgICAgICAgaWYgKHRoaXMubW9kYWxJZCkge1xuICAgICAgICAgICAgJG1vZGFsID0gJChgIyR7dGhpcy5tb2RhbElkfWApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1vZGFsID0gdGhpcy4kYnV0dG9uLnBhcmVudHMocmV2ZWFsU2VsZWN0b3IpLmVxKDApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRtb2RhbC5kYXRhKCdtb2RhbEluc3RhbmNlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kYnV0dG9uLm9uKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRidXR0b24ub2ZmKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgfVxuXG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB7IG1vZGFsIH0gPSB0aGlzO1xuXG4gICAgICAgIGlmIChtb2RhbCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLypcbiAqIEV4dGVuZCBmb3VuZGF0aW9uLnJldmVhbCB3aXRoIHRoZSBhYmlsaXR5IHRvIGNsb3NlIGEgbW9kYWwgYnkgY2xpY2tpbmcgb24gYW55IG9mIGl0cyBjaGlsZCBlbGVtZW50XG4gKiB3aXRoIGRhdGEtcmV2ZWFsLWNsb3NlIGF0dHJpYnV0ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICpcbiAqIDxkaXYgZGF0YS1yZXZlYWwgaWQ9XCJoZWxsb01vZGFsXCI+XG4gKiAgIDxidXR0b24gZGF0YS1yZXZlYWwtY2xvc2U+Q29udGludWU8L2J1dHRvbj5cbiAqIDwvZGl2PlxuICpcbiAqIDxkaXYgZGF0YS1yZXZlYWwgaWQ9XCJoZWxsb01vZGFsXCI+PC9kaXY+XG4gKiA8YnV0dG9uIGRhdGEtcmV2ZWFsLWNsb3NlPVwiaGVsbG9Nb2RhbFwiPkNvbnRpbnVlPC9idXR0b24+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldmVhbENsb3NlRmFjdG9yeShzZWxlY3RvciA9IHJldmVhbENsb3NlU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRidXR0b25zID0gJChzZWxlY3Rvciwgb3B0aW9ucy4kY29udGV4dCk7XG5cbiAgICByZXR1cm4gJGJ1dHRvbnMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkYnV0dG9uID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBgJHtyZXZlYWxDbG9zZUF0dHJ9SW5zdGFuY2VgO1xuICAgICAgICBjb25zdCBjYWNoZWRCdXR0b24gPSAkYnV0dG9uLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRCdXR0b24gaW5zdGFuY2VvZiBSZXZlYWxDbG9zZSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZEJ1dHRvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBSZXZlYWxDbG9zZSgkYnV0dG9uKTtcblxuICAgICAgICAkYnV0dG9uLmRhdGEoaW5zdGFuY2VLZXksIGJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9KS50b0FycmF5KCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9