function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-list-events-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events-list/events-list.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events-list/events-list.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsListEventsListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Events List</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"current\">\r\n      <ion-segment-button value=\"current\">\r\n        <ion-label>Current</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"past\">\r\n        <ion-label>Past</ion-label>\r\n      </ion-segment-button>\r\n      <ion-segment-button value=\"all\">\r\n        <ion-label>All</ion-label>\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <img src=\"assets/imgs/events1.png\">\r\n    <ion-card-content>\r\n      <p>Sep 23 2018 - Sep 24 2018</p>\r\n      <h2>Urban Music Festival</h2>\r\n      <p>Dallas, TX</p>\r\n    </ion-card-content>\r\n\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col class=\"ion-text-right\">\r\n        <ion-button fill=\"clear\" size=\"small\">\r\n          Website\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\">\r\n          Register\r\n        </ion-button>\r\n        <ion-button  fill=\"clear\" size=\"small\">\r\n          <ion-icon name=\"share\" color=\"primary\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n  <ion-card>\r\n    <img src=\"assets/imgs/events2.png\">\r\n    <ion-card-content>\r\n      <p>Sep 23 2018 - Sep 24 2018</p>\r\n      <h2>Memorial Festival</h2>\r\n      <p>Austin, TX</p>\r\n    </ion-card-content>\r\n\r\n    <ion-row class=\"ion-no-padding\">\r\n      <ion-col class=\"ion-text-right\">\r\n        <ion-button fill=\"clear\" size=\"small\">\r\n          Website\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\">\r\n          Register\r\n        </ion-button>\r\n        <ion-button  fill=\"clear\" size=\"small\">\r\n          <ion-icon name=\"share\" color=\"primary\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/events-list/events-list.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/events-list/events-list.module.ts ***!
    \***************************************************/

  /*! exports provided: EventsListPageModule */

  /***/
  function srcAppEventsListEventsListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsListPageModule", function () {
      return EventsListPageModule;
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


    var _events_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./events-list.page */
    "./src/app/events-list/events-list.page.ts");

    var routes = [{
      path: '',
      component: _events_list_page__WEBPACK_IMPORTED_MODULE_6__["EventsListPage"]
    }];

    var EventsListPageModule = function EventsListPageModule() {
      _classCallCheck(this, EventsListPageModule);
    };

    EventsListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_events_list_page__WEBPACK_IMPORTED_MODULE_6__["EventsListPage"]]
    })], EventsListPageModule);
    /***/
  },

  /***/
  "./src/app/events-list/events-list.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/events-list/events-list.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsListEventsListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy1saXN0L2V2ZW50cy1saXN0LnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/events-list/events-list.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/events-list/events-list.page.ts ***!
    \*************************************************/

  /*! exports provided: EventsListPage */

  /***/
  function srcAppEventsListEventsListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsListPage", function () {
      return EventsListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventsListPage = /*#__PURE__*/function () {
      function EventsListPage() {
        _classCallCheck(this, EventsListPage);
      }

      _createClass(EventsListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventsListPage;
    }();

    EventsListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./events-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events-list/events-list.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./events-list.page.scss */
      "./src/app/events-list/events-list.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EventsListPage);
    /***/
  }
}]);
//# sourceMappingURL=events-list-events-list-module-es5.js.map