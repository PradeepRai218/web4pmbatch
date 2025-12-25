(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-compiler-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    var ReactSharedInternals = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)").__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    exports.c = function(size) {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher.useMemoCache(size);
    };
}();
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/cjs/react-compiler-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(as || href, replace ? 'replace' : 'push', scroll ?? true, linkInstanceRef.current);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = React.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/use-sync-external-store/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/react.ts
__turbopack_context__.s([
    "Provider",
    ()=>Provider_default,
    "ReactReduxContext",
    ()=>ReactReduxContext,
    "batch",
    ()=>batch,
    "connect",
    ()=>connect_default,
    "createDispatchHook",
    ()=>createDispatchHook,
    "createSelectorHook",
    ()=>createSelectorHook,
    "createStoreHook",
    ()=>createStoreHook,
    "shallowEqual",
    ()=>shallowEqual,
    "useDispatch",
    ()=>useDispatch,
    "useSelector",
    ()=>useSelector,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
// src/hooks/useSelector.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/use-sync-external-store/with-selector.js [app-client] (ecmascript)");
;
// src/utils/react-is.ts
var IS_REACT_19 = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].startsWith("19");
var REACT_ELEMENT_TYPE = /* @__PURE__ */ Symbol.for(IS_REACT_19 ? "react.transitional.element" : "react.element");
var REACT_PORTAL_TYPE = /* @__PURE__ */ Symbol.for("react.portal");
var REACT_FRAGMENT_TYPE = /* @__PURE__ */ Symbol.for("react.fragment");
var REACT_STRICT_MODE_TYPE = /* @__PURE__ */ Symbol.for("react.strict_mode");
var REACT_PROFILER_TYPE = /* @__PURE__ */ Symbol.for("react.profiler");
var REACT_CONSUMER_TYPE = /* @__PURE__ */ Symbol.for("react.consumer");
var REACT_CONTEXT_TYPE = /* @__PURE__ */ Symbol.for("react.context");
var REACT_FORWARD_REF_TYPE = /* @__PURE__ */ Symbol.for("react.forward_ref");
var REACT_SUSPENSE_TYPE = /* @__PURE__ */ Symbol.for("react.suspense");
var REACT_SUSPENSE_LIST_TYPE = /* @__PURE__ */ Symbol.for("react.suspense_list");
var REACT_MEMO_TYPE = /* @__PURE__ */ Symbol.for("react.memo");
var REACT_LAZY_TYPE = /* @__PURE__ */ Symbol.for("react.lazy");
var REACT_OFFSCREEN_TYPE = /* @__PURE__ */ Symbol.for("react.offscreen");
var REACT_CLIENT_REFERENCE = /* @__PURE__ */ Symbol.for("react.client.reference");
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Memo = REACT_MEMO_TYPE;
function isValidElementType(type) {
    return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE || type.getModuleId !== void 0) ? true : false;
}
function typeOf(object) {
    if (typeof object === "object" && object !== null) {
        const { $$typeof } = object;
        switch($$typeof){
            case REACT_ELEMENT_TYPE:
                switch(object = object.type, object){
                    case REACT_FRAGMENT_TYPE:
                    case REACT_PROFILER_TYPE:
                    case REACT_STRICT_MODE_TYPE:
                    case REACT_SUSPENSE_TYPE:
                    case REACT_SUSPENSE_LIST_TYPE:
                        return object;
                    default:
                        switch(object = object && object.$$typeof, object){
                            case REACT_CONTEXT_TYPE:
                            case REACT_FORWARD_REF_TYPE:
                            case REACT_LAZY_TYPE:
                            case REACT_MEMO_TYPE:
                                return object;
                            case REACT_CONSUMER_TYPE:
                                return object;
                            default:
                                return $$typeof;
                        }
                }
            case REACT_PORTAL_TYPE:
                return $$typeof;
        }
    }
}
function isContextConsumer(object) {
    return IS_REACT_19 ? typeOf(object) === REACT_CONSUMER_TYPE : typeOf(object) === REACT_CONTEXT_TYPE;
}
function isMemo(object) {
    return typeOf(object) === REACT_MEMO_TYPE;
}
// src/utils/warning.ts
function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (e) {}
}
// src/connect/verifySubselectors.ts
function verify(selector, methodName) {
    if (!selector) {
        throw new Error(`Unexpected value for ${methodName} in connect.`);
    } else if (methodName === "mapStateToProps" || methodName === "mapDispatchToProps") {
        if (!Object.prototype.hasOwnProperty.call(selector, "dependsOnOwnProps")) {
            warning(`The selector for ${methodName} of connect did not specify a value for dependsOnOwnProps.`);
        }
    }
}
function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps) {
    verify(mapStateToProps, "mapStateToProps");
    verify(mapDispatchToProps, "mapDispatchToProps");
    verify(mergeProps, "mergeProps");
}
// src/connect/selectorFactory.ts
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, { areStatesEqual, areOwnPropsEqual, areStatePropsEqual }) {
    let hasRunAtLeastOnce = false;
    let state;
    let ownProps;
    let stateProps;
    let dispatchProps;
    let mergedProps;
    function handleFirstCall(firstState, firstOwnProps) {
        state = firstState;
        ownProps = firstOwnProps;
        stateProps = mapStateToProps(state, ownProps);
        dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        hasRunAtLeastOnce = true;
        return mergedProps;
    }
    function handleNewPropsAndNewState() {
        stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewProps() {
        if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
        if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
        mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleNewState() {
        const nextStateProps = mapStateToProps(state, ownProps);
        const statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
        stateProps = nextStateProps;
        if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
        return mergedProps;
    }
    function handleSubsequentCalls(nextState, nextOwnProps) {
        const propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
        const stateChanged = !areStatesEqual(nextState, state, nextOwnProps, ownProps);
        state = nextState;
        ownProps = nextOwnProps;
        if (propsChanged && stateChanged) return handleNewPropsAndNewState();
        if (propsChanged) return handleNewProps();
        if (stateChanged) return handleNewState();
        return mergedProps;
    }
    return function pureFinalPropsSelector(nextState, nextOwnProps) {
        return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
}
function finalPropsSelectorFactory(dispatch, { initMapStateToProps, initMapDispatchToProps, initMergeProps, ...options }) {
    const mapStateToProps = initMapStateToProps(dispatch, options);
    const mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    const mergeProps = initMergeProps(dispatch, options);
    if ("TURBOPACK compile-time truthy", 1) {
        verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps);
    }
    return pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// src/utils/bindActionCreators.ts
function bindActionCreators(actionCreators, dispatch) {
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
            boundActionCreators[key] = (...args)=>dispatch(actionCreator(...args));
        }
    }
    return boundActionCreators;
}
// src/utils/isPlainObject.ts
function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    const proto = Object.getPrototypeOf(obj);
    if (proto === null) return true;
    let baseProto = proto;
    while(Object.getPrototypeOf(baseProto) !== null){
        baseProto = Object.getPrototypeOf(baseProto);
    }
    return proto === baseProto;
}
// src/utils/verifyPlainObject.ts
function verifyPlainObject(value, displayName, methodName) {
    if (!isPlainObject(value)) {
        warning(`${methodName}() in ${displayName} must return a plain object. Instead received ${value}.`);
    }
}
// src/connect/wrapMapToProps.ts
function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch) {
        const constant = getConstant(dispatch);
        function constantSelector() {
            return constant;
        }
        constantSelector.dependsOnOwnProps = false;
        return constantSelector;
    };
}
function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}
function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, { displayName }) {
        const proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
            return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch, void 0);
        };
        proxy.dependsOnOwnProps = true;
        proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
            proxy.mapToProps = mapToProps;
            proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
            let props = proxy(stateOrDispatch, ownProps);
            if (typeof props === "function") {
                proxy.mapToProps = props;
                proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
                props = proxy(stateOrDispatch, ownProps);
            }
            if ("TURBOPACK compile-time truthy", 1) verifyPlainObject(props, displayName, methodName);
            return props;
        };
        return proxy;
    };
}
// src/connect/invalidArgFactory.ts
function createInvalidArgFactory(arg, name) {
    return (dispatch, options)=>{
        throw new Error(`Invalid value of type ${typeof arg} for ${name} argument when connecting component ${options.wrappedComponentName}.`);
    };
}
// src/connect/mapDispatchToProps.ts
function mapDispatchToPropsFactory(mapDispatchToProps) {
    return mapDispatchToProps && typeof mapDispatchToProps === "object" ? wrapMapToPropsConstant((dispatch)=>// @ts-ignore
        bindActionCreators(mapDispatchToProps, dispatch)) : !mapDispatchToProps ? wrapMapToPropsConstant((dispatch)=>({
            dispatch
        })) : typeof mapDispatchToProps === "function" ? // @ts-ignore
    wrapMapToPropsFunc(mapDispatchToProps, "mapDispatchToProps") : createInvalidArgFactory(mapDispatchToProps, "mapDispatchToProps");
}
// src/connect/mapStateToProps.ts
function mapStateToPropsFactory(mapStateToProps) {
    return !mapStateToProps ? wrapMapToPropsConstant(()=>({})) : typeof mapStateToProps === "function" ? // @ts-ignore
    wrapMapToPropsFunc(mapStateToProps, "mapStateToProps") : createInvalidArgFactory(mapStateToProps, "mapStateToProps");
}
// src/connect/mergeProps.ts
function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return {
        ...ownProps,
        ...stateProps,
        ...dispatchProps
    };
}
function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, { displayName, areMergedPropsEqual }) {
        let hasRunOnce = false;
        let mergedProps;
        return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
            const nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
            if (hasRunOnce) {
                if (!areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
            } else {
                hasRunOnce = true;
                mergedProps = nextMergedProps;
                if ("TURBOPACK compile-time truthy", 1) verifyPlainObject(mergedProps, displayName, "mergeProps");
            }
            return mergedProps;
        };
    };
}
function mergePropsFactory(mergeProps) {
    return !mergeProps ? ()=>defaultMergeProps : typeof mergeProps === "function" ? wrapMergePropsFunc(mergeProps) : createInvalidArgFactory(mergeProps, "mergeProps");
}
// src/utils/batch.ts
function defaultNoopBatch(callback) {
    callback();
}
// src/utils/Subscription.ts
function createListenerCollection() {
    let first = null;
    let last = null;
    return {
        clear () {
            first = null;
            last = null;
        },
        notify () {
            defaultNoopBatch(()=>{
                let listener = first;
                while(listener){
                    listener.callback();
                    listener = listener.next;
                }
            });
        },
        get () {
            const listeners = [];
            let listener = first;
            while(listener){
                listeners.push(listener);
                listener = listener.next;
            }
            return listeners;
        },
        subscribe (callback) {
            let isSubscribed = true;
            const listener = last = {
                callback,
                next: null,
                prev: last
            };
            if (listener.prev) {
                listener.prev.next = listener;
            } else {
                first = listener;
            }
            return function unsubscribe() {
                if (!isSubscribed || first === null) return;
                isSubscribed = false;
                if (listener.next) {
                    listener.next.prev = listener.prev;
                } else {
                    last = listener.prev;
                }
                if (listener.prev) {
                    listener.prev.next = listener.next;
                } else {
                    first = listener.next;
                }
            };
        }
    };
}
var nullListeners = {
    notify () {},
    get: ()=>[]
};
function createSubscription(store, parentSub) {
    let unsubscribe;
    let listeners = nullListeners;
    let subscriptionsAmount = 0;
    let selfSubscribed = false;
    function addNestedSub(listener) {
        trySubscribe();
        const cleanupListener = listeners.subscribe(listener);
        let removed = false;
        return ()=>{
            if (!removed) {
                removed = true;
                cleanupListener();
                tryUnsubscribe();
            }
        };
    }
    function notifyNestedSubs() {
        listeners.notify();
    }
    function handleChangeWrapper() {
        if (subscription.onStateChange) {
            subscription.onStateChange();
        }
    }
    function isSubscribed() {
        return selfSubscribed;
    }
    function trySubscribe() {
        subscriptionsAmount++;
        if (!unsubscribe) {
            unsubscribe = parentSub ? parentSub.addNestedSub(handleChangeWrapper) : store.subscribe(handleChangeWrapper);
            listeners = createListenerCollection();
        }
    }
    function tryUnsubscribe() {
        subscriptionsAmount--;
        if (unsubscribe && subscriptionsAmount === 0) {
            unsubscribe();
            unsubscribe = void 0;
            listeners.clear();
            listeners = nullListeners;
        }
    }
    function trySubscribeSelf() {
        if (!selfSubscribed) {
            selfSubscribed = true;
            trySubscribe();
        }
    }
    function tryUnsubscribeSelf() {
        if (selfSubscribed) {
            selfSubscribed = false;
            tryUnsubscribe();
        }
    }
    const subscription = {
        addNestedSub,
        notifyNestedSubs,
        handleChangeWrapper,
        isSubscribed,
        trySubscribe: trySubscribeSelf,
        tryUnsubscribe: tryUnsubscribeSelf,
        getListeners: ()=>listeners
    };
    return subscription;
}
// src/utils/useIsomorphicLayoutEffect.ts
var canUseDOM = ()=>!!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
var isDOM = /* @__PURE__ */ canUseDOM();
var isRunningInReactNative = ()=>typeof navigator !== "undefined" && navigator.product === "ReactNative";
var isReactNative = /* @__PURE__ */ isRunningInReactNative();
var getUseIsomorphicLayoutEffect = ()=>isDOM || isReactNative ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var useIsomorphicLayoutEffect = /* @__PURE__ */ getUseIsomorphicLayoutEffect();
// src/utils/shallowEqual.ts
function is(x, y) {
    if (x === y) {
        return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) return false;
    for(let i = 0; i < keysA.length; i++){
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
// src/utils/hoistStatics.ts
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};
var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};
var FORWARD_REF_STATICS = {
    $$typeof: true,
    render: true,
    defaultProps: true,
    displayName: true,
    propTypes: true
};
var MEMO_STATICS = {
    $$typeof: true,
    compare: true,
    defaultProps: true,
    displayName: true,
    propTypes: true,
    type: true
};
var TYPE_STATICS = {
    [ForwardRef]: FORWARD_REF_STATICS,
    [Memo]: MEMO_STATICS
};
function getStatics(component) {
    if (isMemo(component)) {
        return MEMO_STATICS;
    }
    return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent) {
    if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
            const inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent);
            }
        }
        let keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        const targetStatics = getStatics(targetComponent);
        const sourceStatics = getStatics(sourceComponent);
        for(let i = 0; i < keys.length; ++i){
            const key = keys[i];
            if (!KNOWN_STATICS[key] && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                const descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }
    }
    return targetComponent;
}
// src/components/Context.ts
var ContextKey = /* @__PURE__ */ Symbol.for(`react-redux-context`);
var gT = typeof globalThis !== "undefined" ? globalThis : /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */ {};
function getContext() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]) return {};
    const contextMap = gT[ContextKey] ??= /* @__PURE__ */ new Map();
    let realContext = contextMap.get(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"]);
    if (!realContext) {
        realContext = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"](null);
        if ("TURBOPACK compile-time truthy", 1) {
            realContext.displayName = "ReactRedux";
        }
        contextMap.set(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"], realContext);
    }
    return realContext;
}
var ReactReduxContext = /* @__PURE__ */ getContext();
// src/components/connect.tsx
var NO_SUBSCRIPTION_ARRAY = [
    null,
    null
];
var stringifyComponent = (Comp)=>{
    try {
        return JSON.stringify(Comp);
    } catch (err) {
        return String(Comp);
    }
};
function useIsomorphicLayoutEffectWithArgs(effectFunc, effectArgs, dependencies) {
    useIsomorphicLayoutEffect({
        "useIsomorphicLayoutEffectWithArgs.useIsomorphicLayoutEffect": ()=>effectFunc(...effectArgs)
    }["useIsomorphicLayoutEffectWithArgs.useIsomorphicLayoutEffect"], dependencies);
}
function captureWrapperProps(lastWrapperProps, lastChildProps, renderIsScheduled, wrapperProps, childPropsFromStoreUpdate, notifyNestedSubs) {
    lastWrapperProps.current = wrapperProps;
    renderIsScheduled.current = false;
    if (childPropsFromStoreUpdate.current) {
        childPropsFromStoreUpdate.current = null;
        notifyNestedSubs();
    }
}
function subscribeUpdates(shouldHandleStateChanges, store, subscription, childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, additionalSubscribeListener) {
    if (!shouldHandleStateChanges) return ()=>{};
    let didUnsubscribe = false;
    let lastThrownError = null;
    const checkForUpdates = ()=>{
        if (didUnsubscribe || !isMounted.current) {
            return;
        }
        const latestStoreState = store.getState();
        let newChildProps, error;
        try {
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
        } catch (e) {
            error = e;
            lastThrownError = e;
        }
        if (!error) {
            lastThrownError = null;
        }
        if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
                notifyNestedSubs();
            }
        } else {
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true;
            additionalSubscribeListener();
        }
    };
    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    const unsubscribeWrapper = ()=>{
        didUnsubscribe = true;
        subscription.tryUnsubscribe();
        subscription.onStateChange = null;
        if (lastThrownError) {
            throw lastThrownError;
        }
    };
    return unsubscribeWrapper;
}
function strictEqual(a, b) {
    return a === b;
}
var hasWarnedAboutDeprecatedPureOption = false;
function connect(mapStateToProps, mapDispatchToProps, mergeProps, { // The `pure` option has been removed, so TS doesn't like us destructuring this to check its existence.
// @ts-ignore
pure, areStatesEqual = strictEqual, areOwnPropsEqual = shallowEqual, areStatePropsEqual = shallowEqual, areMergedPropsEqual = shallowEqual, // use React's forwardRef to expose a ref of the wrapped component
forwardRef = false, // the context consumer to use
context = ReactReduxContext } = {}) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (pure !== void 0 && !hasWarnedAboutDeprecatedPureOption) {
            hasWarnedAboutDeprecatedPureOption = true;
            warning('The `pure` option has been removed. `connect` is now always a "pure/memoized" component');
        }
    }
    const Context = context;
    const initMapStateToProps = mapStateToPropsFactory(mapStateToProps);
    const initMapDispatchToProps = mapDispatchToPropsFactory(mapDispatchToProps);
    const initMergeProps = mergePropsFactory(mergeProps);
    const shouldHandleStateChanges = Boolean(mapStateToProps);
    const wrapWithConnect = (WrappedComponent)=>{
        if ("TURBOPACK compile-time truthy", 1) {
            const isValid = /* @__PURE__ */ isValidElementType(WrappedComponent);
            if (!isValid) throw new Error(`You must pass a component to the function returned by connect. Instead received ${stringifyComponent(WrappedComponent)}`);
        }
        const wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
        const displayName = `Connect(${wrappedComponentName})`;
        const selectorFactoryOptions = {
            shouldHandleStateChanges,
            displayName,
            wrappedComponentName,
            WrappedComponent,
            // @ts-ignore
            initMapStateToProps,
            initMapDispatchToProps,
            initMergeProps,
            areStatesEqual,
            areStatePropsEqual,
            areOwnPropsEqual,
            areMergedPropsEqual
        };
        function ConnectFunction(props) {
            const [propsContext, reactReduxForwardedRef, wrapperProps] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo": ()=>{
                    const { reactReduxForwardedRef: reactReduxForwardedRef2, ...wrapperProps2 } = props;
                    return [
                        props.context,
                        reactReduxForwardedRef2,
                        wrapperProps2
                    ];
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo"], [
                props
            ]);
            const ContextToUse = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[ContextToUse]": ()=>{
                    let ResultContext = Context;
                    if (propsContext?.Consumer) {
                        if ("TURBOPACK compile-time truthy", 1) {
                            const isValid = /* @__PURE__ */ isContextConsumer(// @ts-ignore
                            /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](propsContext.Consumer, null));
                            if (!isValid) {
                                throw new Error("You must pass a valid React context consumer as `props.context`");
                            }
                            ResultContext = propsContext;
                        }
                    }
                    return ResultContext;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[ContextToUse]"], [
                propsContext,
                Context
            ]);
            const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](ContextToUse);
            const didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
            const didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
            if (("TURBOPACK compile-time value", "development") !== "production" && !didStoreComeFromProps && !didStoreComeFromContext) {
                throw new Error(`Could not find "store" in the context of "${displayName}". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to ${displayName} in connect options.`);
            }
            const store = didStoreComeFromProps ? props.store : contextValue.store;
            const getServerState = didStoreComeFromContext ? contextValue.getServerState : store.getState;
            const childPropsSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[childPropsSelector]": ()=>{
                    return finalPropsSelectorFactory(store.dispatch, selectorFactoryOptions);
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[childPropsSelector]"], [
                store
            ]);
            const [subscription, notifyNestedSubs] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo": ()=>{
                    if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY;
                    const subscription2 = createSubscription(store, didStoreComeFromProps ? void 0 : contextValue.subscription);
                    const notifyNestedSubs2 = subscription2.notifyNestedSubs.bind(subscription2);
                    return [
                        subscription2,
                        notifyNestedSubs2
                    ];
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo"], [
                store,
                didStoreComeFromProps,
                contextValue
            ]);
            const overriddenContextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[overriddenContextValue]": ()=>{
                    if (didStoreComeFromProps) {
                        return contextValue;
                    }
                    return {
                        ...contextValue,
                        subscription
                    };
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[overriddenContextValue]"], [
                didStoreComeFromProps,
                contextValue,
                subscription
            ]);
            const lastChildProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            const lastWrapperProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](wrapperProps);
            const childPropsFromStoreUpdate = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            const renderIsScheduled = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
            const isMounted = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](false);
            const latestSubscriptionCallbackError = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](void 0);
            useIsomorphicLayoutEffect({
                "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                    isMounted.current = true;
                    return ({
                        "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                            isMounted.current = false;
                        }
                    })["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"];
                }
            }["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"], []);
            const actualChildPropsSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector]": ()=>{
                    const selector = {
                        "connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector].selector": ()=>{
                            if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
                                return childPropsFromStoreUpdate.current;
                            }
                            return childPropsSelector(store.getState(), wrapperProps);
                        }
                    }["connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector].selector"];
                    return selector;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[actualChildPropsSelector]"], [
                store,
                wrapperProps
            ]);
            const subscribeForReact = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact]": ()=>{
                    const subscribe = {
                        "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe": (reactListener)=>{
                            if (!subscription) {
                                return ({
                                    "connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe": ()=>{}
                                })["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe"];
                            }
                            return subscribeUpdates(shouldHandleStateChanges, store, subscription, // @ts-ignore
                            childPropsSelector, lastWrapperProps, lastChildProps, renderIsScheduled, isMounted, childPropsFromStoreUpdate, notifyNestedSubs, reactListener);
                        }
                    }["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact].subscribe"];
                    return subscribe;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[subscribeForReact]"], [
                subscription
            ]);
            useIsomorphicLayoutEffectWithArgs(captureWrapperProps, [
                lastWrapperProps,
                lastChildProps,
                renderIsScheduled,
                wrapperProps,
                childPropsFromStoreUpdate,
                notifyNestedSubs
            ]);
            let actualChildProps;
            try {
                actualChildProps = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"](// TODO We're passing through a big wrapper that does a bunch of extra side effects besides subscribing
                subscribeForReact, // TODO This is incredibly hacky. We've already processed the store update and calculated new child props,
                // TODO and we're just passing that through so it triggers a re-render for us rather than relying on `uSES`.
                actualChildPropsSelector, getServerState ? ({
                    "connect.wrapWithConnect.ConnectFunction.useSyncExternalStore": ()=>childPropsSelector(getServerState(), wrapperProps)
                })["connect.wrapWithConnect.ConnectFunction.useSyncExternalStore"] : actualChildPropsSelector);
            } catch (err) {
                if (latestSubscriptionCallbackError.current) {
                    ;
                    err.message += `
The error may be correlated with this previous error:
${latestSubscriptionCallbackError.current.stack}

`;
                }
                throw err;
            }
            useIsomorphicLayoutEffect({
                "connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect": ()=>{
                    latestSubscriptionCallbackError.current = void 0;
                    childPropsFromStoreUpdate.current = void 0;
                    lastChildProps.current = actualChildProps;
                }
            }["connect.wrapWithConnect.ConnectFunction.useIsomorphicLayoutEffect"]);
            const renderedWrappedComponent = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[renderedWrappedComponent]": ()=>{
                    return(// @ts-ignore
                    /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](WrappedComponent, {
                        ...actualChildProps,
                        ref: reactReduxForwardedRef
                    }));
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[renderedWrappedComponent]"], [
                reactReduxForwardedRef,
                WrappedComponent,
                actualChildProps
            ]);
            const renderedChild = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
                "connect.wrapWithConnect.ConnectFunction.useMemo[renderedChild]": ()=>{
                    if (shouldHandleStateChanges) {
                        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](ContextToUse.Provider, {
                            value: overriddenContextValue
                        }, renderedWrappedComponent);
                    }
                    return renderedWrappedComponent;
                }
            }["connect.wrapWithConnect.ConnectFunction.useMemo[renderedChild]"], [
                ContextToUse,
                renderedWrappedComponent,
                overriddenContextValue
            ]);
            return renderedChild;
        }
        const _Connect = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"](ConnectFunction);
        const Connect = _Connect;
        Connect.WrappedComponent = WrappedComponent;
        Connect.displayName = ConnectFunction.displayName = displayName;
        if (forwardRef) {
            const _forwarded = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](function forwardConnectRef(props, ref) {
                return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Connect, {
                    ...props,
                    reactReduxForwardedRef: ref
                });
            });
            const forwarded = _forwarded;
            forwarded.displayName = displayName;
            forwarded.WrappedComponent = WrappedComponent;
            return /* @__PURE__ */ hoistNonReactStatics(forwarded, WrappedComponent);
        }
        return /* @__PURE__ */ hoistNonReactStatics(Connect, WrappedComponent);
    };
    return wrapWithConnect;
}
var connect_default = connect;
// src/components/Provider.tsx
function Provider(providerProps) {
    const { children, context, serverState, store } = providerProps;
    const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Provider.useMemo[contextValue]": ()=>{
            const subscription = createSubscription(store);
            const baseContextValue = {
                store,
                subscription,
                getServerState: serverState ? ({
                    "Provider.useMemo[contextValue]": ()=>serverState
                })["Provider.useMemo[contextValue]"] : void 0
            };
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            else {
                const { identityFunctionCheck = "once", stabilityCheck = "once" } = providerProps;
                return /* @__PURE__ */ Object.assign(baseContextValue, {
                    stabilityCheck,
                    identityFunctionCheck
                });
            }
        }
    }["Provider.useMemo[contextValue]"], [
        store,
        serverState
    ]);
    const previousState = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "Provider.useMemo[previousState]": ()=>store.getState()
    }["Provider.useMemo[previousState]"], [
        store
    ]);
    useIsomorphicLayoutEffect({
        "Provider.useIsomorphicLayoutEffect": ()=>{
            const { subscription } = contextValue;
            subscription.onStateChange = subscription.notifyNestedSubs;
            subscription.trySubscribe();
            if (previousState !== store.getState()) {
                subscription.notifyNestedSubs();
            }
            return ({
                "Provider.useIsomorphicLayoutEffect": ()=>{
                    subscription.tryUnsubscribe();
                    subscription.onStateChange = void 0;
                }
            })["Provider.useIsomorphicLayoutEffect"];
        }
    }["Provider.useIsomorphicLayoutEffect"], [
        contextValue,
        previousState
    ]);
    const Context = context || ReactReduxContext;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"](Context.Provider, {
        value: contextValue
    }, children);
}
var Provider_default = Provider;
// src/hooks/useReduxContext.ts
function createReduxContextHook(context = ReactReduxContext) {
    return function useReduxContext2() {
        const contextValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"](context);
        if (("TURBOPACK compile-time value", "development") !== "production" && !contextValue) {
            throw new Error("could not find react-redux context value; please ensure the component is wrapped in a <Provider>");
        }
        return contextValue;
    };
}
var useReduxContext = /* @__PURE__ */ createReduxContextHook();
// src/hooks/useStore.ts
function createStoreHook(context = ReactReduxContext) {
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : // @ts-ignore
    createReduxContextHook(context);
    const useStore2 = ()=>{
        const { store } = useReduxContext2();
        return store;
    };
    Object.assign(useStore2, {
        withTypes: ()=>useStore2
    });
    return useStore2;
}
var useStore = /* @__PURE__ */ createStoreHook();
// src/hooks/useDispatch.ts
function createDispatchHook(context = ReactReduxContext) {
    const useStore2 = context === ReactReduxContext ? useStore : createStoreHook(context);
    const useDispatch2 = ()=>{
        const store = useStore2();
        return store.dispatch;
    };
    Object.assign(useDispatch2, {
        withTypes: ()=>useDispatch2
    });
    return useDispatch2;
}
var useDispatch = /* @__PURE__ */ createDispatchHook();
;
var refEquality = (a, b)=>a === b;
function createSelectorHook(context = ReactReduxContext) {
    const useReduxContext2 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
    const useSelector2 = (selector, equalityFnOrOptions = {})=>{
        const { equalityFn = refEquality } = typeof equalityFnOrOptions === "function" ? {
            equalityFn: equalityFnOrOptions
        } : equalityFnOrOptions;
        if ("TURBOPACK compile-time truthy", 1) {
            if (!selector) {
                throw new Error(`You must pass a selector to useSelector`);
            }
            if (typeof selector !== "function") {
                throw new Error(`You must pass a function as a selector to useSelector`);
            }
            if (typeof equalityFn !== "function") {
                throw new Error(`You must pass a function as an equality function to useSelector`);
            }
        }
        const reduxContext = useReduxContext2();
        const { store, subscription, getServerState } = reduxContext;
        const firstRun = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](true);
        const wrappedSelector = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"]({
            [selector.name] (state) {
                const selected = selector(state);
                if ("TURBOPACK compile-time truthy", 1) {
                    const { devModeChecks = {} } = typeof equalityFnOrOptions === "function" ? {} : equalityFnOrOptions;
                    const { identityFunctionCheck, stabilityCheck } = reduxContext;
                    const { identityFunctionCheck: finalIdentityFunctionCheck, stabilityCheck: finalStabilityCheck } = {
                        stabilityCheck,
                        identityFunctionCheck,
                        ...devModeChecks
                    };
                    if (finalStabilityCheck === "always" || finalStabilityCheck === "once" && firstRun.current) {
                        const toCompare = selector(state);
                        if (!equalityFn(selected, toCompare)) {
                            let stack = void 0;
                            try {
                                throw new Error();
                            } catch (e) {
                                ;
                                ({ stack } = e);
                            }
                            console.warn("Selector " + (selector.name || "unknown") + " returned a different result when called with the same parameters. This can lead to unnecessary rerenders.\nSelectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization", {
                                state,
                                selected,
                                selected2: toCompare,
                                stack
                            });
                        }
                    }
                    if (finalIdentityFunctionCheck === "always" || finalIdentityFunctionCheck === "once" && firstRun.current) {
                        if (selected === state) {
                            let stack = void 0;
                            try {
                                throw new Error();
                            } catch (e) {
                                ;
                                ({ stack } = e);
                            }
                            console.warn("Selector " + (selector.name || "unknown") + " returned the root state when called. This can lead to unnecessary rerenders.\nSelectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.", {
                                stack
                            });
                        }
                    }
                    if (firstRun.current) firstRun.current = false;
                }
                return selected;
            }
        }[selector.name], [
            selector
        ]);
        const selectedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(subscription.addNestedSub, store.getState, getServerState || store.getState, wrappedSelector, equalityFn);
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"](selectedState);
        return selectedState;
    };
    Object.assign(useSelector2, {
        withTypes: ()=>useSelector2
    });
    return useSelector2;
}
var useSelector = /* @__PURE__ */ createSelectorHook();
// src/exports.ts
var batch = defaultNoopBatch;
;
 //# sourceMappingURL=react-redux.mjs.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*! js-cookie v3.0.5 | MIT */ /* eslint-disable no-var */ __turbopack_context__.s([
    "default",
    ()=>api
]);
function assign(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i];
        for(var key in source){
            target[key] = source[key];
        }
    }
    return target;
}
/* eslint-enable no-var */ /* eslint-disable no-var */ var defaultConverter = {
    read: function(value) {
        if (value[0] === '"') {
            value = value.slice(1, -1);
        }
        return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
    },
    write: function(value) {
        return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
    }
};
/* eslint-enable no-var */ /* eslint-disable no-var */ function init(converter, defaultAttributes) {
    function set(name, value, attributes) {
        if (typeof document === 'undefined') {
            return;
        }
        attributes = assign({}, defaultAttributes, attributes);
        if (typeof attributes.expires === 'number') {
            attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
        }
        if (attributes.expires) {
            attributes.expires = attributes.expires.toUTCString();
        }
        name = encodeURIComponent(name).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
        var stringifiedAttributes = '';
        for(var attributeName in attributes){
            if (!attributes[attributeName]) {
                continue;
            }
            stringifiedAttributes += '; ' + attributeName;
            if (attributes[attributeName] === true) {
                continue;
            }
            // Considers RFC 6265 section 5.2:
            // ...
            // 3.  If the remaining unparsed-attributes contains a %x3B (";")
            //     character:
            // Consume the characters of the unparsed-attributes up to,
            // not including, the first %x3B (";") character.
            // ...
            stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
        }
        return document.cookie = name + '=' + converter.write(value, name) + stringifiedAttributes;
    }
    function get(name) {
        if (typeof document === 'undefined' || arguments.length && !name) {
            return;
        }
        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all.
        var cookies = document.cookie ? document.cookie.split('; ') : [];
        var jar = {};
        for(var i = 0; i < cookies.length; i++){
            var parts = cookies[i].split('=');
            var value = parts.slice(1).join('=');
            try {
                var found = decodeURIComponent(parts[0]);
                jar[found] = converter.read(value, found);
                if (name === found) {
                    break;
                }
            } catch (e) {}
        }
        return name ? jar[name] : jar;
    }
    return Object.create({
        set,
        get,
        remove: function(name, attributes) {
            set(name, '', assign({}, attributes, {
                expires: -1
            }));
        },
        withAttributes: function(attributes) {
            return init(this.converter, assign({}, this.attributes, attributes));
        },
        withConverter: function(converter) {
            return init(assign({}, this.converter, converter), this.attributes);
        }
    }, {
        attributes: {
            value: Object.freeze(defaultAttributes)
        },
        converter: {
            value: Object.freeze(converter)
        }
    });
}
var api = init(defaultConverter, {
    path: '/'
});
;
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/immer/dist/immer.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/env.ts
__turbopack_context__.s([
    "Immer",
    ()=>Immer2,
    "applyPatches",
    ()=>applyPatches,
    "castDraft",
    ()=>castDraft,
    "castImmutable",
    ()=>castImmutable,
    "createDraft",
    ()=>createDraft,
    "current",
    ()=>current,
    "enableMapSet",
    ()=>enableMapSet,
    "enablePatches",
    ()=>enablePatches,
    "finishDraft",
    ()=>finishDraft,
    "freeze",
    ()=>freeze,
    "immerable",
    ()=>DRAFTABLE,
    "isDraft",
    ()=>isDraft,
    "isDraftable",
    ()=>isDraftable,
    "nothing",
    ()=>NOTHING,
    "original",
    ()=>original,
    "produce",
    ()=>produce,
    "produceWithPatches",
    ()=>produceWithPatches,
    "setAutoFreeze",
    ()=>setAutoFreeze,
    "setUseStrictIteration",
    ()=>setUseStrictIteration,
    "setUseStrictShallowCopy",
    ()=>setUseStrictShallowCopy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
// src/utils/errors.ts
var errors = ("TURBOPACK compile-time truthy", 1) ? [
    // All error codes, starting by 0:
    function(plugin) {
        return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
    },
    function(thing) {
        return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
    },
    "This object has been frozen and should not be mutated",
    function(data) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
    },
    "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    "Immer forbids circular references",
    "The first or second argument to `produce` must be a function",
    "The third argument to `produce` must be a function or undefined",
    "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    "First argument to `finishDraft` must be a draft returned by `createDraft`",
    function(thing) {
        return `'current' expects a draft, got: ${thing}`;
    },
    "Object.defineProperty() cannot be used on an Immer draft",
    "Object.setPrototypeOf() cannot be used on an Immer draft",
    "Immer only supports deleting array indices",
    "Immer only supports setting array indices and the 'length' property",
    function(thing) {
        return `'original' expects a draft, got: ${thing}`;
    }
] : "TURBOPACK unreachable";
function die(error, ...args) {
    if ("TURBOPACK compile-time truthy", 1) {
        const e = errors[error];
        const msg = isFunction(e) ? e.apply(null, args) : e;
        throw new Error(`[Immer] ${msg}`);
    }
    throw new Error(`[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`);
}
// src/utils/common.ts
var O = Object;
var getPrototypeOf = O.getPrototypeOf;
var CONSTRUCTOR = "constructor";
var PROTOTYPE = "prototype";
var CONFIGURABLE = "configurable";
var ENUMERABLE = "enumerable";
var WRITABLE = "writable";
var VALUE = "value";
var isDraft = (value)=>!!value && !!value[DRAFT_STATE];
function isDraftable(value) {
    if (!value) return false;
    return isPlainObject(value) || isArray(value) || !!value[DRAFTABLE] || !!value[CONSTRUCTOR]?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = O[PROTOTYPE][CONSTRUCTOR].toString();
var cachedCtorStrings = /* @__PURE__ */ new WeakMap();
function isPlainObject(value) {
    if (!value || !isObjectish(value)) return false;
    const proto = getPrototypeOf(value);
    if (proto === null || proto === O[PROTOTYPE]) return true;
    const Ctor = O.hasOwnProperty.call(proto, CONSTRUCTOR) && proto[CONSTRUCTOR];
    if (Ctor === Object) return true;
    if (!isFunction(Ctor)) return false;
    let ctorString = cachedCtorStrings.get(Ctor);
    if (ctorString === void 0) {
        ctorString = Function.toString.call(Ctor);
        cachedCtorStrings.set(Ctor, ctorString);
    }
    return ctorString === objectCtorString;
}
function original(value) {
    if (!isDraft(value)) die(15, value);
    return value[DRAFT_STATE].base_;
}
function each(obj, iter, strict = true) {
    if (getArchtype(obj) === 0 /* Object */ ) {
        const keys = strict ? Reflect.ownKeys(obj) : O.keys(obj);
        keys.forEach((key)=>{
            iter(key, obj[key], obj);
        });
    } else {
        obj.forEach((entry, index)=>iter(index, entry, obj));
    }
}
function getArchtype(thing) {
    const state = thing[DRAFT_STATE];
    return state ? state.type_ : isArray(thing) ? 1 /* Array */  : isMap(thing) ? 2 /* Map */  : isSet(thing) ? 3 /* Set */  : 0 /* Object */ ;
}
var has = (thing, prop, type = getArchtype(thing))=>type === 2 /* Map */  ? thing.has(prop) : O[PROTOTYPE].hasOwnProperty.call(thing, prop);
var get = (thing, prop, type = getArchtype(thing))=>// @ts-ignore
    type === 2 /* Map */  ? thing.get(prop) : thing[prop];
var set = (thing, propOrOldValue, value, type = getArchtype(thing))=>{
    if (type === 2 /* Map */ ) thing.set(propOrOldValue, value);
    else if (type === 3 /* Set */ ) {
        thing.add(value);
    } else thing[propOrOldValue] = value;
};
function is(x, y) {
    if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
    } else {
        return x !== x && y !== y;
    }
}
var isArray = Array.isArray;
var isMap = (target)=>target instanceof Map;
var isSet = (target)=>target instanceof Set;
var isObjectish = (target)=>typeof target === "object";
var isFunction = (target)=>typeof target === "function";
var isBoolean = (target)=>typeof target === "boolean";
var getProxyDraft = (value)=>{
    if (!isObjectish(value)) return null;
    return value?.[DRAFT_STATE];
};
var latest = (state)=>state.copy_ || state.base_;
var getValue = (value)=>{
    const proxyDraft = getProxyDraft(value);
    return proxyDraft ? proxyDraft.copy_ ?? proxyDraft.base_ : value;
};
var getFinalValue = (state)=>state.modified_ ? state.copy_ : state.base_;
function shallowCopy(base, strict) {
    if (isMap(base)) {
        return new Map(base);
    }
    if (isSet(base)) {
        return new Set(base);
    }
    if (isArray(base)) return Array[PROTOTYPE].slice.call(base);
    const isPlain = isPlainObject(base);
    if (strict === true || strict === "class_only" && !isPlain) {
        const descriptors = O.getOwnPropertyDescriptors(base);
        delete descriptors[DRAFT_STATE];
        let keys = Reflect.ownKeys(descriptors);
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            const desc = descriptors[key];
            if (desc[WRITABLE] === false) {
                desc[WRITABLE] = true;
                desc[CONFIGURABLE] = true;
            }
            if (desc.get || desc.set) descriptors[key] = {
                [CONFIGURABLE]: true,
                [WRITABLE]: true,
                // could live with !!desc.set as well here...
                [ENUMERABLE]: desc[ENUMERABLE],
                [VALUE]: base[key]
            };
        }
        return O.create(getPrototypeOf(base), descriptors);
    } else {
        const proto = getPrototypeOf(base);
        if (proto !== null && isPlain) {
            return {
                ...base
            };
        }
        const obj = O.create(proto);
        return O.assign(obj, base);
    }
}
function freeze(obj, deep = false) {
    if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj)) return obj;
    if (getArchtype(obj) > 1) {
        O.defineProperties(obj, {
            set: dontMutateMethodOverride,
            add: dontMutateMethodOverride,
            clear: dontMutateMethodOverride,
            delete: dontMutateMethodOverride
        });
    }
    O.freeze(obj);
    if (deep) each(obj, (_key, value)=>{
        freeze(value, true);
    }, false);
    return obj;
}
function dontMutateFrozenCollections() {
    die(2);
}
var dontMutateMethodOverride = {
    [VALUE]: dontMutateFrozenCollections
};
function isFrozen(obj) {
    if (obj === null || !isObjectish(obj)) return true;
    return O.isFrozen(obj);
}
// src/utils/plugins.ts
var PluginMapSet = "MapSet";
var PluginPatches = "Patches";
var plugins = {};
function getPlugin(pluginKey) {
    const plugin = plugins[pluginKey];
    if (!plugin) {
        die(0, pluginKey);
    }
    return plugin;
}
var isPluginLoaded = (pluginKey)=>!!plugins[pluginKey];
function loadPlugin(pluginKey, implementation) {
    if (!plugins[pluginKey]) plugins[pluginKey] = implementation;
}
// src/core/scope.ts
var currentScope;
var getCurrentScope = ()=>currentScope;
var createScope = (parent_, immer_)=>({
        drafts_: [],
        parent_,
        immer_,
        // Whenever the modified draft contains a draft from another scope, we
        // need to prevent auto-freezing so the unowned draft can be finalized.
        canAutoFreeze_: true,
        unfinalizedDrafts_: 0,
        handledSet_: /* @__PURE__ */ new Set(),
        processedForPatches_: /* @__PURE__ */ new Set(),
        mapSetPlugin_: isPluginLoaded(PluginMapSet) ? getPlugin(PluginMapSet) : void 0
    });
