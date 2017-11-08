webpackJsonp(["device.module"],{

/***/ "../../../../../src/app/device/device-group/device-group-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form nz-form [formGroup]=\"deviceGroupForm\">\n    <div nz-form-item nz-row>\n      <div nz-form-label nz-col [nzSpan]=\"7\">\n        <label nz-form-item-required>设备组名称</label>\n      </div>\n      <div nz-col [nzSpan]=\"12\" nz-form-control [nzValidateStatus]=\"getFormControl('groupName')\" nzHasFeedback>\n        <nz-input formControlName=\"groupName\" [nzType]=\"'text'\"\n                  [nzPlaceHolder]=\"'请输入设备组名称，最多不超过30个字'\" [nzSize]=\"'large'\">\n        </nz-input>\n        <div nz-form-explain *ngIf=\"getFormControl('groupName').dirty&&getFormControl('groupName').hasError('required')\">\n          请输入设备组名称！\n        </div>\n        <div nz-form-explain *ngIf=\"getFormControl('groupName').dirty&&getFormControl('groupName').hasError('maxlength')\">\n          设备组名称不能超过30个字！\n        </div>\n        <div nz-form-explain *ngIf=\"getFormControl('groupName').dirty&&getFormControl('groupName').hasError('duplicated')\">\n          设备组名称是重复的！\n        </div>\n        <div nz-form-explain *ngIf=\"getFormControl('groupName').dirty&&getFormControl('groupName').pending\">\n          验证中...\n        </div>\n      </div>\n    </div>\n    <div nz-form-item nz-row>\n      <div nz-col [nzSpan]=\"7\" nz-form-label>\n        <label>设备组描述</label>\n      </div>\n      <div nz-col [nzSpan]=\"12\" nz-form-control [nzValidateStatus]=\"getFormControl('groupDesc')\" nzHasFeedback>\n        <nz-input formControlName=\"groupDesc\" [nzRows]=\"3\" [nzType]=\"'textarea'\"\n                  [nzPlaceHolder]=\"'请输入设备组描述，最多不超过200个字'\" [nzSize]=\"'large'\">\n        </nz-input>\n        <div nz-form-explain *ngIf=\"getFormControl('groupDesc').dirty&&getFormControl('groupDesc').hasError('maxlength')\">\n          设备组描述不能超过200个字\n        </div>\n      </div>\n    </div>\n    <div nz-form-item nz-row>\n      <div nz-col [nzOffset]=\"16\" [nzSpan]=\"8\" nz-form-control>\n        <button nz-button [nzType]=\"'primary'\" [nzSize]=\"'large'\" [disabled]=\"!deviceGroupForm.valid\" (click)=\"emitDataOutside($event)\">提交</button>\n        <button nz-button [nzSize]=\"'large'\" (click)=\"handleCancel($event)\">取消</button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/device/device-group/device-group-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceGroupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.2@ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../../_@angular_forms@4.4.3@@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_service__ = __webpack_require__("../../../../../src/app/device/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../_rxjs@5.4.3@rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeviceGroupFormComponent = (function () {
    function DeviceGroupFormComponent(subject, fb, deviceService) {
        this.subject = subject;
        this.fb = fb;
        this.deviceService = deviceService;
        this.group = { name: '', desc: '' };
    }
    DeviceGroupFormComponent.prototype.ngOnInit = function () {
        this.subject.on('onDestory', function () {
            console.log('destroy');
        });
        // 注意：输入属性的取值只能在ngOnInit中，如果在constructor中，则只能取到undefined
        this.deviceGroupForm = this.fb.group({
            groupName: [this.group.name, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(30)], [this.groupNameSyncValidator(this)]],
            groupDesc: [this.group.desc, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].maxLength(200)]]
        });
    };
    DeviceGroupFormComponent.prototype.emitDataOutside = function () {
        this.subject.next(this.deviceGroupForm);
    };
    DeviceGroupFormComponent.prototype.handleCancel = function (e) {
        this.subject.destroy('onCancel');
    };
    DeviceGroupFormComponent.prototype.getFormControl = function (name) {
        return this.deviceGroupForm.controls[name];
    };
    DeviceGroupFormComponent.prototype.groupNameSyncValidator = function (_this) {
        return function (control) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].create(function (observer) {
                _this.deviceService.validateDeviceGroupName(control.value).subscribe(function (res) {
                    if (res.code === 1) {
                        observer.next({ error: true, duplicated: true });
                    }
                    else {
                        observer.next(null);
                    }
                    observer.complete();
                });
            });
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DeviceGroupFormComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DeviceGroupFormComponent.prototype, "group", void 0);
    DeviceGroupFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-device-group-form',
            template: __webpack_require__("../../../../../src/app/device/device-group/device-group-form.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["d" /* NzModalSubject */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ng_zorro_antd__["d" /* NzModalSubject */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__device_service__["a" /* DeviceService */]) === "function" && _c || Object])
    ], DeviceGroupFormComponent);
    return DeviceGroupFormComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=device-group-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/device/device-group/device-group.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"content-section-title\">{{'device_group' | translate}}</div>\n  <nz-table class=\"content-table\" #nzTable [nzDataSource]=\"data\" [nzIsPagination]=\"false\">\n    <tbody nz-tbody>\n      <ng-template ngFor let-data [ngForOf]=\"nzTable.data\">\n        <ng-template ngFor let-item [ngForOf]=\"expandDataCache[data.key]\">\n          <tr nz-tbody-tr *ngIf=\"(item.parent&&item.parent.expand)||!(item.parent)\">\n            <td nz-td [nzCheckbox]=\"true\">\n              <label nz-checkbox (click)=\"onClickChangeChecked(item)\">\n              </label>\n            </td>\n            <td nz-td>\n              <nz-row-indent [nzIndentSize]=\"item.level\"></nz-row-indent>\n              <nz-row-expand-icon [(nzExpand)]=\"item.expand\"\n                                  (nzExpandChange)=\"collapse(expandDataCache[data.key],item,$event)\"\n                                  [nzShowExpand]=\"!item.children\"></nz-row-expand-icon>\n              <i class=\"anticon mr3\" [class.anticon-folder]=\"!item.expand\" [class.anticon-folder-open]=\"item.expand\"></i>\n              {{item.name}}\n            </td>\n            <td nz-td (mouseenter)=\"item.isEditVisible=true;\"\n                      (mouseleave)=\"item.isEditVisible=false;\"\n                      (click)=\"popupEditGroup(item)\">\n              <i class=\"anticon anticon-edit anticon-click\"\n                 title=\"{{'edit' | translate}}\"\n                         [class.vv]=\"item.isEditVisible\"\n                         [class.vh]=\"!item.isEditVisible\"></i>\n            </td>\n            <td nz-td><i class=\"anticon anticon-delete anticon-click\" title=\"{{'delete' | translate}}\"></i></td>\n            <td nz-td>{{item.deviceCount}}</td>\n          </tr>\n        </ng-template>\n      </ng-template>\n    </tbody>\n  </nz-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/device/device-group/device-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_group_form_component__ = __webpack_require__("../../../../../src/app/device/device-group/device-group-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.2@ng-zorro-antd/esm5/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceGroupComponent = (function () {
    function DeviceGroupComponent(modalService) {
        this.modalService = modalService;
        this.data = [
            {
                key: 1,
                name: 'All Devices',
                deviceCount: 60,
                children: [
                    {
                        key: 11,
                        name: 'device group 1',
                        deviceCount: 42,
                    }, {
                        key: 12,
                        name: 'device group 2',
                        deviceCount: 30,
                        children: [
                            {
                                key: 121,
                                name: 'device group 21',
                                deviceCount: 16,
                            }
                        ],
                    }, {
                        key: 13,
                        name: 'device group 3',
                        deviceCount: 72,
                        children: [
                            {
                                key: 131,
                                name: 'device group 31',
                                deviceCount: 42,
                                children: [
                                    {
                                        key: 1311,
                                        name: 'device group 311',
                                        deviceCount: 25,
                                    }, {
                                        key: 1312,
                                        name: 'device group 312',
                                        deviceCount: 18,
                                    }
                                ],
                            }
                        ],
                    }
                ],
            },
        ];
        this.expandDataCache = {};
        this.deviceGroupCheckData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    DeviceGroupComponent.prototype.collapse = function (array, data, $event) {
        var _this = this;
        if ($event === false) {
            if (data.children) {
                data.children.forEach(function (d) {
                    var target = array.find(function (a) { return a.key === d.key; });
                    target.expand = false;
                    _this.collapse(array, target, false);
                });
            }
            else {
                return;
            }
        }
    };
    DeviceGroupComponent.prototype.convertTreeToList = function (root) {
        var stack = [], array = [], hashMap = {};
        stack.push(__assign({}, root, { level: 0, expand: false }));
        while (stack.length !== 0) {
            var node = stack.pop();
            this.visitNode(node, hashMap, array);
            if (node.children) {
                for (var i = node.children.length - 1; i >= 0; i--) {
                    stack.push(__assign({}, node.children[i], { level: node.level + 1, expand: false, parent: node }));
                }
            }
        }
        return array;
    };
    DeviceGroupComponent.prototype.visitNode = function (node, hashMap, array) {
        if (!hashMap[node.key]) {
            hashMap[node.key] = true;
            array.push(node);
        }
    };
    DeviceGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.forEach(function (item) {
            _this.expandDataCache[item.key] = _this.convertTreeToList(item);
        });
    };
    DeviceGroupComponent.prototype.onClickChangeChecked = function (item) {
        item.isChecked = !item.isChecked;
        console.log('子组件数据：', this.expandDataCache);
        this.deviceGroupCheckData.emit(this.expandDataCache);
    };
    DeviceGroupComponent.prototype.popupEditGroup = function (item) {
        console.log('准备输入的属性：', item);
        this.modalService.open({
            title: '修改设备分组',
            content: __WEBPACK_IMPORTED_MODULE_1__device_group_form_component__["a" /* DeviceGroupFormComponent */],
            onOk: function () {
            },
            onCancel: function () {
            },
            footer: false,
            componentParams: {
                type: 'edit',
                group: item
            }
        }).subscribe(function (result) {
            // 接受弹出层中传来的数据
            console.log(result);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], DeviceGroupComponent.prototype, "expandDataCache", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], DeviceGroupComponent.prototype, "deviceGroupCheckData", void 0);
    DeviceGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-device-group',
            template: __webpack_require__("../../../../../src/app/device/device-group/device-group.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzModalService */]) === "function" && _a || Object])
    ], DeviceGroupComponent);
    return DeviceGroupComponent;
    var _a;
}());

