(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-product-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"is-header-logo-centered ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/product-details-1.jpg\"/>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/product-details-2.jpg\"/>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <div class=\"ion-padding-horizontal is-section-bordered\">\r\n    <h5 class=\"ion-text-center\">Brand</h5>\r\n    <h3 class=\"ion-text-center\">Short-sleeved Denim Shirt</h3>\r\n    <ion-grid class=\"is-price ion-no-padding ion-margin-top ion-margin-bottom\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"4\" class=\"ion-text-start ion-no-padding\">\r\n          <ion-badge color=\"success\">NEW</ion-badge>\r\n        </ion-col>\r\n        <ion-col size=\"4\" class=\"ion-text-center ion-no-padding\">\r\n          <span>$29.99</span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <div class=\"is-section-bordered ion-text-center ion-padding\">\r\n    <ion-chip *ngFor=\"let size of productSizes; let i = index\" outline\r\n              [ngClass]=\"{'selected': productSizes[i].selected,\r\n                          'disabled': productSizes[i].disabled}\"\r\n              (click)=\"toggleSelectedSize(i)\">\r\n      <ion-label>{{size.label}}</ion-label>\r\n    </ion-chip>\r\n  </div>\r\n\r\n  <div class=\"is-section-bordered ion-text-center ion-padding\">\r\n    <ion-button class=\"button-color ion-no-padding\"\r\n                [attr.style]=\"sanitizer.bypassSecurityTrustStyle('--background: ' + productColors[i].name)\"\r\n                *ngFor=\"let color of productColors; let i = index\"\r\n                (click)=\"toggleSelectedColor(i)\">\r\n      <ion-icon *ngIf=\"color.selected\" slot=\"icon-only\" name=\"checkmark\"\r\n                [style.color]=\"productColors[i].selectedContrast\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div class=\"is-section-bordered\">\r\n\r\n    <ion-list class=\"ion-no-margin ion-padding\">\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\">\r\n            <ion-item class=\"is-select-item\">\r\n              <ion-select interface=\"popover\" value=\"1\">\r\n                <ion-select-option value=\"1\">1</ion-select-option>\r\n                <ion-select-option value=\"2\">2</ion-select-option>\r\n                <ion-select-option value=\"3\">3</ion-select-option>\r\n                <ion-select-option value=\"4\">4</ion-select-option>\r\n                <ion-select-option value=\"5\">5</ion-select-option>\r\n                <ion-select-option value=\"6\">6</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col class=\"ion-align-self-center\">\r\n            <ion-button expand=\"block\">Add to Cart</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-list>\r\n\r\n    <div class=\"ion-padding-horizontal ion-margin-bottom\">\r\n      <ion-button expand=\"block\" fill=\"outline\">Save</ion-button>\r\n    </div>\r\n\r\n    <div class=\"ion-padding-horizontal\">\r\n      <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n        <ion-row class=\"is-grid-row-bordered\">\r\n          <ion-col size=\"8\" class=\"ion-padding-horizontal\">\r\n            <span>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"light\"></ion-icon>\r\n            </span>\r\n            <span class=\"is-rating-text ion-padding-horizontal\">3 reviews</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-padding-horizontal\">\r\n            <ion-icon name=\"share\" color=\"light\"></ion-icon>\r\n            <span class=\"ion-padding-start\">Share</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <ion-segment class=\"is-segment-clear\" value=\"features\">\r\n    <ion-segment-button value=\"product\">\r\n      <ion-label>PRODUCT</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"brand\">\r\n      <ion-label>BRAND</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"reviews\">\r\n      <ion-label>REVIEWS (4)</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"features\">\r\n      <ion-label>FEATURES</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <div class=\"ion-padding-bottom\">\r\n    <ion-grid class=\"ion-no-padding is-grid-bordered is-product-details-table\">\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-no-padding ion-padding\">Material</ion-col>\r\n        <ion-col size=\"8\" class=\"ion-no-padding ion-padding\">100% Cotton</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-no-padding ion-padding\">Handle</ion-col>\r\n        <ion-col size=\"8\" class=\"ion-no-padding ion-padding\">Grab handle</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-no-padding ion-padding\">Straps</ion-col>\r\n        <ion-col size=\"8\" class=\"ion-no-padding ion-padding\">Adjustable straps</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-no-padding ion-padding\">Back</ion-col>\r\n        <ion-col size=\"8\" class=\"ion-no-padding ion-padding\">Padded back</ion-col>\r\n      </ion-row>\r\n      <ion-row>\r\n        <ion-col size=\"4\" class=\"ion-no-padding ion-padding\">Pocket</ion-col>\r\n        <ion-col size=\"8\" class=\"ion-no-padding ion-padding\">External pocket</ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/product-details/product-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.module.ts ***!
  \***********************************************************/
/*! exports provided: ProductDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPageModule", function() { return ProductDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details.page */ "./src/app/product-details/product-details.page.ts");