function usePatchesInScope(scope, patchListener) {
    if (patchListener) {
        scope.patchPlugin_ = getPlugin(PluginPatches);
        scope.patches_ = [];
        scope.inversePatches_ = [];
        scope.patchListener_ = patchListener;
    }
}
function revokeScope(scope) {
    leaveScope(scope);
    scope.drafts_.forEach(revokeDraft);
    scope.drafts_ = null;
}
function leaveScope(scope) {
    if (scope === currentScope) {
        currentScope = scope.parent_;
    }
}
var enterScope = (immer2)=>currentScope = createScope(currentScope, immer2);
function revokeDraft(draft) {
    const state = draft[DRAFT_STATE];
    if (state.type_ === 0 /* Object */  || state.type_ === 1 /* Array */ ) state.revoke_();
    else state.revoked_ = true;
}
// src/core/finalize.ts
function processResult(result, scope) {
    scope.unfinalizedDrafts_ = scope.drafts_.length;
    const baseDraft = scope.drafts_[0];
    const isReplaced = result !== void 0 && result !== baseDraft;
    if (isReplaced) {
        if (baseDraft[DRAFT_STATE].modified_) {
            revokeScope(scope);
            die(4);
        }
        if (isDraftable(result)) {
            result = finalize(scope, result);
        }
        const { patchPlugin_ } = scope;
        if (patchPlugin_) {
            patchPlugin_.generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope);
        }
    } else {
        result = finalize(scope, baseDraft);
    }
    maybeFreeze(scope, result, true);
    revokeScope(scope);
    if (scope.patches_) {
        scope.patchListener_(scope.patches_, scope.inversePatches_);
    }
    return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value) {
    if (isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    if (!state) {
        const finalValue = handleValue(value, rootScope.handledSet_, rootScope);
        return finalValue;
    }
    if (!isSameScope(state, rootScope)) {
        return value;
    }
    if (!state.modified_) {
        return state.base_;
    }
    if (!state.finalized_) {
        const { callbacks_ } = state;
        if (callbacks_) {
            while(callbacks_.length > 0){
                const callback = callbacks_.pop();
                callback(rootScope);
            }
        }
        generatePatchesAndFinalize(state, rootScope);
    }
    return state.copy_;
}
function maybeFreeze(scope, value, deep = false) {
    if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
        freeze(value, deep);
    }
}
function markStateFinalized(state) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
}
var isSameScope = (state, rootScope)=>state.scope_ === rootScope;
var EMPTY_LOCATIONS_RESULT = [];
function updateDraftInParent(parent, draftValue, finalizedValue, originalKey) {
    const parentCopy = latest(parent);
    const parentType = parent.type_;
    if (originalKey !== void 0) {
        const currentValue = get(parentCopy, originalKey, parentType);
        if (currentValue === draftValue) {
            set(parentCopy, originalKey, finalizedValue, parentType);
            return;
        }
    }
    if (!parent.draftLocations_) {
        const draftLocations = parent.draftLocations_ = /* @__PURE__ */ new Map();
        each(parentCopy, (key, value)=>{
            if (isDraft(value)) {
                const keys = draftLocations.get(value) || [];
                keys.push(key);
                draftLocations.set(value, keys);
            }
        });
    }
    const locations = parent.draftLocations_.get(draftValue) ?? EMPTY_LOCATIONS_RESULT;
    for (const location of locations){
        set(parentCopy, location, finalizedValue, parentType);
    }
}
function registerChildFinalizationCallback(parent, child, key) {
    parent.callbacks_.push(function childCleanup(rootScope) {
        const state = child;
        if (!state || !isSameScope(state, rootScope)) {
            return;
        }
        rootScope.mapSetPlugin_?.fixSetContents(state);
        const finalizedValue = getFinalValue(state);
        updateDraftInParent(parent, state.draft_ ?? state, finalizedValue, key);
        generatePatchesAndFinalize(state, rootScope);
    });
}
function generatePatchesAndFinalize(state, rootScope) {
    const shouldFinalize = state.modified_ && !state.finalized_ && (state.type_ === 3 /* Set */  || (state.assigned_?.size ?? 0) > 0);
    if (shouldFinalize) {
        const { patchPlugin_ } = rootScope;
        if (patchPlugin_) {
            const basePath = patchPlugin_.getPath(state);
            if (basePath) {
                patchPlugin_.generatePatches_(state, basePath, rootScope);
            }
        }
        markStateFinalized(state);
    }
}
function handleCrossReference(target, key, value) {
    const { scope_ } = target;
    if (isDraft(value)) {
        const state = value[DRAFT_STATE];
        if (isSameScope(state, scope_)) {
            state.callbacks_.push(function crossReferenceCleanup() {
                prepareCopy(target);
                const finalizedValue = getFinalValue(state);
                updateDraftInParent(target, value, finalizedValue, key);
            });
        }
    } else if (isDraftable(value)) {
        target.callbacks_.push(function nestedDraftCleanup() {
            const targetCopy = latest(target);
            if (get(targetCopy, key, target.type_) === value) {
                if (scope_.drafts_.length > 1 && (target.assigned_.get(key) ?? false) === true && target.copy_) {
                    handleValue(get(target.copy_, key, target.type_), scope_.handledSet_, scope_);
                }
            }
        });
    }
}
function handleValue(target, handledSet, rootScope) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
        return target;
    }
    if (isDraft(target) || handledSet.has(target) || !isDraftable(target) || isFrozen(target)) {
        return target;
    }
    handledSet.add(target);
    each(target, (key, value)=>{
        if (isDraft(value)) {
            const state = value[DRAFT_STATE];
            if (isSameScope(state, rootScope)) {
                const updatedValue = getFinalValue(state);
                set(target, key, updatedValue, target.type_);
                markStateFinalized(state);
            }
        } else if (isDraftable(value)) {
            handleValue(value, handledSet, rootScope);
        }
    });
    return target;
}
// src/core/proxy.ts
function createProxyProxy(base, parent) {
    const baseIsArray = isArray(base);
    const state = {
        type_: baseIsArray ? 1 /* Array */  : 0 /* Object */ ,
        // Track which produce call this is associated with.
        scope_: parent ? parent.scope_ : getCurrentScope(),
        // True for both shallow and deep changes.
        modified_: false,
        // Used during finalization.
        finalized_: false,
        // Track which properties have been assigned (true) or deleted (false).
        // actually instantiated in `prepareCopy()`
        assigned_: void 0,
        // The parent draft state.
        parent_: parent,
        // The base state.
        base_: base,
        // The base proxy.
        draft_: null,
        // set below
        // The base copy with any updated values.
        copy_: null,
        // Called by the `produce` function.
        revoke_: null,
        isManual_: false,
        // `callbacks` actually gets assigned in `createProxy`
        callbacks_: void 0
    };
    let target = state;
    let traps = objectTraps;
    if (baseIsArray) {
        target = [
            state
        ];
        traps = arrayTraps;
    }
    const { revoke, proxy } = Proxy.revocable(target, traps);
    state.draft_ = proxy;
    state.revoke_ = revoke;
    return [
        proxy,
        state
    ];
}
var objectTraps = {
    get (state, prop) {
        if (prop === DRAFT_STATE) return state;
        const source = latest(state);
        if (!has(source, prop, state.type_)) {
            return readPropFromProto(state, source, prop);
        }
        const value = source[prop];
        if (state.finalized_ || !isDraftable(value)) {
            return value;
        }
        if (value === peek(state.base_, prop)) {
            prepareCopy(state);
            const childKey = state.type_ === 1 /* Array */  ? +prop : prop;
            const childDraft = createProxy(state.scope_, value, state, childKey);
            return state.copy_[childKey] = childDraft;
        }
        return value;
    },
    has (state, prop) {
        return prop in latest(state);
    },
    ownKeys (state) {
        return Reflect.ownKeys(latest(state));
    },
    set (state, prop, value) {
        const desc = getDescriptorFromProto(latest(state), prop);
        if (desc?.set) {
            desc.set.call(state.draft_, value);
            return true;
        }
        if (!state.modified_) {
            const current2 = peek(latest(state), prop);
            const currentState = current2?.[DRAFT_STATE];
            if (currentState && currentState.base_ === value) {
                state.copy_[prop] = value;
                state.assigned_.set(prop, false);
                return true;
            }
            if (is(value, current2) && (value !== void 0 || has(state.base_, prop, state.type_))) return true;
            prepareCopy(state);
            markChanged(state);
        }
        if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
        (value !== void 0 || prop in state.copy_) || // special case: NaN
        Number.isNaN(value) && Number.isNaN(state.copy_[prop])) return true;
        state.copy_[prop] = value;
        state.assigned_.set(prop, true);
        handleCrossReference(state, prop, value);
        return true;
    },
    deleteProperty (state, prop) {
        prepareCopy(state);
        if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
            state.assigned_.set(prop, false);
            markChanged(state);
        } else {
            state.assigned_.delete(prop);
        }
        if (state.copy_) {
            delete state.copy_[prop];
        }
        return true;
    },
    // Note: We never coerce `desc.value` into an Immer draft, because we can't make
    // the same guarantee in ES5 mode.
    getOwnPropertyDescriptor (state, prop) {
        const owner = latest(state);
        const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
        if (!desc) return desc;
        return {
            [WRITABLE]: true,
            [CONFIGURABLE]: state.type_ !== 1 /* Array */  || prop !== "length",
            [ENUMERABLE]: desc[ENUMERABLE],
            [VALUE]: owner[prop]
        };
    },
    defineProperty () {
        die(11);
    },
    getPrototypeOf (state) {
        return getPrototypeOf(state.base_);
    },
    setPrototypeOf () {
        die(12);
    }
};
var arrayTraps = {};
each(objectTraps, (key, fn)=>{
    arrayTraps[key] = function() {
        const args = arguments;
        args[0] = args[0][0];
        return fn.apply(this, args);
    };
});
arrayTraps.deleteProperty = function(state, prop) {
    if (("TURBOPACK compile-time value", "development") !== "production" && isNaN(parseInt(prop))) die(13);
    return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
    if (("TURBOPACK compile-time value", "development") !== "production" && prop !== "length" && isNaN(parseInt(prop))) die(14);
    return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
    const state = draft[DRAFT_STATE];
    const source = state ? latest(state) : draft;
    return source[prop];
}
function readPropFromProto(state, source, prop) {
    const desc = getDescriptorFromProto(source, prop);
    return desc ? VALUE in desc ? desc[VALUE] : // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_) : void 0;
}
function getDescriptorFromProto(source, prop) {
    if (!(prop in source)) return void 0;
    let proto = getPrototypeOf(source);
    while(proto){
        const desc = Object.getOwnPropertyDescriptor(proto, prop);
        if (desc) return desc;
        proto = getPrototypeOf(proto);
    }
    return void 0;
}
function markChanged(state) {
    if (!state.modified_) {
        state.modified_ = true;
        if (state.parent_) {
            markChanged(state.parent_);
        }
    }
}
function prepareCopy(state) {
    if (!state.copy_) {
        state.assigned_ = /* @__PURE__ */ new Map();
        state.copy_ = shallowCopy(state.base_, state.scope_.immer_.useStrictShallowCopy_);
    }
}
// src/core/immerClass.ts
var Immer2 = class {
    constructor(config){
        this.autoFreeze_ = true;
        this.useStrictShallowCopy_ = false;
        this.useStrictIteration_ = false;
        /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */ this.produce = (base, recipe, patchListener)=>{
            if (isFunction(base) && !isFunction(recipe)) {
                const defaultBase = recipe;
                recipe = base;
                const self = this;
                return function curriedProduce(base2 = defaultBase, ...args) {
                    return self.produce(base2, (draft)=>recipe.call(this, draft, ...args));
                };
            }
            if (!isFunction(recipe)) die(6);
            if (patchListener !== void 0 && !isFunction(patchListener)) die(7);
            let result;
            if (isDraftable(base)) {
                const scope = enterScope(this);
                const proxy = createProxy(scope, base, void 0);
                let hasError = true;
                try {
                    result = recipe(proxy);
                    hasError = false;
                } finally{
                    if (hasError) revokeScope(scope);
                    else leaveScope(scope);
                }
                usePatchesInScope(scope, patchListener);
                return processResult(result, scope);
            } else if (!base || !isObjectish(base)) {
                result = recipe(base);
                if (result === void 0) result = base;
                if (result === NOTHING) result = void 0;
                if (this.autoFreeze_) freeze(result, true);
                if (patchListener) {
                    const p = [];
                    const ip = [];
                    getPlugin(PluginPatches).generateReplacementPatches_(base, result, {
                        patches_: p,
                        inversePatches_: ip
                    });
                    patchListener(p, ip);
                }
                return result;
            } else die(1, base);
        };
        this.produceWithPatches = (base, recipe)=>{
            if (isFunction(base)) {
                return (state, ...args)=>this.produceWithPatches(state, (draft)=>base(draft, ...args));
            }
            let patches, inversePatches;
            const result = this.produce(base, recipe, (p, ip)=>{
                patches = p;
                inversePatches = ip;
            });
            return [
                result,
                patches,
                inversePatches
            ];
        };
        if (isBoolean(config?.autoFreeze)) this.setAutoFreeze(config.autoFreeze);
        if (isBoolean(config?.useStrictShallowCopy)) this.setUseStrictShallowCopy(config.useStrictShallowCopy);
        if (isBoolean(config?.useStrictIteration)) this.setUseStrictIteration(config.useStrictIteration);
    }
    createDraft(base) {
        if (!isDraftable(base)) die(8);
        if (isDraft(base)) base = current(base);
        const scope = enterScope(this);
        const proxy = createProxy(scope, base, void 0);
        proxy[DRAFT_STATE].isManual_ = true;
        leaveScope(scope);
        return proxy;
    }
    finishDraft(draft, patchListener) {
        const state = draft && draft[DRAFT_STATE];
        if (!state || !state.isManual_) die(9);
        const { scope_: scope } = state;
        usePatchesInScope(scope, patchListener);
        return processResult(void 0, scope);
    }
    /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */ setAutoFreeze(value) {
        this.autoFreeze_ = value;
    }
    /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */ setUseStrictShallowCopy(value) {
        this.useStrictShallowCopy_ = value;
    }
    /**
   * Pass false to use faster iteration that skips non-enumerable properties
   * but still handles symbols for compatibility.
   *
   * By default, strict iteration is enabled (includes all own properties).
   */ setUseStrictIteration(value) {
        this.useStrictIteration_ = value;
    }
    shouldUseStrictIteration() {
        return this.useStrictIteration_;
    }
    applyPatches(base, patches) {
        let i;
        for(i = patches.length - 1; i >= 0; i--){
            const patch = patches[i];
            if (patch.path.length === 0 && patch.op === "replace") {
                base = patch.value;
                break;
            }
        }
        if (i > -1) {
            patches = patches.slice(i + 1);
        }
        const applyPatchesImpl = getPlugin(PluginPatches).applyPatches_;
        if (isDraft(base)) {
            return applyPatchesImpl(base, patches);
        }
        return this.produce(base, (draft)=>applyPatchesImpl(draft, patches));
    }
};
function createProxy(rootScope, value, parent, key) {
    const [draft, state] = isMap(value) ? getPlugin(PluginMapSet).proxyMap_(value, parent) : isSet(value) ? getPlugin(PluginMapSet).proxySet_(value, parent) : createProxyProxy(value, parent);
    const scope = parent?.scope_ ?? getCurrentScope();
    scope.drafts_.push(draft);
    state.callbacks_ = parent?.callbacks_ ?? [];
    state.key_ = key;
    if (parent && key !== void 0) {
        registerChildFinalizationCallback(parent, state, key);
    } else {
        state.callbacks_.push(function rootDraftCleanup(rootScope2) {
            rootScope2.mapSetPlugin_?.fixSetContents(state);
            const { patchPlugin_ } = rootScope2;
            if (state.modified_ && patchPlugin_) {
                patchPlugin_.generatePatches_(state, [], rootScope2);
            }
        });
    }
    return draft;
}
// src/core/current.ts
function current(value) {
    if (!isDraft(value)) die(10, value);
    return currentImpl(value);
}
function currentImpl(value) {
    if (!isDraftable(value) || isFrozen(value)) return value;
    const state = value[DRAFT_STATE];
    let copy;
    let strict = true;
    if (state) {
        if (!state.modified_) return state.base_;
        state.finalized_ = true;
        copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
        strict = state.scope_.immer_.shouldUseStrictIteration();
    } else {
        copy = shallowCopy(value, true);
    }
    each(copy, (key, childValue)=>{
        set(copy, key, currentImpl(childValue));
    }, strict);
    if (state) {
        state.finalized_ = false;
    }
    return copy;
}
// src/plugins/patches.ts
function enablePatches() {
    const errorOffset = 16;
    if ("TURBOPACK compile-time truthy", 1) {
        errors.push('Sets cannot have "replace" patches.', function(op) {
            return "Unsupported patch operation: " + op;
        }, function(path) {
            return "Cannot apply patch, path doesn't resolve: " + path;
        }, "Patching reserved attributes like __proto__, prototype and constructor is not allowed");
    }
    function getPath(state, path = []) {
        if ("key_" in state && state.key_ !== void 0) {
            const parentCopy = state.parent_.copy_ ?? state.parent_.base_;
            const proxyDraft = getProxyDraft(get(parentCopy, state.key_));
            const valueAtKey = get(parentCopy, state.key_);
            if (valueAtKey === void 0) {
                return null;
            }
            if (valueAtKey !== state.draft_ && valueAtKey !== state.base_ && valueAtKey !== state.copy_) {
                return null;
            }
            if (proxyDraft != null && proxyDraft.base_ !== state.base_) {
                return null;
            }
            const isSet2 = state.parent_.type_ === 3 /* Set */ ;
            let key;
            if (isSet2) {
                const setParent = state.parent_;
                key = Array.from(setParent.drafts_.keys()).indexOf(state.key_);
            } else {
                key = state.key_;
            }
            if (!(isSet2 && parentCopy.size > key || has(parentCopy, key))) {
                return null;
            }
            path.push(key);
        }
        if (state.parent_) {
            return getPath(state.parent_, path);
        }
        path.reverse();
        try {
            resolvePath(state.copy_, path);
        } catch (e) {
            return null;
        }
        return path;
    }
    function resolvePath(base, path) {
        let current2 = base;
        for(let i = 0; i < path.length - 1; i++){
            const key = path[i];
            current2 = get(current2, key);
            if (!isObjectish(current2) || current2 === null) {
                throw new Error(`Cannot resolve path at '${path.join("/")}'`);
            }
        }
        return current2;
    }
    const REPLACE = "replace";
    const ADD = "add";
    const REMOVE = "remove";
    function generatePatches_(state, basePath, scope) {
        if (state.scope_.processedForPatches_.has(state)) {
            return;
        }
        state.scope_.processedForPatches_.add(state);
        const { patches_, inversePatches_ } = scope;
        switch(state.type_){
            case 0 /* Object */ :
            case 2 /* Map */ :
                return generatePatchesFromAssigned(state, basePath, patches_, inversePatches_);
            case 1 /* Array */ :
                return generateArrayPatches(state, basePath, patches_, inversePatches_);
            case 3 /* Set */ :
                return generateSetPatches(state, basePath, patches_, inversePatches_);
        }
    }
    function generateArrayPatches(state, basePath, patches, inversePatches) {
        let { base_, assigned_ } = state;
        let copy_ = state.copy_;
        if (copy_.length < base_.length) {
            ;
            [base_, copy_] = [
                copy_,
                base_
            ];
            [patches, inversePatches] = [
                inversePatches,
                patches
            ];
        }
        for(let i = 0; i < base_.length; i++){
            const copiedItem = copy_[i];
            const baseItem = base_[i];
            if (assigned_?.get(i.toString()) && copiedItem !== baseItem) {
                const childState = copiedItem?.[DRAFT_STATE];
                if (childState && childState.modified_) {
                    continue;
                }
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: REPLACE,
                    path,
                    // Need to maybe clone it, as it can in fact be the original value
                    // due to the base/copy inversion at the start of this function
                    value: clonePatchValueIfNeeded(copiedItem)
                });
                inversePatches.push({
                    op: REPLACE,
                    path,
                    value: clonePatchValueIfNeeded(baseItem)
                });
            }
        }
        for(let i = base_.length; i < copy_.length; i++){
            const path = basePath.concat([
                i
            ]);
            patches.push({
                op: ADD,
                path,
                // Need to maybe clone it, as it can in fact be the original value
                // due to the base/copy inversion at the start of this function
                value: clonePatchValueIfNeeded(copy_[i])
            });
        }
        for(let i = copy_.length - 1; base_.length <= i; --i){
            const path = basePath.concat([
                i
            ]);
            inversePatches.push({
                op: REMOVE,
                path
            });
        }
    }
    function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
        const { base_, copy_, type_ } = state;
        each(state.assigned_, (key, assignedValue)=>{
            const origValue = get(base_, key, type_);
            const value = get(copy_, key, type_);
            const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
            if (origValue === value && op === REPLACE) return;
            const path = basePath.concat(key);
            patches.push(op === REMOVE ? {
                op,
                path
            } : {
                op,
                path,
                value: clonePatchValueIfNeeded(value)
            });
            inversePatches.push(op === ADD ? {
                op: REMOVE,
                path
            } : op === REMOVE ? {
                op: ADD,
                path,
                value: clonePatchValueIfNeeded(origValue)
            } : {
                op: REPLACE,
                path,
                value: clonePatchValueIfNeeded(origValue)
            });
        });
    }
    function generateSetPatches(state, basePath, patches, inversePatches) {
        let { base_, copy_ } = state;
        let i = 0;
        base_.forEach((value)=>{
            if (!copy_.has(value)) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: REMOVE,
                    path,
                    value
                });
                inversePatches.unshift({
                    op: ADD,
                    path,
                    value
                });
            }
            i++;
        });
        i = 0;
        copy_.forEach((value)=>{
            if (!base_.has(value)) {
                const path = basePath.concat([
                    i
                ]);
                patches.push({
                    op: ADD,
                    path,
                    value
                });
                inversePatches.unshift({
                    op: REMOVE,
                    path,
                    value
                });
            }
            i++;
        });
    }
    function generateReplacementPatches_(baseValue, replacement, scope) {
        const { patches_, inversePatches_ } = scope;
        patches_.push({
            op: REPLACE,
            path: [],
            value: replacement === NOTHING ? void 0 : replacement
        });
        inversePatches_.push({
            op: REPLACE,
            path: [],
            value: baseValue
        });
    }
    function applyPatches_(draft, patches) {
        patches.forEach((patch)=>{
            const { path, op } = patch;
            let base = draft;
            for(let i = 0; i < path.length - 1; i++){
                const parentType = getArchtype(base);
                let p = path[i];
                if (typeof p !== "string" && typeof p !== "number") {
                    p = "" + p;
                }
                if ((parentType === 0 /* Object */  || parentType === 1 /* Array */ ) && (p === "__proto__" || p === CONSTRUCTOR)) die(errorOffset + 3);
                if (isFunction(base) && p === PROTOTYPE) die(errorOffset + 3);
                base = get(base, p);
                if (!isObjectish(base)) die(errorOffset + 2, path.join("/"));
            }
            const type = getArchtype(base);
            const value = deepClonePatchValue(patch.value);
            const key = path[path.length - 1];
            switch(op){
                case REPLACE:
                    switch(type){
                        case 2 /* Map */ :
                            return base.set(key, value);
                        case 3 /* Set */ :
                            die(errorOffset);
                        default:
                            return base[key] = value;
                    }
                case ADD:
                    switch(type){
                        case 1 /* Array */ :
                            return key === "-" ? base.push(value) : base.splice(key, 0, value);
                        case 2 /* Map */ :
                            return base.set(key, value);
                        case 3 /* Set */ :
                            return base.add(value);
                        default:
                            return base[key] = value;
                    }
                case REMOVE:
                    switch(type){
                        case 1 /* Array */ :
                            return base.splice(key, 1);
                        case 2 /* Map */ :
                            return base.delete(key);
                        case 3 /* Set */ :
                            return base.delete(patch.value);
                        default:
                            return delete base[key];
                    }
                default:
                    die(errorOffset + 1, op);
            }
        });
        return draft;
    }
    function deepClonePatchValue(obj) {
        if (!isDraftable(obj)) return obj;
        if (isArray(obj)) return obj.map(deepClonePatchValue);
        if (isMap(obj)) return new Map(Array.from(obj.entries()).map(([k, v])=>[
                k,
                deepClonePatchValue(v)
            ]));
        if (isSet(obj)) return new Set(Array.from(obj).map(deepClonePatchValue));
        const cloned = Object.create(getPrototypeOf(obj));
        for(const key in obj)cloned[key] = deepClonePatchValue(obj[key]);
        if (has(obj, DRAFTABLE)) cloned[DRAFTABLE] = obj[DRAFTABLE];
        return cloned;
    }
    function clonePatchValueIfNeeded(obj) {
        if (isDraft(obj)) {
            return deepClonePatchValue(obj);
        } else return obj;
    }
    loadPlugin(PluginPatches, {
        applyPatches_,
        generatePatches_,
        generateReplacementPatches_,
        getPath
    });
}
// src/plugins/mapset.ts
function enableMapSet() {
    class DraftMap extends Map {
        constructor(target, parent){
            super();
            this[DRAFT_STATE] = {
                type_: 2 /* Map */ ,
                parent_: parent,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                copy_: void 0,
                assigned_: void 0,
                base_: target,
                draft_: this,
                isManual_: false,
                revoked_: false,
                callbacks_: []
            };
        }
        get size() {
            return latest(this[DRAFT_STATE]).size;
        }
        has(key) {
            return latest(this[DRAFT_STATE]).has(key);
        }
        set(key, value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!latest(state).has(key) || latest(state).get(key) !== value) {
                prepareMapCopy(state);
                markChanged(state);
                state.assigned_.set(key, true);
                state.copy_.set(key, value);
                state.assigned_.set(key, true);
            }
            return this;
        }
        delete(key) {
            if (!this.has(key)) {
                return false;
            }
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareMapCopy(state);
            markChanged(state);
            if (state.base_.has(key)) {
                state.assigned_.set(key, false);
            } else {
                state.assigned_.delete(key);
            }
            state.copy_.delete(key);
            return true;
        }
        clear() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (latest(state).size) {
                prepareMapCopy(state);
                markChanged(state);
                state.assigned_ = /* @__PURE__ */ new Map();
                each(state.base_, (key)=>{
                    state.assigned_.set(key, false);
                });
                state.copy_.clear();
            }
        }
        forEach(cb, thisArg) {
            const state = this[DRAFT_STATE];
            latest(state).forEach((_value, key, _map)=>{
                cb.call(thisArg, this.get(key), key, this);
            });
        }
        get(key) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            const value = latest(state).get(key);
            if (state.finalized_ || !isDraftable(value)) {
                return value;
            }
            if (value !== state.base_.get(key)) {
                return value;
            }
            const draft = createProxy(state.scope_, value, state, key);
            prepareMapCopy(state);
            state.copy_.set(key, draft);
            return draft;
        }
        keys() {
            return latest(this[DRAFT_STATE]).keys();
        }
        values() {
            const iterator = this.keys();
            return {
                [Symbol.iterator]: ()=>this.values(),
                next: ()=>{
                    const r = iterator.next();
                    if (r.done) return r;
                    const value = this.get(r.value);
                    return {
                        done: false,
                        value
                    };
                }
            };
        }
        entries() {
            const iterator = this.keys();
            return {
                [Symbol.iterator]: ()=>this.entries(),
                next: ()=>{
                    const r = iterator.next();
                    if (r.done) return r;
                    const value = this.get(r.value);
                    return {
                        done: false,
                        value: [
                            r.value,
                            value
                        ]
                    };
                }
            };
        }
        [(DRAFT_STATE, Symbol.iterator)]() {
            return this.entries();
        }
    }
    function proxyMap_(target, parent) {
        const map = new DraftMap(target, parent);
        return [
            map,
            map[DRAFT_STATE]
        ];
    }
    function prepareMapCopy(state) {
        if (!state.copy_) {
            state.assigned_ = /* @__PURE__ */ new Map();
            state.copy_ = new Map(state.base_);
        }
    }
    class DraftSet extends Set {
        constructor(target, parent){
            super();
            this[DRAFT_STATE] = {
                type_: 3 /* Set */ ,
                parent_: parent,
                scope_: parent ? parent.scope_ : getCurrentScope(),
                modified_: false,
                finalized_: false,
                copy_: void 0,
                base_: target,
                draft_: this,
                drafts_: /* @__PURE__ */ new Map(),
                revoked_: false,
                isManual_: false,
                assigned_: void 0,
                callbacks_: []
            };
        }
        get size() {
            return latest(this[DRAFT_STATE]).size;
        }
        has(value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!state.copy_) {
                return state.base_.has(value);
            }
            if (state.copy_.has(value)) return true;
            if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value))) return true;
            return false;
        }
        add(value) {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (!this.has(value)) {
                prepareSetCopy(state);
                markChanged(state);
                state.copy_.add(value);
            }
            return this;
        }
        delete(value) {
            if (!this.has(value)) {
                return false;
            }
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            markChanged(state);
            return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : /* istanbul ignore next */ false);
        }
        clear() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            if (latest(state).size) {
                prepareSetCopy(state);
                markChanged(state);
                state.copy_.clear();
            }
        }
        values() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            return state.copy_.values();
        }
        entries() {
            const state = this[DRAFT_STATE];
            assertUnrevoked(state);
            prepareSetCopy(state);
            return state.copy_.entries();
        }
        keys() {
            return this.values();
        }
        [(DRAFT_STATE, Symbol.iterator)]() {
            return this.values();
        }
        forEach(cb, thisArg) {
            const iterator = this.values();
            let result = iterator.next();
            while(!result.done){
                cb.call(thisArg, result.value, result.value, this);
                result = iterator.next();
            }
        }
    }
    function proxySet_(target, parent) {
        const set2 = new DraftSet(target, parent);
        return [
            set2,
            set2[DRAFT_STATE]
        ];
    }
    function prepareSetCopy(state) {
        if (!state.copy_) {
            state.copy_ = /* @__PURE__ */ new Set();
            state.base_.forEach((value)=>{
                if (isDraftable(value)) {
                    const draft = createProxy(state.scope_, value, state, value);
                    state.drafts_.set(value, draft);
                    state.copy_.add(draft);
                } else {
                    state.copy_.add(value);
                }
            });
        }
    }
    function assertUnrevoked(state) {
        if (state.revoked_) die(3, JSON.stringify(latest(state)));
    }
    function fixSetContents(target) {
        if (target.type_ === 3 /* Set */  && target.copy_) {
            const copy = new Set(target.copy_);
            target.copy_.clear();
            copy.forEach((value)=>{
                target.copy_.add(getValue(value));
            });
        }
    }
    loadPlugin(PluginMapSet, {
        proxyMap_,
        proxySet_,
        fixSetContents
    });
}
// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = /* @__PURE__ */ immer.produceWithPatches.bind(immer);
var setAutoFreeze = /* @__PURE__ */ immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = /* @__PURE__ */ immer.setUseStrictShallowCopy.bind(immer);
var setUseStrictIteration = /* @__PURE__ */ immer.setUseStrictIteration.bind(immer);
var applyPatches = /* @__PURE__ */ immer.applyPatches.bind(immer);
var createDraft = /* @__PURE__ */ immer.createDraft.bind(immer);
var finishDraft = /* @__PURE__ */ immer.finishDraft.bind(immer);
var castDraft = (value)=>value;
var castImmutable = (value)=>value;
;
 //# sourceMappingURL=immer.mjs.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/reselect/dist/reselect.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/devModeChecks/identityFunctionCheck.ts
