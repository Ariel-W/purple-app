function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-notification-third-empty-notification-third-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-notification-third/empty-notification-third.page.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-notification-third/empty-notification-third.page.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyNotificationThirdEmptyNotificationThirdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>You Have None</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content-background theme-{{env.theme}}\">\r\n    <p class=\"ion-padding-top ion-no-margin\">\r\n      You have none\r\n    </p>\r\n\r\n    <img src=\"assets/imgs/empty-notification-3.png\"/>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-notification-third/empty-notification-third.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/empty-notification-third/empty-notification-third.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: EmptyNotificationThirdPageModule */

  /***/
  function srcAppEmptyNotificationThirdEmptyNotificationThirdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyNotificationThirdPageModule", function () {
      return EmptyNotificationThirdPageModule;
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


    var _empty_notification_third_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-notification-third.page */
    "./src/app/empty-notification-third/empty-notification-third.page.ts");

    var routes = [{
      path: '',
      component: _empty_notification_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyNotificationThirdPage"]
    }];

    var EmptyNotificationThirdPageModule = function EmptyNotificationThirdPageModule() {
      _classCallCheck(this, EmptyNotificationThirdPageModule);
    };

    EmptyNotificationThirdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_notification_third_page__WEBPACK_IMPORTED_MODULE_6__["EmptyNotificationThirdPage"]]
    })], EmptyNotificationThirdPageModule);
    /***/
  },

  /***/
  "./src/app/empty-notification-third/empty-notification-third.page.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/empty-notification-third/empty-notification-third.page.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyNotificationThirdEmptyNotificationThirdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content-background {\n  height: 100%;\n  text-align: center;\n}\n.is-empty-state-content-background img {\n  width: 80%;\n  max-width: 370px;\n  margin-top: 10%;\n}\n.is-empty-state-content-background.theme-dark {\n  background: black;\n}\n.is-empty-state-content-background.theme-light {\n  background: #F6F9FA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1ub3RpZmljYXRpb24tdGhpcmQvZW1wdHktbm90aWZpY2F0aW9uLXRoaXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wdHktbm90aWZpY2F0aW9uLXRoaXJkL2VtcHR5LW5vdGlmaWNhdGlvbi10aGlyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDRjtBRENFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FER0E7RUFDRSxpQkFBQTtBQ0FGO0FER0E7RUFDRSxtQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvZW1wdHktbm90aWZpY2F0aW9uLXRoaXJkL2VtcHR5LW5vdGlmaWNhdGlvbi10aGlyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWF4LXdpZHRoOiAzNzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQudGhlbWUtZGFyayB7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbn1cclxuXHJcbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQudGhlbWUtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICNGNkY5RkE7XHJcbn1cclxuIiwiLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQtYmFja2dyb3VuZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQtYmFja2dyb3VuZCBpbWcge1xuICB3aWR0aDogODAlO1xuICBtYXgtd2lkdGg6IDM3MHB4O1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQudGhlbWUtZGFyayB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xufVxuXG4uaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kLnRoZW1lLWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI0Y2RjlGQTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/empty-notification-third/empty-notification-third.page.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/empty-notification-third/empty-notification-third.page.ts ***!
    \***************************************************************************/

  /*! exports provided: EmptyNotificationThirdPage */

  /***/
  function srcAppEmptyNotificationThirdEmptyNotificationThirdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyNotificationThirdPage", function () {
      return EmptyNotificationThirdPage;
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

    var EmptyNotificationThirdPage = /*#__PURE__*/function () {
      function EmptyNotificationThirdPage() {
        _classCallCheck(this, EmptyNotificationThirdPage);

        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
      }

      _createClass(EmptyNotificationThirdPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyNotificationThirdPage;
    }();

    EmptyNotificationThirdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-notification-third',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-notification-third.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-notification-third/empty-notification-third.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-notification-third.page.scss */
      "./src/app/empty-notification-third/empty-notification-third.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyNotificationThirdPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-notification-third-empty-notification-third-module-es5.js.map