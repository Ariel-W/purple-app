function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-details-event-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/event-details/event-details.page.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event-details/event-details.page.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventDetailsEventDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Event Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-padding-horizontal\">\r\n    <h2>The Power of Connectivity: The Dell EMC Networking Portfolio</h2>\r\n    <p>\r\n      <ion-icon name=\"calendar\"></ion-icon> Sep 14 2018 • 7:30 - 8:00\r\n    </p>\r\n    <p>\r\n      Ethernet, Fiber Channel or Software Defined Networking,\r\n      which is the right choice for you? This session will\r\n      present the various Dell EMC Networking options and\r\n      provide you will a complete overview of our networking offerings.\r\n    </p>\r\n  </div>\r\n\r\n  <ion-list>\r\n    <ion-item>\r\n      <ion-icon name=\"star-half\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        <h2>Session rating</h2>\r\n      </ion-label>\r\n      <span class=\"is-event-details-span\" slot=\"end\">Average</span>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-icon slot=\"start\" name=\"location-sharp\"></ion-icon>\r\n      <ion-label>\r\n        <h2>Location</h2>\r\n      </ion-label>\r\n      <span class=\"is-event-details-span\" slot=\"end\">Rome</span>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Speakers</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>John Doe</h2>\r\n        <p>john@doe.com</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list>\r\n    <ion-list-header>\r\n      <ion-label>Content</ion-label>\r\n    </ion-list-header>\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/imgs/album3.png\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Products List</h2>\r\n        <p>\r\n          All the products you will ever need by Dell.\r\n        </p>\r\n      </ion-label>\r\n      <span slot=\"end\">\r\n        <ion-button size=\"small\" fill=\"clear\" slot=\"start\">\r\n          <ion-icon name=\"download\"></ion-icon>\r\n        </ion-button>\r\n      </span>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/imgs/album6.png\">\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>Appendix</h2>\r\n        <p>\r\n          A necessary catalog for our products.\r\n        </p>\r\n      </ion-label>\r\n      <span slot=\"end\">\r\n        <ion-button size=\"small\" fill=\"clear\" slot=\"start\">\r\n          <ion-icon name=\"download\"></ion-icon>\r\n        </ion-button>\r\n      </span>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <div class=\"ion-padding-horizontal\">\r\n    <ion-grid class=\"is-grid ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <ion-button expand=\"block\" fill=\"outline\">\r\n            <ion-icon name=\"bookmark\" slot=\"start\"></ion-icon>\r\n            <p>\r\n              Favorites\r\n            </p>\r\n          </ion-button>\r\n          <!-- <button ion-button block outline icon-start>\r\n            <ion-icon name=\"bookmark\"></ion-icon>\r\n            <p>\r\n              Remove from My Agenda\r\n            </p>\r\n          </button>    -->\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-center\">\r\n          <ion-button expand=\"block\" fill=\"outline\">\r\n            <ion-icon name=\"chatbubbles\" slot=\"start\"></ion-icon>\r\n            <p>\r\n              Chat\r\n            </p>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <!-- <ion-toolbar class=\"ion-text-center session-action-buttonbar hide\">\r\n      <ion-buttons>\r\n        <button ion-button icon-only>\r\n          <ion-icon ios=\"ios-create-outline\" md=\"md-create\"></ion-icon>\r\n          Notes\r\n        </button>\r\n        <button ion-button icon-only>\r\n          <ion-icon ios=\"ios-calendar-outline\" md=\"md-calendar\"></ion-icon>\r\n          Add\r\n        </button>\r\n        <button ion-button icon-only>\r\n          <ion-icon ios=\"ios-camera-outline\" md=\"md-camera\"></ion-icon>\r\n          Photo\r\n        </button>\r\n      </ion-buttons>\r\n    </ion-toolbar> -->\r\n\r\n  <!-- <ion-fab right bottom>\r\n    <button ion-fab>\r\n      <ion-icon name=\"qr-code\"></ion-icon>\r\n    </button>\r\n  </ion-fab> -->\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/event-details/event-details.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/event-details/event-details.module.ts ***!
    \*******************************************************/

  /*! exports provided: EventDetailsPageModule */

  /***/
  function srcAppEventDetailsEventDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsPageModule", function () {
      return EventDetailsPageModule;
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


    var _event_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./event-details.page */
    "./src/app/event-details/event-details.page.ts");

    var routes = [{
      path: '',
      component: _event_details_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailsPage"]
    }];

    var EventDetailsPageModule = function EventDetailsPageModule() {
      _classCallCheck(this, EventDetailsPageModule);
    };

    EventDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_event_details_page__WEBPACK_IMPORTED_MODULE_6__["EventDetailsPage"]]
    })], EventDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/event-details/event-details.page.scss":
  /*!*******************************************************!*\
    !*** ./src/app/event-details/event-details.page.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventDetailsEventDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-grid ion-col {\n  padding-left: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9ldmVudC1kZXRhaWxzL2V2ZW50LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLWdyaWQgaW9uLWNvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuIiwiLmlzLWdyaWQgaW9uLWNvbCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/event-details/event-details.page.ts":
  /*!*****************************************************!*\
    !*** ./src/app/event-details/event-details.page.ts ***!
    \*****************************************************/

  /*! exports provided: EventDetailsPage */

  /***/
  function srcAppEventDetailsEventDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsPage", function () {
      return EventDetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var EventDetailsPage = /*#__PURE__*/function () {
      function EventDetailsPage() {
        _classCallCheck(this, EventDetailsPage);
      }

      _createClass(EventDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EventDetailsPage;
    }();

    EventDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-event-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./event-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/event-details/event-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./event-details.page.scss */
      "./src/app/event-details/event-details.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], EventDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=event-details-event-details-module-es5.js.map