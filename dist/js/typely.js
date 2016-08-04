var Typely =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _radio = __webpack_require__(1);

	var _radio2 = _interopRequireDefault(_radio);

	var _root = __webpack_require__(9);

	var _root2 = _interopRequireDefault(_root);

	var _editor = __webpack_require__(10);

	var _editor2 = _interopRequireDefault(_editor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Typely = function Typely() {
		var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		var container = _ref.container;
		var _ref$maxFileSize = _ref.maxFileSize;
		var maxFileSize = _ref$maxFileSize === undefined ? 5 * 1024 * 1024 : _ref$maxFileSize;
		var _ref$allowTrailingMed = _ref.allowTrailingMedia;
		var allowTrailingMedia = _ref$allowTrailingMed === undefined ? true : _ref$allowTrailingMed;

		_classCallCheck(this, Typely);

		if (!container) {
			throw 'TypelyError: container is not set';
		}

		var rootView = this.rootView = new _root2.default();
		rootView.addRegion('editor', container);

		this.editorView = new _editor2.default({
			maxFileSize: maxFileSize,
			allowTrailingMedia: allowTrailingMedia
		});

		rootView.getRegion('editor').show(this.editorView);
	};

		exports.default = Typely;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(8), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Marionette, Radio, _) {
	      return factory(Marionette, Radio, _);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  }
	  else if (typeof exports !== 'undefined') {
	    var Marionette = require('backbone.marionette');
	    var Radio = require('backbone.radio');
	    var _ = require('underscore');
	    module.exports = factory(Marionette, Radio, _);
	  }
	  else {
	    factory(root.Backbone.Marionette, root.Backbone.Radio, root._);
	  }
	}(this, function(Marionette, Radio, _) {
	  'use strict';

	  Marionette.Application.prototype._initChannel = function () {
	    this.channelName = _.result(this, 'channelName') || 'global';
	    this.channel = _.result(this, 'channel') || Radio.channel(this.channelName);
	  }
	}));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// MarionetteJS (Backbone.Marionette)
	// ----------------------------------
	// v2.4.7
	//
	// Copyright (c)2016 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://marionettejs.com

	(function(root, factory) {

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4), __webpack_require__(6), __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Backbone, _) {
	      return (root.Marionette = root.Mn = factory(root, Backbone, _));
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    var Backbone = require('backbone');
	    var _ = require('underscore');
	    var Wreqr = require('backbone.wreqr');
	    var BabySitter = require('backbone.babysitter');
	    module.exports = factory(root, Backbone, _);
	  } else {
	    root.Marionette = root.Mn = factory(root, root.Backbone, root._);
	  }

	}(this, function(root, Backbone, _) {
	  'use strict';

	  var previousMarionette = root.Marionette;
	  var previousMn = root.Mn;

	  var Marionette = Backbone.Marionette = {};

	  Marionette.VERSION = '2.4.7';

	  Marionette.noConflict = function() {
	    root.Marionette = previousMarionette;
	    root.Mn = previousMn;
	    return this;
	  };

	  // Get the Deferred creator for later use
	  Marionette.Deferred = Backbone.$.Deferred;

	  Marionette.FEATURES = {
	  };
	  
	  Marionette.isEnabled = function(name) {
	    return !!Marionette.FEATURES[name];
	  };
	  
	  /* jshint unused: false *//* global console */
	  
	  // Helpers
	  // -------
	  
	  // Marionette.extend
	  // -----------------
	  
	  // Borrow the Backbone `extend` method so we can use it as needed
	  Marionette.extend = Backbone.Model.extend;
	  
	  // Marionette.isNodeAttached
	  // -------------------------
	  
	  // Determine if `el` is a child of the document
	  Marionette.isNodeAttached = function(el) {
	    return Backbone.$.contains(document.documentElement, el);
	  };
	  
	  // Merge `keys` from `options` onto `this`
	  Marionette.mergeOptions = function(options, keys) {
	    if (!options) { return; }
	    _.extend(this, _.pick(options, keys));
	  };
	  
	  // Marionette.getOption
	  // --------------------
	  
	  // Retrieve an object, function or other value from a target
	  // object or its `options`, with `options` taking precedence.
	  Marionette.getOption = function(target, optionName) {
	    if (!target || !optionName) { return; }
	    if (target.options && (target.options[optionName] !== undefined)) {
	      return target.options[optionName];
	    } else {
	      return target[optionName];
	    }
	  };
	  
	  // Proxy `Marionette.getOption`
	  Marionette.proxyGetOption = function(optionName) {
	    return Marionette.getOption(this, optionName);
	  };
	  
	  // Similar to `_.result`, this is a simple helper
	  // If a function is provided we call it with context
	  // otherwise just return the value. If the value is
	  // undefined return a default value
	  Marionette._getValue = function(value, context, params) {
	    if (_.isFunction(value)) {
	      value = params ? value.apply(context, params) : value.call(context);
	    }
	    return value;
	  };
	  
	  // Marionette.normalizeMethods
	  // ----------------------
	  
	  // Pass in a mapping of events => functions or function names
	  // and return a mapping of events => functions
	  Marionette.normalizeMethods = function(hash) {
	    return _.reduce(hash, function(normalizedHash, method, name) {
	      if (!_.isFunction(method)) {
	        method = this[method];
	      }
	      if (method) {
	        normalizedHash[name] = method;
	      }
	      return normalizedHash;
	    }, {}, this);
	  };
	  
	  // utility method for parsing @ui. syntax strings
	  // into associated selector
	  Marionette.normalizeUIString = function(uiString, ui) {
	    return uiString.replace(/@ui\.[a-zA-Z-_$0-9]*/g, function(r) {
	      return ui[r.slice(4)];
	    });
	  };
	  
	  // allows for the use of the @ui. syntax within
	  // a given key for triggers and events
	  // swaps the @ui with the associated selector.
	  // Returns a new, non-mutated, parsed events hash.
	  Marionette.normalizeUIKeys = function(hash, ui) {
	    return _.reduce(hash, function(memo, val, key) {
	      var normalizedKey = Marionette.normalizeUIString(key, ui);
	      memo[normalizedKey] = val;
	      return memo;
	    }, {});
	  };
	  
	  // allows for the use of the @ui. syntax within
	  // a given value for regions
	  // swaps the @ui with the associated selector
	  Marionette.normalizeUIValues = function(hash, ui, properties) {
	    _.each(hash, function(val, key) {
	      if (_.isString(val)) {
	        hash[key] = Marionette.normalizeUIString(val, ui);
	      } else if (_.isObject(val) && _.isArray(properties)) {
	        _.extend(val, Marionette.normalizeUIValues(_.pick(val, properties), ui));
	        /* Value is an object, and we got an array of embedded property names to normalize. */
	        _.each(properties, function(property) {
	          var propertyVal = val[property];
	          if (_.isString(propertyVal)) {
	            val[property] = Marionette.normalizeUIString(propertyVal, ui);
	          }
	        });
	      }
	    });
	    return hash;
	  };
	  
	  // Mix in methods from Underscore, for iteration, and other
	  // collection related features.
	  // Borrowing this code from Backbone.Collection:
	  // http://backbonejs.org/docs/backbone.html#section-121
	  Marionette.actAsCollection = function(object, listProperty) {
	    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
	      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
	      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
	      'last', 'without', 'isEmpty', 'pluck'];
	  
	    _.each(methods, function(method) {
	      object[method] = function() {
	        var list = _.values(_.result(this, listProperty));
	        var args = [list].concat(_.toArray(arguments));
	        return _[method].apply(_, args);
	      };
	    });
	  };
	  
	  var deprecate = Marionette.deprecate = function(message, test) {
	    if (_.isObject(message)) {
	      message = (
	        message.prev + ' is going to be removed in the future. ' +
	        'Please use ' + message.next + ' instead.' +
	        (message.url ? ' See: ' + message.url : '')
	      );
	    }
	  
	    if ((test === undefined || !test) && !deprecate._cache[message]) {
	      deprecate._warn('Deprecation warning: ' + message);
	      deprecate._cache[message] = true;
	    }
	  };
	  
	  deprecate._console = typeof console !== 'undefined' ? console : {};
	  deprecate._warn = function() {
	    var warn = deprecate._console.warn || deprecate._console.log || function() {};
	    return warn.apply(deprecate._console, arguments);
	  };
	  deprecate._cache = {};
	  
	  /* jshint maxstatements: 14, maxcomplexity: 7 */
	  
	  // Trigger Method
	  // --------------
	  
	  Marionette._triggerMethod = (function() {
	    // split the event name on the ":"
	    var splitter = /(^|:)(\w)/gi;
	  
	    // take the event section ("section1:section2:section3")
	    // and turn it in to uppercase name
	    function getEventName(match, prefix, eventName) {
	      return eventName.toUpperCase();
	    }
	  
	    return function(context, event, args) {
	      var noEventArg = arguments.length < 3;
	      if (noEventArg) {
	        args = event;
	        event = args[0];
	      }
	  
	      // get the method name from the event name
	      var methodName = 'on' + event.replace(splitter, getEventName);
	      var method = context[methodName];
	      var result;
	  
	      // call the onMethodName if it exists
	      if (_.isFunction(method)) {
	        // pass all args, except the event name
	        result = method.apply(context, noEventArg ? _.rest(args) : args);
	      }
	  
	      // trigger the event, if a trigger method exists
	      if (_.isFunction(context.trigger)) {
	        if (noEventArg + args.length > 1) {
	          context.trigger.apply(context, noEventArg ? args : [event].concat(_.drop(args, 0)));
	        } else {
	          context.trigger(event);
	        }
	      }
	  
	      return result;
	    };
	  })();
	  
	  // Trigger an event and/or a corresponding method name. Examples:
	  //
	  // `this.triggerMethod("foo")` will trigger the "foo" event and
	  // call the "onFoo" method.
	  //
	  // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
	  // call the "onFooBar" method.
	  Marionette.triggerMethod = function(event) {
	    return Marionette._triggerMethod(this, arguments);
	  };
	  
	  // triggerMethodOn invokes triggerMethod on a specific context
	  //
	  // e.g. `Marionette.triggerMethodOn(view, 'show')`
	  // will trigger a "show" event or invoke onShow the view.
	  Marionette.triggerMethodOn = function(context) {
	    var fnc = _.isFunction(context.triggerMethod) ?
	                  context.triggerMethod :
	                  Marionette.triggerMethod;
	  
	    return fnc.apply(context, _.rest(arguments));
	  };
	  
	  // DOM Refresh
	  // -----------
	  
	  // Monitor a view's state, and after it has been rendered and shown
	  // in the DOM, trigger a "dom:refresh" event every time it is
	  // re-rendered.
	  
	  Marionette.MonitorDOMRefresh = function(view) {
	    if (view._isDomRefreshMonitored) { return; }
	    view._isDomRefreshMonitored = true;
	  
	    // track when the view has been shown in the DOM,
	    // using a Marionette.Region (or by other means of triggering "show")
	    function handleShow() {
	      view._isShown = true;
	      triggerDOMRefresh();
	    }
	  
	    // track when the view has been rendered
	    function handleRender() {
	      view._isRendered = true;
	      triggerDOMRefresh();
	    }
	  
	    // Trigger the "dom:refresh" event and corresponding "onDomRefresh" method
	    function triggerDOMRefresh() {
	      if (view._isShown && view._isRendered && Marionette.isNodeAttached(view.el)) {
	        Marionette.triggerMethodOn(view, 'dom:refresh', view);
	      }
	    }
	  
	    view.on({
	      show: handleShow,
	      render: handleRender
	    });
	  };
	  
	  /* jshint maxparams: 5 */
	  
	  // Bind Entity Events & Unbind Entity Events
	  // -----------------------------------------
	  //
	  // These methods are used to bind/unbind a backbone "entity" (e.g. collection/model)
	  // to methods on a target object.
	  //
	  // The first parameter, `target`, must have the Backbone.Events module mixed in.
	  //
	  // The second parameter is the `entity` (Backbone.Model, Backbone.Collection or
	  // any object that has Backbone.Events mixed in) to bind the events from.
	  //
	  // The third parameter is a hash of { "event:name": "eventHandler" }
	  // configuration. Multiple handlers can be separated by a space. A
	  // function can be supplied instead of a string handler name.
	  
	  (function(Marionette) {
	    'use strict';
	  
	    // Bind the event to handlers specified as a string of
	    // handler names on the target object
	    function bindFromStrings(target, entity, evt, methods) {
	      var methodNames = methods.split(/\s+/);
	  
	      _.each(methodNames, function(methodName) {
	  
	        var method = target[methodName];
	        if (!method) {
	          throw new Marionette.Error('Method "' + methodName +
	            '" was configured as an event handler, but does not exist.');
	        }
	  
	        target.listenTo(entity, evt, method);
	      });
	    }
	  
	    // Bind the event to a supplied callback function
	    function bindToFunction(target, entity, evt, method) {
	      target.listenTo(entity, evt, method);
	    }
	  
	    // Bind the event to handlers specified as a string of
	    // handler names on the target object
	    function unbindFromStrings(target, entity, evt, methods) {
	      var methodNames = methods.split(/\s+/);
	  
	      _.each(methodNames, function(methodName) {
	        var method = target[methodName];
	        target.stopListening(entity, evt, method);
	      });
	    }
	  
	    // Bind the event to a supplied callback function
	    function unbindToFunction(target, entity, evt, method) {
	      target.stopListening(entity, evt, method);
	    }
	  
	    // generic looping function
	    function iterateEvents(target, entity, bindings, functionCallback, stringCallback) {
	      if (!entity || !bindings) { return; }
	  
	      // type-check bindings
	      if (!_.isObject(bindings)) {
	        throw new Marionette.Error({
	          message: 'Bindings must be an object or function.',
	          url: 'marionette.functions.html#marionettebindentityevents'
	        });
	      }
	  
	      // allow the bindings to be a function
	      bindings = Marionette._getValue(bindings, target);
	  
	      // iterate the bindings and bind them
	      _.each(bindings, function(methods, evt) {
	  
	        // allow for a function as the handler,
	        // or a list of event names as a string
	        if (_.isFunction(methods)) {
	          functionCallback(target, entity, evt, methods);
	        } else {
	          stringCallback(target, entity, evt, methods);
	        }
	  
	      });
	    }
	  
	    // Export Public API
	    Marionette.bindEntityEvents = function(target, entity, bindings) {
	      iterateEvents(target, entity, bindings, bindToFunction, bindFromStrings);
	    };
	  
	    Marionette.unbindEntityEvents = function(target, entity, bindings) {
	      iterateEvents(target, entity, bindings, unbindToFunction, unbindFromStrings);
	    };
	  
	    // Proxy `bindEntityEvents`
	    Marionette.proxyBindEntityEvents = function(entity, bindings) {
	      return Marionette.bindEntityEvents(this, entity, bindings);
	    };
	  
	    // Proxy `unbindEntityEvents`
	    Marionette.proxyUnbindEntityEvents = function(entity, bindings) {
	      return Marionette.unbindEntityEvents(this, entity, bindings);
	    };
	  })(Marionette);
	  

	  // Error
	  // -----
	  
	  var errorProps = ['description', 'fileName', 'lineNumber', 'name', 'message', 'number'];
	  
	  Marionette.Error = Marionette.extend.call(Error, {
	    urlRoot: 'http://marionettejs.com/docs/v' + Marionette.VERSION + '/',
	  
	    constructor: function(message, options) {
	      if (_.isObject(message)) {
	        options = message;
	        message = options.message;
	      } else if (!options) {
	        options = {};
	      }
	  
	      var error = Error.call(this, message);
	      _.extend(this, _.pick(error, errorProps), _.pick(options, errorProps));
	  
	      this.captureStackTrace();
	  
	      if (options.url) {
	        this.url = this.urlRoot + options.url;
	      }
	    },
	  
	    captureStackTrace: function() {
	      if (Error.captureStackTrace) {
	        Error.captureStackTrace(this, Marionette.Error);
	      }
	    },
	  
	    toString: function() {
	      return this.name + ': ' + this.message + (this.url ? ' See: ' + this.url : '');
	    }
	  });
	  
	  Marionette.Error.extend = Marionette.extend;
	  
	  // Callbacks
	  // ---------
	  
	  // A simple way of managing a collection of callbacks
	  // and executing them at a later point in time, using jQuery's
	  // `Deferred` object.
	  Marionette.Callbacks = function() {
	    this._deferred = Marionette.Deferred();
	    this._callbacks = [];
	  };
	  
	  _.extend(Marionette.Callbacks.prototype, {
	  
	    // Add a callback to be executed. Callbacks added here are
	    // guaranteed to execute, even if they are added after the
	    // `run` method is called.
	    add: function(callback, contextOverride) {
	      var promise = _.result(this._deferred, 'promise');
	  
	      this._callbacks.push({cb: callback, ctx: contextOverride});
	  
	      promise.then(function(args) {
	        if (contextOverride) { args.context = contextOverride; }
	        callback.call(args.context, args.options);
	      });
	    },
	  
	    // Run all registered callbacks with the context specified.
	    // Additional callbacks can be added after this has been run
	    // and they will still be executed.
	    run: function(options, context) {
	      this._deferred.resolve({
	        options: options,
	        context: context
	      });
	    },
	  
	    // Resets the list of callbacks to be run, allowing the same list
	    // to be run multiple times - whenever the `run` method is called.
	    reset: function() {
	      var callbacks = this._callbacks;
	      this._deferred = Marionette.Deferred();
	      this._callbacks = [];
	  
	      _.each(callbacks, function(cb) {
	        this.add(cb.cb, cb.ctx);
	      }, this);
	    }
	  });
	  
	  // Controller
	  // ----------
	  
	  // A multi-purpose object to use as a controller for
	  // modules and routers, and as a mediator for workflow
	  // and coordination of other objects, views, and more.
	  Marionette.Controller = function(options) {
	    this.options = options || {};
	  
	    if (_.isFunction(this.initialize)) {
	      this.initialize(this.options);
	    }
	  };
	  
	  Marionette.Controller.extend = Marionette.extend;
	  
	  // Controller Methods
	  // --------------
	  
	  // Ensure it can trigger events with Backbone.Events
	  _.extend(Marionette.Controller.prototype, Backbone.Events, {
	    destroy: function() {
	      Marionette._triggerMethod(this, 'before:destroy', arguments);
	      Marionette._triggerMethod(this, 'destroy', arguments);
	  
	      this.stopListening();
	      this.off();
	      return this;
	    },
	  
	    // import the `triggerMethod` to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: Marionette.triggerMethod,
	  
	    // A handy way to merge options onto the instance
	    mergeOptions: Marionette.mergeOptions,
	  
	    // Proxy `getOption` to enable getting options from this or this.options by name.
	    getOption: Marionette.proxyGetOption
	  
	  });
	  
	  // Object
	  // ------
	  
	  // A Base Class that other Classes should descend from.
	  // Object borrows many conventions and utilities from Backbone.
	  Marionette.Object = function(options) {
	    this.options = _.extend({}, _.result(this, 'options'), options);
	  
	    this.initialize.apply(this, arguments);
	  };
	  
	  Marionette.Object.extend = Marionette.extend;
	  
	  // Object Methods
	  // --------------
	  
	  // Ensure it can trigger events with Backbone.Events
	  _.extend(Marionette.Object.prototype, Backbone.Events, {
	  
	    //this is a noop method intended to be overridden by classes that extend from this base
	    initialize: function() {},
	  
	    destroy: function(options) {
	      options = options || {};
	  
	      this.triggerMethod('before:destroy', options);
	      this.triggerMethod('destroy', options);
	      this.stopListening();
	  
	      return this;
	    },
	  
	    // Import the `triggerMethod` to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: Marionette.triggerMethod,
	  
	    // A handy way to merge options onto the instance
	    mergeOptions: Marionette.mergeOptions,
	  
	    // Proxy `getOption` to enable getting options from this or this.options by name.
	    getOption: Marionette.proxyGetOption,
	  
	    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
	    bindEntityEvents: Marionette.proxyBindEntityEvents,
	  
	    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
	    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
	  });
	  
	  /* jshint maxcomplexity: 16, maxstatements: 45, maxlen: 120 */
	  
	  // Region
	  // ------
	  
	  // Manage the visual regions of your composite application. See
	  // http://lostechies.com/derickbailey/2011/12/12/composite-js-apps-regions-and-region-managers/
	  
	  Marionette.Region = Marionette.Object.extend({
	    constructor: function(options) {
	  
	      // set options temporarily so that we can get `el`.
	      // options will be overriden by Object.constructor
	      this.options = options || {};
	      this.el = this.getOption('el');
	  
	      // Handle when this.el is passed in as a $ wrapped element.
	      this.el = this.el instanceof Backbone.$ ? this.el[0] : this.el;
	  
	      if (!this.el) {
	        throw new Marionette.Error({
	          name: 'NoElError',
	          message: 'An "el" must be specified for a region.'
	        });
	      }
	  
	      this.$el = this.getEl(this.el);
	      Marionette.Object.call(this, options);
	    },
	  
	    // Displays a backbone view instance inside of the region.
	    // Handles calling the `render` method for you. Reads content
	    // directly from the `el` attribute. Also calls an optional
	    // `onShow` and `onDestroy` method on your view, just after showing
	    // or just before destroying the view, respectively.
	    // The `preventDestroy` option can be used to prevent a view from
	    // the old view being destroyed on show.
	    // The `forceShow` option can be used to force a view to be
	    // re-rendered if it's already shown in the region.
	    show: function(view, options) {
	      if (!this._ensureElement()) {
	        return;
	      }
	  
	      this._ensureViewIsIntact(view);
	      Marionette.MonitorDOMRefresh(view);
	  
	      var showOptions     = options || {};
	      var isDifferentView = view !== this.currentView;
	      var preventDestroy  = !!showOptions.preventDestroy;
	      var forceShow       = !!showOptions.forceShow;
	  
	      // We are only changing the view if there is a current view to change to begin with
	      var isChangingView = !!this.currentView;
	  
	      // Only destroy the current view if we don't want to `preventDestroy` and if
	      // the view given in the first argument is different than `currentView`
	      var _shouldDestroyView = isDifferentView && !preventDestroy;
	  
	      // Only show the view given in the first argument if it is different than
	      // the current view or if we want to re-show the view. Note that if
	      // `_shouldDestroyView` is true, then `_shouldShowView` is also necessarily true.
	      var _shouldShowView = isDifferentView || forceShow;
	  
	      if (isChangingView) {
	        this.triggerMethod('before:swapOut', this.currentView, this, options);
	      }
	  
	      if (this.currentView && isDifferentView) {
	        delete this.currentView._parent;
	      }
	  
	      if (_shouldDestroyView) {
	        this.empty();
	  
	      // A `destroy` event is attached to the clean up manually removed views.
	      // We need to detach this event when a new view is going to be shown as it
	      // is no longer relevant.
	      } else if (isChangingView && _shouldShowView) {
	        this.currentView.off('destroy', this.empty, this);
	      }
	  
	      if (_shouldShowView) {
	  
	        // We need to listen for if a view is destroyed
	        // in a way other than through the region.
	        // If this happens we need to remove the reference
	        // to the currentView since once a view has been destroyed
	        // we can not reuse it.
	        view.once('destroy', this.empty, this);
	  
	        // make this region the view's parent,
	        // It's important that this parent binding happens before rendering
	        // so that any events the child may trigger during render can also be
	        // triggered on the child's ancestor views
	        view._parent = this;
	        this._renderView(view);
	  
	        if (isChangingView) {
	          this.triggerMethod('before:swap', view, this, options);
	        }
	  
	        this.triggerMethod('before:show', view, this, options);
	        Marionette.triggerMethodOn(view, 'before:show', view, this, options);
	  
	        if (isChangingView) {
	          this.triggerMethod('swapOut', this.currentView, this, options);
	        }
	  
	        // An array of views that we're about to display
	        var attachedRegion = Marionette.isNodeAttached(this.el);
	  
	        // The views that we're about to attach to the document
	        // It's important that we prevent _getNestedViews from being executed unnecessarily
	        // as it's a potentially-slow method
	        var displayedViews = [];
	  
	        var attachOptions = _.extend({
	          triggerBeforeAttach: this.triggerBeforeAttach,
	          triggerAttach: this.triggerAttach
	        }, showOptions);
	  
	        if (attachedRegion && attachOptions.triggerBeforeAttach) {
	          displayedViews = this._displayedViews(view);
	          this._triggerAttach(displayedViews, 'before:');
	        }
	  
	        this.attachHtml(view);
	        this.currentView = view;
	  
	        if (attachedRegion && attachOptions.triggerAttach) {
	          displayedViews = this._displayedViews(view);
	          this._triggerAttach(displayedViews);
	        }
	  
	        if (isChangingView) {
	          this.triggerMethod('swap', view, this, options);
	        }
	  
	        this.triggerMethod('show', view, this, options);
	        Marionette.triggerMethodOn(view, 'show', view, this, options);
	  
	        return this;
	      }
	  
	      return this;
	    },
	  
	    triggerBeforeAttach: true,
	    triggerAttach: true,
	  
	    _triggerAttach: function(views, prefix) {
	      var eventName = (prefix || '') + 'attach';
	      _.each(views, function(view) {
	        Marionette.triggerMethodOn(view, eventName, view, this);
	      }, this);
	    },
	  
	    _displayedViews: function(view) {
	      return _.union([view], _.result(view, '_getNestedViews') || []);
	    },
	  
	    _renderView: function(view) {
	      if (!view.supportsRenderLifecycle) {
	        Marionette.triggerMethodOn(view, 'before:render', view);
	      }
	      view.render();
	      if (!view.supportsRenderLifecycle) {
	        Marionette.triggerMethodOn(view, 'render', view);
	      }
	    },
	  
	    _ensureElement: function() {
	      if (!_.isObject(this.el)) {
	        this.$el = this.getEl(this.el);
	        this.el = this.$el[0];
	      }
	  
	      if (!this.$el || this.$el.length === 0) {
	        if (this.getOption('allowMissingEl')) {
	          return false;
	        } else {
	          throw new Marionette.Error('An "el" ' + this.$el.selector + ' must exist in DOM');
	        }
	      }
	      return true;
	    },
	  
	    _ensureViewIsIntact: function(view) {
	      if (!view) {
	        throw new Marionette.Error({
	          name: 'ViewNotValid',
	          message: 'The view passed is undefined and therefore invalid. You must pass a view instance to show.'
	        });
	      }
	  
	      if (view.isDestroyed) {
	        throw new Marionette.Error({
	          name: 'ViewDestroyedError',
	          message: 'View (cid: "' + view.cid + '") has already been destroyed and cannot be used.'
	        });
	      }
	    },
	  
	    // Override this method to change how the region finds the DOM
	    // element that it manages. Return a jQuery selector object scoped
	    // to a provided parent el or the document if none exists.
	    getEl: function(el) {
	      return Backbone.$(el, Marionette._getValue(this.options.parentEl, this));
	    },
	  
	    // Override this method to change how the new view is
	    // appended to the `$el` that the region is managing
	    attachHtml: function(view) {
	      this.$el.contents().detach();
	  
	      this.el.appendChild(view.el);
	    },
	  
	    // Destroy the current view, if there is one. If there is no
	    // current view, it does nothing and returns immediately.
	    empty: function(options) {
	      var view = this.currentView;
	  
	      var emptyOptions = options || {};
	      var preventDestroy  = !!emptyOptions.preventDestroy;
	      // If there is no view in the region
	      // we should not remove anything
	      if (!view) { return this; }
	  
	      view.off('destroy', this.empty, this);
	      this.triggerMethod('before:empty', view);
	      if (!preventDestroy) {
	        this._destroyView();
	      }
	      this.triggerMethod('empty', view);
	  
	      // Remove region pointer to the currentView
	      delete this.currentView;
	  
	      if (preventDestroy) {
	        this.$el.contents().detach();
	      }
	  
	      return this;
	    },
	  
	    // call 'destroy' or 'remove', depending on which is found
	    // on the view (if showing a raw Backbone view or a Marionette View)
	    _destroyView: function() {
	      var view = this.currentView;
	      if (view.isDestroyed) { return; }
	  
	      if (!view.supportsDestroyLifecycle) {
	        Marionette.triggerMethodOn(view, 'before:destroy', view);
	      }
	      if (view.destroy) {
	        view.destroy();
	      } else {
	        view.remove();
	  
	        // appending isDestroyed to raw Backbone View allows regions
	        // to throw a ViewDestroyedError for this view
	        view.isDestroyed = true;
	      }
	      if (!view.supportsDestroyLifecycle) {
	        Marionette.triggerMethodOn(view, 'destroy', view);
	      }
	    },
	  
	    // Attach an existing view to the region. This
	    // will not call `render` or `onShow` for the new view,
	    // and will not replace the current HTML for the `el`
	    // of the region.
	    attachView: function(view) {
	      if (this.currentView) {
	        delete this.currentView._parent;
	      }
	      view._parent = this;
	      this.currentView = view;
	      return this;
	    },
	  
	    // Checks whether a view is currently present within
	    // the region. Returns `true` if there is and `false` if
	    // no view is present.
	    hasView: function() {
	      return !!this.currentView;
	    },
	  
	    // Reset the region by destroying any existing view and
	    // clearing out the cached `$el`. The next time a view
	    // is shown via this region, the region will re-query the
	    // DOM for the region's `el`.
	    reset: function() {
	      this.empty();
	  
	      if (this.$el) {
	        this.el = this.$el.selector;
	      }
	  
	      delete this.$el;
	      return this;
	    }
	  
	  },
	  
	  // Static Methods
	  {
	  
	    // Build an instance of a region by passing in a configuration object
	    // and a default region class to use if none is specified in the config.
	    //
	    // The config object should either be a string as a jQuery DOM selector,
	    // a Region class directly, or an object literal that specifies a selector,
	    // a custom regionClass, and any options to be supplied to the region:
	    //
	    // ```js
	    // {
	    //   selector: "#foo",
	    //   regionClass: MyCustomRegion,
	    //   allowMissingEl: false
	    // }
	    // ```
	    //
	    buildRegion: function(regionConfig, DefaultRegionClass) {
	      if (_.isString(regionConfig)) {
	        return this._buildRegionFromSelector(regionConfig, DefaultRegionClass);
	      }
	  
	      if (regionConfig.selector || regionConfig.el || regionConfig.regionClass) {
	        return this._buildRegionFromObject(regionConfig, DefaultRegionClass);
	      }
	  
	      if (_.isFunction(regionConfig)) {
	        return this._buildRegionFromRegionClass(regionConfig);
	      }
	  
	      throw new Marionette.Error({
	        message: 'Improper region configuration type.',
	        url: 'marionette.region.html#region-configuration-types'
	      });
	    },
	  
	    // Build the region from a string selector like '#foo-region'
	    _buildRegionFromSelector: function(selector, DefaultRegionClass) {
	      return new DefaultRegionClass({el: selector});
	    },
	  
	    // Build the region from a configuration object
	    // ```js
	    // { selector: '#foo', regionClass: FooRegion, allowMissingEl: false }
	    // ```
	    _buildRegionFromObject: function(regionConfig, DefaultRegionClass) {
	      var RegionClass = regionConfig.regionClass || DefaultRegionClass;
	      var options = _.omit(regionConfig, 'selector', 'regionClass');
	  
	      if (regionConfig.selector && !options.el) {
	        options.el = regionConfig.selector;
	      }
	  
	      return new RegionClass(options);
	    },
	  
	    // Build the region directly from a given `RegionClass`
	    _buildRegionFromRegionClass: function(RegionClass) {
	      return new RegionClass();
	    }
	  });
	  
	  // Region Manager
	  // --------------
	  
	  // Manage one or more related `Marionette.Region` objects.
	  Marionette.RegionManager = Marionette.Controller.extend({
	    constructor: function(options) {
	      this._regions = {};
	      this.length = 0;
	  
	      Marionette.Controller.call(this, options);
	  
	      this.addRegions(this.getOption('regions'));
	    },
	  
	    // Add multiple regions using an object literal or a
	    // function that returns an object literal, where
	    // each key becomes the region name, and each value is
	    // the region definition.
	    addRegions: function(regionDefinitions, defaults) {
	      regionDefinitions = Marionette._getValue(regionDefinitions, this, arguments);
	  
	      return _.reduce(regionDefinitions, function(regions, definition, name) {
	        if (_.isString(definition)) {
	          definition = {selector: definition};
	        }
	        if (definition.selector) {
	          definition = _.defaults({}, definition, defaults);
	        }
	  
	        regions[name] = this.addRegion(name, definition);
	        return regions;
	      }, {}, this);
	    },
	  
	    // Add an individual region to the region manager,
	    // and return the region instance
	    addRegion: function(name, definition) {
	      var region;
	  
	      if (definition instanceof Marionette.Region) {
	        region = definition;
	      } else {
	        region = Marionette.Region.buildRegion(definition, Marionette.Region);
	      }
	  
	      this.triggerMethod('before:add:region', name, region);
	  
	      region._parent = this;
	      this._store(name, region);
	  
	      this.triggerMethod('add:region', name, region);
	      return region;
	    },
	  
	    // Get a region by name
	    get: function(name) {
	      return this._regions[name];
	    },
	  
	    // Gets all the regions contained within
	    // the `regionManager` instance.
	    getRegions: function() {
	      return _.clone(this._regions);
	    },
	  
	    // Remove a region by name
	    removeRegion: function(name) {
	      var region = this._regions[name];
	      this._remove(name, region);
	  
	      return region;
	    },
	  
	    // Empty all regions in the region manager, and
	    // remove them
	    removeRegions: function() {
	      var regions = this.getRegions();
	      _.each(this._regions, function(region, name) {
	        this._remove(name, region);
	      }, this);
	  
	      return regions;
	    },
	  
	    // Empty all regions in the region manager, but
	    // leave them attached
	    emptyRegions: function() {
	      var regions = this.getRegions();
	      _.invoke(regions, 'empty');
	      return regions;
	    },
	  
	    // Destroy all regions and shut down the region
	    // manager entirely
	    destroy: function() {
	      this.removeRegions();
	      return Marionette.Controller.prototype.destroy.apply(this, arguments);
	    },
	  
	    // internal method to store regions
	    _store: function(name, region) {
	      if (!this._regions[name]) {
	        this.length++;
	      }
	  
	      this._regions[name] = region;
	    },
	  
	    // internal method to remove a region
	    _remove: function(name, region) {
	      this.triggerMethod('before:remove:region', name, region);
	      region.empty();
	      region.stopListening();
	  
	      delete region._parent;
	      delete this._regions[name];
	      this.length--;
	      this.triggerMethod('remove:region', name, region);
	    }
	  });
	  
	  Marionette.actAsCollection(Marionette.RegionManager.prototype, '_regions');
	  

	  // Template Cache
	  // --------------
	  
	  // Manage templates stored in `<script>` blocks,
	  // caching them for faster access.
	  Marionette.TemplateCache = function(templateId) {
	    this.templateId = templateId;
	  };
	  
	  // TemplateCache object-level methods. Manage the template
	  // caches from these method calls instead of creating
	  // your own TemplateCache instances
	  _.extend(Marionette.TemplateCache, {
	    templateCaches: {},
	  
	    // Get the specified template by id. Either
	    // retrieves the cached version, or loads it
	    // from the DOM.
	    get: function(templateId, options) {
	      var cachedTemplate = this.templateCaches[templateId];
	  
	      if (!cachedTemplate) {
	        cachedTemplate = new Marionette.TemplateCache(templateId);
	        this.templateCaches[templateId] = cachedTemplate;
	      }
	  
	      return cachedTemplate.load(options);
	    },
	  
	    // Clear templates from the cache. If no arguments
	    // are specified, clears all templates:
	    // `clear()`
	    //
	    // If arguments are specified, clears each of the
	    // specified templates from the cache:
	    // `clear("#t1", "#t2", "...")`
	    clear: function() {
	      var i;
	      var args = _.toArray(arguments);
	      var length = args.length;
	  
	      if (length > 0) {
	        for (i = 0; i < length; i++) {
	          delete this.templateCaches[args[i]];
	        }
	      } else {
	        this.templateCaches = {};
	      }
	    }
	  });
	  
	  // TemplateCache instance methods, allowing each
	  // template cache object to manage its own state
	  // and know whether or not it has been loaded
	  _.extend(Marionette.TemplateCache.prototype, {
	  
	    // Internal method to load the template
	    load: function(options) {
	      // Guard clause to prevent loading this template more than once
	      if (this.compiledTemplate) {
	        return this.compiledTemplate;
	      }
	  
	      // Load the template and compile it
	      var template = this.loadTemplate(this.templateId, options);
	      this.compiledTemplate = this.compileTemplate(template, options);
	  
	      return this.compiledTemplate;
	    },
	  
	    // Load a template from the DOM, by default. Override
	    // this method to provide your own template retrieval
	    // For asynchronous loading with AMD/RequireJS, consider
	    // using a template-loader plugin as described here:
	    // https://github.com/marionettejs/backbone.marionette/wiki/Using-marionette-with-requirejs
	    loadTemplate: function(templateId, options) {
	      var $template = Backbone.$(templateId);
	  
	      if (!$template.length) {
	        throw new Marionette.Error({
	          name: 'NoTemplateError',
	          message: 'Could not find template: "' + templateId + '"'
	        });
	      }
	      return $template.html();
	    },
	  
	    // Pre-compile the template before caching it. Override
	    // this method if you do not need to pre-compile a template
	    // (JST / RequireJS for example) or if you want to change
	    // the template engine used (Handebars, etc).
	    compileTemplate: function(rawTemplate, options) {
	      return _.template(rawTemplate, options);
	    }
	  });
	  
	  // Renderer
	  // --------
	  
	  // Render a template with data by passing in the template
	  // selector and the data to render.
	  Marionette.Renderer = {
	  
	    // Render a template with data. The `template` parameter is
	    // passed to the `TemplateCache` object to retrieve the
	    // template function. Override this method to provide your own
	    // custom rendering and template handling for all of Marionette.
	    render: function(template, data) {
	      if (!template) {
	        throw new Marionette.Error({
	          name: 'TemplateNotFoundError',
	          message: 'Cannot render the template since its false, null or undefined.'
	        });
	      }
	  
	      var templateFunc = _.isFunction(template) ? template : Marionette.TemplateCache.get(template);
	  
	      return templateFunc(data);
	    }
	  };
	  

	  /* jshint maxlen: 114, nonew: false */
	  // View
	  // ----
	  
	  // The core view class that other Marionette views extend from.
	  Marionette.View = Backbone.View.extend({
	    isDestroyed: false,
	    supportsRenderLifecycle: true,
	    supportsDestroyLifecycle: true,
	  
	    constructor: function(options) {
	      this.render = _.bind(this.render, this);
	  
	      options = Marionette._getValue(options, this);
	  
	      // this exposes view options to the view initializer
	      // this is a backfill since backbone removed the assignment
	      // of this.options
	      // at some point however this may be removed
	      this.options = _.extend({}, _.result(this, 'options'), options);
	  
	      this._behaviors = Marionette.Behaviors(this);
	  
	      Backbone.View.call(this, this.options);
	  
	      Marionette.MonitorDOMRefresh(this);
	    },
	  
	    // Get the template for this view
	    // instance. You can set a `template` attribute in the view
	    // definition or pass a `template: "whatever"` parameter in
	    // to the constructor options.
	    getTemplate: function() {
	      return this.getOption('template');
	    },
	  
	    // Serialize a model by returning its attributes. Clones
	    // the attributes to allow modification.
	    serializeModel: function(model) {
	      return model.toJSON.apply(model, _.rest(arguments));
	    },
	  
	    // Mix in template helper methods. Looks for a
	    // `templateHelpers` attribute, which can either be an
	    // object literal, or a function that returns an object
	    // literal. All methods and attributes from this object
	    // are copies to the object passed in.
	    mixinTemplateHelpers: function(target) {
	      target = target || {};
	      var templateHelpers = this.getOption('templateHelpers');
	      templateHelpers = Marionette._getValue(templateHelpers, this);
	      return _.extend(target, templateHelpers);
	    },
	  
	    // normalize the keys of passed hash with the views `ui` selectors.
	    // `{"@ui.foo": "bar"}`
	    normalizeUIKeys: function(hash) {
	      var uiBindings = _.result(this, '_uiBindings');
	      return Marionette.normalizeUIKeys(hash, uiBindings || _.result(this, 'ui'));
	    },
	  
	    // normalize the values of passed hash with the views `ui` selectors.
	    // `{foo: "@ui.bar"}`
	    normalizeUIValues: function(hash, properties) {
	      var ui = _.result(this, 'ui');
	      var uiBindings = _.result(this, '_uiBindings');
	      return Marionette.normalizeUIValues(hash, uiBindings || ui, properties);
	    },
	  
	    // Configure `triggers` to forward DOM events to view
	    // events. `triggers: {"click .foo": "do:foo"}`
	    configureTriggers: function() {
	      if (!this.triggers) { return; }
	  
	      // Allow `triggers` to be configured as a function
	      var triggers = this.normalizeUIKeys(_.result(this, 'triggers'));
	  
	      // Configure the triggers, prevent default
	      // action and stop propagation of DOM events
	      return _.reduce(triggers, function(events, value, key) {
	        events[key] = this._buildViewTrigger(value);
	        return events;
	      }, {}, this);
	    },
	  
	    // Overriding Backbone.View's delegateEvents to handle
	    // the `triggers`, `modelEvents`, and `collectionEvents` configuration
	    delegateEvents: function(events) {
	      this._delegateDOMEvents(events);
	      this.bindEntityEvents(this.model, this.getOption('modelEvents'));
	      this.bindEntityEvents(this.collection, this.getOption('collectionEvents'));
	  
	      _.each(this._behaviors, function(behavior) {
	        behavior.bindEntityEvents(this.model, behavior.getOption('modelEvents'));
	        behavior.bindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
	      }, this);
	  
	      return this;
	    },
	  
	    // internal method to delegate DOM events and triggers
	    _delegateDOMEvents: function(eventsArg) {
	      var events = Marionette._getValue(eventsArg || this.events, this);
	  
	      // normalize ui keys
	      events = this.normalizeUIKeys(events);
	      if (_.isUndefined(eventsArg)) {this.events = events;}
	  
	      var combinedEvents = {};
	  
	      // look up if this view has behavior events
	      var behaviorEvents = _.result(this, 'behaviorEvents') || {};
	      var triggers = this.configureTriggers();
	      var behaviorTriggers = _.result(this, 'behaviorTriggers') || {};
	  
	      // behavior events will be overriden by view events and or triggers
	      _.extend(combinedEvents, behaviorEvents, events, triggers, behaviorTriggers);
	  
	      Backbone.View.prototype.delegateEvents.call(this, combinedEvents);
	    },
	  
	    // Overriding Backbone.View's undelegateEvents to handle unbinding
	    // the `triggers`, `modelEvents`, and `collectionEvents` config
	    undelegateEvents: function() {
	      Backbone.View.prototype.undelegateEvents.apply(this, arguments);
	  
	      this.unbindEntityEvents(this.model, this.getOption('modelEvents'));
	      this.unbindEntityEvents(this.collection, this.getOption('collectionEvents'));
	  
	      _.each(this._behaviors, function(behavior) {
	        behavior.unbindEntityEvents(this.model, behavior.getOption('modelEvents'));
	        behavior.unbindEntityEvents(this.collection, behavior.getOption('collectionEvents'));
	      }, this);
	  
	      return this;
	    },
	  
	    // Internal helper method to verify whether the view hasn't been destroyed
	    _ensureViewIsIntact: function() {
	      if (this.isDestroyed) {
	        throw new Marionette.Error({
	          name: 'ViewDestroyedError',
	          message: 'View (cid: "' + this.cid + '") has already been destroyed and cannot be used.'
	        });
	      }
	    },
	  
	    // Default `destroy` implementation, for removing a view from the
	    // DOM and unbinding it. Regions will call this method
	    // for you. You can specify an `onDestroy` method in your view to
	    // add custom code that is called after the view is destroyed.
	    destroy: function() {
	      if (this.isDestroyed) { return this; }
	  
	      var args = _.toArray(arguments);
	  
	      this.triggerMethod.apply(this, ['before:destroy'].concat(args));
	  
	      // mark as destroyed before doing the actual destroy, to
	      // prevent infinite loops within "destroy" event handlers
	      // that are trying to destroy other views
	      this.isDestroyed = true;
	      this.triggerMethod.apply(this, ['destroy'].concat(args));
	  
	      // unbind UI elements
	      this.unbindUIElements();
	  
	      this.isRendered = false;
	  
	      // remove the view from the DOM
	      this.remove();
	  
	      // Call destroy on each behavior after
	      // destroying the view.
	      // This unbinds event listeners
	      // that behaviors have registered for.
	      _.invoke(this._behaviors, 'destroy', args);
	  
	      return this;
	    },
	  
	    bindUIElements: function() {
	      this._bindUIElements();
	      _.invoke(this._behaviors, this._bindUIElements);
	    },
	  
	    // This method binds the elements specified in the "ui" hash inside the view's code with
	    // the associated jQuery selectors.
	    _bindUIElements: function() {
	      if (!this.ui) { return; }
	  
	      // store the ui hash in _uiBindings so they can be reset later
	      // and so re-rendering the view will be able to find the bindings
	      if (!this._uiBindings) {
	        this._uiBindings = this.ui;
	      }
	  
	      // get the bindings result, as a function or otherwise
	      var bindings = _.result(this, '_uiBindings');
	  
	      // empty the ui so we don't have anything to start with
	      this.ui = {};
	  
	      // bind each of the selectors
	      _.each(bindings, function(selector, key) {
	        this.ui[key] = this.$(selector);
	      }, this);
	    },
	  
	    // This method unbinds the elements specified in the "ui" hash
	    unbindUIElements: function() {
	      this._unbindUIElements();
	      _.invoke(this._behaviors, this._unbindUIElements);
	    },
	  
	    _unbindUIElements: function() {
	      if (!this.ui || !this._uiBindings) { return; }
	  
	      // delete all of the existing ui bindings
	      _.each(this.ui, function($el, name) {
	        delete this.ui[name];
	      }, this);
	  
	      // reset the ui element to the original bindings configuration
	      this.ui = this._uiBindings;
	      delete this._uiBindings;
	    },
	  
	    // Internal method to create an event handler for a given `triggerDef` like
	    // 'click:foo'
	    _buildViewTrigger: function(triggerDef) {
	  
	      var options = _.defaults({}, triggerDef, {
	        preventDefault: true,
	        stopPropagation: true
	      });
	  
	      var eventName = _.isObject(triggerDef) ? options.event : triggerDef;
	  
	      return function(e) {
	        if (e) {
	          if (e.preventDefault && options.preventDefault) {
	            e.preventDefault();
	          }
	  
	          if (e.stopPropagation && options.stopPropagation) {
	            e.stopPropagation();
	          }
	        }
	  
	        var args = {
	          view: this,
	          model: this.model,
	          collection: this.collection
	        };
	  
	        this.triggerMethod(eventName, args);
	      };
	    },
	  
	    setElement: function() {
	      var ret = Backbone.View.prototype.setElement.apply(this, arguments);
	  
	      // proxy behavior $el to the view's $el.
	      // This is needed because a view's $el proxy
	      // is not set until after setElement is called.
	      _.invoke(this._behaviors, 'proxyViewProperties', this);
	  
	      return ret;
	    },
	  
	    // import the `triggerMethod` to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: function() {
	      var ret = Marionette._triggerMethod(this, arguments);
	  
	      this._triggerEventOnBehaviors(arguments);
	      this._triggerEventOnParentLayout(arguments[0], _.rest(arguments));
	  
	      return ret;
	    },
	  
	    _triggerEventOnBehaviors: function(args) {
	      var triggerMethod = Marionette._triggerMethod;
	      var behaviors = this._behaviors;
	      // Use good ol' for as this is a very hot function
	      for (var i = 0, length = behaviors && behaviors.length; i < length; i++) {
	        triggerMethod(behaviors[i], args);
	      }
	    },
	  
	    _triggerEventOnParentLayout: function(eventName, args) {
	      var layoutView = this._parentLayoutView();
	      if (!layoutView) {
	        return;
	      }
	  
	      // invoke triggerMethod on parent view
	      var eventPrefix = Marionette.getOption(layoutView, 'childViewEventPrefix');
	      var prefixedEventName = eventPrefix + ':' + eventName;
	      var callArgs = [this].concat(args);
	  
	      Marionette._triggerMethod(layoutView, prefixedEventName, callArgs);
	  
	      // call the parent view's childEvents handler
	      var childEvents = Marionette.getOption(layoutView, 'childEvents');
	  
	      // since childEvents can be an object or a function use Marionette._getValue
	      // to handle the abstaction for us.
	      childEvents = Marionette._getValue(childEvents, layoutView);
	      var normalizedChildEvents = layoutView.normalizeMethods(childEvents);
	  
	      if (normalizedChildEvents && _.isFunction(normalizedChildEvents[eventName])) {
	        normalizedChildEvents[eventName].apply(layoutView, callArgs);
	      }
	    },
	  
	    // This method returns any views that are immediate
	    // children of this view
	    _getImmediateChildren: function() {
	      return [];
	    },
	  
	    // Returns an array of every nested view within this view
	    _getNestedViews: function() {
	      var children = this._getImmediateChildren();
	  
	      if (!children.length) { return children; }
	  
	      return _.reduce(children, function(memo, view) {
	        if (!view._getNestedViews) { return memo; }
	        return memo.concat(view._getNestedViews());
	      }, children);
	    },
	  
	    // Walk the _parent tree until we find a layout view (if one exists).
	    // Returns the parent layout view hierarchically closest to this view.
	    _parentLayoutView: function() {
	      var parent  = this._parent;
	  
	      while (parent) {
	        if (parent instanceof Marionette.LayoutView) {
	          return parent;
	        }
	        parent = parent._parent;
	      }
	    },
	  
	    // Imports the "normalizeMethods" to transform hashes of
	    // events=>function references/names to a hash of events=>function references
	    normalizeMethods: Marionette.normalizeMethods,
	  
	    // A handy way to merge passed-in options onto the instance
	    mergeOptions: Marionette.mergeOptions,
	  
	    // Proxy `getOption` to enable getting options from this or this.options by name.
	    getOption: Marionette.proxyGetOption,
	  
	    // Proxy `bindEntityEvents` to enable binding view's events from another entity.
	    bindEntityEvents: Marionette.proxyBindEntityEvents,
	  
	    // Proxy `unbindEntityEvents` to enable unbinding view's events from another entity.
	    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
	  });
	  
	  // Item View
	  // ---------
	  
	  // A single item view implementation that contains code for rendering
	  // with underscore.js templates, serializing the view's model or collection,
	  // and calling several methods on extended views, such as `onRender`.
	  Marionette.ItemView = Marionette.View.extend({
	  
	    // Setting up the inheritance chain which allows changes to
	    // Marionette.View.prototype.constructor which allows overriding
	    constructor: function() {
	      Marionette.View.apply(this, arguments);
	    },
	  
	    // Serialize the model or collection for the view. If a model is
	    // found, the view's `serializeModel` is called. If a collection is found,
	    // each model in the collection is serialized by calling
	    // the view's `serializeCollection` and put into an `items` array in
	    // the resulting data. If both are found, defaults to the model.
	    // You can override the `serializeData` method in your own view definition,
	    // to provide custom serialization for your view's data.
	    serializeData: function() {
	      if (!this.model && !this.collection) {
	        return {};
	      }
	  
	      var args = [this.model || this.collection];
	      if (arguments.length) {
	        args.push.apply(args, arguments);
	      }
	  
	      if (this.model) {
	        return this.serializeModel.apply(this, args);
	      } else {
	        return {
	          items: this.serializeCollection.apply(this, args)
	        };
	      }
	    },
	  
	    // Serialize a collection by serializing each of its models.
	    serializeCollection: function(collection) {
	      return collection.toJSON.apply(collection, _.rest(arguments));
	    },
	  
	    // Render the view, defaulting to underscore.js templates.
	    // You can override this in your view definition to provide
	    // a very specific rendering for your view. In general, though,
	    // you should override the `Marionette.Renderer` object to
	    // change how Marionette renders views.
	    render: function() {
	      this._ensureViewIsIntact();
	  
	      this.triggerMethod('before:render', this);
	  
	      this._renderTemplate();
	      this.isRendered = true;
	      this.bindUIElements();
	  
	      this.triggerMethod('render', this);
	  
	      return this;
	    },
	  
	    // Internal method to render the template with the serialized data
	    // and template helpers via the `Marionette.Renderer` object.
	    // Throws an `UndefinedTemplateError` error if the template is
	    // any falsely value but literal `false`.
	    _renderTemplate: function() {
	      var template = this.getTemplate();
	  
	      // Allow template-less item views
	      if (template === false) {
	        return;
	      }
	  
	      if (!template) {
	        throw new Marionette.Error({
	          name: 'UndefinedTemplateError',
	          message: 'Cannot render the template since it is null or undefined.'
	        });
	      }
	  
	      // Add in entity data and template helpers
	      var data = this.mixinTemplateHelpers(this.serializeData());
	  
	      // Render and add to el
	      var html = Marionette.Renderer.render(template, data, this);
	      this.attachElContent(html);
	  
	      return this;
	    },
	  
	    // Attaches the content of a given view.
	    // This method can be overridden to optimize rendering,
	    // or to render in a non standard way.
	    //
	    // For example, using `innerHTML` instead of `$el.html`
	    //
	    // ```js
	    // attachElContent: function(html) {
	    //   this.el.innerHTML = html;
	    //   return this;
	    // }
	    // ```
	    attachElContent: function(html) {
	      this.$el.html(html);
	  
	      return this;
	    }
	  });
	  
	  /* jshint maxstatements: 20, maxcomplexity: 7 */
	  
	  // Collection View
	  // ---------------
	  
	  // A view that iterates over a Backbone.Collection
	  // and renders an individual child view for each model.
	  Marionette.CollectionView = Marionette.View.extend({
	  
	    // used as the prefix for child view events
	    // that are forwarded through the collectionview
	    childViewEventPrefix: 'childview',
	  
	    // flag for maintaining the sorted order of the collection
	    sort: true,
	  
	    // constructor
	    // option to pass `{sort: false}` to prevent the `CollectionView` from
	    // maintaining the sorted order of the collection.
	    // This will fallback onto appending childView's to the end.
	    //
	    // option to pass `{comparator: compFunction()}` to allow the `CollectionView`
	    // to use a custom sort order for the collection.
	    constructor: function(options) {
	      this.once('render', this._initialEvents);
	      this._initChildViewStorage();
	  
	      Marionette.View.apply(this, arguments);
	  
	      this.on({
	        'before:show':   this._onBeforeShowCalled,
	        'show':          this._onShowCalled,
	        'before:attach': this._onBeforeAttachCalled,
	        'attach':        this._onAttachCalled
	      });
	      this.initRenderBuffer();
	    },
	  
	    // Instead of inserting elements one by one into the page,
	    // it's much more performant to insert elements into a document
	    // fragment and then insert that document fragment into the page
	    initRenderBuffer: function() {
	      this._bufferedChildren = [];
	    },
	  
	    startBuffering: function() {
	      this.initRenderBuffer();
	      this.isBuffering = true;
	    },
	  
	    endBuffering: function() {
	      // Only trigger attach if already shown and attached, otherwise Region#show() handles this.
	      var canTriggerAttach = this._isShown && Marionette.isNodeAttached(this.el);
	      var nestedViews;
	  
	      this.isBuffering = false;
	  
	      if (this._isShown) {
	        this._triggerMethodMany(this._bufferedChildren, this, 'before:show');
	      }
	      if (canTriggerAttach && this._triggerBeforeAttach) {
	        nestedViews = this._getNestedViews();
	        this._triggerMethodMany(nestedViews, this, 'before:attach');
	      }
	  
	      this.attachBuffer(this, this._createBuffer());
	  
	      if (canTriggerAttach && this._triggerAttach) {
	        nestedViews = this._getNestedViews();
	        this._triggerMethodMany(nestedViews, this, 'attach');
	      }
	      if (this._isShown) {
	        this._triggerMethodMany(this._bufferedChildren, this, 'show');
	      }
	      this.initRenderBuffer();
	    },
	  
	    _triggerMethodMany: function(targets, source, eventName) {
	      var args = _.drop(arguments, 3);
	  
	      _.each(targets, function(target) {
	        Marionette.triggerMethodOn.apply(target, [target, eventName, target, source].concat(args));
	      });
	    },
	  
	    // Configured the initial events that the collection view
	    // binds to.
	    _initialEvents: function() {
	      if (this.collection) {
	        this.listenTo(this.collection, 'add', this._onCollectionAdd);
	        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
	        this.listenTo(this.collection, 'reset', this.render);
	  
	        if (this.getOption('sort')) {
	          this.listenTo(this.collection, 'sort', this._sortViews);
	        }
	      }
	    },
	  
	    // Handle a child added to the collection
	    _onCollectionAdd: function(child, collection, opts) {
	      // `index` is present when adding with `at` since BB 1.2; indexOf fallback for < 1.2
	      var index = opts.at !== undefined && (opts.index || collection.indexOf(child));
	  
	      // When filtered or when there is no initial index, calculate index.
	      if (this.getOption('filter') || index === false) {
	        index = _.indexOf(this._filteredSortedModels(index), child);
	      }
	  
	      if (this._shouldAddChild(child, index)) {
	        this.destroyEmptyView();
	        var ChildView = this.getChildView(child);
	        this.addChild(child, ChildView, index);
	      }
	    },
	  
	    // get the child view by model it holds, and remove it
	    _onCollectionRemove: function(model) {
	      var view = this.children.findByModel(model);
	      this.removeChildView(view);
	      this.checkEmpty();
	    },
	  
	    _onBeforeShowCalled: function() {
	      // Reset attach event flags at the top of the Region#show() event lifecycle; if the Region's
	      // show() options permit onBeforeAttach/onAttach events, these flags will be set true again.
	      this._triggerBeforeAttach = this._triggerAttach = false;
	      this.children.each(function(childView) {
	        Marionette.triggerMethodOn(childView, 'before:show', childView);
	      });
	    },
	  
	    _onShowCalled: function() {
	      this.children.each(function(childView) {
	        Marionette.triggerMethodOn(childView, 'show', childView);
	      });
	    },
	  
	    // If during Region#show() onBeforeAttach was fired, continue firing it for child views
	    _onBeforeAttachCalled: function() {
	      this._triggerBeforeAttach = true;
	    },
	  
	    // If during Region#show() onAttach was fired, continue firing it for child views
	    _onAttachCalled: function() {
	      this._triggerAttach = true;
	    },
	  
	    // Render children views. Override this method to
	    // provide your own implementation of a render function for
	    // the collection view.
	    render: function() {
	      this._ensureViewIsIntact();
	      this.triggerMethod('before:render', this);
	      this._renderChildren();
	      this.isRendered = true;
	      this.triggerMethod('render', this);
	      return this;
	    },
	  
	    // Reorder DOM after sorting. When your element's rendering
	    // do not use their index, you can pass reorderOnSort: true
	    // to only reorder the DOM after a sort instead of rendering
	    // all the collectionView
	    reorder: function() {
	      var children = this.children;
	      var models = this._filteredSortedModels();
	  
	      if (!models.length && this._showingEmptyView) { return this; }
	  
	      var anyModelsAdded = _.some(models, function(model) {
	        return !children.findByModel(model);
	      });
	  
	      // If there are any new models added due to filtering
	      // We need to add child views
	      // So render as normal
	      if (anyModelsAdded) {
	        this.render();
	      } else {
	        // get the DOM nodes in the same order as the models
	        var elsToReorder = _.map(models, function(model, index) {
	          var view = children.findByModel(model);
	          view._index = index;
	          return view.el;
	        });
	  
	        // find the views that were children before but arent in this new ordering
	        var filteredOutViews = children.filter(function(view) {
	          return !_.contains(elsToReorder, view.el);
	        });
	  
	        this.triggerMethod('before:reorder');
	  
	        // since append moves elements that are already in the DOM,
	        // appending the elements will effectively reorder them
	        this._appendReorderedChildren(elsToReorder);
	  
	        // remove any views that have been filtered out
	        _.each(filteredOutViews, this.removeChildView, this);
	        this.checkEmpty();
	  
	        this.triggerMethod('reorder');
	      }
	    },
	  
	    // Render view after sorting. Override this method to
	    // change how the view renders after a `sort` on the collection.
	    // An example of this would be to only `renderChildren` in a `CompositeView`
	    // rather than the full view.
	    resortView: function() {
	      if (Marionette.getOption(this, 'reorderOnSort')) {
	        this.reorder();
	      } else {
	        this.render();
	      }
	    },
	  
	    // Internal method. This checks for any changes in the order of the collection.
	    // If the index of any view doesn't match, it will render.
	    _sortViews: function() {
	      var models = this._filteredSortedModels();
	  
	      // check for any changes in sort order of views
	      var orderChanged = _.find(models, function(item, index) {
	        var view = this.children.findByModel(item);
	        return !view || view._index !== index;
	      }, this);
	  
	      if (orderChanged) {
	        this.resortView();
	      }
	    },
	  
	    // Internal reference to what index a `emptyView` is.
	    _emptyViewIndex: -1,
	  
	    // Internal method. Separated so that CompositeView can append to the childViewContainer
	    // if necessary
	    _appendReorderedChildren: function(children) {
	      this.$el.append(children);
	    },
	  
	    // Internal method. Separated so that CompositeView can have
	    // more control over events being triggered, around the rendering
	    // process
	    _renderChildren: function() {
	      this.destroyEmptyView();
	      this.destroyChildren({checkEmpty: false});
	  
	      if (this.isEmpty(this.collection)) {
	        this.showEmptyView();
	      } else {
	        this.triggerMethod('before:render:collection', this);
	        this.startBuffering();
	        this.showCollection();
	        this.endBuffering();
	        this.triggerMethod('render:collection', this);
	  
	        // If we have shown children and none have passed the filter, show the empty view
	        if (this.children.isEmpty() && this.getOption('filter')) {
	          this.showEmptyView();
	        }
	      }
	    },
	  
	    // Internal method to loop through collection and show each child view.
	    showCollection: function() {
	      var ChildView;
	  
	      var models = this._filteredSortedModels();
	  
	      _.each(models, function(child, index) {
	        ChildView = this.getChildView(child);
	        this.addChild(child, ChildView, index);
	      }, this);
	    },
	  
	    // Allow the collection to be sorted by a custom view comparator
	    _filteredSortedModels: function(addedAt) {
	      var viewComparator = this.getViewComparator();
	      var models = this.collection.models;
	      addedAt = Math.min(Math.max(addedAt, 0), models.length - 1);
	  
	      if (viewComparator) {
	        var addedModel;
	        // Preserve `at` location, even for a sorted view
	        if (addedAt) {
	          addedModel = models[addedAt];
	          models = models.slice(0, addedAt).concat(models.slice(addedAt + 1));
	        }
	        models = this._sortModelsBy(models, viewComparator);
	        if (addedModel) {
	          models.splice(addedAt, 0, addedModel);
	        }
	      }
	  
	      // Filter after sorting in case the filter uses the index
	      if (this.getOption('filter')) {
	        models = _.filter(models, function(model, index) {
	          return this._shouldAddChild(model, index);
	        }, this);
	      }
	  
	      return models;
	    },
	  
	    _sortModelsBy: function(models, comparator) {
	      if (typeof comparator === 'string') {
	        return _.sortBy(models, function(model) {
	          return model.get(comparator);
	        }, this);
	      } else if (comparator.length === 1) {
	        return _.sortBy(models, comparator, this);
	      } else {
	        return models.sort(_.bind(comparator, this));
	      }
	    },
	  
	    // Internal method to show an empty view in place of
	    // a collection of child views, when the collection is empty
	    showEmptyView: function() {
	      var EmptyView = this.getEmptyView();
	  
	      if (EmptyView && !this._showingEmptyView) {
	        this.triggerMethod('before:render:empty');
	  
	        this._showingEmptyView = true;
	        var model = new Backbone.Model();
	        this.addEmptyView(model, EmptyView);
	  
	        this.triggerMethod('render:empty');
	      }
	    },
	  
	    // Internal method to destroy an existing emptyView instance
	    // if one exists. Called when a collection view has been
	    // rendered empty, and then a child is added to the collection.
	    destroyEmptyView: function() {
	      if (this._showingEmptyView) {
	        this.triggerMethod('before:remove:empty');
	  
	        this.destroyChildren();
	        delete this._showingEmptyView;
	  
	        this.triggerMethod('remove:empty');
	      }
	    },
	  
	    // Retrieve the empty view class
	    getEmptyView: function() {
	      return this.getOption('emptyView');
	    },
	  
	    // Render and show the emptyView. Similar to addChild method
	    // but "add:child" events are not fired, and the event from
	    // emptyView are not forwarded
	    addEmptyView: function(child, EmptyView) {
	      // Only trigger attach if already shown, attached, and not buffering, otherwise endBuffer() or
	      // Region#show() handles this.
	      var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
	      var nestedViews;
	  
	      // get the emptyViewOptions, falling back to childViewOptions
	      var emptyViewOptions = this.getOption('emptyViewOptions') ||
	                            this.getOption('childViewOptions');
	  
	      if (_.isFunction(emptyViewOptions)) {
	        emptyViewOptions = emptyViewOptions.call(this, child, this._emptyViewIndex);
	      }
	  
	      // build the empty view
	      var view = this.buildChildView(child, EmptyView, emptyViewOptions);
	  
	      view._parent = this;
	  
	      // Proxy emptyView events
	      this.proxyChildEvents(view);
	  
	      view.once('render', function() {
	        // trigger the 'before:show' event on `view` if the collection view has already been shown
	        if (this._isShown) {
	          Marionette.triggerMethodOn(view, 'before:show', view);
	        }
	  
	        // Trigger `before:attach` following `render` to avoid adding logic and event triggers
	        // to public method `renderChildView()`.
	        if (canTriggerAttach && this._triggerBeforeAttach) {
	          nestedViews = this._getViewAndNested(view);
	          this._triggerMethodMany(nestedViews, this, 'before:attach');
	        }
	      }, this);
	  
	      // Store the `emptyView` like a `childView` so we can properly remove and/or close it later
	      this.children.add(view);
	      this.renderChildView(view, this._emptyViewIndex);
	  
	      // Trigger `attach`
	      if (canTriggerAttach && this._triggerAttach) {
	        nestedViews = this._getViewAndNested(view);
	        this._triggerMethodMany(nestedViews, this, 'attach');
	      }
	      // call the 'show' method if the collection view has already been shown
	      if (this._isShown) {
	        Marionette.triggerMethodOn(view, 'show', view);
	      }
	    },
	  
	    // Retrieve the `childView` class, either from `this.options.childView`
	    // or from the `childView` in the object definition. The "options"
	    // takes precedence.
	    // This method receives the model that will be passed to the instance
	    // created from this `childView`. Overriding methods may use the child
	    // to determine what `childView` class to return.
	    getChildView: function(child) {
	      var childView = this.getOption('childView');
	  
	      if (!childView) {
	        throw new Marionette.Error({
	          name: 'NoChildViewError',
	          message: 'A "childView" must be specified'
	        });
	      }
	  
	      return childView;
	    },
	  
	    // Render the child's view and add it to the
	    // HTML for the collection view at a given index.
	    // This will also update the indices of later views in the collection
	    // in order to keep the children in sync with the collection.
	    addChild: function(child, ChildView, index) {
	      var childViewOptions = this.getOption('childViewOptions');
	      childViewOptions = Marionette._getValue(childViewOptions, this, [child, index]);
	  
	      var view = this.buildChildView(child, ChildView, childViewOptions);
	  
	      // increment indices of views after this one
	      this._updateIndices(view, true, index);
	  
	      this.triggerMethod('before:add:child', view);
	      this._addChildView(view, index);
	      this.triggerMethod('add:child', view);
	  
	      view._parent = this;
	  
	      return view;
	    },
	  
	    // Internal method. This decrements or increments the indices of views after the
	    // added/removed view to keep in sync with the collection.
	    _updateIndices: function(view, increment, index) {
	      if (!this.getOption('sort')) {
	        return;
	      }
	  
	      if (increment) {
	        // assign the index to the view
	        view._index = index;
	      }
	  
	      // update the indexes of views after this one
	      this.children.each(function(laterView) {
	        if (laterView._index >= view._index) {
	          laterView._index += increment ? 1 : -1;
	        }
	      });
	    },
	  
	    // Internal Method. Add the view to children and render it at
	    // the given index.
	    _addChildView: function(view, index) {
	      // Only trigger attach if already shown, attached, and not buffering, otherwise endBuffer() or
	      // Region#show() handles this.
	      var canTriggerAttach = this._isShown && !this.isBuffering && Marionette.isNodeAttached(this.el);
	      var nestedViews;
	  
	      // set up the child view event forwarding
	      this.proxyChildEvents(view);
	  
	      view.once('render', function() {
	        // trigger the 'before:show' event on `view` if the collection view has already been shown
	        if (this._isShown && !this.isBuffering) {
	          Marionette.triggerMethodOn(view, 'before:show', view);
	        }
	  
	        // Trigger `before:attach` following `render` to avoid adding logic and event triggers
	        // to public method `renderChildView()`.
	        if (canTriggerAttach && this._triggerBeforeAttach) {
	          nestedViews = this._getViewAndNested(view);
	          this._triggerMethodMany(nestedViews, this, 'before:attach');
	        }
	      }, this);
	  
	      // Store the child view itself so we can properly remove and/or destroy it later
	      this.children.add(view);
	      this.renderChildView(view, index);
	  
	      // Trigger `attach`
	      if (canTriggerAttach && this._triggerAttach) {
	        nestedViews = this._getViewAndNested(view);
	        this._triggerMethodMany(nestedViews, this, 'attach');
	      }
	      // Trigger `show`
	      if (this._isShown && !this.isBuffering) {
	        Marionette.triggerMethodOn(view, 'show', view);
	      }
	    },
	  
	    // render the child view
	    renderChildView: function(view, index) {
	      if (!view.supportsRenderLifecycle) {
	        Marionette.triggerMethodOn(view, 'before:render', view);
	      }
	      view.render();
	      if (!view.supportsRenderLifecycle) {
	        Marionette.triggerMethodOn(view, 'render', view);
	      }
	      this.attachHtml(this, view, index);
	      return view;
	    },
	  
	    // Build a `childView` for a model in the collection.
	    buildChildView: function(child, ChildViewClass, childViewOptions) {
	      var options = _.extend({model: child}, childViewOptions);
	      var childView = new ChildViewClass(options);
	      Marionette.MonitorDOMRefresh(childView);
	      return childView;
	    },
	  
	    // Remove the child view and destroy it.
	    // This function also updates the indices of
	    // later views in the collection in order to keep
	    // the children in sync with the collection.
	    removeChildView: function(view) {
	      if (!view) { return view; }
	  
	      this.triggerMethod('before:remove:child', view);
	  
	      if (!view.supportsDestroyLifecycle) {
	        Marionette.triggerMethodOn(view, 'before:destroy', view);
	      }
	      // call 'destroy' or 'remove', depending on which is found
	      if (view.destroy) {
	        view.destroy();
	      } else {
	        view.remove();
	      }
	      if (!view.supportsDestroyLifecycle) {
	        Marionette.triggerMethodOn(view, 'destroy', view);
	      }
	  
	      delete view._parent;
	      this.stopListening(view);
	      this.children.remove(view);
	      this.triggerMethod('remove:child', view);
	  
	      // decrement the index of views after this one
	      this._updateIndices(view, false);
	  
	      return view;
	    },
	  
	    // check if the collection is empty
	    isEmpty: function() {
	      return !this.collection || this.collection.length === 0;
	    },
	  
	    // If empty, show the empty view
	    checkEmpty: function() {
	      if (this.isEmpty(this.collection)) {
	        this.showEmptyView();
	      }
	    },
	  
	    // You might need to override this if you've overridden attachHtml
	    attachBuffer: function(collectionView, buffer) {
	      collectionView.$el.append(buffer);
	    },
	  
	    // Create a fragment buffer from the currently buffered children
	    _createBuffer: function() {
	      var elBuffer = document.createDocumentFragment();
	      _.each(this._bufferedChildren, function(b) {
	        elBuffer.appendChild(b.el);
	      });
	      return elBuffer;
	    },
	  
	    // Append the HTML to the collection's `el`.
	    // Override this method to do something other
	    // than `.append`.
	    attachHtml: function(collectionView, childView, index) {
	      if (collectionView.isBuffering) {
	        // buffering happens on reset events and initial renders
	        // in order to reduce the number of inserts into the
	        // document, which are expensive.
	        collectionView._bufferedChildren.splice(index, 0, childView);
	      } else {
	        // If we've already rendered the main collection, append
	        // the new child into the correct order if we need to. Otherwise
	        // append to the end.
	        if (!collectionView._insertBefore(childView, index)) {
	          collectionView._insertAfter(childView);
	        }
	      }
	    },
	  
	    // Internal method. Check whether we need to insert the view into
	    // the correct position.
	    _insertBefore: function(childView, index) {
	      var currentView;
	      var findPosition = this.getOption('sort') && (index < this.children.length - 1);
	      if (findPosition) {
	        // Find the view after this one
	        currentView = this.children.find(function(view) {
	          return view._index === index + 1;
	        });
	      }
	  
	      if (currentView) {
	        currentView.$el.before(childView.el);
	        return true;
	      }
	  
	      return false;
	    },
	  
	    // Internal method. Append a view to the end of the $el
	    _insertAfter: function(childView) {
	      this.$el.append(childView.el);
	    },
	  
	    // Internal method to set up the `children` object for
	    // storing all of the child views
	    _initChildViewStorage: function() {
	      this.children = new Backbone.ChildViewContainer();
	    },
	  
	    // Handle cleanup and other destroying needs for the collection of views
	    destroy: function() {
	      if (this.isDestroyed) { return this; }
	  
	      this.triggerMethod('before:destroy:collection');
	      this.destroyChildren({checkEmpty: false});
	      this.triggerMethod('destroy:collection');
	  
	      return Marionette.View.prototype.destroy.apply(this, arguments);
	    },
	  
	    // Destroy the child views that this collection view
	    // is holding on to, if any
	    destroyChildren: function(options) {
	      var destroyOptions = options || {};
	      var shouldCheckEmpty = true;
	      var childViews = this.children.map(_.identity);
	  
	      if (!_.isUndefined(destroyOptions.checkEmpty)) {
	        shouldCheckEmpty = destroyOptions.checkEmpty;
	      }
	  
	      this.children.each(this.removeChildView, this);
	  
	      if (shouldCheckEmpty) {
	        this.checkEmpty();
	      }
	      return childViews;
	    },
	  
	    // Return true if the given child should be shown
	    // Return false otherwise
	    // The filter will be passed (child, index, collection)
	    // Where
	    //  'child' is the given model
	    //  'index' is the index of that model in the collection
	    //  'collection' is the collection referenced by this CollectionView
	    _shouldAddChild: function(child, index) {
	      var filter = this.getOption('filter');
	      return !_.isFunction(filter) || filter.call(this, child, index, this.collection);
	    },
	  
	    // Set up the child view event forwarding. Uses a "childview:"
	    // prefix in front of all forwarded events.
	    proxyChildEvents: function(view) {
	      var prefix = this.getOption('childViewEventPrefix');
	  
	      // Forward all child view events through the parent,
	      // prepending "childview:" to the event name
	      this.listenTo(view, 'all', function() {
	        var args = _.toArray(arguments);
	        var rootEvent = args[0];
	        var childEvents = this.normalizeMethods(_.result(this, 'childEvents'));
	  
	        args[0] = prefix + ':' + rootEvent;
	        args.splice(1, 0, view);
	  
	        // call collectionView childEvent if defined
	        if (typeof childEvents !== 'undefined' && _.isFunction(childEvents[rootEvent])) {
	          childEvents[rootEvent].apply(this, args.slice(1));
	        }
	  
	        this.triggerMethod.apply(this, args);
	      });
	    },
	  
	    _getImmediateChildren: function() {
	      return _.values(this.children._views);
	    },
	  
	    _getViewAndNested: function(view) {
	      // This will not fail on Backbone.View which does not have #_getNestedViews.
	      return [view].concat(_.result(view, '_getNestedViews') || []);
	    },
	  
	    getViewComparator: function() {
	      return this.getOption('viewComparator');
	    }
	  });
	  
	  /* jshint maxstatements: 17, maxlen: 117 */
	  
	  // Composite View
	  // --------------
	  
	  // Used for rendering a branch-leaf, hierarchical structure.
	  // Extends directly from CollectionView and also renders an
	  // a child view as `modelView`, for the top leaf
	  Marionette.CompositeView = Marionette.CollectionView.extend({
	  
	    // Setting up the inheritance chain which allows changes to
	    // Marionette.CollectionView.prototype.constructor which allows overriding
	    // option to pass '{sort: false}' to prevent the CompositeView from
	    // maintaining the sorted order of the collection.
	    // This will fallback onto appending childView's to the end.
	    constructor: function() {
	      Marionette.CollectionView.apply(this, arguments);
	    },
	  
	    // Configured the initial events that the composite view
	    // binds to. Override this method to prevent the initial
	    // events, or to add your own initial events.
	    _initialEvents: function() {
	  
	      // Bind only after composite view is rendered to avoid adding child views
	      // to nonexistent childViewContainer
	  
	      if (this.collection) {
	        this.listenTo(this.collection, 'add', this._onCollectionAdd);
	        this.listenTo(this.collection, 'remove', this._onCollectionRemove);
	        this.listenTo(this.collection, 'reset', this._renderChildren);
	  
	        if (this.getOption('sort')) {
	          this.listenTo(this.collection, 'sort', this._sortViews);
	        }
	      }
	    },
	  
	    // Retrieve the `childView` to be used when rendering each of
	    // the items in the collection. The default is to return
	    // `this.childView` or Marionette.CompositeView if no `childView`
	    // has been defined
	    getChildView: function(child) {
	      var childView = this.getOption('childView') || this.constructor;
	  
	      return childView;
	    },
	  
	    // Serialize the model for the view.
	    // You can override the `serializeData` method in your own view
	    // definition, to provide custom serialization for your view's data.
	    serializeData: function() {
	      var data = {};
	  
	      if (this.model) {
	        data = _.partial(this.serializeModel, this.model).apply(this, arguments);
	      }
	  
	      return data;
	    },
	  
	    // Renders the model and the collection.
	    render: function() {
	      this._ensureViewIsIntact();
	      this._isRendering = true;
	      this.resetChildViewContainer();
	  
	      this.triggerMethod('before:render', this);
	  
	      this._renderTemplate();
	      this._renderChildren();
	  
	      this._isRendering = false;
	      this.isRendered = true;
	      this.triggerMethod('render', this);
	      return this;
	    },
	  
	    _renderChildren: function() {
	      if (this.isRendered || this._isRendering) {
	        Marionette.CollectionView.prototype._renderChildren.call(this);
	      }
	    },
	  
	    // Render the root template that the children
	    // views are appended to
	    _renderTemplate: function() {
	      var data = {};
	      data = this.serializeData();
	      data = this.mixinTemplateHelpers(data);
	  
	      this.triggerMethod('before:render:template');
	  
	      var template = this.getTemplate();
	      var html = Marionette.Renderer.render(template, data, this);
	      this.attachElContent(html);
	  
	      // the ui bindings is done here and not at the end of render since they
	      // will not be available until after the model is rendered, but should be
	      // available before the collection is rendered.
	      this.bindUIElements();
	      this.triggerMethod('render:template');
	    },
	  
	    // Attaches the content of the root.
	    // This method can be overridden to optimize rendering,
	    // or to render in a non standard way.
	    //
	    // For example, using `innerHTML` instead of `$el.html`
	    //
	    // ```js
	    // attachElContent: function(html) {
	    //   this.el.innerHTML = html;
	    //   return this;
	    // }
	    // ```
	    attachElContent: function(html) {
	      this.$el.html(html);
	  
	      return this;
	    },
	  
	    // You might need to override this if you've overridden attachHtml
	    attachBuffer: function(compositeView, buffer) {
	      var $container = this.getChildViewContainer(compositeView);
	      $container.append(buffer);
	    },
	  
	    // Internal method. Append a view to the end of the $el.
	    // Overidden from CollectionView to ensure view is appended to
	    // childViewContainer
	    _insertAfter: function(childView) {
	      var $container = this.getChildViewContainer(this, childView);
	      $container.append(childView.el);
	    },
	  
	    // Internal method. Append reordered childView'.
	    // Overidden from CollectionView to ensure reordered views
	    // are appended to childViewContainer
	    _appendReorderedChildren: function(children) {
	      var $container = this.getChildViewContainer(this);
	      $container.append(children);
	    },
	  
	    // Internal method to ensure an `$childViewContainer` exists, for the
	    // `attachHtml` method to use.
	    getChildViewContainer: function(containerView, childView) {
	      if (!!containerView.$childViewContainer) {
	        return containerView.$childViewContainer;
	      }
	  
	      var container;
	      var childViewContainer = Marionette.getOption(containerView, 'childViewContainer');
	      if (childViewContainer) {
	  
	        var selector = Marionette._getValue(childViewContainer, containerView);
	  
	        if (selector.charAt(0) === '@' && containerView.ui) {
	          container = containerView.ui[selector.substr(4)];
	        } else {
	          container = containerView.$(selector);
	        }
	  
	        if (container.length <= 0) {
	          throw new Marionette.Error({
	            name: 'ChildViewContainerMissingError',
	            message: 'The specified "childViewContainer" was not found: ' + containerView.childViewContainer
	          });
	        }
	  
	      } else {
	        container = containerView.$el;
	      }
	  
	      containerView.$childViewContainer = container;
	      return container;
	    },
	  
	    // Internal method to reset the `$childViewContainer` on render
	    resetChildViewContainer: function() {
	      if (this.$childViewContainer) {
	        this.$childViewContainer = undefined;
	      }
	    }
	  });
	  
	  // Layout View
	  // -----------
	  
	  // Used for managing application layoutViews, nested layoutViews and
	  // multiple regions within an application or sub-application.
	  //
	  // A specialized view class that renders an area of HTML and then
	  // attaches `Region` instances to the specified `regions`.
	  // Used for composite view management and sub-application areas.
	  Marionette.LayoutView = Marionette.ItemView.extend({
	    regionClass: Marionette.Region,
	  
	    options: {
	      destroyImmediate: false
	    },
	  
	    // used as the prefix for child view events
	    // that are forwarded through the layoutview
	    childViewEventPrefix: 'childview',
	  
	    // Ensure the regions are available when the `initialize` method
	    // is called.
	    constructor: function(options) {
	      options = options || {};
	  
	      this._firstRender = true;
	      this._initializeRegions(options);
	  
	      Marionette.ItemView.call(this, options);
	    },
	  
	    // LayoutView's render will use the existing region objects the
	    // first time it is called. Subsequent calls will destroy the
	    // views that the regions are showing and then reset the `el`
	    // for the regions to the newly rendered DOM elements.
	    render: function() {
	      this._ensureViewIsIntact();
	  
	      if (this._firstRender) {
	        // if this is the first render, don't do anything to
	        // reset the regions
	        this._firstRender = false;
	      } else {
	        // If this is not the first render call, then we need to
	        // re-initialize the `el` for each region
	        this._reInitializeRegions();
	      }
	  
	      return Marionette.ItemView.prototype.render.apply(this, arguments);
	    },
	  
	    // Handle destroying regions, and then destroy the view itself.
	    destroy: function() {
	      if (this.isDestroyed) { return this; }
	      // #2134: remove parent element before destroying the child views, so
	      // removing the child views doesn't retrigger repaints
	      if (this.getOption('destroyImmediate') === true) {
	        this.$el.remove();
	      }
	      this.regionManager.destroy();
	      return Marionette.ItemView.prototype.destroy.apply(this, arguments);
	    },
	  
	    showChildView: function(regionName, view, options) {
	      var region = this.getRegion(regionName);
	      return region.show.apply(region, _.rest(arguments));
	    },
	  
	    getChildView: function(regionName) {
	      return this.getRegion(regionName).currentView;
	    },
	  
	    // Add a single region, by name, to the layoutView
	    addRegion: function(name, definition) {
	      var regions = {};
	      regions[name] = definition;
	      return this._buildRegions(regions)[name];
	    },
	  
	    // Add multiple regions as a {name: definition, name2: def2} object literal
	    addRegions: function(regions) {
	      this.regions = _.extend({}, this.regions, regions);
	      return this._buildRegions(regions);
	    },
	  
	    // Remove a single region from the LayoutView, by name
	    removeRegion: function(name) {
	      delete this.regions[name];
	      return this.regionManager.removeRegion(name);
	    },
	  
	    // Provides alternative access to regions
	    // Accepts the region name
	    // getRegion('main')
	    getRegion: function(region) {
	      return this.regionManager.get(region);
	    },
	  
	    // Get all regions
	    getRegions: function() {
	      return this.regionManager.getRegions();
	    },
	  
	    // internal method to build regions
	    _buildRegions: function(regions) {
	      var defaults = {
	        regionClass: this.getOption('regionClass'),
	        parentEl: _.partial(_.result, this, 'el')
	      };
	  
	      return this.regionManager.addRegions(regions, defaults);
	    },
	  
	    // Internal method to initialize the regions that have been defined in a
	    // `regions` attribute on this layoutView.
	    _initializeRegions: function(options) {
	      var regions;
	      this._initRegionManager();
	  
	      regions = Marionette._getValue(this.regions, this, [options]) || {};
	  
	      // Enable users to define `regions` as instance options.
	      var regionOptions = this.getOption.call(options, 'regions');
	  
	      // enable region options to be a function
	      regionOptions = Marionette._getValue(regionOptions, this, [options]);
	  
	      _.extend(regions, regionOptions);
	  
	      // Normalize region selectors hash to allow
	      // a user to use the @ui. syntax.
	      regions = this.normalizeUIValues(regions, ['selector', 'el']);
	  
	      this.addRegions(regions);
	    },
	  
	    // Internal method to re-initialize all of the regions by updating the `el` that
	    // they point to
	    _reInitializeRegions: function() {
	      this.regionManager.invoke('reset');
	    },
	  
	    // Enable easy overriding of the default `RegionManager`
	    // for customized region interactions and business specific
	    // view logic for better control over single regions.
	    getRegionManager: function() {
	      return new Marionette.RegionManager();
	    },
	  
	    // Internal method to initialize the region manager
	    // and all regions in it
	    _initRegionManager: function() {
	      this.regionManager = this.getRegionManager();
	      this.regionManager._parent = this;
	  
	      this.listenTo(this.regionManager, 'before:add:region', function(name) {
	        this.triggerMethod('before:add:region', name);
	      });
	  
	      this.listenTo(this.regionManager, 'add:region', function(name, region) {
	        this[name] = region;
	        this.triggerMethod('add:region', name, region);
	      });
	  
	      this.listenTo(this.regionManager, 'before:remove:region', function(name) {
	        this.triggerMethod('before:remove:region', name);
	      });
	  
	      this.listenTo(this.regionManager, 'remove:region', function(name, region) {
	        delete this[name];
	        this.triggerMethod('remove:region', name, region);
	      });
	    },
	  
	    _getImmediateChildren: function() {
	      return _.chain(this.regionManager.getRegions())
	        .pluck('currentView')
	        .compact()
	        .value();
	    }
	  });
	  

	  // Behavior
	  // --------
	  
	  // A Behavior is an isolated set of DOM /
	  // user interactions that can be mixed into any View.
	  // Behaviors allow you to blackbox View specific interactions
	  // into portable logical chunks, keeping your views simple and your code DRY.
	  
	  Marionette.Behavior = Marionette.Object.extend({
	    constructor: function(options, view) {
	      // Setup reference to the view.
	      // this comes in handle when a behavior
	      // wants to directly talk up the chain
	      // to the view.
	      this.view = view;
	      this.defaults = _.result(this, 'defaults') || {};
	      this.options  = _.extend({}, this.defaults, options);
	      // Construct an internal UI hash using
	      // the views UI hash and then the behaviors UI hash.
	      // This allows the user to use UI hash elements
	      // defined in the parent view as well as those
	      // defined in the given behavior.
	      this.ui = _.extend({}, _.result(view, 'ui'), _.result(this, 'ui'));
	  
	      Marionette.Object.apply(this, arguments);
	    },
	  
	    // proxy behavior $ method to the view
	    // this is useful for doing jquery DOM lookups
	    // scoped to behaviors view.
	    $: function() {
	      return this.view.$.apply(this.view, arguments);
	    },
	  
	    // Stops the behavior from listening to events.
	    // Overrides Object#destroy to prevent additional events from being triggered.
	    destroy: function() {
	      this.stopListening();
	  
	      return this;
	    },
	  
	    proxyViewProperties: function(view) {
	      this.$el = view.$el;
	      this.el = view.el;
	    }
	  });
	  
	  /* jshint maxlen: 143 */
	  // Behaviors
	  // ---------
	  
	  // Behaviors is a utility class that takes care of
	  // gluing your behavior instances to their given View.
	  // The most important part of this class is that you
	  // **MUST** override the class level behaviorsLookup
	  // method for things to work properly.
	  
	  Marionette.Behaviors = (function(Marionette, _) {
	    // Borrow event splitter from Backbone
	    var delegateEventSplitter = /^(\S+)\s*(.*)$/;
	  
	    function Behaviors(view, behaviors) {
	  
	      if (!_.isObject(view.behaviors)) {
	        return {};
	      }
	  
	      // Behaviors defined on a view can be a flat object literal
	      // or it can be a function that returns an object.
	      behaviors = Behaviors.parseBehaviors(view, behaviors || _.result(view, 'behaviors'));
	  
	      // Wraps several of the view's methods
	      // calling the methods first on each behavior
	      // and then eventually calling the method on the view.
	      Behaviors.wrap(view, behaviors, _.keys(methods));
	      return behaviors;
	    }
	  
	    var methods = {
	      behaviorTriggers: function(behaviorTriggers, behaviors) {
	        var triggerBuilder = new BehaviorTriggersBuilder(this, behaviors);
	        return triggerBuilder.buildBehaviorTriggers();
	      },
	  
	      behaviorEvents: function(behaviorEvents, behaviors) {
	        var _behaviorsEvents = {};
	  
	        _.each(behaviors, function(b, i) {
	          var _events = {};
	          var behaviorEvents = _.clone(_.result(b, 'events')) || {};
	  
	          // Normalize behavior events hash to allow
	          // a user to use the @ui. syntax.
	          behaviorEvents = Marionette.normalizeUIKeys(behaviorEvents, getBehaviorsUI(b));
	  
	          var j = 0;
	          _.each(behaviorEvents, function(behaviour, key) {
	            var match     = key.match(delegateEventSplitter);
	  
	            // Set event name to be namespaced using the view cid,
	            // the behavior index, and the behavior event index
	            // to generate a non colliding event namespace
	            // http://api.jquery.com/event.namespace/
	            var eventName = match[1] + '.' + [this.cid, i, j++, ' '].join('');
	            var selector  = match[2];
	  
	            var eventKey  = eventName + selector;
	            var handler   = _.isFunction(behaviour) ? behaviour : b[behaviour];
	            if (!handler) { return; }
	            _events[eventKey] = _.bind(handler, b);
	          }, this);
	  
	          _behaviorsEvents = _.extend(_behaviorsEvents, _events);
	        }, this);
	  
	        return _behaviorsEvents;
	      }
	    };
	  
	    _.extend(Behaviors, {
	  
	      // Placeholder method to be extended by the user.
	      // The method should define the object that stores the behaviors.
	      // i.e.
	      //
	      // ```js
	      // Marionette.Behaviors.behaviorsLookup: function() {
	      //   return App.Behaviors
	      // }
	      // ```
	      behaviorsLookup: function() {
	        throw new Marionette.Error({
	          message: 'You must define where your behaviors are stored.',
	          url: 'marionette.behaviors.html#behaviorslookup'
	        });
	      },
	  
	      // Takes care of getting the behavior class
	      // given options and a key.
	      // If a user passes in options.behaviorClass
	      // default to using that. Otherwise delegate
	      // the lookup to the users `behaviorsLookup` implementation.
	      getBehaviorClass: function(options, key) {
	        if (options.behaviorClass) {
	          return options.behaviorClass;
	        }
	  
	        // Get behavior class can be either a flat object or a method
	        return Marionette._getValue(Behaviors.behaviorsLookup, this, [options, key])[key];
	      },
	  
	      // Iterate over the behaviors object, for each behavior
	      // instantiate it and get its grouped behaviors.
	      parseBehaviors: function(view, behaviors) {
	        return _.chain(behaviors).map(function(options, key) {
	          var BehaviorClass = Behaviors.getBehaviorClass(options, key);
	  
	          var behavior = new BehaviorClass(options, view);
	          var nestedBehaviors = Behaviors.parseBehaviors(view, _.result(behavior, 'behaviors'));
	  
	          return [behavior].concat(nestedBehaviors);
	        }).flatten().value();
	      },
	  
	      // Wrap view internal methods so that they delegate to behaviors. For example,
	      // `onDestroy` should trigger destroy on all of the behaviors and then destroy itself.
	      // i.e.
	      //
	      // `view.delegateEvents = _.partial(methods.delegateEvents, view.delegateEvents, behaviors);`
	      wrap: function(view, behaviors, methodNames) {
	        _.each(methodNames, function(methodName) {
	          view[methodName] = _.partial(methods[methodName], view[methodName], behaviors);
	        });
	      }
	    });
	  
	    // Class to build handlers for `triggers` on behaviors
	    // for views
	    function BehaviorTriggersBuilder(view, behaviors) {
	      this._view      = view;
	      this._behaviors = behaviors;
	      this._triggers  = {};
	    }
	  
	    _.extend(BehaviorTriggersBuilder.prototype, {
	      // Main method to build the triggers hash with event keys and handlers
	      buildBehaviorTriggers: function() {
	        _.each(this._behaviors, this._buildTriggerHandlersForBehavior, this);
	        return this._triggers;
	      },
	  
	      // Internal method to build all trigger handlers for a given behavior
	      _buildTriggerHandlersForBehavior: function(behavior, i) {
	        var triggersHash = _.clone(_.result(behavior, 'triggers')) || {};
	  
	        triggersHash = Marionette.normalizeUIKeys(triggersHash, getBehaviorsUI(behavior));
	  
	        _.each(triggersHash, _.bind(this._setHandlerForBehavior, this, behavior, i));
	      },
	  
	      // Internal method to create and assign the trigger handler for a given
	      // behavior
	      _setHandlerForBehavior: function(behavior, i, eventName, trigger) {
	        // Unique identifier for the `this._triggers` hash
	        var triggerKey = trigger.replace(/^\S+/, function(triggerName) {
	          return triggerName + '.' + 'behaviortriggers' + i;
	        });
	  
	        this._triggers[triggerKey] = this._view._buildViewTrigger(eventName);
	      }
	    });
	  
	    function getBehaviorsUI(behavior) {
	      return behavior._uiBindings || behavior.ui;
	    }
	  
	    return Behaviors;
	  
	  })(Marionette, _);
	  

	  // App Router
	  // ----------
	  
	  // Reduce the boilerplate code of handling route events
	  // and then calling a single method on another object.
	  // Have your routers configured to call the method on
	  // your object, directly.
	  //
	  // Configure an AppRouter with `appRoutes`.
	  //
	  // App routers can only take one `controller` object.
	  // It is recommended that you divide your controller
	  // objects in to smaller pieces of related functionality
	  // and have multiple routers / controllers, instead of
	  // just one giant router and controller.
	  //
	  // You can also add standard routes to an AppRouter.
	  
	  Marionette.AppRouter = Backbone.Router.extend({
	  
	    constructor: function(options) {
	      this.options = options || {};
	  
	      Backbone.Router.apply(this, arguments);
	  
	      var appRoutes = this.getOption('appRoutes');
	      var controller = this._getController();
	      this.processAppRoutes(controller, appRoutes);
	      this.on('route', this._processOnRoute, this);
	    },
	  
	    // Similar to route method on a Backbone Router but
	    // method is called on the controller
	    appRoute: function(route, methodName) {
	      var controller = this._getController();
	      this._addAppRoute(controller, route, methodName);
	    },
	  
	    // process the route event and trigger the onRoute
	    // method call, if it exists
	    _processOnRoute: function(routeName, routeArgs) {
	      // make sure an onRoute before trying to call it
	      if (_.isFunction(this.onRoute)) {
	        // find the path that matches the current route
	        var routePath = _.invert(this.getOption('appRoutes'))[routeName];
	        this.onRoute(routeName, routePath, routeArgs);
	      }
	    },
	  
	    // Internal method to process the `appRoutes` for the
	    // router, and turn them in to routes that trigger the
	    // specified method on the specified `controller`.
	    processAppRoutes: function(controller, appRoutes) {
	      if (!appRoutes) { return; }
	  
	      var routeNames = _.keys(appRoutes).reverse(); // Backbone requires reverted order of routes
	  
	      _.each(routeNames, function(route) {
	        this._addAppRoute(controller, route, appRoutes[route]);
	      }, this);
	    },
	  
	    _getController: function() {
	      return this.getOption('controller');
	    },
	  
	    _addAppRoute: function(controller, route, methodName) {
	      var method = controller[methodName];
	  
	      if (!method) {
	        throw new Marionette.Error('Method "' + methodName + '" was not found on the controller');
	      }
	  
	      this.route(route, methodName, _.bind(method, controller));
	    },
	  
	    mergeOptions: Marionette.mergeOptions,
	  
	    // Proxy `getOption` to enable getting options from this or this.options by name.
	    getOption: Marionette.proxyGetOption,
	  
	    triggerMethod: Marionette.triggerMethod,
	  
	    bindEntityEvents: Marionette.proxyBindEntityEvents,
	  
	    unbindEntityEvents: Marionette.proxyUnbindEntityEvents
	  });
	  
	  // Application
	  // -----------
	  
	  // Contain and manage the composite application as a whole.
	  // Stores and starts up `Region` objects, includes an
	  // event aggregator as `app.vent`
	  Marionette.Application = Marionette.Object.extend({
	    constructor: function(options) {
	      this._initializeRegions(options);
	      this._initCallbacks = new Marionette.Callbacks();
	      this.submodules = {};
	      _.extend(this, options);
	      this._initChannel();
	      Marionette.Object.apply(this, arguments);
	    },
	  
	    // Command execution, facilitated by Backbone.Wreqr.Commands
	    execute: function() {
	      this.commands.execute.apply(this.commands, arguments);
	    },
	  
	    // Request/response, facilitated by Backbone.Wreqr.RequestResponse
	    request: function() {
	      return this.reqres.request.apply(this.reqres, arguments);
	    },
	  
	    // Add an initializer that is either run at when the `start`
	    // method is called, or run immediately if added after `start`
	    // has already been called.
	    addInitializer: function(initializer) {
	      this._initCallbacks.add(initializer);
	    },
	  
	    // kick off all of the application's processes.
	    // initializes all of the regions that have been added
	    // to the app, and runs all of the initializer functions
	    start: function(options) {
	      this.triggerMethod('before:start', options);
	      this._initCallbacks.run(options, this);
	      this.triggerMethod('start', options);
	    },
	  
	    // Add regions to your app.
	    // Accepts a hash of named strings or Region objects
	    // addRegions({something: "#someRegion"})
	    // addRegions({something: Region.extend({el: "#someRegion"}) });
	    addRegions: function(regions) {
	      return this._regionManager.addRegions(regions);
	    },
	  
	    // Empty all regions in the app, without removing them
	    emptyRegions: function() {
	      return this._regionManager.emptyRegions();
	    },
	  
	    // Removes a region from your app, by name
	    // Accepts the regions name
	    // removeRegion('myRegion')
	    removeRegion: function(region) {
	      return this._regionManager.removeRegion(region);
	    },
	  
	    // Provides alternative access to regions
	    // Accepts the region name
	    // getRegion('main')
	    getRegion: function(region) {
	      return this._regionManager.get(region);
	    },
	  
	    // Get all the regions from the region manager
	    getRegions: function() {
	      return this._regionManager.getRegions();
	    },
	  
	    // Create a module, attached to the application
	    module: function(moduleNames, moduleDefinition) {
	  
	      // Overwrite the module class if the user specifies one
	      var ModuleClass = Marionette.Module.getClass(moduleDefinition);
	  
	      var args = _.toArray(arguments);
	      args.unshift(this);
	  
	      // see the Marionette.Module object for more information
	      return ModuleClass.create.apply(ModuleClass, args);
	    },
	  
	    // Enable easy overriding of the default `RegionManager`
	    // for customized region interactions and business-specific
	    // view logic for better control over single regions.
	    getRegionManager: function() {
	      return new Marionette.RegionManager();
	    },
	  
	    // Internal method to initialize the regions that have been defined in a
	    // `regions` attribute on the application instance
	    _initializeRegions: function(options) {
	      var regions = _.isFunction(this.regions) ? this.regions(options) : this.regions || {};
	  
	      this._initRegionManager();
	  
	      // Enable users to define `regions` in instance options.
	      var optionRegions = Marionette.getOption(options, 'regions');
	  
	      // Enable region options to be a function
	      if (_.isFunction(optionRegions)) {
	        optionRegions = optionRegions.call(this, options);
	      }
	  
	      // Overwrite current regions with those passed in options
	      _.extend(regions, optionRegions);
	  
	      this.addRegions(regions);
	  
	      return this;
	    },
	  
	    // Internal method to set up the region manager
	    _initRegionManager: function() {
	      this._regionManager = this.getRegionManager();
	      this._regionManager._parent = this;
	  
	      this.listenTo(this._regionManager, 'before:add:region', function() {
	        Marionette._triggerMethod(this, 'before:add:region', arguments);
	      });
	  
	      this.listenTo(this._regionManager, 'add:region', function(name, region) {
	        this[name] = region;
	        Marionette._triggerMethod(this, 'add:region', arguments);
	      });
	  
	      this.listenTo(this._regionManager, 'before:remove:region', function() {
	        Marionette._triggerMethod(this, 'before:remove:region', arguments);
	      });
	  
	      this.listenTo(this._regionManager, 'remove:region', function(name) {
	        delete this[name];
	        Marionette._triggerMethod(this, 'remove:region', arguments);
	      });
	    },
	  
	    // Internal method to setup the Wreqr.radio channel
	    _initChannel: function() {
	      this.channelName = _.result(this, 'channelName') || 'global';
	      this.channel = _.result(this, 'channel') || Backbone.Wreqr.radio.channel(this.channelName);
	      this.vent = _.result(this, 'vent') || this.channel.vent;
	      this.commands = _.result(this, 'commands') || this.channel.commands;
	      this.reqres = _.result(this, 'reqres') || this.channel.reqres;
	    }
	  });
	  
	  /* jshint maxparams: 9 */
	  
	  // Module
	  // ------
	  
	  // A simple module system, used to create privacy and encapsulation in
	  // Marionette applications
	  Marionette.Module = function(moduleName, app, options) {
	    this.moduleName = moduleName;
	    this.options = _.extend({}, this.options, options);
	    // Allow for a user to overide the initialize
	    // for a given module instance.
	    this.initialize = options.initialize || this.initialize;
	  
	    // Set up an internal store for sub-modules.
	    this.submodules = {};
	  
	    this._setupInitializersAndFinalizers();
	  
	    // Set an internal reference to the app
	    // within a module.
	    this.app = app;
	  
	    if (_.isFunction(this.initialize)) {
	      this.initialize(moduleName, app, this.options);
	    }
	  };
	  
	  Marionette.Module.extend = Marionette.extend;
	  
	  // Extend the Module prototype with events / listenTo, so that the module
	  // can be used as an event aggregator or pub/sub.
	  _.extend(Marionette.Module.prototype, Backbone.Events, {
	  
	    // By default modules start with their parents.
	    startWithParent: true,
	  
	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic when extending Marionette.Module.
	    initialize: function() {},
	  
	    // Initializer for a specific module. Initializers are run when the
	    // module's `start` method is called.
	    addInitializer: function(callback) {
	      this._initializerCallbacks.add(callback);
	    },
	  
	    // Finalizers are run when a module is stopped. They are used to teardown
	    // and finalize any variables, references, events and other code that the
	    // module had set up.
	    addFinalizer: function(callback) {
	      this._finalizerCallbacks.add(callback);
	    },
	  
	    // Start the module, and run all of its initializers
	    start: function(options) {
	      // Prevent re-starting a module that is already started
	      if (this._isInitialized) { return; }
	  
	      // start the sub-modules (depth-first hierarchy)
	      _.each(this.submodules, function(mod) {
	        // check to see if we should start the sub-module with this parent
	        if (mod.startWithParent) {
	          mod.start(options);
	        }
	      });
	  
	      // run the callbacks to "start" the current module
	      this.triggerMethod('before:start', options);
	  
	      this._initializerCallbacks.run(options, this);
	      this._isInitialized = true;
	  
	      this.triggerMethod('start', options);
	    },
	  
	    // Stop this module by running its finalizers and then stop all of
	    // the sub-modules for this module
	    stop: function() {
	      // if we are not initialized, don't bother finalizing
	      if (!this._isInitialized) { return; }
	      this._isInitialized = false;
	  
	      this.triggerMethod('before:stop');
	  
	      // stop the sub-modules; depth-first, to make sure the
	      // sub-modules are stopped / finalized before parents
	      _.invoke(this.submodules, 'stop');
	  
	      // run the finalizers
	      this._finalizerCallbacks.run(undefined, this);
	  
	      // reset the initializers and finalizers
	      this._initializerCallbacks.reset();
	      this._finalizerCallbacks.reset();
	  
	      this.triggerMethod('stop');
	    },
	  
	    // Configure the module with a definition function and any custom args
	    // that are to be passed in to the definition function
	    addDefinition: function(moduleDefinition, customArgs) {
	      this._runModuleDefinition(moduleDefinition, customArgs);
	    },
	  
	    // Internal method: run the module definition function with the correct
	    // arguments
	    _runModuleDefinition: function(definition, customArgs) {
	      // If there is no definition short circut the method.
	      if (!definition) { return; }
	  
	      // build the correct list of arguments for the module definition
	      var args = _.flatten([
	        this,
	        this.app,
	        Backbone,
	        Marionette,
	        Backbone.$, _,
	        customArgs
	      ]);
	  
	      definition.apply(this, args);
	    },
	  
	    // Internal method: set up new copies of initializers and finalizers.
	    // Calling this method will wipe out all existing initializers and
	    // finalizers.
	    _setupInitializersAndFinalizers: function() {
	      this._initializerCallbacks = new Marionette.Callbacks();
	      this._finalizerCallbacks = new Marionette.Callbacks();
	    },
	  
	    // import the `triggerMethod` to trigger events with corresponding
	    // methods if the method exists
	    triggerMethod: Marionette.triggerMethod
	  });
	  
	  // Class methods to create modules
	  _.extend(Marionette.Module, {
	  
	    // Create a module, hanging off the app parameter as the parent object.
	    create: function(app, moduleNames, moduleDefinition) {
	      var module = app;
	  
	      // get the custom args passed in after the module definition and
	      // get rid of the module name and definition function
	      var customArgs = _.drop(arguments, 3);
	  
	      // Split the module names and get the number of submodules.
	      // i.e. an example module name of `Doge.Wow.Amaze` would
	      // then have the potential for 3 module definitions.
	      moduleNames = moduleNames.split('.');
	      var length = moduleNames.length;
	  
	      // store the module definition for the last module in the chain
	      var moduleDefinitions = [];
	      moduleDefinitions[length - 1] = moduleDefinition;
	  
	      // Loop through all the parts of the module definition
	      _.each(moduleNames, function(moduleName, i) {
	        var parentModule = module;
	        module = this._getModule(parentModule, moduleName, app, moduleDefinition);
	        this._addModuleDefinition(parentModule, module, moduleDefinitions[i], customArgs);
	      }, this);
	  
	      // Return the last module in the definition chain
	      return module;
	    },
	  
	    _getModule: function(parentModule, moduleName, app, def, args) {
	      var options = _.extend({}, def);
	      var ModuleClass = this.getClass(def);
	  
	      // Get an existing module of this name if we have one
	      var module = parentModule[moduleName];
	  
	      if (!module) {
	        // Create a new module if we don't have one
	        module = new ModuleClass(moduleName, app, options);
	        parentModule[moduleName] = module;
	        // store the module on the parent
	        parentModule.submodules[moduleName] = module;
	      }
	  
	      return module;
	    },
	  
	    // ## Module Classes
	    //
	    // Module classes can be used as an alternative to the define pattern.
	    // The extend function of a Module is identical to the extend functions
	    // on other Backbone and Marionette classes.
	    // This allows module lifecyle events like `onStart` and `onStop` to be called directly.
	    getClass: function(moduleDefinition) {
	      var ModuleClass = Marionette.Module;
	  
	      if (!moduleDefinition) {
	        return ModuleClass;
	      }
	  
	      // If all of the module's functionality is defined inside its class,
	      // then the class can be passed in directly. `MyApp.module("Foo", FooModule)`.
	      if (moduleDefinition.prototype instanceof ModuleClass) {
	        return moduleDefinition;
	      }
	  
	      return moduleDefinition.moduleClass || ModuleClass;
	    },
	  
	    // Add the module definition and add a startWithParent initializer function.
	    // This is complicated because module definitions are heavily overloaded
	    // and support an anonymous function, module class, or options object
	    _addModuleDefinition: function(parentModule, module, def, args) {
	      var fn = this._getDefine(def);
	      var startWithParent = this._getStartWithParent(def, module);
	  
	      if (fn) {
	        module.addDefinition(fn, args);
	      }
	  
	      this._addStartWithParent(parentModule, module, startWithParent);
	    },
	  
	    _getStartWithParent: function(def, module) {
	      var swp;
	  
	      if (_.isFunction(def) && (def.prototype instanceof Marionette.Module)) {
	        swp = module.constructor.prototype.startWithParent;
	        return _.isUndefined(swp) ? true : swp;
	      }
	  
	      if (_.isObject(def)) {
	        swp = def.startWithParent;
	        return _.isUndefined(swp) ? true : swp;
	      }
	  
	      return true;
	    },
	  
	    _getDefine: function(def) {
	      if (_.isFunction(def) && !(def.prototype instanceof Marionette.Module)) {
	        return def;
	      }
	  
	      if (_.isObject(def)) {
	        return def.define;
	      }
	  
	      return null;
	    },
	  
	    _addStartWithParent: function(parentModule, module, startWithParent) {
	      module.startWithParent = module.startWithParent && startWithParent;
	  
	      if (!module.startWithParent || !!module.startWithParentIsConfigured) {
	        return;
	      }
	  
	      module.startWithParentIsConfigured = true;
	  
	      parentModule.addInitializer(function(options) {
	        if (module.startWithParent) {
	          module.start(options);
	        }
	      });
	    }
	  });
	  

	  return Marionette;
	}));


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {//     Backbone.js 1.3.3

	//     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(factory) {

	  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
	  // We use `self` instead of `window` for `WebWorker` support.
	  var root = (typeof self == 'object' && self.self === self && self) ||
	            (typeof global == 'object' && global.global === global && global);

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(5), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore'), $;
	    try { $ = require('jquery'); } catch (e) {}
	    factory(root, exports, _, $);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	})(function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create a local reference to a common array method we'll want to use later.
	  var slice = Array.prototype.slice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.3.3';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... this will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Proxy Backbone class methods to Underscore functions, wrapping the model's
	  // `attributes` object or collection's `models` array behind the scenes.
	  //
	  // collection.filter(function(model) { return model.get('age') > 10 });
	  // collection.each(this.addView);
	  //
	  // `Function#apply` can be slow so we use the method's arg count, if we know it.
	  var addMethod = function(length, method, attribute) {
	    switch (length) {
	      case 1: return function() {
	        return _[method](this[attribute]);
	      };
	      case 2: return function(value) {
	        return _[method](this[attribute], value);
	      };
	      case 3: return function(iteratee, context) {
	        return _[method](this[attribute], cb(iteratee, this), context);
	      };
	      case 4: return function(iteratee, defaultVal, context) {
	        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
	      };
	      default: return function() {
	        var args = slice.call(arguments);
	        args.unshift(this[attribute]);
	        return _[method].apply(_, args);
	      };
	    }
	  };
	  var addUnderscoreMethods = function(Class, methods, attribute) {
	    _.each(methods, function(length, method) {
	      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
	    });
	  };

	  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
	  var cb = function(iteratee, instance) {
	    if (_.isFunction(iteratee)) return iteratee;
	    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
	    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
	    return iteratee;
	  };
	  var modelMatcher = function(attrs) {
	    var matcher = _.matches(attrs);
	    return function(model) {
	      return matcher(model.attributes);
	    };
	  };

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // a custom event channel. You may bind a callback to an event with `on` or
	  // remove with `off`; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {};

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Iterates over the standard `event, callback` (as well as the fancy multiple
	  // space-separated events `"change blur", callback` and jQuery-style event
	  // maps `{event: callback}`).
	  var eventsApi = function(iteratee, events, name, callback, opts) {
	    var i = 0, names;
	    if (name && typeof name === 'object') {
	      // Handle event maps.
	      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
	      for (names = _.keys(name); i < names.length ; i++) {
	        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
	      }
	    } else if (name && eventSplitter.test(name)) {
	      // Handle space-separated event names by delegating them individually.
	      for (names = name.split(eventSplitter); i < names.length; i++) {
	        events = iteratee(events, names[i], callback, opts);
	      }
	    } else {
	      // Finally, standard events.
	      events = iteratee(events, name, callback, opts);
	    }
	    return events;
	  };

	  // Bind an event to a `callback` function. Passing `"all"` will bind
	  // the callback to all events fired.
	  Events.on = function(name, callback, context) {
	    return internalOn(this, name, callback, context);
	  };

	  // Guard the `listening` argument from the public API.
	  var internalOn = function(obj, name, callback, context, listening) {
	    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
	      context: context,
	      ctx: obj,
	      listening: listening
	    });

	    if (listening) {
	      var listeners = obj._listeners || (obj._listeners = {});
	      listeners[listening.id] = listening;
	    }

	    return obj;
	  };

	  // Inversion-of-control versions of `on`. Tell *this* object to listen to
	  // an event in another object... keeping track of what it's listening to
	  // for easier unbinding later.
	  Events.listenTo = function(obj, name, callback) {
	    if (!obj) return this;
	    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	    var listeningTo = this._listeningTo || (this._listeningTo = {});
	    var listening = listeningTo[id];

	    // This object is not listening to any other events on `obj` yet.
	    // Setup the necessary references to track the listening callbacks.
	    if (!listening) {
	      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
	      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
	    }

	    // Bind callbacks on obj, and keep track of them on listening.
	    internalOn(obj, name, callback, this, listening);
	    return this;
	  };

	  // The reducing API that adds a callback to the `events` object.
	  var onApi = function(events, name, callback, options) {
	    if (callback) {
	      var handlers = events[name] || (events[name] = []);
	      var context = options.context, ctx = options.ctx, listening = options.listening;
	      if (listening) listening.count++;

	      handlers.push({callback: callback, context: context, ctx: context || ctx, listening: listening});
	    }
	    return events;
	  };

	  // Remove one or many callbacks. If `context` is null, removes all
	  // callbacks with that function. If `callback` is null, removes all
	  // callbacks for the event. If `name` is null, removes all bound
	  // callbacks for all events.
	  Events.off = function(name, callback, context) {
	    if (!this._events) return this;
	    this._events = eventsApi(offApi, this._events, name, callback, {
	      context: context,
	      listeners: this._listeners
	    });
	    return this;
	  };

	  // Tell this object to stop listening to either specific events ... or
	  // to every object it's currently listening to.
	  Events.stopListening = function(obj, name, callback) {
	    var listeningTo = this._listeningTo;
	    if (!listeningTo) return this;

	    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

	    for (var i = 0; i < ids.length; i++) {
	      var listening = listeningTo[ids[i]];

	      // If listening doesn't exist, this object is not currently
	      // listening to obj. Break out early.
	      if (!listening) break;

	      listening.obj.off(name, callback, this);
	    }

	    return this;
	  };

	  // The reducing API that removes a callback from the `events` object.
	  var offApi = function(events, name, callback, options) {
	    if (!events) return;

	    var i = 0, listening;
	    var context = options.context, listeners = options.listeners;

	    // Delete all events listeners and "drop" events.
	    if (!name && !callback && !context) {
	      var ids = _.keys(listeners);
	      for (; i < ids.length; i++) {
	        listening = listeners[ids[i]];
	        delete listeners[listening.id];
	        delete listening.listeningTo[listening.objId];
	      }
	      return;
	    }

	    var names = name ? [name] : _.keys(events);
	    for (; i < names.length; i++) {
	      name = names[i];
	      var handlers = events[name];

	      // Bail out if there are no events stored.
	      if (!handlers) break;

	      // Replace events if there are any remaining.  Otherwise, clean up.
	      var remaining = [];
	      for (var j = 0; j < handlers.length; j++) {
	        var handler = handlers[j];
	        if (
	          callback && callback !== handler.callback &&
	            callback !== handler.callback._callback ||
	              context && context !== handler.context
	        ) {
	          remaining.push(handler);
	        } else {
	          listening = handler.listening;
	          if (listening && --listening.count === 0) {
	            delete listeners[listening.id];
	            delete listening.listeningTo[listening.objId];
	          }
	        }
	      }

	      // Update tail event if the list has any events.  Otherwise, clean up.
	      if (remaining.length) {
	        events[name] = remaining;
	      } else {
	        delete events[name];
	      }
	    }
	    return events;
	  };

	  // Bind an event to only be triggered a single time. After the first time
	  // the callback is invoked, its listener will be removed. If multiple events
	  // are passed in using the space-separated syntax, the handler will fire
	  // once for each event, not once for a combination of all events.
	  Events.once = function(name, callback, context) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
	    if (typeof name === 'string' && context == null) callback = void 0;
	    return this.on(events, callback, context);
	  };

	  // Inversion-of-control versions of `once`.
	  Events.listenToOnce = function(obj, name, callback) {
	    // Map the event into a `{event: once}` object.
	    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
	    return this.listenTo(obj, events);
	  };

	  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
	  // `offer` unbinds the `onceWrapper` after it has been called.
	  var onceMap = function(map, name, callback, offer) {
	    if (callback) {
	      var once = map[name] = _.once(function() {
	        offer(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	    }
	    return map;
	  };

	  // Trigger one or many events, firing all bound callbacks. Callbacks are
	  // passed the same arguments as `trigger` is, apart from the event name
	  // (unless you're listening on `"all"`, which will cause your callback to
	  // receive the true name of the event as the first argument).
	  Events.trigger = function(name) {
	    if (!this._events) return this;

	    var length = Math.max(0, arguments.length - 1);
	    var args = Array(length);
	    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

	    eventsApi(triggerApi, this._events, name, void 0, args);
	    return this;
	  };

	  // Handles triggering the appropriate event callbacks.
	  var triggerApi = function(objEvents, name, callback, args) {
	    if (objEvents) {
	      var events = objEvents[name];
	      var allEvents = objEvents.all;
	      if (events && allEvents) allEvents = allEvents.slice();
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, [name].concat(args));
	    }
	    return objEvents;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId(this.cidPrefix);
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    var defaults = _.result(this, 'defaults');
	    attrs = _.defaults(_.extend({}, defaults, attrs), defaults);
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // The prefix is used to create the client id which is used to identify models locally.
	    // You may want to override this if you're experiencing name clashes with model ids.
	    cidPrefix: 'c',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Special-cased proxy to underscore's `_.matches` method.
	    matches: function(attrs) {
	      return !!_.iteratee(attrs, this)(this.attributes);
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      var unset      = options.unset;
	      var silent     = options.silent;
	      var changes    = [];
	      var changing   = this._changing;
	      this._changing = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }

	      var current = this.attributes;
	      var changed = this.changed;
	      var prev    = this._previousAttributes;

	      // For each `set` attribute, update or delete the current value.
	      for (var attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          changed[attr] = val;
	        } else {
	          delete changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Update the `id`.
	      if (this.idAttribute in attrs) this.id = this.get(this.idAttribute);

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0; i < changes.length; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      var changed = {};
	      for (var attr in diff) {
	        var val = diff[attr];
	        if (_.isEqual(old[attr], val)) continue;
	        changed[attr] = val;
	      }
	      return _.size(changed) ? changed : false;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server, merging the response with the model's
	    // local attributes. Any changed attributes will trigger a "change" event.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (!model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      var attrs;
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true, parse: true}, options);
	      var wait = options.wait;

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !wait) {
	        if (!this.set(attrs, options)) return false;
	      } else if (!this._validate(attrs, options)) {
	        return false;
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      var model = this;
	      var success = options.success;
	      var attributes = this.attributes;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
	        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
	        if (serverAttrs && !model.set(serverAttrs, options)) return false;
	        if (success) success.call(options.context, model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      // Set temporary attributes if `{wait: true}` to properly find new ids.
	      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

	      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch' && !options.attrs) options.attrs = attrs;
	      var xhr = this.sync(method, this, options);

	      // Restore attributes.
	      this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;
	      var wait = options.wait;

	      var destroy = function() {
	        model.stopListening();
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (wait) destroy();
	        if (success) success.call(options.context, model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      var xhr = false;
	      if (this.isNew()) {
	        _.defer(options.success);
	      } else {
	        wrapError(this, options);
	        xhr = this.sync('delete', this, options);
	      }
	      if (!wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      var id = this.get(this.idAttribute);
	      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend({}, options, {validate: true}));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model, mapped to the
	  // number of arguments they take.
	  var modelMethods = {keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
	      omit: 0, chain: 1, isEmpty: 1};

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  addUnderscoreMethods(Model, modelMethods, 'attributes');

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analogous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Splices `insert` into `array` at index `at`.
	  var splice = function(array, insert, at) {
	    at = Math.min(Math.max(at, 0), array.length);
	    var tail = Array(array.length - at);
	    var length = insert.length;
	    var i;
	    for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
	    for (i = 0; i < length; i++) array[i + at] = insert[i];
	    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
	  };

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model) { return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set. `models` may be Backbone
	    // Models or raw JavaScript objects to be converted to Models, or any
	    // combination of the two.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      options = _.extend({}, options);
	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();
	      var removed = this._removeModels(models, options);
	      if (!options.silent && removed.length) {
	        options.changes = {added: [], merged: [], removed: removed};
	        this.trigger('update', this, options);
	      }
	      return singular ? removed[0] : removed;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      if (models == null) return;

	      options = _.extend({}, setOptions, options);
	      if (options.parse && !this._isModel(models)) {
	        models = this.parse(models, options) || [];
	      }

	      var singular = !_.isArray(models);
	      models = singular ? [models] : models.slice();

	      var at = options.at;
	      if (at != null) at = +at;
	      if (at > this.length) at = this.length;
	      if (at < 0) at += this.length + 1;

	      var set = [];
	      var toAdd = [];
	      var toMerge = [];
	      var toRemove = [];
	      var modelMap = {};

	      var add = options.add;
	      var merge = options.merge;
	      var remove = options.remove;

	      var sort = false;
	      var sortable = this.comparator && at == null && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      var model, i;
	      for (i = 0; i < models.length; i++) {
	        model = models[i];

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        var existing = this.get(model);
	        if (existing) {
	          if (merge && model !== existing) {
	            var attrs = this._isModel(model) ? model.attributes : model;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            toMerge.push(existing);
	            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
	          }
	          if (!modelMap[existing.cid]) {
	            modelMap[existing.cid] = true;
	            set.push(existing);
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(model, options);
	          if (model) {
	            toAdd.push(model);
	            this._addReference(model, options);
	            modelMap[model.cid] = true;
	            set.push(model);
	          }
	        }
	      }

	      // Remove stale models.
	      if (remove) {
	        for (i = 0; i < this.length; i++) {
	          model = this.models[i];
	          if (!modelMap[model.cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this._removeModels(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      var orderChanged = false;
	      var replace = !sortable && add && remove;
	      if (set.length && replace) {
	        orderChanged = this.length !== set.length || _.some(this.models, function(m, index) {
	          return m !== set[index];
	        });
	        this.models.length = 0;
	        splice(this.models, set, 0);
	        this.length = this.models.length;
	      } else if (toAdd.length) {
	        if (sortable) sort = true;
	        splice(this.models, toAdd, at == null ? this.length : at);
	        this.length = this.models.length;
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort/update events.
	      if (!options.silent) {
	        for (i = 0; i < toAdd.length; i++) {
	          if (at != null) options.index = at + i;
	          model = toAdd[i];
	          model.trigger('add', model, this, options);
	        }
	        if (sort || orderChanged) this.trigger('sort', this, options);
	        if (toAdd.length || toRemove.length || toMerge.length) {
	          options.changes = {
	            added: toAdd,
	            removed: toRemove,
	            merged: toMerge
	          };
	          this.trigger('update', this, options);
	        }
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options = options ? _.clone(options) : {};
	      for (var i = 0; i < this.models.length; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      return this.remove(model, options);
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      return this.remove(model, options);
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id, cid, model object with id or cid
	    // properties, or an attributes object that is transformed through modelId.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] ||
	        this._byId[this.modelId(obj.attributes || obj)] ||
	        obj.cid && this._byId[obj.cid];
	    },

	    // Returns `true` if the model is in the collection.
	    has: function(obj) {
	      return this.get(obj) != null;
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      if (index < 0) index += this.length;
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      return this[first ? 'find' : 'filter'](attrs);
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      var comparator = this.comparator;
	      if (!comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      var length = comparator.length;
	      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

	      // Run sort based on type of `comparator`.
	      if (length === 1 || _.isString(comparator)) {
	        this.models = this.sortBy(comparator);
	      } else {
	        this.models.sort(comparator);
	      }
	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return this.map(attr + '');
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = _.extend({parse: true}, options);
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success.call(options.context, collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      var wait = options.wait;
	      model = this._prepareModel(model, options);
	      if (!model) return false;
	      if (!wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(m, resp, callbackOpts) {
	        if (wait) collection.add(m, callbackOpts);
	        if (success) success.call(callbackOpts.context, m, resp, callbackOpts);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models, {
	        model: this.model,
	        comparator: this.comparator
	      });
	    },

	    // Define how to uniquely identify models in the collection.
	    modelId: function(attrs) {
	      return attrs[this.model.prototype.idAttribute || 'id'];
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (this._isModel(attrs)) {
	        if (!attrs.collection) attrs.collection = this;
	        return attrs;
	      }
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method called by both remove and set.
	    _removeModels: function(models, options) {
	      var removed = [];
	      for (var i = 0; i < models.length; i++) {
	        var model = this.get(models[i]);
	        if (!model) continue;

	        var index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;

	        // Remove references before triggering 'remove' event to prevent an
	        // infinite loop. #3693
	        delete this._byId[model.cid];
	        var id = this.modelId(model.attributes);
	        if (id != null) delete this._byId[id];

	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }

	        removed.push(model);
	        this._removeReference(model, options);
	      }
	      return removed;
	    },

	    // Method for checking whether an object should be considered a model for
	    // the purposes of adding to the collection.
	    _isModel: function(model) {
	      return model instanceof Model;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      var id = this.modelId(model.attributes);
	      if (id != null) this._byId[id] = model;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      delete this._byId[model.cid];
	      var id = this.modelId(model.attributes);
	      if (id != null) delete this._byId[id];
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if (model) {
	        if ((event === 'add' || event === 'remove') && collection !== this) return;
	        if (event === 'destroy') this.remove(model, options);
	        if (event === 'change') {
	          var prevId = this.modelId(model.previousAttributes());
	          var id = this.modelId(model.attributes);
	          if (prevId !== id) {
	            if (prevId != null) delete this._byId[prevId];
	            if (id != null) this._byId[id] = model;
	          }
	        }
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var collectionMethods = {forEach: 3, each: 3, map: 3, collect: 3, reduce: 0,
	      foldl: 0, inject: 0, reduceRight: 0, foldr: 0, find: 3, detect: 3, filter: 3,
	      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
	      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
	      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
	      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
	      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
	      sortBy: 3, indexBy: 3, findIndex: 3, findLastIndex: 3};

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  addUnderscoreMethods(Collection, collectionMethods, 'models');

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be set as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this._removeElement();
	      this.stopListening();
	      return this;
	    },

	    // Remove this view's element from the document and all event listeners
	    // attached to it. Exposed for subclasses using an alternative DOM
	    // manipulation API.
	    _removeElement: function() {
	      this.$el.remove();
	    },

	    // Change the view's element (`this.el` property) and re-delegate the
	    // view's events on the new element.
	    setElement: function(element) {
	      this.undelegateEvents();
	      this._setElement(element);
	      this.delegateEvents();
	      return this;
	    },

	    // Creates the `this.el` and `this.$el` references for this view using the
	    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
	    // context or an element. Subclasses can override this to utilize an
	    // alternative DOM manipulation API and are only required to set the
	    // `this.el` property.
	    _setElement: function(el) {
	      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
	      this.el = this.$el[0];
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    delegateEvents: function(events) {
	      events || (events = _.result(this, 'events'));
	      if (!events) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[method];
	        if (!method) continue;
	        var match = key.match(delegateEventSplitter);
	        this.delegate(match[1], match[2], _.bind(method, this));
	      }
	      return this;
	    },

	    // Add a single event listener to the view's element (or a child element
	    // using `selector`). This only works for delegate-able events: not `focus`,
	    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
	    delegate: function(eventName, selector, listener) {
	      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Clears all callbacks previously bound to the view by `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // A finer-grained `undelegateEvents` for removing a single delegated event.
	    // `selector` and `listener` are both optional.
	    undelegate: function(eventName, selector, listener) {
	      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
	      return this;
	    },

	    // Produces a DOM element to be assigned to your view. Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _createElement: function(tagName) {
	      return document.createElement(tagName);
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        this.setElement(this._createElement(_.result(this, 'tagName')));
	        this._setAttributes(attrs);
	      } else {
	        this.setElement(_.result(this, 'el'));
	      }
	    },

	    // Set attributes from a hash on this view's element.  Exposed for
	    // subclasses using an alternative DOM manipulation API.
	    _setAttributes: function(attributes) {
	      this.$el.attr(attributes);
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // Pass along `textStatus` and `errorThrown` from jQuery.
	    var error = options.error;
	    options.error = function(xhr, textStatus, errorThrown) {
	      options.textStatus = textStatus;
	      options.errorThrown = errorThrown;
	      if (error) error.call(options.context, xhr, textStatus, errorThrown);
	    };

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch': 'PATCH',
	    'delete': 'DELETE',
	    'read': 'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        if (router.execute(callback, args, name) !== false) {
	          router.trigger.apply(router, ['route:' + name].concat(args));
	          router.trigger('route', name, args);
	          Backbone.history.trigger('route', router, name, args);
	        }
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args, name) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    this.checkUrl = _.bind(this.checkUrl, this);

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
	      return path === this.root && !this.getSearch();
	    },

	    // Does the pathname match the root?
	    matchRoot: function() {
	      var path = this.decodeFragment(this.location.pathname);
	      var rootPath = path.slice(0, this.root.length - 1) + '/';
	      return rootPath === this.root;
	    },

	    // Unicode characters in `location.pathname` are percent encoded so they're
	    // decoded for comparison. `%25` should not be decoded since it may be part
	    // of an encoded parameter.
	    decodeFragment: function(fragment) {
	      return decodeURI(fragment.replace(/%25/g, '%2525'));
	    },

	    // In IE6, the hash fragment and search params are incorrect if the
	    // fragment contains `?`.
	    getSearch: function() {
	      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
	      return match ? match[0] : '';
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the pathname and search params, without the root.
	    getPath: function() {
	      var path = this.decodeFragment(
	        this.location.pathname + this.getSearch()
	      ).slice(this.root.length - 1);
	      return path.charAt(0) === '/' ? path.slice(1) : path;
	    },

	    // Get the cross-browser normalized URL fragment from the path or hash.
	    getFragment: function(fragment) {
	      if (fragment == null) {
	        if (this._usePushState || !this._wantsHashChange) {
	          fragment = this.getPath();
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error('Backbone.history has already been started');
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
	      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.history && this.history.pushState);
	      this._usePushState    = this._wantsPushState && this._hasPushState;
	      this.fragment         = this.getFragment();

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          var rootPath = this.root.slice(0, -1) || '/';
	          this.location.replace(rootPath + '#' + this.getPath());
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot()) {
	          this.navigate(this.getHash(), {replace: true});
	        }

	      }

	      // Proxy an iframe to handle location events if the browser doesn't
	      // support the `hashchange` event, HTML5 history, or the user wants
	      // `hashChange` but not `pushState`.
	      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
	        this.iframe = document.createElement('iframe');
	        this.iframe.src = 'javascript:0';
	        this.iframe.style.display = 'none';
	        this.iframe.tabIndex = -1;
	        var body = document.body;
	        // Using `appendChild` will throw on IE < 9 if the document is not ready.
	        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
	        iWindow.document.open();
	        iWindow.document.close();
	        iWindow.location.hash = '#' + this.fragment;
	      }

	      // Add a cross-platform `addEventListener` shim for older browsers.
	      var addEventListener = window.addEventListener || function(eventName, listener) {
	        return attachEvent('on' + eventName, listener);
	      };

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._usePushState) {
	        addEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        addEventListener('hashchange', this.checkUrl, false);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      // Add a cross-platform `removeEventListener` shim for older browsers.
	      var removeEventListener = window.removeEventListener || function(eventName, listener) {
	        return detachEvent('on' + eventName, listener);
	      };

	      // Remove window listeners.
	      if (this._usePushState) {
	        removeEventListener('popstate', this.checkUrl, false);
	      } else if (this._useHashChange && !this.iframe) {
	        removeEventListener('hashchange', this.checkUrl, false);
	      }

	      // Clean up the iframe if necessary.
	      if (this.iframe) {
	        document.body.removeChild(this.iframe);
	        this.iframe = null;
	      }

	      // Some environments will throw when clearing an undefined interval.
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();

	      // If the user pressed the back button, the iframe's hash will have
	      // changed and we should use that for comparison.
	      if (current === this.fragment && this.iframe) {
	        current = this.getHash(this.iframe.contentWindow);
	      }

	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      // If the root doesn't match, no routes can match either.
	      if (!this.matchRoot()) return false;
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.some(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      // Normalize the fragment.
	      fragment = this.getFragment(fragment || '');

	      // Don't include a trailing slash on the root.
	      var rootPath = this.root;
	      if (fragment === '' || fragment.charAt(0) === '?') {
	        rootPath = rootPath.slice(0, -1) || '/';
	      }
	      var url = rootPath + fragment;

	      // Strip the hash and decode for matching.
	      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._usePushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && fragment !== this.getHash(this.iframe.contentWindow)) {
	          var iWindow = this.iframe.contentWindow;

	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if (!options.replace) {
	            iWindow.document.open();
	            iWindow.document.close();
	          }

	          this._updateHash(iWindow.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function and add the prototype properties.
	    child.prototype = _.create(parent.prototype, protoProps);
	    child.prototype.constructor = child;

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error.call(options.context, model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = _;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = $;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Backbone.Wreqr (Backbone.Marionette)
	// ----------------------------------
	// v1.3.6
	//
	// Copyright (c)2016 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://github.com/marionettejs/backbone.wreqr


	(function(root, factory) {

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Backbone, _) {
	      return factory(Backbone, _);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    var Backbone = require('backbone');
	    var _ = require('underscore');
	    module.exports = factory(Backbone, _);
	  } else {
	    factory(root.Backbone, root._);
	  }

	}(this, function(Backbone, _) {
	  "use strict";

	  var previousWreqr = Backbone.Wreqr;

	  var Wreqr = Backbone.Wreqr = {};

	  Backbone.Wreqr.VERSION = '1.3.6';

	  Backbone.Wreqr.noConflict = function () {
	    Backbone.Wreqr = previousWreqr;
	    return this;
	  };

	  // Handlers
	  // --------
	  // A registry of functions to call, given a name
	  
	  Wreqr.Handlers = (function(Backbone, _){
	    "use strict";
	    
	    // Constructor
	    // -----------
	  
	    var Handlers = function(options){
	      this.options = options;
	      this._wreqrHandlers = {};
	      
	      if (_.isFunction(this.initialize)){
	        this.initialize(options);
	      }
	    };
	  
	    Handlers.extend = Backbone.Model.extend;
	  
	    // Instance Members
	    // ----------------
	  
	    _.extend(Handlers.prototype, Backbone.Events, {
	  
	      // Add multiple handlers using an object literal configuration
	      setHandlers: function(handlers){
	        _.each(handlers, function(handler, name){
	          var context = null;
	  
	          if (_.isObject(handler) && !_.isFunction(handler)){
	            context = handler.context;
	            handler = handler.callback;
	          }
	  
	          this.setHandler(name, handler, context);
	        }, this);
	      },
	  
	      // Add a handler for the given name, with an
	      // optional context to run the handler within
	      setHandler: function(name, handler, context){
	        var config = {
	          callback: handler,
	          context: context
	        };
	  
	        this._wreqrHandlers[name] = config;
	  
	        this.trigger("handler:add", name, handler, context);
	      },
	  
	      // Determine whether or not a handler is registered
	      hasHandler: function(name){
	        return !! this._wreqrHandlers[name];
	      },
	  
	      // Get the currently registered handler for
	      // the specified name. Throws an exception if
	      // no handler is found.
	      getHandler: function(name){
	        var config = this._wreqrHandlers[name];
	  
	        if (!config){
	          return;
	        }
	  
	        return function(){
	          return config.callback.apply(config.context, arguments);
	        };
	      },
	  
	      // Remove a handler for the specified name
	      removeHandler: function(name){
	        delete this._wreqrHandlers[name];
	      },
	  
	      // Remove all handlers from this registry
	      removeAllHandlers: function(){
	        this._wreqrHandlers = {};
	      }
	    });
	  
	    return Handlers;
	  })(Backbone, _);
	  
	  // Wreqr.CommandStorage
	  // --------------------
	  //
	  // Store and retrieve commands for execution.
	  Wreqr.CommandStorage = (function(){
	    "use strict";
	  
	    // Constructor function
	    var CommandStorage = function(options){
	      this.options = options;
	      this._commands = {};
	  
	      if (_.isFunction(this.initialize)){
	        this.initialize(options);
	      }
	    };
	  
	    // Instance methods
	    _.extend(CommandStorage.prototype, Backbone.Events, {
	  
	      // Get an object literal by command name, that contains
	      // the `commandName` and the `instances` of all commands
	      // represented as an array of arguments to process
	      getCommands: function(commandName){
	        var commands = this._commands[commandName];
	  
	        // we don't have it, so add it
	        if (!commands){
	  
	          // build the configuration
	          commands = {
	            command: commandName, 
	            instances: []
	          };
	  
	          // store it
	          this._commands[commandName] = commands;
	        }
	  
	        return commands;
	      },
	  
	      // Add a command by name, to the storage and store the
	      // args for the command
	      addCommand: function(commandName, args){
	        var command = this.getCommands(commandName);
	        command.instances.push(args);
	      },
	  
	      // Clear all commands for the given `commandName`
	      clearCommands: function(commandName){
	        var command = this.getCommands(commandName);
	        command.instances = [];
	      }
	    });
	  
	    return CommandStorage;
	  })();
	  
	  // Wreqr.Commands
	  // --------------
	  //
	  // A simple command pattern implementation. Register a command
	  // handler and execute it.
	  Wreqr.Commands = (function(Wreqr, _){
	    "use strict";
	  
	    return Wreqr.Handlers.extend({
	      // default storage type
	      storageType: Wreqr.CommandStorage,
	  
	      constructor: function(options){
	        this.options = options || {};
	  
	        this._initializeStorage(this.options);
	        this.on("handler:add", this._executeCommands, this);
	  
	        Wreqr.Handlers.prototype.constructor.apply(this, arguments);
	      },
	  
	      // Execute a named command with the supplied args
	      execute: function(name){
	        name = arguments[0];
	        var args = _.rest(arguments);
	  
	        if (this.hasHandler(name)){
	          this.getHandler(name).apply(this, args);
	        } else {
	          this.storage.addCommand(name, args);
	        }
	  
	      },
	  
	      // Internal method to handle bulk execution of stored commands
	      _executeCommands: function(name, handler, context){
	        var command = this.storage.getCommands(name);
	  
	        // loop through and execute all the stored command instances
	        _.each(command.instances, function(args){
	          handler.apply(context, args);
	        });
	  
	        this.storage.clearCommands(name);
	      },
	  
	      // Internal method to initialize storage either from the type's
	      // `storageType` or the instance `options.storageType`.
	      _initializeStorage: function(options){
	        var storage;
	  
	        var StorageType = options.storageType || this.storageType;
	        if (_.isFunction(StorageType)){
	          storage = new StorageType();
	        } else {
	          storage = StorageType;
	        }
	  
	        this.storage = storage;
	      }
	    });
	  
	  })(Wreqr, _);
	  
	  // Wreqr.RequestResponse
	  // ---------------------
	  //
	  // A simple request/response implementation. Register a
	  // request handler, and return a response from it
	  Wreqr.RequestResponse = (function(Wreqr, _){
	    "use strict";
	  
	    return Wreqr.Handlers.extend({
	      request: function(name){
	        if (this.hasHandler(name)) {
	          return this.getHandler(name).apply(this, _.rest(arguments));
	        }
	      }
	    });
	  
	  })(Wreqr, _);
	  
	  // Event Aggregator
	  // ----------------
	  // A pub-sub object that can be used to decouple various parts
	  // of an application through event-driven architecture.
	  
	  Wreqr.EventAggregator = (function(Backbone, _){
	    "use strict";
	    var EA = function(){};
	  
	    // Copy the `extend` function used by Backbone's classes
	    EA.extend = Backbone.Model.extend;
	  
	    // Copy the basic Backbone.Events on to the event aggregator
	    _.extend(EA.prototype, Backbone.Events);
	  
	    return EA;
	  })(Backbone, _);
	  
	  // Wreqr.Channel
	  // --------------
	  //
	  // An object that wraps the three messaging systems:
	  // EventAggregator, RequestResponse, Commands
	  Wreqr.Channel = (function(Wreqr){
	    "use strict";
	  
	    var Channel = function(channelName) {
	      this.vent        = new Backbone.Wreqr.EventAggregator();
	      this.reqres      = new Backbone.Wreqr.RequestResponse();
	      this.commands    = new Backbone.Wreqr.Commands();
	      this.channelName = channelName;
	    };
	  
	    _.extend(Channel.prototype, {
	  
	      // Remove all handlers from the messaging systems of this channel
	      reset: function() {
	        this.vent.off();
	        this.vent.stopListening();
	        this.reqres.removeAllHandlers();
	        this.commands.removeAllHandlers();
	        return this;
	      },
	  
	      // Connect a hash of events; one for each messaging system
	      connectEvents: function(hash, context) {
	        this._connect('vent', hash, context);
	        return this;
	      },
	  
	      connectCommands: function(hash, context) {
	        this._connect('commands', hash, context);
	        return this;
	      },
	  
	      connectRequests: function(hash, context) {
	        this._connect('reqres', hash, context);
	        return this;
	      },
	  
	      // Attach the handlers to a given message system `type`
	      _connect: function(type, hash, context) {
	        if (!hash) {
	          return;
	        }
	  
	        context = context || this;
	        var method = (type === 'vent') ? 'on' : 'setHandler';
	  
	        _.each(hash, function(fn, eventName) {
	          this[type][method](eventName, _.bind(fn, context));
	        }, this);
	      }
	    });
	  
	  
	    return Channel;
	  })(Wreqr);
	  
	  // Wreqr.Radio
	  // --------------
	  //
	  // An object that lets you communicate with many channels.
	  Wreqr.radio = (function(Wreqr, _){
	    "use strict";
	  
	    var Radio = function() {
	      this._channels = {};
	      this.vent = {};
	      this.commands = {};
	      this.reqres = {};
	      this._proxyMethods();
	    };
	  
	    _.extend(Radio.prototype, {
	  
	      channel: function(channelName) {
	        if (!channelName) {
	          throw new Error('Channel must receive a name');
	        }
	  
	        return this._getChannel( channelName );
	      },
	  
	      _getChannel: function(channelName) {
	        var channel = this._channels[channelName];
	  
	        if(!channel) {
	          channel = new Wreqr.Channel(channelName);
	          this._channels[channelName] = channel;
	        }
	  
	        return channel;
	      },
	  
	      _proxyMethods: function() {
	        _.each(['vent', 'commands', 'reqres'], function(system) {
	          _.each( messageSystems[system], function(method) {
	            this[system][method] = proxyMethod(this, system, method);
	          }, this);
	        }, this);
	      }
	    });
	  
	  
	    var messageSystems = {
	      vent: [
	        'on',
	        'off',
	        'trigger',
	        'once',
	        'stopListening',
	        'listenTo',
	        'listenToOnce'
	      ],
	  
	      commands: [
	        'execute',
	        'setHandler',
	        'setHandlers',
	        'removeHandler',
	        'removeAllHandlers'
	      ],
	  
	      reqres: [
	        'request',
	        'setHandler',
	        'setHandlers',
	        'removeHandler',
	        'removeAllHandlers'
	      ]
	    };
	  
	    var proxyMethod = function(radio, system, method) {
	      return function(channelName) {
	        var messageSystem = radio._getChannel(channelName)[system];
	  
	        return messageSystem[method].apply(messageSystem, _.rest(arguments));
	      };
	    };
	  
	    return new Radio();
	  
	  })(Wreqr, _);
	  

	  return Backbone.Wreqr;

	}));


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Backbone.BabySitter
	// -------------------
	// v0.1.11
	//
	// Copyright (c)2016 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://github.com/marionettejs/backbone.babysitter

	(function(root, factory) {

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3), __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = function(Backbone, _) {
	      return factory(Backbone, _);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    var Backbone = require('backbone');
	    var _ = require('underscore');
	    module.exports = factory(Backbone, _);
	  } else {
	    factory(root.Backbone, root._);
	  }

	}(this, function(Backbone, _) {
	  'use strict';

	  var previousChildViewContainer = Backbone.ChildViewContainer;

	  // BabySitter.ChildViewContainer
	  // -----------------------------
	  //
	  // Provide a container to store, retrieve and
	  // shut down child views.
	  
	  Backbone.ChildViewContainer = (function (Backbone, _) {
	  
	    // Container Constructor
	    // ---------------------
	  
	    var Container = function(views){
	      this._views = {};
	      this._indexByModel = {};
	      this._indexByCustom = {};
	      this._updateLength();
	  
	      _.each(views, this.add, this);
	    };
	  
	    // Container Methods
	    // -----------------
	  
	    _.extend(Container.prototype, {
	  
	      // Add a view to this container. Stores the view
	      // by `cid` and makes it searchable by the model
	      // cid (and model itself). Optionally specify
	      // a custom key to store an retrieve the view.
	      add: function(view, customIndex){
	        var viewCid = view.cid;
	  
	        // store the view
	        this._views[viewCid] = view;
	  
	        // index it by model
	        if (view.model){
	          this._indexByModel[view.model.cid] = viewCid;
	        }
	  
	        // index by custom
	        if (customIndex){
	          this._indexByCustom[customIndex] = viewCid;
	        }
	  
	        this._updateLength();
	        return this;
	      },
	  
	      // Find a view by the model that was attached to
	      // it. Uses the model's `cid` to find it.
	      findByModel: function(model){
	        return this.findByModelCid(model.cid);
	      },
	  
	      // Find a view by the `cid` of the model that was attached to
	      // it. Uses the model's `cid` to find the view `cid` and
	      // retrieve the view using it.
	      findByModelCid: function(modelCid){
	        var viewCid = this._indexByModel[modelCid];
	        return this.findByCid(viewCid);
	      },
	  
	      // Find a view by a custom indexer.
	      findByCustom: function(index){
	        var viewCid = this._indexByCustom[index];
	        return this.findByCid(viewCid);
	      },
	  
	      // Find by index. This is not guaranteed to be a
	      // stable index.
	      findByIndex: function(index){
	        return _.values(this._views)[index];
	      },
	  
	      // retrieve a view by its `cid` directly
	      findByCid: function(cid){
	        return this._views[cid];
	      },
	  
	      // Remove a view
	      remove: function(view){
	        var viewCid = view.cid;
	  
	        // delete model index
	        if (view.model){
	          delete this._indexByModel[view.model.cid];
	        }
	  
	        // delete custom index
	        _.any(this._indexByCustom, function(cid, key) {
	          if (cid === viewCid) {
	            delete this._indexByCustom[key];
	            return true;
	          }
	        }, this);
	  
	        // remove the view from the container
	        delete this._views[viewCid];
	  
	        // update the length
	        this._updateLength();
	        return this;
	      },
	  
	      // Call a method on every view in the container,
	      // passing parameters to the call method one at a
	      // time, like `function.call`.
	      call: function(method){
	        this.apply(method, _.tail(arguments));
	      },
	  
	      // Apply a method on every view in the container,
	      // passing parameters to the call method one at a
	      // time, like `function.apply`.
	      apply: function(method, args){
	        _.each(this._views, function(view){
	          if (_.isFunction(view[method])){
	            view[method].apply(view, args || []);
	          }
	        });
	      },
	  
	      // Update the `.length` attribute on this container
	      _updateLength: function(){
	        this.length = _.size(this._views);
	      }
	    });
	  
	    // Borrowing this code from Backbone.Collection:
	    // http://backbonejs.org/docs/backbone.html#section-106
	    //
	    // Mix in methods from Underscore, for iteration, and other
	    // collection related features.
	    var methods = ['forEach', 'each', 'map', 'find', 'detect', 'filter',
	      'select', 'reject', 'every', 'all', 'some', 'any', 'include',
	      'contains', 'invoke', 'toArray', 'first', 'initial', 'rest',
	      'last', 'without', 'isEmpty', 'pluck', 'reduce'];
	  
	    _.each(methods, function(method) {
	      Container.prototype[method] = function() {
	        var views = _.values(this._views);
	        var args = [views].concat(_.toArray(arguments));
	        return _[method].apply(_, args);
	      };
	    });
	  
	    // return the public API
	    return Container;
	  })(Backbone, _);
	  

	  Backbone.ChildViewContainer.VERSION = '0.1.11';

	  Backbone.ChildViewContainer.noConflict = function () {
	    Backbone.ChildViewContainer = previousChildViewContainer;
	    return this;
	  };

	  return Backbone.ChildViewContainer;

	}));


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Backbone.Radio v1.0.4

	(function (global, factory) {
	   true ? module.exports = factory(__webpack_require__(4), __webpack_require__(3)) :
	  typeof define === 'function' && define.amd ? define(['underscore', 'backbone'], factory) :
	  (global.Backbone = global.Backbone || {}, global.Backbone.Radio = factory(global._,global.Backbone));
	}(this, function (_,Backbone) { 'use strict';

	  _ = 'default' in _ ? _['default'] : _;
	  Backbone = 'default' in Backbone ? Backbone['default'] : Backbone;

	  var babelHelpers = {};
	  babelHelpers.typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	    return typeof obj;
	  } : function (obj) {
	    return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj;
	  };
	  babelHelpers;

	  var previousRadio = Backbone.Radio;

	  var Radio = Backbone.Radio = {};

	  Radio.VERSION = '1.0.4';

	  // This allows you to run multiple instances of Radio on the same
	  // webapp. After loading the new version, call `noConflict()` to
	  // get a reference to it. At the same time the old version will be
	  // returned to Backbone.Radio.
	  Radio.noConflict = function () {
	    Backbone.Radio = previousRadio;
	    return this;
	  };

	  // Whether or not we're in DEBUG mode or not. DEBUG mode helps you
	  // get around the issues of lack of warnings when events are mis-typed.
	  Radio.DEBUG = false;

	  // Format debug text.
	  Radio._debugText = function (warning, eventName, channelName) {
	    return warning + (channelName ? ' on the ' + channelName + ' channel' : '') + ': "' + eventName + '"';
	  };

	  // This is the method that's called when an unregistered event was called.
	  // By default, it logs warning to the console. By overriding this you could
	  // make it throw an Error, for instance. This would make firing a nonexistent event
	  // have the same consequence as firing a nonexistent method on an Object.
	  Radio.debugLog = function (warning, eventName, channelName) {
	    if (Radio.DEBUG && console && console.warn) {
	      console.warn(Radio._debugText(warning, eventName, channelName));
	    }
	  };

	  var eventSplitter = /\s+/;

	  // An internal method used to handle Radio's method overloading for Requests.
	  // It's borrowed from Backbone.Events. It differs from Backbone's overload
	  // API (which is used in Backbone.Events) in that it doesn't support space-separated
	  // event names.
	  Radio._eventsApi = function (obj, action, name, rest) {
	    if (!name) {
	      return false;
	    }

	    var results = {};

	    // Handle event maps.
	    if ((typeof name === 'undefined' ? 'undefined' : babelHelpers.typeof(name)) === 'object') {
	      for (var key in name) {
	        var result = obj[action].apply(obj, [key, name[key]].concat(rest));
	        eventSplitter.test(key) ? _.extend(results, result) : results[key] = result;
	      }
	      return results;
	    }

	    // Handle space separated event names.
	    if (eventSplitter.test(name)) {
	      var names = name.split(eventSplitter);
	      for (var i = 0, l = names.length; i < l; i++) {
	        results[names[i]] = obj[action].apply(obj, [names[i]].concat(rest));
	      }
	      return results;
	    }

	    return false;
	  };

	  // An optimized way to execute callbacks.
	  Radio._callHandler = function (callback, context, args) {
	    var a1 = args[0],
	        a2 = args[1],
	        a3 = args[2];
	    switch (args.length) {
	      case 0:
	        return callback.call(context);
	      case 1:
	        return callback.call(context, a1);
	      case 2:
	        return callback.call(context, a1, a2);
	      case 3:
	        return callback.call(context, a1, a2, a3);
	      default:
	        return callback.apply(context, args);
	    }
	  };

	  // A helper used by `off` methods to the handler from the store
	  function removeHandler(store, name, callback, context) {
	    var event = store[name];
	    if ((!callback || callback === event.callback || callback === event.callback._callback) && (!context || context === event.context)) {
	      delete store[name];
	      return true;
	    }
	  }

	  function removeHandlers(store, name, callback, context) {
	    store || (store = {});
	    var names = name ? [name] : _.keys(store);
	    var matched = false;

	    for (var i = 0, length = names.length; i < length; i++) {
	      name = names[i];

	      // If there's no event by this name, log it and continue
	      // with the loop
	      if (!store[name]) {
	        continue;
	      }

	      if (removeHandler(store, name, callback, context)) {
	        matched = true;
	      }
	    }

	    return matched;
	  }

	  /*
	   * tune-in
	   * -------
	   * Get console logs of a channel's activity
	   *
	   */

	  var _logs = {};

	  // This is to produce an identical function in both tuneIn and tuneOut,
	  // so that Backbone.Events unregisters it.
	  function _partial(channelName) {
	    return _logs[channelName] || (_logs[channelName] = _.bind(Radio.log, Radio, channelName));
	  }

	  _.extend(Radio, {

	    // Log information about the channel and event
	    log: function log(channelName, eventName) {
	      if (typeof console === 'undefined') {
	        return;
	      }
	      var args = _.toArray(arguments).slice(2);
	      console.log('[' + channelName + '] "' + eventName + '"', args);
	    },

	    // Logs all events on this channel to the console. It sets an
	    // internal value on the channel telling it we're listening,
	    // then sets a listener on the Backbone.Events
	    tuneIn: function tuneIn(channelName) {
	      var channel = Radio.channel(channelName);
	      channel._tunedIn = true;
	      channel.on('all', _partial(channelName));
	      return this;
	    },

	    // Stop logging all of the activities on this channel to the console
	    tuneOut: function tuneOut(channelName) {
	      var channel = Radio.channel(channelName);
	      channel._tunedIn = false;
	      channel.off('all', _partial(channelName));
	      delete _logs[channelName];
	      return this;
	    }
	  });

	  /*
	   * Backbone.Radio.Requests
	   * -----------------------
	   * A messaging system for requesting data.
	   *
	   */

	  function makeCallback(callback) {
	    return _.isFunction(callback) ? callback : function () {
	      return callback;
	    };
	  }

	  Radio.Requests = {

	    // Make a request
	    request: function request(name) {
	      var args = _.toArray(arguments).slice(1);
	      var results = Radio._eventsApi(this, 'request', name, args);
	      if (results) {
	        return results;
	      }
	      var channelName = this.channelName;
	      var requests = this._requests;

	      // Check if we should log the request, and if so, do it
	      if (channelName && this._tunedIn) {
	        Radio.log.apply(this, [channelName, name].concat(args));
	      }

	      // If the request isn't handled, log it in DEBUG mode and exit
	      if (requests && (requests[name] || requests['default'])) {
	        var handler = requests[name] || requests['default'];
	        args = requests[name] ? args : arguments;
	        return Radio._callHandler(handler.callback, handler.context, args);
	      } else {
	        Radio.debugLog('An unhandled request was fired', name, channelName);
	      }
	    },

	    // Set up a handler for a request
	    reply: function reply(name, callback, context) {
	      if (Radio._eventsApi(this, 'reply', name, [callback, context])) {
	        return this;
	      }

	      this._requests || (this._requests = {});

	      if (this._requests[name]) {
	        Radio.debugLog('A request was overwritten', name, this.channelName);
	      }

	      this._requests[name] = {
	        callback: makeCallback(callback),
	        context: context || this
	      };

	      return this;
	    },

	    // Set up a handler that can only be requested once
	    replyOnce: function replyOnce(name, callback, context) {
	      if (Radio._eventsApi(this, 'replyOnce', name, [callback, context])) {
	        return this;
	      }

	      var self = this;

	      var once = _.once(function () {
	        self.stopReplying(name);
	        return makeCallback(callback).apply(this, arguments);
	      });

	      return this.reply(name, once, context);
	    },

	    // Remove handler(s)
	    stopReplying: function stopReplying(name, callback, context) {
	      if (Radio._eventsApi(this, 'stopReplying', name)) {
	        return this;
	      }

	      // Remove everything if there are no arguments passed
	      if (!name && !callback && !context) {
	        delete this._requests;
	      } else if (!removeHandlers(this._requests, name, callback, context)) {
	        Radio.debugLog('Attempted to remove the unregistered request', name, this.channelName);
	      }

	      return this;
	    }
	  };

	  /*
	   * Backbone.Radio.channel
	   * ----------------------
	   * Get a reference to a channel by name.
	   *
	   */

	  Radio._channels = {};

	  Radio.channel = function (channelName) {
	    if (!channelName) {
	      throw new Error('You must provide a name for the channel.');
	    }

	    if (Radio._channels[channelName]) {
	      return Radio._channels[channelName];
	    } else {
	      return Radio._channels[channelName] = new Radio.Channel(channelName);
	    }
	  };

	  /*
	   * Backbone.Radio.Channel
	   * ----------------------
	   * A Channel is an object that extends from Backbone.Events,
	   * and Radio.Requests.
	   *
	   */

	  Radio.Channel = function (channelName) {
	    this.channelName = channelName;
	  };

	  _.extend(Radio.Channel.prototype, Backbone.Events, Radio.Requests, {

	    // Remove all handlers from the messaging systems of this channel
	    reset: function reset() {
	      this.off();
	      this.stopListening();
	      this.stopReplying();
	      return this;
	    }
	  });

	  /*
	   * Top-level API
	   * -------------
	   * Supplies the 'top-level API' for working with Channels directly
	   * from Backbone.Radio.
	   *
	   */

	  var channel;
	  var args;
	  var systems = [Backbone.Events, Radio.Requests];
	  _.each(systems, function (system) {
	    _.each(system, function (method, methodName) {
	      Radio[methodName] = function (channelName) {
	        args = _.toArray(arguments).slice(1);
	        channel = this.channel(channelName);
	        return channel[methodName].apply(channel, args);
	      };
	    });
	  });

	  Radio.reset = function (channelName) {
	    var channels = !channelName ? this._channels : [this._channels[channelName]];
	    _.each(channels, function (channel) {
	      channel.reset();
	    });
	  };

	  return Radio;

	}));
	//# sourceMappingURL=./backbone.radio.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone = __webpack_require__(2);

	var Root = _backbone.LayoutView.extend({
		el: 'body'
	});

		exports.default = Root;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _backbone = __webpack_require__(2);

	var _tooltip = __webpack_require__(11);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _insert = __webpack_require__(18);

	var _insert2 = _interopRequireDefault(_insert);

	var _picker = __webpack_require__(26);

	var _picker2 = _interopRequireDefault(_picker);

	var _editor = __webpack_require__(35);

	var _editor2 = _interopRequireDefault(_editor);

	var _helper = __webpack_require__(13);

	var _helper2 = _interopRequireDefault(_helper);

	var _backbone2 = __webpack_require__(15);

	var _backbone3 = _interopRequireDefault(_backbone2);

	var _keycodes = __webpack_require__(16);

	var _keycodes2 = _interopRequireDefault(_keycodes);

	var _keyOverrides = __webpack_require__(36);

	var _keyOverrides2 = _interopRequireDefault(_keyOverrides);

	var _placeholders = __webpack_require__(37);

	var _placeholders2 = _interopRequireDefault(_placeholders);

	var _sections = __webpack_require__(38);

	var _sections2 = _interopRequireDefault(_sections);

	var _rangyCore = __webpack_require__(14);

	var _rangyCore2 = _interopRequireDefault(_rangyCore);

	var _rangySelection = __webpack_require__(39);

	var _rangySelection2 = _interopRequireDefault(_rangySelection);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Editor = _backbone.LayoutView.extend({

		template: _editor2.default,

		className: 'typely-container',

		regions: {
			tooltip: '.tooltip-region',
			insertMedia: '.insert-media-region'
		},

		ui: {
			title: '.post-title',
			subtitle: '.post-subtitle',
			content: '.post-content'
		},

		events: {
			'keydown @ui.content': 'handleKeydownOnContent',
			'keyup @ui.content': 'handleKeyupOnContent',
			'mouseup @ui.content': 'handleMouseupOnContent',
			'mouseenter .post-section': 'handleMouseenterOnSection',
			'paste .post-section': 'handlePaste'
		},

		// Events fired from childviews rendered inside the view's regions
		// NOTE: tooltip:* refers to selection tooltip whereas
		// media:tooltip:* refers to to the insert media tooltip
		childEvents: {
			'tooltip:click:out': 'clearTooltip',
			'tooltip:toggle:clicked': 'onChildTooltipToggleClicked',
			'media:tooltip:shown': 'clearTooltip',
			'inserted:media': 'onChildInsertedMedia',
			'request:media:input': 'onChildRequestMediaInput'
		},

		// state
		isSelectionSaved: false,
		ctrlDown: false,
		savedSel: null,

		quoteTooltipClass: 'quoteTooltip',
		listTooltipClass: 'listTooltip',

		// hash map for storing media view refs indexed by their section name
		// NOTE: not to be confused with the mediaPickerViews below: this is
		// a dictionary that stores the views related to all *inserted* media
		// sections that are part of the content
		mediaViews: {},

		// media picker views & constructors
		// NOTE: these are the views that allow the selection of the media
		// to be inserted into the content. We store both the constructors
		// (so we may create new instances) and the created instances (so
		// we may delete them when done). We need to store both, since the
		// media instances can't be inserted into a region, so we lose all
		// the region-related view management that is built in Marionette.
		mediaPickerViewConstructors: {
			video: _picker2.default,
			audio: null,
			slideshow: null
		},

		initialize: function initialize(options) {
			this.maxFileSize = this.getOption('maxFileSize');
			this.allowTrailingMedia = this.getOption('allowTrailingMedia');
		},

		onBeforeShow: function onBeforeShow() {
			// InsertMediaView is attached directly
			// NOTE: the InsertMediaView remains forever attached,
			// it just shows and repositions itself when asked to
			this.attachInsertMediaView();
		},

		// Selection Related
		// ==========================
		//
		removeMarkers: function removeMarkers() {
			_rangyCore2.default.removeMarkers(this.savedSel);
			(0, _jquery2.default)('.rangySelectionBoundary').remove();
			this.isSelectionSaved = false;
		},

		saveSelection: function saveSelection() {
			if (this.isSelectionSaved) {
				_rangyCore2.default.removeMarkers(this.savedSel);
			}
			this.isSelectionSaved = true;
			this.savedSel = _rangyCore2.default.saveSelection();
		},

		restoreSelection: function restoreSelection() {
			if (this.isSelectionSaved) {
				_rangyCore2.default.restoreSelection(this.savedSel);
				this.isSelectionSaved = false;
			}
		},

		// Media Related
		// ==========================
		//
		isMediaElement: function isMediaElement(element) {
			return (/^FIGURE$|^IMG$|^FIGCAPTION$/.test(element.nodeName) || (0, _jquery2.default)(element).hasClass('media-element') || (0, _jquery2.default)(element).parentsUntil('.typely-container', '.media-element').length > 0
			);
		},

		markImageForDelete: function markImageForDelete(img) {
			// // verify that img is saved
			// if ($(img).attr('data-saved')) {
			//
			// 	var suffix = /jp(e)?g/i.test($(img).attr('data-type')) ? '.jpg' :
			// 		(/png/i.test($(img).attr('data-type')) ? '.png' : '');
			//
			// 	var src = this.cdn_url + this.article_id + '_' + img.id + suffix;
			// 	this.deletedImages.push(src);
			// }
		},

		hideMediaOverlays: function hideMediaOverlays() {
			console.info('TODO: actually hide media overlays');
			// $(window).trigger('hideMediaOverlays.posting.EDITOR');
		},

		handleKeydownOnContent: function handleKeydownOnContent(e) {
			// this.hideMediaOverlays();
			this.overrideImportantKeys(e);
			this.detectShortcuts(e);
			this.properlyClearTooltip(e);
			this.detectListInput(e);
		},

		handleKeyupOnContent: function handleKeyupOnContent(e) {
			this.resetCtrl(e);
		},

		resetCtrl: function resetCtrl(e) {
			if (this.ctrlKey.indexOf(e.keyCode) !== -1) {
				this.ctrlDown = false;
			}
		},

		overrideImportantKeys: function overrideImportantKeys(e) {
			var parentEl = _helper2.default.getSelectionParentElement();
			var isTrailing = _helper2.default.carretAtEndOfElement(parentEl);
			var isLeading = _helper2.default.carretAtStartOfElement(parentEl);
			var keyName = this.keyIndex[e.keyCode];
			// override methods reside in KeyOverridesMixin
			this.triggerMethod('override:' + keyName, e, parentEl, isTrailing, isLeading);
		},

		detectListInput: function detectListInput(e) {

			// Only care for space & enter
			if (e.keyCode !== this.enterKey && e.keyCode !== this.spaceKey) {
				return true;
			}

			var el = _helper2.default.getSelectionParentElement();

			// enter was pressed from inside an empty list element
			if (el.nodeName === 'LI' && e.keyCode === this.enterKey && el.textContent.length === 0) {
				// prevent key-press default behaviour
				e.preventDefault();
				// we are inside the last <li> of the list
				if ((0, _jquery2.default)(el).next('li').length === 0) {
					// get list element
					var parent = el.parentNode;
					// remove current list item
					(0, _jquery2.default)(el).remove();
					// insert new paragraph after list section (execCommand behaves unexpectedly in Safari)
					this.createEmptySection(parent, true);
				}
				// we are in the middle of the list
				else {
						/**
	      * @TODO: split the list into two new lists seperated by <p> and give focus on <p>
	      */
					}
				return;
			}

			// enter/space was pressed at the begining of a section, after '1.','*','-' or '+'
			if (/^1.$|^\*$|^\-$|^\+$/.test(el.textContent)) {

				var $listEl = void 0,
				    $listParentEl = void 0;
				// prevent key-press default behaviour
				event.preventDefault();
				// store the name of the section (it will be deleted after execCommand)
				var name = (0, _jquery2.default)(el).attr('name');
				// ordered list
				if (/^1.$/.test(el.textContent)) {
					// delete user input '1.' and convert section to list
					document.execCommand('delete', false, null);
					document.execCommand('delete', false, null);
					document.execCommand('insertOrderedList', false, null);
				}
				// unordered list
				else {
						// delete user input '*', '-' and convert section to list
						document.execCommand('delete', false, null);
						document.execCommand('insertUnorderedList', false, null);
					}

				// Chrome/Safari place newly created lists inside parent (unexpected)
				$listEl = (0, _jquery2.default)(_helper2.default.getSelectionParentElement().parentNode);
				// Chrome/Safari also wrap list item contents inside <font> elements (only if starting with a list)
				if ($listEl[0].nodeName === 'LI') {
					$listEl.html($listEl.children().html());
					$listEl = $listEl.parent();
				}
				$listParentEl = $listEl.parent();
				if (!$listParentEl.hasClass('post-content')) {
					$listEl.insertBefore(el);
					(0, _jquery2.default)(el).remove();
				}
				// transfer saved name to newly created ol section
				$listEl.attr('name', name).addClass('post-section');
				_helper2.default.selectElementContents($listEl.children('li').last()[0]);
			}
		},

		onPaste: function onPaste() {
			this.clearTooltip();
		},

		onCopy: function onCopy() {
			// Do nothing
		},

		onCut: function onCut() {
			this.clearTooltip();
		},

		detectShortcuts: function detectShortcuts(e) {
			if (this.ctrlKey.indexOf(e.keyCode) !== -1) {
				this.ctrlDown = true; // remember ctrlDown
				return;
			}
			if (this.ctrlDown && e.keyCode === this.vKey) {
				this.triggerMethod('paste');
			}
			if (this.ctrlDown && e.keyCode === this.cKey) {
				this.triggerMethod('copy');
			}
			if (this.ctrlDown && e.keyCode === this.xKey) {
				this.triggerMethod('cut');
			}
		},

		// Media Picker Related
		// ==========================
		//
		onChildRequestMediaInput: function onChildRequestMediaInput(childView, type, hookEl) {
			this.showMediaPickerView(type, hookEl);
		},

		getMediaPickerConstructor: function getMediaPickerConstructor(type) {
			return this.mediaPickerViewConstructors[type];
		},

		showMediaPickerView: function showMediaPickerView(type, hookEl) {
			var _this = this;

			var MediaPicker = this.getMediaPickerConstructor(type);
			var mediaPickerView = new MediaPicker({
				hookEl: hookEl
			});
			mediaPickerView.render();
			// manually register a listener for 'inserted:media'
			// NOTE: we need this since mediaPickerViews are not
			// rendered in this view's regions, and thus their
			// events do not spontaneously propagate as childEvents
			mediaPickerView.on('inserted:media', function (args) {
				// emulate a 'child:inserted:media' invoking the handler
				_this.triggerMethod('child:inserted:media', mediaPickerView, args);
			});
			mediaPickerView.$el.insertAfter(hookEl);
		},

		// Tooltip Related
		// ==========================
		//
		isTooltipActive: function isTooltipActive() {
			return this.getRegion('tooltip').hasView();
		},

		getTooltipView: function getTooltipView() {
			return this.getRegion('tooltip').currentView;
		},

		clearTooltip: function clearTooltip() {
			if (this.isTooltipActive()) {
				this.getRegion('tooltip').empty();
				// leave selections intact, just remove markers
				this.removeMarkers();
			}
		},

		properlyClearTooltip: function properlyClearTooltip(e) {
			if (e.keyCode === this.backspaceKey && this.isTooltipActive()) {
				e.preventDefault();
				document.execCommand('delete', false, null);
				this.clearTooltip();
				return;
			}
			if (e.keyCode === this.deleteKey && this.isTooltipActive()) {
				e.preventDefault();
				document.execCommand('forwardDelete', false, null);
				this.clearTooltip();
				return;
			}

			this.clearTooltip();
		},

		showTooltip: function showTooltip() {
			var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

			var _ref$disableFormats = _ref.disableFormats;
			var disableFormats = _ref$disableFormats === undefined ? [] : _ref$disableFormats;


			var range = _helper2.default.getFirstRange();

			if (!range || range.toHtml().length === 0) {
				return false;
			}

			// before we show the tooltip we need to get all current selection formats
			// NOTE: based on values returned from 'getSelectionFormat' some of the tooltip
			// may be set to an 'active' state
			var selectionFormat = this.getSelectionFormat();

			this.saveSelection();

			var tooltipView = new _tooltip2.default({
				disableFormats: disableFormats,
				selectionFormat: selectionFormat
			});

			this.getRegion('tooltip').show(tooltipView);
		},

		getSelectionFormat: function getSelectionFormat() {

			var parentEl = _helper2.default.getSelectionParentElement();
			var startBoundaryEl = _helper2.default.getSelectionBoundaryElement(true);
			var endBoundaryEl = _helper2.default.getSelectionBoundaryElement(false);
			var parentTagName = parentEl.nodeName;
			var textWithTags = _rangyCore2.default.getSelection().getRangeAt(0).toHtml();
			var textPlain = _rangyCore2.default.getSelection().getRangeAt(0).toString();

			// console.info('parent: ' + parentTagName);
			// console.info('text with tags: ' + textWithTags);
			// console.info('text plain: ' + textPlain);

			var selectionFormat = [];

			// check for inline formating first
			if (document.queryCommandState('bold')) {
				console.info('inline formating: bold');
				selectionFormat.push('b');
			}
			if (document.queryCommandState('italic')) {
				console.info('inline formating: italic');
				selectionFormat.push('i');
			}
			// NOTE: document.queryCommandState('createLink') does not work
			// To detect links, we check both boundaries of selection and if at least one
			// of them is an <a> node, we mark the selection as formated with 'createLink'
			if (startBoundaryEl.nodeName === 'A' || endBoundaryEl.nodeName === 'A') {
				console.info('inline formating: anchor');
				selectionFormat.push('a');
			}

			// check for block formating
			if (/^H[123456]$|^BLOCKQUOTE$/.test(parentTagName)) {
				selectionFormat.push(parentTagName.toLowerCase());
			} else {
				console.info('block formating: ' + parentTagName);
				selectionFormat.push(parentTagName.toLowerCase());

				var ancestor = parentEl;

				while (!/^P$|^DIV$|^H[123456]$|^BLOCKQUOTE$/.test(ancestor.nodeName)) {
					ancestor = ancestor.parentNode;
					selectionFormat.push(ancestor.nodeName.toLowerCase());
					console.info('block formating: ' + ancestor.nodeName);
				}
			}

			return selectionFormat;
		},

		handleMouseupOnContent: function handleMouseupOnContent(e) {
			// in case the user is trying to drop a sortable element with mouseup
			if ((0, _jquery2.default)('.ui-sortable-placeholder').length > 0) {
				return true;
			}
			var parentEl = _helper2.default.getSelectionParentElement();
			// check if the selection lies inside the post-content
			if ((0, _jquery2.default)(parentEl).closest('.post-content').length === 0) {
				return false;
			}
			if (this.isMediaElement(parentEl)) {
				return false;
			}
			if (parentEl.nodeName === 'LI' || parentEl.parentNode.nodeName === 'LI') {
				this.showTooltip({
					disableFormats: ['h1', 'h2', 'BLOCKQUOTE']
				});
				return false;
			}
			if (/post-content/.test(parentEl.className)) {
				return false;
			}
			if (parentEl.textContent.length === 0) {
				return false;
			}
			if (parentEl.nodeName === 'BLOCKQUOTE') {
				this.showTooltip({
					disableFormats: ['h1', 'h2']
				});
				return false;
			}
			this.showTooltip();
			return false;
		},

		onChildTooltipToggleClicked: function onChildTooltipToggleClicked(tooltipView, toggle, formatType, isActive, url) {
			// no need to format anything just yet, just show url input
			if (formatType === 'a' && !isActive && !url) {
				// restore the selection (it has been lost on click)
				this.restoreSelection();
				this.saveSelection();
				// format selection with empty link because selection will be lost with focus
				document.execCommand('createLink', false, 'http://');
				// notify tooltipView to show the url input
				tooltipView.triggerMethod('show:url:input');
				return false;
			}

			this.formatSelection(toggle, formatType, isActive, url);
			return false;
		},

		formatSelection: function formatSelection(toggle, type, active, url) {
			var _this2 = this;

			// Get ref to tooltipView
			var tooltipView = this.getTooltipView();

			// Hide all media-related overlays
			this.hideMediaOverlays();

			// restore previously saved selections
			this.restoreSelection();
			this.saveSelection();

			if (type === 'strong') {
				document.execCommand('bold', false, null);
				if (!active) {
					toggle.addClass('active');
				} else {
					toggle.removeClass('active');
				}
			}

			if (type === 'em') {
				document.execCommand('italic', false, null);
				if (!active) {
					toggle.addClass('active');
				} else {
					toggle.removeClass('active');
				}
			}

			if (type === 'h1') {
				// save element name attribute before formating (for chrome/safari)
				var parent = (0, _jquery2.default)(_helper2.default.getSelectionParentElement());
				var elementName = parent.attr('name');

				if (!active) {
					document.execCommand('formatBlock', false, 'h1');
					toggle.addClass('active');
					tooltipView.triggerMethod('deactivate:toggle', 'h2');
				} else {
					document.execCommand('formatBlock', false, 'p');
					toggle.removeClass('active');
				}

				// restore element name attribute after formating (for chrome/safari)
				parent = (0, _jquery2.default)(_helper2.default.getSelectionParentElement());
				parent.attr('name', elementName);

				parent.addClass('post-section'); // also restore class (again for chrome/safari)
				// chrome/safari deletes selection markers with execComman, so we save again
				this.saveSelection();
			}

			if (type === 'h2') {
				// save element name attribute before formating (for chrome/safari)
				var _parent = (0, _jquery2.default)(_helper2.default.getSelectionParentElement());
				var _elementName = _parent.attr('name');

				if (!active) {
					document.execCommand('formatBlock', false, 'h2');
					toggle.addClass('active');
					tooltipView.triggerMethod('deactivate:toggle', 'h1');
				} else {
					document.execCommand('formatBlock', false, 'p');
					toggle.removeClass('active');
				}

				// restore element name attribute after formating (for chrome/safari)
				_parent = (0, _jquery2.default)(_helper2.default.getSelectionParentElement());
				_parent.attr('name', _elementName);
				_parent.addClass('post-section'); // also restore class (again for chrome/safari)
				// chrome/safari deletes selection markers with execCommand, so we save again
				this.saveSelection();
			}

			if (type === 'blockquote') {

				// formatBlock behaves differently in firefox and chrome/safari:
				// firefox: wraps current element in 'BLOCKQUOTE' (unexpected)
				// chrome/safari: converts current element to 'BLOCKQUOTE' (expected) &
				//                stops formating at first inline element (unexpected)
				// e.g. if we format a selection that has an inline common ancestor (inside a <b> for example)

				// search for first heading, paragraph, div or blockquote parent
				var parentEl = _helper2.default.getSelectionParentElement();
				while (!/^P$|^DIV$|^H[123456]$|^BLOCKQUOTE$/.test(parentEl.nodeName)) {
					parentEl = parentEl.parentNode;
				}
				// now we found it, we select it all
				_helper2.default.selectElementContents(parentEl);

				// parent name
				var _elementName2 = (0, _jquery2.default)(parentEl).attr('name');

				if (!active) {
					// call execCommand on the selection we created above
					document.execCommand('formatBlock', false, 'blockquote');

					// find the 'BLOCKQUOTE' element we just created (may or may not be direct ancestor)
					var blockquoteEl = _helper2.default.getSelectionParentElement();
					var hasBlockChildren = false;
					while (blockquoteEl.nodeName !== 'BLOCKQUOTE') {
						// for firefox
						hasBlockChildren = true;
						blockquoteEl = blockquoteEl.parentNode;
					}

					// transfer original section name & class to quote
					var $blockquote = (0, _jquery2.default)(blockquoteEl).attr('name', _elementName2).attr('contentEditable', true).addClass('post-section');

					// remove possible block child (for firefox)
					if (hasBlockChildren) {
						$blockquote.html($blockquote.children().html());
					}

					// update section info
					this.updateSections();
					// clear the tooltip
					this.clearTooltip();
				} else {
					(function () {
						var $blockquote = (0, _jquery2.default)(_helper2.default.getSelectionParentElement());
						// clear tooltip
						_this2.clearTooltip();
						// prepare new <p> to replace the blockquote with
						var $p = (0, _jquery2.default)('<p></p>').html($blockquote.html());
						// transfer attributes from blockquote to p
						var attributes = $blockquote.prop('attributes');
						_jquery2.default.each(attributes, function () {
							$p.attr(this.name, this.value);
						});
						// insert <p> after blockquote & remove blockquote
						$blockquote.after($p).remove();
						// // add post-section class to <p>
						// $p.addClass('post-section').removeAttr('contentEditable');
						// // select <p> contents
						// helper.selectElementContents($p[0]);
						// // show tooltip again
						// this.showTooltip();
						// force the counting of total sections & data length
						_this2.updateSections();
						// set quote toggle as inactive
						toggle.removeClass('active');
					})();
				}
			}

			if (type === 'a') {
				if (!active) {
					document.execCommand('unlink', false, null);
					document.execCommand('createLink', false, url);
					(0, _jquery2.default)('a', this.ui.content).attr('target', '_blank');
					tooltipView.triggerMethod('hide:url:input');
					toggle.addClass('active');
				} else {
					document.execCommand('unlink', false, null);
					toggle.removeClass('active');
				}
			}

			// selection dimensions may have changed
			tooltipView.triggerMethod('update:position');
		},

		isLast: function isLast(sectionEl) {
			var el = sectionEl instanceof _jquery2.default ? sectionEl : (0, _jquery2.default)(sectionEl);
			return el.next(':not(.non-section)').length === 0;
		},

		handleMouseenterOnSection: function handleMouseenterOnSection(e) {
			var hookEl = (0, _jquery2.default)(e.currentTarget);
			if (this.isLast(hookEl) && !this.allowTrailingMedia) {
				return;
			}
			this.showInsertView(hookEl);
		},

		attachInsertMediaView: function attachInsertMediaView() {
			this.insertMediaView = new _insert2.default({
				contentEl: this.ui.content,
				maxFileSize: this.maxFileSize
			});
			this.getRegion('insertMedia').show(this.insertMediaView);
		},

		showInsertView: function showInsertView(hookEl) {
			this.insertMediaView.triggerMethod('show:after:hook', hookEl);
		},

		onChildInsertedMedia: function onChildInsertedMedia(childView, _ref2) {
			var mediaView = _ref2.mediaView;
			var hookEl = _ref2.hookEl;

			console.log('onChildInsertedMedia', mediaView, hookEl);
			this.storeMediaView(mediaView);
			this.updateSections();
			if (this.isLast(mediaView.$el)) {
				this.createEmptySection(mediaView.$el, false);
			}
		},

		storeMediaView: function storeMediaView(view) {
			this.mediaViews[view.name] = view;
			console.log(this.mediaViews);
		},

		destroyMediaView: function destroyMediaView(name) {
			this.mediaViews[name].destroy();
			delete this.mediaViews[name];
			this.insertMediaView.triggerMethod('hide');
			console.log(this.mediaViews);
		},

		handlePaste: function handlePaste(e) {

			var container = e.target;
			// chrome enters <br> tags
			while (container.nodeName === 'BR') {
				container = container.parentNode;
			}

			// capture the content to be pasted as plain text
			var data = e.originalEvent.clipboardData.getData('Text');

			// console.log('paste happened');
			// console.log('event: ', e);
			// console.log('data: ', data);
			// console.log('container: ', container);

			// save caret position before paste
			this.saveSelection();

			// replace existing text with new, which contains all pasted content
			_helper2.default.deleteSelection();
			var pos = _helper2.default.getCaretCharacterOffsetWithin(container, true);
			var content = (0, _jquery2.default)(container).html();
			var newContent = content.substr(0, pos) + data + content.substr(pos);

			// console.log('pos: ', pos);
			// console.log('new content: ', newContent);

			(0, _jquery2.default)(container).html(newContent);

			// restore caret position after paste
			this.restoreSelection();

			// prevent paste default behavior & bubbling
			e.preventDefault();
			e.stopPropagation();
		}

	});

	_backbone3.default.mixin(Editor, _keycodes2.default, _keyOverrides2.default, _placeholders2.default, _sections2.default);

	exports.default = Editor;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone = __webpack_require__(2);

	var _tooltip = __webpack_require__(12);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _underscore = __webpack_require__(4);

	var _underscore2 = _interopRequireDefault(_underscore);

	var _helper = __webpack_require__(13);

	var _helper2 = _interopRequireDefault(_helper);

	var _backbone2 = __webpack_require__(15);

	var _backbone3 = _interopRequireDefault(_backbone2);

	var _keycodes = __webpack_require__(16);

	var _keycodes2 = _interopRequireDefault(_keycodes);

	var _clickout = __webpack_require__(17);

	var _clickout2 = _interopRequireDefault(_clickout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Tooltip = _backbone.ItemView.extend({

		template: _tooltip2.default,

		ui: {
			toggleList: '.toggle-list',
			toggle: '[data-format]',
			urlInput: '.url-input',
			urlInputField: '.url-input .input-field',
			urlInputClose: '.url-input .close-button'
		},

		events: {
			'click @ui.toggle': 'handleClickOnToggle',
			'keydown @ui.urlInputField': 'handleKeydownOnUrlInput',
			'click @ui.urlInputClose': 'submitUrl'
		},

		className: function className() {
			return 'typely-tooltip ' + (this.getOption('customClass') ? this.getOption('customClass') : '');
		},

		templateHelpers: function templateHelpers() {
			return {
				selectionFormat: this.getOption('selectionFormat') || []
			};
		},

		onRender: function onRender() {
			this.handleDisabledFormats();
		},

		onAttach: function onAttach() {
			this.getOffsetParent();
			this.setPosition();
			this.setWidth();
			this.repositionOnWindowResize();
		},

		onBeforeDestroy: function onBeforeDestroy() {
			$(window).off('.' + this.cid);
		},

		onClickOut: function onClickOut() {
			console.log('click out');
			this.triggerMethod('tooltip:click:out');
		},

		onUpdatePosition: function onUpdatePosition() {
			this.setPosition();
		},

		onShowUrlInput: function onShowUrlInput() {
			this.ui.toggleList.addClass('hidden');
			this.ui.urlInput.removeClass('hidden');
			this.ui.urlInputField.focus();
		},

		onHideUrlInput: function onHideUrlInput() {
			this.ui.toggleList.removeClass('hidden');
			this.ui.urlInput.addClass('hidden');
		},

		onActivateToggle: function onActivateToggle(format) {
			this.ui.toggle.filter('[data-format=' + format + ']').addClass('active');
		},

		onDeactivateToggle: function onDeactivateToggle(format) {
			this.ui.toggle.filter('[data-format=' + format + ']').removeClass('active');
		},

		getOffsetParent: function getOffsetParent() {
			this.offsetParent = this.$el.offsetParent();
		},

		setPosition: function setPosition() {
			try {
				// get selection coordinates
				var selCoordinates = _helper2.default.calculateSelectionCoordinates();
				var selX = (selCoordinates.start.x + selCoordinates.end.x) / 2;
				var selY = selCoordinates.start.y - 20;

				// get tooltip box dimensions
				var w = this.$el.outerWidth();
				var h = this.$el.outerHeight();

				var offsetPosition = this.offsetParent.position();

				this.$el.css({
					left: selX - offsetPosition.left - w / 2 + 'px',
					top: selY - offsetPosition.top - 40 + 'px'
				});
			} catch (e) {
				console.info('Tooltip: unable to set position');
			}
		},

		setWidth: function setWidth() {
			this.$el.css({
				width: this.$el.outerWidth()
			});
		},

		repositionOnWindowResize: function repositionOnWindowResize() {
			var _this = this;

			$(window).on('resize.' + this.cid, _underscore2.default.throttle(function () {
				_this.setPosition();
			}, 250));
		},

		handleClickOnToggle: function handleClickOnToggle(e) {
			var toggle = $(e.currentTarget);
			var formatType = toggle.attr('data-format');
			var isActive = toggle.hasClass('active');
			this.triggerMethod('tooltip:toggle:clicked', toggle, formatType, isActive);
		},

		handleKeydownOnUrlInput: function handleKeydownOnUrlInput(e) {
			if (e.keyCode === this.enterKey) {
				e.preventDefault();
				this.submitUrl();
			}
		},

		submitUrl: function submitUrl() {
			var url = this.ui.urlInputField.val();
			var toggle = this.ui.toggle.filter('[data-toggle="a"]');
			this.triggerMethod('tooltip:toggle:clicked', toggle, 'a', false, url);
		},

		handleDisabledFormats: function handleDisabledFormats() {
			var _this2 = this;

			_underscore2.default.each(this.getOption('disableFormats'), function (format) {
				_this2.ui.toggle.filter('[data-format=' + format + ']').addClass('hidden');
			});
		}
	});

	_backbone3.default.mixin(Tooltip, _keycodes2.default, _clickout2.default);

	exports.default = Tooltip;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<ul class="tooltip-list toggle-list">\n\n	<li class="toggle ' +
	((__t = ( selectionFormat.indexOf('b') !== -1 ? 'active' : '' )) == null ? '' : __t) +
	'"\n		data-format="strong">\n		<i class="fa fa-bold"></i>\n	</li>\n\n	<li class="toggle ' +
	((__t = ( selectionFormat.indexOf('i') !== -1 ? 'active' : '' )) == null ? '' : __t) +
	'"\n		data-format="em">\n		<i class="fa fa-italic"></i>\n	</li>\n\n	<li class="toggle ' +
	((__t = ( selectionFormat.indexOf('h1') !== -1 ? 'active' : '' )) == null ? '' : __t) +
	'"\n		data-format="h1">\n		<i class="fa fa-header"></i><sub>1</sub>\n	</li>\n\n	<li class="toggle ' +
	((__t = ( selectionFormat.indexOf('h2') !== -1 ? 'active' : '' )) == null ? '' : __t) +
	'"\n		data-format="h2">\n		<i class="fa fa-header"></i><sub>2</sub>\n	</li>\n\n	<li class="toggle  ' +
	((__t = ( selectionFormat.indexOf('blockquote') !== -1 ? 'active' : '' )) == null ? '' : __t) +
	'"\n		data-format="blockquote">\n		<i class="fa fa-quote-right"></i>\n	</li>\n\n	<li class="toggle ' +
	((__t = ( selectionFormat.indexOf('a') !== -1 ? 'active' : '' )) == null ? '' : __t) +
	'"\n		data-format="a">\n		<i class="fa fa-link"></i>\n	</li>\n</ul>\n\n<div class="url-input hidden">\n	<input class="input-field" placeholder="Insert Link">\n	<div class="close-button">Ok!</div>\n</div>\n\n<div class="tooltip-arrow">\n	<span class="icon"></span>\n</div>\n';

	}
	return __p
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _rangyCore = __webpack_require__(14);

	var _rangyCore2 = _interopRequireDefault(_rangyCore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var helper = {};

	/**
	 *	Gets element by id
	 */
	helper.gEBI = function (id) {
	    return document.getElementById(id);
	};

	/**
	 *	Returns cursor position within given element
	 *	NOTE: can count special html characters (inside tags) as well
	 */
	helper.getCaretCharacterOffsetWithin = function (element, countHtml) {

	    var caretOffset = 0;

	    var range = _rangyCore2.default.getSelection().getRangeAt(0);
	    var preCaretRange = range.cloneRange();
	    preCaretRange.selectNodeContents(element);
	    preCaretRange.setEnd(range.endContainer, range.endOffset);

	    if (countHtml) {
	        caretOffset = preCaretRange.toHtml().length;
	    } else {
	        caretOffset = preCaretRange.toString().length;
	    }

	    return caretOffset;
	};

	/**
	 *	Checks if cursor is positioned at end of given element
	 */
	helper.carretAtEndOfElement = function (element) {

	    return helper.getCaretCharacterOffsetWithin(element, true) === element.innerHTML.length;
	};

	/**
	 *	Checks if cursor is positioned at start of given element
	 */
	helper.carretAtStartOfElement = function (element) {

	    return helper.getCaretCharacterOffsetWithin(element, false) === 0;
	};

	/**
	 *	Returns current selection coordinates
	 *	NOTE: the coordinates belong to its left and right boundaries
	 */
	helper.calculateSelectionCoordinates = function () {

	    var savedSel = _rangyCore2.default.saveSelection();

	    var startMarkerEl = document.getElementById(savedSel.rangeInfos[0].startMarkerId);
	    var endMarkerEl = document.getElementById(savedSel.rangeInfos[0].endMarkerId);

	    startMarkerEl.style.display = 'inline';
	    endMarkerEl.style.display = 'inline';

	    var startCoords = (0, _jquery2.default)(startMarkerEl).offset();
	    var endCoords = (0, _jquery2.default)(endMarkerEl).offset();

	    _rangyCore2.default.removeMarkers(savedSel);

	    return { start: { x: startCoords.left, y: startCoords.top }, end: { x: endCoords.left, y: endCoords.top } };
	};

	/**
	 *	Moves cursor to end of given contentEditable element
	 */
	helper.setEndOfContenteditable = function (contentEditableElement) {
	    var range, selection;

	    range = _rangyCore2.default.createRange(); //Create a range (a range is like the selection but invisible)
	    range.selectNodeContents(contentEditableElement); //Select the entire contents of the element with the range
	    range.collapse(false); //collapse the range to the end point. false means collapse to end rather than the start
	    selection = _rangyCore2.default.getSelection(); //get the selection object (allows you to change selection)
	    selection.removeAllRanges(); //remove any selections already made
	    selection.addRange(range); //make the range you have just created the visible selection
	};

	/**
	 *	Rangy helper functions
	 */
	helper.getSelectionText = function () {
	    return _rangyCore2.default.getSelection().getRangeAt(0);
	};

	helper.getSelectionHtml = function () {
	    return _rangyCore2.default.getSelection().toHtml();
	};

	helper.inspectSelection = function () {
	    console.info(_rangyCore2.default.getSelection().inspect());
	};

	helper.deleteSelection = function () {
	    _rangyCore2.default.getSelection().deleteFromDocument();
	};

	helper.collapseSelectionToStart = function () {
	    _rangyCore2.default.getSelection().collapseToStart();
	};

	helper.collapseSelectionToEnd = function () {
	    _rangyCore2.default.getSelection().collapseToEnd();
	};

	var getFirstRange = helper.getFirstRange = function () {
	    var sel = _rangyCore2.default.getSelection();
	    return sel.rangeCount ? sel.getRangeAt(0) : null;
	};

	helper.showContent = function (frag) {
	    var displayEl = helper.gEBI('selectioncontent');
	    var codeEl = helper.gEBI('code');
	    while (displayEl.firstChild) {
	        displayEl.removeChild(displayEl.firstChild);
	    }
	    if (frag) {
	        displayEl.appendChild(frag);
	    }
	    codeEl.value = displayEl.innerHTML;
	};

	helper.inspectRange = function () {
	    var range = getFirstRange();
	    if (range) {
	        alert(range.inspect());
	    }
	};

	helper.reportRangeHtml = function () {
	    var range = getFirstRange();
	    if (range) {
	        alert(range.toHtml());
	    }
	};

	helper.extractRange = function () {
	    var range = getFirstRange();
	    if (range) {
	        helper.showContent(range.extractContents());
	    }
	};

	helper.cloneRange = function () {
	    var range = getFirstRange();
	    if (range) {
	        helper.showContent(range.cloneContents());
	    }
	};

	helper.deleteRange = function () {
	    var range = getFirstRange();
	    if (range) {
	        range.deleteContents();
	    }
	};

	helper.surroundRangeWith = function (tagName) {
	    var range = getFirstRange();
	    if (range) {
	        var el = document.createElement(tagName);
	        try {
	            range.surroundContents(el);
	        } catch (ex) {
	            if ((ex instanceof _rangyCore2.default.RangeException || Object.prototype.toString.call(ex) === '[object RangeException]') && ex.code === 1) {
	                alert('Unable to surround range because range partially selects a non-text node. See DOM Level 2 Range spec for more information.\n\n' + ex);
	            } else {
	                alert('Unexpected errror: ' + ex);
	            }
	        }
	    }
	};

	helper.insertNodeAtRange = function () {
	    var range = getFirstRange();
	    if (range) {
	        var el = document.createElement('span');
	        el.style.backgroundColor = 'lightblue';
	        el.style.color = 'red';
	        el.style.fontWeight = 'bold';
	        el.appendChild(document.createTextNode('**INSERTED NODE**'));
	        range.insertNode(el);
	        _rangyCore2.default.getSelection().setSingleRange(range);
	    }
	};

	helper.getSelectionParentElement = function () {
	    var range = _rangyCore2.default.getSelection().getRangeAt(0);
	    var parentEl = range.commonAncestorContainer;
	    if (parentEl.nodeType !== 1) {
	        parentEl = parentEl.parentNode;
	    }
	    return parentEl;
	};

	helper.getSelectionBoundaryElement = function (isStart) {
	    var range, sel, container;
	    if (document.selection) {
	        range = document.selection.createRange();
	        range.collapse(isStart);
	        return range.parentElement();
	    } else {
	        sel = window.getSelection();
	        if (sel.getRangeAt) {
	            if (sel.rangeCount > 0) {
	                range = sel.getRangeAt(0);
	            }
	        } else {
	            // Old WebKit
	            range = document.createRange();
	            range.setStart(sel.anchorNode, sel.anchorOffset);
	            range.setEnd(sel.focusNode, sel.focusOffset);

	            // Handle the case when the selection was selected backwards (from the end to the start in the document)
	            if (range.collapsed !== sel.isCollapsed) {
	                range.setStart(sel.focusNode, sel.focusOffset);
	                range.setEnd(sel.anchorNode, sel.anchorOffset);
	            }
	        }

	        if (range) {
	            container = range[isStart ? 'startContainer' : 'endContainer'];

	            // Check if the container is a text node and return its parent if so
	            return container.nodeType === 3 ? container.parentNode : container;
	        }
	    }
	};

	helper.selectElementContents = function (el) {
	    var range = document.createRange();
	    range.selectNodeContents(el);
	    var sel = window.getSelection();
	    sel.removeAllRanges();
	    sel.addRange(range);
	};

		exports.default = helper;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Rangy, a cross-browser JavaScript range and selection library
	 * https://github.com/timdown/rangy
	 *
	 * Copyright 2015, Tim Down
	 * Licensed under the MIT license.
	 * Version: 1.3.1-dev
	 * Build date: 20 May 2015
	 */

	(function(factory, root) {
	    if (true) {
	        // AMD. Register as an anonymous module.
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module != "undefined" && typeof exports == "object") {
	        // Node/CommonJS style
	        module.exports = factory();
	    } else {
	        // No AMD or CommonJS support so we place Rangy in (probably) the global variable
	        root.rangy = factory();
	    }
	})(function() {

	    var OBJECT = "object", FUNCTION = "function", UNDEFINED = "undefined";

	    // Minimal set of properties required for DOM Level 2 Range compliance. Comparison constants such as START_TO_START
	    // are omitted because ranges in KHTML do not have them but otherwise work perfectly well. See issue 113.
	    var domRangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
	        "commonAncestorContainer"];

	    // Minimal set of methods required for DOM Level 2 Range compliance
	    var domRangeMethods = ["setStart", "setStartBefore", "setStartAfter", "setEnd", "setEndBefore",
	        "setEndAfter", "collapse", "selectNode", "selectNodeContents", "compareBoundaryPoints", "deleteContents",
	        "extractContents", "cloneContents", "insertNode", "surroundContents", "cloneRange", "toString", "detach"];

	    var textRangeProperties = ["boundingHeight", "boundingLeft", "boundingTop", "boundingWidth", "htmlText", "text"];

	    // Subset of TextRange's full set of methods that we're interested in
	    var textRangeMethods = ["collapse", "compareEndPoints", "duplicate", "moveToElementText", "parentElement", "select",
	        "setEndPoint", "getBoundingClientRect"];

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Trio of functions taken from Peter Michaux's article:
	    // http://peter.michaux.ca/articles/feature-detection-state-of-the-art-browser-scripting
	    function isHostMethod(o, p) {
	        var t = typeof o[p];
	        return t == FUNCTION || (!!(t == OBJECT && o[p])) || t == "unknown";
	    }

	    function isHostObject(o, p) {
	        return !!(typeof o[p] == OBJECT && o[p]);
	    }

	    function isHostProperty(o, p) {
	        return typeof o[p] != UNDEFINED;
	    }

	    // Creates a convenience function to save verbose repeated calls to tests functions
	    function createMultiplePropertyTest(testFunc) {
	        return function(o, props) {
	            var i = props.length;
	            while (i--) {
	                if (!testFunc(o, props[i])) {
	                    return false;
	                }
	            }
	            return true;
	        };
	    }

	    // Next trio of functions are a convenience to save verbose repeated calls to previous two functions
	    var areHostMethods = createMultiplePropertyTest(isHostMethod);
	    var areHostObjects = createMultiplePropertyTest(isHostObject);
	    var areHostProperties = createMultiplePropertyTest(isHostProperty);

	    function isTextRange(range) {
	        return range && areHostMethods(range, textRangeMethods) && areHostProperties(range, textRangeProperties);
	    }

	    function getBody(doc) {
	        return isHostObject(doc, "body") ? doc.body : doc.getElementsByTagName("body")[0];
	    }

	    var forEach = [].forEach ?
	        function(arr, func) {
	            arr.forEach(func);
	        } :
	        function(arr, func) {
	            for (var i = 0, len = arr.length; i < len; ++i) {
	                func(arr[i], i);
	            }
	        };

	    var modules = {};

	    var isBrowser = (typeof window != UNDEFINED && typeof document != UNDEFINED);

	    var util = {
	        isHostMethod: isHostMethod,
	        isHostObject: isHostObject,
	        isHostProperty: isHostProperty,
	        areHostMethods: areHostMethods,
	        areHostObjects: areHostObjects,
	        areHostProperties: areHostProperties,
	        isTextRange: isTextRange,
	        getBody: getBody,
	        forEach: forEach
	    };

	    var api = {
	        version: "1.3.1-dev",
	        initialized: false,
	        isBrowser: isBrowser,
	        supported: true,
	        util: util,
	        features: {},
	        modules: modules,
	        config: {
	            alertOnFail: false,
	            alertOnWarn: false,
	            preferTextRange: false,
	            autoInitialize: (typeof rangyAutoInitialize == UNDEFINED) ? true : rangyAutoInitialize
	        }
	    };

	    function consoleLog(msg) {
	        if (typeof console != UNDEFINED && isHostMethod(console, "log")) {
	            console.log(msg);
	        }
	    }

	    function alertOrLog(msg, shouldAlert) {
	        if (isBrowser && shouldAlert) {
	            alert(msg);
	        } else  {
	            consoleLog(msg);
	        }
	    }

	    function fail(reason) {
	        api.initialized = true;
	        api.supported = false;
	        alertOrLog("Rangy is not supported in this environment. Reason: " + reason, api.config.alertOnFail);
	    }

	    api.fail = fail;

	    function warn(msg) {
	        alertOrLog("Rangy warning: " + msg, api.config.alertOnWarn);
	    }

	    api.warn = warn;

	    // Add utility extend() method
	    var extend;
	    if ({}.hasOwnProperty) {
	        util.extend = extend = function(obj, props, deep) {
	            var o, p;
	            for (var i in props) {
	                if (props.hasOwnProperty(i)) {
	                    o = obj[i];
	                    p = props[i];
	                    if (deep && o !== null && typeof o == "object" && p !== null && typeof p == "object") {
	                        extend(o, p, true);
	                    }
	                    obj[i] = p;
	                }
	            }
	            // Special case for toString, which does not show up in for...in loops in IE <= 8
	            if (props.hasOwnProperty("toString")) {
	                obj.toString = props.toString;
	            }
	            return obj;
	        };

	        util.createOptions = function(optionsParam, defaults) {
	            var options = {};
	            extend(options, defaults);
	            if (optionsParam) {
	                extend(options, optionsParam);
	            }
	            return options;
	        };
	    } else {
	        fail("hasOwnProperty not supported");
	    }

	    // Test whether we're in a browser and bail out if not
	    if (!isBrowser) {
	        fail("Rangy can only run in a browser");
	    }

	    // Test whether Array.prototype.slice can be relied on for NodeLists and use an alternative toArray() if not
	    (function() {
	        var toArray;

	        if (isBrowser) {
	            var el = document.createElement("div");
	            el.appendChild(document.createElement("span"));
	            var slice = [].slice;
	            try {
	                if (slice.call(el.childNodes, 0)[0].nodeType == 1) {
	                    toArray = function(arrayLike) {
	                        return slice.call(arrayLike, 0);
	                    };
	                }
	            } catch (e) {}
	        }

	        if (!toArray) {
	            toArray = function(arrayLike) {
	                var arr = [];
	                for (var i = 0, len = arrayLike.length; i < len; ++i) {
	                    arr[i] = arrayLike[i];
	                }
	                return arr;
	            };
	        }

	        util.toArray = toArray;
	    })();

	    // Very simple event handler wrapper function that doesn't attempt to solve issues such as "this" handling or
	    // normalization of event properties
	    var addListener;
	    if (isBrowser) {
	        if (isHostMethod(document, "addEventListener")) {
	            addListener = function(obj, eventType, listener) {
	                obj.addEventListener(eventType, listener, false);
	            };
	        } else if (isHostMethod(document, "attachEvent")) {
	            addListener = function(obj, eventType, listener) {
	                obj.attachEvent("on" + eventType, listener);
	            };
	        } else {
	            fail("Document does not have required addEventListener or attachEvent method");
	        }

	        util.addListener = addListener;
	    }

	    var initListeners = [];

	    function getErrorDesc(ex) {
	        return ex.message || ex.description || String(ex);
	    }

	    // Initialization
	    function init() {
	        if (!isBrowser || api.initialized) {
	            return;
	        }
	        var testRange;
	        var implementsDomRange = false, implementsTextRange = false;

	        // First, perform basic feature tests

	        if (isHostMethod(document, "createRange")) {
	            testRange = document.createRange();
	            if (areHostMethods(testRange, domRangeMethods) && areHostProperties(testRange, domRangeProperties)) {
	                implementsDomRange = true;
	            }
	        }

	        var body = getBody(document);
	        if (!body || body.nodeName.toLowerCase() != "body") {
	            fail("No body element found");
	            return;
	        }

	        if (body && isHostMethod(body, "createTextRange")) {
	            testRange = body.createTextRange();
	            if (isTextRange(testRange)) {
	                implementsTextRange = true;
	            }
	        }

	        if (!implementsDomRange && !implementsTextRange) {
	            fail("Neither Range nor TextRange are available");
	            return;
	        }

	        api.initialized = true;
	        api.features = {
	            implementsDomRange: implementsDomRange,
	            implementsTextRange: implementsTextRange
	        };

	        // Initialize modules
	        var module, errorMessage;
	        for (var moduleName in modules) {
	            if ( (module = modules[moduleName]) instanceof Module ) {
	                module.init(module, api);
	            }
	        }

	        // Call init listeners
	        for (var i = 0, len = initListeners.length; i < len; ++i) {
	            try {
	                initListeners[i](api);
	            } catch (ex) {
	                errorMessage = "Rangy init listener threw an exception. Continuing. Detail: " + getErrorDesc(ex);
	                consoleLog(errorMessage);
	            }
	        }
	    }

	    function deprecationNotice(deprecated, replacement, module) {
	        if (module) {
	            deprecated += " in module " + module.name;
	        }
	        api.warn("DEPRECATED: " + deprecated + " is deprecated. Please use " +
	        replacement + " instead.");
	    }

	    function createAliasForDeprecatedMethod(owner, deprecated, replacement, module) {
	        owner[deprecated] = function() {
	            deprecationNotice(deprecated, replacement, module);
	            return owner[replacement].apply(owner, util.toArray(arguments));
	        };
	    }

	    util.deprecationNotice = deprecationNotice;
	    util.createAliasForDeprecatedMethod = createAliasForDeprecatedMethod;

	    // Allow external scripts to initialize this library in case it's loaded after the document has loaded
	    api.init = init;

	    // Execute listener immediately if already initialized
	    api.addInitListener = function(listener) {
	        if (api.initialized) {
	            listener(api);
	        } else {
	            initListeners.push(listener);
	        }
	    };

	    var shimListeners = [];

	    api.addShimListener = function(listener) {
	        shimListeners.push(listener);
	    };

	    function shim(win) {
	        win = win || window;
	        init();

	        // Notify listeners
	        for (var i = 0, len = shimListeners.length; i < len; ++i) {
	            shimListeners[i](win);
	        }
	    }

	    if (isBrowser) {
	        api.shim = api.createMissingNativeApi = shim;
	        createAliasForDeprecatedMethod(api, "createMissingNativeApi", "shim");
	    }

	    function Module(name, dependencies, initializer) {
	        this.name = name;
	        this.dependencies = dependencies;
	        this.initialized = false;
	        this.supported = false;
	        this.initializer = initializer;
	    }

	    Module.prototype = {
	        init: function() {
	            var requiredModuleNames = this.dependencies || [];
	            for (var i = 0, len = requiredModuleNames.length, requiredModule, moduleName; i < len; ++i) {
	                moduleName = requiredModuleNames[i];

	                requiredModule = modules[moduleName];
	                if (!requiredModule || !(requiredModule instanceof Module)) {
	                    throw new Error("required module '" + moduleName + "' not found");
	                }

	                requiredModule.init();

	                if (!requiredModule.supported) {
	                    throw new Error("required module '" + moduleName + "' not supported");
	                }
	            }

	            // Now run initializer
	            this.initializer(this);
	        },

	        fail: function(reason) {
	            this.initialized = true;
	            this.supported = false;
	            throw new Error(reason);
	        },

	        warn: function(msg) {
	            api.warn("Module " + this.name + ": " + msg);
	        },

	        deprecationNotice: function(deprecated, replacement) {
	            api.warn("DEPRECATED: " + deprecated + " in module " + this.name + " is deprecated. Please use " +
	                replacement + " instead");
	        },

	        createError: function(msg) {
	            return new Error("Error in Rangy " + this.name + " module: " + msg);
	        }
	    };

	    function createModule(name, dependencies, initFunc) {
	        var newModule = new Module(name, dependencies, function(module) {
	            if (!module.initialized) {
	                module.initialized = true;
	                try {
	                    initFunc(api, module);
	                    module.supported = true;
	                } catch (ex) {
	                    var errorMessage = "Module '" + name + "' failed to load: " + getErrorDesc(ex);
	                    consoleLog(errorMessage);
	                    if (ex.stack) {
	                        consoleLog(ex.stack);
	                    }
	                }
	            }
	        });
	        modules[name] = newModule;
	        return newModule;
	    }

	    api.createModule = function(name) {
	        // Allow 2 or 3 arguments (second argument is an optional array of dependencies)
	        var initFunc, dependencies;
	        if (arguments.length == 2) {
	            initFunc = arguments[1];
	            dependencies = [];
	        } else {
	            initFunc = arguments[2];
	            dependencies = arguments[1];
	        }

	        var module = createModule(name, dependencies, initFunc);

	        // Initialize the module immediately if the core is already initialized
	        if (api.initialized && api.supported) {
	            module.init();
	        }
	    };

	    api.createCoreModule = function(name, dependencies, initFunc) {
	        createModule(name, dependencies, initFunc);
	    };

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Ensure rangy.rangePrototype and rangy.selectionPrototype are available immediately

	    function RangePrototype() {}
	    api.RangePrototype = RangePrototype;
	    api.rangePrototype = new RangePrototype();

	    function SelectionPrototype() {}
	    api.selectionPrototype = new SelectionPrototype();

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // DOM utility methods used by Rangy
	    api.createCoreModule("DomUtil", [], function(api, module) {
	        var UNDEF = "undefined";
	        var util = api.util;
	        var getBody = util.getBody;

	        // Perform feature tests
	        if (!util.areHostMethods(document, ["createDocumentFragment", "createElement", "createTextNode"])) {
	            module.fail("document missing a Node creation method");
	        }

	        if (!util.isHostMethod(document, "getElementsByTagName")) {
	            module.fail("document missing getElementsByTagName method");
	        }

	        var el = document.createElement("div");
	        if (!util.areHostMethods(el, ["insertBefore", "appendChild", "cloneNode"] ||
	                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]))) {
	            module.fail("Incomplete Element implementation");
	        }

	        // innerHTML is required for Range's createContextualFragment method
	        if (!util.isHostProperty(el, "innerHTML")) {
	            module.fail("Element is missing innerHTML property");
	        }

	        var textNode = document.createTextNode("test");
	        if (!util.areHostMethods(textNode, ["splitText", "deleteData", "insertData", "appendData", "cloneNode"] ||
	                !util.areHostObjects(el, ["previousSibling", "nextSibling", "childNodes", "parentNode"]) ||
	                !util.areHostProperties(textNode, ["data"]))) {
	            module.fail("Incomplete Text Node implementation");
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Removed use of indexOf because of a bizarre bug in Opera that is thrown in one of the Acid3 tests. I haven't been
	        // able to replicate it outside of the test. The bug is that indexOf returns -1 when called on an Array that
	        // contains just the document as a single element and the value searched for is the document.
	        var arrayContains = /*Array.prototype.indexOf ?
	            function(arr, val) {
	                return arr.indexOf(val) > -1;
	            }:*/

	            function(arr, val) {
	                var i = arr.length;
	                while (i--) {
	                    if (arr[i] === val) {
	                        return true;
	                    }
	                }
	                return false;
	            };

	        // Opera 11 puts HTML elements in the null namespace, it seems, and IE 7 has undefined namespaceURI
	        function isHtmlNamespace(node) {
	            var ns;
	            return typeof node.namespaceURI == UNDEF || ((ns = node.namespaceURI) === null || ns == "http://www.w3.org/1999/xhtml");
	        }

	        function parentElement(node) {
	            var parent = node.parentNode;
	            return (parent.nodeType == 1) ? parent : null;
	        }

	        function getNodeIndex(node) {
	            var i = 0;
	            while( (node = node.previousSibling) ) {
	                ++i;
	            }
	            return i;
	        }

	        function getNodeLength(node) {
	            switch (node.nodeType) {
	                case 7:
	                case 10:
	                    return 0;
	                case 3:
	                case 8:
	                    return node.length;
	                default:
	                    return node.childNodes.length;
	            }
	        }

	        function getCommonAncestor(node1, node2) {
	            var ancestors = [], n;
	            for (n = node1; n; n = n.parentNode) {
	                ancestors.push(n);
	            }

	            for (n = node2; n; n = n.parentNode) {
	                if (arrayContains(ancestors, n)) {
	                    return n;
	                }
	            }

	            return null;
	        }

	        function isAncestorOf(ancestor, descendant, selfIsAncestor) {
	            var n = selfIsAncestor ? descendant : descendant.parentNode;
	            while (n) {
	                if (n === ancestor) {
	                    return true;
	                } else {
	                    n = n.parentNode;
	                }
	            }
	            return false;
	        }

	        function isOrIsAncestorOf(ancestor, descendant) {
	            return isAncestorOf(ancestor, descendant, true);
	        }

	        function getClosestAncestorIn(node, ancestor, selfIsAncestor) {
	            var p, n = selfIsAncestor ? node : node.parentNode;
	            while (n) {
	                p = n.parentNode;
	                if (p === ancestor) {
	                    return n;
	                }
	                n = p;
	            }
	            return null;
	        }

	        function isCharacterDataNode(node) {
	            var t = node.nodeType;
	            return t == 3 || t == 4 || t == 8 ; // Text, CDataSection or Comment
	        }

	        function isTextOrCommentNode(node) {
	            if (!node) {
	                return false;
	            }
	            var t = node.nodeType;
	            return t == 3 || t == 8 ; // Text or Comment
	        }

	        function insertAfter(node, precedingNode) {
	            var nextNode = precedingNode.nextSibling, parent = precedingNode.parentNode;
	            if (nextNode) {
	                parent.insertBefore(node, nextNode);
	            } else {
	                parent.appendChild(node);
	            }
	            return node;
	        }

	        // Note that we cannot use splitText() because it is bugridden in IE 9.
	        function splitDataNode(node, index, positionsToPreserve) {
	            var newNode = node.cloneNode(false);
	            newNode.deleteData(0, index);
	            node.deleteData(index, node.length - index);
	            insertAfter(newNode, node);

	            // Preserve positions
	            if (positionsToPreserve) {
	                for (var i = 0, position; position = positionsToPreserve[i++]; ) {
	                    // Handle case where position was inside the portion of node after the split point
	                    if (position.node == node && position.offset > index) {
	                        position.node = newNode;
	                        position.offset -= index;
	                    }
	                    // Handle the case where the position is a node offset within node's parent
	                    else if (position.node == node.parentNode && position.offset > getNodeIndex(node)) {
	                        ++position.offset;
	                    }
	                }
	            }
	            return newNode;
	        }

	        function getDocument(node) {
	            if (node.nodeType == 9) {
	                return node;
	            } else if (typeof node.ownerDocument != UNDEF) {
	                return node.ownerDocument;
	            } else if (typeof node.document != UNDEF) {
	                return node.document;
	            } else if (node.parentNode) {
	                return getDocument(node.parentNode);
	            } else {
	                throw module.createError("getDocument: no document found for node");
	            }
	        }

	        function getWindow(node) {
	            var doc = getDocument(node);
	            if (typeof doc.defaultView != UNDEF) {
	                return doc.defaultView;
	            } else if (typeof doc.parentWindow != UNDEF) {
	                return doc.parentWindow;
	            } else {
	                throw module.createError("Cannot get a window object for node");
	            }
	        }

	        function getIframeDocument(iframeEl) {
	            if (typeof iframeEl.contentDocument != UNDEF) {
	                return iframeEl.contentDocument;
	            } else if (typeof iframeEl.contentWindow != UNDEF) {
	                return iframeEl.contentWindow.document;
	            } else {
	                throw module.createError("getIframeDocument: No Document object found for iframe element");
	            }
	        }

	        function getIframeWindow(iframeEl) {
	            if (typeof iframeEl.contentWindow != UNDEF) {
	                return iframeEl.contentWindow;
	            } else if (typeof iframeEl.contentDocument != UNDEF) {
	                return iframeEl.contentDocument.defaultView;
	            } else {
	                throw module.createError("getIframeWindow: No Window object found for iframe element");
	            }
	        }

	        // This looks bad. Is it worth it?
	        function isWindow(obj) {
	            return obj && util.isHostMethod(obj, "setTimeout") && util.isHostObject(obj, "document");
	        }

	        function getContentDocument(obj, module, methodName) {
	            var doc;

	            if (!obj) {
	                doc = document;
	            }

	            // Test if a DOM node has been passed and obtain a document object for it if so
	            else if (util.isHostProperty(obj, "nodeType")) {
	                doc = (obj.nodeType == 1 && obj.tagName.toLowerCase() == "iframe") ?
	                    getIframeDocument(obj) : getDocument(obj);
	            }

	            // Test if the doc parameter appears to be a Window object
	            else if (isWindow(obj)) {
	                doc = obj.document;
	            }

	            if (!doc) {
	                throw module.createError(methodName + "(): Parameter must be a Window object or DOM node");
	            }

	            return doc;
	        }

	        function getRootContainer(node) {
	            var parent;
	            while ( (parent = node.parentNode) ) {
	                node = parent;
	            }
	            return node;
	        }

	        function comparePoints(nodeA, offsetA, nodeB, offsetB) {
	            // See http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Comparing
	            var nodeC, root, childA, childB, n;
	            if (nodeA == nodeB) {
	                // Case 1: nodes are the same
	                return offsetA === offsetB ? 0 : (offsetA < offsetB) ? -1 : 1;
	            } else if ( (nodeC = getClosestAncestorIn(nodeB, nodeA, true)) ) {
	                // Case 2: node C (container B or an ancestor) is a child node of A
	                return offsetA <= getNodeIndex(nodeC) ? -1 : 1;
	            } else if ( (nodeC = getClosestAncestorIn(nodeA, nodeB, true)) ) {
	                // Case 3: node C (container A or an ancestor) is a child node of B
	                return getNodeIndex(nodeC) < offsetB  ? -1 : 1;
	            } else {
	                root = getCommonAncestor(nodeA, nodeB);
	                if (!root) {
	                    throw new Error("comparePoints error: nodes have no common ancestor");
	                }

	                // Case 4: containers are siblings or descendants of siblings
	                childA = (nodeA === root) ? root : getClosestAncestorIn(nodeA, root, true);
	                childB = (nodeB === root) ? root : getClosestAncestorIn(nodeB, root, true);

	                if (childA === childB) {
	                    // This shouldn't be possible
	                    throw module.createError("comparePoints got to case 4 and childA and childB are the same!");
	                } else {
	                    n = root.firstChild;
	                    while (n) {
	                        if (n === childA) {
	                            return -1;
	                        } else if (n === childB) {
	                            return 1;
	                        }
	                        n = n.nextSibling;
	                    }
	                }
	            }
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Test for IE's crash (IE 6/7) or exception (IE >= 8) when a reference to garbage-collected text node is queried
	        var crashyTextNodes = false;

	        function isBrokenNode(node) {
	            var n;
	            try {
	                n = node.parentNode;
	                return false;
	            } catch (e) {
	                return true;
	            }
	        }

	        (function() {
	            var el = document.createElement("b");
	            el.innerHTML = "1";
	            var textNode = el.firstChild;
	            el.innerHTML = "<br />";
	            crashyTextNodes = isBrokenNode(textNode);

	            api.features.crashyTextNodes = crashyTextNodes;
	        })();

	        /*----------------------------------------------------------------------------------------------------------------*/

	        function inspectNode(node) {
	            if (!node) {
	                return "[No node]";
	            }
	            if (crashyTextNodes && isBrokenNode(node)) {
	                return "[Broken node]";
	            }
	            if (isCharacterDataNode(node)) {
	                return '"' + node.data + '"';
	            }
	            if (node.nodeType == 1) {
	                var idAttr = node.id ? ' id="' + node.id + '"' : "";
	                return "<" + node.nodeName + idAttr + ">[index:" + getNodeIndex(node) + ",length:" + node.childNodes.length + "][" + (node.innerHTML || "[innerHTML not supported]").slice(0, 25) + "]";
	            }
	            return node.nodeName;
	        }

	        function fragmentFromNodeChildren(node) {
	            var fragment = getDocument(node).createDocumentFragment(), child;
	            while ( (child = node.firstChild) ) {
	                fragment.appendChild(child);
	            }
	            return fragment;
	        }

	        var getComputedStyleProperty;
	        if (typeof window.getComputedStyle != UNDEF) {
	            getComputedStyleProperty = function(el, propName) {
	                return getWindow(el).getComputedStyle(el, null)[propName];
	            };
	        } else if (typeof document.documentElement.currentStyle != UNDEF) {
	            getComputedStyleProperty = function(el, propName) {
	                return el.currentStyle ? el.currentStyle[propName] : "";
	            };
	        } else {
	            module.fail("No means of obtaining computed style properties found");
	        }

	        function createTestElement(doc, html, contentEditable) {
	            var body = getBody(doc);
	            var el = doc.createElement("div");
	            el.contentEditable = "" + !!contentEditable;
	            if (html) {
	                el.innerHTML = html;
	            }

	            // Insert the test element at the start of the body to prevent scrolling to the bottom in iOS (issue #292)
	            var bodyFirstChild = body.firstChild;
	            if (bodyFirstChild) {
	                body.insertBefore(el, bodyFirstChild);
	            } else {
	                body.appendChild(el);
	            }

	            return el;
	        }

	        function removeNode(node) {
	            return node.parentNode.removeChild(node);
	        }

	        function NodeIterator(root) {
	            this.root = root;
	            this._next = root;
	        }

	        NodeIterator.prototype = {
	            _current: null,

	            hasNext: function() {
	                return !!this._next;
	            },

	            next: function() {
	                var n = this._current = this._next;
	                var child, next;
	                if (this._current) {
	                    child = n.firstChild;
	                    if (child) {
	                        this._next = child;
	                    } else {
	                        next = null;
	                        while ((n !== this.root) && !(next = n.nextSibling)) {
	                            n = n.parentNode;
	                        }
	                        this._next = next;
	                    }
	                }
	                return this._current;
	            },

	            detach: function() {
	                this._current = this._next = this.root = null;
	            }
	        };

	        function createIterator(root) {
	            return new NodeIterator(root);
	        }

	        function DomPosition(node, offset) {
	            this.node = node;
	            this.offset = offset;
	        }

	        DomPosition.prototype = {
	            equals: function(pos) {
	                return !!pos && this.node === pos.node && this.offset == pos.offset;
	            },

	            inspect: function() {
	                return "[DomPosition(" + inspectNode(this.node) + ":" + this.offset + ")]";
	            },

	            toString: function() {
	                return this.inspect();
	            }
	        };

	        function DOMException(codeName) {
	            this.code = this[codeName];
	            this.codeName = codeName;
	            this.message = "DOMException: " + this.codeName;
	        }

	        DOMException.prototype = {
	            INDEX_SIZE_ERR: 1,
	            HIERARCHY_REQUEST_ERR: 3,
	            WRONG_DOCUMENT_ERR: 4,
	            NO_MODIFICATION_ALLOWED_ERR: 7,
	            NOT_FOUND_ERR: 8,
	            NOT_SUPPORTED_ERR: 9,
	            INVALID_STATE_ERR: 11,
	            INVALID_NODE_TYPE_ERR: 24
	        };

	        DOMException.prototype.toString = function() {
	            return this.message;
	        };

	        api.dom = {
	            arrayContains: arrayContains,
	            isHtmlNamespace: isHtmlNamespace,
	            parentElement: parentElement,
	            getNodeIndex: getNodeIndex,
	            getNodeLength: getNodeLength,
	            getCommonAncestor: getCommonAncestor,
	            isAncestorOf: isAncestorOf,
	            isOrIsAncestorOf: isOrIsAncestorOf,
	            getClosestAncestorIn: getClosestAncestorIn,
	            isCharacterDataNode: isCharacterDataNode,
	            isTextOrCommentNode: isTextOrCommentNode,
	            insertAfter: insertAfter,
	            splitDataNode: splitDataNode,
	            getDocument: getDocument,
	            getWindow: getWindow,
	            getIframeWindow: getIframeWindow,
	            getIframeDocument: getIframeDocument,
	            getBody: getBody,
	            isWindow: isWindow,
	            getContentDocument: getContentDocument,
	            getRootContainer: getRootContainer,
	            comparePoints: comparePoints,
	            isBrokenNode: isBrokenNode,
	            inspectNode: inspectNode,
	            getComputedStyleProperty: getComputedStyleProperty,
	            createTestElement: createTestElement,
	            removeNode: removeNode,
	            fragmentFromNodeChildren: fragmentFromNodeChildren,
	            createIterator: createIterator,
	            DomPosition: DomPosition
	        };

	        api.DOMException = DOMException;
	    });

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Pure JavaScript implementation of DOM Range
	    api.createCoreModule("DomRange", ["DomUtil"], function(api, module) {
	        var dom = api.dom;
	        var util = api.util;
	        var DomPosition = dom.DomPosition;
	        var DOMException = api.DOMException;

	        var isCharacterDataNode = dom.isCharacterDataNode;
	        var getNodeIndex = dom.getNodeIndex;
	        var isOrIsAncestorOf = dom.isOrIsAncestorOf;
	        var getDocument = dom.getDocument;
	        var comparePoints = dom.comparePoints;
	        var splitDataNode = dom.splitDataNode;
	        var getClosestAncestorIn = dom.getClosestAncestorIn;
	        var getNodeLength = dom.getNodeLength;
	        var arrayContains = dom.arrayContains;
	        var getRootContainer = dom.getRootContainer;
	        var crashyTextNodes = api.features.crashyTextNodes;

	        var removeNode = dom.removeNode;

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Utility functions

	        function isNonTextPartiallySelected(node, range) {
	            return (node.nodeType != 3) &&
	                   (isOrIsAncestorOf(node, range.startContainer) || isOrIsAncestorOf(node, range.endContainer));
	        }

	        function getRangeDocument(range) {
	            return range.document || getDocument(range.startContainer);
	        }

	        function getRangeRoot(range) {
	            return getRootContainer(range.startContainer);
	        }

	        function getBoundaryBeforeNode(node) {
	            return new DomPosition(node.parentNode, getNodeIndex(node));
	        }

	        function getBoundaryAfterNode(node) {
	            return new DomPosition(node.parentNode, getNodeIndex(node) + 1);
	        }

	        function insertNodeAtPosition(node, n, o) {
	            var firstNodeInserted = node.nodeType == 11 ? node.firstChild : node;
	            if (isCharacterDataNode(n)) {
	                if (o == n.length) {
	                    dom.insertAfter(node, n);
	                } else {
	                    n.parentNode.insertBefore(node, o == 0 ? n : splitDataNode(n, o));
	                }
	            } else if (o >= n.childNodes.length) {
	                n.appendChild(node);
	            } else {
	                n.insertBefore(node, n.childNodes[o]);
	            }
	            return firstNodeInserted;
	        }

	        function rangesIntersect(rangeA, rangeB, touchingIsIntersecting) {
	            assertRangeValid(rangeA);
	            assertRangeValid(rangeB);

	            if (getRangeDocument(rangeB) != getRangeDocument(rangeA)) {
	                throw new DOMException("WRONG_DOCUMENT_ERR");
	            }

	            var startComparison = comparePoints(rangeA.startContainer, rangeA.startOffset, rangeB.endContainer, rangeB.endOffset),
	                endComparison = comparePoints(rangeA.endContainer, rangeA.endOffset, rangeB.startContainer, rangeB.startOffset);

	            return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
	        }

	        function cloneSubtree(iterator) {
	            var partiallySelected;
	            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {
	                partiallySelected = iterator.isPartiallySelectedSubtree();
	                node = node.cloneNode(!partiallySelected);
	                if (partiallySelected) {
	                    subIterator = iterator.getSubtreeIterator();
	                    node.appendChild(cloneSubtree(subIterator));
	                    subIterator.detach();
	                }

	                if (node.nodeType == 10) { // DocumentType
	                    throw new DOMException("HIERARCHY_REQUEST_ERR");
	                }
	                frag.appendChild(node);
	            }
	            return frag;
	        }

	        function iterateSubtree(rangeIterator, func, iteratorState) {
	            var it, n;
	            iteratorState = iteratorState || { stop: false };
	            for (var node, subRangeIterator; node = rangeIterator.next(); ) {
	                if (rangeIterator.isPartiallySelectedSubtree()) {
	                    if (func(node) === false) {
	                        iteratorState.stop = true;
	                        return;
	                    } else {
	                        // The node is partially selected by the Range, so we can use a new RangeIterator on the portion of
	                        // the node selected by the Range.
	                        subRangeIterator = rangeIterator.getSubtreeIterator();
	                        iterateSubtree(subRangeIterator, func, iteratorState);
	                        subRangeIterator.detach();
	                        if (iteratorState.stop) {
	                            return;
	                        }
	                    }
	                } else {
	                    // The whole node is selected, so we can use efficient DOM iteration to iterate over the node and its
	                    // descendants
	                    it = dom.createIterator(node);
	                    while ( (n = it.next()) ) {
	                        if (func(n) === false) {
	                            iteratorState.stop = true;
	                            return;
	                        }
	                    }
	                }
	            }
	        }

	        function deleteSubtree(iterator) {
	            var subIterator;
	            while (iterator.next()) {
	                if (iterator.isPartiallySelectedSubtree()) {
	                    subIterator = iterator.getSubtreeIterator();
	                    deleteSubtree(subIterator);
	                    subIterator.detach();
	                } else {
	                    iterator.remove();
	                }
	            }
	        }

	        function extractSubtree(iterator) {
	            for (var node, frag = getRangeDocument(iterator.range).createDocumentFragment(), subIterator; node = iterator.next(); ) {

	                if (iterator.isPartiallySelectedSubtree()) {
	                    node = node.cloneNode(false);
	                    subIterator = iterator.getSubtreeIterator();
	                    node.appendChild(extractSubtree(subIterator));
	                    subIterator.detach();
	                } else {
	                    iterator.remove();
	                }
	                if (node.nodeType == 10) { // DocumentType
	                    throw new DOMException("HIERARCHY_REQUEST_ERR");
	                }
	                frag.appendChild(node);
	            }
	            return frag;
	        }

	        function getNodesInRange(range, nodeTypes, filter) {
	            var filterNodeTypes = !!(nodeTypes && nodeTypes.length), regex;
	            var filterExists = !!filter;
	            if (filterNodeTypes) {
	                regex = new RegExp("^(" + nodeTypes.join("|") + ")$");
	            }

	            var nodes = [];
	            iterateSubtree(new RangeIterator(range, false), function(node) {
	                if (filterNodeTypes && !regex.test(node.nodeType)) {
	                    return;
	                }
	                if (filterExists && !filter(node)) {
	                    return;
	                }
	                // Don't include a boundary container if it is a character data node and the range does not contain any
	                // of its character data. See issue 190.
	                var sc = range.startContainer;
	                if (node == sc && isCharacterDataNode(sc) && range.startOffset == sc.length) {
	                    return;
	                }

	                var ec = range.endContainer;
	                if (node == ec && isCharacterDataNode(ec) && range.endOffset == 0) {
	                    return;
	                }

	                nodes.push(node);
	            });
	            return nodes;
	        }

	        function inspect(range) {
	            var name = (typeof range.getName == "undefined") ? "Range" : range.getName();
	            return "[" + name + "(" + dom.inspectNode(range.startContainer) + ":" + range.startOffset + ", " +
	                    dom.inspectNode(range.endContainer) + ":" + range.endOffset + ")]";
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // RangeIterator code partially borrows from IERange by Tim Ryan (http://github.com/timcameronryan/IERange)

	        function RangeIterator(range, clonePartiallySelectedTextNodes) {
	            this.range = range;
	            this.clonePartiallySelectedTextNodes = clonePartiallySelectedTextNodes;


	            if (!range.collapsed) {
	                this.sc = range.startContainer;
	                this.so = range.startOffset;
	                this.ec = range.endContainer;
	                this.eo = range.endOffset;
	                var root = range.commonAncestorContainer;

	                if (this.sc === this.ec && isCharacterDataNode(this.sc)) {
	                    this.isSingleCharacterDataNode = true;
	                    this._first = this._last = this._next = this.sc;
	                } else {
	                    this._first = this._next = (this.sc === root && !isCharacterDataNode(this.sc)) ?
	                        this.sc.childNodes[this.so] : getClosestAncestorIn(this.sc, root, true);
	                    this._last = (this.ec === root && !isCharacterDataNode(this.ec)) ?
	                        this.ec.childNodes[this.eo - 1] : getClosestAncestorIn(this.ec, root, true);
	                }
	            }
	        }

	        RangeIterator.prototype = {
	            _current: null,
	            _next: null,
	            _first: null,
	            _last: null,
	            isSingleCharacterDataNode: false,

	            reset: function() {
	                this._current = null;
	                this._next = this._first;
	            },

	            hasNext: function() {
	                return !!this._next;
	            },

	            next: function() {
	                // Move to next node
	                var current = this._current = this._next;
	                if (current) {
	                    this._next = (current !== this._last) ? current.nextSibling : null;

	                    // Check for partially selected text nodes
	                    if (isCharacterDataNode(current) && this.clonePartiallySelectedTextNodes) {
	                        if (current === this.ec) {
	                            (current = current.cloneNode(true)).deleteData(this.eo, current.length - this.eo);
	                        }
	                        if (this._current === this.sc) {
	                            (current = current.cloneNode(true)).deleteData(0, this.so);
	                        }
	                    }
	                }

	                return current;
	            },

	            remove: function() {
	                var current = this._current, start, end;

	                if (isCharacterDataNode(current) && (current === this.sc || current === this.ec)) {
	                    start = (current === this.sc) ? this.so : 0;
	                    end = (current === this.ec) ? this.eo : current.length;
	                    if (start != end) {
	                        current.deleteData(start, end - start);
	                    }
	                } else {
	                    if (current.parentNode) {
	                        removeNode(current);
	                    } else {
	                    }
	                }
	            },

	            // Checks if the current node is partially selected
	            isPartiallySelectedSubtree: function() {
	                var current = this._current;
	                return isNonTextPartiallySelected(current, this.range);
	            },

	            getSubtreeIterator: function() {
	                var subRange;
	                if (this.isSingleCharacterDataNode) {
	                    subRange = this.range.cloneRange();
	                    subRange.collapse(false);
	                } else {
	                    subRange = new Range(getRangeDocument(this.range));
	                    var current = this._current;
	                    var startContainer = current, startOffset = 0, endContainer = current, endOffset = getNodeLength(current);

	                    if (isOrIsAncestorOf(current, this.sc)) {
	                        startContainer = this.sc;
	                        startOffset = this.so;
	                    }
	                    if (isOrIsAncestorOf(current, this.ec)) {
	                        endContainer = this.ec;
	                        endOffset = this.eo;
	                    }

	                    updateBoundaries(subRange, startContainer, startOffset, endContainer, endOffset);
	                }
	                return new RangeIterator(subRange, this.clonePartiallySelectedTextNodes);
	            },

	            detach: function() {
	                this.range = this._current = this._next = this._first = this._last = this.sc = this.so = this.ec = this.eo = null;
	            }
	        };

	        /*----------------------------------------------------------------------------------------------------------------*/

	        var beforeAfterNodeTypes = [1, 3, 4, 5, 7, 8, 10];
	        var rootContainerNodeTypes = [2, 9, 11];
	        var readonlyNodeTypes = [5, 6, 10, 12];
	        var insertableNodeTypes = [1, 3, 4, 5, 7, 8, 10, 11];
	        var surroundNodeTypes = [1, 3, 4, 5, 7, 8];

	        function createAncestorFinder(nodeTypes) {
	            return function(node, selfIsAncestor) {
	                var t, n = selfIsAncestor ? node : node.parentNode;
	                while (n) {
	                    t = n.nodeType;
	                    if (arrayContains(nodeTypes, t)) {
	                        return n;
	                    }
	                    n = n.parentNode;
	                }
	                return null;
	            };
	        }

	        var getDocumentOrFragmentContainer = createAncestorFinder( [9, 11] );
	        var getReadonlyAncestor = createAncestorFinder(readonlyNodeTypes);
	        var getDocTypeNotationEntityAncestor = createAncestorFinder( [6, 10, 12] );

	        function assertNoDocTypeNotationEntityAncestor(node, allowSelf) {
	            if (getDocTypeNotationEntityAncestor(node, allowSelf)) {
	                throw new DOMException("INVALID_NODE_TYPE_ERR");
	            }
	        }

	        function assertValidNodeType(node, invalidTypes) {
	            if (!arrayContains(invalidTypes, node.nodeType)) {
	                throw new DOMException("INVALID_NODE_TYPE_ERR");
	            }
	        }

	        function assertValidOffset(node, offset) {
	            if (offset < 0 || offset > (isCharacterDataNode(node) ? node.length : node.childNodes.length)) {
	                throw new DOMException("INDEX_SIZE_ERR");
	            }
	        }

	        function assertSameDocumentOrFragment(node1, node2) {
	            if (getDocumentOrFragmentContainer(node1, true) !== getDocumentOrFragmentContainer(node2, true)) {
	                throw new DOMException("WRONG_DOCUMENT_ERR");
	            }
	        }

	        function assertNodeNotReadOnly(node) {
	            if (getReadonlyAncestor(node, true)) {
	                throw new DOMException("NO_MODIFICATION_ALLOWED_ERR");
	            }
	        }

	        function assertNode(node, codeName) {
	            if (!node) {
	                throw new DOMException(codeName);
	            }
	        }

	        function isValidOffset(node, offset) {
	            return offset <= (isCharacterDataNode(node) ? node.length : node.childNodes.length);
	        }

	        function isRangeValid(range) {
	            return (!!range.startContainer && !!range.endContainer &&
	                    !(crashyTextNodes && (dom.isBrokenNode(range.startContainer) || dom.isBrokenNode(range.endContainer))) &&
	                    getRootContainer(range.startContainer) == getRootContainer(range.endContainer) &&
	                    isValidOffset(range.startContainer, range.startOffset) &&
	                    isValidOffset(range.endContainer, range.endOffset));
	        }

	        function assertRangeValid(range) {
	            if (!isRangeValid(range)) {
	                throw new Error("Range error: Range is not valid. This usually happens after DOM mutation. Range: (" + range.inspect() + ")");
	            }
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Test the browser's innerHTML support to decide how to implement createContextualFragment
	        var styleEl = document.createElement("style");
	        var htmlParsingConforms = false;
	        try {
	            styleEl.innerHTML = "<b>x</b>";
	            htmlParsingConforms = (styleEl.firstChild.nodeType == 3); // Opera incorrectly creates an element node
	        } catch (e) {
	            // IE 6 and 7 throw
	        }

	        api.features.htmlParsingConforms = htmlParsingConforms;

	        var createContextualFragment = htmlParsingConforms ?

	            // Implementation as per HTML parsing spec, trusting in the browser's implementation of innerHTML. See
	            // discussion and base code for this implementation at issue 67.
	            // Spec: http://html5.org/specs/dom-parsing.html#extensions-to-the-range-interface
	            // Thanks to Aleks Williams.
	            function(fragmentStr) {
	                // "Let node the context object's start's node."
	                var node = this.startContainer;
	                var doc = getDocument(node);

	                // "If the context object's start's node is null, raise an INVALID_STATE_ERR
	                // exception and abort these steps."
	                if (!node) {
	                    throw new DOMException("INVALID_STATE_ERR");
	                }

	                // "Let element be as follows, depending on node's interface:"
	                // Document, Document Fragment: null
	                var el = null;

	                // "Element: node"
	                if (node.nodeType == 1) {
	                    el = node;

	                // "Text, Comment: node's parentElement"
	                } else if (isCharacterDataNode(node)) {
	                    el = dom.parentElement(node);
	                }

	                // "If either element is null or element's ownerDocument is an HTML document
	                // and element's local name is "html" and element's namespace is the HTML
	                // namespace"
	                if (el === null || (
	                    el.nodeName == "HTML" &&
	                    dom.isHtmlNamespace(getDocument(el).documentElement) &&
	                    dom.isHtmlNamespace(el)
	                )) {

	                // "let element be a new Element with "body" as its local name and the HTML
	                // namespace as its namespace.""
	                    el = doc.createElement("body");
	                } else {
	                    el = el.cloneNode(false);
	                }

	                // "If the node's document is an HTML document: Invoke the HTML fragment parsing algorithm."
	                // "If the node's document is an XML document: Invoke the XML fragment parsing algorithm."
	                // "In either case, the algorithm must be invoked with fragment as the input
	                // and element as the context element."
	                el.innerHTML = fragmentStr;

	                // "If this raises an exception, then abort these steps. Otherwise, let new
	                // children be the nodes returned."

	                // "Let fragment be a new DocumentFragment."
	                // "Append all new children to fragment."
	                // "Return fragment."
	                return dom.fragmentFromNodeChildren(el);
	            } :

	            // In this case, innerHTML cannot be trusted, so fall back to a simpler, non-conformant implementation that
	            // previous versions of Rangy used (with the exception of using a body element rather than a div)
	            function(fragmentStr) {
	                var doc = getRangeDocument(this);
	                var el = doc.createElement("body");
	                el.innerHTML = fragmentStr;

	                return dom.fragmentFromNodeChildren(el);
	            };

	        function splitRangeBoundaries(range, positionsToPreserve) {
	            assertRangeValid(range);

	            var sc = range.startContainer, so = range.startOffset, ec = range.endContainer, eo = range.endOffset;
	            var startEndSame = (sc === ec);

	            if (isCharacterDataNode(ec) && eo > 0 && eo < ec.length) {
	                splitDataNode(ec, eo, positionsToPreserve);
	            }

	            if (isCharacterDataNode(sc) && so > 0 && so < sc.length) {
	                sc = splitDataNode(sc, so, positionsToPreserve);
	                if (startEndSame) {
	                    eo -= so;
	                    ec = sc;
	                } else if (ec == sc.parentNode && eo >= getNodeIndex(sc)) {
	                    eo++;
	                }
	                so = 0;
	            }
	            range.setStartAndEnd(sc, so, ec, eo);
	        }

	        function rangeToHtml(range) {
	            assertRangeValid(range);
	            var container = range.commonAncestorContainer.parentNode.cloneNode(false);
	            container.appendChild( range.cloneContents() );
	            return container.innerHTML;
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        var rangeProperties = ["startContainer", "startOffset", "endContainer", "endOffset", "collapsed",
	            "commonAncestorContainer"];

	        var s2s = 0, s2e = 1, e2e = 2, e2s = 3;
	        var n_b = 0, n_a = 1, n_b_a = 2, n_i = 3;

	        util.extend(api.rangePrototype, {
	            compareBoundaryPoints: function(how, range) {
	                assertRangeValid(this);
	                assertSameDocumentOrFragment(this.startContainer, range.startContainer);

	                var nodeA, offsetA, nodeB, offsetB;
	                var prefixA = (how == e2s || how == s2s) ? "start" : "end";
	                var prefixB = (how == s2e || how == s2s) ? "start" : "end";
	                nodeA = this[prefixA + "Container"];
	                offsetA = this[prefixA + "Offset"];
	                nodeB = range[prefixB + "Container"];
	                offsetB = range[prefixB + "Offset"];
	                return comparePoints(nodeA, offsetA, nodeB, offsetB);
	            },

	            insertNode: function(node) {
	                assertRangeValid(this);
	                assertValidNodeType(node, insertableNodeTypes);
	                assertNodeNotReadOnly(this.startContainer);

	                if (isOrIsAncestorOf(node, this.startContainer)) {
	                    throw new DOMException("HIERARCHY_REQUEST_ERR");
	                }

	                // No check for whether the container of the start of the Range is of a type that does not allow
	                // children of the type of node: the browser's DOM implementation should do this for us when we attempt
	                // to add the node

	                var firstNodeInserted = insertNodeAtPosition(node, this.startContainer, this.startOffset);
	                this.setStartBefore(firstNodeInserted);
	            },

	            cloneContents: function() {
	                assertRangeValid(this);

	                var clone, frag;
	                if (this.collapsed) {
	                    return getRangeDocument(this).createDocumentFragment();
	                } else {
	                    if (this.startContainer === this.endContainer && isCharacterDataNode(this.startContainer)) {
	                        clone = this.startContainer.cloneNode(true);
	                        clone.data = clone.data.slice(this.startOffset, this.endOffset);
	                        frag = getRangeDocument(this).createDocumentFragment();
	                        frag.appendChild(clone);
	                        return frag;
	                    } else {
	                        var iterator = new RangeIterator(this, true);
	                        clone = cloneSubtree(iterator);
	                        iterator.detach();
	                    }
	                    return clone;
	                }
	            },

	            canSurroundContents: function() {
	                assertRangeValid(this);
	                assertNodeNotReadOnly(this.startContainer);
	                assertNodeNotReadOnly(this.endContainer);

	                // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
	                // no non-text nodes.
	                var iterator = new RangeIterator(this, true);
	                var boundariesInvalid = (iterator._first && (isNonTextPartiallySelected(iterator._first, this)) ||
	                        (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
	                iterator.detach();
	                return !boundariesInvalid;
	            },

	            surroundContents: function(node) {
	                assertValidNodeType(node, surroundNodeTypes);

	                if (!this.canSurroundContents()) {
	                    throw new DOMException("INVALID_STATE_ERR");
	                }

	                // Extract the contents
	                var content = this.extractContents();

	                // Clear the children of the node
	                if (node.hasChildNodes()) {
	                    while (node.lastChild) {
	                        node.removeChild(node.lastChild);
	                    }
	                }

	                // Insert the new node and add the extracted contents
	                insertNodeAtPosition(node, this.startContainer, this.startOffset);
	                node.appendChild(content);

	                this.selectNode(node);
	            },

	            cloneRange: function() {
	                assertRangeValid(this);
	                var range = new Range(getRangeDocument(this));
	                var i = rangeProperties.length, prop;
	                while (i--) {
	                    prop = rangeProperties[i];
	                    range[prop] = this[prop];
	                }
	                return range;
	            },

	            toString: function() {
	                assertRangeValid(this);
	                var sc = this.startContainer;
	                if (sc === this.endContainer && isCharacterDataNode(sc)) {
	                    return (sc.nodeType == 3 || sc.nodeType == 4) ? sc.data.slice(this.startOffset, this.endOffset) : "";
	                } else {
	                    var textParts = [], iterator = new RangeIterator(this, true);
	                    iterateSubtree(iterator, function(node) {
	                        // Accept only text or CDATA nodes, not comments
	                        if (node.nodeType == 3 || node.nodeType == 4) {
	                            textParts.push(node.data);
	                        }
	                    });
	                    iterator.detach();
	                    return textParts.join("");
	                }
	            },

	            // The methods below are all non-standard. The following batch were introduced by Mozilla but have since
	            // been removed from Mozilla.

	            compareNode: function(node) {
	                assertRangeValid(this);

	                var parent = node.parentNode;
	                var nodeIndex = getNodeIndex(node);

	                if (!parent) {
	                    throw new DOMException("NOT_FOUND_ERR");
	                }

	                var startComparison = this.comparePoint(parent, nodeIndex),
	                    endComparison = this.comparePoint(parent, nodeIndex + 1);

	                if (startComparison < 0) { // Node starts before
	                    return (endComparison > 0) ? n_b_a : n_b;
	                } else {
	                    return (endComparison > 0) ? n_a : n_i;
	                }
	            },

	            comparePoint: function(node, offset) {
	                assertRangeValid(this);
	                assertNode(node, "HIERARCHY_REQUEST_ERR");
	                assertSameDocumentOrFragment(node, this.startContainer);

	                if (comparePoints(node, offset, this.startContainer, this.startOffset) < 0) {
	                    return -1;
	                } else if (comparePoints(node, offset, this.endContainer, this.endOffset) > 0) {
	                    return 1;
	                }
	                return 0;
	            },

	            createContextualFragment: createContextualFragment,

	            toHtml: function() {
	                return rangeToHtml(this);
	            },

	            // touchingIsIntersecting determines whether this method considers a node that borders a range intersects
	            // with it (as in WebKit) or not (as in Gecko pre-1.9, and the default)
	            intersectsNode: function(node, touchingIsIntersecting) {
	                assertRangeValid(this);
	                if (getRootContainer(node) != getRangeRoot(this)) {
	                    return false;
	                }

	                var parent = node.parentNode, offset = getNodeIndex(node);
	                if (!parent) {
	                    return true;
	                }

	                var startComparison = comparePoints(parent, offset, this.endContainer, this.endOffset),
	                    endComparison = comparePoints(parent, offset + 1, this.startContainer, this.startOffset);

	                return touchingIsIntersecting ? startComparison <= 0 && endComparison >= 0 : startComparison < 0 && endComparison > 0;
	            },

	            isPointInRange: function(node, offset) {
	                assertRangeValid(this);
	                assertNode(node, "HIERARCHY_REQUEST_ERR");
	                assertSameDocumentOrFragment(node, this.startContainer);

	                return (comparePoints(node, offset, this.startContainer, this.startOffset) >= 0) &&
	                       (comparePoints(node, offset, this.endContainer, this.endOffset) <= 0);
	            },

	            // The methods below are non-standard and invented by me.

	            // Sharing a boundary start-to-end or end-to-start does not count as intersection.
	            intersectsRange: function(range) {
	                return rangesIntersect(this, range, false);
	            },

	            // Sharing a boundary start-to-end or end-to-start does count as intersection.
	            intersectsOrTouchesRange: function(range) {
	                return rangesIntersect(this, range, true);
	            },

	            intersection: function(range) {
	                if (this.intersectsRange(range)) {
	                    var startComparison = comparePoints(this.startContainer, this.startOffset, range.startContainer, range.startOffset),
	                        endComparison = comparePoints(this.endContainer, this.endOffset, range.endContainer, range.endOffset);

	                    var intersectionRange = this.cloneRange();
	                    if (startComparison == -1) {
	                        intersectionRange.setStart(range.startContainer, range.startOffset);
	                    }
	                    if (endComparison == 1) {
	                        intersectionRange.setEnd(range.endContainer, range.endOffset);
	                    }
	                    return intersectionRange;
	                }
	                return null;
	            },

	            union: function(range) {
	                if (this.intersectsOrTouchesRange(range)) {
	                    var unionRange = this.cloneRange();
	                    if (comparePoints(range.startContainer, range.startOffset, this.startContainer, this.startOffset) == -1) {
	                        unionRange.setStart(range.startContainer, range.startOffset);
	                    }
	                    if (comparePoints(range.endContainer, range.endOffset, this.endContainer, this.endOffset) == 1) {
	                        unionRange.setEnd(range.endContainer, range.endOffset);
	                    }
	                    return unionRange;
	                } else {
	                    throw new DOMException("Ranges do not intersect");
	                }
	            },

	            containsNode: function(node, allowPartial) {
	                if (allowPartial) {
	                    return this.intersectsNode(node, false);
	                } else {
	                    return this.compareNode(node) == n_i;
	                }
	            },

	            containsNodeContents: function(node) {
	                return this.comparePoint(node, 0) >= 0 && this.comparePoint(node, getNodeLength(node)) <= 0;
	            },

	            containsRange: function(range) {
	                var intersection = this.intersection(range);
	                return intersection !== null && range.equals(intersection);
	            },

	            containsNodeText: function(node) {
	                var nodeRange = this.cloneRange();
	                nodeRange.selectNode(node);
	                var textNodes = nodeRange.getNodes([3]);
	                if (textNodes.length > 0) {
	                    nodeRange.setStart(textNodes[0], 0);
	                    var lastTextNode = textNodes.pop();
	                    nodeRange.setEnd(lastTextNode, lastTextNode.length);
	                    return this.containsRange(nodeRange);
	                } else {
	                    return this.containsNodeContents(node);
	                }
	            },

	            getNodes: function(nodeTypes, filter) {
	                assertRangeValid(this);
	                return getNodesInRange(this, nodeTypes, filter);
	            },

	            getDocument: function() {
	                return getRangeDocument(this);
	            },

	            collapseBefore: function(node) {
	                this.setEndBefore(node);
	                this.collapse(false);
	            },

	            collapseAfter: function(node) {
	                this.setStartAfter(node);
	                this.collapse(true);
	            },

	            getBookmark: function(containerNode) {
	                var doc = getRangeDocument(this);
	                var preSelectionRange = api.createRange(doc);
	                containerNode = containerNode || dom.getBody(doc);
	                preSelectionRange.selectNodeContents(containerNode);
	                var range = this.intersection(preSelectionRange);
	                var start = 0, end = 0;
	                if (range) {
	                    preSelectionRange.setEnd(range.startContainer, range.startOffset);
	                    start = preSelectionRange.toString().length;
	                    end = start + range.toString().length;
	                }

	                return {
	                    start: start,
	                    end: end,
	                    containerNode: containerNode
	                };
	            },

	            moveToBookmark: function(bookmark) {
	                var containerNode = bookmark.containerNode;
	                var charIndex = 0;
	                this.setStart(containerNode, 0);
	                this.collapse(true);
	                var nodeStack = [containerNode], node, foundStart = false, stop = false;
	                var nextCharIndex, i, childNodes;

	                while (!stop && (node = nodeStack.pop())) {
	                    if (node.nodeType == 3) {
	                        nextCharIndex = charIndex + node.length;
	                        if (!foundStart && bookmark.start >= charIndex && bookmark.start <= nextCharIndex) {
	                            this.setStart(node, bookmark.start - charIndex);
	                            foundStart = true;
	                        }
	                        if (foundStart && bookmark.end >= charIndex && bookmark.end <= nextCharIndex) {
	                            this.setEnd(node, bookmark.end - charIndex);
	                            stop = true;
	                        }
	                        charIndex = nextCharIndex;
	                    } else {
	                        childNodes = node.childNodes;
	                        i = childNodes.length;
	                        while (i--) {
	                            nodeStack.push(childNodes[i]);
	                        }
	                    }
	                }
	            },

	            getName: function() {
	                return "DomRange";
	            },

	            equals: function(range) {
	                return Range.rangesEqual(this, range);
	            },

	            isValid: function() {
	                return isRangeValid(this);
	            },

	            inspect: function() {
	                return inspect(this);
	            },

	            detach: function() {
	                // In DOM4, detach() is now a no-op.
	            }
	        });

	        function copyComparisonConstantsToObject(obj) {
	            obj.START_TO_START = s2s;
	            obj.START_TO_END = s2e;
	            obj.END_TO_END = e2e;
	            obj.END_TO_START = e2s;

	            obj.NODE_BEFORE = n_b;
	            obj.NODE_AFTER = n_a;
	            obj.NODE_BEFORE_AND_AFTER = n_b_a;
	            obj.NODE_INSIDE = n_i;
	        }

	        function copyComparisonConstants(constructor) {
	            copyComparisonConstantsToObject(constructor);
	            copyComparisonConstantsToObject(constructor.prototype);
	        }

	        function createRangeContentRemover(remover, boundaryUpdater) {
	            return function() {
	                assertRangeValid(this);

	                var sc = this.startContainer, so = this.startOffset, root = this.commonAncestorContainer;

	                var iterator = new RangeIterator(this, true);

	                // Work out where to position the range after content removal
	                var node, boundary;
	                if (sc !== root) {
	                    node = getClosestAncestorIn(sc, root, true);
	                    boundary = getBoundaryAfterNode(node);
	                    sc = boundary.node;
	                    so = boundary.offset;
	                }

	                // Check none of the range is read-only
	                iterateSubtree(iterator, assertNodeNotReadOnly);

	                iterator.reset();

	                // Remove the content
	                var returnValue = remover(iterator);
	                iterator.detach();

	                // Move to the new position
	                boundaryUpdater(this, sc, so, sc, so);

	                return returnValue;
	            };
	        }

	        function createPrototypeRange(constructor, boundaryUpdater) {
	            function createBeforeAfterNodeSetter(isBefore, isStart) {
	                return function(node) {
	                    assertValidNodeType(node, beforeAfterNodeTypes);
	                    assertValidNodeType(getRootContainer(node), rootContainerNodeTypes);

	                    var boundary = (isBefore ? getBoundaryBeforeNode : getBoundaryAfterNode)(node);
	                    (isStart ? setRangeStart : setRangeEnd)(this, boundary.node, boundary.offset);
	                };
	            }

	            function setRangeStart(range, node, offset) {
	                var ec = range.endContainer, eo = range.endOffset;
	                if (node !== range.startContainer || offset !== range.startOffset) {
	                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
	                    // is after the current end. In either case, collapse the range to the new position
	                    if (getRootContainer(node) != getRootContainer(ec) || comparePoints(node, offset, ec, eo) == 1) {
	                        ec = node;
	                        eo = offset;
	                    }
	                    boundaryUpdater(range, node, offset, ec, eo);
	                }
	            }

	            function setRangeEnd(range, node, offset) {
	                var sc = range.startContainer, so = range.startOffset;
	                if (node !== range.endContainer || offset !== range.endOffset) {
	                    // Check the root containers of the range and the new boundary, and also check whether the new boundary
	                    // is after the current end. In either case, collapse the range to the new position
	                    if (getRootContainer(node) != getRootContainer(sc) || comparePoints(node, offset, sc, so) == -1) {
	                        sc = node;
	                        so = offset;
	                    }
	                    boundaryUpdater(range, sc, so, node, offset);
	                }
	            }

	            // Set up inheritance
	            var F = function() {};
	            F.prototype = api.rangePrototype;
	            constructor.prototype = new F();

	            util.extend(constructor.prototype, {
	                setStart: function(node, offset) {
	                    assertNoDocTypeNotationEntityAncestor(node, true);
	                    assertValidOffset(node, offset);

	                    setRangeStart(this, node, offset);
	                },

	                setEnd: function(node, offset) {
	                    assertNoDocTypeNotationEntityAncestor(node, true);
	                    assertValidOffset(node, offset);

	                    setRangeEnd(this, node, offset);
	                },

	                /**
	                 * Convenience method to set a range's start and end boundaries. Overloaded as follows:
	                 * - Two parameters (node, offset) creates a collapsed range at that position
	                 * - Three parameters (node, startOffset, endOffset) creates a range contained with node starting at
	                 *   startOffset and ending at endOffset
	                 * - Four parameters (startNode, startOffset, endNode, endOffset) creates a range starting at startOffset in
	                 *   startNode and ending at endOffset in endNode
	                 */
	                setStartAndEnd: function() {
	                    var args = arguments;
	                    var sc = args[0], so = args[1], ec = sc, eo = so;

	                    switch (args.length) {
	                        case 3:
	                            eo = args[2];
	                            break;
	                        case 4:
	                            ec = args[2];
	                            eo = args[3];
	                            break;
	                    }

	                    boundaryUpdater(this, sc, so, ec, eo);
	                },

	                setBoundary: function(node, offset, isStart) {
	                    this["set" + (isStart ? "Start" : "End")](node, offset);
	                },

	                setStartBefore: createBeforeAfterNodeSetter(true, true),
	                setStartAfter: createBeforeAfterNodeSetter(false, true),
	                setEndBefore: createBeforeAfterNodeSetter(true, false),
	                setEndAfter: createBeforeAfterNodeSetter(false, false),

	                collapse: function(isStart) {
	                    assertRangeValid(this);
	                    if (isStart) {
	                        boundaryUpdater(this, this.startContainer, this.startOffset, this.startContainer, this.startOffset);
	                    } else {
	                        boundaryUpdater(this, this.endContainer, this.endOffset, this.endContainer, this.endOffset);
	                    }
	                },

	                selectNodeContents: function(node) {
	                    assertNoDocTypeNotationEntityAncestor(node, true);

	                    boundaryUpdater(this, node, 0, node, getNodeLength(node));
	                },

	                selectNode: function(node) {
	                    assertNoDocTypeNotationEntityAncestor(node, false);
	                    assertValidNodeType(node, beforeAfterNodeTypes);

	                    var start = getBoundaryBeforeNode(node), end = getBoundaryAfterNode(node);
	                    boundaryUpdater(this, start.node, start.offset, end.node, end.offset);
	                },

	                extractContents: createRangeContentRemover(extractSubtree, boundaryUpdater),

	                deleteContents: createRangeContentRemover(deleteSubtree, boundaryUpdater),

	                canSurroundContents: function() {
	                    assertRangeValid(this);
	                    assertNodeNotReadOnly(this.startContainer);
	                    assertNodeNotReadOnly(this.endContainer);

	                    // Check if the contents can be surrounded. Specifically, this means whether the range partially selects
	                    // no non-text nodes.
	                    var iterator = new RangeIterator(this, true);
	                    var boundariesInvalid = (iterator._first && isNonTextPartiallySelected(iterator._first, this) ||
	                            (iterator._last && isNonTextPartiallySelected(iterator._last, this)));
	                    iterator.detach();
	                    return !boundariesInvalid;
	                },

	                splitBoundaries: function() {
	                    splitRangeBoundaries(this);
	                },

	                splitBoundariesPreservingPositions: function(positionsToPreserve) {
	                    splitRangeBoundaries(this, positionsToPreserve);
	                },

	                normalizeBoundaries: function() {
	                    assertRangeValid(this);

	                    var sc = this.startContainer, so = this.startOffset, ec = this.endContainer, eo = this.endOffset;

	                    var mergeForward = function(node) {
	                        var sibling = node.nextSibling;
	                        if (sibling && sibling.nodeType == node.nodeType) {
	                            ec = node;
	                            eo = node.length;
	                            node.appendData(sibling.data);
	                            removeNode(sibling);
	                        }
	                    };

	                    var mergeBackward = function(node) {
	                        var sibling = node.previousSibling;
	                        if (sibling && sibling.nodeType == node.nodeType) {
	                            sc = node;
	                            var nodeLength = node.length;
	                            so = sibling.length;
	                            node.insertData(0, sibling.data);
	                            removeNode(sibling);
	                            if (sc == ec) {
	                                eo += so;
	                                ec = sc;
	                            } else if (ec == node.parentNode) {
	                                var nodeIndex = getNodeIndex(node);
	                                if (eo == nodeIndex) {
	                                    ec = node;
	                                    eo = nodeLength;
	                                } else if (eo > nodeIndex) {
	                                    eo--;
	                                }
	                            }
	                        }
	                    };

	                    var normalizeStart = true;
	                    var sibling;

	                    if (isCharacterDataNode(ec)) {
	                        if (eo == ec.length) {
	                            mergeForward(ec);
	                        } else if (eo == 0) {
	                            sibling = ec.previousSibling;
	                            if (sibling && sibling.nodeType == ec.nodeType) {
	                                eo = sibling.length;
	                                if (sc == ec) {
	                                    normalizeStart = false;
	                                }
	                                sibling.appendData(ec.data);
	                                removeNode(ec);
	                                ec = sibling;
	                            }
	                        }
	                    } else {
	                        if (eo > 0) {
	                            var endNode = ec.childNodes[eo - 1];
	                            if (endNode && isCharacterDataNode(endNode)) {
	                                mergeForward(endNode);
	                            }
	                        }
	                        normalizeStart = !this.collapsed;
	                    }

	                    if (normalizeStart) {
	                        if (isCharacterDataNode(sc)) {
	                            if (so == 0) {
	                                mergeBackward(sc);
	                            } else if (so == sc.length) {
	                                sibling = sc.nextSibling;
	                                if (sibling && sibling.nodeType == sc.nodeType) {
	                                    if (ec == sibling) {
	                                        ec = sc;
	                                        eo += sc.length;
	                                    }
	                                    sc.appendData(sibling.data);
	                                    removeNode(sibling);
	                                }
	                            }
	                        } else {
	                            if (so < sc.childNodes.length) {
	                                var startNode = sc.childNodes[so];
	                                if (startNode && isCharacterDataNode(startNode)) {
	                                    mergeBackward(startNode);
	                                }
	                            }
	                        }
	                    } else {
	                        sc = ec;
	                        so = eo;
	                    }

	                    boundaryUpdater(this, sc, so, ec, eo);
	                },

	                collapseToPoint: function(node, offset) {
	                    assertNoDocTypeNotationEntityAncestor(node, true);
	                    assertValidOffset(node, offset);
	                    this.setStartAndEnd(node, offset);
	                }
	            });

	            copyComparisonConstants(constructor);
	        }

	        /*----------------------------------------------------------------------------------------------------------------*/

	        // Updates commonAncestorContainer and collapsed after boundary change
	        function updateCollapsedAndCommonAncestor(range) {
	            range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
	            range.commonAncestorContainer = range.collapsed ?
	                range.startContainer : dom.getCommonAncestor(range.startContainer, range.endContainer);
	        }

	        function updateBoundaries(range, startContainer, startOffset, endContainer, endOffset) {
	            range.startContainer = startContainer;
	            range.startOffset = startOffset;
	            range.endContainer = endContainer;
	            range.endOffset = endOffset;
	            range.document = dom.getDocument(startContainer);

	            updateCollapsedAndCommonAncestor(range);
	        }

	        function Range(doc) {
	            this.startContainer = doc;
	            this.startOffset = 0;
	            this.endContainer = doc;
	            this.endOffset = 0;
	            this.document = doc;
	            updateCollapsedAndCommonAncestor(this);
	        }

	        createPrototypeRange(Range, updateBoundaries);

	        util.extend(Range, {
	            rangeProperties: rangeProperties,
	            RangeIterator: RangeIterator,
	            copyComparisonConstants: copyComparisonConstants,
	            createPrototypeRange: createPrototypeRange,
	            inspect: inspect,
	            toHtml: rangeToHtml,
	            getRangeDocument: getRangeDocument,
	            rangesEqual: function(r1, r2) {
	                return r1.startContainer === r2.startContainer &&
	                    r1.startOffset === r2.startOffset &&
	                    r1.endContainer === r2.endContainer &&
	                    r1.endOffset === r2.endOffset;
	            }
	        });

	        api.DomRange = Range;
	    });

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Wrappers for the browser's native DOM Range and/or TextRange implementation
	    api.createCoreModule("WrappedRange", ["DomRange"], function(api, module) {
	        var WrappedRange, WrappedTextRange;
	        var dom = api.dom;
	        var util = api.util;
	        var DomPosition = dom.DomPosition;
	        var DomRange = api.DomRange;
	        var getBody = dom.getBody;
	        var getContentDocument = dom.getContentDocument;
	        var isCharacterDataNode = dom.isCharacterDataNode;


	        /*----------------------------------------------------------------------------------------------------------------*/

	        if (api.features.implementsDomRange) {
	            // This is a wrapper around the browser's native DOM Range. It has two aims:
	            // - Provide workarounds for specific browser bugs
	            // - provide convenient extensions, which are inherited from Rangy's DomRange

	            (function() {
	                var rangeProto;
	                var rangeProperties = DomRange.rangeProperties;

	                function updateRangeProperties(range) {
	                    var i = rangeProperties.length, prop;
	                    while (i--) {
	                        prop = rangeProperties[i];
	                        range[prop] = range.nativeRange[prop];
	                    }
	                    // Fix for broken collapsed property in IE 9.
	                    range.collapsed = (range.startContainer === range.endContainer && range.startOffset === range.endOffset);
	                }

	                function updateNativeRange(range, startContainer, startOffset, endContainer, endOffset) {
	                    var startMoved = (range.startContainer !== startContainer || range.startOffset != startOffset);
	                    var endMoved = (range.endContainer !== endContainer || range.endOffset != endOffset);
	                    var nativeRangeDifferent = !range.equals(range.nativeRange);

	                    // Always set both boundaries for the benefit of IE9 (see issue 35)
	                    if (startMoved || endMoved || nativeRangeDifferent) {
	                        range.setEnd(endContainer, endOffset);
	                        range.setStart(startContainer, startOffset);
	                    }
	                }

	                var createBeforeAfterNodeSetter;

	                WrappedRange = function(range) {
	                    if (!range) {
	                        throw module.createError("WrappedRange: Range must be specified");
	                    }
	                    this.nativeRange = range;
	                    updateRangeProperties(this);
	                };

	                DomRange.createPrototypeRange(WrappedRange, updateNativeRange);

	                rangeProto = WrappedRange.prototype;

	                rangeProto.selectNode = function(node) {
	                    this.nativeRange.selectNode(node);
	                    updateRangeProperties(this);
	                };

	                rangeProto.cloneContents = function() {
	                    return this.nativeRange.cloneContents();
	                };

	                // Due to a long-standing Firefox bug that I have not been able to find a reliable way to detect,
	                // insertNode() is never delegated to the native range.

	                rangeProto.surroundContents = function(node) {
	                    this.nativeRange.surroundContents(node);
	                    updateRangeProperties(this);
	                };

	                rangeProto.collapse = function(isStart) {
	                    this.nativeRange.collapse(isStart);
	                    updateRangeProperties(this);
	                };

	                rangeProto.cloneRange = function() {
	                    return new WrappedRange(this.nativeRange.cloneRange());
	                };

	                rangeProto.refresh = function() {
	                    updateRangeProperties(this);
	                };

	                rangeProto.toString = function() {
	                    return this.nativeRange.toString();
	                };

	                // Create test range and node for feature detection

	                var testTextNode = document.createTextNode("test");
	                getBody(document).appendChild(testTextNode);
	                var range = document.createRange();

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Test for Firefox 2 bug that prevents moving the start of a Range to a point after its current end and
	                // correct for it

	                range.setStart(testTextNode, 0);
	                range.setEnd(testTextNode, 0);

	                try {
	                    range.setStart(testTextNode, 1);

	                    rangeProto.setStart = function(node, offset) {
	                        this.nativeRange.setStart(node, offset);
	                        updateRangeProperties(this);
	                    };

	                    rangeProto.setEnd = function(node, offset) {
	                        this.nativeRange.setEnd(node, offset);
	                        updateRangeProperties(this);
	                    };

	                    createBeforeAfterNodeSetter = function(name) {
	                        return function(node) {
	                            this.nativeRange[name](node);
	                            updateRangeProperties(this);
	                        };
	                    };

	                } catch(ex) {

	                    rangeProto.setStart = function(node, offset) {
	                        try {
	                            this.nativeRange.setStart(node, offset);
	                        } catch (ex) {
	                            this.nativeRange.setEnd(node, offset);
	                            this.nativeRange.setStart(node, offset);
	                        }
	                        updateRangeProperties(this);
	                    };

	                    rangeProto.setEnd = function(node, offset) {
	                        try {
	                            this.nativeRange.setEnd(node, offset);
	                        } catch (ex) {
	                            this.nativeRange.setStart(node, offset);
	                            this.nativeRange.setEnd(node, offset);
	                        }
	                        updateRangeProperties(this);
	                    };

	                    createBeforeAfterNodeSetter = function(name, oppositeName) {
	                        return function(node) {
	                            try {
	                                this.nativeRange[name](node);
	                            } catch (ex) {
	                                this.nativeRange[oppositeName](node);
	                                this.nativeRange[name](node);
	                            }
	                            updateRangeProperties(this);
	                        };
	                    };
	                }

	                rangeProto.setStartBefore = createBeforeAfterNodeSetter("setStartBefore", "setEndBefore");
	                rangeProto.setStartAfter = createBeforeAfterNodeSetter("setStartAfter", "setEndAfter");
	                rangeProto.setEndBefore = createBeforeAfterNodeSetter("setEndBefore", "setStartBefore");
	                rangeProto.setEndAfter = createBeforeAfterNodeSetter("setEndAfter", "setStartAfter");

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Always use DOM4-compliant selectNodeContents implementation: it's simpler and less code than testing
	                // whether the native implementation can be trusted
	                rangeProto.selectNodeContents = function(node) {
	                    this.setStartAndEnd(node, 0, dom.getNodeLength(node));
	                };

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Test for and correct WebKit bug that has the behaviour of compareBoundaryPoints round the wrong way for
	                // constants START_TO_END and END_TO_START: https://bugs.webkit.org/show_bug.cgi?id=20738

	                range.selectNodeContents(testTextNode);
	                range.setEnd(testTextNode, 3);

	                var range2 = document.createRange();
	                range2.selectNodeContents(testTextNode);
	                range2.setEnd(testTextNode, 4);
	                range2.setStart(testTextNode, 2);

	                if (range.compareBoundaryPoints(range.START_TO_END, range2) == -1 &&
	                        range.compareBoundaryPoints(range.END_TO_START, range2) == 1) {
	                    // This is the wrong way round, so correct for it

	                    rangeProto.compareBoundaryPoints = function(type, range) {
	                        range = range.nativeRange || range;
	                        if (type == range.START_TO_END) {
	                            type = range.END_TO_START;
	                        } else if (type == range.END_TO_START) {
	                            type = range.START_TO_END;
	                        }
	                        return this.nativeRange.compareBoundaryPoints(type, range);
	                    };
	                } else {
	                    rangeProto.compareBoundaryPoints = function(type, range) {
	                        return this.nativeRange.compareBoundaryPoints(type, range.nativeRange || range);
	                    };
	                }

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Test for IE deleteContents() and extractContents() bug and correct it. See issue 107.

	                var el = document.createElement("div");
	                el.innerHTML = "123";
	                var textNode = el.firstChild;
	                var body = getBody(document);
	                body.appendChild(el);

	                range.setStart(textNode, 1);
	                range.setEnd(textNode, 2);
	                range.deleteContents();

	                if (textNode.data == "13") {
	                    // Behaviour is correct per DOM4 Range so wrap the browser's implementation of deleteContents() and
	                    // extractContents()
	                    rangeProto.deleteContents = function() {
	                        this.nativeRange.deleteContents();
	                        updateRangeProperties(this);
	                    };

	                    rangeProto.extractContents = function() {
	                        var frag = this.nativeRange.extractContents();
	                        updateRangeProperties(this);
	                        return frag;
	                    };
	                } else {
	                }

	                body.removeChild(el);
	                body = null;

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Test for existence of createContextualFragment and delegate to it if it exists
	                if (util.isHostMethod(range, "createContextualFragment")) {
	                    rangeProto.createContextualFragment = function(fragmentStr) {
	                        return this.nativeRange.createContextualFragment(fragmentStr);
	                    };
	                }

	                /*--------------------------------------------------------------------------------------------------------*/

	                // Clean up
	                getBody(document).removeChild(testTextNode);

	                rangeProto.getName = function() {
	                    return "WrappedRange";
	                };

	                api.WrappedRange = WrappedRange;

	                api.createNativeRange = function(doc) {
	                    doc = getContentDocument(doc, module, "createNativeRange");
	                    return doc.createRange();
	                };
	            })();
	        }

	        if (api.features.implementsTextRange) {
	            /*
	            This is a workaround for a bug where IE returns the wrong container element from the TextRange's parentElement()
	            method. For example, in the following (where pipes denote the selection boundaries):

	            <ul id="ul"><li id="a">| a </li><li id="b"> b |</li></ul>

	            var range = document.selection.createRange();
	            alert(range.parentElement().id); // Should alert "ul" but alerts "b"

	            This method returns the common ancestor node of the following:
	            - the parentElement() of the textRange
	            - the parentElement() of the textRange after calling collapse(true)
	            - the parentElement() of the textRange after calling collapse(false)
	            */
	            var getTextRangeContainerElement = function(textRange) {
	                var parentEl = textRange.parentElement();
	                var range = textRange.duplicate();
	                range.collapse(true);
	                var startEl = range.parentElement();
	                range = textRange.duplicate();
	                range.collapse(false);
	                var endEl = range.parentElement();
	                var startEndContainer = (startEl == endEl) ? startEl : dom.getCommonAncestor(startEl, endEl);

	                return startEndContainer == parentEl ? startEndContainer : dom.getCommonAncestor(parentEl, startEndContainer);
	            };

	            var textRangeIsCollapsed = function(textRange) {
	                return textRange.compareEndPoints("StartToEnd", textRange) == 0;
	            };

	            // Gets the boundary of a TextRange expressed as a node and an offset within that node. This function started
	            // out as an improved version of code found in Tim Cameron Ryan's IERange (http://code.google.com/p/ierange/)
	            // but has grown, fixing problems with line breaks in preformatted text, adding workaround for IE TextRange
	            // bugs, handling for inputs and images, plus optimizations.
	            var getTextRangeBoundaryPosition = function(textRange, wholeRangeContainerElement, isStart, isCollapsed, startInfo) {
	                var workingRange = textRange.duplicate();
	                workingRange.collapse(isStart);
	                var containerElement = workingRange.parentElement();

	                // Sometimes collapsing a TextRange that's at the start of a text node can move it into the previous node, so
	                // check for that
	                if (!dom.isOrIsAncestorOf(wholeRangeContainerElement, containerElement)) {
	                    containerElement = wholeRangeContainerElement;
	                }


	                // Deal with nodes that cannot "contain rich HTML markup". In practice, this means form inputs, images and
	                // similar. See http://msdn.microsoft.com/en-us/library/aa703950%28VS.85%29.aspx
	                if (!containerElement.canHaveHTML) {
	                    var pos = new DomPosition(containerElement.parentNode, dom.getNodeIndex(containerElement));
	                    return {
	                        boundaryPosition: pos,
	                        nodeInfo: {
	                            nodeIndex: pos.offset,
	                            containerElement: pos.node
	                        }
	                    };
	                }

	                var workingNode = dom.getDocument(containerElement).createElement("span");

	                // Workaround for HTML5 Shiv's insane violation of document.createElement(). See Rangy issue 104 and HTML5
	                // Shiv issue 64: https://github.com/aFarkas/html5shiv/issues/64
	                if (workingNode.parentNode) {
	                    dom.removeNode(workingNode);
	                }

	                var comparison, workingComparisonType = isStart ? "StartToStart" : "StartToEnd";
	                var previousNode, nextNode, boundaryPosition, boundaryNode;
	                var start = (startInfo && startInfo.containerElement == containerElement) ? startInfo.nodeIndex : 0;
	                var childNodeCount = containerElement.childNodes.length;
	                var end = childNodeCount;

	                // Check end first. Code within the loop assumes that the endth child node of the container is definitely
	                // after the range boundary.
	                var nodeIndex = end;

	                while (true) {
	                    if (nodeIndex == childNodeCount) {
	                        containerElement.appendChild(workingNode);
	                    } else {
	                        containerElement.insertBefore(workingNode, containerElement.childNodes[nodeIndex]);
	                    }
	                    workingRange.moveToElementText(workingNode);
	                    comparison = workingRange.compareEndPoints(workingComparisonType, textRange);
	                    if (comparison == 0 || start == end) {
	                        break;
	                    } else if (comparison == -1) {
	                        if (end == start + 1) {
	                            // We know the endth child node is after the range boundary, so we must be done.
	                            break;
	                        } else {
	                            start = nodeIndex;
	                        }
	                    } else {
	                        end = (end == start + 1) ? start : nodeIndex;
	                    }
	                    nodeIndex = Math.floor((start + end) / 2);
	                    containerElement.removeChild(workingNode);
	                }


	                // We've now reached or gone past the boundary of the text range we're interested in
	                // so have identified the node we want
	                boundaryNode = workingNode.nextSibling;

	                if (comparison == -1 && boundaryNode && isCharacterDataNode(boundaryNode)) {
	                    // This is a character data node (text, comment, cdata). The working range is collapsed at the start of
	                    // the node containing the text range's boundary, so we move the end of the working range to the
	                    // boundary point and measure the length of its text to get the boundary's offset within the node.
	                    workingRange.setEndPoint(isStart ? "EndToStart" : "EndToEnd", textRange);

	                    var offset;

	                    if (/[\r\n]/.test(boundaryNode.data)) {
	                        /*
	                        For the particular case of a boundary within a text node containing rendered line breaks (within a
	                        <pre> element, for example), we need a slightly complicated approach to get the boundary's offset in
	                        IE. The facts:

	                        - Each line break is represented as \r in the text node's data/nodeValue properties
	                        - Each line break is represented as \r\n in the TextRange's 'text' property
	                        - The 'text' property of the TextRange does not contain trailing line breaks

	                        To get round the problem presented by the final fact above, we can use the fact that TextRange's
	                        moveStart() and moveEnd() methods return the actual number of characters moved, which is not
	                        necessarily the same as the number of characters it was instructed to move. The simplest approach is
	                        to use this to store the characters moved when moving both the start and end of the range to the
	                        start of the document body and subtracting the start offset from the end offset (the
	                        "move-negative-gazillion" method). However, this is extremely slow when the document is large and
	                        the range is near the end of it. Clearly doing the mirror image (i.e. moving the range boundaries to
	                        the end of the document) has the same problem.

	                        Another approach that works is to use moveStart() to move the start boundary of the range up to the
	                        end boundary one character at a time and incrementing a counter with the value returned by the
	                        moveStart() call. However, the check for whether the start boundary has reached the end boundary is
	                        expensive, so this method is slow (although unlike "move-negative-gazillion" is largely unaffected
	                        by the location of the range within the document).

	                        The approach used below is a hybrid of the two methods above. It uses the fact that a string
	                        containing the TextRange's 'text' property with each \r\n converted to a single \r character cannot
	                        be longer than the text of the TextRange, so the start of the range is moved that length initially
	                        and then a character at a time to make up for any trailing line breaks not contained in the 'text'
	                        property. This has good performance in most situations compared to the previous two methods.
	                        */
	                        var tempRange = workingRange.duplicate();
	                        var rangeLength = tempRange.text.replace(/\r\n/g, "\r").length;

	                        offset = tempRange.moveStart("character", rangeLength);
	                        while ( (comparison = tempRange.compareEndPoints("StartToEnd", tempRange)) == -1) {
	                            offset++;
	                            tempRange.moveStart("character", 1);
	                        }
	                    } else {
	                        offset = workingRange.text.length;
	                    }
	                    boundaryPosition = new DomPosition(boundaryNode, offset);
	                } else {

	                    // If the boundary immediately follows a character data node and this is the end boundary, we should favour
	                    // a position within that, and likewise for a start boundary preceding a character data node
	                    previousNode = (isCollapsed || !isStart) && workingNode.previousSibling;
	                    nextNode = (isCollapsed || isStart) && workingNode.nextSibling;
	                    if (nextNode && isCharacterDataNode(nextNode)) {
	                        boundaryPosition = new DomPosition(nextNode, 0);
	                    } else if (previousNode && isCharacterDataNode(previousNode)) {
	                        boundaryPosition = new DomPosition(previousNode, previousNode.data.length);
	                    } else {
	                        boundaryPosition = new DomPosition(containerElement, dom.getNodeIndex(workingNode));
	                    }
	                }

	                // Clean up
	                dom.removeNode(workingNode);

	                return {
	                    boundaryPosition: boundaryPosition,
	                    nodeInfo: {
	                        nodeIndex: nodeIndex,
	                        containerElement: containerElement
	                    }
	                };
	            };

	            // Returns a TextRange representing the boundary of a TextRange expressed as a node and an offset within that
	            // node. This function started out as an optimized version of code found in Tim Cameron Ryan's IERange
	            // (http://code.google.com/p/ierange/)
	            var createBoundaryTextRange = function(boundaryPosition, isStart) {
	                var boundaryNode, boundaryParent, boundaryOffset = boundaryPosition.offset;
	                var doc = dom.getDocument(boundaryPosition.node);
	                var workingNode, childNodes, workingRange = getBody(doc).createTextRange();
	                var nodeIsDataNode = isCharacterDataNode(boundaryPosition.node);

	                if (nodeIsDataNode) {
	                    boundaryNode = boundaryPosition.node;
	                    boundaryParent = boundaryNode.parentNode;
	                } else {
	                    childNodes = boundaryPosition.node.childNodes;
	                    boundaryNode = (boundaryOffset < childNodes.length) ? childNodes[boundaryOffset] : null;
	                    boundaryParent = boundaryPosition.node;
	                }

	                // Position the range immediately before the node containing the boundary
	                workingNode = doc.createElement("span");

	                // Making the working element non-empty element persuades IE to consider the TextRange boundary to be within
	                // the element rather than immediately before or after it
	                workingNode.innerHTML = "&#feff;";

	                // insertBefore is supposed to work like appendChild if the second parameter is null. However, a bug report
	                // for IERange suggests that it can crash the browser: http://code.google.com/p/ierange/issues/detail?id=12
	                if (boundaryNode) {
	                    boundaryParent.insertBefore(workingNode, boundaryNode);
	                } else {
	                    boundaryParent.appendChild(workingNode);
	                }

	                workingRange.moveToElementText(workingNode);
	                workingRange.collapse(!isStart);

	                // Clean up
	                boundaryParent.removeChild(workingNode);

	                // Move the working range to the text offset, if required
	                if (nodeIsDataNode) {
	                    workingRange[isStart ? "moveStart" : "moveEnd"]("character", boundaryOffset);
	                }

	                return workingRange;
	            };

	            /*------------------------------------------------------------------------------------------------------------*/

	            // This is a wrapper around a TextRange, providing full DOM Range functionality using rangy's DomRange as a
	            // prototype

	            WrappedTextRange = function(textRange) {
	                this.textRange = textRange;
	                this.refresh();
	            };

	            WrappedTextRange.prototype = new DomRange(document);

	            WrappedTextRange.prototype.refresh = function() {
	                var start, end, startBoundary;

	                // TextRange's parentElement() method cannot be trusted. getTextRangeContainerElement() works around that.
	                var rangeContainerElement = getTextRangeContainerElement(this.textRange);

	                if (textRangeIsCollapsed(this.textRange)) {
	                    end = start = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true,
	                        true).boundaryPosition;
	                } else {
	                    startBoundary = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, true, false);
	                    start = startBoundary.boundaryPosition;

	                    // An optimization used here is that if the start and end boundaries have the same parent element, the
	                    // search scope for the end boundary can be limited to exclude the portion of the element that precedes
	                    // the start boundary
	                    end = getTextRangeBoundaryPosition(this.textRange, rangeContainerElement, false, false,
	                        startBoundary.nodeInfo).boundaryPosition;
	                }

	                this.setStart(start.node, start.offset);
	                this.setEnd(end.node, end.offset);
	            };

	            WrappedTextRange.prototype.getName = function() {
	                return "WrappedTextRange";
	            };

	            DomRange.copyComparisonConstants(WrappedTextRange);

	            var rangeToTextRange = function(range) {
	                if (range.collapsed) {
	                    return createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
	                } else {
	                    var startRange = createBoundaryTextRange(new DomPosition(range.startContainer, range.startOffset), true);
	                    var endRange = createBoundaryTextRange(new DomPosition(range.endContainer, range.endOffset), false);
	                    var textRange = getBody( DomRange.getRangeDocument(range) ).createTextRange();
	                    textRange.setEndPoint("StartToStart", startRange);
	                    textRange.setEndPoint("EndToEnd", endRange);
	                    return textRange;
	                }
	            };

	            WrappedTextRange.rangeToTextRange = rangeToTextRange;

	            WrappedTextRange.prototype.toTextRange = function() {
	                return rangeToTextRange(this);
	            };

	            api.WrappedTextRange = WrappedTextRange;

	            // IE 9 and above have both implementations and Rangy makes both available. The next few lines sets which
	            // implementation to use by default.
	            if (!api.features.implementsDomRange || api.config.preferTextRange) {
	                // Add WrappedTextRange as the Range property of the global object to allow expression like Range.END_TO_END to work
	                var globalObj = (function(f) { return f("return this;")(); })(Function);
	                if (typeof globalObj.Range == "undefined") {
	                    globalObj.Range = WrappedTextRange;
	                }

	                api.createNativeRange = function(doc) {
	                    doc = getContentDocument(doc, module, "createNativeRange");
	                    return getBody(doc).createTextRange();
	                };

	                api.WrappedRange = WrappedTextRange;
	            }
	        }

	        api.createRange = function(doc) {
	            doc = getContentDocument(doc, module, "createRange");
	            return new api.WrappedRange(api.createNativeRange(doc));
	        };

	        api.createRangyRange = function(doc) {
	            doc = getContentDocument(doc, module, "createRangyRange");
	            return new DomRange(doc);
	        };

	        util.createAliasForDeprecatedMethod(api, "createIframeRange", "createRange");
	        util.createAliasForDeprecatedMethod(api, "createIframeRangyRange", "createRangyRange");

	        api.addShimListener(function(win) {
	            var doc = win.document;
	            if (typeof doc.createRange == "undefined") {
	                doc.createRange = function() {
	                    return api.createRange(doc);
	                };
	            }
	            doc = win = null;
	        });
	    });

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // This module creates a selection object wrapper that conforms as closely as possible to the Selection specification
	    // in the HTML Editing spec (http://dvcs.w3.org/hg/editing/raw-file/tip/editing.html#selections)
	    api.createCoreModule("WrappedSelection", ["DomRange", "WrappedRange"], function(api, module) {
	        api.config.checkSelectionRanges = true;

	        var BOOLEAN = "boolean";
	        var NUMBER = "number";
	        var dom = api.dom;
	        var util = api.util;
	        var isHostMethod = util.isHostMethod;
	        var DomRange = api.DomRange;
	        var WrappedRange = api.WrappedRange;
	        var DOMException = api.DOMException;
	        var DomPosition = dom.DomPosition;
	        var getNativeSelection;
	        var selectionIsCollapsed;
	        var features = api.features;
	        var CONTROL = "Control";
	        var getDocument = dom.getDocument;
	        var getBody = dom.getBody;
	        var rangesEqual = DomRange.rangesEqual;


	        // Utility function to support direction parameters in the API that may be a string ("backward", "backwards",
	        // "forward" or "forwards") or a Boolean (true for backwards).
	        function isDirectionBackward(dir) {
	            return (typeof dir == "string") ? /^backward(s)?$/i.test(dir) : !!dir;
	        }

	        function getWindow(win, methodName) {
	            if (!win) {
	                return window;
	            } else if (dom.isWindow(win)) {
	                return win;
	            } else if (win instanceof WrappedSelection) {
	                return win.win;
	            } else {
	                var doc = dom.getContentDocument(win, module, methodName);
	                return dom.getWindow(doc);
	            }
	        }

	        function getWinSelection(winParam) {
	            return getWindow(winParam, "getWinSelection").getSelection();
	        }

	        function getDocSelection(winParam) {
	            return getWindow(winParam, "getDocSelection").document.selection;
	        }

	        function winSelectionIsBackward(sel) {
	            var backward = false;
	            if (sel.anchorNode) {
	                backward = (dom.comparePoints(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset) == 1);
	            }
	            return backward;
	        }

	        // Test for the Range/TextRange and Selection features required
	        // Test for ability to retrieve selection
	        var implementsWinGetSelection = isHostMethod(window, "getSelection"),
	            implementsDocSelection = util.isHostObject(document, "selection");

	        features.implementsWinGetSelection = implementsWinGetSelection;
	        features.implementsDocSelection = implementsDocSelection;

	        var useDocumentSelection = implementsDocSelection && (!implementsWinGetSelection || api.config.preferTextRange);

	        if (useDocumentSelection) {
	            getNativeSelection = getDocSelection;
	            api.isSelectionValid = function(winParam) {
	                var doc = getWindow(winParam, "isSelectionValid").document, nativeSel = doc.selection;

	                // Check whether the selection TextRange is actually contained within the correct document
	                return (nativeSel.type != "None" || getDocument(nativeSel.createRange().parentElement()) == doc);
	            };
	        } else if (implementsWinGetSelection) {
	            getNativeSelection = getWinSelection;
	            api.isSelectionValid = function() {
	                return true;
	            };
	        } else {
	            module.fail("Neither document.selection or window.getSelection() detected.");
	            return false;
	        }

	        api.getNativeSelection = getNativeSelection;

	        var testSelection = getNativeSelection();

	        // In Firefox, the selection is null in an iframe with display: none. See issue #138.
	        if (!testSelection) {
	            module.fail("Native selection was null (possibly issue 138?)");
	            return false;
	        }

	        var testRange = api.createNativeRange(document);
	        var body = getBody(document);

	        // Obtaining a range from a selection
	        var selectionHasAnchorAndFocus = util.areHostProperties(testSelection,
	            ["anchorNode", "focusNode", "anchorOffset", "focusOffset"]);

	        features.selectionHasAnchorAndFocus = selectionHasAnchorAndFocus;

	        // Test for existence of native selection extend() method
	        var selectionHasExtend = isHostMethod(testSelection, "extend");
	        features.selectionHasExtend = selectionHasExtend;

	        // Test if rangeCount exists
	        var selectionHasRangeCount = (typeof testSelection.rangeCount == NUMBER);
	        features.selectionHasRangeCount = selectionHasRangeCount;

	        var selectionSupportsMultipleRanges = false;
	        var collapsedNonEditableSelectionsSupported = true;

	        var addRangeBackwardToNative = selectionHasExtend ?
	            function(nativeSelection, range) {
	                var doc = DomRange.getRangeDocument(range);
	                var endRange = api.createRange(doc);
	                endRange.collapseToPoint(range.endContainer, range.endOffset);
	                nativeSelection.addRange(getNativeRange(endRange));
	                nativeSelection.extend(range.startContainer, range.startOffset);
	            } : null;

	        if (util.areHostMethods(testSelection, ["addRange", "getRangeAt", "removeAllRanges"]) &&
	                typeof testSelection.rangeCount == NUMBER && features.implementsDomRange) {

	            (function() {
	                // Previously an iframe was used but this caused problems in some circumstances in IE, so tests are
	                // performed on the current document's selection. See issue 109.

	                // Note also that if a selection previously existed, it is wiped and later restored by these tests. This
	                // will result in the selection direction begin reversed if the original selection was backwards and the
	                // browser does not support setting backwards selections (Internet Explorer, I'm looking at you).
	                var sel = window.getSelection();
	                if (sel) {
	                    // Store the current selection
	                    var originalSelectionRangeCount = sel.rangeCount;
	                    var selectionHasMultipleRanges = (originalSelectionRangeCount > 1);
	                    var originalSelectionRanges = [];
	                    var originalSelectionBackward = winSelectionIsBackward(sel);
	                    for (var i = 0; i < originalSelectionRangeCount; ++i) {
	                        originalSelectionRanges[i] = sel.getRangeAt(i);
	                    }

	                    // Create some test elements
	                    var testEl = dom.createTestElement(document, "", false);
	                    var textNode = testEl.appendChild( document.createTextNode("\u00a0\u00a0\u00a0") );

	                    // Test whether the native selection will allow a collapsed selection within a non-editable element
	                    var r1 = document.createRange();

	                    r1.setStart(textNode, 1);
	                    r1.collapse(true);
	                    sel.removeAllRanges();
	                    sel.addRange(r1);
	                    collapsedNonEditableSelectionsSupported = (sel.rangeCount == 1);
	                    sel.removeAllRanges();

	                    // Test whether the native selection is capable of supporting multiple ranges.
	                    if (!selectionHasMultipleRanges) {
	                        // Doing the original feature test here in Chrome 36 (and presumably later versions) prints a
	                        // console error of "Discontiguous selection is not supported." that cannot be suppressed. There's
	                        // nothing we can do about this while retaining the feature test so we have to resort to a browser
	                        // sniff. I'm not happy about it. See
	                        // https://code.google.com/p/chromium/issues/detail?id=399791
	                        var chromeMatch = window.navigator.appVersion.match(/Chrome\/(.*?) /);
	                        if (chromeMatch && parseInt(chromeMatch[1]) >= 36) {
	                            selectionSupportsMultipleRanges = false;
	                        } else {
	                            var r2 = r1.cloneRange();
	                            r1.setStart(textNode, 0);
	                            r2.setEnd(textNode, 3);
	                            r2.setStart(textNode, 2);
	                            sel.addRange(r1);
	                            sel.addRange(r2);
	                            selectionSupportsMultipleRanges = (sel.rangeCount == 2);
	                        }
	                    }

	                    // Clean up
	                    dom.removeNode(testEl);
	                    sel.removeAllRanges();

	                    for (i = 0; i < originalSelectionRangeCount; ++i) {
	                        if (i == 0 && originalSelectionBackward) {
	                            if (addRangeBackwardToNative) {
	                                addRangeBackwardToNative(sel, originalSelectionRanges[i]);
	                            } else {
	                                api.warn("Rangy initialization: original selection was backwards but selection has been restored forwards because the browser does not support Selection.extend");
	                                sel.addRange(originalSelectionRanges[i]);
	                            }
	                        } else {
	                            sel.addRange(originalSelectionRanges[i]);
	                        }
	                    }
	                }
	            })();
	        }

	        features.selectionSupportsMultipleRanges = selectionSupportsMultipleRanges;
	        features.collapsedNonEditableSelectionsSupported = collapsedNonEditableSelectionsSupported;

	        // ControlRanges
	        var implementsControlRange = false, testControlRange;

	        if (body && isHostMethod(body, "createControlRange")) {
	            testControlRange = body.createControlRange();
	            if (util.areHostProperties(testControlRange, ["item", "add"])) {
	                implementsControlRange = true;
	            }
	        }
	        features.implementsControlRange = implementsControlRange;

	        // Selection collapsedness
	        if (selectionHasAnchorAndFocus) {
	            selectionIsCollapsed = function(sel) {
	                return sel.anchorNode === sel.focusNode && sel.anchorOffset === sel.focusOffset;
	            };
	        } else {
	            selectionIsCollapsed = function(sel) {
	                return sel.rangeCount ? sel.getRangeAt(sel.rangeCount - 1).collapsed : false;
	            };
	        }

	        function updateAnchorAndFocusFromRange(sel, range, backward) {
	            var anchorPrefix = backward ? "end" : "start", focusPrefix = backward ? "start" : "end";
	            sel.anchorNode = range[anchorPrefix + "Container"];
	            sel.anchorOffset = range[anchorPrefix + "Offset"];
	            sel.focusNode = range[focusPrefix + "Container"];
	            sel.focusOffset = range[focusPrefix + "Offset"];
	        }

	        function updateAnchorAndFocusFromNativeSelection(sel) {
	            var nativeSel = sel.nativeSelection;
	            sel.anchorNode = nativeSel.anchorNode;
	            sel.anchorOffset = nativeSel.anchorOffset;
	            sel.focusNode = nativeSel.focusNode;
	            sel.focusOffset = nativeSel.focusOffset;
	        }

	        function updateEmptySelection(sel) {
	            sel.anchorNode = sel.focusNode = null;
	            sel.anchorOffset = sel.focusOffset = 0;
	            sel.rangeCount = 0;
	            sel.isCollapsed = true;
	            sel._ranges.length = 0;
	        }

	        function getNativeRange(range) {
	            var nativeRange;
	            if (range instanceof DomRange) {
	                nativeRange = api.createNativeRange(range.getDocument());
	                nativeRange.setEnd(range.endContainer, range.endOffset);
	                nativeRange.setStart(range.startContainer, range.startOffset);
	            } else if (range instanceof WrappedRange) {
	                nativeRange = range.nativeRange;
	            } else if (features.implementsDomRange && (range instanceof dom.getWindow(range.startContainer).Range)) {
	                nativeRange = range;
	            }
	            return nativeRange;
	        }

	        function rangeContainsSingleElement(rangeNodes) {
	            if (!rangeNodes.length || rangeNodes[0].nodeType != 1) {
	                return false;
	            }
	            for (var i = 1, len = rangeNodes.length; i < len; ++i) {
	                if (!dom.isAncestorOf(rangeNodes[0], rangeNodes[i])) {
	                    return false;
	                }
	            }
	            return true;
	        }

	        function getSingleElementFromRange(range) {
	            var nodes = range.getNodes();
	            if (!rangeContainsSingleElement(nodes)) {
	                throw module.createError("getSingleElementFromRange: range " + range.inspect() + " did not consist of a single element");
	            }
	            return nodes[0];
	        }

	        // Simple, quick test which only needs to distinguish between a TextRange and a ControlRange
	        function isTextRange(range) {
	            return !!range && typeof range.text != "undefined";
	        }

	        function updateFromTextRange(sel, range) {
	            // Create a Range from the selected TextRange
	            var wrappedRange = new WrappedRange(range);
	            sel._ranges = [wrappedRange];

	            updateAnchorAndFocusFromRange(sel, wrappedRange, false);
	            sel.rangeCount = 1;
	            sel.isCollapsed = wrappedRange.collapsed;
	        }

	        function updateControlSelection(sel) {
	            // Update the wrapped selection based on what's now in the native selection
	            sel._ranges.length = 0;
	            if (sel.docSelection.type == "None") {
	                updateEmptySelection(sel);
	            } else {
	                var controlRange = sel.docSelection.createRange();
	                if (isTextRange(controlRange)) {
	                    // This case (where the selection type is "Control" and calling createRange() on the selection returns
	                    // a TextRange) can happen in IE 9. It happens, for example, when all elements in the selected
	                    // ControlRange have been removed from the ControlRange and removed from the document.
	                    updateFromTextRange(sel, controlRange);
	                } else {
	                    sel.rangeCount = controlRange.length;
	                    var range, doc = getDocument(controlRange.item(0));
	                    for (var i = 0; i < sel.rangeCount; ++i) {
	                        range = api.createRange(doc);
	                        range.selectNode(controlRange.item(i));
	                        sel._ranges.push(range);
	                    }
	                    sel.isCollapsed = sel.rangeCount == 1 && sel._ranges[0].collapsed;
	                    updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], false);
	                }
	            }
	        }

	        function addRangeToControlSelection(sel, range) {
	            var controlRange = sel.docSelection.createRange();
	            var rangeElement = getSingleElementFromRange(range);

	            // Create a new ControlRange containing all the elements in the selected ControlRange plus the element
	            // contained by the supplied range
	            var doc = getDocument(controlRange.item(0));
	            var newControlRange = getBody(doc).createControlRange();
	            for (var i = 0, len = controlRange.length; i < len; ++i) {
	                newControlRange.add(controlRange.item(i));
	            }
	            try {
	                newControlRange.add(rangeElement);
	            } catch (ex) {
	                throw module.createError("addRange(): Element within the specified Range could not be added to control selection (does it have layout?)");
	            }
	            newControlRange.select();

	            // Update the wrapped selection based on what's now in the native selection
	            updateControlSelection(sel);
	        }

	        var getSelectionRangeAt;

	        if (isHostMethod(testSelection, "getRangeAt")) {
	            // try/catch is present because getRangeAt() must have thrown an error in some browser and some situation.
	            // Unfortunately, I didn't write a comment about the specifics and am now scared to take it out. Let that be a
	            // lesson to us all, especially me.
	            getSelectionRangeAt = function(sel, index) {
	                try {
	                    return sel.getRangeAt(index);
	                } catch (ex) {
	                    return null;
	                }
	            };
	        } else if (selectionHasAnchorAndFocus) {
	            getSelectionRangeAt = function(sel) {
	                var doc = getDocument(sel.anchorNode);
	                var range = api.createRange(doc);
	                range.setStartAndEnd(sel.anchorNode, sel.anchorOffset, sel.focusNode, sel.focusOffset);

	                // Handle the case when the selection was selected backwards (from the end to the start in the
	                // document)
	                if (range.collapsed !== this.isCollapsed) {
	                    range.setStartAndEnd(sel.focusNode, sel.focusOffset, sel.anchorNode, sel.anchorOffset);
	                }

	                return range;
	            };
	        }

	        function WrappedSelection(selection, docSelection, win) {
	            this.nativeSelection = selection;
	            this.docSelection = docSelection;
	            this._ranges = [];
	            this.win = win;
	            this.refresh();
	        }

	        WrappedSelection.prototype = api.selectionPrototype;

	        function deleteProperties(sel) {
	            sel.win = sel.anchorNode = sel.focusNode = sel._ranges = null;
	            sel.rangeCount = sel.anchorOffset = sel.focusOffset = 0;
	            sel.detached = true;
	        }

	        var cachedRangySelections = [];

	        function actOnCachedSelection(win, action) {
	            var i = cachedRangySelections.length, cached, sel;
	            while (i--) {
	                cached = cachedRangySelections[i];
	                sel = cached.selection;
	                if (action == "deleteAll") {
	                    deleteProperties(sel);
	                } else if (cached.win == win) {
	                    if (action == "delete") {
	                        cachedRangySelections.splice(i, 1);
	                        return true;
	                    } else {
	                        return sel;
	                    }
	                }
	            }
	            if (action == "deleteAll") {
	                cachedRangySelections.length = 0;
	            }
	            return null;
	        }

	        var getSelection = function(win) {
	            // Check if the parameter is a Rangy Selection object
	            if (win && win instanceof WrappedSelection) {
	                win.refresh();
	                return win;
	            }

	            win = getWindow(win, "getNativeSelection");

	            var sel = actOnCachedSelection(win);
	            var nativeSel = getNativeSelection(win), docSel = implementsDocSelection ? getDocSelection(win) : null;
	            if (sel) {
	                sel.nativeSelection = nativeSel;
	                sel.docSelection = docSel;
	                sel.refresh();
	            } else {
	                sel = new WrappedSelection(nativeSel, docSel, win);
	                cachedRangySelections.push( { win: win, selection: sel } );
	            }
	            return sel;
	        };

	        api.getSelection = getSelection;

	        util.createAliasForDeprecatedMethod(api, "getIframeSelection", "getSelection");

	        var selProto = WrappedSelection.prototype;

	        function createControlSelection(sel, ranges) {
	            // Ensure that the selection becomes of type "Control"
	            var doc = getDocument(ranges[0].startContainer);
	            var controlRange = getBody(doc).createControlRange();
	            for (var i = 0, el, len = ranges.length; i < len; ++i) {
	                el = getSingleElementFromRange(ranges[i]);
	                try {
	                    controlRange.add(el);
	                } catch (ex) {
	                    throw module.createError("setRanges(): Element within one of the specified Ranges could not be added to control selection (does it have layout?)");
	                }
	            }
	            controlRange.select();

	            // Update the wrapped selection based on what's now in the native selection
	            updateControlSelection(sel);
	        }

	        // Selecting a range
	        if (!useDocumentSelection && selectionHasAnchorAndFocus && util.areHostMethods(testSelection, ["removeAllRanges", "addRange"])) {
	            selProto.removeAllRanges = function() {
	                this.nativeSelection.removeAllRanges();
	                updateEmptySelection(this);
	            };

	            var addRangeBackward = function(sel, range) {
	                addRangeBackwardToNative(sel.nativeSelection, range);
	                sel.refresh();
	            };

	            if (selectionHasRangeCount) {
	                selProto.addRange = function(range, direction) {
	                    if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
	                        addRangeToControlSelection(this, range);
	                    } else {
	                        if (isDirectionBackward(direction) && selectionHasExtend) {
	                            addRangeBackward(this, range);
	                        } else {
	                            var previousRangeCount;
	                            if (selectionSupportsMultipleRanges) {
	                                previousRangeCount = this.rangeCount;
	                            } else {
	                                this.removeAllRanges();
	                                previousRangeCount = 0;
	                            }
	                            // Clone the native range so that changing the selected range does not affect the selection.
	                            // This is contrary to the spec but is the only way to achieve consistency between browsers. See
	                            // issue 80.
	                            var clonedNativeRange = getNativeRange(range).cloneRange();
	                            try {
	                                this.nativeSelection.addRange(clonedNativeRange);
	                            } catch (ex) {
	                            }

	                            // Check whether adding the range was successful
	                            this.rangeCount = this.nativeSelection.rangeCount;

	                            if (this.rangeCount == previousRangeCount + 1) {
	                                // The range was added successfully

	                                // Check whether the range that we added to the selection is reflected in the last range extracted from
	                                // the selection
	                                if (api.config.checkSelectionRanges) {
	                                    var nativeRange = getSelectionRangeAt(this.nativeSelection, this.rangeCount - 1);
	                                    if (nativeRange && !rangesEqual(nativeRange, range)) {
	                                        // Happens in WebKit with, for example, a selection placed at the start of a text node
	                                        range = new WrappedRange(nativeRange);
	                                    }
	                                }
	                                this._ranges[this.rangeCount - 1] = range;
	                                updateAnchorAndFocusFromRange(this, range, selectionIsBackward(this.nativeSelection));
	                                this.isCollapsed = selectionIsCollapsed(this);
	                            } else {
	                                // The range was not added successfully. The simplest thing is to refresh
	                                this.refresh();
	                            }
	                        }
	                    }
	                };
	            } else {
	                selProto.addRange = function(range, direction) {
	                    if (isDirectionBackward(direction) && selectionHasExtend) {
	                        addRangeBackward(this, range);
	                    } else {
	                        this.nativeSelection.addRange(getNativeRange(range));
	                        this.refresh();
	                    }
	                };
	            }

	            selProto.setRanges = function(ranges) {
	                if (implementsControlRange && implementsDocSelection && ranges.length > 1) {
	                    createControlSelection(this, ranges);
	                } else {
	                    this.removeAllRanges();
	                    for (var i = 0, len = ranges.length; i < len; ++i) {
	                        this.addRange(ranges[i]);
	                    }
	                }
	            };
	        } else if (isHostMethod(testSelection, "empty") && isHostMethod(testRange, "select") &&
	                   implementsControlRange && useDocumentSelection) {

	            selProto.removeAllRanges = function() {
	                // Added try/catch as fix for issue #21
	                try {
	                    this.docSelection.empty();

	                    // Check for empty() not working (issue #24)
	                    if (this.docSelection.type != "None") {
	                        // Work around failure to empty a control selection by instead selecting a TextRange and then
	                        // calling empty()
	                        var doc;
	                        if (this.anchorNode) {
	                            doc = getDocument(this.anchorNode);
	                        } else if (this.docSelection.type == CONTROL) {
	                            var controlRange = this.docSelection.createRange();
	                            if (controlRange.length) {
	                                doc = getDocument( controlRange.item(0) );
	                            }
	                        }
	                        if (doc) {
	                            var textRange = getBody(doc).createTextRange();
	                            textRange.select();
	                            this.docSelection.empty();
	                        }
	                    }
	                } catch(ex) {}
	                updateEmptySelection(this);
	            };

	            selProto.addRange = function(range) {
	                if (this.docSelection.type == CONTROL) {
	                    addRangeToControlSelection(this, range);
	                } else {
	                    api.WrappedTextRange.rangeToTextRange(range).select();
	                    this._ranges[0] = range;
	                    this.rangeCount = 1;
	                    this.isCollapsed = this._ranges[0].collapsed;
	                    updateAnchorAndFocusFromRange(this, range, false);
	                }
	            };

	            selProto.setRanges = function(ranges) {
	                this.removeAllRanges();
	                var rangeCount = ranges.length;
	                if (rangeCount > 1) {
	                    createControlSelection(this, ranges);
	                } else if (rangeCount) {
	                    this.addRange(ranges[0]);
	                }
	            };
	        } else {
	            module.fail("No means of selecting a Range or TextRange was found");
	            return false;
	        }

	        selProto.getRangeAt = function(index) {
	            if (index < 0 || index >= this.rangeCount) {
	                throw new DOMException("INDEX_SIZE_ERR");
	            } else {
	                // Clone the range to preserve selection-range independence. See issue 80.
	                return this._ranges[index].cloneRange();
	            }
	        };

	        var refreshSelection;

	        if (useDocumentSelection) {
	            refreshSelection = function(sel) {
	                var range;
	                if (api.isSelectionValid(sel.win)) {
	                    range = sel.docSelection.createRange();
	                } else {
	                    range = getBody(sel.win.document).createTextRange();
	                    range.collapse(true);
	                }

	                if (sel.docSelection.type == CONTROL) {
	                    updateControlSelection(sel);
	                } else if (isTextRange(range)) {
	                    updateFromTextRange(sel, range);
	                } else {
	                    updateEmptySelection(sel);
	                }
	            };
	        } else if (isHostMethod(testSelection, "getRangeAt") && typeof testSelection.rangeCount == NUMBER) {
	            refreshSelection = function(sel) {
	                if (implementsControlRange && implementsDocSelection && sel.docSelection.type == CONTROL) {
	                    updateControlSelection(sel);
	                } else {
	                    sel._ranges.length = sel.rangeCount = sel.nativeSelection.rangeCount;
	                    if (sel.rangeCount) {
	                        for (var i = 0, len = sel.rangeCount; i < len; ++i) {
	                            sel._ranges[i] = new api.WrappedRange(sel.nativeSelection.getRangeAt(i));
	                        }
	                        updateAnchorAndFocusFromRange(sel, sel._ranges[sel.rangeCount - 1], selectionIsBackward(sel.nativeSelection));
	                        sel.isCollapsed = selectionIsCollapsed(sel);
	                    } else {
	                        updateEmptySelection(sel);
	                    }
	                }
	            };
	        } else if (selectionHasAnchorAndFocus && typeof testSelection.isCollapsed == BOOLEAN && typeof testRange.collapsed == BOOLEAN && features.implementsDomRange) {
	            refreshSelection = function(sel) {
	                var range, nativeSel = sel.nativeSelection;
	                if (nativeSel.anchorNode) {
	                    range = getSelectionRangeAt(nativeSel, 0);
	                    sel._ranges = [range];
	                    sel.rangeCount = 1;
	                    updateAnchorAndFocusFromNativeSelection(sel);
	                    sel.isCollapsed = selectionIsCollapsed(sel);
	                } else {
	                    updateEmptySelection(sel);
	                }
	            };
	        } else {
	            module.fail("No means of obtaining a Range or TextRange from the user's selection was found");
	            return false;
	        }

	        selProto.refresh = function(checkForChanges) {
	            var oldRanges = checkForChanges ? this._ranges.slice(0) : null;
	            var oldAnchorNode = this.anchorNode, oldAnchorOffset = this.anchorOffset;

	            refreshSelection(this);
	            if (checkForChanges) {
	                // Check the range count first
	                var i = oldRanges.length;
	                if (i != this._ranges.length) {
	                    return true;
	                }

	                // Now check the direction. Checking the anchor position is the same is enough since we're checking all the
	                // ranges after this
	                if (this.anchorNode != oldAnchorNode || this.anchorOffset != oldAnchorOffset) {
	                    return true;
	                }

	                // Finally, compare each range in turn
	                while (i--) {
	                    if (!rangesEqual(oldRanges[i], this._ranges[i])) {
	                        return true;
	                    }
	                }
	                return false;
	            }
	        };

	        // Removal of a single range
	        var removeRangeManually = function(sel, range) {
	            var ranges = sel.getAllRanges();
	            sel.removeAllRanges();
	            for (var i = 0, len = ranges.length; i < len; ++i) {
	                if (!rangesEqual(range, ranges[i])) {
	                    sel.addRange(ranges[i]);
	                }
	            }
	            if (!sel.rangeCount) {
	                updateEmptySelection(sel);
	            }
	        };

	        if (implementsControlRange && implementsDocSelection) {
	            selProto.removeRange = function(range) {
	                if (this.docSelection.type == CONTROL) {
	                    var controlRange = this.docSelection.createRange();
	                    var rangeElement = getSingleElementFromRange(range);

	                    // Create a new ControlRange containing all the elements in the selected ControlRange minus the
	                    // element contained by the supplied range
	                    var doc = getDocument(controlRange.item(0));
	                    var newControlRange = getBody(doc).createControlRange();
	                    var el, removed = false;
	                    for (var i = 0, len = controlRange.length; i < len; ++i) {
	                        el = controlRange.item(i);
	                        if (el !== rangeElement || removed) {
	                            newControlRange.add(controlRange.item(i));
	                        } else {
	                            removed = true;
	                        }
	                    }
	                    newControlRange.select();

	                    // Update the wrapped selection based on what's now in the native selection
	                    updateControlSelection(this);
	                } else {
	                    removeRangeManually(this, range);
	                }
	            };
	        } else {
	            selProto.removeRange = function(range) {
	                removeRangeManually(this, range);
	            };
	        }

	        // Detecting if a selection is backward
	        var selectionIsBackward;
	        if (!useDocumentSelection && selectionHasAnchorAndFocus && features.implementsDomRange) {
	            selectionIsBackward = winSelectionIsBackward;

	            selProto.isBackward = function() {
	                return selectionIsBackward(this);
	            };
	        } else {
	            selectionIsBackward = selProto.isBackward = function() {
	                return false;
	            };
	        }

	        // Create an alias for backwards compatibility. From 1.3, everything is "backward" rather than "backwards"
	        selProto.isBackwards = selProto.isBackward;

	        // Selection stringifier
	        // This is conformant to the old HTML5 selections draft spec but differs from WebKit and Mozilla's implementation.
	        // The current spec does not yet define this method.
	        selProto.toString = function() {
	            var rangeTexts = [];
	            for (var i = 0, len = this.rangeCount; i < len; ++i) {
	                rangeTexts[i] = "" + this._ranges[i];
	            }
	            return rangeTexts.join("");
	        };

	        function assertNodeInSameDocument(sel, node) {
	            if (sel.win.document != getDocument(node)) {
	                throw new DOMException("WRONG_DOCUMENT_ERR");
	            }
	        }

	        // No current browser conforms fully to the spec for this method, so Rangy's own method is always used
	        selProto.collapse = function(node, offset) {
	            assertNodeInSameDocument(this, node);
	            var range = api.createRange(node);
	            range.collapseToPoint(node, offset);
	            this.setSingleRange(range);
	            this.isCollapsed = true;
	        };

	        selProto.collapseToStart = function() {
	            if (this.rangeCount) {
	                var range = this._ranges[0];
	                this.collapse(range.startContainer, range.startOffset);
	            } else {
	                throw new DOMException("INVALID_STATE_ERR");
	            }
	        };

	        selProto.collapseToEnd = function() {
	            if (this.rangeCount) {
	                var range = this._ranges[this.rangeCount - 1];
	                this.collapse(range.endContainer, range.endOffset);
	            } else {
	                throw new DOMException("INVALID_STATE_ERR");
	            }
	        };

	        // The spec is very specific on how selectAllChildren should be implemented and not all browsers implement it as
	        // specified so the native implementation is never used by Rangy.
	        selProto.selectAllChildren = function(node) {
	            assertNodeInSameDocument(this, node);
	            var range = api.createRange(node);
	            range.selectNodeContents(node);
	            this.setSingleRange(range);
	        };

	        selProto.deleteFromDocument = function() {
	            // Sepcial behaviour required for IE's control selections
	            if (implementsControlRange && implementsDocSelection && this.docSelection.type == CONTROL) {
	                var controlRange = this.docSelection.createRange();
	                var element;
	                while (controlRange.length) {
	                    element = controlRange.item(0);
	                    controlRange.remove(element);
	                    dom.removeNode(element);
	                }
	                this.refresh();
	            } else if (this.rangeCount) {
	                var ranges = this.getAllRanges();
	                if (ranges.length) {
	                    this.removeAllRanges();
	                    for (var i = 0, len = ranges.length; i < len; ++i) {
	                        ranges[i].deleteContents();
	                    }
	                    // The spec says nothing about what the selection should contain after calling deleteContents on each
	                    // range. Firefox moves the selection to where the final selected range was, so we emulate that
	                    this.addRange(ranges[len - 1]);
	                }
	            }
	        };

	        // The following are non-standard extensions
	        selProto.eachRange = function(func, returnValue) {
	            for (var i = 0, len = this._ranges.length; i < len; ++i) {
	                if ( func( this.getRangeAt(i) ) ) {
	                    return returnValue;
	                }
	            }
	        };

	        selProto.getAllRanges = function() {
	            var ranges = [];
	            this.eachRange(function(range) {
	                ranges.push(range);
	            });
	            return ranges;
	        };

	        selProto.setSingleRange = function(range, direction) {
	            this.removeAllRanges();
	            this.addRange(range, direction);
	        };

	        selProto.callMethodOnEachRange = function(methodName, params) {
	            var results = [];
	            this.eachRange( function(range) {
	                results.push( range[methodName].apply(range, params || []) );
	            } );
	            return results;
	        };

	        function createStartOrEndSetter(isStart) {
	            return function(node, offset) {
	                var range;
	                if (this.rangeCount) {
	                    range = this.getRangeAt(0);
	                    range["set" + (isStart ? "Start" : "End")](node, offset);
	                } else {
	                    range = api.createRange(this.win.document);
	                    range.setStartAndEnd(node, offset);
	                }
	                this.setSingleRange(range, this.isBackward());
	            };
	        }

	        selProto.setStart = createStartOrEndSetter(true);
	        selProto.setEnd = createStartOrEndSetter(false);

	        // Add select() method to Range prototype. Any existing selection will be removed.
	        api.rangePrototype.select = function(direction) {
	            getSelection( this.getDocument() ).setSingleRange(this, direction);
	        };

	        selProto.changeEachRange = function(func) {
	            var ranges = [];
	            var backward = this.isBackward();

	            this.eachRange(function(range) {
	                func(range);
	                ranges.push(range);
	            });

	            this.removeAllRanges();
	            if (backward && ranges.length == 1) {
	                this.addRange(ranges[0], "backward");
	            } else {
	                this.setRanges(ranges);
	            }
	        };

	        selProto.containsNode = function(node, allowPartial) {
	            return this.eachRange( function(range) {
	                return range.containsNode(node, allowPartial);
	            }, true ) || false;
	        };

	        selProto.getBookmark = function(containerNode) {
	            return {
	                backward: this.isBackward(),
	                rangeBookmarks: this.callMethodOnEachRange("getBookmark", [containerNode])
	            };
	        };

	        selProto.moveToBookmark = function(bookmark) {
	            var selRanges = [];
	            for (var i = 0, rangeBookmark, range; rangeBookmark = bookmark.rangeBookmarks[i++]; ) {
	                range = api.createRange(this.win);
	                range.moveToBookmark(rangeBookmark);
	                selRanges.push(range);
	            }
	            if (bookmark.backward) {
	                this.setSingleRange(selRanges[0], "backward");
	            } else {
	                this.setRanges(selRanges);
	            }
	        };

	        selProto.saveRanges = function() {
	            return {
	                backward: this.isBackward(),
	                ranges: this.callMethodOnEachRange("cloneRange")
	            };
	        };

	        selProto.restoreRanges = function(selRanges) {
	            this.removeAllRanges();
	            for (var i = 0, range; range = selRanges.ranges[i]; ++i) {
	                this.addRange(range, (selRanges.backward && i == 0));
	            }
	        };

	        selProto.toHtml = function() {
	            var rangeHtmls = [];
	            this.eachRange(function(range) {
	                rangeHtmls.push( DomRange.toHtml(range) );
	            });
	            return rangeHtmls.join("");
	        };

	        if (features.implementsTextRange) {
	            selProto.getNativeTextRange = function() {
	                var sel, textRange;
	                if ( (sel = this.docSelection) ) {
	                    var range = sel.createRange();
	                    if (isTextRange(range)) {
	                        return range;
	                    } else {
	                        throw module.createError("getNativeTextRange: selection is a control selection");
	                    }
	                } else if (this.rangeCount > 0) {
	                    return api.WrappedTextRange.rangeToTextRange( this.getRangeAt(0) );
	                } else {
	                    throw module.createError("getNativeTextRange: selection contains no range");
	                }
	            };
	        }

	        function inspect(sel) {
	            var rangeInspects = [];
	            var anchor = new DomPosition(sel.anchorNode, sel.anchorOffset);
	            var focus = new DomPosition(sel.focusNode, sel.focusOffset);
	            var name = (typeof sel.getName == "function") ? sel.getName() : "Selection";

	            if (typeof sel.rangeCount != "undefined") {
	                for (var i = 0, len = sel.rangeCount; i < len; ++i) {
	                    rangeInspects[i] = DomRange.inspect(sel.getRangeAt(i));
	                }
	            }
	            return "[" + name + "(Ranges: " + rangeInspects.join(", ") +
	                    ")(anchor: " + anchor.inspect() + ", focus: " + focus.inspect() + "]";
	        }

	        selProto.getName = function() {
	            return "WrappedSelection";
	        };

	        selProto.inspect = function() {
	            return inspect(this);
	        };

	        selProto.detach = function() {
	            actOnCachedSelection(this.win, "delete");
	            deleteProperties(this);
	        };

	        WrappedSelection.detachAll = function() {
	            actOnCachedSelection(null, "deleteAll");
	        };

	        WrappedSelection.inspect = inspect;
	        WrappedSelection.isDirectionBackward = isDirectionBackward;

	        api.Selection = WrappedSelection;

	        api.selectionPrototype = selProto;

	        api.addShimListener(function(win) {
	            if (typeof win.getSelection == "undefined") {
	                win.getSelection = function() {
	                    return getSelection(win);
	                };
	            }
	            win = null;
	        });
	    });
	    

	    /*----------------------------------------------------------------------------------------------------------------*/

	    // Wait for document to load before initializing
	    var docReady = false;

	    var loadHandler = function(e) {
	        if (!docReady) {
	            docReady = true;
	            if (!api.initialized && api.config.autoInitialize) {
	                init();
	            }
	        }
	    };

	    if (isBrowser) {
	        // Test whether the document has already been loaded and initialize immediately if so
	        if (document.readyState == "complete") {
	            loadHandler();
	        } else {
	            if (isHostMethod(document, "addEventListener")) {
	                document.addEventListener("DOMContentLoaded", loadHandler, false);
	            }

	            // Add a fallback in case the DOMContentLoaded event isn't supported
	            addListener(window, "load", loadHandler);
	        }
	    }

	    return api;
	}, this);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     (c) 2012 Onsi Fakhouri
	//     Cocktail.js may be freely distributed under the MIT license.
	//     http://github.com/onsi/cocktail
	(function(factory) {
	    if ("function" === 'function' && typeof module !== 'undefined' && module.exports) {
	        module.exports = factory(__webpack_require__(4));
	    } else if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        this.Cocktail = factory(_);
	    }
	}(function (_) {

	    var Cocktail = {};

	    Cocktail.mixins = {};

	    Cocktail.mixin = function mixin(klass) {
	        var mixins = _.chain(arguments).toArray().slice(1).flatten().value();
	        // Allows mixing into the constructor's prototype or the dynamic instance
	        var obj = klass.prototype || klass;

	        var collisions = {};

	        _.each(mixins, function(mixin) {
	            if (_.isString(mixin)) {
	                mixin = Cocktail.mixins[mixin];
	            }
	            _.each(mixin, function(value, key) {
	                if (_.isFunction(value)) {
	                    // If the mixer already has that exact function reference
	                    // Note: this would occur on an accidental mixin of the same base
	                    if (obj[key] === value) return;

	                    if (obj[key]) {
	                        // Avoid accessing built-in properties like constructor (#39)
	                        collisions[key] = collisions.hasOwnProperty(key) ? collisions[key] : [obj[key]];
	                        collisions[key].push(value);
	                    }
	                    obj[key] = value;
	                } else if (_.isArray(value)) {
	                    obj[key] = _.union(value, obj[key] || []);
	                } else if (_.isObject(value)) {
	                    obj[key] = _.extend({}, value, obj[key] || {});
	                } else if (!(key in obj)) {
	                    obj[key] = value;
	                }
	            });
	        });

	        _.each(collisions, function(propertyValues, propertyName) {
	            obj[propertyName] = function() {
	                var that = this,
	                    args = arguments,
	                    returnValue;

	                _.each(propertyValues, function(value) {
	                    var returnedValue = _.isFunction(value) ? value.apply(that, args) : value;
	                    returnValue = (typeof returnedValue === 'undefined' ? returnValue : returnedValue);
	                });

	                return returnValue;
	            };
	        });

	        return klass;
	    };

	    var originalExtend;

	    Cocktail.patch = function patch(Backbone) {
	        originalExtend = Backbone.Model.extend;

	        var extend = function(protoProps, classProps) {
	            var klass = originalExtend.call(this, protoProps, classProps);

	            var mixins = klass.prototype.mixins;
	            if (mixins && klass.prototype.hasOwnProperty('mixins')) {
	                Cocktail.mixin(klass, mixins);
	            }

	            return klass;
	        };

	        _.each([Backbone.Model, Backbone.Collection, Backbone.Router, Backbone.View], function(klass) {
	            klass.mixin = function mixin() {
	                Cocktail.mixin(this, _.toArray(arguments));
	            };

	            klass.extend = extend;
	        });
	    };

	    Cocktail.unpatch = function unpatch(Backbone) {
	        _.each([Backbone.Model, Backbone.Collection, Backbone.Router, Backbone.View], function(klass) {
	            klass.mixin = undefined;
	            klass.extend = originalExtend;
	        });
	    };

	    return Cocktail;
	}));


/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		// useful key codes
		ctrlKey: [17, 224, 91, 93],
		vKey: 86,
		cKey: 67,
		xKey: 88,
		backspaceKey: 8,
		deleteKey: 46,
		enterKey: 13,
		spaceKey: 32,
		tabKey: 9,
		escKey: 27,

		keyIndex: {
			17: 'ctrl/cmd',
			224: 'ctrl/cmd',
			91: 'ctrl/cmd',
			93: 'ctrl/cmd',
			86: 'v',
			67: 'c',
			88: 'x',
			8: 'backspace',
			46: 'delete',
			13: 'enter',
			32: 'space',
			9: 'tab',
			27: 'escape'
		}
		};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {

		onAttach: function onAttach() {
			this.detectClickouts();
		},

		onBeforeDestroy: function onBeforeDestroy() {
			$(document).off('.' + this.cid);
		},

		detectClickouts: function detectClickouts() {
			var _this = this;

			$(document).on('mousedown.' + this.cid, function (e) {
				var container = _this.$el;
				// if the target of the click isn't the container nor a descendant of the container
				if (!container.is(e.target) && container.has(e.target).length === 0) {
					_this.triggerMethod('click:out');
				}
			});
		}
		};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _backbone = __webpack_require__(3);

	var _backbone2 = __webpack_require__(2);

	var _insert = __webpack_require__(19);

	var _insert2 = _interopRequireDefault(_insert);

	var _media = __webpack_require__(20);

	var _media2 = _interopRequireDefault(_media);

	var _backbone3 = __webpack_require__(15);

	var _backbone4 = _interopRequireDefault(_backbone3);

	var _clickout = __webpack_require__(17);

	var _clickout2 = _interopRequireDefault(_clickout);

	var _file = __webpack_require__(23);

	var _notify = __webpack_require__(24);

	var _uid = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// TODO: when content height changes, instead of triggering
	//       `postHeightChanged`, just call positionSelf()


	// import figureSectionTpl from './templates/figure.section';
	var InsertMediaView = _backbone2.ItemView.extend({
		template: _insert2.default,

		className: 'typely-insert-media',

		ui: {
			showTooltipButton: '.show-tooltip-button',
			tooltip: '.tooltip',
			tooltipList: '.tooltip .tooltip-list',
			tooltipListItem: '.tooltip .tooltip-list li',
			mediaType: '[data-media-type]',
			fileInput: 'input[type="file"]'
		},

		events: {
			'mouseup @ui.showTooltipButton': 'killEvent',
			'mousedown @ui.showTooltipButton': 'handleTooltipButtonClick',
			'mouseup @ui.mediaType': 'killEvent',
			'mousedown @ui.mediaType': 'handleMediaTypeClick'
		},

		initialize: function initialize() {
			this.maxFileSize = this.getOption('maxFileSize');
			this.contentEl = this.getOption('contentEl');
		},

		onRender: function onRender() {
			this.triggerMethod('hide');
		},

		onAttach: function onAttach() {
			this.saveSiblingRefsToDOM();
			this.setTooltipWidth();
		},

		onClickOut: function onClickOut() {
			this.triggerMethod('hide:tooltip');
		},

		onHookDetached: function onHookDetached() {
			this.triggerMethod('hide');
		},

		onReveal: function onReveal() {
			this.$el.removeClass('hidden');
		},

		onHide: function onHide() {
			this.$el.addClass('hidden');
		},

		onShowTooltip: function onShowTooltip() {
			if (this.ui.tooltip.hasClass('hidden')) {
				this.ui.tooltip.removeClass('hidden');
				this.triggerMethod('media:tooltip:shown');
			}
		},

		onHideTooltip: function onHideTooltip() {
			if (!this.ui.tooltip.hasClass('hidden')) {
				this.ui.tooltip.addClass('hidden');
				this.triggerMethod('media:tooltip:hidden');
			}
		},

		onToggleTooltip: function onToggleTooltip() {
			this.ui.tooltip.toggleClass('hidden');
			if (this.ui.tooltip.hasClass('hidden')) {
				this.triggerMethod('media:tooltip:hidden');
			} else {
				this.triggerMethod('media:tooltip:shown');
			}
		},

		onShowAfterHook: function onShowAfterHook(hookEl) {
			this.hookEl = hookEl;
			this.prevElName = this.hookEl.attr('name');
			this.nextElName = this.hookEl.next(':not(.non-section)').length > 0 ? this.hookEl.next().attr('name') : -1;

			this.positionSelf(hookEl, this.contentEl);
			this.triggerMethod('reveal');
		},

		onUpdatePosition: function onUpdatePosition() {
			this.positionSelf(this.hookEl, this.contentEl);
		},

		positionSelf: function positionSelf(hookEl, parentEl) {
			if (!hookEl || !_jquery2.default.contains(document, hookEl[0])) {
				this.triggerMethod('hook:detached');
				return;
			}

			var hookPosition = hookEl.position();
			var parentElPosition = parentEl.position();

			var left = 0;

			var top = parentElPosition.top + hookPosition.top + hookEl.outerHeight(true) - parseInt(hookEl.css('margin-bottom'));

			// minor alignment corrections
			if (hookEl[0].nodeName === 'H1') {
				// top -= 7;
			} else if (hookEl[0].nodeName === 'BLOCKQUOTE') {
				top += 7;
			} else {
				top += 3;
			}

			this.$el.css({
				left: left + 'px',
				top: top + 'px'
			});
		},

		saveSiblingRefsToDOM: function saveSiblingRefsToDOM() {
			this.$el.attr('data-ref-prev', this.prevElName);
			this.$el.attr('data-ref-next', this.nextElName);
		},

		handleTooltipButtonClick: function handleTooltipButtonClick(e) {
			this.killEvent(e);
			this.triggerMethod('toggle:tooltip');
			return false;
		},

		killEvent: function killEvent(e) {
			e.preventDefault();
			e.stopPropagation();
		},

		setTooltipWidth: function setTooltipWidth() {
			var itemWidth = this.ui.tooltipListItem.width();
			var itemCount = this.ui.tooltipListItem.length;
			// this.ui.tooltip.width(itemWidth * itemCount);
			this.ui.tooltipList.width(itemWidth * itemCount);
		},

		handleMediaTypeClick: function handleMediaTypeClick(e) {
			this.killEvent(e);
			var type = (0, _jquery2.default)(e.currentTarget).attr('data-media-type');
			// handle single image input ourselves
			if (type === 'image') {
				this.handleSingleImageInput();
			}
			// notify parent (editor view) to handle all other media input
			else {
					this.triggerMethod('hide:tooltip');
					this.triggerMethod('request:media:input', type, this.hookEl);
				}
		},

		handleSingleImageInput: function handleSingleImageInput() {
			var _this = this;

			(0, _file.requestSingleFileInput)().then(function (file) {
				if (!_this.isValidImage(file)) {
					// this.destroy();
					return;
				}
				_this.displaySingleImage({
					file: file,
					hookEl: _this.hookEl
				});
			});
		},

		isValidImage: function isValidImage(file) {
			// make sure the file is an image
			if (!/jp(e)?g|png|gif/i.test(file.type)) {
				(0, _notify.notify)({
					type: 'warn',
					title: 'Invalid Image',
					body: 'Image type: ' + file.type + ' is invalid. Only jpg, png and gif are accepted'
				});
				return false;
			}
			// make sure selected file size does not exceed threshold
			if (file.size > this.maxFileSize) {
				(0, _notify.notify)({
					type: 'warn',
					title: 'Image Size Error',
					body: 'Image size should not exceed ' + this.maxFileSize
				});
				return false;
			}
			return true;
		},

		displaySingleImage: function displaySingleImage(_ref) {
			var _this2 = this;

			var file = _ref.file;
			var hookEl = _ref.hookEl;

			var fr = new FileReader();

			// install event handler for the 'load' event, which fires at completion of the read
			fr.onload = function () {
				var img = new Image();
				img.onload = function () {
					// prepare view
					var imageView = new _media2.default({
						model: new _backbone.Model({
							src: img.src,
							id: (0, _uid.generateImageUID)(),
							type: file.type,
							captionPlaceholder: 'Click to enter a caption'
						}),
						name: (0, _uid.generateSectionUID)()
					});
					// render it
					imageView.render();
					// insert view $el after hookEl
					hookEl.after(imageView.$el);
					// trigger event (to notify the editor parent view)
					_this2.triggerMethod('inserted:media', {
						mediaView: imageView,
						hookEl: hookEl
					});
					// hide tooltip
					_this2.triggerMethod('hide:tooltip');
				};
				// will force the browser to load image & when done will fire 'load' on image
				img.src = fr.result;
			};
			// read the file (will fire 'load' on FileReader when done)
			fr.readAsDataURL(file);
		}

	});

	_backbone4.default.mixin(InsertMediaView, _clickout2.default);

	exports.default = InsertMediaView;

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<div class="show-tooltip-button" contenteditable="false">Insert Media</div>\n\n<div class="typely-tooltip tooltip hidden">\n	<ul class="tooltip-list media-list">\n		<li data-media-type="image">\n			<i class="icon-image2"></i>\n		</li>\n		<li data-media-type="video">\n			<i class="icon-video-camera2"></i>\n		</li>\n		<li data-media-type="slideshow">\n			<i class="icon-images2"></i>\n		</li>\n		<li data-media-type="audio">\n			<i class="icon-volume-medium"></i>\n		</li>\n	</ul>\n\n	<div class="tooltip-arrow">\n		<span class="icon"></span>\n	</div>\n</div>\n';

	}
	return __p
	}

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _media = __webpack_require__(21);

	var _media2 = _interopRequireDefault(_media);

	var _image = __webpack_require__(22);

	var _image2 = _interopRequireDefault(_image);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ImageView = _media2.default.extend({

		template: _image2.default,
		tagName: 'figure',

		ui: {
			'image': 'img'
		},

		events: {
			'mouseenter': 'showActionsOverlay',
			'mouseleave': 'hideActionsOverlay'
		},

		showActionsOverlay: function showActionsOverlay() {
			// console.log('show overlay!');
		},

		hideActionsOverlay: function hideActionsOverlay() {
			// console.log('hide overlay!');
		}
	});

		exports.default = ImageView;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone = __webpack_require__(2);

	var MediaView = _backbone.ItemView.extend({

		className: 'post-section media-element',

		attributes: function attributes() {
			return {
				name: this.getOption('name'),
				contenteditable: false
			};
		},

		initialize: function initialize() {
			this.name = this.getOption('name');
		}
	});

		exports.default = MediaView;

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<img src="' +
	((__t = ( src )) == null ? '' : __t) +
	'" id="' +
	((__t = ( id )) == null ? '' : __t) +
	'" data-type="' +
	((__t = ( type )) == null ? '' : __t) +
	'"/>\n<figcaption contenteditable="true" data-empty="true" class="caption editable">' +
	((__t = ( captionPlaceholder )) == null ? '' : __t) +
	'</figcaption>\n';

	}
	return __p
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.requestSingleFileInput = undefined;

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var requestSingleFileInput = function requestSingleFileInput() {

		var deferred = _jquery2.default.Deferred();

		var input = (0, _jquery2.default)('<input type="file">').css({
			'position': 'absolute',
			'top': 0,
			'left': 0,
			'width': 0,
			'height': 0,
			'visibility': 'hidden',
			'z-index': -1
		});

		if (!input[0].files) {
			deferred.reject({
				error: 'This browser doesn\'t seem to support the `files` property of file inputs.'
			});
			return;
		}

		input.appendTo('body');

		input.on('change', function (e) {
			deferred.resolve(input[0].files[0]);
			input.remove(); // chrome won't fire `change` event if same image is selected twice
		});

		input.trigger('click');

		return deferred.promise();
	};

	exports.requestSingleFileInput = requestSingleFileInput;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var notify = function notify() {
		var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

		var _ref$type = _ref.type;
		var type = _ref$type === undefined ? 'log' : _ref$type;
		var _ref$title = _ref.title;
		var title = _ref$title === undefined ? 'Hello' : _ref$title;
		var _ref$body = _ref.body;
		var body = _ref$body === undefined ? 'World' : _ref$body;

		console[type](title, body);
	};
	exports.notify = notify;

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var sectionUIDs = [];
	var imageUIDs = [];

	var generateSectionUID = function generateSectionUID() {
	    /*jshint bitwise: false*/
	    var id = void 0;

	    do {
	        id = ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).substr(-4);
	    } while (sectionUIDs.indexOf(id) !== -1);

	    sectionUIDs.push(id);

	    return id;
	};

	var generateImageUID = function generateImageUID() {
	    /*jshint bitwise: false*/
	    var id = void 0;

	    do {
	        id = 'image-' + ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).substr(-4);
	    } while (imageUIDs.indexOf(id) !== -1);

	    imageUIDs.push(id);

	    return id;
	};

	exports.sectionUIDs = sectionUIDs;
	exports.imageUIDs = imageUIDs;
	exports.generateSectionUID = generateSectionUID;
	exports.generateImageUID = generateImageUID;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(_) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _picker = __webpack_require__(27);

	var _picker2 = _interopRequireDefault(_picker);

	var _backbone = __webpack_require__(3);

	var _media = __webpack_require__(28);

	var _media2 = _interopRequireDefault(_media);

	var _video = __webpack_require__(32);

	var _video2 = _interopRequireDefault(_video);

	var _backbone2 = __webpack_require__(33);

	var _backbone3 = _interopRequireDefault(_backbone2);

	var _uid = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoPickerView = _picker2.default.extend({

		template: _video2.default,

		ui: {
			'insert': '.js-insert',
			'cancel': '.js-cancel',
			'form': 'form'
		},

		events: _.extend({}, _picker2.default.prototype.events, {
			'click @ui.cancel': 'handleCancel',
			'submit @ui.form': 'handleSubmit'
		}),

		stopPropagation: function stopPropagation(e) {
			e.stopPropagation();
		},

		handleCancel: function handleCancel(e) {
			e.stopPropagation();
			this.destroy();
		},

		handleSubmit: function handleSubmit(e) {
			e.preventDefault();
			var data = _backbone3.default.serialize(this);
			this.showVideo(data);
		},

		showVideo: function showVideo(_ref) {
			var url = _ref.url;
			var caption = _ref.caption;

			var match = void 0,
			    videoID = void 0,
			    provider = void 0;

			// youtube
			if (/^https?\:\/\/(((www\.)?youtube\.com\/watch\?([^&]+=[^&]+&)*v=.+)|(youtu\.be\/.*))/.test(url)) {
				videoID = (match = url.match(/(?:v=)([^&]+)/)) !== null ? match[1] : url.match(/(?:youtu.be\/)(.*)/)[1];
				provider = 'youtube';
			}
			// vimeo
			else if (/^https?\:\/\/(www\.)?vimeo\.com\/.+/.test(url)) {
					videoID = url.match(/^https?\:\/\/(?:www\.)?vimeo\.com\/(.+)/)[1];
					provider = 'vimeo';
				}

			var videoView = new _media2.default({
				model: new _backbone.Model({
					url: url,
					videoId: videoID,
					caption: caption,
					captionPlaceholder: 'Click to enter a caption'
				}),
				name: (0, _uid.generateSectionUID)(),
				provider: provider
			});

			videoView.render();

			// insert view $el after self
			this.$el.before(videoView.$el);

			// NOTE: this works, even though VideoPickerView
			// is NOT a child of the EditorView (not rendered
			// inside one of its regions), because the EditorView
			// manually registers an event listener
			this.triggerMethod('inserted:media', {
				mediaView: videoView,
				hookEl: this.hookEl
			});

			this.destroy();
		}
	});

		exports.default = VideoPickerView;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _backbone = __webpack_require__(2);

	var PickerView = _backbone.ItemView.extend({

		className: 'typely-media-picker non-section mark-for-editable',

		attributes: {
			contenteditable: false
		},

		events: {
			'mouseup': 'stopPropagation',
			'keydown': 'stopPropagation'
		},

		stopPropagation: function stopPropagation(e) {
			e.stopPropagation();
		},

		initialize: function initialize() {
			this.hookEl = this.getOption('hookEl');
		}
	});

		exports.default = PickerView;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _media = __webpack_require__(21);

	var _media2 = _interopRequireDefault(_media);

	var _video = __webpack_require__(29);

	var _video2 = _interopRequireDefault(_video);

	var _video3 = __webpack_require__(30);

	var _video4 = _interopRequireDefault(_video3);

	var _iframe = __webpack_require__(31);

	var _iframe2 = _interopRequireDefault(_iframe);

	var _notify = __webpack_require__(24);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VideoView = _media2.default.extend({

		tagName: 'p',

		getTemplate: function getTemplate() {
			var provider = this.getOption('provider');
			if (provider === 'youtube') {
				return _video2.default;
			}
			if (provider === 'vimeo') {
				return _video4.default;
			}
			(0, _notify.notify)({
				type: 'warn',
				title: 'Unknown video source',
				body: 'Attempting to process video as a generic iframe embed. May fail.'
			});
			return _iframe2.default;
		}

	});

		exports.default = VideoView;

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<iframe width="100%" height="355" src="http://www.youtube.com/embed/' +
	((__t = ( videoId )) == null ? '' : __t) +
	'" frameborder="0"></iframe>\n<span\n	class="caption video-description editable"\n	contenteditable="true"\n	data-empty="' +
	((__t = ( caption.length === 0 ? 'true' : 'false' )) == null ? '' : __t) +
	'">\n	' +
	((__t = ( caption || captionPlaceholder )) == null ? '' : __t) +
	'\n</span>\n';

	}
	return __p
	}

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<iframe width="100%" height="355" src="http://player.vimeo.com/video/' +
	((__t = ( videoId )) == null ? '' : __t) +
	'" frameborder="0"></iframe>\n<span\n	class="caption video-description editable"\n	contenteditable="true"\n	data-empty="' +
	((__t = ( caption.length === 0 ? 'true' : 'false' )) == null ? '' : __t) +
	'">\n	' +
	((__t = ( caption || captionPlaceholder )) == null ? '' : __t) +
	'\n</span>\n';

	}
	return __p
	}

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<iframe width="100%" height="355" src="' +
	((__t = ( url )) == null ? '' : __t) +
	'" frameborder="0"></iframe>\n<span\n	class="caption video-description editable"\n	contenteditable="true"\n	data-empty="' +
	((__t = ( caption.length === 0 ? 'true' : 'false' )) == null ? '' : __t) +
	'">\n	' +
	((__t = ( caption || captionPlaceholder )) == null ? '' : __t) +
	'\n</span>\n';

	}
	return __p
	}

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<form autocomplete="off">\n	<div class="form-group">\n		<label for="url">Insert Video</label>\n	</div>\n	<div class="form-group">\n		<input type="url" class="form-control" name="url" placeholder="Paste or type video url">\n	</div>\n	<div class="form-group">\n		<input type="text" class="form-control" name="caption" placeholder="Add a short caption">\n	</div>\n	<button type="submit" class="btn btn-default js-insert">Insert</button>\n	<button type="button" class="btn btn-link js-cancel">cancel</button>\n</form>\n';

	}
	return __p
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// Backbone.Syphon, v0.6.0
	// ----------------------------------
	//
	// Copyright (c) 2015 Derick Bailey, Muted Solutions, LLC.
	// Distributed under MIT license
	//
	// http://github.com/marionettejs/backbone.syphon
	(function(root, factory) {

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(34), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, Backbone, $) {
	      return factory(_, Backbone, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore');
	    var Backbone = require('backbone');
	    var $ = require('jquery');
	    module.exports = factory(_, Backbone, $);
	  } else {
	    factory(root._, root.Backbone, root.jQuery);
	  }

	}(this, function(_, Backbone, $) {
	  'use strict';

	  var previousSyphon = Backbone.Syphon;

	  var Syphon = Backbone.Syphon = {};

	  Syphon.VERSION = '0.6.0';

	  Syphon.noConflict = function() {
	    Backbone.Syphon = previousSyphon;
	    return this;
	  };

	  /* jshint maxstatements: 13, maxlen: 102, maxcomplexity: 8, latedef: false */
	  
	  // Ignore Element Types
	  // --------------------
	  
	  // Tell Syphon to ignore all elements of these types. You can
	  // push new types to ignore directly in to this array.
	  Syphon.ignoredTypes = ['button', 'submit', 'reset', 'fieldset'];
	  
	  // Syphon
	  // ------
	  
	  // Get a JSON object that represents
	  // all of the form inputs, in this view.
	  // Alternately, pass a form element directly
	  // in place of the view.
	  Syphon.serialize = function(view, options) {
	    var data = {};
	  
	    // Build the configuration
	    var config = buildConfig(options);
	  
	    // Get all of the elements to process
	    var elements = getInputElements(view, config);
	  
	    // Process all of the elements
	    _.each(elements, function(el) {
	      var $el = $(el);
	      var type = getElementType($el);
	  
	      // Get the key for the input
	      var keyExtractor = config.keyExtractors.get(type);
	      var key = keyExtractor($el);
	  
	      // Get the value for the input
	      var inputReader = config.inputReaders.get(type);
	      var value = inputReader($el);
	  
	      // Get the key assignment validator and make sure
	      // it's valid before assigning the value to the key
	      var validKeyAssignment = config.keyAssignmentValidators.get(type);
	      if (validKeyAssignment($el, key, value)) {
	        var keychain = config.keySplitter(key);
	        data = assignKeyValue(data, keychain, value);
	      }
	    });
	  
	    // Done; send back the results.
	    return data;
	  };
	  
	  // Use the given JSON object to populate
	  // all of the form inputs, in this view.
	  // Alternately, pass a form element directly
	  // in place of the view.
	  Syphon.deserialize = function(view, data, options) {
	    // Build the configuration
	    var config = buildConfig(options);
	  
	    // Get all of the elements to process
	    var elements = getInputElements(view, config);
	  
	    // Flatten the data structure that we are deserializing
	    var flattenedData = flattenData(config, data);
	  
	    // Process all of the elements
	    _.each(elements, function(el) {
	      var $el = $(el);
	      var type = getElementType($el);
	  
	      // Get the key for the input
	      var keyExtractor = config.keyExtractors.get(type);
	      var key = keyExtractor($el);
	  
	      // Get the input writer and the value to write
	      var inputWriter = config.inputWriters.get(type);
	      var value = flattenedData[key];
	  
	      // Write the value to the input
	      inputWriter($el, value);
	    });
	  };
	  
	  // Helpers
	  // -------
	  
	  // Retrieve all of the form inputs
	  // from the form
	  var getInputElements = function(view, config) {
	    var formInputs = getForm(view);
	  
	    formInputs = _.reject(formInputs, function(el) {
	      var reject;
	      var myType = getElementType(el);
	      var extractor = config.keyExtractors.get(myType);
	      var identifier = extractor($(el));
	  
	      var foundInIgnored = _.find(config.ignoredTypes, function(ignoredTypeOrSelector) {
	        return (ignoredTypeOrSelector === myType) || $(el).is(ignoredTypeOrSelector);
	      });
	  
	      var foundInInclude = _.include(config.include, identifier);
	      var foundInExclude = _.include(config.exclude, identifier);
	  
	      if (foundInInclude) {
	        reject = false;
	      } else {
	        if (config.include) {
	          reject = true;
	        } else {
	          reject = (foundInExclude || foundInIgnored);
	        }
	      }
	  
	      return reject;
	    });
	  
	    return formInputs;
	  };
	  
	  // Determine what type of element this is. It
	  // will either return the `type` attribute of
	  // an `<input>` element, or the `tagName` of
	  // the element when the element is not an `<input>`.
	  var getElementType = function(el) {
	    var typeAttr;
	    var $el = $(el);
	    var tagName = $el[0].tagName;
	    var type = tagName;
	  
	    if (tagName.toLowerCase() === 'input') {
	      typeAttr = $el.attr('type');
	      if (typeAttr) {
	        type = typeAttr;
	      } else {
	        type = 'text';
	      }
	    }
	  
	    // Always return the type as lowercase
	    // so it can be matched to lowercase
	    // type registrations.
	    return type.toLowerCase();
	  };
	  
	  // If a dom element is given, just return the form fields.
	  // Otherwise, get the form fields from the view.
	  var getForm = function(viewOrForm) {
	    if (_.isUndefined(viewOrForm.$el)) {
	      return $(viewOrForm).children(':input');
	    } else {
	      return viewOrForm.$(':input');
	    }
	  };
	  
	  // Build a configuration object and initialize
	  // default values.
	  var buildConfig = function(options) {
	    var config = _.clone(options) || {};
	  
	    config.ignoredTypes = _.clone(Syphon.ignoredTypes);
	    config.inputReaders = config.inputReaders || Syphon.InputReaders;
	    config.inputWriters = config.inputWriters || Syphon.InputWriters;
	    config.keyExtractors = config.keyExtractors || Syphon.KeyExtractors;
	    config.keySplitter = config.keySplitter || Syphon.KeySplitter;
	    config.keyJoiner = config.keyJoiner || Syphon.KeyJoiner;
	    config.keyAssignmentValidators = config.keyAssignmentValidators || Syphon.KeyAssignmentValidators;
	  
	    return config;
	  };
	  
	  // Assigns `value` to a parsed JSON key.
	  //
	  // The first parameter is the object which will be
	  // modified to store the key/value pair.
	  //
	  // The second parameter accepts an array of keys as a
	  // string with an option array containing a
	  // single string as the last option.
	  //
	  // The third parameter is the value to be assigned.
	  //
	  // Examples:
	  //
	  // `['foo', 'bar', 'baz'] => {foo: {bar: {baz: 'value'}}}`
	  //
	  // `['foo', 'bar', ['baz']] => {foo: {bar: {baz: ['value']}}}`
	  //
	  // When the final value is an array with a string, the key
	  // becomes an array, and values are pushed in to the array,
	  // allowing multiple fields with the same name to be
	  // assigned to the array.
	  var assignKeyValue = function(obj, keychain, value) {
	    if (!keychain) { return obj; }
	  
	    var key = keychain.shift();
	  
	    // build the current object we need to store data
	    if (!obj[key]) {
	      obj[key] = _.isArray(key) ? [] : {};
	    }
	  
	    // if it's the last key in the chain, assign the value directly
	    if (keychain.length === 0) {
	      if (_.isArray(obj[key])) {
	        obj[key].push(value);
	      } else {
	        obj[key] = value;
	      }
	    }
	  
	    // recursive parsing of the array, depth-first
	    if (keychain.length > 0) {
	      assignKeyValue(obj[key], keychain, value);
	    }
	  
	    return obj;
	  };
	  
	  // Flatten the data structure in to nested strings, using the
	  // provided `KeyJoiner` function.
	  //
	  // Example:
	  //
	  // This input:
	  //
	  // ```js
	  // {
	  //   widget: 'wombat',
	  //   foo: {
	  //     bar: 'baz',
	  //     baz: {
	  //       quux: 'qux'
	  //     },
	  //     quux: ['foo', 'bar']
	  //   }
	  // }
	  // ```
	  //
	  // With a KeyJoiner that uses [ ] square brackets,
	  // should produce this output:
	  //
	  // ```js
	  // {
	  //  'widget': 'wombat',
	  //  'foo[bar]': 'baz',
	  //  'foo[baz][quux]': 'qux',
	  //  'foo[quux]': ['foo', 'bar']
	  // }
	  // ```
	  var flattenData = function(config, data, parentKey) {
	    var flatData = {};
	  
	    _.each(data, function(value, keyName) {
	      var hash = {};
	  
	      // If there is a parent key, join it with
	      // the current, child key.
	      if (parentKey) {
	        keyName = config.keyJoiner(parentKey, keyName);
	      }
	  
	      if (_.isArray(value)) {
	        keyName += '[]';
	        hash[keyName] = value;
	      } else if (_.isObject(value)) {
	        hash = flattenData(config, value, keyName);
	      } else {
	        hash[keyName] = value;
	      }
	  
	      // Store the resulting key/value pairs in the
	      // final flattened data object
	      _.extend(flatData, hash);
	    });
	  
	    return flatData;
	  };
	  
	  // Type Registry
	  // -------------
	  
	  // Type Registries allow you to register something to
	  // an input type, and retrieve either the item registered
	  // for a specific type or the default registration
	  var TypeRegistry = Syphon.TypeRegistry = function() {
	    this.registeredTypes = {};
	  };
	  
	  // Borrow Backbone's `extend` keyword for our TypeRegistry
	  TypeRegistry.extend = Backbone.Model.extend;
	  
	  _.extend(TypeRegistry.prototype, {
	  
	    // Get the registered item by type. If nothing is
	    // found for the specified type, the default is
	    // returned.
	    get: function(type) {
	      if (_.has(this.registeredTypes, type)) {
	        return this.registeredTypes[type];
	      } else {
	        return this.registeredTypes['default'];
	      }
	    },
	  
	    // Register a new item for a specified type
	    register: function(type, item) {
	      this.registeredTypes[type] = item;
	    },
	  
	    // Register a default item to be used when no
	    // item for a specified type is found
	    registerDefault: function(item) {
	      this.registeredTypes['default'] = item;
	    },
	  
	    // Remove an item from a given type registration
	    unregister: function(type) {
	      if (_.has(this.registeredTypes, type)) {
	        delete this.registeredTypes[type];
	      }
	    }
	  });
	  
	  // Key Extractors
	  // --------------
	  
	  // Key extractors produce the "key" in `{key: "value"}`
	  // pairs, when serializing.
	  var KeyExtractorSet = Syphon.KeyExtractorSet = TypeRegistry.extend();
	  
	  // Built-in Key Extractors
	  var KeyExtractors = Syphon.KeyExtractors = new KeyExtractorSet();
	  
	  // The default key extractor, which uses the
	  // input element's "name" attribute
	  KeyExtractors.registerDefault(function($el) {
	    return $el.prop('name') || '';
	  });
	  
	  // Input Readers
	  // -------------
	  
	  // Input Readers are used to extract the value from
	  // an input element, for the serialized object result
	  var InputReaderSet = Syphon.InputReaderSet = TypeRegistry.extend();
	  
	  // Built-in Input Readers
	  var InputReaders = Syphon.InputReaders = new InputReaderSet();
	  
	  // The default input reader, which uses an input
	  // element's "value"
	  InputReaders.registerDefault(function($el) {
	    return $el.val();
	  });
	  
	  // Checkbox reader, returning a boolean value for
	  // whether or not the checkbox is checked.
	  InputReaders.register('checkbox', function($el) {
	    return ($el.prop('indeterminate')) ? null : $el.prop('checked');
	  });
	  
	  // Input Writers
	  // -------------
	  
	  // Input Writers are used to insert a value from an
	  // object into an input element.
	  var InputWriterSet = Syphon.InputWriterSet = TypeRegistry.extend();
	  
	  // Built-in Input Writers
	  var InputWriters = Syphon.InputWriters = new InputWriterSet();
	  
	  // The default input writer, which sets an input
	  // element's "value"
	  InputWriters.registerDefault(function($el, value) {
	    $el.val(value);
	  });
	  
	  // Checkbox writer, set whether or not the checkbox is checked
	  // depending on the boolean value.
	  InputWriters.register('checkbox', function($el, value) {
	    if (value === null) {
	      $el.prop('indeterminate', true);
	    } else {
	      $el.prop('checked', value);
	    }
	  });
	  
	  // Radio button writer, set whether or not the radio button is
	  // checked.  The button should only be checked if it's value
	  // equals the given value.
	  InputWriters.register('radio', function($el, value) {
	    $el.prop('checked', $el.val() === value.toString());
	  });
	  
	  // Key Assignment Validators
	  // -------------------------
	  
	  // Key Assignment Validators are used to determine whether or not a
	  // key should be assigned to a value, after the key and value have been
	  // extracted from the element. This is the last opportunity to prevent
	  // bad data from getting serialized to your object.
	  
	  var KeyAssignmentValidatorSet = Syphon.KeyAssignmentValidatorSet = TypeRegistry.extend();
	  
	  // Build-in Key Assignment Validators
	  var KeyAssignmentValidators = Syphon.KeyAssignmentValidators = new KeyAssignmentValidatorSet();
	  
	  // Everything is valid by default
	  KeyAssignmentValidators.registerDefault(function() {
	    return true;
	  });
	  
	  // But only the "checked" radio button for a given
	  // radio button group is valid
	  KeyAssignmentValidators.register('radio', function($el, key, value) {
	    return $el.prop('checked');
	  });
	  
	  // Backbone.Syphon.KeySplitter
	  // ---------------------------
	  
	  // This function is used to split DOM element keys in to an array
	  // of parts, which are then used to create a nested result structure.
	  // returning `["foo", "bar"]` results in `{foo: { bar: "value" }}`.
	  //
	  // Override this method to use a custom key splitter, such as:
	  // `<input name="foo.bar.baz">`, `return key.split(".")`
	  Syphon.KeySplitter = function(key) {
	    var matches = key.match(/[^\[\]]+/g);
	    var lastKey;
	  
	    if (key.length > 1 && key.indexOf('[]') === key.length - 2) {
	      lastKey = matches.pop();
	      matches.push([lastKey]);
	    }
	  
	    return matches;
	  };
	  
	  // Backbone.Syphon.KeyJoiner
	  // -------------------------
	  
	  // Take two segments of a key and join them together, to create the
	  // de-normalized key name, when deserializing a data structure back
	  // in to a form.
	  //
	  // Example:
	  //
	  // With this data strucutre `{foo: { bar: {baz: "value", quux: "another"} } }`,
	  // the key joiner will be called with these parameters, and assuming the
	  // join happens with "[ ]" square brackets, the specified output:
	  //
	  // `KeyJoiner("foo", "bar")` //=> "foo[bar]"
	  // `KeyJoiner("foo[bar]", "baz")` //=> "foo[bar][baz]"
	  // `KeyJoiner("foo[bar]", "quux")` //=> "foo[bar][quux]"
	  
	  Syphon.KeyJoiner = function(parentKey, childKey) {
	    return parentKey + '[' + childKey + ']';
	  };
	  

	  return Backbone.Syphon;
	}));


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.1.2

	//     (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	//     Backbone may be freely distributed under the MIT license.
	//     For all details and documentation:
	//     http://backbonejs.org

	(function(root, factory) {

	  // Set up Backbone appropriately for the environment. Start with AMD.
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(4), __webpack_require__(5), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(_, $, exports) {
	      // Export global even in AMD case in case this script is loaded with
	      // others that may still expect a global Backbone.
	      root.Backbone = factory(root, exports, _, $);
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
	  } else if (typeof exports !== 'undefined') {
	    var _ = require('underscore');
	    factory(root, exports, _);

	  // Finally, as a browser global.
	  } else {
	    root.Backbone = factory(root, {}, root._, (root.jQuery || root.Zepto || root.ender || root.$));
	  }

	}(this, function(root, Backbone, _, $) {

	  // Initial Setup
	  // -------------

	  // Save the previous value of the `Backbone` variable, so that it can be
	  // restored later on, if `noConflict` is used.
	  var previousBackbone = root.Backbone;

	  // Create local references to array methods we'll want to use later.
	  var array = [];
	  var push = array.push;
	  var slice = array.slice;
	  var splice = array.splice;

	  // Current version of the library. Keep in sync with `package.json`.
	  Backbone.VERSION = '1.1.2';

	  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
	  // the `$` variable.
	  Backbone.$ = $;

	  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
	  // to its previous owner. Returns a reference to this Backbone object.
	  Backbone.noConflict = function() {
	    root.Backbone = previousBackbone;
	    return this;
	  };

	  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
	  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
	  // set a `X-Http-Method-Override` header.
	  Backbone.emulateHTTP = false;

	  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
	  // `application/json` requests ... will encode the body as
	  // `application/x-www-form-urlencoded` instead and will send the model in a
	  // form param named `model`.
	  Backbone.emulateJSON = false;

	  // Backbone.Events
	  // ---------------

	  // A module that can be mixed in to *any object* in order to provide it with
	  // custom events. You may bind with `on` or remove with `off` callback
	  // functions to an event; `trigger`-ing an event fires all callbacks in
	  // succession.
	  //
	  //     var object = {};
	  //     _.extend(object, Backbone.Events);
	  //     object.on('expand', function(){ alert('expanded'); });
	  //     object.trigger('expand');
	  //
	  var Events = Backbone.Events = {

	    // Bind an event to a `callback` function. Passing `"all"` will bind
	    // the callback to all events fired.
	    on: function(name, callback, context) {
	      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
	      this._events || (this._events = {});
	      var events = this._events[name] || (this._events[name] = []);
	      events.push({callback: callback, context: context, ctx: context || this});
	      return this;
	    },

	    // Bind an event to only be triggered a single time. After the first time
	    // the callback is invoked, it will be removed.
	    once: function(name, callback, context) {
	      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
	      var self = this;
	      var once = _.once(function() {
	        self.off(name, once);
	        callback.apply(this, arguments);
	      });
	      once._callback = callback;
	      return this.on(name, once, context);
	    },

	    // Remove one or many callbacks. If `context` is null, removes all
	    // callbacks with that function. If `callback` is null, removes all
	    // callbacks for the event. If `name` is null, removes all bound
	    // callbacks for all events.
	    off: function(name, callback, context) {
	      var retain, ev, events, names, i, l, j, k;
	      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
	      if (!name && !callback && !context) {
	        this._events = void 0;
	        return this;
	      }
	      names = name ? [name] : _.keys(this._events);
	      for (i = 0, l = names.length; i < l; i++) {
	        name = names[i];
	        if (events = this._events[name]) {
	          this._events[name] = retain = [];
	          if (callback || context) {
	            for (j = 0, k = events.length; j < k; j++) {
	              ev = events[j];
	              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
	                  (context && context !== ev.context)) {
	                retain.push(ev);
	              }
	            }
	          }
	          if (!retain.length) delete this._events[name];
	        }
	      }

	      return this;
	    },

	    // Trigger one or many events, firing all bound callbacks. Callbacks are
	    // passed the same arguments as `trigger` is, apart from the event name
	    // (unless you're listening on `"all"`, which will cause your callback to
	    // receive the true name of the event as the first argument).
	    trigger: function(name) {
	      if (!this._events) return this;
	      var args = slice.call(arguments, 1);
	      if (!eventsApi(this, 'trigger', name, args)) return this;
	      var events = this._events[name];
	      var allEvents = this._events.all;
	      if (events) triggerEvents(events, args);
	      if (allEvents) triggerEvents(allEvents, arguments);
	      return this;
	    },

	    // Tell this object to stop listening to either specific events ... or
	    // to every object it's currently listening to.
	    stopListening: function(obj, name, callback) {
	      var listeningTo = this._listeningTo;
	      if (!listeningTo) return this;
	      var remove = !name && !callback;
	      if (!callback && typeof name === 'object') callback = this;
	      if (obj) (listeningTo = {})[obj._listenId] = obj;
	      for (var id in listeningTo) {
	        obj = listeningTo[id];
	        obj.off(name, callback, this);
	        if (remove || _.isEmpty(obj._events)) delete this._listeningTo[id];
	      }
	      return this;
	    }

	  };

	  // Regular expression used to split event strings.
	  var eventSplitter = /\s+/;

	  // Implement fancy features of the Events API such as multiple event
	  // names `"change blur"` and jQuery-style event maps `{change: action}`
	  // in terms of the existing API.
	  var eventsApi = function(obj, action, name, rest) {
	    if (!name) return true;

	    // Handle event maps.
	    if (typeof name === 'object') {
	      for (var key in name) {
	        obj[action].apply(obj, [key, name[key]].concat(rest));
	      }
	      return false;
	    }

	    // Handle space separated event names.
	    if (eventSplitter.test(name)) {
	      var names = name.split(eventSplitter);
	      for (var i = 0, l = names.length; i < l; i++) {
	        obj[action].apply(obj, [names[i]].concat(rest));
	      }
	      return false;
	    }

	    return true;
	  };

	  // A difficult-to-believe, but optimized internal dispatch function for
	  // triggering events. Tries to keep the usual cases speedy (most internal
	  // Backbone events have 3 arguments).
	  var triggerEvents = function(events, args) {
	    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
	    switch (args.length) {
	      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
	      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
	      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
	      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
	      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
	    }
	  };

	  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

	  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
	  // listen to an event in another object ... keeping track of what it's
	  // listening to.
	  _.each(listenMethods, function(implementation, method) {
	    Events[method] = function(obj, name, callback) {
	      var listeningTo = this._listeningTo || (this._listeningTo = {});
	      var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
	      listeningTo[id] = obj;
	      if (!callback && typeof name === 'object') callback = this;
	      obj[implementation](name, callback, this);
	      return this;
	    };
	  });

	  // Aliases for backwards compatibility.
	  Events.bind   = Events.on;
	  Events.unbind = Events.off;

	  // Allow the `Backbone` object to serve as a global event bus, for folks who
	  // want global "pubsub" in a convenient place.
	  _.extend(Backbone, Events);

	  // Backbone.Model
	  // --------------

	  // Backbone **Models** are the basic data object in the framework --
	  // frequently representing a row in a table in a database on your server.
	  // A discrete chunk of data and a bunch of useful, related methods for
	  // performing computations and transformations on that data.

	  // Create a new model with the specified attributes. A client id (`cid`)
	  // is automatically generated and assigned for you.
	  var Model = Backbone.Model = function(attributes, options) {
	    var attrs = attributes || {};
	    options || (options = {});
	    this.cid = _.uniqueId('c');
	    this.attributes = {};
	    if (options.collection) this.collection = options.collection;
	    if (options.parse) attrs = this.parse(attrs, options) || {};
	    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
	    this.set(attrs, options);
	    this.changed = {};
	    this.initialize.apply(this, arguments);
	  };

	  // Attach all inheritable methods to the Model prototype.
	  _.extend(Model.prototype, Events, {

	    // A hash of attributes whose current and previous value differ.
	    changed: null,

	    // The value returned during the last failed validation.
	    validationError: null,

	    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
	    // CouchDB users may want to set this to `"_id"`.
	    idAttribute: 'id',

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Return a copy of the model's `attributes` object.
	    toJSON: function(options) {
	      return _.clone(this.attributes);
	    },

	    // Proxy `Backbone.sync` by default -- but override this if you need
	    // custom syncing semantics for *this* particular model.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Get the value of an attribute.
	    get: function(attr) {
	      return this.attributes[attr];
	    },

	    // Get the HTML-escaped value of an attribute.
	    escape: function(attr) {
	      return _.escape(this.get(attr));
	    },

	    // Returns `true` if the attribute contains a value that is not null
	    // or undefined.
	    has: function(attr) {
	      return this.get(attr) != null;
	    },

	    // Set a hash of model attributes on the object, firing `"change"`. This is
	    // the core primitive operation of a model, updating the data and notifying
	    // anyone who needs to know about the change in state. The heart of the beast.
	    set: function(key, val, options) {
	      var attr, attrs, unset, changes, silent, changing, prev, current;
	      if (key == null) return this;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      if (typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options || (options = {});

	      // Run validation.
	      if (!this._validate(attrs, options)) return false;

	      // Extract attributes and options.
	      unset           = options.unset;
	      silent          = options.silent;
	      changes         = [];
	      changing        = this._changing;
	      this._changing  = true;

	      if (!changing) {
	        this._previousAttributes = _.clone(this.attributes);
	        this.changed = {};
	      }
	      current = this.attributes, prev = this._previousAttributes;

	      // Check for changes of `id`.
	      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

	      // For each `set` attribute, update or delete the current value.
	      for (attr in attrs) {
	        val = attrs[attr];
	        if (!_.isEqual(current[attr], val)) changes.push(attr);
	        if (!_.isEqual(prev[attr], val)) {
	          this.changed[attr] = val;
	        } else {
	          delete this.changed[attr];
	        }
	        unset ? delete current[attr] : current[attr] = val;
	      }

	      // Trigger all relevant attribute changes.
	      if (!silent) {
	        if (changes.length) this._pending = options;
	        for (var i = 0, l = changes.length; i < l; i++) {
	          this.trigger('change:' + changes[i], this, current[changes[i]], options);
	        }
	      }

	      // You might be wondering why there's a `while` loop here. Changes can
	      // be recursively nested within `"change"` events.
	      if (changing) return this;
	      if (!silent) {
	        while (this._pending) {
	          options = this._pending;
	          this._pending = false;
	          this.trigger('change', this, options);
	        }
	      }
	      this._pending = false;
	      this._changing = false;
	      return this;
	    },

	    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
	    // if the attribute doesn't exist.
	    unset: function(attr, options) {
	      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
	    },

	    // Clear all attributes on the model, firing `"change"`.
	    clear: function(options) {
	      var attrs = {};
	      for (var key in this.attributes) attrs[key] = void 0;
	      return this.set(attrs, _.extend({}, options, {unset: true}));
	    },

	    // Determine if the model has changed since the last `"change"` event.
	    // If you specify an attribute name, determine if that attribute has changed.
	    hasChanged: function(attr) {
	      if (attr == null) return !_.isEmpty(this.changed);
	      return _.has(this.changed, attr);
	    },

	    // Return an object containing all the attributes that have changed, or
	    // false if there are no changed attributes. Useful for determining what
	    // parts of a view need to be updated and/or what attributes need to be
	    // persisted to the server. Unset attributes will be set to undefined.
	    // You can also pass an attributes object to diff against the model,
	    // determining if there *would be* a change.
	    changedAttributes: function(diff) {
	      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
	      var val, changed = false;
	      var old = this._changing ? this._previousAttributes : this.attributes;
	      for (var attr in diff) {
	        if (_.isEqual(old[attr], (val = diff[attr]))) continue;
	        (changed || (changed = {}))[attr] = val;
	      }
	      return changed;
	    },

	    // Get the previous value of an attribute, recorded at the time the last
	    // `"change"` event was fired.
	    previous: function(attr) {
	      if (attr == null || !this._previousAttributes) return null;
	      return this._previousAttributes[attr];
	    },

	    // Get all of the attributes of the model at the time of the previous
	    // `"change"` event.
	    previousAttributes: function() {
	      return _.clone(this._previousAttributes);
	    },

	    // Fetch the model from the server. If the server's representation of the
	    // model differs from its current attributes, they will be overridden,
	    // triggering a `"change"` event.
	    fetch: function(options) {
	      options = options ? _.clone(options) : {};
	      if (options.parse === void 0) options.parse = true;
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        if (!model.set(model.parse(resp, options), options)) return false;
	        if (success) success(model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Set a hash of model attributes, and sync the model to the server.
	    // If the server returns an attributes hash that differs, the model's
	    // state will be `set` again.
	    save: function(key, val, options) {
	      var attrs, method, xhr, attributes = this.attributes;

	      // Handle both `"key", value` and `{key: value}` -style arguments.
	      if (key == null || typeof key === 'object') {
	        attrs = key;
	        options = val;
	      } else {
	        (attrs = {})[key] = val;
	      }

	      options = _.extend({validate: true}, options);

	      // If we're not waiting and attributes exist, save acts as
	      // `set(attr).save(null, opts)` with validation. Otherwise, check if
	      // the model will be valid when the attributes, if any, are set.
	      if (attrs && !options.wait) {
	        if (!this.set(attrs, options)) return false;
	      } else {
	        if (!this._validate(attrs, options)) return false;
	      }

	      // Set temporary attributes if `{wait: true}`.
	      if (attrs && options.wait) {
	        this.attributes = _.extend({}, attributes, attrs);
	      }

	      // After a successful server-side save, the client is (optionally)
	      // updated with the server-side state.
	      if (options.parse === void 0) options.parse = true;
	      var model = this;
	      var success = options.success;
	      options.success = function(resp) {
	        // Ensure attributes are restored during synchronous saves.
	        model.attributes = attributes;
	        var serverAttrs = model.parse(resp, options);
	        if (options.wait) serverAttrs = _.extend(attrs || {}, serverAttrs);
	        if (_.isObject(serverAttrs) && !model.set(serverAttrs, options)) {
	          return false;
	        }
	        if (success) success(model, resp, options);
	        model.trigger('sync', model, resp, options);
	      };
	      wrapError(this, options);

	      method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
	      if (method === 'patch') options.attrs = attrs;
	      xhr = this.sync(method, this, options);

	      // Restore attributes.
	      if (attrs && options.wait) this.attributes = attributes;

	      return xhr;
	    },

	    // Destroy this model on the server if it was already persisted.
	    // Optimistically removes the model from its collection, if it has one.
	    // If `wait: true` is passed, waits for the server to respond before removal.
	    destroy: function(options) {
	      options = options ? _.clone(options) : {};
	      var model = this;
	      var success = options.success;

	      var destroy = function() {
	        model.trigger('destroy', model, model.collection, options);
	      };

	      options.success = function(resp) {
	        if (options.wait || model.isNew()) destroy();
	        if (success) success(model, resp, options);
	        if (!model.isNew()) model.trigger('sync', model, resp, options);
	      };

	      if (this.isNew()) {
	        options.success();
	        return false;
	      }
	      wrapError(this, options);

	      var xhr = this.sync('delete', this, options);
	      if (!options.wait) destroy();
	      return xhr;
	    },

	    // Default URL for the model's representation on the server -- if you're
	    // using Backbone's restful methods, override this to change the endpoint
	    // that will be called.
	    url: function() {
	      var base =
	        _.result(this, 'urlRoot') ||
	        _.result(this.collection, 'url') ||
	        urlError();
	      if (this.isNew()) return base;
	      return base.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id);
	    },

	    // **parse** converts a response into the hash of attributes to be `set` on
	    // the model. The default implementation is just to pass the response along.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new model with identical attributes to this one.
	    clone: function() {
	      return new this.constructor(this.attributes);
	    },

	    // A model is new if it has never been saved to the server, and lacks an id.
	    isNew: function() {
	      return !this.has(this.idAttribute);
	    },

	    // Check if the model is currently in a valid state.
	    isValid: function(options) {
	      return this._validate({}, _.extend(options || {}, { validate: true }));
	    },

	    // Run validation against the next complete set of model attributes,
	    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
	    _validate: function(attrs, options) {
	      if (!options.validate || !this.validate) return true;
	      attrs = _.extend({}, this.attributes, attrs);
	      var error = this.validationError = this.validate(attrs, options) || null;
	      if (!error) return true;
	      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
	      return false;
	    }

	  });

	  // Underscore methods that we want to implement on the Model.
	  var modelMethods = ['keys', 'values', 'pairs', 'invert', 'pick', 'omit'];

	  // Mix in each Underscore method as a proxy to `Model#attributes`.
	  _.each(modelMethods, function(method) {
	    Model.prototype[method] = function() {
	      var args = slice.call(arguments);
	      args.unshift(this.attributes);
	      return _[method].apply(_, args);
	    };
	  });

	  // Backbone.Collection
	  // -------------------

	  // If models tend to represent a single row of data, a Backbone Collection is
	  // more analagous to a table full of data ... or a small slice or page of that
	  // table, or a collection of rows that belong together for a particular reason
	  // -- all of the messages in this particular folder, all of the documents
	  // belonging to this particular author, and so on. Collections maintain
	  // indexes of their models, both in order, and for lookup by `id`.

	  // Create a new **Collection**, perhaps to contain a specific type of `model`.
	  // If a `comparator` is specified, the Collection will maintain
	  // its models in sort order, as they're added and removed.
	  var Collection = Backbone.Collection = function(models, options) {
	    options || (options = {});
	    if (options.model) this.model = options.model;
	    if (options.comparator !== void 0) this.comparator = options.comparator;
	    this._reset();
	    this.initialize.apply(this, arguments);
	    if (models) this.reset(models, _.extend({silent: true}, options));
	  };

	  // Default options for `Collection#set`.
	  var setOptions = {add: true, remove: true, merge: true};
	  var addOptions = {add: true, remove: false};

	  // Define the Collection's inheritable methods.
	  _.extend(Collection.prototype, Events, {

	    // The default model for a collection is just a **Backbone.Model**.
	    // This should be overridden in most cases.
	    model: Model,

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // The JSON representation of a Collection is an array of the
	    // models' attributes.
	    toJSON: function(options) {
	      return this.map(function(model){ return model.toJSON(options); });
	    },

	    // Proxy `Backbone.sync` by default.
	    sync: function() {
	      return Backbone.sync.apply(this, arguments);
	    },

	    // Add a model, or list of models to the set.
	    add: function(models, options) {
	      return this.set(models, _.extend({merge: false}, options, addOptions));
	    },

	    // Remove a model, or a list of models from the set.
	    remove: function(models, options) {
	      var singular = !_.isArray(models);
	      models = singular ? [models] : _.clone(models);
	      options || (options = {});
	      var i, l, index, model;
	      for (i = 0, l = models.length; i < l; i++) {
	        model = models[i] = this.get(models[i]);
	        if (!model) continue;
	        delete this._byId[model.id];
	        delete this._byId[model.cid];
	        index = this.indexOf(model);
	        this.models.splice(index, 1);
	        this.length--;
	        if (!options.silent) {
	          options.index = index;
	          model.trigger('remove', model, this, options);
	        }
	        this._removeReference(model, options);
	      }
	      return singular ? models[0] : models;
	    },

	    // Update a collection by `set`-ing a new list of models, adding new ones,
	    // removing models that are no longer present, and merging models that
	    // already exist in the collection, as necessary. Similar to **Model#set**,
	    // the core operation for updating the data contained by the collection.
	    set: function(models, options) {
	      options = _.defaults({}, options, setOptions);
	      if (options.parse) models = this.parse(models, options);
	      var singular = !_.isArray(models);
	      models = singular ? (models ? [models] : []) : _.clone(models);
	      var i, l, id, model, attrs, existing, sort;
	      var at = options.at;
	      var targetModel = this.model;
	      var sortable = this.comparator && (at == null) && options.sort !== false;
	      var sortAttr = _.isString(this.comparator) ? this.comparator : null;
	      var toAdd = [], toRemove = [], modelMap = {};
	      var add = options.add, merge = options.merge, remove = options.remove;
	      var order = !sortable && add && remove ? [] : false;

	      // Turn bare objects into model references, and prevent invalid models
	      // from being added.
	      for (i = 0, l = models.length; i < l; i++) {
	        attrs = models[i] || {};
	        if (attrs instanceof Model) {
	          id = model = attrs;
	        } else {
	          id = attrs[targetModel.prototype.idAttribute || 'id'];
	        }

	        // If a duplicate is found, prevent it from being added and
	        // optionally merge it into the existing model.
	        if (existing = this.get(id)) {
	          if (remove) modelMap[existing.cid] = true;
	          if (merge) {
	            attrs = attrs === model ? model.attributes : attrs;
	            if (options.parse) attrs = existing.parse(attrs, options);
	            existing.set(attrs, options);
	            if (sortable && !sort && existing.hasChanged(sortAttr)) sort = true;
	          }
	          models[i] = existing;

	        // If this is a new, valid model, push it to the `toAdd` list.
	        } else if (add) {
	          model = models[i] = this._prepareModel(attrs, options);
	          if (!model) continue;
	          toAdd.push(model);
	          this._addReference(model, options);
	        }

	        // Do not add multiple models with the same `id`.
	        model = existing || model;
	        if (order && (model.isNew() || !modelMap[model.id])) order.push(model);
	        modelMap[model.id] = true;
	      }

	      // Remove nonexistent models if appropriate.
	      if (remove) {
	        for (i = 0, l = this.length; i < l; ++i) {
	          if (!modelMap[(model = this.models[i]).cid]) toRemove.push(model);
	        }
	        if (toRemove.length) this.remove(toRemove, options);
	      }

	      // See if sorting is needed, update `length` and splice in new models.
	      if (toAdd.length || (order && order.length)) {
	        if (sortable) sort = true;
	        this.length += toAdd.length;
	        if (at != null) {
	          for (i = 0, l = toAdd.length; i < l; i++) {
	            this.models.splice(at + i, 0, toAdd[i]);
	          }
	        } else {
	          if (order) this.models.length = 0;
	          var orderedModels = order || toAdd;
	          for (i = 0, l = orderedModels.length; i < l; i++) {
	            this.models.push(orderedModels[i]);
	          }
	        }
	      }

	      // Silently sort the collection if appropriate.
	      if (sort) this.sort({silent: true});

	      // Unless silenced, it's time to fire all appropriate add/sort events.
	      if (!options.silent) {
	        for (i = 0, l = toAdd.length; i < l; i++) {
	          (model = toAdd[i]).trigger('add', model, this, options);
	        }
	        if (sort || (order && order.length)) this.trigger('sort', this, options);
	      }

	      // Return the added (or merged) model (or models).
	      return singular ? models[0] : models;
	    },

	    // When you have more items than you want to add or remove individually,
	    // you can reset the entire set with a new list of models, without firing
	    // any granular `add` or `remove` events. Fires `reset` when finished.
	    // Useful for bulk operations and optimizations.
	    reset: function(models, options) {
	      options || (options = {});
	      for (var i = 0, l = this.models.length; i < l; i++) {
	        this._removeReference(this.models[i], options);
	      }
	      options.previousModels = this.models;
	      this._reset();
	      models = this.add(models, _.extend({silent: true}, options));
	      if (!options.silent) this.trigger('reset', this, options);
	      return models;
	    },

	    // Add a model to the end of the collection.
	    push: function(model, options) {
	      return this.add(model, _.extend({at: this.length}, options));
	    },

	    // Remove a model from the end of the collection.
	    pop: function(options) {
	      var model = this.at(this.length - 1);
	      this.remove(model, options);
	      return model;
	    },

	    // Add a model to the beginning of the collection.
	    unshift: function(model, options) {
	      return this.add(model, _.extend({at: 0}, options));
	    },

	    // Remove a model from the beginning of the collection.
	    shift: function(options) {
	      var model = this.at(0);
	      this.remove(model, options);
	      return model;
	    },

	    // Slice out a sub-array of models from the collection.
	    slice: function() {
	      return slice.apply(this.models, arguments);
	    },

	    // Get a model from the set by id.
	    get: function(obj) {
	      if (obj == null) return void 0;
	      return this._byId[obj] || this._byId[obj.id] || this._byId[obj.cid];
	    },

	    // Get the model at the given index.
	    at: function(index) {
	      return this.models[index];
	    },

	    // Return models with matching attributes. Useful for simple cases of
	    // `filter`.
	    where: function(attrs, first) {
	      if (_.isEmpty(attrs)) return first ? void 0 : [];
	      return this[first ? 'find' : 'filter'](function(model) {
	        for (var key in attrs) {
	          if (attrs[key] !== model.get(key)) return false;
	        }
	        return true;
	      });
	    },

	    // Return the first model with matching attributes. Useful for simple cases
	    // of `find`.
	    findWhere: function(attrs) {
	      return this.where(attrs, true);
	    },

	    // Force the collection to re-sort itself. You don't need to call this under
	    // normal circumstances, as the set will maintain sort order as each item
	    // is added.
	    sort: function(options) {
	      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
	      options || (options = {});

	      // Run sort based on type of `comparator`.
	      if (_.isString(this.comparator) || this.comparator.length === 1) {
	        this.models = this.sortBy(this.comparator, this);
	      } else {
	        this.models.sort(_.bind(this.comparator, this));
	      }

	      if (!options.silent) this.trigger('sort', this, options);
	      return this;
	    },

	    // Pluck an attribute from each model in the collection.
	    pluck: function(attr) {
	      return _.invoke(this.models, 'get', attr);
	    },

	    // Fetch the default set of models for this collection, resetting the
	    // collection when they arrive. If `reset: true` is passed, the response
	    // data will be passed through the `reset` method instead of `set`.
	    fetch: function(options) {
	      options = options ? _.clone(options) : {};
	      if (options.parse === void 0) options.parse = true;
	      var success = options.success;
	      var collection = this;
	      options.success = function(resp) {
	        var method = options.reset ? 'reset' : 'set';
	        collection[method](resp, options);
	        if (success) success(collection, resp, options);
	        collection.trigger('sync', collection, resp, options);
	      };
	      wrapError(this, options);
	      return this.sync('read', this, options);
	    },

	    // Create a new instance of a model in this collection. Add the model to the
	    // collection immediately, unless `wait: true` is passed, in which case we
	    // wait for the server to agree.
	    create: function(model, options) {
	      options = options ? _.clone(options) : {};
	      if (!(model = this._prepareModel(model, options))) return false;
	      if (!options.wait) this.add(model, options);
	      var collection = this;
	      var success = options.success;
	      options.success = function(model, resp) {
	        if (options.wait) collection.add(model, options);
	        if (success) success(model, resp, options);
	      };
	      model.save(null, options);
	      return model;
	    },

	    // **parse** converts a response into a list of models to be added to the
	    // collection. The default implementation is just to pass it through.
	    parse: function(resp, options) {
	      return resp;
	    },

	    // Create a new collection with an identical list of models as this one.
	    clone: function() {
	      return new this.constructor(this.models);
	    },

	    // Private method to reset all internal state. Called when the collection
	    // is first initialized or reset.
	    _reset: function() {
	      this.length = 0;
	      this.models = [];
	      this._byId  = {};
	    },

	    // Prepare a hash of attributes (or other model) to be added to this
	    // collection.
	    _prepareModel: function(attrs, options) {
	      if (attrs instanceof Model) return attrs;
	      options = options ? _.clone(options) : {};
	      options.collection = this;
	      var model = new this.model(attrs, options);
	      if (!model.validationError) return model;
	      this.trigger('invalid', this, model.validationError, options);
	      return false;
	    },

	    // Internal method to create a model's ties to a collection.
	    _addReference: function(model, options) {
	      this._byId[model.cid] = model;
	      if (model.id != null) this._byId[model.id] = model;
	      if (!model.collection) model.collection = this;
	      model.on('all', this._onModelEvent, this);
	    },

	    // Internal method to sever a model's ties to a collection.
	    _removeReference: function(model, options) {
	      if (this === model.collection) delete model.collection;
	      model.off('all', this._onModelEvent, this);
	    },

	    // Internal method called every time a model in the set fires an event.
	    // Sets need to update their indexes when models change ids. All other
	    // events simply proxy through. "add" and "remove" events that originate
	    // in other collections are ignored.
	    _onModelEvent: function(event, model, collection, options) {
	      if ((event === 'add' || event === 'remove') && collection !== this) return;
	      if (event === 'destroy') this.remove(model, options);
	      if (model && event === 'change:' + model.idAttribute) {
	        delete this._byId[model.previous(model.idAttribute)];
	        if (model.id != null) this._byId[model.id] = model;
	      }
	      this.trigger.apply(this, arguments);
	    }

	  });

	  // Underscore methods that we want to implement on the Collection.
	  // 90% of the core usefulness of Backbone Collections is actually implemented
	  // right here:
	  var methods = ['forEach', 'each', 'map', 'collect', 'reduce', 'foldl',
	    'inject', 'reduceRight', 'foldr', 'find', 'detect', 'filter', 'select',
	    'reject', 'every', 'all', 'some', 'any', 'include', 'contains', 'invoke',
	    'max', 'min', 'toArray', 'size', 'first', 'head', 'take', 'initial', 'rest',
	    'tail', 'drop', 'last', 'without', 'difference', 'indexOf', 'shuffle',
	    'lastIndexOf', 'isEmpty', 'chain', 'sample'];

	  // Mix in each Underscore method as a proxy to `Collection#models`.
	  _.each(methods, function(method) {
	    Collection.prototype[method] = function() {
	      var args = slice.call(arguments);
	      args.unshift(this.models);
	      return _[method].apply(_, args);
	    };
	  });

	  // Underscore methods that take a property name as an argument.
	  var attributeMethods = ['groupBy', 'countBy', 'sortBy', 'indexBy'];

	  // Use attributes instead of properties.
	  _.each(attributeMethods, function(method) {
	    Collection.prototype[method] = function(value, context) {
	      var iterator = _.isFunction(value) ? value : function(model) {
	        return model.get(value);
	      };
	      return _[method](this.models, iterator, context);
	    };
	  });

	  // Backbone.View
	  // -------------

	  // Backbone Views are almost more convention than they are actual code. A View
	  // is simply a JavaScript object that represents a logical chunk of UI in the
	  // DOM. This might be a single item, an entire list, a sidebar or panel, or
	  // even the surrounding frame which wraps your whole app. Defining a chunk of
	  // UI as a **View** allows you to define your DOM events declaratively, without
	  // having to worry about render order ... and makes it easy for the view to
	  // react to specific changes in the state of your models.

	  // Creating a Backbone.View creates its initial element outside of the DOM,
	  // if an existing element is not provided...
	  var View = Backbone.View = function(options) {
	    this.cid = _.uniqueId('view');
	    options || (options = {});
	    _.extend(this, _.pick(options, viewOptions));
	    this._ensureElement();
	    this.initialize.apply(this, arguments);
	    this.delegateEvents();
	  };

	  // Cached regex to split keys for `delegate`.
	  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

	  // List of view options to be merged as properties.
	  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

	  // Set up all inheritable **Backbone.View** properties and methods.
	  _.extend(View.prototype, Events, {

	    // The default `tagName` of a View's element is `"div"`.
	    tagName: 'div',

	    // jQuery delegate for element lookup, scoped to DOM elements within the
	    // current view. This should be preferred to global lookups where possible.
	    $: function(selector) {
	      return this.$el.find(selector);
	    },

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // **render** is the core function that your view should override, in order
	    // to populate its element (`this.el`), with the appropriate HTML. The
	    // convention is for **render** to always return `this`.
	    render: function() {
	      return this;
	    },

	    // Remove this view by taking the element out of the DOM, and removing any
	    // applicable Backbone.Events listeners.
	    remove: function() {
	      this.$el.remove();
	      this.stopListening();
	      return this;
	    },

	    // Change the view's element (`this.el` property), including event
	    // re-delegation.
	    setElement: function(element, delegate) {
	      if (this.$el) this.undelegateEvents();
	      this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
	      this.el = this.$el[0];
	      if (delegate !== false) this.delegateEvents();
	      return this;
	    },

	    // Set callbacks, where `this.events` is a hash of
	    //
	    // *{"event selector": "callback"}*
	    //
	    //     {
	    //       'mousedown .title':  'edit',
	    //       'click .button':     'save',
	    //       'click .open':       function(e) { ... }
	    //     }
	    //
	    // pairs. Callbacks will be bound to the view, with `this` set properly.
	    // Uses event delegation for efficiency.
	    // Omitting the selector binds the event to `this.el`.
	    // This only works for delegate-able events: not `focus`, `blur`, and
	    // not `change`, `submit`, and `reset` in Internet Explorer.
	    delegateEvents: function(events) {
	      if (!(events || (events = _.result(this, 'events')))) return this;
	      this.undelegateEvents();
	      for (var key in events) {
	        var method = events[key];
	        if (!_.isFunction(method)) method = this[events[key]];
	        if (!method) continue;

	        var match = key.match(delegateEventSplitter);
	        var eventName = match[1], selector = match[2];
	        method = _.bind(method, this);
	        eventName += '.delegateEvents' + this.cid;
	        if (selector === '') {
	          this.$el.on(eventName, method);
	        } else {
	          this.$el.on(eventName, selector, method);
	        }
	      }
	      return this;
	    },

	    // Clears all callbacks previously bound to the view with `delegateEvents`.
	    // You usually don't need to use this, but may wish to if you have multiple
	    // Backbone views attached to the same DOM element.
	    undelegateEvents: function() {
	      this.$el.off('.delegateEvents' + this.cid);
	      return this;
	    },

	    // Ensure that the View has a DOM element to render into.
	    // If `this.el` is a string, pass it through `$()`, take the first
	    // matching element, and re-assign it to `el`. Otherwise, create
	    // an element from the `id`, `className` and `tagName` properties.
	    _ensureElement: function() {
	      if (!this.el) {
	        var attrs = _.extend({}, _.result(this, 'attributes'));
	        if (this.id) attrs.id = _.result(this, 'id');
	        if (this.className) attrs['class'] = _.result(this, 'className');
	        var $el = Backbone.$('<' + _.result(this, 'tagName') + '>').attr(attrs);
	        this.setElement($el, false);
	      } else {
	        this.setElement(_.result(this, 'el'), false);
	      }
	    }

	  });

	  // Backbone.sync
	  // -------------

	  // Override this function to change the manner in which Backbone persists
	  // models to the server. You will be passed the type of request, and the
	  // model in question. By default, makes a RESTful Ajax request
	  // to the model's `url()`. Some possible customizations could be:
	  //
	  // * Use `setTimeout` to batch rapid-fire updates into a single request.
	  // * Send up the models as XML instead of JSON.
	  // * Persist models via WebSockets instead of Ajax.
	  //
	  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
	  // as `POST`, with a `_method` parameter containing the true HTTP method,
	  // as well as all requests with the body as `application/x-www-form-urlencoded`
	  // instead of `application/json` with the model in a param named `model`.
	  // Useful when interfacing with server-side languages like **PHP** that make
	  // it difficult to read the body of `PUT` requests.
	  Backbone.sync = function(method, model, options) {
	    var type = methodMap[method];

	    // Default options, unless specified.
	    _.defaults(options || (options = {}), {
	      emulateHTTP: Backbone.emulateHTTP,
	      emulateJSON: Backbone.emulateJSON
	    });

	    // Default JSON-request options.
	    var params = {type: type, dataType: 'json'};

	    // Ensure that we have a URL.
	    if (!options.url) {
	      params.url = _.result(model, 'url') || urlError();
	    }

	    // Ensure that we have the appropriate request data.
	    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
	      params.contentType = 'application/json';
	      params.data = JSON.stringify(options.attrs || model.toJSON(options));
	    }

	    // For older servers, emulate JSON by encoding the request into an HTML-form.
	    if (options.emulateJSON) {
	      params.contentType = 'application/x-www-form-urlencoded';
	      params.data = params.data ? {model: params.data} : {};
	    }

	    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
	    // And an `X-HTTP-Method-Override` header.
	    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
	      params.type = 'POST';
	      if (options.emulateJSON) params.data._method = type;
	      var beforeSend = options.beforeSend;
	      options.beforeSend = function(xhr) {
	        xhr.setRequestHeader('X-HTTP-Method-Override', type);
	        if (beforeSend) return beforeSend.apply(this, arguments);
	      };
	    }

	    // Don't process data on a non-GET request.
	    if (params.type !== 'GET' && !options.emulateJSON) {
	      params.processData = false;
	    }

	    // If we're sending a `PATCH` request, and we're in an old Internet Explorer
	    // that still has ActiveX enabled by default, override jQuery to use that
	    // for XHR instead. Remove this line when jQuery supports `PATCH` on IE8.
	    if (params.type === 'PATCH' && noXhrPatch) {
	      params.xhr = function() {
	        return new ActiveXObject("Microsoft.XMLHTTP");
	      };
	    }

	    // Make the request, allowing the user to override any Ajax options.
	    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
	    model.trigger('request', model, xhr, options);
	    return xhr;
	  };

	  var noXhrPatch =
	    typeof window !== 'undefined' && !!window.ActiveXObject &&
	      !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

	  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
	  var methodMap = {
	    'create': 'POST',
	    'update': 'PUT',
	    'patch':  'PATCH',
	    'delete': 'DELETE',
	    'read':   'GET'
	  };

	  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
	  // Override this if you'd like to use a different library.
	  Backbone.ajax = function() {
	    return Backbone.$.ajax.apply(Backbone.$, arguments);
	  };

	  // Backbone.Router
	  // ---------------

	  // Routers map faux-URLs to actions, and fire events when routes are
	  // matched. Creating a new one sets its `routes` hash, if not set statically.
	  var Router = Backbone.Router = function(options) {
	    options || (options = {});
	    if (options.routes) this.routes = options.routes;
	    this._bindRoutes();
	    this.initialize.apply(this, arguments);
	  };

	  // Cached regular expressions for matching named param parts and splatted
	  // parts of route strings.
	  var optionalParam = /\((.*?)\)/g;
	  var namedParam    = /(\(\?)?:\w+/g;
	  var splatParam    = /\*\w+/g;
	  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

	  // Set up all inheritable **Backbone.Router** properties and methods.
	  _.extend(Router.prototype, Events, {

	    // Initialize is an empty function by default. Override it with your own
	    // initialization logic.
	    initialize: function(){},

	    // Manually bind a single named route to a callback. For example:
	    //
	    //     this.route('search/:query/p:num', 'search', function(query, num) {
	    //       ...
	    //     });
	    //
	    route: function(route, name, callback) {
	      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
	      if (_.isFunction(name)) {
	        callback = name;
	        name = '';
	      }
	      if (!callback) callback = this[name];
	      var router = this;
	      Backbone.history.route(route, function(fragment) {
	        var args = router._extractParameters(route, fragment);
	        router.execute(callback, args);
	        router.trigger.apply(router, ['route:' + name].concat(args));
	        router.trigger('route', name, args);
	        Backbone.history.trigger('route', router, name, args);
	      });
	      return this;
	    },

	    // Execute a route handler with the provided parameters.  This is an
	    // excellent place to do pre-route setup or post-route cleanup.
	    execute: function(callback, args) {
	      if (callback) callback.apply(this, args);
	    },

	    // Simple proxy to `Backbone.history` to save a fragment into the history.
	    navigate: function(fragment, options) {
	      Backbone.history.navigate(fragment, options);
	      return this;
	    },

	    // Bind all defined routes to `Backbone.history`. We have to reverse the
	    // order of the routes here to support behavior where the most general
	    // routes can be defined at the bottom of the route map.
	    _bindRoutes: function() {
	      if (!this.routes) return;
	      this.routes = _.result(this, 'routes');
	      var route, routes = _.keys(this.routes);
	      while ((route = routes.pop()) != null) {
	        this.route(route, this.routes[route]);
	      }
	    },

	    // Convert a route string into a regular expression, suitable for matching
	    // against the current location hash.
	    _routeToRegExp: function(route) {
	      route = route.replace(escapeRegExp, '\\$&')
	                   .replace(optionalParam, '(?:$1)?')
	                   .replace(namedParam, function(match, optional) {
	                     return optional ? match : '([^/?]+)';
	                   })
	                   .replace(splatParam, '([^?]*?)');
	      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
	    },

	    // Given a route, and a URL fragment that it matches, return the array of
	    // extracted decoded parameters. Empty or unmatched parameters will be
	    // treated as `null` to normalize cross-browser behavior.
	    _extractParameters: function(route, fragment) {
	      var params = route.exec(fragment).slice(1);
	      return _.map(params, function(param, i) {
	        // Don't decode the search params.
	        if (i === params.length - 1) return param || null;
	        return param ? decodeURIComponent(param) : null;
	      });
	    }

	  });

	  // Backbone.History
	  // ----------------

	  // Handles cross-browser history management, based on either
	  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
	  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
	  // and URL fragments. If the browser supports neither (old IE, natch),
	  // falls back to polling.
	  var History = Backbone.History = function() {
	    this.handlers = [];
	    _.bindAll(this, 'checkUrl');

	    // Ensure that `History` can be used outside of the browser.
	    if (typeof window !== 'undefined') {
	      this.location = window.location;
	      this.history = window.history;
	    }
	  };

	  // Cached regex for stripping a leading hash/slash and trailing space.
	  var routeStripper = /^[#\/]|\s+$/g;

	  // Cached regex for stripping leading and trailing slashes.
	  var rootStripper = /^\/+|\/+$/g;

	  // Cached regex for detecting MSIE.
	  var isExplorer = /msie [\w.]+/;

	  // Cached regex for removing a trailing slash.
	  var trailingSlash = /\/$/;

	  // Cached regex for stripping urls of hash.
	  var pathStripper = /#.*$/;

	  // Has the history handling already been started?
	  History.started = false;

	  // Set up all inheritable **Backbone.History** properties and methods.
	  _.extend(History.prototype, Events, {

	    // The default interval to poll for hash changes, if necessary, is
	    // twenty times a second.
	    interval: 50,

	    // Are we at the app root?
	    atRoot: function() {
	      return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root;
	    },

	    // Gets the true hash value. Cannot use location.hash directly due to bug
	    // in Firefox where location.hash will always be decoded.
	    getHash: function(window) {
	      var match = (window || this).location.href.match(/#(.*)$/);
	      return match ? match[1] : '';
	    },

	    // Get the cross-browser normalized URL fragment, either from the URL,
	    // the hash, or the override.
	    getFragment: function(fragment, forcePushState) {
	      if (fragment == null) {
	        if (this._hasPushState || !this._wantsHashChange || forcePushState) {
	          fragment = decodeURI(this.location.pathname + this.location.search);
	          var root = this.root.replace(trailingSlash, '');
	          if (!fragment.indexOf(root)) fragment = fragment.slice(root.length);
	        } else {
	          fragment = this.getHash();
	        }
	      }
	      return fragment.replace(routeStripper, '');
	    },

	    // Start the hash change handling, returning `true` if the current URL matches
	    // an existing route, and `false` otherwise.
	    start: function(options) {
	      if (History.started) throw new Error("Backbone.history has already been started");
	      History.started = true;

	      // Figure out the initial configuration. Do we need an iframe?
	      // Is pushState desired ... is it available?
	      this.options          = _.extend({root: '/'}, this.options, options);
	      this.root             = this.options.root;
	      this._wantsHashChange = this.options.hashChange !== false;
	      this._wantsPushState  = !!this.options.pushState;
	      this._hasPushState    = !!(this.options.pushState && this.history && this.history.pushState);
	      var fragment          = this.getFragment();
	      var docMode           = document.documentMode;
	      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));

	      // Normalize root to always include a leading and trailing slash.
	      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

	      if (oldIE && this._wantsHashChange) {
	        var frame = Backbone.$('<iframe src="javascript:0" tabindex="-1">');
	        this.iframe = frame.hide().appendTo('body')[0].contentWindow;
	        this.navigate(fragment);
	      }

	      // Depending on whether we're using pushState or hashes, and whether
	      // 'onhashchange' is supported, determine how we check the URL state.
	      if (this._hasPushState) {
	        Backbone.$(window).on('popstate', this.checkUrl);
	      } else if (this._wantsHashChange && ('onhashchange' in window) && !oldIE) {
	        Backbone.$(window).on('hashchange', this.checkUrl);
	      } else if (this._wantsHashChange) {
	        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
	      }

	      // Determine if we need to change the base url, for a pushState link
	      // opened by a non-pushState browser.
	      this.fragment = fragment;
	      var loc = this.location;

	      // Transition from hashChange to pushState or vice versa if both are
	      // requested.
	      if (this._wantsHashChange && this._wantsPushState) {

	        // If we've started off with a route from a `pushState`-enabled
	        // browser, but we're currently in a browser that doesn't support it...
	        if (!this._hasPushState && !this.atRoot()) {
	          this.fragment = this.getFragment(null, true);
	          this.location.replace(this.root + '#' + this.fragment);
	          // Return immediately as browser will do redirect to new url
	          return true;

	        // Or if we've started out with a hash-based route, but we're currently
	        // in a browser where it could be `pushState`-based instead...
	        } else if (this._hasPushState && this.atRoot() && loc.hash) {
	          this.fragment = this.getHash().replace(routeStripper, '');
	          this.history.replaceState({}, document.title, this.root + this.fragment);
	        }

	      }

	      if (!this.options.silent) return this.loadUrl();
	    },

	    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
	    // but possibly useful for unit testing Routers.
	    stop: function() {
	      Backbone.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl);
	      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
	      History.started = false;
	    },

	    // Add a route to be tested when the fragment changes. Routes added later
	    // may override previous routes.
	    route: function(route, callback) {
	      this.handlers.unshift({route: route, callback: callback});
	    },

	    // Checks the current URL to see if it has changed, and if it has,
	    // calls `loadUrl`, normalizing across the hidden iframe.
	    checkUrl: function(e) {
	      var current = this.getFragment();
	      if (current === this.fragment && this.iframe) {
	        current = this.getFragment(this.getHash(this.iframe));
	      }
	      if (current === this.fragment) return false;
	      if (this.iframe) this.navigate(current);
	      this.loadUrl();
	    },

	    // Attempt to load the current URL fragment. If a route succeeds with a
	    // match, returns `true`. If no defined routes matches the fragment,
	    // returns `false`.
	    loadUrl: function(fragment) {
	      fragment = this.fragment = this.getFragment(fragment);
	      return _.any(this.handlers, function(handler) {
	        if (handler.route.test(fragment)) {
	          handler.callback(fragment);
	          return true;
	        }
	      });
	    },

	    // Save a fragment into the hash history, or replace the URL state if the
	    // 'replace' option is passed. You are responsible for properly URL-encoding
	    // the fragment in advance.
	    //
	    // The options object can contain `trigger: true` if you wish to have the
	    // route callback be fired (not usually desirable), or `replace: true`, if
	    // you wish to modify the current URL without adding an entry to the history.
	    navigate: function(fragment, options) {
	      if (!History.started) return false;
	      if (!options || options === true) options = {trigger: !!options};

	      var url = this.root + (fragment = this.getFragment(fragment || ''));

	      // Strip the hash for matching.
	      fragment = fragment.replace(pathStripper, '');

	      if (this.fragment === fragment) return;
	      this.fragment = fragment;

	      // Don't include a trailing slash on the root.
	      if (fragment === '' && url !== '/') url = url.slice(0, -1);

	      // If pushState is available, we use it to set the fragment as a real URL.
	      if (this._hasPushState) {
	        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

	      // If hash changes haven't been explicitly disabled, update the hash
	      // fragment to store history.
	      } else if (this._wantsHashChange) {
	        this._updateHash(this.location, fragment, options.replace);
	        if (this.iframe && (fragment !== this.getFragment(this.getHash(this.iframe)))) {
	          // Opening and closing the iframe tricks IE7 and earlier to push a
	          // history entry on hash-tag change.  When replace is true, we don't
	          // want this.
	          if(!options.replace) this.iframe.document.open().close();
	          this._updateHash(this.iframe.location, fragment, options.replace);
	        }

	      // If you've told us that you explicitly don't want fallback hashchange-
	      // based history, then `navigate` becomes a page refresh.
	      } else {
	        return this.location.assign(url);
	      }
	      if (options.trigger) return this.loadUrl(fragment);
	    },

	    // Update the hash location, either replacing the current entry, or adding
	    // a new one to the browser history.
	    _updateHash: function(location, fragment, replace) {
	      if (replace) {
	        var href = location.href.replace(/(javascript:|#).*$/, '');
	        location.replace(href + '#' + fragment);
	      } else {
	        // Some browsers require that `hash` contains a leading #.
	        location.hash = '#' + fragment;
	      }
	    }

	  });

	  // Create the default Backbone.history.
	  Backbone.history = new History;

	  // Helpers
	  // -------

	  // Helper function to correctly set up the prototype chain, for subclasses.
	  // Similar to `goog.inherits`, but uses a hash of prototype properties and
	  // class properties to be extended.
	  var extend = function(protoProps, staticProps) {
	    var parent = this;
	    var child;

	    // The constructor function for the new subclass is either defined by you
	    // (the "constructor" property in your `extend` definition), or defaulted
	    // by us to simply call the parent's constructor.
	    if (protoProps && _.has(protoProps, 'constructor')) {
	      child = protoProps.constructor;
	    } else {
	      child = function(){ return parent.apply(this, arguments); };
	    }

	    // Add static properties to the constructor function, if supplied.
	    _.extend(child, parent, staticProps);

	    // Set the prototype chain to inherit from `parent`, without calling
	    // `parent`'s constructor function.
	    var Surrogate = function(){ this.constructor = child; };
	    Surrogate.prototype = parent.prototype;
	    child.prototype = new Surrogate;

	    // Add prototype properties (instance properties) to the subclass,
	    // if supplied.
	    if (protoProps) _.extend(child.prototype, protoProps);

	    // Set a convenience property in case the parent's prototype is needed
	    // later.
	    child.__super__ = parent.prototype;

	    return child;
	  };

	  // Set up inheritance for the model, collection, router, view and history.
	  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

	  // Throw an error when a URL is needed, and none is supplied.
	  var urlError = function() {
	    throw new Error('A "url" property or function must be specified');
	  };

	  // Wrap an optional error callback with a fallback error event.
	  var wrapError = function(model, options) {
	    var error = options.error;
	    options.error = function(resp) {
	      if (error) error(model, resp, options);
	      model.trigger('error', model, resp, options);
	    };
	  };

	  return Backbone;

	}));


/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = function (obj) {
	obj || (obj = {});
	var __t, __p = '';
	with (obj) {
	__p += '<h1 class="post-title editable" contenteditable="true" data-length="0" data-placeholder="title"></h1>\n<h2 class="post-subtitle editable" contenteditable="true" data-length="0" data-placeholder="subtitle"></h2>\n<div class="post-content editable" contenteditable="true" data-placeholder="content"></div>\n\n<div class="insert-media-region"></div>\n<div class="tooltip-region"></div>\n';

	}
	return __p
	}

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {

		// New override methods can be added by following the naming convention:
		// onOverride[capitalized_key_name]
		// NOTE: capitalized_key_name should exist in the keycodes.mixin keyIndex map

		onOverrideEnter: function onOverrideEnter(e, parentEl, isTrailing, isLeading) {
			var position = isLeading ? 'start' : isTrailing ? 'end' : 'mid-section';
			var parentTagName = parentEl.nodeName;

			console.log('Enter override: at: ', position, 'of', parentTagName);

			// 'enter' was pressed at the end of heading element
			// NOTE: chrome instead of appending <p> appends <div> after headings, which is unwanted
			if (isTrailing && /^H[123456]$/.test(parentTagName)) {
				// prevent default behaviour (would be the insertion of a <p> or <div>)
				e.preventDefault();
				this.createEmptySection(parentEl, true);
				return;
			}
			// 'enter' was pressed at the end of blockquote element
			if (isTrailing && /BLOCKQUOTE/.test(parentTagName)) {
				// prevent default behaviour (would be the insertion of
				// a new blockquote in Chrome or a <br> in Firefox)
				e.preventDefault();
				this.createEmptySection(parentEl, true);
				return;
			}
			// 'enter' was pressed from inside a media element
			if (this.isMediaElement(parentEl)) {
				e.preventDefault();
			}
		},

		onOverrideBackspace: function onOverrideBackspace(e, parentEl, isTrailing, isLeading) {
			var _this = this;

			var position = isLeading ? 'start' : isTrailing ? 'end' : 'mid-section';
			var $parentEl = $(parentEl);
			var parentTagName = parentEl.nodeName;

			console.log('Backspace override: at: ', position, 'of', parentTagName);

			var $prev = $(parentEl).prev();

			// 'backspace' was pressed at the start of figcaption element
			if ($parentEl.hasClass('caption') && (isLeading || parentEl.textContent.length === 0)) {
				e.preventDefault();
				return;
			}

			// 'backspace' was pressed immediately after a media element
			if (isLeading && $prev.hasClass('media-element')) {
				console.log('after media');
				e.preventDefault();
				// mark images inside $prev for delete (there may be many)
				$('img', $prev).each(function (index, image) {
					_this.markImageForDelete(image);
				});
				// manually remove the previous element
				var mediaName = $prev.attr('name');
				this.destroyMediaView(mediaName);
				// force section refreshing
				// self.$postContent.trigger('sectionsChanged.posting.EDITOR');
				this.updateSections();
			}
		},

		onOverrideDelete: function onOverrideDelete(e, parentEl, isTrailing, isLeading) {
			var _this2 = this;

			var position = isLeading ? 'start' : isTrailing ? 'end' : 'mid-section';
			var $parentEl = $(parentEl);
			var parentTagName = parentEl.nodeName;

			console.log('Delete override: at: ', position, 'of', parentTagName);

			var $next = $parentEl.next();

			// 'delete' was pressed at the end of figcaption element
			if ($parentEl.hasClass('caption') && (isTrailing || parentEl.textContent.length === 0)) {
				e.preventDefault();
				return;
			}

			// 'delete' was pressed at the end of current element & next element is a media element
			if (isTrailing && $next.hasClass('media-element')) {
				console.log('before media');
				e.preventDefault();
				// mark images inside $next for delete (there may be many)
				$('img', $next).each(function (index, image) {
					_this2.markImageForDelete(image);
				});
				// manually remove the following element
				var mediaName = $next.attr('name');
				this.destroyMediaView(mediaName);
				// force section refreshing
				// self.$postContent.trigger('sectionsChanged.posting.EDITOR');
				this.updateSections();
			}
		}
		};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _helper = __webpack_require__(13);

	var _helper2 = _interopRequireDefault(_helper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

		placeholders: {
			title: 'Enter a title',
			subtitle: 'Enter a subtitle',
			content: 'Start typing your post'
		},

		placeholderHandlersRegistered: false,

		ui: {
			placeholder: '[data-placeholder]'
		},

		events: {
			'blur @ui.placeholder': 'handlePlaceholderBlur',
			'click @ui.placeholder': 'handlePlaceholderClick'
		},

		onAttach: function onAttach() {
			// Init placeholders
			this.initPlaceholders();
		},

		onBeforeDestroy: function onBeforeDestroy() {
			this.ui.placeholder.off();
		},

		initPlaceholders: function initPlaceholders() {
			// all placeholders start empty
			this.ui.placeholder.not('[data-length]').attr('data-length', 0);
			// set placeholder text only on elements that are empty
			this.ui.title.filter('[data-length=0]').html(this.placeholders.title);
			this.ui.subtitle.filter('[data-length=0]').html(this.placeholders.subtitle);
			this.ui.content.filter('[data-length=0]').children('p:first-child').html(this.placeholders.content);
			this.ui.content.blur().children().blur();
		},

		handlePlaceholderChange: function handlePlaceholderChange(e) {
			var self = this;

			var placeholder = $(e.currentTarget);
			var which = placeholder.attr('data-placeholder');

			// 'enter'
			if (e.keyCode === self.enterKey) {
				// prevent 'enter' default behaviour
				if (placeholder.hasClass('post-title') || placeholder.hasClass('post-subtitle')) {
					return false;
				}
			}

			// 'tab'
			if (e.keyCode === self.tabKey) {
				if (e.type === 'keydown') {
					if (which === 'title') {
						placeholder.trigger('blur');
						this.ui.subtitle.trigger('click').trigger('focus');
					}
					if (which === 'subtitle') {
						placeholder.trigger('blur');
						this.ui.content.trigger('click').trigger('focus');
						this.ui.content.children('p:first-child').trigger('click').trigger('focus');
						_helper2.default.setEndOfContenteditable($('.post-content > p:first-child')[0]);
					}
				}
				return false;
			}

			// on any other key press, we set placeholder text size
			var textLength = which === 'content' ? $.trim(placeholder.children('.post-section:not(.media-element)').text()).length : $.trim(placeholder.text()).length;

			placeholder.attr('data-length', textLength);
		},

		handlePlaceholderBlur: function handlePlaceholderBlur(e) {
			var placeholder = $(e.currentTarget);
			var which = placeholder.attr('data-placeholder');

			if (placeholder.attr('data-length') === '0') {
				if (which === 'content') {
					placeholder.children('p:first-child').html(this.placeholders[which]);
				} else {
					placeholder.html(this.placeholders[which]);
				}
			}
		},

		handlePlaceholderClick: function handlePlaceholderClick(e) {
			this.registerHandlers();
			this.focusAndEmpty(e);
		},

		registerHandlers: function registerHandlers() {
			if (!this.placeholderHandlersRegistered) {
				this.ui.placeholder.on('keydown keyup keypress change input', this.handlePlaceholderChange.bind(this));
				this.placeholderHandlersRegistered = true;
			}
		},

		focusAndEmpty: function focusAndEmpty(e) {
			var initiator = $(e.target);
			// console.log(e);
			// console.log('Am I the first child? ', $target.is('p.post-section:first-child'));
			// if click was triggered from inside a non-section (i.e. slideshow picker)
			if (!initiator.attr('data-placeholder') && !initiator.is('p.post-section:first-child')) {
				// console.log('I am not inside a placeholder, exiting...');
				return true;
			}
			// // if click was triggered from inside a non-section (i.e. slideshow picker)
			// if ($target.closest('.non-section').length > 0) {
			// 	return true;
			// }

			var placeholder = $(e.currentTarget);

			var focusEl = void 0;
			if (placeholder.hasClass('post-content')) {
				focusEl = placeholder.children('p:first-child');
			} else {
				focusEl = placeholder;
			}

			if (parseInt(placeholder.attr('data-length')) === 0) {
				focusEl.empty();
				_helper2.default.selectElementContents(focusEl[0]);
			}
		}
		};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _jquery = __webpack_require__(5);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _helper = __webpack_require__(13);

	var _helper2 = _interopRequireDefault(_helper);

	var _uid = __webpack_require__(25);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

		ui: {
			sectionParent: '.post-content'
		},

		events: {
			'input @ui.sectionParent': 'updateSections',
			'change @ui.sectionParent': 'updateSections'
		},

		// children of @ui.sectionParent that are considered sections
		sectionSelector: ':not(br):not(hr):not(.non-section)',

		// number of existing sections
		numOfSections: 1,

		onRender: function onRender() {
			this.createFirstSection();
		},

		createFirstSection: function createFirstSection() {
			// create the first section with a random uid
			if (typeof this.ui.sectionParent.attr('data-length') === 'undefined') {
				this.createEmptySection('start', false);
			}
		},

		createEmptySection: function createEmptySection(hook, giveFocus) {
			console.log('createFirstSection');
			// create new empty section
			var section = (0, _jquery2.default)('<p class="post-section" name="' + (0, _uid.generateSectionUID)() + '"></p>');
			// attach it to dom
			if (!hook || hook === 'start') {
				this.ui.sectionParent.prepend(section);
			} else if (hook === 'end') {
				this.ui.sectionParent.append(section);
			} else if (hook.nodeType || hook instanceof _jquery2.default) {
				section.insertAfter(hook);
			} else {
				return false;
			}
			// give it focus
			if (giveFocus) {
				_helper2.default.selectElementContents(section[0]);
			}
			// force counting of sections
			this.updateSections();
			// return it
			return section;
		},

		renameDuplicateSections: function renameDuplicateSections() {
			var sections = this.ui.sectionParent.children(this.sectionSelector);

			// handle the case where the browser gives name to new section (there will be duplicates)
			for (var i = 0; i < _uid.sectionUIDs.length; i++) {
				// find elements with current name
				var sectionsByName = sections.filter('[name=' + _uid.sectionUIDs[i] + ']');
				// if more than one exist, we have duplicates
				if (sectionsByName.length > 1) {
					// leaving the first element alone, we change all others' names
					// NOTE: name is not the only duplicate attribute. The new paragraph may also have
					//		 inherited the 'data-side-ref' attribute from it's previous sibling
					/* jshint -W083 */
					sectionsByName.each(function (i, section) {
						(0, _jquery2.default)(section).attr('name', (0, _uid.generateSectionUID)()).removeAttr('data-side-ref');
					});
					break;
				}
			}
		},

		nameUnnamedSections: function nameUnnamedSections() {
			var sections = this.ui.sectionParent.children(this.sectionSelector);

			var unnamedSections = sections.filter(':not([name])').addClass('post-section');

			unnamedSections.each(function (i, section) {
				(0, _jquery2.default)(section).attr('name', (0, _uid.generateSectionUID)());
			});
		},

		updateSections: function updateSections() {
			var _this = this;

			// we calculate section number after a small delay to allow the DOM inspector to parse any changes
			requestAnimationFrame(function () {
				// clear accidentally added first level <br> elements (mainly for firefox)
				_this.ui.sectionParent.children('br').remove();

				var sections = _this.ui.sectionParent.children(_this.sectionSelector);
				var newNumOfSections = sections.length;

				if (_this.numOfSections !== newNumOfSections) {

					// new sections were added: give them unique names
					if (newNumOfSections > _this.numOfSections) {
						console.info('sections added.');
						// handle the case where the browser gives name to new section (there will be duplicates)
						_this.renameDuplicateSections();
						// handle the case where the browser creates an unnamed/un-classed section
						// (e.g. after pressing enter from inside an empty paragraph)
						_this.nameUnnamedSections();
					}

					// sections were deleted
					else {
							console.info('sections deleted.');
							// the user accidentally deleted all sections
							if (newNumOfSections === 0) {
								console.info('all sections deleted');
								_this.ui.sectionParent.focus(); // give focus to the correct contentEditable element (chrome)
								document.execCommand('selectAll', false, null); // select leftovers (<br/> elements usually)
								document.execCommand('delete', false, null); // delete leftovers
								_this.createEmptySection('start', true);
								newNumOfSections = 1;
								sections = _this.ui.sectionParent.children(_this.sectionSelector);
							}
						}

					// update sectionUIDs in memory to reflect DOM state
					_uid.sectionUIDs.length = 0;
					sections.each(function (i, section) {
						_uid.sectionUIDs.push((0, _jquery2.default)(section).attr('name'));
					});
					console.info(_uid.sectionUIDs);
				}

				// update number of sections
				_this.numOfSections = newNumOfSections;
			});
		}
		};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Selection save and restore module for Rangy.
	 * Saves and restores user selections using marker invisible elements in the DOM.
	 *
	 * Part of Rangy, a cross-browser JavaScript range and selection library
	 * https://github.com/timdown/rangy
	 *
	 * Depends on Rangy core.
	 *
	 * Copyright 2015, Tim Down
	 * Licensed under the MIT license.
	 * Version: 1.3.1-dev
	 * Build date: 20 May 2015
	 */
	(function(factory, root) {
	    if (true) {
	        // AMD. Register as an anonymous module with a dependency on Rangy.
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(14)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module != "undefined" && typeof exports == "object") {
	        // Node/CommonJS style
	        module.exports = factory( require("rangy-core") );
	    } else {
	        // No AMD or CommonJS support so we use the rangy property of root (probably the global variable)
	        factory(root.rangy);
	    }
	})(function(rangy) {
	    rangy.createModule("SaveRestore", ["WrappedRange"], function(api, module) {
	        var dom = api.dom;
	        var removeNode = dom.removeNode;
	        var isDirectionBackward = api.Selection.isDirectionBackward;
	        var markerTextChar = "\ufeff";

	        function gEBI(id, doc) {
	            return (doc || document).getElementById(id);
	        }

	        function insertRangeBoundaryMarker(range, atStart) {
	            var markerId = "selectionBoundary_" + (+new Date()) + "_" + ("" + Math.random()).slice(2);
	            var markerEl;
	            var doc = dom.getDocument(range.startContainer);

	            // Clone the Range and collapse to the appropriate boundary point
	            var boundaryRange = range.cloneRange();
	            boundaryRange.collapse(atStart);

	            // Create the marker element containing a single invisible character using DOM methods and insert it
	            markerEl = doc.createElement("span");
	            markerEl.id = markerId;
	            markerEl.style.lineHeight = "0";
	            markerEl.style.display = "none";
	            markerEl.className = "rangySelectionBoundary";
	            markerEl.appendChild(doc.createTextNode(markerTextChar));

	            boundaryRange.insertNode(markerEl);
	            return markerEl;
	        }

	        function setRangeBoundary(doc, range, markerId, atStart) {
	            var markerEl = gEBI(markerId, doc);
	            if (markerEl) {
	                range[atStart ? "setStartBefore" : "setEndBefore"](markerEl);
	                removeNode(markerEl);
	            } else {
	                module.warn("Marker element has been removed. Cannot restore selection.");
	            }
	        }

	        function compareRanges(r1, r2) {
	            return r2.compareBoundaryPoints(r1.START_TO_START, r1);
	        }

	        function saveRange(range, direction) {
	            var startEl, endEl, doc = api.DomRange.getRangeDocument(range), text = range.toString();
	            var backward = isDirectionBackward(direction);

	            if (range.collapsed) {
	                endEl = insertRangeBoundaryMarker(range, false);
	                return {
	                    document: doc,
	                    markerId: endEl.id,
	                    collapsed: true
	                };
	            } else {
	                endEl = insertRangeBoundaryMarker(range, false);
	                startEl = insertRangeBoundaryMarker(range, true);

	                return {
	                    document: doc,
	                    startMarkerId: startEl.id,
	                    endMarkerId: endEl.id,
	                    collapsed: false,
	                    backward: backward,
	                    toString: function() {
	                        return "original text: '" + text + "', new text: '" + range.toString() + "'";
	                    }
	                };
	            }
	        }

	        function restoreRange(rangeInfo, normalize) {
	            var doc = rangeInfo.document;
	            if (typeof normalize == "undefined") {
	                normalize = true;
	            }
	            var range = api.createRange(doc);
	            if (rangeInfo.collapsed) {
	                var markerEl = gEBI(rangeInfo.markerId, doc);
	                if (markerEl) {
	                    markerEl.style.display = "inline";
	                    var previousNode = markerEl.previousSibling;

	                    // Workaround for issue 17
	                    if (previousNode && previousNode.nodeType == 3) {
	                        removeNode(markerEl);
	                        range.collapseToPoint(previousNode, previousNode.length);
	                    } else {
	                        range.collapseBefore(markerEl);
	                        removeNode(markerEl);
	                    }
	                } else {
	                    module.warn("Marker element has been removed. Cannot restore selection.");
	                }
	            } else {
	                setRangeBoundary(doc, range, rangeInfo.startMarkerId, true);
	                setRangeBoundary(doc, range, rangeInfo.endMarkerId, false);
	            }

	            if (normalize) {
	                range.normalizeBoundaries();
	            }

	            return range;
	        }

	        function saveRanges(ranges, direction) {
	            var rangeInfos = [], range, doc;
	            var backward = isDirectionBackward(direction);

	            // Order the ranges by position within the DOM, latest first, cloning the array to leave the original untouched
	            ranges = ranges.slice(0);
	            ranges.sort(compareRanges);

	            for (var i = 0, len = ranges.length; i < len; ++i) {
	                rangeInfos[i] = saveRange(ranges[i], backward);
	            }

	            // Now that all the markers are in place and DOM manipulation over, adjust each range's boundaries to lie
	            // between its markers
	            for (i = len - 1; i >= 0; --i) {
	                range = ranges[i];
	                doc = api.DomRange.getRangeDocument(range);
	                if (range.collapsed) {
	                    range.collapseAfter(gEBI(rangeInfos[i].markerId, doc));
	                } else {
	                    range.setEndBefore(gEBI(rangeInfos[i].endMarkerId, doc));
	                    range.setStartAfter(gEBI(rangeInfos[i].startMarkerId, doc));
	                }
	            }

	            return rangeInfos;
	        }

	        function saveSelection(win) {
	            if (!api.isSelectionValid(win)) {
	                module.warn("Cannot save selection. This usually happens when the selection is collapsed and the selection document has lost focus.");
	                return null;
	            }
	            var sel = api.getSelection(win);
	            var ranges = sel.getAllRanges();
	            var backward = (ranges.length == 1 && sel.isBackward());

	            var rangeInfos = saveRanges(ranges, backward);

	            // Ensure current selection is unaffected
	            if (backward) {
	                sel.setSingleRange(ranges[0], backward);
	            } else {
	                sel.setRanges(ranges);
	            }

	            return {
	                win: win,
	                rangeInfos: rangeInfos,
	                restored: false
	            };
	        }

	        function restoreRanges(rangeInfos) {
	            var ranges = [];

	            // Ranges are in reverse order of appearance in the DOM. We want to restore earliest first to avoid
	            // normalization affecting previously restored ranges.
	            var rangeCount = rangeInfos.length;

	            for (var i = rangeCount - 1; i >= 0; i--) {
	                ranges[i] = restoreRange(rangeInfos[i], true);
	            }

	            return ranges;
	        }

	        function restoreSelection(savedSelection, preserveDirection) {
	            if (!savedSelection.restored) {
	                var rangeInfos = savedSelection.rangeInfos;
	                var sel = api.getSelection(savedSelection.win);
	                var ranges = restoreRanges(rangeInfos), rangeCount = rangeInfos.length;

	                if (rangeCount == 1 && preserveDirection && api.features.selectionHasExtend && rangeInfos[0].backward) {
	                    sel.removeAllRanges();
	                    sel.addRange(ranges[0], true);
	                } else {
	                    sel.setRanges(ranges);
	                }

	                savedSelection.restored = true;
	            }
	        }

	        function removeMarkerElement(doc, markerId) {
	            var markerEl = gEBI(markerId, doc);
	            if (markerEl) {
	                removeNode(markerEl);
	            }
	        }

	        function removeMarkers(savedSelection) {
	            var rangeInfos = savedSelection.rangeInfos;
	            for (var i = 0, len = rangeInfos.length, rangeInfo; i < len; ++i) {
	                rangeInfo = rangeInfos[i];
	                if (rangeInfo.collapsed) {
	                    removeMarkerElement(savedSelection.doc, rangeInfo.markerId);
	                } else {
	                    removeMarkerElement(savedSelection.doc, rangeInfo.startMarkerId);
	                    removeMarkerElement(savedSelection.doc, rangeInfo.endMarkerId);
	                }
	            }
	        }

	        api.util.extend(api, {
	            saveRange: saveRange,
	            restoreRange: restoreRange,
	            saveRanges: saveRanges,
	            restoreRanges: restoreRanges,
	            saveSelection: saveSelection,
	            restoreSelection: restoreSelection,
	            removeMarkerElement: removeMarkerElement,
	            removeMarkers: removeMarkers
	        });
	    });

	    return rangy;
	}, this);


/***/ }
/******/ ]);
//# sourceMappingURL=typely.js.map