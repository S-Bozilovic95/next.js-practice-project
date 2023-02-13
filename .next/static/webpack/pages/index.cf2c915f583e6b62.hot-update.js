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

/***/ "./components/meetups/MeetupList.js":
/*!******************************************!*\
  !*** ./components/meetups/MeetupList.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/api/baseUrl */ \"./pages/api/baseUrl.js\");\n/* harmony import */ var _MeetupItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MeetupItem */ \"./components/meetups/MeetupItem.js\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MeetupList.module.css */ \"./components/meetups/MeetupList.module.css\");\n/* harmony import */ var _MeetupList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MeetupList(props) {\n    _s();\n    const getData = async ()=>{\n        const selectedMeet = await _pages_api_baseUrl__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"meetups.json/-NO74qtyqm6IJa_PBP0r\");\n        console.log(selectedMeet);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getData();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_MeetupList_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),\n        children: props.meetups.map((meetup)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MeetupItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                id: meetup.id,\n                image: meetup.image,\n                title: meetup.title,\n                address: meetup.address\n            }, meetup.id, false, {\n                fileName: \"D:\\\\Coding\\\\Kursevi\\\\Max Shwazmueller - React Course\\\\Projects\\\\next.js-practice-app\\\\components\\\\meetups\\\\MeetupList.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"D:\\\\Coding\\\\Kursevi\\\\Max Shwazmueller - React Course\\\\Projects\\\\next.js-practice-app\\\\components\\\\meetups\\\\MeetupList.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(MeetupList, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = MeetupList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupList);\nvar _c;\n$RefreshReg$(_c, \"MeetupList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBa0M7QUFDUTtBQUNKO0FBQ1E7QUFFOUMsU0FBU0ksV0FBV0MsS0FBSyxFQUFFOztJQUN6QixNQUFNQyxVQUFVLFVBQVk7UUFDMUIsTUFBTUMsZUFBZSxNQUFNTiw4REFBTyxDQUFFO1FBRXBDUSxRQUFRQyxHQUFHLENBQUNIO0lBQ2Q7SUFFQVAsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTTtJQUNGO0lBQ0EscUJBQ0UsOERBQUNLO1FBQUdDLFdBQVdULG9FQUFZO2tCQUN4QkUsTUFBTVMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0MsdUJBQ2xCLDhEQUFDZCxtREFBVUE7Z0JBRVRlLElBQUlELE9BQU9DLEVBQUU7Z0JBQ2JDLE9BQU9GLE9BQU9FLEtBQUs7Z0JBQ25CQyxPQUFPSCxPQUFPRyxLQUFLO2dCQUNuQkMsU0FBU0osT0FBT0ksT0FBTztlQUpsQkosT0FBT0MsRUFBRTs7Ozs7Ozs7OztBQVN4QjtHQXZCU2I7S0FBQUE7QUF5QlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cExpc3QuanM/YTBiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBUEkgZnJvbSBcIi4uLy4uL3BhZ2VzL2FwaS9iYXNlVXJsXCI7XG5pbXBvcnQgTWVldHVwSXRlbSBmcm9tIFwiLi9NZWV0dXBJdGVtXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NZWV0dXBMaXN0Lm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTWVldHVwTGlzdChwcm9wcykge1xuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkTWVldCA9IGF3YWl0IEFQSS5nZXQoYG1lZXR1cHMuanNvbi8tTk83NHF0eXFtNklKYV9QQlAwcmApO1xuXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRNZWV0KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldERhdGEoKTtcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cbiAgICAgIHtwcm9wcy5tZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoXG4gICAgICAgIDxNZWV0dXBJdGVtXG4gICAgICAgICAga2V5PXttZWV0dXAuaWR9XG4gICAgICAgICAgaWQ9e21lZXR1cC5pZH1cbiAgICAgICAgICBpbWFnZT17bWVldHVwLmltYWdlfVxuICAgICAgICAgIHRpdGxlPXttZWV0dXAudGl0bGV9XG4gICAgICAgICAgYWRkcmVzcz17bWVldHVwLmFkZHJlc3N9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBMaXN0O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIkFQSSIsIk1lZXR1cEl0ZW0iLCJjbGFzc2VzIiwiTWVldHVwTGlzdCIsInByb3BzIiwiZ2V0RGF0YSIsInNlbGVjdGVkTWVldCIsImdldCIsImNvbnNvbGUiLCJsb2ciLCJ1bCIsImNsYXNzTmFtZSIsImxpc3QiLCJtZWV0dXBzIiwibWFwIiwibWVldHVwIiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiYWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/MeetupList.js\n"));

/***/ })

});