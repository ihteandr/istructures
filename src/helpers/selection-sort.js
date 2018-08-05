import { swap } from './swap';

export function selection_sort(arr) {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        swap(arr, min, i);
    }
    return arr;
}
