(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Login</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding-horizontal\">\r\n    <h1>Welcome to Ionic Stencil Essential</h1>\r\n\r\n    <p>\r\n      Create a list with all possible keywords that fit to your product, service or business field. The more the better.\r\n    </p>\r\n  </div>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Login\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"is-password-field\">\r\n      <ion-input [type]=\"passwordType || 'password'\" placeholder=\"Password\"></ion-input>\r\n      <ion-button fill=\"clear\" size=\"default\" slot=\"end\" (click)=\"togglePasswordType()\">\r\n        <ion-icon [name]=\"(passwordType === 'text') ? 'eye-off' : 'eye'\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\" class=\"ion-padding ion-no-margin is-list-buttons\">\r\n    <ion-item color=\"secondary\" button detail=\"true\">\r\n      <ion-label>Login to Account</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding-horizontal\">\r\n    <p>\r\n      Forgot password? <a routerLink=\"/login\">Restore</a>\r\n    </p>\r\n\r\n    <p class=\"ion-padding-top ion-no-margin\">\r\n      Login with\r\n    </p>\r\n\r\n    <ion-grid class=\"is-grid ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n          <ion-button expand=\"block\" fill=\"outline\" size=\"large\">\r\n            <ion-icon name='logo-facebook' color=\"is-facebook-icon\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n          <ion-button expand=\"block\" fill=\"outline\" size=\"large\">\r\n            <ion-icon name='logo-twitter' color=\"is-twitter-icon\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <ion-list class=\"is-list-buttons ion-padding ion-no-margin\">\r\n    <ion-item button detail=\"true\">\r\n      <ion-label>Sign Up with E-mail</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-grid ion-button {\n  margin-bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtZ3JpZCBpb24tYnV0dG9uIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxufVxyXG4iLCIuaXMtZ3JpZCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoginPage = class LoginPage {
    constructor() { }
    ngOnInit() {
    }
    togglePasswordType() {
        this.passwordType = this.passwordType || 'password';
        this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
    }
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map