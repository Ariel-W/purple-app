(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-settings-profile-settings-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-settings/profile-settings.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile-settings/profile-settings.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Profile Settings</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-margin is-profile-picture\">\r\n    <img src=\"assets/imgs/profile.png\">\r\n    <div>\r\n      <ion-fab slot=\"fixed\">\r\n        <ion-fab-button fill=\"outline\" size=\"small\">\r\n          <ion-icon name=\"camera\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"ion-text-center ion-margin-bottom\">\r\n    <h2 class=\"ion-no-margin\">William Roberson</h2>\r\n    <p class=\"ion-no-margin\">+99893 000 00 00</p>\r\n  </div>\r\n\r\n  <ion-list mode=\"md\">\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-primary\">\r\n        <ion-icon name=\"notifications\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Notification</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-secondary\">\r\n        <ion-icon name=\"people\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Friends</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-dark\">\r\n        <ion-icon name=\"camera\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Photos & Camera</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <ion-list mode=\"md\">\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-danger\">\r\n        <ion-icon name=\"alert-circle\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Report a Problem</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-success\">\r\n        <ion-icon name=\"help-buoy\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Help</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-avatar slot=\"start\" class=\"is-icon-avatar is-background-light\">\r\n        <ion-icon name=\"document\"></ion-icon>\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Terms and Conditions</h2>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/profile-settings/profile-settings.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/profile-settings/profile-settings.module.ts ***!
  \*************************************************************/
/*! exports provided: ProfileSettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsPageModule", function() { return ProfileSettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-settings.page */ "./src/app/profile-settings/profile-settings.page.ts");







const routes = [
    {
        path: '',
        component: _profile_settings_page__WEBPACK_IMPORTED_MODULE_6__["ProfileSettingsPage"]
    }
];
let ProfileSettingsPageModule = class ProfileSettingsPageModule {
};
ProfileSettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_profile_settings_page__WEBPACK_IMPORTED_MODULE_6__["ProfileSettingsPage"]]
    })
], ProfileSettingsPageModule);



/***/ }),

/***/ "./src/app/profile-settings/profile-settings.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/profile-settings/profile-settings.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUtc2V0dGluZ3MvcHJvZmlsZS1zZXR0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/profile-settings/profile-settings.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/profile-settings/profile-settings.page.ts ***!
  \***********************************************************/
/*! exports provided: ProfileSettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSettingsPage", function() { return ProfileSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileSettingsPage = class ProfileSettingsPage {
    constructor() { }
    ngOnInit() {
    }
};
ProfileSettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-settings',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-settings.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile-settings/profile-settings.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-settings.page.scss */ "./src/app/profile-settings/profile-settings.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ProfileSettingsPage);



/***/ })

}]);
//# sourceMappingURL=profile-settings-profile-settings-module-es2015.js.map