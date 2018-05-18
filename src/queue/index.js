
export class Queue {
    constructor() {
        this._arr = [];
    }
    put(item) {
        this._arr.push(item);
    }
    get() {
        this._arr.shift();
    }
    length() {
        return this._arr.length;
    }
}
