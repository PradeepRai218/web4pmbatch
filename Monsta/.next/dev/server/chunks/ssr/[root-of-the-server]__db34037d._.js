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
const { createSlice } = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript)");
let userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('USER') ? JSON.parse(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get('USER')) : null
    },
    reducers: {
        userData: (state, reqData)=>{
            let { payload } = reqData;
            state.userInfo = payload;
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set('USER', JSON.stringify(state.userInfo));
        },
        logOut: (state)=>{
            state.userInfo = null;
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].remove("USER");
        }
    }
});
const { userData, logOut } = userSlice.actions;
const __TURBOPACK__default__export__ = userSlice.reducer;
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
"use client";
;
;
;
;
;
;
function Header() {
    let [click, setClick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    let userData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((store)=>store.user.userInfo);
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
        redirect("/");
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
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        userData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: logOutmyPage,
                            children: "LogOut"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 45,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/Login-Register",
                            className: "text-sm text-black hover:text-[#b76e79] transition",
                            children: "Login / Register"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 47,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 38,
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
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 59,
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
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-4 py-2 text-black hover:text-[#b76e79] transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {}, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 67,
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
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 79,
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
                                                    lineNumber: 89,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleclose,
                                                    className: "text-gray-500 hover:text-[#C09578] text-2xl font-bold cursor-pointer",
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 88,
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
                                                                    lineNumber: 105,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-medium text-gray-800",
                                                                            children: "Wooden Chair"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                            lineNumber: 111,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: "Qty: 2"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                            lineNumber: 114,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                    lineNumber: 110,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 104,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#C09578] font-semibold text-lg",
                                                            children: "$120"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 117,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 103,
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
                                                                    lineNumber: 124,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "text-lg font-medium text-gray-800",
                                                                            children: "Sofa Set"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                            lineNumber: 130,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: "Qty: 1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                            lineNumber: 133,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                                    lineNumber: 129,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 123,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[#b76e79] font-semibold text-lg",
                                                            children: "$250"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 136,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 101,
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
                                                            lineNumber: 145,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xl font-bold text-[#b76e79]",
                                                            children: "$370"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 148,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "w-full bg-[#C09578] text-white py-3 rounded-lg hover:bg-[#C09578] transition",
                                                    children: "Proceed to Checkout"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 143,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleclick,
                                    className: "border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 cursor-pointer hover:border-[#b76e79] hover:text-[#b76e79] transition",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-black",
                                            children: "Add to Cart"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShoppingCart"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaAngleDown"], {}, void 0, false, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 57,
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
                                    lineNumber: 175,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 174,
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
                                                lineNumber: 185,
                                                columnNumber: 24
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 181,
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
                                                        lineNumber: 190,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/Product-Listing-page",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Living Room"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 192,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/Product-Listing-page",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Side and End Tables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Nest Of Tables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 208,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 207,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Coffee Table Sets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 213,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 212,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Coffee Tables"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 218,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 217,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 189,
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
                                                        lineNumber: 225,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Wooden Mirror"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 227,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 226,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 224,
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
                                                        lineNumber: 233,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Prayer Units"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 237,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 236,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Display Unit"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 242,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 241,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Shoe Racks"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 247,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 246,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Chest Of Drawers"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 252,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 251,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Cabinets and Sideboard"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 257,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 256,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Bookshelves"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 262,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 261,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Tv Units"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 232,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 180,
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
                                                lineNumber: 280,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 276,
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
                                                        lineNumber: 285,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Wooden Sofa Cum Bed"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 287,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 286,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 284,
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
                                                        lineNumber: 294,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "L Shape Sofa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 296,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 295,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "1 Seater Sofa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 301,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 300,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "2 Seater Sofa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 306,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 305,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "3 Seater Sofa"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 311,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 310,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Wooden Sofa Sets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Normal"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 321,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 320,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 293,
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
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: "#",
                                                            className: "hover:text-[#b76e79] block",
                                                            children: "Wooden Jhula"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                            lineNumber: 330,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 329,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                lineNumber: 327,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 283,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 275,
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
                                                lineNumber: 343,
                                                columnNumber: 22
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 339,
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
                                                    lineNumber: 347,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/about-us",
                                                        className: "hover:text-[#b76e79] block",
                                                        children: "About Us"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 349,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 348,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/Shoping-Cart",
                                                        className: "hover:text-[#b76e79] block",
                                                        children: "Cart"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 357,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 356,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "#",
                                                        className: "hover:text-[#b76e79] block",
                                                        children: "CheckOut"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 365,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 364,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/FAQ-Section",
                                                        className: "hover:text-[#b76e79] block",
                                                        children: "FAQ"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                        lineNumber: 370,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                                    lineNumber: 369,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                            lineNumber: 346,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 338,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/Contact-us",
                                    className: "hover:text-[#b76e79] transition",
                                    children: "CONTACT US"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                    lineNumber: 382,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                                lineNumber: 381,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/common/Header.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/store/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$userLogin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/src/app/slice/userLogin.js [app-ssr] (ecmascript)");
;
const { configureStore } = __turbopack_context__.r("[project]/Desktop/backup/New folder/wsb-172/backend/ecom/Monsta/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript)");
let store = configureStore({
    reducer: {
        user: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$backup$2f$New__folder$2f$wsb$2d$172$2f$backend$2f$ecom$2f$Monsta$2f$src$2f$app$2f$slice$2f$userLogin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
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

//# sourceMappingURL=%5Broot-of-the-server%5D__db34037d._.js.map