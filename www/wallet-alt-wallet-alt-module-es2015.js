(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-alt-wallet-alt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet-alt/wallet-alt.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet-alt/wallet-alt.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Wallet Alternative</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row class=\"ion-padding\">\r\n      <ion-col size=\"5\">\r\n        <h3>\r\n          <span>Balance</span>\r\n          $2 389\r\n        </h3>\r\n      </ion-col>\r\n      <ion-col size=\"7\" class=\"ion-no-padding\">\r\n        <ion-row>\r\n          <h3>Income<span class=\"is-color-success ion-float-right\">+$5 600</span></h3>\r\n        </ion-row>\r\n        <ion-row>\r\n          <h3>Expense<span class=\"is-color-danger ion-float-right\">-$3 900</span></h3>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div>\r\n    <canvas baseChart\r\n      [datasets]=\"lineChartData\"\r\n      [labels]=\"lineChartLabels\"\r\n      [options]=\"lineChartOptions\"\r\n      [colors]=\"lineChartColors\"\r\n      [legend]=\"lineChartLegend\"\r\n      [chartType]=\"lineChartType\"\r\n      (chartHover)=\"chartHovered($event)\"\r\n      (chartClick)=\"chartClicked($event)\">\r\n    </canvas>\r\n  </div>\r\n\r\n  <table class=\"table table-responsive table-condensed\">\r\n    <tr>\r\n      <th *ngFor=\"let label of lineChartLabels\"></th>\r\n    </tr>\r\n    <tr *ngFor=\"let d of lineChartData\">\r\n      <td *ngFor=\"let label of lineChartLabels; let j=index\"></td>\r\n    </tr>\r\n  </table>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>Today</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-note>Food • 09:02 PM</ion-note>\r\n        <div class=\"is-title-with-info\">\r\n          <h2>Espresso & Iced Coffee with Milk</h2>\r\n          <h3 class=\"is-color-danger\">- $12</h3>\r\n        </div>\r\n        <ion-button fill=\"outline\" shape=\"round\">Starbucks</ion-button>\r\n        <ion-button fill=\"outline\" shape=\"round\">Coffee</ion-button>\r\n        <ion-button fill=\"outline\" shape=\"round\">Milk</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>Yesterday</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-note>Work • 06:34 PM </ion-note>\r\n        <div class=\"is-title-with-info\">\r\n          <h2>Payment for Ecommerce Project</h2>\r\n          <h3 class=\"is-color-success\">+ $1850</h3>\r\n        </div>\r\n        <ion-button fill=\"outline\" shape=\"round\">App</ion-button>\r\n        <ion-button fill=\"outline\" shape=\"round\">Ecommerce</ion-button>\r\n        <ion-button fill=\"outline\" shape=\"round\">Web Design</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        <ion-note>Food • 09:02 PM</ion-note>\r\n        <div class=\"is-title-with-info\">\r\n          <h2>Espresso & Iced Coffee with Milk</h2>\r\n          <h3 class=\"is-color-danger\">- $12</h3>\r\n        </div>\r\n        <ion-button fill=\"outline\" shape=\"round\">Starbucks</ion-button>\r\n        <ion-button fill=\"outline\" shape=\"round\">Coffee</ion-button>\r\n        <ion-button fill=\"outline\" shape=\"round\">Milk</ion-button>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/wallet-alt/wallet-alt.module.ts":
/*!*************************************************!*\
  !*** ./src/app/wallet-alt/wallet-alt.module.ts ***!
  \*************************************************/
/*! exports provided: WalletAltPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletAltPageModule", function() { return WalletAltPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/chart.js/dist/Chart.bundle.min.js */ "./node_modules/chart.js/dist/Chart.bundle.min.js");
/* harmony import */ var _node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wallet_alt_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wallet-alt.page */ "./src/app/wallet-alt/wallet-alt.page.ts");









const routes = [
    {
        path: '',
        component: _wallet_alt_page__WEBPACK_IMPORTED_MODULE_8__["WalletAltPage"]
    }
];
let WalletAltPageModule = class WalletAltPageModule {
};
WalletAltPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]
        ],
        declarations: [_wallet_alt_page__WEBPACK_IMPORTED_MODULE_8__["WalletAltPage"]]
    })
], WalletAltPageModule);



/***/ }),

/***/ "./src/app/wallet-alt/wallet-alt.page.scss":
/*!*************************************************!*\
  !*** ./src/app/wallet-alt/wallet-alt.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dhbGxldC1hbHQvd2FsbGV0LWFsdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/wallet-alt/wallet-alt.page.ts":
/*!***********************************************!*\
  !*** ./src/app/wallet-alt/wallet-alt.page.ts ***!
  \***********************************************/
/*! exports provided: WalletAltPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletAltPage", function() { return WalletAltPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WalletAltPage = class WalletAltPage {
    constructor() {
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Income' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Expense' }
        ];
        this.lineChartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        this.lineChartOptions = {
            animation: false,
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(255,255,255,0)',
                borderColor: 'rgba(151,198,107,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#97C66B',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,0,0,1)'
            },
            {
                backgroundColor: 'rgba(255,255,255,0)',
                borderColor: 'rgba(255,120,141,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#FF788D',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(0,0,0,1)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    ngOnInit() {
    }
    // events
    chartClicked(e) {
        console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
};
WalletAltPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wallet-alt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./wallet-alt.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet-alt/wallet-alt.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./wallet-alt.page.scss */ "./src/app/wallet-alt/wallet-alt.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WalletAltPage);



/***/ })

}]);
//# sourceMappingURL=wallet-alt-wallet-alt-module-es2015.js.map