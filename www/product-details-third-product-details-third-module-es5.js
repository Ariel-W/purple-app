function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-details-third-product-details-third-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details-third/product-details-third.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-details-third/product-details-third.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductDetailsThirdProductDetailsThirdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"is-header-logo-centered ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      <img src=\"assets/imgs/logo-dark.png\" />\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"cart\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button>\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-grid class=\"ion-no-padding ion-margin-top\">\r\n    <ion-row class=\"ion-padding-horizontal ion-padding-bottom\">\r\n      <ion-col size=\"9\" class=\"ion-align-self-center\">\r\n        <h3 class=\"ion-no-margin\">Short-sleeved Denim Shirt</h3>\r\n      </ion-col>\r\n      <ion-col size=\"3\" class=\"ion-align-self-center\">\r\n        <div class=\"ion-text-right is-price ion-no-padding\">\r\n          <span>$29.99</span>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row class=\"ion-padding-horizontal ion-padding-bottom\">\r\n      <ion-col size=\"6\" class=\"ion-align-self-center\">\r\n        <h5 class=\"ion-no-margin\">Brand</h5>\r\n      </ion-col>\r\n      <ion-col size=\"6\" class=\"ion-align-self-center ion-text-right\">\r\n        <ion-badge color=\"danger\" class=\"ion-margin-horizontal\">SALE</ion-badge>\r\n        <div class=\"ion-text-right is-old-price ion-no-padding\">$29.99</div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/product-details-1.jpg\"/>\r\n    </ion-slide>\r\n    <ion-slide>\r\n      <img src=\"assets/imgs/product-details-2.jpg\"/>\r\n    </ion-slide>\r\n  </ion-slides>\r\n\r\n  <div class=\"is-section-bordered ion-padding-bottom\">\r\n    <div class=\"ion-padding-horizontal\">\r\n      <ion-grid class=\"ion-no-padding ion-margin-top\">\r\n        <ion-row class=\"is-grid-row-bordered\">\r\n          <ion-col size=\"8\" class=\"ion-padding-horizontal\">\r\n            <span>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"warning\"></ion-icon>\r\n              <ion-icon name=\"star\" color=\"light\"></ion-icon>\r\n            </span>\r\n            <span class=\"is-rating-text ion-padding-horizontal\">3 reviews</span>\r\n          </ion-col>\r\n          <ion-col size=\"4\" class=\"ion-padding-horizontal\">\r\n            <ion-icon name=\"share\" color=\"light\"></ion-icon>\r\n            <span class=\"ion-padding-start\">Share</span>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n\r\n    <ion-list class=\"ion-no-margin ion-padding is-inline-items\">\r\n      <ion-item class=\"is-select-item\">\r\n        <ion-select interface=\"popover\" value=\"Brown\">\r\n          <ion-select-option value=\"Brown\">Brown</ion-select-option>\r\n          <ion-select-option value=\"Black\">Black</ion-select-option>\r\n          <ion-select-option value=\"White\">White</ion-select-option>\r\n          <ion-select-option value=\"Blue\">Blue</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item class=\"is-select-item\">\r\n        <ion-select interface=\"popover\" value=\"1\">\r\n          <ion-select-option value=\"1\">1</ion-select-option>\r\n          <ion-select-option value=\"2\">2</ion-select-option>\r\n          <ion-select-option value=\"3\">3</ion-select-option>\r\n          <ion-select-option value=\"4\">4</ion-select-option>\r\n          <ion-select-option value=\"5\">5</ion-select-option>\r\n          <ion-select-option value=\"6\">6</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n      <ion-item class=\"is-select-item\">\r\n        <ion-select interface=\"popover\" value=\"XXL\">\r\n          <ion-select-option value=\"XXL\">XXL</ion-select-option>\r\n          <ion-select-option value=\"XL\">XL</ion-select-option>\r\n          <ion-select-option value=\"L\">L</ion-select-option>\r\n          <ion-select-option value=\"M\">M</ion-select-option>\r\n          <ion-select-option value=\"S\">S</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <div class=\"ion-padding-horizontal\">\r\n      <ion-button class=\"ion-margin-top\" expand=\"block\">Add to Cart</ion-button>\r\n      <ion-button expand=\"block\">Save</ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <ion-segment class=\"is-segment-clear is-section-bordered\" value=\"features\">\r\n    <ion-segment-button value=\"product\">\r\n      <ion-label>PRODUCT</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"brand\">\r\n      <ion-label>BRAND</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"reviews\">\r\n      <ion-label>REVIEWS (4)</ion-label>\r\n    </ion-segment-button>\r\n    <ion-segment-button value=\"features\">\r\n      <ion-label>FEATURES</ion-label>\r\n    </ion-segment-button>\r\n  </ion-segment>\r\n\r\n  <div class=\"ion-padding\">\r\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis consectetur fuga officiis nemo qui odit vero enim eos dignissimos unde consequuntur illum similique et distinctio fugit, doloribus necessitatibus fugiat eum.</p>\r\n  </div>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/product-details-third/product-details-third.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/product-details-third/product-details-third.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ProductDetailsThirdPageModule */

  /***/
  function srcAppProductDetailsThirdProductDetailsThirdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsThirdPageModule", function () {
      return ProductDetailsThirdPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _product_details_third_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-details-third.page */
    "./src/app/product-details-third/product-details-third.page.ts");

    var routes = [{
      path: '',
      component: _product_details_third_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsThirdPage"]
    }];

    var ProductDetailsThirdPageModule = function ProductDetailsThirdPageModule() {
      _classCallCheck(this, ProductDetailsThirdPageModule);
    };

    ProductDetailsThirdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_product_details_third_page__WEBPACK_IMPORTED_MODULE_6__["ProductDetailsThirdPage"]]
    })], ProductDetailsThirdPageModule);
    /***/
  },

  /***/
  "./src/app/product-details-third/product-details-third.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/product-details-third/product-details-third.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductDetailsThirdProductDetailsThirdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".is-section-bordered {\n  border-bottom: 1px solid var(--ion-color-is-mute-light);\n}\n\nh5 {\n  font-weight: 300;\n  font-size: 1rem;\n}\n\n.is-price span {\n  font-size: 1.4rem;\n}\n\n.is-old-price {\n  display: inline-block;\n  font-size: 1rem;\n  text-decoration: line-through;\n  vertical-align: top;\n}\n\nion-select {\n  width: 100%;\n  max-width: initial;\n  --padding-start: 0;\n}\n\n.is-inline-items {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -5px;\n  margin-right: -5px;\n}\n\n.is-inline-items ion-item {\n  flex-basis: 0;\n  flex-grow: 1;\n  min-width: 0;\n  max-width: 100%;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\n.is-inline-items:not([lines=none]) ion-item:not([lines=none]) {\n  border-top: 1px solid var(--ion-color-is-mute-light);\n  border-radius: 5px;\n}\n\n.is-rating-text {\n  font-size: 0.9rem;\n}\n\n.is-grid-row-bordered {\n  border-radius: 25px;\n  height: 35px;\n}\n\n.is-grid-row-bordered ion-col {\n  display: flex;\n  align-items: center;\n}\n\n.is-grid-row-bordered ion-col:first-child {\n  border-right: 1px solid var(--ion-color-is-mute-light);\n}\n\nion-segment:not([color]).is-segment-clear ion-segment-button {\n  --color-checked: var(--ion-color-is-text-dark);\n}\n\n.is-segment-clear ion-segment-button {\n  height: 50px;\n  font-weight: 300;\n  font-size: 0.9rem;\n}\n\n.is-select-item {\n  --min-height: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hcmllbHcvZGV2L3B1cnBsZS1hcHAvc3JjL2FwcC9wcm9kdWN0LWRldGFpbHMtdGhpcmQvcHJvZHVjdC1kZXRhaWxzLXRoaXJkLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcHJvZHVjdC1kZXRhaWxzLXRoaXJkL3Byb2R1Y3QtZGV0YWlscy10aGlyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1REFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUVFLGFBQUE7RUFFQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBRUUsYUFBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFSztFQUNDLG9EQUFBO0VBQ0Esa0JBQUE7QUNBTjs7QURLQTtFQUNFLGlCQUFBO0FDRkY7O0FES0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNGRjs7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtFO0VBQ0Usc0RBQUE7QUNISjs7QURPQTtFQUNFLDhDQUFBO0FDSkY7O0FEUUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFNBO0VBQ0Usa0JBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtZGV0YWlscy10aGlyZC9wcm9kdWN0LWRldGFpbHMtdGhpcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlzLXNlY3Rpb24tYm9yZGVyZWQge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XHJcbn1cclxuXHJcbmg1IHtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS4wcmVtO1xyXG59XHJcblxyXG4uaXMtcHJpY2Ugc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi5pcy1vbGQtcHJpY2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxufVxyXG5cclxuaW9uLXNlbGVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufVxyXG5cclxuLmlzLWlubGluZS1pdGVtcyB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tbGVmdDogLTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IC01cHg7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xyXG4gICAgZmxleC1iYXNpczogMDtcclxuICAgIC1tcy1mbGV4LXBvc2l0aXZlOiAxO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIH1cclxuICAmOm5vdChbbGluZXM9XCJub25lXCJdKSB7XHJcbiAgICAgaW9uLWl0ZW06bm90KFtsaW5lcz1cIm5vbmVcIl0pIHtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmlzLXJhdGluZy10ZXh0IHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIHtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuXHJcbiAgaW9uLWNvbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWlzLW11dGUtbGlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXNlZ21lbnQ6bm90KFtjb2xvcl0pLmlzLXNlZ21lbnQtY2xlYXIgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWlvbi1jb2xvci1pcy10ZXh0LWRhcmspO1xyXG59XHJcblxyXG4uaXMtc2VnbWVudC1jbGVhciB7XHJcbiAgaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5pcy1zZWxlY3QtaXRlbSB7XHJcbiAgLS1taW4taGVpZ2h0OiAzNXB4O1xyXG59XHJcbiIsIi5pcy1zZWN0aW9uLWJvcmRlcmVkIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbn1cblxuaDUge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5pcy1wcmljZSBzcGFuIHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5pcy1vbGQtcHJpY2Uge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmlvbi1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBpbml0aWFsO1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG59XG5cbi5pcy1pbmxpbmUtaXRlbXMge1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAtNXB4O1xufVxuLmlzLWlubGluZS1pdGVtcyBpb24taXRlbSB7XG4gIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAwO1xuICBmbGV4LWJhc2lzOiAwO1xuICAtbXMtZmxleC1wb3NpdGl2ZTogMTtcbiAgZmxleC1ncm93OiAxO1xuICBtaW4td2lkdGg6IDA7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG4uaXMtaW5saW5lLWl0ZW1zOm5vdChbbGluZXM9bm9uZV0pIGlvbi1pdGVtOm5vdChbbGluZXM9bm9uZV0pIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1pcy1tdXRlLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaXMtcmF0aW5nLXRleHQge1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIHtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiAzNXB4O1xufVxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIGlvbi1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmlzLWdyaWQtcm93LWJvcmRlcmVkIGlvbi1jb2w6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItaXMtbXV0ZS1saWdodCk7XG59XG5cbmlvbi1zZWdtZW50Om5vdChbY29sb3JdKS5pcy1zZWdtZW50LWNsZWFyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0taW9uLWNvbG9yLWlzLXRleHQtZGFyayk7XG59XG5cbi5pcy1zZWdtZW50LWNsZWFyIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5pcy1zZWxlY3QtaXRlbSB7XG4gIC0tbWluLWhlaWdodDogMzVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/product-details-third/product-details-third.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/product-details-third/product-details-third.page.ts ***!
    \*********************************************************************/

  /*! exports provided: ProductDetailsThirdPage */

  /***/
  function srcAppProductDetailsThirdProductDetailsThirdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsThirdPage", function () {
      return ProductDetailsThirdPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProductDetailsThirdPage = /*#__PURE__*/function () {
      function ProductDetailsThirdPage() {
        _classCallCheck(this, ProductDetailsThirdPage);
      }

      _createClass(ProductDetailsThirdPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductDetailsThirdPage;
    }();

    ProductDetailsThirdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details-third',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./product-details-third.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product-details-third/product-details-third.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./product-details-third.page.scss */
      "./src/app/product-details-third/product-details-third.page.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ProductDetailsThirdPage);
    /***/
  }
}]);
//# sourceMappingURL=product-details-third-product-details-third-module-es5.js.map