function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alternative-profile-alternative-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alternative-profile/alternative-profile.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alternative-profile/alternative-profile.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlternativeProfileAlternativeProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Profile Setting Alternative</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-margin is-profile-picture\">\r\n\t\t<img src=\"assets/imgs/profile.png\">\r\n    <div>\r\n      <ion-fab slot=\"fixed\">\r\n        <ion-fab-button fill=\"outline\" size=\"small\"><ion-icon name=\"camera\"></ion-icon></ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ion-text-center ion-margin-bottom\">\r\n\t\t<h2 class=\"ion-no-margin\">William Roberson</h2>\r\n\t\t<p class=\"ion-no-margin\">+99893 000 00 00</p>\r\n\t</div>\r\n\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Short bio</ion-label>\r\n    </ion-list-header>\r\n    <p class=\"ion-padding-horizontal\">\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit,\r\n      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\r\n      Ut enim ad minim veniam, quis nostrud exercitation ullamco\r\n      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\r\n      dolor in reprehenderit in voluptate velit esse cillum dolore eu\r\n      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,\r\n      sunt in culpa qui officia deserunt mollit anim id est laborum.\r\n    </p>\r\n\r\n    <!-- <ion-item>\r\n      <ion-avatar item-start class=\"is-icon-avatar is-background-primary\">\r\n        D\r\n      </ion-avatar>\r\n      <ion-label>Dallas</ion-label>\r\n      <ion-radio checked=\"true\" value=\"Dallas\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-avatar item-start class=\"is-icon-avatar is-background-primary\">\r\n        H\r\n      </ion-avatar>\r\n      <ion-label>Huston</ion-label>\r\n      <ion-radio checked=\"false\" value=\"Huston\"></ion-radio>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-avatar item-start class=\"is-icon-avatar is-background-primary\">\r\n        A\r\n      </ion-avatar>\r\n      <ion-label>Austin</ion-label>\r\n      <ion-radio checked=\"false\" value=\"Austin\"></ion-radio>\r\n    </ion-item>-->\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding-top\">\r\n    <ion-list-header>\r\n      <ion-label>Social</ion-label>\r\n    </ion-list-header>\r\n    <ion-item button>\r\n      <ion-label>Facebook</ion-label>\r\n      <ion-icon color=\"is-facebook-icon\" name=\"logo-facebook\" slot=\"start\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-label>Twitter</ion-label>\r\n      <ion-icon color=\"is-twitter-icon\" name=\"logo-twitter\" slot=\"start\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-label>LinkedIn</ion-label>\r\n      <ion-icon color=\"is-linkedin-icon\" name=\"logo-linkedin\" slot=\"start\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding-top\">\r\n    <ion-list-header>\r\n      <ion-label>Help and Support</ion-label>\r\n    </ion-list-header>\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-danger\">\r\n        <ion-icon name=\"alert-circle\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Report a Problem</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-success\">\r\n        <ion-icon name=\"help-buoy\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Help</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-light\">\r\n        <ion-icon name=\"document\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Terms and Conditions</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/alternative-profile/alternative-profile.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/alternative-profile/alternative-profile.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AlternativeProfilePageModule */

  /***/
  function srcAppAlternativeProfileAlternativeProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlternativeProfilePageModule", function () {
      return AlternativeProfilePageModule;
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


    var _alternative_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alternative-profile.page */
    "./src/app/alternative-profile/alternative-profile.page.ts");

    var routes = [{
      path: '',
      component: _alternative_profile_page__WEBPACK_IMPORTED_MODULE_6__["AlternativeProfilePage"]
    }];

    var AlternativeProfilePageModule = function AlternativeProfilePageModule() {
      _classCallCheck(this, AlternativeProfilePageModule);
    };

    AlternativeProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_alternative_profile_page__WEBPACK_IMPORTED_MODULE_6__["AlternativeProfilePage"]]
    })], AlternativeProfilePageModule);
    /***/
  },

  /***/
  "./src/app/alternative-profile/alternative-profile.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/alternative-profile/alternative-profile.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlternativeProfileAlternativeProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsdGVybmF0aXZlLXByb2ZpbGUvYWx0ZXJuYXRpdmUtcHJvZmlsZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/alternative-profile/alternative-profile.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/alternative-profile/alternative-profile.page.ts ***!
    \*****************************************************************/

  /*! exports provided: AlternativeProfilePage */

  /***/
  function srcAppAlternativeProfileAlternativeProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlternativeProfilePage", function () {
      return AlternativeProfilePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AlternativeProfilePage = /*#__PURE__*/function () {
      function AlternativeProfilePage() {
        _classCallCheck(this, AlternativeProfilePage);
      }

      _createClass(AlternativeProfilePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AlternativeProfilePage;
    }();

    AlternativeProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alternative-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./alternative-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alternative-profile/alternative-profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./alternative-profile.page.scss */
      "./src/app/alternative-profile/alternative-profile.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AlternativeProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=alternative-profile-alternative-profile-module-es5.js.map