(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["day-overview-day-overview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/day-overview/day-overview.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/day-overview/day-overview.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Day Overview</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row class=\"is-grid-title ion-text-center\">\r\n      <ion-col class=\"is-tile\">\r\n        Wednesday, September 12\r\n        <ion-icon class=\"ion-float-right\" name=\"calendar\"></ion-icon>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"is-tile\">\r\n        <h3>\r\n          <span>Total Views</span>\r\n          8 165\r\n        </h3>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"is-tile\">\r\n        <h3>\r\n          <span>Total Likes</span>\r\n          727\r\n        </h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"ion-padding\">\r\n    <canvas baseChart [datasets]=\"radarChartData\" [labels]=\"radarChartLabels\" [chartType]=\"radarChartType\" [colors]=\"radarChartColors\" [legend]=\"radarChartLegend\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\r\n  </div>\r\n\r\n  <ion-list class=\"is-list-colored\">\r\n    <ion-item routerLink=\"/dayOverview\" detail=\"false\" class=\"is-item-category-success\">\r\n      <ion-label>\r\n        <h2>Aware mobile</h2>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <h3 class=\"ion-no-margin\">3490 views</h3>\r\n      </div>\r\n      <div slot=\"end\">\r\n        <h2 class=\"ion-no-margin\">315 likes</h2>\r\n      </div>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/dayOverview\" detail=\"false\" class=\"is-item-category-secondary\">\r\n      <ion-label>\r\n        <h2>Sked mobile</h2>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <h3 class=\"ion-no-margin\">4675 views</h3>\r\n      </div>\r\n      <div slot=\"end\">\r\n        <h2 class=\"ion-no-margin\">412 likes</h2>\r\n      </div>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n          <ion-icon name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/day-overview/day-overview.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/day-overview/day-overview.module.ts ***!
  \*****************************************************/
/*! exports provided: DayOverviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayOverviewPageModule", function() { return DayOverviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/chart.js/dist/Chart.bundle.min.js */ "./node_modules/chart.js/dist/Chart.bundle.min.js");
/* harmony import */ var _node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _day_overview_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./day-overview.page */ "./src/app/day-overview/day-overview.page.ts");









const routes = [
    {
        path: '',
        component: _day_overview_page__WEBPACK_IMPORTED_MODULE_8__["DayOverviewPage"]
    }
];
let DayOverviewPageModule = class DayOverviewPageModule {
};
DayOverviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]
        ],
        declarations: [_day_overview_page__WEBPACK_IMPORTED_MODULE_8__["DayOverviewPage"]]
    })
], DayOverviewPageModule);



/***/ }),

/***/ "./src/app/day-overview/day-overview.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/day-overview/day-overview.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RheS1vdmVydmlldy9kYXktb3ZlcnZpZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/day-overview/day-overview.page.ts":
/*!***************************************************!*\
  !*** ./src/app/day-overview/day-overview.page.ts ***!
  \***************************************************/
/*! exports provided: DayOverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayOverviewPage", function() { return DayOverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DayOverviewPage = class DayOverviewPage {
    constructor() {
        this.radarChartLabels = ['24:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00'];
        this.radarChartData = [
            { data: [65, 79, 90, 181, 255, 266, 289, 315], label: 'Aware mobile' },
            { data: [28, 48, 50, 119, 296, 327, 390, 412], label: 'Sked mobile' }
        ];
        this.radarChartType = 'radar';
        this.radarChartColors = [
            {
                backgroundColor: 'rgba(151,198,107,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#97C66B'
            },
            {
                backgroundColor: 'rgba(255,137,192,1)',
                pointBackgroundColor: 'rgba(255,255,255,1)',
                pointBorderColor: '#FF89C0'
            }
        ];
        this.radarChartLegend = false;
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
DayOverviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-day-overview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./day-overview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/day-overview/day-overview.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./day-overview.page.scss */ "./src/app/day-overview/day-overview.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DayOverviewPage);



/***/ })

}]);
//# sourceMappingURL=day-overview-day-overview-module-es2015.js.map