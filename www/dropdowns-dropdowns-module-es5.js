function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dropdowns-dropdowns-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dropdowns/dropdowns.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dropdowns/dropdowns.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDropdownsDropdownsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Dropdowns</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>\r\n        Options\r\n      </ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-label>Hair color</ion-label>\r\n      <ion-select [interfaceOptions]=\"customAlertOptions\" interface=\"alert\" multiple=\"false\" placeholder=\"Select One\" value=\"brown\">\r\n        <ion-select-option value=\"brown\">Brown</ion-select-option>\r\n        <ion-select-option value=\"blonde\">Blonde</ion-select-option>\r\n        <ion-select-option value=\"black\">Black</ion-select-option>\r\n        <ion-select-option value=\"red\">Red</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Topping</ion-label>\r\n      <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\" placeholder=\"Select One\" value=\"bacon\">\r\n        <ion-select-option value=\"bacon\">Bacon</ion-select-option>\r\n        <ion-select-option value=\"olives\">Black Olives</ion-select-option>\r\n        <ion-select-option value=\"xcheese\">Extra Cheese</ion-select-option>\r\n        <ion-select-option value=\"peppers\">Green Peppers</ion-select-option>\r\n        <ion-select-option value=\"mushrooms\">Mushrooms</ion-select-option>\r\n        <ion-select-option value=\"onions\">Onions</ion-select-option>\r\n        <ion-select-option value=\"pepperoni\">Pepperoni</ion-select-option>\r\n        <ion-select-option value=\"pineapple\">Pineapple</ion-select-option>\r\n        <ion-select-option value=\"sausage\">Sausage</ion-select-option>\r\n        <ion-select-option value=\"Spinach\">Spinach</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label>Favorite color</ion-label>\r\n      <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Select One\" value=\"red\">\r\n        <ion-select-option value=\"red\">Red</ion-select-option>\r\n        <ion-select-option value=\"purple\">Purple</ion-select-option>\r\n        <ion-select-option value=\"yellow\">Yellow</ion-select-option>\r\n        <ion-select-option value=\"orange\">Orange</ion-select-option>\r\n        <ion-select-option value=\"green\">Green</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/dropdowns/dropdowns.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dropdowns/dropdowns.module.ts ***!
    \***********************************************/

  /*! exports provided: DropdownsPageModule */

  /***/
  function srcAppDropdownsDropdownsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownsPageModule", function () {
      return DropdownsPageModule;
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


    var _dropdowns_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dropdowns.page */
    "./src/app/dropdowns/dropdowns.page.ts");

    var routes = [{
      path: '',
      component: _dropdowns_page__WEBPACK_IMPORTED_MODULE_6__["DropdownsPage"]
    }];

    var DropdownsPageModule = function DropdownsPageModule() {
      _classCallCheck(this, DropdownsPageModule);
    };

    DropdownsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_dropdowns_page__WEBPACK_IMPORTED_MODULE_6__["DropdownsPage"]]
    })], DropdownsPageModule);
    /***/
  },

  /***/
  "./src/app/dropdowns/dropdowns.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/dropdowns/dropdowns.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppDropdownsDropdownsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Ryb3Bkb3ducy9kcm9wZG93bnMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dropdowns/dropdowns.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/dropdowns/dropdowns.page.ts ***!
    \*********************************************/

  /*! exports provided: DropdownsPage */

  /***/
  function srcAppDropdownsDropdownsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DropdownsPage", function () {
      return DropdownsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DropdownsPage = /*#__PURE__*/function () {
      function DropdownsPage() {
        _classCallCheck(this, DropdownsPage);

        this.customAlertOptions = {
          header: 'Hair Color',
          subHeader: 'Select your hair color',
          message: 'Only select your dominant hair color',
          translucent: true,
          cssClass: 'is-select'
        };
        this.customPopoverOptions = {
          header: 'Pizza Toppings',
          subHeader: 'Select your toppings',
          message: '$1.00 per topping',
          cssClass: 'is-select'
        };
        this.customActionSheetOptions = {
          header: 'Colors',
          subHeader: 'Select your favorite color',
          cssClass: 'is-select'
        };
      }

      _createClass(DropdownsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DropdownsPage;
    }();

    DropdownsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dropdowns',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dropdowns.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dropdowns/dropdowns.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dropdowns.page.scss */
      "./src/app/dropdowns/dropdowns.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DropdownsPage);
    /***/
  }
}]);
//# sourceMappingURL=dropdowns-dropdowns-module-es5.js.map