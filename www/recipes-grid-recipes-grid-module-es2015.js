(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["recipes-grid-recipes-grid-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-grid/recipes-grid.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-grid/recipes-grid.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"is-header-logo-centered\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-segment class=\"is-segment-bordered\" mode=\"md\" value=\"grid\">\r\n    <ion-segment-button mode=\"md\" value=\"options\">\r\n      <ion-icon name=\"options\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"funnel\">\r\n      <ion-icon name=\"funnel\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"reorder\">\r\n      <ion-icon name=\"reorder-three\"></ion-icon>\r\n    </ion-segment-button>\r\n    <ion-segment-button mode=\"md\" value=\"grid\">\r\n      <ion-icon name=\"grid\"></ion-icon>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <ion-grid class=\"is-grid-bordered ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-no-padding ion-padding-bottom\">\r\n        <ion-item routerLink=\"/recipes-grid\" lines=\"none\" detail=\"false\" >\r\n          <ion-label class=\"ion-text-wrap ion-no-margin\">\r\n            <div class=\"is-image-wrapper\">\r\n            <img src=\"assets/imgs/recipe-1.jpg\">\r\n              <div class=\"is-rating-wrapper\">\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\"></ion-icon>\r\n                <span class=\"is-rating-text\">32</span>\r\n              </div>\r\n            </div>\r\n            <h6 class=\"ion-padding-horizontal\">Chicken Italiano with Garlic Bread</h6>\r\n            <p class=\"ion-padding-horizontal\">by Ann Gordon</p>\r\n            <ion-row class=\"ion-padding\">\r\n              <ion-col size=\"4\">\r\n                <ion-icon name=\"people\"></ion-icon>\r\n                <span>4</span>\r\n              </ion-col>\r\n              <ion-col size=\"8\" class=\"is-vertical-align ion-text-end\">\r\n                <ion-icon name=\"time\"></ion-icon>\r\n                <span>1h 20m</span>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n              <ion-fab-button>\r\n                <ion-icon name=\"heart\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding ion-padding-bottom\">\r\n        <ion-item routerLink=\"/recipes-grid\" lines=\"none\" detail=\"false\" >\r\n          <ion-label class=\"ion-text-wrap ion-no-margin\">\r\n            <div class=\"is-image-wrapper\">\r\n            <img src=\"assets/imgs/recipe-2.jpg\">\r\n              <div class=\"is-rating-wrapper\">\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\"></ion-icon>\r\n                <ion-icon name=\"star\"></ion-icon>\r\n                <span class=\"is-rating-text\">52</span>\r\n              </div>\r\n            </div>\r\n            <h6 class=\"ion-padding-horizontal\">Chicken with Apricots and Dried Plums</h6>\r\n            <p class=\"ion-padding-horizontal\">by Alice Wayne</p>\r\n            <ion-row class=\"ion-padding\">\r\n              <ion-col size=\"4\">\r\n                <ion-icon name=\"people\"></ion-icon>\r\n                <span>3</span>\r\n              </ion-col>\r\n              <ion-col size=\"8\" class=\"is-vertical-align ion-text-end\">\r\n                <ion-icon name=\"time\"></ion-icon>\r\n                <span>0h 20m</span>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n              <ion-fab-button>\r\n                <ion-icon name=\"heart\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"6\" class=\"ion-no-padding ion-padding-bottom\">\r\n        <ion-item routerLink=\"/recipes-grid\" lines=\"none\" detail=\"false\" >\r\n          <ion-label class=\"ion-text-wrap ion-no-margin\">\r\n            <div class=\"is-image-wrapper\">\r\n            <img src=\"assets/imgs/recipe-3.jpg\">\r\n              <div class=\"is-rating-wrapper\">\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <span class=\"is-rating-text\">72</span>\r\n              </div>\r\n            </div>\r\n            <h6 class=\"ion-padding-horizontal\">Lorem yipsim chichek sandwich</h6>\r\n            <p class=\"ion-padding-horizontal\">by Yaser Gordon</p>\r\n            <ion-row class=\"ion-padding\">\r\n              <ion-col size=\"4\">\r\n                <ion-icon name=\"people\"></ion-icon>\r\n                <span>5</span>\r\n              </ion-col>\r\n              <ion-col size=\"8\" class=\"is-vertical-align ion-text-end\">\r\n                <ion-icon name=\"time\"></ion-icon>\r\n                <span>1h 30m</span>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n              <ion-fab-button>\r\n                <ion-icon name=\"heart\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-no-padding ion-padding-bottom\">\r\n        <ion-item routerLink=\"/recipes-grid\" lines=\"none\" detail=\"false\" >\r\n          <ion-label class=\"ion-text-wrap ion-no-margin\">\r\n            <div class=\"is-image-wrapper\">\r\n            <img src=\"assets/imgs/recipe-4.jpg\">\r\n              <div class=\"is-rating-wrapper\">\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n                <ion-icon name=\"star\"></ion-icon>\r\n                <ion-icon name=\"star\"></ion-icon>\r\n                <ion-icon name=\"star\"></ion-icon>\r\n                <span class=\"is-rating-text\">14</span>\r\n              </div>\r\n            </div>\r\n            <h6 class=\"ion-padding-horizontal\">Greek Salad with Garlic Bread</h6>\r\n            <p class=\"ion-padding-horizontal\">by Ann Lorem</p>\r\n            <ion-row class=\"ion-padding\">\r\n              <ion-col size=\"4\">\r\n                <ion-icon name=\"people\"></ion-icon>\r\n                <span>5</span>\r\n              </ion-col>\r\n              <ion-col size=\"8\" class=\"is-vertical-align ion-text-end\">\r\n                <ion-icon name=\"time\"></ion-icon>\r\n                <span>1h 20m</span>\r\n              </ion-col>\r\n            </ion-row>\r\n            <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\">\r\n              <ion-fab-button>\r\n                <ion-icon name=\"heart\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/recipes-grid/recipes-grid.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/recipes-grid/recipes-grid.module.ts ***!
  \*****************************************************/
/*! exports provided: RecipesGridPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesGridPageModule", function() { return RecipesGridPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _recipes_grid_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipes-grid.page */ "./src/app/recipes-grid/recipes-grid.page.ts");







const routes = [
    {
        path: '',
        component: _recipes_grid_page__WEBPACK_IMPORTED_MODULE_6__["RecipesGridPage"]
    }
];
let RecipesGridPageModule = class RecipesGridPageModule {
};
RecipesGridPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_recipes_grid_page__WEBPACK_IMPORTED_MODULE_6__["RecipesGridPage"]]
    })
], RecipesGridPageModule);



