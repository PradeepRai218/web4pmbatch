(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/slice/userLogin.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "logOut",
    ()=>logOut,
    "userData",
    ()=>userData,
    "userSlice",
    ()=>userSlice
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
;
const { createSlice } = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-client] (ecmascript)");
let userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("USER") ? JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("USER")) : null,
        token: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("TOKEN") ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("TOKEN") : ""
    },
    reducers: {
        userData: (state, reqData)=>{
            let { payload } = reqData; //{data,token}
            state.userInfo = payload.data;
            state.token = payload.token;
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("USER", JSON.stringify(state.userInfo));
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set("TOKEN", state.token);
        },
        logOut: (state)=>{
            state.userInfo = null;
            state.token = "";
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("USER");
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove("TOKEN");
        }
    }
});
const { userData, logOut } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$userLogin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/slice/userLogin.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "706c54ab2b273f76b7241ad0f224715abc382fd68006c4cb66db832349193b83") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "706c54ab2b273f76b7241ad0f224715abc382fd68006c4cb66db832349193b83";
    }
    const [click, setClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])(_HeaderUseSelector);
    console.log(userData);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Header[handleclick]": ()=>{
                setClick(true);
            }
        })["Header[handleclick]"];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const handleclick = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Header[handleclose]": ()=>{
                setClick(false);
            }
        })["Header[handleclose]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleclose = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(_HeaderUseEffect, t2);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    let t3;
    if ($[4] !== dispatch) {
        t3 = ({
            "Header[logOutmyPage]": ()=>{
                dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$userLogin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["logOut"])());
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["redirect"])("/");
            }
        })["Header[logOutmyPage]"];
        $[4] = dispatch;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const logOutmyPage = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-black",
            children: "Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com"
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    let t5;
    if ($[7] !== logOutmyPage || $[8] !== userData) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-300 py-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1320px] mx-auto flex justify-between items-center px-4",
                children: [
                    t4,
                    userData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: logOutmyPage,
                        children: "LogOut"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 77,
                        columnNumber: 152
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/Login-Register",
                        className: "text-sm text-black hover:text-[#b76e79] transition",
                        children: "Login / Register"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 77,
                        columnNumber: 201
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 77,
                columnNumber: 57
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[7] = logOutmyPage;
        $[8] = userData;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[150px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png",
                alt: "Logo",
                className: "w-full"
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 86,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 86,
            columnNumber: 10
        }, this);
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    let t7;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Search products...",
            className: "flex-1 px-4 py-2 text-sm outline-none text-black"
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 93,
            columnNumber: 10
        }, this);
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center border border-gray-300 rounded-full overflow-hidden w-full max-w-[600px]",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-4 py-2 text-black hover:text-[#b76e79] transition",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaSearch"], {}, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 100,
                        columnNumber: 195
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 100,
                    columnNumber: 122
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 100,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/Wish-list",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "border border-gray-300 rounded-full px-3 py-2 flex items-center justify-center hover:border-[#C09578] hover:text-[#C09578] transition",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaHeart"], {}, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 107,
                    columnNumber: 188
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 107,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 107,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== click) {
        t10 = click && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-0 right-0 w-[500px] h-full bg-white shadow-2xl border-l border-gray-200 z-50 p-6 overflow-y-auto duration-1000",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-between items-center mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-semibold text-gray-800",
                            children: "Your Cart"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 114,
                            columnNumber: 214
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleclose,
                            className: "text-gray-500 hover:text-[#C09578] text-2xl font-bold cursor-pointer",
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 114,
                            columnNumber: 281
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 114,
                    columnNumber: 158
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://via.placeholder.com/80",
                                            alt: "product",
                                            className: "w-20 h-20 object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 114,
                                            columnNumber: 541
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium text-gray-800",
                                                    children: "Wooden Chair"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 650
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Qty: 2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 717
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 114,
                                            columnNumber: 645
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 114,
                                    columnNumber: 500
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#C09578] font-semibold text-lg",
                                    children: "$120"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 114,
                                    columnNumber: 776
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 114,
                            columnNumber: 435
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between border-b pb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "https://via.placeholder.com/80",
                                            alt: "product",
                                            className: "w-20 h-20 object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 114,
                                            columnNumber: 954
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg font-medium text-gray-800",
                                                    children: "Sofa Set"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 1063
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-500",
                                                    children: "Qty: 1"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 1126
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 114,
                                            columnNumber: 1058
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 114,
                                    columnNumber: 913
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#b76e79] font-semibold text-lg",
                                    children: "$250"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 114,
                                    columnNumber: 1185
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 114,
                            columnNumber: 848
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 114,
                    columnNumber: 408
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 border-t pt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg font-semibold text-gray-700",
                                    children: "Total"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 114,
                                    columnNumber: 1355
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl font-bold text-[#b76e79]",
                                    children: "$370"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 114,
                                    columnNumber: 1421
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 114,
                            columnNumber: 1299
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-[#C09578] text-white py-3 rounded-lg hover:bg-[#C09578] transition",
                            children: "Proceed to Checkout"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 114,
                            columnNumber: 1489
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 114,
                    columnNumber: 1263
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 114,
            columnNumber: 20
        }, this);
        $[14] = click;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: handleclick,
            className: "border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer hover:border-[#b76e79] hover:text-[#b76e79] transition",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm text-black",
                    children: "Add to Cart"
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 122,
                    columnNumber: 193
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaShoppingCart"], {}, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 122,
                    columnNumber: 248
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 122,
                    columnNumber: 266
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-gray-300 bg-white py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1320px] mx-auto flex justify-between items-center gap-4 px-4",
                children: [
                    t6,
                    t8,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            t9,
                            t10,
                            t11
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 129,
                        columnNumber: 160
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 129,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[17] = t10;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/",
                className: "hover:text-[#b76e79] transition",
                children: "HOME"
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 137,
                columnNumber: 15
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "flex items-center gap-1 hover:text-[#b76e79]",
            children: [
                "LIVING ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 144,
                    columnNumber: 87
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 144,
            columnNumber: 11
        }, this);
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2 text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-[16px] text-[#b76e79]",
                    children: "Tables"
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 151,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/Product-Listing-page",
                        className: "hover:text-[#b76e79] block",
                        children: "Living Room"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 151,
                        columnNumber: 106
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 151,
                    columnNumber: 102
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/Product-Listing-page",
                        className: "hover:text-[#b76e79] block",
                        children: "Side and End Tables"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 151,
                        columnNumber: 207
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 151,
                    columnNumber: 203
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "Nest Of Tables"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 151,
                        columnNumber: 316
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 151,
                    columnNumber: 312
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "Coffee Table Sets"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 151,
                        columnNumber: 394
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 151,
                    columnNumber: 390
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "Coffee Tables"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 151,
                        columnNumber: 475
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 151,
                    columnNumber: 471
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 151,
            columnNumber: 11
        }, this);
        $[21] = t15;
    } else {
        t15 = $[21];
    }
    let t16;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2 text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-[16px] text-[#b76e79]",
                    children: "Mirror"
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 158,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "Wooden Mirror"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 158,
                        columnNumber: 106
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 158,
                    columnNumber: 102
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "relative group",
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-full left-0 hidden group-hover:flex bg-white shadow-lg border border-gray-300 p-4 gap-10 min-w-max",
                    children: [
                        t15,
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-[16px] text-[#b76e79]",
                                    children: "Living Storage/collections"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 165,
                                    columnNumber: 223
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[#b76e79] block",
                                        children: "Prayer Units"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 165,
                                        columnNumber: 301
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 165,
                                    columnNumber: 297
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[#b76e79] block",
                                        children: "Display Unit"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 165,
                                        columnNumber: 377
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 165,
                                    columnNumber: 373
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[#b76e79] block",
                                        children: "Shoe Racks"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 165,
                                        columnNumber: 453
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 165,
                                    columnNumber: 449
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[#b76e79] block",
                                        children: "Chest Of Drawers"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 165,
                                        columnNumber: 527
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 165,
                                    columnNumber: 523
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[#b76e79] block",
                                        children: "Cabinets and Sideboard"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 165,
                                        columnNumber: 607
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 165,
                                    columnNumber: 603
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[#b76e79] block",
                                        children: "Bookshelves"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 165,
                                        columnNumber: 693
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 165,
                                    columnNumber: 689
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[#b76e79] block",
                                        children: "Tv Units"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 165,
                                        columnNumber: 768
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 165,
                                    columnNumber: 764
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 165,
                            columnNumber: 186
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 165,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "flex items-center gap-1 hover:text-[#b76e79]",
            children: [
                "SOFA ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 172,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2 text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-[16px] text-[#b76e79]",
                    children: "Sofa Cum Bed"
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 179,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "Wooden Sofa Cum Bed"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 179,
                        columnNumber: 112
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 179,
                    columnNumber: 108
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 179,
            columnNumber: 11
        }, this);
        $[25] = t19;
    } else {
        t19 = $[25];
    }
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "space-y-2 text-black",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "text-[16px] text-[#b76e79]",
                    children: "Sofa Seat"
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 186,
                    columnNumber: 48
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "L Shape Sofa"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 186,
                        columnNumber: 109
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 186,
                    columnNumber: 105
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "1 Seater Sofa"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 186,
                        columnNumber: 185
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 186,
                    columnNumber: 181
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "2 Seater Sofa"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 186,
                        columnNumber: 262
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 186,
                    columnNumber: 258
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "3 Seater Sofa"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 186,
                        columnNumber: 339
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 186,
                    columnNumber: 335
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "Wooden Sofa Sets"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 186,
                        columnNumber: 416
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 186,
                    columnNumber: 412
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "hover:text-[#b76e79] block",
                        children: "Normal"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 186,
                        columnNumber: 496
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 186,
                    columnNumber: 492
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: "relative group",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "gap-10 absolute top-full left-0 hidden group-hover:flex bg-white shadow-lg border border-gray-300 p-4 min-w-max transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100",
                    children: [
                        t19,
                        t20,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-black",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "text-[16px] text-[#b76e79]",
                                    children: "Swing Jhula"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 193,
                                    columnNumber: 297
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-[#b76e79] block",
                                        children: "Wooden Jhula"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 193,
                                        columnNumber: 360
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 193,
                                    columnNumber: 356
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 193,
                            columnNumber: 260
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 193,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[27] = t21;
    } else {
        t21 = $[27];
    }
    let t22;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: "#",
            className: "flex items-center gap-1 hover:text-[#b76e79]",
            children: [
                "PAGE ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 200,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[28] = t22;
    } else {
        t22 = $[28];
    }
    let t23;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "border-b border-gray-300 py-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1320px] mx-auto flex justify-center items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex items-center gap-10 text-[15px] font-bold text-black ",
                    children: [
                        t13,
                        t17,
                        t21,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "relative group",
                            children: [
                                t22,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-300 p-4 w-48",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 text-black",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-[16px] text-[#b76e79]",
                                                children: "Main Page"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 207,
                                                columnNumber: 412
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/about-us",
                                                    className: "hover:text-[#b76e79] block",
                                                    children: "About Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 473
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 207,
                                                columnNumber: 469
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/Shoping-Cart",
                                                    className: "hover:text-[#b76e79] block",
                                                    children: "Cart"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 559
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 207,
                                                columnNumber: 555
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#b76e79] block",
                                                    children: "CheckOut"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 645
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 207,
                                                columnNumber: 641
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/FAQ-Section",
                                                    className: "hover:text-[#b76e79] block",
                                                    children: "FAQ"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 717
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 207,
                                                columnNumber: 713
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 207,
                                        columnNumber: 375
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 207,
                                    columnNumber: 257
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 207,
                            columnNumber: 221
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/Contact-us",
                                className: "hover:text-[#b76e79] transition",
                                children: "CONTACT US"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 207,
                                columnNumber: 817
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 207,
                            columnNumber: 813
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 207,
                    columnNumber: 131
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 207,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[29] = t23;
    } else {
        t23 = $[29];
    }
    let t24;
    if ($[30] !== t12 || $[31] !== t5) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "w-full font-poppins sticky top-0 z-50 bg-white text-black",
            children: [
                t5,
                t12,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[30] = t12;
        $[31] = t5;
        $[32] = t24;
    } else {
        t24 = $[32];
    }
    return t24;
}
_s(Header, "ISrb0n4nvkigxwf+xmScQ8pXhKo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
_c = Header;
function _HeaderUseEffect() {}
function _HeaderUseSelector(store) {
    return store.user.userInfo;
}
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/store/store.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/store/store.js'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/MainLayout.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/store/store.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function MainLayout(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "810d3417eb71a4c2f685cd145d223cd8bf5656f4402920fd4bf8b7f84298c58c") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "810d3417eb71a4c2f685cd145d223cd8bf5656f4402920fd4bf8b7f84298c58c";
    }
    const { children } = t0;
    let t1;
    if ($[1] !== children) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Provider"], {
            store: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$store$2f$store$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["store"],
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/MainLayout.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    return t1;
}
_c = MainLayout;
var _c;
__turbopack_context__.k.register(_c, "MainLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_backup_New%20folder_wsb-172_backend_ecom_Monsta_src_app_7d97b213._.js.map