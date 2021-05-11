(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["friends-friends-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"is-header-logo-centered\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>My Friends</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>A</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item detail=\"false\" routerLink=\"/friends\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-woody.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Andrew Woody</h2>\r\n        <p>@andrew</p>\r\n      </ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"outline\">\r\n          <ion-icon name=\"mail\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n\r\n    <ion-item detail=\"false\" routerLink=\"/friends\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-buzz.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Alex Buzz Lightyear</h2>\r\n        <p>@alex</p>\r\n      </ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"outline\">\r\n          <ion-icon name=\"mail\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n\r\n    <ion-item detail=\"false\" routerLink=\"/friends\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-jessie.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Anton Jessie</h2>\r\n        <p>@anton</p>\r\n      </ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"outline\">\r\n          <ion-icon name=\"mail\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>B</ion-label>\r\n    </ion-item-divider>\r\n    <ion-item detail=\"false\" routerLink=\"/friends\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-barbie.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Barbie</h2>\r\n        <p>@barbie</p>\r\n      </ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"outline\">\r\n          <ion-icon name=\"mail\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n  <ion-item-group>\r\n    <ion-item-divider>\r\n      <ion-label>C</ion-label>\r\n    </ion-item-divider>\r\n\r\n\r\n    <ion-item detail=\"false\" routerLink=\"/friends\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-squeeze.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Clark Squeeze</h2>\r\n        <p>@clark</p>\r\n      </ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"outline\">\r\n          <ion-icon name=\"mail\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n\r\n    <ion-item detail=\"false\" routerLink=\"/friends\">\r\n      <ion-avatar slot=\"start\">\r\n        <img src=\"assets/imgs/avatar-ts-sarge.png\">\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h2>Charlie Sarge</h2>\r\n        <p>@charlie</p>\r\n      </ion-label>\r\n      <ion-buttons slot=\"end\">\r\n        <ion-button fill=\"outline\">\r\n          <ion-icon name=\"mail\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\">\r\n          <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-item>\r\n  </ion-item-group>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/friends/friends.module.ts":
/*!*******************************************!*\
  !*** ./src/app/friends/friends.module.ts ***!
  \*******************************************/
/*! exports provided: FriendsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPageModule", function() { return FriendsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _friends_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./friends.page */ "./src/app/friends/friends.page.ts");







const routes = [
    {
        path: '',
        component: _friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]
    }
];
let FriendsPageModule = class FriendsPageModule {
};
FriendsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_friends_page__WEBPACK_IMPORTED_MODULE_6__["FriendsPage"]]
    })
], FriendsPageModule);



/***/ }),

/***/ "./src/app/friends/friends.page.scss":
/*!*******************************************!*\
  !*** ./src/app/friends/friends.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --inner-padding-end: 0;\n}\n\nion-item ion-button[fill=outline] {\n  --border-width: 1px;\n  --border-color: var(--ion-color-light);\n  height: 48px !important;\n  width: 48px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIiwic3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msc0JBQUE7QUNDRDs7QURDQTtFQUNFLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9mcmllbmRzL2ZyaWVuZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG5cdC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbn1cclxuaW9uLWl0ZW0gaW9uLWJ1dHRvbltmaWxsPVwib3V0bGluZVwiXSB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNDhweCAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xufVxuXG5pb24taXRlbSBpb24tYnV0dG9uW2ZpbGw9b3V0bGluZV0ge1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA0OHB4ICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/friends/friends.page.ts":
/*!*****************************************!*\
  !*** ./src/app/friends/friends.page.ts ***!
  \*****************************************/
/*! exports provided: FriendsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsPage", function() { return FriendsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FriendsPage = class FriendsPage {
    constructor() { }
    ngOnInit() {
    }
};
FriendsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friends',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./friends.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/friends/friends.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./friends.page.scss */ "./src/app/friends/friends.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FriendsPage);



/***/ })

}]);
//# sourceMappingURL=friends-friends-module-es2015.js.map