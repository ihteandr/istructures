import { swap } from './swap';

function partition(arr, first, second) {
    const middle = arr[Math.floor((first + second) / 2)];
    let i = first;
    let j = second;

    while (i <= j) {
        while (arr[i] < middle) {
            i++;
        }
        while (arr[j] > middle) {
            j--;
        }
        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}

export function quick_sort(arr, first, second) {
    first = first || 0;
    second = second === undefined ? arr.length - 1 : second;
    const index = partition(arr, first, second);
    if (first < index - 1) {
        quick_sort(arr, first, index - 1);
    }
    if (index < second) {
        quick_sort(arr, index, second);
    }
    return arr;
}
