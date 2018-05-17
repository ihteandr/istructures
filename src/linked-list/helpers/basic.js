import { LinkedList } from '../index';

export function slice(list, index, length) {
    const newList = new LinkedList();
    const _index = index || 0;
    const _length = length || list.length;
    let currentIndex = _index;
    let node = list.getNode(index);
    while (node && currentIndex < _index + _length) {
        newList.push(node.value);
        node = node.next;
        currentIndex++;
    }
    return newList;
}


export function getValue(node) {
    return node ? node.value : null;
}
