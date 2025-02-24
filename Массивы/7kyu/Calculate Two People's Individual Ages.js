'use strict';

/*
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

function getAges(sum,difference){
  if (sum < 0 || difference < 0) return null

	const individualAge = Math.round((sum - difference) / 2);

	return [individualAge + difference, individualAge]
};

console.log(getAges(24, 4));
console.log(getAges(63,-14));
console.log(getAges(63,14));

