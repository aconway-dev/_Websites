(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/isNaN.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isNaN.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isNumber = __webpack_require__(/*! ./isNumber */ "./node_modules/lodash/isNumber.js");

/**
 * Checks if `value` is `NaN`.
 *
 * **Note:** This method is based on
 * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
 * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
 * `undefined` and other non-number values.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 * @example
 *
 * _.isNaN(NaN);
 * // => true
 *
 * _.isNaN(new Number(NaN));
 * // => true
 *
 * isNaN(undefined);
 * // => true
 *
 * _.isNaN(undefined);
 * // => false
 */
function isNaN(value) {
  // An `NaN` primitive is the only value that is not equal to itself.
  // Perform the `toStringTag` check first to avoid errors with some
  // ActiveX objects in IE.
  return isNumber(value) && value != +value;
}

module.exports = isNaN;


/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/nod-validate/nod.js":
/*!******************************************!*\
  !*** ./node_modules/nod-validate/nod.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_jQuery) {
/**
 *
 *
 * nod v.2.0.12
 * Gorm Casper
 *
 *
 *
 * This is a short breakdown of the code to help you find your way around.
 *
 *
 * An `element` always refer to some input element defined by the user via the
 * `selector` key.
 *
 * A `metric` is the user created objects that is used to add checks to
 * nod.
 *
 * Each `element` will have at most one of a `listener`, a `checker`, a
 * `checkHandler`, and a `domNode` "attached" to it. The `listener` listens
 * for inputs or changes to the `element` and passes the new value on to to the
 * `checker` which performs its checks and passes the the results on to the
 * `checkHandler` which calculates the new state of the `element` which it
 * passes on to the `domNode` which will update the dom.
 *
 * The four main parts, the listener, the checker, the checkHandler, and the
 * domNode all communicate through the `mediator` by firing events identified
 * by a unique id. They do not know of each other's existance, and so no
 * communication flows directly between them.
 *
 * All listeners, checkers, handlers, and domNodes are grouped together in
 * `collections`, which are basically a glorified array that makes it easy
 * not to get duplicate items for each element (for instance two listeners
 * listening to the same element).
 *
 * The communication flow looks like this:
 * listener -> checker -> checkHandler -> domNode
 *
 * Between each part, you have the mediator.
 *
 *
 * `Metrics` are added by the user, which sets up the system above. Notice
 * that a metric can target multiple elements at once, and that there can
 * be overlaps. One metric definitely does not equal one element or one
 * check.
 *
 */

function nod (config) {
    var form,
        configuration   = {},
        mediator        = nod.makeMediator(),
        eventEmitter    = nod.makeEventEmitter(mediator),

        // Creating (empty) collections
        listeners       = nod.makeCollection(nod.makeListener),
        checkers        = nod.makeCollection(nod.makeChecker),
        checkHandlers   = nod.makeCollection(nod.makeCheckHandler),
        domNodes        = nod.makeCollection(nod.makeDomNode);

    /**
     * Entry point for the user. The user passes in an array of metrics (an
     * object containing a selector, a validate string/function, etc.) and it
     * gets processed from here.
     *
     * This function, is mostly about cleaning up what the user passed us.
     */
    function addMetrics (metrics) {
        // Make sure we are dealing with an array of metrics.
        var arrayMetrics = Array.isArray(metrics) ? metrics : [metrics];

        arrayMetrics.forEach(function (metric) {
            var validateArray, errorMessageArray,
                notArray = !Array.isArray(metric.validate);

            // If the 'validate' is not an array, then we're good to go.
            if (notArray) {
                addMetric(metric);

            // If it is an array (e.g., validate: ['email', 'max-length:10']),
            // then we need to split them up into multiple metrics, and add
            // them individually.
            } else {
                if (!Array.isArray(metric.errorMessage)) {
                    var errorMsg = 'If you pass in `validate:...` as an ' +
                        ' array, then `errorMessage:...` also needs to be an ' +
                        ' array. "' + metric.validate + '", and "' +
                        metric.errorMessage + '"';

                    throw Error(errorMsg);
                }

                // We store each as arrays, and then run through them,
                // overwriting each of the keys accordingly.
                validateArray     = metric.validate;
                errorMessageArray = metric.errorMessage;

                validateArray.forEach(function (validate, i) {
                    // Overwrite the array with the individual 'validate' and
                    // 'errorMessage'.
                    metric.validate     = validate;
                    metric.errorMessage = errorMessageArray[i];

                    addMetric(metric);
                });
            }
        });
    }

    function addMetric (metric) {
        var specialTriggers = [],

            // The function that will check the value of the element.
            checkFunction = nod.getCheckFunction(metric),

            // A list of elements that this metric will target.
            elements = nod.getElements(metric.selector),

            // A "set" here, refers to an obj with one listener, one checker,
            // and one checkHandler. Only every one for each element in the
            // dom.
            metricSets = elements.map(function (element) {
                return {
                    listener:       listeners.findOrMake(element,
                                                         mediator,
                                                         metric.triggerEvents,
                                                         configuration),
                    checker:        checkers.findOrMake(element, mediator),
                    checkHandler:   checkHandlers.findOrMake(element,
                                                             mediator,
                                                             configuration),
                    domNode:        domNodes.findOrMake(element,
                                                        mediator,
                                                        configuration)
                };
            });

        // Saved for later reference in case the user has a `tap` function
        // defined.
        checkFunction.validate = (typeof metric.validate === 'function')
            ? metric.validate.toString()
            : metric.validate;

        // Special cases. These `validates` affect each other, and their state
        // needs to update each time either of the elements' values change.
        if (metric.validate === 'one-of'
            || metric.validate === 'only-one-of'
            || metric.validate === 'some-radio') {
            specialTriggers.push(metric.selector);
        }

        if (typeof metric.validate === 'string'
            && metric.validate.indexOf('same-as') > -1) {
            specialTriggers.push(metric.validate.split(':')[1]);
        }

        // Helper function, used in the loop below.
        function subscribeToTriggers (checker, selector) {
            var triggerElements = nod.getElements(selector);

            triggerElements.forEach(function (element) {
                var listener = listeners.findOrMake(element,
                                                    mediator,
                                                    null,
                                                    configuration);

                checker.subscribeTo(listener.id);
            });
        }

        // Here we set up the "connections" between each of our main parts.
        // They communicate only through the mediator.
        metricSets.forEach(function (metricSet) {
            // :: Listener -> Checker

            // We want our checker to listen to the listener. A listener has an
            // id, which it uses when it fires events to the mediator (which
            // was set up when the listener was created).
            metricSet.checker.subscribeTo(metricSet.listener.id);

            // If the user set a `triggeredBy`, the checker need to listen to
            // changes on this element as well.
            // Same goes for special triggers that we set.
            subscribeToTriggers(metricSet.checker, metric.triggeredBy);
            subscribeToTriggers(metricSet.checker, specialTriggers);

            // :: Checker -> checkHandler

            var checkId = nod.unique();

            // We add the check function as one to be checked when the user
            // inputs something. (There might be more than this one).
            metricSet.checker.addCheck(checkFunction, checkId);

            // We want the check handler to listen for results from the checker
            metricSet.checkHandler.subscribeTo(checkId,
                                               metric.errorMessage,
                                               metric.defaultStatus);

            if (configuration.noDom) {
                eventEmitter.subscribe(metricSet.checkHandler.id);
            } else {
                // :: checkHandler -> domNode

                // The checkHandler has its own id (and only ever needs one), so
                // we just ask the domNode to listen for that.
                metricSet.domNode.subscribeTo(metricSet.checkHandler.id);
            }
        });

        // After all is done, we may have to enable/disable a submit button.
        toggleSubmit();
    }

    /**
     * If a form is added, we listen for submits, and if the has also set
     * `preventSubmit` in the configuration, then we stop the commit from
     * happening unless all the elements are valid.
     */
    function addForm (selector) {
        var form = nod.getElement(selector);

        form.addEventListener('submit', possiblePreventSubmit, false);
    }

    // Prevent function, used above
    function possiblePreventSubmit (event) {
        if (configuration.preventSubmit && !areAll(nod.constants.VALID)) {
            event.preventDefault();

            // Show errors to the user
            checkers.forEach(function (checker) {
                checker.performCheck({
                    event: event
                });
            });

            // Focus on the first invalid element
            for (var i = 0, len = checkHandlers.length; i < len; i++) {
                var checkHandler = checkHandlers[i];

                if (checkHandler.getStatus().status === nod.constants.INVALID) {
                    checkHandler.element.focus();
                    break;
                }
            }
        }
    }

    /**
     * Removes elements completely.
     */
    function removeElement (selector) {
        var elements = nod.getElements(selector);

        elements.forEach(function (element) {
            listeners.removeItem(element);
            checkers.removeItem(element);
            checkHandlers.removeItem(element);
            domNodes.removeItem(element);
        });
    }

    /**
     * configure
     *
     * Changes the configuration object used throughout the code for classes,
     * delays, messages, etc.
     *
     * It can either be called with a key/value pair (two arguments), or with
     * an object with key/value pairs.
     */
    function configure (key, value) {
        var attributes = {};

        if (arguments.length > 1) {
            attributes[key] = value;
        } else {
            attributes = key;
        }

        for (var k in attributes) {
            configuration[k] = attributes[k];
        }

        if (attributes.submit || attributes.disableSubmit) {
            toggleSubmit();
        }

        if (attributes.form) {
            addForm(attributes.form);
        }
    }

    /**
     * toggleSubmit
     *
     * Toggles the submit button (enabled if every element is valid, otherwise
     * disabled).
     */
    function toggleSubmit () {
        if (configuration.submit && configuration.disableSubmit) {
            nod.getElements(configuration.submit).forEach(function (submitBtn) {
                submitBtn.disabled = !areAll(nod.constants.VALID);
            });
        }
    }

    /**
     * Listen to all checks, and if the user has set in the configuration to
     * enable/disabled the submit button, we do that.
     */
    mediator.subscribe('all', toggleSubmit);

    function areAll (status) {
        for (var i = 0, len = checkHandlers.length; i < len; i++) {
            if (checkHandlers[i].getStatus().status !== status) {
                return false;
            }
        }

        return true;
    }

    function setMessageOptions (options) {
        options = Array.isArray(options) ? options : [options];

        options.forEach(function (option) {
            var elements = nod.getElements(option.selector);

            elements.forEach(function (element) {
                var domNode = domNodes.findOrMake(element,
                                                  mediator,
                                                  configuration);

                domNode.setMessageOptions(option.parent, option.errorSpan);
            });
        });
    }

    /**
     * Listen to all checks and allow the user to listen in, if he set a `tap`
     * function in the configuration.
     */
    mediator.subscribe('all', function (options) {
        if (typeof configuration.tap === 'function'
            && options.type === 'check') {
            configuration.tap(options);
        }
    });

    function getStatus (selector, showErrorMessage) {
        var element = nod.getElement(selector),
            status  = checkHandlers.findOrMake(element).getStatus();

        return showErrorMessage ? status : status.status;
    }

    function performCheck (selector) {
        var cs = selector
            ? nod.getElements(selector).map(checkers.findOrMake)
            : checkers;

        cs.forEach(function (checker) {
            checker.performCheck();
        });
    }

    function setInvalid (selector, errorMessage) {
        var element = nod.getElement(selector),
            domNode  = domNodes.findOrMake(element);

        domNode.set({
            result: nod.constants.INVALID,
            errorMessage: errorMessage || ''
        });
    }

    function setValid (selector) {
        var element = nod.getElement(selector),
            domNode  = domNodes.findOrMake(element);

        domNode.set({
            result: nod.constants.VALID,
            errorMessage: ''
        });
    }

    function setAllNodeValid () {
        for (var i = 0, len = domNodes.length; i < len; i++) {
            setValid(domNodes[i].element);
        }
    }

    /**
     * Internal functions that are exposed to the public.
     */
    var nodInstace = {
        add:                    addMetrics,
        remove:                 removeElement,
        areAll:                 areAll,
        getStatus:              getStatus,
        configure:              configure,
        setMessageOptions:      setMessageOptions,
        performCheck:           performCheck,
        setInvalid:             setInvalid,
        setValid:               setValid,
        setAllNodeValid:        setAllNodeValid
    };

    if (config) {
        nodInstace.configure(config);
    }

    return nodInstace;
}

nod.constants = {
    VALID:          'valid',
    INVALID:        'invalid',
    UNCHECKED:      'unchecked',

    DELAY:          700
};

nod.classes = {
    successClass:         'nod-success',
    successMessageClass:  'nod-success-message',
    errorClass:           'nod-error',
    errorMessageClass:    'nod-error-message'
};

// Helper function to create unique id's
nod.unique = (function () {
    var uniqueCounter = 0;

    return function () {
        return uniqueCounter++;
    };
})();

/** makeMediator
 *
 * Minimal implementation of a mediator pattern, used for communication between
 * checkers and checkHandlers (checkers fires events which handlers can
 * subscribe to). Unique ID's are used to tell events apart.
 *
 * Subscribing to 'all' will give you all results from all checks.
 */
nod.makeMediator = function () {
    var subscribers = [],
        all = [];

    return {
        subscribe: function subscribe (id, fn) {
            if (id === 'all') {
                all.push(fn);
            } else {
                if (!subscribers[id]) {
                    subscribers[id] = [];
                }

                if (subscribers[id].indexOf(fn) === -1) {
                    subscribers[id].push(fn);
                }
            }
        },

        fire: function fire (options) {
            var subscribedFunctions = subscribers[options.id].concat(all);

            subscribedFunctions.forEach(function (subscribedFunction) {
                subscribedFunction(options);
            });
        }
    };
};

nod.findCollectionIndex = function (collection, element) {
    for (var i in collection) {
        if (collection[i].element === element) {
            return i;
        }
    }

    return -1;
};

/**
 * makeCollection
 *
 * A minimal implementation of a "collection", inspired by collections from
 * BackboneJS. Used by listeners, checkers, and checkHandlers.
 */
nod.makeCollection = function (maker) {
    var collection = [];

    collection.findOrMake = function (element) {
        var index = nod.findCollectionIndex(collection, element);

        // Found
        if (index !== -1) {
            return collection[index];
        }

        // None found, let's make one then.
        var item = maker.apply(null, arguments);

        collection.push(item);

        return item;
    };

    collection.removeItem = function (element) {
        var index = nod.findCollectionIndex(collection, element),
            item = collection[index];

        if (!item) {
            return;
        }

        // Call .dispose() if it exists
        if (typeof item.dispose === 'function') {
            item.dispose();
        }

        // Remove item
        collection.splice(index, 1);
    };

    return collection;
};

/**
 * makeListener
 *
 * Takes care of listening to changes to its element and fire them off as
 * events on the mediator for checkers to listen to.
 */
nod.makeListener = function (element, mediator, triggerEvents, configuration) {
    var id = nod.unique(),
        $element;

    function changed (event) {
        mediator.fire({
            id:     id,
            event:  event,
            type:   'change'
        });
    }

    element.addEventListener('input', changed, false);
    element.addEventListener('change', changed, false);
    element.addEventListener('blur', changed, false);

    if (configuration.jQuery) {
        $element = configuration.jQuery(element);

        $element.on('propertychange change click keyup input paste', changed);
    }

    if (triggerEvents) {
        triggerEvents = Array.isArray(triggerEvents)
            ? triggerEvents
            : [triggerEvents];

        triggerEvents.forEach(function (eventName) {
            element.addEventListener(eventName, changed, false);
        });
    }

    function dispose () {
        element.removeEventListener('input', changed, false);
        element.removeEventListener('change', changed, false);
        element.removeEventListener('blur', changed, false);

        if ($element) {
            $element.off();
        }

        if (triggerEvents) {
            triggerEvents.forEach(function (eventName) {
                element.removeEventListener(eventName, changed, false);
            });
        }
    }

    return {
        element:    element,
        dispose:    dispose,
        id:         id
    };
};

/**
 * makeChecker
 *
 * An "checker" communicates primarily with the mediator. It listens for input
 * changes (coming from listeners), performs its checks and fires off results
 * back to the mediator for checkHandlers to handle.
 *
 * The checker has a 1 to 1 relationship with an element, an listeners, and an
 * checkHandler; although they may communicate with other "sets" of listeners,
 * checkers and handlers.
 *
 * Checks are added, from the outside, and consists of a checkFunction (see
 * nod.checkFunctions) and a unique id.
 */
nod.makeChecker = function (element, mediator) {
    var checks = [];

    function subscribeTo (id) {
        mediator.subscribe(id, performCheck);
    }

    // Run every check function against the value of the element.
    function performCheck (options) {
        checks.forEach(function (check) {
            check(options || {});
        });
    }

    // Add a check function to the element. The result will be handed off to the
    // mediator (for checkHandlers to evaluate).
    function addCheck (checkFunction, id) {
        function callback (result) {
            mediator.fire({
                id: id,
                type: 'check',
                result: result,
                element: element,
                validate: checkFunction.validate
            });
        }

        checks.push(function (options) {
            // If element.value is undefined, then we might be dealing with
            // another type of element; like <div contenteditable='true'>
            var value = element.value === undefined
                ? element.innerHTML
                : element.value;

            options.element = element;

            checkFunction(callback, value, options);
        });
    }

    return {
        subscribeTo:    subscribeTo,
        addCheck:       addCheck,
        performCheck:   performCheck,
        element:        element
    };
};

/**
 * makeCheckHandler
 *
 * Handles checks coming in from the mediator and takes care of calculating the
 * state and error messages.
 *
 * The checkHandlers lives in one to one with the element parsed in, and listens
 * for (usually) multiple error checks.
 */
nod.makeCheckHandler = function (element, mediator, configuration) {
    var results     = {},
        id          = nod.unique();

    function subscribeTo (id, errorMessage, defaultStatus) {
        // Create a representation of the type of error in the results object.
        if (!results[id]) {
            results[id] = {
                status: defaultStatus || nod.constants.UNCHECKED,
                errorMessage: errorMessage
            };
        }

        // Subscribe to error id.
        mediator.subscribe(id, checkHandler);
    }

    function checkHandler (result) {
        results[result.id].status = result.result
            ? nod.constants.VALID
            : nod.constants.INVALID;

        notifyMediator();
    }

    // Runs through all results to see what kind of feedback to show the user.
    function notifyMediator () {
        var status = getStatus();

        // Event if might be valid we pass along an undefined errorMessage.
        mediator.fire({
            id:             id,
            type:           'result',
            result:         status.status,
            element:        element,
            errorMessage:   status.errorMessage
        });
    }

    function getStatus () {
        var status, errorMessage;

        for (var id in results) {
            status = results[id].status;

            if (results[id].status === nod.constants.INVALID) {
                errorMessage = results[id].errorMessage;
                break;
            }
        }

        return {
            status:        status,
            errorMessage:  errorMessage
        };
    }

    return {
        id:             id,
        subscribeTo:    subscribeTo,
        checkHandler:   checkHandler,
        getStatus:      getStatus,
        element:        element
    };
};

// Helper functions for `makeDomNode`.
nod.hasClass = function (className, el) {
    if (el.classList) {
        return el.classList.contains(className);
    } else {
        var regex = new RegExp('(\\s|^)' + className + '(\\s|$)');
        return !!el.className.match(regex);
    }
};

nod.removeClass = function (className, el) {
    if (el.classList) {
        el.classList.remove(className);
    } else if (nod.hasClass(className, el)) {
        var regex = new RegExp('(?:^|\\s)' + className + '(?!\\S)');
        el.className = el.className.replace(regex, '');
    }
};

nod.addClass = function (className, el) {
    if (el.classList) {
        el.classList.add(className);
    } else if (!nod.hasClass(className, el)) {
        el.className += ' ' + className;
    }
};

nod.getParent = function (element, configuration) {
    var klass = configuration.parentClass;

    if (klass) {
        klass = klass.charAt(0) === '.' ? klass.slice(1) : klass;
        return nod.findParentWithClass(element.parentNode, klass);
    } else {
        return element.parentNode;
    }
};

nod.findParentWithClass = function (parent, klass) {
    // Guard (only the `window` does not have a parent).
    if (!parent.parentNode) {
        return parent;
    }

    // Found it
    if (nod.hasClass(klass, parent)) {
        return parent;
    }

    // Try next parent (recursion)
    return nod.findParentWithClass(parent.parentNode, klass);
};

/**
 * makeDomNode
 *
 * This creates the error/success message behind the input element, as well as
 * takes care of updating classes and taking care of its own state.
 *
 * The dom node is owned by checkHandler, and has a one to one relationship with
 * both the checkHandler and the input element being checked.
 *
 */
nod.makeDomNode = function (element, mediator, configuration) {
    // A 'domNode' consists of two elements: a 'parent', and a 'span'. The
    // parent is given as a paremeter, while the span is created and added as a
    // child to the parent.
    var parent              = nod.getParent(element, configuration),
        _status             = nod.constants.UNCHECKED,
        pendingUpdate       = null,
        span                = document.createElement('span'),
        customSpan          = false;

    span.style.display = 'none';

    if (!configuration.noDom) {
        parent.appendChild(span);
    }

    // Updates the class of the parent to match the status of the element.
    function updateParent (status) {
        var successClass = configuration.successClass
                           || nod.classes.successClass,
            errorClass = configuration.errorClass
                         || nod.classes.errorClass;

        switch (status) {
        case nod.constants.VALID:
            nod.removeClass(errorClass, parent);
            nod.addClass(successClass, parent);
            break;

        case nod.constants.INVALID:
            nod.removeClass(successClass, parent);
            nod.addClass(errorClass, parent);
            break;
        }
    }

    // Updates the text and class according to the status.
    function updateSpan (status, errorMessage) {
        var successMessageClass = configuration.successMessageClass
                                  || nod.classes.successMessageClass,
          errorMessageClass   = configuration.errorMessageClass
                                || nod.classes.errorMessageClass;

        span.style.display = 'none';

        switch (status) {
        case nod.constants.VALID:
            nod.removeClass(errorMessageClass, span);
            nod.addClass(successMessageClass, span);

            if (configuration.successMessage) {
                span.textContent = configuration.successMessage;
                span.style.display = '';
            }

            break;

        case nod.constants.INVALID:
            nod.removeClass(successMessageClass, span);
            nod.addClass(errorMessageClass, span);
            span.textContent = errorMessage;
            span.style.display = '';
            break;
        }
    }

    function set (options) {
        var status              = options.result,
            errorMessage        = options.errorMessage;

        // If the dom is showing an invalid message, we want to update the dom
        // right away.
        if (_status === nod.constants.INVALID || configuration.delay === 0) {
            _status = status;
            updateParent(status);
            updateSpan(status, errorMessage);
        } else {
            // If the dom shows either an unchecked or a valid state we won't
            // rush to tell them they are wrong. Instead we use a method similar
            // to "debouncing" the update
            clearTimeout(pendingUpdate);

            pendingUpdate = setTimeout(function () {
                _status = status;
                updateParent(status);
                updateSpan(status, errorMessage);
                pendingUpdate = null;
            }, configuration.delay || nod.constants.DELAY);
        }
    }

    function subscribeTo (id) {
        mediator.subscribe(id, set);
    }

    function setMessageOptions (parentContainer, message) {
        if (parentContainer) {
            parent = nod.getElement(parentContainer);
        }

        if (message) {
            span.parentNode.removeChild(span);      // Remove old span.
            span = nod.getElement(message);         // Set the new one.
            customSpan = true;                      // So we won't delete it.
        }
    }

    function dispose () {
        // First remove any classes
        nod.removeClass(configuration.errorClass
                        || nod.classes.errorClass, parent);
        nod.removeClass(configuration.successClass
                        || nod.classes.successClass, parent);

        // Then we remove the span if it wasn't one that was set by the user.
        // If `noDom` was used, then there won't be any to remove.
        if (span.parentNode && !customSpan) {
            span.parentNode.removeChild(span);
        }
    }

    return {
        subscribeTo:        subscribeTo,
        element:            element,
        setMessageOptions:  setMessageOptions,
        dispose:            dispose,
        set:                set
    };
};

nod.makeEventEmitter = function (mediator) {
    var customEvent;

    function emit (options) {
        if (CustomEvent) {
            customEvent = new CustomEvent('nod.validation', {detail: options});

            options.element.dispatchEvent(customEvent);
        } else {
            var errorMsg = 'nod.validate tried to fire a custom event, but ' +
                           'the browser does not support CustomEvent\'s';

            throw Error(errorMsg);
        }
    }

    function subscribe (id) {
        mediator.subscribe(id, emit);
    }

    return {
        subscribe: subscribe
    };
};

/**
 * getElement
 *
 * Returns the first element targeted by the selector. (see `getElements`)
 */
nod.getElement = function (selector) {
    return nod.getElements(selector)[0];
};

/**
 * getElements
 *
 * Takes some sort of selector, and returns an array of element(s). The applied
 * selector can be one of:
 *
 * - Css type selector (e.g., ".foo")
 * - A jQuery element (e.g., $('.foo))
 * - A single raw dom element (e.g., document.getElementById('foo'))
 * - A list of raw dom element (e.g., $('.foo').get())
 */
nod.getElements = function (selector) {
    if (!selector) {
        return [];
    }

    // Normal css type selector is assumed
    if (typeof selector === 'string') {
        // If we have jQuery, then we use that to create a dom list for us.
        if (__webpack_provided_window_dot_jQuery) {
            return __webpack_provided_window_dot_jQuery(selector).get();
        }

        // If not, then we do it the manual way.
        var nodeList = document.querySelectorAll(selector);

        return [].map.call(nodeList, function (el) {
            return el;
        });
    }

    // if user gave us jQuery elements
    if (selector.jquery) {
        return selector.get();
    }

    // Raw DOM element
    if (selector.nodeType === 1) {
        return [selector];
    }

    if (Array.isArray(selector)) {
        var result = [];

        selector.forEach(function (sel) {
            var elements = nod.getElements(sel);

            result = result.concat(elements);
        });

        return result;
    }

    throw Error('Unknown type of elements in your `selector`: ' + selector);
};

nod.getCheckFunction = function (metric) {
    if (typeof metric.validate === 'function') {
        return metric.validate;
    }

    if (metric.validate instanceof RegExp) {
        return nod.checkFunctions.regexp(metric.validate);
    }

    var args   = metric.validate.split(':'),
        fnName = args.shift();

    if (fnName === 'one-of' || fnName === 'only-one-of' ||
        fnName === 'same-as' || fnName === 'some-radio') {
        args.push(metric.selector);
    }

    if (typeof nod.checkFunctions[fnName] === 'function') {
        return nod.checkFunctions[fnName].apply(null, args);
    } else {
        var errorMsg = 'Couldn\'t find your validator function "' +
                       fnName + '" for "' + metric.selector + '"';

        throw Error(errorMsg);
    }
};

// Collection of built-in check functions
nod.checkFunctions = {
    'presence': function () {
        return function presence (callback, value) {
            callback(value.length > 0);
        };
    },

    'exact': function (exactValue) {
        return function exact (callback, value) {
            callback(value === exactValue);
        };
    },

    'contains': function (containsValue) {
        return function contains (callback, value) {
            callback(value.indexOf(containsValue) > -1);
        };
    },

    'not': function (exactValue) {
        return function not (callback, value) {
            callback(value !== exactValue);
        };
    },

    'min-length': function (minimumLength) {
        return function minLength (callback, value) {
            callback(value.length >= minimumLength);
        };
    },

    'max-length': function (maximumLength) {
        return function maxLength (callback, value) {
            callback(value.length <= maximumLength);
        };
    },

    'exact-length': function (exactLen) {
        return function exactLength (callback, value) {
            callback(value.length === +exactLen);
        };
    },

    'between-length': function (minimumLength, maximumLength) {
        return function betweenLength (callback, value) {
            var aboveMinLength = value.length >= minimumLength,
                belowMaxLength = value.length <= maximumLength;

            callback(aboveMinLength && belowMaxLength);
        };
    },

    'max-number': function (maximumNumber) {
        return function maxNumber (callback, value) {
            callback(+value <= maximumNumber);
        };
    },

    'min-number': function (minimumNumber) {
        return function minNumber (callback, value) {
            callback(+value >= minimumNumber);
        };
    },

    'between-number': function (minimumNumber, maximumNumber) {
        return function betweenNumber (callback, value) {
            callback(+value >= minimumNumber && +value <= maximumNumber);
        };
    },

    'integer': function () {
        return function (callback, value) {
            callback(/^\s*\d+\s*$/.test(value));
        };
    },

    'float': function () {
        return function (callback, value) {
            callback(/^[-+]?[0-9]+(\.[0-9]+)?$/.test(value));
        };
    },

    'same-as': function (selector) {
        var sameAsElement = nod.getElement(selector);

        return function sameAs (callback, value, options) {
            // 'same-as' is special, in that if it is triggered by another field
            // (the one it should be similar to), and the field itself is empty,
            // then it bails out without a check. This is to avoid showing an
            // error message before the user has even reached the element.
            if (options &&
                options.event &&
                options.event.target &&
                options.event.target !== options.element &&
                value.length === 0) {
                return;
            }

            callback(value === sameAsElement.value);
        };
    },

    'one-of': function (selector) {
        var elements = nod.getElements(selector);

        function getValues () {
            return elements.reduce(function (memo, element) {
                return memo + '' + (element.value || '');
            }, '');
        }

        return function oneOf (callback) {
            callback(getValues().trim().length > 0);
        };
    },

    'only-one-of': function (selector) {
        var elements = nod.getElements(selector);

        return function onlyOneOf (callback, value) {
            var numOfValues = 0;

            elements.forEach(function (element) {
                if (element.value) {
                    numOfValues++;
                }
            });

            callback(numOfValues === 1);
        };
    },

    'checked': function () {
        return function checked (callback, value, options) {
            callback(options.element.checked);
        };
    },

    'some-radio': function (selector) {
        var radioElements = nod.getElements(selector);

        return function someRadio (callback, value, options) {
            var result = radioElements.reduce(function (memo, element) {
                return memo || element.checked;
            }, false);

            callback(result);
        };
    },

    'regexp': function (reg) {
        return function regExp (callback, value) {
            callback(reg.test(value));
        };
    },

    'email': function () {
        var RFC822 = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;

        return function email (callback, value) {
            callback(RFC822.test(value));
        };
    }
};

// CustomEvent polyfill for older IE versions. Taken from
// github.com/d4tocchini/customevent-polyfill/blob/master/CustomEvent.js
try {
    new CustomEvent("test");
} catch (e) {
    var CustomEvent = function (event, params) {
        var evt;
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };

        evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event,
                            params.bubbles,
                            params.cancelable,
                            params.detail);
        return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}