//# sourceMappingURL=device-group.component.js.map

/***/ }),

/***/ "../../../../../src/app/device/device.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"pt20\">\n  <div class=\"summary-panel\" nz-row [nzGutter]=\"8\">\n    <div nz-col [nzSpan]=\"6\">\n      <ul class=\"panel mr10\">\n        <li class=\"panel-title\">{{'state_panel' | translate}}</li>\n        <li class=\"panel-item\" *ngIf=\"devicePanel.status.logged !== undefined\" (click)=\"search('status', 'logged')\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-login mr8\"></i>{{'login' | translate}}\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.status.logged}}</span>\n        </li>\n        <li class=\"panel-item\" *ngIf=\"devicePanel.status.logout !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-logout mr8\"></i>{{'logout' | translate}}\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.status.logout}}</span>\n        </li>\n        <li class=\"panel-item\" *ngIf=\"devicePanel.status.unactivated !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-poweroff mr8\"></i>{{'unactivated' | translate}}\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.status.unactivated}}</span>\n        </li>\n        <li class=\"panel-item\" *ngIf=\"devicePanel.status.recovery !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-retweet mr8\"></i>{{'recovery' | translate}}\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.status.recovery}}</span>\n        </li>\n      </ul>\n    </div>\n    <div nz-col [nzSpan]=\"6\">\n      <ul class=\"panel m010\">\n        <li class=\"panel-title\">{{'security_panel' | translate}}</li>\n        <li class=\"panel-item panel-item-2\" *ngIf=\"devicePanel.security.locked !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-lock mr8\"></i>{{'locked' | translate}}\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.security.locked}}</span>\n        </li>\n        <li class=\"panel-item panel-item-2\" *ngIf=\"devicePanel.security.breakout !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-exclamation-circle-o mr8\"></i>{{'root_breakout' | translate}}\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.security.breakout}}</span>\n        </li>\n      </ul>\n    </div>\n    <div nz-col [nzSpan]=\"6\">\n      <ul class=\"panel m010\">\n        <li class=\"panel-title\">{{'system_panel' | translate}}</li>\n        <li class=\"panel-item\" *ngIf=\"devicePanel.system.android !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-android mr8\"></i>Android\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.system.android}}</span>\n        </li>\n        <li class=\"panel-item\" *ngIf=\"devicePanel.system.ios !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-apple mr8\"></i>iOS\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.system.ios}}</span>\n        </li>\n        <li class=\"panel-item\" *ngIf=\"devicePanel.system.windows !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-windows mr8\"></i>Windows\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.system.windows}}</span>\n        </li>\n        <li class=\"panel-item\" *ngIf=\"devicePanel.system.macOS !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-apple-o mr8\"></i>macOS\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.system.macOS}}</span>\n        </li>\n      </ul>\n    </div>\n    <div nz-col [nzSpan]=\"6\">\n      <ul class=\"panel ml10\">\n        <li class=\"panel-title\">{{'activity_panel' | translate}}</li>\n        <li class=\"panel-item panel-item-2\" *ngIf=\"devicePanel.activity.online !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-check-circle mr8\"></i>{{'online' | translate}}\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.activity.online}}</span>\n        </li>\n        <li class=\"panel-item panel-item-2\" *ngIf=\"devicePanel.activity.offline !== undefined\">\n          <span class=\"panel-desc-box\">\n            <i class=\"anticon anticon-minus-circle-o mr8\"></i>{{'offline' | translate}}\n          </span>\n          <span class=\"panel-desc-value\">{{devicePanel.activity.offline}}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"content-wrap mt20\">\n    <div class=\"search-wrap p10\">\n      <div nz-row [nzGutter]=\"8\">\n        <div nz-col [nzSpan]=\"18\">\n          <nz-input [nzType]=\"'search'\" [nzPlaceHolder]=\"'search_placeholder' | translate\" [(ngModel)]=\"searchWord\"></nz-input>\n          <button nz-button [nzType]=\"'default'\" (click)=\"popupDeviceTrail()\">\n            <span><i class=\"anticon anticon-environment-o mr8\"></i>{{'device_place' | translate}}</span>\n          </button>\n          <button nz-button [nzType]=\"'default'\">\n            <span><i class=\"anticon anticon-right-square-o mr8\"></i>{{'move' | translate}}</span>\n          </button>\n        </div>\n        <div nz-col class=\" tar\" [nzSpan]=\"6\">\n          <label>{{'brand' | translate}}</label>\n          <nz-select class=\"w150\"\n                     [nzPlaceHolder]=\"'please_select_brand' | translate\"\n                     [(ngModel)]=\"selectedBrand\">\n            <nz-option\n              *ngFor=\"let option of brandOptions\"\n              [nzLabel]=\"option.label\"\n              [nzValue]=\"option.value\">\n            </nz-option>\n          </nz-select>\n        </div>\n      </div>\n    </div>\n    <div class=\"operate-btn-group pl10\">\n      <div nz-row [nzGutter]=\"8\">\n        <div nz-col class=\"operate-left-side p10\" [nzSpan]=\"6\">\n          <button nz-button [nzType]=\"'default'\" (click)=\"popupAddGroup()\">\n            <span><i class=\"anticon anticon-plus mr8\"></i>{{'add_group' | translate}}</span>\n          </button>\n          <button nz-button [nzType]=\"'default'\" (click)=\"popupDeleteGroup()\">\n            <span><i class=\"anticon anticon-delete mr8\"></i>{{'batch_delete' | translate}}</span>\n          </button>\n          <button nz-button [nzType]=\"'default'\">\n            <span><i class=\"anticon anticon-ellipsis\"></i></span>\n          </button>\n        </div>\n        <div nz-col class=\"p10\" [nzSpan]=\"18\">\n          <button nz-button [nzType]=\"'default'\">\n            <span><i class=\"anticon anticon-plus mr8\"></i>{{'add_device' | translate}}</span>\n          </button>\n          <button nz-button [nzType]=\"'default'\" (click)=\"popupDeleteDevice()\">\n            <span><i class=\"anticon anticon-delete mr8\"></i>{{'batch_remove' | translate}}</span>\n          </button>\n          <button nz-button [nzType]=\"'default'\">\n            <span><i class=\"anticon anticon-upload mr8\"></i>{{'batch_import' | translate}}</span>\n          </button>\n          <button nz-button [nzType]=\"'default'\">\n            <span><i class=\"anticon anticon-download mr8\"></i>{{'batch_export' | translate}}</span>\n          </button>\n          <nz-dropdown>\n            <button nz-button nz-dropdown><span>{{'more_operate' | translate}}</span> <i class=\"anticon anticon-down\"></i></button>\n            <ul nz-menu>\n              <li nz-menu-item>\n                <a href=\"javascript:void(0);\">aaa</a>\n              </li>\n              <li nz-menu-item>\n                <a href=\"javascript:void(0);\">bbb</a>\n              </li>\n              <li nz-menu-item>\n                <a href=\"javascript:void(0);\">bbb</a>\n              </li>\n            </ul>\n          </nz-dropdown>\n        </div>\n      </div>\n    </div>\n    <div class=\"list-content pl10\">\n      <div nz-row [nzGutter]=\"8\">\n        <div nz-col class=\"list-content-group pl10\" [nzSpan]=\"6\">\n          <app-device-group (deviceGroupCheckData)=\"onChangeDeviceGroupCheckData($event)\"></app-device-group>\n        </div>\n        <div nz-col class=\"list-content-list pl10\" [nzSpan]=\"8\">\n          <app-device-list [(params)]=\"params\" (deviceDataEmitter)=\"onChangeDeviceCheckData($event)\"></app-device-list>\n        </div>\n        <div nz-col class=\"list-content-detail pl10 w_41_3i\" [nzSpan]=\"10\">\n          <app-device-detail></app-device-detail>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/device/device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_group_device_group_form_component__ = __webpack_require__("../../../../../src/app/device/device-group/device-group-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__ = __webpack_require__("../../../../_ng-zorro-antd@0.5.2@ng-zorro-antd/esm5/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service_message_service__ = __webpack_require__("../../../../../src/app/shared/service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_device_trail_component__ = __webpack_require__("../../../../../src/app/device/device/device-trail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__("../../../../_@ngx-translate_core@8.0.0@@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeviceComponent = (function () {
    function DeviceComponent(modalService, messageService, translateService) {
        this.modalService = modalService;
        this.messageService = messageService;
        this.translateService = translateService;
        // 查询条件
        this.params = {};
        this.devicePanel = {
            status: {
                logged: 12,
                logout: 15,
                unactivated: 18,
                recovery: 2,
            },
            security: {
                locked: 10,
                breakout: 12
            },
            system: {
                android: 12,
                ios: 1,
                windows: 34,
                macOS: 1
            },
            activity: {
                online: 200,
                offline: 1
            }
        };
        this.selectedBrand = '';
        this.brandOptions = [
            {
                value: '',
                label: '全部'
            },
            {
                value: '1',
                label: '苹果X'
            },
            {
                value: '2',
                label: '华为1'
            },
            {
                value: '3',
                label: '小米2'
            }
        ];
    }
    DeviceComponent.prototype.isDeviceListCheckedChange = function (event) {
    };
    DeviceComponent.prototype.popupAddGroup = function () {
        this.modalService.open({
            title: '添加设备分组',
            content: __WEBPACK_IMPORTED_MODULE_1__device_group_device_group_form_component__["a" /* DeviceGroupFormComponent */],
            onOk: function () {
            },
            onCancel: function () {
            },
            footer: false,
            componentParams: {
                type: 'add'
            }
        }).subscribe(function (result) {
            // 接受弹出层中传来的数据
            console.log(result);
        });
    };
    DeviceComponent.prototype.popupDeleteGroup = function () {
        var checkedArray = this.getCheckedData(this.groupData);
        if (checkedArray.length === 0) {
            this.messageService.info('请选择要删除的设备组');
            return;
        }
        this.modalService.confirm({
            title: '您是否确认要删除选中的' + checkedArray.length + '',
            content: '分组删除后，<span class="text-primary">这些分组下的设备不会被删除</span>。',
            showConfirmLoading: true,
            okText: this.translateService.instant('ok'),
            cancelText: this.translateService.instant('cancel'),
            onOk: function () {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        console.log('点击确定');
                        resolve();
                    }, 2000);
                });
            },
            onCancel: function () {
            },
        });
    };
    DeviceComponent.prototype.popupDeleteDevice = function () {
        var checkedArray = this.getCheckedData(this.deviceData);
        console.log('选中的设备信息：', checkedArray);
        if (checkedArray.length === 0) {
            this.messageService.info('请选择要删除的设备');
            return;
        }
    };
    DeviceComponent.prototype.popupDeviceTrail = function () {
        this.modalService.open({
            title: '查看设备位置信息',
            content: __WEBPACK_IMPORTED_MODULE_4__device_device_trail_component__["a" /* DeviceTrailComponent */],
            footer: false,
            width: 1200,
        });
    };
    /**
     * 监听设备组变化情况
     */
    DeviceComponent.prototype.onChangeDeviceGroupCheckData = function (groupData) {
        console.log('父组件监听设备组变化情况:', groupData);
        this.groupData = groupData['1'];
    };
    DeviceComponent.prototype.onChangeDeviceCheckData = function (deviceData) {
        console.log('父组件监听设备变化情况:', deviceData);
        this.deviceData = deviceData;
    };
    /**
     * 获取所有选中的设备组
     */
    DeviceComponent.prototype.getCheckedData = function (list) {
        var checkedArray = [];
        for (var i = 0; list && i < list.length; i++) {
            var item = list[i];
            if (item.isChecked) {
                checkedArray.push(item);
            }
        }
        return checkedArray;
    };
    /**
     * 查询数据
     */
    DeviceComponent.prototype.search = function (field, condition) {
        this.params = (_a = {}, _a[field] = condition, _a);
        var _a;
    };
    DeviceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-device',
            template: __webpack_require__("../../../../../src/app/device/device.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng_zorro_antd__["c" /* NzModalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_service_message_service__["a" /* MessageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_service_message_service__["a" /* MessageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]) === "function" && _c || Object])
    ], DeviceComponent);
    return DeviceComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=device.component.js.map

