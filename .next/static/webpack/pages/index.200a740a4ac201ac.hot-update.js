"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n\n\n\nconst dummy_meetups = [\n    {\n        id: \"m1\",\n        title: \"first meetup\",\n        address: \"Some street 45, Nis\",\n        description: \"This is first meetup\",\n        image: \"https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg\"\n    },\n    {\n        id: \"m2\",\n        title: \"second meetup\",\n        address: \"Some street 45, Nis\",\n        description: \"This is second  meetup\",\n        image: \"https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg\"\n    },\n    {\n        id: \"m3\",\n        title: \"third meetup\",\n        address: \"Some street 45, Nis\",\n        description: \"This is third meetup\",\n        image: \"https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg\"\n    },\n    {\n        id: \"m4\",\n        title: \"fourth meetup\",\n        address: \"Some street 45, Nis\",\n        description: \"This is fourth meetup\",\n        image: \"https://grubstreetauthor.co.uk/wp-content/uploads/2020/02/london-business-meeting-in-progress.jpg\"\n    }\n];\nconst HomePage = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            meetups: props.meetups\n        }, void 0, false, {\n            fileName: \"D:\\\\Coding\\\\Kursevi\\\\Max Shwazmueller - React Course\\\\Projects\\\\next.js-practice-app\\\\pages\\\\index.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_c = HomePage;\n// funkcija je rezervisana samo za pages folder\n// radi prerender jer next ne ceka da se dobiju podaci sa http poziva recimo\n// nego odmah renderuje stranicu\n// tako da moze da se desi da dobijemo praznu stranicu kao rezultat jer ne uzima\n// asinhroni poziv u razmatranje odmah pri renderovanju\n// ova funkcija garantuje da next ceka podatke i prikazuje ih istovremeno kad i stranicu\n// na ovaj nacin mnogo brze dobijam podatke i mogu da izbegnem loading i slicne\n// stvari kod asinhronog koda\n// revalidate sluzi da posle builda refreshuje podatke i updateuje build\n// na uneti broj sekundi, tako da ne moramo da pravimo novi build\n// export async function getStaticProps() {\n//   // fetch data from an api\n//   return {\n//     props: {\n//       meetups: dummy_meetups,\n//     },\n//     revalidate: 10,\n//   };\n// }\n// ako zelim da refreshujem podatke koje page dobija pri svakom requestu\n// koristim getServerSideProps\n// export async function getServerSideProps(context) {\n//   const req = context.req;\n//   const res = context.res;\n//   // fetch data from api...\n//   return {\n//     props: {\n//       meetups: dummy_meetups,\n//     },\n//   };\n// }\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUE0QztBQUNjO0FBRTFELE1BQU1HLGdCQUFnQjtJQUNwQjtRQUNFQyxJQUFJO1FBQ0pDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxhQUFhO1FBQ2JDLE9BQ0U7SUFDSjtJQUNBO1FBQ0VKLElBQUk7UUFDSkMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLGFBQWE7UUFDYkMsT0FDRTtJQUNKO0lBQ0E7UUFDRUosSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMsYUFBYTtRQUNiQyxPQUNFO0lBQ0o7SUFDQTtRQUNFSixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsU0FBUztRQUNUQyxhQUFhO1FBQ2JDLE9BQ0U7SUFDSjtDQUNEO0FBRUQsTUFBTUMsV0FBVyxDQUFDQyxRQUFVO0lBQzFCLHFCQUNFO2tCQUNFLDRFQUFDUixzRUFBVUE7WUFBQ1MsU0FBU0QsTUFBTUMsT0FBTzs7Ozs7OztBQUd4QztLQU5NRjtBQVFOLCtDQUErQztBQUMvQyw0RUFBNEU7QUFDNUUsZ0NBQWdDO0FBQ2hDLGdGQUFnRjtBQUNoRix1REFBdUQ7QUFDdkQsd0ZBQXdGO0FBQ3hGLCtFQUErRTtBQUMvRSw2QkFBNkI7QUFFN0Isd0VBQXdFO0FBQ3hFLGlFQUFpRTtBQUNqRSwyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCLGFBQWE7QUFDYixlQUFlO0FBQ2YsZ0NBQWdDO0FBQ2hDLFNBQVM7QUFDVCxzQkFBc0I7QUFDdEIsT0FBTztBQUNQLElBQUk7QUFFSix3RUFBd0U7QUFDeEUsOEJBQThCO0FBRTlCLHNEQUFzRDtBQUN0RCw2QkFBNkI7QUFDN0IsNkJBQTZCO0FBRTdCLDhCQUE4QjtBQUM5QixhQUFhO0FBQ2IsZUFBZTtBQUNmLGdDQUFnQztBQUNoQyxTQUFTO0FBQ1QsT0FBTztBQUNQLElBQUk7QUFFSiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lZXR1cExpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0XCI7XHJcblxyXG5jb25zdCBkdW1teV9tZWV0dXBzID0gW1xyXG4gIHtcclxuICAgIGlkOiBcIm0xXCIsXHJcbiAgICB0aXRsZTogXCJmaXJzdCBtZWV0dXBcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBzdHJlZXQgNDUsIE5pc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBmaXJzdCBtZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vZ3J1YnN0cmVldGF1dGhvci5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMi9sb25kb24tYnVzaW5lc3MtbWVldGluZy1pbi1wcm9ncmVzcy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0yXCIsXHJcbiAgICB0aXRsZTogXCJzZWNvbmQgbWVldHVwXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgc3RyZWV0IDQ1LCBOaXNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgc2Vjb25kICBtZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vZ3J1YnN0cmVldGF1dGhvci5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMi9sb25kb24tYnVzaW5lc3MtbWVldGluZy1pbi1wcm9ncmVzcy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm0zXCIsXHJcbiAgICB0aXRsZTogXCJ0aGlyZCBtZWV0dXBcIixcclxuICAgIGFkZHJlc3M6IFwiU29tZSBzdHJlZXQgNDUsIE5pc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyB0aGlyZCBtZWV0dXBcIixcclxuICAgIGltYWdlOlxyXG4gICAgICBcImh0dHBzOi8vZ3J1YnN0cmVldGF1dGhvci5jby51ay93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wMi9sb25kb24tYnVzaW5lc3MtbWVldGluZy1pbi1wcm9ncmVzcy5qcGdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcIm00XCIsXHJcbiAgICB0aXRsZTogXCJmb3VydGggbWVldHVwXCIsXHJcbiAgICBhZGRyZXNzOiBcIlNvbWUgc3RyZWV0IDQ1LCBOaXNcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgZm91cnRoIG1lZXR1cFwiLFxyXG4gICAgaW1hZ2U6XHJcbiAgICAgIFwiaHR0cHM6Ly9ncnVic3RyZWV0YXV0aG9yLmNvLnVrL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzAyL2xvbmRvbi1idXNpbmVzcy1tZWV0aW5nLWluLXByb2dyZXNzLmpwZ1wiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGZ1bmtjaWphIGplIHJlemVydmlzYW5hIHNhbW8gemEgcGFnZXMgZm9sZGVyXHJcbi8vIHJhZGkgcHJlcmVuZGVyIGplciBuZXh0IG5lIGNla2EgZGEgc2UgZG9iaWp1IHBvZGFjaSBzYSBodHRwIHBveml2YSByZWNpbW9cclxuLy8gbmVnbyBvZG1haCByZW5kZXJ1amUgc3RyYW5pY3VcclxuLy8gdGFrbyBkYSBtb3plIGRhIHNlIGRlc2kgZGEgZG9iaWplbW8gcHJhem51IHN0cmFuaWN1IGthbyByZXp1bHRhdCBqZXIgbmUgdXppbWFcclxuLy8gYXNpbmhyb25pIHBveml2IHUgcmF6bWF0cmFuamUgb2RtYWggcHJpIHJlbmRlcm92YW5qdVxyXG4vLyBvdmEgZnVua2NpamEgZ2FyYW50dWplIGRhIG5leHQgY2VrYSBwb2RhdGtlIGkgcHJpa2F6dWplIGloIGlzdG92cmVtZW5vIGthZCBpIHN0cmFuaWN1XHJcbi8vIG5hIG92YWogbmFjaW4gbW5vZ28gYnJ6ZSBkb2JpamFtIHBvZGF0a2UgaSBtb2d1IGRhIGl6YmVnbmVtIGxvYWRpbmcgaSBzbGljbmVcclxuLy8gc3R2YXJpIGtvZCBhc2luaHJvbm9nIGtvZGFcclxuXHJcbi8vIHJldmFsaWRhdGUgc2x1emkgZGEgcG9zbGUgYnVpbGRhIHJlZnJlc2h1amUgcG9kYXRrZSBpIHVwZGF0ZXVqZSBidWlsZFxyXG4vLyBuYSB1bmV0aSBicm9qIHNla3VuZGksIHRha28gZGEgbmUgbW9yYW1vIGRhIHByYXZpbW8gbm92aSBidWlsZFxyXG4vLyBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbi8vICAgLy8gZmV0Y2ggZGF0YSBmcm9tIGFuIGFwaVxyXG4vLyAgIHJldHVybiB7XHJcbi8vICAgICBwcm9wczoge1xyXG4vLyAgICAgICBtZWV0dXBzOiBkdW1teV9tZWV0dXBzLFxyXG4vLyAgICAgfSxcclxuLy8gICAgIHJldmFsaWRhdGU6IDEwLFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbi8vIGFrbyB6ZWxpbSBkYSByZWZyZXNodWplbSBwb2RhdGtlIGtvamUgcGFnZSBkb2JpamEgcHJpIHN2YWtvbSByZXF1ZXN0dVxyXG4vLyBrb3Jpc3RpbSBnZXRTZXJ2ZXJTaWRlUHJvcHNcclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xyXG4vLyAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4vLyAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuLy8gICAvLyBmZXRjaCBkYXRhIGZyb20gYXBpLi4uXHJcbi8vICAgcmV0dXJuIHtcclxuLy8gICAgIHByb3BzOiB7XHJcbi8vICAgICAgIG1lZXR1cHM6IGR1bW15X21lZXR1cHMsXHJcbi8vICAgICB9LFxyXG4vLyAgIH07XHJcbi8vIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZWV0dXBMaXN0IiwiZHVtbXlfbWVldHVwcyIsImlkIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIkhvbWVQYWdlIiwicHJvcHMiLCJtZWV0dXBzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});