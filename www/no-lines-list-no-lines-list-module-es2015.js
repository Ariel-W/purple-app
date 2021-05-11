(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["no-lines-list-no-lines-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/no-lines-list/no-lines-list.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/no-lines-list/no-lines-list.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Lines List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"none\">\r\n    <ion-item *ngFor=\"let item of items\">\r\n      <ion-label>{{ item }}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/no-lines-list/no-lines-list.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/no-lines-list/no-lines-list.module.ts ***!
  \*******************************************************/
/*! exports provided: NoLinesListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoLinesListPageModule", function() { return NoLinesListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _no_lines_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./no-lines-list.page */ "./src/app/no-lines-list/no-lines-list.page.ts");







const routes = [
    {
        path: '',
        component: _no_lines_list_page__WEBPACK_IMPORTED_MODULE_6__["NoLinesListPage"]
    }
];
let NoLinesListPageModule = class NoLinesListPageModule {
};
NoLinesListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_no_lines_list_page__WEBPACK_IMPORTED_MODULE_6__["NoLinesListPage"]]
    })
], NoLinesListPageModule);



/***/ }),

/***/ "./src/app/no-lines-list/no-lines-list.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/no-lines-list/no-lines-list.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vLWxpbmVzLWxpc3Qvbm8tbGluZXMtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/no-lines-list/no-lines-list.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/no-lines-list/no-lines-list.page.ts ***!
  \*****************************************************/
/*! exports provided: NoLinesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoLinesListPage", function() { return NoLinesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NoLinesListPage = class NoLinesListPage {
    constructor() {
        this.items = [
            'Pokémon Yellow',
            'Super Metroid',
            'Mega Man X',
            'The Legend of Zelda',
            'Pac-Man',
            'Super Mario World',
            'Street Fighter II',
            'Half Life',
            'Final Fantasy VII',
            'Star Fox',
            'Tetris',
            'Donkey Kong III',
            'GoldenEye 007',
            'Doom',
            'Fallout',
            'GTA',
            'Halo'
        ];
    }
    ngOnInit() {
    }
};
NoLinesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-lines-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./no-lines-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/no-lines-list/no-lines-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./no-lines-list.page.scss */ "./src/app/no-lines-list/no-lines-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NoLinesListPage);



/***/ })

}]);
//# sourceMappingURL=no-lines-list-no-lines-list-module-es2015.js.map