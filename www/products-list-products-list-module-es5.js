function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["products-list-products-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products-list/products-list.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products-list/products-list.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsListProductsListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"is-header-logo-centered ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment class=\"is-segment-clear\" mode=\"md\" scrollable=\"true\" value=\"t-shirt\">\r\n    <ion-segment-button mode=\"md\" value=\"t-shirt\">\r\n      <ion-label>T-SHIRTS</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"bags\">\r\n      <ion-label>BAGS</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"accessories\">\r\n      <ion-label>ACCESSORIES</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"shoes\">\r\n      <ion-label>SHOES</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"jeans\">\r\n      <ion-label>JEANS</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"trousers\">\r\n      <ion-label>TROUSERS</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"other\">\r\n      <ion-label>OTHER</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-segment class=\"is-segment-bordered\" mode=\"md\" value=\"grid\">\r\n    <ion-segment-button mode=\"md\" value=\"options\">\r\n      <ion-icon name=\"options\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"funnel\">\r\n      <ion-icon name=\"funnel\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"reorder\">\r\n      <ion-icon name=\"reorder-three\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"grid\">\r\n      <ion-icon name=\"grid\"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <ion-list class=\"ion-no-padding\">\r\n    <ion-item detail=\"false\" routerLink=\"/products-list\" class=\"ion-text-center\">\r\n      <ion-label class=\"ion-padding-top ion-padding-bottom\">\r\n        <h2>Beats by Dr. Dre - Solo2 Wireless Headphones</h2>\r\n        <img src=\"assets/imgs/prod1.png\">\r\n        <ion-grid>\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col class=\"ion-padding-horizontal ion-text-start\" size=\"4\">\r\n              <ion-badge color=\"warning\">HIT</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <p class=\"is-product-price\">$204</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item detail=\"false\" routerLink=\"/products-list\" class=\"ion-text-center\">\r\n      <ion-label class=\"ion-padding-top ion-padding-bottom\">\r\n        <h2>Mony - MTR BB850BZ Over-the-Ear Lorem Ipsum</h2>\r\n        <img src=\"assets/imgs/prod2.png\">\r\n        <ion-grid>\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col class=\"ion-padding-horizontal\" size=\"4\" class=\"ion-text-start\">\r\n              <ion-badge color=\"danger\">SALE</ion-badge>\r\n            </ion-col>\r\n            <ion-col size=\"4\" class=\"ion-text-center\">\r\n              <p class=\"is-product-price\">$79</p>\r\n            </ion-col>\r\n            <ion-col class=\"ion-padding-horizontal\" size=\"4\" class=\"ion-text-end\">\r\n              <p class=\"is-product-price-old\">$99</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/products-list/products-list.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/products-list/products-list.module.ts ***!
    \*******************************************************/

  /*! exports provided: ProductsListPageModule */

  /***/
  function srcAppProductsListProductsListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsListPageModule", function () {
      return ProductsListPageModule;
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


    var _products_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products-list.page */
    "./src/app/products-list/products-list.page.ts");

    var routes = [{
      path: '',
      component: _products_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductsListPage"]
    }];

    var ProductsListPageModule = function ProductsListPageModule() {
      _classCallCheck(this, ProductsListPageModule);
    };

    ProductsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_products_list_page__WEBPACK_IMPORTED_MODULE_6__["ProductsListPage"]]
    })], ProductsListPageModule);
    /***/
  },

  /***/
  "./src/app/products-list/products-list.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/products-list/products-list.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsListProductsListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-header.header-ios ion-toolbar:first-child {\n  --border-width: 0.55px;\n}\n\nion-list h2 {\n  margin-top: 1em;\n  font-size: 18px;\n  font-weight: 300;\n  color: var(--ion-color-is-text-dark);\n  padding: 0 1em;\n  white-space: normal;\n}\n\nion-list .is-product-price {\n  font-size: 18px;\n}\n\nion-list ion-badge {\n  font-size: 10px;\n}\n\nion-list .is-product-price-old {\n  text-decoration: line-through;\n  color: var(--ion-color-is-mute-dark);\n  font-size: 14px;\n}\n\nion-segment:not([color]).is-segment-clear ion-segment-button {\n  --color-checked: var(--ion-color-is-text-dark);\n}\n\n.is-segment-clear ion-segment-button {\n  height: 50px;\n  font-weight: 300;\n  font-size: 0.9rem;\n}\n\n.is-segment-bordered {\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-top-color: var(--ion-color-is-mute-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUNDRjs7QURFRTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENFO0VBQ0UsZUFBQTtBQ0NKOztBRENFO0VBQ0UsZUFBQTtBQ0NKOztBRENFO0VBQ0UsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNFLDhDQUFBO0FDQ0Y7O0FERUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy1saXN0L3Byb2R1Y3RzLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlci5oZWFkZXItaW9zIGlvbi10b29sYmFyOmZpcnN0LWNoaWxkIHtcclxuICAtLWJvcmRlci13aWR0aDogMC41NXB4O1xyXG59XHJcbmlvbi1saXN0IHtcclxuICBoMiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy10ZXh0LWRhcmspO1xyXG4gICAgcGFkZGluZzogMCAxZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICAuaXMtcHJvZHVjdC1wcmljZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIGlvbi1iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG4gIC5pcy1wcm9kdWN0LXByaWNlLW9sZCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1kYXJrKTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuaW9uLXNlZ21lbnQ6bm90KFtjb2xvcl0pLmlzLXNlZ21lbnQtY2xlYXIgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1pcy10ZXh0LWRhcmspO1xyXG59XHJcbi5pcy1zZWdtZW50LWNsZWFyIHtcclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxufVxyXG4uaXMtc2VnbWVudC1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcclxufVxyXG4iLCJpb24taGVhZGVyLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJvcmRlci13aWR0aDogMC41NXB4O1xufVxuXG5pb24tbGlzdCBoMiB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLXRleHQtZGFyayk7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWxpc3QgLmlzLXByb2R1Y3QtcHJpY2Uge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tbGlzdCBpb24tYmFkZ2Uge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5pb24tbGlzdCAuaXMtcHJvZHVjdC1wcmljZS1vbGQge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWRhcmspO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1zZWdtZW50Om5vdChbY29sb3JdKS5pcy1zZWdtZW50LWNsZWFyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWlzLXRleHQtZGFyayk7XG59XG5cbi5pcy1zZWdtZW50LWNsZWFyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5pcy1zZWdtZW50LWJvcmRlcmVkIHtcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/products-list/products-list.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products-list/products-list.page.ts ***!
    \*****************************************************/

  /*! exports provided: ProductsListPage */

  /***/
  function srcAppProductsListProductsListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsListPage", function () {
      return ProductsListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductsListPage = /*#__PURE__*/function () {
      function ProductsListPage() {
        _classCallCheck(this, ProductsListPage);
      }

      _createClass(ProductsListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsListPage;
    }();

    ProductsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-products-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./products-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products-list/products-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./products-list.page.scss */
      "./src/app/products-list/products-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProductsListPage);
    /***/
  }
}]);
//# sourceMappingURL=products-list-products-list-module-es5.js.map