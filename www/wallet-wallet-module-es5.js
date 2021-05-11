function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Wallet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row class=\"is-grid-title ion-text-center\">\r\n      <ion-col class=\"is-tile\">\r\n        Today, Friday, October 7\r\n        <ion-icon class=\"ion-float-right\" name=\"calendar\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"ion-text-center\">\r\n    <p>Your Balance</p>\r\n    <h1>$4 800</h1>\r\n  </div>\r\n\r\n  <div>\r\n    <canvas baseChart\r\n      [datasets]=\"lineChartData\"\r\n      [labels]=\"lineChartLabels\"\r\n      [options]=\"lineChartOptions\"\r\n      [colors]=\"lineChartColors\"\r\n      [legend]=\"lineChartLegend\"\r\n      [chartType]=\"lineChartType\"\r\n      (chartHover)=\"chartHovered($event)\"\r\n      (chartClick)=\"chartClicked($event)\">\r\n    </canvas>\r\n  </div>\r\n\r\n  <table class=\"table table-responsive table-condensed\">\r\n    <tr>\r\n      <th *ngFor=\"let label of lineChartLabels\"></th>\r\n    </tr>\r\n    <tr *ngFor=\"let d of lineChartData\">\r\n      <td *ngFor=\"let label of lineChartLabels; let j=index\"></td>\r\n    </tr>\r\n  </table>\r\n\r\n  <ion-list lines=\"none\" class=\"is-list-colored\">\r\n    <ion-item class=\"is-item-category-success\">\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail\">\r\n        <ion-icon name=\"arrow-down\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Thomas Myers</h2>\r\n        <p>04:19 PM • September 12, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>+ $1800</h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-category-danger\">\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail\">\r\n        <ion-icon name=\"arrow-up\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Playstation Network</h2>\r\n        <p>01:24 PM • September 12, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>- $12</h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-category-success\">\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail\">\r\n        <ion-icon name=\"arrow-down\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Gumroad Inc.</h2>\r\n        <p>08:40 PM • September 12, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>+ $240</h3>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/wallet/wallet.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/wallet/wallet.module.ts ***!
    \*****************************************/

  /*! exports provided: WalletPageModule */

  /***/
  function srcAppWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
      return WalletPageModule;
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


    var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-charts */
    "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
    /* harmony import */


    var _node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../node_modules/chart.js/dist/Chart.bundle.min.js */
    "./node_modules/chart.js/dist/Chart.bundle.min.js");
    /* harmony import */


    var _node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _wallet_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./wallet.page */
    "./src/app/wallet/wallet.page.ts");

    var routes = [{
      path: '',
      component: _wallet_page__WEBPACK_IMPORTED_MODULE_8__["WalletPage"]
    }];

    var WalletPageModule = function WalletPageModule() {
      _classCallCheck(this, WalletPageModule);
    };

    WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]],
      declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_8__["WalletPage"]]
    })], WalletPageModule);
    /***/
  },

  /***/
  "./src/app/wallet/wallet.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/wallet/wallet.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-list-colored h3 {\n  margin-top: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC93YWxsZXQvd2FsbGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtbGlzdC1jb2xvcmVkIGgzIHtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG59XHJcbiIsIi5pcy1saXN0LWNvbG9yZWQgaDMge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/wallet/wallet.page.ts":
  /*!***************************************!*\
    !*** ./src/app/wallet/wallet.page.ts ***!
    \***************************************/

  /*! exports provided: WalletPage */

  /***/
  function srcAppWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
      return WalletPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WalletPage = /*#__PURE__*/function () {
      function WalletPage() {
        _classCallCheck(this, WalletPage);

        this.lineChartData = [{
          data: [1800, -12, 240, 81, 56, 55, 40],
          label: 'Income/Expense'
        }];
        this.lineChartLabels = ['Sep 12', 'Sep 12', 'Sep 12', 'Sep 13', 'Sep 15', 'Oct 2', 'Oct 3'];
        this.lineChartOptions = {
          animation: false,
          responsive: true,
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: false
            }]
          }
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(255,255,255,0)',
          borderColor: 'rgba(119,214,236,1)',
          pointBackgroundColor: 'rgba(255,255,255,1)',
          pointBorderColor: '#61CFE9',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(0,0,0,1)'
        }];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
      }

      _createClass(WalletPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {} // events

      }, {
        key: "chartClicked",
        value: function chartClicked(e) {
          console.log(e);
        }
      }, {
        key: "chartHovered",
        value: function chartHovered(e) {
          console.log(e);
        }
      }]);

      return WalletPage;
    }();

    WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wallet',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./wallet.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./wallet.page.scss */
      "./src/app/wallet/wallet.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], WalletPage);
    /***/
  }
}]);
//# sourceMappingURL=wallet-wallet-module-es5.js.map