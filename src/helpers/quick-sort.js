/**
 * Created by Fujitsu on 6/5/2014.
 */

function swap(arr, first, second) {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

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
    second = second || arr.length - 1;
    if (arr.length > 1) {
        const index = partition(arr, first, second);
        if (first < index - 1) {
            quick_sort(arr, first, index - 1);
        }
        if (index < second) {
            quick_sort(arr, index, second);
        }
    }
    return arr;
}
