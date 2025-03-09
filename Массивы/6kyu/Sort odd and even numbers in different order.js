'use strict';

/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]
*/

function sortArray(array) {
	if (array.length === 0) return []
	const result = [];
  const arrayOfOddNumbers = array
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => b - a);
		console.log(arrayOfOddNumbers);
		const arrayOfEvenNumbers = array
    .filter((num) => num % 2 === 0)
    .sort((a, b) => a - b);
		console.log(arrayOfEvenNumbers);


		array.forEach(num => {
			if (num % 2 === 0) {
				result.push(arrayOfEvenNumbers.pop())
			} else {
				result.push(arrayOfOddNumbers.pop())
			}
		})


		return result;
}

console.log(sortArray([5, 3, 2, 8, 1, 4, 11]));
console.log(sortArray([2, 22, 37, 11, 4, 1, 5, 0]));