const routes = [
    {
        path: '',
        component: _product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]
    }
];
let ProductDetailsPageModule = class ProductDetailsPageModule {
};
ProductDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_details_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsPage"]]
    })
], ProductDetailsPageModule);



/***/ }),

/***/ "./src/app/product-details/product-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/product-details/product-details.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-section-bordered {\n  border-bottom: 1px solid var(--ion-color-is-mute-light);\n}\n\nh5 {\n  font-weight: 300;\n  font-size: 1rem;\n}\n\n.is-price ion-badge {\n  font-size: 0.6rem;\n}\n\n.is-price span {\n  font-size: 1rem;\n}\n\nion-chip {\n  border-color: rgba(var(--ion-color-base-rgb), 1);\n  border-radius: 10px;\n}\n\nion-chip ion-label {\n  color: var(--ion-text-color);\n  font-size: 0.8rem;\n}\n\nion-chip:not(.selected) {\n  --color: var(--ion-color-is-mute-light);\n}\n\nion-chip.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-chip.disabled {\n  --color: var(--ion-color-is-mute-light);\n}\n\nion-chip.disabled ion-label {\n  color: var(--ion-color-is-mute-light);\n}\n\nion-button.button-color {\n  width: 34px;\n  height: 34px !important;\n  --border-color: var(--ion-color-is-mute-light);\n  --border-style: solid;\n  --border-width: 1px;\n}\n\nion-select {\n  width: 100%;\n  max-width: initial;\n  --padding-start: 0;\n}\n\n.is-rating-text {\n  font-size: 0.9rem;\n}\n\n.is-grid-row-bordered {\n  border-radius: 25px;\n  height: 35px;\n}\n\n.is-grid-row-bordered ion-col {\n  display: flex;\n  align-items: center;\n}\n\n.is-grid-row-bordered ion-col:first-child {\n  border-right: 1px solid var(--ion-color-is-mute-light);\n}\n\nion-segment:not([color]).is-segment-clear ion-segment-button {\n  --color-checked: var(--ion-color-is-text-dark);\n}\n\n.is-segment-clear ion-segment-button {\n  height: 50px;\n  font-weight: 300;\n  font-size: 0.9rem;\n}\n\n.is-product-details-table {\n  --ion-color-is-mute-dark: #808080;\n  --ion-color-is-text-dark-theme: #898989;\n  font-weight: 300;\n  font-size: 0.8rem;\n}\n\n.is-product-details-table > ion-row > ion-col:last-child {\n  color: var(--ion-color-is-text-dark);\n}\n\n::ng-deep .theme-dark .is-product-details-table > ion-row > ion-col:first-child {\n  background-color: var(--ion-color-is-mute-dark);\n}\n\n::ng-deep .theme-light .is-product-details-table > ion-row > ion-col:first-child {\n  background-color: var(--ion-color-is-mute-light);\n}\n\n.is-select-item {\n  --min-height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1REFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FER0U7RUFDRSxpQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtBQ0RKOztBRFFBO0VBQ0UsZ0RBQUE7RUFDQSxtQkFBQTtBQ0xGOztBRE9FO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFNBO0VBQ0UsdUNBQUE7QUNORjs7QURTQTtFQUNFLGlDQUFBO0FDTkY7O0FEU0E7RUFDRSx1Q0FBQTtBQ05GOztBRE9FO0VBQ0UscUNBQUE7QUNMSjs7QURVQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNQRjs7QURVQTtFQUNFLGlCQUFBO0FDUEY7O0FEVUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNQRjs7QURTRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ1BKOztBRFVFO0VBQ0Usc0RBQUE7QUNSSjs7QURZQTtFQUNFLDhDQUFBO0FDVEY7O0FEYUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1ZKOztBRGNBO0VBQ0UsaUNBQUE7RUFDQSx1Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7QUNaRjs7QURjRTtFQUNFLG9DQUFBO0FDWko7O0FEa0JJO0VBQ0UsK0NBQUE7QUNmTjs7QURvQkk7RUFDRSxnREFBQTtBQ2xCTjs7QUR1QkE7RUFDRSxrQkFBQTtBQ3BCRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy9wcm9kdWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLXNlY3Rpb24tYm9yZGVyZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG59XHJcblxyXG4uaXMtcHJpY2Uge1xyXG4gIGlvbi1iYWRnZSB7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICB9XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgZm9udC1zaXplOiAxLjByZW07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLy8gVE9ETzogU2hvdWxkIHdlIGNyZWF0ZSBhIHNlcGFyYXRlIGNsYXNzIGZvciBpb24tY2hpcCBhbmQgbWFrZSBpdCBwYXJ0IG9mIHRoZVxyXG4vLyB0aGVtZSBzbyBpdCBpcyByZXVzYWJsZT9cclxuaW9uLWNoaXAge1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItYmFzZS1yZ2IpLCAxKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNoaXA6bm90KC5zZWxlY3RlZCkge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcclxufVxyXG5cclxuaW9uLWNoaXAuc2VsZWN0ZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuaW9uLWNoaXAuZGlzYWJsZWQge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcclxuICBpb24tbGFiZWwge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcclxuICB9XHJcbn1cclxuLy8gRW5kIFRPRE9cclxuXHJcbmlvbi1idXR0b24uYnV0dG9uLWNvbG9yIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG59XHJcblxyXG4uaXMtcmF0aW5nLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uaXMtZ3JpZC1yb3ctYm9yZGVyZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG5cclxuICBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tc2VnbWVudDpub3QoW2NvbG9yXSkuaXMtc2VnbWVudC1jbGVhciBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWlzLXRleHQtZGFyayk7XHJcbn1cclxuXHJcbi5pcy1zZWdtZW50LWNsZWFyIHtcclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmlzLXByb2R1Y3QtZGV0YWlscy10YWJsZSB7XHJcbiAgLS1pb24tY29sb3ItaXMtbXV0ZS1kYXJrOiAjODA4MDgwO1xyXG4gIC0taW9uLWNvbG9yLWlzLXRleHQtZGFyay10aGVtZTogIzg5ODk4OTtcclxuXHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuXHJcbiAgPiBpb24tcm93ID4gaW9uLWNvbDpsYXN0LWNoaWxkIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtdGV4dC1kYXJrKTtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCB7XHJcbiAgLnRoZW1lLWRhcmsgLmlzLXByb2R1Y3QtZGV0YWlscy10YWJsZSB7XHJcbiAgICA+IGlvbi1yb3cgPiBpb24tY29sOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtZGFyayk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudGhlbWUtbGlnaHQgLmlzLXByb2R1Y3QtZGV0YWlscy10YWJsZSB7XHJcbiAgICA+IGlvbi1yb3cgPiBpb24tY29sOmZpcnN0LWNoaWxkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmlzLXNlbGVjdC1pdGVtIHtcclxuICAtLW1pbi1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuIiwiLmlzLXNlY3Rpb24tYm9yZGVyZWQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xufVxuXG5oNSB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLmlzLXByaWNlIGlvbi1iYWRnZSB7XG4gIGZvbnQtc2l6ZTogMC42cmVtO1xufVxuLmlzLXByaWNlIHNwYW4ge1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbmlvbi1jaGlwIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1iYXNlLXJnYiksIDEpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuaW9uLWNoaXAgaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1jaGlwOm5vdCguc2VsZWN0ZWQpIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xufVxuXG5pb24tY2hpcC5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWNoaXAuZGlzYWJsZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XG59XG5pb24tY2hpcC5kaXNhYmxlZCBpb24tbGFiZWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xufVxuXG5pb24tYnV0dG9uLmJ1dHRvbi1jb2xvciB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG4uaXMtcmF0aW5nLXRleHQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XG59XG5cbmlvbi1zZWdtZW50Om5vdChbY29sb3JdKS5pcy1zZWdtZW50LWNsZWFyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWlzLXRleHQtZGFyayk7XG59XG5cbi5pcy1zZWdtZW50LWNsZWFyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5pcy1wcm9kdWN0LWRldGFpbHMtdGFibGUge1xuICAtLWlvbi1jb2xvci1pcy1tdXRlLWRhcms6ICM4MDgwODA7XG4gIC0taW9uLWNvbG9yLWlzLXRleHQtZGFyay10aGVtZTogIzg5ODk4OTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uaXMtcHJvZHVjdC1kZXRhaWxzLXRhYmxlID4gaW9uLXJvdyA+IGlvbi1jb2w6bGFzdC1jaGlsZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtdGV4dC1kYXJrKTtcbn1cblxuOjpuZy1kZWVwIC50aGVtZS1kYXJrIC5pcy1wcm9kdWN0LWRldGFpbHMtdGFibGUgPiBpb24tcm93ID4gaW9uLWNvbDpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWRhcmspO1xufVxuOjpuZy1kZWVwIC50aGVtZS1saWdodCAuaXMtcHJvZHVjdC1kZXRhaWxzLXRhYmxlID4gaW9uLXJvdyA+IGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XG59XG5cbi5pcy1zZWxlY3QtaXRlbSB7XG4gIC0tbWluLWhlaWdodDogMzVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/product-details/product-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/product-details/product-details.page.ts ***!
  \*********************************************************/
