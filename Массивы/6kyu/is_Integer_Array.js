'use strict';

/*
    Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.

*/

function isIntArray(arr) {
    // Если массив пуст возвращаем true
    if (arr.length === 0) {
        return true
    }

    // Фильтруем все элементы массива убераем нечисловые типы а также десятичные числа и NaN;
   const filteredArray = arr.filter(value => typeof value === 'number' && !isNaN(value) && Math.floor(value) === value);

    return filteredArray.length === arr.length
}

console.log(isIntArray([]));
console.log(isIntArray([1, 2, 3, 4]));
console.log(isIntArray([1, 2, 3, NaN]));