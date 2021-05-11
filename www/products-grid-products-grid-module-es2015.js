(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-grid-products-grid-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products-grid/products-grid.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-grid/products-grid.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"is-header-logo-centered ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment class=\"is-segment-bordered\" mode=\"md\" value=\"grid\">\r\n    <ion-segment-button mode=\"md\" value=\"options\">\r\n      <ion-icon name=\"options\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"funnel\">\r\n      <ion-icon name=\"funnel\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"reorder\">\r\n      <ion-icon name=\"reorder-three\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"grid\">\r\n      <ion-icon name=\"grid\"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-grid class=\"is-grid-bordered ion-no-padding\">\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/products-grid\">\r\n          <ion-label>\r\n            <h2 class=\"ion-padding-horizontal\">{{ \"Beats by Dr. Dre - Solo2 Wireless Headphones\" | slice:0:21 }}...</h2>\r\n            <img class=\"is-rounded-image\" src=\"assets/imgs/prod1.png\">\r\n            <div class=\"is-product-info ion-justify-content-center ion-align-items-center\">\r\n              <ion-badge color=\"warning\">HIT</ion-badge>\r\n              <p class=\"is-product-price\">$204</p>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/products-grid\">\r\n          <ion-label>\r\n            <h2 class=\"ion-padding-horizontal\">{{ \"Sony - MDR XB650BT Over-the-Ear\" | slice:0:21 }}...</h2>\r\n            <img class=\"is-rounded-image\" src=\"assets/imgs/prod2.png\">\r\n            <div class=\"is-product-info ion-justify-content-center ion-align-items-center\">\r\n              <ion-badge color=\"danger\">SALE</ion-badge>\r\n              <p class=\"is-product-price\">$79</p>\r\n              <p class=\"is-product-price-old\">$99</p>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/products-grid\">\r\n          <ion-label>\r\n            <h2 class=\"ion-padding-horizontal\">{{ \"GoPro - HERO4 Black 4K Action Camera\" | slice:0:21 }}...</h2>\r\n            <img class=\"is-rounded-image\" src=\"assets/imgs/prod3.png\">\r\n            <div class=\"is-product-info ion-justify-content-center ion-align-items-center\">\r\n              <ion-badge color=\"success\">NEW</ion-badge>\r\n              <p class=\"is-product-price\">$449.99</p>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/products-grid\">\r\n          <ion-label>\r\n            <h2 class=\"ion-padding-horizontal\">{{ \"Sony - HDR-AS50 HD Action Camera - Black\" | slice:0:21 }}...</h2>\r\n            <img class=\"is-rounded-image\" src=\"assets/imgs/prod4.png\">\r\n            <div class=\"is-product-info ion-justify-content-center ion-align-items-center\">\r\n              <p class=\"is-product-price\">$149.99</p>\r\n            </div>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/products-grid/products-grid.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/products-grid/products-grid.module.ts ***!
  \*******************************************************/
/*! exports provided: ProductsGridPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsGridPageModule", function() { return ProductsGridPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _products_grid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-grid.page */ "./src/app/products-grid/products-grid.page.ts");







const routes = [
    {
        path: '',
        component: _products_grid_page__WEBPACK_IMPORTED_MODULE_6__["ProductsGridPage"]
    }
];
let ProductsGridPageModule = class ProductsGridPageModule {
};
ProductsGridPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_products_grid_page__WEBPACK_IMPORTED_MODULE_6__["ProductsGridPage"]]
    })
], ProductsGridPageModule);



/***/ }),

/***/ "./src/app/products-grid/products-grid.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/products-grid/products-grid.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header.header-ios ion-toolbar:first-child {\n  --border-width: 0.55px;\n}\n\nh2 {\n  font-size: 18px;\n  margin-top: 18px;\n  margin-bottom: 10px;\n  font-weight: 300;\n  color: var(--ion-color-is-text-dark);\n}\n\n.is-grid-bordered > ion-row > ion-col {\n  border-left: 0;\n}\n\n.is-grid-bordered .is-product-info {\n  display: flex;\n}\n\n.is-grid-bordered .is-product-info p {\n  margin-left: 10px;\n}\n\n.is-grid-bordered .is-product-price {\n  font-size: 18px;\n  margin: 18px 0;\n}\n\n.is-grid-bordered ion-badge {\n  font-size: 10px;\n}\n\n.is-grid-bordered .is-product-price-old {\n  text-decoration: line-through;\n  color: var(--ion-color-is-mute-dark);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9wcm9kdWN0cy1ncmlkL3Byb2R1Y3RzLWdyaWQucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy1ncmlkL3Byb2R1Y3RzLWdyaWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0VGOztBRENFO0VBQ0UsY0FBQTtBQ0VKOztBREFFO0VBRUUsYUFBQTtBQ0VKOztBRERJO0VBQ0UsaUJBQUE7QUNHTjs7QURBRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDRUo7O0FEQUU7RUFDRSxlQUFBO0FDRUo7O0FEQUU7RUFDRSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMtZ3JpZC9wcm9kdWN0cy1ncmlkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDAuNTVweDtcclxufVxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtdGV4dC1kYXJrKTtcclxufVxyXG4uaXMtZ3JpZC1ib3JkZXJlZCB7XHJcbiAgPiBpb24tcm93ID4gaW9uLWNvbCB7XHJcbiAgICBib3JkZXItbGVmdDogMDtcclxuICB9XHJcbiAgLmlzLXByb2R1Y3QtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pcy1wcm9kdWN0LXByaWNlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMThweCAwO1xyXG4gIH1cclxuICBpb24tYmFkZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICAuaXMtcHJvZHVjdC1wcmljZS1vbGQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtZGFyayk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1oZWFkZXIuaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpmaXJzdC1jaGlsZCB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwLjU1cHg7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLXRleHQtZGFyayk7XG59XG5cbi5pcy1ncmlkLWJvcmRlcmVkID4gaW9uLXJvdyA+IGlvbi1jb2wge1xuICBib3JkZXItbGVmdDogMDtcbn1cbi5pcy1ncmlkLWJvcmRlcmVkIC5pcy1wcm9kdWN0LWluZm8ge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5pcy1ncmlkLWJvcmRlcmVkIC5pcy1wcm9kdWN0LWluZm8gcCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLmlzLWdyaWQtYm9yZGVyZWQgLmlzLXByb2R1Y3QtcHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMThweCAwO1xufVxuLmlzLWdyaWQtYm9yZGVyZWQgaW9uLWJhZGdlIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLmlzLWdyaWQtYm9yZGVyZWQgLmlzLXByb2R1Y3QtcHJpY2Utb2xkIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1kYXJrKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/products-grid/products-grid.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/products-grid/products-grid.page.ts ***!
  \*****************************************************/
/*! exports provided: ProductsGridPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsGridPage", function() { return ProductsGridPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProductsGridPage = class ProductsGridPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductsGridPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-grid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./products-grid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products-grid/products-grid.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./products-grid.page.scss */ "./src/app/products-grid/products-grid.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProductsGridPage);



/***/ })

}]);
//# sourceMappingURL=products-grid-products-grid-module-es2015.js.map