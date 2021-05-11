(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["headers-list-headers-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/headers-list/headers-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/headers-list/headers-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Headers List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Comedy</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Airplane!</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Caddyshack</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Coming To America</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Action</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>Terminator II</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>The Empire Strikes Back</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Blade Runner</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Horror</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label>The Evil Dead</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Poldergeist</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Aliens</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/headers-list/headers-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/headers-list/headers-list.module.ts ***!
  \*****************************************************/
/*! exports provided: HeadersListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersListPageModule", function() { return HeadersListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _headers_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headers-list.page */ "./src/app/headers-list/headers-list.page.ts");







const routes = [
    {
        path: '',
        component: _headers_list_page__WEBPACK_IMPORTED_MODULE_6__["HeadersListPage"]
    }
];
let HeadersListPageModule = class HeadersListPageModule {
};
HeadersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_headers_list_page__WEBPACK_IMPORTED_MODULE_6__["HeadersListPage"]]
    })
], HeadersListPageModule);



/***/ }),

/***/ "./src/app/headers-list/headers-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/headers-list/headers-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlcnMtbGlzdC9oZWFkZXJzLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/headers-list/headers-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/headers-list/headers-list.page.ts ***!
  \***************************************************/
/*! exports provided: HeadersListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersListPage", function() { return HeadersListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeadersListPage = class HeadersListPage {
    constructor() { }
    ngOnInit() {
    }
};
HeadersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-headers-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./headers-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/headers-list/headers-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./headers-list.page.scss */ "./src/app/headers-list/headers-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HeadersListPage);



/***/ })

}]);
//# sourceMappingURL=headers-list-headers-list-module-es2015.js.map