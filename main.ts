import {Stack} from "./Stack";
import {Queue} from "./Queue";

let stack = new Stack('able was I ere I saw elba');
let queue = new Queue('able was I ere I saw elba');

let flag = true;
for (let i = 0; i < stack.string.length; i++) {
    if (stack.pop() !== queue.dequeue()) {
        flag = false;
    }
}
if (flag) console.log('Chuoi doi xung');
else console.log('Khong phai chuoi doi xung');