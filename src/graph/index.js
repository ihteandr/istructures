

export class GraphNode {
    constructor(value) {
        this.value = value;
        this.nodes = [];
    }
    put(node) {
        this.nodes.push(node);
    }
}


export class Graph {
    static dfs(node, value, path = []) {
        if (node.visited) {
            return null;
        }
        node.visited = true;
        const nodes = node.nodes;
        path.push(node);
        if (node.value === value) {
            return {
                node: node,
                path: path,
            };
        }
        while(node = nodes.pop()) {
            let found = Graph.dfs(node, value, path);
            if (found) {
                return found;
            }
        }
        path.pop();
        return null;
    }
    static bfs(node) {

    }
}