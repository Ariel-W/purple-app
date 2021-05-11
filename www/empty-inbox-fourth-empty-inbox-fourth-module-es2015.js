(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-inbox-fourth-empty-inbox-fourth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-inbox-fourth/empty-inbox-fourth.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-inbox-fourth/empty-inbox-fourth.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Inbox Empty</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content-background\">\r\n    <div class=\"is-empty-state-text\">\r\n      <h3>Inbox Empty</h3>\r\n      <p>You have no messages yet</p>\r\n      <ion-button shape=\"round\">New</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/empty-inbox-fourth/empty-inbox-fourth.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/empty-inbox-fourth/empty-inbox-fourth.module.ts ***!
  \*****************************************************************/
/*! exports provided: EmptyInboxFourthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyInboxFourthPageModule", function() { return EmptyInboxFourthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _empty_inbox_fourth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./empty-inbox-fourth.page */ "./src/app/empty-inbox-fourth/empty-inbox-fourth.page.ts");







const routes = [
    {
        path: '',
        component: _empty_inbox_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyInboxFourthPage"]
    }
];
let EmptyInboxFourthPageModule = class EmptyInboxFourthPageModule {
};
EmptyInboxFourthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_empty_inbox_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyInboxFourthPage"]]
    })
], EmptyInboxFourthPageModule);



/***/ }),

/***/ "./src/app/empty-inbox-fourth/empty-inbox-fourth.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/empty-inbox-fourth/empty-inbox-fourth.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-empty-state-content-background {\n  background-image: url('empty-inbox-4.png');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  display: flex;\n}\n.is-empty-state-content-background .is-empty-state-text {\n  text-align: center;\n  flex-grow: 1;\n  align-self: flex-end;\n  margin-bottom: 20%;\n}\n.is-empty-state-content-background .is-empty-state-text h3, .is-empty-state-content-background .is-empty-state-text p {\n  color: white;\n}\n.is-empty-state-content-background .is-empty-state-text ion-button:not([color]) {\n  --background: white;\n  --color: black;\n}\n:host ion-button {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1pbmJveC1mb3VydGgvZW1wdHktaW5ib3gtZm91cnRoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wdHktaW5ib3gtZm91cnRoL2VtcHR5LWluYm94LWZvdXJ0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7QUNDTjtBREVJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FDQU47QURLQTtFQUNFLGdCQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9lbXB0eS1pbmJveC1mb3VydGgvZW1wdHktaW5ib3gtZm91cnRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWdzL2VtcHR5LWluYm94LTQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAuaXMtZW1wdHktc3RhdGUtdGV4dHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMCU7XHJcblxyXG4gICAgaDMsIHAge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbjpub3QoW2NvbG9yXSkge1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAtLWNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjpob3N0IGlvbi1idXR0b24ge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuIiwiLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWdzL2VtcHR5LWluYm94LTQucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQgLmlzLWVtcHR5LXN0YXRlLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIG1hcmdpbi1ib3R0b206IDIwJTtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQgLmlzLWVtcHR5LXN0YXRlLXRleHQgaDMsIC5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQgLmlzLWVtcHR5LXN0YXRlLXRleHQgcCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQgLmlzLWVtcHR5LXN0YXRlLXRleHQgaW9uLWJ1dHRvbjpub3QoW2NvbG9yXSkge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWNvbG9yOiBibGFjaztcbn1cblxuOmhvc3QgaW9uLWJ1dHRvbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/empty-inbox-fourth/empty-inbox-fourth.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/empty-inbox-fourth/empty-inbox-fourth.page.ts ***!
  \***************************************************************/
/*! exports provided: EmptyInboxFourthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyInboxFourthPage", function() { return EmptyInboxFourthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmptyInboxFourthPage = class EmptyInboxFourthPage {
    constructor() { }
    ngOnInit() {
    }
};
EmptyInboxFourthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty-inbox-fourth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empty-inbox-fourth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-inbox-fourth/empty-inbox-fourth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empty-inbox-fourth.page.scss */ "./src/app/empty-inbox-fourth/empty-inbox-fourth.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EmptyInboxFourthPage);



/***/ })

}]);
//# sourceMappingURL=empty-inbox-fourth-empty-inbox-fourth-module-es2015.js.map