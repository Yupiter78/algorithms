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