/***/ }),

/***/ "./src/app/recipes-grid/recipes-grid.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/recipes-grid/recipes-grid.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-grid-bordered > ion-row > ion-col {\n  border-left: 0;\n}\n.is-grid-bordered > ion-row > ion-col ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n}\n.is-grid-bordered > ion-row > ion-col ion-item h6 {\n  font-size: 16px;\n  margin-top: 1em;\n}\n.is-grid-bordered > ion-row > ion-col ion-fab-button {\n  --background: rgba(255, 255, 255, 0.1);\n  --border-color: rgba(255, 255, 255, 0.5);\n  --box-shadow: none;\n  --border-width: 1px;\n  --border-style: solid;\n  width: 45px;\n  height: 45px;\n}\n.is-grid-bordered > ion-row > ion-col ion-fab-button ion-icon {\n  padding-right: 0;\n  font-size: 24px;\n}\n.is-grid-bordered ion-icon {\n  padding-right: 8px;\n  font-size: 18px;\n}\n@media (max-width: 340px) {\n  .is-grid-bordered ion-icon {\n    padding-right: 5px;\n    font-size: 16px;\n  }\n}\n.is-grid-bordered ion-icon + span {\n  display: inline-block;\n  vertical-align: top;\n}\n.is-image-wrapper {\n  position: relative;\n}\n.is-rating-wrapper {\n  position: absolute;\n  bottom: 1em;\n  left: 1em;\n  color: #ffffff;\n}\n.is-rating-wrapper ion-icon {\n  padding-right: 0;\n}\n.is-rating-wrapper ion-icon:not([color]) {\n  color: rgba(255, 255, 255, 0.5);\n}\n.is-rating-wrapper .is-rating-text {\n  padding-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9yZWNpcGVzLWdyaWQvcmVjaXBlcy1ncmlkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVjaXBlcy1ncmlkL3JlY2lwZXMtZ3JpZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0FDQUo7QURDSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUNDTjtBREFNO0VBQ0UsZUFBQTtFQUNBLGVBQUE7QUNFUjtBRENJO0VBQ0Usc0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ047QURBTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0VSO0FERUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNBSjtBREVFO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLGVBQUE7RUNBSjtBQUNGO0FERUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTtFQUNFLGtCQUFBO0FDQUY7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDQ0Y7QURBRTtFQUNFLGdCQUFBO0FDRUo7QURBRTtFQUNFLCtCQUFBO0FDRUo7QURBRTtFQUNFLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzLWdyaWQvcmVjaXBlcy1ncmlkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pcy1ncmlkLWJvcmRlcmVkIHtcclxuICA+IGlvbi1yb3cgPiBpb24tY29sIHtcclxuICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XHJcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIGg2IHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpb24tZmFiLWJ1dHRvbiB7XHJcbiAgICAgIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1pY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDM0MHB4KSB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBpb24taWNvbiArIHNwYW4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcbn1cclxuLmlzLWltYWdlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uaXMtcmF0aW5nLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDFlbTtcclxuICBsZWZ0OiAxZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbiAgaW9uLWljb246bm90KFtjb2xvcl0pIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgfVxyXG4gIC5pcy1yYXRpbmctdGV4dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICB9XHJcbn1cclxuIiwiLmlzLWdyaWQtYm9yZGVyZWQgPiBpb24tcm93ID4gaW9uLWNvbCB7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuLmlzLWdyaWQtYm9yZGVyZWQgPiBpb24tcm93ID4gaW9uLWNvbCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbn1cbi5pcy1ncmlkLWJvcmRlcmVkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWl0ZW0gaDYge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDFlbTtcbn1cbi5pcy1ncmlkLWJvcmRlcmVkID4gaW9uLXJvdyA+IGlvbi1jb2wgaW9uLWZhYi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG59XG4uaXMtZ3JpZC1ib3JkZXJlZCA+IGlvbi1yb3cgPiBpb24tY29sIGlvbi1mYWItYnV0dG9uIGlvbi1pY29uIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuLmlzLWdyaWQtYm9yZGVyZWQgaW9uLWljb24ge1xuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNDBweCkge1xuICAuaXMtZ3JpZC1ib3JkZXJlZCBpb24taWNvbiB7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuLmlzLWdyaWQtYm9yZGVyZWQgaW9uLWljb24gKyBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG4uaXMtaW1hZ2Utd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlzLXJhdGluZy13cmFwcGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDFlbTtcbiAgbGVmdDogMWVtO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5pcy1yYXRpbmctd3JhcHBlciBpb24taWNvbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4uaXMtcmF0aW5nLXdyYXBwZXIgaW9uLWljb246bm90KFtjb2xvcl0pIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5pcy1yYXRpbmctd3JhcHBlciAuaXMtcmF0aW5nLXRleHQge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/recipes-grid/recipes-grid.page.ts":
/*!***************************************************!*\
  !*** ./src/app/recipes-grid/recipes-grid.page.ts ***!
  \***************************************************/
/*! exports provided: RecipesGridPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipesGridPage", function() { return RecipesGridPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let RecipesGridPage = class RecipesGridPage {
    constructor() { }
    ngOnInit() {
    }
};
RecipesGridPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-recipes-grid',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./recipes-grid.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes-grid/recipes-grid.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./recipes-grid.page.scss */ "./src/app/recipes-grid/recipes-grid.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RecipesGridPage);



/***/ })

}]);
//# sourceMappingURL=recipes-grid-recipes-grid-module-es2015.js.map