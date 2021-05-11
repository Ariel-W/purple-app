(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-purchases-fourth-empty-purchases-fourth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-purchases-fourth/empty-purchases-fourth.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-purchases-fourth/empty-purchases-fourth.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Orders</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content theme-{{env.theme}}\">\r\n    <p class=\"ion-padding-top ion-no-margin\">\r\n      Stuff you purchase appears here\r\n    </p>\r\n\r\n    <img src=\"assets/imgs/empty-purchases-4.png\"/>\r\n\r\n    <ion-button shape=\"round\" color=\"primary\">Shop</ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/empty-purchases-fourth/empty-purchases-fourth.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/empty-purchases-fourth/empty-purchases-fourth.module.ts ***!
  \*************************************************************************/
/*! exports provided: EmptyPurchasesFourthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPurchasesFourthPageModule", function() { return EmptyPurchasesFourthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_purchases_fourth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-purchases-fourth.page */ "./src/app/empty-purchases-fourth/empty-purchases-fourth.page.ts");







const routes = [
    {
        path: '',
        component: _empty_purchases_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyPurchasesFourthPage"]
    }
];
let EmptyPurchasesFourthPageModule = class EmptyPurchasesFourthPageModule {
};
EmptyPurchasesFourthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_empty_purchases_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyPurchasesFourthPage"]]
    })
], EmptyPurchasesFourthPageModule);



/***/ }),

/***/ "./src/app/empty-purchases-fourth/empty-purchases-fourth.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/empty-purchases-fourth/empty-purchases-fourth.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-empty-state-content {\n  height: 100%;\n  padding-left: 32px;\n  padding-right: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.is-empty-state-content img {\n  width: 65%;\n  max-width: 370px;\n  padding-top: 15vh;\n}\n.is-empty-state-content ion-button {\n  position: absolute;\n  bottom: 15vh;\n}\n.is-empty-state-content.theme-dark {\n  background: black;\n}\n.is-empty-state-content.theme-light {\n  background: #F6F9FA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1wdXJjaGFzZXMtZm91cnRoL2VtcHR5LXB1cmNoYXNlcy1mb3VydGgucGFnZS5zY3NzIiwic3JjL2FwcC9lbXB0eS1wdXJjaGFzZXMtZm91cnRoL2VtcHR5LXB1cmNoYXNlcy1mb3VydGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNBSjtBRElBO0VBQ0UsaUJBQUE7QUNERjtBRElBO0VBQ0UsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2VtcHR5LXB1cmNoYXNlcy1mb3VydGgvZW1wdHktcHVyY2hhc2VzLWZvdXJ0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctbGVmdDogMzJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIG1heC13aWR0aDogMzcwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTV2aDtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxNXZoO1xyXG4gIH1cclxufVxyXG5cclxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQudGhlbWUtZGFyayB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LnRoZW1lLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kOiAjRjZGOUZBO1xyXG59XHJcbiIsIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBpbWcge1xuICB3aWR0aDogNjUlO1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICBwYWRkaW5nLXRvcDogMTV2aDtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTV2aDtcbn1cblxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQudGhlbWUtZGFyayB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4uaXMtZW1wdHktc3RhdGUtY29udGVudC50aGVtZS1saWdodCB7XG4gIGJhY2tncm91bmQ6ICNGNkY5RkE7XG59Il19 */");

/***/ }),

/***/ "./src/app/empty-purchases-fourth/empty-purchases-fourth.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/empty-purchases-fourth/empty-purchases-fourth.page.ts ***!
  \***********************************************************************/
/*! exports provided: EmptyPurchasesFourthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyPurchasesFourthPage", function() { return EmptyPurchasesFourthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let EmptyPurchasesFourthPage = class EmptyPurchasesFourthPage {
    constructor() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
    }
};
EmptyPurchasesFourthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-purchases-fourth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empty-purchases-fourth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-purchases-fourth/empty-purchases-fourth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empty-purchases-fourth.page.scss */ "./src/app/empty-purchases-fourth/empty-purchases-fourth.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmptyPurchasesFourthPage);



/***/ })

}]);
//# sourceMappingURL=empty-purchases-fourth-empty-purchases-fourth-module-es2015.js.map