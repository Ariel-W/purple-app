(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordered-list-ordered-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ordered-list/ordered-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ordered-list/ordered-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Ordered List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-hero\">\r\n    <h1 class=\"ion-padding-start ion-padding-end ion-padding-top\">Mark a Plan That Handy for You</h1>\r\n\r\n    <p class=\"ion-padding-start ion-padding-end ion-padding-bottom\">\r\n      If you own an Iphone, you’ve probably already worked out how much.\r\n    </p>\r\n  </div>\r\n\r\n  <ion-list class=\"is-list-ordered ion-padding\">\r\n    <ion-item class=\"is-item-active\">\r\n      <ion-thumbnail slot=\"start\" class=\"is-order-number ion-align-self-start\">\r\n        <span>1</span>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Start</h2>\r\n        <p class=\"ion-text-wrap\">Planning to visit Las Vegas or any other vacational resort where casinos are.</p>\r\n      </ion-label>\r\n      <span slot=\"end\" class=\"is-item-info ion-align-self-start\">\r\n        Free\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\" class=\"is-order-number ion-align-self-start\">\r\n        <span>2</span>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Professional</h2>\r\n        <p class=\"ion-text-wrap\">Classified advertising is a form of advertising that is particularly common.</p>\r\n      </ion-label>\r\n      <span slot=\"end\" class=\"is-item-info ion-align-self-start\">\r\n        $29/m\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\" class=\"is-order-number ion-align-self-start\">\r\n        <span>3</span>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Business</h2>\r\n        <p class=\"ion-text-wrap\">This article is floated online with an aim to help you find the best dvd printing solution.</p>\r\n      </ion-label>\r\n      <span slot=\"end\" class=\"is-item-info ion-align-self-start\">\r\n        $49/m\r\n      </span>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/ordered-list/ordered-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/ordered-list/ordered-list.module.ts ***!
  \*****************************************************/
/*! exports provided: OrderedListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedListPageModule", function() { return OrderedListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ordered_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ordered-list.page */ "./src/app/ordered-list/ordered-list.page.ts");







const routes = [
    {
        path: '',
        component: _ordered_list_page__WEBPACK_IMPORTED_MODULE_6__["OrderedListPage"]
    }
];
let OrderedListPageModule = class OrderedListPageModule {
};
OrderedListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ordered_list_page__WEBPACK_IMPORTED_MODULE_6__["OrderedListPage"]]
    })
], OrderedListPageModule);



/***/ }),

/***/ "./src/app/ordered-list/ordered-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/ordered-list/ordered-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyZWQtbGlzdC9vcmRlcmVkLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ordered-list/ordered-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/ordered-list/ordered-list.page.ts ***!
  \***************************************************/
/*! exports provided: OrderedListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderedListPage", function() { return OrderedListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderedListPage = class OrderedListPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderedListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordered-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ordered-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ordered-list/ordered-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ordered-list.page.scss */ "./src/app/ordered-list/ordered-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], OrderedListPage);



/***/ })

}]);
//# sourceMappingURL=ordered-list-ordered-list-module-es2015.js.map