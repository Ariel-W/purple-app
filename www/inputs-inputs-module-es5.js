function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inputs-inputs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inputs/inputs.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inputs/inputs.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInputsInputsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Inputs</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-list-header>\r\n      <ion-label>Placeholders Only</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Default\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Active\" autofocus=\"true\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" placeholder=\"Disabled\" disabled></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-input type=\"text\" value=\"Readonly\" readonly></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-list-header>\r\n      <ion-label>Floating Labels</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Default</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Disabled</ion-label>\r\n      <ion-input type=\"text\" disabled></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Label</ion-label>\r\n      <ion-input type=\"text\" value=\"Readonly\" readonly></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-list-header>\r\n      <ion-label>Fixed Labels</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Default</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Disabled</ion-label>\r\n      <ion-input type=\"text\" disabled></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"fixed\">Label</ion-label>\r\n      <ion-input type=\"text\" value=\"Readonly\" readonly></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-list-header>\r\n      <ion-label>Stacked Labels</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Default</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Disabled</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Disabled with placeholder\" disabled></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Label</ion-label>\r\n      <ion-input type=\"text\" value=\"Readonly\" readonly></ion-input>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-list-header>\r\n      <ion-label>States</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Full Name</ion-label>\r\n      <ion-input type=\"text\" value=\"Sophia Miller\"></ion-input>\r\n      <ion-icon name=\"checkmark\" slot=\"end\" size=\"small\" color=\"success\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Email</ion-label>\r\n      <ion-input type=\"text\" value=\"email@email.com\" color=\"danger\"></ion-input>\r\n      <ion-icon name=\"close\" slot=\"end\" size=\"small\" color=\"danger\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-hint\">\r\n      <ion-label class=\"ion-text-wrap\" color=\"danger\">\r\n        <p>Email is not registered</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Full Name</ion-label>\r\n      <ion-input type=\"text\" value=\"Sophia Miller\"></ion-input>\r\n      <ion-icon name=\"alert-circle\" size=\"small\" slot=\"end\" color=\"light\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-hint\">\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <p>Make sure your name is written exactly as it appears on your card.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">Phone number</ion-label>\r\n      <ion-input type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item class=\"is-item-hint\">\r\n      <ion-label class=\"ion-text-wrap\">\r\n        <p>Your phone number is used to verify the account. Check your phone to get a verification code which will be valid for 3 hours.</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-list-header>\r\n      <ion-label>Icons</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">First Name</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Default\"></ion-input>\r\n      <ion-icon name=\"person\" size=\"small\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">First Name</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Disabled\" disabled></ion-input>\r\n      <ion-icon name=\"person\" size=\"small\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"stacked\">First Name</ion-label>\r\n      <ion-input type=\"text\" value=\"Readonly\" readonly></ion-input>\r\n      <ion-icon name=\"person\" size=\"small\" slot=\"end\"></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/inputs/inputs.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/inputs/inputs.module.ts ***!
    \*****************************************/

  /*! exports provided: InputsPageModule */

  /***/
  function srcAppInputsInputsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputsPageModule", function () {
      return InputsPageModule;
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


    var _inputs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inputs.page */
    "./src/app/inputs/inputs.page.ts");

    var routes = [{
      path: '',
      component: _inputs_page__WEBPACK_IMPORTED_MODULE_6__["InputsPage"]
    }];

    var InputsPageModule = function InputsPageModule() {
      _classCallCheck(this, InputsPageModule);
    };

    InputsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_inputs_page__WEBPACK_IMPORTED_MODULE_6__["InputsPage"]]
    })], InputsPageModule);
    /***/
  },

  /***/
  "./src/app/inputs/inputs.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/inputs/inputs.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppInputsInputsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0cy9pbnB1dHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/inputs/inputs.page.ts":
  /*!***************************************!*\
    !*** ./src/app/inputs/inputs.page.ts ***!
    \***************************************/

  /*! exports provided: InputsPage */

  /***/
  function srcAppInputsInputsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputsPage", function () {
      return InputsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InputsPage = /*#__PURE__*/function () {
      function InputsPage() {
        _classCallCheck(this, InputsPage);
      }

      _createClass(InputsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InputsPage;
    }();

    InputsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inputs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inputs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inputs/inputs.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inputs.page.scss */
      "./src/app/inputs/inputs.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InputsPage);
    /***/
  }
}]);
//# sourceMappingURL=inputs-inputs-module-es5.js.map