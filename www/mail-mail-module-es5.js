function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mail-mail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/mail/mail.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mail/mail.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMailMailPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Mail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 class=\"ion-padding-horizontal\">Freelance job from San Fracisco</h1>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Isaac Goodman</h2>\r\n        <p>to: You • Aug 16 at 03:09 AM</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding-horizontal is-mail-body\">\r\n    <p>Hi Komol,</p>\r\n    <p>We are looking for someone who would geek over large amounts of data as well as can be very thoughtful in creating visual elements for our users.</p>\r\n    <p>Please take a look and let me know if you would be interested in taking the plunge. If you are, love to schedule a chat with you sometime this week.</p>\r\n    <p>Best, Isaac Goodman</p>\r\n  </div>\r\n\r\n  <ion-list class=\"is-list-item-start-buttons-end ion-padding ion-no-margin\">\r\n    <ion-item class=\"ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <ion-icon name=\"document\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-item-start-buttons-end-title\">SuperAgency_Present</p>\r\n        <p>pdf • 34.3mb</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-item-start-buttons-end-button-group\">\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"eye\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button class=\"ion-no-margin\" fill=\"clear\">\r\n          <ion-icon name=\"arrow-down\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-grid class=\"is-grid ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-list lines=\"none\" class=\"ion-padding ion-no-margin is-list-buttons\">\r\n          <ion-item color=\"light\" button detail=\"false\">\r\n            <ion-label>Forward</ion-label>\r\n            <ion-icon slot=\"end\" name=\"arrow-up\"></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding\">\r\n        <ion-list lines=\"none\" class=\"ion-padding ion-no-margin is-list-buttons\">\r\n          <ion-item color=\"primary\" button detail=\"false\">\r\n            <ion-label>Reply</ion-label>\r\n            <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n          </ion-item>\r\n        </ion-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/mail/mail.module.ts":
  /*!*************************************!*\
    !*** ./src/app/mail/mail.module.ts ***!
    \*************************************/

  /*! exports provided: MailPageModule */

  /***/
  function srcAppMailMailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailPageModule", function () {
      return MailPageModule;
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


    var _mail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./mail.page */
    "./src/app/mail/mail.page.ts");

    var routes = [{
      path: '',
      component: _mail_page__WEBPACK_IMPORTED_MODULE_6__["MailPage"]
    }];

    var MailPageModule = function MailPageModule() {
      _classCallCheck(this, MailPageModule);
    };

    MailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_mail_page__WEBPACK_IMPORTED_MODULE_6__["MailPage"]]
    })], MailPageModule);
    /***/
  },

  /***/
  "./src/app/mail/mail.page.scss":
  /*!*************************************!*\
    !*** ./src/app/mail/mail.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppMailMailPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haWwvbWFpbC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/mail/mail.page.ts":
  /*!***********************************!*\
    !*** ./src/app/mail/mail.page.ts ***!
    \***********************************/

  /*! exports provided: MailPage */

  /***/
  function srcAppMailMailPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MailPage", function () {
      return MailPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MailPage = /*#__PURE__*/function () {
      function MailPage() {
        _classCallCheck(this, MailPage);
      }

      _createClass(MailPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MailPage;
    }();

    MailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mail.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/mail/mail.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mail.page.scss */
      "./src/app/mail/mail.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], MailPage);
    /***/
  }
}]);
//# sourceMappingURL=mail-mail-module-es5.js.map