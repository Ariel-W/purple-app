(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-list-recipes-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-list/recipes-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-list/recipes-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"is-header-logo-centered\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment class=\"is-segment-bordered\" mode=\"md\" value=\"reorder\">\r\n    <ion-segment-button mode=\"md\" value=\"options\">\r\n      <ion-icon name=\"options\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"funnel\">\r\n      <ion-icon name=\"funnel\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"reorder\">\r\n      <ion-icon name=\"reorder-three\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"grid\">\r\n      <ion-icon name=\"grid\"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-item class=\"ion-no-padding\"s routerLink=\"/recipes-list\" lines=\"none\" detail=\"false\" >\r\n    <ion-label class=\"ion-text-wrap ion-no-margin\">\r\n      <div class=\"is-image-wrapper\">\r\n        <img src=\"assets/imgs/recipe-1.jpg\">\r\n        <div class=\"is-caption-wrapper\">\r\n          <h6>Chicken Italiano with Garlic Bread</h6>\r\n          <p>by Ann Gordon</p>\r\n          <ion-row class=\"ion-no-padding\"s>\r\n            <ion-col size=\"4\">\r\n              <ion-icon name=\"people\"></ion-icon>\r\n              <span>4</span>\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-icon name=\"time\"></ion-icon>\r\n              <span>1h 20m</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"is-rating-wrapper\">\r\n          <span class=\"is-rating-text\">32</span>\r\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n          <ion-icon name=\"star\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n          <ion-icon name=\"share\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-button>\r\n          <ion-icon name=\"heart\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n  <ion-item class=\"ion-no-padding\"s routerLink=\"/recipes-list\" lines=\"none\" detail=\"false\" >\r\n    <ion-label class=\"ion-text-wrap ion-no-margin\">\r\n      <div class=\"is-image-wrapper\">\r\n        <img src=\"assets/imgs/recipe-2.jpg\">\r\n        <div class=\"is-caption-wrapper\">\r\n          <h6>Chicken with Apricots and Dried Plums</h6>\r\n          <p>by Alice Wayne</p>\r\n          <ion-row class=\"ion-no-padding\"s>\r\n            <ion-col size=\"4\">\r\n              <ion-icon name=\"people\"></ion-icon>\r\n              <span>3</span>\r\n            </ion-col>\r\n            <ion-col size=\"8\">\r\n              <ion-icon name=\"time\"></ion-icon>\r\n              <span>2h 20m</span>\r\n            </ion-col>\r\n          </ion-row>\r\n        </div>\r\n        <div class=\"is-rating-wrapper\">\r\n          <span class=\"is-rating-text\">24</span>\r\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n          <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n          <ion-icon name=\"star\"></ion-icon>\r\n        </div>\r\n      </div>\r\n      <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n        <ion-fab-button>\r\n          <ion-icon name=\"share\"></ion-icon>\r\n        </ion-fab-button>\r\n        <ion-fab-button>\r\n          <ion-icon name=\"heart\"></ion-icon>\r\n        </ion-fab-button>\r\n      </ion-fab>\r\n    </ion-label>\r\n  </ion-item>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/recipes-list/recipes-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/recipes-list/recipes-list.module.ts ***!
  \*****************************************************/
/*! exports provided: RecipesListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesListPageModule", function() { return RecipesListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recipes_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes-list.page */ "./src/app/recipes-list/recipes-list.page.ts");







const routes = [
    {
        path: '',
        component: _recipes_list_page__WEBPACK_IMPORTED_MODULE_6__["RecipesListPage"]
    }
];
let RecipesListPageModule = class RecipesListPageModule {
};
RecipesListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_recipes_list_page__WEBPACK_IMPORTED_MODULE_6__["RecipesListPage"]]
    })
], RecipesListPageModule);



/***/ }),

