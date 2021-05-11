function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards-cards-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/cards.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cards/cards.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCardsCardsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Cards</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <ion-slides pager=\"true\" class=\"is-payment-cards is-card-unbordered\" [options]=\"slideOpts\">\r\n      <ion-slide class=\"ion-padding\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-thumbnail slot=\"start\">\r\n              <img src=\"assets/imgs/mastercard.png\">\r\n            </ion-thumbnail>\r\n            <ion-label></ion-label>\r\n            <div slot=\"end\" class=\"ion-align-self-start\">\r\n              <ion-icon ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n            </div>\r\n          </ion-item>\r\n\r\n          <ion-card-content class=\"ion-no-padding\">\r\n            <p class=\"ion-padding-horizontal ion-text-start\">**** **** **** 3989</p>\r\n          </ion-card-content>\r\n\r\n          <ion-row class=\"ion-padding ion-text-start\">\r\n            <ion-col size=\"8\">\r\n              <ion-note>\r\n                Cardholder Name\r\n              </ion-note>\r\n              <p class=\"ion-no-margin\">Komol Kuchkarov</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-note>\r\n                Expiry\r\n              </ion-note>\r\n              <p class=\"ion-no-margin\">09/2022</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-slide>\r\n      <ion-slide class=\"ion-padding\">\r\n        <ion-card>\r\n          <ion-item>\r\n            <ion-thumbnail slot=\"start\">\r\n              <img src=\"assets/imgs/mastercard.png\">\r\n            </ion-thumbnail>\r\n            <ion-label></ion-label>\r\n            <div slot=\"end\" class=\"ion-align-self-start\">\r\n              <ion-icon ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n            </div>\r\n          </ion-item>\r\n\r\n          <ion-card-content class=\"ion-no-padding\">\r\n            <p class=\"ion-padding-horizontal ion-text-start\">**** **** **** 5710</p>\r\n          </ion-card-content>\r\n\r\n          <ion-row class=\"ion-padding ion-text-start\">\r\n            <ion-col size=\"8\">\r\n              <ion-note>\r\n                Cardholder Name\r\n              </ion-note>\r\n              <p class=\"ion-no-margin\">Komol Kuchkarov</p>\r\n            </ion-col>\r\n            <ion-col size=\"4\">\r\n              <ion-note>\r\n                Expiry\r\n              </ion-note>\r\n              <p class=\"ion-no-margin\">05/2023</p>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </div>\r\n\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row class=\"ion-padding\">\r\n      <ion-col size=\"5\">\r\n        <h3>\r\n          <span>Balance</span>\r\n          $2 389\r\n        </h3>\r\n      </ion-col>\r\n      <ion-col size=\"7\" class=\"ion-no-padding\">\r\n        <ion-row>\r\n          <h3>Income<span class=\"is-color-success ion-float-right\">+$5 600</span></h3>\r\n        </ion-row>\r\n        <ion-row>\r\n          <h3>Expense<span class=\"is-color-danger ion-float-right\">-$3 900</span></h3>\r\n        </ion-row>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-list>\r\n    <ion-item class=\"is-item-thumb-bordered\">\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail\">\r\n        <ion-icon name=\"game-controller\" class=\"is-icon-no-color\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-stretch ion-no-margin ion-padding-top\">\r\n        <h2>Playstation Network</h2>\r\n        <p>Games  •  09:02 PM  •  April 20, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-color-danger ion-padding-top ion-align-self-start ion-no-margin\">\r\n        <h3 class=\"ion-no-margin\">- $12</h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-thumb-bordered\">\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail\">\r\n        <ion-icon name=\"card\" class=\"is-icon-no-color\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-no-margin ion-padding-top ion-align-self-stretch\">\r\n        <h2>Bank Transfer</h2>\r\n        <p>Salary  •  03:56 PM  •  April 4, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-color-success ion-padding-top ion-align-self-start ion-no-margin\">\r\n        <h3 class=\"ion-no-margin\">+ $1450</h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-thumb-bordered\">\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail\">\r\n        <ion-icon name=\"cart\" class=\"is-icon-no-color\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label class=\"ion-align-self-stretch ion-no-margin ion-padding-top\">\r\n        <h2>iPad Pro 9,7 inch 128gb</h2>\r\n        <p>Electronics  •  02:11 PM  •  April 4, 2016</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-color-danger ion-padding-top ion-align-self-start ion-no-margin\">\r\n        <h3 class=\"ion-no-margin\">- $749</h3>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/cards/cards.module.ts":
  /*!***************************************!*\
    !*** ./src/app/cards/cards.module.ts ***!
    \***************************************/

  /*! exports provided: CardsPageModule */

  /***/
  function srcAppCardsCardsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsPageModule", function () {
      return CardsPageModule;
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


    var _cards_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cards.page */
    "./src/app/cards/cards.page.ts");

    var routes = [{
      path: '',
      component: _cards_page__WEBPACK_IMPORTED_MODULE_6__["CardsPage"]
    }];

    var CardsPageModule = function CardsPageModule() {
      _classCallCheck(this, CardsPageModule);
    };

    CardsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_cards_page__WEBPACK_IMPORTED_MODULE_6__["CardsPage"]]
    })], CardsPageModule);
    /***/
  },

  /***/
  "./src/app/cards/cards.page.scss":
  /*!***************************************!*\
    !*** ./src/app/cards/cards.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppCardsCardsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-payment-cards ion-card ion-thumbnail img {\n  padding: 4px;\n  background: #fff;\n  box-sizing: content-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9jYXJkcy9jYXJkcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcmRzL2NhcmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXJkcy9jYXJkcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtcGF5bWVudC1jYXJkcyBpb24tY2FyZCBpb24tdGh1bWJuYWlsIGltZyB7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbn1cclxuIiwiLmlzLXBheW1lbnQtY2FyZHMgaW9uLWNhcmQgaW9uLXRodW1ibmFpbCBpbWcge1xuICBwYWRkaW5nOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/cards/cards.page.ts":
  /*!*************************************!*\
    !*** ./src/app/cards/cards.page.ts ***!
    \*************************************/

  /*! exports provided: CardsPage */

  /***/
  function srcAppCardsCardsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsPage", function () {
      return CardsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CardsPage = /*#__PURE__*/function () {
      function CardsPage() {
        _classCallCheck(this, CardsPage);

        this.slideOpts = {
          autoplay: false
        };
      }

      _createClass(CardsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CardsPage;
    }();

    CardsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cards',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cards.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cards/cards.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cards.page.scss */
      "./src/app/cards/cards.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CardsPage);
    /***/
  }
}]);
//# sourceMappingURL=cards-cards-module-es5.js.map