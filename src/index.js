import { LinkedList } from './linked-list';
import { Stack } from './stack';
import { Queue } from './queue';
import { PriorityQueue } from './priority-queue';
import { BinaryTree } from './binary-three';
import { Graph, GraphNode } from './graph';
import * as helpers from './helpers';

const istructers = {
    LinkedList,
    Stack,
    Queue,
    PriorityQueue,
    BinaryTree,
    Graph,
    GraphNode,
    helpers,
};

if (module !== undefined && module.exports !== undefined) {
    module.exports = istructers;
}

export default istructers;
