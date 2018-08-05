import { swap } from './swap';

export function bubble_sort(arr) {
    const len = arr.length;
    let i = 0;
    let j;
    let stop;
    for (i; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}
