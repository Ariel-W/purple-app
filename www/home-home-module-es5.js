function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Home\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding ion-text-left is-hero\">\r\n    <h1 class=\"ion-no-margin\">Hello! Log in and Get More Info</h1>\r\n\r\n    <p>\r\n      There is such a lot of talk going around about branding, but what exactly is your brand and how do you use.\r\n    </p>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"is-tile is-tile-colored ion-text-center\">\r\n        <ion-item routerLink=\"/home\" detail=\"false\" lines=\"none\" class=\"ion-text-center ion-no-padding\">\r\n          <ion-label class=\"ion-no-margin\">\r\n            <div class=\"is-background-dark ion-padding\">\r\n              <ion-icon name=\"home\"></ion-icon>\r\n              <h6 class=\"is-tile-text\">\r\n                Mailbox\r\n              </h6>\r\n              <p class=\"is-tile-text\">\r\n                Every large design company whether it’s a multi-national.\r\n              </p>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"is-tile is-tile-colored ion-text-center\">\r\n        <ion-item routerLink=\"/home\" detail=\"false\" lines=\"none\" class=\"ion-text-center ion-no-padding\">\r\n          <ion-label class=\"ion-no-margin\">\r\n            <div class=\"is-background-success ion-padding\">\r\n              <ion-icon name=\"card\"></ion-icon>\r\n              <h6 class=\"is-tile-text\">\r\n                Money\r\n              </h6>\r\n              <p class=\"is-tile-text\">\r\n                Keep track of your expense and income in simple steps.\r\n              </p>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <p class=\"ion-padding-horizontal\">\r\n    Login with\r\n  </p>\r\n\r\n  <ion-list class=\"is-list-buttons ion-padding ion-no-margin\">\r\n    <ion-item button detail=\"false\">\r\n      <ion-icon slot=\"end\" name=\"logo-facebook\" color=\"is-facebook-icon\"></ion-icon>\r\n      <ion-label>Facebook</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"is-list-buttons ion-padding ion-no-margin\">\r\n    <ion-item button detail=\"false\">\r\n      <ion-icon slot=\"end\" name=\"logo-twitter\" color=\"is-twitter-icon\"></ion-icon>\r\n      <ion-label>Twitter</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
      }])],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-ios > .item-block:first-child {\n  border-top: 0px;\n}\n\n.is-tile ion-item {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0Usc0JBQUE7RUFDQSx3QkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWlvcyA+IC5pdGVtLWJsb2NrOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci10b3A6IDBweDtcclxufVxyXG4uaXMtdGlsZSBpb24taXRlbSB7XHJcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XHJcbn1cclxuIiwiLmxpc3QtaW9zID4gLml0ZW0tYmxvY2s6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItdG9wOiAwcHg7XG59XG5cbi5pcy10aWxlIGlvbi1pdGVtIHtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomePage = function HomePage() {
      _classCallCheck(this, HomePage);
    };

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map