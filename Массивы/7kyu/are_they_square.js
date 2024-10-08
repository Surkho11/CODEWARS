'use strict';

/*
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

Examples:

isSquare([1, 4, 9, 16]) --> true

isSquare([3, 4, 7, 9]) --> false

isSquare([]) --> undefined
is_square([1, 4, 9, 16]) --> True

is_square([3, 4, 7, 9]) --> False

is_square([]) --> None
*/

const isSquare = function(arr){
    if (arr.length === 0) return undefined



    for (let i = 0; i < arr.length; i++) {
        let extractFromTheRoot = Math.sqrt(arr[i]);
        if (extractFromTheRoot !== Math.floor(extractFromTheRoot)) {
            return false
        }
    }

    return true;
}

console.log(isSquare([1, 4, 9, 16, 25, 36]));
console.log(isSquare([1, 2, 3, 4, 5, 6]));
console.log(isSquare([]));
console.log(isSquare([1, 2, 4, 15]));