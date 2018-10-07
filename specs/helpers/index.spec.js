const istructers = require('../../build');

const { helpers } = istructers;

describe('helpers spec', () => {
    let arr = [];
    beforeEach(() => {
        arr = [];
        for (let i = 0; i < 5000; i++) {
            const num = Math.floor(Math.random() * 100);
            arr.push((num % 2 === 0 ? -1 : 1) * num);
        }
    });
    it('bubble sort test', () => {
        arr = helpers.bubble_sort(arr);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                expect(true).toBe(false);
                break;
            }
        }
    });
    it('insertion sort test', () => {
        arr = helpers.insertion_sort(arr);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                expect(true).toBe(false);
                break;
            }
        }
    });
    it('selection sort test', () => {
        arr = helpers.selection_sort(arr);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                expect(true).toBe(false);
                break;
            }
        }
    });
    it('merge sort test', () => {
        arr = helpers.merge_sort(arr);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                expect(true).toBe(false);
                break;
            }
        }
    });
    it('quick sort test', () => {
        arr = helpers.quick_sort(arr);
        for (let i = 1; i < arr.length; i++) {
            if (arr[i - 1] > arr[i]) {
                expect(true).toBe(false);
                break;
            }
        }
    });

    it('k minimum test', () => {
        const origin = arr.slice();
        const sorted = helpers.quick_sort(arr);
        const minNumbers = [1, 2, 3, 4, 15];
        minNumbers.forEach((number) => {
            const minimum = helpers.minimum(origin, number);
            expect(minimum).toBe(sorted[number - 1]);
        });
    });

    
    it('k maximum test', () => {
        const origin = arr.slice();
        const sorted = helpers.quick_sort(arr);
        const maxNumbers = [1, 2, 3, 4, 15];
        maxNumbers.forEach((number) => {
            const max = helpers.maximum(origin, number);
            expect(max).toBe(sorted[sorted.length - number - 1]);
        });
    });
});
