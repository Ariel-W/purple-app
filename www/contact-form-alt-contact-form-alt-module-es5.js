function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-form-alt-contact-form-alt-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form-alt/contact-form-alt.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form-alt/contact-form-alt.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactFormAltContactFormAltPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Contact Form Alternative</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Recipient</ion-label>\r\n      <ion-select [interfaceOptions]=\"customAlertOptions\" interface=\"alert\" multiple=\"false\" value=\"one\">\r\n        <ion-select-option value=\"one\">Customer Support</ion-select-option>\r\n        <ion-select-option value=\"two\">Marketing Department</ion-select-option>\r\n        <ion-select-option value=\"three\">Careers</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Title</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Title\" #title></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Message</ion-label>\r\n      <ion-textarea type=\"text\" placeholder=\"Message\" #message></ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button fill=\"solid\" expand=\"full\" [disabled]=\"!(title.value && message.value)\" class=\"ion-no-margin\" size=\"large\">\r\n    Send\r\n  </ion-button>\r\n</ion-footer>\r\n";
    /***/
  },

  /***/
  "./src/app/contact-form-alt/contact-form-alt.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/contact-form-alt/contact-form-alt.module.ts ***!
    \*************************************************************/

  /*! exports provided: ContactFormAltPageModule */

  /***/
  function srcAppContactFormAltContactFormAltModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormAltPageModule", function () {
      return ContactFormAltPageModule;
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


    var _contact_form_alt_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact-form-alt.page */
    "./src/app/contact-form-alt/contact-form-alt.page.ts");

    var routes = [{
      path: '',
      component: _contact_form_alt_page__WEBPACK_IMPORTED_MODULE_6__["ContactFormAltPage"]
    }];

    var ContactFormAltPageModule = function ContactFormAltPageModule() {
      _classCallCheck(this, ContactFormAltPageModule);
    };

    ContactFormAltPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_contact_form_alt_page__WEBPACK_IMPORTED_MODULE_6__["ContactFormAltPage"]]
    })], ContactFormAltPageModule);
    /***/
  },

  /***/
  "./src/app/contact-form-alt/contact-form-alt.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/contact-form-alt/contact-form-alt.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactFormAltContactFormAltPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZm9ybS1hbHQvY29udGFjdC1mb3JtLWFsdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/contact-form-alt/contact-form-alt.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/contact-form-alt/contact-form-alt.page.ts ***!
    \***********************************************************/

  /*! exports provided: ContactFormAltPage */

  /***/
  function srcAppContactFormAltContactFormAltPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactFormAltPage", function () {
      return ContactFormAltPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactFormAltPage = /*#__PURE__*/function () {
      function ContactFormAltPage() {
        _classCallCheck(this, ContactFormAltPage);

        this.customAlertOptions = {
          translucent: true
        };
      }

      _createClass(ContactFormAltPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactFormAltPage;
    }();

    ContactFormAltPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact-form-alt',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contact-form-alt.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form-alt/contact-form-alt.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contact-form-alt.page.scss */
      "./src/app/contact-form-alt/contact-form-alt.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ContactFormAltPage);
    /***/
  }
}]);
//# sourceMappingURL=contact-form-alt-contact-form-alt-module-es5.js.map