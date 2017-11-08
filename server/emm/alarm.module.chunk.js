webpackJsonp(["alarm.module"],{

/***/ "../../../../../src/app/alarm/alarm.component.html":
/***/ (function(module, exports) {

module.exports = "<div>alarm works\n  <button nz-button [nzType]=\"'primary'\">\n    <span>alarm</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/alarm/alarm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlarmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AlarmComponent = (function () {
    function AlarmComponent() {
    }
    AlarmComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-alarm',
            template: __webpack_require__("../../../../../src/app/alarm/alarm.component.html")
        })
    ], AlarmComponent);
    return AlarmComponent;
}());

//# sourceMappingURL=alarm.component.js.map

/***/ }),

/***/ "../../../../../src/app/alarm/alarm.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlarmModule", function() { return AlarmModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alarm_component__ = __webpack_require__("../../../../../src/app/alarm/alarm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.3@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlarmModule = (function () {
    function AlarmModule() {
    }
    AlarmModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__alarm_component__["a" /* AlarmComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([{ path: '', component: __WEBPACK_IMPORTED_MODULE_1__alarm_component__["a" /* AlarmComponent */] }])
            ]
        })
    ], AlarmModule);
    return AlarmModule;
}());

//# sourceMappingURL=alarm.module.js.map

/***/ })

});
//# sourceMappingURL=alarm.module.chunk.js.map