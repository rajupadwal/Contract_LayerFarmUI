(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/config.ts":
/*!***********************!*\
  !*** ./src/config.ts ***!
  \***********************/
/*! exports provided: API_URL, APP_CONSTANT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONSTANT", function() { return APP_CONSTANT; });
var API_URL = "http://localhost:1072/api/";
var APP_CONSTANT = {
    USER_APIS: {
        LOGIN: API_URL + "user/login"
    },
    DPR_APIS: {
        GETALL_ITEMGROUP_DETAILS: API_URL + "DPR/GetAllItemGroupDetails",
        SAVE_DPR_DETAILS: API_URL + "DPR/SaveDPRDetails",
        GET_ALL_DPRS: API_URL + "DPR/GetAllDPRDetails"
    }
};


/***/ })

}]);
//# sourceMappingURL=common.js.map