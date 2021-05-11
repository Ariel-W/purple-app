function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["speaker-details-speaker-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/speaker-details/speaker-details.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/speaker-details/speaker-details.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSpeakerDetailsSpeakerDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Speaker Details</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div class=\"is-hero\">\r\n    <ion-item detail=\"false\" lines=\"none\">\r\n      <div class=\"is-avatar-container\" slot=\"start\">\r\n        <img src=\"assets/imgs/speaker-1.png\">\r\n      </div>\r\n      <ion-label>\r\n        <h1>Andrew Antony</h1>\r\n        <div class=\"ion-text-wrap\">Founder & CEO at Jermains Biology</div>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-grid class=\"ion-padding-top ion-text-center\">\r\n      <ion-row>\r\n        <ion-col size=\"3\">\r\n          <ion-item routerLink=\"/speaker-details\" lines=\"none\" detail=\"false\" class=\"ion-text-center\">\r\n            <ion-label>\r\n              <ion-icon name=\"star\"></ion-icon>\r\n              <p>Bookmark</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-item routerLink=\"/speaker-details\" lines=\"none\" detail=\"false\" class=\"ion-text-center\">\r\n            <ion-label>\r\n              <ion-icon name=\"chatbox\"></ion-icon>\r\n              <p>Chat</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-item routerLink=\"/speaker-details\" lines=\"none\" detail=\"false\" class=\"ion-text-center\">\r\n            <ion-label>\r\n              <ion-icon name=\"mail\"></ion-icon>\r\n              <p>Email</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"3\">\r\n          <ion-item routerLink=\"/speaker-details\" lines=\"none\" detail=\"false\" class=\"ion-text-center\">\r\n            <ion-label>\r\n              <ion-icon name=\"people\"></ion-icon>\r\n              <p>Let's Meet</p>\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <ion-item-group class=\"is-list-square\">\r\n    <ion-item-divider>\r\n      <ion-label>SPEAKING AT</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>17:00</span><br><span>18:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session A3: AI and Machine Learning</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room A3 <br> Tue Jan 21, 2020</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>17:00</span><br><span>18:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session A1: Data analysis</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room A1 <br> Tue Jan 21, 2020</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item button (click)=\"goToSessionDetails()\" detail=\"false\" class=\"is-list-square-has-square\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><span>17:00</span><br><span>18:00</span></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">Session A2: Data science</p>\r\n        <p class=\"is-list-square-note\"><ion-icon name=\"location-sharp\"></ion-icon> Room A2 <br> Tue Jan 21, 2020</p>\r\n      </ion-label>\r\n      <div slot=\"end\">\r\n        <ion-button (click)=\"onIconClick($event)\" fill=\"clear\">\r\n          <ion-icon name=\"star-outline\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>BIO</ion-label>\r\n    </ion-item-divider>\r\n    <div class=\"ion-padding\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime non eius optio iusto similique officiis voluptatum fugit quisquam, ratione illum suscipit autem eum possimus iste cupiditate ipsam inventore sed... <a href=\"#\" routerLink=\"/speaker-details\">Read more</a></div>\r\n  </ion-item-group>\r\n  <ion-item-group class=\"is-list-square\">\r\n    <ion-item-divider>\r\n      <ion-label>AFFILIATIONS</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item detail=\"false\" class=\"is-list-square-has-square\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><ion-icon name=\"business\"></ion-icon></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">L. O. Smith, Lorem Center ABC</p>\r\n        <p>Vice President</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group class=\"is-list-square\">\r\n    <ion-item-divider>\r\n      <ion-label>EDUCATION</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item detail=\"false\" class=\"is-list-square-has-square\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><ion-icon name=\"newspaper\"></ion-icon></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">University of Oxford</p>\r\n        <p>Ph.D., Computer Science <br> 2000 to 2005</p>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item detail=\"false\" class=\"is-list-square-has-square\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><ion-icon name=\"newspaper\"></ion-icon></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\">University of Oxford</p>\r\n        <p>M.Sc., Computer Science <br> 2007 to 2009</p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group class=\"is-list-square\">\r\n    <ion-item-divider>\r\n      <ion-label>WEBSITE</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item href=\"https://www.google.com\" detail=\"false\" class=\"is-list-square-has-square\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><ion-icon name=\"link\"></ion-icon></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\"><a target=\"_blank\" href=\"https://www.google.com\">www.google.com</a></p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group class=\"is-list-square\">\r\n    <ion-item-divider>\r\n      <ion-label>SOCIAL PROFILES</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item href=\"https://www.linkedin.com/\" detail=\"false\" class=\"is-list-square-has-square\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <div><ion-icon name=\"logo-linkedin\"></ion-icon></div>\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <p class=\"is-list-square-title\"><a target=\"_blank\" href=\"https://www.linkedin.com/\">Linkedin Profile</a></p>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <ion-item-group class=\"is-list-square\">\r\n    <ion-item-divider>\r\n      <ion-label>SPONSORS</ion-label>\r\n    </ion-item-divider>\r\n    <ion-slides [options]=\"slideOpts\" pager=\"true\">\r\n      <ion-slide class=\"ion-padding\">\r\n        <img src=\"assets/imgs/sponsor-1.png\"/>\r\n      </ion-slide>\r\n      <ion-slide class=\"ion-padding\">\r\n        <img src=\"assets/imgs/sponsor-2.png\"/>\r\n      </ion-slide>\r\n      <ion-slide class=\"ion-padding\">\r\n        <img src=\"assets/imgs/sponsor-3.png\"/>\r\n      </ion-slide>\r\n    </ion-slides>\r\n  </ion-item-group>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/speaker-details/speaker-details.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/speaker-details/speaker-details.module.ts ***!
    \***********************************************************/

  /*! exports provided: SpeakerDetailsPageModule */

  /***/
  function srcAppSpeakerDetailsSpeakerDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailsPageModule", function () {
      return SpeakerDetailsPageModule;
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


    var _speaker_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./speaker-details.page */
    "./src/app/speaker-details/speaker-details.page.ts");

    var routes = [{
      path: '',
      component: _speaker_details_page__WEBPACK_IMPORTED_MODULE_6__["SpeakerDetailsPage"]
    }];

    var SpeakerDetailsPageModule = function SpeakerDetailsPageModule() {
      _classCallCheck(this, SpeakerDetailsPageModule);
    };

    SpeakerDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_speaker_details_page__WEBPACK_IMPORTED_MODULE_6__["SpeakerDetailsPage"]]
    })], SpeakerDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/speaker-details/speaker-details.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/speaker-details/speaker-details.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSpeakerDetailsSpeakerDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-thumbnail ion-icon {\n  font-size: 32px;\n}\n\n.is-hero {\n  background-color: var(--ion-color-primary);\n  color: #ffffff;\n  text-align: left;\n  padding-top: 30px;\n  padding-bottom: 5px;\n}\n\n.is-hero ion-item {\n  --background: var(--ion-color-primary);\n  --color: #ffffff;\n}\n\n.is-hero ion-grid ion-icon {\n  font-size: 32px;\n}\n\n.is-hero ion-grid p {\n  color: #ffffff;\n  margin: 0;\n  white-space: normal;\n  font-size: 0.8rem;\n}\n\n.is-hero ion-grid ion-item ion-label {\n  margin-right: 0;\n}\n\n::ng-deep .swiper-wrapper {\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9zcGVha2VyLWRldGFpbHMvc3BlYWtlci1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc3BlYWtlci1kZXRhaWxzL3NwZWFrZXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURBRTtFQUNFLHNDQUFBO0VBQ0EsZ0JBQUE7QUNFSjs7QURFSTtFQUNFLGVBQUE7QUNBTjs7QURFSTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FOOztBREdNO0VBQ0UsZUFBQTtBQ0RSOztBRE9FO0VBQ0UsbUJBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NwZWFrZXItZGV0YWlscy9zcGVha2VyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRodW1ibmFpbCBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG59XHJcbi5pcy1oZXJvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIC0tY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICBpb24tZ3JpZCB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuOjpuZy1kZWVwIHtcclxuICAuc3dpcGVyLXdyYXBwZXIge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuIiwiaW9uLXRodW1ibmFpbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cblxuLmlzLWhlcm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbi5pcy1oZXJvIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tY29sb3I6ICNmZmZmZmY7XG59XG4uaXMtaGVybyBpb24tZ3JpZCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbn1cbi5pcy1oZXJvIGlvbi1ncmlkIHAge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAwO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5pcy1oZXJvIGlvbi1ncmlkIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuOjpuZy1kZWVwIC5zd2lwZXItd3JhcHBlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/speaker-details/speaker-details.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/speaker-details/speaker-details.page.ts ***!
    \*********************************************************/

  /*! exports provided: SpeakerDetailsPage */

  /***/
  function srcAppSpeakerDetailsSpeakerDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpeakerDetailsPage", function () {
      return SpeakerDetailsPage;
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

    var SpeakerDetailsPage = /*#__PURE__*/function () {
      function SpeakerDetailsPage(router) {
        _classCallCheck(this, SpeakerDetailsPage);

        this.router = router;
        this.slideOpts = {
          autoplay: true
        };
      }

      _createClass(SpeakerDetailsPage, [{
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

      return SpeakerDetailsPage;
    }();

    SpeakerDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    SpeakerDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-speaker-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./speaker-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/speaker-details/speaker-details.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./speaker-details.page.scss */
      "./src/app/speaker-details/speaker-details.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], SpeakerDetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=speaker-details-speaker-details-module-es5.js.map