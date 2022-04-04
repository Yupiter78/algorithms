/*function quickSort(arr) {
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

const arrayForTest1 = [2, 5, 56, 1, 4, 7, 8, 3, 12, 34, 89, 12, 19];

quickSortRecursive(arrayForTest1, 0, arrayForTest1.length - 1);
console.log("arrayForTest_recursive:", arrayForTest1);

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

const arrayForTest2 = [2, 5, 56, 1, 4, 7, 8, 3, 12, 34, 89, 12, 19];
quickSortIterative(arrayForTest2);
console.log("arrayForTest_iterative:", arrayForTest2);*/

// меняем местами элементы в массивах:
function swap(arr, a, b) {
    /*let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;*/

    console.log(`[arr[${a}], arr[${b}]]:`, `${arr[a]} <= меняем местами элементы => ${arr[b]}`);
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

// сравниваем элементы:
const Compare = {
    LESS_THAN: -1,
    BIGGER_THAN: 1
};
function defaultCompare(a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

function quickSortCompare(arr, compare = defaultCompare) {
    console.log("arr:", arr);
    return quick(arr, 0, arr.length - 1, compare);
}
function quick(arr, left, right, compare) {
    let i;
    if (arr.length > 1) {
        i = partitionCompare(arr, left, right, compare);
        if (left < i - 1) {
            quick(arr, left, i - 1, compare);
        }
        if (i < right) {
            quick(arr, i, right, compare);
        }
    }
    console.log("_______ARR_______:", arr);
    return arr;
}
function partitionCompare(arr, left, right, compare) {
    console.log("=======right========:", right);

    const pivot = arr[Math.floor((right + left) / 2)];
    console.log("pivot:", pivot);
    /*Выбор опорного элемента играет важную роль.
        Если вы выберете первый элемент в качестве элемента pivot,
        то он даст худшую производительность в отсортированном массиве.
        Таким образом, всегда желательно выбрать средний элемент
    (длина массива, разделенная на 2) в качестве основного элемента*/
    let i = left;
    let j = right;
    while (i <= j) {
        const newArr = arr.slice(i, j + 1);
        console.log("newArr:", newArr);
        while (compare(arr[i], pivot) === Compare.LESS_THAN) {
            console.log("compare(arr[i], pivot) === Compare.LESS_THAN:", compare(arr[i], pivot) === Compare.LESS_THAN);

            console.log(`arr_i_[${i}]:`, arr[i]);
            console.log(`NEXT_compare(arr_i + 1_[${i + 1}]: ${arr[i + 1]}, pivot: ${pivot}) === Compare.LESS_THAN:`, compare(arr[i + 1], pivot) === Compare.LESS_THAN);
            console.log("_____________________I____________________");
            i++;
        }
        while (compare(arr[j], pivot) === Compare.BIGGER_THAN) {
            console.log("compare(arr[j], pivot) === Compare.BIGGER_THAN:", compare(arr[j], pivot) === Compare.BIGGER_THAN);

            console.log(`arr_j_[${j}]:`, arr[j]);
            console.log(`NEXT_compare(arr_j - 1_[${j - 1}]: ${arr[j - 1]}, pivot: ${pivot}) === Compare.BIGGER_THAN:`, compare(arr[j - 1], pivot) === Compare.BIGGER_THAN);
            console.log("______________________J___________________");
            j--;
        }
        /*const Compare = {
            LESS_THAN: -1,
            BIGGER_THAN: 1
        };
        function defaultCompare(a, b) {
            if (a === b) {
                return 0;
            }
            return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
        }

        function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;

    [arr[a], arr[b]] = [arr[b], arr[a]];
}*/

        if (i <= j) {
            swap(arr, i, j);
            i++;
            j--;
            console.log(`SWAP: i: ${i}, j: ${j}`);
        }

        console.log(`______NEXT_WHILE: i: ${i}, j: ${j}____________________`);

    }
    console.log("RETURN i:", i);
    return i;
}

const arrayForTest3 = [2, 5, 56, 1, 4, 7, 8, 3, 12, 34, 89, 12, 19];

quickSortCompare(arrayForTest3)
console.log("arrayForTest3:", arrayForTest3);