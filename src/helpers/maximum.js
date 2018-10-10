
export function maximum(arr, k) {
    if (arr.length < k) {
        return null;
    }
    const maximums = arr.slice(0, k);
    k = k || 1;
    for (let i = 1; i < arr.length; i++) {
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
