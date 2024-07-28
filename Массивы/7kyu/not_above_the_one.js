'use strict';

/*
Task
Implement a function which finds the numbers less than 2, and the indices of numbers greater than 1 in the given sequence, and returns them as a pair of sequences.

Return a nested array or a tuple depending on the language:

The first sequence being only the 1s and 0s from the original sequence.
The second sequence being the indexes of the elements greater than 1 in the original sequence.
Examples
[ 0, 1, 2, 1, 5, 6, 2, 1, 1, 0 ] => [ [ 0, 1, 1, 1, 1, 0 ], [ 2, 4, 5, 6 ] ]

*/

function binaryCleaner(arr) {
  const filtredNum = arr.filter((num) => num < 2);
  const indNum = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 1) {
      indNum.push(i);
    }
  }
  return [filtredNum, indNum];
}

console.log(binaryCleaner([0,1,2,1,0,2,1,1,1,0,4,5,6,2,1,1,0]));
console.log(binaryCleaner([0,1,1,2,0]));
console.log(binaryCleaner([2,2,0]));
console.log(binaryCleaner([0,1,2,1,0,2,1,1]));
console.log(binaryCleaner([1]));