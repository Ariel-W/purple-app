function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-photos-second-empty-photos-second-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-second/empty-photos-second.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-second/empty-photos-second.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyPhotosSecondEmptyPhotosSecondPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Take Some Pictures</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content\">\r\n    <img src=\"assets/imgs/empty-photos-2.png\"/>\r\n    <h3>Take Some Pictures</h3>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>\r\n    <ion-button shape=\"round\" color=\"primary\">CAMERA</ion-button>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-photos-second/empty-photos-second.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/empty-photos-second/empty-photos-second.module.ts ***!
    \*******************************************************************/

  /*! exports provided: EmptyPhotosSecondPageModule */

  /***/
  function srcAppEmptyPhotosSecondEmptyPhotosSecondModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyPhotosSecondPageModule", function () {
      return EmptyPhotosSecondPageModule;
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


    var _empty_photos_second_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-photos-second.page */
    "./src/app/empty-photos-second/empty-photos-second.page.ts");

    var routes = [{
      path: '',
      component: _empty_photos_second_page__WEBPACK_IMPORTED_MODULE_6__["EmptyPhotosSecondPage"]
    }];

    var EmptyPhotosSecondPageModule = function EmptyPhotosSecondPageModule() {
      _classCallCheck(this, EmptyPhotosSecondPageModule);
    };

    EmptyPhotosSecondPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_photos_second_page__WEBPACK_IMPORTED_MODULE_6__["EmptyPhotosSecondPage"]]
    })], EmptyPhotosSecondPageModule);
    /***/
  },

  /***/
  "./src/app/empty-photos-second/empty-photos-second.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/empty-photos-second/empty-photos-second.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyPhotosSecondEmptyPhotosSecondPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content {\n  width: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-top: 20vh;\n}\n.is-empty-state-content img {\n  width: 55%;\n  max-width: 370px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1waG90b3Mtc2Vjb25kL2VtcHR5LXBob3Rvcy1zZWNvbmQucGFnZS5zY3NzIiwic3JjL2FwcC9lbXB0eS1waG90b3Mtc2Vjb25kL2VtcHR5LXBob3Rvcy1zZWNvbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURDRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZW1wdHktcGhvdG9zLXNlY29uZC9lbXB0eS1waG90b3Mtc2Vjb25kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICBwYWRkaW5nLXRvcDogMjB2aDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gIH1cclxufVxyXG4iLCIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgcGFkZGluZy10b3A6IDIwdmg7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBpbWcge1xuICB3aWR0aDogNTUlO1xuICBtYXgtd2lkdGg6IDM3MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/empty-photos-second/empty-photos-second.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/empty-photos-second/empty-photos-second.page.ts ***!
    \*****************************************************************/

  /*! exports provided: EmptyPhotosSecondPage */

  /***/
  function srcAppEmptyPhotosSecondEmptyPhotosSecondPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyPhotosSecondPage", function () {
      return EmptyPhotosSecondPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmptyPhotosSecondPage = /*#__PURE__*/function () {
      function EmptyPhotosSecondPage() {
        _classCallCheck(this, EmptyPhotosSecondPage);
      }

      _createClass(EmptyPhotosSecondPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyPhotosSecondPage;
    }();

    EmptyPhotosSecondPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-photos-second',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-photos-second.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-second/empty-photos-second.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-photos-second.page.scss */
      "./src/app/empty-photos-second/empty-photos-second.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyPhotosSecondPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-photos-second-empty-photos-second-module-es5.js.map