'use strict';

// Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

// Examples
// ["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
// ["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
// ["a", "a", "a", "a", "a"] ==> false // 5x "a"

function checkThreeAndTwo(array) {
    const obj = {};
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (obj[array[i]]) {
            obj[array[i]]++
        } else {
            obj[array[i]] = 1
        }
    }
    
    for (const key in obj) {
        result.push(obj[key])
    }

    return result.includes(3) && result.includes(2)
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"]));
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]));