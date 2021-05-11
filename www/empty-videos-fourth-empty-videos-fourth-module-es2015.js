(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-videos-fourth-empty-videos-fourth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-videos-fourth/empty-videos-fourth.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-videos-fourth/empty-videos-fourth.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Videos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content theme-{{env.theme}}\">\r\n    <h3>Nothing to Watch</h3>\r\n    <img src=\"assets/imgs/empty-videos-4.png\"/>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"center\">\r\n      <ion-fab-button class=\"ion-color ion-color-primary\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/empty-videos-fourth/empty-videos-fourth.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/empty-videos-fourth/empty-videos-fourth.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmptyVideosFourthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyVideosFourthPageModule", function() { return EmptyVideosFourthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_videos_fourth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-videos-fourth.page */ "./src/app/empty-videos-fourth/empty-videos-fourth.page.ts");







const routes = [
    {
        path: '',
        component: _empty_videos_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyVideosFourthPage"]
    }
];
let EmptyVideosFourthPageModule = class EmptyVideosFourthPageModule {
};
EmptyVideosFourthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_empty_videos_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyVideosFourthPage"]]
    })
], EmptyVideosFourthPageModule);



/***/ }),

/***/ "./src/app/empty-videos-fourth/empty-videos-fourth.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/empty-videos-fourth/empty-videos-fourth.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-empty-state-content {\n  width: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-top: 20vh;\n  height: 100%;\n}\n.is-empty-state-content h3 {\n  margin-bottom: 1rem;\n  font-weight: 500;\n}\n.is-empty-state-content p {\n  margin-top: 0;\n}\n.is-empty-state-content img {\n  width: 55%;\n  max-width: 370px;\n  margin-bottom: 1rem;\n}\n.theme-light {\n  background: #f0f4f4;\n}\n.theme-dark {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS12aWRlb3MtZm91cnRoL2VtcHR5LXZpZGVvcy1mb3VydGgucGFnZS5zY3NzIiwic3JjL2FwcC9lbXB0eS12aWRlb3MtZm91cnRoL2VtcHR5LXZpZGVvcy1mb3VydGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURFRTtFQUNFLGFBQUE7QUNBSjtBREdFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNESjtBREtBO0VBQ0UsbUJBQUE7QUNGRjtBREtBO0VBQ0UsaUJBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2VtcHR5LXZpZGVvcy1mb3VydGgvZW1wdHktdmlkZW9zLWZvdXJ0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAzNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGhlbWUtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICNmMGY0ZjQ7XHJcbn1cclxuXHJcbi50aGVtZS1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG4iLCIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgcGFkZGluZy10b3A6IDIwdmg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDU1JTtcbiAgbWF4LXdpZHRoOiAzNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRoZW1lLWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2YwZjRmNDtcbn1cblxuLnRoZW1lLWRhcmsge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/empty-videos-fourth/empty-videos-fourth.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/empty-videos-fourth/empty-videos-fourth.page.ts ***!
  \*****************************************************************/
/*! exports provided: EmptyVideosFourthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyVideosFourthPage", function() { return EmptyVideosFourthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");



let EmptyVideosFourthPage = class EmptyVideosFourthPage {
    constructor() {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
    }
    ngOnInit() {
    }
};
EmptyVideosFourthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-videos-fourth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empty-videos-fourth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-videos-fourth/empty-videos-fourth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empty-videos-fourth.page.scss */ "./src/app/empty-videos-fourth/empty-videos-fourth.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmptyVideosFourthPage);



/***/ })

}]);
//# sourceMappingURL=empty-videos-fourth-empty-videos-fourth-module-es2015.js.map