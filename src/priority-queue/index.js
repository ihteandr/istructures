
export class PriorityQueue {
    constructor(size) {
        this.size = size;
        this._arr = [];
    }
    put(item) {
        if (this.length() === this.size) {
            this.get();
        }
        this._arr.push(item);
    }
    get() {
        return this._arr.shift();
    }
    length() {
        return this._arr.length;
    }
}
