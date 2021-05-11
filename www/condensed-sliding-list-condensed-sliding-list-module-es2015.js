(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["condensed-sliding-list-condensed-sliding-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/condensed-sliding-list/condensed-sliding-list.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/condensed-sliding-list/condensed-sliding-list.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Condensed Sliding List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-searchbar placeholder=\"Search Chats\"></ion-searchbar>\r\n\r\n  <ion-list class=\"is-list-condensed\">\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/imgs/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Dean Potter</h2>\r\n          <p class=\"ion-text-wrap\">I want to talk about to things that are quite important to me.</p>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"is-condensed-note\">\r\n          <p class=\"ion-no-margin\">02:18 PM</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"light\">Archive</ion-item-option>\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"danger\">Delete</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/imgs/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Josephine Stevens</h2>\r\n          <p class=\"ion-text-wrap\">The thing is that I’m quite fond of love.</p>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"is-condensed-note\">\r\n          <p class=\"ion-no-margin\">09:14 PM</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"light\">Archive</ion-item-option>\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"danger\">Delete</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/imgs/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Richard Carroll</h2>\r\n          <p class=\"ion-text-wrap\">You sent a photo</p>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"is-condensed-note\">\r\n          <p class=\"ion-no-margin\">10:43 PM</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"light\">Archive</ion-item-option>\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"danger\">Delete</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/imgs/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Harry Jensen</h2>\r\n          <p class=\"ion-text-wrap\">But when it comes down to it…</p>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"is-condensed-note\">\r\n          <p class=\"ion-no-margin\">07:58 AM</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"light\">Archive</ion-item-option>\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"danger\">Delete</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    <ion-item-sliding>\r\n      <ion-item>\r\n        <ion-avatar slot=\"start\">\r\n          <img src=\"assets/imgs/avatar.png\">\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h2>Carl Dixon</h2>\r\n          <p class=\"ion-text-wrap\">I have a truck. It’s kind of a small truck, but I’m comfortable with myself so that’s okay.</p>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"is-condensed-note\">\r\n          <p class=\"ion-no-margin\">07:08 PM</p>\r\n        </div>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"light\">Archive</ion-item-option>\r\n        <ion-item-option class=\"ion-text-capitalize\" color=\"danger\">Delete</ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/condensed-sliding-list/condensed-sliding-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/condensed-sliding-list/condensed-sliding-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: CondensedSlidingListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondensedSlidingListPageModule", function() { return CondensedSlidingListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _condensed_sliding_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./condensed-sliding-list.page */ "./src/app/condensed-sliding-list/condensed-sliding-list.page.ts");







const routes = [
    {
        path: '',
        component: _condensed_sliding_list_page__WEBPACK_IMPORTED_MODULE_6__["CondensedSlidingListPage"]
    }
];
let CondensedSlidingListPageModule = class CondensedSlidingListPageModule {
};
CondensedSlidingListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_condensed_sliding_list_page__WEBPACK_IMPORTED_MODULE_6__["CondensedSlidingListPage"]]
    })
], CondensedSlidingListPageModule);



/***/ }),

/***/ "./src/app/condensed-sliding-list/condensed-sliding-list.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/condensed-sliding-list/condensed-sliding-list.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmRlbnNlZC1zbGlkaW5nLWxpc3QvY29uZGVuc2VkLXNsaWRpbmctbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/condensed-sliding-list/condensed-sliding-list.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/condensed-sliding-list/condensed-sliding-list.page.ts ***!
  \***********************************************************************/
/*! exports provided: CondensedSlidingListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondensedSlidingListPage", function() { return CondensedSlidingListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CondensedSlidingListPage = class CondensedSlidingListPage {
    constructor() { }
    ngOnInit() {
        // Select all option elements of the sliding list items and add style
        const hosts = document.querySelectorAll('.is-list-condensed ion-item-option');
        Array.from(hosts).forEach((host) => {
            const style = document.createElement('style');
            style.textContent = `
        button.button-native {
          font-weight: var(--is-button-native-font-weight);
        }
      `;
            host.shadowRoot.appendChild(style);
        });
    }
};
CondensedSlidingListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-condensed-sliding-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./condensed-sliding-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/condensed-sliding-list/condensed-sliding-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./condensed-sliding-list.page.scss */ "./src/app/condensed-sliding-list/condensed-sliding-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CondensedSlidingListPage);



/***/ })

}]);
//# sourceMappingURL=condensed-sliding-list-condensed-sliding-list-module-es2015.js.map