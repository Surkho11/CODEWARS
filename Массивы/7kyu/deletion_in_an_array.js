'use strict';

// The deleteValues function takes an array and removes elements that answer true to the pred function.

// For some reason, some of the elements of the array for which the predicate holds are not deleted...

// Can you fix the code?

function isEven(n) {
  return n % 2 === 0;
}

let array = [ 1, 3, 2, 4, 5, 7, 6, 8, 10, 9 ];

// function deleteValues(array, pred) {
//   let arr = [];
//   for(var i = 0; i < array.length; i++) {
//     if (pred(array[i]) ) {
//       continue
//     } else {
//       arr.push(array[i])
//     }
//   }
//   return arr;
// }

// function deleteValues(array, pred) {
//   for (var i = 0; i < array.length; i++) {
//     if (pred(array[i])) {
//       array.splice(i, 1);
//       i--; // Уменьшаем индекс, чтобы не пропустить следующий элемент
//     }
//   }
//   return array;
// }


// console.log(deleteValues(array, isEven));