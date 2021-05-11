function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-thumb-centered-list-thumb-centered-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-centered/list-thumb-centered.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-centered/list-thumb-centered.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppListThumbCenteredListThumbCenteredPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Thumbnail List Clean</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-dark\">\r\n        <ion-icon name=\"archive\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Mailbox</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-success\">\r\n        <ion-icon name=\"folder-open\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Money</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-secondary\">\r\n        <ion-icon name=\"pie-chart\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Statistics</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-primary\">\r\n        <ion-icon name=\"person\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Profiles</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail is-background-light\">\r\n        <ion-icon name=\"apps\"></ion-icon>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Sign Up / Login</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/list-thumb-centered/list-thumb-centered.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/list-thumb-centered/list-thumb-centered.module.ts ***!
    \*******************************************************************/

  /*! exports provided: ListThumbCenteredPageModule */

  /***/
  function srcAppListThumbCenteredListThumbCenteredModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListThumbCenteredPageModule", function () {
      return ListThumbCenteredPageModule;
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


    var _list_thumb_centered_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-thumb-centered.page */
    "./src/app/list-thumb-centered/list-thumb-centered.page.ts");

    var routes = [{
      path: '',
      component: _list_thumb_centered_page__WEBPACK_IMPORTED_MODULE_6__["ListThumbCenteredPage"]
    }];

    var ListThumbCenteredPageModule = function ListThumbCenteredPageModule() {
      _classCallCheck(this, ListThumbCenteredPageModule);
    };

    ListThumbCenteredPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_list_thumb_centered_page__WEBPACK_IMPORTED_MODULE_6__["ListThumbCenteredPage"]]
    })], ListThumbCenteredPageModule);
    /***/
  },

  /***/
  "./src/app/list-thumb-centered/list-thumb-centered.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/list-thumb-centered/list-thumb-centered.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppListThumbCenteredListThumbCenteredPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtdGh1bWItY2VudGVyZWQvbGlzdC10aHVtYi1jZW50ZXJlZC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/list-thumb-centered/list-thumb-centered.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/list-thumb-centered/list-thumb-centered.page.ts ***!
    \*****************************************************************/

  /*! exports provided: ListThumbCenteredPage */

  /***/
  function srcAppListThumbCenteredListThumbCenteredPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListThumbCenteredPage", function () {
      return ListThumbCenteredPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ListThumbCenteredPage = /*#__PURE__*/function () {
      function ListThumbCenteredPage() {
        _classCallCheck(this, ListThumbCenteredPage);
      }

      _createClass(ListThumbCenteredPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ListThumbCenteredPage;
    }();

    ListThumbCenteredPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list-thumb-centered',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./list-thumb-centered.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/list-thumb-centered/list-thumb-centered.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./list-thumb-centered.page.scss */
      "./src/app/list-thumb-centered/list-thumb-centered.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ListThumbCenteredPage);
    /***/
  }
}]);
//# sourceMappingURL=list-thumb-centered-list-thumb-centered-module-es5.js.map