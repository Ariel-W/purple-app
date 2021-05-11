function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inset-list-inset-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inset-list/inset-list.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inset-list/inset-list.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInsetListInsetListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Inset List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list inset>\r\n    <ion-item *ngFor=\"let item of items\">\r\n      <ion-label>{{ item }}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/inset-list/inset-list.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/inset-list/inset-list.module.ts ***!
    \*************************************************/

  /*! exports provided: InsetListPageModule */

  /***/
  function srcAppInsetListInsetListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsetListPageModule", function () {
      return InsetListPageModule;
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


    var _inset_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inset-list.page */
    "./src/app/inset-list/inset-list.page.ts");

    var routes = [{
      path: '',
      component: _inset_list_page__WEBPACK_IMPORTED_MODULE_6__["InsetListPage"]
    }];

    var InsetListPageModule = function InsetListPageModule() {
      _classCallCheck(this, InsetListPageModule);
    };

    InsetListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_inset_list_page__WEBPACK_IMPORTED_MODULE_6__["InsetListPage"]]
    })], InsetListPageModule);
    /***/
  },

  /***/
  "./src/app/inset-list/inset-list.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/inset-list/inset-list.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInsetListInsetListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luc2V0LWxpc3QvaW5zZXQtbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/inset-list/inset-list.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/inset-list/inset-list.page.ts ***!
    \***********************************************/

  /*! exports provided: InsetListPage */

  /***/
  function srcAppInsetListInsetListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsetListPage", function () {
      return InsetListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var InsetListPage = /*#__PURE__*/function () {
      function InsetListPage() {
        _classCallCheck(this, InsetListPage);

        this.items = ['Pokémon Yellow', 'Super Metroid', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World', 'Street Fighter II', 'Half Life', 'Final Fantasy VII', 'Star Fox', 'Tetris', 'Donkey Kong III', 'GoldenEye 007', 'Doom', 'Fallout', 'GTA', 'Halo'];
      }

      _createClass(InsetListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InsetListPage;
    }();

    InsetListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inset-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inset-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inset-list/inset-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inset-list.page.scss */
      "./src/app/inset-list/inset-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], InsetListPage);
    /***/
  }
}]);
//# sourceMappingURL=inset-list-inset-list-module-es5.js.map