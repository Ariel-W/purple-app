function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-products-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsProductsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Products</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"is-hero-product-category-info ion-padding\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <h6>Audio</h6>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"8\">\r\n        <h1>Great Wireless Headphones</h1>\r\n\r\n        <p>\r\n          When television was young, there was a hugely popular show.\r\n        </p>\r\n        <ion-button size=\"small\">View More</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <div class=\"ion-float-right\">\r\n          <ion-icon name=\"headset\"></ion-icon>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"is-tiles is-image-center\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-item detail=\"false\" routerLink=\"/products\" lines=\"none\">\r\n            <ion-label>\r\n              <img src=\"assets/imgs/prod1.png\">\r\n              <ion-card-content>\r\n                <p>\r\n                  {{ \"Beats by Dr. Dre - Solo2 Wireless Headphones\" | slice:0:33 }}...\r\n                </p>\r\n                <h2>$204</h2>\r\n              </ion-card-content>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-item detail=\"false\" routerLink=\"/products\" lines=\"none\">\r\n            <ion-label>\r\n              <img src=\"assets/imgs/prod2.png\">\r\n              <ion-card-content>\r\n                <p>\r\n                  {{ \"Sony - MDR XB650BT Over-the-Ear\" | slice:0:33 }}...\r\n                </p>\r\n                <h2>$79</h2>\r\n              </ion-card-content>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <div class=\"ion-padding-top ion-padding-horizontal\">\r\n    <h2>\r\n      Popular\r\n      <ion-button size=\"small\" fill=\"clear\" class=\"ion-float-right\" color=\"is-text-dark\">\r\n        See all\r\n        <ion-icon name=\"arrow-forward\" slot=\"end\"></ion-icon>\r\n      </ion-button>\r\n    </h2>\r\n  </div>\r\n\r\n  <ion-grid class=\"is-tiles is-image-center\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-item detail=\"false\" routerLink=\"/products\" lines=\"none\">\r\n            <ion-label>\r\n              <img src=\"assets/imgs/prod3.png\">\r\n              <ion-card-content>\r\n                <p>\r\n                  {{ \"GoPro - HERO4 Black 4K Action Camera\" | slice:0:33 }}...\r\n                </p>\r\n                <h2>$449.99</h2>\r\n              </ion-card-content>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-card>\r\n          <ion-item detail=\"false\" routerLink=\"/products\" lines=\"none\">\r\n            <ion-label>\r\n              <img src=\"assets/imgs/prod4.png\">\r\n              <ion-card-content>\r\n                <p>\r\n                  {{ \"Sony - HDR-AS50 HD Action Camera - Black\" | slice:0:33 }}...\r\n                </p>\r\n                <h2>$149.99</h2>\r\n              </ion-card-content>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/products/products.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/products/products.module.ts ***!
    \*********************************************/

  /*! exports provided: ProductsPageModule */

  /***/
  function srcAppProductsProductsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function () {
      return ProductsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _products_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products.page */
    "./src/app/products/products.page.ts");

    var routes = [{
      path: '',
      component: _products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]
    }];

    var ProductsPageModule = function ProductsPageModule() {
      _classCallCheck(this, ProductsPageModule);
    };

    ProductsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_products_page__WEBPACK_IMPORTED_MODULE_6__["ProductsPage"]]
    })], ProductsPageModule);
    /***/
  },

  /***/
  "./src/app/products/products.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/products/products.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsProductsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  font-size: 25px;\n  font-weight: 300;\n  color: var(--ion-color-is-text-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDRSxnQkFBQTtFQUNBLG9DQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9wcm9kdWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMiB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtdGV4dC1kYXJrKTtcclxufVxyXG4iLCJoMiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy10ZXh0LWRhcmspO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/products/products.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/products/products.page.ts ***!
    \*******************************************/

  /*! exports provided: ProductsPage */

  /***/
  function srcAppProductsProductsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsPage", function () {
      return ProductsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductsPage = /*#__PURE__*/function () {
      function ProductsPage() {
        _classCallCheck(this, ProductsPage);
      }

      _createClass(ProductsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsPage;
    }();

    ProductsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/products.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products.page.scss */
      "./src/app/products/products.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProductsPage);
    /***/
  }
}]);
//# sourceMappingURL=products-products-module-es5.js.map