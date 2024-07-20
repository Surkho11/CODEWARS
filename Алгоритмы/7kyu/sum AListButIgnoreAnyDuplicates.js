'use strict';

// Please write a function that sums a list, but ignores any duplicated items in the list.

// For instance, for the list [3, 4, 3, 6] the function should return 10,
// and for the list [1, 10, 3, 10, 10] the function should return 4.

function sumNoDuplicates(numList) {
    const obj = {};
    let sum = 0;

    for (let i = 0; i < numList.length; i++) {
        if (obj[numList[i]]) {
            obj[numList[i]]++
        } else {
            obj[numList[i]] = 1
        }
    }

    for (let key in obj) {
        if (obj[key] === 1) {
            sum += +key
        }
    }
    return sum
}

console.log(sumNoDuplicates([3, 4, 3, 6]));