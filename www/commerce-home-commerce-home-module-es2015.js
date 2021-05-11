(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commerce-home-commerce-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/commerce-home/commerce-home.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/commerce-home/commerce-home.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"is-header-logo-centered ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/commerce-home-1.jpg\"/>\r\n      <div class=\"slide-caption\">\r\n        <div class=\"slide-caption-inner\">\r\n          <h2>1st slide title</h2>\r\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed.</p>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/commerce-home-2.jpg\"/>\r\n      <div class=\"slide-caption\">\r\n        <div class=\"slide-caption-inner\">\r\n          <h2>2nd slide title</h2>\r\n          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed.</p>\r\n        </div>\r\n      </div>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <ion-row class=\"ion-align-items-center\">\r\n    <ion-col size=\"6\" offset=\"3\" class=\"ion-text-center\">\r\n      <h3>Shop by product</h3>\r\n    </ion-col>\r\n    <ion-col size=\"3\" class=\"ion-text-end ion-padding\">\r\n      <p><a routerLink=\"/commerce-home\">All items</a></p>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-grid class=\"is-grid-bordered ion-no-padding\">\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-item detail=\"false\" routerLink=\"/commerce-home\" lines=\"none\">\r\n          <ion-label class=\"ion-text-center ion-padding-top ion-padding-bottom\">\r\n            <img src=\"assets/imgs/prod1.png\">\r\n            <p class=\"is-product-category\">Accessories</p>\r\n            <p class=\"is-products-count\">12 products</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-item detail=\"false\" routerLink=\"/commerce-home\" lines=\"none\">\r\n          <ion-label class=\"ion-text-center ion-padding-top ion-padding-bottom\">\r\n            <img src=\"assets/imgs/prod2.png\">\r\n            <p class=\"is-product-category\">Accessories</p>\r\n            <p class=\"is-products-count\">12 products</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-item detail=\"false\" routerLink=\"/commerce-home\" lines=\"none\">\r\n          <ion-label class=\"ion-text-center ion-padding-top ion-padding-bottom\">\r\n            <img src=\"assets/imgs/prod3.png\">\r\n            <p class=\"is-product-category\">Accessories</p>\r\n            <p class=\"is-products-count\">12 products</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-item detail=\"false\" routerLink=\"/commerce-home\" lines=\"none\">\r\n          <ion-label class=\"ion-text-center ion-padding-top ion-padding-bottom\">\r\n            <img src=\"assets/imgs/prod4.png\">\r\n            <p class=\"is-product-category\">Accessories</p>\r\n            <p class=\"is-products-count\">12 products</p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/commerce-home/commerce-home.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/commerce-home/commerce-home.module.ts ***!
  \*******************************************************/
/*! exports provided: CommerceHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommerceHomePageModule", function() { return CommerceHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _commerce_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commerce-home.page */ "./src/app/commerce-home/commerce-home.page.ts");







const routes = [
    {
        path: '',
        component: _commerce_home_page__WEBPACK_IMPORTED_MODULE_6__["CommerceHomePage"]
    }
];
let CommerceHomePageModule = class CommerceHomePageModule {
};
CommerceHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_commerce_home_page__WEBPACK_IMPORTED_MODULE_6__["CommerceHomePage"]]
    })
], CommerceHomePageModule);



/***/ }),

/***/ "./src/app/commerce-home/commerce-home.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/commerce-home/commerce-home.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-grid-bordered .is-product-category {\n  font-size: 18px;\n  color: var(--ion-color-is-text-dark);\n  margin-bottom: 0.5em;\n}\n.is-grid-bordered .is-products-count {\n  color: var(--ion-color-is-mute-dark);\n  font-size: 18px;\n}\n.slide-caption {\n  position: absolute;\n  padding-bottom: 80px;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background: #020024;\n  background: linear-gradient(0deg, #020024 0%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);\n  display: flex;\n  align-items: flex-end;\n}\n.slide-caption-inner {\n  margin: 0 auto;\n}\n.slide-caption h2 {\n  font-size: 32px;\n  color: #fff;\n  padding: 0 1rem;\n}\n.slide-caption p {\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  padding: 0 1rem;\n}\nh3 {\n  font-size: 18px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9jb21tZXJjZS1ob21lL2NvbW1lcmNlLWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9jb21tZXJjZS1ob21lL2NvbW1lcmNlLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7QUNBSjtBREVFO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0FDQUo7QURHQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJGQUFBO0VBRUEsYUFBQTtFQUVBLHFCQUFBO0FDQUY7QURFQTtFQUNFLGNBQUE7QUNDRjtBRENBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRUY7QURBQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNHRjtBRERBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC9jb21tZXJjZS1ob21lL2NvbW1lcmNlLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLWdyaWQtYm9yZGVyZWQge1xyXG4gIC5pcy1wcm9kdWN0LWNhdGVnb3J5IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtdGV4dC1kYXJrKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG4gIH1cclxuICAuaXMtcHJvZHVjdHMtY291bnQge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWRhcmspO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG4uc2xpZGUtY2FwdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMiwgMCwgMzYsIDEpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNykgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMTAwJSk7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxufVxyXG4uc2xpZGUtY2FwdGlvbi1pbm5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLnNsaWRlLWNhcHRpb24gaDIge1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBwYWRkaW5nOiAwIDFyZW07XHJcbn1cclxuLnNsaWRlLWNhcHRpb24gcCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XHJcbiAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcbmgzIHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4iLCIuaXMtZ3JpZC1ib3JkZXJlZCAuaXMtcHJvZHVjdC1jYXRlZ29yeSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy10ZXh0LWRhcmspO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5pcy1ncmlkLWJvcmRlcmVkIC5pcy1wcm9kdWN0cy1jb3VudCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1kYXJrKTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uc2xpZGUtY2FwdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogIzAyMDAyNDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsICMwMjAwMjQgMCUsIHJnYmEoMCwgMCwgMCwgMC43KSAwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLnNsaWRlLWNhcHRpb24taW5uZXIge1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnNsaWRlLWNhcHRpb24gaDIge1xuICBmb250LXNpemU6IDMycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwIDFyZW07XG59XG5cbi5zbGlkZS1jYXB0aW9uIHAge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIHBhZGRpbmc6IDAgMXJlbTtcbn1cblxuaDMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */");

/***/ }),

/***/ "./src/app/commerce-home/commerce-home.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/commerce-home/commerce-home.page.ts ***!
  \*****************************************************/
/*! exports provided: CommerceHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommerceHomePage", function() { return CommerceHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CommerceHomePage = class CommerceHomePage {
    constructor() { }
    ngOnInit() {
    }
};
CommerceHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-commerce-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./commerce-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/commerce-home/commerce-home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./commerce-home.page.scss */ "./src/app/commerce-home/commerce-home.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CommerceHomePage);



/***/ })

}]);
//# sourceMappingURL=commerce-home-commerce-home-module-es2015.js.map