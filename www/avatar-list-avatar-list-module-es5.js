function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["avatar-list-avatar-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/avatar-list/avatar-list.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/avatar-list/avatar-list.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAvatarListAvatarListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Avatar List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list>\r\n\r\n    <ion-list-header>\r\n      <ion-label>Today</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-woody.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Woody</h2>\r\n        <p>This town ain't big enough for the two of us!</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">3:43 pm</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-buzz.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Buzz Lightyear</h2>\r\n        <p>My eyeballs could have been sucked from their sockets!</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">1:12 pm</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-jessie.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Jessie</h2>\r\n        <p>Well aren't you just the sweetest space toy I ever did meet!</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">10:03 am</ion-note>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n\r\n    <ion-list-header>\r\n      <ion-label>Last Week</ion-label>\r\n    </ion-list-header>\r\n\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-barbie.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Barbie</h2>\r\n        <p>So, who's ready for Ken's dream tour?</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">Sun</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-squeeze.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Squeeze</h2>\r\n        <p>The claw is our master.</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">Fri</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-sarge.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Sarge</h2>\r\n        <p>Code Red, repeat: We're at Code Red!</p>\r\n      </ion-label>\r\n      <ion-note slot=\"end\">Wed</ion-note>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/avatar-list/avatar-list.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/avatar-list/avatar-list.module.ts ***!
    \***************************************************/

  /*! exports provided: AvatarListPageModule */

  /***/
  function srcAppAvatarListAvatarListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarListPageModule", function () {
      return AvatarListPageModule;
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


    var _avatar_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./avatar-list.page */
    "./src/app/avatar-list/avatar-list.page.ts");

    var routes = [{
      path: '',
      component: _avatar_list_page__WEBPACK_IMPORTED_MODULE_6__["AvatarListPage"]
    }];

    var AvatarListPageModule = function AvatarListPageModule() {
      _classCallCheck(this, AvatarListPageModule);
    };

    AvatarListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_avatar_list_page__WEBPACK_IMPORTED_MODULE_6__["AvatarListPage"]]
    })], AvatarListPageModule);
    /***/
  },

  /***/
  "./src/app/avatar-list/avatar-list.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/avatar-list/avatar-list.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAvatarListAvatarListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F2YXRhci1saXN0L2F2YXRhci1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/avatar-list/avatar-list.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/avatar-list/avatar-list.page.ts ***!
    \*************************************************/

  /*! exports provided: AvatarListPage */

  /***/
  function srcAppAvatarListAvatarListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvatarListPage", function () {
      return AvatarListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AvatarListPage = /*#__PURE__*/function () {
      function AvatarListPage() {
        _classCallCheck(this, AvatarListPage);
      }

      _createClass(AvatarListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AvatarListPage;
    }();

    AvatarListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-avatar-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./avatar-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/avatar-list/avatar-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./avatar-list.page.scss */
      "./src/app/avatar-list/avatar-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AvatarListPage);
    /***/
  }
}]);
//# sourceMappingURL=avatar-list-avatar-list-module-es5.js.map