/***/ "./src/app/recipes-list/recipes-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/recipes-list/recipes-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-color: rgba(255, 255, 255, 0.5);\n  --box-shadow: none;\n  --border-width: 1px;\n  --border-style: solid;\n  width: 45px;\n  height: 45px;\n  display: inline-block;\n  margin: 0 5px;\n}\nion-fab-button ion-icon {\n  padding-right: 0;\n  font-size: 24px;\n}\nion-item {\n  --inner-padding-end: 0;\n  --padding-start: 0;\n}\n.is-image-wrapper {\n  position: relative;\n}\n.is-image-wrapper img {\n  vertical-align: top;\n}\n.is-image-wrapper:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  z-index: 0;\n}\n.is-rating-wrapper {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n  color: #ffffff;\n}\n.is-rating-wrapper ion-icon {\n  padding-right: 0;\n}\n.is-rating-wrapper ion-icon:not([color]) {\n  color: rgba(255, 255, 255, 0.5);\n}\n.is-rating-wrapper .is-rating-text {\n  padding-right: 1em;\n}\n.is-caption-wrapper {\n  position: absolute;\n  bottom: 1em;\n  left: 1em;\n  color: #ffffff;\n  padding-right: 140px;\n}\n.is-caption-wrapper ion-icon {\n  padding-right: 5px;\n  vertical-align: text-bottom;\n  font-size: 18px;\n}\n.is-caption-wrapper p {\n  color: #ffffff;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9yZWNpcGVzLWxpc3QvcmVjaXBlcy1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVjaXBlcy1saXN0L3JlY2lwZXMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQ0FBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNDRjtBREFFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRUo7QURDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUNFRjtBREFBO0VBQ0Usa0JBQUE7QUNHRjtBRERBO0VBQ0UsbUJBQUE7QUNJRjtBREZBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQ0tGO0FESEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQ01GO0FETEU7RUFDRSxnQkFBQTtBQ09KO0FETEU7RUFDRSwrQkFBQTtBQ09KO0FETEU7RUFDRSxrQkFBQTtBQ09KO0FESkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDT0Y7QURORTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FDUUo7QURORTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcmVjaXBlcy1saXN0L3JlY2lwZXMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiLWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcclxuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgd2lkdGg6IDQ1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDAgNXB4O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG59XHJcbmlvbi1pdGVtIHtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufVxyXG4uaXMtaW1hZ2Utd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pcy1pbWFnZS13cmFwcGVyIGltZyB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG4uaXMtaW1hZ2Utd3JhcHBlcjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG4uaXMtcmF0aW5nLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDFlbTtcclxuICByaWdodDogMWVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIGlvbi1pY29uOm5vdChbY29sb3JdKSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gIH1cclxuICAuaXMtcmF0aW5nLXRleHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gIH1cclxufVxyXG4uaXMtY2FwdGlvbi13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxZW07XHJcbiAgbGVmdDogMWVtO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0MHB4O1xyXG4gIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG59XHJcbiIsImlvbi1mYWItYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1ib3JkZXItd2lkdGg6IDFweDtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5pb24tZmFiLWJ1dHRvbiBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbi5pcy1pbWFnZS13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaXMtaW1hZ2Utd3JhcHBlciBpbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaXMtaW1hZ2Utd3JhcHBlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB6LWluZGV4OiAwO1xufVxuXG4uaXMtcmF0aW5nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMWVtO1xuICByaWdodDogMWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pcy1yYXRpbmctd3JhcHBlciBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uaXMtcmF0aW5nLXdyYXBwZXIgaW9uLWljb246bm90KFtjb2xvcl0pIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5pcy1yYXRpbmctd3JhcHBlciAuaXMtcmF0aW5nLXRleHQge1xuICBwYWRkaW5nLXJpZ2h0OiAxZW07XG59XG5cbi5pcy1jYXB0aW9uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMWVtO1xuICBsZWZ0OiAxZW07XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXJpZ2h0OiAxNDBweDtcbn1cbi5pcy1jYXB0aW9uLXdyYXBwZXIgaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLmlzLWNhcHRpb24td3JhcHBlciBwIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/recipes-list/recipes-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/recipes-list/recipes-list.page.ts ***!
  \***************************************************/
/*! exports provided: RecipesListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesListPage", function() { return RecipesListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RecipesListPage = class RecipesListPage {
    constructor() { }
    ngOnInit() {
    }
};
RecipesListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recipes-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-list/recipes-list.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recipes-list.page.scss */ "./src/app/recipes-list/recipes-list.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RecipesListPage);



/***/ })

}]);
//# sourceMappingURL=recipes-list-recipes-list-module-es2015.js.map