function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-slider-walkthrough-slider-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough-slider/walkthrough-slider.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough-slider/walkthrough-slider.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWalkthroughSliderWalkthroughSliderPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"is-slider-page-toolbar\">\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"skip()\" color=\"primary\">Skip</ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\" class=\"is-slider-page\">\r\n    <ion-slide class=\"ion-justify-content-start\">\r\n      <img *ngIf=\"env.theme == 'dark'\" src=\"assets/imgs/walkthrough-alt-dark.png\"/>\r\n      <img *ngIf=\"env.theme == 'light'\" src=\"assets/imgs/walkthrough-alt-light.png\"/>\r\n      <ion-grid>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <h1 class=\"ion-padding-top\">Charts Helps You Get Full Information</h1>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <p>\r\n            Research in advertising is done in order to produce better advertisements that are more efficient in motivating.\r\n          </p>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n    <ion-slide class=\"ion-justify-content-start\">\r\n      <img *ngIf=\"env.theme == 'dark'\" src=\"assets/imgs/walkthrough-alt-2-dark.png\"/>\r\n      <img *ngIf=\"env.theme == 'light'\" src=\"assets/imgs/walkthrough-alt-2-light.png\"/>\r\n      <ion-grid class=\"ion-align-self-start\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <h1 class=\"ion-padding-top\">Statistics For Your Payments</h1>\r\n        </ion-row>\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <p>\r\n            Payments statistics provide information on the access to and use of different payment services.\r\n          </p>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-slide>\r\n  </ion-slides>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/walkthrough-slider/walkthrough-slider.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/walkthrough-slider/walkthrough-slider.module.ts ***!
    \*****************************************************************/

  /*! exports provided: WalkthroughSliderPageModule */

  /***/
  function srcAppWalkthroughSliderWalkthroughSliderModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughSliderPageModule", function () {
      return WalkthroughSliderPageModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _walkthrough_slider_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./walkthrough-slider.page */
    "./src/app/walkthrough-slider/walkthrough-slider.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_slider_page__WEBPACK_IMPORTED_MODULE_5__["WalkthroughSliderPage"]
    }];

    var WalkthroughSliderPageModule = function WalkthroughSliderPageModule() {
      _classCallCheck(this, WalkthroughSliderPageModule);
    };

    WalkthroughSliderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      declarations: [_walkthrough_slider_page__WEBPACK_IMPORTED_MODULE_5__["WalkthroughSliderPage"]]
    })], WalkthroughSliderPageModule);
    /***/
  },

  /***/
  "./src/app/walkthrough-slider/walkthrough-slider.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/walkthrough-slider/walkthrough-slider.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughSliderWalkthroughSliderPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header ion-toolbar:first-child {\n  --ion-toolbar-border-color: inherit;\n  --border-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC93YWxrdGhyb3VnaC1zbGlkZXIvd2Fsa3Rocm91Z2gtc2xpZGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2Fsa3Rocm91Z2gtc2xpZGVyL3dhbGt0aHJvdWdoLXNsaWRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQ0FBQTtFQUNBLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC1zbGlkZXIvd2Fsa3Rocm91Z2gtc2xpZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xyXG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwcHg7XHJcbn1cclxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xuICAtLWJvcmRlci13aWR0aDogMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/walkthrough-slider/walkthrough-slider.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/walkthrough-slider/walkthrough-slider.page.ts ***!
    \***************************************************************/

  /*! exports provided: WalkthroughSliderPage */

  /***/
  function srcAppWalkthroughSliderWalkthroughSliderPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughSliderPage", function () {
      return WalkthroughSliderPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var WalkthroughSliderPage = /*#__PURE__*/function () {
      function WalkthroughSliderPage(router) {
        _classCallCheck(this, WalkthroughSliderPage);

        this.router = router;
        this.slideOpts = {
          autoplay: true
        };
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
      }

      _createClass(WalkthroughSliderPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "skip",
        value: function skip() {
          this.router.navigate(['/login']);
        }
      }]);

      return WalkthroughSliderPage;
    }();

    WalkthroughSliderPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    WalkthroughSliderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-walkthrough-slider',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./walkthrough-slider.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough-slider/walkthrough-slider.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./walkthrough-slider.page.scss */
      "./src/app/walkthrough-slider/walkthrough-slider.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], WalkthroughSliderPage);
    /***/
  }
}]);
//# sourceMappingURL=walkthrough-slider-walkthrough-slider-module-es5.js.map