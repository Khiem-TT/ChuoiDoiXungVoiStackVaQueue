"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack(string) {
        this.string = string.split('');
    }
    Stack.prototype.pop = function () {
        return this.string.pop();
    };
    return Stack;
}());
exports.Stack = Stack;
