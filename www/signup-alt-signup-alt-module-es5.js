function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-alt-signup-alt-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-alt/signup-alt.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup-alt/signup-alt.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupAltSignupAltPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Sign Up Alternative</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ion-padding-bottom\">\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Name</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Email</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Phone</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Phone\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-hint\">\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <p>Your phone number is used to verify the account. Check your phone to get a verification code which will be valid for 3 hours.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Password</ion-label>\r\n      <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Repeat Password</ion-label>\r\n      <ion-input type=\"password\" placeholder=\"Repeat Password\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding-vertical\">\r\n    <ion-item>\r\n      <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n      <ion-label position=\"stacked\" color=\"primary\">Birthday</ion-label>\r\n      <ion-datetime displayFormat=\"MMM DD, YYYY\" min=\"1940-01-01\" max=\"2017-12-31\" placeholder=\"Birthday\"></ion-datetime>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding-vertical\">\r\n    <ion-list-header>\r\n      <ion-label>Action</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Country</ion-label>\r\n      <ion-select interface=\"popover\" placeholder=\"Country\">\r\n        <ion-select-option value=\"unitedkingdom\">United Kingdom</ion-select-option>\r\n        <ion-select-option value=\"canada\">Canada</ion-select-option>\r\n        <ion-select-option value=\"france\">France</ion-select-option>\r\n        <ion-select-option value=\"italy\">Italy</ion-select-option>\r\n        <ion-select-option value=\"greece\">Greece</ion-select-option>\r\n        <ion-select-option value=\"spain\">Spain</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">City</ion-label>\r\n      <ion-select interface=\"popover\" placeholder=\"City\">\r\n        <ion-select-option value=\"city1\">City 1</ion-select-option>\r\n        <ion-select-option value=\"city2\">City 2</ion-select-option>\r\n        <ion-select-option value=\"city3\">City 3</ion-select-option>\r\n        <ion-select-option value=\"city4\">City 4</ion-select-option>\r\n        <ion-select-option value=\"city5\">City 5</ion-select-option>\r\n        <ion-select-option value=\"city6\">City 6</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\">\r\n    <ion-item>\r\n      <ion-label>I agree with <a href=\"\">terms and conditions</a></ion-label>\r\n      <ion-checkbox color=\"dark\" checked=\"false\" slot=\"start\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\" class=\"is-list-buttons ion-padding ion-no-margin\">\r\n    <ion-item color=\"light\" button detail=\"true\">\r\n      Sign Up\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/signup-alt/signup-alt.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/signup-alt/signup-alt.module.ts ***!
    \*************************************************/

  /*! exports provided: SignupAltPageModule */

  /***/
  function srcAppSignupAltSignupAltModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupAltPageModule", function () {
      return SignupAltPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _signup_alt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup-alt.page */
    "./src/app/signup-alt/signup-alt.page.ts");

    var routes = [{
      path: '',
      component: _signup_alt_page__WEBPACK_IMPORTED_MODULE_6__["SignupAltPage"]
    }];

    var SignupAltPageModule = function SignupAltPageModule() {
      _classCallCheck(this, SignupAltPageModule);
    };

    SignupAltPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_signup_alt_page__WEBPACK_IMPORTED_MODULE_6__["SignupAltPage"]]
    })], SignupAltPageModule);
    /***/
  },

  /***/
  "./src/app/signup-alt/signup-alt.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/signup-alt/signup-alt.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupAltSignupAltPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC1hbHQvc2lnbnVwLWFsdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/signup-alt/signup-alt.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/signup-alt/signup-alt.page.ts ***!
    \***********************************************/

  /*! exports provided: SignupAltPage */

  /***/
  function srcAppSignupAltSignupAltPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupAltPage", function () {
      return SignupAltPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SignupAltPage = /*#__PURE__*/function () {
      function SignupAltPage() {
        _classCallCheck(this, SignupAltPage);
      }

      _createClass(SignupAltPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupAltPage;
    }();

    SignupAltPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-alt',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup-alt.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup-alt/signup-alt.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup-alt.page.scss */
      "./src/app/signup-alt/signup-alt.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SignupAltPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-alt-signup-alt-module-es5.js.map