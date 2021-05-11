(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["storage-storage-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage/storage.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/storage/storage.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Storage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row class=\"is-grid-title is-grid-title-buttons\">\r\n      <ion-col class=\"is-tile\">\r\n        <span class=\"ion-padding-start\">Basic Account</span>\r\n        <div>\r\n          <span>5.0 GB</span>\r\n          <ion-button fill=\"outline\" size=\"small\">Upgrade</ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"is-tile\">\r\n        <h3>\r\n          <span>Used</span>\r\n          4.45 GB\r\n        </h3>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"is-tile\">\r\n        <h3>\r\n          <span>Available</span>\r\n          <span class=\"colored is-color-success\">550 MB</span>\r\n        </h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"ion-padding-top\">\r\n    <ion-list class=\"is-list-colored\">\r\n      <ion-item class=\"is-item-category-primary\" routerLink=\"/storage\" detail=\"false\">\r\n        <ion-label>\r\n          <h2>Music</h2>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">348 files</h3>\r\n        </div>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">23%</h3>\r\n        </div>\r\n        <div slot=\"end\">\r\n          <h2 class=\"ion-no-margin\">1.15 GB</h2>\r\n        </div>\r\n        <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n          <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n            <ion-icon name=\"arrow-forward\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"is-item-category-dark\" routerLink=\"/storage\" detail=\"false\">\r\n        <ion-label>\r\n          <h2>Video</h2>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">2 files</h3>\r\n        </div>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">21%</h3>\r\n        </div>\r\n        <div slot=\"end\">\r\n          <h2 class=\"ion-no-margin\">1.05 GB</h2>\r\n        </div>\r\n        <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n          <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n            <ion-icon name=\"arrow-forward\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"is-item-category-light\" routerLink=\"/storage\" detail=\"false\">\r\n        <ion-label>\r\n          <h2>Pictures</h2>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">34.3k files</h3>\r\n        </div>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">15%</h3>\r\n        </div>\r\n        <div slot=\"end\">\r\n          <h2 class=\"ion-no-margin\">750 MB</h2>\r\n        </div>\r\n        <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n          <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n            <ion-icon name=\"arrow-forward\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"is-item-category-secondary\" routerLink=\"/storage\" detail=\"false\">\r\n        <ion-label>\r\n          <h2>Apps</h2>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">49 files</h3>\r\n        </div>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">13%</h3>\r\n        </div>\r\n        <div slot=\"end\">\r\n          <h2 class=\"ion-no-margin\">650 MB</h2>\r\n        </div>\r\n        <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n          <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n            <ion-icon name=\"arrow-forward\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item class=\"is-item-category-success\" routerLink=\"/storage\" detail=\"false\">\r\n        <ion-label>\r\n          <h2>Other</h2>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">103 files</h3>\r\n        </div>\r\n        <div slot=\"end\" class=\"ion-padding-end\">\r\n          <h3 class=\"ion-no-margin\">11%</h3>\r\n        </div>\r\n        <div slot=\"end\">\r\n          <h2 class=\"ion-no-margin\">550 MB</h2>\r\n        </div>\r\n        <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n          <ion-button fill=\"clear\" class=\"ion-no-padding ion-align-self-center\">\r\n            <ion-icon name=\"arrow-forward\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/storage/storage.module.ts":
/*!*******************************************!*\
  !*** ./src/app/storage/storage.module.ts ***!
  \*******************************************/
/*! exports provided: StoragePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePageModule", function() { return StoragePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _storage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./storage.page */ "./src/app/storage/storage.page.ts");







const routes = [
    {
        path: '',
        component: _storage_page__WEBPACK_IMPORTED_MODULE_6__["StoragePage"]
    }
];
let StoragePageModule = class StoragePageModule {
};
StoragePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_storage_page__WEBPACK_IMPORTED_MODULE_6__["StoragePage"]]
    })
], StoragePageModule);



/***/ }),

/***/ "./src/app/storage/storage.page.scss":
/*!*******************************************!*\
  !*** ./src/app/storage/storage.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JhZ2Uvc3RvcmFnZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/storage/storage.page.ts":
/*!*****************************************!*\
  !*** ./src/app/storage/storage.page.ts ***!
  \*****************************************/
/*! exports provided: StoragePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoragePage", function() { return StoragePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let StoragePage = class StoragePage {
    constructor() { }
    ngOnInit() {
    }
};
StoragePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-storage',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./storage.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/storage/storage.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./storage.page.scss */ "./src/app/storage/storage.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], StoragePage);



/***/ })

}]);
//# sourceMappingURL=storage-storage-module-es2015.js.map