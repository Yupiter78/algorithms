function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    // let pivot = arr[Math.round(arr.length / 2)];
    // const less = arr.filter((item) => item < pivot);
    // console.log("less:", less);
    // const more = arr.filter((item) => item >= pivot);
    // console.log("more:", more);

    // const pivot = arr[Math.round(arr.length / 2)];
    const pivot = arr[arr.length - 1],
        less = [],
        more = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            less.push(arr[i]);
        } else {
            more.push(arr[i]);
        }
    }


    return [...quickSort(less), pivot, ...quickSort(more)];

}

const testArr = [2, 5, 56, 1, 4, 7, 8, 3, 12, 34, 89, 12, 19];

console.log("quickSort(testArr):", quickSort(testArr));

function partition(arr, start, end){
    const pivotValue = arr[end];
    let pivotIndex = start;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]]
    return pivotIndex;
};

function quickSortRecursive(arr, start, end) {
    if (start >= end) {
        return;
    }

    let index = partition(arr, start, end);

    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
}

const arrayForTest = [2, 5, 56, 1, 4, 7, 8, 3, 12, 34, 89, 12, 19];

quickSortRecursive(arrayForTest, 0, arrayForTest.length - 1);
console.log("arrayForTest:", arrayForTest);