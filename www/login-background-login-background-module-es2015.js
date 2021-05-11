(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-background-login-background-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-background/login-background.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-background/login-background.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Login with Background</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <div class=\"is-hero\">\r\n    <div class=\"is-image-container ion-padding-top\">\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </div>\r\n  </div>\r\n\r\n  <ion-list class=\"ion-padding is-list-transparent\">\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Login\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"is-password-field\">\r\n      <ion-input [type]=\"passwordType || 'password'\" placeholder=\"Password\"></ion-input>\r\n      <ion-button fill=\"clear\" size=\"default\" slot=\"end\" (click)=\"togglePasswordType()\">\r\n        <ion-icon [name]=\"(passwordType === 'text') ? 'eye-off' : 'eye'\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\" class=\"is-list-buttons is-list-transparent ion-padding ion-no-margin\">\r\n    <ion-item color=\"primary\" button detail=\"true\">\r\n      <ion-label>Login to Account</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list lines=\"none\" class=\"is-list-buttons is-list-transparent ion-padding ion-no-margin\">\r\n    <ion-item color=\"secondary\" button detail=\"true\">\r\n      <ion-label>Sign Up with E-mail</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding-horizontal\">\r\n    <p class=\"is-login-element-dark-contrast\">\r\n      Forget password? <a routerLink=\"/loginBackground\">Restore</a>\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login-background/login-background.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/login-background/login-background.module.ts ***!
  \*************************************************************/
/*! exports provided: LoginBackgroundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundPageModule", function() { return LoginBackgroundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_background_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-background.page */ "./src/app/login-background/login-background.page.ts");







const routes = [
    {
        path: '',
        component: _login_background_page__WEBPACK_IMPORTED_MODULE_6__["LoginBackgroundPage"]
    }
];
let LoginBackgroundPageModule = class LoginBackgroundPageModule {
};
LoginBackgroundPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_background_page__WEBPACK_IMPORTED_MODULE_6__["LoginBackgroundPage"]]
    })
], LoginBackgroundPageModule);



/***/ }),

/***/ "./src/app/login-background/login-background.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/login-background/login-background.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-image: url('login-background.png');\n  background-size: cover;\n  background-position: center;\n  --background: transparent;\n}\n\nion-content::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  content: \" \";\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.is-hero .is-image-container img {\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9sb2dpbi1iYWNrZ3JvdW5kL2xvZ2luLWJhY2tncm91bmQucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi1iYWNrZ3JvdW5kL2xvZ2luLWJhY2tncm91bmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWJhY2tncm91bmQvbG9naW4tYmFja2dyb3VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZ3MvbG9naW4tYmFja2dyb3VuZC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQ6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDowO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLCAwLjMpO1xyXG59XHJcblxyXG4uaXMtaGVybyAuaXMtaW1hZ2UtY29udGFpbmVyIGltZyB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZ3MvbG9naW4tYmFja2dyb3VuZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmlzLWhlcm8gLmlzLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/login-background/login-background.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/login-background/login-background.page.ts ***!
  \***********************************************************/
/*! exports provided: LoginBackgroundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBackgroundPage", function() { return LoginBackgroundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoginBackgroundPage = class LoginBackgroundPage {
    constructor() { }
    ngOnInit() {
    }
    togglePasswordType() {
        this.passwordType = this.passwordType || 'password';
        this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
    }
};
LoginBackgroundPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-background',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-background.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-background/login-background.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-background.page.scss */ "./src/app/login-background/login-background.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoginBackgroundPage);



/***/ })

}]);
//# sourceMappingURL=login-background-login-background-module-es2015.js.map