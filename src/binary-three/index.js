
export class BinaryTree {
    constructor(comparator) {
        this._comparator = comparator || function defaultComparator(a, b) {
            if (a === b) {
                return 0;
            }
            return a > b ? 1 : -1;
        };
        this.top = null;
    }
    put(key, value) {
        const newNode = {
            value,
            key,
            left: null,
            right: null,
        };
        if (!this.top) {
            this._setTop(newNode);
        } else {
            this._putNode(this.top, newNode);
        }
    }
    get(key) {
        let node = this.top;
        while (node) {
            const compareResult = this._comparator(key, node.key);
            if (compareResult === 0) {
                return node.value;
            }
            if (compareResult > 0) {
                node = node.right;
            } else {
                node = node.left;
            }
        }
        return undefined;
    }
    toArray() {
        const arr = [];
        this._initArray(this.top, arr);
        return arr;
    }
    toObject() {
        const obj = {};
        this._initObject(this.top, obj);
        return obj;
    }
    contains(key) {
        return this.get(key) !== undefined;
    }
    // private functions
    _initArray(node, arr) {
        if (!node) {
            return arr;
        }
        arr.push(node.value);
        this._initArray(node.left, arr);
        this._initArray(node.right, arr);
        return arr;
    }
    _initObject(node, obj) {
        if (!node) {
            return obj;
        }
        if (obj[node.key]) {
            obj[node.key].push(node.value);
        } else {
            obj[node.key] = [node.value];
        }
        this._initObject(node.left, obj);
        this._initObject(node.right, obj);
        return obj;
    }
    _putNode(node, newNode) {
        const compareResult = this._comparator(newNode.key, node.key);
        if (compareResult > 0) {
            if (node.right) {
                this._putNode(node.right, newNode);
            } else {
                node.right = newNode;
            }
        } else if (node.left) {
            this._putNode(node.left, newNode);
        } else {
            node.left = newNode;
        }
    }
    _setTop(node) {
        this.top = node;
    }
}