/***/ }),

/***/ "../../../../../src/app/device/device.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bgcs; });
var bgcs = [
    '#25C3FF',
    '#FFA88C',
    '#62E7CA',
    '#9998FE',
    '#E5E5E5',
];
//# sourceMappingURL=device.model.js.map

/***/ }),

/***/ "../../../../../src/app/device/device.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceModule", function() { return DeviceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_component__ = __webpack_require__("../../../../../src/app/device/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../../_@angular_router@4.4.3@@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_device_detail_component__ = __webpack_require__("../../../../../src/app/device/device/device-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__device_device_list_component__ = __webpack_require__("../../../../../src/app/device/device/device-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__device_group_device_group_component__ = __webpack_require__("../../../../../src/app/device/device-group/device-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__device_service__ = __webpack_require__("../../../../../src/app/device/device.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__device_group_device_group_form_component__ = __webpack_require__("../../../../../src/app/device/device-group/device-group-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__device_device_trail_component__ = __webpack_require__("../../../../../src/app/device/device/device-trail.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DeviceModule = (function () {
    function DeviceModule() {
    }
    DeviceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__device_component__["a" /* DeviceComponent */],
                __WEBPACK_IMPORTED_MODULE_4__device_device_detail_component__["a" /* DeviceDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_5__device_device_list_component__["a" /* DeviceListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__device_group_device_group_component__["a" /* DeviceGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__device_group_device_group_form_component__["a" /* DeviceGroupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__device_device_trail_component__["a" /* DeviceTrailComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__device_service__["a" /* DeviceService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__device_group_device_group_form_component__["a" /* DeviceGroupFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__device_device_trail_component__["a" /* DeviceTrailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild([{ path: '', component: __WEBPACK_IMPORTED_MODULE_1__device_component__["a" /* DeviceComponent */] }])
            ]
        })
    ], DeviceModule);
    return DeviceModule;
}());

