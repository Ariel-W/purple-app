(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-thumb-start-list-thumb-start-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-start/list-thumb-start.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-start/list-thumb-start.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>My Challenges</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item button>\r\n      <ion-thumbnail\r\n        slot=\"start\"\r\n        class=\"is-icon-thumbnail is-background-dark ion-align-self-start\"\r\n      >\r\n        <ion-icon name=\"archive\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Recycle</h2>\r\n        <p class=\"ion-text-wrap\">\r\n          [5x] Recycle an item and upload a selfie of your action.\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail\r\n        slot=\"start\"\r\n        class=\"is-icon-thumbnail is-background-success ion-align-self-start\"\r\n      >\r\n        <ion-icon name=\"folder-open\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Save Water - Shower</h2>\r\n        <p class=\"ion-text-wrap\">\r\n          [3x] Remember to turn the tap off when you don't need it during a\r\n          shower.\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail\r\n        slot=\"start\"\r\n        class=\"is-icon-thumbnail is-background-secondary ion-align-self-start\"\r\n      >\r\n        <ion-icon name=\"pie-chart\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Save Electricity - Lights</h2>\r\n        <p class=\"ion-text-wrap\">\r\n          [Full Week] Turn off lights in empty rooms in your home.\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <!-- <ion-item button>\r\n      <ion-thumbnail\r\n        slot=\"start\"\r\n        class=\"is-icon-thumbnail is-background-primary ion-align-self-start\"\r\n      >\r\n        <ion-icon name=\"person\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Profiles</h2>\r\n        <p class=\"ion-text-wrap\">\r\n          The Centers for Disease Control & Prevention on Saturday began\r\n          distributing cards at airports.\r\n        </p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail\r\n        slot=\"start\"\r\n        class=\"is-icon-thumbnail is-background-light ion-align-self-start\"\r\n      >\r\n        <ion-icon name=\"apps\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-start\">\r\n        <h2>Sign Up / Login</h2>\r\n        <p class=\"ion-text-wrap\">\r\n          The Myspace page defines the individual, his or her characteristics,\r\n          traits, personal choices.\r\n        </p>\r\n      </ion-label>\r\n    </ion-item> -->\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/list-thumb-start/list-thumb-start.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/list-thumb-start/list-thumb-start.module.ts ***!
  \*************************************************************/
/*! exports provided: ListThumbStartPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListThumbStartPageModule", function() { return ListThumbStartPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _list_thumb_start_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-thumb-start.page */ "./src/app/list-thumb-start/list-thumb-start.page.ts");







const routes = [
    {
        path: '',
        component: _list_thumb_start_page__WEBPACK_IMPORTED_MODULE_6__["ListThumbStartPage"]
    }
];
let ListThumbStartPageModule = class ListThumbStartPageModule {
};
ListThumbStartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_list_thumb_start_page__WEBPACK_IMPORTED_MODULE_6__["ListThumbStartPage"]]
    })
], ListThumbStartPageModule);



/***/ }),

/***/ "./src/app/list-thumb-start/list-thumb-start.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/list-thumb-start/list-thumb-start.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdGh1bWItc3RhcnQvbGlzdC10aHVtYi1zdGFydC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/list-thumb-start/list-thumb-start.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/list-thumb-start/list-thumb-start.page.ts ***!
  \***********************************************************/
/*! exports provided: ListThumbStartPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListThumbStartPage", function() { return ListThumbStartPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ListThumbStartPage = class ListThumbStartPage {
    constructor() { }
    ngOnInit() {
    }
};
ListThumbStartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-thumb-start',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-thumb-start.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-start/list-thumb-start.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-thumb-start.page.scss */ "./src/app/list-thumb-start/list-thumb-start.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ListThumbStartPage);



/***/ })

}]);
//# sourceMappingURL=list-thumb-start-list-thumb-start-module-es2015.js.map