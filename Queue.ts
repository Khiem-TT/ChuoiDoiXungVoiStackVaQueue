export class Queue<T> {
    string: string[];

    constructor(string: string) {
        this.string = string.split('');
    }

    dequeue(): string {
        return this.string.shift();
    }
}