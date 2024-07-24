'use strict';

/*
    You are given an array of values.

    Sum every number value in the array, and any nested arrays (to any depth).

    Ignore all other types of values.
*/

function arraySum(arr) {
    // Удалить вложенность и преобразовать массив в одномерный
      const flatArray = arr.flat(Infinity);
  
      // Фильтровать только числовые значения
      const numbersOnly = flatArray.filter(item => typeof item === 'number');
  
      // Суммировать все числовые значения
      return numbersOnly.reduce((acc, num) => acc + num, 0);
  }

  console.log((arraySum([1, 2])));
  console.log(arraySum([1, 2, 3]));
  console.log(arraySum([1, 2, [1, 2]]));