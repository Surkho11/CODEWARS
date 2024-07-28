'use strict';

/*
    Return a new array that contains exactly the same elements as the input array, but with elements a and b swapped.

If the array has multiple copies of a, swap only the first one that appears in the array.
If the array has multiple copies of b, swap only the last one that appears in the array.
For example:

([1, 2, 3, 4], 2, 4) -> [1, 4, 3, 2]
([1, 2, 3, 4, 1, 2, 3, 4], 2, 4) -> [1, 4, 3, 4, 1, 2, 3, 2]
*/

function swapTwo(array, a, b) {
    // Создаем копию входного массива
    const newArr = [...array];

    // Находим индекс первого вхождения элемента a
    const firstA = newArr.indexOf(a);

    // Находим индекс последнего вхождения элемента b
    const lastB = newArr.lastIndexOf(b);

    // Меняем элементы местами
    if (firstA !== -1 && lastB !== -1) {
        newArr[firstA] = b;
        newArr[lastB] = a;
    }

    return newArr;
}

// Примеры использования:
console.log(swapTwo([1, 2, 3, 4], 2, 4)); // [1, 4, 3, 2]
console.log(swapTwo([1, 2, 3, 4, 1, 2, 3, 4], 2, 4)); // [1, 4, 3, 4, 1, 2, 3, 2]
console.log(swapTwo([1, 2, 3, 2, 4], 2, 4)); // [1, 4, 3, 2, 2]
console.log(swapTwo([1, 2, 3, 4, 5], 2, 5)); // [1, 5, 3, 4, 2]


