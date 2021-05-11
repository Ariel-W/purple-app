function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dividers-list-dividers-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dividers-list/dividers-list.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dividers-list/dividers-list.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDividersListDividersListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Dividers List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider color=\"light\">\r\n      <ion-label>A</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>Angola</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Argentina</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Armenia</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Australia</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Austria</ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider color=\"light\">\r\n      <ion-label>B</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>Bangladesh</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Belarus</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Belgium</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Bhutan</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Bolivia</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Brazil</ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider color=\"light\">\r\n      <ion-label>C</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>Cambodia</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Cameroon</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Canada</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Chile</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>China</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Colombia</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Costa Rica</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Cuba</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Cyprus</ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>Czech Republic</ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/dividers-list/dividers-list.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dividers-list/dividers-list.module.ts ***!
    \*******************************************************/

  /*! exports provided: DividersListPageModule */

  /***/
  function srcAppDividersListDividersListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DividersListPageModule", function () {
      return DividersListPageModule;
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


    var _dividers_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dividers-list.page */
    "./src/app/dividers-list/dividers-list.page.ts");

    var routes = [{
      path: '',
      component: _dividers_list_page__WEBPACK_IMPORTED_MODULE_6__["DividersListPage"]
    }];

    var DividersListPageModule = function DividersListPageModule() {
      _classCallCheck(this, DividersListPageModule);
    };

    DividersListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_dividers_list_page__WEBPACK_IMPORTED_MODULE_6__["DividersListPage"]]
    })], DividersListPageModule);
    /***/
  },

  /***/
  "./src/app/dividers-list/dividers-list.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/dividers-list/dividers-list.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDividersListDividersListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpdmlkZXJzLWxpc3QvZGl2aWRlcnMtbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dividers-list/dividers-list.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/dividers-list/dividers-list.page.ts ***!
    \*****************************************************/

  /*! exports provided: DividersListPage */

  /***/
  function srcAppDividersListDividersListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DividersListPage", function () {
      return DividersListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var DividersListPage = /*#__PURE__*/function () {
      function DividersListPage() {
        _classCallCheck(this, DividersListPage);
      }

      _createClass(DividersListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DividersListPage;
    }();

    DividersListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dividers-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dividers-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dividers-list/dividers-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dividers-list.page.scss */
      "./src/app/dividers-list/dividers-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], DividersListPage);
    /***/
  }
}]);
//# sourceMappingURL=dividers-list-dividers-list-module-es5.js.map