(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["alt-sliding-list-alt-sliding-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/alt-sliding-list/alt-sliding-list.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alt-sliding-list/alt-sliding-list.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Sliding List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Busters</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/imgs/venkman.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Venkman</h2>\r\n          <p>Back off man, I'm a scientist.</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"light\">\r\n          <ion-icon ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          More\r\n        </ion-item-option>\r\n        <ion-item-option color=\"primary\">\r\n          <ion-icon name=\"chatbox-ellipses\"></ion-icon>\r\n          Text\r\n        </ion-item-option>\r\n        <ion-item-option color=\"secondary\">\r\n          <ion-icon name=\"call\"></ion-icon>\r\n          Call\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/imgs/spengler.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Egon</h2>\r\n          <p>We're gonna go full stream.</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"light\">\r\n          <ion-icon ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          More\r\n        </ion-item-option>\r\n        <ion-item-option color=\"primary\">\r\n          <ion-icon name=\"chatbox-ellipses\"></ion-icon>\r\n          Text\r\n        </ion-item-option>\r\n        <ion-item-option color=\"secondary\">\r\n          <ion-icon name=\"call\"></ion-icon>\r\n          Call\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/imgs/stantz.jpg\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Ray</h2>\r\n          <p>Ugly little spud, isn't he?</p>\r\n        </ion-label>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"light\">\r\n          <ion-icon ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          More\r\n        </ion-item-option>\r\n        <ion-item-option color=\"primary\">\r\n          <ion-icon name=\"chatbox-ellipses\"></ion-icon>\r\n          Text\r\n        </ion-item-option>\r\n        <ion-item-option color=\"secondary\">\r\n          <ion-icon name=\"call\"></ion-icon>\r\n          Call\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/alt-sliding-list/alt-sliding-list.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/alt-sliding-list/alt-sliding-list.module.ts ***!
  \*************************************************************/
/*! exports provided: AltSlidingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltSlidingListPageModule", function() { return AltSlidingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _alt_sliding_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alt-sliding-list.page */ "./src/app/alt-sliding-list/alt-sliding-list.page.ts");







const routes = [
    {
        path: '',
        component: _alt_sliding_list_page__WEBPACK_IMPORTED_MODULE_6__["AltSlidingListPage"]
    }
];
let AltSlidingListPageModule = class AltSlidingListPageModule {
};
AltSlidingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_alt_sliding_list_page__WEBPACK_IMPORTED_MODULE_6__["AltSlidingListPage"]]
    })
], AltSlidingListPageModule);



/***/ }),

/***/ "./src/app/alt-sliding-list/alt-sliding-list.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/alt-sliding-list/alt-sliding-list.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsdC1zbGlkaW5nLWxpc3QvYWx0LXNsaWRpbmctbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/alt-sliding-list/alt-sliding-list.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/alt-sliding-list/alt-sliding-list.page.ts ***!
  \***********************************************************/
/*! exports provided: AltSlidingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltSlidingListPage", function() { return AltSlidingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AltSlidingListPage = class AltSlidingListPage {
    constructor() { }
    ngOnInit() {
    }
};
AltSlidingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alt-sliding-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./alt-sliding-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/alt-sliding-list/alt-sliding-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./alt-sliding-list.page.scss */ "./src/app/alt-sliding-list/alt-sliding-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AltSlidingListPage);



/***/ })

}]);
//# sourceMappingURL=alt-sliding-list-alt-sliding-list-module-es2015.js.map