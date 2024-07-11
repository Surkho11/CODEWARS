'use strict';

// Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

// (You can mutate the input if you want, but it is a better practice to not mutate the input)

// Example:

// Input array

const arr = [
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]
// Output array

// [
//   [ 0,  4, -5, -9,  3 ],
//   [ 6,  0, -7,  4, -5 ],
//   [ 3,  5,  1, -9, -1 ],
//   [ 1,  5, -7,  0, -9 ],
//   [-3,  2,  1, -5,  1 ]
// ]



const matrix = function(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i][i] < 0) {
            array[i].splice(i, 1, 0);
            result.push(array[i])
        } else {
            array[i].splice(i, 1, 1);
            result.push(array[i])
        }
    }

    
    return result
}

console.log(matrix(arr));