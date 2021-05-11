function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-photos-third-empty-photos-third-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-third/empty-photos-third.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-third/empty-photos-third.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyPhotosThirdEmptyPhotosThirdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Photos Here</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content theme-{{env.theme}}\">\r\n    <ion-button fill=\"clear\">\r\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <p class=\"ion-padding-top ion-no-margin\">\r\n      Take some awesome pictures\r\n    </p>\r\n\r\n    <img src=\"assets/imgs/empty-photos-3.png\"/>\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-photos-third/empty-photos-third.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/empty-photos-third/empty-photos-third.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EmptyPhotosThirdPageModule */

  /***/
  function srcAppEmptyPhotosThirdEmptyPhotosThirdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyPhotosThirdPageModule", function () {
      return EmptyPhotosThirdPageModule;
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


    var _empty_photos_third_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-photos-third.page */
    "./src/app/empty-photos-third/empty-photos-third.page.ts");

    var routes = [{
      path: '',
      component: _empty_photos_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyPhotosThirdPage"]
    }];

    var EmptyPhotosThirdPageModule = function EmptyPhotosThirdPageModule() {
      _classCallCheck(this, EmptyPhotosThirdPageModule);
    };

    EmptyPhotosThirdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_photos_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyPhotosThirdPage"]]
    })], EmptyPhotosThirdPageModule);
    /***/
  },

  /***/
  "./src/app/empty-photos-third/empty-photos-third.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/empty-photos-third/empty-photos-third.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyPhotosThirdEmptyPhotosThirdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content {\n  height: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n  position: relative;\n}\n.is-empty-state-content ion-button {\n  position: absolute;\n  right: 0;\n}\n.is-empty-state-content img {\n  width: 65%;\n  max-width: 370px;\n  padding-top: 20vh;\n}\n.is-empty-state-content.theme-dark {\n  background: black;\n}\n.is-empty-state-content.theme-light {\n  background: #F6F9FA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1waG90b3MtdGhpcmQvZW1wdHktcGhvdG9zLXRoaXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wdHktcGhvdG9zLXRoaXJkL2VtcHR5LXBob3Rvcy10aGlyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDQ0o7QURFRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURJQTtFQUNFLGlCQUFBO0FDREY7QURJQTtFQUNFLG1CQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9lbXB0eS1waG90b3MtdGhpcmQvZW1wdHktcGhvdG9zLXRoaXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgfVxyXG59XHJcblxyXG4uaXMtZW1wdHktc3RhdGUtY29udGVudC50aGVtZS1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG5cclxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQudGhlbWUtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICNGNkY5RkE7XHJcbn1cclxuIiwiLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBpb24tYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IGltZyB7XG4gIHdpZHRoOiA2NSU7XG4gIG1heC13aWR0aDogMzcwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHZoO1xufVxuXG4uaXMtZW1wdHktc3RhdGUtY29udGVudC50aGVtZS1kYXJrIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG5cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LnRoZW1lLWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI0Y2RjlGQTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/empty-photos-third/empty-photos-third.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/empty-photos-third/empty-photos-third.page.ts ***!
    \***************************************************************/

  /*! exports provided: EmptyPhotosThirdPage */

  /***/
  function srcAppEmptyPhotosThirdEmptyPhotosThirdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyPhotosThirdPage", function () {
      return EmptyPhotosThirdPage;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var EmptyPhotosThirdPage = /*#__PURE__*/function () {
      function EmptyPhotosThirdPage() {
        _classCallCheck(this, EmptyPhotosThirdPage);

        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
      }

      _createClass(EmptyPhotosThirdPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyPhotosThirdPage;
    }();

    EmptyPhotosThirdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-photos-third',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-photos-third.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-third/empty-photos-third.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-photos-third.page.scss */
      "./src/app/empty-photos-third/empty-photos-third.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyPhotosThirdPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-photos-third-empty-photos-third-module-es5.js.map