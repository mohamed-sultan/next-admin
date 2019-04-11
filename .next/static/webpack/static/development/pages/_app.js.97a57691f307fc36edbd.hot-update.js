webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./redux/reducers/About.js");
/* harmony import */ var _Rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rules */ "./redux/reducers/Rules.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users */ "./redux/reducers/users.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  about: _About__WEBPACK_IMPORTED_MODULE_0__["default"],
  rules: _Rules__WEBPACK_IMPORTED_MODULE_1__["default"],
  users: _users__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./redux/reducers/users.js":
/*!*********************************!*\
  !*** ./redux/reducers/users.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ "./redux/types/index.js");


var initialState = {
  users: []
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _types__WEBPACK_IMPORTED_MODULE_1__["USERS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        users: payload
      });

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.97a57691f307fc36edbd.hot-update.js.map