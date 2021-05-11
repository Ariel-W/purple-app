function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-inbox-third-empty-inbox-third-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-inbox-third/empty-inbox-third.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-inbox-third/empty-inbox-third.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyInboxThirdEmptyInboxThirdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Mail</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content-background\">\r\n    <div class=\"is-empty-state-text\">\r\n      <p class=\"ion-padding-top ion-no-margin\">\r\n        You have no mail\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" class=\"ion-no-margin\">\r\n    <ion-fab-button class=\"ion-no-margin\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-inbox-third/empty-inbox-third.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/empty-inbox-third/empty-inbox-third.module.ts ***!
    \***************************************************************/

  /*! exports provided: EmptyInboxThirdPageModule */

  /***/
  function srcAppEmptyInboxThirdEmptyInboxThirdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyInboxThirdPageModule", function () {
      return EmptyInboxThirdPageModule;
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


    var _empty_inbox_third_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-inbox-third.page */
    "./src/app/empty-inbox-third/empty-inbox-third.page.ts");

    var routes = [{
      path: '',
      component: _empty_inbox_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyInboxThirdPage"]
    }];

    var EmptyInboxThirdPageModule = function EmptyInboxThirdPageModule() {
      _classCallCheck(this, EmptyInboxThirdPageModule);
    };

    EmptyInboxThirdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_inbox_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyInboxThirdPage"]]
    })], EmptyInboxThirdPageModule);
    /***/
  },

  /***/
  "./src/app/empty-inbox-third/empty-inbox-third.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/empty-inbox-third/empty-inbox-third.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyInboxThirdEmptyInboxThirdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content-background {\n  background-image: url('empty-inbox-3.png');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n}\n.is-empty-state-content-background .is-empty-state-text {\n  width: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n}\nion-fab-button {\n  --background: transparent;\n  --color: var(--ion-color-primary);\n  --box-shadow: 0;\n  --height: 32px;\n  --width: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1pbmJveC10aGlyZC9lbXB0eS1pbmJveC10aGlyZC5wYWdlLnNjc3MiLCJzcmMvYXBwL2VtcHR5LWluYm94LXRoaXJkL2VtcHR5LWluYm94LXRoaXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKO0FER0E7RUFDRSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9lbXB0eS1pbmJveC10aGlyZC9lbXB0eS1pbmJveC10aGlyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1ncy9lbXB0eS1pbmJveC0zLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIC5pcy1lbXB0eS1zdGF0ZS10ZXh0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMzJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgLS1ib3gtc2hhZG93OiAwO1xyXG4gIC0taGVpZ2h0OiAzMnB4O1xyXG4gIC0td2lkdGg6IDMycHg7XHJcbn1cclxuIiwiLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWdzL2VtcHR5LWluYm94LTMucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQgLmlzLWVtcHR5LXN0YXRlLXRleHQge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDMycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAtLWJveC1zaGFkb3c6IDA7XG4gIC0taGVpZ2h0OiAzMnB4O1xuICAtLXdpZHRoOiAzMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/empty-inbox-third/empty-inbox-third.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/empty-inbox-third/empty-inbox-third.page.ts ***!
    \*************************************************************/

  /*! exports provided: EmptyInboxThirdPage */

  /***/
  function srcAppEmptyInboxThirdEmptyInboxThirdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyInboxThirdPage", function () {
      return EmptyInboxThirdPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmptyInboxThirdPage = /*#__PURE__*/function () {
      function EmptyInboxThirdPage() {
        _classCallCheck(this, EmptyInboxThirdPage);
      }

      _createClass(EmptyInboxThirdPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyInboxThirdPage;
    }();

    EmptyInboxThirdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-inbox-third',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-inbox-third.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-inbox-third/empty-inbox-third.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-inbox-third.page.scss */
      "./src/app/empty-inbox-third/empty-inbox-third.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyInboxThirdPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-inbox-third-empty-inbox-third-module-es5.js.map