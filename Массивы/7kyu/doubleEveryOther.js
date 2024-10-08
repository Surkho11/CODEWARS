'use strict';

// Write a function that doubles every second integer in a list, starting from the left.
// Example:
// For input array/list :
// [1,2,3,4]
// the function should return :
// [1,4,3,8]

const doubleEveryOther = function(a) {
    return a.map((num, i) => i % 2 !== 0 ? num * 2: num)
}

console.log(doubleEveryOther([1,2,3,4]));