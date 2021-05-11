(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-events-fifth-empty-events-fifth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-fifth/empty-events-fifth.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-fifth/empty-events-fifth.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Trips</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content-background\">\r\n    <div class=\"is-empty-state-text\">\r\n      <h3>No Trips!</h3>\r\n      <p>Plan a new trip, have fun!</p>\r\n      <ion-button shape=\"round\">Add</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/empty-events-fifth/empty-events-fifth.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/empty-events-fifth/empty-events-fifth.module.ts ***!
  \*****************************************************************/
/*! exports provided: EmptyEventsFifthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyEventsFifthPageModule", function() { return EmptyEventsFifthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_events_fifth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-events-fifth.page */ "./src/app/empty-events-fifth/empty-events-fifth.page.ts");







const routes = [
    {
        path: '',
        component: _empty_events_fifth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyEventsFifthPage"]
    }
];
let EmptyEventsFifthPageModule = class EmptyEventsFifthPageModule {
};
EmptyEventsFifthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_empty_events_fifth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyEventsFifthPage"]]
    })
], EmptyEventsFifthPageModule);



/***/ }),

/***/ "./src/app/empty-events-fifth/empty-events-fifth.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/empty-events-fifth/empty-events-fifth.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-empty-state-content-background {\n  background-image: url('empty-events-5.png');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  display: flex;\n}\n.is-empty-state-content-background .is-empty-state-text {\n  text-align: center;\n  flex-grow: 1;\n  align-self: flex-end;\n  margin-bottom: 20%;\n}\n.is-empty-state-content-background .is-empty-state-text h3, .is-empty-state-content-background .is-empty-state-text p {\n  color: white;\n}\n.is-empty-state-content-background .is-empty-state-text ion-button:not([color]) {\n  --background: white;\n  --color: black;\n}\n:host ion-button {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1ldmVudHMtZmlmdGgvZW1wdHktZXZlbnRzLWZpZnRoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wdHktZXZlbnRzLWZpZnRoL2VtcHR5LWV2ZW50cy1maWZ0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7QUNDTjtBREVJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDQU47QURLQTtFQUNFLGdCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9lbXB0eS1ldmVudHMtZmlmdGgvZW1wdHktZXZlbnRzLWZpZnRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWdzL2VtcHR5LWV2ZW50cy01LnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmlzLWVtcHR5LXN0YXRlLXRleHR7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG5cclxuICAgIGgzLCBwIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b246bm90KFtjb2xvcl0pIHtcclxuICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgLS1jb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCBpb24tYnV0dG9uIHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcbiIsIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1ncy9lbXB0eS1ldmVudHMtNS5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQtYmFja2dyb3VuZCAuaXMtZW1wdHktc3RhdGUtdGV4dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxleC1ncm93OiAxO1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMjAlO1xufVxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQtYmFja2dyb3VuZCAuaXMtZW1wdHktc3RhdGUtdGV4dCBoMywgLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQtYmFja2dyb3VuZCAuaXMtZW1wdHktc3RhdGUtdGV4dCBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQtYmFja2dyb3VuZCAuaXMtZW1wdHktc3RhdGUtdGV4dCBpb24tYnV0dG9uOm5vdChbY29sb3JdKSB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0tY29sb3I6IGJsYWNrO1xufVxuXG46aG9zdCBpb24tYnV0dG9uIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/empty-events-fifth/empty-events-fifth.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/empty-events-fifth/empty-events-fifth.page.ts ***!
  \***************************************************************/
/*! exports provided: EmptyEventsFifthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyEventsFifthPage", function() { return EmptyEventsFifthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmptyEventsFifthPage = class EmptyEventsFifthPage {
    constructor() { }
    ngOnInit() {
    }
};
EmptyEventsFifthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-events-fifth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empty-events-fifth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-fifth/empty-events-fifth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empty-events-fifth.page.scss */ "./src/app/empty-events-fifth/empty-events-fifth.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmptyEventsFifthPage);



/***/ })

}]);
//# sourceMappingURL=empty-events-fifth-empty-events-fifth-module-es2015.js.map