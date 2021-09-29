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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


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

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9tb2RlbHMvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9mb3VuZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9yZXZlYWwtY2xvc2UuanMiXSwibmFtZXMiOlsiaW5wdXRUYWdOYW1lcyIsImNsYXNzaWZ5SW5wdXQiLCJpbnB1dCIsImZvcm1GaWVsZENsYXNzIiwiJGlucHV0IiwiJCIsIiRmb3JtRmllbGQiLCJwYXJlbnQiLCJ0YWdOYW1lIiwicHJvcCIsInRvTG93ZXJDYXNlIiwiY2xhc3NOYW1lIiwic3BlY2lmaWNDbGFzc05hbWUiLCJpbnB1dFR5cGUiLCJhZGRDbGFzcyIsImNsYXNzaWZ5Rm9ybSIsImZvcm1TZWxlY3RvciIsIm9wdGlvbnMiLCIkZm9ybSIsIiRpbnB1dHMiLCJmaW5kIiwiam9pbiIsImVhY2giLCJfXyIsImdldEZpZWxkSWQiLCIkZmllbGQiLCJmaWVsZElkIiwibWF0Y2giLCJsZW5ndGgiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwiJHN0YXRlRmllbGQiLCJzdGF0ZUZpZWxkQXR0cnMiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYWZ0ZXIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJmb3JtcyIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwicGFzc3dvcmRTZWxlY3RvciIsInBhc3N3b3JkMlNlbGVjdG9yIiwicmVxdWlyZW1lbnRzIiwiaXNPcHRpb25hbCIsIiRwYXNzd29yZCIsInBhc3N3b3JkVmFsaWRhdGlvbnMiLCJSZWdFeHAiLCJhbHBoYSIsIm51bWVyaWMiLCJtaW5sZW5ndGgiLCJlcnJvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInNlbGVjdG9ycyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJjb25maWd1cmUiLCJmb3JtIiwicHJldmVudFN1Ym1pdCIsInN1Y2Nlc3NDbGFzcyIsInNldE1lc3NhZ2VPcHRpb25zIiwiZXJyb3JTcGFuIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCIkZmllbGRDbGFzc0VsZW1lbnQiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm5vZCIsImNsYXNzZXMiLCJmb3JFYWNoIiwiaGFzQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlIiwidGVzdCIsInBhc3N3b3JkIiwibm90RW1wdHkiLCJtaW5NYXhWYWxpZGF0ZSIsIm1pbklucHV0U2VsZWN0b3IiLCJtYXhJbnB1dFNlbGVjdG9yIiwibWluVmFsdWUiLCJwYXJzZUZsb2F0IiwibWF4VmFsdWUiLCJlcnJvckNsYXNzIiwiZXJyb3JNZXNzYWdlQ2xhc3MiLCJjaGVja0Z1bmN0aW9ucyIsIiRlbGVtZW50IiwiZm91bmRhdGlvbiIsImRyb3Bkb3duIiwiYWN0aXZlX2NsYXNzIiwicmV2ZWFsIiwiYmdfY2xhc3MiLCJkaXNtaXNzX21vZGFsX2NsYXNzIiwiY2xvc2Vfb25fYmFja2dyb3VuZF9jbGljayIsInRhYiIsIm1vZGFsRmFjdG9yeSIsIiRjb250ZXh0IiwicmV2ZWFsQ2xvc2VGYWN0b3J5IiwiYm9keUFjdGl2ZUNsYXNzIiwibG9hZGluZ092ZXJsYXlDbGFzcyIsIm1vZGFsQm9keUNsYXNzIiwibW9kYWxDb250ZW50Q2xhc3MiLCJTaXplQ2xhc3NlcyIsInNtYWxsIiwibGFyZ2UiLCJub3JtYWwiLCJNb2RhbEV2ZW50cyIsImNsb3NlIiwiY2xvc2VkIiwib3BlbiIsIm9wZW5lZCIsImdldFNpemVGcm9tTW9kYWwiLCIkbW9kYWwiLCJnZXRWaWV3cG9ydEhlaWdodCIsIm11bHRpcGxlciIsInZpZXdwb3J0SGVpZ2h0Iiwid2luZG93IiwiaGVpZ2h0Iiwid3JhcE1vZGFsQm9keSIsImNvbnRlbnQiLCIkbW9kYWxCb2R5IiwiaHRtbCIsInJlc3RyYWluQ29udGVudEhlaWdodCIsIiRjb250ZW50IiwiJGJvZHkiLCJib2R5SGVpZ2h0Iiwib3V0ZXJIZWlnaHQiLCJjb250ZW50SGVpZ2h0IiwibWF4SGVpZ2h0IiwiY3NzIiwiY3JlYXRlTW9kYWxDb250ZW50IiwiZXhpc3RpbmdDb250ZW50IiwiY2hpbGRyZW4iLCJhcHBlbmQiLCJhcHBlbmRUbyIsImNyZWF0ZUxvYWRpbmdPdmVybGF5IiwiJGxvYWRpbmdPdmVybGF5IiwiTW9kYWwiLCJzaXplIiwiJG92ZXJsYXkiLCJkZWZhdWx0U2l6ZSIsInBlbmRpbmciLCJvbk1vZGFsT3BlbiIsImJpbmQiLCJvbk1vZGFsT3BlbmVkIiwib25Nb2RhbENsb3NlIiwib25Nb2RhbENsb3NlZCIsImJpbmRFdmVudHMiLCJvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJ1bmJpbmRFdmVudHMiLCJvZmYiLCJjbGVhckNvbnRlbnQiLCJ1cGRhdGVDb250ZW50Iiwid3JhcCIsIl9wZW5kaW5nIiwic2hvdyIsImhpZGUiLCJfc2l6ZSIsIiRtb2RhbHMiLCJtYXAiLCJpbmRleCIsImVsZW1lbnQiLCJpbnN0YW5jZUtleSIsImNhY2hlZE1vZGFsIiwibW9kYWwiLCJ0b0FycmF5IiwiZGVmYXVsdE1vZGFsIiwiYWxlcnRNb2RhbCIsInNob3dBbGVydE1vZGFsIiwibWVzc2FnZSIsInJldmVhbENsb3NlQXR0ciIsInJldmVhbENsb3NlU2VsZWN0b3IiLCJyZXZlYWxTZWxlY3RvciIsIlJldmVhbENsb3NlIiwiJGJ1dHRvbiIsIm1vZGFsSWQiLCJvbkNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudHMiLCJlcSIsIiRidXR0b25zIiwiY2FjaGVkQnV0dG9uIiwiYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRyxDQUNsQixPQURrQixFQUVsQixRQUZrQixFQUdsQixVQUhrQixDQUF0QjtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxhQUFULENBQXVCQyxLQUF2QixFQUE4QkMsY0FBOUIsRUFBOEM7QUFDMUMsTUFBTUMsTUFBTSxHQUFHQyxDQUFDLENBQUNILEtBQUQsQ0FBaEI7QUFDQSxNQUFNSSxVQUFVLEdBQUdGLE1BQU0sQ0FBQ0csTUFBUCxPQUFrQkosY0FBbEIsQ0FBbkI7QUFDQSxNQUFNSyxPQUFPLEdBQUdKLE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLFNBQVosRUFBdUJDLFdBQXZCLEVBQWhCO0FBRUEsTUFBSUMsU0FBUyxHQUFNUixjQUFOLFVBQXlCSyxPQUF0QztBQUNBLE1BQUlJLGlCQUFKLENBTjBDLENBUTFDOztBQUNBLE1BQUlKLE9BQU8sS0FBSyxPQUFoQixFQUF5QjtBQUNyQixRQUFNSyxTQUFTLEdBQUdULE1BQU0sQ0FBQ0ssSUFBUCxDQUFZLE1BQVosQ0FBbEI7O0FBRUEsUUFBSSx1REFBVyxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLFFBQXRCLENBQVgsRUFBNENJLFNBQTVDLENBQUosRUFBNEQ7QUFDeEQ7QUFDQUYsZUFBUyxHQUFNUixjQUFOLFVBQXlCLHdEQUFZVSxTQUFaLENBQWxDO0FBQ0gsS0FIRCxNQUdPO0FBQ0g7QUFDQUQsdUJBQWlCLFFBQU1ELFNBQU4sR0FBa0IseURBQWFFLFNB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QUFRLEdBQUc3TCxDQUFDLENBQUNvQyxRQUFELEVBQVd4QixPQUFPLENBQUMwRixRQUFuQixDQUFsQjtBQUVBLFNBQU91RixRQUFRLENBQUN0QixHQUFULENBQWEsVUFBQ0MsS0FBRCxFQUFRQyxPQUFSLEVBQW9CO0FBQ3BDLFFBQU1hLE9BQU8sR0FBR3RMLENBQUMsQ0FBQ3lLLE9BQUQsQ0FBakI7QUFDQSxRQUFNQyxXQUFXLEdBQU1RLGVBQU4sYUFBakI7QUFDQSxRQUFNWSxZQUFZLEdBQUdSLE9BQU8sQ0FBQy9HLElBQVIsQ0FBYW1HLFdBQWIsQ0FBckI7O0FBRUEsUUFBSW9CLFlBQVksWUFBWVQsV0FBNUIsRUFBeUM7QUFDckMsYUFBT1MsWUFBUDtBQUNIOztBQUVELFFBQU1DLE1BQU0sR0FBRyxJQUFJVixXQUFKLENBQWdCQyxPQUFoQixDQUFmO0FBRUFBLFdBQU8sQ0FBQy9HLElBQVIsQ0FBYW1HLFdBQWIsRUFBMEJxQixNQUExQjtBQUVBLFdBQU9BLE1BQVA7QUFDSCxHQWRNLEVBY0psQixPQWRJLEVBQVA7QUFlSCxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vbW9kZWxzL2Zvcm1zJztcblxuY29uc3QgaW5wdXRUYWdOYW1lcyA9IFtcbiAgICAnaW5wdXQnLFxuICAgICdzZWxlY3QnLFxuICAgICd0ZXh0YXJlYScsXG5dO1xuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFbWFpbFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHZhbGlkIGVtYWlsLicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQyU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVxdWlyZW1lbnRzXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWxcbiAgICAgKi9cbiAgICBzZXRQYXNzd29yZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIHBhc3N3b3JkU2VsZWN0b3IsIHBhc3N3b3JkMlNlbGVjdG9yLCByZXF1aXJlbWVudHMsIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgcGFzc3dvcmQuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5hbHBoYSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMubnVtZXJpYykpXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiB2YWwubGVuZ3RoID49IHJlcXVpcmVtZW50cy5taW5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb3B0aW9uYWwgYW5kIG5vdGhpbmcgZW50ZXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwgJiYgdmFsLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogcmVxdWlyZW1lbnRzLmVycm9yLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdXIgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMpID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcixcbiAgICAgICAgICAgIGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfSA9IHNlbGVjdG9ycztcblxuICAgICAgICB2YWxpZGF0b3IuY29uZmlndXJlKHtcbiAgICAgICAgICAgIGZvcm06IGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIHByZXZlbnRTdWJtaXQ6IHRydWUsXG4gICAgICAgICAgICBzdWNjZXNzQ2xhc3M6ICdfJywgLy8gS0xVREdFOiBEb24ndCBhcHBseSBzdWNjZXNzIGNsYXNzXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluIHByaWNlIG11c3QgYmUgbGVzcyB0aGFuIG1heC4gcHJpY2UuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWF4LiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdNaW4uIHByaWNlIGlzIHJlcXVpcmVkLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ0lucHV0IG11c3QgYmUgZ3JlYXRlciB0aGFuIDAuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ21pbi1udW1iZXI6MCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5zZXRNZXNzYWdlT3B0aW9ucyh7XG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgcGFyZW50OiBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZXJyb3JTcGFuOiBlcnJvclNlbGVjdG9yLFxuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9O1xuIiwiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXi4rQC4rXFwuLisvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gbWluTWF4VmFsaWRhdGUobWluSW5wdXRTZWxlY3RvciwgbWF4SW5wdXRTZWxlY3Rvcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGNiKSB7XG4gICAgICAgIGNvbnN0IG1pblZhbHVlID0gcGFyc2VGbG9hdCgkKG1pbklucHV0U2VsZWN0b3IpLnZhbCgpKTtcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBwYXJzZUZsb2F0KCQobWF4SW5wdXRTZWxlY3RvcikudmFsKCkpO1xuXG4gICAgICAgIGlmIChtYXhWYWx1ZSA+IG1pblZhbHVlIHx8IF8uaXNOYU4obWF4VmFsdWUpIHx8IF8uaXNOYU4obWluVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2IoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWluTWF4VmFsaWRhdGU7XG4iLCJpbXBvcnQgbm9kIGZyb20gJ25vZC12YWxpZGF0ZSc7XG5pbXBvcnQgbWluTWF4VmFsaWRhdGUgZnJvbSAnLi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUnO1xuXG4vLyBIb29rIG91ciBTQ1NTIGZyYW1ld29yayBmb3JtIGZpZWxkIHN0YXR1cyBjbGFzc2VzIGludG8gdGhlIG5vZCB2YWxpZGF0aW9uIHN5c3RlbSBiZWZvcmUgdXNlXG5ub2QuY2xhc3Nlcy5lcnJvckNsYXNzID0gJ2Zvcm0tZmllbGQtLWVycm9yJztcbm5vZC5jbGFzc2VzLnN1Y2Nlc3NDbGFzcyA9ICdmb3JtLWZpZWxkLS1zdWNjZXNzJztcbm5vZC5jbGFzc2VzLmVycm9yTWVzc2FnZUNsYXNzID0gJ2Zvcm0taW5saW5lTWVzc2FnZSc7XG5cbi8vIFJlZ2lzdGVyIHZhbGlkYXRlIGZ1bmN0aW9uc1xubm9kLmNoZWNrRnVuY3Rpb25zWydtaW4tbWF4J10gPSBtaW5NYXhWYWxpZGF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kO1xuIiwiaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbic7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uLmRyb3Bkb3duJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24udGFiJztcbmltcG9ydCBtb2RhbEZhY3RvcnkgZnJvbSAnLi9tb2RhbCc7XG5pbXBvcnQgcmV2ZWFsQ2xvc2VGYWN0b3J5IGZyb20gJy4vcmV2ZWFsLWNsb3NlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRlbGVtZW50KSB7XG4gICAgJGVsZW1lbnQuZm91bmRhdGlvbih7XG4gICAgICAgIGRyb3Bkb3duOiB7XG4gICAgICAgICAgICAvLyBzcGVjaWZ5IHRoZSBjbGFzcyB1c2VkIGZvciBhY3RpdmUgZHJvcGRvd25zXG4gICAgICAgICAgICBhY3RpdmVfY2xhc3M6ICdpcy1vcGVuJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmV2ZWFsOiB7XG4gICAgICAgICAgICBiZ19jbGFzczogJ21vZGFsLWJhY2tncm91bmQnLFxuICAgICAgICAgICAgZGlzbWlzc19tb2RhbF9jbGFzczogJ21vZGFsLWNsb3NlJyxcbiAgICAgICAgICAgIGNsb3NlX29uX2JhY2tncm91bmRfY2xpY2s6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHRhYjoge1xuICAgICAgICAgICAgYWN0aXZlX2NsYXNzOiAnaXMtYWN0aXZlJyxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIG1vZGFsRmFjdG9yeSgnW2RhdGEtcmV2ZWFsXScsIHsgJGNvbnRleHQ6ICRlbGVtZW50IH0pO1xuICAgIHJldmVhbENsb3NlRmFjdG9yeSgnW2RhdGEtcmV2ZWFsLWNsb3NlXScsIHsgJGNvbnRleHQ6ICRlbGVtZW50IH0pO1xufVxuIiwiaW1wb3J0IGZvdW5kYXRpb24gZnJvbSAnLi9mb3VuZGF0aW9uJztcblxuY29uc3QgYm9keUFjdGl2ZUNsYXNzID0gJ2hhcy1hY3RpdmVNb2RhbCc7XG5jb25zdCBsb2FkaW5nT3ZlcmxheUNsYXNzID0gJ2xvYWRpbmdPdmVybGF5JztcbmNvbnN0IG1vZGFsQm9keUNsYXNzID0gJ21vZGFsLWJvZHknO1xuY29uc3QgbW9kYWxDb250ZW50Q2xhc3MgPSAnbW9kYWwtY29udGVudCc7XG5cbmNvbnN0IFNpemVDbGFzc2VzID0ge1xuICAgIHNtYWxsOiAnbW9kYWwtLXNtYWxsJyxcbiAgICBsYXJnZTogJ21vZGFsLS1sYXJnZScsXG4gICAgbm9ybWFsOiAnJyxcbn07XG5cbmV4cG9ydCBjb25zdCBNb2RhbEV2ZW50cyA9IHtcbiAgICBjbG9zZTogJ2Nsb3NlLmZuZHRuLnJldmVhbCcsXG4gICAgY2xvc2VkOiAnY2xvc2VkLmZuZHRuLnJldmVhbCcsXG4gICAgb3BlbjogJ29wZW4uZm5kdG4ucmV2ZWFsJyxcbiAgICBvcGVuZWQ6ICdvcGVuZWQuZm5kdG4ucmV2ZWFsJyxcbn07XG5cbmZ1bmN0aW9uIGdldFNpemVGcm9tTW9kYWwoJG1vZGFsKSB7XG4gICAgaWYgKCRtb2RhbC5oYXNDbGFzcyhTaXplQ2xhc3Nlcy5zbWFsbCkpIHtcbiAgICAgICAgcmV0dXJuICdzbWFsbCc7XG4gICAgfVxuXG4gICAgaWYgKCRtb2RhbC5oYXNDbGFzcyhTaXplQ2xhc3Nlcy5sYXJnZSkpIHtcbiAgICAgICAgcmV0dXJuICdsYXJnZSc7XG4gICAgfVxuXG4gICAgcmV0dXJuICdub3JtYWwnO1xufVxuXG5mdW5jdGlvbiBnZXRWaWV3cG9ydEhlaWdodChtdWx0aXBsZXIgPSAxKSB7XG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XG5cbiAgICByZXR1cm4gdmlld3BvcnRIZWlnaHQgKiBtdWx0aXBsZXI7XG59XG5cbmZ1bmN0aW9uIHdyYXBNb2RhbEJvZHkoY29udGVudCkge1xuICAgIGNvbnN0ICRtb2RhbEJvZHkgPSAkKCc8ZGl2PicpO1xuXG4gICAgJG1vZGFsQm9keVxuICAgICAgICAuYWRkQ2xhc3MobW9kYWxCb2R5Q2xhc3MpXG4gICAgICAgIC5odG1sKGNvbnRlbnQpO1xuXG4gICAgcmV0dXJuICRtb2RhbEJvZHk7XG59XG5cbmZ1bmN0aW9uIHJlc3RyYWluQ29udGVudEhlaWdodCgkY29udGVudCkge1xuICAgIGNvbnN0ICRib2R5ID0gJChgLiR7bW9kYWxCb2R5Q2xhc3N9YCwgJGNvbnRlbnQpO1xuICAgIGNvbnN0IGJvZHlIZWlnaHQgPSAkYm9keS5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IGNvbnRlbnRIZWlnaHQgPSAkY29udGVudC5vdXRlckhlaWdodCgpO1xuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gZ2V0Vmlld3BvcnRIZWlnaHQoMC45KTtcbiAgICBjb25zdCBtYXhIZWlnaHQgPSB2aWV3cG9ydEhlaWdodCAtIChjb250ZW50SGVpZ2h0IC0gYm9keUhlaWdodCk7XG5cbiAgICAkYm9keS5jc3MoJ21heC1oZWlnaHQnLCBtYXhIZWlnaHQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbENvbnRlbnQoJG1vZGFsKSB7XG4gICAgbGV0ICRjb250ZW50ID0gJChgLiR7bW9kYWxDb250ZW50Q2xhc3N9YCwgJG1vZGFsKTtcblxuICAgIGlmICgkY29udGVudC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdDb250ZW50ID0gJG1vZGFsLmNoaWxkcmVuKCk7XG5cbiAgICAgICAgJGNvbnRlbnQgPSAkKCc8ZGl2PicpXG4gICAgICAgICAgICAuYWRkQ2xhc3MobW9kYWxDb250ZW50Q2xhc3MpXG4gICAgICAgICAgICAuYXBwZW5kKGV4aXN0aW5nQ29udGVudClcbiAgICAgICAgICAgIC5hcHBlbmRUbygkbW9kYWwpO1xuICAgIH1cblxuICAgIHJldHVybiAkY29udGVudDtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTG9hZGluZ092ZXJsYXkoJG1vZGFsKSB7XG4gICAgbGV0ICRsb2FkaW5nT3ZlcmxheSA9ICQoYC4ke2xvYWRpbmdPdmVybGF5Q2xhc3N9YCwgJG1vZGFsKTtcblxuICAgIGlmICgkbG9hZGluZ092ZXJsYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICRsb2FkaW5nT3ZlcmxheSA9ICQoJzxkaXY+JylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhsb2FkaW5nT3ZlcmxheUNsYXNzKVxuICAgICAgICAgICAgLmFwcGVuZFRvKCRtb2RhbCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICRsb2FkaW5nT3ZlcmxheTtcbn1cblxuLyoqXG4gKiBSZXF1aXJlIGZvdW5kYXRpb24ucmV2ZWFsXG4gKiBEZWNvcmF0ZSBmb3VuZGF0aW9uLnJldmVhbCB3aXRoIGFkZGl0aW9uYWwgbWV0aG9kc1xuICogQHBhcmFtIHtqUXVlcnl9ICRtb2RhbFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNpemVdXG4gKi9cbmV4cG9ydCBjbGFzcyBNb2RhbCB7XG4gICAgY29uc3RydWN0b3IoJG1vZGFsLCB7XG4gICAgICAgIHNpemUgPSBudWxsLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLiRtb2RhbCA9ICRtb2RhbDtcbiAgICAgICAgdGhpcy4kY29udGVudCA9IGNyZWF0ZU1vZGFsQ29udGVudCh0aGlzLiRtb2RhbCk7XG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSBjcmVhdGVMb2FkaW5nT3ZlcmxheSh0aGlzLiRtb2RhbCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdFNpemUgPSBzaXplIHx8IGdldFNpemVGcm9tTW9kYWwoJG1vZGFsKTtcbiAgICAgICAgdGhpcy5zaXplID0gdGhpcy5kZWZhdWx0U2l6ZTtcbiAgICAgICAgdGhpcy5wZW5kaW5nID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5vbk1vZGFsT3BlbiA9IHRoaXMub25Nb2RhbE9wZW4uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vZGFsT3BlbmVkID0gdGhpcy5vbk1vZGFsT3BlbmVkLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Nb2RhbENsb3NlID0gdGhpcy5vbk1vZGFsQ2xvc2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbk1vZGFsQ2xvc2VkID0gdGhpcy5vbk1vZGFsQ2xvc2VkLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLyogU1RSRi0yNDcxIC0gTXVsdGlwbGUgV2lzaCBMaXN0cyAtIHByZXZlbnRzIGRvdWJsZS1maXJpbmdcbiAgICAgICAgICogb2YgZm91bmRhdGlvbi5kcm9wZG93biBjbGljay5mbmR0bi5kcm9wZG93biBldmVudCAqL1xuICAgICAgICB0aGlzLiRtb2RhbC5vbignY2xpY2snLCAnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJywgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXQgcGVuZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlbmRpbmc7XG4gICAgfVxuXG4gICAgc2V0IHBlbmRpbmcocGVuZGluZykge1xuICAgICAgICB0aGlzLl9wZW5kaW5nID0gcGVuZGluZztcblxuICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgICB9XG5cbiAgICBzZXQgc2l6ZShzaXplKSB7XG4gICAgICAgIHRoaXMuX3NpemUgPSBzaXplO1xuXG4gICAgICAgIHRoaXMuJG1vZGFsXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoU2l6ZUNsYXNzZXMuc21hbGwpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoU2l6ZUNsYXNzZXMubGFyZ2UpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoU2l6ZUNsYXNzZXNbc2l6ZV0gfHwgJycpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLmNsb3NlLCB0aGlzLm9uTW9kYWxDbG9zZSk7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLmNsb3NlZCwgdGhpcy5vbk1vZGFsQ2xvc2VkKTtcbiAgICAgICAgdGhpcy4kbW9kYWwub24oTW9kYWxFdmVudHMub3BlbiwgdGhpcy5vbk1vZGFsT3Blbik7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLm9wZW5lZCwgdGhpcy5vbk1vZGFsT3BlbmVkKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9mZihNb2RhbEV2ZW50cy5jbG9zZSwgdGhpcy5vbk1vZGFsQ2xvc2UpO1xuICAgICAgICB0aGlzLiRtb2RhbC5vZmYoTW9kYWxFdmVudHMuY2xvc2VkLCB0aGlzLm9uTW9kYWxDbG9zZWQpO1xuICAgICAgICB0aGlzLiRtb2RhbC5vZmYoTW9kYWxFdmVudHMub3BlbiwgdGhpcy5vbk1vZGFsT3Blbik7XG4gICAgICAgIHRoaXMuJG1vZGFsLm9mZihNb2RhbEV2ZW50cy5vcGVuZWQsIHRoaXMub25Nb2RhbE9wZW5lZCk7XG4gICAgfVxuXG4gICAgb3Blbih7XG4gICAgICAgIHNpemUsXG4gICAgICAgIHBlbmRpbmcgPSB0cnVlLFxuICAgICAgICBjbGVhckNvbnRlbnQgPSB0cnVlLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBwZW5kaW5nO1xuXG4gICAgICAgIGlmIChzaXplKSB7XG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsZWFyQ29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jbGVhckNvbnRlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG1vZGFsLmZvdW5kYXRpb24oJ3JldmVhbCcsICdvcGVuJyk7XG4gICAgfVxuXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIHRoaXMuJG1vZGFsLmZvdW5kYXRpb24oJ3JldmVhbCcsICdjbG9zZScpO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbnRlbnQoY29udGVudCwgeyB3cmFwID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgICAgIGxldCAkY29udGVudCA9ICQoY29udGVudCk7XG5cbiAgICAgICAgaWYgKHdyYXApIHtcbiAgICAgICAgICAgICRjb250ZW50ID0gd3JhcE1vZGFsQm9keShjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGVuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLiRjb250ZW50Lmh0bWwoJGNvbnRlbnQpO1xuXG4gICAgICAgIHJlc3RyYWluQ29udGVudEhlaWdodCh0aGlzLiRjb250ZW50KTtcbiAgICAgICAgZm91bmRhdGlvbih0aGlzLiRjb250ZW50KTtcbiAgICB9XG5cbiAgICBjbGVhckNvbnRlbnQoKSB7XG4gICAgICAgIHRoaXMuJGNvbnRlbnQuaHRtbCgnJyk7XG4gICAgfVxuXG4gICAgb25Nb2RhbENsb3NlKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoYm9keUFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBvbk1vZGFsQ2xvc2VkKCkge1xuICAgICAgICB0aGlzLnNpemUgPSB0aGlzLmRlZmF1bHRTaXplO1xuICAgIH1cblxuICAgIG9uTW9kYWxPcGVuKCkge1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoYm9keUFjdGl2ZUNsYXNzKTtcbiAgICB9XG5cbiAgICBvbk1vZGFsT3BlbmVkKCkge1xuICAgICAgICByZXN0cmFpbkNvbnRlbnRIZWlnaHQodGhpcy4kY29udGVudCk7XG4gICAgfVxufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBvZiBtb2RhbHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXVxuICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnNpemVdXG4gKiBAcmV0dXJucyB7YXJyYXl9XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsRmFjdG9yeShzZWxlY3RvciA9ICdbZGF0YS1yZXZlYWxdJywgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJG1vZGFscyA9ICQoc2VsZWN0b3IsIG9wdGlvbnMuJGNvbnRleHQpO1xuXG4gICAgcmV0dXJuICRtb2RhbHMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkbW9kYWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9ICdtb2RhbEluc3RhbmNlJztcbiAgICAgICAgY29uc3QgY2FjaGVkTW9kYWwgPSAkbW9kYWwuZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZE1vZGFsIGluc3RhbmNlb2YgTW9kYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRNb2RhbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCRtb2RhbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgJG1vZGFsLmRhdGEoaW5zdGFuY2VLZXksIG1vZGFsKTtcblxuICAgICAgICByZXR1cm4gbW9kYWw7XG4gICAgfSkudG9BcnJheSgpO1xufVxuXG4vKlxuICogUmV0dXJuIHRoZSBkZWZhdWx0IHBhZ2UgbW9kYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlZmF1bHRNb2RhbCgpIHtcbiAgICByZXR1cm4gbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXTtcbn1cblxuLypcbiAqIFJldHVybiB0aGUgZGVmYXVsdCBhbGVydCBtb2RhbFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWxlcnRNb2RhbCgpIHtcbiAgICByZXR1cm4gbW9kYWxGYWN0b3J5KCcjYWxlcnQtbW9kYWwnKVswXTtcbn1cblxuLypcbiAqIERpc3BsYXkgdGhlIGdpdmVuIG1lc3NhZ2UgaW4gdGhlIGRlZmF1bHQgYWxlcnQgbW9kYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGVydE1vZGFsKG1lc3NhZ2UpIHtcbiAgICBjb25zdCBtb2RhbCA9IGFsZXJ0TW9kYWwoKTtcbiAgICBtb2RhbC5vcGVuKCk7XG4gICAgbW9kYWwudXBkYXRlQ29udGVudChgPHNwYW4+JHttZXNzYWdlfTwvc3Bhbj5gKTtcbn1cbiIsImNvbnN0IHJldmVhbENsb3NlQXR0ciA9ICdyZXZlYWxDbG9zZSc7XG5jb25zdCByZXZlYWxDbG9zZVNlbGVjdG9yID0gYFtkYXRhLSR7cmV2ZWFsQ2xvc2VBdHRyfV1gO1xuY29uc3QgcmV2ZWFsU2VsZWN0b3IgPSAnW2RhdGEtcmV2ZWFsXSc7XG5cbmNsYXNzIFJldmVhbENsb3NlIHtcbiAgICBjb25zdHJ1Y3RvcigkYnV0dG9uKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbiA9ICRidXR0b247XG4gICAgICAgIHRoaXMubW9kYWxJZCA9ICRidXR0b24uZGF0YShyZXZlYWxDbG9zZUF0dHIpO1xuXG4gICAgICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldCBtb2RhbCgpIHtcbiAgICAgICAgbGV0ICRtb2RhbDtcblxuICAgICAgICBpZiAodGhpcy5tb2RhbElkKSB7XG4gICAgICAgICAgICAkbW9kYWwgPSAkKGAjJHt0aGlzLm1vZGFsSWR9YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbW9kYWwgPSB0aGlzLiRidXR0b24ucGFyZW50cyhyZXZlYWxTZWxlY3RvcikuZXEoMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJG1vZGFsLmRhdGEoJ21vZGFsSW5zdGFuY2UnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRidXR0b24ub24oJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJGJ1dHRvbi5vZmYoJ2NsaWNrJywgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHsgbW9kYWwgfSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1vZGFsKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vKlxuICogRXh0ZW5kIGZvdW5kYXRpb24ucmV2ZWFsIHdpdGggdGhlIGFiaWxpdHkgdG8gY2xvc2UgYSBtb2RhbCBieSBjbGlja2luZyBvbiBhbnkgb2YgaXRzIGNoaWxkIGVsZW1lbnRcbiAqIHdpdGggZGF0YS1yZXZlYWwtY2xvc2UgYXR0cmlidXRlLlxuICpcbiAqIEBleGFtcGxlXG4gKlxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj5cbiAqICAgPGJ1dHRvbiBkYXRhLXJldmVhbC1jbG9zZT5Db250aW51ZTwvYnV0dG9uPlxuICogPC9kaXY+XG4gKlxuICogPGRpdiBkYXRhLXJldmVhbCBpZD1cImhlbGxvTW9kYWxcIj48L2Rpdj5cbiAqIDxidXR0b24gZGF0YS1yZXZlYWwtY2xvc2U9XCJoZWxsb01vZGFsXCI+Q29udGludWU8L2J1dHRvbj5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV2ZWFsQ2xvc2VGYWN0b3J5KHNlbGVjdG9yID0gcmV2ZWFsQ2xvc2VTZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGJ1dHRvbnMgPSAkKHNlbGVjdG9yLCBvcHRpb25zLiRjb250ZXh0KTtcblxuICAgIHJldHVybiAkYnV0dG9ucy5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRidXR0b24gPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUtleSA9IGAke3JldmVhbENsb3NlQXR0cn1JbnN0YW5jZWA7XG4gICAgICAgIGNvbnN0IGNhY2hlZEJ1dHRvbiA9ICRidXR0b24uZGF0YShpbnN0YW5jZUtleSk7XG5cbiAgICAgICAgaWYgKGNhY2hlZEJ1dHRvbiBpbnN0YW5jZW9mIFJldmVhbENsb3NlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQnV0dG9uO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IFJldmVhbENsb3NlKCRidXR0b24pO1xuXG4gICAgICAgICRidXR0b24uZGF0YShpbnN0YW5jZUtleSwgYnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=