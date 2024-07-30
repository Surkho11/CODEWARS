'use strict';

/*
Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

function arrayMash (array1, array2) {
    return array1.reduce((acc, item, i) => acc.concat(item, array2[i]), [])    // do the mash
}

console.log(arrayMash([1, 2, 3, 4, 5], ['a', 'b', 'c', 'd', 'e']));
console.log();
console.log();