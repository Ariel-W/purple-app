function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grid-tiles-grid-tiles-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/grid-tiles/grid-tiles.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grid-tiles/grid-tiles.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppGridTilesGridTilesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Grid Tiles</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"is-tile ion-no-padding\">\r\n        <ion-item class=\"ion-text-center\" routerLink=\"/grid-tiles\" lines=\"none\" detail=\"false\">\r\n          <ion-label class=\"ion-no-margin\">\r\n            <ion-icon name=\"file-tray\"></ion-icon>\r\n            <h6 class=\"is-tile-text\">\r\n              Mailbox\r\n            </h6>\r\n            <p class=\"is-tile-text\">\r\n              Every large design company whether it’s a multi-national.\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item class=\"ion-text-center\" routerLink=\"/grid-tiles\" lines=\"none\" detail=\"false\">\r\n          <ion-label class=\"ion-no-margin\">\r\n            <ion-icon name=\"card\"></ion-icon>\r\n            <h6 class=\"is-tile-text\">\r\n              Money\r\n            </h6>\r\n            <p class=\"is-tile-text\">\r\n              When I was just starting 6th grade I got my first job.\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item class=\"ion-text-center\" routerLink=\"/grid-tiles\" lines=\"none\" detail=\"false\">\r\n          <ion-label class=\"ion-no-margin\">\r\n            <ion-icon name=\"stats-chart\"></ion-icon>\r\n            <h6 class=\"is-tile-text\">\r\n              Statistics\r\n            </h6>\r\n            <p class=\"is-tile-text\">\r\n              If you haven’t found relief for migraine, you’re not alone.\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item class=\"ion-text-center\" routerLink=\"/grid-tiles\" lines=\"none\" detail=\"false\">\r\n          <ion-label class=\"ion-no-margin\">\r\n            <ion-icon name=\"person\"></ion-icon>\r\n            <h6 class=\"is-tile-text\">\r\n              Profiles\r\n            </h6>\r\n            <p class=\"is-tile-text\">\r\n              Gas prices are soaring! This has resulted.\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item class=\"ion-text-center\" routerLink=\"/grid-tiles\" lines=\"none\" detail=\"false\">\r\n          <ion-label class=\"ion-no-margin\">\r\n            <ion-icon name=\"apps\"></ion-icon>\r\n            <h6 class=\"is-tile-text\">\r\n              Sign Up / Login\r\n            </h6>\r\n            <p class=\"is-tile-text\">\r\n              Dream interpretation has many forms; it can be done.\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item class=\"ion-text-center\" routerLink=\"/grid-tiles\" lines=\"none\" detail=\"false\">\r\n          <ion-label class=\"ion-no-margin\">\r\n            <ion-icon name=\"heart\"></ion-icon>\r\n            <h6 class=\"is-tile-text\">\r\n              Social\r\n            </h6>\r\n            <p class=\"is-tile-text\">\r\n              When television was young, was hugely popular.\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/grid-tiles/grid-tiles.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/grid-tiles/grid-tiles.module.ts ***!
    \*************************************************/

  /*! exports provided: GridTilesPageModule */

  /***/
  function srcAppGridTilesGridTilesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridTilesPageModule", function () {
      return GridTilesPageModule;
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


    var _grid_tiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./grid-tiles.page */
    "./src/app/grid-tiles/grid-tiles.page.ts");

    var routes = [{
      path: '',
      component: _grid_tiles_page__WEBPACK_IMPORTED_MODULE_6__["GridTilesPage"]
    }];

    var GridTilesPageModule = function GridTilesPageModule() {
      _classCallCheck(this, GridTilesPageModule);
    };

    GridTilesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_grid_tiles_page__WEBPACK_IMPORTED_MODULE_6__["GridTilesPage"]]
    })], GridTilesPageModule);
    /***/
  },

  /***/
  "./src/app/grid-tiles/grid-tiles.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/grid-tiles/grid-tiles.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppGridTilesGridTilesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-tile ion-item {\n  padding: 16px;\n}\n.is-tile ion-item h6 {\n  margin-top: 1.6rem;\n  margin-bottom: 1em;\n  font-size: 1em;\n}\n.is-tile ion-item p {\n  font-weight: lighter;\n  margin: 1em 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9ncmlkLXRpbGVzL2dyaWQtdGlsZXMucGFnZS5zY3NzIiwic3JjL2FwcC9ncmlkLXRpbGVzL2dyaWQtdGlsZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQ0FKO0FERUk7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0FOO0FER0k7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUNETiIsImZpbGUiOiJzcmMvYXBwL2dyaWQtdGlsZXMvZ3JpZC10aWxlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtdGlsZXtcclxuICBpb24taXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIGg2IHtcclxuICAgICAgbWFyZ2luLXRvcDogMS42cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmlzLXRpbGUgaW9uLWl0ZW0ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuLmlzLXRpbGUgaW9uLWl0ZW0gaDYge1xuICBtYXJnaW4tdG9wOiAxLjZyZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgZm9udC1zaXplOiAxZW07XG59XG4uaXMtdGlsZSBpb24taXRlbSBwIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogMWVtIDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/grid-tiles/grid-tiles.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/grid-tiles/grid-tiles.page.ts ***!
    \***********************************************/

  /*! exports provided: GridTilesPage */

  /***/
  function srcAppGridTilesGridTilesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GridTilesPage", function () {
      return GridTilesPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GridTilesPage = /*#__PURE__*/function () {
      function GridTilesPage() {
        _classCallCheck(this, GridTilesPage);
      }

      _createClass(GridTilesPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GridTilesPage;
    }();

    GridTilesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-grid-tiles',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./grid-tiles.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/grid-tiles/grid-tiles.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./grid-tiles.page.scss */
      "./src/app/grid-tiles/grid-tiles.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], GridTilesPage);
    /***/
  }
}]);
//# sourceMappingURL=grid-tiles-grid-tiles-module-es5.js.map