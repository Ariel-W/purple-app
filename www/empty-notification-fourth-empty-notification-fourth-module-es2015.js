(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-notification-fourth-empty-notification-fourth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-notification-fourth/empty-notification-fourth.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-notification-fourth/empty-notification-fourth.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Notifications</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content theme-{{env.theme}}\">\r\n    <h3>No Notifications</h3>\r\n    <img src=\"assets/imgs/empty-notification-4.png\"/>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/empty-notification-fourth/empty-notification-fourth.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/empty-notification-fourth/empty-notification-fourth.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EmptyNotificationFourthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyNotificationFourthPageModule", function() { return EmptyNotificationFourthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_notification_fourth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-notification-fourth.page */ "./src/app/empty-notification-fourth/empty-notification-fourth.page.ts");







const routes = [
    {
        path: '',
        component: _empty_notification_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyNotificationFourthPage"]
    }
];
let EmptyNotificationFourthPageModule = class EmptyNotificationFourthPageModule {
};
EmptyNotificationFourthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_empty_notification_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyNotificationFourthPage"]]
    })
], EmptyNotificationFourthPageModule);



/***/ }),

/***/ "./src/app/empty-notification-fourth/empty-notification-fourth.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/empty-notification-fourth/empty-notification-fourth.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-empty-state-content {\n  width: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-top: 12vh;\n  height: 100%;\n}\n.is-empty-state-content img {\n  width: 55%;\n  max-width: 300px;\n  margin-bottom: 30px;\n}\n.is-empty-state-content h3 {\n  margin-bottom: 30px;\n}\n.theme-light {\n  background: #f0f4f4;\n}\n.theme-dark {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1ub3RpZmljYXRpb24tZm91cnRoL2VtcHR5LW5vdGlmaWNhdGlvbi1mb3VydGgucGFnZS5zY3NzIiwic3JjL2FwcC9lbXB0eS1ub3RpZmljYXRpb24tZm91cnRoL2VtcHR5LW5vdGlmaWNhdGlvbi1mb3VydGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FERUU7RUFDQyxtQkFBQTtBQ0FIO0FESUE7RUFDRSxtQkFBQTtBQ0RGO0FESUE7RUFDRSxpQkFBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvZW1wdHktbm90aWZpY2F0aW9uLWZvdXJ0aC9lbXB0eS1ub3RpZmljYXRpb24tZm91cnRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICBwYWRkaW5nLXRvcDogMTJ2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRoZW1lLWxpZ2h0IHtcclxuICBiYWNrZ3JvdW5kOiAjZjBmNGY0O1xyXG59XHJcblxyXG4udGhlbWUtZGFyayB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuIiwiLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XG4gIHBhZGRpbmctdG9wOiAxMnZoO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBpbWcge1xuICB3aWR0aDogNTUlO1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQgaDMge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4udGhlbWUtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZjBmNGY0O1xufVxuXG4udGhlbWUtZGFyayB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/empty-notification-fourth/empty-notification-fourth.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/empty-notification-fourth/empty-notification-fourth.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EmptyNotificationFourthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyNotificationFourthPage", function() { return EmptyNotificationFourthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let EmptyNotificationFourthPage = class EmptyNotificationFourthPage {
    constructor() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
    }
};
EmptyNotificationFourthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-notification-fourth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empty-notification-fourth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-notification-fourth/empty-notification-fourth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empty-notification-fourth.page.scss */ "./src/app/empty-notification-fourth/empty-notification-fourth.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmptyNotificationFourthPage);



/***/ })

}]);
//# sourceMappingURL=empty-notification-fourth-empty-notification-fourth-module-es2015.js.map