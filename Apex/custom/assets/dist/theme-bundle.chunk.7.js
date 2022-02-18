(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  } // Add any custom gift certificate validation logic here


  return true;
});

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

/***/ "./assets/js/theme/gift-certificate.js":
/*!*********************************************!*\
  !*** ./assets/js/theme/gift-certificate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GiftCertificate; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);




function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var GiftCertificate = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(GiftCertificate, _PageManager);

  function GiftCertificate(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    var $certBalanceForm = $('#gift-certificate-balance');
    var purchaseModel = {
      recipientName: function recipientName(val) {
        return val.length;
      },
      recipientEmail: function recipientEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_6__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
      },
      senderName: function senderName(val) {
        return val.length;
      },
      senderEmail: function senderEmail() {
        return _common_models_forms__WEBPACK_IMPORTED_MODULE_6__["default"].email.apply(_common_models_forms__WEBPACK_IMPORTED_MODULE_6__["default"], arguments);
      },
      customAmount: function customAmount(value, min, max) {
        return value && value >= min && value <= max;
      },
      setAmount: function setAmount(value, options) {
        var found = false;
        options.forEach(function (option) {
          if (option === value) {
            found = true;
            return false;
          }
        });
        return found;
      }
    };
    var $purchaseForm = $('#gift-certificate-form');
    var $customAmounts = $purchaseForm.find('input[name="certificate_amount"]');
    var purchaseValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: '#gift-certificate-form input[type="submit"]',
      delay: 300
    });

    if ($customAmounts.length) {
      var $element = $purchaseForm.find('input[name="certificate_amount"]');
      var min = $element.data('min');
      var minFormatted = $element.data('minFormatted');
      var max = $element.data('max');
      var maxFormatted = $element.data('maxFormatted');
      purchaseValidator.add({
        selector: '#gift-certificate-form input[name="certificate_amount"]',
        validate: function validate(cb, val) {
          var numberVal = Number(val);

          if (!numberVal) {
            cb(false);
          }

          cb(numberVal >= min && numberVal <= max);
        },
        errorMessage: "You must enter a certificate amount between " + minFormatted + " and " + maxFormatted + "."
      });
    }

    purchaseValidator.add([{
      selector: '#gift-certificate-form input[name="to_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientName(val);
        cb(result);
      },
      errorMessage: _this.context.toName
    }, {
      selector: '#gift-certificate-form input[name="to_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.recipientEmail(val);
        cb(result);
      },
      errorMessage: _this.context.toEmail
    }, {
      selector: '#gift-certificate-form input[name="from_name"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderName(val);
        cb(result);
      },
      errorMessage: _this.context.fromName
    }, {
      selector: '#gift-certificate-form input[name="from_email"]',
      validate: function validate(cb, val) {
        var result = purchaseModel.senderEmail(val);
        cb(result);
      },
      errorMessage: _this.context.fromEmail
    }, {
      selector: '#gift-certificate-form input[name="certificate_theme"]:first-of-type',
      triggeredBy: '#gift-certificate-form input[name="certificate_theme"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="certificate_theme"]:checked').val();
        cb(typeof val === 'string');
      },
      errorMessage: _this.context.certTheme
    }, {
      selector: '#gift-certificate-form input[name="agree"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }, {
      selector: '#gift-certificate-form input[name="agree2"]',
      validate: function validate(cb) {
        var val = $purchaseForm.find('input[name="agree2"]').get(0).checked;
        cb(val);
      },
      errorMessage: _this.context.agreeToTerms
    }]);

    if ($certBalanceForm.length) {
      var balanceVal = _this.checkCertBalanceValidator($certBalanceForm);

      $certBalanceForm.on('submit', function () {
        balanceVal.performCheck();

        if (!balanceVal.areAll('valid')) {
          return false;
        }
      });
    }

    $purchaseForm.on('submit', function (event) {
      purchaseValidator.performCheck();

      if (!purchaseValidator.areAll('valid')) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
          text: 'Please check all fields before adding to cart',
          type: 'error'
        });
        return event.preventDefault();
      }
    });
    $('#gift-certificate-preview').click(function (event) {
      event.preventDefault();
      purchaseValidator.performCheck();

      if (!purchaseValidator.areAll('valid')) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
          text: 'Please check all fields before previewing',
          type: 'error'
        });
        return event.preventDefault();
      }

      var previewUrl = $(event.currentTarget).data('previewUrl') + "&" + $purchaseForm.serialize();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_7__["api"].getPage(previewUrl, {}, function (err, content) {
        if (err) {
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            text: _this.context.previewError,
            type: 'error'
          });
        } else {
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default()({
            html: content,
            width: 600
          });
        }
      });
    });
    return _this;
  }

  var _proto = GiftCertificate.prototype;

  _proto.checkCertBalanceValidator = function checkCertBalanceValidator($balanceForm) {
    var balanceValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: $balanceForm.find('input[type="submit"]')
    });
    balanceValidator.add({
      selector: $balanceForm.find('input[name="giftcertificatecode"]'),
      validate: function validate(cb, val) {
        cb(Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_5__["default"])(val));
      },
      errorMessage: 'You must enter a certificate code.'
    });
    return balanceValidator;
  };

  return GiftCertificate;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbW9kZWxzL2Zvcm1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9naWZ0LWNlcnRpZmljYXRlLmpzIl0sIm5hbWVzIjpbImNlcnQiLCJmb3JtcyIsImVtYWlsIiwidmFsdWUiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwibGVuZ3RoIiwibWluTWF4VmFsaWRhdGUiLCJtaW5JbnB1dFNlbGVjdG9yIiwibWF4SW5wdXRTZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJtaW5WYWx1ZSIsInBhcnNlRmxvYXQiLCIkIiwidmFsIiwibWF4VmFsdWUiLCJub2QiLCJjbGFzc2VzIiwiZXJyb3JDbGFzcyIsInN1Y2Nlc3NDbGFzcyIsImVycm9yTWVzc2FnZUNsYXNzIiwiY2hlY2tGdW5jdGlvbnMiLCJHaWZ0Q2VydGlmaWNhdGUiLCJjb250ZXh0IiwiJGNlcnRCYWxhbmNlRm9ybSIsInB1cmNoYXNlTW9kZWwiLCJyZWNpcGllbnROYW1lIiwicmVjaXBpZW50RW1haWwiLCJmb3JtTW9kZWwiLCJzZW5kZXJOYW1lIiwic2VuZGVyRW1haWwiLCJjdXN0b21BbW91bnQiLCJtaW4iLCJtYXgiLCJzZXRBbW91bnQiLCJvcHRpb25zIiwiZm91bmQiLCJmb3JFYWNoIiwib3B0aW9uIiwiJHB1cmNoYXNlRm9ybSIsIiRjdXN0b21BbW91bnRzIiwiZmluZCIsInB1cmNoYXNlVmFsaWRhdG9yIiwic3VibWl0IiwiZGVsYXkiLCIkZWxlbWVudCIsImRhdGEiLCJtaW5Gb3JtYXR0ZWQiLCJtYXhGb3JtYXR0ZWQiLCJhZGQiLCJzZWxlY3RvciIsIm51bWJlclZhbCIsIk51bWJlciIsImVycm9yTWVzc2FnZSIsInJlc3VsdCIsInRvTmFtZSIsInRvRW1haWwiLCJmcm9tTmFtZSIsImZyb21FbWFpbCIsInRyaWdnZXJlZEJ5IiwiY2VydFRoZW1lIiwiZ2V0IiwiY2hlY2tlZCIsImFncmVlVG9UZXJtcyIsImJhbGFuY2VWYWwiLCJjaGVja0NlcnRCYWxhbmNlVmFsaWRhdG9yIiwib24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJldmVudCIsInN3YWwiLCJ0ZXh0IiwidHlwZSIsInByZXZlbnREZWZhdWx0IiwiY2xpY2siLCJwcmV2aWV3VXJsIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJjb250ZW50IiwicHJldmlld0Vycm9yIiwiaHRtbCIsIndpZHRoIiwiJGJhbGFuY2VGb3JtIiwiYmFsYW5jZVZhbGlkYXRvciIsImdpZnRDZXJ0Q2hlY2tlciIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSx5RUFBVUEsSUFBVixFQUFnQjtBQUMzQixNQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7QUFDMUIsV0FBTyxLQUFQO0FBQ0gsR0FIMEIsQ0FLM0I7OztBQUNBLFNBQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ1BEO0FBQUEsSUFBTUMsS0FBSyxHQUFHO0FBQ1ZDLE9BRFUsaUJBQ0pDLEtBREksRUFDRztBQUNULFFBQU1DLEVBQUUsR0FBRyxZQUFYO0FBQ0EsV0FBT0EsRUFBRSxDQUFDQyxJQUFILENBQVFGLEtBQVIsQ0FBUDtBQUNILEdBSlM7O0FBTVY7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNJRyxVQVhVLG9CQVdESCxLQVhDLEVBV007QUFDWixXQUFPLEtBQUtJLFFBQUwsQ0FBY0osS0FBZCxDQUFQO0FBQ0gsR0FiUzs7QUFlVjtBQUNKO0FBQ0E7QUFDQTtB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RTtBQUZOLFdBQUQsQ0FBSjtBQUlIO0FBQ0osT0FaRDtBQWFILEtBM0JEO0FBM0ppQjtBQXVMcEI7Ozs7U0FFRG5CLHlCLEdBQUEsbUNBQTBCb0IsWUFBMUIsRUFBd0M7QUFDcEMsUUFBTUMsZ0JBQWdCLEdBQUd0RSwyREFBRyxDQUFDO0FBQ3pCMkIsWUFBTSxFQUFFMEMsWUFBWSxDQUFDNUMsSUFBYixDQUFrQixzQkFBbEI7QUFEaUIsS0FBRCxDQUE1QjtBQUlBNkMsb0JBQWdCLENBQUNyQyxHQUFqQixDQUFxQjtBQUNqQkMsY0FBUSxFQUFFbUMsWUFBWSxDQUFDNUMsSUFBYixDQUFrQixtQ0FBbEIsQ0FETztBQUVqQmhDLGNBRmlCLG9CQUVSQyxFQUZRLEVBRUpJLEdBRkksRUFFQztBQUNkSixVQUFFLENBQUM2RSxrRkFBZSxDQUFDekUsR0FBRCxDQUFoQixDQUFGO0FBQ0gsT0FKZ0I7QUFLakJ1QyxrQkFBWSxFQUFFO0FBTEcsS0FBckI7QUFRQSxXQUFPaUMsZ0JBQVA7QUFDSCxHOzs7RUF4TXdDRSxxRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjZXJ0KSB7XG4gICAgaWYgKHR5cGVvZiBjZXJ0ICE9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQWRkIGFueSBjdXN0b20gZ2lmdCBjZXJ0aWZpY2F0ZSB2YWxpZGF0aW9uIGxvZ2ljIGhlcmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImNvbnN0IGZvcm1zID0ge1xuICAgIGVtYWlsKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHJlID0gL14uK0AuK1xcLi4rLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgYSBwYXNzd29yZCBmaWVsZFxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHBhc3N3b3JkKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdEVtcHR5KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogdmFsaWRhdGVzIGlmIGEgZmllbGQgaXMgZW1wdHlcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKlxuICAgICAqL1xuICAgIG5vdEVtcHR5KHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5sZW5ndGggPiAwO1xuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtcztcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uIG1pbk1heFZhbGlkYXRlKG1pbklucHV0U2VsZWN0b3IsIG1heElucHV0U2VsZWN0b3IpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShjYikge1xuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IHBhcnNlRmxvYXQoJChtaW5JbnB1dFNlbGVjdG9yKS52YWwoKSk7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gcGFyc2VGbG9hdCgkKG1heElucHV0U2VsZWN0b3IpLnZhbCgpKTtcblxuICAgICAgICBpZiAobWF4VmFsdWUgPiBtaW5WYWx1ZSB8fCBfLmlzTmFOKG1heFZhbHVlKSB8fCBfLmlzTmFOKG1pblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNiKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbk1heFZhbGlkYXRlO1xuIiwiaW1wb3J0IG5vZCBmcm9tICdub2QtdmFsaWRhdGUnO1xuaW1wb3J0IG1pbk1heFZhbGlkYXRlIGZyb20gJy4vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlJztcblxuLy8gSG9vayBvdXIgU0NTUyBmcmFtZXdvcmsgZm9ybSBmaWVsZCBzdGF0dXMgY2xhc3NlcyBpbnRvIHRoZSBub2QgdmFsaWRhdGlvbiBzeXN0ZW0gYmVmb3JlIHVzZVxubm9kLmNsYXNzZXMuZXJyb3JDbGFzcyA9ICdmb3JtLWZpZWxkLS1lcnJvcic7XG5ub2QuY2xhc3Nlcy5zdWNjZXNzQ2xhc3MgPSAnZm9ybS1maWVsZC0tc3VjY2Vzcyc7XG5ub2QuY2xhc3Nlcy5lcnJvck1lc3NhZ2VDbGFzcyA9ICdmb3JtLWlubGluZU1lc3NhZ2UnO1xuXG4vLyBSZWdpc3RlciB2YWxpZGF0ZSBmdW5jdGlvbnNcbm5vZC5jaGVja0Z1bmN0aW9uc1snbWluLW1heCddID0gbWluTWF4VmFsaWRhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZDtcbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgZ2lmdENlcnRDaGVja2VyIGZyb20gJy4vY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yJztcbmltcG9ydCBmb3JtTW9kZWwgZnJvbSAnLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2lmdENlcnRpZmljYXRlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgJGNlcnRCYWxhbmNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWJhbGFuY2UnKTtcblxuICAgICAgICBjb25zdCBwdXJjaGFzZU1vZGVsID0ge1xuICAgICAgICAgICAgcmVjaXBpZW50TmFtZSh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWNpcGllbnRFbWFpbCguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1Nb2RlbC5lbWFpbCguLi5hcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW5kZXJOYW1lKHZhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWwubGVuZ3RoO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbmRlckVtYWlsKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybU1vZGVsLmVtYWlsKC4uLmFyZ3MpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1c3RvbUFtb3VudCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUgPj0gbWluICYmIHZhbHVlIDw9IG1heDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRBbW91bnQodmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb24gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgJHB1cmNoYXNlRm9ybSA9ICQoJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGN1c3RvbUFtb3VudHMgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nKTtcbiAgICAgICAgY29uc3QgcHVyY2hhc2VWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIGRlbGF5OiAzMDAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkY3VzdG9tQW1vdW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0ICRlbGVtZW50ID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyk7XG4gICAgICAgICAgICBjb25zdCBtaW4gPSAkZWxlbWVudC5kYXRhKCdtaW4nKTtcbiAgICAgICAgICAgIGNvbnN0IG1pbkZvcm1hdHRlZCA9ICRlbGVtZW50LmRhdGEoJ21pbkZvcm1hdHRlZCcpO1xuICAgICAgICAgICAgY29uc3QgbWF4ID0gJGVsZW1lbnQuZGF0YSgnbWF4Jyk7XG4gICAgICAgICAgICBjb25zdCBtYXhGb3JtYXR0ZWQgPSAkZWxlbWVudC5kYXRhKCdtYXhGb3JtYXR0ZWQnKTtcblxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbnVtYmVyVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBgWW91IG11c3QgZW50ZXIgYSBjZXJ0aWZpY2F0ZSBhbW91bnQgYmV0d2VlbiAke21pbkZvcm1hdHRlZH0gYW5kICR7bWF4Rm9ybWF0dGVkfS5gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fbmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwucmVjaXBpZW50TmFtZSh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC50b05hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwidG9fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnJlY2lwaWVudEVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnRvRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiZnJvbV9uYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5zZW5kZXJOYW1lKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21OYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImZyb21fZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnNlbmRlckVtYWlsKHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmZyb21FbWFpbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXTpmaXJzdC1vZi10eXBlJyxcbiAgICAgICAgICAgICAgICB0cmlnZ2VyZWRCeTogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX3RoZW1lXCJdOmNoZWNrZWQnKS52YWwoKTtcblxuICAgICAgICAgICAgICAgICAgICBjYih0eXBlb2YgKHZhbCkgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmNlcnRUaGVtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJhZ3JlZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZ3JlZVwiXScpLmdldCgwKS5jaGVja2VkO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5hZ3JlZVRvVGVybXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiYWdyZWUyXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImFncmVlMlwiXScpLmdldCgwKS5jaGVja2VkO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHZhbCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5hZ3JlZVRvVGVybXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICBpZiAoJGNlcnRCYWxhbmNlRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGJhbGFuY2VWYWwgPSB0aGlzLmNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGNlcnRCYWxhbmNlRm9ybSk7XG5cbiAgICAgICAgICAgICRjZXJ0QmFsYW5jZUZvcm0ub24oJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICBiYWxhbmNlVmFsLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFiYWxhbmNlVmFsLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHVyY2hhc2VGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKCFwdXJjaGFzZVZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1BsZWFzZSBjaGVjayBhbGwgZmllbGRzIGJlZm9yZSBhZGRpbmcgdG8gY2FydCcsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNnaWZ0LWNlcnRpZmljYXRlLXByZXZpZXcnKS5jbGljayhldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBwdXJjaGFzZVZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKCFwdXJjaGFzZVZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1BsZWFzZSBjaGVjayBhbGwgZmllbGRzIGJlZm9yZSBwcmV2aWV3aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBgJHskKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ3ByZXZpZXdVcmwnKX0mJHskcHVyY2hhc2VGb3JtLnNlcmlhbGl6ZSgpfWA7XG5cbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKHByZXZpZXdVcmwsIHt9LCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5wcmV2aWV3RXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWw6IGNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNjAwLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tDZXJ0QmFsYW5jZVZhbGlkYXRvcigkYmFsYW5jZUZvcm0pIHtcbiAgICAgICAgY29uc3QgYmFsYW5jZVZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICRiYWxhbmNlRm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGJhbGFuY2VWYWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAkYmFsYW5jZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImdpZnRjZXJ0aWZpY2F0ZWNvZGVcIl0nKSxcbiAgICAgICAgICAgIHZhbGlkYXRlKGNiLCB2YWwpIHtcbiAgICAgICAgICAgICAgICBjYihnaWZ0Q2VydENoZWNrZXIodmFsKSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBjZXJ0aWZpY2F0ZSBjb2RlLicsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBiYWxhbmNlVmFsaWRhdG9yO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=