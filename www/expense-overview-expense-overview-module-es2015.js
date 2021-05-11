(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-overview-expense-overview-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/expense-overview/expense-overview.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense-overview/expense-overview.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Expense Overview</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"7\" class=\"ion-no-padding\">\r\n        <ion-list class=\"ion-padding ion-no-margin\">\r\n          <ion-list-header>\r\n            <ion-label>Choose Date: From</ion-label>\r\n          </ion-list-header>\r\n          <ion-item>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n            <ion-label>\r\n              <h2>April 20, 2017</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-list class=\"ion-padding ion-no-margin\">\r\n          <ion-list-header>\r\n            <ion-label>Choose Date: To</ion-label>\r\n          </ion-list-header>\r\n          <ion-item>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n            <ion-label>\r\n              <h2>Today</h2>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n        <ion-grid class=\"is-grid is-grid-tiles ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col size=\"6\" class=\"is-tile\">\r\n              <h3>\r\n                <span>Total Expense</span>\r\n                $1 630\r\n              </h3>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-col>\r\n      <ion-col size=\"5\" class=\"ion-no-padding\">\r\n        <canvas baseChart style=\"height: 100%; width: 100%; padding-top: 16px; padding-bottom:16px;\"\r\n          [data]=\"doughnutChartData\"\r\n          [labels]=\"doughnutChartLabels\"\r\n          [chartType]=\"doughnutChartType\"\r\n          [options]=\"doughnutChartOptions\"\r\n          [colors]=\"doughnutChartColors\"\r\n          [legend]=\"doughnutChartLegend\"\r\n          (chartHover)=\"chartHovered($event)\"\r\n          (chartClick)=\"chartClicked($event)\">\r\n        </canvas>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-item-group class=\"is-collapsible-list-with-divider\" *ngFor=\"let item of items; let i = index\">\r\n    <ion-item-divider>\r\n      <ion-label>\r\n        <ion-col size=\"8\" class=\"ion-no-padding\">\r\n          <h2 (click)=\"itemTapped(i)\">{{item.divider.title}}<ion-icon name=\"arrow-down\" *ngIf=\"!isShown[i]\"></ion-icon><ion-icon name=\"arrow-up\" *ngIf=\"isShown[i]\"></ion-icon></h2>\r\n        </ion-col>\r\n      </ion-label>\r\n      <ion-col size=\"4\" slot=\"end\" class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-justify-content-between\"><span>{{item.divider.percentage}}</span><span>{{item.divider.amount}}</span></ion-row>\r\n      </ion-col>\r\n    </ion-item-divider>\r\n    <ion-item [class.is-hide]=\"!isShown[i] || false\" *ngFor=\"let subitem of item.subitems\">\r\n      <ion-label>\r\n        <h2>{{subitem.title}}</h2>\r\n        <p>{{subitem.description}}</p>\r\n      </ion-label>\r\n      <ion-note class=\"ion-align-self-start\" slot=\"end\">{{subitem.amount}}</ion-note>\r\n    </ion-item>\r\n  </ion-item-group>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/expense-overview/expense-overview.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/expense-overview/expense-overview.module.ts ***!
  \*************************************************************/
/*! exports provided: ExpenseOverviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseOverviewPageModule", function() { return ExpenseOverviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ "./node_modules/ng2-charts/__ivy_ngcc__/fesm2015/ng2-charts.js");
/* harmony import */ var _node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/chart.js/dist/Chart.bundle.min.js */ "./node_modules/chart.js/dist/Chart.bundle.min.js");
/* harmony import */ var _node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_chart_js_dist_Chart_bundle_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _expense_overview_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expense-overview.page */ "./src/app/expense-overview/expense-overview.page.ts");









const routes = [
    {
        path: '',
        component: _expense_overview_page__WEBPACK_IMPORTED_MODULE_8__["ExpenseOverviewPage"]
    }
];
let ExpenseOverviewPageModule = class ExpenseOverviewPageModule {
};
ExpenseOverviewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ng2_charts__WEBPACK_IMPORTED_MODULE_6__["ChartsModule"]
        ],
        declarations: [_expense_overview_page__WEBPACK_IMPORTED_MODULE_8__["ExpenseOverviewPage"]]
    })
], ExpenseOverviewPageModule);



/***/ }),

/***/ "./src/app/expense-overview/expense-overview.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/expense-overview/expense-overview.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header.ios ion-label {\n  font-size: 0.8rem;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9leHBlbnNlLW92ZXJ2aWV3L2V4cGVuc2Utb3ZlcnZpZXcucGFnZS5zY3NzIiwic3JjL2FwcC9leHBlbnNlLW92ZXJ2aWV3L2V4cGVuc2Utb3ZlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQUE7RUFDQSxtQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvZXhwZW5zZS1vdmVydmlldy9leHBlbnNlLW92ZXJ2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0LWhlYWRlci5pb3MgaW9uLWxhYmVsIHtcclxuXHRmb250LXNpemU6IDAuOHJlbTtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiIsImlvbi1saXN0LWhlYWRlci5pb3MgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/expense-overview/expense-overview.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/expense-overview/expense-overview.page.ts ***!
  \***********************************************************/
/*! exports provided: ExpenseOverviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseOverviewPage", function() { return ExpenseOverviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ExpenseOverviewPage = class ExpenseOverviewPage {
    constructor() {
        this.isShown = [];
        this.doughnutChartLabels = ['Food', 'Electronics', 'Movies', 'Games'];
        this.doughnutChartData = [570.05, 480.90, 163, 400.75];
        this.doughnutChartType = 'doughnut';
        this.doughnutChartOptions = {
            circumference: Math.PI,
            rotation: 0.5 * Math.PI,
            responsive: true,
            maintainAspectRatio: false
        };
        this.doughnutChartColors = [
            {
                backgroundColor: [
                    'rgba(151,198,107,1)',
                    'rgba(255,221,125,1)',
                    'rgba(97,207,233,1)',
                    'rgba(255,137,192,1)'
                ]
            }
        ];
        this.doughnutChartLegend = false;
        this.items = [
            {
                divider: {
                    title: 'Movies',
                    percentage: '10%',
                    amount: '$16'
                },
                subitems: [
                    {
                        title: 'The Perfect Movie 3D',
                        description: '02:11 PM  •  April 4, 2017',
                        amount: '$16'
                    }
                ]
            },
            {
                divider: {
                    title: 'Electronics',
                    percentage: '30%',
                    amount: '$480.90'
                },
                subitems: [
                    {
                        title: 'Apple Earpods',
                        description: '02:11 PM  •  April 4, 2017',
                        amount: '$360'
                    },
                    {
                        title: 'Duracell Batteries AAA, 6 pcs ',
                        description: '03:56 PM  •  April 4, 2017',
                        amount: '$120.90'
                    }
                ]
            }
        ];
        this.isShown[0] = true;
    }
    ngOnInit() {
    }
    itemTapped(index) {
        this.isShown[index] = !this.isShown[index];
    }
    // events
    chartClicked(e) {
        console.log(e);
    }
    chartHovered(e) {
        console.log(e);
    }
};
ExpenseOverviewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-expense-overview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./expense-overview.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/expense-overview/expense-overview.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./expense-overview.page.scss */ "./src/app/expense-overview/expense-overview.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ExpenseOverviewPage);



/***/ })

}]);
//# sourceMappingURL=expense-overview-expense-overview-module-es2015.js.map