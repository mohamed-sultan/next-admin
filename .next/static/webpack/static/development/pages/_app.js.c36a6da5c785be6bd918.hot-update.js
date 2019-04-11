webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/index.js":
/*!************************!*\
  !*** ./redux/index.js ***!
  \************************/
/*! exports provided: reducer, makeStore, setClientState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setClientState", function() { return setClientState; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");



var SET_CLIENT_STATE = "SET_CLIENT_STATE";

var reducer = function reducer(state, _ref) {
  var type = _ref.type,
      payload = _ref.payload;

  if (type === SET_CLIENT_STATE) {
    return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      fromClient: payload
    });
  }

  return state;
};

var makeConfiguredStore = function makeConfiguredStore(reducer, initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a));
};

var makeStore = function makeStore(initialState, _ref2) {
  var isServer = _ref2.isServer,
      req = _ref2.req,
      debug = _ref2.debug,
      storeKey = _ref2.storeKey;

  if (isServer) {
    initialState = initialState || {
      fromServer: "foo"
    };
    return makeConfiguredStore(reducer, initialState);
  } else {
    // we need it only on client side
    var _require = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js"),
        persistStore = _require.persistStore,
        persistCombineReducers = _require.persistCombineReducers;

    var storage = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js").default;

    var persistConfig = {
      key: "nextjs",
      whitelist: ["fromClient", "about", "rules", "users"],
      // make sure it does not clash with server keys
      storage: storage
    };
    var persistedReducer = persistCombineReducers(persistConfig, _reducers__WEBPACK_IMPORTED_MODULE_3__["default"]);
    var store = makeConfiguredStore(persistedReducer, initialState);
    store.__persistor = persistStore(store); // Nasty hack

    return store;
  }
};
var setClientState = function setClientState(clientState) {
  return {
    type: SET_CLIENT_STATE,
    payload: clientState
  };
};

/***/ })

})
//# sourceMappingURL=_app.js.c36a6da5c785be6bd918.hot-update.js.map