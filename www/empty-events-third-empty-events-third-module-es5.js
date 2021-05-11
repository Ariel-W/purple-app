function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-events-third-empty-events-third-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-third/empty-events-third.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-third/empty-events-third.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyEventsThirdEmptyEventsThirdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Events Here</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content\">\r\n    <ion-button fill=\"clear\">\r\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <p class=\"ion-padding-top ion-no-margin\">\r\n      Your events will appear here\r\n    </p>\r\n\r\n    <img src=\"assets/imgs/empty-events-3.png\"/>\r\n\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-events-third/empty-events-third.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/empty-events-third/empty-events-third.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EmptyEventsThirdPageModule */

  /***/
  function srcAppEmptyEventsThirdEmptyEventsThirdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyEventsThirdPageModule", function () {
      return EmptyEventsThirdPageModule;
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


    var _empty_events_third_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-events-third.page */
    "./src/app/empty-events-third/empty-events-third.page.ts");

    var routes = [{
      path: '',
      component: _empty_events_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyEventsThirdPage"]
    }];

    var EmptyEventsThirdPageModule = function EmptyEventsThirdPageModule() {
      _classCallCheck(this, EmptyEventsThirdPageModule);
    };

    EmptyEventsThirdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_events_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyEventsThirdPage"]]
    })], EmptyEventsThirdPageModule);
    /***/
  },

  /***/
  "./src/app/empty-events-third/empty-events-third.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/empty-events-third/empty-events-third.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyEventsThirdEmptyEventsThirdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content {\n  height: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n  position: relative;\n}\n.is-empty-state-content ion-button {\n  position: absolute;\n  right: 0;\n}\n.is-empty-state-content img {\n  width: 65%;\n  max-width: 370px;\n  padding-top: 20vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1ldmVudHMtdGhpcmQvZW1wdHktZXZlbnRzLXRoaXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wdHktZXZlbnRzLXRoaXJkL2VtcHR5LWV2ZW50cy10aGlyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDQ0o7QURFRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9lbXB0eS1ldmVudHMtdGhpcmQvZW1wdHktZXZlbnRzLXRoaXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgfVxyXG59XHJcbiIsIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBpbWcge1xuICB3aWR0aDogNjUlO1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICBwYWRkaW5nLXRvcDogMjB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/empty-events-third/empty-events-third.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/empty-events-third/empty-events-third.page.ts ***!
    \***************************************************************/

  /*! exports provided: EmptyEventsThirdPage */

  /***/
  function srcAppEmptyEventsThirdEmptyEventsThirdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyEventsThirdPage", function () {
      return EmptyEventsThirdPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmptyEventsThirdPage = /*#__PURE__*/function () {
      function EmptyEventsThirdPage() {
        _classCallCheck(this, EmptyEventsThirdPage);
      }

      _createClass(EmptyEventsThirdPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyEventsThirdPage;
    }();

    EmptyEventsThirdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-events-third',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-events-third.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-events-third/empty-events-third.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-events-third.page.scss */
      "./src/app/empty-events-third/empty-events-third.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyEventsThirdPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-events-third-empty-events-third-module-es5.js.map