//# sourceMappingURL=device.module.js.map

/***/ }),

/***/ "../../../../../src/app/device/device.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../../_@angular_http@4.4.3@@angular/http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceService = (function () {
    function DeviceService(http) {
        this.http = http;
    }
    DeviceService.prototype.getDeviceData = function () {
        return this.http.get('./assets/fake/device-data.json').map(function (res) { return res.json(); });
    };
    DeviceService.prototype.getDeviceDetailData = function () {
        return this.http.get('./assets/fake/device-detail-data.json').map(function (res) { return res.json(); });
    };
    DeviceService.prototype.validateDeviceGroupName = function (groupName) {
        return this.http.get('./assets/fake/device-group-name.json').map(function (res) { return res.json(); });
    };
    DeviceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], DeviceService);
    return DeviceService;
    var _a;
}());

//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ "../../../../../src/app/device/device/device-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"device-detail-wrap\">\n  <div class=\"content-section-title\">{{'device_detail' | translate}}</div>\n  <nz-collapseset [nzBordered]=\"false\">\n    <nz-collapse class=\"device-detail-item\" [nzTitle]=\"'basic_info' | translate\" [nzActive]=\"true\">\n      <table>\n        <tr>\n          <td>IMEI</td>\n          <td>860932393223</td>\n        </tr>\n        <tr>\n          <td>MEID</td>\n          <td>{{'none' | translate}}</td>\n        </tr>\n        <tr>\n          <td>MAC</td>\n          <td>b4:c0:a1:u9</td>\n        </tr>\n        <tr>\n          <td>SN</td>\n          <td>{{'none' | translate}}</td>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <td>{{'device_brand' | translate}}</td>\n          <td>HUAWEI</td>\n        </tr>\n        <tr>\n          <td>{{'device_model' | translate}}</td>\n          <td>HUAWEI-m2</td>\n        </tr>\n        <tr>\n          <td>{{'asset_id' | translate}}</td>\n          <td>AS23SFD9DE223</td>\n        </tr>\n        <tr>\n          <td>IMSI</td>\n          <td>{{'unknown' | translate}}</td>\n        </tr>\n        <tr>\n          <td>{{'operator' | translate}}</td>\n          <td>{{'unknown' | translate}}</td>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <td>{{'owner' | translate}}</td>\n          <td>Zhang San, Wang Wu, Wang Liu</td>\n        </tr>\n        <tr>\n          <td>{{'account' | translate}}</td>\n          <td>fuybooo</td>\n        </tr>\n        <tr>\n          <td>{{'mailbox' | translate}}</td>\n          <td>fuybooo@qq.com</td>\n        </tr>\n        <tr>\n          <td>{{'phone' | translate}}</td>\n          <td>13521888888</td>\n        </tr>\n        <tr>\n          <td>{{'device_group_2' | translate}}</td>\n          <td>无</td>\n        </tr>\n        <tr>\n          <td>{{'operating_system' | translate}}</td>\n          <td>Android 4.4.4</td>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <td>{{'register_date' | translate}}</td>\n          <td>2017-09-22 11:13:23</td>\n        </tr>\n        <tr>\n          <td>{{'last_logged_date' | translate}}</td>\n          <td>2017-09-22 11:13:23</td>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <td>{{'state' | translate}}</td>\n          <td>{{'state_info.logged' | translate}}</td>\n        </tr>\n        <tr>\n          <td>{{'is_breakout' | translate}}</td>\n          <td>{{'yes' | translate}}</td>\n        </tr>\n      </table>\n    </nz-collapse>\n    <nz-collapse class=\"device-detail-item\" [nzTitle]=\"'storage_info' | translate\" [nzActive]=\"true\">\n      <div class=\"splitter-bar-wrap\">\n        <p class=\"splitter-bar-summary\">20.9<span>GB</span><span>/</span>64<span>GB</span></p>\n        <div class=\"splitter-bar\">\n          <div class=\"splitter-bar-detail\"\n               *ngFor=\"let bar of deviceStorage;\"\n               [style.backgroundColor]=\"bar.bgc\"\n               [style.width]=\"bar.width\"\n               title=\"{{bar.width}}\"\n          ></div>\n        </div>\n        <div>\n          <div class=\"splitter-desc\" *ngFor=\"let bar of deviceStorage;\">\n            <ng-container *ngIf=\"!bar.isLeft\">\n              <span [style.backgroundColor]=\"bar.bgc\"></span>\n              <label>{{bar.name | translate}}</label>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </nz-collapse>\n    <nz-collapse class=\"device-detail-item\" [nzTitle]=\"'策略'\">\n      <table>\n        <tr>\n          <td>设备策略</td>\n          <td>{{devicePolicy?.device}}</td>\n        </tr>\n        <tr>\n          <td>安全策略</td>\n          <td>{{devicePolicy?.security}}</td>\n        </tr>\n        <tr>\n          <td>设备配置策略</td>\n          <td>{{devicePolicy?.deviceConfig}}</td>\n        </tr>\n        <tr>\n          <td>上网监控</td>\n          <td>{{devicePolicy?.url}}</td>\n        </tr>\n        <tr>\n          <td>安全桌面</td>\n          <td>{{devicePolicy?.launcher}}</td>\n        </tr>\n        <tr>\n          <td>违规策略</td>\n          <td>{{devicePolicy?.illegal}}</td>\n        </tr>\n      </table>\n    </nz-collapse>\n  </nz-collapseset>\n  <div class=\"device-view-more\">\n    {{'view_more' | translate}}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/device/device/device-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_model__ = __webpack_require__("../../../../../src/app/device/device.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_service__ = __webpack_require__("../../../../../src/app/device/device.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeviceDetailComponent = (function () {
    function DeviceDetailComponent(deviceService) {
        this.deviceService = deviceService;
    }
    DeviceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 通过http请求获取数据
        this.deviceService.getDeviceDetailData().subscribe(function (deviceData) {
            _this.devicePolicy = deviceData.devicePolicy;
        });
        this.deviceStorage = [
            {
                name: 'photo',
                bgc: __WEBPACK_IMPORTED_MODULE_1__device_model__["a" /* bgcs */][0],
                width: '20%'
            },
            {
                name: 'backups',
                bgc: __WEBPACK_IMPORTED_MODULE_1__device_model__["a" /* bgcs */][1],
                width: '10%'
            },
            {
                name: 'presentation',
                bgc: __WEBPACK_IMPORTED_MODULE_1__device_model__["a" /* bgcs */][2],
                width: '7%'
            },
            {
                name: 'email',
                bgc: __WEBPACK_IMPORTED_MODULE_1__device_model__["a" /* bgcs */][3],
                width: '3%'
            },
            {
                isLeft: true,
                bgc: __WEBPACK_IMPORTED_MODULE_1__device_model__["a" /* bgcs */][4],
                width: '60%'
            },
        ];
    };
    DeviceDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-device-detail',
            template: __webpack_require__("../../../../../src/app/device/device/device-detail.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__device_service__["a" /* DeviceService */]) === "function" && _a || Object])
    ], DeviceDetailComponent);
    return DeviceDetailComponent;
    var _a;
}());

