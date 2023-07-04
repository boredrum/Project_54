"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddUserComponent = void 0;
var core_1 = require("@angular/core");
var AddUserComponent = /** @class */ (function () {
    function AddUserComponent() {
        this.onUser = new core_1.EventEmitter();
        this.nameInputValue = '';
        this.statusInputValue = '';
        this.avatarInputValue = '';
    }
    AddUserComponent.prototype.onName = function (event) {
        this.nameInputValue = event.target.value;
    };
    AddUserComponent.prototype.onStatus = function (event) {
        this.statusInputValue = event.target.value;
    };
    AddUserComponent.prototype.onAvatar = function (event) {
        this.avatarInputValue = event.target.value;
    };
    AddUserComponent.prototype.addNewUser = function (nameValue, statusValue, avatarValue) {
        var value = {
            name: nameValue,
            status: statusValue,
            avatar: avatarValue
        };
        this.onUser.emit(value);
        this.nameInputValue = '';
        this.statusInputValue = '';
        this.avatarInputValue = '';
    };
    __decorate([
        core_1.Output()
    ], AddUserComponent.prototype, "onUser");
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.scss']
        })
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
