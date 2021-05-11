function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-alt-walkthrough-alt-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough-alt/walkthrough-alt.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough-alt/walkthrough-alt.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWalkthroughAltWalkthroughAltPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Walkthrough Alternative</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide class=\"ion-padding-top\">\r\n      <img *ngIf=\"env.theme == 'dark'\" src=\"assets/imgs/walkthrough-alt-dark.png\"/>\r\n      <img *ngIf=\"env.theme == 'light'\" src=\"assets/imgs/walkthrough-alt-light.png\"/>\r\n    </ion-slide>\r\n    <ion-slide class=\"ion-padding-top\">\r\n      <img *ngIf=\"env.theme == 'dark'\" src=\"assets/imgs/walkthrough-alt-2-dark.png\"/>\r\n      <img *ngIf=\"env.theme == 'light'\" src=\"assets/imgs/walkthrough-alt-2-light.png\"/>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <div class=\"ion-padding\">\r\n    <h1 class=\"ion-padding-top\">Charts Helps You Get Full Information</h1>\r\n\r\n    <p>\r\n      Research in advertising is done in order to produce better advertisements that are more efficient in motivating.\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/walkthrough-alt/walkthrough-alt.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/walkthrough-alt/walkthrough-alt.module.ts ***!
    \***********************************************************/

  /*! exports provided: WalkthroughAltPageModule */

  /***/
  function srcAppWalkthroughAltWalkthroughAltModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughAltPageModule", function () {
      return WalkthroughAltPageModule;
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


    var _walkthrough_alt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./walkthrough-alt.page */
    "./src/app/walkthrough-alt/walkthrough-alt.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_alt_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughAltPage"]
    }];

    var WalkthroughAltPageModule = function WalkthroughAltPageModule() {
      _classCallCheck(this, WalkthroughAltPageModule);
    };

    WalkthroughAltPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_walkthrough_alt_page__WEBPACK_IMPORTED_MODULE_6__["WalkthroughAltPage"]]
    })], WalkthroughAltPageModule);
    /***/
  },

  /***/
  "./src/app/walkthrough-alt/walkthrough-alt.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/walkthrough-alt/walkthrough-alt.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughAltWalkthroughAltPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGt0aHJvdWdoLWFsdC93YWxrdGhyb3VnaC1hbHQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/walkthrough-alt/walkthrough-alt.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/walkthrough-alt/walkthrough-alt.page.ts ***!
    \*********************************************************/

  /*! exports provided: WalkthroughAltPage */

  /***/
  function srcAppWalkthroughAltWalkthroughAltPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughAltPage", function () {
      return WalkthroughAltPage;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var WalkthroughAltPage = /*#__PURE__*/function () {
      function WalkthroughAltPage() {
        _classCallCheck(this, WalkthroughAltPage);

        this.slideOpts = {
          autoplay: false
        };
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
      }

      _createClass(WalkthroughAltPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WalkthroughAltPage;
    }();

    WalkthroughAltPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-walkthrough-alt',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./walkthrough-alt.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough-alt/walkthrough-alt.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./walkthrough-alt.page.scss */
      "./src/app/walkthrough-alt/walkthrough-alt.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], WalkthroughAltPage);
    /***/
  }
}]);
//# sourceMappingURL=walkthrough-alt-walkthrough-alt-module-es5.js.map