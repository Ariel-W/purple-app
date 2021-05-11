function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Sign Up</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Phone\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-hint\">\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <p>Your phone number is used to verify the account. Check your phone to get a verification code which will be valid for 3 hours.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"password\" placeholder=\"Password\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"password\" placeholder=\"Repeat Password\"></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-item>\r\n      <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n      <ion-label>Birthday</ion-label>\r\n      <ion-datetime displayFormat=\"MMM DD, YYYY\" min=\"1940-01-01\" max=\"2017-12-31\"></ion-datetime>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-list-header>\r\n      <ion-label>Action</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Country</ion-label>\r\n      <ion-select interface=\"popover\" value=\"unitedkingdom\">\r\n        <ion-select-option value=\"unitedkingdom\">United Kingdom</ion-select-option>\r\n        <ion-select-option value=\"canada\">Canada</ion-select-option>\r\n        <ion-select-option value=\"france\">France</ion-select-option>\r\n        <ion-select-option value=\"genesis\">Italy</ion-select-option>\r\n        <ion-select-option value=\"greece\">Greece</ion-select-option>\r\n        <ion-select-option value=\"spain\">Spain</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>City</ion-label>\r\n      <ion-select interface=\"popover\" value=\"city1\">\r\n        <ion-select-option value=\"city1\">City 1</ion-select-option>\r\n        <ion-select-option value=\"city2\">City 2</ion-select-option>\r\n        <ion-select-option value=\"city3\">City 3</ion-select-option>\r\n        <ion-select-option value=\"city4\">City 4</ion-select-option>\r\n        <ion-select-option value=\"city5\">City 5</ion-select-option>\r\n        <ion-select-option value=\"city6\">City 6</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\">\r\n    <ion-item>\r\n      <ion-label>I agree with <a href=\"\">terms and conditions</a></ion-label>\r\n      <ion-checkbox color=\"dark\" checked=\"false\" slot=\"start\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\" class=\"ion-padding ion-no-margin is-list-buttons\">\r\n    <ion-item color=\"light\" button detail=\"true\">\r\n      Sign Up\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/signup/signup.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.module.ts ***!
    \*****************************************/

  /*! exports provided: SignupPageModule */

  /***/
  function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
      return SignupPageModule;
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


    var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signup.page */
    "./src/app/signup/signup.page.ts");

    var routes = [{
      path: '',
      component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }];

    var SignupPageModule = function SignupPageModule() {
      _classCallCheck(this, SignupPageModule);
    };

    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })], SignupPageModule);
    /***/
  },

  /***/
  "./src/app/signup/signup.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/signup/signup.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/signup/signup.page.ts":
  /*!***************************************!*\
    !*** ./src/app/signup/signup.page.ts ***!
    \***************************************/

  /*! exports provided: SignupPage */

  /***/
  function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
      return SignupPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SignupPage = /*#__PURE__*/function () {
      function SignupPage() {
        _classCallCheck(this, SignupPage);
      }

      _createClass(SignupPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SignupPage;
    }();

    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signup.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signup.page.scss */
      "./src/app/signup/signup.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SignupPage);
    /***/
  }
}]);
//# sourceMappingURL=signup-signup-module-es5.js.map