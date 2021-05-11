function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["followers-followers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFollowersFollowersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"is-header-logo-centered\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Followers</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content>\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/followers\">\r\n          <ion-label class=\"ion-padding-top\">\r\n            <img src=\"assets/imgs/avatar-ts-woody.png\">\r\n            <h6>Andrew Woody</h6>\r\n            <p>@andrew</p>\r\n            <ion-button fill=\"outline\" color=\"primary\">Follow</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/followers\">\r\n          <ion-label class=\"ion-padding-top\">\r\n            <img src=\"assets/imgs/avatar-ts-buzz.png\">\r\n            <h6>Alex Buzz Lightyear</h6>\r\n            <p>@alex</p>\r\n            <ion-button fill=\"outline\" color=\"primary\">Follow</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/followers\">\r\n          <ion-label class=\"ion-padding-top\">\r\n            <img src=\"assets/imgs/avatar-ts-jessie.png\">\r\n            <h6>Anton Jessie</h6>\r\n            <p>@anton</p>\r\n            <ion-button fill=\"outline\">Following</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/followers\">\r\n          <ion-label class=\"ion-padding-top\">\r\n            <img src=\"assets/imgs/avatar-ts-barbie.png\">\r\n            <h6>Barbie</h6>\r\n            <p>@barbie</p>\r\n            <ion-button fill=\"outline\" color=\"primary\">Follow</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/followers\">\r\n          <ion-label class=\"ion-padding-top\">\r\n            <img src=\"assets/imgs/avatar-ts-squeeze.png\">\r\n            <h6>Clark Squeeze</h6>\r\n            <p>@clark</p>\r\n            <ion-button fill=\"outline\">Following</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-text-center is-tile ion-no-padding\">\r\n        <ion-item lines=\"none\" class=\"ion-text-center\" detail=\"false\" routerLink=\"/followers\">\r\n          <ion-label class=\"ion-padding-top\">\r\n            <img src=\"assets/imgs/avatar-ts-sarge.png\">\r\n            <h6>Charlie Sarge</h6>\r\n            <p>@charlie</p>\r\n            <ion-button fill=\"outline\">Following</ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/followers/followers.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/followers/followers.module.ts ***!
    \***********************************************/

  /*! exports provided: FollowersPageModule */

  /***/
  function srcAppFollowersFollowersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowersPageModule", function () {
      return FollowersPageModule;
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


    var _followers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./followers.page */
    "./src/app/followers/followers.page.ts");

    var routes = [{
      path: '',
      component: _followers_page__WEBPACK_IMPORTED_MODULE_6__["FollowersPage"]
    }];

    var FollowersPageModule = function FollowersPageModule() {
      _classCallCheck(this, FollowersPageModule);
    };

    FollowersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_followers_page__WEBPACK_IMPORTED_MODULE_6__["FollowersPage"]]
    })], FollowersPageModule);
    /***/
  },

  /***/
  "./src/app/followers/followers.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/followers/followers.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFollowersFollowersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item img {\n  border-radius: 100%;\n}\nion-item h6 {\n  margin-bottom: 0px;\n  margin-top: 16px;\n  font-size: 16px;\n  white-space: normal;\n}\nion-item p {\n  margin-top: 5px;\n  margin-bottom: 15px;\n  white-space: normal;\n}\nion-item ion-button {\n  margin-bottom: 20px;\n}\n::ng-deep .theme-dark ion-button:not([color]) {\n  --color: #ffffff;\n  --border-color: rgba(255, 255, 255, 0.3);\n}\n::ng-deep .theme-light ion-button:not([color]) {\n  --color: var(--ion-color-dark);\n  --border-color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9mb2xsb3dlcnMvZm9sbG93ZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZm9sbG93ZXJzL2ZvbGxvd2Vycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtBQ0FKO0FERUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUo7QURFRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFRTtFQUNFLG1CQUFBO0FDQUo7QURJRTtFQUNFLGdCQUFBO0VBQ0Esd0NBQUE7QUNESjtBREdFO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvZm9sbG93ZXJzL2ZvbGxvd2Vycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgfVxyXG4gIGg2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICBwIHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG59XHJcbjo6bmctZGVlcCB7XHJcbiAgLnRoZW1lLWRhcmsgaW9uLWJ1dHRvbjpub3QoW2NvbG9yXSkge1xyXG4gICAgLS1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XHJcbiAgfVxyXG4gIC50aGVtZS1saWdodCBpb24tYnV0dG9uOm5vdChbY29sb3JdKSB7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcbn1cclxuIiwiaW9uLWl0ZW0gaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbmlvbi1pdGVtIGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24taXRlbSBwIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuaW9uLWl0ZW0gaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbjo6bmctZGVlcCAudGhlbWUtZGFyayBpb24tYnV0dG9uOm5vdChbY29sb3JdKSB7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG46Om5nLWRlZXAgLnRoZW1lLWxpZ2h0IGlvbi1idXR0b246bm90KFtjb2xvcl0pIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/followers/followers.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/followers/followers.page.ts ***!
    \*********************************************/

  /*! exports provided: FollowersPage */

  /***/
  function srcAppFollowersFollowersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FollowersPage", function () {
      return FollowersPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FollowersPage = /*#__PURE__*/function () {
      function FollowersPage() {
        _classCallCheck(this, FollowersPage);
      }

      _createClass(FollowersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FollowersPage;
    }();

    FollowersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-followers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./followers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/followers/followers.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./followers.page.scss */
      "./src/app/followers/followers.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], FollowersPage);
    /***/
  }
}]);
//# sourceMappingURL=followers-followers-module-es5.js.map