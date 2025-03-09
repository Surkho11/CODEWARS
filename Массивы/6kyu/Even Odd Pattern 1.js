'use strict';

/*
Write a function that takes an array / list of numbers and returns a number.

See the examples and try to guess the pattern:

(1, 2, 6, 1, 6, 3, 1, 9, 6) => 393
(1, 2, 3)                   =>   5
(0, 2, 3)                   =>   3
(1, 0, 3)                   =>   3
(3, 2)                      =>   6
*/

function EvenOdd(arr){
	return arr.reduce((acc, num, i) => {
		if (i % 2 === 0) {
			return acc + num
		} else {
			return acc * num
		}
	}, 0)
}

console.log(EvenOdd([1,2,2,1,6,1,3,9,6,1]));
console.log(EvenOdd([1,2,3]));
