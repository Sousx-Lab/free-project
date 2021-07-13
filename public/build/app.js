// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this,
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4DVBA":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "80279c9a69e190d3bfbeb51d85e668fb"; // @flow
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6UHSv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _appScss = require("../scss/app.scss");
var _transition = require("../services/transition");
var _transitionDefault = parcelHelpers.interopDefault(_transition);
var _turbo = require("@hotwired/turbo");
var _carousel = require("../services/carousel");
var _carouselDefault = parcelHelpers.interopDefault(_carousel);
var _notify = require("../services/notify");
var _notifyDefault = parcelHelpers.interopDefault(_notify);
_turbo.start();
[
    'turbo:load',
    'turbo:render'
].forEach((e)=>{
    document.addEventListener(e, function() {
        _transitionDefault.default();
        _carouselDefault.default();
        _notifyDefault.default();
    });
});

},{"../scss/app.scss":"4DMVC","@hotwired/turbo":"3VJOf","@parcel/transformer-js/src/esmodule-helpers.js":"73PPo","../services/transition":"FpJX3","../services/carousel":"2H2ns","../services/notify":"2j3p3"}],"4DMVC":[function() {},{}],"3VJOf":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define([
        'exports'
    ], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Turbo = {
    }));
})(this, function(exports) {
    'use strict';
    (function() {
        if (window.Reflect === undefined || window.customElements === undefined || window.customElements.polyfillWrapFlushCallback) return;
        var BuiltInHTMLElement = HTMLElement;
        var wrapperForTheName = {
            'HTMLElement': function HTMLElement1() {
                return Reflect.construct(BuiltInHTMLElement, [], this.constructor);
            }
        };
        window.HTMLElement = wrapperForTheName['HTMLElement'];
        HTMLElement.prototype = BuiltInHTMLElement.prototype;
        HTMLElement.prototype.constructor = HTMLElement;
        Object.setPrototypeOf(HTMLElement, BuiltInHTMLElement);
    })();
    var submittersByForm = new WeakMap;
    function findSubmitterFromClickTarget(target) {
        var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
        var candidate = element ? element.closest("input, button") : null;
        return (candidate === null || candidate === void 0 ? void 0 : candidate.type) == "submit" ? candidate : null;
    }
    function clickCaptured(event) {
        var submitter = findSubmitterFromClickTarget(event.target);
        if (submitter && submitter.form) submittersByForm.set(submitter.form, submitter);
    }
    (function() {
        if ("SubmitEvent" in window) return;
        addEventListener("click", clickCaptured, true);
        Object.defineProperty(Event.prototype, "submitter", {
            get: function() {
                if (this.type == "submit" && this.target instanceof HTMLFormElement) return submittersByForm.get(this.target);
            }
        });
    })();
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign1(t) {
            for(var s, i = 1, n = arguments.length; i < n; i++){
                s = arguments[i];
                for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        function verb(n) {
            return function(v) {
                return step([
                    n,
                    v
                ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while(_)try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [
                    op[0] & 2,
                    t.value
                ];
                switch(op[0]){
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [
                            0
                        ];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally{
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
        } catch (error) {
            e = {
                error: error
            };
        } finally{
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally{
                if (e) throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
            value: raw
        });
        else cooked.raw = raw;
        return cooked;
    }
    var FrameLoadingStyle;
    (function(FrameLoadingStyle1) {
        FrameLoadingStyle1["eager"] = "eager";
        FrameLoadingStyle1["lazy"] = "lazy";
    })(FrameLoadingStyle || (FrameLoadingStyle = {
    }));
    var FrameElement1 = function(_super) {
        __extends(FrameElement2, _super);
        function FrameElement2() {
            var _this = _super.call(this) || this;
            _this.loaded = Promise.resolve();
            _this.delegate = new FrameElement2.delegateConstructor(_this);
            return _this;
        }
        Object.defineProperty(FrameElement2, "observedAttributes", {
            get: function() {
                return [
                    "disabled",
                    "loading",
                    "src"
                ];
            },
            enumerable: false,
            configurable: true
        });
        FrameElement2.prototype.connectedCallback = function() {
            this.delegate.connect();
        };
        FrameElement2.prototype.disconnectedCallback = function() {
            this.delegate.disconnect();
        };
        FrameElement2.prototype.attributeChangedCallback = function(name) {
            if (name == "loading") this.delegate.loadingStyleChanged();
            else if (name == "src") this.delegate.sourceURLChanged();
            else this.delegate.disabledChanged();
        };
        Object.defineProperty(FrameElement2.prototype, "src", {
            get: function() {
                return this.getAttribute("src");
            },
            set: function(value) {
                if (value) this.setAttribute("src", value);
                else this.removeAttribute("src");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameElement2.prototype, "loading", {
            get: function() {
                return frameLoadingStyleFromString(this.getAttribute("loading") || "");
            },
            set: function(value) {
                if (value) this.setAttribute("loading", value);
                else this.removeAttribute("loading");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameElement2.prototype, "disabled", {
            get: function() {
                return this.hasAttribute("disabled");
            },
            set: function(value) {
                if (value) this.setAttribute("disabled", "");
                else this.removeAttribute("disabled");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameElement2.prototype, "autoscroll", {
            get: function() {
                return this.hasAttribute("autoscroll");
            },
            set: function(value) {
                if (value) this.setAttribute("autoscroll", "");
                else this.removeAttribute("autoscroll");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameElement2.prototype, "complete", {
            get: function() {
                return !this.delegate.isLoading;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameElement2.prototype, "isActive", {
            get: function() {
                return this.ownerDocument === document && !this.isPreview;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameElement2.prototype, "isPreview", {
            get: function() {
                var _a, _b;
                return (_b = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.documentElement) === null || _b === void 0 ? void 0 : _b.hasAttribute("data-turbo-preview");
            },
            enumerable: false,
            configurable: true
        });
        return FrameElement2;
    }(HTMLElement);
    function frameLoadingStyleFromString(style) {
        switch(style.toLowerCase()){
            case "lazy":
                return FrameLoadingStyle.lazy;
            default:
                return FrameLoadingStyle.eager;
        }
    }
    function expandURL(locatable) {
        return new URL(locatable.toString(), document.baseURI);
    }
    function getAnchor(url) {
        var anchorMatch;
        if (url.hash) return url.hash.slice(1);
        else if (anchorMatch = url.href.match(/#(.*)$/)) return anchorMatch[1];
        else return "";
    }
    function getExtension(url) {
        return (getLastPathComponent(url).match(/\.[^.]*$/) || [])[0] || "";
    }
    function isHTML(url) {
        return !!getExtension(url).match(/^(?:|\.(?:htm|html|xhtml))$/);
    }
    function isPrefixedBy(baseURL, url) {
        var prefix = getPrefix(url);
        return baseURL.href === expandURL(prefix).href || baseURL.href.startsWith(prefix);
    }
    function toCacheKey(url) {
        var anchorLength = url.hash.length;
        if (anchorLength < 2) return url.href;
        else return url.href.slice(0, -anchorLength);
    }
    function urlsAreEqual(left, right) {
        return expandURL(left).href == expandURL(right).href;
    }
    function getPathComponents(url) {
        return url.pathname.split("/").slice(1);
    }
    function getLastPathComponent(url) {
        return getPathComponents(url).slice(-1)[0];
    }
    function getPrefix(url) {
        return addTrailingSlash(url.origin + url.pathname);
    }
    function addTrailingSlash(value) {
        return value.endsWith("/") ? value : value + "/";
    }
    var FetchResponse = function() {
        function FetchResponse1(response) {
            this.response = response;
        }
        Object.defineProperty(FetchResponse1.prototype, "succeeded", {
            get: function() {
                return this.response.ok;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "failed", {
            get: function() {
                return !this.succeeded;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "clientError", {
            get: function() {
                return this.statusCode >= 400 && this.statusCode <= 499;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "serverError", {
            get: function() {
                return this.statusCode >= 500 && this.statusCode <= 599;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "redirected", {
            get: function() {
                return this.response.redirected;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "location", {
            get: function() {
                return expandURL(this.response.url);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "isHTML", {
            get: function() {
                return this.contentType && this.contentType.match(/^(?:text\/([^\s;,]+\b)?html|application\/xhtml\+xml)\b/);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "statusCode", {
            get: function() {
                return this.response.status;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "contentType", {
            get: function() {
                return this.header("Content-Type");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "responseText", {
            get: function() {
                return this.response.text();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchResponse1.prototype, "responseHTML", {
            get: function() {
                if (this.isHTML) return this.response.text();
                else return Promise.resolve(undefined);
            },
            enumerable: false,
            configurable: true
        });
        FetchResponse1.prototype.header = function(name) {
            return this.response.headers.get(name);
        };
        return FetchResponse1;
    }();
    function dispatch(eventName, _a) {
        var _b = _a === void 0 ? {
        } : _a, target = _b.target, cancelable = _b.cancelable, detail = _b.detail;
        var event = new CustomEvent(eventName, {
            cancelable: cancelable,
            bubbles: true,
            detail: detail
        });
        (target || document.documentElement).dispatchEvent(event);
        return event;
    }
    function nextAnimationFrame() {
        return new Promise(function(resolve) {
            return requestAnimationFrame(function() {
                return resolve();
            });
        });
    }
    function nextEventLoopTick() {
        return new Promise(function(resolve) {
            return setTimeout(function() {
                return resolve();
            }, 0);
        });
    }
    function nextMicrotask() {
        return Promise.resolve();
    }
    function parseHTMLDocument(html) {
        if (html === void 0) html = "";
        return new DOMParser().parseFromString(html, "text/html");
    }
    function unindent(strings) {
        var values = [];
        for(var _i = 1; _i < arguments.length; _i++)values[_i - 1] = arguments[_i];
        var lines = interpolate(strings, values).replace(/^\n/, "").split("\n");
        var match = lines[0].match(/^\s+/);
        var indent = match ? match[0].length : 0;
        return lines.map(function(line) {
            return line.slice(indent);
        }).join("\n");
    }
    function interpolate(strings, values) {
        return strings.reduce(function(result, string, i) {
            var value = values[i] == undefined ? "" : values[i];
            return result + string + value;
        }, "");
    }
    function uuid() {
        return Array.apply(null, {
            length: 36
        }).map(function(_, i) {
            if (i == 8 || i == 13 || i == 18 || i == 23) return "-";
            else if (i == 14) return "4";
            else if (i == 19) return (Math.floor(Math.random() * 4) + 8).toString(16);
            else return Math.floor(Math.random() * 15).toString(16);
        }).join("");
    }
    var FetchMethod;
    (function(FetchMethod1) {
        FetchMethod1[FetchMethod1["get"] = 0] = "get";
        FetchMethod1[FetchMethod1["post"] = 1] = "post";
        FetchMethod1[FetchMethod1["put"] = 2] = "put";
        FetchMethod1[FetchMethod1["patch"] = 3] = "patch";
        FetchMethod1[FetchMethod1["delete"] = 4] = "delete";
    })(FetchMethod || (FetchMethod = {
    }));
    function fetchMethodFromString(method) {
        switch(method.toLowerCase()){
            case "get":
                return FetchMethod.get;
            case "post":
                return FetchMethod.post;
            case "put":
                return FetchMethod.put;
            case "patch":
                return FetchMethod.patch;
            case "delete":
                return FetchMethod.delete;
        }
    }
    var FetchRequest = function() {
        function FetchRequest1(delegate, method, location, body) {
            if (body === void 0) body = new URLSearchParams;
            this.abortController = new AbortController;
            this.delegate = delegate;
            this.method = method;
            this.headers = this.defaultHeaders;
            if (this.isIdempotent) this.url = mergeFormDataEntries(location, __spread(body.entries()));
            else {
                this.body = body;
                this.url = location;
            }
        }
        Object.defineProperty(FetchRequest1.prototype, "location", {
            get: function() {
                return this.url;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchRequest1.prototype, "params", {
            get: function() {
                return this.url.searchParams;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchRequest1.prototype, "entries", {
            get: function() {
                return this.body ? Array.from(this.body.entries()) : [];
            },
            enumerable: false,
            configurable: true
        });
        FetchRequest1.prototype.cancel = function() {
            this.abortController.abort();
        };
        FetchRequest1.prototype.perform = function() {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function() {
                var fetchOptions, response, error_1;
                return __generator(this, function(_c) {
                    switch(_c.label){
                        case 0:
                            fetchOptions = this.fetchOptions;
                            (_b = (_a = this.delegate).prepareHeadersForRequest) === null || _b === void 0 || _b.call(_a, this.headers, this);
                            dispatch("turbo:before-fetch-request", {
                                detail: {
                                    fetchOptions: fetchOptions
                                }
                            });
                            _c.label = 1;
                        case 1:
                            _c.trys.push([
                                1,
                                4,
                                5,
                                6
                            ]);
                            this.delegate.requestStarted(this);
                            return [
                                4,
                                fetch(this.url.href, fetchOptions)
                            ];
                        case 2:
                            response = _c.sent();
                            return [
                                4,
                                this.receive(response)
                            ];
                        case 3:
                            return [
                                2,
                                _c.sent()
                            ];
                        case 4:
                            error_1 = _c.sent();
                            this.delegate.requestErrored(this, error_1);
                            throw error_1;
                        case 5:
                            this.delegate.requestFinished(this);
                            return [
                                7
                            ];
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            });
        };
        FetchRequest1.prototype.receive = function(response) {
            return __awaiter(this, void 0, void 0, function() {
                var fetchResponse, event;
                return __generator(this, function(_a) {
                    fetchResponse = new FetchResponse(response);
                    event = dispatch("turbo:before-fetch-response", {
                        cancelable: true,
                        detail: {
                            fetchResponse: fetchResponse
                        }
                    });
                    if (event.defaultPrevented) this.delegate.requestPreventedHandlingResponse(this, fetchResponse);
                    else if (fetchResponse.succeeded) this.delegate.requestSucceededWithResponse(this, fetchResponse);
                    else this.delegate.requestFailedWithResponse(this, fetchResponse);
                    return [
                        2,
                        fetchResponse
                    ];
                });
            });
        };
        Object.defineProperty(FetchRequest1.prototype, "fetchOptions", {
            get: function() {
                return {
                    method: FetchMethod[this.method].toUpperCase(),
                    credentials: "same-origin",
                    headers: this.headers,
                    redirect: "follow",
                    body: this.body,
                    signal: this.abortSignal
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchRequest1.prototype, "defaultHeaders", {
            get: function() {
                return {
                    "Accept": "text/html, application/xhtml+xml"
                };
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchRequest1.prototype, "isIdempotent", {
            get: function() {
                return this.method == FetchMethod.get;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FetchRequest1.prototype, "abortSignal", {
            get: function() {
                return this.abortController.signal;
            },
            enumerable: false,
            configurable: true
        });
        return FetchRequest1;
    }();
    function mergeFormDataEntries(url, entries) {
        var e_1, _a;
        var currentSearchParams = new URLSearchParams(url.search);
        try {
            for(var entries_1 = __values(entries), entries_1_1 = entries_1.next(); !entries_1_1.done; entries_1_1 = entries_1.next()){
                var _b = __read(entries_1_1.value, 2), name_1 = _b[0], value = _b[1];
                if (value instanceof File) continue;
                if (currentSearchParams.has(name_1)) {
                    currentSearchParams.delete(name_1);
                    url.searchParams.set(name_1, value);
                } else url.searchParams.append(name_1, value);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (entries_1_1 && !entries_1_1.done && (_a = entries_1.return)) _a.call(entries_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        return url;
    }
    var AppearanceObserver = function() {
        function AppearanceObserver1(delegate, element) {
            var _this = this;
            this.started = false;
            this.intersect = function(entries) {
                var lastEntry = entries.slice(-1)[0];
                if (lastEntry === null || lastEntry === void 0 ? void 0 : lastEntry.isIntersecting) _this.delegate.elementAppearedInViewport(_this.element);
            };
            this.delegate = delegate;
            this.element = element;
            this.intersectionObserver = new IntersectionObserver(this.intersect);
        }
        AppearanceObserver1.prototype.start = function() {
            if (!this.started) {
                this.started = true;
                this.intersectionObserver.observe(this.element);
            }
        };
        AppearanceObserver1.prototype.stop = function() {
            if (this.started) {
                this.started = false;
                this.intersectionObserver.unobserve(this.element);
            }
        };
        return AppearanceObserver1;
    }();
    var StreamMessage = function() {
        function StreamMessage1(html) {
            this.templateElement = document.createElement("template");
            this.templateElement.innerHTML = html;
        }
        StreamMessage1.wrap = function(message) {
            if (typeof message == "string") return new this(message);
            else return message;
        };
        Object.defineProperty(StreamMessage1.prototype, "fragment", {
            get: function() {
                var e_1, _a;
                var fragment = document.createDocumentFragment();
                try {
                    for(var _b = __values(this.foreignElements), _c = _b.next(); !_c.done; _c = _b.next()){
                        var element = _c.value;
                        fragment.appendChild(document.importNode(element, true));
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
                return fragment;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamMessage1.prototype, "foreignElements", {
            get: function() {
                return this.templateChildren.reduce(function(streamElements, child) {
                    if (child.tagName.toLowerCase() == "turbo-stream") return __spread(streamElements, [
                        child
                    ]);
                    else return streamElements;
                }, []);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamMessage1.prototype, "templateChildren", {
            get: function() {
                return Array.from(this.templateElement.content.children);
            },
            enumerable: false,
            configurable: true
        });
        StreamMessage1.contentType = "text/vnd.turbo-stream.html";
        return StreamMessage1;
    }();
    var FormSubmissionState;
    (function(FormSubmissionState1) {
        FormSubmissionState1[FormSubmissionState1["initialized"] = 0] = "initialized";
        FormSubmissionState1[FormSubmissionState1["requesting"] = 1] = "requesting";
        FormSubmissionState1[FormSubmissionState1["waiting"] = 2] = "waiting";
        FormSubmissionState1[FormSubmissionState1["receiving"] = 3] = "receiving";
        FormSubmissionState1[FormSubmissionState1["stopping"] = 4] = "stopping";
        FormSubmissionState1[FormSubmissionState1["stopped"] = 5] = "stopped";
    })(FormSubmissionState || (FormSubmissionState = {
    }));
    var FormEnctype;
    (function(FormEnctype1) {
        FormEnctype1["urlEncoded"] = "application/x-www-form-urlencoded";
        FormEnctype1["multipart"] = "multipart/form-data";
        FormEnctype1["plain"] = "text/plain";
    })(FormEnctype || (FormEnctype = {
    }));
    function formEnctypeFromString(encoding) {
        switch(encoding.toLowerCase()){
            case FormEnctype.multipart:
                return FormEnctype.multipart;
            case FormEnctype.plain:
                return FormEnctype.plain;
            default:
                return FormEnctype.urlEncoded;
        }
    }
    var FormSubmission = function() {
        function FormSubmission1(delegate, formElement, submitter, mustRedirect) {
            if (mustRedirect === void 0) mustRedirect = false;
            this.state = FormSubmissionState.initialized;
            this.delegate = delegate;
            this.formElement = formElement;
            this.submitter = submitter;
            this.formData = buildFormData(formElement, submitter);
            this.fetchRequest = new FetchRequest(this, this.method, this.location, this.body);
            this.mustRedirect = mustRedirect;
        }
        Object.defineProperty(FormSubmission1.prototype, "method", {
            get: function() {
                var _a;
                var method = ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formmethod")) || this.formElement.getAttribute("method") || "";
                return fetchMethodFromString(method.toLowerCase()) || FetchMethod.get;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormSubmission1.prototype, "action", {
            get: function() {
                var _a;
                return ((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formaction")) || this.formElement.action;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormSubmission1.prototype, "location", {
            get: function() {
                return expandURL(this.action);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormSubmission1.prototype, "body", {
            get: function() {
                if (this.enctype == FormEnctype.urlEncoded || this.method == FetchMethod.get) return new URLSearchParams(this.stringFormData);
                else return this.formData;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormSubmission1.prototype, "enctype", {
            get: function() {
                var _a;
                return formEnctypeFromString(((_a = this.submitter) === null || _a === void 0 ? void 0 : _a.getAttribute("formenctype")) || this.formElement.enctype);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormSubmission1.prototype, "isIdempotent", {
            get: function() {
                return this.fetchRequest.isIdempotent;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FormSubmission1.prototype, "stringFormData", {
            get: function() {
                return __spread(this.formData).reduce(function(entries, _a) {
                    var _b = __read(_a, 2), name = _b[0], value = _b[1];
                    return entries.concat(typeof value == "string" ? [
                        [
                            name,
                            value
                        ]
                    ] : []);
                }, []);
            },
            enumerable: false,
            configurable: true
        });
        FormSubmission1.prototype.start = function() {
            return __awaiter(this, void 0, void 0, function() {
                var initialized, requesting;
                return __generator(this, function(_a) {
                    initialized = FormSubmissionState.initialized, requesting = FormSubmissionState.requesting;
                    if (this.state == initialized) {
                        this.state = requesting;
                        return [
                            2,
                            this.fetchRequest.perform()
                        ];
                    }
                    return [
                        2
                    ];
                });
            });
        };
        FormSubmission1.prototype.stop = function() {
            var stopping = FormSubmissionState.stopping, stopped = FormSubmissionState.stopped;
            if (this.state != stopping && this.state != stopped) {
                this.state = stopping;
                this.fetchRequest.cancel();
                return true;
            }
        };
        FormSubmission1.prototype.prepareHeadersForRequest = function(headers, request) {
            if (!request.isIdempotent) {
                var token = getCookieValue(getMetaContent("csrf-param")) || getMetaContent("csrf-token");
                if (token) headers["X-CSRF-Token"] = token;
                headers["Accept"] = [
                    StreamMessage.contentType,
                    headers["Accept"]
                ].join(", ");
            }
        };
        FormSubmission1.prototype.requestStarted = function(request) {
            this.state = FormSubmissionState.waiting;
            dispatch("turbo:submit-start", {
                target: this.formElement,
                detail: {
                    formSubmission: this
                }
            });
            this.delegate.formSubmissionStarted(this);
        };
        FormSubmission1.prototype.requestPreventedHandlingResponse = function(request, response) {
            this.result = {
                success: response.succeeded,
                fetchResponse: response
            };
        };
        FormSubmission1.prototype.requestSucceededWithResponse = function(request, response) {
            if (response.clientError || response.serverError) this.delegate.formSubmissionFailedWithResponse(this, response);
            else if (this.requestMustRedirect(request) && responseSucceededWithoutRedirect(response)) {
                var error = new Error("Form responses must redirect to another location");
                this.delegate.formSubmissionErrored(this, error);
            } else {
                this.state = FormSubmissionState.receiving;
                this.result = {
                    success: true,
                    fetchResponse: response
                };
                this.delegate.formSubmissionSucceededWithResponse(this, response);
            }
        };
        FormSubmission1.prototype.requestFailedWithResponse = function(request, response) {
            this.result = {
                success: false,
                fetchResponse: response
            };
            this.delegate.formSubmissionFailedWithResponse(this, response);
        };
        FormSubmission1.prototype.requestErrored = function(request, error) {
            this.result = {
                success: false,
                error: error
            };
            this.delegate.formSubmissionErrored(this, error);
        };
        FormSubmission1.prototype.requestFinished = function(request) {
            this.state = FormSubmissionState.stopped;
            dispatch("turbo:submit-end", {
                target: this.formElement,
                detail: __assign({
                    formSubmission: this
                }, this.result)
            });
            this.delegate.formSubmissionFinished(this);
        };
        FormSubmission1.prototype.requestMustRedirect = function(request) {
            return !request.isIdempotent && this.mustRedirect;
        };
        return FormSubmission1;
    }();
    function buildFormData(formElement, submitter) {
        var formData = new FormData(formElement);
        var name = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("name");
        var value = submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("value");
        if (name && value != null && formData.get(name) != value) formData.append(name, value);
        return formData;
    }
    function getCookieValue(cookieName) {
        if (cookieName != null) {
            var cookies = document.cookie ? document.cookie.split("; ") : [];
            var cookie = cookies.find(function(cookie1) {
                return cookie1.startsWith(cookieName);
            });
            if (cookie) {
                var value = cookie.split("=").slice(1).join("=");
                return value ? decodeURIComponent(value) : undefined;
            }
        }
    }
    function getMetaContent(name) {
        var element = document.querySelector("meta[name=\"" + name + "\"]");
        return element && element.content;
    }
    function responseSucceededWithoutRedirect(response) {
        return response.statusCode == 200 && !response.redirected;
    }
    var Snapshot = function() {
        function Snapshot1(element) {
            this.element = element;
        }
        Object.defineProperty(Snapshot1.prototype, "children", {
            get: function() {
                return __spread(this.element.children);
            },
            enumerable: false,
            configurable: true
        });
        Snapshot1.prototype.hasAnchor = function(anchor) {
            return this.getElementForAnchor(anchor) != null;
        };
        Snapshot1.prototype.getElementForAnchor = function(anchor) {
            try {
                return this.element.querySelector("[id='" + anchor + "'], a[name='" + anchor + "']");
            } catch (_a) {
                return null;
            }
        };
        Object.defineProperty(Snapshot1.prototype, "isConnected", {
            get: function() {
                return this.element.isConnected;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Snapshot1.prototype, "firstAutofocusableElement", {
            get: function() {
                return this.element.querySelector("[autofocus]");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Snapshot1.prototype, "permanentElements", {
            get: function() {
                return __spread(this.element.querySelectorAll("[id][data-turbo-permanent]"));
            },
            enumerable: false,
            configurable: true
        });
        Snapshot1.prototype.getPermanentElementById = function(id) {
            return this.element.querySelector("#" + id + "[data-turbo-permanent]");
        };
        Snapshot1.prototype.getPermanentElementMapForSnapshot = function(snapshot) {
            var e_1, _a;
            var permanentElementMap = {
            };
            try {
                for(var _b = __values(this.permanentElements), _c = _b.next(); !_c.done; _c = _b.next()){
                    var currentPermanentElement = _c.value;
                    var id = currentPermanentElement.id;
                    var newPermanentElement = snapshot.getPermanentElementById(id);
                    if (newPermanentElement) permanentElementMap[id] = [
                        currentPermanentElement,
                        newPermanentElement
                    ];
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            return permanentElementMap;
        };
        return Snapshot1;
    }();
    var FormInterceptor = function() {
        function FormInterceptor1(delegate, element) {
            var _this = this;
            this.submitBubbled = function(event) {
                if (event.target instanceof HTMLFormElement) {
                    var form = event.target;
                    var submitter = event.submitter || undefined;
                    if (_this.delegate.shouldInterceptFormSubmission(form, submitter)) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                        _this.delegate.formSubmissionIntercepted(form, submitter);
                    }
                }
            };
            this.delegate = delegate;
            this.element = element;
        }
        FormInterceptor1.prototype.start = function() {
            this.element.addEventListener("submit", this.submitBubbled);
        };
        FormInterceptor1.prototype.stop = function() {
            this.element.removeEventListener("submit", this.submitBubbled);
        };
        return FormInterceptor1;
    }();
    var View = function() {
        function View1(delegate, element) {
            this.delegate = delegate;
            this.element = element;
        }
        View1.prototype.scrollToAnchor = function(anchor) {
            var element = this.snapshot.getElementForAnchor(anchor);
            if (element) this.scrollToElement(element);
            else this.scrollToPosition({
                x: 0,
                y: 0
            });
        };
        View1.prototype.scrollToElement = function(element) {
            element.scrollIntoView();
        };
        View1.prototype.scrollToPosition = function(_a) {
            var x = _a.x, y = _a.y;
            this.scrollRoot.scrollTo(x, y);
        };
        Object.defineProperty(View1.prototype, "scrollRoot", {
            get: function() {
                return window;
            },
            enumerable: false,
            configurable: true
        });
        View1.prototype.render = function(renderer) {
            return __awaiter(this, void 0, void 0, function() {
                var isPreview, shouldRender, snapshot;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (this.renderer) throw new Error("rendering is already in progress");
                            isPreview = renderer.isPreview, shouldRender = renderer.shouldRender, snapshot = renderer.newSnapshot;
                            if (!shouldRender) return [
                                3,
                                5
                            ];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([
                                1,
                                ,
                                3,
                                4
                            ]);
                            this.renderer = renderer;
                            this.prepareToRenderSnapshot(renderer);
                            this.delegate.viewWillRenderSnapshot(snapshot, isPreview);
                            return [
                                4,
                                this.renderSnapshot(renderer)
                            ];
                        case 2:
                            _a.sent();
                            this.delegate.viewRenderedSnapshot(snapshot, isPreview);
                            this.finishRenderingSnapshot(renderer);
                            return [
                                3,
                                4
                            ];
                        case 3:
                            delete this.renderer;
                            return [
                                7
                            ];
                        case 4:
                            return [
                                3,
                                6
                            ];
                        case 5:
                            this.invalidate();
                            _a.label = 6;
                        case 6:
                            return [
                                2
                            ];
                    }
                });
            });
        };
        View1.prototype.invalidate = function() {
            this.delegate.viewInvalidated();
        };
        View1.prototype.prepareToRenderSnapshot = function(renderer) {
            this.markAsPreview(renderer.isPreview);
            renderer.prepareToRender();
        };
        View1.prototype.markAsPreview = function(isPreview) {
            if (isPreview) this.element.setAttribute("data-turbo-preview", "");
            else this.element.removeAttribute("data-turbo-preview");
        };
        View1.prototype.renderSnapshot = function(renderer) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4,
                                renderer.render()
                            ];
                        case 1:
                            _a.sent();
                            return [
                                2
                            ];
                    }
                });
            });
        };
        View1.prototype.finishRenderingSnapshot = function(renderer) {
            renderer.finishRendering();
        };
        return View1;
    }();
    var FrameView1 = function(_super) {
        __extends(FrameView2, _super);
        function FrameView2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FrameView2.prototype.invalidate = function() {
            this.element.innerHTML = "";
        };
        Object.defineProperty(FrameView2.prototype, "snapshot", {
            get: function() {
                return new Snapshot(this.element);
            },
            enumerable: false,
            configurable: true
        });
        return FrameView2;
    }(View);
    var LinkInterceptor = function() {
        function LinkInterceptor1(delegate, element) {
            var _this = this;
            this.clickBubbled = function(event) {
                if (_this.respondsToEventTarget(event.target)) _this.clickEvent = event;
                else delete _this.clickEvent;
            };
            this.linkClicked = function(event) {
                if (_this.clickEvent && _this.respondsToEventTarget(event.target) && event.target instanceof Element) {
                    if (_this.delegate.shouldInterceptLinkClick(event.target, event.detail.url)) {
                        _this.clickEvent.preventDefault();
                        event.preventDefault();
                        _this.convertLinkWithMethodClickToFormSubmission(event.target) || _this.delegate.linkClickIntercepted(event.target, event.detail.url);
                    }
                }
                delete _this.clickEvent;
            };
            this.willVisit = function() {
                delete _this.clickEvent;
            };
            this.delegate = delegate;
            this.element = element;
        }
        LinkInterceptor1.prototype.start = function() {
            this.element.addEventListener("click", this.clickBubbled);
            document.addEventListener("turbo:click", this.linkClicked);
            document.addEventListener("turbo:before-visit", this.willVisit);
        };
        LinkInterceptor1.prototype.stop = function() {
            this.element.removeEventListener("click", this.clickBubbled);
            document.removeEventListener("turbo:click", this.linkClicked);
            document.removeEventListener("turbo:before-visit", this.willVisit);
        };
        LinkInterceptor1.prototype.convertLinkWithMethodClickToFormSubmission = function(link) {
            var _a;
            var linkMethod = link.getAttribute("data-turbo-method") || link.getAttribute("data-method");
            if (linkMethod) {
                var form = document.createElement("form");
                form.method = linkMethod;
                form.action = link.getAttribute("href") || "undefined";
                (_a = link.parentNode) === null || _a === void 0 || _a.insertBefore(form, link);
                return dispatch("submit", {
                    target: form
                });
            } else return false;
        };
        LinkInterceptor1.prototype.respondsToEventTarget = function(target) {
            var element = target instanceof Element ? target : target instanceof Node ? target.parentElement : null;
            return element && element.closest("turbo-frame, html") == this.element;
        };
        return LinkInterceptor1;
    }();
    var Bardo = function() {
        function Bardo1(permanentElementMap) {
            this.permanentElementMap = permanentElementMap;
        }
        Bardo1.preservingPermanentElements = function(permanentElementMap, callback) {
            var bardo = new this(permanentElementMap);
            bardo.enter();
            callback();
            bardo.leave();
        };
        Bardo1.prototype.enter = function() {
            for(var id in this.permanentElementMap){
                var _a = __read(this.permanentElementMap[id], 2), newPermanentElement = _a[1];
                this.replaceNewPermanentElementWithPlaceholder(newPermanentElement);
            }
        };
        Bardo1.prototype.leave = function() {
            for(var id in this.permanentElementMap){
                var _a = __read(this.permanentElementMap[id], 1), currentPermanentElement = _a[0];
                this.replaceCurrentPermanentElementWithClone(currentPermanentElement);
                this.replacePlaceholderWithPermanentElement(currentPermanentElement);
            }
        };
        Bardo1.prototype.replaceNewPermanentElementWithPlaceholder = function(permanentElement) {
            var placeholder = createPlaceholderForPermanentElement(permanentElement);
            permanentElement.replaceWith(placeholder);
        };
        Bardo1.prototype.replaceCurrentPermanentElementWithClone = function(permanentElement) {
            var clone = permanentElement.cloneNode(true);
            permanentElement.replaceWith(clone);
        };
        Bardo1.prototype.replacePlaceholderWithPermanentElement = function(permanentElement) {
            var placeholder = this.getPlaceholderById(permanentElement.id);
            placeholder === null || placeholder === void 0 || placeholder.replaceWith(permanentElement);
        };
        Bardo1.prototype.getPlaceholderById = function(id) {
            return this.placeholders.find(function(element) {
                return element.content == id;
            });
        };
        Object.defineProperty(Bardo1.prototype, "placeholders", {
            get: function() {
                return __spread(document.querySelectorAll("meta[name=turbo-permanent-placeholder][content]"));
            },
            enumerable: false,
            configurable: true
        });
        return Bardo1;
    }();
    function createPlaceholderForPermanentElement(permanentElement) {
        var element = document.createElement("meta");
        element.setAttribute("name", "turbo-permanent-placeholder");
        element.setAttribute("content", permanentElement.id);
        return element;
    }
    var Renderer = function() {
        function Renderer1(currentSnapshot, newSnapshot, isPreview) {
            var _this = this;
            this.currentSnapshot = currentSnapshot;
            this.newSnapshot = newSnapshot;
            this.isPreview = isPreview;
            this.promise = new Promise(function(resolve, reject) {
                return _this.resolvingFunctions = {
                    resolve: resolve,
                    reject: reject
                };
            });
        }
        Object.defineProperty(Renderer1.prototype, "shouldRender", {
            get: function() {
                return true;
            },
            enumerable: false,
            configurable: true
        });
        Renderer1.prototype.prepareToRender = function() {
            return;
        };
        Renderer1.prototype.finishRendering = function() {
            if (this.resolvingFunctions) {
                this.resolvingFunctions.resolve();
                delete this.resolvingFunctions;
            }
        };
        Renderer1.prototype.createScriptElement = function(element) {
            if (element.getAttribute("data-turbo-eval") == "false") return element;
            else {
                var createdScriptElement = document.createElement("script");
                if (this.cspNonce) createdScriptElement.nonce = this.cspNonce;
                createdScriptElement.textContent = element.textContent;
                createdScriptElement.async = false;
                copyElementAttributes(createdScriptElement, element);
                return createdScriptElement;
            }
        };
        Renderer1.prototype.preservingPermanentElements = function(callback) {
            Bardo.preservingPermanentElements(this.permanentElementMap, callback);
        };
        Renderer1.prototype.focusFirstAutofocusableElement = function() {
            var element = this.connectedSnapshot.firstAutofocusableElement;
            if (elementIsFocusable(element)) element.focus();
        };
        Object.defineProperty(Renderer1.prototype, "connectedSnapshot", {
            get: function() {
                return this.newSnapshot.isConnected ? this.newSnapshot : this.currentSnapshot;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Renderer1.prototype, "currentElement", {
            get: function() {
                return this.currentSnapshot.element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Renderer1.prototype, "newElement", {
            get: function() {
                return this.newSnapshot.element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Renderer1.prototype, "permanentElementMap", {
            get: function() {
                return this.currentSnapshot.getPermanentElementMapForSnapshot(this.newSnapshot);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Renderer1.prototype, "cspNonce", {
            get: function() {
                var _a;
                return (_a = document.head.querySelector('meta[name="csp-nonce"]')) === null || _a === void 0 ? void 0 : _a.getAttribute("content");
            },
            enumerable: false,
            configurable: true
        });
        return Renderer1;
    }();
    function copyElementAttributes(destinationElement, sourceElement) {
        var e_1, _a;
        try {
            for(var _b = __values(__spread(sourceElement.attributes)), _c = _b.next(); !_c.done; _c = _b.next()){
                var _d = _c.value, name_1 = _d.name, value = _d.value;
                destinationElement.setAttribute(name_1, value);
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
    }
    function elementIsFocusable(element) {
        return element && typeof element.focus == "function";
    }
    var FrameRenderer1 = function(_super) {
        __extends(FrameRenderer2, _super);
        function FrameRenderer2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(FrameRenderer2.prototype, "shouldRender", {
            get: function() {
                return true;
            },
            enumerable: false,
            configurable: true
        });
        FrameRenderer2.prototype.render = function() {
            return __awaiter(this, void 0, void 0, function() {
                var _this = this;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4,
                                nextAnimationFrame()
                            ];
                        case 1:
                            _a.sent();
                            this.preservingPermanentElements(function() {
                                _this.loadFrameElement();
                            });
                            this.scrollFrameIntoView();
                            return [
                                4,
                                nextAnimationFrame()
                            ];
                        case 2:
                            _a.sent();
                            this.focusFirstAutofocusableElement();
                            return [
                                4,
                                nextAnimationFrame()
                            ];
                        case 3:
                            _a.sent();
                            this.activateScriptElements();
                            return [
                                2
                            ];
                    }
                });
            });
        };
        FrameRenderer2.prototype.loadFrameElement = function() {
            var _a;
            var destinationRange = document.createRange();
            destinationRange.selectNodeContents(this.currentElement);
            destinationRange.deleteContents();
            var frameElement = this.newElement;
            var sourceRange = (_a = frameElement.ownerDocument) === null || _a === void 0 ? void 0 : _a.createRange();
            if (sourceRange) {
                sourceRange.selectNodeContents(frameElement);
                this.currentElement.appendChild(sourceRange.extractContents());
            }
        };
        FrameRenderer2.prototype.scrollFrameIntoView = function() {
            if (this.currentElement.autoscroll || this.newElement.autoscroll) {
                var element = this.currentElement.firstElementChild;
                var block = readScrollLogicalPosition(this.currentElement.getAttribute("data-autoscroll-block"), "end");
                if (element) {
                    element.scrollIntoView({
                        block: block
                    });
                    return true;
                }
            }
            return false;
        };
        FrameRenderer2.prototype.activateScriptElements = function() {
            var e_1, _a;
            try {
                for(var _b = __values(this.newScriptElements), _c = _b.next(); !_c.done; _c = _b.next()){
                    var inertScriptElement = _c.value;
                    var activatedScriptElement = this.createScriptElement(inertScriptElement);
                    inertScriptElement.replaceWith(activatedScriptElement);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        };
        Object.defineProperty(FrameRenderer2.prototype, "newScriptElements", {
            get: function() {
                return this.currentElement.querySelectorAll("script");
            },
            enumerable: false,
            configurable: true
        });
        return FrameRenderer2;
    }(Renderer);
    function readScrollLogicalPosition(value, defaultValue) {
        if (value == "end" || value == "start" || value == "center" || value == "nearest") return value;
        else return defaultValue;
    }
    var ProgressBar = function() {
        function ProgressBar1() {
            var _this = this;
            this.hiding = false;
            this.value = 0;
            this.visible = false;
            this.trickle = function() {
                _this.setValue(_this.value + Math.random() / 100);
            };
            this.stylesheetElement = this.createStylesheetElement();
            this.progressElement = this.createProgressElement();
            this.installStylesheetElement();
            this.setValue(0);
        }
        Object.defineProperty(ProgressBar1, "defaultCSS", {
            get: function() {
                return unindent(templateObject_1 || (templateObject_1 = __makeTemplateObject([
                    "\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 9999;\n        transition:\n          width ",
                    "ms ease-out,\n          opacity ",
                    "ms ",
                    "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "
                ], [
                    "\n      .turbo-progress-bar {\n        position: fixed;\n        display: block;\n        top: 0;\n        left: 0;\n        height: 3px;\n        background: #0076ff;\n        z-index: 9999;\n        transition:\n          width ",
                    "ms ease-out,\n          opacity ",
                    "ms ",
                    "ms ease-in;\n        transform: translate3d(0, 0, 0);\n      }\n    "
                ])), ProgressBar1.animationDuration, ProgressBar1.animationDuration / 2, ProgressBar1.animationDuration / 2);
            },
            enumerable: false,
            configurable: true
        });
        ProgressBar1.prototype.show = function() {
            if (!this.visible) {
                this.visible = true;
                this.installProgressElement();
                this.startTrickling();
            }
        };
        ProgressBar1.prototype.hide = function() {
            var _this = this;
            if (this.visible && !this.hiding) {
                this.hiding = true;
                this.fadeProgressElement(function() {
                    _this.uninstallProgressElement();
                    _this.stopTrickling();
                    _this.visible = false;
                    _this.hiding = false;
                });
            }
        };
        ProgressBar1.prototype.setValue = function(value) {
            this.value = value;
            this.refresh();
        };
        ProgressBar1.prototype.installStylesheetElement = function() {
            document.head.insertBefore(this.stylesheetElement, document.head.firstChild);
        };
        ProgressBar1.prototype.installProgressElement = function() {
            this.progressElement.style.width = "0";
            this.progressElement.style.opacity = "1";
            document.documentElement.insertBefore(this.progressElement, document.body);
            this.refresh();
        };
        ProgressBar1.prototype.fadeProgressElement = function(callback) {
            this.progressElement.style.opacity = "0";
            setTimeout(callback, ProgressBar1.animationDuration * 1.5);
        };
        ProgressBar1.prototype.uninstallProgressElement = function() {
            if (this.progressElement.parentNode) document.documentElement.removeChild(this.progressElement);
        };
        ProgressBar1.prototype.startTrickling = function() {
            if (!this.trickleInterval) this.trickleInterval = window.setInterval(this.trickle, ProgressBar1.animationDuration);
        };
        ProgressBar1.prototype.stopTrickling = function() {
            window.clearInterval(this.trickleInterval);
            delete this.trickleInterval;
        };
        ProgressBar1.prototype.refresh = function() {
            var _this = this;
            requestAnimationFrame(function() {
                _this.progressElement.style.width = 10 + _this.value * 90 + "%";
            });
        };
        ProgressBar1.prototype.createStylesheetElement = function() {
            var element = document.createElement("style");
            element.type = "text/css";
            element.textContent = ProgressBar1.defaultCSS;
            return element;
        };
        ProgressBar1.prototype.createProgressElement = function() {
            var element = document.createElement("div");
            element.className = "turbo-progress-bar";
            return element;
        };
        ProgressBar1.animationDuration = 300;
        return ProgressBar1;
    }();
    var templateObject_1;
    var HeadSnapshot1 = function(_super) {
        __extends(HeadSnapshot2, _super);
        function HeadSnapshot2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.detailsByOuterHTML = _this.children.reduce(function(result, element) {
                var _a;
                var outerHTML = element.outerHTML;
                var details = outerHTML in result ? result[outerHTML] : {
                    type: elementType(element),
                    tracked: elementIsTracked(element),
                    elements: []
                };
                return __assign(__assign({
                }, result), (_a = {
                }, _a[outerHTML] = __assign(__assign({
                }, details), {
                    elements: __spread(details.elements, [
                        element
                    ])
                }), _a));
            }, {
            });
            return _this;
        }
        Object.defineProperty(HeadSnapshot2.prototype, "trackedElementSignature", {
            get: function() {
                var _this = this;
                return Object.keys(this.detailsByOuterHTML).filter(function(outerHTML) {
                    return _this.detailsByOuterHTML[outerHTML].tracked;
                }).join("");
            },
            enumerable: false,
            configurable: true
        });
        HeadSnapshot2.prototype.getScriptElementsNotInSnapshot = function(snapshot) {
            return this.getElementsMatchingTypeNotInSnapshot("script", snapshot);
        };
        HeadSnapshot2.prototype.getStylesheetElementsNotInSnapshot = function(snapshot) {
            return this.getElementsMatchingTypeNotInSnapshot("stylesheet", snapshot);
        };
        HeadSnapshot2.prototype.getElementsMatchingTypeNotInSnapshot = function(matchedType, snapshot) {
            var _this = this;
            return Object.keys(this.detailsByOuterHTML).filter(function(outerHTML) {
                return !(outerHTML in snapshot.detailsByOuterHTML);
            }).map(function(outerHTML) {
                return _this.detailsByOuterHTML[outerHTML];
            }).filter(function(_a) {
                var type = _a.type;
                return type == matchedType;
            }).map(function(_a) {
                var _b = __read(_a.elements, 1), element = _b[0];
                return element;
            });
        };
        Object.defineProperty(HeadSnapshot2.prototype, "provisionalElements", {
            get: function() {
                var _this = this;
                return Object.keys(this.detailsByOuterHTML).reduce(function(result, outerHTML) {
                    var _a = _this.detailsByOuterHTML[outerHTML], type = _a.type, tracked = _a.tracked, elements = _a.elements;
                    if (type == null && !tracked) return __spread(result, elements);
                    else if (elements.length > 1) return __spread(result, elements.slice(1));
                    else return result;
                }, []);
            },
            enumerable: false,
            configurable: true
        });
        HeadSnapshot2.prototype.getMetaValue = function(name) {
            var element = this.findMetaElementByName(name);
            return element ? element.getAttribute("content") : null;
        };
        HeadSnapshot2.prototype.findMetaElementByName = function(name) {
            var _this = this;
            return Object.keys(this.detailsByOuterHTML).reduce(function(result, outerHTML) {
                var _a = __read(_this.detailsByOuterHTML[outerHTML].elements, 1), element = _a[0];
                return elementIsMetaElementWithName(element, name) ? element : result;
            }, undefined);
        };
        return HeadSnapshot2;
    }(Snapshot);
    function elementType(element) {
        if (elementIsScript(element)) return "script";
        else if (elementIsStylesheet(element)) return "stylesheet";
    }
    function elementIsTracked(element) {
        return element.getAttribute("data-turbo-track") == "reload";
    }
    function elementIsScript(element) {
        var tagName = element.tagName.toLowerCase();
        return tagName == "script";
    }
    function elementIsStylesheet(element) {
        var tagName = element.tagName.toLowerCase();
        return tagName == "style" || tagName == "link" && element.getAttribute("rel") == "stylesheet";
    }
    function elementIsMetaElementWithName(element, name) {
        var tagName = element.tagName.toLowerCase();
        return tagName == "meta" && element.getAttribute("name") == name;
    }
    var PageSnapshot1 = function(_super) {
        __extends(PageSnapshot2, _super);
        function PageSnapshot2(element, headSnapshot) {
            var _this = _super.call(this, element) || this;
            _this.headSnapshot = headSnapshot;
            return _this;
        }
        PageSnapshot2.fromHTMLString = function(html) {
            if (html === void 0) html = "";
            return this.fromDocument(parseHTMLDocument(html));
        };
        PageSnapshot2.fromElement = function(element) {
            return this.fromDocument(element.ownerDocument);
        };
        PageSnapshot2.fromDocument = function(_a) {
            var head = _a.head, body = _a.body;
            return new this(body, new HeadSnapshot1(head));
        };
        PageSnapshot2.prototype.clone = function() {
            return new PageSnapshot2(this.element.cloneNode(true), this.headSnapshot);
        };
        Object.defineProperty(PageSnapshot2.prototype, "headElement", {
            get: function() {
                return this.headSnapshot.element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageSnapshot2.prototype, "rootLocation", {
            get: function() {
                var _a;
                var root = (_a = this.getSetting("root")) !== null && _a !== void 0 ? _a : "/";
                return expandURL(root);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageSnapshot2.prototype, "cacheControlValue", {
            get: function() {
                return this.getSetting("cache-control");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageSnapshot2.prototype, "isPreviewable", {
            get: function() {
                return this.cacheControlValue != "no-preview";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageSnapshot2.prototype, "isCacheable", {
            get: function() {
                return this.cacheControlValue != "no-cache";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageSnapshot2.prototype, "isVisitable", {
            get: function() {
                return this.getSetting("visit-control") != "reload";
            },
            enumerable: false,
            configurable: true
        });
        PageSnapshot2.prototype.getSetting = function(name) {
            return this.headSnapshot.getMetaValue("turbo-" + name);
        };
        return PageSnapshot2;
    }(Snapshot);
    var TimingMetric;
    (function(TimingMetric1) {
        TimingMetric1["visitStart"] = "visitStart";
        TimingMetric1["requestStart"] = "requestStart";
        TimingMetric1["requestEnd"] = "requestEnd";
        TimingMetric1["visitEnd"] = "visitEnd";
    })(TimingMetric || (TimingMetric = {
    }));
    var VisitState;
    (function(VisitState1) {
        VisitState1["initialized"] = "initialized";
        VisitState1["started"] = "started";
        VisitState1["canceled"] = "canceled";
        VisitState1["failed"] = "failed";
        VisitState1["completed"] = "completed";
    })(VisitState || (VisitState = {
    }));
    var defaultOptions = {
        action: "advance",
        historyChanged: false
    };
    var SystemStatusCode;
    (function(SystemStatusCode1) {
        SystemStatusCode1[SystemStatusCode1["networkFailure"] = 0] = "networkFailure";
        SystemStatusCode1[SystemStatusCode1["timeoutFailure"] = -1] = "timeoutFailure";
        SystemStatusCode1[SystemStatusCode1["contentTypeMismatch"] = -2] = "contentTypeMismatch";
    })(SystemStatusCode || (SystemStatusCode = {
    }));
    var Visit = function() {
        function Visit1(delegate, location, restorationIdentifier, options) {
            if (options === void 0) options = {
            };
            this.identifier = uuid();
            this.timingMetrics = {
            };
            this.followedRedirect = false;
            this.historyChanged = false;
            this.scrolled = false;
            this.snapshotCached = false;
            this.state = VisitState.initialized;
            this.delegate = delegate;
            this.location = location;
            this.restorationIdentifier = restorationIdentifier || uuid();
            var _a = __assign(__assign({
            }, defaultOptions), options), action = _a.action, historyChanged = _a.historyChanged, referrer = _a.referrer, snapshotHTML = _a.snapshotHTML, response = _a.response;
            this.action = action;
            this.historyChanged = historyChanged;
            this.referrer = referrer;
            this.snapshotHTML = snapshotHTML;
            this.response = response;
        }
        Object.defineProperty(Visit1.prototype, "adapter", {
            get: function() {
                return this.delegate.adapter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Visit1.prototype, "view", {
            get: function() {
                return this.delegate.view;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Visit1.prototype, "history", {
            get: function() {
                return this.delegate.history;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Visit1.prototype, "restorationData", {
            get: function() {
                return this.history.getRestorationDataForIdentifier(this.restorationIdentifier);
            },
            enumerable: false,
            configurable: true
        });
        Visit1.prototype.start = function() {
            if (this.state == VisitState.initialized) {
                this.recordTimingMetric(TimingMetric.visitStart);
                this.state = VisitState.started;
                this.adapter.visitStarted(this);
                this.delegate.visitStarted(this);
            }
        };
        Visit1.prototype.cancel = function() {
            if (this.state == VisitState.started) {
                if (this.request) this.request.cancel();
                this.cancelRender();
                this.state = VisitState.canceled;
            }
        };
        Visit1.prototype.complete = function() {
            if (this.state == VisitState.started) {
                this.recordTimingMetric(TimingMetric.visitEnd);
                this.state = VisitState.completed;
                this.adapter.visitCompleted(this);
                this.delegate.visitCompleted(this);
            }
        };
        Visit1.prototype.fail = function() {
            if (this.state == VisitState.started) {
                this.state = VisitState.failed;
                this.adapter.visitFailed(this);
            }
        };
        Visit1.prototype.changeHistory = function() {
            var _a;
            if (!this.historyChanged) {
                var actionForHistory = this.location.href === ((_a = this.referrer) === null || _a === void 0 ? void 0 : _a.href) ? "replace" : this.action;
                var method = this.getHistoryMethodForAction(actionForHistory);
                this.history.update(method, this.location, this.restorationIdentifier);
                this.historyChanged = true;
            }
        };
        Visit1.prototype.issueRequest = function() {
            if (this.hasPreloadedResponse()) this.simulateRequest();
            else if (this.shouldIssueRequest() && !this.request) {
                this.request = new FetchRequest(this, FetchMethod.get, this.location);
                this.request.perform();
            }
        };
        Visit1.prototype.simulateRequest = function() {
            if (this.response) {
                this.startRequest();
                this.recordResponse();
                this.finishRequest();
            }
        };
        Visit1.prototype.startRequest = function() {
            this.recordTimingMetric(TimingMetric.requestStart);
            this.adapter.visitRequestStarted(this);
        };
        Visit1.prototype.recordResponse = function(response) {
            if (response === void 0) response = this.response;
            this.response = response;
            if (response) {
                var statusCode = response.statusCode;
                if (isSuccessful(statusCode)) this.adapter.visitRequestCompleted(this);
                else this.adapter.visitRequestFailedWithStatusCode(this, statusCode);
            }
        };
        Visit1.prototype.finishRequest = function() {
            this.recordTimingMetric(TimingMetric.requestEnd);
            this.adapter.visitRequestFinished(this);
        };
        Visit1.prototype.loadResponse = function() {
            var _this = this;
            if (this.response) {
                var _a = this.response, statusCode_1 = _a.statusCode, responseHTML_1 = _a.responseHTML;
                this.render(function() {
                    return __awaiter(_this, void 0, void 0, function() {
                        return __generator(this, function(_a1) {
                            switch(_a1.label){
                                case 0:
                                    this.cacheSnapshot();
                                    if (!(isSuccessful(statusCode_1) && responseHTML_1 != null)) return [
                                        3,
                                        2
                                    ];
                                    return [
                                        4,
                                        this.view.renderPage(PageSnapshot1.fromHTMLString(responseHTML_1))
                                    ];
                                case 1:
                                    _a1.sent();
                                    this.adapter.visitRendered(this);
                                    this.complete();
                                    return [
                                        3,
                                        4
                                    ];
                                case 2:
                                    return [
                                        4,
                                        this.view.renderError(PageSnapshot1.fromHTMLString(responseHTML_1))
                                    ];
                                case 3:
                                    _a1.sent();
                                    this.adapter.visitRendered(this);
                                    this.fail();
                                    _a1.label = 4;
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                });
            }
        };
        Visit1.prototype.getCachedSnapshot = function() {
            var snapshot = this.view.getCachedSnapshotForLocation(this.location) || this.getPreloadedSnapshot();
            if (snapshot && (!getAnchor(this.location) || snapshot.hasAnchor(getAnchor(this.location)))) {
                if (this.action == "restore" || snapshot.isPreviewable) return snapshot;
            }
        };
        Visit1.prototype.getPreloadedSnapshot = function() {
            if (this.snapshotHTML) return PageSnapshot1.fromHTMLString(this.snapshotHTML);
        };
        Visit1.prototype.hasCachedSnapshot = function() {
            return this.getCachedSnapshot() != null;
        };
        Visit1.prototype.loadCachedSnapshot = function() {
            var _this = this;
            var snapshot = this.getCachedSnapshot();
            if (snapshot) {
                var isPreview_1 = this.shouldIssueRequest();
                this.render(function() {
                    return __awaiter(_this, void 0, void 0, function() {
                        return __generator(this, function(_a) {
                            switch(_a.label){
                                case 0:
                                    this.cacheSnapshot();
                                    return [
                                        4,
                                        this.view.renderPage(snapshot, isPreview_1)
                                    ];
                                case 1:
                                    _a.sent();
                                    this.adapter.visitRendered(this);
                                    if (!isPreview_1) this.complete();
                                    return [
                                        2
                                    ];
                            }
                        });
                    });
                });
            }
        };
        Visit1.prototype.followRedirect = function() {
            if (this.redirectedToLocation && !this.followedRedirect) {
                this.location = this.redirectedToLocation;
                this.history.replace(this.redirectedToLocation, this.restorationIdentifier);
                this.followedRedirect = true;
            }
        };
        Visit1.prototype.requestStarted = function() {
            this.startRequest();
        };
        Visit1.prototype.requestPreventedHandlingResponse = function(request, response) {
        };
        Visit1.prototype.requestSucceededWithResponse = function(request, response) {
            return __awaiter(this, void 0, void 0, function() {
                var responseHTML;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4,
                                response.responseHTML
                            ];
                        case 1:
                            responseHTML = _a.sent();
                            if (responseHTML == undefined) this.recordResponse({
                                statusCode: SystemStatusCode.contentTypeMismatch
                            });
                            else {
                                this.redirectedToLocation = response.redirected ? response.location : undefined;
                                this.recordResponse({
                                    statusCode: response.statusCode,
                                    responseHTML: responseHTML
                                });
                            }
                            return [
                                2
                            ];
                    }
                });
            });
        };
        Visit1.prototype.requestFailedWithResponse = function(request, response) {
            return __awaiter(this, void 0, void 0, function() {
                var responseHTML;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4,
                                response.responseHTML
                            ];
                        case 1:
                            responseHTML = _a.sent();
                            if (responseHTML == undefined) this.recordResponse({
                                statusCode: SystemStatusCode.contentTypeMismatch
                            });
                            else this.recordResponse({
                                statusCode: response.statusCode,
                                responseHTML: responseHTML
                            });
                            return [
                                2
                            ];
                    }
                });
            });
        };
        Visit1.prototype.requestErrored = function(request, error) {
            this.recordResponse({
                statusCode: SystemStatusCode.networkFailure
            });
        };
        Visit1.prototype.requestFinished = function() {
            this.finishRequest();
        };
        Visit1.prototype.performScroll = function() {
            if (!this.scrolled) {
                if (this.action == "restore") this.scrollToRestoredPosition() || this.scrollToTop();
                else this.scrollToAnchor() || this.scrollToTop();
                this.scrolled = true;
            }
        };
        Visit1.prototype.scrollToRestoredPosition = function() {
            var scrollPosition = this.restorationData.scrollPosition;
            if (scrollPosition) {
                this.view.scrollToPosition(scrollPosition);
                return true;
            }
        };
        Visit1.prototype.scrollToAnchor = function() {
            if (getAnchor(this.location)) {
                this.view.scrollToAnchor(getAnchor(this.location));
                return true;
            }
        };
        Visit1.prototype.scrollToTop = function() {
            this.view.scrollToPosition({
                x: 0,
                y: 0
            });
        };
        Visit1.prototype.recordTimingMetric = function(metric) {
            this.timingMetrics[metric] = new Date().getTime();
        };
        Visit1.prototype.getTimingMetrics = function() {
            return __assign({
            }, this.timingMetrics);
        };
        Visit1.prototype.getHistoryMethodForAction = function(action) {
            switch(action){
                case "replace":
                    return history.replaceState;
                case "advance":
                case "restore":
                    return history.pushState;
            }
        };
        Visit1.prototype.hasPreloadedResponse = function() {
            return typeof this.response == "object";
        };
        Visit1.prototype.shouldIssueRequest = function() {
            return this.action == "restore" ? !this.hasCachedSnapshot() : true;
        };
        Visit1.prototype.cacheSnapshot = function() {
            if (!this.snapshotCached) {
                this.view.cacheSnapshot();
                this.snapshotCached = true;
            }
        };
        Visit1.prototype.render = function(callback) {
            return __awaiter(this, void 0, void 0, function() {
                var _this = this;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            this.cancelRender();
                            return [
                                4,
                                new Promise(function(resolve) {
                                    _this.frame = requestAnimationFrame(function() {
                                        return resolve();
                                    });
                                })
                            ];
                        case 1:
                            _a.sent();
                            callback();
                            delete this.frame;
                            this.performScroll();
                            return [
                                2
                            ];
                    }
                });
            });
        };
        Visit1.prototype.cancelRender = function() {
            if (this.frame) {
                cancelAnimationFrame(this.frame);
                delete this.frame;
            }
        };
        return Visit1;
    }();
    function isSuccessful(statusCode) {
        return statusCode >= 200 && statusCode < 300;
    }
    var BrowserAdapter = function() {
        function BrowserAdapter1(session) {
            var _this = this;
            this.progressBar = new ProgressBar;
            this.showProgressBar = function() {
                _this.progressBar.show();
            };
            this.session = session;
        }
        BrowserAdapter1.prototype.visitProposedToLocation = function(location, options) {
            this.navigator.startVisit(location, uuid(), options);
        };
        BrowserAdapter1.prototype.visitStarted = function(visit) {
            visit.issueRequest();
            visit.changeHistory();
            visit.loadCachedSnapshot();
        };
        BrowserAdapter1.prototype.visitRequestStarted = function(visit) {
            this.progressBar.setValue(0);
            if (visit.hasCachedSnapshot() || visit.action != "restore") this.showProgressBarAfterDelay();
            else this.showProgressBar();
        };
        BrowserAdapter1.prototype.visitRequestCompleted = function(visit) {
            visit.loadResponse();
        };
        BrowserAdapter1.prototype.visitRequestFailedWithStatusCode = function(visit, statusCode) {
            switch(statusCode){
                case SystemStatusCode.networkFailure:
                case SystemStatusCode.timeoutFailure:
                case SystemStatusCode.contentTypeMismatch:
                    return this.reload();
                default:
                    return visit.loadResponse();
            }
        };
        BrowserAdapter1.prototype.visitRequestFinished = function(visit) {
            this.progressBar.setValue(1);
            this.hideProgressBar();
        };
        BrowserAdapter1.prototype.visitCompleted = function(visit) {
            visit.followRedirect();
        };
        BrowserAdapter1.prototype.pageInvalidated = function() {
            this.reload();
        };
        BrowserAdapter1.prototype.visitFailed = function(visit) {
        };
        BrowserAdapter1.prototype.visitRendered = function(visit) {
        };
        BrowserAdapter1.prototype.showProgressBarAfterDelay = function() {
            this.progressBarTimeout = window.setTimeout(this.showProgressBar, this.session.progressBarDelay);
        };
        BrowserAdapter1.prototype.hideProgressBar = function() {
            this.progressBar.hide();
            if (this.progressBarTimeout != null) {
                window.clearTimeout(this.progressBarTimeout);
                delete this.progressBarTimeout;
            }
        };
        BrowserAdapter1.prototype.reload = function() {
            window.location.reload();
        };
        Object.defineProperty(BrowserAdapter1.prototype, "navigator", {
            get: function() {
                return this.session.navigator;
            },
            enumerable: false,
            configurable: true
        });
        return BrowserAdapter1;
    }();
    var CacheObserver = function() {
        function CacheObserver1() {
            this.started = false;
        }
        CacheObserver1.prototype.start = function() {
            if (!this.started) {
                this.started = true;
                addEventListener("turbo:before-cache", this.removeStaleElements, false);
            }
        };
        CacheObserver1.prototype.stop = function() {
            if (this.started) {
                this.started = false;
                removeEventListener("turbo:before-cache", this.removeStaleElements, false);
            }
        };
        CacheObserver1.prototype.removeStaleElements = function() {
            var e_1, _a;
            var staleElements = __spread(document.querySelectorAll('[data-turbo-cache="false"]'));
            try {
                for(var staleElements_1 = __values(staleElements), staleElements_1_1 = staleElements_1.next(); !staleElements_1_1.done; staleElements_1_1 = staleElements_1.next()){
                    var element = staleElements_1_1.value;
                    element.remove();
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (staleElements_1_1 && !staleElements_1_1.done && (_a = staleElements_1.return)) _a.call(staleElements_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        };
        return CacheObserver1;
    }();
    var FormSubmitObserver = function() {
        function FormSubmitObserver1(delegate) {
            var _this = this;
            this.started = false;
            this.submitCaptured = function() {
                removeEventListener("submit", _this.submitBubbled, false);
                addEventListener("submit", _this.submitBubbled, false);
            };
            this.submitBubbled = function(event) {
                if (!event.defaultPrevented) {
                    var form = event.target instanceof HTMLFormElement ? event.target : undefined;
                    var submitter = event.submitter || undefined;
                    if (form) {
                        var method = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("formmethod")) || form.method;
                        if (method != "dialog" && _this.delegate.willSubmitForm(form, submitter)) {
                            event.preventDefault();
                            _this.delegate.formSubmitted(form, submitter);
                        }
                    }
                }
            };
            this.delegate = delegate;
        }
        FormSubmitObserver1.prototype.start = function() {
            if (!this.started) {
                addEventListener("submit", this.submitCaptured, true);
                this.started = true;
            }
        };
        FormSubmitObserver1.prototype.stop = function() {
            if (this.started) {
                removeEventListener("submit", this.submitCaptured, true);
                this.started = false;
            }
        };
        return FormSubmitObserver1;
    }();
    var FrameRedirector = function() {
        function FrameRedirector1(element) {
            this.element = element;
            this.linkInterceptor = new LinkInterceptor(this, element);
            this.formInterceptor = new FormInterceptor(this, element);
        }
        FrameRedirector1.prototype.start = function() {
            this.linkInterceptor.start();
            this.formInterceptor.start();
        };
        FrameRedirector1.prototype.stop = function() {
            this.linkInterceptor.stop();
            this.formInterceptor.stop();
        };
        FrameRedirector1.prototype.shouldInterceptLinkClick = function(element, url) {
            return this.shouldRedirect(element);
        };
        FrameRedirector1.prototype.linkClickIntercepted = function(element, url) {
            var frame = this.findFrameElement(element);
            if (frame) frame.src = url;
        };
        FrameRedirector1.prototype.shouldInterceptFormSubmission = function(element, submitter) {
            return this.shouldRedirect(element, submitter);
        };
        FrameRedirector1.prototype.formSubmissionIntercepted = function(element, submitter) {
            var frame = this.findFrameElement(element);
            if (frame) frame.delegate.formSubmissionIntercepted(element, submitter);
        };
        FrameRedirector1.prototype.shouldRedirect = function(element, submitter) {
            var frame = this.findFrameElement(element);
            return frame ? frame != element.closest("turbo-frame") : false;
        };
        FrameRedirector1.prototype.findFrameElement = function(element) {
            var id = element.getAttribute("data-turbo-frame");
            if (id && id != "_top") {
                var frame = this.element.querySelector("#" + id + ":not([disabled])");
                if (frame instanceof FrameElement1) return frame;
            }
        };
        return FrameRedirector1;
    }();
    var History1 = function() {
        function History2(delegate) {
            var _this = this;
            this.restorationIdentifier = uuid();
            this.restorationData = {
            };
            this.started = false;
            this.pageLoaded = false;
            this.onPopState = function(event) {
                if (_this.shouldHandlePopState()) {
                    var turbo = (event.state || {
                    }).turbo;
                    if (turbo) {
                        _this.location = new URL(window.location.href);
                        var restorationIdentifier = turbo.restorationIdentifier;
                        _this.restorationIdentifier = restorationIdentifier;
                        _this.delegate.historyPoppedToLocationWithRestorationIdentifier(_this.location, restorationIdentifier);
                    }
                }
            };
            this.onPageLoad = function(event) {
                return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                return [
                                    4,
                                    nextMicrotask()
                                ];
                            case 1:
                                _a.sent();
                                this.pageLoaded = true;
                                return [
                                    2
                                ];
                        }
                    });
                });
            };
            this.delegate = delegate;
        }
        History2.prototype.start = function() {
            if (!this.started) {
                addEventListener("popstate", this.onPopState, false);
                addEventListener("load", this.onPageLoad, false);
                this.started = true;
                this.replace(new URL(window.location.href));
            }
        };
        History2.prototype.stop = function() {
            if (this.started) {
                removeEventListener("popstate", this.onPopState, false);
                removeEventListener("load", this.onPageLoad, false);
                this.started = false;
            }
        };
        History2.prototype.push = function(location, restorationIdentifier) {
            this.update(history.pushState, location, restorationIdentifier);
        };
        History2.prototype.replace = function(location, restorationIdentifier) {
            this.update(history.replaceState, location, restorationIdentifier);
        };
        History2.prototype.update = function(method, location, restorationIdentifier) {
            if (restorationIdentifier === void 0) restorationIdentifier = uuid();
            var state = {
                turbo: {
                    restorationIdentifier: restorationIdentifier
                }
            };
            method.call(history, state, "", location.href);
            this.location = location;
            this.restorationIdentifier = restorationIdentifier;
        };
        History2.prototype.getRestorationDataForIdentifier = function(restorationIdentifier) {
            return this.restorationData[restorationIdentifier] || {
            };
        };
        History2.prototype.updateRestorationData = function(additionalData) {
            var restorationIdentifier = this.restorationIdentifier;
            var restorationData = this.restorationData[restorationIdentifier];
            this.restorationData[restorationIdentifier] = __assign(__assign({
            }, restorationData), additionalData);
        };
        History2.prototype.assumeControlOfScrollRestoration = function() {
            var _a;
            if (!this.previousScrollRestoration) {
                this.previousScrollRestoration = (_a = history.scrollRestoration) !== null && _a !== void 0 ? _a : "auto";
                history.scrollRestoration = "manual";
            }
        };
        History2.prototype.relinquishControlOfScrollRestoration = function() {
            if (this.previousScrollRestoration) {
                history.scrollRestoration = this.previousScrollRestoration;
                delete this.previousScrollRestoration;
            }
        };
        History2.prototype.shouldHandlePopState = function() {
            return this.pageIsLoaded();
        };
        History2.prototype.pageIsLoaded = function() {
            return this.pageLoaded || document.readyState == "complete";
        };
        return History2;
    }();
    var LinkClickObserver = function() {
        function LinkClickObserver1(delegate) {
            var _this = this;
            this.started = false;
            this.clickCaptured = function() {
                removeEventListener("click", _this.clickBubbled, false);
                addEventListener("click", _this.clickBubbled, false);
            };
            this.clickBubbled = function(event) {
                if (_this.clickEventIsSignificant(event)) {
                    var link = _this.findLinkFromClickTarget(event.target);
                    if (link) {
                        var location_1 = _this.getLocationForLink(link);
                        if (_this.delegate.willFollowLinkToLocation(link, location_1)) {
                            event.preventDefault();
                            _this.delegate.followedLinkToLocation(link, location_1);
                        }
                    }
                }
            };
            this.delegate = delegate;
        }
        LinkClickObserver1.prototype.start = function() {
            if (!this.started) {
                addEventListener("click", this.clickCaptured, true);
                this.started = true;
            }
        };
        LinkClickObserver1.prototype.stop = function() {
            if (this.started) {
                removeEventListener("click", this.clickCaptured, true);
                this.started = false;
            }
        };
        LinkClickObserver1.prototype.clickEventIsSignificant = function(event) {
            return !(event.target && event.target.isContentEditable || event.defaultPrevented || event.which > 1 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);
        };
        LinkClickObserver1.prototype.findLinkFromClickTarget = function(target) {
            if (target instanceof Element) return target.closest("a[href]:not([target^=_]):not([download])");
        };
        LinkClickObserver1.prototype.getLocationForLink = function(link) {
            return expandURL(link.getAttribute("href") || "");
        };
        return LinkClickObserver1;
    }();
    function isAction(action) {
        return action == "advance" || action == "replace" || action == "restore";
    }
    var Navigator1 = function() {
        function Navigator2(delegate) {
            this.delegate = delegate;
        }
        Navigator2.prototype.proposeVisit = function(location, options) {
            if (options === void 0) options = {
            };
            if (this.delegate.allowsVisitingLocation(location)) this.delegate.visitProposedToLocation(location, options);
        };
        Navigator2.prototype.startVisit = function(locatable, restorationIdentifier, options) {
            if (options === void 0) options = {
            };
            this.stop();
            this.currentVisit = new Visit(this, expandURL(locatable), restorationIdentifier, __assign({
                referrer: this.location
            }, options));
            this.currentVisit.start();
        };
        Navigator2.prototype.submitForm = function(form, submitter) {
            this.stop();
            this.formSubmission = new FormSubmission(this, form, submitter, true);
            if (this.formSubmission.isIdempotent) this.proposeVisit(this.formSubmission.fetchRequest.url, {
                action: this.getActionForFormSubmission(this.formSubmission)
            });
            else this.formSubmission.start();
        };
        Navigator2.prototype.stop = function() {
            if (this.formSubmission) {
                this.formSubmission.stop();
                delete this.formSubmission;
            }
            if (this.currentVisit) {
                this.currentVisit.cancel();
                delete this.currentVisit;
            }
        };
        Object.defineProperty(Navigator2.prototype, "adapter", {
            get: function() {
                return this.delegate.adapter;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Navigator2.prototype, "view", {
            get: function() {
                return this.delegate.view;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Navigator2.prototype, "history", {
            get: function() {
                return this.delegate.history;
            },
            enumerable: false,
            configurable: true
        });
        Navigator2.prototype.formSubmissionStarted = function(formSubmission) {
        };
        Navigator2.prototype.formSubmissionSucceededWithResponse = function(formSubmission, fetchResponse) {
            return __awaiter(this, void 0, void 0, function() {
                var responseHTML, statusCode, visitOptions;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!(formSubmission == this.formSubmission)) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                fetchResponse.responseHTML
                            ];
                        case 1:
                            responseHTML = _a.sent();
                            if (responseHTML) {
                                if (formSubmission.method != FetchMethod.get) this.view.clearSnapshotCache();
                                statusCode = fetchResponse.statusCode;
                                visitOptions = {
                                    response: {
                                        statusCode: statusCode,
                                        responseHTML: responseHTML
                                    }
                                };
                                this.proposeVisit(fetchResponse.location, visitOptions);
                            }
                            _a.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            });
        };
        Navigator2.prototype.formSubmissionFailedWithResponse = function(formSubmission, fetchResponse) {
            return __awaiter(this, void 0, void 0, function() {
                var responseHTML, snapshot;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4,
                                fetchResponse.responseHTML
                            ];
                        case 1:
                            responseHTML = _a.sent();
                            if (!responseHTML) return [
                                3,
                                3
                            ];
                            snapshot = PageSnapshot1.fromHTMLString(responseHTML);
                            return [
                                4,
                                this.view.renderPage(snapshot)
                            ];
                        case 2:
                            _a.sent();
                            this.view.clearSnapshotCache();
                            _a.label = 3;
                        case 3:
                            return [
                                2
                            ];
                    }
                });
            });
        };
        Navigator2.prototype.formSubmissionErrored = function(formSubmission, error) {
            console.error(error);
        };
        Navigator2.prototype.formSubmissionFinished = function(formSubmission) {
        };
        Navigator2.prototype.visitStarted = function(visit) {
            this.delegate.visitStarted(visit);
        };
        Navigator2.prototype.visitCompleted = function(visit) {
            this.delegate.visitCompleted(visit);
        };
        Object.defineProperty(Navigator2.prototype, "location", {
            get: function() {
                return this.history.location;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Navigator2.prototype, "restorationIdentifier", {
            get: function() {
                return this.history.restorationIdentifier;
            },
            enumerable: false,
            configurable: true
        });
        Navigator2.prototype.getActionForFormSubmission = function(formSubmission) {
            var formElement = formSubmission.formElement, submitter = formSubmission.submitter;
            var action = (submitter === null || submitter === void 0 ? void 0 : submitter.getAttribute("data-turbo-action")) || formElement.getAttribute("data-turbo-action");
            return isAction(action) ? action : "advance";
        };
        return Navigator2;
    }();
    var PageStage;
    (function(PageStage1) {
        PageStage1[PageStage1["initial"] = 0] = "initial";
        PageStage1[PageStage1["loading"] = 1] = "loading";
        PageStage1[PageStage1["interactive"] = 2] = "interactive";
        PageStage1[PageStage1["complete"] = 3] = "complete";
    })(PageStage || (PageStage = {
    }));
    var PageObserver = function() {
        function PageObserver1(delegate) {
            var _this = this;
            this.stage = PageStage.initial;
            this.started = false;
            this.interpretReadyState = function() {
                var readyState = _this.readyState;
                if (readyState == "interactive") _this.pageIsInteractive();
                else if (readyState == "complete") _this.pageIsComplete();
            };
            this.pageWillUnload = function() {
                _this.delegate.pageWillUnload();
            };
            this.delegate = delegate;
        }
        PageObserver1.prototype.start = function() {
            if (!this.started) {
                if (this.stage == PageStage.initial) this.stage = PageStage.loading;
                document.addEventListener("readystatechange", this.interpretReadyState, false);
                addEventListener("pagehide", this.pageWillUnload, false);
                this.started = true;
            }
        };
        PageObserver1.prototype.stop = function() {
            if (this.started) {
                document.removeEventListener("readystatechange", this.interpretReadyState, false);
                removeEventListener("pagehide", this.pageWillUnload, false);
                this.started = false;
            }
        };
        PageObserver1.prototype.pageIsInteractive = function() {
            if (this.stage == PageStage.loading) {
                this.stage = PageStage.interactive;
                this.delegate.pageBecameInteractive();
            }
        };
        PageObserver1.prototype.pageIsComplete = function() {
            this.pageIsInteractive();
            if (this.stage == PageStage.interactive) {
                this.stage = PageStage.complete;
                this.delegate.pageLoaded();
            }
        };
        Object.defineProperty(PageObserver1.prototype, "readyState", {
            get: function() {
                return document.readyState;
            },
            enumerable: false,
            configurable: true
        });
        return PageObserver1;
    }();
    var ScrollObserver = function() {
        function ScrollObserver1(delegate) {
            var _this = this;
            this.started = false;
            this.onScroll = function() {
                _this.updatePosition({
                    x: window.pageXOffset,
                    y: window.pageYOffset
                });
            };
            this.delegate = delegate;
        }
        ScrollObserver1.prototype.start = function() {
            if (!this.started) {
                addEventListener("scroll", this.onScroll, false);
                this.onScroll();
                this.started = true;
            }
        };
        ScrollObserver1.prototype.stop = function() {
            if (this.started) {
                removeEventListener("scroll", this.onScroll, false);
                this.started = false;
            }
        };
        ScrollObserver1.prototype.updatePosition = function(position) {
            this.delegate.scrollPositionChanged(position);
        };
        return ScrollObserver1;
    }();
    var StreamObserver = function() {
        function StreamObserver1(delegate) {
            var _this = this;
            this.sources = new Set;
            this.started = false;
            this.inspectFetchResponse = function(event) {
                var response = fetchResponseFromEvent(event);
                if (response && fetchResponseIsStream(response)) {
                    event.preventDefault();
                    _this.receiveMessageResponse(response);
                }
            };
            this.receiveMessageEvent = function(event) {
                if (_this.started && typeof event.data == "string") _this.receiveMessageHTML(event.data);
            };
            this.delegate = delegate;
        }
        StreamObserver1.prototype.start = function() {
            if (!this.started) {
                this.started = true;
                addEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
            }
        };
        StreamObserver1.prototype.stop = function() {
            if (this.started) {
                this.started = false;
                removeEventListener("turbo:before-fetch-response", this.inspectFetchResponse, false);
            }
        };
        StreamObserver1.prototype.connectStreamSource = function(source) {
            if (!this.streamSourceIsConnected(source)) {
                this.sources.add(source);
                source.addEventListener("message", this.receiveMessageEvent, false);
            }
        };
        StreamObserver1.prototype.disconnectStreamSource = function(source) {
            if (this.streamSourceIsConnected(source)) {
                this.sources.delete(source);
                source.removeEventListener("message", this.receiveMessageEvent, false);
            }
        };
        StreamObserver1.prototype.streamSourceIsConnected = function(source) {
            return this.sources.has(source);
        };
        StreamObserver1.prototype.receiveMessageResponse = function(response) {
            return __awaiter(this, void 0, void 0, function() {
                var html;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4,
                                response.responseHTML
                            ];
                        case 1:
                            html = _a.sent();
                            if (html) this.receiveMessageHTML(html);
                            return [
                                2
                            ];
                    }
                });
            });
        };
        StreamObserver1.prototype.receiveMessageHTML = function(html) {
            this.delegate.receivedMessageFromStream(new StreamMessage(html));
        };
        return StreamObserver1;
    }();
    function fetchResponseFromEvent(event) {
        var _a;
        var fetchResponse = (_a = event.detail) === null || _a === void 0 ? void 0 : _a.fetchResponse;
        if (fetchResponse instanceof FetchResponse) return fetchResponse;
    }
    function fetchResponseIsStream(response) {
        var _a;
        var contentType = (_a = response.contentType) !== null && _a !== void 0 ? _a : "";
        return contentType.startsWith(StreamMessage.contentType);
    }
    var ErrorRenderer1 = function(_super) {
        __extends(ErrorRenderer2, _super);
        function ErrorRenderer2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ErrorRenderer2.prototype.render = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    this.replaceHeadAndBody();
                    this.activateScriptElements();
                    return [
                        2
                    ];
                });
            });
        };
        ErrorRenderer2.prototype.replaceHeadAndBody = function() {
            var documentElement = document.documentElement, head = document.head, body = document.body;
            documentElement.replaceChild(this.newHead, head);
            documentElement.replaceChild(this.newElement, body);
        };
        ErrorRenderer2.prototype.activateScriptElements = function() {
            var e_1, _a;
            try {
                for(var _b = __values(this.scriptElements), _c = _b.next(); !_c.done; _c = _b.next()){
                    var replaceableElement = _c.value;
                    var parentNode = replaceableElement.parentNode;
                    if (parentNode) {
                        var element = this.createScriptElement(replaceableElement);
                        parentNode.replaceChild(element, replaceableElement);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        };
        Object.defineProperty(ErrorRenderer2.prototype, "newHead", {
            get: function() {
                return this.newSnapshot.headSnapshot.element;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ErrorRenderer2.prototype, "scriptElements", {
            get: function() {
                return __spread(document.documentElement.querySelectorAll("script"));
            },
            enumerable: false,
            configurable: true
        });
        return ErrorRenderer2;
    }(Renderer);
    var PageRenderer1 = function(_super) {
        __extends(PageRenderer2, _super);
        function PageRenderer2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(PageRenderer2.prototype, "shouldRender", {
            get: function() {
                return this.newSnapshot.isVisitable && this.trackedElementsAreIdentical;
            },
            enumerable: false,
            configurable: true
        });
        PageRenderer2.prototype.prepareToRender = function() {
            this.mergeHead();
        };
        PageRenderer2.prototype.render = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    this.replaceBody();
                    return [
                        2
                    ];
                });
            });
        };
        PageRenderer2.prototype.finishRendering = function() {
            _super.prototype.finishRendering.call(this);
            if (!this.isPreview) this.focusFirstAutofocusableElement();
        };
        Object.defineProperty(PageRenderer2.prototype, "currentHeadSnapshot", {
            get: function() {
                return this.currentSnapshot.headSnapshot;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageRenderer2.prototype, "newHeadSnapshot", {
            get: function() {
                return this.newSnapshot.headSnapshot;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageRenderer2.prototype, "newElement", {
            get: function() {
                return this.newSnapshot.element;
            },
            enumerable: false,
            configurable: true
        });
        PageRenderer2.prototype.mergeHead = function() {
            this.copyNewHeadStylesheetElements();
            this.copyNewHeadScriptElements();
            this.removeCurrentHeadProvisionalElements();
            this.copyNewHeadProvisionalElements();
        };
        PageRenderer2.prototype.replaceBody = function() {
            var _this = this;
            this.preservingPermanentElements(function() {
                _this.activateNewBody();
                _this.assignNewBody();
            });
        };
        Object.defineProperty(PageRenderer2.prototype, "trackedElementsAreIdentical", {
            get: function() {
                return this.currentHeadSnapshot.trackedElementSignature == this.newHeadSnapshot.trackedElementSignature;
            },
            enumerable: false,
            configurable: true
        });
        PageRenderer2.prototype.copyNewHeadStylesheetElements = function() {
            var e_1, _a;
            try {
                for(var _b = __values(this.newHeadStylesheetElements), _c = _b.next(); !_c.done; _c = _b.next()){
                    var element = _c.value;
                    document.head.appendChild(element);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        };
        PageRenderer2.prototype.copyNewHeadScriptElements = function() {
            var e_2, _a;
            try {
                for(var _b = __values(this.newHeadScriptElements), _c = _b.next(); !_c.done; _c = _b.next()){
                    var element = _c.value;
                    document.head.appendChild(this.createScriptElement(element));
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_2) throw e_2.error;
                }
            }
        };
        PageRenderer2.prototype.removeCurrentHeadProvisionalElements = function() {
            var e_3, _a;
            try {
                for(var _b = __values(this.currentHeadProvisionalElements), _c = _b.next(); !_c.done; _c = _b.next()){
                    var element = _c.value;
                    document.head.removeChild(element);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
        };
        PageRenderer2.prototype.copyNewHeadProvisionalElements = function() {
            var e_4, _a;
            try {
                for(var _b = __values(this.newHeadProvisionalElements), _c = _b.next(); !_c.done; _c = _b.next()){
                    var element = _c.value;
                    document.head.appendChild(element);
                }
            } catch (e_4_1) {
                e_4 = {
                    error: e_4_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_4) throw e_4.error;
                }
            }
        };
        PageRenderer2.prototype.activateNewBody = function() {
            document.adoptNode(this.newElement);
            this.activateNewBodyScriptElements();
        };
        PageRenderer2.prototype.activateNewBodyScriptElements = function() {
            var e_5, _a;
            try {
                for(var _b = __values(this.newBodyScriptElements), _c = _b.next(); !_c.done; _c = _b.next()){
                    var inertScriptElement = _c.value;
                    var activatedScriptElement = this.createScriptElement(inertScriptElement);
                    inertScriptElement.replaceWith(activatedScriptElement);
                }
            } catch (e_5_1) {
                e_5 = {
                    error: e_5_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_5) throw e_5.error;
                }
            }
        };
        PageRenderer2.prototype.assignNewBody = function() {
            if (document.body && this.newElement instanceof HTMLBodyElement) document.body.replaceWith(this.newElement);
            else document.documentElement.appendChild(this.newElement);
        };
        Object.defineProperty(PageRenderer2.prototype, "newHeadStylesheetElements", {
            get: function() {
                return this.newHeadSnapshot.getStylesheetElementsNotInSnapshot(this.currentHeadSnapshot);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageRenderer2.prototype, "newHeadScriptElements", {
            get: function() {
                return this.newHeadSnapshot.getScriptElementsNotInSnapshot(this.currentHeadSnapshot);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageRenderer2.prototype, "currentHeadProvisionalElements", {
            get: function() {
                return this.currentHeadSnapshot.provisionalElements;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageRenderer2.prototype, "newHeadProvisionalElements", {
            get: function() {
                return this.newHeadSnapshot.provisionalElements;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageRenderer2.prototype, "newBodyScriptElements", {
            get: function() {
                return this.newElement.querySelectorAll("script");
            },
            enumerable: false,
            configurable: true
        });
        return PageRenderer2;
    }(Renderer);
    var SnapshotCache = function() {
        function SnapshotCache1(size) {
            this.keys = [];
            this.snapshots = {
            };
            this.size = size;
        }
        SnapshotCache1.prototype.has = function(location) {
            return toCacheKey(location) in this.snapshots;
        };
        SnapshotCache1.prototype.get = function(location) {
            if (this.has(location)) {
                var snapshot = this.read(location);
                this.touch(location);
                return snapshot;
            }
        };
        SnapshotCache1.prototype.put = function(location, snapshot) {
            this.write(location, snapshot);
            this.touch(location);
            return snapshot;
        };
        SnapshotCache1.prototype.clear = function() {
            this.snapshots = {
            };
        };
        SnapshotCache1.prototype.read = function(location) {
            return this.snapshots[toCacheKey(location)];
        };
        SnapshotCache1.prototype.write = function(location, snapshot) {
            this.snapshots[toCacheKey(location)] = snapshot;
        };
        SnapshotCache1.prototype.touch = function(location) {
            var key = toCacheKey(location);
            var index = this.keys.indexOf(key);
            if (index > -1) this.keys.splice(index, 1);
            this.keys.unshift(key);
            this.trim();
        };
        SnapshotCache1.prototype.trim = function() {
            var e_1, _a;
            try {
                for(var _b = __values(this.keys.splice(this.size)), _c = _b.next(); !_c.done; _c = _b.next()){
                    var key = _c.value;
                    delete this.snapshots[key];
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        };
        return SnapshotCache1;
    }();
    var PageView1 = function(_super) {
        __extends(PageView2, _super);
        function PageView2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.snapshotCache = new SnapshotCache(10);
            _this.lastRenderedLocation = new URL(location.href);
            return _this;
        }
        PageView2.prototype.renderPage = function(snapshot, isPreview) {
            if (isPreview === void 0) isPreview = false;
            var renderer = new PageRenderer1(this.snapshot, snapshot, isPreview);
            return this.render(renderer);
        };
        PageView2.prototype.renderError = function(snapshot) {
            var renderer = new ErrorRenderer1(this.snapshot, snapshot, false);
            this.render(renderer);
        };
        PageView2.prototype.clearSnapshotCache = function() {
            this.snapshotCache.clear();
        };
        PageView2.prototype.cacheSnapshot = function() {
            return __awaiter(this, void 0, void 0, function() {
                var _a, snapshot, location_1;
                return __generator(this, function(_b) {
                    switch(_b.label){
                        case 0:
                            if (!this.shouldCacheSnapshot) return [
                                3,
                                2
                            ];
                            this.delegate.viewWillCacheSnapshot();
                            _a = this, snapshot = _a.snapshot, location_1 = _a.lastRenderedLocation;
                            return [
                                4,
                                nextEventLoopTick()
                            ];
                        case 1:
                            _b.sent();
                            this.snapshotCache.put(location_1, snapshot.clone());
                            _b.label = 2;
                        case 2:
                            return [
                                2
                            ];
                    }
                });
            });
        };
        PageView2.prototype.getCachedSnapshotForLocation = function(location) {
            return this.snapshotCache.get(location);
        };
        Object.defineProperty(PageView2.prototype, "snapshot", {
            get: function() {
                return PageSnapshot1.fromElement(this.element);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(PageView2.prototype, "shouldCacheSnapshot", {
            get: function() {
                return this.snapshot.isCacheable;
            },
            enumerable: false,
            configurable: true
        });
        return PageView2;
    }(View);
    var Session = function() {
        function Session1() {
            this.navigator = new Navigator1(this);
            this.history = new History1(this);
            this.view = new PageView1(this, document.documentElement);
            this.adapter = new BrowserAdapter(this);
            this.pageObserver = new PageObserver(this);
            this.cacheObserver = new CacheObserver();
            this.linkClickObserver = new LinkClickObserver(this);
            this.formSubmitObserver = new FormSubmitObserver(this);
            this.scrollObserver = new ScrollObserver(this);
            this.streamObserver = new StreamObserver(this);
            this.frameRedirector = new FrameRedirector(document.documentElement);
            this.enabled = true;
            this.progressBarDelay = 500;
            this.started = false;
        }
        Session1.prototype.start = function() {
            if (!this.started) {
                this.pageObserver.start();
                this.cacheObserver.start();
                this.linkClickObserver.start();
                this.formSubmitObserver.start();
                this.scrollObserver.start();
                this.streamObserver.start();
                this.frameRedirector.start();
                this.history.start();
                this.started = true;
                this.enabled = true;
            }
        };
        Session1.prototype.disable = function() {
            this.enabled = false;
        };
        Session1.prototype.stop = function() {
            if (this.started) {
                this.pageObserver.stop();
                this.cacheObserver.stop();
                this.linkClickObserver.stop();
                this.formSubmitObserver.stop();
                this.scrollObserver.stop();
                this.streamObserver.stop();
                this.frameRedirector.stop();
                this.history.stop();
                this.started = false;
            }
        };
        Session1.prototype.registerAdapter = function(adapter) {
            this.adapter = adapter;
        };
        Session1.prototype.visit = function(location, options) {
            if (options === void 0) options = {
            };
            this.navigator.proposeVisit(expandURL(location), options);
        };
        Session1.prototype.connectStreamSource = function(source) {
            this.streamObserver.connectStreamSource(source);
        };
        Session1.prototype.disconnectStreamSource = function(source) {
            this.streamObserver.disconnectStreamSource(source);
        };
        Session1.prototype.renderStreamMessage = function(message) {
            document.documentElement.appendChild(StreamMessage.wrap(message).fragment);
        };
        Session1.prototype.clearCache = function() {
            this.view.clearSnapshotCache();
        };
        Session1.prototype.setProgressBarDelay = function(delay) {
            this.progressBarDelay = delay;
        };
        Object.defineProperty(Session1.prototype, "location", {
            get: function() {
                return this.history.location;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Session1.prototype, "restorationIdentifier", {
            get: function() {
                return this.history.restorationIdentifier;
            },
            enumerable: false,
            configurable: true
        });
        Session1.prototype.historyPoppedToLocationWithRestorationIdentifier = function(location, restorationIdentifier) {
            if (this.enabled) this.navigator.startVisit(location, restorationIdentifier, {
                action: "restore",
                historyChanged: true
            });
            else this.adapter.pageInvalidated();
        };
        Session1.prototype.scrollPositionChanged = function(position) {
            this.history.updateRestorationData({
                scrollPosition: position
            });
        };
        Session1.prototype.willFollowLinkToLocation = function(link, location) {
            return elementIsNavigable(link) && this.locationIsVisitable(location) && this.applicationAllowsFollowingLinkToLocation(link, location);
        };
        Session1.prototype.followedLinkToLocation = function(link, location) {
            var action = this.getActionForLink(link);
            this.visit(location.href, {
                action: action
            });
        };
        Session1.prototype.allowsVisitingLocation = function(location) {
            return this.applicationAllowsVisitingLocation(location);
        };
        Session1.prototype.visitProposedToLocation = function(location, options) {
            extendURLWithDeprecatedProperties(location);
            this.adapter.visitProposedToLocation(location, options);
        };
        Session1.prototype.visitStarted = function(visit) {
            extendURLWithDeprecatedProperties(visit.location);
            this.notifyApplicationAfterVisitingLocation(visit.location);
        };
        Session1.prototype.visitCompleted = function(visit) {
            this.notifyApplicationAfterPageLoad(visit.getTimingMetrics());
        };
        Session1.prototype.willSubmitForm = function(form, submitter) {
            return elementIsNavigable(form) && elementIsNavigable(submitter);
        };
        Session1.prototype.formSubmitted = function(form, submitter) {
            this.navigator.submitForm(form, submitter);
        };
        Session1.prototype.pageBecameInteractive = function() {
            this.view.lastRenderedLocation = this.location;
            this.notifyApplicationAfterPageLoad();
        };
        Session1.prototype.pageLoaded = function() {
            this.history.assumeControlOfScrollRestoration();
        };
        Session1.prototype.pageWillUnload = function() {
            this.history.relinquishControlOfScrollRestoration();
        };
        Session1.prototype.receivedMessageFromStream = function(message) {
            this.renderStreamMessage(message);
        };
        Session1.prototype.viewWillCacheSnapshot = function() {
            this.notifyApplicationBeforeCachingSnapshot();
        };
        Session1.prototype.viewWillRenderSnapshot = function(_a, isPreview) {
            var element = _a.element;
            this.notifyApplicationBeforeRender(element);
        };
        Session1.prototype.viewRenderedSnapshot = function(snapshot, isPreview) {
            this.view.lastRenderedLocation = this.history.location;
            this.notifyApplicationAfterRender();
        };
        Session1.prototype.viewInvalidated = function() {
            this.adapter.pageInvalidated();
        };
        Session1.prototype.applicationAllowsFollowingLinkToLocation = function(link, location) {
            var event = this.notifyApplicationAfterClickingLinkToLocation(link, location);
            return !event.defaultPrevented;
        };
        Session1.prototype.applicationAllowsVisitingLocation = function(location) {
            var event = this.notifyApplicationBeforeVisitingLocation(location);
            return !event.defaultPrevented;
        };
        Session1.prototype.notifyApplicationAfterClickingLinkToLocation = function(link, location) {
            return dispatch("turbo:click", {
                target: link,
                detail: {
                    url: location.href
                },
                cancelable: true
            });
        };
        Session1.prototype.notifyApplicationBeforeVisitingLocation = function(location) {
            return dispatch("turbo:before-visit", {
                detail: {
                    url: location.href
                },
                cancelable: true
            });
        };
        Session1.prototype.notifyApplicationAfterVisitingLocation = function(location) {
            return dispatch("turbo:visit", {
                detail: {
                    url: location.href
                }
            });
        };
        Session1.prototype.notifyApplicationBeforeCachingSnapshot = function() {
            return dispatch("turbo:before-cache");
        };
        Session1.prototype.notifyApplicationBeforeRender = function(newBody) {
            return dispatch("turbo:before-render", {
                detail: {
                    newBody: newBody
                }
            });
        };
        Session1.prototype.notifyApplicationAfterRender = function() {
            return dispatch("turbo:render");
        };
        Session1.prototype.notifyApplicationAfterPageLoad = function(timing) {
            if (timing === void 0) timing = {
            };
            return dispatch("turbo:load", {
                detail: {
                    url: this.location.href,
                    timing: timing
                }
            });
        };
        Session1.prototype.getActionForLink = function(link) {
            var action = link.getAttribute("data-turbo-action");
            return isAction(action) ? action : "advance";
        };
        Session1.prototype.locationIsVisitable = function(location) {
            return isPrefixedBy(location, this.snapshot.rootLocation) && isHTML(location);
        };
        Object.defineProperty(Session1.prototype, "snapshot", {
            get: function() {
                return this.view.snapshot;
            },
            enumerable: false,
            configurable: true
        });
        return Session1;
    }();
    function elementIsNavigable(element) {
        var container = element === null || element === void 0 ? void 0 : element.closest("[data-turbo]");
        if (container) return container.getAttribute("data-turbo") != "false";
        else return true;
    }
    function extendURLWithDeprecatedProperties(url) {
        Object.defineProperties(url, deprecatedLocationPropertyDescriptors);
    }
    var deprecatedLocationPropertyDescriptors = {
        absoluteURL: {
            get: function() {
                return this.toString();
            }
        }
    };
    var FrameController = function() {
        function FrameController1(element) {
            this.resolveVisitPromise = function() {
            };
            this.connected = false;
            this.hasBeenLoaded = false;
            this.settingSourceURL = false;
            this.element = element;
            this.view = new FrameView1(this, this.element);
            this.appearanceObserver = new AppearanceObserver(this, this.element);
            this.linkInterceptor = new LinkInterceptor(this, this.element);
            this.formInterceptor = new FormInterceptor(this, this.element);
        }
        FrameController1.prototype.connect = function() {
            if (!this.connected) {
                this.connected = true;
                if (this.loadingStyle == FrameLoadingStyle.lazy) this.appearanceObserver.start();
                this.linkInterceptor.start();
                this.formInterceptor.start();
                this.sourceURLChanged();
            }
        };
        FrameController1.prototype.disconnect = function() {
            if (this.connected) {
                this.connected = false;
                this.appearanceObserver.stop();
                this.linkInterceptor.stop();
                this.formInterceptor.stop();
            }
        };
        FrameController1.prototype.disabledChanged = function() {
            if (this.loadingStyle == FrameLoadingStyle.eager) this.loadSourceURL();
        };
        FrameController1.prototype.sourceURLChanged = function() {
            if (this.loadingStyle == FrameLoadingStyle.eager || this.hasBeenLoaded) this.loadSourceURL();
        };
        FrameController1.prototype.loadingStyleChanged = function() {
            if (this.loadingStyle == FrameLoadingStyle.lazy) this.appearanceObserver.start();
            else {
                this.appearanceObserver.stop();
                this.loadSourceURL();
            }
        };
        FrameController1.prototype.loadSourceURL = function() {
            return __awaiter(this, void 0, void 0, function() {
                var previousURL, error_1;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            if (!(!this.settingSourceURL && this.enabled && this.isActive && this.sourceURL != this.currentURL)) return [
                                3,
                                4
                            ];
                            previousURL = this.currentURL;
                            this.currentURL = this.sourceURL;
                            if (!this.sourceURL) return [
                                3,
                                4
                            ];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([
                                1,
                                3,
                                ,
                                4
                            ]);
                            this.element.loaded = this.visit(this.sourceURL);
                            this.appearanceObserver.stop();
                            return [
                                4,
                                this.element.loaded
                            ];
                        case 2:
                            _a.sent();
                            this.hasBeenLoaded = true;
                            return [
                                3,
                                4
                            ];
                        case 3:
                            error_1 = _a.sent();
                            this.currentURL = previousURL;
                            throw error_1;
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            });
        };
        FrameController1.prototype.loadResponse = function(fetchResponse) {
            return __awaiter(this, void 0, void 0, function() {
                var html, body, snapshot, _a, renderer, error_2;
                return __generator(this, function(_b) {
                    switch(_b.label){
                        case 0:
                            if (fetchResponse.redirected) this.sourceURL = fetchResponse.response.url;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([
                                1,
                                6,
                                ,
                                7
                            ]);
                            return [
                                4,
                                fetchResponse.responseHTML
                            ];
                        case 2:
                            html = _b.sent();
                            if (!html) return [
                                3,
                                5
                            ];
                            body = parseHTMLDocument(html).body;
                            _a = Snapshot.bind;
                            return [
                                4,
                                this.extractForeignFrameElement(body)
                            ];
                        case 3:
                            snapshot = new (_a.apply(Snapshot, [
                                void 0,
                                _b.sent()
                            ]))();
                            renderer = new FrameRenderer1(this.view.snapshot, snapshot, false);
                            return [
                                4,
                                this.view.render(renderer)
                            ];
                        case 4:
                            _b.sent();
                            _b.label = 5;
                        case 5:
                            return [
                                3,
                                7
                            ];
                        case 6:
                            error_2 = _b.sent();
                            console.error(error_2);
                            this.view.invalidate();
                            return [
                                3,
                                7
                            ];
                        case 7:
                            return [
                                2
                            ];
                    }
                });
            });
        };
        FrameController1.prototype.elementAppearedInViewport = function(element) {
            this.loadSourceURL();
        };
        FrameController1.prototype.shouldInterceptLinkClick = function(element, url) {
            return this.shouldInterceptNavigation(element);
        };
        FrameController1.prototype.linkClickIntercepted = function(element, url) {
            this.navigateFrame(element, url);
        };
        FrameController1.prototype.shouldInterceptFormSubmission = function(element, submitter) {
            return this.shouldInterceptNavigation(element, submitter);
        };
        FrameController1.prototype.formSubmissionIntercepted = function(element, submitter) {
            if (this.formSubmission) this.formSubmission.stop();
            this.formSubmission = new FormSubmission(this, element, submitter);
            if (this.formSubmission.fetchRequest.isIdempotent) this.navigateFrame(element, this.formSubmission.fetchRequest.url.href);
            else {
                var fetchRequest = this.formSubmission.fetchRequest;
                this.prepareHeadersForRequest(fetchRequest.headers, fetchRequest);
                this.formSubmission.start();
            }
        };
        FrameController1.prototype.prepareHeadersForRequest = function(headers, request) {
            headers["Turbo-Frame"] = this.id;
        };
        FrameController1.prototype.requestStarted = function(request) {
            this.element.setAttribute("busy", "");
        };
        FrameController1.prototype.requestPreventedHandlingResponse = function(request, response) {
            this.resolveVisitPromise();
        };
        FrameController1.prototype.requestSucceededWithResponse = function(request, response) {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            return [
                                4,
                                this.loadResponse(response)
                            ];
                        case 1:
                            _a.sent();
                            this.resolveVisitPromise();
                            return [
                                2
                            ];
                    }
                });
            });
        };
        FrameController1.prototype.requestFailedWithResponse = function(request, response) {
            console.error(response);
            this.resolveVisitPromise();
        };
        FrameController1.prototype.requestErrored = function(request, error) {
            console.error(error);
            this.resolveVisitPromise();
        };
        FrameController1.prototype.requestFinished = function(request) {
            this.element.removeAttribute("busy");
        };
        FrameController1.prototype.formSubmissionStarted = function(formSubmission) {
            var frame = this.findFrameElement(formSubmission.formElement);
            frame.setAttribute("busy", "");
        };
        FrameController1.prototype.formSubmissionSucceededWithResponse = function(formSubmission, response) {
            var frame = this.findFrameElement(formSubmission.formElement);
            frame.delegate.loadResponse(response);
        };
        FrameController1.prototype.formSubmissionFailedWithResponse = function(formSubmission, fetchResponse) {
            this.element.delegate.loadResponse(fetchResponse);
        };
        FrameController1.prototype.formSubmissionErrored = function(formSubmission, error) {
            console.error(error);
        };
        FrameController1.prototype.formSubmissionFinished = function(formSubmission) {
            var frame = this.findFrameElement(formSubmission.formElement);
            frame.removeAttribute("busy");
        };
        FrameController1.prototype.viewWillRenderSnapshot = function(snapshot, isPreview) {
        };
        FrameController1.prototype.viewRenderedSnapshot = function(snapshot, isPreview) {
        };
        FrameController1.prototype.viewInvalidated = function() {
        };
        FrameController1.prototype.visit = function(url) {
            return __awaiter(this, void 0, void 0, function() {
                var request;
                var _this = this;
                return __generator(this, function(_a) {
                    request = new FetchRequest(this, FetchMethod.get, expandURL(url));
                    return [
                        2,
                        new Promise(function(resolve) {
                            _this.resolveVisitPromise = function() {
                                _this.resolveVisitPromise = function() {
                                };
                                resolve();
                            };
                            request.perform();
                        })
                    ];
                });
            });
        };
        FrameController1.prototype.navigateFrame = function(element, url) {
            var frame = this.findFrameElement(element);
            frame.src = url;
        };
        FrameController1.prototype.findFrameElement = function(element) {
            var _a;
            var id = element.getAttribute("data-turbo-frame") || this.element.getAttribute("target");
            return (_a = getFrameElementById(id)) !== null && _a !== void 0 ? _a : this.element;
        };
        FrameController1.prototype.extractForeignFrameElement = function(container) {
            return __awaiter(this, void 0, void 0, function() {
                var element, id, error_3;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            id = CSS.escape(this.id);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([
                                1,
                                5,
                                ,
                                6
                            ]);
                            if (element = activateElement(container.querySelector("turbo-frame#" + id), this.currentURL)) return [
                                2,
                                element
                            ];
                            if (!(element = activateElement(container.querySelector("turbo-frame[src][recurse~=" + id + "]"), this.currentURL))) return [
                                3,
                                4
                            ];
                            return [
                                4,
                                element.loaded
                            ];
                        case 2:
                            _a.sent();
                            return [
                                4,
                                this.extractForeignFrameElement(element)
                            ];
                        case 3:
                            return [
                                2,
                                _a.sent()
                            ];
                        case 4:
                            console.error("Response has no matching <turbo-frame id=\"" + id + "\"> element");
                            return [
                                3,
                                6
                            ];
                        case 5:
                            error_3 = _a.sent();
                            console.error(error_3);
                            return [
                                3,
                                6
                            ];
                        case 6:
                            return [
                                2,
                                new FrameElement1()
                            ];
                    }
                });
            });
        };
        FrameController1.prototype.shouldInterceptNavigation = function(element, submitter) {
            var id = element.getAttribute("data-turbo-frame") || this.element.getAttribute("target");
            if (!this.enabled || id == "_top") return false;
            if (id) {
                var frameElement_1 = getFrameElementById(id);
                if (frameElement_1) return !frameElement_1.disabled;
            }
            if (!elementIsNavigable(element)) return false;
            if (submitter && !elementIsNavigable(submitter)) return false;
            return true;
        };
        Object.defineProperty(FrameController1.prototype, "id", {
            get: function() {
                return this.element.id;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameController1.prototype, "enabled", {
            get: function() {
                return !this.element.disabled;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameController1.prototype, "sourceURL", {
            get: function() {
                if (this.element.src) return this.element.src;
            },
            set: function(sourceURL) {
                this.settingSourceURL = true;
                this.element.src = sourceURL !== null && sourceURL !== void 0 ? sourceURL : null;
                this.currentURL = this.element.src;
                this.settingSourceURL = false;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameController1.prototype, "loadingStyle", {
            get: function() {
                return this.element.loading;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameController1.prototype, "isLoading", {
            get: function() {
                return this.formSubmission !== undefined || this.resolveVisitPromise() !== undefined;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(FrameController1.prototype, "isActive", {
            get: function() {
                return this.element.isActive && this.connected;
            },
            enumerable: false,
            configurable: true
        });
        return FrameController1;
    }();
    function getFrameElementById(id) {
        if (id != null) {
            var element = document.getElementById(id);
            if (element instanceof FrameElement1) return element;
        }
    }
    function activateElement(element, currentURL) {
        if (element) {
            var src = element.getAttribute("src");
            if (src != null && currentURL != null && urlsAreEqual(src, currentURL)) throw new Error("Matching <turbo-frame id=\"" + element.id + "\"> element has a source URL which references itself");
            if (element.ownerDocument !== document) element = document.importNode(element, true);
            if (element instanceof FrameElement1) {
                element.connectedCallback();
                return element;
            }
        }
    }
    var StreamActions = {
        after: function() {
            var _this = this;
            this.targetElements.forEach(function(e) {
                var _a;
                return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(_this.templateContent, e.nextSibling);
            });
        },
        append: function() {
            var _this = this;
            this.removeDuplicateTargetChildren();
            this.targetElements.forEach(function(e) {
                return e.append(_this.templateContent);
            });
        },
        before: function() {
            var _this = this;
            this.targetElements.forEach(function(e) {
                var _a;
                return (_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(_this.templateContent, e);
            });
        },
        prepend: function() {
            var _this = this;
            this.removeDuplicateTargetChildren();
            this.targetElements.forEach(function(e) {
                return e.prepend(_this.templateContent);
            });
        },
        remove: function() {
            this.targetElements.forEach(function(e) {
                return e.remove();
            });
        },
        replace: function() {
            var _this = this;
            this.targetElements.forEach(function(e) {
                return e.replaceWith(_this.templateContent);
            });
        },
        update: function() {
            var _this = this;
            this.targetElements.forEach(function(e) {
                e.innerHTML = "";
                e.append(_this.templateContent);
            });
        }
    };
    var StreamElement1 = function(_super) {
        __extends(StreamElement2, _super);
        function StreamElement2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StreamElement2.prototype.connectedCallback = function() {
            return __awaiter(this, void 0, void 0, function() {
                var error_1;
                return __generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            _a.trys.push([
                                0,
                                2,
                                3,
                                4
                            ]);
                            return [
                                4,
                                this.render()
                            ];
                        case 1:
                            _a.sent();
                            return [
                                3,
                                4
                            ];
                        case 2:
                            error_1 = _a.sent();
                            console.error(error_1);
                            return [
                                3,
                                4
                            ];
                        case 3:
                            this.disconnect();
                            return [
                                7
                            ];
                        case 4:
                            return [
                                2
                            ];
                    }
                });
            });
        };
        StreamElement2.prototype.render = function() {
            var _a;
            return __awaiter(this, void 0, void 0, function() {
                var _this = this;
                return __generator(this, function(_b) {
                    return [
                        2,
                        (_a = this.renderPromise) !== null && _a !== void 0 ? _a : this.renderPromise = function() {
                            return __awaiter(_this, void 0, void 0, function() {
                                return __generator(this, function(_a1) {
                                    switch(_a1.label){
                                        case 0:
                                            if (!this.dispatchEvent(this.beforeRenderEvent)) return [
                                                3,
                                                2
                                            ];
                                            return [
                                                4,
                                                nextAnimationFrame()
                                            ];
                                        case 1:
                                            _a1.sent();
                                            this.performAction();
                                            _a1.label = 2;
                                        case 2:
                                            return [
                                                2
                                            ];
                                    }
                                });
                            });
                        }()
                    ];
                });
            });
        };
        StreamElement2.prototype.disconnect = function() {
            try {
                this.remove();
            } catch (_a) {
            }
        };
        StreamElement2.prototype.removeDuplicateTargetChildren = function() {
            this.duplicateChildren.forEach(function(c) {
                return c.remove();
            });
        };
        Object.defineProperty(StreamElement2.prototype, "duplicateChildren", {
            get: function() {
                var _a;
                var existingChildren = this.targetElements.flatMap(function(e) {
                    return __spread(e.children);
                }).filter(function(c) {
                    return !!c.id;
                });
                var newChildrenIds = __spread((_a = this.templateContent) === null || _a === void 0 ? void 0 : _a.children).filter(function(c) {
                    return !!c.id;
                }).map(function(c) {
                    return c.id;
                });
                return existingChildren.filter(function(c) {
                    return newChildrenIds.includes(c.id);
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "performAction", {
            get: function() {
                if (this.action) {
                    var actionFunction = StreamActions[this.action];
                    if (actionFunction) return actionFunction;
                    this.raise("unknown action");
                }
                this.raise("action attribute is missing");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "targetElements", {
            get: function() {
                if (this.target) return this.targetElementsById;
                else if (this.targets) return this.targetElementsByQuery;
                else this.raise("target or targets attribute is missing");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "templateContent", {
            get: function() {
                return this.templateElement.content.cloneNode(true);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "templateElement", {
            get: function() {
                if (this.firstElementChild instanceof HTMLTemplateElement) return this.firstElementChild;
                this.raise("first child element must be a <template> element");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "action", {
            get: function() {
                return this.getAttribute("action");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "target", {
            get: function() {
                return this.getAttribute("target");
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "targets", {
            get: function() {
                return this.getAttribute("targets");
            },
            enumerable: false,
            configurable: true
        });
        StreamElement2.prototype.raise = function(message) {
            throw new Error(this.description + ": " + message);
        };
        Object.defineProperty(StreamElement2.prototype, "description", {
            get: function() {
                var _a, _b;
                return (_b = ((_a = this.outerHTML.match(/<[^>]+>/)) !== null && _a !== void 0 ? _a : [])[0]) !== null && _b !== void 0 ? _b : "<turbo-stream>";
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "beforeRenderEvent", {
            get: function() {
                return new CustomEvent("turbo:before-stream-render", {
                    bubbles: true,
                    cancelable: true
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "targetElementsById", {
            get: function() {
                var _a;
                var element = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.getElementById(this.target);
                if (element !== null) return [
                    element
                ];
                else return [];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(StreamElement2.prototype, "targetElementsByQuery", {
            get: function() {
                var _a;
                var elements = (_a = this.ownerDocument) === null || _a === void 0 ? void 0 : _a.querySelectorAll(this.targets);
                if (elements.length !== 0) return Array.prototype.slice.call(elements);
                else return [];
            },
            enumerable: false,
            configurable: true
        });
        return StreamElement2;
    }(HTMLElement);
    FrameElement1.delegateConstructor = FrameController;
    customElements.define("turbo-frame", FrameElement1);
    customElements.define("turbo-stream", StreamElement1);
    (function() {
        var element = document.currentScript;
        if (!element) return;
        if (element.hasAttribute("data-turbo-suppress-warning")) return;
        while(element = element.parentElement){
            if (element == document.body) return console.warn(unindent(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject([
                "\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwire.dev/handbook/building#working-with-script-elements\n\n        \u2014\u2014\n        Suppress this warning by adding a \"data-turbo-suppress-warning\" attribute to: %s\n      "
            ], [
                "\n        You are loading Turbo from a <script> element inside the <body> element. This is probably not what you meant to do!\n\n        Load your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\n        For more information, see: https://turbo.hotwire.dev/handbook/building#working-with-script-elements\n\n        \u2014\u2014\n        Suppress this warning by adding a \"data-turbo-suppress-warning\" attribute to: %s\n      "
            ]))), element.outerHTML);
        }
    })();
    var templateObject_1$1;
    var session = new Session;
    var navigator = session.navigator;
    function start() {
        session.start();
    }
    function registerAdapter(adapter) {
        session.registerAdapter(adapter);
    }
    function visit(location, options) {
        session.visit(location, options);
    }
    function connectStreamSource(source) {
        session.connectStreamSource(source);
    }
    function disconnectStreamSource(source) {
        session.disconnectStreamSource(source);
    }
    function renderStreamMessage(message) {
        session.renderStreamMessage(message);
    }
    function clearCache() {
        session.clearCache();
    }
    function setProgressBarDelay(delay) {
        session.setProgressBarDelay(delay);
    }
    var Turbo = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        navigator: navigator,
        start: start,
        registerAdapter: registerAdapter,
        visit: visit,
        connectStreamSource: connectStreamSource,
        disconnectStreamSource: disconnectStreamSource,
        renderStreamMessage: renderStreamMessage,
        clearCache: clearCache,
        setProgressBarDelay: setProgressBarDelay
    });
    window.Turbo = Turbo;
    start();
    exports.clearCache = clearCache;
    exports.connectStreamSource = connectStreamSource;
    exports.disconnectStreamSource = disconnectStreamSource;
    exports.navigator = navigator;
    exports.registerAdapter = registerAdapter;
    exports.renderStreamMessage = renderStreamMessage;
    exports.setProgressBarDelay = setProgressBarDelay;
    exports.start = start;
    exports.visit = visit;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}],"73PPo":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"FpJX3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loadTransition() {
    let observer = new IntersectionObserver(function(observables) {
        observables.forEach(function(observable) {
            // L'élément devient visible
            if (observable.intersectionRatio > 0.5) {
                observable.target.style.cssText = `transition-delay: 0.${observable.target.dataset.delay}s;`;
                observable.target.classList.add('in');
                observer.unobserve(observable.target);
            }
        });
    }, {
        threshold: [
            0.5
        ]
    });
    // On observe nos éléments
    let items = document.querySelectorAll('.fade');
    items.forEach(function(item) {
        observer.observe(item);
    });
}
exports.default = loadTransition;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"73PPo"}],"2H2ns":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _flickity = require("flickity");
var _flickityDefault = parcelHelpers.interopDefault(_flickity);
function carousel() {
    let adaptatifGroupCells = 2;
    let adaptatifCellAlign = "left";
    if (window.innerWidth <= 412) {
        adaptatifGroupCells = 1;
        adaptatifCellAlign = 'center';
    }
    let elem = document.querySelector('.flickity');
    if (elem) return new _flickityDefault.default(elem, {
        accessibility: true,
        adaptiveHeight: true,
        autoPlay: false,
        cellAlign: adaptatifCellAlign,
        cellSelector: undefined,
        contain: false,
        draggable: '>1',
        dragThreshold: 1,
        freeScroll: false,
        friction: 0.2,
        // smaller number = easier to flick farther
        groupCells: adaptatifGroupCells,
        // group cells together in slides
        initialIndex: 0,
        // zero-based index of the initial selected cell
        lazyLoad: true,
        // enable lazy-loading images
        // set img data-flickity-lazyload="src.jpg"
        // set to number to load images adjacent cells
        percentPosition: false,
        // sets positioning in percent values, rather than pixels
        // Enable if items have percent widths
        // Disable if items have pixel widths, like images
        prevNextButtons: true,
        // creates and enables buttons to click to previous & next cells
        pageDots: false,
        // create and enable page dots
        resize: true,
        // listens to window resize events to adjust size & positions
        rightToLeft: false,
        // enables right-to-left layout
        setGallerySize: true,
        // sets the height of gallery
        // disable if gallery already has height set with CSS
        watchCSS: false,
        // watches the content of :after of the element
        // activates if #element:after { content: 'flickity' }
        wrapAround: false
    });
    return null;
}
exports.default = carousel;

},{"flickity":"3sXM8","@parcel/transformer-js/src/esmodule-helpers.js":"73PPo"}],"3sXM8":[function(require,module,exports) {
/*!
 * Flickity v2.2.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2021 Metafizzy
 */ (function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        './drag',
        './prev-next-button',
        './page-dots',
        './player',
        './add-remove-cell',
        './lazyload', 
    ], factory);
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(require('./flickity'), require('./drag'), require('./prev-next-button'), require('./page-dots'), require('./player'), require('./add-remove-cell'), require('./lazyload'));
})(window, function factory(Flickity) {
    return Flickity;
});

},{"./flickity":"3JGpB","./drag":"7Ma6f","./prev-next-button":"5g8Jz","./page-dots":"Ic7MB","./player":"5ecra","./add-remove-cell":"4Aohn","./lazyload":"2khbt"}],"3JGpB":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        'ev-emitter/ev-emitter',
        'get-size/get-size',
        'fizzy-ui-utils/utils',
        './cell',
        './slide',
        './animate', 
    ], function(EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
        return factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('ev-emitter'), require('get-size'), require('fizzy-ui-utils'), require('./cell'), require('./slide'), require('./animate'));
    else {
        // browser global
        var _Flickity = window.Flickity;
        window.Flickity = factory(window, window.EvEmitter, window.getSize, window.fizzyUIUtils, _Flickity.Cell, _Flickity.Slide, _Flickity.animatePrototype);
    }
})(window, function factory(window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype) {
    /* eslint-enable max-params */ 'use strict';
    // vars
    var jQuery = window.jQuery;
    var getComputedStyle = window.getComputedStyle;
    var console = window.console;
    function moveElements(elems, toElem) {
        elems = utils.makeArray(elems);
        while(elems.length)toElem.appendChild(elems.shift());
    }
    // -------------------------- Flickity -------------------------- //
    // globally unique identifiers
    var GUID = 0;
    // internal store of all Flickity intances
    var instances = {
    };
    function Flickity(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) console.error('Bad element for Flickity: ' + (queryElement || element));
            return;
        }
        this.element = queryElement;
        // do not initialize twice on same element
        if (this.element.flickityGUID) {
            var instance = instances[this.element.flickityGUID];
            if (instance) instance.option(options);
            return instance;
        }
        // add jQuery
        if (jQuery) this.$element = jQuery(this.element);
        // options
        this.options = utils.extend({
        }, this.constructor.defaults);
        this.option(options);
        // kick things off
        this._create();
    }
    Flickity.defaults = {
        accessibility: true,
        // adaptiveHeight: false,
        cellAlign: 'center',
        // cellSelector: undefined,
        // contain: false,
        freeScrollFriction: 0.075,
        friction: 0.28,
        namespaceJQueryEvents: true,
        // initialIndex: 0,
        percentPosition: true,
        resize: true,
        selectedAttraction: 0.025,
        setGallerySize: true
    };
    // hash of methods triggered on _create()
    Flickity.createMethods = [];
    var proto = Flickity.prototype;
    // inherit EventEmitter
    utils.extend(proto, EvEmitter.prototype);
    proto._create = function() {
        // add id for Flickity.data
        var id = this.guid = ++GUID;
        this.element.flickityGUID = id; // expando
        instances[id] = this; // associate via id
        // initial properties
        this.selectedIndex = 0;
        // how many frames slider has been in same position
        this.restingFrames = 0;
        // initial physics properties
        this.x = 0;
        this.velocity = 0;
        this.originSide = this.options.rightToLeft ? 'right' : 'left';
        // create viewport & slider
        this.viewport = document.createElement('div');
        this.viewport.className = 'flickity-viewport';
        this._createSlider();
        if (this.options.resize || this.options.watchCSS) window.addEventListener('resize', this);
        // add listeners from on option
        for(var eventName in this.options.on){
            var listener = this.options.on[eventName];
            this.on(eventName, listener);
        }
        Flickity.createMethods.forEach(function(method) {
            this[method]();
        }, this);
        if (this.options.watchCSS) this.watchCSS();
        else this.activate();
    };
    /**
 * set options
 * @param {Object} opts - options to extend
 */ proto.option = function(opts) {
        utils.extend(this.options, opts);
    };
    proto.activate = function() {
        if (this.isActive) return;
        this.isActive = true;
        this.element.classList.add('flickity-enabled');
        if (this.options.rightToLeft) this.element.classList.add('flickity-rtl');
        this.getSize();
        // move initial cell elements so they can be loaded as cells
        var cellElems = this._filterFindCellElements(this.element.children);
        moveElements(cellElems, this.slider);
        this.viewport.appendChild(this.slider);
        this.element.appendChild(this.viewport);
        // get cells from children
        this.reloadCells();
        if (this.options.accessibility) {
            // allow element to focusable
            this.element.tabIndex = 0;
            // listen for key presses
            this.element.addEventListener('keydown', this);
        }
        this.emitEvent('activate');
        this.selectInitialIndex();
        // flag for initial activation, for using initialIndex
        this.isInitActivated = true;
        // ready event. #493
        this.dispatchEvent('ready');
    };
    // slider positions the cells
    proto._createSlider = function() {
        // slider element does all the positioning
        var slider = document.createElement('div');
        slider.className = 'flickity-slider';
        slider.style[this.originSide] = 0;
        this.slider = slider;
    };
    proto._filterFindCellElements = function(elems) {
        return utils.filterFindElements(elems, this.options.cellSelector);
    };
    // goes through all children
    proto.reloadCells = function() {
        // collection of item elements
        this.cells = this._makeCells(this.slider.children);
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
    };
    /**
 * turn elements into Flickity.Cells
 * @param {[Array, NodeList, HTMLElement]} elems - elements to make into cells
 * @returns {Array} items - collection of new Flickity Cells
 */ proto._makeCells = function(elems) {
        var cellElems = this._filterFindCellElements(elems);
        // create new Flickity for collection
        var cells = cellElems.map(function(cellElem) {
            return new Cell(cellElem, this);
        }, this);
        return cells;
    };
    proto.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    };
    proto.getLastSlide = function() {
        return this.slides[this.slides.length - 1];
    };
    // positions all cells
    proto.positionCells = function() {
        // size all cells
        this._sizeCells(this.cells);
        // position all cells
        this._positionCells(0);
    };
    /**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */ proto._positionCells = function(index) {
        index = index || 0;
        // also measure maxCellHeight
        // start 0 if positioning all cells
        this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
        var cellX = 0;
        // get cellX
        if (index > 0) {
            var startCell = this.cells[index - 1];
            cellX = startCell.x + startCell.size.outerWidth;
        }
        var len = this.cells.length;
        for(var i = index; i < len; i++){
            var cell = this.cells[i];
            cell.setPosition(cellX);
            cellX += cell.size.outerWidth;
            this.maxCellHeight = Math.max(cell.size.outerHeight, this.maxCellHeight);
        }
        // keep track of cellX for wrap-around
        this.slideableWidth = cellX;
        // slides
        this.updateSlides();
        // contain slides target
        this._containSlides();
        // update slidesWidth
        this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
    };
    /**
 * cell.getSize() on multiple cells
 * @param {Array} cells - cells to size
 */ proto._sizeCells = function(cells) {
        cells.forEach(function(cell) {
            cell.getSize();
        });
    };
    // --------------------------  -------------------------- //
    proto.updateSlides = function() {
        this.slides = [];
        if (!this.cells.length) return;
        var slide = new Slide(this);
        this.slides.push(slide);
        var isOriginLeft = this.originSide == 'left';
        var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';
        var canCellFit = this._getCanCellFit();
        this.cells.forEach(function(cell, i) {
            // just add cell if first cell in slide
            if (!slide.cells.length) {
                slide.addCell(cell);
                return;
            }
            var slideWidth = slide.outerWidth - slide.firstMargin + (cell.size.outerWidth - cell.size[nextMargin]);
            if (canCellFit.call(this, i, slideWidth)) slide.addCell(cell);
            else {
                // doesn't fit, new slide
                slide.updateTarget();
                slide = new Slide(this);
                this.slides.push(slide);
                slide.addCell(cell);
            }
        }, this);
        // last slide
        slide.updateTarget();
        // update .selectedSlide
        this.updateSelectedSlide();
    };
    proto._getCanCellFit = function() {
        var groupCells = this.options.groupCells;
        if (!groupCells) return function() {
            return false;
        };
        else if (typeof groupCells == 'number') {
            // group by number. 3 -> [0,1,2], [3,4,5], ...
            var number = parseInt(groupCells, 10);
            return function(i) {
                return i % number !== 0;
            };
        }
        // default, group by width of slide
        // parse '75%
        var percentMatch = typeof groupCells == 'string' && groupCells.match(/^(\d+)%$/);
        var percent = percentMatch ? parseInt(percentMatch[1], 10) / 100 : 1;
        return function(i, slideWidth) {
            /* eslint-disable-next-line no-invalid-this */ return slideWidth <= (this.size.innerWidth + 1) * percent;
        };
    };
    // alias _init for jQuery plugin .flickity()
    proto._init = proto.reposition = function() {
        this.positionCells();
        this.positionSliderAtSelected();
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
        this.setCellAlign();
        this.cursorPosition = this.size.innerWidth * this.cellAlign;
    };
    var cellAlignShorthands = {
        // cell align, then based on origin side
        center: {
            left: 0.5,
            right: 0.5
        },
        left: {
            left: 0,
            right: 1
        },
        right: {
            right: 0,
            left: 1
        }
    };
    proto.setCellAlign = function() {
        var shorthand = cellAlignShorthands[this.options.cellAlign];
        this.cellAlign = shorthand ? shorthand[this.originSide] : this.options.cellAlign;
    };
    proto.setGallerySize = function() {
        if (this.options.setGallerySize) {
            var height = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
            this.viewport.style.height = height + 'px';
        }
    };
    proto._getWrapShiftCells = function() {
        // only for wrap-around
        if (!this.options.wrapAround) return;
        // unshift previous cells
        this._unshiftCells(this.beforeShiftCells);
        this._unshiftCells(this.afterShiftCells);
        // get before cells
        // initial gap
        var gapX = this.cursorPosition;
        var cellIndex = this.cells.length - 1;
        this.beforeShiftCells = this._getGapCells(gapX, cellIndex, -1);
        // get after cells
        // ending gap between last cell and end of gallery viewport
        gapX = this.size.innerWidth - this.cursorPosition;
        // start cloning at first cell, working forwards
        this.afterShiftCells = this._getGapCells(gapX, 0, 1);
    };
    proto._getGapCells = function(gapX, cellIndex, increment) {
        // keep adding cells until the cover the initial gap
        var cells = [];
        while(gapX > 0){
            var cell = this.cells[cellIndex];
            if (!cell) break;
            cells.push(cell);
            cellIndex += increment;
            gapX -= cell.size.outerWidth;
        }
        return cells;
    };
    // ----- contain ----- //
    // contain cell targets so no excess sliding
    proto._containSlides = function() {
        if (!this.options.contain || this.options.wrapAround || !this.cells.length) return;
        var isRightToLeft = this.options.rightToLeft;
        var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
        var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
        var contentWidth = this.slideableWidth - this.getLastCell().size[endMargin];
        // content is less than gallery size
        var isContentSmaller = contentWidth < this.size.innerWidth;
        // bounds
        var beginBound = this.cursorPosition + this.cells[0].size[beginMargin];
        var endBound = contentWidth - this.size.innerWidth * (1 - this.cellAlign);
        // contain each cell target
        this.slides.forEach(function(slide) {
            if (isContentSmaller) // all cells fit inside gallery
            slide.target = contentWidth * this.cellAlign;
            else {
                // contain to bounds
                slide.target = Math.max(slide.target, beginBound);
                slide.target = Math.min(slide.target, endBound);
            }
        }, this);
    };
    // -----  ----- //
    /**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */ proto.dispatchEvent = function(type, event, args) {
        var emitArgs = event ? [
            event
        ].concat(args) : args;
        this.emitEvent(type, emitArgs);
        if (jQuery && this.$element) {
            // default trigger with type if no event
            type += this.options.namespaceJQueryEvents ? '.flickity' : '';
            var $event = type;
            if (event) {
                // create jQuery event
                var jQEvent = new jQuery.Event(event);
                jQEvent.type = type;
                $event = jQEvent;
            }
            this.$element.trigger($event, args);
        }
    };
    // -------------------------- select -------------------------- //
    /**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */ proto.select = function(index, isWrap, isInstant) {
        if (!this.isActive) return;
        index = parseInt(index, 10);
        this._wrapSelect(index);
        if (this.options.wrapAround || isWrap) index = utils.modulo(index, this.slides.length);
        // bail if invalid index
        if (!this.slides[index]) return;
        var prevIndex = this.selectedIndex;
        this.selectedIndex = index;
        this.updateSelectedSlide();
        if (isInstant) this.positionSliderAtSelected();
        else this.startAnimation();
        if (this.options.adaptiveHeight) this.setGallerySize();
        // events
        this.dispatchEvent('select', null, [
            index
        ]);
        // change event if new index
        if (index != prevIndex) this.dispatchEvent('change', null, [
            index
        ]);
        // old v1 event name, remove in v3
        this.dispatchEvent('cellSelect');
    };
    // wraps position for wrapAround, to move to closest slide. #113
    proto._wrapSelect = function(index) {
        var len = this.slides.length;
        var isWrapping = this.options.wrapAround && len > 1;
        if (!isWrapping) return index;
        var wrapIndex = utils.modulo(index, len);
        // go to shortest
        var delta = Math.abs(wrapIndex - this.selectedIndex);
        var backWrapDelta = Math.abs(wrapIndex + len - this.selectedIndex);
        var forewardWrapDelta = Math.abs(wrapIndex - len - this.selectedIndex);
        if (!this.isDragSelect && backWrapDelta < delta) index += len;
        else if (!this.isDragSelect && forewardWrapDelta < delta) index -= len;
        // wrap position so slider is within normal area
        if (index < 0) this.x -= this.slideableWidth;
        else if (index >= len) this.x += this.slideableWidth;
    };
    proto.previous = function(isWrap, isInstant) {
        this.select(this.selectedIndex - 1, isWrap, isInstant);
    };
    proto.next = function(isWrap, isInstant) {
        this.select(this.selectedIndex + 1, isWrap, isInstant);
    };
    proto.updateSelectedSlide = function() {
        var slide = this.slides[this.selectedIndex];
        // selectedIndex could be outside of slides, if triggered before resize()
        if (!slide) return;
        // unselect previous selected slide
        this.unselectSelectedSlide();
        // update new selected slide
        this.selectedSlide = slide;
        slide.select();
        this.selectedCells = slide.cells;
        this.selectedElements = slide.getCellElements();
        // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
        // Remove in v3?
        this.selectedCell = slide.cells[0];
        this.selectedElement = this.selectedElements[0];
    };
    proto.unselectSelectedSlide = function() {
        if (this.selectedSlide) this.selectedSlide.unselect();
    };
    proto.selectInitialIndex = function() {
        var initialIndex = this.options.initialIndex;
        // already activated, select previous selectedIndex
        if (this.isInitActivated) {
            this.select(this.selectedIndex, false, true);
            return;
        }
        // select with selector string
        if (initialIndex && typeof initialIndex == 'string') {
            var cell = this.queryCell(initialIndex);
            if (cell) {
                this.selectCell(initialIndex, false, true);
                return;
            }
        }
        var index = 0;
        // select with number
        if (initialIndex && this.slides[initialIndex]) index = initialIndex;
        // select instantly
        this.select(index, false, true);
    };
    /**
 * select slide from number or cell element
 * @param {[Element, Number]} value - zero-based index or element to select
 * @param {Boolean} isWrap - enables wrapping around for extra index
 * @param {Boolean} isInstant - disables slide animation
 */ proto.selectCell = function(value, isWrap, isInstant) {
        // get cell
        var cell = this.queryCell(value);
        if (!cell) return;
        var index = this.getCellSlideIndex(cell);
        this.select(index, isWrap, isInstant);
    };
    proto.getCellSlideIndex = function(cell) {
        // get index of slides that has cell
        for(var i = 0; i < this.slides.length; i++){
            var slide = this.slides[i];
            var index = slide.cells.indexOf(cell);
            if (index != -1) return i;
        }
    };
    // -------------------------- get cells -------------------------- //
    /**
 * get Flickity.Cell, given an Element
 * @param {Element} elem - matching cell element
 * @returns {Flickity.Cell} cell - matching cell
 */ proto.getCell = function(elem) {
        // loop through cells to get the one that matches
        for(var i = 0; i < this.cells.length; i++){
            var cell = this.cells[i];
            if (cell.element == elem) return cell;
        }
    };
    /**
 * get collection of Flickity.Cells, given Elements
 * @param {[Element, Array, NodeList]} elems - multiple elements
 * @returns {Array} cells - Flickity.Cells
 */ proto.getCells = function(elems) {
        elems = utils.makeArray(elems);
        var cells = [];
        elems.forEach(function(elem) {
            var cell = this.getCell(elem);
            if (cell) cells.push(cell);
        }, this);
        return cells;
    };
    /**
 * get cell elements
 * @returns {Array} cellElems
 */ proto.getCellElements = function() {
        return this.cells.map(function(cell) {
            return cell.element;
        });
    };
    /**
 * get parent cell from an element
 * @param {Element} elem - child element
 * @returns {Flickit.Cell} cell - parent cell
 */ proto.getParentCell = function(elem) {
        // first check if elem is cell
        var cell = this.getCell(elem);
        if (cell) return cell;
        // try to get parent cell elem
        elem = utils.getParent(elem, '.flickity-slider > *');
        return this.getCell(elem);
    };
    /**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */ proto.getAdjacentCellElements = function(adjCount, index) {
        if (!adjCount) return this.selectedSlide.getCellElements();
        index = index === undefined ? this.selectedIndex : index;
        var len = this.slides.length;
        if (1 + adjCount * 2 >= len) return this.getCellElements();
        var cellElems = [];
        for(var i = index - adjCount; i <= index + adjCount; i++){
            var slideIndex = this.options.wrapAround ? utils.modulo(i, len) : i;
            var slide = this.slides[slideIndex];
            if (slide) cellElems = cellElems.concat(slide.getCellElements());
        }
        return cellElems;
    };
    /**
 * select slide from number or cell element
 * @param {[Element, String, Number]} selector - element, selector string, or index
 * @returns {Flickity.Cell} - matching cell
 */ proto.queryCell = function(selector) {
        if (typeof selector == 'number') // use number as index
        return this.cells[selector];
        if (typeof selector == 'string') {
            // do not select invalid selectors from hash: #123, #/. #791
            if (selector.match(/^[#.]?[\d/]/)) return;
            // use string as selector, get element
            selector = this.element.querySelector(selector);
        }
        // get cell from element
        return this.getCell(selector);
    };
    // -------------------------- events -------------------------- //
    proto.uiChange = function() {
        this.emitEvent('uiChange');
    };
    // keep focus on element when child UI elements are clicked
    proto.childUIPointerDown = function(event) {
        // HACK iOS does not allow touch events to bubble up?!
        if (event.type != 'touchstart') event.preventDefault();
        this.focus();
    };
    // ----- resize ----- //
    proto.onresize = function() {
        this.watchCSS();
        this.resize();
    };
    utils.debounceMethod(Flickity, 'onresize', 150);
    proto.resize = function() {
        if (!this.isActive) return;
        this.getSize();
        // wrap values
        if (this.options.wrapAround) this.x = utils.modulo(this.x, this.slideableWidth);
        this.positionCells();
        this._getWrapShiftCells();
        this.setGallerySize();
        this.emitEvent('resize');
        // update selected index for group slides, instant
        // TODO: position can be lost between groups of various numbers
        var selectedElement = this.selectedElements && this.selectedElements[0];
        this.selectCell(selectedElement, false, true);
    };
    // watches the :after property, activates/deactivates
    proto.watchCSS = function() {
        var watchOption = this.options.watchCSS;
        if (!watchOption) return;
        var afterContent = getComputedStyle(this.element, ':after').content;
        // activate if :after { content: 'flickity' }
        if (afterContent.indexOf('flickity') != -1) this.activate();
        else this.deactivate();
    };
    // ----- keydown ----- //
    // go previous/next if left/right keys pressed
    proto.onkeydown = function(event) {
        // only work if element is in focus
        var isNotFocused = document.activeElement && document.activeElement != this.element;
        if (!this.options.accessibility || isNotFocused) return;
        var handler = Flickity.keyboardHandlers[event.keyCode];
        if (handler) handler.call(this);
    };
    Flickity.keyboardHandlers = {
        // left arrow
        37: function() {
            var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
            this.uiChange();
            this[leftMethod]();
        },
        // right arrow
        39: function() {
            var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
            this.uiChange();
            this[rightMethod]();
        }
    };
    // ----- focus ----- //
    proto.focus = function() {
        // TODO remove scrollTo once focus options gets more support
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus ...
        //    #Browser_compatibility
        var prevScrollY = window.pageYOffset;
        this.element.focus({
            preventScroll: true
        });
        // hack to fix scroll jump after focus, #76
        if (window.pageYOffset != prevScrollY) window.scrollTo(window.pageXOffset, prevScrollY);
    };
    // -------------------------- destroy -------------------------- //
    // deactivate all Flickity functionality, but keep stuff available
    proto.deactivate = function() {
        if (!this.isActive) return;
        this.element.classList.remove('flickity-enabled');
        this.element.classList.remove('flickity-rtl');
        this.unselectSelectedSlide();
        // destroy cells
        this.cells.forEach(function(cell) {
            cell.destroy();
        });
        this.element.removeChild(this.viewport);
        // move child elements back into element
        moveElements(this.slider.children, this.element);
        if (this.options.accessibility) {
            this.element.removeAttribute('tabIndex');
            this.element.removeEventListener('keydown', this);
        }
        // set flags
        this.isActive = false;
        this.emitEvent('deactivate');
    };
    proto.destroy = function() {
        this.deactivate();
        window.removeEventListener('resize', this);
        this.allOff();
        this.emitEvent('destroy');
        if (jQuery && this.$element) jQuery.removeData(this.element, 'flickity');
        delete this.element.flickityGUID;
        delete instances[this.guid];
    };
    // -------------------------- prototype -------------------------- //
    utils.extend(proto, animatePrototype);
    // -------------------------- extras -------------------------- //
    /**
 * get Flickity instance from element
 * @param {[Element, String]} elem - element or selector string
 * @returns {Flickity} - Flickity instance
 */ Flickity.data = function(elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.flickityGUID;
        return id && instances[id];
    };
    utils.htmlInit(Flickity, 'flickity');
    if (jQuery && jQuery.bridget) jQuery.bridget('flickity', Flickity);
    // set internal jQuery, for Webpack + jQuery v3, #478
    Flickity.setJQuery = function(jq) {
        jQuery = jq;
    };
    Flickity.Cell = Cell;
    Flickity.Slide = Slide;
    return Flickity;
});

},{"ev-emitter":"7dAvB","get-size":"6HyeU","fizzy-ui-utils":"uuU9V","./cell":"2yJdt","./slide":"2vRUd","./animate":"50A6g"}],"7dAvB":[function(require,module,exports) {
(function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == 'function' && define.amd) // AMD - RequireJS
    define(factory);
    else if (typeof module == 'object' && module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != 'undefined' ? window : this, function() {
    "use strict";
    function EvEmitter() {
    }
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {
        };
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {
        };
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {
        };
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"6HyeU":[function(require,module,exports) {
/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */ /* jshint browser: true, strict: true, undef: true, unused: true */ /* globals console: false */ (function(window, factory) {
    /* jshint strict: false */ /* globals define, module */ if (typeof define == 'function' && define.amd) // AMD
    define(factory);
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window.getSize = factory();
})(window, function factory() {
    'use strict';
    // -------------------------- helpers -------------------------- //
    // get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }
    function noop() {
    }
    var logError = typeof console == 'undefined' ? noop : function(message) {
        console.error(message);
    };
    // -------------------------- measurements -------------------------- //
    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];
    var measurementsLength = measurements.length;
    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }
    // -------------------------- getStyle -------------------------- //
    /**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */ function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) logError('Style returned ' + style + '. Are you running this code in a hidden iframe on Firefox? ' + 'See https://bit.ly/getsizebug1');
        return style;
    }
    // -------------------------- setup -------------------------- //
    var isSetup = false;
    var isBoxSizeOuter;
    /**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */ function setup() {
        // setup once
        if (isSetup) return;
        isSetup = true;
        // -------------------------- box sizing -------------------------- //
        /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */ var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';
        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        // round value for browser zoom. desandro/masonry#928
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;
        body.removeChild(div);
    }
    // -------------------------- getSize -------------------------- //
    function getSize(elem) {
        setup();
        // use querySeletor if elem is string
        if (typeof elem == 'string') elem = document.querySelector(elem);
        // do not proceed on non-objects
        if (!elem || typeof elem != 'object' || !elem.nodeType) return;
        var style = getStyle(elem);
        // if hidden, everything is 0
        if (style.display == 'none') return getZeroSize();
        var size = {
        };
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;
        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';
        // get all measurements
        for(var i = 0; i < measurementsLength; i++){
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
        }
        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;
        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;
        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) size.width = styleWidth + (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) size.height = styleHeight + (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);
        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;
        return size;
    }
    return getSize;
});

},{}],"uuU9V":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'desandro-matches-selector/matches-selector'
    ], function(matchesSelector) {
        return factory(window, matchesSelector);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('desandro-matches-selector'));
    else // browser global
    window.fizzyUIUtils = factory(window, window.matchesSelector);
})(window, function factory(window, matchesSelector) {
    'use strict';
    var utils = {
    };
    // ----- extend ----- //
    // extends objects
    utils.extend = function(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    };
    // ----- modulo ----- //
    utils.modulo = function(num, div) {
        return (num % div + div) % div;
    };
    // ----- makeArray ----- //
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    utils.makeArray = function(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        // return empty array if undefined or null. #6
        if (obj === null || obj === undefined) return [];
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    };
    // ----- removeFrom ----- //
    utils.removeFrom = function(ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) ary.splice(index, 1);
    };
    // ----- getParent ----- //
    utils.getParent = function(elem, selector) {
        while(elem.parentNode && elem != document.body){
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) return elem;
        }
    };
    // ----- getQueryElement ----- //
    // use element as selector string
    utils.getQueryElement = function(elem) {
        if (typeof elem == 'string') return document.querySelector(elem);
        return elem;
    };
    // ----- handleEvent ----- //
    // enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) this[method](event);
    };
    // ----- filterFindElements ----- //
    utils.filterFindElements = function(elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];
        elems.forEach(function(elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) return;
            // add elem if no selector
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            // filter & find items if we have a selector
            // filter
            if (matchesSelector(elem, selector)) ffElems.push(elem);
            // find children
            var childElems = elem.querySelectorAll(selector);
            // concat childElems to filterFound array
            for(var i = 0; i < childElems.length; i++)ffElems.push(childElems[i]);
        });
        return ffElems;
    };
    // ----- debounceMethod ----- //
    utils.debounceMethod = function(_class, methodName, threshold) {
        threshold = threshold || 100;
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';
        _class.prototype[methodName] = function() {
            var timeout = this[timeoutName];
            clearTimeout(timeout);
            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function() {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };
    // ----- docReady ----- //
    utils.docReady = function(callback) {
        var readyState = document.readyState;
        if (readyState == 'complete' || readyState == 'interactive') // do async to allow for other scripts to run. metafizzy/flickity#441
        setTimeout(callback);
        else document.addEventListener('DOMContentLoaded', callback);
    };
    // ----- htmlInit ----- //
    // http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function(str) {
        return str.replace(/(.)([A-Z])/g, function(match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    };
    var console = window.console;
    /**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */ utils.htmlInit = function(WidgetClass, namespace) {
        utils.docReady(function() {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems).concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;
            elems.forEach(function(elem) {
                var attr = elem.getAttribute(dataAttr) || elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) console.error('Error parsing ' + dataAttr + ' on ' + elem.className + ': ' + error);
                    return;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('namespace')
                if (jQuery) jQuery.data(elem, namespace, instance);
            });
        });
    };
    // -----  ----- //
    return utils;
});

},{"desandro-matches-selector":"4NF5e"}],"4NF5e":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define(factory);
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory();
    else // browser global
    window.matchesSelector = factory();
})(window, function factory() {
    'use strict';
    var matchesMethod = function() {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) return 'matches';
        // check un-prefixed
        if (ElemProto.matchesSelector) return 'matchesSelector';
        // check vendor prefixes
        var prefixes = [
            'webkit',
            'moz',
            'ms',
            'o'
        ];
        for(var i = 0; i < prefixes.length; i++){
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) return method;
        }
    }();
    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };
});

},{}],"2yJdt":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        'get-size/get-size', 
    ], function(getSize) {
        return factory(window, getSize);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('get-size'));
    else {
        // browser global
        window.Flickity = window.Flickity || {
        };
        window.Flickity.Cell = factory(window, window.getSize);
    }
})(window, function factory(window, getSize) {
    'use strict';
    function Cell(elem, parent) {
        this.element = elem;
        this.parent = parent;
        this.create();
    }
    var proto = Cell.prototype;
    proto.create = function() {
        this.element.style.position = 'absolute';
        this.element.setAttribute('aria-hidden', 'true');
        this.x = 0;
        this.shift = 0;
    };
    proto.destroy = function() {
        // reset style
        this.unselect();
        this.element.style.position = '';
        var side = this.parent.originSide;
        this.element.style[side] = '';
        this.element.removeAttribute('aria-hidden');
    };
    proto.getSize = function() {
        this.size = getSize(this.element);
    };
    proto.setPosition = function(x) {
        this.x = x;
        this.updateTarget();
        this.renderPosition(x);
    };
    // setDefaultTarget v1 method, backwards compatibility, remove in v3
    proto.updateTarget = proto.setDefaultTarget = function() {
        var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
        this.target = this.x + this.size[marginProperty] + this.size.width * this.parent.cellAlign;
    };
    proto.renderPosition = function(x) {
        // render position of cell with in slider
        var side = this.parent.originSide;
        this.element.style[side] = this.parent.getPositionValue(x);
    };
    proto.select = function() {
        this.element.classList.add('is-selected');
        this.element.removeAttribute('aria-hidden');
    };
    proto.unselect = function() {
        this.element.classList.remove('is-selected');
        this.element.setAttribute('aria-hidden', 'true');
    };
    /**
 * @param {Integer} shift - 0, 1, or -1
 */ proto.wrapShift = function(shift) {
        this.shift = shift;
        this.renderPosition(this.x + this.parent.slideableWidth * shift);
    };
    proto.remove = function() {
        this.element.parentNode.removeChild(this.element);
    };
    return Cell;
});

},{"get-size":"6HyeU"}],"2vRUd":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define(factory);
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory();
    else {
        // browser global
        window.Flickity = window.Flickity || {
        };
        window.Flickity.Slide = factory();
    }
})(window, function factory() {
    'use strict';
    function Slide(parent) {
        this.parent = parent;
        this.isOriginLeft = parent.originSide == 'left';
        this.cells = [];
        this.outerWidth = 0;
        this.height = 0;
    }
    var proto = Slide.prototype;
    proto.addCell = function(cell) {
        this.cells.push(cell);
        this.outerWidth += cell.size.outerWidth;
        this.height = Math.max(cell.size.outerHeight, this.height);
        // first cell stuff
        if (this.cells.length == 1) {
            this.x = cell.x; // x comes from first cell
            var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
            this.firstMargin = cell.size[beginMargin];
        }
    };
    proto.updateTarget = function() {
        var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
        var lastCell = this.getLastCell();
        var lastMargin = lastCell ? lastCell.size[endMargin] : 0;
        var slideWidth = this.outerWidth - (this.firstMargin + lastMargin);
        this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
    };
    proto.getLastCell = function() {
        return this.cells[this.cells.length - 1];
    };
    proto.select = function() {
        this.cells.forEach(function(cell) {
            cell.select();
        });
    };
    proto.unselect = function() {
        this.cells.forEach(function(cell) {
            cell.unselect();
        });
    };
    proto.getCellElements = function() {
        return this.cells.map(function(cell) {
            return cell.element;
        });
    };
    return Slide;
});

},{}],"50A6g":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        'fizzy-ui-utils/utils', 
    ], function(utils) {
        return factory(window, utils);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('fizzy-ui-utils'));
    else {
        // browser global
        window.Flickity = window.Flickity || {
        };
        window.Flickity.animatePrototype = factory(window, window.fizzyUIUtils);
    }
})(window, function factory(window, utils) {
    'use strict';
    // -------------------------- animate -------------------------- //
    var proto = {
    };
    proto.startAnimation = function() {
        if (this.isAnimating) return;
        this.isAnimating = true;
        this.restingFrames = 0;
        this.animate();
    };
    proto.animate = function() {
        this.applyDragForce();
        this.applySelectedAttraction();
        var previousX = this.x;
        this.integratePhysics();
        this.positionSlider();
        this.settle(previousX);
        // animate next frame
        if (this.isAnimating) {
            var _this = this;
            requestAnimationFrame(function animateFrame() {
                _this.animate();
            });
        }
    };
    proto.positionSlider = function() {
        var x = this.x;
        // wrap position around
        if (this.options.wrapAround && this.cells.length > 1) {
            x = utils.modulo(x, this.slideableWidth);
            x -= this.slideableWidth;
            this.shiftWrapCells(x);
        }
        this.setTranslateX(x, this.isAnimating);
        this.dispatchScrollEvent();
    };
    proto.setTranslateX = function(x, is3d) {
        x += this.cursorPosition;
        // reverse if right-to-left and using transform
        x = this.options.rightToLeft ? -x : x;
        var translateX = this.getPositionValue(x);
        // use 3D transforms for hardware acceleration on iOS
        // but use 2D when settled, for better font-rendering
        this.slider.style.transform = is3d ? 'translate3d(' + translateX + ',0,0)' : 'translateX(' + translateX + ')';
    };
    proto.dispatchScrollEvent = function() {
        var firstSlide = this.slides[0];
        if (!firstSlide) return;
        var positionX = -this.x - firstSlide.target;
        var progress = positionX / this.slidesWidth;
        this.dispatchEvent('scroll', null, [
            progress,
            positionX
        ]);
    };
    proto.positionSliderAtSelected = function() {
        if (!this.cells.length) return;
        this.x = -this.selectedSlide.target;
        this.velocity = 0; // stop wobble
        this.positionSlider();
    };
    proto.getPositionValue = function(position) {
        if (this.options.percentPosition) // percent position, round to 2 digits, like 12.34%
        return Math.round(position / this.size.innerWidth * 10000) * 0.01 + '%';
        else // pixel positioning
        return Math.round(position) + 'px';
    };
    proto.settle = function(previousX) {
        // keep track of frames where x hasn't moved
        var isResting = !this.isPointerDown && Math.round(this.x * 100) == Math.round(previousX * 100);
        if (isResting) this.restingFrames++;
        // stop animating if resting for 3 or more frames
        if (this.restingFrames > 2) {
            this.isAnimating = false;
            delete this.isFreeScrolling;
            // render position with translateX when settled
            this.positionSlider();
            this.dispatchEvent('settle', null, [
                this.selectedIndex
            ]);
        }
    };
    proto.shiftWrapCells = function(x) {
        // shift before cells
        var beforeGap = this.cursorPosition + x;
        this._shiftCells(this.beforeShiftCells, beforeGap, -1);
        // shift after cells
        var afterGap = this.size.innerWidth - (x + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, afterGap, 1);
    };
    proto._shiftCells = function(cells, gap, shift) {
        for(var i = 0; i < cells.length; i++){
            var cell = cells[i];
            var cellShift = gap > 0 ? shift : 0;
            cell.wrapShift(cellShift);
            gap -= cell.size.outerWidth;
        }
    };
    proto._unshiftCells = function(cells) {
        if (!cells || !cells.length) return;
        for(var i = 0; i < cells.length; i++)cells[i].wrapShift(0);
    };
    // -------------------------- physics -------------------------- //
    proto.integratePhysics = function() {
        this.x += this.velocity;
        this.velocity *= this.getFrictionFactor();
    };
    proto.applyForce = function(force) {
        this.velocity += force;
    };
    proto.getFrictionFactor = function() {
        return 1 - this.options[this.isFreeScrolling ? 'freeScrollFriction' : 'friction'];
    };
    proto.getRestingPosition = function() {
        // my thanks to Steven Wittens, who simplified this math greatly
        return this.x + this.velocity / (1 - this.getFrictionFactor());
    };
    proto.applyDragForce = function() {
        if (!this.isDraggable || !this.isPointerDown) return;
        // change the position to drag position by applying force
        var dragVelocity = this.dragX - this.x;
        var dragForce = dragVelocity - this.velocity;
        this.applyForce(dragForce);
    };
    proto.applySelectedAttraction = function() {
        // do not attract if pointer down or no slides
        var dragDown = this.isDraggable && this.isPointerDown;
        if (dragDown || this.isFreeScrolling || !this.slides.length) return;
        var distance = this.selectedSlide.target * -1 - this.x;
        var force = distance * this.options.selectedAttraction;
        this.applyForce(force);
    };
    return proto;
});

},{"fizzy-ui-utils":"uuU9V"}],"7Ma6f":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'unidragger/unidragger',
        'fizzy-ui-utils/utils', 
    ], function(Flickity, Unidragger, utils) {
        return factory(window, Flickity, Unidragger, utils);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('./flickity'), require('unidragger'), require('fizzy-ui-utils'));
    else // browser global
    window.Flickity = factory(window, window.Flickity, window.Unidragger, window.fizzyUIUtils);
})(window, function factory(window, Flickity, Unidragger, utils) {
    'use strict';
    // ----- defaults ----- //
    utils.extend(Flickity.defaults, {
        draggable: '>1',
        dragThreshold: 3
    });
    // ----- create ----- //
    Flickity.createMethods.push('_createDrag');
    // -------------------------- drag prototype -------------------------- //
    var proto = Flickity.prototype;
    utils.extend(proto, Unidragger.prototype);
    proto._touchActionValue = 'pan-y';
    // --------------------------  -------------------------- //
    var isTouch = 'createTouch' in document;
    var isTouchmoveScrollCanceled = false;
    proto._createDrag = function() {
        this.on('activate', this.onActivateDrag);
        this.on('uiChange', this._uiChangeDrag);
        this.on('deactivate', this.onDeactivateDrag);
        this.on('cellChange', this.updateDraggable);
        // TODO updateDraggable on resize? if groupCells & slides change
        // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
        // #457, RubaXa/Sortable#973
        if (isTouch && !isTouchmoveScrollCanceled) {
            window.addEventListener('touchmove', function() {
            });
            isTouchmoveScrollCanceled = true;
        }
    };
    proto.onActivateDrag = function() {
        this.handles = [
            this.viewport
        ];
        this.bindHandles();
        this.updateDraggable();
    };
    proto.onDeactivateDrag = function() {
        this.unbindHandles();
        this.element.classList.remove('is-draggable');
    };
    proto.updateDraggable = function() {
        // disable dragging if less than 2 slides. #278
        if (this.options.draggable == '>1') this.isDraggable = this.slides.length > 1;
        else this.isDraggable = this.options.draggable;
        if (this.isDraggable) this.element.classList.add('is-draggable');
        else this.element.classList.remove('is-draggable');
    };
    // backwards compatibility
    proto.bindDrag = function() {
        this.options.draggable = true;
        this.updateDraggable();
    };
    proto.unbindDrag = function() {
        this.options.draggable = false;
        this.updateDraggable();
    };
    proto._uiChangeDrag = function() {
        delete this.isFreeScrolling;
    };
    // -------------------------- pointer events -------------------------- //
    proto.pointerDown = function(event, pointer) {
        if (!this.isDraggable) {
            this._pointerDownDefault(event, pointer);
            return;
        }
        var isOkay = this.okayPointerDown(event);
        if (!isOkay) return;
        this._pointerDownPreventDefault(event);
        this.pointerDownFocus(event);
        // blur
        if (document.activeElement != this.element) // do not blur if already focused
        this.pointerDownBlur();
        // stop if it was moving
        this.dragX = this.x;
        this.viewport.classList.add('is-pointer-down');
        // track scrolling
        this.pointerDownScroll = getScrollPosition();
        window.addEventListener('scroll', this);
        this._pointerDownDefault(event, pointer);
    };
    // default pointerDown logic, used for staticClick
    proto._pointerDownDefault = function(event, pointer) {
        // track start event position
        // Safari 9 overrides pageX and pageY. These values needs to be copied. #779
        this.pointerDownPointer = {
            pageX: pointer.pageX,
            pageY: pointer.pageY
        };
        // bind move and end events
        this._bindPostStartEvents(event);
        this.dispatchEvent('pointerDown', event, [
            pointer
        ]);
    };
    var focusNodes = {
        INPUT: true,
        TEXTAREA: true,
        SELECT: true
    };
    proto.pointerDownFocus = function(event) {
        var isFocusNode = focusNodes[event.target.nodeName];
        if (!isFocusNode) this.focus();
    };
    proto._pointerDownPreventDefault = function(event) {
        var isTouchStart = event.type == 'touchstart';
        var isTouchPointer = event.pointerType == 'touch';
        var isFocusNode = focusNodes[event.target.nodeName];
        if (!isTouchStart && !isTouchPointer && !isFocusNode) event.preventDefault();
    };
    // ----- move ----- //
    proto.hasDragStarted = function(moveVector) {
        return Math.abs(moveVector.x) > this.options.dragThreshold;
    };
    // ----- up ----- //
    proto.pointerUp = function(event, pointer) {
        delete this.isTouchScrolling;
        this.viewport.classList.remove('is-pointer-down');
        this.dispatchEvent('pointerUp', event, [
            pointer
        ]);
        this._dragPointerUp(event, pointer);
    };
    proto.pointerDone = function() {
        window.removeEventListener('scroll', this);
        delete this.pointerDownScroll;
    };
    // -------------------------- dragging -------------------------- //
    proto.dragStart = function(event, pointer) {
        if (!this.isDraggable) return;
        this.dragStartPosition = this.x;
        this.startAnimation();
        window.removeEventListener('scroll', this);
        this.dispatchEvent('dragStart', event, [
            pointer
        ]);
    };
    proto.pointerMove = function(event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.dispatchEvent('pointerMove', event, [
            pointer,
            moveVector
        ]);
        this._dragMove(event, pointer, moveVector);
    };
    proto.dragMove = function(event, pointer, moveVector) {
        if (!this.isDraggable) return;
        event.preventDefault();
        this.previousDragX = this.dragX;
        // reverse if right-to-left
        var direction = this.options.rightToLeft ? -1 : 1;
        if (this.options.wrapAround) // wrap around move. #589
        moveVector.x %= this.slideableWidth;
        var dragX = this.dragStartPosition + moveVector.x * direction;
        if (!this.options.wrapAround && this.slides.length) {
            // slow drag
            var originBound = Math.max(-this.slides[0].target, this.dragStartPosition);
            dragX = dragX > originBound ? (dragX + originBound) * 0.5 : dragX;
            var endBound = Math.min(-this.getLastSlide().target, this.dragStartPosition);
            dragX = dragX < endBound ? (dragX + endBound) * 0.5 : dragX;
        }
        this.dragX = dragX;
        this.dragMoveTime = new Date();
        this.dispatchEvent('dragMove', event, [
            pointer,
            moveVector
        ]);
    };
    proto.dragEnd = function(event, pointer) {
        if (!this.isDraggable) return;
        if (this.options.freeScroll) this.isFreeScrolling = true;
        // set selectedIndex based on where flick will end up
        var index = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
            // if free-scroll & not wrap around
            // do not free-scroll if going outside of bounding slides
            // so bounding slides can attract slider, and keep it in bounds
            var restingX = this.getRestingPosition();
            this.isFreeScrolling = -restingX > this.slides[0].target && -restingX < this.getLastSlide().target;
        } else if (!this.options.freeScroll && index == this.selectedIndex) // boost selection if selected index has not changed
        index += this.dragEndBoostSelect();
        delete this.previousDragX;
        // apply selection
        // TODO refactor this, selecting here feels weird
        // HACK, set flag so dragging stays in correct direction
        this.isDragSelect = this.options.wrapAround;
        this.select(index);
        delete this.isDragSelect;
        this.dispatchEvent('dragEnd', event, [
            pointer
        ]);
    };
    proto.dragEndRestingSelect = function() {
        var restingX = this.getRestingPosition();
        // how far away from selected slide
        var distance = Math.abs(this.getSlideDistance(-restingX, this.selectedIndex));
        // get closet resting going up and going down
        var positiveResting = this._getClosestResting(restingX, distance, 1);
        var negativeResting = this._getClosestResting(restingX, distance, -1);
        // use closer resting for wrap-around
        var index = positiveResting.distance < negativeResting.distance ? positiveResting.index : negativeResting.index;
        return index;
    };
    /**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */ proto._getClosestResting = function(restingX, distance, increment) {
        var index = this.selectedIndex;
        var minDistance = Infinity;
        var condition = this.options.contain && !this.options.wrapAround ? // if contain, keep going if distance is equal to minDistance
        function(dist, minDist) {
            return dist <= minDist;
        } : function(dist, minDist) {
            return dist < minDist;
        };
        while(condition(distance, minDistance)){
            // measure distance to next cell
            index += increment;
            minDistance = distance;
            distance = this.getSlideDistance(-restingX, index);
            if (distance === null) break;
            distance = Math.abs(distance);
        }
        return {
            distance: minDistance,
            // selected was previous index
            index: index - increment
        };
    };
    /**
 * measure distance between x and a slide target
 * @param {Number} x - horizontal position
 * @param {Integer} index - slide index
 * @returns {Number} - slide distance
 */ proto.getSlideDistance = function(x, index) {
        var len = this.slides.length;
        // wrap around if at least 2 slides
        var isWrapAround = this.options.wrapAround && len > 1;
        var slideIndex = isWrapAround ? utils.modulo(index, len) : index;
        var slide = this.slides[slideIndex];
        if (!slide) return null;
        // add distance for wrap-around slides
        var wrap = isWrapAround ? this.slideableWidth * Math.floor(index / len) : 0;
        return x - (slide.target + wrap);
    };
    proto.dragEndBoostSelect = function() {
        // do not boost if no previousDragX or dragMoveTime
        if (this.previousDragX === undefined || !this.dragMoveTime || // or if drag was held for 100 ms
        new Date() - this.dragMoveTime > 100) return 0;
        var distance = this.getSlideDistance(-this.dragX, this.selectedIndex);
        var delta = this.previousDragX - this.dragX;
        if (distance > 0 && delta > 0) // boost to next if moving towards the right, and positive velocity
        return 1;
        else if (distance < 0 && delta < 0) // boost to previous if moving towards the left, and negative velocity
        return -1;
        return 0;
    };
    // ----- staticClick ----- //
    proto.staticClick = function(event, pointer) {
        // get clickedCell, if cell was clicked
        var clickedCell = this.getParentCell(event.target);
        var cellElem = clickedCell && clickedCell.element;
        var cellIndex = clickedCell && this.cells.indexOf(clickedCell);
        this.dispatchEvent('staticClick', event, [
            pointer,
            cellElem,
            cellIndex
        ]);
    };
    // ----- scroll ----- //
    proto.onscroll = function() {
        var scroll = getScrollPosition();
        var scrollMoveX = this.pointerDownScroll.x - scroll.x;
        var scrollMoveY = this.pointerDownScroll.y - scroll.y;
        // cancel click/tap if scroll is too much
        if (Math.abs(scrollMoveX) > 3 || Math.abs(scrollMoveY) > 3) this._pointerDone();
    };
    // ----- utils ----- //
    function getScrollPosition() {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        };
    }
    // -----  ----- //
    return Flickity;
});

},{"./flickity":"3JGpB","unidragger":"2pvTw","fizzy-ui-utils":"uuU9V"}],"2pvTw":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'unipointer/unipointer'
    ], function(Unipointer) {
        return factory(window, Unipointer);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('unipointer'));
    else // browser global
    window.Unidragger = factory(window, window.Unipointer);
})(window, function factory(window, Unipointer) {
    'use strict';
    // -------------------------- Unidragger -------------------------- //
    function Unidragger() {
    }
    // inherit Unipointer & EvEmitter
    var proto = Unidragger.prototype = Object.create(Unipointer.prototype);
    // ----- bind start ----- //
    proto.bindHandles = function() {
        this._bindHandles(true);
    };
    proto.unbindHandles = function() {
        this._bindHandles(false);
    };
    /**
 * Add or remove start event
 * @param {Boolean} isAdd
 */ proto._bindHandles = function(isAdd) {
        // munge isAdd, default to true
        isAdd = isAdd === undefined ? true : isAdd;
        // bind each handle
        var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
        var touchAction = isAdd ? this._touchActionValue : '';
        for(var i = 0; i < this.handles.length; i++){
            var handle = this.handles[i];
            this._bindStartEvent(handle, isAdd);
            handle[bindMethod]('click', this);
            // touch-action: none to override browser touch gestures. metafizzy/flickity#540
            if (window.PointerEvent) handle.style.touchAction = touchAction;
        }
    };
    // prototype so it can be overwriteable by Flickity
    proto._touchActionValue = 'none';
    // ----- start event ----- //
    /**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerDown = function(event, pointer) {
        var isOkay = this.okayPointerDown(event);
        if (!isOkay) return;
        // track start event position
        // Safari 9 overrides pageX and pageY. These values needs to be copied. flickity#842
        this.pointerDownPointer = {
            pageX: pointer.pageX,
            pageY: pointer.pageY
        };
        event.preventDefault();
        this.pointerDownBlur();
        // bind move and end events
        this._bindPostStartEvents(event);
        this.emitEvent('pointerDown', [
            event,
            pointer
        ]);
    };
    // nodes that have text fields
    var cursorNodes = {
        TEXTAREA: true,
        INPUT: true,
        SELECT: true,
        OPTION: true
    };
    // input types that do not have text fields
    var clickTypes = {
        radio: true,
        checkbox: true,
        button: true,
        submit: true,
        image: true,
        file: true
    };
    // dismiss inputs with text fields. flickity#403, flickity#404
    proto.okayPointerDown = function(event) {
        var isCursorNode = cursorNodes[event.target.nodeName];
        var isClickType = clickTypes[event.target.type];
        var isOkay = !isCursorNode || isClickType;
        if (!isOkay) this._pointerReset();
        return isOkay;
    };
    // kludge to blur previously focused input
    proto.pointerDownBlur = function() {
        var focused = document.activeElement;
        // do not blur body for IE10, metafizzy/flickity#117
        var canBlur = focused && focused.blur && focused != document.body;
        if (canBlur) focused.blur();
    };
    // ----- move event ----- //
    /**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerMove = function(event, pointer) {
        var moveVector = this._dragPointerMove(event, pointer);
        this.emitEvent('pointerMove', [
            event,
            pointer,
            moveVector
        ]);
        this._dragMove(event, pointer, moveVector);
    };
    // base pointer move logic
    proto._dragPointerMove = function(event, pointer) {
        var moveVector = {
            x: pointer.pageX - this.pointerDownPointer.pageX,
            y: pointer.pageY - this.pointerDownPointer.pageY
        };
        // start drag if pointer has moved far enough to start drag
        if (!this.isDragging && this.hasDragStarted(moveVector)) this._dragStart(event, pointer);
        return moveVector;
    };
    // condition if pointer has moved far enough to start drag
    proto.hasDragStarted = function(moveVector) {
        return Math.abs(moveVector.x) > 3 || Math.abs(moveVector.y) > 3;
    };
    // ----- end event ----- //
    /**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto.pointerUp = function(event, pointer) {
        this.emitEvent('pointerUp', [
            event,
            pointer
        ]);
        this._dragPointerUp(event, pointer);
    };
    proto._dragPointerUp = function(event, pointer) {
        if (this.isDragging) this._dragEnd(event, pointer);
        else // pointer didn't move enough for drag to start
        this._staticClick(event, pointer);
    };
    // -------------------------- drag -------------------------- //
    // dragStart
    proto._dragStart = function(event, pointer) {
        this.isDragging = true;
        // prevent clicks
        this.isPreventingClicks = true;
        this.dragStart(event, pointer);
    };
    proto.dragStart = function(event, pointer) {
        this.emitEvent('dragStart', [
            event,
            pointer
        ]);
    };
    // dragMove
    proto._dragMove = function(event, pointer, moveVector) {
        // do not drag if not dragging yet
        if (!this.isDragging) return;
        this.dragMove(event, pointer, moveVector);
    };
    proto.dragMove = function(event, pointer, moveVector) {
        event.preventDefault();
        this.emitEvent('dragMove', [
            event,
            pointer,
            moveVector
        ]);
    };
    // dragEnd
    proto._dragEnd = function(event, pointer) {
        // set flags
        this.isDragging = false;
        // re-enable clicking async
        setTimeout((function() {
            delete this.isPreventingClicks;
        }).bind(this));
        this.dragEnd(event, pointer);
    };
    proto.dragEnd = function(event, pointer) {
        this.emitEvent('dragEnd', [
            event,
            pointer
        ]);
    };
    // ----- onclick ----- //
    // handle all clicks and prevent clicks when dragging
    proto.onclick = function(event) {
        if (this.isPreventingClicks) event.preventDefault();
    };
    // ----- staticClick ----- //
    // triggered after pointer down & up with no/tiny movement
    proto._staticClick = function(event, pointer) {
        // ignore emulated mouse up clicks
        if (this.isIgnoringMouseUp && event.type == 'mouseup') return;
        this.staticClick(event, pointer);
        // set flag for emulated clicks 300ms after touchend
        if (event.type != 'mouseup') {
            this.isIgnoringMouseUp = true;
            // reset flag after 300ms
            setTimeout((function() {
                delete this.isIgnoringMouseUp;
            }).bind(this), 400);
        }
    };
    proto.staticClick = function(event, pointer) {
        this.emitEvent('staticClick', [
            event,
            pointer
        ]);
    };
    // ----- utils ----- //
    Unidragger.getPointerPoint = Unipointer.getPointerPoint;
    // -----  ----- //
    return Unidragger;
});

},{"unipointer":"6T2qm"}],"6T2qm":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    /* jshint strict: false */ /*global define, module, require */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'ev-emitter/ev-emitter'
    ], function(EvEmitter) {
        return factory(window, EvEmitter);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('ev-emitter'));
    else // browser global
    window.Unipointer = factory(window, window.EvEmitter);
})(window, function factory(window, EvEmitter) {
    'use strict';
    function noop() {
    }
    function Unipointer() {
    }
    // inherit EvEmitter
    var proto = Unipointer.prototype = Object.create(EvEmitter.prototype);
    proto.bindStartEvent = function(elem) {
        this._bindStartEvent(elem, true);
    };
    proto.unbindStartEvent = function(elem) {
        this._bindStartEvent(elem, false);
    };
    /**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */ proto._bindStartEvent = function(elem, isAdd) {
        // munge isAdd, default to true
        isAdd = isAdd === undefined ? true : isAdd;
        var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
        // default to mouse events
        var startEvent = 'mousedown';
        if (window.PointerEvent) // Pointer Events
        startEvent = 'pointerdown';
        else if ('ontouchstart' in window) // Touch Events. iOS Safari
        startEvent = 'touchstart';
        elem[bindMethod](startEvent, this);
    };
    // trigger handler methods for events
    proto.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) this[method](event);
    };
    // returns the touch that we're keeping track of
    proto.getTouch = function(touches) {
        for(var i = 0; i < touches.length; i++){
            var touch = touches[i];
            if (touch.identifier == this.pointerIdentifier) return touch;
        }
    };
    // ----- start event ----- //
    proto.onmousedown = function(event) {
        // dismiss clicks from right or middle buttons
        var button = event.button;
        if (button && button !== 0 && button !== 1) return;
        this._pointerDown(event, event);
    };
    proto.ontouchstart = function(event) {
        this._pointerDown(event, event.changedTouches[0]);
    };
    proto.onpointerdown = function(event) {
        this._pointerDown(event, event);
    };
    /**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */ proto._pointerDown = function(event, pointer) {
        // dismiss right click and other pointers
        // button = 0 is okay, 1-4 not
        if (event.button || this.isPointerDown) return;
        this.isPointerDown = true;
        // save pointer identifier to match up touch events
        this.pointerIdentifier = pointer.pointerId !== undefined ? // pointerId for pointer events, touch.indentifier for touch events
        pointer.pointerId : pointer.identifier;
        this.pointerDown(event, pointer);
    };
    proto.pointerDown = function(event, pointer) {
        this._bindPostStartEvents(event);
        this.emitEvent('pointerDown', [
            event,
            pointer
        ]);
    };
    // hash of events to be bound after start event
    var postStartEvents = {
        mousedown: [
            'mousemove',
            'mouseup'
        ],
        touchstart: [
            'touchmove',
            'touchend',
            'touchcancel'
        ],
        pointerdown: [
            'pointermove',
            'pointerup',
            'pointercancel'
        ]
    };
    proto._bindPostStartEvents = function(event) {
        if (!event) return;
        // get proper events to match start event
        var events = postStartEvents[event.type];
        // bind events to node
        events.forEach(function(eventName) {
            window.addEventListener(eventName, this);
        }, this);
        // save these arguments
        this._boundPointerEvents = events;
    };
    proto._unbindPostStartEvents = function() {
        // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
        if (!this._boundPointerEvents) return;
        this._boundPointerEvents.forEach(function(eventName) {
            window.removeEventListener(eventName, this);
        }, this);
        delete this._boundPointerEvents;
    };
    // ----- move event ----- //
    proto.onmousemove = function(event) {
        this._pointerMove(event, event);
    };
    proto.onpointermove = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerMove(event, event);
    };
    proto.ontouchmove = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerMove(event, touch);
    };
    /**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerMove = function(event, pointer) {
        this.pointerMove(event, pointer);
    };
    // public
    proto.pointerMove = function(event, pointer) {
        this.emitEvent('pointerMove', [
            event,
            pointer
        ]);
    };
    // ----- end event ----- //
    proto.onmouseup = function(event) {
        this._pointerUp(event, event);
    };
    proto.onpointerup = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerUp(event, event);
    };
    proto.ontouchend = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerUp(event, touch);
    };
    /**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerUp = function(event, pointer) {
        this._pointerDone();
        this.pointerUp(event, pointer);
    };
    // public
    proto.pointerUp = function(event, pointer) {
        this.emitEvent('pointerUp', [
            event,
            pointer
        ]);
    };
    // ----- pointer done ----- //
    // triggered on pointer up & pointer cancel
    proto._pointerDone = function() {
        this._pointerReset();
        this._unbindPostStartEvents();
        this.pointerDone();
    };
    proto._pointerReset = function() {
        // reset properties
        this.isPointerDown = false;
        delete this.pointerIdentifier;
    };
    proto.pointerDone = noop;
    // ----- pointer cancel ----- //
    proto.onpointercancel = function(event) {
        if (event.pointerId == this.pointerIdentifier) this._pointerCancel(event, event);
    };
    proto.ontouchcancel = function(event) {
        var touch = this.getTouch(event.changedTouches);
        if (touch) this._pointerCancel(event, touch);
    };
    /**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */ proto._pointerCancel = function(event, pointer) {
        this._pointerDone();
        this.pointerCancel(event, pointer);
    };
    // public
    proto.pointerCancel = function(event, pointer) {
        this.emitEvent('pointerCancel', [
            event,
            pointer
        ]);
    };
    // -----  ----- //
    // utility function for getting x/y coords from event
    Unipointer.getPointerPoint = function(pointer) {
        return {
            x: pointer.pageX,
            y: pointer.pageY
        };
    };
    // -----  ----- //
    return Unipointer;
});

},{"ev-emitter":"7dAvB"}],"5g8Jz":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'unipointer/unipointer',
        'fizzy-ui-utils/utils', 
    ], function(Flickity, Unipointer, utils) {
        return factory(window, Flickity, Unipointer, utils);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('./flickity'), require('unipointer'), require('fizzy-ui-utils'));
    else // browser global
    factory(window, window.Flickity, window.Unipointer, window.fizzyUIUtils);
})(window, function factory(window, Flickity, Unipointer, utils) {
    'use strict';
    var svgURI = 'http://www.w3.org/2000/svg';
    // -------------------------- PrevNextButton -------------------------- //
    function PrevNextButton(direction, parent) {
        this.direction = direction;
        this.parent = parent;
        this._create();
    }
    PrevNextButton.prototype = Object.create(Unipointer.prototype);
    PrevNextButton.prototype._create = function() {
        // properties
        this.isEnabled = true;
        this.isPrevious = this.direction == -1;
        var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == leftDirection;
        var element = this.element = document.createElement('button');
        element.className = 'flickity-button flickity-prev-next-button';
        element.className += this.isPrevious ? ' previous' : ' next';
        // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
        element.setAttribute('type', 'button');
        // init as disabled
        this.disable();
        element.setAttribute('aria-label', this.isPrevious ? 'Previous' : 'Next');
        // create arrow
        var svg = this.createSVG();
        element.appendChild(svg);
        // events
        this.parent.on('select', this.update.bind(this));
        this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
    };
    PrevNextButton.prototype.activate = function() {
        this.bindStartEvent(this.element);
        this.element.addEventListener('click', this);
        // add to DOM
        this.parent.element.appendChild(this.element);
    };
    PrevNextButton.prototype.deactivate = function() {
        // remove from DOM
        this.parent.element.removeChild(this.element);
        // click events
        this.unbindStartEvent(this.element);
        this.element.removeEventListener('click', this);
    };
    PrevNextButton.prototype.createSVG = function() {
        var svg = document.createElementNS(svgURI, 'svg');
        svg.setAttribute('class', 'flickity-button-icon');
        svg.setAttribute('viewBox', '0 0 100 100');
        var path = document.createElementNS(svgURI, 'path');
        var pathMovements = getArrowMovements(this.parent.options.arrowShape);
        path.setAttribute('d', pathMovements);
        path.setAttribute('class', 'arrow');
        // rotate arrow
        if (!this.isLeft) path.setAttribute('transform', 'translate(100, 100) rotate(180) ');
        svg.appendChild(path);
        return svg;
    };
    // get SVG path movmement
    function getArrowMovements(shape) {
        // use shape as movement if string
        if (typeof shape == 'string') return shape;
        // create movement string
        return 'M ' + shape.x0 + ',50' + ' L ' + shape.x1 + ',' + (shape.y1 + 50) + ' L ' + shape.x2 + ',' + (shape.y2 + 50) + ' L ' + shape.x3 + ',50 ' + ' L ' + shape.x2 + ',' + (50 - shape.y2) + ' L ' + shape.x1 + ',' + (50 - shape.y1) + ' Z';
    }
    PrevNextButton.prototype.handleEvent = utils.handleEvent;
    PrevNextButton.prototype.onclick = function() {
        if (!this.isEnabled) return;
        this.parent.uiChange();
        var method = this.isPrevious ? 'previous' : 'next';
        this.parent[method]();
    };
    // -----  ----- //
    PrevNextButton.prototype.enable = function() {
        if (this.isEnabled) return;
        this.element.disabled = false;
        this.isEnabled = true;
    };
    PrevNextButton.prototype.disable = function() {
        if (!this.isEnabled) return;
        this.element.disabled = true;
        this.isEnabled = false;
    };
    PrevNextButton.prototype.update = function() {
        // index of first or last slide, if previous or next
        var slides = this.parent.slides;
        // enable is wrapAround and at least 2 slides
        if (this.parent.options.wrapAround && slides.length > 1) {
            this.enable();
            return;
        }
        var lastIndex = slides.length ? slides.length - 1 : 0;
        var boundIndex = this.isPrevious ? 0 : lastIndex;
        var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
        this[method]();
    };
    PrevNextButton.prototype.destroy = function() {
        this.deactivate();
        this.allOff();
    };
    // -------------------------- Flickity prototype -------------------------- //
    utils.extend(Flickity.defaults, {
        prevNextButtons: true,
        arrowShape: {
            x0: 10,
            x1: 60,
            y1: 50,
            x2: 70,
            y2: 40,
            x3: 30
        }
    });
    Flickity.createMethods.push('_createPrevNextButtons');
    var proto = Flickity.prototype;
    proto._createPrevNextButtons = function() {
        if (!this.options.prevNextButtons) return;
        this.prevButton = new PrevNextButton(-1, this);
        this.nextButton = new PrevNextButton(1, this);
        this.on('activate', this.activatePrevNextButtons);
    };
    proto.activatePrevNextButtons = function() {
        this.prevButton.activate();
        this.nextButton.activate();
        this.on('deactivate', this.deactivatePrevNextButtons);
    };
    proto.deactivatePrevNextButtons = function() {
        this.prevButton.deactivate();
        this.nextButton.deactivate();
        this.off('deactivate', this.deactivatePrevNextButtons);
    };
    // --------------------------  -------------------------- //
    Flickity.PrevNextButton = PrevNextButton;
    return Flickity;
});

},{"./flickity":"3JGpB","unipointer":"6T2qm","fizzy-ui-utils":"uuU9V"}],"Ic7MB":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'unipointer/unipointer',
        'fizzy-ui-utils/utils', 
    ], function(Flickity, Unipointer, utils) {
        return factory(window, Flickity, Unipointer, utils);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('./flickity'), require('unipointer'), require('fizzy-ui-utils'));
    else // browser global
    factory(window, window.Flickity, window.Unipointer, window.fizzyUIUtils);
})(window, function factory(window, Flickity, Unipointer, utils) {
    // -------------------------- PageDots -------------------------- //
    'use strict';
    function PageDots(parent) {
        this.parent = parent;
        this._create();
    }
    PageDots.prototype = Object.create(Unipointer.prototype);
    PageDots.prototype._create = function() {
        // create holder element
        this.holder = document.createElement('ol');
        this.holder.className = 'flickity-page-dots';
        // create dots, array of elements
        this.dots = [];
        // events
        this.handleClick = this.onClick.bind(this);
        this.on('pointerDown', this.parent.childUIPointerDown.bind(this.parent));
    };
    PageDots.prototype.activate = function() {
        this.setDots();
        this.holder.addEventListener('click', this.handleClick);
        this.bindStartEvent(this.holder);
        // add to DOM
        this.parent.element.appendChild(this.holder);
    };
    PageDots.prototype.deactivate = function() {
        this.holder.removeEventListener('click', this.handleClick);
        this.unbindStartEvent(this.holder);
        // remove from DOM
        this.parent.element.removeChild(this.holder);
    };
    PageDots.prototype.setDots = function() {
        // get difference between number of slides and number of dots
        var delta = this.parent.slides.length - this.dots.length;
        if (delta > 0) this.addDots(delta);
        else if (delta < 0) this.removeDots(-delta);
    };
    PageDots.prototype.addDots = function(count) {
        var fragment = document.createDocumentFragment();
        var newDots = [];
        var length = this.dots.length;
        var max = length + count;
        for(var i = length; i < max; i++){
            var dot = document.createElement('li');
            dot.className = 'dot';
            dot.setAttribute('aria-label', 'Page dot ' + (i + 1));
            fragment.appendChild(dot);
            newDots.push(dot);
        }
        this.holder.appendChild(fragment);
        this.dots = this.dots.concat(newDots);
    };
    PageDots.prototype.removeDots = function(count) {
        // remove from this.dots collection
        var removeDots = this.dots.splice(this.dots.length - count, count);
        // remove from DOM
        removeDots.forEach(function(dot) {
            this.holder.removeChild(dot);
        }, this);
    };
    PageDots.prototype.updateSelected = function() {
        // remove selected class on previous
        if (this.selectedDot) {
            this.selectedDot.className = 'dot';
            this.selectedDot.removeAttribute('aria-current');
        }
        // don't proceed if no dots
        if (!this.dots.length) return;
        this.selectedDot = this.dots[this.parent.selectedIndex];
        this.selectedDot.className = 'dot is-selected';
        this.selectedDot.setAttribute('aria-current', 'step');
    };
    PageDots.prototype.onTap = PageDots.prototype.onClick = function(event) {
        var target = event.target;
        // only care about dot clicks
        if (target.nodeName != 'LI') return;
        this.parent.uiChange();
        var index = this.dots.indexOf(target);
        this.parent.select(index);
    };
    PageDots.prototype.destroy = function() {
        this.deactivate();
        this.allOff();
    };
    Flickity.PageDots = PageDots;
    // -------------------------- Flickity -------------------------- //
    utils.extend(Flickity.defaults, {
        pageDots: true
    });
    Flickity.createMethods.push('_createPageDots');
    var proto = Flickity.prototype;
    proto._createPageDots = function() {
        if (!this.options.pageDots) return;
        this.pageDots = new PageDots(this);
        // events
        this.on('activate', this.activatePageDots);
        this.on('select', this.updateSelectedPageDots);
        this.on('cellChange', this.updatePageDots);
        this.on('resize', this.updatePageDots);
        this.on('deactivate', this.deactivatePageDots);
    };
    proto.activatePageDots = function() {
        this.pageDots.activate();
    };
    proto.updateSelectedPageDots = function() {
        this.pageDots.updateSelected();
    };
    proto.updatePageDots = function() {
        this.pageDots.setDots();
    };
    proto.deactivatePageDots = function() {
        this.pageDots.deactivate();
    };
    // -----  ----- //
    Flickity.PageDots = PageDots;
    return Flickity;
});

},{"./flickity":"3JGpB","unipointer":"6T2qm","fizzy-ui-utils":"uuU9V"}],"5ecra":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        'ev-emitter/ev-emitter',
        'fizzy-ui-utils/utils',
        './flickity', 
    ], function(EvEmitter, utils, Flickity) {
        return factory(EvEmitter, utils, Flickity);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(require('ev-emitter'), require('fizzy-ui-utils'), require('./flickity'));
    else // browser global
    factory(window.EvEmitter, window.fizzyUIUtils, window.Flickity);
})(window, function factory(EvEmitter, utils, Flickity) {
    'use strict';
    // -------------------------- Player -------------------------- //
    function Player(parent) {
        this.parent = parent;
        this.state = 'stopped';
        // visibility change event handler
        this.onVisibilityChange = this.visibilityChange.bind(this);
        this.onVisibilityPlay = this.visibilityPlay.bind(this);
    }
    Player.prototype = Object.create(EvEmitter.prototype);
    // start play
    Player.prototype.play = function() {
        if (this.state == 'playing') return;
        // do not play if page is hidden, start playing when page is visible
        var isPageHidden = document.hidden;
        if (isPageHidden) {
            document.addEventListener('visibilitychange', this.onVisibilityPlay);
            return;
        }
        this.state = 'playing';
        // listen to visibility change
        document.addEventListener('visibilitychange', this.onVisibilityChange);
        // start ticking
        this.tick();
    };
    Player.prototype.tick = function() {
        // do not tick if not playing
        if (this.state != 'playing') return;
        var time = this.parent.options.autoPlay;
        // default to 3 seconds
        time = typeof time == 'number' ? time : 3000;
        var _this = this;
        // HACK: reset ticks if stopped and started within interval
        this.clear();
        this.timeout = setTimeout(function() {
            _this.parent.next(true);
            _this.tick();
        }, time);
    };
    Player.prototype.stop = function() {
        this.state = 'stopped';
        this.clear();
        // remove visibility change event
        document.removeEventListener('visibilitychange', this.onVisibilityChange);
    };
    Player.prototype.clear = function() {
        clearTimeout(this.timeout);
    };
    Player.prototype.pause = function() {
        if (this.state == 'playing') {
            this.state = 'paused';
            this.clear();
        }
    };
    Player.prototype.unpause = function() {
        // re-start play if paused
        if (this.state == 'paused') this.play();
    };
    // pause if page visibility is hidden, unpause if visible
    Player.prototype.visibilityChange = function() {
        var isPageHidden = document.hidden;
        this[isPageHidden ? 'pause' : 'unpause']();
    };
    Player.prototype.visibilityPlay = function() {
        this.play();
        document.removeEventListener('visibilitychange', this.onVisibilityPlay);
    };
    // -------------------------- Flickity -------------------------- //
    utils.extend(Flickity.defaults, {
        pauseAutoPlayOnHover: true
    });
    Flickity.createMethods.push('_createPlayer');
    var proto = Flickity.prototype;
    proto._createPlayer = function() {
        this.player = new Player(this);
        this.on('activate', this.activatePlayer);
        this.on('uiChange', this.stopPlayer);
        this.on('pointerDown', this.stopPlayer);
        this.on('deactivate', this.deactivatePlayer);
    };
    proto.activatePlayer = function() {
        if (!this.options.autoPlay) return;
        this.player.play();
        this.element.addEventListener('mouseenter', this);
    };
    // Player API, don't hate the ... thanks I know where the door is
    proto.playPlayer = function() {
        this.player.play();
    };
    proto.stopPlayer = function() {
        this.player.stop();
    };
    proto.pausePlayer = function() {
        this.player.pause();
    };
    proto.unpausePlayer = function() {
        this.player.unpause();
    };
    proto.deactivatePlayer = function() {
        this.player.stop();
        this.element.removeEventListener('mouseenter', this);
    };
    // ----- mouseenter/leave ----- //
    // pause auto-play on hover
    proto.onmouseenter = function() {
        if (!this.options.pauseAutoPlayOnHover) return;
        this.player.pause();
        this.element.addEventListener('mouseleave', this);
    };
    // resume auto-play on hover off
    proto.onmouseleave = function() {
        this.player.unpause();
        this.element.removeEventListener('mouseleave', this);
    };
    // -----  ----- //
    Flickity.Player = Player;
    return Flickity;
});

},{"ev-emitter":"7dAvB","fizzy-ui-utils":"uuU9V","./flickity":"3JGpB"}],"4Aohn":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'fizzy-ui-utils/utils', 
    ], function(Flickity, utils) {
        return factory(window, Flickity, utils);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('./flickity'), require('fizzy-ui-utils'));
    else // browser global
    factory(window, window.Flickity, window.fizzyUIUtils);
})(window, function factory(window, Flickity, utils) {
    'use strict';
    // append cells to a document fragment
    function getCellsFragment(cells) {
        var fragment = document.createDocumentFragment();
        cells.forEach(function(cell) {
            fragment.appendChild(cell.element);
        });
        return fragment;
    }
    // -------------------------- add/remove cell prototype -------------------------- //
    var proto = Flickity.prototype;
    /**
 * Insert, prepend, or append cells
 * @param {[Element, Array, NodeList]} elems - Elements to insert
 * @param {Integer} index - Zero-based number to insert
 */ proto.insert = function(elems, index) {
        var cells = this._makeCells(elems);
        if (!cells || !cells.length) return;
        var len = this.cells.length;
        // default to append
        index = index === undefined ? len : index;
        // add cells with document fragment
        var fragment = getCellsFragment(cells);
        // append to slider
        var isAppend = index == len;
        if (isAppend) this.slider.appendChild(fragment);
        else {
            var insertCellElement = this.cells[index].element;
            this.slider.insertBefore(fragment, insertCellElement);
        }
        // add to this.cells
        if (index === 0) // prepend, add to start
        this.cells = cells.concat(this.cells);
        else if (isAppend) // append, add to end
        this.cells = this.cells.concat(cells);
        else {
            // insert in this.cells
            var endCells = this.cells.splice(index, len - index);
            this.cells = this.cells.concat(cells).concat(endCells);
        }
        this._sizeCells(cells);
        this.cellChange(index, true);
    };
    proto.append = function(elems) {
        this.insert(elems, this.cells.length);
    };
    proto.prepend = function(elems) {
        this.insert(elems, 0);
    };
    /**
 * Remove cells
 * @param {[Element, Array, NodeList]} elems - ELements to remove
 */ proto.remove = function(elems) {
        var cells = this.getCells(elems);
        if (!cells || !cells.length) return;
        var minCellIndex = this.cells.length - 1;
        // remove cells from collection & DOM
        cells.forEach(function(cell) {
            cell.remove();
            var index = this.cells.indexOf(cell);
            minCellIndex = Math.min(index, minCellIndex);
            utils.removeFrom(this.cells, cell);
        }, this);
        this.cellChange(minCellIndex, true);
    };
    /**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */ proto.cellSizeChange = function(elem) {
        var cell = this.getCell(elem);
        if (!cell) return;
        cell.getSize();
        var index = this.cells.indexOf(cell);
        this.cellChange(index);
    };
    /**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 * @param {Boolean} isPositioningSlider - Positions slider after selection
 */ proto.cellChange = function(changedCellIndex, isPositioningSlider) {
        var prevSelectedElem = this.selectedElement;
        this._positionCells(changedCellIndex);
        this._getWrapShiftCells();
        this.setGallerySize();
        // update selectedIndex
        // try to maintain position & select previous selected element
        var cell = this.getCell(prevSelectedElem);
        if (cell) this.selectedIndex = this.getCellSlideIndex(cell);
        this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex);
        this.emitEvent('cellChange', [
            changedCellIndex
        ]);
        // position slider
        this.select(this.selectedIndex);
        // do not position slider after lazy load
        if (isPositioningSlider) this.positionSliderAtSelected();
    };
    // -----  ----- //
    return Flickity;
});

},{"./flickity":"3JGpB","fizzy-ui-utils":"uuU9V"}],"2khbt":[function(require,module,exports) {
(function(window, factory) {
    // universal module definition
    if (typeof define == 'function' && define.amd) // AMD
    define([
        './flickity',
        'fizzy-ui-utils/utils', 
    ], function(Flickity, utils) {
        return factory(window, Flickity, utils);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('./flickity'), require('fizzy-ui-utils'));
    else // browser global
    factory(window, window.Flickity, window.fizzyUIUtils);
})(window, function factory(window, Flickity, utils) {
    'use strict';
    Flickity.createMethods.push('_createLazyload');
    var proto = Flickity.prototype;
    proto._createLazyload = function() {
        this.on('select', this.lazyLoad);
    };
    proto.lazyLoad = function() {
        var lazyLoad = this.options.lazyLoad;
        if (!lazyLoad) return;
        // get adjacent cells, use lazyLoad option for adjacent count
        var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
        var cellElems = this.getAdjacentCellElements(adjCount);
        // get lazy images in those cells
        var lazyImages = [];
        cellElems.forEach(function(cellElem) {
            var lazyCellImages = getCellLazyImages(cellElem);
            lazyImages = lazyImages.concat(lazyCellImages);
        });
        // load lazy images
        lazyImages.forEach(function(img) {
            new LazyLoader(img, this);
        }, this);
    };
    function getCellLazyImages(cellElem) {
        // check if cell element is lazy image
        if (cellElem.nodeName == 'IMG') {
            var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
            var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
            var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
            if (lazyloadAttr || srcAttr || srcsetAttr) return [
                cellElem
            ];
        }
        // select lazy images in cell
        var lazySelector = "img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]";
        var imgs = cellElem.querySelectorAll(lazySelector);
        return utils.makeArray(imgs);
    }
    // -------------------------- LazyLoader -------------------------- //
    /**
 * class to handle loading images
 * @param {Image} img - Image element
 * @param {Flickity} flickity - Flickity instance
 */ function LazyLoader(img, flickity) {
        this.img = img;
        this.flickity = flickity;
        this.load();
    }
    LazyLoader.prototype.handleEvent = utils.handleEvent;
    LazyLoader.prototype.load = function() {
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        // get src & srcset
        var src = this.img.getAttribute('data-flickity-lazyload') || this.img.getAttribute('data-flickity-lazyload-src');
        var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
        // set src & serset
        this.img.src = src;
        if (srcset) this.img.setAttribute('srcset', srcset);
        // remove attr
        this.img.removeAttribute('data-flickity-lazyload');
        this.img.removeAttribute('data-flickity-lazyload-src');
        this.img.removeAttribute('data-flickity-lazyload-srcset');
    };
    LazyLoader.prototype.onload = function(event) {
        this.complete(event, 'flickity-lazyloaded');
    };
    LazyLoader.prototype.onerror = function(event) {
        this.complete(event, 'flickity-lazyerror');
    };
    LazyLoader.prototype.complete = function(event, className) {
        // unbind events
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
        var cell = this.flickity.getParentCell(this.img);
        var cellElem = cell && cell.element;
        this.flickity.cellSizeChange(cellElem);
        this.img.classList.add(className);
        this.flickity.dispatchEvent('lazyLoad', event, cellElem);
    };
    // -----  ----- //
    Flickity.LazyLoader = LazyLoader;
    return Flickity;
});

},{"./flickity":"3JGpB","fizzy-ui-utils":"uuU9V"}],"2j3p3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _toastr = require("toastr");
var _toastrDefault = parcelHelpers.interopDefault(_toastr);
function notify() {
    _toastrDefault.default.options = {
        "closeButton": true,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": true,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
    let message = document.querySelectorAll('.flashes');
    message.forEach((item)=>{
        let type = item.dataset.errorType;
        _toastrDefault.default[type](item.innerText, type.charAt(0).toUpperCase() + type.slice(1));
    });
}
exports.default = notify;

},{"toastr":"lZCMr","@parcel/transformer-js/src/esmodule-helpers.js":"73PPo"}],"lZCMr":[function(require,module,exports) {
(function(define) {
    define([
        'jquery'
    ], function($) {
        return (function() {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
            };
            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {
                },
                subscribe: subscribe,
                success: success,
                version: '2.1.4',
                warning: warning
            };
            var previousToast;
            ////////////////
            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }
            function getContainer(options, create) {
                if (!options) {
                    options = getOptions();
                }
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
                }
                if (create) {
                    $container = createContainer(options);
                }
                return $container;
            }
            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }
            function subscribe(callback) {
                listener = callback;
            }
            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }
            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
                });
            }
            function clear($toastElement, clearOptions) {
                var options = getOptions();
                if (!$container) {
                    getContainer(options);
                }
                if (!clearToast($toastElement, options, clearOptions)) {
                    clearContainer(options);
                }
            }
            function remove($toastElement) {
                var options = getOptions();
                if (!$container) {
                    getContainer(options);
                }
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
                }
                if ($container.children().length) {
                    $container.remove();
                }
            }
            // internal functions
            function clearContainer(options) {
                var toastsToClear = $container.children();
                for(var i = toastsToClear.length - 1; i >= 0; i--){
                    clearToast($(toastsToClear[i]), options);
                }
            }
            function clearToast($toastElement, options, clearOptions) {
                var force = clearOptions && clearOptions.force ? clearOptions.force : false;
                if ($toastElement && (force || $(':focus', $toastElement).length === 0)) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function() {
                            removeToast($toastElement);
                        }
                    });
                    return true;
                }
                return false;
            }
            function createContainer(options) {
                $container = $('<div/>').attr('id', options.containerId).addClass(options.positionClass);
                $container.appendTo($(options.target));
                return $container;
            }
            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,
                    showMethod: 'fadeIn',
                    showDuration: 300,
                    showEasing: 'swing',
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,
                    closeMethod: false,
                    closeDuration: false,
                    closeEasing: false,
                    closeOnHover: true,
                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                    },
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000,
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    escapeHtml: false,
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: 'toast-close-button',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false,
                    progressClass: 'toast-progress',
                    rtl: false
                };
            }
            function publish(args) {
                if (!listener) {
                    return;
                }
                listener(args);
            }
            function notify(map) {
                var options = getOptions();
                var iconClass = map.iconClass || options.iconClass;
                if (typeof map.optionsOverride !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
                }
                if (shouldExit(options, map)) {
                    return;
                }
                toastId++;
                $container = getContainer(options, true);
                var intervalId = null;
                var $toastElement = $('<div/>');
                var $titleElement = $('<div/>');
                var $messageElement = $('<div/>');
                var $progressElement = $('<div/>');
                var $closeElement = $(options.closeHtml);
                var progressBar = {
                    intervalId: null,
                    hideEta: null,
                    maxHideTime: null
                };
                var response = {
                    toastId: toastId,
                    state: 'visible',
                    startTime: new Date(),
                    options: options,
                    map: map
                };
                personalizeToast();
                displayToast();
                handleEvents();
                publish(response);
                if (options.debug && console) {
                    console.log(response);
                }
                return $toastElement;
                function escapeHtml(source) {
                    if (source == null) {
                        source = '';
                    }
                    return source.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                }
                function personalizeToast() {
                    setIcon();
                    setTitle();
                    setMessage();
                    setCloseButton();
                    setProgressBar();
                    setRTL();
                    setSequence();
                    setAria();
                }
                function setAria() {
                    var ariaValue = '';
                    switch(map.iconClass){
                        case 'toast-success':
                        case 'toast-info':
                            ariaValue = 'polite';
                            break;
                        default:
                            ariaValue = 'assertive';
                    }
                    $toastElement.attr('aria-live', ariaValue);
                }
                function handleEvents() {
                    if (options.closeOnHover) {
                        $toastElement.hover(stickAround, delayedHideToast);
                    }
                    if (!options.onclick && options.tapToDismiss) {
                        $toastElement.click(hideToast);
                    }
                    if (options.closeButton && $closeElement) {
                        $closeElement.click(function(event) {
                            if (event.stopPropagation) {
                                event.stopPropagation();
                            } else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                                event.cancelBubble = true;
                            }
                            if (options.onCloseClick) {
                                options.onCloseClick(event);
                            }
                            hideToast(true);
                        });
                    }
                    if (options.onclick) {
                        $toastElement.click(function(event) {
                            options.onclick(event);
                            hideToast();
                        });
                    }
                }
                function displayToast() {
                    $toastElement.hide();
                    $toastElement[options.showMethod]({
                        duration: options.showDuration,
                        easing: options.showEasing,
                        complete: options.onShown
                    });
                    if (options.timeOut > 0) {
                        intervalId = setTimeout(hideToast, options.timeOut);
                        progressBar.maxHideTime = parseFloat(options.timeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                        if (options.progressBar) {
                            progressBar.intervalId = setInterval(updateProgress, 10);
                        }
                    }
                }
                function setIcon() {
                    if (map.iconClass) {
                        $toastElement.addClass(options.toastClass).addClass(iconClass);
                    }
                }
                function setSequence() {
                    if (options.newestOnTop) {
                        $container.prepend($toastElement);
                    } else {
                        $container.append($toastElement);
                    }
                }
                function setTitle() {
                    if (map.title) {
                        var suffix = map.title;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.title);
                        }
                        $titleElement.append(suffix).addClass(options.titleClass);
                        $toastElement.append($titleElement);
                    }
                }
                function setMessage() {
                    if (map.message) {
                        var suffix = map.message;
                        if (options.escapeHtml) {
                            suffix = escapeHtml(map.message);
                        }
                        $messageElement.append(suffix).addClass(options.messageClass);
                        $toastElement.append($messageElement);
                    }
                }
                function setCloseButton() {
                    if (options.closeButton) {
                        $closeElement.addClass(options.closeClass).attr('role', 'button');
                        $toastElement.prepend($closeElement);
                    }
                }
                function setProgressBar() {
                    if (options.progressBar) {
                        $progressElement.addClass(options.progressClass);
                        $toastElement.prepend($progressElement);
                    }
                }
                function setRTL() {
                    if (options.rtl) {
                        $toastElement.addClass('rtl');
                    }
                }
                function shouldExit(options1, map1) {
                    if (options1.preventDuplicates) {
                        if (map1.message === previousToast) {
                            return true;
                        } else {
                            previousToast = map1.message;
                        }
                    }
                    return false;
                }
                function hideToast(override) {
                    var method = override && options.closeMethod !== false ? options.closeMethod : options.hideMethod;
                    var duration = override && options.closeDuration !== false ? options.closeDuration : options.hideDuration;
                    var easing = override && options.closeEasing !== false ? options.closeEasing : options.hideEasing;
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                    }
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[method]({
                        duration: duration,
                        easing: easing,
                        complete: function() {
                            removeToast($toastElement);
                            clearTimeout(intervalId);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                            }
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                        }
                    });
                }
                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    }
                }
                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod]({
                        duration: options.showDuration,
                        easing: options.showEasing
                    });
                }
                function updateProgress() {
                    var percentage = (progressBar.hideEta - new Date().getTime()) / progressBar.maxHideTime * 100;
                    $progressElement.width(percentage + '%');
                }
            }
            function getOptions() {
                return $.extend({
                }, getDefaults(), toastr.options);
            }
            function removeToast($toastElement) {
                if (!$container) {
                    $container = getContainer();
                }
                if ($toastElement.is(':visible')) {
                    return;
                }
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
                }
            }
            return toastr;
        })();
    });
})(typeof define === 'function' && define.amd ? define : function(deps, factory) {
    if (typeof module !== 'undefined' && module.exports) module.exports = factory(require('jquery'));
    else window.toastr = factory(window.jQuery);
});

},{"jquery":"3RcXI"}],"3RcXI":[function(require,module,exports) {
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */ (function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") // For CommonJS and CommonJS-like environments where a proper `window`
    // is present, execute the factory and get jQuery.
    // For environments that do not have a `window` with a `document`
    // (such as Node.js), expose a factory as module.exports.
    // This accentuates the need for the creation of a real `window`.
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info.
    module.exports = global.document ? factory(global, true) : function(w) {
        if (!w.document) throw new Error("jQuery requires a window with a document");
        return factory(w);
    };
    else factory(global);
// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
    // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
    // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
    // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
    // enough that all such attempts are guarded in a try block.
    "use strict";
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
    } : function(array) {
        return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {
    };
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {
    };
    var isFunction = function isFunction1(obj) {
        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
        // Plus for old WebKit, typeof returns "function" for HTML collections
        // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow1(obj) {
        return obj != null && obj === obj.window;
    };
    var document = window.document;
    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };
    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("script");
        script.text = code;
        if (node) for(i in preservedScriptAttributes){
            // Support: Firefox 64+, Edge 18+
            // Some browsers don't support the "nonce" property on scripts.
            // On the other hand, just using `getAttribute` is not enough as
            // the `nonce` attribute is reset to an empty string whenever it
            // becomes browsing-context connected.
            // See https://github.com/whatwg/html/issues/2369
            // See https://html.spec.whatwg.org/#nonce-attributes
            // The `node.getAttribute` check was added for the sake of
            // `jQuery.globalEval` so that it can fake a nonce-containing node
            // via an object.
            val = node[i] || node.getAttribute && node.getAttribute(i);
            if (val) script.setAttribute(i, val);
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
        if (obj == null) return obj + "";
        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    /* global Symbol */ // Defining this global in .eslintrc.json would create a danger of using the global
    // unguarded in another place, it seems safer to define global only for this module
    var version = "3.6.0", // Define a local copy of jQuery
    jQuery = function(selector, context) {
        // The jQuery object is actually just the init constructor 'enhanced'
        // Need init if jQuery is called (just allow error to be thrown if not included)
        return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
        // The current version of jQuery being used
        jquery: version,
        constructor: jQuery,
        // The default length of a jQuery object is 0
        length: 0,
        toArray: function() {
            return slice.call(this);
        },
        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function(num) {
            // Return all the elements in a clean array
            if (num == null) return slice.call(this);
            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },
        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function(elems) {
            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);
            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;
            // Return the newly-formed element set
            return ret;
        },
        // Execute a callback for every element in the matched set.
        each: function(callback) {
            return jQuery.each(this, callback);
        },
        map: function(callback) {
            return this.pushStack(jQuery.map(this, function(elem, i) {
                return callback.call(elem, i, elem);
            }));
        },
        slice: function() {
            return this.pushStack(slice.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        even: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return (i + 1) % 2;
            }));
        },
        odd: function() {
            return this.pushStack(jQuery.grep(this, function(_elem, i) {
                return i % 2;
            }));
        },
        eq: function(i) {
            var len = this.length, j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [
                this[j]
            ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
        var options, name, src, copy, copyIsArray, clone, target = arguments[0] || {
        }, i = 1, length = arguments.length, deep = false;
        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;
            // Skip the boolean and the target
            target = arguments[i] || {
            };
            i++;
        }
        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) target = {
        };
        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }
        for(; i < length; i++){
            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) // Extend the base object
            for(name in options){
                copy = options[name];
                // Prevent Object.prototype pollution
                // Prevent never-ending loop
                if (name === "__proto__" || target === copy) continue;
                // Recurse if we're merging plain objects or arrays
                if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    src = target[name];
                    // Ensure proper type for the source value
                    if (copyIsArray && !Array.isArray(src)) clone = [];
                    else if (!copyIsArray && !jQuery.isPlainObject(src)) clone = {
                    };
                    else clone = src;
                    copyIsArray = false;
                    // Never move original objects, clone them
                    target[name] = jQuery.extend(deep, clone, copy);
                // Don't bring in undefined values
                } else if (copy !== undefined) target[name] = copy;
            }
        }
        // Return the modified object
        return target;
    };
    jQuery.extend({
        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        // Assume jQuery is ready without the ready module
        isReady: true,
        error: function(msg) {
            throw new Error(msg);
        },
        noop: function() {
        },
        isPlainObject: function(obj) {
            var proto, Ctor;
            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") return false;
            proto = getProto(obj);
            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) return true;
            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },
        isEmptyObject: function(obj) {
            var name;
            for(name in obj)return false;
            return true;
        },
        // Evaluates a script in a provided context; falls back to the global one
        // if not specified.
        globalEval: function(code, options, doc) {
            DOMEval(code, {
                nonce: options && options.nonce
            }, doc);
        },
        each: function(obj, callback) {
            var length, i = 0;
            if (isArrayLike(obj)) {
                length = obj.length;
                for(; i < length; i++){
                    if (callback.call(obj[i], i, obj[i]) === false) break;
                }
            } else for(i in obj){
                if (callback.call(obj[i], i, obj[i]) === false) break;
            }
            return obj;
        },
        // results is for internal usage only
        makeArray: function(arr1, results) {
            var ret = results || [];
            if (arr1 != null) {
                if (isArrayLike(Object(arr1))) jQuery.merge(ret, typeof arr1 === "string" ? [
                    arr1
                ] : arr1);
                else push.call(ret, arr1);
            }
            return ret;
        },
        inArray: function(elem, arr1, i) {
            return arr1 == null ? -1 : indexOf.call(arr1, elem, i);
        },
        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function(first, second) {
            var len = +second.length, j = 0, i = first.length;
            for(; j < len; j++)first[i++] = second[j];
            first.length = i;
            return first;
        },
        grep: function(elems, callback, invert) {
            var callbackInverse, matches = [], i = 0, length = elems.length, callbackExpect = !invert;
            // Go through the array, only saving the items
            // that pass the validator function
            for(; i < length; i++){
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) matches.push(elems[i]);
            }
            return matches;
        },
        // arg is for internal usage only
        map: function(elems, callback, arg) {
            var length, value, i = 0, ret = [];
            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for(; i < length; i++){
                    value = callback(elems[i], i, arg);
                    if (value != null) ret.push(value);
                }
            // Go through every key on the object,
            } else for(i in elems){
                value = callback(elems[i], i, arg);
                if (value != null) ret.push(value);
            }
            // Flatten any nested arrays
            return flat(ret);
        },
        // A global GUID counter for objects
        guid: 1,
        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });
    if (typeof Symbol === "function") jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    // Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
    });
    function isArrayLike(obj) {
        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length, type = toType(obj);
        if (isFunction(obj) || isWindow(obj)) return false;
        return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    var Sizzle = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */ function(window1) {
        var i, support1, Expr, getText, isXML, tokenize, compile, select, outermostContext, sortInput, hasDuplicate, // Local document vars
        setDocument, document1, docElem, documentIsHTML, rbuggyQSA, rbuggyMatches, matches, contains, // Instance-specific data
        expando = "sizzle" + 1 * new Date(), preferredDoc = window1.document, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a, b) {
            if (a === b) hasDuplicate = true;
            return 0;
        }, // Instance methods
        hasOwn1 = {
        }.hasOwnProperty, arr1 = [], pop = arr1.pop, pushNative = arr1.push, push1 = arr1.push, slice1 = arr1.slice, // Use a stripped-down indexOf as it's faster than native
        // https://jsperf.com/thor-indexof-vs-for/5
        indexOf1 = function(list, elem) {
            var i1 = 0, len = list.length;
            for(; i1 < len; i1++){
                if (list[i1] === elem) return i1;
            }
            return -1;
        }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", // Regular expressions
        // http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]", // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
        identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + // Operator (capture 2)
        "*([*^$|!~]?=)" + whitespace + // "Attribute values must be CSS identifiers [capture 5]
        // or strings [capture 3 or capture 4]"
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + ")(?:\\((" + // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
        // 1. quoted (capture 3; capture 4 or capture 5)
        "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + // 2. simple (capture 6)
        "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" + // 3. anything else (capture 2)
        ".*" + ")\\)|)", // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rwhitespace = new RegExp(whitespace + "+", "g"), rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
            "ID": new RegExp("^#(" + identifier + ")"),
            "CLASS": new RegExp("^\\.(" + identifier + ")"),
            "TAG": new RegExp("^(" + identifier + "|[*])"),
            "ATTR": new RegExp("^" + attributes),
            "PSEUDO": new RegExp("^" + pseudos),
            "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
            "bool": new RegExp("^(?:" + booleans + ")$", "i"),
            // For use in libraries implementing .is()
            // We use this for POS matching in `select`
            "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        }, rhtml = /HTML$/i, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rnative = /^[^{]+\{\s*\[native \w/, // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, // CSS escapes
        // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
            var high = "0x" + escape.slice(1) - 65536;
            return nonHex ? // Strip the backslash prefix from a non-hex escape sequence
            nonHex : // Replace a hexadecimal escape sequence with the encoded Unicode code point
            // Support: IE <=11+
            // For values outside the Basic Multilingual Plane (BMP), manually construct a
            // surrogate pair
            high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
        }, // CSS string/identifier serialization
        // https://drafts.csswg.org/cssom/#common-serializing-idioms
        rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, fcssescape = function(ch, asCodePoint) {
            if (asCodePoint) {
                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if (ch === "\0") return "\uFFFD";
                // Control characters and (dependent upon position) numbers get escaped as code points
                return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
            }
            // Other potentially-special ASCII characters get backslash-escaped
            return "\\" + ch;
        }, // Used for iframes
        // See setDocument()
        // Removing the function wrapper causes a "Permission Denied"
        // error in IE
        unloadHandler = function() {
            setDocument();
        }, inDisabledFieldset = addCombinator(function(elem) {
            return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
        }, {
            dir: "parentNode",
            next: "legend"
        });
        // Optimize for push.apply( _, NodeList )
        try {
            push1.apply(arr1 = slice1.call(preferredDoc.childNodes), preferredDoc.childNodes);
            // Support: Android<4.0
            // Detect silently failing push.apply
            // eslint-disable-next-line no-unused-expressions
            arr1[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
            push1 = {
                apply: arr1.length ? // Leverage slice if possible
                function(target, els) {
                    pushNative.apply(target, slice1.call(els));
                } : // Support: IE<9
                // Otherwise append directly
                function(target, els) {
                    var j = target.length, i1 = 0;
                    // Can't trust NodeList.length
                    while(target[j++] = els[i1++]);
                    target.length = j - 1;
                }
            };
        }
        function Sizzle1(selector, context, results, seed) {
            var m, i1, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, // nodeType defaults to 9, since context defaults to document
            nodeType = context ? context.nodeType : 9;
            results = results || [];
            // Return early from calls with invalid selector or context
            if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) return results;
            // Try to shortcut find operations (as opposed to filters) in HTML documents
            if (!seed) {
                setDocument(context);
                context = context || document1;
                if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
                        // ID selector
                        if (m = match[1]) {
                            // Document context
                            if (nodeType === 9) {
                                if (elem = context.getElementById(m)) // Support: IE, Opera, Webkit
                                // TODO: identify versions
                                // getElementById can match elements by name instead of ID
                                {
                                    if (elem.id === m) {
                                        results.push(elem);
                                        return results;
                                    }
                                } else return results;
                            // Element context
                            } else // Support: IE, Opera, Webkit
                            // TODO: identify versions
                            // getElementById can match elements by name instead of ID
                            if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {
                                results.push(elem);
                                return results;
                            }
                        // Type selector
                        } else if (match[2]) {
                            push1.apply(results, context.getElementsByTagName(selector));
                            return results;
                        // Class selector
                        } else if ((m = match[3]) && support1.getElementsByClassName && context.getElementsByClassName) {
                            push1.apply(results, context.getElementsByClassName(m));
                            return results;
                        }
                    }
                    // Take advantage of querySelectorAll
                    if (support1.qsa && !nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector)) && (nodeType !== 1 || context.nodeName.toLowerCase() !== "object")) {
                        newSelector = selector;
                        newContext = context;
                        // qSA considers elements outside a scoping root when evaluating child or
                        // descendant combinators, which is not what we want.
                        // In such cases, we work around the behavior by prefixing every selector in the
                        // list with an ID selector referencing the scope context.
                        // The technique has to be used as well when a leading combinator is used
                        // as such selectors are not recognized by querySelectorAll.
                        // Thanks to Andrew Dupont for this technique.
                        if (nodeType === 1 && (rdescend.test(selector) || rcombinators.test(selector))) {
                            // Expand context for sibling selectors
                            newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                            // We can use :scope instead of the ID hack if the browser
                            // supports it & if we're not changing the context.
                            if (newContext !== context || !support1.scope) {
                                // Capture the context ID, setting it first if necessary
                                if (nid = context.getAttribute("id")) nid = nid.replace(rcssescape, fcssescape);
                                else context.setAttribute("id", nid = expando);
                            }
                            // Prefix every selector in the list
                            groups = tokenize(selector);
                            i1 = groups.length;
                            while(i1--)groups[i1] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i1]);
                            newSelector = groups.join(",");
                        }
                        try {
                            push1.apply(results, newContext.querySelectorAll(newSelector));
                            return results;
                        } catch (qsaError) {
                            nonnativeSelectorCache(selector, true);
                        } finally{
                            if (nid === expando) context.removeAttribute("id");
                        }
                    }
                }
            }
            // All others
            return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        /**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */ function createCache() {
            var keys = [];
            function cache(key, value) {
                // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                if (keys.push(key + " ") > Expr.cacheLength) // Only keep the most recent entries
                delete cache[keys.shift()];
                return cache[key + " "] = value;
            }
            return cache;
        }
        /**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */ function markFunction(fn) {
            fn[expando] = true;
            return fn;
        }
        /**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */ function assert(fn) {
            var el = document1.createElement("fieldset");
            try {
                return !!fn(el);
            } catch (e) {
                return false;
            } finally{
                // Remove from its parent by default
                if (el.parentNode) el.parentNode.removeChild(el);
                // release memory in IE
                el = null;
            }
        }
        /**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */ function addHandle(attrs, handler) {
            var arr2 = attrs.split("|"), i1 = arr2.length;
            while(i1--)Expr.attrHandle[arr2[i1]] = handler;
        }
        /**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */ function siblingCheck(a, b) {
            var cur = b && a, diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;
            // Use IE sourceIndex if available on both nodes
            if (diff) return diff;
            // Check if b follows a
            if (cur) while(cur = cur.nextSibling){
                if (cur === b) return -1;
            }
            return a ? 1 : -1;
        }
        /**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */ function createInputPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return name === "input" && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */ function createButtonPseudo(type) {
            return function(elem) {
                var name = elem.nodeName.toLowerCase();
                return (name === "input" || name === "button") && elem.type === type;
            };
        }
        /**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */ function createDisabledPseudo(disabled) {
            // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
            return function(elem) {
                // Only certain elements can match :enabled or :disabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                        // Option elements defer to a parent optgroup if present
                        if ("label" in elem) {
                            if ("label" in elem.parentNode) return elem.parentNode.disabled === disabled;
                            else return elem.disabled === disabled;
                        }
                        // Support: IE 6 - 11
                        // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                        return elem.isDisabled === disabled || // Where there is no isDisabled, check manually
                        /* jshint -W018 */ elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
                    }
                    return elem.disabled === disabled;
                // Try to winnow out elements that can't be disabled before trusting the disabled property.
                // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                // even exist on them, let alone have a boolean value.
                } else if ("label" in elem) return elem.disabled === disabled;
                // Remaining elements are neither :enabled nor :disabled
                return false;
            };
        }
        /**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */ function createPositionalPseudo(fn) {
            return markFunction(function(argument) {
                argument = +argument;
                return markFunction(function(seed, matches1) {
                    var j, matchIndexes = fn([], seed.length, argument), i1 = matchIndexes.length;
                    // Match elements found at the specified indexes
                    while(i1--)if (seed[j = matchIndexes[i1]]) seed[j] = !(matches1[j] = seed[j]);
                });
            });
        }
        /**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */ function testContext(context) {
            return context && typeof context.getElementsByTagName !== "undefined" && context;
        }
        // Expose support vars for convenience
        support1 = Sizzle1.support = {
        };
        /**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */ isXML = Sizzle1.isXML = function(elem) {
            var namespace = elem && elem.namespaceURI, docElem1 = elem && (elem.ownerDocument || elem).documentElement;
            // Support: IE <=8
            // Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
            // https://bugs.jquery.com/ticket/4833
            return !rhtml.test(namespace || docElem1 && docElem1.nodeName || "HTML");
        };
        /**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */ setDocument = Sizzle1.setDocument = function(node) {
            var hasCompare, subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
            // Return early if doc is invalid or already selected
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (doc == document1 || doc.nodeType !== 9 || !doc.documentElement) return document1;
            // Update global variables
            document1 = doc;
            docElem = document1.documentElement;
            documentIsHTML = !isXML(document1);
            // Support: IE 9 - 11+, Edge 12 - 18+
            // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if (preferredDoc != document1 && (subWindow = document1.defaultView) && subWindow.top !== subWindow) {
                // Support: IE 11, Edge
                if (subWindow.addEventListener) subWindow.addEventListener("unload", unloadHandler, false);
                else if (subWindow.attachEvent) subWindow.attachEvent("onunload", unloadHandler);
            }
            // Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
            // Safari 4 - 5 only, Opera <=11.6 - 12.x only
            // IE/Edge & older browsers don't support the :scope pseudo-class.
            // Support: Safari 6.0 only
            // Safari 6.0 supports :scope but it's an alias of :root there.
            support1.scope = assert(function(el) {
                docElem.appendChild(el).appendChild(document1.createElement("div"));
                return typeof el.querySelectorAll !== "undefined" && !el.querySelectorAll(":scope fieldset div").length;
            });
            /* Attributes
	---------------------------------------------------------------------- */ // Support: IE<8
            // Verify that getAttribute really returns attributes and not properties
            // (excepting IE8 booleans)
            support1.attributes = assert(function(el) {
                el.className = "i";
                return !el.getAttribute("className");
            });
            /* getElement(s)By*
	---------------------------------------------------------------------- */ // Check if getElementsByTagName("*") returns only elements
            support1.getElementsByTagName = assert(function(el) {
                el.appendChild(document1.createComment(""));
                return !el.getElementsByTagName("*").length;
            });
            // Support: IE<9
            support1.getElementsByClassName = rnative.test(document1.getElementsByClassName);
            // Support: IE<10
            // Check if getElementById returns elements by name
            // The broken getElementById methods don't pick up programmatically-set names,
            // so use a roundabout getElementsByName test
            support1.getById = assert(function(el) {
                docElem.appendChild(el).id = expando;
                return !document1.getElementsByName || !document1.getElementsByName(expando).length;
            });
            // ID filter and find
            if (support1.getById) {
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        return elem.getAttribute("id") === attrId;
                    };
                };
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var elem = context.getElementById(id);
                        return elem ? [
                            elem
                        ] : [];
                    }
                };
            } else {
                Expr.filter["ID"] = function(id) {
                    var attrId = id.replace(runescape, funescape);
                    return function(elem) {
                        var node1 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
                        return node1 && node1.value === attrId;
                    };
                };
                // Support: IE 6 - 7 only
                // getElementById is not reliable as a find shortcut
                Expr.find["ID"] = function(id, context) {
                    if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                        var node1, i1, elems, elem = context.getElementById(id);
                        if (elem) {
                            // Verify the id attribute
                            node1 = elem.getAttributeNode("id");
                            if (node1 && node1.value === id) return [
                                elem
                            ];
                            // Fall back on getElementsByName
                            elems = context.getElementsByName(id);
                            i1 = 0;
                            while(elem = elems[i1++]){
                                node1 = elem.getAttributeNode("id");
                                if (node1 && node1.value === id) return [
                                    elem
                                ];
                            }
                        }
                        return [];
                    }
                };
            }
            // Tag
            Expr.find["TAG"] = support1.getElementsByTagName ? function(tag, context) {
                if (typeof context.getElementsByTagName !== "undefined") return context.getElementsByTagName(tag);
                else if (support1.qsa) return context.querySelectorAll(tag);
            } : function(tag, context) {
                var elem, tmp = [], i2 = 0, // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                results = context.getElementsByTagName(tag);
                // Filter out possible comments
                if (tag === "*") {
                    while(elem = results[i2++])if (elem.nodeType === 1) tmp.push(elem);
                    return tmp;
                }
                return results;
            };
            // Class
            Expr.find["CLASS"] = support1.getElementsByClassName && function(className, context) {
                if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) return context.getElementsByClassName(className);
            };
            /* QSA/matchesSelector
	---------------------------------------------------------------------- */ // QSA and matchesSelector support
            // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
            rbuggyMatches = [];
            // qSa(:focus) reports false when true (Chrome 21)
            // We allow this because of a bug in IE8/9 that throws an error
            // whenever `document.activeElement` is accessed on an iframe
            // So, we allow :focus to pass through QSA all the time to avoid the IE error
            // See https://bugs.jquery.com/ticket/13378
            rbuggyQSA = [];
            if (support1.qsa = rnative.test(document1.querySelectorAll)) {
                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function(el) {
                    var input;
                    // Select is set to empty string on purpose
                    // This is to test IE's treatment of not explicitly
                    // setting a boolean content attribute,
                    // since its presence should be enough
                    // https://bugs.jquery.com/ticket/12359
                    docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    // Support: IE8, Opera 11-12.16
                    // Nothing should be selected when empty strings follow ^= or $= or *=
                    // The test attribute must be unknown in Opera but "safe" for WinRT
                    // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                    if (el.querySelectorAll("[msallowcapture^='']").length) rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                    // Support: IE8
                    // Boolean attributes and "value" are not treated correctly
                    if (!el.querySelectorAll("[selected]").length) rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                    // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                    if (!el.querySelectorAll("[id~=" + expando + "-]").length) rbuggyQSA.push("~=");
                    // Support: IE 11+, Edge 15 - 18+
                    // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                    // Adding a temporary attribute to the document before the selection works
                    // around the issue.
                    // Interestingly, IE 10 & older don't seem to have the issue.
                    input = document1.createElement("input");
                    input.setAttribute("name", "");
                    el.appendChild(input);
                    if (!el.querySelectorAll("[name='']").length) rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + "*(?:''|\"\")");
                    // Webkit/Opera - :checked should return selected option elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    // IE8 throws error here and will not see later tests
                    if (!el.querySelectorAll(":checked").length) rbuggyQSA.push(":checked");
                    // Support: Safari 8+, iOS 8+
                    // https://bugs.webkit.org/show_bug.cgi?id=136851
                    // In-page `selector#id sibling-combinator selector` fails
                    if (!el.querySelectorAll("a#" + expando + "+*").length) rbuggyQSA.push(".#.+[+~]");
                    // Support: Firefox <=3.6 - 5 only
                    // Old Firefox doesn't throw on a badly-escaped identifier.
                    el.querySelectorAll("\\\f");
                    rbuggyQSA.push("[\\r\\n\\f]");
                });
                assert(function(el) {
                    el.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    // Support: Windows 8 Native Apps
                    // The type and name attributes are restricted during .innerHTML assignment
                    var input = document1.createElement("input");
                    input.setAttribute("type", "hidden");
                    el.appendChild(input).setAttribute("name", "D");
                    // Support: IE8
                    // Enforce case-sensitivity of name attribute
                    if (el.querySelectorAll("[name=d]").length) rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                    // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                    // IE8 throws error here and will not see later tests
                    if (el.querySelectorAll(":enabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                    // Support: IE9-11+
                    // IE's :disabled selector does not pick up the children of disabled fieldsets
                    docElem.appendChild(el).disabled = true;
                    if (el.querySelectorAll(":disabled").length !== 2) rbuggyQSA.push(":enabled", ":disabled");
                    // Support: Opera 10 - 11 only
                    // Opera 10-11 does not throw on post-comma invalid pseudos
                    el.querySelectorAll("*,:x");
                    rbuggyQSA.push(",.*:");
                });
            }
            if (support1.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) assert(function(el) {
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node (IE 9)
                support1.disconnectedMatch = matches.call(el, "*");
                // This should fail with an exception
                // Gecko does not error, returns false instead
                matches.call(el, "[s!='']:x");
                rbuggyMatches.push("!=", pseudos);
            });
            rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
            rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));
            /* Contains
	---------------------------------------------------------------------- */ hasCompare = rnative.test(docElem.compareDocumentPosition);
            // Element contains another
            // Purposefully self-exclusive
            // As in, an element does not contain itself
            contains = hasCompare || rnative.test(docElem.contains) ? function(a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
            } : function(a, b) {
                if (b) while(b = b.parentNode){
                    if (b === a) return true;
                }
                return false;
            };
            /* Sorting
	---------------------------------------------------------------------- */ // Document order sorting
            sortOrder = hasCompare ? function(a, b) {
                // Flag for duplicate removal
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                // Sort on method existence if only one input has compareDocumentPosition
                var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                if (compare) return compare;
                // Calculate position if both inputs belong to the same document
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                compare = (a.ownerDocument || a) == (b.ownerDocument || b) ? a.compareDocumentPosition(b) : // Otherwise we know they are disconnected
                1;
                // Disconnected nodes
                if (compare & 1 || !support1.sortDetached && b.compareDocumentPosition(a) === compare) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (a == document1 || a.ownerDocument == preferredDoc && contains(preferredDoc, a)) return -1;
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (b == document1 || b.ownerDocument == preferredDoc && contains(preferredDoc, b)) return 1;
                    // Maintain original order
                    return sortInput ? indexOf1(sortInput, a) - indexOf1(sortInput, b) : 0;
                }
                return compare & 4 ? -1 : 1;
            } : function(a, b) {
                // Exit early if the nodes are identical
                if (a === b) {
                    hasDuplicate = true;
                    return 0;
                }
                var cur, i2 = 0, aup = a.parentNode, bup = b.parentNode, ap = [
                    a
                ], bp = [
                    b
                ];
                // Parentless nodes are either documents or disconnected
                if (!aup || !bup) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */ return a == document1 ? -1 : b == document1 ? 1 : /* eslint-enable eqeqeq */ aup ? -1 : bup ? 1 : sortInput ? indexOf1(sortInput, a) - indexOf1(sortInput, b) : 0;
                else if (aup === bup) return siblingCheck(a, b);
                // Otherwise we need full lists of their ancestors for comparison
                cur = a;
                while(cur = cur.parentNode)ap.unshift(cur);
                cur = b;
                while(cur = cur.parentNode)bp.unshift(cur);
                // Walk down the tree looking for a discrepancy
                while(ap[i2] === bp[i2])i2++;
                return i2 ? // Do a sibling check if the nodes have a common ancestor
                siblingCheck(ap[i2], bp[i2]) : // Otherwise nodes in our document sort first
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                /* eslint-disable eqeqeq */ ap[i2] == preferredDoc ? -1 : bp[i2] == preferredDoc ? 1 : /* eslint-enable eqeqeq */ 0;
            };
            return document1;
        };
        Sizzle1.matches = function(expr, elements) {
            return Sizzle1(expr, null, null, elements);
        };
        Sizzle1.matchesSelector = function(elem, expr) {
            setDocument(elem);
            if (support1.matchesSelector && documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) try {
                var ret = matches.call(elem, expr);
                // IE 9's matchesSelector returns false on disconnected nodes
                if (ret || support1.disconnectedMatch || // As well, disconnected nodes are said to be in a document
                // fragment in IE 9
                elem.document && elem.document.nodeType !== 11) return ret;
            } catch (e) {
                nonnativeSelectorCache(expr, true);
            }
            return Sizzle1(expr, document1, null, [
                elem
            ]).length > 0;
        };
        Sizzle1.contains = function(context, elem) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((context.ownerDocument || context) != document1) setDocument(context);
            return contains(context, elem);
        };
        Sizzle1.attr = function(elem, name) {
            // Set document vars if needed
            // Support: IE 11+, Edge 17 - 18+
            // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
            // two documents; shallow comparisons work.
            // eslint-disable-next-line eqeqeq
            if ((elem.ownerDocument || elem) != document1) setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()], // Don't get fooled by Object.prototype properties (jQuery #13807)
            val = fn && hasOwn1.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;
            return val !== undefined ? val : support1.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        };
        Sizzle1.escape = function(sel) {
            return (sel + "").replace(rcssescape, fcssescape);
        };
        Sizzle1.error = function(msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
        };
        /**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */ Sizzle1.uniqueSort = function(results) {
            var elem, duplicates = [], j = 0, i2 = 0;
            // Unless we *know* we can detect duplicates, assume their presence
            hasDuplicate = !support1.detectDuplicates;
            sortInput = !support1.sortStable && results.slice(0);
            results.sort(sortOrder);
            if (hasDuplicate) {
                while(elem = results[i2++])if (elem === results[i2]) j = duplicates.push(i2);
                while(j--)results.splice(duplicates[j], 1);
            }
            // Clear input after sorting to release objects
            // See https://github.com/jquery/sizzle/pull/225
            sortInput = null;
            return results;
        };
        /**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */ getText = Sizzle1.getText = function(elem) {
            var node2, ret = "", i2 = 0, nodeType = elem.nodeType;
            if (!nodeType) // If no nodeType, this is expected to be an array
            while(node2 = elem[i2++])// Do not traverse comment nodes
            ret += getText(node2);
            else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                // Use textContent for elements
                // innerText usage removed for consistency of new lines (jQuery #11153)
                if (typeof elem.textContent === "string") return elem.textContent;
                else // Traverse its children
                for(elem = elem.firstChild; elem; elem = elem.nextSibling)ret += getText(elem);
            } else if (nodeType === 3 || nodeType === 4) return elem.nodeValue;
            // Do not include comment or processing instruction nodes
            return ret;
        };
        Expr = Sizzle1.selectors = {
            // Can be adjusted by the user
            cacheLength: 50,
            createPseudo: markFunction,
            match: matchExpr,
            attrHandle: {
            },
            find: {
            },
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                "ATTR": function(match) {
                    match[1] = match[1].replace(runescape, funescape);
                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
                    if (match[2] === "~=") match[3] = " " + match[3] + " ";
                    return match.slice(0, 4);
                },
                "CHILD": function(match) {
                    /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/ match[1] = match[1].toLowerCase();
                    if (match[1].slice(0, 3) === "nth") {
                        // nth-* requires argument
                        if (!match[3]) Sizzle1.error(match[0]);
                        // numeric x and y parameters for Expr.filter.CHILD
                        // remember that false/true cast respectively to 0/1
                        match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                        match[5] = +(match[7] + match[8] || match[3] === "odd");
                    // other types prohibit arguments
                    } else if (match[3]) Sizzle1.error(match[0]);
                    return match;
                },
                "PSEUDO": function(match) {
                    var excess, unquoted = !match[6] && match[2];
                    if (matchExpr["CHILD"].test(match[0])) return null;
                    // Accept quoted arguments as-is
                    if (match[3]) match[2] = match[4] || match[5] || "";
                    else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
                        // excess is a negative index
                        match[0] = match[0].slice(0, excess);
                        match[2] = unquoted.slice(0, excess);
                    }
                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3);
                }
            },
            filter: {
                "TAG": function(nodeNameSelector) {
                    var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                    return nodeNameSelector === "*" ? function() {
                        return true;
                    } : function(elem) {
                        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                    };
                },
                "CLASS": function(className) {
                    var pattern = classCache[className + " "];
                    return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)"), classCache(className, function(elem) {
                        return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                    }));
                },
                "ATTR": function(name, operator, check) {
                    return function(elem) {
                        var result = Sizzle1.attr(elem, name);
                        if (result == null) return operator === "!=";
                        if (!operator) return true;
                        result += "";
                        /* eslint-disable max-len */ return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
                    /* eslint-enable max-len */ };
                },
                "CHILD": function(type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
                    return first === 1 && last === 0 ? // Shortcut for :nth-*(n)
                    function(elem) {
                        return !!elem.parentNode;
                    } : function(elem, _context, xml) {
                        var cache, uniqueCache, outerCache, node2, nodeIndex, start, dir = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType, diff = false;
                        if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                                while(dir){
                                    node2 = elem;
                                    while(node2 = node2[dir]){
                                        if (ofType ? node2.nodeName.toLowerCase() === name : node2.nodeType === 1) return false;
                                    }
                                    // Reverse direction for :only-* (if we haven't yet done so)
                                    start = dir = type === "only" && !start && "nextSibling";
                                }
                                return true;
                            }
                            start = [
                                forward ? parent.firstChild : parent.lastChild
                            ];
                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                                // Seek `elem` from a previously-cached index
                                // ...in a gzip-friendly way
                                node2 = parent;
                                outerCache = node2[expando] || (node2[expando] = {
                                });
                                // Support: IE <9 only
                                // Defend against cloned attroperties (jQuery gh-1709)
                                uniqueCache = outerCache[node2.uniqueID] || (outerCache[node2.uniqueID] = {
                                });
                                cache = uniqueCache[type] || [];
                                nodeIndex = cache[0] === dirruns && cache[1];
                                diff = nodeIndex && cache[2];
                                node2 = nodeIndex && parent.childNodes[nodeIndex];
                                while(node2 = (++nodeIndex) && node2 && node2[dir] || (diff = nodeIndex = 0) || start.pop())// When found, cache indexes on `parent` and break
                                if (node2.nodeType === 1 && ++diff && node2 === elem) {
                                    uniqueCache[type] = [
                                        dirruns,
                                        nodeIndex,
                                        diff
                                    ];
                                    break;
                                }
                            } else {
                                // Use previously-cached element index if available
                                if (useCache) {
                                    // ...in a gzip-friendly way
                                    node2 = elem;
                                    outerCache = node2[expando] || (node2[expando] = {
                                    });
                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[node2.uniqueID] || (outerCache[node2.uniqueID] = {
                                    });
                                    cache = uniqueCache[type] || [];
                                    nodeIndex = cache[0] === dirruns && cache[1];
                                    diff = nodeIndex;
                                }
                                // xml :nth-child(...)
                                // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                if (diff === false) {
                                    // Use the same loop as above to seek `elem` from the start
                                    while(node2 = (++nodeIndex) && node2 && node2[dir] || (diff = nodeIndex = 0) || start.pop())if ((ofType ? node2.nodeName.toLowerCase() === name : node2.nodeType === 1) && ++diff) {
                                        // Cache the index of each encountered element
                                        if (useCache) {
                                            outerCache = node2[expando] || (node2[expando] = {
                                            });
                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node2.uniqueID] || (outerCache[node2.uniqueID] = {
                                            });
                                            uniqueCache[type] = [
                                                dirruns,
                                                diff
                                            ];
                                        }
                                        if (node2 === elem) break;
                                    }
                                }
                            }
                            // Incorporate the offset, then check against cycle size
                            diff -= last;
                            return diff === first || diff % first === 0 && diff / first >= 0;
                        }
                    };
                },
                "PSEUDO": function(pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // http://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle1.error("unsupported pseudo: " + pseudo);
                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as Sizzle does
                    if (fn[expando]) return fn(argument);
                    // But maintain support for old signatures
                    if (fn.length > 1) {
                        args = [
                            pseudo,
                            pseudo,
                            "",
                            argument
                        ];
                        return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches1) {
                            var idx, matched = fn(seed, argument), i2 = matched.length;
                            while(i2--){
                                idx = indexOf1(seed, matched[i2]);
                                seed[idx] = !(matches1[idx] = matched[i2]);
                            }
                        }) : function(elem) {
                            return fn(elem, 0, args);
                        };
                    }
                    return fn;
                }
            },
            pseudos: {
                // Potentially complex pseudos
                "not": markFunction(function(selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [], results = [], matcher = compile(selector.replace(rtrim, "$1"));
                    return matcher[expando] ? markFunction(function(seed, matches1, _context, xml) {
                        var elem, unmatched = matcher(seed, null, xml, []), i2 = seed.length;
                        // Match elements unmatched by `matcher`
                        while(i2--)if (elem = unmatched[i2]) seed[i2] = !(matches1[i2] = elem);
                    }) : function(elem, _context, xml) {
                        input[0] = elem;
                        matcher(input, null, xml, results);
                        // Don't keep the element (issue #299)
                        input[0] = null;
                        return !results.pop();
                    };
                }),
                "has": markFunction(function(selector) {
                    return function(elem) {
                        return Sizzle1(selector, elem).length > 0;
                    };
                }),
                "contains": markFunction(function(text) {
                    text = text.replace(runescape, funescape);
                    return function(elem) {
                        return (elem.textContent || getText(elem)).indexOf(text) > -1;
                    };
                }),
                // "Whether an element is represented by a :lang() selector
                // is based solely on the element's language value
                // being equal to the identifier C,
                // or beginning with the identifier C immediately followed by "-".
                // The matching of C against the element's language value is performed case-insensitively.
                // The identifier C does not have to be a valid language name."
                // http://www.w3.org/TR/selectors/#lang-pseudo
                "lang": markFunction(function(lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) Sizzle1.error("unsupported lang: " + lang);
                    lang = lang.replace(runescape, funescape).toLowerCase();
                    return function(elem) {
                        var elemLang;
                        do if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                            elemLang = elemLang.toLowerCase();
                            return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                        }
                        while ((elem = elem.parentNode) && elem.nodeType === 1)
                        return false;
                    };
                }),
                // Miscellaneous
                "target": function(elem) {
                    var hash = window1.location && window1.location.hash;
                    return hash && hash.slice(1) === elem.id;
                },
                "root": function(elem) {
                    return elem === docElem;
                },
                "focus": function(elem) {
                    return elem === document1.activeElement && (!document1.hasFocus || document1.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                },
                // Boolean properties
                "enabled": createDisabledPseudo(false),
                "disabled": createDisabledPseudo(true),
                "checked": function(elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    var nodeName = elem.nodeName.toLowerCase();
                    return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
                },
                "selected": function(elem) {
                    // Accessing this property makes selected-by-default
                    // options in Safari work properly
                    if (elem.parentNode) // eslint-disable-next-line no-unused-expressions
                    elem.parentNode.selectedIndex;
                    return elem.selected === true;
                },
                // Contents
                "empty": function(elem) {
                    // http://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for(elem = elem.firstChild; elem; elem = elem.nextSibling){
                        if (elem.nodeType < 6) return false;
                    }
                    return true;
                },
                "parent": function(elem) {
                    return !Expr.pseudos["empty"](elem);
                },
                // Element/input types
                "header": function(elem) {
                    return rheader.test(elem.nodeName);
                },
                "input": function(elem) {
                    return rinputs.test(elem.nodeName);
                },
                "button": function(elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === "button" || name === "button";
                },
                "text": function(elem) {
                    var attr;
                    return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                },
                // Position-in-collection
                "first": createPositionalPseudo(function() {
                    return [
                        0
                    ];
                }),
                "last": createPositionalPseudo(function(_matchIndexes, length) {
                    return [
                        length - 1
                    ];
                }),
                "eq": createPositionalPseudo(function(_matchIndexes, length, argument) {
                    return [
                        argument < 0 ? argument + length : argument
                    ];
                }),
                "even": createPositionalPseudo(function(matchIndexes, length) {
                    var i2 = 0;
                    for(; i2 < length; i2 += 2)matchIndexes.push(i2);
                    return matchIndexes;
                }),
                "odd": createPositionalPseudo(function(matchIndexes, length) {
                    var i2 = 1;
                    for(; i2 < length; i2 += 2)matchIndexes.push(i2);
                    return matchIndexes;
                }),
                "lt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i2 = argument < 0 ? argument + length : argument > length ? length : argument;
                    for(; (--i2) >= 0;)matchIndexes.push(i2);
                    return matchIndexes;
                }),
                "gt": createPositionalPseudo(function(matchIndexes, length, argument) {
                    var i2 = argument < 0 ? argument + length : argument;
                    for(; (++i2) < length;)matchIndexes.push(i2);
                    return matchIndexes;
                })
            }
        };
        Expr.pseudos["nth"] = Expr.pseudos["eq"];
        // Add button/input type pseudos
        for(i in {
            radio: true,
            checkbox: true,
            file: true,
            password: true,
            image: true
        })Expr.pseudos[i] = createInputPseudo(i);
        for(i in {
            submit: true,
            reset: true
        })Expr.pseudos[i] = createButtonPseudo(i);
        // Easy API for creating new setFilters
        function setFilters() {
        }
        setFilters.prototype = Expr.filters = Expr.pseudos;
        Expr.setFilters = new setFilters();
        tokenize = Sizzle1.tokenize = function(selector, parseOnly) {
            var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
            if (cached) return parseOnly ? 0 : cached.slice(0);
            soFar = selector;
            groups = [];
            preFilters = Expr.preFilter;
            while(soFar){
                // Comma and first run
                if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) // Don't consume trailing commas as valid
                    soFar = soFar.slice(match[0].length) || soFar;
                    groups.push(tokens = []);
                }
                matched = false;
                // Combinators
                if (match = rcombinators.exec(soFar)) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        // Cast descendant combinators to space
                        type: match[0].replace(rtrim, " ")
                    });
                    soFar = soFar.slice(matched.length);
                }
                // Filters
                for(type in Expr.filter)if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
                    matched = match.shift();
                    tokens.push({
                        value: matched,
                        type: type,
                        matches: match
                    });
                    soFar = soFar.slice(matched.length);
                }
                if (!matched) break;
            }
            // Return the length of the invalid excess
            // if we're just parsing
            // Otherwise, throw an error or return tokens
            return parseOnly ? soFar.length : soFar ? Sizzle1.error(selector) : // Cache the tokens
            tokenCache(selector, groups).slice(0);
        };
        function toSelector(tokens) {
            var i2 = 0, len = tokens.length, selector = "";
            for(; i2 < len; i2++)selector += tokens[i2].value;
            return selector;
        }
        function addCombinator(matcher, combinator, base) {
            var dir = combinator.dir, skip = combinator.next, key = skip || dir, checkNonElements = base && key === "parentNode", doneName = done++;
            return combinator.first ? // Check against closest ancestor/preceding element
            function(elem, context, xml) {
                while(elem = elem[dir]){
                    if (elem.nodeType === 1 || checkNonElements) return matcher(elem, context, xml);
                }
                return false;
            } : // Check against all ancestor/preceding elements
            function(elem, context, xml) {
                var oldCache, uniqueCache, outerCache, newCache = [
                    dirruns,
                    doneName
                ];
                // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                if (xml) {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        if (matcher(elem, context, xml)) return true;
                    }
                } else {
                    while(elem = elem[dir])if (elem.nodeType === 1 || checkNonElements) {
                        outerCache = elem[expando] || (elem[expando] = {
                        });
                        // Support: IE <9 only
                        // Defend against cloned attroperties (jQuery gh-1709)
                        uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {
                        });
                        if (skip && skip === elem.nodeName.toLowerCase()) elem = elem[dir] || elem;
                        else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) // Assign to newCache so results back-propagate to previous elements
                        return newCache[2] = oldCache[2];
                        else {
                            // Reuse newcache so results back-propagate to previous elements
                            uniqueCache[key] = newCache;
                            // A match means we're done; a fail means we have to keep checking
                            if (newCache[2] = matcher(elem, context, xml)) return true;
                        }
                    }
                }
                return false;
            };
        }
        function elementMatcher(matchers) {
            return matchers.length > 1 ? function(elem, context, xml) {
                var i2 = matchers.length;
                while(i2--){
                    if (!matchers[i2](elem, context, xml)) return false;
                }
                return true;
            } : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
            var i2 = 0, len = contexts.length;
            for(; i2 < len; i2++)Sizzle1(selector, contexts[i2], results);
            return results;
        }
        function condense(unmatched, map, filter, context, xml) {
            var elem, newUnmatched = [], i2 = 0, len = unmatched.length, mapped = map != null;
            for(; i2 < len; i2++){
                if (elem = unmatched[i2]) {
                    if (!filter || filter(elem, context, xml)) {
                        newUnmatched.push(elem);
                        if (mapped) map.push(i2);
                    }
                }
            }
            return newUnmatched;
        }
        function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
            if (postFilter && !postFilter[expando]) postFilter = setMatcher(postFilter);
            if (postFinder && !postFinder[expando]) postFinder = setMatcher(postFinder, postSelector);
            return markFunction(function(seed, results, context, xml) {
                var temp, i2, elem, preMap = [], postMap = [], preexisting = results.length, // Get initial elements from seed or context
                elems = seed || multipleContexts(selector || "*", context.nodeType ? [
                    context
                ] : context, []), // Prefilter to get matcher input, preserving a map for seed-results synchronization
                matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                postFinder || (seed ? preFilter : preexisting || postFilter) ? // ...intermediate processing is necessary
                [] : // ...otherwise use results directly
                results : matcherIn;
                // Find primary matches
                if (matcher) matcher(matcherIn, matcherOut, context, xml);
                // Apply postFilter
                if (postFilter) {
                    temp = condense(matcherOut, postMap);
                    postFilter(temp, [], context, xml);
                    // Un-match failing elements by moving them back to matcherIn
                    i2 = temp.length;
                    while(i2--)if (elem = temp[i2]) matcherOut[postMap[i2]] = !(matcherIn[postMap[i2]] = elem);
                }
                if (seed) {
                    if (postFinder || preFilter) {
                        if (postFinder) {
                            // Get the final matcherOut by condensing this intermediate into postFinder contexts
                            temp = [];
                            i2 = matcherOut.length;
                            while(i2--)if (elem = matcherOut[i2]) // Restore matcherIn since elem is not yet a final match
                            temp.push(matcherIn[i2] = elem);
                            postFinder(null, matcherOut = [], temp, xml);
                        }
                        // Move matched elements from seed to results to keep them synchronized
                        i2 = matcherOut.length;
                        while(i2--)if ((elem = matcherOut[i2]) && (temp = postFinder ? indexOf1(seed, elem) : preMap[i2]) > -1) seed[temp] = !(results[temp] = elem);
                    }
                } else {
                    matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
                    if (postFinder) postFinder(null, results, matcherOut, xml);
                    else push1.apply(results, matcherOut);
                }
            });
        }
        function matcherFromTokens(tokens) {
            var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i2 = leadingRelative ? 1 : 0, // The foundational matcher ensures that elements are reachable from top-level context(s)
            matchContext = addCombinator(function(elem) {
                return elem === checkContext;
            }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
                return indexOf1(checkContext, elem) > -1;
            }, implicitRelative, true), matchers = [
                function(elem, context, xml) {
                    var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
                    // Avoid hanging onto element (issue #299)
                    checkContext = null;
                    return ret;
                }
            ];
            for(; i2 < len; i2++)if (matcher = Expr.relative[tokens[i2].type]) matchers = [
                addCombinator(elementMatcher(matchers), matcher)
            ];
            else {
                matcher = Expr.filter[tokens[i2].type].apply(null, tokens[i2].matches);
                // Return special upon seeing a positional matcher
                if (matcher[expando]) {
                    // Find the next relative operator (if any) for proper handling
                    j = ++i2;
                    for(; j < len; j++){
                        if (Expr.relative[tokens[j].type]) break;
                    }
                    return setMatcher(i2 > 1 && elementMatcher(matchers), i2 > 1 && toSelector(// If the preceding token was a descendant combinator, insert an implicit any-element `*`
                    tokens.slice(0, i2 - 1).concat({
                        value: tokens[i2 - 2].type === " " ? "*" : ""
                    })).replace(rtrim, "$1"), matcher, i2 < j && matcherFromTokens(tokens.slice(i2, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
                }
                matchers.push(matcher);
            }
            return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
            var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml, results, outermost) {
                var elem, j, matcher, matchedCount = 0, i2 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, // We must always have either seed elements or outermost context
                elems = seed || byElement && Expr.find["TAG"]("*", outermost), // Use integer dirruns iff this is the outermost matcher
                dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
                if (outermost) // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                outermostContext = context == document1 || context || outermost;
                // Add elements passing elementMatchers directly to results
                // Support: IE<9, Safari
                // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                for(; i2 !== len && (elem = elems[i2]) != null; i2++){
                    if (byElement && elem) {
                        j = 0;
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document1) {
                            setDocument(elem);
                            xml = !documentIsHTML;
                        }
                        while(matcher = elementMatchers[j++])if (matcher(elem, context || document1, xml)) {
                            results.push(elem);
                            break;
                        }
                        if (outermost) dirruns = dirrunsUnique;
                    }
                    // Track unmatched elements for set filters
                    if (bySet) {
                        // They will have gone through all possible matchers
                        if (elem = !matcher && elem) matchedCount--;
                        // Lengthen the array for every element, matched or not
                        if (seed) unmatched.push(elem);
                    }
                }
                // `i` is now the count of elements visited above, and adding it to `matchedCount`
                // makes the latter nonnegative.
                matchedCount += i2;
                // Apply set filters to unmatched elements
                // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                // no element matchers and no seed.
                // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                // numerically zero.
                if (bySet && i2 !== matchedCount) {
                    j = 0;
                    while(matcher = setMatchers[j++])matcher(unmatched, setMatched, context, xml);
                    if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                            while(i2--)if (!(unmatched[i2] || setMatched[i2])) setMatched[i2] = pop.call(results);
                        }
                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched);
                    }
                    // Add matches to results
                    push1.apply(results, setMatched);
                    // Seedless set matches succeeding multiple successful matchers stipulate sorting
                    if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) Sizzle1.uniqueSort(results);
                }
                // Override manipulation of globals by nested matchers
                if (outermost) {
                    dirruns = dirrunsUnique;
                    outermostContext = contextBackup;
                }
                return unmatched;
            };
            return bySet ? markFunction(superMatcher) : superMatcher;
        }
        compile = Sizzle1.compile = function(selector, match/* Internal Use Only */ ) {
            var i2, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
            if (!cached) {
                // Generate a function of recursive functions that can be used to check each element
                if (!match) match = tokenize(selector);
                i2 = match.length;
                while(i2--){
                    cached = matcherFromTokens(match[i2]);
                    if (cached[expando]) setMatchers.push(cached);
                    else elementMatchers.push(cached);
                }
                // Cache the compiled function
                cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
                // Save selector and tokenization
                cached.selector = selector;
            }
            return cached;
        };
        /**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */ select = Sizzle1.select = function(selector, context, results, seed) {
            var i2, tokens, token, type, find, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
            results = results || [];
            // Try to minimize operations if there is only one selector in the list and no seed
            // (the latter of which guarantees us context)
            if (match.length === 1) {
                // Reduce context if the leading compound selector is an ID
                tokens = match[0] = match[0].slice(0);
                if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
                    context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                    if (!context) return results;
                    else if (compiled) context = context.parentNode;
                    selector = selector.slice(tokens.shift().value.length);
                }
                // Fetch a seed set for right-to-left matching
                i2 = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                while(i2--){
                    token = tokens[i2];
                    // Abort if we hit a combinator
                    if (Expr.relative[type = token.type]) break;
                    if (find = Expr.find[type]) // Search, expanding context for leading sibling combinators
                    {
                        if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {
                            // If seed is empty or no tokens remain, we can return early
                            tokens.splice(i2, 1);
                            selector = seed.length && toSelector(tokens);
                            if (!selector) {
                                push1.apply(results, seed);
                                return results;
                            }
                            break;
                        }
                    }
                }
            }
            // Compile and execute a filtering function if one is not provided
            // Provide `match` to avoid retokenization if we modified the selector above
            (compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
            return results;
        };
        // One-time assignments
        // Sort stability
        support1.sortStable = expando.split("").sort(sortOrder).join("") === expando;
        // Support: Chrome 14-35+
        // Always assume duplicates if they aren't passed to the comparison function
        support1.detectDuplicates = !!hasDuplicate;
        // Initialize against the default document
        setDocument();
        // Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
        // Detached nodes confoundingly follow *each other*
        support1.sortDetached = assert(function(el) {
            // Should return 1, but returns 4 (following)
            return el.compareDocumentPosition(document1.createElement("fieldset")) & 1;
        });
        // Support: IE<8
        // Prevent attribute/property "interpolation"
        // https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
        if (!assert(function(el) {
            el.innerHTML = "<a href='#'></a>";
            return el.firstChild.getAttribute("href") === "#";
        })) addHandle("type|href|height|width", function(elem, name, isXML1) {
            if (!isXML1) return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
        });
        // Support: IE<9
        // Use defaultValue in place of getAttribute("value")
        if (!support1.attributes || !assert(function(el) {
            el.innerHTML = "<input/>";
            el.firstChild.setAttribute("value", "");
            return el.firstChild.getAttribute("value") === "";
        })) addHandle("value", function(elem, _name, isXML1) {
            if (!isXML1 && elem.nodeName.toLowerCase() === "input") return elem.defaultValue;
        });
        // Support: IE<9
        // Use getAttributeNode to fetch booleans when getAttribute lies
        if (!assert(function(el) {
            return el.getAttribute("disabled") == null;
        })) addHandle(booleans, function(elem, name, isXML1) {
            var val;
            if (!isXML1) return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
        });
        return Sizzle1;
    }(window);
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    // Deprecated
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;
    var dir = function(elem, dir1, until) {
        var matched = [], truncate = until !== undefined;
        while((elem = elem[dir1]) && elem.nodeType !== 9)if (elem.nodeType === 1) {
            if (truncate && jQuery(elem).is(until)) break;
            matched.push(elem);
        }
        return matched;
    };
    var siblings = function(n, elem) {
        var matched = [];
        for(; n; n = n.nextSibling)if (n.nodeType === 1 && n !== elem) matched.push(n);
        return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    function nodeName(elem, name) {
        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    // Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) return jQuery.grep(elements, function(elem, i2) {
            return !!qualifier.call(elem, i2, elem) !== not;
        });
        // Single element
        if (qualifier.nodeType) return jQuery.grep(elements, function(elem) {
            return elem === qualifier !== not;
        });
        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") return jQuery.grep(elements, function(elem) {
            return indexOf.call(qualifier, elem) > -1 !== not;
        });
        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
        var elem = elems[0];
        if (not) expr = ":not(" + expr + ")";
        if (elems.length === 1 && elem.nodeType === 1) return jQuery.find.matchesSelector(elem, expr) ? [
            elem
        ] : [];
        return jQuery.find.matches(expr, jQuery.grep(elems, function(elem1) {
            return elem1.nodeType === 1;
        }));
    };
    jQuery.fn.extend({
        find: function(selector) {
            var i2, ret, len = this.length, self = this;
            if (typeof selector !== "string") return this.pushStack(jQuery(selector).filter(function() {
                for(i2 = 0; i2 < len; i2++){
                    if (jQuery.contains(self[i2], this)) return true;
                }
            }));
            ret = this.pushStack([]);
            for(i2 = 0; i2 < len; i2++)jQuery.find(selector, self[i2], ret);
            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function(selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function(selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function(selector) {
            return !!winnow(this, // If this is a positional/relative selector, check membership in the returned set
            // so $("p:first").is("p:last") won't return true for a doc with two "p".
            typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
        }
    });
    // Initialize a jQuery object
    // A central reference to the root jQuery(document)
    var rootjQuery, // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    // Shortcut simple #id case for speed
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
        var match, elem;
        // HANDLE: $(""), $(null), $(undefined), $(false)
        if (!selector) return this;
        // Method init() accepts an alternate rootjQuery
        // so migrate can support jQuery.sub (gh-2101)
        root = root || rootjQuery;
        // Handle HTML strings
        if (typeof selector === "string") {
            if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) // Assume that strings that start and end with <> are HTML and skip the regex check
            match = [
                null,
                selector,
                null
            ];
            else match = rquickExpr.exec(selector);
            // Match html or make sure no context is specified for #id
            if (match && (match[1] || !context)) {
                // HANDLE: $(html) -> $(array)
                if (match[1]) {
                    context = context instanceof jQuery ? context[0] : context;
                    // Option to run scripts is true for back-compat
                    // Intentionally let the error be thrown if parseHTML is not present
                    jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
                    // HANDLE: $(html, props)
                    if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                        for(match in context)// Properties of context are called as methods if possible
                        if (isFunction(this[match])) this[match](context[match]);
                        else this.attr(match, context[match]);
                    }
                    return this;
                // HANDLE: $(#id)
                } else {
                    elem = document.getElementById(match[2]);
                    if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem;
                        this.length = 1;
                    }
                    return this;
                }
            } else if (!context || context.jquery) return (context || root).find(selector);
            else return this.constructor(context).find(selector);
        // HANDLE: $(DOMElement)
        } else if (selector.nodeType) {
            this[0] = selector;
            this.length = 1;
            return this;
        // HANDLE: $(function)
        // Shortcut for document ready
        } else if (isFunction(selector)) return root.ready !== undefined ? root.ready(selector) : // Execute immediately if ready is not present
        selector(jQuery);
        return jQuery.makeArray(selector, this);
    };
    // Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;
    // Initialize central reference
    rootjQuery = jQuery(document);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, // Methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
        children: true,
        contents: true,
        next: true,
        prev: true
    };
    jQuery.fn.extend({
        has: function(target) {
            var targets = jQuery(target, this), l = targets.length;
            return this.filter(function() {
                var i2 = 0;
                for(; i2 < l; i2++){
                    if (jQuery.contains(this, targets[i2])) return true;
                }
            });
        },
        closest: function(selectors, context) {
            var cur, i2 = 0, l = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) for(; i2 < l; i2++){
                for(cur = this[i2]; cur && cur !== context; cur = cur.parentNode)// Always skip document fragments
                if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : // Don't pass non-elements to Sizzle
                cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                    matched.push(cur);
                    break;
                }
            }
            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },
        // Determine the position of an element within the set
        index: function(elem) {
            // No argument, return index in parent
            if (!elem) return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
            // Index in selector
            if (typeof elem === "string") return indexOf.call(jQuery(elem), this[0]);
            // Locate the position of the desired element
            return indexOf.call(this, // If it receives a jQuery object, the first element is used
            elem.jquery ? elem[0] : elem);
        },
        add: function(selector, context) {
            return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
        },
        addBack: function(selector) {
            return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
        }
    });
    function sibling(cur, dir1) {
        while((cur = cur[dir1]) && cur.nodeType !== 1);
        return cur;
    }
    jQuery.each({
        parent: function(elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function(elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function(elem, _i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function(elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function(elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function(elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function(elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function(elem, _i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function(elem, _i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function(elem) {
            return siblings((elem.parentNode || {
            }).firstChild, elem);
        },
        children: function(elem) {
            return siblings(elem.firstChild);
        },
        contents: function(elem) {
            if (elem.contentDocument != null && // Support: IE 11+
            // <object> elements with no `data` attribute has an object
            // `contentDocument` with a `null` prototype.
            getProto(elem.contentDocument)) return elem.contentDocument;
            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) elem = elem.content || elem;
            return jQuery.merge([], elem.childNodes);
        }
    }, function(name, fn) {
        jQuery.fn[name] = function(until, selector) {
            var matched = jQuery.map(this, fn, until);
            if (name.slice(-5) !== "Until") selector = until;
            if (selector && typeof selector === "string") matched = jQuery.filter(selector, matched);
            if (this.length > 1) {
                // Remove duplicates
                if (!guaranteedUnique[name]) jQuery.uniqueSort(matched);
                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) matched.reverse();
            }
            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    // Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {
        };
        jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
            object[flag] = true;
        });
        return object;
    }
    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */ jQuery.Callbacks = function(options) {
        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ? createOptions(options) : jQuery.extend({
        }, options);
        var firing, // Last fire value for non-forgettable lists
        memory, // Flag to know if list was already fired
        fired, // Flag to prevent firing
        locked, // Actual callback list
        list = [], // Queue of execution data for repeatable lists
        queue = [], // Index of currently firing callback (modified by add/remove as needed)
        firingIndex = -1, // Fire callbacks
        fire = function() {
            // Enforce single-firing
            locked = locked || options.once;
            // Execute callbacks for all pending executions,
            // respecting firingIndex overrides and runtime changes
            fired = firing = true;
            for(; queue.length; firingIndex = -1){
                memory = queue.shift();
                while((++firingIndex) < list.length)// Run callback and check for early termination
                if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
                    // Jump to end and forget the data so .add doesn't re-fire
                    firingIndex = list.length;
                    memory = false;
                }
            }
            // Forget the data if we're done with it
            if (!options.memory) memory = false;
            firing = false;
            // Clean up if we're done firing for good
            if (locked) {
                // Keep an empty list if we have data for future add calls
                if (memory) list = [];
                else list = "";
            }
        }, // Actual Callbacks object
        self = {
            // Add a callback or a collection of callbacks to the list
            add: function() {
                if (list) {
                    // If we have memory from a past run, we should fire after adding
                    if (memory && !firing) {
                        firingIndex = list.length - 1;
                        queue.push(memory);
                    }
                    (function add(args) {
                        jQuery.each(args, function(_, arg) {
                            if (isFunction(arg)) {
                                if (!options.unique || !self.has(arg)) list.push(arg);
                            } else if (arg && arg.length && toType(arg) !== "string") // Inspect recursively
                            add(arg);
                        });
                    })(arguments);
                    if (memory && !firing) fire();
                }
                return this;
            },
            // Remove a callback from the list
            remove: function() {
                jQuery.each(arguments, function(_, arg) {
                    var index;
                    while((index = jQuery.inArray(arg, list, index)) > -1){
                        list.splice(index, 1);
                        // Handle firing indexes
                        if (index <= firingIndex) firingIndex--;
                    }
                });
                return this;
            },
            // Check if a given callback is in the list.
            // If no argument is given, return whether or not list has callbacks attached.
            has: function(fn) {
                return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
            },
            // Remove all callbacks from the list
            empty: function() {
                if (list) list = [];
                return this;
            },
            // Disable .fire and .add
            // Abort any current/pending executions
            // Clear all callbacks and values
            disable: function() {
                locked = queue = [];
                list = memory = "";
                return this;
            },
            disabled: function() {
                return !list;
            },
            // Disable .fire
            // Also disable .add unless we have memory (since it would have no effect)
            // Abort any pending executions
            lock: function() {
                locked = queue = [];
                if (!memory && !firing) list = memory = "";
                return this;
            },
            locked: function() {
                return !!locked;
            },
            // Call all callbacks with the given context and arguments
            fireWith: function(context, args) {
                if (!locked) {
                    args = args || [];
                    args = [
                        context,
                        args.slice ? args.slice() : args
                    ];
                    queue.push(args);
                    if (!firing) fire();
                }
                return this;
            },
            // Call all the callbacks with the given arguments
            fire: function() {
                self.fireWith(this, arguments);
                return this;
            },
            // To know if the callbacks have already been called at least once
            fired: function() {
                return !!fired;
            }
        };
        return self;
    };
    function Identity(v) {
        return v;
    }
    function Thrower(ex) {
        throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
        var method;
        try {
            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction(method = value.promise)) method.call(value).done(resolve).fail(reject);
            else if (value && isFunction(method = value.then)) method.call(value, resolve, reject);
            else // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
            // * false: [ value ].slice( 0 ) => resolve( value )
            // * true: [ value ].slice( 1 ) => resolve()
            resolve.apply(undefined, [
                value
            ].slice(noValue));
        // For Promises/A+, convert exceptions into rejections
        // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
        // Deferred#then to conditionally suppress rejection.
        } catch (value1) {
            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [
                value1
            ]);
        }
    }
    jQuery.extend({
        Deferred: function(func) {
            var tuples = [
                // action, add listener, callbacks,
                // ... .then handlers, argument index, [final state]
                [
                    "notify",
                    "progress",
                    jQuery.Callbacks("memory"),
                    jQuery.Callbacks("memory"),
                    2
                ],
                [
                    "resolve",
                    "done",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    0,
                    "resolved"
                ],
                [
                    "reject",
                    "fail",
                    jQuery.Callbacks("once memory"),
                    jQuery.Callbacks("once memory"),
                    1,
                    "rejected"
                ]
            ], state = "pending", promise = {
                state: function() {
                    return state;
                },
                always: function() {
                    deferred.done(arguments).fail(arguments);
                    return this;
                },
                "catch": function(fn) {
                    return promise.then(null, fn);
                },
                // Keep pipe for back-compat
                pipe: function() {
                    var fns = arguments;
                    return jQuery.Deferred(function(newDefer) {
                        jQuery.each(tuples, function(_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];
                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function() {
                                var returned = fn && fn.apply(this, arguments);
                                if (returned && isFunction(returned.promise)) returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                                else newDefer[tuple[0] + "With"](this, fn ? [
                                    returned
                                ] : arguments);
                            });
                        });
                        fns = null;
                    }).promise();
                },
                then: function(onFulfilled, onRejected, onProgress) {
                    var maxDepth = 0;
                    function resolve(depth, deferred, handler, special) {
                        return function() {
                            var that = this, args = arguments, mightThrow = function() {
                                var returned, then;
                                // Support: Promises/A+ section 2.3.3.3.3
                                // https://promisesaplus.com/#point-59
                                // Ignore double-resolution attempts
                                if (depth < maxDepth) return;
                                returned = handler.apply(that, args);
                                // Support: Promises/A+ section 2.3.1
                                // https://promisesaplus.com/#point-48
                                if (returned === deferred.promise()) throw new TypeError("Thenable self-resolution");
                                // Support: Promises/A+ sections 2.3.3.1, 3.5
                                // https://promisesaplus.com/#point-54
                                // https://promisesaplus.com/#point-75
                                // Retrieve `then` only once
                                then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                                // Handle a returned thenable
                                if (isFunction(then)) {
                                    // Special processors (notify) just wait for resolution
                                    if (special) then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));
                                    else {
                                        // ...and disregard older resolution values
                                        maxDepth++;
                                        then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
                                    }
                                } else {
                                    // Only substitute handlers pass on context
                                    // and multiple values (non-spec behavior)
                                    if (handler !== Identity) {
                                        that = undefined;
                                        args = [
                                            returned
                                        ];
                                    }
                                    // Process the value(s)
                                    // Default process is resolve
                                    (special || deferred.resolveWith)(that, args);
                                }
                            }, // Only normal processors (resolve) catch and reject exceptions
                            process = special ? mightThrow : function() {
                                try {
                                    mightThrow();
                                } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) jQuery.Deferred.exceptionHook(e, process.stackTrace);
                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                        // Only substitute handlers pass on context
                                        // and multiple values (non-spec behavior)
                                        if (handler !== Thrower) {
                                            that = undefined;
                                            args = [
                                                e
                                            ];
                                        }
                                        deferred.rejectWith(that, args);
                                    }
                                }
                            };
                            // Support: Promises/A+ section 2.3.3.3.1
                            // https://promisesaplus.com/#point-57
                            // Re-resolve promises immediately to dodge false rejection from
                            // subsequent errors
                            if (depth) process();
                            else {
                                // Call an optional hook to record the stack, in case of exception
                                // since it's otherwise lost when execution goes async
                                if (jQuery.Deferred.getStackHook) process.stackTrace = jQuery.Deferred.getStackHook();
                                window.setTimeout(process);
                            }
                        };
                    }
                    return jQuery.Deferred(function(newDefer) {
                        // progress_handlers.add( ... )
                        tuples[0][3].add(resolve(0, newDefer, isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));
                        // fulfilled_handlers.add( ... )
                        tuples[1][3].add(resolve(0, newDefer, isFunction(onFulfilled) ? onFulfilled : Identity));
                        // rejected_handlers.add( ... )
                        tuples[2][3].add(resolve(0, newDefer, isFunction(onRejected) ? onRejected : Thrower));
                    }).promise();
                },
                // Get a promise for this deferred
                // If obj is provided, the promise aspect is added to the object
                promise: function(obj) {
                    return obj != null ? jQuery.extend(obj, promise) : promise;
                }
            }, deferred = {
            };
            // Add list-specific methods
            jQuery.each(tuples, function(i2, tuple) {
                var list = tuple[2], stateString = tuple[5];
                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;
                // Handle state
                if (stateString) list.add(function() {
                    // state = "resolved" (i.e., fulfilled)
                    // state = "rejected"
                    state = stateString;
                }, // rejected_callbacks.disable
                // fulfilled_callbacks.disable
                tuples[3 - i2][2].disable, // rejected_handlers.disable
                // fulfilled_handlers.disable
                tuples[3 - i2][3].disable, // progress_callbacks.lock
                tuples[0][2].lock, // progress_handlers.lock
                tuples[0][3].lock);
                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);
                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function() {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };
                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });
            // Make the deferred a promise
            promise.promise(deferred);
            // Call given func if any
            if (func) func.call(deferred, deferred);
            // All done!
            return deferred;
        },
        // Deferred helper
        when: function(singleValue) {
            var // count of uncompleted subordinates
            remaining = arguments.length, // count of unprocessed arguments
            i2 = remaining, // subordinate fulfillment data
            resolveContexts = Array(i2), resolveValues = slice.call(arguments), // the primary Deferred
            primary = jQuery.Deferred(), // subordinate callback factory
            updateFunc = function(i3) {
                return function(value) {
                    resolveContexts[i3] = this;
                    resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
                    if (!--remaining) primary.resolveWith(resolveContexts, resolveValues);
                };
            };
            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, primary.done(updateFunc(i2)).resolve, primary.reject, !remaining);
                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (primary.state() === "pending" || isFunction(resolveValues[i2] && resolveValues[i2].then)) return primary.then();
            }
            // Multiple arguments are aggregated like Promise.all array elements
            while(i2--)adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
            return primary.promise();
        }
    });
    // These usually indicate a programmer mistake during development,
    // warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, stack) {
        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
    };
    jQuery.readyException = function(error) {
        window.setTimeout(function() {
            throw error;
        });
    };
    // The deferred used on DOM ready
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn) {
        readyList.then(fn)// Wrap jQuery.readyException in a function so that the lookup
        // happens at the time of error handling instead of callback
        // registration.
        .catch(function(error) {
            jQuery.readyException(error);
        });
        return this;
    };
    jQuery.extend({
        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,
        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,
        // Handle when the DOM is ready
        ready: function(wait) {
            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) return;
            // Remember that the DOM is ready
            jQuery.isReady = true;
            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && (--jQuery.readyWait) > 0) return;
            // If there are functions bound, to execute
            readyList.resolveWith(document, [
                jQuery
            ]);
        }
    });
    jQuery.ready.then = readyList.then;
    // The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
    }
    // Catch cases where $(document).ready() is called
    // after the browser event has already occurred.
    // Support: IE <=9 - 10 only
    // Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) // Handle it asynchronously to allow scripts the opportunity to delay ready
    window.setTimeout(jQuery.ready);
    else {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);
        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed);
    }
    // Multifunctional method to get and set values of a collection
    // The value/s can optionally be executed if it's a function
    var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
        var i2 = 0, len = elems.length, bulk = key == null;
        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for(i2 in key)access(elems, fn, i2, key[i2], true, emptyGet, raw);
        // Sets one value
        } else if (value !== undefined) {
            chainable = true;
            if (!isFunction(value)) raw = true;
            if (bulk) {
                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;
                // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function(elem, _key, value1) {
                        return bulk.call(jQuery(elem), value1);
                    };
                }
            }
            if (fn) for(; i2 < len; i2++)fn(elems[i2], key, raw ? value : value.call(elems[i2], i2, fn(elems[i2], key)));
        }
        if (chainable) return elems;
        // Gets
        if (bulk) return fn.call(elems);
        return len ? fn(elems[0], key) : emptyGet;
    };
    // Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    // Used by camelCase as callback to replace()
    function fcamelCase(_all, letter) {
        return letter.toUpperCase();
    }
    // Convert dashed to camelCase; used by the css and data modules
    // Support: IE <=9 - 11, Edge 12 - 15
    // Microsoft forgot to hump their vendor prefix (#9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
        cache: function(owner) {
            // Check if the owner object already has a cache
            var value = owner[this.expando];
            // If not, create one
            if (!value) {
                value = {
                };
                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) owner[this.expando] = value;
                    else Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true
                    });
                }
            }
            return value;
        },
        set: function(owner, data, value) {
            var prop, cache = this.cache(owner);
            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") cache[camelCase(data)] = value;
            else // Copy the properties one-by-one to the cache object
            for(prop in data)cache[camelCase(prop)] = data[prop];
            return cache;
        },
        get: function(owner, key) {
            return key === undefined ? this.cache(owner) : // Always use camelCase key (gh-2257)
            owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function(owner, key, value) {
            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined || key && typeof key === "string" && value === undefined) return this.get(owner, key);
            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);
            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function(owner, key) {
            var i2, cache = owner[this.expando];
            if (cache === undefined) return;
            if (key !== undefined) {
                // Support array or space separated string of keys
                if (Array.isArray(key)) // If key is an array of keys...
                // We always set camelCase keys, so remove that.
                key = key.map(camelCase);
                else {
                    key = camelCase(key);
                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [
                        key
                    ] : key.match(rnothtmlwhite) || [];
                }
                i2 = key.length;
                while(i2--)delete cache[key[i2]];
            }
            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {
                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) owner[this.expando] = undefined;
                else delete owner[this.expando];
            }
        },
        hasData: function(owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    //	Implementation Summary
    //
    //	1. Enforce API surface and semantic compatibility with 1.9.x branch
    //	2. Improve the module's maintainability by reducing the storage
    //		paths to a single mechanism.
    //	3. Use the same single mechanism to support "private" and "user" data.
    //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
    //	5. Avoid exposing implementation details on user objects (eg. expando properties)
    //	6. Provide a clear path for implementation upgrade to WeakMap in 2014
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
        if (data === "true") return true;
        if (data === "false") return false;
        if (data === "null") return null;
        // Only convert to a number if it doesn't change the string
        if (data === +data + "") return +data;
        if (rbrace.test(data)) return JSON.parse(data);
        return data;
    }
    function dataAttr(elem, key, data) {
        var name;
        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);
            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {
                }
                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else data = undefined;
        }
        return data;
    }
    jQuery.extend({
        hasData: function(elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },
        data: function(elem, name, data) {
            return dataUser.access(elem, name, data);
        },
        removeData: function(elem, name) {
            dataUser.remove(elem, name);
        },
        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function(elem, name, data) {
            return dataPriv.access(elem, name, data);
        },
        _removeData: function(elem, name) {
            dataPriv.remove(elem, name);
        }
    });
    jQuery.fn.extend({
        data: function(key, value) {
            var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);
                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i2 = attrs.length;
                        while(i2--)// Support: IE 11 only
                        // The attrs elements can be null (#14894)
                        if (attrs[i2]) {
                            name = attrs[i2].name;
                            if (name.indexOf("data-") === 0) {
                                name = camelCase(name.slice(5));
                                dataAttr(elem, name, data[name]);
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }
                return data;
            }
            // Sets multiple values
            if (typeof key === "object") return this.each(function() {
                dataUser.set(this, key);
            });
            return access(this, function(value1) {
                var data1;
                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value1 === undefined) {
                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data1 = dataUser.get(elem, key);
                    if (data1 !== undefined) return data1;
                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data1 = dataAttr(elem, key);
                    if (data1 !== undefined) return data1;
                    // We tried really hard, but the data doesn't exist.
                    return;
                }
                // Set the data...
                this.each(function() {
                    // We always store the camelCased key
                    dataUser.set(this, key, value1);
                });
            }, null, value, arguments.length > 1, null, true);
        },
        removeData: function(key) {
            return this.each(function() {
                dataUser.remove(this, key);
            });
        }
    });
    jQuery.extend({
        queue: function(elem, type, data) {
            var queue;
            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);
                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    else queue.push(data);
                }
                return queue || [];
            }
        },
        dequeue: function(elem, type) {
            type = type || "fx";
            var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
                jQuery.dequeue(elem, type);
            };
            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }
            if (fn) {
                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") queue.unshift("inprogress");
                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }
            if (!startLength && hooks) hooks.empty.fire();
        },
        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function(elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function() {
                    dataPriv.remove(elem, [
                        type + "queue",
                        key
                    ]);
                })
            });
        }
    });
    jQuery.fn.extend({
        queue: function(type, data) {
            var setter = 2;
            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }
            if (arguments.length < setter) return jQuery.queue(this[0], type);
            return data === undefined ? this : this.each(function() {
                var queue = jQuery.queue(this, type, data);
                // Ensure a hooks for this queue
                jQuery._queueHooks(this, type);
                if (type === "fx" && queue[0] !== "inprogress") jQuery.dequeue(this, type);
            });
        },
        dequeue: function(type) {
            return this.each(function() {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function(type) {
            return this.queue(type || "fx", []);
        },
        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function(type, obj) {
            var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i2 = this.length, resolve = function() {
                if (!--count) defer.resolveWith(elements, [
                    elements
                ]);
            };
            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";
            while(i2--){
                tmp = dataPriv.get(elements[i2], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = [
        "Top",
        "Right",
        "Bottom",
        "Left"
    ];
    var documentElement = document.documentElement;
    var isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem);
    }, composed = {
        composed: true
    };
    // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
    // Check attachment across shadow DOM boundaries when possible (gh-3504)
    // Support: iOS 10.0-10.2 only
    // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
    // leading to errors. We need to check for `getRootNode`.
    if (documentElement.getRootNode) isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
    };
    var isHiddenWithinTree = function(elem, el) {
        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;
        // Inline style trumps all
        return elem.style.display === "none" || elem.style.display === "" && // Otherwise, check computed style
        // Support: Firefox <=43 - 45
        // Disconnected elements can have computed display: none, so first confirm that elem is
        // in the document.
        isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
            return tween.cur();
        } : function() {
            return jQuery.css(elem, prop, "");
        }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), // Starting value computation is required for potential unit mismatches
        initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
        if (initialInUnit && initialInUnit[3] !== unit) {
            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;
            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];
            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;
            while(maxIterations--){
                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) maxIterations = 0;
                initialInUnit = initialInUnit / scale;
            }
            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);
            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }
        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;
            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }
    var defaultDisplayMap = {
    };
    function getDefaultDisplay(elem) {
        var temp, doc = elem.ownerDocument, nodeName1 = elem.nodeName, display = defaultDisplayMap[nodeName1];
        if (display) return display;
        temp = doc.body.appendChild(doc.createElement(nodeName1));
        display = jQuery.css(temp, "display");
        temp.parentNode.removeChild(temp);
        if (display === "none") display = "block";
        defaultDisplayMap[nodeName1] = display;
        return display;
    }
    function showHide(elements, show) {
        var display, elem, values = [], index = 0, length = elements.length;
        // Determine new display value for elements that need to change
        for(; index < length; index++){
            elem = elements[index];
            if (!elem.style) continue;
            display = elem.style.display;
            if (show) {
                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) elem.style.display = "";
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) values[index] = getDefaultDisplay(elem);
            } else if (display !== "none") {
                values[index] = "none";
                // Remember what we're overwriting
                dataPriv.set(elem, "display", display);
            }
        }
        // Set the display of the elements in a second loop to avoid constant reflow
        for(index = 0; index < length; index++)if (values[index] != null) elements[index].style.display = values[index];
        return elements;
    }
    jQuery.fn.extend({
        show: function() {
            return showHide(this, true);
        },
        hide: function() {
            return showHide(this);
        },
        toggle: function(state) {
            if (typeof state === "boolean") return state ? this.show() : this.hide();
            return this.each(function() {
                if (isHiddenWithinTree(this)) jQuery(this).show();
                else jQuery(this).hide();
            });
        }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
        var fragment = document.createDocumentFragment(), div = fragment.appendChild(document.createElement("div")), input = document.createElement("input");
        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");
        div.appendChild(input);
        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
        // Support: IE <=9 only
        // IE <=9 replaces <option> tags with their contents when inserted outside of
        // the select element.
        div.innerHTML = "<option></option>";
        support.option = !!div.lastChild;
    })();
    // We have to close these tags to support XHTML (#13200)
    var wrapMap = {
        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [
            1,
            "<table>",
            "</table>"
        ],
        col: [
            2,
            "<table><colgroup>",
            "</colgroup></table>"
        ],
        tr: [
            2,
            "<table><tbody>",
            "</tbody></table>"
        ],
        td: [
            3,
            "<table><tbody><tr>",
            "</tr></tbody></table>"
        ],
        _default: [
            0,
            "",
            ""
        ]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    // Support: IE <=9 only
    if (!support.option) wrapMap.optgroup = wrapMap.option = [
        1,
        "<select multiple='multiple'>",
        "</select>"
    ];
    function getAll(context, tag) {
        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;
        if (typeof context.getElementsByTagName !== "undefined") ret = context.getElementsByTagName(tag || "*");
        else if (typeof context.querySelectorAll !== "undefined") ret = context.querySelectorAll(tag || "*");
        else ret = [];
        if (tag === undefined || tag && nodeName(context, tag)) return jQuery.merge([
            context
        ], ret);
        return ret;
    }
    // Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i2 = 0, l = elems.length;
        for(; i2 < l; i2++)dataPriv.set(elems[i2], "globalEval", !refElements || dataPriv.get(refElements[i2], "globalEval"));
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, attached, j, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l = elems.length;
        for(; i2 < l; i2++){
            elem = elems[i2];
            if (elem || elem === 0) {
                // Add nodes directly
                if (toType(elem) === "object") // Support: Android <=4.0 only, PhantomJS 1 only
                // push.apply(_, arraylike) throws on ancient WebKit
                jQuery.merge(nodes, elem.nodeType ? [
                    elem
                ] : elem);
                else if (!rhtml.test(elem)) nodes.push(context.createTextNode(elem));
                else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));
                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || [
                        "",
                        ""
                    ])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while(j--)tmp = tmp.lastChild;
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);
                    // Remember the top-level container
                    tmp = fragment.firstChild;
                    // Ensure the created nodes are orphaned (#12392)
                    tmp.textContent = "";
                }
            }
        }
        // Remove wrapper from fragment
        fragment.textContent = "";
        i2 = 0;
        while(elem = nodes[i2++]){
            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) ignored.push(elem);
                continue;
            }
            attached = isAttached(elem);
            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");
            // Preserve script evaluation history
            if (attached) setGlobalEval(tmp);
            // Capture executables
            if (scripts) {
                j = 0;
                while(elem = tmp[j++])if (rscriptType.test(elem.type || "")) scripts.push(elem);
            }
        }
        return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
        return true;
    }
    function returnFalse() {
        return false;
    }
    // Support: IE <=9 - 11+
    // focus() and blur() are asynchronous, except when they are no-op.
    // So expect focus to be synchronous when the element is already active,
    // and blur to be synchronous when the element is not already active.
    // (focus and blur are always synchronous in other supported browsers,
    // this just defines when we can count on it).
    function expectSync(elem, type) {
        return elem === safeActiveElement() === (type === "focus");
    }
    // Support: IE <=9 only
    // Accessing document.activeElement can throw unexpectedly
    // https://bugs.jquery.com/ticket/13393
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {
        }
    }
    function on(elem, types, selector, data, fn, one) {
        var origFn, type;
        // Types can be a map of types/handlers
        if (typeof types === "object") {
            // ( types-Object, selector, data )
            if (typeof selector !== "string") {
                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for(type in types)on(elem, type, selector, data, types[type], one);
            return elem;
        }
        if (data == null && fn == null) {
            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {
                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {
                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) fn = returnFalse;
        else if (!fn) return elem;
        if (one === 1) {
            origFn = fn;
            fn = function(event) {
                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };
            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function() {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }
    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */ jQuery.event = {
        global: {
        },
        add: function(elem, types, handler, data, selector) {
            var handleObjIn, eventHandle, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
            // Only attach events to objects that accept data
            if (!acceptData(elem)) return;
            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }
            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) jQuery.find.matchesSelector(documentElement, selector);
            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) handler.guid = jQuery.guid++;
            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) events = elemData.events = Object.create(null);
            if (!(eventHandle = elemData.handle)) eventHandle = elemData.handle = function(e) {
                // Discard the second event of a jQuery.event.trigger() and
                // when an event is called after a page has unloaded
                return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
            };
            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // There *must* be a type, no attaching namespace-only handlers
                if (!type) continue;
                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {
                };
                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;
                // Update special based on newly reset type
                special = jQuery.event.special[type] || {
                };
                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);
                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;
                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                        if (elem.addEventListener) elem.addEventListener(type, eventHandle);
                    }
                }
                if (special.add) {
                    special.add.call(elem, handleObj);
                    if (!handleObj.handler.guid) handleObj.handler.guid = handler.guid;
                }
                // Add to the element's handler list, delegates in front
                if (selector) handlers.splice(handlers.delegateCount++, 0, handleObj);
                else handlers.push(handleObj);
                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }
        },
        // Detach an event or set of events from an element
        remove: function(elem, types, handler, selector, mappedTypes) {
            var j, origCount, tmp, events, t, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
            if (!elemData || !(events = elemData.events)) return;
            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [
                ""
            ];
            t = types.length;
            while(t--){
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();
                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for(type in events)jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    continue;
                }
                special = jQuery.event.special[type] || {
                };
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
                // Remove matching events
                origCount = j = handlers.length;
                while(j--){
                    handleObj = handlers[j];
                    if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);
                        if (handleObj.selector) handlers.delegateCount--;
                        if (special.remove) special.remove.call(elem, handleObj);
                    }
                }
                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) jQuery.removeEvent(elem, type, elemData.handle);
                    delete events[type];
                }
            }
            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) dataPriv.remove(elem, "handle events");
        },
        dispatch: function(nativeEvent) {
            var i2, j, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), // Make a writable jQuery.Event from the native event object
            event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {
            };
            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;
            for(i2 = 1; i2 < arguments.length; i2++)args[i2] = arguments[i2];
            event.delegateTarget = this;
            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) return;
            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);
            // Run delegates first; they may want to stop propagation beneath us
            i2 = 0;
            while((matched = handlerQueue[i2++]) && !event.isPropagationStopped()){
                event.currentTarget = matched.elem;
                j = 0;
                while((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped())// If the event is namespaced, then each handler is only invoked if it is
                // specially universal or its namespaces are a superset of the event's.
                if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
                    event.handleObj = handleObj;
                    event.data = handleObj.data;
                    ret = ((jQuery.event.special[handleObj.origType] || {
                    }).handle || handleObj.handler).apply(matched.elem, args);
                    if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                    }
                }
            }
            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) special.postDispatch.call(this, event);
            return event.result;
        },
        handlers: function(event, handlers) {
            var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
            // Find delegate handlers
            if (delegateCount && // Support: IE <=9
            // Black-hole SVG <use> instance trees (trac-13180)
            cur.nodeType && // Support: Firefox <=42
            // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
            // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
            // Support: IE 11 only
            // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
            !(event.type === "click" && event.button >= 1)) {
                for(; cur !== this; cur = cur.parentNode || this)// Don't check non-elements (#13208)
                // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                    matchedHandlers = [];
                    matchedSelectors = {
                    };
                    for(i2 = 0; i2 < delegateCount; i2++){
                        handleObj = handlers[i2];
                        // Don't conflict with Object.prototype properties (#13203)
                        sel = handleObj.selector + " ";
                        if (matchedSelectors[sel] === undefined) matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [
                            cur
                        ]).length;
                        if (matchedSelectors[sel]) matchedHandlers.push(handleObj);
                    }
                    if (matchedHandlers.length) handlerQueue.push({
                        elem: cur,
                        handlers: matchedHandlers
                    });
                }
            }
            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) handlerQueue.push({
                elem: cur,
                handlers: handlers.slice(delegateCount)
            });
            return handlerQueue;
        },
        addProp: function(name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,
                get: isFunction(hook) ? function() {
                    if (this.originalEvent) return hook(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[name];
                },
                set: function(value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },
        fix: function(originalEvent) {
            return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
        },
        special: {
            load: {
                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            click: {
                // Utilize native event to ensure correct state for checkable inputs
                setup: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Claim the first handler
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) // dataPriv.set( el, "click", ... )
                    leverageNative(el, "click", returnTrue);
                    // Return false to allow normal processing in the caller
                    return false;
                },
                trigger: function(data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data;
                    // Force setup before triggering a click
                    if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) leverageNative(el, "click");
                    // Return non-false to allow normal event-path propagation
                    return true;
                },
                // For cross-browser consistency, suppress native .click() on links
                // Also prevent it if we're currently inside a leveraged native-event stack
                _default: function(event) {
                    var target = event.target;
                    return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) event.originalEvent.returnValue = event.result;
                }
            }
        }
    };
    // Ensure the presence of an event listener that handles manually-triggered
    // synthetic events by interrupting progress until reinvoked in response to
    // *native* events that it fires directly, ensuring that state changes have
    // already occurred before other listeners are invoked.
    function leverageNative(el, type, expectSync1) {
        // Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
        if (!expectSync1) {
            if (dataPriv.get(el, type) === undefined) jQuery.event.add(el, type, returnTrue);
            return;
        }
        // Register the controller as a special universal handler for all event namespaces
        dataPriv.set(el, type, false);
        jQuery.event.add(el, type, {
            namespace: false,
            handler: function(event) {
                var notAsync, result, saved = dataPriv.get(this, type);
                if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    // Saved data should be false in such cases, but might be a leftover capture object
                    // from an async native handler (gh-4350)
                    if (!saved.length) {
                        // Store arguments for use when handling the inner native event
                        // There will always be at least one argument (an event object), so this array
                        // will not be confused with a leftover capture object.
                        saved = slice.call(arguments);
                        dataPriv.set(this, type, saved);
                        // Trigger the native event and capture its result
                        // Support: IE <=9 - 11+
                        // focus() and blur() are asynchronous
                        notAsync = expectSync1(this, type);
                        this[type]();
                        result = dataPriv.get(this, type);
                        if (saved !== result || notAsync) dataPriv.set(this, type, false);
                        else result = {
                        };
                        if (saved !== result) {
                            // Cancel the outer synthetic event
                            event.stopImmediatePropagation();
                            event.preventDefault();
                            // Support: Chrome 86+
                            // In Chrome, if an element having a focusout handler is blurred by
                            // clicking outside of it, it invokes the handler synchronously. If
                            // that handler calls `.remove()` on the element, the data is cleared,
                            // leaving `result` undefined. We need to guard against this.
                            return result && result.value;
                        }
                    // If this is an inner synthetic event for an event with a bubbling surrogate
                    // (focus or blur), assume that the surrogate already propagated from triggering the
                    // native event and prevent that from happening again here.
                    // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                    // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                    // less bad than duplication.
                    } else if ((jQuery.event.special[type] || {
                    }).delegateType) event.stopPropagation();
                // If this is a native event triggered above, everything is now in order
                // Fire an inner synthetic event with the original arguments
                } else if (saved.length) {
                    // ...and capture the result
                    dataPriv.set(this, type, {
                        value: jQuery.event.trigger(// Support: IE <=9 - 11+
                        // Extend with the prototype to reset the above stopImmediatePropagation()
                        jQuery.extend(saved[0], jQuery.Event.prototype), saved.slice(1), this)
                    });
                    // Abort handling of the native event
                    event.stopImmediatePropagation();
                }
            }
        });
    }
    jQuery.removeEvent = function(elem, type, handle) {
        // This "if" is needed for plain objects
        if (elem.removeEventListener) elem.removeEventListener(type, handle);
    };
    jQuery.Event = function(src, props) {
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) return new jQuery.Event(src, props);
        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;
            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined && // Support: Android <=2.3 only
            src.returnValue === false ? returnTrue : returnFalse;
            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (#504, #13143)
            this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;
        // Event type
        } else this.type = src;
        // Put explicitly provided properties onto the event object
        if (props) jQuery.extend(this, props);
        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();
        // Mark it as fixed
        this[jQuery.expando] = true;
    };
    // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
    // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = returnTrue;
            if (e && !this.isSimulated) e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = returnTrue;
            if (e && !this.isSimulated) e.stopImmediatePropagation();
            this.stopPropagation();
        }
    };
    // Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        code: true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,
        which: true
    }, jQuery.event.addProp);
    jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(type, delegateType) {
        jQuery.event.special[type] = {
            // Utilize native event if possible so blur/focus sequence is correct
            setup: function() {
                // Claim the first handler
                // dataPriv.set( this, "focus", ... )
                // dataPriv.set( this, "blur", ... )
                leverageNative(this, type, expectSync);
                // Return false to allow normal processing in the caller
                return false;
            },
            trigger: function() {
                // Force setup before trigger
                leverageNative(this, type);
                // Return non-false to allow normal event-path propagation
                return true;
            },
            // Suppress native focus or blur as it's already being fired
            // in leverageNative.
            _default: function() {
                return true;
            },
            delegateType: delegateType
        };
    });
    // Create mouseenter/leave events using mouseover/out and event-time checks
    // so that event delegation works in jQuery.
    // Do the same for pointerenter/pointerleave and pointerover/pointerout
    //
    // Support: Safari 7 only
    // Safari sends mouseenter too often; see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
    // for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function(event) {
                var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || related !== target && !jQuery.contains(target, related)) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });
    jQuery.fn.extend({
        on: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function(types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function(types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {
                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
                return this;
            }
            if (typeof types === "object") {
                // ( types-object [, selector] )
                for(type in types)this.off(type, selector, types[type]);
                return this;
            }
            if (selector === false || typeof selector === "function") {
                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) fn = returnFalse;
            return this.each(function() {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });
    var // Support: IE <=10 - 11, Edge 12 - 13 only
    // In IE/Edge using regex groups here causes severe slowdowns.
    // See https://connect.microsoft.com/IE/feedback/details/1736512/
    rnoInnerhtml = /<script|<style|<link/i, // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    // Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) return jQuery(elem).children("tbody")[0] || elem;
        return elem;
    }
    // Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }
    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") elem.type = elem.type.slice(5);
        else elem.removeAttribute("type");
        return elem;
    }
    function cloneCopyEvent(src, dest) {
        var i2, l, type, pdataOld, udataOld, udataCur, events;
        if (dest.nodeType !== 1) return;
        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.get(src);
            events = pdataOld.events;
            if (events) {
                dataPriv.remove(dest, "handle events");
                for(type in events)for(i2 = 0, l = events[type].length; i2 < l; i2++)jQuery.event.add(dest, type, events[type][i2]);
            }
        }
        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({
            }, udataOld);
            dataUser.set(dest, udataCur);
        }
    }
    // Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName1 = dest.nodeName.toLowerCase();
        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName1 === "input" && rcheckableType.test(src.type)) dest.checked = src.checked;
        else if (nodeName1 === "input" || nodeName1 === "textarea") dest.defaultValue = src.defaultValue;
    }
    function domManip(collection, args, callback, ignored) {
        // Flatten any nested arrays
        args = flat(args);
        var fragment, first, scripts, hasScripts, node2, doc, i2 = 0, l = collection.length, iNoClone = l - 1, value = args[0], valueIsFunction = isFunction(value);
        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) return collection.each(function(index) {
            var self = collection.eq(index);
            if (valueIsFunction) args[0] = value.call(this, index, self.html());
            domManip(self, args, callback, ignored);
        });
        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;
            if (fragment.childNodes.length === 1) fragment = first;
            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;
                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for(; i2 < l; i2++){
                    node2 = fragment;
                    if (i2 !== iNoClone) {
                        node2 = jQuery.clone(node2, true, true);
                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node2, "script"));
                    }
                    callback.call(collection[i2], node2, i2);
                }
                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;
                    // Reenable scripts
                    jQuery.map(scripts, restoreScript);
                    // Evaluate executable scripts on first document insertion
                    for(i2 = 0; i2 < hasScripts; i2++){
                        node2 = scripts[i2];
                        if (rscriptType.test(node2.type || "") && !dataPriv.access(node2, "globalEval") && jQuery.contains(doc, node2)) {
                            if (node2.src && (node2.type || "").toLowerCase() !== "module") // Optional AJAX dependency, but won't run scripts if not present
                            {
                                if (jQuery._evalUrl && !node2.noModule) jQuery._evalUrl(node2.src, {
                                    nonce: node2.nonce || node2.getAttribute("nonce")
                                }, doc);
                            } else DOMEval(node2.textContent.replace(rcleanScript, ""), node2, doc);
                        }
                    }
                }
            }
        }
        return collection;
    }
    function remove(elem, selector, keepData) {
        var node2, nodes = selector ? jQuery.filter(selector, elem) : elem, i2 = 0;
        for(; (node2 = nodes[i2]) != null; i2++){
            if (!keepData && node2.nodeType === 1) jQuery.cleanData(getAll(node2));
            if (node2.parentNode) {
                if (keepData && isAttached(node2)) setGlobalEval(getAll(node2, "script"));
                node2.parentNode.removeChild(node2);
            }
        }
        return elem;
    }
    jQuery.extend({
        htmlPrefilter: function(html) {
            return html;
        },
        clone: function(elem, dataAndEvents, deepDataAndEvents) {
            var i2, l, srcElements, destElements, clone = elem.cloneNode(true), inPage = isAttached(elem);
            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);
                for(i2 = 0, l = srcElements.length; i2 < l; i2++)fixInput(srcElements[i2], destElements[i2]);
            }
            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);
                    for(i2 = 0, l = srcElements.length; i2 < l; i2++)cloneCopyEvent(srcElements[i2], destElements[i2]);
                } else cloneCopyEvent(elem, clone);
            }
            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            // Return the cloned set
            return clone;
        },
        cleanData: function(elems) {
            var data, elem, type, special = jQuery.event.special, i2 = 0;
            for(; (elem = elems[i2]) !== undefined; i2++)if (acceptData(elem)) {
                if (data = elem[dataPriv.expando]) {
                    if (data.events) {
                        for(type in data.events)if (special[type]) jQuery.event.remove(elem, type);
                        else jQuery.removeEvent(elem, type, data.handle);
                    }
                    // Support: Chrome <=35 - 45+
                    // Assign undefined instead of using delete, see Data#remove
                    elem[dataPriv.expando] = undefined;
                }
                if (elem[dataUser.expando]) // Support: Chrome <=35 - 45+
                // Assign undefined instead of using delete, see Data#remove
                elem[dataUser.expando] = undefined;
            }
        }
    });
    jQuery.fn.extend({
        detach: function(selector) {
            return remove(this, selector, true);
        },
        remove: function(selector) {
            return remove(this, selector);
        },
        text: function(value) {
            return access(this, function(value1) {
                return value1 === undefined ? jQuery.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) this.textContent = value1;
                });
            }, null, value, arguments.length);
        },
        append: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },
        prepend: function() {
            return domManip(this, arguments, function(elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },
        before: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this);
            });
        },
        after: function() {
            return domManip(this, arguments, function(elem) {
                if (this.parentNode) this.parentNode.insertBefore(elem, this.nextSibling);
            });
        },
        empty: function() {
            var elem, i2 = 0;
            for(; (elem = this[i2]) != null; i2++)if (elem.nodeType === 1) {
                // Prevent memory leaks
                jQuery.cleanData(getAll(elem, false));
                // Remove any remaining nodes
                elem.textContent = "";
            }
            return this;
        },
        clone: function(dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
            return this.map(function() {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },
        html: function(value) {
            return access(this, function(value1) {
                var elem = this[0] || {
                }, i2 = 0, l = this.length;
                if (value1 === undefined && elem.nodeType === 1) return elem.innerHTML;
                // See if we can take a shortcut and just use innerHTML
                if (typeof value1 === "string" && !rnoInnerhtml.test(value1) && !wrapMap[(rtagName.exec(value1) || [
                    "",
                    ""
                ])[1].toLowerCase()]) {
                    value1 = jQuery.htmlPrefilter(value1);
                    try {
                        for(; i2 < l; i2++){
                            elem = this[i2] || {
                            };
                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value1;
                            }
                        }
                        elem = 0;
                    // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {
                    }
                }
                if (elem) this.empty().append(value1);
            }, null, value, arguments.length);
        },
        replaceWith: function() {
            var ignored = [];
            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function(elem) {
                var parent = this.parentNode;
                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) parent.replaceChild(elem, this);
                }
            // Force callback invocation
            }, ignored);
        }
    });
    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(name, original) {
        jQuery.fn[name] = function(selector) {
            var elems, ret = [], insert = jQuery(selector), last = insert.length - 1, i2 = 0;
            for(; i2 <= last; i2++){
                elems = i2 === last ? this : this.clone(true);
                jQuery(insert[i2])[original](elems);
                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }
            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var getStyles = function(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) view = window;
        return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
        var ret, name, old = {
        };
        // Remember the old values, and insert the new ones
        for(name in options){
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }
        ret = callback.call(elem);
        // Revert the old values
        for(name in options)elem.style[name] = old[name];
        return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {
            // This is a singleton, we need to execute it only once
            if (!div) return;
            container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
            div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);
            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";
            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            // Support: Chrome <=64
            // Don't get tricked when zoom affects offsetWidth (gh-4029)
            div.style.position = "absolute";
            scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
            documentElement.removeChild(container);
            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }
        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }
        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document.createElement("div"), div = document.createElement("div");
        // Finish early in limited (non-browser) environments
        if (!div.style) return;
        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";
        jQuery.extend(support, {
            boxSizingReliable: function() {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function() {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function() {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function() {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function() {
                computeStyleTests();
                return scrollboxSizeVal;
            },
            // Support: IE 9 - 11+, Edge 15 - 18+
            // IE/Edge misreport `getComputedStyle` of table rows with width/height
            // set in CSS while `offset*` properties report correct values.
            // Behavior in IE 9 is more subtle than in newer versions & it passes
            // some versions of this test; make sure not to make it pass there!
            //
            // Support: Firefox 70+
            // Only Firefox includes border widths
            // in computed dimensions. (gh-4529)
            reliableTrDimensions: function() {
                var table, tr, trChild, trStyle;
                if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table");
                    tr = document.createElement("tr");
                    trChild = document.createElement("div");
                    table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                    tr.style.cssText = "border:1px solid";
                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px";
                    trChild.style.height = "9px";
                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is display: block
                    // gets around this issue.
                    trChild.style.display = "block";
                    documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
                    trStyle = window.getComputedStyle(tr);
                    reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
                    documentElement.removeChild(table);
                }
                return reliableTrDimensionsVal;
            }
        });
    })();
    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret, // Support: Firefox 51+
        // Retrieving style before computed somehow
        // fixes an issue with getting wrong values
        // on detached elements
        style = elem.style;
        computed = computed || getStyles(elem);
        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];
            if (ret === "" && !isAttached(elem)) ret = jQuery.style(elem, name);
            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;
                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;
                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }
        return ret !== undefined ? // Support: IE <=9 - 11 only
        // IE returns zIndex value as an integer.
        ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function() {
                if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }
                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }
    var cssPrefixes = [
        "Webkit",
        "Moz",
        "ms"
    ], emptyStyle = document.createElement("div").style, vendorProps = {
    };
    // Return a vendor-prefixed property or undefined
    function vendorPropName(name) {
        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
        while(i2--){
            name = cssPrefixes[i2] + capName;
            if (name in emptyStyle) return name;
        }
    }
    // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
    function finalPropName(name) {
        var final = jQuery.cssProps[name] || vendorProps[name];
        if (final) return final;
        if (name in emptyStyle) return name;
        return vendorProps[name] = vendorPropName(name) || name;
    }
    var // Swappable if display is none or starts with table
    // except "table", "table-cell", or "table-caption"
    // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/, rcustomProp = /^--/, cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, cssNormalTransform = {
        letterSpacing: "0",
        fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ? // Guard against undefined "subtract", e.g., when used as in cssHooks
        Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0;
        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) return 0;
        for(; i2 < 4; i2 += 2){
            // Both box models exclude margin
            if (box === "margin") delta += jQuery.css(elem, box + cssExpand[i2], true, styles);
            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {
                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
                // For "border" or "margin", add border
                if (box !== "padding") delta += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
                else extra += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
            // If we get here with a border-box (content + padding + border), we're seeking "content" or
            // "padding" or "margin"
            } else {
                // For "content", subtract padding
                if (box === "content") delta -= jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
                // For "content" or "padding", subtract border
                if (box !== "margin") delta -= jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
            }
        }
        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
        // Assuming integer scroll gutter, subtract the rest and round down
        delta += Math.max(0, Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5)) || 0;
        return delta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
        // Start with computed style
        var styles = getStyles(elem), // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
        // Fake content-box until we know it's needed to know the true value.
        boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) return val;
            val = "auto";
        }
        // Support: IE 9 - 11 only
        // Use offsetWidth/offsetHeight for when box sizing is unreliable.
        // In those cases, the computed value can be trusted to be border-box.
        if ((!support.boxSizingReliable() && isBorderBox || // Support: IE 10 - 11+, Edge 15 - 18+
        // IE/Edge misreport `getComputedStyle` of table rows with width/height
        // set in CSS while `offset*` properties report correct values.
        // Interestingly, in some cases IE 9 doesn't suffer from this issue.
        !support.reliableTrDimensions() && nodeName(elem, "tr") || // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        val === "auto" || // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && // Make sure the element is visible & connected
        elem.getClientRects().length) {
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
            // Where available, offsetWidth/offsetHeight approximate border box dimensions.
            // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
            // retrieved value as a content box dimension.
            valueIsBorderBox = offsetProp in elem;
            if (valueIsBorderBox) val = elem[offsetProp];
        }
        // Normalize "" and auto
        val = parseFloat(val) || 0;
        // Adjust for the element's box model
        return val + boxModelAdjustment(elem, dimension, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles, // Provide the current computed size to request scroll gutter calculation (gh-3589)
        val) + "px";
    }
    jQuery.extend({
        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function(elem, computed) {
                    if (computed) {
                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },
        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "gridArea": true,
            "gridColumn": true,
            "gridColumnEnd": true,
            "gridColumnStart": true,
            "gridRow": true,
            "gridRowEnd": true,
            "gridRowStart": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },
        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {
        },
        // Get and set the style property on a DOM Node
        style: function(elem, name, value, extra) {
            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) return;
            // Make sure that we're working with the right name
            var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;
                // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);
                    // Fixes bug #9237
                    type = "number";
                }
                // Make sure that null and NaN values aren't set (#7116)
                if (value == null || value !== value) return;
                // If a number was passed in, add the unit (except for certain CSS properties)
                // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                // "px" to a few hardcoded values.
                if (type === "number" && !isCustomProp) value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) style[name] = "inherit";
                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
                    if (isCustomProp) style.setProperty(name, value);
                    else style[name] = value;
                }
            } else {
                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) return ret;
                // Otherwise just get the value from the style object
                return style[name];
            }
        },
        css: function(elem, name, extra, styles) {
            var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) name = finalPropName(origName);
            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) val = hooks.get(elem, true, extra);
            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) val = curCSS(elem, name, styles);
            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) val = cssNormalTransform[name];
            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }
            return val;
        }
    });
    jQuery.each([
        "height",
        "width"
    ], function(_i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function(elem, computed, extra) {
                if (computed) // Certain elements can have dimension info if we invisibly show them
                // but it must have a current display style that would benefit
                return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
                    return getWidthOrHeight(elem, dimension, extra);
                }) : getWidthOrHeight(elem, dimension, extra);
            },
            set: function(elem, value, extra) {
                var matches, styles = getStyles(elem), // Only read styles.position if the test has a chance to fail
                // to avoid forcing a reflow.
                scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(elem, dimension, extra, isBorderBox, styles) : 0;
                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && scrollboxSizeBuggy) subtract -= Math.ceil(elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5);
                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }
                return setPositiveNumber(elem, value, subtract);
            }
        };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function(elem, computed) {
        if (computed) return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, {
            marginLeft: 0
        }, function() {
            return elem.getBoundingClientRect().left;
        })) + "px";
    });
    // These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function(value) {
                var i2 = 0, expanded = {
                }, // Assumes a single number if not a string
                parts = typeof value === "string" ? value.split(" ") : [
                    value
                ];
                for(; i2 < 4; i2++)expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
                return expanded;
            }
        };
        if (prefix !== "margin") jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    });
    jQuery.fn.extend({
        css: function(name, value) {
            return access(this, function(elem, name1, value1) {
                var styles, len, map = {
                }, i2 = 0;
                if (Array.isArray(name1)) {
                    styles = getStyles(elem);
                    len = name1.length;
                    for(; i2 < len; i2++)map[name1[i2]] = jQuery.css(elem, name1[i2], false, styles);
                    return map;
                }
                return value1 !== undefined ? jQuery.style(elem, name1, value1) : jQuery.css(elem, name1);
            }, name, value, arguments.length > 1);
        }
    });
    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
        constructor: Tween,
        init: function(elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function() {
            var hooks = Tween.propHooks[this.prop];
            return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
        },
        run: function(percent) {
            var eased, hooks = Tween.propHooks[this.prop];
            if (this.options.duration) this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
            else this.pos = eased = percent;
            this.now = (this.end - this.start) * eased + this.start;
            if (this.options.step) this.options.step.call(this.elem, this.now, this);
            if (hooks && hooks.set) hooks.set(this);
            else Tween.propHooks._default.set(this);
            return this;
        }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
        _default: {
            get: function(tween) {
                var result;
                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) return tween.elem[tween.prop];
                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");
                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function(tween) {
                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) jQuery.fx.step[tween.prop](tween);
                else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                else tween.elem[tween.prop] = tween.now;
            }
        }
    };
    // Support: IE <=9 only
    // Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function(tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) tween.elem[tween.prop] = tween.now;
        }
    };
    jQuery.easing = {
        linear: function(p) {
            return p;
        },
        swing: function(p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    // Back compat <1.8 extension point
    jQuery.fx.step = {
    };
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window.requestAnimationFrame) window.requestAnimationFrame(schedule);
            else window.setTimeout(schedule, jQuery.fx.interval);
            jQuery.fx.tick();
        }
    }
    // Animations created synchronously will run synchronously
    function createFxNow() {
        window.setTimeout(function() {
            fxNow = undefined;
        });
        return fxNow = Date.now();
    }
    // Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which, i2 = 0, attrs = {
            height: type
        };
        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for(; i2 < 4; i2 += 2 - includeWidth){
            which = cssExpand[i2];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }
        if (includeWidth) attrs.opacity = attrs.width = type;
        return attrs;
    }
    function createTween(value, prop, animation) {
        var tween, collection = (Animation1.tweeners[prop] || []).concat(Animation1.tweeners["*"]), index = 0, length = collection.length;
        for(; index < length; index++){
            if (tween = collection[index].call(animation, prop, value)) // We're done with this property
            return tween;
        }
    }
    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {
        }, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function() {
                    if (!hooks.unqueued) oldfire();
                };
            }
            hooks.unqueued++;
            anim.always(function() {
                // Ensure the complete handler is called before this completes
                anim.always(function() {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) hooks.empty.fire();
                });
            });
        }
        // Detect show/hide animations
        for(prop in props){
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) hidden = true;
                    else continue;
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }
        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) return;
        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {
            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [
                style.overflow,
                style.overflowX,
                style.overflowY
            ];
            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) restoreDisplay = dataPriv.get(elem, "display");
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) display = restoreDisplay;
                else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([
                        elem
                    ], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([
                        elem
                    ]);
                }
            }
            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function() {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }
        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function() {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }
        // Implement show/hide animations
        propTween = false;
        for(prop in orig){
            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) hidden = dataShow.hidden;
                } else dataShow = dataPriv.access(elem, "fxshow", {
                    display: restoreDisplay
                });
                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) dataShow.hidden = !hidden;
                // Show elements before animating them
                if (hidden) showHide([
                    elem
                ], true);
                /* eslint-disable no-loop-func */ anim.done(function() {
                    /* eslint-enable no-loop-func */ // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) showHide([
                        elem
                    ]);
                    dataPriv.remove(elem, "fxshow");
                    for(prop in orig)jQuery.style(elem, prop, orig[prop]);
                });
            }
            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }
    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;
        // camelCase, specialEasing and expand cssHook pass
        for(index in props){
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }
            if (index !== name) {
                props[name] = value;
                delete props[index];
            }
            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];
                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for(index in value)if (!(index in props)) {
                    props[index] = value[index];
                    specialEasing[index] = easing;
                }
            } else specialEasing[name] = easing;
        }
    }
    function Animation1(elem, properties, options) {
        var result, stopped, index = 0, length = Animation1.prefilters.length, deferred = jQuery.Deferred().always(function() {
            // Don't match elem in the :animated selector
            delete tick.elem;
        }), tick = function() {
            if (stopped) return false;
            var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), // Support: Android 2.3 only
            // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
            temp = remaining / animation.duration || 0, percent = 1 - temp, index1 = 0, length1 = animation.tweens.length;
            for(; index1 < length1; index1++)animation.tweens[index1].run(percent);
            deferred.notifyWith(elem, [
                animation,
                percent,
                remaining
            ]);
            // If there's more to do, yield
            if (percent < 1 && length1) return remaining;
            // If this was an empty animation, synthesize a final progress notification
            if (!length1) deferred.notifyWith(elem, [
                animation,
                1,
                0
            ]);
            // Resolve the animation and report its conclusion
            deferred.resolveWith(elem, [
                animation
            ]);
            return false;
        }, animation = deferred.promise({
            elem: elem,
            props: jQuery.extend({
            }, properties),
            opts: jQuery.extend(true, {
                specialEasing: {
                },
                easing: jQuery.easing._default
            }, options),
            originalProperties: properties,
            originalOptions: options,
            startTime: fxNow || createFxNow(),
            duration: options.duration,
            tweens: [],
            createTween: function(prop, end) {
                var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
                animation.tweens.push(tween);
                return tween;
            },
            stop: function(gotoEnd) {
                var index1 = 0, // If we are going to the end, we want to run all the tweens
                // otherwise we skip this part
                length1 = gotoEnd ? animation.tweens.length : 0;
                if (stopped) return this;
                stopped = true;
                for(; index1 < length1; index1++)animation.tweens[index1].run(1);
                // Resolve when we played the last frame; otherwise, reject
                if (gotoEnd) {
                    deferred.notifyWith(elem, [
                        animation,
                        1,
                        0
                    ]);
                    deferred.resolveWith(elem, [
                        animation,
                        gotoEnd
                    ]);
                } else deferred.rejectWith(elem, [
                    animation,
                    gotoEnd
                ]);
                return this;
            }
        }), props = animation.props;
        propFilter(props, animation.opts.specialEasing);
        for(; index < length; index++){
            result = Animation1.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
                return result;
            }
        }
        jQuery.map(props, createTween, animation);
        if (isFunction(animation.opts.start)) animation.opts.start.call(elem, animation);
        // Attach callbacks from options
        animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
        jQuery.fx.timer(jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue
        }));
        return animation;
    }
    jQuery.Animation = jQuery.extend(Animation1, {
        tweeners: {
            "*": [
                function(prop, value) {
                    var tween = this.createTween(prop, value);
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                    return tween;
                }
            ]
        },
        tweener: function(props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = [
                    "*"
                ];
            } else props = props.match(rnothtmlwhite);
            var prop, index = 0, length = props.length;
            for(; index < length; index++){
                prop = props[index];
                Animation1.tweeners[prop] = Animation1.tweeners[prop] || [];
                Animation1.tweeners[prop].unshift(callback);
            }
        },
        prefilters: [
            defaultPrefilter
        ],
        prefilter: function(callback, prepend) {
            if (prepend) Animation1.prefilters.unshift(callback);
            else Animation1.prefilters.push(callback);
        }
    });
    jQuery.speed = function(speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({
        }, speed) : {
            complete: fn || !fn && easing || isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };
        // Go to the end state if fx are off
        if (jQuery.fx.off) opt.duration = 0;
        else if (typeof opt.duration !== "number") {
            if (opt.duration in jQuery.fx.speeds) opt.duration = jQuery.fx.speeds[opt.duration];
            else opt.duration = jQuery.fx.speeds._default;
        }
        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) opt.queue = "fx";
        // Queueing
        opt.old = opt.complete;
        opt.complete = function() {
            if (isFunction(opt.old)) opt.old.call(this);
            if (opt.queue) jQuery.dequeue(this, opt.queue);
        };
        return opt;
    };
    jQuery.fn.extend({
        fadeTo: function(speed, to, easing, callback) {
            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()// Animate to the value specified
            .end().animate({
                opacity: to
            }, speed, easing, callback);
        },
        animate: function(prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
                // Operate on a copy of prop so per-property easing won't be lost
                var anim = Animation1(this, jQuery.extend({
                }, prop), optall);
                // Empty animations, or finishing resolves immediately
                if (empty || dataPriv.get(this, "finish")) anim.stop(true);
            };
            doAnimation.finish = doAnimation;
            return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
        },
        stop: function(type, clearQueue, gotoEnd) {
            var stopQueue = function(hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };
            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue) this.queue(type || "fx", []);
            return this.each(function() {
                var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
                if (index) {
                    if (data[index] && data[index].stop) stopQueue(data[index]);
                } else {
                    for(index in data)if (data[index] && data[index].stop && rrun.test(index)) stopQueue(data[index]);
                }
                for(index = timers.length; index--;)if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
                    timers[index].anim.stop(gotoEnd);
                    dequeue = false;
                    timers.splice(index, 1);
                }
                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) jQuery.dequeue(this, type);
            });
        },
        finish: function(type) {
            if (type !== false) type = type || "fx";
            return this.each(function() {
                var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
                // Enable finishing flag on private data
                data.finish = true;
                // Empty the queue first
                jQuery.queue(this, type, []);
                if (hooks && hooks.stop) hooks.stop.call(this, true);
                // Look for any active animations, and finish them
                for(index = timers.length; index--;)if (timers[index].elem === this && timers[index].queue === type) {
                    timers[index].anim.stop(true);
                    timers.splice(index, 1);
                }
                // Look for any animations in the old queue and finish them
                for(index = 0; index < length; index++)if (queue[index] && queue[index].finish) queue[index].finish.call(this);
                // Turn off finishing flag
                delete data.finish;
            });
        }
    });
    jQuery.each([
        "toggle",
        "show",
        "hide"
    ], function(_i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function(speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
        };
    });
    // Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(name, props) {
        jQuery.fn[name] = function(speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
        var timer, i2 = 0, timers = jQuery.timers;
        fxNow = Date.now();
        for(; i2 < timers.length; i2++){
            timer = timers[i2];
            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i2] === timer) timers.splice(i2--, 1);
        }
        if (!timers.length) jQuery.fx.stop();
        fxNow = undefined;
    };
    jQuery.fx.timer = function(timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
        if (inProgress) return;
        inProgress = true;
        schedule();
    };
    jQuery.fx.stop = function() {
        inProgress = null;
    };
    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,
        // Default speed
        _default: 400
    };
    // Based off of the plugin by Clint Helfers, with permission.
    // https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function(time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";
        return this.queue(type, function(next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function() {
                window.clearTimeout(timeout);
            };
        });
    };
    (function() {
        var input = document.createElement("input"), select = document.createElement("select"), opt = select.appendChild(document.createElement("option"));
        input.type = "checkbox";
        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";
        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;
        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
        attr: function(name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },
        removeAttr: function(name) {
            return this.each(function() {
                jQuery.removeAttr(this, name);
            });
        }
    });
    jQuery.extend({
        attr: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") return jQuery.prop(elem, name, value);
            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                elem.setAttribute(name, value + "");
                return value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            ret = jQuery.find.attr(elem, name);
            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },
        attrHooks: {
            type: {
                set: function(elem, value) {
                    if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) elem.value = val;
                        return value;
                    }
                }
            }
        },
        removeAttr: function(elem, value) {
            var name, i2 = 0, // Attribute names can contain non-HTML whitespace characters
            // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
            attrNames = value && value.match(rnothtmlwhite);
            if (attrNames && elem.nodeType === 1) while(name = attrNames[i2++])elem.removeAttribute(name);
        }
    });
    // Hooks for boolean attributes
    boolHook = {
        set: function(elem, value, name) {
            if (value === false) // Remove boolean attributes when set to false
            jQuery.removeAttr(elem, name);
            else elem.setAttribute(name, name);
            return name;
        }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;
        attrHandle[name] = function(elem, name1, isXML) {
            var ret, handle, lowercaseName = name1.toLowerCase();
            if (!isXML) {
                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name1, isXML) != null ? lowercaseName : null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
        prop: function(name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },
        removeProp: function(name) {
            return this.each(function() {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });
    jQuery.extend({
        prop: function(elem, name, value) {
            var ret, hooks, nType = elem.nodeType;
            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) return;
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }
            if (value !== undefined) {
                if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) return ret;
                return elem[name] = value;
            }
            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) return ret;
            return elem[name];
        },
        propHooks: {
            tabIndex: {
                get: function(elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");
                    if (tabindex) return parseInt(tabindex, 10);
                    if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) return 0;
                    return -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    // Support: IE <=11 only
    // Accessing the selectedIndex property
    // forces the browser to respect setting selected
    // on the option
    // The getter ensures a default option is selected
    // when in an optgroup
    // eslint rule "no-unused-expressions" is disabled for this code
    // since it considers such accessions noop
    if (!support.optSelected) jQuery.propHooks.selected = {
        get: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent && parent.parentNode) parent.parentNode.selectedIndex;
            return null;
        },
        set: function(elem) {
            /* eslint no-unused-expressions: "off" */ var parent = elem.parentNode;
            if (parent) {
                parent.selectedIndex;
                if (parent.parentNode) parent.parentNode.selectedIndex;
            }
        }
    };
    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function() {
        jQuery.propFix[this.toLowerCase()] = this;
    });
    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }
    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
        if (Array.isArray(value)) return value;
        if (typeof value === "string") return value.match(rnothtmlwhite) || [];
        return [];
    }
    jQuery.fn.extend({
        addClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i2 = 0;
            if (isFunction(value)) return this.each(function(j1) {
                jQuery(this).addClass(value.call(this, j1, getClass(this)));
            });
            classes = classesToArray(value);
            if (classes.length) while(elem = this[i2++]){
                curValue = getClass(elem);
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    j = 0;
                    while(clazz = classes[j++])if (cur.indexOf(" " + clazz + " ") < 0) cur += clazz + " ";
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) elem.setAttribute("class", finalValue);
                }
            }
            return this;
        },
        removeClass: function(value) {
            var classes, elem, cur, curValue, clazz, j, finalValue, i2 = 0;
            if (isFunction(value)) return this.each(function(j1) {
                jQuery(this).removeClass(value.call(this, j1, getClass(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            classes = classesToArray(value);
            if (classes.length) while(elem = this[i2++]){
                curValue = getClass(elem);
                // This expression is here for better compressibility (see addClass)
                cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
                if (cur) {
                    j = 0;
                    while(clazz = classes[j++])// Remove *all* instances
                    while(cur.indexOf(" " + clazz + " ") > -1)cur = cur.replace(" " + clazz + " ", " ");
                    // Only assign if different to avoid unneeded rendering.
                    finalValue = stripAndCollapse(cur);
                    if (curValue !== finalValue) elem.setAttribute("class", finalValue);
                }
            }
            return this;
        },
        toggleClass: function(value, stateVal) {
            var type = typeof value, isValidValue = type === "string" || Array.isArray(value);
            if (typeof stateVal === "boolean" && isValidValue) return stateVal ? this.addClass(value) : this.removeClass(value);
            if (isFunction(value)) return this.each(function(i2) {
                jQuery(this).toggleClass(value.call(this, i2, getClass(this), stateVal), stateVal);
            });
            return this.each(function() {
                var className, i2, self, classNames;
                if (isValidValue) {
                    // Toggle individual class names
                    i2 = 0;
                    self = jQuery(this);
                    classNames = classesToArray(value);
                    while(className = classNames[i2++])// Check each className given, space separated list
                    if (self.hasClass(className)) self.removeClass(className);
                    else self.addClass(className);
                // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) // Store className if set
                    dataPriv.set(this, "__className__", className);
                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
                }
            });
        },
        hasClass: function(selector) {
            var className, elem, i2 = 0;
            className = " " + selector + " ";
            while(elem = this[i2++]){
                if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) return true;
            }
            return false;
        }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
        val: function(value) {
            var hooks, ret, valueIsFunction, elem = this[0];
            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
                    if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) return ret;
                    ret = elem.value;
                    // Handle most common string cases
                    if (typeof ret === "string") return ret.replace(rreturn, "");
                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }
                return;
            }
            valueIsFunction = isFunction(value);
            return this.each(function(i2) {
                var val;
                if (this.nodeType !== 1) return;
                if (valueIsFunction) val = value.call(this, i2, jQuery(this).val());
                else val = value;
                // Treat null/undefined as ""; convert numbers to string
                if (val == null) val = "";
                else if (typeof val === "number") val += "";
                else if (Array.isArray(val)) val = jQuery.map(val, function(value1) {
                    return value1 == null ? "" : value1 + "";
                });
                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) this.value = val;
            });
        }
    });
    jQuery.extend({
        valHooks: {
            option: {
                get: function(elem) {
                    var val = jQuery.find.attr(elem, "value");
                    return val != null ? val : // Support: IE <=10 - 11 only
                    // option.text throws exceptions (#14686, #14858)
                    // Strip and collapse whitespace
                    // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                    stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function(elem) {
                    var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max = one ? index + 1 : options.length;
                    if (index < 0) i2 = max;
                    else i2 = one ? index : 0;
                    // Loop through all the selected options
                    for(; i2 < max; i2++){
                        option = options[i2];
                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (#2551)
                        if ((option.selected || i2 === index) && // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                            // Get the specific value for the option
                            value = jQuery(option).val();
                            // We don't need an array for one selects
                            if (one) return value;
                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }
                    return values;
                },
                set: function(elem, value) {
                    var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i2 = options.length;
                    while(i2--){
                        option = options[i2];
                        /* eslint-disable no-cond-assign */ if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) optionSet = true;
                    /* eslint-enable no-cond-assign */ }
                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) elem.selectedIndex = -1;
                    return values;
                }
            }
        }
    });
    // Radios and checkboxes getter/setter
    jQuery.each([
        "radio",
        "checkbox"
    ], function() {
        jQuery.valHooks[this] = {
            set: function(elem, value) {
                if (Array.isArray(value)) return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
            }
        };
        if (!support.checkOn) jQuery.valHooks[this].get = function(elem) {
            return elem.getAttribute("value") === null ? "on" : elem.value;
        };
    });
    // Return jQuery for attributes-only inclusion
    support.focusin = "onfocusin" in window;
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e) {
        e.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
        trigger: function(event, data, elem, onlyHandlers) {
            var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [
                elem || document
            ], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
            cur = lastElement = tmp = elem = elem || document;
            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) return;
            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) return;
            if (type.indexOf(".") > -1) {
                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;
            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) event.target = elem;
            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ? [
                event
            ] : jQuery.makeArray(data, [
                event
            ]);
            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {
            };
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) return;
            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) cur = cur.parentNode;
                for(; cur; cur = cur.parentNode){
                    eventPath.push(cur);
                    tmp = cur;
                }
                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) eventPath.push(tmp.defaultView || tmp.parentWindow || window);
            }
            // Fire handlers on the event path
            i2 = 0;
            while((cur = eventPath[i2++]) && !event.isPropagationStopped()){
                lastElement = cur;
                event.type = i2 > 1 ? bubbleType : special.bindType || type;
                // jQuery handler
                handle = (dataPriv.get(cur, "events") || Object.create(null))[event.type] && dataPriv.get(cur, "handle");
                if (handle) handle.apply(cur, data);
                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) event.preventDefault();
                }
            }
            event.type = type;
            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {
                if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) // Call a native DOM method on the target with the same name as the event.
                // Don't do default actions on window, that's where global variables be (#6170)
                {
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];
                        if (tmp) elem[ontype] = null;
                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;
                        if (event.isPropagationStopped()) lastElement.addEventListener(type, stopPropagationCallback);
                        elem[type]();
                        if (event.isPropagationStopped()) lastElement.removeEventListener(type, stopPropagationCallback);
                        jQuery.event.triggered = undefined;
                        if (tmp) elem[ontype] = tmp;
                    }
                }
            }
            return event.result;
        },
        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function(type, elem, event) {
            var e = jQuery.extend(new jQuery.Event(), event, {
                type: type,
                isSimulated: true
            });
            jQuery.event.trigger(e, null, elem);
        }
    });
    jQuery.fn.extend({
        trigger: function(type, data) {
            return this.each(function() {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function(type, data) {
            var elem = this[0];
            if (elem) return jQuery.event.trigger(type, data, elem, true);
        }
    });
    // Support: Firefox <=44
    // Firefox doesn't have focus(in | out) events
    // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
    //
    // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
    // focus(in | out) events fire after focus & blur events,
    // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
    // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if (!support.focusin) jQuery.each({
        focus: "focusin",
        blur: "focusout"
    }, function(orig, fix) {
        // Attach a single capturing handler on the document while someone wants focusin/focusout
        var handler = function(event) {
            jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
        };
        jQuery.event.special[fix] = {
            setup: function() {
                // Handle: regular nodes (via `this.ownerDocument`), window
                // (via `this.document`) & document (via `this`).
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix);
                if (!attaches) doc.addEventListener(orig, handler, true);
                dataPriv.access(doc, fix, (attaches || 0) + 1);
            },
            teardown: function() {
                var doc = this.ownerDocument || this.document || this, attaches = dataPriv.access(doc, fix) - 1;
                if (!attaches) {
                    doc.removeEventListener(orig, handler, true);
                    dataPriv.remove(doc, fix);
                } else dataPriv.access(doc, fix, attaches);
            }
        };
    });
    var location = window.location;
    var nonce = {
        guid: Date.now()
    };
    var rquery = /\?/;
    // Cross-browser xml parsing
    jQuery.parseXML = function(data) {
        var xml, parserErrorElem;
        if (!data || typeof data !== "string") return null;
        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = new window.DOMParser().parseFromString(data, "text/xml");
        } catch (e) {
        }
        parserErrorElem = xml && xml.getElementsByTagName("parsererror")[0];
        if (!xml || parserErrorElem) jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
            return el.textContent;
        }).join("\n") : data));
        return xml;
    };
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
        var name;
        if (Array.isArray(obj)) // Serialize array item.
        jQuery.each(obj, function(i2, v) {
            if (traditional || rbracket.test(prefix)) // Treat each array item as a scalar.
            add(prefix, v);
            else // Item is non-scalar (array or object), encode its numeric index.
            buildParams(prefix + "[" + (typeof v === "object" && v != null ? i2 : "") + "]", v, traditional, add);
        });
        else if (!traditional && toType(obj) === "object") // Serialize object item.
        for(name in obj)buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        else // Serialize scalar item.
        add(prefix, obj);
    }
    // Serialize an array of form elements or a set of
    // key/values into a query string
    jQuery.param = function(a, traditional) {
        var prefix, s = [], add = function(key, valueOrFunction) {
            // If value is a function, invoke it and use its return value
            var value = isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;
            s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
        };
        if (a == null) return "";
        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) // Serialize the form elements
        jQuery.each(a, function() {
            add(this.name, this.value);
        });
        else // If traditional, encode the "old" way (the way 1.3.2 or older
        // did it), otherwise encode params recursively.
        for(prefix in a)buildParams(prefix, a[prefix], traditional, add);
        // Return the resulting serialization
        return s.join("&");
    };
    jQuery.fn.extend({
        serialize: function() {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            }).filter(function() {
                var type = this.type;
                // Use .is( ":disabled" ) so that fieldset[disabled] works
                return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
            }).map(function(_i, elem) {
                var val = jQuery(this).val();
                if (val == null) return null;
                if (Array.isArray(val)) return jQuery.map(val, function(val1) {
                    return {
                        name: elem.name,
                        value: val1.replace(rCRLF, "\r\n")
                    };
                });
                return {
                    name: elem.name,
                    value: val.replace(rCRLF, "\r\n")
                };
            }).get();
        }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */ prefilters = {
    }, /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */ transports = {
    }, // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    allTypes = "*/".concat("*"), // Anchor tag for parsing the document origin
    originAnchor = document.createElement("a");
    originAnchor.href = location.href;
    // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {
        // dataTypeExpression is optional and defaults to "*"
        return function(dataTypeExpression, func) {
            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }
            var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
            if (isFunction(func)) {
                // For each dataType in the dataTypeExpression
                while(dataType = dataTypes[i2++])// Prepend if requested
                if (dataType[0] === "+") {
                    dataType = dataType.slice(1) || "*";
                    (structure[dataType] = structure[dataType] || []).unshift(func);
                // Otherwise append
                } else (structure[dataType] = structure[dataType] || []).push(func);
            }
        };
    }
    // Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
        var inspected = {
        }, seekingTransport = structure === transports;
        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function(_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) return !(selected = dataTypeOrTransport);
            });
            return selected;
        }
        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    // A special extend for ajax options
    // that takes "flat" options (not to be deep extended)
    // Fixes #9887
    function ajaxExtend(target, src) {
        var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {
        };
        for(key in src)if (src[key] !== undefined) (flatOptions[key] ? target : deep || (deep = {
        }))[key] = src[key];
        if (deep) jQuery.extend(true, target, deep);
        return target;
    }
    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */ function ajaxHandleResponses(s, jqXHR, responses) {
        var ct, type, finalDataType, firstDataType, contents = s.contents, dataTypes = s.dataTypes;
        // Remove auto dataType and get content-type in the process
        while(dataTypes[0] === "*"){
            dataTypes.shift();
            if (ct === undefined) ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
        // Check if we're dealing with a known content-type
        if (ct) {
            for(type in contents)if (contents[type] && contents[type].test(ct)) {
                dataTypes.unshift(type);
                break;
            }
        }
        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) finalDataType = dataTypes[0];
        else {
            // Try convertible dataTypes
            for(type in responses){
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) firstDataType = type;
            }
            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }
        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) dataTypes.unshift(finalDataType);
            return responses[finalDataType];
        }
    }
    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */ function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev, converters = {
        }, // Work with a copy of dataTypes in case we need to modify it for conversion
        dataTypes = s.dataTypes.slice();
        // Create converters map with lowercased keys
        if (dataTypes[1]) for(conv in s.converters)converters[conv.toLowerCase()] = s.converters[conv];
        current = dataTypes.shift();
        // Convert to each sequential dataType
        while(current){
            if (s.responseFields[current]) jqXHR[s.responseFields[current]] = response;
            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) response = s.dataFilter(response, s.dataType);
            prev = current;
            current = dataTypes.shift();
            if (current) {
                // There's only work to do if current dataType is non-auto
                if (current === "*") current = prev;
                else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];
                    // If none found, seek a pair
                    if (!conv) for(conv2 in converters){
                        // If conv2 outputs current
                        tmp = conv2.split(" ");
                        if (tmp[1] === current) {
                            // If prev can be converted to accepted input
                            conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                            if (conv) {
                                // Condense equivalence converters
                                if (conv === true) conv = converters[conv2];
                                else if (converters[conv2] !== true) {
                                    current = tmp[0];
                                    dataTypes.unshift(tmp[1]);
                                }
                                break;
                            }
                        }
                    }
                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) response = conv(response);
                        else try {
                            response = conv(response);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: conv ? e : "No conversion from " + prev + " to " + current
                            };
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: response
        };
    }
    jQuery.extend({
        // Counter for holding the number of active queries
        active: 0,
        // Last-Modified header cache for next request
        lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/ accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {
                // Convert anything to text
                "* text": String,
                // Text to html (true = no transformation)
                "text html": true,
                // Evaluate text as a json expression
                "text json": JSON.parse,
                // Parse text as xml
                "text xml": jQuery.parseXML
            },
            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },
        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function(target, settings) {
            return settings ? // Building a settings object
            ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : // Extending ajaxSettings
            ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        // Main method
        ajax: function(url, options) {
            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }
            // Force options to be an object
            options = options || {
            };
            var transport, // URL without anti-cache param
            cacheURL, // Response headers
            responseHeadersString, responseHeaders, // timeout handle
            timeoutTimer, // Url cleanup var
            urlAnchor, // Request state (becomes false upon send and true upon completion)
            completed1, // To know if global events are to be dispatched
            fireGlobals, // Loop variable
            i2, // uncached part of the url
            uncached, // Create the final options object
            s = jQuery.ajaxSetup({
            }, options), // Callbacks context
            callbackContext = s.context || s, // Context for global events is callbackContext if it is a DOM node or jQuery collection
            globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, // Deferreds
            deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), // Status-dependent callbacks
            statusCode = s.statusCode || {
            }, // Headers (they are sent all at once)
            requestHeaders = {
            }, requestHeadersNames = {
            }, // Default abort message
            strAbort = "canceled", // Fake xhr
            jqXHR = {
                readyState: 0,
                // Builds headers hashtable if needed
                getResponseHeader: function(key) {
                    var match;
                    if (completed1) {
                        if (!responseHeaders) {
                            responseHeaders = {
                            };
                            while(match = rheaders.exec(responseHeadersString))responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                        }
                        match = responseHeaders[key.toLowerCase() + " "];
                    }
                    return match == null ? null : match.join(", ");
                },
                // Raw string
                getAllResponseHeaders: function() {
                    return completed1 ? responseHeadersString : null;
                },
                // Caches the header
                setRequestHeader: function(name, value) {
                    if (completed1 == null) {
                        name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
                        requestHeaders[name] = value;
                    }
                    return this;
                },
                // Overrides response content-type header
                overrideMimeType: function(type) {
                    if (completed1 == null) s.mimeType = type;
                    return this;
                },
                // Status-dependent callbacks
                statusCode: function(map) {
                    var code;
                    if (map) {
                        if (completed1) // Execute the appropriate callbacks
                        jqXHR.always(map[jqXHR.status]);
                        else // Lazy-add the new callbacks in a way that preserves old ones
                        for(code in map)statusCode[code] = [
                            statusCode[code],
                            map[code]
                        ];
                    }
                    return this;
                },
                // Cancel the request
                abort: function(statusText) {
                    var finalText = statusText || strAbort;
                    if (transport) transport.abort(finalText);
                    done(0, finalText);
                    return this;
                }
            };
            // Attach deferreds
            deferred.promise(jqXHR);
            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");
            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;
            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [
                ""
            ];
            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");
                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;
                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }
            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") s.data = jQuery.param(s.data, s.traditional);
            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
            // If request was aborted inside a prefilter, stop there
            if (completed1) return jqXHR;
            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;
            // Watch for a new set of requests
            if (fireGlobals && (jQuery.active++) === 0) jQuery.event.trigger("ajaxStart");
            // Uppercase the type
            s.type = s.type.toUpperCase();
            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);
            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");
            // More options handling for requests with no content
            if (!s.hasContent) {
                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);
                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;
                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }
                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
                }
                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;
            // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) s.data = s.data.replace(r20, "+");
            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                if (jQuery.etag[cacheURL]) jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
            }
            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) jqXHR.setRequestHeader("Content-Type", s.contentType);
            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);
            // Check for headers option
            for(i2 in s.headers)jqXHR.setRequestHeader(i2, s.headers[i2]);
            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed1)) // Abort if not done already and return
            return jqXHR.abort();
            // Aborting is no longer a cancellation
            strAbort = "abort";
            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);
            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
            // If no transport, we auto-abort
            if (!transport) done(-1, "No Transport");
            else {
                jqXHR.readyState = 1;
                // Send global event
                if (fireGlobals) globalEventContext.trigger("ajaxSend", [
                    jqXHR,
                    s
                ]);
                // If request was aborted inside ajaxSend, stop there
                if (completed1) return jqXHR;
                // Timeout
                if (s.async && s.timeout > 0) timeoutTimer = window.setTimeout(function() {
                    jqXHR.abort("timeout");
                }, s.timeout);
                try {
                    completed1 = false;
                    transport.send(requestHeaders, done);
                } catch (e) {
                    // Rethrow post-completion exceptions
                    if (completed1) throw e;
                    // Propagate others as results
                    done(-1, e);
                }
            }
            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified, statusText = nativeStatusText;
                // Ignore repeat invocations
                if (completed1) return;
                completed1 = true;
                // Clear timeout if it exists
                if (timeoutTimer) window.clearTimeout(timeoutTimer);
                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;
                // Cache response headers
                responseHeadersString = headers || "";
                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;
                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;
                // Get response data
                if (responses) response = ajaxHandleResponses(s, jqXHR, responses);
                // Use a noop converter for missing script but not if jsonp
                if (!isSuccess && jQuery.inArray("script", s.dataTypes) > -1 && jQuery.inArray("json", s.dataTypes) < 0) s.converters["text script"] = function() {
                };
                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);
                // If successful, handle type chaining
                if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) jQuery.lastModified[cacheURL] = modified;
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) jQuery.etag[cacheURL] = modified;
                    }
                    // if no content
                    if (status === 204 || s.type === "HEAD") statusText = "nocontent";
                    else if (status === 304) statusText = "notmodified";
                    else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) status = 0;
                    }
                }
                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";
                // Success/Error
                if (isSuccess) deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR
                ]);
                else deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error
                ]);
                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;
                if (fireGlobals) globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [
                    jqXHR,
                    s,
                    isSuccess ? success : error
                ]);
                // Complete
                completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText
                ]);
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [
                        jqXHR,
                        s
                    ]);
                    // Handle the global AJAX counter
                    if (!--jQuery.active) jQuery.event.trigger("ajaxStop");
                }
            }
            return jqXHR;
        },
        getJSON: function(url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },
        getScript: function(url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });
    jQuery.each([
        "get",
        "post"
    ], function(_i, method) {
        jQuery[method] = function(url, data, callback, type) {
            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }
            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });
    jQuery.ajaxPrefilter(function(s) {
        var i2;
        for(i2 in s.headers)if (i2.toLowerCase() === "content-type") s.contentType = s.headers[i2] || "";
    });
    jQuery._evalUrl = function(url, options, doc) {
        return jQuery.ajax({
            url: url,
            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            // Only evaluate the response if it is successful (gh-4126)
            // dataFilter is not invoked for failure responses, so using it instead
            // of the default converter is kludgy but it works.
            converters: {
                "text script": function() {
                }
            },
            dataFilter: function(response) {
                jQuery.globalEval(response, options, doc);
            }
        });
    };
    jQuery.fn.extend({
        wrapAll: function(html) {
            var wrap;
            if (this[0]) {
                if (isFunction(html)) html = html.call(this[0]);
                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) wrap.insertBefore(this[0]);
                wrap.map(function() {
                    var elem = this;
                    while(elem.firstElementChild)elem = elem.firstElementChild;
                    return elem;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(html) {
            if (isFunction(html)) return this.each(function(i2) {
                jQuery(this).wrapInner(html.call(this, i2));
            });
            return this.each(function() {
                var self = jQuery(this), contents = self.contents();
                if (contents.length) contents.wrapAll(html);
                else self.append(html);
            });
        },
        wrap: function(html) {
            var htmlIsFunction = isFunction(html);
            return this.each(function(i2) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i2) : html);
            });
        },
        unwrap: function(selector) {
            this.parent(selector).not("body").each(function() {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {
        }
    };
    var xhrSuccessStatus = {
        // File protocol always yields status code 0, assume 200
        0: 200,
        // Support: IE <=9 only
        // #1450: sometimes IE returns 1223 when it should be 204
        1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
        var callback, errorCallback;
        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) return {
            send: function(headers, complete) {
                var i2, xhr = options.xhr();
                xhr.open(options.type, options.url, options.async, options.username, options.password);
                // Apply custom fields if provided
                if (options.xhrFields) for(i2 in options.xhrFields)xhr[i2] = options.xhrFields[i2];
                // Override mime type if needed
                if (options.mimeType && xhr.overrideMimeType) xhr.overrideMimeType(options.mimeType);
                // X-Requested-With header
                // For cross-domain requests, seeing as conditions for a preflight are
                // akin to a jigsaw puzzle, we simply never set it to be sure.
                // (it can always be set on a per-request basis or even using ajaxSetup)
                // For same-domain requests, won't change header if already provided.
                if (!options.crossDomain && !headers["X-Requested-With"]) headers["X-Requested-With"] = "XMLHttpRequest";
                // Set headers
                for(i2 in headers)xhr.setRequestHeader(i2, headers[i2]);
                // Callback
                callback = function(type) {
                    return function() {
                        if (callback) {
                            callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                            if (type === "abort") xhr.abort();
                            else if (type === "error") {
                                // Support: IE <=9 only
                                // On a manual native abort, IE9 throws
                                // errors on any property access that is not readyState
                                if (typeof xhr.status !== "number") complete(0, "error");
                                else complete(// File: protocol always yields status 0; see #8605, #14207
                                xhr.status, xhr.statusText);
                            } else complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText, // Support: IE <=9 only
                            // IE9 has no XHR2 but throws on binary (trac-11426)
                            // For XHR2 non-text, let the caller handle it (gh-2498)
                            (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? {
                                binary: xhr.response
                            } : {
                                text: xhr.responseText
                            }, xhr.getAllResponseHeaders());
                        }
                    };
                };
                // Listen to events
                xhr.onload = callback();
                errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
                // Support: IE 9 only
                // Use onreadystatechange to replace onabort
                // to handle uncaught aborts
                if (xhr.onabort !== undefined) xhr.onabort = errorCallback;
                else xhr.onreadystatechange = function() {
                    // Check readyState before timeout as it changes
                    if (xhr.readyState === 4) // Allow onerror to be called first,
                    // but that will not handle a native abort
                    // Also, save errorCallback to a variable
                    // as xhr.onerror cannot be accessed
                    window.setTimeout(function() {
                        if (callback) errorCallback();
                    });
                };
                // Create the abort callback
                callback = callback("abort");
                try {
                    // Do send the request (this may raise an exception)
                    xhr.send(options.hasContent && options.data || null);
                } catch (e) {
                    // #14683: Only rethrow if this hasn't been notified as an error yet
                    if (callback) throw e;
                }
            },
            abort: function() {
                if (callback) callback();
            }
        };
    });
    // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function(s) {
        if (s.crossDomain) s.contents.script = false;
    });
    // Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });
    // Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function(s) {
        if (s.cache === undefined) s.cache = false;
        if (s.crossDomain) s.type = "GET";
    });
    // Bind script tag hack transport
    jQuery.ajaxTransport("script", function(s) {
        // This transport only deals with cross domain or forced-by-attrs requests
        if (s.crossDomain || s.scriptAttrs) {
            var script, callback;
            return {
                send: function(_, complete) {
                    script = jQuery("<script>").attr(s.scriptAttrs || {
                    }).prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on("load error", callback = function(evt) {
                        script.remove();
                        callback = null;
                        if (evt) complete(evt.type === "error" ? 404 : 200, evt.type);
                    });
                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function() {
                    if (callback) callback();
                }
            };
        }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    // Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
            this[callback] = true;
            return callback;
        }
    });
    // Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function(s, originalSettings, jqXHR) {
        var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");
        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {
            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
            // Insert callback into url or form data
            if (jsonProp) s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            else if (s.jsonp !== false) s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function() {
                if (!responseContainer) jQuery.error(callbackName + " was not called");
                return responseContainer[0];
            };
            // Force json dataType
            s.dataTypes[0] = "json";
            // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function() {
                responseContainer = arguments;
            };
            // Clean-up function (fires after converters)
            jqXHR.always(function() {
                // If previous value didn't exist - remove it
                if (overwritten === undefined) jQuery(window).removeProp(callbackName);
                else window[callbackName] = overwritten;
                // Save back as free
                if (s[callbackName]) {
                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;
                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }
                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) overwritten(responseContainer[0]);
                responseContainer = overwritten = undefined;
            });
            // Delegate to script
            return "script";
        }
    });
    // Support: Safari 8 only
    // In Safari 8 documents created via document.implementation.createHTMLDocument
    // collapse sibling forms: the second one becomes a child of the first one.
    // Because of that, this security measure has to be disabled in Safari 8.
    // https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = (function() {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    })();
    // Argument "data" should be string of html
    // context (optional): If specified, the fragment will be created in this context,
    // defaults to document
    // keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function(data, context, keepScripts) {
        if (typeof data !== "string") return [];
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }
        var base, parsed, scripts;
        if (!context) {
            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");
                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else context = document;
        }
        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];
        // Single tag
        if (parsed) return [
            context.createElement(parsed[1])
        ];
        parsed = buildFragment([
            data
        ], context, scripts);
        if (scripts && scripts.length) jQuery(scripts).remove();
        return jQuery.merge([], parsed.childNodes);
    };
    /**
 * Load a url into a page
 */ jQuery.fn.load = function(url, params, callback) {
        var selector, type, response, self = this, off = url.indexOf(" ");
        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }
        // If it's a function
        if (isFunction(params)) {
            // We assume that it's the callback
            callback = params;
            params = undefined;
        // Otherwise, build a param string
        } else if (params && typeof params === "object") type = "POST";
        // If we have elements to modify, make the request
        if (self.length > 0) jQuery.ajax({
            url: url,
            // If "type" variable is undefined, then "GET" method will be used.
            // Make value of this field explicit since
            // user can override it through ajaxSetup method
            type: type || "GET",
            dataType: "html",
            data: params
        }).done(function(responseText) {
            // Save response for use in complete callback
            response = arguments;
            self.html(selector ? // If a selector was specified, locate the right elements in a dummy div
            // Exclude scripts to avoid IE 'Permission Denied' errors
            jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : // Otherwise use the full result
            responseText);
        // If the request succeeds, this function gets "data", "status", "jqXHR"
        // but they are ignored because response was set above.
        // If it fails, this function gets "jqXHR", "status", "error"
        }).always(callback && function(jqXHR, status) {
            self.each(function() {
                callback.apply(this, response || [
                    jqXHR.responseText,
                    status,
                    jqXHR
                ]);
            });
        });
        return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
        return jQuery.grep(jQuery.timers, function(fn) {
            return elem === fn.elem;
        }).length;
    };
    jQuery.offset = {
        setOffset: function(elem, options, i2) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {
            };
            // Set position first, in-case top/left are set even on static elem
            if (position === "static") elem.style.position = "relative";
            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;
            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }
            if (isFunction(options)) // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
            options = options.call(elem, i2, jQuery.extend({
            }, curOffset));
            if (options.top != null) props.top = options.top - curOffset.top + curTop;
            if (options.left != null) props.left = options.left - curOffset.left + curLeft;
            if ("using" in options) options.using.call(elem, props);
            else curElem.css(props);
        }
    };
    jQuery.fn.extend({
        // offset() relates an element's border box to the document origin
        offset: function(options) {
            // Preserve chaining for setter
            if (arguments.length) return options === undefined ? this : this.each(function(i2) {
                jQuery.offset.setOffset(this, options, i2);
            });
            var rect, win, elem = this[0];
            if (!elem) return;
            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) return {
                top: 0,
                left: 0
            };
            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },
        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function() {
            if (!this[0]) return;
            var offsetParent, offset, doc, elem = this[0], parentOffset = {
                top: 0,
                left: 0
            };
            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") // Assume position:fixed implies availability of getBoundingClientRect
            offset = elem.getBoundingClientRect();
            else {
                offset = this.offset();
                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while(offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.parentNode;
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }
            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },
        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function() {
            return this.map(function() {
                var offsetParent = this.offsetParent;
                while(offsetParent && jQuery.css(offsetParent, "position") === "static")offsetParent = offsetParent.offsetParent;
                return offsetParent || documentElement;
            });
        }
    });
    // Create scrollLeft and scrollTop methods
    jQuery.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(method, prop) {
        var top = "pageYOffset" === prop;
        jQuery.fn[method] = function(val) {
            return access(this, function(elem, method1, val1) {
                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) win = elem;
                else if (elem.nodeType === 9) win = elem.defaultView;
                if (val1 === undefined) return win ? win[prop] : elem[method1];
                if (win) win.scrollTo(!top ? val1 : win.pageXOffset, top ? val1 : win.pageYOffset);
                else elem[method1] = val1;
            }, method, val, arguments.length);
        };
    });
    // Support: Safari <=7 - 9.1, Chrome <=37 - 49
    // Add the top/left cssHooks using jQuery.fn.position
    // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
    // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
    // getComputedStyle returns percent when specified for top/left/bottom/right;
    // rather than make the css module depend on the offset module, just check for it here
    jQuery.each([
        "top",
        "left"
    ], function(_i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function(elem, computed) {
            if (computed) {
                computed = curCSS(elem, prop);
                // If curCSS returns percentage, fallback to offset
                return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
            }
        });
    });
    // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({
        Height: "height",
        Width: "width"
    }, function(name, type) {
        jQuery.each({
            padding: "inner" + name,
            content: type,
            "": "outer" + name
        }, function(defaultExtra, funcName) {
            // Margin is only for outerHeight, outerWidth
            jQuery.fn[funcName] = function(margin, value) {
                var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
                return access(this, function(elem, type1, value1) {
                    var doc;
                    if (isWindow(elem)) // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                    return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
                    // Get document width or height
                    if (elem.nodeType === 9) {
                        doc = elem.documentElement;
                        // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                        // whichever is greatest
                        return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
                    }
                    return value1 === undefined ? // Get width or height on the element, requesting but not forcing parseFloat
                    jQuery.css(elem, type1, extra) : // Set width or height on the element
                    jQuery.style(elem, type1, value1, extra);
                }, type, chainable ? margin : undefined, chainable);
            };
        });
    });
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function(_i, type) {
        jQuery.fn[type] = function(fn) {
            return this.on(type, fn);
        };
    });
    jQuery.fn.extend({
        bind: function(types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function(types, fn) {
            return this.off(types, null, fn);
        },
        delegate: function(selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function(selector, types, fn) {
            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        },
        hover: function(fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });
    jQuery.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(_i, name) {
        // Handle event binding
        jQuery.fn[name] = function(data, fn) {
            return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
        };
    });
    // Support: Android <=4.0 only
    // Make sure we trim BOM and NBSP
    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    // Bind a function to a context, optionally partially applying any
    // arguments.
    // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
    // However, it is not slated for removal any time soon
    jQuery.proxy = function(fn, context) {
        var tmp, args, proxy;
        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }
        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) return undefined;
        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function() {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };
        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;
        return proxy;
    };
    jQuery.holdReady = function(hold) {
        if (hold) jQuery.readyWait++;
        else jQuery.ready(true);
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") && // parseFloat NaNs numeric-cast false positives ("")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text) {
        return text == null ? "" : (text + "").replace(rtrim, "");
    };
    // Register as a named AMD module, since jQuery can be concatenated with other
    // files that may use define, but not via a proper concatenation script that
    // understands anonymous AMD modules. A named AMD is safest and most robust
    // way to register. Lowercase jquery is used because AMD module names are
    // derived from file names, and jQuery is normally delivered in a lowercase
    // file name. Do this after creating the global so that if an AMD module wants
    // to call noConflict to hide this version of jQuery, it will work.
    // Note that for maximum portability, libraries that are not jQuery should
    // declare themselves as anonymous modules, and avoid setting a global if an
    // AMD loader is present. jQuery is a special case. For more information, see
    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
    if (typeof define === "function" && define.amd) define("jquery", [], function() {
        return jQuery;
    });
    var // Map over jQuery in case of overwrite
    _jQuery = window.jQuery, // Map over the $ in case of overwrite
    _$ = window.$;
    jQuery.noConflict = function(deep) {
        if (window.$ === jQuery) window.$ = _$;
        if (deep && window.jQuery === jQuery) window.jQuery = _jQuery;
        return jQuery;
    };
    // Expose jQuery and $ identifiers, even in AMD
    // (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
    // and CommonJS for browser emulators (#13566)
    if (typeof noGlobal === "undefined") window.jQuery = window.$ = jQuery;
    return jQuery;
});

},{}]},["4DVBA","6UHSv"], "6UHSv", "parcelRequire3748")

//# sourceMappingURL=app.js.map
