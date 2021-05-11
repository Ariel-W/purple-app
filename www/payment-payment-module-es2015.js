(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Payment</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-flex ion-justify-content-evenly ion-align-items-center ion-padding-top ion-margin-vertical\">\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/cart\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/delivery\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"location-sharp\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/payment\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/confirmation\" color=\"light\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"flag\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <ion-grid class=\"is-grid is-grid-tiles ion-padding-vertical\">\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"is-tile\">\r\n        <ion-item class=\"ion-text-center\" routerLink=\"/payment-page\" lines=\"none\" detail=\"false\">\r\n          <img src=\"assets/imgs/mastercard.png\" alt=\"\"/>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-center is-tile\">\r\n        <ion-item routerLink=\"/payment-page\" lines=\"none\" detail=\"false\" class=\"is-selected ion-text-center\">\r\n          <img src=\"assets/imgs/visa.png\" alt=\"\"/>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"ion-text-center is-tile\">\r\n        <ion-item class=\"ion-text-center\" routerLink=\"/payment-page\" lines=\"none\" detail=\"false\">\r\n          <img src=\"assets/imgs/paypal.png\" alt=\"\"/>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button expand=\"block\" fill=\"outline\">Save</ion-button>\r\n  </div>\r\n  <div class=\"ion-text-center\">\r\n    <p>or</p>\r\n  </div>\r\n\r\n  <ion-list class=\"ion-padding is-list-spaced\">\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Full Name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"number\" placeholder=\"Card Number\"></ion-input>\r\n    </ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"4\">\r\n          <ion-item class=\"is-select-item\">\r\n            <ion-datetime displayFormat=\"YYYY\" value=\"2019\"></ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-item class=\"is-select-item\">\r\n            <ion-datetime displayFormat=\"MM\" value=\"01\"></ion-datetime>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"4\">\r\n          <ion-item>\r\n            <ion-input placeholder=\"CVV\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-item lines=\"none\">\r\n      <ion-label>Save Credit card information</ion-label>\r\n      <ion-checkbox slot=\"start\" color=\"primary\"></ion-checkbox>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button class=\"ion-margin-top\" expand=\"block\" routerLink=\"/confirmation\">Next Step</ion-button>\r\n    <ion-button expand=\"block\" fill=\"outline\" routerLink=\"/delivery\">Back</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/payment/payment.module.ts":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/payment/payment.page.ts");







const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]
    }
];
let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/payment/payment.page.scss":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button.button-color {\n  width: 50px;\n  height: 50px !important;\n  --border-color: var(--ion-color-is-mute-light);\n  --border-style: solid;\n  --border-width: 2px;\n}\n\n.is-grid-tiles ion-item {\n  opacity: 0.2;\n}\n\n.is-grid-tiles ion-item.is-selected {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbi5idXR0b24tY29sb3Ige1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuLmlzLWdyaWQtdGlsZXMgaW9uLWl0ZW0ge1xyXG4gIG9wYWNpdHk6IDAuMjtcclxufVxyXG4uaXMtZ3JpZC10aWxlcyBpb24taXRlbS5pcy1zZWxlY3RlZCB7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4iLCJpb24tYnV0dG9uLmJ1dHRvbi1jb2xvciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufVxuXG4uaXMtZ3JpZC10aWxlcyBpb24taXRlbSB7XG4gIG9wYWNpdHk6IDAuMjtcbn1cblxuLmlzLWdyaWQtdGlsZXMgaW9uLWl0ZW0uaXMtc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/payment/payment.page.ts":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaymentPage = class PaymentPage {
    constructor() { }
    ngOnInit() {
    }
};
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/payment/payment.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=payment-payment-module-es2015.js.map