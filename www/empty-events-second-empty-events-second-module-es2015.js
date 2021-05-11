(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-events-second-empty-events-second-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-second/empty-events-second.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-second/empty-events-second.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Trips</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content-background\">\r\n    <div class=\"is-empty-state-text\">\r\n      <h3>No Trips</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>\r\n      <ion-button shape=\"round\" color=\"primary\">CREATE</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/empty-events-second/empty-events-second.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/empty-events-second/empty-events-second.module.ts ***!
  \*******************************************************************/
/*! exports provided: EmptyEventsSecondPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyEventsSecondPageModule", function() { return EmptyEventsSecondPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_events_second_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-events-second.page */ "./src/app/empty-events-second/empty-events-second.page.ts");







const routes = [
    {
        path: '',
        component: _empty_events_second_page__WEBPACK_IMPORTED_MODULE_6__["EmptyEventsSecondPage"]
    }
];
let EmptyEventsSecondPageModule = class EmptyEventsSecondPageModule {
};
EmptyEventsSecondPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_empty_events_second_page__WEBPACK_IMPORTED_MODULE_6__["EmptyEventsSecondPage"]]
    })
], EmptyEventsSecondPageModule);



/***/ }),

/***/ "./src/app/empty-events-second/empty-events-second.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/empty-events-second/empty-events-second.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-empty-state-content-background {\n  background-image: url('empty-events-2.png');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  display: flex;\n}\n.is-empty-state-content-background .is-empty-state-text {\n  text-align: center;\n  flex-grow: 1;\n  align-self: flex-end;\n  margin-bottom: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1ldmVudHMtc2Vjb25kL2VtcHR5LWV2ZW50cy1zZWNvbmQucGFnZS5zY3NzIiwic3JjL2FwcC9lbXB0eS1ldmVudHMtc2Vjb25kL2VtcHR5LWV2ZW50cy1zZWNvbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZW1wdHktZXZlbnRzLXNlY29uZC9lbXB0eS1ldmVudHMtc2Vjb25kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWdzL2VtcHR5LWV2ZW50cy0yLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmlzLWVtcHR5LXN0YXRlLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG4gIH1cclxufVxyXG4iLCIuaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZ3MvZW1wdHktZXZlbnRzLTIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQgLmlzLWVtcHR5LXN0YXRlLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/empty-events-second/empty-events-second.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/empty-events-second/empty-events-second.page.ts ***!
  \*****************************************************************/
/*! exports provided: EmptyEventsSecondPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyEventsSecondPage", function() { return EmptyEventsSecondPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmptyEventsSecondPage = class EmptyEventsSecondPage {
    constructor() { }
    ngOnInit() {
    }
};
EmptyEventsSecondPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-events-second',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empty-events-second.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-second/empty-events-second.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empty-events-second.page.scss */ "./src/app/empty-events-second/empty-events-second.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmptyEventsSecondPage);



/***/ })

}]);
//# sourceMappingURL=empty-events-second-empty-events-second-module-es2015.js.map