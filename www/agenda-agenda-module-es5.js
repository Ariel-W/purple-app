function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-agenda-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/agenda/agenda.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/agenda/agenda.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAgendaAgendaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Agenda</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment class=\"is-segment-bordered\" mode=\"md\" value=\"agenda\">\r\n    <ion-segment-button mode=\"md\" value=\"agenda\">\r\n      <ion-label>Agenda</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"myagenda\">\r\n      <ion-label>My Agenda</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n  <ion-segment class=\"is-segment-clear\" mode=\"md\" scrollable=\"true\" value=\"t-shirt\">\r\n    <ion-segment-button mode=\"md\" value=\"t-shirt\">\r\n      <ion-label>14 Nov</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"bags\">\r\n      <ion-label>15 Nov</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"accessories\">\r\n      <ion-label>16 Nov</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"shoes\">\r\n      <ion-label>17 Nov</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"jeans\">\r\n      <ion-label>18 Nov</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"trousers\">\r\n      <ion-label>19 Nov</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"other\">\r\n      <ion-label>20 Nov</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-item-group class=\"is-list-square is-list-colored\">\r\n    <ion-item-divider sticky=\"true\">\r\n      <ion-label>14:35 PM</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item routerLink=\"/agenda\" detail=\"false\" class=\"is-list-square-has-square is-item-category-success ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>14:35</span><br><span>15:35</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Lunch Break</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room A1</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group class=\"is-list-square is-list-colored\">\r\n    <ion-item-divider sticky=\"true\">\r\n      <ion-label>17:00 PM</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-success ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>17:00</span><br><span>18:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session A3: AI and Machine Learning</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room A3</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-primary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>17:00</span><br><span>18:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session A1: Data analysis</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room A1</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-success ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>17:00</span><br><span>18:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session A2: Data science</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room A2</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-primary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>17:00</span><br><span>19:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session A8: Social Network Algorithms</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room A8</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group class=\"is-list-square is-list-colored\">\r\n    <ion-item-divider sticky=\"true\">\r\n      <ion-label>18:00 PM</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-primary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>18:00</span><br><span>19:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session B5: 5G and Mobility</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room B5</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-primary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>18:00</span><br><span>19:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session B4: Internet of Things</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room B4</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-secondary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>18:00</span><br><span>19:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session B2: Artificial Intelligence</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room B2</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-primary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>18:00</span><br><span>19:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session B1: Smart Home</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room B1</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group class=\"is-list-square is-list-colored\">\r\n    <ion-item-divider sticky=\"true\">\r\n      <ion-label>19:00 PM</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-secondary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>19:00</span><br><span>20:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session C5: Security</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room C5</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-secondary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>19:00</span><br><span>20:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session C4: Product management challenges</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room C4</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square is-item-category-secondary ion-no-padding\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>19:00</span><br><span>20:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session C2: Resource management</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room C2</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-item-group>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/agenda/agenda.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/agenda/agenda.module.ts ***!
    \*****************************************/

  /*! exports provided: AgendaPageModule */

  /***/
  function srcAppAgendaAgendaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaPageModule", function () {
      return AgendaPageModule;
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


    var _agenda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./agenda.page */
    "./src/app/agenda/agenda.page.ts");

    var routes = [{
      path: '',
      component: _agenda_page__WEBPACK_IMPORTED_MODULE_6__["AgendaPage"]
    }];

    var AgendaPageModule = function AgendaPageModule() {
      _classCallCheck(this, AgendaPageModule);
    };

    AgendaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_agenda_page__WEBPACK_IMPORTED_MODULE_6__["AgendaPage"]]
    })], AgendaPageModule);
    /***/
  },

  /***/
  "./src/app/agenda/agenda.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/agenda/agenda.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppAgendaAgendaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FnZW5kYS9hZ2VuZGEucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/agenda/agenda.page.ts":
  /*!***************************************!*\
    !*** ./src/app/agenda/agenda.page.ts ***!
    \***************************************/

  /*! exports provided: AgendaPage */

  /***/
  function srcAppAgendaAgendaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AgendaPage", function () {
      return AgendaPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AgendaPage = /*#__PURE__*/function () {
      function AgendaPage(router) {
        _classCallCheck(this, AgendaPage);

        this.router = router;
      }

      _createClass(AgendaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onIconClick",
        value: function onIconClick(event) {
          event.stopPropagation();
        }
      }, {
        key: "goToSessionDetails",
        value: function goToSessionDetails() {
          this.router.navigate(['session-details']);
        }
      }]);

      return AgendaPage;
    }();

    AgendaPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AgendaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-agenda',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./agenda.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/agenda/agenda.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./agenda.page.scss */
      "./src/app/agenda/agenda.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], AgendaPage);
    /***/
  }
}]);
//# sourceMappingURL=agenda-agenda-module-es5.js.map