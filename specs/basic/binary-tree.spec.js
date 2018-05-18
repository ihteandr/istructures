const istructers = require('../../build');

const { BinaryTree } = istructers;

describe('Binary tree test', () => {
    let binaryTree;

    beforeEach(() => {
        binaryTree = new BinaryTree();
    });

    it('get/put test', () => {
        binaryTree.put(1, 1);
        binaryTree.put(2, 2);
        binaryTree.put(-1, 3);
        expect(binaryTree.get(1)).toBe(1);
        expect(binaryTree.get(2)).toBe(2);
        expect(binaryTree.get(-1)).toBe(3);
    });

    it('toArray test', () => {
        binaryTree.put(1, 1);
        binaryTree.put(2, 2);
        binaryTree.put(-1, 3);
        expect(binaryTree.toArray().join()).toBe([1, 3, 2].join());
    });

    it('toObject test', () => {
        binaryTree.put('a', 1);
        binaryTree.put('b', 2);
        binaryTree.put('c', 3);
        binaryTree.put('c', 4);
        expect(JSON.stringify(binaryTree.toObject())).toBe(JSON.stringify({
            a: [1],
            b: [2],
            c: [3, 4],
        }));
    });
});
