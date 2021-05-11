(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["albums-albums-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/albums/albums.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/albums/albums.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Our Challenges</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"is-tiles is-card-unbordered\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-item\r\n            routerLink=\"/albums\"\r\n            detail=\"false\"\r\n            lines=\"none\"\r\n            class=\"ion-no-padding\"\r\n          >\r\n            <ion-label class=\"ion-no-margin\">\r\n              <div>\r\n                <img src=\"assets/imgs/album1.jpg\" />\r\n                <ion-fab slot=\"fixed\">\r\n                  <ion-fab-button fill=\"outline\" size=\"small\"\r\n                    ><ion-icon name=\"play\"></ion-icon\r\n                  ></ion-fab-button>\r\n                </ion-fab>\r\n              </div>\r\n              <ion-card-content class=\"ion-no-padding\">\r\n                <h2>Recycle Your Bottles Challenge</h2>\r\n                <h4>Learn More</h4>\r\n              </ion-card-content>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-item\r\n            routerLink=\"/albums\"\r\n            detail=\"false\"\r\n            lines=\"none\"\r\n            class=\"ion-no-padding\"\r\n          >\r\n            <ion-label class=\"ion-no-margin\">\r\n              <div>\r\n                <img src=\"assets/imgs/album2.jpg\" />\r\n                <ion-fab slot=\"fixed\">\r\n                  <ion-fab-button fill=\"outline\" size=\"small\"\r\n                    ><ion-icon name=\"play\"></ion-icon\r\n                  ></ion-fab-button>\r\n                </ion-fab>\r\n              </div>\r\n              <ion-card-content class=\"ion-no-padding\">\r\n                <h2>Save Electricity Challenge</h2>\r\n                <h4>Learn More</h4>\r\n              </ion-card-content>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-item\r\n            routerLink=\"/albums\"\r\n            detail=\"false\"\r\n            lines=\"none\"\r\n            class=\"ion-no-padding\"\r\n          >\r\n            <ion-label class=\"ion-no-margin\">\r\n              <div>\r\n                <img src=\"assets/imgs/album3.jpg\" />\r\n                <ion-fab slot=\"fixed\">\r\n                  <ion-fab-button fill=\"outline\" size=\"small\"\r\n                    ><ion-icon name=\"play\"></ion-icon\r\n                  ></ion-fab-button>\r\n                </ion-fab>\r\n              </div>\r\n              <ion-card-content class=\"ion-no-padding\">\r\n                <h2>Save Water Challenge</h2>\r\n                <h4>Learn More</h4>\r\n              </ion-card-content>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-item\r\n            routerLink=\"/albums\"\r\n            detail=\"false\"\r\n            lines=\"none\"\r\n            class=\"ion-no-padding\"\r\n          >\r\n            <ion-label class=\"ion-no-margin\">\r\n              <div>\r\n                <img src=\"assets/imgs/album4.jpg\" />\r\n                <ion-fab slot=\"fixed\">\r\n                  <ion-fab-button fill=\"outline\" size=\"small\"\r\n                    ><ion-icon name=\"play\"></ion-icon\r\n                  ></ion-fab-button>\r\n                </ion-fab>\r\n              </div>\r\n              <ion-card-content class=\"ion-no-padding\">\r\n                <h2>Recycle Containers Challenge</h2>\r\n                <h4>Learn More</h4>\r\n              </ion-card-content>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/albums/albums.module.ts":
/*!*****************************************!*\
  !*** ./src/app/albums/albums.module.ts ***!
  \*****************************************/
/*! exports provided: AlbumsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsPageModule", function() { return AlbumsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _albums_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./albums.page */ "./src/app/albums/albums.page.ts");







const routes = [
    {
        path: '',
        component: _albums_page__WEBPACK_IMPORTED_MODULE_6__["AlbumsPage"]
    }
];
let AlbumsPageModule = class AlbumsPageModule {
};
AlbumsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_albums_page__WEBPACK_IMPORTED_MODULE_6__["AlbumsPage"]]
    })
], AlbumsPageModule);



/***/ }),

/***/ "./src/app/albums/albums.page.scss":
/*!*****************************************!*\
  !*** ./src/app/albums/albums.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card ion-item {\n  --inner-padding-end: 0;\n  --inner-padding-start: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9hbGJ1bXMvYWxidW1zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWxidW1zL2FsYnVtcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hbGJ1bXMvYWxidW1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIGlvbi1pdGVtIHtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcclxufVxyXG4iLCJpb24tY2FyZCBpb24taXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1zdGFydDogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/albums/albums.page.ts":
/*!***************************************!*\
  !*** ./src/app/albums/albums.page.ts ***!
  \***************************************/
/*! exports provided: AlbumsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsPage", function() { return AlbumsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AlbumsPage = class AlbumsPage {
    constructor() { }
    ngOnInit() {
    }
};
AlbumsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-albums',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./albums.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/albums/albums.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./albums.page.scss */ "./src/app/albums/albums.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AlbumsPage);



/***/ })

}]);
//# sourceMappingURL=albums-albums-module-es2015.js.map