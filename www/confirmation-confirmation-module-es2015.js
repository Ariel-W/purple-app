(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirmation-confirmation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Confirmation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"is-flex ion-justify-content-evenly ion-align-items-center ion-padding-top ion-margin-vertical\">\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/cart\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/delivery\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"location-sharp\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/payment\" color=\"is-mute-normal\">\r\n      <ion-icon slot=\"icon-only\" name=\"card\"></ion-icon>\r\n    </ion-button>\r\n    <ion-icon name=\"arrow-forward\"></ion-icon>\r\n    <ion-button class=\"button button-color ion-no-padding\" routerLink=\"/confirmation\" fill=\"outline\">\r\n      <ion-icon slot=\"icon-only\" name=\"flag\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>CART</ion-label>\r\n      <div slot=\"end\" class=\"ion-padding-horizontal\"><a routerLink=\"/confirmation-page\">Edit</a></div>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"9\" class=\"ion-text-left\">\r\n            <span>Short-sleeved Denim Shirt</span>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-right\">\r\n            <div class=\"is-price ion-no-padding\">\r\n              <span>$29.99</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p class=\"ion-no-margin\">Pcs: 1 Size: Small</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"9\" class=\"ion-text-left\">\r\n            <span>Lorem dolor sit amet</span>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-right\">\r\n            <div class=\"is-price ion-no-padding\">\r\n              <span>$39.99</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p class=\"ion-no-margin\">Pcs: 1 Size: XL</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"9\" class=\"ion-text-left\">\r\n            <span>Labore et dolore magna aliqua</span>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-right\">\r\n            <div class=\"is-price ion-no-padding\">\r\n              <span>$59.99</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p class=\"ion-no-margin\">Pcs: 1 Size: -</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"9\" class=\"ion-text-left\">\r\n            <span>Excepteur sint occaecat cupidatat</span>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-right\">\r\n            <div class=\"is-price ion-no-padding\">\r\n              <span>$99.99</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p class=\"ion-no-margin\">Pcs: 2 Size: Large</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>DELIVERY INFORMATION</ion-label>\r\n      <div slot=\"end\" class=\"ion-padding-horizontal\"><a routerLink=\"/confirmation-page\">Edit</a></div>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"9\" class=\"ion-text-left\">\r\n            <span>Express delivery</span>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-right\">\r\n            <div class=\"is-price ion-no-padding\">\r\n              <span>$30.00</span>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col>\r\n            <p class=\"ion-no-margin\">7-8 Days</p>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"12\" class=\"ion-text-left\">\r\n            <span>Address No 11111, City, Country</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>PAYMENT</ion-label>\r\n      <div slot=\"end\" class=\"ion-padding-horizontal\"><a routerLink=\"/confirmation-page\">Edit</a></div>\r\n    </ion-item-divider>\r\n    <ion-item>\r\n      <ion-grid class=\"ion-no-padding ion-margin-vertical\">\r\n        <ion-row class=\"ion-align-items-stretch\">\r\n          <ion-col size=\"9\" class=\"ion-text-left\">\r\n            <span>xxxx-xxxx-xxxx-9701</span>\r\n          </ion-col>\r\n          <ion-col size=\"3\" class=\"ion-text-right\">\r\n            <div class=\"ion-no-padding\">\r\n              <div class=\"ion-no-padding\">\r\n                <span>VISA</span>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>TOTAL</ion-label>\r\n      <div class=\"is-price ion-padding-horizontal\" slot=\"end\"><span>$199.00</span></div>\r\n    </ion-item-divider>\r\n  </ion-item-group>\r\n\r\n  <div class=\"ion-padding\">\r\n    <ion-button class=\"ion-margin-top\" expand=\"block\" routerLink=\"/order-finish\">Order Now</ion-button>\r\n    <ion-button expand=\"block\" fill=\"outline\" routerLink=\"/delivery\">Cancel</ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/confirmation/confirmation.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/confirmation/confirmation.module.ts ***!
  \*****************************************************/
/*! exports provided: ConfirmationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPageModule", function() { return ConfirmationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmation.page */ "./src/app/confirmation/confirmation.page.ts");







const routes = [
    {
        path: '',
        component: _confirmation_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPage"]
    }
];
let ConfirmationPageModule = class ConfirmationPageModule {
};
ConfirmationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_confirmation_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmationPage"]]
    })
], ConfirmationPageModule);



/***/ }),

/***/ "./src/app/confirmation/confirmation.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/confirmation/confirmation.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button.button-color {\n  width: 50px;\n  height: 50px !important;\n  --border-color: var(--ion-color-is-mute-light);\n  --border-style: solid;\n  --border-width: 2px;\n}\n\nion-item-divider a {\n  text-decoration: none;\n}\n\nion-item-divider .is-price {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY29uZmlybWF0aW9uL2NvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSw4Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb25maXJtYXRpb24vY29uZmlybWF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24uYnV0dG9uLWNvbG9yIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG59XHJcbmlvbi1pdGVtLWRpdmlkZXIge1xyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAuaXMtcHJpY2Uge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxufVxyXG4iLCJpb24tYnV0dG9uLmJ1dHRvbi1jb2xvciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xufVxuXG5pb24taXRlbS1kaXZpZGVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5pb24taXRlbS1kaXZpZGVyIC5pcy1wcmljZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/confirmation/confirmation.page.ts":
/*!***************************************************!*\
  !*** ./src/app/confirmation/confirmation.page.ts ***!
  \***************************************************/
/*! exports provided: ConfirmationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationPage", function() { return ConfirmationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ConfirmationPage = class ConfirmationPage {
    constructor() { }
    ngOnInit() {
    }
};
ConfirmationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirmation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/confirmation/confirmation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirmation.page.scss */ "./src/app/confirmation/confirmation.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ConfirmationPage);



/***/ })

}]);
//# sourceMappingURL=confirmation-confirmation-module-es2015.js.map