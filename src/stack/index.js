
export class Stack {
    constructor() {
        this._arr = [];
    }
    put(item) {
        this._arr.push(item);
    }
    get() {
        this._arr.pop();
    }
    length() {
        return this._arr.length;
    }
}
