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
]);

//# sourceMappingURL=92e6b_4331ba5e._.js.map