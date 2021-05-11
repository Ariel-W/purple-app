function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-wallet-fourth-empty-wallet-fourth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-wallet-fourth/empty-wallet-fourth.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-wallet-fourth/empty-wallet-fourth.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyWalletFourthEmptyWalletFourthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Payment Providers</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content\">\r\n    <h3>No Payment Providers</h3>\r\n    <img src=\"assets/imgs/empty-wallet-4.png\"/>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"center\">\r\n      <ion-fab-button class=\"ion-color ion-color-primary\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-wallet-fourth/empty-wallet-fourth.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/empty-wallet-fourth/empty-wallet-fourth.module.ts ***!
    \*******************************************************************/

  /*! exports provided: EmptyWalletFourthPageModule */

  /***/
  function srcAppEmptyWalletFourthEmptyWalletFourthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyWalletFourthPageModule", function () {
      return EmptyWalletFourthPageModule;
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


    var _empty_wallet_fourth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-wallet-fourth.page */
    "./src/app/empty-wallet-fourth/empty-wallet-fourth.page.ts");

    var routes = [{
      path: '',
      component: _empty_wallet_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyWalletFourthPage"]
    }];

    var EmptyWalletFourthPageModule = function EmptyWalletFourthPageModule() {
      _classCallCheck(this, EmptyWalletFourthPageModule);
    };

    EmptyWalletFourthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_wallet_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyWalletFourthPage"]]
    })], EmptyWalletFourthPageModule);
    /***/
  },

  /***/
  "./src/app/empty-wallet-fourth/empty-wallet-fourth.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/empty-wallet-fourth/empty-wallet-fourth.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyWalletFourthEmptyWalletFourthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content {\n  width: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-top: 12vh;\n}\n.is-empty-state-content h3 {\n  margin-bottom: 1rem;\n  font-weight: 500;\n}\n.is-empty-state-content p {\n  margin-top: 0;\n}\n.is-empty-state-content img {\n  width: 55%;\n  max-width: 370px;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS13YWxsZXQtZm91cnRoL2VtcHR5LXdhbGxldC1mb3VydGgucGFnZS5zY3NzIiwic3JjL2FwcC9lbXB0eS13YWxsZXQtZm91cnRoL2VtcHR5LXdhbGxldC1mb3VydGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtBQ0FKO0FER0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZW1wdHktd2FsbGV0LWZvdXJ0aC9lbXB0eS13YWxsZXQtZm91cnRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICBwYWRkaW5nLXRvcDogMTJ2aDtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIG1heC13aWR0aDogMzcwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxufVxyXG4iLCIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgcGFkZGluZy10b3A6IDEydmg7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBwIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IGltZyB7XG4gIHdpZHRoOiA1NSU7XG4gIG1heC13aWR0aDogMzcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/empty-wallet-fourth/empty-wallet-fourth.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/empty-wallet-fourth/empty-wallet-fourth.page.ts ***!
    \*****************************************************************/

  /*! exports provided: EmptyWalletFourthPage */

  /***/
  function srcAppEmptyWalletFourthEmptyWalletFourthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyWalletFourthPage", function () {
      return EmptyWalletFourthPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmptyWalletFourthPage = /*#__PURE__*/function () {
      function EmptyWalletFourthPage() {
        _classCallCheck(this, EmptyWalletFourthPage);
      }

      _createClass(EmptyWalletFourthPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyWalletFourthPage;
    }();

    EmptyWalletFourthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-wallet-fourth',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-wallet-fourth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-wallet-fourth/empty-wallet-fourth.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-wallet-fourth.page.scss */
      "./src/app/empty-wallet-fourth/empty-wallet-fourth.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyWalletFourthPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-wallet-fourth-empty-wallet-fourth-module-es5.js.map