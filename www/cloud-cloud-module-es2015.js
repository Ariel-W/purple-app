(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cloud-cloud-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cloud/cloud.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cloud/cloud.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Cloud</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"is-list-condensed\">\r\n    <ion-item>\r\n      <div slot=\"start\" class=\"ion-no-margin\">\r\n        <img src=\"assets/imgs/folder.png\">\r\n      </div>\r\n      <ion-label>\r\n        <h2>Movies</h2>\r\n        <p>23 files</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons\">\r\n        <ion-checkbox></ion-checkbox>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div slot=\"start\" class=\"ion-no-margin\">\r\n        <img src=\"assets/imgs/sked.png\">\r\n      </div>\r\n      <ion-label>\r\n        <h2>AwareMobile_ver2</h2>\r\n        <p>464.3mb • zip • April 19, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons\">\r\n        <ion-checkbox></ion-checkbox>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div slot=\"start\" class=\"ion-no-margin\">\r\n        <img src=\"assets/imgs/photos.png\">\r\n      </div>\r\n      <ion-label>\r\n        <h2>Photos</h2>\r\n        <p>92 890 files</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons\">\r\n        <ion-checkbox></ion-checkbox>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div slot=\"start\" class=\"ion-no-margin\">\r\n        <img src=\"assets/imgs/song.png\">\r\n      </div>\r\n      <ion-label>\r\n        <h2>R.E.M-LosingMyReligion</h2>\r\n        <p>3.4mb • mp3 • April 20, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons\">\r\n        <ion-checkbox></ion-checkbox>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div slot=\"start\" class=\"ion-no-margin\">\r\n        <img src=\"assets/imgs/mp4.png\">\r\n      </div>\r\n      <ion-label>\r\n        <h2>Martian_HDRip</h2>\r\n        <p>1.3gb • mp4 • April 3, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons\">\r\n        <ion-checkbox></ion-checkbox>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <div slot=\"start\" class=\"ion-no-margin\">\r\n        <img src=\"assets/imgs/jpg.png\">\r\n      </div>\r\n      <ion-label>\r\n        <h2>Sked_Dribble_Shot</h2>\r\n        <p>97kb • jpg • September 2, 2015</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons\">\r\n        <ion-checkbox></ion-checkbox>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/cloud/cloud.module.ts":
/*!***************************************!*\
  !*** ./src/app/cloud/cloud.module.ts ***!
  \***************************************/
/*! exports provided: CloudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudPageModule", function() { return CloudPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _cloud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cloud.page */ "./src/app/cloud/cloud.page.ts");







const routes = [
    {
        path: '',
        component: _cloud_page__WEBPACK_IMPORTED_MODULE_6__["CloudPage"]
    }
];
let CloudPageModule = class CloudPageModule {
};
CloudPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_cloud_page__WEBPACK_IMPORTED_MODULE_6__["CloudPage"]]
    })
], CloudPageModule);



/***/ }),

/***/ "./src/app/cloud/cloud.page.scss":
/*!***************************************!*\
  !*** ./src/app/cloud/cloud.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list ion-item div[slot=start] {\n  height: 48px;\n  width: 55px;\n  display: flex;\n  padding-right: 8px;\n}\nion-list ion-item div[slot=start] img {\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9jbG91ZC9jbG91ZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Nsb3VkL2Nsb3VkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURDRTtFQUNFLHNCQUFBO0tBQUEsbUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2Nsb3VkL2Nsb3VkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IGlvbi1pdGVtIGRpdltzbG90PXN0YXJ0XSB7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZy1yaWdodDogOHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbn1cclxuIiwiaW9uLWxpc3QgaW9uLWl0ZW0gZGl2W3Nsb3Q9c3RhcnRdIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuaW9uLWxpc3QgaW9uLWl0ZW0gZGl2W3Nsb3Q9c3RhcnRdIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59Il19 */");

/***/ }),

/***/ "./src/app/cloud/cloud.page.ts":
/*!*************************************!*\
  !*** ./src/app/cloud/cloud.page.ts ***!
  \*************************************/
/*! exports provided: CloudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloudPage", function() { return CloudPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CloudPage = class CloudPage {
    constructor() { }
    ngOnInit() {
        // Select all checkboxes of the list and add style
        const hosts = document.querySelectorAll('.is-list-vertical-buttons ion-checkbox');
        Array.from(hosts).forEach((host) => {
            const style = document.createElement('style');
            style.textContent = `
        button {
          left: var(--is-checkbox-overlay-left);
        }
      `;
            host.shadowRoot.appendChild(style);
        });
    }
};
CloudPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cloud',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cloud.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cloud/cloud.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cloud.page.scss */ "./src/app/cloud/cloud.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CloudPage);



/***/ })

}]);
//# sourceMappingURL=cloud-cloud-module-es2015.js.map