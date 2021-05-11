(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-thumb-end-list-thumb-end-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-end/list-thumb-end.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-end/list-thumb-end.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Thumbnail List Reversed</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"end\" class=\"is-icon-thumbnail is-background-dark ion-align-self-start\">\r\n        <ion-icon name=\"archive\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Mailbox</h2>\r\n        <p class=\"ion-text-wrap\">Earth than it’s own satellite, the moon. When you think about it, we regard the moon with such powerful.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"end\" class=\"is-icon-thumbnail is-background-success ion-align-self-start\">\r\n        <ion-icon name=\"folder-open\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Money</h2>\r\n        <p class=\"ion-text-wrap\">Pain can be defined quite simply as a symptom of some physical hurt or disorder.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"end\" class=\"is-icon-thumbnail is-background-secondary ion-align-self-start\">\r\n        <ion-icon name=\"pie-chart\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Statistics</h2>\r\n        <p class=\"ion-text-wrap\">Summer is often synonymous with beaches, ballparks and barbecues, all offering tempting snacks.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"end\" class=\"is-icon-thumbnail is-background-primary ion-align-self-start\">\r\n        <ion-icon name=\"person\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Profiles</h2>\r\n        <p class=\"ion-text-wrap\">The Centers for Disease Control & Prevention on Saturday began distributing cards at airports.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"end\" class=\"is-icon-thumbnail is-background-light ion-align-self-start\">\r\n        <ion-icon name=\"apps\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Sign Up / Login</h2>\r\n        <p class=\"ion-text-wrap\">The Myspace page defines the individual, his or her characteristics, traits, personal choices.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/list-thumb-end/list-thumb-end.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/list-thumb-end/list-thumb-end.module.ts ***!
  \*********************************************************/
/*! exports provided: ListThumbEndPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListThumbEndPageModule", function() { return ListThumbEndPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_thumb_end_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-thumb-end.page */ "./src/app/list-thumb-end/list-thumb-end.page.ts");







const routes = [
    {
        path: '',
        component: _list_thumb_end_page__WEBPACK_IMPORTED_MODULE_6__["ListThumbEndPage"]
    }
];
let ListThumbEndPageModule = class ListThumbEndPageModule {
};
ListThumbEndPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_list_thumb_end_page__WEBPACK_IMPORTED_MODULE_6__["ListThumbEndPage"]]
    })
], ListThumbEndPageModule);



/***/ }),

/***/ "./src/app/list-thumb-end/list-thumb-end.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/list-thumb-end/list-thumb-end.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdGh1bWItZW5kL2xpc3QtdGh1bWItZW5kLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/list-thumb-end/list-thumb-end.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/list-thumb-end/list-thumb-end.page.ts ***!
  \*******************************************************/
/*! exports provided: ListThumbEndPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListThumbEndPage", function() { return ListThumbEndPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListThumbEndPage = class ListThumbEndPage {
    constructor() { }
    ngOnInit() {
    }
};
ListThumbEndPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-thumb-end',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-thumb-end.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-end/list-thumb-end.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-thumb-end.page.scss */ "./src/app/list-thumb-end/list-thumb-end.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ListThumbEndPage);



/***/ })

}]);
//# sourceMappingURL=list-thumb-end-list-thumb-end-module-es2015.js.map