(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["icon-list-icon-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/icon-list/icon-list.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/icon-list/icon-list.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Icon List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n\r\n    <ion-list-header>\r\n      <ion-label>Classes</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-icon name='planet' slot=\"start\"></ion-icon>\r\n      <ion-label>Astronomy</ion-label>\r\n      <ion-note slot=\"end\">\r\n        To the moon\r\n      </ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-toggle checked=\"false\" slot=\"end\"></ion-toggle>\r\n      <ion-label>\r\n        Muggle Studies\r\n      </ion-label>\r\n      <ion-icon name='body' slot=\"start\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name='leaf' slot=\"start\"></ion-icon>\r\n      <ion-label>Herbology</ion-label>\r\n      <ion-icon name='rose' slot=\"end\" color=\"secondary\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name='flask' slot=\"start\"></ion-icon>\r\n      <ion-label>Potions</ion-label>\r\n      <ion-note slot=\"end\">\r\n        Poisonous\r\n      </ion-note>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n\r\n    <ion-list-header>\r\n      <ion-label>Activities</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Incantation</ion-label>\r\n      <ion-icon name='color-wand' slot=\"start\"></ion-icon>\r\n      <ion-note slot=\"end\">Crucio!</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-toggle checked=\"true\" slot=\"end\"></ion-toggle>\r\n      <ion-label>\r\n        Quidditch Practice\r\n      </ion-label>\r\n      <ion-icon name='brush' slot=\"start\"></ion-icon>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name='wine' slot=\"start\"></ion-icon>\r\n      <ion-label>Mead Drinking</ion-label>\r\n      <ion-note slot=\"end\">Yes please</ion-note>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n\r\n    <ion-list-header>\r\n      <ion-label>Friends</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-icon name='flash' slot=\"start\"></ion-icon>\r\n      <ion-label>Harry</ion-label>\r\n      <ion-note slot=\"end\">The boy who lived</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name='book' slot=\"start\"></ion-icon>\r\n      <ion-label>Hermoine</ion-label>\r\n      <ion-note slot=\"end\">Muggle-born</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon name='beer' slot=\"start\"></ion-icon>\r\n      <ion-label>Ron</ion-label>\r\n      <ion-note slot=\"end\">Brilliant!</ion-note>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/icon-list/icon-list.module.ts":
/*!***********************************************!*\
  !*** ./src/app/icon-list/icon-list.module.ts ***!
  \***********************************************/
/*! exports provided: IconListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconListPageModule", function() { return IconListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _icon_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon-list.page */ "./src/app/icon-list/icon-list.page.ts");







const routes = [
    {
        path: '',
        component: _icon_list_page__WEBPACK_IMPORTED_MODULE_6__["IconListPage"]
    }
];
let IconListPageModule = class IconListPageModule {
};
IconListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_icon_list_page__WEBPACK_IMPORTED_MODULE_6__["IconListPage"]]
    })
], IconListPageModule);



/***/ }),

/***/ "./src/app/icon-list/icon-list.page.scss":
/*!***********************************************!*\
  !*** ./src/app/icon-list/icon-list.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ljb24tbGlzdC9pY29uLWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/icon-list/icon-list.page.ts":
/*!*********************************************!*\
  !*** ./src/app/icon-list/icon-list.page.ts ***!
  \*********************************************/
/*! exports provided: IconListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconListPage", function() { return IconListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let IconListPage = class IconListPage {
    constructor() { }
    ngOnInit() {
    }
};
IconListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-icon-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./icon-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/icon-list/icon-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./icon-list.page.scss */ "./src/app/icon-list/icon-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], IconListPage);



/***/ })

}]);
//# sourceMappingURL=icon-list-icon-list-module-es2015.js.map