'use strict';

/*
You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. If true, return true, otherwise false. Your solution should not modify the input array.
*/


function twins(myArray) {
  const obj = {};

  for (const key of myArray) {
    if (obj[key]) {
      obj[key]++;
    } else {
      obj[key] = 1;
    }
  }

  return Object.values(obj).every((num) => num === 2);
}

console.log(twins([1,2,3,1,2,3]));
console.log(twins([33,5,17,5]));