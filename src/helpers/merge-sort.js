/**
 * Created by Fujitsu on 6/5/2014.
 */
function merge(left, right) {
    const result = [];
    let li = 0;
    let ri = 0;
    while (li < left.length && ri < right.length) {
        if (left[li] < right[ri]) {
            result.push(left[li++]);
        } else {
            result.push(right[ri++]);
        }
    }

    return result.concat(left.slice(li)).concat(right.slice(ri));
}

export function merge_sort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(merge_sort(left), merge_sort(right));
}
