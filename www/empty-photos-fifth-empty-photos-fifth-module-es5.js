function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["empty-photos-fifth-empty-photos-fifth-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-fifth/empty-photos-fifth.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-fifth/empty-photos-fifth.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmptyPhotosFifthEmptyPhotosFifthPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>You have no Pictures</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-empty-state-content theme-{{env.theme}}\">\r\n    <h3>Upload some photos</h3>\r\n    <img src=\"assets/imgs/empty-photos-5.png\"/>\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisc</p>\r\n    <ion-fab vertical=\"bottom\" horizontal=\"center\">\r\n      <ion-fab-button class=\"ion-color ion-color-primary\">\r\n        <ion-icon name=\"add\"></ion-icon>\r\n      </ion-fab-button>\r\n    </ion-fab>\r\n  </div>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/empty-photos-fifth/empty-photos-fifth.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/empty-photos-fifth/empty-photos-fifth.module.ts ***!
    \*****************************************************************/

  /*! exports provided: EmptyPhotosFifthPageModule */

  /***/
  function srcAppEmptyPhotosFifthEmptyPhotosFifthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyPhotosFifthPageModule", function () {
      return EmptyPhotosFifthPageModule;
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


    var _empty_photos_fifth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./empty-photos-fifth.page */
    "./src/app/empty-photos-fifth/empty-photos-fifth.page.ts");

    var routes = [{
      path: '',
      component: _empty_photos_fifth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyPhotosFifthPage"]
    }];

    var EmptyPhotosFifthPageModule = function EmptyPhotosFifthPageModule() {
      _classCallCheck(this, EmptyPhotosFifthPageModule);
    };

    EmptyPhotosFifthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_empty_photos_fifth_page__WEBPACK_IMPORTED_MODULE_6__["EmptyPhotosFifthPage"]]
    })], EmptyPhotosFifthPageModule);
    /***/
  },

  /***/
  "./src/app/empty-photos-fifth/empty-photos-fifth.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/empty-photos-fifth/empty-photos-fifth.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmptyPhotosFifthEmptyPhotosFifthPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-empty-state-content {\n  width: 100%;\n  text-align: center;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-top: 20vh;\n  height: 100%;\n}\n.is-empty-state-content h3 {\n  margin-bottom: 1rem;\n  font-weight: 500;\n}\n.is-empty-state-content p {\n  margin-top: 0;\n}\n.is-empty-state-content img {\n  width: 55%;\n  max-width: 370px;\n  margin-bottom: 1rem;\n}\n.theme-light {\n  background: #f0f4f4;\n}\n.theme-dark {\n  background: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9lbXB0eS1waG90b3MtZmlmdGgvZW1wdHktcGhvdG9zLWZpZnRoLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1wdHktcGhvdG9zLWZpZnRoL2VtcHR5LXBob3Rvcy1maWZ0aC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtBQ0FKO0FER0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0RKO0FES0E7RUFDRSxtQkFBQTtBQ0ZGO0FES0E7RUFDRSxpQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvZW1wdHktcGhvdG9zLWZpZnRoL2VtcHR5LXBob3Rvcy1maWZ0aC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDMycHg7XHJcbiAgcGFkZGluZy10b3A6IDIwdmg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgbWF4LXdpZHRoOiAzNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGhlbWUtbGlnaHQge1xyXG4gIGJhY2tncm91bmQ6ICNmMGY0ZjQ7XHJcbn1cclxuXHJcbi50aGVtZS1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxufVxyXG4iLCIuaXMtZW1wdHktc3RhdGUtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMzJweDtcbiAgcGFkZGluZy1yaWdodDogMzJweDtcbiAgcGFkZGluZy10b3A6IDIwdmg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IGgzIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5pcy1lbXB0eS1zdGF0ZS1jb250ZW50IHAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmlzLWVtcHR5LXN0YXRlLWNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDU1JTtcbiAgbWF4LXdpZHRoOiAzNzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLnRoZW1lLWxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI2YwZjRmNDtcbn1cblxuLnRoZW1lLWRhcmsge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/empty-photos-fifth/empty-photos-fifth.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/empty-photos-fifth/empty-photos-fifth.page.ts ***!
    \***************************************************************/

  /*! exports provided: EmptyPhotosFifthPage */

  /***/
  function srcAppEmptyPhotosFifthEmptyPhotosFifthPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmptyPhotosFifthPage", function () {
      return EmptyPhotosFifthPage;
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

    var EmptyPhotosFifthPage = /*#__PURE__*/function () {
      function EmptyPhotosFifthPage() {
        _classCallCheck(this, EmptyPhotosFifthPage);

        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
      }

      _createClass(EmptyPhotosFifthPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmptyPhotosFifthPage;
    }();

    EmptyPhotosFifthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-empty-photos-fifth',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./empty-photos-fifth.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/empty-photos-fifth/empty-photos-fifth.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./empty-photos-fifth.page.scss */
      "./src/app/empty-photos-fifth/empty-photos-fifth.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EmptyPhotosFifthPage);
    /***/
  }
}]);
//# sourceMappingURL=empty-photos-fifth-empty-photos-fifth-module-es5.js.map