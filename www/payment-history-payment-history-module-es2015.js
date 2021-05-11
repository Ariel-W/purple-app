(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-history-payment-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-history/payment-history.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment-history/payment-history.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Payment History</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"none\" class=\"is-list-colored\">\r\n    <div *ngFor=\"let item of items; let i = index\">\r\n      <ion-item [ngClass]=\"item.category\">\r\n        <ion-thumbnail slot=\"start\" class=\"is-icon-thumbnail\">\r\n          <ion-icon name=\"{{item.icon}}\"></ion-icon>\r\n        </ion-thumbnail>\r\n        <ion-label>\r\n          <h2 (click)=\"itemTapped(i)\">{{item.title}} <ion-icon name=\"arrow-down\" *ngIf=\"!isShown[i]\"></ion-icon><ion-icon name=\"arrow-up\" *ngIf=\"isShown[i]\"></ion-icon></h2>\r\n          <p>{{item.date}}</p>\r\n        </ion-label>\r\n        <div slot=\"end\" class=\"is-list-colored-button-group\">\r\n          <h3>{{item.amount}}</h3>\r\n        </div>\r\n      </ion-item>\r\n      <div class=\"ion-padding-horizontal\">\r\n        <ion-grid [class.is-hide]=\"!isShown[i] || false\" class=\"ion-no-padding\">\r\n          <ion-row>\r\n            <ion-col>\r\n              Transaction number\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-right\">\r\n              {{item.transaction}}\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              Profile ID\r\n            </ion-col>\r\n            <ion-col class=\"ion-text-right\">\r\n              {{item.profileId}}\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col>\r\n              E-mail\r\n            </ion-col>\r\n            <ion-col class=\"is-color-primary ion-text-right\">\r\n              {{item.email}}\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-button fill=\"outline\">New Payment</ion-button>\r\n            <ion-button fill=\"outline\" color=\"is-mute-normal\">Cancel</ion-button>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/payment-history/payment-history.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/payment-history/payment-history.module.ts ***!
  \***********************************************************/
/*! exports provided: PaymentHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryPageModule", function() { return PaymentHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-history.page */ "./src/app/payment-history/payment-history.page.ts");







const routes = [
    {
        path: '',
        component: _payment_history_page__WEBPACK_IMPORTED_MODULE_6__["PaymentHistoryPage"]
    }
];
let PaymentHistoryPageModule = class PaymentHistoryPageModule {
};
PaymentHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_payment_history_page__WEBPACK_IMPORTED_MODULE_6__["PaymentHistoryPage"]]
    })
], PaymentHistoryPageModule);



/***/ }),

/***/ "./src/app/payment-history/payment-history.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/payment-history/payment-history.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-list-colored h3 {\n  margin-top: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9wYXltZW50LWhpc3RvcnkvcGF5bWVudC1oaXN0b3J5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGF5bWVudC1oaXN0b3J5L3BheW1lbnQtaGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudC1oaXN0b3J5L3BheW1lbnQtaGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtbGlzdC1jb2xvcmVkIGgzIHtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG59XHJcbiIsIi5pcy1saXN0LWNvbG9yZWQgaDMge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/payment-history/payment-history.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/payment-history/payment-history.page.ts ***!
  \*********************************************************/
/*! exports provided: PaymentHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistoryPage", function() { return PaymentHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PaymentHistoryPage = class PaymentHistoryPage {
    constructor() {
        this.isShown = [];
        this.items = [
            {
                title: 'Playstation Network',
                category: 'is-item-category-danger',
                icon: 'arrow-up',
                date: '01:24 PM  •  September 12, 2016',
                amount: '- $12',
                transaction: '982921938948222',
                profileId: '3488892',
                email: 'chris@gmail.com'
            },
            {
                title: 'Tomas Myers',
                category: 'is-item-category-success',
                icon: 'arrow-down',
                date: '04:19 PM  •  September 12, 2016',
                amount: '+ $1800',
                transaction: '881121938948333',
                profileId: '4488401',
                email: 'thomas.39@gmail.com'
            },
            {
                title: 'Gumroad Inc.',
                category: 'is-item-category-success',
                icon: 'arrow-down',
                date: '08:40 PM  •  September 12, 2016',
                amount: '+ $240',
                transaction: '715921938967344',
                profileId: '6488819',
                email: 'sophia@gmail.com'
            },
            {
                title: 'Starbucks',
                category: 'is-item-category-danger',
                icon: 'arrow-up',
                date: '01:24 PM  •  August 26, 2016',
                amount: '- $24',
                transaction: '624810827703283',
                profileId: '4355150',
                email: 'jake@gmail.com'
            },
            {
                title: 'CreativeMarket',
                category: 'is-item-category-success',
                icon: 'arrow-down',
                date: '02:40 PM  •  August 24, 2016',
                amount: '+ $850',
                transaction: '256268857395641',
                profileId: '97348406',
                email: 'emily@gmail.com'
            },
            {
                title: 'Desk Purchase',
                category: 'is-item-category-danger',
                icon: 'arrow-up',
                date: '08:40 PM  •  August 24, 2016',
                amount: '- $220',
                transaction: '8364788573092901',
                profileId: '08627856',
                email: 'olivia@gmail.com'
            }
        ];
        this.isShown[0] = true;
    }
    ngOnInit() {
    }
    itemTapped(index) {
        this.isShown[index] = !this.isShown[index];
    }
};
PaymentHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/payment-history/payment-history.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment-history.page.scss */ "./src/app/payment-history/payment-history.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], PaymentHistoryPage);



/***/ })

}]);
//# sourceMappingURL=payment-history-payment-history-module-es2015.js.map