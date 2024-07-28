'use strict';

/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]
The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

More examples in the test cases.

Good luck!
*/

function solve(arr) {
  const result = [];
  const sortedArr = arr.slice().sort((a, b) => a - b); // Копируем и сортируем массив

  while (sortedArr.length) {
    result.push(sortedArr.pop()); // Добавляем максимальный элемент
    if (sortedArr.length) {
      result.push(sortedArr.shift()); // Добавляем минимальный элемент
    }
  }

  return result;
}

// Примеры использования:
console.log(solve([15, 11, 10, 7, 12])); // [15, 7, 12, 10, 11]
console.log(solve([1, 2, 3, 4, 5])); // [5, 1, 4, 2, 3]
