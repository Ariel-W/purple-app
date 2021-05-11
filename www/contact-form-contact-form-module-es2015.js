(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-form-contact-form-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Contact Form</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ion-padding\">\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Recipient</ion-label>\r\n      <ion-select interface=\"action-sheet\" value=\"one\">\r\n        <ion-select-option value=\"one\">Customer Support</ion-select-option>\r\n        <ion-select-option value=\"two\">Marketing Department</ion-select-option>\r\n        <ion-select-option value=\"three\">Careers</ion-select-option>\r\n      </ion-select>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Title</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Title\" #title></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label color=\"primary\" position=\"stacked\">Message</ion-label>\r\n      <ion-textarea type=\"text\" placeholder=\"Message\" #message></ion-textarea>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button fill=\"solid\" expand=\"full\" [disabled]=\"!(title.value && message.value)\" class=\"ion-no-margin\" size=\"large\">\r\n    Send\r\n  </ion-button>\r\n</ion-footer>\r\n");

/***/ }),

/***/ "./src/app/contact-form/contact-form.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/contact-form/contact-form.module.ts ***!
  \*****************************************************/
/*! exports provided: ContactFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormPageModule", function() { return ContactFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact-form.page */ "./src/app/contact-form/contact-form.page.ts");







const routes = [
    {
        path: '',
        component: _contact_form_page__WEBPACK_IMPORTED_MODULE_6__["ContactFormPage"]
    }
];
let ContactFormPageModule = class ContactFormPageModule {
};
ContactFormPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_contact_form_page__WEBPACK_IMPORTED_MODULE_6__["ContactFormPage"]]
    })
], ContactFormPageModule);



/***/ }),

/***/ "./src/app/contact-form/contact-form.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/contact-form/contact-form.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QtZm9ybS9jb250YWN0LWZvcm0ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact-form/contact-form.page.ts":
/*!***************************************************!*\
  !*** ./src/app/contact-form/contact-form.page.ts ***!
  \***************************************************/
/*! exports provided: ContactFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFormPage", function() { return ContactFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ContactFormPage = class ContactFormPage {
    constructor() { }
    ngOnInit() {
    }
};
ContactFormPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact-form.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-form/contact-form.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact-form.page.scss */ "./src/app/contact-form/contact-form.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ContactFormPage);



/***/ })

}]);
//# sourceMappingURL=contact-form-contact-form-module-es2015.js.map