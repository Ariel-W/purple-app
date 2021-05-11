(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-wallet-third-empty-wallet-third-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-wallet-third/empty-wallet-third.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-wallet-third/empty-wallet-third.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Payment Methods</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content theme-{{env.theme}}\">\r\n    <ion-button fill=\"clear\">\r\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <p class=\"ion-padding-top ion-padding-horizontal ion-no-margin\">\r\n      Your payment methods will appear here\r\n    </p>\r\n\r\n    <img src=\"assets/imgs/empty-wallet-3.png\"/>\r\n\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/empty-wallet-third/empty-wallet-third.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/empty-wallet-third/empty-wallet-third.module.ts ***!
  \*****************************************************************/
/*! exports provided: EmptyWalletThirdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyWalletThirdPageModule", function() { return EmptyWalletThirdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_wallet_third_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-wallet-third.page */ "./src/app/empty-wallet-third/empty-wallet-third.page.ts");







const routes = [
    {
        path: '',
        component: _empty_wallet_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyWalletThirdPage"]
    }
];
let EmptyWalletThirdPageModule = class EmptyWalletThirdPageModule {
};
EmptyWalletThirdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_empty_wallet_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyWalletThirdPage"]]
    })
], EmptyWalletThirdPageModule);



/***/ }),

/***/ "./src/app/empty-wallet-third/empty-wallet-third.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/empty-wallet-third/empty-wallet-third.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-empty-state-content {\n  height: 100%;\n  text-align: center;\n  position: relative;\n}\n.is-empty-state-content ion-button {\n  position: absolute;\n  right: 0;\n}\n.is-empty-state-content img {\n  max-height: 80vh;\n}\n.is-empty-state-content.theme-dark {\n  background: black;\n}\n.is-empty-state-content.theme-light {\n  background: #F6F9FA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS13YWxsZXQtdGhpcmQvZW1wdHktd2FsbGV0LXRoaXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wdHktd2FsbGV0LXRoaXJkL2VtcHR5LXdhbGxldC10aGlyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBRElBO0VBQ0UsaUJBQUE7QUNERjtBRElBO0VBQ0UsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2VtcHR5LXdhbGxldC10aGlyZC9lbXB0eS13YWxsZXQtdGhpcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgbWF4LWhlaWdodDogODB2aDtcclxuICB9XHJcbn1cclxuXHJcbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LnRoZW1lLWRhcmsge1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcblxyXG4uaXMtZW1wdHktc3RhdGUtY29udGVudC50aGVtZS1saWdodCB7XHJcbiAgYmFja2dyb3VuZDogI0Y2RjlGQTtcclxufVxyXG4iLCIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IGltZyB7XG4gIG1heC1oZWlnaHQ6IDgwdmg7XG59XG5cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LnRoZW1lLWRhcmsge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cblxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQudGhlbWUtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjRjZGOUZBO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/empty-wallet-third/empty-wallet-third.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/empty-wallet-third/empty-wallet-third.page.ts ***!
  \***************************************************************/
/*! exports provided: EmptyWalletThirdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyWalletThirdPage", function() { return EmptyWalletThirdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let EmptyWalletThirdPage = class EmptyWalletThirdPage {
    constructor() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
    }
};
EmptyWalletThirdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-wallet-third',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empty-wallet-third.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-wallet-third/empty-wallet-third.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empty-wallet-third.page.scss */ "./src/app/empty-wallet-third/empty-wallet-third.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmptyWalletThirdPage);



/***/ })

}]);
//# sourceMappingURL=empty-wallet-third-empty-wallet-third-module-es2015.js.map