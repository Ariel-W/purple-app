function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-friends-fourth-empty-friends-fourth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-friends-fourth/empty-friends-fourth.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-friends-fourth/empty-friends-fourth.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyFriendsFourthEmptyFriendsFourthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Add Some Friends</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content-background\">\r\n    <div class=\"is-empty-state-text\">\r\n      <h3>Add Some Friends</h3>\r\n      <p>You have no friends right now</p>\r\n      <ion-button shape=\"round\">Add</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-friends-fourth/empty-friends-fourth.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/empty-friends-fourth/empty-friends-fourth.module.ts ***!
    \*********************************************************************/

  /*! exports provided: EmptyFriendsFourthPageModule */

  /***/
  function srcAppEmptyFriendsFourthEmptyFriendsFourthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyFriendsFourthPageModule", function () {
      return EmptyFriendsFourthPageModule;
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


    var _empty_friends_fourth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-friends-fourth.page */
    "./src/app/empty-friends-fourth/empty-friends-fourth.page.ts");

    var routes = [{
      path: '',
      component: _empty_friends_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyFriendsFourthPage"]
    }];

    var EmptyFriendsFourthPageModule = function EmptyFriendsFourthPageModule() {
      _classCallCheck(this, EmptyFriendsFourthPageModule);
    };

    EmptyFriendsFourthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_friends_fourth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyFriendsFourthPage"]]
    })], EmptyFriendsFourthPageModule);
    /***/
  },

  /***/
  "./src/app/empty-friends-fourth/empty-friends-fourth.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/empty-friends-fourth/empty-friends-fourth.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyFriendsFourthEmptyFriendsFourthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content-background {\n  background-image: url('empty-friends-4.png');\n  background-size: cover;\n  background-position: center;\n  height: 100%;\n  display: flex;\n}\n.is-empty-state-content-background .is-empty-state-text {\n  text-align: center;\n  flex-grow: 1;\n  align-self: flex-end;\n  margin-bottom: 20%;\n}\n.is-empty-state-content-background .is-empty-state-text h3, .is-empty-state-content-background .is-empty-state-text p {\n  color: black;\n}\n.is-empty-state-content-background .is-empty-state-text ion-button:not([color]) {\n  --background: white;\n  --color: black;\n}\n:host ion-button {\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1mcmllbmRzLWZvdXJ0aC9lbXB0eS1mcmllbmRzLWZvdXJ0aC5wYWdlLnNjc3MiLCJzcmMvYXBwL2VtcHR5LWZyaWVuZHMtZm91cnRoL2VtcHR5LWZyaWVuZHMtZm91cnRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FERUk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNBTjtBREtBO0VBQ0UsZ0JBQUE7QUNGRiIsImZpbGUiOiJzcmMvYXBwL2VtcHR5LWZyaWVuZHMtZm91cnRoL2VtcHR5LWZyaWVuZHMtZm91cnRoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50LWJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWdzL2VtcHR5LWZyaWVuZHMtNC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5pcy1lbXB0eS1zdGF0ZS10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwJTtcclxuXHJcbiAgICBoMywgcCB7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICBpb24tYnV0dG9uOm5vdChbY29sb3JdKSB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgIC0tY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgaW9uLWJ1dHRvbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG4iLCIuaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZ3MvZW1wdHktZnJpZW5kcy00LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kIC5pcy1lbXB0eS1zdGF0ZS10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmbGV4LWdyb3c6IDE7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAyMCU7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kIC5pcy1lbXB0eS1zdGF0ZS10ZXh0IGgzLCAuaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kIC5pcy1lbXB0eS1zdGF0ZS10ZXh0IHAge1xuICBjb2xvcjogYmxhY2s7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudC1iYWNrZ3JvdW5kIC5pcy1lbXB0eS1zdGF0ZS10ZXh0IGlvbi1idXR0b246bm90KFtjb2xvcl0pIHtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogYmxhY2s7XG59XG5cbjpob3N0IGlvbi1idXR0b24ge1xuICBmb250LXdlaWdodDogMzAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/empty-friends-fourth/empty-friends-fourth.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/empty-friends-fourth/empty-friends-fourth.page.ts ***!
    \*******************************************************************/

  /*! exports provided: EmptyFriendsFourthPage */

  /***/
  function srcAppEmptyFriendsFourthEmptyFriendsFourthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyFriendsFourthPage", function () {
      return EmptyFriendsFourthPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmptyFriendsFourthPage = /*#__PURE__*/function () {
      function EmptyFriendsFourthPage() {
        _classCallCheck(this, EmptyFriendsFourthPage);
      }

      _createClass(EmptyFriendsFourthPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyFriendsFourthPage;
    }();

    EmptyFriendsFourthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-friends-fourth',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-friends-fourth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-friends-fourth/empty-friends-fourth.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-friends-fourth.page.scss */
      "./src/app/empty-friends-fourth/empty-friends-fourth.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyFriendsFourthPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-friends-fourth-empty-friends-fourth-module-es5.js.map