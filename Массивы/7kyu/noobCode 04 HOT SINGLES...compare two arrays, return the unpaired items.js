'use strict';

/*
Write a function that takes two array arguments, and returns a new array populated with the elements that appear in either array, but not in both. Elements should only appear once in the returned array.

The order of the elements in the result should follow what appears in the first array, then the second one.

Examples
[1, 2, 3, 3], [3, 2, 1, 4, 5] --> [4, 5]

["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"] --> ["tartar", "domino"]

[77, "ciao"], [78, 42, "ciao"] --> [77, 78, 42]

[1, 2, 3, 3], [3, 2, 1, 4, 5, 4] --> [4,5]

[1, 2, 3] , [3, 3, 2, 1] --> []
*/

function hotSingles(arr1, arr2) {
  const result = [];

	for (let i = 0; i < arr1.length; i++) {
		if (!arr2.includes(arr1[i])) {
			result.push(arr1[i])
		}
	}
	for (let i = 0; i < arr2.length; i++) {
		if (!arr1.includes(arr2[i])) {
			result.push(arr2[i])
		}
	}
  return [...new Set(result)];
}

console.log(hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]));
