'use strict';

// Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

// Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

// Note that numbers written as strings are strings and must be sorted with the other strings.



function dbSort(a){
    // Фильтрация чисел и строк
    const numArr = a.filter(item => typeof item === 'number');
    const strArr = a.filter(item => typeof item === 'string');

    // Сортировка чисел в порядке возрастания
    numArr.sort((a, b) => a - b);

    // Сортировка строк в алфавитном порядке
    strArr.sort();

    // Объединение отсортированных чисел и строк в один массив
    return [...numArr, ...strArr];
}

console.log(dbSort([6, 2, 3, 4, 5]));
console.log(dbSort([14, 32, 3, 5, 5]));
console.log(dbSort([1, 2, 3, 4, 5]));
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));
console.log(dbSort(["C", "W", "W", "W", 1, 2, 0]));
console.log(dbSort(["Apple",46,"287",574,"Peach","3","69",78,"Grape","423"]));