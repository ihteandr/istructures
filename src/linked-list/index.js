import { mergeSort, getValue, slice } from './helpers';

export class LinkedList {
    constructor() {
        this.top = null;
        this.length = 0;
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
            let iPrev = null;
            let iNode = this.top;
            let iIndex = 0;
            while(iNode) {
                let jNode = iNode.next;
                let jIndex = iIndex + 1;
                if (iIndex > Math.ceil(this.length/2)){
                    break;
                }
                let jPrev = iNode;
                while(jNode) {
                    if (jIndex === this.length - iIndex - 1) {
                        this._swap(iPrev, iNode, jPrev, jNode);
                        let temp = jNode;
                        jNode = iNode;
                        iNode = temp;
                        break;
                    }
                    jIndex++;
                    jPrev = jNode;
                    jNode = jNode.next;
                }
                iPrev = iNode;
                iNode = iNode.next;
                iIndex++;
            }
            return this;
        }
        let newList = new LinkedList();
        this.toArray().reverse().forEach((value) => {
            newList.push(value);
        });
        return newList;
    }
    _swap(iPrev, iNode, jPrev, jNode) {
        let jNext = jNode.next;
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
    slice(index, length) {
        return slice(this, index, length);
    }
    get(index) {
        const info = this._getCurrentAndPrev(index);
        return getValue(info ? info.current : null);
    }
    getNode(index) {
        const info = this._getCurrentAndPrev(index);
        return info ? info.current : null;
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
    _isContainsCircular() {
        let node = this.top;
        let index = 0;
        while(node) {
            let subIndex = index + 1;
            let subNode = node.next;
            while(subNode && subIndex > index) {
                if (subNode === node) {
                    return true;
                }
                subNode = subNode.next;
            }
            node = node.next;
            index++;
        }
        return false;
    }
    _isLengthChanged() {
        let index = 0;
        let node = this.top;
        while(node) {
            node = node.next;
            index++;
        }
        return index === this.length - 1;
    }
    sort(comparator, isReal = false) {
        const _comparator = comparator || function defaultComparator(a, b) {
            return a > b;
        };
        if(!isReal) {
            return mergeSort(this, _comparator);
        }
        let iPrev = null;
        let jPrev = null;
        let iNode = this.top;
        let iIndex = 0;
        while(iNode) {
            let jNode = iNode.next;
            let jIndex = iIndex + 1;
            let jPrev = iNode;
            while(jNode) {
                if (jIndex > iIndex) {
                    let compareResult = _comparator(iNode.value, jNode.value);
                    if(compareResult > 0 || compareResult === true) {
                        this._swap(iPrev, iNode, jPrev, jNode);
                        let temp = jNode;
                        jNode = iNode;
                        iNode = temp;
                    }
                }
                jPrev = jNode;
                jNode = jNode.next;
                jIndex++;
            }
            iPrev = iNode;
            iIndex++;
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
    clear() {
        this.length = 0;
        this.top = null;
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
}
