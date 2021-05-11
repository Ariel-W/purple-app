function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-tasks-first-empty-tasks-first-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-tasks-first/empty-tasks-first.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-tasks-first/empty-tasks-first.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyTasksFirstEmptyTasksFirstPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>No Tasks Here</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content\">\r\n    <img src=\"assets/imgs/empty-tasks-1.png\"/>\r\n    <h3>Nothing Here...</h3>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>\r\n  </div>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-tasks-first/empty-tasks-first.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/empty-tasks-first/empty-tasks-first.module.ts ***!
    \***************************************************************/

  /*! exports provided: EmptyTasksFirstPageModule */

  /***/
  function srcAppEmptyTasksFirstEmptyTasksFirstModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyTasksFirstPageModule", function () {
      return EmptyTasksFirstPageModule;
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


    var _empty_tasks_first_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-tasks-first.page */
    "./src/app/empty-tasks-first/empty-tasks-first.page.ts");

    var routes = [{
      path: '',
      component: _empty_tasks_first_page__WEBPACK_IMPORTED_MODULE_6__["EmptyTasksFirstPage"]
    }];

    var EmptyTasksFirstPageModule = function EmptyTasksFirstPageModule() {
      _classCallCheck(this, EmptyTasksFirstPageModule);
    };

    EmptyTasksFirstPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_tasks_first_page__WEBPACK_IMPORTED_MODULE_6__["EmptyTasksFirstPage"]]
    })], EmptyTasksFirstPageModule);
    /***/
  },

  /***/
  "./src/app/empty-tasks-first/empty-tasks-first.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/empty-tasks-first/empty-tasks-first.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyTasksFirstEmptyTasksFirstPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content {\n  width: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-top: 20vh;\n}\n.is-empty-state-content img {\n  width: 55%;\n  max-width: 370px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS10YXNrcy1maXJzdC9lbXB0eS10YXNrcy1maXJzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL2VtcHR5LXRhc2tzLWZpcnN0L2VtcHR5LXRhc2tzLWZpcnN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VtcHR5LXRhc2tzLWZpcnN0L2VtcHR5LXRhc2tzLWZpcnN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHg7XHJcbiAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICBwYWRkaW5nLXRvcDogMjB2aDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xyXG4gIH1cclxufVxyXG4iLCIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgcGFkZGluZy10b3A6IDIwdmg7XG59XG4uaXMtZW1wdHktc3RhdGUtY29udGVudCBpbWcge1xuICB3aWR0aDogNTUlO1xuICBtYXgtd2lkdGg6IDM3MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/empty-tasks-first/empty-tasks-first.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/empty-tasks-first/empty-tasks-first.page.ts ***!
    \*************************************************************/

  /*! exports provided: EmptyTasksFirstPage */

  /***/
  function srcAppEmptyTasksFirstEmptyTasksFirstPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyTasksFirstPage", function () {
      return EmptyTasksFirstPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EmptyTasksFirstPage = /*#__PURE__*/function () {
      function EmptyTasksFirstPage() {
        _classCallCheck(this, EmptyTasksFirstPage);
      }

      _createClass(EmptyTasksFirstPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyTasksFirstPage;
    }();

    EmptyTasksFirstPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-tasks-first',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-tasks-first.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-tasks-first/empty-tasks-first.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-tasks-first.page.scss */
      "./src/app/empty-tasks-first/empty-tasks-first.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyTasksFirstPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-tasks-first-empty-tasks-first-module-es5.js.map