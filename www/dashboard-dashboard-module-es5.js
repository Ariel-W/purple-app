function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>My Green Dashboard</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding ion-text-left is-hero\">\r\n    <h1 class=\"ion-no-margin\">Hi Elor, You've got new challenges!</h1>\r\n  </div>\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row class=\"ion-padding\">\r\n      <ion-col size=\"5\">\r\n        <h3>\r\n          <span>Green Points</span>\r\n          3,642\r\n        </h3>\r\n      </ion-col>\r\n      <ion-col size=\"7\" class=\"ion-no-padding\">\r\n        <ion-row>\r\n          <h3>-> V-Bucks<span class=\"ion-float-right\">235</span></h3>\r\n        </ion-row>\r\n        <ion-row>\r\n          <h3>-> Coins<span class=\"ion-float-right\">357</span></h3>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list class=\"ion-padding is-list-colored\">\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Recycle</h2>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <h3 class=\"ion-no-margin\">7 Bottles</h3>\r\n      </div>\r\n      <div slot=\"end\">\r\n        <h2 class=\"ion-no-margin\">1,400 GP</h2>\r\n      </div>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n          <ion-icon ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Recycle</h2>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <h3 class=\"ion-no-margin\">12 Containers</h3>\r\n      </div>\r\n      <div slot=\"end\">\r\n        <h2 class=\"ion-no-margin\">820 GP</h2>\r\n      </div>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n          <ion-icon ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <h2>Save Water</h2>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <h3 class=\"ion-no-margin\">3 Weeks</h3>\r\n      </div>\r\n      <div slot=\"end\">\r\n        <h2 class=\"ion-no-margin\">600 GP</h2>\r\n      </div>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n          <ion-icon ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div>\r\n    <canvas\r\n      baseChart\r\n      [datasets]=\"lineChartData\"\r\n      [labels]=\"lineChartLabels\"\r\n      [options]=\"lineChartOptions\"\r\n      [colors]=\"lineChartColors\"\r\n      [legend]=\"lineChartLegend\"\r\n      [chartType]=\"lineChartType\"\r\n      (chartHover)=\"chartHovered($event)\"\r\n      (chartClick)=\"chartClicked($event)\"\r\n    ></canvas>\r\n  </div>\r\n\r\n  <table class=\"table table-responsive table-condensed\">\r\n    <tr>\r\n      <th *ngFor=\"let label of lineChartLabels\"></th>\r\n    </tr>\r\n    <tr *ngFor=\"let d of lineChartData\">\r\n      <td *ngFor=\"let label of lineChartLabels; let j=index\"></td>\r\n    </tr>\r\n  </table>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardPageModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function () {
      return DashboardPageModule;
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


    var _dashboard_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./dashboard.page */
    "./src/app/dashboard/dashboard.page.ts");

    var routes = [{
      path: '',
      component: _dashboard_page__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"]
    }];

    var DashboardPageModule = function DashboardPageModule() {
      _classCallCheck(this, DashboardPageModule);
    };

    DashboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]],
      declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_8__["DashboardPage"]]
    })], DashboardPageModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/dashboard.page.ts ***!
    \*********************************************/

  /*! exports provided: DashboardPage */

  /***/
  function srcAppDashboardDashboardPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardPage", function () {
      return DashboardPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DashboardPage = /*#__PURE__*/function () {
      function DashboardPage() {
        _classCallCheck(this, DashboardPage);

        this.lineChartData = [{
          data: [1065, 1059, 480, 881, 656, 955, 1444],
          label: 'Recycle - Bottles'
        }, {
          data: [1028, 648, 1040, 1742, 686, 1027, 1091],
          label: 'Recycle - Containers'
        }, {
          data: [18, 48, 77, 99, 100, 456, 340],
          label: 'Save Water'
        }];
        this.lineChartLabels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        this.lineChartOptions = {
          animation: false,
          responsive: true
        };
        this.lineChartColors = [{
          backgroundColor: 'rgba(97,207,233,0.5)',
          borderColor: 'rgba(97,207,233,1)',
          pointBackgroundColor: 'rgba(255,255,255,1)',
          pointBorderColor: '#61CFE9'
        }, {
          backgroundColor: 'rgba(151,198,107,0.5)',
          borderColor: 'rgba(151,198,107,1)',
          pointBackgroundColor: 'rgba(255,255,255,1)',
          pointBorderColor: '#97C66B'
        }, {
          backgroundColor: 'rgba(255,221,125,0.5)',
          borderColor: 'rgba(255,221,125,1)',
          pointBackgroundColor: 'rgba(255,255,255,1)',
          pointBorderColor: '#FFDD7D'
        }];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
      }

      _createClass(DashboardPage, [{
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

      return DashboardPage;
    }();

    DashboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.page.scss */
      "./src/app/dashboard/dashboard.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DashboardPage);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map