/*! exports provided: ProductDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsPage", function() { return ProductDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



let ProductDetailsPage = class ProductDetailsPage {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.slideOpts = {
            autoplay: false
        };
        this.productSizes = [];
        this.productColors = [];
        this.sanitizer = this.domSanitizer;
    }
    ngOnInit() {
        this.productSizes = [
            {
                label: 'XS',
                selected: false,
                disabled: false
            },
            {
                label: 'S',
                selected: true,
                disabled: false
            },
            {
                label: 'M',
                selected: false,
                disabled: true
            },
            {
                label: 'L',
                selected: false,
                disabled: false
            },
            {
                label: 'XL',
                selected: false,
                disabled: false
            },
            {
                label: 'XXL',
                selected: false,
                disabled: false
            }
        ];
        this.productColors = [
            {
                name: 'white',
                selected: false,
                selectedContrast: 'black'
            },
            {
                name: 'blue',
                selected: true,
                selectedContrast: 'white'
            },
            {
                name: 'yellow',
                selected: false,
                selectedContrast: 'black'
            },
            {
                name: 'black',
                selected: false,
                selectedContrast: 'white'
            }
        ];
    }
    toggleSelectedSize(index) {
        if (this.productSizes[index].disabled) {
            return;
        }
        this.productSizes.forEach((item, i) => {
            if (i === index) {
                item.selected = !item.selected;
            }
            else {
                item.selected = false;
            }
        });
    }
    toggleSelectedColor(index) {
        this.productColors.forEach((item, i) => {
            if (i === index) {
                item.selected = !item.selected;
            }
            else {
                item.selected = false;
            }
        });
    }
};
ProductDetailsPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
ProductDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details/product-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-details.page.scss */ "./src/app/product-details/product-details.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], ProductDetailsPage);



/***/ })

}]);
//# sourceMappingURL=product-details-product-details-module-es2015.js.map