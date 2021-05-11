(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-finish-order-finish-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-finish/order-finish.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-finish/order-finish.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Finish</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-flex ion-justify-content-evenly ion-align-items-center ion-padding-vertical ion-margin-vertical\">\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/cart\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/delivery\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"location-sharp\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/payment\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/confirmation\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"flag\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div class=\"ion-margin ion-text-center is-solid-circle-icon is-icon-xl\">\r\n    <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\r\n  </div>\r\n\r\n  <div class=\"ion-padding ion-text-center\">\r\n    <h2>Congratulations Your Order is Accepted</h2>\r\n    <p>Character may be manifested in the great moments, but it is made in the small ones.</p>\r\n  </div>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button class=\"ion-margin-top\" expand=\"block\">Track Order</ion-button>\r\n    <ion-button expand=\"block\" fill=\"outline\">View Account</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/order-finish/order-finish.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-finish/order-finish.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderFinishPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFinishPageModule", function() { return OrderFinishPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_finish_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-finish.page */ "./src/app/order-finish/order-finish.page.ts");







const routes = [
    {
        path: '',
        component: _order_finish_page__WEBPACK_IMPORTED_MODULE_6__["OrderFinishPage"]
    }
];
let OrderFinishPageModule = class OrderFinishPageModule {
};
OrderFinishPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_order_finish_page__WEBPACK_IMPORTED_MODULE_6__["OrderFinishPage"]]
    })
], OrderFinishPageModule);



/***/ }),

/***/ "./src/app/order-finish/order-finish.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/order-finish/order-finish.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button.button-color {\n  width: 50px;\n  height: 50px !important;\n  --border-color: var(--ion-color-is-mute-light);\n  --border-style: solid;\n  --border-width: 2px;\n}\n\n.is-solid-circle-icon {\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9vcmRlci1maW5pc2gvb3JkZXItZmluaXNoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvb3JkZXItZmluaXNoL29yZGVyLWZpbmlzaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL29yZGVyLWZpbmlzaC9vcmRlci1maW5pc2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbi5idXR0b24tY29sb3Ige1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuLmlzLXNvbGlkLWNpcmNsZS1pY29uIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuIiwiaW9uLWJ1dHRvbi5idXR0b24tY29sb3Ige1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcbn1cblxuLmlzLXNvbGlkLWNpcmNsZS1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/order-finish/order-finish.page.ts":
/*!***************************************************!*\
  !*** ./src/app/order-finish/order-finish.page.ts ***!
  \***************************************************/
/*! exports provided: OrderFinishPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderFinishPage", function() { return OrderFinishPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderFinishPage = class OrderFinishPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderFinishPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-order-finish',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-finish.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-finish/order-finish.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-finish.page.scss */ "./src/app/order-finish/order-finish.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OrderFinishPage);



/***/ })

}]);
//# sourceMappingURL=order-finish-order-finish-module-es2015.js.map