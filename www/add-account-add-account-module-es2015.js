(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-account-add-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-account/add-account.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-account/add-account.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Add an Account</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <ion-grid class=\"is-grid\">\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"is-tile is-tile-bordered ion-text-center\">\r\n        <div>\r\n          <ion-item lines=\"none\" routerLink=\"/addAccount\" detail=\"false\" class=\"ion-text-center\">\r\n            <ion-label class=\"ion-padding-vertical\">\r\n              <img src=\"assets/imgs/gmail.png\"/>\r\n              <p class=\"is-tile-caption\">\r\n                Gmail\r\n              </p>\r\n            </ion-label>\r\n          </ion-item> \r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"is-tile is-tile-bordered ion-text-center\">\r\n         <div>\r\n            <ion-item lines=\"none\" routerLink=\"/addAccount\" detail=\"false\" class=\"ion-text-center\">\r\n              <ion-label class=\"ion-padding-vertical\">\r\n                <img src=\"assets/imgs/yahoo.png\"/>\r\n                <p class=\"is-tile-caption\">\r\n                  Yahoo\r\n                </p>\r\n            </ion-label>\r\n          </ion-item> \r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"is-tile is-tile-bordered ion-text-center\">\r\n         <div>\r\n            <ion-item lines=\"none\" routerLink=\"/addAccount\" detail=\"false\" class=\"ion-text-center\">\r\n              <ion-label class=\"ion-padding-vertical\">\r\n                <img src=\"assets/imgs/mail-ru.png\"/>\r\n                <p class=\"is-tile-caption\">\r\n                  Mail.ru\r\n                </p>\r\n            </ion-label>\r\n          </ion-item> \r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"is-tile is-tile-bordered ion-text-center\">\r\n         <div>\r\n            <ion-item lines=\"none\" routerLink=\"/addAccount\" detail=\"false\" class=\"ion-text-center\">\r\n              <ion-label class=\"ion-padding-vertical\">\r\n                <img src=\"assets/imgs/yandex.png\"/>\r\n                <p class=\"is-tile-caption\">\r\n                  Yandex\r\n                </p>\r\n            </ion-label>\r\n          </ion-item> \r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"is-tile is-tile-bordered ion-text-center\">\r\n         <div>\r\n            <ion-item lines=\"none\" routerLink=\"/addAccount\" detail=\"false\" class=\"ion-text-center\">\r\n              <ion-label class=\"ion-padding-vertical\">\r\n                <img src=\"assets/imgs/mail.png\"/>\r\n                <p class=\"is-tile-caption\">\r\n                  IMAP\r\n                </p>\r\n            </ion-label>\r\n          </ion-item> \r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"is-tile is-tile-bordered ion-text-center\">\r\n         <div>\r\n            <ion-item lines=\"none\" routerLink=\"/addAccount\" detail=\"false\" class=\"ion-text-center\">\r\n              <ion-label class=\"ion-padding-vertical\">\r\n                <img src=\"assets/imgs/outlook.png\"/>\r\n                <p class=\"is-tile-caption\">\r\n                  Outlook\r\n                </p>\r\n            </ion-label>\r\n          </ion-item> \r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row>\r\n      <ion-col size=\"4\" class=\"is-tile is-tile-bordered ion-text-center\">\r\n         <div>\r\n            <ion-item lines=\"none\" routerLink=\"/addAccount\" detail=\"false\" class=\"ion-text-center\">\r\n              <ion-label class=\"ion-padding-vertical\">\r\n                <img src=\"assets/imgs/aol.png\"/>\r\n                <p class=\"is-tile-caption\">\r\n                  Aol Mail\r\n                </p>\r\n            </ion-label>\r\n          </ion-item> \r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\" class=\"is-tile is-tile-bordered ion-text-center\">\r\n         <div>\r\n            <ion-item lines=\"none\" routerLink=\"/addAccount\" detail=\"false\" class=\"ion-text-center\">\r\n              <ion-label class=\"ion-padding-vertical\">\r\n                <img src=\"assets/imgs/icloud.png\"/>\r\n                <p class=\"is-tile-caption\">\r\n                  iCloud Mail\r\n                </p>\r\n            </ion-label>\r\n          </ion-item> \r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/add-account/add-account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/add-account/add-account.module.ts ***!
  \***************************************************/
/*! exports provided: AddAccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountPageModule", function() { return AddAccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-account.page */ "./src/app/add-account/add-account.page.ts");







const routes = [
    {
        path: '',
        component: _add_account_page__WEBPACK_IMPORTED_MODULE_6__["AddAccountPage"]
    }
];
let AddAccountPageModule = class AddAccountPageModule {
};
AddAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_add_account_page__WEBPACK_IMPORTED_MODULE_6__["AddAccountPage"]]
    })
], AddAccountPageModule);



/***/ }),

/***/ "./src/app/add-account/add-account.page.scss":
/*!***************************************************!*\
  !*** ./src/app/add-account/add-account.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-col div img {\n  background: #EEF3F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9hZGQtYWNjb3VudC9hZGQtYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL2FkZC1hY2NvdW50L2FkZC1hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hZGQtYWNjb3VudC9hZGQtYWNjb3VudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29sIGRpdiBpbWcge1xyXG4gIGJhY2tncm91bmQ6ICNFRUYzRjU7XHJcbn1cclxuIiwiaW9uLWNvbCBkaXYgaW1nIHtcbiAgYmFja2dyb3VuZDogI0VFRjNGNTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/add-account/add-account.page.ts":
/*!*************************************************!*\
  !*** ./src/app/add-account/add-account.page.ts ***!
  \*************************************************/
/*! exports provided: AddAccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAccountPage", function() { return AddAccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AddAccountPage = class AddAccountPage {
    constructor() { }
    ngOnInit() {
    }
};
AddAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-account.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-account/add-account.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-account.page.scss */ "./src/app/add-account/add-account.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AddAccountPage);



/***/ })

}]);
//# sourceMappingURL=add-account-add-account-module-es2015.js.map