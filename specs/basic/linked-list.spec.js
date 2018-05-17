const istructers = require('../../build');

const { LinkedList } = istructers;

describe('LinkedList spec', () => {
    let list;
    let n;
    beforeEach(() => {
        list = new LinkedList();
        n = 10;
        for (let i = 0; i < n; i++) {
            list.push(i);
        }
    });
    it('check length', () => {
        expect(list.length).toBe(n);
    });
    it('check pop', () => {
        expect(list.pop()).toBe(9);
    });
    it('check shift', () => {
        expect(list.shift()).toBe(0);
    });
    it('check unshift', () => {
        list.unshift(10);
        expect(list.length).toBe(n + 1);
        expect(list.shift()).toBe(10);
    });
    it('check toArray', () => {
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(i);
        }
        expect(list.toArray().join()).toBe(arr.join());
    });
    it('check removeAt', () => {
        expect(list.removeAt(2)).toBe(2);
        expect(list.removeAt(-1)).toBeNull();
        expect(list.removeAt(10)).toBeNull();
        expect(list.length).toBe(n - 1);
    });
    it('check get', () => {
        expect(list.get(-1)).toBeNull();
        expect(list.get(0)).toBe(0);
        expect(list.get(5)).toBe(5);
    });
    it('check appendAt', () => {
        expect(list.appendAt(0, 10)).toBe(true);
        expect(list.length).toBe(++n);
        expect(list.appendAt(90, 11)).toBe(false);
        expect(list.appendAt(90, -11)).toBe(false);
        expect(list.length).toBe(n);
    });
    it('check clear', () => {
        list.clear();
        expect(list.length).toBe(0);
        expect(list.appendAt(1)).toBe(false);
    });
    it('check getFirst', () => {
        expect(list.getFirst()).toBe(0);
        expect(list.shift()).toBe(0);
        expect(list.getFirst()).toBe(1);
    });
    it('check getLast', () => {
        expect(list.getLast()).toBe(9);
        expect(list.pop()).toBe(9);
        expect(list.getLast()).toBe(8);
    });
    it('check indexOf', () => {
        expect(list.indexOf(9)).toBe(9);
        expect(list.indexOf(10)).toBe(-1);
    });
    it('check indexOf', () => {
        expect(list.lastIndexOf(9)).toBe(9);
        list.push(9);
        expect(list.lastIndexOf(9)).toBe(10);
        expect(list.lastIndexOf(10)).toBe(-1);
    });
    it('check sorted', () => {
        const sorted = list.sort();
        expect(sorted.toArray().join()).toBe(list.toArray().join());
    });
    it('check swap', () => {
        list.swap(0, 9);
        expect(list.get(0)).toBe(9);
        list.swap(9, 0);
        expect(list.get(0)).toBe(0);
    });
    it('check slice', () => {
        expect(list.slice(0, 3).toArray().join()).toBe([0, 1, 2].join());
        expect(list.slice(0).toArray().join()).toBe(list.toArray().join());
    });
    it('check sort', () => {
        let prev = null;
        let reversed = list.reverse();
        let sorted = reversed.sort(null, true).toArray();
        expect(sorted.length).toBe(reversed.length);
        sorted.forEach((num) => {
            if (prev) {
                expect(num >= prev).toBe(true);
            }
            prev = num;
        });
    });
    it('check real reverse', () => {
        let prev = null;
        let arr = list.sort(null).reverse(true).toArray();
        expect(arr.length).toBe(list.length);
        arr.forEach((num) => {
            if (prev) {
                expect(num <= prev).toBe(true);
            }
            prev = num;
        });
    });
});
