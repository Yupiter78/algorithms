function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

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
    const pivotValue = arr[end]; // присвоение значение последнего элемента массива в качестве опорного элемента;
    let pivotIndex = start;
    //  с помощью переменной pivotIndex отслеживается «среднее» положение, когда все элементы слева меньше,
    //  а все элементы справа больше, чем pivotValue.
    console.log("pivotIndex:", pivotIndex);
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
            pivotIndex++;
        }
    }

    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
    return pivotIndex;
}

function quickSortRecursive(arr, start, end) {
    if (start >= end) {
        return;
    }

    let index = partition(arr, start, end);

    quickSortRecursive(arr, start, index - 1);// сортировка массива с значениями меньше pivotValue;
    quickSortRecursive(arr, index + 1, end);// сортировка массива с значениями больше pivotValue;
}

const arrayForTest = [2, 5, 56, 1, 4, 7, 8, 3, 12, 34, 89, 12, 19];

quickSortRecursive(arrayForTest, 0, arrayForTest.length - 1);
console.log("arrayForTest_recursive:", arrayForTest);

function quickSortIterative(arr) {
    // Создание массива, который мы будем использовать в качестве стека, с помощью функций push() и pop()
    const stack = [];

    // Добавление всего исходного массива в виде «несортированного подмассива»
    stack.push(0);
    stack.push(arr.length - 1);

    // Цикл повторяется до тех пор, пока у нас есть несортированные подмассивы.
    while(stack[stack.length - 1] >= 0){

        // Извлечение верхнего несортированного подмассива
         const end = stack.pop();
        const start = stack.pop();

        const pivotIndex = partition(arr, start, end);

        // Если «слева» от опорной точки есть несортированные элементы,
        // мы добавляем этот подмассив в stack, чтобы отсортировать его позже.
        if (pivotIndex - 1 > start){
            stack.push(start);
            stack.push(pivotIndex - 1);
        }

        // Если «справа» от опорной точки есть несортированные элементы,
        // мы добавляем этот подмассив в stack, чтобы отсортировать его позже.
        if (pivotIndex + 1 < end){
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
}


quickSortIterative(arrayForTest);
console.log("arrayForTest_iterative:", arrayForTest);
