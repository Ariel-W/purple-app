function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["session-details-session-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/session-details/session-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/session-details/session-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSessionDetailsSessionDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Session Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-hero ion-padding-horizontal\">\r\n    <h1>Session A3: AI and Machine Learning</h1>\r\n    <div>Andrew Woody, Alex Buzz Lightyear</div>\r\n    <div class=\"ion-padding-bottom\"><ion-icon name=\"time\"></ion-icon><span>Jan 7, 13:50 - 14:50</span></div>\r\n  </div>\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>DESCRIPTION</ion-label>\r\n    </ion-item-divider>\r\n\t\t<div class=\"ion-padding\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime non eius optio iusto similique officiis voluptatum fugit quisquam, ratione illum suscipit autem eum possimus iste cupiditate ipsam inventore sed. Odio.</div>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>SPEAKERS</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item detail=\"false\" routerLink=\"/session-details\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/speaker-1.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Andrew Woody</h2>\r\n        <p>Founder & CEO at Jermains Biology</p>\r\n      </ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon name=\"chatbox\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n\r\n    <ion-item detail=\"false\" routerLink=\"/session-details\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/speaker-2.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Alex Buzz Lightyear</h2>\r\n        <p>Counselor at Research For All</p>\r\n      </ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon name=\"chatbox\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>LOCATION</ion-label>\r\n    </ion-item-divider>\r\n    <div class=\"ion-padding clearfix\"><ion-icon name=\"location-sharp\"></ion-icon> Centre stage <p class=\"ion-float-right ion-no-margin\"><a routerLink=\"/session-details\">Show Map</a></p></div>\r\n  </ion-item-group>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/session-details/session-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/session-details/session-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: SessionDetailsPageModule */

  /***/
  function srcAppSessionDetailsSessionDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailsPageModule", function () {
      return SessionDetailsPageModule;
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


    var _session_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./session-details.page */
    "./src/app/session-details/session-details.page.ts");

    var routes = [{
      path: '',
      component: _session_details_page__WEBPACK_IMPORTED_MODULE_6__["SessionDetailsPage"]
    }];

    var SessionDetailsPageModule = function SessionDetailsPageModule() {
      _classCallCheck(this, SessionDetailsPageModule);
    };

    SessionDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_session_details_page__WEBPACK_IMPORTED_MODULE_6__["SessionDetailsPage"]]
    })], SessionDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/session-details/session-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/session-details/session-details.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSessionDetailsSessionDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-hero {\n  background-color: var(--ion-color-dark);\n  color: #ffffff;\n  text-align: left;\n  padding-top: 40px;\n  padding-bottom: 20px;\n}\n.is-hero h1 {\n  margin: 0;\n  padding: 40px 0;\n  font-size: 2.5rem;\n}\n.is-hero div + div {\n  padding-top: 5px;\n}\n.is-hero ion-icon {\n  padding-right: 5px;\n  position: relative;\n  top: 2px;\n}\nion-icon {\n  position: relative;\n  top: 2px;\n}\np > a {\n  padding-bottom: 2px;\n  border-bottom: 1px solid var(--ion-color-light);\n}\np > a:hover,\np > a:focus {\n  border-bottom: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9zZXNzaW9uLWRldGFpbHMvc2Vzc2lvbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2Vzc2lvbi1kZXRhaWxzL3Nlc3Npb24tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNDRjtBRENFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKO0FEQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKO0FERUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNDRjtBRENBO0VBQ0UsbUJBQUE7RUFDQSwrQ0FBQTtBQ0VGO0FEQUE7O0VBRUUsbUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL3Nlc3Npb24tZGV0YWlscy9zZXNzaW9uLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLWhlcm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG5cclxuICBoMSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcbiAgZGl2ICsgZGl2IHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMnB4O1xyXG4gIH1cclxufVxyXG5pb24taWNvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMnB4O1xyXG59XHJcbnAgPiBhIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbnAgPiBhOmhvdmVyLFxyXG5wID4gYTpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxufVxyXG4iLCIuaXMtaGVybyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5pcy1oZXJvIGgxIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiA0MHB4IDA7XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuLmlzLWhlcm8gZGl2ICsgZGl2IHtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cbi5pcy1oZXJvIGlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuXG5pb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG5cbnAgPiBhIHtcbiAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbnAgPiBhOmhvdmVyLFxucCA+IGE6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/session-details/session-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/session-details/session-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: SessionDetailsPage */

  /***/
  function srcAppSessionDetailsSessionDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SessionDetailsPage", function () {
      return SessionDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SessionDetailsPage = /*#__PURE__*/function () {
      function SessionDetailsPage() {
        _classCallCheck(this, SessionDetailsPage);
      }

      _createClass(SessionDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SessionDetailsPage;
    }();

    SessionDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-session-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./session-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/session-details/session-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./session-details.page.scss */
      "./src/app/session-details/session-details.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SessionDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=session-details-session-details-module-es5.js.map