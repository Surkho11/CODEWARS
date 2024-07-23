'use strict';

// You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

// Input - {1,2,3,4,5,6} and {9,8,7,6} 
// Output - {1,9,2,8,3,7,4,6,5,6}

function compoundArray(a, b) {
    const result = [];
    const maxLength = Math.max(a.length, b.length);

    for (let i = 0; i < maxLength; i++) {
        if (i < a.length) {
            result.push(a[i]);
        }
        if (i < b.length) {
            result.push(b[i]);
        }
    }

    return result;
}



console.log(compoundArray([11, 12], [21, 22, 23, 24]));
console.log(compoundArray([2147483647,2147483646,2147483645,2147483644,2147483643], [9]))