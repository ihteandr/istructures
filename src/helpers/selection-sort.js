/**
 * Created by Fujitsu on 6/5/2014.
 */
function swap(arr, firstIndex, secondIndex) {
    const temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}

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
