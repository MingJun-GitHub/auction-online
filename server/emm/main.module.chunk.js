webpackJsonp(["main.module"],{

/***/ "../../../../../src/app/main/main-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.3@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__main_component__["a" /* MainComponent */],
        children: [
            { path: 'alarm', loadChildren: 'app/alarm/alarm.module#AlarmModule' },
            { path: 'application', loadChildren: 'app/application/application.module#ApplicationModule' },
            { path: 'content', loadChildren: 'app/content/content.module#ContentModule' },
            { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
            { path: 'device', loadChildren: 'app/device/device.module#DeviceModule' },
            { path: 'policy', loadChildren: 'app/policy/policy.module#PolicyModule' },
            { path: 'push', loadChildren: 'app/push/push.module#PushModule' },
            { path: 'setting', loadChildren: 'app/setting/setting.module#SettingModule' },
            { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
        ]
    }
];
var MainRoutingModule = (function () {
    function MainRoutingModule() {
    }
    MainRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], MainRoutingModule);
    return MainRoutingModule;
}());

//# sourceMappingURL=main-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<nz-layout class=\"main-layout\" appCustomScrollbar>\n  <nz-header class=\"main-top-header\">\n    <div class=\"main-logo\"></div>\n    <ul nz-menu [nzMode]=\"'horizontal'\" class=\"main-top-nav\">\n      <li nz-submenu>\n        <span title>{{currentLangStr}}<i class=\"anticon anticon-down\"></i></span>\n        <ul>\n          <li nz-menu-item (click)=\"changeLang('zh')\">简体中文</li>\n          <li nz-menu-item (click)=\"changeLang('en')\">English</li>\n        </ul>\n      </li>\n      <li nz-menu-item><i class=\"anticon anticon-user\"></i>Fuybooo</li>\n      <li nz-menu-item (click)=\"logout()\"><i class=\"anticon anticon-logout ml5\"></i>{{'logout' | translate}}</li>\n      <li nz-menu-item><i class=\"anticon anticon-lock ml5\"></i>{{'edit_password' | translate}}</li>\n    </ul>\n  </nz-header>\n  <nz-header class=\"main-header\">\n    <ul nz-menu [nzMode]=\"'horizontal'\" class=\"main-nav\">\n      <ng-container *ngFor=\"let m of menu;\">\n        <li nz-submenu *ngIf=\"m.isParent\" (click)=\"changeRouter(m)\">\n          <span title>{{m.code | translate}}<i class=\"anticon anticon-down\"></i></span>\n          <ul *ngIf=\"m.isParent\">\n            <li nz-menu-item *ngFor=\"let _m of m.children;\" (click)=\"changeRouter(_m)\" [nzSelected]=\"_m.isActive\">{{_m.code | translate}}</li>\n          </ul>\n        </li>\n        <li nz-menu-item *ngIf=\"!m.isParent\" (click)=\"changeRouter(m)\" [nzSelected]=\"m.isActive\">{{m.code | translate}}</li>\n      </ng-container>\n    </ul>\n    <div class=\"main-header-btn-wrap\">\n      <button nz-button [nzType]=\"'primary'\">\n        <span>{{'my_application' | translate}}</span>\n      </button>\n    </div>\n  </nz-header>\n  <nz-header class=\"main-breadcrumb-header\">\n    <nz-breadcrumb [nzSeparator]=\"' > '\">\n      <nz-breadcrumb-item (click)=\"changeRouter()\" class=\"main-home-breadcrumb\">{{'home' | translate}}</nz-breadcrumb-item>\n      <nz-breadcrumb-item *ngFor=\"let b of breadcrumb;\">{{b | translate}}</nz-breadcrumb-item>\n    </nz-breadcrumb>\n  </nz-header>\n  <nz-content class=\"main-content\">\n    <div class=\"main-content-container\">\n      <router-outlet></router-outlet>\n    </div>\n  </nz-content>\n  <nz-footer class=\"main-footer\">Quarkdata ThunderEMM 2017-2018</nz-footer>\n</nz-layout>\n\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export langMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.3@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__("../../../../_@ngx-translate_core@8.0.0@@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var langMap = {
    zh: '简体中文',
    en: 'English'
};
var MainComponent = (function () {
    function MainComponent(router, translateService) {
        this.router = router;
        this.translateService = translateService;
        this.defaultMenu = {
            name: '仪表盘',
            code: 'dashboard',
            key: 'alarm',
            url: '/app/dashboard'
        };
        this.breadcrumb = ['dashboard'];
        this.menu = [
            {
                name: '告警板',
                code: 'alarm_board',
                key: 'alarm',
                isParent: true,
                children: [
                    {
                        name: '敏感词',
                        code: 'alarm_sensitive_word',
                        key: 'sensitiveWord',
                        url: '/app/sensitiveWord'
                    },
                    {
                        name: '违规设备',
                        code: 'alarm_illegal_device',
                        key: 'alarm',
                        url: '/app/sensitiveWord'
                    },
                    {
                        name: '违规网址',
                        code: 'alarm_illegal_url',
                        key: 'alarm',
                        url: ''
                    },
                ]
            },
            {
                name: '仪表盘',
                code: 'dashboard',
                key: 'alarm',
                url: '/app/dashboard'
            },
            {
                name: '用户管理',
                code: 'user_management',
                key: 'alarm',
                isParent: true,
                children: [
                    {
                        name: '用户',
                        code: 'user_list',
                        key: 'alarm',
                        url: '/app/user/user'
                    },
                    {
                        name: '部门',
                        code: 'department',
                        key: 'alarm',
                        url: '/app/user/department'
                    }
                ]
            },
            {
                name: '应用管理',
                code: 'application_management',
                key: 'alarm',
                isParent: true,
                children: [
                    {
                        name: '应用列表',
                        code: 'application_list',
                        key: 'alarm',
                        url: ''
                    },
                    {
                        name: '应用分类',
                        code: 'application_category',
                        key: 'alarm',
                        url: ''
                    }
                ]
            },
            {
                name: '设备管理',
                code: 'device_management',
                key: 'alarm',
                url: '/app/device'
            },
            {
                name: '策略管理',
                code: 'policy_management',
                key: 'alarm',
                isParent: true,
                children: [
                    {
                        name: '策略列表',
                        code: 'policy_list',
                        key: 'alarm',
                        url: ''
                    },
                    {
                        name: '默认策略',
                        code: 'policy_default',
                        key: 'alarm',
                        url: '/app/policy/policyDefault'
                    },
                    {
                        name: '违规策略',
                        code: 'policy_illegal',
                        key: 'alarm',
                        url: ''
                    },
                ]
            },
            {
                name: '内容管理',
                code: 'content_management',
                key: 'alarm',
                isParent: true,
                children: [
                    {
                        name: '内容列表',
                        code: 'content_list',
                        key: 'alarm',
                        url: ''
                    },
                    {
                        name: '内容分类',
                        code: 'content_category',
                        key: 'alarm',
                        url: ''
                    }
                ]
            },
            {
                name: '推送管理',
                code: 'push_management',
                key: 'alarm',
                isParent: true,
                children: [
                    {
                        name: '推送列表',
                        code: 'push_list',
                        key: 'alarm',
                        url: ''
                    },
                    {
                        name: '推送分类',
                        code: 'push_category',
                        key: 'alarm',
                        url: ''
                    }
                ]
            },
            {
                name: '设置',
                code: 'setting',
                key: 'alarm',
                isParent: true,
                children: [
                    {
                        name: '日志',
                        code: 'setting_log',
                        key: 'alarm',
                        url: ''
                    },
                    {
                        name: 'LOGO',
                        code: 'setting_logo',
                        key: 'alarm',
                        url: ''
                    },
                    {
                        name: '系统设置',
                        code: 'setting_system',
                        key: 'alarm',
                        url: ''
                    },
                ]
            },
        ];
    }
    MainComponent.prototype.ngOnInit = function () {
        this.currentLangStr = langMap[this.translateService.currentLang];
        this.resetMenu();
    };
    MainComponent.prototype.changeRouter = function (m) {
        if (m === void 0) { m = this.defaultMenu; }
        if (!m.isParent) {
            this.router.navigate([m.url]);
            this.resetMenu(m.url);
        }
    };
    MainComponent.prototype.clearMenu = function () {
        for (var _i = 0, _a = this.menu; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.children) {
                for (var _b = 0, _c = m.children; _b < _c.length; _b++) {
                    var _m = _c[_b];
                    if (_m.isActive) {
                        _m.isActive = false;
                        m.isActive = false;
                        return;
                    }
                }
            }
            else {
                if (m.isActive) {
                    m.isActive = false;
                    return;
                }
            }
        }
    };
    MainComponent.prototype.resetMenu = function (current) {
        var currentRouter = this.router.routerState.snapshot.url;
        if (!current) {
            if (currentRouter) {
                current = currentRouter;
            }
            else {
                current = this.defaultMenu.url;
            }
        }
        this.clearMenu();
        for (var _i = 0, _a = this.menu; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.children) {
                for (var _b = 0, _c = m.children; _b < _c.length; _b++) {
                    var _m = _c[_b];
                    if (_m.url === current) {
                        _m.isActive = true;
                        m.isActive = true;
                        this.breadcrumb = [
                            m.code,
                            _m.code
                        ];
                        return;
                    }
                }
            }
            else {
                if (m.url === current) {
                    m.isActive = true;
                    this.breadcrumb = [m.code];
                    return;
                }
            }
        }
    };
    MainComponent.prototype.logout = function () {
        this.router.navigate(['/login']);
    };
    MainComponent.prototype.changeLang = function (lang) {
        this.translateService.use(lang);
        localStorage.setItem('currentLang', lang);
        this.currentLangStr = langMap[lang];
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]) === "function" && _b || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());

//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_routing_module__ = __webpack_require__("../../../../../src/app/main/main-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MainModule = (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__main_component__["a" /* MainComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__main_routing_module__["a" /* MainRoutingModule */]
            ]
        })
    ], MainModule);
    return MainModule;
}());

//# sourceMappingURL=main.module.js.map

/***/ })

});
//# sourceMappingURL=main.module.chunk.js.map