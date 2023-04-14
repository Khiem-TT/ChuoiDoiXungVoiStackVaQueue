"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack_1 = require("./Stack");
var Queue_1 = require("./Queue");
var stack = new Stack_1.Stack('able was I era I saw elba');
var queue = new Queue_1.Queue('able was I era I saw elba');
var flag = true;
for (var i = 0; i < stack.string.length; i++) {
    if (stack.pop() !== queue.dequeue()) {
        flag = false;
    }
}
if (flag)
    console.log('Chuoi doi xung');
else
    console.log('Khong phai chuoi doi xung');
