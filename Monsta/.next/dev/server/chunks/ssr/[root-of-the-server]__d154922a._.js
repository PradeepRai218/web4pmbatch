module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/slice/userLogin.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
;
const { createSlice } = (()=>{
    const e = new Error("Cannot find module '@reduxjs/toolkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
let userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("USER") ? JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("USER")) : null,
        token: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("TOKEN") ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("TOKEN") : ""
    },
    reducers: {
        userData: (state, reqData)=>{
            let { payload } = reqData; //{data,token}
            state.userInfo = payload.data;
            state.token = payload.token;
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set("USER", JSON.stringify(state.userInfo));
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set("TOKEN", state.token);
        },
        logOut: (state)=>{
            state.userInfo = null;
            state.token = "";
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].remove("USER");
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].remove("TOKEN");
        }
    }
});
const { userData, logOut } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$userLogin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/slice/userLogin.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function Header() {
    let [click, setClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    let userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((store)=>store.user.userInfo);
    let cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((store)=>store.cart.cart);
    console.log(userData);
    let handleclick = ()=>{
        setClick(true);
    };
    let handleclose = ()=>{
        setClick(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleclick;
        handleclose;
    }, []);
    let dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    let logOutmyPage = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$userLogin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logOut"])());
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["redirect"])("/");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full font-poppins sticky top-0 z-50 bg-white text-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-300 py-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1320px] mx-auto flex justify-between items-center px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-black",
                            children: "Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        userData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: logOutmyPage,
                            children: "LogOut"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/Login-Register",
                            className: "text-sm text-black hover:text-[#b76e79] transition",
                            children: "Login / Register"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-gray-300 bg-white py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1320px] mx-auto flex justify-between items-center gap-4 px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[150px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png",
                                alt: "Logo",
                                className: "w-full"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center border border-gray-300 rounded-full overflow-hidden w-full max-w-[600px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Search products...",
                                    className: "flex-1 px-4 py-2 text-sm outline-none text-black"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 text-black hover:text-[#b76e79] transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/Wish-list",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "border border-gray-300 rounded-full px-3 py-2 flex items-center justify-center hover:border-[#C09578] hover:text-[#C09578] transition",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHeart"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                click && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fixed top-0 right-0 w-[500px] h-full bg-white shadow-2xl border-l border-gray-200 z-50 p-6 overflow-y-auto duration-1000",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-2xl font-semibold text-gray-800",
                                                    children: "Your Cart"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleclose,
                                                    className: "text-gray-500 hover:text-[#C09578] text-2xl font-bold cursor-pointer",
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between border-b pb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "https://via.placeholder.com/80",
                                                                    alt: "product",
                                                                    className: "w-20 h-20 object-cover rounded-lg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                    lineNumber: 107,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-medium text-gray-800",
                                                                            children: "Wooden Chair"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                            lineNumber: 113,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: "Qty: 2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                            lineNumber: 116,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                    lineNumber: 112,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 106,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#C09578] font-semibold text-lg",
                                                            children: "$120"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 119,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between border-b pb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "https://via.placeholder.com/80",
                                                                    alt: "product",
                                                                    className: "w-20 h-20 object-cover rounded-lg"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                    lineNumber: 126,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-medium text-gray-800",
                                                                            children: "Sofa Set"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                            lineNumber: 132,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: "Qty: 1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                            lineNumber: 135,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                    lineNumber: 131,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 125,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#b76e79] font-semibold text-lg",
                                                            children: "$250"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 124,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 103,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-8 border-t pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg font-semibold text-gray-700",
                                                            children: "Total"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl font-bold text-[#b76e79]",
                                                            children: "$370"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 150,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 146,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full bg-[#C09578] text-white py-3 rounded-lg hover:bg-[#C09578] transition",
                                                    children: "Proceed to Checkout"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 154,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleclick,
                                    className: "border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer hover:border-[#b76e79] hover:text-[#b76e79] transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-black",
                                            children: [
                                                "Add to Cart ",
                                                cart.length,
                                                " "
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShoppingCart"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b border-gray-300 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-[1320px] mx-auto flex justify-center items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "flex items-center gap-10 text-[15px] font-bold text-black ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-[#b76e79] transition",
                                    children: "HOME"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 176,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "flex items-center gap-1 hover:text-[#b76e79]",
                                        children: [
                                            "LIVING ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 187,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-full left-0 hidden group-hover:flex bg-white shadow-lg border border-gray-300 p-4 gap-10 min-w-max",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-[16px] text-[#b76e79]",
                                                        children: "Tables"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 192,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/Product-Listing-page",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Living Room"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 194,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 193,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/Product-Listing-page",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Side and End Tables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 202,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 201,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Nest Of Tables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 210,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Coffee Table Sets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 214,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Coffee Tables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 220,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 219,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-[16px] text-[#b76e79]",
                                                        children: "Mirror"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Wooden Mirror"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 229,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 228,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-[16px] text-[#b76e79]",
                                                        children: "Living Storage/collections"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 235,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Prayer Units"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 238,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Display Unit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 244,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 243,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Shoe Racks"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 249,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 248,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Chest Of Drawers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 254,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 253,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Cabinets and Sideboard"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 259,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 258,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Bookshelves"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 264,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Tv Units"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 269,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 268,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 190,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "flex items-center gap-1 hover:text-[#b76e79]",
                                        children: [
                                            "SOFA ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 282,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "gap-10 absolute top-full left-0 hidden group-hover:flex bg-white shadow-lg border border-gray-300 p-4 min-w-max transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-[16px] text-[#b76e79]",
                                                        children: "Sofa Cum Bed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 287,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Wooden Sofa Cum Bed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 288,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-[16px] text-[#b76e79]",
                                                        children: "Sofa Seat"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 296,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "L Shape Sofa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 298,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 297,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "1 Seater Sofa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 303,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 302,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "2 Seater Sofa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 308,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 307,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "3 Seater Sofa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 313,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 312,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Wooden Sofa Sets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 318,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 317,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Normal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 322,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 295,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 text-black",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-[16px] text-[#b76e79]",
                                                        children: "Swing Jhula"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 330,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Wooden Jhula"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 332,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "flex items-center gap-1 hover:text-[#b76e79]",
                                        children: [
                                            "PAGE ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 345,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 341,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border border-gray-300 p-4 w-48",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2 text-black",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "text-[16px] text-[#b76e79]",
                                                    children: "Main Page"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about-us",
                                                        className: "hover:text-[#b76e79] block",
                                                        children: "About Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 351,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 350,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/Shoping-Cart",
                                                        className: "hover:text-[#b76e79] block",
                                                        children: [
                                                            "Cart ",
                                                            cart.length
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 359,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 358,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#b76e79] block",
                                                        children: "CheckOut"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 367,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/FAQ-Section",
                                                        className: "hover:text-[#b76e79] block",
                                                        children: "FAQ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 372,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 371,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/Contact-us",
                                    className: "hover:text-[#b76e79] transition",
                                    children: "CONTACT US"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 383,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 175,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 174,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/slice/cartSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cartData",
    ()=>cartData,
    "cartSlice",
    ()=>cartSlice,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchCarts",
    ()=>fetchCarts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
;
;
const { createSlice, createAsyncThunk } = (()=>{
    const e = new Error("Cannot find module '@reduxjs/toolkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
let baseUrl = ("TURBOPACK compile-time value", "http://localhost:8000/web/");
const fetchCarts = createAsyncThunk("cart/fetchCarts", async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${baseUrl}cart/view-cart`, {}, {
        headers: {
            Authorization: `Bearer ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("TOKEN")}`
        }
    });
    console.log("Hello Cart", response.data.cartItems);
    return response?.data.cartItems;
});
let cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        cartData: (state, reqData)=>{}
    },
    extraReducers: (builder)=>{
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchCarts.fulfilled, (state, action)=>{
            // Add user to the state array
            state.cart = action.payload;
        });
    }
});
const { cartData } = cartSlice.actions;
const __TURBOPACK__default__export__ = cartSlice.reducer;
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/store/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$cartSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/slice/cartSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$userLogin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/slice/userLogin.js [app-ssr] (ecmascript)");
;
;
const { configureStore } = (()=>{
    const e = new Error("Cannot find module '@reduxjs/toolkit'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
let store = configureStore({
    reducer: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$userLogin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        cart: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$cartSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/MainLayout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/store/store.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MainLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/MainLayout.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__d154922a._.js.map