//# sourceMappingURL=device-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/device/device/device-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"content-section-title\">\n    <label nz-checkbox [(ngModel)]=\"allCheck\" [nzIndeterminate]=\"indeterminate\" (ngModelChange)=\"checkAll($event)\"><span>{{'device_list' | translate}}</span></label>\n  </div>\n  <nz-table class=\"content-table\" #nzTable [nzAjaxData]=\"data\" [nzIsPagination]=\"false\">\n    <tbody nz-tbody>\n      <tr nz-tbody-tr *ngFor=\"let data of nzTable.data\">\n        <td nz-td [nzCheckbox]=\"true\">\n          <label nz-checkbox [(ngModel)]=\"data.isChecked\" (ngModelChange)=\"refreshStatus($event)\">\n          </label>\n        </td>\n        <td nz-td>\n          <a href=\"javascript: void(0);\" class=\"text-primary\">{{data.model}}</a>\n        </td>\n        <td nz-td>{{data.owner}}</td>\n      </tr>\n    </tbody>\n  </nz-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/device/device/device-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_service__ = __webpack_require__("../../../../../src/app/device/device.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceListComponent = (function () {
    function DeviceListComponent(deviceService) {
        var _this = this;
        this.deviceService = deviceService;
        this.params = {};
        this.data = [];
        this.allCheck = false;
        this.indeterminate = false;
        this.deviceDataEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.deviceService.getDeviceData().subscribe(function (res) {
            _this.data = res;
        });
    }
    DeviceListComponent.prototype.ngOnInit = function () {
    };
    DeviceListComponent.prototype.ngOnChanges = function () {
        console.log('params:', this.params);
    };
    DeviceListComponent.prototype.checkAll = function (value) {
        console.log('allCheck:', this.allCheck);
        this.data.forEach(function (item) { return item.isChecked = value; });
        this.refreshStatus();
        this.emitEvent();
    };
    DeviceListComponent.prototype.refreshStatus = function () {
        this.allCheck = this.data.every(function (item) { return item.isChecked === true; });
        var unAllCheck = this.data.every(function (item) { return !item.isChecked; }); // item.isChecked 可能为 undefined
        this.indeterminate = !unAllCheck && !this.allCheck;
        this.emitEvent();
    };
    DeviceListComponent.prototype.emitEvent = function () {
        this.deviceDataEmitter.emit(this.data);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], DeviceListComponent.prototype, "params", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], DeviceListComponent.prototype, "deviceDataEmitter", void 0);
    DeviceListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-device-list',
            template: __webpack_require__("../../../../../src/app/device/device/device-list.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__device_service__["a" /* DeviceService */]) === "function" && _a || Object])
    ], DeviceListComponent);
    return DeviceListComponent;
    var _a;
}());

//# sourceMappingURL=device-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/device/device/device-trail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w h\">\n  <div id=\"device-map\" class=\"w min-w1000 min-h530\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/device/device/device-trail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceTrailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../../_@angular_core@4.4.3@@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceTrailComponent = (function () {
    function DeviceTrailComponent() {
    }
    DeviceTrailComponent.prototype.ngOnInit = function () {
        // 创建地图
        var map = new AMap.Map('device-map', {
            resizeEnable: true,
            zoom: 13,
            mapStyle: "normal"
        });
        // 设置语言
        map.setLang(localStorage.getItem('currentLang'));
    };
    DeviceTrailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-device-trail',
            template: __webpack_require__("../../../../../src/app/device/device/device-trail.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DeviceTrailComponent);
    return DeviceTrailComponent;
}());

//# sourceMappingURL=device-trail.component.js.map

/***/ })

});
//# sourceMappingURL=device.module.chunk.js.map