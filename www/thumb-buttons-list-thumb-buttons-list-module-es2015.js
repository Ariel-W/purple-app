(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["thumb-buttons-list-thumb-buttons-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/thumb-buttons-list/thumb-buttons-list.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/thumb-buttons-list/thumb-buttons-list.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Buttons and Thumb List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"is-list-item-start-buttons-end\">\r\n    <ion-list-header>\r\n      <ion-label>Basic List</ion-label>\r\n    </ion-list-header>\r\n    <ion-item class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon name=\"document\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-item-start-buttons-end-title\">SuperAgency_Present</p>\r\n        <p>pdf • 34.3mb</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-item-start-buttons-end-button-group\">\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"eye\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon name=\"document\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-item-start-buttons-end-title\">SuperAgency_Present</p>\r\n        <p>pdf • 34.3mb</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-item-start-buttons-end-button-group\">\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"eye\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon name=\"document\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-item-start-buttons-end-title\">SuperAgency_Present</p>\r\n        <p>pdf • 34.3mb</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-item-start-buttons-end-button-group\">\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"eye\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon name=\"document\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-item-start-buttons-end-title\">SuperAgency_Present</p>\r\n        <p>pdf • 34.3mb</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-item-start-buttons-end-button-group\">\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"eye\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon name=\"document\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-item-start-buttons-end-title\">SuperAgency_Present</p>\r\n        <p>pdf • 34.3mb</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-item-start-buttons-end-button-group\">\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"eye\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/thumb-buttons-list/thumb-buttons-list.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/thumb-buttons-list/thumb-buttons-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: ThumbButtonsListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbButtonsListPageModule", function() { return ThumbButtonsListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _thumb_buttons_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thumb-buttons-list.page */ "./src/app/thumb-buttons-list/thumb-buttons-list.page.ts");







const routes = [
    {
        path: '',
        component: _thumb_buttons_list_page__WEBPACK_IMPORTED_MODULE_6__["ThumbButtonsListPage"]
    }
];
let ThumbButtonsListPageModule = class ThumbButtonsListPageModule {
};
ThumbButtonsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_thumb_buttons_list_page__WEBPACK_IMPORTED_MODULE_6__["ThumbButtonsListPage"]]
    })
], ThumbButtonsListPageModule);



/***/ }),

/***/ "./src/app/thumb-buttons-list/thumb-buttons-list.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/thumb-buttons-list/thumb-buttons-list.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RodW1iLWJ1dHRvbnMtbGlzdC90aHVtYi1idXR0b25zLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/thumb-buttons-list/thumb-buttons-list.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/thumb-buttons-list/thumb-buttons-list.page.ts ***!
  \***************************************************************/
/*! exports provided: ThumbButtonsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbButtonsListPage", function() { return ThumbButtonsListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ThumbButtonsListPage = class ThumbButtonsListPage {
    constructor() { }
    ngOnInit() {
    }
};
ThumbButtonsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-thumb-buttons-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./thumb-buttons-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/thumb-buttons-list/thumb-buttons-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./thumb-buttons-list.page.scss */ "./src/app/thumb-buttons-list/thumb-buttons-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ThumbButtonsListPage);



/***/ })

}]);
//# sourceMappingURL=thumb-buttons-list-thumb-buttons-list-module-es2015.js.map