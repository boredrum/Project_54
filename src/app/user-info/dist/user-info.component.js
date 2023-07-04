"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserInfoComponent = void 0;
var core_1 = require("@angular/core");
var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent() {
        this.name = "";
        this.status = "";
        this.avatar = "";
        this.charsetAmount = 0;
    }
    UserInfoComponent.prototype.removeUser = function () {
        this.name = "";
        this.status = "";
        this.avatar = "";
        this.charsetAmount = this.status.length;
    };
    __decorate([
        core_1.Input()
    ], UserInfoComponent.prototype, "name");
    __decorate([
        core_1.Input()
    ], UserInfoComponent.prototype, "status");
    __decorate([
        core_1.Input()
    ], UserInfoComponent.prototype, "avatar");
    __decorate([
        core_1.Input()
    ], UserInfoComponent.prototype, "charsetAmount");
    UserInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-user-info',
            templateUrl: './user-info.component.html',
            styleUrls: ['./user-info.component.scss']
        })
    ], UserInfoComponent);
    return UserInfoComponent;
}());
exports.UserInfoComponent = UserInfoComponent;
