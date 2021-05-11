function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app class=\"theme-{{ env.theme }}\">\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu contentId=\"main-content\">\r\n      <ion-header>\r\n        <ion-toolbar>\r\n          <ion-title>Menu</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"'/dashboard'\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"'list'\"></ion-icon>\r\n              <ion-label> Dashboard </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"'/listThumbStart'\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"'list'\"></ion-icon>\r\n              <ion-label> My Challenges </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"'/alternativeProfile'\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"'list'\"></ion-icon>\r\n              <ion-label> My Profile </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"'/albums'\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"'list'\"></ion-icon>\r\n              <ion-label> Challenge Types </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n          <!-- <ion-item-divider>\r\n            <ion-label>Finance</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of walletPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Organizers</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of organizerPages\">\r\n            <ion-item [routerDirection]=\"'root'\" [routerLink]=\"[p.url]\">\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Intro and Login</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of introPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Walkthroughs</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of walkthroughPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Profile</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of profilePages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Account</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of accountPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Forms</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of formPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Cloud</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of cloudPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Events</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of eventPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Commerce</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of commercePages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Conference</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of conference\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Social</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of socialPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Food</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of food\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Empty States</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of emptyStatePages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Components</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of componentPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Enhanced Lists</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle\r\n            auto-hide=\"false\"\r\n            *ngFor=\"let p of enhancedListPages\"\r\n          >\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle>\r\n\r\n          <ion-item-divider>\r\n            <ion-label>Ionic Lists</ion-label>\r\n          </ion-item-divider>\r\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of ionicListPages\">\r\n            <ion-item\r\n              [routerDirection]=\"'root'\"\r\n              [routerLink]=\"[p.url]\"\r\n              routerLinkActive=\"selected-menu-item\"\r\n            >\r\n              <ion-icon slot=\"start\" [name]=\"p.icon\"></ion-icon>\r\n              <ion-label>\r\n                {{ p.title }}\r\n              </ion-label>\r\n            </ion-item>\r\n          </ion-menu-toggle> -->\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/popover-menu/popover-menu.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/popover-menu/popover-menu.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPopoverMenuPopoverMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\r\n  <ion-list>\r\n    <ion-item button>\r\n      <ion-icon name=\"person\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        Profile\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        Messages\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-icon name=\"settings\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        Settings\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item button>\r\n      <ion-icon name=\"lock-closed\" slot=\"start\"></ion-icon>\r\n      <ion-label>\r\n        Logout\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full'
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-home-module */
        "home-home-module").then(__webpack_require__.bind(null,
        /*! ./home/home.module */
        "./src/app/home/home.module.ts")).then(function (m) {
          return m.HomePageModule;
        });
      }
    }, {
      path: 'addAccount',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | add-account-add-account-module */
        "add-account-add-account-module").then(__webpack_require__.bind(null,
        /*! ./add-account/add-account.module */
        "./src/app/add-account/add-account.module.ts")).then(function (m) {
          return m.AddAccountPageModule;
        });
      }
    }, {
      path: 'albums',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | albums-albums-module */
        "albums-albums-module").then(__webpack_require__.bind(null,
        /*! ./albums/albums.module */
        "./src/app/albums/albums.module.ts")).then(function (m) {
          return m.AlbumsPageModule;
        });
      }
    }, {
      path: 'altSlidingList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | alt-sliding-list-alt-sliding-list-module */
        "alt-sliding-list-alt-sliding-list-module").then(__webpack_require__.bind(null,
        /*! ./alt-sliding-list/alt-sliding-list.module */
        "./src/app/alt-sliding-list/alt-sliding-list.module.ts")).then(function (m) {
          return m.AltSlidingListPageModule;
        });
      }
    }, {
      path: 'altThumbnailList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | alt-thumbnail-list-alt-thumbnail-list-module */
        "alt-thumbnail-list-alt-thumbnail-list-module").then(__webpack_require__.bind(null,
        /*! ./alt-thumbnail-list/alt-thumbnail-list.module */
        "./src/app/alt-thumbnail-list/alt-thumbnail-list.module.ts")).then(function (m) {
          return m.AltThumbnailListPageModule;
        });
      }
    }, {
      path: 'alternativeProfile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | alternative-profile-alternative-profile-module */
        "alternative-profile-alternative-profile-module").then(__webpack_require__.bind(null,
        /*! ./alternative-profile/alternative-profile.module */
        "./src/app/alternative-profile/alternative-profile.module.ts")).then(function (m) {
          return m.AlternativeProfilePageModule;
        });
      }
    }, {
      path: 'avatarList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | avatar-list-avatar-list-module */
        "avatar-list-avatar-list-module").then(__webpack_require__.bind(null,
        /*! ./avatar-list/avatar-list.module */
        "./src/app/avatar-list/avatar-list.module.ts")).then(function (m) {
          return m.AvatarListPageModule;
        });
      }
    }, {
      path: 'basicList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | basic-list-basic-list-module */
        "basic-list-basic-list-module").then(__webpack_require__.bind(null,
        /*! ./basic-list/basic-list.module */
        "./src/app/basic-list/basic-list.module.ts")).then(function (m) {
          return m.BasicListPageModule;
        });
      }
    }, {
      path: 'buttons',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | buttons-buttons-module */
        "buttons-buttons-module").then(__webpack_require__.bind(null,
        /*! ./buttons/buttons.module */
        "./src/app/buttons/buttons.module.ts")).then(function (m) {
          return m.ButtonsPageModule;
        });
      }
    }, {
      path: 'calendar',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | calendar-calendar-module */
        "calendar-calendar-module").then(__webpack_require__.bind(null,
        /*! ./calendar/calendar.module */
        "./src/app/calendar/calendar.module.ts")).then(function (m) {
          return m.CalendarPageModule;
        });
      }
    }, {
      path: 'calendarEvent',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | calendar-event-calendar-event-module */
        "calendar-event-calendar-event-module").then(__webpack_require__.bind(null,
        /*! ./calendar-event/calendar-event.module */
        "./src/app/calendar-event/calendar-event.module.ts")).then(function (m) {
          return m.CalendarEventPageModule;
        });
      }
    }, {
      path: 'cards',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | cards-cards-module */
        "cards-cards-module").then(__webpack_require__.bind(null,
        /*! ./cards/cards.module */
        "./src/app/cards/cards.module.ts")).then(function (m) {
          return m.CardsPageModule;
        });
      }
    }, {
      path: 'cloud',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | cloud-cloud-module */
        "cloud-cloud-module").then(__webpack_require__.bind(null,
        /*! ./cloud/cloud.module */
        "./src/app/cloud/cloud.module.ts")).then(function (m) {
          return m.CloudPageModule;
        });
      }
    }, {
      path: 'commerceHome',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | commerce-home-commerce-home-module */
        "commerce-home-commerce-home-module").then(__webpack_require__.bind(null,
        /*! ./commerce-home/commerce-home.module */
        "./src/app/commerce-home/commerce-home.module.ts")).then(function (m) {
          return m.CommerceHomePageModule;
        });
      }
    }, {
      path: 'condensedList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | condensed-list-condensed-list-module */
        "condensed-list-condensed-list-module").then(__webpack_require__.bind(null,
        /*! ./condensed-list/condensed-list.module */
        "./src/app/condensed-list/condensed-list.module.ts")).then(function (m) {
          return m.CondensedListPageModule;
        });
      }
    }, {
      path: 'condensedSlidingList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | condensed-sliding-list-condensed-sliding-list-module */
        "condensed-sliding-list-condensed-sliding-list-module").then(__webpack_require__.bind(null,
        /*! ./condensed-sliding-list/condensed-sliding-list.module */
        "./src/app/condensed-sliding-list/condensed-sliding-list.module.ts")).then(function (m) {
          return m.CondensedSlidingListPageModule;
        });
      }
    }, {
      path: 'contactForm',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-form-contact-form-module */
        "contact-form-contact-form-module").then(__webpack_require__.bind(null,
        /*! ./contact-form/contact-form.module */
        "./src/app/contact-form/contact-form.module.ts")).then(function (m) {
          return m.ContactFormPageModule;
        });
      }
    }, {
      path: 'contactFormAlt',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | contact-form-alt-contact-form-alt-module */
        "contact-form-alt-contact-form-alt-module").then(__webpack_require__.bind(null,
        /*! ./contact-form-alt/contact-form-alt.module */
        "./src/app/contact-form-alt/contact-form-alt.module.ts")).then(function (m) {
          return m.ContactFormAltPageModule;
        });
      }
    }, {
      path: 'dashboard',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | dashboard-dashboard-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~day-overview-day-overview-module~expense-overview-expense-overvie~fd8d389e"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
        /*! ./dashboard/dashboard.module */
        "./src/app/dashboard/dashboard.module.ts")).then(function (m) {
          return m.DashboardPageModule;
        });
      }
    }, {
      path: 'dayOverview',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | day-overview-day-overview-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~day-overview-day-overview-module~expense-overview-expense-overvie~fd8d389e"), __webpack_require__.e("day-overview-day-overview-module")]).then(__webpack_require__.bind(null,
        /*! ./day-overview/day-overview.module */
        "./src/app/day-overview/day-overview.module.ts")).then(function (m) {
          return m.DayOverviewPageModule;
        });
      }
    }, {
      path: 'dividersList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dividers-list-dividers-list-module */
        "dividers-list-dividers-list-module").then(__webpack_require__.bind(null,
        /*! ./dividers-list/dividers-list.module */
        "./src/app/dividers-list/dividers-list.module.ts")).then(function (m) {
          return m.DividersListPageModule;
        });
      }
    }, {
      path: 'dropdowns',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | dropdowns-dropdowns-module */
        "dropdowns-dropdowns-module").then(__webpack_require__.bind(null,
        /*! ./dropdowns/dropdowns.module */
        "./src/app/dropdowns/dropdowns.module.ts")).then(function (m) {
          return m.DropdownsPageModule;
        });
      }
    }, {
      path: 'emptyeventsfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-events-first-empty-events-first-module */
        "empty-events-first-empty-events-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-events-first/empty-events-first.module */
        "./src/app/empty-events-first/empty-events-first.module.ts")).then(function (m) {
          return m.EmptyEventsFirstPageModule;
        });
      }
    }, {
      path: 'emptyeventssecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-events-second-empty-events-second-module */
        "empty-events-second-empty-events-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-events-second/empty-events-second.module */
        "./src/app/empty-events-second/empty-events-second.module.ts")).then(function (m) {
          return m.EmptyEventsSecondPageModule;
        });
      }
    }, {
      path: 'emptyeventsthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-events-third-empty-events-third-module */
        "empty-events-third-empty-events-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-events-third/empty-events-third.module */
        "./src/app/empty-events-third/empty-events-third.module.ts")).then(function (m) {
          return m.EmptyEventsThirdPageModule;
        });
      }
    }, {
      path: 'emptyeventsfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-events-fourth-empty-events-fourth-module */
        "empty-events-fourth-empty-events-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-events-fourth/empty-events-fourth.module */
        "./src/app/empty-events-fourth/empty-events-fourth.module.ts")).then(function (m) {
          return m.EmptyEventsFourthPageModule;
        });
      }
    }, {
      path: 'emptyeventsfifth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-events-fifth-empty-events-fifth-module */
        "empty-events-fifth-empty-events-fifth-module").then(__webpack_require__.bind(null,
        /*! ./empty-events-fifth/empty-events-fifth.module */
        "./src/app/empty-events-fifth/empty-events-fifth.module.ts")).then(function (m) {
          return m.EmptyEventsFifthPageModule;
        });
      }
    }, {
      path: 'emptyinboxfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-inbox-first-empty-inbox-first-module */
        "empty-inbox-first-empty-inbox-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-inbox-first/empty-inbox-first.module */
        "./src/app/empty-inbox-first/empty-inbox-first.module.ts")).then(function (m) {
          return m.EmptyInboxFirstPageModule;
        });
      }
    }, {
      path: 'emptyinboxsecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-inbox-second-empty-inbox-second-module */
        "empty-inbox-second-empty-inbox-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-inbox-second/empty-inbox-second.module */
        "./src/app/empty-inbox-second/empty-inbox-second.module.ts")).then(function (m) {
          return m.EmptyInboxSecondPageModule;
        });
      }
    }, {
      path: 'emptyinboxthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-inbox-third-empty-inbox-third-module */
        "empty-inbox-third-empty-inbox-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-inbox-third/empty-inbox-third.module */
        "./src/app/empty-inbox-third/empty-inbox-third.module.ts")).then(function (m) {
          return m.EmptyInboxThirdPageModule;
        });
      }
    }, {
      path: 'emptyinboxfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-inbox-fourth-empty-inbox-fourth-module */
        "empty-inbox-fourth-empty-inbox-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-inbox-fourth/empty-inbox-fourth.module */
        "./src/app/empty-inbox-fourth/empty-inbox-fourth.module.ts")).then(function (m) {
          return m.EmptyInboxFourthPageModule;
        });
      }
    }, {
      path: 'emptyfriendsfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-friends-first-empty-friends-first-module */
        "empty-friends-first-empty-friends-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-friends-first/empty-friends-first.module */
        "./src/app/empty-friends-first/empty-friends-first.module.ts")).then(function (m) {
          return m.EmptyFriendsFirstPageModule;
        });
      }
    }, {
      path: 'emptyfriendssecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-friends-second-empty-friends-second-module */
        "empty-friends-second-empty-friends-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-friends-second/empty-friends-second.module */
        "./src/app/empty-friends-second/empty-friends-second.module.ts")).then(function (m) {
          return m.EmptyFriendsSecondPageModule;
        });
      }
    }, {
      path: 'emptyfriendsthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-friends-third-empty-friends-third-module */
        "empty-friends-third-empty-friends-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-friends-third/empty-friends-third.module */
        "./src/app/empty-friends-third/empty-friends-third.module.ts")).then(function (m) {
          return m.EmptyFriendsThirdPageModule;
        });
      }
    }, {
      path: 'emptyfriendsfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-friends-fourth-empty-friends-fourth-module */
        "empty-friends-fourth-empty-friends-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-friends-fourth/empty-friends-fourth.module */
        "./src/app/empty-friends-fourth/empty-friends-fourth.module.ts")).then(function (m) {
          return m.EmptyFriendsFourthPageModule;
        });
      }
    }, {
      path: 'emptyfriendsfifth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-friends-fifth-empty-friends-fifth-module */
        "empty-friends-fifth-empty-friends-fifth-module").then(__webpack_require__.bind(null,
        /*! ./empty-friends-fifth/empty-friends-fifth.module */
        "./src/app/empty-friends-fifth/empty-friends-fifth.module.ts")).then(function (m) {
          return m.EmptyFriendsFifthPageModule;
        });
      }
    }, {
      path: 'emptynotificationfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-notification-first-empty-notification-first-module */
        "empty-notification-first-empty-notification-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-notification-first/empty-notification-first.module */
        "./src/app/empty-notification-first/empty-notification-first.module.ts")).then(function (m) {
          return m.EmptyNotificationFirstPageModule;
        });
      }
    }, {
      path: 'emptynotificationsecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-notification-second-empty-notification-second-module */
        "empty-notification-second-empty-notification-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-notification-second/empty-notification-second.module */
        "./src/app/empty-notification-second/empty-notification-second.module.ts")).then(function (m) {
          return m.EmptyNotificationSecondPageModule;
        });
      }
    }, {
      path: 'emptynotificationthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-notification-third-empty-notification-third-module */
        "empty-notification-third-empty-notification-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-notification-third/empty-notification-third.module */
        "./src/app/empty-notification-third/empty-notification-third.module.ts")).then(function (m) {
          return m.EmptyNotificationThirdPageModule;
        });
      }
    }, {
      path: 'emptynotificationfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-notification-fourth-empty-notification-fourth-module */
        "empty-notification-fourth-empty-notification-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-notification-fourth/empty-notification-fourth.module */
        "./src/app/empty-notification-fourth/empty-notification-fourth.module.ts")).then(function (m) {
          return m.EmptyNotificationFourthPageModule;
        });
      }
    }, {
      path: 'emptynotificationfifth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-notification-fifth-empty-notification-fifth-module */
        "empty-notification-fifth-empty-notification-fifth-module").then(__webpack_require__.bind(null,
        /*! ./empty-notification-fifth/empty-notification-fifth.module */
        "./src/app/empty-notification-fifth/empty-notification-fifth.module.ts")).then(function (m) {
          return m.EmptyNotificationFifthPageModule;
        });
      }
    }, {
      path: 'emptyphotosfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-photos-first-empty-photos-first-module */
        "empty-photos-first-empty-photos-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-photos-first/empty-photos-first.module */
        "./src/app/empty-photos-first/empty-photos-first.module.ts")).then(function (m) {
          return m.EmptyPhotosFirstPageModule;
        });
      }
    }, {
      path: 'emptyphotossecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-photos-second-empty-photos-second-module */
        "empty-photos-second-empty-photos-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-photos-second/empty-photos-second.module */
        "./src/app/empty-photos-second/empty-photos-second.module.ts")).then(function (m) {
          return m.EmptyPhotosSecondPageModule;
        });
      }
    }, {
      path: 'emptyphotosthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-photos-third-empty-photos-third-module */
        "empty-photos-third-empty-photos-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-photos-third/empty-photos-third.module */
        "./src/app/empty-photos-third/empty-photos-third.module.ts")).then(function (m) {
          return m.EmptyPhotosThirdPageModule;
        });
      }
    }, {
      path: 'emptyphotosfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-photos-fourth-empty-photos-fourth-module */
        "empty-photos-fourth-empty-photos-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-photos-fourth/empty-photos-fourth.module */
        "./src/app/empty-photos-fourth/empty-photos-fourth.module.ts")).then(function (m) {
          return m.EmptyPhotosFourthPageModule;
        });
      }
    }, {
      path: 'emptyphotosfifth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-photos-fifth-empty-photos-fifth-module */
        "empty-photos-fifth-empty-photos-fifth-module").then(__webpack_require__.bind(null,
        /*! ./empty-photos-fifth/empty-photos-fifth.module */
        "./src/app/empty-photos-fifth/empty-photos-fifth.module.ts")).then(function (m) {
          return m.EmptyPhotosFifthPageModule;
        });
      }
    }, {
      path: 'emptypurchasesfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-purchases-first-empty-purchases-first-module */
        "empty-purchases-first-empty-purchases-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-purchases-first/empty-purchases-first.module */
        "./src/app/empty-purchases-first/empty-purchases-first.module.ts")).then(function (m) {
          return m.EmptyPurchasesFirstPageModule;
        });
      }
    }, {
      path: 'emptypurchasessecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-purchases-second-empty-purchases-second-module */
        "empty-purchases-second-empty-purchases-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-purchases-second/empty-purchases-second.module */
        "./src/app/empty-purchases-second/empty-purchases-second.module.ts")).then(function (m) {
          return m.EmptyPurchasesSecondPageModule;
        });
      }
    }, {
      path: 'emptypurchasesthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-purchases-third-empty-purchases-third-module */
        "empty-purchases-third-empty-purchases-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-purchases-third/empty-purchases-third.module */
        "./src/app/empty-purchases-third/empty-purchases-third.module.ts")).then(function (m) {
          return m.EmptyPurchasesThirdPageModule;
        });
      }
    }, {
      path: 'emptypurchasesfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-purchases-fourth-empty-purchases-fourth-module */
        "empty-purchases-fourth-empty-purchases-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-purchases-fourth/empty-purchases-fourth.module */
        "./src/app/empty-purchases-fourth/empty-purchases-fourth.module.ts")).then(function (m) {
          return m.EmptyPurchasesFourthPageModule;
        });
      }
    }, {
      path: 'emptypurchasesfifth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-purchases-fifth-empty-purchases-fifth-module */
        "empty-purchases-fifth-empty-purchases-fifth-module").then(__webpack_require__.bind(null,
        /*! ./empty-purchases-fifth/empty-purchases-fifth.module */
        "./src/app/empty-purchases-fifth/empty-purchases-fifth.module.ts")).then(function (m) {
          return m.EmptyPurchasesFifthPageModule;
        });
      }
    }, {
      path: 'emptysentfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-sent-first-empty-sent-first-module */
        "empty-sent-first-empty-sent-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-sent-first/empty-sent-first.module */
        "./src/app/empty-sent-first/empty-sent-first.module.ts")).then(function (m) {
          return m.EmptySentFirstPageModule;
        });
      }
    }, {
      path: 'emptytasksfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-tasks-first-empty-tasks-first-module */
        "empty-tasks-first-empty-tasks-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-tasks-first/empty-tasks-first.module */
        "./src/app/empty-tasks-first/empty-tasks-first.module.ts")).then(function (m) {
          return m.EmptyTasksFirstPageModule;
        });
      }
    }, {
      path: 'emptytaskssecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-tasks-second-empty-tasks-second-module */
        "empty-tasks-second-empty-tasks-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-tasks-second/empty-tasks-second.module */
        "./src/app/empty-tasks-second/empty-tasks-second.module.ts")).then(function (m) {
          return m.EmptyTasksSecondPageModule;
        });
      }
    }, {
      path: 'emptytasksthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-tasks-third-empty-tasks-third-module */
        "empty-tasks-third-empty-tasks-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-tasks-third/empty-tasks-third.module */
        "./src/app/empty-tasks-third/empty-tasks-third.module.ts")).then(function (m) {
          return m.EmptyTasksThirdPageModule;
        });
      }
    }, {
      path: 'emptytasksfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-tasks-fourth-empty-tasks-fourth-module */
        "empty-tasks-fourth-empty-tasks-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-tasks-fourth/empty-tasks-fourth.module */
        "./src/app/empty-tasks-fourth/empty-tasks-fourth.module.ts")).then(function (m) {
          return m.EmptyTasksFourthPageModule;
        });
      }
    }, {
      path: 'emptytasksfifth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-tasks-fifth-empty-tasks-fifth-module */
        "empty-tasks-fifth-empty-tasks-fifth-module").then(__webpack_require__.bind(null,
        /*! ./empty-tasks-fifth/empty-tasks-fifth.module */
        "./src/app/empty-tasks-fifth/empty-tasks-fifth.module.ts")).then(function (m) {
          return m.EmptyTasksFifthPageModule;
        });
      }
    }, {
      path: 'emptyvideosfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-videos-first-empty-videos-first-module */
        "empty-videos-first-empty-videos-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-videos-first/empty-videos-first.module */
        "./src/app/empty-videos-first/empty-videos-first.module.ts")).then(function (m) {
          return m.EmptyVideosFirstPageModule;
        });
      }
    }, {
      path: 'emptyvideossecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-videos-second-empty-videos-second-module */
        "empty-videos-second-empty-videos-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-videos-second/empty-videos-second.module */
        "./src/app/empty-videos-second/empty-videos-second.module.ts")).then(function (m) {
          return m.EmptyVideosSecondPageModule;
        });
      }
    }, {
      path: 'emptyvideosthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-videos-third-empty-videos-third-module */
        "empty-videos-third-empty-videos-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-videos-third/empty-videos-third.module */
        "./src/app/empty-videos-third/empty-videos-third.module.ts")).then(function (m) {
          return m.EmptyVideosThirdPageModule;
        });
      }
    }, {
      path: 'emptyvideosfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-videos-fourth-empty-videos-fourth-module */
        "empty-videos-fourth-empty-videos-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-videos-fourth/empty-videos-fourth.module */
        "./src/app/empty-videos-fourth/empty-videos-fourth.module.ts")).then(function (m) {
          return m.EmptyVideosFourthPageModule;
        });
      }
    }, {
      path: 'emptyvideosfifth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-videos-fifth-empty-videos-fifth-module */
        "empty-videos-fifth-empty-videos-fifth-module").then(__webpack_require__.bind(null,
        /*! ./empty-videos-fifth/empty-videos-fifth.module */
        "./src/app/empty-videos-fifth/empty-videos-fifth.module.ts")).then(function (m) {
          return m.EmptyVideosFifthPageModule;
        });
      }
    }, {
      path: 'emptywalletfirst',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-wallet-first-empty-wallet-first-module */
        "empty-wallet-first-empty-wallet-first-module").then(__webpack_require__.bind(null,
        /*! ./empty-wallet-first/empty-wallet-first.module */
        "./src/app/empty-wallet-first/empty-wallet-first.module.ts")).then(function (m) {
          return m.EmptyWalletFirstPageModule;
        });
      }
    }, {
      path: 'emptywalletsecond',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-wallet-second-empty-wallet-second-module */
        "empty-wallet-second-empty-wallet-second-module").then(__webpack_require__.bind(null,
        /*! ./empty-wallet-second/empty-wallet-second.module */
        "./src/app/empty-wallet-second/empty-wallet-second.module.ts")).then(function (m) {
          return m.EmptyWalletSecondPageModule;
        });
      }
    }, {
      path: 'emptywalletthird',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-wallet-third-empty-wallet-third-module */
        "empty-wallet-third-empty-wallet-third-module").then(__webpack_require__.bind(null,
        /*! ./empty-wallet-third/empty-wallet-third.module */
        "./src/app/empty-wallet-third/empty-wallet-third.module.ts")).then(function (m) {
          return m.EmptyWalletThirdPageModule;
        });
      }
    }, {
      path: 'emptywalletfourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-wallet-fourth-empty-wallet-fourth-module */
        "empty-wallet-fourth-empty-wallet-fourth-module").then(__webpack_require__.bind(null,
        /*! ./empty-wallet-fourth/empty-wallet-fourth.module */
        "./src/app/empty-wallet-fourth/empty-wallet-fourth.module.ts")).then(function (m) {
          return m.EmptyWalletFourthPageModule;
        });
      }
    }, {
      path: 'emptywalletfifth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | empty-wallet-fifth-empty-wallet-fifth-module */
        "empty-wallet-fifth-empty-wallet-fifth-module").then(__webpack_require__.bind(null,
        /*! ./empty-wallet-fifth/empty-wallet-fifth.module */
        "./src/app/empty-wallet-fifth/empty-wallet-fifth.module.ts")).then(function (m) {
          return m.EmptyWalletFifthPageModule;
        });
      }
    }, {
      path: 'eventDetails',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | event-details-event-details-module */
        "event-details-event-details-module").then(__webpack_require__.bind(null,
        /*! ./event-details/event-details.module */
        "./src/app/event-details/event-details.module.ts")).then(function (m) {
          return m.EventDetailsPageModule;
        });
      }
    }, {
      path: 'eventsList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | events-list-events-list-module */
        "events-list-events-list-module").then(__webpack_require__.bind(null,
        /*! ./events-list/events-list.module */
        "./src/app/events-list/events-list.module.ts")).then(function (m) {
          return m.EventsListPageModule;
        });
      }
    }, {
      path: 'expenseOverview',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | expense-overview-expense-overview-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~day-overview-day-overview-module~expense-overview-expense-overvie~fd8d389e"), __webpack_require__.e("expense-overview-expense-overview-module")]).then(__webpack_require__.bind(null,
        /*! ./expense-overview/expense-overview.module */
        "./src/app/expense-overview/expense-overview.module.ts")).then(function (m) {
          return m.ExpenseOverviewPageModule;
        });
      }
    }, {
      path: 'gridTiles',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | grid-tiles-grid-tiles-module */
        "grid-tiles-grid-tiles-module").then(__webpack_require__.bind(null,
        /*! ./grid-tiles/grid-tiles.module */
        "./src/app/grid-tiles/grid-tiles.module.ts")).then(function (m) {
          return m.GridTilesPageModule;
        });
      }
    }, {
      path: 'headersList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | headers-list-headers-list-module */
        "headers-list-headers-list-module").then(__webpack_require__.bind(null,
        /*! ./headers-list/headers-list.module */
        "./src/app/headers-list/headers-list.module.ts")).then(function (m) {
          return m.HeadersListPageModule;
        });
      }
    }, {
      path: 'homeAlt',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | home-alt-home-alt-module */
        "home-alt-home-alt-module").then(__webpack_require__.bind(null,
        /*! ./home-alt/home-alt.module */
        "./src/app/home-alt/home-alt.module.ts")).then(function (m) {
          return m.HomeAltPageModule;
        });
      }
    }, {
      path: 'iconList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | icon-list-icon-list-module */
        "icon-list-icon-list-module").then(__webpack_require__.bind(null,
        /*! ./icon-list/icon-list.module */
        "./src/app/icon-list/icon-list.module.ts")).then(function (m) {
          return m.IconListPageModule;
        });
      }
    }, {
      path: 'inputs',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inputs-inputs-module */
        "inputs-inputs-module").then(__webpack_require__.bind(null,
        /*! ./inputs/inputs.module */
        "./src/app/inputs/inputs.module.ts")).then(function (m) {
          return m.InputsPageModule;
        });
      }
    }, {
      path: 'insetList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | inset-list-inset-list-module */
        "inset-list-inset-list-module").then(__webpack_require__.bind(null,
        /*! ./inset-list/inset-list.module */
        "./src/app/inset-list/inset-list.module.ts")).then(function (m) {
          return m.InsetListPageModule;
        });
      }
    }, {
      path: 'listThumbCentered',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | list-thumb-centered-list-thumb-centered-module */
        "list-thumb-centered-list-thumb-centered-module").then(__webpack_require__.bind(null,
        /*! ./list-thumb-centered/list-thumb-centered.module */
        "./src/app/list-thumb-centered/list-thumb-centered.module.ts")).then(function (m) {
          return m.ListThumbCenteredPageModule;
        });
      }
    }, {
      path: 'listThumbEnd',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | list-thumb-end-list-thumb-end-module */
        "list-thumb-end-list-thumb-end-module").then(__webpack_require__.bind(null,
        /*! ./list-thumb-end/list-thumb-end.module */
        "./src/app/list-thumb-end/list-thumb-end.module.ts")).then(function (m) {
          return m.ListThumbEndPageModule;
        });
      }
    }, {
      path: 'listThumbStart',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | list-thumb-start-list-thumb-start-module */
        "list-thumb-start-list-thumb-start-module").then(__webpack_require__.bind(null,
        /*! ./list-thumb-start/list-thumb-start.module */
        "./src/app/list-thumb-start/list-thumb-start.module.ts")).then(function (m) {
          return m.ListThumbStartPageModule;
        });
      }
    }, {
      path: 'login',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-login-module */
        "login-login-module").then(__webpack_require__.bind(null,
        /*! ./login/login.module */
        "./src/app/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: 'loginBackground',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-background-login-background-module */
        "login-background-login-background-module").then(__webpack_require__.bind(null,
        /*! ./login-background/login-background.module */
        "./src/app/login-background/login-background.module.ts")).then(function (m) {
          return m.LoginBackgroundPageModule;
        });
      }
    }, {
      path: 'loginFooter',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | login-footer-login-footer-module */
        "login-footer-login-footer-module").then(__webpack_require__.bind(null,
        /*! ./login-footer/login-footer.module */
        "./src/app/login-footer/login-footer.module.ts")).then(function (m) {
          return m.LoginFooterPageModule;
        });
      }
    }, {
      path: 'mail',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | mail-mail-module */
        "mail-mail-module").then(__webpack_require__.bind(null,
        /*! ./mail/mail.module */
        "./src/app/mail/mail.module.ts")).then(function (m) {
          return m.MailPageModule;
        });
      }
    }, {
      path: 'multiLineList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | multi-line-list-multi-line-list-module */
        "multi-line-list-multi-line-list-module").then(__webpack_require__.bind(null,
        /*! ./multi-line-list/multi-line-list.module */
        "./src/app/multi-line-list/multi-line-list.module.ts")).then(function (m) {
          return m.MultiLineListPageModule;
        });
      }
    }, {
      path: 'noLinesList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | no-lines-list-no-lines-list-module */
        "no-lines-list-no-lines-list-module").then(__webpack_require__.bind(null,
        /*! ./no-lines-list/no-lines-list.module */
        "./src/app/no-lines-list/no-lines-list.module.ts")).then(function (m) {
          return m.NoLinesListPageModule;
        });
      }
    }, {
      path: 'orderedList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | ordered-list-ordered-list-module */
        "ordered-list-ordered-list-module").then(__webpack_require__.bind(null,
        /*! ./ordered-list/ordered-list.module */
        "./src/app/ordered-list/ordered-list.module.ts")).then(function (m) {
          return m.OrderedListPageModule;
        });
      }
    }, {
      path: 'paymentHistory',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | payment-history-payment-history-module */
        "payment-history-payment-history-module").then(__webpack_require__.bind(null,
        /*! ./payment-history/payment-history.module */
        "./src/app/payment-history/payment-history.module.ts")).then(function (m) {
          return m.PaymentHistoryPageModule;
        });
      }
    }, {
      path: 'products',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | products-products-module */
        "products-products-module").then(__webpack_require__.bind(null,
        /*! ./products/products.module */
        "./src/app/products/products.module.ts")).then(function (m) {
          return m.ProductsPageModule;
        });
      }
    }, {
      path: 'profileSettings',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | profile-settings-profile-settings-module */
        "profile-settings-profile-settings-module").then(__webpack_require__.bind(null,
        /*! ./profile-settings/profile-settings.module */
        "./src/app/profile-settings/profile-settings.module.ts")).then(function (m) {
          return m.ProfileSettingsPageModule;
        });
      }
    }, {
      path: 'scheduleDay',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | schedule-day-schedule-day-module */
        "schedule-day-schedule-day-module").then(__webpack_require__.bind(null,
        /*! ./schedule-day/schedule-day.module */
        "./src/app/schedule-day/schedule-day.module.ts")).then(function (m) {
          return m.ScheduleDayPageModule;
        });
      }
    }, {
      path: 'scheduleMonth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | schedule-month-schedule-month-module */
        "schedule-month-schedule-month-module").then(__webpack_require__.bind(null,
        /*! ./schedule-month/schedule-month.module */
        "./src/app/schedule-month/schedule-month.module.ts")).then(function (m) {
          return m.ScheduleMonthPageModule;
        });
      }
    }, {
      path: 'selectors',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | selectors-selectors-module */
        "selectors-selectors-module").then(__webpack_require__.bind(null,
        /*! ./selectors/selectors.module */
        "./src/app/selectors/selectors.module.ts")).then(function (m) {
          return m.SelectorsPageModule;
        });
      }
    }, {
      path: 'signup',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | signup-signup-module */
        "signup-signup-module").then(__webpack_require__.bind(null,
        /*! ./signup/signup.module */
        "./src/app/signup/signup.module.ts")).then(function (m) {
          return m.SignupPageModule;
        });
      }
    }, {
      path: 'signupAlt',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | signup-alt-signup-alt-module */
        "signup-alt-signup-alt-module").then(__webpack_require__.bind(null,
        /*! ./signup-alt/signup-alt.module */
        "./src/app/signup-alt/signup-alt.module.ts")).then(function (m) {
          return m.SignupAltPageModule;
        });
      }
    }, {
      path: 'slidingList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sliding-list-sliding-list-module */
        "sliding-list-sliding-list-module").then(__webpack_require__.bind(null,
        /*! ./sliding-list/sliding-list.module */
        "./src/app/sliding-list/sliding-list.module.ts")).then(function (m) {
          return m.SlidingListPageModule;
        });
      }
    }, {
      path: 'storage',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | storage-storage-module */
        "storage-storage-module").then(__webpack_require__.bind(null,
        /*! ./storage/storage.module */
        "./src/app/storage/storage.module.ts")).then(function (m) {
          return m.StoragePageModule;
        });
      }
    }, {
      path: 'thumbButtonsList',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | thumb-buttons-list-thumb-buttons-list-module */
        "thumb-buttons-list-thumb-buttons-list-module").then(__webpack_require__.bind(null,
        /*! ./thumb-buttons-list/thumb-buttons-list.module */
        "./src/app/thumb-buttons-list/thumb-buttons-list.module.ts")).then(function (m) {
          return m.ThumbButtonsListPageModule;
        });
      }
    }, {
      path: 'thumbButtonsListAlt',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | thumb-buttons-list-alt-thumb-buttons-list-alt-module */
        "thumb-buttons-list-alt-thumb-buttons-list-alt-module").then(__webpack_require__.bind(null,
        /*! ./thumb-buttons-list-alt/thumb-buttons-list-alt.module */
        "./src/app/thumb-buttons-list-alt/thumb-buttons-list-alt.module.ts")).then(function (m) {
          return m.ThumbButtonsListAltPageModule;
        });
      }
    }, {
      path: 'walkthrough',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | walkthrough-walkthrough-module */
        "walkthrough-walkthrough-module").then(__webpack_require__.bind(null,
        /*! ./walkthrough/walkthrough.module */
        "./src/app/walkthrough/walkthrough.module.ts")).then(function (m) {
          return m.WalkthroughPageModule;
        });
      }
    }, {
      path: 'walkthroughAlt',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | walkthrough-alt-walkthrough-alt-module */
        "walkthrough-alt-walkthrough-alt-module").then(__webpack_require__.bind(null,
        /*! ./walkthrough-alt/walkthrough-alt.module */
        "./src/app/walkthrough-alt/walkthrough-alt.module.ts")).then(function (m) {
          return m.WalkthroughAltPageModule;
        });
      }
    }, {
      path: 'walkthroughSlider',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | walkthrough-slider-walkthrough-slider-module */
        "walkthrough-slider-walkthrough-slider-module").then(__webpack_require__.bind(null,
        /*! ./walkthrough-slider/walkthrough-slider.module */
        "./src/app/walkthrough-slider/walkthrough-slider.module.ts")).then(function (m) {
          return m.WalkthroughSliderPageModule;
        });
      }
    }, {
      path: 'wallet',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | wallet-wallet-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~day-overview-day-overview-module~expense-overview-expense-overvie~fd8d389e"), __webpack_require__.e("wallet-wallet-module")]).then(__webpack_require__.bind(null,
        /*! ./wallet/wallet.module */
        "./src/app/wallet/wallet.module.ts")).then(function (m) {
          return m.WalletPageModule;
        });
      }
    }, {
      path: 'walletAlt',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | wallet-alt-wallet-alt-module */
        [__webpack_require__.e("default~dashboard-dashboard-module~day-overview-day-overview-module~expense-overview-expense-overvie~fd8d389e"), __webpack_require__.e("wallet-alt-wallet-alt-module")]).then(__webpack_require__.bind(null,
        /*! ./wallet-alt/wallet-alt.module */
        "./src/app/wallet-alt/wallet-alt.module.ts")).then(function (m) {
          return m.WalletAltPageModule;
        });
      }
    }, {
      path: 'products-grid',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | products-grid-products-grid-module */
        "products-grid-products-grid-module").then(__webpack_require__.bind(null,
        /*! ./products-grid/products-grid.module */
        "./src/app/products-grid/products-grid.module.ts")).then(function (m) {
          return m.ProductsGridPageModule;
        });
      }
    }, {
      path: 'commerce-home',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | commerce-home-commerce-home-module */
        "commerce-home-commerce-home-module").then(__webpack_require__.bind(null,
        /*! ./commerce-home/commerce-home.module */
        "./src/app/commerce-home/commerce-home.module.ts")).then(function (m) {
          return m.CommerceHomePageModule;
        });
      }
    }, {
      path: 'product-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | product-details-product-details-module */
        "product-details-product-details-module").then(__webpack_require__.bind(null,
        /*! ./product-details/product-details.module */
        "./src/app/product-details/product-details.module.ts")).then(function (m) {
          return m.ProductDetailsPageModule;
        });
      }
    }, {
      path: 'products-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | products-list-products-list-module */
        "products-list-products-list-module").then(__webpack_require__.bind(null,
        /*! ./products-list/products-list.module */
        "./src/app/products-list/products-list.module.ts")).then(function (m) {
          return m.ProductsListPageModule;
        });
      }
    }, {
      path: 'product-details-second',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | product-details-second-product-details-second-module */
        "product-details-second-product-details-second-module").then(__webpack_require__.bind(null,
        /*! ./product-details-second/product-details-second.module */
        "./src/app/product-details-second/product-details-second.module.ts")).then(function (m) {
          return m.ProductDetailsSecondPageModule;
        });
      }
    }, {
      path: 'product-details-third',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | product-details-third-product-details-third-module */
        "product-details-third-product-details-third-module").then(__webpack_require__.bind(null,
        /*! ./product-details-third/product-details-third.module */
        "./src/app/product-details-third/product-details-third.module.ts")).then(function (m) {
          return m.ProductDetailsThirdPageModule;
        });
      }
    }, {
      path: 'product-details-fourth',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | product-details-fourth-product-details-fourth-module */
        "product-details-fourth-product-details-fourth-module").then(__webpack_require__.bind(null,
        /*! ./product-details-fourth/product-details-fourth.module */
        "./src/app/product-details-fourth/product-details-fourth.module.ts")).then(function (m) {
          return m.ProductDetailsFourthPageModule;
        });
      }
    }, {
      path: 'payment',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | payment-payment-module */
        "payment-payment-module").then(__webpack_require__.bind(null,
        /*! ./payment/payment.module */
        "./src/app/payment/payment.module.ts")).then(function (m) {
          return m.PaymentPageModule;
        });
      }
    }, {
      path: 'delivery',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | delivery-delivery-module */
        "delivery-delivery-module").then(__webpack_require__.bind(null,
        /*! ./delivery/delivery.module */
        "./src/app/delivery/delivery.module.ts")).then(function (m) {
          return m.DeliveryPageModule;
        });
      }
    }, {
      path: 'cart',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | cart-cart-module */
        "cart-cart-module").then(__webpack_require__.bind(null,
        /*! ./cart/cart.module */
        "./src/app/cart/cart.module.ts")).then(function (m) {
          return m.CartPageModule;
        });
      }
    }, {
      path: 'confirmation',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | confirmation-confirmation-module */
        "confirmation-confirmation-module").then(__webpack_require__.bind(null,
        /*! ./confirmation/confirmation.module */
        "./src/app/confirmation/confirmation.module.ts")).then(function (m) {
          return m.ConfirmationPageModule;
        });
      }
    }, {
      path: 'order-finish',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | order-finish-order-finish-module */
        "order-finish-order-finish-module").then(__webpack_require__.bind(null,
        /*! ./order-finish/order-finish.module */
        "./src/app/order-finish/order-finish.module.ts")).then(function (m) {
          return m.OrderFinishPageModule;
        });
      }
    }, {
      path: 'order-history',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | order-history-order-history-module */
        "order-history-order-history-module").then(__webpack_require__.bind(null,
        /*! ./order-history/order-history.module */
        "./src/app/order-history/order-history.module.ts")).then(function (m) {
          return m.OrderHistoryPageModule;
        });
      }
    }, {
      path: 'subscribers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | subscribers-subscribers-module */
        "subscribers-subscribers-module").then(__webpack_require__.bind(null,
        /*! ./subscribers/subscribers.module */
        "./src/app/subscribers/subscribers.module.ts")).then(function (m) {
          return m.SubscribersPageModule;
        });
      }
    }, {
      path: 'friends',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | friends-friends-module */
        "friends-friends-module").then(__webpack_require__.bind(null,
        /*! ./friends/friends.module */
        "./src/app/friends/friends.module.ts")).then(function (m) {
          return m.FriendsPageModule;
        });
      }
    }, {
      path: 'followers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | followers-followers-module */
        "followers-followers-module").then(__webpack_require__.bind(null,
        /*! ./followers/followers.module */
        "./src/app/followers/followers.module.ts")).then(function (m) {
          return m.FollowersPageModule;
        });
      }
    }, {
      path: 'recipes-grid',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | recipes-grid-recipes-grid-module */
        "recipes-grid-recipes-grid-module").then(__webpack_require__.bind(null,
        /*! ./recipes-grid/recipes-grid.module */
        "./src/app/recipes-grid/recipes-grid.module.ts")).then(function (m) {
          return m.RecipesGridPageModule;
        });
      }
    }, {
      path: 'agenda',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | agenda-agenda-module */
        "agenda-agenda-module").then(__webpack_require__.bind(null,
        /*! ./agenda/agenda.module */
        "./src/app/agenda/agenda.module.ts")).then(function (m) {
          return m.AgendaPageModule;
        });
      }
    }, {
      path: 'sponsors',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | sponsors-sponsors-module */
        "sponsors-sponsors-module").then(__webpack_require__.bind(null,
        /*! ./sponsors/sponsors.module */
        "./src/app/sponsors/sponsors.module.ts")).then(function (m) {
          return m.SponsorsPageModule;
        });
      }
    }, {
      path: 'session-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | session-details-session-details-module */
        "session-details-session-details-module").then(__webpack_require__.bind(null,
        /*! ./session-details/session-details.module */
        "./src/app/session-details/session-details.module.ts")).then(function (m) {
          return m.SessionDetailsPageModule;
        });
      }
    }, {
      path: 'speakers',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | speakers-speakers-module */
        "speakers-speakers-module").then(__webpack_require__.bind(null,
        /*! ./speakers/speakers.module */
        "./src/app/speakers/speakers.module.ts")).then(function (m) {
          return m.SpeakersPageModule;
        });
      }
    }, {
      path: 'speaker-details',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | speaker-details-speaker-details-module */
        "speaker-details-speaker-details-module").then(__webpack_require__.bind(null,
        /*! ./speaker-details/speaker-details.module */
        "./src/app/speaker-details/speaker-details.module.ts")).then(function (m) {
          return m.SpeakerDetailsPageModule;
        });
      }
    }, {
      path: 'recipes-list',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | recipes-list-recipes-list-module */
        "recipes-list-recipes-list-module").then(__webpack_require__.bind(null,
        /*! ./recipes-list/recipes-list.module */
        "./src/app/recipes-list/recipes-list.module.ts")).then(function (m) {
          return m.RecipesListPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"];
        this.walletPages = [{
          title: 'Cards',
          url: '/cards',
          icon: 'list'
        }, {
          title: 'Dashboard',
          url: '/dashboard',
          icon: 'list'
        }, {
          title: 'Expense Overview',
          url: '/expenseOverview',
          icon: 'list'
        }, {
          title: 'Payment History',
          url: '/paymentHistory',
          icon: 'list'
        }, {
          title: 'Wallet',
          url: '/wallet',
          icon: 'list'
        }, {
          title: 'Wallet Alternative',
          url: '/walletAlt',
          icon: 'list'
        }];
        this.organizerPages = [{
          title: 'Calendar',
          url: '/calendar',
          icon: 'list'
        }, {
          title: 'Day Overview',
          url: '/dayOverview',
          icon: 'list'
        }, {
          title: 'Schedule Day',
          url: '/scheduleDay',
          icon: 'list'
        }, {
          title: 'Schedule Months',
          url: '/scheduleMonth',
          icon: 'list'
        }];
        this.introPages = [{
          title: 'Home',
          url: '/home',
          icon: 'list'
        }, {
          title: 'Home Alternative',
          url: '/homeAlt',
          icon: 'list'
        }, {
          title: 'Login',
          url: '/login',
          icon: 'list'
        }, {
          title: 'Login with Background',
          url: '/loginBackground',
          icon: 'list'
        }, {
          title: 'Login with Footer',
          url: '/loginFooter',
          icon: 'list'
        }];
        this.walkthroughPages = [{
          title: 'Walkthrough',
          url: '/walkthrough',
          icon: 'list'
        }, {
          title: 'Walkthrough Alternative',
          url: '/walkthroughAlt',
          icon: 'list'
        }, {
          title: 'Walkthrough Page Slider',
          url: '/walkthroughSlider',
          icon: 'list'
        }];
        this.profilePages = [{
          title: 'Profile Settings',
          url: '/profileSettings',
          icon: 'list'
        }, {
          title: 'Profile Settings Alternative',
          url: '/alternativeProfile',
          icon: 'list'
        }];
        this.accountPages = [{
          title: 'Add an Account',
          url: '/addAccount',
          icon: 'list'
        }, {
          title: 'Sign Up',
          url: '/signup',
          icon: 'list'
        }, {
          title: 'Sign Up Alternative',
          url: '/signupAlt',
          icon: 'list'
        }];
        this.formPages = [{
          title: 'Contact Form',
          url: '/contactForm',
          icon: 'list'
        }, {
          title: 'Contact Form Alternative',
          url: '/contactFormAlt',
          icon: 'list'
        }, {
          title: 'Inputs and Validation',
          url: '/inputs',
          icon: 'list'
        }];
        this.cloudPages = [{
          title: 'Cloud',
          url: '/cloud',
          icon: 'list'
        }, {
          title: 'Mail',
          url: '/mail',
          icon: 'list'
        }, {
          title: 'Storage',
          url: '/storage',
          icon: 'list'
        }];
        this.conference = [{
          title: 'Agenda',
          url: '/agenda',
          icon: 'list'
        }, {
          title: 'Sponsors',
          url: '/sponsors',
          icon: 'list'
        }, {
          title: 'Speakers',
          url: '/speakers',
          icon: 'list'
        }, {
          title: 'Speaker Details',
          url: '/speaker-details',
          icon: 'list'
        }, {
          title: 'Session Details',
          url: '/session-details',
          icon: 'list'
        }];
        this.eventPages = [{
          title: 'Calendar Event',
          url: '/calendarEvent',
          icon: 'list'
        }, {
          title: 'Event Details',
          url: '/eventDetails',
          icon: 'list'
        }, {
          title: 'Events List',
          url: '/eventsList',
          icon: 'list'
        }];
        this.commercePages = [{
          title: 'Commerce Home',
          url: '/commerce-home',
          icon: 'list'
        }, {
          title: 'Albums',
          url: '/albums',
          icon: 'list'
        }, {
          title: 'Products',
          url: '/products',
          icon: 'list'
        }, {
          title: 'Product Details',
          url: '/product-details',
          icon: 'list'
        }, {
          title: 'Product Details Second',
          url: '/product-details-second',
          icon: 'list'
        }, {
          title: 'Product Details Third',
          url: '/product-details-third',
          icon: 'list'
        }, {
          title: 'Product Details Fourth',
          url: '/product-details-fourth',
          icon: 'list'
        }, {
          title: 'Products Grid',
          url: '/products-grid',
          icon: 'list'
        }, {
          title: 'Products List',
          url: '/products-list',
          icon: 'list'
        }, {
          title: 'Order History',
          url: '/order-history',
          icon: 'list'
        }, {
          title: 'Cart',
          url: '/cart',
          icon: 'basket'
        }, {
          title: 'Delivery',
          url: '/delivery',
          icon: 'pin'
        }, {
          title: 'Payment',
          url: '/payment',
          icon: 'card'
        }, {
          title: 'Confirmation',
          url: '/confirmation',
          icon: 'checkmark'
        }, {
          title: 'Order Finish',
          url: '/order-finish',
          icon: 'flag'
        }];
        this.socialPages = [{
          title: 'Subscribers',
          url: '/subscribers',
          icon: 'list'
        }, {
          title: 'Friends',
          url: '/friends',
          icon: 'list'
        }, {
          title: 'Followers',
          url: '/followers',
          icon: 'list'
        }];
        this.food = [{
          title: 'Recipes Grid',
          url: '/recipes-grid',
          icon: 'list'
        }, {
          title: 'Recipes List',
          url: '/recipes-list',
          icon: 'list'
        }];
        this.emptyStatePages = [{
          title: 'No Planned Events',
          url: '/emptyeventsfirst',
          icon: 'list'
        }, {
          title: 'No Trips',
          url: '/emptyeventssecond',
          icon: 'list'
        }, {
          title: 'No Events Here',
          url: '/emptyeventsthird',
          icon: 'list'
        }, {
          title: 'Nothing to do',
          url: '/emptyeventsfourth',
          icon: 'list'
        }, {
          title: 'No Trips',
          url: '/emptyeventsfifth',
          icon: 'list'
        }, {
          title: 'No Friends',
          url: '/emptyfriendsfirst',
          icon: 'list'
        }, {
          title: 'More Fun with Friends',
          url: '/emptyfriendssecond',
          icon: 'list'
        }, {
          title: 'Noone Around',
          url: '/emptyfriendsthird',
          icon: 'list'
        }, {
          title: 'Add Some Friends',
          url: '/emptyfriendsfourth',
          icon: 'list'
        }, {
          title: 'Better with Friends',
          url: '/emptyfriendsfifth',
          icon: 'list'
        }, {
          title: 'No Messages',
          url: '/emptyinboxfirst',
          icon: 'list'
        }, {
          title: 'No Chats',
          url: '/emptyinboxsecond',
          icon: 'list'
        }, {
          title: 'No mail',
          url: '/emptyinboxthird',
          icon: 'list'
        }, {
          title: 'Inbox Empty',
          url: '/emptyinboxfourth',
          icon: 'list'
        }, {
          title: 'No Notifications',
          url: '/emptynotificationfirst',
          icon: 'list'
        }, {
          title: 'All Caught Up',
          url: '/emptynotificationsecond',
          icon: 'list'
        }, {
          title: 'You Have None',
          url: '/emptynotificationthird',
          icon: 'list'
        }, {
          title: 'No Notifications',
          url: '/emptynotificationfourth',
          icon: 'list'
        }, {
          title: 'All Caught Up',
          url: '/emptynotificationfifth',
          icon: 'list'
        }, {
          title: 'No Photos',
          url: '/emptyphotosfirst',
          icon: 'list'
        }, {
          title: 'Take Some Pictures',
          url: '/emptyphotossecond',
          icon: 'list'
        }, {
          title: 'No Photos Here',
          url: '/emptyphotosthird',
          icon: 'list'
        }, {
          title: 'It\'s Lonely Here',
          url: '/emptyphotosfourth',
          icon: 'list'
        }, {
          title: 'You have no Pictures',
          url: '/emptyphotosfifth',
          icon: 'list'
        }, {
          title: 'No Purchases',
          url: '/emptypurchasesfirst',
          icon: 'list'
        }, {
          title: 'Buy Some Stuff',
          url: '/emptypurchasessecond',
          icon: 'list'
        }, {
          title: 'Nothing In Here',
          url: '/emptypurchasesthird',
          icon: 'list'
        }, {
          title: 'No Orders',
          url: '/emptypurchasesfourth',
          icon: 'list'
        }, {
          title: 'No Orders',
          url: '/emptypurchasesfifth',
          icon: 'list'
        }, {
          title: 'No Sent Mail',
          url: '/emptysentfirst',
          icon: 'list'
        }, {
          title: 'No Tasks Here',
          url: '/emptytasksfirst',
          icon: 'list'
        }, {
          title: 'No Tasks',
          url: '/emptytaskssecond',
          icon: 'list'
        }, {
          title: 'All Done',
          url: '/emptytasksthird',
          icon: 'list'
        }, {
          title: 'Nothing to do',
          url: '/emptytasksfourth',
          icon: 'list'
        }, {
          title: 'All done',
          url: '/emptytasksfifth',
          icon: 'list'
        }, {
          title: 'No Videos',
          url: '/emptyvideosfirst',
          icon: 'list'
        }, {
          title: 'Record Some Videos',
          url: '/emptyvideossecond',
          icon: 'list'
        }, {
          title: 'No Videos Here',
          url: '/emptyvideosthird',
          icon: 'list'
        }, {
          title: 'No Videos',
          url: '/emptyvideosfourth',
          icon: 'list'
        }, {
          title: 'Add some videos',
          url: '/emptyvideosfifth',
          icon: 'list'
        }, {
          title: 'Oops! No Credits',
          url: '/emptywalletfirst',
          icon: 'list'
        }, {
          title: 'Out of Credit',
          url: '/emptywalletsecond',
          icon: 'list'
        }, {
          title: 'No Payment Methods',
          url: '/emptywalletthird',
          icon: 'list'
        }, {
          title: 'No payment providers',
          url: '/emptywalletfourth',
          icon: 'list'
        }, {
          title: 'Your wallet',
          url: '/emptywalletfifth',
          icon: 'list'
        }];
        this.componentPages = [{
          title: 'Buttons',
          url: '/buttons',
          icon: 'list'
        }, {
          title: 'Dropdowns',
          url: '/dropdowns',
          icon: 'list'
        }, {
          title: 'Toggles and Sliders',
          url: '/selectors',
          icon: 'list'
        }];
        this.enhancedListPages = [{
          title: 'Buttons and Thumb List',
          url: '/thumbButtonsList',
          icon: 'list'
        }, {
          title: 'Buttons and Thumb List Alternative',
          url: '/thumbButtonsListAlt',
          icon: 'list'
        }, {
          title: 'Condensed List',
          url: '/condensedList',
          icon: 'list'
        }, {
          title: 'Condensed Sliding List',
          url: '/condensedSlidingList',
          icon: 'list'
        }, {
          title: 'Grid Tiles',
          url: '/gridTiles',
          icon: 'list'
        }, {
          title: 'Ordered List',
          url: '/orderedList',
          icon: 'list'
        }, {
          title: 'Sliding List',
          url: '/slidingList',
          icon: 'list'
        }, {
          title: 'Thumbnail List',
          url: '/listThumbStart',
          icon: 'list'
        }, {
          title: 'Thumbnail List Clean',
          url: '/listThumbCentered',
          icon: 'list'
        }, {
          title: 'Thumbnail List Reversed',
          url: '/listThumbEnd',
          icon: 'list'
        }];
        this.ionicListPages = [{
          title: 'Avatar List',
          url: '/avatarList',
          icon: 'list'
        }, {
          title: 'Basic List',
          url: '/basicList',
          icon: 'list'
        }, {
          title: 'Dividers List',
          url: '/dividersList',
          icon: 'list'
        }, {
          title: 'Headers List',
          url: '/headersList',
          icon: 'list'
        }, {
          title: 'Icon List',
          url: '/iconList',
          icon: 'list'
        }, {
          title: 'Inset List',
          url: '/insetList',
          icon: 'list'
        }, {
          title: 'Multi-line List',
          url: '/multiLineList',
          icon: 'list'
        }, {
          title: 'No Lines List',
          url: '/noLinesList',
          icon: 'list'
        }, {
          title: 'Sliding List',
          url: '/altSlidingList',
          icon: 'list'
        }, {
          title: 'Thumbnail List',
          url: '/altThumbnailList',
          icon: 'list'
        }];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"], _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]])], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/ngx/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _popover_menu_popover_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./popover-menu/popover-menu.component */
    "./src/app/popover-menu/popover-menu.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _popover_menu_popover_menu_component__WEBPACK_IMPORTED_MODULE_9__["PopoverMenuComponent"]],
      entryComponents: [_popover_menu_popover_menu_component__WEBPACK_IMPORTED_MODULE_9__["PopoverMenuComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/popover-menu/popover-menu.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/popover-menu/popover-menu.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPopoverMenuPopoverMenuComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcG92ZXItbWVudS9wb3BvdmVyLW1lbnUuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/popover-menu/popover-menu.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/popover-menu/popover-menu.component.ts ***!
    \********************************************************/

  /*! exports provided: PopoverMenuComponent */

  /***/
  function srcAppPopoverMenuPopoverMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverMenuComponent", function () {
      return PopoverMenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PopoverMenuComponent = /*#__PURE__*/function () {
      function PopoverMenuComponent() {
        _classCallCheck(this, PopoverMenuComponent);
      }

      _createClass(PopoverMenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PopoverMenuComponent;
    }();

    PopoverMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover-menu',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./popover-menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/popover-menu/popover-menu.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./popover-menu.component.scss */
      "./src/app/popover-menu/popover-menu.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], PopoverMenuComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      theme: 'dark'
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/arielw/dev/purple-app/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map