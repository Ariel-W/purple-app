(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-second-product-details-second-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details-second/product-details-second.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details-second/product-details-second.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"is-header-logo-centered ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <h5 class=\"ion-text-center\">Brand</h5>\r\n  <h3 class=\"ion-text-center\">Short-sleeved Denim Shirt</h3>\r\n  <div class=\"is-price ion-no-padding ion-margin-top ion-margin-bottom\">\r\n    <span>$29.99</span>\r\n  </div>\r\n\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/product-details-1.jpg\"/>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/product-details-2.jpg\"/>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <div class=\"ion-padding is-section-bordered ion-text-center\">\r\n    <ion-button class=\"button-color ion-no-padding\"\r\n                [attr.style]=\"sanitizer.bypassSecurityTrustStyle('--background: ' + productColors[i].name)\"\r\n                *ngFor=\"let color of productColors; let i = index\"\r\n                (click)=\"toggleSelectedColor(i)\">\r\n      <ion-icon *ngIf=\"color.selected\" slot=\"icon-only\" name=\"checkmark\"\r\n                [style.color]=\"productColors[i].selectedContrast\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n\r\n  <div class=\"is-section-bordered\">\r\n    <div class=\"ion-padding-horizontal\">\r\n      <ion-grid class=\"ion-no-padding ion-margin-top\">\r\n        <ion-row class=\"is-grid-row-bordered\">\r\n          <ion-col size=\"8\" class=\"ion-padding-horizontal\">\r\n            <span>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"light\"></ion-icon>\r\n            </span>\r\n            <span class=\"is-rating-text ion-padding-horizontal\">3 reviews</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-padding-horizontal\">\r\n            <ion-icon name=\"share\" color=\"light\"></ion-icon>\r\n            <span class=\"ion-padding-start\">Share</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <ion-list class=\"ion-padding ion-no-margin\">\r\n      <ion-grid class=\"ion-no-padding\">\r\n        <ion-row class=\"ion-align-items-center\">\r\n          <ion-col size=\"3\">\r\n            <ion-item class=\"is-select-item\">\r\n              <ion-select interface=\"popover\" value=\"1\">\r\n                <ion-select-option value=\"1\">1</ion-select-option>\r\n                <ion-select-option value=\"2\">2</ion-select-option>\r\n                <ion-select-option value=\"3\">3</ion-select-option>\r\n                <ion-select-option value=\"4\">4</ion-select-option>\r\n                <ion-select-option value=\"5\">5</ion-select-option>\r\n                <ion-select-option value=\"6\">6</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-col>\r\n          <ion-col class=\"ion-align-self-center\">\r\n            <ion-button expand=\"block\">Add to Cart</ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-list>\r\n\r\n    <div class=\"ion-padding-horizontal ion-margin-bottom\">\r\n      <ion-button expand=\"block\" fill=\"outline\">Save</ion-button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <ion-segment class=\"is-segment-clear is-section-bordered\" value=\"features\">\r\n    <ion-segment-button value=\"product\">\r\n      <ion-label>PRODUCT</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"brand\">\r\n      <ion-label>BRAND</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"reviews\">\r\n      <ion-label>REVIEWS (4)</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"features\">\r\n      <ion-label>FEATURES</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <div class=\"is-section-bordered ion-padding\">\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"6\" class=\"ion-text-start ion-no-padding\">\r\n            <h5>Loremo Doloe</h5>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-end ion-no-padding\">\r\n          <span>\r\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n            <ion-icon name=\"star\" color=\"light\"></ion-icon>\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <p class=\"is-comment\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus tempore repudiandae perspiciatis dolor consequatur reiciendis veritatis.</p>\r\n    <p class=\"is-date\">02 Dec 2016</p>\r\n  </div>\r\n\r\n  <div class=\"is-section-bordered ion-padding\">\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"6\" class=\"ion-text-start ion-no-padding\">\r\n            <h5>Loremo Doloe</h5>\r\n        </ion-col>\r\n        <ion-col size=\"6\" class=\"ion-text-end ion-no-padding\">\r\n          <span>\r\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n            <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n            <ion-icon name=\"star\" color=\"light\"></ion-icon>\r\n          </span>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <p class=\"is-comment\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus tempore repudiandae perspiciatis dolor consequatur reiciendis veritatis.</p>\r\n    <p class=\"is-date\">02 Dec 2016</p>\r\n  </div>\r\n  <div class=\"is-section-bordered is-review-form ion-padding\">\r\n    <ion-grid class=\"ion-no-padding ion-margin-top ion-margin-bottom\">\r\n      <ion-row class=\"ion-align-items-center\">\r\n        <ion-col size=\"2\" class=\"ion-text-start ion-no-padding\">\r\n          <ion-button class=\"button button-color ion-no-padding\" fill=\"outline\">\r\n            <ion-icon slot=\"icon-only\" name=\"star\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col size=\"8\" class=\"ion-text-center ion-no-padding\">\r\n          <ion-item class=\"is-review-input\">\r\n            <ion-input placeholder=\"Write review\"></ion-input>\r\n          </ion-item>\r\n        </ion-col>\r\n        <ion-col size=\"2\" class=\"ion-text-end ion-no-padding\">\r\n          <ion-button class=\"button button-color ion-no-padding\">\r\n            <ion-icon slot=\"icon-only\" name=\"send\"></ion-icon>\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/product-details-second/product-details-second.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/product-details-second/product-details-second.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProductDetailsSecondPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsSecondPageModule", function() { return ProductDetailsSecondPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _product_details_second_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-details-second.page */ "./src/app/product-details-second/product-details-second.page.ts");







const routes = [
    {
        path: '',
        component: _product_details_second_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsSecondPage"]
    }
];
let ProductDetailsSecondPageModule = class ProductDetailsSecondPageModule {
};
ProductDetailsSecondPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_product_details_second_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsSecondPage"]]
    })
], ProductDetailsSecondPageModule);



