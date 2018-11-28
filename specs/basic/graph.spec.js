const istructers = require('../../build');

const { Graph, GraphNode } = istructers;

describe('Graph spec', () => {
    let node = null;
    beforeEach(() => {
        node = new GraphNode(1);
        const node2 = new GraphNode(2);
        const node3 = new GraphNode(3);
        const node4 = new GraphNode(4);
        const node5 = new GraphNode(5);
        node.put(node2);
        node.put(node3);
        node2.put(node4);
        node2.put(node5);
        node4.put(node2);
        node3.put(node5);
    });

    it('dfs test', () => {
        const info = Graph.dfs(node, 4);
        expect(info.node.value).toBe(4);
    });
})