'use strict';

/*
Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

'mean' - in case mean value is larger than median value
'median' - in case median value is larger than mean value
'same' - in case both mean and median share the same value
Reminder: Median

Array will always be valid (odd-length >= 3)
*/

function meanVsMedian(numbers) {
  const mean = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
  const sortedArr = numbers.toSorted((a, b) => a - b);
  const median = sortedArr[Math.floor(sortedArr.length / 2)];

  return mean > median ? 'mean' : median > mean ? 'median' : 'same';
}

console.log(meanVsMedian([1, 1, 1]));
console.log(meanVsMedian([1, 2, 37]));
console.log(meanVsMedian([7, 14, -70]));