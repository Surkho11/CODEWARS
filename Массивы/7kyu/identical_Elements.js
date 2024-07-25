'use strict';

/*
Given two arrays of integers m and n, test if they contain at least one identical element. Return true if they do; false if not.

Your code must handle any value within the range of a 32-bit integer, and must be capable of handling either array being empty (which is a false result, as there are no duplicated elements).

*/

function duplicateElements(m, n) {
    // Проверяем, пуст ли один из массивов, и если это так, возвращаем false
    if (m.length === 0 || n.length === 0) {
        return false;
    }

    // Создаем множество из элементов первого массива
    const setM = new Set(m);

    // Проверяем, есть ли в множестве setM хотя бы один элемент из второго массива
    for (let i = 0; i < n.length; i++) {
        if (setM.has(n[i])) {
            return true;
        }
    }

    // Если общих элементов не найдено, возвращаем false
    return false;
}

console.log(duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9]));
console.log(duplicateElements([9, 8, 7], []));