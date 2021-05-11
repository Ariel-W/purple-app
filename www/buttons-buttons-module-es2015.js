(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buttons-buttons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Buttons</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"ion-text-center\">\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">List</h4>\r\n    <ion-list>\r\n      <ion-item button>\r\n        <ion-label>Default</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"ion-no-margin ion-padding\">\r\n      <ion-item button color=\"primary\" detail=\"false\">\r\n        <ion-label>Colored No Details</ion-label>\r\n      </ion-item>\r\n      <ion-item button color=\"primary\" detail=\"true\">\r\n        <ion-label>Colored Details</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"ion-padding ion-no-margin\">\r\n      <ion-item button detail=\"false\">\r\n        <ion-icon slot=\"end\" name=\"home\"></ion-icon>\r\n        <ion-label>Icon Right</ion-label>\r\n      </ion-item>\r\n      <ion-item button detail=\"false\">\r\n        <ion-icon slot=\"start\" name=\"home\"></ion-icon>\r\n        <ion-label>Icon Left No Details</ion-label>\r\n      </ion-item>\r\n      <ion-item button detail=\"true\">\r\n        <ion-icon slot=\"start\" name=\"home\"></ion-icon>\r\n        <ion-label>Icon Left Details</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"ion-padding ion-no-margin\">\r\n      <ion-item button detail=\"false\" color=\"danger\">\r\n        <ion-icon slot=\"end\" name=\"home\"></ion-icon>\r\n        <ion-label>Colored</ion-label>\r\n      </ion-item>\r\n      <ion-item button detail=\"false\">\r\n        <ion-icon slot=\"end\" name=\"home\" color=\"danger\"></ion-icon>\r\n        <ion-label>Colored Icon</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list lines=\"none\" class=\"ion-no-margin is-list-buttons ion-padding\">\r\n      <ion-item color=\"light\" button detail=\"true\">\r\n        <ion-label>No Border</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-grid class=\"is-grid ion-no-padding\">\r\n      <ion-row>\r\n        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n          <ion-list lines=\"none\" class=\"ion-no-margin is-list-buttons ion-padding\">\r\n            <ion-item color=\"light\" button detail=\"false\">\r\n              <ion-label>Forward</ion-label>\r\n              <ion-icon slot=\"end\" name=\"arrow-up\"></ion-icon>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-no-padding\">\r\n          <ion-list lines=\"none\" class=\"ion-no-margin is-list-buttons ion-padding\">\r\n            <ion-item color=\"primary\" button detail=\"false\">\r\n              <ion-label>Reply</ion-label>\r\n              <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Text</h4>\r\n\r\n    <ion-text color=\"secondary\"><div class=\"ion-padding\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></ion-text>\r\n\r\n    <ion-text color=\"primary\"><div class=\"ion-padding\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></ion-text>\r\n\r\n    <ion-text color=\"success\"><div class=\"ion-padding\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></ion-text>\r\n\r\n    <ion-text color=\"danger\"><div class=\"ion-padding\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></ion-text>\r\n\r\n    <ion-text color=\"warning\"><div class=\"ion-padding\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></ion-text>\r\n\r\n    <ion-text color=\"tertiary\"><div class=\"ion-padding\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div></ion-text>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Colors</h4>\r\n    <ion-button>Default</ion-button>\r\n    <ion-button color=\"primary\">Primary</ion-button>\r\n    <ion-button color=\"secondary\">Secondary</ion-button>\r\n    <ion-button color=\"success\">Success</ion-button>\r\n    <ion-button color=\"danger\">Danger</ion-button>\r\n    <ion-button color=\"warning\">Warning</ion-button>\r\n    <ion-button color=\"tertiary\">Tertiary</ion-button>\r\n    <ion-button color=\"dark\">Dark</ion-button>\r\n    <ion-button color=\"medium\">Medium</ion-button>\r\n    <ion-button color=\"light\">Light</ion-button>\r\n    <ion-button color=\"is-mute-normal\">Mute Normal</ion-button>\r\n    <ion-button color=\"is-text-dark\">Text Dark</ion-button>\r\n    <ion-button color=\"is-facebook\">Facebook</ion-button>\r\n    <ion-button color=\"is-twitter\">Twitter</ion-button>\r\n    <ion-button color=\"is-linkedin\">LinkedIn</ion-button>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Shapes</h4>\r\n    <ion-button>Default</ion-button>\r\n    <ion-button expand=\"full\">Full</ion-button>\r\n    <div class=\"ion-padding-horizontal\">\r\n      <ion-button expand=\"block\">Block</ion-button>\r\n    </div>\r\n    <ion-button shape=\"round\">Round</ion-button>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Fill</h4>\r\n    <ion-button>Default</ion-button>\r\n    <ion-button fill=\"clear\">Clear</ion-button>\r\n    <ion-button fill=\"outline\">Outline</ion-button>\r\n    <ion-button fill=\"solid\">Solid</ion-button>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Icons</h4>\r\n    <ion-button>\r\n      <ion-icon slot=\"start\" name=\"star\"></ion-icon>\r\n      Left Icon\r\n    </ion-button>\r\n    <ion-button>\r\n      Right Icon\r\n      <ion-icon slot=\"end\" name=\"star\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button>\r\n      <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\r\n    </ion-button>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Sizes</h4>\r\n    <ion-button size=\"large\">Large</ion-button>\r\n    <ion-button>Default</ion-button>\r\n    <ion-button size=\"small\">Small</ion-button>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">States</h4>\r\n    <ion-button disabled=\"true\">Disabled</ion-button>\r\n    <ion-button>Default</ion-button>\r\n    <ion-button class=\"activated\">Activated</ion-button>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Strong</h4>\r\n    <ion-button strong=\"true\">Strong</ion-button>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Toolbars</h4>\r\n    <ion-toolbar>\r\n      <ion-segment value=\"all\">\r\n        <ion-segment-button value=\"all\">\r\n          <ion-label>All</ion-label>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"favorites\">\r\n          <ion-label>Favorites</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Primary Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"secondary\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Secondary Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"success\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Sucess Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"danger\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Danger Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"warning\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Warning Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"tertiary\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Tertiary Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"dark\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Dark Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"medium\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Medium Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n    <div class=\"ion-padding-top\">\r\n      <ion-toolbar color=\"light\">\r\n        <ion-buttons slot=\"start\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"person-circle\"></ion-icon>\r\n          </ion-button>\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-buttons slot=\"end\">\r\n          <ion-button>\r\n            <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n        <ion-title>Light Toolbar</ion-title>\r\n      </ion-toolbar>\r\n    </div>\r\n\r\n    <h4 class=\"ion-text-left ion-padding-horizontal\">Social</h4>\r\n    <ion-grid class=\"is-grid ion-no-padding\">\r\n      <ion-row class=\"ion-padding-horizontal\">\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" fill=\"outline\">\r\n            <ion-icon name='logo-facebook' color=\"is-facebook-icon\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-button expand=\"block\" fill=\"outline\">\r\n            <ion-icon name='logo-twitter' color=\"is-twitter-icon\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-padding-horizontal\">\r\n        <ion-col size=\"12\">\r\n          <ion-button expand=\"block\" fill=\"outline\">\r\n            <ion-icon name='logo-linkedin' color=\"is-linkedin-icon\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-list class=\"ion-padding\">\r\n      <ion-item button>\r\n        <ion-label>Facebook</ion-label>\r\n        <ion-icon color=\"is-facebook-icon\" name=\"logo-facebook\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item button>\r\n        <ion-label>Twitter</ion-label>\r\n        <ion-icon color=\"is-twitter-icon\" name=\"logo-twitter\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item button>\r\n        <ion-label>LinkedIn</ion-label>\r\n        <ion-icon color=\"is-linkedin-icon\" name=\"logo-linkedin\" slot=\"start\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"ion-no-margin is-list-buttons ion-padding\">\r\n      <ion-item button detail=\"false\">\r\n        <ion-icon slot=\"end\" name=\"logo-facebook\" color=\"is-facebook-icon\"></ion-icon>\r\n        <ion-label>Facebook</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"ion-no-margin is-list-buttons ion-padding\">\r\n      <ion-item button detail=\"false\">\r\n        <ion-icon slot=\"end\" name=\"logo-twitter\" color=\"is-twitter-icon\"></ion-icon>\r\n        <ion-label>Twitter</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-list class=\"ion-no-margin is-list-buttons ion-padding\">\r\n      <ion-item button detail=\"false\">\r\n        <ion-icon slot=\"end\" name=\"logo-linkedin\" color=\"is-linkedin-icon\"></ion-icon>\r\n        <ion-label>Linked In</ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-button color=\"is-facebook\">\r\n      <ion-icon slot=\"start\" name=\"logo-facebook\"></ion-icon>\r\n      Facebook\r\n    </ion-button>\r\n    <ion-button color=\"is-twitter\">\r\n      Twitter\r\n      <ion-icon slot=\"end\" name=\"logo-twitter\"></ion-icon>\r\n    </ion-button>\r\n    <ion-button color=\"is-linkedin\">\r\n      <ion-icon slot=\"icon-only\" name=\"logo-linkedin\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/buttons/buttons.module.ts":
/*!*******************************************!*\
  !*** ./src/app/buttons/buttons.module.ts ***!
  \*******************************************/
/*! exports provided: ButtonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPageModule", function() { return ButtonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _buttons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons.page */ "./src/app/buttons/buttons.page.ts");







const routes = [
    {
        path: '',
        component: _buttons_page__WEBPACK_IMPORTED_MODULE_6__["ButtonsPage"]
    }
];
let ButtonsPageModule = class ButtonsPageModule {
};
ButtonsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_buttons_page__WEBPACK_IMPORTED_MODULE_6__["ButtonsPage"]]
    })
], ButtonsPageModule);



/***/ }),

/***/ "./src/app/buttons/buttons.page.scss":
/*!*******************************************!*\
  !*** ./src/app/buttons/buttons.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbnMvYnV0dG9ucy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/buttons/buttons.page.ts":
/*!*****************************************!*\
  !*** ./src/app/buttons/buttons.page.ts ***!
  \*****************************************/
/*! exports provided: ButtonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPage", function() { return ButtonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ButtonsPage = class ButtonsPage {
    constructor() { }
    ngOnInit() {
    }
};
ButtonsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-buttons',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./buttons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/buttons/buttons.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./buttons.page.scss */ "./src/app/buttons/buttons.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ButtonsPage);



/***/ })

}]);
//# sourceMappingURL=buttons-buttons-module-es2015.js.map