/***/ }),

/***/ "./src/app/product-details-second/product-details-second.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/product-details-second/product-details-second.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".is-section-bordered {\n  border-bottom: 1px solid var(--ion-color-is-mute-light);\n}\n\nh5 {\n  font-weight: 300;\n  font-size: 1rem;\n}\n\n.is-price {\n  text-align: center;\n}\n\n.is-price span {\n  font-size: 1rem;\n}\n\nion-button.button-color {\n  width: 34px;\n  height: 34px !important;\n  --border-color: var(--ion-color-is-mute-light);\n  --border-style: solid;\n  --border-width: 1px;\n}\n\nion-select {\n  width: 100%;\n  max-width: initial;\n  --padding-start: 0;\n}\n\n.is-rating-text {\n  font-size: 0.9rem;\n}\n\n.is-grid-row-bordered {\n  border-radius: 25px;\n  height: 35px;\n}\n\n.is-grid-row-bordered ion-col {\n  display: flex;\n  align-items: center;\n}\n\n.is-grid-row-bordered ion-col:first-child {\n  border-right: 1px solid var(--ion-color-is-mute-light);\n}\n\nion-segment:not([color]).is-segment-clear ion-segment-button {\n  --color-checked: var(--ion-color-is-text-dark);\n}\n\n.is-segment-clear ion-segment-button {\n  height: 50px;\n  font-weight: 300;\n  font-size: 0.9rem;\n}\n\n.is-select-item {\n  --min-height: 35px;\n}\n\n.is-comment {\n  font-size: 16px;\n}\n\n.is-date {\n  font-size: 13px;\n}\n\n.is-review-form ion-icon {\n  font-size: 18px;\n}\n\n.is-review-input {\n  --border-width: 2px;\n  --border-radius: 3px;\n  --highlight-height: 0;\n}\n\n.is-review-input.item-interactive {\n  --border-width: 2px;\n  --border-radius: 3px;\n}\n\n.is-review-input.item-has-focus {\n  --border-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9wcm9kdWN0LWRldGFpbHMtc2Vjb25kL3Byb2R1Y3QtZGV0YWlscy1zZWNvbmQucGFnZS5zY3NzIiwic3JjL2FwcC9wcm9kdWN0LWRldGFpbHMtc2Vjb25kL3Byb2R1Y3QtZGV0YWlscy1zZWNvbmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdURBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBRUUsa0JBQUE7QUNBRjs7QURFRTtFQUNFLGVBQUE7QUNBSjs7QURJQTtFQUNFLFdBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLGlCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNERjs7QURHRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElFO0VBQ0Usc0RBQUE7QUNGSjs7QURNQTtFQUNFLDhDQUFBO0FDSEY7O0FET0U7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRFFBO0VBQ0Usa0JBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7QUNMRjs7QURRQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtBQ0xGOztBRFFBO0VBQ0Usd0NBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy1zZWNvbmQvcHJvZHVjdC1kZXRhaWxzLXNlY29uZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXMtc2VjdGlvbi1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcclxufVxyXG5cclxuaDUge1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjByZW07XHJcbn1cclxuXHJcbi5pcy1wcmljZSB7XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYnV0dG9uLWNvbG9yIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xyXG4gIC0tYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAtLWJvcmRlci13aWR0aDogMXB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IGluaXRpYWw7XHJcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG59XHJcblxyXG4uaXMtcmF0aW5nLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xyXG59XHJcblxyXG4uaXMtZ3JpZC1yb3ctYm9yZGVyZWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG5cclxuICBpb24tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNvbDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tc2VnbWVudDpub3QoW2NvbG9yXSkuaXMtc2VnbWVudC1jbGVhciBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWlzLXRleHQtZGFyayk7XHJcbn1cclxuXHJcbi5pcy1zZWdtZW50LWNsZWFyIHtcclxuICBpb24tc2VnbWVudC1idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmlzLXNlbGVjdC1pdGVtIHtcclxuICAtLW1pbi1oZWlnaHQ6IDM1cHg7XHJcbn1cclxuXHJcbi5pcy1jb21tZW50IHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5pcy1kYXRlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbn1cclxuXHJcbi5pcy1yZXZpZXctZm9ybSBpb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uaXMtcmV2aWV3LWlucHV0IHtcclxuICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxufVxyXG5cclxuLmlzLXJldmlldy1pbnB1dC5pdGVtLWludGVyYWN0aXZlIHtcclxuICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4uaXMtcmV2aWV3LWlucHV0Lml0ZW0taGFzLWZvY3VzIHtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiIsIi5pcy1zZWN0aW9uLWJvcmRlcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbn1cblxuaDUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5pcy1wcmljZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5pcy1wcmljZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG5pb24tYnV0dG9uLmJ1dHRvbi1jb2xvciB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDM0cHggIWltcG9ydGFudDtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbiAgLS1ib3JkZXItc3R5bGU6IHNvbGlkO1xuICAtLWJvcmRlci13aWR0aDogMXB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogaW5pdGlhbDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xufVxuXG4uaXMtcmF0aW5nLXRleHQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XG59XG5cbmlvbi1zZWdtZW50Om5vdChbY29sb3JdKS5pcy1zZWdtZW50LWNsZWFyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWlzLXRleHQtZGFyayk7XG59XG5cbi5pcy1zZWdtZW50LWNsZWFyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5pcy1zZWxlY3QtaXRlbSB7XG4gIC0tbWluLWhlaWdodDogMzVweDtcbn1cblxuLmlzLWNvbW1lbnQge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pcy1kYXRlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uaXMtcmV2aWV3LWZvcm0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pcy1yZXZpZXctaW5wdXQge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xufVxuXG4uaXMtcmV2aWV3LWlucHV0Lml0ZW0taW50ZXJhY3RpdmUge1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmlzLXJldmlldy1pbnB1dC5pdGVtLWhhcy1mb2N1cyB7XG4gIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/product-details-second/product-details-second.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/product-details-second/product-details-second.page.ts ***!
  \***********************************************************************/
/*! exports provided: ProductDetailsSecondPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsSecondPage", function() { return ProductDetailsSecondPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



let ProductDetailsSecondPage = class ProductDetailsSecondPage {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
        this.slideOpts = {
            autoplay: false
        };
        this.productColors = [];
        this.sanitizer = this.domSanitizer;
    }
    ngOnInit() {
        this.productColors = [
            {
                name: 'white',
                selected: false,
                selectedContrast: 'black'
            },
            {
                name: 'brown',
                selected: false,
                selectedContrast: 'white'
            },
            {
                name: 'blue',
                selected: true,
                selectedContrast: 'white'
            },
            {
                name: 'black',
                selected: false,
                selectedContrast: 'white'
            }
        ];
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
ProductDetailsSecondPage.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
ProductDetailsSecondPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-details-second',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./product-details-second.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details-second/product-details-second.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./product-details-second.page.scss */ "./src/app/product-details-second/product-details-second.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
], ProductDetailsSecondPage);



/***/ })

}]);
//# sourceMappingURL=product-details-second-product-details-second-module-es2015.js.map