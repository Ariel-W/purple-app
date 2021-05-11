function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Cart</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"is-flex ion-justify-content-evenly ion-align-items-center ion-padding-top ion-margin-vertical\">\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/cart\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/delivery\" color=\"light\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"location-sharp\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/payment\" color=\"light\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/confirmation\" color=\"light\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"flag\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item-sliding>\r\n      <ion-item button detail=\"false\">\r\n        <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-light ion-align-self-center\">\r\n          <img class=\"is-rounded-image\" src=\"assets/imgs/prod1.png\" alt=\"\">\r\n        </ion-thumbnail>\r\n        <ion-grid class=\"ion-no-padding\">\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"7\" class=\"ion-text-left\">\r\n              <span class=\"is-item-title\">Short-sleeved Denim Shirt</span>\r\n              <p class=\"ion-no-margin\">Pcs: 1 Size: XL</p>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-right\">\r\n              <div class=\"is-price ion-no-padding\">\r\n                <span>$39.99</span>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"2\" class=\"ion-text-center\">\r\n              <div class=\"quantity-widget\">\r\n                <ion-button fill=\"clear\"><ion-icon name=\"remove-outline\"></ion-icon></ion-button>\r\n                <ion-input type=\"number\" value=\"1\" inputmode=\"numeric\"></ion-input>\r\n                <ion-button fill=\"clear\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\"><ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon></ion-item-option>\r\n        <ion-item-option color=\"light\"><ion-icon slot=\"icon-only\" name=\"close\"></ion-icon></ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    <ion-item-sliding>\r\n      <ion-item button detail=\"false\">\r\n        <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-light ion-align-self-center\">\r\n          <img class=\"is-rounded-image\" src=\"assets/imgs/prod2.png\" alt=\"\">\r\n        </ion-thumbnail>\r\n        <ion-grid class=\"ion-no-padding\">\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"7\" class=\"ion-text-left\">\r\n              <span class=\"is-item-title\">Lorem dolor sit amet</span>\r\n              <p class=\"ion-no-margin\">Pcs: 1 Size: XL</p>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-right\">\r\n              <div class=\"is-price ion-no-padding\">\r\n                <span>$39.99</span>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"2\" class=\"ion-text-center\">\r\n              <div class=\"quantity-widget\">\r\n                <ion-button fill=\"clear\"><ion-icon name=\"remove-outline\"></ion-icon></ion-button>\r\n                <ion-input type=\"number\" value=\"1\" inputmode=\"numeric\"></ion-input>\r\n                <ion-button fill=\"clear\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\"><ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon></ion-item-option>\r\n        <ion-item-option color=\"light\"><ion-icon slot=\"icon-only\" name=\"close\"></ion-icon></ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    <ion-item-sliding>\r\n      <ion-item button detail=\"false\">\r\n        <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-light ion-align-self-center\">\r\n          <img class=\"is-rounded-image\" src=\"assets/imgs/prod3.png\" alt=\"\">\r\n        </ion-thumbnail>\r\n        <ion-grid class=\"ion-no-padding\">\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"7\" class=\"ion-text-left\">\r\n              <span class=\"is-item-title\">Labore et dolore magna aliqua</span>\r\n              <p class=\"ion-no-margin\">Pcs: 1 Size: -</p>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-right\">\r\n              <div class=\"is-price ion-no-padding\">\r\n                <span>$59.99</span>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"2\" class=\"ion-text-center\">\r\n              <div class=\"quantity-widget\">\r\n                <ion-button fill=\"clear\"><ion-icon name=\"remove-outline\"></ion-icon></ion-button>\r\n                <ion-input type=\"number\" value=\"1\" inputmode=\"numeric\"></ion-input>\r\n                <ion-button fill=\"clear\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\"><ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon></ion-item-option>\r\n        <ion-item-option color=\"light\"><ion-icon slot=\"icon-only\" name=\"close\"></ion-icon></ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    <ion-item-sliding>\r\n      <ion-item button detail=\"false\">\r\n        <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-light ion-align-self-center\">\r\n          <img class=\"is-rounded-image\" src=\"assets/imgs/prod4.png\" alt=\"\">\r\n        </ion-thumbnail>\r\n        <ion-grid class=\"ion-no-padding\">\r\n          <ion-row class=\"ion-align-items-center\">\r\n            <ion-col size=\"7\" class=\"ion-text-left\">\r\n              <span class=\"is-item-title\">Excepteur sint occaecat cupidatat</span>\r\n              <p class=\"ion-no-margin\">Pcs: 3 Size: Large</p>\r\n            </ion-col>\r\n            <ion-col size=\"3\" class=\"ion-text-right\">\r\n              <div class=\"is-price ion-no-padding\">\r\n                <span>$99.99</span>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col size=\"2\" class=\"ion-text-center\">\r\n              <div class=\"quantity-widget\">\r\n                <ion-button fill=\"clear\"><ion-icon name=\"remove-outline\"></ion-icon></ion-button>\r\n                <ion-input type=\"number\" value=\"1\" inputmode=\"numeric\"></ion-input>\r\n                <ion-button fill=\"clear\"><ion-icon name=\"add-outline\"></ion-icon></ion-button>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"danger\"><ion-icon slot=\"icon-only\" name=\"heart\"></ion-icon></ion-item-option>\r\n        <ion-item-option color=\"light\"><ion-icon slot=\"icon-only\" name=\"close\"></ion-icon></ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n    <ion-item>\r\n      <ion-label>SUBTOTAL</ion-label>\r\n      <div class=\"is-price ion-padding-horizontal\" slot=\"end\"><span>$199.00</span></div>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button class=\"ion-margin-top\" expand=\"block\" routerLink=\"/delivery\">Check Out</ion-button>\r\n    <ion-button expand=\"block\" fill=\"outline\">Save Items</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/cart/cart.module.ts":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.module.ts ***!
    \*************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
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


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/cart/cart.page.ts");

    var routes = [{
      path: '',
      component: _cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]
    }];

    var CartPageModule = function CartPageModule() {
      _classCallCheck(this, CartPageModule);
    };

    CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/cart/cart.page.scss":
  /*!*************************************!*\
    !*** ./src/app/cart/cart.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button.button-color {\n  width: 50px;\n  height: 50px !important;\n  --border-color: var(--ion-color-is-mute-light);\n  --border-style: solid;\n  --border-width: 2px;\n}\n\n.is-item-title {\n  display: block;\n  margin-bottom: 0.5em;\n}\n\nion-item-sliding .item-has-focus {\n  border-bottom: 2px solid var(--ion-color-is-mute-light);\n  --highlight-height: 0;\n}\n\n.quantity-widget ion-button {\n  height: 20px;\n}\n\n.quantity-widget .sc-ion-input-ios-h {\n  --padding-start: 8px;\n}\n\n.quantity-widget ion-input {\n  border-color: var(--ion-color-is-mute-light);\n  border-style: solid;\n  border-width: 0 0 2px;\n  width: 65%;\n  margin: 0 auto;\n  --padding-bottom: 5px;\n  --padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsOENBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURBQTtFQUNFLHVEQUFBO0VBQ0EscUJBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7QUNJRjs7QURGQTtFQUNFLG9CQUFBO0FDS0Y7O0FESEE7RUFDRSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uLmJ1dHRvbi1jb2xvciB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxufVxyXG4uaXMtaXRlbS10aXRsZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XHJcbn1cclxuaW9uLWl0ZW0tc2xpZGluZyAuaXRlbS1oYXMtZm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XHJcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG59XHJcbi5xdWFudGl0eS13aWRnZXQgaW9uLWJ1dHRvbiB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5xdWFudGl0eS13aWRnZXQgLnNjLWlvbi1pbnB1dC1pb3MtaCB7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XHJcbn1cclxuLnF1YW50aXR5LXdpZGdldCBpb24taW5wdXQge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMnB4O1xyXG4gIHdpZHRoOiA2NSU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIC0tcGFkZGluZy10b3A6IDVweDtcclxufVxyXG4iLCJpb24tYnV0dG9uLmJ1dHRvbi1jb2xvciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufVxuXG4uaXMtaXRlbS10aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cblxuaW9uLWl0ZW0tc2xpZGluZyAuaXRlbS1oYXMtZm9jdXMge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG59XG5cbi5xdWFudGl0eS13aWRnZXQgaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnF1YW50aXR5LXdpZGdldCAuc2MtaW9uLWlucHV0LWlvcy1oIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG59XG5cbi5xdWFudGl0eS13aWRnZXQgaW9uLWlucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAwIDJweDtcbiAgd2lkdGg6IDY1JTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC0tcGFkZGluZy1ib3R0b206IDVweDtcbiAgLS1wYWRkaW5nLXRvcDogNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cart/cart.page.ts":
  /*!***********************************!*\
    !*** ./src/app/cart/cart.page.ts ***!
    \***********************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartPage = /*#__PURE__*/function () {
      function CartPage() {
        _classCallCheck(this, CartPage);
      }

      _createClass(CartPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CartPage;
    }();

    CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/cart/cart.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CartPage);
    /***/
  }
}]);
//# sourceMappingURL=cart-cart-module-es5.js.map