'use strict';


/*
Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

Example:

Arr: [1,3,4,4,4,4,5]

Example Arr: [4,1,2,3,5]

Result: [4,4,4,4,1,3,5]

*/


function exampleSort(arr,exampleArr){
    const result = [];

    for (let i = 0; i < exampleArr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[k] === exampleArr[i]) {
                result.push(arr[k])
            }
        }
    }

    return result
}

console.log(exampleSort([1,2,3,4,5],[2,3,4,1,5]));
console.log(exampleSort([1,2,3,3,3,4,5],[2,3,4,1,5]));
console.log(exampleSort([1,2,3,3,3,5],[2,3,4,1,5]));
console.log(exampleSort([1,2,3,3,3,5],[3,4,5,6,9,11,12,13,1,7,8,2,10]));



