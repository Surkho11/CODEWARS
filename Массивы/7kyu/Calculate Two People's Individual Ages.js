'use strict';

/*
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

function getAges(sum, difference) {
	// Check for invalid inputs
	if (sum < 0 || difference < 0) {
			return null;
	}

	// Calculate the ages
	const x = (sum + difference) / 2;
	const y = (sum - difference) / 2;

	// Check if either age is negative
	if (x < 0 || y < 0) {
			return null;
	}

	// Return ages in descending order
	return x >= y ? [x, y] : [y, x];
}

console.log(getAges(24, 4));
console.log(getAges(63,-14));
console.log(getAges(63,14));

