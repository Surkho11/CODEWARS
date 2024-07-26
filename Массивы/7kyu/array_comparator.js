'use strict';

/*
You have two arrays in this kata, every array contains unique elements only. Your task is to calculate number of elements in the first array which are also present in the second array.*/

function matchArrays(v, r) {
  let result = 0;
  const vSet = new Set(v);

  for (const key of r) {
    if (vSet.has(key)) result++;
  }

  return result;
}

console.log(matchArrays([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]));
