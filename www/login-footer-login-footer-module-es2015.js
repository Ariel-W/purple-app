(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-footer-login-footer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-footer/login-footer.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-footer/login-footer.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Login with Footer</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-text-center\">\r\n  <div class=\"is-hero\">\r\n    <div class=\"is-image-container ion-padding-top\">\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </div>\r\n  </div>\r\n\r\n  <ion-list class=\"ion-padding is-list-transparent\">\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Login\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"is-password-field\">\r\n      <ion-input [type]=\"passwordType || 'password'\" placeholder=\"Password\"></ion-input>\r\n      <ion-button fill=\"clear\" size=\"default\" slot=\"end\" (click)=\"togglePasswordType()\">\r\n        <ion-icon [name]=\"(passwordType === 'text') ? 'eye-off' : 'eye'\"></ion-icon>\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-grid class=\"is-grid ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-list lines=\"none\" class=\"is-list-buttons is-list-transparent ion-padding ion-no-margin\">\r\n          <ion-item color=\"primary\" button detail=\"false\">\r\n            <ion-label class=\"ion-text-center\">Login</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-list lines=\"none\" class=\"is-list-buttons is-list-transparent ion-padding ion-no-margin\">\r\n          <ion-item color=\"secondary\" button detail=\"false\">\r\n            <ion-label class=\"ion-text-center\">Signup</ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-button expand=\"full\" fill=\"clear\" class=\"is-forgot ion-no-margin\">Forgot password?</ion-button>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/login-footer/login-footer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/login-footer/login-footer.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginFooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFooterPageModule", function() { return LoginFooterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_footer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-footer.page */ "./src/app/login-footer/login-footer.page.ts");







const routes = [
    {
        path: '',
        component: _login_footer_page__WEBPACK_IMPORTED_MODULE_6__["LoginFooterPage"]
    }
];
let LoginFooterPageModule = class LoginFooterPageModule {
};
LoginFooterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_footer_page__WEBPACK_IMPORTED_MODULE_6__["LoginFooterPage"]]
    })
], LoginFooterPageModule);



/***/ }),

/***/ "./src/app/login-footer/login-footer.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/login-footer/login-footer.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  background-image: url('login-background.png');\n  background-size: cover;\n  background-position: center;\n  --background: transparent;\n}\n\nion-content::before {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: block;\n  content: \" \";\n  background: rgba(0, 0, 0, 0.3);\n}\n\n.is-hero .is-image-container img {\n  width: 200px;\n}\n\nion-button.is-forgot {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  --color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9sb2dpbi1mb290ZXIvbG9naW4tZm9vdGVyLnBhZ2Uuc2NzcyIsInNyYy9hcHAvbG9naW4tZm9vdGVyL2xvZ2luLWZvb3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFFQSxjQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi1mb290ZXIvbG9naW4tZm9vdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1ncy9sb2dpbi1iYWNrZ3JvdW5kLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24tY29udGVudDo6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgY29udGVudDogJyAnO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIDAuMyk7XHJcbn1cclxuXHJcbi5pcy1oZXJvIC5pcy1pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uaXMtZm9yZ290IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcblxyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsImlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZ3MvbG9naW4tYmFja2dyb3VuZC5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWNvbnRlbnQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29udGVudDogXCIgXCI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cblxuLmlzLWhlcm8gLmlzLWltYWdlLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG5cbmlvbi1idXR0b24uaXMtZm9yZ290IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login-footer/login-footer.page.ts":
/*!***************************************************!*\
  !*** ./src/app/login-footer/login-footer.page.ts ***!
  \***************************************************/
/*! exports provided: LoginFooterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFooterPage", function() { return LoginFooterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LoginFooterPage = class LoginFooterPage {
    constructor() { }
    ngOnInit() {
    }
    togglePasswordType() {
        this.passwordType = this.passwordType || 'password';
        this.passwordType = (this.passwordType === 'password') ? 'text' : 'password';
    }
};
LoginFooterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-footer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-footer/login-footer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-footer.page.scss */ "./src/app/login-footer/login-footer.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoginFooterPage);



/***/ })

}]);
//# sourceMappingURL=login-footer-login-footer-module-es2015.js.map