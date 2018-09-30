const istructers = require('../../build');

const { helpers } = istructers;

describe('helpers spec', () => {
    let arr = [];
    beforeEach(() => {
        arr = [];
        for (let i = 0; i < 5000; i++) {
            arr.push(Math.floor(Math.random() * 100));
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
});
