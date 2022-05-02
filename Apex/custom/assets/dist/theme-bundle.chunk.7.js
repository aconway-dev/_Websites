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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2dpZnQtY2VydGlmaWNhdGUtdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbW9kZWxzL2Zvcm1zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbm9kLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9naWZ0LWNlcnRpZmljYXRlLmpzIl0sIm5hbWVzIjpbImNlcnQiLCJmb3JtcyIsImVtYWlsIiwidmFsdWUiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwibGVuZ3RoIiwibWluTWF4VmFsaWRhdGUiLCJtaW5JbnB1dFNlbGVjdG9yIiwibWF4SW5wdXRTZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJtaW5WYWx1ZSIsInBhcnNlRmxvYXQiLCIkIiwidmFsIiwibWF4VmFsdWUiLCJub2QiLCJjbGFzc2VzIiwiZXJyb3JDbGFzcyIsInN1Y2Nlc3NDbGFzcyIsImVycm9yTWVzc2FnZUNsYXNzIiwiY2hlY2tGdW5jdGlvbnMiLCJHaWZ0Q2VydGlmaWNhdGUiLCJjb250ZXh0IiwiJGNlcnRCYWxhbmNlRm9ybSIsInB1cmNoYXNlTW9kZWwiLCJyZWNpcGllbnROYW1lIiwicmVjaXBpZW50RW1haWwiLCJmb3JtTW9kZWwiLCJzZW5kZXJOYW1lIiwic2VuZGVyRW1haWwiLCJjdXN0b21BbW91bnQiLCJtaW4iLCJtYXgiLCJzZXRBbW91bnQiLCJvcHRpb25zIiwiZm91bmQiLCJmb3JFYWNoIiwib3B0aW9uIiwiJHB1cmNoYXNlRm9ybSIsIiRjdXN0b21BbW91bnRzIiwiZmluZCIsInB1cmNoYXNlVmFsaWRhdG9yIiwic3VibWl0IiwiZGVsYXkiLCIkZWxlbWVudCIsImRhdGEiLCJtaW5Gb3JtYXR0ZWQiLCJtYXhGb3JtYXR0ZWQiLCJhZGQiLCJzZWxlY3RvciIsIm51bWJlclZhbCIsIk51bWJlciIsImVycm9yTWVzc2FnZSIsInJlc3VsdCIsInRvTmFtZSIsInRvRW1haWwiLCJmcm9tTmFtZSIsImZyb21FbWFpbCIsInRyaWdnZXJlZEJ5IiwiY2VydFRoZW1lIiwiZ2V0IiwiY2hlY2tlZCIsImFncmVlVG9UZXJtcyIsImJhbGFuY2VWYWwiLCJjaGVja0NlcnRCYWxhbmNlVmFsaWRhdG9yIiwib24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJldmVudCIsInN3YWwiLCJ0ZXh0IiwidHlwZSIsInByZXZlbnREZWZhdWx0IiwiY2xpY2siLCJwcmV2aWV3VXJsIiwiY3VycmVudFRhcmdldCIsInNlcmlhbGl6ZSIsImFwaSIsImdldFBhZ2UiLCJlcnIiLCJjb250ZW50IiwicHJldmlld0Vycm9yIiwiaHRtbCIsIndpZHRoIiwiJGJhbGFuY2VGb3JtIiwiYmFsYW5jZVZhbGlkYXRvciIsImdpZnRDZXJ0Q2hlY2tlciIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBZSx5RUFBVUEsSUFBVixFQUFnQjtFQUMzQixJQUFJLE9BQU9BLElBQVAsS0FBZ0IsUUFBcEIsRUFBOEI7SUFDMUIsT0FBTyxLQUFQO0VBQ0gsQ0FIMEIsQ0FLM0I7OztFQUNBLE9BQU8sSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7OztBQ1BEO0FBQUEsSUFBTUMsS0FBSyxHQUFHO0VBQ1ZDLEtBRFUsaUJBQ0pDLEtBREksRUFDRztJQUNULElBQU1DLEVBQUUsR0FBRyxZQUFYO0lBQ0EsT0FBT0EsRUFBRSxDQUFDQyxJQUFILENBQVFGLEtBQVIsQ0FBUDtFQUNILENBSlM7O0VBTVY7QUFDSjtBQUNBO0FBQ0E7QUFDQTtFQUNJRyxRQVhVLG9CQVdESCxLQVhDLEVBV007SUFDWixPQUFPLEtBQUtJLFFBQUwsQ0FBY0osS0FBZCxDQUFQO0VBQ0gsQ0FiUzs7RUFlVjtBQUNKO0FBQ0E7QUFDQTtB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SixDQVpEO0lBYUgsQ0EzQkQ7SUEzSmlCO0VBdUxwQjs7OztTQUVEbkIseUIsR0FBQSxtQ0FBMEJvQixZQUExQixFQUF3QztJQUNwQyxJQUFNQyxnQkFBZ0IsR0FBR3RFLDJEQUFHLENBQUM7TUFDekIyQixNQUFNLEVBQUUwQyxZQUFZLENBQUM1QyxJQUFiLENBQWtCLHNCQUFsQjtJQURpQixDQUFELENBQTVCO0lBSUE2QyxnQkFBZ0IsQ0FBQ3JDLEdBQWpCLENBQXFCO01BQ2pCQyxRQUFRLEVBQUVtQyxZQUFZLENBQUM1QyxJQUFiLENBQWtCLG1DQUFsQixDQURPO01BRWpCaEMsUUFGaUIsb0JBRVJDLEVBRlEsRUFFSkksR0FGSSxFQUVDO1FBQ2RKLEVBQUUsQ0FBQzZFLGtGQUFlLENBQUN6RSxHQUFELENBQWhCLENBQUY7TUFDSCxDQUpnQjtNQUtqQnVDLFlBQVksRUFBRTtJQUxHLENBQXJCO0lBUUEsT0FBT2lDLGdCQUFQO0VBQ0gsQzs7O0VBeE13Q0UscUQiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY2VydCkge1xuICAgIGlmICh0eXBlb2YgY2VydCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIEFkZCBhbnkgY3VzdG9tIGdpZnQgY2VydGlmaWNhdGUgdmFsaWRhdGlvbiBsb2dpYyBoZXJlXG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJjb25zdCBmb3JtcyA9IHtcbiAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZSA9IC9eLitALitcXC4uKy87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICBub3RFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBtaW5NYXhWYWxpZGF0ZShtaW5JbnB1dFNlbGVjdG9yLCBtYXhJbnB1dFNlbGVjdG9yKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoY2IpIHtcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBwYXJzZUZsb2F0KCQobWluSW5wdXRTZWxlY3RvcikudmFsKCkpO1xuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHBhcnNlRmxvYXQoJChtYXhJbnB1dFNlbGVjdG9yKS52YWwoKSk7XG5cbiAgICAgICAgaWYgKG1heFZhbHVlID4gbWluVmFsdWUgfHwgXy5pc05hTihtYXhWYWx1ZSkgfHwgXy5pc05hTihtaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5NYXhWYWxpZGF0ZTtcbiIsImltcG9ydCBub2QgZnJvbSAnbm9kLXZhbGlkYXRlJztcbmltcG9ydCBtaW5NYXhWYWxpZGF0ZSBmcm9tICcuL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZSc7XG5cbi8vIEhvb2sgb3VyIFNDU1MgZnJhbWV3b3JrIGZvcm0gZmllbGQgc3RhdHVzIGNsYXNzZXMgaW50byB0aGUgbm9kIHZhbGlkYXRpb24gc3lzdGVtIGJlZm9yZSB1c2Vcbm5vZC5jbGFzc2VzLmVycm9yQ2xhc3MgPSAnZm9ybS1maWVsZC0tZXJyb3InO1xubm9kLmNsYXNzZXMuc3VjY2Vzc0NsYXNzID0gJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnO1xubm9kLmNsYXNzZXMuZXJyb3JNZXNzYWdlQ2xhc3MgPSAnZm9ybS1pbmxpbmVNZXNzYWdlJztcblxuLy8gUmVnaXN0ZXIgdmFsaWRhdGUgZnVuY3Rpb25zXG5ub2QuY2hlY2tGdW5jdGlvbnNbJ21pbi1tYXgnXSA9IG1pbk1heFZhbGlkYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBub2Q7XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IGdpZnRDZXJ0Q2hlY2tlciBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgZm9ybU1vZGVsIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5pbXBvcnQgeyBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdpZnRDZXJ0aWZpY2F0ZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0ICRjZXJ0QmFsYW5jZUZvcm0gPSAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1iYWxhbmNlJyk7XG5cbiAgICAgICAgY29uc3QgcHVyY2hhc2VNb2RlbCA9IHtcbiAgICAgICAgICAgIHJlY2lwaWVudE5hbWUodmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbC5sZW5ndGg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVjaXBpZW50RW1haWwoLi4uYXJncykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtTW9kZWwuZW1haWwoLi4uYXJncyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VuZGVyTmFtZSh2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsLmxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZW5kZXJFbWFpbCguLi5hcmdzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1Nb2RlbC5lbWFpbCguLi5hcmdzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjdXN0b21BbW91bnQodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlID49IG1pbiAmJiB2YWx1ZSA8PSBtYXg7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0QW1vdW50KHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0ICRwdXJjaGFzZUZvcm0gPSAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjdXN0b21BbW91bnRzID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfYW1vdW50XCJdJyk7XG4gICAgICAgIGNvbnN0IHB1cmNoYXNlVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICBkZWxheTogMzAwLFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJGN1c3RvbUFtb3VudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCAkZWxlbWVudCA9ICRwdXJjaGFzZUZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNlcnRpZmljYXRlX2Ftb3VudFwiXScpO1xuICAgICAgICAgICAgY29uc3QgbWluID0gJGVsZW1lbnQuZGF0YSgnbWluJyk7XG4gICAgICAgICAgICBjb25zdCBtaW5Gb3JtYXR0ZWQgPSAkZWxlbWVudC5kYXRhKCdtaW5Gb3JtYXR0ZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IG1heCA9ICRlbGVtZW50LmRhdGEoJ21heCcpO1xuICAgICAgICAgICAgY29uc3QgbWF4Rm9ybWF0dGVkID0gJGVsZW1lbnQuZGF0YSgnbWF4Rm9ybWF0dGVkJyk7XG5cbiAgICAgICAgICAgIHB1cmNoYXNlVmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV9hbW91bnRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBudW1iZXJWYWwgPSBOdW1iZXIodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW51bWJlclZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IobnVtYmVyVmFsID49IG1pbiAmJiBudW1iZXJWYWwgPD0gbWF4KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYFlvdSBtdXN0IGVudGVyIGEgY2VydGlmaWNhdGUgYW1vdW50IGJldHdlZW4gJHttaW5Gb3JtYXR0ZWR9IGFuZCAke21heEZvcm1hdHRlZH0uYCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cInRvX25hbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwdXJjaGFzZU1vZGVsLnJlY2lwaWVudE5hbWUodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudG9OYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cInRvX2VtYWlsXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5yZWNpcGllbnRFbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC50b0VtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImZyb21fbmFtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHB1cmNoYXNlTW9kZWwuc2VuZGVyTmFtZSh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5mcm9tTmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJmcm9tX2VtYWlsXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHVyY2hhc2VNb2RlbC5zZW5kZXJFbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5mcm9tRW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiY2VydGlmaWNhdGVfdGhlbWVcIl06Zmlyc3Qtb2YtdHlwZScsXG4gICAgICAgICAgICAgICAgdHJpZ2dlcmVkQnk6ICcjZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtIGlucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJjZXJ0aWZpY2F0ZV90aGVtZVwiXTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IodHlwZW9mICh2YWwpID09PSAnc3RyaW5nJyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jZXJ0VGhlbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnI2dpZnQtY2VydGlmaWNhdGUtZm9ybSBpbnB1dFtuYW1lPVwiYWdyZWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsID0gJHB1cmNoYXNlRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiYWdyZWVcIl0nKS5nZXQoMCkuY2hlY2tlZDtcblxuICAgICAgICAgICAgICAgICAgICBjYih2YWwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuYWdyZWVUb1Rlcm1zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJyNnaWZ0LWNlcnRpZmljYXRlLWZvcm0gaW5wdXRbbmFtZT1cImFncmVlMlwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWwgPSAkcHVyY2hhc2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJhZ3JlZTJcIl0nKS5nZXQoMCkuY2hlY2tlZDtcblxuICAgICAgICAgICAgICAgICAgICBjYih2YWwpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuYWdyZWVUb1Rlcm1zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgaWYgKCRjZXJ0QmFsYW5jZUZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBiYWxhbmNlVmFsID0gdGhpcy5jaGVja0NlcnRCYWxhbmNlVmFsaWRhdG9yKCRjZXJ0QmFsYW5jZUZvcm0pO1xuXG4gICAgICAgICAgICAkY2VydEJhbGFuY2VGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgYmFsYW5jZVZhbC5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgICAgIGlmICghYmFsYW5jZVZhbC5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJHB1cmNoYXNlRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICghcHVyY2hhc2VWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQbGVhc2UgY2hlY2sgYWxsIGZpZWxkcyBiZWZvcmUgYWRkaW5nIHRvIGNhcnQnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcjZ2lmdC1jZXJ0aWZpY2F0ZS1wcmV2aWV3JykuY2xpY2soZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgcHVyY2hhc2VWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmICghcHVyY2hhc2VWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdQbGVhc2UgY2hlY2sgYWxsIGZpZWxkcyBiZWZvcmUgcHJldmlld2luZycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwcmV2aWV3VXJsID0gYCR7JChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcmV2aWV3VXJsJyl9JiR7JHB1cmNoYXNlRm9ybS5zZXJpYWxpemUoKX1gO1xuXG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShwcmV2aWV3VXJsLCB7fSwgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQucHJldmlld0Vycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBodG1sOiBjb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDYwMCxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrQ2VydEJhbGFuY2VWYWxpZGF0b3IoJGJhbGFuY2VGb3JtKSB7XG4gICAgICAgIGNvbnN0IGJhbGFuY2VWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkYmFsYW5jZUZvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICB9KTtcblxuICAgICAgICBiYWxhbmNlVmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJGJhbGFuY2VGb3JtLmZpbmQoJ2lucHV0W25hbWU9XCJnaWZ0Y2VydGlmaWNhdGVjb2RlXCJdJyksXG4gICAgICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XG4gICAgICAgICAgICAgICAgY2IoZ2lmdENlcnRDaGVja2VyKHZhbCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgY2VydGlmaWNhdGUgY29kZS4nLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYmFsYW5jZVZhbGlkYXRvcjtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9