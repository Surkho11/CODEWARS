'use strict';

// Complete the sort function so that it returns the items passed into it in alphanumerical order. Conveniently enough, the standard array sort method has been disabled for you so that you are forced to create your own.

// Example:

// [1,3,2]  =>  [1,2,3]

function sort(items){
    for (let i = 0; i < items.length; i++) {
        for (let j = 0; j < items.length; j++) {
            if (items[j] > items[j + 1]) {
                let tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp
            }
        }
    }
    return items
}

console.log(sort([1,3,2]));
console.log(sort([1,3,2,3,4,1]));
console.log(sort([4,1,3,2,2,3,4,1]));
console.log(sort(["abc", "adc", "acc"]));
console.log(sort([1,3,2]));