function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["delivery-delivery-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDeliveryDeliveryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Delivery</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-flex ion-justify-content-evenly ion-align-items-center ion-padding-top ion-margin-vertical\">\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/cart\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/delivery\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"location-sharp\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/payment\" color=\"light\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/confirmation\" color=\"light\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"flag\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <ion-grid class=\"ion-padding-horizontal\">\r\n    <ion-row>\r\n      <ion-col size=\"6\">\r\n          <ion-button expand=\"block\">Free Delivery</ion-button>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" fill=\"outline\">Express $30</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list class=\"ion-padding is-list-spaced\">\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Full Name\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"email\" placeholder=\"Email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"tel\" placeholder=\"Phone\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"is-select-item\">\r\n      <ion-select interface=\"popover\" value=\"United States\">\r\n        <ion-select-option value=\"United States\">United States</ion-select-option>\r\n        <ion-select-option value=\"United Kingdom\">United Kingdom</ion-select-option>\r\n        <ion-select-option value=\"Japan\">Japan</ion-select-option>\r\n        <ion-select-option value=\"Germany\">Germany</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item class=\"is-select-item\">\r\n      <ion-select interface=\"popover\" value=\"California\">\r\n        <ion-select-option value=\"California\">California</ion-select-option>\r\n        <ion-select-option value=\"Nevada\">Nevada</ion-select-option>\r\n        <ion-select-option value=\"Texas\">Texas</ion-select-option>\r\n        <ion-select-option value=\"Washington\">Washington</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-input type=\"text\" placeholder=\"Address\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-item>\r\n            <ion-input type=\"text\" placeholder=\"Zip code\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button class=\"ion-margin-top\" expand=\"block\" routerLink=\"/payment\">Payment</ion-button>\r\n    <ion-button expand=\"block\" fill=\"outline\">Cancel Order</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/delivery/delivery.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/delivery/delivery.module.ts ***!
    \*********************************************/

  /*! exports provided: DeliveryPageModule */

  /***/
  function srcAppDeliveryDeliveryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryPageModule", function () {
      return DeliveryPageModule;
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


    var _delivery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./delivery.page */
    "./src/app/delivery/delivery.page.ts");

    var routes = [{
      path: '',
      component: _delivery_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPage"]
    }];

    var DeliveryPageModule = function DeliveryPageModule() {
      _classCallCheck(this, DeliveryPageModule);
    };

    DeliveryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_delivery_page__WEBPACK_IMPORTED_MODULE_6__["DeliveryPage"]]
    })], DeliveryPageModule);
    /***/
  },

  /***/
  "./src/app/delivery/delivery.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/delivery/delivery.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDeliveryDeliveryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-button.button-color {\n  width: 50px;\n  height: 50px !important;\n  --border-color: var(--ion-color-is-mute-light);\n  --border-style: solid;\n  --border-width: 2px;\n}\n\n.is-select-item ion-select {\n  padding-left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9kZWxpdmVyeS9kZWxpdmVyeS5wYWdlLnNjc3MiLCJzcmMvYXBwL2RlbGl2ZXJ5L2RlbGl2ZXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvZGVsaXZlcnkvZGVsaXZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbi5idXR0b24tY29sb3Ige1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XHJcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XHJcbn1cclxuLmlzLXNlbGVjdC1pdGVtIGlvbi1zZWxlY3Qge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4iLCJpb24tYnV0dG9uLmJ1dHRvbi1jb2xvciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufVxuXG4uaXMtc2VsZWN0LWl0ZW0gaW9uLXNlbGVjdCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/delivery/delivery.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/delivery/delivery.page.ts ***!
    \*******************************************/

  /*! exports provided: DeliveryPage */

  /***/
  function srcAppDeliveryDeliveryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeliveryPage", function () {
      return DeliveryPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DeliveryPage = /*#__PURE__*/function () {
      function DeliveryPage() {
        _classCallCheck(this, DeliveryPage);
      }

      _createClass(DeliveryPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeliveryPage;
    }();

    DeliveryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delivery',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./delivery.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/delivery/delivery.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./delivery.page.scss */
      "./src/app/delivery/delivery.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DeliveryPage);
    /***/
  }
}]);
//# sourceMappingURL=delivery-delivery-module-es5.js.map