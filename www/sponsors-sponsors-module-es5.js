function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sponsors-sponsors-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSponsorsSponsorsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Sponsors</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item-group class=\"is-collapsible-list-with-divider\" *ngFor=\"let item of items; let i = index\">\r\n    <ion-item-divider>\r\n      <ion-label>\r\n        <h2 (click)=\"itemTapped(i)\">{{item.divider.title}}<ion-icon name=\"arrow-down\" *ngIf=\"!isShown[i]\"></ion-icon><ion-icon name=\"arrow-up\" *ngIf=\"isShown[i]\"></ion-icon></h2>\r\n      </ion-label>\r\n    </ion-item-divider>\r\n    <ion-row [class.is-hide]=\"!isShown[i] || false\">\r\n      <ion-col *ngFor=\"let subitem of item.subitems\" size=\"{{subitem.col_size}}\" [class.is-platinum-sponsors]=\"i === 0\">\r\n        <ion-item class=\"ion-text-center\" lines=\"none\" detail=\"false\" routerLink=\"{{subitem.target_link}}\">\r\n          <ion-label>\r\n            <img src=\"{{subitem.image}}\">\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-item-group>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/sponsors/sponsors.module.ts ***!
    \*********************************************/

  /*! exports provided: SponsorsPageModule */

  /***/
  function srcAppSponsorsSponsorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsPageModule", function () {
      return SponsorsPageModule;
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


    var _sponsors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./sponsors.page */
    "./src/app/sponsors/sponsors.page.ts");

    var routes = [{
      path: '',
      component: _sponsors_page__WEBPACK_IMPORTED_MODULE_6__["SponsorsPage"]
    }];

    var SponsorsPageModule = function SponsorsPageModule() {
      _classCallCheck(this, SponsorsPageModule);
    };

    SponsorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_sponsors_page__WEBPACK_IMPORTED_MODULE_6__["SponsorsPage"]]
    })], SponsorsPageModule);
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/sponsors/sponsors.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSponsorsSponsorsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-col.is-platinum-sponsors img {\n  max-width: 80%;\n}\nion-col ion-item {\n  height: 100%;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9zcG9uc29ycy9zcG9uc29ycy5wYWdlLnNjc3MiLCJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGNBQUE7QUNBSjtBREVFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3Nwb25zb3JzL3Nwb25zb3JzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xyXG4gICYuaXMtcGxhdGludW0tc3BvbnNvcnMgaW1nIHtcclxuICAgIG1heC13aWR0aDogODAlO1xyXG4gIH1cclxuICBpb24taXRlbSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxufVxyXG4iLCJpb24tY29sLmlzLXBsYXRpbnVtLXNwb25zb3JzIGltZyB7XG4gIG1heC13aWR0aDogODAlO1xufVxuaW9uLWNvbCBpb24taXRlbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/sponsors/sponsors.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/sponsors/sponsors.page.ts ***!
    \*******************************************/

  /*! exports provided: SponsorsPage */

  /***/
  function srcAppSponsorsSponsorsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SponsorsPage", function () {
      return SponsorsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SponsorsPage = /*#__PURE__*/function () {
      function SponsorsPage() {
        _classCallCheck(this, SponsorsPage);

        this.isShown = [];
        this.items = [{
          divider: {
            title: 'Platinum'
          },
          subitems: [{
            col_size: '12',
            target_link: '/sponsors',
            image: 'assets/imgs/sponsor-1.png'
          }, {
            col_size: '12',
            target_link: '/sponsors',
            image: 'assets/imgs/sponsor-2.png'
          }]
        }, {
          divider: {
            title: 'Gold'
          },
          subitems: [{
            col_size: '6',
            target_link: '/sponsors',
            image: 'assets/imgs/sponsor-3.png'
          }, {
            col_size: '6',
            target_link: '/sponsors',
            image: 'assets/imgs/sponsor-4.png'
          }]
        }, {
          divider: {
            title: 'Silver'
          },
          subitems: [{
            col_size: '4',
            target_link: '/sponsors',
            image: 'assets/imgs/sponsor-5.png'
          }, {
            col_size: '4',
            target_link: '/sponsors',
            image: 'assets/imgs/sponsor-6.png'
          }, {
            col_size: '4',
            target_link: '/sponsors',
            image: 'assets/imgs/sponsor-7.png'
          }]
        }];
        this.isShown[0] = true;
      }

      _createClass(SponsorsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "itemTapped",
        value: function itemTapped(index) {
          this.isShown[index] = !this.isShown[index];
        }
      }]);

      return SponsorsPage;
    }();

    SponsorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sponsors',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sponsors.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/sponsors/sponsors.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sponsors.page.scss */
      "./src/app/sponsors/sponsors.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], SponsorsPage);
    /***/
  }
}]);
//# sourceMappingURL=sponsors-sponsors-module-es5.js.map