webpackHotUpdate("static/development/pages/main.js",{

/***/ "./components/Layout/AdminSidebar.js":
/*!*******************************************!*\
  !*** ./components/Layout/AdminSidebar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _localization__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../localization */ "./localization/index.js");










var AdminSidebar =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(AdminSidebar, _React$Component);

  function AdminSidebar() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AdminSidebar);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(AdminSidebar).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AdminSidebar, [{
    key: "render",
    value: function render() {
      var pathname = this.props.router.pathname;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("aside", {
        className: "main-sidebar sidebar-dark-primary elevation-4",
        style: {
          minHeight: "846px"
        }
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: "brand-link text-center"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-home fa-2x brand-image ml-2"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "brand-text font-weight-light"
      }, this.props.projectName && this.props.projectName))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "sidebar"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("nav", {
        className: "mt-2"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "nav nav-pills nav-sidebar flex-column",
        "data-widget": "treeview",
        role: "menu",
        "data-accordion": "false"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: ["nav-link", pathname === "/" ? "active" : ""].join(" ")
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "nav-icon fa fa-home"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          textAlign: "right"
        }
      }, "\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0647")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/statics"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: ["nav-link", pathname === "/statics" ? "active" : ""].join(" ")
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        class: "fa fa-free-code-camp",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          textAlign: "right"
        }
      }, "\u0645\u0644\u062E\u0635\u0627\u062A")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/users"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: ["nav-link", pathname === "/users" ? "active" : ""].join(" ")
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "nav-icon fa fa-user-circle"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          textAlign: "right"
        }
      }, "\u0627\u0644\u0627\u0639\u0636\u0627\u0621", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "right badge badge-success"
      }, "2"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item has-treeview menu-closed"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "nav-icon fa fa-dashboard"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Other Pages", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "right fa fa-angle-left"
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: "nav nav-treeview"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-circle-o nav-icon"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Active Page"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "#",
        className: "nav-link"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fa fa-circle-o nav-icon"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, "Inactive Page"))))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/rules"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: ["nav-link", pathname === "/rules" ? "active" : ""].join(" ")
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        class: "fa fa-pencil-square-o p-2",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          textAlign: "right"
        }
      }, " \u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0627\u062D\u0627\u0643\u0645 ")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/about"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: ["nav-link", pathname === "/about" ? "active" : ""].join(" ")
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        class: "fa fa-check-circle p-2",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          textAlign: "right"
        }
      }, " \u0639\u0646 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 ")))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/logout"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        className: ["nav-link", pathname === "/logout" ? "active" : ""].join(" ")
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        class: "fa fa-sign-out p-2",
        "aria-hidden": "true"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
        style: {
          textAlign: "right"
        }
      }, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C "))))))));
    }
  }]);

  return AdminSidebar;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(AdminSidebar));

/***/ }),

/***/ "./localization/index.js":
/*!*******************************!*\
  !*** ./localization/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  summrie: "ملخصات",
  rules: "الشروط والاحكام",
  about: "عن التطبيق",
  logout: "تسجيل الخروج",
  home: "الرئيسيه"
});

/***/ })

})
//# sourceMappingURL=main.js.3894de140040ae6359d1.hot-update.js.map