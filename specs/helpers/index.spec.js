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

    it('k minimum test:reverse order', () => {
        const sorted = helpers.quick_sort(arr.slice());
        const reverseOrder = sorted.slice().reverse(); 
        const minNumbers = [1, 2, 3, 4, 15, 100, arr.length];
        minNumbers.forEach((number) => {
            expect(helpers.minimum(reverseOrder, number)).toBe(sorted[number - 1]);
        });
    });

    it('k minimum test:random order', () => {
        const randomOrder = arr.slice();
        const sorted = helpers.quick_sort(arr.slice());
        const minNumbers = [1, 2, 3, 4, 15, 100, arr.length];
        minNumbers.forEach((number) => {
            expect(helpers.minimum(randomOrder, number)).toBe(sorted[number - 1]);
        });
    });
    
    it('k minimum test:sorted', () => {
        const sorted = helpers.quick_sort(arr.slice());
        const minNumbers = [1, 2, 3, 4, 15, 100, arr.length];
        minNumbers.forEach((number) => {
            expect(helpers.minimum(sorted, number)).toBe(sorted[number - 1]);
        });
    });
    
    it('k minimum test: null case', () => {
        expect(helpers.minimum([1], 2)).toBe(null);
    })

    it('k maximum test: null case', () => {
        expect(helpers.maximum([1], 2)).toBe(null);
    })

    it('k maximum test:reverse order', () => {
        const reverseOrder = helpers.quick_sort(arr.slice()).reverse();
        const sorted = helpers.quick_sort(arr.slice());
        const maxNumbers = [1, 2, 3, 4, 15, 100, arr.length];
        maxNumbers.forEach((number) => {
            expect(helpers.maximum(reverseOrder, number)).toBe(sorted[sorted.length - number - 1]);
        });
    });

    it('k maximum test:random order', () => {
        const randomOrder = arr.slice();
        const sorted = helpers.quick_sort(arr.slice());
        const maxNumbers = [1, 2, 3, 4, 15, 100, arr.length];
        maxNumbers.forEach((number) => {
            expect(helpers.maximum(randomOrder, number)).toBe(sorted[sorted.length - number - 1]);
        });
    });

    it('k maximum test:sorted', () => {
        const sorted = helpers.quick_sort(arr.slice());
        const maxNumbers = [1, 2, 3, 4, 15, 100, arr.length];
        maxNumbers.forEach((number) => {
            expect(helpers.maximum(sorted, number)).toBe(sorted[sorted.length - number - 1]);
        });
    })


});
