'use strict';

// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

// More examples in the test cases.

function repeats(arr){
    const obj = {};
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1
        }
    }

    for (const key in obj) {
        if (obj[key] === 1) {
            sum += +key
        }
    }

    return sum
};

console.log(repeats([4,5,7,5,4,8]));