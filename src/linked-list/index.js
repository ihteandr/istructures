import { mergeSort, getValue, slice } from './helpers';

export class LinkedList {
    constructor() {
        this.top = null;
        this.length = 0;
    }
    indexOf(value) {
        let index = 0;
        let node = this.top;
        while (node) {
            if (node.value === value) {
                return index;
            }
            node = node.next;
            index++;
        }
        return -1;
    }
    lastIndexOf(value) {
        let index = 0;
        let lastIndex = -1;
        let node = this.top;
        while (node) {
            if (node.value === value) {
                lastIndex = index;
            }
            node = node.next;
            index++;
        }
        return lastIndex;
    }
    swap(i, j) {
        const nodeiInfo = this._getCurrentAndPrev(i);
        const nodejInfo = this._getCurrentAndPrev(j);
        if (nodeiInfo && nodejInfo) {
            this._swap(nodeiInfo.prev, nodeiInfo.current, nodejInfo.prev, nodejInfo.current);
        }
    }
    reverse(isReal = false) {
        if (isReal) {
            let prev = null;
            let current = this.top;
            while (current) {
                const nextNode = current.next;
                current.next = prev;
                prev = current;
                current = nextNode;
            }
            this.top = prev;
            return this;
        }
        const newList = new LinkedList();
        this.toArray().reverse().forEach((value) => {
            newList.push(value);
        });
        return newList;
    }
    slice(index, length) {
        return slice(this, index, length);
    }
    sort(comparator, isReal = false) {
        const _comparator = comparator || function defaultComparator(a, b) {
            return a > b;
        };
        if (!isReal) {
            return mergeSort(this, _comparator);
        }
        let iPrev = null;
        let iNode = this.top;
        while (iNode) {
            let jNode = iNode;
            let prevMinNode = null;
            let min = iNode.value;
            while (jNode.next) {
                const compareResult = _comparator(min, jNode.next.value);
                if (compareResult > 0) {
                    min = jNode.next.value;
                    prevMinNode = jNode;
                }
                jNode = jNode.next;
            }
            if (prevMinNode) {
                const nextNode = prevMinNode.next;
                this._swap(iPrev, iNode, prevMinNode, nextNode);
                iNode = nextNode;
            }
            iPrev = iNode;
            iNode = iNode.next;
        }
        return this;
    }
    appendAt(index, value) {
        const info = this._getCurrentAndPrev(index);
        if (info) {
            this.length++;
            const node = {
                value,
                next: info.current,
            };
            if (info.prev) {
                info.prev.next = node;
            } else {
                this.top = node;
            }
            return true;
        }
        return false;
    }
    removeAt(index) {
        const info = this._getCurrentAndPrev(index);
        if (info) {
            if (info.prev) {
                info.prev.next = info.current.next;
            } else {
                this.top = info.current.next;
            }
            this.length--;
            return info.current.value;
        }
        return null;
    }
    clear() {
        this.length = 0;
        this.top = null;
    }
    forEach(fn) {
        if (!this.top) {
            return;
        }
        let node = this.top;
        let index = 0;
        while (node) {
            fn(node, index);
            index++;
            node = node.next;
        }
    }
    shift() {
        if (!this.top) {
            return null;
        }
        const _node = this.top;
        this.top = _node.next;
        this.length--;
        return _node.value;
    }
    unshift(value) {
        const node = {
            value,
            next: null,
        };
        if (!this.top) {
            this._setTop(node);
        } else {
            const _node = this.top;
            node.next = _node;
            this.top = node;
        }
        this.length++;
    }
    push(value) {
        const node = {
            value,
            next: null,
        };
        if (!this.top) {
            this._setTop(node);
        } else {
            const lastNode = this._getLastNode(this.top);
            lastNode.next = node;
        }
        this.length++;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        this.length--;
        let node = this.top;
        if (!node.next) {
            this.top = null;
            return node.value;
        }
        while (node.next.next) {
            node = node.next;
        }
        const lastNode = node.next;
        node.next = null;
        return lastNode.value;
    }
    get(index) {
        const info = this._getCurrentAndPrev(index);
        return getValue(info ? info.current : null);
    }
    getNode(index) {
        const info = this._getCurrentAndPrev(index);
        return info ? info.current : null;
    }
    getFirst() {
        return getValue(this.top);
    }
    getLast() {
        return getValue(this._getLastNode(this.top));
    }
    toArray() {
        const arr = [];
        let node = this.top;
        while (node) {
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }
    // private methods
    _getCurrentAndPrev(index) {
        if (!this.top || index < 0) {
            return null;
        }
        let prev = null;
        let _index = index;
        let current = this.top;
        while (current && _index !== 0) {
            prev = current;
            current = current.next;
            _index--;
        }
        if (_index === 0) {
            return {
                current,
                prev,
            };
        }
        return null;
    }
    _getLastNode(node) {
        if (!node) {
            return null;
        }
        if (!node.next) {
            return node;
        }
        return this._getLastNode(node.next);
    }
    _setTop(node) {
        this.top = node;
    }
    _clearMarkers() {
        let node = this.top;
        while (node) {
            node.marker = undefined;
            node = node.next;
        }
    }
    _isContainsCircular() {
        let node = this.top;
        let isContainsCircular = false;
        while (node) {
            if (node.marker) {
                isContainsCircular = true;
                break;
            }
            node.marker = true;
            node = node.next;
        }
        this._clearMarkers();
        return isContainsCircular;
    }
    _isLengthChanged() {
        let index = 0;
        let node = this.top;
        while (node) {
            node = node.next;
            index++;
        }
        return index === this.length - 1;
    }
    _swap(iPrev, iNode, jPrev, jNode) {
        const jNext = jNode.next;
        if (iPrev) {
            iPrev.next = jNode;
        } else {
            this.top = jNode;
        }
        if (jPrev) {
            jPrev.next = iNode;
        } else {
            this.top = iNode;
        }
        if (jNode !== iNode.next) {
            jNode.next = iNode.next;
        } else {
            jNode.next = iNode;
        }
        if (iNode !== jNext) {
            iNode.next = jNext;
        } else {
            iNode.next = jNode;
        }
        console.assert(!this._isContainsCircular(), 'contains circular', arguments);
        console.assert(!this._isLengthChanged(), 'length changed', arguments);
    }
}
