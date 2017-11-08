webpackJsonp(["policy.module"],{

/***/ "../../../../../src/app/policy/policy-default.component.html":
/***/ (function(module, exports) {

module.exports = "<div>policyDefault works</div>\n"

/***/ }),

/***/ "../../../../../src/app/policy/policy-default.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyDefaultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PolicyDefaultComponent = (function () {
    function PolicyDefaultComponent() {
    }
    PolicyDefaultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-policy-default',
            template: __webpack_require__("../../../../../src/app/policy/policy-default.component.html")
        })
    ], PolicyDefaultComponent);
    return PolicyDefaultComponent;
}());

//# sourceMappingURL=policy-default.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy/policy.component.html":
/***/ (function(module, exports) {

module.exports = "<div>policy works</div>\n"

/***/ }),

/***/ "../../../../../src/app/policy/policy.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PolicyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PolicyComponent = (function () {
    function PolicyComponent() {
    }
    PolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-policy',
            template: __webpack_require__("../../../../../src/app/policy/policy.component.html")
        })
    ], PolicyComponent);
    return PolicyComponent;
}());

//# sourceMappingURL=policy.component.js.map

/***/ }),

/***/ "../../../../../src/app/policy/policy.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyModule", function() { return PolicyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__policy_component__ = __webpack_require__("../../../../../src/app/policy/policy.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.3@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__policy_default_component__ = __webpack_require__("../../../../../src/app/policy/policy-default.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PolicyModule = (function () {
    function PolicyModule() {
    }
    PolicyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__policy_component__["a" /* PolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_3__policy_default_component__["a" /* PolicyDefaultComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__policy_component__["a" /* PolicyComponent */] },
                    { path: 'policyDefault', component: __WEBPACK_IMPORTED_MODULE_3__policy_default_component__["a" /* PolicyDefaultComponent */] },
                ])
            ]
        })
    ], PolicyModule);
    return PolicyModule;
}());

//# sourceMappingURL=policy.module.js.map

/***/ })

});
//# sourceMappingURL=policy.module.chunk.js.map