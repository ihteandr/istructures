
export function maximum(arr, k) {
    if (arr.length < k) {
        return null;
    }
    const maximums = new Array(k);
    maximums.fill(Number.MIN_SAFE_INTEGER);
    k = k || 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < maximums.length; j++) {
            if (maximums[j] < arr[i]) {
                maximums.splice(j, 0, arr[i]);
                if (maximums.length > k) {
                    maximums.splice(-1, 1);
                }
                break;
            }
        }
    }
    return maximums[k - 1];
}
