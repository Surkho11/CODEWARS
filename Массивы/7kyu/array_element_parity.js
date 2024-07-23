'use strict';

/* 
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

Examples:

[1, -1, 2, -2, 3] => 3

3 has no matching negative appearance

[-3, 1, 2, 3, -1, -4, -2] => -4

-4 has no matching positive appearance

[1, -1, 2, -2, 3, 3] => 3

(the only-positive or only-negative integer may appear more than once)
*/

function solve(arr){
    const obj = {};
    let result;
    
    for (let i = 0; i < arr.length; i++) {
        let numAbs = Math.abs(arr[i]);
        if (obj[numAbs]) {
            obj[numAbs] += arr[i]
        } else {
            obj[numAbs] = arr[i]
        }
    }

    for (const key in obj) {
        if (obj[key] > 0) {
            result = +key;
            break
        }
    }

    return arr.includes(result) ? result : result * -1;
    
   
};

console.log(solve([1,-1,2,-2,3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
console.log(solve([1, -1, 2, -2, 3, 3]));