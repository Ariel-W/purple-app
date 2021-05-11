function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["condensed-list-condensed-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/condensed-list/condensed-list.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/condensed-list/condensed-list.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCondensedListCondensedListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Condensed List</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"is-list-condensed\">\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p><span>Clayton Scott</span> • Yesterday at 09:02 PM</p>\r\n        <h2>Early access to our super secret new satellite. Be the first to know everything.</h2>\r\n        <p>Earth than it’s own satellite, the moon. When you think about it, we regard the moon with such powerful.</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons ion-no-margin\">\r\n        <ion-checkbox></ion-checkbox>\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p><span>Clayton Scott</span> • Yesterday at 09:02 PM</p>\r\n        <h2>Early access to our super secret new satellite. Be the first to know everything.</h2>\r\n        <p>Earth than it’s own satellite, the moon. When you think about it, we regard the moon with such powerful.</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons ion-no-margin\">\r\n        <ion-checkbox></ion-checkbox>\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p><span>Clayton Scott</span> • Yesterday at 09:02 PM</p>\r\n        <h2>Early access to our super secret new satellite. Be the first to know everything.</h2>\r\n        <p>Earth than it’s own satellite, the moon. When you think about it, we regard the moon with such powerful.</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons ion-no-margin\">\r\n        <ion-checkbox></ion-checkbox>\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p><span>Clayton Scott</span> • Yesterday at 09:02 PM</p>\r\n        <h2>Early access to our super secret new satellite. Be the first to know everything.</h2>\r\n        <p>Earth than it’s own satellite, the moon. When you think about it, we regard the moon with such powerful.</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons ion-no-margin\">\r\n        <ion-checkbox></ion-checkbox>\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <p><span>Clayton Scott</span> • Yesterday at 09:02 PM</p>\r\n        <h2>Early access to our super secret new satellite. Be the first to know everything.</h2>\r\n        <p>Earth than it’s own satellite, the moon. When you think about it, we regard the moon with such powerful.</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-vertical-buttons ion-no-margin\">\r\n        <ion-checkbox></ion-checkbox>\r\n        <ion-icon name=\"attach\"></ion-icon>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/condensed-list/condensed-list.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/condensed-list/condensed-list.module.ts ***!
    \*********************************************************/

  /*! exports provided: CondensedListPageModule */

  /***/
  function srcAppCondensedListCondensedListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CondensedListPageModule", function () {
      return CondensedListPageModule;
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


    var _condensed_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./condensed-list.page */
    "./src/app/condensed-list/condensed-list.page.ts");

    var routes = [{
      path: '',
      component: _condensed_list_page__WEBPACK_IMPORTED_MODULE_6__["CondensedListPage"]
    }];

    var CondensedListPageModule = function CondensedListPageModule() {
      _classCallCheck(this, CondensedListPageModule);
    };

    CondensedListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_condensed_list_page__WEBPACK_IMPORTED_MODULE_6__["CondensedListPage"]]
    })], CondensedListPageModule);
    /***/
  },

  /***/
  "./src/app/condensed-list/condensed-list.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/condensed-list/condensed-list.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCondensedListCondensedListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmRlbnNlZC1saXN0L2NvbmRlbnNlZC1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/condensed-list/condensed-list.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/condensed-list/condensed-list.page.ts ***!
    \*******************************************************/

  /*! exports provided: CondensedListPage */

  /***/
  function srcAppCondensedListCondensedListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CondensedListPage", function () {
      return CondensedListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CondensedListPage = /*#__PURE__*/function () {
      function CondensedListPage() {
        _classCallCheck(this, CondensedListPage);
      }

      _createClass(CondensedListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Select all checkboxes of the list and add style
          var hosts = document.querySelectorAll('.is-list-vertical-buttons ion-checkbox');
          Array.from(hosts).forEach(function (host) {
            var style = document.createElement('style');
            style.textContent = "\n        button {\n          left: var(--is-checkbox-overlay-left);\n          height: var(--is-checkbox-overlay-height);\n        }\n      ";
            host.shadowRoot.appendChild(style);
          });
        }
      }]);

      return CondensedListPage;
    }();

    CondensedListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-condensed-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./condensed-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/condensed-list/condensed-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./condensed-list.page.scss */
      "./src/app/condensed-list/condensed-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], CondensedListPage);
    /***/
  }
}]);
//# sourceMappingURL=condensed-list-condensed-list-module-es5.js.map