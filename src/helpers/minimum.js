

export function minimum(arr, k) {
    if (arr.length < k) {
        return null;
    }
    const minimums = arr.slice(0, k);
    k = k || 1;
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < minimums.length; j++) {
            if (minimums[j] > arr[i]) {
                minimums.splice(j, 0, arr[i]);
                if (minimums.length > k) {
                    minimums.splice(-1, 1);
                }
                break;
            }
        }
    }
    return minimums[k - 1];
}
