(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Calendar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <h1 class=\"ion-padding\">\r\n    Hello Komol, <br>\r\n    you have 8 tasks\r\n  </h1>\r\n\r\n  <ion-list class=\"is-list-colored\">\r\n    <ion-item routerLink=\"/calendar\" detail=\"false\" class=\"is-item-category-secondary\">\r\n      <ion-label>\r\n        <h2>Swimming Time</h2>\r\n        <p>Breaststroke 6x - 50m, Butterfly 6x - 50m.</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>\r\n          07:30 AM<br>\r\n          08:30 AM\r\n        </h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/calendar\" detail=\"false\" class=\"is-item-category-light\">\r\n      <ion-label>\r\n        <h2>Meet with Alice</h2>\r\n        <p><ion-icon name=\"location-sharp\"></ion-icon> 1404 Mya Road Apt. 012</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>\r\n          10:00 AM\r\n        </h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/calendar\" detail=\"false\" class=\"is-item-category-dark\">\r\n      <ion-label>\r\n        <h2>Coffee Break</h2>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>\r\n          10:30 AM<br>\r\n          11:00 AM\r\n        </h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/calendar\" detail=\"false\" class=\"is-item-category-primary\">\r\n      <ion-label>\r\n        <h2>Conference Call</h2>\r\n        <p><ion-icon name=\"location-sharp\"></ion-icon> 321 Petra Lock Apt. 920</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>\r\n          11:15 AM<br>\r\n          13:15 PM\r\n        </h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/calendar\" detail=\"false\" class=\"is-item-category-secondary\">\r\n      <ion-label>\r\n        <h2>Yoga Time</h2>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>\r\n          02:30 PM<br>\r\n          03:30 PM\r\n        </h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/calendar\" detail=\"false\" class=\"is-item-category-light\">\r\n      <ion-label>\r\n        <h2>Meet with George</h2>\r\n        <p><ion-icon name=\"location-sharp\"></ion-icon> 080 Goldner Pass Apt. 969</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>\r\n          17:00 PM<br>\r\n          18:00 PM\r\n        </h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/calendar\" detail=\"false\" class=\"is-item-category-primary\">\r\n      <ion-label>\r\n        <h2>Call with Jane</h2>\r\n        <p>New product presentation</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>\r\n          18:15 PM<br>\r\n          19:15 PM\r\n        </h3>\r\n      </div>\r\n    </ion-item>\r\n    <ion-item routerLink=\"/calendar\" detail=\"false\" class=\"is-item-category-dark\">\r\n      <ion-label>\r\n        <h2>Watch Movies</h2>\r\n        <p><ion-icon name=\"location-sharp\"></ion-icon> 9902 Maiden St. RI 02852</p>\r\n      </ion-label>\r\n      <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n        <h3>\r\n          20:00 PM<br>\r\n          22:00 PM\r\n        </h3>\r\n      </div>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPageModule", function() { return CalendarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _calendar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.page */ "./src/app/calendar/calendar.page.ts");







const routes = [
    {
        path: '',
        component: _calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]
    }
];
let CalendarPageModule = class CalendarPageModule {
};
CalendarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_calendar_page__WEBPACK_IMPORTED_MODULE_6__["CalendarPage"]]
    })
], CalendarPageModule);



/***/ }),

/***/ "./src/app/calendar/calendar.page.scss":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item h3 {\n  font-size: 0.9em;\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9jYWxlbmRhci9jYWxlbmRhci5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGFyL2NhbGVuZGFyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIGgzIHtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiIsImlvbi1pdGVtIGgzIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/calendar/calendar.page.ts":
/*!*******************************************!*\
  !*** ./src/app/calendar/calendar.page.ts ***!
  \*******************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarPage", function() { return CalendarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CalendarPage = class CalendarPage {
    constructor() { }
    ngOnInit() {
    }
};
CalendarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calendar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calendar/calendar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calendar.page.scss */ "./src/app/calendar/calendar.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CalendarPage);



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module-es2015.js.map