(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alt-thumbnail-list-alt-thumbnail-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alt-thumbnail-list/alt-thumbnail-list.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alt-thumbnail-list/alt-thumbnail-list.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Thumbnail List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/imgs/thumbnail-totoro.png\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>My Neighbor Totoro</h2>\r\n        <p>Hayao Miyazaki • 1988</p>\r\n      </ion-label>\r\n      <ion-button fill=\"clear\" slot=\"end\">View</ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/imgs/thumbnail-rotla.png\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Raiders of the Lost Ark</h2>\r\n        <p>Steven Spielberg • 1981</p>\r\n      </ion-label>\r\n      <ion-button fill=\"clear\" slot=\"end\">View</ion-button>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/imgs/thumbnail-ghostbusters.png\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Ghostbusters</h2>\r\n        <p>Ivan Reitman • 1984</p>\r\n      </ion-label>\r\n      <ion-button fill=\"clear\" slot=\"end\">View</ion-button>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/alt-thumbnail-list/alt-thumbnail-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/alt-thumbnail-list/alt-thumbnail-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: AltThumbnailListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltThumbnailListPageModule", function() { return AltThumbnailListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _alt_thumbnail_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alt-thumbnail-list.page */ "./src/app/alt-thumbnail-list/alt-thumbnail-list.page.ts");







const routes = [
    {
        path: '',
        component: _alt_thumbnail_list_page__WEBPACK_IMPORTED_MODULE_6__["AltThumbnailListPage"]
    }
];
let AltThumbnailListPageModule = class AltThumbnailListPageModule {
};
AltThumbnailListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_alt_thumbnail_list_page__WEBPACK_IMPORTED_MODULE_6__["AltThumbnailListPage"]]
    })
], AltThumbnailListPageModule);



/***/ }),

/***/ "./src/app/alt-thumbnail-list/alt-thumbnail-list.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/alt-thumbnail-list/alt-thumbnail-list.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsdC10aHVtYm5haWwtbGlzdC9hbHQtdGh1bWJuYWlsLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/alt-thumbnail-list/alt-thumbnail-list.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/alt-thumbnail-list/alt-thumbnail-list.page.ts ***!
  \***************************************************************/
/*! exports provided: AltThumbnailListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltThumbnailListPage", function() { return AltThumbnailListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AltThumbnailListPage = class AltThumbnailListPage {
    constructor() { }
    ngOnInit() {
    }
};
AltThumbnailListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alt-thumbnail-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alt-thumbnail-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alt-thumbnail-list/alt-thumbnail-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alt-thumbnail-list.page.scss */ "./src/app/alt-thumbnail-list/alt-thumbnail-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AltThumbnailListPage);



/***/ })

}]);
//# sourceMappingURL=alt-thumbnail-list-alt-thumbnail-list-module-es2015.js.map