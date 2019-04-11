webpackHotUpdate("static/development/pages/users.js",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout/AdminLayoutHoc */ "./components/Layout/AdminLayoutHoc.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ styles/styles.scss */ "./ styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _localization_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../localization/index */ "./localization/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../api */ "./api/index.js");
/* harmony import */ var _redux_actions_getUsers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../redux/actions/getUsers */ "./redux/actions/getUsers.js");





















var Users =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Users, _React$Component);

  function Users() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Users);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Users)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "_handelDeleteUser", function (id) {
      var _this$props = _this.props,
          GETUSERSACTION = _this$props.GETUSERSACTION,
          users = _this$props.users;
      GETUSERSACTION(users.filter(function (t) {
        return t._id !== id;
      }));
      react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].success(_localization_index__WEBPACK_IMPORTED_MODULE_16__["default"].userDeleted, {
        position: react_toastify__WEBPACK_IMPORTED_MODULE_14__["toast"].POSITION.TOP_CENTER
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "_handleUsers",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var users;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_api__WEBPACK_IMPORTED_MODULE_17__["getUsers"])();

            case 2:
              users = _context.sent;

              _this.props.GETUSERSACTION(users);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "_showUsers", function () {
      return _this.props.users.map(function (_ref2, index) {
        var email = _ref2.email,
            name = _ref2.name,
            _id = _ref2._id;
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", {
          index: index
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, index + 1), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "11-7-2014"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
          className: "badge bg-success"
        }, "Approved")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", null, "This user was approved by ", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", null, "Anil")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("td", {
          className: "align-middle",
          onClick: function onClick() {
            return _this._handelDeleteUser(_id);
          }
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          className: "fa fa-trash bg-success text-primary p-2 ml-4",
          "aria-hidden": "false"
        })));
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Users, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._handleUsers();
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Layout_AdminLayoutHoc__WEBPACK_IMPORTED_MODULE_11__["default"], {
        contentTitle: "Users",
        contentTitleButton: react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_12___default.a, {
          href: "/add-user"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
          type: "button",
          className: "btn btn-outline-success btn-sm"
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
          className: "fa fa-user-plus fa-fw"
        }), " Add a new user")),
        url: this.props.url
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_14__["ToastContainer"], null), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "col-12"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "card"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "card-header"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "card-title"
      }, "Current active users"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "card-tools"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "input-group input-group-sm",
        style: {
          width: "150px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        type: "text",
        name: "table_search",
        className: "form-control float-right",
        placeholder: "Search"
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "input-group-append"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("button", {
        type: "submit",
        className: "btn btn-default"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("i", {
        className: "fa fa-search"
      })))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "card-body table-responsive p-0"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("table", {
        className: "table table-hover"
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tbody", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("tr", null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", null, "ID"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", null, "User"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", null, "Date"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", null, "Status"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", {
        className: "pl-5"
      }, "Reason"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("th", null, "Delete User")), this._showUsers())))))));
    }
  }]);

  return Users;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

var mapState = function mapState(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.users);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapState, {
  GETUSERSACTION: _redux_actions_getUsers__WEBPACK_IMPORTED_MODULE_18__["GETUSERSACTION"]
})(Users));

/***/ })

})
//# sourceMappingURL=users.js.6f725a9e535d9fb65536.hot-update.js.map