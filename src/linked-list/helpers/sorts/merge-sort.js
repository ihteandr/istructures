import { LinkedList } from '../../index';
import { slice } from '../basic';

export function merge(list1, list2, comparator) {
    let node1 = list1.top;
    let node2 = list2.top;
    const list = new LinkedList();
    while (node1 || node2) {
        if (!node1) {
            list.push(node2.value);
            node2 = node2.next;
        } else if (!node2) {
            list.push(node1.value);
            node1 = node1.next;
        } else {
            const compareResult = comparator(node1.value, node2.value);
            if (compareResult >= 0 || compareResult === true) {
                list.push(node1.value);
                node1 = node1.next;
            } else {
                list.push(node2.value);
                node2 = node2.next;
            }
        }
    }
    return list;
}


export function mergeSort(list, comparator) {
    const _comparator = comparator || function defaultComparator(a, b) {
        return a > b;
    };
    if (list.length === 1) {
        return list;
    }
    const middle = Math.floor(list.length / 2);
    return merge(
        mergeSort(slice(list, 0, middle), _comparator),
        mergeSort(slice(list, middle), _comparator),
        _comparator,
    );
}
