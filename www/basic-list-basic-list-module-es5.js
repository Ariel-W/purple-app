function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basic-list-basic-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/basic-list/basic-list.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic-list/basic-list.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBasicListBasicListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Basic List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-item button *ngFor=\"let item of items\">\r\n      <ion-label>{{ item }}</ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/basic-list/basic-list.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/basic-list/basic-list.module.ts ***!
    \*************************************************/

  /*! exports provided: BasicListPageModule */

  /***/
  function srcAppBasicListBasicListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicListPageModule", function () {
      return BasicListPageModule;
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


    var _basic_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./basic-list.page */
    "./src/app/basic-list/basic-list.page.ts");

    var routes = [{
      path: '',
      component: _basic_list_page__WEBPACK_IMPORTED_MODULE_6__["BasicListPage"]
    }];

    var BasicListPageModule = function BasicListPageModule() {
      _classCallCheck(this, BasicListPageModule);
    };

    BasicListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_basic_list_page__WEBPACK_IMPORTED_MODULE_6__["BasicListPage"]]
    })], BasicListPageModule);
    /***/
  },

  /***/
  "./src/app/basic-list/basic-list.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/basic-list/basic-list.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBasicListBasicListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljLWxpc3QvYmFzaWMtbGlzdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/basic-list/basic-list.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/basic-list/basic-list.page.ts ***!
    \***********************************************/

  /*! exports provided: BasicListPage */

  /***/
  function srcAppBasicListBasicListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicListPage", function () {
      return BasicListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BasicListPage = /*#__PURE__*/function () {
      function BasicListPage() {
        _classCallCheck(this, BasicListPage);

        this.items = ['Pokémon Yellow', 'Super Metroid', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World', 'Street Fighter II', 'Half Life', 'Final Fantasy VII', 'Star Fox', 'Tetris', 'Donkey Kong III', 'GoldenEye 007', 'Doom', 'Fallout', 'GTA', 'Halo'];
      }

      _createClass(BasicListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicListPage;
    }();

    BasicListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basic-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/basic-list/basic-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basic-list.page.scss */
      "./src/app/basic-list/basic-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], BasicListPage);
    /***/
  }
}]);
//# sourceMappingURL=basic-list-basic-list-module-es5.js.map