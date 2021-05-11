(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-event-calendar-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-event/calendar-event.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-event/calendar-event.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Calendar Event</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 class=\"ion-padding-horizontal\">Meeting with George and Alex</h1>\r\n\r\n  <ion-grid class=\"is-grid is-grid-tiles is-grid-bordered ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"is-tile ion-no-padding\">\r\n        <div class=\"is-col-header\">\r\n          <p>Meeting Time</p>\r\n        </div>\r\n        <h3>\r\n          03:00 PM<br>\r\n          03:30 PM\r\n        </h3>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"is-tile ion-no-padding\">\r\n        <div class=\"is-col-header\">\r\n          <p>Time Left</p>\r\n        </div>\r\n        <h3 class=\"is-color-success\">\r\n          1h 25 min<br>\r\n          34 sec\r\n        </h3>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-item-group class=\"is-list-avatar-buttons\">\r\n    <ion-item-divider>\r\n      <ion-label>People</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item routerLink=\"/calendarEvent\" detail=\"false\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>George Brown</h2>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"ion-no-margin\">\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" name=\"chatbox\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" name=\"call\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/calendarEvent\" detail=\"false\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Alex Hunter</h2>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"ion-no-margin\">\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" name=\"chatbox\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" name=\"arrow-forward\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>Location</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-label>\r\n        <p><ion-icon name=\"ios-pin\"></ion-icon> 080 Goldner Pass Apt. 969</p>\r\n      </ion-label>\r\n      <ion-button fill=\"clear\" slot=\"end\">\r\n        Get location\r\n      </ion-button>\r\n    </ion-item>\r\n  </ion-item-group>\r\n  <div class=\"ion-text-center\">\r\n    <img src=\"assets/imgs/map.png\">\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/calendar-event/calendar-event.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/calendar-event/calendar-event.module.ts ***!
  \*********************************************************/
/*! exports provided: CalendarEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventPageModule", function() { return CalendarEventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calendar_event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-event.page */ "./src/app/calendar-event/calendar-event.page.ts");







const routes = [
    {
        path: '',
        component: _calendar_event_page__WEBPACK_IMPORTED_MODULE_6__["CalendarEventPage"]
    }
];
let CalendarEventPageModule = class CalendarEventPageModule {
};
CalendarEventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_calendar_event_page__WEBPACK_IMPORTED_MODULE_6__["CalendarEventPage"]]
    })
], CalendarEventPageModule);



/***/ }),

/***/ "./src/app/calendar-event/calendar-event.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/calendar-event/calendar-event.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyLWV2ZW50L2NhbGVuZGFyLWV2ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/calendar-event/calendar-event.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/calendar-event/calendar-event.page.ts ***!
  \*******************************************************/
/*! exports provided: CalendarEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventPage", function() { return CalendarEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CalendarEventPage = class CalendarEventPage {
    constructor() { }
    ngOnInit() {
    }
};
CalendarEventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendar-event.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar-event/calendar-event.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendar-event.page.scss */ "./src/app/calendar-event/calendar-event.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CalendarEventPage);



/***/ })

}]);
//# sourceMappingURL=calendar-event-calendar-event-module-es2015.js.map