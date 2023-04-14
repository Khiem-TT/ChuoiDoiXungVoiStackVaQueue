"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
var Queue = /** @class */ (function () {
    function Queue(string) {
        this.string = string.split('');
    }
    Queue.prototype.dequeue = function () {
        return this.string.shift();
    };
    return Queue;
}());
exports.Queue = Queue;
