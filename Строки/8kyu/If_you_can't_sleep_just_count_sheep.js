'use strict';

/*
If you can't sleep, just count sheep!!

Task:
Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/

const countSheep = function(num) {
  if (num === 0) return '';

  let resultStr = '';

  for (let i = 1; i <= num; i++) {
    resultStr += `${i} sheep...`;
  }

  return resultStr;
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));