__turbopack_context__.s([
    "createSelector",
    ()=>createSelector,
    "createSelectorCreator",
    ()=>createSelectorCreator,
    "createStructuredSelector",
    ()=>createStructuredSelector,
    "lruMemoize",
    ()=>lruMemoize,
    "referenceEqualityCheck",
    ()=>referenceEqualityCheck,
    "setGlobalDevModeChecks",
    ()=>setGlobalDevModeChecks,
    "unstable_autotrackMemoize",
    ()=>autotrackMemoize,
    "weakMapMemoize",
    ()=>weakMapMemoize
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var runIdentityFunctionCheck = (resultFunc, inputSelectorsResults, outputSelectorResult)=>{
    if (inputSelectorsResults.length === 1 && inputSelectorsResults[0] === outputSelectorResult) {
        let isInputSameAsOutput = false;
        try {
            const emptyObject = {};
            if (resultFunc(emptyObject) === emptyObject) isInputSameAsOutput = true;
        } catch  {}
        if (isInputSameAsOutput) {
            let stack = void 0;
            try {
                throw new Error();
            } catch (e) {
                ;
                ({ stack } = e);
            }
            console.warn("The result function returned its own inputs without modification. e.g\n`createSelector([state => state.todos], todos => todos)`\nThis could lead to inefficient memoization and unnecessary re-renders.\nEnsure transformation logic is in the result function, and extraction logic is in the input selectors.", {
                stack
            });
        }
    }
};
// src/devModeChecks/inputStabilityCheck.ts
var runInputStabilityCheck = (inputSelectorResultsObject, options, inputSelectorArgs)=>{
    const { memoize, memoizeOptions } = options;
    const { inputSelectorResults, inputSelectorResultsCopy } = inputSelectorResultsObject;
    const createAnEmptyObject = memoize(()=>({}), ...memoizeOptions);
    const areInputSelectorResultsEqual = createAnEmptyObject.apply(null, inputSelectorResults) === createAnEmptyObject.apply(null, inputSelectorResultsCopy);
    if (!areInputSelectorResultsEqual) {
        let stack = void 0;
        try {
            throw new Error();
        } catch (e) {
            ;
            ({ stack } = e);
        }
        console.warn("An input selector returned a different result when passed same arguments.\nThis means your output selector will likely run more frequently than intended.\nAvoid returning a new reference inside your input selector, e.g.\n`createSelector([state => state.todos.map(todo => todo.id)], todoIds => todoIds.length)`", {
            arguments: inputSelectorArgs,
            firstInputs: inputSelectorResults,
            secondInputs: inputSelectorResultsCopy,
            stack
        });
    }
};
// src/devModeChecks/setGlobalDevModeChecks.ts
var globalDevModeChecks = {
    inputStabilityCheck: "once",
    identityFunctionCheck: "once"
};
var setGlobalDevModeChecks = (devModeChecks)=>{
    Object.assign(globalDevModeChecks, devModeChecks);
};
// src/utils.ts
var NOT_FOUND = /* @__PURE__ */ Symbol("NOT_FOUND");
function assertIsFunction(func, errorMessage = `expected a function, instead received ${typeof func}`) {
    if (typeof func !== "function") {
        throw new TypeError(errorMessage);
    }
}
function assertIsObject(object, errorMessage = `expected an object, instead received ${typeof object}`) {
    if (typeof object !== "object") {
        throw new TypeError(errorMessage);
    }
}
function assertIsArrayOfFunctions(array, errorMessage = `expected all items to be functions, instead received the following types: `) {
    if (!array.every((item)=>typeof item === "function")) {
        const itemTypes = array.map((item)=>typeof item === "function" ? `function ${item.name || "unnamed"}()` : typeof item).join(", ");
        throw new TypeError(`${errorMessage}[${itemTypes}]`);
    }
}
var ensureIsArray = (item)=>{
    return Array.isArray(item) ? item : [
        item
    ];
};
function getDependencies(createSelectorArgs) {
    const dependencies = Array.isArray(createSelectorArgs[0]) ? createSelectorArgs[0] : createSelectorArgs;
    assertIsArrayOfFunctions(dependencies, `createSelector expects all input-selectors to be functions, but received the following types: `);
    return dependencies;
}
function collectInputSelectorResults(dependencies, inputSelectorArgs) {
    const inputSelectorResults = [];
    const { length } = dependencies;
    for(let i = 0; i < length; i++){
        inputSelectorResults.push(dependencies[i].apply(null, inputSelectorArgs));
    }
    return inputSelectorResults;
}
var getDevModeChecksExecutionInfo = (firstRun, devModeChecks)=>{
    const { identityFunctionCheck, inputStabilityCheck } = {
        ...globalDevModeChecks,
        ...devModeChecks
    };
    return {
        identityFunctionCheck: {
            shouldRun: identityFunctionCheck === "always" || identityFunctionCheck === "once" && firstRun,
            run: runIdentityFunctionCheck
        },
        inputStabilityCheck: {
            shouldRun: inputStabilityCheck === "always" || inputStabilityCheck === "once" && firstRun,
            run: runInputStabilityCheck
        }
    };
};
// src/autotrackMemoize/autotracking.ts
var $REVISION = 0;
var CURRENT_TRACKER = null;
var Cell = class {
    revision = $REVISION;
    _value;
    _lastValue;
    _isEqual = tripleEq;
    constructor(initialValue, isEqual = tripleEq){
        this._value = this._lastValue = initialValue;
        this._isEqual = isEqual;
    }
    // Whenever a storage value is read, it'll add itself to the current tracker if
    // one exists, entangling its state with that cache.
    get value() {
        CURRENT_TRACKER?.add(this);
        return this._value;
    }
    // Whenever a storage value is updated, we bump the global revision clock,
    // assign the revision for this storage to the new value, _and_ we schedule a
    // rerender. This is important, and it's what makes autotracking  _pull_
    // based. We don't actively tell the caches which depend on the storage that
    // anything has happened. Instead, we recompute the caches when needed.
    set value(newValue) {
        if (this.value === newValue) return;
        this._value = newValue;
        this.revision = ++$REVISION;
    }
};
function tripleEq(a, b) {
    return a === b;
}
var TrackingCache = class {
    _cachedValue;
    _cachedRevision = -1;
    _deps = [];
    hits = 0;
    fn;
    constructor(fn){
        this.fn = fn;
    }
    clear() {
        this._cachedValue = void 0;
        this._cachedRevision = -1;
        this._deps = [];
        this.hits = 0;
    }
    get value() {
        if (this.revision > this._cachedRevision) {
            const { fn } = this;
            const currentTracker = /* @__PURE__ */ new Set();
            const prevTracker = CURRENT_TRACKER;
            CURRENT_TRACKER = currentTracker;
            this._cachedValue = fn();
            CURRENT_TRACKER = prevTracker;
            this.hits++;
            this._deps = Array.from(currentTracker);
            this._cachedRevision = this.revision;
        }
        CURRENT_TRACKER?.add(this);
        return this._cachedValue;
    }
    get revision() {
        return Math.max(...this._deps.map((d)=>d.revision), 0);
    }
};
function getValue(cell) {
    if (!(cell instanceof Cell)) {
        console.warn("Not a valid cell! ", cell);
    }
    return cell.value;
}
function setValue(storage, value) {
    if (!(storage instanceof Cell)) {
        throw new TypeError("setValue must be passed a tracked store created with `createStorage`.");
    }
    storage.value = storage._lastValue = value;
}
function createCell(initialValue, isEqual = tripleEq) {
    return new Cell(initialValue, isEqual);
}
function createCache(fn) {
    assertIsFunction(fn, "the first parameter to `createCache` must be a function");
    return new TrackingCache(fn);
}
// src/autotrackMemoize/tracking.ts
var neverEq = (a, b)=>false;
function createTag() {
    return createCell(null, neverEq);
}
function dirtyTag(tag, value) {
    setValue(tag, value);
}
var consumeCollection = (node)=>{
    let tag = node.collectionTag;
    if (tag === null) {
        tag = node.collectionTag = createTag();
    }
    getValue(tag);
};
var dirtyCollection = (node)=>{
    const tag = node.collectionTag;
    if (tag !== null) {
        dirtyTag(tag, null);
    }
};
// src/autotrackMemoize/proxy.ts
var REDUX_PROXY_LABEL = Symbol();
var nextId = 0;
var proto = Object.getPrototypeOf({});
var ObjectTreeNode = class {
    constructor(value){
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
    proxy = new Proxy(this, objectProxyHandler);
    tag = createTag();
    tags = {};
    children = {};
    collectionTag = null;
    id = nextId++;
};
var objectProxyHandler = {
    get (node, key) {
        function calculateResult() {
            const { value } = node;
            const childValue = Reflect.get(value, key);
            if (typeof key === "symbol") {
                return childValue;
            }
            if (key in proto) {
                return childValue;
            }
            if (typeof childValue === "object" && childValue !== null) {
                let childNode = node.children[key];
                if (childNode === void 0) {
                    childNode = node.children[key] = createNode(childValue);
                }
                if (childNode.tag) {
                    getValue(childNode.tag);
                }
                return childNode.proxy;
            } else {
                let tag = node.tags[key];
                if (tag === void 0) {
                    tag = node.tags[key] = createTag();
                    tag.value = childValue;
                }
                getValue(tag);
                return childValue;
            }
        }
        const res = calculateResult();
        return res;
    },
    ownKeys (node) {
        consumeCollection(node);
        return Reflect.ownKeys(node.value);
    },
    getOwnPropertyDescriptor (node, prop) {
        return Reflect.getOwnPropertyDescriptor(node.value, prop);
    },
    has (node, prop) {
        return Reflect.has(node.value, prop);
    }
};
var ArrayTreeNode = class {
    constructor(value){
        this.value = value;
        this.value = value;
        this.tag.value = value;
    }
    proxy = new Proxy([
        this
    ], arrayProxyHandler);
    tag = createTag();
    tags = {};
    children = {};
    collectionTag = null;
    id = nextId++;
};
var arrayProxyHandler = {
    get ([node], key) {
        if (key === "length") {
            consumeCollection(node);
        }
        return objectProxyHandler.get(node, key);
    },
    ownKeys ([node]) {
        return objectProxyHandler.ownKeys(node);
    },
    getOwnPropertyDescriptor ([node], prop) {
        return objectProxyHandler.getOwnPropertyDescriptor(node, prop);
    },
    has ([node], prop) {
        return objectProxyHandler.has(node, prop);
    }
};
function createNode(value) {
    if (Array.isArray(value)) {
        return new ArrayTreeNode(value);
    }
    return new ObjectTreeNode(value);
}
function updateNode(node, newValue) {
    const { value, tags, children } = node;
    node.value = newValue;
    if (Array.isArray(value) && Array.isArray(newValue) && value.length !== newValue.length) {
        dirtyCollection(node);
    } else {
        if (value !== newValue) {
            let oldKeysSize = 0;
            let newKeysSize = 0;
            let anyKeysAdded = false;
            for(const _key in value){
                oldKeysSize++;
            }
            for(const key in newValue){
                newKeysSize++;
                if (!(key in value)) {
                    anyKeysAdded = true;
                    break;
                }
            }
            const isDifferent = anyKeysAdded || oldKeysSize !== newKeysSize;
            if (isDifferent) {
                dirtyCollection(node);
            }
        }
    }
    for(const key in tags){
        const childValue = value[key];
        const newChildValue = newValue[key];
        if (childValue !== newChildValue) {
            dirtyCollection(node);
            dirtyTag(tags[key], newChildValue);
        }
        if (typeof newChildValue === "object" && newChildValue !== null) {
            delete tags[key];
        }
    }
    for(const key in children){
        const childNode = children[key];
        const newChildValue = newValue[key];
        const childValue = childNode.value;
        if (childValue === newChildValue) {
            continue;
        } else if (typeof newChildValue === "object" && newChildValue !== null) {
            updateNode(childNode, newChildValue);
        } else {
            deleteNode(childNode);
            delete children[key];
        }
    }
}
function deleteNode(node) {
    if (node.tag) {
        dirtyTag(node.tag, null);
    }
    dirtyCollection(node);
    for(const key in node.tags){
        dirtyTag(node.tags[key], null);
    }
    for(const key in node.children){
        deleteNode(node.children[key]);
    }
}
// src/lruMemoize.ts
function createSingletonCache(equals) {
    let entry;
    return {
        get (key) {
            if (entry && equals(entry.key, key)) {
                return entry.value;
            }
            return NOT_FOUND;
        },
        put (key, value) {
            entry = {
                key,
                value
            };
        },
        getEntries () {
            return entry ? [
                entry
            ] : [];
        },
        clear () {
            entry = void 0;
        }
    };
}
function createLruCache(maxSize, equals) {
    let entries = [];
    function get(key) {
        const cacheIndex = entries.findIndex((entry)=>equals(key, entry.key));
        if (cacheIndex > -1) {
            const entry = entries[cacheIndex];
            if (cacheIndex > 0) {
                entries.splice(cacheIndex, 1);
                entries.unshift(entry);
            }
            return entry.value;
        }
        return NOT_FOUND;
    }
    function put(key, value) {
        if (get(key) === NOT_FOUND) {
            entries.unshift({
                key,
                value
            });
            if (entries.length > maxSize) {
                entries.pop();
            }
        }
    }
    function getEntries() {
        return entries;
    }
    function clear() {
        entries = [];
    }
    return {
        get,
        put,
        getEntries,
        clear
    };
}
var referenceEqualityCheck = (a, b)=>a === b;
function createCacheKeyComparator(equalityCheck) {
    return function areArgumentsShallowlyEqual(prev, next) {
        if (prev === null || next === null || prev.length !== next.length) {
            return false;
        }
        const { length } = prev;
        for(let i = 0; i < length; i++){
            if (!equalityCheck(prev[i], next[i])) {
                return false;
            }
        }
        return true;
    };
}
function lruMemoize(func, equalityCheckOrOptions) {
    const providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
        equalityCheck: equalityCheckOrOptions
    };
    const { equalityCheck = referenceEqualityCheck, maxSize = 1, resultEqualityCheck } = providedOptions;
    const comparator = createCacheKeyComparator(equalityCheck);
    let resultsCount = 0;
    const cache = maxSize <= 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
    function memoized() {
        let value = cache.get(arguments);
        if (value === NOT_FOUND) {
            value = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const entries = cache.getEntries();
                const matchingEntry = entries.find((entry)=>resultEqualityCheck(entry.value, value));
                if (matchingEntry) {
                    value = matchingEntry.value;
                    resultsCount !== 0 && resultsCount--;
                }
            }
            cache.put(arguments, value);
        }
        return value;
    }
    memoized.clearCache = ()=>{
        cache.clear();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/autotrackMemoize/autotrackMemoize.ts
function autotrackMemoize(func) {
    const node = createNode([]);
    let lastArgs = null;
    const shallowEqual = createCacheKeyComparator(referenceEqualityCheck);
    const cache = createCache(()=>{
        const res = func.apply(null, node.proxy);
        return res;
    });
    function memoized() {
        if (!shallowEqual(lastArgs, arguments)) {
            updateNode(node, arguments);
            lastArgs = arguments;
        }
        return cache.value;
    }
    memoized.clearCache = ()=>{
        return cache.clear();
    };
    return memoized;
}
// src/weakMapMemoize.ts
var StrongRef = class {
    constructor(value){
        this.value = value;
    }
    deref() {
        return this.value;
    }
};
var Ref = typeof WeakRef !== "undefined" ? WeakRef : StrongRef;
var UNTERMINATED = 0;
var TERMINATED = 1;
function createCacheNode() {
    return {
        s: UNTERMINATED,
        v: void 0,
        o: null,
        p: null
    };
}
function weakMapMemoize(func, options = {}) {
    let fnNode = createCacheNode();
    const { resultEqualityCheck } = options;
    let lastResult;
    let resultsCount = 0;
    function memoized() {
        let cacheNode = fnNode;
        const { length } = arguments;
        for(let i = 0, l = length; i < l; i++){
            const arg = arguments[i];
            if (typeof arg === "function" || typeof arg === "object" && arg !== null) {
                let objectCache = cacheNode.o;
                if (objectCache === null) {
                    cacheNode.o = objectCache = /* @__PURE__ */ new WeakMap();
                }
                const objectNode = objectCache.get(arg);
                if (objectNode === void 0) {
                    cacheNode = createCacheNode();
                    objectCache.set(arg, cacheNode);
                } else {
                    cacheNode = objectNode;
                }
            } else {
                let primitiveCache = cacheNode.p;
                if (primitiveCache === null) {
                    cacheNode.p = primitiveCache = /* @__PURE__ */ new Map();
                }
                const primitiveNode = primitiveCache.get(arg);
                if (primitiveNode === void 0) {
                    cacheNode = createCacheNode();
                    primitiveCache.set(arg, cacheNode);
                } else {
                    cacheNode = primitiveNode;
                }
            }
        }
        const terminatedNode = cacheNode;
        let result;
        if (cacheNode.s === TERMINATED) {
            result = cacheNode.v;
        } else {
            result = func.apply(null, arguments);
            resultsCount++;
            if (resultEqualityCheck) {
                const lastResultValue = lastResult?.deref?.() ?? lastResult;
                if (lastResultValue != null && resultEqualityCheck(lastResultValue, result)) {
                    result = lastResultValue;
                    resultsCount !== 0 && resultsCount--;
                }
                const needsWeakRef = typeof result === "object" && result !== null || typeof result === "function";
                lastResult = needsWeakRef ? new Ref(result) : result;
            }
        }
        terminatedNode.s = TERMINATED;
        terminatedNode.v = result;
        return result;
    }
    memoized.clearCache = ()=>{
        fnNode = createCacheNode();
        memoized.resetResultsCount();
    };
    memoized.resultsCount = ()=>resultsCount;
    memoized.resetResultsCount = ()=>{
        resultsCount = 0;
    };
    return memoized;
}
// src/createSelectorCreator.ts
function createSelectorCreator(memoizeOrOptions, ...memoizeOptionsFromArgs) {
    const createSelectorCreatorOptions = typeof memoizeOrOptions === "function" ? {
        memoize: memoizeOrOptions,
        memoizeOptions: memoizeOptionsFromArgs
    } : memoizeOrOptions;
    const createSelector2 = (...createSelectorArgs)=>{
        let recomputations = 0;
        let dependencyRecomputations = 0;
        let lastResult;
        let directlyPassedOptions = {};
        let resultFunc = createSelectorArgs.pop();
        if (typeof resultFunc === "object") {
            directlyPassedOptions = resultFunc;
            resultFunc = createSelectorArgs.pop();
        }
        assertIsFunction(resultFunc, `createSelector expects an output function after the inputs, but received: [${typeof resultFunc}]`);
        const combinedOptions = {
            ...createSelectorCreatorOptions,
            ...directlyPassedOptions
        };
        const { memoize, memoizeOptions = [], argsMemoize = weakMapMemoize, argsMemoizeOptions = [], devModeChecks = {} } = combinedOptions;
        const finalMemoizeOptions = ensureIsArray(memoizeOptions);
        const finalArgsMemoizeOptions = ensureIsArray(argsMemoizeOptions);
        const dependencies = getDependencies(createSelectorArgs);
        const memoizedResultFunc = memoize(function recomputationWrapper() {
            recomputations++;
            return resultFunc.apply(null, arguments);
        }, ...finalMemoizeOptions);
        let firstRun = true;
        const selector = argsMemoize(function dependenciesChecker() {
            dependencyRecomputations++;
            const inputSelectorResults = collectInputSelectorResults(dependencies, arguments);
            lastResult = memoizedResultFunc.apply(null, inputSelectorResults);
            if ("TURBOPACK compile-time truthy", 1) {
                const { identityFunctionCheck, inputStabilityCheck } = getDevModeChecksExecutionInfo(firstRun, devModeChecks);
                if (identityFunctionCheck.shouldRun) {
                    identityFunctionCheck.run(resultFunc, inputSelectorResults, lastResult);
                }
                if (inputStabilityCheck.shouldRun) {
                    const inputSelectorResultsCopy = collectInputSelectorResults(dependencies, arguments);
                    inputStabilityCheck.run({
                        inputSelectorResults,
                        inputSelectorResultsCopy
                    }, {
                        memoize,
                        memoizeOptions: finalMemoizeOptions
                    }, arguments);
                }
                if (firstRun) firstRun = false;
            }
            return lastResult;
        }, ...finalArgsMemoizeOptions);
        return Object.assign(selector, {
            resultFunc,
            memoizedResultFunc,
            dependencies,
            dependencyRecomputations: ()=>dependencyRecomputations,
            resetDependencyRecomputations: ()=>{
                dependencyRecomputations = 0;
            },
            lastResult: ()=>lastResult,
            recomputations: ()=>recomputations,
            resetRecomputations: ()=>{
                recomputations = 0;
            },
            memoize,
            argsMemoize
        });
    };
    Object.assign(createSelector2, {
        withTypes: ()=>createSelector2
    });
    return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(weakMapMemoize);
// src/createStructuredSelector.ts
var createStructuredSelector = Object.assign((inputSelectorsObject, selectorCreator = createSelector)=>{
    assertIsObject(inputSelectorsObject, `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof inputSelectorsObject}`);
    const inputSelectorKeys = Object.keys(inputSelectorsObject);
    const dependencies = inputSelectorKeys.map((key)=>inputSelectorsObject[key]);
    const structuredSelector = selectorCreator(dependencies, (...inputSelectorResults)=>{
        return inputSelectorResults.reduce((composition, value, index)=>{
            composition[inputSelectorKeys[index]] = value;
            return composition;
        }, {});
    });
    return structuredSelector;
}, {
    withTypes: ()=>createStructuredSelector
});
;
 //# sourceMappingURL=reselect.mjs.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/redux/dist/redux.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/utils/formatProdErrorMessage.ts
__turbopack_context__.s([
    "__DO_NOT_USE__ActionTypes",
    ()=>actionTypes_default,
    "applyMiddleware",
    ()=>applyMiddleware,
    "bindActionCreators",
    ()=>bindActionCreators,
    "combineReducers",
    ()=>combineReducers,
    "compose",
    ()=>compose,
    "createStore",
    ()=>createStore,
    "isAction",
    ()=>isAction,
    "isPlainObject",
    ()=>isPlainObject,
    "legacy_createStore",
    ()=>legacy_createStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function formatProdErrorMessage(code) {
    return `Minified Redux error #${code}; visit https://redux.js.org/Errors?code=${code} for the full message or use the non-minified dev environment for full errors. `;
}
// src/utils/symbol-observable.ts
var $$observable = /* @__PURE__ */ (()=>typeof Symbol === "function" && Symbol.observable || "@@observable")();
var symbol_observable_default = $$observable;
// src/utils/actionTypes.ts
var randomString = ()=>Math.random().toString(36).substring(7).split("").join(".");
var ActionTypes = {
    INIT: `@@redux/INIT${/* @__PURE__ */ randomString()}`,
    REPLACE: `@@redux/REPLACE${/* @__PURE__ */ randomString()}`,
    PROBE_UNKNOWN_ACTION: ()=>`@@redux/PROBE_UNKNOWN_ACTION${randomString()}`
};
var actionTypes_default = ActionTypes;
// src/utils/isPlainObject.ts
function isPlainObject(obj) {
    if (typeof obj !== "object" || obj === null) return false;
    let proto = obj;
    while(Object.getPrototypeOf(proto) !== null){
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto || Object.getPrototypeOf(obj) === null;
}
// src/utils/kindOf.ts
function miniKindOf(val) {
    if (val === void 0) return "undefined";
    if (val === null) return "null";
    const type = typeof val;
    switch(type){
        case "boolean":
        case "string":
        case "number":
        case "symbol":
        case "function":
            {
                return type;
            }
    }
    if (Array.isArray(val)) return "array";
    if (isDate(val)) return "date";
    if (isError(val)) return "error";
    const constructorName = ctorName(val);
    switch(constructorName){
        case "Symbol":
        case "Promise":
        case "WeakMap":
        case "WeakSet":
        case "Map":
        case "Set":
            return constructorName;
    }
    return Object.prototype.toString.call(val).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function ctorName(val) {
    return typeof val.constructor === "function" ? val.constructor.name : null;
}
function isError(val) {
    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
}
function isDate(val) {
    if (val instanceof Date) return true;
    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
}
function kindOf(val) {
    let typeOfVal = typeof val;
    if ("TURBOPACK compile-time truthy", 1) {
        typeOfVal = miniKindOf(val);
    }
    return typeOfVal;
}
// src/createStore.ts
function createStore(reducer, preloadedState, enhancer) {
    if (typeof reducer !== "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the root reducer to be a function. Instead, received: '${kindOf(reducer)}'`);
    }
    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
    }
    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
        enhancer = preloadedState;
        preloadedState = void 0;
    }
    if (typeof enhancer !== "undefined") {
        if (typeof enhancer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the enhancer to be a function. Instead, received: '${kindOf(enhancer)}'`);
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    let currentReducer = reducer;
    let currentState = preloadedState;
    let currentListeners = /* @__PURE__ */ new Map();
    let nextListeners = currentListeners;
    let listenerIdCounter = 0;
    let isDispatching = false;
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = /* @__PURE__ */ new Map();
            currentListeners.forEach((listener, key)=>{
                nextListeners.set(key, listener);
            });
        }
    }
    function getState() {
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
        }
        return currentState;
    }
    function subscribe(listener) {
        if (typeof listener !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the listener to be a function. Instead, received: '${kindOf(listener)}'`);
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
        }
        let isSubscribed = true;
        ensureCanMutateNextListeners();
        const listenerId = listenerIdCounter++;
        nextListeners.set(listenerId, listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            nextListeners.delete(listenerId);
            currentListeners = null;
        };
    }
    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Actions must be plain objects. Instead, the actual type was: '${kindOf(action)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
        }
        if (typeof action.type === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
        }
        if (typeof action.type !== "string") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Action "type" property must be a string. Instead, the actual type was: '${kindOf(action.type)}'. Value was: '${action.type}' (stringified)`);
        }
        if (isDispatching) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Reducers may not dispatch actions.");
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        } finally{
            isDispatching = false;
        }
        const listeners = currentListeners = nextListeners;
        listeners.forEach((listener)=>{
            listener();
        });
        return action;
    }
    function replaceReducer(nextReducer) {
        if (typeof nextReducer !== "function") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the nextReducer to be a function. Instead, received: '${kindOf(nextReducer)}`);
        }
        currentReducer = nextReducer;
        dispatch({
            type: actionTypes_default.REPLACE
        });
    }
    function observable() {
        const outerSubscribe = subscribe;
        return {
            /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe (observer) {
                if (typeof observer !== "object" || observer === null) {
                    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `Expected the observer to be an object. Instead, received: '${kindOf(observer)}'`);
                }
                function observeState() {
                    const observerAsObserver = observer;
                    if (observerAsObserver.next) {
                        observerAsObserver.next(getState());
                    }
                }
                observeState();
                const unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe
                };
            },
            [symbol_observable_default] () {
                return this;
            }
        };
    }
    dispatch({
        type: actionTypes_default.INIT
    });
    const store = {
        dispatch,
        subscribe,
        getState,
        replaceReducer,
        [symbol_observable_default]: observable
    };
    return store;
}
function legacy_createStore(reducer, preloadedState, enhancer) {
    return createStore(reducer, preloadedState, enhancer);
}
// src/utils/warning.ts
function warning(message) {
    if (typeof console !== "undefined" && typeof console.error === "function") {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (e) {}
}
// src/combineReducers.ts
function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    const reducerKeys = Object.keys(reducers);
    const argumentName = action && action.type === actionTypes_default.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
    if (reducerKeys.length === 0) {
        return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
    }
    if (!isPlainObject(inputState)) {
        return `The ${argumentName} has unexpected type of "${kindOf(inputState)}". Expected argument to be an object with the following keys: "${reducerKeys.join('", "')}"`;
    }
    const unexpectedKeys = Object.keys(inputState).filter((key)=>!reducers.hasOwnProperty(key) && !unexpectedKeyCache[key]);
    unexpectedKeys.forEach((key)=>{
        unexpectedKeyCache[key] = true;
    });
    if (action && action.type === actionTypes_default.REPLACE) return;
    if (unexpectedKeys.length > 0) {
        return `Unexpected ${unexpectedKeys.length > 1 ? "keys" : "key"} "${unexpectedKeys.join('", "')}" found in ${argumentName}. Expected to find one of the known reducer keys instead: "${reducerKeys.join('", "')}". Unexpected keys will be ignored.`;
    }
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach((key)=>{
        const reducer = reducers[key];
        const initialState = reducer(void 0, {
            type: actionTypes_default.INIT
        });
        if (typeof initialState === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `The slice reducer for key "${key}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
        }
        if (typeof reducer(void 0, {
            type: actionTypes_default.PROBE_UNKNOWN_ACTION()
        }) === "undefined") {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `The slice reducer for key "${key}" returned undefined when probed with a random type. Don't try to handle '${actionTypes_default.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
        }
    });
}
function combineReducers(reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for(let i = 0; i < reducerKeys.length; i++){
        const key = reducerKeys[i];
        if ("TURBOPACK compile-time truthy", 1) {
            if (typeof reducers[key] === "undefined") {
                warning(`No reducer provided for key "${key}"`);
            }
        }
        if (typeof reducers[key] === "function") {
            finalReducers[key] = reducers[key];
        }
    }
    const finalReducerKeys = Object.keys(finalReducers);
    let unexpectedKeyCache;
    if (("TURBOPACK compile-time value", "development") !== "production") {
        unexpectedKeyCache = {};
    }
    let shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    } catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state = {}, action) {
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
            if (warningMessage) {
                warning(warningMessage);
            }
        }
        let hasChanged = false;
        const nextState = {};
        for(let i = 0; i < finalReducerKeys.length; i++){
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === "undefined") {
                const actionType = action && action.type;
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `When called with an action of type ${actionType ? `"${String(actionType)}"` : "(unknown type)"}, the slice reducer for key "${key}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
            }
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
        return hasChanged ? nextState : state;
    };
}
// src/bindActionCreators.ts
function bindActionCreator(actionCreator, dispatch) {
    return function(...args) {
        return dispatch(actionCreator.apply(this, args));
    };
}
function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === "function") {
        return bindActionCreator(actionCreators, dispatch);
    }
    if (typeof actionCreators !== "object" || actionCreators === null) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : `bindActionCreators expected an object or a function, but instead received: '${kindOf(actionCreators)}'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?`);
    }
    const boundActionCreators = {};
    for(const key in actionCreators){
        const actionCreator = actionCreators[key];
        if (typeof actionCreator === "function") {
            boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
        }
    }
    return boundActionCreators;
}
// src/compose.ts
function compose(...funcs) {
    if (funcs.length === 0) {
        return (arg)=>arg;
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((a, b)=>(...args)=>a(b(...args)));
}
// src/applyMiddleware.ts
function applyMiddleware(...middlewares) {
    return (createStore2)=>(reducer, preloadedState)=>{
            const store = createStore2(reducer, preloadedState);
            let dispatch = ()=>{
                throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
            };
            const middlewareAPI = {
                getState: store.getState,
                dispatch: (action, ...args)=>dispatch(action, ...args)
            };
            const chain = middlewares.map((middleware)=>middleware(middlewareAPI));
            dispatch = compose(...chain)(store.dispatch);
            return {
                ...store,
                dispatch
            };
        };
}
// src/utils/isAction.ts
function isAction(action) {
    return isPlainObject(action) && "type" in action && typeof action.type === "string";
}
;
 //# sourceMappingURL=redux.mjs.map
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/redux-thunk/dist/redux-thunk.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/index.ts
__turbopack_context__.s([
    "thunk",
    ()=>thunk,
    "withExtraArgument",
    ()=>withExtraArgument
]);
function createThunkMiddleware(extraArgument) {
    const middleware = ({ dispatch, getState })=>(next)=>(action)=>{
                if (typeof action === "function") {
                    return action(dispatch, getState, extraArgument);
                }
                return next(action);
            };
    return middleware;
}
var thunk = createThunkMiddleware();
var withExtraArgument = createThunkMiddleware;
;
}),
]);

//# sourceMappingURL=92e6b_2dd6eff4._.js.map