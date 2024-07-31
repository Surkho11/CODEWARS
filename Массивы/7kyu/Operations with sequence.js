'use strict';


/*
Steps

Square the numbers that are greater than zero.
Multiply by 3 every third number.
Multiply by -1 every fifth number.
Return the sum of the sequence.
Example
{ -2, -1, 0, 1, 2 } returns -6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6
P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.
*/

const calc = function(a) {
  return a
    .map((num) => (num > 0 ? Math.pow(num, 2) : num))
    .map((num, i) => ((i + 1) % 3 === 0 && i + 1 !== 1 ? num * 3 : num))
    .map((num, i) => ((i + 1) % 5 === 0 && i + 1 !== 1 ? num * -1 : num))
    .reduce((acc, num) => acc + num, 0);
};

console.log(calc([ 0, 2, 1, -6, -3, 3 ]));