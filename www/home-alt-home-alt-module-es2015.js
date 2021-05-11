(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-alt-home-alt-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-alt/home-alt.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home-alt/home-alt.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Home Alternative</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-hero\">\r\n    <div class=\"is-image-container\">\r\n      <img src=\"assets/imgs/home-alt.png\" />\r\n      <h1 class=\"ion-text-center\">What is Ionic?</h1>\r\n      <ion-fab slot=\"fixed\" horizontal=\"center\" vertical=\"center\">\r\n        <ion-fab-button>\r\n          <ion-icon name=\"play\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n\r\n    <p class=\"ion-padding-horizontal ion-padding-bottom\">\r\n      When I was just starting 6th grade I got my first job. Paperboy! Boy, was I excited. At that time I had spent.\r\n    </p>\r\n  </div>\r\n\r\n  <ion-list class=\"ion-padding ion-no-margin is-list-buttons\">\r\n    <ion-item button detail=\"false\" >\r\n      <ion-icon slot=\"end\" name=\"logo-facebook\" color=\"is-facebook-icon\" class=\"ion-no-margin\"></ion-icon>\r\n      <ion-label>Login with Facebook</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding ion-no-margin is-list-buttons\">\r\n    <ion-item button detail=\"true\">\r\n      <ion-label>Sign Up with E-mail</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <p class=\"ion-text-center\">Have an account? <a routerLink=\"/login\">Log in</a></p>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home-alt/home-alt.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home-alt/home-alt.module.ts ***!
  \*********************************************/
/*! exports provided: HomeAltPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAltPageModule", function() { return HomeAltPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_alt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-alt.page */ "./src/app/home-alt/home-alt.page.ts");







const routes = [
    {
        path: '',
        component: _home_alt_page__WEBPACK_IMPORTED_MODULE_6__["HomeAltPage"]
    }
];
let HomeAltPageModule = class HomeAltPageModule {
};
HomeAltPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_alt_page__WEBPACK_IMPORTED_MODULE_6__["HomeAltPage"]]
    })
], HomeAltPageModule);



/***/ }),

/***/ "./src/app/home-alt/home-alt.page.scss":
/*!*********************************************!*\
  !*** ./src/app/home-alt/home-alt.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtYWx0L2hvbWUtYWx0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/home-alt/home-alt.page.ts":
/*!*******************************************!*\
  !*** ./src/app/home-alt/home-alt.page.ts ***!
  \*******************************************/
/*! exports provided: HomeAltPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAltPage", function() { return HomeAltPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeAltPage = class HomeAltPage {
    constructor() { }
    ngOnInit() {
    }
};
HomeAltPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-alt',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-alt.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home-alt/home-alt.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-alt.page.scss */ "./src/app/home-alt/home-alt.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeAltPage);



/***/ })

}]);
//# sourceMappingURL=home-alt-home-alt-module-es2015.js.map