// Safely export nod.
if ( true && module.exports) {
    module.exports = nod;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNOYU4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc051bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9kLXZhbGlkYXRlL25vZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDckJBLGVBQWUsbUJBQU8sQ0FBQyxxREFBWTs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3JDQSxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTtBQUN4QyxtQkFBbUIsbUJBQU8sQ0FBQyw2REFBZ0I7O0FBRTNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhOztBQUViO0FBQ0EsdURBQXVELFNBQVM7QUFDaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1ELFNBQVM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEM7QUFDOUMsMkNBQTJDO0FBQzNDLDhCQUE4QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2REFBNkQsZ0JBQWdCOztBQUU3RTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQ0FBYTtBQUN6QixtQkFBbUIsb0NBQWE7QUFDaEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxLQUE2QjtBQUNqQztBQUNBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgaXNOdW1iZXIgPSByZXF1aXJlKCcuL2lzTnVtYmVyJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYE5hTmAuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uXG4gKiBbYE51bWJlci5pc05hTmBdKGh0dHBzOi8vbWRuLmlvL051bWJlci9pc05hTikgYW5kIGlzIG5vdCB0aGUgc2FtZSBhc1xuICogZ2xvYmFsIFtgaXNOYU5gXShodHRwczovL21kbi5pby9pc05hTikgd2hpY2ggcmV0dXJucyBgdHJ1ZWAgZm9yXG4gKiBgdW5kZWZpbmVkYCBhbmQgb3RoZXIgbm9uLW51bWJlciB2YWx1ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc05hTihOYU4pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYU4obmV3IE51bWJlcihOYU4pKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBpc05hTih1bmRlZmluZWQpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOYU4odW5kZWZpbmVkKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTmFOKHZhbHVlKSB7XG4gIC8vIEFuIGBOYU5gIHByaW1pdGl2ZSBpcyB0aGUgb25seSB2YWx1ZSB0aGF0IGlzIG5vdCBlcXVhbCB0byBpdHNlbGYuXG4gIC8vIFBlcmZvcm0gdGhlIGB0b1N0cmluZ1RhZ2AgY2hlY2sgZmlyc3QgdG8gYXZvaWQgZXJyb3JzIHdpdGggc29tZVxuICAvLyBBY3RpdmVYIG9iamVjdHMgaW4gSUUuXG4gIHJldHVybiBpc051bWJlcih2YWx1ZSkgJiYgdmFsdWUgIT0gK3ZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTmFOO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG51bWJlclRhZyA9ICdbb2JqZWN0IE51bWJlcl0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgTnVtYmVyYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqICoqTm90ZToqKiBUbyBleGNsdWRlIGBJbmZpbml0eWAsIGAtSW5maW5pdHlgLCBhbmQgYE5hTmAsIHdoaWNoIGFyZVxuICogY2xhc3NpZmllZCBhcyBudW1iZXJzLCB1c2UgdGhlIGBfLmlzRmluaXRlYCBtZXRob2QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBudW1iZXIsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc051bWJlcigzKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNOdW1iZXIoJzMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBudW1iZXJUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTnVtYmVyO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwiXG4vKipcbiAqXG4gKlxuICogbm9kIHYuMi4wLjEyXG4gKiBHb3JtIENhc3BlclxuICpcbiAqXG4gKlxuICogVGhpcyBpcyBhIHNob3J0IGJyZWFrZG93biBvZiB0aGUgY29kZSB0byBoZWxwIHlvdSBmaW5kIHlvdXIgd2F5IGFyb3VuZC5cbiAqXG4gKlxuICogQW4gYGVsZW1lbnRgIGFsd2F5cyByZWZlciB0byBzb21lIGlucHV0IGVsZW1lbnQgZGVmaW5lZCBieSB0aGUgdXNlciB2aWEgdGhlXG4gKiBgc2VsZWN0b3JgIGtleS5cbiAqXG4gKiBBIGBtZXRyaWNgIGlzIHRoZSB1c2VyIGNyZWF0ZWQgb2JqZWN0cyB0aGF0IGlzIHVzZWQgdG8gYWRkIGNoZWNrcyB0b1xuICogbm9kLlxuICpcbiAqIEVhY2ggYGVsZW1lbnRgIHdpbGwgaGF2ZSBhdCBtb3N0IG9uZSBvZiBhIGBsaXN0ZW5lcmAsIGEgYGNoZWNrZXJgLCBhXG4gKiBgY2hlY2tIYW5kbGVyYCwgYW5kIGEgYGRvbU5vZGVgIFwiYXR0YWNoZWRcIiB0byBpdC4gVGhlIGBsaXN0ZW5lcmAgbGlzdGVuc1xuICogZm9yIGlucHV0cyBvciBjaGFuZ2VzIHRvIHRoZSBgZWxlbWVudGAgYW5kIHBhc3NlcyB0aGUgbmV3IHZhbHVlIG9uIHRvIHRvIHRoZVxuICogYGNoZWNrZXJgIHdoaWNoIHBlcmZvcm1zIGl0cyBjaGVja3MgYW5kIHBhc3NlcyB0aGUgdGhlIHJlc3VsdHMgb24gdG8gdGhlXG4gKiBgY2hlY2tIYW5kbGVyYCB3aGljaCBjYWxjdWxhdGVzIHRoZSBuZXcgc3RhdGUgb2YgdGhlIGBlbGVtZW50YCB3aGljaCBpdFxuICogcGFzc2VzIG9uIHRvIHRoZSBgZG9tTm9kZWAgd2hpY2ggd2lsbCB1cGRhdGUgdGhlIGRvbS5cbiAqXG4gKiBUaGUgZm91ciBtYWluIHBhcnRzLCB0aGUgbGlzdGVuZXIsIHRoZSBjaGVja2VyLCB0aGUgY2hlY2tIYW5kbGVyLCBhbmQgdGhlXG4gKiBkb21Ob2RlIGFsbCBjb21tdW5pY2F0ZSB0aHJvdWdoIHRoZSBgbWVkaWF0b3JgIGJ5IGZpcmluZyBldmVudHMgaWRlbnRpZmllZFxuICogYnkgYSB1bmlxdWUgaWQuIFRoZXkgZG8gbm90IGtub3cgb2YgZWFjaCBvdGhlcidzIGV4aXN0YW5jZSwgYW5kIHNvIG5vXG4gKiBjb21tdW5pY2F0aW9uIGZsb3dzIGRpcmVjdGx5IGJldHdlZW4gdGhlbS5cbiAqXG4gKiBBbGwgbGlzdGVuZXJzLCBjaGVja2VycywgaGFuZGxlcnMsIGFuZCBkb21Ob2RlcyBhcmUgZ3JvdXBlZCB0b2dldGhlciBpblxuICogYGNvbGxlY3Rpb25zYCwgd2hpY2ggYXJlIGJhc2ljYWxseSBhIGdsb3JpZmllZCBhcnJheSB0aGF0IG1ha2VzIGl0IGVhc3lcbiAqIG5vdCB0byBnZXQgZHVwbGljYXRlIGl0ZW1zIGZvciBlYWNoIGVsZW1lbnQgKGZvciBpbnN0YW5jZSB0d28gbGlzdGVuZXJzXG4gKiBsaXN0ZW5pbmcgdG8gdGhlIHNhbWUgZWxlbWVudCkuXG4gKlxuICogVGhlIGNvbW11bmljYXRpb24gZmxvdyBsb29rcyBsaWtlIHRoaXM6XG4gKiBsaXN0ZW5lciAtPiBjaGVja2VyIC0+IGNoZWNrSGFuZGxlciAtPiBkb21Ob2RlXG4gKlxuICogQmV0d2VlbiBlYWNoIHBhcnQsIHlvdSBoYXZlIHRoZSBtZWRpYXRvci5cbiAqXG4gKlxuICogYE1ldHJpY3NgIGFyZSBhZGRlZCBieSB0aGUgdXNlciwgd2hpY2ggc2V0cyB1cCB0aGUgc3lzdGVtIGFib3ZlLiBOb3RpY2VcbiAqIHRoYXQgYSBtZXRyaWMgY2FuIHRhcmdldCBtdWx0aXBsZSBlbGVtZW50cyBhdCBvbmNlLCBhbmQgdGhhdCB0aGVyZSBjYW5cbiAqIGJlIG92ZXJsYXBzLiBPbmUgbWV0cmljIGRlZmluaXRlbHkgZG9lcyBub3QgZXF1YWwgb25lIGVsZW1lbnQgb3Igb25lXG4gKiBjaGVjay5cbiAqXG4gKi9cblxuZnVuY3Rpb24gbm9kIChjb25maWcpIHtcbiAgICB2YXIgZm9ybSxcbiAgICAgICAgY29uZmlndXJhdGlvbiAgID0ge30sXG4gICAgICAgIG1lZGlhdG9yICAgICAgICA9IG5vZC5tYWtlTWVkaWF0b3IoKSxcbiAgICAgICAgZXZlbnRFbWl0dGVyICAgID0gbm9kLm1ha2VFdmVudEVtaXR0ZXIobWVkaWF0b3IpLFxuXG4gICAgICAgIC8vIENyZWF0aW5nIChlbXB0eSkgY29sbGVjdGlvbnNcbiAgICAgICAgbGlzdGVuZXJzICAgICAgID0gbm9kLm1ha2VDb2xsZWN0aW9uKG5vZC5tYWtlTGlzdGVuZXIpLFxuICAgICAgICBjaGVja2VycyAgICAgICAgPSBub2QubWFrZUNvbGxlY3Rpb24obm9kLm1ha2VDaGVja2VyKSxcbiAgICAgICAgY2hlY2tIYW5kbGVycyAgID0gbm9kLm1ha2VDb2xsZWN0aW9uKG5vZC5tYWtlQ2hlY2tIYW5kbGVyKSxcbiAgICAgICAgZG9tTm9kZXMgICAgICAgID0gbm9kLm1ha2VDb2xsZWN0aW9uKG5vZC5tYWtlRG9tTm9kZSk7XG5cbiAgICAvKipcbiAgICAgKiBFbnRyeSBwb2ludCBmb3IgdGhlIHVzZXIuIFRoZSB1c2VyIHBhc3NlcyBpbiBhbiBhcnJheSBvZiBtZXRyaWNzIChhblxuICAgICAqIG9iamVjdCBjb250YWluaW5nIGEgc2VsZWN0b3IsIGEgdmFsaWRhdGUgc3RyaW5nL2Z1bmN0aW9uLCBldGMuKSBhbmQgaXRcbiAgICAgKiBnZXRzIHByb2Nlc3NlZCBmcm9tIGhlcmUuXG4gICAgICpcbiAgICAgKiBUaGlzIGZ1bmN0aW9uLCBpcyBtb3N0bHkgYWJvdXQgY2xlYW5pbmcgdXAgd2hhdCB0aGUgdXNlciBwYXNzZWQgdXMuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkTWV0cmljcyAobWV0cmljcykge1xuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgYXJlIGRlYWxpbmcgd2l0aCBhbiBhcnJheSBvZiBtZXRyaWNzLlxuICAgICAgICB2YXIgYXJyYXlNZXRyaWNzID0gQXJyYXkuaXNBcnJheShtZXRyaWNzKSA/IG1ldHJpY3MgOiBbbWV0cmljc107XG5cbiAgICAgICAgYXJyYXlNZXRyaWNzLmZvckVhY2goZnVuY3Rpb24gKG1ldHJpYykge1xuICAgICAgICAgICAgdmFyIHZhbGlkYXRlQXJyYXksIGVycm9yTWVzc2FnZUFycmF5LFxuICAgICAgICAgICAgICAgIG5vdEFycmF5ID0gIUFycmF5LmlzQXJyYXkobWV0cmljLnZhbGlkYXRlKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlICd2YWxpZGF0ZScgaXMgbm90IGFuIGFycmF5LCB0aGVuIHdlJ3JlIGdvb2QgdG8gZ28uXG4gICAgICAgICAgICBpZiAobm90QXJyYXkpIHtcbiAgICAgICAgICAgICAgICBhZGRNZXRyaWMobWV0cmljKTtcblxuICAgICAgICAgICAgLy8gSWYgaXQgaXMgYW4gYXJyYXkgKGUuZy4sIHZhbGlkYXRlOiBbJ2VtYWlsJywgJ21heC1sZW5ndGg6MTAnXSksXG4gICAgICAgICAgICAvLyB0aGVuIHdlIG5lZWQgdG8gc3BsaXQgdGhlbSB1cCBpbnRvIG11bHRpcGxlIG1ldHJpY3MsIGFuZCBhZGRcbiAgICAgICAgICAgIC8vIHRoZW0gaW5kaXZpZHVhbGx5LlxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkobWV0cmljLmVycm9yTWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yTXNnID0gJ0lmIHlvdSBwYXNzIGluIGB2YWxpZGF0ZTouLi5gIGFzIGFuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJyBhcnJheSwgdGhlbiBgZXJyb3JNZXNzYWdlOi4uLmAgYWxzbyBuZWVkcyB0byBiZSBhbiAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICcgYXJyYXkuIFwiJyArIG1ldHJpYy52YWxpZGF0ZSArICdcIiwgYW5kIFwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRyaWMuZXJyb3JNZXNzYWdlICsgJ1wiJztcblxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcihlcnJvck1zZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gV2Ugc3RvcmUgZWFjaCBhcyBhcnJheXMsIGFuZCB0aGVuIHJ1biB0aHJvdWdoIHRoZW0sXG4gICAgICAgICAgICAgICAgLy8gb3ZlcndyaXRpbmcgZWFjaCBvZiB0aGUga2V5cyBhY2NvcmRpbmdseS5cbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUFycmF5ICAgICA9IG1ldHJpYy52YWxpZGF0ZTtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VBcnJheSA9IG1ldHJpYy5lcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICB2YWxpZGF0ZUFycmF5LmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRlLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE92ZXJ3cml0ZSB0aGUgYXJyYXkgd2l0aCB0aGUgaW5kaXZpZHVhbCAndmFsaWRhdGUnIGFuZFxuICAgICAgICAgICAgICAgICAgICAvLyAnZXJyb3JNZXNzYWdlJy5cbiAgICAgICAgICAgICAgICAgICAgbWV0cmljLnZhbGlkYXRlICAgICA9IHZhbGlkYXRlO1xuICAgICAgICAgICAgICAgICAgICBtZXRyaWMuZXJyb3JNZXNzYWdlID0gZXJyb3JNZXNzYWdlQXJyYXlbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgYWRkTWV0cmljKG1ldHJpYyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE1ldHJpYyAobWV0cmljKSB7XG4gICAgICAgIHZhciBzcGVjaWFsVHJpZ2dlcnMgPSBbXSxcblxuICAgICAgICAgICAgLy8gVGhlIGZ1bmN0aW9uIHRoYXQgd2lsbCBjaGVjayB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICBjaGVja0Z1bmN0aW9uID0gbm9kLmdldENoZWNrRnVuY3Rpb24obWV0cmljKSxcblxuICAgICAgICAgICAgLy8gQSBsaXN0IG9mIGVsZW1lbnRzIHRoYXQgdGhpcyBtZXRyaWMgd2lsbCB0YXJnZXQuXG4gICAgICAgICAgICBlbGVtZW50cyA9IG5vZC5nZXRFbGVtZW50cyhtZXRyaWMuc2VsZWN0b3IpLFxuXG4gICAgICAgICAgICAvLyBBIFwic2V0XCIgaGVyZSwgcmVmZXJzIHRvIGFuIG9iaiB3aXRoIG9uZSBsaXN0ZW5lciwgb25lIGNoZWNrZXIsXG4gICAgICAgICAgICAvLyBhbmQgb25lIGNoZWNrSGFuZGxlci4gT25seSBldmVyeSBvbmUgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGVcbiAgICAgICAgICAgIC8vIGRvbS5cbiAgICAgICAgICAgIG1ldHJpY1NldHMgPSBlbGVtZW50cy5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcjogICAgICAgbGlzdGVuZXJzLmZpbmRPck1ha2UoZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0cmljLnRyaWdnZXJFdmVudHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlcjogICAgICAgIGNoZWNrZXJzLmZpbmRPck1ha2UoZWxlbWVudCwgbWVkaWF0b3IpLFxuICAgICAgICAgICAgICAgICAgICBjaGVja0hhbmRsZXI6ICAgY2hlY2tIYW5kbGVycy5maW5kT3JNYWtlKGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgICAgIGRvbU5vZGU6ICAgICAgICBkb21Ob2Rlcy5maW5kT3JNYWtlKGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lZGlhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAvLyBTYXZlZCBmb3IgbGF0ZXIgcmVmZXJlbmNlIGluIGNhc2UgdGhlIHVzZXIgaGFzIGEgYHRhcGAgZnVuY3Rpb25cbiAgICAgICAgLy8gZGVmaW5lZC5cbiAgICAgICAgY2hlY2tGdW5jdGlvbi52YWxpZGF0ZSA9ICh0eXBlb2YgbWV0cmljLnZhbGlkYXRlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgPyBtZXRyaWMudmFsaWRhdGUudG9TdHJpbmcoKVxuICAgICAgICAgICAgOiBtZXRyaWMudmFsaWRhdGU7XG5cbiAgICAgICAgLy8gU3BlY2lhbCBjYXNlcy4gVGhlc2UgYHZhbGlkYXRlc2AgYWZmZWN0IGVhY2ggb3RoZXIsIGFuZCB0aGVpciBzdGF0ZVxuICAgICAgICAvLyBuZWVkcyB0byB1cGRhdGUgZWFjaCB0aW1lIGVpdGhlciBvZiB0aGUgZWxlbWVudHMnIHZhbHVlcyBjaGFuZ2UuXG4gICAgICAgIGlmIChtZXRyaWMudmFsaWRhdGUgPT09ICdvbmUtb2YnXG4gICAgICAgICAgICB8fCBtZXRyaWMudmFsaWRhdGUgPT09ICdvbmx5LW9uZS1vZidcbiAgICAgICAgICAgIHx8IG1ldHJpYy52YWxpZGF0ZSA9PT0gJ3NvbWUtcmFkaW8nKSB7XG4gICAgICAgICAgICBzcGVjaWFsVHJpZ2dlcnMucHVzaChtZXRyaWMuc2VsZWN0b3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBtZXRyaWMudmFsaWRhdGUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAmJiBtZXRyaWMudmFsaWRhdGUuaW5kZXhPZignc2FtZS1hcycpID4gLTEpIHtcbiAgICAgICAgICAgIHNwZWNpYWxUcmlnZ2Vycy5wdXNoKG1ldHJpYy52YWxpZGF0ZS5zcGxpdCgnOicpWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhlbHBlciBmdW5jdGlvbiwgdXNlZCBpbiB0aGUgbG9vcCBiZWxvdy5cbiAgICAgICAgZnVuY3Rpb24gc3Vic2NyaWJlVG9UcmlnZ2VycyAoY2hlY2tlciwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciB0cmlnZ2VyRWxlbWVudHMgPSBub2QuZ2V0RWxlbWVudHMoc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICB0cmlnZ2VyRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVycy5maW5kT3JNYWtlKGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWF0b3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmF0aW9uKTtcblxuICAgICAgICAgICAgICAgIGNoZWNrZXIuc3Vic2NyaWJlVG8obGlzdGVuZXIuaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBIZXJlIHdlIHNldCB1cCB0aGUgXCJjb25uZWN0aW9uc1wiIGJldHdlZW4gZWFjaCBvZiBvdXIgbWFpbiBwYXJ0cy5cbiAgICAgICAgLy8gVGhleSBjb21tdW5pY2F0ZSBvbmx5IHRocm91Z2ggdGhlIG1lZGlhdG9yLlxuICAgICAgICBtZXRyaWNTZXRzLmZvckVhY2goZnVuY3Rpb24gKG1ldHJpY1NldCkge1xuICAgICAgICAgICAgLy8gOjogTGlzdGVuZXIgLT4gQ2hlY2tlclxuXG4gICAgICAgICAgICAvLyBXZSB3YW50IG91ciBjaGVja2VyIHRvIGxpc3RlbiB0byB0aGUgbGlzdGVuZXIuIEEgbGlzdGVuZXIgaGFzIGFuXG4gICAgICAgICAgICAvLyBpZCwgd2hpY2ggaXQgdXNlcyB3aGVuIGl0IGZpcmVzIGV2ZW50cyB0byB0aGUgbWVkaWF0b3IgKHdoaWNoXG4gICAgICAgICAgICAvLyB3YXMgc2V0IHVwIHdoZW4gdGhlIGxpc3RlbmVyIHdhcyBjcmVhdGVkKS5cbiAgICAgICAgICAgIG1ldHJpY1NldC5jaGVja2VyLnN1YnNjcmliZVRvKG1ldHJpY1NldC5saXN0ZW5lci5pZCk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSB1c2VyIHNldCBhIGB0cmlnZ2VyZWRCeWAsIHRoZSBjaGVja2VyIG5lZWQgdG8gbGlzdGVuIHRvXG4gICAgICAgICAgICAvLyBjaGFuZ2VzIG9uIHRoaXMgZWxlbWVudCBhcyB3ZWxsLlxuICAgICAgICAgICAgLy8gU2FtZSBnb2VzIGZvciBzcGVjaWFsIHRyaWdnZXJzIHRoYXQgd2Ugc2V0LlxuICAgICAgICAgICAgc3Vic2NyaWJlVG9UcmlnZ2VycyhtZXRyaWNTZXQuY2hlY2tlciwgbWV0cmljLnRyaWdnZXJlZEJ5KTtcbiAgICAgICAgICAgIHN1YnNjcmliZVRvVHJpZ2dlcnMobWV0cmljU2V0LmNoZWNrZXIsIHNwZWNpYWxUcmlnZ2Vycyk7XG5cbiAgICAgICAgICAgIC8vIDo6IENoZWNrZXIgLT4gY2hlY2tIYW5kbGVyXG5cbiAgICAgICAgICAgIHZhciBjaGVja0lkID0gbm9kLnVuaXF1ZSgpO1xuXG4gICAgICAgICAgICAvLyBXZSBhZGQgdGhlIGNoZWNrIGZ1bmN0aW9uIGFzIG9uZSB0byBiZSBjaGVja2VkIHdoZW4gdGhlIHVzZXJcbiAgICAgICAgICAgIC8vIGlucHV0cyBzb21ldGhpbmcuIChUaGVyZSBtaWdodCBiZSBtb3JlIHRoYW4gdGhpcyBvbmUpLlxuICAgICAgICAgICAgbWV0cmljU2V0LmNoZWNrZXIuYWRkQ2hlY2soY2hlY2tGdW5jdGlvbiwgY2hlY2tJZCk7XG5cbiAgICAgICAgICAgIC8vIFdlIHdhbnQgdGhlIGNoZWNrIGhhbmRsZXIgdG8gbGlzdGVuIGZvciByZXN1bHRzIGZyb20gdGhlIGNoZWNrZXJcbiAgICAgICAgICAgIG1ldHJpY1NldC5jaGVja0hhbmRsZXIuc3Vic2NyaWJlVG8oY2hlY2tJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0cmljLmVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0cmljLmRlZmF1bHRTdGF0dXMpO1xuXG4gICAgICAgICAgICBpZiAoY29uZmlndXJhdGlvbi5ub0RvbSkge1xuICAgICAgICAgICAgICAgIGV2ZW50RW1pdHRlci5zdWJzY3JpYmUobWV0cmljU2V0LmNoZWNrSGFuZGxlci5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIDo6IGNoZWNrSGFuZGxlciAtPiBkb21Ob2RlXG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgY2hlY2tIYW5kbGVyIGhhcyBpdHMgb3duIGlkIChhbmQgb25seSBldmVyIG5lZWRzIG9uZSksIHNvXG4gICAgICAgICAgICAgICAgLy8gd2UganVzdCBhc2sgdGhlIGRvbU5vZGUgdG8gbGlzdGVuIGZvciB0aGF0LlxuICAgICAgICAgICAgICAgIG1ldHJpY1NldC5kb21Ob2RlLnN1YnNjcmliZVRvKG1ldHJpY1NldC5jaGVja0hhbmRsZXIuaWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZnRlciBhbGwgaXMgZG9uZSwgd2UgbWF5IGhhdmUgdG8gZW5hYmxlL2Rpc2FibGUgYSBzdWJtaXQgYnV0dG9uLlxuICAgICAgICB0b2dnbGVTdWJtaXQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJZiBhIGZvcm0gaXMgYWRkZWQsIHdlIGxpc3RlbiBmb3Igc3VibWl0cywgYW5kIGlmIHRoZSBoYXMgYWxzbyBzZXRcbiAgICAgKiBgcHJldmVudFN1Ym1pdGAgaW4gdGhlIGNvbmZpZ3VyYXRpb24sIHRoZW4gd2Ugc3RvcCB0aGUgY29tbWl0IGZyb21cbiAgICAgKiBoYXBwZW5pbmcgdW5sZXNzIGFsbCB0aGUgZWxlbWVudHMgYXJlIHZhbGlkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZEZvcm0gKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBmb3JtID0gbm9kLmdldEVsZW1lbnQoc2VsZWN0b3IpO1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgcG9zc2libGVQcmV2ZW50U3VibWl0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgLy8gUHJldmVudCBmdW5jdGlvbiwgdXNlZCBhYm92ZVxuICAgIGZ1bmN0aW9uIHBvc3NpYmxlUHJldmVudFN1Ym1pdCAoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24ucHJldmVudFN1Ym1pdCAmJiAhYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBTaG93IGVycm9ycyB0byB0aGUgdXNlclxuICAgICAgICAgICAgY2hlY2tlcnMuZm9yRWFjaChmdW5jdGlvbiAoY2hlY2tlcikge1xuICAgICAgICAgICAgICAgIGNoZWNrZXIucGVyZm9ybUNoZWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gRm9jdXMgb24gdGhlIGZpcnN0IGludmFsaWQgZWxlbWVudFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNoZWNrSGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tIYW5kbGVyID0gY2hlY2tIYW5kbGVyc1tpXTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVja0hhbmRsZXIuZ2V0U3RhdHVzKCkuc3RhdHVzID09PSBub2QuY29uc3RhbnRzLklOVkFMSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tIYW5kbGVyLmVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBlbGVtZW50cyBjb21wbGV0ZWx5LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQgKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IG5vZC5nZXRFbGVtZW50cyhzZWxlY3Rvcik7XG5cbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnJlbW92ZUl0ZW0oZWxlbWVudCk7XG4gICAgICAgICAgICBjaGVja2Vycy5yZW1vdmVJdGVtKGVsZW1lbnQpO1xuICAgICAgICAgICAgY2hlY2tIYW5kbGVycy5yZW1vdmVJdGVtKGVsZW1lbnQpO1xuICAgICAgICAgICAgZG9tTm9kZXMucmVtb3ZlSXRlbShlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY29uZmlndXJlXG4gICAgICpcbiAgICAgKiBDaGFuZ2VzIHRoZSBjb25maWd1cmF0aW9uIG9iamVjdCB1c2VkIHRocm91Z2hvdXQgdGhlIGNvZGUgZm9yIGNsYXNzZXMsXG4gICAgICogZGVsYXlzLCBtZXNzYWdlcywgZXRjLlxuICAgICAqXG4gICAgICogSXQgY2FuIGVpdGhlciBiZSBjYWxsZWQgd2l0aCBhIGtleS92YWx1ZSBwYWlyICh0d28gYXJndW1lbnRzKSwgb3Igd2l0aFxuICAgICAqIGFuIG9iamVjdCB3aXRoIGtleS92YWx1ZSBwYWlycy5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjb25maWd1cmUgKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB7fTtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNba2V5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IGtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGsgaW4gYXR0cmlidXRlcykge1xuICAgICAgICAgICAgY29uZmlndXJhdGlvbltrXSA9IGF0dHJpYnV0ZXNba107XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0cmlidXRlcy5zdWJtaXQgfHwgYXR0cmlidXRlcy5kaXNhYmxlU3VibWl0KSB7XG4gICAgICAgICAgICB0b2dnbGVTdWJtaXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmZvcm0pIHtcbiAgICAgICAgICAgIGFkZEZvcm0oYXR0cmlidXRlcy5mb3JtKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRvZ2dsZVN1Ym1pdFxuICAgICAqXG4gICAgICogVG9nZ2xlcyB0aGUgc3VibWl0IGJ1dHRvbiAoZW5hYmxlZCBpZiBldmVyeSBlbGVtZW50IGlzIHZhbGlkLCBvdGhlcndpc2VcbiAgICAgKiBkaXNhYmxlZCkuXG4gICAgICovXG4gICAgZnVuY3Rpb24gdG9nZ2xlU3VibWl0ICgpIHtcbiAgICAgICAgaWYgKGNvbmZpZ3VyYXRpb24uc3VibWl0ICYmIGNvbmZpZ3VyYXRpb24uZGlzYWJsZVN1Ym1pdCkge1xuICAgICAgICAgICAgbm9kLmdldEVsZW1lbnRzKGNvbmZpZ3VyYXRpb24uc3VibWl0KS5mb3JFYWNoKGZ1bmN0aW9uIChzdWJtaXRCdG4pIHtcbiAgICAgICAgICAgICAgICBzdWJtaXRCdG4uZGlzYWJsZWQgPSAhYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gYWxsIGNoZWNrcywgYW5kIGlmIHRoZSB1c2VyIGhhcyBzZXQgaW4gdGhlIGNvbmZpZ3VyYXRpb24gdG9cbiAgICAgKiBlbmFibGUvZGlzYWJsZWQgdGhlIHN1Ym1pdCBidXR0b24sIHdlIGRvIHRoYXQuXG4gICAgICovXG4gICAgbWVkaWF0b3Iuc3Vic2NyaWJlKCdhbGwnLCB0b2dnbGVTdWJtaXQpO1xuXG4gICAgZnVuY3Rpb24gYXJlQWxsIChzdGF0dXMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNoZWNrSGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjaGVja0hhbmRsZXJzW2ldLmdldFN0YXR1cygpLnN0YXR1cyAhPT0gc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TWVzc2FnZU9wdGlvbnMgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IEFycmF5LmlzQXJyYXkob3B0aW9ucykgPyBvcHRpb25zIDogW29wdGlvbnNdO1xuXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBub2QuZ2V0RWxlbWVudHMob3B0aW9uLnNlbGVjdG9yKTtcblxuICAgICAgICAgICAgZWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBkb21Ob2RlID0gZG9tTm9kZXMuZmluZE9yTWFrZShlbGVtZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWRpYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhdGlvbik7XG5cbiAgICAgICAgICAgICAgICBkb21Ob2RlLnNldE1lc3NhZ2VPcHRpb25zKG9wdGlvbi5wYXJlbnQsIG9wdGlvbi5lcnJvclNwYW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byBhbGwgY2hlY2tzIGFuZCBhbGxvdyB0aGUgdXNlciB0byBsaXN0ZW4gaW4sIGlmIGhlIHNldCBhIGB0YXBgXG4gICAgICogZnVuY3Rpb24gaW4gdGhlIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgbWVkaWF0b3Iuc3Vic2NyaWJlKCdhbGwnLCBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAodHlwZW9mIGNvbmZpZ3VyYXRpb24udGFwID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICAmJiBvcHRpb25zLnR5cGUgPT09ICdjaGVjaycpIHtcbiAgICAgICAgICAgIGNvbmZpZ3VyYXRpb24udGFwKG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMgKHNlbGVjdG9yLCBzaG93RXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gbm9kLmdldEVsZW1lbnQoc2VsZWN0b3IpLFxuICAgICAgICAgICAgc3RhdHVzICA9IGNoZWNrSGFuZGxlcnMuZmluZE9yTWFrZShlbGVtZW50KS5nZXRTdGF0dXMoKTtcblxuICAgICAgICByZXR1cm4gc2hvd0Vycm9yTWVzc2FnZSA/IHN0YXR1cyA6IHN0YXR1cy5zdGF0dXM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGVyZm9ybUNoZWNrIChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgY3MgPSBzZWxlY3RvclxuICAgICAgICAgICAgPyBub2QuZ2V0RWxlbWVudHMoc2VsZWN0b3IpLm1hcChjaGVja2Vycy5maW5kT3JNYWtlKVxuICAgICAgICAgICAgOiBjaGVja2VycztcblxuICAgICAgICBjcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGVja2VyKSB7XG4gICAgICAgICAgICBjaGVja2VyLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzZXRJbnZhbGlkIChzZWxlY3RvciwgZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gbm9kLmdldEVsZW1lbnQoc2VsZWN0b3IpLFxuICAgICAgICAgICAgZG9tTm9kZSAgPSBkb21Ob2Rlcy5maW5kT3JNYWtlKGVsZW1lbnQpO1xuXG4gICAgICAgIGRvbU5vZGUuc2V0KHtcbiAgICAgICAgICAgIHJlc3VsdDogbm9kLmNvbnN0YW50cy5JTlZBTElELFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2UgfHwgJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0VmFsaWQgKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gbm9kLmdldEVsZW1lbnQoc2VsZWN0b3IpLFxuICAgICAgICAgICAgZG9tTm9kZSAgPSBkb21Ob2Rlcy5maW5kT3JNYWtlKGVsZW1lbnQpO1xuXG4gICAgICAgIGRvbU5vZGUuc2V0KHtcbiAgICAgICAgICAgIHJlc3VsdDogbm9kLmNvbnN0YW50cy5WQUxJRCxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJydcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0QWxsTm9kZVZhbGlkICgpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGRvbU5vZGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBzZXRWYWxpZChkb21Ob2Rlc1tpXS5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEludGVybmFsIGZ1bmN0aW9ucyB0aGF0IGFyZSBleHBvc2VkIHRvIHRoZSBwdWJsaWMuXG4gICAgICovXG4gICAgdmFyIG5vZEluc3RhY2UgPSB7XG4gICAgICAgIGFkZDogICAgICAgICAgICAgICAgICAgIGFkZE1ldHJpY3MsXG4gICAgICAgIHJlbW92ZTogICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnQsXG4gICAgICAgIGFyZUFsbDogICAgICAgICAgICAgICAgIGFyZUFsbCxcbiAgICAgICAgZ2V0U3RhdHVzOiAgICAgICAgICAgICAgZ2V0U3RhdHVzLFxuICAgICAgICBjb25maWd1cmU6ICAgICAgICAgICAgICBjb25maWd1cmUsXG4gICAgICAgIHNldE1lc3NhZ2VPcHRpb25zOiAgICAgIHNldE1lc3NhZ2VPcHRpb25zLFxuICAgICAgICBwZXJmb3JtQ2hlY2s6ICAgICAgICAgICBwZXJmb3JtQ2hlY2ssXG4gICAgICAgIHNldEludmFsaWQ6ICAgICAgICAgICAgIHNldEludmFsaWQsXG4gICAgICAgIHNldFZhbGlkOiAgICAgICAgICAgICAgIHNldFZhbGlkLFxuICAgICAgICBzZXRBbGxOb2RlVmFsaWQ6ICAgICAgICBzZXRBbGxOb2RlVmFsaWRcbiAgICB9O1xuXG4gICAgaWYgKGNvbmZpZykge1xuICAgICAgICBub2RJbnN0YWNlLmNvbmZpZ3VyZShjb25maWcpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RJbnN0YWNlO1xufVxuXG5ub2QuY29uc3RhbnRzID0ge1xuICAgIFZBTElEOiAgICAgICAgICAndmFsaWQnLFxuICAgIElOVkFMSUQ6ICAgICAgICAnaW52YWxpZCcsXG4gICAgVU5DSEVDS0VEOiAgICAgICd1bmNoZWNrZWQnLFxuXG4gICAgREVMQVk6ICAgICAgICAgIDcwMFxufTtcblxubm9kLmNsYXNzZXMgPSB7XG4gICAgc3VjY2Vzc0NsYXNzOiAgICAgICAgICdub2Qtc3VjY2VzcycsXG4gICAgc3VjY2Vzc01lc3NhZ2VDbGFzczogICdub2Qtc3VjY2Vzcy1tZXNzYWdlJyxcbiAgICBlcnJvckNsYXNzOiAgICAgICAgICAgJ25vZC1lcnJvcicsXG4gICAgZXJyb3JNZXNzYWdlQ2xhc3M6ICAgICdub2QtZXJyb3ItbWVzc2FnZSdcbn07XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjcmVhdGUgdW5pcXVlIGlkJ3Ncbm5vZC51bmlxdWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciB1bmlxdWVDb3VudGVyID0gMDtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB1bmlxdWVDb3VudGVyKys7XG4gICAgfTtcbn0pKCk7XG5cbi8qKiBtYWtlTWVkaWF0b3JcbiAqXG4gKiBNaW5pbWFsIGltcGxlbWVudGF0aW9uIG9mIGEgbWVkaWF0b3IgcGF0dGVybiwgdXNlZCBmb3IgY29tbXVuaWNhdGlvbiBiZXR3ZWVuXG4gKiBjaGVja2VycyBhbmQgY2hlY2tIYW5kbGVycyAoY2hlY2tlcnMgZmlyZXMgZXZlbnRzIHdoaWNoIGhhbmRsZXJzIGNhblxuICogc3Vic2NyaWJlIHRvKS4gVW5pcXVlIElEJ3MgYXJlIHVzZWQgdG8gdGVsbCBldmVudHMgYXBhcnQuXG4gKlxuICogU3Vic2NyaWJpbmcgdG8gJ2FsbCcgd2lsbCBnaXZlIHlvdSBhbGwgcmVzdWx0cyBmcm9tIGFsbCBjaGVja3MuXG4gKi9cbm5vZC5tYWtlTWVkaWF0b3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN1YnNjcmliZXJzID0gW10sXG4gICAgICAgIGFsbCA9IFtdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUgKGlkLCBmbikge1xuICAgICAgICAgICAgaWYgKGlkID09PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIGFsbC5wdXNoKGZuKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyc1tpZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcnNbaWRdID0gW107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXJzW2lkXS5pbmRleE9mKGZuKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlcnNbaWRdLnB1c2goZm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBmaXJlOiBmdW5jdGlvbiBmaXJlIChvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgc3Vic2NyaWJlZEZ1bmN0aW9ucyA9IHN1YnNjcmliZXJzW29wdGlvbnMuaWRdLmNvbmNhdChhbGwpO1xuXG4gICAgICAgICAgICBzdWJzY3JpYmVkRnVuY3Rpb25zLmZvckVhY2goZnVuY3Rpb24gKHN1YnNjcmliZWRGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZWRGdW5jdGlvbihvcHRpb25zKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbm5vZC5maW5kQ29sbGVjdGlvbkluZGV4ID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24sIGVsZW1lbnQpIHtcbiAgICBmb3IgKHZhciBpIGluIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgaWYgKGNvbGxlY3Rpb25baV0uZWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG59O1xuXG4vKipcbiAqIG1ha2VDb2xsZWN0aW9uXG4gKlxuICogQSBtaW5pbWFsIGltcGxlbWVudGF0aW9uIG9mIGEgXCJjb2xsZWN0aW9uXCIsIGluc3BpcmVkIGJ5IGNvbGxlY3Rpb25zIGZyb21cbiAqIEJhY2tib25lSlMuIFVzZWQgYnkgbGlzdGVuZXJzLCBjaGVja2VycywgYW5kIGNoZWNrSGFuZGxlcnMuXG4gKi9cbm5vZC5tYWtlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIChtYWtlcikge1xuICAgIHZhciBjb2xsZWN0aW9uID0gW107XG5cbiAgICBjb2xsZWN0aW9uLmZpbmRPck1ha2UgPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgaW5kZXggPSBub2QuZmluZENvbGxlY3Rpb25JbmRleChjb2xsZWN0aW9uLCBlbGVtZW50KTtcblxuICAgICAgICAvLyBGb3VuZFxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gY29sbGVjdGlvbltpbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBOb25lIGZvdW5kLCBsZXQncyBtYWtlIG9uZSB0aGVuLlxuICAgICAgICB2YXIgaXRlbSA9IG1ha2VyLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cbiAgICAgICAgY29sbGVjdGlvbi5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG5cbiAgICBjb2xsZWN0aW9uLnJlbW92ZUl0ZW0gPSBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICB2YXIgaW5kZXggPSBub2QuZmluZENvbGxlY3Rpb25JbmRleChjb2xsZWN0aW9uLCBlbGVtZW50KSxcbiAgICAgICAgICAgIGl0ZW0gPSBjb2xsZWN0aW9uW2luZGV4XTtcblxuICAgICAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhbGwgLmRpc3Bvc2UoKSBpZiBpdCBleGlzdHNcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtLmRpc3Bvc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGl0ZW0uZGlzcG9zZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVtb3ZlIGl0ZW1cbiAgICAgICAgY29sbGVjdGlvbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG5cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbn07XG5cbi8qKlxuICogbWFrZUxpc3RlbmVyXG4gKlxuICogVGFrZXMgY2FyZSBvZiBsaXN0ZW5pbmcgdG8gY2hhbmdlcyB0byBpdHMgZWxlbWVudCBhbmQgZmlyZSB0aGVtIG9mZiBhc1xuICogZXZlbnRzIG9uIHRoZSBtZWRpYXRvciBmb3IgY2hlY2tlcnMgdG8gbGlzdGVuIHRvLlxuICovXG5ub2QubWFrZUxpc3RlbmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG1lZGlhdG9yLCB0cmlnZ2VyRXZlbnRzLCBjb25maWd1cmF0aW9uKSB7XG4gICAgdmFyIGlkID0gbm9kLnVuaXF1ZSgpLFxuICAgICAgICAkZWxlbWVudDtcblxuICAgIGZ1bmN0aW9uIGNoYW5nZWQgKGV2ZW50KSB7XG4gICAgICAgIG1lZGlhdG9yLmZpcmUoe1xuICAgICAgICAgICAgaWQ6ICAgICBpZCxcbiAgICAgICAgICAgIGV2ZW50OiAgZXZlbnQsXG4gICAgICAgICAgICB0eXBlOiAgICdjaGFuZ2UnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBjaGFuZ2VkLCBmYWxzZSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjaGFuZ2VkLCBmYWxzZSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgY2hhbmdlZCwgZmFsc2UpO1xuXG4gICAgaWYgKGNvbmZpZ3VyYXRpb24ualF1ZXJ5KSB7XG4gICAgICAgICRlbGVtZW50ID0gY29uZmlndXJhdGlvbi5qUXVlcnkoZWxlbWVudCk7XG5cbiAgICAgICAgJGVsZW1lbnQub24oJ3Byb3BlcnR5Y2hhbmdlIGNoYW5nZSBjbGljayBrZXl1cCBpbnB1dCBwYXN0ZScsIGNoYW5nZWQpO1xuICAgIH1cblxuICAgIGlmICh0cmlnZ2VyRXZlbnRzKSB7XG4gICAgICAgIHRyaWdnZXJFdmVudHMgPSBBcnJheS5pc0FycmF5KHRyaWdnZXJFdmVudHMpXG4gICAgICAgICAgICA/IHRyaWdnZXJFdmVudHNcbiAgICAgICAgICAgIDogW3RyaWdnZXJFdmVudHNdO1xuXG4gICAgICAgIHRyaWdnZXJFdmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnROYW1lKSB7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjaGFuZ2VkLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UgKCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgY2hhbmdlZCwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNoYW5nZWQsIGZhbHNlKTtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgY2hhbmdlZCwgZmFsc2UpO1xuXG4gICAgICAgIGlmICgkZWxlbWVudCkge1xuICAgICAgICAgICAgJGVsZW1lbnQub2ZmKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJpZ2dlckV2ZW50cykge1xuICAgICAgICAgICAgdHJpZ2dlckV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjaGFuZ2VkLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGVsZW1lbnQ6ICAgIGVsZW1lbnQsXG4gICAgICAgIGRpc3Bvc2U6ICAgIGRpc3Bvc2UsXG4gICAgICAgIGlkOiAgICAgICAgIGlkXG4gICAgfTtcbn07XG5cbi8qKlxuICogbWFrZUNoZWNrZXJcbiAqXG4gKiBBbiBcImNoZWNrZXJcIiBjb21tdW5pY2F0ZXMgcHJpbWFyaWx5IHdpdGggdGhlIG1lZGlhdG9yLiBJdCBsaXN0ZW5zIGZvciBpbnB1dFxuICogY2hhbmdlcyAoY29taW5nIGZyb20gbGlzdGVuZXJzKSwgcGVyZm9ybXMgaXRzIGNoZWNrcyBhbmQgZmlyZXMgb2ZmIHJlc3VsdHNcbiAqIGJhY2sgdG8gdGhlIG1lZGlhdG9yIGZvciBjaGVja0hhbmRsZXJzIHRvIGhhbmRsZS5cbiAqXG4gKiBUaGUgY2hlY2tlciBoYXMgYSAxIHRvIDEgcmVsYXRpb25zaGlwIHdpdGggYW4gZWxlbWVudCwgYW4gbGlzdGVuZXJzLCBhbmQgYW5cbiAqIGNoZWNrSGFuZGxlcjsgYWx0aG91Z2ggdGhleSBtYXkgY29tbXVuaWNhdGUgd2l0aCBvdGhlciBcInNldHNcIiBvZiBsaXN0ZW5lcnMsXG4gKiBjaGVja2VycyBhbmQgaGFuZGxlcnMuXG4gKlxuICogQ2hlY2tzIGFyZSBhZGRlZCwgZnJvbSB0aGUgb3V0c2lkZSwgYW5kIGNvbnNpc3RzIG9mIGEgY2hlY2tGdW5jdGlvbiAoc2VlXG4gKiBub2QuY2hlY2tGdW5jdGlvbnMpIGFuZCBhIHVuaXF1ZSBpZC5cbiAqL1xubm9kLm1ha2VDaGVja2VyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG1lZGlhdG9yKSB7XG4gICAgdmFyIGNoZWNrcyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlVG8gKGlkKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YnNjcmliZShpZCwgcGVyZm9ybUNoZWNrKTtcbiAgICB9XG5cbiAgICAvLyBSdW4gZXZlcnkgY2hlY2sgZnVuY3Rpb24gYWdhaW5zdCB0aGUgdmFsdWUgb2YgdGhlIGVsZW1lbnQuXG4gICAgZnVuY3Rpb24gcGVyZm9ybUNoZWNrIChvcHRpb25zKSB7XG4gICAgICAgIGNoZWNrcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGVjaykge1xuICAgICAgICAgICAgY2hlY2sob3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCBhIGNoZWNrIGZ1bmN0aW9uIHRvIHRoZSBlbGVtZW50LiBUaGUgcmVzdWx0IHdpbGwgYmUgaGFuZGVkIG9mZiB0byB0aGVcbiAgICAvLyBtZWRpYXRvciAoZm9yIGNoZWNrSGFuZGxlcnMgdG8gZXZhbHVhdGUpLlxuICAgIGZ1bmN0aW9uIGFkZENoZWNrIChjaGVja0Z1bmN0aW9uLCBpZCkge1xuICAgICAgICBmdW5jdGlvbiBjYWxsYmFjayAocmVzdWx0KSB7XG4gICAgICAgICAgICBtZWRpYXRvci5maXJlKHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrJyxcbiAgICAgICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiBjaGVja0Z1bmN0aW9uLnZhbGlkYXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrcy5wdXNoKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICAvLyBJZiBlbGVtZW50LnZhbHVlIGlzIHVuZGVmaW5lZCwgdGhlbiB3ZSBtaWdodCBiZSBkZWFsaW5nIHdpdGhcbiAgICAgICAgICAgIC8vIGFub3RoZXIgdHlwZSBvZiBlbGVtZW50OyBsaWtlIDxkaXYgY29udGVudGVkaXRhYmxlPSd0cnVlJz5cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGVsZW1lbnQudmFsdWUgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gZWxlbWVudC5pbm5lckhUTUxcbiAgICAgICAgICAgICAgICA6IGVsZW1lbnQudmFsdWU7XG5cbiAgICAgICAgICAgIG9wdGlvbnMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGNoZWNrRnVuY3Rpb24oY2FsbGJhY2ssIHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlVG86ICAgIHN1YnNjcmliZVRvLFxuICAgICAgICBhZGRDaGVjazogICAgICAgYWRkQ2hlY2ssXG4gICAgICAgIHBlcmZvcm1DaGVjazogICBwZXJmb3JtQ2hlY2ssXG4gICAgICAgIGVsZW1lbnQ6ICAgICAgICBlbGVtZW50XG4gICAgfTtcbn07XG5cbi8qKlxuICogbWFrZUNoZWNrSGFuZGxlclxuICpcbiAqIEhhbmRsZXMgY2hlY2tzIGNvbWluZyBpbiBmcm9tIHRoZSBtZWRpYXRvciBhbmQgdGFrZXMgY2FyZSBvZiBjYWxjdWxhdGluZyB0aGVcbiAqIHN0YXRlIGFuZCBlcnJvciBtZXNzYWdlcy5cbiAqXG4gKiBUaGUgY2hlY2tIYW5kbGVycyBsaXZlcyBpbiBvbmUgdG8gb25lIHdpdGggdGhlIGVsZW1lbnQgcGFyc2VkIGluLCBhbmQgbGlzdGVuc1xuICogZm9yICh1c3VhbGx5KSBtdWx0aXBsZSBlcnJvciBjaGVja3MuXG4gKi9cbm5vZC5tYWtlQ2hlY2tIYW5kbGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG1lZGlhdG9yLCBjb25maWd1cmF0aW9uKSB7XG4gICAgdmFyIHJlc3VsdHMgICAgID0ge30sXG4gICAgICAgIGlkICAgICAgICAgID0gbm9kLnVuaXF1ZSgpO1xuXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlVG8gKGlkLCBlcnJvck1lc3NhZ2UsIGRlZmF1bHRTdGF0dXMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgcmVwcmVzZW50YXRpb24gb2YgdGhlIHR5cGUgb2YgZXJyb3IgaW4gdGhlIHJlc3VsdHMgb2JqZWN0LlxuICAgICAgICBpZiAoIXJlc3VsdHNbaWRdKSB7XG4gICAgICAgICAgICByZXN1bHRzW2lkXSA9IHtcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGRlZmF1bHRTdGF0dXMgfHwgbm9kLmNvbnN0YW50cy5VTkNIRUNLRUQsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvck1lc3NhZ2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdWJzY3JpYmUgdG8gZXJyb3IgaWQuXG4gICAgICAgIG1lZGlhdG9yLnN1YnNjcmliZShpZCwgY2hlY2tIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjaGVja0hhbmRsZXIgKHJlc3VsdCkge1xuICAgICAgICByZXN1bHRzW3Jlc3VsdC5pZF0uc3RhdHVzID0gcmVzdWx0LnJlc3VsdFxuICAgICAgICAgICAgPyBub2QuY29uc3RhbnRzLlZBTElEXG4gICAgICAgICAgICA6IG5vZC5jb25zdGFudHMuSU5WQUxJRDtcblxuICAgICAgICBub3RpZnlNZWRpYXRvcigpO1xuICAgIH1cblxuICAgIC8vIFJ1bnMgdGhyb3VnaCBhbGwgcmVzdWx0cyB0byBzZWUgd2hhdCBraW5kIG9mIGZlZWRiYWNrIHRvIHNob3cgdGhlIHVzZXIuXG4gICAgZnVuY3Rpb24gbm90aWZ5TWVkaWF0b3IgKCkge1xuICAgICAgICB2YXIgc3RhdHVzID0gZ2V0U3RhdHVzKCk7XG5cbiAgICAgICAgLy8gRXZlbnQgaWYgbWlnaHQgYmUgdmFsaWQgd2UgcGFzcyBhbG9uZyBhbiB1bmRlZmluZWQgZXJyb3JNZXNzYWdlLlxuICAgICAgICBtZWRpYXRvci5maXJlKHtcbiAgICAgICAgICAgIGlkOiAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHR5cGU6ICAgICAgICAgICAncmVzdWx0JyxcbiAgICAgICAgICAgIHJlc3VsdDogICAgICAgICBzdGF0dXMuc3RhdHVzLFxuICAgICAgICAgICAgZWxlbWVudDogICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICAgc3RhdHVzLmVycm9yTWVzc2FnZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTdGF0dXMgKCkge1xuICAgICAgICB2YXIgc3RhdHVzLCBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgZm9yICh2YXIgaWQgaW4gcmVzdWx0cykge1xuICAgICAgICAgICAgc3RhdHVzID0gcmVzdWx0c1tpZF0uc3RhdHVzO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0c1tpZF0uc3RhdHVzID09PSBub2QuY29uc3RhbnRzLklOVkFMSUQpIHtcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSByZXN1bHRzW2lkXS5lcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3RhdHVzOiAgICAgICAgc3RhdHVzLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAgZXJyb3JNZXNzYWdlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6ICAgICAgICAgICAgIGlkLFxuICAgICAgICBzdWJzY3JpYmVUbzogICAgc3Vic2NyaWJlVG8sXG4gICAgICAgIGNoZWNrSGFuZGxlcjogICBjaGVja0hhbmRsZXIsXG4gICAgICAgIGdldFN0YXR1czogICAgICBnZXRTdGF0dXMsXG4gICAgICAgIGVsZW1lbnQ6ICAgICAgICBlbGVtZW50XG4gICAgfTtcbn07XG5cbi8vIEhlbHBlciBmdW5jdGlvbnMgZm9yIGBtYWtlRG9tTm9kZWAuXG5ub2QuaGFzQ2xhc3MgPSBmdW5jdGlvbiAoY2xhc3NOYW1lLCBlbCkge1xuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcbiAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJyk7XG4gICAgICAgIHJldHVybiAhIWVsLmNsYXNzTmFtZS5tYXRjaChyZWdleCk7XG4gICAgfVxufTtcblxubm9kLnJlbW92ZUNsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgZWwpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKG5vZC5oYXNDbGFzcyhjbGFzc05hbWUsIGVsKSkge1xuICAgICAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCcoPzpefFxcXFxzKScgKyBjbGFzc05hbWUgKyAnKD8hXFxcXFMpJyk7XG4gICAgICAgIGVsLmNsYXNzTmFtZSA9IGVsLmNsYXNzTmFtZS5yZXBsYWNlKHJlZ2V4LCAnJyk7XG4gICAgfVxufTtcblxubm9kLmFkZENsYXNzID0gZnVuY3Rpb24gKGNsYXNzTmFtZSwgZWwpIHtcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9IGVsc2UgaWYgKCFub2QuaGFzQ2xhc3MoY2xhc3NOYW1lLCBlbCkpIHtcbiAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcbiAgICB9XG59O1xuXG5ub2QuZ2V0UGFyZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbmZpZ3VyYXRpb24pIHtcbiAgICB2YXIga2xhc3MgPSBjb25maWd1cmF0aW9uLnBhcmVudENsYXNzO1xuXG4gICAgaWYgKGtsYXNzKSB7XG4gICAgICAgIGtsYXNzID0ga2xhc3MuY2hhckF0KDApID09PSAnLicgPyBrbGFzcy5zbGljZSgxKSA6IGtsYXNzO1xuICAgICAgICByZXR1cm4gbm9kLmZpbmRQYXJlbnRXaXRoQ2xhc3MoZWxlbWVudC5wYXJlbnROb2RlLCBrbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICB9XG59O1xuXG5ub2QuZmluZFBhcmVudFdpdGhDbGFzcyA9IGZ1bmN0aW9uIChwYXJlbnQsIGtsYXNzKSB7XG4gICAgLy8gR3VhcmQgKG9ubHkgdGhlIGB3aW5kb3dgIGRvZXMgbm90IGhhdmUgYSBwYXJlbnQpLlxuICAgIGlmICghcGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICAvLyBGb3VuZCBpdFxuICAgIGlmIChub2QuaGFzQ2xhc3Moa2xhc3MsIHBhcmVudCkpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICAvLyBUcnkgbmV4dCBwYXJlbnQgKHJlY3Vyc2lvbilcbiAgICByZXR1cm4gbm9kLmZpbmRQYXJlbnRXaXRoQ2xhc3MocGFyZW50LnBhcmVudE5vZGUsIGtsYXNzKTtcbn07XG5cbi8qKlxuICogbWFrZURvbU5vZGVcbiAqXG4gKiBUaGlzIGNyZWF0ZXMgdGhlIGVycm9yL3N1Y2Nlc3MgbWVzc2FnZSBiZWhpbmQgdGhlIGlucHV0IGVsZW1lbnQsIGFzIHdlbGwgYXNcbiAqIHRha2VzIGNhcmUgb2YgdXBkYXRpbmcgY2xhc3NlcyBhbmQgdGFraW5nIGNhcmUgb2YgaXRzIG93biBzdGF0ZS5cbiAqXG4gKiBUaGUgZG9tIG5vZGUgaXMgb3duZWQgYnkgY2hlY2tIYW5kbGVyLCBhbmQgaGFzIGEgb25lIHRvIG9uZSByZWxhdGlvbnNoaXAgd2l0aFxuICogYm90aCB0aGUgY2hlY2tIYW5kbGVyIGFuZCB0aGUgaW5wdXQgZWxlbWVudCBiZWluZyBjaGVja2VkLlxuICpcbiAqL1xubm9kLm1ha2VEb21Ob2RlID0gZnVuY3Rpb24gKGVsZW1lbnQsIG1lZGlhdG9yLCBjb25maWd1cmF0aW9uKSB7XG4gICAgLy8gQSAnZG9tTm9kZScgY29uc2lzdHMgb2YgdHdvIGVsZW1lbnRzOiBhICdwYXJlbnQnLCBhbmQgYSAnc3BhbicuIFRoZVxuICAgIC8vIHBhcmVudCBpcyBnaXZlbiBhcyBhIHBhcmVtZXRlciwgd2hpbGUgdGhlIHNwYW4gaXMgY3JlYXRlZCBhbmQgYWRkZWQgYXMgYVxuICAgIC8vIGNoaWxkIHRvIHRoZSBwYXJlbnQuXG4gICAgdmFyIHBhcmVudCAgICAgICAgICAgICAgPSBub2QuZ2V0UGFyZW50KGVsZW1lbnQsIGNvbmZpZ3VyYXRpb24pLFxuICAgICAgICBfc3RhdHVzICAgICAgICAgICAgID0gbm9kLmNvbnN0YW50cy5VTkNIRUNLRUQsXG4gICAgICAgIHBlbmRpbmdVcGRhdGUgICAgICAgPSBudWxsLFxuICAgICAgICBzcGFuICAgICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLFxuICAgICAgICBjdXN0b21TcGFuICAgICAgICAgID0gZmFsc2U7XG5cbiAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBpZiAoIWNvbmZpZ3VyYXRpb24ubm9Eb20pIHtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZXMgdGhlIGNsYXNzIG9mIHRoZSBwYXJlbnQgdG8gbWF0Y2ggdGhlIHN0YXR1cyBvZiB0aGUgZWxlbWVudC5cbiAgICBmdW5jdGlvbiB1cGRhdGVQYXJlbnQgKHN0YXR1cykge1xuICAgICAgICB2YXIgc3VjY2Vzc0NsYXNzID0gY29uZmlndXJhdGlvbi5zdWNjZXNzQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5vZC5jbGFzc2VzLnN1Y2Nlc3NDbGFzcyxcbiAgICAgICAgICAgIGVycm9yQ2xhc3MgPSBjb25maWd1cmF0aW9uLmVycm9yQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICB8fCBub2QuY2xhc3Nlcy5lcnJvckNsYXNzO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgIGNhc2Ugbm9kLmNvbnN0YW50cy5WQUxJRDpcbiAgICAgICAgICAgIG5vZC5yZW1vdmVDbGFzcyhlcnJvckNsYXNzLCBwYXJlbnQpO1xuICAgICAgICAgICAgbm9kLmFkZENsYXNzKHN1Y2Nlc3NDbGFzcywgcGFyZW50KTtcbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugbm9kLmNvbnN0YW50cy5JTlZBTElEOlxuICAgICAgICAgICAgbm9kLnJlbW92ZUNsYXNzKHN1Y2Nlc3NDbGFzcywgcGFyZW50KTtcbiAgICAgICAgICAgIG5vZC5hZGRDbGFzcyhlcnJvckNsYXNzLCBwYXJlbnQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGVzIHRoZSB0ZXh0IGFuZCBjbGFzcyBhY2NvcmRpbmcgdG8gdGhlIHN0YXR1cy5cbiAgICBmdW5jdGlvbiB1cGRhdGVTcGFuIChzdGF0dXMsIGVycm9yTWVzc2FnZSkge1xuICAgICAgICB2YXIgc3VjY2Vzc01lc3NhZ2VDbGFzcyA9IGNvbmZpZ3VyYXRpb24uc3VjY2Vzc01lc3NhZ2VDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IG5vZC5jbGFzc2VzLnN1Y2Nlc3NNZXNzYWdlQ2xhc3MsXG4gICAgICAgICAgZXJyb3JNZXNzYWdlQ2xhc3MgICA9IGNvbmZpZ3VyYXRpb24uZXJyb3JNZXNzYWdlQ2xhc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgbm9kLmNsYXNzZXMuZXJyb3JNZXNzYWdlQ2xhc3M7XG5cbiAgICAgICAgc3Bhbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgIGNhc2Ugbm9kLmNvbnN0YW50cy5WQUxJRDpcbiAgICAgICAgICAgIG5vZC5yZW1vdmVDbGFzcyhlcnJvck1lc3NhZ2VDbGFzcywgc3Bhbik7XG4gICAgICAgICAgICBub2QuYWRkQ2xhc3Moc3VjY2Vzc01lc3NhZ2VDbGFzcywgc3Bhbik7XG5cbiAgICAgICAgICAgIGlmIChjb25maWd1cmF0aW9uLnN1Y2Nlc3NNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IGNvbmZpZ3VyYXRpb24uc3VjY2Vzc01lc3NhZ2U7XG4gICAgICAgICAgICAgICAgc3Bhbi5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2Ugbm9kLmNvbnN0YW50cy5JTlZBTElEOlxuICAgICAgICAgICAgbm9kLnJlbW92ZUNsYXNzKHN1Y2Nlc3NNZXNzYWdlQ2xhc3MsIHNwYW4pO1xuICAgICAgICAgICAgbm9kLmFkZENsYXNzKGVycm9yTWVzc2FnZUNsYXNzLCBzcGFuKTtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XG4gICAgICAgICAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0IChvcHRpb25zKSB7XG4gICAgICAgIHZhciBzdGF0dXMgICAgICAgICAgICAgID0gb3B0aW9ucy5yZXN1bHQsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UgICAgICAgID0gb3B0aW9ucy5lcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgLy8gSWYgdGhlIGRvbSBpcyBzaG93aW5nIGFuIGludmFsaWQgbWVzc2FnZSwgd2Ugd2FudCB0byB1cGRhdGUgdGhlIGRvbVxuICAgICAgICAvLyByaWdodCBhd2F5LlxuICAgICAgICBpZiAoX3N0YXR1cyA9PT0gbm9kLmNvbnN0YW50cy5JTlZBTElEIHx8IGNvbmZpZ3VyYXRpb24uZGVsYXkgPT09IDApIHtcbiAgICAgICAgICAgIF9zdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICB1cGRhdGVQYXJlbnQoc3RhdHVzKTtcbiAgICAgICAgICAgIHVwZGF0ZVNwYW4oc3RhdHVzLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRvbSBzaG93cyBlaXRoZXIgYW4gdW5jaGVja2VkIG9yIGEgdmFsaWQgc3RhdGUgd2Ugd29uJ3RcbiAgICAgICAgICAgIC8vIHJ1c2ggdG8gdGVsbCB0aGVtIHRoZXkgYXJlIHdyb25nLiBJbnN0ZWFkIHdlIHVzZSBhIG1ldGhvZCBzaW1pbGFyXG4gICAgICAgICAgICAvLyB0byBcImRlYm91bmNpbmdcIiB0aGUgdXBkYXRlXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocGVuZGluZ1VwZGF0ZSk7XG5cbiAgICAgICAgICAgIHBlbmRpbmdVcGRhdGUgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVBhcmVudChzdGF0dXMpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVNwYW4oc3RhdHVzLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHBlbmRpbmdVcGRhdGUgPSBudWxsO1xuICAgICAgICAgICAgfSwgY29uZmlndXJhdGlvbi5kZWxheSB8fCBub2QuY29uc3RhbnRzLkRFTEFZKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZVRvIChpZCkge1xuICAgICAgICBtZWRpYXRvci5zdWJzY3JpYmUoaWQsIHNldCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0TWVzc2FnZU9wdGlvbnMgKHBhcmVudENvbnRhaW5lciwgbWVzc2FnZSkge1xuICAgICAgICBpZiAocGFyZW50Q29udGFpbmVyKSB7XG4gICAgICAgICAgICBwYXJlbnQgPSBub2QuZ2V0RWxlbWVudChwYXJlbnRDb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgIHNwYW4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzcGFuKTsgICAgICAvLyBSZW1vdmUgb2xkIHNwYW4uXG4gICAgICAgICAgICBzcGFuID0gbm9kLmdldEVsZW1lbnQobWVzc2FnZSk7ICAgICAgICAgLy8gU2V0IHRoZSBuZXcgb25lLlxuICAgICAgICAgICAgY3VzdG9tU3BhbiA9IHRydWU7ICAgICAgICAgICAgICAgICAgICAgIC8vIFNvIHdlIHdvbid0IGRlbGV0ZSBpdC5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UgKCkge1xuICAgICAgICAvLyBGaXJzdCByZW1vdmUgYW55IGNsYXNzZXNcbiAgICAgICAgbm9kLnJlbW92ZUNsYXNzKGNvbmZpZ3VyYXRpb24uZXJyb3JDbGFzc1xuICAgICAgICAgICAgICAgICAgICAgICAgfHwgbm9kLmNsYXNzZXMuZXJyb3JDbGFzcywgcGFyZW50KTtcbiAgICAgICAgbm9kLnJlbW92ZUNsYXNzKGNvbmZpZ3VyYXRpb24uc3VjY2Vzc0NsYXNzXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCBub2QuY2xhc3Nlcy5zdWNjZXNzQ2xhc3MsIHBhcmVudCk7XG5cbiAgICAgICAgLy8gVGhlbiB3ZSByZW1vdmUgdGhlIHNwYW4gaWYgaXQgd2Fzbid0IG9uZSB0aGF0IHdhcyBzZXQgYnkgdGhlIHVzZXIuXG4gICAgICAgIC8vIElmIGBub0RvbWAgd2FzIHVzZWQsIHRoZW4gdGhlcmUgd29uJ3QgYmUgYW55IHRvIHJlbW92ZS5cbiAgICAgICAgaWYgKHNwYW4ucGFyZW50Tm9kZSAmJiAhY3VzdG9tU3Bhbikge1xuICAgICAgICAgICAgc3Bhbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNwYW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlVG86ICAgICAgICBzdWJzY3JpYmVUbyxcbiAgICAgICAgZWxlbWVudDogICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICBzZXRNZXNzYWdlT3B0aW9uczogIHNldE1lc3NhZ2VPcHRpb25zLFxuICAgICAgICBkaXNwb3NlOiAgICAgICAgICAgIGRpc3Bvc2UsXG4gICAgICAgIHNldDogICAgICAgICAgICAgICAgc2V0XG4gICAgfTtcbn07XG5cbm5vZC5tYWtlRXZlbnRFbWl0dGVyID0gZnVuY3Rpb24gKG1lZGlhdG9yKSB7XG4gICAgdmFyIGN1c3RvbUV2ZW50O1xuXG4gICAgZnVuY3Rpb24gZW1pdCAob3B0aW9ucykge1xuICAgICAgICBpZiAoQ3VzdG9tRXZlbnQpIHtcbiAgICAgICAgICAgIGN1c3RvbUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdub2QudmFsaWRhdGlvbicsIHtkZXRhaWw6IG9wdGlvbnN9KTtcblxuICAgICAgICAgICAgb3B0aW9ucy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoY3VzdG9tRXZlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGVycm9yTXNnID0gJ25vZC52YWxpZGF0ZSB0cmllZCB0byBmaXJlIGEgY3VzdG9tIGV2ZW50LCBidXQgJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAndGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBDdXN0b21FdmVudFxcJ3MnO1xuXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihlcnJvck1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUgKGlkKSB7XG4gICAgICAgIG1lZGlhdG9yLnN1YnNjcmliZShpZCwgZW1pdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmVcbiAgICB9O1xufTtcblxuLyoqXG4gKiBnZXRFbGVtZW50XG4gKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCB0YXJnZXRlZCBieSB0aGUgc2VsZWN0b3IuIChzZWUgYGdldEVsZW1lbnRzYClcbiAqL1xubm9kLmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbm9kLmdldEVsZW1lbnRzKHNlbGVjdG9yKVswXTtcbn07XG5cbi8qKlxuICogZ2V0RWxlbWVudHNcbiAqXG4gKiBUYWtlcyBzb21lIHNvcnQgb2Ygc2VsZWN0b3IsIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIGVsZW1lbnQocykuIFRoZSBhcHBsaWVkXG4gKiBzZWxlY3RvciBjYW4gYmUgb25lIG9mOlxuICpcbiAqIC0gQ3NzIHR5cGUgc2VsZWN0b3IgKGUuZy4sIFwiLmZvb1wiKVxuICogLSBBIGpRdWVyeSBlbGVtZW50IChlLmcuLCAkKCcuZm9vKSlcbiAqIC0gQSBzaW5nbGUgcmF3IGRvbSBlbGVtZW50IChlLmcuLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vJykpXG4gKiAtIEEgbGlzdCBvZiByYXcgZG9tIGVsZW1lbnQgKGUuZy4sICQoJy5mb28nKS5nZXQoKSlcbiAqL1xubm9kLmdldEVsZW1lbnRzID0gZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsIGNzcyB0eXBlIHNlbGVjdG9yIGlzIGFzc3VtZWRcbiAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGpRdWVyeSwgdGhlbiB3ZSB1c2UgdGhhdCB0byBjcmVhdGUgYSBkb20gbGlzdCBmb3IgdXMuXG4gICAgICAgIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmpRdWVyeShzZWxlY3RvcikuZ2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBub3QsIHRoZW4gd2UgZG8gaXQgdGhlIG1hbnVhbCB3YXkuXG4gICAgICAgIHZhciBub2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuXG4gICAgICAgIHJldHVybiBbXS5tYXAuY2FsbChub2RlTGlzdCwgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGlmIHVzZXIgZ2F2ZSB1cyBqUXVlcnkgZWxlbWVudHNcbiAgICBpZiAoc2VsZWN0b3IuanF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBzZWxlY3Rvci5nZXQoKTtcbiAgICB9XG5cbiAgICAvLyBSYXcgRE9NIGVsZW1lbnRcbiAgICBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIFtzZWxlY3Rvcl07XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc2VsZWN0b3IpKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBzZWxlY3Rvci5mb3JFYWNoKGZ1bmN0aW9uIChzZWwpIHtcbiAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IG5vZC5nZXRFbGVtZW50cyhzZWwpO1xuXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGVsZW1lbnRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0aHJvdyBFcnJvcignVW5rbm93biB0eXBlIG9mIGVsZW1lbnRzIGluIHlvdXIgYHNlbGVjdG9yYDogJyArIHNlbGVjdG9yKTtcbn07XG5cbm5vZC5nZXRDaGVja0Z1bmN0aW9uID0gZnVuY3Rpb24gKG1ldHJpYykge1xuICAgIGlmICh0eXBlb2YgbWV0cmljLnZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBtZXRyaWMudmFsaWRhdGU7XG4gICAgfVxuXG4gICAgaWYgKG1ldHJpYy52YWxpZGF0ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gbm9kLmNoZWNrRnVuY3Rpb25zLnJlZ2V4cChtZXRyaWMudmFsaWRhdGUpO1xuICAgIH1cblxuICAgIHZhciBhcmdzICAgPSBtZXRyaWMudmFsaWRhdGUuc3BsaXQoJzonKSxcbiAgICAgICAgZm5OYW1lID0gYXJncy5zaGlmdCgpO1xuXG4gICAgaWYgKGZuTmFtZSA9PT0gJ29uZS1vZicgfHwgZm5OYW1lID09PSAnb25seS1vbmUtb2YnIHx8XG4gICAgICAgIGZuTmFtZSA9PT0gJ3NhbWUtYXMnIHx8IGZuTmFtZSA9PT0gJ3NvbWUtcmFkaW8nKSB7XG4gICAgICAgIGFyZ3MucHVzaChtZXRyaWMuc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygbm9kLmNoZWNrRnVuY3Rpb25zW2ZuTmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5vZC5jaGVja0Z1bmN0aW9uc1tmbk5hbWVdLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBlcnJvck1zZyA9ICdDb3VsZG5cXCd0IGZpbmQgeW91ciB2YWxpZGF0b3IgZnVuY3Rpb24gXCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgZm5OYW1lICsgJ1wiIGZvciBcIicgKyBtZXRyaWMuc2VsZWN0b3IgKyAnXCInO1xuXG4gICAgICAgIHRocm93IEVycm9yKGVycm9yTXNnKTtcbiAgICB9XG59O1xuXG4vLyBDb2xsZWN0aW9uIG9mIGJ1aWx0LWluIGNoZWNrIGZ1bmN0aW9uc1xubm9kLmNoZWNrRnVuY3Rpb25zID0ge1xuICAgICdwcmVzZW5jZSc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHByZXNlbmNlIChjYWxsYmFjaywgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKHZhbHVlLmxlbmd0aCA+IDApO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnZXhhY3QnOiBmdW5jdGlvbiAoZXhhY3RWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZXhhY3QgKGNhbGxiYWNrLCB2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sodmFsdWUgPT09IGV4YWN0VmFsdWUpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnY29udGFpbnMnOiBmdW5jdGlvbiAoY29udGFpbnNWYWx1ZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY29udGFpbnMgKGNhbGxiYWNrLCB2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sodmFsdWUuaW5kZXhPZihjb250YWluc1ZhbHVlKSA+IC0xKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ25vdCc6IGZ1bmN0aW9uIChleGFjdFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBub3QgKGNhbGxiYWNrLCB2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sodmFsdWUgIT09IGV4YWN0VmFsdWUpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnbWluLWxlbmd0aCc6IGZ1bmN0aW9uIChtaW5pbXVtTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtaW5MZW5ndGggKGNhbGxiYWNrLCB2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sodmFsdWUubGVuZ3RoID49IG1pbmltdW1MZW5ndGgpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnbWF4LWxlbmd0aCc6IGZ1bmN0aW9uIChtYXhpbXVtTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBtYXhMZW5ndGggKGNhbGxiYWNrLCB2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2sodmFsdWUubGVuZ3RoIDw9IG1heGltdW1MZW5ndGgpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnZXhhY3QtbGVuZ3RoJzogZnVuY3Rpb24gKGV4YWN0TGVuKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBleGFjdExlbmd0aCAoY2FsbGJhY2ssIHZhbHVlKSB7XG4gICAgICAgICAgICBjYWxsYmFjayh2YWx1ZS5sZW5ndGggPT09ICtleGFjdExlbik7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdiZXR3ZWVuLWxlbmd0aCc6IGZ1bmN0aW9uIChtaW5pbXVtTGVuZ3RoLCBtYXhpbXVtTGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBiZXR3ZWVuTGVuZ3RoIChjYWxsYmFjaywgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBhYm92ZU1pbkxlbmd0aCA9IHZhbHVlLmxlbmd0aCA+PSBtaW5pbXVtTGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJlbG93TWF4TGVuZ3RoID0gdmFsdWUubGVuZ3RoIDw9IG1heGltdW1MZW5ndGg7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKGFib3ZlTWluTGVuZ3RoICYmIGJlbG93TWF4TGVuZ3RoKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ21heC1udW1iZXInOiBmdW5jdGlvbiAobWF4aW11bU51bWJlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbWF4TnVtYmVyIChjYWxsYmFjaywgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCt2YWx1ZSA8PSBtYXhpbXVtTnVtYmVyKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ21pbi1udW1iZXInOiBmdW5jdGlvbiAobWluaW11bU51bWJlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gbWluTnVtYmVyIChjYWxsYmFjaywgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCt2YWx1ZSA+PSBtaW5pbXVtTnVtYmVyKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2JldHdlZW4tbnVtYmVyJzogZnVuY3Rpb24gKG1pbmltdW1OdW1iZXIsIG1heGltdW1OdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGJldHdlZW5OdW1iZXIgKGNhbGxiYWNrLCB2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2soK3ZhbHVlID49IG1pbmltdW1OdW1iZXIgJiYgK3ZhbHVlIDw9IG1heGltdW1OdW1iZXIpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnaW50ZWdlcic6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjYWxsYmFjaywgdmFsdWUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC9eXFxzKlxcZCtcXHMqJC8udGVzdCh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnZmxvYXQnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2ssIHZhbHVlKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygvXlstK10/WzAtOV0rKFxcLlswLTldKyk/JC8udGVzdCh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnc2FtZS1hcyc6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgc2FtZUFzRWxlbWVudCA9IG5vZC5nZXRFbGVtZW50KHNlbGVjdG9yKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gc2FtZUFzIChjYWxsYmFjaywgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIC8vICdzYW1lLWFzJyBpcyBzcGVjaWFsLCBpbiB0aGF0IGlmIGl0IGlzIHRyaWdnZXJlZCBieSBhbm90aGVyIGZpZWxkXG4gICAgICAgICAgICAvLyAodGhlIG9uZSBpdCBzaG91bGQgYmUgc2ltaWxhciB0byksIGFuZCB0aGUgZmllbGQgaXRzZWxmIGlzIGVtcHR5LFxuICAgICAgICAgICAgLy8gdGhlbiBpdCBiYWlscyBvdXQgd2l0aG91dCBhIGNoZWNrLiBUaGlzIGlzIHRvIGF2b2lkIHNob3dpbmcgYW5cbiAgICAgICAgICAgIC8vIGVycm9yIG1lc3NhZ2UgYmVmb3JlIHRoZSB1c2VyIGhhcyBldmVuIHJlYWNoZWQgdGhlIGVsZW1lbnQuXG4gICAgICAgICAgICBpZiAob3B0aW9ucyAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZXZlbnQgJiZcbiAgICAgICAgICAgICAgICBvcHRpb25zLmV2ZW50LnRhcmdldCAmJlxuICAgICAgICAgICAgICAgIG9wdGlvbnMuZXZlbnQudGFyZ2V0ICE9PSBvcHRpb25zLmVsZW1lbnQgJiZcbiAgICAgICAgICAgICAgICB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKHZhbHVlID09PSBzYW1lQXNFbGVtZW50LnZhbHVlKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ29uZS1vZic6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBub2QuZ2V0RWxlbWVudHMoc2VsZWN0b3IpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFZhbHVlcyAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudHMucmVkdWNlKGZ1bmN0aW9uIChtZW1vLCBlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1lbW8gKyAnJyArIChlbGVtZW50LnZhbHVlIHx8ICcnKTtcbiAgICAgICAgICAgIH0sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbmVPZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGdldFZhbHVlcygpLnRyaW0oKS5sZW5ndGggPiAwKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ29ubHktb25lLW9mJzogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IG5vZC5nZXRFbGVtZW50cyhzZWxlY3Rvcik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9ubHlPbmVPZiAoY2FsbGJhY2ssIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbnVtT2ZWYWx1ZXMgPSAwO1xuXG4gICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtT2ZWYWx1ZXMrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2FsbGJhY2sobnVtT2ZWYWx1ZXMgPT09IDEpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnY2hlY2tlZCc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGNoZWNrZWQgKGNhbGxiYWNrLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICAgICAgY2FsbGJhY2sob3B0aW9ucy5lbGVtZW50LmNoZWNrZWQpO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAnc29tZS1yYWRpbyc6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICB2YXIgcmFkaW9FbGVtZW50cyA9IG5vZC5nZXRFbGVtZW50cyhzZWxlY3Rvcik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNvbWVSYWRpbyAoY2FsbGJhY2ssIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmFkaW9FbGVtZW50cy5yZWR1Y2UoZnVuY3Rpb24gKG1lbW8sIGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWVtbyB8fCBlbGVtZW50LmNoZWNrZWQ7XG4gICAgICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgICdyZWdleHAnOiBmdW5jdGlvbiAocmVnKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiByZWdFeHAgKGNhbGxiYWNrLCB2YWx1ZSkge1xuICAgICAgICAgICAgY2FsbGJhY2socmVnLnRlc3QodmFsdWUpKTtcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgJ2VtYWlsJzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgUkZDODIyID0gL14oW15cXHgwMC1cXHgyMFxceDIyXFx4MjhcXHgyOVxceDJjXFx4MmVcXHgzYS1cXHgzY1xceDNlXFx4NDBcXHg1Yi1cXHg1ZFxceDdmLVxceGZmXSt8XFx4MjIoW15cXHgwZFxceDIyXFx4NWNcXHg4MC1cXHhmZl18XFx4NWNbXFx4MDAtXFx4N2ZdKSpcXHgyMikoXFx4MmUoW15cXHgwMC1cXHgyMFxceDIyXFx4MjhcXHgyOVxceDJjXFx4MmVcXHgzYS1cXHgzY1xceDNlXFx4NDBcXHg1Yi1cXHg1ZFxceDdmLVxceGZmXSt8XFx4MjIoW15cXHgwZFxceDIyXFx4NWNcXHg4MC1cXHhmZl18XFx4NWNbXFx4MDAtXFx4N2ZdKSpcXHgyMikpKlxceDQwKFteXFx4MDAtXFx4MjBcXHgyMlxceDI4XFx4MjlcXHgyY1xceDJlXFx4M2EtXFx4M2NcXHgzZVxceDQwXFx4NWItXFx4NWRcXHg3Zi1cXHhmZl0rfFxceDViKFteXFx4MGRcXHg1Yi1cXHg1ZFxceDgwLVxceGZmXXxcXHg1Y1tcXHgwMC1cXHg3Zl0pKlxceDVkKShcXHgyZShbXlxceDAwLVxceDIwXFx4MjJcXHgyOFxceDI5XFx4MmNcXHgyZVxceDNhLVxceDNjXFx4M2VcXHg0MFxceDViLVxceDVkXFx4N2YtXFx4ZmZdK3xcXHg1YihbXlxceDBkXFx4NWItXFx4NWRcXHg4MC1cXHhmZl18XFx4NWNbXFx4MDAtXFx4N2ZdKSpcXHg1ZCkpKiQvO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBlbWFpbCAoY2FsbGJhY2ssIHZhbHVlKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhSRkM4MjIudGVzdCh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgIH1cbn07XG5cbi8vIEN1c3RvbUV2ZW50IHBvbHlmaWxsIGZvciBvbGRlciBJRSB2ZXJzaW9ucy4gVGFrZW4gZnJvbVxuLy8gZ2l0aHViLmNvbS9kNHRvY2NoaW5pL2N1c3RvbWV2ZW50LXBvbHlmaWxsL2Jsb2IvbWFzdGVyL0N1c3RvbUV2ZW50LmpzXG50cnkge1xuICAgIG5ldyBDdXN0b21FdmVudChcInRlc3RcIik7XG59IGNhdGNoIChlKSB7XG4gICAgdmFyIEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgICAgdmFyIGV2dDtcbiAgICAgICAgcGFyYW1zID0gcGFyYW1zIHx8IHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBkZXRhaWw6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuXG4gICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmJ1YmJsZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNhbmNlbGFibGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmRldGFpbCk7XG4gICAgICAgIHJldHVybiBldnQ7XG4gICAgfTtcblxuICAgIEN1c3RvbUV2ZW50LnByb3RvdHlwZSA9IHdpbmRvdy5FdmVudC5wcm90b3R5cGU7XG4gICAgd2luZG93LkN1c3RvbUV2ZW50ID0gQ3VzdG9tRXZlbnQ7XG59XG5cbi8vIFNhZmVseSBleHBvcnQgbm9kLlxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBub2Q7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9