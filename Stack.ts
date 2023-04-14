export class Stack<T> {
    string: string[];

    constructor(string: string) {
        this.string = string.split('');
    }

    pop(): string {
        return this.string.pop();
    }
}