(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-history-order-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Order History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>ORDER #123456</ion-label>\r\n      <div slot=\"end\" class=\"ion-padding-horizontal\"><a routerLink=\"/order-history\">Details</a></div>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Status</p>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"is-vertical-align\">\r\n            <ion-icon name=\"timer\" color=\"warning\"></ion-icon>\r\n            <span>During</span>\r\n          </ion-col>\r\n          <ion-col size=\"2\" class=\"ion-text-right\">\r\n            <a routerLink=\"/order-history\">Track</a>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Shipped Date</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <span>01 APR 2019</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Order Amount</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <span>$104.10</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>ORDER #223456</ion-label>\r\n      <div slot=\"end\" class=\"ion-padding-horizontal\"><a routerLink=\"/order-history\">Details</a></div>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Status</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"is-vertical-align\">\r\n            <ion-icon name=\"close-circle-outline\" color=\"danger\"></ion-icon>\r\n            <span>Canceled</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Shipped Date</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <span>04 APR 2016</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Order Amount</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <span>$99.10</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>ORDER #323456</ion-label>\r\n      <div slot=\"end\" class=\"ion-padding-horizontal\"><a routerLink=\"/order-history\">Details</a></div>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row>\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Status</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\" class=\"is-vertical-align\">\r\n            <ion-icon name=\"checkmark-circle-outline\" color=\"success\"></ion-icon>\r\n            <span>Shipped</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Shipped Date</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <span>30 APR 2017</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"6\">\r\n            <p class=\"ion-no-margin\">Order Amount</p>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <span>$199.99</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-item-group>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/order-history/order-history.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/order-history/order-history.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPageModule", function() { return OrderHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-history.page */ "./src/app/order-history/order-history.page.ts");







const routes = [
    {
        path: '',
        component: _order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]
    }
];
let OrderHistoryPageModule = class OrderHistoryPageModule {
};
OrderHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_order_history_page__WEBPACK_IMPORTED_MODULE_6__["OrderHistoryPage"]]
    })
], OrderHistoryPageModule);



/***/ }),

/***/ "./src/app/order-history/order-history.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/order-history/order-history.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item-group ion-grid .is-vertical-align {\n  display: flex;\n  align-self: center !important;\n}\nion-item-group ion-item-divider {\n  font-size: 1rem;\n  font-weight: 400;\n}\nion-item-group p {\n  font-size: 1rem;\n}\nion-item-group a {\n  text-decoration: none;\n}\nion-item-group ion-icon {\n  padding-right: 8px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9vcmRlci1oaXN0b3J5L29yZGVyLWhpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDRE47QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FESUU7RUFDRSxlQUFBO0FDRko7QURJRTtFQUNFLHFCQUFBO0FDRko7QURJRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvb3JkZXItaGlzdG9yeS9vcmRlci1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtLWdyb3VwIHtcclxuICBpb24tZ3JpZCB7XHJcbiAgICAuaXMtdmVydGljYWwtYWxpZ24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWl0ZW0tZGl2aWRlciB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuIiwiaW9uLWl0ZW0tZ3JvdXAgaW9uLWdyaWQgLmlzLXZlcnRpY2FsLWFsaWduIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbS1ncm91cCBpb24taXRlbS1kaXZpZGVyIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuaW9uLWl0ZW0tZ3JvdXAgcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbmlvbi1pdGVtLWdyb3VwIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5pb24taXRlbS1ncm91cCBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/order-history/order-history.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-history/order-history.page.ts ***!
  \*****************************************************/
/*! exports provided: OrderHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryPage", function() { return OrderHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderHistoryPage = class OrderHistoryPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-history/order-history.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-history.page.scss */ "./src/app/order-history/order-history.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OrderHistoryPage);



/***/ })

}]);
//# sourceMappingURL=order-history-order-history-module-es2015.js.map